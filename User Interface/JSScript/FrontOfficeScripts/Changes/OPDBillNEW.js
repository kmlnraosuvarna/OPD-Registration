var ctrlcom = 'ctl00_ContentPlaceHolder1';
var stf = ''; var cnrul = ''; var eb = ''; var hc = ''; var mg = ''; var viewcmpds = '';
function onGetPatientBanner() {
    enablelookup();
    var form_name = $('#' + ctrlcom + '_ReceiptControl2_hdnDocName').val();
    if (form_name == 'OPQUICK' || form_name == 'Cons') {
        if (document.getElementById('' + ctrlcom + '_hdnconsultation_count_in_day').value == "True") {
            if (document.getElementById('ctl00_ContentPlaceHolder1_chk_old').checked == true) {
                document.getElementById('divcount').style.display = 'block';
            }
        }
    }
    if (document.getElementById('' + ctrlcom + '_chk_old').checked == true) {
        onCheck();
    }
    document.getElementById('' + ctrlcom + '_uccorporate_ddlPaymentBy').value = 0;
    $('#banercolourcorp').css('background', '#' + "" + '');
    if (document.getElementById('' + ctrlcom + '_pre_regi').value == 1) {
        if (document.getElementById('' + ctrlcom + '_chk_old').checked && document.getElementById('' + ctrlcom + '_chk_old').disabled == true) {
            document.getElementById('' + ctrlcom + '_chk_old').disabled = false;
        }
    }
    document.getElementById('' + ctrlcom + '_UCServices_rbtnSrvsAndCons_0').checked = true;
    AccessAddDisableAttributes();
    if (document.getElementById('' + ctrlcom + '_chk_old').checked == true) {

        if ($('[id*=hdnallowtariffslcn]').val().toLowerCase() == 'true') {
            $('.allowMTariff').show();
        } else {
            $('.allowMTariff').hide();
        }


        document.getElementById('' + ctrlcom + '_chkIsRegNotReq').disabled = true; /* added by pushkar */
        ApplyStylesIsRegistredCheck();
        OpConClear();
        $('#' + ctrlcom + '_ReceiptControl2_txtcashAmt').val(0);
        document.getElementById('' + ctrlcom + '_UCServices_hdnReg_fee').value = '0';
        document.getElementById('' + ctrlcom + '_hdnispatientbaneer').value = 'Y';
        document.getElementById('' + ctrlcom + '_ddlPatientType').value = '1';
        $('#' + ctrlcom + '_emppnl').hide();
        clearcompanyinfo();
        document.getElementById('' + ctrlcom + '_chk_old').checked = true;
        document.getElementById('divRegOne').style.display = 'none';
        document.getElementById('divRegTwo').style.display = 'none';
        document.getElementById('divBanner').style.display = 'block';
        document.getElementById('divAddress').style.display = 'none';
        document.getElementById('divContactDtls').style.display = 'none';

        if (document.getElementById('' + ctrlcom + '_UCServices_rbtnSrvsAndCons_0').checked == true) {
            document.getElementById('divreq').style.display = 'block';
            document.getElementById('divRequisitions').style.display = 'block';
            document.getElementById('divOrderInvestigations').style.display = 'none';
            document.getElementById('' + ctrlcom + '_UCServices_hdnSrvFormName').value = 'Cons';
            document.getElementById('' + ctrlcom + '_umrPatientDetails_hdnDocName').value = "Cons";
            document.getElementById('' + ctrlcom + '_umrPatientDetails_hdnFormName').value = "Cons";
            document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnDocName').value = "Cons";
        }
        else if (document.getElementById('' + ctrlcom + '_UCServices_rbtnSrvsAndCons_1').checked == true) {
            document.getElementById('divreq').style.display = 'block';
            document.getElementById('divOrderInvestigations').style.display = 'block';
            document.getElementById('divRequisitions').style.display = 'none';
            document.getElementById('' + ctrlcom + '_UCServices_hdnSrvFormName').value = 'OP';
            document.getElementById('' + ctrlcom + '_umrPatientDetails_hdnDocName').value = "OP";
            document.getElementById('' + ctrlcom + '_umrPatientDetails_hdnFormName').value = "OP";
            document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnDocName').value = "OP";
        }
        else {
            document.getElementById('divreq').style.display = 'none';
            document.getElementById('divOrderInvestigations').style.display = 'none';
            document.getElementById('divRequisitions').style.display = 'none';
            document.getElementById('' + ctrlcom + '_UCServices_hdnSrvFormName').value = 'OP';
            document.getElementById('' + ctrlcom + '_umrPatientDetails_hdnDocName').value = "OP";
            document.getElementById('' + ctrlcom + '_umrPatientDetails_hdnFormName').value = "OP";
            document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnDocName').value = "OP";
        }


        document.getElementById('divRegCorporate').style.display = 'block';
        $('._opdquick.isold .reff-panelH').css("height", "200px");
        $('#' + ctrlcom + '_Address1_chkDND').parent().hide();
        $('#' + ctrlcom + '_ChkMlcStatus').parent().hide();
        $('#' + ctrlcom + '_chkIsSenior').parent().hide();
        document.getElementById('' + ctrlcom + '_ChkMlcStatus').style.display = 'none';
        document.getElementById('' + ctrlcom + '_chkIsSenior').style.display = 'none';
        $('#ptype-flag').removeClass();
        $('#ptype-flag').addClass('ptype-flag');
        document.getElementById('' + ctrlcom + '_EmployerInfo1_hdnOPDBlock').value = '';
        document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnOPDState').value = 'N';
        document.getElementById('lnkBtnHistory').style.display = 'block';
        if (document.getElementById('' + ctrlcom + '_umrPatientDetails_Umrlookup_txtSearchControl').value == '') {
            $('#' + ctrlcom + '_umrPatientDetails_Umrlookup_txtSearchControl').addClass('red');
        }
        else {
            $('#' + ctrlcom + '_umrPatientDetails_Umrlookup_txtSearchControl').removeClass('red');
        }
        $('#' + ctrlcom + '_ucReferal_ddlreferral').removeClass('red');
        document.getElementById('' + ctrlcom + '_umrPatientDetails_Umrlookup_txtSearchControl').focus();
        suvUtils.setStorage("ED", "OPBillClientSide.aspx");
        extendedDisplay.setStructure([
                                { label: "Umr No           :", value: $('#' + ctrlcom + '_umrPatientDetails_Umrlookup_txtSearchControl').val() },
                                { label: "Patient Name     :", value: "" },
                                { label: "Mobile No       :", value: "" },
                                { label: "Gender/Age       :", value: "" },
                                { label: "Consultant Name      :", value: "" },
                                { label: "SERVICES", value: $("#dvGrid").html() },
                                { label: "Transactions", value: "" },
                           ]);
        onExtendedGrid();

    }
    else {
        document.getElementById('' + ctrlcom + '_chkIsRegNotReq').disabled = false; /* added by pushkar */
        document.getElementById('' + ctrlcom + '_hdnispatientbaneer').value = 'N';
        document.getElementById('' + ctrlcom + '_chkisold').checked = false;
        document.getElementById('' + ctrlcom + '_chkisold').disabled = false;
        ApplyStylesIsRegistredCheck(); EnableDisableControls(false);

        OpConClear(); Clearpopup();

        $('#' + ctrlcom + '_ddlTitle').val($('#' + ctrlcom + '_hdntitle').val());
        SelectGender1(ctl00_ContentPlaceHolder1_ddlTitle);
        arrServiceIds = new Array();
        if (document.getElementById('' + ctrlcom + '_UCServices_hdnallowconsservice').value.toUpperCase() == "TRUE") {
            AllowAdminCharges();
        }
        var reg_type = $('#' + ctrlcom + '_hdnregtypemain').val();
        if (reg_type == undefined || reg_type == null || reg_type == '') { reg_type = 2; }

        $('#' + ctrlcom + '_ddlRegType').val(reg_type);
        // selectRegType('ctl00_ContentPlaceHolder1_ddlRegType'); // commented by rama bcz it is already clling in Clearpopup()*/
        document.getElementById('divRegOne').style.display = 'block';
        document.getElementById('divRegTwo').style.display = 'block';
        document.getElementById('divBanner').style.display = 'none';
        document.getElementById('divreq').style.display = 'none';
        document.getElementById('divAddress').style.display = 'block';
        document.getElementById('divContactDtls').style.display = 'none';
        document.getElementById('divRequisitions').style.display = 'none';
        document.getElementById('divRegCorporate').style.display = 'none';
        $('._opdquick .reff-panelH,.reg-contact-body').css("height", "162px")
        document.getElementById('divOrderInvestigations').style.display = 'none';
        $('#' + ctrlcom + '_Address1_chkDND').parent().show();
        $('#' + ctrlcom + '_ChkMlcStatus').parent().show();
        $('#' + ctrlcom + '_chkIsSenior').parent().show();
        $('#' + ctrlcom + '_ChkMlcStatus').css('display', 'block');
        $('#' + ctrlcom + '_chkIsSenior').css('display', 'block');
        document.getElementById('' + ctrlcom + '_UCServices_hdnSrvFormName').value = 'OPQUICK';
        document.getElementById('' + ctrlcom + '_umrPatientDetails_hdnDocName').value = "OPQUICK";
        document.getElementById('' + ctrlcom + '_umrPatientDetails_hdnFormName').value = "OP";
        document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnDocName').value = "OPQUICK";
        document.getElementById('' + ctrlcom + '_EmployerInfo1_hdnOPDBlock').value = 'Y';
        document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnOPDState').value = 'Y';
        OnPageValidation();
        document.getElementById('lnkBtnHistory').style.display = 'none';
        suvUtils.setStorage("ED", "OPDBill.aspx");
        extendedDisplay.setStructure([
            { label: "Patient Name :", value: "" },
            { label: "DOB / Age(Y/M/D) :", value: "" },
            { label: "Gender :", value: "" },
            { label: "Nationality :", value: $('[id*=ddlNationality]').val() },
            { label: "Mobile# :", value: $('[id*=txtMobile1]').val() },
            { label: "Email :", value: $('[id*=txtemail]').val() },
            { label: "Registration Fee :", value: '' },
            { label: "Patient Type", value: "General" },
            { label: "Consultant :", value: "" },
            { label: "Address :", value: "" },
            { label: "SERVICES", value: $("#dvGrid").html() },
            { label: "Transactions", value: "" },
       ]);
        if ($('[id*=hdnallowtariffslcn]').val().toLowerCase() == 'true') {
            $('.allowMTariff').show();
        }
        else {
            $('.allowMTariff').show();
            if (document.getElementById('' + ctrlcom + '_UCServices_hbnisshowpatcatagery').value.toUpperCase() != "YES") {
                $('#' + ctrlcom + '_UCServices_ddlpatcat').prop('disabled', true);
                $('#' + ctrlcom + '_UCServices_ddltariff').prop('disabled', true);
            }

            if ($('[id*=hdnallowtariffslcn]').val().toLowerCase() != 'true') {
                var _tariff = '';
                _tariff += "<OPTION selected value='" + 0 + "'>" + '--select--' + "</OPTION>";
                $('#ctl00_ContentPlaceHolder1_UCServices_ddltariff').html(_tariff);
                $('#ctl00_ContentPlaceHolder1_UCServices_ddltariff').val(0);

                $('#' + ctrlcom + '_UCServices_ddltariff').prop('disabled', true);
                $('#ctl00_ContentPlaceHolder1_UCServices_ddltariff')[0].style.display = 'none';
                $('#ctl00_ContentPlaceHolder1_UCServices_lbltariff')[0].style.display = 'none';
            }
        }
    }
    document.getElementById('' + ctrlcom + '_chkEmpDue').checked = false;
    var umrgen = document.getElementById('' + ctrlcom + '_hdnumrgeneration').value;
    $('#' + ctrlcom + '_txtumrno').val(umrgen);
    document.getElementById('ctl00_ContentPlaceHolder1_UcDiagnosis_txtSearchControl').value = '';
    document.getElementById('ctl00_ContentPlaceHolder1_UcDiagnosis__hiddenText').value = '';
    document.getElementById('ctl00_ContentPlaceHolder1_UcDiagnosis__hiddenID').value = 0;
    document.getElementById('ctl00_ContentPlaceHolder1_hdnDiagnosis_Cd').value = '';
    
}


function showlettertype() {
    if (document.getElementById('' + ctrlcom + '_EmployerInfo1_EmployerControl1_txtSearchControl').value == "") {
        alert('Plese Select Company!');
        document.getElementById('' + ctrlcom + '_EmployerInfo1_EmployerControl1_txtSearchControl').focus();
        return false;
    }
    $("#Entitycontrol").show();
}
function ClosingEntityChart() {
    $("#Entitycontrol").hide();
}
var Compnayid = '0';
function OnCompany2(_d) {
    document.getElementById('' + ctrlcom + '_EmployerInfo1_EmployerControl1_txtSearchControl').value = _d["_lktext"];
    document.getElementById('' + ctrlcom + '_EmployerInfo1_EmployerControl1__hiddenText').value = _d["_lktext"];
    document.getElementById('' + ctrlcom + '_EmployerInfo1_uctpa__hiddenID').value = _d["COMPANY_ID"];
    document.getElementById('' + ctrlcom + '_hdnUCCorporates').value = _d["COMPANY_ID"];
    Compnayid = _d["COMPANY_ID"];
    $("table[id$=gvletters] tr [type=checkbox]:checked").each(function (e) { $(this).attr('checked', false); });
    $.ajax({
        type: "POST",
        url: "YRegistration.aspx/GetCorpConvertedPackageDetailsNew",
        data: "{'Compnayid': '" + Compnayid + "'}",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        error: function (jqXHR, textStatus, errorThrown) { },
        success: function (data) {
            if (data.d.length > 0) {
                BindGrid(data.d);
            }
        }
    });

}
function BindGrid(data) {
    $("table[id$=gvletters] tr:has(td)").each(function (e) {
        $(this).remove();
    });
    if (data.length > 0) {
        for (var i = 0; i < data.length; i++) {
            if (i == 0 && ctl00_ContentPlaceHolder1_gvletters.rows.length - 1 == 1) {
                $('table[id$=gvletters] tr:has(td)').each(function (e) {
                    $(this).closest('tr').find('input[type=hidden][id*=hidltrid]').val(data[i].LTYPE_ID);
                    $(this).closest('tr').find('[id*=lblletrnm]').text(data[i].LTYPE_NAME);
                });
            }
            else {
                fn_AddFilterRowRefLetter(data[i].LTYPE_ID, data[i].LTYPE_NAME, data[i].CHECKLIST_ID);
            }
        }
    }
}
var index = 0;
var rowColor = 0;
var controlindex = 0;
function fn_AddFilterRowRefLetter(LTYPE_ID, LTYPE_NAME, CHECKLIST_ID) {
    var gvWardServices = document.getElementById('' + ctrlcom + '_gvletters');
    var rowIndex = gvWardServices.rows.length;
    var checkRowIndex = rowIndex - 1;
    var gridindex = 1;
    var newRow = gvWardServices.insertRow(rowIndex);
    var newCell = newRow.insertCell(0);
    var chkletter = document.createElement('input'); chkletter.type = 'checkbox';
    if (LTYPE_ID == CHECKLIST_ID) {
        chkletter.checked = true;
    }
    else {
        chkletter.checked = false;
    }
    chkletter.id = 'chkletter' + index; chkletter.innerHTML = '';
    newCell.appendChild(chkletter);
    var lblletrnm = document.createElement('label'); lblletrnm.id = 'lblletrnm' + index;
    lblletrnm.innerHTML = LTYPE_NAME; newCell.appendChild(lblletrnm);
    var hidltrid = document.createElement('input');
    hidltrid.type = 'hidden'; hidltrid.id = 'hidltrid' + index;
    hidltrid.value = LTYPE_ID;
    newCell.appendChild(hidltrid);
}
function savelettertype() {
    var bids = '';
    var stpid = '';
    $("table[id*=gvletters] tr:has(td)").each(function (e) {
        if ($(this).closest('tr').find("input[type=checkbox][id*=chkletter]").is(':checked') == true) {
            stpid = $(this).closest('tr').find("input[type=hidden][id*=hidltrid]").val();
            bids += stpid + ',';
        }
    });
    document.getElementById('' + ctrlcom + '_hdnvariable').value = bids;
}
function Onchangeclearfields() {
    var ddlvalue = document.getElementById('' + ctrlcom + '_ddlproofid').value;
    if (ddlvalue == 1 || ddlvalue == 2 || ddlvalue == 3 || ddlvalue == 4 || ddlvalue == 5 || ddlvalue == 7 || ddlvalue == 8) {
        document.getElementById('' + ctrlcom + '_txtPassprotno').value = "";
        document.getElementById('' + ctrlcom + '_txtIssueDt').value = "";
        document.getElementById('' + ctrlcom + '_txtExpiryDt').value = "";
        document.getElementById('' + ctrlcom + '_txtissuedat').value = "";
    }
    else if (ddlvalue == 6) {
        document.getElementById('' + ctrlcom + '_txtSSN').value = "";
    }
    else {
    }
}
function onchangedisabled() {
    var ddlvalue = document.getElementById('' + ctrlcom + '_pre_regi').value;
    if (ddlvalue == "Pre Registration #") {
        document.getElementById('' + ctrlcom + '_ChkNBorn').disabled = true;
        document.getElementById('' + ctrlcom + '_chkisold').disabled = true;
        document.getElementById('' + ctrlcom + '_ddlRegType').disabled = true;
        document.getElementById('' + ctrlcom + '_UcFamilyReff_txtSearchControl').disabled = true;
        document.getElementById('lk_btn_ctl00_ContentPlaceHolder1_UcFamilyReff').disabled = true;
        document.getElementById('chkold').disabled = true;
    }
    else {
        document.getElementById('' + ctrlcom + '_ChkNBorn').disabled = false;
        document.getElementById('' + ctrlcom + '_chkisold').disabled = false;
        document.getElementById('' + ctrlcom + '_ddlRegType').disabled = false;
        document.getElementById('' + ctrlcom + '_UcFamilyReff_txtSearchControl').disabled = false;
        document.getElementById('lk_btn_ctl00_ContentPlaceHolder1_UcFamilyReff').disabled = false;
        document.getElementById('chkold').disabled = false;
    }
}
function OnVisaIssueAt(input) {
    document.getElementById('' + ctrlcom + '_ucIssuedAt_txtSearchControl').value = input._lktext;
    document.getElementById('' + ctrlcom + '_ucIssuedAt__hiddenText').value = input._lktext;
    if (input.ID == undefined) {
        document.getElementById('' + ctrlcom + '_ucIssuedAt__hiddenID').value = input.AREA_ID;
        document.getElementById('ctl00_ContentPlaceHolder1_ucIssuedAt_txtSearchControl').className = 'grey';
    }
    else {
        document.getElementById('' + ctrlcom + '_ucIssuedAt__hiddenID').value = input.ID;
        document.getElementById('ctl00_ContentPlaceHolder1_ucIssuedAt_txtSearchControl').className = 'grey';
    }

}


function ChkSpouse(obj) {
    if (obj.value != '' && document.getElementById('' + ctrlcom + '_ddlTitle').value == 3 && document.getElementById('' + ctrlcom + '_ddlResPerson').value == 2) {
        document.getElementById('' + ctrlcom + '_ddlMaritalStatus').value = 2;
    }
    else {
        document.getElementById('' + ctrlcom + '_ddlMaritalStatus').value = 0;
    }
}
function gridpage() {
    window.location = 'Registrations.aspx';
    return false;
}
function TabIndex() {
    //   $(":input").each(function (i) { $(this).attr('tabindex', i + 1); });
}
function OnLoadWebCam() {
    $('[id*=divWebCam]')[0].style.display = 'block';
    return false;
}
function ClosingWebCam() {
    $('[id*=divWebCam]')[0].style.display = 'none';
    return false;
}
function OnLoadUploadPhoto1() {
    $('[id*=divUploadPhoto]')[0].style.display = 'block';
    return false;
}
var _BaseString = '';
function UploadPic() {
    // generate the image data
    var canvas = document.getElementById("canvas");
    var dataURL = canvas.toDataURL("image/png");
    _BaseString = dataURL;
    // Sending the image data to Server
    $.ajax({
        type: 'POST',
        url: "/" + window.location.pathname.split('/')[1] + "/" + "Private/FrontOffice/FOUserControls/WebCamBaseImg.aspx",
        data: { imgBase64: dataURL },
        success: function () {
            $(".stoast").toastText("info", "Done, Picture Uploaded.", 5, 2);
            //                    alert("Done, Picture Uploaded.");
            $('.img').attr('src', _BaseString);
            $('[id*=divWebCam]')[0].style.display = "none";

            return false;
        }
    });
    return false;
}
function OnCapturePhoto() {
    webcam.capture();
    void (0);
    return false;
}
function NumCharsSpaceWithHiphen1(evt) {
    evt = (evt) ? evt : event;
    var charCode = (evt.charCode) ? evt.charCode : ((evt.keyCode) ? evt.keyCode : ((evt.which) ? evt.which : 0));
    if (charCode > 30 && (charCode < 65 || charCode > 90) && (charCode < 97 || charCode > 122) && (charCode < 48 || charCode > 57)) {
        if (charCode == 45) {
            evt.returnValue = true;
            return true;
        }
        if (charCode == 32) {
            evt.returnValue = true;
            return true;
        }
        if (charCode == 39) {
            evt.returnValue = true;
            return true;
        }
        if (charCode == 47) {
            evt.returnValue = true;
            return true;
        }
        evt.returnValue = false;
        return false;
    }
    return true;
}
function NumCharsSpaceWithHiphen2(evt) {
    evt = (evt) ? evt : event;
    var charCode = (evt.charCode) ? evt.charCode : ((evt.keyCode) ? evt.keyCode : ((evt.which) ? evt.which : 0));
    if (charCode > 30 && (charCode < 65 || charCode > 90) && (charCode < 97 || charCode > 122) && (charCode < 48 || charCode > 57)) {
        if (charCode == 46) {
            evt.returnValue = true;
            return true;
        }
        if (charCode == 32) {
            evt.returnValue = true;
            return true;
        }
        if (charCode == 39) {
            evt.returnValue = true;
            return true;
        }
        if (charCode == 47) {
            evt.returnValue = true;
            return true;
        }
        evt.returnValue = false;
        return false;
    }
    return true;
}




/*Renewal Expired Patients Lookup Selection Start*/
function OnUMR(input) {
    try {
        var Pat_id = 0;
        var umr_no = input._lktext;
        if (input.RESULT != null) /* umr_no auto completion */
        {
            Pat_id = input.RESULT.PATIENT_ID
        }
        else /* umr_no lookup selection */
        {
            Pat_id = input.PATIENT_ID
        }
        /* Umr_no Based Validation Data Getting Start */
        GetNonAsync("PatientRegistration.asmx/pat_banner_Valdatation_data",
        { umr_no: umr_no },
        function (jdata) {

            if (jdata.d[0] != null) {
                Patient_Valdations(jdata.d[0][0]);
                AssignUMRDetails(Pat_id);
            }
        }, function () {
            $(".stoast").toastText("warning", "Failed To Get Patient", 5, 3);
        });
        /*  Umr_no Based Validation Data Getting End */
    }
    catch (e) {
        $(".stoast").toastText("warning", "Failed To Get Patient", 5, 3);
    }

    return false;

}

function Patient_Valdations(input) {

    document.getElementById('' + ctrlcom + '_EmployerInfo1_hdnoldregtpaid').value = input.RESULT.REG_CMP_ID;
    document.getElementById('' + ctrlcom + '_EmployerInfo1_hdnregexpdt').value = input.RESULT.REG_EXPIRY_DATE;
    document.getElementById('' + ctrlcom + '_source_remarks').value = input.RESULT.VIP_NOTE;
    var obj = 'suvarna';
    var param = '';
    var obj = 'suvarna';
    var param = '';
    if ((input.RECORD_STATUS != 'A' && input.RECORD_STATUS != undefined && input.RECORD_STATUS != null && input.RECORD_STATUS != '') || input.PATIENT_STATUS == 'Cancel') {
        param = 'inactive';
        if (input.PATIENT_STATUS == 'Cancel') {
            ConfirmationRequiredForSaveWithParam_message(obj, param, 'This UMR_NO is Cancelled');
        }
        else {
            if (input.STATUS_REASON != undefined && input.STATUS_REASON != null && input.STATUS_REASON != '') {
                ConfirmationRequiredForSaveWithParam_message(obj, param, 'This UMR_NO is inactivated Reason for ' + input.STATUS_REASON + ' ');
            }
            else {
                ConfirmationRequiredForSaveWithParam_message(obj, param, 'This UMR_NO is inactivated');
            }
        }
        return false;
    }
    if (input.PATIENT_STATUS == 'Death') {
        param = 'pat-expiry';
        param = param + ',' + input.UMR_NO;
        param = param + ',' + input.PATIENT_ID;
        ConfirmationRequiredForSaveWithParam_message(obj, param, 'Expired Patient ');
        return false;
    }
    if (input.PATIENT_STATUS == 'Blocked') {
        param = 'blocked';
        param = param + ',' + input.UMR_NO;
        param = param + ',' + input.PATIENT_ID;
        ConfirmationRequiredForSaveWithParam_message(obj, param, 'This UMR_NO is BLOCKED ');
        return false;
    }
    if (input.ONBED_STATUS == 'Y')/* Admited Checking Based On Company Policy Setting */
    {
        $(".stoast").toastText("Info", "This Patient is already admitted", 5, 2);
    }
    if (input.PATIENT_STATUS == 'Merge') {
        param = 'merged';
        param = param + ',' + input.MERGE_UMR_NO;
        param = param + ',' + input.MERGE_PATIENT_ID;
        ConfirmationRequiredForSaveWithParam_message(obj, param, 'This UMR_NO is MERGED to ' + input.MERGE_UMR_NO + ' Do You Want To Continue With merged umr#' + input.MERGE_UMR_NO);
        return false;
    }

    $('#ptype-flag').removeClass();
    $('#ptype-flag').addClass('ptype-flag');
    if ((input.IS_SENIOR_CITIZEN == 'Y') && (input.IS_VIP.trim() == 'V' || input.IS_VIP.trim() == 'VV')) {
        if ((input.IS_SENIOR_CITIZEN == 'Y') && (input.IS_VIP.trim() == 'V')) {
            $(".stoast").toastText("Info", "SENIOR CITIZEN patient", 5, 2);
            $(".alertprompt").css('background-color', '#a0e458');
            $(".stoast").toastText("Info", "VIP patient<br>Source:" + input.VIP_SOURCE_NAME + "<br>Remarks:" + input.VIP_NOTE + "", 5, 2);
            $(".alertprompt").css('background-color', '#FC8107');
            $('#ptype-flag').addClass("p-sc-vip");
        }
        if ((input.IS_SENIOR_CITIZEN == 'Y') && (input.IS_VIP.trim() == 'VV')) {
            $(".stoast").toastText("Info", "SENIOR CITIZEN patient", 5, 2);
            $(".alertprompt").css('background-color', '#a0e458');
            $(".stoast").toastText("Info", "VVIP patient<br>Source:" + input.VIP_SOURCE_NAME + "<br>Remarks:" + input.VIP_NOTE + "", 5, 2);
            $(".alertprompt").css('background-color', '#FC8107');
            $('#ptype-flag').addClass("p-sc-vvip");
        }
    }
    else {
        if (input.IS_SENIOR_CITIZEN == 'Y') {
            $(".stoast").toastText("Info", "SENIOR CITIZEN patient", 5, 2);
            $(".alertprompt").css('background-color', '#a0e458');
            $('#ptype-flag').addClass("p-scitizen");
        }
        if (input.IS_VIP.trim() == 'V') {
            $(".stoast").toastText("Info", "VIP patient<br>Source:" + input.VIP_SOURCE_NAME + "<br>Remarks:" + input.VIP_NOTE + "", 5, 2);
            $(".alertprompt").css('background-color', '#FC8107');
            $('#ptype-flag').addClass("p-vip");
        }
        if (input.IS_VIP.trim() == 'VV') {
            $(".stoast").toastText("Info", "VVIP patient<br>Source:" + input.VIP_SOURCE_NAME + "<br>Remarks:" + input.VIP_NOTE + "", 5, 2);
            $(".alertprompt").css('background-color', '#FC8107');
            $('#ptype-flag').addClass("p-vvip");
        }
    }
    /* if (input.IS_OSP.trim() == 'Y') {
    param = 'OSP';
    ConfirmationRequiredForSaveWithParam_message(obj, param, 'OSP patient cannot do  Registration');
    return false;
    } */
    if (parseFloat(input.OUTSTANDING_DUE) > 0) {
        $(".stoast").toastText("Info", 'This UMR_NO ' + input.UMR_NO + ' having due of ' + input.OUTSTANDING_DUE + '/-Rs ', 5, 2);
    }
    if (parseFloat(input.REFUND) > 0) {
        $(".stoast").toastText("Info", 'This UMR_NO ' + input.UMR_NO + ' having Refundable amount of ' + input.REFUND + '/-Rs ', 5, 2);
    }
    if (input.VALIDITY_EXPIRING_DAYS == 'Y') {
        $(".stoast").toastText("Info", 'This Patient Corporate Referal Letter Validity Is Expiring ...', 5, 2);
    }

}

/*Getting Patient Details Based On Patient_id */
function AssignUMRDetails(patientid) {
    Clearpopup();
    if (patientid != null && patientid != undefined && patientid != '')
    { patientid = parseInt(patientid); }
    else { patientid = parseInt("0"); }
    GetAsync(
            "PatientRegistration.asmx/Get_Patient_Details",
            { _patID: patientid },
            function (jdata) {
                var RegExpDt = new Date(jdata.d[0].REG_EXPIRY_DT).format('dd-MMM-yyyy');
                var currDt = new Date().format("dd-MMM-yyyy");
                /* if (RegExpDt.length == 10) {
                var sedt = RegExpDt;
                var currDt = new Date().format("dd-MMM-yyyy");
                var result = CompareDates(sedt, currDt);
                if (result == "d1<d2") {
                $(".stoast").toastText("warning", "Patient Registration Validity is Over on,'" + RegExpDt + "' , need to register again.", 5, 3);
                return false;
                }
                }
                else if (RegExpDt.length == 11) {
                var sedt = RegExpDt;
                var currDt = new Date().format("dd-MMM-yyyy");
                var result = CompareDates(sedt, currDt);
                if (result == "d1<d2") {
                $(".stoast").toastText("warning", "Patient Registration Validity is Over on,'" + RegExpDt + "' , need to register again.", 5, 3);
                return false;
                }
                } */
                OnAssignIsOldData(jdata.d);
            },
            function (jqXHR, textStatus, errorThrown) {
                $(".stoast").toastText("warning", "Failed To Get Patient Details", 5, 3);
            });
    return true;
}
/*Checking Whether Patient Registration Expired Or Not */
function OnAssignIsOldData(input) {
    Colorschange();
    if (input[0].IS_SENIOR_CITIZEN == "Y") {
        document.getElementById('' + ctrlcom + '_chkIsSenior').checked = true;
    }
    else {
        document.getElementById('divSeniorCitizen').style.display = 'none';
    }
    document.getElementById('' + ctrlcom + '_source_remarks').value = input[0].VIP_NOTE;


    $('#ptype-flag').removeClass();
    $('#ptype-flag').addClass('ptype-flag');
    if ((input[0].IS_SENIOR_CITIZEN == 'Y') && (input[0].IS_VIP.trim() == 'V' || input[0].IS_VIP.trim() == 'VV')) {
        if ((input[0].IS_SENIOR_CITIZEN == 'Y') && (input[0].IS_VIP.trim() == 'V')) {
            $(".stoast").toastText("Info", "SENIOR CITIZEN patient", 5, 2);
            $(".alertprompt").css('background-color', '#a0e458');
            $(".stoast").toastText("Info", "VIP patient<br>Source:" + input[0].VIP_TYPE_NAME + "<br>Remarks:" + input[0].VIP_NOTE + "", 5, 2);
            $(".alertprompt").css('background-color', '#FC8107');
            $('#ptype-flag').addClass("p-sc-vip");
        }
        if ((input[0].IS_SENIOR_CITIZEN == 'Y') && (input[0].IS_VIP.trim() == 'VV')) {
            $(".stoast").toastText("Info", "SENIOR CITIZEN patient", 5, 2);
            $(".alertprompt").css('background-color', '#a0e458');
            $(".stoast").toastText("Info", "VVIP patient<br>Source:" + input[0].VIP_TYPE_NAME + "<br>Remarks:" + input[0].VIP_NOTE + "", 5, 2);
            $(".alertprompt").css('background-color', '#FC8107');
            $('#ptype-flag').addClass("p-sc-vvip");
        }
    }
    else {
        if (input[0].IS_SENIOR_CITIZEN == 'Y') {
            $(".stoast").toastText("Info", "SENIOR CITIZEN patient", 5, 2);
            $(".alertprompt").css('background-color', '#a0e458');
            $('#ptype-flag').addClass("p-scitizen");
        }
        if (input[0].IS_VIP.trim() == 'V') {
            $(".stoast").toastText("Info", "VIP patient<br>Source:" + input[0].VIP_TYPE_NAME + "<br>Remarks:" + input[0].VIP_NOTE + "", 5, 2);
            $(".alertprompt").css('background-color', '#FC8107');
            $('#ptype-flag').addClass("p-vip");
        }
        if (input[0].IS_VIP.trim() == 'VV') {
            $(".stoast").toastText("Info", "VVIP patient<br>Source:" + input[0].VIP_TYPE_NAME + "<br>Remarks:" + input[0].VIP_NOTE + "", 5, 2);
            $(".alertprompt").css('background-color', '#FC8107');
            $('#ptype-flag').addClass("p-vvip");
        }
    }


    var pattype = input[0].PATIENT_TYPE_ID;
    var renewal = document.getElementById('' + ctrlcom + '_chkisold');
    var isold = document.getElementById('' + ctrlcom + '_chkisold');
    var chkold = document.getElementById('' + ctrlcom + '_chk_old');
    //    if (chkold.checked == true) {
    //       // document.getElementById('' + ctrlcom + '_ddlRegType').value = 9;
    //    } else {
    //        document.getElementById('' + ctrlcom + '_ddlRegType').value = input[0].REG_TYPE_ID;
    //    }
    var patienttype = input[0].IS_VIP;
    if (patienttype == "V") {
        document.getElementById('' + ctrlcom + '_rbt_pat_type_1').checked = true;
    } else if (patienttype == "VV") {
        document.getElementById('' + ctrlcom + '_rbt_pat_type_2').checked = true;
    }
    else {
        document.getElementById('' + ctrlcom + '_rbt_pat_type_0').checked = true;
    }
    if (document.getElementById('' + ctrlcom + '_rbt_pat_type_1').checked == true || document.getElementById('' + ctrlcom + '_rbt_pat_type_2').checked == true) {
       // offVipDetails.style.display = "table-row";
        $(".offVipDetails").show();
    } else {
        //offVipDetails.style.display = "none";
        $(".offVipDetails").hide();
    }
    //        if (pattype == 2) {
    //            document.getElementById('' + ctrlcom + '_ddlRegType').value = 9;
    //        }

    document.getElementById('' + ctrlcom + '_hdnRegID').value = input[0].REGISTRATION_ID;
    //    if (document.getElementById('' + ctrlcom + '_hdnExFormType').value == 'OP' || document.getElementById('' + ctrlcom + '_hdnExFormType').value == "CON" || document.getElementById('' + ctrlcom + '_hdnExFormType').value == "ADMN") {
    document.getElementById('' + ctrlcom + '_chkisold').checked = true;
    document.getElementById('' + ctrlcom + '_chkisold').disabled = true;
    //document.getElementById('chkold').disabled = true;
    ctl00_ContentPlaceHolder1_tdUmr.style.display = "block";
    //ctl00_ContentPlaceHolder1_tdtxtUmr.style.display = "none";
    $('#' + ctrlcom + '_hdnNewOldUmrNo').val($('#' + ctrlcom + '_txtumrno').val());
    $('#' + ctrlcom + '_txtumrno').val('');
    $('#' + ctrlcom + '_tdUmr').val('');
    $('#' + ctrlcom + '_ucUMRno_txtSearchControl').val(input[0].UmrNo);
    $('#' + ctrlcom + '_ucUMRno__hiddenID').val(input[0].PATIENT_ID);
    $('#' + ctrlcom + '_ucUMRno__hiddenText').val(input[0].UmrNo);
    //    }
    //    else {
    //        document.getElementById('' + ctrlcom + '_chkisold').disabled = false;
    //        document.getElementById('chkold').disabled = false;
    //    }
    if (renewal.checked == true) {
        $('#' + ctrlcom + '_ucUMRno_txtSearchControl').val(input[0].UmrNo);
        $('#' + ctrlcom + '_ucUMRno__hiddnID').val(input[0].PATIENT_ID);
        $('#' + ctrlcom + '_ucUMRno__hiddenText').val(input[0].UmrNo);
    } else {
        $('#' + ctrlcom + '_ucUmrIsOld_txtSearchControl').val(input[0].UmrNo);
        $('#' + ctrlcom + '_ucUmrIsOld__hiddenID').val(input[0].PATIENT_ID);
        $('#' + ctrlcom + '_ucUmrIsOld__hiddenText').val(input[0].UmrNo);
    }
    document.getElementById('' + ctrlcom + '_hdnPatientid').value = input[0].PATIENT_ID;
    var regExpDt = input[0].REG_EXPIRY_DT.split(' ')[0];
    if (new Date(regExpDt).format(current_format) == "NaN--NaN") {
        var regValidity = regExpDt.split('-')[0] + '/' + regExpDt.split('-')[1] + '/' + regExpDt.split('-')[2];
    }
    else {
        regValidity = regExpDt;
    }

    var regExpiryDt = new Date(regValidity).format(current_format);

    $('#' + ctrlcom + '_txtFirstName').val(input[0].DISPLAY_NAME);
    $('#' + ctrlcom + '_txtMotherMName').val(input[0].MOTHER_MAIDEN_NAME);
    document.getElementById('' + ctrlcom + '_txtDisplayname').innerHTML = input[0].DISPLAY_NAME;
    $('#' + ctrlcom + '_Address1_txtMobile1').val(input[0].MOBILE_NO1);
    $('#' + ctrlcom + '_txtResPerson').val(input[0].RES_PERSON_NAME);
    $('#' + ctrlcom + '_hdnPID').val(input[0].PATIENT_ID);

    /* if (input[0].IS_NEWBORN == "Y") {
    document.getElementById('YYMMDD').style.display = 'none';
    document.getElementById('pediatric').style.display = 'block';
    var age = input[0].DISPLAY_AGE.split(" ")[0];
    var agemin = input[0].DISPLAY_AGE.split(" ")[1];
    var Hr = age.split("H")[0];
    var Min = agemin.split("M")[0];
    document.getElementById('' + ctrlcom + '_newAgeUc_txtHH').value = Hr;
    document.getElementById('' + ctrlcom + '_newAgeUc_txtMM').value = Min;

    }*/
    var patientId = input[0].PATIENT_ID;
    AssignReferalDetails(patientId);
    AssignAddrDtls(patientId);
    AssignReferalsInfo_New(patientId);

    OnPageValidation();
    document.getElementById('' + ctrlcom + '_newAgeUc_txtDay').disabled = true;
    document.getElementById('' + ctrlcom + '_ddlPatientType').disabled = false;
}

function EnabledControls() {
    document.getElementById('' + ctrlcom + '_ddlTitle').disabled = false;
    document.getElementById('' + ctrlcom + '_txtFirstName').disabled = false;
    document.getElementById('' + ctrlcom + '_txtMiddleName').disabled = false;
    document.getElementById('' + ctrlcom + '_txtLastName').disabled = false;
    document.getElementById('' + ctrlcom + '_txtAliasname').disabled = false;
    document.getElementById('' + ctrlcom + '_ddlDisplayName').disabled = false;
    document.getElementById('' + ctrlcom + '_txtDisplayname').disabled = false;
    document.getElementById('' + ctrlcom + '_ddlGender').disabled = false;
    document.getElementById('' + ctrlcom + '_ddlReligion').disabled = false;
    document.getElementById('' + ctrlcom + '_ddlEthnicity').disabled = false;
    document.getElementById('' + ctrlcom + '_ddlMaritalStatus').disabled = false;
    document.getElementById('' + ctrlcom + '_ddlResPerson').disabled = false;
    document.getElementById('' + ctrlcom + '_txtResPerson').disabled = false;
    document.getElementById('' + ctrlcom + '_txtMotherMName').disabled = false;

    document.getElementById('' + ctrlcom + '_txtfathername').disabled = false;
    document.getElementById('' + ctrlcom + '_ddlOccupation').disabled = false;
    document.getElementById('' + ctrlcom + '_ddlBloodGroup').disabled = false;
    //    document.getElementById('' + ctrlcom + '_ucReferal_ddlreferral').disabled = false;
    //    document.getElementById('' + ctrlcom + '_txtrefaddr').disabled = false;
    //    document.getElementById('' + ctrlcom + '_txtRefPhone').disabled = false;
    document.getElementById('' + ctrlcom + '_Address1_txtMobile1').disabled = false;
    document.getElementById('' + ctrlcom + '_Address1_txtMobile2').disabled = false;
    document.getElementById('' + ctrlcom + '_Address1_txtMobile3').disabled = false;

    document.getElementById('' + ctrlcom + '_Address1_chkmodeComm_MultiSelectDDL').disabled = false;
    document.getElementById('' + ctrlcom + '_Address1_txtNearestPS').disabled = false;
    document.getElementById('' + ctrlcom + '_txtSSN').disabled = false;
    document.getElementById('' + ctrlcom + '_txtemail').disabled = false;
    document.getElementById('' + ctrlcom + '_txtweburl').disabled = false;
    document.getElementById('' + ctrlcom + '_txtPassprotno').disabled = false;
    document.getElementById('' + ctrlcom + '_txtIssueDt').disabled = false;
    document.getElementById('' + ctrlcom + '_txtExpiryDt').disabled = false;
    document.getElementById('' + ctrlcom + '_txtissuedat').disabled = false;
    document.getElementById('' + ctrlcom + '_txtNotes').disabled = false;
    //    document.getElementById('' + ctrlcom + '_ddlreferral').disabled = false;
    //    document.getElementById('' + ctrlcom + '_txtRefName').disabled = false;
    // document.getElementById('' + ctrlcom + '_chkmodeComm_MultiSelectDDL').disabled = false;
    document.getElementById('' + ctrlcom + '_Address1_AreaUserControl1_txtSearchControl').disabled = false;
    document.getElementById('' + ctrlcom + '_Address1_AreaUserControl1_imgbtnSearch').disabled = false;
    document.getElementById('' + ctrlcom + '_Address1_txtAddress1').disabled = false;
    document.getElementById('' + ctrlcom + '_Address1_txtAddress2').disabled = false;
    document.getElementById('' + ctrlcom + '_Address1_CityUserControl1').disabled = false;
    document.getElementById('' + ctrlcom + '_Address1_StateUserControl1').disabled = false;
    document.getElementById('' + ctrlcom + '_Address1_CountryUserControl1').disabled = false;
    document.getElementById('' + ctrlcom + '_Address1_txtPin').disabled = false;
    document.getElementById('' + ctrlcom + '_ddlNationality').disabled = false;
    document.getElementById('' + ctrlcom + '_newAgeUc_txtDob').disabled = false;
    document.getElementById('' + ctrlcom + '_newAgeUc_txtYear').disabled = false;
    document.getElementById('' + ctrlcom + '_newAgeUc_txtMonths').disabled = false;
    document.getElementById('' + ctrlcom + '_newAgeUc_txtDay').disabled = false;
    document.getElementById('' + ctrlcom + '_ucConsultant_txtSearchControl').disabled = false;
    document.getElementById('' + ctrlcom + '_ucConsultant_imgbtnSearch').disabled = false;
    document.getElementById('lk_btn_ctl00_ContentPlaceHolder1_ucConsultant').disabled = false;
    document.getElementById('' + ctrlcom + '_txtcorporte').disabled = false;
    document.getElementById('' + ctrlcom + '_ddlquestionary').disabled = false;
    //document.getElementById('' + ctrlcom + '_txtReferal').disabled = false;
    document.getElementById('lk_btn_ctl00_ContentPlaceHolder1_Address1_AreaUserControl1').disabled = false;
}
function disabledControls() {
    document.getElementById('' + ctrlcom + '_newAgeUc_txtYear').disabled = true;
    document.getElementById('' + ctrlcom + '_newAgeUc_txtMonths').disabled = true;
    document.getElementById('' + ctrlcom + '_newAgeUc_txtDay').disabled = true;
    document.getElementById('' + ctrlcom + '_ucConsultant_txtSearchControl').disabled = true;
    document.getElementById('' + ctrlcom + '_ucConsultant_imgbtnSearch').disabled = true;
    document.getElementById('lk_btn_ctl00_ContentPlaceHolder1_ucConsultant').disabled = true;
    document.getElementById('' + ctrlcom + '_txtcorporte').disabled = true;
    document.getElementById('' + ctrlcom + '_newAgeUc_txtDob').disabled = true;
    document.getElementById('' + ctrlcom + '_ddlTitle').disabled = true;
    document.getElementById('' + ctrlcom + '_txtFirstName').disabled = true;
    document.getElementById('' + ctrlcom + '_txtMiddleName').disabled = true;
    document.getElementById('' + ctrlcom + '_txtLastName').disabled = true;
    document.getElementById('' + ctrlcom + '_txtAliasname').disabled = true;
    document.getElementById('' + ctrlcom + '_ddlDisplayName').disabled = true;
    document.getElementById('' + ctrlcom + '_txtDisplayname').disabled = true;
    document.getElementById('' + ctrlcom + '_ddlGender').disabled = true;
    document.getElementById('' + ctrlcom + '_ddlReligion').disabled = true;
    document.getElementById('' + ctrlcom + '_ddlEthnicity').disabled = true;
    document.getElementById('' + ctrlcom + '_ddlMaritalStatus').disabled = true;
    document.getElementById('' + ctrlcom + '_ddlResPerson').disabled = true;
    document.getElementById('' + ctrlcom + '_txtResPerson').disabled = true;
    document.getElementById('' + ctrlcom + '_txtMotherMName').disabled = true;
    document.getElementById('' + ctrlcom + '_txtfathername').disabled = true;
    document.getElementById('' + ctrlcom + '_ddlOccupation').disabled = true;
    document.getElementById('' + ctrlcom + '_ddlBloodGroup').disabled = true;
    document.getElementById('' + ctrlcom + '_ddlreferral').disabled = true;
    document.getElementById('' + ctrlcom + '_txtrefaddr').disabled = true;
    document.getElementById('' + ctrlcom + '_txtRefPhone').disabled = true;
    document.getElementById('' + ctrlcom + '_Address1_txtMobile1').disabled = true;
    document.getElementById('' + ctrlcom + '_Address1_txtMobile2').disabled = true;
    document.getElementById('' + ctrlcom + '_Address1_txtMobile3').disabled = true;
    document.getElementById('' + ctrlcom + '_Address1_chkmodeComm_MultiSelectDDL').disabled = true;
    document.getElementById('' + ctrlcom + '_Address1_txtNearestPS').disabled = true;
    document.getElementById('' + ctrlcom + '_txtSSN').disabled = true;
    document.getElementById('' + ctrlcom + '_txtemail').disabled = true;
    document.getElementById('' + ctrlcom + '_txtweburl').disabled = true;
    document.getElementById('' + ctrlcom + '_txtPassprotno').disabled = true;
    document.getElementById('' + ctrlcom + '_txtIssueDt').disabled = true;
    document.getElementById('' + ctrlcom + '_txtExpiryDt').disabled = true;
    document.getElementById('' + ctrlcom + '_txtissuedat').disabled = true;
    document.getElementById('' + ctrlcom + '_txtNotes').disabled = true;
    document.getElementById('' + ctrlcom + '_ddlreferral').disabled = true;
    document.getElementById('' + ctrlcom + '_txtRefName').disabled = true;
    document.getElementById('' + ctrlcom + '_ddlNationality').disabled = true;
    // document.getElementById('' + ctrlcom + '_chkmodeComm_MultiSelectDDL').disabled = true;
    document.getElementById('' + ctrlcom + '_Address1_AreaUserControl1_txtSearchControl').disabled = true;
    document.getElementById('' + ctrlcom + '_Address1_AreaUserControl1_imgbtnSearch').disabled = true;
    document.getElementById('' + ctrlcom + '_Address1_txtAddress1').disabled = true;
    document.getElementById('' + ctrlcom + '_Address1_txtAddress2').disabled = true;
    document.getElementById('' + ctrlcom + '_Address1_CityUserControl1').disabled = true;
    document.getElementById('' + ctrlcom + '_Address1_StateUserControl1').disabled = true;
    document.getElementById('' + ctrlcom + '_Address1_CountryUserControl1').disabled = true;
    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtquickremarks').disabled = true;
    if (getParameterByName("Type") == "CORP") {
        document.getElementById('' + ctrlcom + '_Address1_txtPin').disabled = false;
    }
    else {
        document.getElementById('' + ctrlcom + '_Address1_txtPin').disabled = true;
    }
    document.getElementById('' + ctrlcom + '_ddlquestionary').disabled = true;
    document.getElementById('' + ctrlcom + '_txtReferal').disabled = true;
    document.getElementById('lk_btn_ctl00_ContentPlaceHolder1_Address1_AreaUserControl1').disabled = true;
    document.getElementById('' + ctrlcom + '_chkIsSenior').disabled = true;
    document.getElementById('' + ctrlcom + '_chkstopalert').disabled = true;
    document.getElementById('' + ctrlcom + '_UCServices_ucbillno_txtSearchControl').disabled = true;
    document.getElementById('lk_btn_ctl00_ContentPlaceHolder1_UCServices_ucbillno').disabled = true;
}
/*Getting Patient Details Based On Patient_ID*/
function AssignReferalDetails(patientId) {
    if (patientId != null && patientId != undefined && patientId != '') { patientId = parseInt(patientId); } else { patientId = parseInt("0"); }
    GetAsync(
            "PatientRegistration.asmx/Get_Patient_Details",
            { _patID: patientId },
            function (jdata) {
                myResults(jdata.d);
                if (jdata.d.length > 3 && document.getElementById('' + ctrlcom + '_chkisold').checked == false) {
                    if (jdata.d[3].TPA_ID > 0) {
                        document.getElementById('' + ctrlcom + '_EmployerInfo1_hdntpaid').value = jdata.d[3].TPA_ID;
                    }
                }
                document.getElementById('' + ctrlcom + '_ucReferal_ucreferalname_txtSearchControl').disabled = true;
                if (document.getElementById('' + ctrlcom + '_chkisold').checked != true) {
                    document.getElementById('lk_btn_ctl00_ContentPlaceHolder1_Address1_AreaUserControl1').disabled = true;
                    document.getElementById('' + ctrlcom + '_Address1_txtPin').disabled = true;
                    document.getElementById('' + ctrlcom + '_Address1_AreaUserControl1_txtSearchControl').disabled = true;
                    document.getElementById('' + ctrlcom + '_Address1_txtAddress1').disabled = true;
                    document.getElementById('' + ctrlcom + '_Address1_txtAddress2').disabled = true;
                }
            },
            function () {
            });

    return true;
}
/*Assigning Patient Details */
function myResults(result) {
    if (result != null) {
        $('#' + ctrlcom + '_hdnumrno').val(result[0].UmrNo);
        //        document.getElementById('' + ctrlcom + '_hdnPatRevNo').value = (result[0].PATIENT_RIVISION_NO);
        $('#' + ctrlcom + '_txtFirstName').val(result[0].FIRST_NAME);
        $('#' + ctrlcom + '_txtMiddleName').val(result[0].MIDDLE_NAME);
        $('#' + ctrlcom + '_txtLastName').val(result[0].LAST_NAME);
        $('#' + ctrlcom + '_ddlDisplayName').val('2'); /*Display Name Id Based On Company Pol */
        var Dob = typeof result[0].DOB == "string" ? result[0].DOB : '';
        if (document.getElementById('' + ctrlcom + '_hdndobformat').value == "dd-MMM-yyyy") {
            $('#' + ctrlcom + '_newAgeUc_txtDob').val(new Date(Dob).format('dd-MMM-yyyy'));
        }
        else {

            var strDob = Dob.split(" ");
            var DOB = strDob[0];
            var DateOfBirth = '';
            if (new Date(DOB).format('dd-MM-yyyy') == "NaN--NaN") {
                DateOfBirth = DOB.split('-')[0] + '/' + DOB.split('-')[1] + '/' + DOB.split('-')[2];
            }
            else {
                DateOfBirth = (DOB);
            }
            var DOfB = new Date(DateOfBirth).format('dd-MM-yyyy');
            $('#' + ctrlcom + '_newAgeUc_txtDob').val(DOfB);
        }
        var age = result[0].AGE;
        var str = age.split(",");
        var y = str[0];
        var m = str[1];
        var d = str[2];
        $('#' + ctrlcom + '_newAgeUc_txtYear').val(y);
        $('#' + ctrlcom + '_newAgeUc_txtMonths').val(m);
        $('#' + ctrlcom + '_newAgeUc_txtDay').val(d);
        $('#' + ctrlcom + '_ddlTitle').val(result[0].TITILE_ID);
        document.getElementById('' + ctrlcom + '_txtResPerson').value = result[0].RES_PERSON_NAME
        $('#' + ctrlcom + '_ddlGender').val(result[0].GENDER_ID);
        $('#' + ctrlcom + '_ddlMaritalStatus').val(result[0].MARITAL_STATUS_ID);
        $('#' + ctrlcom + '_ddlResPerson').val(result[0].RES_PERSON_REL_ID);
        $('#' + ctrlcom + '_ddlBloodGroup').val(result[0].BLOOD_GROUP_ID);
        $('#' + ctrlcom + '_ddlNationality').val(result[0].NATIONALITY_ID);
        if ($('[id*=ddlResPerson]').find('option:selected').text().trim() == "Self") {
            document.getElementById('' + ctrlcom + '_txtResPerson').disabled = true;
            $('#' + ctrlcom + '_txtResPerson').removeClass('red');
        } else if (document.getElementById('' + ctrlcom + '_txtResPerson').value == "") {
            document.getElementById('' + ctrlcom + '_txtResPerson').disabled = false;
            $('#' + ctrlcom + '_txtResPerson').addClass('red');
        }
        //        if (document.getElementById('chkold').checked != true) {
        //            $('#' + ctrlcom + '_ddlPatientType').val(result[0].PATIENT_TYPE_ID);
        //            if ((result[0].PATIENT_TYPE_ID) == "1") {
        //                $('#' + ctrlcom + '_emppnl').hide();
        //            }
        //            else {
        //                $('#' + ctrlcom + '_emppnl').show();
        //            }
        //        }
        var dnb = result[0].IS_STOP_ALERT;
        if (dnb == "Y") {
            document.getElementById('' + ctrlcom + '_chkstopalert').checked == true;
        } else { document.getElementById('' + ctrlcom + '_chkstopalert').checked == false; }
        $('#' + ctrlcom + '_ddlOccupation').val(result[0].OCCUPATION_ID);
        $('#' + ctrlcom + '_ddlReligion').val(result[0].RELIGION_ID);
        $('#' + ctrlcom + '_ddlEthnicity').val(result[0].ETHNICITY_ID);

        $('#' + ctrlcom + '_ucConsultant_txtSearchControl').val(result[0].CONSULTANT);
        $('#' + ctrlcom + '_ucConsultant__hiddenText').val(result[0].CONSULTANT);
        $('#' + ctrlcom + '_ucConsultant__hiddenID').val(result[0].Doctor_ID);
        $('#' + ctrlcom + '_hdnDID').val(result[0].Doctor_ID);
        $('#' + ctrlcom + '_hdnConsultant').val(result[0].Doctor_ID);
        $('#' + ctrlcom + '_Address1_txtMobile1').val(result[0].MOBILE_NO1);
        document.getElementById('' + ctrlcom + '_ddlproofid').value = result[0].ID_PROOF_TYPE_ID;
        if (result[0].ID_PROOF_TYPE_ID == 6) {
            document.getElementById('' + ctrlcom + '_txtPassprotno').value = result[0].PASSPORT_NO;
            document.getElementById('' + ctrlcom + '_txtIssueDt').value = new Date(result[0].ISSUE_DT).format('dd-MMM-yyyy');
            document.getElementById('' + ctrlcom + '_txtExpiryDt').value = new Date(result[0].EXPIRY_DT).format('dd-MMM-yyyy');
        }
        document.getElementById('' + ctrlcom + '_txtSSN').value = result[0].ID_PROOF_NAME;
        document.getElementById('' + ctrlcom + '_ddlquestionary').value = result[0].QUESTIONARY_ID;
        //        if (result[0].METHOD_OF_COMM_ID != '') {
        //            //document.getElementById('' + ctrlcom + '_chkmodeComm_MultiSelectDDL').text = result[0].METHOD_OF_COMM_NAME;
        //            //document.getElementById('' + ctrlcom + '_chkmodeComm_MultiSelectDDL').Value = result[0].METHOD_OF_COMM_ID;
        //            var _optionsVal1 = "<OPTION selected value='" + result[0].METHOD_OF_COMM_ID + "'>" + result[0].METHOD_OF_COMM_NAME + "</OPTION>";
        //            $('[id$=chkmodeComm_MultiSelectDDL]').empty().html(_optionsVal1);
        //        }
        //        else {
        //            result[0].METHOD_OF_COMM_ID = "--select--";
        //            document.getElementById('' + ctrlcom + '_chkmodeComm_MultiSelectDDL').value = result[0].METHOD_OF_COMM_ID;
        //        }
        //        if (result[0].PATIENT_TYPE_ID == 2 || result[0].PATIENT_TYPE_ID == 5) {
        //            $('#' + ctrlcom + '_emppnl').show();
        //            if (document.getElementById('chkold').checked == false) {
        //                getempinfodetails(result[0].PATIENT_ID);
        //            }
        //        }
    }
}
/*Clearing Patient Details */

function clearcontactdetails() {
    $('#' + ctrlcom + '_Address1_txtMobile1').val('');
    $('#' + ctrlcom + '_Address1_txtMobile2').val('');
    $('#' + ctrlcom + '_Address1_txtMobile3').val('');

    $('#' + ctrlcom + '_txtemail').val('');

}
function clearcompanyinfo() {
    $('#' + ctrlcom + '_EmployerInfo1_txtEmploeeID').val('');
    // $('#' + ctrlcom + '_EmployerInfo1_lblCmpCode').val('');
    // $('#' + ctrlcom + '_EmployerInfo1_txtCmpFee').val('');
    $('#' + ctrlcom + '_EmployerInfo1_EmployerControl1_txtSearchControl').val('');
    $('#' + ctrlcom + '_EmployerInfo1_uctpa_txtSearchControl').val('');
    $('#' + ctrlcom + '_EmployerInfo1_txtEmployeeName').val('');
    //$('#' + ctrlcom + '_EmployerInfo1_ddlrelation').val('--select--');
    $('#' + ctrlcom + '_EmployerInfo1_ddlrelation').val(0);
    $('#' + ctrlcom + '_EmployerInfo1_txtempgrade').val('');
    $('#' + ctrlcom + '_EmployerInfo1_txtEmpContactNo').val('');
    $('#' + ctrlcom + '_EmployerInfo1_txtEmpMRNo').val('');
    $('#' + ctrlcom + '_EmployerInfo1_txtEmpReferalBasis').val('');
    $('#' + ctrlcom + '_EmployerInfo1_txtEmpRefBasisNo').val('');
    $('#' + ctrlcom + '_EmployerInfo1_txtrefletter').val('');
    $('#' + ctrlcom + '_EmployerInfo1_txtletterissuedby').val('');
    $('#' + ctrlcom + '_EmployerInfo1_txtcreditlimitamt').val('');
    $('#' + ctrlcom + '_EmployerInfo1_txtBranch').val('');
    $('#' + ctrlcom + '_EmployerInfo1_txtemployername').val('');
    $('#' + ctrlcom + '_EmployerInfo1_txtDept').val('');
    $('#' + ctrlcom + '_EmployerInfo1_txtEmpCardValidity').val('');
    $('#' + ctrlcom + '_EmployerInfo1_hdntpaid').val(0);
}
function CompareDateCorp(RegExpDt) {
    RegExpDt = new Date(RegExpDt).format("dd-MMM-yyyy");
    var currDt = new Date().format("dd-MMM-yyyy");
    if (RegExpDt.length == 10) {
        var sedt = RegExpDt;
        var currDt = new Date().format("dd-MMM-yyyy");
        var result = CompareDates(sedt, currDt);
        if (result == "d1<d2") {
            $(".stoast").toastText("warning", "Patient Registration Validity is Over on,'" + RegExpDt + "' , need to register again.", 5, 3);
            return false;
        }
        else {
            return true;
        }
    }
    else if (RegExpDt.length == 11) {
        var sedt = RegExpDt;
        var currDt = new Date().format("dd-MMM-yyyy");
        var result = CompareDates(sedt, currDt);
        if (result == "d1<d2") {
            $(".stoast").toastText("warning", "Patient Registration Validity is Over on,'" + RegExpDt + "' , need to register again.", 5, 3);
            return false;
        }
        else {
            return true;
        }
    }
}
/*Clearing Completed Patient Details */
function RegistrationClear(obj) {
    document.getElementById('' + ctrlcom + '_tdUmr').style.display = 'none';
    document.getElementById('' + ctrlcom + '_tdtxtUmr').style.display = 'block';
    document.getElementById('' + ctrlcom + '_preRegDtls').style.display = 'none';
    var chkApp = document.getElementById('' + ctrlcom + '_chkisold');
    chkApp.checked = false;
    $('#' + ctrlcom + '_UCprereg_txtSearchControl').val('');
    Clearpopup();
    $('#' + ctrlcom + '_UCtransaction_txtCs_Total').val('');
    $('#' + ctrlcom + '_UCtransaction_AccordionPane4_content_txtCCNo').val('');
    $('#' + ctrlcom + '_UCtransaction_AccordionPane4_content_txtCCApprovalNo').val('');
    $('#' + ctrlcom + '_UCtransaction_AccordionPane4_content_txtCCHolderName').val('');
    $('#' + ctrlcom + '_UCtransaction_AccordionPane4_content_txtCCEdcMachine').val('');
    $('#' + ctrlcom + '_UCtransaction_AccordionPane4_content_ddlCardType').val('0');
    $('#' + ctrlcom + '_UCtransaction_AccordionPane4_content_txtCCValidFrm').val('');
    $('#' + ctrlcom + '_UCtransaction_AccordionPane4_content_txtCCValidTo').val('');
    $('#' + ctrlcom + '_UCtransaction_AccordionPane4_content_txtCCHoldAddress').val('');
    $('#' + ctrlcom + '_UCtransaction_AccordionPane4_content_txtCC_Amount').val('');
    $('#' + ctrlcom + '_UCtransaction_AccordionPane4_content_txtCCBankName').val('');
    $('#' + ctrlcom + '_UCtransaction_AccordionPane4_content_hdnccbankid').val('');
    $('#' + ctrlcom + '_UCtransaction_hfCC').val('');
    $('#' + ctrlcom + '_UCtransaction_AccordionPane5_content_txtDCNo').val('');
    $('#' + ctrlcom + '_UCtransaction_AccordionPane5_content_txtDCApproval').val('');
    $('#' + ctrlcom + '_UCtransaction_AccordionPane5_content_txtDCHolderName').val('');
    $('#' + ctrlcom + '_UCtransaction_AccordionPane5_content_txtDcEdcMc').val('');
    $('#' + ctrlcom + '_UCtransaction_AccordionPane5_content_ddlDCType').val('0');
    $('#' + ctrlcom + '_UCtransaction_AccordionPane5_content_txtDCValidFrm').val('');
    $('#' + ctrlcom + '_UCtransaction_AccordionPane5_content_txtDCValidTo').val('');
    $('#' + ctrlcom + '_UCtransaction_AccordionPane5_content_txtDCHolderAdd').val('');
    $('#' + ctrlcom + '_UCtransaction_AccordionPane5_content_txtDC_Amount').val('');
    $('#' + ctrlcom + '_UCtransaction_AccordionPane5_content_txtDCBankName').val('');
    $('#' + ctrlcom + '_UCtransaction_AccordionPane5_content_hdndcbankid').val('');
    $('#' + ctrlcom + '_UCtransaction_hfDC').val('');
    $('#' + ctrlcom + '_UCtransaction_AccordionPane6_content_txtCQNo').val('');
    $('#' + ctrlcom + '_UCtransaction_AccordionPane6_content_txtCQHolderName').val('');
    $('#' + ctrlcom + '_UCtransaction_AccordionPane6_content_UcBrach_txtSearchControl').val('');
    $('#' + ctrlcom + '_UCtransaction_AccordionPane6_content_UcBrach__hiddenID').val('');
    $('#' + ctrlcom + '_UCtransaction_AccordionPane6_content_txtCQBankName').val('');
    $('#' + ctrlcom + '_UCtransaction_AccordionPane6_content_hdncqbankid').val('');
    $('#' + ctrlcom + '_UCtransaction_AccordionPane6_content_txtCQValidFrm').val('');
    $('#' + ctrlcom + '_UCtransaction_AccordionPane6_content_txtCQValidTo').val('');
    $('#' + ctrlcom + '_UCtransaction_AccordionPane6_content_txtCQ_Amount').val('');
    $('#' + ctrlcom + '_UCtransaction_hfCQ').val('');
    $('#' + ctrlcom + '_UcAppointmentNo_txtSearchControl').val('');
    var elementRef = document.getElementById('' + ctrlcom + '_UCtransaction_chkPaymentMode');
    var checkBoxArray = elementRef.getElementsByTagName('input');
    checkBoxArray[1].checked = false;
    checkBoxArray[2].checked = false;
    checkBoxArray[3].checked = false;
    ClearTransactions(this);
    $('#' + ctrlcom + '_UCtransaction_lblTamount').val('');
    $('#' + ctrlcom + '_UCtransaction_txtConcessionAmt').val('0');
    $('#' + ctrlcom + '_UCtransaction_lblBillNetAmt').val('0');
    $('#' + ctrlcom + '_UCtransaction_txtPayAmt').val('0');
    $('#' + ctrlcom + '_UCtransaction_txtDueAmt').val('0');
    $('#' + ctrlcom + '_UCtransaction_UCconcAuth_txtSearchControl').val('');
    $('#' + ctrlcom + '_UCtransaction_UCdueAuthBy_txtSearchControl').val('');
    $('#' + ctrlcom + '_UCtransaction_txtRemarks').val('');
    $('#' + ctrlcom + '_txtcorporte').val('');
    document.getElementById('' + ctrlcom + '_ddlTitle').disabled = false;
    document.getElementById('' + ctrlcom + '_txtFirstName').disabled = false;
    document.getElementById('' + ctrlcom + '_txtMiddleName').disabled = false;
    document.getElementById('' + ctrlcom + '_txtLastName').disabled = false;
    document.getElementById('' + ctrlcom + '_txtDisplayname').disabled = false;
    document.getElementById('' + ctrlcom + '_txtAliasname').disabled = false;
    document.getElementById('' + ctrlcom + '_txtMotherMName').disabled = false;
    document.getElementById('' + ctrlcom + '_txtfathername').disabled = false;

    document.getElementById('' + ctrlcom + '_txtResPerson').disabled = false;
    document.getElementById('' + ctrlcom + '_ddlResPerson').disabled = false;
    document.getElementById('' + ctrlcom + '_ddlGender').disabled = false;
    document.getElementById('' + ctrlcom + '_ddlMaritalStatus').disabled = false;
    document.getElementById('' + ctrlcom + '_ddlOccupation').disabled = false;
    document.getElementById('' + ctrlcom + '_ddlBloodGroup').disabled = false;
    document.getElementById('' + ctrlcom + '_ddlReligion').disabled = false;
    document.getElementById('' + ctrlcom + '_ddlEthnicity').disabled = false;
    document.getElementById('' + ctrlcom + '_ddlreferral').disabled = false;
    document.getElementById('' + ctrlcom + '_txtReferal').disabled = false;
    document.getElementById('' + ctrlcom + '_txtweburl').disabled = false;
    document.getElementById('' + ctrlcom + '_Address1_txtMobile1').disabled = false;
    document.getElementById('' + ctrlcom + '_Address1_txtMobile2').disabled = false;
    document.getElementById('' + ctrlcom + '_txtemail').disabled = false;
    document.getElementById('' + ctrlcom + '_Address1_txtAddress1').disabled = false;
    document.getElementById('' + ctrlcom + '_Address1_txtAddress2').disabled = false;
    document.getElementById('' + ctrlcom + '_Address1_AreaUserControl1_txtSearchControl').disabled = false;
    document.getElementById('' + ctrlcom + '_Address1_AreaUserControl1__hiddenID').disabled = false;
    document.getElementById('' + ctrlcom + '_Address1_hdncityid').disabled = false;
    document.getElementById('' + ctrlcom + '_Address1_hdnstateid').disabled = false;
    document.getElementById('' + ctrlcom + '_Address1_hdncountryid').disabled = false;
    document.getElementById('' + ctrlcom + '_Address1_txtPin').disabled = false;
    return false;
}
function validation() {
    var consultant = document.getElementById('' + ctrlcom + '_ucConsultant_txtSearchControl');
    if (consultant.value == '') {
        consultant.style.border = '1px solid #f4785e';
    } else {
        consultant.style.border = '1px solid #818d98';
    }
}


function patamounts() {
    $('#' + ctrlcom + '_ReceiptControl2_txtpatgross').val($('#' + ctrlcom + '_hdnregfee').val());
    $('#' + ctrlcom + '_txtconamt').val('0');
    $('#' + ctrlcom + '_ReceiptControl2_txtpatdue').val($('#' + ctrlcom + '_hdnregfee').val());
    $('#' + ctrlcom + '_ReceiptControl2_txtDueamount').val($('#' + ctrlcom + '_hdnregfee').val());
    $('#' + ctrlcom + '_ReceiptControl2_hdnNetAmt').val($('#' + ctrlcom + '_hdnregfee').val());
    $('#' + ctrlcom + '_ReceiptControl2_txtpatNet').val($('#' + ctrlcom + '_hdnregfee').val());
    $('#' + ctrlcom + '_txtdueamt').val($('#' + ctrlcom + '_hdnregfee').val());
    $('#' + ctrlcom + '_ReceiptControl2_txtgrosstotal').val($('#' + ctrlcom + '_hdnregfee').val());
    $('#' + ctrlcom + '_ReceiptControl2_txtTotalNet').val($('#' + ctrlcom + '_hdnregfee').val());
    $('#' + ctrlcom + '_ReceiptControl2_txtTotalDue').val($('#' + ctrlcom + '_hdnregfee').val());
    $('#' + ctrlcom + '_ReceiptControl2_hdnDueAmt').val($('#' + ctrlcom + '_hdnregfee').val());

}


function OnViphiding() {
    document.getElementById('' + ctrlcom + '_rbt_pat_type_0').checked = true;
    document.getElementById('' + ctrlcom + '_rbt_pat_type_1').checked = false;
    document.getElementById('' + ctrlcom + '_rbt_pat_type_2').checked = false;
    document.getElementById('' + ctrlcom + '_dd_reg_source').value = '0';
    document.getElementById('' + ctrlcom + '_source_remarks').value = '';
    PatientTypeChange();
}

function MandatoryColors() {
    var _chkValidation = true;
    var _ctrls = new Array();
    _ctrls[0] = 'ctl00_ContentPlaceHolder1_txtFirstName';

    _ctrls[1] = 'ctl00_ContentPlaceHolder1_ddlTitle';
    _ctrls[2] = 'ctl00_ContentPlaceHolder1_ddlResPerson';
    _ctrls[3] = 'ctl00_ContentPlaceHolder1_txtResPerson';
    if (document.getElementById('' + ctrlcom + '_hdnRefReq').value == 'Yes') {
        _ctrls[4] = 'ctl00_ContentPlaceHolder1_ucReferal_ddlreferral';
        if (document.getElementById('' + ctrlcom + '_ucReferal_ddlreferral').value != '1') {
            _ctrls[5] = 'ctl00_ContentPlaceHolder1_ucReferal_ucreferalname_txtSearchControl';
        }
        else {
            $('#' + ctrlcom + '_ucReferal_ucreferalname_txtSearchControl').removeClass('red');
        }
    }
    _ctrls[6] = 'ctl00_ContentPlaceHolder1_newAgeUc_txtDob';
    //_ctrls[7] = 'ctl00_ContentPlaceHolder1_ddlMaritalStatus';
    _ctrls[8] = 'ctl00_ContentPlaceHolder1_dd_reg_source';
    _ctrls[9] = 'ctl00_ContentPlaceHolder1_source_remarks';
    _ctrls[10] = 'ctl00_ContentPlaceHolder1_ucUMRno_txtSearchControl';

    if (document.getElementById('' + ctrlcom + '_EmployerInfo1_uctpa_txtSearchControl').value != '') {
        _ctrls[16] = 'ctl00_ContentPlaceHolder1_EmployerInfo1_uctpa_txtSearchControl';
        _ctrls[17] = 'ctl00_ContentPlaceHolder1_EmployerInfo1_txtEmploeeID';
        _ctrls[18] = 'ctl00_ContentPlaceHolder1_EmployerInfo1_txtEmployeeName';
        _ctrls[19] = 'ctl00_ContentPlaceHolder1_EmployerInfo1_txtEmpMRNo';
        _ctrls[20] = 'ctl00_ContentPlaceHolder1_EmployerInfo1_txtEmpCardValidity';

    }

    if (document.getElementById('' + ctrlcom + '_txtPassprotno').value != '') {
        _ctrls[22] = 'ctl00_ContentPlaceHolder1_txtPassprotno';
        _ctrls[23] = 'ctl00_ContentPlaceHolder1_txtIssueDt';
        _ctrls[24] = 'ctl00_ContentPlaceHolder1_txtExpiryDt';
        _ctrls[25] = 'ctl00_ContentPlaceHolder1_txtissedat';
        _ctrls[26] = 'ctl00_ContentPlaceHolder1_ddlNationality';
    }
    
    if (document.getElementById('' + ctrlcom + '_pre_regi').value != 5 && document.getElementById('' + ctrlcom + '_hdndtrmandatary').value == 'YES') {
        _ctrls[27] = 'ctl00_ContentPlaceHolder1_ucConsultant_txtSearchControl';
    }
    _ctrls[28] = 'ctl00_ContentPlaceHolder1_Address1_txtMobile1';
    _ctrls[29] = 'ctl00_ContentPlaceHolder1_Address1_AreaUserControl1_txtSearchControl';
    _ctrls[30] = 'ctl00_ContentPlaceHolder1_ddlNationality';
    _ctrls[31] = 'ctl00_ContentPlaceHolder1_ddlPatientType';
    _ctrls[32] = 'ctl00_ContentPlaceHolder1_txtLastName';

    _ctrls[33] = 'ctl00_ContentPlaceHolder1_EmployerInfo1_uctpa_txtSearchControl';
    _ctrls[34] = 'ctl00_ContentPlaceHolder1_EmployerInfo1_txtEmploeeID';
    _ctrls[35] = 'ctl00_ContentPlaceHolder1_EmployerInfo1_txtEmployeeName';
    _ctrls[36] = 'ctl00_ContentPlaceHolder1_EmployerInfo1_txtEmpMRNo';
    _ctrls[37] = 'ctl00_ContentPlaceHolder1_EmployerInfo1_txtEmpCardValidity';
    _ctrls[38] = 'ctl00_ContentPlaceHolder1_EmployerInfo1_ddlrelation';
    _ctrls[39] = 'ctl00_ContentPlaceHolder1_ReceiptControl2_Search3_txtSearchControl';


    for (var i = 0; i < _ctrls.length; i++) {

        var ctrl = document.getElementById(_ctrls[i]);
        // $(ctrl).css('border', '1px solid #bebebe')
        $('#' + _ctrls[i]).removeClass('red');
    }
}
var current_format = "";
function RegistrationFees() {
    /* var reg_id = document.getElementById('' + ctrlcom + '_ddlRegType').value;
    var dateformat = $('#' + ctrlcom + '_hdndateformat').val();
    var split = dateformat.split(' ');
    current_format = split[0];
    $.ajax({
    type: "POST",
    url: "YRegistration.aspx/RegFeeonchange",
    data: "{'RegId':'" + reg_id + "'}",
    contentType: "application/json; charset=utf-8",
    dataType: "json",
    error: function (jqXHR, textStatus, errorThrown) { },
    success: function (JData) {
    if (JData.d[0] != undefined) {
    var data = JData.d[0];
    if (getParameterByName("MODE") == "VIEW") {
    if (document.getElementById('' + ctrlcom + '_ddlPatientType').value == 2) {
    document.getElementById('' + ctrlcom + '_txtregfee').value = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtgrosstotal').value;
    } else {
    document.getElementById('' + ctrlcom + '_txtregfee').value = JData.d[0].REGISTRATION_FEE;
    $('#' + ctrlcom + '_ReceiptControl2_hdnDueAmt').val(JData.d[0].REGISTRATION_FEE);
    }

    var days = JData.d[0].REGISTRATION_VALIDITY;

    document.getElementById('' + ctrlcom + '_hdnregvaliddt').value = new Date(new Date().getTime() + days * 24 * 60 * 60 * 1000).format(current_format);
    // document.getElementById('' + ctrlcom + '_txtregValidity').value = new Date(new Date().getTime() + days * 24 * 60 * 60 * 1000).format(current_format);
    } else {
    document.getElementById('' + ctrlcom + '_txtregfee').value = JData.d[0].REGISTRATION_FEE;
    $('#' + ctrlcom + '_hdnregfee').val(JData.d[0].REGISTRATION_FEE);
    $('#' + ctrlcom + '_ReceiptControl2_hdnDueAmt').val(JData.d[0].REGISTRATION_FEE);
    var days = JData.d[0].REGISTRATION_VALIDITY;
    document.getElementById('' + ctrlcom + '_hdnregvaliddt').value = new Date(new Date().getTime() + days * 24 * 60 * 60 * 1000).format(current_format);
    document.getElementById('' + ctrlcom + '_txtregValidity').value = new Date(new Date().getTime() + days * 24 * 60 * 60 * 1000).format(current_format);
    document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnPayAmt').value = JData.d[0].REGISTRATION_FEE;
    document.getElementById('' + ctrlcom + '_hdnregfee').value = JData.d[0].REGISTRATION_FEE;
    if (document.getElementById('' + ctrlcom + '_txtregfee').value == 0) {
    document.getElementById('' + ctrlcom + '_ReceiptControl2_Search3_txtSearchControl').style.border = '';
    document.getElementById('' + ctrlcom + '_ReceiptControl2_Search3_txtSearchControl').disabled = true;
    }
    else {
    document.getElementById('' + ctrlcom + '_ReceiptControl2_Search3_txtSearchControl').style.border = '1px solid #f4785e';
    document.getElementById('' + ctrlcom + '_ReceiptControl2_Search3_txtSearchControl').disabled = false;

    }

    }
    ExtendedDisplayValues();
    }
    else {
    if (getParameterByName("MODE") != "VIEW") {
    document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnPayAmt').value = 0;
    if (document.getElementById('' + ctrlcom + '_ddlRegType').value == 9) {
    document.getElementById('' + ctrlcom + '_hdnregfee').value = 0;
    document.getElementById('' + ctrlcom + '_txtregfee').value = 0;
    }
    else {
    $(".stoast").toastText("warning", "This Registration Type Configuration Not Done.So Please Contact Administration", 5, 3);
    document.getElementById('' + ctrlcom + '_ddlRegType').value = 2;
    var PatRegFee = $('#' + ctrlcom + '_hdnregfee').val();PatientRegFeeAmounts(PatRegFee);
    }
    document.getElementById('' + ctrlcom + '_ReceiptControl2_Search3_txtSearchControl').style.border = '';
    document.getElementById('' + ctrlcom + '_ReceiptControl2_Search3_txtSearchControl').disabled = true;
    }
    ExtendedDisplayValues();
    }
    if (getParameterByName("MODE") != "VIEW") {
    patamounts();
    if (document.getElementById('ctl00_ContentPlaceHol0der1_ReceiptControl2_txtpatdis') != null) {
    document.getElementById('ctl00_ContentPlaceHol0der1_ReceiptControl2_txtpatdis').value = '';
    }
    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpartydis').value = '';
    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatgrossamt').value = '';
    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpartygrossamt').value = '';
    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtgrossamttotal').value = '';
    document.getElementById('' + ctrlcom + '_ReceiptControl2_ucdueauth_txtSearchControl').value = '';
    document.getElementById('' + ctrlcom + '_ReceiptControl2_Search3_txtSearchControl').value = '';
    if (document.getElementById('' + ctrlcom + '_hdnRegFeeAutoFill').value == 'True') {
    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtcashAmt').value = document.getElementById('' + ctrlcom + '_hdnregfee').value;
    CalculateAmount(document.getElementById('' + ctrlcom + '_ReceiptControl2_txtcashAmt'), 'Cash');
    IsEmptyReplaceWithZero(document.getElementById('' + ctrlcom + '_ReceiptControl2_txtcashAmt'));

    }
    else {
    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtcashAmt').value = "0";
    }
    }
    ExtendedDisplayValues();
    }

    });
    */
}
function OnPageValidationEmergency() {
    var _chkValidation = true;
    var _ctrls = new Array();
    _ctrls[0] = 'ctl00_ContentPlaceHolder1_txtFirstName';
    _ctrls[1] = 'ctl00_ContentPlaceHolder1_ddlTitle';
    _ctrls[2] = 'ctl00_ContentPlaceHolder1_Address1_txtMobile1';
    _ctrls[3] = 'ctl00_ContentPlaceHolder1_newAgeUc_txtDob';
    $('#' + ctrlcom + '_ucReferal_ucrfrlsrc_txtSearchControl').removeClass('red');
    $('#' + ctrlcom + '_ucReferal_ucReferedto_txtSearchControl').removeClass('red');
    $('#' + ctrlcom + '_ddlGender').removeClass('red');
    for (var i = 0; i < _ctrls.length; i++) {

        var ctrl = document.getElementById(_ctrls[i]);
        if (OnNullValue(ctrl) == false) {

            _chkValidation = false;
        }
    }
    return _chkValidation;

}
function NewClearcontactdetails() {
    myMultiAddress1 = []; myMultiAddress2 = []; myMultiAddress3 = [];
    ClearAddrDtls();
    clearcontactdetails();
    if (document.getElementById('' + ctrlcom + '_ddlNationality').value == $('#' + ctrlcom + '_hdnddlNationality').val()) {
        OnNullValue(document.getElementById('' + ctrlcom + '_Address1_AreaUserControl1_txtSearchControl'));
    }
    OnNullValue(document.getElementById('' + ctrlcom + '_Address1_txtMobile1'));
    $('#isdcodemobile1').text('');
    $('#isdcodemobile3').text('');
}
function OnFamilyReff(obj) {
    clearRefDtls();
    ClearAddrDtls();
    document.getElementById('' + ctrlcom + '_UcFamilyReff_txtSearchControl').value = obj._lktext;
    document.getElementById('' + ctrlcom + '_UcFamilyReff__hiddenID').value = obj.PATIENT_ID;
    document.getElementById('' + ctrlcom + '_UcFamilyReff__hiddenText').value = obj._lktext;
    //FamilyColorChange();
    //getaddrDetails();
    var _patientID = 0;
    if (obj.ID == undefined) {
        document.getElementById('' + ctrlcom + '_UcFamilyReff__hiddenID').value = obj.PATIENT_ID;
        document.getElementById('' + ctrlcom + '_Address1_txtMobile1').value = obj.MOBILE_NO;
        //document.getElementById('' + ctrlcom + '_ddlPatientType').value = obj.PATIENT_TYPE_ID;
        _patientID = obj.PATIENT_ID;
    }
    else {
        document.getElementById('' + ctrlcom + '_UcFamilyReff__hiddenID').value = obj.ID;
        //document.getElementById('' + ctrlcom + '_Address1_txtMobile1').value = obj.MOBILE_NO;
        _patientID = obj.ID;
    }
    if (parseInt(_patientID) > 0) {
        AssignAddrDtls(_patientID);
        if (document.getElementById('' + ctrlcom + '_hdnFmlyConRef').value == 'Yes') {
            AssignReferalsInfo_New(_patientID);

        }
    }
    /* srujana */
    else if (parseInt(obj.RESULT.PATIENT_ID) > 0) {
        AssignAddrDtls(obj.RESULT.PATIENT_ID);
        if (document.getElementById('' + ctrlcom + '_hdnFmlyConRef').value == 'Yes') {
            AssignReferalsInfo_New(_patientID);

        }
    }
    /* srujana */
}

function onlookup() {
}

function PermDiv() {

}

function AddrTab() {

}



function OnResPonsiblePerson() {
    var _resPerson = $("[id*=ddlResPerson]").find("option:selected").text();
    if ($("[id*=ddlResPerson]").val() == "0")
        _resPerson = "Responsible Person";

    if (localStorage.getItem("ED") != "" && localStorage.getItem("ED") != undefined && localStorage.getItem("ED") != null) {
        ExtendedDisplayValues();
    }
}

function RenewalValidation() {
    var regtype = document.getElementById('' + ctrlcom + '_ddlRegType');
    if (regtype.value == 6 || regtype.value == 7) {
        $(".stoast").toastText("warning", "You dont have option to select Satfff Details in this case", 5, 3);
        //        alert('You dont have option to select Satfff Details in this case');
        document.getElementById('' + ctrlcom + '_UcStaffName_txtSearchControl').value = '';
        document.getElementById('' + ctrlcom + '_UcStaffName__hiddenID').value = 0;
        document.getElementById('' + ctrlcom + '_UcStaffName__hiddenText').value = '';
       $(".trstaff").hide();
        regtype.value = 2;
    }
}
/*Renewal Check Box Check Event*/
function ShowUmrNos(ev) {
    var chkisold = document.getElementById('' + ctrlcom + '_chk_old');
    var renewal = document.getElementById('' + ctrlcom + '_chkisold');
    var regtype = document.getElementById('' + ctrlcom + '_ddlRegType');
    var patype = document.getElementById('' + ctrlcom + '_ddlPatientType');
    if (renewal.checked == true) {
        document.getElementById('' + ctrlcom + '_dd_reg_source').disabled = true;
        $('#' + ctrlcom + '_dd_reg_source').removeClass('red');
        document.getElementById('' + ctrlcom + '_source_remarks').disabled = true;
        $('#' + ctrlcom + '_source_remarks').removeClass('red');
        if (chkisold.checked == true) {
            var regfee = document.getElementById('' + ctrlcom + '_hdnregfee').value;
            document.getElementById('' + ctrlcom + '_txtregfee').value = regfee;
            PatientRegFeeAmounts(regfee);
        }
        ClearTranctions();
        RenewalValidation();
        chkisold.checked = false;
        Clearpopup(ev);
        EnableDisableControls(true);
        EnableDisableAddressControls(false); EnableDisableReferalControls(false); EnableDisablecontactdetails(false);
        clearpaymentdetails();
        document.getElementById('' + ctrlcom + '_ReceiptControl2_Search3_txtSearchControl').disabled = false;
        document.getElementById('lk_btn_ctl00_ContentPlaceHolder1_ReceiptControl2_Search3').disabled = false;
        document.getElementById('' + ctrlcom + '_ddlRegType').disabled = false;
        //        document.getElementById('' + ctrlcom + '_ucUmrIsOld_txtSearchControl').value = '';
        //        document.getElementById('' + ctrlcom + '_ucUmrIsOld__hiddenID').value = 0;
        //        document.getElementById('' + ctrlcom + '_ucUmrIsOld__hiddenText').value = '';
        regtype.value = 2; var PatRegFee = $('#' + ctrlcom + '_hdnregfee').val(); PatientRegFeeAmounts(PatRegFee); patype.value = 1;
        //ClearAllTransactionDetails();
        GetAsync("Private/FrontOffice/YRegistration.aspx/OnExpiredPreCondition", {}, function () { }, function (jqXHR, textStatus, errorThrown) {
            $(".stoast").toastText("warning", "Failed To Get Renewal Patient Details!", 5, 3);
            //            alert('Failed To Get Renewal Patient Details');
        });
        document.getElementById('' + ctrlcom + '_ChkNBorn').disabled = true;

    }
    else {

        if (document.getElementById('' + ctrlcom + '_hdnispatientbaneer').value != 'Y') {
            chkisold.checked = false;
        }
        OnPageValidation();
        Clearpopup(); ClearTranctions(); clearpaymentdetails();
        if (chkisold.checked == true) {
            renewal.checked = false;
            EnableDisableControls(true);
            EnableDisableReferalControls(false);
        }
        else {
            renewal.checked = false;
            EnableDisableControls(false);
        }
        var regfee = document.getElementById('' + ctrlcom + '_hdnregfee').value;
        document.getElementById('' + ctrlcom + '_txtregfee').value = regfee;
        PatientRegFeeAmounts(regfee);
        document.getElementById('' + ctrlcom + '_ChkNBorn').disabled = false;
    }
    if (document.getElementById('' + ctrlcom + '_chkisold').checked == true) {
        ctl00_ContentPlaceHolder1_tdUmr.style.display = "block";
        ctl00_ContentPlaceHolder1_tdtxtUmr.style.display = "none";
        $('#' + ctrlcom + '_hdnNewOldUmrNo').val($('#' + ctrlcom + '_txtumrno').val());
        $('#' + ctrlcom + '_txtumrno').val('');
        $('#' + ctrlcom + '_tdUmr').val('');
    }
    else {
        ctl00_ContentPlaceHolder1_tdUmr.style.display = "none";
        ctl00_ContentPlaceHolder1_tdtxtUmr.style.display = "block";
        /*$('#' + ctrlcom + '_txtumrno').val('');
        $('#' + ctrlcom + '_txtumrno').val($('#' + ctrlcom + '_hdnNewOldUmrNo').val());*/
        $('#' + ctrlcom + '_hdnNewOldUmrNo').val('');
    }
}

function OnConcessionSelection(data) {

}
function OnDueAuthSelection(data)
{ }
function set_corporate_pre_cond(ddlpatienttype) {

    document.getElementById('ctl00_ContentPlaceHolder1_EmployerInfo1_uctpa_hdn_preCond').value = "All" + "^" + "" + "^" + ddlpatienttype;


    //    GetNonAsync(
    //            "Private/FrontOffice/OPDBILL.aspx/AddPreContion_corpotare",
    //            { ddlpatienttype: ddlpatienttype },
    //            function (JData) {
    //            },
    //            function (jqXHR, textStatus, errorThrown) {
    //            });
}
/* Patient Type Change */
var set_contextKey = '';
function ddlpatienttypeChange(ddlpatientype) {
    var pettypeval = document.getElementById('' + ctrlcom + '_ddlPatientType').value;
    if (pettypeval == 0) {
        $(".stoast").toastText("warning", "You Should Select Other Selection type ", 5, 3);
        document.getElementById('ctl00_ContentPlaceHolder1_ddlPatientType').value = 1;
        pettypeval = 1;
    }
    set_corporate_pre_cond(pettypeval);
    var regtypee = document.getElementById('' + ctrlcom + '_ddlRegType').value;
    if (regtypee == 16) {
        if (pettypeval == 2) {
            $(".stoast").toastText("warning", "Osp patient does not allow corporate registation", 5, 3);
            document.getElementById('' + ctrlcom + '_ddlPatientType').value = 1;
            return false;

        }
    }
    CompanyClearPopup();
    if (document.getElementById('' + ctrlcom + '_ReceiptControl2_chkismultiple').checked == true) {
        document.getElementById('' + ctrlcom + '_ReceiptControl2_chkismultiple').checked = false;
        document.getElementById('' + ctrlcom + '_ReceiptControl2_chkismultiple').disabled = false;
        OnMultipleDiscGrid();
    }
    $('#' + ctrlcom + '_ucConsultant_txtSearchControl').val('');
    // document.getElementById('' + ctrlcom + '_hdnDoctorID').value = '';
    //document.getElementById('' + ctrlcom + '_hdnDoctorName').value = '';
    var regfee = $('#' + ctrlcom + '_hdnregfee').val();
    /*Naresh*/
    document.getElementById('' + ctrlcom + '_UCServices_hdnGender_ID').value = document.getElementById('' + ctrlcom + '_ddlGender').value;
    var Length = $('table[id*=gvServices] tr:has(td)').length;
    $("table[id*=gvServices] tr:has(td)").each(function (e) {
        var srv_name = $(this).closest('tr').find('input[type=text][id*=txtServiceName]').val();
        var _srvId = $(this).closest('tr').find("input[type=hidden][id*=hdnServiceID]").val();
        var _doctor_id = $(this).closest('tr').find("input[type=hidden][id*=hdnDoctorID]").val();
        var _srv_class_id = $(this).closest('tr').find('input[type=hidden][id*=hdnServiceClass]').val();
        var cls_srv_id = $(this).closest('tr').find('input[type=hidden][id*=hdnClass_Srv_ID]').val();
        var con_srv_id = 0;
        if (document.getElementById('' + ctrlcom + '_UCServices_hdnallowconsservice').value.toUpperCase() == "TRUE") {
            con_srv_id = document.getElementById('' + ctrlcom + '_UCServices_hdnconssrvID').value;
        }
        if (con_srv_id == null || con_srv_id == undefined || con_srv_id == '' || con_srv_id == "undefined") { con_srv_id = 0; }
        if (srv_name != "REGISTRATION") {
            if (con_srv_id != _srvId) {
                OnRemoveConfirmation(this);
            }
        }


    });
    var Pat_Type = document.getElementById('' + ctrlcom + '_ddlPatientType').value;
    if (Pat_Type == '1') {
        //        if (document.getElementById('' + ctrlcom + '_UCServices_hdnallowconsservice').value.toUpperCase() == "TRUE") {
        //            AllowAdminCharges();
        //        } 

        DivCorporate.style.display = 'none';
        selectRegType(document.getElementById('' + ctrlcom + '_ddlRegType'));
    }
    /*Naresh*/
    var pettypeval = document.getElementById('' + ctrlcom + '_ddlPatientType').value;
    var regtype = document.getElementById('' + ctrlcom + '_ddlRegType');
    if (pettypeval != 0 || pettypeval != 1) {
        document.getElementById('' + ctrlcom + '_UCServices_divrptDispatch').disabled = false;
    }
    if (pettypeval == 5) {
        document.getElementById('' + ctrlcom + '_EmployerInfo1_lblpolicytype').disabled = false;
        document.getElementById('' + ctrlcom + '_EmployerInfo1_ddlpolicytype').disabled = false;
        document.getElementById('' + ctrlcom + '_EmployerInfo1_lblsuminsured').disabled = false;
        document.getElementById('' + ctrlcom + '_EmployerInfo1_txtsuminsured').disabled = false;
        if (ctl00_ContentPlaceHolder1_hdnClientName.value == 'UHWI') {
            divRegNotReq.style.display = 'none';
            $("#" + ctrlcom + "_EmployerInfo1_lblinsurenceName").text('Insurance Name');
            $("#" + ctrlcom + "_uccorporate_EmployerInfo1_lblinsurenceName").text('Insurance Name');
            $("#" + ctrlcom + "_uccorporate_lblinsurenceName").text('Insurance Name');
            $("#" + ctrlcom + "_uccorporate_lblcard").text('Insurance Card#');
            $("#" + ctrlcom + "_uccorporate_EmployerInfo1_lblcard").text('Insurance Card#');
            ctl00_ContentPlaceHolder1_EmployerInfo1_lblcard.innerHTML = 'Insurance Card#';
            ctl00_ContentPlaceHolder1_uccorporate_EmployerInfo1_lblcard.innerHTML = 'Insurance Card#';
            ctl00_ContentPlaceHolder1_uccorporate_EmployerInfo1_tdinsurence.style.display = 'none';
            ctl00_ContentPlaceHolder1_uccorporate_EmployerInfo1_tdinsurencegrid.style.display = 'none';
            ctl00_ContentPlaceHolder1_EmployerInfo1_tdinsurence.style.display = 'none';
            ctl00_ContentPlaceHolder1_EmployerInfo1_tdinsurencegrid.style.display = 'none';
        }
    }
    else {
        document.getElementById('' + ctrlcom + '_EmployerInfo1_lblpolicytype').disabled = true;
        document.getElementById('' + ctrlcom + '_EmployerInfo1_ddlpolicytype').disabled = true;
        document.getElementById('' + ctrlcom + '_EmployerInfo1_lblsuminsured').disabled = true;
        document.getElementById('' + ctrlcom + '_EmployerInfo1_txtsuminsured').disabled = true;
    }
    //  if (pettypeval == 2 || pettypeval == 5 || pettypeval == 8 || pettypeval == 9 || pettypeval == 10) {
    if (pettypeval != 1 && pettypeval != 3 && pettypeval != 4) {
        $('#' + ctrlcom + '_emppnl').show();
        clearpaymentdetails();
        if (pettypeval == "8") {
            var _str = "nnn"
            GetAsync(
                    "Private/FrontOffice/YRegistration.aspx/arogyasree1",
                    { str: _str },
                      function (jdata) {
                          var result = jdata.d;
                          if (result[0] != null) {
                              document.getElementById('' + ctrlcom + '_EmployerInfo1_uctpa_txtSearchControl').value = result[0]["COMPANY_DESC"];
                              document.getElementById('' + ctrlcom + '_EmployerInfo1_uctpa__hiddenText').value = result[0]["COMPANY_DESC"];
                              document.getElementById('' + ctrlcom + '_EmployerInfo1_uctpa__hiddenID').value = result[0]["COMPANY_ID"];
                              $('#' + ctrlcom + '_EmployerInfo1_uctpa_txtSearchControl').removeClass('red');
                          }
                      },
                    function (jqXHR, textStatus, errorThrown) {
                        $(".stoast").toastText("warning", errorThrown, 5, 3);
                    });
            /*document.getElementById('' + ctrlcom + '_EmployerInfo1_uctpa_txtSearchControl').value = "AAROGYASRI";
            document.getElementById('' + ctrlcom + '_EmployerInfo1_uctpa__hiddenText').value = "AAROGYASRI";
            document.getElementById('' + ctrlcom + '_EmployerInfo1_uctpa_txtSearchControl').disabled = true;
            document.getElementById('lk_btn_ctl00_ContentPlaceHolder1_EmployerInfo1_uctpa').disabled = true;*/
        }
        else {
            document.getElementById('' + ctrlcom + '_EmployerInfo1_uctpa_txtSearchControl').value = "";
            document.getElementById('' + ctrlcom + '_EmployerInfo1_uctpa__hiddenText').value = "";
            document.getElementById('' + ctrlcom + '_EmployerInfo1_uctpa_txtSearchControl').disabled = false;
            document.getElementById('lk_btn_ctl00_ContentPlaceHolder1_EmployerInfo1_uctpa').disabled = false;
        }
        /*if (regtype.value != 4) {
        //regtype.value = 9;
        }*/
        RegFeeAmt();
        if (getParameterByName("MODE") != "VIEW") {
            document.getElementById('' + ctrlcom + '_hdnregfee').value = 0;
            document.getElementById('' + ctrlcom + '_txtregfee').value = 0;
        }
        patamounts();
        document.getElementById('' + ctrlcom + '_chkEmpDue').disabled = false;
    }
    else {
        $('#' + ctrlcom + '_emppnl').hide();
        document.getElementById('DivCorpColors').style.display = 'none';
        regtype.value = 2;
        RegFeeAmt();
        // PatientRegFeeAmounts(regfee);
    }
    if (pettypeval == "0") {
        set_contextKey = "1";
        $("#" + ctrlcom + "_lblcorp").text('General');
        $('#txtcorporte').text("");
        // $("#DivPassport")[0].style.display = 'none';
        document.getElementById('' + ctrlcom + '_hidenpattypeval').value = ''
        document.getElementById('' + ctrlcom + '_txtcorporte').disabled = true;
    }
    else if (pettypeval == "1") {
        $("#" + ctrlcom + "_lblcorp").text('Employee');
        // $("#DivPassport")[0].style.display = 'none';
        set_contextKey = "1";
        $('#txtcorporte').text("");
        document.getElementById('' + ctrlcom + '_hidenpattypeval').value = ''
        document.getElementById('' + ctrlcom + '_txtcorporte').disabled = true;
        document.getElementById('' + ctrlcom + '_UCServices_divrptDispatch').disabled = true;
        $('#' + ctrlcom + '_txtcorporte').removeClass('red');

    }
    else if (pettypeval == '2') {
        $("#" + ctrlcom + "_lblcorp").text('Organisation');
        set_contextKey = "COMPANY";
        $('#txtcorporte').text("");
        document.getElementById("ctl00_ContentPlaceHolder1_txtcorporte").value = '';
        document.getElementById('' + ctrlcom + '_hidenpattypeval').value = ''
        document.getElementById('' + ctrlcom + '_txtcorporte').disabled = false;
        $('#' + ctrlcom + '_txtcorporte').addClass('red');
        document.getElementById('' + ctrlcom + '_txtcorporte').focus();
    }
    //    else if (pettypeval == "5") {
    //       $("#" + ctrlcom + "_lblcorp").text('Organisation');
    //        set_contextKey = "COMPANY";
    //        document.getElementById("ctl00_ContentPlaceHolder1_txtcorporte").value = '';
    //        //$("#DivPassport")[0].style.display = 'none';
    //        document.getElementById('' + ctrlcom + '_hidenpattypeval').value = ''
    //        document.getElementById('' + ctrlcom + '_txtcorporte').disabled = false;
    //        $('#' + ctrlcom + '_txtcorporte').addClass('red');
    //        document.getElementById('' + ctrlcom + '_txtcorporte').focus();
    //    }
    else {
        set_contextKey = "1";
        document.getElementById("ctl00_ContentPlaceHolder1_txtcorporte").value = '';
        document.getElementById('' + ctrlcom + '_hidenpattypeval').value = ''
        document.getElementById('' + ctrlcom + '_txtcorporte').disabled = true;
        //$("#DivPassport")[0].style.display = 'none';
        $('#' + ctrlcom + '_txtcorporte').removeClass('red');
    }
    if (pettypeval != 5 && ctl00_ContentPlaceHolder1_hdnClientName.value == 'UHWI') {
        $("#" + ctrlcom + "_EmployerInfo1_lblinsurenceName").text('Company/TPA');
        $("#" + ctrlcom + "_EmployerInfo1_lblcard").text('Medical Card#');
        ctl00_ContentPlaceHolder1_EmployerInfo1_tdinsurence.style.display = 'table-cell';
        ctl00_ContentPlaceHolder1_EmployerInfo1_tdinsurencegrid.style.display = 'table-cell';
    }
    Assigncardlabel(globalcarddata); CompanyMandColor();
    $('#' + ctrlcom + '_UCServices_gv_services_header_ctl03_txtServiceName').attr('tabindex', '55');
    //GetAsync("Private/FrontOffice/YRegistration.aspx/get_companydlts", { pettypeval: pettypeval }, function () { }, function (jqXHR, textStatus, errorThrown) { });
    // if (pettypeval == "8") { ctl00_ContentPlaceHolder1_EmployerInfo1_lblemployee.innerHTML = "Beneficiary"; } else { ctl00_ContentPlaceHolder1_EmployerInfo1_lblemployee.innerHTML = "Employee Name"; }
    document.getElementById('' + ctrlcom + '_chkEmpDue').checked = false;
    ServicesAutoContextKey();
    var pat_type = $('#' + ctrlcom + '_ddlPatientType').val();
    if (pat_type == 2 || pat_type == 5 || pat_type == 10 || pat_type == 9) {
        $('.allowMTariff').hide();
    }
    else {
        if (document.getElementById('' + ctrlcom + '_UCServices_hbnisshowpatcatagery').value.toUpperCase() == "YES") {
            $('.allowMTariff').show();
        }
        else {
            $('.allowMTariff').show();
            $('#' + ctrlcom + '_UCServices_ddlpatcat').prop('disabled', true);
            $('#' + ctrlcom + '_UCServices_ddltariff').prop('disabled', true);
        }
    }
    CalculateGridAmt(0);
}

function CheckCardDisable(obj) {
    var InputValue = document.getElementById('' + ctrlcom + '_ddlDiscountType').value;
    if (InputValue == 2) {
        $('#' + ctrlcom + '_uchealthcard_txtSearchControl').disabled = false;
        $('#lk_txt_options_ctl00_ContentPlaceHolder1_uchealthcard').disabled = false;
    }
    else {
        $('#' + ctrlcom + '_uchealthcard_txtSearchControl').disabled = true;
        $('#lk_txt_options_ctl00_ContentPlaceHolder1_uchealthcard').disabled = true;

    }
}
function OnHealthCardSelection(data) {
    var Amount = data.ACTUAL_AMOUNT;
    $('#' + ctrlcom + '_uchealthcard_txtSearchControl').val(data.HEALTH_CARD_TYPE_NAME);
    $('#' + ctrlcom + '_uchealthcard__hiddenID').val(data.HEALTH_CARD_TYPE_ID);

}
function CheckConcessionAmt(obj) {

}

function AssignFamilyDetails(patID) {
    var pat_id = patID;
    $.ajax({
        type: "POST",
        url: "YRegistration.aspx/GetFamily_Details",
        data: "{'RefId':'" + pat_id + "'}", //,'Session': '" + session_id + "'
        // data: "{'RefId':'" + pat_id + "','Bill_id':'" + Bill_ID + "','Session': '" + Sesssion_id + "',}",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        async: false,
        error: function (jqXHR, textStatus, errorThrown) {
            $(".stoast").toastText("warning", "family", 5, 3);
            //            alert("family"); 
        },
        success: function (JData) {
            $(".stoast").toastText("warning", "sucess.....", 5, 3);
            //            alert("sucess....");
            var data = JData.d[0];
        }
    });

}

function AssignReferalsInfo_New(patID) {  /*changed  AssignReferalsInfo to AssignReferalsInfo_New reason is this fun name othe js so calling that vip info is not getting*/
    var PatientID = patID;
    GetAsync(
                    "PatientRegistration.asmx/Get_Patient_Referals_Details",
                    { _patID: parseInt(PatientID) },
                    function (jdata) {
                        var result = jdata.d;

                        if (result[0] != null) {
                            var patienttype = result[0].IS_VIP;
                            if (patienttype.trim() == "V") {
                                document.getElementById('' + ctrlcom + '_rbt_pat_type_1').checked = true;
                            } else if (patienttype.trim() == "VV") {
                                document.getElementById('' + ctrlcom + '_rbt_pat_type_2').checked = true;
                            }
                            else {
                                document.getElementById('' + ctrlcom + '_rbt_pat_type_0').checked = true;
                            }
                            if (document.getElementById('' + ctrlcom + '_rbt_pat_type_1').checked == true || document.getElementById('' + ctrlcom + '_rbt_pat_type_2').checked == true) {
                               // offVipDetails.style.display = "table-row";
                                $(".offVipDetails").show();
                            } else {
                                //offVipDetails.style.display = "none";
                                $(".offVipDetails").hide();
                            }
                            document.getElementById('' + ctrlcom + '_dd_reg_source').value = result[0].VIP_TYPE_ID;
                            $('#' + ctrlcom + '_dd_reg_source').removeClass('red');
                            $('#' + ctrlcom + '_source_remarks').removeClass('red');
                            document.getElementById('' + ctrlcom + '_ucConsultant_txtSearchControl').value = result[0].CONSULTANT_NAME;
                            document.getElementById('' + ctrlcom + '_ucConsultant__hiddenID').value = result[0].DOCTOR_ID;
                            document.getElementById('' + ctrlcom + '_ucConsultant__hiddenText').value = result[0].CONSULTANT_NAME;
                            $('#' + ctrlcom + '_ucConsultant_txtSearchControl').removeClass('red');
                            //                            if (result[0].METHOD_OF_COMM_ID != '') {
                            //                                document.getElementById('' + ctrlcom + '_chkmodeComm_MultiSelectDDL').sValue = result[0].METHOD_OF_COMM_ID;
                            //                                document.getElementById('' + ctrlcom + '_chkmodeComm_hf_checkBoxText').sText = result[0].METHOD_OF_COMM_NAME;
                            //                                document.getElementById('' + ctrlcom + '_chkmodeComm_hf_checkBoxText').value = result[0].METHOD_OF_COMM_NAME;
                            //                                document.getElementById('' + ctrlcom + '_chkmodeComm_hf_checkBoxValue').value = result[0].METHOD_OF_COMM_ID;
                            //                            }
                            //                            else {
                            //                                result[0].METHOD_OF_COMM_ID = "--select--";
                            //                                document.getElementById('' + ctrlcom + '_chkmodeComm_MultiSelectDDL').value = result[0].METHOD_OF_COMM_ID;
                            //                            }

                            var _optionsVal1 = "<OPTION selected value='" + result[0].METHOD_OF_COMM_ID + "'>" + result[0].METHOD_OF_COMMUNICATION + "</OPTION>";
                            $('[id$=chkmodeComm_MultiSelectDDL]').empty().html(_optionsVal1);
                        }
                        if (result[0] != null && result[0] != undefined && result[0] != '') {
                            document.getElementById('' + ctrlcom + '_hdnref1').value = result[0].PAT_RFRL_DTL_ID;
                            document.getElementById('' + ctrlcom + '_hdnrefrev1').value = result[0].PAT_RFRL_DTL_REV_NO;
                        }
                        if (result[1] != null && result[1] != undefined && result[1] != '') {
                            document.getElementById('' + ctrlcom + '_hdnref2').value = result[1].PAT_RFRL_DTL_ID;
                            document.getElementById('' + ctrlcom + '_hdnrefrev2').value = result[1].PAT_RFRL_DTL_REV_NO;
                        }
                        if (result[2] != null && result[2] != undefined && result[2] != '') {
                            document.getElementById('' + ctrlcom + '_hdnref3').value = result[2].PAT_RFRL_DTL_ID;
                            document.getElementById('' + ctrlcom + '_hdnrefrev3').value = result[2].PAT_RFRL_DTL_REV_NO;
                        }
                        if (result[3] != null && result[3] != undefined && result[3] != '') {
                            document.getElementById('' + ctrlcom + '_hdnref4').value = result[3].PAT_RFRL_DTL_ID;
                            document.getElementById('' + ctrlcom + '_hdnrefrev1').value = result[3].PAT_RFRL_DTL_REV_NO;
                        }

                        for (i = 0; i < result.length; i++) {

                            var Source = result[i].REFERAL_SOURCE_ID;
                            var Name = result[i].REFERAL_NAME;
                            var Address = result[i].Address1 + result[i].Address2;
                            var Phone = result[i].REFERAL_MOBILENO;
                            var id = result[i].REFRL_ID;

                            var ReferalClass = result[i].REFERAL_CATEGORY_TO_NAME;
                            var ReferalClassId = result[i].REFERAL_CATEGORY_TO_ID;
                            var RefToID = result[i].REFERRED_TO_ID;
                            var RefToName = result[i].REFERRED_TO_NAME;

                            var is_sms = result[i].IS_SMS;
                            var is_letter = result[i].IS_LETTER;
                            var remarks = result[i].REFERAL_REMARKS;
                            var RefToName = result[i].REFERRED_TO_NAME;
                            var cattypeid = result[i].REFERAL_SOURCE_TO_ID;
                            var cattypename = result[i].REFERAL_SOURCE_TO_NAME;


                            if (i == 0) {
                                GlobalMyData1 = new Array();
                                multiDimArrayR1(i, Source, Name, id, ReferalClass, ReferalClassId, Address, Phone, id, '', '', RefToID, RefToName, is_sms, is_letter, remarks, cattypeid);
                                $.each(GlobalMyData1, function (ArrIndex, ChngRowIndex) {


                                    document.getElementById('' + ctrlcom + '_ucReferal_ddlreferral').value = Source;

                                    if (Source != 1) {
                                        document.getElementById('' + ctrlcom + '_ucReferal_ucreferalname_txtSearchControl').value = Name;

                                        document.getElementById('' + ctrlcom + '_ucReferal_txtrefaddr').value = Address;
                                        document.getElementById('' + ctrlcom + '_ucReferal_txtRefPhone').value = Phone;
                                        document.getElementById('' + ctrlcom + '_ucReferal__hdnID').value = id;


                                        document.getElementById('' + ctrlcom + '_ucReferal_ucReferedto_txtSearchControl').value = RefToName;
                                        document.getElementById('' + ctrlcom + '_ucReferal_ucReferedto__hiddenText').value = RefToName;
                                        document.getElementById('' + ctrlcom + '_ucReferal_ucReferedto__hiddenID').value = RefToID;
                                        document.getElementById('' + ctrlcom + '_ucReferal_ucrfrlsrc_txtSearchControl').value = ReferalClass;
                                        document.getElementById('' + ctrlcom + '_ucReferal_hdncattype_id').value = cattypeid;
                                        document.getElementById('' + ctrlcom + '_ucReferal_ucrfrlsrc__hiddenText').value = ReferalClass;
                                        document.getElementById('' + ctrlcom + '_ucReferal_ucrfrlsrc__hiddenID').value = ReferalClassId;
                                        document.getElementById('' + ctrlcom + '_ucReferal_txtremarks').value = remarks;

                                        if (is_sms == 'Y') {
                                            document.getElementById('' + ctrlcom + '_ucReferal_chkSMS').checked = true;
                                        }
                                        else {
                                            document.getElementById('' + ctrlcom + '_ucReferal_chkSMS').checked = false;
                                        }
                                        if (is_letter == 'Y') {
                                            document.getElementById('' + ctrlcom + '_ucReferal_chkLeter').checked = true;
                                        }
                                        else {
                                            document.getElementById('' + ctrlcom + '_ucReferal_chkLeter').checked = false;
                                        }
                                    }
                                });
                                if ($('[id*=ddlreferral]').find('option:selected').text() == "Walk-in") {
                                    document.getElementById('' + ctrlcom + '_ucReferal_ucreferalname_txtSearchControl').disabled = true;
                                    document.getElementById('lk_btn_ctl00_ContentPlaceHolder1_ucReferal_ucreferalname').disabled = true;
                                    $('#' + ctrlcom + '_ucReferal_ucreferalname_txtSearchControl').removeClass('red');
                                } else {
                                    //                                    if (document.getElementById('chkold').checked != true) {
                                    //                                        if (getParameterByName("MODE") == "VIEW") {
                                    //                                            document.getElementById('' + ctrlcom + '_ucReferal_ucreferalname_txtSearchControl').disabled = true;
                                    //                                            document.getElementById('lk_btn_ctl00_ContentPlaceHolder1_ucReferal_ucreferalname').disabled = true;
                                    //                                        } else {
                                    //                                            document.getElementById('' + ctrlcom + '_ucReferal_ucreferalname_txtSearchControl').disabled = false;
                                    //                                            document.getElementById('lk_btn_ctl00_ContentPlaceHolder1_ucReferal_ucreferalname').disabled = false;
                                    //                                        }
                                    //                                    }
                                }
                            }
                            if (i == 1) {
                                GlobalMyData2 = new Array();
                                multiDimArrayR2(i, Source, Name, id, ReferalClass, ReferalClassId, Address, Phone, id, '', '', RefToID, RefToName, is_sms, is_letter, remarks, cattypeid);

                            }
                            if (i == 2) {
                                GlobalMyData3 = new Array();
                                multiDimArrayR3(i, Source, Name, id, ReferalClass, ReferalClassId, Address, Phone, id, '', '', RefToID, RefToName, is_sms, is_letter, remarks, cattypeid);

                            }
                            if (i == 3) {
                                GlobalMyData4 = new Array();
                                multiDimArrayR4(i, Source, Name, id, ReferalClass, ReferalClassId, Address, Phone, id, '', '', RefToID, RefToName, is_sms, is_letter, remarks, cattypeid);

                            }
                        }
                        if (document.getElementById('' + ctrlcom + '_ddlRegType').value != '5') { OnPageValidation(); }

                    },
                    function (jqXHR, textStatus, errorThrown) {
                        $(".stoast").toastText("warning", errorThrown, 5, 3);
                    });

}

function AssignAddrDtls(patID) {
    var PatientID = patID;
    GetAsync(
                    "PatientRegistration.asmx/Get_Patient_Address_Dtls",
                    { _patID: parseInt(PatientID) },
                    function (jdata) {
                        var result = jdata.d;
                        if (result[0] != null) {
                            document.getElementById('' + ctrlcom + '_hdnadd1').value = result[0].ADDRESS_ID;
                            document.getElementById('' + ctrlcom + '_hdnaddrev1').value = result[0].ADDRESS_REV_NO;
                        }
                        if (result[1] != null) {
                            document.getElementById('' + ctrlcom + '_hdnaddrev2').value = result[1].ADDRESS_REV_NO;
                            document.getElementById('' + ctrlcom + '_hdnadd2').value = result[1].ADDRESS_ID;
                        }
                        if (result[2] != null) {
                            document.getElementById('' + ctrlcom + '_hdnadd3').value = result[2].ADDRESS_ID;
                            document.getElementById('' + ctrlcom + '_hdnaddrev3').value = result[2].ADDRESS_REV_NO;
                            document.getElementById('' + ctrlcom + '_Address1_ddrelationaddr').value = result[2].ADDR_TYPE_ID;
                        }
                        for (i = 0; i < result.length; i++) {
                            var Area = result[i].AREA_ID;
                            var area_name = result[i].AREA_NAME;
                            var City = result[i].CITY_ID;
                            var Address = result[i].Address1 + result[i].Address2;
                            var city_name = result[i].CITY_NAME;
                            var State = result[i].STATE_ID;
                            var state_name = result[i].STATE_NAME;
                            var Country = result[i].COUNTRY_ID;
                            var country_name = result[i].COUNTRY_NAME;
                            var PinZip = result[i].ZipCode;
                            var Address1 = result[i].Address1;
                            var Address2 = result[i].Address2;
                            var District = result[i].DISTRICT_ID;
                            var District_name = result[i].DISTRICT_NAME;
                            var SameasPresentAddress = result[i].PREST_PERMI;
                            var CopyFromPresentAddress = result[i].PREST_OTHER;
                            DivAdressRowIndex = DivAdressRowIndex == 0 ? 1 : DivAdressRowIndex;

                            if (i == 0) {
                                GlobalMyAddress1 = new Array();
                                multiDimAddress1(DivAdressRowIndex, SameasPresentAddress, CopyFromPresentAddress, Address1, Address2, Area, PinZip, City, District, State,
        Country, city_name, state_name, area_name, District_name, country_name);
                                $.each(GlobalMyAddress1, function (ArrIndex, ChngRowIndex) {
                                    if (ChngRowIndex.rowIndex == DivAdressRowIndex) {
                                        document.getElementById('' + ctrlcom + '_Address1_txtAddress1').value = ChngRowIndex.Address1;
                                        document.getElementById('' + ctrlcom + '_Address1_txtAddress2').value = ChngRowIndex.Address2;
                                        document.getElementById('' + ctrlcom + '_Address1_AreaUserControl1_txtSearchControl').value = ChngRowIndex.area_name;
                                        document.getElementById('' + ctrlcom + '_Address1_AreaUserControl1__hiddenID').value = ChngRowIndex.Area;
                                        document.getElementById('' + ctrlcom + '_Address1_AreaUserControl1__hiddenText').value = ChngRowIndex.area_name;
                                        document.getElementById('' + ctrlcom + '_Address1_hdnAreaId').value = ChngRowIndex.Area;
                                        document.getElementById('' + ctrlcom + '_Address1_CityUserControl1').value = ChngRowIndex.city_name;
                                        document.getElementById('' + ctrlcom + '_Address1_hdncityid').value = ChngRowIndex.City;
                                        document.getElementById('' + ctrlcom + '_Address1_StateUserControl1').value = ChngRowIndex.state_name;
                                        document.getElementById('' + ctrlcom + '_Address1_hdnstateid').value = ChngRowIndex.State;
                                        document.getElementById('' + ctrlcom + '_Address1_CountryUserControl1').value = ChngRowIndex.country_name;
                                        document.getElementById('' + ctrlcom + '_Address1_hdncountryid').value = ChngRowIndex.Country;
                                        document.getElementById('' + ctrlcom + '_Address1_DistricUserControl1').value = ChngRowIndex.District_name;
                                        document.getElementById('' + ctrlcom + '_Address1_hdndistrictid').value = ChngRowIndex.District;
                                        document.getElementById('' + ctrlcom + '_Address1_txtPin').value = ChngRowIndex.PinZip;
                                        document.getElementById('' + ctrlcom + '_Address1_hdnpincode').value = ChngRowIndex.PinZip;
                                    }

                                });
                            }

                            if (i == 1) {
                                GlobalMyAddress2 = new Array();
                                multiDimAddress2(DivAdressRowIndex, SameasPresentAddress, CopyFromPresentAddress, Address1, Address2, Area, PinZip, City, District, State,
             Country, city_name, state_name, area_name, District_name, country_name);
                                if (SameasPresentAddress == "Y") {
                                    document.getElementById('' + ctrlcom + '_Address1_chkSameasPresentAddress').checked = true;
                                } else {
                                    document.getElementById('' + ctrlcom + '_Address1_chkSameasPresentAddress').checked = false;
                                }

                            }
                            if (i == 2) {
                                GlobalMyAddress3 = new Array();
                                multiDimAddress3(DivAdressRowIndex, SameasPresentAddress, CopyFromPresentAddress, Address1, Address2, Area, PinZip, City, District, State,
            Country, city_name, state_name, area_name, District_name, country_name);
                                if (CopyFromPresentAddress == "Y") {
                                    document.getElementById('' + ctrlcom + '_Address1_chkCopyFromPresentAddress').checked = true;

                                } else {
                                    document.getElementById('' + ctrlcom + '_Address1_chkCopyFromPresentAddress').checked = false;

                                }
                            }
                            document.getElementById('' + ctrlcom + '_Address1_txtMobile1').value = result[i].MOBILE_PHONE;
                            document.getElementById('' + ctrlcom + '_txtMobile3').value = result[i].OFFICE_PHONE;
                            document.getElementById('' + ctrlcom + '_Address1_txtMobile2').value = result[i].HOME_PHONE;
                            document.getElementById('' + ctrlcom + '_txtemail').value = result[i].Email_ID;
                            if (document.getElementById('' + ctrlcom + '_Address1_txtMobile2').value == 0) {
                                document.getElementById('' + ctrlcom + '_Address1_txtMobile2').value = '';
                            }
                        }
                        if (document.getElementById('' + ctrlcom + '_ddlRegType').value != '5') { OnPageValidation(); }

                    },
                    function (jqXHR, textStatus, errorThrown) {
                        $(".stoast").toastText("warning", errorThrown, 5, 3);
                    });

}



function OnCheckFocus() {
}

function getempinfodetails(pat_id) {
    $.ajax({
        type: "POST",
        url: "YRegistration.aspx/getempdetails",
        data: "{'pat_id':'" + pat_id + "'}",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        error: function (jqXHR, textStatus, errorThrown) { },
        success: function (JData) {
            CompanyMandColorchange();
            document.getElementById('' + ctrlcom + '_EmployerInfo1_EmployerControl1_txtSearchControl').value = JData.d[0].COMPANY_NAME;
            document.getElementById('' + ctrlcom + '_EmployerInfo1_uctpa__hiddenID').value = JData.d[0].COMPANY_ID;
            $('#' + ctrlcom + '_hdnCompanyID').val(JData.d[0].COMPANY_ID);
            document.getElementById('' + ctrlcom + '_EmployerInfo1_EmployerControl1__hiddenText').value = JData.d[0].COMPANY_NAME;
            if (JData.d[0].RelationName != undefined && JData.d[0].RelationName != "") {
                $("#" + ctrlcom + "_EmployerInfo1_ddlrelation option:Contains(" + JData.d[0].RelationName + ")").attr("selected", "selected");
            } else {
                document.getElementById('' + ctrlcom + '_EmployerInfo1_ddlrelation').value = 0;
            }
            document.getElementById('' + ctrlcom + '_EmployerInfo1_txtEmployeeName').value = JData.d[0].EmployeeName;
            document.getElementById('' + ctrlcom + '_EmployerInfo1_txtEmploeeID').value = JData.d[0].EMPLOYEE_ID;
            document.getElementById('' + ctrlcom + '_EmployerInfo1_hdntpaid').value = JData.d[0].TPA_ID;
            document.getElementById('' + ctrlcom + '_EmployerInfo1_uctpa__hiddenID').value = JData.d[0].TPA_ID;
            document.getElementById('' + ctrlcom + '_EmployerInfo1_uctpa_txtSearchControl').value = JData.d[0].TPA_NAME;
            document.getElementById('' + ctrlcom + '_EmployerInfo1_txtDesignation').value = JData.d[0].DESIGNATION;
            document.getElementById('' + ctrlcom + '_EmployerInfo1_txtempgrade').value = JData.d[0].EMP_GRADE_ID;
            document.getElementById('' + ctrlcom + '_EmployerInfo1_txtDept').value = JData.d[0].DEPARTMENT;
            document.getElementById('' + ctrlcom + '_EmployerInfo1_txtBranch').value = JData.d[0].BRANCH;
            document.getElementById('' + ctrlcom + '_EmployerInfo1_txtEmpContactNo').value = JData.d[0].CONTACTNO;
            document.getElementById('' + ctrlcom + '_EmployerInfo1_txtEmpMRNo').value = JData.d[0].CARD_NO;
            document.getElementById('' + ctrlcom + '_EmployerInfo1_txtemployername').value = JData.d[0].EMPLOYER_NAME;
            document.getElementById('' + ctrlcom + '_EmployerInfo1_txtletterissuedby').value = JData.d[0].LETTER_ISSUED_BY;
            var creditlimitamt = JData.d[0].CREDIT_LIMIT_AMT;
            creditlimitamt = creditlimitamt == '' || undefined || '0.00' ? '' : creditlimitamt;
            document.getElementById('' + ctrlcom + '_EmployerInfo1_txtcreditlimitamt').value = JData.d[0].CREDIT_LIMIT_AMT;
            document.getElementById('' + ctrlcom + '_EmployerInfo1_txtEmpCardValidity').value = new Date(JData.d[0].CARD_VALIDITY).format('dd-MMM-yyyy');
            document.getElementById('' + ctrlcom + '_EmployerInfo1_txtlettervalidity').value = new Date(JData.d[0].CARD_VALIDITY).format('dd-MMM-yyyy');
            document.getElementById('' + ctrlcom + '_EmployerInfo1_txtdateofissue').value = new Date(JData.d[0].CARD_ISSUE_DT).format('dd-MMM-yyyy');
            document.getElementById('' + ctrlcom + '_EmployerInfo1_txtrefletter').value = JData.d[0].REFERAL_LETTER_NO;
            document.getElementById('' + ctrlcom + '_EmployerInfo1_txtrefissuedt').value = new Date(JData.d[0].REFERRAL_LETTER_ISSUE_DT).format('dd-MMM-yyyy');
            document.getElementById('' + ctrlcom + '_EmployerInfo1_txtlettervalidity').value = new Date(JData.d[0].REFERRAL_VALIDITY_DT).format('dd-MMM-yyyy');

            if (getParameterByName('MODE') == 'VIEW') {
                Colorschange();
                //document.getElementById('' + ctrlcom + '_txtregfee').value = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtgrosstotal').value
            }
        }
    });
}

function AssignPatInfo_Dtls(patID) {
    var PatientID = patID;
    GetAsync(
                    "PatientRegistration.asmx/Get_Patient_Details",
                    { _patID: parseInt(PatientID) },
                    function (jdata) {
                        var result = jdata.d;
                        result[0].PRE_REG_NO = result[0].PRE_REG_NO === 0 || null || undefined ? '' : result[0].PRE_REG_NO;
                        result[0].PRE_REG_ID = result[0].PRE_REG_ID == '' || null || undefined ? 0 : result[0].PRE_REG_ID;
                        if (document.getElementById('' + ctrlcom + '_hdnsamepatflag').value == "Y") {
                            if (result[0].REG_EXPIRY_DT != null && result[0].REG_EXPIRY_DT != '' && result[0].REG_EXPIRY_DT != undefined) {
                                var regExpDt = result[0].REG_EXPIRY_DT.split(' ')[0];
                                var ExpDt = new Date(regExpDt).format('dd-MMM-yyyy');
                                if (new Date(regExpDt).format('dd-MMM-yyyy') == "NaN--NaN") {
                                    ExpDt = regExpDt.split('-')[0] + "/" + regExpDt.split('-')[1] + "/" + regExpDt.split('-')[2];
                                }
                                var REGExpDt = new Date(ExpDt).format('dd-MMM-yyyy');

                                var PatientID = result[0].PATIENT_ID;
                                var currDt = new Date().format("dd-MMM-yyyy");
                                if (REGExpDt.length == 11) {
                                    var sedt = REGExpDt;
                                    var currDt = new Date().format('dd-MMM-yyyy');
                                    var res = CompareExpireDate(sedt, currDt);
                                    if (res == "d1<d2") {
                                        $(".stoast").toastText("warning", "Patient Registration Validity is Over on,'" + REGExpDt + "' , need to Renewal", 5, 3);
                                        document.getElementById('' + ctrlcom + '_chkisold').checked = true;
                                        $('#' + ctrlcom + '_ucUMRno_txtSearchControl').val(result[0].UmrNo);
                                        $('#' + ctrlcom + '_ucUMRno__hiddenID').val(result[0].PATIENT_ID);
                                        $('#' + ctrlcom + '_ucUMRno__hiddenText').val(result[0].UmrNo);
                                        ShowUmrNos();

                                    } else {
                                        $(".stoast").toastText("warning", "Already this Patient is Registered", 5, 3);
                                        //                                        alert('Already this Patient is Registered');
                                        Clearpopup();
                                        OnPageValidation();
                                        var form_name = $('#' + ctrlcom + '_UCServices_hdnSrvFormName').val();
                                        if (form_name == 'OPQUICK') {
                                            if (document.getElementById('' + ctrlcom + '_UCServices_hdnallowconsservice').value.toUpperCase() == "TRUE") {
                                                AllowAdminCharges();
                                            }
                                        }

                                        return false;
                                    }
                                }
                            }
                        }
                        if (result[0].PRE_REG_NO != '') {
                            document.getElementById('' + ctrlcom + '_UcAppointmentNo_txtSearchControl').value = result[0].PRE_REG_NO;
                            $('#' + ctrlcom + '_pre_regi').val('2');
                        }
                        else if (result[0].APPT_NO != "0") {
                            document.getElementById('' + ctrlcom + '_UcAppointmentNo_txtSearchControl').value = result[0].APPT_NO;
                            $('#' + ctrlcom + '_pre_regi').val('1');
                            document.getElementById('divapmnt').style.display = "block";
                        }
                        else if (result[0].HEALTH_CARD_NAME != '' && result[0].HEALTH_CARD_TYPE_NAME != '') {
                            document.getElementById('' + ctrlcom + '_Address1_uchccrdtype_txtSearchControl').value = result[0].HEALTH_CARD_TYPE_NAME;
                            document.getElementById('' + ctrlcom + '_Address1_ucHc_crd_no_txtSearchControl').value = result[0].HEALTH_CARD_NAME;
                            $('#' + ctrlcom + '_Address1_ddhcpatnames').append('<option value=1>' + result[0].FIRST_NAME + ' ' + result[0].MIDDLE_NAME + ' ' + result[0].LAST_NAME + '</option>')
                            $('[id*=DivHcCard]')[0].style.display = 'block';
                            $('#btnhcclose').prop('disabled', false);
                            ctl00_ContentPlaceHolder1_Address1_uchccrdtype_txtSearchControl.disabled = true;
                            lk_btn_ctl00_ContentPlaceHolder1_Address1_uchccrdtype.disabled = true;
                            ctl00_ContentPlaceHolder1_Address1_ddhcpatnames.disabled = true;
                            ctl00_ContentPlaceHolder1_Address1_btnhcok.disabled = true;


                        }
                        loadimage(jdata.d);
                        AssignReferalsInfo_New(patID);
                        AssignAddrDtls(patID);
                        document.getElementById('' + ctrlcom + '_ddlTitle').value = result[0].TITILE_ID; // TITLE;
                        document.getElementById('' + ctrlcom + '_txtFirstName').value = result[0].FIRST_NAME;
                        document.getElementById('' + ctrlcom + '_txtMiddleName').value = result[0].MIDDLE_NAME;
                        document.getElementById('' + ctrlcom + '_txtLastName').value = result[0].LAST_NAME;
                        document.getElementById('' + ctrlcom + '_txtDisplayname').innerHTML = result[0].DISPLAY_NAME;
                        if (result[0].IS_NEWBORN == "Y") {
                            document.getElementById('' + ctrlcom + '_ChkNBorn').checked = true;
                            document.getElementById('' + ctrlcom + '_newAgeUc_imgCal').style.display = 'block';
                            document.getElementById('pediatric').style.display = 'block';
                            document.getElementById('YYMMDD').style.display = 'none';
                            if (result[0].AGE.length > 10) {
                                document.getElementById('' + ctrlcom + '_newAgeUc_txtHH').value = result[0].AGE.split(',')[3];
                                document.getElementById('' + ctrlcom + '_newAgeUc_txtMM').value = result[0].AGE.split(',')[4];
                            }
                        } else {
                            document.getElementById('' + ctrlcom + '_ChkNBorn').checked = false;
                        }
                        CheckIsSeniorCitizen(result[0].IS_SENIOR_CITIZEN);
                        var Dob = typeof result[0].DOB == "string" ? result[0].DOB : '';
                        var strDob = Dob.split(" ");
                        var DOB = strDob[0];
                        var DateOfBirth = '';
                        if (new Date(DOB).format('dd-MMM-yyyy') == "NaN--NaN") {
                            DateOfBirth = DOB.split('-')[0] + '/' + DOB.split('-')[1] + '/' + DOB.split('-')[2];
                        }
                        else {
                            DateOfBirth = (DOB);
                        }
                        var DOfB = new Date(DateOfBirth).format('dd-MMM-yyyy');
                        document.getElementById('' + ctrlcom + '_newAgeUc_txtDob').value = DOfB;
                        var age = result[0].AGE;
                        var str = age.split(",");
                        var y = str[0];
                        var m = str[1];
                        var d = str[2];
                        document.getElementById('' + ctrlcom + '_newAgeUc_txtYear').value = y;
                        document.getElementById('' + ctrlcom + '_newAgeUc_txtMonths').value = m;
                        document.getElementById('' + ctrlcom + '_newAgeUc_txtDay').value = d;
                        document.getElementById('' + ctrlcom + '_ddlGender').value = result[0].GENDER_ID;
                        document.getElementById('' + ctrlcom + '_txtMotherMName').value = result[0].MOTHER_MAIDEN_NAME;
                        document.getElementById('' + ctrlcom + '_txtfathername').value = result[0].FATHER_NAME;
                        document.getElementById('' + ctrlcom + '_ddlMaritalStatus').value = result[0].MARITAL_STATUS_ID;
                        document.getElementById('' + ctrlcom + '_ddlBloodGroup').value = result[0].BLOOD_GROUP_ID;
                        document.getElementById('' + ctrlcom + '_ddlEthnicity').value = result[0].ETHNICITY_ID;
                        document.getElementById('' + ctrlcom + '_ddlNationality').value = result[0].NATIONALITY_ID;
                        document.getElementById('' + ctrlcom + '_ucConsultant_txtSearchControl').value = result[0].CONSULTANT;
                        document.getElementById('' + ctrlcom + '_ddlResPerson').value = result[0].RES_PERSON_REL_ID;
                        document.getElementById('' + ctrlcom + '_txtResPerson').value = result[0].RES_PERSON_NAME;
                        document.getElementById('' + ctrlcom + '_ddlOccupation').value = result[0].OCCUPATION_ID;
                        document.getElementById('' + ctrlcom + '_ddlReligion').value = result[0].RELIGION_ID;
                        document.getElementById('' + ctrlcom + '_ddlPatientType').value = result[0].PATIENT_TYPE_ID;
                        document.getElementById('' + ctrlcom + '_txtNotes').value = result[0].NOTES;
                        document.getElementById('' + ctrlcom + '_UcFamilyReff_txtSearchControl').value = result[0].PARENT_UMR_NO

                        if (result[0].PATIENT_TYPE_ID == 2) {
                            $('#' + ctrlcom + '_emppnl').show();
                            getempinfodetails(patID);
                        }
                        else {
                            $('#' + ctrlcom + '_emppnl').hide();
                        }
                        var dnb = result[0].IS_STOP_ALERT;
                        if (dnb == "Y") {
                            document.getElementById('' + ctrlcom + '_chkstopalert').checked = true;
                        } else { document.getElementById('' + ctrlcom + '_chkstopalert').checked = false; }
                        document.getElementById('' + ctrlcom + '_ddlproofid').value = result[0].ID_PROOF_TYPE_ID;
                        if (result[0].ID_PROOF_TYPE_ID == 6) {
                            document.getElementById('' + ctrlcom + '_txtPassprotno').value = result[0].PASSPORT_NO;
                            document.getElementById('' + ctrlcom + '_txtIssueDt').value = new Date(result[0].ISSUE_DT).format('dd-MMM-yyyy');
                            document.getElementById('' + ctrlcom + '_txtExpiryDt').value = new Date(result[0].EXPIRY_DT).format('dd-MMM-yyyy');
                            document.getElementById('' + ctrlcom + '_txtissuedat').value = result[0].PassportIssueAT;
                        }
                        document.getElementById('' + ctrlcom + '_txtSSN').value = result[0].ID_PROOF_NAME;
                        document.getElementById('' + ctrlcom + '_ddlquestionary').value = result[0].QUESTIONARY_ID;
                        document.getElementById('' + ctrlcom + '_ddlRegType').value = result[0].REG_TYPE_ID;
                        if (result[0].REG_TYPE_ID == 8) {
                            document.getElementById('' + ctrlcom + '_newAgeUc_imgCal').style.display = 'block';
                            document.getElementById('pediatric').style.display = 'block';
                            document.getElementById('YYMMDD').style.display = 'none';
                        }
                        //  document.getElementById('' + ctrlcom + '_UcFamilyReff_txtSearchControl').value = result[0].FIRST_NAME;
                        document.getElementById('' + ctrlcom + '_txtumrno').value = result[0].UmrNo;
                        document.getElementById('' + ctrlcom + '_txtRegistration').value = result[0].BILL_NO;
                        document.getElementById('' + ctrlcom + '_txtregfee').value = result[0].NET_AMOUNT;
                        document.getElementById('' + ctrlcom + '_txtRegDateTime').value = new Date(result[0].REGISTRATION_DT).format('dd-MMM-yyyy');
                        document.getElementById('' + ctrlcom + '_txtregValidity').value = new Date(result[0].REG_EXPIRY_DT).format('dd-MMM-yyyy');

                        //                        if (result[0].METHOD_OF_COMM_ID != '') {
                        //                            document.getElementById('' + ctrlcom + '_chkmodeComm_MultiSelectDDL').text = result[0].METHOD_OF_COMM_NAME;
                        //                            document.getElementById('' + ctrlcom + '_chkmodeComm_MultiSelectDDL').Value = result[0].METHOD_OF_COMM_ID;
                        //                            var _optionsVal1 = "<OPTION selected value='" + result[0].METHOD_OF_COMM_ID + "'>" + result[0].METHOD_OF_COMM_NAME + "</OPTION>";
                        //                            $('[id$=chkmodeComm_MultiSelectDDL]').empty().html(_optionsVal1);
                        //                        }
                        //                        else {
                        //                            result[0].METHOD_OF_COMM_ID = "--select--";
                        //                            document.getElementById('' + ctrlcom + '_chkmodeComm_MultiSelectDDL').value = result[0].METHOD_OF_COMM_ID;
                        //                        }

                        var is_new_born = result[0].IS_NEWBORN;
                        var vip = result[0].IS_VIP;
                        var is_old = result[0].IS_VIP;
                        var PatRegFee = $('#' + ctrlcom + '_hdnregfee').val(); PatientRegFeeAmounts(PatRegFee);
                        if (vip == "V") {
                            document.getElementById('' + ctrlcom + '_rbt_pat_type_1').checked = true;
                            PatientTypeChange();
                        }
                        else if (vip == "VV") {
                            document.getElementById('' + ctrlcom + '_rbt_pat_type_2').checked = true;
                            PatientTypeChange();
                        }
                        else {
                            document.getElementById('' + ctrlcom + '_rbt_pat_type_0').checked = true;
                        }
                        var Bill_ID = result[0].BILL_ID;
                        if (getParameterByName("MODE") == "VIEW") {
                            Advanced_Details(Bill_ID);
                            var PatRegFee = $('#' + ctrlcom + '_hdnregfee').val(); PatientRegFeeAmounts(PatRegFee);
                        }
                        AssignVisaDetails(result);
                    });
}

function AssignVisaDetails(result) {
    document.getElementById('' + ctrlcom + '_ucIssuedAt_txtSearchControl').disabled = true;
    document.getElementById('' + ctrlcom + '_txtVisaControlNo').disabled = true;
    document.getElementById('' + ctrlcom + '_ddlVisatype').disabled = true;
    document.getElementById('' + ctrlcom + '_txtVisaIssueDt').disabled = true;
    document.getElementById('' + ctrlcom + '_txtVisaExpDt').disabled = true;
    document.getElementById('' + ctrlcom + '_txtVisaIssuedBy').disabled = true;
    if (result != null) {
        document.getElementById('' + ctrlcom + '_ucIssuedAt_txtSearchControl').value = typeof result[0].ISSUE_LOCATION == "string" ? result[0].ISSUE_LOCATION : "";
        document.getElementById('' + ctrlcom + '_ucIssuedAt__hiddenID').value = result[0].ISSED_LOCATION_ID;
        document.getElementById('' + ctrlcom + '_ucIssuedAt__hiddenText').value = result[0].ISSUE_LOCATION;
        document.getElementById('' + ctrlcom + '_txtVisaControlNo').value = typeof result[0].VISA_CONTROL_NO == "string" ? result[0].VISA_CONTROL_NO : "";
        document.getElementById('' + ctrlcom + '_ddlVisatype').value = result[0].VISA_TYPE_ID;
        if (result[0].VS_ISSUE_DT == "" || null || undefined) { document.getElementById('' + ctrlcom + '_txtVisaIssueDt').value = ""; } else {
            document.getElementById('' + ctrlcom + '_txtVisaIssueDt').value = typeof result[0].VS_ISSUE_DT == "string" ? new Date(result[0].VS_ISSUE_DT).format('dd-MMM-yyyy') : "";
        }
        if (result[0].VS_EXPIRY_DT == "" || null || undefined) { document.getElementById('' + ctrlcom + '_txtVisaExpDt').value = ""; } else {
            document.getElementById('' + ctrlcom + '_txtVisaExpDt').value = typeof result[0].VS_EXPIRY_DT == "string" ? new Date(result[0].VS_EXPIRY_DT).format('dd-MMM-yyyy') : "";
        }
        document.getElementById('' + ctrlcom + '_txtVisaIssuedBy').value = '';
    }
}

function loadimage(result) {
    if (result != null) {
        var STR = result[0].PATIENT_IMAGE;
        var _baseString = ''; var _UmrNo = result[0].UmrNo, _reference_id = result[0].PATIENT_ID;
        GetAsync(
            "Private/FrontOffice/OPDBILLNEW.aspx/Get_imagedetails",
            { _str: STR, UMR_NO: _UmrNo, REFERENCE_ID: _reference_id, REFERENCE_TYPE_ID: "1" },
            function (data) {
                _baseString = data.d;
                if (_baseString != '' && _baseString != undefined && _baseString != null) {
                    $('.img').attr('src', "data:image/jpg;base64," + _baseString);
                }
                else {
                    $('.img').attr('src', "");
                }
            },
            function (jqXHR, textStatus, errorThrown) {
                // $(".stoast").toastText("warning", "Error", 5, 3);
                //                alert('error');
            });
    }
}
function Advanced_Details(Bill_ID) {
    var _Bill_ID = Bill_ID;
    GetAsync(
                    "PatientRegistration.asmx/Get_Advanced_Details",
                    { billid: _Bill_ID },
                    function (jdata) {
                        var data = jdata.d;
                        if (data[0].PAYMENT_TYPE_ID == 1) {
                            $("#lblquick,#lblmdis").removeClass("select");
                            $("#lbladvanced").addClass("select");
                            $(".col-hide tr:nth-child(3),.col-hide tr:nth-child(4),.col-hide tr:nth-child(5),.col-hide tr:nth-child(6),.col-hide tr:nth-child(7),.col-hide tr:nth-child(8),.col-hide tr:nth-child(10),.col-hide tr:nth-child(13),.col-hide tr:nth-child(14),.col-hide tr:nth-child(15)").show();
                            $("#payitem2,._quick-div").show();
                            $("._mdisc").css('width', '72%');
                            $("#payitem1,#payitem3").hide();
                            $('[id*=ConcessionAmt]')[0].style.display = 'none';
                        }
                        if (data[0].PAYMENT_TYPE_ID == 2) {
                        }
                        var rcount = 0;
                        for (var i = 0; i <= data.length - 1; i++) {
                            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtquickremarks').value = data[i].REMARKS;
                            var card_no = data[i].CC_CARD_NO;
                            var dc_no = data[i].DC_CARD_NO;
                            if (card_no == undefined) { card_no = ''; }
                            if (card_no != '' || dc_no != '') {
                                document.getElementById('' + ctrlcom + '_ReceiptControl2_txtreceiptNoQuick').value = data[i].TRANSACTION_NO;
                                document.getElementById('' + ctrlcom + '_ReceiptControl2_txtreceiptDtQuick').value = new Date(data[i].TRANSACTION_DT).format('dd--MMM-yyyy');
                                document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatgross').value = data[i].Bill_amount;
                                document.getElementById('' + ctrlcom + '_ReceiptControl2_txtgrosstotal').value = data[i].Bill_amount;
                                document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatientReceiptAmt').value = data[i].TOTAL_AMOUNT;
                                document.getElementById('' + ctrlcom + '_ReceiptControl2_txtTotalReciptAmt').value = data[i].TOTAL_AMOUNT;
                                document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatdue').value = data[i].Due_amount;

                                document.getElementById('' + ctrlcom + '_ReceiptControl2_txtCardAmt').value = data[i].AMOUNT;
                                document.getElementById('' + ctrlcom + '_ReceiptControl2_txtcardExpiredt').value = new Date(data[i].CC_VALID_TO_DT).format('dd--MMM-yyyy');

                                if (card_no != '') {
                                    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtcardNoCmp').value = data[i].CC_CARD_NO;
                                    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtcardAuther').value = data[i].CC_AUTH_CD;
                                }
                                else if (dc_no != '') {
                                    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtcardNoCmp').value = data[i].DC_CARD_NO;
                                    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtcardAuther').value = data[i].DC_AUTH_CD;
                                }
                                document.getElementById('' + ctrlcom + '_ReceiptControl2_ddcardType').value = data[i].CC_CARD_TYPE_ID;
                                //document.getElementById('' + ctrlcom + '_ReceiptControl2_ddbankName').value = data[i].CC_ISSUE_BANK_NAME;
                                $("#" + ctrlcom + "_ReceiptControl2_ddbankName option:Contains(" + data[i].CC_ISSUE_BANK_NAME + ")").attr("selected", "selected");
                                document.getElementById('' + ctrlcom + '_ReceiptControl2_txtTotalDue').value = data[i].Due_amount;
                                document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatgrossamt').value = data[i].CONCESSION_AMOUNT;
                                document.getElementById('' + ctrlcom + '_ReceiptControl2_txtgrossamttotal').value = data[i].CONCESSION_AMOUNT;
                                //                            document.getElementById('' + ctrlcom + '_ReceiptControl2_uccardAuther_txtSearchControl').value = data[i].DUE_AUTH_ID; //DUE_AUTH_NAME
                                document.getElementById('' + ctrlcom + '_ReceiptControl2_Search3_txtSearchControl').value = data[i].DUE_AUTH_NAME;
                            }
                            else {
                                document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatgross').value = data[i].Bill_amount;
                                document.getElementById('' + ctrlcom + '_ReceiptControl2_txtgrosstotal').value = data[i].Bill_amount;
                                document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatientReceiptAmt').value = data[i].TOTAL_AMOUNT;
                                document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatNet').value = data[i].NET_AMOUNT;
                                document.getElementById('' + ctrlcom + '_ReceiptControl2_txtTotalNet').value = data[i].NET_AMOUNT;

                                document.getElementById('' + ctrlcom + '_ReceiptControl2_txtTotalReciptAmt').value = data[i].TOTAL_AMOUNT;
                                document.getElementById('' + ctrlcom + '_ReceiptControl2_txtcashAmt').value = data[i].AMOUNT;
                                document.getElementById('' + ctrlcom + '_ReceiptControl2_txtTotalDue').value = data[i].Due_amount;
                                document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatdue').value = data[i].Due_amount;
                                document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatgrossamt').value = data[i].CONCESSION_AMOUNT;
                                document.getElementById('' + ctrlcom + '_ReceiptControl2_txtgrossamttotal').value = data[i].CONCESSION_AMOUNT;
                                //                            document.getElementById('' + ctrlcom + '_ReceiptControl2_uccardAuther_txtSearchControl').value = data[i].DUE_AUTH_ID; //DUE_AUTH_NAME
                                document.getElementById('' + ctrlcom + '_ReceiptControl2_Search3_txtSearchControl').value = data[i].DUE_AUTH_NAME;
                                document.getElementById('' + ctrlcom + '_ReceiptControl2_ucdueauth_txtSearchControl').value = data[i].CONCESSION_AUTH_NAME;
                                if (document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatgrossamt').value > 0) {
                                    var TotalGrossAmt = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatgross').value;
                                    var discamt = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatgrossamt');
                                    var discperc = setProperDecimals(((parseFloat(discamt.value) / parseFloat(TotalGrossAmt)) * 100));
                                    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatdis').value = discperc;
                                }
                            }
                        }
                        for (var i = 0; i <= data.length - 1; i++) {
                            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtRemarks').value = data[i].REMARKS;
                            if (i == 0) {
                                var card = '';
                                if (jdata.d[i].CC_CARD_TYPE_ID == 1) {
                                    card = "visa";
                                }
                                else if (jdata.d[i].CC_CARD_TYPE_ID == 2) {
                                    card = "Master"
                                }
                                else {
                                    card = "Cash";
                                }
                                if (data[i].CC_ISSUE_BANK_NAME == null) {
                                    data[i].CC_ISSUE_BANK_NAME = '';
                                }
                                if (data[i].CC_CARD_NO == null) {
                                    data[i].CC_CARD_NO = '';
                                }
                                $('table[id$=gvReceiptDetails]').find("tr:eq(1)").find('[id*=lblrecmode]').text(jdata.d[i].PAYMENT_TYPE);
                                $('table[id$=gvReceiptDetails]').find("tr:eq(1)").find('[id*=lblexchrate]').text(1); //jdata.d[i].EX_RATE);
                                $('table[id$=gvReceiptDetails]').find("tr:eq(1)").find('[id*=lblconvertedamt]').text(jdata.d[i].AMOUNT);
                                $('table[id$=gvReceiptDetails]').find("tr:eq(1)").find('[id*=lblbankname]').text(jdata.d[i].CC_ISSUE_BANK_NAME);
                                $('table[id$=gvReceiptDetails]').find("tr:eq(1)").find('[id*=lblcardno]').text(jdata.d[i].CC_CARD_NO);
                                $('table[id$=gvReceiptDetails]').find("tr:eq(1)").find('[id*=lblAmount]').text(jdata.d[i].AMOUNT);
                                var expdt = (new Date(jdata.d[i].CC_VALID_TO_DT).format('dd--MMM-yyyy')) == "NaN---NaN" || null || undefined ? '' : (new Date(jdata.d[i].CC_VALID_TO_DT).format('dd--MMM-yyyy'));
                                $('table[id$=gvReceiptDetails]').find("tr:eq(1)").find('[id*=lblcardexpdt]').text(expdt);
                                $('table[id$=gvReceiptDetails]').find("tr:eq(1)").find('[id*=lblcurrname]').text(''); //jdata.d[i].CURRENCY_NAME);
                                $('table[id$=gvReceiptDetails]').find("tr:eq(1)").find('[id*=lbltendcash]').text(0); //jdata.d[i].TENDERED_AMOUNT);
                                $('table[id$=gvReceiptDetails]').find("tr:eq(1)").find('[id*=lblchange]').text(0); //jdata.d[i].CHANGE_AMOUNT);
                                $('table[id$=gvReceiptDetails]').find("tr:eq(1)").find('[id*=lblcardtype]').text(card);
                                //$('table[id$=gvReceiptDetails]').find("tr:eq(1)").find("[id*=lblAmtinwords]").text(   (NumToWordsInt(parseFloat($('table[id$=gvReceiptDetails]').find("tr:eq(1)").find("[id*=lblAmount]").text()))+' '+document.getElementById('' + ctrlcom + '_ReceiptControl2_hdncurrenydesc').value).toLowerCase().replace(/(^.|\s+.)/g, m=>m.toUpperCase() ));
                                amountinworsforview();
                            }
                            else {
                                expdt = (new Date(jdata.d[i].CC_VALID_TO_DT).format('dd--MMM-yyyy')) == "NaN---NaN" || null || undefined ? '' : (new Date(jdata.d[i].CC_VALID_TO_DT).format('dd--MMM-yyyy'));

                                var tenderedCash = 0; //jdata.d[i].TENDERED_AMOUNT; 
                                var changeinAmt = 0; // jdata.d[i].CHANGE_AMOUNT;
                                fn_AddFilterRow_getdata(0, jdata.d[i].PAYMENT_TYPE, jdata.d[i].AMOUNT, jdata.d[i].RATE, jdata.d[i].CC_ISSUE_BANK_NAME, jdata.d[i].AMOUNT, jdata.d[i].DISCNT_AMT,
                                 jdata.d[i].CC_ISSUE_BANK, jdata.d[i].CC_CARD_NO, expdt, jdata.d[i].CC_CARD_TYPE_ID, tenderedCash, changeinAmt, "VIEW", '');
                            }
                        }
                    },
                    function (jqXHR, textStatus, errorThrown) {
                        $(".stoast").toastText("warning", errorThrown, 5, 3);
                        //                        alert(errorThrown);
                    });
    $('.manage1').css('display', 'none');
}

function DisabledCntrl() {
    Colorschange();
    document.getElementById('chkold').disabled = true;
    $('#' + ctrlcom + '_ReceiptControl2_Search3_txtSearchControl').removeClass('red');
    $('#' + ctrlcom + '_headerControl1_imgbtnSave').css('display', 'none');
    $('#' + ctrlcom + '_headerControl1_imgbtnclear').css('display', 'none');
    $('#' + ctrlcom + '_ucReferal_btnQkAdd').css('display', 'none');
    document.getElementById('' + ctrlcom + '_ddlTitle').disabled = true;
    document.getElementById('' + ctrlcom + '_dd_reg_source').disabled = true;
    document.getElementById('' + ctrlcom + '_source_remarks').disabled = true;
    document.getElementById('' + ctrlcom + '_txtFirstName').disabled = true;
    document.getElementById('' + ctrlcom + '_txtMiddleName').disabled = true;
    document.getElementById('' + ctrlcom + '_txtLastName').disabled = true;
    document.getElementById('' + ctrlcom + '_txtDisplayname').disabled = true;
    document.getElementById('' + ctrlcom + '_newAgeUc_txtDob').disabled = true;
    document.getElementById('' + ctrlcom + '_newAgeUc_txtYear').disabled = true;
    document.getElementById('' + ctrlcom + '_newAgeUc_txtMonths').disabled = true;
    document.getElementById('' + ctrlcom + '_newAgeUc_txtDay').disabled = true;
    document.getElementById('' + ctrlcom + '_newAgeUc_txtHH').disabled = true;
    document.getElementById('' + ctrlcom + '_newAgeUc_txtMM').disabled = true;
    document.getElementById('' + ctrlcom + '_ddlGender').disabled = true;
    document.getElementById('' + ctrlcom + '_txtMotherMName').disabled = true;

    document.getElementById('' + ctrlcom + '_txtfathername').disabled = true;
    document.getElementById('' + ctrlcom + '_ddlMaritalStatus').disabled = true;
    document.getElementById('' + ctrlcom + '_ddlBloodGroup').disabled = true;
    document.getElementById('' + ctrlcom + '_ddlEthnicity').disabled = true;
    document.getElementById('' + ctrlcom + '_ddlNationality').disabled = true;
    document.getElementById('' + ctrlcom + '_ucConsultant_txtSearchControl').disabled = true;
    document.getElementById('' + ctrlcom + '_ddlResPerson').disabled = true;
    document.getElementById('' + ctrlcom + '_txtResPerson').disabled = true;
    document.getElementById('' + ctrlcom + '_ddlOccupation').disabled = true;
    document.getElementById('' + ctrlcom + '_ddlReligion').disabled = true;
    document.getElementById('' + ctrlcom + '_ddlPatientType').disabled = true;
    document.getElementById('' + ctrlcom + '_txtSSN').disabled = true;
    document.getElementById('' + ctrlcom + '_ddlquestionary').disabled = true;
    document.getElementById('' + ctrlcom + '_ddlRegType').disabled = true;
    document.getElementById('' + ctrlcom + '_UcFamilyReff_txtSearchControl').disabled = true;
    document.getElementById('' + ctrlcom + '_txtumrno').disabled = true;
    document.getElementById('' + ctrlcom + '_txtRegistration').disabled = true;
    document.getElementById('' + ctrlcom + '_txtregfee').disabled = true;
    document.getElementById('' + ctrlcom + '_txtregValidity').disabled = true;
    document.getElementById('' + ctrlcom + '_pre_regi').disabled = true;
    document.getElementById('' + ctrlcom + '_UcAppointmentNo_txtSearchControl').disabled = true;
    document.getElementById('lk_btn_ctl00_ContentPlaceHolder1_ucConsultant').disabled = true;
    document.getElementById('lk_btn_ctl00_ContentPlaceHolder1_UcFamilyReff').disabled = true;
    document.getElementById('lk_btn_ctl00_ContentPlaceHolder1_UcAppointmentNo').disabled = true;
    document.getElementById('' + ctrlcom + '_ChkNBorn').disabled = true;
    document.getElementById('' + ctrlcom + '_chkisold').disabled = true;
    document.getElementById('' + ctrlcom + '_rbt_pat_type_0').disabled = true;
    document.getElementById('' + ctrlcom + '_rbt_pat_type_1').disabled = true;
    document.getElementById('' + ctrlcom + '_rbt_pat_type_2').disabled = true;
    document.getElementById('' + ctrlcom + '_newAgeUc_imgCal').disabled = true;
    document.getElementById('' + ctrlcom + '_EmployerInfo1_txtemployername').disabled = true;
    document.getElementById('' + ctrlcom + '_EmployerInfo1_txtletterissuedby').disabled = true;
    document.getElementById('' + ctrlcom + '_EmployerInfo1_txtrefissuedt').disabled = true;
    document.getElementById('btnlettertype').disabled = true;
    document.getElementById('' + ctrlcom + '_ddlproofid').disabled = true;
    document.getElementById('' + ctrlcom + '_chkIsSenior').disabled = true;

    /* Address Details*/
    document.getElementById('' + ctrlcom + '_Address1_txtAddress1').disabled = true;
    document.getElementById('' + ctrlcom + '_Address1_txtAddress2').disabled = true;
    document.getElementById('' + ctrlcom + '_Address1_AreaUserControl1_txtSearchControl').disabled = true;
    document.getElementById('' + ctrlcom + '_Address1_AreaUserControl1__hiddenID').disabled = true;
    document.getElementById('' + ctrlcom + '_Address1_AreaUserControl1__hiddenText').disabled = true;
    document.getElementById('' + ctrlcom + '_Address1_hdnAreaId').disabled = true;
    document.getElementById('' + ctrlcom + '_Address1_CityUserControl1').disabled = true;
    document.getElementById('' + ctrlcom + '_Address1_hdncityid').disabled = true;
    document.getElementById('' + ctrlcom + '_Address1_StateUserControl1').disabled = true;
    document.getElementById('' + ctrlcom + '_Address1_hdnstateid').disabled = true;
    document.getElementById('' + ctrlcom + '_Address1_CountryUserControl1').disabled = true;
    document.getElementById('' + ctrlcom + '_Address1_hdncountryid').disabled = true;
    document.getElementById('' + ctrlcom + '_Address1_txtPin').disabled = true;
    $('#' + ctrlcom + '_Address1_imgBtnQuickAddr').css('display', 'none');
    document.getElementById('' + ctrlcom + '_Address1_chkSameasPresentAddress').disabled = true;
    document.getElementById('' + ctrlcom + '_Address1_chkCopyFromPresentAddress').disabled = true;
    document.getElementById('' + ctrlcom + '_Address1_DistricUserControl1').disabled = true;
    document.getElementById('lk_btn_ctl00_ContentPlaceHolder1_Address1_AreaUserControl1').disabled = true;
    document.getElementById('' + ctrlcom + '_chkstopalert').disabled = true;
    document.getElementById('' + ctrlcom + '_ReceiptControl2_Search3_txtSearchControl').disabled = true;
    document.getElementById('lk_btn_ctl00_ContentPlaceHolder1_ReceiptControl2_Search3').disabled = true;
    /*referal Details*/
    document.getElementById('' + ctrlcom + '_ucReferal_ddlreferral').disabled = true;
    document.getElementById('' + ctrlcom + '_ucReferal_ucreferalname_txtSearchControl').disabled = true;

    document.getElementById('' + ctrlcom + '_ucReferal_txtrefaddr').disabled = true;
    document.getElementById('' + ctrlcom + '_ucReferal_txtRefPhone').disabled = true;
    document.getElementById('' + ctrlcom + '_Address1_txtMobile1').disabled = true;
    document.getElementById('' + ctrlcom + '_txtMobile3').disabled = true;
    document.getElementById('' + ctrlcom + '_Address1_txtMobile2').disabled = true;
    document.getElementById('' + ctrlcom + '_txtemail').disabled = true;
    //document.getElementById('' + ctrlcom + '_chkmodeComm_MultiSelectDDL').disabled = true;
    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtcashAmt').disabled = true;
    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtCardAmt').disabled = true;
    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtcardNoCmp').disabled = true;
    document.getElementById('' + ctrlcom + '_ReceiptControl2_ddbankName').disabled = true;
    document.getElementById('lk_btn_ctl00_ContentPlaceHolder1_ucReferal_ucrfrlsrc').disabled = true;
    document.getElementById('' + ctrlcom + '_ucReferal_ucReferedto_txtSearchControl').disabled = true;
    document.getElementById('lk_btn_ctl00_ContentPlaceHolder1_ucReferal_ucReferedto').disabled = true;
    document.getElementById('' + ctrlcom + '_ucReferal_chkSMS').disabled = true;
    document.getElementById('' + ctrlcom + '_ucReferal_chkLeter').disabled = true;
    document.getElementById('' + ctrlcom + '_ucReferal_txtremarks').disabled = true;
    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtcardExpiredt').disabled = true;
    document.getElementById('' + ctrlcom + '_ReceiptControl2_ddcardType').disabled = true;
    document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlcrdtype').disabled = true;
    document.getElementById('' + ctrlcom + '_ReceiptControl2_ddbankName').disabled = true;
    //    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtcardAuther').disabled = true;
    document.getElementById('' + ctrlcom + '_txtNotes').disabled = true;
    document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlDiscountType').disabled = true;
    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatdis').disabled = true;
    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpartydis').disabled = true;
    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatgrossamt').disabled = true;
    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpartygrossamt').disabled = true;
    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtgrossamttotal').disabled = true;
    //document.getElementById('' + ctrlcom + '_ReceiptControl2_Search1_txtSearchControl').disabled = true;
    document.getElementById('lk_btn_ctl00_ContentPlaceHolder1_ReceiptControl2_ucdueauth').disabled = true;
    //document.getElementById('lk_btn_ctl00_ContentPlaceHolder1_ReceiptControl2_Search1').disabled = true;
    document.getElementById('lk_btn_ctl00_ContentPlaceHolder1_ReceiptControl2_Search3').disabled = true;
    document.getElementById('' + ctrlcom + '_ReceiptControl2_ucdueauth_txtSearchControl').disabled = true;
    document.getElementById('' + ctrlcom + '_ReceiptControl2_Search3_txtSearchControl').disabled = true;
    document.getElementById('' + ctrlcom + '_ReceiptControl2_Search3_txtSearchControl').disabled = true;
    document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlPaymentType').disabled = true;
    document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlCurrency').disabled = true;
    document.getElementById('' + ctrlcom + '_ReceiptControl2_UcTransactionNo_txtSearchControl').disabled = true;
    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtTenderedAmt').disabled = true;
    document.getElementById('' + ctrlcom + '_ReceiptControl2_imgbtnadd').disabled = true;
    document.getElementById('' + ctrlcom + '_ReceiptControl2_imgbtnadd').disabled = true;
    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtRemarks').disabled = true;
    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtquickremarks').disabled = true;
    $("table[id$=gvReceiptDetails] tr:has(td)").each(function (e) {
        $(this).closest("tr").find("[id*=imgBtnEdit]").attr('disabled', true);
        $(this).closest("tr").find("[id*=imgBtnDelete]").attr('disabled', true);
    });

    document.getElementById('lk_btn_ctl00_ContentPlaceHolder1_ucReferal_ucreferalname').disabled = true;
    //document.getElementById('lk_btn_ctl00_ContentPlaceHolder1_ReceiptControl2_uchealthcard').disabled = true;
    document.getElementById('' + ctrlcom + '_ReceiptControl2_gvMultipleConcession_ctl02_ddlMultiDiscounttype').disabled = true;
    document.getElementById('' + ctrlcom + '_ReceiptControl2_gvMultipleConcession_ctl02_txtcardno').disabled = true;
    document.getElementById('' + ctrlcom + '_ReceiptControl2_gvMultipleConcession_ctl02_ddlModes').disabled = true;
    document.getElementById('' + ctrlcom + '_ReceiptControl2_gvMultipleConcession_ctl02_txtPersentage').disabled = true;
    document.getElementById('' + ctrlcom + '_ReceiptControl2_gvMultipleConcession_ctl02_txtAmount').disabled = true;
    document.getElementById('' + ctrlcom + '_ReceiptControl2_gvMultipleConcession_ctl02_txtAutherizedPersion').disabled = true;
    document.getElementById('' + ctrlcom + '_ReceiptControl2_gvMultipleConcession_ctl02_txtAmount').disabled = true;
    document.getElementById('' + ctrlcom + '_ReceiptControl2_gvMultipleConcession_ctl02_txtAutherizedPersion').disabled = true;
    document.getElementById('lk_btn_ctl00_ContentPlaceHolder1_ReceiptControl2_UcTransactionNo').disabled = true;


    //Company Details
    document.getElementById('' + ctrlcom + '_EmployerInfo1_EmployerControl1_txtSearchControl').disabled = true;
    document.getElementById('lk_btn_ctl00_ContentPlaceHolder1_EmployerInfo1_EmployerControl1').disabled = true;
    document.getElementById('' + ctrlcom + '_EmployerInfo1_uctpa_txtSearchControl').disabled = true;
    document.getElementById('' + ctrlcom + '_EmployerInfo1_ddlrelation').disabled = true;
    document.getElementById('' + ctrlcom + '_EmployerInfo1_txtEmploeeID').disabled = true;
    document.getElementById('' + ctrlcom + '_EmployerInfo1_txtEmployeeName').disabled = true;
    document.getElementById('' + ctrlcom + '_EmployerInfo1_txtDesignation').disabled = true;
    document.getElementById('' + ctrlcom + '_EmployerInfo1_txtDept').disabled = true;
    document.getElementById('' + ctrlcom + '_EmployerInfo1_txtempgrade').disabled = true;
    document.getElementById('' + ctrlcom + '_EmployerInfo1_txtBranch').disabled = true;
    document.getElementById('' + ctrlcom + '_EmployerInfo1_txtEmpContactNo').disabled = true;
    document.getElementById('' + ctrlcom + '_EmployerInfo1_txtEmpMRNo').disabled = true;
    document.getElementById('' + ctrlcom + '_EmployerInfo1_txtEmpCardValidity').disabled = true;
    document.getElementById('' + ctrlcom + '_EmployerInfo1_txtdateofissue').disabled = true;
    document.getElementById('' + ctrlcom + '_EmployerInfo1_txtrefletter').disabled = true;
    document.getElementById('' + ctrlcom + '_EmployerInfo1_txtlettervalidity').disabled = true;
    document.getElementById('' + ctrlcom + '_EmployerInfo1_txtcreditlimitamt').disabled = true;
    document.getElementById('lk_btn_ctl00_ContentPlaceHolder1_ucIssuedAt').disabled = true;


    document.getElementById('' + ctrlcom + '_Address1_txtNearestPS').disabled = true;
    document.getElementById('' + ctrlcom + '_Address1_chkmodeComm_MultiSelectDDL').disabled = true;
    document.getElementById('' + ctrlcom + '_Address1_txtMobile3').disabled = true;
}
function DisableFields() {
    $('#' + ctrlcom + '_headerControl1_imgadd').css('display', 'none');
    $('#' + ctrlcom + '_headerControl1_imgbtnEdit').css('display', 'none');
    $('#' + ctrlcom + '_headerControl1_imgdelete').css('display', 'none');
    $('#' + ctrlcom + '_headerControl1_imgdirectPrint').css('display', 'none');
    $('#' + ctrlcom + '_headerControl1_imgBtnApproved').css('display', 'none');
}
function OnExtendedPatName() {
    var _ddlTitle = $('[id*=ddlTitle]').find('option:selected').text();
    if (_ddlTitle == "--select--") {
        _ddlTitle = "";
    }
    var _DisplayName = document.getElementById('' + ctrlcom + '_txtDisplayname').innerHTML;
    _DisplayName = _ddlTitle + ". " + _DisplayName;
    extendedDisplay.setData(0, 'Patient Name :', _DisplayName)
}
function OnResPonsiblePerson() {
    var _text = $("[id*=txtResPerson]").val();
    _text = _text.toUpperCase();
    $("[id*=txtResPerson]").val(_text);
    var _resPerson = $("[id*=ddlResPerson]").find("option:selected").text();
    if ($("[id*=ddlResPerson]").val() == "0")
        _resPerson = "KIN";
    //    extendedDisplay.setData(1, _resPerson + ' Name :', $("[id*=txtResPerson]").val());
}
function ExtendedDisplayValues() {
    var mothername = $('[id*=txtMotherMName]').val();
    var _gender = $('[id*=ddlGender]').find('option:selected').text();
    var _maritalstatus = $('[id*=ddlMaritalStatus]').find('option:selected').text();
    if (_gender == "--select--") { _gender = ''; }
    if (_maritalstatus == "--select--") { _maritalstatus = ''; }
    if (mothername == undefined || mothername == null) { mothername = ''; }
    OnExtendedPatName();
    OnResPonsiblePerson();
    //    extendedDisplay.setData(2, 'Mother Name :', mothername)
    //        extendedDisplay.setData(3, 'DOB / Age(Y/M/D) :', $('[id*=txtregfee]').val())

    extendedDisplay.setData(2, 'Gender :', _gender)
    OnExtendedMobile();
    onExtendedNationality();
    extendedDisplay.setData(6, 'Registration Fee :', $('[id*=txtregfee]').val());
    //    onExtendedDoctor();
    //    onExtendedPatientType();
    //    onExtendedAddress();
    //    OnExtendAmounts(); 
    //    onExtendAge();
}
function onExtendedNationality() {
    var _nationality = $('[id*=ddlNationality]').find("option:selected").text();
    var _race = $('[id*=ddlEthnicity]').find("option:selected").text();
    if (_race == undefined || _race == null || _race == "-Select-") { _race = ''; }
    if (_nationality == undefined || _nationality == null || _nationality == "--select--") { _nationality = ''; }
    if (_race != '') {
        extendedDisplay.setData(3, 'Nationality / Religion :', _nationality + "/" + _race);
    }
    else {
        extendedDisplay.setData(3, 'Nationality  :', _nationality);
    }
}
function OnExtendedMobile() {
    var mbl = document.getElementById('' + ctrlcom + '_Address1_txtMobile1').value;
    extendedDisplay.setData(4, 'Mobile No :', mbl);
}
function onExtendedAddress() {
    if (localStorage.getItem("ED") != "" && localStorage.getItem("ED") != undefined && localStorage.getItem("ED") != null) {
        var _address1 = document.getElementById('' + ctrlcom + '_Address1_txtAddress1').value;
        var _address2 = document.getElementById('' + ctrlcom + '_Address1_txtAddress2').value;
        var _area = document.getElementById('' + ctrlcom + '_Address1_AreaUserControl1_txtSearchControl').value;
        var _city = document.getElementById('' + ctrlcom + '_Address1_CityUserControl1').value;
        var _state = document.getElementById('' + ctrlcom + '_Address1_StateUserControl1').value;
        var _country = document.getElementById('' + ctrlcom + '_Address1_CountryUserControl1').value;
        var _pincode = document.getElementById('' + ctrlcom + '_Address1_txtPin').value;
        var _AddressVal = '';
        _AddressVal = _address1 + "  " + _address2 + " " + _area + ", " + _city + ", " + _state + ", " + _country + ' - ' + _pincode;
        extendedDisplay.setData(9, 'Address :', _AddressVal);
    }
}
function onExtendedEmail() {
    var email = document.getElementById('' + ctrlcom + '_Address1_txtemail').value;
    extendedDisplay.setData(5, 'email :', email);
}
function Isoldfunctionality() {
    var regtype = document.getElementById('' + ctrlcom + '_ddlRegType');
    var chkisold = document.getElementById('' + ctrlcom + '_chk_old');
    var renewal = document.getElementById('' + ctrlcom + '_chkisold');
    if (chkisold.checked == true) {
        /*   if (regtype.value == 6 || regtype.value == 7) {
        $(".stoast").toastText("warning", "You dont have option to select Satfff Details in IsOld Option", 5, 3);
        //            alert('You dont have option to select Satfff Details in IsOld Option');
        document.getElementById('' + ctrlcom + '_UcStaffName_txtSearchControl').value = '';
        document.getElementById('' + ctrlcom + '_UcStaffName__hiddenID').value = 0;
        document.getElementById('' + ctrlcom + '_UcStaffName__hiddenText').value = '';
       $(".trstaff").hide();
       $(".trstaff").attr("title","xyz").hide();
        regtype.value = 2;
        }
        document.getElementById('' + ctrlcom + '_ddlRegType').disabled = true;
        renewal.checked = false;
        Clearpopup();
        clearpaymentdetails();
        EnableDisableControls(true);
        regtype.value = 9;
        $('#' + ctrlcom + '_emppnl').show();
        $('#' + ctrlcom + '_ddlPatientType').val(2);   */
    }
    else {
        Clearpopup();
        clearpaymentdetails();
        EnableDisableControls(false);
        document.getElementById('' + ctrlcom + '_ddlRegType').disabled = false;
        renewal.checked = false;
        if (renewal.checked == true) {
            chkisold.checked = false;
        }
        else {
            OnPageValidation();
            chkisold.checked = false;
        }
        regtype.value = 2;
        var PatRegFee = $('#' + ctrlcom + '_hdnregfee').val(); PatientRegFeeAmounts(PatRegFee);
        $('#' + ctrlcom + '_emppnl').hide();
        $('#' + ctrlcom + '_ddlPatientType').val(1);
        document.getElementById('' + ctrlcom + '_ucUmrIsOld_txtSearchControl').value = '';
        document.getElementById('' + ctrlcom + '_ucUmrIsOld__hiddenID').value = '';
        document.getElementById('' + ctrlcom + '_ucUmrIsOld__hiddenText').value = '';
    }
    if (chkisold.checked == true) {
        /*  ctl00_ContentPlaceHolder1_tdUmrIsOld.style.display = "block";
        ctl00_ContentPlaceHolder1_tdtxtUmr.style.display = "none";
        ctl00_ContentPlaceHolder1_tdUmr.style.display = "none";
        $('#' + ctrlcom + '_hdnNewOldUmrNo').val($('#' + ctrlcom + '_txtumrno').val());
        $('#' + ctrlcom + '_txtumrno').val('');
        document.getElementById('' + ctrlcom + '_txtregfee').value = "0";
        PatientRegFeeAmounts('0'); */

    } else {
        OnPageValidation();
        //        ctl00_ContentPlaceHolder1_tdUmrIsOld.style.display = "none";
        //        ctl00_ContentPlaceHolder1_tdtxtUmr.style.display = "block";
        //        ctl00_ContentPlaceHolder1_tdUmr.style.display = "none";
        var regfee = document.getElementById('' + ctrlcom + '_hdnregfee').value;
        document.getElementById('' + ctrlcom + '_txtregfee').value = regfee;
        $('#' + ctrlcom + '_hdnNewOldUmrNo').val('');
        $('#' + ctrlcom + '_txtumrno').val($('#' + ctrlcom + '_hdnautoumr').val());
        PatientRegFeeAmounts(regfee);
    }

}

function proofvalidation() {
    var _proofid = document.getElementById('' + ctrlcom + '_ddlproofid').value;
    var nationality = document.getElementById('' + ctrlcom + '_ddlNationality');
    if (_proofid == "0") {
        document.getElementById('' + ctrlcom + '_txtSSN').value = '';
        $('#' + ctrlcom + '_txtSSN').removeClass('red');
        passportenabledisable(true);
        passportcolorchange('1px solid rgb(190, 190, 190)');
        document.getElementById('' + ctrlcom + '_txtSSN').disabled = true;
        $('#' + ctrlcom + '_txtPassprotno').val('');
        $('#' + ctrlcom + '_txtIssueDt').val('');
        $('#' + ctrlcom + '_txtExpiryDt').val('');
        $('#' + ctrlcom + '_txtissuedat').val('');
    }
    else if (_proofid == "6") {
        passportenabledisable(false);
        passportcolorchange('1px solid rgb(244, 120, 94)');
        document.getElementById('' + ctrlcom + '_txtSSN').disabled = true;
        $('#' + ctrlcom + '_txtSSN').removeClass('red');

    }
    else {
        passportenabledisable(true);
        Validproof();
        passportcolorchange('1px solid rgb(190, 190, 190)');
        document.getElementById('' + ctrlcom + '_txtSSN').disabled = false;
        $('#' + ctrlcom + '_txtSSN').addClass('red');
        $('#' + ctrlcom + '_txtPassprotno').val('');
        $('#' + ctrlcom + '_txtIssueDt').val('');
        $('#' + ctrlcom + '_txtExpiryDt').val('');
        $('#' + ctrlcom + '_txtissuedat').val('');
    }
    if (nationality.value == 2) {
        if (_proofid == 6) {
            passportenabledisable(false);
            passportcolorchange('1px solid rgb(244, 120, 94)');
        }
    }
    IDProofTextValidations(document.getElementById('ctl00_ContentPlaceHolder1_ddlproofid'));
}

function passportenabledisable(val) {
    document.getElementById('' + ctrlcom + '_txtPassprotno').disabled = val;
    document.getElementById('' + ctrlcom + '_txtIssueDt').disabled = val;
    document.getElementById('' + ctrlcom + '_txtExpiryDt').disabled = val;
    document.getElementById('' + ctrlcom + '_txtissuedat').disabled = val;
}

function passportcolorchange(input) {
    document.getElementById('' + ctrlcom + '_txtPassprotno').style.border = input;
    document.getElementById('' + ctrlcom + '_txtIssueDt').style.border = input;
    document.getElementById('' + ctrlcom + '_txtExpiryDt').style.border = input;
    document.getElementById('' + ctrlcom + '_txtissuedat').style.border = input;
}

function Validproof() {
    var ssnvalue = document.getElementById('' + ctrlcom + '_txtSSN').value;
    var _proofid = document.getElementById('' + ctrlcom + '_ddlproofid').value;
    if (_proofid != "0") {
        if (ssnvalue != "") {
            $('#' + ctrlcom + '_txtSSN').removeClass('red');
        } else {
            $('#' + ctrlcom + '_txtSSN').addClass('red');
        }
    }

}

function Colorschange() {
    var _chkValidation = true;
    var _ctrls = new Array();
    _ctrls[0] = 'ctl00_ContentPlaceHolder1_txtFirstName';

    _ctrls[1] = 'ctl00_ContentPlaceHolder1_ddlTitle';
    _ctrls[2] = 'ctl00_ContentPlaceHolder1_ddlResPerson';
    _ctrls[3] = 'ctl00_ContentPlaceHolder1_txtResPerson';
    if (document.getElementById('' + ctrlcom + '_hdnRefReq').value == 'Yes') {
        _ctrls[4] = 'ctl00_ContentPlaceHolder1_ucReferal_ddlreferral';
        if (document.getElementById('' + ctrlcom + '_ucReferal_ddlreferral').value != '1') {
            _ctrls[5] = 'ctl00_ContentPlaceHolder1_ucReferal_ucreferalname_txtSearchControl';
        }
        else {
            //document.getElementById('' + ctrlcom + '_ucReferal_ucreferalname_txtSearchControl').style.border = "1px solid #000000";
            $('#' + ctrlcom + '_ucReferal_ucreferalname_txtSearchControl').removeClass('red');
        }
    }
    _ctrls[6] = 'ctl00_ContentPlaceHolder1_newAgeUc_txtDob';
    //_ctrls[7] = 'ctl00_ContentPlaceHolder1_ddlMaritalStatus';
    _ctrls[8] = 'ctl00_ContentPlaceHolder1_dd_reg_source';
    _ctrls[9] = 'ctl00_ContentPlaceHolder1_source_remarks';
    //_ctrls[10] = 'ctl00_ContentPlaceHolder1_ucUMRno_txtSearchControl';

    if (document.getElementById('' + ctrlcom + '_EmployerInfo1_uctpa_txtSearchControl').value != '') {
        _ctrls[16] = 'ctl00_ContentPlaceHolder1_EmployerInfo1_uctpa_txtSearchControl';
        _ctrls[17] = 'ctl00_ContentPlaceHolder1_EmployerInfo1_txtEmploeeID';
        _ctrls[18] = 'ctl00_ContentPlaceHolder1_EmployerInfo1_txtEmployeeName';
        _ctrls[19] = 'ctl00_ContentPlaceHolder1_EmployerInfo1_txtEmpMRNo';
        _ctrls[20] = 'ctl00_ContentPlaceHolder1_EmployerInfo1_txtEmpCardValidity';

    }

    if (document.getElementById('' + ctrlcom + '_txtPassprotno').value != '') {
        _ctrls[22] = 'ctl00_ContentPlaceHolder1_txtPassprotno';
        _ctrls[23] = 'ctl00_ContentPlaceHolder1_txtIssueDt';
        _ctrls[24] = 'ctl00_ContentPlaceHolder1_txtExpiryDt';
        _ctrls[25] = 'ctl00_ContentPlaceHolder1_txtissedat';
        _ctrls[26] = 'ctl00_ContentPlaceHolder1_ddlNationality';
    }
    if (document.getElementById('' + ctrlcom + '_pre_regi').value != 5 && document.getElementById('' + ctrlcom + '_hdndtrmandatary').value == 'YES') {
        _ctrls[27] = 'ctl00_ContentPlaceHolder1_ucConsultant_txtSearchControl';
    }
    _ctrls[28] = 'ctl00_ContentPlaceHolder1_Address1_txtMobile1';
    _ctrls[29] = 'ctl00_ContentPlaceHolder1_Address1_AreaUserControl1_txtSearchControl';
    _ctrls[30] = 'ctl00_ContentPlaceHolder1_ddlNationality';
    _ctrls[31] = 'ctl00_ContentPlaceHolder1_ddlPatientType';
    _ctrls[32] = 'ctl00_ContentPlaceHolder1_txtLastName';
    if (document.getElementById('' + ctrlcom + '_ddlPatientType').value == 2 || document.getElementById('' + ctrlcom + '_ddlRegType').value == 9) {
        _ctrls[33] = 'ctl00_ContentPlaceHolder1_EmployerInfo1_uctpa_txtSearchControl';
        _ctrls[34] = 'ctl00_ContentPlaceHolder1_EmployerInfo1_txtEmploeeID';
        _ctrls[35] = 'ctl00_ContentPlaceHolder1_EmployerInfo1_txtEmployeeName';
        _ctrls[36] = 'ctl00_ContentPlaceHolder1_EmployerInfo1_txtEmpMRNo';
        _ctrls[37] = 'ctl00_ContentPlaceHolder1_EmployerInfo1_txtEmpCardValidity';
        _ctrls[38] = 'ctl00_ContentPlaceHolder1_EmployerInfo1_ddlrelation';
    }
    if (document.getElementById('' + ctrlcom + '_ReceiptControl2_txtTotalDue').value <= 0) {
        _ctrls[39] = 'ctl00_ContentPlaceHolder1_ReceiptControl2_Search3_txtSearchControl';
        document.getElementById('' + ctrlcom + '_ReceiptControl2_Search3_txtSearchControl').disabled = true;
    }
    _ctrls[40] = 'ctl00_ContentPlaceHolder1_txtMiddleName';

    for (var i = 0; i < _ctrls.length; i++) {

        var ctrl = document.getElementById(_ctrls[i]);
        $(ctrl).css('border', '')
    }
}
function FamilyColorChange() {
    var _chkValidation = true;
    var _ctrls = new Array();
    if (document.getElementById('' + ctrlcom + '_hdnRefReq').value == 'Yes') {
        _ctrls[1] = 'ctl00_ContentPlaceHolder1_ucReferal_ddlreferral';
        if (document.getElementById('' + ctrlcom + '_ucReferal_ddlreferral').value != '1') {
            _ctrls[2] = 'ctl00_ContentPlaceHolder1_ucReferal_ucreferalname_txtSearchControl';
        }
        else {
            //document.getElementById('' + ctrlcom + '_ucReferal_ucreferalname_txtSearchControl').style.border = "1px solid #000000";
            $('#' + ctrlcom + '_ucReferal_ucreferalname_txtSearchControl').removeClass('red');
        }
    }
    _ctrls[3] = 'ctl00_ContentPlaceHolder1_Address1_AreaUserControl1_txtSearchControl';
    _ctrls[4] = 'ctl00_ContentPlaceHolder1_Address1_txtMobile1';
    for (var i = 0; i < _ctrls.length; i++) {

        var ctrl = document.getElementById(_ctrls[i]);
        $(ctrl).css('border', '')
    }
}
function CompanyMandColor() {
    var Client_Name = document.getElementById('' + ctrlcom + '_headerControl1_hdnclientNameFor').value;
    var _chkValidation = true;
    var _ctrls = new Array();
    _ctrls[1] = 'ctl00_ContentPlaceHolder1_EmployerInfo1_uctpa_txtSearchControl';
    var pattype = document.getElementById('' + ctrlcom + '_ddlPatientType').value;
    if (Client_Name.trim() != 'YASHODA' && Client_Name.trim() != 'LNT') {
        if (pattype == "2" || pattype == "5" || pattype == "9" || pattype == "10") {
            _ctrls[2] = 'ctl00_ContentPlaceHolder1_EmployerInfo1_txtEmploeeID';
            _ctrls[3] = 'ctl00_ContentPlaceHolder1_EmployerInfo1_txtEmployeeName';
            _ctrls[4] = 'ctl00_ContentPlaceHolder1_EmployerInfo1_txtEmpMRNo';
            _ctrls[5] = 'ctl00_ContentPlaceHolder1_EmployerInfo1_txtEmpCardValidity';
            _ctrls[6] = 'ctl00_ContentPlaceHolder1_EmployerInfo1_ddlrelation';
            _ctrls[7] = 'ctl00_ContentPlaceHolder1_EmployerInfo1_txtdateofissue';
        } if (pattype == "8") {
            _ctrls[2] = 'ctl00_ContentPlaceHolder1_EmployerInfo1_txtEmployeeName';
            _ctrls[3] = 'ctl00_ContentPlaceHolder1_EmployerInfo1_txtEmpMRNo';
            $('#' + ctrlcom + '_EmployerInfo1_txtEmploeeID').removeClass('red');
            $('#' + ctrlcom + '_EmployerInfo1_txtEmpCardValidity').removeClass('red');
            $('#' + ctrlcom + '_EmployerInfo1_txtdateofissue').removeClass('red');
        }
    }
    for (var i = 0; i < _ctrls.length; i++) {
        var ctrl = document.getElementById(_ctrls[i]);
        if (OnNullValue(ctrl) == false) {
            _chkValidation = false;
        }
    }
}
function CompanyMandColorchange() {
    var _chkValidation = true;
    var _ctrls = new Array();
    _ctrls[1] = 'ctl00_ContentPlaceHolder1_EmployerInfo1_uctpa_txtSearchControl';
    var pattype = document.getElementById('' + ctrlcom + '_ddlPatientType').value;
    if (pattype == "2" || pattype == "5" || pattype == "9" || pattype == "10") {
        _ctrls[2] = 'ctl00_ContentPlaceHolder1_EmployerInfo1_txtEmploeeID';
        _ctrls[3] = 'ctl00_ContentPlaceHolder1_EmployerInfo1_txtEmployeeName';
        _ctrls[4] = 'ctl00_ContentPlaceHolder1_EmployerInfo1_txtEmpMRNo';
        _ctrls[5] = 'ctl00_ContentPlaceHolder1_EmployerInfo1_txtEmpCardValidity';
        _ctrls[6] = 'ctl00_ContentPlaceHolder1_EmployerInfo1_ddlrelation';
        _ctrls[7] = 'ctl00_ContentPlaceHolder1_EmployerInfo1_txtdateofissue';
    } if (pattype == "8") {
        _ctrls[2] = 'ctl00_ContentPlaceHolder1_EmployerInfo1_txtEmployeeName';
        _ctrls[3] = 'ctl00_ContentPlaceHolder1_EmployerInfo1_txtEmpMRNo';
    }
    for (var i = 0; i < _ctrls.length; i++) {
        var ctrl = document.getElementById(_ctrls[i]);
        $(ctrl).css('border', '')
    }
}




function clearpaymentdetails() {
    //Quick Add
    var grossamt = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtgrosstotal').value;
    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtcashAmt').value = 0;
    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtCardAmt').value = 0;
    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtcardNoCmp').value = 0;
    document.getElementById('' + ctrlcom + '_ReceiptControl2_ddcardType').value = 0;
    document.getElementById('' + ctrlcom + '_ReceiptControl2_ddbankName').value = 0;
    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtcardExpiredt').value = '';
    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtcardAuther').value = 0;
    //    document.getElementById('' + ctrlcom + '_ReceiptControl2_uccardAuther__hiddenID').value = 0;
    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtTotalDue').value = grossamt;
    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatdue').value = grossamt
    //Advanced Add
    document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlPaymentType').value = 1;
    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtTenderedAmt').value = '';
}

function Onissuedatselection1(objValue, obj) {
    document.getElementById('' + ctrlcom + '_HiddenField4').value = '';
    document.getElementById('' + ctrlcom + '_HiddenField4').value = objValue;
    if (obj.global_cobj != undefined)
    { document.getElementById('' + ctrlcom + '_txtissuedat').value = obj.global_cobj._lktext; }
    if (obj.text != undefined) {
        document.getElementById('' + ctrlcom + '_txtissuedat').value = obj.text;
    }
    if (document.getElementById('' + ctrlcom + '_txtissuedat').value != '') {
        $('#' + ctrlcom + '_txtissuedat').removeClass('red');
    }
    else {
        $('#' + ctrlcom + '_txtissuedat').addClass('red');
    }
}

function EmployeeAsPatient() {
    var Patientgender = $('#' + ctrlcom + '_ddlGender').val();
    var relationshipval = $('#' + ctrlcom + '_EmployerInfo1_ddlrelation').val();
    Patientgender = Patientgender == null || "" ? 0 : Patientgender;
    if (Patientgender > 0) {
        if ((relationshipval == 3 || relationshipval == "4" || relationshipval == "13" || relationshipval == "16" || relationshipval == "19" || relationshipval == "20" || relationshipval == "21" || relationshipval == "25" ||
    relationshipval == "27" || relationshipval == "30" || relationshipval == "32" || relationshipval == "33") && Patientgender == 1) {
            $(".stoast").toastText("info", "Female Relationship shouldn't be selected for Male Patients", 5, 2);
            $('#' + ctrlcom + '_EmployerInfo1_ddlrelation').val(0);
            return false;
        }
        if ((relationshipval == "2" || relationshipval == "5" || relationshipval == "12" || relationshipval == "15" || relationshipval == "17" || relationshipval == "18" || relationshipval == "22" || relationshipval == "23" ||
    relationshipval == "29" || relationshipval == "34") && Patientgender == "2") {
            $(".stoast").toastText("info", "Male Relationship shouldn't be selected for Female Patients", 5, 2);
            document.getElementById('' + ctrlcom + '_EmployerInfo1_txtEmployeeName').value = '';
            $('#' + ctrlcom + '_EmployerInfo1_ddlrelation').val(0);
            return false;
        }
    }
    if (document.getElementById('' + ctrlcom + '_umrPatientDetails_lblgender') != null) {
        if (document.getElementById('' + ctrlcom + '_umrPatientDetails_lblgender').innerHTML != 'Female') {
            var relationshipval = $('#' + ctrlcom + '_uccorporate_EmployerInfo1_ddlrelation').val();
            if (relationshipval == 3) {
                $(".stoast").toastText("info", "Patient Gender must be a female.", 5, 2);
                $('#' + ctrlcom + '_uccorporate_EmployerInfo1_ddlrelation').val(0);
                return false;
            }
        }
    }

    if (document.getElementById('' + ctrlcom + '_chk_old').checked == true) {
        if ($('#' + ctrlcom + '_uccorporate_EmployerInfo1_ddlrelation').find('option:selected').text() == "Self") {
            document.getElementById('' + ctrlcom + '_uccorporate_EmployerInfo1_txtEmployeeName').value = document.getElementById('' + ctrlcom + '_umrPatientDetails_lblPatName').innerHTML;
            document.getElementById('' + ctrlcom + '_uccorporate_EmployerInfo1_txtEmpContactNo').value = document.getElementById('' + ctrlcom + '_umrPatientDetails_lblMobileNo').innerHTML;
            $('#' + ctrlcom + '_uccorporate_EmployerInfo1_txtEmployeeName').removeClass('red');
            $('#' + ctrlcom + '_uccorporate_EmployerInfo1_txtEmpContactNo').removeClass('red');
            document.getElementById('' + ctrlcom + '_uccorporate_EmployerInfo1_txtEmployeeName').disabled = true;
            document.getElementById('' + ctrlcom + '_uccorporate_EmployerInfo1_txtEmpContactNo').disabled = true;
        } else {
            document.getElementById('' + ctrlcom + '_uccorporate_EmployerInfo1_txtEmployeeName').value = '';
            document.getElementById('' + ctrlcom + '_uccorporate_EmployerInfo1_txtEmpContactNo').value = '';
            $('#' + ctrlcom + '_uccorporate_EmployerInfo1_txtEmployeeName').addClass('red');
            $('#' + ctrlcom + '_uccorporate_EmployerInfo1_txtEmpContactNo').addClass('red');
            document.getElementById('' + ctrlcom + '_uccorporate_EmployerInfo1_txtEmployeeName').disabled = false;
            document.getElementById('' + ctrlcom + '_uccorporate_EmployerInfo1_txtEmpContactNo').disabled = false;
        }
    } else {
        if ($('#' + ctrlcom + '_EmployerInfo1_ddlrelation').find('option:selected').text() == "Self" && document.getElementById('' + ctrlcom + '_ChkNBorn').checked == true) {
            $(".stoast").toastText("info", "Shouldn't be Selected 'NewBorn Baby' as Employee", 5, 2);
            document.getElementById('' + ctrlcom + '_EmployerInfo1_txtEmployeeName').value = '';
            $('#' + ctrlcom + '_EmployerInfo1_ddlrelation').val(0);
            return false;
        } else {
            if ($('#' + ctrlcom + '_EmployerInfo1_ddlrelation').find('option:selected').text() == "Self") {
                document.getElementById('' + ctrlcom + '_EmployerInfo1_txtEmployeeName').value = document.getElementById('' + ctrlcom + '_txtDisplayname').innerHTML;
                for (var i = 0; i < document.getElementById('' + ctrlcom + '_EmployerInfo1_ddlrelation').length; i++) {
                    if (document.getElementById('' + ctrlcom + '_EmployerInfo1_ddlrelation')[i].text == 'Self') {
                        document.getElementById('' + ctrlcom + '_EmployerInfo1_ddlrelation')[i].selected = true;
                    }
                }
                if (document.getElementById('' + ctrlcom + '_EmployerInfo1_txtEmployeeName').value == "") {
                    $('#' + ctrlcom + '_EmployerInfo1_txtEmployeeName').addClass('red');
                } else {
                    $('#' + ctrlcom + '_EmployerInfo1_txtEmployeeName').removeClass('red');
                }
                document.getElementById('' + ctrlcom + '_EmployerInfo1_txtEmpContactNo').value = document.getElementById('' + ctrlcom + '_Address1_txtMobile1').value;
                var ddlDisplayName = document.getElementById('' + ctrlcom + '_hdnDisplayNameSetting');
                ddlDisplayName = ddlDisplayName.value;

                if (ddlDisplayName == 'First Name And Last Name') {
                    var FirstLastName = document.getElementById('ctl00_ContentPlaceHolder1_hdnFirstLastName').value;
                    FirstLastName = FirstLastName.split(',');
                    for (var i = 0; i < FirstLastName.length; i++) {
                        if (FirstLastName[i] == 1) {


                            if (document.getElementById('' + ctrlcom + '_txtFirstName').value == '') {
                                $(".stoast").toastText("warning", "Please Enter FirstName!.", 5, 3);
                                document.getElementById('' + ctrlcom + '_txtFirstName').focus();
                                document.getElementById('ctl00_ContentPlaceHolder1_EmployerInfo1_ddlrelation').value = 0;
                                $('#ctl00_ContentPlaceHolder1_EmployerInfo1_ddlrelation').addClass('red');
                                document.getElementById('' + ctrlcom + '_EmployerInfo1_txtEmpContactNo').value = '';
                                document.getElementById('' + ctrlcom + '_EmployerInfo1_txtEmployeeName').value = '';

                                $('#ctl00_ContentPlaceHolder1_EmployerInfo1_txtEmployeeName').addClass('red');
                                return false;
                            }
                        }
                        if (FirstLastName[i] == 2) {
                            if (document.getElementById('' + ctrlcom + '_txtLastName').value == '') {
                                $(".stoast").toastText("warning", "Please Enter LastName!.", 5, 3);
                                document.getElementById('' + ctrlcom + '_txtLastName').focus();
                                document.getElementById('ctl00_ContentPlaceHolder1_EmployerInfo1_ddlrelation').value = 0;
                                $('#ctl00_ContentPlaceHolder1_EmployerInfo1_ddlrelation').addClass('red');
                                document.getElementById('' + ctrlcom + '_EmployerInfo1_txtEmpContactNo').value = '';
                                document.getElementById('' + ctrlcom + '_EmployerInfo1_txtEmployeeName').value = '';

                                $('#ctl00_ContentPlaceHolder1_EmployerInfo1_txtEmployeeName').addClass('red');
                                return false;
                            }
                        }
                    }
                }
                else if (ddlDisplayName == 'First Name And Middle Name') {
                    if (document.getElementById('' + ctrlcom + '_txtFirstName').value == '') {
                        $(".stoast").toastText("warning", "Please Enter FirstName!.", 5, 3);
                        document.getElementById('' + ctrlcom + '_txtFirstName').focus();
                        document.getElementById('ctl00_ContentPlaceHolder1_EmployerInfo1_ddlrelation').value = 0;
                        $('#ctl00_ContentPlaceHolder1_EmployerInfo1_ddlrelation').addClass('red');
                        document.getElementById('' + ctrlcom + '_EmployerInfo1_txtEmpContactNo').value = '';
                        document.getElementById('' + ctrlcom + '_EmployerInfo1_txtEmployeeName').value = '';

                        $('#ctl00_ContentPlaceHolder1_EmployerInfo1_txtEmployeeName').addClass('red');
                        return false;
                    }

                    if (document.getElementById('' + ctrlcom + '_txtMiddleName').value == '') {
                        $(".stoast").toastText("warning", "Please Enter MiddleName!.", 5, 3);
                        document.getElementById('' + ctrlcom + '_txtMiddleName').focus();
                        document.getElementById('ctl00_ContentPlaceHolder1_EmployerInfo1_ddlrelation').value = 0;
                        $('#ctl00_ContentPlaceHolder1_EmployerInfo1_ddlrelation').addClass('red');
                        document.getElementById('' + ctrlcom + '_EmployerInfo1_txtEmpContactNo').value = '';
                        document.getElementById('' + ctrlcom + '_EmployerInfo1_txtEmployeeName').value = '';

                        $('#ctl00_ContentPlaceHolder1_EmployerInfo1_txtEmployeeName').addClass('red');
                        return false;
                    }

                }
                else if (ddlDisplayName == 'First Name And Middle Name And Last Name') {
                    var FirstMiddleLastName = document.getElementById('ctl00_ContentPlaceHolder1_hdnFirstMiddleLastName').value;
                    FirstMiddleLastName = FirstMiddleLastName.split(',');
                    for (var i = 0; i < FirstMiddleLastName.length; i++) {
                        if (FirstMiddleLastName[i] == 1) {
                            if (document.getElementById('' + ctrlcom + '_txtFirstName').value == '') {
                                $(".stoast").toastText("warning", "Please Enter FirstName!.", 5, 3);
                                document.getElementById('' + ctrlcom + '_txtFirstName').focus();
                                document.getElementById('ctl00_ContentPlaceHolder1_EmployerInfo1_ddlrelation').value = 0;
                                $('#ctl00_ContentPlaceHolder1_EmployerInfo1_ddlrelation').addClass('red');
                                document.getElementById('' + ctrlcom + '_EmployerInfo1_txtEmpContactNo').value = '';
                                document.getElementById('' + ctrlcom + '_EmployerInfo1_txtEmployeeName').value = '';

                                $('#ctl00_ContentPlaceHolder1_EmployerInfo1_txtEmployeeName').addClass('red');

                                return false;
                            }
                        }
                        if (FirstMiddleLastName[i] == 2) {
                            if (document.getElementById('' + ctrlcom + '_txtMiddleName').value == '') {
                                $(".stoast").toastText("warning", "Please Enter MiddleName!.", 5, 3);
                                document.getElementById('' + ctrlcom + '_txtMiddleName').focus();
                                document.getElementById('ctl00_ContentPlaceHolder1_EmployerInfo1_ddlrelation').value = 0;
                                $('#ctl00_ContentPlaceHolder1_EmployerInfo1_ddlrelation').addClass('red');
                                document.getElementById('' + ctrlcom + '_EmployerInfo1_txtEmpContactNo').value = '';
                                document.getElementById('' + ctrlcom + '_EmployerInfo1_txtEmployeeName').value = '';

                                $('#ctl00_ContentPlaceHolder1_EmployerInfo1_txtEmployeeName').addClass('red');
                                return false;
                            }
                        }
                        if (FirstMiddleLastName[i] == 3) {
                            if (document.getElementById('' + ctrlcom + '_txtLastName').value == '') {
                                $(".stoast").toastText("warning", "Please Enter LastName!.", 5, 3);
                                document.getElementById('' + ctrlcom + '_txtLastName').focus();
                                document.getElementById('ctl00_ContentPlaceHolder1_EmployerInfo1_ddlrelation').value = 0;
                                $('#ctl00_ContentPlaceHolder1_EmployerInfo1_ddlrelation').addClass('red');
                                document.getElementById('' + ctrlcom + '_EmployerInfo1_txtEmpContactNo').value = '';
                                document.getElementById('' + ctrlcom + '_EmployerInfo1_txtEmployeeName').value = '';

                                $('#ctl00_ContentPlaceHolder1_EmployerInfo1_txtEmployeeName').addClass('red');

                                return false;
                            }
                        }
                    }
                }
                else if (ddlDisplayName == 'First Name') {
                    if (document.getElementById('' + ctrlcom + '_txtFirstName').value == '') {
                        $(".stoast").toastText("warning", "Please Enter FirstName!.", 5, 3);
                        document.getElementById('' + ctrlcom + '_txtFirstName').focus();
                        document.getElementById('ctl00_ContentPlaceHolder1_EmployerInfo1_ddlrelation').value = 0;
                        $('#ctl00_ContentPlaceHolder1_EmployerInfo1_ddlrelation').addClass('red');
                        document.getElementById('' + ctrlcom + '_EmployerInfo1_txtEmpContactNo').value = '';
                        document.getElementById('' + ctrlcom + '_EmployerInfo1_txtEmployeeName').value = '';

                        $('#ctl00_ContentPlaceHolder1_EmployerInfo1_txtEmployeeName').addClass('red');
                        return false;
                    }
                }
                if (document.getElementById('' + ctrlcom + '_Address1_txtMobile1').value == '') {
                    $(".stoast").toastText("warning", "Please Enter Mobile Number!.", 5, 3);
                    document.getElementById('' + ctrlcom + '_Address1_txtMobile1').focus();
                    document.getElementById('ctl00_ContentPlaceHolder1_EmployerInfo1_ddlrelation').value = 0;
                    $('#ctl00_ContentPlaceHolder1_EmployerInfo1_ddlrelation').addClass('red');

                    $('#ctl00_ContentPlaceHolder1_EmployerInfo1_txtEmployeeName').addClass('red');
                    document.getElementById('' + ctrlcom + '_EmployerInfo1_txtEmployeeName').value = '';
                    document.getElementById('' + ctrlcom + '_EmployerInfo1_txtEmpContactNo').value = '';

                    return false;
                }
                if ($('#' + ctrlcom + '_EmployerInfo1_ddlrelation').find('option:selected').text() == "Self") {
                    document.getElementById('' + ctrlcom + '_EmployerInfo1_txtEmpContactNo').disabled = true;
                    document.getElementById('' + ctrlcom + '_EmployerInfo1_txtEmployeeName').disabled = true;
                }

            }



            else {
                $('#' + ctrlcom + '_EmployerInfo1_txtEmployeeName').addClass('red');
                document.getElementById('' + ctrlcom + '_EmployerInfo1_txtEmployeeName').value = '';
                document.getElementById('' + ctrlcom + '_EmployerInfo1_txtEmpContactNo').value = '';
                document.getElementById('' + ctrlcom + '_EmployerInfo1_txtEmployeeName').disabled = false;
                document.getElementById('' + ctrlcom + '_EmployerInfo1_txtEmpContactNo').disabled = false;
            }
        }
    }
}

function ddlNationlityChange() {
    var Sel_Nation = document.getElementById('' + ctrlcom + '_hdnNCountryID').value = document.getElementById('' + ctrlcom + '_ddlNationality').value;
    var Def_Nation = $('#' + ctrlcom + '_hdnddlNationality').val();
    if (Sel_Nation != Def_Nation) {
        document.getElementById('' + ctrlcom + '_ddlproofid').value = '6';
        document.getElementById('' + ctrlcom + '_txtSSN').value = '';
        proofvalidation();
    }
    else if (Sel_Nation == Def_Nation) {
        document.getElementById('' + ctrlcom + '_ddlproofid').value = '0';
        document.getElementById('' + ctrlcom + '_txtSSN').value = '';
        proofvalidation();
    }
    if (document.getElementById('' + ctrlcom + '_ddlNationality').value > 1) {
        VisaMandatoryValidation();
    }
    else {
        clearVisaControls();
        $('#' + ctrlcom + '_ucIssuedAt_txtSearchControl').removeClass('red');
        $('#' + ctrlcom + '_txtVisaControlNo').removeClass('red');
        $('#' + ctrlcom + '_ddlVisatype').removeClass('red');
        $('#' + ctrlcom + '_txtVisaIssueDt').removeClass('red');
        $('#' + ctrlcom + '_txtVisaExpDt').removeClass('red');
        $('#' + ctrlcom + '_txtVisaIssuedBy').removeClass('red');
    }
    ExtendedDisplayValues();
}
function clearVisaControls() {
    document.getElementById('' + ctrlcom + '_ucIssuedAt_txtSearchControl').value = '';
    document.getElementById('' + ctrlcom + '_ucIssuedAt__hiddenID').value = '';
    document.getElementById('' + ctrlcom + '_ucIssuedAt__hiddenText').value = '';
    document.getElementById('' + ctrlcom + '_txtVisaControlNo').value = '';
    document.getElementById('' + ctrlcom + '_ddlVisatype').value = '0';
    document.getElementById('' + ctrlcom + '_txtVisaIssueDt').value = '';
    document.getElementById('' + ctrlcom + '_txtVisaExpDt').value = '';
    document.getElementById('' + ctrlcom + '_txtVisaIssuedBy').value = '';
}
function VisaMandatoryValidation() {
    var _chkValidation = true;
    var _ctrls = new Array();
    _ctrls[0] = 'ctl00_ContentPlaceHolder1_ucIssuedAt_txtSearchControl';
    _ctrls[1] = 'ctl00_ContentPlaceHolder1_txtVisaControlNo';
    _ctrls[2] = 'ctl00_ContentPlaceHolder1_ddlVisatype';
    _ctrls[3] = 'ctl00_ContentPlaceHolder1_txtVisaIssueDt';
    _ctrls[4] = 'ctl00_ContentPlaceHolder1_txtVisaExpDt';
    _ctrls[5] = 'ctl00_ContentPlaceHolder1_txtVisaIssuedBy';

    for (var i = 0; i < _ctrls.length; i++) {
        var ctrl = document.getElementById(_ctrls[i]);
        if (OnNullValue(ctrl) == false) {
            _chkValidation = false;
        }
        else {
            //ctrl.style.border = '1px solid rgb(190, 190, 190)';
            $('#' + _ctrls[i]).removeClass('red');
        }
    }
    return _chkValidation;
}
function CheckCombinationValidations() {

    var _mobileno = document.getElementById('' + ctrlcom + '_Address1_txtMobile1').value;
    var _dob = document.getElementById('' + ctrlcom + '_newAgeUc_txtDob').value;
    var _displayname = document.getElementById('' + ctrlcom + '_txtDisplayname').innerHTML;
    var isd_code = $('#isdcodemobile1').text();
    var _advSrch = ''; var cnt = 0;
    if (isd_code == undefined || isd_code == null || isd_code == "NaN--NaN" || isd_code == '' || isd_code == NaN) {
        isd_code = '';
    }

    if(_mobileno!='')
    _mobileno = isd_code + _mobileno;
    _displayname = _displayname.trim();
    if (_displayname != '' && _mobileno != '' && (_dob != '' && _dob != "__-__-____")) {/* 111 Combination */
        var _advSrch1 = "DISPLAY_NAME LIKE '" + _displayname + "' AND MOBILE_NO1 LIKE '" + _mobileno + "' ";
        var _advSrch2 = "DISPLAY_NAME LIKE '" + _displayname + "' AND DOB LIKE '" + _dob + "'";
        var _advSrch3 = "MOBILE_NO1 LIKE '" + _mobileno + "' AND DOB LIKE '" + _dob + "'";
        _advSrch = _advSrch1 + ' OR ' + _advSrch2 + ' OR ' + _advSrch3;
    }
    else if (_displayname != '' && _mobileno != '' && (_dob == '' || _dob == "__-__-____")) {/* 110 Combination */
        _advSrch = "DISPLAY_NAME LIKE '" + _displayname + "' AND MOBILE_NO1 LIKE '" + _mobileno + "' ";
    }
    else if (_displayname != '' && _mobileno == '' && (_dob != '' && _dob != "__-__-____" && _dob != "__-___-____")) {/* 101 Combination */
        _advSrch = "DISPLAY_NAME LIKE '" + _displayname + "' AND DOB LIKE '" + _dob + "'";
    }
    else if (_displayname != '' && _mobileno == '' && (_dob == '' || _dob == "__-__-____" || _dob == "__-___-____")) {/* 100 Combination */
        cnt++;
    }
    else if (_displayname == '' && _mobileno != '' && (_dob != '' && _dob != "__-__-____")) {/* 011 Combination */
        _advSrch = "MOBILE_NO1 LIKE '" + _mobileno + "' AND DOB LIKE '" + _dob + "'";
    }
    else if (_displayname == '' && _mobileno != '' && (_dob == '' || _dob == "__-__-____")) {/* 010 Combination */
        if (document.getElementById('ctl00_ContentPlaceHolder1_hdnonlymobilenumbermandate').value.toLowerCase() == 'yes') {
            _advSrch = "MOBILE_NO1 LIKE '" + _mobileno + "'";
        } else {
            cnt++;
        }
    }
    else if (_displayname == '' && _mobileno == '' && (_dob != '' && _dob != "__-__-____")) {/* 001 Combination */
        cnt++;
    }
    else if (_displayname == '' && _mobileno == '' && (_dob == '' || _dob == "__-__-____")) {/* 000 Combination */
        cnt++;
    }
    var PatientDetails = 'Name : ' + _displayname + '  MobilNo : ' + _mobileno;
    if (cnt == 0) {

        Onsucess_exist_patient(_advSrch);

    }

    ValidationEmergency();

    var __displayName = document.getElementById('' + ctrlcom + '_txtDisplayname').innerHTML;
    var __firstName = document.getElementById('' + ctrlcom + '_txtFirstName').value;
    var __mobileno = document.getElementById('' + ctrlcom + '_Address1_txtMobile1').value;

    if (__displayName == undefined == __displayName == null || __displayName == '') { __displayName = ''; }

    if (__firstName == undefined == __firstName == null || __firstName == '') { __firstName = ''; }

    if (__mobileno == undefined == __mobileno == null || __mobileno == '') { __mobileno = ''; }

    if (__mobileno != '') {
        GetAsync(
            "Private/FrontOffice/OPDBILLNEW.aspx/Get_AlrdyApp_Details", //D:\ProjectWorkFiles\SHIMS\User Interface\Private\FrontOffice\YRegistration.aspx.cs
            {firstName: __firstName, displayName: __displayName, mobileno: __mobileno },
            function (jdata) {

                var data = jdata;
                if (jdata != '' && jdata != null && jdata != undefined) {
                    if (jdata.d.length > 0) {
                        if (document.getElementById('' + ctrlcom + '_pre_regi').value != '1') {
                            $(".toast").toastText("Info", "This Mobile no is already having an Appointment", 7, 2);
                        }
                        // _app_pat_id = jdata.d[0].PATIENT_ID;
                        //  _apptID = jdata.d[0].APMNT_ID1;
                        document.getElementById('' + ctrlcom + '_hdnappttype').value = jdata.d[0].VISIT_TYPE;
                    }
                    else {
                        _app_pat_id = 0;
                        _apptID = 0;
                    }
                }
                else {
                    _app_pat_id = 0;
                    _apptID = 0;
                }
            },
            function (jqXHR, textStatus, errorThrown) {
                $(".stoast").toastText("warning", "Failed To Get Patient Details", 5, 3);
            });
    }
}

function ValidationEmergency() {
    if (document.getElementById('' + ctrlcom + '_ddlRegType').value == "5") {
        $('#' + ctrlcom + '_txtLastName').removeClass('red');
        $('#' + ctrlcom + '_ucConsultant_txtSearchControl').removeClass('red');
        $('#' + ctrlcom + '_Address1_AreaUserControl1_txtSearchControl').removeClass('red');
        $('#' + ctrlcom + '_Address1_txtPin').removeClass('red');
    }

}
function patientpopup() {
    $('[id*=divValidate]')[0].style.display = 'block';

}
function ClosePopup() {
    //window.location = 'OPDBILL.ASPX';
    return false;
}

var gridValidate;
function Onsucess_exist_patient(advSrch) {

    var count = 0;
    var param = param || {};
    param.dataKey = "PATIENT_ID";
    param.pageSize = 10;
    param.pageNum = 1;
    param.defaultWSParams = { _advSrch: '', Srch: advSrch };
    param.wsPath = "PatientRegistration.asmx/checkvalidation";
    param.wsFilterPath = "PatientRegistration.asmx/checkvalidation";
    param.template = ["UMR_NO*UMR_NO"
                            , "DISPLAY_NAME*DISPLAY_NAME"
                            , "MOBILE_NO1*MOBILE_NO1"
                                   ];
    param.header = [{ col: "SID", sort: false, filter: true }
                                    , { col: "Patient Name", sort: false, filter: true }
                                    , { col: "Mobil e No", sort: false, filter: true }
                                    ];
    param.enablePaging = true;
    param.enableTrace = false;
    param.enableFilter = true;
    param.enableCheckbox = false;
    param.enableSorting = true;
    param.RowNo = true;
    param.tableTemplate = true;
    param.enableDMS = false;
    param.RowDataBinding = function (rowitem, _data) {
        var obj = $(rowitem);
        if (_data != undefined && _data != null && _data != '') {
            var PatientDetails = 'Name : ' + _data.DISPLAY_NAME + '  Mobile No : ' + _data.MOBILE_NO1;
            $(".smessagebox").scustommessagebox(4, "Alert", "This patient already exists entered Details " + PatientDetails + " Do you want to continue..?", patientpopup, '', ClosePopup);
            //$('[id*=divValidate]')[0].style.display = 'block';
        }
        else {
            $('[id*=divValidate]')[0].style.display = 'none';
        }
        return obj[0].outerHTML;
    }
    param.rowClick = function (key) {
        var PatientID = key.PATIENT_ID, UMRNO = key.UMR_NO;
        document.getElementById('' + ctrlcom + '_hdnsamepatflag').value = "Y";
        AssignPatInfo_Dtls(PatientID);
        $('[id*=divValidate]')[0].style.display = 'none';
    };
    gridValidate = $("#divMobileValidate").jtable(param);
    return false;
}
function ClosePopup() {
    AllClearPopUp();
}

function btnvalidateclose() {
    $('[id*=divValidate]')[0].style.display = 'none';
    return false;
}
var globalcarddata;
var _arrTitle = [];
function Assigncardlabel(data, TitleData) {

    globalcarddata = data;
    var pattypeid = document.getElementById('' + ctrlcom + '_ddlPatientType').value;
    var lblcard = document.getElementById('' + ctrlcom + '_EmployerInfo1_lblcard');
    var lblcard2 = document.getElementById('' + ctrlcom + '_EmployerInfo1_lblcard');
    data = jQuery.parseJSON(data);
    for (i = 0; i < data.length; i++) {
        if (data[i].PATIENT_TYPE_ID == pattypeid) {
            lblcard.innerHTML = data[i].CARD_LABEL_NAME;
            lblcard2.innerHTML = data[i].CARD_LABEL_NAME;
            return false;
        } else {
            if (pattypeid == 8) {
                lblcard.innerHTML = "WAP#";
            }
            else {
                lblcard.innerHTML = "Med Card#";
            }
        }
    }
    if (TitleData != '' && TitleData != undefined) {
        TitleData = jQuery.parseJSON(TitleData);
        TitileGenderMapping(TitleData);
        _arrTitle.push(TitleData);
    }
}
function CompareExpireDate(Date1, Date2) {
    Date1 = new Date(Date1).format('dd-MMM-yyyy');
    Date2 = new Date(Date2).format('dd-MMM-yyyy');
    if (Date1 != "" && Date2 != "") {
        if (Date1.length == 10) Date1 = '0' + Date1; if (Date2.length == 10) Date2 = '0' + Date2;
        var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                n1 = months.length, re1 = /(\d{2})-([a-z]{3})-(\d{4})/i, matches1;
        while (n1--) { months[months[n1]] = n1; } // map month names to their index :)
        matches1 = Date1.match(re1); // extract date parts from string
        var dt1 = new Date(matches1[3], months[matches1[2]], matches1[1]);
        matches1 = Date2.match(re1); // extract date parts from string
        var dt2 = new Date(matches1[3], months[matches1[2]], matches1[1]);
        if (dt1 > dt2)
            return "d1>=d2";
        else if (dt1 < dt2)
            return "d1<d2";
    }
}
function ClearFamilyReffRelatedcontrols(obj) {
    if (document.getElementById('' + ctrlcom + '_UcFamilyReff_txtSearchControl').value != '' && document.getElementById('' + ctrlcom + '_UcFamilyReff__hiddenText').value != '') {
        clearRefDtls();
        ClearAddrDtls();
        clearcontactdetails();
    }
}
function PregAssignAddressDetails(result) {

    for (i = 0; i < result.length; i++) {
        /*document.getElementById('' + ctrlcom + '_Address1_txtMobile1').value = result[0].MOBILE_NO1;
        document.getElementById('' + ctrlcom + '_Address1_txtMobile3').value = result[0].MOBILE_NO2;
        document.getElementById('' + ctrlcom + '_Address1_txtMobile2').value = result[0].MOBILE_NO2;
        document.getElementById('' + ctrlcom + '_Address1_txtemail').value = result[0].EMAIL_ID;*/
        var Area = result[i].AREA_ID;
        var area_name = result[i].AREA_NAME;
        var City = result[i].CITY_ID;
        var Address = result[i].Address1 + result[i].Address2;
        var city_name = result[i].CITY_NAME;
        var State = result[i].STATE_ID;
        var state_name = result[i].STATE_NAME;
        var Country = result[i].COUNTRY_ID;
        var country_name = result[i].COUNTRY_NAME;
        var PinZip = result[i].ZIPCODE;
        var Address1 = result[i].ADDRESS1;
        var Address2 = result[i].ADDRESS2;
        var District = result[i].DISTRICT;
        var District_name = result[i].DISTRICT_NAME;
        var SameasPresentAddress, CopyFromPresentAddress;
        var mobile_no1 = result[0].MOBILE_NO1;
        var mobile_no2 = result[0].MOBILE_NO2;
        if (mobile_no1 == '' || mobile_no1 == undefined || mobile_no1 == null) { mobile_no1 = ''; }
        if (mobile_no2 == '' || mobile_no2 == undefined || mobile_no2 == null) { mobile_no2 = ''; }
        DivAdressRowIndex = DivAdressRowIndex == 0 ? 1 : DivAdressRowIndex;
        var defaultNatlty = $('#' + ctrlcom + '_hdnddlNationality').val();

        if (document.getElementById('' + ctrlcom + '_ddlNationality').value != defaultNatlty) {
            changeaddr();
        }




        if (i == 0) {
            GlobalMyAddress1 = new Array();
            multiDimAddress1(DivAdressRowIndex, SameasPresentAddress, CopyFromPresentAddress, Address1, Address2, Area, PinZip, City, District, State,
        Country, city_name, state_name, area_name, District_name, country_name, Area, '1', mobile_no1, mobile_no2);
            $.each(GlobalMyAddress1, function (ArrIndex, ChngRowIndex) {
                if (ChngRowIndex.rowIndex == DivAdressRowIndex) {
                    document.getElementById('' + ctrlcom + '_Address1_txtAddress1').value = ChngRowIndex.Address1;
                    document.getElementById('' + ctrlcom + '_Address1_txtAddress2').value = ChngRowIndex.Address2;
                    document.getElementById('' + ctrlcom + '_Address1_AreaUserControl1_txtSearchControl').value = ChngRowIndex.area_name;
                    document.getElementById('' + ctrlcom + '_Address1_AreaUserControl1__hiddenID').value = ChngRowIndex.Area;
                    document.getElementById('' + ctrlcom + '_Address1_AreaUserControl1__hiddenText').value = ChngRowIndex.area_name;
                    document.getElementById('' + ctrlcom + '_Address1_hdnAreaId').value = ChngRowIndex.Area;
                    document.getElementById('' + ctrlcom + '_Address1_CityUserControl1').value = ChngRowIndex.city_name;
                    document.getElementById('' + ctrlcom + '_Address1_hdncityid').value = ChngRowIndex.City;
                    document.getElementById('' + ctrlcom + '_Address1_StateUserControl1').value = ChngRowIndex.state_name;
                    document.getElementById('' + ctrlcom + '_Address1_hdnstateid').value = ChngRowIndex.State;
                    document.getElementById('' + ctrlcom + '_Address1_CountryUserControl1').value = ChngRowIndex.country_name;
                    document.getElementById('' + ctrlcom + '_Address1_hdncountryid').value = ChngRowIndex.Country;
                    document.getElementById('' + ctrlcom + '_Address1_txtPin').value = ChngRowIndex.PinZip;
                    document.getElementById('' + ctrlcom + '_Address1_hdnpincode').value = ChngRowIndex.PinZip;
                    document.getElementById('' + ctrlcom + '_Address1_DistricUserControl1').value = ChngRowIndex.District_name;
                    document.getElementById('' + ctrlcom + '_Address1_hdndistrictid').value = ChngRowIndex.District;
                }
            });
        }

        if (i == 1) {
            if (document.getElementById('' + ctrlcom + '_ddlNationality').value != defaultNatlty) {
                GlobalMyAddress1 = new Array();
                multiDimAddress1(DivAdressRowIndex, SameasPresentAddress, CopyFromPresentAddress, Address1, Address2, Area, PinZip, City, District, State,
        Country, city_name, state_name, area_name, District_name, country_name, Area, '1', mobile_no1, mobile_no2);
                $.each(GlobalMyAddress1, function (ArrIndex, ChngRowIndex) {
                    if (ChngRowIndex.rowIndex == DivAdressRowIndex) {
                        document.getElementById('' + ctrlcom + '_Address1_txtAddress1').value = ChngRowIndex.Address1;
                        document.getElementById('' + ctrlcom + '_Address1_txtAddress2').value = ChngRowIndex.Address2;
                        document.getElementById('' + ctrlcom + '_Address1_AreaUserControl1_txtSearchControl').value = ChngRowIndex.area_name;
                        document.getElementById('' + ctrlcom + '_Address1_AreaUserControl1__hiddenID').value = ChngRowIndex.Area;
                        document.getElementById('' + ctrlcom + '_Address1_AreaUserControl1__hiddenText').value = ChngRowIndex.area_name;
                        document.getElementById('' + ctrlcom + '_Address1_hdnAreaId').value = ChngRowIndex.Area;
                        document.getElementById('' + ctrlcom + '_Address1_CityUserControl1').value = ChngRowIndex.city_name;
                        document.getElementById('' + ctrlcom + '_Address1_hdncityid').value = ChngRowIndex.City;
                        document.getElementById('' + ctrlcom + '_Address1_StateUserControl1').value = ChngRowIndex.state_name;
                        document.getElementById('' + ctrlcom + '_Address1_hdnstateid').value = ChngRowIndex.State;
                        document.getElementById('' + ctrlcom + '_Address1_CountryUserControl1').value = ChngRowIndex.country_name;
                        document.getElementById('' + ctrlcom + '_Address1_hdncountryid').value = ChngRowIndex.Country;
                        document.getElementById('' + ctrlcom + '_Address1_txtPin').value = ChngRowIndex.PinZip;
                        document.getElementById('' + ctrlcom + '_Address1_hdnpincode').value = ChngRowIndex.PinZip;
                        document.getElementById('' + ctrlcom + '_Address1_DistricUserControl1').value = ChngRowIndex.District_name;
                        document.getElementById('' + ctrlcom + '_Address1_hdndistrictid').value = ChngRowIndex.District;
                    }
                });
            }
            else {
                if (result[i].PREST_PERMI == 'Y') { document.getElementById('' + ctrlcom + '_Address1_chkSameasPresentAddress').checked = true; }
                GlobalMyAddress2 = new Array();
                multiDimAddress2(DivAdressRowIndex, SameasPresentAddress, CopyFromPresentAddress, Address1, Address2, Area, PinZip, City, District, State,
             Country, city_name, state_name, area_name, District_name, country_name, Area, '1', mobile_no1, mobile_no2);
            }
        }
        if (i == 2) {
            if (document.getElementById('' + ctrlcom + '_ddlNationality').value != defaultNatlty) {
                GlobalMyAddress1 = new Array();
                multiDimAddress1(DivAdressRowIndex, SameasPresentAddress, CopyFromPresentAddress, Address1, Address2, Area, PinZip, City, District, State,
        Country, city_name, state_name, area_name, District_name, country_name, Area, '1', mobile_no1, mobile_no2);
                $.each(GlobalMyAddress1, function (ArrIndex, ChngRowIndex) {
                    if (ChngRowIndex.rowIndex == DivAdressRowIndex) {
                        document.getElementById('' + ctrlcom + '_Address1_txtAddress1').value = ChngRowIndex.Address1;
                        document.getElementById('' + ctrlcom + '_Address1_txtAddress2').value = ChngRowIndex.Address2;
                        document.getElementById('' + ctrlcom + '_Address1_AreaUserControl1_txtSearchControl').value = ChngRowIndex.area_name;
                        document.getElementById('' + ctrlcom + '_Address1_AreaUserControl1__hiddenID').value = ChngRowIndex.Area;
                        document.getElementById('' + ctrlcom + '_Address1_AreaUserControl1__hiddenText').value = ChngRowIndex.area_name;
                        document.getElementById('' + ctrlcom + '_Address1_hdnAreaId').value = ChngRowIndex.Area;
                        document.getElementById('' + ctrlcom + '_Address1_CityUserControl1').value = ChngRowIndex.city_name;
                        document.getElementById('' + ctrlcom + '_Address1_hdncityid').value = ChngRowIndex.City;
                        document.getElementById('' + ctrlcom + '_Address1_StateUserControl1').value = ChngRowIndex.state_name;
                        document.getElementById('' + ctrlcom + '_Address1_hdnstateid').value = ChngRowIndex.State;
                        document.getElementById('' + ctrlcom + '_Address1_CountryUserControl1').value = ChngRowIndex.country_name;
                        document.getElementById('' + ctrlcom + '_Address1_hdncountryid').value = ChngRowIndex.Country;
                        document.getElementById('' + ctrlcom + '_Address1_txtPin').value = ChngRowIndex.PinZip;
                        document.getElementById('' + ctrlcom + '_Address1_hdnpincode').value = ChngRowIndex.PinZip;
                        document.getElementById('' + ctrlcom + '_Address1_DistricUserControl1').value = ChngRowIndex.District_name;
                        document.getElementById('' + ctrlcom + '_Address1_hdndistrictid').value = ChngRowIndex.District;
                    }
                });
            }
            else {
                if (result[i].PREST_OTHER == 'Y') { document.getElementById('' + ctrlcom + '_Address1_chkSameasPresentAddress').checked = true; }
                document.getElementById('' + ctrlcom + '_Address1_ddrelationaddr').value = result[2].ADDR_TYPE_ID;
                GlobalMyAddress3 = new Array();
                multiDimAddress3(DivAdressRowIndex, SameasPresentAddress, CopyFromPresentAddress, Address1, Address2, Area, PinZip, City, District, State,
            Country, city_name, state_name, area_name, District_name, country_name, Area, '1', mobile_no1, mobile_no2);
            }
        }
    }
}
function AssignTelephn() {
    if (document.getElementById('' + ctrlcom + '_Address1_hdnSTDCode').value != '' && document.getElementById('' + ctrlcom + '_Address1_hdnSTDCode').value != null && document.getElementById('' + ctrlcom + '_Address1_hdnSTDCode').value != undefined) {
        document.getElementById('' + ctrlcom + '_Address1_txtMobile2').value = document.getElementById('' + ctrlcom + '_Address1_hdnSTDCode').value + '-';
    }
}
function AllClearPopUp() {

    document.getElementById('' + ctrlcom + '_ucConsultant__hiddenID').value = 0;
    document.getElementById('' + ctrlcom + '_ucConsultant__hiddenID').value = 0;
    $('#' + ctrlcom + '_UcOdrPsyn__hiddenID').val(0);
    $('#' + ctrlcom + '_hdnregfee').val("0");
    document.getElementById('' + ctrlcom + '_txtregfee').value = 0;
    $("#" + ctrlcom + "_EmployerInfo1_uctpa__hiddenID").val(0);
    document.getElementById('' + ctrlcom + '_ReceiptControl2_ucdueauth__hiddenID').value = 0;
    document.getElementById('' + ctrlcom + '_ReceiptControl2_Search3__hiddenID').value = 0;
    document.getElementById('' + ctrlcom + '_uccorporate_ucRefLetterNo__hiddenID').value = 0;
    $('#' + ctrlcom + '_ReceiptControl2_ucdueauth__hiddenID').val(0);
    document.getElementById('' + ctrlcom + '_UcStaffName__hiddenID').value = 0;
    document.getElementById('' + ctrlcom + '_EmployerInfo1_EmployerControl1__hiddenID').value = 0;
    document.getElementById('' + ctrlcom + '_EmployerInfo1_uctpa__hiddenID').value = 0;
    document.getElementById('' + ctrlcom + '_UcFamilyReff__hiddenID').value = 0;
    document.getElementById('' + ctrlcom + '_UcStaffName__hiddenID').value = 0;
    document.getElementById('' + ctrlcom + '_Address1_UcGuarantor_ucArea__hiddenID').value = 0;
    document.getElementById('' + ctrlcom + '_Address1_UcGuarantor_ucGArea__hiddenID').value = 0;
    document.getElementById('ctl00_ContentPlaceHolder1_ucIssuedAt__hiddenID').value = 0;
    document.getElementById('' + ctrlcom + '_ReceiptControl2_ucdueauth__hiddenID').value = 0;
    document.getElementById('' + ctrlcom + '_uccorporate_CmpLookup__hiddenID').value = 0;
    document.getElementById('' + ctrlcom + '_EmployerInfo1_uctpa__hiddenID').value = 0;
    $('#' + ctrlcom + '_Address1_uchccrdtype__hiddenID').val(0);
    $('#' + ctrlcom + '_umrPatientDetails_Umrlookup__hiddenID').val(0);
    $('#' + ctrlcom + '_ucArea__hiddenID').val(0);
    document.getElementById('' + ctrlcom + '_umrPatientDetails_hdncncsn_rule_id').value = 0;
    $('#' + ctrlcom + '_Address1_uchccrdtype__hiddenID').val(0);

    $("table[id*=gvServices] tr:has(td)").each(function (e) {
        $(this).closest('tr').find('[id*=ddlSlotTiming]').find('option:selected').text('');
        $(this).closest('tr').find("input[type=hidden][id*=hdnDoctorID]").val(0);
        $(this).closest('tr').find("input[type=hidden][id*=hdnClass_Srv_ID]").val(0);
        $(this).closest('tr').find("input[type=hidden][id*=hdnServiceID]").val(0);
        $(this).closest('tr').find("input[type=text][id*=txtServiceName]").val('');
        $(this).closest('tr').find("input[type=hidden][id*=hdnhistorytypeID]").val(0);
        $(this).closest('tr').find("input[type=hidden][id*=hdnMedicationType]").val('');
        $(this).closest('tr').find("input[type=hidden][id*=hdnLmpCal]").val('');
        $(this).closest('tr').find("input[type=hidden][id*=hdnOutherMedic]").val('');
        $(this).closest('tr').find("input[type=hidden][id*=hdnIsTakenToday]").val('');
        $(this).closest('tr').find('input[type=hidden][id*=hdnClass_Srv_ID]').val(0);
        $(this).closest('tr').find('input[type=hidden][id*=hdnServiceID]').val(0);
        $(this).closest('tr').find('input[type=hidden][id*=hdnDoctorID]').val(0);
        $(this).closest('tr').find("input[type=text][id*=txtServiceName]").val('');
        $(this).closest('tr').find("input[type=hidden][id*=hdnDoctorID]").val(0);
        $(this).closest('tr').find('input[type=hidden][id*=hdnbillingheadid]').val(0);
        $(this).closest('tr').find("input[type=hidden][id*=hdnDoctorID]").val(0);
        $(this).closest('tr').find('input[type=hidden][id*=hdnreqid]').val(0);
        $(this).closest('tr').find("input[type=hidden][id*=hdnServiceClass]").val(0);
        $(this).closest('tr').find("input[type=hidden][id*=hdnClass_Srv_ID]").val(0);
        $(this).closest('tr').find("input[type=hidden][id*=hdnDepartment_Id]").val(0);
        $(this).closest('tr').find("input[type=hidden][id*=hdnServiceTypID]").val(0);
        $(this).closest('tr').find("input[type=hidden][id*=hdnDoctorID]").val(0);
        $(this).closest('tr').find("input[type=hidden][id*=hdnDepartment_Id]").val(0);
        $(this).closest('tr').find("input[type=hidden][id*=hdnVisitTypeId]").val(0);
        $(this).closest('tr').find("input[type=hidden][id*=hdnClassSrvid]").val(0);
        $(this).closest('tr').find('[id*=hdnOrgPrice]').val(0);
        $(this).closest('tr').find('[id*=hdnDoctorPrice]').val(0);
        $(this).closest('tr').find("input[type=hidden][id*=hdnsrvpriceID]").val(0);
        $(this).closest('tr').find("input[type=hidden][id*=hdnIsForeignSrv]").val(0);
        $(this).closest('tr').find("input[type=hidden][id*=hdnServiceClass]").val(0);
        $(this).closest('tr').find("input[type=hidden][id*=hdnEvent_track_id]").val(0);
        $(this).closest('tr').find('input[type=hidden][id*=hdnTariffId]').val(0);
        $(this).closest('tr').find('input[type=hidden][id*=hdnhistorytypeID]').val(0);
        $(this).closest('tr').find('input[type=hidden][id*=hdnMedicationType]').val(0);
        $(this).closest('tr').find('input[type=hidden][id*=hdnDosageqty]').val(0);
        $(this).closest('tr').find('input[type=hidden][id*=hdnIsTakenToday]').val(0);
        $(this).closest('tr').find('input[type=hidden][id*=hdnLmpCal]').val(0);
        $(this).closest('tr').find('input[type=hidden][id*=hdnOutherMedic]').val(0);
        $(this).closest('tr').find('input[type=hidden][id*=hdn_is_free_followup]').val(0);
        $(this).closest('tr').find('[id*=hdnOrgPct]').val(0);
        $(this).closest('tr').find('[id*=hdnDoctorPct]').val(0);
        $(this).closest('tr').find("input[type=hidden][id*=hdnconrequistionid]").val(0);
        $(this).closest('tr').find("input[type=text][id*=txtremks]").val('');
        $(this).closest('tr').find("input[type=hidden][id*=hdnIsEmerPrice]").val(0);
        $(this).closest('tr').find('input[type=hidden][id*=hdnItem_id]').val(0);
        $(this).closest('tr').find('input[type=hidden][id*=hdnitem_group_id]').val(0);
        $(this).closest('tr').find("input[type=text][id*=txtServiceCode]").val('');
        $(this).closest('tr').find('input[type=hidden][id*=hdnedit_srv_cd]').val('');
        $(this).closest('tr').find('input[type=text][id*=txtEqui_Srv_Name]').val('');
        $(this).closest('tr').find("input[type=hidden][id*=hdnSrv_Grp_Name]").val('');
        $(this).closest('tr').find('input[type=hidden][id*=hdnprorate]').val(0);
        $(this).closest('tr').find("input[type=hidden][id*=hdnServiceGrpID]").val(0);
        $(this).closest('tr').find("input[type=text][id*=txtRate]").val('');
        $(this).closest('tr').find("input[type=text][id*=txtAmount]").val('');
        $(this).closest('tr').find("input[type=text][id*=txtDiscAmt]").val(0);
        $(this).closest('tr').find("input[type=text][id*=txtDiscP]").val(0);
        $(this).closest('tr').find("input[type=text][id*=txtPNAmt]").val(0);
        $(this).closest('tr').find('input[type=text][id*=txtDiscP]').val(0);
        $(this).closest('tr').find('input[type=text][id*=txthcPer]').val(0);
        $(this).closest('tr').find('input[type=text][id*=txtmaPer]').val(0);
        $(this).closest('tr').find('input[type=text][id*=txtstPer]').val(0);
        $(this).closest('tr').find('input[type=text][id*=txtRulePer]').val(0);
        $(this).closest('tr').find('input[type=text][id*=txtebPer]').val(0);
        $(this).closest('tr').find('input[type=text][id*=txtDiscAmt]').val(0);
        $(this).closest('tr').find('input[type=text][id*=txtHcAmt]').val(0);
        $(this).closest('tr').find('input[type=text][id*=txtmgAmt]').val(0);
        $(this).closest('tr').find('input[type=text][id*=txtstAmt]').val(0);
        $(this).closest('tr').find('input[type=text][id*=txtcncrlAmt]').val(0);
        $(this).closest('tr').find('input[type=text][id*=txtebAmt]').val(0);
        $(this).closest('tr').find('input[type=text][id*=txtCamt]').val(0);
        $(this).closest('tr').find('input[type=text][id*=txtCDiscP]').val(0);
        $(this).closest('tr').find('input[type=text][id*=txtCDiscAmt]').val(0);
        $(this).closest('tr').find('input[type=text][id*=txtCNetAmt]').val(0);
        $(this).closest('tr').find('input[type=hidden][id*=hdnTariffId]').val(0);
        $(this).closest('tr').find('input[type=hidden][id*=hdnhistorytypeID]').val(0);
        $(this).closest('tr').find('input[type=hidden][id*=hdnMedicationType]').val(0);
        $(this).closest('tr').find('input[type=hidden][id*=hdnDosageqty]').val(0);
        $(this).closest('tr').find('input[type=hidden][id*=hdnIsTakenToday]').val(0);
        $(this).closest('tr').find('input[type=hidden][id*=hdnLmpCal]').val(0);
        $(this).closest('tr').find('input[type=hidden][id*=hdnOutherMedic]').val(0);
        $(this).closest('tr').find('[id*=ddSType]').val(0);
        $(this).closest('tr').find('[id*=txtremks]').val('');
        $(this).closest('tr').find('input[type=hidden][id*=hdn_ord_id]').val(0);
        $(this).closest('tr').find('input[type=hidden][id*=hdnord_det_id]').val(0);
        $(this).closest('tr').find('[id*=lblordtyp]').text('');
        $(this).closest('tr').find('[id*=hdnOrgPrice]').val(0);
        $(this).closest('tr').find('[id*=hdnDoctorPrice]').val(0);
        $(this).closest('tr').find('[id*=hdnOrgPct]').val(0);
        $(this).closest('tr').find('[id*=hdnDoctorPct]').val(0);
        $(this).closest('tr').find('[id*=hdnsrvdoctorID]').val(0);
        $(this).closest('tr').find('[id*=hdnSrvShcedulSave]').val(0);
        $(this).closest('tr').find('input[type=hidden][id*=hdnsaccd]').val('');
        $(this).closest('tr').find('input[type=hidden][id*=hdnsgstpct]').val(0);
        $(this).closest('tr').find('input[type=hidden][id*=hdncgstpct]').val(0);
        $(this).closest('tr').find('input[type=hidden][id*=hdnsgstamount]').val(0);
        $(this).closest('tr').find('input[type=hidden][id*=hdncgstamount]').val(0);
        $(this).closest('tr').find('input[type=text][id*=txtDiscP]').val(0);
        $(this).closest('tr').find('input[type=text][id*=txtDiscAmt]').val(0);
        $(this).closest('tr').find('input[type=text][id*=txtstAmt]').val(0);
        $(this).closest('tr').find('input[type=text][id*=txtstPer]').val(0);
        $(this).closest('tr').find('input[type=text][id*=txtmaPer]').val(0);
        $(this).closest('tr').find('input[type=text][id*=txtmgAmt]').val(0);
        $(this).closest('tr').find('input[type=text][id*=txtebPer]').val(0);
        $(this).closest('tr').find('input[type=text][id*=txtebAmt]').val(0);
        $(this).closest('tr').find('input[type=text][id*=txtRulePer]').val(0);
        $(this).closest('tr').find('input[type=text][id*=txtcncrlAmt]').val(0);
        $(this).closest('tr').find('input[type=text][id*=txthcPer]').val(0);
        $(this).closest('tr').find('input[type=text][id*=txtHcAmt]').val(0);
        $(this).closest('tr').find('input[type=text][id*=txtDiscP]').val(0);
        $(this).closest('tr').find('input[type=text][id*=txtDiscAmt]').val(0);
        $(this).closest('tr').find('input[type=text][id*=txtPamt]').val(0);
        $(this).closest('tr').find('input[type=text][id*=txtPNAmt]').val(0);
    });

    $("table[id*=gvMultipleConcession] tr:has(td)").each(function (i, j) {
        $(this).closest('tr').find("[id*=ddlMultiDiscounttype]").val(0);
        $(this).closest('tr').find("input[type=hidden][id*=hdnauthid]").val(0);
        $(this).closest('tr').find("[id*=txtAutherizedPersion]").val('');
        $(this).closest('tr').find("input[type=text][id*=txtPersentage]").val(0);
        $(this).closest('tr').find("input[type=hidden][id*=hdncardid]").val('');
        $(this).closest('tr').find("input[type=hidden][id*=hdneventid]").val(0);
        $(this).closest('tr').find("input[type=hidden][id*=hdnRuleid]").val(0);
        $(this).closest('tr').find("input[type=text][id*=txtAmount]").val(0);
        $(this).closest('tr').find("[id*=ddlModes]").val(0);
        $(this).closest('tr').find("input[type=text][id*=txtcardno]").val('');
        $(this).closest('tr').find("input[type=text][id*=txtCRemks]").val('');
        document.getElementById('' + ctrlcom + '_umrPatientDetails_hdncncsn_rule_id').value = 0;

    });



    _RegXml = ''; _Cnsltxml = ''; _recpayxml = ''; _isQuickreg = 'N'; UmrNO = ''; Pat_ID = ''; BType = '';
    _PaidAmnt = 0; _RegPaidAmnt = 0; _ConsPaidAmnt = 0; PAYMENT_TYPE_ID = ''; CnsCount = 0;
    b_cmp_net = 0; b_cmp_grs_amt = 0; b_cmp_cnc_amt = 0; b_cmp_pct = 0;
    c_cmp_net = 0; c_cmp_grs_amt = 0; c_cmp_cnc_amt = 0; c_cmp_pct = 0;
    referral_save_count = ''; Rfrl_Ltr_Id = '';
    _app_pat_id = 0; __apptID = 0;
    _post_cons_ref_id = '0'; doc_rev_no = '0'; ff_doc_id = '0';
    OrderingPhyCount = 0; fobillamount = 0;
    _RegXml = ''; _Cnsltxml = ''; _recpayxml = ''; _isQuickreg = 'N'; UmrNO = ''; Pat_ID = ''; BType = '';
    _PaidAmnt = 0; _RegPaidAmnt = 0; _ConsPaidAmnt = 0; PAYMENT_TYPE_ID = ''; CnsCount = 0;
    b_cmp_net = 0; b_cmp_grs_amt = 0; b_cmp_cnc_amt = 0; b_cmp_pct = 0;
    c_cmp_net = 0; c_cmp_grs_amt = 0; c_cmp_cnc_amt = 0; c_cmp_pct = 0;
    referral_save_count = ''; Rfrl_Ltr_Id = '';
    _app_pat_id = 0; __apptID = 0;
    _post_cons_ref_id = '0'; doc_rev_no = '0'; ff_doc_id = '0';
    OrderingPhyCount = 0;
    isdoctorexists = false;
    OrgPrice = 0,
     EmpPrice = 0,
     OrgConPer = 0,
     OrgConcAmt = 0;
    set_contextKey = '';
    SlotId = 0;
    SlotTime = "";
    APT_SLOTS_ID = 0;
    data;
    __jsonData = [];
    arrayRequest1 = [];
    reqrowindex = 0;
    arrRequisations = [];
    _company_id = 0;
    _patient_id = 0;
    _tariff_id = 0;
    _xmlStr = '';
    _xmlreferal = '';
    _Xml_recpay_String = '';
    _xml_recpayref_string = '';
    _Xml_Recpt_String = '';
    _RegXml = '';
    _Srvc = '';
    PAID_AMOUNT = 0;
    _xmlRegStr = '';
    _xmlStr_concession = '';
    _xmlRfrlStr = '';
    _Xml_healthcard_string = '';
    _OPDxml = '';
    _OPDSrvxml = '';
    __reg_bill_id = '';
    Post_Cons = '';
    GvRowscount = 0;
    dispat = '', title_id = '', first_name = '', Last_Name = '', gender_id = '', address = '', area_id = '', REMARKS = '';
    OPcnt = 0;
    myMultiDatar1 = [];
    myMultiDatar2 = [];
    myMultiDatar3 = [];
    myMultiDatar4 = [];
    GlobalMyData1 = new Array();
    GlobalMyData2 = new Array();
    GlobalMyData3 = new Array();
    GlobalMyData4 = new Array();
    $('[id*=ddlreferral]').find('option:selected').val(1);
    GlobalMyAddress1 = '';
    GlobalMyAddress2 = '';
    GlobalMyAddress3 = '';
    SelectedRowIndex = 1;
    DivAdressRowIndex = 1;
    myMultiAddress1 = []; myMultiAddress2 = []; myMultiAddress3 = [];
    $("#progressshow").show();

    if (document.getElementById('' + ctrlcom + '_hdnispatientbaneer').value == 'N' || document.getElementById('' + ctrlcom + '_hdnispatientbaneer').value == '' || document.getElementById('' + ctrlcom + '_hdnispatientbaneer').value == 'Y') {
        document.getElementById('' + ctrlcom + '_chkisold').checked = false;
        if (document.getElementById('' + ctrlcom + '_hdnispatientbaneer').value != 'Y') {
            document.getElementById('' + ctrlcom + '_chk_old').checked = false;
        }
        //Isoldfunctionality();
        ShowUmrNos();
        $('#' + ctrlcom + '_pre_regi').val('0');
        document.getElementById('' + ctrlcom + '_UcAppointmentNo_txtSearchControl').value = '';
        document.getElementById('' + ctrlcom + '_UcAppointmentNo__hiddenText').value = '';
        document.getElementById('' + ctrlcom + '_UcAppointmentNo__hiddenID').value = '';
        document.getElementById('' + ctrlcom + '_UCprereg_txtSearchControl').value = '';
        document.getElementById('' + ctrlcom + '_UCprereg__hiddenText').value = '';
        document.getElementById('' + ctrlcom + '_UCprereg__hiddenID').value = '';
        document.getElementById('divapmnt').style.display = 'none';
        document.getElementById('DivCorpColors').style.display = 'none';
        document.getElementById('' + ctrlcom + '_chkIsRegNotReq').checked = false;
        $('#' + ctrlcom + '_UCServices_ucbillno_txtSearchControl').val('');
        $('#' + ctrlcom + '_UCServices_ucbillno__hiddenID').val('0');
        $('#' + ctrlcom + '_UCServices_ucbillno__hiddenText').val('');
        document.getElementById('' + ctrlcom + '_chkhccrd').checked = false;
        $('[id*=uchccrdtype_txtSearchControl]').val('');
        $('[id*=ucHc_crd_no_txtSearchControl]').val('');
        $('[id*=ddhcpatnames]').val('0');

        /* FOR SAVEING CHANGE CALL */
        document.getElementById('' + ctrlcom + '_UCServices_hdnisdoctorrequired').value = "";
        document.getElementById('' + ctrlcom + '_hdnsvaeclickvalue').value = 1;
        $('#isdcodemobile1').text('');
        $('#isdcodemobile3').text('');
        $('#isdcodemobile4').text('');
        $('#isdcodemobile5').text('');
        $('#ddldeprtment').val(0).select2();
        //document.getElementById('' + ctrlcom + '_UCServices_ddldeprtment').value = 0;
        document.getElementById('' + ctrlcom + '_UCServices_ddlunits').value = 0;
        clearecdetails();
        cleargurdetails();
        $($("#DivAdressadditem li")[0]).trigger("click");
        pageLoad();

        document.getElementById('' + ctrlcom + '_hdnPatientid').value = 0;
        document.getElementById('' + ctrlcom + '_hdnPaidAmnt').value = 0;
        document.getElementById('' + ctrlcom + '_hdnDoctor_ID').value = 0;
        document.getElementById('' + ctrlcom + '_uccorporate_hbncondisamount').value = 0;
        amountinwords();
        document.getElementById('' + ctrlcom + '_ReceiptControl2_HdnHealthcardno').value = '';


        document.getElementById('ctl00_ContentPlaceHolder1_umrPatientDetails_hdncncsn_rule_id').value = '';
        document.getElementById('ctl00_ContentPlaceHolder1_umrPatientDetails_hdnhealthcardeligibleamt').value = '';
        document.getElementById('ctl00_ContentPlaceHolder1_umrPatientDetails_hdnhealthdepencyid').value = '';
        document.getElementById('ctl00_ContentPlaceHolder1_lblhcnon').innerHTML = '';

        document.getElementById('ctl00_ContentPlaceHolder1_txtfathername').value = '';
        $('#' + ctrlcom + '_UCServices_hdnconruleid').val(0);
        $('[id*=txtpatdis]')[0].disabled = true;
        $('[id*=txtpatgrossamt]')[0].disabled = true;
        is_reg_include = '';
        if (document.getElementById('ctl00_ContentPlaceHolder1_chk_old').checked == true) {
            if (document.getElementById('' + ctrlcom + '_UCServices_rbtnSrvsAndCons_0').checked == true) {
                document.getElementById('divreq').style.display = 'block';
                document.getElementById('divRequisitions').style.display = 'block';
                document.getElementById('divOrderInvestigations').style.display = 'none';
                document.getElementById('' + ctrlcom + '_UCServices_hdnSrvFormName').value = 'Cons';
                document.getElementById('' + ctrlcom + '_umrPatientDetails_hdnDocName').value = "Cons";
                document.getElementById('' + ctrlcom + '_umrPatientDetails_hdnFormName').value = "Cons";
                document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnDocName').value = "Cons";
            }
            else if (document.getElementById('' + ctrlcom + '_UCServices_rbtnSrvsAndCons_1').checked == true) {
                document.getElementById('divreq').style.display = 'block';
                document.getElementById('divOrderInvestigations').style.display = 'block';
                document.getElementById('divRequisitions').style.display = 'none';
                document.getElementById('' + ctrlcom + '_UCServices_hdnSrvFormName').value = 'OP';
                document.getElementById('' + ctrlcom + '_umrPatientDetails_hdnDocName').value = "OP";
                document.getElementById('' + ctrlcom + '_umrPatientDetails_hdnFormName').value = "OP";
                document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnDocName').value = "OP";
            }
            else {
                document.getElementById('divreq').style.display = 'none';
                document.getElementById('divOrderInvestigations').style.display = 'none';
                document.getElementById('divRequisitions').style.display = 'none';
                document.getElementById('' + ctrlcom + '_UCServices_hdnSrvFormName').value = 'OP';
                document.getElementById('' + ctrlcom + '_umrPatientDetails_hdnDocName').value = "OP";
                document.getElementById('' + ctrlcom + '_umrPatientDetails_hdnFormName').value = "OP";
                document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnDocName').value = "OP";
            }
        }
    }
    $("#progressshow").hide();
    document.getElementById('ctl00_ContentPlaceHolder1_UcDiagnosis_txtSearchControl').value = '';
    document.getElementById('ctl00_ContentPlaceHolder1_UcDiagnosis__hiddenText').value = '';
    document.getElementById('ctl00_ContentPlaceHolder1_UcDiagnosis__hiddenID').value = 0;
    document.getElementById('ctl00_ContentPlaceHolder1_hdnDiagnosis_Cd').value = '';
    onGetPatientBanner();
}
function clearVisaControls() {
    document.getElementById('ctl00_ContentPlaceHolder1_ucIssuedAt_txtSearchControl').value = '';
    document.getElementById('ctl00_ContentPlaceHolder1_ucIssuedAt__hiddenID').value = '';
    document.getElementById('ctl00_ContentPlaceHolder1_ucIssuedAt__hiddenText').value = '';
    document.getElementById('ctl00_ContentPlaceHolder1_txtVisaControlNo').value = '';
    document.getElementById('ctl00_ContentPlaceHolder1_ddlVisatype').value = '0';
    document.getElementById('ctl00_ContentPlaceHolder1_txtVisaIssueDt').value = '';
    document.getElementById('ctl00_ContentPlaceHolder1_txtVisaExpDt').value = '';
    /* document.getElementById('ctl00_ContentPlaceHolder1_txtVisaIssuedBy').value = '';*/
}
function mothername(moth) /*to print mother name when dropdown is selected */
{

    if (document.getElementById('ctl00_ContentPlaceHolder1_ddlResPerson').value == 17) {
        document.getElementById('ctl00_ContentPlaceHolder1_txtMotherMName').value = document.getElementById('ctl00_ContentPlaceHolder1_txtResPerson').value.toUpperCase();
    }
    if (document.getElementById('ctl00_ContentPlaceHolder1_ddlResPerson').value == 1) {
        document.getElementById('ctl00_ContentPlaceHolder1_txtfathername').value = document.getElementById('ctl00_ContentPlaceHolder1_txtResPerson').value.toUpperCase();
    }
}
function mothername1(moth) {

    if ((document.getElementById('ctl00_ContentPlaceHolder1_txtMotherMName').value != document.getElementById('ctl00_ContentPlaceHolder1_txtResPerson').value) && document.getElementById('ctl00_ContentPlaceHolder1_ddlResPerson').value == 17) {
        document.getElementById('ctl00_ContentPlaceHolder1_txtResPerson').value = document.getElementById('ctl00_ContentPlaceHolder1_txtMotherMName').value;
    }

    if ((document.getElementById('ctl00_ContentPlaceHolder1_txtfathername').value != document.getElementById('ctl00_ContentPlaceHolder1_txtResPerson').value) && document.getElementById('ctl00_ContentPlaceHolder1_ddlResPerson').value == 1) {
        document.getElementById('ctl00_ContentPlaceHolder1_txtResPerson').value = document.getElementById('ctl00_ContentPlaceHolder1_txtfathername').value;
    }
}
function clearecdetails() {
    document.getElementById('ctl00_ContentPlaceHolder1_Address1_UcGuarantor_chkECopyAddress').checked = false;
    document.getElementById('ctl00_ContentPlaceHolder1_Address1_UcGuarantor_ddlERelation').value = 0;
    document.getElementById('ctl00_ContentPlaceHolder1_Address1_UcGuarantor_txtEName').value = '';
    document.getElementById('ctl00_ContentPlaceHolder1_Address1_UcGuarantor_txtAddress1').value = '';
    document.getElementById('ctl00_ContentPlaceHolder1_Address1_UcGuarantor_txtAddress2').value = '';
    document.getElementById('ctl00_ContentPlaceHolder1_Address1_UcGuarantor_txtmobileno').value = '';
    document.getElementById('ctl00_ContentPlaceHolder1_Address1_UcGuarantor_ucArea_txtSearchControl').value = '';
    document.getElementById('ctl00_ContentPlaceHolder1_Address1_UcGuarantor_ucArea__hiddenID').value = 0;
    document.getElementById('ctl00_ContentPlaceHolder1_Address1_UcGuarantor_ucArea__hiddenText').value = '';
    document.getElementById('ctl00_ContentPlaceHolder1_Address1_UcGuarantor_txtPin').value = '';
    document.getElementById('ctl00_ContentPlaceHolder1_Address1_UcGuarantor_ucCity').value = '';
    document.getElementById('ctl00_ContentPlaceHolder1_Address1_UcGuarantor_DistricUserControl1').value = '';
    document.getElementById('ctl00_ContentPlaceHolder1_Address1_UcGuarantor_ucState').value = '';
    document.getElementById('ctl00_ContentPlaceHolder1_Address1_UcGuarantor_ucCountry').value = '';
    document.getElementById('ctl00_ContentPlaceHolder1_Address1_UcGuarantor_ucArea_txtSearchControl').disabled = false;
    document.getElementById('ctl00_ContentPlaceHolder1_Address1_UcGuarantor_txtPin').disabled = false;

}
function cleargurdetails() {
    document.getElementById('ctl00_ContentPlaceHolder1_Address1_UcGuarantor_chkGCopyAddress').checked = false;
    document.getElementById('ctl00_ContentPlaceHolder1_Address1_UcGuarantor_ddlGERelation').value = 0;
    document.getElementById('ctl00_ContentPlaceHolder1_Address1_UcGuarantor_txtGEName').value = '';
    document.getElementById('ctl00_ContentPlaceHolder1_Address1_UcGuarantor_txtGAddress1').value = '';
    document.getElementById('ctl00_ContentPlaceHolder1_Address1_UcGuarantor_txtGAddress2').value = '';
    document.getElementById('ctl00_ContentPlaceHolder1_Address1_UcGuarantor_txtGmobileno').value = '';
    document.getElementById('ctl00_ContentPlaceHolder1_Address1_UcGuarantor_ucGArea_txtSearchControl').value = '';
    document.getElementById('ctl00_ContentPlaceHolder1_Address1_UcGuarantor_ucArea__hiddenID').value = 0;
    document.getElementById('ctl00_ContentPlaceHolder1_Address1_UcGuarantor_ucArea__hiddenText').value = '';
    document.getElementById('ctl00_ContentPlaceHolder1_Address1_UcGuarantor_txtGPin').value = '';
    document.getElementById('ctl00_ContentPlaceHolder1_Address1_UcGuarantor_ucGCity').value = '';
    document.getElementById('ctl00_ContentPlaceHolder1_Address1_UcGuarantor_txtGdistrict').value = '';
    document.getElementById('ctl00_ContentPlaceHolder1_Address1_UcGuarantor_ucGState').value = '';
    document.getElementById('ctl00_ContentPlaceHolder1_Address1_UcGuarantor_ucGCountry').value = '';
    document.getElementById('ctl00_ContentPlaceHolder1_Address1_UcGuarantor_ucGArea_txtSearchControl').disabled = false;
    document.getElementById('ctl00_ContentPlaceHolder1_Address1_UcGuarantor_txtGPin').disabled = false;
}
function Clearpup() {
    if (document.getElementById('' + ctrlcom + '_hdnispatientbaneer').value == 'Y') {
        document.getElementById('' + ctrlcom + '_chk_old').checked = true;
        ClearCompanyInfo();
        ClearPatientBanerControl(); clearRefDtls(); ClearServicesGrid(); CompanyClearPopup(); ClearAllTransactionDetails();
        TpaClearPopup();
        $("table[id$=tbl_PatRequisitions]").each(function (i, j) { $(this).remove(); }); ClearingOrderInvestigations();
    }
    else {
        clearRefDtls(); ClearAddrDtls(); ClearServicesGrid(); CompanyClearPopup();

        $('#' + ctrlcom + '_ReceiptControl2_txtquickremarks').val('');
        $('#' + ctrlcom + '_ReceiptControl2_txtRemarks').val('');
        document.getElementById('' + ctrlcom + '_txtDisplayname').innerHTML = '';
        $('#' + ctrlcom + '_EmployerInfo1_txtDesignation').val('');
        $('#' + ctrlcom + '_txtPassprotno').val('');
        $('#' + ctrlcom + '_txtIssueDt').val('');
        $('#' + ctrlcom + '_txtExpiryDt').val('');
        $('#' + ctrlcom + '_txtissuedat').val('');
        $('#' + ctrlcom + '_txtFirstName').val('');
        $('#' + ctrlcom + '_txtMiddleName').val('');
        $('#' + ctrlcom + '_txtLastName').val('');
        $('#' + ctrlcom + '_txtAliasname').val('');
        $('#' + ctrlcom + '_txtResPerson').val('');
        $('#' + ctrlcom + '_txtMotherMName').val('');
        $('#' + ctrlcom + '_txtfathername').val('');
        $('#' + ctrlcom + '_txtSSN').val('');
        $('#' + ctrlcom + '_txtNotes').val('');
        $('#' + ctrlcom + '_Address1_txtMobile1').val('');
        $('#' + ctrlcom + '_Address1_txtMobile2').val('');
        $('#' + ctrlcom + '_txtEmailid').val('');
        $('#' + ctrlcom + '_ddlTitle').val(0);
        $('#' + ctrlcom + '_ddlResPerson').val(0);
        $('#' + ctrlcom + '_ddlGender').val(0);
        $('#' + ctrlcom + '_ddlMaritalStatus').val(0);
        $('#' + ctrlcom + '_ddlOccupation').val(0);
        $('#' + ctrlcom + '_ddlBloodGroup').val(0);
        $('#' + ctrlcom + '_ddlReligion').val(0);
        $('#' + ctrlcom + '_ddlEthnicity').val(0);
        $('#' + ctrlcom + '_ddlDisplayName').val(0);
        $('#' + ctrlcom + '_newAgeUc_txtDob').val('__-__-____');
        $('#' + ctrlcom + '_newAgeUc_txtYear').val('');
        $('#' + ctrlcom + '_newAgeUc_txtMonths').val('');
        $('#' + ctrlcom + '_newAgeUc_txtDay').val('');
        $('#' + ctrlcom + '_UcFamilyReff_txtSearchControl').val('');
        document.getElementById('' + ctrlcom + '_chkIsSenior').checked = false;
        $('#' + ctrlcom + '_Address1_txtAddress1').val('');
        $('#' + ctrlcom + '_Address1_txtAddress2').val('');
        $('#' + ctrlcom + '_Address1_AreaUserControl1_txtSearchControl').val('');
        $('#' + ctrlcom + '_Address1_CityUserControl1').val('');
        $('#' + ctrlcom + '_Address1_StateUserControl1').val('');
        $('#' + ctrlcom + '_Address1_CountryUserControl1').val('');
        $('#' + ctrlcom + '_Address1_txtPin').val('');
        $('#' + ctrlcom + '_ucConsultant_txtSearchControl').val('');
        $('#' + ctrlcom + '_txtPatientType').val('');
        $('#' + ctrlcom + '_EmployerInfo1_txtEmploeeID').val('');
        //    document.getElementById('' + ctrlcom + '_EmployerInfo1_chkEmpASPatient').checked = false;
        document.getElementById('' + ctrlcom + '_chkisold').disabled = false;
        $('#' + ctrlcom + '_EmployerInfo1_EmployerControl1_txtSearchControl').val('');
        $('#' + ctrlcom + '_EmployerInfo1_uctpa_txtSearchControl').val('');
        $('#' + ctrlcom + '_EmployerInfo1_txtrefissuedt').val('');
        $('#' + ctrlcom + '_EmployerInfo1_txtlettervalidity').val('');
        $('#' + ctrlcom + '_EmployerInfo1_txtEmpCardValidity').val('');
        $('#' + ctrlcom + '_EmployerInfo1_txtEmployeeName').val('');
        $('#' + ctrlcom + '_EmployerInfo1_ddlrelation').val('0');
        $('#' + ctrlcom + '_EmployerInfo1_txtempgrade').val('');
        $('#' + ctrlcom + '_EmployerInfo1_txtEmpContactNo').val('');
        $('#' + ctrlcom + '_EmployerInfo1_txtEmpMRNo').val('');
        $('#' + ctrlcom + '_EmployerInfo1_txtEmpReferalBasis').val('');
        $('#' + ctrlcom + '_EmployerInfo1_txtEmpRefBasisNo').val('');
        $('#' + ctrlcom + '_ImageUploadControl1_img').val('');
        //    $('#' + ctrlcom + '_EmployerInfo1_lblCmpCode').val('');
        //    $('#' + ctrlcom + '_EmployerInfo1_txtCmpFee').val('');
        $('#' + ctrlcom + '_hdnAddId').val('');
        $('#' + ctrlcom + '_hdnAddRevNo').val('');
        $('#' + ctrlcom + '_hdnPatRevNo').val('');
        $('#' + ctrlcom + '_hdnumrno').val('');
        $('#' + ctrlcom + '_hdnConsultant').val('');
        $('#' + ctrlcom + '_hdnPID').val('');
        $('#' + ctrlcom + '_hdnRegDateTime').val('');
        $('#' + ctrlcom + '_hdnregno').val('');
        $('#' + ctrlcom + '_hdnEmpId').val('');
        $('#' + ctrlcom + '_hdnRegCorpId').val('');
        $('#' + ctrlcom + '_hdnRegRevCorpId').val('');
        $('#' + ctrlcom + '_hdnDID').val('');
        $('#' + ctrlcom + '_hdnAPTID').val('');
        $('#' + ctrlcom + '_hdnpreregid').val('');
        $('#' + ctrlcom + '_ddlproofid').val('0');
        OnddlProofChnages();
        $('#' + ctrlcom + '_txtSSN').val('');
        $('#' + ctrlcom + '_txtPassprotno').val('');
        $('#' + ctrlcom + '_txtIssueDt').val('');
        $('#' + ctrlcom + '_txtExpiryDt').val('');
        $('#' + ctrlcom + '_txtissuedat').val('');
        $('#' + ctrlcom + '_Umrlookup_txtSearchControl').val('');
        $('#' + ctrlcom + '_Umrlookup__hiddenID').val('');
        $('#' + ctrlcom + '_Umrlookup__hiddenText').val('');
        $('#' + ctrlcom + '_ucUMRno_txtSearchControl').val('');
        $('#' + ctrlcom + '_ucUMRno__hiddnID').val('');
        $('#' + ctrlcom + '_ucUMRno__hiddenText').val('');
        $('#' + ctrlcom + '_ddlPatientType').val('1');
        $('#' + ctrlcom + '_UCServices_divrptDispatch').val('2');
        $('#' + ctrlcom + '_Address1_txtemail').val('');
        $('#ptype-flag').removeClass();
        var dddlnat = $('#' + ctrlcom + '_hdnddlNationality').val();
        if (dddlnat == '' || dddlnat == undefined || dddlnat == null) { dddlnat = 1; }
        $('#' + ctrlcom + '_ddlNationality').val(dddlnat);
        document.getElementById('' + ctrlcom + '_ChkNBorn').checked = false;
        document.getElementById('' + ctrlcom + '_rbt_pat_type_0').checked = true;
        $('#' + ctrlcom + '_dd_reg_source').val('0');
        $('#' + ctrlcom + '_source_remarks').val('');
        if (document.getElementById('' + ctrlcom + '_chkisold').checked == false && document.getElementById('' + ctrlcom + '_chk_old').checked == false) {
            ClearAllTransactionDetails();
            document.getElementById('' + ctrlcom + '_tdUmr').style.display = 'none';
            document.getElementById('' + ctrlcom + '_tdtxtUmr').style.display = 'block';
            document.getElementById('' + ctrlcom + '_txtumrno').value = document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnTranUMRNO').value;


        }
        //    ClearTransactioncontrols('Quick');
        //    ClearTransactioncontrols('Advanced');
        OnPageValidation();
        if (document.getElementById('' + ctrlcom + '_hdnispatientbaneer').value == 'N' || document.getElementById('' + ctrlcom + '_hdnispatientbaneer').value == '') {
            document.getElementById('' + ctrlcom + '_ddlRegType').value = 2;
            selectRegType('ctl00_ContentPlaceHolder1_ddlRegType');
        }
        AccessAddDisableAttributes();
    }
    $('#A1').addClass('select');
    $('#A2').removeClass('select');
    $('#A3').removeClass('select');

    $('#R1').addClass('select');
    $('#R2').removeClass('select');
    $('#R3').removeClass('select');
    $('#R4').removeClass('select');
    /* srujana */
    $("#lbladvanced,#lblmdis").removeClass("select");
    $('[id*=quick_info]').css('display', 'block');
    $("#lblquick").addClass("select");
    /* srujana */
    //    if (document.getElementById('' + ctrlcom + '_hdnispatientbaneer').value == 'N') {
    //        document.getElementById('' + ctrlcom + '_chk_old').checked = false;
    //    }
    $('#' + ctrlcom + '_TxtOspNO').val('');
    $('[id*=divOSP]').css('display', 'none');


    return false;
}
function clearfeilds() {


    Clearpup(); ClearTranctions(); clearpaymentdetails();
    $('#' + ctrlcom + '_pre_regi').val('0');
    document.getElementById('' + ctrlcom + '_UcAppointmentNo_txtSearchControl').value = '';
    document.getElementById('' + ctrlcom + '_UcAppointmentNo__hiddenText').value = '';
    document.getElementById('' + ctrlcom + '_UcAppointmentNo__hiddenID').value = '';
    document.getElementById('' + ctrlcom + '_UCprereg_txtSearchControl').value = '';
    document.getElementById('' + ctrlcom + '_UCprereg__hiddenText').value = '';
    document.getElementById('' + ctrlcom + '_UCprereg__hiddenID').value = '';
    document.getElementById('divapmnt').style.display = 'none';
    document.getElementById('DivCorpColors').style.display = 'none';
    document.getElementById('' + ctrlcom + '_chkIsRegNotReq').checked = false;
    $('#' + ctrlcom + '_UCServices_ucbillno_txtSearchControl').val('');
    $('#' + ctrlcom + '_UCServices_ucbillno__hiddenID').val('0');
    $('#' + ctrlcom + '_UCServices_ucbillno__hiddenText').val('');
    document.getElementById('' + ctrlcom + '_chkhccrd').checked = false;
    $('[id*=uchccrdtype_txtSearchControl]').val('');
    $('[id*=ucHc_crd_no_txtSearchControl]').val('');
    $('[id*=ddhcpatnames]').val('0');

    /* FOR SAVEING CHANGE CALL */
    document.getElementById('' + ctrlcom + '_UCServices_hdnisdoctorrequired').value = "";
    document.getElementById('' + ctrlcom + '_hdnsvaeclickvalue').value = 1;
    $('#isdcodemobile1').text('');
    $('#isdcodemobile3').text('');
    //  pageLoad();
    ctl00_ContentPlaceHolder1_headerControl1_hdnisSaveDisable.value = 0;
    document.getElementById('' + ctrlcom + '_hdnPatientid').value = 0;
    document.getElementById('' + ctrlcom + '_hdnPaidAmnt').value = 0;
    document.getElementById('' + ctrlcom + '_hdnDoctor_ID').value = 0;
    document.getElementById('' + ctrlcom + '_uccorporate_hbncondisamount').value = 0;

    $("#progressshow").hide();
}


function checksrStatus() {
    var Age = $('#' + ctrlcom + '_newAgeUc_txtYear').val();
    var gender = $('#' + ctrlcom + '_ddlGender').val();
    if (gender == '1' && parseInt(Age) >= 65) {
    }
    else if (gender == '1' && parseInt(Age) < 65) {
        document.getElementById('' + ctrlcom + '_chkIsSenior').checked = false;
        $(".stoast").toastText("warning", "For Male Patients Senior Citizen age more than or equal 65(Yrs),Please Select Properly ", 5, 3);

    }
    else if (gender == '2' && parseInt(Age) >= 65) {
    }
    else if (gender == '2' && parseInt(Age) < 65) {
        document.getElementById('' + ctrlcom + '_chkIsSenior').checked = false;
        $(".stoast").toastText("warning", "For Female Patients Senior Citizen age more than or equal 65(Yrs),Please Select Properly ", 5, 3);

    }
    else {
        document.getElementById('' + ctrlcom + '_chkIsSenior').checked = false;
        $(".stoast").toastText("warning", "Senior Citizen age more than or equal 65(Yrs),Please Select Properly ", 5, 3);
    }

}



/****PatietnRegistration.js starts***/
//function OnCompSelection(data) {
//}

var set_contextKey = '';
function OnCompanyOPD(_d) {
    if (_d.ID > 0) {
        if (_d.RESULT.ListObjVal[0].CMP_EXP_STS == "Y") {
            $("#" + ctrlcom + "_EmployerInfo1_EmployerControl1_txtSearchControl").val('');
            $("#" + ctrlcom + "_EmployerInfo1_EmployerControl1__hiddenText").val('');
            $("#" + ctrlcom + "_EmployerInfo1_uctpa__hiddenID").val(0);
            $('#' + ctrlcom + '_EmployerInfo1_EmployerControl1_txtSearchControl').removeClass('red');
            $(".stoast").toastText("warning", "This Company/TPA is Expired.Please Contact Administrator!", 5, 3);
            return false;
        }
        if (_d.RESULT.ListObjVal[0].TARIFF_CONFIGURATION_OP == "N") {
            $("#" + ctrlcom + "_EmployerInfo1_EmployerControl1_txtSearchControl").val('');
            $("#" + ctrlcom + "_EmployerInfo1_EmployerControl1__hiddenText").val('');
            $("#" + ctrlcom + "_EmployerInfo1_uctpa__hiddenID").val(0);
            $(".stoast").toastText("warning", "This Company has no Tariff Configuration.Please Contact Administrator!", 5, 3);
            return false;
        }
        $("#" + ctrlcom + "_EmployerInfo1_EmployerControl1_txtSearchControl").val(_d.RESULT.ListObjVal[0].COMPANY_NAME);
        $("#" + ctrlcom + "_EmployerInfo1_EmployerControl1__hiddenText").val(_d.RESULT.ListObjVal[0].COMPANY_NAME);
        $("#" + ctrlcom + "_EmployerInfo1_uctpa__hiddenID").val(_d.RESULT.ListObjVal[0].COMPANY_ID);
        $("#" + ctrlcom + "_hdnCompanyID").val(_d.RESULT.ListObjVal[0].COMPANY_ID);
    } else {
        if (_d.CMP_EXP_STS == "Y") {
            $("#" + ctrlcom + "_EmployerInfo1_EmployerControl1_txtSearchControl").val('');
            $("#" + ctrlcom + "_EmployerInfo1_EmployerControl1__hiddenText").val('');
            $("#" + ctrlcom + "_EmployerInfo1_uctpa__hiddenID").val(0);
            $('#' + ctrlcom + '_EmployerInfo1_EmployerControl1_txtSearchControl').removeClass('red');
            $(".stoast").toastText("warning", "This Company/TPA is Expired.Please Contact Administrator!", 5, 3);
            return false;
        }
        if (_d.TARIFF_CONFIGURATION_OP == "N") {
            $("#" + ctrlcom + "_EmployerInfo1_EmployerControl1_txtSearchControl").val('');
            $("#" + ctrlcom + "_EmployerInfo1_EmployerControl1__hiddenText").val('');
            $("#" + ctrlcom + "_EmployerInfo1_uctpa__hiddenID").val(0);
            $(".stoast").toastText("warning", "This Company has no Tariff Configuration.Please Contact Administrator!", 5, 3);
            return false;
        }
        if (_d["COMPANY_NAME"] == undefined) {
            $("#" + ctrlcom + "_EmployerInfo1_EmployerControl1_txtSearchControl").val(_d.RESULT["COMPANY_NAME"]);
            $("#" + ctrlcom + "_EmployerInfo1_EmployerControl1__hiddenText").val(_d.RESULT.COMPANY_NAME);
            $("#" + ctrlcom + "_EmployerInfo1_EmployerControl1__hiddenID").val(_d.RESULT["COMPANY_ID"]);
            $("#" + ctrlcom + "_EmployerInfo1_uctpa__hiddenID").val(_d.RESULT["COMPANY_ID"]);
            $("#" + ctrlcom + "_hdnCompanyID").val(_d.RESULT["COMPANY_ID"]);

            $("#" + ctrlcom + "_uccorporate_EmployerInfo1_EmployerControl1_txtSearchControl").val(_d.RESULT["COMPANY_NAME"]);
            $("#" + ctrlcom + "_uccorporate_EmployerInfo1_EmployerControl1__hiddenText").val(_d.RESULT.COMPANY_NAME);
            $("#" + ctrlcom + "_uccorporate_EmployerInfo1_EmployerControl1__hiddenID").val(_d.RESULT["COMPANY_ID"]);
        } else {
            $("#" + ctrlcom + "_EmployerInfo1_EmployerControl1_txtSearchControl").val(_d["COMPANY_NAME"]);
            $("#" + ctrlcom + "_EmployerInfo1_EmployerControl1__hiddenText").val(_d.COMPANY_NAME);
            $("#" + ctrlcom + "_EmployerInfo1_EmployerControl1__hiddenID").val(_d["COMPANY_ID"]);
            $("#" + ctrlcom + "_EmployerInfo1_uctpa__hiddenID").val(_d["COMPANY_ID"]);
            $("#" + ctrlcom + "_hdnCompanyID").val(_d["COMPANY_ID"]);

            $("#" + ctrlcom + "_uccorporate_EmployerInfo1_EmployerControl1_txtSearchControl").val(_d["COMPANY_NAME"]);
            $("#" + ctrlcom + "_uccorporate_EmployerInfo1_EmployerControl1__hiddenText").val(_d.COMPANY_NAME);
            $("#" + ctrlcom + "_uccorporate_EmployerInfo1_EmployerControl1__hiddenID").val(_d["COMPANY_ID"]);
        }
    }
}
function OnTpaSelectionOPD(_d) {

    if (document.getElementById('' + ctrlcom + '_chk_old').checked == true) {
        if (_d.ID > 0) {
            if (_d.RESULT.ListObjVal[0].CMP_EXP_STS == "Y") {
                $("#" + ctrlcom + "_uccorporate_EmployerInfo1_uctpa_txtSearchControl").val('');
                $("#" + ctrlcom + "_uccorporate_EmployerInfo1_uctpa__hiddenText").val('');
                $("#" + ctrlcom + "_uccorporate_EmployerInfo1_uctpa__hiddenID").val(0);
                $('#' + ctrlcom + '_uccorporate_EmployerInfo1_uctpa_txtSearchControl').removeClass('red');
                $(".stoast").toastText("warning", "This Company/TPA is Expired.Please Contact Administrator!", 5, 3);
                return false;
            }
            if (_d.RESULT.ListObjVal[0].TARIFF_CONFIGURATION_OP == "N") {
                $("#" + ctrlcom + "_uccorporate_EmployerInfo1_uctpa_txtSearchControl").val('');
                $("#" + ctrlcom + "_uccorporate_EmployerInfo1_uctpa__hiddenText").val('');
                $("#" + ctrlcom + "_uccorporate_EmployerInfo1_uctpa__hiddenID").val(0);
                $(".stoast").toastText("warning", "This Company/TPA has no Tariff Configuration.Please Contact Administrator!", 5, 3);
                return false;
            }
            var reg_cmp_id = []; var reg_exp_dt = new Date(document.getElementById('' + ctrlcom + '_umrPatientDetails_hdnregexpdt').value).format('dd-MMM-yyyy');
            var result = CompareDates(reg_exp_dt, new Date().format('dd-MMM-yyyy'));
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
            $('#' + ctrlcom + '_uccorporate_hdnrefletterreq').val(_d.RESULT.ListObjVal[0].IS_LETTER_REQUIRED);
            $("#" + ctrlcom + "_uccorporate_EmployerInfo1_uctpa_txtSearchControl").val(_d.RESULT.ListObjVal[0].COMPANY_NAME);
            $("#" + ctrlcom + "_uccorporate_EmployerInfo1_uctpa__hiddenText").val(_d.RESULT.ListObjVal[0].COMPANY_NAME);
            $("#" + ctrlcom + "_uccorporate_EmployerInfo1_uctpa__hiddenID").val(_d.RESULT.ListObjVal[0].COMPANY_ID);
            document.getElementById('' + ctrlcom + '_uccorporate_hdnOrgPer').value = _d.RESULT.ListObjVal[0].ORG_PERCENT;
            document.getElementById('' + ctrlcom + '_uccorporate_hdnEmpPer').value = _d.RESULT.ListObjVal[0].EMP_PERCENT;
            $('#' + ctrlcom + '_uccorporate_EmployerInfo1_uctpa_txtSearchControl').removeClass('red');
            ($('#' + ctrlcom + '_hdnrefvaliddays').val(_d.RESULT.ListObjVal[0].VAL_NO_OF_DAYS));
            $("#" + ctrlcom + "_uccorporate_EmployerInfo1_txtcreditlimitamt").val(_d.RESULT.ListObjVal[0].CREDIT_LIMIT_AMT_OP);
            var selectedtext = $('[id*=uccorporate_ddlpattyp] option:selected').text();
            selectedtext = selectedtext.trim().toUpperCase();
            if (selectedtext == 'YOJANA') {
                document.getElementById('' + ctrlcom + '_uccorporate_EmployerInfo1_ddlrelation').selectedIndex = 16;
                document.getElementById('' + ctrlcom + '_uccorporate_EmployerInfo1_txtEmployeeName').value = $('[id*=umrPatientDetails_lblPatName]').text();
                document.getElementById('' + ctrlcom + '_uccorporate_EmployerInfo1_txtEmpMRNo').value = $('[id*=umrPatientDetails_Umrlookup_txtSearchControl]').val();
                document.getElementById('' + ctrlcom + '_uccorporate_EmployerInfo1_txtdateofissue').value = new Date().format('dd-MMM-yyyy');
            }

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
            if (_d.TARIFF_CONFIGURATION_OP == "N") {
                $("#" + ctrlcom + "_uccorporate_EmployerInfo1_uctpa_txtSearchControl").val('');
                $("#" + ctrlcom + "_uccorporate_EmployerInfo1_uctpa__hiddenText").val('');
                $("#" + ctrlcom + "_uccorporate_EmployerInfo1_uctpa__hiddenID").val(0);
                $(".stoast").toastText("warning", "This Company/TPA has no Tariff Configuration.Please Contact Administrator!", 5, 3);
                return false;
            }
            var reg_cmp_id = []; var reg_exp_dt = document.getElementById('' + ctrlcom + '_umrPatientDetails_hdnregexpdt').value;
            if (reg_exp_dt == null || reg_exp_dt == undefined) { reg_exp_dt = ""; }
            if (reg_exp_dt != "") {
                var result = CompareDates(new Date(reg_exp_dt).format('dd-MMM-yyyy'), new Date().format('dd-MMM-yyyy'));
                if (result == "d1>=d2") {
                    reg_cmp_id = document.getElementById('' + ctrlcom + '_umrPatientDetails_hdnoldregtpaid').value.split(',');
                    for (i = 0; i < reg_cmp_id.length; i++) {
                        if (reg_cmp_id[i] == _d["COMPANY_ID"]) {
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
            $('#' + ctrlcom + '_uccorporate_hdnrefletterreq').val(_d.IS_LETTER_REQUIRED);
            document.getElementById('' + ctrlcom + '_uccorporate_hdnOrgPer').value = _d["ORG_PERCENT"];
            document.getElementById('' + ctrlcom + '_uccorporate_hdnEmpPer').value = _d["EMP_PERCENT"];
            $("#" + ctrlcom + "_uccorporate_EmployerInfo1_uctpa_txtSearchControl").val(_d["COMPANY_NAME"]);
            $("#" + ctrlcom + "_uccorporate_EmployerInfo1_uctpa__hiddenText").val(_d.COMPANY_NAME);
            $("#" + ctrlcom + "_uccorporate_EmployerInfo1_uctpa__hiddenID").val(_d["COMPANY_ID"]);
            $('#' + ctrlcom + '_uccorporate_EmployerInfo1_uctpa_txtSearchControl').removeClass('red');
            $("#" + ctrlcom + "_hdnCompanyID").val(_d["COMPANY_ID"]);
            $('#' + ctrlcom + '_hdnrefvaliddays').val(_d["VAL_NO_OF_DAYS"]);
            var creditlimitamt = _d["CREDIT_LIMIT_AMT_OP"];
            if (creditlimitamt == null || creditlimitamt == undefined) { creditlimitamt = "" }
            $("#" + ctrlcom + "_uccorporate_EmployerInfo1_txtcreditlimitamt").val(creditlimitamt);
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
    }
    else {
        if (_d.ID > 0) {
            document.getElementById('' + ctrlcom + '_uccorporate_hdncmpconsdone').value = _d.RESULT.ListObjVal[0].CMP_CONS_DONE;
            document.getElementById('' + ctrlcom + '_uccorporate_hdncmpcons').value = _d.RESULT.ListObjVal[0].VAL_NO_OF_CONSULTATIONS;
            if (document.getElementById('' + ctrlcom + '_UCServices_rbtnSrvsAndCons_0').checked == true) {
                if (parseInt(_d.RESULT.ListObjVal[0].CMP_CONS_DONE) >= parseInt(_d.RESULT.ListObjVal[0].VAL_NO_OF_CONSULTATIONS)) {
                    $(".stoast").toastText("Info", "Consultations Limit done for this Company/TPA!", 7, 2);
                    document.getElementById('' + ctrlcom + '_EmployerInfo1_uctpa_txtSearchControl').value = '';
                    document.getElementById('' + ctrlcom + '_EmployerInfo1_uctpa__hiddenID').value = 0;
                    document.getElementById('' + ctrlcom + '_EmployerInfo1_uctpa__hiddenText').value = '';
                    return false;
                }
            }
            if (_d.RESULT.ListObjVal[0].CMP_EXP_STS == "Y") {
                $("#" + ctrlcom + "_EmployerInfo1_uctpa_txtSearchControl").val('');
                $("#" + ctrlcom + "_EmployerInfo1_uctpa__hiddenText").val('');
                $("#" + ctrlcom + "_EmployerInfo1_uctpa__hiddenID").val(0);
                $('#' + ctrlcom + '_EmployerInfo1_uctpa_txtSearchControl').removeClass('red');
                $(".stoast").toastText("warning", "This Company/TPA is Expired.Please Contact Administrator!", 5, 3);
                return false;
            }
            if (_d.RESULT.ListObjVal[0].TARIFF_CONFIGURATION_OP == "N") {
                $("#" + ctrlcom + "_EmployerInfo1_uctpa_txtSearchControl").val('');
                $("#" + ctrlcom + "_EmployerInfo1_uctpa__hiddenText").val('');
                $("#" + ctrlcom + "_EmployerInfo1_uctpa__hiddenID").val(0);
                $(".stoast").toastText("warning", "This Company/TPA has no Tariff Configuration.Please Contact Administrator!", 5, 3);
                return false;
            }
            _d.RESULT.ListObjVal[0].COMPANY_FEE = _d.RESULT.ListObjVal[0].COMPANY_FEE == '' || undefined || null ? '0' : _d.RESULT.ListObjVal[0].COMPANY_FEE;
            if (document.getElementById('' + ctrlcom + '_chkIsRegNotReq').checked == true) { /* reg fee latter checkbox checked*/
                // $("#" + ctrlcom + "_EmployerInfo1_txtCmpFee").val(0);
                $("#" + ctrlcom + "_txtCmpFee").val(0);
                ($('#' + ctrlcom + '_hdnregfee').val(0));
                document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnPayAmt').value = 0;
                document.getElementById('' + ctrlcom + '_hdnCorpRegFee').value = 0;
            }
            else {
                //  $("#" + ctrlcom + "_EmployerInfo1_txtCmpFee").val(_d.RESULT.ListObjVal[0].COMPANY_FEE);
                $("#" + ctrlcom + "_txtCmpFee").val(_d.RESULT.ListObjVal[0].COMPANY_FEE);
                ($('#' + ctrlcom + '_hdnregfee').val(_d.RESULT.ListObjVal[0].COMPANY_FEE));
                document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnPayAmt').value = _d.RESULT.ListObjVal[0].COMPANY_FEE;
                document.getElementById('' + ctrlcom + '_hdnCorpRegFee').value = _d.RESULT.ListObjVal[0].COMPANY_FEE;
            }
            $("#" + ctrlcom + "_txtregfee").val(_d.RESULT.ListObjVal[0].COMPANY_FEE);
            $('#' + ctrlcom + '_uccorporate_hdnrefletterreq').val(_d.RESULT.ListObjVal[0].IS_LETTER_REQUIRED);
            $("#" + ctrlcom + "_EmployerInfo1_uctpa_txtSearchControl").val(_d.RESULT.ListObjVal[0].COMPANY_NAME);
            $("#" + ctrlcom + "_EmployerInfo1_uctpa__hiddenText").val(_d.RESULT.ListObjVal[0].COMPANY_NAME);
            $("#" + ctrlcom + "_EmployerInfo1_uctpa__hiddenID").val(_d.RESULT.ListObjVal[0].COMPANY_ID);
            $('#' + ctrlcom + '_EmployerInfo1_uctpa_txtSearchControl').removeClass('red');
            $("#" + ctrlcom + "_hdnCompanyID").val(_d.RESULT.ListObjVal[0].COMPANY_ID);
            //  $("#" + ctrlcom + "_EmployerInfo1_lblCmpCode").val(_d.RESULT.ListObjVal[0].COMANY_CD);


            document.getElementById('' + ctrlcom + '_txtregfee').value = $('#' + ctrlcom + '_hdnregfee').val();

            $('#' + ctrlcom + '_ReceiptControl2_txtpatgross').val($('#' + ctrlcom + '_hdnregfee').val());
            $('#' + ctrlcom + '_ReceiptControl2_txtpatdue').val($('#' + ctrlcom + '_hdnregfee').val());
            $('#' + ctrlcom + '_ReceiptControl2_txtDueamount').val($('#' + ctrlcom + '_hdnregfee').val());
            $('#' + ctrlcom + '_ReceiptControl2_hdnNetAmt').val($('#' + ctrlcom + '_hdnregfee').val());
            $('#' + ctrlcom + '_ReceiptControl2_txtpatNet').val($('#' + ctrlcom + '_hdnregfee').val());
            $('#' + ctrlcom + '_ReceiptControl2_txtgrosstotal').val($('#' + ctrlcom + '_hdnregfee').val());
            $('#' + ctrlcom + '_ReceiptControl2_txtTotalNet').val($('#' + ctrlcom + '_hdnregfee').val());
            $('#' + ctrlcom + '_ReceiptControl2_txtTotalDue').val($('#' + ctrlcom + '_hdnregfee').val());
            ($('#' + ctrlcom + '_hdnrefvaliddays').val(_d.RESULT.ListObjVal[0].VAL_NO_OF_DAYS));
            if (_d.RESULT.ListObjVal[0].CREDIT_LIMIT_AMT_OP == "0.00" || _d.RESULT.ListObjVal[0].CREDIT_LIMIT_AMT_OP == "" || _d.RESULT.ListObjVal[0].CREDIT_LIMIT_AMT_OP == null || _d.RESULT.ListObjVal[0].CREDIT_LIMIT_AMT_OP == undefined) {
                _d.RESULT.ListObjVal[0].CREDIT_LIMIT_AMT_OP = "";
            }
            var selectedtext = $('[id*=uccorporate_ddlpattyp] option:selected').text();
            selectedtext = selectedtext.trim().toUpperCase();
            if (selectedtext == 'YOJANA') {
                document.getElementById('' + ctrlcom + '_uccorporate_EmployerInfo1_ddlrelation').selectedIndex = 16;
                document.getElementById('' + ctrlcom + '_uccorporate_EmployerInfo1_txtEmployeeName').value = $('[id*=umrPatientDetails_lblPatName]').text();
                document.getElementById('' + ctrlcom + '_uccorporate_EmployerInfo1_txtEmpMRNo').value = $('[id*=umrPatientDetails_Umrlookup_txtSearchControl]').val();
                document.getElementById('' + ctrlcom + '_uccorporate_EmployerInfo1_txtdateofissue').value = new Date().format('dd-MMM-yyyy');
            }
            $("#" + ctrlcom + "_EmployerInfo1_txtcreditlimitamt").val((_d.RESULT.ListObjVal[0].CREDIT_LIMIT_AMT_OP));
            _d = _d.RESULT.ListObjVal[0];
            /*assignopdcmplogo(_d.IMAGE);*/
        } else {
            document.getElementById('' + ctrlcom + '_uccorporate_hdncmpconsdone').value = _d.CMP_CONS_DONE;
            document.getElementById('' + ctrlcom + '_uccorporate_hdncmpcons').value = _d.VAL_NO_OF_CONSULTATIONS;
            if (document.getElementById('' + ctrlcom + '_UCServices_rbtnSrvsAndCons_0').checked == true) {
                if (parseInt(_d.CMP_CONS_DONE) >= parseInt(_d.VAL_NO_OF_CONSULTATIONS)) {
                    $(".stoast").toastText("Info", "Consultations Limit done for this Company/TPA!", 7, 2);
                    document.getElementById('' + ctrlcom + '_EmployerInfo1_uctpa_txtSearchControl').value = '';
                    document.getElementById('' + ctrlcom + '_EmployerInfo1_uctpa__hiddenID').value = 0;
                    document.getElementById('' + ctrlcom + '_EmployerInfo1_uctpa__hiddenText').value = '';
                    return false;
                }
            }
            if (_d.CMP_EXP_STS == "Y") {
                $("#" + ctrlcom + "_EmployerInfo1_uctpa_txtSearchControl").val('');
                $("#" + ctrlcom + "_EmployerInfo1_uctpa__hiddenText").val('');
                $("#" + ctrlcom + "_EmployerInfo1_uctpa__hiddenID").val(0);
                $('#' + ctrlcom + '_EmployerInfo1_uctpa_txtSearchControl').removeClass('red');
                $(".stoast").toastText("warning", "This Company/TPA is Expired.Please Contact Administrator!", 5, 3);
                return false;
            }
            if (_d.TARIFF_CONFIGURATION_OP == "N") {
                $("#" + ctrlcom + "_EmployerInfo1_uctpa_txtSearchControl").val('');
                $("#" + ctrlcom + "_EmployerInfo1_uctpa__hiddenText").val('');
                $("#" + ctrlcom + "_EmployerInfo1_uctpa__hiddenID").val(0);
                $(".stoast").toastText("warning", "This Company/TPA has no Tariff Configuration.Please Contact Administrator!", 5, 3);
                return false;
            }

            // $("#" + ctrlcom + "_EmployerInfo1_txtCmpFee").val(_d["COMPANY_FEE"]);
            $("#" + ctrlcom + "_txtCmpFee").val(_d["COMPANY_FEE"]);
            $("#" + ctrlcom + "_txtregfee").val(_d["COMPANY_FEE"]);
            document.getElementById('' + ctrlcom + '_hdnCorpRegFee').value = _d.COMPANY_FEE;
            document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnPayAmt').value = _d.COMPANY_FEE;
            ($('#' + ctrlcom + '_hdnregfee').val(_d.COMPANY_FEE));

            $("#" + ctrlcom + "_EmployerInfo1_uctpa_txtSearchControl").val(_d["COMPANY_NAME"]);
            $("#" + ctrlcom + "_EmployerInfo1_uctpa__hiddenText").val(_d.COMPANY_NAME);
            $("#" + ctrlcom + "_EmployerInfo1_uctpa__hiddenID").val(_d["COMPANY_ID"]);
            $('#' + ctrlcom + '_EmployerInfo1_uctpa_txtSearchControl').removeClass('red');
            $("#" + ctrlcom + "_hdnCompanyID").val(_d["COMPANY_ID"]);

            // $("#" + ctrlcom + "_EmployerInfo1_lblCmpCode").val(_d["COMANY_CD"]);
            ($('#' + ctrlcom + '_uccorporate_hdnrefletterreq').val(_d["IS_LETTER_REQUIRED"]));
            $('#' + ctrlcom + '_ReceiptControl2_txtpatgross').val($('#' + ctrlcom + '_hdnregfee').val());
            $('#' + ctrlcom + '_ReceiptControl2_txtpatdue').val($('#' + ctrlcom + '_hdnregfee').val());
            $('#' + ctrlcom + '_ReceiptControl2_txtDueamount').val($('#' + ctrlcom + '_hdnregfee').val());
            $('#' + ctrlcom + '_ReceiptControl2_hdnNetAmt').val($('#' + ctrlcom + '_hdnregfee').val());
            $('#' + ctrlcom + '_ReceiptControl2_txtpatNet').val($('#' + ctrlcom + '_hdnregfee').val());
            $('#' + ctrlcom + '_ReceiptControl2_txtgrosstotal').val($('#' + ctrlcom + '_hdnregfee').val());
            $('#' + ctrlcom + '_ReceiptControl2_txtTotalNet').val($('#' + ctrlcom + '_hdnregfee').val());
            $('#' + ctrlcom + '_ReceiptControl2_txtTotalDue').val($('#' + ctrlcom + '_hdnregfee').val());
            document.getElementById('' + ctrlcom + '_txtregfee').value = $('#' + ctrlcom + '_hdnregfee').val();

            ($('#' + ctrlcom + '_hdnrefvaliddays').val(_d["VAL_NO_OF_DAYS"]));
            var creditlimitamt = _d["CREDIT_LIMIT_AMT_OP"];
            creditlimitamt = creditlimitamt == '0.00' || '0' ? '' : creditlimitamt;
            $("#" + ctrlcom + "_EmployerInfo1_txtcmpcredit").val(creditlimitamt);
            if (_d["COMPANY_FEE"] > 0) {
                $('#' + ctrlcom + '_ReceiptControl2_Search3_txtSearchControl').addClass('red');
                document.getElementById('' + ctrlcom + '_ReceiptControl2_Search3_txtSearchControl').disabled = false;
                document.getElementById('lk_btn_ctl00_ContentPlaceHolder1_ReceiptControl2_Search3').disabled = false;
            } else {
                $('#' + ctrlcom + '_ReceiptControl2_Search3_txtSearchControl').removeClass('red');
                document.getElementById('' + ctrlcom + '_ReceiptControl2_Search3_txtSearchControl').disabled = true;
                document.getElementById('lk_btn_ctl00_ContentPlaceHolder1_ReceiptControl2_Search3').disabled = true;
            }
            if (_d["CREDIT_LIMIT_AMT_OP"] == null || _d["CREDIT_LIMIT_AMT_OP"] == '0.00' || _d["CREDIT_LIMIT_AMT_OP"] == undefined || _d["CREDIT_LIMIT_AMT_OP"] == "" || _d["CREDIT_LIMIT_AMT_OP"] == "0.00") { _d["CREDIT_LIMIT_AMT_OP"] = ""; }
            $("#" + ctrlcom + "_EmployerInfo1_txtcreditlimitamt").val((_d["CREDIT_LIMIT_AMT_OP"]));

            var selectedtext = $('[id*=ddlpattyp] option:selected').text();
            selectedtext = selectedtext.trim().toUpperCase();
            if (selectedtext == 'YOJANA') {
                document.getElementById('' + ctrlcom + '_uccorporate_EmployerInfo1_ddlrelation').selectedIndex = 16;
                document.getElementById('' + ctrlcom + '_uccorporate_EmployerInfo1_txtEmployeeName').value = $('[id*=umrPatientDetails_lblPatName]').text();
                document.getElementById('' + ctrlcom + '_uccorporate_EmployerInfo1_txtEmpMRNo').value = $('[id*=umrPatientDetails_Umrlookup_txtSearchControl]').val();
                document.getElementById('' + ctrlcom + '_uccorporate_EmployerInfo1_txtEmploeeID').value = $('[id*=umrPatientDetails_Umrlookup_txtSearchControl]').val();
                document.getElementById('' + ctrlcom + '_uccorporate_EmployerInfo1_txtdateofissue').value = new Date().format('dd-MMM-yyyy');
            }

            /*assignopdcmplogo(_d.IMAGE);*/
        }
        var regfee = $('#' + ctrlcom + '_hdnregfee').val();
        PatientRegFeeAmounts(regfee);
        AssignServicesGrid();
        // AddDoctortoGrid();/*Commented By Sitaram For daignostics Case*/

        RefLetterReq();
        cmp_pre_condition();
        var umrno = $('#' + ctrlcom + '_txtumrno').val();
        cmpnyid = document.getElementById("ctl00_ContentPlaceHolder1_EmployerInfo1_uctpa__hiddenID").value;
        if (cmpnyid == '' || cmpnyid == undefined || cmpnyid == null) { cmpnyid = 0; }
        GetNonAsync(
                    "PatientRegistration.asmx/Get_Patient_Comp_Details",
                    { umrNO: umrno, flag: 0, cmpnyid: cmpnyid },
                    function (jdata) {
                        OnCmpInfoSuccess(jdata.d);
                    },
                    function (jqXHR, textStatus, errorThrown) {
                        $(".stoast").toastText("warning", errorThrown, 5, 3);
                    });

        var cmp_id = document.getElementById('' + ctrlcom + '_EmployerInfo1_uctpa__hiddenID').value;
        GetNonAsync(
                    "PatientRegistration.asmx/GetCompanyReceiptInfoByID",
                    { CompanyId: cmp_id, patient_class_id: parseInt("2") },
                    function (jdata) {
                        if (jdata != null) {
                            if (jdata.d.length > 0) {
                                oncorpsuccess(jdata.d);
                            }
                        }
                    },
                    function () {
                    });
        if (document.getElementById('' + ctrlcom + '_ddlRegType').value != 13) {
            AddDoctortoGrid();
            var discount_pnt = document.getElementById('' + ctrlcom + '_uccorporate_hbncondisamount').value;
            if (discount_pnt == null || discount_pnt == '' || discount_pnt == undefined)
            { discount_pnt = 0; }
            if (parseFloat(discount_pnt) > 0) {

                if (parseFloat(discount_pnt) > 0) {
                    //  $("table[id*=UCServices_gvServices] tr:has(td)").each(function (e) {
                    var gvServices = document.getElementById('' + ctrlcom + '_UCServices_gvServices');
                    var rowIndex = gvServices.rows.length;
                    checkRowIndex = rowIndex - 1;


                    var SrvName = $('[id$=UCServices_gvServices] tr').filter(':eq(' + checkRowIndex + ')').find('[id*=txtServiceName]').val();
                    var serviceid = $('[id$=UCServices_gvServices] tr').filter(':eq(' + checkRowIndex + ')').closest('tr').find('input[type=hidden][id*=hdnServiceID]').val();
                    var DoctorId = $('[id$=UCServices_gvServices] tr').filter(':eq(' + checkRowIndex + ')').closest('tr').find('input[type=hidden][id*=hdnDoctorID]').val();
                    if (SrvName != 'REGISTRATION' && serviceid == 2 && DoctorId != '') {
                        $('[id$=UCServices_gvServices] tr').filter(':eq(' + checkRowIndex + ')').find('input[type=text][id*=txtDiscP]').val(discount_pnt);
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
                    }

                    //                                var index_data = document.getElementById('' + ctrlcom + '_UCServices_gvServices').rows.length;
                    //   

                    //                          index_data = index_data - 1;

                    CalculateGridAmt(checkRowIndex);
                    //});
                }
            }
        }
        var cmp_Id = document.getElementById('' + ctrlcom + '_EmployerInfo1_uctpa__hiddenID').value;
        var Pat_Type = document.getElementById('' + ctrlcom + '_ddlPatientType').value;
        if (Pat_Type == '2' || Pat_Type == '5' || Pat_Type == '8' || Pat_Type == '9' || Pat_Type == '10') {
            classDisplayCmpAmts();
        }
        else {
            classHideCmpAmts();
        }
        if (parseInt(cmp_Id) > 0 && (Pat_Type == '2' || Pat_Type == '5' || Pat_Type == '9' || Pat_Type == '8' || Pat_Type == '10')) {
            DivCorporate.style.display = "block";
            DivCorpColors.style.display = "block";
        }
        else {
            DivCorporate.style.display = "none";
            DivCorpColors.style.display = "none";
        }
        var Length = $('table[id*=gvServices] tr:has(td)').length;
        $("table[id*=gvServices] tr:has(td)").each(function (e) {
            var srv_name = $(this).closest('tr').find('input[type=text][id*=txtServiceName]').val();
            var _srvId = $(this).closest('tr').find("input[type=hidden][id*=hdnServiceID]").val();
            var _doctor_id = $(this).closest('tr').find("input[type=hidden][id*=hdnDoctorID]").val();
            var _srv_class_id = $(this).closest('tr').find('input[type=hidden][id*=hdnServiceClass]').val();
            var cls_srv_id = $(this).closest('tr').find('input[type=hidden][id*=hdnClass_Srv_ID]').val();
            if (srv_name != "REGISTRATION" && (_srvId != 2 && cls_srv_id == 0)) {
                OnRemoveConfirmation(this);

            }

        });
    }
  
    RefLetterReq();
    BindBranchToDropdown1(_d["COMPANY_ID"]);
    BindGradeToDropdown1(_d["COMPANY_ID"]);
    /*OnPageValidation();*/
    /*Commented by naveen For Company selection time */
    // CalculateGridAmt(0);
}
function BindBranchToDropdown1(cmpyID) {
    GetAsync(
        "Private/FrontOffice/OPDBILLNEW.aspx/SetCmpId",
        { Cmpy_ID: cmpyID },
        function (JData) {
            if (JData.d != null)
            DropdownBindBrach1(JData);
        },
        function (jqXHR, textStatus, errorThrown) {
            alert(errorThrown);
        });
}
function DropdownBindBrach1(response) {
    if (document.getElementById('' + ctrlcom + '_chk_old').checked == true) {
        var dropdown = document.getElementById('' + ctrlcom + '_uccorporate_EmployerInfo1_txtBranch');
    } else {
        var dropdown = document.getElementById('' + ctrlcom + '_EmployerInfo1_txtBranch');
    }
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

function BindGradeToDropdown1(cmpyID) {
    GetAsync(
        "Private/FrontOffice/OPDBILLNEW.aspx/GetGradeDetails",
        { Cmpy_ID: cmpyID },
        function (JData) {
            if (JData.d != null)
            GradeBindBrach1(JData);
        },
        function (jqXHR, textStatus, errorThrown) {
            alert(errorThrown);
        });
}
function GradeBindBrach1(grade) {
    if (document.getElementById('' + ctrlcom + '_chk_old').checked == true) {
        var ddlGrade = document.getElementById('' + ctrlcom + '_uccorporate_EmployerInfo1_txtempgrade');
    } else {
        var ddlGrade = document.getElementById('' + ctrlcom + '_EmployerInfo1_txtempgrade');
    }
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
function cmp_pre_condition() {
    var UMR_NO = "", CMPNY_ID = 0;
    UMR_NO = $('#' + ctrlcom + '_umrPatientDetails_Umrlookup_txtSearchControl').val();
    //UMR_NO = $('#' + ctrlcom + '_Umrlookup_txtSearchControl').val();
    CMPNY_ID = $('#' + ctrlcom + '_EmployerInfo1_uctpa__hiddenID').val();
    CMPNY_ID = CMPNY_ID == "" ? 0 : CMPNY_ID;
    CMPNY_ID = CMPNY_ID == undefined ? 0 : CMPNY_ID;
    //var PatientID1 = document.getElementById('' + ctrlcom + '_hdnPatientid').value;
    var PatientID1 = document.getElementById('' + ctrlcom + '_umrPatientDetails_hdnPatientid').value;
    PatientID1 = PatientID1 == undefined ? 0 : PatientID1;


    document.getElementById('ctl00_ContentPlaceHolder1_uccorporate_CmpLookup_hdn_preCond').value = "^0^" + "PATIENTCMP^" + PatientID1 + "^0";


    //    GetNonAsync(
    //                "Private/FrontOffice/OPDBILL.aspx/Company_Precondition",
    //    //{ PatientId: PatientID1, UMR_NO: UMR_NO, CMPNY_ID: CMPNY_ID },
    //                {PatientId: PatientID1 },
    //                function (JData) {
    //                },
    //                function (jqXHR, textStatus, errorThrown) {
    //                });
}
var CompanyPer, EmployeePer = 0;
function oncorpsuccess(result) {
    document.getElementById('' + ctrlcom + '_UCServices_HdnPri1').value = '0';
    document.getElementById('' + ctrlcom + '_UCServices_HdnPri2').value = '0';
    document.getElementById('' + ctrlcom + '_UCServices_HdnPri3').value = '0';
    document.getElementById('' + ctrlcom + '_UCServices_HdnPri4').value = '0';
    document.getElementById('' + ctrlcom + '_UCServices_HdnPriC1').value = '';
    document.getElementById('' + ctrlcom + '_UCServices_HdnPriC2').value = '';
    document.getElementById('' + ctrlcom + '_UCServices_HdnPriC3').value = '';
    document.getElementById('' + ctrlcom + '_UCServices_HdnPriC4').value = '';
    if (result[0] != null) {
        var receiptType = "OPCOR";
        document.getElementById('' + ctrlcom + '_UCServices_hdnCorpPat').value = '';
        document.getElementById('' + ctrlcom + '_UCServices_hdnCorpPat').value = 'Y';
        if (document.getElementById('' + ctrlcom + '_hdnOrgPer').value != '' && document.getElementById('' + ctrlcom + '_hdnEmpPer').value != '') {
            document.getElementById('' + ctrlcom + '_txtCorpPercentage').value = document.getElementById('' + ctrlcom + '_hdnOrgPer').value;
            document.getElementById('' + ctrlcom + '_txtEmpPercentage').value = document.getElementById('' + ctrlcom + '_hdnEmpPer').value

        } else {
            document.getElementById('' + ctrlcom + '_txtCorpPercentage').value = typeof result[0].ORG_PERCENT == "string" ? result[0].ORG_PERCENT : '';
            document.getElementById('' + ctrlcom + '_txtEmpPercentage').value = typeof result[0].EMP_PERCENT == "string" ? result[0].EMP_PERCENT : '';
            document.getElementById('' + ctrlcom + '_hdnOrgPer').value = typeof result[0].ORG_PERCENT == "string" ? result[0].ORG_PERCENT : '';
            document.getElementById('' + ctrlcom + '_hdnEmpPer').value = typeof result[0].EMP_PERCENT == "string" ? result[0].EMP_PERCENT : '';
        }
        if (result[0].OP_PRIORITY_TARIFFS != '' && result[0].OP_PRIORITY_TARIFFS != null) {
            var str = result[0].OP_PRIORITY_TARIFFS.split(',');
            if (str[0] == '0') str[0] = '';
            if (str[1] == '0') str[1] = '';
            if (str[2] == '0') str[2] = '';
            if (str[3] == '0') str[3] = '';
            document.getElementById('' + ctrlcom + '_UCServices_lblpri1').innerText = '1.' + str[0];
            document.getElementById('' + ctrlcom + '_UCServices_lblpri2').innerText = '2.' + str[1];
            document.getElementById('' + ctrlcom + '_UCServices_lblpri3').innerText = '3.' + str[2];
            document.getElementById('' + ctrlcom + '_UCServices_lblpri4').innerText = '4.' + str[3];
            ChangeSrvToCons();

        }
        if (result[0].OP_PRIORITY != '' && result[0].OP_PRIORITY != null) {
            var str_tariff = result[0].OP_PRIORITY.split(',');
            if (str_tariff[0] == '0') str_tariff[0] = '0';
            if (str_tariff[1] == '0') str_tariff[1] = '0';
            if (str_tariff[2] == '0') str_tariff[2] = '0';
            if (str_tariff[3] == '0') str_tariff[3] = '0';
            document.getElementById('' + ctrlcom + '_UCServices_HdnPri1').value = str_tariff[0];
            document.getElementById('' + ctrlcom + '_UCServices_HdnPri2').value = str_tariff[1];
            document.getElementById('' + ctrlcom + '_UCServices_HdnPri3').value = str_tariff[2];
            document.getElementById('' + ctrlcom + '_UCServices_HdnPri4').value = str_tariff[3];

        }
        if (result[0].OP_PRIORITY_COLOR_CDS != '' && result[0].OP_PRIORITY_COLOR_CDS != null) {
            var str_Col = result[0].OP_PRIORITY_COLOR_CDS.split(',');
            if (str_Col[0] == '0') str_Col[0] = '0';
            if (str_Col[1] == '0') str_Col[1] = '0';
            if (str_Col[2] == '0') str_Col[2] = '0';
            if (str_Col[3] == '0') str_Col[3] = '0';
            document.getElementById('' + ctrlcom + '_UCServices_HdnPriC1').value = str_Col[0];
            document.getElementById('' + ctrlcom + '_UCServices_HdnPriC2').value = str_Col[1];
            document.getElementById('' + ctrlcom + '_UCServices_HdnPriC3').value = str_Col[2];
            document.getElementById('' + ctrlcom + '_UCServices_HdnPriC4').value = str_Col[3];
        }
    }
    if (document.getElementById('' + ctrlcom + '_umrPatientDetails_hdnDocName').value == "Cons") {
        $('#DivCorpColors')[0].style.display = 'none';
    }
}
function AssignEmpOrgPercentage(data) {
    document.getElementById('' + ctrlcom + '_txtCorpPercentage').value = data.ORG_PERCENT;
    document.getElementById('' + ctrlcom + '_txtEmpPercentage').value = data.EMP_PERCENT;
    document.getElementById('' + ctrlcom + '_hdnOrgPer').value = data.ORG_PERCENT;
    document.getElementById('' + ctrlcom + '_hdnEmpPer').value = data.EMP_PERCENT;
    document.getElementById('' + ctrlcom + '_uccorporate_hdnCompanyOrgpercent').value = data.ORG_PERCENT;
    document.getElementById('' + ctrlcom + '_uccorporate_hdnEmployeOrgpercent').value = data.EMP_PERCENT;
}
function AssignEmpOrgPercentageLetterSave(orgletterperletter, empletterperletter) {
    document.getElementById('' + ctrlcom + '_txtCorpPercentage').value = orgletterperletter;
    document.getElementById('' + ctrlcom + '_txtEmpPercentage').value = empletterperletter;
    document.getElementById('' + ctrlcom + '_hdnOrgPer').value = orgletterperletter;
    document.getElementById('' + ctrlcom + '_hdnEmpPer').value = empletterperletter;
    document.getElementById('' + ctrlcom + '_uccorporate_hdnCompanyOrgpercent').value = orgletterperletter;
    document.getElementById('' + ctrlcom + '_uccorporate_hdnEmployeOrgpercent').value = empletterperletter;
}

/*function RefLetterReq() {
var refletter = document.getElementById('' + ctrlcom + '_hdnrefletterreq').value;
var RefLetter = document.getElementById('' + ctrlcom + '_EmployerInfo1_txtrefletter');
var RefIssueDt = document.getElementById('' + ctrlcom + '_EmployerInfo1_txtrefissuedt');
var LetterIssueby = document.getElementById('' + ctrlcom + '_EmployerInfo1_txtletterissuedby');
var creditlimit = document.getElementById('' + ctrlcom + '_EmployerInfo1_txtcreditlimitamt');
var date = $('#' + ctrlcom + '_EmployerInfo1_txtlettervalidity').val();
var duration = document.getElementById('' + ctrlcom + '_hdnrefvaliddays').value;
date = new Date(new Date().getTime() + duration * 24 * 60 * 60 * 1000).format('dd-MMM-yyyy');
var result = CompareDates(new Date().format('dd-MMM-yyyy'), date);
if (result == "d1>=d2") {
$(".stoast").toastText("warning", "Referral Letter Expiry Date should not be less than Todays Date", 5, 3);
document.getElementById('' + ctrlcom + '_EmployerInfo1_txtrefissuedt').value = new Date().format('dd-MMM-yyyy');
validdt = new Date(new Date().getTime() + duration * 24 * 60 * 60 * 1000).format('dd-MMM-yyyy');
$('#' + ctrlcom + '_EmployerInfo1_txtlettervalidity').val(validdt);
return false;
} else {
$('#' + ctrlcom + '_EmployerInfo1_txtrefissuedt').val(new Date().format('dd-MMM-yyyy'));
$('#' + ctrlcom + '_EmployerInfo1_txtlettervalidity').val(date);
}
if (refletter == "N" || refletter == "" || refletter == undefined || refletter == null) {
RefLetter.style.border = '';
LetterIssueby.style.border = '';
}
else {
LetterIssueby.style.border = '1px solid #f4785e';
RefLetter.style.border = '1px solid #f4785e';
}

}*/
function OnCmpInfoSuccess(result) {
    if (result.length > 0) {
        document.getElementById('' + ctrlcom + '_hdnNoOfConsValidDays').value = result[0]["VAL_NO_OF_DAYS"];
        document.getElementById('' + ctrlcom + '_hdnNoOfValidConsults').value = result[0]["VAL_NO_OF_CONSULTATIONS"];
        document.getElementById('' + ctrlcom + '_hdnOrgPer').value = result[0]["ORG_PERCENT"];
        document.getElementById('' + ctrlcom + '_hdnEmpPer').value = result[0]["EMP_PERCENT"];
        document.getElementById('' + ctrlcom + '_hdnCmpColor').value = result[0]["COLOUR_ID"];
        document.getElementById('' + ctrlcom + '_hdnCmpConsTariffId').value = result[0]["CONS_TARIFF_ID"];
        document.getElementById('' + ctrlcom + '_EmployerInfo1_txtEmpMRNo').value = result[0]["CARD_NO"];
        //document.getElementById('' + ctrlcom + '_txtEmpCd').value = result[0]["EMPLOYEE_ID"];
        document.getElementById('' + ctrlcom + '_EmployerInfo1_txtEmployeeName').value = result[0]["EmployeeName"];
        document.getElementById('' + ctrlcom + '_hdncmpnoofcon').value = result[0].VALNOOF_CON;
        document.getElementById('' + ctrlcom + '_hdnConsTariffId').value = result[0].CONS_TARIFF_ID;
        document.getElementById('' + ctrlcom + '_hdnisletReq').value = result[0].IS_LETTER_REQUIRED;
        var umrno = document.getElementById('' + ctrlcom + '_Umrlookup_txtSearchControl').value;
        var companyid = document.getElementById('' + ctrlcom + '_EmployerInfo1_uctpa__hiddenID').value;
        //        GetAsync(
        //                "Private/FrontOffice/OP_Quick.aspx/RefLetter_Precondition",
        //                { Umr_No: umrno, Company_ID: companyid },
        //                function (JData) {
        //                },
        //                function (jqXHR, textStatus, errorThrown) {
        //                });

        var oprefltrfor = "";
        if (document.getElementById('' + ctrlcom + '_umrPatientDetails_hdnDocName').value == "OP")
            oprefltrfor = "OPB";
        else if (document.getElementById('' + ctrlcom + '_umrPatientDetails_hdnDocName').value == "Cons")
            oprefltrfor = "OPC";
        document.getElementById(ctrlcom + 'uccorporate_ucRefLetterNo_hdn_preCond').value = "^" + "^^^" + companyid + "^" + umrno + "^^";
    }
}
function CheckRefValidDt(input) {
    if (document.getElementById('' + ctrlcom + '_EmployerInfo1_EmployerControl1_txtSearchControl').value != '') {
        var duration = document.getElementById('' + ctrlcom + '_hdnrefvaliddays').value;
        var validdt = new Date(new Date(input).getTime() + duration * 24 * 60 * 60 * 1000).format('dd-MMM-yyyy');
        var result = CompareDates(new Date().format('dd-MMM-yyyy'), validdt);
        if (result == "d1>=d2") {
            $(".stoast").toastText("warning", "Referral Letter Expiry Date should not be less than Todays Date", 5, 3);
            //            alert('Referral Letter Expiry Date should not be less than Todays Date');
            document.getElementById('' + ctrlcom + '_EmployerInfo1_txtrefissuedt').value = new Date().format('dd-MMM-yyyy');
            validdt = new Date(new Date().getTime() + duration * 24 * 60 * 60 * 1000).format('dd-MMM-yyyy');
            $('#' + ctrlcom + '_EmployerInfo1_txtlettervalidity').val(validdt);
            return false;
        } else {
            $('#' + ctrlcom + '_EmployerInfo1_txtlettervalidity').val(validdt);
        }
    }
}

function Trim(strIn) {
    strOut = strIn;
    strOut = strOut.replace(/^ */g, "");
    strOut = strOut.replace(/ *$/g, "");
    return strOut;

}

function UpperCase(Name) {
    Name.value = Name.value.trim();
    Name.value = Name.value.toUpperCase();
    return Name.value;
}

function ValidateValidateLandNumber(value) {
    var value = document.getElementById('' + ctrlcom + '_Address1_txtMobile2').value;
    var length = value.length;
    chk1 = "1234567890()-+ ";
    for (i = 0; i < length; i++) {
        ch1 = value.charAt(i);
        rtn1 = chk1.indexOf(ch1);
        if (rtn1 == -1)
            document.getElementById('' + ctrlcom + '_Address1_txtMobile2').value = '';
        return false;
    }
    return true;
}
function OnPassportNullValue(ctrl) {

    if (document.getElementById('' + ctrlcom + '_txtPassprotno').value != '') {
        OnNullValue(ctrl);
    }
    else {
        var ctrls = new Array();
        ctrls[0] = 'ctl00_ContentPlaceHolder1_txtPassprotno';
        ctrls[1] = 'ctl00_ContentPlaceHolder1_txtIssueDt';
        ctrls[2] = 'ctl00_ContentPlaceHolder1_txtExpiryDt';
        ctrls[3] = 'ctl00_ContentPlaceHolder1_txtissuedat';
        ctrls[4] = 'ctl00_ContentPlaceHolder1_ddlNationality';

        for (var i = 0; i < ctrls.length; i++) {
            var ctrlid = document.getElementById(ctrls[i]);
            ctrlid.style.border = "1px solid #bebebe";
        }
    }
}
function ValidateDate1() {
    var SDate = document.getElementById('' + ctrlcom + '_txtIssueDt').value;
    var EDate = document.getElementById('' + ctrlcom + '_txtExpiryDt').value;
    var firstIndex = SDate.indexOf("-");
    var secondIndex = SDate.lastIndexOf("-");
    var d1 = SDate.substring(0, firstIndex);
    var m1 = SDate.substring(firstIndex + 1, secondIndex);
    if (m1 == 'Jan') { m1 = 1 } if (m1 == 'Feb') { m1 = 2 } if (m1 == 'Mar') { m1 = 3 }
    if (m1 == 'Apr') { m1 = 4 } if (m1 == 'May') { m1 = 5 } if (m1 == 'Jun') { m1 = 6 }
    if (m1 == 'Jul') { m1 = 7 } if (m1 == 'Aug') { m1 = 8 } if (m1 == 'Sep') { m1 = 9 }
    if (m1 == 'Oct') { m1 = 10 } if (m1 == 'Nov') { m1 = 11 } if (m1 == 'Dec') { m1 = 12 }
    var y1 = SDate.substring(secondIndex + 1, SDate.length);
    var SDateFull = m1 + "/" + d1 + "/" + y1;
    var d2 = EDate.substring(0, firstIndex);
    var m2 = EDate.substring(firstIndex + 1, secondIndex);
    if (m2 == 'Jan') { m2 = 1 } if (m2 == 'Feb') { m2 = 2 } if (m2 == 'Mar') { m2 = 3 }
    if (m2 == 'Apr') { m2 = 4 } if (m2 == 'May') { m2 = 5 } if (m2 == 'Jun') { m2 = 6 }
    if (m2 == 'Jul') { m2 = 7 } if (m2 == 'Aug') { m2 = 8 } if (m2 == 'Sep') { m2 = 9 }
    if (m2 == 'Oct') { m2 = 10 } if (m2 == 'Nov') { m2 = 11 } if (m2 == 'Dec') { m2 = 12 }
    var y2 = EDate.substring(secondIndex + 1, EDate.length);
    var EDateFull = m2 + "/" + d2 + "/" + y2;
    var startDate = new Date(y1, m1, d1);
    var endDate = new Date(y2, m2, d2);
    if (SDate != '' && EDate != '' && startDate > endDate) {
        $(".stoast").toastText("warning", "Expiry date must be greater than Issue date.", 5, 3);
        //        alert('Expiry date must be greater than Issue date.');
        document.getElementById('' + ctrlcom + '_txtExpiryDt').value = '';
        document.getElementById('' + ctrlcom + '_txtExpiryDt').focus();
        return false;
    }
    return false;
}
function OnIssueSetContextkey() {
    set_contextKey = document.getElementById('' + ctrlcom + '_hdnNCountryID').value;
}

function CalculateDueAmt() {
    if ($('#' + ctrlcom + '_ReceiptControl2_ddlPaymentType').val() == '1') {
        var TanderedAmt = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtTenderedAmt').value;
        var GrossAmt = document.getElementById('' + ctrlcom + '_txtgrossamt').value;
        var ConcessionAmt = document.getElementById('' + ctrlcom + '_txtconamt').value;
        var ReceiptAmt = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtreceiptAmount');
        var TransactionDueAmt = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtDueamount');
        var NetAmt = document.getElementById('' + ctrlcom + '_txtnetamt');
        GrossAmt = GrossAmt == '' ? 0 : GrossAmt;
        NetAmt = NetAmt == '' ? 0 : NetAmt;
        ConcessionAmt = ConcessionAmt == '' ? 0 : ConcessionAmt;
        TanderedAmt = TanderedAmt == '' ? 0 : TanderedAmt;

        var DueAmtCal = GrossAmt - (parseFloat(TanderedAmt) + parseFloat(ConcessionAmt));
        var NetAmtCal = GrossAmt - parseFloat(ConcessionAmt);
        NetAmtCal = NetAmtCal == '' ? 0 : NetAmtCal;
        DueAmtCal = DueAmtCal == '' ? 0 : DueAmtCal;

        DueAmtCal = DueAmtCal < 0 ? 0 : DueAmtCal;
        NetAmtCal = NetAmtCal < 0 ? 0 : NetAmtCal;


        var DueAmt = document.getElementById('' + ctrlcom + '_txtdueamt');
        DueAmt.value = parseFloat(DueAmtCal);
        NetAmt.value = parseFloat(NetAmtCal);
        ReceiptAmt.value = TanderedAmt;
        TransactionDueAmt.value = parseFloat(DueAmtCal);
    }
}
function CalculateConcessionAmt(obj) {
    if ($('#' + ctrlcom + '_ReceiptControl2_ddlPaymentType').val() == '1') {
        var TanderedAmt = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtTenderedAmt').value;
        var GrossAmt = document.getElementById('' + ctrlcom + '_txtgrossamt').value;
        var ConcessionAmt = document.getElementById('' + ctrlcom + '_txtconamt').value;
        var ReceiptAmt = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtreceiptAmount');
        var TransactionDueAmt = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtDueamount');
        var NetAmt = document.getElementById('' + ctrlcom + '_txtnetamt');
        GrossAmt = GrossAmt == '' ? 0 : GrossAmt;
        NetAmt = NetAmt == '' ? 0 : NetAmt;
        ConcessionAmt = ConcessionAmt == '' ? 0 : ConcessionAmt;
        TanderedAmt = TanderedAmt == '' ? 0 : TanderedAmt;

        var DueAmtCal = GrossAmt - (parseFloat(TanderedAmt) + parseFloat(ConcessionAmt));
        var NetAmtCal = GrossAmt - parseFloat(ConcessionAmt);
        NetAmtCal = NetAmtCal == '' ? 0 : NetAmtCal;
        DueAmtCal = DueAmtCal == '' ? 0 : DueAmtCal;

        DueAmtCal = DueAmtCal < 0 ? 0 : DueAmtCal;
        NetAmtCal = NetAmtCal < 0 ? 0 : NetAmtCal;

        var DueAmt = document.getElementById('' + ctrlcom + '_txtdueamt');
        DueAmt.value = parseFloat(DueAmtCal);
        NetAmt.value = parseFloat(NetAmtCal);
        ReceiptAmt.value = TanderedAmt;
        TransactionDueAmt.value = parseFloat(DueAmtCal);
    }
}

function getdetails() {
    //Patient Details
    document.getElementById('' + ctrlcom + '_ddlTitle').value = jdata;
    document.getElementById('' + ctrlcom + '_txtFirstName').value = jdata;
    document.getElementById('' + ctrlcom + '_txtMiddleName').value = jdata;
    document.getElementById('' + ctrlcom + '_txtLastName').value = jdata;
    document.getElementById('' + ctrlcom + '_newAgeUc_txtDob').value = jdata;
    document.getElementById('' + ctrlcom + '_txtDisplayname').innerHTML = jdata;
    document.getElementById('' + ctrlcom + '_ddlGender').value = jdata;
    document.getElementById('' + ctrlcom + '_txtMotherMName').value = jdata;
    document.getElementById('' + ctrlcom + '_ddlResPerson').value = jdata;
    document.getElementById('' + ctrlcom + '_txtResPerson').value = jdata;
    document.getElementById('' + ctrlcom + '_ddlMaritalStatus').value = jdata;
    document.getElementById('' + ctrlcom + '_ddlBloodGroup').value = jdata;
    document.getElementById('' + ctrlcom + '_ddlOccupation').value = jdata;
    document.getElementById('' + ctrlcom + '_ddlReligion').value = jdata;
    document.getElementById('' + ctrlcom + '_ddlEthnicity').value = jdata;
    document.getElementById('' + ctrlcom + '_ddlNationality').value = jdata;
    document.getElementById('' + ctrlcom + '_ddlPatientType').value = jdata;
    document.getElementById('' + ctrlcom + '_txtSSN').value = jdata;
    document.getElementById('' + ctrlcom + '_ucConsultant__hiddenID').value = jdata;
    document.getElementById('' + ctrlcom + '_ddlquestionary').value = jdata;

    //Company Details
    document.getElementById('' + ctrlcom + '_EmployerInfo1_uctpa__hiddenID').value = jdata;
    document.getElementById('' + ctrlcom + '_EmployerInfo1_ddlrelation').value = jdata;
    document.getElementById('' + ctrlcom + '_EmployerInfo1_txtEmploeeID').value = jdata;
    document.getElementById('' + ctrlcom + '_EmployerInfo1_txtEmployeeName').value = jdata;
    document.getElementById('' + ctrlcom + '_EmployerInfo1_txtDesignation').value = jdata;
    document.getElementById('' + ctrlcom + '_EmployerInfo1_ddlCorpDept').value = jdata;
    document.getElementById('' + ctrlcom + '_EmployerInfo1_txtempgrade').value = jdata;
    document.getElementById('' + ctrlcom + '_EmployerInfo1_ddlCorpBranch').value = jdata;
    document.getElementById('' + ctrlcom + '_EmployerInfo1_txtEmpContactNo').value = jdata;
    document.getElementById('' + ctrlcom + '_EmployerInfo1_txtEmpMRNo').value = jdata;
    document.getElementById('' + ctrlcom + '_EmployerInfo1_txtEmpCardValidity').value = jdata;
    document.getElementById('' + ctrlcom + '_EmployerInfo1_txtcardExpiredt').value = jdata;

    //Contact Details
    document.getElementById('' + ctrlcom + '_Address1_txtMobile1').value = jdata;
    document.getElementById('' + ctrlcom + '_txtMobile3').value = jdata;
    document.getElementById('' + ctrlcom + '_Address1_txtMobile2').value = jdata;
    document.getElementById('' + ctrlcom + '_txtemail').value = jdata;
}


function getaddrDetails() {
    var id = document.getElementById('' + ctrlcom + '_UcFamilyReff__hiddenID').value;
    $.ajax({
        type: "POST",
        url: "YRegistration.aspx/Get_IP_Bill_Details",
        data: "{'id': '" + id + "'}",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        async: false,
        error: function (jqXHR, textStatus, errorThrown) { },
        success: function (JData) {
            document.getElementById('' + ctrlcom + '_Address1_txtAddress1').value = JData.d[0].Address1;
        }
    });

}
function ClosingPatConfPopup() {
    $('[id*=DivPatConformation]')[0].style.display = 'none';
    return false;
}
function onempselection(_d) {
    ClearAddrDtls();
    var reg_type = document.getElementById('' + ctrlcom + '_ddlRegType').value;
    var id = 0;
    if (_d.ID == undefined || _d.ID == null) {
        $('#' + ctrlcom + '_UcStaffName_txtSearchControl').val(_d.RESULT.NAME);
        $('#' + ctrlcom + '_UcStaffName__hiddenID').val(_d.RESULT.ID);
        $('#' + ctrlcom + '_hdnEmpId').val(_d.RESULT.ID);
        $('#' + ctrlcom + '_UcStaffName__hiddenText').val(_d.RESULT.NAME);
        id = _d.RESULT.ID;
    }
    else {
        $('#' + ctrlcom + '_UcStaffName_txtSearchControl').val(_d._lktext);
        $('#' + ctrlcom + '_UcStaffName__hiddenID').val(_d.REFRL_ID);
        $('#' + ctrlcom + '_hdnEmpId').val(_d.ID);
        $('#' + ctrlcom + '_UcStaffName__hiddenText').val(_d._lktext);
        id = _d.ID;
    }
    if (id == null || id == undefined || id == '') { id = 0; }
    if (id != 0) {
        if (reg_type == 6) {
            AssignEmpdetails(id);
            AssignEmpAddrDtls(id);
        } else if (reg_type == 7) {
            AssignEmpAddrDtls(id);
            BindEmpRelation(id);
        }

    }
    OnPageValidation();
    return false;
}
function staffcolorchange() {
    $('#' + ctrlcom + '_ddlTitle').removeClass('red')
    $('#' + ctrlcom + '_txtFirstName').removeClass('red')
    $('#' + ctrlcom + '_txtLastName').removeClass('red')
    $('#' + ctrlcom + '_newAgeUc_txtDob').removeClass('red')
    $('#' + ctrlcom + '_txtResPerson').removeClass('red')
}



function bindEmpData() {
    var staff_id = document.getElementById('' + ctrlcom + '_hdnEmpId').value;
    var rel_id = document.getElementById('' + ctrlcom + '_StaffRelation').value;
    $.ajax({
        type: "POST",
        url: "YRegistration.aspx/GetStaff_Dependent",
        data: "{'staff_id': '" + staff_id + "','rel_id': '" + rel_id + "'}",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        error: function (jqXHR, textStatus, errorThrown) { },
        success: function (data) {
            if (data.d.length > 0) {
                document.getElementById('' + ctrlcom + '_newAgeUc_txtYear').value = data.d[0]["AGE"].split(',')[0];
                document.getElementById('' + ctrlcom + '_txtFirstName').value = data.d[0]["FIRST_NAME"];
                TitleCase(document.getElementById('' + ctrlcom + '_txtFirstName'));
                if (data.d[0]["GENDER"].trim() == "M") {
                    document.getElementById('' + ctrlcom + '_ddlGender').selectedIndex = 1;
                    document.getElementById('' + ctrlcom + '_ddlTitle').selectedIndex = 1;
                }
                else {
                    document.getElementById('' + ctrlcom + '_ddlGender').selectedIndex = 2;
                    document.getElementById('' + ctrlcom + '_ddlTitle').selectedIndex = 2;
                }
                //CalAge();
                SetDisplayName();
            }
        }
    });
}


function TitleCase(oField) {
    if (oField == null) {
        return false;
    }
    var myValue = document.getElementById(oField.id).value;
    var name = '';
    if (myValue != '' && myValue != undefined && myValue != null) {
        var testval = myValue.split(' ');
        for (var i = 0; i < testval.length; i++) {
            if (testval[i] != '') {
                name = name + " " + testval[i];
            }
        }
        myValue = name;
    }
    //document.getElementById(oField.id).value = myValue;
    //document.getElementById(oField.id).value = 
    myValue = myValue.toUpperCase().trim();
    return myValue;
}

var gridControlEmpRel;
function BindEmpRelation(ID) {
    $('#' + ctrlcom + '_lblEmpRelation').text("EMPLOYEE RELATION DETAILS");
    var param = param || {};
    var cName = '';
    var pText = '';
    var count = 0;
    var id = ID;
    param.dataKey = "DEPENDENT_ID";
    param.defaultWSParams = { staff_id: id, rel_id: count };
    param.wsPath = "Private/FrontOffice/OPDBILLNEW.aspx/GetStaff_Dependent_LookUp";
    param.wsFilterPath = "Private/FrontOffice/OPDBILLNEW.aspx/GetStaff_Dependent_LookUp";
    param.template = ["FIRST_NAME*NAME"
                                    , "GENDER*GENDER"
                                    , "AGE*AGE"
                                    , "PATIENT_RELATIONSHIP_NAME*PATIENT_RELATIONSHIP_NAME"
                                    ];
    param.header = [{ col: "NAME", sort: false, filter: true }
                                    , { col: "GENDER", sort: false, filter: true }
                                    , { col: "AGE", sort: false, filter: true }
                                    , { col: "PATIENT RELATIONSHIP NAME", sort: false, filter: true }
                                    ];

    param.enablePaging = false;
    param.enableTrace = false;
    param.enableFilter = false;
    param.enableCheckbox = false;
    param.enableSorting = false;
    param.RowNo = true;
    param.tableTemplate = true;
    param.RowDataBinding = function (rowitem, _data) {
        var obj = $(rowitem);
        if (_data != undefined && _data != null && _data != '')
            $('[id*=pnlEmpGridPop]')[0].style.display = 'block';
        else
            $('[id*=pnlEmpGridPop]')[0].style.display = 'none';
        return obj[0].outerHTML;

    }
    param.rowClick = function (key) {
        OnRelationSelection(key, ID);
    };
    gridControlEmpRel = $("#divEmpRelation").jtable(param);
    return false;
}
function OnRelationSelection(obj, ev) {
    if (obj != null) {
        $('[id*=pnlEmpGridPop]')[0].style.display = 'none';
        $('#' + ctrlcom + '_hdnEmpDepID').val(obj.DEPENDENT_ID);
        dob1 = typeof obj.EmpDOB == "string" ? obj.EmpDOB : '';
        if (dob1 == null) { dob1 = ''; }
        if (dob1 != '' && dob1 != null && dob1 != undefined) {
            var strDob = dob1.split(" ");
            var DOB = strDob[0];
            var DateOfBirth = '';
            if (new Date(DOB).format('dd-MMM-yyyy') == "NaN--NaN") {
                DateOfBirth = DOB.split('-')[0] + '/' + DOB.split('-')[1] + '/' + DOB.split('-')[2];
            }
            else {
                DateOfBirth = (DOB);
            }
            if (document.getElementById('' + ctrlcom + '_hdndobformat').value == "dd-MMM-yyyy") {
                var DOfB = new Date(DateOfBirth).format('dd-MMM-yyyy');
            }
            else {
                var DOfB = new Date(DateOfBirth).format('dd-MM-yyyy');
            }
            $('#' + ctrlcom + '_newAgeUc_txtDob').val(DOfB);
        }
        var age = obj.AGE;
        if (age != null && age != '' && age != undefined) {
            var str = age.split(",");

            if (str[0] != null || str[0] != undefined) {
                var y = str[0].trim();
                y = y.split('(')[0];
            }
            else {
                y = 0;
            }
            if (str[1] != null || str[1] != undefined) {
                var m = str[1].trim();
                m = m.split('(')[0];
            }
            else {
                m = 0;
            }
            if (str[2] != null || str[2] != undefined) {
                var d = str[2].trim();
                d = d.split('(')[0];
            }
            else {
                d = 0;
            }
            $('#' + ctrlcom + '_newAgeUc_txtYear').val(y);
            $('#' + ctrlcom + '_newAgeUc_txtMonths').val(m);
            $('#' + ctrlcom + '_newAgeUc_txtDay').val(d);

            if (new Date(dob1).format('dd-MM-yyyy') == "NaN--NaN") {
                document.getElementById('' + ctrlcom + '_newAgeUc_txtDob').value = '__-__-____';
            } else {
                document.getElementById('' + ctrlcom + '_newAgeUc_txtDob').value = new Date(dob1).format('dd-MM-yyyy');
            }
        }
        //document.getElementById('' + ctrlcom + '_newAgeUc_txtYear').value = (obj.AGE).split(',')[0];
        document.getElementById('' + ctrlcom + '_txtFirstName').value = obj["FIRST_NAME"];
        document.getElementById('' + ctrlcom + '_StaffRelation').value = obj.REL_SHIP_ID
        document.getElementById('' + ctrlcom + '_StaffRelation').disabled = false;
        TitleCase(document.getElementById('' + ctrlcom + '_txtFirstName'));
        if ((obj.GENDER).trim() == "Male") {
            if (y >= 21) {
                document.getElementById('' + ctrlcom + '_ddlGender').selectedIndex = 1;
                document.getElementById('' + ctrlcom + '_ddlTitle').selectedIndex = 1;
            }
            else {
                document.getElementById('' + ctrlcom + '_ddlGender').selectedIndex = 1;
                document.getElementById('' + ctrlcom + '_ddlTitle').selectedIndex = 1;
            }
        }
        else if ((obj.GENDER).trim() == "Female") {
            if (y >= 18) {
                document.getElementById('' + ctrlcom + '_ddlGender').selectedIndex = 2;
                document.getElementById('' + ctrlcom + '_ddlTitle').selectedIndex = 3;
            }
            else {
                document.getElementById('' + ctrlcom + '_ddlGender').selectedIndex = 2;
                document.getElementById('' + ctrlcom + '_ddlTitle').selectedIndex = 3;
            }
        }
        else {
            document.getElementById('' + ctrlcom + '_ddlGender').value = 0;
            document.getElementById('' + ctrlcom + '_ddlTitle').value = 0;
        }
        //CalAge();
        SetDisplayName();
        OnPageValidation();
        CheckCombinationValidations();
    }
    else {
        $('[id*=pnlEmpGridPop]')[0].style.display = 'none';
    }
}
function EnableDisableControls(val) {
    //document.getElementById('' + ctrlcom + '_ddlRegType').disabled = val;
    document.getElementById('' + ctrlcom + '_UcFamilyReff_txtSearchControl').disabled = val;
    if (document.getElementById('' + ctrlcom + '_pre_regi').value != 0) {
        document.getElementById('' + ctrlcom + '_UcAppointmentNo_txtSearchControl').disabled = val;
        document.getElementById('lk_btn_ctl00_ContentPlaceHolder1_UcAppointmentNo').disabled = val;
    }
    document.getElementById('' + ctrlcom + '_pre_regi').disabled = val;
    document.getElementById('lk_btn_ctl00_ContentPlaceHolder1_UcFamilyReff').disabled = val;
    document.getElementById('' + ctrlcom + '_ddlTitle').disabled = val;
    document.getElementById('' + ctrlcom + '_txtFirstName').disabled = val;
    document.getElementById('' + ctrlcom + '_txtMiddleName').disabled = val;
    document.getElementById('' + ctrlcom + '_txtLastName').disabled = val;
    document.getElementById('' + ctrlcom + '_newAgeUc_txtDob').disabled = val;
    document.getElementById('' + ctrlcom + '_newAgeUc_txtYear').disabled = val;
    document.getElementById('' + ctrlcom + '_ddlGender').disabled = val;
    document.getElementById('' + ctrlcom + '_txtDisplayname').disabled = val;
    document.getElementById('' + ctrlcom + '_txtMotherMName').disabled = val;
    document.getElementById('' + ctrlcom + '_txtfathername').disabled = val;
    document.getElementById('' + ctrlcom + '_ddlResPerson').disabled = val;
    document.getElementById('' + ctrlcom + '_txtResPerson').disabled = val;
    document.getElementById('' + ctrlcom + '_ucConsultant_txtSearchControl').disabled = val;
    document.getElementById('lk_btn_ctl00_ContentPlaceHolder1_ucConsultant').disabled = val;
    document.getElementById('' + ctrlcom + '_ddlPatientType').disabled = val;
    document.getElementById('' + ctrlcom + '_txtSSN').disabled = val;
    //    document.getElementById('' + ctrlcom + '_txtPassprotno').disabled = val;
    //    document.getElementById('' + ctrlcom + '_txtIssueDt').disabled = val;
    //    document.getElementById('' + ctrlcom + '_txtExpiryDt').disabled = val;
    //    document.getElementById('' + ctrlcom + '_txtissuedat').disabled = val;
    document.getElementById('' + ctrlcom + '_ucReferal_ddlreferral').disabled = val;
    //document.getElementById('' + ctrlcom + '_ucReferal_ucreferalname_txtSearchControl').disabled = val;
    //document.getElementById('lk_btn_ctl00_ContentPlaceHolder1_ucReferal_ucreferalname').disabled = val;
    document.getElementById('' + ctrlcom + '_newAgeUc_imgCal').disabled = val;
    document.getElementById('' + ctrlcom + '_ddlMaritalStatus').disabled = val;
    document.getElementById('' + ctrlcom + '_ddlBloodGroup').disabled = val;
    document.getElementById('' + ctrlcom + '_ddlOccupation').disabled = val;
    document.getElementById('' + ctrlcom + '_ddlReligion').disabled = val;
    document.getElementById('' + ctrlcom + '_ddlproofid').disabled = val;
    document.getElementById('' + ctrlcom + '_ddlquestionary').disabled = val;
    document.getElementById('' + ctrlcom + '_ddlEthnicity').disabled = val;
    document.getElementById('' + ctrlcom + '_ddlNationality').disabled = val;
    document.getElementById('' + ctrlcom + '_ReceiptControl2_Search3_txtSearchControl').disabled = val;
    document.getElementById('lk_btn_ctl00_ContentPlaceHolder1_ReceiptControl2_Search3').disabled = val;
    EnableDisableAddressControls(val); EnableDisableReferalControls(val); EnableDisablecontactdetails(val);
}
function EnableDisableReferalControls(val) {

    document.getElementById('' + ctrlcom + '_ucReferal_ddlreferral').disabled = val;
    //document.getElementById('' + ctrlcom + '_ucReferal_ucreferalname_txtSearchControl').disabled = val;
    //document.getElementById('' + ctrlcom + '_chkmodeComm_MultiSelectDDL').disabled = val;
    document.getElementById('butnInfo').disabled = val;
}
function EnableDisablecontactdetails(val) {
    document.getElementById('' + ctrlcom + '_Address1_txtMobile1').disabled = val;
    document.getElementById('' + ctrlcom + '_Address1_txtMobile2').disabled = val;
    document.getElementById('' + ctrlcom + '_txtMobile3').disabled = val;
    document.getElementById('' + ctrlcom + '_txtemail').disabled = val;
    document.getElementById('' + ctrlcom + '_chkstopalert').disabled = val;

    document.getElementById('' + ctrlcom + '_Address1_txtNearestPS').disabled = val;
    document.getElementById('' + ctrlcom + '_Address1_chkmodeComm_MultiSelectDDL').disabled = val;
    document.getElementById('' + ctrlcom + '_Address1_txtMobile3').disabled = val;
}
function EnableDisableAddressControls(val) {
    $('#' + ctrlcom + '_Address1_chkSameasPresentAddress')[0].disabled = val;
    $('#' + ctrlcom + '_Address1_chkCopyFromPresentAddress')[0].disabled = val;
    document.getElementById('' + ctrlcom + '_Address1_txtAddress1').disabled = val;
    document.getElementById('' + ctrlcom + '_Address1_txtAddress2').disabled = val;
    document.getElementById('' + ctrlcom + '_Address1_AreaUserControl1_txtSearchControl').disabled = val;
    document.getElementById('' + ctrlcom + '_Address1_txtPin').disabled = val;
    document.getElementById('lk_btn_ctl00_ContentPlaceHolder1_Address1_AreaUserControl1').disabled = val;
    document.getElementById('' + ctrlcom + '_Address1_txtemail').disabled = val;

    document.getElementById('' + ctrlcom + '_Address1_txtNearestPS').disabled = val;
    document.getElementById('' + ctrlcom + '_Address1_chkmodeComm_MultiSelectDDL').disabled = val;
    document.getElementById('' + ctrlcom + '_Address1_txtMobile3').disabled = val;
}
function TabIndexforallFields() {
    //Patient Details

    ctl00_ContentPlaceHolder1_ddlTitle.tabIndex = 1;
    ctl00_ContentPlaceHolder1_txtFirstName.tabIndex = 2;
    ctl00_ContentPlaceHolder1_txtMiddleName.tabIndex = 3;
    ctl00_ContentPlaceHolder1_txtLastName.tabIndex = 4;
    ctl00_ContentPlaceHolder1_newAgeUc_txtDob.tabIndex = 5;
    ctl00_ContentPlaceHolder1_newAgeUc_txtHH.tabIndex = 6;
    ctl00_ContentPlaceHolder1_newAgeUc_txtMM.tabIndex = 7;
    ctl00_ContentPlaceHolder1_newAgeUc_txtYear.tabIndex = 8;
    ctl00_ContentPlaceHolder1_newAgeUc_txtMonths.tabIndex = 9;
    ctl00_ContentPlaceHolder1_newAgeUc_txtDay.tabIndex = 10;
    ctl00_ContentPlaceHolder1_ddlGender.tabIndex = 11;

    ctl00_ContentPlaceHolder1_ucConsultant_txtSearchControl.tabIndex = 12;
    lk_btn_ctl00_ContentPlaceHolder1_ucConsultant.tabIndex = 13;
    ctl00_ContentPlaceHolder1_pre_regi.tabIndex = 14;
    ctl00_ContentPlaceHolder1_chkisold.tabIndex = 15;
    //    var a=document.getElementById('' + ctrlcom + '_chkisold').checked;
    //    a=0;
    //    if (a == 0) {
    //        ctl00_ContentPlaceHolder1_ucUMRno_txtSearchControl.tabIndex = 16;
    //        lk_btn_ctl00_ContentPlaceHolder1_ucUMRno.tabIndex = 17;
    //    } else {
    //        alert("hai");
    //        return false;
    //    }
    ctl00_ContentPlaceHolder1_txtumrno.tabIndex = 16;
    ctl00_ContentPlaceHolder1_rbt_pat_type_0.tabIndex = 17;
    ctl00_ContentPlaceHolder1_rbt_pat_type_1.tabIndex = 18;
    if (document.getElementById('' + ctrlcom + '_rbt_pat_type_1').checked == true) {
        ctl00_ContentPlaceHolder1_dd_reg_source.tabIndex = 18;
    }

    ctl00_ContentPlaceHolder1_ddlRegType.tabIndex = 19;
    ctl00_ContentPlaceHolder1_UcFamilyReff_txtSearchControl.tabIndex = 20;
    lk_btn_ctl00_ContentPlaceHolder1_UcFamilyReff.tabIndex = 21;
    ctl00_ContentPlaceHolder1_ucReferal_ddlreferral.tabIndex = 22;

    //refferal
    butnInfo.tabIndex = 22;
    ctl00_ContentPlaceHolder1_ucReferal_ucrfrlsrc_txtSearchControl.tabIndex = 23;
    lk_btn_ctl00_ContentPlaceHolder1_ucReferal_ucrfrlsrc.tabIndex = 24;
    ctl00_ContentPlaceHolder1_ucReferal_ucReferedto_txtSearchControl.tabIndex = 25;
    lk_btn_ctl00_ContentPlaceHolder1_ucReferal_ucReferedto.tabIndex = 26;

    ctl00_ContentPlaceHolder1_ucReferal_chkSMS.tabIndex = 27;
    ctl00_ContentPlaceHolder1_ucReferal_chkLeter.tabIndex = 28;
    ctl00_ContentPlaceHolder1_ucReferal_txtremarks.tabIndex = 29;


    //Addres
    ctl00_ContentPlaceHolder1_Address1_chkDND.tabIndex = 30;
    ctl00_ContentPlaceHolder1_ChkMlcStatus.tabIndex = 31;
    ctl00_ContentPlaceHolder1_chkIsSenior.tabIndex = 32;
    ctl00_ContentPlaceHolder1_chkhccrd.tabIndex = 33;

    ctl00_ContentPlaceHolder1_Address1_txtMobile1.tabIndex = 34;
    ctl00_ContentPlaceHolder1_Address1_txtMobile2.tabIndex = 35;
    ctl00_ContentPlaceHolder1_Address1_txtemail.tabIndex = 36;
    ctl00_ContentPlaceHolder1_Address1_txtAddress1.tabIndex = 37;
    ctl00_ContentPlaceHolder1_Address1_AreaUserControl1_txtSearchControl.tabIndex = 38;
    lk_btn_ctl00_ContentPlaceHolder1_Address1_AreaUserControl1.tabIndex = 39;
    ctl00_ContentPlaceHolder1_Address1_txtPin.tabIndex = 40;

    ctl00_ContentPlaceHolder1_UCServices_rbtnSrvsAndCons_0.tabIndex = 41;
    ctl00_ContentPlaceHolder1_UCServices_rbtnSrvsAndCons_1.tabIndex = 42;
    ctl00_ContentPlaceHolder1_UCServices_gv_services_header_ctl03_txtServiceName.tabIndex = 43;
    ctl00_ContentPlaceHolder1_UCServices_gv_services_header_ctl03_ddlSlotTiming.tabIndex = 44;
    ctl00_ContentPlaceHolder1_UCServices_gv_services_header_ctl03_ddlSlotTiming.tabIndex = 45;
    ctl00_ContentPlaceHolder1_UCServices_gv_services_header_ctl03_txtremks.tabIndex = 46;
    ddlSlotTiming1.tabIndex = 47;
    txtremks1.tabIndex = 48;
    ctl00_ContentPlaceHolder1_ReceiptControl2_txtcashAmt.tabIndex = 49;
    ctl00_ContentPlaceHolder1_ReceiptControl2_txtquickremarks.tabIndex = 50;
    ////    ctl00_ContentPlaceHolder1_txtMotherMName.tabIndex = 12;
    //    ctl00_ContentPlaceHolder1_ddlResPerson.tabIndex = 13;
    //    ctl00_ContentPlaceHolder1_txtResPerson.tabIndex = 14;
    //    ctl00_ContentPlaceHolder1_ddlMaritalStatus.tabIndex = 15;
    //    ctl00_ContentPlaceHolder1_ddlBloodGroup.tabIndex = 16;
    //    ctl00_ContentPlaceHolder1_ddlOccupation.tabIndex = 17;
    //    ctl00_ContentPlaceHolder1_ddlReligion.tabIndex = 18;
    //    ctl00_ContentPlaceHolder1_ddlEthnicity.tabIndex = 19;
    //    ctl00_ContentPlaceHolder1_ddlNationality.tabIndex = 20;
    //    ctl00_ContentPlaceHolder1_ddlPatientType.tabIndex = 21;
    //    ctl00_ContentPlaceHolder1_ddlproofid.tabIndex = 22;
    //    ctl00_ContentPlaceHolder1_txtSSN.tabIndex = 23;
    //    ctl00_ContentPlaceHolder1_ucConsultant_txtSearchControl.tabIndex = 24;
    //    ctl00_ContentPlaceHolder1_ddlquestionary.tabIndex = 25;
    //    ctl00_ContentPlaceHolder1_txtPassprotno.tabIndex = 26;
    //    ctl00_ContentPlaceHolder1_txtIssueDt.tabIndex = 27;
    //    ctl00_ContentPlaceHolder1_txtExpiryDt.tabIndex = 28;
    //    ctl00_ContentPlaceHolder1_txtissuedat.tabIndex = 29;


    //Referral
    // ctl00_ContentPlaceHolder1_ucReferal_ddlreferral.tabIndex = 30;
    /*Added by Ittadi Ashok*/
    //    butnInfo.tabIndex=31
    //    ctl00_ContentPlaceHolder1_ucReferal_ucrfrlsrc_txtSearchControl.tabIndex = 32;
    //    lk_btn_ctl00_ContentPlaceHolder1_ucReferal_ucrfrlsrc.tabIndex = 33;
    //    ctl00_ContentPlaceHolder1_ucReferal_ucReferedto_txtSearchControl.tabIndex = 34;
    //    lk_btn_ctl00_ContentPlaceHolder1_ucReferal_ucReferedto.tabIndex = 35;
    /*Ended by Ittadi Ashok*/


    //    ctl00_ContentPlaceHolder1_ucReferal_ucreferalname_txtSearchControl.tabIndex = 31;
    //    //Address
    //    ctl00_ContentPlaceHolder1_Address1_txtAddress1.tabIndex = 32;
    //    ctl00_ContentPlaceHolder1_Address1_txtAddress2.tabIndex = 33;
    //    ctl00_ContentPlaceHolder1_Address1_AreaUserControl1_txtSearchControl.tabIndex = 34;
    //    ctl00_ContentPlaceHolder1_Address1_txtPin.tabIndex = 35;
    //    //Contact Details
    //    ctl00_ContentPlaceHolder1_Address1_txtMobile1.tabIndex = 36;
    //    ctl00_ContentPlaceHolder1_txtMobile3.tabIndex = 37;
    //    ctl00_ContentPlaceHolder1_Address1_txtMobile2.tabIndex = 38;
    //    ctl00_ContentPlaceHolder1_txtemail.tabIndex = 39;
    //    ctl00_ContentPlaceHolder1_chkmodeComm_MultiSelectDDL.tabIndex = 40;
    //    //Corporate
    //    ctl00_ContentPlaceHolder1_EmployerInfo1_uctpa_txtSearchControl.tabIndex = 41;
    //    ctl00_ContentPlaceHolder1_EmployerInfo1_EmployerControl1_txtSearchControl.tabIndex = 42;
    //    ctl00_ContentPlaceHolder1_EmployerInfo1_ddlrelation.tabIndex = 43;
    //    ctl00_ContentPlaceHolder1_EmployerInfo1_txtEmploeeID.tabIndex = 44;
    //    ctl00_ContentPlaceHolder1_EmployerInfo1_txtEmployeeName.tabIndex = 45;
    //    ctl00_ContentPlaceHolder1_EmployerInfo1_txtDesignation.tabIndex = 46;
    //    ctl00_ContentPlaceHolder1_EmployerInfo1_txtDept.tabIndex = 47;
    //    ctl00_ContentPlaceHolder1_EmployerInfo1_txtempgrade.tabIndex = 48;
    //    ctl00_ContentPlaceHolder1_EmployerInfo1_txtBranch.tabIndex = 49;
    //    ctl00_ContentPlaceHolder1_EmployerInfo1_txtEmpContactNo.tabIndex = 50;
    //    ctl00_ContentPlaceHolder1_EmployerInfo1_txtEmpMRNo.tabIndex = 51;
    //    ctl00_ContentPlaceHolder1_EmployerInfo1_txtdateofissue.tabIndex = 52;
    //    ctl00_ContentPlaceHolder1_EmployerInfo1_txtEmpCardValidity.tabIndex = 53;
    //    ctl00_ContentPlaceHolder1_EmployerInfo1_txtemployername.tabIndex = 54;
    //    ctl00_ContentPlaceHolder1_EmployerInfo1_txtrefletter.tabIndex = 55;
    //    ctl00_ContentPlaceHolder1_EmployerInfo1_txtrefissuedt.tabIndex = 56;
    //    ctl00_ContentPlaceHolder1_EmployerInfo1_txtletterissuedby.tabIndex = 57;
    //    ctl00_ContentPlaceHolder1_EmployerInfo1_txtlettervalidity.tabIndex = 58;
    //    ctl00_ContentPlaceHolder1_EmployerInfo1_txtcreditlimitamt.tabIndex = 59;
    //    //Payment Control
    //    ctl00_ContentPlaceHolder1_ReceiptControl2_txtcashAmt.tabIndex = 60;
    //    ctl00_ContentPlaceHolder1_ReceiptControl2_txtCardAmt.tabIndex = 61;
    //    ctl00_ContentPlaceHolder1_ReceiptControl2_txtcardNoCmp.tabIndex = 62;
    //    ctl00_ContentPlaceHolder1_ReceiptControl2_ddcardType.tabIndex = 63;
    //    ctl00_ContentPlaceHolder1_ReceiptControl2_ddlcrdtype.tabIndex = 64;
    //    ctl00_ContentPlaceHolder1_ReceiptControl2_ddbankName.tabIndex = 65;
    //    ctl00_ContentPlaceHolder1_ReceiptControl2_txtcardExpiredt.tabIndex = 66;
    //    ctl00_ContentPlaceHolder1_ReceiptControl2_txtcardAuther.tabIndex = 67;
}
function checkpassportissueDt(obj) {
    if (obj.value != '') {
        obj.style.border = '1px solid rgb(190, 190, 190)';
    }
}
function checkpassportexpiryDt(obj) {
    if (obj.value != '') {
        obj.style.border = '1px solid rgb(190, 190, 190)';
    }
}
function onchangeNeBorn() {
    var _chkNewborn = document.getElementById('' + ctrlcom + '_ChkNBorn');
    var _genderid = 0;
    if ($('#' + ctrlcom + '_EmployerInfo1_ddlrelation').find('option:selected').text() == "Self" && _chkNewborn.checked == true) {
        $(".stoast").toastText("info", "Shouldn't be Selected 'NewBorn Baby' as Employee", 5, 2);
        document.getElementById('' + ctrlcom + '_EmployerInfo1_txtEmployeeName').value = '';
        $('#' + ctrlcom + '_EmployerInfo1_ddlrelation').val(0);
        return false;
    }
    else {
        if (_chkNewborn.checked == true) {
            _genderid = '2';
            document.getElementById('' + ctrlcom + '_newAgeUc_imgCal').style.display = 'block';
            document.getElementById('pediatric').style.display = 'block';
            document.getElementById('YYMMDD').style.display = 'none';
            document.getElementById('' + ctrlcom + '_newAgeUc_txtDob').value = new Date().format('dd-MMM-yyyy');
            $('#' + ctrlcom + '_newAgeUc_imgCal').removeClass('red');
            document.getElementById('' + ctrlcom + '_newAgeUc_txtHH').value = new Date().getHours();
            document.getElementById('' + ctrlcom + '_newAgeUc_txtMM').value = new Date().getMinutes();
            document.getElementById('' + ctrlcom + '_newAgeUc_txtYear').value = '';
            document.getElementById('' + ctrlcom + '_newAgeUc_txtMonths').value = '';
            document.getElementById('' + ctrlcom + '_newAgeUc_txtDay').value = '';
            SelectGender1('');
            document.getElementById('' + ctrlcom + '_lblFamilyRef').innerHTML = 'Mother Umr#';
            document.getElementById('' + ctrlcom + '_lblFamilyRef1').innerHTML = 'Mother Umr#';
            document.getElementById('' + ctrlcom + '_chkisold').disabled = true;
            document.getElementById('' + ctrlcom + '_chkisold').disabled = true;
            document.getElementById('' + ctrlcom + '_ddlMaritalStatus').disabled = true;
            document.getElementById('' + ctrlcom + '_ddlOccupation').value = '0';
            document.getElementById('' + ctrlcom + '_ddlOccupation').disabled = true;
            document.getElementById('ctl00_ContentPlaceHolder1_newAgeUc_txtDob').disabled = true;
            document.getElementById('ctl00_ContentPlaceHolder1_newAgeUc_imgCal').disabled = true;

        }
        else {
            document.getElementById('' + ctrlcom + '_newAgeUc_imgCal').style.display = 'block';
            document.getElementById('pediatric').style.display = 'none';
            document.getElementById('YYMMDD').style.display = 'block';
            document.getElementById('' + ctrlcom + '_lblFamilyRef').innerHTML = 'Family Reff.#';
            document.getElementById('' + ctrlcom + '_lblFamilyRef1').innerHTML = 'Family Reff.#';
            //document.getElementById('' + ctrlcom + '_chkisold').disabled = false;
            document.getElementById('' + ctrlcom + '_ddlMaritalStatus').disabled = false;
            document.getElementById('' + ctrlcom + '_ddlOccupation').value = '0';
            document.getElementById('' + ctrlcom + '_ddlOccupation').disabled = false;
            document.getElementById('ctl00_ContentPlaceHolder1_newAgeUc_txtDob').disabled = false;
            document.getElementById('ctl00_ContentPlaceHolder1_newAgeUc_txtDob').value = "__-__-____";
            document.getElementById('ctl00_ContentPlaceHolder1_newAgeUc_imgCal').disabled = false;
        }
        var _con = $('input[id*=radiousertran]:checked').val();

        if (_con == 0 || _con == null || _con == undefined) { _con = 1; }
        document.getElementById('ctl00_ContentPlaceHolder1_UcFamilyReff_hdn_preCond').value = "^" + _con + "^" + _genderid;
        //        GetAsync(
        //                  "Private/FrontOffice/YRegistration.aspx/OnReferncePreCondition",
        //                  { Gender_ID: _genderid, con: _con },
        //                  function (JData) {
        //                  },
        //                  function (jqXHR, textStatus, errorThrown) {
        //                      $(".stoast").toastText("warning", errorThrown, 5, 3);
        //                  });

    }
}
function OnEmrgncy(id) {
    if ($('#' + ctrlcom + '_ddlRegType').val() != 5) {
        OnNullValue(id);
    }
}
/****ypatientRegistration.js ends***/

function OnColorChanges() {
    var _chkValidation = true;
    var _ctrls = new Array();
    _ctrls[0] = 'ctl00_ContentPlaceHolder1_txtFirstName';
    _ctrls[1] = 'ctl00_ContentPlaceHolder1_ddlTitle';
    _ctrls[2] = 'ctl00_ContentPlaceHolder1_ddlResPerson';
    _ctrls[3] = 'ctl00_ContentPlaceHolder1_txtResPerson';
    if (document.getElementById('' + ctrlcom + '_hdnRefReq').value == 'Yes') {
        _ctrls[4] = 'ctl00_ContentPlaceHolder1_ddlreferral';
        if (document.getElementById('' + ctrlcom + '_ucReferal_ddlreferral').value != '1') {
            _ctrls[5] = 'ctl00_ContentPlaceHolder1_ucReferal_ucreferalname_txtSearchControl';
        }
        else {
            $('#' + ctrlcom + '_ucReferal_ucreferalname_txtSearchControl').removeClass('red');
        }
    }
    _ctrls[6] = 'ctl00_ContentPlaceHolder1_newAgeUc_txtDob';

    _ctrls[12] = 'ctl00_ContentPlaceHolder1_newAgeUc_txtDob';

    if (document.getElementById('' + ctrlcom + '_EmployerInfo1_uctpa_txtSearchControl').value != '') {
        _ctrls[16] = 'ctl00_ContentPlaceHolder1_EmployerInfo1_uctpa_txtSearchControl';
        _ctrls[17] = 'ctl00_ContentPlaceHolder1_EmployerInfo1_txtEmploeeID';
        _ctrls[18] = 'ctl00_ContentPlaceHolder1_EmployerInfo1_txtEmployeeName';
        _ctrls[19] = 'ctl00_ContentPlaceHolder1_EmployerInfo1_txtEmpMRNo';
        _ctrls[20] = 'ctl00_ContentPlaceHolder1_EmployerInfo1_txtEmpCardValidity';

    }
    if (document.getElementById('' + ctrlcom + '_pre_regi').value != 5 && document.getElementById('' + ctrlcom + '_hdndtrmandatary').value == 'YES') {
        _ctrls[27] = 'ctl00_ContentPlaceHolder1_ucConsultant_txtSearchControl';
    }
    _ctrls[28] = 'ctl00_ContentPlaceHolder1_Address1_txtMobile1';
    _ctrls[29] = 'ctl00_ContentPlaceHolder1_Address1_AreaUserControl1_txtSearchControl';
    _ctrls[30] = 'ctl00_ContentPlaceHolder1_ddlNationality';
    _ctrls[31] = 'ctl00_ContentPlaceHolder1_ddlPatientType';
    _ctrls[32] = 'ctl00_ContentPlaceHolder1_txtLastName';
    _ctrls[33] = 'ctl00_ContentPlaceHolder1_Address1_AreaUserControl1_txtSearchControl';
    _ctrls[34] = 'ctl00_ContentPlaceHolder1_EmployerInfo1_uctpa_txtSearchControl';
    _ctrls[35] = 'ctl00_ContentPlaceHolder1_EmployerInfo1_txtEmploeeID';
    _ctrls[36] = 'ctl00_ContentPlaceHolder1_EmployerInfo1_txtEmployeeName';
    _ctrls[37] = 'ctl00_ContentPlaceHolder1_EmployerInfo1_txtEmpMRNo';
    _ctrls[38] = 'ctl00_ContentPlaceHolder1_EmployerInfo1_txtEmpCardValidity';
    _ctrls[39] = 'ctl00_ContentPlaceHolder1_EmployerInfo1_ddlrelation';
    if (document.getElementById('' + ctrlcom + '_hdnRefReq').value == 'Yes') {
        _ctrls[40] = 'ctl00_ContentPlaceHolder1_ucReferal_ddlreferral';
        if (document.getElementById('' + ctrlcom + '_ucReferal_ddlreferral').value != '1') {
            _ctrls[41] = 'ctl00_ContentPlaceHolder1_ucReferal_ucreferalname_txtSearchControl';
        }
        else {
            $('#' + ctrlcom + '_ucReferal_ucreferalname_txtSearchControl').removeClass('red');
        }
    }
    if (document.getElementById('' + ctrlcom + '_rbt_pat_type_1').checked || document.getElementById('' + ctrlcom + '_rbt_pat_type_2').checked) {
        _ctrls[42] = 'ctl00_ContentPlaceHolder1_dd_reg_source';
        _ctrls[43] = 'ctl00_ContentPlaceHolder1_source_remarks';
    }
    for (var i = 0; i < _ctrls.length; i++) {

        var ctrl = document.getElementById(_ctrls[i]);
        //$(ctrl).css('border', '1px solid #bebebe')
        $('#' + _ctrls[i]).removeClass('red');


    }
}
function AssignServicesGrid2() {
    var _RegSrv = RegSrv;
    $("table[id$=UCServices_gvServices] tr:has(td)").each(function (e) {
        if (document.getElementById('' + ctrlcom + '_UCServices_gvServices').rows.length > 2) {
            var docid = $(this).closest('tr').find('input[type=text][id*=txtServiceCode]').val();
            if (_RegSrv == docid) {
                $(this).closest('tr').remove();
                arrServiceIds = $.grep(arrServiceIds, function (value) {
                    return value != docid;
                });
            }
        }
    });
    AssignSno(0);
    return false;
}

function OpConClear() {
    ClearPatientBanerControl(); /* Clear Patient Banner */
    clearRefDtls(); /* Clear Referral Details  */
    //clearpopupcontrols(); /*Quick Add New Referal */
    ctl00_ContentPlaceHolder1_ucReferal_DivReferal.style.display = 'none';
    ClearOPDCmpDtls(); /* company dtls clearing */
    $("table[id$=tbl_PatRequisitions]").each(function (i, j) { $(this).remove(); });
    clearOPDGridFields(); /* Clear Grid View */
    ClearOPDClinicalSummary(); /* Clear History Types */
    ClearOPDTransactionUserControl(); /* Clear Transactions */

    return false;
}
/* Clearing Company Details */
function ClearOPDCmpDtls() {
    $('#' + ctrlcom + '_uccorporate_CmpLookup_txtSearchControl').val('');
    $('#' + ctrlcom + '_uccorporate_CmpLookup__hiddenID').val('0');
    $('#' + ctrlcom + '_uccorporate_CmpLookup__hiddenText').val('');
    $('#' + ctrlcom + '_uccorporate_txtMedcard').val('');
    $('#' + ctrlcom + '_uccorporate_txtEmpCd').val('');
    $('#' + ctrlcom + '_uccorporate_txtEmpName').val('');
    $('#' + ctrlcom + '_uccorporate_txtRefLetIssuedby').val('');
    $('#' + ctrlcom + '_uccorporate_txtRefLetIssueDt').val('');
    $('#' + ctrlcom + '_uccorporate_txtRefLetValidDt').val('');
    $('#' + ctrlcom + '_uccorporate_ucRefLetterNo_txtSearchControl').val('');
    $('#' + ctrlcom + '_uccorporate_ucRefLetterNo__hiddenID').val('0');
    $('#' + ctrlcom + '_uccorporate_ucRefLetterNo__hiddenText').val('');
    $('#' + ctrlcom + '_uccorporate_txtcreditlimitamt').val('0');
    document.getElementById('' + ctrlcom + '_uccorporate_chkRefLetReq').checked = false;
    document.getElementById('' + ctrlcom + '_uccorporate_chkEmpDue').checked = false;
}
function clearOPDGridFields() {
    arrServiceIds = new Array();
    arrIndents = new Array();
    /* Org And Emp Percent  */
    $('#' + ctrlcom + '_txtCorpPayAmt').val('0');
    $('#' + ctrlcom + '_txtCorpDueAmt').val('0');
    $('#' + ctrlcom + '_txtEmpPayAmt').val('0');
    $('#' + ctrlcom + '_txtCorpPercentage').val('0');
    $('#' + ctrlcom + '_txtEmpPercentage').val('0');
    $('#' + ctrlcom + '_txtOrgTaxAmt').val('0');
    $('#' + ctrlcom + '_txtEmpTaxAmt').val('0');

    var gridID = document.getElementById('' + ctrlcom + '_UCServices_gvServices');
    $("table[id$=UCServices_gvServices] tr:has(td)").each(function () {
        var rowIndex = gridID.rows.length;
        for (var i = 0; i < rowIndex; i++) {
            $('[id$=UCServices_gvServices] tr').closest('tr').remove();
        }
    });
    $("table[id$=tbl_Hisdetails]").each(function (i, j) { $(this).remove(); });
    $('[id$=tbl_Hisdetails]').hide(); /* Bill Wise History */

    $("table[id$=divSrvsCons]").each(function (i, j) { $(this).remove(); });
    $('[id$=divSrvsCons]').hide(); /* Services Lookup */

    $("table[id$=divPackageConsultations]").each(function (i, j) { $(this).remove(); });
    $('[id$=divPackageConsultations]').hide(); /* Package Doctors For Same Department Doctors Lookup */
    document.getElementById('' + ctrlcom + '_UCServices_lblprereqhistory').innerHTML = '';
    document.getElementById('' + ctrlcom + '_UCServices_lblhistorycol').innerHTML = '';

    $("table[id$=tbl_Hisdetails]").each(function (i, j) { $(this).remove(); });
    $('[id$=tbl_Hisdetails]').hide();
    DivCorporate.style.display = 'none'
    $('#' + ctrlcom + '_UCServices_ddlPatientType').val('1');
    $('#' + ctrlcom + '_UCServices_ucbillno_txtSearchControl').val('');
    $('#' + ctrlcom + '_UCServices_ucbillno__hiddenText').val('');
    $('#' + ctrlcom + '_UCServices_ucbillno__hiddenID').val('0');


}
function ClearOPDClinicalSummary() {/* History Types */
    document.getElementById('' + ctrlcom + '_UCServices_ddlmeditation').value = '0';
    document.getElementById('' + ctrlcom + '_UCServices_txtDosage').value = '0';
    document.getElementById('' + ctrlcom + '_UCServices_chkDosgeTaken').checked = false;
    document.getElementById('' + ctrlcom + '_UCServices_txtOthrMedicText').value = '';
    document.getElementById('' + ctrlcom + '_UCServices_lblhisttype').innerHTML = '';
    document.getElementById('' + ctrlcom + '_UCServices_ddlclinical').value = '0';
    document.getElementById('' + ctrlcom + '_UCServices_txtLmpCalander').value = '';

}
function ClearOPDTransactionUserControl() {
    /*Total Gross Amounts*/
    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatgross').value = '0';
    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtparygross').value = '0';
    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtgrosstotal').value = '0';
    document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlDiscountType').value = '0';
    /*Total Due Amount */
    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtdueamt').value = '0';
    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatdue').value = '0';
    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtcmpDue').value = '0'
    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtTotalDue').value = '0';
    document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlDiscountType').value = '0';
    /*Advanced Disc Types */
    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatdis').value = '0';
    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpartydis').value = '0';
    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatgrossamt').value = '0';
    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpartygrossamt').value = '0';
    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtgrossamttotal').value = '0';
    /*Net Amounts */
    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatNet').value = '0';
    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtcmpNet').value = '0';
    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtTotalNet').value = '0';
    document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnNetAmt').value = '0';
    document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnDueAmt').value = '0';
    $('#' + ctrlcom + '_ReceiptControl2_Search3_txtSearchControl').val('');
    $('#' + ctrlcom + '_ReceiptControl2_Search3__hiddenID').val('0');
    $('#' + ctrlcom + '_ReceiptControl2_Search3__hiddenText').val('');
    document.getElementById('' + ctrlcom + '_ReceiptControl2_chkismultiple').checked = false;
    /*Remarks */
    $('#' + ctrlcom + '_ReceiptControl2_txtquickremarks').val('');
    $('#' + ctrlcom + '_ReceiptControl2_txtRemarks').val('');
    $('#' + ctrlcom + '_ReceiptControl2_hdnPayAmt').val('0');
    $('#' + ctrlcom + '_ReceiptControl2_txtreceiptAmount').val('0');
    $('#' + ctrlcom + '_ReceiptControl2_txtDueamount').val('0');
    $("table[id$=ctl00_ContentPlaceHolder1_ReceiptControl2_gvReceiptDetails] tr:gt(1)").each(function (i, j) { $(this).remove(); });
    $("#lblquick").addClass("select");
    $("#lbladvanced").removeClass("select");
    $(".col-hide tr:nth-child(3),.col-hide tr:nth-child(4),.col-hide tr:nth-child(5),.col-hide tr:nth-child(6),.col-hide tr:nth-child(7),.col-hide tr:nth-child(8),.col-hide tr:nth-child(10),.col-hide tr:nth-child(13),.col-hide tr:nth-child(14),.col-hide tr:nth-child(15)").hide();
    $("#payitem1,._quick-div").show();
    $("._mdisc").css('width', '72%');
    $("#payitem2,#payitem3").hide();
    $("#lblquick").addClass("select");
    $("#lbladvanced,#lblmdis").removeClass("select");
}



function OnTpaSelection(_d) {
    var isold = document.getElementById('chkold').checked;
    if (_d.ID > 0) {
        if (_d.RESULT.ListObjVal[0].CMP_EXP_STS == "Y") {
            $("#" + ctrlcom + "_EmployerInfo1_uctpa_txtSearchControl").val('');
            $("#" + ctrlcom + "_EmployerInfo1_uctpa__hiddenText").val('');
            $("#" + ctrlcom + "_EmployerInfo1_uctpa__hiddenID").val(0);
            $('#' + ctrlcom + '_EmployerInfo1_uctpa_txtSearchControl').removeClass('red');
            $(".stoast").toastText("warning", "This Company/TPA is Expired.Please Contact Administrator!", 5, 3);
            return false;
        }
        if (_d.RESULT.ListObjVal[0].TARIFF_CONFIGURATION_OP == "N") {
            $("#" + ctrlcom + "_EmployerInfo1_uctpa_txtSearchControl").val('');
            $("#" + ctrlcom + "_EmployerInfo1_uctpa__hiddenText").val('');
            $("#" + ctrlcom + "_EmployerInfo1_uctpa__hiddenID").val(0);
            $(".stoast").toastText("warning", "This Company/TPA has no Tariff Configuration.Please Contact Administrator!", 5, 3);
            return false;
        }
        if (isold == true) {
            if (document.getElementById('' + ctrlcom + '_EmployerInfo1_hdntpaid').value == _d.RESULT.ListObjVal[0].COMPANY_ID) {
                $("#" + ctrlcom + "_EmployerInfo1_uctpa_txtSearchControl").val('');
                $("#" + ctrlcom + "_EmployerInfo1_uctpa__hiddenText").val('');
                $("#" + ctrlcom + "_EmployerInfo1_uctpa__hiddenID").val(0);
                $('#' + ctrlcom + '_EmployerInfo1_uctpa_txtSearchControl').removeClass('red');
                $(".stoast").toastText("Info", "Already Patient is registered in this company", 7, 2);
                return false;
            }
            // $("#" + ctrlcom + "_EmployerInfo1_txtCmpFee").val(0);
            $("#" + ctrlcom + "_txtCmpFee").val(0);
            $("#" + ctrlcom + "_txtregfee").val(0);
            ($('#' + ctrlcom + '_hdnregfee').val(0));
            document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnPayAmt').value = 0;
            document.getElementById('' + ctrlcom + '_hdnCorpRegFee').value = 0;
        } else {
            _d.RESULT.ListObjVal[0].COMPANY_FEE = _d.RESULT.ListObjVal[0].COMPANY_FEE == '' || undefined || null ? '0' : _d.RESULT.ListObjVal[0].COMPANY_FEE;
            if (document.getElementById('' + ctrlcom + '_chkreg_not_req').checked == true) { /* reg fee latter checkbox checked*/
                // $("#" + ctrlcom + "_EmployerInfo1_txtCmpFee").val(0);
                $("#" + ctrlcom + "_txtCmpFee").val(0);
                ($('#' + ctrlcom + '_hdnregfee').val(0));
                document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnPayAmt').value = 0;
                document.getElementById('' + ctrlcom + '_hdnCorpRegFee').value = 0;
            }
            else {
                //$("#" + ctrlcom + "_EmployerInfo1_txtCmpFee").val(_d.RESULT.ListObjVal[0].COMPANY_FEE);
                $("#" + ctrlcom + "_txtCmpFee").val(_d.RESULT.ListObjVal[0].COMPANY_FEE);
                ($('#' + ctrlcom + '_hdnregfee').val(_d.RESULT.ListObjVal[0].COMPANY_FEE));
                document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnPayAmt').value = _d.RESULT.ListObjVal[0].COMPANY_FEE;
                document.getElementById('' + ctrlcom + '_hdnCorpRegFee').value = _d.RESULT.ListObjVal[0].COMPANY_FEE;
            }

            $("#" + ctrlcom + "_txtregfee").val(_d.RESULT.ListObjVal[0].COMPANY_FEE);

        }
        $('#' + ctrlcom + '_hdnrefletterreq').val(_d.RESULT.ListObjVal[0].IS_LETTER_REQUIRED);
        $("#" + ctrlcom + "_EmployerInfo1_uctpa_txtSearchControl").val(_d.RESULT.ListObjVal[0].COMPANY_NAME);
        $("#" + ctrlcom + "_EmployerInfo1_uctpa__hiddenText").val(_d.RESULT.ListObjVal[0].COMPANY_NAME);
        $("#" + ctrlcom + "_EmployerInfo1_uctpa__hiddenID").val(_d.RESULT.ListObjVal[0].COMPANY_ID);
        $('#' + ctrlcom + '_EmployerInfo1_uctpa_txtSearchControl').removeClass('red');
        $("#" + ctrlcom + "_hdnCompanyID").val(_d.RESULT.ListObjVal[0].COMPANY_ID);
        // $("#" + ctrlcom + "_EmployerInfo1_lblCmpCode").val(_d.RESULT.ListObjVal[0].COMANY_CD);
        $('#' + ctrlcom + '_ReceiptControl2_txtpatgross').val($('#' + ctrlcom + '_hdnregfee').val());
        $('#' + ctrlcom + '_ReceiptControl2_txtpatdue').val($('#' + ctrlcom + '_hdnregfee').val());
        $('#' + ctrlcom + '_ReceiptControl2_txtDueamount').val($('#' + ctrlcom + '_hdnregfee').val());
        $('#' + ctrlcom + '_ReceiptControl2_hdnNetAmt').val($('#' + ctrlcom + '_hdnregfee').val());
        $('#' + ctrlcom + '_ReceiptControl2_txtpatNet').val($('#' + ctrlcom + '_hdnregfee').val());
        $('#' + ctrlcom + '_ReceiptControl2_txtgrosstotal').val($('#' + ctrlcom + '_hdnregfee').val());
        $('#' + ctrlcom + '_ReceiptControl2_txtTotalNet').val($('#' + ctrlcom + '_hdnregfee').val());
        $('#' + ctrlcom + '_ReceiptControl2_txtTotalDue').val($('#' + ctrlcom + '_hdnregfee').val());
        ($('#' + ctrlcom + '_hdnrefvaliddays').val(_d.RESULT.ListObjVal[0].VAL_NO_OF_DAYS));
        if (isold != true) {
            if (_d.RESULT.ListObjVal[0].COMPANY_FEE > 0) {
                $('#' + ctrlcom + '_ReceiptControl2_Search3_txtSearchControl').addClass('red');
                document.getElementById('' + ctrlcom + '_ReceiptControl2_Search3_txtSearchControl').disabled = false;
                document.getElementById('lk_btn_ctl00_ContentPlaceHolder1_ReceiptControl2_Search3').disabled = false;
            } else {
                $('#' + ctrlcom + '_ReceiptControl2_Search3_txtSearchControl').removeClass('red');
                document.getElementById('' + ctrlcom + '_ReceiptControl2_Search3_txtSearchControl').disabled = true;
                document.getElementById('lk_btn_ctl00_ContentPlaceHolder1_ReceiptControl2_Search3').disabled = true;
            }
        }
        _d = _d.RESULT.ListObjVal[0];
    } else {
        if (_d.CMP_EXP_STS == "Y") {
            $("#" + ctrlcom + "_EmployerInfo1_uctpa_txtSearchControl").val('');
            $("#" + ctrlcom + "_EmployerInfo1_uctpa__hiddenText").val('');
            $("#" + ctrlcom + "_EmployerInfo1_uctpa__hiddenID").val(0);
            $('#' + ctrlcom + '_EmployerInfo1_uctpa_txtSearchControl').removeClass('red');
            $(".stoast").toastText("warning", "This Company/TPA is Expired.Please Contact Administrator!", 5, 3);
            return false;
        }
        if (_d.TARIFF_CONFIGURATION_OP == "N") {
            $("#" + ctrlcom + "_EmployerInfo1_uctpa_txtSearchControl").val('');
            $("#" + ctrlcom + "_EmployerInfo1_uctpa__hiddenText").val('');
            $("#" + ctrlcom + "_EmployerInfo1_uctpa__hiddenID").val(0);
            $(".stoast").toastText("warning", "This Company/TPA has no Tariff Configuration.Please Contact Administrator!", 5, 3);
            return false;
        }
        if (isold == true) {
            if (document.getElementById('' + ctrlcom + '_EmployerInfo1_hdntpaid').value == _d["COMPANY_ID"]) {
                $("#" + ctrlcom + "_EmployerInfo1_uctpa_txtSearchControl").val('');
                $("#" + ctrlcom + "_EmployerInfo1_uctpa__hiddenText").val('');
                $("#" + ctrlcom + "_EmployerInfo1_uctpa__hiddenID").val(0);
                $('#' + ctrlcom + '_EmployerInfo1_uctpa_txtSearchControl').removeClass('red');
                $(".stoast").toastText("Info", "Already Patient is registered in this company", 7, 2);
                return false;
            }
            //  $("#" + ctrlcom + "_EmployerInfo1_txtCmpFee").val(0);
            $("#" + ctrlcom + "_txtCmpFee").val(0);
            $("#" + ctrlcom + "_txtregfee").val(0);
            document.getElementById('' + ctrlcom + '_hdnCorpRegFee').value = 0;
            document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnPayAmt').value = 0;
            ($('#' + ctrlcom + '_hdnregfee').val(0));
        } else {
            // $("#" + ctrlcom + "_EmployerInfo1_txtCmpFee").val(_d["COMPANY_FEE"]);
            $("#" + ctrlcom + "_txtCmpFee").val(_d["COMPANY_FEE"]);
            $("#" + ctrlcom + "_txtregfee").val(_d["COMPANY_FEE"]);
            document.getElementById('' + ctrlcom + '_hdnCorpRegFee').value = _d.COMPANY_FEE;
            document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnPayAmt').value = _d.COMPANY_FEE;
            ($('#' + ctrlcom + '_hdnregfee').val(_d.COMPANY_FEE));
        }
        $("#" + ctrlcom + "_EmployerInfo1_uctpa_txtSearchControl").val(_d["COMPANY_NAME"]);
        $("#" + ctrlcom + "_EmployerInfo1_uctpa__hiddenText").val(_d.COMPANY_NAME);
        $("#" + ctrlcom + "_EmployerInfo1_uctpa__hiddenID").val(_d["COMPANY_ID"]);
        $('#' + ctrlcom + '_EmployerInfo1_uctpa_txtSearchControl').removeClass('red');
        $("#" + ctrlcom + "_hdnCompanyID").val(_d["COMPANY_ID"]);

        // $("#" + ctrlcom + "_EmployerInfo1_lblCmpCode").val(_d["COMANY_CD"]);
        ($('#' + ctrlcom + '_hdnrefletterreq').val(_d["IS_LETTER_REQUIRED"]));
        $('#' + ctrlcom + '_ReceiptControl2_txtpatgross').val($('#' + ctrlcom + '_hdnregfee').val());
        $('#' + ctrlcom + '_ReceiptControl2_txtpatdue').val($('#' + ctrlcom + '_hdnregfee').val());
        $('#' + ctrlcom + '_ReceiptControl2_txtDueamount').val($('#' + ctrlcom + '_hdnregfee').val());
        $('#' + ctrlcom + '_ReceiptControl2_hdnNetAmt').val($('#' + ctrlcom + '_hdnregfee').val());
        $('#' + ctrlcom + '_ReceiptControl2_txtpatNet').val($('#' + ctrlcom + '_hdnregfee').val());
        $('#' + ctrlcom + '_ReceiptControl2_txtgrosstotal').val($('#' + ctrlcom + '_hdnregfee').val());
        $('#' + ctrlcom + '_ReceiptControl2_txtTotalNet').val($('#' + ctrlcom + '_hdnregfee').val());
        $('#' + ctrlcom + '_ReceiptControl2_txtTotalDue').val($('#' + ctrlcom + '_hdnregfee').val());
        ($('#' + ctrlcom + '_hdnrefvaliddays').val(_d["VAL_NO_OF_DAYS"]));
        if (isold != true) {
            if (_d["COMPANY_FEE"] > 0) {
                $('#' + ctrlcom + '_ReceiptControl2_Search3_txtSearchControl').addClass('red');
                document.getElementById('' + ctrlcom + '_ReceiptControl2_Search3_txtSearchControl').disabled = false;
                document.getElementById('lk_btn_ctl00_ContentPlaceHolder1_ReceiptControl2_Search3').disabled = false;
            } else {
                $('#' + ctrlcom + '_ReceiptControl2_Search3_txtSearchControl').removeClass('red');
                document.getElementById('' + ctrlcom + '_ReceiptControl2_Search3_txtSearchControl').disabled = true;
                document.getElementById('lk_btn_ctl00_ContentPlaceHolder1_ReceiptControl2_Search3').disabled = true;
            }
        }
    }
    RefLetterReq();
    GetAsync(
    "Private/FrontOffice/OPDBILLNEW.aspx/SetCmpId",
    { cmpid: document.getElementById('' + ctrlcom + '_EmployerInfo1_uctpa__hiddenID').value },
    function (data) {
    },
    function (jqXHR, textStatus, errorThrown) {
    });
}

function RefLetterReq() {
    var refletter = document.getElementById('' + ctrlcom + '_hdnrefletterreq').value;
    var RefLetter = document.getElementById('' + ctrlcom + '_EmployerInfo1_txtrefletter');
    var RefIssueDt = document.getElementById('' + ctrlcom + '_EmployerInfo1_txtrefissuedt');
    var LetterIssueby = document.getElementById('' + ctrlcom + '_EmployerInfo1_txtletterissuedby');
    var creditlimit = document.getElementById('' + ctrlcom + '_EmployerInfo1_txtcreditlimitamt');
    var date = $('#' + ctrlcom + '_EmployerInfo1_txtlettervalidity').val();
    var duration = document.getElementById('' + ctrlcom + '_hdnrefvaliddays').value;
    if (duration > 0) { duration = duration - 1; }
    date = new Date(new Date().getTime() + (duration) * 24 * 60 * 60 * 1000).format('dd-MMM-yyyy');
    var result = CompareDates(new Date().format('dd-MMM-yyyy'), date);
    if (result == "d1>=d2") {
        $(".stoast").toastText("warning", "Referral Letter Expiry Date should not be less than Todays Date", 5, 3);
        document.getElementById('' + ctrlcom + '_EmployerInfo1_txtrefissuedt').value = new Date().format('dd-MMM-yyyy');
        validdt = new Date(new Date().getTime() + duration * 24 * 60 * 60 * 1000).format('dd-MMM-yyyy');
        $('#' + ctrlcom + '_EmployerInfo1_txtlettervalidity').val(validdt);
        return false;
    } else {
        $('#' + ctrlcom + '_EmployerInfo1_txtrefissuedt').val(new Date().format('dd-MMM-yyyy'));
        $('#' + ctrlcom + '_EmployerInfo1_txtlettervalidity').val(date);
    }
    if (refletter == "N" || refletter == "" || refletter == undefined || refletter == null) {
        RefLetter.style.border = '';
        LetterIssueby.style.border = '';
    }
    else {
        LetterIssueby.style.border = '1px solid #f4785e';
        RefLetter.style.border = '1px solid #f4785e';
    }

}

function MandatoryLetterIssued() {
    var LeteerIssued = document.getElementById('' + ctrlcom + '_EmployerInfo1_txtletterissuedby');
    var refLetter = document.getElementById('' + ctrlcom + '_EmployerInfo1_txtrefletter').value;
    if (refLetter != '') {
        LeteerIssued.style.border = '1px solid #f4785e';
    }
    else {
        LeteerIssued.style.border = '';
    }
}




/* VIEW DETAILS OF OPD  */

function ViewDetails(AddressDtls, _str_Bill_Type, ServiceDtls, ReferalDtls, TranModeDtls, BillDtls, MutilDiscDtls, EmpDtls, PatDtls) {
//    if (document.getElementById('ctl00_hdnIsMedClg').value == "TRUE") {
//        $('[id*=divUserTran]')[0].style.display = 'block';
//        $('[id*=divShowHide]')[0].style.display = 'block';
//    } /* MCI*/

    if (document.getElementById('ctl00_ContentPlaceHolder1_hdnClientName').value.toLowerCase() == 'ssbgmc') {
        $('#A1').text('Permanent');
        $('#A2').text('Present');
    }

    Divdocuint.style.display = "none";
    document.getElementById('' + ctrlcom + '_Address1_imgBtnQuickAddr').disabled = true
    clearOPDGridFields(); document.getElementById('' + ctrlcom + '_Address1_ddrelationaddr').disabled = true;
    document.getElementById('' + ctrlcom + '_UcAppointmentNo_txtSearchControl').disabled = true;
    document.getElementById('lk_btn_ctl00_ContentPlaceHolder1_UcAppointmentNo').disabled = true;
    document.getElementById('' + ctrlcom + '_UCprereg_txtSearchControl').disabled = true;
    document.getElementById('lk_btn_ctl00_ContentPlaceHolder1_UCprereg').disabled = true;
    document.getElementById('' + ctrlcom + '_pre_regi').disabled = true;
    document.getElementById('btncmpdtls').disabled = true;
    document.getElementById('New Clearid').style.display = 'none';
    document.getElementById('Clearid').style.display = 'none';
    document.getElementById('' + ctrlcom + '_ucReferal_ucrfrlsrc_txtSearchControl').disabled = true;
    document.getElementById('lk_btn_ctl00_ContentPlaceHolder1_ucReferal_ucReferedto').disabled = true;
    document.getElementById('ctl00_ContentPlaceHolder1_ChkNBorn').disabled = true;
    $('#ctl00_ContentPlaceHolder1_Address1_rdbtndefstate').hide();
    if (document.getElementById('' + ctrlcom + '_hdnOSPNo').value == 'Y') {
        document.getElementById('' + ctrlcom + '_UCServices_rbtnSrvsAndCons_1').checked = true;
        if (document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnRegconSetting').value == "Yes") {
            var Serv_id = 1; var Srv_cd = 'REG'; var Srv_Name = 'REGISTRATION';
            var Price = 0;
            fn_AddFilterRow_pkgbillSelection('G', 'N', 'N', 'N', 'N', 'N', 1, 1, Srv_Name, Srv_cd, '', Price, 0, Price, '', 1, '', 0, 0, 0, 0, 1, '', 'N', '', '', 0, '', 0, 0, Price, Price, Price, '', '', '', '', '', '', '', '', 0, 0, 0, 0, 0, 0, 0);
        }
    }
    document.getElementById('' + ctrlcom + '_UCServices_rbtnSrvsAndCons_0').disabled = true;
    document.getElementById('' + ctrlcom + '_UCServices_rbtnSrvsAndCons_1').disabled = true;
    document.getElementById('' + ctrlcom + '_ReceiptControl2_chkismultiple').disabled = true;
    EnableDisableControls(true); document.getElementById('' + ctrlcom + '_ReceiptControl2_txtquickremarks').disabled = true;
    DisabledCntrl();
    if (document.getElementById('' + ctrlcom + '_hdnviewnewborn').value == "Y") {
        document.getElementById('YYMMDD').style.display = 'none';
        document.getElementById('pediatric').style.display = 'block';
        document.getElementById('' + ctrlcom + '_newAgeUc_txtHH').disabled = true;
        document.getElementById('' + ctrlcom + '_newAgeUc_txtMM').disabled = true;
    }
    if (document.getElementById('' + ctrlcom + '_hdnViewPatTypId').value == "7") {
        $(".trstaff").show();
        document.getElementById('' + ctrlcom + '_lbltypeName').innerHTML = "Staff Name";
        document.getElementById('' + ctrlcom + '_lbltypeRelation').innerHTML = "Staff Relation";
        document.getElementById('divHC').style.display = 'none';
        document.getElementById('divStaff').style.display = 'block';
        document.getElementById('' + ctrlcom + '_UcStaffName_txtSearchControl').value = document.getElementById('' + ctrlcom + '_hdnViewStfName').value;
        document.getElementById('' + ctrlcom + '_StaffRelation').value = document.getElementById('' + ctrlcom + '_hdnViewRltn').value;
        document.getElementById('' + ctrlcom + '_UcStaffName_txtSearchControl').disabled = true;
        document.getElementById('lk_btn_ctl00_ContentPlaceHolder1_UcStaffName').disabled = true;
        document.getElementById('' + ctrlcom + '_StaffRelation').disabled = true;
    }
    if (document.getElementById('' + ctrlcom + '_hdnViewPatTypId').value == "12") {
        $(".trstaff").show();
        document.getElementById('' + ctrlcom + '_lbltypeName').innerHTML = "HC Type";
        document.getElementById('' + ctrlcom + '_lbltypeRelation').innerHTML = "Relation";
        document.getElementById('divHC').style.display = 'block';
        document.getElementById('divStaff').style.display = 'none';
        document.getElementById('' + ctrlcom + '_StaffRelation').value = document.getElementById('' + ctrlcom + '_hdnViewRltn').value;
        document.getElementById('' + ctrlcom + '_StaffRelation').disabled = true;
    }
    if (ServiceDtls != '') {

        ServiceDtls = jQuery.parseJSON(ServiceDtls);
        if (ServiceDtls[0].BILL_TYPE_ID != 0 && ServiceDtls[0].BILL_TYPE_ID != 15)
        { if (PatDtls != '') { ViewPatDtls(PatDtls); } }

    }


    var is_mci = $('#' + ctrlcom + '_UCServices_hdnIS_MCI').val();
    if (is_mci.toLowerCase() == 'true') {
        $('#Divismcicreit')[0].style.display = 'block';
        document.getElementById('ctl00_ContentPlaceHolder1_UCServices_rbtnmcicreit_0').disabled = true;
        document.getElementById('ctl00_ContentPlaceHolder1_UCServices_rbtnmcicreit_1').disabled = true;
    }
    else {
        $('#Divismcicreit')[0].style.display = 'none';
    }

    document.getElementById('ctl00_ContentPlaceHolder1_UCServices_rbtnsrv_Wise_And_Group_Type_1').disabled = true;
    document.getElementById('ctl00_ContentPlaceHolder1_UCServices_rbtnsrv_Wise_And_Group_Type_0').disabled = true;
    document.getElementById('ctl00_ContentPlaceHolder1_chkhccrd').disabled = true;
    document.getElementById('chkSrvGrpCncn').disabled = true;
    document.getElementById('btnpineclick').disabled = true;
    document.getElementById('ctl00_ContentPlaceHolder1_ReceiptControl2_Ddlpinelab').disabled = true;
    if (PatDtls != '') {
        if ($('[id*=hdnallowtariffslcn]').val().toLowerCase() == 'true') {
            $('.allowMTariff').show();
        } else {
            $('.allowMTariff').hide();

        }
        ViewNewPatDtls(PatDtls);
    }
    if (AddressDtls != '') {
        ViewAssignAddressDetails(AddressDtls, _str_Bill_Type);
    }
    if (EmpDtls != '') {
        document.getElementById('' + ctrlcom + '_ddlPatientType').value = 2;
        document.getElementById('' + ctrlcom + '_uccorporate_ddlPaymentBy').value = 2;
        if (ServiceDtls[0].BILL_TYPE_ID == 0) {
            $('#' + ctrlcom + '_emppnl').show();
        }
        ViewEmpDtls(EmpDtls);
        DisableCompAnyDetails();
        if (document.getElementById('' + ctrlcom + '_chk_old').checked) {
            document.getElementById('' + ctrlcom + '_uccorporate_ddlPaymentBy').value = '2';

        }
    }
    else {

        if (document.getElementById('' + ctrlcom + '_chk_old').checked) {
            document.getElementById('' + ctrlcom + '_uccorporate_ddlPaymentBy').value = '1';
            ChangePatientType();
        }

    }

    if (ServiceDtls != '') {

        ViewAssignServicesDetails(ServiceDtls);
    }
    if (ReferalDtls != '') {
        ViewAssignReferalDetails(ReferalDtls);
    }
    if (TranModeDtls != '') {
        ViewAssignTransDetails2(TranModeDtls);
        amountinwords();
    }
    if (BillDtls != '') {
        ViewAssignAmntDetails(BillDtls);
    }
    if (MutilDiscDtls != '') {
        ViewMultiDiscounttypes(MutilDiscDtls);
    }

    classHideCmpAmts();
    $('[id*=gv_services_header] tr td input[type=text]').attr('disabled', true);
    $('[id*=gv_services_header] tr td input[type=button]').attr('disabled', true);
    $('[id*=gv_services_header] tr td select').attr('disabled', true);
    $('[id*=gv_services_header] tr td input[type=checkbox]').attr('disabled', true);
    $('[id*=gvServices] tr td input[type=checkbox]').attr('disabled', true);
    document.getElementById('' + ctrlcom + '_ReceiptControl2_Search3_txtSearchControl').value = document.getElementById('' + ctrlcom + '_hdnViewDue').value;
    document.getElementById('' + ctrlcom + '_ReceiptControl2_ucdueauth_txtSearchControl').value = document.getElementById('' + ctrlcom + '_hdnViewCncsn').value;
    $('.STAFPER').show();
    $('.STAMT').show();
    document.getElementById('' + ctrlcom + '_UCServices_gv_services_header_ctl02_h_dsc_3').style.display = "table-cell";
    $('.HCAMT').show();
    $('.HCPER').show();
    document.getElementById('' + ctrlcom + '_UCServices_gv_services_header_ctl02_h_dsc_1').style.display = "table-cell";
    $('.MGPER').show();
    $('.MGAMT').show();
    document.getElementById('' + ctrlcom + '_UCServices_gv_services_header_ctl02_h_dsc_2').style.display = "table-cell";
    $('.EBPER').show();
    $('.EBAMT').show();
    document.getElementById('' + ctrlcom + '_UCServices_gv_services_header_ctl02_h_dsc_4').style.display = "table-cell";
    $('.RULAMT').show();
    $('.RULPER').show();
    $('.CNCRLPER').show();
    $('.CNCRLAMT').show();

    document.getElementById('' + ctrlcom + '_UCServices_gv_services_header_ctl02_h_dsc_5').style.display = "table-cell";
    var Disc_Count = 5;
    document.getElementById('' + ctrlcom + '_UCServices_gv_services_header').className = 'grid gvServices-bdis' + Disc_Count;
    document.getElementById('' + ctrlcom + '_UCServices_gvServices').className = 'grid gvServices-bdis' + Disc_Count;
    /*document.getElementById('' + ctrlcom + '_headerControl1_imgadd').disabled = true;*/
    document.getElementById('' + ctrlcom + '_chkIsRegNotReq').disabled = true;
    /* document.getElementById('New Clearid').style.display = 'none';
    document.getElementById('Clearid').style.display = 'none';
    document.getElementById('' + ctrlcom + '_ucReferal_ucrfrlsrc_txtSearchControl').disabled = true;
    document.getElementById('lk_btn_ctl00_ContentPlaceHolder1_ucReferal_ucReferedto').disabled = true;*/

    document.getElementById('lk_btn_ctl00_ContentPlaceHolder1_ucReferal_ucrfrlsrc').disabled = true;
    document.getElementById('' + ctrlcom + '_ucReferal_ucReferedto_txtSearchControl').disabled = true;
    document.getElementById('lk_btn_ctl00_ContentPlaceHolder1_ucReferal_ucReferedto').disabled = true;
    document.getElementById('' + ctrlcom + '_ucReferal_chkSMS').disabled = true;
    document.getElementById('' + ctrlcom + '_ucReferal_chkLeter').disabled = true;
    document.getElementById('' + ctrlcom + '_ucReferal_txtremarks').disabled = true;
    document.getElementById('' + ctrlcom + '_ucReferal_ucreferalname_txtSearchControl').disabled = true;
    document.getElementById('lk_btn_ctl00_ContentPlaceHolder1_ucReferal_ucreferalname').disabled = true;
    /*-----commented by sitaram because view data is not coming properly,plz let me know if u uncomment it.
    if (document.getElementById('' + ctrlcom + '_hdnisassestreq').value == 'True') {
    divisassest.style.display = 'block';

    }
    else {
    divisassest.style.display = 'none';

    }
    */
    if (document.getElementById('' + ctrlcom + '_hdnisassestreq').value == 'True') {
        divAssements.style.display = 'block';

    }
    else {
        divAssements.style.display = 'none';

    }
    document.getElementById('' + ctrlcom + '_ucReferal_ucreferalname_txtSearchControl').disabled = true;
    document.getElementById('lk_btn_ctl00_ContentPlaceHolder1_ucReferal_ucreferalname').disabled = true;

}
function ViewNewPatDtls(RegPatDtls) {
    var RegPatDtls = jQuery.parseJSON(RegPatDtls);
    document.getElementById('' + ctrlcom + '_Address1_txtNearestPS').value = RegPatDtls[0].NEAREST_PS;
    document.getElementById('' + ctrlcom + '_ddlRegType').value = RegPatDtls[0].REG_TYPE_ID;
    RegPatDtls[0].FOREIGN_CATEGORY_ID = RegPatDtls[0].FOREIGN_CATEGORY_ID == null || undefined || "" ? "0" : RegPatDtls[0].FOREIGN_CATEGORY_ID;
    if (RegPatDtls[0].FOREIGN_CATEGORY_ID != "0") {
        //_assigntarifinView(RegPatDtls[0].FOREIGN_CATEGORY_ID);
        document.getElementById('' + ctrlcom + '_UCServices_ddlpatcat').value = RegPatDtls[0].FOREIGN_CATEGORY_ID;
        if (document.getElementById('' + ctrlcom + '_UCServices_hbnisshowpatcatagery').value.toUpperCase() == "YES") {
            $('.allowMTariff').show();
        }
        else {
            $('.allowMTariff').show();
        }
        $('#' + ctrlcom + '_UCServices_ddlpatcat').prop('disabled', true);
        $('#' + ctrlcom + '_UCServices_ddltariff').prop('disabled', true);
        var _tariff = '';
        GetNonAsync(
       "Private/FrontOffice/OPDBILLNEW.aspx/GetPatientCategoryDtls",
       { patcat_id: RegPatDtls[0].FOREIGN_CATEGORY_ID },
          function (JData) {
              if (JData.d[0] != '') {
                  for (var i = 0; i <= JData.d[0].length; i++) {
                      if (i == 0)
                          _tariff += "<OPTION selected value='" + i + "'>" + '--select--' + "</OPTION>";
                      else
                          _tariff += "<OPTION  selected value='" + JData.d[0][i - 1].TARIFF_ID + "'>" + JData.d[0][i - 1].TARIFF_NAME + "</OPTION>";
                  }
                  $('#' + ctrlcom + '_UCServices_ddltariff').html(_tariff);
                  $('#' + ctrlcom + '_UCServices_ddltariff').val(JData.d[0][0].TARIFF_ID);
              }
              else {
                  _tariff += "<OPTION selected value='" + 0 + "'>" + '--select--' + "</OPTION>";
                  $('#' + ctrlcom + '_UCServices_ddltariff').html(_tariff);
                  $('#' + ctrlcom + '_UCServices_ddltariff').val(0);
              }
              $('#' + ctrlcom + '_UCServices_ddlpatcat').removeClass('red');
          },
              function (jqXHR, textStatus, errorThrown) {
                  $(".stoast").toastText("Info", errorThrown, 5, 4);
              });

    }
    var dob = new Date(RegPatDtls[0].DOB).format('dd-MMM-yyyy');

    var dob1 = RegPatDtls[0].DOB;
    if (document.getElementById('' + ctrlcom + '_hdndobformat').value == "dd-MMM-yyyy") {
        document.getElementById('' + ctrlcom + '_newAgeUc_txtDob').value = new Date(jQuery.parseJSON(RegPatDtls[0].DOB.split('(')[1].split(')')[0])).format('dd-MMM-yyyy');
    }
    else {
        document.getElementById('' + ctrlcom + '_newAgeUc_txtDob').value = new Date(jQuery.parseJSON(RegPatDtls[0].DOB.split('(')[1].split(')')[0])).format('dd-MM-yyyy');
    }

    if (RegPatDtls[0].IS_NEW_BORN.trim() == "Y") {
        document.getElementById('ctl00_ContentPlaceHolder1_ChkNBorn').checked = true;


        document.getElementById('' + ctrlcom + '_newAgeUc_imgCal').style.display = 'block';
        document.getElementById('pediatric').style.display = 'block';
        document.getElementById('YYMMDD').style.display = 'none';


        document.getElementById('' + ctrlcom + '_newAgeUc_txtHH').value = new Date(jQuery.parseJSON(RegPatDtls[0].DOB.split('(')[1].split(')')[0])).format('dd-MMM-yyyy HH:mm').split(" ")[1].split(":")[0];
        document.getElementById('' + ctrlcom + '_newAgeUc_txtMM').value = new Date(jQuery.parseJSON(RegPatDtls[0].DOB.split('(')[1].split(')')[0])).format('dd-MMM-yyyy HH:mm').split(" ")[1].split(":")[1];

        document.getElementById('' + ctrlcom + '_newAgeUc_txtHH').disabled = true;
        document.getElementById('' + ctrlcom + '_newAgeUc_txtMM').disabled = true;
    }
    if (document.getElementById('ctl00_hdnIsMedClg').value == "TRUE") {
        if (RegPatDtls[0].REC_TYPE_ID == 1) {
            document.getElementById('' + ctrlcom + '_headerControl1_radiousertran_0').checked = true;
            document.getElementById('' + ctrlcom + '_headerControl1_radiousertran_0').disabled = true;
            document.getElementById('' + ctrlcom + '_headerControl1_radiousertran_1').disabled = true;
        }
        if (RegPatDtls[0].REC_TYPE_ID == 2) {
            document.getElementById('' + ctrlcom + '_headerControl1_radiousertran_1').checked = true;
            document.getElementById('' + ctrlcom + '_headerControl1_radiousertran_1').disabled = true;
            document.getElementById('' + ctrlcom + '_headerControl1_radiousertran_0').disabled = true;
        }
    }

    document.getElementById('' + ctrlcom + '_newAgeUc_txtYear').value = RegPatDtls[0].AGE.split(',')[0];
    document.getElementById('' + ctrlcom + '_newAgeUc_txtMonths').value = RegPatDtls[0].AGE.split(',')[1];
    document.getElementById('' + ctrlcom + '_newAgeUc_txtDay').value = RegPatDtls[0].AGE.split(',')[2];
    document.getElementById('' + ctrlcom + '_newAgeUc_txtDay').disabled = true
    document.getElementById('' + ctrlcom + '_newAgeUc_txtMonths').disabled = true
    if (RegPatDtls[0].REG_TYPE_ID == '7' || RegPatDtls[0].REG_TYPE_ID == '12') {
        $(".trstaff").show(); $('.offVipDetails').hide();
        document.getElementById('' + ctrlcom + '_StaffRelation').value = RegPatDtls[0].EMPLOYEE_RELATION_ID;
        if (RegPatDtls[0].REG_TYPE_ID == '12') {
            document.getElementById('' + ctrlcom + '_lbltypeName').innerHTML = "HC Type";
            document.getElementById('' + ctrlcom + '_lbltypeRelation').innerHTML = "Relation";
            document.getElementById('divHC').style.display = 'block';
            document.getElementById('divStaff').style.display = 'none';
            document.getElementById('' + ctrlcom + '_StaffRelation').disabled = true;
            document.getElementById('' + ctrlcom + '_ddlhctype').disabled = true;
            if (RegPatDtls[0].EMPLOYEE_ID != undefined && RegPatDtls[0].EMPLOYEE_ID != null && RegPatDtls[0].EMPLOYEE_ID != "") {
                document.getElementById('' + ctrlcom + '_ddlhctype').value = RegPatDtls[0].EMPLOYEE_ID;
            }
            else
                document.getElementById('' + ctrlcom + '_ddlhctype').value = 0;
        }
    }
    else
    { $('.offVipDetails').show(); $('#trstaff').hide(); }
    /*AssignPatInfo_Dtls(RegPatDtls[0]["PATIENT_ID"]); ---------------------commented by sitaram plz let me know,if u uncomment it.

    if (RegPatDtls[0].HEALTH_CARD_NAME != '' && RegPatDtls[0].HEALTH_CARD_TYPE_NAME != '') {
    document.getElementById('' + ctrlcom + '_uchccrdtype_txtSearchControl').value = RegPatDtls[0].HEALTH_CARD_TYPE_NAME;
    document.getElementById('' + ctrlcom + '_uchccrdno_txtSearchControl').value = RegPatDtls[0].HEALTH_CARD_NAME;
    $('#' + ctrlcom + '_ddhcpatnames').append('<option value=1>' + RegPatDtls[0].FIRST_NAME + ' ' + RegPatDtls[0].MIDDLE_NAME + ' ' + RegPatDtls[0].LAST_NAME + '</option>')
    $('[id*=DivHcCard]')[0].style.display = 'block';
    $('#btnhcclose').prop('disabled', false);
    }*/

}
function ViewPatDtls(PatRes) {
    PatRes = jQuery.parseJSON(PatRes);
    var age = PatRes[0].AGE;
    document.getElementById('' + ctrlcom + '_chk_old').checked = true;
    onGetPatientBanner();
    document.getElementById('' + ctrlcom + '_umrPatientDetails_Umrlookup_txtSearchControl').disabled = true;
    document.getElementById('lk_btn_ctl00_ContentPlaceHolder1_umrPatientDetails_Umrlookup').disabled = true;
    PatRes[0].FOREIGN_CATEGORY_ID = PatRes[0].FOREIGN_CATEGORY_ID == null || undefined || "" ? "0" : PatRes[0].FOREIGN_CATEGORY_ID;
    if (PatRes[0].FOREIGN_CATEGORY_ID != "0") {
        //  _assigntarifinView(PatRes[0].FOREIGN_CATEGORY_ID);
        document.getElementById('' + ctrlcom + '_UCServices_ddlpatcat').value = PatRes[0].FOREIGN_CATEGORY_ID;
        if (document.getElementById('' + ctrlcom + '_UCServices_hbnisshowpatcatagery').value.toUpperCase() == "YES") {
            $('.allowMTariff').show();
        }
        else {
            $('.allowMTariff').show();
        }
        $('#' + ctrlcom + '_UCServices_ddlpatcat').prop('disabled', true);
        $('#' + ctrlcom + '_UCServices_ddltariff').prop('disabled', true);
        var _tariff = '';
        GetNonAsync(
       "Private/FrontOffice/OPDBILLNEW.aspx/GetPatientCategoryDtls",
       { patcat_id: PatRes[0].FOREIGN_CATEGORY_ID },
          function (JData) {
              if (JData.d[0] != '') {
                  for (var i = 0; i <= JData.d[0].length; i++) {
                      if (i == 0)
                          _tariff += "<OPTION selected value='" + i + "'>" + '--select--' + "</OPTION>";
                      else
                          _tariff += "<OPTION  selected value='" + JData.d[0][i - 1].TARIFF_ID + "'>" + JData.d[0][i - 1].TARIFF_NAME + "</OPTION>";
                  }
                  $('#' + ctrlcom + '_UCServices_ddltariff').html(_tariff);
                  $('#' + ctrlcom + '_UCServices_ddltariff').val(JData.d[0][0].TARIFF_ID);
              }
              else {
                  _tariff += "<OPTION selected value='" + 0 + "'>" + '--select--' + "</OPTION>";
                  $('#' + ctrlcom + '_UCServices_ddltariff').html(_tariff);
                  $('#' + ctrlcom + '_UCServices_ddltariff').val(0);
              }
              $('#' + ctrlcom + '_UCServices_ddlpatcat').removeClass('red');
          },
              function (jqXHR, textStatus, errorThrown) {
                  $(".stoast").toastText("Info", errorThrown, 5, 4);
              });
    }
    if (document.getElementById('ctl00_hdnIsMedClg').value == "TRUE") {
        if (PatRes[0].REC_TYPE_ID == 1) {
            document.getElementById('' + ctrlcom + '_headerControl1_radiousertran_0').checked = true;
            document.getElementById('' + ctrlcom + '_headerControl1_radiousertran_0').disabled = true;
            document.getElementById('' + ctrlcom + '_headerControl1_radiousertran_1').disabled = true;
        }
        if (PatRes[0].REC_TYPE_ID == 2) {
            document.getElementById('' + ctrlcom + '_headerControl1_radiousertran_1').checked = true;
            document.getElementById('' + ctrlcom + '_headerControl1_radiousertran_1').disabled = true;
            document.getElementById('' + ctrlcom + '_headerControl1_radiousertran_0').disabled = true;
        }
    }

    document.getElementById('' + ctrlcom + '_umrPatientDetails_Umrlookup_txtSearchControl').value = PatRes[0].UMR_NO;
    document.getElementById('' + ctrlcom + '_umrPatientDetails_lblPatName').innerHTML = PatRes[0].DISPLAY_NAME;
    document.getElementById('' + ctrlcom + '_umrPatientDetails_lblagedob').innerHTML = PatRes[0].DISPLAY_NAME;
    document.getElementById('' + ctrlcom + '_umrPatientDetails_lblagedob').innerHTML = age.split(',')[0] + '(Y) / ' + new Date(jQuery.parseJSON(PatRes[0].DOB.split('(')[1].split(')')[0])).format('dd-MMM-yyyy');
    document.getElementById('' + ctrlcom + '_umrPatientDetails_lblgender').innerHTML = PatRes[0].GENDER;
    document.getElementById('' + ctrlcom + '_umrPatientDetails_lbloccupation').innerHTML = '';
    document.getElementById('' + ctrlcom + '_umrPatientDetails_lblrefdoc').innerHTML = PatRes[0].DOCTOR_NAME;
    document.getElementById('' + ctrlcom + '_umrPatientDetails_lblfathername').innerHTML = PatRes[0].RES_PERSON_NAME;
    document.getElementById('' + ctrlcom + '_umrPatientDetails_lblmothername').innerHTML = PatRes[0].MOTHER_NAME;
    if (PatRes[0].PATIENT_TYPE_ID == 1) {
        document.getElementById('' + ctrlcom + '_umrPatientDetails_lblpattype').innerHTML = 'GENERAL';
    }
    else { document.getElementById('' + ctrlcom + '_umrPatientDetails_lblpattype').innerHTML = 'CORPORATE'; }
    document.getElementById('' + ctrlcom + '_umrPatientDetails_lblcmpname').innerHTML = '';
    document.getElementById('' + ctrlcom + '_umrPatientDetails_lblMobileNo').innerHTML = PatRes[0].MOBILE_NO1;

}
function ViewEmpDtls(EResult) {
    EResult = jQuery.parseJSON(EResult);
    if (EResult != null) {
        DivCorpColors.style.display = "block";
        document.getElementById('' + ctrlcom + '_EmployerInfo1_uctpa_txtSearchControl').value = EResult[0].TPA_NAME;
        document.getElementById('' + ctrlcom + '_EmployerInfo1_EmployerControl1_txtSearchControl').value = EResult[0].CMP_NAME;
        document.getElementById('' + ctrlcom + '_EmployerInfo1_ddlrelation').value = EResult[0].EMP_RELATIONSHIP_ID;
        document.getElementById('' + ctrlcom + '_EmployerInfo1_txtEmploeeID').value = EResult[0].EMPLOYER_ID;
        document.getElementById('' + ctrlcom + '_EmployerInfo1_txtEmployeeName').value = EResult[0].EMP_NAME;
        document.getElementById('' + ctrlcom + '_EmployerInfo1_txtDesignation').value = EResult[0].DESIGNATION;
        document.getElementById('' + ctrlcom + '_EmployerInfo1_txtDept').value = EResult[0].DEPARTMENT;
        document.getElementById('' + ctrlcom + '_EmployerInfo1_txtempgrade').value = EResult[0].EMP_GRADE_ID;
        document.getElementById('' + ctrlcom + '_EmployerInfo1_txtBranch').value = EResult[0].BRANCH;
        document.getElementById('' + ctrlcom + '_EmployerInfo1_txtEmpContactNo').value = EResult[0].EMP_CONTACTNO;
        document.getElementById('' + ctrlcom + '_EmployerInfo1_txtEmpMRNo').value = EResult[0].CARD_NO;
        var card_issue_dt = new Date(EResult[0].CARD_ISSUE_DT).format('dd-MMM-yyyy');
        var card_validity_dt = new Date(EResult[0].CARD_VALIDITY).format('dd-MMM-yyyy');
        var referral_letter_issue_dt = new Date(EResult[0].REFERRAL_LETTER_ISSUE_DT).format('dd-MMM-yyyy');
        var referral_validity_dt = new Date(EResult[0].REFERRAL_VALIDITY_DT).format('dd-MMM-yyyy');

        if (card_issue_dt == 'NaN--NaN') {
            card_issue_dt = new Date(jQuery.parseJSON(EResult[0].CARD_ISSUE_DT.split('(')[1].split(')')[0])).format('dd-MMM-yyyy');
        }
        if (card_validity_dt == 'NaN--NaN') {
            card_validity_dt = new Date(jQuery.parseJSON(EResult[0].CARD_VALIDITY.split('(')[1].split(')')[0])).format('dd-MMM-yyyy');
        }
        if (referral_letter_issue_dt == 'NaN--NaN') {
            referral_letter_issue_dt = new Date(jQuery.parseJSON(EResult[0].REFERRAL_LETTER_ISSUE_DT.split('(')[1].split(')')[0])).format('dd-MMM-yyyy');
        }
        if (referral_validity_dt == 'NaN--NaN') {
            referral_validity_dt = new Date(jQuery.parseJSON(EResult[0].REFERRAL_VALIDITY_DT.split('(')[1].split(')')[0])).format('dd-MMM-yyyy');
        }

        document.getElementById('' + ctrlcom + '_EmployerInfo1_txtdateofissue').value = card_issue_dt;
        document.getElementById('' + ctrlcom + '_EmployerInfo1_txtEmpCardValidity').value = card_validity_dt;
        document.getElementById('' + ctrlcom + '_EmployerInfo1_txtemployername').value = EResult[0].EMPLOYERNAME;
        document.getElementById('' + ctrlcom + '_EmployerInfo1_txtrefletter').value = EResult[0].REFERAL_LETTER_NO;
        document.getElementById('' + ctrlcom + '_EmployerInfo1_ddlvldfr').value = EResult[0].COVERAGE_DESC;
        $('#' + ctrlcom + '_EmployerInfo1_ddlvldfr').val(2);
        document.getElementById('' + ctrlcom + '_EmployerInfo1_txtrefissuedt').value = referral_letter_issue_dt;

        document.getElementById('' + ctrlcom + '_EmployerInfo1_txtlettervalidity').value = referral_validity_dt;
        document.getElementById('' + ctrlcom + '_EmployerInfo1_txtletterissuedby').value = EResult[0].LETTER_ISSUED_BY;
        document.getElementById('' + ctrlcom + '_EmployerInfo1_txtcreditlimitamt').value = EResult[0].CREDIT_LIMIT_AMT;
        EResult[0].BRANCH_NAME = EResult[0].BRANCH_NAME == null ? "" : EResult[0].BRANCH_NAME;
        EResult[0].EMP_GRADE = EResult[0].EMP_GRADE == null ? "" : EResult[0].EMP_GRADE;
        var _optionsVal1 = "<OPTION selected value='" + EResult[0].BRANCH_NAME + "'>" + EResult[0].BRANCH_NAME + "</OPTION>";
        $('[id$=ctl00_ContentPlaceHolder1_EmployerInfo1_txtBranch]').empty().html(_optionsVal1);
        var _optionsVal2 = "<OPTION selected value='" + EResult[0].EMP_GRADE + "'>" + EResult[0].EMP_GRADE + "</OPTION>";
        $('[id$=txtempgrade]').empty().html(_optionsVal2);
        document.getElementById('' + ctrlcom + '_uccorporate_CmpLookup_txtSearchControl').value = EResult[0].TPA_NAME;
        document.getElementById('' + ctrlcom + '_uccorporate_txtMedcard').value = EResult[0].CARD_NO;
        document.getElementById('' + ctrlcom + '_uccorporate_txtEmpCd').value = EResult[0].EMPLOYER_ID;
        document.getElementById('' + ctrlcom + '_uccorporate_txtEmpName').value = EResult[0].EMP_GRADE_ID;
        document.getElementById('' + ctrlcom + '_uccorporate_ucRefLetterNo_txtSearchControl').value = EResult[0].REFERAL_LETTER_NO;
        document.getElementById('' + ctrlcom + '_uccorporate_txtRefLetIssuedby').value = EResult[0].LETTER_ISSUED_BY;
        document.getElementById('' + ctrlcom + '_uccorporate_txtRefLetIssueDt').value = referral_letter_issue_dt;
        document.getElementById('' + ctrlcom + '_uccorporate_txtRefLetValidDt').value = card_validity_dt;
        document.getElementById('' + ctrlcom + '_uccorporate_txtcreditlimitamt').value = EResult[0].CREDIT_LIMIT_AMT;

    }
    var umrno = '';
    if (document.getElementById('' + ctrlcom + '_umrPatientDetails_Umrlookup_txtSearchControl').value != '' && document.getElementById('' + ctrlcom + '_umrPatientDetails_Umrlookup_txtSearchControl').value != undefined)
    { umrno = document.getElementById('' + ctrlcom + '_umrPatientDetails_Umrlookup_txtSearchControl').valu; }
    else {
        umrno = $('#' + ctrlcom + '_txtumrno').val();
    }
    cmpnyid = EResult[0].TPA_ID;
    if (cmpnyid == '' || cmpnyid == undefined || cmpnyid == null) { cmpnyid = 0; }
    GetNonAsync(
                    "PatientRegistration.asmx/Get_Patient_Comp_Details",
                    { umrNO: umrno, flag: 0, cmpnyid: cmpnyid },
                    function (jdata) {
                        OnCmpInfoSuccess(jdata.d);
                        DivCorpColors.style.display = "block";
                    },
                    function (jqXHR, textStatus, errorThrown) {
                        $(".stoast").toastText("warning", errorThrown, 5, 3);
                    });

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
function ViewMultiDiscounttypes(input) {
    input = jQuery.parseJSON(input);
    var session_id = document.getElementById('' + ctrlcom + '_HDNSESSIONID').value;
    var ddlreport = '';
    GetNonAsync(
    //"PatientRegistration.asmx/Get_Dscnttype",
            "Private/FrontOffice/OPDBillNew.aspx/Get_Dscnttype",
            { session_id: session_id },
            function (Mmodule) {
                Mmodule = JSON.parse(Mmodule.d)
                if (Mmodule != null) {
                    relation1 = Mmodule;
                }
            },
            function (jqXHR, textStatus, errorThrown) {
            });
    if (input != null) {
        if (input.length > 0) {
            document.getElementById('' + ctrlcom + '_ReceiptControl2_chkismultiple').checked = true;
            $('#' + ctrlcom + '_ReceiptControl2_Div2')[0].style.display = 'block';
            $("table[id*=gvMultipleConcession] tr:has(td)").each(function (e) {
                $(this).remove();
            });
            for (var i = 0; i < input.length; i++) {
                View_fn_AddRowWithDetais(input[i].CONCESSION_TYPE_ID, input[i].CARD_NO, input[i].CONCESSION_MODE_ID, input[i].CONCESSION_PERCENT, input[i].CONCESSION_AMOUNT, input[i].CNCSN_AUTH_ID, input[i].CONCESSION_AUTHOR, input[i].REMARKS);
            }
            $($("table[id*=gvMultipleConcession] tr:has(td)").find('input[type=text]')).attr('disabled', 'disabled');
            $($("table[id*=gvMultipleConcession] tr:has(td)").find('input[type=button]')).attr('disabled', 'disabled');
            $($("table[id*=gvMultipleConcession] tr:has(td)").find('select')).attr('disabled', 'disabled');
        }
    }
}

function View_fn_AddRowWithDetais(Discounttypeid, cardno, ddlmodeid, percentage, amount, authid, authname, remarks) {
    var gvrecdetails = document.getElementById('' + ctrlcom + '_ReceiptControl2_gvMultipleConcession');
    var Pkgindex = gvrecdetails.rows.length;
    var newrow = gvrecdetails.insertRow(Pkgindex);

    var newCell = newrow.insertCell(0);
    var span = document.createElement('span');
    var newTextBox = document.createElement('label'); newTextBox.id = 'lblSNo' + Pkgindex; newTextBox.innerHTML = Pkgindex; span.appendChild(newTextBox);
    newCell.align = "left";
    newCell.appendChild(span); ;


    newCell = newrow.insertCell(1);
    var imgBtnDelete = document.createElement('IMG');
    imgBtnDelete.style.cursor = 'pointer';
    imgBtnDelete.CssClass = 'gimg';
    imgBtnDelete.style.padding = '2px';
    imgBtnDelete.style.margin = '0 4px';
    imgBtnDelete.style.float = 'left';
    imgBtnDelete.Style = "vertical-align: middle;";
    imgBtnDelete.id = 'imgBtnDelete' + index;
    newCell.style.width = "5%";
    imgBtnDelete.onclick = function () { return RemoveMultiGrid(this); };
    imgBtnDelete.src = _iniUrl + 'Assets/Grid_Icons/delete.png';
    imgBtnDelete.onmouseover = function () { tooltip.show('Remove?'); };
    imgBtnDelete.title = 'Remove';
    imgBtnDelete.onmouseout = function () { tooltip.hide(); };
    if (getParameterByName("MODE") == "VIEW") {
        imgBtnDelete.style.display = 'none';
    }
    else {
        imgBtnDelete.style.display = 'block';
    }
    newCell.appendChild(imgBtnDelete);


    var newcell = newrow.insertCell(2);
    var ddltype = document.createElement('select');
    ddltype.id = 'ddlMultiDiscounttype' + '-' + Pkgindex;
    ddltype = GetDllyears('ddlMultiDiscounttype');
    ddltype.style.border = '1px solid rgb(244,120,94)';
    ddltype.onchange = function () { ShowHideOfGridDiscountSelection(this), DscntValidation(this); return OnNullValue(this); };
    ddltype.value = Discounttypeid;
    newcell.appendChild(ddltype);


    newcell = newrow.insertCell(3);
    var divcard = document.createElement('div'); divcard.id = 'divcard';
    divcard.className = "btntxt opbilllookup";
    var txtcardno = document.createElement('input');
    txtcardno.type = 'text';
    txtcardno.className = 'SampleReg';
    txtcardno.id = 'txtcardno' + Pkgindex;
    txtcardno.disabled = true;
    txtcardno.value = cardno;
    txtcardno.onblur = function () { return OnNullValue(this); };
    var divBtnSrc = document.createElement('div');
    divBtnSrc.id = 'divBtnSrc';
    divBtnSrc.className = "txtbtn";
    var BtnSrvSearch = document.createElement('input');
    BtnSrvSearch.type = 'button';
    BtnSrvSearch.className = 'tb_Btn searchbtn';
    BtnSrvSearch.id = 'BtnSrvSearch' + Pkgindex;
    BtnSrvSearch.align = "right";

    BtnSrvSearch.onclick = function () { BindHealthCard(this) };
    divcard.appendChild(txtcardno);
    divcard.appendChild(divBtnSrc);
    divBtnSrc.appendChild(BtnSrvSearch);
    newcell.style.width = "10%";
    newcell.appendChild(divcard);

    var hdncardid = document.createElement('input'); hdncardid.type = 'hidden'; hdncardid.id = 'hdncardid' + '-' + Pkgindex; newcell.appendChild(hdncardid);
    var hdnauthid = document.createElement('input'); hdnauthid.type = 'hidden'; hdnauthid.id = 'hdnauthid' + '-' + Pkgindex; newcell.appendChild(hdnauthid);
    var hdneventid = document.createElement('input'); hdneventid.type = 'hidden'; hdneventid.id = 'hdneventid' + '-' + Pkgindex; newcell.appendChild(hdneventid);
    var hdnRuleid = document.createElement('input'); hdnRuleid.type = 'hidden'; hdnRuleid.id = 'hdnRuleid' + '-' + Pkgindex; newcell.appendChild(hdnRuleid);

    var newCell = newrow.insertCell(4);
    var ddlModes = document.createElement('select');
    ddlModes.onchange = function () { return DisbaleEnableGridControls(this) };
    ddlModes.id = 'ddlModes' + '-' + Pkgindex;

    var option1 = document.createElement('option');
    option1.value = '1'; option1.innerHTML = 'Overall';
    newCell.style.width = "10%";
    ddlModes.appendChild(option1);
    var option2 = document.createElement('option');
    option2.value = '2'; option2.innerHTML = 'Line';
    ddlModes.appendChild(option2);
    ddlModes.value = ddlmodeid;
    newCell.appendChild(ddlModes);


    var newCell = newrow.insertCell(5);
    var txtper = GetnameTextBox('txtPersentage');
    txtper.onkeyup = function () { return UpdateGridDiscountSelection(this, 'Perecent'); };
    txtper.onfocus = function () { return ClearTextboxTest(this); }
    txtper.onkeypress = function () { return numeralsOnlyTest(event, this); };
    txtper.onblur = function () { return AssignZeroTest(this); }
    txtper.maxlength = 10;
    txtper.onpaste = function () { return false; }
    txtper.ondrop = function () { return false; }
    txtper.className = 'Aright';
    txtper.value = percentage;
    newCell.appendChild(txtper);

    var newCell = newrow.insertCell(6);
    var txtamt = GetnameTextBox('txtAmount');
    txtamt.onkeyup = function () { return UpdateGridDiscountSelection(this, 'Amount'); };
    txtamt.onfocus = function () { return ClearTextboxTest(this); }
    txtamt.onkeypress = function () { return numeralsOnlyTest(event, this); };
    txtamt.onblur = function () { return AssignZeroTest(this); }
    txtamt.ondrop = function () { return false; }
    txtamt.maxlength = 10;
    txtamt.onpaste = function () { return false; }
    txtamt.className = 'Aright';
    txtamt.value = amount;
    newCell.appendChild(txtamt);

    newcell = newrow.insertCell(7);
    var divAuthorized = document.createElement('div'); divAuthorized.id = 'divAuthorized';
    divAuthorized.className = "btntxt opbilllookup";
    var txtAutherizedPersion = document.createElement('input');
    txtAutherizedPersion.type = 'text';
    txtAutherizedPersion.className = 'SampleReg';
    txtAutherizedPersion.id = 'txtAutherizedPersion' + Pkgindex;
    txtAutherizedPersion.onblur = function () { return OnNullValue(this); }
    txtAutherizedPersion.value = authname;
    var divBtnSrc = document.createElement('div');
    divBtnSrc.id = 'divBtnSrc';
    divBtnSrc.className = "txtbtn";
    var BtnSrvSearch = document.createElement('input');
    BtnSrvSearch.type = 'button';
    BtnSrvSearch.className = 'tb_Btn searchbtn';
    BtnSrvSearch.id = 'BtnSrvSearch' + Pkgindex;
    BtnSrvSearch.align = "right";




    BtnSrvSearch.onclick = function () { onauthbind(this); }
    divAuthorized.appendChild(txtAutherizedPersion);
    divAuthorized.appendChild(divBtnSrc);
    divBtnSrc.appendChild(BtnSrvSearch);
    newcell.appendChild(divAuthorized);

    Sys.Application.add_init(function () {
        $create(AjaxControlToolkit.AutoCompleteBehavior, { "firstRowSelected": true, "completionListCssClass": "autocomplete_completionListElement",
            "completionListItemCssClass": "autocomplete_listItem", "highlightedItemCssClass": "autocomplete_highlightedListItem",
            "id": "autoComplete1" + Pkgindex, "minimumPrefixLength": 1, "serviceMethod": "GetAutoComp_Authorisation", "servicePath": _iniUrl + "authorization.asmx", "useContextKey": true, "contextKey": ""
        }, { "itemSelected": OnItemAuthSelection }, null, $get(txtAutherizedPersion.id));
    });

    var newCell = newrow.insertCell(8);
    var txtCRemks = GetnameTextBox('txtCRemks');
    txtCRemks.value = remarks;
    newCell.appendChild(txtCRemks);

    Pkgindex++;
}
function GetCasualitDoctor(_casuality_docid) {
    var SERVICE_ID = _casuality_docid;
    if (SERVICE_ID == null || SERVICE_ID == '' || SERVICE_ID == undefined) { SERVICE_ID = 0; }
    var service_type_id = 1;
    var tariff_id = '1';
    var Patient_Class_id = '2';
    var column_name = 'SERVICE_NAME';
    var flag = 'Y';
    if (document.getElementById('' + ctrlcom + '_UCServices_hdnCon_In_Op').value == 'True')
    { flag = 'Y'; }
    else
    { flag = 'N'; }

    var Gender_id = '1';
    var company_id = '0';
    company_id = document.getElementById('' + ctrlcom + '_hdnCompanyID').value;
    if (company_id == null || company_id == '' || company_id == undefined) { company_id = 0; }
    var umr_no = '';
    umr_no = $('#' + ctrlcom + '_Umrlookup_txtSearchControl').val();
    var _count = "0";
    var _Contextkey = service_type_id + "," + tariff_id + "," + Patient_Class_id + "," + column_name + "," + flag + "," + Gender_id + "," + company_id + "," + umr_no + "," + SERVICE_ID;
    GetAsync(
                "ServiceMasterWebService.asmx/NewGetAutoCompleteSErviceInfo",
                { prefixText: '', count: parseInt(_count), contextKey: _Contextkey },
                function (jdata) {
                    if (jdata.d != null) {
                        if (jdata.d.length > 0) {
                            var doctorname = jdata.d[0].TEXT;
                            var doctorcd = jdata.d[0].Service_cd;
                            var _doctor_id = jdata.d[0].Doctor_id, _price = 0, _lastvisitedDt = '', deptid = 0, VisitTypeId = 1;
                            var tariff_id = jdata.d[0].TARIFF_ID;
                            if (tariff_id == undefined || tariff_id == null || tariff_id == '') { tariff_id = '1'; }
                            fn_AddFilterRow_pkgbillSelection('G', 'N', 'N', 'N', 'N', 'N', 1, 2, doctorname, doctorcd, 'Consultation', _price, 0, _price, '', '', '', 0, 0, 1, _doctor_id, tariff_id, '', 'N', '', '', 0, '', 0, 0, _price, 0, 0, '', '', _lastvisitedDt, 0, '', '', '', '', deptid, '4', 0, 0, 0, 0, VisitTypeId);
                            $('[id$=gvServices] tr').filter(':eq(' + 2 + ')').find('input[type=text][id*=txtServiceName]').attr('disabled', true);
                            $('[id$=gvServices] tr').filter(':eq(' + 2 + ')').find('input[type=text][id*=txtServiceCode]').attr('disabled', true);
                            $('[id$=gvServices] tr').filter(':eq(' + 2 + ')').find('input[type=button][id*=BtnSrvSearch]').attr('disabled', true);
                        }
                    }
                },
                function () {
                });

}

function ViewAssignReferalDetails(result) {
    result = jQuery.parseJSON(result);
    if (result[0] != null)
        document.getElementById('' + ctrlcom + '_hdnref1').value = result[0].PAT_RFRL_DTL_ID;
    if (result[1] != null)
        document.getElementById('' + ctrlcom + '_hdnref1').value = result[1].PAT_RFRL_DTL_ID;
    if (result[2] != null)
        document.getElementById('' + ctrlcom + '_hdnref2').value = result[2].PAT_RFRL_DTL_ID;
    if (result[3] != null)
        document.getElementById('' + ctrlcom + '_hdnref3').value = result[3].PAT_RFRL_DTL_ID;
    for (i = 0; i < result.length; i++) {
        var Source = result[i].REFERAL_SOURCE_ID;
        var Name = result[i].REFERL_NAME;
        //var ReferalClass = result[i].REFERAL_CLASS_ID;
        if (ReferalClass == undefined) { ReferalClass = ""; }
        if (result[i].address1 == undefined || result[i].address1 == null) {
            result[i].address1 = '';
        }
        if (result[i].MOBILE_PHONE == undefined || result[i].MOBILE_PHONE == null) {
            result[i].MOBILE_PHONE = '';
        }
        var Address = result[i].address1;
        var Phone = result[i].MOBILE_PHONE;
        var id = result[i].REFERL_ID;

        var is_sms = result[i].IS_SMS;
        var is_letter = result[i].IS_LETTER;
        var remarks = result[i].REFERAL_REMARKS;
        var RefToName = result[i].REFERRED_TO_NAME;
        var cattypeid = result[i].REFERAL_SOURCE_TO_ID;
        var cattypename = result[i].REFERAL_SOURCE_TO_NAME;
        var ReferalClassId = result[i].REFERAL_CATEGORY_TO_ID;
        var ReferalClass = result[i].REFERAL_CATEGORY_TO_NAME;
        var RefToID = result[i].REFERRED_TO_ID;
        var RefToName = result[i].REFERRED_TO_NAME;

        var is_sms = result[i].IS_SMS;
        var is_letter = result[i].IS_LETTER;
        var remarks = result[i].REFERAL_REMARKS;
        var RefToName = result[i].REFERRED_TO_NAME;
        var cattypeid = result[i].REFERAL_SOURCE_TO_ID;
        var cattypename = result[i].REFERAL_SOURCE_TO_NAME;


        if (i == 0) {
            GlobalMyData1 = new Array();
            multiDimArrayR1(i, Source, Name, id, ReferalClass, ReferalClassId, Address, Phone, id, '', '', RefToID, RefToName, is_sms, is_letter, remarks, cattypeid);
            $.each(GlobalMyData1, function (ArrIndex, ChngRowIndex) {
                document.getElementById('' + ctrlcom + '_ucReferal_ddlreferral').value = Source;
                if (Source == '1') {
                    document.getElementById('' + ctrlcom + '_ucReferal_ucreferalname_txtSearchControl').disabled = true;

                }
                document.getElementById('' + ctrlcom + '_ucReferal_ucreferalname_txtSearchControl').value = Name;

                document.getElementById('' + ctrlcom + '_ucReferal_txtrefaddr').value = Address;
                document.getElementById('' + ctrlcom + '_ucReferal_txtRefPhone').value = Phone;
                document.getElementById('' + ctrlcom + '_ucReferal__hdnID').value = id;


                document.getElementById('' + ctrlcom + '_ucReferal_ucReferedto_txtSearchControl').value = RefToName;
                document.getElementById('' + ctrlcom + '_ucReferal_ucReferedto__hiddenText').value = RefToName;
                document.getElementById('' + ctrlcom + '_ucReferal_ucReferedto__hiddenID').value = RefToID;
                document.getElementById('' + ctrlcom + '_ucReferal_ucrfrlsrc_txtSearchControl').value = ReferalClass;
                document.getElementById('' + ctrlcom + '_ucReferal_hdncattype_id').value = cattypeid;
                document.getElementById('' + ctrlcom + '_ucReferal_ucrfrlsrc__hiddenText').value = ReferalClass;
                document.getElementById('' + ctrlcom + '_ucReferal_ucrfrlsrc__hiddenID').value = ReferalClassId;
                document.getElementById('' + ctrlcom + '_ucReferal_txtremarks').value = remarks;

                if (is_sms == 'Y') {
                    document.getElementById('' + ctrlcom + '_ucReferal_chkSMS').checked = true;
                }
                else {
                    document.getElementById('' + ctrlcom + '_ucReferal_chkSMS').checked = false;
                }
                if (is_letter == 'Y') {
                    document.getElementById('' + ctrlcom + '_ucReferal_chkLeter').checked = true;
                }
                else {
                    document.getElementById('' + ctrlcom + '_ucReferal_chkLeter').checked = false;
                }

            });
        }
        if (i == 1) {
            GlobalMyData2 = new Array();
            multiDimArrayR2(i, Source, Name, id, ReferalClass, ReferalClassId, Address, Phone, id, '', RefToID, RefToName, is_sms, is_letter, remarks, cattypeid);
        }
        if (i == 2) {
            GlobalMyData3 = new Array();
            multiDimArrayR3(i, Source, Name, id, ReferalClass, ReferalClassId, Address, Phone, id, '', RefToID, RefToName, is_sms, is_letter, remarks, cattypeid);
        }
        if (i == 3) {
            GlobalMyData4 = new Array();
            multiDimArrayR4(i, Source, Name, id, ReferalClass, ReferalClassId, Address, Phone, id, '', RefToID, RefToName, is_sms, is_letter, remarks, cattypeid);
        }
    }
}

function ViewAssignServicesDetails(result) {

    var BILL_DT = new Date().format("dd-MMM-yyyy");
    document.getElementById('' + ctrlcom + '_umrPatientDetails_lblbillno').innerHTML = result[0].BILL_NO;
    document.getElementById('' + ctrlcom + '_umrPatientDetails_lblbilldt').innerHTML = result[0].BILL_DT;


    GetNonAsync("Private/FrontOffice/OPDBILLNEW.aspx/BindVisitType",
            {},
            function (jdata) {
                var _optionsVal = ''; var _VisitVal = '';
                if (jdata.d != null) {
                    VisitTypes = jdata.d;
                }
                for (var i = 0; i < jdata.length; i++) {
                    //if (jdata[i]["TYPE_OF_CONSULTATION_ID"] == "2" || jdata[i]["TYPE_OF_CONSULTATION_ID"] == "3") {
                    
                    if (document.getElementById('' + ctrlcom + '_UCServices_rbtnSrvsAndCons_0').checked == true) {
                        if (jdata[i]["TYPE_OF_CONSULTATION_CD"].toUpperCase() == "NORMAL" || VisitTypes[i]["TYPE_OF_CONSULTATION_ID"] == "1")
                            _VisitVal += "<OPTION selected value='" + jdata[i]["TYPE_OF_CONSULTATION_ID"] + "'>" + jdata[i]["TYPE_OF_CONSULTATION_NAME"] + "</OPTION>";
                        if (jdata[i]["TYPE_OF_CONSULTATION_CD"].toUpperCase() == "EMER")
                            _VisitVal += "<OPTION  value='" + jdata[i]["TYPE_OF_CONSULTATION_ID"] + "'>" + jdata[i]["TYPE_OF_CONSULTATION_NAME"] + "</OPTION>";
                    }
                    else {
                        //if (jdata[i]["TYPE_OF_CONSULTATION_ID"] == "2" || jdata[i]["TYPE_OF_CONSULTATION_ID"] == "3") {
                        if (jdata[i]["TYPE_OF_CONSULTATION_CD"].toUpperCase() == "NORMAL" || VisitTypes[i]["TYPE_OF_CONSULTATION_ID"] == "1") {
                            _VisitVal += "<OPTION selected value='" + jdata[i]["TYPE_OF_CONSULTATION_ID"] + "'>" + jdata[i]["TYPE_OF_CONSULTATION_NAME"] + "</OPTION>";
                        }
                        else {
                            _VisitVal += "<OPTION  value='" + jdata[i]["TYPE_OF_CONSULTATION_ID"] + "'>" + jdata[i]["TYPE_OF_CONSULTATION_NAME"] + "</OPTION>";
                        }
                        //}
                    }
                    //}
                }
                $('[id$=ctl00_ContentPlaceHolder1_UCServices_gvServices_ctl02_ddSType]').empty().html(_VisitVal);
            },
            function () {
            });
    for (var i = 0; i < result.length; i++) {
        var hdnDateFormat = $('#' + ctrlcom + '_hdndateformat').val();
        if (hdnDateFormat == undefined || hdnDateFormat == null || hdnDateFormat == "") { hdnDateFormat = "dd-MMM-yyyy"; }
        var hdnTimeFormat = $('#' + ctrlcom + '_hdntimeformat').val();
        result[0].BILL_DT = new Date(result[0].BILL_DT).format(hdnDateFormat) /*+ " " + new Date(result[0].BILL_DT).format(hdnTimeFormat)*/;
        document.getElementById('' + ctrlcom + '_umrPatientDetails_lblbillno').innerHTML = result[0].BILL_NO;
        document.getElementById('' + ctrlcom + '_umrPatientDetails_lblbilldt').innerHTML = result[0].BILL_DT;
        document.getElementById('' + ctrlcom + '_ReceiptControl2_ucdueauth_txtSearchControl').value = result[0].CONCESSION_AUTHER;
        document.getElementById('' + ctrlcom + '_ReceiptControl2_Search3_txtSearchControl').value = result[0].DUE_AUTHER;
        document.getElementById('' + ctrlcom + '_hdnViewCncsn').value = result[0].CONCESSION_AUTHER;
        document.getElementById('' + ctrlcom + '_hdnViewDue').value = result[0].DUE_AUTHER;

        ReportDispat = result[0].REPORT_DISPATCH_ID;
        if (ReportDispat == 2) {
            $('#' + ctrlcom + '_UCServices_divrptDispatch').val('2');
        }
        else
            $('#' + ctrlcom + '_UCServices_divrptDispatch').val('1');
        GetNonAsync("Private/FrontOffice/OPDBILLNEW.aspx/BindVisitType",
            {},
            function (jdata) {
                var _optionsVal = ''; var _VisitVal = '';
                if (jdata.d != null) {
                    VisitTypes = JSON.parse(jdata.d);
                    jdata = JSON.parse(jdata.d);
                }
                for (var i = 0; i < jdata.length; i++) {
                    //if (jdata[i]["TYPE_OF_CONSULTATION_ID"] == "2" || jdata[i]["TYPE_OF_CONSULTATION_ID"] == "3") {
                    
                    if (document.getElementById('' + ctrlcom + '_UCServices_rbtnSrvsAndCons_0').checked == true) {
                        if (jdata[i]["TYPE_OF_CONSULTATION_CD"].toUpperCase() == "NORMAL" || VisitTypes[i]["TYPE_OF_CONSULTATION_ID"] == "1")
                            _VisitVal += "<OPTION selected value='" + jdata[i]["TYPE_OF_CONSULTATION_ID"] + "'>" + jdata[i]["TYPE_OF_CONSULTATION_NAME"] + "</OPTION>";
                        if (jdata[i]["TYPE_OF_CONSULTATION_CD"].toUpperCase() == "EMER")
                            _VisitVal += "<OPTION  value='" + jdata[i]["TYPE_OF_CONSULTATION_ID"] + "'>" + jdata[i]["TYPE_OF_CONSULTATION_NAME"] + "</OPTION>";
                    }
                    else {
                        //if (jdata[i]["TYPE_OF_CONSULTATION_ID"] == "2" || jdata[i]["TYPE_OF_CONSULTATION_ID"] == "3") {
                        if (jdata[i]["TYPE_OF_CONSULTATION_CD"].toUpperCase() == "NORMAL" || VisitTypes[i]["TYPE_OF_CONSULTATION_ID"] == "1") {
                            _VisitVal += "<OPTION selected value='" + jdata[i]["TYPE_OF_CONSULTATION_ID"] + "'>" + jdata[i]["TYPE_OF_CONSULTATION_NAME"] + "</OPTION>";
                        }
                        else {
                            _VisitVal += "<OPTION  value='" + jdata[i]["TYPE_OF_CONSULTATION_ID"] + "'>" + jdata[i]["TYPE_OF_CONSULTATION_NAME"] + "</OPTION>";
                        }
                        //}
                    }
                    //}
                }
                $('[id$=ctl00_ContentPlaceHolder1_UCServices_gvServices_ctl02_ddSType]').empty().html(_VisitVal);
            },
            function () {
            });
        for (var i = 0; i < result.length; i++) {
            var sno = i + 1;
            if (result[i].HCAMT == null) { result[i].HCAMT = ''; }
            if (result[i].HCPER == null) { result[i].HCPER = ''; }
            if (result[i].MGAMT == null) { result[i].MGAMT = ''; }
            if (result[i].MGPER == null) { result[i].MGPER = ''; }
            if (result[i].RULAMT == null) { result[i].RULAMT = ''; }
            if (result[i].RULPER == null) { result[i].RULPER = ''; }
            if (result[i].STAFPER == null) { result[i].STAFPER = ''; }
            if (result[i].STAMT == null) { result[i].STAMT = ''; }
            if (result[i].EBAMT == null) { result[i].EBAMT = ''; }
            if (result[i].EBPER == null) { result[i].EBPER = ''; }

            document.getElementById('' + ctrlcom + '_UCServices_hdnViewHcAmnt').value = result[i].HCAMT;
            document.getElementById('' + ctrlcom + '_UCServices_hdnViewHcPer').value = result[i].HCPER;
            document.getElementById('' + ctrlcom + '_UCServices_hdnViewMGAmnt').value = result[i].MGAMT;
            document.getElementById('' + ctrlcom + '_UCServices_hdnViewMGPer').value = result[i].MGPER;
            document.getElementById('' + ctrlcom + '_UCServices_hdnViewSTPer').value = result[i].STAFPER;
            document.getElementById('' + ctrlcom + '_UCServices_hdnViewSTAmnt').value = result[i].STAMT;
            document.getElementById('' + ctrlcom + '_UCServices_hdnViewEBAmnt').value = result[i].EBAMT;
            document.getElementById('' + ctrlcom + '_UCServices_hdnViewEBPer').value = result[i].EBPER;
            document.getElementById('' + ctrlcom + '_UCServices_hdnViewRUAmnt').value = result[i].RULAMT;
            document.getElementById('' + ctrlcom + '_UCServices_hdnViewRUPer').value = result[i].RULPER;


            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtparygross').value = result[i].CMP_GROSS_AMT;
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtcmpDue').value = result[i].CMP_DUE_AMT;
            if (document.getElementById('ctl00_ContentPlaceHolder1_EmployerInfo1_txtorgletterper').value != 0 || document.getElementById('ctl00_ContentPlaceHolder1_EmployerInfo1_txtorgletterper').value != '') {
                document.getElementById('ctl00_ContentPlaceHolder1_txtCorpPercentage').value = document.getElementById('ctl00_ContentPlaceHolder1_EmployerInfo1_txtorgletterper').value;
                document.getElementById('ctl00_ContentPlaceHolder1_txtEmpPercentage').value = document.getElementById('ctl00_ContentPlaceHolder1_EmployerInfo1_txtempletterper').value;
            }


            if (result[i].DOCTOR_ID > 0) {
                result[i].DOCTOR_ID;


                fn_AddFilterRow_pkgbillSelection('V', result[i].IS_FOREIGN_SERVICE, result[i].IS_CONSENT_FORM, result[i].IS_CLINICAL_HIST_REQ, result[i].HISTORY_TYPE, result[i].IS_POST, sno, result[i].VALUE, result[i].DOCTOR, result[i].SERVICE_CD, result[i].Service_group, result[i].RATE, result[i].CONCESSION, result[i].RATE, result[i].SPECIMEN_NAME, result[i].DOSAGE_QTY, result[i].VACCUTAINER_NAME, result[i].CLASS_SERVICE_ID, result[i].Service_group_id, result[i].Service_type_id, result[i].Doctor_id, result[i].Tariff_Id, result[i].IS_CLINICAL_HIST_REQ, result[i].IS_FOREIGN_SERVICE, result[i].REPORT_DISPATCH_TIME, result[i].SPECIMEN_NAME, result[i].SPECIMEN_ID, result[i].HISTORY_TYPE, result[i].PKG_SRV_IDS, result[i].HISTORY_TYPE_ID, result[i].RATE, result[i].MIN_PRICE, result[i].MAX_PRICE, result[i].NO_NEED_SRV, result[i].IS_CONSENT_FORM, result[i].PRIV_SRV_POSTED_DT, result[i].NO_NEED_DAYS, result[i].QYT_EDIT, result[i].RATE_EDIT, result[i].START_DT, result[i].END_DT, result[i].Department_id, result[i].SRV_GENDER_ID, '0', '0', result[i].FROM_DAYS, result[i].TO_DAYS, 0, 0, 0, 0, 0, '0', '', '');
                if (result[i].SLOT_TIME != null) {
                    var _slottime = new Date(jQuery.parseJSON(result[i].SLOT_TIME.split('(')[1].split(')')[0])).format('HH');
                }
                if (_slottime > 0) {
                    var _Slotval = "<OPTION selected value=1>" + new Date(jQuery.parseJSON(result[i].SLOT_TIME.split('(')[1].split(')')[0])).format('HH');
                    var gridID = document.getElementById('' + ctrlcom + '_UCServices_gvServices');
                    var glen = gridID.rows.length - 1;
                    $('[id$=gvServices] tr').filter(':eq(' + glen + ')').find('[id*=ddlSlotTiming]').empty().html(_Slotval);
                }
            }
            else {
                if (result[i].TEXT == "CONSULTATION") {
                    result[i].TEXT = result[i].DEPARTMENT;
                }
                fn_AddFilterRow_pkgbillSelection('V', result[i].IS_FOREIGN_SERVICE, result[i].IS_CONSENT_FORM, result[i].IS_CLINICAL_HIST_REQ, result[i].HISTORY_TYPE, result[i].IS_POST, sno, result[i].VALUE, result[i].TEXT, result[i].SERVICE_CD, result[i].Service_group, result[i].RATE, result[i].CONCESSION, result[i].RATE, result[i].SPECIMEN_NAME, result[i].DOSAGE_QTY, result[i].VACCUTAINER_NAME, result[i].CLASS_SERVICE_ID, result[i].Service_group_id, result[i].Service_type_id, result[i].Doctor_id, result[i].Tariff_Id, result[i].IS_CLINICAL_HIST_REQ, result[i].IS_FOREIGN_SERVICE, result[i].REPORT_DISPATCH_TIME, result[i].SPECIMEN_NAME, result[i].SPECIMEN_ID, result[i].HISTORY_TYPE, result[i].PKG_SRV_IDS, result[i].HISTORY_TYPE_ID, result[i].RATE, result[i].MIN_PRICE, result[i].MAX_PRICE, result[i].NO_NEED_SRV, result[i].IS_CONSENT_FORM, result[i].PRIV_SRV_POSTED_DT, result[i].NO_NEED_DAYS, result[i].QYT_EDIT, result[i].RATE_EDIT, result[i].START_DT, result[i].END_DT, result[i].Department_id, result[i].SRV_GENDER_ID, '0', '0', result[i].FROM_DAYS, result[i].TO_DAYS, 0, 0, 0, 0, 0, 0, result[i].EQUI_SERVICE_NAME, result[i].EQUI_SERVICE_CD, 'N', result[i].IS_ADDITIONAL, result[i].DISCOUNT_PERCENT, '', result[i].SERVICE_UNICODE, '1', result[i].UNI_SERVICE_TYPE_ID, 0, 0, 0, 0, 0, 'N', result[i].IS_EMERGENCY, result[i].TAX_PCT, result[i].EMP_TAX_AMT, result[i].CMP_TAX_AMT);
            }
            var gridID = document.getElementById('' + ctrlcom + '_UCServices_gvServices');
            var glen = gridID.rows.length - 1;
            if (result[i].PAT_CNCSN_AMT == '' || result[i].PAT_CNCSN_AMT == null) { result[i].PAT_CNCSN_AMT = 0; }
            if (result[i].EMP_NET_AMT == '' || result[i].EMP_NET_AMT == null) { result[i].EMP_NET_AMT = 0; }
            if (result[i].EMP_GROSS_AMT == '' || result[i].EMP_GROSS_AMT == null) { result[i].EMP_GROSS_AMT = 0; }
            if (result[i].CONCESSION == '' || result[i].CONCESSION == null || result[i].CONCESSION == undefined) { result[i].CONCESSION = 0; }
            if (result[i].CASHPER == '' || result[i].CASHPER == null || result[i].CASHPER == undefined) { result[i].CASHPER = 0; }
            if (result[i].TAX_PCT == '' || result[i].TAX_PCT == null || result[i].TAX_PCT == undefined) { result[i].TAX_PCT = 0; }
            if (result[i].EMP_TAX_AMT == '' || result[i].EMP_TAX_AMT == null || result[i].EMP_TAX_AMT == undefined) { result[i].EMP_TAX_AMT = 0; }
            if (result[i].CMP_TAX_AMT == '' || result[i].CMP_TAX_AMT == null || result[i].CMP_TAX_AMT == undefined) { result[i].CMP_TAX_AMT = 0; }

            $('[id$=gvServices] tr').filter(':eq(' + glen + ')').find('[id*=txtAmount]').val(parseFloat(result[i].AMOUNT));
            $('[id$=gvServices] tr').filter(':eq(' + glen + ')').find('[id*=txtQty]').val(parseFloat(result[i].QUANTITY));
            $('[id$=gvServices] tr').filter(':eq(' + glen + ')').find('[id*=txtDiscP]').val(parseFloat(result[i].CASHPER));
            $('[id$=gvServices] tr').filter(':eq(' + glen + ')').find('[id*=hdnSrvShcedulSave]').val(parseFloat(result[i].BILL_SRV_ID));
            $('[id$=gvServices] tr').filter(':eq(' + glen + ')').find('[id*=txtPamt]').val(parseFloat(result[i].PAT_GROSS_AMT));

            $('[id$=gvServices] tr').filter(':eq(' + glen + ')').find('[id*=txtDiscAmt]').val(result[i].PAT_CNCSN_AMT);
            $('[id$=gvServices] tr').filter(':eq(' + glen + ')').find('[id*=txtPNAmt]').val(parseFloat(result[i].PAT_NET_AMT));

            $('[id$=gvServices] tr').filter(':eq(' + glen + ')').find('[id*=txtremks]').val(result[i].REMARKS1);
            $('[id$=gvServices] tr').filter(':eq(' + glen + ')').find("[id*=txtCamt]").val(result[i].COMPANY_AMOUNT);
            $('[id$=gvServices] tr').filter(':eq(' + glen + ')').find("[id*=txtCDiscP]").val(result[i].COMPANY_CNCSN_PCT);
            $('[id$=gvServices] tr').filter(':eq(' + glen + ')').find("[id*=txtCDiscAmt]").val(result[i].COMPANY_CNCSN_AMT);
            $('[id$=gvServices] tr').filter(':eq(' + glen + ')').find("[id*=txtCNetAmt]").val(result[i].COMPANY_NET_AMT);
            $('[id$=gvServices] tr').filter(':eq(' + glen + ')').find("[id*=txtEqui_Srv_Name]").val(result[i].EQUI_SERVICE_NAME);


            $('[id$=gvServices] tr').filter(':eq(' + glen + ')').find("[id*=txthcPer]").val(result[i].HCPER);
            $('[id$=gvServices] tr').filter(':eq(' + glen + ')').find("[id*=txtHcAmt]").val(result[i].HCAMT);
            $('[id$=gvServices] tr').filter(':eq(' + glen + ')').find("[id*=txtmaPer]").val(result[i].MGPER);
            $('[id$=gvServices] tr').filter(':eq(' + glen + ')').find("[id*=txtmgAmt]").val(result[i].MGAMT);
            $('[id$=gvServices] tr').filter(':eq(' + glen + ')').find("[id*=txtstPer]").val(result[i].STAFPER);
            $('[id$=gvServices] tr').filter(':eq(' + glen + ')').find("[id*=txtstAmt]").val(result[i].STAMT);
            $('[id$=gvServices] tr').filter(':eq(' + glen + ')').find("[id*=txtebPer]").val(result[i].EBPER);
            $('[id$=gvServices] tr').filter(':eq(' + glen + ')').find("[id*=txtebAmt]").val(result[i].EBAMT);
            $('[id$=gvServices] tr').filter(':eq(' + glen + ')').find("[id*=txtRulePer]").val(result[i].RULPER);
            $('[id$=gvServices] tr').filter(':eq(' + glen + ')').find("[id*=txtcncrlAmt]").val(result[i].RULAMT);
            $('[id$=gvServices] tr').filter(':eq(' + glen + ')').find("[id*=txtsrvdoctor]").val(result[i].TREATED_BY_NAME);
            $('[id$=gvServices] tr').filter(':eq(' + glen + ')').find("[id*=txttaxper]").val(result[i].TAX_PCT);
            $('[id$=gvServices] tr').filter(':eq(' + glen + ')').find("[id*=txtptax]").val(result[i].EMP_TAX_AMT);
            $('[id$=gvServices] tr').filter(':eq(' + glen + ')').find("[id*=txtcmptax]").val(result[i].CMP_TAX_AMT);

            if (result[i].IS_EMERGENCY.trim() == 'Y') {
                $('[id$=gvServices] tr').filter(':eq(' + glen + ')').find('[id*=chkstat]').prop('checked', 'true')
            }
            if (result[i].IS_CONSENT_FORM == 'Y') {
                $('[id$=gvServices] tr').filter(':eq(' + glen + ')').find('[id*=imgconcernforn]').css('display', 'block')
            }
            if (result[i].IS_PRE_REQUISIT == 'Y') {
                $('[id$=gvServices] tr').filter(':eq(' + glen + ')').find('[id*=imgClinicalHistory]').css('display', 'block')
            }
            
            if (result[i].CONSULTATION_TYPE_ID == 2) {
                $('[id$=gvServices] tr').filter(':eq(' + glen + ')').find('[id*=ddSType]').val('2')
            }
            else
                $('[id$=gvServices] tr').filter(':eq(' + glen + ')').find('[id*=ddSType]').val('1')

            $('#' + ctrlcom + '_txtCorpPayAmt').val(result[i].CMP_DUE_AMT);
            $('#' + ctrlcom + '_txtCorpDueAmt').val(result[i].CMP_DUE_AMT);
            $('#' + ctrlcom + '_txtEmpPayAmt').val(result[i].PAT_GROSS_AMT);
            $('#' + ctrlcom + '_txtCorpPercentage').val(result[i].CMP_CNCSN_PCT);
            document.getElementById('' + ctrlcom + '_txtCorpPercentage').disabled = true;
            $('#' + ctrlcom + '_txtEmpPercentage').val(result[i].PAT_CNCSN_PCT);

            $('#' + ctrlcom + '_ReceiptControl2_txtparygross').val(result[i].CMP_DUE_AMT);
            $('#' + ctrlcom + '_ReceiptControl2_txtcmpDue').val(result[i].CMP_DUE_AMT);


            var index = 1;
            $("table[id*=gvServices] tr:has(td)").each(function () {
                $(this).closest('tr').find("[id*=lblSNo]").text(index);
                index++;
            });
            /* up to here */

            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtparygross').value = result[i].CMP_GROSS_AMT;
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtcmpDue').value = result[i].CMP_DUE_AMT;
            if (document.getElementById('ctl00_ContentPlaceHolder1_EmployerInfo1_txtorgletterper').value != 0 || document.getElementById('ctl00_ContentPlaceHolder1_EmployerInfo1_txtorgletterper').value != '') {
                document.getElementById('ctl00_ContentPlaceHolder1_txtCorpPercentage').value = document.getElementById('ctl00_ContentPlaceHolder1_EmployerInfo1_txtorgletterper').value;
                document.getElementById('ctl00_ContentPlaceHolder1_txtEmpPercentage').value = document.getElementById('ctl00_ContentPlaceHolder1_EmployerInfo1_txtempletterper').value;
            }
        }
        $('[id*=gvServices] tr:has(td) input[type=text]').attr('disabled', 'true');
        $('[id*=gvServices] tr:has(td) input[type=button]').attr('disabled', 'true');
        $('[id*=gvServices] tr:has(td) select').attr('disabled', 'true');

    }

    if (result[0].BILL_TYPE_ID == 17 || result[0].BILL_TYPE_ID == 20) {

    }
    $('[id*=gvServices] tr:has(td) input[type=text]').attr('disabled', 'true');
    $('[id*=gvServices] tr:has(td) input[type=button]').attr('disabled', 'true');
    $('[id*=gvServices] tr:has(td) select').attr('disabled', 'true');
    $('.divmanage i').css('display', 'none');

}

function ViewAssignTransDetails2(result) {
    
    var hdnDateFormat = $('#' + ctrlcom + '_headerControl1_hdnDateFormat').val();
    if (hdnDateFormat == undefined || hdnDateFormat == null || hdnDateFormat == "") { hdnDateFormat = "dd-MMM-yyyy"; }
    result = jQuery.parseJSON(result);
    if (result.length > 0) {
        var rcount = 0;
        if (result[0].PAYMENT_TYPE_ID == 2) {
            for (var i = 0; i <= result.length - 1; i++) {
                var card_no = result[i].CC_CARD_NO;
                var dc_no = result[i].DC_CARD_NO;
                if (card_no == undefined || card_no == null) { card_no = ''; }
                if (dc_no == undefined || dc_no == null) { dc_no = ''; }
                if (result[i].CHANGE_AMOUNT == null || result[i].CHANGE_AMOUNT == undefined || result[i].CHANGE_AMOUNT == '') { result[i].CHANGE_AMOUNT = ''; }
                if (result[i].TENDERED_AMOUNT == null || result[i].TENDERED_AMOUNT == undefined || result[i].TENDERED_AMOUNT == '') { result[i].TENDERED_AMOUNT = ''; }
                document.getElementById('' + ctrlcom + '_ReceiptControl2_Search3_txtSearchControl').value = document.getElementById('' + ctrlcom + '_hdnViewDue').value;
                document.getElementById('' + ctrlcom + '_ReceiptControl2_ucdueauth_txtSearchControl').value = document.getElementById('' + ctrlcom + '_hdnViewCncsn').value;
                document.getElementById('' + ctrlcom + '_ReceiptControl2_txtreceiptNoQuick').value = result[i].TRANSACTION_NO;
                document.getElementById('' + ctrlcom + '_ReceiptControl2_txtquickremarks').value = result[i].REMARKS;
                if (card_no != '' || dc_no != '') {
                    if (card_no != '') {
                        document.getElementById('' + ctrlcom + '_ReceiptControl2_ddcardType').value = result[i].CC_CARD_TYPE_ID;
                        $("#" + ctrlcom + "_ReceiptControl2_ddbankName option:Contains(" + result[i].CC_ISSUE_BANK_NAME + ")").attr("selected", "selected");
                        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtcardNoCmp').value = result[i].CC_CARD_NO;
                        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtQckCardHldrName').value = result[i].CC_CARD_HOLDER_NAME;
                        var CC_VALID_TO_DT = '';
                        if (result[i].DC_VALID_TO_DT != null) {
                            CC_VALID_TO_DT = new Date(result[i].DC_VALID_TO_DT).format('dd-MMM-yyyy');
                            if (CC_VALID_TO_DT == 'NaN--NaN') {
                                CC_VALID_TO_DT = new Date(jQuery.parseJSON(result[i].CC_VALID_TO_DT.split('(')[1].split(')')[0])).format('dd-MMM-yyyy');
                            }
                        }
                        if (CC_VALID_TO_DT == null || CC_VALID_TO_DT == undefined) { CC_VALID_TO_DT = ''; }
                        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtcardExpiredt').value = result[i].CC_VALID_TO_DT;
                        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtcardAuther').value = result[i].CC_AUTH_CD;
                    }
                    else if (dc_no != '') {
                        document.getElementById('' + ctrlcom + '_ReceiptControl2_ddcardType').value = result[i].DC_CARD_TYPE_ID;
                        $("#" + ctrlcom + "_ReceiptControl2_ddbankName option:Contains(" + result[i].DC_ISSUE_BANK_NAME + ")").attr("selected", "selected");
                        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtcardNoCmp').value = result[i].DC_CARD_NO;
                        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtQckCardHldrName').value = result[i].DC_CARD_HOLDER_NAME;
                        var DC_VALID_TO_DT = '';
                        if (result[i].DC_VALID_TO_DT != null) {
                            DC_VALID_TO_DT = new Date(result[i].DC_VALID_TO_DT).format('dd-MMM-yyyy');
                            if (DC_VALID_TO_DT == 'NaN--NaN') {
                                DC_VALID_TO_DT = new Date(jQuery.parseJSON(result[i].DC_VALID_TO_DT.split('(')[1].split(')')[0])).format('dd-MMM-yyyy');
                            }
                        }
                        if (DC_VALID_TO_DT == null || DC_VALID_TO_DT == undefined) { DC_VALID_TO_DT = ''; }
                        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtcardExpiredt').value = result[i].DC_VALID_TO_DT;
                        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtcardAuther').value = result[i].DC_AUTH_CD;
                    }
                    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtCardAmt').value = setProperDecimals(result[i].AMOUNT);
                    document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlcrdtype').value = result[i].PAYMENT_MODE_ID;
                }
                else {

                    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtcashAmt').value = result[i].TENDERED_AMOUNT;
                    document.getElementById('' + ctrlcom + '_ReceiptControl2_lblqickchangeamt').innerHTML = result[i].CHANGE_AMOUNT;

                }
                if (result[i].TRANSACTION_DT == undefined) {
                    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtreceiptDtQuick').value = new Date().format(hdnDateFormat);
                    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtReceiptDtAdvanced').value = new Date().format(hdnDateFormat);
                }
                else {
                    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtreceiptDtQuick').value = new Date(result[i].TRANSACTION_DT).format(hdnDateFormat);
                    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtReceiptDtAdvanced').value = new Date(result[i].TRANSACTION_DT).format(hdnDateFormat);

                }
            }
        }
        else {
            $(".col-hide tr:nth-child(3),.col-hide tr:nth-child(4),.col-hide tr:nth-child(5),.col-hide tr:nth-child(6),.col-hide tr:nth-child(7),.col-hide tr:nth-child(8),.col-hide tr:nth-child(10),.col-hide tr:nth-child(13),.col-hide tr:nth-child(14),.col-hide tr:nth-child(15)").show();
            $("#payitem2,._quick-div").show();
            $("._mdisc").css('width', '72%');
            $("#payitem1,#payitem3").hide();
            $("#lbladvanced").addClass("select");
            $('[id*=ConcessionAmt]')[0].style.display = 'none';
            //ConcessionAmt
            $("#lblquick,#lblmdis").removeClass("select");
            /* added on 24.08.2016 */
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtReceoptNoAdvanced').value = result[0].TRANSACTION_NO;
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtRemarks').value = result[0].REMARKS;
            /* up to here */

            for (var i = 0; i <= result.length - 1; i++) {
                var BANK_NAME = ''; var VALID_TO_DT = ''; var CARD_NO = ''; var Auth_Cd = '';
                var _bankname = ''; var card = ''; var holder_name = ''; var cq_date = ''; var cq_rel_date = '';
                if (result[i].TENDERED_AMOUNT == null || result[i].TENDERED_AMOUNT == undefined || result[i].TENDERED_AMOUNT == '') { result[i].TENDERED_AMOUNT = ''; }
                if (result[i].CURRENCY_NAME == null || result[i].CURRENCY_NAME == undefined || result[i].CURRENCY_NAME == '') { result[i].CURRENCY_NAME = ''; }
                if (result[i].CHANGE_AMOUNT == null || result[i].CHANGE_AMOUNT == undefined || result[i].CHANGE_AMOUNT == '') { result[i].CHANGE_AMOUNT = ''; }

                if (result[i].PAYMENT_MODE_ID == '1') {
                    card = 'Cash';
                }
                else if (result[i].PAYMENT_MODE_ID == 2) {
                    _bankname = result[i].CQ_BANK_NAME;
                    CARD_NO = result[i].CQ_CHEQUE_NO;
                    VALID_TO_DT = result[i].CQ_VALID_TO_DT;

                    holder_name = result[i].CQ_ISSUER_NAME;
                    cq_date = result[i].CQ_DATE;
                    cq_rel_date = result[i].CQ_CHEQUE_REALIZATION_DT;
                    Auth_Cd = result[i].CC_AUTH_CD;
                }
                else if (result[i].PAYMENT_MODE_ID == 3) {
                    _bankname = result[i].CC_ISSUE_BANK_NAME;
                    CARD_NO = result[i].DD_NO;
                    card = result[i].CARD_TYPE;
                    Auth_Cd = result[i].CC_AUTH_CD;
                    VALID_TO_DT = result[i].CC_VALID_TO_DT;

                }
                else if (result[i].PAYMENT_MODE_ID == 4) {
                    _bankname = result[i].CC_ISSUE_BANK_NAME
                    CARD_NO = result[i].CC_CARD_NO;
                    VALID_TO_DT = result[i].CC_VALID_TO_DT;
                    card = result[i].CARD_TYPE;
                    Auth_Cd = result[i].CC_AUTH_CD;
                    holder_name = result[i].CC_CARD_HOLDER_NAME;
                }
                else if (result[i].PAYMENT_MODE_ID == '5') {
                    CARD_NO = result[i].DC_CARD_NO;
                    card = result[i].CARD_TYPE;
                    _bankname = result[i].DC_ISSUE_BANK_NAME;
                    VALID_TO_DT = result[i].DC_VALID_TO_DT;
                    Auth_Cd = result[i].CC_AUTH_CD;
                    holder_name = result[i].DC_CARD_HOLDER_NAME;
                }
                else if (result[i].PAYMENT_MODE_ID == '8' || result[i].PAYMENT_MODE_ID == '13' || result[i].PAYMENT_MODE_ID == '16') {
                    _bankname = result[i].CQ_BANK_NAME;
                    Auth_Cd = result[i].CC_AUTH_CD;
                    CARD_NO = result[i].CQ_CHEQUE_NO;
                }
                else if (result[i].PAYMENT_MODE_ID == '19' || result[i].PAYMENT_MODE_ID == '20' || result[i].PAYMENT_MODE_ID == '21' || result[i].PAYMENT_MODE_ID == '22' || result[i].PAYMENT_MODE_ID == '23' || result[i].PAYMENT_MODE_ID == '24' || result[i].PAYMENT_MODE_ID == '25' || result[i].PAYMENT_MODE_ID == '26') {
                    CARD_NO = result[i].CC_CARD_NO;
                    Auth_Cd = result[i].CC_AUTH_CD;
                }
                var currname = result[i].CURRENCY_NAME;
                var tenderedCash = result[i].TENDERED_AMOUNT;
                var changeinAmt = result[i].CHANGE_AMOUNT;
                if (result[i].PAYMENT_TYPE == null || result[i].PAYMENT_TYPE == undefined) { result[i].PAYMENT_TYPE = ''; }
                /* added on 12.08.2016 */
                if (result[i].EX_RATE == null || result[i].EX_RATE == undefined) { result[i].EX_RATE = 0; }
                if (currname == null || currname == undefined) { currname = 0; }
                if (changeinAmt == null || changeinAmt == undefined) { changeinAmt = 0; }
                if (tenderedCash == null || tenderedCash == undefined || tenderedCash == '') { tenderedCash = 0; }
                if (_bankname == null || _bankname == undefined) { _bankname = ''; }
                if (holder_name == null || holder_name == undefined) { holder_name = ''; }
                var cardname = '';
                if (card == 1) { cardname = 'visa'; } else if (card == 2) { cardname = 'Master'; } else { cardname = card; }
                /* up to here */
                /* added on 16.08.2016 */
                var cardexpdt = '', cardexpTime = ''; ;
                if (VALID_TO_DT != undefined && VALID_TO_DT != null && VALID_TO_DT != '') {
                    cardexpdt = VALID_TO_DT.split(' ')[0];
                    cardexpdt = new Date(cardexpdt).format("dd-MMM-yyyy");
                    if (cardexpdt == 'NaN--NaN undefined' || cardexpdt == 'NaN--NaN') {
                        cardexpdt = new Date(jQuery.parseJSON(VALID_TO_DT.split('(')[1].split(')')[0])).format('dd-MMM-yyyy');
                    }
                }


                // $('table[id$=gvReceiptDetails]').find("tr:eq(1)").find('[id*=lblcardexpdt]').text(cardexpdt);
                if (i == 0) {

                    $('table[id$=gvReceiptDetails]').find("tr:eq(1)").find('[id*=lblrecmode]').text(result[i].PAYMENT_TYPE);
                    $('table[id$=gvReceiptDetails]').find("tr:eq(1)").find('[id*=lblcurrname]').text(result[i].CURRENCY_NAME);
                    $('table[id$=gvReceiptDetails]').find("tr:eq(1)").find('[id*=lblexchrate]').text(result[i].EX_RATE);
                    $('table[id$=gvReceiptDetails]').find("tr:eq(1)").find('[id*=lblconvertedamt]').text(result[i].AMOUNT);
                    $('table[id$=gvReceiptDetails]').find("tr:eq(1)").find('[id*=lblbankname]').text(_bankname);
                    $('table[id$=gvReceiptDetails]').find("tr:eq(1)").find('[id*=lblcardno]').text(CARD_NO);
                    $('table[id$=gvReceiptDetails]').find("tr:eq(1)").find('[id*=lblAmount]').text(result[i].AMOUNT);
                    // $('table[id$=gvReceiptDetails]').find("tr:eq(1)").find("[id*=lblAmtinwords]").text(   (NumToWordsInt(parseFloat($('table[id$=gvReceiptDetails]').find("tr:eq(1)").find("[id*=lblAmount]").text()))+' '+document.getElementById('' + ctrlcom + '_ReceiptControl2_hdncurrenydesc').value).toLowerCase().replace(/(^.|\s+.)/g, m=>m.toUpperCase() ));
                    amountinworsforview();
                    $('table[id$=gvReceiptDetails]').find("tr:eq(1)").find('[id*=lblcardexpdt]').text(cardexpdt);
                    $('table[id$=gvReceiptDetails]').find("tr:eq(1)").find('[id*=lbltendcash]').text(result[i].TENDERED_AMOUNT);
                    $('table[id$=gvReceiptDetails]').find("tr:eq(1)").find('[id*=lblchange]').text(result[i].CHANGE_AMOUNT);
                    $('table[id$=gvReceiptDetails]').find("tr:eq(1)").find('[id*=lblcardtype]').text(cardname);
                    $('table[id$=gvReceiptDetails]').find("tr:eq(1)").find('[id*=lblcqissuername]').text(holder_name);
                    $('table[id$=gvReceiptDetails]').find("tr:eq(1)").find('[id*=chequedt]').text(cq_date);
                    $('table[id$=gvReceiptDetails]').find("tr:eq(1)").find('[id*=cqreldt]').text(cq_rel_date);

                    $('table[id$=gvReceiptDetails]').find("tr:eq(1)").find('[id*=lblauthcode]').text(Auth_Cd);
                }
                else {
                    fn_AddFilterRow_getdata(result[i].PAYMENT_MODE_ID, result[i].PAYMENT_TYPE, result[i].AMOUNT, result[i].EX_RATE, _bankname, result[i].AMOUNT, result[i].DISCNT_AMT, currname,
                     CARD_NO, cardexpdt, card, tenderedCash, changeinAmt, "VIEW", Auth_Cd, cardexpdt, holder_name, cq_date, cq_rel_date);

                }
                if (result[i].TRANSACTION_DT == undefined) {
                    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtreceiptDtQuick').value = new Date().format(hdnDateFormat);
                    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtReceiptDtAdvanced').value = new Date().format(hdnDateFormat);
                }
                else {
                    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtreceiptDtQuick').value = new Date(result[i].TRANSACTION_DT).format(hdnDateFormat);
                    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtReceiptDtAdvanced').value = new Date(result[i].TRANSACTION_DT).format(hdnDateFormat);

                }
            }
        }
        $('.manage1').css('display', 'none');

    }
}

function ViewAssignAmntDetails(result) {
    result = jQuery.parseJSON(result);
    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatgross').value = parseFloat(result[0].PAT_GROSS_AMT);
    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtgrosstotal').value = result[0].BILL_AMOUNT;
    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatNet').value = parseFloat(result[0].PAT_NET_AMT);
    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtTotalNet').value = parseFloat(result[0].NET_AMOUNT);
    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatientReceiptAmt').value = parseFloat(result[0].PAID_AMOUNT);
    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtTotalReciptAmt').value = parseFloat(result[0].PAT_PAID_AMT);
    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtTotalDue').value = parseFloat(result[0].DUE_AMOUNT);
    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatdue').value = parseFloat(result[0].PAT_DUE_AMT);
    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatgrossamt').value = parseFloat(result[0].PAT_CNCSN_AMT);
    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtgrossamttotal').value = parseFloat(result[0].CONCESSION_AMOUNT);
    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatdis').value = parseFloat(result[0].CONCESSION);
    if (result[0].CMP_GROSS_AMT == '' || result[0].CMP_GROSS_AMT == undefined || result[0].CMP_GROSS_AMT == null) { result[0].CMP_GROSS_AMT = '0'; }
    if (result[0].CMP_DUE_AMT == '' || result[0].CMP_DUE_AMT == undefined || result[0].CMP_DUE_AMT == null) { result[0].CMP_DUE_AMT = '0'; }
    if (result[0].CMP_NET_AMT == '' || result[0].CMP_NET_AMT == undefined || result[0].CMP_NET_AMT == null) { result[0].CMP_NET_AMT = '0'; }
    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtparygross').value = parseFloat(result[0].CMP_GROSS_AMT);
    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtcmpNet').value = result[0].CMP_NET_AMT;
    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtcmpDue').value = parseFloat(result[0].CMP_DUE_AMT);
    if (result[0].CMP_DUE_AMT > 0) {
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtDuePartyAuthname').value = document.getElementById('' + ctrlcom + '_uccorporate_CmpLookup_txtSearchControl').value;
    }
    if (result[0].GST_AMOUNT == '' || result[0].GST_AMOUNT == undefined || result[0].GST_AMOUNT == null) { result[0].GST_AMOUNT = '0'; }
    if (result[0].CMP_TAX_AMT == '' || result[0].CMP_TAX_AMT == undefined || result[0].CMP_TAX_AMT == null) { result[0].CMP_TAX_AMT = '0'; }
    if (result[0].PAT_TAX_AMT == '' || result[0].PAT_TAX_AMT == undefined || result[0].PAT_TAX_AMT == null) { result[0].PAT_TAX_AMT = '0'; }
    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatTotTax').value = parseFloat(result[0].PAT_TAX_AMT);
    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtcmpTotTax').value = parseFloat(result[0].CMP_TAX_AMT);
    document.getElementById('' + ctrlcom + '_ReceiptControl2_txttaxamt').value = parseFloat(result[0].GST_AMOUNT);
    document.getElementById('' + ctrlcom + '_txtCorpPercentage').value = result[0].CR_CMP_PCT;
    document.getElementById('' + ctrlcom + '_txtEmpPercentage').value = result[0].CR_PAT_PCT;
    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpartygrossamt').value = result[0].CMP_CNCSN_AMT;
    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpartydis').value = result[0].CMP_CNCSN_PCT;
    document.getElementById('' + ctrlcom + '_txtCorpPayAmt').value = result[0].CMP_GROSS_AMT;
    document.getElementById('' + ctrlcom + '_txtCorpDueAmt').value = result[0].CMP_DUE_AMT;
    document.getElementById('' + ctrlcom + '_txtEmpPayAmt').value = result[0].PAT_GROSS_AMT;

    
    if (result[0].DUE_AMOUNT > 0) {
        ctl00_ContentPlaceHolder1_ReceiptControl2_txtcashAmt.value = '';
    }
}




function ViewAssignAddressDetails(result, _str) {

    if (_str == "15") {
        document.getElementById('' + ctrlcom + '_pre_regi').value = 5;
    }

    if (document.getElementById('' + ctrlcom + '_ddlNationality').value != document.getElementById('' + ctrlcom + '_hdnddlNationality').value) {
        AssignAddrforeign(result);
    }
    else {
        AssignViewAddressDetails(result);
    }
}
function AssignAddrforeign(data) {

    $("#A3").addClass("select");
    $("#A2").removeClass("select");
    $("#A1").removeClass("select");
    $('#divAddressType')[0].style.display = "block";
    $('#divAddressType1')[0].style.display = "block";
    document.getElementById('' + ctrlcom + '_Address1_hdnnationaladdr').value = "Y";
    $('#' + ctrlcom + '_Address1_AreaUserControl1_txtSearchControl').removeClass('red');
    var result = jQuery.parseJSON(data); // data.d;
    for (i = 0; i < result.length; i++) {
        if (result[i].ADDR_TYPE_ID == 14) {
            var Area = result[i].AREA_ID;
            var area_name = result[i].AREA;
            var City = result[i].CITY_ID;
            var Address = result[i].ADDRESS1 + result[i].ADDRESS2;
            var city_name = result[i].CITY;
            var State = result[i].STATE_ID;
            var state_name = result[i].STATE;
            var Country = result[i].COUNTRY_ID;
            var country_name = result[i].COUNTRY;
            var PinZip = result[i].ZIPCODE;
            var Address1 = result[i].ADDRESS1;
            var Address2 = result[i].ADDRESS2;
            var District = result[i].DISTRICT_ID;
            var District_name = result[i].DISTRICT_NAME;
            document.getElementById('' + ctrlcom + '_hdnadd3').value = result[i].ADDRESS_ID;
            document.getElementById('' + ctrlcom + '_hdnaddrev3').value = result[i].ADDRESS_REV_NO;
            document.getElementById('' + ctrlcom + '_Address1_ddrelationaddr').value = result[i].ADDR_TYPE_ID;
            DivAdressRowIndex = DivAdressRowIndex == 0 ? 1 : DivAdressRowIndex;
            document.getElementById('' + ctrlcom + '_Address1_txtAddress1').value = Address1;
            document.getElementById('' + ctrlcom + '_Address1_txtAddress2').value = Address2;
            document.getElementById('' + ctrlcom + '_Address1_AreaUserControl1_txtSearchControl').value = area_name;
            document.getElementById('' + ctrlcom + '_Address1_CityUserControl1').value = city_name;
            document.getElementById('' + ctrlcom + '_Address1_StateUserControl1').value = state_name;
            document.getElementById('' + ctrlcom + '_Address1_txtPin').value = PinZip;
            document.getElementById('' + ctrlcom + '_Address1_DistricUserControl1').value = District_name;
            document.getElementById('' + ctrlcom + '_Address1_CountryUserControl1').value = country_name;
            multiDimAddress3(DivAdressRowIndex, '', '', Address1, Address2, Area, PinZip, City, District, State,
            Country, city_name, state_name, area_name, District_name, country_name, result[i].ADDRESS_ID, result[i].ADDRESS_REV_NO);
        }
    }
}
function AssignViewAddressDetails(result) {
    result = jQuery.parseJSON(result);
    for (i = 0; i < result.length; i++) {
        var Area = result[i].AREA_ID;
        var area_name = result[i].AREA;
        var City = result[i].CITY_ID;
        var Address = result[i].Address1 + result[i].Address2;
        var city_name = result[i].CITY;
        var State = result[i].STATE_ID;
        var state_name = result[i].STATE;
        var Country = result[i].COUNTRY_ID;
        var country_name = result[i].COUNTRY;
        var PinZip = result[i].ZIPCODE;
        var Address1 = result[i].ADDRESS1;
        var Address2 = result[i].ADDRESS2;
        var District = result[i].DISTRICT_ID;
        var District_name = result[i].DISTRICT_NAME;
        document.getElementById('' + ctrlcom + '_Address1_txtemail').value = result[0].EMAIL_ID;
        document.getElementById('' + ctrlcom + '_Address1_txtMobile1').value = result[0].MOBILE_PHONE;
        document.getElementById('' + ctrlcom + '_Address1_txtMobile3').value = result[0].OFFICE_PHONE;
        document.getElementById('' + ctrlcom + '_Address1_txtMobile2').value = result[0].HOME_PHONE;
        var MobileNo1 = result[i].MOBILE_PHONE;
        // var MobileNo2 = result[i].OFFICE_PHONE;
        var MobileNo2 = result[i].HOME_PHONE;
        var SameasPresentAddress, CopyFromPresentAddress;
        DivAdressRowIndex = DivAdressRowIndex == 0 ? 1 : DivAdressRowIndex;

        if (i == 0) {
            GlobalMyAddress1 = new Array();
            multiDimAddress1(DivAdressRowIndex, SameasPresentAddress, CopyFromPresentAddress, Address1, Address2, Area, PinZip, City, District, State,
        Country, city_name, state_name, area_name, District_name, country_name, '', '', MobileNo1, MobileNo2);
            $.each(GlobalMyAddress1, function (ArrIndex, ChngRowIndex) {
                if (ChngRowIndex.rowIndex == DivAdressRowIndex) {
                    document.getElementById('' + ctrlcom + '_Address1_txtAddress1').value = ChngRowIndex.Address1;
                    document.getElementById('' + ctrlcom + '_Address1_txtAddress2').value = ChngRowIndex.Address2;
                    document.getElementById('' + ctrlcom + '_Address1_AreaUserControl1_txtSearchControl').value = ChngRowIndex.area_name;
                    document.getElementById('' + ctrlcom + '_Address1_AreaUserControl1__hiddenID').value = ChngRowIndex.Area;
                    document.getElementById('' + ctrlcom + '_Address1_AreaUserControl1__hiddenText').value = ChngRowIndex.area_name;
                    document.getElementById('' + ctrlcom + '_Address1_hdnAreaId').value = ChngRowIndex.Area;
                    document.getElementById('' + ctrlcom + '_Address1_CityUserControl1').value = ChngRowIndex.city_name;
                    document.getElementById('' + ctrlcom + '_Address1_hdncityid').value = ChngRowIndex.City;
                    document.getElementById('' + ctrlcom + '_Address1_StateUserControl1').value = ChngRowIndex.state_name;
                    document.getElementById('' + ctrlcom + '_Address1_hdnstateid').value = ChngRowIndex.State;
                    document.getElementById('' + ctrlcom + '_Address1_CountryUserControl1').value = ChngRowIndex.country_name;
                    document.getElementById('' + ctrlcom + '_Address1_hdncountryid').value = ChngRowIndex.Country;
                    document.getElementById('' + ctrlcom + '_Address1_txtPin').value = ChngRowIndex.PinZip;
                    document.getElementById('' + ctrlcom + '_Address1_DistricUserControl1').value = ChngRowIndex.District_name;
                }
            });
        }

        if (i == 1) {
            GlobalMyAddress2 = new Array();
            multiDimAddress2(DivAdressRowIndex, SameasPresentAddress, CopyFromPresentAddress, Address1, Address2, Area, PinZip, City, District, State,
             Country, city_name, state_name, area_name, District_name, country_name, '', '', MobileNo1, MobileNo2);
        }
        if (i == 2) {
            document.getElementById('' + ctrlcom + '_Address1_ddrelationaddr').value = result[i].ADDR_TYPE_ID;
            GlobalMyAddress3 = new Array();
            multiDimAddress3(DivAdressRowIndex, SameasPresentAddress, CopyFromPresentAddress, Address1, Address2, Area, PinZip, City, District, State,
            Country, city_name, state_name, area_name, District_name, country_name, '', '', MobileNo1, MobileNo2);
        }
    }
}
function DisableCompAnyDetails() {
    document.getElementById('' + ctrlcom + '_EmployerInfo1_uctpa_txtSearchControl').disabled = true;
    document.getElementById('' + ctrlcom + '_EmployerInfo1_EmployerControl1_txtSearchControl').disabled = true;
    document.getElementById('lk_btn_ctl00_ContentPlaceHolder1_EmployerInfo1_EmployerControl1').disabled = true;
    document.getElementById('' + ctrlcom + '_EmployerInfo1_uctpa_txtSearchControl').disabled = true;
    document.getElementById('' + ctrlcom + '_EmployerInfo1_ddlrelation').disabled = true;
    document.getElementById('' + ctrlcom + '_EmployerInfo1_txtEmploeeID').disabled = true;
    document.getElementById('' + ctrlcom + '_EmployerInfo1_txtEmployeeName').disabled = true;
    document.getElementById('' + ctrlcom + '_EmployerInfo1_txtDesignation').disabled = true;
    document.getElementById('' + ctrlcom + '_EmployerInfo1_txtDept').disabled = true;
    document.getElementById('' + ctrlcom + '_EmployerInfo1_txtempgrade').disabled = true;
    document.getElementById('' + ctrlcom + '_EmployerInfo1_txtBranch').disabled = true;
    document.getElementById('' + ctrlcom + '_EmployerInfo1_txtEmpContactNo').disabled = true;
    document.getElementById('' + ctrlcom + '_EmployerInfo1_txtEmpMRNo').disabled = true;
    document.getElementById('' + ctrlcom + '_EmployerInfo1_txtEmpCardValidity').disabled = true;
    document.getElementById('' + ctrlcom + '_EmployerInfo1_txtdateofissue').disabled = true;
    document.getElementById('' + ctrlcom + '_EmployerInfo1_txtrefletter').disabled = true;
    document.getElementById('' + ctrlcom + '_EmployerInfo1_txtlettervalidity').disabled = true;
    document.getElementById('' + ctrlcom + '_EmployerInfo1_txtcreditlimitamt').disabled = true;
    document.getElementById('' + ctrlcom + '_EmployerInfo1_txtemployername').disabled = true;
    document.getElementById('' + ctrlcom + '_EmployerInfo1_txtletterissuedby').disabled = true;
    document.getElementById('' + ctrlcom + '_EmployerInfo1_txtrefissuedt').disabled = true;
}
function VIPValues() {
    document.getElementById('' + ctrlcom + '_dd_reg_source').value = document.getElementById('' + ctrlcom + '_hdnddlVIP').value;
    document.getElementById('' + ctrlcom + '_source_remarks').value = document.getElementById('' + ctrlcom + '_hdnVIPNotes').value;
    VIPviewmode();
}
function assignopdcmplogo(imge) {
    var _str = imge;
    var _baseString = '';
    GetNonAsync(
            "Private/Frontoffice/OPDBILLNEW.aspx/Get_imagedetails",
            { _str: _str },
            function (data) {
                _baseString = data.d;
                if (_baseString != '' && _baseString != undefined && _baseString != null && _baseString != "AA==") {
                    $('#opdimgdiv').css('display', 'block');
                    $('#' + ctrlcom + '_Image2').attr('src', "data:image/jpg;base64," + _baseString);
                }
                else {
                    $('#opdimgdiv').css('display', 'none');
                    $('#' + ctrlcom + '_Image2').attr('src', "");
                }
            },
            function (jqXHR, textStatus, errorThrown) {
            });

}
function CheckEligibilityConditions() {
    var type = document.getElementById('' + ctrlcom + '_EmployerInfo1_hdncmpdocname').value;
    var age = 0; var gender = 0; var maritalstatus = 0; var umr_no = ''; var company_id = 0;
    var chkreg = document.getElementById('' + ctrlcom + '_chk_old').checked;
    if (type == "OPD" && chkreg == true) {
        umr_no = $("#" + ctrlcom + "_umrPatientDetails_Umrlookup_txtSearchControl").val();
        company_id = $("#" + ctrlcom + "_uccorporate_EmployerInfo1_uctpa__hiddenID").val();
    }
    else {
        age = document.getElementById('' + ctrlcom + '_newAgeUc_txtYear').value;
        gender = document.getElementById('' + ctrlcom + '_ddlGender').value;
        maritalstatus = document.getElementById('' + ctrlcom + '_ddlMaritalStatus').value;
        company_id = $("#" + ctrlcom + "_EmployerInfo1_uctpa__hiddenID").val();
    }
    if (company_id > 0) {
        GetAsync(
    "Private/FrontOffice/OPDBILLNEW.aspx/GetEligilibityData",
    { age: age, gender: gender, maritalstatus: maritalstatus, umr_no: umr_no, company_id: company_id },
    function (data) {
        var _optionsVal = '';
        if (data.d[0].STATUS != "Y") {
            $(".stoast").toastText("warning", "Based on Company Eligibility Settings,Patient is not eligible for this Company", 5, 3);
            if (type == "OPD" && chkreg == true) {
                document.getElementById('' + ctrlcom + '_uccorporate_EmployerInfo1_txtrefletter').value = '';
            } else {
                document.getElementById('' + ctrlcom + '_EmployerInfo1_txtrefletter').value = '';
            }
        }
    },
    function (jqXHR, textStatus, errorThrown) {
        alert(errorThrown);
    });
    }
}
function onCheck() {
    clearfeilds();

    if (document.getElementById('' + ctrlcom + '_chk_old').checked == true) {
        var _con = $('input[id*=radiousertran]:checked').val();
        if (_con != "") {
            document.getElementById('' + ctrlcom + '_chk_old').checked = true;
        }
        if (_con == 0 || _con == null || _con == undefined) { _con = 1; }
        //        GetAsync(
        //       "Private/FrontOffice/OPDBill.aspx/AddPreConditionUmr",
        //       { con: _con },
        //      function (JData) {
        //      },
        //      function (jqXHR, textStatus, errorThrown) {
        //      });
        document.getElementById('ctl00_ContentPlaceHolder1_umrPatientDetails_Umrlookup_hdn_preCond').value = 0 + "^" + _con;
    }
}
function CheckApptMblNo() {
    var maxmobilenodigits = $('[id*=hdnMobileMaxDigits]').val();
    var mobile_no = document.getElementById('' + ctrlcom + '_txtMobile1').value;
    var ddlvalue = document.getElementById('' + ctrlcom + '_pre_regi').value;
    if (document.getElementById('' + ctrlcom + '_headerControl1_hdnMobileMadatory').value == 'True') {
        if (mobile_no.length == maxmobilenodigits) {
            MobileNoPatientsList(mobile_no);
            return false;
        }
    }
    else {
        if (mobile_no != '' && mobile_no != null && mobile_no != undefined) {
            MobileNoPatientsList(mobile_no);
            return false;
        }
    }

}
function MobileNoPatientsList(mobile_no) {
    GetAsync(
            "PatientRegistration.asmx/Check_mobileno",
            { mobile_no: mobile_no },
            function (jdata) {
                var input = jQuery.parseJSON(jdata.d);
                if (input != "") {
                    var ddlvalue = document.getElementById('' + ctrlcom + '_pre_regi').value;
                    if (document.getElementById('' + ctrlcom + '_hdnAPTID').value == "" || document.getElementById('' + ctrlcom + '_pre_regi').value != "Appointment#") {
                        if (jQuery.parseJSON(jdata.d)[0].MOBILE_NO == mobile_no) {
                            if (document.getElementById('' + ctrlcom + '_pre_regi').value != 'Appointment#') {
                                $(".toast").toastText("Info", "This Mobile no is already having an Appointment", 7, 2);
                                return false;
                            }
                        } ss
                    }
                }
            },
            function () {
            });
}

function onDiagnosis(input) {
    if (input.RESULT == undefined) {
        document.getElementById('ctl00_ContentPlaceHolder1_UcDiagnosis_txtSearchControl').value = input.DIAGNOSIS_NAME;
        document.getElementById('ctl00_ContentPlaceHolder1_UcDiagnosis__hiddenText').value = input.DIAGNOSIS_NAME;
        document.getElementById('ctl00_ContentPlaceHolder1_UcDiagnosis__hiddenID').value = input.DIAGNOSIS_ID;
        document.getElementById('ctl00_ContentPlaceHolder1_hdnDiagnosis_Cd').value = input.DIAGNOSIS_CD;
    }
    else {
        document.getElementById('ctl00_ContentPlaceHolder1_UcDiagnosis_txtSearchControl').value = input.RESULT.DIAGNOSIS_NAME;
        document.getElementById('ctl00_ContentPlaceHolder1_UcDiagnosis__hiddenText').value = input.RESULT.DIAGNOSIS_NAME;
        document.getElementById('ctl00_ContentPlaceHolder1_UcDiagnosis__hiddenID').value = input.RESULT.DIAGNOSIS_ID;
        document.getElementById('ctl00_ContentPlaceHolder1_hdnDiagnosis_Cd').value = input.RESULT.DIAGNOSIS_CD;
    }
}