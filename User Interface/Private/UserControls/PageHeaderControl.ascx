<%@ Control Language="C#" AutoEventWireup="true" CodeFile="PageHeaderControl.ascx.cs"
    Inherits="Private_UserControls_PageHeaderControl" %>
<%@ Register Assembly="AjaxControlToolkit" Namespace="AjaxControlToolkit" TagPrefix="ajaxToolkit" %>
<%@ Register Src="~/Private/UserControls/DMSControl.ascx" TagName="DMSControl" TagPrefix="uc1" %>
<%@ Register Src="~/Private/UserControls/MultipleFileUpload.ascx" TagName="MultipleFileUpload"
    TagPrefix="uc6" %>
<%@ Register Src="~/Private/UserControls/ExportGrid.ascx" TagName="ExportData" TagPrefix="Expdata" %>
<script type="text/javascript">
    function Fn_WrongPwd() {
        $(".stoast").toastText("Info", "Transaction password is wrong", 5, 2);
        return false;
    }
    function Fn_NoData() {
        $(".stoast").toastText("Info", "Please Enter Password", 5, 2);
        return false;
    }
    function OnSwapImageNames(id, imgName, replaceName) {
        var _path = id.src;
        _path = _path.replace(imgName, replaceName);
        id.src = _path;
    }

    function ShoworHide() {
        $find('<%= ModalPopupExtender2.ClientID %>').hide();
        $find('<%= ModalPopupExtender3.ClientID %>').show();
    }

    function ShoworHide1() {
        $find('<%= ModalPopupExtender3.ClientID %>').hide();
        $find('<%= ModalPopupExtender2.ClientID %>').show();
    }


    function CloseExtendar() {
        $(document).ready(function (e) {
            var model = $find('<%= ModalPopupExtender3.ClientID %>');
            if (model != null)
                model.hide();
            e.preventDefault();

        });
    }
                                                
</script>
<asp:UpdatePanel ID="UpdatePanel4" runat="server">
    <ContentTemplate>
        <div class="export" id="divexport" runat="server">
            <Expdata:ExportData ID="ExportData1" runat="server" />
        </div>
        <table border="0" cellpadding="0" cellspacing="0" align="left" style="width: 100%">
            <tr>
                <td valign="top" style="padding-top: 2px;">
                    <table border="0" cellpadding="0" cellspacing="0" align="left">
                        <tr>
                            <td valign="bottom">
                                <asp:ImageButton AccessKey="A" ID="imgadd" runat="server" ImageUrl="~/Images/Header_btns/addnew.gif" />
                            </td>
                            <td valign="bottom">
                                <asp:ImageButton ID="imgbtnEdit" AccessKey="E" runat="server" ImageUrl="~/Images/Header_btns/edit.gif" />
                            </td>
                            <td valign="bottom">
                                <asp:ImageButton ID="imgdelete" runat="server" AccessKey="D" ImageUrl="~/Images/Header_btns/delete.gif" />
                            </td>
                            <td valign="bottom">
                                <asp:ImageButton ID="imgconfiguration" runat="server" AccessKey="Q" ImageUrl="~/Images/Header_btns/configuration.gif" />
                            </td>
                            <td valign="bottom">
                                <%-- <span onclick="return onBeginRequest();">--%>
                                <asp:ImageButton ID="imgbtnSave" runat="server" AccessKey="S" ImageUrl="~/Images/Header_btns/saveandclose.gif" />
                                <%-- </span>--%>
                            </td>
                            <td valign="bottom">
                                <asp:ImageButton ID="imgbtnclear" runat="server" AccessKey="W" ImageUrl="~/Images/Header_btns/clear.gif" />
                            </td>
                            <td valign="bottom">
                                <asp:ImageButton ID="imgbtncancel" runat="server" AccessKey="C" ImageUrl="~/Images/Header_btns/cancel.gif" />
                            </td>
                            <td valign="bottom">
                                <asp:ImageButton ID="imgBtnReload" runat="server" AccessKey="R" ImageUrl="~/Images/Header_btns/reload.gif" />
                            </td>
                            <td valign="bottom">
                                <asp:ImageButton ID="imgBtnApproved" runat="server" Visible="false" ImageUrl="~/Images/Header_btns/approve.gif" />
                            </td>
                            <td valign="bottom">
                                <asp:ImageButton ID="imgdirectPrint" runat="server" Visible="false" AccessKey="P"
                                    OnClientClick="return PrintConfirmationCheck(this);" ImageUrl="~/Images/Header_btns/print.gif" />
                            </td>
                            <td valign="bottom">
                                <asp:ImageButton ID="imgDmsUpload" runat="server" Visible="false" AccessKey="P" ImageUrl="~/Images/Header_btns/DmsUpload.png" />
                            </td>
                            <td valign="bottom">
                                <asp:ImageButton ID="imgDmsView" runat="server" Visible="false" AccessKey="P" ImageUrl="~/Images/Header_btns/DmsView.png" />
                            </td>
                            <td valign="bottom">
                                <asp:ImageButton ID="imgDmsDownload" runat="server" Visible="false" AccessKey="P"
                                    ImageUrl="~/Assets/img/ph_empty_btn.png" CssClass="PHdmsdownload" OnClientClick="return onFileDowload('Header');" />
                            </td>
                            <td valign="bottom">
                                <asp:ImageButton ID="imgbacktodah" runat="server" Visible="false" ImageUrl="~/Images/Header_btns/backdash.gif" />
                                <%--OnClientClick="javascript:window.history.back();"--%>
                            </td>
                            <div class="pagebut" style="display: none; float: left" id="divUserTran"  runat="server">
                                <div id="divShowHide" style="background: rgb(255, 255, 255); border: 1px solid #b3b3b3;
                                    z-index: 9; border-radius: 3px; float: left; padding: 2px; margin-left: 20px" runat="server">
                                    <asp:RadioButtonList ID="radiousertran" runat="server" CssClass="chk-list1" Style="margin: 0px !important;"
                                        RepeatDirection="Horizontal" RepeatLayout="Flow">
                                    </asp:RadioButtonList>
                                </div>
                            </div>
                            <td>
                                <ajaxToolkit:ModalPopupExtender ID="ModalPopupExtender1" BackgroundCssClass="modalBackground"
                                    CancelControlID="imgclose1" runat="server" PopupControlID="Eventtrans2" TargetControlID="imgconfiguration">
                                </ajaxToolkit:ModalPopupExtender>
                                <asp:Panel ID="Eventtrans2" runat="server" Style="display: none; width: 35%;">
                                    <table width="100%" border="0" cellpadding="0" cellspacing="0" align="center">
                                        <tr>
                                            <td width="3%" height="3" class="header_corner_left1">
                                            </td>
                                            <td width="92%" class="header_corner_middle1">
                                            </td>
                                            <td width="5%" class="header_corner_right1">
                                            </td>
                                        </tr>
                                        <tr>
                                            <td width="3%" height="22" class="header-left1">
                                            </td>
                                            <td width="92%" class="header-middle1">
                                                <table width="100%" border="0" cellpadding="0" cellspacing="0">
                                                    <tr>
                                                        <td align="left">
                                                            Configuration
                                                        </td>
                                                        <td align="right">
                                                            <asp:ImageButton ID="imgclose1" runat="server" ImageUrl="~/Images/close.gif" />
                                                        </td>
                                                    </tr>
                                                </table>
                                            </td>
                                            <td width="5%" class="header-right1">
                                            </td>
                                        </tr>
                                        <tr>
                                            <td width="3%" height="5" class="window-content-left1">
                                            </td>
                                            <td width="92%" align="center" class="window-content-mid1" style="padding: 5px;">
                                                <table border="0" bgcolor="#FFFFFF" cellpadding="2" cellspacing="2" width="100%"
                                                    align="center">
                                                    <tr>
                                                        <td align="left">
                                                            <asp:CheckBoxList RepeatColumns="2" CssClass="Chkbox" RepeatDirection="Horizontal"
                                                                ID="chkConfigColumns" runat="server">
                                                            </asp:CheckBoxList>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td align="left" style="padding-left: 10px;">
                                                            Page Size &nbsp;&nbsp;
                                                            <asp:DropDownList ID="ddlConfigPage" runat="server" CssClass="ComboBoxDropDown">
                                                                <asp:ListItem Value="10">10</asp:ListItem>
                                                                <asp:ListItem Value="15">15</asp:ListItem>
                                                                <asp:ListItem Value="20">20</asp:ListItem>
                                                            </asp:DropDownList>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td align="center" style="padding: 5px 0px 0px 0px;">
                                                            <asp:ImageButton ID="imgBtnSaveConfig" runat="server" Style="vertical-align: top;"
                                                                ImageUrl="~/Images/Btn/NewOk_btn.gif" />
                                                            <asp:ImageButton ID="ImageButton9" runat="server" Style="vertical-align: top;" ImageUrl="~/Images/Btn/Newcancel_btn.gif" />
                                                        </td>
                                                    </tr>
                                                </table>
                                            </td>
                                            <td width="5%" class="window-content-right1">
                                            </td>
                                        </tr>
                                        <tr>
                                            <td width="3%" height="10" class="window-bot-left1">
                                            </td>
                                            <td width="92%" class="window-bot-mid1">
                                            </td>
                                            <td width="5%" class="window-bot-right1">
                                            </td>
                                        </tr>
                                    </table>
                                </asp:Panel>
                            </td>
                            <td>
                            </td>
                        </tr>
                    </table>
                </td>
                <td id="tdindicares" runat="server" align="right" style="padding: 0 5px 0 0; display: none;">
                    <asp:Image ID="box" runat="server" ImageUrl="~/Images/box.gif" />
                    &nbsp;
                    <asp:Label ID="lblMsg" Text="Indicates Mandatory Fields" runat="server"></asp:Label>
                </td>
                <td id="td1" runat="server" align="right" style="padding: 0 5px 0 0;">
                </td>
                <td align="right" width="20px">
                    <a href="../Help/Help.aspx?type=DB" id="a1" runat="server">
                        <asp:ImageButton ID="ImageButton3" runat="server" ToolTip="DB HELP" ImageAlign="Middle"
                            ImageUrl="~/Images/Header_btns/databaseicon.png" /></a>
                </td>
                <td align="right" width="20px">
                    <a href="../Help/HelpContent.aspx" id="aHelpContent" runat="server">
                        <asp:ImageButton ID="imgbtnHelpAdd" runat="server" ToolTip="Add" ImageAlign="Middle"
                            ImageUrl="~/Images/Header_btns/add.png" /></a>
                </td>
                <td align="right" width="20px">
                    <a href="../Help/Help.aspx?type=DH" id="aHelp" runat="server">
                        <asp:ImageButton ID="imgbtnHelp" runat="server" ToolTip="Help" ImageAlign="Middle"
                            ImageUrl="~/Images/Header_btns/help.png" /></a>
                </td>
                <td align="right" width="20px">
                    <a href="../Help/ManualContent.aspx" id="UmanualHelpContent" runat="server" style="display: none;">
                    </a>
                    <asp:ImageButton ID="ImgBtnUManualAdd" runat="server" BackColor="Green" PostBackUrl="~/Private/Help/ManualContent.aspx"
                        ToolTip="AddUserManual" ImageAlign="Middle" ImageUrl="~/Images/Header_btns/add.png" />
                </td>
                <td align="right" width="20px">
                    <a href="../Help/ManualHelp.aspx" id="UmanualHelp" runat="server">
                        <asp:ImageButton ID="ImgBtnUManualHelp" runat="server" BackColor="Green" ToolTip="UserManualHelp"
                            ImageAlign="Middle" ImageUrl="~/Images/Header_btns/help.png" /></a> <a href="../Help/Help.aspx?type=DB"
                                id="DBManual" runat="server">DB</a> <a href="../Help/Help.aspx?type=User" id="UserManual"
                                    runat="server">
                                    <asp:Image ID="UmanualHelp1" runat="server" ImageUrl="~/Images/Header_btns/help.png" /></a>
                </td>
            </tr>
        </table>
        <%--<uc1:DMSControl ID="DMSControl1" runat="server" />--%>
        <ajaxToolkit:ModalPopupExtender ID="ModalPopupExtender4" BackgroundCssClass="cmask"
            CancelControlID="btncancelupload" runat="server" PopupControlID="Pnlfileupload"
            TargetControlID="imgDmsUpload">
        </ajaxToolkit:ModalPopupExtender>
        <asp:Panel ID="Pnlfileupload" runat="server" Style="display: none; width: 45%;" class="modalpopup">
            <div class="pop-header">
                <h1>
                    Documents Upload
                </h1>
                <asp:Button ID="btncancelupload" runat="server" CssClass="cbutton" Text="&times;" />
            </div>
            <div class="pop-body" style="padding: 10px 5px 10px 5px; max-height: 350px; overflow: auto;">
                <uc6:MultipleFileUpload ID="MultipleFileUpload1" runat="server" />
            </div>
        </asp:Panel>
        <asp:LinkButton ID="lnkdummy3" runat="server" Style="display: none"></asp:LinkButton>
        <asp:LinkButton ID="lnkdummy" runat="server" Style="display: none"></asp:LinkButton>
        <ajaxToolkit:ModalPopupExtender ID="ModalPopupExtender2" BackgroundCssClass="modalBackground"
            CancelControlID="imgclose1" runat="server" PopupControlID="pnlOtherUser" TargetControlID="lnkdummy">
        </ajaxToolkit:ModalPopupExtender>
        <asp:Panel ID="pnlOtherUser" runat="server" Style="display: none; width: 30%;">
            <table width="100%" border="0" cellpadding="0" cellspacing="0" align="center">
                <tr>
                    <td width="3%" height="3" class="header_corner_left1">
                    </td>
                    <td width="92%" class="header_corner_middle1">
                    </td>
                    <td width="5%" class="header_corner_right1">
                    </td>
                </tr>
                <tr>
                    <td width="3%" height="22" class="header-left1">
                    </td>
                    <td width="92%" class="header-middle1">
                        <table width="100%" border="0" cellpadding="0" cellspacing="0">
                            <tr>
                                <td align="left">
                                    LOGIN
                                </td>
                                <td align="right">
                                    <asp:ImageButton ID="ImageButton1" runat="server" ImageUrl="~/Images/close.gif" />
                                </td>
                            </tr>
                        </table>
                    </td>
                    <td width="5%" class="header-right1">
                    </td>
                </tr>
                <tr>
                    <td width="3%" height="5" class="window-content-left1">
                    </td>
                    <td width="92%" align="center" class="window-content-mid1">
                        <div style="padding: 5px;">
                            <table cellpadding="0" cellspacing="0" align="center" width="100%" border="0" class="FormsCtrl">
                                <tr>
                                    <td align="left" width="25%">
                                        User Name
                                    </td>
                                    <td align="left" width="75%">
                                        <asp:TextBox ID="txtUserName" Width="70%" runat="server" CssClass="formtextbox"></asp:TextBox>
                                    </td>
                                </tr>
                                <tr>
                                    <td align="left" width="25%">
                                        Password
                                    </td>
                                    <td align="left" width="75%">
                                        <asp:TextBox ID="txtPassword" Width="70%" runat="server" CssClass="formtextbox" TextMode="Password"></asp:TextBox>
                                    </td>
                                </tr>
                                <tr>
                                    <td align="center" colspan="2">
                                        <asp:Label ID="lblMessage" runat="server" Text="lblMessage" CssClass="Errormsg" Visible="false"></asp:Label>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                    </td>
                                    <td align="left" style="padding-top: 5px;">
                                        <asp:ImageButton ID="imgBtnLogin" runat="server" ImageUrl="~/Images/Btn/login_btn.gif"
                                            OnClick="imgBtnLogin_ClickNusre" />
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </td>
                    <td width="5%" class="window-content-right1">
                    </td>
                </tr>
                <tr>
                    <td>
                    </td>
                    <td>
                        <asp:LinkButton ID="lnkNewUser" runat="server" OnClientClick="ShoworHide();return false;"
                            Text="Back to Transaction Code"></asp:LinkButton>
                    </td>
                </tr>
                <tr>
                    <td width="3%" height="10" class="window-bot-left1">
                    </td>
                    <td width="92%" class="window-bot-mid1">
                    </td>
                    <td width="5%" class="window-bot-right1">
                    </td>
                </tr>
            </table>
        </asp:Panel>
        <asp:LinkButton ID="lnkdummy1" runat="server"></asp:LinkButton>
        <ajaxToolkit:ModalPopupExtender ID="ModalPopupExtender3" BackgroundCssClass="modalBackground"
            CancelControlID="ImageButton2" runat="server" PopupControlID="pnlTransactioncd"
            TargetControlID="lnkdummy1">
        </ajaxToolkit:ModalPopupExtender>
        <asp:Panel ID="pnlTransactioncd" runat="server" Style="display: none; width: 30%;">
            <table width="100%" border="0" cellpadding="0" cellspacing="0" align="center">
                <tr>
                    <td width="3%" height="3" class="header_corner_left1">
                    </td>
                    <td width="92%" class="header_corner_middle1">
                    </td>
                    <td width="5%" class="header_corner_right1">
                    </td>
                </tr>
                <tr>
                    <td width="3%" height="22" class="header-left1">
                    </td>
                    <td width="92%" class="header-middle1">
                        <table width="100%" border="0" cellpadding="0" cellspacing="0">
                            <tr>
                                <td align="left">
                                    Transaction Code
                                </td>
                                <td align="right">
                                    <asp:ImageButton ID="ImageButton2" OnClientClick="return HideTransactionPopUp();"
                                        runat="server" ImageUrl="~/Images/close.gif" />
                                </td>
                            </tr>
                        </table>
                    </td>
                    <td width="5%" class="header-right1">
                    </td>
                </tr>
                <tr>
                    <td width="3%" height="5" class="window-content-left1">
                    </td>
                    <td width="92%" align="center" class="window-content-mid1" style="padding: 5px;">
                        <table cellpadding="0" cellspacing="0" align="center" width="100%" border="0" class="FormsCtrl">
                            <tr>
                                <td align="left">
                                    User Name
                                </td>
                                <td align="right">
                                    <asp:DropDownList ID="ddlUsers" runat="server">
                                    </asp:DropDownList>
                                </td>
                            </tr>
                            <tr>
                                <td align="left" width="40%">
                                    <asp:Label ID="lblTransactionpwd" runat="server" Text="Transaction Code"></asp:Label>
                                </td>
                                <td align="left" width="60%">
                                    <asp:TextBox ID="txtTransactionpwd" TextMode="Password" runat="server" CssClass="formtextbox"></asp:TextBox>
                                </td>
                            </tr>
                            <tr>
                                <td align="center" valign="middle" colspan="2" style="padding-top: 5px;">
                                    <table>
                                        <tr>
                                            <td align="right" valign="middle">
                                                <asp:ImageButton ID="imgSaveTransaction" runat="server" ImageAlign="Bottom" ImageUrl="~/Images/Btn/saveandclose_btn.gif"
                                                    OnClick="imgSaveTransaction_Click" />&nbsp;&nbsp;
                                            </td>
                                            <%--  <td align="left" valign="middle">
                                                <asp:LinkButton ID="lnkNewUser1" runat="server" Style="vertical-align: text-top;"
                                                    CssClass="Labelcolor" OnClientClick="ShoworHide1();return false;" Text="Login as another user"></asp:LinkButton>
                                            </td>--%>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
                        </table>
                    </td>
                    <td width="5%" class="window-content-right1">
                    </td>
                </tr>
                <tr>
                    <td width="3%" height="10" class="window-bot-left1">
                    </td>
                    <td width="92%" class="window-bot-mid1">
                    </td>
                    <td width="5%" class="window-bot-right1">
                    </td>
                </tr>
            </table>
            <asp:HiddenField ID="hdnUmrNo" runat="server" />
            <asp:HiddenField ID="hdnAdmnNo" runat="server" />
            <asp:HiddenField ID="hdnConsultationNum" runat="server" />
            <asp:HiddenField ID="hdnTransactionId" runat="server" />
            <asp:HiddenField ID="hdnStatus" runat="server" />
            <asp:HiddenField ID="hdndocId" runat="server" />
            <asp:HiddenField ID="hdnTokenSys" runat="server" />
            <asp:HiddenField ID="hdnextendedVal" runat="server" />
            <asp:HiddenField ID="hdnIstokencall" runat="server" />
            <asp:HiddenField ID="hdndownloadpath" runat="server" />
            <asp:HiddenField ID="hdnTimeFormat" runat="server" />
            <asp:HiddenField ID="hdnDateFormat" runat="server" />
            <asp:HiddenField ID="hdnDMSPermissions" runat="server" />
            <asp:HiddenField ID="hdnexportdata" runat="server" />
            <asp:HiddenField ID="hdnMobileMadatory" runat="server" />
            <asp:HiddenField ID="hdnMobileMinDigits" runat="server" />
            <asp:HiddenField ID="hdnMobileMaxDigits" runat="server" />
            <asp:HiddenField ID="hdninitialgridpagecount" runat="server" />
            <asp:HiddenField ID="hdnclientNameFor" runat="server" />
            <asp:HiddenField ID="hdntranpwdsave" runat="server" />
            <asp:HiddenField ID="hdnisshiftvaliate" runat="server" />
            <asp:HiddenField ID="hdnDocName" runat="server" />
            <asp:HiddenField ID="hdnShowExport" runat="server" />
            <asp:HiddenField ID="hdnIsMedClg" runat="server" />
            <asp:HiddenField ID="hdnEnableRuralBedssel" runat="server" Value="TRUE" />
            <asp:HiddenField ID="hdnEnableUrbanBedssel" runat="server" Value="FALSE" />
            <%--<asp:HiddenField ID="hdngdocformcd" runat="server" />--%>
        </asp:Panel>
        <div id="progress" style="display: none; z-index: 999999; top: 0; left: 0; height: 100%;
            width: 100%; position: absolute;" class="modalBackground">
            <div style="z-index: 999999; top: 50%; left: 50%; position: absolute;">
                <asp:Image ID="imgpro" runat="server" ImageUrl="~/Images/progress.gif" />
            </div>
        </div>
        <div id="somediv" title="Shiftlog" style="display: none;">
            <iframe id="thedialog" width="350" height="350"></iframe>
        </div>
    </ContentTemplate>
</asp:UpdatePanel>
<script type="text/javascript" language="javascript">

    function ShowModelDialog() {

        popUpObj = window.open("../../FrontOffice/IPBilling/FileUpload.aspx",
                    "ModalPopUp",
                    "toolbar=no," +
                    "scrollbars=no," +
                    "location=no," +
                    "statusbar=no," +
                    "menubar=no," +
                    "resizable=0," +
                    "width=300," +
                    "height=200," +
                    "left = 490," +
                    "top=300"
                    );
        popUpObj.focus();
    }

    function HidePopup() {

        var modelPopUp = $find('ctl00_ContentPlaceHolder1_UCHeaderControl_DMSControl1_insurmodelpopup');
        if (modelPopUp != null) {
            modelPopUp.hide();
            return false;
        }

    }
    function HideTransactionPopUp() {

        var tran_model_popup = $find('<%=ModalPopupExtender3.ClientID %>');
        if (tran_model_popup != null) {
            tran_model_popup.hide();
            return false;

        }

    }
    function PrintConfirmationCheck() {

        $(".smessagebox").scustommessagebox(1, "Confirm", 'Do you want a print?', HeaderPrintOK, '', HeaderPrintCancel);
    }

    function HeaderPrintCancel() {
    }
</script>
<script type="text/javascript">

    with (Sys.WebForms.PageRequestManager.getInstance()) {
        add_beginRequest(onBeginRequest);
        add_endRequest(onEndRequest);
    }
    function onBeginRequest(sender, args) {
        var prog = document.getElementById('progress');
        if (isNaN(parseInt(prog.length))) {
            prog.style.display = 'block';
        }
        else {
            for (var _index = 0; _index < prog.length; _index++) {
                prog[_index].style.display = 'block';
            }
        }
        var btnSave = document.getElementById('<%=imgbtnSave.ClientID %>');
        if (btnSave != null)
            btnSave.disabled = false;
    }

    function onEndRequest(sender, args) {
        var prog = document.getElementById('progress');
        prog.style.display = 'none';
        if (isNaN(parseInt(prog.length))) {
            prog.style.display = 'none';
        }
        else {
            for (var _index = 0; _index < prog.length; _index++) {
                prog[_index].style.display = 'none';
            }
        }
    }
</script>
<script type="text/javascript">
    function getPosition(str, m, i) {debugger;  return str.split(m, i).join(m).length; }
    function ShowShiftlogDialog() {
        var iHeight = 300;
        var iWidth = 250;
        var sFeatures = "dialogWidth:" + iWidth + "px;dialogHeight: " + iHeight + "px;scroll:no;resizable:yes";
        var ui = getPosition(document.location.pathname, '/', 2);
        var uisol = document.location.pathname.substring(document.location.pathname.indexOf('/') + 1, ui);
        var url = 'http://' + document.location.host + '/' + uisol + '/' + 'Private/Admin/ShiftLog.Aspx';

        window.showModalDialog(url, sFeatures);
        return false;
    }
    function ShiftLogCheck() {
        $(".stoast").toastText("Alert", 'Please Login for Shift', 5, 3);
        ShowShiftlogDialog();
    }
</script>
