<%@ Control Language="C#" AutoEventWireup="true" CodeFile="DMSControl.ascx.cs" Inherits="UserControls_DMSControl" %>
<%@ Register Assembly="AjaxControlToolkit" Namespace="AjaxControlToolkit" TagPrefix="DMS" %>
<div>
    <asp:UpdatePanel ID="UpdatePanel1" runat="server">
        <ContentTemplate>
            <asp:ImageButton ID="ibtnUpload" runat="server" Style="display: none;" ImageUrl="~/Private/Graphics/asc.gif" />
            <div id="divPop" runat="server">
                <DMS:ModalPopupExtender ID="insurmodelpopup" runat="server" TargetControlID="ibtnUpload"
                    PopupControlID="pnl2" CancelControlID="btnClosing" BackgroundCssClass="modalBackground">
                </DMS:ModalPopupExtender>
                <asp:Panel ID="pnl2" runat="server" Style="display: none; width: 35%; height: auto;">
                    <div>
                        <table border="0" cellpadding="0" cellspacing="0" class="GridFormsCtrl" align="center"
                            width="100%">
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
                                                <asp:Label ID="lblTitle" runat="server" Text="File Upload"></asp:Label>
                                            </td>
                                            <td align="right">
                                                <asp:ImageButton ID="btnClosing" runat="server" ImageUrl="~/Images/close.gif" />
                                            </td>
                                        </tr>
                                    </table>
                                </td>
                                <td width="5%" class="header-right">
                                </td>
                            </tr>
                            <tr>
                                <td width="3%" height="5" class="window-content-left">
                                </td>
                                <td width="92%" align="center" class="window-content-mid" style="padding: 5px 5px 5px 5px;">
                                    <table cellpadding="3" cellspacing="3" border="0">
                                        <tr>
                                            <td align="left" width="30%">
                                                Upload Document<br />
                                                (In image format)
                                            </td>
                                            <td align="left" width="70%">
                                                <asp:FileUpload ID="fLoad"   runat="server" />
                                             
                                            </td>
                                        </tr>
                                        <tr style="display:none;">
                                            <td align="left">
                                                &nbsp;
                                            </td>
                                            <td align="left"> 
                                                <asp:TextBox ID="lblImg" runat="server" Width="97%" TextMode="MultiLine"
                                                    ReadOnly="true"></asp:TextBox>
                                            </td>
                                        </tr>
                                        <tr>
                                           <td align="left">
                                                Comments
                                            </td>
                                            <td align="left">
                                                <asp:TextBox ID="txtComments" runat="server" Width="97%" TextMode="MultiLine"></asp:TextBox>
                                            </td>
                                        </tr>
                                      
                                        <tr>
                                            <td align="left">
                                                &nbsp;
                                            </td>
                                            <td align="left">
                                            <asp:LinkButton ID="lnkSubmit" Style="display: none;" runat="server" Text="Submit"></asp:LinkButton>
                                                <asp:LinkButton ID="lnkUpload" runat="server"  OnClientClick="return GetFileName();" Text="Upload"></asp:LinkButton>
                                               
                                            </td>
                                        </tr>
                                    </table>
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
                    </div>
                </asp:Panel>
            </div>
            </div>
            <asp:HiddenField ID="hdnUmrNo" runat="server" Value="UMR10011386" />
            <asp:HiddenField ID="hdnConsNo" runat="server" Value="OP001" />
            <asp:HiddenField ID="hdnTransNo" runat="server" Value="OP001" />
            <asp:HiddenField ID="hdnModId" runat="server" Value="5" />
            <asp:HiddenField ID="hdnDocId" runat="server" Value="5" />
            <asp:HiddenField ID="hdnUserId" runat="server" Value="Ganapathi" />
            <asp:HiddenField ID="hdnFileName" runat="server" />
        </ContentTemplate>
       <%-- <Triggers  >
        <asp:PostBackTrigger ControlID="lnkUpload" />
        </Triggers>--%>
    </asp:UpdatePanel>

    <script type="text/javascript" language="javascript">

        function GetFileName() {
            
            var fileNameIndex = document.getElementById('<%=fLoad.ClientID %>').value.lastIndexOf("\\") + 1;
            var filename = document.getElementById('<%=fLoad.ClientID %>').value.substr(fileNameIndex);
            document.getElementById('ctl00_ContentPlaceHolder1_UCHeaderControl_DMSControl1_hdnFileName').value = filename;

            alert(document.getElementById('ctl00_ContentPlaceHolder1_UCHeaderControl_DMSControl1_hdnFileName').value);


        }
        function ShowFiles() {
           
    window.open('http://192.168.100.14:66/HimsintPdfView.aspx?PATH=UMR0000123,CNCN00123,TRN000123,1,1,MAHENDRA', '', 'fullscreen,scrollbars');
}
    </script>
