<%@ Page Language="C#" AutoEventWireup="true" CodeFile="UploadPatientPhoto.aspx.cs"
    Inherits="Private_FrontOffice_MultiFileupload_UploadPatientPhoto" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head id="Head1" runat="server">
    <title></title>
    <link rel="Stylesheet" type="text/css" href="CSS/uploadify.css" />
    <script type="text/javascript" src="scripts/jquery-1.3.2.min.js"></script>
    <link href="../../../Assets/iconfont/css/fontello.css" rel="stylesheet" type="text/css" />
    <style>
    .uploaddiv{}
      .uploadbtn{}
       .fileUploadQueue{height: 352px;
background: #f9f9f9;
margin-bottom: 10px;
border: 1px solid #cacaca;
border-radius: 5px;
margin-top: 5px; overflow:auto;}

.fileUploadQueue::-webkit-scrollbar,.FGheight::-webkit-scrollbar,.RGheight::-webkit-scrollbar{width:6px; height:8px;}
.fileUploadQueue::-webkit-scrollbar-track,.FGheight::-webkit-scrollbar-track,.RGheight::-webkit-scrollbar-track{-webkit-box-shadow:inset 0 0 6px #fdfdfd; border-radius:8px;}
.fileUploadQueue::-webkit-scrollbar-thumb,.FGheight::-webkit-scrollbar-thumb,.RGheight::-webkit-scrollbar-thumb{-webkit-box-shadow:inset 0 0 6px #000;border-radius:8px; background:#999;}
.fileUploadQueue::-webkit-scrollbar-button:start,.FGheight::-webkit-scrollbar-button:start,.RGheight::-webkit-scrollbar-button:start{background:#fff; }
.fileUploadQueue::-webkit-scrollbar-button:end,.FGheight::-webkit-scrollbar-button:end,.RGheight::-webkit-scrollbar-button:end{background:#fff;  }


a.lnkbtn
{ 
		text-transform: none; margin: 0px !important;padding: 4px 4px;
        cursor: pointer;display: inline-block;text-align: center; vertical-align: middle;
        white-space: nowrap; border-radius: 0px; text-decoration:none;
        font-family:Arial;font-size: 14px;;

	color: #FFFFFF; border: 0px !important; background: #01a2d8; border-radius:3px;
	background-position:-5px -33px;border-radius: 3px 3px 3px 3px;
	-moz-box-shadow:inset -1px 0px 2px 1px  #066f92;
	-webkit-box-shadow:inset -1px 0px 2px 1px  #066f92;
	box-shadow:inset -1px 0px 2px 1px  #066f92;
}
      
    </style>
    <script type="text/javascript">


        function OnPatPhotoUpload() {
            var _BaseString = base64data; // document.getElementById('imgTEst').innerHTML;
            $.ajax({
                type: 'POST',
                url: "/" + window.location.pathname.split('/')[1] + "/" + "Private/FrontOffice/FOUserControls/WebCamBaseImg.aspx",
                data: { imgBase64: _BaseString },
                success: function () {
                    window.parent.document.getElementById("ctl00_ContentPlaceHolder1_ImageUploadControl1_img").src = _BaseString;
                    window.parent.document.getElementById("ctl00_ContentPlaceHolder1_ImageUploadControl1_divUploadPhoto").style.display = 'none';
                    return false;
                }
            });
            return false;
        }




        var base64data = "";
        function encodeFile(element) {
            var file = element.files[0];
//            if (file.type == "image/jpeg") {
//                alert("Uploading the photo supports only of type PNG/GIF.");
//                return false;
//            }
//            else {
                var reader = new FileReader();
                reader.onload = function (fileLoadedEvent) {
                    var srcData = fileLoadedEvent.target.result;
                    var newImage = document.createElement('img');
                    newImage.width = "114";
                    newImage.height = "115";
                    newImage.src = srcData;
                    base64data = srcData;
                    document.getElementById('imgTEst').innerHTML = newImage.outerHTML;
                    console.log('result:' + document.getElementById('imgTEst').innerHTML);
                }
                reader.readAsDataURL(file);
//            }
        }
    </script>
</head>
<body style="overflow: hidden;">
    <form id="form1" runat="server">
    <asp:HiddenField ID="hdnupload" runat="server" />
    <asp:FileUpload ID="FileUpload1" runat="server" Style="display: none;" />
    <input type="file" onchange="encodeFile(this)" />
    <asp:TextBox ID="txtNote" runat="server" TextMode="MultiLine" CssClass="formtextbox"
        Style="display: none;"></asp:TextBox>
    <div id="imgTEst">
    </div>
    <div class="uploadbtn">
        <input type="button" class="cambtn" id="btnpatphotoUpload" value="Upload" onclick="OnPatPhotoUpload();" />
   
    </div>
    </form>
</body>

</html>
