<%@ Page Language="C#" AutoEventWireup="true" CodeFile="Captureimage_New.aspx.cs"
    Inherits="Private_FrontOffice_FOUserControls_Captureimage_New" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head id="Head1" runat="server">
    <title>Webcam Photp capture cum Photo Editor</title>
    <link rel="stylesheet" type="text/css" href="../../../Assets/css/cropper.min.css" />
    <link rel="stylesheet" type="text/css" href="../../../Assets/css/jquery-ui.css" />
    <script src="../../../Assets/js/jquery.js" type="text/javascript"></script>
    <script src="../../../js/cropper.min.js" type="text/javascript"></script>
    <%--    <script type="text/javascript" src="../../../js/webcam.min.js"></script>     --%>
   <script type="text/javascript" src="../../../js/caman.full.min.js"></script>
     <%--<script type="text/javascript" src="../../../js/jquery-ui.min.js"></script>--%>
   
    <style>
        *
        {
            -webkit-box-sizing: border-box;
            -moz-box-sizing: border-box;
            box-sizing: border-box;
        }
        body
        {
            font-family: arial;
            font-style: normal;
            font-weight: 400;
            margin: 0px;
            padding: 0px;
            background: #eee;
        }
        h1, h2, h3, h4
        {
            margin: 0px;
            padding: 0px;
        }
        .Capturedimg
        {
            background: #eee;
            width: 220px;
            height: 180px;
        }
        
        .cambtn
        {
            border: 0px;
            background: #03abd5;
            border-radius: 3px;
            color: #fff;
            padding: 5px;    margin: 5px;
        }
        .editopt
        {
            height: 180px;
            border: 1px solid #cacaca;
            padding: 5px;
            border-radius: 5px;
        }
        .editall
        {
            padding: 5px 5px;
        }
        .editall label
        {
            display: block;
        }
        .editall input
        {
            display: block;
        }
        
        
        .d-none
        {
            display: none;
        }
    </style>
</head>
<body>
    <form id="silderInput" runat="server">
    <div style="padding: 10px; background: #fff;">
        <div style="">
            <div style="width: 220px; float: left; margin-right: 10px; margin-bottom: 10px; height: 240px;
                text-align: center;">
                <h4 style="float: left">
                    Web Camera
                </h4>
                <video id="capturevideo" width="230" height="230"></video>

                <div style="margin-top: 10px; text-align: center;">
                    <input type="button" class="cambtn" value="Capture Picture" id="btnCapture" style="" /></div>
            </div>
            <div style="width: 220px; float: left; height: 240px; text-align: center;">
                <h4>
                    Captured Photo</h4>
                        <div id="Captured" >
                </div>
       
                  <canvas id="capturecanvas" width="200" height="200" class="d-none"></canvas>
                <div style="margin-top: 10px; text-align: center;">
                    <input type="button" class="cambtn" value="Discard Photo" id="DiscardPhoto" class="d-none" />
                    <input type="button" class="cambtn" value="Crop Photo" id="CropPhoto" class="d-none" />
                    <input type="button" class="cambtn" value="Accept Cropped" id="AcceptCropped" class="d-none" />
                    <input type="button" class="cambtn" value="Undo Cropping" id="UndoCropped" class="d-none" />
                </div>
            </div>
            <div style="width: 220px; float: left; margin-left: 10px; height: 240px; text-align: center;">
                <h4>
                    Basic Image Adjustments</h4>
                <div class="editopt">
                    <form id="Form1">
                    <div class="sharp editall">
                        <label for="sharpen">Sharpness</label>
                        <input id="sharpen" name="sharpen" type="range" min="0" max="100" value="0" disabled="true" />
                    </div>
                    <div class="contrast editall">
                        <label for="contrast">Contrast</label>
                        <input id="contrast" name="contrast" type="range" min="-100" max="100" value="0"
                            disabled="true" />
                    </div>
                    <div class="FilterSetting editall">
                        <label for="contrast">Brightness</label>
                        <input type="range" id="brightness" name="brightness" min="-100" max="100" step="1"
                            value="0" data-filter="brightness" disabled="true" class="cambtn" />
                        <span class="FilterValue"></span>
                    </div>
                    </form>
                </div>
                <div id="accordion" style="display: none;">
                    <h4>
                        Advanced Image Adjustments</h4>
                    <div>
                        <label>
                            Saturation <span class="v" id="v-saturation">0</span></label>
                        <div class="slider" id="saturation" data-min="-100" data-max="100" data-val="0">
                        </div>
                        <label>
                            Vibrance <span class="v" id="v-vibrance">0</span></label>
                        <div class="slider" id="vibrance" data-min="-100" data-max="100" data-val="0">
                        </div>
                        <label>
                            Exposure <span class="v" id="v-exposure">0</span></label>
                        <div class="slider" id="exposure" data-min="-100" data-max="100" data-val="0">
                        </div>
                        <label>
                            Clip <span class="v" id="v-clip">0</span></label>
                        <div class="slider" id="clip" data-min="0" data-max="100" data-val="0">
                        </div>
                        <label>
                            Hue <span class="v" id="v-hue">0</span></label>
                        <div class="slider" id="hue" data-min="0" data-max="100" data-val="0">
                        </div>
                        <label>
                            Sepia <span class="v" id="v-sepia">0</span></label>
                        <div class="slider" id="sepia" data-min="0" data-max="100" data-val="0">
                        </div>
                        <label>
                            Noise <span class="v" id="v-noise">0</span></label>
                        <div class="slider" id="noise" data-min="0" data-max="100" data-val="0">
                        </div>
                    </div>
                    <h3>
                        Resize</h3>
                    <div>
                        <label>
                            Width</label>
                        <input value="300" id="resize-w" />
                        <label>
                            Height</label>
                        <input value="200" id="resize-h" />
                        <br />
                        <button id="resize">
                            Apply
                        </button>
                    </div>
                    <h3>
                        Rotate</h3>
                    <div>
                        <button id="rotate-cw">
                            Rotate CW
                        </button>
                        <button id="rotate-ccw">
                            Rotate CCW
                        </button>
                    </div>
                    <h3>
                        Presets</h3>
                    <div>
                        <button class="preset" data-preset="clarity">
                            Clarity
                        </button>
                        <button class="preset" data-preset="pinhole">
                            Pinhole
                        </button>
                        <button class="preset" data-preset="love">
                            Love
                        </button>
                        <button class="preset" data-preset="jarques">
                            Jarques
                        </button>
                        <button class="preset" data-preset="orangePeel">
                            Orange Peel
                        </button>
                        <button class="preset" data-preset="sinCity">
                            Sin City
                        </button>
                        <button class="preset" data-preset="grungy">
                            Grungy
                        </button>
                        <button class="preset" data-preset="oldBoot">
                            Old Boot
                        </button>
                        <button class="preset" data-preset="lomo">
                            Lomo
                        </button>
                        <button class="preset" data-preset="vintage">
                            Vintage
                        </button>
                        <button class="preset" data-preset="crossProcess">
                            Cross Process
                        </button>
                        <button class="preset" data-preset="concentrate">
                            Concentrate
                        </button>
                        <button class="preset" data-preset="glowingSun">
                            Glowing Sun
                        </button>
                        <button class="preset" data-preset="sunrise">
                            Sunrise
                        </button>
                        <button class="preset" data-preset="nostalgia">
                            Nostalgia
                        </button>
                        <button class="preset" data-preset="hemingway">
                            Hemingway
                        </button>
                        <button class="preset" data-preset="herMajesty">
                            Her Majesty
                        </button>
                        <button class="preset" data-preset="hazyDays">
                            Hazy Days
                        </button>
                    </div>
                </div>
                <div style="margin-top: 10px; text-align: center;">
                    <input type="button" class="cambtn" id="save" value="Upload" />
                    <input type="button" id="undoAll" class="cambtn" disabled="true" value="Undo All Adjustments" />
                    <input type="button" class="cambtn" value="Send to Server" id="ExportPhoto" style="display: none;"
                        onclick="savecam()" />
                </div>
            </div>
            <div style="clear: both;">
            </div>
        </div>
      <asp:HiddenField ID="hdnShowWebCam" runat="server" />
    </div>
    </form>
    <!-- Code to handle taking the snapshot and displaying it locally -->
    <script language="JavaScript">

         var videoCapture;
         $(document).ready(function () {
             videoCapture = document.getElementById('capturevideo');
         });

 $(document).ready(function () {
// if($("#hdnShowWebCam")[0].value=='Y')
// {
     if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        // access video stream from webcam
        navigator.mediaDevices.getUserMedia({ video: true }).then(function (stream) {
            // on success, stream it in video tag 
            window.localStream = stream;
            videoCapture.srcObject = stream;
             window.parent.document.getElementById("ctl00_ContentPlaceHolder1_ImageUploadControl1_hdnIsActiveMedia").value="Y";
            videoCapture.play();
            activateCamera();
        }).catch(e => {
            // on failure/error, alert message. 
           // alert("Please Allow: Use Your Camera!");
           window.parent.document.getElementById("ctl00_ContentPlaceHolder1_ImageUploadControl1_hdnIsActiveMedia").value="N";
           //  $(".stoast").toastText("Info", "Please Allow: Use Your Camera!", 5, 4);
        });
    }
//    }
});

$(document).on('click', '#btnCapture', function () {
    document.getElementById('capturecanvas').getContext('2d').drawImage(videoCapture, 0, 0, 230, 230);
                 $("#DiscardPhoto").show();
                 $("#CropPhoto").show();
                 $("#brightness").prop("disabled", false);
                 $("#contrast").prop("disabled", false);
                 $("#sharpen").prop("disabled", false);
                 $("#undoAll").prop("disabled", false);
                document.getElementById('Captured').innerHTML = '<img id="camanedit" src="' + capturecanvas.toDataURL('image/png') + '"/>';
});

$(document).on('click', '#DiscardPhoto', function () {
    // stop video streaming if any
//    localStream.getTracks().forEach(function (track) {
//        if (track.readyState == 'live' && track.kind === 'video') {
//            track.stop();
//           // deactivateCamera();
//        }
//    });
     $(this).hide();
     $("#CropPhoto").hide();
     $("#ExportPhoto").hide();
     $("#brightness").val("0");
     $("#contrast").val("0");
     $("#sharpen").val("0");
     $("#undoAll").prop("disabled", true);
});

         $(document).ready(function () {
             $('input[type=range]').change(applyFilters1);
             function applyFilters1() {
                 var sharpen = parseInt($('#sharpen').val());
                 var cntrst = parseInt($('#contrast').val());
                 var brightness = parseInt($('#brightness').val());
                 Caman('#camanedit', function () {  
                     this.revert(false);
                     this.sharpen(sharpen);
                     this.contrast(cntrst);
                     this.brightness(brightness);
                     this.render();
                 });
             }

         

             $(document).on("click", "#CropPhoto", function () {
                 $("#UndoCropped").show();
                 $("#AcceptCropped").show();
                 $("#DiscardPhoto").hide();
                 $("#CropPhoto").hide();

                 var image = document.querySelector('#camanedit');
                 var minAspectRatio = 0.5;
                 var maxAspectRatio = 1.5;
                 cropper = new Cropper(image, {
                     ready: function () {
                         var cropper = this.cropper;
                         var containerData = cropper.getContainerData();
                         var cropBoxData = cropper.getCropBoxData();
                         var aspectRatio = cropBoxData.width / cropBoxData.height;
                         var newCropBoxWidth;

                         if (aspectRatio < minAspectRatio || aspectRatio > maxAspectRatio) {
                             newCropBoxWidth = cropBoxData.height * ((minAspectRatio + maxAspectRatio) / 2);

                             cropper.setCropBoxData({
                                 left: (containerData.width - newCropBoxWidth) / 2,
                                 width: newCropBoxWidth
                             });
                         }
                     },
                     cropmove: function () {
                         var cropper = this.cropper;
                         var cropBoxData = cropper.getCropBoxData();
                         var aspectRatio = cropBoxData.width / cropBoxData.height;

                         if (aspectRatio < minAspectRatio) {
                             cropper.setCropBoxData({
                                 width: cropBoxData.height * minAspectRatio
                             });
                         } else if (aspectRatio > maxAspectRatio) {
                             cropper.setCropBoxData({
                                 width: cropBoxData.height * maxAspectRatio
                             });
                         }
                     }
                 });
             });

             $(document).on("click", "#UndoCropped", function () {
                 $(this).hide();
                 $("#AcceptCropped").hide();
                 $("#DiscardPhoto").show();
                 $("#CropPhoto").hide();
                 cropper.clear();
             });

             $(document).on("click", "#undoAll", function () {
                 $("#brightness").val("0");
                 $("#contrast").val("0");
                 $("#sharpen").val("0");
                 Caman('#camanedit', function () {
                     this.revert(true);
                 });
             });

             $(document).on("click", "#AcceptCropped", function () {
                 $(this).hide();
                 $("#UndoCropped").hide();
                 $("#DiscardPhoto").show();
                 $("#CropPhoto").show();

                 var cropped = cropper.getCroppedCanvas().toDataURL('image/');
                 document.getElementById('Captured').innerHTML = '';
                 document.getElementById('Captured').innerHTML = '<img id="camanedit" src="' + cropped + '"/>';
                 caman = Caman('#camanedit');

             });

//             $('#accordion').accordion({
//                 collapsible: true
//             });

//             $('button').button();
             var rotation = 0;
             function applyFilters() {
                 caman.revert(false);
                 $('.slider').each(function () {
                     var op = $(this).attr('id');
                     var value = $(this).data('val');
                     if (value === 0) {
                         return;
                     }
                     caman[op](value);
                 });
             }

             function resetFilters() {
                 $('.slider').each(function () {
                     var op = $(this).attr('id');
                     $('#' + op).slider('option', 'value', $(this).attr('data-val'));
                 });
             }


//             $('.slider').each(function () {
//                 var op = $(this).attr('id');
//                 $('#' + op).slider({
//                     min: $(this).data('min'),
//                     max: $(this).data('max'),
//                     val: $(this).data('val'),
//                     change: function (e, ui) {
//                         $('#v-' + op).html(ui.value);
//                         $(this).data('val', ui.value);

//                         if (e.originalEvent === undefined) {
//                             return;
//                         }
//                         applyFilters();
//                         caman.render();
//                     }
//                 });
//             });

             $('#rotate-cw').click(function () {
                 rotation += 90;
                 caman.rotate(90);
                 applyFilters();
                 caman.render();
             });

             $('#rotate-ccw').click(function () {
                 rotation -= 90;
                 caman.rotate(-90);
                 applyFilters();
                 caman.render();
             });

             $('#resize').click(function () {
                 caman.resize({
                     width: $('#resize-w').val(),
                     height: $('#resize-h').val()
                 });
                 applyFilters();
                 caman.render();
             });

             $('#crop').click(function () {
                 caman.crop($('#crop-w').val(), $('#crop-h').val(), $('#crop-x').val(), $('#crop-y').val());
                 applyFilters();
                 caman.render();
             });

             $('.preset').click(function () {
                 resetFilters();
                 var preset = $(this).data('preset');
                 caman.revert(true);
                 caman[preset]();
                 caman.render();
             });

             $('#undoAll').click(function () {
                 caman.reset();
                 caman.render();
                 resetFilters();
             });

             $('#save').click(function () {
                 UploadPic(camanedit.toDataURL('image/png'));
             });

             var _BaseString = '';
             function UploadPic(_BaseString) {
                 $.ajax({
                     type: 'POST',
                     url: "/" + window.location.pathname.split('/')[1] + "/" + "Private/FrontOffice/FOUserControls/WebCamBaseImg.aspx",
                     data: { imgBase64: _BaseString },
                     success: function () {

                      //   alert("Done, Picture Uploaded.");
                         window.parent.document.getElementById("ctl00_ContentPlaceHolder1_ImageUploadControl1_img").src = _BaseString;
                         window.parent.document.getElementById("ctl00_ContentPlaceHolder1_ImageUploadControl1_divWebCam").style.display = 'none';
                         return false;
                     }
                 });
                 return false;
             }
         });

         $(document).on("click", "#webcamera", function () {
             $("#btnCapture").trigger("click");
         });

         //         Webcam.set({
//             // live preview size
//             width: 220,
//             height: 180,

//             // device capture size
//             dest_width: 220,
//             dest_height: 180,

//             // final cropped size
//             crop_width: 220,
//             crop_height: 180,

//             // format and quality
//             image_format: 'jpeg',
//             jpeg_quality: 90
//         });

//         Webcam.attach('#webcamera');
//         function take_snapshot() {
//             Webcam.snap(function (data_uri) {
//                 document.getElementById('Captured').innerHTML = '<img id="camanedit" src="' + data_uri + '"/>';
//             });
//         }

//         function savecam() {
//             Caman('#camanedit', function () {
//                 this.render(function () {
//                     var image = this.toBase64();
//                     alert("The Image is sent to the server. ");
//                 });
//             });
//         }

//         function saveToServer(image) {
//             $.ajax({
//                 url: "",
//                 data: "data=" + encodeURIComponent(image),
//                 type: "POST",
//                 contentType: "application/x-www-form-urlencoded",
//                 success: function (result) {
//                     console.log(result);
//                 }
//             });
//         }



function activateCamera() {
   // $("#btnActivateCamera").addClass("d-none");
    $("#DiscardPhoto").removeClass("d-none");
    $("#CropPhoto").removeClass("d-none");
    $("#capturevideo").removeClass("d-none");
    $("#btnCapture").removeClass("d-none");
   // $("#capturecanvas").removeClass("d-none");
}

function deactivateCamera() {
    $("#DiscardPhoto").addClass("d-none");
  //  $("#btnActivateCamera").removeClass("d-none");
    $("#capturevideo").addClass("d-none");
    $("#btnCapture").addClass("d-none");
    $("#capturecanvas").addClass("d-none");
      $("#CropPhoto").addClass("d-none");

}
//  $(document).on("click", "#DiscardPhoto", function () {
//       $(this).hide();
//       $("#CropPhoto").hide();
//       $("#Captured").hide();
//       $("#ExportPhoto").hide();
//       $("#brightness").val("0");
//       $("#contrast").val("0");
//       $("#sharpen").val("0");
//       $("#undoAll").prop("disabled", true);
//   });
//    $(document).on("click", "#CapturePicture", function () {
//                 $("#Captured").show();
//                 $("#DiscardPhoto").show();
//                 $("#CropPhoto").show();
//                 take_snapshot();
//                 $("#brightness").prop("disabled", false);
//                 $("#contrast").prop("disabled", false);
//                 $("#sharpen").prop("disabled", false);
//                 $("#undoAll").prop("disabled", false);
//                 caman = Caman('#camanedit');
//   });
    </script>
</body>
</html>
