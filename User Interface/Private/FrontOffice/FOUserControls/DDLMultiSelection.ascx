<%@ Control Language="C#" AutoEventWireup="true" CodeFile="DDLMultiSelection.ascx.cs"
    Inherits="Private_FrontOffice_FOUserControls_DDLMultiSelection" %>
<%@ Register Assembly="AjaxControlToolkit" Namespace="AjaxControlToolkit" TagPrefix="ajaxToolkit" %>
<%@ Register Assembly="CheckBoxListExCtrl" Namespace="CheckBoxListExCtrl" TagPrefix="cc1" %>

<script type="text/javascript" >
    function showdata() {
        alert("show");
        return false;
    }

</script>
 
<div style="position: relative;">
    <%--  <asp:ScriptManager ID="scm" runat="server">
    </asp:ScriptManager>--%>
    <ajaxToolkit:HoverMenuExtender ID="HoverMenuExtender1" runat="server" TargetControlID="MultiSelectDDL"
        PopupControlID="PanelPopUp" PopupPosition="bottom" OffsetX="6" PopDelay="25">
    </ajaxToolkit:HoverMenuExtender>
    <asp:DropDownList ID="MultiSelectDDL" runat="server" >
    </asp:DropDownList>
    <asp:Panel ID="PanelPopUp" CssClass="popupMenu" runat="server">
        <cc1:CheckBoxListExCtrl ID="CheckBoxListExCtrl1" runat="server"   >
        </cc1:CheckBoxListExCtrl>
    </asp:Panel>
    <asp:HiddenField ID="hf_checkBoxValue" runat="server" />
    <asp:HiddenField ID="hf_checkBoxText" runat="server" />
    <asp:HiddenField ID="hf_checkBoxSelIndex" runat="server" />
</div>
<div id="ie6SelectTooltip" style="display: none; position: absolute; padding: 1px;
    border: 1px solid #333333; background-color: #ffffff; font-size: smaller; z-index: 99;">
</div>
