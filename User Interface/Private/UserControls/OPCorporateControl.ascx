<%@ Control Language="C#" AutoEventWireup="true" CodeFile="OPCorporateControl.ascx.cs"
    Inherits="Private_UserControls_OPCorporateControl" %>
<%@ Register Src="~/Private/UserControls/EmployerInfo.ascx" TagName="CompControl"
    TagPrefix="uccmp" %>
<%@ Register Src="~/Private/UserControls/LookUp.ascx" TagName="GenericUC" TagPrefix="GUC1" %>
<%@ Register Src="~/Private/UserControls/CompanyDetails.ascx" TagName="GenericGrid"
    TagPrefix="uc3" %>
<script type="text/javascript" src="<%=Page.ResolveClientUrl("~/JSScript/CorporateScripts/Changes/MultiInsadmn.js") %>"></script>
<style type="text/css">
    .CompanyCheckListsgrid
    {
        min-width: 100%;
        width: auto !important;
    }
    .CompanyCheckListsgrid td, .CompanyCheckListsgrid th
    {
        white-space: nowrap;
        text-align: left;
    }
    .isnot label
    {
        font-size: 11px;
    }
</style>
<script type="text/javascript">

    var ctrlcom = 'ctl00_ContentPlaceHolder1';
    function Binddata(data) {
        $('[id*=divGridPop]')[0].style.display = 'none';
        $('[id*=txtinsname]').val(data.ENTITY_VALUE_NAME);
        return false;
    }
    function BindAuthList(obj) {
        $('[id*=divGridPop]')[0].style.display = 'block';
        var cName = ''; var pText = ''; var fDt = ''; var tDt = '';
        var param = param || {};
        param.dataKey = "ENTITY_VALUE_ID";
        param.pageSize = 10;
        param.pageNum = 1;
        param.defaultWSParams = { _cName: cName, _fDt: fDt, _tDt: tDt, _pText: pText, _advSrch: '', ProcName: "PR_GETALL_FO_PATIENT_INSURANCE_LOOKUP", flag: '' };
        param.wsPath = "CreditOrgService.asmx/BindGetAllGrid";
        param.wsFilterPath = "CreditOrgService.asmx/BindGetAllGrid";
        param.template = ["ENTITY_VALUE_NAME*ENTITY_VALUE_NAME"
                    , "ENTITY_VALUE_CD*ENTITY_VALUE_CD"
                    , "ENTITY_VALUE_DESC*ENTITY_VALUE_DESC"]
        param.header = [{ col: "Insurance Name", sort: true, filter: true }
                    , { col: "Insurance cd", sort: true, filter: true }
                    , { col: "Insurance Desc", sort: true, filter: true}];
        param.enablePaging = true;
        param.enableTrace = false;
        param.enableFilter = true;
        param.enableCheckbox = false;
        param.enableSorting = true;
        param.enableDMS = false; param.tableTemplate = true;
        param.RowDataBinding = function (rowitem, _data) {
            var obj = $(rowitem);
            return obj[0].outerHTML;
        };
        param.rowClick = function (key, _data) {
            Binddata(key);
        };
        gridControl = $("#divpreauthdata").jtable(param);
        return false;
    }
    function Assigncardlabel1(data) {
    }
    function notapplicablevalidation() {
        if (document.getElementById('' + ctrlcom + '_umrPatientDetails_hdnDocName').value == "ADMN") {
            if (document.getElementById('' + ctrlcom + '_uccorporate_chkElWardNotApplbl').checked == true) {
                document.getElementById('' + ctrlcom + '_uccorporate_UCEligibleWard_txtSearchControl').disabled = true;
                document.getElementById('lk_btn_ctl00_ContentPlaceHolder1_uccorporate_UCEligibleWard').disabled = true;
                $('#' + ctrlcom + '_uccorporate_UCEligibleWard_txtSearchControl').removeClass('red');
                document.getElementById('' + ctrlcom + '_uccorporate_UCEligibleWard_txtSearchControl').value = '';
                document.getElementById('' + ctrlcom + '_uccorporate_hdnWargroupdId').value = '0';
            }
            else {
                document.getElementById('' + ctrlcom + '_uccorporate_UCEligibleWard_txtSearchControl').disabled = false;
                document.getElementById('lk_btn_ctl00_ContentPlaceHolder1_uccorporate_UCEligibleWard').disabled = false;
                if (document.getElementById('' + ctrlcom + '_uccorporate_hdneligiblewardreq').value == 'Y') {
                    $('#' + ctrlcom + '_uccorporate_UCEligibleWard_txtSearchControl').addClass('red');

                }
            }

        }
        if (document.getElementById('' + ctrlcom + '_uccorporate_ddlPaymentBy').value == 1 || document.getElementById('' + ctrlcom + '_uccorporate_ddlPaymentBy').value == 0) {
            document.getElementById('' + ctrlcom + '_uccorporate_UCEligibleWard_txtSearchControl').disabled = true;
            document.getElementById('lk_btn_ctl00_ContentPlaceHolder1_uccorporate_UCEligibleWard').disabled = true;
        }
    }
    function chklimitamtcorp(obj) {
        var doc_name = document.getElementById('' + ctrlcom + '_uccorporate_hdnDocName').value;
        if (doc_name == "OPQUICK" || doc_name == "Cons" || doc_name == "OP") {
            if (document.getElementById('' + ctrlcom + '_uccorporate_chkcreditcheckcorp').checked == true) {
                document.getElementById('' + ctrlcom + '_uccorporate_txtcreditlimit').value = '';
            }
        }
    }
    function chkunlimitamtcorp() {
        var doc_name = document.getElementById('' + ctrlcom + '_uccorporate_hdnDocName').value;
        if (doc_name == "OPQUICK" || doc_name == "Cons" || doc_name == "OP") {
            if (document.getElementById('' + ctrlcom + '_uccorporate_txtcreditlimit').value != '') {
                document.getElementById('' + ctrlcom + '_uccorporate_chkcreditcheckcorp').checked = false;
            }
        }
    }
    function OnLoadDownloadPhoto() {
        var UmrNo = $('[id*=umrPatientDetails_Umrlookup_txtSearchControl]').val();
        var cmp_id = 0;
        if ($('[id*=uccorporate_hdnDocName]').val() == "ADMN")
            cmp_id = $('[id*=uccorporate_allcmplookup__hiddenID]').val();
        else
            cmp_id = $('[id*=uccorporate_CmpLookup__hiddenID]').val();
        if (UmrNo == null || UmrNo == undefined) { UmrNo = ''; }
        if (cmp_id == '' || cmp_id == null || cmp_id == undefined) { cmp_id = "0"; }
        if (UmrNo == '') {
            $(".stoast").toastText("Info", "Please Select UMR#", 5, 2);
            $('[id*=umrPatientDetails_Umrlookup_txtSearchControl]').focus();
            return false;
        }
        if (cmp_id == "0") {
            $(".stoast").toastText("Info", "Please Select Company/TPA", 5, 2);
            return false;
        }
        document.getElementById('ctl00_hdnDMSUmrNo').value = UmrNo;
        document.getElementById('ctl00_hdnDMSAdmnNo').value = cmp_id;
        document.getElementById('ctl00_hdnMtablename').value = 'ADT_ADMN';
        document.getElementById('ctl00_hdnMtblautocdGlobalcolumns').value = 'UMR_NO';
        document.getElementById('ctl00_hdnMtblautoidcolumns').value = 'COMPANY_ID';
        onFileDowload('Grid');
    }

    function ViewMyWindow(data, umrno) {
        var gdata = jQuery.parseJSON(data.d[1]);
        $('#divimagescmp').show();
        var _dat = '<ul>';
        var _dat1 = '<ul>';
        if (data.d != null) {
            if (data.d.length > 0) {
                if (data.d[0] != '') {
                    for (var i = 0; i < data.d[0].length; i++) {
                        var pathname = data.d[0][i].replace(/\\/g, "/");
                        pathname = pathname.split('/')[pathname.split('/').length - 1];
                        var ext = pathname.split('.')[1];
                        var filename = '';
                        var b = window.location.origin + "/" + window.location.pathname.split('/')[1] + "/" + "Private/FrontOffice/ImageViewer/material/original/" + umrno + "/" + pathname;
                        if (pathname.length > 13)
                            filename = pathname.substring(0, 13) + '...';
                        else
                            filename = b.substring(b.lastIndexOf('/') + 1);

                        var path = b;
                        var src = path;
                        if (ext == "jpg" || ext == "jpeg" || ext == "gif" || ext == "png") {

                            _dat += '<li><img id="imgview" onClick="Imageview(src);"  src="' + path + '" /><div class="right"><span>"' + new Date(gdata[i].CREATE_DT).format('dd-MMM-yyyy hh:mm') + "/" + gdata[i].CREATE_BY + '"</span><label>' + filename + '</label></div><div class="clr"></div></li>';
                        }
                        else {
                            _dat1 += '<li><img id="imgview" onClick="Imageview(src);"  src="' + path + '" /><div class="right"><span>"' + new Date(gdata[i].CREATE_DT).format('dd-MMM-yyyy hh:mm') + "/" + gdata[i].CREATE_BY + '"</span><label>' + filename + '</label></div></li>';
                        }
                    }
                    $('#divimagescmp').find('[id*=gallery]').html(_dat);
                    $('#gallery1').html(_dat1);

                }
            }
        }
        return false;
    }
    function closefiles() {
        $('#divimagescmp').hide();
        return false;
    }
    function Imageview(obj) {
        var img = obj;
        var _data = '<img id="imgview1" onClick="imgDownload(src);" style="width: 100%;" src="' + img + '" />';
        $('#divimagescmp').find('[id*=divimage]').html(_data);

    }
    function imgDownload(obj) {
        var href = obj;
        window.open(href);

    }
    function ddlchngcrtype() {
        clearnonreglookup(false);
        BannerPatientTyeChange();
        var claintname = $('[id*=hdnclientNameFor]').val().toUpperCase();
        var patID = document.getElementById('' + ctrlcom + '_umrPatientDetails_hdnPatientid').value;
        var pettypeval = document.getElementById('' + ctrlcom + '_uccorporate_ddlpatcreditype').value;
        var lblcardname = document.getElementById('' + ctrlcom + '_uccorporate_lblmdcrdnm');
        var selectedtext = $('[id*=ddlpattyp] option:selected').text();
        selectedtext = selectedtext.trim().toUpperCase();
        if (selectedtext == 'YOJANA') {

        }
        if (pettypeval == 5) { forinsuraancedtls(); lblcardname.innerHTML = "Policy#"; selectlevel(); }
        else if (pettypeval == 8) { lblcardname.innerHTML = "WAP#"; }

        else if (pettypeval == 2 && claintname == "UHWI" || claintname == "KNH" || claintname == "OMEGA") { forinsuraancedtls(); lblcardname.innerHTML = "Policy#"; }
        else { lblcardname.innerHTML = "Med Card#"; }
        /* GetAsync("Private/FrontOffice/DayCare/AddNewAdmission.aspx/Company_Precondition_type", { pettypeval: pettypeval, patID: patID }, function () { }, function (jqXHR, textStatus, errorThrown) { }); */
        document.getElementById('ctl00_ContentPlaceHolder1_uccorporate_CmpLookup_hdn_preCond').value = pettypeval + "^" + "PATIENTCMP^" + patID;
        CompanyValidation();
    }
    function BannerPatientTyeChange() {
        var CreditType = $('[id*=uccorporate_ddlpatcreditype] option:selected').text();
        var PaymentBy = document.getElementById('' + ctrlcom + '_uccorporate_ddlPaymentBy').value;
        if ($('[id*=uccorporate_ddlpatcreditype]').val() == '0' && PaymentBy == '2') { CreditType = 'Corporate'; }
        if ($('[id*=uccorporate_ddlpatcreditype]').val() == '0' && PaymentBy == '1') { CreditType = 'General'; }
        if ($('[id*=uccorporate_ddlpatcreditype]').val() == '0' && PaymentBy == '0') { CreditType = 'Cash'; }

        document.getElementById('' + ctrlcom + '_umrPatientDetails_lblpattype').innerHTML = CreditType;
    }
    function forinsuraancedtls() {
        var pettypeval = document.getElementById('' + ctrlcom + '_uccorporate_ddlpatcreditype').value;
        var claintname = $('[id*=hdnclientNameFor]').val().toUpperCase();
        if (claintname == "UHWI" || claintname == "KNH" || claintname == "OMEGA" && (pettypeval == 5 || pettypeval == 2)) {
            $('[id*=uccorporate_allcmplookup_txtSearchControl]').attr('disabled', true);
            lk_btn_ctl00_ContentPlaceHolder1_uccorporate_allcmplookup.disabled = true;
            $('#' + ctrlcom + '_uccorporate_allcmplookup_txtSearchControl').removeClass('red');
        }
        else {
            $('[id*=uccorporate_allcmplookup_txtSearchControl]').attr('disabled', false);
            lk_btn_ctl00_ContentPlaceHolder1_uccorporate_allcmplookup.disabled = false;
            document.getElementById('' + ctrlcom + '_uccorporate_allcmplookup_txtSearchControl').style.border = '1px solid rgb(244,120,94)';
        }
    }
    function ddlpattype() {
        var pettypeval = document.getElementById('' + ctrlcom + '_uccorporate_ddlpattyp').value;
        var lblcardname = document.getElementById('' + ctrlcom + '_uccorporate_EmployerInfo1_lblcard');
        $('[id*=uctpa_txtSearchControl]').val(""); $('[id*=uctpa__hiddenID]').val("0");
        document.getElementById('' + ctrlcom + '_uccorporate_hdnEmppatTypeid').value = document.getElementById('' + ctrlcom + '_uccorporate_ddlpattyp').value;
        if (pettypeval == 5) {
            document.getElementById('' + ctrlcom + '_uccorporate_EmployerInfo1_lblpolicytype').style.display = 'block';
            document.getElementById('' + ctrlcom + '_uccorporate_EmployerInfo1_ddlpolicytype').style.display = 'block';
            document.getElementById('' + ctrlcom + '_uccorporate_EmployerInfo1_lblsuminsured').style.display = 'block';
            document.getElementById('' + ctrlcom + '_uccorporate_EmployerInfo1_txtsuminsured').style.display = 'block';
            if (document.getElementById('' + ctrlcom + '_uccorporate_hdnDocName').value != 'ADMN') {
                document.getElementById('' + ctrlcom + '_uccorporate_EmployerInfo1_lblpolicytype').disabled = false;
                document.getElementById('' + ctrlcom + '_uccorporate_EmployerInfo1_ddlpolicytype').disabled = false;
                document.getElementById('' + ctrlcom + '_uccorporate_EmployerInfo1_lblsuminsured').disabled = false;
                document.getElementById('' + ctrlcom + '_uccorporate_EmployerInfo1_txtsuminsured').disabled = false;
            }
            lblcardname.innerHTML = "Policy#";
        }
        else if (pettypeval == 8) {
            lblcardname.innerHTML = "WAP#";
        }
        else {
            document.getElementById('' + ctrlcom + '_uccorporate_EmployerInfo1_lblpolicytype').disabled = true;
            document.getElementById('' + ctrlcom + '_uccorporate_EmployerInfo1_ddlpolicytype').disabled = true;
            document.getElementById('' + ctrlcom + '_uccorporate_EmployerInfo1_lblsuminsured').disabled = true;
            document.getElementById('' + ctrlcom + '_uccorporate_EmployerInfo1_txtsuminsured').disabled = true;
            if (document.getElementById('' + ctrlcom + '_uccorporate_hdnClientName').value == 'UHWI' || document.getElementById('' + ctrlcom + '_uccorporate_hdnClientName').value == 'KNH' || document.getElementById('' + ctrlcom + '_uccorporate_hdnClientName').value == 'OMEGA') {
                lblcardname.innerHTML = "Insurance Card#";
            } else {
                lblcardname.innerHTML = "Med Card#";
            }
        }
        /*  GetAsync("Private/FrontOffice/YRegistration.aspx/AddPreContion_cor", { pettypeval: pettypeval }, function () { }, function (jqXHR, textStatus, errorThrown) { });*/
        document.getElementById('ctl00_ContentPlaceHolder1_uccorporate_EmployerInfo1_uctpa_hdn_preCond').value = "ALL^" + "" + "^" + pettypeval;
        CompanyValidation();
        if (pettypeval == "8") { ctl00_ContentPlaceHolder1_uccorporate_EmployerInfo1_lblemployee.innerHTML = "Beneficiary"; } else { ctl00_ContentPlaceHolder1_uccorporate_EmployerInfo1_lblemployee.innerHTML = "Employee Name"; }
    }
    $(document).ready(function () {
        $('[id$=txtinsdob]').datepicker({
            changeMonth: true,
            changeYear: true,
            dateFormat: 'dd-MMM-yyyy',
            yearRange: '1910:2098',
            maxDate: new Date(),
            disabled: false
        });
        $('[id$=txtinsexpdt]').datepicker({
            changeMonth: true,
            changeYear: true,
            dateFormat: 'dd-MMM-yyyy',
            minDate: new Date(),
            disabled: false
        });
        $('#lk_btn_ctl00_ContentPlaceHolder1_uccorporate_CmpLookup').click(function () {
            tpalookup = 'N';
        });
    });
    function IsRefLetExist() {
        CheckEligibilityCmp();
        var form_n = $('#' + ctrlcom + '_umrPatientDetails_hdnDocName').val();
        if (form_n == "Cons" || form_n == "OP") {
            if ($('#' + ctrlcom + '_uccorporate_CmpLookup__hiddenID').val() == undefined || $('#' + ctrlcom + '_uccorporate_CmpLookup__hiddenID').val() == NaN) {
                $('#' + ctrlcom + '_uccorporate_CmpLookup__hiddenID').val(0);
            }
            if ($('#' + ctrlcom + '_uccorporate_CmpLookup__hiddenID').val() > 0 && $('#' + ctrlcom + '_uccorporate_txtrefletter').val() != '') {
                $('#' + ctrlcom + '_uccorporate_txtrefletter').addClass('grey');
                $('#' + ctrlcom + '_uccorporate_txtrefletter').removeClass('red');
                var orgid = $('#' + ctrlcom + '_uccorporate_CmpLookup__hiddenID').val();
                var refLetNo = $('#' + ctrlcom + '_uccorporate_txtrefletter').val();
                var UrlVal = ReturnIniUrl();
                $(document).ready(function (e) {
                    $.ajax({
                        type: "POST",
                        url: UrlVal + "PatientRegistration.asmx/ChkRefLetNoExistOrNot",
                        data: "{'orgid': '" + orgid + "','refLetNo':'" + refLetNo + "'}",  //
                        contentType: "application/json; charset=utf-8",
                        dataType: "json",
                        success: function (msg) {
                            if (msg.d == true) {
                                $('#' + ctrlcom + '_uccorporate_txtrefletter').addClass('red');
                                $(".stoast").toastText("Info", "RefLetterNo:'" + refLetNo + "'already Exist.Please Give Another Referal LetterNo.", 5, 2);
                                document.getElementById('' + ctrlcom + '_uccorporate_txtrefletter').value = '';
                                $('#' + ctrlcom + '_uccorporate_txtrefletter').addClass('red');
                            }
                            document.getElementById('' + ctrlcom + '_uccorporate_EmployerInfo1_hdnIsRefLetNoExistFlag').value = msg.d;
                            return msg.d;
                        },

                        error: function (msg) {
                            $(".stoast").toastText("warning", "Unable to connect Service.Pls Try again", 5, 3);
                            document.getElementById('' + ctrlcom + '_uccorporate_EmployerInfo1_hdnIsRefLetNoExistFlag').value = msg.d;
                            return msg.d;
                        }

                    });

                });
            }
            if (document.getElementById('' + ctrlcom + '_uccorporate_txtrefletter').value != "") {
                $('#' + ctrlcom + '_uccorporate_txtrefletter').addClass('grey');
            }
            return false;
        }
    }
    function CheckEligibilityCmp() {
        var age = 0; var gender = 0; var maritalstatus = 0; var umr_no = ''; var company_id = 0;
        umr_no = document.getElementById('' + ctrlcom + '_umrPatientDetails_Umrlookup_txtSearchControl').value;
        company_id = $("#" + ctrlcom + "_uccorporate_CmpLookup__hiddenID").val();
        if (company_id == "" || company_id == null || company_id == undefined || company_id == 0) { company_id = document.getElementById('' + ctrlcom + '_uccorporate_allcmplookup__hiddenID').value; }

        GetAsync(
    "Private/FrontOffice/OPDBILLNEW.aspx/GetEligilibityData",
    { age: age, gender: gender, maritalstatus: maritalstatus, umr_no: umr_no, company_id: company_id },
    function (data) {
        var _optionsVal = '';
        if (data.d[0].STATUS != "Y") {
            $(".stoast").toastText("warning", "Based on Company Eligibility Settings,Patient is not eligible for LOA# Creation", 5, 3);
            document.getElementById('' + ctrlcom + '_uccorporate_txtrefletter').value = '';
        }
    },
    function (jqXHR, textStatus, errorThrown) {
        alert(errorThrown);
    });
    }
    function CompareCoportaAmt(obj) {
        if (document.getElementById('' + ctrlcom + '_uccorporate_hdnDocName').value == "BillConvertion") {
            GetEmpDueAmounts(obj);
        } else {
            if ($(obj)[0].checked == true) {
                document.getElementById('' + ctrlcom + '_txtCorpPercentage').value = 0;
                document.getElementById('' + ctrlcom + '_txtEmpPercentage').value = 100;
                $("table[id*=UCServices_gvServices] tr:has(td)").each(function () {
                    if ($(this).closest('tr').find("[id*=txtServiceCode]").val() != "" && $(this).closest('tr').find("input[type=hidden][id*=hdnClass_Srv_ID]").val() == 0) {
                        $(this).closest('tr').find("[id*=txtCamt]").val(0);
                        $(this).closest('tr').find("[id*=txtCDiscP]").val(0);
                        $(this).closest('tr').find("[id*=txtCDiscAmt]").val(0);
                        $(this).closest('tr').find("[id*=txtCNetAmt]").val(0);
                        //$(this).closest('tr').find("[id*=txtDiscP]").val($(this).closest('tr').find("[id*=hdnCmpDiscPcnt]").val());
                        var rowindexgrid = $(this)[0].rowIndex;
                        //CalculateGridAmtLimits(rowindexgrid);

                    }
                    CalculateempperpatperEmpCorp();
                });
            } else {
                document.getElementById('' + ctrlcom + '_txtCorpPercentage').value = 100;
                document.getElementById('' + ctrlcom + '_txtEmpPercentage').value = 0;
                document.getElementById('' + ctrlcom + '_hdnEmpPer').value = 0;
                document.getElementById('' + ctrlcom + '_hdnOrgPer').value = 100;
                $("table[id*=UCServices_gvServices] tr:has(td)").each(function () {
                    var qty = $(this).closest('tr').find("[id*=txtQty]").val();
                    if ($(this).closest('tr').find("[id*=txtServiceCode]").val() != "" && $(this).closest('tr').find("input[type=hidden][id*=hdnClass_Srv_ID]").val() == 0) {
                        $(this).closest('tr').find("[id*=txtCDiscP]").val($(this).closest('tr').find("[id*=hdnCmpDiscPcnt]").val());
                        var rowindexgrid = $(this)[0].rowIndex;
//                        if (qty == 1) {
//                            CalculateGridAmt(rowindexgrid);
//                        } else {
//                            CalculateGridAmtLimits(rowindexgrid); 
//                        
//                        }
                    }
                    CalculateempperpatperEmpCorp();
                });
            }
//            if (document.getElementById('' + ctrlcom + '_ReceiptControl2_chkismultiple').checked) {
//                document.getElementById('' + ctrlcom + '_ReceiptControl2_chkismultiple').checked = false;
//                OnMultipleDiscGrid();
//                document.getElementById('' + ctrlcom + '_ReceiptControl2_chkismultiple').checked = true;
//                $('#' + ctrlcom + '_ReceiptControl2_Div2')[0].style.display = 'block';
//            }
        }
    }
    function BindLetterType() {
        var cmp_id = 0; var pat_class_id = 0; var getchklst = "";
        if (document.getElementById('' + ctrlcom + '_uccorporate_hdnDocName').value == 'ADMN') {
            cmp_id = document.getElementById('' + ctrlcom + '_uccorporate_CmpLookup__hiddenID').value;
            pat_class_id = 1;
        }
        else {
            cmp_id = document.getElementById('' + ctrlcom + '_uccorporate_EmployerInfo1_uctpa__hiddenID').value;
            pat_class_id = 2;
        }
        var umr_no = document.getElementById('' + ctrlcom + '_umrPatientDetails_Umrlookup_txtSearchControl').value;
        $('#gvchklistdtlsopcorp tbody tr').remove();
        if (cmp_id > 0) {
            $('[id*=divchecklistopcorp] ul li').remove(); chk_listID = [];
            GetNonAsync(
                "PatientRegistration.asmx/Get_CheckList_Details",
                { cmp_id: cmp_id, umr_no: umr_no, pat_class_id: pat_class_id, admn_no: "" },
                    function (res) {
                        var builder = '';
                        if (res.d == '' || res.d == "null") {
                            $(".stoast").toastText("warning", "Sorry No Letter Types mapped to this Company/TPA", 5, 3);
                            return false;
                        }
                        else {
                            $('#' + ctrlcom + '_uccorporate_pnlGridPop')[0].style.display = 'block';
                            for (var i = 1; i <= res.d.length; i++) {
                                if (res.d[i - 1].CHECKLIST_TYPE_ID == "6" && res.d[i - 1].UPLOAD_STATUS == "Y") {
                                    builder += "<li class=\"select\" onclick=\"ChksrvtypeOP(this)\"><input type=\"checkbox\"  id=\"chklst_" + (i - 1) + "\" name=\"chklst_" + (i - 1) + "\"  value=\"" + res.d[i - 1].LTYPE_ID + "\" /><input type=\"hidden\"  id=\"chklisthidden_" + (i - 1) + "\"  value=\"" + res.d[i - 1].CHK_LIST_STATUS + "\"/><input type=\"hidden\"  id=\"chklistcolor_" + (i - 1) + "\"  value=\"" + res.d[i - 1].STATUS_REASON + "\"/><input type=\"hidden\"  id=\"bill_chk_list_id_" + (i - 1) + "\" name=\"bill_chk_list_id_" + (i - 1) + "\" value=\"" + res.d[i - 1].BILL_CMP_CHECKLIST_ID + "\"/>&nbsp;<span id=\"lblcolor_" + (i - 1) + "\">" + res.d[i - 1].LTYPE_NAME + "</span><input type=\"hidden\"  id=\"hdnchklistypeid_" + (i - 1) + "\"  value=\"" + "6" + "\"/><span><input type=\"text\" placeholder='Remarks'  id=\"txtremarks_" + (i - 1) + "\" value=\"" + res.d[i - 1].REMARKS + "\"/></span><input type=\"hidden\"  id=\"hdnremarks_" + (i - 1) + "\"  value=\"" + res.d[i - 1].REMARKS + "\"/></li>";
                                }
                                if (res.d[i - 1].CHECKLIST_TYPE_ID != "6" && res.d[i - 1].UPLOAD_STATUS == "N") {
                                    builder += "<li class=\"select\" onclick=\"ChksrvtypeOP(this)\"><input type=\"checkbox\"  id=\"chklst_" + (i - 1) + "\" name=\"chklst_" + (i - 1) + "\"  value=\"" + res.d[i - 1].LTYPE_ID + "\" /><input type=\"hidden\"  id=\"chklisthidden_" + (i - 1) + "\"  value=\"" + res.d[i - 1].CHK_LIST_STATUS + "\"/><input type=\"hidden\"  id=\"chklistcolor_" + (i - 1) + "\"  value=\"" + res.d[i - 1].STATUS_REASON + "\"/><input type=\"hidden\"  id=\"bill_chk_list_id_" + (i - 1) + "\" name=\"bill_chk_list_id_" + (i - 1) + "\" value=\"" + res.d[i - 1].BILL_CMP_CHECKLIST_ID + "\"/>&nbsp;<span id=\"lblcolor_" + (i - 1) + "\">" + res.d[i - 1].LTYPE_NAME + "</span><input type=\"hidden\"  id=\"hdnchklistypeid_" + (i - 1) + "\"  value=\"" + res.d[i - 1].CHECKLIST_TYPE_ID + "\"/><span><input type=\"text\" placeholder='Remarks'  id=\"txtremarks_" + (i - 1) + "\" value=\"" + res.d[i - 1].REMARKS + "\"/></span><input type=\"hidden\"  id=\"hdnremarks_" + (i - 1) + "\"  value=\"" + res.d[i - 1].REMARKS + "\"/></li>";
                                }
                            }

                        }
                        $('[id*=divchecklistopcorp] ul[id*=ul_chk_list1]').append(builder);
                        MaintainChklistCheckedOP();
                    },
                function (jqXHR, textStatus, errorThrown) {
                    $(".stoast").toastText("warning", "Failed To Get List Details", 5, 3);
                });
            $('[id*=divchecklistopcorp] ul li').each(function () {
                var chktypeid = $(this).find('[type=hidden][id*=hdnchklistypeid]').val();
                var chklistid = $(this).find('[id*=chklst]')[0].value;
                var chklstchecked = $(this).closest('li').find('input[id*=chklst]')[0].checked;
                var chklstdisabled = $(this).closest('li').find('input[id*=chklst]')[0].disabled;
                if (chklstchecked == true && chklstdisabled == true) { getchklst += chklistid + ','; }
                if (chktypeid == 1) {
                    $(this).find('[id*=lblcolor]').attr('style', 'background-color:#AED75B');
                }
                if (chktypeid == 2) {
                    $(this).find('[id*=lblcolor]').attr('style', 'background-color:#FFDAB9');
                }
                if (chktypeid == 3) {
                    $(this).find('[id*=lblcolor]').attr('style', 'background-color:#FFC0CB');
                }
                if (chktypeid == 4) {
                    $(this).find('[id*=lblcolor]').attr('style', 'background-color:#f84463');
                }
                if (chktypeid == 5) {
                    $(this).find('[id*=lblcolor]').attr('style', 'background-color:#a3b9c7');
                }
                if (chktypeid == 6) {
                    $(this).find('[id*=lblcolor]').attr('style', 'background-color:rgb(195, 12, 12)');
                }
                if ($(this).closest('li').find('input[id*=chklisthidden]').val() == 'Y') {
                    $(this).find('[id*=lblcolor]').attr('style', 'background-color:#c0ffdc');
                }
            });
            if (getchklst != "") { getchklst = getchklst.substring(0, getchklst.length - 1); }
            showuploadchklsts(umr_no, getchklst, cmp_id, "");
        }
    }
    function ChksrvtypeOP(obj) {
        var cmp_id = document.getElementById('' + ctrlcom + '_uccorporate_CmpLookup__hiddenID').value;
        var Umr_No = document.getElementById('' + ctrlcom + '_umrPatientDetails_Umrlookup_txtSearchControl').value;
        $('#gvchklistdtlsopcorp tbody tr').remove(); var remarks = ''; var chklistid = "";
        var chklst = $(obj).find('[id*=chklst]')[0].checked;
        $('[id*=divchecklistopcorp] ul[id*=ul_chk_list1] li').each(function () {
            var chkval = $(this).find('[id*=chklst]').val();
            if ($(this).find('[id*=chklst]')[0].checked == true) {
                chklistid += chkval + ',';
            }
            if ($(this).find('[id*=chklst]')[0].disabled == false)
                $(this).find('[id*=chklst]')[0].checked = false;
        });
        chklistid = chklistid.substring(0, chklistid.length - 1);
        if (chklst == true) { $(obj).find('[id*=chklst]')[0].checked = true; } else { $(obj).find('[id*=chklst]')[0].checked = false; }
        var sessionchklst = $(obj).find('[id*=chklst]')[0].value;
        GetAsync("Private/FrontOffice/OpBilling/OpConsultation1.aspx/setimgprecondition", { cmp_id: cmp_id, chklistid: sessionchklst }, function () { }, function (jqXHR, textStatus, errorThrown) { });

        showuploadchklsts(Umr_No, chklistid, cmp_id, "");
    }
    function showuploadchklsts(Umr_No, chklistid, cmp_id, chklstname) {
        GetAsync(
                "Private/Corporate/NewCorporateStatements.aspx/ViewDownLoadDocument",
                { Umr_No: Umr_No, Admn_No: "", chklistid: chklistid, cmp_id: cmp_id },
                function (data) {
                    var objdata = jQuery.parseJSON(data.d[1]);
                    for (i = 0; i < objdata.length; i++) {
                        var createdt = new Date(objdata[i].CREATE_DT).format('dd-MMM-yyyy');
                        fn_AddFilterRowCheckList(Umr_No, objdata[i].IMAGE_URL, objdata[i].CHECKLIST_NAME, objdata[i].CREATE_BY, createdt, remarks);
                    }
                },
                function (jqXHR, textStatus, errorThrown) {
                });
    }
    function fn_AddFilterRowCheckList(umr_no, doc_name, chklst_name, createby, createdt, remarks) {
        var gvchklistdtlsopcorp = document.getElementById('gvchklistdtlsopcorp');
        var rowIndex = gvchklistdtlsopcorp.rows.length;
        var gridindex = 1;
        var newRow = gvchklistdtlsopcorp.insertRow(rowIndex);
        $('table[id*=gvchklistdtlsopcorp] tbody').append(newRow);
        if (rowColor == 0) {
            newRow.className = 'gridAlternaterow'
            rowColor++;
        }
        else {
            newRow.className = 'gridrow'
            rowColor = 0;
        }

        var newCell = newRow.insertCell(0);
        var lblSNo = document.createElement('label');
        lblSNo.id = 'lblSNo' + index;
        lblSNo.innerHTML = rowIndex;
        newCell.appendChild(lblSNo);

        newCell = newRow.insertCell(1);
        var lblumrno = document.createElement('span');
        lblumrno.id = 'lblumrno' + index;
        lblumrno.innerHTML = umr_no;
        newCell.appendChild(lblumrno);

        newCell = newRow.insertCell(2);
        var lbldocname = document.createElement('span');
        lbldocname.id = 'lbldocname' + index;
        lbldocname.innerHTML = doc_name;
        newCell.appendChild(lbldocname);

        newCell = newRow.insertCell(3);
        var chklstname = document.createElement('span');
        chklstname.id = 'chklstname ' + index;
        chklstname.innerHTML = chklst_name;
        newCell.appendChild(chklstname);

        newCell = newRow.insertCell(4);
        var lblcreateby = document.createElement('span');
        lblcreateby.id = 'lblcreateby' + index;
        lblcreateby.innerHTML = createby;
        newCell.appendChild(lblcreateby);

        newCell = newRow.insertCell(5);
        var lblcreatedt = document.createElement('span');
        lblcreatedt.id = 'lblcreatedt' + index;
        lblcreatedt.innerHTML = createdt;
        newCell.appendChild(lblcreatedt);

        newCell = newRow.insertCell(6);
        var lblremarks = document.createElement('span');
        lblremarks.id = 'lblremarks' + index;
        lblremarks.innerHTML = remarks;
        newCell.appendChild(lblremarks);

        index++;
    }
    var chk_listID = [];
    function MaintainChklistCheckedOP() {
        $('[id*=divchecklistopcorp] ul[id*=ul_chk_list1] li').each(function () {
            if ($(this).closest('li').find('input[id*=chklisthidden]').val() == 'Y') {
                $(this).closest('li').find('input[id*=chklst]')[0].checked = true;
                chk_listID += $(this).closest('li').find('input[id*=bill_chk_list_id]')[0].value + ',';
                $(this).closest('li').find('input[id*=chklst]').prop('disabled', 'true')
            }

        });
        if (chk_listID.length > 0) { chk_listID = chk_listID.substring(0, chk_listID.length - 1); }
    }
    var chkvalue = [];
    function MaintainChkListIdOPCorp() {
        SaveCmpChecklists();
        $('#' + ctrlcom + '_uccorporate_pnlGridPop')[0].style.display = 'none'
    }
    function SaveCmpChecklists() {
        var umr_no = document.getElementById('' + ctrlcom + '_umrPatientDetails_Umrlookup_txtSearchControl').value;
        var _xmlStr = "<root>";
        $('[id*=divchecklistopcorp] ul li').each(function () {
            var chklstchecked = $(this).closest('li').find('input[id*=chklst]')[0].checked;
            var chklstdisabled = $(this).closest('li').find('input[id*=chklst]')[0].disabled;
            if (chklstchecked == true && chklstdisabled == false) {
                var chklistid = $(this).closest('li').find('input[id*=chklst]')[0].value;
                var remarks = ReplaceSplCharactor($(this).closest('li').find('input[id*=txtremarks]').val());
                var chktypeid = $(this).find('[type=hidden][id*=hdnchklistypeid]').val();
                _xmlStr += "<FO_BILL_CMP_CHECKLIST ";
                _xmlStr += " BILL_CMP_CHECKLIST_ID=$" + 0 + "$";
                _xmlStr += " BILL_CMP_CHECKLIST_REV_NO=$" + "1" + "$";
                _xmlStr += " CHECKLIST_ID=$" + chklistid + "$";
                _xmlStr += " ADMN_ID=$" + "0" + "$";
                _xmlStr += " BILL_ID=$" + "0" + "$";
                _xmlStr += " UMR_NO=$" + umr_no + "$";
                _xmlStr += " CHECKLIST_TYPE_ID=$" + chktypeid + "$";
                _xmlStr += " REMARKS=$" + remarks + "$";
                _xmlStr += " />";
            }
        });
        _xmlStr += "</root>";
        GetNonAsync(
        "CreditOrgService.asmx/SaveCmpCheckLists",
        { xml: _xmlStr },
        function (data) {
            if (data.d != "" && data.d != null && data.d != undefined)
                $(".stoast").toastText("Info", "Check Lists Saved Successfully", 3, 1);
        },
        function (jqXHR, textStatus, errorThrown) {
            $(".stoast").toastText("warning", "Failed to Save.Please Contact Administrator!", 5, 3);
        });
    }
    function btncloseletype() {
        $('#' + ctrlcom + '_uccorporate_pnlGridPop')[0].style.display = 'none'
    }
    function OnCompany(_d) {
        if (document.getElementById('' + ctrlcom + '_uccorporate_EmployerInfo1_hdnOPDBlock').value == '') {
            if (_d.ID > 0) {
                if (_d.RESULT.ListObjVal[0].CMP_EXP_STS == "Y") {
                    $("#" + ctrlcom + "_uccorporate_EmployerInfo1_EmployerControl1_txtSearchControl").val('');
                    $("#" + ctrlcom + "_uccorporate_EmployerInfo1_EmployerControl1__hiddenText").val('');
                    $("#" + ctrlcom + "_uccorporate_EmployerInfo1_EmployerControl1__hiddenID").val(0);
                    $('#' + ctrlcom + '_uccorporate_EmployerInfo1_EmployerControl1_txtSearchControl').removeClass('red');
                    $(".stoast").toastText("warning", "This Company/TPA is Expired.Please Contact Administrator!", 5, 3);
                    return false;
                }
                if (_d.RESULT.ListObjVal[0].TARIFF_CONFIGURATION_OP == "N") {
                    $("#" + ctrlcom + "_uccorporate_EmployerInfo1_EmployerControl1_txtSearchControl").val('');
                    $("#" + ctrlcom + "_uccorporate_EmployerInfo1_EmployerControl1__hiddenText").val('');
                    $("#" + ctrlcom + "_uccorporate_EmployerInfo1_EmployerControl1__hiddenID").val(0);
                    $(".stoast").toastText("warning", "This Company has no Tariff Configuration.Please Contact Administrator!", 5, 3);
                    return false;
                }
                $("#" + ctrlcom + "_uccorporate_EmployerInfo1_EmployerControl1_txtSearchControl").val(_d.RESULT.ListObjVal[0].COMPANY_NAME);
                $("#" + ctrlcom + "_uccorporate_EmployerInfo1_EmployerControl1__hiddenText").val(_d.RESULT.ListObjVal[0].COMPANY_NAME);
                $("#" + ctrlcom + "_uccorporate_EmployerInfo1_EmployerControl1__hiddenID").val(_d.RESULT.ListObjVal[0].COMPANY_ID);
                $("#" + ctrlcom + "_hdnCompanyID").val(_d.RESULT.ListObjVal[0].COMPANY_ID);
            } else {
                if (_d.CMP_EXP_STS == "Y") {
                    $("#" + ctrlcom + "_uccorporate_EmployerInfo1_EmployerControl1_txtSearchControl").val('');
                    $("#" + ctrlcom + "_uccorporate_EmployerInfo1_EmployerControl1__hiddenText").val('');
                    $("#" + ctrlcom + "_uccorporate_EmployerInfo1_EmployerControl1__hiddenID").val(0);
                    $('#' + ctrlcom + '_uccorporate_EmployerInfo1_EmployerControl1_txtSearchControl').removeClass('red');
                    $(".stoast").toastText("warning", "This Company/TPA is Expired.Please Contact Administrator!", 5, 3);
                    return false;
                }
                if (_d.TARIFF_CONFIGURATION_OP == "N") {
                    $("#" + ctrlcom + "_uccorporate_EmployerInfo1_EmployerControl1_txtSearchControl").val('');
                    $("#" + ctrlcom + "_uccorporate_EmployerInfo1_EmployerControl1__hiddenText").val('');
                    $("#" + ctrlcom + "_uccorporate_EmployerInfo1_EmployerControl1__hiddenID").val(0);
                    $(".stoast").toastText("warning", "This Company has no Tariff Configuration.Please Contact Administrator!", 5, 3);
                    return false;
                }
                $("#" + ctrlcom + "_uccorporate_EmployerInfo1_EmployerControl1_txtSearchControl").val(_d["COMPANY_NAME"]);
                $("#" + ctrlcom + "_uccorporate_EmployerInfo1_EmployerControl1__hiddenText").val(_d.COMPANY_NAME);
                $("#" + ctrlcom + "_uccorporate_EmployerInfo1_EmployerControl1__hiddenID").val(_d["COMPANY_ID"]);
                $("#" + ctrlcom + "_hdnCompanyID").val(_d["COMPANY_ID"]);
            }
        }
        else {
            OnCompanyOPD(_d);
        }
    }
    function OnTpaSelection(_d) {


        var form_name = document.getElementById('' + ctrlcom + '_uccorporate_hdnDocName').value;
        ChkCmpExpiryalert(_d);
        if (document.getElementById('' + ctrlcom + '_uccorporate_EmployerInfo1_hdnOPDBlock').value == '') { 
            if (_d.ID > 0) {
                if (_d.RESULT.ListObjVal[0].CMP_EXP_STS == "Y") {
                    $("#" + ctrlcom + "_uccorporate_EmployerInfo1_uctpa_txtSearchControl").val('');
                    $("#" + ctrlcom + "_uccorporate_EmployerInfo1_uctpa__hiddenText").val('');
                    $("#" + ctrlcom + "_uccorporate_EmployerInfo1_uctpa__hiddenID").val(0);
                    $('#' + ctrlcom + '_uccorporate_EmployerInfo1_uctpa_txtSearchControl').removeClass('red');
                    $(".stoast").toastText("warning", "This Company/TPA is Expired.Please Contact Administrator!", 5, 3);
                    return false;
                }
                if (document.getElementById('' + ctrlcom + '_umrPatientDetails_hdnDocName').value == "ADMN") {
                    if (_d.RESULT.ListObjVal[0].TARIFF_CONFIGURATION_IP == "N") {
                        $("#" + ctrlcom + "_uccorporate_EmployerInfo1_uctpa_txtSearchControl").val('');
                        $("#" + ctrlcom + "_uccorporate_EmployerInfo1_uctpa__hiddenText").val('');
                        $("#" + ctrlcom + "_uccorporate_EmployerInfo1_uctpa__hiddenID").val(0);
                        $(".stoast").toastText("warning", "This Company/TPA has no Tariff Configuration.Please Contact Administrator!", 5, 3);
                        return false;
                    }
                } else {
                    if (_d.RESULT.ListObjVal[0].TARIFF_CONFIGURATION_OP == "N") {
                        $("#" + ctrlcom + "_uccorporate_EmployerInfo1_uctpa_txtSearchControl").val('');
                        $("#" + ctrlcom + "_uccorporate_EmployerInfo1_uctpa__hiddenText").val('');
                        $("#" + ctrlcom + "_uccorporate_EmployerInfo1_uctpa__hiddenID").val(0);
                        $(".stoast").toastText("warning", "This Company/TPA has no Tariff Configuration.Please Contact Administrator!", 5, 3);
                        return false;
                    }
                }
                var reg_cmp_id = []; var reg_exp_dt = document.getElementById('' + ctrlcom + '_umrPatientDetails_hdnregexpdt').value;
                if (reg_exp_dt == null || reg_exp_dt == undefined || reg_exp_dt == 'undefined') { reg_exp_dt = ""; }
                if (reg_exp_dt != "") {
                    var result = CompareDates(new Date(reg_exp_dt).format('dd-MMM-yyyy'), new Date().format('dd-MMM-yyyy'));
                    if (result == "d1>=d2") {
                        reg_cmp_id = document.getElementById('' + ctrlcom + '_umrPatientDetails_hdnoldregtpaid').value.split(',');
                        for (i = 0; i < reg_cmp_id.length; i++) {
                            if (reg_cmp_id[i] == _d.RESULT.ListObjVal[0].COMPANY_ID) {
                                $("#" + ctrlcom + "_uccorporate_EmployerInfo1_uctpa_txtSearchControl").val('');
                                $("#" + ctrlcom + "_uccorporate_EmployerInfo1_uctpa__hiddenText").val('');
                                $("#" + ctrlcom + "_uccorporate_EmployerInfo1_uctpa__hiddenID").val(0);
                                $('#' + ctrlcom + '_uccorporate_EmployerInfo1_uctpa_txtSearchControl').removeClass('red');
                                $(".stoast").toastText("Info", "Already Patient is registered in this company", 7, 2);
                                return false;
                            }
                        }
                    }
                }
                document.getElementById('' + ctrlcom + '_uccorporate_hdncmpcons').value = _d.RESULT.ListObjVal[0].VAL_NO_OF_CONSULTATIONS;
                document.getElementById('' + ctrlcom + '_uccorporate_hdncmpconsdone').value = _d.RESULT.ListObjVal[0].CMP_CONS_DONE;
                $('#' + ctrlcom + '_uccorporate_hdnrefletterreq').val(_d.RESULT.ListObjVal[0].IS_LETTER_REQUIRED);

                if (_d.RESULT.ListObjVal[0].IS_LETTER_REQUIRED == "Y" && document.getElementById('' + ctrlcom + '_umrPatientDetails_hdnDocName').value == "ADMN") {
                    $('#' + ctrlcom + '_uccorporate_EmployerInfo1_txtrefletter').addClass('red');
                    document.getElementById('' + ctrlcom + '_uccorporate_hdnrefletterreq').value = "Y";
                } else {
                    $('#' + ctrlcom + '_uccorporate_ucRefLetterNo_txtSearchControl').removeClass('red');
                    document.getElementById('' + ctrlcom + '_uccorporate_EmployerInfo1_txtrefletter').value = "N";
                }

                $("#" + ctrlcom + "_uccorporate_EmployerInfo1_uctpa_txtSearchControl").val(_d.RESULT.ListObjVal[0].COMPANY_NAME);
                $("#" + ctrlcom + "_uccorporate_EmployerInfo1_uctpa__hiddenText").val(_d.RESULT.ListObjVal[0].COMPANY_NAME);
                $("#" + ctrlcom + "_uccorporate_EmployerInfo1_uctpa__hiddenID").val(_d.RESULT.ListObjVal[0].COMPANY_ID);

                if (_d.RESULT.ListObjVal[0].CREDIT_LIMIT_AMT_OP == "" || _d.RESULT.ListObjVal[0].CREDIT_LIMIT_AMT_OP == null || _d.RESULT.ListObjVal[0].CREDIT_LIMIT_AMT_OP == undefined) { _d.RESULT.ListObjVal[0].CREDIT_LIMIT_AMT_OP = "0"; }
                if (_d.RESULT.ListObjVal[0].IP_APPROVAL_REQ_MIN_AMT == "" || _d.RESULT.ListObjVal[0].IP_APPROVAL_REQ_MIN_AMT == null || _d.RESULT.ListObjVal[0].IP_APPROVAL_REQ_MIN_AMT == undefined) { _d.RESULT.ListObjVal[0].IP_APPROVAL_REQ_MIN_AMT = "0"; }
                if (document.getElementById('' + ctrlcom + '_umrPatientDetails_hdnDocName').value == "ADMN") {
                    BindcompanyTariffID(_d.RESULT.ListObjVal[0].COMPANY_ID);
                    document.getElementById('' + ctrlcom + '_hdniseligibileward').value = _d.RESULT.ListObjVal[0].IS_CONSELIGIBLE_WARD;
                    $("#" + ctrlcom + "_uccorporate_EmployerInfo1_txtcreditlimitamt").val(parseInt(_d.RESULT.ListObjVal[0].IP_APPROVAL_REQ_MIN_AMT));
                    $("#" + ctrlcom + "_uccorporate_hdncmpcreditamt").val(parseInt(_d.RESULT.ListObjVal[0].IP_APPROVAL_REQ_MIN_AMT));
                    document.getElementById('' + ctrlcom + '_uccorporate_hdnOrgPer').value = _d.RESULT.ListObjVal[0].ip_org_percent;
                    document.getElementById('' + ctrlcom + '_uccorporate_hdnEmpPer').value = _d.RESULT.ListObjVal[0].ip_emp_percent;
                    debugger;
                    document.getElementById('' + ctrlcom + '_uccorporate_hdnCompanyOrgpercent').value = _d.RESULT.ListObjVal[0].ip_org_percent;
                    document.getElementById('' + ctrlcom + '_uccorporate_hdnEmployeOrgpercent').value = _d.RESULT.ListObjVal[0].ip_emp_percent;
                    document.getElementById('' + ctrlcom + '_hdnOrgPer').value = _d.RESULT.ListObjVal[0].ip_org_percent;
                    document.getElementById('' + ctrlcom + '_hdnEmpPer').value = _d.RESULT.ListObjVal[0].ip_emp_percent;
                    document.getElementById('' + ctrlcom + '_uccorporate_EmployerInfo1_txtorgletterper').value = _d.RESULT.ListObjVal[0].ip_org_percent;
                    document.getElementById('' + ctrlcom + '_uccorporate_EmployerInfo1_txtempletterper').value = _d.RESULT.ListObjVal[0].ip_emp_percent;
                } else {
                    $("#" + ctrlcom + "_uccorporate_EmployerInfo1_txtcreditlimitamt").val(parseInt(_d.RESULT.ListObjVal[0].CREDIT_LIMIT_AMT_OP));
                    $("#" + ctrlcom + "_uccorporate_hdncmpcreditamt").val(parseInt(_d.RESULT.ListObjVal[0].CREDIT_LIMIT_AMT_OP));
                    document.getElementById('' + ctrlcom + '_uccorporate_hdnOrgPer').value = _d.RESULT.ListObjVal[0].ORG_PERCENT;
                    document.getElementById('' + ctrlcom + '_uccorporate_hdnEmpPer').value = _d.RESULT.ListObjVal[0].EMP_PERCENT;
                    debugger;
                    document.getElementById('' + ctrlcom + '_uccorporate_hdnCompanyOrgpercent').value = _d.RESULT.ListObjVal[0].ORG_PERCENT;
                    document.getElementById('' + ctrlcom + '_uccorporate_hdnEmployeOrgpercent').value = _d.RESULT.ListObjVal[0].EMP_PERCENT;
                    document.getElementById('' + ctrlcom + '_hdnOrgPer').value = _d.RESULT.ListObjVal[0].ORG_PERCENT;
                    document.getElementById('' + ctrlcom + '_hdnEmpPer').value = _d.RESULT.ListObjVal[0].EMP_PERCENT;
                    document.getElementById('' + ctrlcom + '_uccorporate_EmployerInfo1_txtorgletterper').value = _d.RESULT.ListObjVal[0].ORG_PERCENT;
                    document.getElementById('' + ctrlcom + '_uccorporate_EmployerInfo1_txtempletterper').value = _d.RESULT.ListObjVal[0].EMP_PERCENT;
                }
                var selectedtext = $('[id*=uccorporate_ddlpattyp] option:selected').text();
                selectedtext = selectedtext.trim().toUpperCase();
                if (selectedtext == 'YOJANA') {
                    document.getElementById('' + ctrlcom + '_uccorporate_EmployerInfo1_ddlrelation').selectedIndex = 16;
                    document.getElementById('' + ctrlcom + '_uccorporate_EmployerInfo1_txtEmployeeName').value = $('[id*=umrPatientDetails_lblPatName]').text();
                    document.getElementById('' + ctrlcom + '_uccorporate_EmployerInfo1_txtEmpMRNo').value = $('[id*=umrPatientDetails_Umrlookup_txtSearchControl]').val();
                    document.getElementById('' + ctrlcom + '_uccorporate_EmployerInfo1_txtdateofissue').value = new Date().format('dd-MMM-yyyy');
                }
                $('#' + ctrlcom + '_uccorporate_EmployerInfo1_uctpa_txtSearchControl').removeClass('red');
                ($('#' + ctrlcom + '_hdnrefvaliddays').val(_d.RESULT.ListObjVal[0].VAL_NO_OF_DAYS));
                _d = _d.RESULT.ListObjVal[0];


            } else {
                if (_d.CMP_EXP_STS == "Y") {
                    $("#" + ctrlcom + "_uccorporate_EmployerInfo1_uctpa_txtSearchControl").val('');
                    $("#" + ctrlcom + "_uccorporate_EmployerInfo1_uctpa__hiddenText").val('');
                    $("#" + ctrlcom + "_uccorporate_EmployerInfo1_uctpa__hiddenID").val(0);
                    $('#' + ctrlcom + '_uccorporate_EmployerInfo1_uctpa_txtSearchControl').removeClass('red');
                    $(".stoast").toastText("warning", "This Company/TPA is Expired.Please Contact Administrator!", 5, 3);
                    return false;
                }
                if (document.getElementById('' + ctrlcom + '_umrPatientDetails_hdnDocName').value == "ADMN") {
                    if (_d.TARIFF_CONFIGURATION_IP == "N") {
                        $("#" + ctrlcom + "_uccorporate_EmployerInfo1_uctpa_txtSearchControl").val('');
                        $("#" + ctrlcom + "_uccorporate_EmployerInfo1_uctpa__hiddenText").val('');
                        $("#" + ctrlcom + "_uccorporate_EmployerInfo1_uctpa__hiddenID").val(0);
                        $(".stoast").toastText("warning", "This Company/TPA has no Tariff Configuration.Please Contact Administrator!", 5, 3);
                        return false;
                    }
                } else {
                    if (_d.TARIFF_CONFIGURATION_OP == "N") {
                        $("#" + ctrlcom + "_uccorporate_EmployerInfo1_uctpa_txtSearchControl").val('');
                        $("#" + ctrlcom + "_uccorporate_EmployerInfo1_uctpa__hiddenText").val('');
                        $("#" + ctrlcom + "_uccorporate_EmployerInfo1_uctpa__hiddenID").val(0);
                        $(".stoast").toastText("warning", "This Company/TPA has no Tariff Configuration.Please Contact Administrator!", 5, 3);
                        return false;
                    }
                }
                var reg_cmp_id = []; var reg_exp_dt = document.getElementById('' + ctrlcom + '_umrPatientDetails_hdnregexpdt').value;
                if (reg_exp_dt == null || reg_exp_dt == undefined || reg_exp_dt == 'undefined') { reg_exp_dt = ""; }
                if (reg_exp_dt != "") {
                    var result = CompareDates(new Date(reg_exp_dt).format('dd-MMM-yyyy'), new Date().format('dd-MMM-yyyy'));
                    if (result == "d1>=d2") {
                        reg_cmp_id = document.getElementById('' + ctrlcom + '_umrPatientDetails_hdnoldregtpaid').value.split(',');
                        for (i = 0; i < reg_cmp_id.length; i++) {
                            if (reg_cmp_id[i] == _d["COMPANY_ID"]) {
                                $("#" + ctrlcom + "_uccorporate_EmployerInfo1_uctpa_txtSearchControl").val('');
                                $("#" + ctrlcom + "_uccorporate_EmployerInfo1_uctpa__hiddenText").val('');
                                $("#" + ctrlcom + "_uccorporate_EmployerInfo1_uctpa__hiddenID").val(0);
                                document.getElementById('' + ctrlcom + '_uccorporate_EmployerInfo1_uctpa_txtSearchControl').style.border = '';
                                $(".stoast").toastText("Info", "Already Patient is registered in this company", 7, 2);
                                return false;
                            }
                        }
                    }
                }

                $("#" + ctrlcom + "_uccorporate_EmployerInfo1_uctpa_txtSearchControl").val(_d["COMPANY_NAME"]);
                $("#" + ctrlcom + "_uccorporate_EmployerInfo1_uctpa__hiddenText").val(_d.COMPANY_NAME);
                $("#" + ctrlcom + "_uccorporate_EmployerInfo1_uctpa__hiddenID").val(_d["COMPANY_ID"]);
                document.getElementById(_commonCph + 'uccorporate_CmpLookup__hiddenID').value = _d["COMPANY_ID"];
                $('#' + ctrlcom + '_uccorporate_EmployerInfo1_uctpa_txtSearchControl').removeClass('red');
                $("#" + ctrlcom + "_hdnCompanyID").val(_d["COMPANY_ID"]);
                $('[id*=uccorporate_ddlpattyp]').val(_d["COMPANY_TYPE_ID"]);
                $('#' + ctrlcom + '_uccorporate_ddlpattyp').removeClass('red');
                $('#' + ctrlcom + '_uccorporate_hdnrefletterreq').val(_d["IS_LETTER_REQUIRED"]);
                if (_d["IS_LETTER_REQUIRED"] == "Y" && document.getElementById('' + ctrlcom + '_umrPatientDetails_hdnDocName').value == "ADMN") {
                    $('#' + ctrlcom + '_uccorporate_EmployerInfo1_txtrefletter').addClass('red');
                    document.getElementById('' + ctrlcom + '_uccorporate_hdnrefletterreq').value = "Y";
                } else {
                    $('#' + ctrlcom + '_uccorporate_EmployerInfo1_txtrefletter').removeClass('red');
                    document.getElementById('' + ctrlcom + '_uccorporate_hdnrefletterreq').value = "N";
                }

                $('#' + ctrlcom + '_hdnrefvaliddays').val(_d["VAL_NO_OF_DAYS"]);
                document.getElementById('' + ctrlcom + '_uccorporate_hdncmpcons').value = _d.VAL_NO_OF_CONSULTATIONS;
                document.getElementById('' + ctrlcom + '_uccorporate_hdncmpconsdone').value = _d.CMP_CONS_DONE;
                if (_d["CREDIT_LIMIT_AMT_OP"] == null || _d["CREDIT_LIMIT_AMT_OP"] == undefined || _d["CREDIT_LIMIT_AMT_OP"] == "") { _d["CREDIT_LIMIT_AMT_OP"] = "0"; }
                if (_d["IP_APPROVAL_REQ_MIN_AMT"] == null || _d["IP_APPROVAL_REQ_MIN_AMT"] == undefined || _d["IP_APPROVAL_REQ_MIN_AMT"] == "") { _d["IP_APPROVAL_REQ_MIN_AMT"] = "0"; }
                if (document.getElementById('' + ctrlcom + '_umrPatientDetails_hdnDocName').value == "ADMN") {
                    BindcompanyTariffID(_d["COMPANY_ID"]);
                    document.getElementById('' + ctrlcom + '_hdniseligibileward').value = _d.IS_CONSELIGIBLE_WARD;
                    $("#" + ctrlcom + "_uccorporate_EmployerInfo1_txtcreditlimitamt").val(parseInt(_d["IP_APPROVAL_REQ_MIN_AMT"]));
                    $("#" + ctrlcom + "_uccorporate_hdncmpcreditamt").val(parseInt(_d["IP_APPROVAL_REQ_MIN_AMT"]));
                    document.getElementById('' + ctrlcom + '_uccorporate_hdnOrgPer').value = _d["IP_ORG_PERCENT"];
                    document.getElementById('' + ctrlcom + '_uccorporate_hdnEmpPer').value = _d["IP_EMP_PERCENT"];
                    document.getElementById('' + ctrlcom + '_hdnOrgPer').value = _d["IP_ORG_PERCENT"];
                    document.getElementById('' + ctrlcom + '_hdnEmpPer').value = _d["IP_EMP_PERCENT"];
                    document.getElementById('' + ctrlcom + '_uccorporate_EmployerInfo1_txtorgletterper').value = _d["IP_ORG_PERCENT"];
                    document.getElementById('' + ctrlcom + '_uccorporate_EmployerInfo1_txtempletterper').value = _d["IP_EMP_PERCENT"];
                    debugger;
                    document.getElementById('' + ctrlcom + '_uccorporate_hdnCompanyOrgpercent').value = _d["IP_ORG_PERCENT"];
                    document.getElementById('' + ctrlcom + '_uccorporate_hdnEmployeOrgpercent').value = _d["IP_EMP_PERCENT"];

                } else {
                    $("#" + ctrlcom + "_uccorporate_EmployerInfo1_txtcreditlimitamt").val(parseInt(_d["CREDIT_LIMIT_AMT_OP"]));
                    $("#" + ctrlcom + "_uccorporate_hdncmpcreditamt").val(parseInt(_d["CREDIT_LIMIT_AMT_OP"]));
                    document.getElementById('' + ctrlcom + '_uccorporate_hdnOrgPer').value = _d["ORG_PERCENT"];
                    document.getElementById('' + ctrlcom + '_uccorporate_hdnEmpPer').value = _d["EMP_PERCENT"];
                    document.getElementById('' + ctrlcom + '_hdnOrgPer').value = _d["ORG_PERCENT"];
                    document.getElementById('' + ctrlcom + '_hdnEmpPer').value = _d["EMP_PERCENT"];
                    document.getElementById('' + ctrlcom + '_uccorporate_EmployerInfo1_txtorgletterper').value = _d["ORG_PERCENT"];
                    document.getElementById('' + ctrlcom + '_uccorporate_EmployerInfo1_txtempletterper').value = _d["EMP_PERCENT"];
                    debugger;
                    document.getElementById('' + ctrlcom + '_uccorporate_hdnCompanyOrgpercent').value = _d["ORG_PERCENT"];
                    document.getElementById('' + ctrlcom + '_uccorporate_hdnEmployeOrgpercent').value = _d["EMP_PERCENT"];
                }
                var selectedtext = $('[id*=ddlpattyp] option:selected').text();
                selectedtext = selectedtext.trim().toUpperCase();
                if (selectedtext == 'YOJANA') {
                    document.getElementById('' + ctrlcom + '_uccorporate_EmployerInfo1_ddlrelation').selectedIndex = 16;
                    document.getElementById('' + ctrlcom + '_uccorporate_EmployerInfo1_txtEmployeeName').value = $('[id*=umrPatientDetails_lblPatName]').text();
                    document.getElementById('' + ctrlcom + '_uccorporate_EmployerInfo1_txtEmpMRNo').value = $('[id*=umrPatientDetails_Umrlookup_txtSearchControl]').val();
                    document.getElementById('' + ctrlcom + '_uccorporate_EmployerInfo1_txtEmploeeID').value = $('[id*=umrPatientDetails_Umrlookup_txtSearchControl]').val();
                    document.getElementById('' + ctrlcom + '_uccorporate_EmployerInfo1_txtdateofissue').value = new Date().format('dd-MMM-yyyy');
                }
            }
            RefLetterReq();
            var umr_no = document.getElementById('' + ctrlcom + '_umrPatientDetails_Umrlookup__hiddenText').value
            var cmpny_id = document.getElementById('' + ctrlcom + '_uccorporate_EmployerInfo1_uctpa__hiddenID').value;
            Referalletter_precondition(umr_no, cmpny_id);
            BindBranchToDropdown(_d["COMPANY_ID"]);
            BindGradeToDropdown(_d["COMPANY_ID"]);
        }
        else {
            OnTpaSelectionOPD(_d);
            if (document.getElementById('' + ctrlcom + '_uccorporate_hdnDocName').value == "OPQUICK") { 
                if (_d.CMP_EXP_STS != "Y" && _d.TARIFF_CONFIGURATION_OP != "N" && tpalookup == "N") {
                    if (document.getElementById('' + ctrlcom + '_UCServices_hdnallowconsservice').value.toUpperCase() == "TRUE") {
                        AllowAdminCharges();
                    }
                }
            }
            AssignEmpOrgPersentage(_d)
        }
        $('#' + ctrlcom + '_uccorporate_EmployerInfo1_uctpa_txtSearchControl').removeClass('red');
        return false;
    }
    function BindBranchToDropdown(cmpyID) {
        GetAsync(
        "Private/FrontOffice/OPDBILLNEW.aspx/SetCmpId",
        { Cmpy_ID: cmpyID },
        function (JData) {
            if (JData.d != null)
            DropdownBindBrach(JData);
        },
        function (jqXHR, textStatus, errorThrown) {
            alert(errorThrown);
        });
    }
    function DropdownBindBrach(response) {
        var dropdown = document.getElementById('' + ctrlcom + '_uccorporate_EmployerInfo1_txtBranch');
        if (dropdown != null) {
            if (dropdown.options.length > 0) {
                var count = dropdown.options.length;
                for (var j = 0; j < count; j++) {
                    dropdown.options.remove(0);
                }
            }
            for (var i = 0; i <= response.d.length; i++) {
                var opt = document.createElement("option");

                if (i == 0) {
                    opt.text = "Select"; //'Calibration'; 
                    opt.value = "0";
                }
                else {
                    opt.value = response.d[i - 1].COMPNY_DIVISION_ID; //'Calibration';
                    opt.text = response.d[i - 1].COMP_DIVISION_NAME;

                }
                dropdown.options.add(opt, i);
            }
        }
    }

    function BindGradeToDropdown(cmpyID) {
        GetAsync(
        "Private/FrontOffice/OPDBILLNEW.aspx/GetGradeDetails",
        { Cmpy_ID: cmpyID },
        function (JData) {
            if (JData.d != null)
            GradeBindBrach(JData);
        },
        function (jqXHR, textStatus, errorThrown) {
            alert(errorThrown);
        });
    }
    function GradeBindBrach(grade) {
        var ddlGrade = document.getElementById('' + ctrlcom + '_uccorporate_EmployerInfo1_txtempgrade');
        if (ddlGrade != null) {
            if (ddlGrade.options.length > 0) {
                var count = ddlGrade.options.length;
                for (var j = 0; j < count; j++) {
                    ddlGrade.options.remove(0);
                }
            }
            for (var i = 0; i <= grade.d.length; i++) {
                var opt = document.createElement("option");

                if (i == 0) {
                    opt.text = "Select"; //'Calibration'; 
                    opt.value = "0";
                }
                else {
                    opt.value = grade.d[i - 1].GRADE_ID; //'Calibration';
                    opt.text = grade.d[i - 1].GRADE_NAME;

                }
                ddlGrade.options.add(opt, i);
            }
        }
    }

    function ChkCmpExpiryalert(_d) {
        if (_d.EFFECT_TO_DT == undefined) { _d = _d.RESULT.ListObjVal[0]; }
        var days = days_betwwen_dates(new Date().format('dd-MMM-yyyy'), new Date(_d.EFFECT_TO_DT).format('dd-MMM-yyyy'));
        if (_d.CMP_EXP_ALERT == "Y") {
            $(".toast").toastText("Info", "Company/TPA is going to Expire within " + days + " Days", 7, 2);
        }
    }

    function RefLetterReq() {
        var RefLetter = document.getElementById('' + ctrlcom + '_uccorporate_EmployerInfo1_txtrefletter');
        var LetterIssueby = document.getElementById('' + ctrlcom + '_uccorporate_EmployerInfo1_txtletterissuedby');
        var creditlimit = document.getElementById('' + ctrlcom + '_uccorporate_EmployerInfo1_txtcreditlimitamt');
        var refissuedt = document.getElementById('' + ctrlcom + '_uccorporate_EmployerInfo1_txtrefissuedt');
        var refexpdate = document.getElementById('' + ctrlcom + '_uccorporate_EmployerInfo1_txtlettervalidity');

        if (document.getElementById('' + ctrlcom + '_uccorporate_hdnDocName').value == "OPQUICK") {
            if (document.getElementById('' + ctrlcom + '_chk_old').checked == false) {
                RefLetter = document.getElementById('' + ctrlcom + '_EmployerInfo1_txtrefletter');
                LetterIssueby = document.getElementById('' + ctrlcom + '_EmployerInfo1_txtletterissuedby');
                creditlimit = document.getElementById('' + ctrlcom + '_EmployerInfo1_txtcreditlimitamt');
                refissuedt = document.getElementById('' + ctrlcom + '_EmployerInfo1_txtrefissuedt');
                refexpdate = document.getElementById('' + ctrlcom + '_EmployerInfo1_txtlettervalidity');
            }
        }
        var refletter = document.getElementById('' + ctrlcom + '_uccorporate_hdnrefletterreq').value;
        var duration = document.getElementById('' + ctrlcom + '_hdnrefvaliddays').value;
        if (duration > 0) { duration = duration - 1; }
        var date = new Date(new Date().getTime() + (duration) * 24 * 60 * 60 * 1000).format('dd-MMM-yyyy');
        var result = CompareDates(new Date().format('dd-MMM-yyyy'), date);
        if (result == "d1>=d2") {
            $(".stoast").toastText("warning", "Referral Letter Expiry Date should not be less than Todays Date", 5, 3);
            refissuedt.value = new Date().format('dd-MMM-yyyy');
            validdt = new Date(new Date().getTime() + duration * 24 * 60 * 60 * 1000).format('dd-MMM-yyyy');
            refexpdate.value = validdt;
            return false;
        } else {
            refissuedt.value = new Date().format('dd-MMM-yyyy');
            refexpdate.value = date;
        }
        if (refletter == "N" || refletter == "" || refletter == null) {
            RefLetter.style.border = '1px solid #818d98';
            LetterIssueby.style.border = '1px solid #818d98';
        }
        if (document.getElementById('' + ctrlcom + '_uccorporate_hdnDocName').value == 'ADMN') {
            RefLetter.style.border = '';
            LetterIssueby.style.border = '';
        }
        else {
            if (RefLetter.value == '' || RefLetter.value == undefined) {
                if (refletter == "Y") {
                    $('#' + ctrlcom + '_uccorporate_EmployerInfo1_txtrefletter').addClass('red');
                }
            }
            if (LetterIssueby.value == '' || LetterIssueby.value == undefined) {
                if (refletter == "Y") {
                    $('#' + ctrlcom + '_uccorporate_EmployerInfo1_txtletterissuedby').addClass('red');
                }
            }
        }

    }
    function assigncmplogo(imge) {
        var _str = imge;
        var _baseString = '';
        GetNonAsync(
            "Private/Frontoffice/OPDBILLNEW.aspx/Get_imagedetails",
            { _str: _str },
            function (data) {
                _baseString = data.d;
                if (_baseString != '' && _baseString != undefined && _baseString != null && _baseString != "AA==") {
                    $('#imgDiv').css('display', 'block');
                    $('#<%=Image1.ClientID %>').attr('src', "data:image/jpg;base64," + _baseString);
                }
                else {
                    $('#imgDiv').css('display', 'none');
                    $('#<%=Image1.ClientID %>').attr('src', "");
                }
            },
            function (jqXHR, textStatus, errorThrown) {
            });

    }
    /* control*/
    function OnCompSelection(input) {
        var Length = $('table[id*=gvServices] tr:has(td)').length;
        if (document.getElementById('' + ctrlcom + '_uccorporate_hdnDocName').value == "ADMN") {
            $("table[id*=gvServices] tr:has(td)").each(function (e) {
                var srv_name = $(this).closest('tr').find('input[type=text][id*=txtServiceName]').val();
                var _srvId = $(this).closest('tr').find("input[type=hidden][id*=hdnServiceID]").val();
                var _doctor_id = $(this).closest('tr').find("input[type=hidden][id*=hdnDoctorID]").val();
                var _srv_class_id = $(this).closest('tr').find('input[type=hidden][id*=hdnServiceClass]').val();

            });
        } else {
            DelateAllGridData();
        }
        //if (input.ID > 0) { input = input.RESULT.ListObjVal[0]; }
        var cmpcredit = 0;
        if (document.getElementById('' + ctrlcom + '_uccorporate_hdnDocName').value == "ADMN") {
            cmpcredit = input.IP_APPROVAL_REQ_MIN_AMT;
            document.getElementById('' + ctrlcom + '_ucTariff_txtSearchControl').value = input.TARIFF_NAME;
            document.getElementById('' + ctrlcom + '_ucTariff__hiddenID').value = input.TARIFF_ID;
            document.getElementById('' + ctrlcom + '_ucTariff__hiddenText').value = input.TARIFF_NAME;
            document.getElementById('' + ctrlcom + '_uccorporate_ddlpatcreditype').value = input.COMPANY_TYPE_ID;
            $('#' + ctrlcom + '_uccorporate_ddlpattyp').removeClass('red');
        }
        else { cmpcredit = input.CREDIT_LIMIT_AMT_OP; }
        var cmpy_referl_letter = input.CMPY_REFERL_LETTER; var cmpy_referl_letter_days = input.CMPY_REFERL_LETTER_DAYS;
        var cmpy_referl_letter_split = cmpy_referl_letter.split(','); var cmpy_referl_letter_days_split = cmpy_referl_letter_days.split(',');
        if (cmpy_referl_letter == null || cmpy_referl_letter == undefined || cmpy_referl_letter == '') { }
        else {
            for (var i = 0; i < cmpy_referl_letter_split.length; i++) {
                if (cmpy_referl_letter_days_split[i] > 0) {
                    $(".stoast").toastText("warning", "Referal Letter  " + cmpy_referl_letter_split[i] + " Expiring in " + cmpy_referl_letter_days_split[i] + " Days .", 2, 3);
                } if (cmpy_referl_letter_days_split[i] == 0) {
                    $(".stoast").toastText("warning", "Referal Letter  " + cmpy_referl_letter_split[i] + " Expiring today ", 2, 3);
                }
            }
        }
        $('#banercolourcorp').css('background', '#' + input.COLOUR_ID + '');
        if (cmpcredit == "" || cmpcredit == null || cmpcredit == undefined) { cmpcredit = "0"; }
        document.getElementById('' + ctrlcom + '_uccorporate_hdncmpcons').value = input.VAL_NO_OF_CONSULTATIONS;
        document.getElementById('' + ctrlcom + '_uccorporate_hdncmpconsdone').value = input.CMP_CONS_DONE;
        //        if (document.getElementById('' + ctrlcom + '_umrPatientDetails_hdnDocName').value == 'Cons') {
        //            if (parseInt(input.CMP_CONS_DONE) >= parseInt(input.VAL_NO_OF_CONSULTATIONS)) {
        //                $(".stoast").toastText("Info", "Consultations Limit done for this Company/TPA!", 7, 2);
        //                document.getElementById('' + ctrlcom + '_uccorporate_CmpLookup_txtSearchControl').value = '';
        //                document.getElementById('' + ctrlcom + '_uccorporate_CmpLookup__hiddenID').value = 0;
        //                document.getElementById('' + ctrlcom + '_uccorporate_CmpLookup__hiddenText').value = '';
        //                return false;
        //            }
        //        }
        var umrno = document.getElementById('' + ctrlcom + '_umrPatientDetails_Umrlookup_txtSearchControl').value;
        var patID = document.getElementById('' + ctrlcom + '_umrPatientDetails_hdnPatientid').value;
        if (document.getElementById('' + ctrlcom + '_uccorporate_hdnDocName').value == "ADMN") {
            document.getElementById('' + ctrlcom + '_uccorporate_ucRefLetterNo_txtSearchControl').disabled = true;
            document.getElementById('lk_btn_ctl00_ContentPlaceHolder1_uccorporate_ucRefLetterNo').disabled = true;
            ctl00_ContentPlaceHolder1_uccorporate_btnRefLetter.disabled = false
        }
        else {
            document.getElementById('' + ctrlcom + '_uccorporate_ucRefLetterNo_txtSearchControl').disabled = false;
            document.getElementById('lk_btn_ctl00_ContentPlaceHolder1_uccorporate_ucRefLetterNo').disabled = false;
        }
        var cmpnyid = parseInt("0");
        if (input.COMPANY_NAME == input._lktext) {
            document.getElementById('' + ctrlcom + '_uccorporate_CmpLookup_txtSearchControl').value = input._lktext;
            document.getElementById('' + ctrlcom + '_uccorporate_CmpLookup__hiddenText').value = input._lktext;
            document.getElementById('' + ctrlcom + '_uccorporate_CmpLookup__hiddenID').value = input.COMPANY_ID;
            document.getElementById('' + ctrlcom + '_uccorporate_EmployerInfo1_uctpa__hiddenID').value = input.COMPANY_ID;
            document.getElementById('' + ctrlcom + '_hdnCompnyId').value = input.COMPANY_ID;
            document.getElementById('' + ctrlcom + '_hdnCompnyName').value = input.COMPANY_NAME;
            document.getElementById('' + ctrlcom + '_hdnOrgPer').value = input.ORG_PERCENT;
            document.getElementById('' + ctrlcom + '_hdnNoOfConsValidDays').value = input.VAL_NO_OF_CONSULTATIONS;
            document.getElementById('' + ctrlcom + '_hdnEmpPer').value = input.EMP_PERCENT;
            document.getElementById('' + ctrlcom + '_uccorporate_hdnOrgPer').value = input.ORG_PERCENT;
            document.getElementById('' + ctrlcom + '_uccorporate_hdnEmpPer').value = input.EMP_PERCENT;
            if (document.getElementById('' + ctrlcom + '_uccorporate_hdnDocName').value == 'ADMN') {
                document.getElementById('' + ctrlcom + '_uccorporate_hdnCompanyOrgpercent').value = input.IP_ORG_PERCENT;
                document.getElementById('' + ctrlcom + '_uccorporate_hdnEmployeOrgpercent').value = input.IP_EMP_PERCENT;
            } else {
                document.getElementById('' + ctrlcom + '_uccorporate_hdnCompanyOrgpercent').value = input.ORG_PERCENT;
                document.getElementById('' + ctrlcom + '_uccorporate_hdnEmployeOrgpercent').value = input.EMP_PERCENT;
            }
            document.getElementById('' + ctrlcom + '_hdnisletReq').value = input.IS_LETTER_REQUIRED;
            document.getElementById('' + ctrlcom + '_hdnrefvaliddays').value = input.VAL_NO_OF_DAYS;
            document.getElementById('' + ctrlcom + '_uccorporate_hdnrefletterreq').value = input.IS_LETTER_REQUIRED;
            if (input.IS_LETTER_REQUIRED == "Y") { document.getElementById('' + ctrlcom + '_uccorporate_chkRefLetReq').checked = true; }
            else {
                document.getElementById('' + ctrlcom + '_uccorporate_chkRefLetReq').checked = false;
                document.getElementById('' + ctrlcom + '_uccorporate_chkRefLetReq').disabled = true;
            }
            cmpnyid = parseInt(input.COMPANY_ID);
            document.getElementById('' + ctrlcom + '_umrPatientDetails_lblpattype').innerHTML = 'Corporate';
            document.getElementById('' + ctrlcom + '_umrPatientDetails_lblcmpname').innerHTML = input._lktext;
            document.getElementById('' + ctrlcom + '_uccorporate_hdncmpcreditamt').value = parseInt(cmpcredit);
            if (document.getElementById('' + ctrlcom + '_uccorporate_CmpLookup_txtSearchControl').value != '') {
                $('#' + ctrlcom + '_uccorporate_CmpLookup_txtSearchControl').addClass('red');
            }
        }
        else {
            document.getElementById('' + ctrlcom + '_uccorporate_CmpLookup_txtSearchControl').value = input.COMPANY_NAME;
            document.getElementById('' + ctrlcom + '_uccorporate_CmpLookup__hiddenText').value = input.COMPANY_NAME;
            document.getElementById('' + ctrlcom + '_uccorporate_CmpLookup__hiddenID').value = input.COMPANY_ID;
            document.getElementById('' + ctrlcom + '_hdnCompnyId').value = input.COMPANY_ID;
            document.getElementById('' + ctrlcom + '_uccorporate_EmployerInfo1_uctpa__hiddenID').value = input.COMPANY_ID;
            document.getElementById('' + ctrlcom + '_hdnCompnyName').value = input.COMPANY_NAME;
            document.getElementById('' + ctrlcom + '_hdnisletReq').value = input.IS_LETTER_REQUIRED;
            document.getElementById('' + ctrlcom + '_uccorporate_hdnrefletterreq').value = input.IS_LETTER_REQUIRED;
            document.getElementById('' + ctrlcom + '_uccorporate_hdnOrgPer').value = input.ORG_PERCENT;
            document.getElementById('' + ctrlcom + '_hdnNoOfConsValidDays').value = input.VAL_NO_OF_CONSULTATIONS;
            document.getElementById('' + ctrlcom + '_uccorporate_hdnEmpPer').value = input.EMP_PERCENT;
            document.getElementById('' + ctrlcom + '_hdnOrgPer').value = input.ORG_PERCENT;
            document.getElementById('' + ctrlcom + '_hdnEmpPer').value = input.EMP_PERCENT;
            if (document.getElementById('' + ctrlcom + '_uccorporate_hdnDocName').value == 'ADMN') {
                document.getElementById('' + ctrlcom + '_uccorporate_hdnCompanyOrgpercent').value = input.IP_ORG_PERCENT;
                document.getElementById('' + ctrlcom + '_uccorporate_hdnEmployeOrgpercent').value = input.IP_EMP_PERCENT;
            } else {
                document.getElementById('' + ctrlcom + '_uccorporate_hdnCompanyOrgpercent').value = input.ORG_PERCENT;
                document.getElementById('' + ctrlcom + '_uccorporate_hdnEmployeOrgpercent').value = input.EMP_PERCENT;
            }


            document.getElementById('' + ctrlcom + '_hdnrefvaliddays').value = input.VAL_NO_OF_DAYS;
            if (input.IS_LETTER_REQUIRED == "Y") { document.getElementById('' + ctrlcom + '_uccorporate_chkRefLetReq').checked = true; }
            else {
                document.getElementById('' + ctrlcom + '_uccorporate_chkRefLetReq').checked = false;
                document.getElementById('' + ctrlcom + '_uccorporate_chkRefLetReq').disabled = true;
            }
            cmpnyid = parseInt(input.COMPANY_ID);
            document.getElementById('' + ctrlcom + '_umrPatientDetails_lblpattype').innerHTML = 'Corporate';
            document.getElementById('' + ctrlcom + '_umrPatientDetails_lblcmpname').innerHTML = input.COMPANY_NAME;
            document.getElementById('' + ctrlcom + '_uccorporate_hdncmpcreditamt').value = parseInt(cmpcredit);
            if (document.getElementById('' + ctrlcom + '_uccorporate_CmpLookup_txtSearchControl').value != '') {
                $('#' + ctrlcom + '_uccorporate_CmpLookup_txtSearchControl').addClass('red');
            }
        }
        Getcmpdtls(umrno, cmpnyid);
        if (document.getElementById('' + ctrlcom + '_umrPatientDetails_hdnDocName').value != "ADMN" && document.getElementById('' + ctrlcom + '_umrPatientDetails_hdnDocName').value != "BillConvertion") {
            DivCorpColors.style.display = "block";
            GetAsync(
                    "PatientRegistration.asmx/GetCompanyReceiptInfoByID",
                    { CompanyId: cmpnyid, patient_class_id: parseInt("2") },
                    function (jdata) {
                        if (jdata != null) {
                            document.getElementById('' + ctrlcom + '_UCServices_lblpri1').innerText = '';
                            document.getElementById('' + ctrlcom + '_UCServices_lblpri2').innerText = '';
                            document.getElementById('' + ctrlcom + '_UCServices_lblpri3').innerText = '';
                            document.getElementById('' + ctrlcom + '_UCServices_lblpri4').innerText = '';
                            document.getElementById('' + ctrlcom + '_UCServices_HdnPri1').value = '0';
                            document.getElementById('' + ctrlcom + '_UCServices_HdnPri2').value = '0';
                            document.getElementById('' + ctrlcom + '_UCServices_HdnPri3').value = '0';
                            document.getElementById('' + ctrlcom + '_UCServices_HdnPri4').value = '0';
                            document.getElementById('' + ctrlcom + '_UCServices_HdnPriC1').value = '';
                            document.getElementById('' + ctrlcom + '_UCServices_HdnPriC2').value = '';
                            document.getElementById('' + ctrlcom + '_UCServices_HdnPriC3').value = '';
                            document.getElementById('' + ctrlcom + '_UCServices_HdnPriC4').value = '';
                            if (jdata.d.length > 0) {
                                oncorpsuccess(jdata.d);
                                document.getElementById('' + ctrlcom + '_uccorporate_hdnCorpColors').value = '1';
                            }
                        }
                    },
                    function (jqXHR, textStatus, errorThrown) {
                    });
            GetCompanyPerc(cmpnyid);
        }
        if (document.getElementById('' + ctrlcom + '_umrPatientDetails_hdnDocName').value == 'Cons') {
            var docid = document.getElementById('' + ctrlcom + '_uccorporate_hdnarrdocid').value;
            var doctname = document.getElementById('' + ctrlcom + '_uccorporate_hdnarrdocname').value;
            var doctorcd = document.getElementById('' + ctrlcom + '_uccorporate_hdnarrdoctcd').value;
            var deptid = document.getElementById('' + ctrlcom + '_uccorporate_hdnarrdeptid').value;
            var docdeptname = document.getElementById('' + ctrlcom + '_uccorporate_hdnarrdeptname').value;
            document.getElementById('' + ctrlcom + '_uccorporate_hbncondisamount').value = input.CONSULTATION_DISC_PER;
            AssignConsultantDoctor(docid, doctname, doctorcd, deptid, docdeptname);


            var discount_pnt = document.getElementById('' + ctrlcom + '_uccorporate_hbncondisamount').value;
            if (discount_pnt == null || discount_pnt == '' || discount_pnt == undefined)
            { discount_pnt = 0; }
            if (parseFloat(discount_pnt) > 0) {

                if (parseFloat(discount_pnt) > 0) {
                    $("table[id*=UCServices_gvServices] tr:has(td)").each(function (e) {
                        var gvServices = document.getElementById('' + ctrlcom + '_UCServices_gvServices');
                        var rowIndex = gvServices.rows.length;
                        checkRowIndex = rowIndex - 1;
                        $('[id$=UCServices_gvServices] tr').filter(':eq(' + checkRowIndex + ')').find('input[type=text][id*=txtDiscP]').val(discount_pnt);

                        var SrvName = $('[id$=UCServices_gvServices] tr').filter(':eq(' + checkRowIndex + ')').find('[id*=txtServiceName]').val();
                        if (SrvName != 'REGISTRATION') {

                            var emp_pcnt = $('#' + ctrlcom + '_txtEmpPercentage').val();
                            var org_pcnt = $('#' + ctrlcom + '_txtCorpPercentage').val();
                            var price = $('[id$=UCServices_gvServices] tr').filter(':eq(' + checkRowIndex + ')').find('input[type=text][id*=txtAmount]').val();
                            if (emp_pcnt == undefined || emp_pcnt == null || emp_pcnt == '') { emp_pcnt = 0; }
                            if (org_pcnt == undefined || org_pcnt == null || org_pcnt == '') { org_pcnt = 0; }
                            var pAmt = Math.round((parseFloat(price) * parseFloat(emp_pcnt)) / 100);
                            if (pAmt == undefined || pAmt == null || pAmt == '') { pAmt = 0; }
                            var PconAmt = 0;
                            PconAmt = Math.round((parseFloat(pAmt) * parseFloat(discount_pnt)) / parseFloat(100));

                            var tamt = Math.round((parseFloat(price) * (parseFloat(discount_pnt))) / parseFloat(100));
                            var eamt = Math.round((parseFloat(pAmt) * (parseFloat(discount_pnt))) / parseFloat(100));
                            var camt = Math.round((parseFloat(Math.round((parseFloat(price) * parseFloat(org_pcnt)) / 100)) * (parseFloat(discount_pnt))) / parseFloat(100));
                            var tecamt = parseFloat(eamt) + parseFloat(camt);
                            if (tamt != tecamt) {
                                if (parseFloat(tamt) > tecamt) {
                                    var dispamt = parseFloat(tamt) - parseFloat(tecamt);

                                    PconAmt = parseFloat(PconAmt) + parseFloat(dispamt);
                                }
                                else if (tecamt > tamt) {
                                    var dispamt = parseFloat(tecamt) - parseFloat(tamt);

                                    PconAmt = parseFloat(PconAmt) - parseFloat(dispamt);

                                }


                            }
                            $('[id$=UCServices_gvServices] tr').filter(':eq(' + checkRowIndex + ')').find('[id*=hdnCmpDiscPcnt]').val(discount_pnt);
                            $('[id$=UCServices_gvServices] tr').filter(':eq(' + checkRowIndex + ')').find('input[type=text][id*=txtPamt]').val(pAmt);
                            $('[id$=UCServices_gvServices] tr').filter(':eq(' + checkRowIndex + ')').find('input[type=text][id*=txtDiscAmt]').val(PconAmt);
                            $('[id$=UCServices_gvServices] tr').filter(':eq(' + checkRowIndex + ')').find('[id*=hdnCmpDiscPcnt]').val(discount_pnt);
                            var pNetAmt = parseFloat(pAmt) - parseFloat(PconAmt);
                            pNetAmt = pNetAmt > 0 ? pNetAmt : 0;
                            $('[id$=UCServices_gvServices] tr').filter(':eq(' + checkRowIndex + ')').find('input[type=text][id*=txtPNAmt]').val(pNetAmt);
                            //                    $('[id$=UCServices_gvServices] tr').filter(':eq(' + checkRowIndex + ')').find('input[type=text][id*=txtDiscP]')[0].disabled = false;
                            //                    $('[id$=UCServices_gvServices] tr').filter(':eq(' + checkRowIndex + ')').find('input[type=text][id*=txtDiscAmt]')[0].disabled = false;

                            $(".col-hide tr:nth-child(3),.col-hide tr:nth-child(4),.col-hide tr:nth-child(5),.col-hide tr:nth-child(6),.col-hide tr:nth-child(7),.col-hide tr:nth-child(8),.col-hide tr:nth-child(10),.col-hide tr:nth-child(13),.col-hide tr:nth-child(14),.col-hide tr:nth-child(15)").show();
                            $("#payitem2,._quick-div").show();
                            $("._mdisc").css('width', '72%');
                            $("#payitem1,#payitem3").hide();
                            $('[id*=ConcessionAmt]')[0].style.display = 'none';
                            $("#lbladvanced").addClass("select");
                            $("#lblquick").removeClass("select");


                            //                                var index_data = document.getElementById('' + ctrlcom + '_UCServices_gvServices').rows.length;
                            //                                index_data = index_data - 1;
                            CalculateGridAmt(0);
                        }
                    });
                }
            }

            var len = $('#tbl_tbl_PatRequisitions tbody').length;

            $("table[id*=tbl_tbl_PatRequisitions] tr:has(td)").each(function (e) {
                for (var i = 0; i < len; i++) {
                    var datakey = $('[id*=tbl_tbl_PatRequisitions] tbody tr').filter(':eq(' + i + ')').attr('data-key')
                    if (datakey == docid) {
                        var j = i;
                        $($("table[id$=tbl_tbl_PatRequisitions] tr input[type=checkbox]")[j + 1]).attr("Checked", "true")
                    }
                }
            });
        }
        RefLetterReq();
        var Refletterreq = document.getElementById('' + ctrlcom + '_uccorporate_chkRefLetReq').checked;
        //        if (Refletterreq == true) { $('#'+ ctrlcom + '_uccorporate_ucRefLetterNo_txtSearchControl').addClass('red'); }
        //        else { $('#'+ ctrlcom + '_uccorporate_ucRefLetterNo_txtSearchControl').removeClass('red'); }
        var cmp_id = document.getElementById('' + ctrlcom + '_uccorporate_CmpLookup__hiddenID').value;
        Referalletter_precondition(umrno, cmp_id);
        var form_n = $('#' + ctrlcom + '_umrPatientDetails_hdnDocName').val();
        if (form_n == 'OP' || form_n == 'Cons') {
            var pat_type = $('#' + ctrlcom + '_umrPatientDetails_hdnpatient_type').val();
            if (pat_type == '2') {
                document.getElementById('' + ctrlcom + '_uccorporate_lblmdcrdnm').innerHTML = 'Medical Card #';
            }
            else if (pat_type == '5') {
                document.getElementById('' + ctrlcom + '_uccorporate_lblmdcrdnm').innerHTML = 'Policy#';
            }
            else if (pat_type == '8') {
                document.getElementById('' + ctrlcom + '_uccorporate_lblmdcrdnm').innerHTML = 'WAP#';
            }
            else {
                document.getElementById('' + ctrlcom + '_uccorporate_lblmdcrdnm').innerHTML = 'Medical Card #';
            }
        }
        GetAsync("Private/FrontOffice/OpBilling/OpConsultation1.aspx/onrefauto", { umrno: umrno }, function () { }, function (jqXHR, textStatus, errorThrown) { });
        ClearRefLetterFields();
        if (document.getElementById('' + ctrlcom + '_uccorporate_hdnDocName').value == "OPQUICK") {
            if (document.getElementById('' + ctrlcom + '_uccorporate_CmpLookup__hiddenText').value != "") { $('#' + ctrlcom + '_uccorporate_CmpLookup_txtSearchControl').removeClass('red'); }
            if (tpalookup == "N") {
                if (document.getElementById('' + ctrlcom + '_UCServices_hdnallowconsservice').value.toUpperCase() == "TRUE") {
                    AllowAdminCharges();
                }
            }
        }
        if (document.getElementById('' + ctrlcom + '_uccorporate_hdnDocName').value == "ADMN") {
            BindcompanyTariffID(cmpnyid);
        }
        var patID = document.getElementById('' + ctrlcom + '_umrPatientDetails_hdnPatientid').value;
        var pettypeval = document.getElementById('' + ctrlcom + '_uccorporate_ddlpatcreditype').value;
        document.getElementById('ctl00_ContentPlaceHolder1_uccorporate_CmpLookup_hdn_preCond').value = pettypeval + "^" + "PATIENTCMP^" + patID;
    }

    function Getcmpdtls(umrno, cmpnyid) {
        GetNonAsync(
                    "PatientRegistration.asmx/Get_Patient_Comp_Details",
                    { umrNO: umrno, flag: 0, cmpnyid: cmpnyid },
                    function (jdata) {
                        OnCmpInfoSuccess(jdata.d);
                    },
                    function (jqXHR, textStatus, errorThrown) {
                        $(".stoast").toastText("warning", errorThrown, 5, 3);
                    });

    }

    function OnCmpInfoSuccess(result) {
        if (result.length > 0) {
            if (document.getElementById('' + ctrlcom + '_umrPatientDetails_hdnDocName').value != "ADMN" && document.getElementById('' + ctrlcom + '_uccorporate_hdnDocName').value != 'BillConvertion') {
                document.getElementById('' + ctrlcom + '_hdnCmpColor').value = result[0]["COLOUR_ID"];
                document.getElementById('' + ctrlcom + '_hdnCmpConsTariffId').value = result[0]["CONS_TARIFF_ID"];
                document.getElementById('' + ctrlcom + '_hdncmpnoofcon').value = result[0].VALNOOF_CON;
                document.getElementById('' + ctrlcom + '_hdnConsTariffID').value = result[0].CONS_TARIFF_ID;
            }
            document.getElementById('' + ctrlcom + '_hdnNoOfValidConsults').value = result[0]["VAL_NO_OF_CONSULTATIONS"];
            document.getElementById('' + ctrlcom + '_uccorporate_txtMedcard').value = result[0]["CARD_NO"];
            document.getElementById('' + ctrlcom + '_uccorporate_txtEmpCd').value = result[0]["EMPLOYEE_ID"];
            document.getElementById('' + ctrlcom + '_uccorporate_txtEmpName').value = result[0]["EmployeeName"];
            document.getElementById('' + ctrlcom + '_uccorporate_hdnEmppatTypeid').value = result[0]["EMP_COVERAGE_ID"];
            document.getElementById('' + ctrlcom + '_hdnisletReq').value = result[0].IS_LETTER_REQUIRED;
            var umrno = document.getElementById('' + ctrlcom + '_umrPatientDetails_Umrlookup_txtSearchControl').value;
            var companyid = document.getElementById('' + ctrlcom + '_uccorporate_CmpLookup__hiddenID').value;
            if (document.getElementById('' + ctrlcom + '_umrPatientDetails_hdnDocName').value == "ADMN") {
                Referalletter_precondition_admn(umrno, companyid);
            } else {
                Referalletter_precondition(umrno, companyid);
            }

        }
    }

    function Referalletter_precondition_admn(umrno, companyid) {
        var PatientID = document.getElementById('' + ctrlcom + '_umrPatientDetails_hdnPatientid').value;
        var ddlpkgtypeid = "0"; var tariffid = 1;
        //        GetAsync(
        //                                                "Private/FrontOffice/Daycare/AddNewAdmission.aspx/RefLetter_Precondition",
        //                                                { PatientId: PatientID, Umr_No: umrno, Company_ID: companyid, tfid: tariffid, pkgid: ddlpkgtypeid},
        //                                                function (JData) {
        //                                                },
        //                                                function (jqXHR, textStatus, errorThrown) {
        //                                                });

        document.getElementById('ctl00_ContentPlaceHolder1_uccorporate_CmpLookup_hdn_preCond').value = "0^" + "PATIENTCMP^" + PatientID + "^0";
        document.getElementById('ctl00_ContentPlaceHolder1_uccorporate_ucRefLetterNo_hdn_preCond').value = "^^^^" + companyid + "^" + umrno + "^" + "^1^";
        document.getElementById('ctl00_ContentPlaceHolder1_uccorporate_CmpLookup_hdn_preCond').value = tariffid + "^" + ddlpkgtypeid + "^0";

    }
    function GetCompanyPerc(cmpnyid) {
        GetNonAsync(
                    "PatientRegistration.asmx/GetCompanyReceiptInfoByID",
                    { CompanyId: cmpnyid, patient_class_id: parseInt("2") },
                    function (jdata) {
                        if (jdata != null) {
                            if (jdata.d.length > 0) {
                                oncorpsuccess(jdata.d);
                            }
                        }
                    },
                    function () {
                    });
    }


    function OnRefLtSelection(data) {
        if (document.getElementById('' + ctrlcom + '_uccorporate_hdnDocName').value == "ADMN") {
            $("table[id*=gvServices] tr:has(td)").each(function (e) {
                var srv_name = $(this).closest('tr').find('input[type=text][id*=txtServiceName]').val();
                var _srvId = $(this).closest('tr').find("input[type=hidden][id*=hdnServiceID]").val();
                var _doctor_id = $(this).closest('tr').find("input[type=hidden][id*=hdnDoctorID]").val();
                var _srv_class_id = $(this).closest('tr').find('input[type=hidden][id*=hdnServiceClass]').val();
                RemoveGridViewService(e, 'I');
            });
        } else {
           // DelateAllGridData();
        }
        if (data["CMPNY_REFERAL_LETTER_ID"] == undefined) {
            var _d = data.RESULT;
            _d = _d;
            var result = CompareDates(new Date(_d.REFERAL_VALIDITY_DT).format('dd-MMM-yyyy'), new Date().format('dd-MMM-yyyy'));
            if (_d.REFRL_LTR_DONE == 'Y') {
                $(".stoast").toastText("warning", "Already this letter is used Previos bills", 5, 3);
                document.getElementById('' + ctrlcom + '_uccorporate_ucRefLetterNo_txtSearchControl').value = '';
                document.getElementById('' + ctrlcom + '_uccorporate_ucRefLetterNo__hiddenID').value = 0;
                document.getElementById('' + ctrlcom + '_uccorporate_ucRefLetterNo__hiddenText').value = '';
                return false;
            }
            if (_d.STMNT_DONE == 'Y') {
                $(".stoast").toastText("warning", "Corporate Statement done for this letter", 5, 3);
                document.getElementById('' + ctrlcom + '_uccorporate_ucRefLetterNo_txtSearchControl').value = '';
                document.getElementById('' + ctrlcom + '_uccorporate_ucRefLetterNo__hiddenID').value = 0;
                document.getElementById('' + ctrlcom + '_uccorporate_ucRefLetterNo__hiddenText').value = '';
                return false;
            }
            if (result == "d1<d2") {
                $(".stoast").toastText("warning", "Your Referral Letter validity is over", 5, 3);
                return false;
            } else {
                document.getElementById('' + ctrlcom + '_uccorporate_ucRefLetterNo_txtSearchControl').value = data._lktext;
                document.getElementById('' + ctrlcom + '_uccorporate_ucRefLetterNo__hiddenID').value = _d.CMPNY_REFERAL_LETTER_ID;
                document.getElementById('' + ctrlcom + '_uccorporate_ucRefLetterNo__hiddenText').value = data._lktext;
                document.getElementById('' + ctrlcom + '_uccorporate_txtRefLetIssueDt').value = new Date(_d.REFERAL_ISSUE_DT).format('dd-MMM-yyyy');
                $('#' + ctrlcom + '_uccorporate_txtRefLetValidDt').val(new Date(_d.REFERAL_VALIDITY_DT).format('dd-MMM-yyyy'));
                document.getElementById('' + ctrlcom + '_uccorporate_txtRefLetIssuedby').value = _d.LETTER_ISSUED_BY_ID;
                document.getElementById('' + ctrlcom + '_uccorporate_hdnlimitpost').value = _d.CREDIT_LIMIT_STATUS;
                if (_d.CREDIT_LIMIT_AMT == null || _d.CREDIT_LIMIT_AMT == undefined || _d.CREDIT_LIMIT_AMT == "0")
                    document.getElementById('' + ctrlcom + '_uccorporate_txtcreditlimitamt').value = "";
                else
                    document.getElementById('' + ctrlcom + '_uccorporate_txtcreditlimitamt').value = _d.CREDIT_LIMIT_AMT;

                if (_d.TOTAL_CREDIT_LIMIT_AMT == null || _d.TOTAL_CREDIT_LIMIT_AMT == undefined || _d.TOTAL_CREDIT_LIMIT_AMT == "0")
                    document.getElementById('' + ctrlcom + '_uccorporate_txtcmpcreditop').value = _d.CREDIT_LIMIT_AMT;
                else
                    document.getElementById('' + ctrlcom + '_uccorporate_txtcmpcreditop').value = _d.TOTAL_CREDIT_LIMIT_AMT;
                if (_d.IS_CREDIT_LIMIT_UNLIMITED == "Y") {
                    tdchkCreditunLImit.style.display = "block"
                    document.getElementById('' + ctrlcom + '_uccorporate_chkCreditunLImit').checked = true;
                } else {
                    tdchkCreditunLImit.style.display = "none";
                    document.getElementById('' + ctrlcom + '_uccorporate_chkCreditunLImit').checked = false;
                }
            }
            document.getElementById('' + ctrlcom + '_uccorporate_txtcreditremarks').value = _d.REMARKS
            AssignEmpOrgPercentage(_d);
            $('#' + ctrlcom + '_txtCorpPayAmt').val('0');
            $('#' + ctrlcom + '_txtCorpDueAmt').val('0');
            $('#' + ctrlcom + '_txtEmpPayAmt').val('0');
            $('#' + ctrlcom + '_txtOrgTaxAmt').val('0');
            $('#' + ctrlcom + '_txtEmpTaxAmt').val('0');
        } else {
            var result = CompareDates(new Date(data.REFERRAL_VALIDITY_DT).format('dd-MMM-yyyy'), new Date().format('dd-MMM-yyyy'));
            if (data.REFRL_LTR_DONE == 'Y') {
                $(".stoast").toastText("warning", "Already this letter is used Previos bills", 5, 3);
                return false;
            }
            if (data.STMNT_DONE == 'Y') {
                $(".stoast").toastText("warning", "Corporate Statement done for this letter", 5, 3);
                return false;
            }
            if (result == "d1<d2") {
                $(".stoast").toastText("warning", "Your Referral Letter validity is over", 5, 3);
                return false;
            } else {
                document.getElementById('' + ctrlcom + '_uccorporate_ucRefLetterNo_txtSearchControl').value = data._lktext;
                document.getElementById('' + ctrlcom + '_uccorporate_ucRefLetterNo__hiddenID').value = data.CMPNY_REFERAL_LETTER_ID;
                document.getElementById('' + ctrlcom + '_uccorporate_ucRefLetterNo__hiddenText').value = data._lktext;
                document.getElementById('' + ctrlcom + '_uccorporate_txtRefLetIssueDt').value = new Date(data.REFERRAL_LETTER_ISSUE_DT).format('dd-MMM-yyyy');
                $('#' + ctrlcom + '_uccorporate_txtRefLetValidDt').val(new Date(data.REFERRAL_VALIDITY_DT).format('dd-MMM-yyyy'));
                document.getElementById('' + ctrlcom + '_uccorporate_txtRefLetIssuedby').value = data.LETTER_ISSUED_BY;
                document.getElementById('' + ctrlcom + '_uccorporate_txtcreditlimitamt').value = data.CREDIT_LIMIT_AMT;
                document.getElementById('' + ctrlcom + '_uccorporate_txtcmpcreditop').value = data.TOTAL_CREDIT_LIMIT_AMT;
                document.getElementById('' + ctrlcom + '_uccorporate_hdnlimitpost').value = data.CREDIT_LIMIT_STATUS;
                document.getElementById('' + ctrlcom + '_uccorporate_txtcreditremarks').value = data.REMARKS
                if (data.IS_CREDIT_LIMIT_UNLIMITED == "Y") {
                    tdchkCreditunLImit.style.display = "block"
                    document.getElementById('' + ctrlcom + '_uccorporate_chkCreditunLImit').checked = true;
                } else {
                    tdchkCreditunLImit.style.display = "none";
                    document.getElementById('' + ctrlcom + '_uccorporate_chkCreditunLImit').checked = false;
                }
                if (document.getElementById('' + ctrlcom + '_uccorporate_hdnDocName').value != 'ADMN') {
                    AssignEmpOrgPercentage(data);
                }
                $('#' + ctrlcom + '_txtCorpPayAmt').val('0');
                $('#' + ctrlcom + '_txtCorpDueAmt').val('0');
                $('#' + ctrlcom + '_txtEmpPayAmt').val('0');
                $('#' + ctrlcom + '_txtOrgTaxAmt').val('0');
                $('#' + ctrlcom + '_txtEmpTaxAmt').val('0');
            }
        }
        if (document.getElementById('' + ctrlcom + '_uccorporate_hdnDocName').value != 'ADMN' && document.getElementById('' + ctrlcom + '_uccorporate_hdnDocName').value != 'BillConvertion') {
            ServicesAutoContextKey();
        }
        if (document.getElementById('' + ctrlcom + '_uccorporate_ucRefLetterNo_txtSearchControl').value != '') {
            $('#' + ctrlcom + '_uccorporate_ucRefLetterNo_txtSearchControl').addClass('red');
        }
        $('#' + ctrlcom + '_uccorporate_ucRefLetterNo_txtSearchControl').removeClass('red');
    }

    function RefLetPopup() {

        clearRefPopupvalues();
        var CompanyOrgpercent = document.getElementById('' + ctrlcom + '_uccorporate_hdnCompanyOrgpercent').value;
        var EmployeOrgpercent = document.getElementById('' + ctrlcom + '_uccorporate_hdnEmployeOrgpercent').value;
        if (CompanyOrgpercent == undefined || CompanyOrgpercent == null || CompanyOrgpercent == NaN) { CompanyOrgpercent = 0; }
        if (EmployeOrgpercent == undefined || EmployeOrgpercent == null || EmployeOrgpercent == NaN) { EmployeOrgpercent = 0; }

        document.getElementById('' + ctrlcom + '_uccorporate_txtorgletterperletter').value = CompanyOrgpercent;
        document.getElementById('' + ctrlcom + '_uccorporate_txtempletterperletter').value = EmployeOrgpercent;

        if (document.getElementById('' + ctrlcom + '_uccorporate_hdnDocName').value == 'ADMN') {
            document.getElementById('' + ctrlcom + '_uccorporate_txtvldfr')[1].selected = true;
            // divOPValid[0].style.display="none";
            tropvalid.style.display = 'none';
        }
        var cmpname = document.getElementById('' + ctrlcom + '_uccorporate_CmpLookup_txtSearchControl').value;
        if (cmpname == "" || cmpname == undefined || cmpname == null) { cmpname = document.getElementById('' + ctrlcom + '_uccorporate_allcmplookup_txtSearchControl').value; }
        if (cmpname == "") {
            $(".stoast").toastText("warning", "Please Select Company Name", 5, 3);
            document.getElementById('' + ctrlcom + '_uccorporate_CmpLookup_txtSearchControl').focus();
            return false;
        }
        if ((document.getElementById('' + ctrlcom + '_uccorporate_EmployerInfo1_hdncmpquick').value == 'Y' && document.getElementById('' + ctrlcom + '_uccorporate_hdnQucikRefltr').value == 'Y') || document.getElementById('' + ctrlcom + '_uccorporate_hdnDocName').value == 'ADMN') {
            $("#div1").show();
            document.getElementById('' + ctrlcom + '_uccorporate_txtrefissuedat').value = new Date().format('dd-MMM-yyyy');
            var duration = document.getElementById('' + ctrlcom + '_hdnNoOfConsValidDays').value;
            if (duration > 0) { duration = duration - 1; }
            var date = new Date(new Date().getTime() + (duration) * 24 * 60 * 60 * 1000).format('dd-MMM-yyyy');
            $('#' + ctrlcom + '_uccorporate_txtlettervalid').val(date);
            //document.getElementById('' + ctrlcom + '_uccorporate_txtrefletter').style.border = '1px solid rgb(244,120,94)';
            $('#' + ctrlcom + '_uccorporate_txtrefletter').addClass('red');
            var Client_Name = document.getElementById('' + ctrlcom + '_uccorporate_hdnClientName').value;
            if (Client_Name != 'YASHODA') {
                $('#' + ctrlcom + '_uccorporate_txtissuedby').addClass('red');
            }
            var cmpcredit = document.getElementById('' + ctrlcom + '_uccorporate_hdncmpcreditamt').value;
            if (cmpcredit == "" || cmpcredit == null || cmpcredit == undefined) { cmpcredit = "0"; }
            document.getElementById('' + ctrlcom + '_uccorporate_txtcreditlimit').value = cmpcredit;
        }
        else {
            $(".stoast").toastText("warning", "You dont have permission to Quick Add", 5, 3);
            return false;
        }
        var dateformat = $('#' + ctrlcom + '_uccorporate_EmployerInfo1_hdndateformat').val();
        var split = dateformat.split(' ');
        var current_format = split[0];
        $('[id*=txtrefissuedat]').datepicker({
            changeMonth: true,
            changeYear: true,
            maxDate: new Date,
            dateFormat: current_format,
            onSelect: function () {
                chkcmprefissuedt(this);
            }
        });
        $('[id*=txtlettervalid]').datepicker({
            changeMonth: true,
            changeYear: true,
            minDate: new Date,
            dateFormat: current_format,
            onSelect: function () {
                lettervalidation(this);
            }
        });
        return false;
    }
    function lettervalidation(obj) {
        var Client_Name = document.getElementById('' + ctrlcom + '_uccorporate_hdnClientName').value;
        if (Client_Name != 'YASHODA') {
            if (obj.value != '') {
                document.getElementById('' + ctrlcom + '_uccorporate_txtlettervalid').style.border = '1px solid rgb(190,190,190)';
            }
            var date = document.getElementById('' + ctrlcom + '_uccorporate_txtlettervalid').value;
            var today = new Date().format('dd-MMM-yyyy');
            var Result = CompareDate(date, today);
            if (Result == 'd1<d2') {
                $(".stoast").toastText("warning", "Letter validity should not be less than Today date", 5, 3);
                document.getElementById('' + ctrlcom + '_uccorporate_txtlettervalid').value = new Date().format('dd-MMM-yyyy');
            }
        }
    }
    function chkcmprefissuedt(obj) {
        var Client_Name = document.getElementById('' + ctrlcom + '_uccorporate_hdnClientName').value;
        if (Client_Name != 'YASHODA') {
            if (obj.value != '') {
                document.getElementById('' + ctrlcom + '_uccorporate_txtrefissuedat').style.border = '1px solid rgb(190,190,190)';
            }
        }
    }
    function ChangePatientType() {
        _xmlCorpRef = '';
        _xmlCorpReg = '';
        document.getElementById('' + ctrlcom + '_uccorporate_hdnDocName').value = document.getElementById('' + ctrlcom + '_umrPatientDetails_hdnDocName').value;
        if (document.getElementById('' + ctrlcom + '_uccorporate_hdnDocName').value != 'ADMN' && document.getElementById('' + ctrlcom + '_uccorporate_hdnDocName').value != 'BillConvertion') {
            document.getElementById('' + ctrlcom + '_uccorporate_hdnCorpColors').value = '';
            document.getElementById('' + ctrlcom + '_UCServices_divrptDispatch').style.border = '1px solid #b6b6b6';
            document.getElementById('' + ctrlcom + '_UCServices_divrptDispatch').disabled = false;
        }
        var patid = document.getElementById('' + ctrlcom + '_umrPatientDetails_hdnPatientid').value;
        var Pat_type = document.getElementById('' + ctrlcom + '_uccorporate_ddlPaymentBy').value;
        var form_name = document.getElementById('' + ctrlcom + '_umrPatientDetails_hdnDocName').value;
        var reg_pat_type_id = $('#' + ctrlcom + '_umrPatientDetails_hdnpatient_type').val();
        if (reg_pat_type_id == null || reg_pat_type_id == undefined || reg_pat_type_id == "") { reg_pat_type_id = "0"; }
        if (form_name == "OPQUICK") {
            if (Pat_type == '1') {
                if (document.getElementById('' + ctrlcom + '_UCServices_hdnallowconsservice').value.toUpperCase() == "TRUE") {
                    AllowAdminCharges();
                }
            }
        }
        if (form_name == 'OP' || form_name == 'Cons') {
            if ($('[id*=hdnisosp]').val() == "Y") {
                var pattype = document.getElementById('' + ctrlcom + '_uccorporate_ddlPaymentBy').value;
                if (pattype == 2) {
                    $(".stoast").toastText("warning", "OSP Patient Does not allow Corporate Registation!.", 5, 3);
                    document.getElementById('' + ctrlcom + '_uccorporate_ddlPaymentBy').value = 1;
                }
            }
        }


        if (form_name == 'OP' || form_name == 'Cons') {
            var dntclrgrid = $('#' + ctrlcom + '_hdndontclrgrid').val();
            if (Pat_type == '1' && dntclrgrid == '149')
            { }
            else {
                if (form_name != 'BillConvertion') {
                    Clear_color();
                    clearGridFields();
                    ClearClinicalSummary();
                    ClearTransactionUserControl();
                    ClearCmpDtls();
                    CompanyMandatoryColorsRemove();
                }
            }
        }
        GetAsync("Private/FrontOffice/OPDBILLNEW.aspx/onref", { patid: patid }, function () { }, function (jqXHR, textStatus, errorThrown) { });
        var pre_admn = '';
        if (document.getElementById('' + ctrlcom + '_uccorporate_hdnDocName').value == "ADMN") {
            pre_admn = document.getElementById('' + ctrlcom + '_umrPatientDetails_ucPreAdmUmr_txtSearchControl').value;
        }
        if (document.getElementById('' + ctrlcom + '_umrPatientDetails_Umrlookup_txtSearchControl').value == '' && pre_admn == '') {
            $(".stoast").toastText("warning", "Please select UMR#!.", 5, 3);
            document.getElementById('' + ctrlcom + '_uccorporate_ddlPaymentBy').value = "0";
            document.getElementById('' + ctrlcom + '_umrPatientDetails_Umrlookup_txtSearchControl').focus();
            return false;
        }
        else {
            if (Pat_type == '2') {
                if (form_name == 'OP' || form_name == 'Cons') {
                    Clear_color(); EnableCmpInfo(); CompanyMandatoryColorsApply();
                    //ClearTransactionUserControl();
                    document.getElementById('' + ctrlcom + '_UCServices_hdnCorpPat').value = 'Y';
                    document.getElementById('' + ctrlcom + '_UCServices_ddlPatientType').value = '2';
                    document.getElementById('' + ctrlcom + '_UCServices_divrptDispatch').disabled = false;
                    $('#' + ctrlcom + '_UCServices_divrptDispatch').val('2');
                    if (document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlDiscountType').disabled == true) {
                        document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlDiscountType').disabled = false;
                    }
                    if (document.getElementById('' + ctrlcom + '_ReceiptControl2_chkismultiple').disabled == true) {
                        document.getElementById('' + ctrlcom + '_ReceiptControl2_chkismultiple').disabled = false;
                    }


                    FirstRowShowCmpAmts();
                    document.getElementById('' + ctrlcom + '_umrPatientDetails_lblpattype').innerHTML = 'Corporate';
                    document.getElementById('' + ctrlcom + '_uccorporate_txtRefLetValidDt').disabled = true;
                    var umr_no = $('#' + ctrlcom + '_umrPatientDetails_Umrlookup_txtSearchControl').val();
                    var Cmpny_id = $('#' + ctrlcom + '_uccorporate_CmpLookup__hiddenID').val();
                    var Pat_id = document.getElementById('' + ctrlcom + '_umrPatientDetails_hdnPatientid').value;
                    Cmpny_id = Cmpny_id == '' ? '0' : Cmpny_id;
                    Company_precondition(Pat_id, umr_no, Cmpny_id);
                    var oldregtpaID = $('#' + ctrlcom + '_umrPatientDetails_hdnoldregtpaid').val();
                    if (oldregtpaID == null || oldregtpaID == "" || oldregtpaID == undefined) { oldregtpaID = ""; }
                    if (oldregtpaID == "") {
                        showCompPopup();
                    }
                    else {
                        $('#lk_btn_ctl00_contentplaceholder1_uccorporate_cmplookup').click();
                    }
                    $("table[id*=gvServices] tr:has(td)").each(function (e) {
                        var srv_name = $(this).closest('tr').find('input[type=text][id*=txtServiceName]').val();
                        var _srvId = $(this).closest('tr').find("input[type=hidden][id*=hdnServiceID]").val();
                        var _doctor_id = $(this).closest('tr').find("input[type=hidden][id*=hdnDoctorID]").val();
                        var _srv_class_id = $(this).closest('tr').find('input[type=hidden][id*=hdnServiceClass]').val();
                        var cls_srv_id = $(this).closest('tr').find('input[type=hidden][id*=hdnClass_Srv_ID]').val();
                        // $(this).closest('tr').find('input[type=text][id*=hdnClass_Srv_ID]').val();
                        // $(this).closest('tr').find('input[type=text][id*=hdnClass_Srv_ID]').val();

                        if (srv_name != "REGISTRATION" && (_srvId != 2 && cls_srv_id == 0)) {
                            OnRemoveConfirmation(this);

                        }

                    });

                }
                else if (form_name == 'ADMN' || form_name == 'BillConvertion') {
                    if (form_name == 'ADMN') {
                        var oldregtpaID = $('#' + ctrlcom + '_umrPatientDetails_hdnoldregtpaid').val();
                        EnableDisableCompanyInfoAdmn(false); divnonreglookup.style.display = 'none'; divreglookup.style.display = 'block';
                        $('#' + ctrlcom + '_uccorporate_ddlpatcreditype').addClass('red');
                        $('#' + ctrlcom + '_uccorporate_allcmplookup_txtSearchControl').addClass('red');
                        document.getElementById('' + ctrlcom + '_uccorporate_ddlpatcreditype').disabled = false;
                        var pat_typelookup = $('#' + ctrlcom + '_uccorporate_ddlPaymentBy').val();
                        var pat_type_id = pat_typelookup; // document.getElementById('' + ctrlcom + '_umrPatientDetails_hdnpatient_type').value;
                        //ddlchngcrtype();
                        if (pat_typelookup == '2') {
                            if (oldregtpaID > '0') {
                                pat_type_id_reg = document.getElementById('' + ctrlcom + '_umrPatientDetails_hdnpatient_type').value;
                                //document.getElementById('' + ctrlcom + '_uccorporate_ddlpatcreditype').value = pat_type_id;
                                if (pat_type_id_reg == "") { pat_type_id_reg = 0; }
                                document.getElementById('' + ctrlcom + '_uccorporate_ddlpatcreditype').value = pat_type_id_reg;

                                $('#' + ctrlcom + '_uccorporate_allcmplookup_txtSearchControl').addClass('red');
                                Company_precondition(patid, $('#' + ctrlcom + '_umrPatientDetails_Umrlookup_txtSearchControl').val(), "0");
                                divreglookup.style.display = 'block'; divnonreglookup.style.display = 'none';
                                document.getElementById('' + ctrlcom + '_uccorporate_CmpLookup_txtSearchControl').disabled = false;
                                document.getElementById('lk_btn_ctl00_ContentPlaceHolder1_uccorporate_CmpLookup').disabled = false;
                                //                                document.getElementById('' + ctrlcom + '_uccorporate_ucRefLetterNo_txtSearchControl').disabled = false;
                                //                               document.getElementById('lk_btn_ctl00_ContentPlaceHolder1_uccorporate_ucRefLetterNo').disabled = false;
                                ctl00_ContentPlaceHolder1_uccorporate_btnRefLetter.disabled = false;
                            }
                        }
                        $('#' + ctrlcom + '_hdnRefElWard').val(document.getElementById('' + ctrlcom + '_ucBedRoomWard_hdnwardgrpid').value);
                        $('#' + ctrlcom + '_uccorporate_hdnWargroupdId').val(document.getElementById('' + ctrlcom + '_ucBedRoomWard_hdnwardgrpid').value);
                        document.getElementById('lk_btn_ctl00_ContentPlaceHolder1_uccorporate_UCEligibleWard').disabled = true;
                    } else {
                        EnableDisableCompanyInfo(false);
                        document.getElementById('' + ctrlcom + '_uccorporate_ucRefLetterNo_txtSearchControl').style.border = ' ';
                    }
                    $('#' + ctrlcom + '_uccorporate_CmpLookup_txtSearchControl').addClass('red');
                    //document.getElementById('' + ctrlcom + '_uccorporate_UCEligibleWard_txtSearchControl').style.border = '1px solid rgb(244, 120, 94)';
                    document.getElementById('' + ctrlcom + '_umrPatientDetails_lblpattype').innerHTML = 'Corporate';
                    var PatientID = document.getElementById('' + ctrlcom + '_umrPatientDetails_hdnPatientid').value;
                    // GetAsync("Private/FrontOffice/DayCare/AddNewAdmission.aspx/Company_Precondition", { PatientId: PatientID }, function (JData) { }, function (jqXHR, textStatus, errorThrown) { });
                    document.getElementById('ctl00_ContentPlaceHolder1_uccorporate_CmpLookup_hdn_preCond').value = "0^" + "PATIENTCMP^" + PatientID + "^0";
                }
                if (document.getElementById('' + ctrlcom + '_uccorporate_ddlpatcreditype').value != "") {
                    ddlchngcrtype();
                }
            }
            else if (Pat_type == '0') {
                if (form_name == 'OP' || form_name == 'Cons') {


                    if (form_name == 'Cons') {
                        if ($('table[id*=UCServices_gvServices]').find("input[type=hidden][id*=hdnDoctorID]").val() > "0") {
                            $('table[id*=UCServices_gvServices] tr').remove();
                        }
                    }
                    Clear_color(); ClearCmpDtls(); DisableCmpInfo(); ClearTransactionUserControl();
                    DivCorpColors.style.display = "none";
                    $('#DivCorporate')[0].style.display = 'none';
                    CompanyMandatoryColorsRemove();
                    $('#' + ctrlcom + '_UCServices_divrptDispatch').val('0');
                }
                else if (form_name == 'ADMN' || form_name == 'BillConvertion') {
                    if (form_name == 'ADMN') {
                        EnableDisableCompanyInfoAdmn(true); clearnonreglookup(true); divnonreglookup.style.display = 'block'; divreglookup.style.display = 'none';
                        document.getElementById('' + ctrlcom + '_uccorporate_ddlpatcreditype').disabled = true;
                        document.getElementById('' + ctrlcom + '_uccorporate_ddlpatcreditype').value = "0";
                        document.getElementById('' + ctrlcom + '_umrPatientDetails_lblpattype').innerHTML = 'General';
                        document.getElementById('' + ctrlcom + '_uccorporate_allcmplookup_txtSearchControl').style.border = '1px solid rgb(190,190,190)';
                    }
                    else { EnableDisableCompanyInfo(true); }
                    CompanyMandatoryColorsRemove();
                    ClearCmpDtls();
                }
            }
            else {
                if (form_name == 'OP' || form_name == 'Cons') {
                    Clear_color();
                    DisableCmpInfo();
                    $('#' + ctrlcom + '_uccorporate_CmpLookup_txtSearchControl').removeClass('red');
                    $('#' + ctrlcom + '_uccorporate_ucRefLetterNo_txtSearchControl').removeClass('red');
                    ServicesAutoContextKey();
                    document.getElementById('' + ctrlcom + '_UCServices_hdnCorpPat').value = 'N';
                    document.getElementById('' + ctrlcom + '_UCServices_ddlPatientType').value = '1';
                    $('#banercolourcorp').css('background', '#' + "" + '');
                    FirstRowHideCmpAmts();
                    document.getElementById('' + ctrlcom + '_txtCorpPercentage').value = 0;
                    document.getElementById('' + ctrlcom + '_hdnOrgPer').value = 0;
                    document.getElementById('' + ctrlcom + '_txtEmpPercentage').value = 0;
                    document.getElementById('' + ctrlcom + '_hdnEmpPer').value = 0;
                    ClearCmpDtls();
                    $('#' + ctrlcom + '_UCServices_divrptDispatch').val('2');
                    document.getElementById('' + ctrlcom + '_UCServices_divrptDispatch').disabled = true;
                    $('#DivCorporate')[0].style.display = 'none'; DivCorpColors.style.display = "none";
                    if (form_name == 'Cons') {
                        if ($('table[id*=UCServices_gvServices]').find("input[type=hidden][id*=hdnDoctorID]").val() > "0") {
                            $('table[id*=UCServices_gvServices] tr').remove();
                            ClearTransactionUserControl();
                        }
                    }

                }
                else if (form_name == 'ADMN' || form_name == 'BillConvertion') {
                    if (form_name == 'ADMN') {
                        EnableDisableCompanyInfoAdmn(true); clearnonreglookup(true);
                        document.getElementById('' + ctrlcom + '_uccorporate_ddlpatcreditype').disabled = true;
                        document.getElementById('' + ctrlcom + '_uccorporate_ddlpatcreditype').value = "0";
                        document.getElementById('' + ctrlcom + '_uccorporate_allcmplookup_txtSearchControl').style.border = '1px solid rgb(190,190,190)';
                    }
                    else
                    { EnableDisableCompanyInfo(true); }
                    ClearCmpDtls();
                }
                document.getElementById('' + ctrlcom + '_umrPatientDetails_lblpattype').innerHTML = 'General';
                document.getElementById('' + ctrlcom + '_umrPatientDetails_lblcmpname').innerHTML = '';
                CompanyMandatoryColorsRemove();
            }
            if (form_name == 'OP' || form_name == 'Cons') {
                var docid = document.getElementById('' + ctrlcom + '_uccorporate_hdnarrdocid').value;
                var doctname = document.getElementById('' + ctrlcom + '_uccorporate_hdnarrdocname').value;
                var doctorcd = document.getElementById('' + ctrlcom + '_uccorporate_hdnarrdoctcd').value;
                var deptid = document.getElementById('' + ctrlcom + '_uccorporate_hdnarrdeptid').value;
                var docdeptname = document.getElementById('' + ctrlcom + '_uccorporate_hdnarrdeptname').value;
                clrpattariffcncpt_sh();
                AssignConsultantDoctor(docid, doctname, doctorcd, deptid, docdeptname);
            }


        }
        if (Pat_type > 0) {
            $('#' + ctrlcom + '_uccorporate_ddlPaymentBy').removeClass('red');
        }
        else {
            $('#' + ctrlcom + '_uccorporate_ddlPaymentBy').addClass('red');
        }
        if (form_name == "ADMN") {
            OnchangeStatus();
        }
        notapplicablevalidation();
        ctl00_ContentPlaceHolder1_uccorporate_CmpLookup_lbl_Title.innerText = 'Company'
        tdchkCreditunLImit.style.display = "none";
        if (form_name == "OP" || form_name == "Cons" || form_name == "OPQUICK") {
            if (Pat_type == '2') {
                clrpattariffcncpt_hd();
                ServicesAutoContextKey();
                //document.getElementById('' + ctrlcom + '_ReceiptControl2_txtcashAmt').value = 0;
            }
            else if (Pat_type == '1') {
                clrpattariffcncpt_sh();
                ServicesAutoContextKey();
                // $("#"+ ctrlcom + "_uccorporate_EmployerInfo1_uctpa__hiddenID").val(0);
                //document.getElementById('' + ctrlcom + '_ReceiptControl2_txtcashAmt').value = 0;
            }
        }

    }
    function clearnonreglookup(val) {
        document.getElementById('' + ctrlcom + '_uccorporate_allcmplookup_txtSearchControl').disabled = val;
        document.getElementById('lk_btn_ctl00_ContentPlaceHolder1_uccorporate_allcmplookup').disabled = val;
        document.getElementById('' + ctrlcom + '_uccorporate_allcmplookup_txtSearchControl').value = '';
        document.getElementById('' + ctrlcom + '_uccorporate_allcmplookup__hiddenID').value = 0;
        document.getElementById('' + ctrlcom + '_uccorporate_allcmplookup__hiddenText').value = '';
    }
    function EnableDisableCompanyInfo(val) {
        document.getElementById('' + ctrlcom + '_uccorporate_CmpLookup_txtSearchControl').disabled = val;
        document.getElementById('lk_btn_ctl00_ContentPlaceHolder1_uccorporate_CmpLookup').disabled = val;
        document.getElementById('' + ctrlcom + '_uccorporate_btnCmpReg').disabled = val;
        document.getElementById('' + ctrlcom + '_uccorporate_ucRefLetterNo_txtSearchControl').disabled = val;
        document.getElementById('lk_btn_ctl00_ContentPlaceHolder1_uccorporate_ucRefLetterNo').disabled = val;
        document.getElementById('' + ctrlcom + '_uccorporate_btnRefLetter').disabled = val;
        document.getElementById('' + ctrlcom + '_uccorporate_UCEligibleWard_txtSearchControl').disabled = true;
        document.getElementById('lk_btn_ctl00_ContentPlaceHolder1_uccorporate_UCEligibleWard').disabled = val;
        document.getElementById('' + ctrlcom + '_uccorporate_chkElWardNotApplbl').disabled = val;
    }
    function EnableDisableCompanyInfoAdmn(val) {
        var payment_type = document.getElementById('' + ctrlcom + '_uccorporate_ddlPaymentBy').value;
        if (payment_type == 1 || payment_type == 0)
            val = true;
        else
            val = false;
        document.getElementById('' + ctrlcom + '_uccorporate_CmpLookup_txtSearchControl').disabled = val;
        if (val) $('#' + ctrlcom + '_uccorporate_CmpLookup_txtSearchControl').removeClass();
        document.getElementById('lk_btn_ctl00_ContentPlaceHolder1_uccorporate_CmpLookup').disabled = val;
        document.getElementById('btncmpdtls').disabled = val;
        document.getElementById('' + ctrlcom + '_uccorporate_btnCmpReg').disabled = val;
        //document.getElementById('' + ctrlcom + '_uccorporate_ucRefLetterNo_txtSearchControl').disabled = val;
        //        document.getElementById('lk_btn_ctl00_ContentPlaceHolder1_uccorporate_ucRefLetterNo').disabled = val;
        //        document.getElementById('' + ctrlcom + '_uccorporate_btnRefLetter').disabled = val;
        //        document.getElementById('' + ctrlcom + '_uccorporate_UCEligibleWard_txtSearchControl').disabled = val;
        //        document.getElementById('lk_btn_ctl00_ContentPlaceHolder1_uccorporate_UCEligibleWard').disabled = val;
        //        document.getElementById('' + ctrlcom + '_uccorporate_chkElWardNotApplbl').disabled = val;
        //        document.getElementById('' + ctrlcom + '_uccorporate_chkRefLetReq').disabled = val;
    }
    function CompanyMandatoryColorsRemove() {
        if (document.getElementById('' + ctrlcom + '_umrPatientDetails_hdnDocName').value != 'ADMN') {
            if (document.getElementById('' + ctrlcom + '_uccorporate_ddlPaymentBy').value > "1") {
                $('#' + ctrlcom + '_uccorporate_CmpLookup_txtSearchControl').addClass('red');
            }
        }
        if ($('[id*=uccorporate_ddlPaymentBy]').val() == "1") {
            $('#' + ctrlcom + '_uccorporate_ddlpatcreditype').removeClass('red');
            $('#' + ctrlcom + '_uccorporate_allcmplookup_txtSearchControl').removeClass('red');
        }
        $('#' + ctrlcom + '_uccorporate_UCEligibleWard_txtSearchControl').removeClass('red');
    }
    function CompanyMandatoryColorsApply() {
        $('#' + ctrlcom + '_uccorporate_CmpLookup_txtSearchControl').addClass('red');
        $('#' + ctrlcom + '_uccorporate_ucRefLetterNo_txtSearchControl').addClass('red');
        $('#' + ctrlcom + '_UCServices_divrptDispatch').addClass('red');
    }

    function saveCompanyInfo() {
        document.getElementById('' + ctrlcom + '_uccorporate_CmpLookup__hiddenID').value = 0;
        document.getElementById('' + ctrlcom + '_uccorporate_ucRefLetterNo__hiddenID').value = 0;
        var Client_Name = document.getElementById('' + ctrlcom + '_uccorporate_hdnClientName').value;
        if (document.getElementById('' + ctrlcom + '_uccorporate_ddlpattyp').value == '' || document.getElementById('' + ctrlcom + '_uccorporate_ddlpattyp').value == '0') {
            $(".stoast").toastText("warning", "Please Select Patient Type", 5, 3);
            document.getElementById('' + ctrlcom + '_uccorporate_ddlpattyp').focus();
            return false;
        }
        if (document.getElementById('' + ctrlcom + '_uccorporate_EmployerInfo1_uctpa_txtSearchControl').value == '') {
            $(".stoast").toastText("warning", "Please Select Company/TPA Name", 5, 3);
            document.getElementById('' + ctrlcom + '_uccorporate_EmployerInfo1_uctpa_txtSearchControl').focus();
            return false;
        }
        if (Client_Name.trim() != 'YASHODA') {
            if (document.getElementById('' + ctrlcom + '_uccorporate_EmployerInfo1_ddlrelation').value == '--select--' || document.getElementById('' + ctrlcom + '_uccorporate_EmployerInfo1_ddlrelation').value == '0') {
                $(".stoast").toastText("warning", "Please Select Relationship to CardHolder", 5, 3);
                document.getElementById('' + ctrlcom + '_uccorporate_EmployerInfo1_ddlrelation').focus();
                return false;
            }
            if ($('#' + ctrlcom + '_uccorporate_ddlpattyp').val() != 8) {

            }
            if (document.getElementById('' + ctrlcom + '_uccorporate_EmployerInfo1_txtEmployeeName').value == '') {
                $(".stoast").toastText("warning", "Please Select Employee Name", 5, 3);
                document.getElementById('' + ctrlcom + '_uccorporate_EmployerInfo1_txtEmployeeName').focus();
                return false;
            }
            if ($('#' + ctrlcom + '_uccorporate_ddlpattyp').val() == 2 || $('#' + ctrlcom + '_uccorporate_ddlpattyp').val() == 9) {
                if (document.getElementById('' + ctrlcom + '_uccorporate_EmployerInfo1_txtEmpMRNo').value == '') {
                    $(".stoast").toastText("warning", "Please Select Medical Card No", 5, 3);
                    document.getElementById('' + ctrlcom + '_uccorporate_EmployerInfo1_txtEmpMRNo').focus();
                    return false;
                }
            }
            if ($('#' + ctrlcom + '_uccorporate_ddlpattyp').val() == 5) {
                if (document.getElementById('' + ctrlcom + '_uccorporate_EmployerInfo1_txtEmpMRNo').value == '') {
                    $(".stoast").toastText("warning", "Please Enter Policy#", 5, 3);
                    document.getElementById('' + ctrlcom + '_uccorporate_EmployerInfo1_txtEmpMRNo').focus();
                    return false;
                }
            }
            if ($('#' + ctrlcom + '_uccorporate_ddlpattyp').val() == 8) {
                if (document.getElementById('' + ctrlcom + '_uccorporate_EmployerInfo1_txtEmpMRNo').value == '') {
                    $(".stoast").toastText("warning", "Please Enter WAP#", 5, 3);
                    document.getElementById('' + ctrlcom + '_uccorporate_EmployerInfo1_txtEmpMRNo').focus();
                    return false;
                }
            }
            if ($('#' + ctrlcom + '_uccorporate_ddlpattyp').val() != 8) {
                if (document.getElementById('' + ctrlcom + '_uccorporate_EmployerInfo1_txtdateofissue').value == '') {
                    $(".stoast").toastText("warning", "Date of Issue should be Proper Date", 5, 3);
                    document.getElementById('' + ctrlcom + '_uccorporate_EmployerInfo1_txtdateofissue').focus();
                    return false;
                }
            }
            if ($('#' + ctrlcom + '_uccorporate_ddlpattyp').val() != 8) {
                if (document.getElementById('' + ctrlcom + '_uccorporate_EmployerInfo1_txtEmpCardValidity').value == '') {
                    $(".stoast").toastText("warning", "Card validity should be Proper Date", 5, 3);
                    document.getElementById('' + ctrlcom + '_uccorporate_EmployerInfo1_txtEmpCardValidity').focus();
                    return false;
                }
            }
            if (document.getElementById('' + ctrlcom + '_uccorporate_EmployerInfo1_ddlpolicytype').value == 2 && document.getElementById('' + ctrlcom + '_uccorporate_EmployerInfo1_txtemployername').value == '') {
                $(".stoast").toastText("warning", "Please Select Employeer Name", 5, 3);
                document.getElementById('' + ctrlcom + '_uccorporate_EmployerInfo1_txtemployername').focus();
                return false;
            }

            var currentTime = new Date()
            var month = currentTime.getMonth() + 1
            switch (month) {
                case 1:
                    month = 'Jan'
                    break;

                case 2:
                    month = 'Feb'
                    break;

                case 3:
                    month = 'Mar'
                    break;

                case 4:
                    month = 'Apr'
                    break;

                case 5:
                    month = 'May'
                    break;

                case 6:
                    month = 'Jun'
                    break;

                case 7:
                    month = 'Jul'
                    break;

                case 8:
                    month = 'Aug'
                    break;

                case 9:
                    month = 'Sep'
                    break;

                case 10:
                    month = 'Oct'
                    break;

                case 11:
                    month = 'Nov'
                    break;

                case 12:
                    month = 'Dec'
                    break;

            }
            var day = currentTime.getDate()
            var year = currentTime.getFullYear()
            var hours = currentTime.getHours();
            var minutes = null;
            if (hours > '11') {
                minutes = currentTime.getMinutes() + " PM";
            }
            else {
                minutes = currentTime.getMinutes() + " AM";
            }

            var todaydate = day + "-" + month + "-" + year;
            var dt1 = todaydate;
            var dt2 = document.getElementById('' + ctrlcom + '_uccorporate_EmployerInfo1_txtEmpCardValidity').value;
            if (dt1 != '' && dt2 != '')
                var result = CompareExpireDate(dt1, dt2);

            if (result == "d2<=d1") {
                $(".stoast").toastText("warning", "Card Validity Date greater than Today's Date.", 5, 3);
                document.getElementById('' + ctrlcom + '_uccorporate_EmployerInfo1_txtEmpCardValidity').focus();
                return false;
            }
        }
        if (document.getElementById('' + ctrlcom + '_uccorporate_hdnDocName').value != '1') {
            var refletreq = document.getElementById('' + ctrlcom + '_uccorporate_hdnrefletterreq').value;
            if (refletreq == "Y") {
                if (document.getElementById('' + ctrlcom + '_uccorporate_EmployerInfo1_txtrefletter').value.trim() == "") {
                    $(".stoast").toastText("warning", "Please Select Referral Letter", 5, 3);
                    document.getElementById('' + ctrlcom + '_uccorporate_EmployerInfo1_txtrefletter').focus();
                    return false;
                }
                if (Client_Name.trim() != 'YASHODA') {
                    if (document.getElementById('' + ctrlcom + '_uccorporate_EmployerInfo1_txtletterissuedby').value == "") {
                        $(".stoast").toastText("warning", "Please Select Letter Issued by", 5, 3);
                        document.getElementById('' + ctrlcom + '_uccorporate_EmployerInfo1_txtletterissuedby').focus();
                        return false;
                    }
                    if (document.getElementById('' + ctrlcom + '_uccorporate_EmployerInfo1_txtlettervalidity').value == '') {
                        $(".stoast").toastText("warning", "Date of Expiry for Referral Letter should not be Today Date", 5, 3);
                        document.getElementById('' + ctrlcom + '_uccorporate_EmployerInfo1_txtlettervalidity').focus();
                        return false;
                    }
                }
            }
            if (document.getElementById('' + ctrlcom + '_uccorporate_EmployerInfo1_txtrefletter').value != "") {
                if (Client_Name.trim() != 'YASHODA') {
                    if (document.getElementById('' + ctrlcom + '_uccorporate_EmployerInfo1_txtletterissuedby').value == "") {
                        $(".stoast").toastText("warning", "Please Select Letter Issued by", 5, 3);
                        document.getElementById('' + ctrlcom + '_uccorporate_EmployerInfo1_txtletterissuedby').focus();
                        return false;
                    }
                }
                if (($('#' + ctrlcom + '_uccorporate_EmployerInfo1_txtcreditlimitamt').val() == "" || $('#' + ctrlcom + '_uccorporate_EmployerInfo1_txtcreditlimitamt').val() == "0") && $('#' + ctrlcom + '_uccorporate_EmployerInfo1_chkcreditcheck')[0].checked == false) {
                    $(".stoast").toastText("warning", "Please Select Credit unlimited or Enter Limit amount", 5, 3);
                    $('#' + ctrlcom + '_uccorporate_EmployerInfo1_txtcreditlimitamt').focus();
                    return false;
                }
            }
            if ($('#' + ctrlcom + '_uccorporate_EmployerInfo1_txtletterissuedby').val() != "") {
                if ($('#' + ctrlcom + '_uccorporate_EmployerInfo1_txtrefletter').val() == "") {
                    $(".stoast").toastText("warning", "Please Enter Referral Letter no", 5, 3);
                    $('#' + ctrlcom + '_uccorporate_EmployerInfo1_txtrefletter').focus();
                    return false;
                }
            }
        }
        if (document.getElementById('' + ctrlcom + '_uccorporate_hdnDocName').value == 'ADMN') {
            var refletreq = document.getElementById('' + ctrlcom + '_uccorporate_hdnrefletterreq').value;
            if (refletreq == "Y") {
                if (document.getElementById('' + ctrlcom + '_uccorporate_EmployerInfo1_txtrefletter').value.trim() == "") {
                    $(".stoast").toastText("warning", "Please Select Referral Letter", 5, 3);
                    document.getElementById('' + ctrlcom + '_uccorporate_EmployerInfo1_txtrefletter').focus();
                    return false;
                }
            }
        }
        var tpaname = document.getElementById('' + ctrlcom + '_uccorporate_EmployerInfo1_uctpa_txtSearchControl').value;
        var Cmp_Name = document.getElementById('' + ctrlcom + '_uccorporate_EmployerInfo1_EmployerControl1_txtSearchControl').value;
        var Cmp_Id = document.getElementById('' + ctrlcom + '_uccorporate_EmployerInfo1_EmployerControl1__hiddenID').value;
        var Emp_Id = document.getElementById('' + ctrlcom + '_uccorporate_EmployerInfo1_txtEmploeeID').value;
        var Emp_Name = document.getElementById('' + ctrlcom + '_uccorporate_EmployerInfo1_txtEmployeeName').value;
        var Designation = document.getElementById('' + ctrlcom + '_uccorporate_EmployerInfo1_txtDesignation').value;
        var Relationship = document.getElementById('' + ctrlcom + '_uccorporate_EmployerInfo1_ddlrelation').value;
        var Emp_Dept = document.getElementById('' + ctrlcom + '_uccorporate_EmployerInfo1_ddlCorpDept').value;
        var Grade = document.getElementById('' + ctrlcom + '_uccorporate_EmployerInfo1_txtempgrade').value;
        var Branch = document.getElementById('' + ctrlcom + '_uccorporate_EmployerInfo1_ddlCorpBranch').value;
        var Contact = document.getElementById('' + ctrlcom + '_uccorporate_EmployerInfo1_txtEmpContactNo').value;
        var MedCardNo = document.getElementById('' + ctrlcom + '_uccorporate_EmployerInfo1_txtEmpMRNo').value;
        var EmpCardValidity = document.getElementById('' + ctrlcom + '_uccorporate_EmployerInfo1_txtEmpCardValidity').value;
        var RefLetterNo = document.getElementById('' + ctrlcom + '_uccorporate_EmployerInfo1_txtrefletter').value;
        var employername = document.getElementById('' + ctrlcom + '_uccorporate_EmployerInfo1_txtemployername').value;
        var letterissueby = document.getElementById('' + ctrlcom + '_uccorporate_EmployerInfo1_txtletterissuedby').value;
        var tpaid = document.getElementById('' + ctrlcom + '_uccorporate_EmployerInfo1_uctpa__hiddenID').value;
        var regid = document.getElementById('' + ctrlcom + '_umrPatientDetails_hdnRegID').value;
        var patid = document.getElementById('' + ctrlcom + '_umrPatientDetails_hdnPatientid').value;
        var creditlimitamt = document.getElementById('' + ctrlcom + '_uccorporate_EmployerInfo1_txtcreditlimitamt').value;
        var issuedt = document.getElementById('' + ctrlcom + '_uccorporate_EmployerInfo1_txtdateofissue').value;
        var DateofIssue = document.getElementById('' + ctrlcom + '_uccorporate_EmployerInfo1_txtrefissuedt').value;
        var LetterValidity = document.getElementById('' + ctrlcom + '_uccorporate_EmployerInfo1_txtlettervalidity').value;
        var Pat_Type_Id = document.getElementById('' + ctrlcom + '_uccorporate_ddlpattyp').value;
        var _sum_insured = document.getElementById('' + ctrlcom + '_uccorporate_EmployerInfo1_txtsuminsured').value;
        var policytype = document.getElementById('' + ctrlcom + '_uccorporate_EmployerInfo1_ddlpolicytype').value;
        var creditunlimited = document.getElementById('' + ctrlcom + '_uccorporate_EmployerInfo1_chkcreditcheck').checked;
        var letter_Emp_percent = document.getElementById('' + ctrlcom + '_uccorporate_EmployerInfo1_txtempletterper').value;
        var letter_org_percent = document.getElementById('' + ctrlcom + '_uccorporate_EmployerInfo1_txtorgletterper').value;
        var remarks = document.getElementById('' + ctrlcom + '_uccorporate_EmployerInfo1_txtempremarks').value;
        if (remarks == "" || remarks == null || remarks == undefined || remarks == NaN) { remarks = ''; }
        if (letter_Emp_percent == "" || letter_Emp_percent == null || letter_Emp_percent == undefined || letter_Emp_percent == NaN) { letter_Emp_percent = 0; }
        if (letter_org_percent == "" || letter_org_percent == null || letter_org_percent == undefined || letter_org_percent == NaN) { letter_org_percent = 100; }
        document.getElementById('' + ctrlcom + '_uccorporate_hdnOrgPer').value = letter_org_percent;
        document.getElementById('' + ctrlcom + '_uccorporate_hdnEmpPer').value = letter_Emp_percent;
        document.getElementById('' + ctrlcom + '_hdnOrgPer').value = letter_org_percent;
        document.getElementById('' + ctrlcom + '_hdnEmpPer').value = letter_Emp_percent;
        debugger;
        document.getElementById('' + ctrlcom + '_uccorporate_hdnCompanyOrgpercent').value = letter_org_percent;
        document.getElementById('' + ctrlcom + '_uccorporate_hdnEmployeOrgpercent').value = letter_Emp_percent;
        if (creditunlimited == true) {
            creditunlimited = "Y";
            tdchkCreditunLImit.style.display = "block";
            document.getElementById('' + ctrlcom + '_uccorporate_chkCreditunLImit').checked = true;
        }
        else {
            creditunlimited = "N";
            tdchkCreditunLImit.style.display = "none";
            document.getElementById('' + ctrlcom + '_uccorporate_chkCreditunLImit').checked = false;
        }
        if (creditlimitamt == null || creditlimitamt == undefined || creditlimitamt == "") { creditlimitamt = 0; }
        policytype = policytype == "" ? "0" : policytype; regid = regid == "" ? "0" : regid; _sum_insured = _sum_insured == "" ? "0" : _sum_insured;
        var umr_no = $('#' + ctrlcom + '_umrPatientDetails_Umrlookup_txtSearchControl').val();
        _xmlCorpReg = '';
        _xmlCorpReg += "<FO_REG_CORPORATE";
        _xmlCorpReg += " CARD_NO=$" + MedCardNo + "$";
        _xmlCorpReg += " EMP_CONTACTNO=$" + Contact + "$";
        _xmlCorpReg += " CARD_VALIDITY=$" + EmpCardValidity + "$";
        _xmlCorpReg += " EMPLOYEE_ID=$" + Emp_Id + "$";
        _xmlCorpReg += " EMP_NAME=$" + Emp_Name + "$";
        _xmlCorpReg += " CREDIT_ORG_ID=$" + Cmp_Id + "$";
        _xmlCorpReg += " EMP_COVERAGE_ID=$" + "2" + "$";
        // _xmlCorpReg += " EMP_GRADE_ID=$" + Grade + "$";
        _xmlCorpReg += " EMP_RELATIONSHIP_ID=$" + Relationship + "$";
        //_xmlCorpReg += " IP_EMP_SAME_AS_PATIENT_FLG=$" + Relation_Id + "$";
        _xmlCorpReg += " REFERAL_BASIS=$" + RefLetterNo + "$";
        _xmlCorpReg += " REFERAL_BASIS_NO=$" + RefLetterNo + "$";
        _xmlCorpReg += " IP_PATIENT_ID=$" + patid + "$";
        //_xmlCorpReg += " IP_REG_CORPORATE_REV_NO=$" + "0" + "$";
        _xmlCorpReg += " REG_CORPORATE_ID=$" + "0" + "$";
        _xmlCorpReg += " REG_ID=$" + regid + "$";
        _xmlCorpReg += " DEPARTMENT=$" + Emp_Dept + "$";
        _xmlCorpReg += " DESIGNATION=$" + Designation + "$";
        _xmlCorpReg += " TPA_ID=$" + tpaid + "$";
        _xmlCorpReg += " BRANCH=$" + Branch + "$";
        _xmlCorpReg += " EMPLOYERNAME=$" + employername + "$";
        _xmlCorpReg += " CARD_ISSUE_DT=$" + issuedt + "$";
        _xmlCorpReg += " SUM_INSURED=$" + _sum_insured + "$";
        _xmlCorpReg += " POLICY_TYPE_ID=$" + policytype + "$";
        _xmlCorpReg += " UMR_NO=$" + umr_no + "$";
        _xmlCorpReg += "/>";
        _xmlCorpRef = "";
        if (RefLetterNo != '') {
            _xmlCorpRef += "<CMPNY_REFERAL_LETTER";
            _xmlCorpRef += " CMPNY_REFERAL_LETTER_ID=$" + "0" + "$";
            _xmlCorpRef += " ADMISSION_ID=$" + "0" + "$";
            _xmlCorpRef += " COMPANY_ID=$" + Cmp_Id + "$";
            _xmlCorpRef += " UMR_NO=$" + umr_no + "$";
            _xmlCorpRef += " REFERAL_LETTER_NO=$" + RefLetterNo + "$";
            if (document.getElementById('' + ctrlcom + '_uccorporate_hdnDocName').value == 'ADMN') { _xmlCorpRef += " PATIENT_COVERAGE_ID=$" + "1" + "$"; } else { _xmlCorpRef += " PATIENT_COVERAGE_ID=$" + "2" + "$"; }

            _xmlCorpRef += " LETTER_ISSUED_BY=$" + letterissueby + "$";
            _xmlCorpRef += " ELIGIBAL_WARD_ID=$" + "0" + "$";
            _xmlCorpRef += " ELIGIBAL_WARD_GROUP_ID=$" + "0" + "$";
            _xmlCorpRef += " REFERRAL_LETTER_ISSUE_DT=$" + DateofIssue + "$";
            _xmlCorpRef += " REFERRAL_VALIDITY_DT=$" + LetterValidity + "$";
            _xmlCorpRef += " TPA_ID=$" + tpaid + "$";
            _xmlCorpRef += " ORG_PERCENT=$" + letter_org_percent + "$";
            _xmlCorpRef += " EMP_PERCENT=$" + letter_Emp_percent + "$";
            _xmlCorpRef += " CREDIT_LIMIT_ID=$" + "0" + "$";
            _xmlCorpRef += " CREDIT_LIMIT_AMT=$" + parseInt(creditlimitamt) + "$";
            //_xmlCorpRef += " IP_CMPNY_REFERAL_LETTER_REV_NO=$" + "0" + "$";
            //  _xmlCorpRef += " IP_PATIENT_TYPE_ID=$" + Pat_Type_Id + "$";
            _xmlCorpRef += " IS_CREDIT_LIMIT_UNLIMITED=$" + creditunlimited + "$";
            _xmlCorpRef += " REMARKS=$" + remarks + "$";
            _xmlCorpRef += " REFERECNCE_FOR=$" + "" + "$";

            var opforCons = $('#ctl00_ContentPlaceHolder1_uccorporate_EmployerInfo1_chkCons')[0].checked ? 'Y' : 'N';
            var opforBill = $('#ctl00_ContentPlaceHolder1_uccorporate_EmployerInfo1_chkOPBill')[0].checked ? 'Y' : 'N';
            var opforPhar = $('#ctl00_ContentPlaceHolder1_uccorporate_EmployerInfo1_chkPharmacy')[0].checked ? 'Y' : 'N';
            _xmlCorpRef += " OP_CONSULTATION_REQUIRED=$" + opforCons + "$";
            _xmlCorpRef += " OP_BILL_REQUIRED=$" + opforBill + "$";
            _xmlCorpRef += " OP_PHARMACY_REQUIRED=$" + opforPhar + "$";

            _xmlCorpRef += "/>";
        }
        //        GetAsync(
        //                  "Private/FrontOffice/OpBilling/OPConsultation1.aspx/SaveCompanyINfo",
        //                  { cardvalidity: EmpCardValidity,  Empr_Id: Cmp_Id, Pat_Type_Id: Pat_Type_Id, iscorporate: "Y", grade: Grade, isemppat: "N", Emp_Id: Emp_Id, Ref_Letno: RefLetterNo, Ref_Let_Id: RefLetterNo,
        //                      Relation_Id: Relationship, CompanyName: Cmp_Name, Empname: Emp_Name, Designation: Designation, Department: Emp_Dept, branch: Branch, contactno: Contact, Regid: regid, PatientId: patid,
        //                      CreditlimitAmt: parseInt(creditlimitamt), employername: employername, letterissueby: letterissueby, DateofIssue: DateofIssue, LetterValidity: LetterValidity, tpaid: tpaid, issuedt: issuedt,
        //                      _sum_insured: _sum_insured, policytype: policytype, IS_CREDIT_LIMIT_UNLIMITED: creditunlimited, letter_org_percent: letter_org_percent, letter_Emp_percent: letter_Emp_percent
        //                  },
        //                  function (JData) {
        //                      if (JData.d != null || undefined || '') {
        document.getElementById('' + ctrlcom + '_umrPatientDetails_hdnpatient_type').value = 2;
        var hdncardtype = document.getElementById('' + ctrlcom + '_uccorporate_hdnEmppatTypeid').value;
        var lblcardname = document.getElementById('' + ctrlcom + '_uccorporate_lblmdcrdnm');
        if (hdncardtype == 5) { lblcardname.innerHTML = "Policy#"; } else if (hdncardtype == 8) { lblcardname.innerHTML = "WAP#"; } else { lblcardname.innerHTML = "Medical Card #"; }
        //                          if (JData.d.split(',')[0] == "N") {
        //                              $("#divCmpPopup").hide();
        //                              $(".stoast").toastText("Info", "Corporate Registration done Successfully!", 7, 2);
        //                              if (document.getElementById('' + ctrlcom + '_umrPatientDetails_hdnDocName').value == "ADMN") {
        //                                  document.getElementById('' + ctrlcom + '_uccorporate_CmpLookup_txtSearchControl').value = tpaname;
        //                                  document.getElementById('' + ctrlcom + '_uccorporate_CmpLookup__hiddenID').value = tpaid;
        //                                  document.getElementById('' + ctrlcom + '_uccorporate_CmpLookup__hiddenText').value = tpaname;
        //                                  var chkeligible = document.getElementById('' + ctrlcom + '_uccorporate_chkElWardNotApplbl');
        //                                  if (document.getElementById('' + ctrlcom + '_hdniseligibileward').value == "Y" && chkeligible.checked == true) {
        //                                      document.getElementById('' + ctrlcom + '_uccorporate_UCEligibleWard_txtSearchControl').style.border = '1px solid rgb(190,190,190)';
        //                                  }
        //                                  else if (document.getElementById('' + ctrlcom + '_hdniseligibileward').value == "Y" && chkeligible.checked == false) {
        //                                      OnNullValue(document.getElementById('' + ctrlcom + '_uccorporate_UCEligibleWard_txtSearchControl'));
        //                                  } else {
        //                                      document.getElementById('' + ctrlcom + '_uccorporate_UCEligibleWard_txtSearchControl').style.border = '1px solid rgb(190,190,190)';
        //                                  }
        //                              } else {
        //                                  document.getElementById('' + ctrlcom + '_uccorporate_CmpLookup_txtSearchControl').value = tpaname;
        //                                  document.getElementById('' + ctrlcom + '_uccorporate_CmpLookup__hiddenID').value = tpaid;
        //                                  document.getElementById('' + ctrlcom + '_uccorporate_CmpLookup__hiddenText').value = tpaname;
        //                                  ClearRefLetterFields();
        //                                  var umr_no = $('#' + ctrlcom + '_umrPatientDetails_Umrlookup_txtSearchControl').val();
        //                                  var Cmpny_id = $('#' + ctrlcom + '_uccorporate_EmployerInfo1_uctpa__hiddenID').val();
        //                                  var pat_id = $('#' + ctrlcom + '_hdnpat_id').val();
        //                                  Company_precondition(pat_id, umr_no, Cmpny_id);
        //                                  ClearCmpControlInfo();
        //                                  GetCompanyPerc(tpaid);
        //                              }
        //                              document.getElementById('' + ctrlcom + '_uccorporate_txtMedcard').value = MedCardNo;
        //                              document.getElementById('' + ctrlcom + '_uccorporate_txtEmpCd').value = Emp_Id;
        //                              document.getElementById('' + ctrlcom + '_uccorporate_txtEmpName').value = Emp_Name;
        //                          }
        //   else if (JData.d.split(',')[0] == "Y") {
        $("#divCmpPopup").hide();
        document.getElementById('' + ctrlcom + '_uccorporate_ddlpatcreditype').disabled = true;
        $(".stoast").toastText("Info", "Corporate Registration and Referral Letter done Successfully!", 7, 2);

        if (document.getElementById('' + ctrlcom + '_uccorporate_EmployerInfo1_chkcreditcheck').checked == true) {
            document.getElementById('' + ctrlcom + '_uccorporate_hdnlimitpost').value = 'A';
        } else {
            if (document.getElementById('' + ctrlcom + '_uccorporate_EmployerInfo1_txtcreditlimitamt').value == '0') {
                document.getElementById('' + ctrlcom + '_uccorporate_hdnlimitpost').value = 'R';
            }
            else
            { document.getElementById('' + ctrlcom + '_uccorporate_hdnlimitpost').value = 'A'; }
        }
        document.getElementById('' + ctrlcom + '_uccorporate_ddlpatcreditype').value = Pat_Type_Id;
        document.getElementById('' + ctrlcom + '_uccorporate_CmpLookup_txtSearchControl').value = tpaname;
        document.getElementById('' + ctrlcom + '_uccorporate_CmpLookup__hiddenID').value = tpaid;
        document.getElementById('' + ctrlcom + '_uccorporate_CmpLookup__hiddenText').value = tpaname;
        document.getElementById('' + ctrlcom + '_uccorporate_txtMedcard').value = MedCardNo;
        document.getElementById('' + ctrlcom + '_uccorporate_txtEmpCd').value = Emp_Id;
        document.getElementById('' + ctrlcom + '_uccorporate_txtEmpName').value = Emp_Name;
        document.getElementById('' + ctrlcom + '_uccorporate_ucRefLetterNo_txtSearchControl').value = RefLetterNo;
        //  document.getElementById('' + ctrlcom + '_uccorporate_ucRefLetterNo__hiddenID').value = JData.d.split(',')[1];
        document.getElementById('' + ctrlcom + '_uccorporate_ucRefLetterNo__hiddenText').value = RefLetterNo;
        document.getElementById('' + ctrlcom + '_uccorporate_txtRefLetIssuedby').value = letterissueby;
        document.getElementById('' + ctrlcom + '_uccorporate_txtRefLetIssueDt').value = DateofIssue;
        document.getElementById('' + ctrlcom + '_uccorporate_txtRefLetValidDt').value = LetterValidity;
        document.getElementById('' + ctrlcom + '_uccorporate_txtcreditlimitamt').value = creditlimitamt;
        document.getElementById('' + ctrlcom + '_uccorporate_txtcmpcreditop').value = creditlimitamt;
        document.getElementById('' + ctrlcom + '_uccorporate_txtcreditremarks').value = remarks;


        if ($('[id*=uccorporate_CmpLookup_txtSearchControl]').val() != "") { $('#' + ctrlcom + '_uccorporate_CmpLookup_txtSearchControl').removeClass('red'); }
        if ($('[id*=uccorporate_ucRefLetterNo_txtSearchControl]').val() != "") { $('#' + ctrlcom + '_uccorporate_ucRefLetterNo_txtSearchControl').removeClass('red'); }
        if (document.getElementById('' + ctrlcom + '_umrPatientDetails_hdnDocName').value == "ADMN") {
            divnonreglookup.style.display = 'none'; divreglookup.style.display = 'block'; clearnonreglookup(true);
            var chkeligible = document.getElementById('' + ctrlcom + '_uccorporate_chkElWardNotApplbl');
            if (document.getElementById('' + ctrlcom + '_hdniseligibileward').value == "Y" && chkeligible.checked == true) {
                document.getElementById('' + ctrlcom + '_uccorporate_UCEligibleWard_txtSearchControl').style.border = '1px solid rgb(190,190,190)';
            }
            else if (document.getElementById('' + ctrlcom + '_hdniseligibileward').value == "Y" && chkeligible.checked == false) {
                OnNullValue(document.getElementById('' + ctrlcom + '_uccorporate_UCEligibleWard_txtSearchControl'));
            } else {
                document.getElementById('' + ctrlcom + '_uccorporate_UCEligibleWard_txtSearchControl').style.border = '1px solid rgb(190,190,190)';
            }
        }
        var umr_no = $('#' + ctrlcom + '_umrPatientDetails_Umrlookup_txtSearchControl').val();
        var Cmpny_id = $('#' + ctrlcom + '_uccorporate_EmployerInfo1_uctpa__hiddenID').val();
        var pat_id = $('#' + ctrlcom + '_hdnpat_id').val();
        Company_precondition(pat_id, umr_no, Cmpny_id);
        ClearCmpControlInfo();
        GetCompanyPerc(tpaid);
        ServicesAutoContextKey();
        // }
        if (document.getElementById('' + ctrlcom + '_uccorporate_hdnDocName').value == "ADMN") {
            $("table[id*=gvServices] tr:has(td)").each(function (e) {
                var srv_name = $(this).closest('tr').find('input[type=text][id*=txtServiceName]').val();
                var _srvId = $(this).closest('tr').find("input[type=hidden][id*=hdnServiceID]").val();
                var _doctor_id = $(this).closest('tr').find("input[type=hidden][id*=hdnDoctorID]").val();
                var _srv_class_id = $(this).closest('tr').find('input[type=hidden][id*=hdnServiceClass]').val();
                // OnRemoveConfirmation(this, 'I');
                // RemoveGridViewService(this, 'I');
            });
        } else {
            DelateAllGridData();
        }
        var umrno = document.getElementById('' + ctrlcom + '_umrPatientDetails_Umrlookup_txtSearchControl').value;
        var patID = document.getElementById('' + ctrlcom + '_umrPatientDetails_hdnPatientid').value;
        var cmpnyid = parseInt("0");
        cmpnyid = document.getElementById('' + ctrlcom + '_uccorporate_EmployerInfo1_uctpa__hiddenID').value;
        Getcmpdtls(umrno, cmpnyid);
        if (document.getElementById('' + ctrlcom + '_umrPatientDetails_hdnDocName').value != "ADMN") {
            DivCorpColors.style.display = "block";
            GetAsync(
                    "PatientRegistration.asmx/GetCompanyReceiptInfoByID",
                    { CompanyId: cmpnyid, patient_class_id: parseInt("2") },
                    function (jdata) {
                        if (jdata != null) {
                            document.getElementById('' + ctrlcom + '_UCServices_lblpri1').innerText = '';
                            document.getElementById('' + ctrlcom + '_UCServices_lblpri2').innerText = '';
                            document.getElementById('' + ctrlcom + '_UCServices_lblpri3').innerText = '';
                            document.getElementById('' + ctrlcom + '_UCServices_lblpri4').innerText = '';
                            document.getElementById('' + ctrlcom + '_UCServices_HdnPri1').value = '0';
                            document.getElementById('' + ctrlcom + '_UCServices_HdnPri2').value = '0';
                            document.getElementById('' + ctrlcom + '_UCServices_HdnPri3').value = '0';
                            document.getElementById('' + ctrlcom + '_UCServices_HdnPri4').value = '0';
                            document.getElementById('' + ctrlcom + '_UCServices_HdnPriC1').value = '';
                            document.getElementById('' + ctrlcom + '_UCServices_HdnPriC2').value = '';
                            document.getElementById('' + ctrlcom + '_UCServices_HdnPriC3').value = '';
                            document.getElementById('' + ctrlcom + '_UCServices_HdnPriC4').value = '';
                            if (jdata.d.length > 0) {
                                oncorpsuccess(jdata.d);
                            }
                        }
                    },
                    function (jqXHR, textStatus, errorThrown) {
                    });
            GetCompanyPerc(cmpnyid);
        }
        if (document.getElementById('' + ctrlcom + '_umrPatientDetails_hdnDocName').value == 'Cons') {
            var docid = document.getElementById('' + ctrlcom + '_uccorporate_hdnarrdocid').value;
            var doctname = document.getElementById('' + ctrlcom + '_uccorporate_hdnarrdocname').value;
            var doctorcd = document.getElementById('' + ctrlcom + '_uccorporate_hdnarrdoctcd').value;
            var deptid = document.getElementById('' + ctrlcom + '_uccorporate_hdnarrdeptid').value;
            var docdeptname = document.getElementById('' + ctrlcom + '_uccorporate_hdnarrdeptname').value;
            var discount_pnt = document.getElementById('' + ctrlcom + '_uccorporate_hbncondisamount').value
            AssignConsultantDoctor(docid, doctname, doctorcd, deptid, docdeptname);
            if (discount_pnt == null || discount_pnt == '' || discount_pnt == undefined)
            { discount_pnt = 0; }
            if (parseFloat(discount_pnt) > 0) {

                if (parseFloat(discount_pnt) > 0) {
                    $("table[id*=UCServices_gvServices] tr:has(td)").each(function (e) {
                        var gvServices = document.getElementById('' + ctrlcom + '_UCServices_gvServices');
                        var rowIndex = gvServices.rows.length;
                        checkRowIndex = rowIndex - 1;
                        $('[id$=UCServices_gvServices] tr').filter(':eq(' + checkRowIndex + ')').find('input[type=text][id*=txtDiscP]').val(discount_pnt);

                        var SrvName = $('[id$=UCServices_gvServices] tr').filter(':eq(' + checkRowIndex + ')').find('[id*=txtServiceName]').val();
                        if (SrvName != 'REGISTRATION') {
                            var emp_pcnt = $('#' + ctrlcom + '_txtEmpPercentage').val();
                            var org_pcnt = $('#' + ctrlcom + '_txtCorpPercentage').val();
                            var price = $('[id$=UCServices_gvServices] tr').filter(':eq(' + checkRowIndex + ')').find('input[type=text][id*=txtAmount]').val();
                            if (emp_pcnt == undefined || emp_pcnt == null || emp_pcnt == '') { emp_pcnt = 0; }
                            if (org_pcnt == undefined || org_pcnt == null || org_pcnt == '') { org_pcnt = 0; }
                            var pAmt = Math.round((parseFloat(price) * parseFloat(emp_pcnt)) / 100);
                            if (pAmt == undefined || pAmt == null || pAmt == '') { pAmt = 0; }
                            var PconAmt = 0;
                            PconAmt = Math.round((parseFloat(pAmt) * parseFloat(discount_pnt)) / parseFloat(100));

                            var tamt = Math.round((parseFloat(price) * (parseFloat(discount_pnt))) / parseFloat(100));
                            var eamt = Math.round((parseFloat(pAmt) * (parseFloat(discount_pnt))) / parseFloat(100));
                            var camt = Math.round((parseFloat(Math.round((parseFloat(price) * parseFloat(org_pcnt)) / 100)) *
(parseFloat(discount_pnt))) / parseFloat(100));
                            var tecamt = parseFloat(eamt) + parseFloat(camt);
                            if (tamt != tecamt) {
                                if (parseFloat(tamt) > tecamt) {
                                    var dispamt = parseFloat(tamt) - parseFloat(tecamt);

                                    PconAmt = parseFloat(PconAmt) + parseFloat(dispamt);
                                }
                                else if (tecamt > tamt) {
                                    var dispamt = parseFloat(tecamt) - parseFloat(tamt);

                                    PconAmt = parseFloat(PconAmt) - parseFloat(dispamt);

                                }


                            }
                            $('[id$=UCServices_gvServices] tr').filter(':eq(' + checkRowIndex + ')').find('input[type=text][id*=txtPamt]').val(pAmt);
                            $('[id$=UCServices_gvServices] tr').filter(':eq(' + checkRowIndex + ')').find('input[type=text][id*=txtDiscAmt]').val(PconAmt);
                            $('[id$=UCServices_gvServices] tr').filter(':eq(' + checkRowIndex + ')').find('[id*=hdnCmpDiscPcnt]').val(discount_pnt);
                            var pNetAmt = parseFloat(pAmt) - parseFloat(PconAmt);
                            pNetAmt = pNetAmt > 0 ? pNetAmt : 0;
                            $('[id$=UCServices_gvServices] tr').filter(':eq(' + checkRowIndex + ')').find('input[type=text][id*=txtPNAmt]').val(pNetAmt);
                            //                    $('[id$=UCServices_gvServices] tr').filter(':eq(' + checkRowIndex + ')').find('input[type=text][id*=txtDiscP]')[0].disabled = false;
                            //                    $('[id$=UCServices_gvServices] tr').filter(':eq(' + checkRowIndex + ')').find('input[type=text][id*=txtDiscAmt]')[0].disabled = false;

                            $(".col-hide tr:nth-child(3),.col-hide tr:nth-child(4),.col-hide tr:nth-child(5),.col-hide tr:nth-child(6),.col-hide tr:nth-child(7),.col-hide tr:nth-child(8),.col-hide tr:nth-child(10),.col-hide tr:nth-child(13),.col-hide tr:nth-child(14),.col-hide tr:nth-child(15)").show();
                            $("#payitem2,._quick-div").show();
                            $("._mdisc").css('width', '72%');
                            $("#payitem1,#payitem3").hide();
                            $('[id*=ConcessionAmt]')[0].style.display = 'none';
                            $("#lbladvanced").addClass("select");
                            $("#lblquick").removeClass("select");


                            //                                var index_data = document.getElementById('' + ctrlcom + '_UCServices_gvServices').rows.length;
                            //                                index_data = index_data - 1;
                            CalculateGridAmt(0);
                        }
                    });
                }
            }
        }
        RefLetterReq();
        var Refletterreq = document.getElementById('' + ctrlcom + '_uccorporate_chkRefLetReq').checked;
        if (Refletterreq == true && $('[id*=uccorporate_ucRefLetterNo_txtSearchControl]').val() == "") { $('#' + ctrlcom + '_uccorporate_ucRefLetterNo_txtSearchControl').addClass('red'); }
        else { $('#' + ctrlcom + '_uccorporate_ucRefLetterNo_txtSearchControl').removeClass('red'); }
        var cmp_id = document.getElementById('' + ctrlcom + '_uccorporate_CmpLookup__hiddenID').value;
        Referalletter_precondition(umrno, cmp_id);

        if (document.getElementById('' + ctrlcom + '_uccorporate_hdnDocName').value == "ADMN") {
            document.getElementById('' + ctrlcom + '_uccorporate_ucRefLetterNo_txtSearchControl').disabled = true;
            document.getElementById('lk_btn_ctl00_ContentPlaceHolder1_uccorporate_ucRefLetterNo').disabled = true;
        }
        else {
            document.getElementById('' + ctrlcom + '_uccorporate_ucRefLetterNo_txtSearchControl').disabled = false;
            document.getElementById('lk_btn_ctl00_ContentPlaceHolder1_uccorporate_ucRefLetterNo').disabled = false;
        }
        document.getElementById('' + ctrlcom + '_uccorporate_btnRefLetter').disabled = false;
        document.getElementById('' + ctrlcom + '_uccorporate_UCEligibleWard_txtSearchControl').disabled = false;
        document.getElementById('lk_btn_ctl00_ContentPlaceHolder1_uccorporate_UCEligibleWard').disabled = false;
        document.getElementById('' + ctrlcom + '_uccorporate_chkElWardNotApplbl').disabled = false;
        document.getElementById('' + ctrlcom + '_uccorporate_chkRefLetReq').disabled = false;
        //                      }
        //                      else {
        //                          $(".stoast").toastText("warning", "Error found", 5, 3);
        //                          return false;
        //                      }
        //                  },
        //                  function (jqXHR, textStatus, errorThrown) {
        //                      $(".stoast").toastText("warning", errorThrown, 5, 3);
        //                  });
        var umr_no = $('#' + ctrlcom + '_umrPatientDetails_Umrlookup_txtSearchControl').val();
        var Cmpny_id = $('#' + ctrlcom + '_uccorporate_CmpLookup__hiddenID').val();
        var pat_id = $('#' + ctrlcom + '_hdnpat_id').val();
        document.getElementById('' + ctrlcom + '_uccorporate_CmpLookup_txtSearchControl').style.border = "";
        Company_precondition(pat_id, umr_no, Cmpny_id);
        if (document.getElementById('' + ctrlcom + '_uccorporate_hdnDocName').value == "OPQUICK") {
            if (document.getElementById('' + ctrlcom + '_UCServices_hdnallowconsservice').value.toUpperCase() == "TRUE") {
                AllowAdminCharges();
            }
        }
    }
    function ClearCmpDtls() {
        $('#' + ctrlcom + '_uccorporate_CmpLookup_txtSearchControl').val('');
        $('#' + ctrlcom + '_uccorporate_CmpLookup__hiddenID').val('0');
        $('#' + ctrlcom + '_uccorporate_CmpLookup__hiddenText').val('');
        $('#' + ctrlcom + '_uccorporate_txtMedcard').val('');
        $('#' + ctrlcom + '_uccorporate_txtEmpCd').val('');
        $('#' + ctrlcom + '_uccorporate_txtEmpName').val('');
        $('#' + ctrlcom + '_uccorporate_txtRefLetIssuedby').val('');
        $('#' + ctrlcom + '_uccorporate_txtRefLetIssueDt').val('');
        document.getElementById('' + ctrlcom + '_uccorporate_txtcreditremarks').value = '';
        $('#' + ctrlcom + '_uccorporate_txtRefLetValidDt').val('');
        $('#' + ctrlcom + '_uccorporate_ucRefLetterNo_txtSearchControl').val('');
        $('#' + ctrlcom + '_uccorporate_ucRefLetterNo__hiddenID').val('0');
        $('#' + ctrlcom + '_uccorporate_ucRefLetterNo__hiddenText').val('');
        $('#' + ctrlcom + '_uccorporate_txtcreditlimitamt').val('');
        $('#' + ctrlcom + '_uccorporate_txtcmpcreditop').val('');
        $('#txtcmpcreditop').val(''); $('#banercolourcorp').css('background', '');
        document.getElementById('' + ctrlcom + '_uccorporate_chkRefLetReq').checked = false;
        document.getElementById('' + ctrlcom + '_uccorporate_chkEmpDue').checked = false;



    }
    function ClearRefLetterFields() {
        document.getElementById('' + ctrlcom + '_uccorporate_ucRefLetterNo_txtSearchControl').value = '';
        document.getElementById('' + ctrlcom + '_uccorporate_ucRefLetterNo__hiddenID').value = 0;
        document.getElementById('' + ctrlcom + '_uccorporate_ucRefLetterNo__hiddenText').value = '';
        document.getElementById('' + ctrlcom + '_uccorporate_txtRefLetIssuedby').value = '';
        document.getElementById('' + ctrlcom + '_uccorporate_txtRefLetIssueDt').value = '';
        document.getElementById('' + ctrlcom + '_uccorporate_txtcreditremarks').value = '';
        document.getElementById('' + ctrlcom + '_uccorporate_txtRefLetValidDt').value = '';
        document.getElementById('' + ctrlcom + '_uccorporate_txtcreditlimitamt').value = '';
        document.getElementById('' + ctrlcom + '_uccorporate_txtcmpcreditop').value = '';
        tdchkCreditunLImit.style.display = "none";

    }
    function Company_precondition(PatientID, umr_no, company_id) {
        /*GetAsync(
        "Private/FrontOffice/OpBilling/OPBillClientSide.aspx/Company_Precondition",
        { PatientId: PatientID, UMR_NO: umr_no, CMPNY_ID: company_id },
        function (JData) {
        },
        function (jqXHR, textStatus, errorThrown) {
        });*/
        document.getElementById('ctl00_ContentPlaceHolder1_uccorporate_CmpLookup_hdn_preCond').value = "0^PATIENTCMP^" + PatientID;
        set_contextKey = 'PATIENT';
    }
    function Referalletter_precondition(umr_no, cmpny_id) {
        /*   GetAsync(
        "Private/FrontOffice/OpBilling/OPBillClientSide.aspx/ReferalLetter_Precondition",
        { UMR_NO: umr_no, CMPNY_ID: cmpny_id },
        function (JData) {
        },
        function (jqXHR, textStatus, errorThrown) {
        });*/

        var oprefltrfor = "";
        if (document.getElementById('' + ctrlcom + '_umrPatientDetails_hdnDocName').value == "OP") {
            document.getElementById('ctl00_ContentPlaceHolder1_uccorporate_chkOPBill').checked = true;
            oprefltrfor = "OPB";
        }
        else if (document.getElementById('' + ctrlcom + '_umrPatientDetails_hdnDocName').value == "Cons") {
        document.getElementById('ctl00_ContentPlaceHolder1_uccorporate_chkCons').checked = true;
        oprefltrfor = "OPC";
    }
    else if (document.getElementById('' + ctrlcom + '_uccorporate_hdnDocName').value == 'OPQUICK') {
        document.getElementById('ctl00_ContentPlaceHolder1_uccorporate_EmployerInfo1_chkOPBill').checked = true;
        document.getElementById('ctl00_ContentPlaceHolder1_uccorporate_EmployerInfo1_chkCons').checked = true;
    }
        var form_name = document.getElementById('' + ctrlcom + '_uccorporate_hdnDocName').value;
        if (form_name == 'ADMN') {
            document.getElementById('ctl00_ContentPlaceHolder1_uccorporate_ucRefLetterNo_hdn_preCond').value = "^^^^" + cmpny_id + "^" + umr_no + "^" + "^1^";
        } else {
            document.getElementById('ctl00_ContentPlaceHolder1_uccorporate_ucRefLetterNo_hdn_preCond').value = "^^^^" + cmpny_id + "^" + umr_no + "^" + "^2^" + oprefltrfor + "^";
        }
        return false;
    }
    var _xmlCorpRef = "";
    var _xmlCorpReg = "";
    function SaveRefEntry() {
        document.getElementById('' + ctrlcom + '_uccorporate_ucRefLetterNo__hiddenID').value = 0;
        var refletterno = document.getElementById('' + ctrlcom + '_uccorporate_txtrefletter');
        var letterissue = document.getElementById('' + ctrlcom + '_uccorporate_txtissuedby');
        var refissuedt = document.getElementById('' + ctrlcom + '_uccorporate_txtrefissuedat').value;
        var refexpirydt = document.getElementById('' + ctrlcom + '_uccorporate_txtlettervalid').value;
        var Client_Name = document.getElementById('' + ctrlcom + '_uccorporate_hdnClientName').value;
        var Remarks = document.getElementById('' + ctrlcom + '_uccorporate_txtRemark').value;
        var orgletterperletter = document.getElementById('' + ctrlcom + '_uccorporate_txtorgletterperletter').value;
        var empletterperletter = document.getElementById('' + ctrlcom + '_uccorporate_txtempletterperletter').value;
        if (refletterno.value == '') {
            $(".stoast").toastText("warning", "Please Enter Ref.Letter No", 5, 3);
            refletterno.focus();
            return false;
        }
        if (Client_Name != 'YASHODA') {
            if (letterissue.value == '') {
                $(".stoast").toastText("warning", "Please Enter Letter Issued by Authorisation", 5, 3);
                letterissue.focus();
                return false;
            }
            if (refissuedt == '') {
                $(".stoast").toastText("warning", "Please Select Referral Issue Date", 5, 3);
                document.getElementById('' + ctrlcom + '_uccorporate_txtrefissuedat').focus();
                return false;
            }
            if (refexpirydt == '') {
                $(".stoast").toastText("warning", "Please Select Referral Expiry Date", 5, 3);
                document.getElementById('' + ctrlcom + '_uccorporate_txtlettervalid').focus();
                return false;
            }
        }
        if (($('#' + ctrlcom + '_uccorporate_txtcreditlimit').val() == "" || $('#' + ctrlcom + '_uccorporate_txtcreditlimit').val() == "0") && $('#' + ctrlcom + '_uccorporate_chkcreditcheckcorp')[0].checked == false) {
            $(".stoast").toastText("warning", "Please Select Credit unlimited or Enter Limit amount", 5, 3);
            $('#' + ctrlcom + '_uccorporate_txtcreditlimit').focus();
            return false;
        }
        var tpaid = document.getElementById('' + ctrlcom + '_uccorporate_CmpLookup__hiddenID').value;
        if (tpaid == "" || tpaid == null || tpaid == undefined || tpaid == 0) { tpaid = document.getElementById('' + ctrlcom + '_uccorporate_allcmplookup__hiddenID').value; }
        if (tpaid == "" || tpaid == null || tpaid == undefined || tpaid == 0) { tpaid = 0; }
        var umrno = document.getElementById('' + ctrlcom + '_umrPatientDetails_Umrlookup_txtSearchControl').value;
        var credit_limit_amt = document.getElementById('' + ctrlcom + '_uccorporate_txtcreditlimit').value;
        var PATIENT_COVERAGE_ID = $('#' + ctrlcom + '_uccorporate_txtvldfr option:selected').val();
        var IS_CREDIT_LIMIT_UNLIMITED = 'N';
        tdchkCreditunLImit.style.display = "none";
        if (document.getElementById('' + ctrlcom + '_uccorporate_chkcreditcheckcorp').checked == true) {
            IS_CREDIT_LIMIT_UNLIMITED = 'Y';
            tdchkCreditunLImit.style.display = "block"
            document.getElementById('' + ctrlcom + '_uccorporate_chkCreditunLImit').checked = true;
        }
        if (credit_limit_amt == "" || credit_limit_amt == null || credit_limit_amt == undefined) { credit_limit_amt = "0"; }
        if (PATIENT_COVERAGE_ID == "OP") { PATIENT_COVERAGE_ID = 2; } else if (PATIENT_COVERAGE_ID == "IP") { PATIENT_COVERAGE_ID = 1; } else { PATIENT_COVERAGE_ID = 0; }
        var Cmp_Id = document.getElementById('' + ctrlcom + '_uccorporate_EmployerInfo1_EmployerControl1__hiddenID').value;
        _xmlCorpRef = "";
        if (refletterno.value != '') {
            _xmlCorpRef += "<CMPNY_REFERAL_LETTER";
            _xmlCorpRef += " CMPNY_REFERAL_LETTER_ID=$" + "0" + "$";
            _xmlCorpRef += " ADMISSION_ID=$" + "0" + "$";
            _xmlCorpRef += " COMPANY_ID=$" + Cmp_Id + "$";
            _xmlCorpRef += " UMR_NO=$" + umrno + "$";
            _xmlCorpRef += " REFERAL_LETTER_NO=$" + refletterno.value + "$";
            if (document.getElementById('' + ctrlcom + '_uccorporate_hdnDocName').value == 'ADMN') { _xmlCorpRef += " PATIENT_COVERAGE_ID=$" + "1" + "$"; } else { _xmlCorpRef += " PATIENT_COVERAGE_ID=$" + "2" + "$"; }
            _xmlCorpRef += " LETTER_ISSUED_BY=$" + letterissue.value + "$";
            _xmlCorpRef += " ELIGIBAL_WARD_ID=$" + "0" + "$";
            _xmlCorpRef += " ELIGIBAL_WARD_GROUP_ID=$" + "0" + "$";
            _xmlCorpRef += " REFERRAL_LETTER_ISSUE_DT=$" + refissuedt + "$";
            _xmlCorpRef += " REFERRAL_VALIDITY_DT=$" + refexpirydt + "$";
            _xmlCorpRef += " TPA_ID=$" + tpaid + "$";
            _xmlCorpRef += " ORG_PERCENT=$" + orgletterperletter + "$";
            _xmlCorpRef += " EMP_PERCENT=$" + empletterperletter + "$";
            _xmlCorpRef += " CREDIT_LIMIT_ID=$" + "0" + "$";
            _xmlCorpRef += " CREDIT_LIMIT_AMT=$" + parseInt(credit_limit_amt) + "$";
            // _xmlCorpRef += " IP_CMPNY_REFERAL_LETTER_REV_NO=$" + "0" + "$";
            //   _xmlCorpRef += " IP_PATIENT_TYPE_ID=$" + Pat_Type_Id + "$";
            _xmlCorpRef += " IS_CREDIT_LIMIT_UNLIMITED=$" + IS_CREDIT_LIMIT_UNLIMITED + "$";
            _xmlCorpRef += " REMARKS=$" + Remarks + "$";
            _xmlCorpRef += " REFERECNCE_FOR=$" + "" + "$";
            var opforCons = $('#ctl00_ContentPlaceHolder1_uccorporate_chkCons')[0].checked ? 'Y' : 'N';
            var opforBill = $('#ctl00_ContentPlaceHolder1_uccorporate_chkOPBill')[0].checked ? 'Y' : 'N';
            var opforPhar = $('#ctl00_ContentPlaceHolder1_uccorporate_chkPharmacy')[0].checked ? 'Y' : 'N';
            _xmlCorpRef += " OP_CONSULTATION_REQUIRED=$" + opforCons + "$";
            _xmlCorpRef += " OP_BILL_REQUIRED=$" + opforBill + "$";
            _xmlCorpRef += " OP_PHARMACY_REQUIRED=$" + opforPhar + "$";
            _xmlCorpRef += "/>";
        }
        //        GetAsync(
        //                  "Private/FrontOffice/OpBilling/OPConsultation1.aspx/SaveReferalEntry",
        //                  { refletterno: refletterno.value, PATIENT_COVERAGE_ID: PATIENT_COVERAGE_ID, ADMISSION_ID: "0", tpaid: tpaid, umrno: umrno,
        //                      ELIGIBAL_WARD_ID: 0, ELIGIBAL_WARD_GROUP_ID: 0, REFERENCE_TYPE_ID: 2, letterissue: letterissue.value, Refissuedt: refissuedt,
        //                      RefexpiryDt: refexpirydt, credit_limit_amt: credit_limit_amt, IS_CREDIT_LIMIT_UNLIMITED: IS_CREDIT_LIMIT_UNLIMITED, Remarks: Remarks,
        //                      letter_org_percent: orgletterperletter, letter_Emp_percent: empletterperletter
        //                  },
        //                  function (JData) {
        //                      if (JData.d != null || JData.d != '') {
        $("#div1").hide();
        $(".stoast").toastText("Info", "Referral Letter Saved Successfully", 3, 1);
        if (document.getElementById('' + ctrlcom + '_uccorporate_EmployerInfo1_chkcreditcheck').checked == true) {
            document.getElementById('' + ctrlcom + '_uccorporate_hdnlimitpost').value = 'A';
        } else {
            if (document.getElementById('' + ctrlcom + '_uccorporate_txtcreditlimit').value == '0') {
                document.getElementById('' + ctrlcom + '_uccorporate_hdnlimitpost').value = 'R';
            }
            else
            { document.getElementById('' + ctrlcom + '_uccorporate_hdnlimitpost').value = 'A'; }
        }
        document.getElementById('' + ctrlcom + '_uccorporate_ucRefLetterNo_txtSearchControl').value = refletterno.value;
        //document.getElementById('' + ctrlcom + '_uccorporate_ucRefLetterNo__hiddenID').value = JData.d;
        document.getElementById('' + ctrlcom + '_uccorporate_ucRefLetterNo__hiddenText').value = refletterno.value;
        document.getElementById('' + ctrlcom + '_uccorporate_txtRefLetIssueDt').value = refissuedt;
        document.getElementById('' + ctrlcom + '_uccorporate_txtRefLetValidDt').value = refexpirydt;
        document.getElementById('' + ctrlcom + '_uccorporate_txtRefLetIssuedby').value = letterissue.value;
        document.getElementById('' + ctrlcom + '_uccorporate_txtcreditlimitamt').value = credit_limit_amt;
        document.getElementById('' + ctrlcom + '_uccorporate_txtcreditremarks').value = Remarks;
        document.getElementById('' + ctrlcom + '_uccorporate_txtcmpcreditop').value = credit_limit_amt;
        if (document.getElementById('' + ctrlcom + '_uccorporate_hdnDocName').value != 'ADMN') {
            AssignEmpOrgPercentageLetterSave(orgletterperletter, empletterperletter);
            $('#' + ctrlcom + '_txtCorpPayAmt').val('0');
            $('#' + ctrlcom + '_txtCorpDueAmt').val('0');
            $('#' + ctrlcom + '_txtEmpPayAmt').val('0');
            $('#' + ctrlcom + '_txtOrgTaxAmt').val('0');
            $('#' + ctrlcom + '_txtEmpTaxAmt').val('0');

        }
        clearRefPopupvalues();

        $('#' + ctrlcom + '_uccorporate_ucRefLetterNo_txtSearchControl').removeClass('red');
        if (document.getElementById('' + ctrlcom + '_uccorporate_hdnDocName').value == "ADMN") {
            $("table[id*=gvServices] tr:has(td)").each(function (e) {
                var srv_name = $(this).closest('tr').find('input[type=text][id*=txtServiceName]').val();
                var _srvId = $(this).closest('tr').find("input[type=hidden][id*=hdnServiceID]").val();
                var _doctor_id = $(this).closest('tr').find("input[type=hidden][id*=hdnDoctorID]").val();
                var _srv_class_id = $(this).closest('tr').find('input[type=hidden][id*=hdnServiceClass]').val();
                RemoveGridViewService(this, 'I');
            });
        } else {
            DelateAllGridData();
        }
        //                      }
        //                  },
        //                  function (jqXHR, textStatus, errorThrown) {
        //                      $(".stoast").toastText("warning", errorThrown, 5, 3);
        //                  });
    }
    function clearRefPopupvalues() {
        document.getElementById('' + ctrlcom + '_uccorporate_txtrefletter').value = '';
        document.getElementById('' + ctrlcom + '_uccorporate_txtcreditlimit').value = '';
        document.getElementById('' + ctrlcom + '_uccorporate_txtissuedby').value = '';
        document.getElementById('' + ctrlcom + '_uccorporate_txtrefissuedat').value = '';
        document.getElementById('' + ctrlcom + '_uccorporate_txtlettervalid').value = '';
        document.getElementById('' + ctrlcom + '_uccorporate_txtRemark').value = '';
        document.getElementById('' + ctrlcom + '_uccorporate_txtempletterperletter').value = '';
        document.getElementById('' + ctrlcom + '_uccorporate_txtorgletterperletter').value = '';
    }

    function ClearCmpControlInfo() {
        document.getElementById('' + ctrlcom + '_uccorporate_EmployerInfo1_txtcreditlimitamt').value = '';
        document.getElementById('' + ctrlcom + '_uccorporate_EmployerInfo1_txtletterissuedby').value = '';
        document.getElementById('' + ctrlcom + '_uccorporate_EmployerInfo1_txtemployername').value = '';
        document.getElementById('' + ctrlcom + '_uccorporate_EmployerInfo1_txtBranch').value = '';
        document.getElementById('' + ctrlcom + '_uccorporate_EmployerInfo1_txtDept').value = '';
        document.getElementById('' + ctrlcom + '_uccorporate_EmployerInfo1_EmployerControl1_txtSearchControl').value = '';
        document.getElementById('' + ctrlcom + '_uccorporate_EmployerInfo1_uctpa_txtSearchControl').value = '';
        document.getElementById('' + ctrlcom + '_uccorporate_EmployerInfo1_EmployerControl1__hiddenID').value = '';
        document.getElementById('' + ctrlcom + '_uccorporate_EmployerInfo1_txtEmploeeID').value = '';
        document.getElementById('' + ctrlcom + '_uccorporate_EmployerInfo1_txtEmployeeName').value = '';
        document.getElementById('' + ctrlcom + '_uccorporate_EmployerInfo1_txtDesignation').value = '';
        document.getElementById('' + ctrlcom + '_uccorporate_EmployerInfo1_ddlrelation').selectedIndex = '0';
        document.getElementById('' + ctrlcom + '_uccorporate_EmployerInfo1_ddlCorpDept').value = '';
        document.getElementById('' + ctrlcom + '_uccorporate_EmployerInfo1_txtempgrade').value = '';
        document.getElementById('' + ctrlcom + '_uccorporate_EmployerInfo1_ddlCorpBranch').value = '';
        document.getElementById('' + ctrlcom + '_uccorporate_EmployerInfo1_txtEmpContactNo').value = '';
        document.getElementById('' + ctrlcom + '_uccorporate_EmployerInfo1_txtEmpMRNo').value = '';
        document.getElementById('' + ctrlcom + '_uccorporate_EmployerInfo1_txtEmpCardValidity').value = '';
        document.getElementById('' + ctrlcom + '_uccorporate_EmployerInfo1_txtrefletter').value = '';
        document.getElementById('' + ctrlcom + '_uccorporate_EmployerInfo1_txtlettervalidity').value = '';
        document.getElementById('' + ctrlcom + '_uccorporate_EmployerInfo1_txtdateofissue').value = '';
        document.getElementById('' + ctrlcom + '_uccorporate_EmployerInfo1_txtempremarks').value = '';

    }
    function closeinstab() {
        $('[id*=divmultiinspopup]').hide(); return false;
    }
    var tpalookup = 'N';
    function showCompPopup() {
        tpalookup = 'Y';
        if ($('[id*=hdnclientNameFor]').val().toUpperCase() == "UHWI" || $('[id*=hdnclientNameFor]').val().toUpperCase() == "KNH" || $('[id*=hdnclientNameFor]').val().toUpperCase() == "OMEGA" && $('[id*=ddlpatcreditype]').val() == "5") {
            ClearInsDetails(); $('[id*=divmultiinspopup]').show(); oncorpmultinsurance(); GetSavedInscmps();
        }
        else if ($('[id*=hdnclientNameFor]').val().toUpperCase() == "UHWI" || $('[id*=hdnclientNameFor]').val().toUpperCase() == "KNH" || $('[id*=hdnclientNameFor]').val().toUpperCase() == "OMEGA" && $('[id*=ddlpatcreditype]').val() == "2") {
            ClearInsDetails(); $('[id*=divmultiinspopup]').show(); oncorpmultinsurance(); GetSavedInscmps();
        }
        else {
            $('#tdempdue')[0].style.display = "none";
            if (document.getElementById('' + ctrlcom + '_umrPatientDetails_Umrlookup_txtSearchControl').value == '') {
                $(".stoast").toastText("warning", "Please select UMR#!.", 5, 3);
                document.getElementById('' + ctrlcom + '_umrPatientDetails_Umrlookup_txtSearchControl').focus();
                return false;
            }
            CompanyValidation();
            if (document.getElementById('' + ctrlcom + '_uccorporate_EmployerInfo1_hdncmpquick').value == 'Y') {
                if (document.getElementById('' + ctrlcom + '_uccorporate_hdnDocName').value == 'OP')
                    document.getElementById('ctl00_ContentPlaceHolder1_uccorporate_EmployerInfo1_chkOPBill').checked = true;
                else if (document.getElementById('' + ctrlcom + '_uccorporate_hdnDocName').value == 'Cons')
                    document.getElementById('ctl00_ContentPlaceHolder1_uccorporate_EmployerInfo1_chkCons').checked = true;
                else if (document.getElementById('' + ctrlcom + '_uccorporate_hdnDocName').value == 'OPQUICK') {
                    document.getElementById('ctl00_ContentPlaceHolder1_uccorporate_EmployerInfo1_chkOPBill').checked = true;
                    document.getElementById('ctl00_ContentPlaceHolder1_uccorporate_EmployerInfo1_chkCons').checked = true;
                }
                $("#divCmpPopup").show();
                document.getElementById('' + ctrlcom + '_uccorporate_ddlpattyp').value = $('[id*=uccorporate_ddlpatcreditype]').val();
                ddlpattype();
                document.getElementById('' + ctrlcom + '_uccorporate_ddlpattyp').style.border = '';
                $("#trCmpSave").show();
                var PatientID = 0;
                cmp_precondition_patientid(PatientID);
            }
            else {
                $(".stoast").toastText("warning", "You dont have permission to Quick Add.", 5, 3);
                return false;
            }
            ClearCmpControlInfo();
            if (document.getElementById('' + ctrlcom + '_uccorporate_hdnClientName').value == 'UHWI' || document.getElementById('' + ctrlcom + '_uccorporate_hdnClientName').value == 'KNH' || document.getElementById('' + ctrlcom + '_uccorporate_hdnClientName').value == 'OMEGA') {
                document.getElementById('' + ctrlcom + '_uccorporate_EmployerInfo1_lblcard').innerHTML = "Insurance Card#";
            } else {
                document.getElementById('' + ctrlcom + '_uccorporate_EmployerInfo1_lblcard').innerHTML = "Med Card#";
            }
            if (document.getElementById('' + ctrlcom + '_uccorporate_hdnDocName').value == 'OP' || document.getElementById('' + ctrlcom + '_uccorporate_hdnDocName').value == 'Cons') {
                $('[id*=Clblumrno]').text($('[id*=Umrlookup_txtSearchControl]').val());
                $('[id*=Clblpatname]').text($('[id*=umrPatientDetails_lblPatName]').text());
            }
            document.getElementById('' + ctrlcom + '_uccorporate_EmployerInfo1_btnCmpReg').style.display = 'none';
            if (document.getElementById('' + ctrlcom + '_uccorporate_hdnDocName').value == 'ADMN') {
                $('[id*=Clblumrno]').text($('[id*=Umrlookup_txtSearchControl]').val());
                $('[id*=Clblpatname]').text($('[id*=lblPatName]').text());
                document.getElementById('' + ctrlcom + '_uccorporate_EmployerInfo1_txtsuminsured').disabled = false;
            }
        }
        return false;
    }
    function hideCompPopup() {
        $("#divCmpPopup").hide();
        var patientid = document.getElementById('' + ctrlcom + '_umrPatientDetails_hdnPatientid').value;
        cmp_precondition_patientid(patientid);
        ddlchngcrtype();
        return false;
    }

    function cmp_precondition_patientid(pat_id) {
        /*GetAsync(
        "Private/FrontOffice/DayCare/AddNewAdmission.aspx/Company_Precondition",
        { PatientId: pat_id },
        function (JData) {
        },
        function (jqXHR, textStatus, errorThrown) {
        });*/
        document.getElementById('ctl00_ContentPlaceHolder1_uccorporate_CmpLookup_hdn_preCond').value = "0^" + "PATIENTCMP^" + pat_id + "^0";
    }
    function CompanyValidation() {
        var Client_Name = document.getElementById('' + ctrlcom + '_uccorporate_hdnClientName').value;
        var _chkValidation = true;
        var _ctrls = new Array();
        var pattype = document.getElementById('' + ctrlcom + '_uccorporate_ddlpattyp').value; 
        _ctrls[1] = 'ctl00_ContentPlaceHolder1_uccorporate_EmployerInfo1_uctpa_txtSearchControl';
        _ctrls[8] = 'ctl00_ContentPlaceHolder1_uccorporate_EmployerInfo1_txtcreditlimitamt';
        if (Client_Name.trim() != 'YASHODA') {
            if (pattype == "0" || pattype == "2" || pattype == "5" || pattype == "9") {
                _ctrls[3] = 'ctl00_ContentPlaceHolder1_uccorporate_EmployerInfo1_txtEmployeeName';
                _ctrls[4] = 'ctl00_ContentPlaceHolder1_uccorporate_EmployerInfo1_txtEmpMRNo';
                _ctrls[6] = 'ctl00_ContentPlaceHolder1_uccorporate_EmployerInfo1_ddlrelation';
                _ctrls[7] = 'ctl00_ContentPlaceHolder1_uccorporate_EmployerInfo1_txtdateofissue';
                _ctrls[9] = 'ctl00_ContentPlaceHolder1_uccorporate_EmployerInfo1_txtEmpCardValidity';
                _ctrls[10] = 'ctl00_ContentPlaceHolder1_uccorporate_ddlpattyp'; 
            } if (pattype == "8") {
                _ctrls[2] = 'ctl00_ContentPlaceHolder1_uccorporate_EmployerInfo1_txtEmployeeName';
                _ctrls[3] = 'ctl00_ContentPlaceHolder1_uccorporate_EmployerInfo1_txtEmpMRNo';
                document.getElementById('' + ctrlcom + '_uccorporate_EmployerInfo1_txtEmploeeID').style.border = '1px solid rgb(190,190,190)';
                document.getElementById('' + ctrlcom + '_uccorporate_EmployerInfo1_txtEmpCardValidity').style.border = '1px solid rgb(190,190,190)';
                document.getElementById('' + ctrlcom + '_uccorporate_EmployerInfo1_txtdateofissue').style.border = '1px solid rgb(190,190,190)';
            }
        }
        for (var i = 0; i < _ctrls.length; i++) {
            var ctrl = document.getElementById(_ctrls[i]);
            if (OnNullValue(ctrl) == false) {
                _chkValidation = false;
            }
        }
    }
    function OnLoadUploadPhoto(obj) {
        if ($('#' + ctrlcom + '_headerControl1_hdnDMSFtp').val() == "NO") {
            $(".stoast").toastText("Warning", "Ftp Not Working.Please Contact to Administrator.", 5, 3);
            return false;
        }
        else {
            var UmrNo = $('[id*=umrPatientDetails_Umrlookup_txtSearchControl]').val();
            var cmp_id = 0;
            if ($('[id*=uccorporate_hdnDocName]').val() == "ADMN")
                cmp_id = $('[id*=uccorporate_allcmplookup__hiddenID]').val();
            else
                cmp_id = $('[id*=uccorporate_CmpLookup__hiddenID]').val();
            if (UmrNo == null || UmrNo == undefined) { UmrNo = ''; }
            if (cmp_id == '' || cmp_id == null || cmp_id == undefined) { cmp_id = "0"; }
            if (UmrNo == '') {
                $(".stoast").toastText("Info", "Please Select UMR#", 5, 2);
                $('[id*=umrPatientDetails_Umrlookup_txtSearchControl]').focus();
                return false;
            }
            if (cmp_id == "0") {
                $(".stoast").toastText("Info", "Please Select Company/TPA", 5, 2);
                return false;
            }
            document.getElementById('ctl00_hdnDMSUmrNo').value = UmrNo;
            document.getElementById('ctl00_hdnDMSAdmnNo').value = cmp_id;
            document.getElementById('ctl00_hdnMtablename').value = 'ADT_ADMN';
            document.getElementById('ctl00_hdnMtblautocdGlobalcolumns').value = 'UMR_NO';
            document.getElementById('ctl00_hdnMtblautoidcolumns').value = 'COMPANY_ID';
            OnFileUpload('Grid');
        }
    }
    function OnSelecttxtEligible(_d) {
        if (_d["WARD_GROUP_ID"] == undefined) {
            var _d = _d["RESULT"];
            _d = _d["ListObjVal"];
            _d = _d[0];
            $('#' + ctrlcom + '_uccorporate_UCEligibleWard_txtSearchControl').val(_d["WARD_GROUP_NAME"]);
        }
        else {
            _d = _d;
            $('#' + ctrlcom + '_uccorporate_UCEligibleWard_txtSearchControl').val(_d["_lktext"]);
        }
        document.getElementById('<%=UCEligibleWard.FindControl("_hiddenID").ClientID%>').value = _d["WARD_GROUP_ID"];
        $('#' + ctrlcom + '_hdnRefElWard').val(_d["WARD_GROUP_ID"]);
        $('#' + ctrlcom + '_uccorporate_hdnWargroupdId').val(_d["WARD_GROUP_ID"]);
    }
    function hideRefPopup() {
        div1.style.display = 'none';
        return false;
    }
    function OnNonRegSelection(_d) {
        document.getElementById('<%=UCEligibleWard.FindControl("txtSearchControl").ClientID%>').value = '';
        document.getElementById('<%=UCEligibleWard.FindControl("_hiddenID").ClientID%>').value = '';
        document.getElementById('<%=chkElWardNotApplbl.ClientID %>').checked = false;


        var form_name = document.getElementById('' + ctrlcom + '_uccorporate_hdnDocName').value;
        if (_d.COMPANY_ID > 0) { _d = _d } else { _d = _d.RESULT.ListObjVal[0]; }
        if (_d.CMP_EXP_STS == "Y") {
            $("#" + ctrlcom + "_uccorporate_allcmplookup_txtSearchControl").val('');
            $("#" + ctrlcom + "_uccorporate_allcmplookup__hiddenText").val('');
            $("#" + ctrlcom + "_uccorporate_allcmplookup__hiddenID").val(0);
            document.getElementById('' + ctrlcom + '_uccorporate_allcmplookup_txtSearchControl').style.border = '';
            $(".stoast").toastText("Warning", "This Company/TPA is Expired.Please Contact Administrator!", 5, 3);
            return false;
        }
        if (_d.IS_CONSELIGIBLE_WARD == "Y") {
            document.getElementById('<%=UCEligibleWard.FindControl("txtSearchControl").ClientID%>').style.border = ' 1px solid rgb(190, 190, 190)';
            document.getElementById('<%=UCEligibleWard.FindControl("txtSearchControl").ClientID%>').disabled = false;
        }
        document.getElementById('' + ctrlcom + '_uccorporate_allcmplookup_txtSearchControl').value = _d["COMPANY_NAME"];
        document.getElementById('' + ctrlcom + '_uccorporate_allcmplookup__hiddenID').value = _d["COMPANY_ID"];
        document.getElementById('' + ctrlcom + '_uccorporate_allcmplookup__hiddenText').value = _d["COMPANY_NAME"];
        document.getElementById('' + ctrlcom + '_uccorporate_hdneligiblewardreq').value = _d["IS_CONSELIGIBLE_WARD"];
        $('#' + ctrlcom + '_uccorporate_allcmplookup_txtSearchControl').removeClass('red');
        var ElWard = document.getElementById('' + ctrlcom + '_uccorporate_hdneligiblewardreq').value;
        if (form_name == 'ADMN') {
            BindcompanyTariffID(_d["COMPANY_ID"]);
            if (_d["IS_LETTER_REQUIRED"] == "Y") {
                $('#' + ctrlcom + '_uccorporate_ucRefLetterNo_txtSearchControl').addClass('red');
                document.getElementById('' + ctrlcom + '_uccorporate_hdnrefletterreq').value = "Y";
            } else {
                $('#' + ctrlcom + '_uccorporate_ucRefLetterNo_txtSearchControl').removeClass('red');
                document.getElementById('' + ctrlcom + '_uccorporate_hdnrefletterreq').value = "N";
            }
            var umr_no = $('#' + ctrlcom + '_umrPatientDetails_Umrlookup_txtSearchControl').val();
            var Cmpny_id = $('#' + ctrlcom + '_uccorporate_CmpLookup__hiddenID').val();
            var pat_id = $('#' + ctrlcom + '_hdnpat_id').val();
            document.getElementById('' + ctrlcom + '_uccorporate_CmpLookup_txtSearchControl').style.border = "";
            Company_precondition(pat_id, umr_no, Cmpny_id);
            Referalletter_precondition(umr_no, Cmpny_id);
            document.getElementById('' + ctrlcom + '_uccorporate_ucRefLetterNo_txtSearchControl').disabled = false;
            document.getElementById('lk_btn_ctl00_ContentPlaceHolder1_uccorporate_ucRefLetterNo').disabled = false;
            document.getElementById('' + ctrlcom + '_uccorporate_btnRefLetter').disabled = false;
            document.getElementById('' + ctrlcom + '_uccorporate_UCEligibleWard_txtSearchControl').disabled = false;
            document.getElementById('lk_btn_ctl00_ContentPlaceHolder1_uccorporate_UCEligibleWard').disabled = false;
            document.getElementById('' + ctrlcom + '_uccorporate_chkElWardNotApplbl').disabled = false;
            document.getElementById('' + ctrlcom + '_uccorporate_chkRefLetReq').disabled = false;
        }
        if (form_name == 'ADMN' && ElWard == "Y") {
            $('#' + ctrlcom + '_uccorporate_UCEligibleWard_txtSearchControl').addClass('red');
        } else {
            $('#' + ctrlcom + '_uccorporate_UCEligibleWard_txtSearchControl').removeClass('red');
        }


    }
    function ChkRefLtMand(obj) {
        if (obj.checked == true) {
            document.getElementById('' + ctrlcom + '_uccorporate_hdnrefletterreq').value = "Y";
        } else {
            document.getElementById('' + ctrlcom + '_uccorporate_hdnrefletterreq').value = "N";
        }
    }
    function selectlevel() {
        var levelid = $('[id*=ddlinslevel]').val();
        if (levelid == '0') {
            $('[id*=ddlinslevel]').addClass('red');
        }
        else {
            $('[id*=ddlinslevel]').removeClass('red');
        }
    }
    function Isletterissued() {
        if ($('[id*=uccorporate_txtissuedby]').val() != "") {
            $('#' + ctrlcom + '_uccorporate_txtissuedby').removeClass('red');
        }
    }
    function Calcemppercletter(obj) {
        var txtOrgpercent = $('[id*=txtorgletterperletter]').val();
        var txtEmppercent = $('[id*=txtempletterperletter]').val();

        if ((txtEmppercent != '' || txtEmppercent != undefined || txtEmppercent != NaN) && (parseFloat(txtEmppercent) <= 100)) {
            $('[id*=txtorgletterperletter]').val(100 - parseInt(txtEmppercent))
            return false;
        }
        else {
            $('[id*=txtorgletterperletter]').val('100');
            $('[id*=txtempletterperletter]').val('0');

        }
    }
    function Calorgemppercletter(obj) {
        var txtOrgpercent = $('[id*=txtorgletterperletter]').val();
        var txtEmppercent = $('[id*=txtempletterperletter]').val();
        debugger;
        if ((txtOrgpercent != '' || txtOrgpercent != undefined || txtOrgpercent != NaN) && (parseFloat(txtOrgpercent) <= 100)) {
            $('[id*=txtempletterperletter]').val(100 - parseFloat(txtOrgpercent))
            return false;
        }
        else {
            $('[id*=txtorgletterperletter]').val('0');
            $('[id*=txtempletterperletter]').val('100');

        }
    }
    
</script>

    <div class="panel-heading smallheading">
        <h3 class="panel-title">
            Insurance Info</h3>
        <div class="righttxt1">
            <div id="imgDiv" style="background: #fff; padding: 1px 6px; display: none; float: right;">
                <asp:Image ID="Image1" runat="server" Height="23px" />
            </div>
            <div class="tb_Btn icon-upload-1 tooltip" id="uploadctrl" onclick="return OnLoadUploadPhoto(this,'R');"
                title="Upload Document" style="margin-right: 5px; margin-top: 3px; line-height: 100%;
                font-size: 16px; padding: 2px; float: right;">
            </div>
            <div class="tb_Btn icon-download tooltip" id="downloadctrl" onclick="return OnLoadDownloadPhoto(this);"
                title="Download Document" style="margin-right: 5px; line-height: 100%; font-size: 16px;
                padding: 2px; margin-top: 3px; float: right;">
            </div>
            <div id="tdchkempdue" style="float: right; margin-top: 3px;">
                <asp:CheckBox ID="chkEmpDue" runat="server" Text="Emp Due" Enabled="false" onclick="CompareCoportaAmt(this);"
                    CssClass="chk-list" /></div>
            <div id="tdchkCreditunLImit" style="float: right; margin-top: 3px; display: none;">
                <asp:CheckBox ID="chkCreditunLImit" runat="server" Text="Credit Unlimited" Enabled="false"
                    CssClass="chk-list" />
            </div>
        </div>
    </div>
    <div class="panel-body Companybody divscroll" style="    clear: both;">
     <table border="0" cellpadding="0" cellspacing="0" width="100%" class="FormsCtrl">
            <tr>
            <td>
              <div class="formflex flex-column">
                <div class="formelements flex-col-49">
                                    <div class="formelementslbl col_1">
                                    Payment By
                                    </div>
                                    <div class="formelementstxt col_2" id="tdpayby">
                                       <asp:DropDownList ID="ddlPaymentBy" runat="server" Width="100%" onChange="return ChangePatientType();OnNullValue(this)">
                            <asp:ListItem Value="0" Text="--select--"> </asp:ListItem>
                            <asp:ListItem Value="1" Text="Cash"></asp:ListItem>
                            <asp:ListItem Value="2" Text="Credit"></asp:ListItem>
                        </asp:DropDownList>
                                    </div>
                                </div>
                                    <div class="formelements flex-col-49">
                                    <div class="formelementslbl col_3" id="tdcrtype" style="display: none">
                                     Credit Type
                                    </div>
                                    <div class="formelementstxt col_4"  id="tdddlpatcrtype" style="display: none">
                                      <asp:DropDownList ID="ddlpatcreditype" runat="server" Enabled="false" onchange="ddlchngcrtype();return OnNullValue(this);">
                        </asp:DropDownList>
                                    </div>
                                </div>
                                    <div class="formelements">
                                    <div class="formelementslbl">
                                    <asp:Label ID="lblinsurenceName" runat="server" CssClass="ellip" Text="Company/TPA"></asp:Label>
                                    </div>
                                    <div class="formelementstxt">
                                        <div class="btntxt" style="padding-right: 55px;">
                            <div id="divreglookup">
                                <GUC1:GenericUC ID="CmpLookup" runat="server" Enabled="false" OnBlurRequired="true"
                                    CallbackFn="OnCompSelection" />
                            </div>
                            <div id="divnonreglookup" style="display: none">
                                <GUC1:GenericUC ID="allcmplookup" Enabled="false" runat="server" CallbackFn="OnNonRegSelection" />
                            </div>
                            <div class="txtbtn">
                                <asp:Button ID="btnCmpReg" runat="server" CssClass="tb_Btn quickadd" Text="" OnClientClick="return showCompPopup();"
                                    Style="margin-right: 2px !important; float: left;" title="Corporate Registration" />
                                <uc3:GenericGrid ID="uccompany" runat="server" />
                            </div>
                        </div>
                                    </div>
                                </div>
                                    <div class="formelements">
                                    <div class="formelementslbl">
                                        <asp:Label ID="lblmdcrdnm" Text="Medical Card #" CssClass="ellip" runat="server"></asp:Label>
                                    </div>
                                    <div class="formelementstxt">
                                       <div class="btntxt" style="padding-right: 26px;">
                            <asp:TextBox ID="txtMedcard" runat="server" Enabled="false"></asp:TextBox>
                            <div class="txtbtn">
                                <i class="icon-doc-text lookupico tooltip" name="Letter Type" id="btnletype" title="Letter Type"
                                    onclick="return BindLetterType();"></i>
                            </div>
                        </div>
                                    </div>
                                </div>
                                    <div class="formelements">
                                    <div class="formelementslbl">
                                    Emp Code & Name
                                    </div>
                                    <div class="formelementstxt">
                                       <asp:TextBox ID="txtEmpCd" runat="server" Width="26%" Enabled="false" CssClass="empcd"></asp:TextBox>
                        <asp:TextBox ID="txtEmpName" runat="server" Width="72.9%" Enabled="false" CssClass="empname"></asp:TextBox>
                                    </div>
                                </div>
                                    <div class="formelements">
                                    <div class="formelementslbl">
                                     LOA#
                                    </div>
                                    <div class="formelementstxt">
                                           <div class="btntxt" style="padding-right: 111px;">
                            <GUC1:GenericUC ID="ucRefLetterNo" Enabled="false" runat="server" CallbackFn="OnRefLtSelection" />
                            <div class="txtbtn">
                                <asp:Button ID="btnRefLetter" runat="server" CssClass="tb_Btn quickadd pull-left"
                                    Text="" ToolTip="Add Referral Letter" OnClientClick="return RefLetPopup();" />
                                <asp:CheckBox ID="chkRefLetReq" runat="server" Text="Is LOA Req." onclick="ChkRefLtMand(this);"
                                    CssClass="chk-list1 opcorp" />
                            </div>
                        </div>
                                    </div>
                                </div>
                                   <div class="formelements">
                                    <div class="formelementslbl">
                                     Letter Issued By
                                    </div>
                                    <div class="formelementstxt">
                                  <asp:TextBox ID="txtRefLetIssuedby" runat="server" Enabled="false" Width="99.8%"></asp:TextBox>
                                    </div>
                                </div>
                                   <div class="formelements flex-col-49">
                                    <div class="formelementslbl col_1">
                                     Letter Issued Dt
                                    </div>
                                    <div class="formelementstxt col_2">
                                     <asp:TextBox ID="txtRefLetIssueDt" runat="server" Enabled="false"></asp:TextBox>
                                    </div>
                                </div>
                                  <div class="formelements flex-col-49">
                                    <div class="formelementslbl col_3">
                                     Letter Exp Dt
                                    </div>
                                    <div class="formelementstxt col_4">
                                     <asp:TextBox ID="txtRefLetValidDt" Enabled="false" runat="server"></asp:TextBox>
                                    </div>
                                </div>
                                  <div class="formelements flex-col-49">
                                    <div class="formelementslbl col_1">
                                    Limit Balance Amt
                                    </div>
                                    <div class="formelementstxt col_2">
                                     <asp:TextBox ID="txtcreditlimitamt" runat="server" Enabled="false"></asp:TextBox>
                                    </div>
                                </div>
                                  <div class="formelements flex-col-49">
                                    <div class="formelementslbl col_3">
                                     Original Amt
                                    </div>
                                    <div class="formelementstxt col_4">
                                      <input type="text" disabled="disabled" runat="server" id="txtcmpcreditop" />
                                    </div>
                                </div>
                                    <div class="formelements">
                                    <div class="formelementslbl col_1">
                                     Remarks
                                    </div>
                                    <div class="formelementstxt ">
                                         <div class="btntxt" style="padding-right: 125px;">
                            <asp:TextBox ID="txtcreditremarks" runat="server" Enabled="false"></asp:TextBox>
                            <div class="txtbtn">
                                <asp:CheckBox ID="chkElWardNotApplbl" runat="server" Text="Not Applicable" onclick="return notapplicablevalidation();"
                                    Enabled="false" CssClass="chk-list1 isnot" />
                            </div>
                        </div>
                                    </div>
                                </div>
                                    <div class="formelements" id="treligibleward" style="display: none;">
                                    <div class="formelementslbl">
                                     Eligibility Ward
                                    </div>
                                    <div class="formelementstxt">
                                      <GUC1:GenericUC ID="UCEligibleWard" runat="server" CallbackFn="OnSelecttxtEligible"
                            Enabled="false" />
                        <asp:HiddenField ID="hdnWargroupdId" runat="server" />
                                    </div>
                                </div></div>
            </td>
            </tr>
            </table>

    </div>

<div>
    <div class="masking" id="divCmpPopup">
        <div class="cmask">
        </div>
        <div class="clientpopup company-pop" style="    left: 25% !important;right: 5% !important;top: 8% !important;bottom: 6% !important;margin: 0;width: 50%;height: 83%;">
            <div class="pop-header">
                <h1>
                    Company Details
                </h1>
                <table style="padding-top: 5px; float: left;">
                    <tr>
                        <td>
                            Patient Type
                        </td>
                        <td>
                            <asp:DropDownList ID="ddlpattyp" runat="server" onchange="ddlpattype();return OnNullValue(this);">
                            </asp:DropDownList>
                        </td>
                        <td align="left">
                            UMR # :
                        </td>
                        <td align="left">
                            <label id='Clblumrno'>
                            </label>
                        </td>
                        <td>
                            Patient Name :
                        </td>
                        <td align="left">
                            <label id='Clblpatname'>
                            </label>
                        </td>
                    </tr>
                </table>
                <asp:Button buttonaction="cancelButton" ID="Button3" runat="server" CssClass="cbutton"
                    Text="&times;" OnClientClick="return hideCompPopup();" />
            </div>
            <div>
                <div class="pop-body companyino-pop" style="padding: 5px;">
                    <uccmp:CompControl ID="EmployerInfo1" runat="server" />
                </div>
                <div style="text-align: center; margin-top: 10px;">
                    <input type="button" id="btnSaveCmp" onclick="saveCompanyInfo();" value="Save and Close"
                        class="button" style="text-align: center; margin-top: 10px;" />
                </div>
            </div>
        </div>
    </div>
    <div class="masking" id="div1">
        <div class="cmask">
        </div>
        <div class="clientpopup" style="width: 400px; height: 256px; margin-left: -281px;
            margin-top: -154px;">
            <div class="pop-header">
                <h1>
                    Referral Letter Creation
                </h1>
                <asp:Button buttonaction="cancelButton" ID="Button1" runat="server" CssClass="cbutton"
                    Text="&times;" OnClientClick="return hideRefPopup();" />
            </div>
            <div class="pop-body" style="padding: 6px;">
                <table border="0" cellpadding="0" cellspacing="5" width="100%" class="FormsCtrl">
                    <tr>
                        <td align="left" width="100px">
                            Reff. Letter #
                        </td>
                        <td align="left">
                            <asp:TextBox ID="txtrefletter" clas='red' onblur="OnNullValue(this);return IsRefLetExist();"
                                runat="server"></asp:TextBox>
                        </td>
                    </tr>
                    <tr>
                        <td align="left" width="100px">
                            Valid For
                        </td>
                        <td align="left">
                            <asp:DropDownList ID="txtvldfr" Enabled="false" runat="server">
                                <asp:ListItem Text="OP" Selected="True"></asp:ListItem>
                                <asp:ListItem Text="IP"></asp:ListItem>
                            </asp:DropDownList>
                        </td>
                    </tr>
                    <tr id='tropvalid'>
                        <td colspan="2">
                            <div id="divOPValid" style="display: block;">
                                <asp:CheckBox ID="chkCons" Text="Consultation" runat="server" />
                                <asp:CheckBox ID="chkOPBill" Text="OP Bill" runat="server" />
                                <asp:CheckBox ID="chkPharmacy" Text="Pharmacy" runat="server" />
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td align="left">
                            Ref Issue Dt
                        </td>
                        <td align="left">
                            <asp:TextBox ID="txtrefissuedat" placeHolder="Select Date" ReadOnly="true" runat="server"></asp:TextBox>
                        </td>
                    </tr>
                    <tr>
                        <td align="left">
                            Ref Expiry Dt
                        </td>
                        <td align="left">
                            <asp:TextBox ID="txtlettervalid" placeHolder="Select Date" ReadOnly="true" runat="server"></asp:TextBox>
                        </td>
                    </tr>
                    <tr>
                        <td align="left">
                            Letter Issued By
                        </td>
                        <td align="left">
                            <asp:TextBox ID="txtissuedby" onblur="OnNullValue(this); return Isletterissued();"
                                runat="server"></asp:TextBox>
                            <asp:CheckBox ID="chkIsOsp" Visible="false" runat="server" Style="display: none !important;" />
                        </td>
                    </tr>
                    <tr>
                        <td align="left">
                            Available limt
                        </td>
                        <td align="left">
                            <asp:TextBox ID="txtcreditlimit" runat="server" onkeypress="return chkNumeric(event);"
                                onkeyup="chkunlimitamtcorp(this);" MaxLength="9" CssClass="Aright"></asp:TextBox>
                        </td>
                    </tr>
                    <tr>
                        <td align="left">
                            Remarks
                        </td>
                        <td align="left">
                            <asp:TextBox ID="txtRemark" runat="server" CssClass="Aright"></asp:TextBox>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label class="ellip">
                                ORG / EMP %</label>
                        </td>
                        <td>
                            <asp:TextBox ID="txtorgletterperletter" runat="server" MaxLength="3" Width="25%"
                                onkeypress="return chkNumeric(event);" onkeyup="Calorgemppercletter(this);" CssClass="Aright"></asp:TextBox>/
                            <asp:TextBox ID="txtempletterperletter" runat="server" MaxLength="3" Width="25%"
                                onkeypress="return chkNumeric(event);" onkeyup="Calcemppercletter(this);" CssClass="Aright"></asp:TextBox>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="2">
                            <asp:CheckBox ID="chkcreditcheckcorp" runat="server" Text="Credit Unlimited" onclick="chklimitamtcorp(this);" />
                        </td>
                    </tr>
                    <tr>
                        <td align="left">
                        </td>
                        <td align="left">
                            <input type="button" id="Button2" onclick="SaveRefEntry();" value="Save and Close"
                                class="button" />
                        </td>
                    </tr>
                </table>
            </div>
        </div>
    </div>
</div>
<div id="pnlGridPop" width="600px" style="display: none" runat="server" class="masking">
    <div class="cmask">
    </div>
    <div class="clientpopup" style="width: 820px; height: 500px; margin-left: -375px;
        margin-top: -250px;">
        <div class="pop-header">
            <h1>
                Company Check Lists
            </h1>
            <div style="float: left; margin-top: 6px;">
                <div style="float: left; line-height: 25px; margin-right: 5px;">
                    <div style="background: #AED75B; height: 10px; width: 10px; float: left; margin-top: 8px;
                        margin-right: 3px;">
                    </div>
                    <asp:Label Text="System Defined" ID="lblpri1" runat="server"></asp:Label>
                </div>
                <div style="float: left; line-height: 25px; margin-right: 5px;">
                    <div style="background: #FFDAB9; height: 10px; width: 10px; float: left; margin-top: 8px;
                        margin-right: 3px;">
                    </div>
                    <asp:Label Text="Mandatory" ID="lblpri2" runat="server"></asp:Label>
                </div>
                <div style="float: left; line-height: 25px; margin-right: 5px;">
                    <div style="background: #FFC0CB; height: 10px; width: 10px; float: left; margin-top: 8px;
                        margin-right: 3px;">
                    </div>
                    <asp:Label ID="lblpri3" Text="Optional" runat="server"></asp:Label>
                </div>
                <div style="float: left; line-height: 25px; margin-right: 5px;">
                    <div style="background-color: #c0ffdc; height: 10px; width: 10px; float: left; margin-top: 8px;
                        margin-right: 3px;">
                    </div>
                    <asp:Label ID="lblpri4" Text="Completed" runat="server"></asp:Label>
                </div>
                <div style="float: left; line-height: 25px; margin-right: 5px;">
                    <div style="background-color: #f84463; height: 10px; width: 10px; float: left; margin-top: 8px;
                        margin-right: 3px;">
                    </div>
                    <asp:Label ID="lblpri5" Text="SD+MD" runat="server"></asp:Label>
                </div>
                <div style="float: left; line-height: 25px; margin-right: 5px;">
                    <div style="background-color: #a3b9c7; height: 10px; width: 10px; float: left; margin-top: 8px;
                        margin-right: 3px;">
                    </div>
                    <asp:Label ID="lblpri6" Text="SD+OPT" runat="server"></asp:Label>
                </div>
                <div style="float: left; line-height: 25px; margin-right: 5px;">
                    <div style="background-color: rgb(195, 12, 12); height: 10px; width: 10px; float: left;
                        margin-top: 8px; margin-right: 3px;">
                    </div>
                    <asp:Label ID="lblpri7" Text="Upload" runat="server"></asp:Label>
                </div>
            </div>
            <input type="button" id="btncancel" class="button" value="&times;" onclick="return btncloseletype();" />
            <div style="float: right; margin: 6px;">
                <i class="tb_Btn icon-upload-1" id="lettypeupload" onclick="return OnLoadUploadPhoto(this,'L');"
                    title="Upload Document" style="margin-left: 2px; line-height: 100%; font-size: 16px;
                    padding-top: 2px;"></i><i class="tb_Btn icon-download" id="lettypedownload" onclick="return OnLoadDownloadPhoto(this);"
                        title="Download Document" style="margin-left: 9px; line-height: 100%; font-size: 16px;
                        padding-top: 2px;"></i>
            </div>
        </div>
        <div class="pop-body grd" style="height: 425px; border-bottom: 1px solid #cacaca;">
            <div id="divchecklistopcorp" class="CompanyCheckLists" style="height: 100%; float: left;
                overflow: auto; width: 200px; border-right: 1px solid #caccac;">
                <ul id="ul_chk_list1">
                </ul>
            </div>
            <div style="overflow: auto; height: 100%; width: 550px;">
                <table id="gvchklistdtlsopcorp" class="grid CompanyCheckListsgrid" cellpadding="0"
                    cellspacing="0" width="100%">
                    <thead>
                        <tr>
                            <th>
                                S.No
                            </th>
                            <th>
                                UMR NO
                            </th>
                            <th>
                                Doc Name
                            </th>
                            <th>
                                Check List Name
                            </th>
                            <th>
                                Create By
                            </th>
                            <th>
                                Create Dt
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                    </tbody>
                </table>
            </div>
        </div>
        <div align="center" style="padding: 8px 5px">
            <input type="button" onclick="MaintainChkListIdOPCorp();" class="button" value="Ok" />
        </div>
    </div>
</div>
<div class="masking" id="divimagescmp">
    <div class="cmask">
    </div>
    <div class="clientpopup" style="width: 800px; height: 492px; margin-left: -400px;
        margin-top: -246px;">
        <div class="pop-header">
            <h1>
                Image View
            </h1>
            <asp:Button buttonaction="cancelButton" ID="Button6" runat="server" CssClass="cbutton"
                Text="&times;" OnClientClick="return closefiles();" />
        </div>
        <div class="pop-body grd" style="height: 455px;">
            <div id="gallery" class="divscroll">
            </div>
            <div class="divscroll" id="divimage">
            </div>
            <div class="clr">
            </div>
        </div>
    </div>
</div>
<div class="masking" id="divmultiinspopup">
    <div class="cmask">
    </div>
    <div class="clientpopup" style="width: 1236px; height: 473px; margin-left: -618px;
        margin-top: -189px;">
        <div class="pop-header">
            <h1>
                Insurance
            </h1>
            <asp:Button buttonaction="cancelButton" ID="Button4" runat="server" CssClass="cbutton"
                Text="&times;" OnClientClick="return closeinstab();" />
        </div>
        <div class="panel-divW grd divscroll" style="height: 174px">
            <table id="tblmultiins" border="0" cellpadding="0" cellspacing="0" class="jtblgrid">
                <thead>
                    <tr>
                        <th>
                            Manage
                        </th>
                        <th>
                            S.No
                        </th>
                        <th>
                            Ins Level
                        </th>
                        <th>
                            Payer/sponsor
                        </th>
                        <th>
                            Ins Name
                        </th>
                        <th>
                            Plan Name
                        </th>
                        <th>
                            Ins(%)
                        </th>
                        <th>
                            Patient(%)
                        </th>
                        <th>
                            ID Proof
                        </th>
                        <th>
                            ID Proof value
                        </th>
                        <th>
                            Policy#
                        </th>
                        <th>
                            Reference#
                        </th>
                        <th>
                            Member Id
                        </th>
                        <th>
                            Group Id
                        </th>
                        <th>
                            Relation
                        </th>
                        <th>
                            Exp Dt
                        </th>
                        <th>
                            First Name
                        </th>
                        <th>
                            Middle Name
                        </th>
                        <th>
                            Last Name
                        </th>
                        <th>
                            Gender
                        </th>
                        <th>
                            DOB
                        </th>
                        <th>
                            Name
                        </th>
                        <th>
                            Address 1
                        </th>
                        <th>
                            Address 2
                        </th>
                        <th>
                            Area
                        </th>
                        <th>
                            City
                        </th>
                        <th>
                            State
                        </th>
                        <th>
                            Country
                        </th>
                        <th>
                            District
                        </th>
                        <th>
                            ZIP
                        </th>
                        <th>
                            Phone#
                        </th>
                        <th>
                            Mobile#
                        </th>
                        <th>
                            Emp Name
                        </th>
                        <th>
                            Emp Location
                        </th>
                    </tr>
                </thead>
                <tbody>
                </tbody>
            </table>
        </div>
        <div class="panel-div">
            <div class="panel-body grd divscroll" id="divinsurancecontrols">
                <div style="float: left; width: 40%; height: 218px; padding: 5px; border-right: 1px solid #cacaca;">
                    <table id="tblcompadd" width="100%" border="0" cellpadding="0" cellspacing="0" class="FormsCtrl">
                        <tr>
                            <td align="left">
                                <label class="ellip">
                                    Payer/sponsor</label>
                            </td>
                            <td align="left" colspan="3">
                                <div style="width: 100%;">
                                    <GUC1:GenericUC ID="ucinsname" runat="server" CallbackFn="OnInsName" OnBlurRequired="true" />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td align="left">
                                <label class="ellip">
                                    Ins Name</label>
                            </td>
                            <td colspan="3">
                                <div class="btntxt" style="width: 100%;">
                                    <asp:TextBox ID="txtinsname" placeholder="Ins Name" onblur="OnNullValue(this);" runat="server"></asp:TextBox>
                                    <div id="divBtnSrc" class="txtbtn">
                                        <input type="button" id="BtnSrvSearch" value="&nbsp;" class="tb_Btn searchbtn" onclick="return BindAuthList(this);" />
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td align="left">
                                <label class="ellip">
                                    Plan Name</label>
                            </td>
                            <td align="left" colspan="2" name="last">
                                <input type="text" id="txtplanname" onblur="this.value=TitleCase1(this);" placeholder="Plan Name"
                                    style="width: 100%;" />
                            </td>
                            <td align="left">
                                <input type="text" id="txtinsper" onkeypress="return chkNumeric(event);" onkeyup="ChkCmpPerc(this);"
                                    onblur="SetcmpPerc(this);" placeholder="Org Perc" style="width: 48.5%; text-align: right;" />
                                <input type="text" id="txtpatper" onkeypress="return chkNumeric(event);" onkeyup="ChkCmpPerc(this);"
                                    onblur="SetcmpPerc(this);" placeholder="Emp Perc" style="width: 49.1%; text-align: right;" />
                            </td>
                        </tr>
                        <tr>
                            <td align="left" width="17%">
                                <label class="ellip" title="Relationship of the patient to policy holder">
                                    Relation</label>
                            </td>
                            <td align="left" width="33%">
                                <asp:DropDownList ID="ddlinsrelations" runat="server" Width="100%" onchange="selectRelationinsurance();"
                                    onblur="return OnEmergeNullValue(this);">
                                </asp:DropDownList>
                            </td>
                            <td>
                                <label class="ellip">
                                    Ins Level</label>
                            </td>
                            <td>
                                <select id="ddlinslevel" onchange="selectlevel();" style="width: 100%;" runat="server">
                                    <%--                                    <option value="0">Select</option>
                                    <option value="1">Primary</option>
                                    <option value="2">Secondary</option>
                                    <option value="3">Territory</option>
                                    <option value="4">Fourth</option>
                                    <option value="5">Fifth</option>--%>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td align="left">
                                <label class="ellip">
                                    Employer Name</label>
                            </td>
                            <td align="left" colspan="3">
                                <input type="text" onblur="this.value=TitleCase1(this);" placeholder="Employer Name"
                                    id="txtinsempname" style="width: 100%;" />
                            </td>
                        </tr>
                        <tr>
                            <td align="left">
                                <label class="ellip">
                                    Employer Location</label>
                            </td>
                            <td align="left">
                                <input type="text" onblur="this.value=TitleCase1(this);" placeholder="Employer Location"
                                    id="txtinsemploc" style="width: 100%;" />
                            </td>
                            <td align="left">
                                Policy#
                            </td>
                            <td align="left">
                                <input type="text" id="txtplociyno" onblur="this.value=TitleCase1(this); samepolicynochk(this);"
                                    placeholder="Policy#" style="width: 100%;" />
                            </td>
                        </tr>
                        <tr>
                            <td align="left">
                                <label class="ellip">
                                    Member Id</label>
                            </td>
                            <td align="left">
                                <input type="text" onblur="this.value=TitleCase1(this);" placeholder="Member Id"
                                    id="txtmemid" />
                            </td>
                            <td align="left">
                                <label class="ellip">
                                    Group Id</label>
                            </td>
                            <td align="left">
                                <input type="text" onblur="this.value=TitleCase1(this);" id="txtgrpid" placeholder="Group Id"
                                    style="width: 100%;" />
                            </td>
                        </tr>
                        <tr>
                            <td align="left">
                                Reference#
                            </td>
                            <td align="left">
                                <input type="text" id="txtReferenceno" onblur="this.value=TitleCase1(this);" placeholder="Reference#"
                                    style="width: 100%;" />
                            </td>
                        </tr>
                        <tr>
                            <td align="left" name="ddl">
                                <asp:DropDownList ID="ddlproofid" onchange="Onchangeclearfields();" runat="server">
                                </asp:DropDownList>
                            </td>
                            <td align="left" name="last" colspan="4">
                                <asp:TextBox ID="txtpholssnno" runat="server" onblur="this.value=TitleCase1(this);"
                                    onpaste="return false;" onkeyup="return Idprofflength(this);" MaxLength="24"
                                    ToolTip="Enter Social Security Number" onchange="return selectchangeidproof();"></asp:TextBox>
                            </td>
                        </tr>
                    </table>
                </div>
                <div style="float: left; width: 28%; padding: 5px; height: 218px; border-right: 1px solid #cacaca;">
                    <table border="0" cellpadding="0" cellspacing="0" align="center" width="100%" class="FormsCtrl">
                        <tr>
                            <td colspan="4">
                                <h3>
                                    Card Holder Details</h3>
                            </td>
                        </tr>
                        <tr>
                            <td align="left">
                                <label class="ellip">
                                    First Name</label>
                            </td>
                            <td align="left" colspan="3">
                                <input type="text" id="txtinsfname" placeholder="First Name" autocomplte="off" onblur="OnNullValue(this);"
                                    onkeyup="this.value=TitleCase1(this); return SetDisplayName(this);" style="width: 100%;" />
                            </td>
                        </tr>
                        <tr>
                            <td align="left">
                                <label class="ellip">
                                    Last Name</label>
                            </td>
                            <td align="left" colspan="3">
                                <input type="text" id="txtinslname" placeholder="Last Name" onblur="OnNullValue(this);"
                                    onkeyup="this.value=TitleCase1(this); return SetDisplayName(this);" style="width: 100%;" />
                            </td>
                        </tr>
                        <tr>
                            <td align="left">
                                <label class="ellip">
                                    Middle Name</label>
                            </td>
                            <td align="left" colspan="3">
                                <input type="text" id="txtinsmname" onblur="this.value=TitleCase1(this);" placeholder="Middle Name"
                                    onkeyup="this.value=TitleCase1(this); return SetDisplayName(this);" style="width: 100%;" />
                            </td>
                        </tr>
                        <tr>
                            <td align="left">
                                <label class="ellip">
                                    Display Name</label>
                            </td>
                            <td align="left" colspan="3">
                                <asp:TextBox ID="TextBox1" Enabled="false" placeholder="Display Name" onfocus=""
                                    runat="server" MaxLength="25" onkeyup="this.value=TitleCase1(this);" Width="100%"
                                    onblur="return OnEmergeNullValue(this);" onkeypress="return OnlyCharecters(event);"
                                    autocomplete="off"></asp:TextBox>
                            </td>
                        </tr>
                        <tr>
                            <td align="left">
                                Gender
                            </td>
                            <td align="left">
                                <asp:DropDownList ID="ddlGender" runat="server" ToolTip="Select Gender" Enabled="true">
                                </asp:DropDownList>
                            </td>
                            <td align="left">
                                DOB
                            </td>
                            <td align="left">
                                <input type="text" id="txtinsdob" placeholder="DD-MMM-YYYY" onblur="chkinsexpdtformat(this);" />
                            </td>
                        </tr>
                        <tr>
                            <td width="16%">
                                <label class="ellip">
                                    Expiry Dt</label>
                            </td>
                            <td align="left" width="34%">
                                <input type="text" id="txtinsexpdt" placeholder="DD-MMM-YYYY" style="width: 100%;"
                                    onblur="chkinsexpdtformat(this);" />
                            </td>
                        </tr>
                    </table>
                </div>
                <div style="float: left; width: 31%; padding: 0px 5px;">
                    <div style="height: 166px;">
                        <table border="0" cellpadding="0" cellspacing="0" align="center" width="100%" class="FormsCtrl">
                            <tr id="traddrow">
                                <td colspan="2">
                                    <asp:CheckBox ID="chkPerAsPres" onClick="return PatientInfoChecked(this);" runat="server"
                                        Font-Bold="true" Text="Same As Patient Info" />
                                </td>
                            </tr>
                            <tr>
                                <td align="left">
                                    Address1
                                </td>
                                <td align="left" colspan="3">
                                    <asp:HiddenField ID="hdnaddress_id" runat="server" />
                                    <asp:HiddenField ID="hdnadrs_rev_no" runat="server" />
                                    <asp:TextBox ID="txtAddress1" placeholder="Address1" Width="100%" runat="server"
                                        onblur="this.value=TitleCaseupper(this);return OnEmergeNullValue(this);" MaxLength="64"
                                        autocomplete="off"></asp:TextBox>
                                </td>
                            </tr>
                            <tr>
                                <td align="left">
                                    Address2
                                </td>
                                <td align="left" colspan="3">
                                    <asp:TextBox ID="txtAddress2" Width="100%" placeholder="Address2" runat="server"
                                        onblur="this.value=TitleCaseupper(this);" MaxLength="64" autocomplete="off"></asp:TextBox>
                                </td>
                            </tr>
                            <tr>
                                <td align="left">
                                    Area
                                </td>
                                <td align="left">
                                    <GUC1:GenericUC ID="ucArea" runat="server" CallbackFn="OnAreaSelection1" />
                                </td>
                                <td align="left">
                                    City
                                </td>
                                <td align="left">
                                    <asp:TextBox ID="ucCity" runat="server" MaxLength="64" onfocus="return OnLostFoucs(this);"
                                        Enabled="false"></asp:TextBox>
                                    <asp:HiddenField ID="HiddenField1" runat="server" />
                                </td>
                            </tr>
                            <tr>
                                <td align="left">
                                    District
                                </td>
                                <td align="left">
                                    <asp:TextBox ID="txtdistrict" runat="server" MaxLength="64" Enabled="false"></asp:TextBox>
                                </td>
                                <td align="left">
                                    State
                                </td>
                                <td align="left">
                                    <asp:TextBox ID="ucState" runat="server" MaxLength="64" onfocus="return OnLostFoucs(this);"
                                        Enabled="false"></asp:TextBox>
                                    <asp:HiddenField ID="HiddenField2" runat="server" />
                                </td>
                            </tr>
                            <tr>
                                <td align="left">
                                    Country
                                </td>
                                <td align="left">
                                    <asp:TextBox ID="ucCountry" runat="server" MaxLength="64" onfocus="return OnLostFoucs(this);"
                                        Enabled="false"></asp:TextBox>
                                    <asp:HiddenField ID="HiddenField3" runat="server" />
                                </td>
                                <td align="left">
                                    Pin/Zip
                                </td>
                                <td align="left">
                                    <asp:TextBox ID="txtPin" runat="server" placeholder="Pin/Zip" onkeypress="return chkNumeric(event);"
                                        MaxLength="8" onblur="Validatephinzipnumber();" autocomplete="off"></asp:TextBox>
                                    <asp:HiddenField ID="hdnpincode" runat="server" />
                                    <%--<ajaxtoolkit:autocompleteextender id="AutoCompleteExtender2" servicemethod="GetAutoComp_Pincode"
                                        minimumprefixlength="3" servicepath="~/AutoCompleteService.asmx" completioninterval="100"
                                        usecontextkey="true" enablecaching="false" completionsetcount="10" completionlistitemcssclass="autocomplete_listItem"
                                        completionlistcssclass="autocomplete_completionListElement" completionlisthighlighteditemcssclass="autocomplete_highlightedListItem"
                                        targetcontrolid="txtPin" contextkey="PIN_CODE" onclientitemselected="Onpincodeselection1"
                                        runat="server" firstrowselected="false">
                                    </ajaxtoolkit:autocompleteextender>--%>
                                </td>
                            </tr>
                            <tr>
                                <td align="left">
                                    Phone#
                                </td>
                                <td align="left">
                                    <asp:TextBox ID="txtPhone" runat="server" placeholder="Phone#" AutoCompleteType="Disabled"
                                        MaxLength="15" onblur="return Validatephonenumber();" onkeypress="return CheckNumericphno(event);"></asp:TextBox>
                                </td>
                                <td align="left">
                                    <asp:Label ID="lblmobileno" runat="server" Text="Mobile#"></asp:Label>
                                </td>
                                <td align="left">
                                    <asp:TextBox ID="txtmobileno" runat="server" placeholder="Mobile#" Width="100%" autocomplete="off"
                                        onblur="return OnEmergeNullValue(this);" onkeypress="return chkNumeric(event);"
                                        onchange="return CheckMblNo(this);" onpaste="return false;"></asp:TextBox>
                                </td>
                            </tr>
                        </table>
                    </div>
                    <div style="background: #f9f9f9; padding: 5px;">
                        <input type="button" class="button" id="imgbtnAdd" value="Add" style="float: left;"
                            onclick="AddInsuranceData();" />
                        <input type="button" id="imgBtnUpdate" class="button" style="display: none;" value="Update"
                            onclick="return AddInsuranceData();" />
                        <input type="button" id="btnclear" class="button" value="Clear" style="margin-left: 5px !important"
                            onclick="return ClearInsDetails();" />
                    </div>
                </div>
            </div>
        </div>
        <div align="center" style="padding: 8px 5px">
            <input type="button" id="btnsaveinsurancedtls" class="button" value="Save & Close"
                onclick="onsavevalidation()" />
        </div>
        <div id="divGridPop" width="600px" style="display: none" runat="server" class="masking">
            <div class="cmask">
            </div>
            <div class="clientpopup" style="width: 700px; height: 403px; margin-left: -350px;
                margin-top: -200px;">
                <div class="pop-header">
                    <h1>
                        Insurance Name
                    </h1>
                    <input type="button" id="Button5" class="button" value="&times;" onclick="return btnclose12();" />
                </div>
                <div class="pop-body grd" style="height: 366px;">
                    <div id="divpreauthdata" style="height: 330px; overflow: auto;">
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<script type="text/javascript">    _.templateSettings = { evaluate: /\{\{(.+?)\}\}/g,
        interpolate: /\{\{=(.+?)\}\}/g, escape: /\{\{-(.+?)\}\}/g
    }; </script>
<script type="text/html" id="tbodyins"> {{ _.each(_dataSourceDis,function(item,key,list){ }} 
    <tr class="{{=(key%2==0?'gridAlternaterow':'gridrow')}}" data-row="{{=key+1}}" > 
    <input type="hidden" id="hdninspatid-{{=key}}" value="{{=item.PATIENT_INS_ID}}"/>
    <input type="hidden" id="hdncmpid-{{=key}}" value="{{=item.cmp_id}}"/>
    <input type="hidden" id="hdntownid-{{=key}}" value="{{=item.TownId}}"/>
    <input type="hidden" id="hdngenderid-{{=key}}" value="{{=item.GenderId}}"/>
    <input type="hidden" id="hdnrelationid-{{=key}}" value="{{=item.RelationId}}"/>
    <input type="hidden" id="hdninslevelid-{{=key}}" value="{{=item.InslevelId}}"/>
    <input type="hidden" id="hdncityid-{{=key}}" value="{{=item.InslevelId}}"/>
    <input type="hidden" id="hdncountryid-{{=key}}" value="{{=item.InslevelId}}"/>
    <input type="hidden" id="hdndistrictid-{{=key}}" value="{{=item.District_id}}"/> 
    <input type="hidden" id="hdnstateid-{{=key}}" value="{{=item.InslevelId}}"/>
    <input type="hidden" id="hdnID_PROOF_ID-{{=key}}" value="{{=item.ID_PROOF_ID}}"/>
     <td id="imagetd-{{=key}}" style=" text-align: left;min-width: 80px;"> 
    <a href='#' title='Edit Record' class='gico gEditRecord' id="btnedit" onclick='EditClick(this);'><img src='../../../Assets/Grid_Icons/edit_icon.png'></a> 
    </td> 
    <td> <LABEL id="lblSNo-{{=key}}" >{{=item.Sno}}</LABEL></td> 
    <td> <LABEL id="lblinslevel-{{=key}}" class="Aright">{{=item.Inslevel}}</LABEL></td> 
    <td> <LABEL id="lblsponsername-{{=key}}" class="Aright">{{=item.cmp_name}}</LABEL> </td> 
    <td> <LABEL id="lblinsname-{{=key}}" class="Aright">{{=item.ins_name}}</LABEL> </td> 
    <td> <LABEL id="lblplanname-{{=key}}" class="Aright"> {{=item.PlanName}}</LABEL></td> 
    <td> <LABEL id="lblinsperc-{{=key}}" class="Aright">{{=item.InsPerc}}</LABEL> </td> 
    <td> <LABEL id="lblpatperc-{{=key}}" class="Aright" >{{=item.PatPerc}}</LABEL> </td> 
    <td> <LABEL id="lblidProf-{{=key}}" class="Aright" >{{=item.idprof}} </LABEL></td> 
    <td> <LABEL id="lblpolicyholder-{{=key}}" class="Aright" >{{=item.PolicyHolder}} </LABEL></td> 
    <td> <LABEL id="lblpolicyno-{{=key}}" class="Aright" > {{=item.Policyno}}</LABEL></td> 
    <td> <LABEL id="lblReferenceno-{{=key}}" class="Aright" > {{=item.Referenceno}}</LABEL></td> 
    <td> <LABEL id="lblmemberid-{{=key}}" class="Aright" >{{=item.Memberid}}</LABEL> </td> 
    <td> <LABEL id="lblgroupid-{{=key}}" class="Aright" >{{=item.GroupId}}</LABEL> </td> 
    <td> <LABEL id="lblrelation-{{=key}}" class="Aright" > {{=item.Relation}}</LABEL></td> 
    <td> <LABEL id="lblexpdt-{{=key}}" class="Aright" >{{=item.ExpDt}}</LABEL> </td> 
    <td> <LABEL id="lblfirstname-{{=key}}" class="Aright" > {{=item.FirstName}}</LABEL></td> 
    <td> <LABEL id="lblmidname-{{=key}}" class="Aright" >{{=item.MiddleName}}</LABEL> </td> 
    <td> <LABEL id="lbllastname-{{=key}}" class="Aright" >{{=item.LastName}}</LABEL> </td> 
    <td> <LABEL id="lblgender-{{=key}}" class="Aright" >{{=item.Gender}}</LABEL> </td> 
    <td> <LABEL id="lbldob-{{=key}}" class="Aright" >{{=item.DOB}}</LABEL> </td> 
    <td> <LABEL id="lblaname-{{=key}}" class="Aright" >{{=item.AName}}</LABEL> </td> 
    <td> <LABEL id="lbladdress1-{{=key}}" class="Aright" > {{=item.Address1}}</LABEL></td> 
    <td> <LABEL id="lbladdress2-{{=key}}" class="Aright" > {{=item.Address2}}</LABEL></td> 
    <td> <LABEL id="lbltown-{{=key}}" class="Aright" >{{=item.Town}}</LABEL> </td> 
    <td> <LABEL id="lblcity-{{=key}}" class="Aright" >{{=item.City}}</LABEL> </td> 
    <td> <LABEL id="lblstate-{{=key}}" class="Aright" >{{=item.State}}</LABEL> </td> 
    <td> <LABEL id="lblcountry-{{=key}}" class="Aright" >{{=item.Country}}</LABEL> </td> 
    <td> <LABEL id="lbldistrict-{{=key}}" class="Aright" >{{=item.District_name}} </LABEL></td>
    <td> <LABEL id="lblzip-{{=key}}" class="Aright" >{{=item.ZIP}}</LABEL> </td> 
    <td> <LABEL id="lblphoneno-{{=key}}" class="Aright" >{{=item.Phoneno}}</LABEL> </td> 
    <td> <LABEL id="lblmobileno-{{=key}}" class="Aright">{{=item.Mobileno}}</LABEL> </td> 
    <td> <LABEL id="lblempname-{{=key}}" class="Aright"> {{=item.EmpName}}</LABEL></td> 
    <td> <LABEL id="lblemploc-{{=key}}" class="Aright"  >{{=item.EmpLocation}} </LABEL></td> 
    </tr> {{ }) }} </script>
<asp:HiddenField ID="hdnrefletterreq" runat="server" />
<asp:HiddenField ID="hdnEmpPer" runat="server" />
<asp:HiddenField ID="hdnOrgPer" runat="server" />
<asp:HiddenField ID="hdnarrdocid" runat="server" />
<asp:HiddenField ID="hdnarrdocname" runat="server" />
<asp:HiddenField ID="hdnarrdoctcd" runat="server" />
<asp:HiddenField ID="hdnarrdeptid" runat="server" />
<asp:HiddenField ID="hdnarrdeptname" runat="server" />
<asp:HiddenField ID="hdnQucikCmpny" runat="server" />
<asp:HiddenField ID="hdnQucikRefltr" runat="server" />
<asp:HiddenField ID="hdncmpcons" runat="server" />
<asp:HiddenField ID="hdncmpconsdone" runat="server" />
<asp:HiddenField ID="hdnIsRefLetNoExistFlag" runat="server" />
<asp:HiddenField ID="hdnDocName" runat="server" />
<asp:HiddenField ID="hdnEmppatTypeid" runat="server" />
<asp:HiddenField ID="hdnCorpColors" runat="server" />
<asp:HiddenField ID="hdnlimitpost" runat="server" />
<asp:HiddenField ID="hdncmpcreditamt" runat="server" />
<asp:HiddenField ID="hdnClientName" runat="server" />
<asp:HiddenField ID="hdneligiblewardreq" runat="server" />
<asp:HiddenField ID="hdnupdateindex" runat="server" />
<asp:HiddenField ID="hdnDisplayNameSetting" runat="server" />
<asp:HiddenField ID="hdninspatidsingle" runat="server" />
<asp:HiddenField ID="hdnCompanyOrgpercent" runat="server" />
<asp:HiddenField ID="hdnEmployeOrgpercent" runat="server" />
<asp:HiddenField ID="HiddenField5" runat="server" />
<asp:HiddenField ID="hdnEmplookup" runat="server" />
<asp:HiddenField ID="hbncondisamount" runat="server" />
