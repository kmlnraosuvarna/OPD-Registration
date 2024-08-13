<%@ Control Language="C#" AutoEventWireup="true" CodeFile="WebCamControl.ascx.cs"
    Inherits="Private_FrontOffice_FOUserControls_WebCamControl" %>
<style type="text/css">
    #webcam, #canvas
    {
        width: 192px;
        border: 1px solid #ccc;
        background: #eee;
        -webkit-border-radius: 10px;
        -moz-border-radius: 10px;
        border-radius: 5px;
        padding: 5px;
        margin-bottom: 10px;
        margin-left: 60px;
        margin-right: 60px;
        height: 214px;
    }
    
    #webcam
    {
        position: relative;
        margin-bottom: 10px;
    }
    
    #webcam > span
    {
        z-index: 2;
        position: absolute;
        color: #eee;
        font-size: 10px;
        bottom: -16px;
        left: 152px;
    }
    
    #webcam > img
    {
        z-index: 1;
        position: absolute;
        border: 0px none;
        padding: 0px;
        bottom: -40px;
        left: 89px;
    }
    
    #webcam > div
    {
        border: 1px solid #ccc;
        position: absolute;
        right: -90px;
        padding: 5px;
        -webkit-border-radius: 8px;
        -moz-border-radius: 8px;
        border-radius: 8px;
        cursor: pointer;
    }
    
    #webcam a
    {
        background: #fff;
        font-weight: bold;
    }
    
    #webcam a > img
    {
        border: 0px none;
    }
    
    #canvas
    {
        border: 1px solid #ccc;
        background: #eee;
    }
    
    #flash
    {
        position: absolute;
        top: 0px;
        left: 0px;
        z-index: 5000;
        width: 100%;
        height: 500px;
        background-color: #c00;
        display: none;
    }
    
    object
    {
        display: block; /* HTML5 fix */
        position: relative;
        z-index: 1000;
        width: 180px;
    }
</style>
<script type="text/javascript">
    function Disable() {
        document.getElementById('<%= btnSubmit.ClientID%>').disabled = false;
        return false;
    }
</script>
<div class="PhotoUploadWrapper">
    <div class="PhotoUploadContent">
        <div class="PhotoUpoloadLeft">
            <div class="PhotoUpoloadRightHeader">
                Upload Photo
            </div>
            <div class="PhotoUpoloadLeftMainCont">
                <div id="webcam">
                </div>
                <div style="text-align: center; margin-bottom: 46px;">
                    <a onclick="return OnCapturePhoto();">
                        <%-- <input type="image" id="capture" 
                                src="../../../Assets/Grid_Icons/captureBTN.png"/></a>--%>
                        <input type="button" id="" onclick="return OnCapturePhoto();" value="Capture" class="button" />
                </div>
            </div>
        </div>
        <div class="PhotoUpoloadRight">
            <div class="PhotoUpoloadLeftHeader">
                Web Camera
            </div>
            <div class="photo_selected_BG">
                <canvas id="canvas" width="320" height="240"></canvas>
            </div>
            <div style="text-align: center;">
                <a id="filter" onclick="return UploadPic();">
                    <input type="image" id="btnSubmit" runat="server" src="~/Assets/Grid_Icons/submitBTN.png" /></a>
            </div>
        </div>
    </div>
    <asp:HiddenField ID="hdnWebCamCurrentPage" runat="server" />
</div>
<script type="text/javascript">

    var pos = 0;
    var ctx = null;
    var cam = null;
    var image = null;

    var filter_on = false;
    var filter_id = 0;

    function changeFilter() {
        if (filter_on) {
            filter_id = (filter_id + 1) & 7;
        }
    }

    function toggleFilter(obj) {
        if (filter_on = !filter_on) {
            obj.parentNode.style.borderColor = "#c00";
        } else {
            obj.parentNode.style.borderColor = "#333";
        }
    }

    jQuery("#webcam").webcam({

        //width: 272,
        width: 272,
        height: 202,
        mode: "callback",
        swffile: "/" + window.location.pathname.split('/')[1] + "/" + "JsCamFiles/jscam_canvas_only.swf",

        onTick: function (remain) {

            if (0 == remain) {
                jQuery("#status").text("Cheese!");
            } else {
                jQuery("#status").text(remain + " seconds remaining...");
            }
        },

        onSave: function (data) {
            var col = data.split(";");
            var img = image;

            if (false == filter_on) {

                for (var i = 0; i < 320; i++) {
                    var tmp = parseInt(col[i]);
                    img.data[pos + 0] = (tmp >> 16) & 0xff;
                    img.data[pos + 1] = (tmp >> 8) & 0xff;
                    img.data[pos + 2] = tmp & 0xff;
                    img.data[pos + 3] = 0xff;
                    pos += 4;
                }

            } else {

                var id = filter_id;
                var r, g, b;
                var r1 = Math.floor(Math.random() * 255);
                var r2 = Math.floor(Math.random() * 255);
                var r3 = Math.floor(Math.random() * 255);

                for (var i = 0; i < 320; i++) {
                    var tmp = parseInt(col[i]);

                    /* Copied some xcolor methods here to be faster than calling all methods inside of xcolor and to not serve complete library with every req */

                    if (id == 0) {
                        r = (tmp >> 16) & 0xff;
                        g = 0xff;
                        b = 0xff;
                    } else if (id == 1) {
                        r = 0xff;
                        g = (tmp >> 8) & 0xff;
                        b = 0xff;
                    } else if (id == 2) {
                        r = 0xff;
                        g = 0xff;
                        b = tmp & 0xff;
                    } else if (id == 3) {
                        r = 0xff ^ ((tmp >> 16) & 0xff);
                        g = 0xff ^ ((tmp >> 8) & 0xff);
                        b = 0xff ^ (tmp & 0xff);
                    } else if (id == 4) {

                        r = (tmp >> 16) & 0xff;
                        g = (tmp >> 8) & 0xff;
                        b = tmp & 0xff;
                        var v = Math.min(Math.floor(.35 + 13 * (r + g + b) / 60), 255);
                        r = v;
                        g = v;
                        b = v;
                    } else if (id == 5) {
                        r = (tmp >> 16) & 0xff;
                        g = (tmp >> 8) & 0xff;
                        b = tmp & 0xff;
                        if ((r += 32) < 0) r = 0;
                        if ((g += 32) < 0) g = 0;
                        if ((b += 32) < 0) b = 0;
                    } else if (id == 6) {
                        r = (tmp >> 16) & 0xff;
                        g = (tmp >> 8) & 0xff;
                        b = tmp & 0xff;
                        if ((r -= 32) < 0) r = 0;
                        if ((g -= 32) < 0) g = 0;
                        if ((b -= 32) < 0) b = 0;
                    } else if (id == 7) {
                        r = (tmp >> 16) & 0xff;
                        g = (tmp >> 8) & 0xff;
                        b = tmp & 0xff;
                        r = Math.floor(r / 255 * r1);
                        g = Math.floor(g / 255 * r2);
                        b = Math.floor(b / 255 * r3);
                    }

                    img.data[pos + 0] = r;
                    img.data[pos + 1] = g;
                    img.data[pos + 2] = b;
                    img.data[pos + 3] = 0xff;
                    pos += 4;
                }
            }

            if (pos >= 0x4B000) {
                ctx.putImageData(img, 0, 0);
                pos = 0;
                var canvas = document.getElementById("canvas");
                //  $.post("http://192.168.1.199/HaomaTesting/WebCam/UploadImage.aspx", { image: canvas.toDataURL("image/png") });

            }
        },

        onCapture: function () {
            webcam.save();
            jQuery("#flash").css("display", "block");
            jQuery("#flash").fadeOut(100, function () {
                jQuery("#flash").css("opacity", 1);
            });
        },

        debug: function (type, string) {

            jQuery("#status").html(type + ": " + string);

        },

        onLoad: function () {
            var cams = webcam.getCameraList();
            for (var i in cams) {
                jQuery("#cams").append("<li>" + cams[i] + "</li>");
            }
        }
    }
);

    function getPageSize() {

        var xScroll, yScroll;

        if (window.innerHeight && window.scrollMaxY) {
            xScroll = window.innerWidth + window.scrollMaxX;
            yScroll = window.innerHeight + window.scrollMaxY;
        } else if (document.body.scrollHeight > document.body.offsetHeight) { // all but Explorer Mac
            xScroll = document.body.scrollWidth;
            yScroll = document.body.scrollHeight;
        } else { // Explorer Mac...would also work in Explorer 6 Strict, Mozilla and Safari
            xScroll = document.body.offsetWidth;
            yScroll = document.body.offsetHeight;
        }

        var windowWidth, windowHeight;

        if (self.innerHeight) { // all except Explorer
            if (document.documentElement.clientWidth) {
                windowWidth = document.documentElement.clientWidth;
            } else {
                windowWidth = self.innerWidth;
            }
            windowHeight = self.innerHeight;
        } else if (document.documentElement && document.documentElement.clientHeight) { // Explorer 6 Strict Mode
            windowWidth = document.documentElement.clientWidth;
            windowHeight = document.documentElement.clientHeight;
        } else if (document.body) { // other Explorers
            windowWidth = document.body.clientWidth;
            windowHeight = document.body.clientHeight;
        }

        // for small pages with total height less then height of the viewport
        if (yScroll < windowHeight) {
            pageHeight = windowHeight;
        } else {
            pageHeight = yScroll;
        }

        // for small pages with total width less then width of the viewport
        if (xScroll < windowWidth) {
            pageWidth = xScroll;
        } else {
            pageWidth = windowWidth;
        }
        return [pageWidth, pageHeight];
    }

    window.addEventListener("load", function () {

        jQuery("body").append("<div id=\"flash\"></div>");

        var canvas = document.getElementById("canvas");

        if (canvas.getContext) {
            ctx = document.getElementById("canvas").getContext("2d");
            ctx.clearRect(0, 0, 320, 240);

            var img = new Image();

            // img.src = "/" + window.location.pathname.split('/')[1] + "/" + "Private/FrontOffice/static/logo.jpg";

            img.onload = function () {
                ctx.drawImage(img, 129, 129);
            }
            image = ctx.getImageData(0, 0, 320, 240);
        }

        var pageSize = getPageSize();

        jQuery("#flash").css({ height: pageSize[1] + "px" });

    }, false);

    window.addEventListener("resize", function () {

        var pageSize = getPageSize();

        jQuery("#flash").css({ height: pageSize[1] + "px" });

    }, false);


    var _BaseString = '';
    function UploadPic() {
        
        // generate the image data
        var canvas = document.getElementById("canvas");
        var dataURL = canvas.toDataURL("image/png");
        _BaseString = dataURL;
        // Sending the image data to Server
        $.ajax({
            type: 'POST',
            url: "/" + window.location.pathname.split('/')[1] + "/" + "Private/FrontOffice/FOUserControls/WebCamBaseImg.aspx",
            data: { imgBase64: dataURL },
            success: function () {
                
                alert("Done, Picture Uploaded.");
                window.parent.document.getElementById("ctl00_ContentPlaceHolder1_ImageUploadControl1_img").src = "/" + location.pathname.split('/')[1] + "/TempImage/" + fileName;
                window.parent.document.getElementById("ctl00_ContentPlaceHolder1_ImageUploadControl1_divWebCam").style.display = 'none';
//                $('.img').attr('src', _BaseString);
//                $('[id*=divWebCam]')[0].style.display = "none";

                return false;
            }
        });
        return false;
    }

    function OnCapturePhoto() {
        
        webcam.capture();

        void (0);
        return false;
    }


</script>
