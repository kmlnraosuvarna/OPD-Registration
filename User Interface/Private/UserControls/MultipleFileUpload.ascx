<%@ Control Language="C#" AutoEventWireup="true" CodeFile="MultipleFileUpload.ascx.cs"
    Inherits="MultipleFileUpload" %>
<asp:Panel ID="pnlParent" runat="server">
    <div class="fileupload">
        <div style="float: left; width: 350px;">
            <asp:DropDownList ID="ddlFormats" runat="server" CssClass="formselect">
            </asp:DropDownList>
            <asp:Panel ID="pnlFiles" runat="server">
                <asp:FileUpload ID="IpFile" runat="server" />
            </asp:Panel>
        </div>
        <div style="float: right; width: 310px;">
            <asp:TextBox ID="txtremarks" runat="server" TextMode="MultiLine" CssClass="formtext"></asp:TextBox>
        </div>
        <div class="clr">
        </div>
        <asp:Panel ID="pnlButton" runat="server" CssClass="uploadbtn">
            <div style="float: left; width: 350px;">
                <input id="btnAdd" onclick="javascript:Add();" type="button" runat="server" value="Add" />
                <input id="btnClear" onclick="javascript:Clear();" type="button" value="Clear" runat="server" />
                <asp:Button ID="btnUpload" OnClientClick="javascript:return DisableTop();" runat="server"
                    Text="Upload" OnClick="btnUpload_Click" />
            </div>
            <div style="float: right; width: 310px;">
                <asp:Label ID="lblCaption" runat="server" CssClass="lbltxt"></asp:Label>
            </div>
            <div class="clr">
            </div>
        </asp:Panel>
    </div>
    <asp:Panel ID="pnlListBox" runat="server" CssClass="uploaddiv">
    </asp:Panel>
    <asp:HiddenField ID="hdnRemarks" runat="server" />
    <asp:HiddenField ID="hdnFormats" runat="server" />
    <asp:HiddenField ID="hdnUMRNO" runat="server" />
    <%--<asp:HiddenField ID="hdnREGNO" runat="server" />--%>
    <asp:HiddenField ID="hdnADMNNO" runat="server" />
     <asp:HiddenField ID="hdntablename" runat="server" />
    <asp:HiddenField ID="hdntblautoidcolumns" runat="server" />
    <asp:HiddenField ID="hdntblautocdGlobalcolumns" runat="server" />
</asp:Panel>
