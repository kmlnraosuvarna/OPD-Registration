<%@ Control Language="C#" AutoEventWireup="true" CodeFile="ImageUploadControl.ascx.cs"
    Inherits="Private_UserControls_ImageUploadControl" %>
<%@ Register Assembly="AjaxControlToolkit" Namespace="AjaxControlToolkit" TagPrefix="ajaxToolkit" %>

<script type="text/javascript">
    function Upload()
    {
    
    document.getElementById("ctl00_ContentPlaceHolder1_imgUpload_img").ImageUrl=document.getElementById("ctl00_ContentPlaceHolder1_imgUpload_imageUpload").value;
    }
    
      document.onkeydown = onkeydown;

    function onkeydown() {
  
        if (event.keyCode == 13 || event.keyCode == 27) {
            getDefautButtonName("imgclose1");
        }
    }
</script>

<table border="0" cellpadding="0" cellspacing="0" align="right" width="100%">
    <tr>
        <td align="center" style="padding-left: 3px; padding-top: 7px;">
            <asp:Image ID="img" runat="server" ImageAlign="Top" Width="99" Height="99" ImageUrl="~/Images/Photo.gif" />
        </td>
    </tr>
    <tr>
        <td align="center" style="padding: 5px 0px 5px 0px;">
            <asp:ImageButton ID="btnload" runat="server" Style="vertical-align: middle;" ImageUrl="~/Images/load_icon.gif"
                ToolTip="Load" />
            &nbsp;
            <asp:ImageButton ID="btnrecord" runat="server" Style="vertical-align: middle;" ImageUrl="~/Images/Record_icon.gif"
                ToolTip="Record" />
            &nbsp;
            <asp:ImageButton ID="btnbrowse" runat="server" Style="vertical-align: middle;" ImageUrl="~/Images/Browse_icon.gif"
                ToolTip="Browse" />
            <asp:HiddenField ID="hdnSignPath" runat="server" />
            <asp:HiddenField ID="hdnImgPath" runat="server" />
            <ajaxToolkit:ModalPopupExtender ID="mdlBrowse" CancelControlID="imgclose1" runat="server"
                PopupControlID="Eventtrans2" TargetControlID="btnbrowse" BackgroundCssClass="modalBackground">
            </ajaxToolkit:ModalPopupExtender>
            <ajaxToolkit:ModalPopupExtender ID="mdlSign" CancelControlID="imgclose1" runat="server"
                PopupControlID="signaturePanel" TargetControlID="btnload" BackgroundCssClass="modalBackground">
            </ajaxToolkit:ModalPopupExtender>
            <asp:Panel ID="Eventtrans2" runat="server" Style="display: none; width: 40%;" Height="50%">
                <div style="width: 100%;">
                    <table border="0" cellpadding="0" cellspacing="0" align="center" width="100%">
                        <tr>
                            <td>
                                <table width="100%" border="0" cellpadding="0" cellspacing="0" align="center">
                                    <tr>
                                        <td width="3%" height="3" class="header_corner_left">
                                        </td>
                                        <td width="92%" class="header_corner_middle">
                                        </td>
                                        <td width="5%" class="header_corner_right">
                                        </td>
                                    </tr>
                                    <tr>
                                        <td width="3%" height="22" class="header-left">
                                        </td>
                                        <td width="92%" class="header-middle">
                                            <table width="100%" border="0" cellpadding="0" cellspacing="0">
                                                <tr>
                                                    <td align="left">
                                                        Upload Photo
                                                    </td>
                                                    <td align="right">
                                                        <asp:ImageButton ID="imgclose1" runat="server" ImageUrl="~/Images/close.gif" />
                                                    </td>
                                                </tr>
                                            </table>
                                        </td>
                                        <td width="5%" class="header-right">
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <table width="100%" border="0" cellpadding="0" cellspacing="0" align="center">
                                    <tr>
                                        <td width="3%" height="5" class="window-content-left">
                                        </td>
                                        <td width="92%" align="center" class="window-content-mid" style="padding: 5px 5px 5px 5px;">
                                            <asp:UpdatePanel ID="upnlfupload" runat="server" UpdateMode="Conditional">
                                                <ContentTemplate>
                                                    <table border="0" bgcolor="#FFFFFF" cellpadding="5" cellspacing="5" width="100%"
                                                        align="left">
                                                        <tr>
                                                            <td align="left">
                                                                Upload Your Photo
                                                            </td>
                                                            <td colspan="1" align="left" style="padding: 5px 0px 0px 0px;">
                                                                <asp:FileUpload ID="imageUpload" runat="server" />
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td colspan="2" align="center" style="padding: 5px 0px 0px 0px;">
                                                                <asp:ImageButton runat="server" ImageUrl="~/Images/Btn/NewOk_btn.gif" onmouseover="this.src='../../../Images/Btn/NewOk_btnhover.gif'"
                                                                    onmouseout="this.src='../../../Images/Btn/NewOk_btn.gif'" Width="31" Height="19"
                                                                    border="0" ID="btnUpload" OnClick="btnUpload_Click" />
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </ContentTemplate>
                                                <Triggers>
                                                    <%--<asp:AsyncPostBackTrigger ControlID="btnUpload" />--%>
                                                    <asp:PostBackTrigger ControlID="btnUpload" />
                                                </Triggers>
                                            </asp:UpdatePanel>
                                        </td>
                                        <td width="5%" class="window-content-right">
                                        </td>
                                    </tr>
                                    <tr>
                                        <td width="3%" height="10" class="window-bot-left">
                                        </td>
                                        <td width="92%" class="window-bot-mid">
                                        </td>
                                        <td width="5%" class="window-bot-right">
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                    </table>
                </div>
            </asp:Panel>
            <asp:Panel ID="signaturePanel" runat="server" Style="display: none; width: 40%;"
                Height="50%">
                <div style="width: 100%;">
                    <table border="0" cellpadding="0" cellspacing="0" align="center" width="100%">
                        <tr>
                            <td>
                                <table width="100%" border="0" cellpadding="0" cellspacing="0" align="center">
                                    <tr>
                                        <td width="3%" height="3" class="header_corner_left">
                                        </td>
                                        <td width="92%" class="header_corner_middle">
                                        </td>
                                        <td width="5%" class="header_corner_right">
                                        </td>
                                    </tr>
                                    <tr>
                                        <td width="3%" height="22" class="header-left">
                                        </td>
                                        <td width="92%" class="header-middle">
                                            <table width="100%" border="0" cellpadding="0" cellspacing="0">
                                                <tr>
                                                    <td align="left">
                                                        Upload Signature
                                                    </td>
                                                    <td align="right">
                                                        <asp:ImageButton ID="ImageButton1" runat="server" ImageUrl="~/Images/close.gif" />
                                                    </td>
                                                </tr>
                                            </table>
                                        </td>
                                        <td width="5%" class="header-right">
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <table width="100%" border="0" cellpadding="0" cellspacing="0" align="center">
                                    <tr>
                                        <td width="3%" height="5" class="window-content-left">
                                        </td>
                                        <td width="92%" align="center" class="window-content-mid" style="padding: 5px 5px 5px 5px;">
                                            <asp:UpdatePanel ID="UpdatePanel1" runat="server" UpdateMode="Conditional">
                                                <ContentTemplate>
                                                    <table border="0" bgcolor="#FFFFFF" cellpadding="5" cellspacing="5" width="100%"
                                                        align="left">
                                                        <tr>
                                                            <td align="left">
                                                                Upload Your Digtal Signature
                                                            </td>
                                                            <td colspan="1" align="left" style="padding: 5px 0px 0px 0px;">
                                                                <asp:FileUpload ID="SignatureUpload1" runat="server" />
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td colspan="2" align="center" style="padding: 5px 0px 0px 0px;">
                                                                <asp:ImageButton runat="server" ImageUrl="~/Images/Btn/NewOk_btn.gif" onmouseover="this.src='../../../Images/Btn/NewOk_btnhover.gif'"
                                                                    onmouseout="this.src='../../../Images/Btn/NewOk_btn.gif'" Width="31" Height="19"
                                                                    border="0" ID="btnSignUpload" OnClick="btnSignUpload_Click" />
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </ContentTemplate>
                                                <Triggers>
                                                    <%--<asp:AsyncPostBackTrigger ControlID="btnUpload" />--%>
                                                    <asp:PostBackTrigger ControlID="btnSignUpload" />
                                                </Triggers>
                                            </asp:UpdatePanel>
                                        </td>
                                        <td width="5%" class="window-content-right">
                                        </td>
                                    </tr>
                                    <tr>
                                        <td width="3%" height="10" class="window-bot-left">
                                        </td>
                                        <td width="92%" class="window-bot-mid">
                                        </td>
                                        <td width="5%" class="window-bot-right">
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                    </table>
                </div>
            </asp:Panel>
        </td>
    </tr>
    <tr>
        <td align="center" style="padding: 1px 0px 3px 3px;">
            <asp:Image ID="imgSign" runat="server" ImageAlign="Top" Width="105px" Height="18px"
                ImageUrl="~/Images/sign.jpg" AlternateText="Signature" />
        </td>
    </tr>
</table>
