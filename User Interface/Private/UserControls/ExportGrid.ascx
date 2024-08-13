<%@ Control Language="C#" AutoEventWireup="true" CodeFile="ExportGrid.ascx.cs" Inherits="Private_UserControls_ExportGrid" %>
<script type="text/javascript">
    function assignHtml() {
        //document.getElementById('ctl00_ContentPlaceHolder1_ExportData_imgbtn').style.display = 'block';
        /* var _dt = $('[id*=txtDate]').val();
        var fDt = ''; var tDt = '';
        if (_dt !== undefined && _dt != "undefined") {
        fDt = GetDates("FROM_DT", _dt); tDt = GetDates("TO_DT", _dt);
        }
        if ($('[id*=hdnFromDt]').val() == '' && $('[id*=hdnToDt]').val() == '') {
        $('[id*=hdnFromDt]').val(fDt);
        $('[id*=hdnToDt]').val(tDt);
        }
        else if (document.getElementById('ctl00_ContentPlaceHolder1_HeaderControl1_ExportData1_hdnfilename') != null) {

        if (document.getElementById('ctl00_ContentPlaceHolder1_HeaderControl1_ExportData1_hdnfilename').value = 'Followup PreAdmission Patients') {
        if (document.getElementById('ctl00_ContentPlaceHolder1_ddlBookingadmnDt').value == "0") {

        $('[id*=hdndateparam]').val("ADMN_DT");
        }
        else {
        $('[id*=hdndateparam]').val("CREATE_DT");
        }
        $('[id*=hdnFromDt]').val(document.getElementById('ctl00_ContentPlaceHolder1_txtfpafromDate').value);
        $('[id*=hdnToDt]').val(document.getElementById('ctl00_ContentPlaceHolder1_txtTodate').value);
        }
        }
        if ($('[id*=chkAllDates]').prop('checked')) {
        $('[id*=hdnFromDt]').val('');
        $('[id*=hdnToDt]').val('');
        }
        else { }*/

        $("#progressshow").show();

        var WSPath = $('[id*=hdnWSPath]').val();
        var WSParams = '';
        if (WSPath != '' && WSPath != undefined && WSPath != null) {
            WSParams = $.parseJSON($('[id*=hdnWSParams]').val());
        }
        WSParams.pageNum = 0;
        WSParams.pageSize = 0;
        GetAsync(
                     WSPath
                    , WSParams
                    , function (JData) {
                        var Columns = $('[id*=hdnExportColumns]').val();
                        var col = [];
                        var col1 = [];
                        for (var i = 0; i < Columns.split('&').length; i++) {
                            col.push((Columns.split('&')[i].split(':')[0]));
                            col1.push((Columns.split('&')[i].split(':')[1]));
                        }

                        var temptable = document.createElement("table");
                        temptable.setAttribute("id", "testtable");
                        var tr = temptable.insertRow(-1);

                        for (var i = 0; i < col.length; i++) {
                            var th = document.createElement("th");
                            th.innerHTML = col[i];
                            tr.appendChild(th);
                        }

                        var table = JData.d[0][0][0] == undefined ? JData.d[0] : JData.d[0][0];
                        for (var i = 0; i < table.length; i++) {
                            tr = temptable.insertRow(-1);
                            for (var j = 0; j < col1.length; j++) {
                                var tablecell = tr.insertCell(-1);
                                tablecell.innerHTML = table[i][col1[j]];
                            }
                        }

                        $("input[id$='hdndata']").val(temptable.outerHTML);

                        var curTime = new Date();
                        var formatTime = curTime.getDate().toString() + curTime.getMonth().toString() + curTime.getYear().toString() +
                              curTime.getHours().toString() + curTime.getMinutes().toString() + curTime.getSeconds().toString();

                        var contentType = '', fileName = '', pageTitle = $(document).find('title').text().replace(/\ /g, '_');
                        fileName = (pageTitle == '' ? 'Report_' : pageTitle + "_") + formatTime;
                        switch (document.getElementById('<%= ddlExportData.ClientID %>').value.toUpperCase()) {
                            case 'EXCEL(.XLS)': contentType = 'data:application/vnd.ms-excel,'; fileName = fileName + ".xls"; break;
                            case 'EXCEL(.XLSX)': contentType = 'data:application/vnd.ms-excel,'; fileName = fileName + ".xlsx"; break;
                            case 'EXCEL BINARY': contentType = 'data:application/vnd.ms-excel,'; fileName = fileName + ".xlsb"; break;
                            case 'WORD': contentType = 'data:application/vnd.ms-word,'; fileName = fileName + ".doc"; break;
                            case 'CSV': contentType = 'data:application/vnd.text,'; fileName = fileName + ".txt"; break;
                        }
                        var a = document.createElement('a');
                        a.href = contentType + encodeURIComponent(temptable.outerHTML);
                        a.download = fileName;
                        a.click();
                        setIndexValue();
                        $("#progressshow").hide();
                        //__doPostBack('ctl00_ContentPlaceHolder1$ExportData1$ddlExportData','');

                        ////setTimeout('__doPostBack(\'ctl00_ContentPlaceHolder1$ExportData1$ddlExportData\',\'\')', 3500);
                        // document.getElementById('ctl00_ContentPlaceHolder1_ExportData_imgbtn').style.display = 'none';
                    }
                   , function (jqXHR, textStatus, errorThrown) {
                       try { console.log(errorThrown); } catch (e) { }
                       $("#progressshow").hide();
                   }
               );

        //setTimeout('__doPostBack(\'ctl00_ContentPlaceHolder1$ExportData1$ddlExportData\',\'\')', 3500);
    }
    function setIndexValue() {
        document.getElementById('<%= ddlExportData.ClientID %>').selectedIndex = '0';
    }

    setInterval(function () {
        var rowCount = 0;

        if ($("[class='jtblgrid']").length > 0) {
            if ($("[class='jtblgrid']")[0] == undefined || $("[class='jtblgrid']")[0].id == undefined || $("[class='jtblgrid']")[0].id == "")
                rowCount = 0;
            else
                rowCount = $('#' + $("[class='jtblgrid']")[0].id + ' tr').length;
            document.getElementById('<%= ddlExportData.ClientID %>').disabled = (rowCount == undefined || rowCount <= 2 ? true : false);
        }
        else {
            document.getElementById('<%= ddlExportData.ClientID %>').disabled = false;
        }
    }, 1000);

</script>
<style type="text/css">
    .lbl_masking
    {
        z-index: 999999;
        top: 0px;
        left: 0px;
        height: 100%;
        width: 100%;
        border-radius: 3px;
        position: fixed;
    }
    .lbl_loader1 i
    {
        font-size: 20px;
    }
    .lbl_loader1
    {
        z-index: 999999;
        top: 50%;
        left: 50%;
        background: white;
        margin-left: -25px;
        margin-top: -25px;
        height: 40px;
        width: 40px;
        padding: 10px 6px;
        border-radius: 3px;
        position: fixed;
    }
</style>
<div style="float: right; width: auto">
    <asp:Panel ID="divexport" runat="server">
        <asp:Label ID="lblExportData" runat="server" Style="font-weight: 700; float: left;
            width: auto; margin-top: 2px; margin-right: 5px;" Text="Export To">
        </asp:Label><asp:DropDownList ID="ddlExportData" runat="server" onchange="return assignHtml();"
            Style="float: left; width: 100px;" AutoPostBack="false" onblur="return setIndexValue();">
            <%--  OnSelectedIndexChanged="ddlExportData_SelectedIndexChanged">--%>
            <asp:ListItem Selected="True">Select One</asp:ListItem>
            <asp:ListItem>Excel(.xls)</asp:ListItem>
            <asp:ListItem>Excel(.xlsx)</asp:ListItem>
            <asp:ListItem>Excel Binary</asp:ListItem>
            <asp:ListItem>Word</asp:ListItem>
            <asp:ListItem>CSV</asp:ListItem>
        </asp:DropDownList>
        <div class="lbl_masking" id="imgbtn" runat="server" style="display: none;">
            <div class="cmask">
            </div>
            <div class="lbl_loader1">
                <asp:Image runat="server" ImageUrl="~/Images/progress.gif" />
            </div>
        </div>
        <input type="hidden" id="SelVal" value="false" />
        <asp:HiddenField ID="hdngriddivid" runat="server" />
        <asp:HiddenField ID="hdndata" runat="server" />
        <asp:HiddenField ID="hdnfilename" runat="server" />
        <asp:HiddenField ID="hdnExportSpName" runat="server" />
        <asp:HiddenField ID="hdnExportFlag" runat="server" />
        <asp:HiddenField ID="hdnExportReferencetypeid" runat="server" />
        <asp:HiddenField ID="hdnFromDt" runat="server" />
        <asp:HiddenField ID="hdnToDt" runat="server" />
        <asp:HiddenField ID="hdndateparam" runat="server" />
        <asp:HiddenField ID="hdnExportParams" runat="server" />
        <asp:HiddenField ID="hdnWSPath" runat="server" />
        <asp:HiddenField ID="hdnWSParams" runat="server" />
        <asp:HiddenField ID="hdnExportColumns" runat="server" />
        <asp:HiddenField ID="hdnRecordStatus" runat="server" />
        <asp:HiddenField ID="hdnExportGridData" runat="server" />
        <asp:HiddenField ID="hdnsearchtext" runat="server" />
    </asp:Panel>
</div>
