var ctrlcom = 'ctl00_ContentPlaceHolder1';
function assesmentclick() {
    var asses = document.getElementById('' + ctrlcom + '_ChkAssesment').checked;
    if (asses == true) {
        $('#' + ctrlcom + '_ReceiptControl2_Search3_txtSearchControl').removeClass('red');
    }
    else {
        var asses = document.getElementById('' + ctrlcom + '_ChkAssesment').checked;
        if (asses == true) {
            $('#' + ctrlcom + '_ReceiptControl2_Search3_txtSearchControl').removeClass('red');
        }
        else {
            $('#' + ctrlcom + '_ReceiptControl2_Search3_txtSearchControl').addClass('red');
        }
    }
}
var RegSrv = '';
$(function () {
    $(document).keyup(function (e) {
        var key = (e.keyCode ? e.keyCode : e.charCode);
        if (key == 18) {
            if (document.getElementById('' + ctrlcom + '_UCServices_rbtnSrvsAndCons_0').checked == true) {
                document.getElementById('' + ctrlcom + '_UCServices_rbtnSrvsAndCons_1').checked = true;
                ChangeSrvToCons();
                return false;
            }
            else if (document.getElementById('' + ctrlcom + '_UCServices_rbtnSrvsAndCons_1').checked == true) {
                document.getElementById('' + ctrlcom + '_UCServices_rbtnSrvsAndCons_0').checked = true; ChangeSrvToCons();
                document.getElementById('' + ctrlcom + '_UCServices_gv_services_header_ctl03_txtServiceName').focus();
                return false;
            }
        }
    });
});
$(document).ready(function (e) {
    var is_mci = $('#' + ctrlcom + '_UCServices_hdnIS_MCI').val();
    if (is_mci.toLowerCase() == 'true') {
        $('#Divismcicreit')[0].style.display = 'block';
    }
    else {
        $('#Divismcicreit')[0].style.display = 'none';
    }
    ctl00_ContentPlaceHolder1_UCServices_gv_services_header_ctl03_txtServiceName.tabIndex = 55;
    if (getParameterByName('MODE') != 'VIEW') {
        var dateformat = $('#' + ctrlcom + '_hdndateformat').val();
        var split = dateformat.split(' ');
        var current_format = split[0];
        $('[id*=txtRegDateTime]').datepicker({
            changeMonth: true,
            changeYear: true,
            dateFormat: current_format,
            minDate: new Date,
            maxDate: new Date
        });
        $('[id*=txtIssueDt]').datepicker({
            changeMonth: true,
            changeYear: true,
            dateFormat: current_format,
            maxDate: new Date(),
            onSelect: function () {
                checkpassportissueDt(this);
            }
        });
        $('[id*=txtExpiryDt]').datepicker({
            changeMonth: true,
            changeYear: true,
            dateFormat: current_format,
            minDate: new Date(),
            onSelect: function () {
                checkpassportexpiryDt(this);
            }
        });
        $('[id*=txtVisaIssueDt]').datepicker({
            changeMonth: true,
            changeYear: true,
            dateFormat: 'dd-MMM-yyyy',
            maxDate: new Date(),
            onSelect: function () {
                checkpassportissueDt(this);
            }
        });
        $('[id*=txtVisaExpDt]').datepicker({
            changeMonth: true,
            changeYear: true,
            dateFormat: 'dd-MMM-yyyy',
            minDate: new Date(),
            onSelect: function () {
                checkpassportexpiryDt(this);
            }
        });
        if (getParameterByName('MODE') != "VIEW") {
            var reg_type = $('#' + ctrlcom + '_hdnregtypemain').val();
            if (reg_type == undefined || reg_type == null || reg_type == '') { reg_type = 2; }
            $('#' + ctrlcom + '_ddlRegType').val(reg_type);
        }
        $('[id*=ddlGender]').on('keyup change', function (e) {
            TitileGenderMapping(this);
        });
        $('[id*=ddlMaritalStatus]').on('keyup change', function (e) {
            TitileGenderMapping(this);
        });
        $('[id*=ddlRegType]').on('key', function (e) {
            selectRegType(this);
        });
        $('[id*=ucConsultant_txtSearchControl]').on('blur', function (e) {
            VisittypeOspBill();
        });

        $('[id*=ucReferal_ucreferalname_txtSearchControl]').on('blur', function (e) {
            VisittypeOspBill();
        });
        $('[id*=Address1_AreaUserControl1_txtSearchControl]').on('blur', function (e) {

            if (document.getElementById('' + ctrlcom + '_Address1_AreaUserControl1__hiddenID').value == '' || document.getElementById('' + ctrlcom + '_Address1_AreaUserControl1__hiddenID').value == '0') {
                $('#' + ctrlcom + '_Address1_AreaUserControl1_txtSearchControl').addClass('red');
            }
            else
            { $('#' + ctrlcom + '_Address1_AreaUserControl1_txtSearchControl').removeClass('red'); }
            if (document.getElementById('' + ctrlcom + '_ddlNationality').value != $('#' + ctrlcom + '_hdnddlNationality').val()) {
                document.getElementById('' + ctrlcom + '_Address1_AreaUserControl1_txtSearchControl').className = 'grey';
                document.getElementById('' + ctrlcom + '_Address1_txtPin').className = 'grey';
                document.getElementById('' + ctrlcom + '_Address1_ddrelationaddr').className = 'grey';
            }
            var RegTypeIndex = document.getElementById('' + ctrlcom + '_ddlRegType').selectedIndex; ;
            if (ddlregtype[RegTypeIndex].innerHTML == 'Emergency') {
                OnColorChanges();
                OnPageValidationEmergency();

            }
        });
        $('[id*=ctl00_ContentPlaceHolder1_Address1_txtPin]').on('blur', function (e) {
            var RegTypeIndex = document.getElementById('' + ctrlcom + '_ddlRegType').selectedIndex; ;
            if (ddlregtype[RegTypeIndex].innerHTML == 'Emergency') {
                OnColorChanges();
                OnPageValidationEmergency();

            }
        });
    }
});
function TitileGenderMapping(TitleData) {
    var count = 0;
    var titleid = document.getElementById('' + ctrlcom + '_ddlTitle');
    var genderid = document.getElementById('' + ctrlcom + '_ddlGender');
    var marital_status = document.getElementById('' + ctrlcom + '_ddlMaritalStatus');
    var _id = genderid.value;
    if (titleid.value == 0) {
        count = 0;
    }
    else if (_arrTitle.length == 1) { /* CHECKING TITLE-GENDER MAPPING DATA EXISTS */
        for (var i = 0; i < _arrTitle[0].length; i++) {
            if (_arrTitle[0][i].TITLE_ID == parseInt(titleid.value)) {
                if (_arrTitle[0][i].MARITAL_STATUS_ID != 0) {
                    marital_status.value = _arrTitle[0][i].MARITAL_STATUS_ID;
                }
                if (_arrTitle[0][i].GENDER_ID == 1 || _arrTitle[0][i].GENDER_ID == 2) /*male ,female checking */
                {
                    genderid.value = _arrTitle[0][i].GENDER_ID;
                    count++;
                }
                else if (_arrTitle[0][i].GENDER_ID == 3) { /* unspecified checking */
                    genderid.value = _arrTitle[0][i].GENDER_ID;
                    count++;
                }
                else if (_arrTitle[0][i].GENDER_ID != 1 && _arrTitle[0][i].GENDER_ID != 2 && _arrTitle[0][i].GENDER_ID != 3 && genderid.value == 0) { /* select gender or all gender */
                    genderid.value = 0;
                    count++;
                }
            }
            else if (genderid.value == 0) { /* in title-gender mapping not exists then */
                genderid.value = 0; count++;
            }
        }
    }
    if (count == 0 && genderid.value == 0) {
        genderid.value = 0;
    }
    if (count == 0 && marital_status.value == 0) {
        marital_status.value = 0;
    }
} /*Title - Gender,Marital Status Relation */
function verifygender() {
    var staffrelation = document.getElementById('' + ctrlcom + '_StaffRelation').value;
    if (staffrelation == 0)
        document.getElementById('' + ctrlcom + '_ddlGender').disabled = false;
    if (staffrelation != 0)
        document.getElementById('' + ctrlcom + '_ddlGender').disabled = true;
    return false;
}

function SelectGender1(obj) {
    var GvRowscount = 0;
    var gridID = document.getElementById('' + ctrlcom + '_UCServices_gvServices');
    var rowIndex = gridID.rows.length;
    var checkRowIndex = rowIndex;

    $("table[id$=UCServices_gvServices] tr:has(td)").each(function () {

        for (GvRowscount = 0; GvRowscount < rowIndex; GvRowscount++) {
            var gen_srv_id = $('[id$=gvServices] tr').filter(':eq(' + GvRowscount + ')').find('input[type=hidden][id*=hdnServiceID]').val();
            if (gen_srv_id != 2 && gen_srv_id != 1 && gen_srv_id != document.getElementById('' + ctrlcom + '_UCServices_hdnconssrvID').value) {
                $('[id$=UCServices_gvServices] tr').filter(':eq(' + GvRowscount + ')').remove();
                arrServiceIds = $.grep(arrServiceIds, function (value) {
                    return value != gen_srv_id;
                });
            }
        }
        GvRowscount++;
    });
    ServicesAutoContextKey(rowIndex);
    AssignSno(0);
    CalculateGridAmt(0);

    if (document.getElementById('' + ctrlcom + '_ddlRegType').value == 6 || document.getElementById('' + ctrlcom + '_ddlRegType').value == 7) {
        // verifygender();
        /*add by srinu for staff dependent relation and tittle selection*/
        if (document.getElementById('' + ctrlcom + '_ddlRegType').value == 7) {
            if (document.getElementById('' + ctrlcom + '_UcStaffName_txtSearchControl').value == "") {
                $(".stoast").toastText("info", "Please select Staff Name", 5, 2);
                document.getElementById('' + ctrlcom + '_UcStaffName_txtSearchControl').focus();
                return false;
            }
            var staffrelation = document.getElementById('' + ctrlcom + '_StaffRelation').value;
            if (staffrelation == 0) {
                $(".stoast").toastText("info", "Please select Staff Relation", 5, 2);
                document.getElementById('' + ctrlcom + '_StaffRelation').focus();
                document.getElementById('' + ctrlcom + '_ddlTitle').value = 0;
                document.getElementById('' + ctrlcom + '_ddlGender').value = 0;
                OnPageValidation();
                return false;
            }
            var ddlgender = document.getElementById('' + ctrlcom + '_ddlTitle').value;
            if (staffrelation == 3 || staffrelation == 4 || staffrelation == 6 || staffrelation == 8 || staffrelation == 11 || staffrelation == 13 || staffrelation == 16 || staffrelation == 19 || staffrelation == 20 || staffrelation == 21 || staffrelation == 27 || staffrelation == 33) {
                if (ddlgender == 1 || ddlgender == 4 || ddlgender == 9 || ddlgender == 10 || ddlgender == 12) {
                    $(".stoast").toastText("info", "Please Select Correct Tittle For Staff Relation", 5, 2);
                    document.getElementById('' + ctrlcom + '_ddlTitle').focus();
                    document.getElementById('' + ctrlcom + '_ddlTitle').value = 0;
                    return false;
                }
                else {
                    return true;
                }
            }
            if (staffrelation == 2 || staffrelation == 5 || staffrelation == 6 || staffrelation == 9 || staffrelation == 10 || staffrelation == 12 || staffrelation == 15 || staffrelation == 17 || staffrelation == 18 || staffrelation == 23 || staffrelation == 34) {
                if (ddlgender == 2 || ddlgender == 3 || ddlgender == 13 || ddlgender == 47) {
                    $(".stoast").toastText("info", "Please Select Correct Tittle For Staff Relation", 5, 2);
                    document.getElementById('' + ctrlcom + '_ddlTitle').focus();
                    document.getElementById('' + ctrlcom + '_ddlTitle').value = 0;
                    return false;
                }
                else {
                    return true;
                }
            }

        }

        /*end*/
    }
    document.getElementById('' + ctrlcom + '_ddlGender').value = 0;
    document.getElementById('' + ctrlcom + '_ddlMaritalStatus').value = 0;
    if (obj == 'ctl00_ContentPlaceHolder1_ddlGender' || obj == 'ctl00_ContentPlaceHolder1_ddlMaritalStatus') {
        document.getElementById('' + ctrlcom + '_ddlGender').value = 0;
        document.getElementById('' + ctrlcom + '_ddlMaritalStatus').value = 0;
    }
    TitileGenderMapping();
    var genderid = $('[id*=ddlGender]').val();
    if (genderid == '' || genderid == undefined || genderid == null) { genderid = 0; }
    document.getElementById('' + ctrlcom + '_UCServices_hdnGender_ID').value = genderid;
    var _gender = $('[id*=ddlGender]').find('option:selected').text();
    var _maritalstatus = $('[id*=ddlMaritalStatus]').find('option:selected').text();
    if (_gender == "--select--") { _gender = ''; }
    if (_maritalstatus == "--select--") { _maritalstatus = ''; }
    document.getElementById('' + ctrlcom + '_UCServices_hdnGender_ID').value = genderid;
    if (document.getElementById('' + ctrlcom + '_ddlRegType').value != '5') { OnPageValidation(); } else { OnPageValidationEmergency(); }
    if (document.getElementById('' + ctrlcom + '_pre_regi').value == '5') { OnColorChanges(); OnOSPValidation(); }
    if (document.getElementById('' + ctrlcom + '_pre_regi').value == '1') { OnPageValidation(); }
    //    document.getElementById('' + ctrlcom + '_ddlMaritalStatus').className='grey';]
    var title = document.getElementById('' + ctrlcom + '_ddlTitle').value
    if (document.getElementById('' + ctrlcom + '_ChkNBorn').checked) {
        if (title == 1 || title == 3 || title == 4 || title == 9 || title == 10 || title == 11 || title == 12 || title == 13 || title == 14) {
            document.getElementById('' + ctrlcom + '_ddlTitle').value = 0;
            document.getElementById('' + ctrlcom + '_ddlGender').value = 0;
            document.getElementById('' + ctrlcom + '_ddlMaritalStatus').value = 0;
        }
    }
    var VisitType = $('#' + ctrlcom + '_pre_regi').val();
    document.getElementById('' + ctrlcom + '_chkisold').disabled = true;
    /*if (title == 6 || VisitType==5) {
    document.getElementById('' + ctrlcom + '_chkisold').disabled = true;
    }
    else {
    document.getElementById('' + ctrlcom + '_chkisold').disabled = false;
    }*/
    document.getElementById('' + ctrlcom + '_newAgeUc_hdnTitle').value = document.getElementById('' + ctrlcom + '_ddlTitle').value;
    document.getElementById('' + ctrlcom + '_newAgeUc_hdnGender').value = document.getElementById('' + ctrlcom + '_ddlGender').value;
    if (document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnDocName').value == "REG" || document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnDocName').value == "OPQUICK") {

        var title = document.getElementById('' + ctrlcom + '_newAgeUc_hdnTitle').value;
        var gender = document.getElementById('' + ctrlcom + '_newAgeUc_hdnGender').value;

        if (gender == 1) {
            var age = document.getElementById('' + ctrlcom + '_newAgeUc_txtYear').value;

            if (age >= 65) {
                CheckIsSeniorCitizen('Y');
            }
            else {
                CheckIsSeniorCitizen('N');
            }
        }
        else if (gender == 2) {
            var age = document.getElementById('' + ctrlcom + '_newAgeUc_txtYear').value;
            if (age >= 65) {
                CheckIsSeniorCitizen('Y');
            }
            else {
                CheckIsSeniorCitizen('N');
            }
        }
        else if (gender == 0 || gender == "Un Specified") {
            var age = document.getElementById('' + ctrlcom + '_newAgeUc_txtYear').value;
            var titlecount = 0;
            var baby = $("#" + ctrlcom + "_ddlTitle option:selected").text();
            if (baby == '' || baby == null || baby == undefined) { baby = ''; }
            var _baby = '';
            _baby = baby.split(' ');
            _baby = _baby[0];
            if ((age >= 65) && (_baby != 'Baby')) {
                CheckIsSeniorCitizen('Y');
            }
            else if ((age >= 14) && (_baby == 'Baby') && (_baby != '--select--')) {
                $('#' + ctrlcom + '_ddlTitle').val('0');
                $(".stoast").toastText("warning", "Please select proper Title!", 5, 3);
                return false;
            }
            else {
                CheckIsSeniorCitizen('N');
            }
        }

        else {
            document.getElementById('' + ctrlcom + '_Address1_chkIsSenior').checked = false;
            document.getElementById('ctl00_ContentPlaceHolder1_newAgeUc_txtYear').value = "";
            document.getElementById('ctl00_ContentPlaceHolder1_newAgeUc_txtMonths').value = "";
            document.getElementById('ctl00_ContentPlaceHolder1_newAgeUc_txtDay').value = "";
            document.getElementById('ctl00_ContentPlaceHolder1_newAgeUc_txtDob').value = "__-__-____";
        }
    }
    if (document.getElementById('' + ctrlcom + '_ddlRegType').value != '5') { OnPageValidation(); }
    ExtendedDisplayValues();
    if (document.getElementById('' + ctrlcom + '_ddlNationality').value != document.getElementById('' + ctrlcom + '_hdnddlNationality').value) {
        document.getElementById('' + ctrlcom + '_Address1_AreaUserControl1_txtSearchControl').className = 'grey';
        document.getElementById('' + ctrlcom + '_Address1_txtPin').className = 'grey';
        document.getElementById('' + ctrlcom + '_Address1_ddrelationaddr').className = 'grey';
    }
    if (document.getElementById('' + ctrlcom + '_ddlRegType').value == '5') { OnPageValidationEmergency(); }
    //    OnPageValidation();
    //    OnPageValidationEmergency();
    return false;
}
var arrServiceIds = new Array();
function pageLoad() {
    imgbtnNewReg.style.display = 'none';
    var form_name = $('#' + ctrlcom + '_ReceiptControl2_hdnDocName').val();
    //document.getElementById('divcount').style.display = 'none';
    if (form_name == 'OPQUICK' || form_name == 'Cons') {
        if (document.getElementById('' + ctrlcom + '_hdnconsultation_count_in_day').value == "True") {
            if (document.getElementById('ctl00_ContentPlaceHolder1_chk_old').checked == true) {
                document.getElementById('divcount').style.display = 'block';
            }
        }
    }
    $('[id$=hdnTokenType]').val(3);
    if (document.getElementById('ctl00_ContentPlaceHolder1_hdnClientName').value.toLowerCase() == 'ssbgmc') {
        $('#A1').text('Permanent');
        $('#A2').text('Present');
    }


    var is_mci = $('#' + ctrlcom + '_UCServices_hdnIS_MCI').val();
    if (is_mci.toLowerCase() == 'true') {

        if ($('#' + ctrlcom + '_UCServices_hdnIS_MCI_default').val() == 1) {
            $('#' + ctrlcom + '_UCServices_rbtnmcicreit_0').prop("checked", true);

        }
        else if ($('#' + ctrlcom + '_UCServices_hdnIS_MCI_default').val() == 2) {
            $('#' + ctrlcom + '_UCServices_rbtnmcicreit_1').prop("checked", true);
        }
        else {
            $('#' + ctrlcom + '_UCServices_rbtnmcicreit_0').prop("checked", true);

        }
        MCISearchoptionsChange();
    }
    if (document.getElementById('' + ctrlcom + '_UCServices_hbnisshowpatcatagery').value.toUpperCase() == "YES") {
        $('.allowMTariff').show();
    }
    else {
        $('.allowMTariff').show();
        $('#' + ctrlcom + '_UCServices_ddlpatcat').prop('disabled', true);
        $('#' + ctrlcom + '_UCServices_ddltariff').prop('disabled', true);
    }
    if ($('[id*=hdnallowtariffslcn]').val().toLowerCase() != 'true') {
        var _tariff = '';
        _tariff += "<OPTION selected value='" + 0 + "'>" + '--select--' + "</OPTION>";
        $('#ctl00_ContentPlaceHolder1_UCServices_ddltariff').html(_tariff);
        $('#ctl00_ContentPlaceHolder1_UCServices_ddltariff').val(0);

        $('#' + ctrlcom + '_UCServices_ddltariff').prop('disabled', true);
    }


    if (document.getElementById('ctl00_hdnIsMedClg').value == "TRUE") {
//        $('[id*=divUserTran]')[0].style.display = 'block';
//        $('[id*=divShowHide]')[0].style.display = 'block';
        $('[id*=Divdocuint]')[0].style.display = 'block';

    } /* MCI*/
    else {
        $('[id*=Divdocuint]')[0].style.display = 'none';
    }
    //onCheck();
    if (document.getElementById('' + ctrlcom + '_hdnsvaeclickvalue').value == "1") {
        ClearServicesGrid();
        document.getElementById('' + ctrlcom + '_newAgeUc_hdnDocument').value = 'OPQUICK';
        if (document.getElementById('' + ctrlcom + '_hdnfatherrequired').value.toLowerCase() == 'true') {
        } else {
            $('.kin').hide();
        }
        if (document.getElementById('' + ctrlcom + '_hdnmotherrequired').value.toLowerCase() == 'true') {

        } else {
            $('.mother').hide();
        }
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
        var IsHealthCardReq = document.getElementById('' + ctrlcom + '_hdnIsHealthCardReq').value;
        if (IsHealthCardReq.toLowerCase() == 'true') {
            $('#' + ctrlcom + '_Address1_chkhccrd').parent().show()
        }
        else {
            $('#' + ctrlcom + '_Address1_chkhccrd').parent().hide()
        }
        MobileNoSettingValidations('ctl00_ContentPlaceHolder1_Address1_txtMobile1');
        MobileNoSettingValidations('ctl00_ContentPlaceHolder1_Address1_txtMobile2');
        document.getElementById('' + ctrlcom + '_hdnDocName').value = 'OPQUICK';
        var reg_type = $('#' + ctrlcom + '_hdnregtypemain').val();
        if (reg_type == undefined || reg_type == null || reg_type == '') { reg_type = 2; }
        $('#' + ctrlcom + '_ddlRegType').val(reg_type);

        if (getParameterByName("MODE") != "VIEW") {
            if (document.getElementById('' + ctrlcom + '_hdnispatientbaneer').value != 'Y') {
                document.getElementById('' + ctrlcom + '_chk_old').checked = false;
                /*AccessAddDisableAttributes();*/
                onGetPatientBanner();
            }
            else
            { ClearAllTransactionDetails(); }
            if (document.getElementById('' + ctrlcom + '_hdnAssesmnt').value == 'True') {
                document.getElementById('divAssements').style.display = 'block';
            }
            else {
                document.getElementById('divAssements').style.display = 'none';
            }
            $('#' + ctrlcom + '_emppnl table').find('td[id*=tdlettertype]').css('display', 'block');
            document.getElementById('' + ctrlcom + '_EmployerInfo1_hdncmpdocname').value = 'OPD';
            document.getElementById('' + ctrlcom + '_uccorporate_EmployerInfo1_hdnOPDBlock').value = "OPD";
            tdempdue[0].style.display = 'block';
            document.getElementById('' + ctrlcom + '_Address1_hdndocname').value = "OP";
            if (getParameterByName("MODE") != "VIEW") {
                $('#' + ctrlcom + '_headerControl1_imgadd').css('display', 'none');
                $('#' + ctrlcom + '_headerControl1_imgbtnEdit').css('display', 'none');
                $('#' + ctrlcom + '_headerControl1_imgdelete').css('display', 'none');
                document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnDocName').value = 'OPQUICK';
                document.getElementById('' + ctrlcom + '_uccorporate_hdnDocName').value = 'OPQUICK';
                document.getElementById('' + ctrlcom + '_ucReferal_hdndocname').value = "OPQUICK";
                divprereg.style.display = 'none';
                document.getElementById('' + ctrlcom + '_ddlPatientType').value = '1';
                if (document.getElementById('' + ctrlcom + '_ddlPatientType').value == '1') {
                    document.getElementById('' + ctrlcom + '_UCServices_divrptDispatch').disabled = true;
                }
                document.getElementById('' + ctrlcom + '_UCServices_divrptDispatch').value = 2;
                if (document.getElementById('' + ctrlcom + '_hdnQstrID').value == '') {
                    OnPageValidation(); OnQuickRefValidation(); OnddlProofChnages();
                }

                document.getElementById('' + ctrlcom + '_ddlTitle').focus();
                if ($('#' + ctrlcom + '_hdnautowalkin').val().toUpperCase() == 'TRUE') {
                    $('#' + ctrlcom + '_ucReferal_ddlreferral').val(1);
                    SetReferalContextKey(ctl00_ContentPlaceHolder1_ucReferal_ddlreferral);
                    MCISearchoptionsChange();
                }
                if (VisitTypes.length == 0) {
                    BindVisitTypes();
                }
                ServicesAutoContextKey();


                document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnDocName').value = 'OPQUICK';
                $('[id*=txtServiceName]').attr('tabindex', '36');
                $('#' + ctrlcom + '_ddlPatientType').val('1');
                document.getElementById('' + ctrlcom + '_UCServices_hdnSrvFormName').value = 'OPQUICK'
                CmpGridColumnsShowHide();
                OnDdldscntype();
                SetEmergencySlots();

                document.getElementById('' + ctrlcom + '_EmployerInfo1_btnCmpReg').style.display = 'none';
                document.getElementById('ctl00_hdnTokenType').value = '3';
                var Counter_Id = $('[id$=ddlCounter]').val();
                var ServiceTypeId = '3';
                var Mechine_Name = document.getElementById('ctl00_hdnClientMechineName').value;
                document.getElementById('' + ctrlcom + '_UCServices_HdnPri1').value = '0';
                document.getElementById('' + ctrlcom + '_UCServices_HdnPri2').value = '0';
                document.getElementById('' + ctrlcom + '_UCServices_HdnPri3').value = '0';
                document.getElementById('' + ctrlcom + '_UCServices_HdnPri4').value = '0';
                document.getElementById('' + ctrlcom + '_hdnNCountryID').value = document.getElementById('' + ctrlcom + '_ddlNationality').value;
                document.getElementById('' + ctrlcom + '_EmployerInfo1_hdnOPDBlock').value = 'Y';
                document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnOPDState').value = 'Y';
                /*patient category concept*/
                var setpatcat = $('[id*=hdnpatcatpolicy]').val(); //company policis
                if (setpatcat == '' || setpatcat == null || setpatcat == undefined || setpatcat == 'undefined') setpatcat = 0;
                var hdnallowtariffslcn = $('[id*=hdnallowtariffslcn]').val().toLowerCase();
                if (hdnallowtariffslcn == 'true' && setpatcat != "0") {
                    $("table[id*=UCServices_gvServices] tr:has(td)").each(function () {
                        $(this).closest('tr').find('input[type=hidden][id*=hdnpatcatid]').val(setpatcat);
                    });
                    $('[id*=ctl00_ContentPlaceHolder1_UCServices_ddlpatcat]').val(setpatcat);
                    ChangeTarifByPatcat();
                    OnNullValue(ctl00_ContentPlaceHolder1_UCServices_ddlpatcat);
                }
            }
            if (document.getElementById('' + ctrlcom + '_chk_old').checked != true) {
                var ddlDisplayName = document.getElementById('' + ctrlcom + '_hdnDisplayNameSetting');
                ddlDisplayName = ddlDisplayName.value;
                if (ddlDisplayName == 'First Name And Last Name') {
                    document.getElementById('' + ctrlcom + '_txtMiddleName').disabled = true;
                }
                else if (ddlDisplayName == 'First Name') {
                    document.getElementById('' + ctrlcom + '_txtMiddleName').disabled = true;
                    document.getElementById('' + ctrlcom + '_txtLastName').disabled = true;
                }
            }
        }

        if (document.getElementById('ctl00_ContentPlaceHolder1_hdnKineNameMandatary').value != 'Y') {
            document.getElementById('ctl00_ContentPlaceHolder1_ddlResPerson').className = 'grey';
            document.getElementById('ctl00_ContentPlaceHolder1_txtResPerson').className = 'grey';
        }
        if (document.getElementById('ctl00_ContentPlaceHolder1_hdndtrmandatary').value != 'YES') {
            document.getElementById('ctl00_ContentPlaceHolder1_ucConsultant_txtSearchControl').className = 'grey';
        }
        DivSrvGrpCncn.style.display = 'none';
        document.getElementById('' + ctrlcom + '_ucReferal_ucreferalname_txtSearchControl').tabIndex = 27;
        document.getElementById('' + ctrlcom + '_UCServices_ucbillno_txtSearchControl').className = 'grey';
        Ontabindex();
        return false;
    }
    
}
function OnPageValidation() {
    var DueAuthd = document.getElementById('' + ctrlcom + '_ReceiptControl2_Search3_txtSearchControl').disabled == true;
    var DueAuth = document.getElementById('' + ctrlcom + '_ReceiptControl2_Search3_txtSearchControl').value;
    if (DueAuth == undefined || DueAuth == null) { DueAuth = ''; }
    var Client_Name = document.getElementById('' + ctrlcom + '_headerControl1_hdnclientNameFor').value;
    if (document.getElementById('' + ctrlcom + '_hdnpre_regi').value == '5') {
        OnOSPValidation();
    } else {
        var _chkValidation = true;
        var _ctrls = new Array();
        _ctrls[0] = 'ctl00_ContentPlaceHolder1_ddlTitle';
        if (DueAuthd == false && DueAuth == '') {
            _ctrls[50] = 'ctl00_ContentPlaceHolder1_ReceiptControl2_txtquickremarks';
        }
        _ctrls[51] = 'ctl00_ContentPlaceHolder1_ReceiptControl2_txtRemarks';
        var sel_nation = $('#' + ctrlcom + '_ddlNationality').val();
        var def_nation = $('#' + ctrlcom + '_hdnddlNationality').val();
        if (sel_nation != def_nation && sel_nation != undefined || sel_nation != 'undefined')
        { }
        else {
            _ctrls[59] = 'ctl00_ContentPlaceHolder1_Address1_ddrelationaddr';
        }
        _ctrls[61] = 'ctl00_ContentPlaceHolder1_uccorporate_ddlPaymentBy';
        var ddlDisplayName = document.getElementById('' + ctrlcom + '_hdnDisplayNameSetting');

        //  _ctrls[1] = 'ctl00_ContentPlaceHolder1_txtFirstName';
        if (ddlDisplayName.value == 'First Name And Middle Name And Last Name') {
            var FirstMiddleLastName = document.getElementById('ctl00_ContentPlaceHolder1_hdnFirstMiddleLastName').value;
            FirstMiddleLastName = FirstMiddleLastName.split(',');
            for (var i = 0; i < FirstMiddleLastName.length; i++) {
                if (FirstMiddleLastName[i] == 1) {
                    _ctrls[1] = 'ctl00_ContentPlaceHolder1_txtFirstName';
                }
                if (FirstMiddleLastName[i] == 2) {
                    _ctrls[2] = 'ctl00_ContentPlaceHolder1_txtMiddleName';
                }
                if (FirstMiddleLastName[i] == 3) {
                    _ctrls[3] = 'ctl00_ContentPlaceHolder1_txtLastName';
                }


            }
        }
        /*else if (ddlDisplayName.value == 'First Name And Middle Name') {
        _ctrls[2] = 'ctl00_ContentPlaceHolder1_txtMiddleName';
        }*/
        else if (ddlDisplayName.value == 'First Name And Last Name') {
            var FirstLastName = document.getElementById('ctl00_ContentPlaceHolder1_hdnFirstLastName').value;
            FirstLastName = FirstLastName.split(',');
            for (var i = 0; i < FirstLastName.length; i++) {
                if (FirstLastName[i] == 1) {
                    _ctrls[1] = 'ctl00_ContentPlaceHolder1_txtFirstName';
                }
                if (FirstLastName[i] == 2) {
                    _ctrls[2] = 'ctl00_ContentPlaceHolder1_txtLastName';
                }
            }
        }
        else if (ddlDisplayName == 'First Name') {
            _ctrls[1] = 'ctl00_ContentPlaceHolder1_txtFirstName';
        }
        _ctrls[4] = 'ctl00_ContentPlaceHolder1_newAgeUc_txtDob';
        //  _ctrls[5] = 'ctl00_ContentPlaceHolder1_ddlResPerson';
        //_ctrls[6] = 'ctl00_ContentPlaceHolder1_txtResPerson';

        if (document.getElementById('' + ctrlcom + '_pre_regi').value != 5 && document.getElementById('' + ctrlcom + '_hdndtrmandatary').value == 'YES') {
            _ctrls[7] = 'ctl00_ContentPlaceHolder1_ucConsultant_txtSearchControl';
        }
        if (document.getElementById('' + ctrlcom + '_hdnRefReq').value == 'Yes') {
            _ctrls[8] = 'ctl00_ContentPlaceHolder1_ucReferal_ddlreferral';
            if (document.getElementById('' + ctrlcom + '_ucReferal_ddlreferral').value != '1' && document.getElementById('' + ctrlcom + '_ucReferal_ddlreferral').value != '0') {
                _ctrls[9] = 'ctl00_ContentPlaceHolder1_ucReferal_ucreferalname_txtSearchControl';
                document.getElementById('' + ctrlcom + '_ucReferal_ucreferalname_txtSearchControl').disabled = false;
                document.getElementById('lk_btn_ctl00_ContentPlaceHolder1_ucReferal_ucreferalname').disabled = false;
            }
            else {
                document.getElementById('' + ctrlcom + '_ucReferal_ucreferalname_txtSearchControl').disabled = true;
                document.getElementById('lk_btn_ctl00_ContentPlaceHolder1_ucReferal_ucreferalname').disabled = true;
                document.getElementById('' + ctrlcom + '_ucReferal_ucreferalname_txtSearchControl').className = 'grey';
            }
        }
        var def_nation = $('#' + ctrlcom + '_hdnddlNationality').val();
        var sel_nation = $('#' + ctrlcom + '_ddlNationality').val();
        if (def_nation == sel_nation && sel_nation != undefined || sel_nation != 'undefined') {
            _ctrls[10] = 'ctl00_ContentPlaceHolder1_Address1_AreaUserControl1_txtSearchControl';
        }
        if (document.getElementById('' + ctrlcom + '_headerControl1_hdnMobileMadatory').value == 'True') {
            _ctrls[11] = 'ctl00_ContentPlaceHolder1_Address1_txtMobile1';
        }
        _ctrls[12] = 'ctl00_ContentPlaceHolder1_ddlNationality';
        _ctrls[13] = 'ctl00_ContentPlaceHolder1_ddlPatientType';
        _ctrls[14] = 'ctl00_ContentPlaceHolder1_EmployerInfo1_uctpa_txtSearchControl';
        var pattype = document.getElementById('' + ctrlcom + '_ddlPatientType').value;
        if (Client_Name.trim() != 'YASHODA' && Client_Name.trim() != 'LNT') {
            if (pattype == "2" || pattype == "5" || pattype == "9") {
                _ctrls[19] = 'ctl00_ContentPlaceHolder1_EmployerInfo1_txtEmploeeID';
                _ctrls[20] = 'ctl00_ContentPlaceHolder1_EmployerInfo1_txtEmployeeName';
                _ctrls[21] = 'ctl00_ContentPlaceHolder1_EmployerInfo1_txtEmpMRNo';
                _ctrls[22] = 'ctl00_ContentPlaceHolder1_EmployerInfo1_txtEmpCardValidity';
            } if (pattype == "8") {
                _ctrls[20] = 'ctl00_ContentPlaceHolder1_EmployerInfo1_txtEmployeeName';
                _ctrls[21] = 'ctl00_ContentPlaceHolder1_EmployerInfo1_txtEmpMRNo';
                document.getElementById('' + ctrlcom + '_EmployerInfo1_txtEmploeeID').className = 'grey';
                document.getElementById('' + ctrlcom + '_EmployerInfo1_txtEmpCardValidity').className = 'grey';
                document.getElementById('' + ctrlcom + '_EmployerInfo1_txtdateofissue').className = 'grey';
            }
        }
        var ConscAmtPnl = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatgrossamt').value;
        var DueAmt = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatdue').value;
        var cashAmt = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtcashAmt').value;

        if (parseInt(DueAmt) > 0) {
            _ctrls[20] = 'ctl00_ContentPlaceHolder1_ReceiptControl2_Search3_txtSearchControl';
        }
        _ctrls[21] = 'ctl00_ContentPlaceHolder1_ddlGender';
        _ctrls[22] = 'ctl00_ContentPlaceHolder1_UCServices_divrptDispatch';
        if (document.getElementById('' + ctrlcom + '_ddlTitle').value == 3) {
            _ctrls[23] = 'ctl00_ContentPlaceHolder1_ddlMaritalStatus';
        }
        if (Client_Name.trim() != 'YASHODA' && Client_Name.trim() != 'LNT') {
            _ctrls[23] = 'ctl00_ContentPlaceHolder1_EmployerInfo1_txtdateofissue';
        }
       // if (document.getElementById('' + ctrlcom + '_hdnRefReq').value == "Yes") {
            //document.getElementById('' + ctrlcom + '_ucReferal_ddlreferral').value = "1";
           // _ctrls[24] = 'ctl00_ContentPlaceHolder1_ucReferal_ucreferalname_txtSearchControl';
            //document.getElementById('' + ctrlcom + '_ucReferal_ucreferalname_txtSearchControl').disabled = false;
           // document.getElementById('lk_btn_ctl00_ContentPlaceHolder1_ucReferal_ucreferalname').disabled = false;

            // SetReferalContextKey(document.getElementById('' + ctrlcom + '_ucReferal_ddlreferral'));

       // }
        _ctrls[25] = 'ctl00_ContentPlaceHolder1_Address1_txtAddress1';

        var _ispatcat = $('[id*=hdnallowtariffslcn]').val().toLowerCase();
        if (_ispatcat == 'true' && !$('#' + ctrlcom + '_chk_old').prop('checked'))
            _ctrls[26] = 'ctl00_ContentPlaceHolder1_UCServices_ddlpatcat';

        _ctrls[27] = 'ctl00_ContentPlaceHolder1_ddlResPerson';
        _ctrls[28] = 'ctl00_ContentPlaceHolder1_txtResPerson';
        var preregstra = document.getElementById('ctl00_ContentPlaceHolder1_pre_regi').value;

        if (preregstra == "2" || preregstra == "1") {
            _ctrls[29] = 'ctl00_ContentPlaceHolder1_UCprereg_txtSearchControl';
        }
        if (document.getElementById('ctl00_ContentPlaceHolder1_hdnmailmandatary').value == 'Y') {
            _ctrls[30] = 'ctl00_ContentPlaceHolder1_Address1_txtemail';
        }

        for (var i = 0; i < _ctrls.length; i++) {
            var ctrl = document.getElementById(_ctrls[i]);
            if (OnNullValue(ctrl) == false) {
                _chkValidation = false;
            }
            else {
                ctrl.className = 'grey';
            }
        }

        return _chkValidation;
    }
}
/*Quick Referal mandatory fields*/
function OnQuickRefValidation() {
    var _chkValidation = true;
    var ctrls = new Array();
    ctrls[0] = 'ctl00_ContentPlaceHolder1_ucReferal_ddlRefSourceType';
    ctrls[1] = 'ctl00_ContentPlaceHolder1_ucReferal_txtRefName';
    ctrls[2] = 'ctl00_ContentPlaceHolder1_ucReferal_txtRefClass';
  //  ctrls[3] = 'ctl00_ContentPlaceHolder1_ucReferal_txtRefMobile';
    ctrls[4] = 'ctl00_ContentPlaceHolder1_ucReferal_Lookuparea_txtSearchControl';
    for (var i = 0; i < ctrls.length; i++) {
        var ctrl = document.getElementById(ctrls[i]);
        if (OnNullValue(ctrl) == false) {
            _chkValidation = false;
        }
    }
    return _chkValidation;
}
function CmpGridColumnsShowHide() {
    if (document.getElementById('' + ctrlcom + '_UCServices_hdnPrePrintedBarcodeReq').value == 'Yes') {
        classDisplay();
    }
    else {
        classNone();
    }
    if (document.getElementById('' + ctrlcom + '_ddlPatientType').value == '2') {
        classDisplayCmpAmts();
    }
    else {
        classHideCmpAmts();
    }
}
function OnddlProofChnages() {
    var _proofid = document.getElementById('' + ctrlcom + '_ddlproofid').value;
    document.getElementById('' + ctrlcom + '_txtPassprotno').className = 'grey';
    document.getElementById('' + ctrlcom + '_txtIssueDt').className = 'grey';
    document.getElementById('' + ctrlcom + '_txtExpiryDt').className = 'grey';
    document.getElementById('' + ctrlcom + '_txtissuedat').className = 'grey';
    if (document.getElementById('' + ctrlcom + '_ddlNationality').value != 2) {
        document.getElementById('' + ctrlcom + '_txtPassprotno').value = '';
        document.getElementById('' + ctrlcom + '_txtIssueDt').value = '';
        document.getElementById('' + ctrlcom + '_txtExpiryDt').value = '';
        document.getElementById('' + ctrlcom + '_txtissuedat').value = '';
    }
    document.getElementById('' + ctrlcom + '_txtPassprotno').disabled = true;
    document.getElementById('' + ctrlcom + '_txtIssueDt').disabled = true;
    document.getElementById('' + ctrlcom + '_txtExpiryDt').disabled = true;
    document.getElementById('' + ctrlcom + '_txtissuedat').disabled = true;
    if (_proofid == "0") {
        document.getElementById('' + ctrlcom + '_txtSSN').className = 'grey';
        document.getElementById('' + ctrlcom + '_txtSSN').value = '';
        document.getElementById('' + ctrlcom + '_txtSSN').disabled = true;
        if (document.getElementById('' + ctrlcom + '_ddlNationality').value == 2) {

        }
        else {
            //            document.getElementById('' + ctrlcom + '_txtPassprotno').value = '';
            //            document.getElementById('' + ctrlcom + '_txtIssueDt').value = '';
            //            document.getElementById('' + ctrlcom + '_txtExpiryDt').value = '';
            //            document.getElementById('' + ctrlcom + '_txtissuedat').value = '';
            //            document.getElementById('' + ctrlcom + '_txtPassprotno').disabled = true;
            //            document.getElementById('' + ctrlcom + '_txtIssueDt').disabled = true;
            //            document.getElementById('' + ctrlcom + '_txtExpiryDt').disabled = true;
            //            document.getElementById('' + ctrlcom + '_txtissuedat').disabled = true;
        }
    }
    else {
        document.getElementById('' + ctrlcom + '_txtSSN').disabled = false;
        document.getElementById('' + ctrlcom + '_txtSSN').className = 'red';
        if (document.getElementById('' + ctrlcom + '_ddlNationality').value == 2) {

            document.getElementById('' + ctrlcom + '_txtPassprotno').disabled = false;
            document.getElementById('' + ctrlcom + '_txtIssueDt').disabled = false;
            document.getElementById('' + ctrlcom + '_txtExpiryDt').disabled = false;
            document.getElementById('' + ctrlcom + '_txtissuedat').disabled = false;
            document.getElementById('' + ctrlcom + '_txtPassprotno').className = 'red';
            document.getElementById('' + ctrlcom + '_txtIssueDt').className = 'red';
            document.getElementById('' + ctrlcom + '_txtExpiryDt').className = 'red';
            document.getElementById('' + ctrlcom + '_txtissuedat').className = 'red';
        }
    }
    if (document.getElementById('' + ctrlcom + '_ddlproofid').value == "6") {
        document.getElementById('' + ctrlcom + '_txtPassprotno').className = 'red';
        document.getElementById('' + ctrlcom + '_txtIssueDt').className = 'red';
        document.getElementById('' + ctrlcom + '_txtExpiryDt').className = 'red';
        document.getElementById('' + ctrlcom + '_txtissuedat').className = 'red';
        document.getElementById('' + ctrlcom + '_txtSSN').className = 'grey';
        //        document.getElementById('' + ctrlcom + '_txtPassprotno').focus();
        document.getElementById('' + ctrlcom + '_txtSSN').value = '';
        document.getElementById('' + ctrlcom + '_txtSSN').disabled = true;
        document.getElementById('' + ctrlcom + '_txtPassprotno').disabled = false;
        document.getElementById('' + ctrlcom + '_txtIssueDt').disabled = false;
        document.getElementById('' + ctrlcom + '_txtExpiryDt').disabled = false;
        document.getElementById('' + ctrlcom + '_txtissuedat').disabled = false;
    }
    else {
        document.getElementById('' + ctrlcom + '_txtSSN').disabled = false;
        if (document.getElementById('' + ctrlcom + '_ddlNationality').value == 2) {
        }
        else {
            document.getElementById('' + ctrlcom + '_txtPassprotno').className = 'grey';
            document.getElementById('' + ctrlcom + '_txtIssueDt').className = 'grey';
            document.getElementById('' + ctrlcom + '_txtExpiryDt').className = 'grey';
            document.getElementById('' + ctrlcom + '_txtissuedat').className = 'grey';
            document.getElementById('' + ctrlcom + '_txtPassprotno').value = '';
            document.getElementById('' + ctrlcom + '_txtIssueDt').value = '';
            document.getElementById('' + ctrlcom + '_txtExpiryDt').value = '';
            document.getElementById('' + ctrlcom + '_txtissuedat').value = '';
            document.getElementById('' + ctrlcom + '_txtPassprotno').disabled = true;
            document.getElementById('' + ctrlcom + '_txtIssueDt').disabled = true;
            document.getElementById('' + ctrlcom + '_txtExpiryDt').disabled = true;
            document.getElementById('' + ctrlcom + '_txtissuedat').disabled = true;
        }
    }
    if (_proofid == "0") {
        document.getElementById('' + ctrlcom + '_txtSSN').className = 'grey';
        document.getElementById('' + ctrlcom + '_txtSSN').value = '';
        document.getElementById('' + ctrlcom + '_txtSSN').disabled = true;
    }
    if (document.getElementById('' + ctrlcom + '_ddlproofid').value != "6" && document.getElementById('' + ctrlcom + '_ddlproofid').value != "0") {
        if (document.getElementById('' + ctrlcom + '_txtSSN').value != '' && document.getElementById('' + ctrlcom + '_txtSSN').value != null && document.getElementById('' + ctrlcom + '_txtSSN').value != undefined) {
            document.getElementById('' + ctrlcom + '_txtSSN').className = 'grey';
        }
    }
}
function ClearServicesGrid() {
    arrServiceIds = new Array();
    arrRequisations = new Array();
    var gridID = document.getElementById('' + ctrlcom + '_UCServices_gvServices');
    $("table[id$=UCServices_gvServices] tr:has(td)").each(function () {
        var rowIndex = gridID.rows.length;
        var checkRowIndex = rowIndex - 1;
        $('[id$=UCServices_gvServices] tr').filter(':eq(' + checkRowIndex + ')').remove();
    });
    //ServicesAutoContextKey();
}
function onDeleteCasualityDoc() {
    var _doctor_id = document.getElementById('' + ctrlcom + '_hdnCasulityDocID').value;
    if (_doctor_id == null || _doctor_id == undefined || _doctor_id == '') { _doctor_id = 0; }
    if (_doctor_id != '0') {
        $("table[id$=UCServices_gvServices] tr:has(td)").each(function (e) {
            var docid = $(this).closest('tr').find('input[type=hidden][id*=hdnDoctorID]').val();
            if (_doctor_id == docid) {
                $(this).closest('tr').remove();
                arrServiceIds = $.grep(arrServiceIds, function (value) {
                    return value != docid;
                });
            }
        });
        AssignSno(0);
    }
    return false;
}
var ddlseltreftype = new Array();
var oldRegType = 0;
function selectRegType(obj) {
//    Clearpopup();
    var pettypeval = document.getElementById('' + ctrlcom + '_ddlPatientType').value;
    var regtypee = document.getElementById('' + ctrlcom + '_ddlRegType').value;
    if (regtypee == 16) {
        if (pettypeval == 2) {
            $(".stoast").toastText("warning", "OSP patient does not allow Corporate Registation", 5, 3);
            document.getElementById('' + ctrlcom + '_ddlRegType').value = 2;
            return false;

        }
    }
    //    var reg_type = $('#' + ctrlcom + '_hdnregtypemain').val();
    //    if (reg_type == undefined || reg_type == null || reg_type == '') { reg_type = 0; }
    //    if (reg_type == 0)
    //    { }
    //    else {
    //        obj = reg_type;
    //        $('#' + ctrlcom + '_ddlRegType').val(reg_type);
    //     }

    onDeleteCasualityDoc(); //$('#offVipDetails').show();
    if (document.getElementById('' + ctrlcom + '_ReceiptControl2_gvMultipleConcession').rows.length > 2) {
        document.getElementById('' + ctrlcom + '_ReceiptControl2_chkismultiple').checked = false;
        OnMultipleDiscGrid();
    }
    document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlDiscountType').value = 0;
    CheckCardDisable(document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlDiscountType'));

    if (document.getElementById('' + ctrlcom + '_ReceiptControl2_gvMultipleConcession').rows.length == 1) {
        fn_AddRowWithDetais();
    }
    var renewal = document.getElementById('' + ctrlcom + '_chkisold');
    document.getElementById('' + ctrlcom + '_newAgeUc_txtHH').value = '';
    document.getElementById('' + ctrlcom + '_newAgeUc_txtMM').value = '';
    document.getElementById('' + ctrlcom + '_newAgeUc_imgCal').style.display = 'block';
    document.getElementById('pediatric').style.display = 'none';
    document.getElementById('YYMMDD').style.display = 'block';
    ddlregtype = document.getElementById('' + ctrlcom + '_ddlRegType');
    ddlregtypeIndex = document.getElementById('' + ctrlcom + '_ddlRegType').selectedIndex;
    document.getElementById('' + ctrlcom + '_UCServices_hdnCasulity').value = 'N';
    var val = ddlregtypeIndex;
    document.getElementById('' + ctrlcom + '_StaffRelation').value = '0';
    document.getElementById('' + ctrlcom + '_UcStaffName_txtSearchControl').value = '';
    document.getElementById('' + ctrlcom + '_UcStaffName__hiddenID').value = '';
    document.getElementById('' + ctrlcom + '_UcStaffName__hiddenText').value = '';
    document.getElementById('' + ctrlcom + '_UcStaffName_txtSearchControl').className = 'red';
    document.getElementById('' + ctrlcom + '_StaffRelation').disabled = true;
    document.getElementById('' + ctrlcom + '_UcFamilyReff_txtSearchControl').disabled = true;
    document.getElementById('' + ctrlcom + '_UcFamilyReff_txtSearchControl').value = '';
    document.getElementById('' + ctrlcom + '_UcFamilyReff__hiddenID').value = '';
    document.getElementById('' + ctrlcom + '_UcFamilyReff__hiddenText').value = '';
    document.getElementById('' + ctrlcom + '_ddlhctype').value = 0;
    document.getElementById('' + ctrlcom + '_UcStaffName_txtSearchControl').disabled = false;
    if (ddlregtype[val].innerHTML == 'Staff') {

        Clearpatpopup(); ClearAddrDtls();
        document.getElementById('' + ctrlcom + '_StaffRelation').value = '0';
        document.getElementById('' + ctrlcom + '_UcStaffName_txtSearchControl').value = '';
        document.getElementById('' + ctrlcom + '_UcStaffName__hiddenID').value = '';
        document.getElementById('' + ctrlcom + '_UcStaffName__hiddenText').value = '';
        document.getElementById('' + ctrlcom + '_UcStaffName_txtSearchControl').className = 'red';
        document.getElementById('' + ctrlcom + '_StaffRelation').disabled = true;
        
        document.getElementById('' + ctrlcom + '_UcFamilyReff_txtSearchControl').disabled = true;
        document.getElementById('' + ctrlcom + '_UcFamilyReff_txtSearchControl').value = '';
        document.getElementById('' + ctrlcom + '_UcFamilyReff__hiddenID').value = '';
        document.getElementById('' + ctrlcom + '_UcFamilyReff__hiddenText').value = '';
        document.getElementById('lk_btn_ctl00_ContentPlaceHolder1_UcFamilyReff').disabled = true;
        document.getElementById('trstaff').style.display = 'table-row';
        document.getElementById('' + ctrlcom + '_lbltypeName').innerHTML = "Staff Name";
        document.getElementById('' + ctrlcom + '_lbltypeRelation').innerHTML = "Staff Relation";
        document.getElementById('' + ctrlcom + '_ddlhctype').value = 0;
        document.getElementById('divHC').style.display = 'none';
        document.getElementById('divStaff').style.display = 'block';
        OnViphiding();
        if (renewal.checked == true) { RenewalValidation(); }
        $('#offVipDetails').hide();
    }
    else {
        document.getElementById('' + ctrlcom + '_StaffRelation').disabled = false;
        document.getElementById('' + ctrlcom + '_UcFamilyReff_txtSearchControl').disabled = false;
        document.getElementById('lk_btn_ctl00_ContentPlaceHolder1_UcFamilyReff').disabled = false;
        document.getElementById('trstaff').style.display = 'none';
    
    }

    if (document.getElementById('ctl00_ContentPlaceHolder1_hdnClientName').value.toLowerCase() == 'ssbgmc') {
        if (ddlregtype[val].innerHTML.toLowerCase() == 'foreign') {
            var mytext = 'NON GOANS';
            $('#ctl00_ContentPlaceHolder1_UCServices_ddlpatcat option').map(function () {

                if ($(this).text() == mytext) return this;


            }).prop('selected', 'selected');

            document.getElementById('ctl00_ContentPlaceHolder1_UCServices_ddlpatcat').disabled = true;

            $("#ctl00_ContentPlaceHolder1_ddlproofid option:eq(0)").attr('selected', 'selected');
            document.getElementById('ctl00_ContentPlaceHolder1_txtSSN').value = "";
            OnNullValue(document.getElementById('ctl00_ContentPlaceHolder1_txtSSN'));

            var setpatcat = $('[id*=hdnpatcatpolicy]').val(); //company policis
            var _ispatcat = $('[id*=hdnallowtariffslcn]').val().toLowerCase();
            if (setpatcat == '' || setpatcat == null || setpatcat == undefined || setpatcat == 'undefined') setpatcat = 0;
            var newpatcat = $("#ctl00_ContentPlaceHolder1_UCServices_ddlpatcat").val();
            if (newpatcat == '' || newpatcat == null || newpatcat == undefined || newpatcat == 'undefined') newpatcat = '';
            if (_ispatcat == 'true' && newpatcat == '') {

                $("#ctl00_ContentPlaceHolder1_UCServices_ddlpatcat").val(setpatcat);
                ChangeTarifByPatcat();
                document.getElementById('ctl00_ContentPlaceHolder1_UCServices_ddlpatcat').disabled = false;
            }



        } else {


            var mytext = 'GOANS';
            if (ddlregtype[val].innerHTML.toLowerCase() != 'foreign') {
                $('#ctl00_ContentPlaceHolder1_UCServices_ddlpatcat option').map(function () {

                    if ($(this).text() == mytext) return this;


                }).prop('selected', 'selected');
            }
            document.getElementById('ctl00_ContentPlaceHolder1_UCServices_ddlpatcat').disabled = false;
            var setpatcat = $('[id*=hdnpatcatpolicy]').val(); //company policis
            var _ispatcat = $('[id*=hdnallowtariffslcn]').val().toLowerCase();
            if (setpatcat == '' || setpatcat == null || setpatcat == undefined || setpatcat == 'undefined') setpatcat = 0;
            var newpatcat = $("#ctl00_ContentPlaceHolder1_UCServices_ddlpatcat").val();
            if (newpatcat == '' || newpatcat == null || newpatcat == undefined || newpatcat == 'undefined') newpatcat = '';
            if (_ispatcat == 'true' && newpatcat == '') {
                ChangeTarifByPatcat();
                $("#ctl00_ContentPlaceHolder1_UCServices_ddlpatcat").val(setpatcat);

            }

        }
    }


    if (ddlregtype[val].innerHTML == 'Pediatric') {
        document.getElementById('' + ctrlcom + '_newAgeUc_imgCal').style.display = 'block';
        document.getElementById('pediatric').style.display = 'block';
        document.getElementById('YYMMDD').style.display = 'none';
        if (document.getElementById('' + ctrlcom + '_hdndobformat').value == "dd-MMM-yyyy") {
            document.getElementById('' + ctrlcom + '_newAgeUc_txtDob').value = new Date().format('dd-MMM-yyyy');
        } else {
            document.getElementById('' + ctrlcom + '_newAgeUc_txtDob').value = new Date().format('dd-MM-yyyy');
        }
        document.getElementById('' + ctrlcom + '_newAgeUc_txtHH').value = new Date().format('hh');
        document.getElementById('' + ctrlcom + '_newAgeUc_txtMM').value = new Date().format('mm');
        document.getElementById('' + ctrlcom + '_ddlTitle').value = 0;
        document.getElementById('' + ctrlcom + '_ddlGender').value = 0;
        document.getElementById('' + ctrlcom + '_ddlMaritalStatus').value = 0;
    }
    if (ddlregtype[val].innerHTML == 'HealthCheck') {
        document.getElementById('' + ctrlcom + '_Address1_ChkMlcStatus').disabled = true;
    }
    else {
        document.getElementById('' + ctrlcom + '_Address1_ChkMlcStatus').disabled = false;
    }
    if (ddlregtype[val].innerHTML == 'StaffDependent') {
        $('#offVipDetails').hide();
        Clearpatpopup(); ClearAddrDtls(); clearRefDtls(); ClearServicesGrid();
        document.getElementById('' + ctrlcom + '_UcStaffName_txtSearchControl').className = 'red';
        document.getElementById('' + ctrlcom + '_UcStaffName_txtSearchControl').value = '';
        document.getElementById('' + ctrlcom + '_UcStaffName__hiddenID').value = '';
        document.getElementById('' + ctrlcom + '_UcStaffName__hiddenText').value = '';
        document.getElementById('' + ctrlcom + '_StaffRelation').disabled = false;
        document.getElementById('' + ctrlcom + '_UcFamilyReff_txtSearchControl').disabled = true;
        document.getElementById('lk_btn_ctl00_ContentPlaceHolder1_UcFamilyReff').disabled = true;
        document.getElementById('' + ctrlcom + '_UcFamilyReff_txtSearchControl').value = '';
        document.getElementById('' + ctrlcom + '_UcFamilyReff__hiddenID').value = '';
        document.getElementById('' + ctrlcom + '_UcFamilyReff__hiddenText').value = '';
        document.getElementById('trstaff').style.display = 'table-row';
        document.getElementById('' + ctrlcom + '_lbltypeName').innerHTML = "Staff Name";
        document.getElementById('' + ctrlcom + '_lbltypeRelation').innerHTML = "Staff Relation";
        document.getElementById('' + ctrlcom + '_ddlhctype').value = 0;
        document.getElementById('divHC').style.display = 'none';
        document.getElementById('divStaff').style.display = 'block';
        OnViphiding();
        if (renewal.checked == true) { RenewalValidation(); }
    }
    else {
        document.getElementById('' + ctrlcom + '_UcStaffName_txtSearchControl').value = "";
        document.getElementById('' + ctrlcom + '_UcStaffName__hiddenID').value = '';
        document.getElementById('' + ctrlcom + '_UcStaffName__hiddenText').value = '';
        document.getElementById('' + ctrlcom + '_StaffRelation').value = '0';
    }
    if (ddlregtype[val].innerHTML == 'HealthCard') {
        $('#offVipDetails').hide();
        Clearpatpopup(); ClearAddrDtls();
        document.getElementById('' + ctrlcom + '_UcStaffName_txtSearchControl').className = 'red';
        document.getElementById('' + ctrlcom + '_UcStaffName_txtSearchControl').value = '';
        document.getElementById('' + ctrlcom + '_UcStaffName__hiddenID').value = '';
        document.getElementById('' + ctrlcom + '_UcStaffName__hiddenText').value = '';
        document.getElementById('' + ctrlcom + '_StaffRelation').disabled = false;
        document.getElementById('' + ctrlcom + '_UcFamilyReff_txtSearchControl').disabled = true;
        document.getElementById('lk_btn_ctl00_ContentPlaceHolder1_UcFamilyReff').disabled = true;
        document.getElementById('' + ctrlcom + '_UcFamilyReff_txtSearchControl').value = '';
        document.getElementById('' + ctrlcom + '_UcFamilyReff__hiddenID').value = '';
        document.getElementById('' + ctrlcom + '_UcFamilyReff__hiddenText').value = '';
        document.getElementById('trstaff').style.display = 'table-row';
        document.getElementById('' + ctrlcom + '_lbltypeName').innerHTML = "HC Type";
        document.getElementById('' + ctrlcom + '_lbltypeRelation').innerHTML = "Relation";
        document.getElementById('divHC').style.display = 'block';
        document.getElementById('divStaff').style.display = 'none';
        document.getElementById('' + ctrlcom + '_ddlhctype').value = 0;
        document.getElementById('' + ctrlcom + '_ddlhctype').className = 'red';
        document.getElementById('' + ctrlcom + '_StaffRelation').className = 'red';
        OnViphiding();
        if (renewal.checked == true) { RenewalValidation(); }
    }

    if (ddlregtype[val].innerHTML.trim() == 'IsCorporate' && ddlregtype[val].value == '9') {
        document.getElementById('' + ctrlcom + '_ddlPatientType').value = '2';
        if (obj != 'Test') {
            ddlpatienttypeChange(document.getElementById('' + ctrlcom + '_ddlPatientType'));
        }
    }
    else {
        document.getElementById('' + ctrlcom + '_ddlPatientType').value = '1';
        $('#' + ctrlcom + '_emppnl').hide();
        CompanyClearPopup();
    }
    if (ddlregtype[val].innerHTML == 'Emergency') {
        OnColorChanges();
        OnPageValidationEmergency();
        var _casuality_docid = document.getElementById('' + ctrlcom + '_hdnCasulityDocID').value;
        document.getElementById('' + ctrlcom + '_UCServices_hdnCasulity').value = 'Y';
        if (_casuality_docid == null || _casuality_docid == undefined || _casuality_docid == '') { _casuality_docid = 0; }
        if (_casuality_docid != '0') {
            GetCasualitDoctor(_casuality_docid);
        }
    }
    else {
        if (document.getElementById('' + ctrlcom + '_ddlRegType').value != '5') { OnPageValidation(); }
    }
    var ddlregtypeVal = document.getElementById('' + ctrlcom + '_ddlRegType').value;
    if (oldRegType != ddlregtypeVal) {
        ddlseltreftype = [];

    }
    if (ddlseltreftype.d == undefined) {
        GetNonAsync("Private/FrontOffice/OPDBILLNEW.aspx/GetRegFeeandValidity",
        { RegTypeVal: ddlregtypeVal },
        function (jdata) {
            oldRegType = ddlregtypeVal;
            var regfee = 0;
            if (jdata.d != null) {
                if (jdata.d.length > 0) {
                    ddlseltreftype = jdata;
                    document.getElementById('' + ctrlcom + '_txtregfee').value = jdata.d[0].REGISTRATION_FEE;
                    var validityDays = jdata.d[0].REGISTRATION_VALIDITY;
                    var _new_date = GetFutureDate(new Date().format('dd-MMM-yyyy'), validityDays);
                    var dateformat = $('#' + ctrlcom + '_hdndateformat').val();
                    var split = dateformat.split(' ');
                    var current_format = split[0];
                    document.getElementById('' + ctrlcom + '_txtregValidity').value = _new_date.format(current_format);
                    $('#' + ctrlcom + '_hdnregfee').val(jdata.d[0].REGISTRATION_FEE);
                    regfee = $('#' + ctrlcom + '_hdnregfee').val();
                    PatientRegFeeAmounts(regfee);
                }
                else {
                    if (document.getElementById('' + ctrlcom + '_ddlRegType').value == 9) {
                        $('#' + ctrlcom + '_hdnregfee').val("0");
                        GetRegFees();
                    }
                    else {
                        $(".stoast").toastText("warning", "This Registration Type Configuration Not Done.So Please Contact Administration", 5, 3);
                        document.getElementById('' + ctrlcom + '_ddlRegType').value = 2;
                        selectRegType(document.getElementById('' + ctrlcom + '_ddlRegType'));
                    }
                }
            }
            else {


            }
            if (document.getElementById('' + ctrlcom + '_ddlRegType').value == 13) {
                $("table[id$=UCServices_gvServices] tr:has(td)").each(function (e) {
                    var serviceid = $(this).closest('tr').find('input[type=hidden][id*=hdnServiceID]').val();
                    var DoctorId = $(this).closest('tr').find('input[type=hidden][id*=hdnDoctorID]').val();
                    if (serviceid == '2' && DoctorId != '') {
                        $(this).closest('tr').remove();
                    }
                    AssignSno(0);
                });
            }



            if (document.getElementById('' + ctrlcom + '_hdnRegFeeAutoFill').value == 'True') {
                document.getElementById('' + ctrlcom + '_ReceiptControl2_txtcashAmt').value = document.getElementById('' + ctrlcom + '_hdnregfee').value;
                CalculateAmount(document.getElementById('' + ctrlcom + '_ReceiptControl2_txtcashAmt'), 'Cash');
                IsEmptyReplaceWithZero(document.getElementById('' + ctrlcom + '_ReceiptControl2_txtcashAmt'));

            }

            ExtendedDisplayValues();
        },
        function () {
        });
    } else {
        jdata = ddlseltreftype;

        var regfee = 0;
        if (jdata.d != null) {
            if (jdata.d.length > 0) {
                document.getElementById('' + ctrlcom + '_txtregfee').value = jdata.d[0].REGISTRATION_FEE;
                var validityDays = jdata.d[0].REGISTRATION_VALIDITY;
                var _new_date = GetFutureDate(new Date().format('dd-MMM-yyyy'), validityDays);
                var dateformat = $('#' + ctrlcom + '_hdndateformat').val();
                var split = dateformat.split(' ');
                var current_format = split[0];
                document.getElementById('' + ctrlcom + '_txtregValidity').value = _new_date.format(current_format);
                $('#' + ctrlcom + '_hdnregfee').val(jdata.d[0].REGISTRATION_FEE);
                regfee = $('#' + ctrlcom + '_hdnregfee').val();
                PatientRegFeeAmounts(regfee);
            }
            else {
                if (document.getElementById('' + ctrlcom + '_ddlRegType').value == 9) {
                    $('#' + ctrlcom + '_hdnregfee').val("0");
                    GetRegFees();
                }
                else {
                    $(".stoast").toastText("warning", "This Registration Type Configuration Not Done.So Please Contact Administration", 5, 3);
                    document.getElementById('' + ctrlcom + '_ddlRegType').value = 2;
                    selectRegType(document.getElementById('' + ctrlcom + '_ddlRegType'));
                }
            }
        }
        else {


        }
        if (document.getElementById('' + ctrlcom + '_ddlRegType').value == 13) {
            $("table[id$=UCServices_gvServices] tr:has(td)").each(function (e) {
                var serviceid = $(this).closest('tr').find('input[type=hidden][id*=hdnServiceID]').val();
                var DoctorId = $(this).closest('tr').find('input[type=hidden][id*=hdnDoctorID]').val();
                if (serviceid == '2' && DoctorId != '') {
                    $(this).closest('tr').remove();
                }
                AssignSno(0);
            });
        }



        if (document.getElementById('' + ctrlcom + '_hdnRegFeeAutoFill').value == 'True') {
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtcashAmt').value = document.getElementById('' + ctrlcom + '_hdnregfee').value;
            CalculateAmount(document.getElementById('' + ctrlcom + '_ReceiptControl2_txtcashAmt'), 'Cash');
            IsEmptyReplaceWithZero(document.getElementById('' + ctrlcom + '_ReceiptControl2_txtcashAmt'));

        }

        ExtendedDisplayValues();




    }

    $("table[id*=gvServices] tr:has(td)").each(function (e) {
        if ($(this).closest("tr").find("input[type=hidden][id*=hdnServiceID]").val() > 0 && $(this).closest('tr').find("input[type=hidden][id*=hdnClass_Srv_ID]").val() == 0) {
            var MulRowIndex = $(this)[0].rowIndex;
            CalculateGridAmt(MulRowIndex);
        }
    });
    if (ddlregtype[val].innerHTML == 'StaffDependent' || ddlregtype[val].innerHTML == 'Staff' || ddlregtype[val].innerHTML == 'HealthCard') {
        $('#offVipDetails').hide();
    }
    else {
        $('#offVipDetails').show();
    }
    if (ddlregtype[val].innerHTML == 'DIAGNOSTICS') {
        document.getElementById('' + ctrlcom + '_UCServices_rbtnSrvsAndCons_1').checked = true;
        document.getElementById('' + ctrlcom + '_UCServices_rbtnSrvsAndCons_0').disabled = true;
        ChangeSrvToCons();
    }
    else {
        document.getElementById('' + ctrlcom + '_UCServices_rbtnSrvsAndCons_0').checked = true;
        document.getElementById('' + ctrlcom + '_UCServices_rbtnSrvsAndCons_0').disabled = false;
        ChangeSrvToCons();
    }
}
function ClearAllControls() {
    AllClearPopUp();
}

function CompanyClearPopup() {

    $('#' + ctrlcom + '_EmployerInfo1_txtEmploeeID').val('');
    //   document.getElementById('' + ctrlcom + '_EmployerInfo1_chkEmpASPatient').checked = false;
    $('#' + ctrlcom + '_EmployerInfo1_EmployerControl1_txtSearchControl').val('');
    $('#' + ctrlcom + '_EmployerInfo1_EmployerControl1__hiddenText').val('');
    $('#' + ctrlcom + '_EmployerInfo1_EmployerControl1__hiddenID').val('');
    $('#' + ctrlcom + '_EmployerInfo1_uctpa_txtSearchControl').val('');
    $('#' + ctrlcom + '_EmployerInfo1_uctpa__hiddenText').val('');
    $('#' + ctrlcom + '_EmployerInfo1_uctpa__hiddenID').val('');
    $('#' + ctrlcom + '_EmployerInfo1_txtEmployeeName').val('');
    $('#' + ctrlcom + '_EmployerInfo1_ddlrelation').val('0');
    $('#' + ctrlcom + '_EmployerInfo1_txtempgrade').val('0');
    $('#' + ctrlcom + '_EmployerInfo1_txtEmpContactNo').val('');
    $('#' + ctrlcom + '_EmployerInfo1_txtEmpMRNo').val('');
    //  $('#' + ctrlcom + '_EmployerInfo1_lblCmpCode').val('');
    //    $('#' + ctrlcom + '_EmployerInfo1_txtCmpFee').val('');
    $('#' + ctrlcom + '_hdnEmpId').val('');
    $('#' + ctrlcom + '_hdnRegCorpId').val('');
    $('#' + ctrlcom + '_hdnRegRevCorpId').val('');
    $('#' + ctrlcom + '_EmployerInfo1_txtDesignation').val('');
    $('#' + ctrlcom + '_EmployerInfo1_txtemployername').val('');
    $('#' + ctrlcom + '_EmployerInfo1_txtBranch').val('0');
    $('#' + ctrlcom + '_EmployerInfo1_txtDept').val('');
    $('#' + ctrlcom + '_EmployerInfo1_txtrefletter').val('');
    $('#' + ctrlcom + '_EmployerInfo1_txtcreditlimitamt').val('');
    $('#' + ctrlcom + '_EmployerInfo1_ddltpaname').val('');
    $('#' + ctrlcom + '_EmployerInfo1_txtletterissuedby').val('');
    $('#' + ctrlcom + '_EmployerInfo1_txtdateofissue').val('');

    $('#' + ctrlcom + '_EmployerInfo1_txtrefissuedt').val('');
    $('#' + ctrlcom + '_EmployerInfo1_txtlettervalidity').val('');
    $('#' + ctrlcom + '_EmployerInfo1_txtEmpCardValidity').val('');
}
function TpaClearPopup() {
    $('ctl00_ContentPlaceHolder1_EmployerInfo1_EmployerControl1_txtSearchControl').val('');
    $('#' + ctrlcom + '_EmployerInfo1_txtEmploeeID').val('');
    //   document.getElementById('' + ctrlcom + '_EmployerInfo1_chkEmpASPatient').checked = false;
    $('#' + ctrlcom + '_EmployerInfo1_uctpa_txtSearchControl').val('');
    $('#' + ctrlcom + '_EmployerInfo1_txtEmployeeName').val('');
    $('#' + ctrlcom + '_EmployerInfo1_ddlrelation').val('0');
    $('#' + ctrlcom + '_EmployerInfo1_txtempgrade').val('');
    $('#' + ctrlcom + '_EmployerInfo1_txtEmpContactNo').val('');
    $('#' + ctrlcom + '_EmployerInfo1_txtEmpMRNo').val('');
    // $('#' + ctrlcom + '_EmployerInfo1_lblCmpCode').val('');
    //  $('#' + ctrlcom + '_EmployerInfo1_txtCmpFee').val('');
    $('#' + ctrlcom + '_hdnEmpId').val('');
    $('#' + ctrlcom + '_hdnRegCorpId').val('');
    $('#' + ctrlcom + '_hdnRegRevCorpId').val('');
    $('#' + ctrlcom + '_EmployerInfo1_txtDesignation').val('');
    $('#' + ctrlcom + '_EmployerInfo1_txtBranch').val('');
    $('#' + ctrlcom + '_EmployerInfo1_txtDept').val('');
    $('#' + ctrlcom + '_EmployerInfo1_txtrefletter').val('');
    $('#' + ctrlcom + '_EmployerInfo1_txtcreditlimitamt').val('');
    $('#' + ctrlcom + '_EmployerInfo1_ddltpaname').val('');

    $('#' + ctrlcom + '_EmployerInfo1_txtemployername').val('');
    $('#' + ctrlcom + '_EmployerInfo1_txtletterissuedby').val('');
    $('#' + ctrlcom + '_EmployerInfo1_txtdateofissue').val('');
    document.getElementById('' + ctrlcom + '_EmployerInfo1_chkEmpDue').checked = false

}
function GetFutureDate(fromdate, duration) {
    duration = parseFloat(duration) - 1;
    var date = Date.parse(fromdate);
    var futuredate = date.addDays(parseFloat(duration));
    // var futuredate = new Date(dateVal).add(parseFloat(duration)).day();
    return futuredate;
}
function ClearCompanyInfo() {
    document.getElementById('' + ctrlcom + '_uccorporate_ddlPaymentBy').value = 0;
    document.getElementById('' + ctrlcom + '_uccorporate_CmpLookup_txtSearchControl').value = '';
    document.getElementById('' + ctrlcom + '_uccorporate_CmpLookup__hiddenText').value = '';
    document.getElementById('' + ctrlcom + '_uccorporate_CmpLookup__hiddenID').value = 0;
    document.getElementById('' + ctrlcom + '_uccorporate_txtMedcard').value = '';
    document.getElementById('' + ctrlcom + '_uccorporate_txtEmpCd').value = '';
    document.getElementById('' + ctrlcom + '_uccorporate_txtEmpName').value = '';
    document.getElementById('' + ctrlcom + '_uccorporate_ucRefLetterNo_txtSearchControl').value = '';
    document.getElementById('' + ctrlcom + '_uccorporate_ucRefLetterNo__hiddenText').value = '';
    document.getElementById('' + ctrlcom + '_uccorporate_ucRefLetterNo__hiddenID').value = '';
    document.getElementById('' + ctrlcom + '_uccorporate_txtRefLetIssueDt').value = '';
    document.getElementById('' + ctrlcom + '_uccorporate_txtRefLetIssuedby').value = '';
    document.getElementById('' + ctrlcom + '_uccorporate_txtRefLetValidDt').value = '';
    document.getElementById('' + ctrlcom + '_uccorporate_txtcreditlimitamt').value = '';
    document.getElementById('' + ctrlcom + '_uccorporate_chkEmpDue').checked = false;
    document.getElementById('' + ctrlcom + '_uccorporate_chkRefLetReq').checked = false;
    document.getElementById('' + ctrlcom + '_uccorporate_txtcreditremarks').value = '';
    document.getElementById('' + ctrlcom + '_uccorporate_txtcmpcreditop').value = '';
}
function Clearpopup() {
    if (document.getElementById('' + ctrlcom + '_hdnispatientbaneer').value == 'Y') {
        document.getElementById('' + ctrlcom + '_chk_old').checked = true;
        ClearCompanyInfo();
        ClearPatientBanerControl(); clearRefDtls(); ClearServicesGrid(); CompanyClearPopup(); ClearAllTransactionDetails();
        TpaClearPopup();
        $("table[id$=tbl_PatRequisitions]").each(function (i, j) { $(this).remove(); }); ClearingOrderInvestigations();
    }
    else {
        clearRefDtls(); ClearAddrDtls(); ClearServicesGrid(); CompanyClearPopup();
        Clearisdcode();
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
        document.getElementById('' + ctrlcom + '_Address1_chkIsSenior').checked = false;
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
    if (document.getElementById('' + ctrlcom + '_hdnispatientbaneer').value == 'N') {
        document.getElementById('' + ctrlcom + '_chk_old').checked = false;
    }
    $('#' + ctrlcom + '_TxtOspNO').val('');
    $('[id*=divOSP]').css('display', 'none');


    return false;
}
function Clearpatpopup() {
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
    //  document.getElementById('' + ctrlcom + '_EmployerInfo1_chkEmpASPatient').checked = false;
    $('#' + ctrlcom + '_EmployerInfo1_EmployerControl1_txtSearchControl').val('');
    $('#' + ctrlcom + '_EmployerInfo1_txtEmployeeName').val('');
    $('#' + ctrlcom + '_EmployerInfo1_ddlrelation').val('0');
    $('#' + ctrlcom + '_EmployerInfo1_txtempgrade').val('');
    $('#' + ctrlcom + '_EmployerInfo1_txtEmpContactNo').val('');
    $('#' + ctrlcom + '_EmployerInfo1_txtEmpMRNo').val('');
    $('#' + ctrlcom + '_EmployerInfo1_txtEmpReferalBasis').val('');
    $('#' + ctrlcom + '_EmployerInfo1_txtEmpRefBasisNo').val('');
    $('#' + ctrlcom + '_ImageUploadControl1_img').val('');
    //   $('#' + ctrlcom + '_EmployerInfo1_lblCmpCode').val('');
    //   $('#' + ctrlcom + '_EmployerInfo1_txtCmpFee').val('');
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
    document.getElementById('' + ctrlcom + '_StaffRelation').value = '0';
}
function OnDoctors(data) {

    var Fname = document.getElementById('' + ctrlcom + '_txtFirstName').value;
    var PatName = document.getElementById('' + ctrlcom + '_txtDisplayname').innerHTML
    if (PatName == undefined || PatName == null || PatName == '') { PatName = ''; }
    if (Fname == '' || Fname == undefined || Fname == null) { Fname = ''; }
    //    if (PatName == '' || Fname == '') {
    //        document.getElementById('' + ctrlcom + '_txtFirstName').focus();
    //        $(".stoast").toastText("warning", "Please Enter Patient Name", 5, 3);
    //        return false;
    //    }

    document.getElementById('' + ctrlcom + '_hdnDoctor_ID').value = data.ID;
    if (document.getElementById('' + ctrlcom + '_hdnDocName').value == 'ER') {
    }
    else {
        AssignServicesGrid();
    }
    $('#' + ctrlcom + '_ucConsultant__hiddenID').val(data.ID);

    if (data.DEPARTMENT_DESC != undefined) {
        $('#' + ctrlcom + '_ucConsultant_txtSearchControl').val(data._lktext + '-' + data.DEPARTMENT_DESC);
        $('#' + ctrlcom + '_ucConsultant__hiddenText').val(data._lktext + '-' + data.DEPARTMENT_DESC);
    }
    else {
        $('#' + ctrlcom + '_ucConsultant_txtSearchControl').val(data._lktext);
        $('#' + ctrlcom + '_ucConsultant__hiddenText').val(data._lktext);
    }
    document.getElementById('' + ctrlcom + '_hdnDoctor_ID').value = data.ID;
    document.getElementById('' + ctrlcom + '_hdnDoctorName').value = data._lktext;
    var COUNTER_DOCTOR_STS = 'N'; var IS_COUNTER_REQIRED = 'N'; var DOC_HOL_STATUS = 'N';
    var from_dt = ''; var to_dt = '';
    if (data.RESULT == undefined) {
        COUNTER_DOCTOR_STS = data.COUNTER_DOCTOR_STS;
        IS_COUNTER_REQIRED = data.IS_COUNTER_REQIRED;
        DOC_HOL_STATUS = data.DOC_HOL_STATUS;
        from_dt = data.FROM_DT; to_dt = data.TO_DT;
        if (data.DOCTOR_CD != undefined && data.DOCTOR_CD != null && data.DOCTOR_CD != '')
            document.getElementById('' + ctrlcom + '_hdnDoctorCd').value = data.DOCTOR_CD;
        else
            document.getElementById('' + ctrlcom + '_hdnDoctorCd').value = '';
        if (data.DEPARTMENT_ID != undefined && data.DEPARTMENT_ID != null && data.DEPARTMENT_ID != '')
            document.getElementById('' + ctrlcom + '_hdnDeptId').value = data.DEPARTMENT_ID;
        else
            document.getElementById('' + ctrlcom + '_hdnDeptId').value = '';
        if (data.DEPARTMENT_DESC != undefined && data.DEPARTMENT_DESC != null && data.DEPARTMENT_DESC != '')
            document.getElementById('' + ctrlcom + '_hdnDeptName').value = data.DEPARTMENT_DESC;
        else
            document.getElementById('' + ctrlcom + '_hdnDeptName').value = '';
    }
    else {
        COUNTER_DOCTOR_STS = data.RESULT.ListObjVal[0].COUNTER_DOCTOR_STS;
        IS_COUNTER_REQIRED = data.RESULT.ListObjVal[0].IS_COUNTER_REQIRED;
        DOC_HOL_STATUS = data.RESULT.ListObjVal[0].DOC_HOL_STATUS;
        from_dt = data.RESULT.ListObjVal[0].FROM_DT; to_dt = data.RESULT.ListObjVal[0].TO_DT;
        if (data.RESULT.ListObjVal[0].DOCTOR_CD != undefined && data.RESULT.ListObjVal[0].DOCTOR_CD != null && data.RESULT.ListObjVal[0].DOCTOR_CD != '')
            document.getElementById('' + ctrlcom + '_hdnDoctorCd').value = data.RESULT.ListObjVal[0].DOCTOR_CD;
        else
            document.getElementById('' + ctrlcom + '_hdnDoctorCd').value = '';
        if (data.RESULT.ListObjVal[0].DEPARTMENT_ID != undefined && data.RESULT.ListObjVal[0].DEPARTMENT_ID != null && data.RESULT.ListObjVal[0].DEPARTMENT_ID != '')
            document.getElementById('' + ctrlcom + '_hdnDeptId').value = data.RESULT.ListObjVal[0].DEPARTMENT_ID;
        else
            document.getElementById('' + ctrlcom + '_hdnDeptId').value = '';
        if (data.RESULT.ListObjVal[0].DEPARTMENT_DESC != undefined && data.RESULT.ListObjVal[0].DEPARTMENT_DESC != null && data.RESULT.ListObjVal[0].DEPARTMENT_DESC != '')
            document.getElementById('' + ctrlcom + '_hdnDeptName').value = data.RESULT.ListObjVal[0].DEPARTMENT_DESC;
        else
            document.getElementById('' + ctrlcom + '_hdnDeptName').value = '';
    }
    if (document.getElementById('' + ctrlcom + '_ddlRegType').value != '5') {
        OnPageValidation();
      //  document.getElementById('' + ctrlcom + '_ucReferal_ucreferalname_txtSearchControl').className = '';
    }
    onExtendedDoctor();
    if (IS_COUNTER_REQIRED == null || IS_COUNTER_REQIRED == '' || IS_COUNTER_REQIRED == undefined) { IS_COUNTER_REQIRED = 'N'; }
    if (COUNTER_DOCTOR_STS == null || COUNTER_DOCTOR_STS == '' || COUNTER_DOCTOR_STS == undefined) { COUNTER_DOCTOR_STS = 'N'; }

    if (document.getElementById('' + ctrlcom + '_ddlNationality').value != $('#' + ctrlcom + '_hdnddlNationality').val()) {
        document.getElementById('' + ctrlcom + '_Address1_AreaUserControl1_txtSearchControl').className = 'grey';
        document.getElementById('' + ctrlcom + '_Address1_ddrelationaddr').className = 'grey';
    }
    document.getElementById('' + ctrlcom + '_ucConsultant_txtSearchControl').className = 'grey';

    if (document.getElementById('' + ctrlcom + '_chk_old').checked == false && document.getElementById('' + ctrlcom + '_pre_regi').value != '5') {
        if (DOC_HOL_STATUS == "Y") {
            if (from_dt == null || from_dt == undefined) { from_dt = ""; }
            if (to_dt == null || to_dt == undefined) { to_dt = ""; }
            if (from_dt != "" && to_dt != "") {
                var doc_leave_from_dt = new Date(from_dt).format("dd-MMM-yyyy");
                var doc_leave_to_dt = new Date(to_dt).format("dd-MMM-yyyy");
                $(".stoast").toastText("warning", "This Doctor is in Vacation/Holiday From " + doc_leave_from_dt + " to " + doc_leave_to_dt + "!", 5, 3);
            } else {
                $(".stoast").toastText("warning", "Today Doctor is in Vacation/Holiday!", 5, 3);
            }
            return false;
        }
        if ((IS_COUNTER_REQIRED == 'N') || (IS_COUNTER_REQIRED == 'Y' && COUNTER_DOCTOR_STS == 'Y')) {
            if (document.getElementById('' + ctrlcom + '_ddlRegType').value != 13) {
                AddDoctortoGrid();
                var discount_pnt = document.getElementById('' + ctrlcom + '_uccorporate_hbncondisamount').value;
                if (discount_pnt == null || discount_pnt == '' || discount_pnt == undefined)
                { discount_pnt = 0; }
                if (parseFloat(discount_pnt) > 0) {

                    if (parseFloat(discount_pnt) > 0) {
                        //$("table[id*=UCServices_gvServices] tr:has(td)").each(function (e) {
                        var gvServices = document.getElementById('' + ctrlcom + '_UCServices_gvServices');
                        var rowIndex = gvServices.rows.length;
                        checkRowIndex = rowIndex - 1;


                        var SrvName = $('[id$=UCServices_gvServices] tr').filter(':eq(' + checkRowIndex + ')').find('[id*=txtServiceName]').val();
                        var serviceid = $('[id$=UCServices_gvServices] tr').filter(':eq(' + checkRowIndex + ')').find('input[type=hidden][id*=hdnServiceID]').val();
                        var DoctorId = $('[id$=UCServices_gvServices] tr').filter(':eq(' + checkRowIndex + ')').find('input[type=hidden][id*=hdnDoctorID]').val();
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
                            // $('[id$=UCServices_gvServices] tr').filter(':eq(' + checkRowIndex + ')').find('[id*=txtDiscP]').val(discount_pnt);
                            var pNetAmt = parseFloat(pAmt) - parseFloat(PconAmt);
                            pNetAmt = pNetAmt > 0 ? pNetAmt : 0;
                            $('[id$=UCServices_gvServices] tr').filter(':eq(' + checkRowIndex + ')').find('input[type=text][id*=txtPNAmt]').val(pNetAmt);
                            // $('[id$=UCServices_gvServices] tr').filter(':eq(' + checkRowIndex + ')').find('input[type=text][id*=txtDiscP]')[0].disabled = false;
                            // $('[id$=UCServices_gvServices] tr').filter(':eq(' + checkRowIndex + ')').find('input[type=text][id*=txtDiscAmt]')[0].disabled = false;

                            $(".col-hide tr:nth-child(3),.col-hide tr:nth-child(4),.col-hide tr:nth-child(5),.col-hide tr:nth-child(6),.col-hide tr:nth-child(7),.col-hide tr:nth-child(8),.col-hide tr:nth-child(10),.col-hide tr:nth-child(13),.col-hide tr:nth-child(14),.col-hide tr:nth-child(15)").show();
                            $("#payitem2,._quick-div").show();
                            $("._mdisc").css('width', '72%');
                            $("#payitem1,#payitem3").hide();
                            $('[id*=ConcessionAmt]')[0].style.display = 'none';
                            $("#lbladvanced").addClass("select");
                            $("#lblquick").removeClass("select");


                            //   var index_data = document.getElementById('' + ctrlcom + '_UCServices_gvServices').rows.length;

                            //index_data = index_data - 1;
                        }
                        CalculateGridAmt(checkRowIndex);
                        //});

                    }

                }
            }
            if (document.getElementById('' + ctrlcom + '_hdnAppsync').value == "true") {
                if (document.getElementById('' + ctrlcom + '_hdnisapptslotreq').value.toLowerCase() == "true") {
                    BindSlotsCalling();
                }
            }
        }
    }
    OnNullValue(document.getElementById('' + ctrlcom + '_ucConsultant_txtSearchControl'));
    hcid = document.getElementById('' + ctrlcom + '_umrPatientDetails_HdnHealthcardid').value;
    hcNo = document.getElementById('' + ctrlcom + '_umrPatientDetails_HdnHealthcardno').value;
    hcid = hcid == '' ? 0 : hcid;
    hcNo = hcNo == '' ? 0 : hcNo;
    if (hcid > 0) {
        BindPatientHealthCrad(hcid, hcNo);
    }
    else {
        var form_name = $('#' + ctrlcom + '_ReceiptControl2_hdnDocName').val();
        if (form_name == 'OP' || form_name == 'Cons') {
            var Cmp_id = document.getElementById('' + ctrlcom + '_uccorporate_CmpLookup__hiddenID').value;
        } else {
            if (form_name == 'OPQUICK') {
                if (document.getElementById('' + ctrlcom + '_chk_old').checked == true) {
                    var Cmp_id = document.getElementById('' + ctrlcom + '_uccorporate_CmpLookup__hiddenID').value;

                } else {
                    var Cmp_id = document.getElementById('' + ctrlcom + '_hdnCompanyID').value;
                }
            }
        }
        if (Cmp_id == undefined || Cmp_id == null || Cmp_id == '' || Cmp_id == "0")
        { Cmp_id = 0; }
        var patient_calss_id = document.getElementById('' + ctrlcom + '_UCServices_ddlpatcat').value;
        if (patient_calss_id == undefined || patient_calss_id == null || patient_calss_id == '' || patient_calss_id == '--select--') { patient_calss_id = 0; }
        var taiff_id = document.getElementById('' + ctrlcom + '_UCServices_ddltariff').value;
        if (taiff_id == undefined || taiff_id == null || taiff_id == '')
        { taiff_id = 1; }
        var doctor_id = data.ID;
        var paymentby = document.getElementById('' + ctrlcom + '_uccorporate_ddlPaymentBy').value;
        if (paymentby == 1) {
            if (Cmp_id == 0) {

                var con_ruleId = $('#' + ctrlcom + '_UCServices_hdnconruleid').val();
                if (con_ruleId == undefined || con_ruleId == null || con_ruleId == '')
                { con_ruleId = 0; }
                if (con_ruleId > 0) {

                    var con_rule_name = $('#' + ctrlcom + '_UCServices_hdnconrulename').val();

                    BindDataPatientconsutionrule(con_ruleId, con_rule_name);
                }




            }
        }
    }
}
/*Adding Doctor to Grid*/
function AddDoctortoGrid() {
    var hdnRegDoctorReq = document.getElementById('' + ctrlcom + '_hdnRegDoctorRequired');
    var ddlpattypchk = document.getElementById('' + ctrlcom + '_ddlPatientType').value;
    if (hdnRegDoctorReq.value == "True") {
        var RegDoctorDays = document.getElementById('' + ctrlcom + '_hdnRegShowDocDays').value;
        var RegDt = document.getElementById('' + ctrlcom + '_hdnregdt').value;
        var NoofDays = Math.round(Math.ceil(((new Date()).getTime() - (new Date(RegDt)).getTime())) / (1000 * 60 * 60 * 24));
        if (NoofDays > RegDoctorDays) {
        }
        else {
            var _doctor_id = document.getElementById('' + ctrlcom + '_hdnDoctor_ID').value; //data.ID;
            var _patient_id = document.getElementById('' + ctrlcom + '_hdnPatientid').value;
            if (_patient_id == undefined || _patient_id == null || _patient_id == "") { _patient_id = 0; }
            if (ddlpattypchk == '2' || ddlpattypchk == '5' || ddlpattypchk == '7' || ddlpattypchk == '8' || ddlpattypchk == '9' || ddlpattypchk == '10') {
                if ($('#' + ctrlcom + '_chk_old')[0].checked == true) {
                    var _company_id = document.getElementById('' + ctrlcom + '_uccorporate_EmployerInfo1_uctpa__hiddenID').value;
                } else {
                    var _company_id = document.getElementById('' + ctrlcom + '_EmployerInfo1_uctpa__hiddenID').value;
                }
            } else {
                var _company_id = 0;
            }

            if (_company_id == undefined || _company_id == null || _company_id == '') { _company_id = "0"; }
            var _tariff_id = 1;

            var form_name = $('#' + ctrlcom + '_UCServices_hdnSrvFormName').val();
            var hdnallowtariffslcn = $('[id*=hdnallowtariffslcn]').val().toLowerCase();
            if (hdnallowtariffslcn == 'true') {

                var pat_type = '';
                if (form_name == 'OP' || form_name == 'Cons') {
                    pat_type = document.getElementById('' + ctrlcom + '_uccorporate_ddlPaymentBy').value;
                }
                else if (form_name == 'OPQUICK') {
                    if (document.getElementById('' + ctrlcom + '_chk_old').checked == true) {
                        pat_type = document.getElementById('' + ctrlcom + '_uccorporate_ddlPaymentBy').value;
                    }
                    else {
                        pat_type = document.getElementById('' + ctrlcom + '_ddlPatientType').value;
                    }
                }
                if (pat_type == 1) {
                    var PatientCategory = document.getElementById('' + ctrlcom + '_UCServices_ddlpatcat').value;
                    if (PatientCategory == undefined || PatientCategory == null || PatientCategory == '' || PatientCategory == '--select--' || PatientCategory == '0') {
                        $(".stoast").toastText("warning", "Please Select Patient Category", 5, 3);
                        return false;

                    }
                    var taiff_id = document.getElementById('' + ctrlcom + '_UCServices_ddltariff').value;
                    if (taiff_id == undefined || taiff_id == null || taiff_id == '' || taiff_id == '--select--' || taiff_id == '0') {
                        $(".stoast").toastText("warning", "Please Select Tariff", 5, 3);
                        // $(".stoast").toastText("warning", "Sorry  No Tariff Mapped To This Patient Category", 5, 2);
                        return false;
                    }
                }
            }
            if (hdnallowtariffslcn == 'true') {
                if (ddlpattypchk == '2' || ddlpattypchk == '5' || ddlpattypchk == '7' || ddlpattypchk == '8' || ddlpattypchk == '9' || ddlpattypchk == '10') {
                    _tariff_id = $("#" + ctrlcom + "_EmployerInfo1_uctpa__hiddenID").val();
                } else {
                    _tariff_id = $("#" + ctrlcom + "_UCServices_ddltariff").val();
                }
            }
            if (_doctor_id != undefined && _doctor_id != null && _doctor_id != '' && _doctor_id != '0') {
                GetNonAsync(
                          "Private/FrontOffice/OPDBILLNEW.aspx/Bind_Consultation_Det_Async",
                          { DOCTOR_ID: _doctor_id, PATIENT_ID: _patient_id, COMPANY_ID: _company_id, TARIFF_ID: _tariff_id },
                          function (msg) {

                              if (msg == "") {
                                  $(".stoast").toastText("warning", "Consultation Charge Setup Not Done!", 5, 3);
                              }
                              else {

                                  AjaxSucceededForBindCon(msg, reqid);
                                  $("table[id*=UCServices_gvServices] tr:has(td)").each(function () {
                                      var RowIndexForGrid = $(this)[0].rowIndex;
                                      var SrvID = $("table[id$=UCServices_gvServices] tr").filter(':eq(' + RowIndexForGrid + ')').find('input[type=hidden][id*=hdnServiceID]').val();
                                      var DocID = $("table[id$=UCServices_gvServices] tr").filter(':eq(' + RowIndexForGrid + ')').find('input[type=hidden][id*=hdnDoctorID]').val();
                                      var ClsSrvID = $("table[id$=UCServices_gvServices] tr").filter(':eq(' + RowIndexForGrid + ')').find('input[type=hidden][id*=hdnClass_Srv_ID]').val();
                                      if (SrvID == '' || SrvID == null || SrvID == undefined) { SrvID = '0'; }
                                      if (DocID == '' || DocID == null || DocID == undefined) { DocID = '0'; }
                                      if (ClsSrvID == '' || ClsSrvID == null || ClsSrvID == undefined) { ClsSrvID = '0'; }
                                      if (document.getElementById('' + ctrlcom + '_hdnreqtype').value != "PACKAGE") {
                                          if (SrvID == '2' && DocID > 0 && ClsSrvID == '0') {
                                              $("table[id$=UCServices_gvServices] tr").filter(':eq(' + RowIndexForGrid + ')').find('[id*=lblvisitdetails]')[0].innerHTML = 'D-H' + '/' + msg.d[0].P_D_NO_VISITS + '-' + msg.d[0].P_NO_VISITS;
                                              $("table[id$=UCServices_gvServices] tr").filter(':eq(' + RowIndexForGrid + ')').find('[id*=divsrvname]').addClass('btntxt srvdvisitdiv');
                                              $("table[id$=UCServices_gvServices] tr").filter(':eq(' + RowIndexForGrid + ')').find('[id*=lblvisitdetails]').show();
                                          }
                                      }
                                      /*patient Category Mapping Concept*/
                                      var form_name = document.getElementById('' + ctrlcom + '_newAgeUc_hdnDocument').value;
                                      if (form_name == 'OP' || form_name == 'Cons' || form_name == 'OPQUICK') {
                                          var hdnallowtariffslcn = $('[id*=hdnallowtariffslcn]').val().toLowerCase();
                                          var pat_cat_id = $('#' + ctrlcom + '_UCServices_ddlpatcat').val();
                                          var pat_type = $('#' + ctrlcom + '_uccorporate_ddlPaymentBy').val();
                                          if (pat_cat_id == undefined || pat_cat_id == null || pat_cat_id == '' || pat_cat_id == '--select--') { pat_cat_id = 0; }
                                          if (pat_type == undefined || pat_type == null || pat_type == '' || pat_type == '--select--' || pat_type == '0' || pat_type == 0) { pat_type = 1; }
                                          if (hdnallowtariffslcn == 'true' && parseInt(pat_cat_id) > 0 && parseInt(pat_type) == 1)
                                              $("table[id$=UCServices_gvServices] tr").filter(':eq(' + RowIndexForGrid + ')').find('input[type=hidden][id*=hdnpatcatid]').val(pat_cat_id);
                                      }
                                  });
                              }
                          },
                          function (jqXHR, textStatus, errorThrown) {
                              AjaxFailedForBindCon;
                          });
            }
        }
    }
}

/*Pre-Registration Lookup Seletion */
function OnPreRegistration(_d) {

    Clearpopup();
    document.getElementById('' + ctrlcom + '_UcAppointmentNo_txtSearchControl').value = '';
    document.getElementById('' + ctrlcom + '_UcAppointmentNo__hiddenText').value = '';
    $("#" + ctrlcom + "_UCprereg_txtSearchControl").val(_d["PRE_REG_NO"]);
    $("#" + ctrlcom + "_UCprereg__hiddenText").val(_d["PRE_REG_NO"]);
    if (_d.ID == undefined) {
        $("#" + ctrlcom + "_UCprereg__hiddenID").val(_d["PRE_REG_ID"]);
        document.getElementById('' + ctrlcom + '_hdnpreregid').value = _d.PRE_REG_ID;
        var _preregid = _d.PRE_REG_ID; var session = 1;
        if (_preregid == undefined || _preregid == null || _preregid == '') { _preregid = "0"; }
        GetAsync(
                "PatientRegistration.asmx/GetPreregdatatoreg",
                { preregid: parseInt(_preregid), session: session },
                function (jdata) {
                    var pReg = jdata.d[0];
                    var pRegAddrs = jdata.d[1];
                    pReg = jQuery.parseJSON(pReg);
                    pRegAddrs = jQuery.parseJSON(pRegAddrs);
                    Assignprereg(pRegAddrs, pReg[0].TITILE_ID, pReg[0].FIRST_NAME, pReg[0].MIDDLE_NAME, pReg[0].LAST_NAME, pReg[0].DISPLAY_NAME, pReg[0].ALIAS_NAME, pReg[0].MOTHER_NAME, pReg[0].RES_PERSON_NAME, pReg[0].RES_PERSON_REL_ID, pReg[0].GENDER_ID, pReg[0].MARITAL_STATUS_ID, pReg[0].DOB, pReg[0].Educationpr_id, pReg[0].BLOOD_GROUP_ID, pReg[0].RELEGIONPR_ID, pReg[0].Ethnicitypr_id, pReg[0].Refferedpr_bypr, pReg[0].REFERAL_NAME, pReg[0].REFERREND_DOCTOR_ID, pReg[0].REFERRALPHONE, pReg[0].REFERRALADDRESS, pReg[0].Website, pReg[0].MOBILE_NO1, pReg[0].MOBILE_NO2, pReg[0].EMAIL_ID, pReg[0].DOCTOR_NAME, pReg[0].DOCTOR_ID, pReg[0].ADDRESS1, pReg[0].ADDRESS2, pReg[0].AREA_NAME, pReg[0].AREAPR_ID, pReg[0].CITY_NAME, pReg[0].CITYPR_ID, pReg[0].STATE_NAME, pReg[0].STATEPR_ID, pReg[0].COUNTRY_NAME, pReg[0].COUNTRYPR_ID, pReg[0].PINZIPCODE, pReg[0].AGE, pReg[0].NOTES, pReg[0].MODE_OF_COMM, pReg[0].PRE_REG_ID, pReg[0].OCCUPATION_ID, pReg[0].ETHNICITY_ID, pReg[0].RELIGION_ID, pReg[0].ID_PROOF_TYPE_ID, pReg[0].ID_PROOF_TYPE_NAME, pReg[0].QUESTIONARY_ID, pReg[0].QUESTIONARY_NAME, pReg[0].PASSPORT_NO, pReg[0].ISSUE_DT, pReg[0].EXPIRY_DT, pReg[0].ISSUED_AT_ID, pReg[0].ISSUE_AT_NAME, pReg[0].DND, pReg[0].PASSPORT_NO, pReg[0].ISSUE_DT, pReg[0].EXPIRY_DT, pReg[0].ISSUED_AT_ID, pReg[0].ISSUE_AT_NAME, pReg[0].METHOD_OF_COMMUNICATION, pReg[0].MODE_OF_COMMUNICATION_ID, pReg[0].IS_SENIOR_CITIZEN, pReg[0].NATIONALITY_ID, pReg[0].ISSEUED_AT_DESC, pReg[0].FATHER_NAME);
                    CheckCombinationValidations();
                },
                function (jqXHR, textStatus, errorThrown) {
                    $(".stoast").toastText("warning", errorThrown, 5, 3);
                });
    }
    else {
        $("#" + ctrlcom + "_UCprereg_txtSearchControl").val(_d["_lktext"]);
        $("#" + ctrlcom + "_UCprereg__hiddenText").val(_d["_lktext"]);
        $("#" + ctrlcom + "_UCprereg__hiddenID").val(_d["ID"]);
        document.getElementById('' + ctrlcom + '_hdnpreregid').value = _d.ID;
        var _preregid = _d.ID; var session = 1;
        if (_preregid == undefined || _preregid == null || _preregid == '') { _preregid = "0"; }
        GetAsync(
                "PatientRegistration.asmx/GetPreregdatatoreg",
                { preregid: parseInt(_preregid), session: session },
                function (jdata) {
                    var pReg = jdata.d[0];
                    var pRegAddrs = jdata.d[1];
                    pReg = jQuery.parseJSON(pReg);
                    pRegAddrs = jQuery.parseJSON(pRegAddrs);
                    if (pReg[0].PRE_REG_NO != '' && pReg[0].PRE_REG_NO != undefined) {
                        document.getElementById('' + ctrlcom + '_UCprereg_txtSearchControl').value = pReg[0].PRE_REG_NO;
                    }
                    Assignprereg(pRegAddrs, pReg[0].TITILE_ID, pReg[0].FIRST_NAME, pReg[0].MIDDLE_NAME, pReg[0].LAST_NAME, pReg[0].DISPLAY_NAME, pReg[0].ALIAS_NAME, pReg[0].MOTHER_NAME, pReg[0].RES_PERSON_NAME, pReg[0].RES_PERSON_REL_ID, pReg[0].GENDER_ID, pReg[0].MARITAL_STATUS_ID, pReg[0].DOB, pReg[0].Educationpr_id, pReg[0].BLOOD_GROUP_ID, pReg[0].RELEGIONPR_ID, pReg[0].Ethnicitypr_id, pReg[0].Refferedpr_bypr, pReg[0].REFERAL_NAME, pReg[0].REFERREND_DOCTOR_ID, pReg[0].REFERRALPHONE, pReg[0].REFERRALADDRESS, pReg[0].Website, pReg[0].MOBILE_NO1, pReg[0].MOBILE_NO2, pReg[0].EMAIL_ID, pReg[0].DOCTOR_NAME, pReg[0].DOCTOR_ID, pReg[0].ADDRESS1, pReg[0].ADDRESS2, pReg[0].AREA_NAME, pReg[0].AREAPR_ID, pReg[0].CITY_NAME, pReg[0].CITYPR_ID, pReg[0].STATE_NAME, pReg[0].STATEPR_ID, pReg[0].COUNTRY_NAME, pReg[0].COUNTRYPR_ID, pReg[0].PINZIPCODE, pReg[0].AGE, pReg[0].NOTES, pReg[0].MODE_OF_COMM, pReg[0].PRE_REG_ID, pReg[0].OCCUPATION_ID, pReg[0].ETHNICITY_ID, pReg[0].RELIGION_ID, pReg[0].ID_PROOF_TYPE_ID, pReg[0].ID_PROOF_TYPE_NAME, pReg[0].QUESTIONARY_ID, pReg[0].QUESTIONARY_NAME, pReg[0].PASSPORT_NO, pReg[0].ISSUE_DT, pReg[0].EXPIRY_DT, pReg[0].ISSUED_AT_ID, pReg[0].ISSUE_AT_NAME, pReg[0].DND, pReg[0].PASSPORT_NO, pReg[0].ISSUE_DT, pReg[0].EXPIRY_DT, pReg[0].ISSUED_AT_ID, pReg[0].ISSUE_AT_NAME, pReg[0].METHOD_OF_COMMUNICATION, pReg[0].MODE_OF_COMMUNICATION_ID, pReg[0].IS_SENIOR_CITIZEN, pReg[0].NATIONALITY_ID, pReg[0].ISSEUED_AT_DESC, pReg[0].FATHER_NAME);
                    CheckCombinationValidations();
                },
                function (jqXHR, textStatus, errorThrown) {
                    $(".stoast").toastText("warning", errorThrown, 5, 3);
                });
    }
}
function Assignprereg(pRegAddrs, Tit_id, FIRST_NAME, MIDDLE_NAME, LAST_NAME, DISPLAY_NAME, Alias_name, Mother_name, RES_PERSON_NAME, RES_PERSON_REL_ID, Genderpr_id, Maritalpr_statuspr_id, DOB, Educationpr_id, Blood_id, Relegionpr_id, Ethnicitypr_id, Refferedpr_bypr, REFERAL_NAME, REFERREND_DOCTOR_ID, ReferralPhone, ReferalAddress, Website, MOBILE_NO, MOBILE_NO2, EMAIL_ID, Doctor_Name, Doctor_ID, ADDRESS1, ADDRESS2, AREA_NAME, Areapr_id, CITY_NAME, Citypr_id, STATE_NAME, Statepr_id, COUNTRY_NAME, Countrypr_id, Pinzipcode, AGE, NOTES, Mode_of_comm, PRE_REG_ID, OCCUPATION_ID, ETHNICITY_ID, RELIGION_ID, ID_PROOF_TYPE_ID, ID_PROOF_TYPE_NAME, QUESTIONARY_ID, QUESTIONARY_NAME, PASSPORT_NO, ISSUE_DT, EXPIRY_DT, ISSUED_AT_ID, ISSUE_AT_NAME, DND, PASSPORT_NO, ISSUE_DT, EXPIRY_DT, ISSUED_AT_ID, ISSUE_AT_NAME, METHOD_OF_COMMUNICATION, MODE_OF_COMMUNICATION_ID, IS_SENIOR_CITIZEN_PRE, natinality, ISSEUED_AT_DESC,FATHER_NAME) {
    var age = AGE;
    var str = age.split(",");
    var y = str[0];
    var m = str[1];
    var d = str[2];
    document.getElementById('' + ctrlcom + '_newAgeUc_txtYear').value = y;
    document.getElementById('' + ctrlcom + '_newAgeUc_txtMonths').value = m;
    document.getElementById('' + ctrlcom + '_newAgeUc_txtDay').value = d;
    document.getElementById('' + ctrlcom + '_ddlTitle').value = Tit_id;
    document.getElementById('' + ctrlcom + '_txtFirstName').value = FIRST_NAME;
    document.getElementById('' + ctrlcom + '_txtMiddleName').value = MIDDLE_NAME;
    document.getElementById('' + ctrlcom + '_txtLastName').value = LAST_NAME;
    document.getElementById('' + ctrlcom + '_txtFirstName').value = TitleCase(document.getElementById('' + ctrlcom + '_txtFirstName'));
    document.getElementById('' + ctrlcom + '_txtMiddleName').value = TitleCase(document.getElementById('' + ctrlcom + '_txtMiddleName'));
    document.getElementById('' + ctrlcom + '_txtLastName').value = TitleCase(document.getElementById('' + ctrlcom + '_txtLastName'));
    document.getElementById('' + ctrlcom + '_txtDisplayname').innerHTML = DISPLAY_NAME.toUpperCase();
    document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnPatientName').value = DISPLAY_NAME;
    document.getElementById('' + ctrlcom + '_txtMotherMName').value = Mother_name;
    document.getElementById('' + ctrlcom + '_txtMotherMName').value = TitleCase(document.getElementById('' + ctrlcom + '_txtMotherMName'));
    document.getElementById('' + ctrlcom + '_txtResPerson').value = RES_PERSON_NAME;
    document.getElementById('' + ctrlcom + '_txtResPerson').value = TitleCase(document.getElementById('' + ctrlcom + '_txtResPerson'));
    document.getElementById('' + ctrlcom + '_ddlResPerson').value = RES_PERSON_REL_ID;
    $('#' + ctrlcom + '_ddlNationality').val(natinality);
    if (RES_PERSON_REL_ID == 4) {
        document.getElementById('' + ctrlcom + '_txtResPerson').disabled = true;
    }
    else {
        document.getElementById('' + ctrlcom + '_txtResPerson').disabled = false;
    }
    document.getElementById('' + ctrlcom + '_ddlGender').value = Genderpr_id;
    if (Genderpr_id != '' || Genderpr_id != null) {
        document.getElementById('' + ctrlcom + '_UCServices_hdnGender_ID').value = Genderpr_id;
    }
    document.getElementById('' + ctrlcom + '_ddlMaritalStatus').value = Maritalpr_statuspr_id;
    if (document.getElementById('' + ctrlcom + '_hdndobformat').value == "dd-MMM-yyyy") {
        document.getElementById('' + ctrlcom + '_newAgeUc_txtDob').value = new Date(DOB).format('dd-MMM-yyyy');
    } else {
        document.getElementById('' + ctrlcom + '_newAgeUc_txtDob').value = new Date(DOB).format('dd-MM-yyyy');
    }


    document.getElementById('' + ctrlcom + '_ddlEthnicity').value = ETHNICITY_ID;
    if (Refferedpr_bypr != (undefined && null && '')) {
        document.getElementById('' + ctrlcom + '_ucReferal_ddlreferral').value = Refferedpr_bypr;
    }
    document.getElementById('' + ctrlcom + '_ucReferal_ucreferalname_txtSearchControl').value = REFERAL_NAME;
    document.getElementById('' + ctrlcom + '_ucReferal_ucreferalname_txtSearchControl').value = TitleCase(document.getElementById('' + ctrlcom + '_ucReferal_ucreferalname_txtSearchControl'));
    //        document.getElementById('' + ctrlcom + '__hdnID').value = REFERREND_DOCTOR_ID;
    document.getElementById('' + ctrlcom + '_ucReferal_txtRefPhone').value = ReferralPhone;
    document.getElementById('' + ctrlcom + '_ucReferal_txtrefaddr').value = ReferalAddress;
    //document.getElementById('' + ctrlcom + '__hdnRefAddr').value = ReferalAddress;
    // document.getElementById('' + ctrlcom + '__hdnRefPhone').value = ReferralPhone;
    //        document.getElementById('' + ctrlcom + '_txtweburl').value = Website;

    //        document.getElementById('' + ctrlcom + '_txtEmailid').value = EMAIL_ID;
    document.getElementById('' + ctrlcom + '_ucConsultant_txtSearchControl').value = Doctor_Name;
    document.getElementById('' + ctrlcom + '_ucConsultant__hiddenText').value = Doctor_Name;
    document.getElementById('' + ctrlcom + '_ucConsultant__hiddenID').value = Doctor_ID;
    document.getElementById('' + ctrlcom + '_hdnDoctor_ID').value = Doctor_ID;

    document.getElementById('' + ctrlcom + '_hdnDoctorName').value = Doctor_Name;
    /*document.getElementById('' + ctrlcom + '_hdnDoctorCd').value;
    document.getElementById('' + ctrlcom + '_hdnDeptId').value;
    document.getElementById('' + ctrlcom + '_hdnDeptName').value;*/

    //document.getElementById('' + ctrlcom + '_hdnDID').value = Doctor_ID;

    document.getElementById('' + ctrlcom + '_ddlBloodGroup').value = Blood_id;
    document.getElementById('' + ctrlcom + '_ddlReligion').value = RELIGION_ID;
    document.getElementById('' + ctrlcom + '_ddlproofid').value = ID_PROOF_TYPE_ID;
    document.getElementById('' + ctrlcom + '_txtSSN').value = ID_PROOF_TYPE_NAME;
    if (ID_PROOF_TYPE_ID == 6) {
        if (EXPIRY_DT == null || EXPIRY_DT == '') {
            EXPIRY_DT = new Date().format('dd-MMM-yyyy');
        }
        else {
            EXPIRY_DT = EXPIRY_DT.split(' ');
            EXPIRY_DT = EXPIRY_DT[0];
            EXPIRY_DT = new Date(Date.parse(EXPIRY_DT));
            EXPIRY_DT = new Date(EXPIRY_DT).format('dd-MMM-yyyy');
            if (EXPIRY_DT == 'NaN--NaN') {
                EXPIRY_DT = new Date(jQuery.parseJSON(EXPIRY_DT.split('(')[1].split(')')[0])).format('dd-MMM-yyyy');
            }
        }
        if (ISSUE_DT == null || ISSUE_DT == '') {
            ISSUE_DT = new Date().format('dd-MMM-yyyy');
        }
        else {
            ISSUE_DT = new Date(ISSUE_DT).format('dd-MMM-yyyy');
            if (ISSUE_DT == 'NaN--NaN') {
                ISSUE_DT = new Date(jQuery.parseJSON(ISSUE_DT.split('(')[1].split(')')[0])).format('dd-MMM-yyyy');
            }
        }
        document.getElementById('' + ctrlcom + '_txtPassprotno').value = PASSPORT_NO;
        document.getElementById('' + ctrlcom + '_txtIssueDt').value = ISSUE_DT;
        document.getElementById('' + ctrlcom + '_txtExpiryDt').value = EXPIRY_DT;
        document.getElementById('' + ctrlcom + '_txtissuedat').value = ISSEUED_AT_DESC;
        document.getElementById('' + ctrlcom + '_HiddenField4').value = ISSUED_AT_ID;
        document.getElementById('' + ctrlcom + '_txtPassprotno').disabled = false;
        document.getElementById('' + ctrlcom + '_txtIssueDt').disabled = false;
        document.getElementById('' + ctrlcom + '_txtExpiryDt').disabled = false;
        document.getElementById('' + ctrlcom + '_txtissuedat').disabled = false;
    }
    else {
        document.getElementById('' + ctrlcom + '_txtPassprotno').value = ''; ;
        document.getElementById('' + ctrlcom + '_txtIssueDt').value = '';
        document.getElementById('' + ctrlcom + '_txtExpiryDt').value = '';
        document.getElementById('' + ctrlcom + '_txtissuedat').value = '';
        document.getElementById('' + ctrlcom + '_HiddenField4').value = '';
        document.getElementById('' + ctrlcom + '_txtPassprotno').disabled = true;
        document.getElementById('' + ctrlcom + '_txtIssueDt').disabled = true;
        document.getElementById('' + ctrlcom + '_txtExpiryDt').disabled = true;
        document.getElementById('' + ctrlcom + '_txtissuedat').disabled = true;
    }
    /*
    if (METHOD_OF_COMMUNICATION != '' && METHOD_OF_COMMUNICATION != null) {
    document.getElementById('' + ctrlcom + '_chkmodeComm_MultiSelectDDL').text = METHOD_OF_COMMUNICATION;
    document.getElementById('' + ctrlcom + '_chkmodeComm_MultiSelectDDL').Value = MODE_OF_COMMUNICATION_ID;
    var _optionsVal1 = "<OPTION selected value='" + MODE_OF_COMMUNICATION_ID + "'>" + METHOD_OF_COMMUNICATION + "</OPTION>";
    $('[id$=chkmodeComm_MultiSelectDDL]').empty().html(_optionsVal1);
    }
    else {
    METHOD_OF_COMMUNICATION = "--select--";
    document.getElementById('' + ctrlcom + '_chkmodeComm_MultiSelectDDL').value = 0;
    }*/
    if (IS_SENIOR_CITIZEN_PRE == 'Y') {
        document.getElementById('' + ctrlcom + '_Address1_chkIsSenior').checked = true;
    }
    else {
        document.getElementById('' + ctrlcom + '_Address1_chkIsSenior').checked = false;
    }
    if (DND == 'Y') {
        document.getElementById('' + ctrlcom + '_Address1_chkDND').checked = true;
    }
    else {
        document.getElementById('' + ctrlcom + '_Address1_chkDND').checked = false;
    }

    document.getElementById('' + ctrlcom + '_hdnpreregid').value = PRE_REG_ID;

    var mobileno1 = document.getElementById('' + ctrlcom + '_Address1_txtMobile1').value = MOBILE_NO;
    document.getElementById('' + ctrlcom + '_Address1_txtMobile1').value = mobileno1.slice(-10);

    var mobileno2 = document.getElementById('' + ctrlcom + '_Address1_txtMobile2').value = MOBILE_NO2;
    if (mobileno2.length <= 10) { document.getElementById('' + ctrlcom + '_Address1_txtMobile2').value = ''; } else if (mobileno2.length <= 10) { document.getElementById('' + ctrlcom + '_Address1_txtMobile2').value = mobileno1.slice(-10); }
    document.getElementById('' + ctrlcom + '_Address1_txtemail').value = EMAIL_ID;

    document.getElementById('' + ctrlcom + '_txtfathername').value = FATHER_NAME;
    
    changeaddr();
    //Address Detailsdebu
    PregAssignAddressDetails(pRegAddrs);

    if (document.getElementById('' + ctrlcom + '_ddlRegType').value != '5') { OnPageValidation(); }
    AssignServicesGrid();
    AddDoctortoGrid();
    ExtendedDisplayValues();
}
function AssignServicesGrid() {
    var _doctor_id = document.getElementById('' + ctrlcom + '_hdnDoctor_ID').value; //data.ID;

    $("table[id$=UCServices_gvServices] tr:has(td)").each(function (e) {
        var docid = $(this).closest('tr').find('input[type=hidden][id*=hdnDoctorID]').val();
        var pkg_id = $(this).closest('tr').find('input[type=hidden][id*=hdnClass_Srv_ID]').val();
        if (pkg_id == '' || pkg_id == null || pkg_id == undefined)
        { pkg_id = 0; }
        if (parseInt(_doctor_id) > 0 && parseInt(docid) > 0) {
            if (_doctor_id == docid && pkg_id == 0) {
                $(this).closest('tr').remove();
                arrServiceIds = $.grep(arrServiceIds, function (value) {
                    return value != docid;
                });
            }
        }
    });
    AssignSno(0);
    CalculateGridAmtCount();
    return false;
}
function PatientTypeChange() {
    //offVipDetails.style.display = "table-row";
    ddlregtype = document.getElementById('' + ctrlcom + '_ddlRegType');
    ddlregtypeIndex = document.getElementById('' + ctrlcom + '_ddlRegType').selectedIndex;
    var val = ddlregtypeIndex;
    if (ddlregtype[val].innerHTML == 'Staff' || ddlregtype[val].innerHTML == 'StaffDependent' || ddlregtype[val].innerHTML == "HealthCard") {
        document.getElementById('' + ctrlcom + '_rbt_pat_type_0').checked = true;
        document.getElementById('' + ctrlcom + '_rbt_pat_type_1').checked = false;
        document.getElementById('' + ctrlcom + '_rbt_pat_type_2').checked = false;
        $('#offVipDetails').hide();
    }
    else {
        $('#offVipDetails').show();
    }
    if (document.getElementById('' + ctrlcom + '_hdnQstrID').value == '') {
        $('#' + ctrlcom + '_dd_reg_source').val('0');
        $('#' + ctrlcom + '_source_remarks').val('')
    }
    if ($('#' + ctrlcom + '_rbt_pat_type_0').is(":checked")) {
        //  offVipDetails.style.display = "none";
        document.getElementById('' + ctrlcom + '_dd_reg_source').disabled = true;
        document.getElementById('' + ctrlcom + '_source_remarks').disabled = true;

        document.getElementById('' + ctrlcom + '_dd_reg_source').className = 'grey';
        document.getElementById('' + ctrlcom + '_source_remarks').className = 'grey';
    }
    else {
        //offVipDetails.style.display = "table-row";
        document.getElementById('' + ctrlcom + '_dd_reg_source').disabled = false;
        document.getElementById('' + ctrlcom + '_source_remarks').disabled = false;

        document.getElementById('' + ctrlcom + '_dd_reg_source').className = 'red';
        document.getElementById('' + ctrlcom + '_source_remarks').className = 'red';
    }
    return false;
}
function OnStaffselection(_d) {
    Clearpatpopup(); ClearAddrDtls();
    var id = 0;
    var reg_type = document.getElementById('' + ctrlcom + '_ddlRegType').value;
    if (_d.ID == undefined) {
        $('#' + ctrlcom + '_UcStaffName_txtSearchControl').val(_d.RESULT.NAME);
        $('#' + ctrlcom + '_UcStaffName__hiddenID').val(_d.RESULT.ID);
        $('#' + ctrlcom + '_UcStaffName__hiddenText').val(_d.RESULT.NAME);
        $('#' + ctrlcom + '_hdnEmpId').val(_d.RESULT.ID);
        id = _d.RESULT.ID;
    }
    else {
        $('#' + ctrlcom + '_UcStaffName_txtSearchControl').val(_d._lktext);
        $('#' + ctrlcom + '_UcStaffName__hiddenID').val(_d.ID);
        $('#' + ctrlcom + '_UcStaffName__hiddenText').val(_d._lktext);
        $('#' + ctrlcom + '_hdnEmpId').val(_d.ID);
        id = _d.ID;
    }
    if (document.getElementById('' + ctrlcom + '_UcStaffName_txtSearchControl').value == '') {
        document.getElementById('' + ctrlcom + '_UcStaffName_txtSearchControl').className = 'red';
    }
    else {
        document.getElementById('' + ctrlcom + '_UcStaffName_txtSearchControl').className = 'grey';
    }
    if (id == null || id == undefined || id == '') { id = 0; }
    if (id != 0) {
        if (reg_type == 6) {
            AssignEmpdetails(id);
            AssignEmpAddrDtls(id);
        }
        else if (reg_type == 7) {
            AssignEmpAddrDtls(id);
            BindEmpRelation(id);
        }
    }
    OnPageValidation();
    return false;
}
function AssignEmpdetails(patID) {
    var PatientID = patID;
    var dob1;
    var _prms = new Object();
    _prms.PatientID = PatientID;
    $.ajax({
        type: "POST",
        url: _iniUrl + "PatientRegistration.asmx/Get_Employee_Dtls",
        data: JSON.stringify(_prms),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        async: false,
        error: function (jqXHR, textStatus, errorThrown) {
            $(".stoast").toastText("warning", "Error.....", 5, 3);

        },
        success: function (JData) {
            if (JData.d != null) {
                if (JData.d.length > 0) {
                    if (JData.d[0] != undefined) {
                        var data = JData.d[0];
                        document.getElementById('' + ctrlcom + '_txtFirstName').value = JData.d[0].EmpFirstName;
                        document.getElementById('' + ctrlcom + '_txtMiddleName').value = JData.d[0].EmpMidName;
                        document.getElementById('' + ctrlcom + '_txtLastName').value = JData.d[0].EmpLastName;
                        document.getElementById('' + ctrlcom + '_txtFirstName').value = TitleCase(document.getElementById('' + ctrlcom + '_txtFirstName'));
                        document.getElementById('' + ctrlcom + '_txtMiddleName').value = TitleCase(document.getElementById('' + ctrlcom + '_txtMiddleName'));
                        document.getElementById('' + ctrlcom + '_txtLastName').value = TitleCase(document.getElementById('' + ctrlcom + '_txtLastName'));
                        document.getElementById('' + ctrlcom + '_ddlNationality').value = JData.d[0].ID;
                        dob1 = JData.d[0].EmpDOB;
                        if (document.getElementById('' + ctrlcom + '_hdndobformat').value == "dd-MMM-yyyy") {
                            document.getElementById('' + ctrlcom + '_newAgeUc_txtDob').value = new Date(dob1).format('dd-MMM-yyyy');
                        } else {
                            document.getElementById('' + ctrlcom + '_newAgeUc_txtDob').value = new Date(dob1).format('dd-MM-yyyy');
                        }
                        if (JData.d[0].EmpSex == '1') {
                            document.getElementById('' + ctrlcom + '_ddlTitle').value = '1';
                            document.getElementById('' + ctrlcom + '_ddlGender').value = '1';
                        }
                        else if (JData.d[0].EmpSex == '2') {
                            document.getElementById('' + ctrlcom + '_ddlTitle').value = '2';
                            document.getElementById('' + ctrlcom + '_ddlGender').value = '2';
                        }
                        if (document.getElementById('' + ctrlcom + '_ddlRegType').value == '6') {
                            document.getElementById('' + ctrlcom + '_StaffRelation').value = 14;
                        }
                        else {
                            document.getElementById('' + ctrlcom + '_StaffRelation').value = 0;
                        }
                    }
                    if (document.getElementById('' + ctrlcom + '_ddlTitle').value == "") {
                        document.getElementById('' + ctrlcom + '_ddlTitle').value = 0;
                    }
                    var age = JData.d[0].AGE;
                    var age1 = age.split(",")
                    var years1 = age1[0];
                    var month1 = age1[1];
                    var dayes1 = age1[2];
                    document.getElementById('' + ctrlcom + '_newAgeUc_txtYear').value = years1;
                    document.getElementById('' + ctrlcom + '_newAgeUc_txtMonths').value = month1;
                    document.getElementById('' + ctrlcom + '_newAgeUc_txtDay').value = dayes1;
                    document.getElementById('' + ctrlcom + '_newAgeUc_txtDob').focus();
                    document.getElementById('' + ctrlcom + '_newAgeUc_txtYear').focus();
                    SetDisplayName1();
                    ExtendedDisplayValues(); OnPageValidation();
                }
            }
        }
    });
}

function AssignEmpAddrDtls(patID) {

    var PatientID = patID;

    GetAsync(
                    "PatientRegistration.asmx/Get_Emp_Address_Dtls",
                    { _patID: parseInt(PatientID) },
                    function (jdata) {
                        var result = jdata.d;

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
                            var District = '';
                            var District_name = '';
                            var SameasPresentAddress, CopyFromPresentAddress;
                            DivAdressRowIndex = DivAdressRowIndex == 0 ? 1 : DivAdressRowIndex;

                            if (i == 0) {
                                GlobalMyAddress1 = new Array();
                                multiDimAddress1(DivAdressRowIndex, SameasPresentAddress, CopyFromPresentAddress, Address1, Address2, Area, PinZip, City, District, State,
        Country, city_name, state_name, area_name, District_name, country_name);
                                $.each(GlobalMyAddress1, function (ArrIndex, ChngRowIndex) {
                                    if (ChngRowIndex.rowIndex == DivAdressRowIndex) {
                                        document.getElementById('' + ctrlcom + '_Address1_txtAddress1').value = ChngRowIndex.Address1;
                                        document.getElementById('' + ctrlcom + '_txtAddress2').value = ChngRowIndex.Address2;
                                        TitleCase(document.getElementById('' + ctrlcom + '_Address1_txtAddress1'));
                                        TitleCase(document.getElementById('' + ctrlcom + '_txtAddress2'));
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
                                    }

                                });
                            }

                            if (i == 1) {
                                GlobalMyAddress2 = new Array();
                                multiDimAddress2(DivAdressRowIndex, SameasPresentAddress, CopyFromPresentAddress, Address1, Address2, Area, PinZip, City, District, State,
             Country, city_name, state_name, area_name, District_name, country_name);

                            }
                            if (i == 2) {
                                GlobalMyAddress3 = new Array();
                                multiDimAddress3(DivAdressRowIndex, SameasPresentAddress, CopyFromPresentAddress, Address1, Address2, Area, PinZip, City, District, State,
            Country, city_name, state_name, area_name, District_name, country_name);

                            }
                            document.getElementById('' + ctrlcom + '_Address1_txtMobile1').value = result[i].MOBILE_PHONE;
                            document.getElementById('' + ctrlcom + '_Address1_txtMobile2').value = result[i].HOME_PHONE;
                        }
                        ExtendedDisplayValues(); OnPageValidation();
                    },
                    function (jqXHR, textStatus, errorThrown) {
                        $(".stoast").toastText("warning", errorThrown, 5, 3);
                    });


}
function OnFamilyReff2(obj) {
    clearRefDtls();
    ClearAddrDtls();
    document.getElementById('' + ctrlcom + '_UcFamilyReff_txtSearchControl').value = obj._lktext;
    document.getElementById('' + ctrlcom + '_UcFamilyReff__hiddenText').value = obj._lktext;
    var _patientID = 0;
    if (obj.PATIENT_ID != undefined) {
        document.getElementById('' + ctrlcom + '_UcFamilyReff__hiddenID').value = obj.PATIENT_ID;
        document.getElementById('' + ctrlcom + '_Address1_txtMobile1').value = obj.MOBILE_NO;
        //document.getElementById('' + ctrlcom + '_ddlPatientType').value = obj.PATIENT_TYPE_ID;
        _patientID = obj.PATIENT_ID;
    }
    else {
        document.getElementById('' + ctrlcom + '_UcFamilyReff__hiddenID').value = obj.RESULT.PATIENT_ID;
        _patientID = obj.RESULT.PATIENT_ID; ;
    }
    if (parseInt(_patientID) > 0) {
        AssignAddrDtls(_patientID);
        if (document.getElementById('' + ctrlcom + '_hdnFmlyConRef').value == 'Yes') {
            AssignReferalsInfo(_patientID);
            AssignServicesGrid();
            document.getElementById('' + ctrlcom + '_hdnDoctor_ID').value = document.getElementById('' + ctrlcom + '_ucConsultant__hiddenID').value;
            AddDoctortoGrid();
            document.getElementById('' + ctrlcom + '_HiddenField4').value = _patientID;
        }
    }
}

var reqid = 0;
var slottime = "";
var slotid = 0;
var apptdocid = 0;
function OnAppointment(_d) {

    var patient_id;
    if (_d.RESULT == undefined) { /* lookup selection */
        patient_id = _d["PAT_ID"];
        Clearpopup();
        document.getElementById('' + ctrlcom + '_ReceiptControl2_chkismultiple').checked = false
        OnMultipleDiscGrid();
        PatientTypeChange();
        var ddlnationality = document.getElementById('' + ctrlcom + '_ddlNationality').value;

        document.getElementById('' + ctrlcom + '_ddlPatientType').value = 1;

        _d["UMR_NO"] = _d["UMR_NO"] == (undefined || 0) ? "" : _d["UMR_NO"];
        if (_d["UMR_NO"] != "" && _d["UMR_NO"] != undefined && _d["UMR_NO"] != null) {
            document.getElementById('' + ctrlcom + '_chk_old').checked = true;
            apptdocid = _d["RSRC_ID"];
            onGetPatientBanner();
            document.getElementById('lk_btn_ctl00_ContentPlaceHolder1_Umrlookup').disabled = true;
            document.getElementById('' + ctrlcom + '_Umrlookup_txtSearchControl').disabled = true;
            document.getElementById('' + ctrlcom + '_hdnDoctorName').value = _d["RSRC_NAME"];
            document.getElementById('' + ctrlcom + '_hdnDoctor_ID').value = _d["RSRC_ID"];
            document.getElementById('' + ctrlcom + '_hdnPatientid').value = patient_id;
            document.getElementById('' + ctrlcom + '_Umrlookup__hiddenID').value = patient_id;
            $('[id$=UCServices_gvServices] tr').filter(':eq(' + 0 + ')').find('input[type=hidden][id*=hdnDoctorID]').val(_d["RSRC_ID"]);
            var UmrNo = _d["UMR_NO"];
            if (UmrNo == undefined || UmrNo == null) { UmrNo = ''; }
            BindPatientBannerPatientDetails(patient_id, UmrNo);
            document.getElementById('' + ctrlcom + '_UCServices_hdnGender_ID').value = document.getElementById('' + ctrlcom + '_umrPatientDetails_hdnGenderID').value;
            $("#" + ctrlcom + "_Umrlookup_txtSearchControl").val(_d["UMR_NO"]);
        }
        else {
            $('#' + ctrlcom + '_hdnappttype').val(_d["APPTYPE"]);
            $("#" + ctrlcom + "_UCprereg_txtSearchControl").val('');
            $("#" + ctrlcom + "_UCprereg__hiddenText").val('');
            $("#" + ctrlcom + "_UcAppointmentNo_txtSearchControl").val(_d["REFERENCE_ID"]);
            $("#" + ctrlcom + "_UcAppointmentNo__hiddenID").val(_d["APMNT_ID"]);
            $("#" + ctrlcom + "_UcAppointmentNo__hiddenText").val(_d["REFERENCE_ID"]);

            /* THis Condition Added By Pushkar To Complete Appointment FOr New Patient And To Stop Getting Again */
            var pat_id = _d["PATIENT_ID"];
            if (pat_id == undefined || pat_id == 'undefined' || pat_id == null || pat_id == '') { pat_id = 0; }
            if (pat_id > 0) {
                $('#' + ctrlcom + '_ApptPatientId').val(_d["PATIENT_ID"]);
            }
            else {
                $('#' + ctrlcom + '_ApptPatientId').val(_d["PAT_ID"]);
            }

            $("#" + ctrlcom + "_Umrlookup__hiddenText").val(_d["UMR_NO"]);
            document.getElementById('' + ctrlcom + '_Umrlookup__hiddenID').value = patient_id;
            document.getElementById('' + ctrlcom + '_hdnAPTID').value = _d["APMNT_ID"];
            reqid = _d["APMNT_ID"];
            slottime = _d["SLOT_TIME"];
            slotid = _d["APMNT_ID"];
            var slot_token_no = _d["SLOT_TOKEN_NO"];
            if (slot_token_no == undefined || slot_token_no == null || slot_token_no == '') { slot_token_no = 0; }
            slotid = slotid + "," + slot_token_no;
            GetPatientDetails(patient_id, _d["RSRC_ID"], _d["APMNT_ID"], _d["SCH_START_TIME"], _d["GENDER_ID"], _d["PATIENT_NAME"], _d["TITILE_ID"], _d["FIRST_NAME"], _d["LAST_NAME"], _d["MARITAL_STATUS_ID"], _d["AGE"], _d["RSRC_NAME"], _d["MOBILE_NO"], _d["MOBILE_NO2"], _d["EMAIL_ID"], _d["GENDER_NAME"], _d["ADDRESS1"], _d["DOB"], _d["AREA_ID"], _d["STATE_ID"], _d["COUNTRY_ID"], _d["CITY_ID"], _d["AREA_NAME"], _d["STATE_NAME"], _d["COUNTRY_NAME"], _d["CITY_NAME"], _d["RES_PERSON_REL_ID"], _d["RES_PERSON_NAME"], _d["BLOOD_GROUP_ID"], _d["RELIGION_ID"], _d["PATIENT_TYPE_ID"], _d["OCCUPATION_ID"], _d["NATIONALITY_ID"], _d["QUESTIONARY_ID"], _d["REMARKS"], _d["DEPARTMENT_NAME"], _d["COUNTER_DOCTOR_STS"], _d["IS_COUNTER_REQIRED"]);
            if (_d["TITILE_ID"] == null || _d["TITILE_ID"] == "" || _d["TITILE_ID"] == undefined) {
                document.getElementById('' + ctrlcom + '_ddlTitle').selectedIndex = 0;
                document.getElementById('' + ctrlcom + '_ddlTitle').className = 'red';
                document.getElementById('' + ctrlcom + '_ddlTitle').focus();
            }
            if (_d["GENDER_ID"] == null || _d["GENDER_ID"] == "" || _d["GENDER_ID"] == undefined) {
                document.getElementById('' + ctrlcom + '_ddlGender').selectedIndex = 0;
            }
            if (_d["OCCUPATION_ID"] == null || _d["OCCUPATION_ID"] == "" || _d["OCCUPATION_ID"] == undefined) {
                document.getElementById('' + ctrlcom + '_ddlOccupation').selectedIndex = 0;
            }
            if (_d.IS_VIP.trim() == "Y") {
                document.getElementById('' + ctrlcom + '_rbt_pat_type_1').checked = true;
                PatientTypeChange();
            }
            document.getElementById('' + ctrlcom + '_ddlTitle').focus();
        }
        if (_d.NATIONALITY_ID == "0") {
            document.getElementById('' + ctrlcom + '_ddlNationality').value = ddlnationality;
        }
    }
    else /* Auto Completion Selection */
    {
        patient_id = _d.RESULT.PAT_ID;
        Clearpopup();
        document.getElementById('' + ctrlcom + '_ReceiptControl2_chkismultiple').checked = false
        OnMultipleDiscGrid();
        PatientTypeChange();
        var ddlnationality = document.getElementById('' + ctrlcom + '_ddlNationality').value;

        document.getElementById('' + ctrlcom + '_ddlPatientType').value = 1;
        _d.RESULT["UMR_NO"] = _d.RESULT["UMR_NO"] == (undefined || 0) ? "" : _d.RESULT["UMR_NO"];
        if (_d.RESULT["UMR_NO"] != "" && _d.RESULT["UMR_NO"] != undefined && _d.RESULT["UMR_NO"] != null) {
            document.getElementById('' + ctrlcom + '_chk_old').checked = true;
            apptdocid = _d.RESULT["RSRC_ID"];
            onGetPatientBanner();
            document.getElementById('lk_btn_ctl00_ContentPlaceHolder1_Umrlookup').disabled = true;
            document.getElementById('' + ctrlcom + '_Umrlookup_txtSearchControl').disabled = true;
            document.getElementById('' + ctrlcom + '_hdnDoctorName').value = _d.RESULT["RSRC_NAME"];
            document.getElementById('' + ctrlcom + '_hdnDoctor_ID').value = _d.RESULT["RSRC_ID"];
            document.getElementById('' + ctrlcom + '_hdnPatientid').value = patient_id;
            document.getElementById('' + ctrlcom + '_Umrlookup__hiddenID').value = patient_id;
            $('[id$=UCServices_gvServices] tr').filter(':eq(' + 0 + ')').find('input[type=hidden][id*=hdnDoctorID]').val(_d.RESULT["RSRC_ID"]);
            var UmrNo = _d.RESULT["UMR_NO"];
            if (UmrNo == undefined || UmrNo == null) { UmrNo = ''; }
            BindPatientBannerPatientDetails(patient_id, UmrNo);
            document.getElementById('' + ctrlcom + '_UCServices_hdnGender_ID').value = document.getElementById('' + ctrlcom + '_umrPatientDetails_hdnGenderID').value;
            $("#" + ctrlcom + "_Umrlookup_txtSearchControl").val(_d.RESULT["UMR_NO"]);
        }
        else {
            $('#' + ctrlcom + '_hdnappttype').val(_d.RESULT["APPTYPE"]);
            $("#" + ctrlcom + "_UCprereg_txtSearchControl").val('');
            $("#" + ctrlcom + "_UCprereg__hiddenText").val('');
            $("#" + ctrlcom + "_UcAppointmentNo_txtSearchControl").val(_d.RESULT["REFERENCE_ID"]);
            $("#" + ctrlcom + "_UcAppointmentNo__hiddenID").val(_d.RESULT["APMNT_ID"]);
            $("#" + ctrlcom + "UcAppointmentNo__hiddenText").val(_d.RESULT["REFERENCE_ID"]);

            var pat_id = _d.RESULT["PATIENT_ID"];
            if (pat_id == undefined || pat_id == 'undefined' || pat_id == null || pat_id == '') { pat_id = 0; }
            if (pat_id > 0) {
                $('#' + ctrlcom + '_ApptPatientId').val(_d.RESULT["PATIENT_ID"]);
            }
            else {
                $('#' + ctrlcom + '_ApptPatientId').val(_d.RESULT["PAT_ID"]);
            }


            $("#" + ctrlcom + "_Umrlookup__hiddenText").val(_d.RESULT["UMR_NO"]);
            document.getElementById('' + ctrlcom + '_Umrlookup__hiddenID').value = patient_id;
            document.getElementById('' + ctrlcom + '_hdnAPTID').value = _d.RESULT["APMNT_ID"];
            reqid = _d.RESULT["APMNT_ID"];
            slottime = _d.RESULT["SLOT_TIME"];
            slotid = _d.RESULT["APMNT_ID"];
            var slot_token_no = _d.RESULT["SLOT_TOKEN_NO"];
            if (slot_token_no == undefined || slot_token_no == null || slot_token_no == '') { slot_token_no = 0; }
            slotid = slotid + "," + slot_token_no;
            GetPatientDetails(patient_id, _d.RESULT["RSRC_ID"], _d.RESULT["APMNT_ID"], _d.RESULT["SCH_START_TIME"], _d.RESULT["GENDER_ID"], _d.RESULT["PATIENT_NAME"], _d.RESULT["TITILE_ID"], _d.RESULT["FIRST_NAME"], _d.RESULT["LAST_NAME"], _d.RESULT["MARITAL_STATUS_ID"], _d.RESULT["AGE"], _d.RESULT["RSRC_NAME"], _d.RESULT["MOBILE_NO"], _d.RESULT["MOBILE_NO2"], _d.RESULT["EMAIL_ID"], _d.RESULT["GENDER_NAME"], _d.RESULT["ADDRESS1"], _d.RESULT["DOB"], _d.RESULT["AREA_ID"], _d.RESULT["STATE_ID"], _d.RESULT["COUNTRY_ID"], _d.RESULT["CITY_ID"], _d.RESULT["AREA_NAME"], _d.RESULT["STATE_NAME"], _d.RESULT["COUNTRY_NAME"], _d.RESULT["CITY_NAME"], _d.RESULT["RES_PERSON_REL_ID"], _d.RESULT["RES_PERSON_NAME"], _d.RESULT["BLOOD_GROUP_ID"], _d.RESULT["RELIGION_ID"], _d.RESULT["PATIENT_TYPE_ID"], _d.RESULT["OCCUPATION_ID"], _d.RESULT["NATIONALITY_ID"], _d.RESULT["QUESTIONARY_ID"], _d.RESULT["REMARKS"], _d.RESULT["DEPARTMENT_NAME"], _d.RESULT["COUNTER_DOCTOR_STS"], _d.RESULT["IS_COUNTER_REQIRED"]);
            if (_d.RESULT["TITILE_ID"] == null || _d.RESULT["TITILE_ID"] == "" || _d.RESULT["TITILE_ID"] == undefined) {
                document.getElementById('' + ctrlcom + '_ddlTitle').selectedIndex = 0;
                document.getElementById('' + ctrlcom + '_ddlTitle').className = 'red';
                document.getElementById('' + ctrlcom + '_ddlTitle').focus();
            }
            if (_d.RESULT["GENDER_ID"] == null || _d.RESULT["GENDER_ID"] == "" || _d.RESULT["GENDER_ID"] == undefined) {
                document.getElementById('' + ctrlcom + '_ddlGender').selectedIndex = 0;
            }
            if (_d.RESULT["OCCUPATION_ID"] == null || _d.RESULT["OCCUPATION_ID"] == "" || _d.RESULT["OCCUPATION_ID"] == undefined) {
                document.getElementById('' + ctrlcom + '_ddlOccupation').selectedIndex = 0;
            }
            if (_d.RESULT.IS_VIP.trim() == "Y") {
                document.getElementById('' + ctrlcom + '_rbt_pat_type_1').checked = true;
                PatientTypeChange();
            }
            document.getElementById('' + ctrlcom + '_ddlTitle').focus();
        }
        if (_d.RESULT.NATIONALITY_ID == "0") {
            document.getElementById('' + ctrlcom + '_ddlNationality').value = ddlnationality;
        }
    }


}
function BindPatientBannerPatientDetails(patient_id, UmrNo) {

    GetAsync("autocompleteservice.asmx/GetAuto_new_UmrNo",
    { prefixText: UmrNo, contextKey: 1 },
    function (jdata) {
        //console.log(jdata.d);
        if (jdata.d.length > 0) {
            var tb = $.parseJSON($.parseJSON(jdata.d).Second);
            var _cobj = {};
            _cobj._lktext = $.parseJSON(jdata.d).First;
            _cobj.ID = tb.PATIENT_ID;
            _cobj.RESULT = tb;
            OnUmrSelection(_cobj);
            document.getElementById('' + ctrlcom + '_UCServices_hdnGender_ID').value = document.getElementById('' + ctrlcom + '_umrPatientDetails_hdnGenderID').value;
        }
    },
    function (jqXHR, textStatus, errorThrown) {
    });
}
function Titlecase(oField) {
    var myValue = document.getElementById(oField.id).innerHTML;
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
    myValue = myValue.toUpperCase().trim();
    return myValue;
}
/* GetPatientDetails Of Appointment Lookup Seletion */
function GetPatientDetails(patientid, rscid, aptid, scdele_time, Gender, patName, Title, Firstname, Lastname, Mstatus, age, rsrcname, mobill1, mobile2, emailid, gender, Address, DOB, Area, State, Country, City, AreaName, Statename, CountryName, CityName, Resperid, Respername, Bloodgroupid, religionid, patTypeid, occuid, nationalityid, quationaryid, Remarks, Department_Name, COUNTER_DOCTOR_STS, IS_COUNTER_REQIRED) {
    document.getElementById('' + ctrlcom + '_ddlTitle').value = Title;
    document.getElementById('' + ctrlcom + '_txtDisplayname').innerHTML = patName.toUpperCase();
    var Values = Titlecase(document.getElementById('' + ctrlcom + '_txtDisplayname'));
    var Varible = Values.split(' ');
    document.getElementById('' + ctrlcom + '_txtFirstName').value = Varible[0];
    if (Varible.length > 1) {
        document.getElementById('' + ctrlcom + '_txtLastName').value = Varible[Varible.length - 1];
    }
    for (var i = 1; i < Varible.length - 1; i++) {
        document.getElementById('' + ctrlcom + '_txtMiddleName').value = document.getElementById('' + ctrlcom + '_txtMiddleName').value + Varible[i];
    }

    if (mobile2 == undefined || mobile2 == null || mobile2 == 'undefined') { mobile2 = ''; }
    if (mobill1 == undefined || mobill1 == null || mobill1 == 'undefined') { mobill1 = ''; }
    if (emailid == undefined || emailid == null || emailid == 'undefined') { emailid = ''; }
    if (Address == undefined || Address == null || Address == 'undefined') { Address = ''; }

    document.getElementById('' + ctrlcom + '_txtFirstName').value = TitleCase(document.getElementById('' + ctrlcom + '_txtFirstName'));
    document.getElementById('' + ctrlcom + '_txtMiddleName').value = TitleCase(document.getElementById('' + ctrlcom + '_txtMiddleName'));
    document.getElementById('' + ctrlcom + '_txtLastName').value = TitleCase(document.getElementById('' + ctrlcom + '_txtLastName'));
    document.getElementById('' + ctrlcom + '_ddlGender').value = Gender;
    document.getElementById('' + ctrlcom + '_ddlMaritalStatus').value = '0';
    document.getElementById('' + ctrlcom + '_Address1_txtMobile1').value = mobill1;
    document.getElementById('' + ctrlcom + '_Address1_txtMobile2').value = mobile2;
    document.getElementById('' + ctrlcom + '_Address1_txtemail').value = emailid;

    document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnPatientName').value = patName;
    document.getElementById('' + ctrlcom + '_Address1_txtAddress1').value = Address;
    document.getElementById('' + ctrlcom + '_Address1_txtAddress1').value = TitleCase(document.getElementById('' + ctrlcom + '_Address1_txtAddress1'));
    if (DOB != null && DOB != '' && age != '') {
        var str = DOB.split(" ")
        var Dob = new Date(str[0]).format('dd-MM-yyyy');
        document.getElementById('' + ctrlcom + '_newAgeUc_txtDob').value = Dob;
        ValidatetextChangedDateOfBirth_appt();
    }
    else if (age != '') {
        $('#' + ctrlcom + '_newAgeUc_txtYear').val(age);
        CalAge();
        ValidatetextChangedDateOfBirth_appt();
    }
    else if (DOB != '' && DOB != null) {
        var str = DOB.split(" ")
        var Dob = new Date(str[0]).format('dd-MM-yyyy');
        document.getElementById('' + ctrlcom + '_newAgeUc_txtDob').value = Dob;
        ValidatetextChangedDateOfBirth_appt();
    }
    $("#lk_txt_ctl00_ContentPlaceHolder1_ucConsultant").val(rsrcname);
    document.getElementById('' + ctrlcom + '_hdnDID').value = rscid;
    document.getElementById('' + ctrlcom + '_hdnDNAME').value = rsrcname;
    if (AreaName == undefined || AreaName == null || AreaName == 'undefined') { AreaName = ''; }
    if (Area == undefined || Area == null || Area == 'undefined') { Area = '0'; }
    if (CityName == undefined || CityName == null || CityName == 'undefined') { CityName = ''; }
    if (City == undefined || City == null || City == 'undefined') { City = '0'; }
    if (Statename == undefined || Statename == null || Statename == 'undefined') { Statename = ''; }
    if (State == undefined || State == null || State == 'undefined') { State = '0'; }
    if (CountryName == undefined || CountryName == null || CountryName == 'undefined') { CountryName = ''; }
    if (Country == undefined || Country == null || Country == 'undefined') { Country = '0'; }

    document.getElementById('' + ctrlcom + '_Address1_AreaUserControl1_txtSearchControl').value = AreaName;
    AreaName = document.getElementById('' + ctrlcom + '_Address1_AreaUserControl1_txtSearchControl').value = TitleCase(document.getElementById('' + ctrlcom + '_Address1_AreaUserControl1_txtSearchControl'));
    document.getElementById('' + ctrlcom + '_Address1_hdnAreaId').value = Area;
    document.getElementById('' + ctrlcom + '_Address1_AreaUserControl1__hiddenText').value = AreaName;
    document.getElementById('' + ctrlcom + '_Address1_AreaUserControl1__hiddenID').value = Area;
    document.getElementById('' + ctrlcom + '_Address1_CityUserControl1').value = CityName;


    CityName = document.getElementById('' + ctrlcom + '_Address1_CityUserControl1').value = TitleCase(document.getElementById('' + ctrlcom + '_Address1_CityUserControl1'));
    document.getElementById('' + ctrlcom + '_Address1_hdncityid').value = City;
    document.getElementById('' + ctrlcom + '_Address1_StateUserControl1').value = Statename;
    Statename = document.getElementById('' + ctrlcom + '_Address1_StateUserControl1').value = TitleCase(document.getElementById('' + ctrlcom + '_Address1_StateUserControl1'));
    document.getElementById('' + ctrlcom + '_Address1_hdnstateid').value = State;
    document.getElementById('' + ctrlcom + '_Address1_CountryUserControl1').value = CountryName;
    CountryName = document.getElementById('' + ctrlcom + '_Address1_CountryUserControl1').value = TitleCase(document.getElementById('' + ctrlcom + '_Address1_CountryUserControl1'));
    document.getElementById('' + ctrlcom + '_Address1_hdncountryid').value = Country;
    /* THis Condition Added By Pushkar For Health Checkup Appointments We Need To Pass Appt_id in Bellow Hidden Field */
    if (patientid == null || patientid == undefined || patientid == '' || patientid == 0) {
        document.getElementById('' + ctrlcom + '_ApptPatientId').value = aptid;
    }
    else {
        document.getElementById('' + ctrlcom + '_ApptPatientId').value = patientid;
    }
    $("#lk_txt_ctl00_ContentPlaceHolder1_UcAppointmentNo").val(aptid);
    document.getElementById('' + ctrlcom + '_txtResPerson').value = typeof Respername == "string" ? Respername : '';
    if (patTypeid == '' || patTypeid == null || patTypeid == 0 || patTypeid == undefined) { patTypeid = 1; }
    document.getElementById('' + ctrlcom + '_ddlPatientType').selectedIndex = patTypeid;
    nationalityid = nationalityid == "" ? "1" : nationalityid;
    if (nationalityid == '0') {
        nationalityid = $('#' + ctrlcom + '_hdnddlNationality').val();
    }
    document.getElementById('' + ctrlcom + '_ddlNationality').value = typeof nationalityid == "string" ? nationalityid : '1';
    document.getElementById('' + ctrlcom + '_ddlReligion').value = typeof religionid == "string" ? religionid : '0';
    document.getElementById('' + ctrlcom + '_hdnApptDocID').value = rscid;
    document.getElementById('' + ctrlcom + '_ddlOccupation').value = typeof occuid == "string" ? occuid : '0';
    if (Department_Name == '' || Department_Name == null || Department_Name == undefined) { Department_Name = ''; }
    if (rsrcname == '' || rsrcname == null || rsrcname == undefined) { rsrcname = ''; }
    document.getElementById('' + ctrlcom + '_ucConsultant_txtSearchControl').value = rsrcname + '-' + Department_Name;
    document.getElementById('' + ctrlcom + '_ucConsultant__hiddenText').value = typeof rsrcname == "string" ? rsrcname + '-' + Department_Name : '';
    document.getElementById('' + ctrlcom + '_ucConsultant__hiddenID').value = (typeof rscid == "string" || typeof rscid == "number") ? rscid : '';
    document.getElementById('' + ctrlcom + '_hdnConsultant').value = (typeof rscid == "string" || typeof rscid == "number") ? rscid : '';

    document.getElementById('' + ctrlcom + '_hdnDoctor_ID').value = rscid;
    document.getElementById('' + ctrlcom + '_hdnDoctorName').value = rsrcname;
    document.getElementById('' + ctrlcom + '_hdnDoctorName').value = TitleCase(document.getElementById('' + ctrlcom + '_hdnDoctorName'));
    document.getElementById('' + ctrlcom + '_hdnDoctorCd').value = '';
    document.getElementById('' + ctrlcom + '_hdnDeptId').value = '';
    document.getElementById('' + ctrlcom + '_hdnDeptName').value = '';
    if (COUNTER_DOCTOR_STS == '' || COUNTER_DOCTOR_STS == undefined || COUNTER_DOCTOR_STS == null || COUNTER_DOCTOR_STS == 'undefined') { COUNTER_DOCTOR_STS = ''; }
    if (IS_COUNTER_REQIRED == '' || IS_COUNTER_REQIRED == undefined || IS_COUNTER_REQIRED == null || IS_COUNTER_REQIRED == 'undefined') { IS_COUNTER_REQIRED = ''; }
    if ((IS_COUNTER_REQIRED == 'N') || (IS_COUNTER_REQIRED == 'Y' && COUNTER_DOCTOR_STS == 'Y')) {
        AddDoctortoGrid();
    }
    ExtendedDisplayValues(); if (document.getElementById('' + ctrlcom + '_ddlRegType').value != '5') { OnPageValidation(); }
    return false;
} /*Appt consultation pre condition*/
function onApptPreCondition(obj) {
    //    GetAsync(
    //                            "Private/FrontOffice/OPDBill.aspx/ONApptPreCondition",
    //                            { Flag: obj },
    //                            function (JData) {
    //                            },
    //                            function (jqXHR, textStatus, errorThrown) {
    //                            });
    document.getElementById('ctl00_ContentPlaceHolder1_UcAppointmentNo_hdn_preCond').value = obj;
}
/*Appointments OR Pre-Registration Div Show /Hide */
function Apnmt_PreReg() {
    reqid = 0;
    slottime = "";
    slotid = 0;
    apptdocid = 0;
    /* if (document.getElementById('' + ctrlcom + '_pre_regi').value == 'Appointment#') {
    document.getElementById('divapmnt').style.display = 'block';
    document.getElementById('divprereg').style.display = 'none';
    }
    else if (document.getElementById('' + ctrlcom + '_pre_regi').value == 'Pre Registration #') {
    $("#"+ ctrlcom + "_UCprereg_txtSearchControl").val('');
    document.getElementById('divprereg').style.display = 'block';
    document.getElementById('divapmnt').style.display = 'none';
    }*/

    document.getElementById('' + ctrlcom + '_chkIsRegNotReq').checked = false;
    document.getElementById('' + ctrlcom + '_chkIsRegNotReq').disabled = false;
    document.getElementById('' + ctrlcom + '_ddlRegType').disabled = false;
    document.getElementById('' + ctrlcom + '_ddlRegType').value = '2';
    document.getElementById('' + ctrlcom + '_UcFamilyReff_txtSearchControl').disabled = false;
    document.getElementById('lk_btn_ctl00_ContentPlaceHolder1_UcFamilyReff').disabled = false;

    document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnISOSP').value = 'N';
    document.getElementById('' + ctrlcom + '_hdnpre_regi').value = '';
    EnableDisableControls(false);

    document.getElementById('' + ctrlcom + '_ReceiptControl2_chkismultiple').checked = false
    OnMultipleDiscGrid();

    if (document.getElementById('' + ctrlcom + '_pre_regi').value != '5') {
        ClearRegControls();
    }
    DisableEnableServiceGrid(false);
    EnableDisableHospitalControls(false);
    document.getElementById('' + ctrlcom + '_UCServices_rbtnSrvsAndCons_0').disabled = false;
    document.getElementById('' + ctrlcom + '_UCServices_rbtnSrvsAndCons_1').disabled = false;
    var regfee = document.getElementById('' + ctrlcom + '_hdnregfee').value;
    document.getElementById('' + ctrlcom + '_UCServices_hdnReg_fee').value = regfee;
    document.getElementById('' + ctrlcom + '_txtregfee').value = regfee;
    document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnPayAmt').value = regfee;
    document.getElementById('' + ctrlcom + '_txtumrno').value = document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnTranUMRNO').value
    document.getElementById('' + ctrlcom + '_chkisold').disabled = true;

    if (document.getElementById('' + ctrlcom + '_hdnAssesmnt').value == 'True') {
        document.getElementById('divAssements').style.display = 'block';
    }
    else {
        document.getElementById('divAssements').style.display = 'none';
    }

    var IsHealthCardReq = document.getElementById('' + ctrlcom + '_hdnIsHealthCardReq').value;
    if (IsHealthCardReq.toLowerCase() == 'true') {
        $('#' + ctrlcom + '_Address1_chkhccrd').parent().show()
    }
    else {
        $('#' + ctrlcom + '_Address1_chkhccrd').parent().hide()
    }


    if (document.getElementById('' + ctrlcom + '_pre_regi').value == '0') {
        document.getElementById('divapmnt').style.display = 'none';
        document.getElementById('divprereg').style.display = 'none';
        //document.getElementById('' + ctrlcom + '_PkgLooupDiv').style.display = 'none';
        //document.getElementById('' + ctrlcom + '_tdDrIndent').style.display = 'none';
        document.getElementById('divOSP').style.display = 'none';
        document.getElementById('' + ctrlcom + '_chkisold').disabled = false;
        selectRegType('');
        //        PatientPackageAmounts();
    }
    else if (document.getElementById('' + ctrlcom + '_pre_regi').value == '1') {
        clearAppointmentLookup();
        document.getElementById('divapmnt').style.display = 'block';
        document.getElementById('divprereg').style.display = 'none';
        //document.getElementById('' + ctrlcom + '_PkgLooupDiv').style.display = 'none';
        //document.getElementById('' + ctrlcom + '_tdDrIndent').style.display = 'none';
        document.getElementById('divOSP').style.display = 'none';
        onApptPreCondition('RCN');
        document.getElementById('' + ctrlcom + '_chk_old').checked = false;
        document.getElementById('' + ctrlcom + '_chk_old').disabled = true;
    }
    else if (document.getElementById('' + ctrlcom + '_pre_regi').value == '2') {
        clearPreRegistrationLookup();
        document.getElementById('divprereg').style.display = 'block';
        document.getElementById('divapmnt').style.display = 'none';
        //document.getElementById('' + ctrlcom + '_PkgLooupDiv').style.display = 'none';
        //document.getElementById('' + ctrlcom + '_tdDrIndent').style.display = 'none';
        document.getElementById('divOSP').style.display = 'none';
        document.getElementById('' + ctrlcom + '_chk_old').checked = false;
        document.getElementById('' + ctrlcom + '_chk_old').disabled = true;
    }
    else if (document.getElementById('' + ctrlcom + '_pre_regi').value == '3') {
        /*$("#"+ ctrlcom + "_UCprereg_txtSearchControl").val('');
        $("#"+ ctrlcom + "_UCprereg__hiddenText").val('');
        $("#"+ ctrlcom + "_UCprereg__hiddenID").val('');
        document.getElementById('' + ctrlcom + '_hdnpreregid').value = '';
        document.getElementById('divprereg').style.display = 'none';
        document.getElementById('divapmnt').style.display = 'none';
        document.getElementById('' + ctrlcom + '_PkgLooupDiv').style.display = 'block';
        document.getElementById('' + ctrlcom + '_tdDrIndent').style.display = 'none';
        document.getElementById('divOSP').style.display = 'none';
        document.getElementById('' + ctrlcom + '_ucPkgUmrNo_txtSearchControl').readOnly = true;
        document.getElementById('' + ctrlcom + '_UCServices_rbtnSrvsAndCons_0').checked = true;
        document.getElementById('' + ctrlcom + '_UCServices_rbtnSrvsAndCons_0').disabled = true;
        document.getElementById('' + ctrlcom + '_UCServices_rbtnSrvsAndCons_1').disabled = true;
        document.getElementById('' + ctrlcom + '_ddlRegType').value = '2';
        ChangeSrvToCons();
        EnableDisableControls(true);
        PatientPackageAmounts();
        DisableEnableServiceGrid(true);
        EnableDisableHospitalControls(true);*/
    }
    else if (document.getElementById('' + ctrlcom + '_pre_regi').value == '4') {
        /*  document.getElementById('divprereg').style.display = 'none';
        document.getElementById('divapmnt').style.display = 'none';
        document.getElementById('' + ctrlcom + '_PkgLooupDiv').style.display = 'none';
        document.getElementById('' + ctrlcom + '_tdDrIndent').style.display = 'block';
        document.getElementById('divOSP').style.display = 'none';
        document.getElementById('' + ctrlcom + '_UCServices_rbtnSrvsAndCons_1').checked = true;
        document.getElementById('' + ctrlcom + '_UCServices_rbtnSrvsAndCons_0').disabled = true;
        document.getElementById('' + ctrlcom + '_UCServices_rbtnSrvsAndCons_1').disabled = true;
        document.getElementById('' + ctrlcom + '_ddlRegType').value = '2';
        ChangeSrvToCons();
        EnableDisableHospitalControls(true);
        //EnableDisableControls(true);
        PatientPackageAmounts();
        DisableEnableServiceGrid(true);
        document.getElementById('' + ctrlcom + '_hdnIndentPopUpCount').value == 'Indent'  */
    }
    else if (document.getElementById('' + ctrlcom + '_pre_regi').value == '5') {
        $('#divRegNotReq').css('display', 'block');

        $('#' + ctrlcom + '_Address1_chkhccrd').parent().hide()
        document.getElementById('' + ctrlcom + '_hdnpre_regi').value = '5';
        document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnISOSP').value = 'Y';
        OnColorChanges();
        document.getElementById('' + ctrlcom + '_txtumrno').value = document.getElementById('' + ctrlcom + '_hdnOSPNo').value
        document.getElementById('divprereg').style.display = 'none';
        document.getElementById('divapmnt').style.display = 'none';
        //document.getElementById('' + ctrlcom + '_PkgLooupDiv').style.display = 'none';
        //document.getElementById('' + ctrlcom + '_tdDrIndent').style.display = 'none';
        document.getElementById('divOSP').style.display = 'block';
        document.getElementById('' + ctrlcom + '_UCServices_rbtnSrvsAndCons_1').checked = true;
        document.getElementById('' + ctrlcom + '_UCServices_rbtnSrvsAndCons_0').disabled = true;
        document.getElementById('' + ctrlcom + '_UCServices_rbtnSrvsAndCons_1').disabled = true;
        document.getElementById('' + ctrlcom + '_ddlRegType').value = '13';
        ChangeSrvToCons();
        OnOSPValidation();
        //        EnableDisableHospitalControls(true);
        PatientPackageAmounts();

        OnOSPContorlsEnableDisable(true);
        //        ddlpatienttypeChange(document.getElementById('' + ctrlcom + '_ddlPatientType'));
        $('#' + ctrlcom + '_emppnl').hide();
        document.getElementById('lk_btn_ctl00_ContentPlaceHolder1_ucConsultant').disabled = false;
        document.getElementById('' + ctrlcom + '_dd_reg_source').disabled = true;
        document.getElementById('' + ctrlcom + '_dd_reg_source').className = 'grey';
        document.getElementById('' + ctrlcom + '_source_remarks').disabled = true;
        document.getElementById('' + ctrlcom + '_source_remarks').className = 'grey';

        document.getElementById('' + ctrlcom + '_ddlRegType').disabled = true;
        document.getElementById('' + ctrlcom + '_UcFamilyReff_txtSearchControl').disabled = true;
        document.getElementById('lk_btn_ctl00_ContentPlaceHolder1_UcFamilyReff').disabled = true;
        if (document.getElementById('' + ctrlcom + '_ucReferal_ddlreferral').value == 0) {
            document.getElementById('' + ctrlcom + '_ucReferal_ucreferalname_txtSearchControl').disabled = true;
            document.getElementById('lk_btn_ctl00_ContentPlaceHolder1_ucReferal_ucreferalname').disabled = true;
        }
        document.getElementById('' + ctrlcom + '_ucConsultant_txtSearchControl').value = '';
        document.getElementById('' + ctrlcom + '_ucConsultant__hiddenText').value = '';
        document.getElementById('' + ctrlcom + '_ucConsultant__hiddenID').value = '';
        ClearServicesGrid();
        PatientRegFeeAmounts('0');
        AssignServicesGrid2();
        document.getElementById('' + ctrlcom + '_chkIsRegNotReq').checked = true;
        document.getElementById('' + ctrlcom + '_chkIsRegNotReq').disabled = true;
        OnRegNotReq('OSP');
        document.getElementById('divAssements').style.display = 'none'; /*for osp assessment not required*/
    }
    OnPageValidation();
    document.getElementById('' + ctrlcom + '_UCServices_hdnOptions').value = document.getElementById('' + ctrlcom + '_pre_regi').value;
    if (document.getElementById('' + ctrlcom + '_hdnRefReq').value == "Yes") {
        if (document.getElementById('ctl00_ContentPlaceHolder1_ucReferal_ddlreferral').value == 0) {
         var preregstra = document.getElementById('ctl00_ContentPlaceHolder1_pre_regi').value;
         if (preregstra == "5" ) {
             document.getElementById('ctl00_ContentPlaceHolder1_ucReferal_ddlreferral').className = 'red';
         }
        }
    }
}
function clearPreRegistrationLookup() {
    document.getElementById('' + ctrlcom + '_UCprereg_txtSearchControl').value = '';
    document.getElementById('' + ctrlcom + '_UCprereg__hiddenID').value = '';
    document.getElementById('' + ctrlcom + '_UCprereg__hiddenText').value = '';
    document.getElementById('' + ctrlcom + '_hdnpreregid').value = '';
}
function clearAppointmentLookup() {
    document.getElementById('' + ctrlcom + '_UcAppointmentNo_txtSearchControl').value = '';
    document.getElementById('' + ctrlcom + '_UcAppointmentNo__hiddenID').value = '';
    document.getElementById('' + ctrlcom + '_UcAppointmentNo__hiddenText').value = '';
    document.getElementById('' + ctrlcom + '_hdnAPTID').value = '';
    document.getElementById('' + ctrlcom + '_ApptPatientId').value = '';
    document.getElementById('' + ctrlcom + '_hdnApptDocID').value = '';
}
/*Disable/Enable Hospital Controls against Selection*/
function EnableDisableHospitalControls(val) {
    if (val == true || val == false) {
        document.getElementById('' + ctrlcom + '_ChkNBorn').disabled = val;
        document.getElementById('' + ctrlcom + '_chkisold').disabled = val;
        document.getElementById('' + ctrlcom + '_rbt_pat_type_0').disabled = val;
        document.getElementById('' + ctrlcom + '_rbt_pat_type_1').disabled = val;
        document.getElementById('' + ctrlcom + '_rbt_pat_type_2').disabled = val;
        document.getElementById('' + ctrlcom + '_ddlRegType').disabled = val;
        document.getElementById('' + ctrlcom + '_UcFamilyReff_txtSearchControl').disabled = val;
        document.getElementById('lk_btn_ctl00_ContentPlaceHolder1_UcFamilyReff').disabled = val;
        document.getElementById('' + ctrlcom + '_txtumrno').disabled = val;
        document.getElementById('' + ctrlcom + '_chk_old').disabled = val;
        if (document.getElementById('' + ctrlcom + '_pre_regi').value == '4') {
            document.getElementById('' + ctrlcom + '_Umrlookup_txtSearchControl').disabled = false;
            document.getElementById('lk_btn_ctl00_ContentPlaceHolder1_Umrlookup').disabled = false;
        }
        else {
            document.getElementById('' + ctrlcom + '_Umrlookup_txtSearchControl').disabled = val;
            document.getElementById('lk_btn_ctl00_ContentPlaceHolder1_Umrlookup').disabled = val;
        }
    }
    else {
        document.getElementById('' + ctrlcom + '_ChkNBorn').value = val;
        document.getElementById('' + ctrlcom + '_chkisold').value = val;
        document.getElementById('' + ctrlcom + '_rbt_pat_type_0').value = val;
        document.getElementById('' + ctrlcom + '_rbt_pat_type_1').value = val;
        document.getElementById('' + ctrlcom + '_rbt_pat_type_2').value = val;
        document.getElementById('' + ctrlcom + '_ddlRegType').value = val;
        document.getElementById('' + ctrlcom + '_UcFamilyReff_txtSearchControl').value = val;
        document.getElementById('lk_btn_ctl00_ContentPlaceHolder1_UcFamilyReff').value = val;
        document.getElementById('' + ctrlcom + '_txtumrno').value = val;
        document.getElementById('' + ctrlcom + '_Umrlookup_txtSearchControl').value = val;
    }
    if (document.getElementById('' + ctrlcom + '_pre_regi').value == '5') {
        document.getElementById('' + ctrlcom + '_ucReferal_ddlreferral').value = '0';
        document.getElementById('' + ctrlcom + '_ucReferal_ucreferalname_txtSearchControl').disabled = true;
        var ddlreferal = document.getElementById('' + ctrlcom + '_ucReferal_ddlreferral');
        SetReferalContextKey(ddlreferal);
        document.getElementById('' + ctrlcom + '_chk_old').checked = false;
        //        OnGetUmrLookup();
    }
    else {
        document.getElementById('' + ctrlcom + '_chk_old').checked = val;
        //        OnGetUmrLookup();
    }
}
/*Disable/Enable controls against OSP Selection*/
function OnOSPContorlsEnableDisable(ev) {
    EnableDisableControls(false);
    //document.getElementById('' + ctrlcom + '_txtMotherMName').disabled = true;
    //    document.getElementById('' + ctrlcom + '_ucConsultant_txtSearchControl').disabled = true;
    document.getElementById('lk_btn_ctl00_ContentPlaceHolder1_ucConsultant').disabled = true;
    //document.getElementById('' + ctrlcom + '_ddlResPerson').disabled = true;
    //document.getElementById('' + ctrlcom + '_txtResPerson').disabled = true;
    document.getElementById('' + ctrlcom + '_txtPassprotno').disabled = true;
    document.getElementById('' + ctrlcom + '_txtIssueDt').disabled = true;
    document.getElementById('' + ctrlcom + '_txtExpiryDt').disabled = true;
    document.getElementById('' + ctrlcom + '_txtissuedat').disabled = true;
    document.getElementById('' + ctrlcom + '_txtSSN').disabled = true;
    document.getElementById('' + ctrlcom + '_ddlPatientType').value = 1;
    document.getElementById('' + ctrlcom + '_ddlPatientType').disabled = true;
    document.getElementById('' + ctrlcom + '_chk_old').disabled = true;
    document.getElementById('' + ctrlcom + '_chk_old').checked = false;
    document.getElementById('' + ctrlcom + '_tdtxtUmr').style.display = 'block';
    document.getElementById('' + ctrlcom + '_tdUmr').style.display = 'none';
    document.getElementById('' + ctrlcom + '_divumr').style.display = 'none';

    document.getElementById('' + ctrlcom + '_ddlTitle').focus();
}
/* osp mandatory controls indications*/
function OnOSPValidation() {
    var _chkValidation = true;
    var _ctrls = new Array();
    _ctrls[0] = 'ctl00_ContentPlaceHolder1_ddlTitle';
    _ctrls[1] = 'ctl00_ContentPlaceHolder1_txtFirstName';
    // _ctrls[2] = 'ctl00_ContentPlaceHolder1_txtLastName';
    _ctrls[3] = 'ctl00_ContentPlaceHolder1_Address1_AreaUserControl1_txtSearchControl';
    _ctrls[4] = 'ctl00_ContentPlaceHolder1_Address1_txtAddress1';
    if (document.getElementById('' + ctrlcom + '_hdnOSPMbl').value == 'True') {
        _ctrls[5] = 'ctl00_ContentPlaceHolder1_Address1_txtMobile1';
    }
    _ctrls[6] = 'ctl00_ContentPlaceHolder1_newAgeUc_txtDob';

        // _ctrls[7] = 'ctl00_ContentPlaceHolder1_ucConsultant_txtSearchControl';
        document.getElementById('ctl00_ContentPlaceHolder1_ucConsultant_txtSearchControl').className = 'grey';
  
    for (var i = 0; i < _ctrls.length; i++) {

        var ctrl = document.getElementById(_ctrls[i]);
        if (OnNullValue(ctrl) == false) {
            _chkValidation = false;
        }
    }
    return _chkValidation;
}
function PatientPackageAmounts() {
    document.getElementById('' + ctrlcom + '_UCServices_hdnReg_fee').value = "0";
    document.getElementById('' + ctrlcom + '_txtregfee').value = "0";
    document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnPayAmt').value = "0";
    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatgross').value = document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnPayAmt').value;
    $('#' + ctrlcom + '_txtconamt').val('0');
    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtnetamt').value = document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnPayAmt').value;
    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatNet').value = document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnPayAmt').value;
    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtTotalNet').value = document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnPayAmt').value;
    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatdue').value = document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnPayAmt').value;
    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtgrosstotal').value = document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnPayAmt').value;
    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtDueamount').value = document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnPayAmt').value;
    document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnNetAmt').value = document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnPayAmt').value;
    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtdueamt').value = document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnPayAmt').value;
    document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnDueAmt').value = document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnPayAmt').value;
    $('#' + ctrlcom + '_txtcardNoCmp').val('');
    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtTotalDue').value = document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnPayAmt').value;
}
function EnableDisableControls(val) {
    document.getElementById('' + ctrlcom + '_ddlTitle').disabled = val;
    document.getElementById('' + ctrlcom + '_txtFirstName').disabled = val;
    document.getElementById('' + ctrlcom + '_txtMiddleName').disabled = val;
    document.getElementById('' + ctrlcom + '_txtLastName').disabled = val;
    document.getElementById('' + ctrlcom + '_newAgeUc_txtDob').disabled = val;
    document.getElementById('' + ctrlcom + '_newAgeUc_txtYear').disabled = val;
    //    document.getElementById('' + ctrlcom + '_newAgeUc_txtMonths').disabled = val;
    document.getElementById('' + ctrlcom + '_ddlGender').disabled = val;
    document.getElementById('' + ctrlcom + '_txtDisplayname').disabled = val;
    document.getElementById('' + ctrlcom + '_txtMotherMName').disabled = val;

    document.getElementById('' + ctrlcom + '_txtfathername').disabled = val;
    document.getElementById('' + ctrlcom + '_ddlResPerson').disabled = val;
    document.getElementById('' + ctrlcom + '_txtResPerson').disabled = val;
    document.getElementById('' + ctrlcom + '_ucConsultant_txtSearchControl').disabled = val;
    document.getElementById('lk_btn_ctl00_ContentPlaceHolder1_ucConsultant').disabled = val;
    document.getElementById('' + ctrlcom + '_ddlPatientType').disabled = val;
    //    document.getElementById('' + ctrlcom + '_txtSSN').disabled = val;
    //    document.getElementById('' + ctrlcom + '_txtPassprotno').disabled = val;
    //    document.getElementById('' + ctrlcom + '_txtIssueDt').disabled = val;
    //    document.getElementById('' + ctrlcom + '_txtExpiryDt').disabled = val;
    //    document.getElementById('' + ctrlcom + '_txtissuedat').disabled = val;
    document.getElementById('' + ctrlcom + '_ucReferal_ddlreferral').disabled = val;
    // document.getElementById('' + ctrlcom + '_ucReferal_ucreferalname_txtSearchControl').disabled = val;
    // document.getElementById('lk_btn_ctl00_ContentPlaceHolder1_ucReferal_ucreferalname').disabled = val;

    document.getElementById('' + ctrlcom + '_Address1_txtMobile1').disabled = val;
    document.getElementById('' + ctrlcom + '_Address1_txtMobile2').disabled = val;
    document.getElementById('' + ctrlcom + '_newAgeUc_imgCal').disabled = val;

    document.getElementById('' + ctrlcom + '_ddlMaritalStatus').disabled = val;
    document.getElementById('' + ctrlcom + '_ddlBloodGroup').disabled = val;
    document.getElementById('' + ctrlcom + '_ddlOccupation').disabled = val;
    document.getElementById('' + ctrlcom + '_ddlReligion').disabled = val;
    document.getElementById('' + ctrlcom + '_ddlproofid').disabled = val;

    document.getElementById('' + ctrlcom + '_dd_reg_source').disabled = val;
    document.getElementById('' + ctrlcom + '_source_remarks').disabled = val;
    document.getElementById('' + ctrlcom + '_Address1_chkDND').disabled = val;
    document.getElementById('' + ctrlcom + '_Address1_chkIsSenior').disabled = val;
    document.getElementById('' + ctrlcom + '_txtemail').disabled = val;
    EnableDisableAddressControls(val); EnableDisableReferalControls(val);
}
function EnableDisableReferalControls(val) {
    document.getElementById('' + ctrlcom + '_ucReferal_ddlreferral').disabled = val;
    //document.getElementById('' + ctrlcom + '_ucReferal_ucreferalname_txtSearchControl').disabled = val;

    document.getElementById('' + ctrlcom + '_ucReferal_txtrefaddr').disabled = val;
    document.getElementById('' + ctrlcom + '_ucReferal_txtRefPhone').disabled = val;
}
function EnableDisableAddressControls(val) {
    $('#' + ctrlcom + '_chkSameasPresentAddress')[0].disabled = val;
    $('#' + ctrlcom + '_chkCopyFromPresentAddress')[0].disabled = val;
    document.getElementById('' + ctrlcom + '_Address1_txtAddress1').disabled = val;
    document.getElementById('' + ctrlcom + '_txtAddress2').disabled = val;
    document.getElementById('' + ctrlcom + '_Address1_AreaUserControl1_txtSearchControl').disabled = val;
    document.getElementById('' + ctrlcom + '_Address1_AreaUserControl1_txtSearchControl').disabled = val;
    document.getElementById('' + ctrlcom + '_txtPin').disabled = val;
    document.getElementById('lk_btn_ctl00_ContentPlaceHolder1_AreaUserControl1').disabled = val;
}
/*Clear all Controls*/
function ClearRegControls() {
    var regfee = $('#' + ctrlcom + '_hdnregfee').val();
    document.getElementById('' + ctrlcom + '_hdnAPTID').value = '0';
    document.getElementById('' + ctrlcom + '_hdnpreregid').value = '0';
    $('[id$=hdnBillId]').val('0'); $('[id$=hdnIndOrderId]').val('0');
    document.getElementById('' + ctrlcom + '_ddlTitle').value = '0';
    document.getElementById('' + ctrlcom + '_txtFirstName').value = '';
    document.getElementById('' + ctrlcom + '_txtMiddleName').value = '';
    document.getElementById('' + ctrlcom + '_txtLastName').value = '';
    document.getElementById('' + ctrlcom + '_newAgeUc_txtDob').value = '__-__-____';
    document.getElementById('' + ctrlcom + '_newAgeUc_txtYear').value = '0';
    document.getElementById('' + ctrlcom + '_newAgeUc_txtMonths').value = '0';
    document.getElementById('' + ctrlcom + '_newAgeUc_txtDay').value = '0';
    document.getElementById('' + ctrlcom + '_ddlGender').value = '0';
    document.getElementById('' + ctrlcom + '_txtDisplayname').innerHTML = '';
    document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnPatientName').value = '';
    document.getElementById('' + ctrlcom + '_txtMotherMName').value = '';

    document.getElementById('' + ctrlcom + '_txtfathername').value = '';
    document.getElementById('' + ctrlcom + '_ddlResPerson').value = '0';
    document.getElementById('' + ctrlcom + '_txtResPerson').value = '';
    document.getElementById('' + ctrlcom + '_ucConsultant_txtSearchControl').value = '';
    document.getElementById('lk_btn_ctl00_ContentPlaceHolder1_ucConsultant').value = '';
    document.getElementById('' + ctrlcom + '_ddlPatientType').value = '1';
    document.getElementById('' + ctrlcom + '_txtSSN').value = '';
    document.getElementById('' + ctrlcom + '_txtPassprotno').value = '';
    document.getElementById('' + ctrlcom + '_txtIssueDt').value = '';
    document.getElementById('' + ctrlcom + '_txtExpiryDt').value = '';
    document.getElementById('' + ctrlcom + '_txtissuedat').value = '';
    document.getElementById('' + ctrlcom + '_ucReferal_ddlreferral').value = '';
    document.getElementById('' + ctrlcom + '_ucReferal_ucreferalname_txtSearchControl').value = '';
    document.getElementById('lk_btn_ctl00_ContentPlaceHolder1_ucReferal_ucreferalname').value = '';

    document.getElementById('' + ctrlcom + '_Address1_txtMobile1').value = '';
    document.getElementById('' + ctrlcom + '_Address1_txtMobile2').value = '';
    // document.getElementById('' + ctrlcom + '_ucPkgUmrNo_txtSearchControl').value = '';
    //document.getElementById('' + ctrlcom + '_ucPkgUmrNo__hiddenText').value = '';
    //document.getElementById('' + ctrlcom + '_ucPkgUmrNo__hiddenID').value = '';
    document.getElementById('' + ctrlcom + '_Umrlookup_txtSearchControl').value = '';
    document.getElementById('' + ctrlcom + '_Umrlookup__hiddenText').value = '';
    document.getElementById('' + ctrlcom + '_Umrlookup__hiddenID').value = '';
    document.getElementById('' + ctrlcom + '_dd_reg_source').value = '0';
    document.getElementById('' + ctrlcom + '_source_remarks').value = '';
    document.getElementById('' + ctrlcom + '_rbt_pat_type_0').checked = true;
    PatientTypeChange();
    ClearAddrDtls();
    clearRefDtls(); ClearServicesGrid();
    ClearIndents(); PatientRegFeeAmounts(regfee);  //ClearTransactionUserControl();
}
function ClearTransactionUserControl() {
    $("#lblquick").addClass("select");
    $("#lbladvanced").removeClass("select");
    var regfee = $('#' + ctrlcom + '_hdnregfee').val();
    /*Total Gross Amounts*/
    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatgross').value = regfee;
    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtparygross').value = 0;
    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtgrosstotal').value = regfee;
    document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlDiscountType').value = 0;
    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtcashAmt').value = '0';
    /*Total Due Amount */
    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtdueamt').value = regfee;
    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatdue').value = regfee;
    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtcmpDue').value = '0';
    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtTotalDue').value = regfee;
    document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlDiscountType').value = '0';
    /*Advanced Disc Types */
    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatdis').value = '0';
    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpartydis').value = '0';
    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatgrossamt').value = regfee;
    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpartygrossamt').value = 0;
    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtgrossamttotal').value = regfee;
    /*Net Amounts */
    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatNet').value = regfee;
    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtcmpNet').value = '0';
    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtTotalNet').value = regfee;
    document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnNetAmt').value = regfee;
    document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnDueAmt').value = regfee;
    $('#' + ctrlcom + '_ReceiptControl2_hdnPayAmt').val(regfee);
    $('#' + ctrlcom + '_ReceiptControl2_txtreceiptAmount').val('0');
    $('#' + ctrlcom + '_ReceiptControl2_txtDueamount').val('0');
    $("table[id$=ctl00_ContentPlaceHolder1_ReceiptControl2_gvReceiptDetails] tr:gt(1)").each(function (i, j) { $(this).remove(); });
    ClearTransactioncontrols();
}

/*Clear all Indent controls*/
function ClearIndents() {
    // document.getElementById('' + ctrlcom + '_txtDrIndents').value = '';
    document.getElementById('' + ctrlcom + '_hdnIndOrderId').value = '';
    document.getElementById('' + ctrlcom + '_hdnConsultantID').value = '';
    document.getElementById('' + ctrlcom + '_hdnIndentPopUpCount').value = '';
}

function CheckIsSeniorCitizen(val) {

    var ddlTitle = document.getElementById('' + ctrlcom + '_ddlTitle');
    var ddlTitleIndex = document.getElementById('' + ctrlcom + '_ddlTitle').selectedIndex;
    var val1 = ddlTitleIndex;
    if (val == 'Y') {
        //if ((val == 'Y') && (ddlTitle[val1].innerHTML == 'Mr' || ddlTitle[val1].innerHTML == 'Ms' || ddlTitle[val1].innerHTML == 'Mrs' || ddlTitle[val1].innerHTML == 'Dr' || ddlTitle[val1].innerHTML == 'Prof' || ddlTitle[val1].innerHTML == 'Capt')) {
        document.getElementById('' + ctrlcom + '_Address1_chkIsSenior').checked = true;
        /*  }
        else {
        document.getElementById('' + ctrlcom + '_Address1_chkIsSenior').checked = false;
        }*/
    }
    else if (val == 'N') {
        document.getElementById('' + ctrlcom + '_Address1_chkIsSenior').checked = false;
    }
}
/* Display Name Based On Company Policy Setting */
function SetDisplayName1(ctrlid) {
    var ddlDisplayName = document.getElementById('' + ctrlcom + '_hdnDisplayNameSetting');
    var lblDisplayName = document.getElementById('' + ctrlcom + '_txtDisplayname');
    var txtFirstName = document.getElementById('' + ctrlcom + '_txtFirstName');
    var txtMiddleName = document.getElementById('' + ctrlcom + '_txtMiddleName');
    var txtLastName = document.getElementById('' + ctrlcom + '_txtLastName');

    if (ctrlid != null) {
        if (ctrlid.id != "ctl00_ContentPlaceHolder1_txtMiddleName") {
            OnNullValue(ctrlid);
        }
        /*
        else if (ddlDisplayName.value != 'First Name And Last Name') {
        OnNullValue(ctrlid);
        }*/
    }
    var val = 2;
    var fname = '', mname = '', lname = '';
    if (val > -1) {
        /*if (ddlDisplayName.value == 'First Name And Last Name') {
        fname = TitleCase(txtFirstName);
        lname = TitleCase(txtLastName);
        if (fname == null || fname == '' || fname == undefined) { fname = fname; } else { fname = fname.trim(); }
        if (lname == null || lname == '' || lname == undefined) { lname = lname; } else { lname = lname.trim(); }
        lblDisplayName.innerHTML = fname + ' ' + lname;
        }
        else if (ddlDisplayName.value == 'First Name And Middle Name') {
        fname = TitleCase(txtFirstName);
        mname = TitleCase(txtMiddleName);
        if (fname == null || fname == '' || fname == undefined) { fname = fname; } else { fname = fname.trim(); }
        if (mname == null || mname == '' || mname == undefined) { mname = mname; } else { mname = mname.trim(); }
        lblDisplayName.innerHTML = fname + ' ' + mname;
        }
        else if (ddlDisplayName.value == 'First Name And Middle Name And Last Name') {
        fname = TitleCase(txtFirstName);
        mname = TitleCase(txtMiddleName);
        lname = TitleCase(txtLastName);
        if (fname == null || fname == '' || fname == undefined) { fname = fname; } else { fname = fname.trim(); }
        if (mname == null || mname == '' || mname == undefined) { mname = mname; } else { mname = mname.trim(); }
        if (lname == null || lname == '' || lname == undefined) { lname = lname; } else { lname = lname.trim(); }
        if (mname != '') {
        lblDisplayName.innerHTML = fname + ' ' + mname + ' ' + lname;
        }
        else {
        lblDisplayName.innerHTML = fname + ' ' + lname;
        }
        }*/
        if (ddlDisplayName.value != '') {
            fname = TitleCase(txtFirstName);
            mname = TitleCase(txtMiddleName);
            lname = TitleCase(txtLastName);
            if (fname == null || fname == '' || fname == undefined) { fname = fname; } else { fname = fname.trim(); }
            if (mname == null || mname == '' || mname == undefined) { mname = mname; } else { mname = mname.trim(); }
            if (lname == null || lname == '' || lname == undefined) { lname = lname; } else { lname = lname.trim(); }
            if (mname != '') {
                lblDisplayName.innerHTML = fname + ' ' + mname + ' ' + lname;
            }
            else {
                lblDisplayName.innerHTML = fname + ' ' + lname;
            }
        }
        else {
            fname = TitleCase(txtFirstName);
            lname = TitleCase(txtLastName);
            if (fname == null || fname == '' || fname == undefined) { fname = fname; } else { fname = fname.trim(); }
            if (lname == null || lname == '' || lname == undefined) { lname = lname; } else { lname = lname.trim(); }
            lblDisplayName.innerHTML = fname + ' ' + lname;
        }
        document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnPatientName').value = lblDisplayName.innerHTML;
        if (document.getElementById('' + ctrlcom + '_ddlResPerson').value == '4')
            document.getElementById('' + ctrlcom + '_txtResPerson').value = lblDisplayName.innerHTML;
    }
    else {
        lblDisplayName.innerHTML = '';
        document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnPatientName').value = '';
        return false;
    }
    if (document.getElementById('' + ctrlcom + '_ddlPatientType').value != '1' && document.getElementById('' + ctrlcom + '_ddlPatientType').value != '0') {
        if (document.getElementById('' + ctrlcom + '_EmployerInfo1_ddlrelation').value == 14) {
            EmployeeAsPatient();
        }
    }
    OnExtendedPatName();
    return false;
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
function ddlResPersonChng(ev) {
    var kin = document.getElementById('ctl00_ContentPlaceHolder1_ddlResPerson').value;
    var kinname = $('[id*=ddlResPerson]').find('option:selected').text();
    var priv_val = document.getElementById('' + ctrlcom + '_hdnPriv_Res_name').value;
    if (document.getElementById('' + ctrlcom + '_ddlResPerson').value == '4') {
        document.getElementById('' + ctrlcom + '_txtResPerson').value = document.getElementById('' + ctrlcom + '_txtDisplayname').innerHTML;
        document.getElementById('' + ctrlcom + '_txtResPerson').disabled = true;
        if (document.getElementById('' + ctrlcom + '_txtResPerson').value == "") {
            document.getElementById('' + ctrlcom + '_txtResPerson').className = 'red';
        } else { document.getElementById('' + ctrlcom + '_txtResPerson').className = 'grey'; }
    }
    else if (priv_val == '4' && document.getElementById('' + ctrlcom + '_ddlResPerson').value != '4') {
        document.getElementById('' + ctrlcom + '_txtResPerson').disabled = false;
        document.getElementById('' + ctrlcom + '_txtResPerson').value = '';
    }
    else {
        document.getElementById('' + ctrlcom + '_txtResPerson').disabled = false;
        if (document.getElementById('' + ctrlcom + '_txtResPerson').value == "") {
            document.getElementById('' + ctrlcom + '_txtResPerson').className = 'red';
        } else { document.getElementById('' + ctrlcom + '_txtResPerson').className = 'grey'; }
    }
    if (document.getElementById('ctl00_ContentPlaceHolder1_ChkNBorn').checked == true && (kin == '2' || kin == '7' || kin == '9' || kin == '10' || kin == '11' || kin == '16' || kin == '19' || kin == '20' || kin == '26' || kin == '27' || kin == '29' || kin == '32' || kin == '33' || kin == '14')) {
        document.getElementById('ctl00_ContentPlaceHolder1_ddlResPerson').value = '0';
        $(".stoast").toastText("warning", "You Shouldn't Select New Born Baby As Kin Of " + kinname + "", 5, 3);
        return false;
    }
    if (document.getElementById('' + ctrlcom + '_txtResPerson').value != '' && document.getElementById('' + ctrlcom + '_ddlTitle').value == 3 && document.getElementById('' + ctrlcom + '_ddlResPerson').value == 2) {
        document.getElementById('' + ctrlcom + '_ddlMaritalStatus').value = 2;
    }
    else {
        /* document.getElementById('' + ctrlcom + '_ddlMaritalStatus').value = 0;*/
    }
    document.getElementById('' + ctrlcom + '_hdnPriv_Res_name').value = document.getElementById('' + ctrlcom + '_ddlResPerson').value;
    OnResPonsiblePerson();

}

function onExtendedDoctor() {
    var consultant = document.getElementById('' + ctrlcom + '_ucConsultant_txtSearchControl').value;
    if (consultant == undefined || consultant == null) { consultant = ''; }
    extendedDisplay.setData(8, 'Consultant :', consultant)
}
function DisableEnableServiceGrid(val) {
    //    $('table[id*=gvServices] tr:has(td) input[type=text]').attr('disabled', true)
    $('[id$=gvServices] tr').filter(':eq(' + 1 + ')').find('input[type=text][id*=txtServiceName]').attr('disabled', val);
    $('[id$=gvServices] tr').filter(':eq(' + 1 + ')').find('input[type=text][id*=txtServiceCode]').attr('disabled', val);
    $('[id$=gvServices] tr').filter(':eq(' + 1 + ')').find('input[type=button][id*=BtnSrvSearch]').attr('disabled', val);
}
function OnRegNotReq(obj) {
    if (document.getElementById('' + ctrlcom + '_chkIsRegNotReq').checked) {
        document.getElementById('' + ctrlcom + '_chk_old').disabled = true; /* added by pushkar */
        if (obj == 'Diagnostics') {
            if (document.getElementById('' + ctrlcom + '_chk_old').checked) {

                onGetPatientBanner();
            }
            document.getElementById('' + ctrlcom + '_TxtOspNO').value = document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnTranUMRNO').value;
            document.getElementById('' + ctrlcom + '_txtumrno').value = document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnTranUMRNO').value;
            document.getElementById('' + ctrlcom + '_pre_regi').value = '5';
            Apnmt_PreReg();
            document.getElementById('' + ctrlcom + '_chkIsRegNotReq').disabled = false;


        }
        else if (obj == 'OSP') {
            document.getElementById('' + ctrlcom + '_TxtOspNO').value = document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnTranUMRNO').value;
            document.getElementById('' + ctrlcom + '_txtumrno').value = document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnTranUMRNO').value;
        }

    }
    else {
        document.getElementById('' + ctrlcom + '_chk_old').disabled = false; /* added by pushkar */
        if (obj == 'Diagnostics') {
            document.getElementById('' + ctrlcom + '_TxtOspNO').value = document.getElementById('' + ctrlcom + '_hdnOSPNo').value;
            document.getElementById('' + ctrlcom + '_txtumrno').value = document.getElementById('' + ctrlcom + '_hdnOSPNo').value;
            document.getElementById('' + ctrlcom + '_pre_regi').value = '0';
            Apnmt_PreReg();

        }
        else if (obj == 'OSP') {
            document.getElementById('' + ctrlcom + '_TxtOspNO').value = document.getElementById('' + ctrlcom + '_hdnOSPNo').value;
            document.getElementById('' + ctrlcom + '_txtumrno').value = document.getElementById('' + ctrlcom + '_hdnOSPNo').value;
        }

    }
}

function ApplyStylesIsRegistredCheck() {
    if ($('#' + ctrlcom + '_chk_old')[0].checked == true) {
        $("#isoldclick").addClass("isold");
    } else {
        $("#isoldclick").removeClass("isold");

    }
}

function OnUmrData(input) {
}
function BindEmpData() {

    if (document.getElementById('divHC').style.display == 'block') {
        return false;
    }
    var staffrelation = document.getElementById('' + ctrlcom + '_StaffRelation').value;
    var reg_type = document.getElementById('' + ctrlcom + '_ddlRegType').value;
    var staff_name = document.getElementById('' + ctrlcom + '_UcStaffName_txtSearchControl').value;
    if (reg_type == 7) {
        if (staff_name == "" || staff_name == null || staff_name == undefined) {
            $(".stoast").toastText("warning", "Plese enter staff name.", 5, 3);
            document.getElementById('' + ctrlcom + '_UcStaffName_txtSearchControl').focus();
            document.getElementById('' + ctrlcom + '_StaffRelation').value = 0;
            return false;
        }
        else {
        }
    }
    if (staffrelation == 3 || staffrelation == 4 || staffrelation == 7 || staffrelation == 13 || staffrelation == 11 || staffrelation == 8 || staffrelation == 19) {
        document.getElementById('' + ctrlcom + '_ddlGender').value = 2;
        //document.getElementById('' + ctrlcom + '_ddlGender').disabled = true;
        document.getElementById('' + ctrlcom + '_ddlTitle').selectedIndex = 0;
    }
    if (staffrelation == 2 || staffrelation == 5 || staffrelation == 6 || staffrelation == 9 || staffrelation == 10 || staffrelation == 12 || staffrelation == 15 || staffrelation == 17 || staffrelation == 18) {
        document.getElementById('' + ctrlcom + '_ddlGender').value = 1;
        //document.getElementById('' + ctrlcom + '_ddlGender').disabled = true;
        document.getElementById('' + ctrlcom + '_ddlTitle').selectedIndex = 1;
    }
    var staff_id = document.getElementById('' + ctrlcom + '_hdnEmpId').value;
    var rel_id = document.getElementById('' + ctrlcom + '_StaffRelation').value;
    /*  $.ajax({
    type: "POST",
    url: "YRegistration.aspx/GetStaff_Dependent",
    data: "{'staff_id': '" + staff_id + "','rel_id': '" + rel_id + "'}",
    contentType: "application/json; charset=utf-8",
    dataType: "json",
    error: function (jqXHR, textStatus, errorThrown) { },
    success: function (data) {
    if (data.d.length > 0) {
    if (data.d[0]["AGE"] != null && data.d[0]["AGE"] != undefined && data.d[0]["AGE"] != '') {
    document.getElementById('' + ctrlcom + '_newAgeUc_txtYear').value = data.d[0]["AGE"].split(',')[0];
    }
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
    });*/
    $('#' + ctrlcom + '_lblEmpRelation').text("Employee Relation Details");
    var param = param || {};
    var cName = '';
    var pText = '';
    // var count = 0;
    // var id = ID;
    param.dataKey = "DEPENDENT_ID";
    param.defaultWSParams = { staff_id: staff_id, rel_id: rel_id };
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
        OnRelationSelection(key, staff_id);
    };
    gridControlEmpRel = $("#divEmpRelation").jtable(param);
    return false;
}
function VisittypeOspBill() {
    if (document.getElementById('' + ctrlcom + '_ddlNationality').value != $('#' + ctrlcom + '_hdnddlNationality').val()) {
        document.getElementById('' + ctrlcom + '_Address1_AreaUserControl1_txtSearchControl').className = 'grey';
        document.getElementById('' + ctrlcom + '_Address1_ddrelationaddr').className = 'grey';
    }
    else {
        document.getElementById('' + ctrlcom + '_ucConsultant_txtSearchControl').className = 'red';
        document.getElementById('' + ctrlcom + '_ucReferal_ucreferalname_txtSearchControl').className = 'red';
        document.getElementById('' + ctrlcom + '_Address1_AreaUserControl1_txtSearchControl').className = 'red';
        document.getElementById('' + ctrlcom + '_Address1_ddrelationaddr').className = 'red';
    }
}
var dblregfee = new Array();
function RegFeeAmt() {
    var ddlregtypeVal = document.getElementById('' + ctrlcom + '_ddlRegType').value;
    if (dblregfee.length == 0) {
        GetNonAsync("Private/FrontOffice/OPDBILLNEW.aspx/GetRegFeeandValidity",
        { RegTypeVal: ddlregtypeVal },
        function (jdata) {

            var regfee = 0;
            if (jdata.d != null) {
                if (jdata.d.length > 0) {
                    dblregfee = jdata;
                    document.getElementById('' + ctrlcom + '_txtregfee').value = jdata.d[0].REGISTRATION_FEE;
                    var validityDays = jdata.d[0].REGISTRATION_VALIDITY;
                    var _new_date = GetFutureDate(new Date().format('dd-MMM-yyyy'), validityDays);
                    var dateformat = $('#' + ctrlcom + '_hdndateformat').val();
                    var split = dateformat.split(' ');
                    var current_format = split[0];
                    document.getElementById('' + ctrlcom + '_txtregValidity').value = _new_date.format(current_format);
                    $('#' + ctrlcom + '_hdnregfee').val(jdata.d[0].REGISTRATION_FEE);
                    regfee = $('#' + ctrlcom + '_hdnregfee').val();
                    PatientRegFeeAmounts(regfee);
                }
                else {
                    if (document.getElementById('' + ctrlcom + '_ddlRegType').value == 9) {
                        $('#' + ctrlcom + '_hdnregfee').val("0");
                        GetRegFees();
                    }
                    else {
                        $(".stoast").toastText("warning", "This Registration Type Configuration Not Done.So Please Contact Administration", 5, 3);
                        document.getElementById('' + ctrlcom + '_ddlRegType').value = 2;
                        selectRegType(document.getElementById('' + ctrlcom + '_ddlRegType'));
                    }
                }
            }
            else {


            }
            if (document.getElementById('' + ctrlcom + '_hdnRegFeeAutoFill').value == 'True') {
                document.getElementById('' + ctrlcom + '_ReceiptControl2_txtcashAmt').value = document.getElementById('' + ctrlcom + '_hdnregfee').value;
                CalculateAmount(document.getElementById('' + ctrlcom + '_ReceiptControl2_txtcashAmt'), 'Cash');
                IsEmptyReplaceWithZero(document.getElementById('' + ctrlcom + '_ReceiptControl2_txtcashAmt'));

            }

            ExtendedDisplayValues();
        },
        function () {
        });
    }
}
function PermissionRedirect() {
    gridpage1();
}
function AccessAddDisableAttributes() {
    //    var count = 0;
    //    var hdnAddDisableAttr = document.getElementById('' + ctrlcom + '_hdnAddDisableAttr').value;
    //    if (hdnAddDisableAttr != "" && hdnAddDisableAttr != undefined && hdnAddDisableAttr != null) {
    //        var regDoc = hdnAddDisableAttr.split(',');
    //        for (var i = 0; i < regDoc.length; i++) {
    //            var docIds = regDoc[i].toUpperCase().trim();
    //            switch (docIds) {
    //                case "CTL00_CONTENTPLACEHOLDER1_CHK_OLD":
    //                    regDoc[i] = "77";
    //                    break;
    //                case "CTL00_CONTENTPLACEHOLDER1_UCSERVICES_RBTNSRVSANDCONS_0":
    //                    regDoc[i] = "76";
    //                    break;
    //                case "CTL00_CONTENTPLACEHOLDER1_UCSERVICES_RBTNSRVSANDCONS_1":
    //                    regDoc[i] = "75";
    //                    break;
    //                default:
    //                    break;
    //            }
    //        }
    //        if (regDoc.length == 3) {
    //            $(".smessagebox").scustommessagebox(2, "Alert", "You don't have permissions,Please contact administrator...", PermissionRedirect);
    //            var arr = new Array(9, 83, 32);
    //            $(document).keydown(function (e) {
    //                var key = e.which;
    //                if ($.inArray(key, arr) > -1) {
    //                    e.preventDefault();
    //                    return false;
    //                }
    //                return true;
    //            });
    //            return false;
    //        }
    //        else if (!regDoc.toString().match(/77/)) {
    //            //            document.getElementById('' + ctrlcom + '_chk_old').checked = false;
    //            document.getElementById('' + ctrlcom + '_chk_old').disabled = true;
    //            $('#' + ctrlcom + '_UCServices_rbtnSrvsAndCons').find('input[type=radio]').attr('disabled', true);
    //            if (regDoc.toString() == "77") {
    //                document.getElementById('' + ctrlcom + '_chk_old').checked = false;
    //                $('#' + ctrlcom + '_UCServices_gv_services_header_ctl03_txtServiceName').attr('disabled', true);
    //                $('#BtnSrvSearchService').attr('disabled', true);
    //            }
    //        }
    //        else {
    //            $('#' + ctrlcom + '_UCServices_rbtnSrvsAndCons').find('input[type=radio]').attr('disabled', true);
    //        }
    //        for (var i = 0; i < regDoc.length; i++) {
    //            var docIds = regDoc[i];
    //            switch (docIds) {
    //                case "75":
    //                    document.getElementById('' + ctrlcom + '_UCServices_rbtnSrvsAndCons_0').checked = true;
    //                    document.getElementById('' + ctrlcom + '_UCServices_rbtnSrvsAndCons_1').checked = false;
    //                    document.getElementById('' + ctrlcom + '_chk_old').disabled = false;
    //                    ChangeSrvToCons();
    //                    $('#' + ctrlcom + '_UCServices_rbtnSrvsAndCons').find('input[type=radio]').attr('disabled', true);
    //                    break;
    //                case "76":
    //                    document.getElementById('' + ctrlcom + '_UCServices_rbtnSrvsAndCons_0').checked = false;
    //                    document.getElementById('' + ctrlcom + '_UCServices_rbtnSrvsAndCons_1').checked = true;
    //                    document.getElementById('' + ctrlcom + '_chk_old').disabled = false;
    //                    ChangeSrvToCons();
    //                    $('#' + ctrlcom + '_UCServices_rbtnSrvsAndCons').find('input[type=radio]').attr('disabled', true);
    //                    break;
    //                case "77":
    //                    document.getElementById('' + ctrlcom + '_chk_old').checked = true;
    //                    document.getElementById('' + ctrlcom + '_chk_old').disabled = true;
    //                    $('#' + ctrlcom + '_UCServices_rbtnSrvsAndCons').find('input[type=radio]').attr('disabled', true);
    //                    break;
    //                default:
    //                    break;
    //            }
    //        }

    //    }

}

var Reg_Count = 0;
function PatientRegFeeAmounts(val) {
    /* Reg Fee Not Required in BIll */
    //    if (document.getElementById('' + ctrlcom + '_chkreg_not_req').checked == true) {
    //        var hdnval = 'REGISTRATION' + ',' + 'REG' + ',' + val;
    //        $('#' + ctrlcom + '_hdnregnotreq').val(hdnval);
    //        return false;
    //    }
    if (document.getElementById('' + ctrlcom + '_chk_old').checked == false || document.getElementById('' + ctrlcom + '_umrPatientDetails_hdnOspRegReq').value == 'Y') {
        $('#' + ctrlcom + '_ReceiptControl2_txtpatgross').val(val);
        $('#' + ctrlcom + '_txtconamt').val('0');
        $('#' + ctrlcom + '_ReceiptControl2_txtnetamt').val(val);
        $('#' + ctrlcom + '_ReceiptControl2_TextBox1').val(val);
        $('#' + ctrlcom + '_ReceiptControl2_TextBox7').val(val);
        $('#' + ctrlcom + '_ReceiptControl2_txtgrosstotal').val(val);
        $('#' + ctrlcom + '_ReceiptControl2_txtpatNet').val(val);
        $('#' + ctrlcom + '_ReceiptControl2_txtTotalNet').val(val);
        $('#' + ctrlcom + '_ReceiptControl2_txtDueamount').val(val);
        $('#' + ctrlcom + '_ReceiptControl2_txtTotalDue').val(val);
        $('#' + ctrlcom + '_ReceiptControl2_hdnNetAmt').val(val);
        $('#' + ctrlcom + '_txtdueamt').val(val);
        $('#' + ctrlcom + '_ReceiptControl2_txtpatdue').val(val);
        $('#ctl00_ContentPlaceHol der1_ReceiptControl2_txtTotalDue').val(val);
        $('#' + ctrlcom + '_ReceiptControl2_hdnPayAmt').val(val);
        $('#' + ctrlcom + '_UCServices_hdnReg_fee').val(val);
        if (document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatdue').value == '0') {
            document.getElementById('' + ctrlcom + '_ReceiptControl2_Search3_txtSearchControl').className = 'grey';
        }
        else {
            var asses = document.getElementById('' + ctrlcom + '_ChkAssesment').checked;
            if (asses == true) {
                document.getElementById('' + ctrlcom + '_ReceiptControl2_Search3_txtSearchControl').className = 'grey';
            }
            else {
                document.getElementById('' + ctrlcom + '_ReceiptControl2_Search3_txtSearchControl').className = 'red';
            }

        }
        if (document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnRegconSetting').value == "Yes" || document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnRegconSetting').value == "True") {
            if (document.getElementById('' + ctrlcom + '_chk_old').checked == false || document.getElementById('' + ctrlcom + '_umrPatientDetails_hdnOspRegReq').value == 'Y') {
                var ddlregtype = document.getElementById('' + ctrlcom + '_ddlRegType');
                var ddlregtypeIndex = document.getElementById('' + ctrlcom + '_ddlRegType').selectedIndex;
                var ddl = ddlregtypeIndex;
                var Serv_id = 1; var Srv_cd = 'REG'; var Srv_Name = 'REGISTRATION';
                var Price = val; var service_type_id = 5;
                if (ddlregtype[ddl].innerHTML.trim() != 'IsCorporate') {
                    if ($('[id$=gvServices] tr').filter(':eq(' + 0 + ')').find('input[type=text][id*=txtServiceName]').val() != "REGISTRATION") {
                        Reg_Count = 0; Reg_Count++;
                        fn_AddFilterRow_pkgbillSelection('G', 'N', 'N', 'N', 'N', 'N', 1, 1, Srv_Name, Srv_cd, '', Price, 0, Price, '', 1, '', 0, 0, service_type_id, 0, 1, '', 'N', '', '', 0, '', 0, 0, Price, Price, Price, '', '', '', '', '', '', '', '', 0, 0, 0, 0, 0, 0, 0, 0);
                        $('[id$=gvServices] tr').filter(':eq(' + 0 + ')').find('input[type=text][id*=txtServiceName]').attr('disabled', true);
                        $('[id$=gvServices] tr').filter(':eq(' + 0 + ')').find('input[type=text][id*=txtServiceCode]').attr('disabled', true);
                        $('[id$=gvServices] tr').filter(':eq(' + 0 + ')').find('input[type=button][id*=BtnSrvSearch]').attr('disabled', true);
                        $('[id$=gvServices] tr').filter(':eq(' + 0 + ')').find('[id*=ddSType]').val(0);
                        $('[id$=gvServices] tr').filter(':eq(' + 0 + ')').find('[id*=ddSType]').attr('disabled', true);
                        $('[id$=gvServices] tr').filter(':eq(' + 0 + ')').find('[id*=imgBtnDelete]').css('display', 'none');
                        $('[id$=gvServices] tr').filter(':eq(' + 0 + ')').find('[id*=chkstat]').css('display', 'none');
                        RegSrv = Srv_cd;

                        var Pat_cmp = '1';
                        var Pat_cmp_chk = $('#' + ctrlcom + '_ddlPatientType').val();
                        if (Pat_cmp == '2')
                        { Pat_cmp = '2'; }
                        var is_pas_enabled = $('#' + ctrlcom + '_ReceiptControl2_hdnPasIntgrtnReq').val();
                        if ((Pat_cmp == '2' || is_pas_enabled == 'True') && document.getElementById('' + ctrlcom + '_UCServices_hdnPrePrintedBarcodeReq').value == 'Yes')/* cmp with barcd*/
                        {
                            // document.getElementById('' + ctrlcom + '_UCServices_gv_services_header').className = 'grid gvServices-bdis';
                            // document.getElementById('' + ctrlcom + '_UCServices_gvServices').className = 'grid gvServices-bdis';
                        }
                        else if ((Pat_cmp == '2' || is_pas_enabled == 'True') && document.getElementById('' + ctrlcom + '_UCServices_hdnPrePrintedBarcodeReq').value != 'Yes') /* cmp without barcd*/
                        {
                            //document.getElementById('' + ctrlcom + '_UCServices_gv_services_header').className = 'grid gvServices-dis';
                            // document.getElementById('' + ctrlcom + '_UCServices_gvServices').className = 'grid gvServices-dis';
                        }
                        else if (Pat_cmp != '2' && document.getElementById('' + ctrlcom + '_UCServices_hdnPrePrintedBarcodeReq').value == 'Yes') /*pat with bartcd */
                        {
                            // document.getElementById('' + ctrlcom + '_UCServices_gv_services_header').className = 'grid gvServices-bmin';
                            // document.getElementById('' + ctrlcom + '_UCServices_gvServices').className = 'grid gvServices-bmin';
                        }
                        else if (Pat_cmp != '2' && document.getElementById('' + ctrlcom + '_UCServices_hdnPrePrintedBarcodeReq').value != 'Yes') /* pat without barcd */
                        {
                            //document.getElementById('' + ctrlcom + '_UCServices_gv_services_header').className = 'grid gvServices-min';
                            //document.getElementById('' + ctrlcom + '_UCServices_gvServices').className = 'grid gvServices-min';
                        }

                    }
                    else if (Reg_Count == 1) {
                        $('[id$=gvServices] tr').filter(':eq(' + 0 + ')').find('input[type=text][id*=txtRate]').val(val);
                        $('[id$=gvServices] tr').filter(':eq(' + 0 + ')').find('input[type=text][id*=txtAmount]').val(val);
                        $('[id$=gvServices] tr').filter(':eq(' + 0 + ')').find('input[type=button][id*=txtPamt]').val(val);

                        var Damt = $('[id$=gvServices] tr').filter(':eq(' + 0 + ')').find('input[type=text][id*=txtDiscAmt]').val();
                        var Hamt = $('[id$=gvServices] tr').filter(':eq(' + 0 + ')').find('input[type=text][id*=txtHcAmt]').val();
                        var Mamt = $('[id$=gvServices] tr').filter(':eq(' + 0 + ')').find('input[type=button][id*=txtmgAmt]').val();
                        var Samt = $('[id$=gvServices] tr').filter(':eq(' + 0 + ')').find('input[type=text][id*=txtstAmt]').val();
                        var Eamt = $('[id$=gvServices] tr').filter(':eq(' + 0 + ')').find('input[type=text][id*=txtebAmt]').val();
                        var CRamt = $('[id$=gvServices] tr').filter(':eq(' + 0 + ')').find('input[type=button][id*=txtcncrlAmt]').val();
                        var PNamt = $('[id$=gvServices] tr').filter(':eq(' + 0 + ')').find('input[type=button][id*=txtPamt]').val(val) - parseFloat(Damt) - parseFloat(Hamt) - parseFloat(Mamt) - parseFloat(Samt) - parseFloat(Eamt) - parseFloat(CRamt);
                        $('[id$=gvServices] tr').filter(':eq(' + 0 + ')').find('input[type=button][id*=txtPNAmt]').val(parseFloat(PNamt));
                        CalculateGridAmt(0);
                    }
                }
                else {
                    $('[id$=gvServices] tr').filter(':eq(' + 0 + ')').find('input[type=text][id*=txtRate]').val(val);
                    $('[id$=gvServices] tr').filter(':eq(' + 0 + ')').find('input[type=text][id*=txtAmount]').val(val);
                    $('[id$=gvServices] tr').filter(':eq(' + 0 + ')').find('input[type=button][id*=txtPamt]').val(val);

                    var Damt = $('[id$=gvServices] tr').filter(':eq(' + 0 + ')').find('input[type=text][id*=txtDiscAmt]').val();
                    var Hamt = $('[id$=gvServices] tr').filter(':eq(' + 0 + ')').find('input[type=text][id*=txtHcAmt]').val();
                    var Mamt = $('[id$=gvServices] tr').filter(':eq(' + 0 + ')').find('input[type=button][id*=txtmgAmt]').val();
                    var Samt = $('[id$=gvServices] tr').filter(':eq(' + 0 + ')').find('input[type=text][id*=txtstAmt]').val();
                    var Eamt = $('[id$=gvServices] tr').filter(':eq(' + 0 + ')').find('input[type=text][id*=txtebAmt]').val();
                    var CRamt = $('[id$=gvServices] tr').filter(':eq(' + 0 + ')').find('input[type=button][id*=txtcncrlAmt]').val();
                    var PNamt = $('[id$=gvServices] tr').filter(':eq(' + 0 + ')').find('input[type=button][id*=txtPamt]').val(val) - parseFloat(Damt) - parseFloat(Hamt) - parseFloat(Mamt) - parseFloat(Samt) - parseFloat(Eamt) - parseFloat(CRamt);
                    $('[id$=gvServices] tr').filter(':eq(' + 0 + ')').find('input[type=button][id*=txtPNAmt]').val(parseFloat(PNamt));
                    CalculateGridAmt(0);
                }
            }
        }
    }


}

function Ontabindex() {

    var redElements = document.getElementsByClassName('red');
    var allElements = document.querySelectorAll('*');
    var tabIndex = 1;

    for (var i = 0; i < redElements.length; i++) {
        redElements[i].tabIndex = tabIndex;
        tabIndex++;
    }

    for (var j = 0; j < allElements.length; j++) {
        if (!allElements[j].classList.contains('red'))
            allElements[j].tabIndex = -1;
    }
    ctl00_ContentPlaceHolder1_UCServices_gv_services_header_ctl03_txtServiceName.tabIndex = 13;

 }