<%@ Control Language="C#" AutoEventWireup="true" CodeFile="DateSearchControl.ascx.cs"
    Inherits="Private_UserControls_DateSearchControl" %>
<style>
    .ui-daterangepicker-arrows
    {
        display: inline-block;
    }
</style>
<script type="text/javascript" language="javascript">
    function ShowGridataClick() {
        $('.jtblgrid tr td [id*=_CREATE]').keypress();
        return false;
    }

    function onDateChanged1() {
        document.getElementById('<%=hdnDateChanged.ClientID %>').value = "Y";
    }

    function OnloadCalender() {
        $(function () {
            var dateformat = $('#ctl00_ContentPlaceHolder1_hdndbdtformat').val();
            $("#<%= txtDate.ClientID %>").attr("readonly", "readonly");
            $("#<%= txtDate.ClientID %>").attr("unselectable", "on");
            $("#<%= txtDate.ClientID %>").daterangepicker({
                arrows: true, dateFormat: 'd-M-yy', clearValue: '', datepickerOptions:
                {
                    changeMonth: true, changeYear: true
                }
            },<%= this.DateChangeFn %>);
        });
    }

    function OnAllDateSelect(obj) {

        if (document.getElementById('ctl00_ContentPlaceHolder1_ucDateSearchControl1_chkAllDates').checked == true) {
            document.getElementById('<%=hdnisalldtchecked.ClientID %>').value = "Y";
            document.getElementById('ctl00_ContentPlaceHolder1_ucDateSearchControl1_txtDate').style.display = "none";
        }
        else {
            document.getElementById('<%=hdnisalldtchecked.ClientID %>').value = "N";
            document.getElementById('ctl00_ContentPlaceHolder1_ucDateSearchControl1_txtDate').style.display = "block";
            $(".filtertext").each(function (i, j) {
                $(this).val('');
            });
        }

    }
</script>
<asp:ScriptManagerProxy ID="scmgrproxy" runat="server">
    <CompositeScript>
        <Scripts>
            <asp:ScriptReference Path="~/Private/js/jquery-ui.min.js" />
            <asp:ScriptReference Path="~/Private/js/daterangepicker.jQuery.js" />
        </Scripts>
    </CompositeScript>
</asp:ScriptManagerProxy>
<div class="dtsrch">
    <asp:TextBox ID="txtDate" runat="server" onblur="onDateChanged1();"></asp:TextBox>
    <asp:CheckBox ID="chkAllDates" runat="server" Text="All" onchange="return OnAllDateSelect(this)"
        CssClass="chk-list" Style="float: left; display: none; margin-top: 3px;" />
    <asp:Button ID="btnshowdataClick" CssClass="getdata" runat="server" Text="Get Data"
        OnClientClick="return ShowGridataClick(this)" />
    <asp:HiddenField ID="hdnDateChanged" runat="server" />
    <asp:HiddenField ID="hdnisalldtchecked" runat="server" />
    <asp:HiddenField ID="hdndbdtformat" runat="server" />
    <asp:HiddenField ID="hdndtformat" runat="server" />
    <asp:HiddenField ID="hdnDtSrchfDt" runat="server" />
    <asp:HiddenField ID="hdnDtSrchtDt" runat="server" />
    <asp:HiddenField ID="hdnDtValidation" runat="server" Value="Y" />
</div>
<%--this hidden variable used to restrict start dt and end dt Comparision Used in Pre Admission Grid--%>


<script type="text/javascript">
//var _url='<%=ConfigurationManager.AppSettings["PortName"] %>';

   


</script>
