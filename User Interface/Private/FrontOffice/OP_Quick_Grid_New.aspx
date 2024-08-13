<%@ Page Title="" Language="C#" MasterPageFile="~/Private/Masters/Universal.master" AutoEventWireup="true" CodeFile="OP_Quick_Grid_New.aspx.cs" Inherits="Private_FrontOffice_OP_Quick_Grid_New" %>


<%@ Register Src="~/Private/UserControls/PageHeaderControlT.ascx" TagName="PageHeaderControl"
    TagPrefix="HeaderControl" %>
<%@ Register Src="~/Private/UserControls/DateSearchControl.ascx" TagName="DateSearchControl"
    TagPrefix="uc4" %>
<%@ Register Assembly="AjaxControlToolkit" Namespace="AjaxControlToolkit" TagPrefix="ajaxToolkit" %>



<asp:Content ID="Content1" ContentPlaceHolderID="head" Runat="Server">

    <link rel="stylesheet" type="text/css" href="../../Assets/Jtblcss/OP_Quick_Grid.css" />
    <script type="text/javascript" language="javascript" src="../../JSScript/Validation.js"></script>
    <script type="text/javascript" src="../../JSScript/FrontOfficeScripts/ServicesGrid.js"></script>
    <script type="text/javascript" src="../../JSScript/jquery.ui.core.min.js"></script>
    <script type="text/javascript" src="../../JSScript/jquery.ui.core.min.js"></script>
    <script type="text/javascript" src="../../JSScript/CorporateScripts/jquery.ui.datepicker.js"></script>

    <style>
    
     #tbl_div_Registrations td:nth-child(3){
               min-width:100px !important;}    

     .lege-div
        {
           
            width: 20px;
            position: absolute; right: 400px;top: 72px;
        }
        .lege-div i
        {
            float: left;
            width: 6px;
            height: 6px;
            margin: 0px 1px 1px 1px;
            border-radius: 50%;
            border: 0px solid white;
        }
        .lege-div > div.colorchart
        {
            display: none;
            position: absolute;
           top: 26px;
           right: -1px;
    width: 184px;
        }
        .lege-div > div.colorchart > div
        {
            height: 35px;
            display: block;
            clear: both;
            padding: 10px 5px;
            border-bottom: 1px solid #cacaca;
        }
        .lege-div > div.colorchart > div label
        {
            width: 8px;
            height: 8px;
            margin: 2px 9px 1px 1px;
            border-radius: 50%;
            float: left;
        }
        .lege-div > div.colorchart > div span
        {
            float: left;
        }
        .lege-div:hover > div.colorchart
        {
            background: #fff;
            z-index: 999;
            border: 1px solid #cacaca;
            display: block;
            box-shadow: 0 3px 6px 2px #999;
        }
        
        div.colorchart:before
        {
            content: "";
            top: -14px;
            position: absolute;
            border: 7px solid transparent;
            border-bottom-color: #cacaca;
            width: 0;
            height: 0;
            right: 0;
        }
         i.fser
        {
            background: green;
        }
        i.fser2
        {
            background: red;
        }
        i.fser3
        {
            background: blue;
        }
        i.fser4
        {
            background: White;
        }
        i.historytype
        {
            color: #3079D1;
        }
        i.fser5
        {
            background: #ba68C8;
        }
        i.fser6
        {
            background: Lime;
        }
        i.fser7
        {
            background: Aqua;
        }
        i.fser8
        {
            background: Lime;
        }
        i.fser9
        {
            background: orange;
        }
        i.fser10
        {
               background: Fuchsia;
        }
            
            .slegend1
        {
            max-width: 38px !important;
            float: right;
        }
        
        .slegend1 i
        {
            float: left;
            border-radius: 50%;
            height: 8px;
            width: 8px;
            margin: 3px 2px 0 2px;
            position: relative;
        }
        </style>
    <script type="text/javascript">
    var bill_id_globe;

    var _UmrNO = ''; var _patID = '';var _JData='';
    function view_Show_Srv_ScheduleDtls(bill_srv_id) {


            if (bill_srv_id > 1) {

                GetAsync(
                        "Private/FrontOffice/OpBilling/OPBillClientSide.aspx/Show_Srv_ScheduleDtls",
                    { _bill_srv_id: parseInt(bill_srv_id) },
                    function (jdata) {
                        var d = jdata.d;
                        myAddress2(d);
                    },
                    function (jqXHR, textStatus, errorThrown) {
                        // alert(errorThrown);
                    });
            }
            else {
                return false;
            }
        }
        var qty = 0;var __data = '';
        function myAddress2(d) {
            __data = d;
            var dateformat = $('#ctl00_ContentPlaceHolder1_hdndateformat').val();
            //var split = dateformat.split(' ');
            var current_format = 'dd-MMM-yyyy';
            var view = qty
            for (var i = 0; i < qty; i++) {
                fn_Add_SrvSdul();
            }
            for (var i = 0; i < view; i++) {
                if (d[i].SCH_DT != null && d[i].SCH_DT != '' && d[i].SCH_DT != undefined) {
                    $('[id$=tbl_SrvSdul] tr').filter(':eq(' + i + ')').find('[id*=txtDate]').val(new Date(d[i].SCH_DT).format(current_format));
                    var hm = d[i].SCH_DT.split(' ')[1]
                    $('[id$=tbl_SrvSdul] tr').filter(':eq(' + i + ')').find('[id*=txthr]').val(hm.split(':')[0]);
                    $('[id$=tbl_SrvSdul] tr').filter(':eq(' + i + ')').find('[id*=txtmin]').val(hm.split(':')[1]);
                    $('[id$=tbl_SrvSdul] tr').filter(':eq(' + 0 + ')').find('[id*=txtDate]').prop('disabled', 'true');
//                    $('[id$=tbl_SrvSdul] tr').filter(':eq(' + i + ')').find('[id*=txthr]').prop('disabled', 'true');
//                    $('[id$=tbl_SrvSdul] tr').filter(':eq(' + i + ')').find('[id*=txtmin]').prop('disabled', 'true');
                    $('[id$=tbl_SrvSdul] tr').filter(':eq(' + 0 + ')').find('[type=button]').prop('disabled', 'true');
                }
            }
            //document.getElementById('btnSrvSdulSubmit').disabled = true;
        }
        function SrvSdulclosehipopup() {

            document.getElementById('ctl00_ContentPlaceHolder1_pnlSrvSdul').style.display = 'none';
            return false;
        }
        function SaveCloseSrvSdul() {
            var SrvShdulRoot = ''; var c = '';
            var hdndate = '';var i = 0;
            $("table[id*=tbl_SrvSdul] tr:has(td)").each(function (e) {
                var _sch_dt = $(this).closest('tr').find('[id*=txtDate]').val();
                var _sch_hr = $(this).closest('tr').find('[id*=txthr]').val();
                var _sch_min = $(this).closest('tr').find('[id*=txtmin]').val();

                if (_sch_dt != '' && _sch_dt != null && _sch_dt != undefined) {
                    /*
                    c = '';
                    SrvShdulRoot = SrvShdulRoot + "<FO_BILL_SRV_SCH BILL_SRV_SCH_ID=$" + 0 + "$ BILL_SRV_ID=$" + 0 + "$ SERVICE_ID=$" + SrvSdul_ServiceId + "$ SCH_DT=$" + SCH_DT + "$ />";
                    hdndate = hdndate + ',' + SCH_DT; 
                    */
                }
                else {
                    c = '1';
                    $(this).closest('tr').find('[id*=txtDate]').focus();
                    $(".stoast").toastText("warning", "Please select service schedule date !", 5, 3);
                    return false;
                }
                if (_sch_hr != '' && _sch_hr != null && _sch_hr != undefined) { }
                else {
                    c = '1';
                    $(this).closest('tr').find('[id*=txthr]').focus();
                    $(".stoast").toastText("warning", "Please select service schedule Hour !", 5, 3);
                    return false;
                }
                if (_sch_min != '' && _sch_min != null && _sch_min != undefined) { }
                else {
                    c = '1';
                    $(this).closest('tr').find('[id*=txtmin]').focus();
                    $(".stoast").toastText("warning", "Please select service schedule minutes !", 5, 3);
                    return false;
                }
                var SCH_DT = _sch_dt + ' ' + _sch_hr + ':' + _sch_min;

                if (SCH_DT != '' && SCH_DT != null && SCH_DT != undefined) {

                    c = '';


                    SrvShdulRoot = SrvShdulRoot + "<FO_BILL_SRV_SCH BILL_SRV_SCH_ID=$" + __data[i].BILL_SRV_SCH_ID + "$ BILL_SRV_ID=$" + __data[i].BILL_SRV_ID + "$ SERVICE_ID=$" + SrvSdul_ServiceId + "$ SCH_DT=$" + SCH_DT + "$ />";
                    i++;
                    hdndate = hdndate + ',' + SCH_DT;

                }
            });
            if (c != '1') {
                $('[id$=UCServices_gvServices] tr').filter(':eq(' + HdnSrSdulIndex + ')').find('[id*=hdnSrvShcedulSave]').val(SrvShdulRoot);
                $('[id$=UCServices_gvServices] tr').filter(':eq(' + HdnSrSdulIndex + ')').find('[id*=hdnsrvdates]').val(hdndate);
                //ctl00_ContentPlaceHolder1_UCServices_pnlSrvSdul.style.display = "none";
                document.getElementById('ctl00_ContentPlaceHolder1_pnlSrvSdul').style.display = 'none';
                
            }
            else
            { return false; }

            SrvShdulRoot = "<root>" + SrvShdulRoot + "</root>";
            var count = 0;
            if (c != '1') {
                GetAsync(
                        "Private/FrontOffice/OpBilling/OPBillClientSide.aspx/UpdateSericevSch",
                    { SrvShdulRoot: SrvShdulRoot, count: count },
                    function (msg) {
                        var status = msg;
                        if (status.d) {
                            $(".toast").toastText("Info", "Saved Successfully", 5, 2);
                        }
                        return false;
                    },
                    function (jqXHR, textStatus, errorThrown) {
                        // alert(errorThrown);
                    });
                    return false;
            }
        }
       

        function ShowSchdul(obj) {
            var _data = getRow(obj);
            var ViewBillSrvId = _data.BILL_SERVICE_ID;
            qty = _data.QUANTITY;
            $("table[id*=tbl_SrvSdul] tr:has(td)").each(function (e) {
                $(this).closest('tr').remove();

            });
            document.getElementById('ctl00_ContentPlaceHolder1_txtSrvShdulServicename').value = _data.SERVICE_NAME;
            document.getElementById('ctl00_ContentPlaceHolder1_txtSrvSdulQty').value = _data.QUANTITY;
            //document.getElementById('ctl00_ContentPlaceHolder1_hdndateformat').value = document.getElementById('ctl00_ContentPlaceHolder1_hdndateformat').value;
            document.getElementById('ctl00_ContentPlaceHolder1_pnlSrvSdul').style.display = 'block';
                view_Show_Srv_ScheduleDtls(ViewBillSrvId);
            
        }


        var SrowIndex = 0; var Sindex = 0;
function fn_Add_SrvSdul(schdt) {
    var dateformat = $('#ctl00_ContentPlaceHolder1_hdndateformat').val();
    var split = dateformat.split(' ');
    var current_format = split[0];
    var gvServices = document.getElementById('tbl_SrvSdul');
    var SrowIndex = gvServices.rows.length;
    var checkRowIndex = SrowIndex;
    var gridindex = 1;
    var newRow = gvServices.insertRow(SrowIndex);
    //    var dateformat = 'DD-MMM-yyyy';
    //    var split = dateformat.split(' ');
    //    var current_format = 'dd-MMM-yyyy';

    var newCell = newRow.insertCell(0);
    var divSno = document.createElement('div'); divSno.id = 'divSno';

    divSno.className = "legendinfo";
    var lblSNo = document.createElement('label'); lblSNo.id = 'lblSNo' + Sindex; lblSNo.innerHTML = SrowIndex + 1;
    divSno.appendChild(lblSNo);

    newCell.className = 'sno';
    newCell.appendChild(divSno);

    newCell = newRow.insertCell(1);
    var divtxt = document.createElement('div');
    var divbtn = document.createElement('div');
    divtxt.className = "btntxt";
    divbtn.className = "txtbtn";
    var txtDate = document.createElement('input');
    txtDate.type = 'text';
    txtDate.id = 'txtDate' + Sindex;
    if (schdt == undefined || schdt == null || schdt == '') {
        txtDate.value = '';
    }
    else {
        txtDate.value = schdt.split(' ')[0];
    }

    txtDate.readOnly = true;
    newCell.className = 'scode';

    divtxt.appendChild(txtDate);
    divtxt.appendChild(divbtn);
    newCell.appendChild(divtxt);


    newCell = newRow.insertCell(2);
    var divtxthr = document.createElement('div');
    divtxthr.className = "divtxthr";
    var txthr = document.createElement('input');
    txthr.type = 'text';
    txthr.id = 'txthr' + Sindex;
    txthr.placeholder = 'Hours';
    txthr.value = '';
    txthr.maxLength = '2';
    txthr.onkeypress = function () { numeralsOnly1(event); }
    txthr.onkeyup = function () { checkHrs(this); }
    txthr.onblur = function () { SrvDateSelection(this); }
    if (schdt == undefined || schdt == null || schdt == '') {
        txthr.value = '';
    }
    else {
        var hm = schdt.split(' ')[1];
        txthr.value = hm.split(':')[0];
    }
    newCell.className = 'scode';

    divtxthr.appendChild(txthr);
    newCell.appendChild(divtxthr);

    newCell = newRow.insertCell(3);
    var divtxtmin = document.createElement('divtxtmin');
    divtxtmin.className = "btntxt";
    var txtmin = document.createElement('input');
    txtmin.type = 'text';
    txtmin.id = 'txtmin' + Sindex;
    txtmin.placeholder = 'Minutes';
    txtmin.maxLength = '2';
    txtmin.value = '';
    newCell.className = 'scode';
    if (schdt == undefined || schdt == null || schdt == '') {
        txtmin.value = '';
    }
    else {
        var hm = schdt.split(' ')[1];
        txtmin.value = hm.split(':')[1];
    }
    txtmin.onkeypress = function () { numeralsOnly1(event); };
    txtmin.onkeyup = function () { checkMins(this); }
    txtmin.onblur = function () { SrvDateSelection(this); }
    divtxtmin.appendChild(txtmin);
    newCell.appendChild(divtxtmin);

    $(" [id*=tbl_SrvSdul] tr:has(td)").filter(":eq(" + checkRowIndex + ")").find('input[type=text][id*=txtDate]').datepicker({
        changeMonth: true,
        changeYear: true,
        dateFormat: 'dd-M-yy',

        //showOn: "button",        
        minDate: new Date(),
        //buttonImage: '../../Assets/img/empty_ico.png', ///// <reference path="../../Assets/img/empty_ico.png" />

        onSelect: function () {
            SrvDateSelection(this);
        }
    });
    Sindex++;
}


function SrvDateSelection(ev) {
    CurrentRowIndex = typeof (ev.parentElement.parentElement.parentElement.rowIndex) == 'number' ? ev.parentElement.parentElement.parentElement.rowIndex : 0;
    CurrentRowIndex = CurrentRowIndex == 0 || CurrentRowIndex == '' || CurrentRowIndex == undefined ? 0 : CurrentRowIndex;
    //    $(" [id*=tbl_SrvSdul] tr:has(td)").filter(":eq(" + CurrentRowIndex + ")").find('input[type=text][id*=txtDate]').val(ev.value);
    var len = document.getElementById('tbl_SrvSdul').rows.length;
    $("table[id*=tbl_SrvSdul] tr:has(td)").each(function (e) {
        for (var i = 0; i < len; i++) {
            var SchDt = $(" [id*=tbl_SrvSdul] tr:has(td)").filter(":eq(" + i + ")").find('input[type=text][id*=txtDate]').val();
            var hr = $(" [id*=tbl_SrvSdul] tr:has(td)").filter(":eq(" + i + ")").find('input[type=text][id*=txthr]').val();
            var min = $(" [id*=tbl_SrvSdul] tr:has(td)").filter(":eq(" + i + ")").find('input[type=text][id*=txtmin]').val();

            var PrSchDt = $(" [id*=tbl_SrvSdul] tr:has(td)").filter(":eq(" + CurrentRowIndex + ")").find('input[type=text][id*=txtDate]').val();
            var Prhr = $(" [id*=tbl_SrvSdul] tr:has(td)").filter(":eq(" + CurrentRowIndex + ")").find('input[type=text][id*=txthr]').val();
            var Prmin = $(" [id*=tbl_SrvSdul] tr:has(td)").filter(":eq(" + CurrentRowIndex + ")").find('input[type=text][id*=txtmin]').val();

            if (SchDt == '' || SchDt == null || SchDt == undefined) { SchDt = ''; }
            if (PrSchDt == '' || PrSchDt == null || PrSchDt == undefined) { PrSchDt = ''; }

            if (hr == '' || hr == null || hr == undefined) { hr = ''; }
            if (min == '' || min == null || min == undefined) { min = ''; }

            if (Prhr == '' || Prhr == null || Prhr == undefined) { Prhr = ''; }
            if (Prmin == '' || Prmin == null || Prmin == undefined) { Prmin = ''; }

            var Dt = SchDt + ' ' + hr + ':' + min;
            var PrDt = PrSchDt + ' ' + Prhr + ':' + Prmin;
            if (i != CurrentRowIndex) {
                if (SchDt != '' && PrSchDt != '' && hr != '' && min != '' && Prhr != '' && Prmin != '' && Dt == PrDt) {
                    $(" [id*=tbl_SrvSdul] tr:has(td)").filter(":eq(" + CurrentRowIndex + ")").find('input[type=text][id*=txtDate]').val('');
                    $(" [id*=tbl_SrvSdul] tr:has(td)").filter(":eq(" + CurrentRowIndex + ")").find('input[type=text][id*=txthr]').val('');
                    $(" [id*=tbl_SrvSdul] tr:has(td)").filter(":eq(" + CurrentRowIndex + ")").find('input[type=text][id*=txtmin]').val('');
                    $(".stoast").toastText("warning", "System Does Not Allow Duplicate Time", 5, 3);
                    return false;
                }

            }
        }

    });

}


    function Consent(objs) {
            var form_name = 'OP';
            var data = objs;
            var umr_no = _UmrNO;
            var pat_id = _patID;
            var type = 'C';
            if (pat_id == '' || pat_id == null || pat_id == undefined) { pat_id = '0'; }
            if (umr_no != '' && umr_no != undefined && umr_no != null && pat_id != '0') {
                //data = ReplaceSplCharactor(data);
                var url = _iniUrl + "Private/FrontOffice/FOUserControls/Concent_Form.aspx?Srv_id=" + data + "&umr_no=" + umr_no + "&pat_id=" + pat_id + "&type=" + type;
                window.open(url);

            }

            return false;
        }
        function SrvGuide(objs) {
            var form_name = 'OP';
            var data = objs;
            var umr_no = _UmrNO;
            var pat_id = _patID;
            var type = 'G';
            if (pat_id == '' || pat_id == null || pat_id == undefined) { pat_id = '0'; }
            if (umr_no != '' && umr_no != undefined && umr_no != null && pat_id != '0') {
                var url = _iniUrl + "Private/FrontOffice/FOUserControls/Concent_Form.aspx?Srv_id=" + data + "&umr_no=" + umr_no + "&pat_id=" + pat_id + "&type=" + type;
                window.open(url);

            }

            return false;
        }
         function CheckList(objs) {

            var form_name = 'OP';
            var data = objs;
            var umr_no = _UmrNO;
            var pat_id = _patID;
            var type = 'CH';
            if (pat_id == '' || pat_id == null || pat_id == undefined) { pat_id = '0'; }
            if (umr_no != '' && umr_no != undefined && umr_no != null && pat_id != '0') {
                var url = _iniUrl + "Private/FrontOffice/FOUserControls/Concent_Form.aspx?Srv_id=" + data + "&umr_no=" + umr_no + "&pat_id=" + pat_id + "&type=" + type;
                window.open(url);

            }

            return false;
        }
        function BarCode_Hc(obj)
        {
        
if(bill_id_globe=='' || bill_id_globe==undefined || bill_id_globe==null)
{
bill_id_globe=0;
}
         var _data = getRowthird_child(obj);
         var service_type_id=_data.SERVICE_TYPE_ID;
         var service_id=_data.SERVICE_ID;
         var service_grp_name=_data.SERVICE_GROUP_NAME;
         var item_group_id=_data.ITEM_GROUP_ID;
         var item_group_name=_data.ITEM_GROUP_NAME;
         var item_id=_data.ITEM_ID;
         if(service_type_id=='12' && service_grp_name=='Pharmacy Charges')
         {
             var service_name=_data.SERVICE_NAME;
             if(bill_id_globe !=0 && (parseInt(item_group_id)>0 || parseInt(item_id)>0))
             {
                /*var  item_names_nclude = item_group_name +'-'  + item_group_id+'-'+bill_id_globe;*/
                window.open(document.getElementById('ctl00_ContentPlaceHolder1_hdnbarcodepath').value+"F"+"-"+bill_id_globe+"*"+service_id);
             }
              else if(bill_id_globe ==0 && (parseInt(item_group_id)>0 || parseInt(item_id)>0))
             {
             /*var  item_names_nclude = item_group_name +'-'  + item_group_id;*/
                window.open(document.getElementById('ctl00_ContentPlaceHolder1_hdnbarcodepath').valuee+"F"+"-"+bill_id_globe+"*"+service_id);
              }
              else
              {
                 $(".stoast").toastText("warning", "Barcode Print Only For Dietory Items", 5, 3);
                 return false;
              }
         }
         else
         {
          $(".stoast").toastText("warning", "Barcode Print Only For Dietory Items", 5, 3);
          return false;
         }
        }
    function PatRegBarcodePrint(obj)
    {
    //var _data =gridControl.getDataRow(obj);
    if(bill_type_id=='A'){ _data = getRow(obj);}
    else{
        _data = gridControl.getDataRow(obj);
        }
            if (_data["BILL_TYPE_ID"] == 0) {
                var permission = 'YES';
                var RegNo = _data.REGISTRATION_NO;
                var umr_no=_data["UMR_NO"];
                window.open(document.getElementById('ctl00_ContentPlaceHolder1_hdnbarcodepath').value +"R-"+umr_no);
            }
            else if (_data["BILL_TYPE_ID"] == 2||_data["BILL_TYPE_ID"] == 20){
             var _bill_no = _data["BILL_NO"];
             var umr_no=_data["UMR_NO"];
             window.open(document.getElementById('ctl00_ContentPlaceHolder1_hdnbarcodepath').value +_bill_no);
            }
            else if (_data["BILL_TYPE_ID"] == 7 || _data["BILL_TYPE_ID"] == 17) {
                var _bill_no = _data["BILL_NO"];
                window.open(document.getElementById('ctl00_ContentPlaceHolder1_hdnbarcodepath').value + "B-"+_bill_no);                
            }
    }
        function OnAddNewClick() {
        if(document.getElementById('ctl00_ContentPlaceHolder1_hdnOPDNew').value!=null)
        {
        window.location = _iniUrl + 'Private/FrontOffice/OPDBillnew.aspx?DOC_FORM_CD=OPDREGBILL';
        }
        else{
            window.location = _iniUrl + 'Private/FrontOffice/OP_Quick.aspx';
            }
        }

function SrsReport(obj, _data)
{
 var clientName5 = $('[id*=hdnclientNameFor]').val();
     if (clientName5 == '' || clientName5 == null || clientName5 == undefined||clientName5 == "undefined") { clientName5 = ''; }
    clientName5 = clientName5.toLowerCase();
  var _data = getRow(obj);
    var _Bill_Id = _data["BILL_ID"];
   $.ajax({
                type: "POST",
                url: "OP_Quick_Grid.aspx/Samplecollrept",
                data: "{'billid':'" + _Bill_Id + "'}",
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                error: function(jqXHR, textStatus, errorThrown) { },
                success: function(res) {
                    if(res.d !="1"){
                     if(clientName5=="yashoda"){
                    OnSuccessContinue1(res.d);
                    }
                    else{
                       $(".smessagebox").scustommessagebox(1, "Success", "Click OK to get Report", OnSuccessContinue1, res.d,OnCancelContinue1); 
                       }
          
                    }
                    else{
                        alert('Exceeded Maximum prints.Please Contact Administrator');
                    }
                    return false;
                }
            });
}
   function PkgChkListPrints(obj, _data) {
    var clientName6 = $('[id*=hdnclientNameFor]').val();
     if (clientName6 == '' || clientName6 == null || clientName6 == undefined||clientName6 == "undefined") { clientName6 = ''; }
    clientName6 = clientName6.toLowerCase();
   var _data = getRow(obj);
    var _Bill_Id = _data["BILL_ID"];
   var pane = 0;
    $.ajax({
        type: "POST",
        url: "OP_Quick_Grid.aspx/PackegeCheckListPrint",
        data: "{'billid':'" + _Bill_Id + "'}",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        error: function(jqXHR, textStatus, errorThrown) { },
        success: function(res) {
         if(clientName6=="yashoda"){
                    OnSuccessContinue1(res.d);
                    }
                    else{
           $(".smessagebox").scustommessagebox(1, "Success", "Click OK to get Report", OnSuccessContinue1, res.d,OnCancelContinue1); 
           }
            return false;
        }
    });
}
function GetConsReportName(obj) {
    GetNonAsync(
    "Private/FrontOffice/OpBilling/OPConsultation1.aspx/GetPrescriptionReportName",
    { billid: obj },
    function (data) {
        if (data != "") {
            document.getElementById('ctl00_ContentPlaceHolder1_hdnprescreportname').value = data.d;
        }
    },
    function (jqXHR, textStatus, errorThrown) {
    });
}
function GetConsReportName1(obj,Prec_id) {
    GetNonAsync(
    "Private/FrontOffice/OpBilling/OPConsultation1.aspx/GetPrescriptionReportName1",
    { billid: obj,Prec_id:Prec_id },
    function (data) {
        if (data != "") {
            document.getElementById('ctl00_ContentPlaceHolder1_hdnprescreportname').value = data.d;
        }
    },
    function (jqXHR, textStatus, errorThrown) {
    });
}
        function PatPrints(obj, _data) {
         var clientName = $('[id*=hdnclientNameFor]').val();
     if (clientName == '' || clientName == null || clientName == undefined||clientName == "undefined") { clientName = ''; }
    clientName = clientName.toLowerCase();
      var _data='';
    if(bill_type_id=='A'){ _data = getRow(obj);}
    else{
        _data = gridControl.getDataRow(obj);
        }
            if (_data["BILL_TYPE_ID"] == 0) {
                var _patient_id = _data["PATIENT_ID"], _umr_no = _data["UMR_NO"], _bill_no = _data["BILL_NO"], _receipt_no = _data["Transaction_no"];
                var bill_id=_data["BILL_ID"];
                var reg_no=_data["REG_NO"];
                var type = "REG";
                var authorized_user=document.getElementById('ctl00_ContentPlaceHolder1_hdnauth_user').value;
                if(authorized_user==undefined || authorized_user==null || authorized_user=='')
                  {authorized_user='N';}
                GetAsync(
                "Private/FrontOffice/OP_Quick_Grid_New.aspx/Registration_Report",
                { Patient_ID: _patient_id, Umr_NO: _umr_no, Bill_No: _bill_no, ReqType: type, Receipt_NO: _receipt_no, authorized_user: authorized_user,bill_id:bill_id,reg_no:reg_no },
                function (_path) {
                
                    _path = _path.d;
                    if (_path != "1") {
                    if(clientName=="yashoda"){
                    OnSuccessContinue1(_path);
                    }
                    else{
                    $(".smessagebox").scustommessagebox(1, "Print Confirm", "Click Ok To Get Report", OnSuccessContinue1, _path, OnCancelContinue1);
                    }
                    }
                    else {
                        $(".stoast").toastText("Info", "Exceeded Maximum prints.Please Contact Administrator", 5, 2);
                       
                        return false;
                    }
                },
                function (jqXHR, textStatus, errorThrown) {
                });
                return false;
            }
            else if (_data["BILL_TYPE_ID"] == 2) {
                var _bill_id = _data["BILL_ID"], _umr_no = _data["UMR_NO"], _trns_id = _data["TRANSACTION_ID"];
                var _bill_no = _data.BILL_NO, _Pat_Id = _data["PATIENT_ID"];
                var _dt_fmt = document.getElementById('ctl00_ContentPlaceHolder1_hdndateformat').value;
               
                if (_data.RECORD_STATUS == 'C') {
                    
                    $(".stoast").toastText("Info", "Consultation is Cancelled ,So Take Settled Print.", 5, 2);
                    return false;
                }
                else {
                    if (document.getElementById('ctl00_ContentPlaceHolder1_hdnBothPrintSetting').value == "True") {
                        document.getElementById('ctl00_ContentPlaceHolder1_hdnbill_id').value = _bill_id;
                        document.getElementById('ctl00_ContentPlaceHolder1_hdnumr_no').value = _umr_no;
                        document.getElementById('ctl00_ContentPlaceHolder1_hdntrns_id').value = _trns_id;
                        document.getElementById('ctl00_ContentPlaceHolder1_hdnbill_no').value = _bill_no;
                        document.getElementById('ctl00_ContentPlaceHolder1_hdnpat_id').value = _Pat_Id;
                        $find('ctl00_ContentPlaceHolder1_ModelPopBarcode').show();
                        return false
                    }
                    else {
                        GetAsync(
                        "Private/FrontOffice/OP_Quick_Grid.aspx/CallConPrint",
                        { Bill_ID: _bill_id, Umr_NO: _umr_no, Tran_ID: _trns_id, Pat_ID: _Pat_Id, DtFrmt: _dt_fmt, Bill_NO: _bill_no },
                        function (_path) {
                            _path = _path.d;
                            if (_path != "1") {
                            if(clientName=="yashoda"){
                    OnSuccessContinue2(_path);
                    }
                    else{
                                $(".smessagebox").scustommessagebox(1, "Print Confirm", "Click Ok To Get Report", OnSuccessContinue2, _path, OnCancelContinue2);
                                }

                            }
                            else {
                                $(".stoast").toastText("Info", "'Exceeded Maximum prints.Please Contact Administrator'", 5, 2);
                                
                            }
                        },
                        function (jqXHR, textStatus, errorThrown) {
                        });
                        return false;
                    }
                }
            } else if (_data["BILL_TYPE_ID"] == 20) {
                var _bill_id = _data["BILL_ID"], _umr_no = _data["UMR_NO"], _trns_no = _data["TRANSACTION_ID"];
                var _bill_no = _data.BILL_NO, _Pat_Id = _data["PATIENT_ID"];
                var _dt_fmt = document.getElementById('ctl00_ContentPlaceHolder1_hdndateformat').value;
                var status = _data["RECORD_STATUS"];
                if (status == "C") {
                    $(".stoast").toastText("Info", "Cancel Consultations Can't Be Print", 5, 2);
                    
                }
                else {
                    GetAsync(
                    "Private/FrontOffice/OP_Quick_Grid.aspx/CallCorpConsultationPrint",
                    { Bill_ID: _bill_id, Umr_NO: _umr_no, Tran_ID: _trns_no, Pat_ID: _Pat_Id, DtFrmt: _dt_fmt, Bill_NO: _bill_no },
                    function (_path) {
                        _path = _path.d;
                        if (_path != "1") {
                         if(clientName=="yashoda"){
                            OnSuccessContinue3(_path);
                         }
                         else{
                            $(".smessagebox").scustommessagebox(1, "Print Confirm", "Click Ok To Get Report", OnSuccessContinue3, _path, OnCancelContinue3);
                            }
                        }
                        else {
                            $(".stoast").toastText("Info", "Exceeded Maximum prints.Please Contact Administrator", 5, 2);
                           
                        }
                    },
                    function (jqXHR, textStatus, errorThrown) {
                    });
                }
                return false;
            }
            else if (_data.BILL_TYPE_ID == 17) {
                var _tran_id = _data["TRANSACTION_ID"], _umr_no = _data["UMR_NO"]; var _tran_no = _data["Transaction_no"];
                var _pat_id = _data["PATIENT_ID"], _bill_id = _data["BILL_ID"];
                var _date = document.getElementById('ctl00_ContentPlaceHolder1_hdndateformat').value;
                var status = _data["STATUS"];
                if (status == "C") {
                    $(".stoast").toastText("Info", "Cancel Services Can't Be Print", 5, 2);
                    
                }
                else {
                    GetAsync(
                    "Private/FrontOffice/OP_Quick_Grid.aspx/CallOPCorpBillPrint",
                    { Tran_ID: _tran_id, Umr_NO: _umr_no, Tran_NO: _tran_no, Patient_ID: _pat_id, Bill_ID: _bill_id, DatFrmt: _date },
                    function (_path) {
                        _path = _path.d;
                        if (_path != "1") {
                        if(clientName=="yashoda"){
                            OnSuccessContinue4(_path);
                         }
                         else{
                            $(".smessagebox").scustommessagebox(1, "Print Confirm", "Click Ok To Get Report", OnSuccessContinue4, _path, OnCancelContinue4);
                            }
                        }
                        else {
                            $(".stoast").toastText("Info", "Exceeded Maximum prints.Please Contact Administrator", 5, 2);
                            
                        }
                    },
                    function (jqXHR, textStatus, errorThrown) {
                    });
                }
                return false;
            }
            else if (_data["BILL_TYPE_ID"] == 7 || _data["BILL_TYPE_ID"] == 15) {
                var _Bill_Id = _data["BILL_ID"], _UmrNO = _data["UMR_NO"], _Pat_Id = _data["PATIENT_ID"];
                var _TrnsID = _data["TRANSACTION_ID"];
                var _trnsNo = _data["Transaction_no"];
                var Type = "OP"; 
                if (_data["BILL_TYPE_ID"] == 15) { Type == "OSP"; }
                var admnno = _data["ADMN_NO"];
                var pane = 0;
                if (_data.RECORD_STATUS == 'C') {
                    $(".stoast").toastText("Info", "Exceeded Maximum prints.Please Contact Administrator", 5, 2);
                   
                    return false;
                }
                else {
                    GetAsync(
                    "Private/FrontOffice/OP_Quick_Grid.aspx/ImageBtnPrintClickClientSide",
                    { billid: _Bill_Id, umrno: _UmrNO, patId: _Pat_Id, trnsId: _TrnsID, type: Type, _trnsNo: _trnsNo, _ServCount: admnno },
                    function (res) {
                        if (res.d != "1") {
                         if(clientName=="yashoda"){
                            OnSuccessContinue5(res.d);
                         }
                         else{
                            $(".smessagebox").scustommessagebox(1, "Print Confirm", "Click Ok To Get Report", OnSuccessContinue5, res.d, OnCancelContinue5);
                            }
                            /*if (confirm('Click OK to get Report.'))
                                window.open(res.d);*/
                        }
                        else {
                            $(".stoast").toastText("Info", "Exceeded Maximum prints.Please Contact Administrator", 5, 2);
                            
                        }
                        return false;
                    },
                    function (jqXHR, textStatus, errorThrown) {
                    });
                }
            }
        }
        function Consultation_settlement(obj)
        {
         var clientName1 = $('[id*=hdnclientNameFor]').val();
     if (clientName1 == '' || clientName1 == null || clientName1 == undefined||clientName1 == "undefined") { clientName1 = ''; }
    clientName1 = clientName1.toLowerCase();
          var _data='';
    if(bill_type_id=='A'){ _data = getRow(obj);}
    else{
        _data = gridControl.getDataRow(obj);
        }
            var _Bill_Id = _data["BILL_ID"], _UmrNO = _data["UMR_NO"], _Pat_Id = _data["PATIENT_ID"];
                var _TrnsID = _data["TRANSACTION_ID"];
                var _trnsNo = _data["Transaction_no"];
                var Type = "OP"; 
                if (_data["BILL_TYPE_ID"] == 2 || _data["BILL_TYPE_ID"] == 20)
                { 
                var pane = 0;
                var report_name="ConsultationDetail_Report";
                $.ajax({
                    type: "POST",
                    url: _iniUrl + "Private/FrontOffice/OP_Quick_Grid.aspx/ImageBtnPrintSettlementClickClientSide",
                    data: "{'billid':'" + _Bill_Id + "','umrno':'" + _UmrNO + "','patId':'" + _Pat_Id + "','trnsId':'" + _TrnsID + "','type':'" + Type + "','_trnsNo':'" + _trnsNo + "','report_name':'"+report_name+"'}",
                    contentType: "application/json; charset=utf-8",
                    dataType: "json",
                    error: function (jqXHR, textStatus, errorThrown) { },
                    success: function (res) {
                     if(clientName1=="yashoda"){
                            OnSuccessContinue10(res.d);
                         }
                         else{
                        $(".smessagebox").scustommessagebox(1, "Print Confirm", "Click Ok To Get Report", OnSuccessContinue10, res.d, OnCancelContinue10);
                        }
                        /*if (confirm('Click OK to get Report.'))
                            window.open(res.d);*/
                        return false;
                    }
                });
                }
        }
        function PatPresPrints(obj) {
        var clientName2 = $('[id*=hdnclientNameFor]').val();
     if (clientName2 == '' || clientName2 == null || clientName2 == undefined||clientName2 == "undefined") { clientName2 = ''; }
    clientName2 = clientName2.toLowerCase();
            var _data='';
    if(bill_type_id=='A'){ _data = getRow(obj);}
    else{
        _data = gridControl.getDataRow(obj);
        }
            if (_data["BILL_TYPE_ID"] == 0) {
                var _bill_no = _data["BILL_NO"], _photo = _data["PHOTO"];
                var _bill_id= _data["BILL_ID"];
                if (_photo == null || _photo == undefined) { _photo = ''; }
                if(_data["RECORD_STATUS"]=='C'){
                       $(".stoast").toastText("Info", "Consultation is Cancelled ,You have no permission to take Prescription Print.", 5, 2);
                      return false;               
                }
                if(clientName2=="shrimann" || clientName2=="Shrimann Hospitals" || clientName2=="Shrimann hospitals" || clientName2=="SHRIMANN HOSPITALS"){
                var _dispatch = obj;
                var patclsid=2;
                    var regprintdocPermissions = [];
                    var printdocid=0;
                 regprintdocPermissions=JSON.parse($('[id*=regprintdocPermissions]').val());
                for (i=0 ; i<regprintdocPermissions.length;i++){
                if(regprintdocPermissions[i].DOC_FORM_CD=='REPREGLBLPNT'){
                printdocid=regprintdocPermissions[i].DOC_ID;
                }
                
                }
                  GetAsync(
                "Private/FrontOffice/Registrations.aspx/ShrimannlblPrint",
                { _billid: _data["UMR_NO"], Dispatch: _dispatch, _patclsid: patclsid ,PrintDocID:printdocid},
                function (_path) {
                    _path = _path.d;
                    window.open(_path);
                    return false;
                },
                function (jqXHR, textStatus, errorThrown) {
                });               
                
                }else{
                GetAsync(
                "Private/FrontOffice/OP_Quick_Grid_New.aspx/Print_Card",
                { Bill_NO: _bill_no, Photo: _photo,_bill_id:_bill_id },
                function (_path) {
                    _path = _path.d;
                      if(clientName2=="yashoda"){
                            OnSuccessContinue6(_path);
                         }
                         else{
                    $(".smessagebox").scustommessagebox(1, "Print Confirm", "Click Ok To Get Report", OnSuccessContinue6, _path, OnCancelContinue6);
                    }
                    /*if (confirm('Click Ok To Get Report')) {
                        window.open(_path);
                    }*/
                },
                function (jqXHR, textStatus, errorThrown) {
                });
                }
                return false;
            }
            else if (_data["BILL_TYPE_ID"] == 2||_data["BILL_TYPE_ID"] == 20) {
                var _bill_id = _data["BILL_ID"], _bill_no = _data["BILL_NO"], _tran_id = _data["TRANSACTION_ID"], _pat_id = _data.PATIENT_ID;
                var umr_no = _data.UMR_NO;
                var checkStatus = document.getElementById('ctl00_ContentPlaceHolder1_hdncheckbxStatus').value;
                var _dt_fmt = document.getElementById('ctl00_ContentPlaceHolder1_hdndateformat').value;
                 document.getElementById('ctl00_ContentPlaceHolder1_hdnbill_id').value =_bill_id;
                document.getElementById('ctl00_ContentPlaceHolder1_hdnumr_no').value = umr_no;
                document.getElementById('ctl00_ContentPlaceHolder1_hdntrns_id').value=_tran_id;
                document.getElementById('ctl00_ContentPlaceHolder1_hdnbill_no').value=_bill_no;
                document.getElementById('ctl00_ContentPlaceHolder1_hdnpat_id').value=_pat_id;
                var PrescReportName = document.getElementById('ctl00_ContentPlaceHolder1_hdnprescreportname').value;
                if (document.getElementById('ctl00_ContentPlaceHolder1_hdnDoctorPrescrption').value == "True") {
                  $find('ctl00_ContentPlaceHolder1_ModelPopBarcode1').show();
//                   if(document.getElementById('ctl00_ContentPlaceHolder1_RadioButtonList1_0').checked==true){
//                    GetAsync(
//                            "Private/FrontOffice/OP_Quick_Grid.aspx/PriscriptionPrint",
//                            { Bill_ID: _bill_id, Tran_ID: _tran_id, Bill_NO: _bill_no, checkStatus: checkStatus, _pat_id: _pat_id, _dt_fmt: _dt_fmt, umr_no: umr_no,PrescReportName:PrescReportName },
//                            function (_path) {
//                                _path = _path.d;
//                                //$(".smessagebox").scustommessagebox(1, "Print Confirm", "Click Ok To Get Report", OnSuccessContinue7, _path, OnCancelContinue7);
//                                /*if (confirm('Click Ok to Print Receipt')) {
//                                    window.open(_path);
//                                }*/
//                            },
//                            function (jqXHR, textStatus, errorThrown) {
//                            });
//                    return false;
//                }
return false;
                }
                else {
                    $(".stoast").toastText("Info", "Doctor Prescription Print Permisions Not Available So ,Please Contact Administrator", 5, 2);
                   
                    return false;
                }
            } 
            /*else if (_data["BILL_TYPE_ID"] == 20) {
                var _bill_id = _data["BILL_ID"], _bill_no = _data["BILL_NO"], _tran_id = _data["TRANSACTION_ID"];
                GetConsReportName(_bill_id);
                var PrescReportName = document.getElementById('ctl00_ContentPlaceHolder1_hdnprescreportname').value;
                GetAsync(
                    "Private/FrontOffice/OP_Quick_Grid.aspx/CorpOPConPriscriptionPrint",
                    { Bill_ID: _bill_id, Tran_ID: _tran_id, Bill_NO: _bill_no,PrescReportName:PrescReportName },
                    function (_path) {
                        _path = _path.d;
                        $(".smessagebox").scustommessagebox(1, "Print Confirm", "Click Ok To Get Report", OnSuccessContinue8, _path, OnCancelContinue8);
//                        if (confirm('Click Ok to Print Receipt')) {
//                            window.open(_path);
//                        }
                    },
                    function (jqXHR, textStatus, errorThrown) {
                    });
                return false;
            }*/
            else if (_data["BILL_TYPE_ID"] == 17) {
             var _tran_id=_data["TRANSACTION_ID"],_pat_id=_data["PATIENT_ID"],_bill_id=_data["BILL_ID"];
             GetAsync(
                    "Private/FrontOffice/OP_Quick_Grid.aspx/CorpOPSettlementPrint",
                    {Tran_ID:_tran_id,Patient_ID:_pat_id,Bill_ID:_bill_id},
                    function (_path) {
                        _path = _path.d;
                        if(clientName2=="yashoda"){
                            OnSuccessContinue9(_path);
                         }
                         else{
                        $(".smessagebox").scustommessagebox(1, "Print Confirm", "Click Ok To Get Report", OnSuccessContinue9, _path, OnCancelContinue9); 
                        }
                    /*if(confirm('Click Ok to Print Receipt')){
                        window.open(_path);
                    }*/
                    },
                    function(jqXHR, textStatus, errorThrown){
                    });
                    return false;   
            }
                else if (_data["BILL_TYPE_ID"] == 7 || _data["BILL_TYPE_ID"] == 15) {
                var _Bill_Id = _data["BILL_ID"], _UmrNO = _data["UMR_NO"], _Pat_Id = _data["PATIENT_ID"];
                var _TrnsID = _data["TRANSACTION_ID"];
                var _trnsNo = _data["Transaction_no"];
                var Type = "OP"; 
                if (_data["BILL_TYPE_ID"] == 15) { Type = "OSP"; }
                var pane = 0;
                var report_name="OPDetailReport";
                $.ajax({
                    type: "POST",
                    url: _iniUrl + "Private/FrontOffice/OP_Quick_Grid.aspx/ImageBtnPrintSettlementClickClientSide",
                    data: "{'billid':'" + _Bill_Id + "','umrno':'" + _UmrNO + "','patId':'" + _Pat_Id + "','trnsId':'" + _TrnsID + "','type':'" + Type + "','_trnsNo':'" + _trnsNo + "','report_name':'"+report_name+"'}",
                    contentType: "application/json; charset=utf-8",
                    dataType: "json",
                    error: function (jqXHR, textStatus, errorThrown) { },
                    success: function (res) {
                    if(clientName2=="yashoda"){
                            OnSuccessContinue10(res.d);
                         }
                         else{
                        $(".smessagebox").scustommessagebox(1, "Print Confirm", "Click Ok To Get Report", OnSuccessContinue10, res.d, OnCancelContinue10);
                        }
                        /*if (confirm('Click OK to get Report.'))
                            window.open(res.d);*/
                        return false;
                    }
                });
            }
        }
        function Prescription() {
         var _bill_id = document.getElementById('ctl00_ContentPlaceHolder1_hdnbill_id').value;
            var umr_no = document.getElementById('ctl00_ContentPlaceHolder1_hdnumr_no').value;
            var _tran_id = document.getElementById('ctl00_ContentPlaceHolder1_hdntrns_id').value;
            var _bill_no = document.getElementById('ctl00_ContentPlaceHolder1_hdnbill_no').value;           
            var _dt_fmt = document.getElementById('ctl00_ContentPlaceHolder1_hdndateformat').value;            
            var checkStatus = document.getElementById('ctl00_ContentPlaceHolder1_hdncheckbxStatus').value;
            var authorized_user = document.getElementById('ctl00_ContentPlaceHolder1_hdnauth_user').value;                   
            var _pat_id = document.getElementById('ctl00_ContentPlaceHolder1_hdnpat_id').value;
            if(document.getElementById('ctl00_ContentPlaceHolder1_RadioButtonList1_0').checked==true){
                    var Prec_id=1;
                   
                 }else{
                    var Prec_id=2;
                    
                 }
                GetConsReportName1(_bill_id,Prec_id);
                 var PrescReportName = document.getElementById('ctl00_ContentPlaceHolder1_hdnprescreportname').value;  
                 GetAsync(
                            "Private/FrontOffice/OP_Quick_Grid.aspx/PriscriptionPrint",
                            { Bill_ID: _bill_id, Tran_ID: _tran_id, Bill_NO: _bill_no, checkStatus: checkStatus, _pat_id: _pat_id, _dt_fmt: _dt_fmt, umr_no: umr_no,PrescReportName:PrescReportName },
                            function (_path) {
                                _path = _path.d;
                                //$(".smessagebox").scustommessagebox(1, "Print Confirm", "Click Ok To Get Report", OnSuccessContinue7, _path, OnCancelContinue7);
                            window.open(_path);
                            
                            },
                            function (jqXHR, textStatus, errorThrown) {
                            });
                         $find('ctl00_ContentPlaceHolder1_ModelPopBarcode1').hide();
                         return false;    
        
        }

        function PatBarcodePrint(obj) {
            var _data = getRow(obj);
            if (_data["BILL_TYPE_ID"] == 0) {
                var permission = 'YES';
                var RegNo = _data.REGISTRATION_NO;
                if (RegNo != '')
                    PageMethods.GetBarcodePat('1', RegNo, sucess, fail);
            }
            else if (_data["BILL_TYPE_ID"] == 2) {
            }
            else if (_data["BILL_TYPE_ID"] == 7) {
                var _bill_no = _data["BILL_NO"];
                GetBarcodePatDetails(_bill_no, 3, 'YES');
            }
        }
        function pageLoad() {

        $('[id*=hdnExportSpName]').val('PR_GETALL_REG_CONS_OPBILL_New');
        $('[id*=hdnExportFlag]').val('');
        
            setdesign();
            OnloadCalender();
           onChageTypeFilter();
             var hcsetting = $('#ctl00_ContentPlaceHolder1_hdnHcDietPkg').val();
            if (hcsetting == 'True') {
                DivHcdtls.style.display = 'table'
            }
            $('[id*=divcolorcd]').show();
        }
        function onDateBlur() {
            console.log('swetha1');
           // BindRegistrationGrid();

                 if(bill_type_id=='A'){
         
         BindRegistrationGrid2();
         
         }
         else{
         BindRegistrationGrid();
         }
        }
        var gridControl;
        $(document).ready(function () {
           // BindRegistrationGrid();
                 if(bill_type_id=='A'){
         
         BindRegistrationGrid2();
         
         }
         else{
         BindRegistrationGrid();
         }
        });


        function ViewRow(obj) {
            var _data = gridControl.getDataRow(obj);
            var _Trans_Id = _data.TRANSACTION_ID, _grp_billNO = _data.GRP_BILL_NO, _Pat_Id = _data.PATIENT_ID; var _bill_type = _data.BILL_TYPE_NAME
            var _bill_type_id = 0;
            if (_bill_type == undefined) { _bill_type = ''; }
            if (_bill_type == 'OSP BILL') {
                _bill_type_id = 15;
            }
           
           
            if( _grp_billNO!='')
            {
            if(document.getElementById('ctl00_ContentPlaceHolder1_hdnOPDNew').value!=null)
            {window.location = "OPDBillnew.aspx?MODE=VIEW&Type=OPQUICK&GRPBILLNO=" + _grp_billNO + "&TansId=" + _Trans_Id + "&PatientID=" + _Pat_Id + "&Bill_Type=" + _bill_type_id;}
            else
            {
            window.location = "OP_Quick.aspx?MODE=VIEW&Type=OPQUICK&GRPBILLNO=" + _grp_billNO + "&TansId=" + _Trans_Id + "&PatientID=" + _Pat_Id + "&Bill_Type=" + _bill_type_id;
            }
            }
            else{
             type = "REG";
             window.location="YRegistration.aspx?Type=" + type + "&PatientID=" + _Pat_Id + "&MODE=VIEW&STATE=OPD";;
            }
//            if (_data["BILL_TYPE_ID"] == 0) {
//                var type = "REG"; //document.getElementById('ctl00_ContentPlaceHolder1_hdnReqString').value;
//                var _patient_id = _data["PATIENT_ID"];
//                var _reg = getParameterByName('NewReg');
//                if (_reg == "Y") {
//                    window.location = "../ViewPatient.aspx?REGCONBILL=Y&Type=" + type + "&PatientID=" + _patient_id + "&NewReg=Y";
//                } else {
//                    window.location = "../ViewPatient.aspx?REGCONBILL=Y&Type=" + type + "&PatientID=" + _patient_id;
//                }
//            }
//            else if (_data["BILL_TYPE_ID"] == 2) {
//                var _Bill_Id = _data["BILL_ID"], _Trans_Id = _data["TRANSACTION_ID"], _Pat_Id = _data["PATIENT_ID"];
//                window.location = "OPConsultation.aspx?REGCONBILL=Y&MODE=VIEW&BillID=" + _Bill_Id + "&TansId=" + _Trans_Id + "&PatientID=" + _Pat_Id;
//            }
//            else if (_data["BILL_TYPE_ID"] == 7) {
//                var _Bill_Id = _data["BILL_ID"], _UmrNO = _data["UMR_NO"], _Pat_Id = _data["PATIENT_ID"];
//                var _TrnsID = _data["TRANSACTION_ID"];
//                var Type = "OP";
//                var pane = 0;
//                window.location = "OPBillClientSide.aspx?REGCONBILL=Y&pane=" + pane + "&Type=" + Type + "&BillId=" + _TrnsID + "&MODE=VIEW&BID=" + _Bill_Id;
//            }

        }
        function ViewUploadedDoc(objs) {
            var _data = gridControl.getDataRow(objs);
            var UmrNo = _data["UMR_NO"]; var RegNo = _data["REGISTRATION_NO"];
            ShowMyWindow(UmrNo, RegNo);
        }
        function ViewDownloadedDoc(objs) {
            var _data = gridControl.getDataRow(objs);
            var Umr_No = _data["UMR_NO"];
            var Admn_No = '';
            ViewMyWindow(Umr_No);
        }
        function ShowMyWindow(UmrNo, RegNo) {
            window.open('../FrontOffice/IPBilling/FileUpload.aspx?ADMN_NO=' + RegNo + '&UMR_NO=' + UmrNo + '' + '', '' + '' + '', '' + 'fullscreen=no,maximize=1,top=100,left=350,right=0,bottom=0,toolbar=no,status=no,location=no,menubar=no,addressbar=no,address=no,scrollbar=no,width=700,height=450');
            return false;
        }
        function ViewMyWindow(umr_no) {
         var path = document.getElementById('ctl00_ContentPlaceHolder1_headerControl1_hdndownloadpath').value;
        var umrno = umr_no;
        var userid=<%=SessionHandler.UserID %>;
        var filepath = path + umrno + "," + userid + ",N";
        window.open(filepath);
        return false;
        }
       function get_Hc_pkg_dtls()
        {
        
         var _Dt = document.getElementById('ctl00_ContentPlaceHolder1_ucDateSearchControl1_txtDate').value;
          var _fDt = GetDates("FROM_DT", _Dt); var _tDt = GetDates("TO_DT", _Dt);
          GetAsync(
          "GridService.asmx/Get_Hc_Count_status",
          {_fDt:_fDt,_tDt:_tDt},
          function(jdata)
          {
              if(jdata.d==null || jdata.d==undefined || jdata.d=='')
              {

              }
              else
              {
                    document.getElementById('ctl00_ContentPlaceHolder1_lblHcPkgsCount').innerHTML=jdata.d[0].HC_COUNT;
                    document.getElementById('ctl00_ContentPlaceHolder1_lblMlsGvnCnt').innerHTML=jdata.d[0].HC_TOKEN_GIVEN;
                    document.getElementById('ctl00_ContentPlaceHolder1_lblSrvdcnt').innerHTML=jdata.d[0].HC_RECEIVED_TOKENS;
              }
          },
          function(jhx,status,Error_data)
          {}
          );
        }

        var k=0;
         var bill_type_id = '';
     function onChageTypeFilter() {
         var typefilter = $('[id*=ddltypefilter]').val();
         if (typefilter == "REGISTRATION") {
               bill_type_id = '0,15';
               k=1;

         }
         if (typefilter == "CONSULTATION") {
             bill_type_id = '2,20';
             k=1;
         }
           if (typefilter == "OP_BILL") {
             bill_type_id ='7,17' ;
             k=2;
         }
//           if (typefilter == "OP_CORPORATE_BILL") {
//             bill_type_id =17 ;
//         }

//           if (typefilter == "CORPORATE_OP_CONSULTATION") {
//             bill_type_id = 20 ;
//         }

           if (typefilter == "OSP_BILL") {
             bill_type_id = '15' ;
         }
           if (typefilter == "ALL") {
             bill_type_id = 'A' ;
             k=2;
         }

         if(bill_type_id=='A'){
         
         BindRegistrationGrid2();
         
         }
         else{
         BindRegistrationGrid();
         }


     }

             function httpGet(theUrl)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
}

             function WristBand(obj,printdocid)
 {
     if(bill_type_id=='A'){ _data = getRow(obj);}
    else{
        _data = gridControl.getDataRow(obj);
        }
          if(_data["RECORD_STATUS"]=='C')
         {
            $(".stoast").toastText("warning", "Print is not required for Cancelled Consultations", 5, 3);
         }
         else{
             var _bill_id=_data["BILL_ID"];
          var _umr_no=_data["UMR_NO"];
           //window.open("barcode://L-" + _data["BILL_NO"]);
           if($('[id*=hdnIstokencall]').val() == "True"){
           
           if (localStorage.getItem("selectedCounter") != null || localStorage.getItem("selectedCounter")!= undefined ||localStorage.getItem("selectedCounter") != ''  ||localStorage.getItem("selectedCounter") != 'undefined'){
var burl=window.location.origin+'/wristband/patient/WristPrn?BillNo='+_data["BILL_NO"]+'&Report_Type=W&Counter='+localStorage.getItem("selectedCounter");
c=JSON.parse(httpGet(burl));
if(c.status.code==200){ $(".stoast").toastText("warning", "WristBand print sent to printer", 5, 2);}else{ $(".stoast").toastText("warning", "error", 5, 3);}
}
}

         }
             return false;
    }


             function BindRegistrationGrid2() {
        get_Hc_pkg_dtls();
        var Fourth_bill_id;
        var eventFlag='';
            var defpagesize = $('[id*=hdninitialgridpagecount]').val();
            if (defpagesize == "" || defpagesize == null || defpagesize == undefined || defpagesize == "0") { defpagesize = "10"; }
            var hdndateFrmt = document.getElementById('ctl00_ContentPlaceHolder1_headerControl1_hdnDateFormat').value;
            if (hdndateFrmt == undefined || hdndateFrmt == null || hdndateFrmt == "") { hdndateFrmt = "dd-MMM-yyyy"; }
            var hdnTimeFormat = document.getElementById('ctl00_ContentPlaceHolder1_headerControl1_hdnTimeFormat').value;
            if (hdnTimeFormat == undefined || hdnTimeFormat == null || hdnTimeFormat == "") { hdnTimeFormat = "HH:mm:ss"; }
            var fDt = ''; var tDt = ''; var cName = 'DISPLAY_NAME'; var pText = '';
            var _dt = document.getElementById('ctl00_ContentPlaceHolder1_ucDateSearchControl1_txtDate').value;
            fDt = GetDates('FROM_DT', _dt); tDt = GetDates('TO_DT', _dt);
            var param = param || {};
            param.dataKey = "TRANSACTION_ID";
            param.pageSize = defpagesize;
            param.pageNum = 1;
            param.defaultWSParams = { _cName: cName, _fDt: fDt, _pText: pText, _tDt: tDt, _advSrch: '',  _eventFlag:eventFlag };
            param.wsPath = "Private/FrontOffice/OP_Quick_Grid_New.aspx/RegBillGrid";
            param.wsFilterPath = "Private/FrontOffice/OP_Quick_Grid_New.aspx/RegBillGrid";
            param.template = [<%= getPermissions() %> 
                                , "UMR_NO*UMR_NO"
                                , "DISPLAY_NAME*DISPLAY_NAME"
                                , "MOBILE_NO1*MOBILE_NO1"
                                , "MOBILE_NO2*MOBILE_NO2"
                                , "GROSS_AMOUNT*GROSS_AMOUNT"
                                , "CONCESSION_AMOUNT*CONCESSION_AMOUNT"
                                , "NET_AMT*NET_AMT"  
                                , "PAID_AMOUNT*PAID_AMOUNT"
                                , "DUE_AMOUNT*DUE_AMOUNT"
                                , "PAT_GROSS_AMOUNT*PAT_GROSS_AMOUNT"
                                , "PAT_CONCESSION_AMOUNT*PAT_CONCESSION_AMOUNT"
                                , "PAT_NET_AMT*PAT_NET_AMT"
                                , "PAT_PAID_AMOUNT*PAT_PAID_AMOUNT"
                                , "PAT_DUE_AMOUNT*PAT_DUE_AMOUNT"
                                , "CMP_GROSS_AMT*CMP_GROSS_AMT"
                                , "COMPANY_CONCESSION_AMOUNT*COMPANY_CONCESSION_AMOUNT"
                                , "CMP_NET_AMT*CMP_NET_AMT"
                                , "CMP_PAID_AMT*CMP_PAID_AMT"                                
                                , "COMPANY_DUE*COMPANY_DUE"
                                , "AUTHORIZED_NAME*CONCESSION_AUTHORIZATION_NAME"
                                , "DUE_AUTHORIZATION_NAME*DUE_AUTHORIZATION_NAME"
                                , "FOREIGN_CATEGORIES_NAME*FOREIGN_CATEGORIES_NAME"
                                , "Transaction_no*Transaction_no"
                                , "Transaction_dt*TRANSACTION_DT"
                              /*  , "CONCESSION_AMOUNT*CONCESSION_AMOUNT"
                                , "PAID_AMOUNT*PAID_AMOUNT"
                                , "DUE_AMOUNT*DUE_AMOUNT" 
                                ,"CONCESSION_AUTHORIZATION_NAME*CONCESSION_AUTHORIZATION_NAME"
                                ,"DUE_AUTHORIZATION_NAME*DUE_AUTHORIZATION_NAME"
                                ,"OUTSTANDING_DUE*OUTSTANDING_DUE"
                                ,"DOCTOR_DEPARTMENT_NAME*DOCTOR_DEPARTMENT_NAME"
                                ,"REFERAL_TYPE_NAME*REFERAL_TYPE_NAME"
                                ,"REFERAL_SOURCE_NAME*REFERAL_SOURCE_NAME"
                                ,"REFERAL_DOCTOR_NAME*REFERAL_DOCTOR_NAME"
                                ,"REFERRED_BY*REFERRED_BY"*/
                                , "CREATED_BY*CREATED_BY"
                                , "CREATE_DT*CREATE_DT"
                                , "MODIFIED_BY*MODIFIED_BY"
                                , "MODIFY_DT*MODIFY_DT"
                                ,"REC_TYPE_NAME*REC_TYPE_NAME"
                                ,"BILL_AMOUNT_EXC_GST*BILL_AMOUNT_EXC_GST"
                                ,"NET_AMOUNT_EXC_GST*NET_AMOUNT_EXC_GST"
                                ,"GST_AMOUNT*GST_AMOUNT"
                                ,"SGST_AMOUNT*SGST_AMOUNT"
                                ,"CGST_AMOUNT*CGST_AMOUNT" 
                                ,"OUTSTANDING_DUE*OUTSTANDING_DUE" 
                                ,"PAT_OUTSTANDING_DUE*PAT_OUTSTANDING_DUE" 
                                ,"CMP_OUTSTANDING_DUE*CMP_OUTSTANDING_DUE" 
                                ];
            param.header = [{ col:"Manage" ,sort: false, filter: false,width:"100px"}
                            , { col: "Umr #", sort: true, filter: true }
                            , { col: "Patient Name", sort: false, filter: true }
                            , { col: "Mobile No1", sort: false, filter: true }
                            , { col: "Mobile No2", sort: false, filter: true }
                            , { col: "Total Amt", sort: false, filter: true }
                            , { col: "Concession Amt", sort: false, filter: true }
                            , { col: "Net Amt", sort: false, filter: true }
                            , { col: "Paid Amt", sort: false, filter: true }
                            , { col: "Due Amt", sort: false, filter: true }
                            , { col: "Patient Total Amt", sort: false, filter: true }
                            , { col: "Patient Conc Amt", sort: false, filter: true }
                            , { col: "Patient Net Amt", sort: false, filter: true }
                            , { col: "Patient Paid Amt", sort: false, filter: true }
                            , { col: "Patient Due Amt", sort: false, filter: true }
                            , { col: "Company Total Amt", sort: false, filter: true }
                            , { col: "Company Conc Amt", sort: false, filter: true }
                            , { col: "Company Net Amt", sort: false, filter: true }
                            , { col: "Company Paid Amt", sort: false, filter: true }
                            , { col: "Company Due Amt", sort: false, filter: true }
                            , { col: "Concession Auth Name", sort: false, filter: true }
                            , { col: "Due Auth Name", sort: false, filter: true }
                            , { col: "Patient Category", sort: false, filter: true }
                            , { col: "Transaction no", sort: false, filter: true }
                            , { col: "Transaction dt", sort: false, filter: false }
                         /*   , { col: "Concession Amount", sort: true, filter: true }
                            , { col: "Paid Amount", sort: true, filter: true }
                            , { col: "Due Amount", sort: true, filter: true } 
                            ,{ col:"Concession Authorization Name",sort: true, filter: true}
                            ,{ col:"Due Authorization Name",sort: true, filter: true}
                           ,{ col:"Outstanding  Due Amount",sort: true, filter: true}
                            ,{col:"Doctor Department Name",sort: true, filter: true}
                            ,{ col:"Referal Type Name", sort: true, filter: true } 
                            ,{ col:"Referal Source Name", sort: true, filter: true } 
                            ,{col:"Reral Doctor Name", sort: true, filter: true }
                            ,{col:"Referred By", sort: true, filter: true} */
                            , { col: "Created By", sort: true, filter: true } 
                            , { col: "Created Dt", sort: false, filter: false }
                            , { col: "Modified By", sort: true, filter: true }
                            , { col: "Modified Dt", sort: false, filter: false }
                            , { col: "Is OD", sort: false, filter: false }
                            , { col: "Bill Amt EXC GST", sort: false, filter: true }
                          , { col: "Net Amt EXC GST", sort: false, filter: true }
                           , { col: "GST Amt", sort: false, filter: true }
                            , { col: "SGST Amt", sort: false, filter: true }
                             , { col: "CGST Amt", sort: false, filter: true }
                            , { col: "Out Due Amt", sort: false, filter: true }
                             , { col: "Pat Out Due Amt", sort: false, filter: true }
                             , { col: "Cmp Out Due Amt", sort: false, filter: true }
                            ];
            param.enablePaging = true;
            param.enableTrace = false;
            param.enableSorting = true;
            param.enableDMS=true;
            param.enableFilter = true;
            param.enableCheckbox = false;
            param.RowNo = true;
                  
            param.RowDataBinding = function (rowitem, _data) {
             var Colors = '';
                var obj = $(rowitem);
                $(obj).find("td").each(function (i, j) {
                var dateformat = $('#ctl00_ContentPlaceHolder1_hdndateformat').val();
                var split = dateformat.split(' ');
               current_format = split[0];
               if(i==2){
             var billtype=_data.BILL_TYPE_ID.split(',');
                     for(i=0;i<billtype.length ;i++){
                if (billtype[i] == "0")/*Registration*/
                    {
                    $(this).find('A:eq(0)').css('display', 'block')
                     Colors += '<i class="fser9 gico1" title="Registration"></i>';
                    }
                    else if (billtype[i] == "2")/*Consultation*/
                    {
                    $(this).find('A:eq(0)').css('display', 'block')
                     Colors += '<i class="fser3 gico1" title="Consultation"></i>';
                    }
                    else if (billtype[i] == "7")/*OP General Bill*/
                    {
                    $(this).find('A:eq(0)').css('display', 'block')
                     Colors += '<i class="fser gico1" title="OP General Bill"></i>';
                    }

                    else  if (billtype[i] == "17")/*OP Corporate bill*/
                    {
                    $(this).find('A:eq(0)').css('display', 'block')
                     Colors += '<i class="fser2 gico1" title="OP Corporate bill"></i>';
                    }
                    else  if (billtype[i]== "20")/*Corporate OP Consultation*/
                    {
                    $(this).find('A:eq(0)').css('display', 'block')
                     Colors += '<i class="fser6 gico1" title="Corporate OP Consultation"></i>';
                    }
                    else  if (billtype[i] == "15")/*OSP Bill*/
                    {
                    $(this).find('A:eq(0)').css('display', 'block')
                     Colors += '<i class="fser5 gico1" title="OSP Bill"></i>';
                    }
                    else
                    {
                     $(this).find('A:eq(0)').css('display', 'none')
                    
                    }
                    }

                     
                   
                   
                  $(this).append('<div class="slegend1">' + Colors + '</div>');
                     
               
               
               }
                    if (i == 26) {
                        if (_data.Transaction_dt != undefined && _data.Transaction_dt != null && _data.Transaction_dt != "" && _data.Transaction_dt != "null")
                            $(this).text(new Date(_data.Transaction_dt).format(current_format) + " " + new Date(_data.Transaction_dt).format(hdnTimeFormat));
                            $('#_div_Registrations_FreezeHeader').find('input[id*=txt_div_Registrations_MOBILE_NO]').prop('onpaste',false);
                    }
                    if (i == 28) {
                        if (_data.CREATE_DT != undefined && _data.CREATE_DT != null && _data.CREATE_DT != "" && _data.CREATE_DT != "null")
                            $(this).text(new Date(_data.CREATE_DT).format(current_format) + " " + new Date(_data.CREATE_DT).format(hdnTimeFormat));
                    }
                    if (i == 30) {
                        if (_data.MODIFY_DT != undefined && _data.MODIFY_DT != null && _data.MODIFY_DT != "" && _data.MODIFY_DT != "null")
                            $(this).text(new Date(_data.MODIFY_DT).format(current_format) + " " + new Date(_data.MODIFY_DT).format(hdnTimeFormat));
                    }
                    if(_data.RECORD_STATUS == "C"){
                               $(this).closest('tr').attr('style', 'BACKGROUND-COLOR:Pink');  
                        }
                });
                return obj[0].outerHTML;
            };
            param.treeCallBack = function (me) {
            
                var _pk = $(me).data("key");
                _UmrNO=JSON.parse($(me).next().html()).UMR_NO;
            _patID=JSON.parse($(me).next().html()).PATIENT_ID;
                var _tr = $(me);
                var _data = gridControl.getDataRow(_pk);
                var _grpNo = _data["GRP_BILL_NO"];
                if(_grpNo==null || _grpNo==undefined || _grpNo==isNaN) { _grpNo = "" ; }
                var bill_id=_data["BILL_ID"];
                var _ajax = "Private/FrontOffice/OP_Quick_Grid_New.aspx/GetFirstChild";
                             //_grpNo = "";        
                BuildChildTree({ id: _pk, no: _grpNo, bill_id : bill_id }, _tr, "BILL_ID", "TRANSACTION_ID", _ajax, {
                    Manage:<%= getChildPermissions() %>
                    , BILL_NO: "BIll No"
                    , BILL_DT: "Bill dt"
                    , DOCTOR_NAME: "Doctor Name"
                    , DOCTOR_NAME: "Doctor Name"
                    /*, CONSULTANT_TRANSFER_DT : "Cons Tran.Dt"*/

                    , GROSS_AMOUNT: "Total Bill Amount"
                    , CONCESSION_AMOUNT: "Total Concession Amount"
                    , NET_AMOUNT: "Total Net Amount"  
                    , PAID_AMOUNT: "Total Paid Amount"
                    , DUE_AMOUNT: "Total Due Amount"
                    
                    , PAT_GROSS_AMOUNT: "Patient Bill Amount"
                    , PAT_CONCESSION_AMOUNT: "Patient Concession Amount"
                    , PAT_NET_AMT: "Patient Net Amount"
                    , PAT_PAID_AMOUNT: "Patient Paid Amount"
                    , PAT_DUE_AMOUNT: "Patient Due Amount"
                   
                    , COMPANY_AMOUNT: "Company Bill Amount"
                    , COMPANY_CONCESSION_AMOUNT: "Company Concession Amount"
                    , COMPANY_NET_AMOUNT: "Company Net Amount"                    
                    , COMPANY_DUE_AMOUNT: "Company Due Amount"
                    , HEALTH_CARD_NO: "Health Card #"
                    , APPT_NO: "Appointment #"
                  /*  , CASH_CONCESSION_AMOUNT: "Cash Concession Amount"
                    , CASH_CONCESSION_PCNT: "Cash Concession %"
                    , HC_CONCESSION_AMOUNT: "Hc Concession Amount"
                    , HC_CONCESSION_PCNT: "Hc Concession %"
                    , MANAGMENT_CONCESSION_AMOUNT: "Managment Concession Amount"
                    , MANAGMENT_CONCESSION_PCNT: "Managment Concession %"
                    , STAFF_CONCESSION_AMOUNT: "Staff Concession Amount"
                    , STAFF_CONCESSION_PCNT: "Staff Concession %"
                    , EVENT_BASED_CONCESSION_AMOUNT: "Event Based Concession Amount"
                    , EVENT_BASED_CONCESSION_PCNT: "Event Based Concession %"
                    , CONCESSION_RULE_CONCESSION_AMOUNT: "Concession Rule Concession Amount"
                    , CONCESSION_RULE_CONCESSION_PCNT: "Concession Rule Concession %" */
                    ,BILL_AMOUNT_EXC_GST: "Bill Amount Exc GST"
                    ,NET_AMOUNT_EXC_GST: "Net Amount Exc GST %"
                    ,GST_AMOUNT: "GST Amt"
                    ,SGST_AMOUNT: "SGST Amt"
                    ,CGST_AMOUNT: "CGST Amt"
                    ,OUTSTANDING_DUE:"Out Due Amt"
                    ,RECORD_STATUS: "Record Status"

                }, 1, true, function () {
                
                    $(".ajaxlevel_2_click").click(function (e) {
                        e.stopImmediatePropagation();
                        if ($(this).val() == "+") { $(this).val('-'); } else { $(this).val('+'); }
                        var _pk = $(this).data("key"); /* bill_srv_id */
                        Fourth_bill_id=_pk;
                        bill_id_globe=$(this).data("key");
                        
                        var _srv_id = $(this).data("key1");
                        var _tr = $(this);
                        console.log(_data);
                        var _ajax = "Private/FrontOffice/OP_Quick_Grid_New.aspx/GetSecondChild";
                        BuildSecondChildTree({ id: _pk }, _tr, "SERVICE_ID", "SERVICE_ID", _ajax, { 
                        Manage:<%= getGetSecondChildPermissions() %>,
                        SERVICE_CODE: "Code",
                            SERVICE_NAME: "Service Name",
                            ORDER_ID: "Indent No",
                            RECORD_STATUS: "Status",
                            AMOUNT: "Amount",
                            SRV_NET_AMOUNT: "Srv Net Amt",
                            SRV_CONCESSION_AMOUNT: "Srv Concession Amt",
                            SRV_CASH_CONCESSION_AMOUNT: "Srv Cash Concession Amt",
                            SRV_CASH_CONCESSION_PCNT: "Srv Cash Concession %",
                            SRV_HC_CONCESSION_AMOUNT: "Srv Hc Concession Amt",
                            SRV_HC_CONCESSION_PCNT: "Srv Hc Concession %",
                            SRV_MANAGMENT_CONCESSION_AMOUNT: "Srv Management Concession Amt",
                            SRV_MANAGMENT_CONCESSION_PCNT: "Srv Management Concession %",
                            SRV_STAFF_CONCESSION_AMOUNT: "Srv Staff Concession Amt",
                            SRV_STAFF_CONCESSION_PCNT: "Srv Staff Concession %",
                            SRV_EVENT_BASED_CONCESSION_AMOUNT: "Srv Event Based Concession Amt",
                            SRV_EVENT_BASED_CONCESSION_PCNT: "Srv Event Based Concession %",
                            SRV_CONCESSION_RULE_CONCESSION_AMOUNT: "Srv Concession Rule Concession Amt",
                            SRV_CONCESSION_RULE_CONCESSION_PCNT: "Srv Concession Rule Concession %"
                           ,RATE_EXC_GST: "Amount Exc GST"
                           ,TAX_PCT: "GST %"
                           ,TAX_AMOUNT: "GST Amt"
                           ,SGST_PCT: "SGST %"
                           ,SGST_AMOUNT: "SGST Amt"
                           ,CGST_PCT: "CGST %"
                           ,CGST_AMOUNT: "CGST Amt"
                           ,SAC_CD : "SAC Cd" 
                          
                        }, 2, true, function () {
                            $(".ajaxlevel_3_click").click(function (e) {
                            
                            e.stopImmediatePropagation();
                                if ($(this).val() == "+") { $(this).val('-'); } else { $(this).val('+'); }
                               
                                var _pk = $(this).data("key"); /* bill_srv_id */
                                var _srv_id = $(this).data("key1");
                                var _tr = $(this);
                                var _ajax = "Private/FrontOffice/OP_Quick_Grid.aspx/GetThirdChild";
                                BuildChildTree({ Srv_id: _srv_id, id: Fourth_bill_id }, _tr, "SERVICE_ID", "SERVICE_ID", _ajax, {
                                   Manage:<%= getGetTHirdChildPermissions() %>,
                                    SERVICE_NAME: "Service Name",
                                    PRICE: "Amount",
                                    CONCESSION_AMOUNT: "Concession Amt",
                                    NET_AMOUNT: "Net Amt",
                                    SERVICE_STATUS: "Srv Status",
                                    SRV_NET_AMOUNT: "Srv Net Amt",
                                    SRV_CONCESSION_AMOUNT: "Srv Concession Amt",
                                    SRV_CASH_CONCESSION_AMOUNT: "Srv Cash Concession Amt",
                                    SRV_CASH_CONCESSION_PCNT: "Srv Cash Concession %",
                                    SRV_HC_CONCESSION_AMOUNT: "Srv Hc Concession Amt",
                                    SRV_HC_CONCESSION_PCNT: "Srv Hc Concession %",
                                    SRV_MANAGMENT_CONCESSION_AMOUNT: "Srv Management Concession Amt",
                                    SRV_MANAGMENT_CONCESSION_PCNT: "Srv Management Concession %",
                                    SRV_STAFF_CONCESSION_AMOUNT: "Srv Staff Concession Amt",
                                    SRV_STAFF_CONCESSION_PCNT: "Srv Staff Concession %",
                                    SRV_EVENT_BASED_CONCESSION_AMOUNT: "Srv Event Based Concession Amt",
                                    SRV_EVENT_BASED_CONCESSION_PCNT: "Srv Event Based Concession %",
                                    SRV_CONCESSION_RULE_CONCESSION_AMOUNT: "Srv Concession Rule Concession Amt",
                                    SRV_CONCESSION_RULE_CONCESSION_PCNT: "Srv Concession Rule Concession %"  
                                    ,RATE_EXC_GST: "Amount Exc GST"
                                    ,TAX_PCT: "GST %"
                                    ,TAX_AMOUNT: "GST Amt"
                                    ,SGST_PCT: "SGST %"
                                    ,SGST_AMOUNT: "SGST Amt"
                                    ,CGST_PCT: "CGST %"
                                    ,CGST_AMOUNT: "CGST Amt"
                                    ,SAC_CD : "SAC Cd"                                  
                                }, 3, false);
                            });
                        });
                    });
                });
            };
            gridControl = $("#div_Registrations").jMtable(param);
            return false;
        }






        function BindRegistrationGrid() {
        get_Hc_pkg_dtls();
        var Fourth_bill_id;
        var eventFlag='';
            var defpagesize = $('[id*=hdninitialgridpagecount]').val();
            if (defpagesize == "" || defpagesize == null || defpagesize == undefined || defpagesize == "0") { defpagesize = "10"; }
            var hdndateFrmt = document.getElementById('ctl00_ContentPlaceHolder1_headerControl1_hdnDateFormat').value;
            if (hdndateFrmt == undefined || hdndateFrmt == null || hdndateFrmt == "") { hdndateFrmt = "dd-MMM-yyyy"; }
            var hdnTimeFormat = document.getElementById('ctl00_ContentPlaceHolder1_headerControl1_hdnTimeFormat').value;
            if (hdnTimeFormat == undefined || hdnTimeFormat == null || hdnTimeFormat == "") { hdnTimeFormat = "HH:mm:ss"; }
            var fDt = ''; var tDt = ''; var cName = 'DISPLAY_NAME'; var pText = '';
            var _dt = document.getElementById('ctl00_ContentPlaceHolder1_ucDateSearchControl1_txtDate').value;
            fDt = GetDates('FROM_DT', _dt); tDt = GetDates('TO_DT', _dt);
            var param = param || {};
            param.dataKey = "TRANSACTION_ID";
            param.pageSize = defpagesize;
            param.pageNum = 1;
            param.defaultWSParams = { _cName: cName, _fDt: fDt, _pText: pText, _tDt: tDt, _advSrch: '',  _eventFlag:eventFlag ,_bill_type_id:bill_type_id};
            param.wsPath = "Private/FrontOffice/OP_Quick_Grid_New.aspx/RegBillGrid2";
            param.wsFilterPath = "Private/FrontOffice/OP_Quick_Grid_New.aspx/RegBillGrid2";
            param.template = [<%= getPermissions2() %>
                                , "UMR_NO*UMR_NO"
                                , "DISPLAY_NAME*DISPLAY_NAME"
                                , "MOBILE_NO1*MOBILE_NO1"
                                , "MOBILE_NO2*MOBILE_NO2"
                                , "GROSS_AMOUNT*GROSS_AMOUNT"
                                , "CONCESSION_AMOUNT*CONCESSION_AMOUNT"
                                , "NET_AMT*NET_AMT"  
                                , "PAID_AMOUNT*PAID_AMOUNT"
                                , "DUE_AMOUNT*DUE_AMOUNT"
                                , "PAT_GROSS_AMOUNT*PAT_GROSS_AMOUNT"
                                , "PAT_CONCESSION_AMOUNT*PAT_CONCESSION_AMOUNT"
                                , "PAT_NET_AMT*PAT_NET_AMT"
                                , "PAT_PAID_AMOUNT*PAT_PAID_AMOUNT"
                                , "PAT_DUE_AMOUNT*PAT_DUE_AMOUNT"
                                , "CMP_GROSS_AMT*CMP_GROSS_AMT"
                                , "COMPANY_CONCESSION_AMOUNT*COMPANY_CONCESSION_AMOUNT"
                                , "CMP_NET_AMT*CMP_NET_AMT"
                                , "CMP_PAID_AMT*CMP_PAID_AMT"                                
                                , "COMPANY_DUE*COMPANY_DUE"
                                , "AUTHORIZED_NAME*CONCESSION_AUTHORIZATION_NAME"
                                , "DUE_AUTHORIZATION_NAME*DUE_AUTHORIZATION_NAME"
                                , "FOREIGN_CATEGORIES_NAME*FOREIGN_CATEGORIES_NAME"
                                , "PATIENT_STATUS*PATIENT_STATUS"
                                , "Transaction_no*Transaction_no"
                                , "Transaction_dt*TRANSACTION_DT"
                              /*  , "CONCESSION_AMOUNT*CONCESSION_AMOUNT"
                                , "PAID_AMOUNT*PAID_AMOUNT"
                                , "DUE_AMOUNT*DUE_AMOUNT" 
                                ,"CONCESSION_AUTHORIZATION_NAME*CONCESSION_AUTHORIZATION_NAME"
                                ,"DUE_AUTHORIZATION_NAME*DUE_AUTHORIZATION_NAME"
                                ,"OUTSTANDING_DUE*OUTSTANDING_DUE"
                                ,"DOCTOR_DEPARTMENT_NAME*DOCTOR_DEPARTMENT_NAME"
                                ,"REFERAL_TYPE_NAME*REFERAL_TYPE_NAME"
                                ,"REFERAL_SOURCE_NAME*REFERAL_SOURCE_NAME"
                                ,"REFERAL_DOCTOR_NAME*REFERAL_DOCTOR_NAME"
                                ,"REFERRED_BY*REFERRED_BY"*/
                                , "CREATED_BY*CREATED_BY"
                                , "CREATE_DT*CREATE_DT"
                                , "MODIFIED_BY*MODIFIED_BY"
                                , "MODIFY_DT*MODIFY_DT"
                                ,"REC_TYPE_NAME*REC_TYPE_NAME"
                                ,"BILL_AMOUNT_EXC_GST*BILL_AMOUNT_EXC_GST"
                                ,"NET_AMOUNT_EXC_GST*NET_AMOUNT_EXC_GST"
                                ,"GST_AMOUNT*GST_AMOUNT"
                                ,"SGST_AMOUNT*SGST_AMOUNT"
                                ,"CGST_AMOUNT*CGST_AMOUNT" 
                                ];
            param.header = [{ col:"Manage" ,sort: false, filter: false,width:"100px"}
                            , { col: "Umr #", sort: true, filter: true }
                            , { col: "Patient Name", sort: false, filter: true }
                            , { col: "Mobile No1", sort: false, filter: true }
                            , { col: "Mobile No2", sort: false, filter: true }
                            , { col: "Total Amt", sort: false, filter: true }
                            , { col: "Concession Amt", sort: false, filter: true }
                            , { col: "Net Amt", sort: false, filter: true }
                            , { col: "Paid Amt", sort: false, filter: true }
                            , { col: "Due Amt", sort: false, filter: true }
                            , { col: "Patient Total Amt", sort: false, filter: true }
                            , { col: "Patient Conc Amt", sort: false, filter: true }
                            , { col: "Patient Net Amt", sort: false, filter: true }
                            , { col: "Patient Paid Amt", sort: false, filter: true }
                            , { col: "Patient Due Amt", sort: false, filter: true }
                            , { col: "Company Total Amt", sort: false, filter: true }
                            , { col: "Company Conc Amt", sort: false, filter: true }
                            , { col: "Company Net Amt", sort: false, filter: true }
                            , { col: "Company Paid Amt", sort: false, filter: true }
                            , { col: "Company Due Amt", sort: false, filter: true }
                            , { col: "Concession Auth Name", sort: false, filter: true }
                            , { col: "Due Auth Name", sort: false, filter: true }
                            , { col: "Patient Category", sort: false, filter: true }
                            , { col: "Patient Type Name", sort: false, filter: true }
                            , { col: "Transaction no", sort: false, filter: true }
                            , { col: "Transaction dt", sort: false, filter: false }
                         /*   , { col: "Concession Amount", sort: true, filter: true }
                            , { col: "Paid Amount", sort: true, filter: true }
                            , { col: "Due Amount", sort: true, filter: true } 
                            ,{ col:"Concession Authorization Name",sort: true, filter: true}
                            ,{ col:"Due Authorization Name",sort: true, filter: true}
                           ,{ col:"Outstanding  Due Amount",sort: true, filter: true}
                            ,{col:"Doctor Department Name",sort: true, filter: true}
                            ,{ col:"Referal Type Name", sort: true, filter: true } 
                            ,{ col:"Referal Source Name", sort: true, filter: true } 
                            ,{col:"Reral Doctor Name", sort: true, filter: true }
                            ,{col:"Referred By", sort: true, filter: true} */
                            , { col: "Created By", sort: true, filter: true } 
                            , { col: "Created Dt", sort: false, filter: false }
                            , { col: "Modified By", sort: true, filter: true }
                            , { col: "Modified Dt", sort: false, filter: false }
                            , { col: "Is OD", sort: false, filter: false }
                            , { col: "Bill Amt EXC GST", sort: false, filter: true }
                          , { col: "Net Amt EXC GST", sort: false, filter: true }
                           , { col: "GST Amt", sort: false, filter: true }
                            , { col: "SGST Amt", sort: false, filter: true }
                             , { col: "CGST Amt", sort: false, filter: true }
                            ];
            param.enablePaging = true;
            param.enableTrace = false;
            param.enableSorting = true;
            param.enableDMS=true;
            param.enableFilter = true;
            param.enableCheckbox = false;
            param.RowNo = true;
                  
            param.RowDataBinding = function (rowitem, _data) {
             var Colors = '';
                var obj = $(rowitem);
                $(obj).find("td").each(function (i, j) {
                var dateformat = $('#ctl00_ContentPlaceHolder1_hdndateformat').val();
                var split = dateformat.split(' ');
               current_format = split[0];

               if(i==k){
             var billtype=_data.BILL_TYPE_ID;
                   //  for(i=0;i<billtype.length ;i++){
                if (billtype == "0")/*Registration*/
                    {
                    $(this).find('A:eq(0)').css('display', 'block')
                     $(this).find('A:eq(3)').css('display', 'none')
                     $(this).find('A:eq(4)').css('display', 'none')
                    $(this).find('A:eq(5)').css('display', 'none')
                          $(this).find('A:eq(6)').css('display', 'none')
                            $(this).find('A:eq(8)').css('display', 'none')

                     Colors += '<i class="fser9 gico1" title="Registration"></i>';
                    }
                    else if (billtype == "2")/*Consultation*/
                    {
                    $(this).find('A:eq(0)').css('display', 'block')
                      $(this).find('A:eq(1)').css('display', 'none')
                     $(this).find('A:eq(4)').css('display', 'none')
                    $(this).find('A:eq(6)').css('display', 'none')
                      $(this).find('A:eq(8)').css('display', 'block')
                     Colors += '<i class="fser3 gico1" title="Consultation"></i>';
                    }
                    else if (billtype == "7")/*OP General Bill*/
                    {
                    $(this).find('A:eq(0)').css('display', 'block')
                     $(this).find('A:eq(1)').css('display', 'none')
                     $(this).find('A:eq(3)').css('display', 'none')
                    $(this).find('A:eq(4)').css('display', 'none')
                    $(this).find('A:eq(5)').css('display', 'none')
                     $(this).find('A:eq(8)').css('display', 'none')
                     Colors += '<i class="fser gico1" title="OP General Bill"></i>';
                    }

                    else  if (billtype == "17")/*OP Corporate bill*/
                    {
                    $(this).find('A:eq(0)').css('display', 'block')
                     $(this).find('A:eq(1)').css('display', 'none')
                     $(this).find('A:eq(3)').css('display', 'none')
                    $(this).find('A:eq(4)').css('display', 'none')
                    $(this).find('A:eq(5)').css('display', 'none')
                     $(this).find('A:eq(8)').css('display', 'none')
                     Colors += '<i class="fser2 gico1" title="OP Corporate bill"></i>';
                    }
                    else  if (billtype== "20")/*Corporate OP Consultation*/
                    {
                    $(this).find('A:eq(0)').css('display', 'block')
                      $(this).find('A:eq(1)').css('display', 'none')
                     $(this).find('A:eq(4)').css('display', 'none')
                    $(this).find('A:eq(6)').css('display', 'none')
                     $(this).find('A:eq(8)').css('display', 'block')
                     Colors += '<i class="fser6 gico1" title="Corporate OP Consultation"></i>';
                    }
                    else  if (billtype == "15")/*OSP Bill*/
                    {
                    $(this).find('A:eq(0)').css('display', 'block')
                     $(this).find('A:eq(8)').css('display', 'none')
                     Colors += '<i class="fser5 gico1" title="OSP Bill"></i>';
                    }
                    else
                    {
                     $(this).find('A:eq(0)').css('display', 'none')
                    
                    }
                   // }

                     
                   
                   
                  $(this).find('div').append('<div class="slegend1">' + Colors + '</div>');
                     
               
               
               }

              // if(bill_type_id=='A'&&(_data.BILL_TYPE_ID=='7'||_data.BILL_TYPE_ID=='17'))
              if(bill_type_id=='A'&&(_data.BILL_TYPE_ID=='0'||_data.BILL_TYPE_ID=='2'||_data.BILL_TYPE_ID=='15'||_data.BILL_TYPE_ID=='20')) {
               if(i==1){
            
                   //$(this).css('display', 'none');
                  // $('.ajaxlevel_1_click').hide();
                   }
               }
               if(k==2){
              if (i == 27) {
                        if (_data.Transaction_dt != undefined && _data.Transaction_dt != null && _data.Transaction_dt != "" && _data.Transaction_dt != "null")
                            $(this).text(new Date(_data.Transaction_dt).format(current_format) + " " + new Date(_data.Transaction_dt).format(hdnTimeFormat));
                            $('#_div_Registrations_FreezeHeader').find('input[id*=txt_div_Registrations_MOBILE_NO]').prop('onpaste',false);
                    }
                    if (i == 29) {
                        if (_data.CREATE_DT != undefined && _data.CREATE_DT != null && _data.CREATE_DT != "" && _data.CREATE_DT != "null")
                            $(this).text(new Date(_data.CREATE_DT).format(current_format) + " " + new Date(_data.CREATE_DT).format(hdnTimeFormat));
                    }
                    if (i == 31) {
                        if (_data.MODIFY_DT != undefined && _data.MODIFY_DT != null && _data.MODIFY_DT != "" && _data.MODIFY_DT != "null")
                            $(this).text(new Date(_data.MODIFY_DT).format(current_format) + " " + new Date(_data.MODIFY_DT).format(hdnTimeFormat));
                    }
     }
     if(k==1){
         if (i == 26) {
                        if (_data.Transaction_dt != undefined && _data.Transaction_dt != null && _data.Transaction_dt != "" && _data.Transaction_dt != "null")
                            $(this).text(new Date(_data.Transaction_dt).format(current_format) + " " + new Date(_data.Transaction_dt).format(hdnTimeFormat));
                            $('#_div_Registrations_FreezeHeader').find('input[id*=txt_div_Registrations_MOBILE_NO]').prop('onpaste',false);
                    }
                    if (i == 28) {
                        if (_data.CREATE_DT != undefined && _data.CREATE_DT != null && _data.CREATE_DT != "" && _data.CREATE_DT != "null")
                            $(this).text(new Date(_data.CREATE_DT).format(current_format) + " " + new Date(_data.CREATE_DT).format(hdnTimeFormat));
                    }
                    if (i == 30) {
                        if (_data.MODIFY_DT != undefined && _data.MODIFY_DT != null && _data.MODIFY_DT != "" && _data.MODIFY_DT != "null")
                            $(this).text(new Date(_data.MODIFY_DT).format(current_format) + " " + new Date(_data.MODIFY_DT).format(hdnTimeFormat));
                    }
     
     }
                    if(_data.RECORD_STATUS == "C"){
                               $(this).closest('tr').attr('style', 'BACKGROUND-COLOR:Pink');  
                        }
                });
                return obj[0].outerHTML;
            };


            if(bill_type_id !='7,17'){

            param.treeCallBack = function (me) {
            var _pk = $(me).data("key");
                _UmrNO=JSON.parse($(me).next().html()).UMR_NO;
            _patID=JSON.parse($(me).next().html()).PATIENT_ID;
                var _tr = $(me);
                var _data = gridControl.getDataRow(_pk);
                var _grpNo = _data["GRP_BILL_NO"];
                if(_grpNo==null || _grpNo==undefined || _grpNo==isNaN) { _grpNo = "" ; }
                var bill_id=_data["BILL_ID"];
                        var _ajax = "Private/FrontOffice/OP_Quick_Grid_New.aspx/GetSecondChild";
               
                         BuildSecondChildTree({ id: bill_id }, _tr, "SERVICE_ID", "SERVICE_ID", _ajax, { 
                        Manage:<%= getGetSecondChildPermissions2() %>,
                        SERVICE_CODE: "Code",
                            SERVICE_NAME: "Service Name",
                            ORDER_ID: "Indent No",
                            RECORD_STATUS: "Status",
                            AMOUNT: "Amount",
                            SRV_NET_AMOUNT: "Srv Net Amt",
                            SRV_CONCESSION_AMOUNT: "Srv Concession Amt",
                            SRV_CASH_CONCESSION_AMOUNT: "Srv Cash Concession Amt",
                            SRV_CASH_CONCESSION_PCNT: "Srv Cash Concession %",
                            SRV_HC_CONCESSION_AMOUNT: "Srv Hc Concession Amt",
                            SRV_HC_CONCESSION_PCNT: "Srv Hc Concession %",
                            SRV_MANAGMENT_CONCESSION_AMOUNT: "Srv Management Concession Amt",
                            SRV_MANAGMENT_CONCESSION_PCNT: "Srv Management Concession %",
                            SRV_STAFF_CONCESSION_AMOUNT: "Srv Staff Concession Amt",
                            SRV_STAFF_CONCESSION_PCNT: "Srv Staff Concession %",
                            SRV_EVENT_BASED_CONCESSION_AMOUNT: "Srv Event Based Concession Amt",
                            SRV_EVENT_BASED_CONCESSION_PCNT: "Srv Event Based Concession %",
                            SRV_CONCESSION_RULE_CONCESSION_AMOUNT: "Srv Concession Rule Concession Amt",
                            SRV_CONCESSION_RULE_CONCESSION_PCNT: "Srv Concession Rule Concession %"
                           ,RATE_EXC_GST: "Amount Exc GST"
                           ,TAX_PCT: "GST %"
                           ,TAX_AMOUNT: "GST Amt"
                           ,SGST_PCT: "SGST %"
                           ,SGST_AMOUNT: "SGST Amt"
                           ,CGST_PCT: "CGST %"
                           ,CGST_AMOUNT: "CGST Amt"
                           ,SAC_CD : "SAC Cd" 
                          
                        }, 1, false);
  
            };
            }else{

            param.treeCallBack = function (me) {
//            
           //   if ($(this).val() == "+") { $(this).val('-'); } else { $(this).val('+'); }
                        var _pk = JSON.parse($(me).next().html()).BILL_ID/* bill_srv_id */
                        Fourth_bill_id=_pk;
                        //bill_id_globe=$(this).data("key");
                        
                        //var _srv_id = $(this).data("key1");
                           var _tr = $(me);
               var _ajax = "Private/FrontOffice/OP_Quick_Grid_New.aspx/GetSecondChild";
                            
                
                  BuildSecondChildTree({ id: _pk }, _tr, "SERVICE_ID", "SERVICE_ID", _ajax, { 
                        Managee:<%= getGetSecondChildPermissions() %>,
                        SERVICE_CODE: "Code",
                            SERVICE_NAME: "Service Name",
                            ORDER_ID: "Indent No",
                            RECORD_STATUS: "Status",
                            AMOUNT: "Amount",
                            SRV_NET_AMOUNT: "Srv Net Amt",
                            SRV_CONCESSION_AMOUNT: "Srv Concession Amt",
                            SRV_CASH_CONCESSION_AMOUNT: "Srv Cash Concession Amt",
                            SRV_CASH_CONCESSION_PCNT: "Srv Cash Concession %",
                            SRV_HC_CONCESSION_AMOUNT: "Srv Hc Concession Amt",
                            SRV_HC_CONCESSION_PCNT: "Srv Hc Concession %",
                            SRV_MANAGMENT_CONCESSION_AMOUNT: "Srv Management Concession Amt",
                            SRV_MANAGMENT_CONCESSION_PCNT: "Srv Management Concession %",
                            SRV_STAFF_CONCESSION_AMOUNT: "Srv Staff Concession Amt",
                            SRV_STAFF_CONCESSION_PCNT: "Srv Staff Concession %",
                            SRV_EVENT_BASED_CONCESSION_AMOUNT: "Srv Event Based Concession Amt",
                            SRV_EVENT_BASED_CONCESSION_PCNT: "Srv Event Based Concession %",
                            SRV_CONCESSION_RULE_CONCESSION_AMOUNT: "Srv Concession Rule Concession Amt",
                            SRV_CONCESSION_RULE_CONCESSION_PCNT: "Srv Concession Rule Concession %"
                           ,RATE_EXC_GST: "Amount Exc GST"
                           ,TAX_PCT: "GST %"
                           ,TAX_AMOUNT: "GST Amt"
                           ,SGST_PCT: "SGST %"
                           ,SGST_AMOUNT: "SGST Amt"
                           ,CGST_PCT: "CGST %"
                           ,CGST_AMOUNT: "CGST Amt"
                           ,SAC_CD : "SAC Cd" 

                }, 1, true, function () {
                
                  
                            $(".ajaxlevel_2_click").click(function (e) {
                            
                            e.stopImmediatePropagation();
                                if ($(this).val() == "+") { $(this).val('-'); } else { $(this).val('+'); }
                               
                                var _pk = $(this).data("key"); /* bill_srv_id */
                                var _srv_id = $(this).data("key1");
                                var _tr = $(this);



                                var _ajax = "Private/FrontOffice/OP_Quick_Grid.aspx/GetThirdChild";
                                BuildChildTree({ Srv_id: _srv_id, id: Fourth_bill_id }, _tr, "SERVICE_ID", "SERVICE_ID", _ajax, {
                                   Manage:<%= getGetTHirdChildPermissions() %> ,
                                    SERVICE_NAME: "Service Name",
                                    PRICE: "Amount",
                                    CONCESSION_AMOUNT: "Concession Amt",
                                    NET_AMOUNT: "Net Amt",
                                    SERVICE_STATUS: "Srv Status",
                                    SRV_NET_AMOUNT: "Srv Net Amt",
                                    SRV_CONCESSION_AMOUNT: "Srv Concession Amt",
                                    SRV_CASH_CONCESSION_AMOUNT: "Srv Cash Concession Amt",
                                    SRV_CASH_CONCESSION_PCNT: "Srv Cash Concession %",
                                    SRV_HC_CONCESSION_AMOUNT: "Srv Hc Concession Amt",
                                    SRV_HC_CONCESSION_PCNT: "Srv Hc Concession %",
                                    SRV_MANAGMENT_CONCESSION_AMOUNT: "Srv Management Concession Amt",
                                    SRV_MANAGMENT_CONCESSION_PCNT: "Srv Management Concession %",
                                    SRV_STAFF_CONCESSION_AMOUNT: "Srv Staff Concession Amt",
                                    SRV_STAFF_CONCESSION_PCNT: "Srv Staff Concession %",
                                    SRV_EVENT_BASED_CONCESSION_AMOUNT: "Srv Event Based Concession Amt",
                                    SRV_EVENT_BASED_CONCESSION_PCNT: "Srv Event Based Concession %",
                                    SRV_CONCESSION_RULE_CONCESSION_AMOUNT: "Srv Concession Rule Concession Amt",
                                    SRV_CONCESSION_RULE_CONCESSION_PCNT: "Srv Concession Rule Concession %"  
                                    ,RATE_EXC_GST: "Amount Exc GST"
                                    ,TAX_PCT: "GST %"
                                    ,TAX_AMOUNT: "GST Amt"
                                    ,SGST_PCT: "SGST %"
                                    ,SGST_AMOUNT: "SGST Amt"
                                    ,CGST_PCT: "CGST %"
                                    ,CGST_AMOUNT: "CGST Amt"
                                    ,SAC_CD : "SAC Cd"                                  
                                }, 3, false);
                            });
                        });
//                    });
                //});
           };
}

       if(bill_type_id=='7,17'||bill_type_id=='A'){
            gridControl = $("#div_Registrations").jMtable(param);
              return false;
            }
            else {
                gridControl = $("#div_Registrations").jtable(param);
                  return false;
            }

        }

        var arraykey,arraykey_third;
        var array = [];
        var arry_third_child=[];
        function getRow(key) {
            var _row = array;
            if (key !== undefined) {
                _row = {};
                for (var i in array) {
                    if (array[i]["BILL_ID"] == key) {
                        _row = array[i];
                        break;
                    }
                }
            }
            return _row;
        }
         function getRowthird_child(key) {
         
            var _row = arry_third_child;
            if (key !== undefined) {
                _row = {};
                for (var i in arry_third_child) {
                    if (arry_third_child[i][arraykey_third] == key) {
                        _row = arry_third_child[i];
                        break;
                    }
                }
            }
            return _row;
        }
        function BuildChildTree(dataKey, eventObject, targetID, targetID1, AJAXURL, bindColumns, level, Child, callBack) {
            var hdndateFrmt = document.getElementById('ctl00_ContentPlaceHolder1_headerControl1_hdnDateFormat').value;
            if (hdndateFrmt == undefined || hdndateFrmt == null || hdndateFrmt == "") { hdndateFrmt = "dd-MMM-yyyy"; }
            var hdnTimeFormat = document.getElementById('ctl00_ContentPlaceHolder1_headerControl1_hdnTimeFormat').value;
            if (hdnTimeFormat == undefined || hdnTimeFormat == null || hdnTimeFormat == "") { hdnTimeFormat = "HH:mm:ss"; }
            var _tr = "";
            if(level == 1 )
                arraykey = targetID;
            else if(level==3)
            { arraykey_third = targetID;}
            var _colcount = eventObject.parent().parent().find("td").length - 1;
            var _pk = eventObject.data("key");

            if (document.getElementById("tr_" + level + "_" + _pk) != null) {
                $("#tr_" + level + "_" + _pk).slideToggle();
            }
            else {
                ReturnAsync(
                 AJAXURL
                , dataKey
                , function (JData) {
                    _tr += "<tr id=\"tr_" + level + "_" + _pk + "\"><td>&nbsp;</td><td colspan=\"" + _colcount + "\"><table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" class=\"childtbl\" width=\"100%\"><thead><tr>";
                    _tr += "<th style=\"width:30px\">S.No.</th>";
                    if (Child)
                        _tr += "<th name='check'>&nbsp;</th>";
                    for (var _j in bindColumns) {
                        if (typeof bindColumns[_j] === "object") {
                            _tr += "<th  name='col" + _j + "'>Manage</th>";
                        }
                        else {
                            _tr += "<th  name='col" + _j + "'>" + bindColumns[_j] + "</th>";
                        }
                    }
                    _tr += "</tr></thead><tbody>";
                    if (JData.d != null) {
                    
                        $(JData.d[0]).each(function (i, j) {
                            if (level == 1)
                                array.push(JData.d[0][i]);
                                else if(level==3)
                                {  arry_third_child.push(JData.d[0][i]);}
                            _tr += "<tr><td>" + (parseInt(i) + 1) + "</td>";
                            if (Child && parseInt(j.BILL_TYPE_ID) != 0 && parseInt(j.BILL_TYPE_ID) != 2 && parseInt(j.BILL_TYPE_ID) != 20 && level == 1)
                                _tr += "<td name='check'><input type=\"button\" class='ajaxlevel_" + (level + 1) + "_click'  data-key='" + j[targetID] + "' data-key1='" + j[targetID1] + "' value=\"+\" /></td>";
                            else if (Child && parseInt(j.SERVICE_CLASS_ID) === 3)
                                _tr += "<td name='check'><input type=\"button\" class='ajaxlevel_" + (level + 1) + "_click'  data-key='" + j[targetID] + "' data-key1='" + j[targetID1] + "' value=\"+\" /></td>";
                            else if (level != 3)
                                _tr += "<td>&nbsp;</td>";
                                
                            for (var _j in bindColumns) {
                                if (typeof bindColumns[_j] === "object") {
                                    var _tr_td = '';
                                    var Colors='';
                                    for (var k in bindColumns[_j]) {
                                        if (bindColumns[_j][k].icon != "") {
                                            var tooltip = (bindColumns[_j][k].ToolTip != "" && bindColumns[_j][k].ToolTip != undefined) ? ("title=\"" + bindColumns[_j][k].ToolTip) + "\"" : "";
                                            var billsetprint = "";
                                            if (parseInt(j.BILL_TYPE_ID) == 7 || parseInt(j.BILL_TYPE_ID) == 17 || parseInt(j.BILL_TYPE_ID) == 15) {
                                                if (k == 1)
                                                    billsetprint = "Settle Print";
                                                else
                                                    billsetprint = bindColumns[_j][k].alt;
                                            }
                                            else if (parseInt(j.BILL_TYPE_ID) == 0) {
                                                if (k == 1)
                                                    billsetprint = "Card Print";
                                                else
                                                    billsetprint = bindColumns[_j][k].alt;
                                            }
                                            else {
                                                billsetprint = bindColumns[_j][k].alt;
                                            }
                                            var _displayValue='block';
                                           
                                            if(k=='2')
                                            {
                                             if((j.BILL_TYPE_ID=='7' || j.BILL_TYPE_ID=='15' || j.BILL_TYPE_ID=='17')&& j.PKG_DTS == 'Y')
                                            {
                                            _displayValue='block';
                                            }
                                             else
                                             {
                                             _displayValue='none';
                                             }
                                            }
                                            if(level==3){
                                             if(j.SERVICE_TYPE_ID!='12'){
                                             _displayValue='none';
                                             }
}
                                            if(k=='3')
                                            {
                                           
                                            if(j.BILL_TYPE_ID=='2' || j.BILL_TYPE_ID=='20')
                                            {
                                            _displayValue='block';
                                            }
                                             else
                                             {
                                             _displayValue='none';
                                             }

                                            }
                                            
                                            _tr_td += "<a style=\"display: " + _displayValue + "\" href=\"#\" title=\" " + (billsetprint) + "\" class=\"gico g" + (bindColumns[_j][k].alt).replace(/\s+/g, '') + "\"  onClick=\"" + bindColumns[_j][k].click + "('" + j[targetID] + "')\"><img " + tooltip + "  src=\"" + bindColumns[_j][k].icon + "\"/></a>";
                                        
                                        
                                        }
                                    }

                     if (j.BILL_TYPE_ID == "0")/*Registration*/
                    {
                    $(this).find('A:eq(0)').css('display', 'block')
                     Colors += '<i class="fser9 gico1" title="Registration"></i>';
                    }
                    else if (j.BILL_TYPE_ID == "2")/*Consultation*/
                    {
                    $(this).find('A:eq(0)').css('display', 'block')
                     Colors += '<i class="fser3 gico1" title="Consultation"></i>';
                    }
                    else if (j.BILL_TYPE_ID == "7")/*OP General Bill*/
                    {
                    $(this).find('A:eq(0)').css('display', 'block')
                     Colors += '<i class="fser gico1" title="OP General Bill"></i>';
                    }

                    else  if (j.BILL_TYPE_ID == "17")/*OP Corporate bill*/
                    {
                    $(this).find('A:eq(0)').css('display', 'block')
                     Colors += '<i class="fser2 gico1" title="OP Corporate bill"></i>';
                    }
                    else  if (j.BILL_TYPE_ID == "20")/*Corporate OP Consultation*/
                    {
                    $(this).find('A:eq(0)').css('display', 'block')
                     Colors += '<i class="fser6 gico1" title="Corporate OP Consultation"></i>';
                    }
                    else  if (j.BILL_TYPE_ID == "15")/*OSP Bill*/
                    {
                    $(this).find('A:eq(0)').css('display', 'block')
                     Colors += '<i class="fser5 gico1" title="OSP Bill"></i>';
                    }
                    else
                    {
                     $(this).find('A:eq(0)').css('display', 'none')
                    
                    }
                  _tr_td =_tr_td+'<div class="slegend1">' + Colors + '</div>'
                                   
                                     if(j.RECORD_STATUS == "C"){
                         _tr_td=  '<div style="background-color:Pink; height:20px">' + _tr_td + '</div>'
                        }
                         _tr += "<td name='col" + _j + "'>" + _tr_td + "</td>";
                                }
                                else {
                                    if(_j == "BILL_DT"){
                                        if (j[_j] != undefined && j[_j] != null && j[_j] != "" && j[_j] != "null")
                                            j[_j] = new Date(j[_j]).format(hdndateFrmt) + " " + new Date(j[_j]).format(hdnTimeFormat);
                                        _tr += "<td name='col" + _j + "'>" + j[_j] + "</td>";
                                    }
                                   else if(_j=="BILL_AMOUNT"){
                               _tr += "<td style='text-align:right;'>" + j[_j] + "</td>";
                         
                             }
                             else if(_j=="NET_AMOUNT"){
                               _tr += "<td style='text-align:right;'>" + j[_j] + "</td>";
                         
                             }
                             else if(_j=="CONCESSION_AMOUNT"){
                               _tr += "<td style='text-align:right;'>" + j[_j] + "</td>";
                         
                             }
                             else if(_j=="CASH_CONCESSION_AMOUNT"){
                               _tr += "<td style='text-align:right;'>" + j[_j] + "</td>";
                         
                             }
                             else if(_j=="CASH_CONCESSION_PCNT"){
                               _tr += "<td style='text-align:right;'>" + j[_j] + "</td>";
                         
                             }
                             else if(_j=="HC_CONCESSION_AMOUNT"){
                               _tr += "<td style='text-align:right;'>" + j[_j] + "</td>";
                         
                             }
                             else if(_j=="HC_CONCESSION_PCNT"){
                               _tr += "<td style='text-align:right;'>" + j[_j] + "</td>";
                         
                             }
                             else if(_j=="MANAGMENT_CONCESSION_AMOUNT"){
                               _tr += "<td style='text-align:right;'>" + j[_j] + "</td>";
                         
                             }
                             else if(_j=="MANAGMENT_CONCESSION_PCNT"){
                               _tr += "<td style='text-align:right;'>" + j[_j] + "</td>";
                         
                             }
                             else if(_j=="STAFF_CONCESSION_AMOUNT"){
                               _tr += "<td style='text-align:right;'>" + j[_j] + "</td>";
                         
                             }
                             else if(_j=="STAFF_CONCESSION_PCNT"){
                               _tr += "<td style='text-align:right;'>" + j[_j] + "</td>";
                         
                             }
                              else if(_j=="EVENT_BASED_CONCESSION_AMOUNT"){
                               _tr += "<td style='text-align:right;'>" + j[_j] + "</td>";
                         
                             }
                              else if(_j=="EVENT_BASED_CONCESSION_PCNT"){
                               _tr += "<td style='text-align:right;'>" + j[_j] + "</td>";
                         
                             }
                             else if(_j=="CONCESSION_RULE_CONCESSION_AMOUNT"){
                               _tr += "<td style='text-align:right;'>" + j[_j] + "</td>";
                         
                             }
                             else if(_j=="CONCESSION_RULE_CONCESSION_PCNT"){
                               _tr += "<td style='text-align:right;'>" + j[_j] + "</td>";
                         
                             }
                                    else{
                                        _tr += "<td name='col" + _j + "'>" + j[_j] + "</td>";
                                    }
                                }
                            }
                            _tr += "</tr>";
                            
                        });
                       
                    }
                    eventObject.parent().parent().after(_tr);
                    if (typeof callBack === "function") {
                        callBack();
                        
                        return false;
                    }
                }
                , function (jqXHR, textStatus, errorThrown) {
                    console.log("Check the Functionality");
                });
            }
        }

       function BuildSecondChildTree(dataKey, eventObject, targetID, targetID1, AJAXURL, bindColumns, level, Child, callBack) {
            var hdndateFrmt = document.getElementById('ctl00_ContentPlaceHolder1_headerControl1_hdnDateFormat').value;
            if (hdndateFrmt == undefined || hdndateFrmt == null || hdndateFrmt == "") { hdndateFrmt = "dd-MMM-yyyy"; }
            var hdnTimeFormat = document.getElementById('ctl00_ContentPlaceHolder1_headerControl1_hdnTimeFormat').value;
            if (hdnTimeFormat == undefined || hdnTimeFormat == null || hdnTimeFormat == "") { hdnTimeFormat = "HH:mm:ss"; }
            var _tr = "";
            if(level == 2)
                arraykey = targetID;
            var _colcount = eventObject.parent().parent().find("td").length - 1;
            var _pk = eventObject.data("key");

            if (document.getElementById("tr_" + level + "_" + _pk) != null) {
                $("#tr_" + level + "_" + _pk).slideToggle();
            }
            else {
                ReturnAsync(
                 AJAXURL
                , dataKey
                , function (JData) {
                _JData=JData.d[0];var i=0;
                    _tr += "<tr id=\"tr_" + level + "_" + _pk + "\"><td>&nbsp;</td><td colspan=\"" + _colcount + "\"><table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" class=\"childtbl\" width=\"100%\"><thead><tr>";
                    _tr += "<th style=\"width:30px\">S.No.</th>";
                    if (Child)
                        _tr += "<th name='check'>&nbsp;</th>";
                    for (var _j in bindColumns) {
                        if (typeof bindColumns[_j] === "object") {
                            _tr += "<th  name='col" + _j + "'>Manage</th>";
                        }
                        else {
                            _tr += "<th  name='col" + _j + "'>" + bindColumns[_j] + "</th>";
                        }
                    }
                    _tr += "</tr></thead><tbody>";
                    if (JData.d != null) {
                    var ln=_JData.length;
                        $(JData.d[0]).each(function (i, j) {
                            if (level == 2)
                                array.push(JData.d[0][i]);
                            _tr += "<tr><td>" + (parseInt(i) + 1) + "</td>";
                            if (Child && parseInt(j.BILL_TYPE_ID) != 0 && parseInt(j.BILL_TYPE_ID) != 2 && parseInt(j.BILL_TYPE_ID) != 20 && level == 1)
                                _tr += "<td name='check'><input type=\"button\" class='ajaxlevel_" + (level + 1) + "_click'  data-key='" + j[targetID] + "' data-key1='" + j[targetID1] + "' value=\"+\" /></td>";
                            else if (Child && parseInt(j.SERVICE_CLASS_ID) === 3)
                                _tr += "<td name='check'><input type=\"button\" class='ajaxlevel_" + (level + 1) + "_click'  data-key='" + j[targetID] + "' data-key1='" + j[targetID1] + "' value=\"+\" /></td>";
                            else if (level != 3)
                                _tr += "<td>&nbsp;</td>";
                                
                            for (var _j in bindColumns) {
                                if (typeof bindColumns[_j] === "object") {
                                    var _tr_td = '';
                                    for (var k in bindColumns[_j]) {
                                        if (bindColumns[_j][k].icon != "") {
                                            var tooltip = (bindColumns[_j][k].ToolTip != "" && bindColumns[_j][k].ToolTip != undefined) ? ("title=\"" + bindColumns[_j][k].ToolTip) + "\"" : "";
                                            var billsetprint = "";
                                            
                                                billsetprint = bindColumns[_j][k].alt;

                                            var _displayValue='block';

                                            if(ln>i){
                               if(_JData[i].IS_CONSENT_FORM==''||_JData[i].IS_CONSENT_FORM==null||_JData[i].IS_CONSENT_FORM==undefined){_JData[i].IS_CONSENT_FORM='N';}
                               if(_JData[i].IS_SRV_GUIDELINES_REQUIRED==''||_JData[i].IS_SRV_GUIDELINES_REQUIRED==null||_JData[i].IS_SRV_GUIDELINES_REQUIRED==undefined){_JData[i].IS_SRV_GUIDELINES_REQUIRED='N';}
                              if(_JData[i].IS_SRV_CHECKLIST_REQUIRED==''||_JData[i].IS_SRV_CHECKLIST_REQUIRED==null||_JData[i].IS_SRV_CHECKLIST_REQUIRED==undefined){_JData[i].IS_SRV_CHECKLIST_REQUIRED='N';}
                               if(_JData[i].QUANTITY==''||_JData[i].QUANTITY==null||_JData[i].QUANTITY==undefined)
                               {_JData[i].QUANTITY=1;}

                               if(_JData[i].IS_SRV_GUIDELINES_REQUIRED=='Y' && k==0){
                               _tr_td += "<a style=\"display: " + _displayValue + "\" href=\"#\" title=\" " + (billsetprint) + "\" class=\"gico g" + (bindColumns[_j][k].alt).replace(/\s+/g, '') + "\"  onClick=\"" + bindColumns[_j][k].click + "('" + j[targetID] + "')\"><img " + tooltip + "  src=\"" + bindColumns[_j][k].icon + "\"/></a>";
                               }
                               if(_JData[i].IS_CONSENT_FORM=='Y' && k==1){
                               _tr_td += "<a style=\"display: " + _displayValue + "\" href=\"#\" title=\" " + (billsetprint) + "\" class=\"gico g" + (bindColumns[_j][k].alt).replace(/\s+/g, '') + "\"  onClick=\"" + bindColumns[_j][k].click + "('" + j[targetID] + "')\"><img " + tooltip + "  src=\"" + bindColumns[_j][k].icon + "\"/></a>";
                               }
                               if(_JData[i].QUANTITY>1 && k==2){
                               _tr_td += "<a style=\"display: " + _displayValue + "\" href=\"#\" title=\" " + (billsetprint) + "\" class=\"gico g" + (bindColumns[_j][k].alt).replace(/\s+/g, '') + "\"  onClick=\"" + bindColumns[_j][k].click + "('" + j[targetID] + "')\"><img " + tooltip + "  src=\"" + bindColumns[_j][k].icon + "\"/></a>";
                               }
                                if(_JData[i].IS_SRV_CHECKLIST_REQUIRED=='Y' && k==3){
                               _tr_td += "<a style=\"display: " + _displayValue + "\" href=\"#\" title=\" " + (billsetprint) + "\" class=\"gico g" + (bindColumns[_j][k].alt).replace(/\s+/g, '') + "\"  onClick=\"" + bindColumns[_j][k].click + "('" + j[targetID] + "')\"><img " + tooltip + "  src=\"" + bindColumns[_j][k].icon + "\"/></a>";
                               }
                               }



                                            //_tr_td += "<a style=\"display: " + _displayValue + "\" href=\"#\" title=\" " + (billsetprint) + "\" class=\"gico g" + (bindColumns[_j][k].alt).replace(/\s+/g, '') + "\"  onClick=\"" + bindColumns[_j][k].click + "('" + j[targetID] + "')\"><img " + tooltip + "  src=\"" + bindColumns[_j][k].icon + "\"/></a>";
                                        
                                        
                                        }
                                    }
                                    if(_JData[i].RECORD_STATUS == "C"){
                         _tr_td=  '<div style="background-color:Pink; height:20px">' + _tr_td + '</div>'
                        }
                                    _tr += "<td name='col" + _j + "'>" + _tr_td + "</td>";
                                    i++;
                                }
                                else {
                                    if(_j == "BILL_DT"){
                                        if (j[_j] != undefined && j[_j] != null && j[_j] != "" && j[_j] != "null")
                                            j[_j] = new Date(j[_j]).format(hdndateFrmt) + " " + new Date(j[_j]).format(hdnTimeFormat);
                                        _tr += "<td name='col" + _j + "'>" + j[_j] + "</td>";
                                    }
                                    else{
                                        _tr += "<td name='col" + _j + "'>" + j[_j] + "</td>";
                                    }
                                }
                            }
                            _tr += "</tr>";
                        });
                    }
                    eventObject.parent().parent().after(_tr);
                    if (typeof callBack === "function") {
                        callBack();
                        return false;
                    }
                }
                , function (jqXHR, textStatus, errorThrown) {
                    console.log("Check the Functionality");
                });
            }
        }


        function settelePrint(objs) {
    var clientname = $('[id*=hdnclientNameFor]').val();
    var _data='';
    if(bill_type_id=='A'){ _data = getRow(objs);}
    else{
        _data = gridControl.getDataRow(objs);
        }
    if(_data.PACKAGE_STATUS=='N'){
          $(".stoast").toastText("Info", "Record is in not Approved Status.So,you have no Permission to take Print", 5, 2);
          return false;
    }
    var _Bill_Id = _data["BILL_ID"], _UmrNO = _data["UMR_NO"], _Pat_Id = _data["PATIENT_ID"];
    var _TrnsID = _data["TRANSACTION_ID"];
    var _trnsNo = _data["Transaction_no"];
    var client_name=$('[id*=hdnclientNameFor]').val();
    var _AcctcomId = "";//data["ACOUNTING_COMP_ID"];
    var Type = document.getElementById('ctl00_ContentPlaceHolder1_hdnType').value;
    var pane = 0;
    $.ajax({
        type: "POST",
        url: "OP_Quick_Grid_New.aspx/ImageBtnPrintSettlementClickClientSide2",
        data: "{'billid':'" + _Bill_Id + "','umrno':'" + _UmrNO + "','patId':'" + _Pat_Id + "','trnsId':'" + _TrnsID + "','type':'" + Type + "','_trnsNo':'" + _trnsNo + "','_Client_Name':'" + client_name + "'}",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        error: function(jqXHR, textStatus, errorThrown) { },
        success: function(res) {
           /* if (confirm('Click OK to get Report.'))
                window.open(res.d);*/
                if(clientname.toLowerCase()=="yashoda")
                {
                ReportOkalert(res.d);
                }
                else
                {
                $(".smessagebox").scustommessagebox(1, "Success", "Click OK to get Report", ReportOkalert, res.d,ReportNoalert); 
                }
            return false;
        }
    });
}

var _directPrint='';

function ReportNoalert()
    {
    
    }
    function ReportOkalert(value) {
    var Rpath = value.split(',')[0];
    window.open(Rpath);
   // if (document.getElementById('ctl00_ContentPlaceHolder1_hdnBarcoderequired').value.toLowerCase().trim() == "yes") {
    //window.open("barcode://OPB-" +_directPrint);
   // }
  // window.open("barcode://OPB-" +_directPrint);
    }






        function PatientPrints(objs) {
         var clientName3 = $('[id*=hdnclientNameFor]').val();
     if (clientName3 == '' || clientName3 == null || clientName3 == undefined||clientName3 == "undefined") { clientName3 = ''; }
    clientName3 = clientName3.toLowerCase();
            var _data = gridControl.getDataRow(objs);
                var GRP_BILL_NO=_data["GRP_BILL_NO"];var bill_id=_data["BILL_ID"];
                var tran_id=_data["TRANSACTION_ID"];var pat_id=_data["PATIENT_ID"];
                GetAsync(
                "Private/FrontOffice/OP_Quick_Grid.aspx/CallREGPrint",
                { grpbillno: GRP_BILL_NO,bill_id:bill_id,tran_id:tran_id,pat_id:pat_id},
                function (_path) {
                    _path = _path.d;
                    if(_data["TRANSFER_TYPE_ID"]=="1"){
                      $(".stoast").toastText("Info", "These Services Are Transfered ,so print not allowed ,please contact Administrator", 5, 3 );
                      return false;
                    }
                    else if (_path != "1") {
                     if(clientName3=="yashoda"){
                    OnSuccessContinue11(_path);
                    }
                    else{
                        $(".smessagebox").scustommessagebox(1, "Print Confirm", "Click Ok To Get Report", OnSuccessContinue11, _path, OnCancelContinue11);
                        }
                        /*if (confirm('Click Ok To Get Report')) {
                            window.open(_path);
                        }*/
                    }
                    else {
                        $(".stoast").toastText("Info", "Exceeded Maximum prints.Please Contact Administrator", 5, 2);
                        return false;
                    }
                },
                function (jqXHR, textStatus, errorThrown) {
                });
                return false;
          
        }

        function PatientPresPrints(obj) {
         var clientName4 = $('[id*=hdnclientNameFor]').val();
     if (clientName4 == '' || clientName4 == null || clientName4 == undefined||clientName4 == "undefined") { clientName4 = ''; }
    clientName4 = clientName4.toLowerCase();
            var _data = gridControl.getDataRow(obj);
            if (_data["BILL_TYPE_ID"] == 0) {
                var _bill_no = _data["BILL_NO"], _photo = _data["PHOTO"];
                if (_photo == null || _photo == undefined) { _photo = ''; }
                GetAsync(
                "Private/FrontOffice/OP_Quick_Grid.aspx/Print_Card",
                { Bill_NO: _bill_no, Photo: _photo },
                function (_path) {
                    _path = _path.d;
                    if(clientName4=="yashoda"){
                    OnSuccessContinue14(_path);
                    }
                    else{
                    $(".smessagebox").scustommessagebox(1, "Print Confirm", "Click Ok To Get Report", OnSuccessContinue14, _path, OnCancelContinue14);
                    }
                    /*if (confirm('Click Ok To Get Report')) {
                        window.open(_path);
                    }*/
                },
                function (jqXHR, textStatus, errorThrown) {
                });
                return false;
            }
            else if (_data["BILL_TYPE_ID"] == 2) {
                var _bill_id = _data["BILL_ID"], _bill_no = _data["BILL_NO"], _tran_id = _data["TRANSACTION_ID"], _pat_id = _data.PATIENT_ID;
                var umr_no = _data.UMR_NO;
                var checkStatus = document.getElementById('ctl00_ContentPlaceHolder1_hdncheckbxStatus').value;
                var _dt_fmt = document.getElementById('ctl00_ContentPlaceHolder1_hdndateformat').value;
                if (document.getElementById('ctl00_ContentPlaceHolder1_hdnDoctorPrescrption').value == "True") {
                    GetAsync(
                            "Private/FrontOffice/OP_Quick_Grid.aspx/PriscriptionPrint",
                            { Bill_ID: _bill_id, Tran_ID: _tran_id, Bill_NO: _bill_no, checkStatus: checkStatus, _pat_id: _pat_id, _dt_fmt: _dt_fmt, umr_no: umr_no },
                            function (_path) {
                                _path = _path.d;
if(clientName4=="yashoda"){
                    OnSuccessContinue15(_path);
                    }
                    else{
                                $(".smessagebox").scustommessagebox(1, "Print Confirm", "Click Ok To Get Report", OnSuccessContinue15, _path, OnCancelContinue15);
                                }
                                /*if (confirm('Click Ok to Print Receipt')) {
                                    window.open(_path);
                                }*/
                            },
                            function (jqXHR, textStatus, errorThrown) {
                            });
                    return false;
                }
                else {
                    $(".stoast").toastText("Info", "Doctor Prescription Print Permisions Not Available So ,Please Contact Administrator.", 5, 2);
                    return false;
                }
            }
            else if (_data["BILL_TYPE_ID"] == 7) {
                var _Bill_Id = _data["BILL_ID"], _UmrNO = _data["UMR_NO"], _Pat_Id = _data["PATIENT_ID"];
                var _TrnsID = _data["TRANSACTION_ID"];
                var _trnsNo = _data["Transaction_no"];
                var Type = "OP";
                var pane = 0;
                var report_name="OPDetailReport";
                $.ajax({
                    type: "POST",
                    url: "OP_Quick_Grid.aspx/ImageBtnPrintSettlementClickClientSide",
                    data: "{'billid':'" + _Bill_Id + "','umrno':'" + _UmrNO + "','patId':'" + _Pat_Id + "','trnsId':'" + _TrnsID + "','type':'" + Type + "','_trnsNo':'" + _trnsNo + "','report_name':'"+report_name+"'}",
                    contentType: "application/json; charset=utf-8",
                    dataType: "json",
                    error: function (jqXHR, textStatus, errorThrown) { },
                    success: function (res) {
                     if(clientName4=="yashoda"){
                    OnSuccessContinue15(res.d);
                    }
                    else{
                        $(".smessagebox").scustommessagebox(1, "Print Confirm", "Click Ok To Get Report", OnSuccessContinue15, res.d, OnCancelContinue15);
                        }
                        /*if (confirm('Click OK to get Report.'))
                            window.open(res.d);*/
                        return false;
                    }
                });
            }
        }

        function PatientBarcodePrint(obj) {
            var _data = gridControl.getDataRow(obj);
            if (_data["BILL_TYPE_ID"] == 0) {
                var permission = 'YES';
                var RegNo = _data.REGISTRATION_NO;
                if (RegNo != '')
                    PageMethods.GetBarcodePat('1', RegNo, sucess, fail);
            }
            else if (_data["BILL_TYPE_ID"] == 2) {
            }
            else if (_data["BILL_TYPE_ID"] == 7) {
                var _bill_no = _data["BILL_NO"];
                GetBarcodePatDetails(_bill_no, 3, 'YES');
            }
        }
        function GetBarcodePatDetails(sampleno, entity_id, permission) {
            if (sampleno != '')
                PageMethods.GetBarcodePat(entity_id, sampleno, BarCodesucess, fail);
        }

        function BarCodesucess(PatientDetails) {
            if (PatientDetails != null && PatientDetails != undefined && PatientDetails != '') {
                $(".stoast").toastText("Info", PatientDetails, 5, 2);
               
            }
            else {
                $(".stoast").toastText("Info", "No BarCode Prints.", 5, 2);
                
            }
            return false;
        }



        function sucess(data) {
            $(".stoast").toastText("Info", data, 5, 2);
           
        }
        function fail(ex) {
            $(".stoast").toastText("Info", "No BarCode Prints.", 5, 2);
           
        }


        function PrintSelection() {
            var billid = document.getElementById('ctl00_ContentPlaceHolder1_hdnbill_id').value;
            var umrno = document.getElementById('ctl00_ContentPlaceHolder1_hdnumr_no').value;
            var trnsid = document.getElementById('ctl00_ContentPlaceHolder1_hdntrns_id').value;
            var billno = document.getElementById('ctl00_ContentPlaceHolder1_hdnbill_no').value;
            var patid = document.getElementById('ctl00_ContentPlaceHolder1_hdnpat_id').value;
            var _dt_fmt = document.getElementById('ctl00_ContentPlaceHolder1_hdndateformat').value;
            var checkStatus = document.getElementById('ctl00_ContentPlaceHolder1_hdncheckbxStatus').value;
            if (document.getElementById('ctl00_ContentPlaceHolder1_rbtnPrintOptions_0').checked == true) {
                GetAsync(
                    "Private/FrontOffice/OP_Quick_Grid.aspx/CallPrint",
                    { Bill_ID: billid, Umr_NO: umrno, Tran_ID: trnsid, Pat_ID: patid, DtFrmt: _dt_fmt, Bill_NO: billno },
                    function (_path) {
                        _path = _path.d;
                        if (_path != "1") {
                            window.open(_path);
                        }
                        else {
                            $(".stoast").toastText("Info", "Exceeded Maximum prints.Please Contact Administrator.", 5, 2);
                        }
                    },
                    function (jqXHR, textStatus, errorThrown) {
                    });
                $find('ctl00_ContentPlaceHolder1_ModelPopBarcode').hide();
                return false;
            }
            else if (document.getElementById('ctl00_ContentPlaceHolder1_rbtnPrintOptions_1').checked == true) {
                if (document.getElementById('ctl00_ContentPlaceHolder1_hdnDoctorPrescrption').value == "True") {
                    GetConsReportName(billid);
                    var PrescReportName = document.getElementById('ctl00_ContentPlaceHolder1_hdnprescreportname').value;
                    GetAsync(
                    "Private/FrontOffice/OP_Quick_Grid.aspx/PriscriptionPrint",
                    { Bill_ID: billid, Tran_ID: trnsid, Bill_NO: billno, checkStatus: checkStatus, _pat_id: patid, _dt_fmt: _dt_fmt, umr_no: umrno,PrescReportName:PrescReportName },
                    function (_path) {
                        _path = _path.d;
                        window.open(_path);
                    },
                    function (jqXHR, textStatus, errorThrown) {
                    });
                    $find('ctl00_ContentPlaceHolder1_ModelPopBarcode').hide();
                    return false;
                }
                else {
                    $(".stoast").toastText("Info", "Doctor Prescription Print Permisions Not Available So ,Please Contact Administrator.", 5, 2);
                    $find('ctl00_ContentPlaceHolder1_ModelPopBarcode').hide();
                    return false;
                }
            }
            else {
                GetAsync(
                    "Private/FrontOffice/OP_Quick_Grid.aspx/CallConPrint",
                    { Bill_ID: billid, Umr_NO: umrno, Tran_ID: trnsid, Pat_ID: patid, DtFrmt: _dt_fmt, Bill_NO: billno },
                    function (_path) {
                        _path = _path.d;
                        if (_path != "1") {

                            window.open(_path);

                        }
                        else {
                            $(".stoast").toastText("Info", "Exceeded Maximum prints . Consultation Print Canot take so, Please Contact Administrator.", 5, 2);
                        }
                    },
                    function (jqXHR, textStatus, errorThrown) {
                    });

                if (document.getElementById('ctl00_ContentPlaceHolder1_hdnDoctorPrescrption').value == "True") {
                    GetConsReportName1(billid,1);
                    var PrescReportName = document.getElementById('ctl00_ContentPlaceHolder1_hdnprescreportname').value;
                    GetAsync(
                     "Private/FrontOffice/OP_Quick_Grid.aspx/PriscriptionPrint",
                    { Bill_ID: billid, Tran_ID: trnsid, Bill_NO: billno, checkStatus: checkStatus, _pat_id: patid, _dt_fmt: _dt_fmt, umr_no: umrno,PrescReportName:PrescReportName },
                    function (_path) {
                        _path = _path.d;

                        window.open(_path);

                    },
                    function (jqXHR, textStatus, errorThrown) {
                    });
                    $find('ctl00_ContentPlaceHolder1_ModelPopBarcode').hide();
                    return false;
                }
                else {
                    $(".stoast").toastText("Info", "Doctor Prescription Print Permisions Not Available So ,Please Contact Administrator", 5, 2);
                    $find('ctl00_ContentPlaceHolder1_ModelPopBarcode').hide();
                    return false;
                }
            }

        }
        function OnSuccessContinue1(_path) { window.open(_path); }
        function OnCancelContinue1() { }

        function OnSuccessContinue2(_path) { window.open(_path); }
        function OnCancelContinue2() { }

        function OnSuccessContinue3(_path) { window.open(_path); }
        function OnCancelContinue3() { }

        function OnSuccessContinue4(_path) { window.open(_path); }
        function OnCancelContinue4() { }

        function OnSuccessContinue5(res) { window.open(res); }
        function OnCancelContinue5() { }

        function OnSuccessContinue6(_path) { window.open(_path); }
        function OnCancelContinue6() { }

        function OnSuccessContinue7(_path) { window.open(_path); }
        function OnCancelContinue7() { }

        function OnSuccessContinue8(_path) { window.open(_path); }
        function OnCancelContinue8() { }

        function OnSuccessContinue9(_path) { window.open(_path); }
        function OnCancelContinue9() { }

        function OnSuccessContinue10(_path) { window.open(_path); }
        function OnCancelContinue10() { }

        function OnSuccessContinue11(_path) { window.open(_path); }
        function OnCancelContinue11() { }

        function OnSuccessContinue12(_path) { window.open(_path); }
        function OnCancelContinue12() { }

        function OnSuccessContinue13(res) { window.open(res); }
        function OnCancelContinue13() { }

        function OnSuccessContinue14(_path) { window.open(_path); }
        function OnCancelContinue14() { }

        function OnSuccessContinue15(res) { window.open(res); }
        function OnCancelContinue15() { }
    </script>




 <style type="text/css">
         .ethcity
        {
            width:150px;
                margin-top: 4px;
        float:left;
        }
        </style>


</asp:Content>


<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" Runat="Server">
    <script type="text/javascript" src="../../Assets/js/Suvarnatable.js"></script>
    <div class="panel-heading1">
        <div class="pageheader">
       
            <h1>
                <asp:Label ID="lblPatientType" runat="server" Text="OPD Registartion & Billing List"> </asp:Label></h1>
            <HeaderControl:PageHeaderControl ID="headerControl1" IsShowClear="false" IsShowEdit="false"
                ExportGridDivID="div_Registrations" ExportGridFileName="OPD Registartion & Billing List"
                sCheckShiftLog="true" IsShowDelete="false" IsShowCancel="false" IsShowSave="false"
                Isshowindicares="false" OnDeleteClientClick="if(ClientCheck()) return confirm('Are you sure, do you want to delete it'); else return false;"
                runat="server" PageType="Grid" IsShowConfig="false" IsShowReload="false" OnAddClientClick="return OnAddNewClick();" />
            <div class="datesearch" style="position:relative;">
                <uc4:DateSearchControl ID="ucDateSearchControl1" runat="server" />
            </div>

              <div class="ethcity">
                <asp:DropDownList ID="ddltypefilter" runat="server" onchange="return onChageTypeFilter();">
                <%--    <asp:ListItem Value="SELECT">Select</asp:ListItem>--%>
                  <asp:ListItem Value="ALL">All</asp:ListItem>
                    <asp:ListItem Value="REGISTRATION">Registration</asp:ListItem>
                      <asp:ListItem Value="CONSULTATION">Consultation</asp:ListItem>
                        <asp:ListItem Value="OP_BILL">OP  Bill</asp:ListItem>
                     
                    <%--   <asp:ListItem Value="ALL">All</asp:ListItem>--%>
                                  <%--   <asp:ListItem Value="CORPORATE_OP_CONSULTATION">Corporate OP Consultation</asp:ListItem>
                                    <asp:ListItem Value="OSP_BILL">OSP Bill</asp:ListItem>
                                    --%>





                </asp:DropDownList>
            </div>


              <div id="divcolorcd" style="display: none" class="lege-div pull-right" style="margin-top: 11px;">
                <i style="background-color: orange;"></i><i style="background-color: Blue;"></i>
                <i style="background-color: Green;"></i><i style="background-color: Red;"></i>
                <div id="div1" class="colorchart">
                    <div>
                        <label style="background-color: orange">
                        </label>
                        <asp:Label ID="Label2" Text="Registration" runat="server"></asp:Label>
                    </div>
                  
                    <div>
                        <label style="background-color: Green;">
                        </label>
                        <asp:Label ID="Label4" Text="OP General Bill" runat="server"></asp:Label>
                    </div>
                    <div>
                        <label style="background-color: Red;">
                        </label>
                        <asp:Label ID="Label5" Text="OP Corporate Bill" runat="server"></asp:Label>
                    </div>
                      <div>
                        <label style="background-color: Blue;">
                        </label>
                        <asp:Label ID="Label3" Text="Consultation" runat="server"></asp:Label>
                    </div>
                     <div>
                        <label style="background-color: Lime;">
                        </label>
                        <asp:Label ID="Label6" Text="Corporate OP Consultation" runat="server"></asp:Label>
                    </div>
                    <div>
                        <label style="background-color: #ba68C8;">
                        </label>
                        <asp:Label ID="Label7" Text="OSP Bill" runat="server"></asp:Label>
                    </div>
                    <div>
                        <label style="background-color: pink;">
                        </label>
                        <asp:Label ID="Label8" Text=" Cancel Bill" runat="server"></asp:Label>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="SuGridH">
        <div class="grdsearch">
            <div class="healthcount" id="DivHcdtls" style="display: none;">
                <ul>
                    <li>
                        <label class="su-apple53">
                        </label>
                        Hc Packages Booked<asp:Label ID="lblHcPkgsCount" runat="server"></asp:Label></li>
                    <li>
                        <label class="su-receipt-shopping-streamline">
                        </label>
                        Meals Tokens Given Count<asp:Label ID="lblMlsGvnCnt" runat="server"></asp:Label></li>
                    <li>
                        <label class="su-food">
                        </label>
                        Served Meals Count<asp:Label ID="lblSrvdcnt" runat="server"></asp:Label></li></ul>
            </div>
        </div>
        <div class="GFgridheght">
            <div class="GFgriddiv" id="div_Registrations">
            </div>
        </div>
    </div>
    <ajaxToolkit:ModalPopupExtender ID="ModelPopBarcode" runat="server" TargetControlID="dummyBarcodebtn"
        BackgroundCssClass="cmask" PopupControlID="pnlBarCode1" CancelControlID="img4">
    </ajaxToolkit:ModalPopupExtender>
    <ajaxToolkit:ModalPopupExtender ID="ModelPopBarcode1" runat="server" TargetControlID="dummyBarcodebtn"
        BackgroundCssClass="cmask" PopupControlID="pnlBarCode2" CancelControlID="img2">
    </ajaxToolkit:ModalPopupExtender>
    <asp:Button ID="dummyBarcodebtn" runat="server" Style="display: none" />
    <asp:Panel ID="pnlBarCode1" runat="server" Width="30%" Style="display: none;" class="modalpopup">
        <div class="pop-header">
            <h1>
                <asp:Label ID="lblPDetails" runat="server" Text="Print Details"></asp:Label>
            </h1>
            <div style="text-align: right; padding: 3px;">
                <img runat="server" alt="" style="cursor: hand" id="img4" src="~/Images/close.gif" />
            </div>
        </div>
        <div class="pop-body" style="padding: 10px 5px 10px 5px;">
            <table cellpadding="0" cellspacing="0" border="0" width="100%">
                <tr>
                    <td>
                        <asp:RadioButtonList ID="rbtnPrintOptions" runat="server">
                            <asp:ListItem Value="1" Text="Receipt Print"></asp:ListItem>
                            <asp:ListItem Value="2" Text="Prescription Print"></asp:ListItem>
                            <asp:ListItem Value="3" Text="Both" Selected="True"></asp:ListItem>
                        </asp:RadioButtonList>
                    </td>
                </tr>
                <tr>
                    <td align="center" colspan="2" style="padding-top: 3px">
                        <asp:Button ID="btnOk" runat="server" Text="OK" OnClientClick="return PrintSelection();" />
                    </td>
                </tr>
            </table>
        </div>
    </asp:Panel>
    <asp:Panel ID="pnlBarCode2" runat="server" Width="30%" Style="display: none;" class="modalpopup">
        <div class="pop-header">
            <h1>
                <asp:Label ID="Label1" runat="server" Text="Print Details"></asp:Label>
            </h1>
            <div style="text-align: right; padding: 3px;">
                <img runat="server" style="cursor: hand" id="img2" src="~/Images/close.gif" />
            </div>
        </div>
        <div class="pop-body" style="padding: 10px 5px 10px 5px;">
            <table cellpadding="0" cellspacing="0" border="0" width="100%">
                <tr>
                    <td>
                        <asp:RadioButtonList ID="RadioButtonList1" runat="server">
                            <asp:ListItem Value="1" Text="Prescription Normal" Selected="True"></asp:ListItem>
                            <asp:ListItem Value="2" Text="Prescription FollowUp"></asp:ListItem>                            
                        </asp:RadioButtonList>
                    </td>
                </tr>
                <tr>
                    <td align="center" colspan="2" style="padding-top: 3px">
                        <asp:Button ID="btnokPrescription" runat="server" Text="OK" OnClientClick="return Prescription();" />
                    </td>
                </tr>
            </table>
        </div>
    </asp:Panel>
    <div>
        <asp:LinkButton ID="lnkdummy1" runat="server" Style="display: none;"></asp:LinkButton>
        <ajaxToolkit:ModalPopupExtender ID="barcodemodal" runat="server" TargetControlID="lnkdummy1"
            PopupControlID="pnlbarcode" BackgroundCssClass="modalBackground">
        </ajaxToolkit:ModalPopupExtender>
        <asp:Panel ID="pnlbarcode" runat="server" Style="display: none; width: 25%;" class="modalpopup">
            <div class="pop-header">
                <h1>
                    Bar Code
                </h1>
                <asp:Button buttonaction="cancelButton" ID="imgc" runat="server" CssClass="cbutton"
                    Text="&times;" />
            </div>
            <div class="pop-body" style="padding: 10px 5px 10px 5px;">
                <table border="0" cellpadding="0" cellspacing="0" width="100%">
                    <tr>
                        <td>
                            <div id="divPrint" runat="server">
                                <table id="tbbarcode" runat="server">
                                </table>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td align="center" style="padding-top: 5px;">
                            <asp:ImageButton ID="imgprint" runat="server" OnClientClick="javascript:CallPrint('divPrint');"
                                ImageAlign="Top" ImageUrl="~/Images/Btn/print_btn.gif" onmouseover="this.src='../Images/Btn/print_btnhover.gif'"
                                onmouseout="this.src='../Images/Btn/print_btn.gif'" />
                        </td>
                    </tr>
                </table>
            </div>
        </asp:Panel>
        <asp:Panel ID="pnlSrvSdul" runat="server" class="masking" Style="display: none;">
            <div class="cmask">
            </div>
            <div id="divSrvSdul" class="clientpopup" style="width: 500px; height: 311px; margin-left: -280px;
                margin-top: -192px; display: block;">
                <div class="pop-header    ">
                    <asp:Button ID="btnSrvSdulclose" CssClass="cbutton" runat="server" OnClientClick="return SrvSdulclosehipopup();"
                        Text="&times;" />
                    <input type="submit" id="btnSrvSdulSubmit" value="save" style="width: 60px" onclick="return SaveCloseSrvSdul();" />
                </div>
                <div class="pop-body">
                    <div style="border-bottom: 1px solid #cacaca; padding-bottom: 5px;">
                        <table border="0" cellpadding="0" width="100%" class="FormsCtrl">
                            <tr>
                                <td>
                                    Service Name
                                </td>
                                <td>
                                    <asp:TextBox ID="txtSrvShdulServicename" runat="server" ReadOnly="true"></asp:TextBox>
                                </td>
                                <td>
                                    Qty
                                </td>
                                <td>
                                    <asp:TextBox ID="txtSrvSdulQty" runat="server" ReadOnly="true"></asp:TextBox>
                                </td>
                            </tr>
                        </table>
                    </div>
                    <div class="divscroll" style="height: 390px; overflow: auto;">
                        <table id="tbl_SrvSdul" border="0" cellpadding="0" cellspacing="0" width="100%" class="FormsCtrl">
                        </table>
                        <div class="btntxt">
                            <div class="txtbtn">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </asp:Panel>
    </div>
    <asp:HiddenField ID="hdnDoctorPrescrption" runat="server" />
    <asp:HiddenField ID="hdnBothPrintSetting" runat="server" />
    <asp:HiddenField ID="hdnbill_id" runat="server" />
    <asp:HiddenField ID="hdnumr_no" runat="server" />
    <asp:HiddenField ID="hdntrns_id" runat="server" />
    <asp:HiddenField ID="hdnbill_no" runat="server" />
    <asp:HiddenField ID="hdnpat_id" runat="server" />
    <%--<asp:HiddenField ID="hdndateFrmt" runat="server" />--%>
    <asp:HiddenField ID="hdncheckbxStatus" runat="server" />
    <asp:HiddenField ID="hdnTimeFormat" runat="server" />
    <asp:HiddenField ID="hdndateformat" runat="server" />
    <asp:HiddenField ID="hdnOPDNew" runat="server" />
    <asp:HiddenField ID="hdnauth_user" runat="server" />
    <asp:HiddenField ID="hdnprescreportname" runat="server" />
    <asp:HiddenField ID="hdnHcDietPkg" runat="server" />
    <asp:HiddenField ID="hdnExportSpName" runat="server" />
    <asp:HiddenField ID="hdnExportFlag" runat="server" />
    <asp:HiddenField ID="hdnbarcodepath" runat="server" />
         <asp:HiddenField ID="regprintdocPermissions" runat="server" />

           <asp:HiddenField ID="hdnType" runat="server" />

</asp:Content>

