<%@ Control Language="C#" AutoEventWireup="true" CodeFile="ImageUploadControl.ascx.cs"
    Inherits="Private_UserControls_ImageUploadControl" %>
<%@ Register Assembly="AjaxControlToolkit" Namespace="AjaxControlToolkit" TagPrefix="ajaxToolkit" %>
<%@ Register Src="~/Private/FrontOffice/FOUserControls/WebCamControl.ascx" TagName="WebCamControl"
    TagPrefix="WC" %>
<script type="text/javascript">
    function Upload() {
        document.getElementById("ctl00_ContentPlaceHolder1_imgUpload_img").ImageUrl = document.getElementById("ctl00_ContentPlaceHolder1_imgUpload_imageUpload").value;
    }

    function OnLoadWebCam() {

        if ($('[id*=hdnIsActiveMedia]')[0].value == 'N') {
            $(".stoast").toastText("Info", "Please Allow: Use Your Camera!", 5, 4);
            return false;
        }
        else {
            $('[id*=divWebCam]')[0].style.display = 'block';

            return false;
        }
    }
    function ClosingWebCam() {
        $('[id*=divWebCam]')[0].style.display = 'none';
        return false;
    }
    function OnLoadUploadPhotoPatient() {
        if (document.getElementById('<%= hdnImagDocName.ClientID %>').value == "REG") {
            $('[id*=divUploadPat]')[0].style.display = 'block';
        }
        else {
            $('[id*=divUploadPhoto]')[0].style.display = 'block';
        }
        return false;
    }
    function ClosingUploadPhoto() {
        if (document.getElementById('<%= hdnImagDocName.ClientID %>').value == "REG") {
            $('[id*=divUploadPat]')[0].style.display = 'none';
        }
        else {
            $('[id*=divUploadPhoto]')[0].style.display = 'none';
        }
        return false;
    }
    function OnBtnuploadClick() {

        //        var canvas = document.createElement("canvas");
        //        var dataURL = canvas.toDataURL("image/png");
        //var file =
        //        if (canvas.getContext) {
        //            ctx = canvas.getContext("2d");
        //            ctx.clearRect(0, 0, 320, 240);
        //        }
        //        ctx.clearRect(0, 0, 320, 240);
        //        ctx.drawImage(img, 129, 129);
        //        var img = new Image();

        //        img.src = $("[id*=imageUpload]").val();

        //        img.onload = function() {
        //            ctx.drawImage(img, 129, 129);
        //        }
        //        image = ctx.getImageData(0, 0, 320, 240);
        //        _BaseString = dataURL;
        //        var _page = $('[id*=hdnWebCamCurrentPage]').val();
        //        if (_page != null && _page != undefined && _page != "")
        //            $('[id*=hdnBaseImgCurrPage]').val(_page);
        //        console.log($('[id*=hdnBaseImgCurrPage]').val());
        //        // Sending the image data to Server
        //        $.ajax({
        //            type: 'POST',
        //            url: "/" + window.location.pathname.split('/')[1] + "/" + "Private/FrontOffice/FOUserControls/WebCamBaseImg.aspx",
        //            data: { imgBase64: dataURL },
        //            success: function() {
        //                alert("Done, Picture Uploaded.");
        //                $('.img').attr('src', _BaseString);
        //                $('[id*=divWebCam]')[0].style.display = "none";

        //                return false;
        //            }
        //        });
        //        return false;
    }
</script>
<asp:UpdatePanel ID="_upnl" runat="server">
    <ContentTemplate>
        <div class="photosign">
            <div class="photo">
                <asp:Image ID="img" runat="server" ImageUrl="~/Assets/img/photo.png" CssClass="img" />
                <%--<div class="control">
           
        </div>--%>
            </div>
            <div class="sign">
                <i class="icon-camera" onclick="return OnLoadWebCam();" title="Capture Photo"></i>
                <i class="icon-upload-1" onclick="OnLoadUploadPhotoPatient();" title="Upload Photo">
                </i><i class="icon-thumbs-up" title="Thumb Impression"></i>
            </div>
            <div class="sign" style="display: none;">
                <asp:Image ID="imgSign" runat="server" AlternateText="Signature" ImageUrl="~/Assets/img/sign.jpg"
                    Height="30px" />
                <div class="control">
                    <asp:ImageButton ID="btnload" runat="server" ImageUrl="~/Images/load_icon.gif" ToolTip="Load" />
                    <asp:ImageButton ID="btnrecord" runat="server" ImageUrl="~/Images/Record_icon.gif"
                        ToolTip="Record" />
                </div>
            </div>
        </div>
        <asp:HiddenField ID="hdnSignPath" runat="server" />
        <asp:HiddenField ID="hdnImgPath" runat="server" />
        <asp:HiddenField ID="hdnWebCamCurrentPage" runat="server" />
        <asp:HiddenField ID="hdnImagDocName" runat="server" />
        <asp:HiddenField ID="hdnIsActiveMedia" runat="server" />
        <%--<ajaxToolkit:ModalPopupExtender ID="mdlBrowse" CancelControlID="imgclose1" runat="server"
    PopupControlID="Eventtrans2" TargetControlID="btnbrowse" BackgroundCssClass="cmask">
</ajaxToolkit:ModalPopupExtender>--%>
        <ajaxToolkit:ModalPopupExtender ID="mdlSign" CancelControlID="imgclose1" runat="server"
            PopupControlID="signaturePanel" TargetControlID="btnload" BackgroundCssClass="cmask">
        </ajaxToolkit:ModalPopupExtender>
        <asp:Panel ID="signaturePanel" runat="server" Style="display: none; width: 40%;"
            class="modalpopup">
            <div class="pop-header">
                <h1>
                    Upload Signature
                </h1>
                <asp:Button ID="ImageButton1" runat="server" CssClass="cbutton" Text="&times;" />
            </div>
            <div class="pop-body" style="padding: 15px;">
                <asp:UpdatePanel ID="UpdatePanel1" runat="server" UpdateMode="Conditional">
                    <ContentTemplate>
                        <table border="0" cellpadding="5" cellspacing="5" width="100%" align="left" class="FormsCtrl">
                            <tr>
                                <td align="left">
                                    Upload Your Digtal Signature
                                </td>
                                <td align="left">
                                    <asp:FileUpload ID="SignatureUpload1" runat="server" />
                                </td>
                            </tr>
                            <tr>
                                <td align="left">
                                    &nbsp;
                                </td>
                                <td align="left" style="padding-top: 10px;">
                                    <asp:ImageButton runat="server" ImageUrl="~/Images/Btn/NewOk_btn.gif" Width="31"
                                        Height="19" border="0" ID="btnSignUpload" OnClick="btnSignUpload_Click" />
                                </td>
                            </tr>
                        </table>
                    </ContentTemplate>
                    <Triggers>
                        <asp:PostBackTrigger ControlID="btnSignUpload" />
                    </Triggers>
                </asp:UpdatePanel>
            </div>
        </asp:Panel>
        <div id="divWebCam" runat="server" class="masking">
            <div class="cmask">
            </div>
            <div class="clientpopup" style="margin-left: -350px; margin-top: -201px; width: 720px;
                height: 402px">
                <div class="pop-header">
                    <h1>
                        Capture Image
                    </h1>
                    <asp:Button buttonaction="cancelButton" ID="Button6" runat="server" OnClientClick="return ClosingWebCam();"
                        CssClass="cbutton" Text="&times;" />
                </div>
                <div class="pop-body grd" style="height: 364px;">
                    <iframe id="iframe2" style="width: 100%; border: 0px; height: 100%; overflow: hidden;">
                    </iframe>
                </div>
            </div>
        </div>
        <div id="divUploadPhoto" runat="server" class="masking">
            <div class="cmask">
            </div>
            <div class="clientpopup" style="margin-left: -250px; margin-top: -250px; width: 600px;
                height: 500px">
                <div class="pop-header">
                    <h1>
                        Upload Photo
                    </h1>
                    <asp:Button buttonaction="cancelButton" ID="Button1" runat="server" OnClientClick="return ClosingUploadPhoto();"
                        CssClass="cbutton" Text="&times;" />
                </div>
                <div class="pop-body" style="padding: 10px; height: 460px;">
                    <iframe id="iframe1" style="width: 580px; border: 0px; height: 443px; overflow: hidden;">
                    </iframe>
                </div>
            </div>
        </div>
        <div id="divUploadPat" runat="server" class="masking">
            <div class="cmask">
            </div>
            <div class="clientpopup" style="margin-left: -250px; margin-top: -203px; width: 500px;
                height: 160px">
                <div class="pop-header">
                    <h1>
                        Upload Photo
                    </h1>
                    <asp:Button buttonaction="cancelButton" ID="Button2" runat="server" OnClientClick="return ClosingUploadPhoto();"
                        CssClass="cbutton" Text="&times;" />
                </div>
                <div class="pop-body" style="padding: 15px; height: 75%;">
                    <table border="0" cellpadding="5" cellspacing="5" width="100%" align="left" class="FormsCtrl">
                        <tr>
                            <td align="left">
                                <b>Upload Your Photo</b>
                            </td>
                            <td align="left">
                                <asp:FileUpload ID="imageUpload" runat="server" />
                            </td>
                        </tr>
                        <tr>
                            <td align="left">
                                &nbsp;
                            </td>
                            <td align="left" style="padding-top: 10px;">
                                <asp:ImageButton runat="server" ImageUrl="~/Images/Btn/NewOk_btn.gif" ID="btnUpload"
                                    OnClick="btnUpload_Click" />
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    </ContentTemplate>
</asp:UpdatePanel>
<script type="text/javascript">
    $(document).ready(function () {
        document.getElementById('iframe1').src = _iniUrl + "Private/FrontOffice/MultiFileupload/UploadPatientPhoto.aspx";
        document.getElementById('iframe2').src = _iniUrl + "Private/FrontOffice/FOUserControls/Captureimage_New.aspx";

    });
</script>
