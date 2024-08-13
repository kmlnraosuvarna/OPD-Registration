function OnUmrSelection(input) {
    var form_name = document.getElementById('<%=hdnDocName.ClientID %>').value;
    document.getElementById('<%=hdnUAdmnNO.ClientID %>').value = '';
    if (form_name == 'MULTIPLEBILLS') {
        var ADMN_NO = $('[id*=IPPatientDtls1_ucUmrNo_txtSearchControl]').val();
        if (ADMN_NO == '' || ADMN_NO == undefined || ADMN_NO == 'undefined') {
            document.getElementById('' + ctrlcom + '_umrPatientDetails_ucbill_txtSearchControl').value = '';
            document.getElementById('' + ctrlcom + '_umrPatientDetails_ucbill__hiddenID').value = 0;
            document.getElementById('' + ctrlcom + '_umrPatientDetails_ucbill__hiddenText').value = '';
            $('#' + ctrlcom + '_umrPatientDetails_ucbill_txtSearchControl').addClass('red');
        }
    }
    switch (form_name) {
        case "HISAPPT":
            {
                ClearApptControls();
            }
            break;
        case "ER":
            {
                checkERstatus(input);
            }
            break;
        case "OpBillAssesment":
            {
                checkHCstatus(input);
            }
            break;
        case "FeedBack Form":
            {
                checkHCstatus(input);
            }
            break;
        case "PREADVANCE":
            {
                var View = $('#' + ctrlcom + '_hdnViewmode').val();
                if (View == 'Y') {
                }
                else {
                    ClearAllControls();
                }
            }
            break;
        case "HCSUMRY":
            {
                checkHCstatus(input);
            }
            break;
        case "PATIENT COMPONENT":
            {
                checkPatCompStatus(input);
            }
            break;
        case "DIALYSIS BOOKING":
            {
                checkdialysisbooking(input);
            }
            break;
        case "PATIENTDAILIZERMAPPING":
            {
                checkPatDialzrMapping(input);
            }
            break;
        case "DIALLABIND":
            {
                checkDialLabIndStatus(input);
            }
            break;
        case "DIAREND":
            {
                checkDialRendStatus(input);
            }
            break;
        case "DIALSERIND":
            {
                checkDialSerIndStatus(input);
            }
            break;
        case "HCFEEDBK":
            {
                checkHCstatus(input);
            }
            break;
        case "CREF":
            {
                checkpatstatus(input);
            }
            break;
        case "OP":
            {
                ClearAllControls();
            }
            break;
        case "Cons":
            {
                ClearConsultation();
            }
            break;
        case "OPCNCL":
            {
                ClearopBillCancel();
            }
            break;
        case "OPPKGBILL":
            {
                ClearopPkgBillCancel();
            }
            break;
        case "OUTSTDNGDUE":
            {
                ClearoutstdngDue();
            }
            break;
        case "Refund":
            {
                ClearRefunds();
            }
            break;
        case "POSTDSCNT":
            {
                ClearpostDiscnt();
            }
            break;
        case "BillConvertion":
            {
                ClecarBillConvertion();
                document.getElementById('' + ctrlcom + '_umrPatientDetails_ucbill_txtSearchControl').disabled = false;
                document.getElementById('lk_btn_ctl00_ContentPlaceHolder1_umrPatientDetails_ucbill').disabled = false;
                var umr_no = '';
                if (input.UMR_NO == null || input.UMR_NO == undefined || input.UMR_NO == '') {
                    umr_no = input._lktext;
                }
                else {
                    umr_no = input.UMR_NO;
                }
                BindBills(umr_no);
            }
            break;
        case "PreAssessmentBills":
            {
                checkHCstatus(input);
            }
            break;
        case "ESTBILL":
            {
                ClearDetails();
            }
            break;
        case "ADMN":
            {
                clearAdmnInfo();
            }
        default: break;
    }
    $('.vipsource').css('display', 'none');
    var PatientID = 0;
    var _umr_no = '';
    $('#' + ctrlcom + '_umrPatientDetails_Umrlookup_txtSearchControl').removeClass('lookuptextbox red'); /* remove lookup border color */
    if (input.RESULT == undefined) /* lookup selection */
    {
        PatientID = input.PATIENT_ID;
        _umr_no = input.UMR_NO;
    }
    else /* auto completion selection */
    {
        PatientID = input.RESULT.PATIENT_ID;
        _umr_no = input.RESULT.UMR_NO;
    }
    /* Umr_no Based Validation Data Getting Start */
    GetNonAsync("PatientRegistration.asmx/pat_banner_Valdatation_data",
    { umr_no: _umr_no },
        function (jdata) {
            if (jdata.d[0] != null) {
                Patient_Valdations(jdata.d[0][0]);
                if (form_name == "ADMN" || form_name == "ER") {
                    var _ispatcat = $('[id*=hdnallowtariffslcn]').val().toLowerCase();
                    if (_ispatcat == 'true') {
                        patientcat();
                    }
                }
            }
        }, function () {
        });
    /*  Umr_no Based Validation Data Getting End */
    return false;
}

function Patient_Valdations(input) {

    var hdnDashBoardUmr = $('[id*=hdnDashBoardUmr]').val();
    if (hdnDashBoardUmr == '' || hdnDashBoardUmr == null || hdnDashBoardUmr == undefined) {
        hdnDashBoardUmr = '';
    }
    if (hdnDashBoardUmr != '') {
        document.getElementById('<%=Umrlookup.ClientID %>').disabled = true;
        document.getElementById('<%=ucAdmission.ClientID %>').disabled = true;
        document.getElementById('imgbtnNewReg').disabled = true;
    }
    var form_name = document.getElementById('<%=hdnDocName.ClientID %>').value;
  //  document.getElementById('<%=hdnoldregtpaid.ClientID %>').value = input.REG_CMP_ID;
  //  document.getElementById('<%=hdnregexpdt.ClientID %>').value = input.REG_EXPIRY_DATE;
//    document.getElementById('<%=hdnfrgncatgryid.ClientID %>').value = input.TARIFF_ID;
//    document.getElementById('<%=hdndocreqstatus.ClientID %>').value = input.DOC_STATUS;
//    document.getElementById('<%=hdnstopcons.ClientID %>').value = input.STOP_CONS;
//    document.getElementById('<%=hdndocholdstatus.ClientID %>').value = input.DOC_HOL_STATUS;
//    document.getElementById('<%=hdnapmntfromdt.ClientID %>').value = input.FROM_DATE;
//    document.getElementById('<%=hdnapmnttodt.ClientID %>').value = input.TO_DATE;
//    document.getElementById('<%=hdnregexpdt.ClientID %>').value = input.REG_EXPIRY_DATE;
//    document.getElementById('<%=hdnadmntypeids.ClientID %>').value = input.ADMN_CASE_TYPE_ID;
//    document.getElementById('<%=hdndschrgstatus.ClientID %>').value = input.DSCHRG_STATUS;
//    document.getElementById('<%=hdnadmnno.ClientID %>').value = input.ADMN_NO;
//    document.getElementById('<%=hdntotalAdv.ClientID %>').value = input.TOTAL_ADVANCE_AMT;
//    document.getElementById('<%=hdnutilizeAmt.ClientID %>').value = input.UTILIZED_AMOUNT;
//    document.getElementById('<%=hdnbalanceAmt.ClientID %>').value = input.BALANCE_AMOUNT;


    $('#ptype-flag').removeClass();
    $('#ptype-flag').addClass('ptype-flag');
    /* Senior Citizon And Vip Validation Start */
    if (input.IS_SENIOR_CITIZEN == 'Y' && (input.IS_VIP.trim() == 'V' || input.IS_VIP.trim() == 'VV')) {
        var txt = ""; var clas = "";
        if (input.IS_VIP.trim() == 'V') { txt = "VIP patient"; clas = "p-sc-vip"; } else { txt = "This is a VVIP patient!"; clas = "p-sc-vvip"; }
        $(".stoast").toastText("Info", "SENIOR CITIZEN patient", 5, 2);
        $(".alertprompt").css('background-color', '#a0e458');
        $(".stoast").toastText("Info", txt + "<br>Source:" + input.VIP_SOURCE_NAME + "<br>Remarks:" + input.VIP_NOTE + "", 5, 2);
        $(".alertprompt").css('background-color', '#FC8107');
        $('#ptype-flag').addClass(clas);

    }
    else {
        if (input.IS_SENIOR_CITIZEN == 'Y') {
            $(".stoast").toastText("Info", "SENIOR CITIZEN patient", 5, 2);
            $(".alertprompt").css('background-color', '#a0e458');
            $('#ptype-flag').addClass("p-scitizen");
        }
        if (input.IS_VIP != null && input.IS_VIP.trim() == 'V') {
            $(".stoast").toastText("Info", "This is a VIP patient!<br>Source:" + input.VIP_SOURCE_NAME + "<br>Remarks:" + input.VIP_NOTE + "", 5, 2);
            $(".alertprompt").css('background-color', '#FC8107');
            $('#ptype-flag').addClass("p-vip");
        }
        if (input.IS_VIP && input.IS_VIP.trim() == 'VV') {
            $(".stoast").toastText("Info", "This is a VVIP patient!<br>Source:" + input.VIP_SOURCE_NAME + "<br>Remarks:" + input.VIP_NOTE + "", 5, 2);
            $(".alertprompt").css('background-color', '#FC8107');
            $('#ptype-flag').addClass("p-vvip");
        }
    } /* Senior Citizon And Vip Validation End */

      if (input.IS_REG_EXPIRY == 'Y') /* Registration Expiry Condition Start */
    {
        var is_renewal_required = document.getElementById('<%=hdnisrenewal.ClientID %>').value;
        if (is_renewal_required == "Yes") {
            var Allow_Reg_Expiry = document.getElementById('<%=hdnAlloweOP.ClientID %>').value;
            param = 'reg-expired';
            param = param + ',' + form_name;
            param = param + ',' + input.UMR_NO;
            param = param + ',' + input.PATIENT_ID;
            if (form_name == 'PREADVANCE') {
                ConfirmationRequiredForSaveWithParam_message(obj, param, 'This UMR# Registration Expired , Do You Want To Deposit Advance');
                return false;
            }
            else if (form_name == 'OUTSTDNGDUE' || form_name == 'OPCNCL' || form_name == 'Refund' || form_name == 'POSTDSCNT' || form_name == 'OPPKGBILL' || form_name == 'MLC' || form_name == 'PatientAccount') {
                $(".stoast").toastText("Info", "Patient Registration Validity is Over  So , Please Renewal Again.", 5, 2);
            }
            else {
                if (Allow_Reg_Expiry == "False") {
                    param = 'reg-expired';
                    param = param + ',' + form_name;
                    param = param + ',' + input.UMR_NO;
                    param = param + ',' + input.PATIENT_ID;
                    ConfirmationRequiredForSaveWithParam_message(obj, param, 'Patient Registration Validity is Over  So , Please Renewal Again.');
                    return false;
                }
                else {
                    $(".stoast").toastText("Info", "Patient Registration Validity is Over  So , Please Renewal Again.", 5, 2);
                }
            }
        }
        else {
            $(".stoast").toastText("Info", "Patient Registration Validity is Over  So , Please Contact Administration..!", 5, 2);
            return false;
        }
    } /* Registration Expiry Condition Ends */

    if (parseFloat(input.OUTSTANDING_DUE) > 0) {
        if (document.getElementById('' + ctrlcom + '_umrPatientDetails_hdnbasecurrancy').value == "INDIAN RUPEE" || document.getElementById('' + ctrlcom + '_umrPatientDetails_hdnbasecurrancy').value == "INR") {
            $(".stoast").toastText("Info", 'This UMR# ' + input.UMR_NO + ' Having Due Amount Of <i class="icon-rupee"></i>' + input.OUTSTANDING_DUE, 5, 2);
        }
        else {
            $(".stoast").toastText("Info", 'This UMR# ' + input.UMR_NO + ' Having Due Amount Of <i class="icon-dollar"></i>' + input.OUTSTANDING_DUE, 5, 2);
        }
    }
    if (parseFloat(input.REFUND) > 0) {
        if (document.getElementById('' + ctrlcom + '_umrPatientDetails_hdnbasecurrancy').value == "INDIAN RUPEE" || document.getElementById('' + ctrlcom + '_umrPatientDetails_hdnbasecurrancy').value == "INR") {
            $(".stoast").toastText("Info", 'This UMR# ' + input.UMR_NO + ' Having Refundable Amount Of <i class="icon-rupee"></i>' + input.REFUND, 5, 2);
        }
        else {
            $(".stoast").toastText("Info", 'This UMR# ' + input.UMR_NO + ' Having Refundable Amount Of <i class="icon-dollar"></i>' + input.REFUND, 5, 2);
        }
    }


    if (document.getElementById('<%=hdnVerifymonileno.ClientID %>').value == "Y") {
        if (input.LAST_TRAN_DT != "") {
            var previoustrandt = new Date(input.LAST_TRAN_DT).format('dd-MMM-yyyy')
            currDt = new Date().format('dd-MMM-yyyy');
            var daysformoblevalidation = document.getElementById('<%=hdndaysvalidatemobno.ClientID %>').value;
            if (form_name != "CorpClaim") {
                if (daysformoblevalidation == "NaN" || daysformoblevalidation == undefined || daysformoblevalidation == null || daysformoblevalidation == "") { daysformoblevalidation = 0; }
                var days = days_betwwen_dates(new Date(previoustrandt).format('dd-MMM-yyyy'), new Date().format('dd-MMM-yyyy'));
                if (days <= parseFloat(daysformoblevalidation)) {
                    $(".stoast").toastText("Info", "Please Verify Mobile No!.", 5, 2);
                }
            }
        }
    }

    if (input.FUND_BALANCE_AMOUNT != "" && input.FUND_BALANCE_AMOUNT != null && input.FUND_BALANCE_AMOUNT != undefined) {
        $(".stoast").toastText("Info", "This Patient Has Fund", 3, 2);
    }

     if (input.RECORD_STATUS != 'A' || input.PATIENT_STATUS == 'Cancel' || input.PATIENT_STATUS == 'In Active') { /* Inactivated Or Cancelled Validation Start */
        if (input.PATIENT_STATUS == 'Cancel') /* cancel */
        {
            if (form_name == 'OUTSTDNGDUE' || form_name == 'Refund') {
                $(".stoast").toastText("Info", 'This UMR# Is Cancelled  Reason for ' + input.STATUS_REASON, 5, 3);
            }
            else {
                param = 'Cancel';
                param = param + ',' + form_name;
                document.getElementById('<%=hdnValidationFailed.ClientID %>').value = 'Y';
                ConfirmationRequiredForSaveWithParam_message(obj, param, 'This UMR# is Cancelled  Reason for ' + input.STATUS_REASON + ' so, You Cannot Do Any Transactions');
                return false;
            }
        }
        else /* in-active */
        {
            param = 'In-Active';
            param = param + ',' + form_name;
            var Inactive_Reason = input.STATUS_REASON;
            if (Inactive_Reason == undefined || Inactive_Reason == null) {
                Inactive_Reason = '';
            }
            if (form_name == 'OUTSTDNGDUE' || form_name == 'OPCNCL' || form_name == 'Refund' || form_name == 'POSTDSCNT' || form_name == 'OPPKGBILL' || form_name == 'MLC' || form_name == 'PREADVANCE') {
                $(".stoast").toastText("Info", "This UMR# Is In-Activated With Reason For " + Inactive_Reason + " ", 5, 3);
            }
            else {
                if (Inactive_Reason != '') {
                    document.getElementById('<%=hdnValidationFailed.ClientID %>').value = 'Y';
                    ConfirmationRequiredForSaveWithParam_message(obj, param, 'This UMR# is Inactivated Reason for ' + Inactive_Reason + ' so, You Cannot Do Any Transactions');
                    return false;
                }
                else {
                    document.getElementById('<%=hdnValidationFailed.ClientID %>').value = 'Y';
                    ConfirmationRequiredForSaveWithParam_message(obj, param, 'This UMR# is Inactivated  Reason for ' + Inactive_Reason + ' so, You Cannot Do Any Transactions');
                    return false;
                }
            }
        }

    } /* Inactivated Or Cancelled Validation Ends */

    if (input.PATIENT_STATUS == 'Death') /* Expired Patient Validation Start */
    {
        if (form_name == 'OUTSTDNGDUE' || form_name == 'OPCNCL' || form_name == 'Refund' || form_name == 'POSTDSCNT' || form_name == 'OPPKGBILL' || form_name == 'MLC' || form_name == 'PatientAccount' || form_name == "PREADVANCE" || form_name == "OpBillAssesment" || form_name == "BillConvertion") {

            $(".stoast").toastText("Info", 'This Patient Is Expired', 5, 2);
        }
        else {
            param = 'pat-expiry';
            param = param + ',' + form_name;
            document.getElementById('<%=hdnValidationFailed.ClientID %>').value = 'Y';
            ConfirmationRequiredForSaveWithParam_message(obj, param, 'Sorry,you cannot admit an expired patient');
            return false;
        }
    }
     if (input.PATIENT_STATUS == 'Blocked') { /* Blocked Patient Validation Start */
        if (form_name == 'PREADVANCE') {
            param = 'blocked';
            param = param + ',' + form_name;
            param = param + ',' + input.UMR_NO;
            param = param + ',' + input.PATIENT_ID;
            ConfirmationRequiredForSaveWithParam_message(obj, param, 'This UMR# is BLOCKED  With Reason ' + input.STATUS_REASON + ' so, Do You Want To Deposit Advance');
            return false;
        }
        else if (form_name == 'OUTSTDNGDUE' || form_name == 'OPCNCL' || form_name == 'Refund' || form_name == 'POSTDSCNT' || form_name == 'OPPKGBILL' || form_name == 'MLC') {
            $(".stoast").toastText("Info", 'This UMR# is BLOCKED With Reason ' + input.STATUS_REASON, 5, 2);
        }
        else {
            param = 'blocked';
            param = param + ',' + form_name;
            document.getElementById('<%=hdnValidationFailed.ClientID %>').value = 'Y';
            ConfirmationRequiredForSaveWithParam_message(obj, param, 'This UMR# is BLOCKED With Reason ' + input.STATUS_REASON + ' so, You Cannot Do Any Transactions');
            return false;
        }
    } /* Blocked Patient Validation End */
    
    var fdays;
    if (parseFloat(input.EXPIRING_AMT) > 0) /* Expiring Amount Validation Start */
    {
        var sedt = input.EXPIRY_DT;
        var currDt = new Date().format('dd-MMM-yyyy');
        var res = CompareExpireDate(sedt, currDt);
        //   if (res == "d1>d2") {
        var days = days_betwwen_dates(new Date().format('dd-MMM-yyyy'), new Date(input.EXPIRY_DT).format('dd-MMM-yyyy'));
        fdays = days;
        if (days > 0) {
            if (document.getElementById('' + ctrlcom + '_umrPatientDetails_hdnbasecurrancy').value == "INDIAN RUPEE" || document.getElementById('' + ctrlcom + '_umrPatientDetails_hdnbasecurrancy').value == "INR") {
                $(".stoast").toastText("Info", 'This UMR# ' + input.UMR_NO + ' Having Fund Amount Of ' + input.EXPIRING_AMT + '<i class="icon-rupee"></i>  Expire within ' + days + ' Days..', 5, 2);
            }
            else {
                $(".stoast").toastText("Info", 'This UMR# ' + input.UMR_NO + ' Having Fund Amount Of ' + input.EXPIRING_AMT + '<i class="icon-dollar"></i>  Expire within ' + days + ' Days..', 5, 2);
            }
            document.getElementById('' + ctrlcom + '_umrPatientDetails_ucPatOptions_hdnfundexpdays').value = days + "Days";
        }
        else {
            if (document.getElementById('' + ctrlcom + '_umrPatientDetails_hdnbasecurrancy').value == "INDIAN RUPEE" || document.getElementById('' + ctrlcom + '_umrPatientDetails_hdnbasecurrancy').value == "INR") {
                $(".stoast").toastText("Info", 'This UMR# ' + input.UMR_NO + ' Having Fund Amount Of ' + input.EXPIRING_AMT + '<i class="icon-rupee"></i>  Expire Today..', 5, 2);
            }
            else {
                $(".stoast").toastText("Info", 'This UMR# ' + input.UMR_NO + ' Having Fund Amount Of ' + input.EXPIRING_AMT + '<i class="icon-dollar"></i>  Expire Today..', 5, 2);
            }
            document.getElementById('' + ctrlcom + '_umrPatientDetails_ucPatOptions_hdnfundexpdays').value = "Today";
        }

        // }
    } /* Expiring Amount Validation Ends */
    if (parseFloat(input.PRE_ADVANCE_AMOUNT) > 0) {
        if (document.getElementById('' + ctrlcom + '_umrPatientDetails_hdnbasecurrancy').value == "INDIAN RUPEE" || document.getElementById('' + ctrlcom + '_umrPatientDetails_hdnbasecurrancy').value == "INR") {
            $(".stoast").toastText("Info", 'This UMR# ' + input.UMR_NO + ' Having Pre Advance Amount <i class="icon-rupee"></i>' + input.PRE_ADVANCE_AMOUNT, 5, 2);
        }
        else {
            $(".stoast").toastText("Info", 'This UMR# ' + input.UMR_NO + ' Having Pre Advance Amount <i class="icon-dollar"></i>' + input.PRE_ADVANCE_AMOUNT, 5, 2);
        }
    }
    if (input.IS_MLC == 'Y') {
        $(".stoast").toastText("Info", 'MLC Patient !', 5, 2); /*UnCommented By Pushkar Let me know before uncomment it*/
        if (document.getElementById('<%=hdnDocName.ClientID %>').value == "ADMN") {
            document.getElementById('' + ctrlcom + '_chkIsMLC').checked = true;
        }
    }
    if (input.VALIDITY_EXPIRING_DAYS == 'Y') {
        $(".stoast").toastText("Info", 'This Patient Corporate Referal Letter Validity Is Expiring ...', 5, 2);
    }
    if (input.APMNT_ID1 != '0' && input.APMNT_ID1 != undefined) {
        if (document.getElementById('<%=hdnDocName.ClientID %>').value == "HISAPPT" || document.getElementById('<%=hdnDocName.ClientID %>').value == "Cons") {
            //$(".stoast").toastText("Info","This Umr No " +input.UMR_NO+" Having An Appointment",5,2);
            $(".stoast").toastText("Info", "This Patient Has An Appointment(s)", 5, 2);
        }
    }

    if ((form_name == "Refund" || form_name == "POSTDSCNT" || form_name == "OUTSTDNGDUE") && (input.ADMN_NO != null || input.ADMN_NO != "" || input.ADMN_NO != undefined)) {
        var flag = form_name;
        if (flag == "OUTSTDNGDUE")
            flag = "OUTSTDNGDUE";
        else if (flag != "" && flag != null) flag = "IPF";

        if (input.UMR_NO != "")
            document.getElementById('ctl00_ContentPlaceHolder1_umrPatientDetails_ucAdmission_hdn_preCond').value = flag + "^^^" + input.UMR_NO;
        else
            document.getElementById('ctl00_ContentPlaceHolder1_umrPatientDetails_ucAdmission_hdn_preCond').value = flag + "^^^";
     }
    var param;
    var obj;
    if (input.PRE_ADMN_STATUS == 'C') {
        $(".stoast").toastText("Info", "Pre Admission Has Been Cancelled For This Patient!!!", 5, 2);
    }

     if ((form_name == "OP" || form_name == "Cons") && ($('[id*=hdnallowtariffslcn]').val().toLowerCase() == 'true'))/*Tariff selection Concept*/
    {
        $(".stoast").toastText("Info", "This patient having patient category", 3, 2);
        if ($('[id*=hbnisshowpatcatagery]').val().toUpperCase() == "YES") {
            $('.allowMTariff').show();
        }
        else {
            $('.allowMTariff').show();
            $('#' + ctrlcom + '_UCServices_ddlpatcat').prop('disabled', true);
            $('#' + ctrlcom + '_UCServices_ddltariff').prop('disabled', true);
        }
        
        if (input.FOREIGN_CATEGORY_ID == "" || input.FOREIGN_CATEGORY_ID == undefined || input.FOREIGN_CATEGORY_ID == 'undefined') {
            var setpatcat = $('[id*=hdnpatcatpolicy]').val(); //company policis
            var _ispatcat = $('[id*=hdnallowtariffslcn]').val().toLowerCase();

            if (setpatcat == '' || setpatcat == null || setpatcat == undefined || setpatcat == 'undefined') setpatcat = 0;
            $('#' + ctrlcom + '_UCServices_ddlpatcat').val(setpatcat);
            $('[id*=hdnforeigncatid]').val(setpatcat);
        } else {
            $('#' + ctrlcom + '_UCServices_ddlpatcat').val(input.FOREIGN_CATEGORY_ID);
            $('[id*=hdnforeigncatid]').val(input.FOREIGN_CATEGORY_ID);

        }
        ChangeTarifByPatcat();
        document.getElementById('' + ctrlcom + '_UCServices_ddltariff').selectedIndex = 1;
    }


//    if (form_name == "ADMN") {
//        if (input.DISCHARGE_VACENT_STATUS == "Y") {
//            $(".stoast").toastText("Info", "This Patient Is Discharged But Bed Is Not Vacant. Please Vacant Bed!", 3, 2);
//            return false;
//        }
//    }
    if (form_name == "ESTBILL") {
        if (input.ESTBILL_STATUS == "N") {
            $(".stoast").toastText("Info", "Please Approve The Previous Estimation Bill!", 3, 2);
            return false;
        }
    }
//    if (form_name == "ESTBILL") {
//        if (input.ESTBILL_STATUS == "Y") {

//        }
//    }
    /*if(form_name=="OpBillAssesment"){
    if(input.ASSESSMENT_STATUS =="N"){
    $(".stoast").toastText("Info","Please approve the previous Assessment Bill!", 5, 3);
    return false;
    }

    }*/

    if (form_name == "AssesmentMerge") {
        if (input.ASSESSMENT_STATUS != "") {
            $(".stoast").toastText("Info", input.ASSESSMENT_STATUS + " are not scheduled", 5, 3);
        }
    }

    if (form_name == "ER") {
        document.getElementById('' + ctrlcom + '_hdnPatientid').value = input.PATIENT_ID;
        if (input.ADMITTED_STATUS == 'Y') {
            var hdnTimeFormat = $('[id$=hdnTimeFormat]').val();
            var hdnDateFormat = $('[id$=hdnDateFormat]').val();
            if (hdnDateFormat == undefined || hdnDateFormat == null || hdnDateFormat == "") { hdnDateFormat = "dd-MMM-yyyy"; }
            if (hdnTimeFormat == undefined || hdnTimeFormat == null || hdnTimeFormat == "") { hdnTimeFormat = "HH:mm:ss"; }
            var Admn_dt = new Date(input.ADMN_DT).format(hdnDateFormat) + " " + new Date(input.ADMN_DT).format(hdnTimeFormat);
            var completeBedInfo = input.BED_NAME + "/" + input.ROOM_NAME + "/" + input.WARD_NAME;
            var msg = 'This Patient Is Already Admited On Bed "' + completeBedInfo + '" With Admn#:"' + input.ADMN_NO + '"& Admission Date:' + Admn_dt + '';
            $(".stoast").toastText("Info", msg, 5, 2);
            document.getElementById('' + ctrlcom + '_umrPatientDetails_Umrlookup_txtSearchControl').value = '';
            document.getElementById('' + ctrlcom + '_umrPatientDetails_Umrlookup_txtSearchControl').focus();
            Clearpopup();
            ClearPatientBanerControl();
            return false;
        }
    }
    if (form_name == "PREADVANCE") {
        $('#' + ctrlcom + '_txttotaladvance').val(input.TOTAL_ADVANCE_AMT);
        $('#' + ctrlcom + '_txtUtilizeAmt').val(input.UTILIZED_AMOUNT);
        $('#' + ctrlcom + '_txtBalanceAmt').val(input.BALANCE_AMOUNT);
        if (document.getElementById('' + ctrlcom + '_chkAdvRefund').checked == true) {
            if (input.REF_STATUS == 'N') {
                $(".stoast").toastText("Info", "Please Approve Deposit Refund Record Against to this Umr No..!", 5, 2);
                return false;
            }
        }
        if (document.getElementById('' + ctrlcom + '_chkAdvRefund').checked == true) {
            $('#' + ctrlcom + '_ReceiptControl2_txtreqamtkyd').val(input.BALANCE_AMOUNT);
            $('#' + ctrlcom + '_txtRefundableAmt').val(input.BALANCE_AMOUNT);
            document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnDueAmt').value = input.BALANCE_AMOUNT;

        }
    }
  
   
    
    if (form_name == "ADMN" || form_name == "ER") {
        $('[id*=hdnpatcatid]').val(input.FOREIGN_CATEGORY_ID);
        $('[id*=hdntariffid]').val(input.TARIFF_NAME);

    }
    if (form_name == "ADMN") {
        if (input.DISCHARGE_VACENT_STATUS == "Y") {
            $(".stoast").toastText("Info", "This Patient Is Discharged But Bed Is Not Vacant. Please Vacant Bed!", 3, 2);
            return false;
        }

        if (input.PGS_NOTE != "" && input.PGS_NOTE != null && input.PGS_NOTE != undefined) {
            $(".stoast").toastText("Info", "Previous Clinical Notes : " + input.PGS_NOTE, 3, 2);
        }
        if (input.PRE_AUTH_REQ_STATUS == "P") {
            $(".stoast").toastText("Info", "This Patient Pre Authorization Status is in Pending State..", 3, 2);
        }
        if (input.PRE_AUTH_REQ_STATUS == "A") {
            $(".stoast").toastText("Info", "This Patient Pre Authorization Status is in Approved State..", 3, 2);
        }
        if (input.PRE_AUTH_REQ_STATUS == "R") {
            $(".stoast").toastText("Info", "This Patient Pre Authorization Status is in Rejected State..", 3, 2);
        }
        if (input.PRE_AUTH_REQ_STATUS != '' && input.PRE_AUTH_REQ_STATUS != "A") {
            $(".stoast").toastText("Info", "Advance Amount Should Be Collected From Patient", 3, 2);
        }
        $('#' + ctrlcom + '_umrPatientDetails_ucPatOptions_hdnOptAdmnID').val(input.ADMN_ID);
    }
    /* Expired Patient Validation Ends */

    document.getElementById('<%=hdnucadmnno.ClientID %>').value = input.ADMN_NO;
    document.getElementById('<%=hdnselfinves.ClientID %>').value = input.IS_SELF_INVESTIGATION;

    var hdnDateFormat = $('[id$=hdnDateFormat]').val();
    if (hdnDateFormat == undefined || hdnDateFormat == null || hdnDateFormat == "") { hdnDateFormat = "dd-MMM-yyyy"; }
    var hdnTimeFormat = $('[id$=hdnTimeFormat]').val();
    if (hdnTimeFormat == undefined || hdnTimeFormat == null || hdnTimeFormat == "") { hdnTimeFormat = "HH:mm:ss"; }
    if (input.ADMITTED_STATUS == 'Y' && input.APPROVE_STATUS == "N") /* Admited Validation Starts */
    {
        var Allow_admn = document.getElementById('<%=hdnAlowAdmnToOP.ClientID %>').value;
        var Allow_multi_admn = document.getElementById('<%=hdnAlwmtplAdmn.ClientID %>').value;
        var admnbedtls = input.ADMN_BED_DTLS;
        var casetype = input.ADMN_CASE_TYPE_NAME;
        var admnno = input.ADMN_NO;
        if (admnbedtls == undefined || admnbedtls == null) {
            admnbedtls = '';
        }
        var admn = admnno + "-" + 'CaseType: ' + input.ADMN_CASE_TYPE_NAME + "-" + admnbedtls;
        param = 'admited';
        param = param + ',' + form_name;
        param = param + ',' + input.UMR_NO;
        param = param + ',' + input.PATIENT_ID;

        document.getElementById('<%=hdnNewAdmnID.ClientID %>').value = input.ADMN_ID;
        document.getElementById('<%=hdnIsallowed.ClientID %>').value = input.IS_OP_TRN_ALLOWED;
        if (form_name == 'OUTSTDNGDUE' || form_name == 'OPCNCL' || form_name == 'Refund' || form_name == 'POSTDSCNT' || form_name == 'OPPKGBILL' || form_name == 'MLC' || form_name == 'PREADVANCE' || form_name == 'ADVTRAN' || form_name == 'PREAUTH') {
            $(".stoast").toastText("Info", "This patient is ADMITED", 5, 2);
        }
        else if (form_name == 'ADMN') {
            var admndt1 = new Date(input.ADMN_DT).format(hdnDateFormat) + " " + new Date(input.ADMN_DT).format(hdnTimeFormat);
            if (input.ADMITTED_STATUS == 'Y' && Allow_multi_admn == "Y") {
                param = param + ',' + Allow_multi_admn;
                param = param + ',' + Allow_admn;
                param = param + ',' + input.IS_OP_TRN_ALLOWED;
                ConfirmationRequiredForSaveWithParam_message(obj, param, 'This Patient Is Already Admited On This Bed "' + input.BED_NAME + '"& Admited Dt:"' + admndt1 + '" Admn#' + admn + '');
                return false;
            }
            else if (input.ADMITTED_STATUS == 'Y' && Allow_multi_admn == "N") {
                param = param + ',' + Allow_multi_admn;
                param = param + ',' + Allow_admn;
                param = param + ',' + input.IS_OP_TRN_ALLOWED;
                $(".stoast").toastText("Info", 'This Patient Is Already Admited On This Bed "' + input.BED_NAME + '"& Admited Dt:"' + admndt1 + '" Admn#' + admn + '', 5, 2);
                // ConfirmationRequiredForSaveWithParam_message(obj,param,'This patient is already Admited On This Bed "'+ input.BED_NAME +'"& Admited Dt:"'+admndt+'" Admn#'+ admn+'' );
                return false;
            }
        }
        else {
            var admndt = new Date(input.ADMN_DT).format(hdnDateFormat) + " " + new Date(input.ADMN_DT).format(hdnTimeFormat);
            if (form_name != 'CREF' && form_name != 'ESTBILL' && form_name != 'ESTBILL' && form_name != 'BillConvertion' && form_name != 'CorpClaim' && form_name != 'PatientAccount') {
                if (input.ADMITTED_STATUS == 'Y' && Allow_admn == 'True')/* Admited Checking Based On Company Policy Setting */
                {
                    param = param + ',' + Allow_multi_admn;
                    param = param + ',' + Allow_admn;
                    param = param + ',' + input.IS_OP_TRN_ALLOWED;
                    ConfirmationRequiredForSaveWithParam_message(obj, param, 'This Patient Is Already Admited On This Bed "' + input.BED_NAME + '"& Admited Dt:"' + admndt + '" Admn#' + admn + '');
                    $('.icon-user-3').css('display', 'block')
                    $('.icons ul li')[11].style.display = 'block';
                    return false;
                }
                else if (input.ADMITTED_STATUS == 'Y' && Allow_admn == "False")/* Admited Checking Based On Company Policy Setting */
                {

                    if (input.IS_OP_TRN_ALLOWED == 'Y') {
                        param = param + ',' + Allow_multi_admn;
                        param = param + ',' + Allow_admn;
                        param = param + ',' + input.IS_OP_TRN_ALLOWED;
                        document.getElementById('<%=hdnValidationFailed.ClientID %>').value = 'Y';
                        $(".stoast").toastText("Info", 'This Patient Is Already Admited On This Bed "' + input.BED_NAME + '"& Admited Dt:"' + admndt + '" Admn#' + admn + ' So, Op Transaction Not Allowed', 5, 2);
                    }
                    else {
                        param = param + ',' + Allow_multi_admn;
                        param = param + ',' + Allow_admn;
                        param = param + ',' + input.IS_OP_TRN_ALLOWED;
                        $(".stoast").toastText("Info", 'This Patient Is Already Admited On This Bed "' + input.BED_NAME + '"& Admited Dt:"' + admndt + '" Admn#' + admn + '', 5, 2);
                        // ConfirmationRequiredForSaveWithParam_message(obj,param,'This patient is already Admited On This Bed "'+ input.BED_NAME +'"& Admited Dt:"'+admndt+'" Admn#'+ admn+'' );
                        return false;
                    }
                }
           }
        }
    } /* Admited Validation Ends */
    if (form_name != 'CorpClaim') {
        if (input.PATIENT_STATUS == 'Merge') /* Merge Validations Start */
        {
            Is_mearged = 'Y';
            param = 'merged';
            param = param + ',' + form_name;
            param = param + ',' + input.MERGE_UMR_NO;
            param = param + ',' + input.MERGE_PATIENT_ID;
            document.getElementById('<%=hdnValidationFailed.ClientID %>').value = 'Y';
            ConfirmationRequiredForSaveWithParam_message(obj, param, 'This UMR# (' + input.UMR_NO + ' )  is MERGED to ' + input.MERGE_UMR_NO + ' Do You Want To Continue With Merged UMR#' + input.MERGE_UMR_NO);
            return false;
        } /* Merge Validations End */
    }
  
    /* Osp Patient Condition Starts */
    /*  if (input.IS_OSP.trim() == 'Y') 
    {
    param='OSP';
    param=param+','+form_name;
    if(form_name=='OPCNCL')
    {
    $(".stoast").toastText("Info","OSP Patient.",5,2);
    }
    else
    {
    ConfirmationRequiredForSaveWithParam_message(obj,param,'OSP patient cannot do op Transactions');
    return false;
    } 
    }*/
    /* Osp Patient Condition Ends */

    if (form_name == 'ESTBILL') {
        var preAdmnID = input.PRE_ADMNID; var admitted_status = input.ADMITTED_STATUS; var admnNO = input.ADMN_NO;
        if (preAdmnID == '' || preAdmnID == null || preAdmnID == undefined) { preAdmnID = 0; }
        if (admnNO == '' || admnNO == null || admnNO == undefined) { admnNO = 0; }
        if (admitted_status == '' || admitted_status == null || admitted_status == undefined) { admitted_status = ''; }
        if (parseInt(preAdmnID) == 0 && admitted_status == '') {
            $(".stoast").toastText("Info", "Only Pre Admitted/Admitted Patients Are Allowed.!", 5, 2);
            return false;
        }
        else {
            if (admnNO != '') {
                $('#' + ctrlcom + '_hdnAdmnNO').val(admnNO);

            }
            else if (parseInt(preAdmnID) > 0) {
                $('#' + ctrlcom + '_hdnPreAdmnID').val(preAdmnID);
                var pID = getParameterByName('PREADMN_ID');
                if (pID == '' || pID == undefined || pID == null) { pID = ''; }
                if (pID == '') {
                    AssignPreAdmnDtls();

                }
            }

        }
    }




    document.getElementById('' + ctrlcom + '_umrPatientDetails_ucPatOptions_hdnrecord_status').value = input.RECORD_STATUS;
    document.getElementById('' + ctrlcom + '_umrPatientDetails_ucPatOptions_hdnpatient_expiry').value = input.PATIENT_EXPIRY;
    document.getElementById('' + ctrlcom + '_umrPatientDetails_ucPatOptions_hdnis_blocked').value = input.IS_BLOCKED;
    document.getElementById('' + ctrlcom + '_umrPatientDetails_ucPatOptions_hdnonbed_status').value = input.ONBED_STATUS;
    document.getElementById('' + ctrlcom + '_umrPatientDetails_ucPatOptions_hdnis_merge').value = input.IS_MERGE;
    document.getElementById('' + ctrlcom + '_umrPatientDetails_ucPatOptions_hdnis_reg_expiry').value = input.IS_REG_EXPIRY;
    document.getElementById('' + ctrlcom + '_umrPatientDetails_ucPatOptions_hdnis_senior_citizen').value = input.IS_SENIOR_CITIZEN;
    if (form_name == "POSTDSCNT") {
        document.getElementById('' + ctrlcom + '_hdnAdvance').value = input.PRE_ADVANCE_AMOUNT;
    }
    var vip = input.IS_VIP;
    vip = vip == undefined ? "" : vip;
    document.getElementById('' + ctrlcom + '_umrPatientDetails_ucPatOptions_hdnis_vip').value = vip.trim();
    document.getElementById('' + ctrlcom + '_umrPatientDetails_ucPatOptions_hdnoutstanding_due').value = input.OUTSTANDING_DUE;
    document.getElementById('' + ctrlcom + '_umrPatientDetails_ucPatOptions_hdnrefund').value = input.REFUND;
    document.getElementById('' + ctrlcom + '_umrPatientDetails_ucPatOptions_hdnmerge_umr_no').value = input.MERGE_UMR_NO;

    document.getElementById('' + ctrlcom + '_umrPatientDetails_ucPatOptions_hdnpreadvance').value = input.PRE_ADVANCE_AMOUNT;
    document.getElementById('' + ctrlcom + '_umrPatientDetails_ucPatOptions_hdnismlc').value = input.IS_MLC;
    document.getElementById('' + ctrlcom + '_umrPatientDetails_ucPatOptions_hdnfundexpamt').value = input.EXPIRING_AMT;


    if (document.getElementById('<%=hdnDocName.ClientID %>').value != "ADMN" && document.getElementById('<%=hdnDocName.ClientID %>').value != "PREAUTH" && document.getElementById('<%=hdnDocName.ClientID %>').value != "BillConvertion") { /* TRANSACTION SAVING XML GENERATION UMR_NO ASSIGN */
        var Name = document.getElementById('<%=hdnDocName.ClientID %>').value;
        switch (Name) {
            case "OPCNCL":
                break;
            case "DI":
                break;
            case "POSTDSCNT":
                break;
            case "IP CREDIT LIMIT":
                break;
            case "MLC":
                break;
            case "PDoc":
                break;
            case "CREF":
                break;
            case "ConsTransfer":
                break;
            case "OPPKGBILL":
                break;
            case "FeedBack Form":
                break;
            case "OpBillAssesment":
                break;
            case "AssesmentMerge":
                break;
            case "ER":
                break;
            case "HCSUMRY":
                break;
            case "HCFEEDBK":
                break;
            case "PASSPORTDETAILS":
                break;
            case "PATIENT COMPONENT":
                break;
            case "DIALYSIS BOOKING":
                break;

            case "PATIENTDAILIZERMAPPING":
                break;
            case "DIALLABIND":
                break;
            case "DIAREND":
                break;
            case "DIALSERIND":
                break;
            case "ADVTRAN":
                break;
            case "TO_ADVTRAN":
                break;
            case "CorpClaim":
                break;
            case "HISAPPT":
                break;
            case "RefLetterValidity":
                break;
            case "OrderedVerification":
                break;
            case "ESTBILL":
                break;
            case "PreAssessmentBills":
                break;
            default:
                if (document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnTranUMRNO') != null) {
                    if (document.getElementById('<%=hdnDocName.ClientID %>').value != "Passport" && document.getElementById('<%=hdnDocName.ClientID %>').value != "PatientAccount")
                        document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnTranUMRNO').value = input.UMR_NO;
                }
                break;
        }
    }
    var PatientID = input.PATIENT_ID;
    var _umr_no = input.UMR_NO;

    if (form_name == 'ADMN') {
        var QryType = document.getElementById('' + ctrlcom + '_hdnQryType').value;
        if (input.PRE_ADMNID > "0" && input.PRE_ADMN_STATUS != "C") {
            if (QryType == "Pre") {
                $(".stoast").toastText("warning", "Preadmission Done For This Patient!", 5, 3);
                return false;
            }
            else if (input.PRE_ADMNID != "" || input.PRE_ADMNID != undefined || input.PRE_ADMNID != null) {
                preadmnid = input.PRE_ADMNID
                GetAsync(
                "Private/FrontOffice/DayCare/AddNewAdmission.aspx/Get_Pat_Pre_AdmissionDetails",
                { PADMNID: preadmnid },
                function (data) {
                    var result = $.parseJSON(data.d[0]);
                    document.getElementById('<%=hdnUmrNo.ClientID %>').value = result[0].UMR_NO;
                    document.getElementById('<%=hdnRegID.ClientID %>').value = result[0].REGISTRATION_ID;
                    document.getElementById('<%=hdnReg_id.ClientID %>').value = result[0].REGISTRATION_ID; //in admission saving time,reg_id taking from this hidden variable so i assigned this one also....@Ali
                    document.getElementById('<%=hdnRegDt.ClientID %>').value = result[0].REGISTRATION_DT;
                    document.getElementById('<%=hdnPatientid.ClientID %>').value = result[0].PATIENT_ID;
                    document.getElementById('<%=hdnbillid.ClientID %>').value = result[0].BILL_ID;
                    document.getElementById('' + ctrlcom + '_umrPatientDetails_ucPatOptions_hdnOptUmrNo').value = result[0].UMR_NO;
                    document.getElementById('' + ctrlcom + '_umrPatientDetails_Umrlookup_txtSearchControl').value = result[0].UMR_NO;
                    document.getElementById('' + ctrlcom + '_umrPatientDetails_Umrlookup__hiddenID').value = result[0].UMR_NO;
                    document.getElementById('' + ctrlcom + '_umrPatientDetails_Umrlookup__hiddenText').value = result[0].UMR_NO;
                    document.getElementById('' + ctrlcom + '_umrPatientDetails_ucPatOptions_hdnOptRegID').value = result[0].REGISTRATION_ID;
                    document.getElementById('' + ctrlcom + '_umrPatientDetails_ucPatOptions_hdnOptPatientid').value = result[0].PATIENT_ID;
                    document.getElementById('' + ctrlcom + '_umrPatientDetails_ucPatOptions_hdnOptBillid').value = result[0].BILL_ID;
                    document.getElementById('' + ctrlcom + '_umrPatientDetails_ucPreAdmUmr_txtSearchControl').value = result[0].ADMN_NO;
                    document.getElementById('' + ctrlcom + '_umrPatientDetails_ucPreAdmUmr__hiddenID').value = result[0].PRE_ADMN_ID;
                    document.getElementById('' + ctrlcom + '_umrPatientDetails_ucPreAdmUmr__hiddenText').value = result[0].ADMN_NO;
                    document.getElementById('' + ctrlcom + '_hidPreAdmDt').value = new Date(result[0].PRE_ADMN_DT).format('dd-MMM-yyyy');
                    document.getElementById('' + ctrlcom + '_hidPreAdmNo').value = result[0].PRE_ADMN_ID;
                    document.getElementById('<%=hdnBillNo.ClientID %>').value = result[0].BILL_NO;
                    document.getElementById('ctl00_hdnDMSUmrNo').value = result[0].UMR_NO;
                    document.getElementById('ctl00_hdnDMSAdmnNo').value = result[0].REGISTRATION_NO;
                    PreAdmnPatDetails(data, 'PRE');
                });
            }
            else {
                Patdetailsassign(input.PRE_ADMNID);
            }
        }
        else {

            if (input.ADMISSION_REQUISITION_ID > 0) {
                AssignRequestDetails(PatientID, input.ADMISSION_REQUISITION_ID);
            }

            BindPatientDetails(PatientID, _umr_no);
            document.getElementById('' + ctrlcom + '_umrPatientDetails_ucPreAdmUmr_txtSearchControl').style.border = "1px solid rgb(190, 190, 190)";
        }
        if (input.REG_CMP_ID > "0") {
            AdmissionAdmnCorpDetils(input);
        }
        /* AssignSurgeryDetails(_umr_no);*/
    }
    else if (form_name == 'PREAUTH') {
        clearallinsfields();
        if (input.PRE_ADMNID != "" || input.PRE_ADMNID != undefined || input.PRE_ADMNID != null) {
            preadmnid = input.PRE_ADMNID;
            GetNonAsync(
                "Private/FrontOffice/DayCare/AddNewAdmission.aspx/Get_Pat_Pre_AdmissionDetails",
                { PADMNID: preadmnid },
                function (data) {
                    var result = $.parseJSON(data.d[0][0]);

                    if (result.length > 0) {
                        document.getElementById('' + ctrlcom + '_umrPatientDetails_ucPreAdmUmr_txtSearchControl').value = result[0].ADMN_NO;
                        document.getElementById('' + ctrlcom + '_umrPatientDetails_ucPreAdmUmr__hiddenID').value = result[0].PRE_ADMN_ID;
                        document.getElementById('' + ctrlcom + '_umrPatientDetails_ucPreAdmUmr__hiddenText').value = result[0].ADMN_NO;
                        BindPatientDetails(PatientID, _umr_no);
                    }
                    else {
                        $(".stoast").toastText("Info", "Pre Admission Not Done.", 5, 2);
                        return false;
                    }
                }
             )
        };

    }
    else {
        BindPatientDetails(PatientID, _umr_no);
        BindPatientBedDetails(_umr_no);
    }
    if (form_name == 'CorpClaim') {
        BindBills();
        BillDetails();
        DisplayAmount.style.display = 'block';
    }
    if (form_name == "MULTIPLEBILLS") {
        BindBillsclaim();
    }
    if (form_name == "ADMN") {
        onExtendedDisplayValues();
    }

}


function BindPatientDetails(patientID, umrNo) {

    if (patientID != "") {
        document.getElementById('<%=hdnCNCLPatID.ClientID %>').value = patientID;
        if (document.getElementById('<%=hdnDocName.ClientID %>').value == "OP" && $('[id$=hdnView]').val() == 'VIEW_OP') {
            var bill_id = $('#' + ctrlcom + '_hdnBill_ID').val();
            Advanced_Details(bill_id);
        }

        GetNonAsync(
                    "PatientRegistration.asmx/Get_Patient_AdditionalInfo_Details",
                    { _patID: parseInt(patientID) },
                    function (jdata) {
                        if (document.getElementById('<%=hdnDocName.ClientID %>').value == "OP" && $('[id$=hdnView]').val() == "VIEW_OP") {
                            if (document.getElementById('' + ctrlcom + '_hdnbill_typeID').value == "15") {
                                OnBindOspPatintInfoSuccess(jdata.d);
                            }
                            else {

                                OnPatientInfoSuccess(jdata.d);
                            }
                        }
                        /* else if(document.getElementById('<%=hdnDocName.ClientID %>').value == "Refund" &&document.getElementById('<%=hdndocmode.ClientID %>').value == "VIEW")
                        {
                        OnRefundPatientInfoSuccess(jdata.d);
                        } */
                        else {

                            OnPatientInfoSuccess(jdata.d);
                        }

                    },
                    function (jqXHR, textStatus, errorThrown) {
                    });

    }
    return false;
}

function OnPatientInfoSuccess(result) {
    var form_name = document.getElementById('<%=hdnDocName.ClientID %>').value;
    var obj = 'suvarna', param = 'OSP';
    if (result != null && result != "") {
        if (result[0].HEALTH_CARD_ID > 0) {
            $(".stoast").toastText("Info", "This Patient Has Health Card!", 7, 2);
            $('[id*=lblHcardDisplay]').css('display', 'block');
            /*if(form_name=="POSTDSCNT"){
            document.getElementById('' + ctrlcom + '_rbConcession_1').checked=true;
            hccheck()
            }*/
            if (parseFloat(result[0].HC_ELIGIBILITY_AMOUNT) == 0) {
                $(".stoast").toastText("Info", "Health Card Has Zero Eligible Amount!", 7, 2);
            }
        }
        else {
            $('[id*=lblHcardDisplay]').css('display', 'none');
            /*if(form_name=="POSTDSCNT"){
            document.getElementById('' + ctrlcom + '_rbConcession_0').checked=true;
            hccheck()
            }*/
        }
        if (form_name == "PatientAccount") {
            _assignPatientAccntDtls(result); //function available in patient account report
        }
        if (result[0].REFERENCE_SOURCE_ID > 0) {
            if (form_name == "OrderedVerification") {
                $('#' + ctrlcom + '_ddlreferral').val(result[0].REFERENCE_SOURCE_ID);
                if ($('#' + ctrlcom + '_ddlreferral').val() == 0 || $('#' + ctrlcom + '_ddlreferral').val() == 1) {
                    $('#' + ctrlcom + '_GenericUCReferred_txtSearchControl').attr('disabled', true);
                }
                else {
                    $('#' + ctrlcom + '_GenericUCReferred_txtSearchControl').attr('disabled', false);
                }
            }
        }
        if (result[0].IS_OSP.trim() == 'Y') {
            if (form_name == 'CREF') {
                $(".stoast").toastText("Info", "System Didn't Allow OSP Patient To Do Corporate Reg & Ref. Letter", 7, 2);
                return false;
            }
            if (form_name == 'PREADVANCE') {
                $(".stoast").toastText("Info", "System Didn't Allow OSP Patient To Deposit The Advance", 7, 2);
                return false;
            }
            document.getElementById('' + ctrlcom + '_umrPatientDetails_ucPatOptions_hdnISOSP').value = result[0].IS_OSP.trim();
        }
        else {
            document.getElementById('' + ctrlcom + '_umrPatientDetails_ucPatOptions_hdnISOSP').value = '';
        }
        if (result[0].IS_OSP.trim() == 'Y' && result[0].IS_REG_REQUIRED.trim() == 'N') {
            if (form_name == 'Cons') {
                ConfirmationRequiredForSaveWithParam_message(obj, param, 'OSP Patient Cannot Do Op Consultation Billing');
            }
            else if (form_name == 'CREF') {
                ConfirmationRequiredForSaveWithParam_message(obj, param, 'System Didnot Allow OSP Patient To Do Corporate Reg & Ref. Letter');
            }

            else {
                ConfirmationRequiredForSaveWithParam_message(obj, param, 'OSP Patient Cannot Do Op Billing');
            }
            return false;
        }
        if (result[0].IS_REG_REQUIRED != "" && result[0].IS_REG_REQUIRED != null && result[0].IS_REG_REQUIRED != undefined) {
            if (result[0].IS_REG_REQUIRED == "Y") {
                if (form_name == 'ADMN' || form_name == 'ER') {
                    document.getElementById('<%= hdnOspRegReq.ClientID %>').value = result[0].IS_REG_REQUIRED;
                    $(".stoast").toastText("Alert", "This is OSP Patient, Registration Fees Not Paid", 5, 2);
                    ClearPatientBanerControl();
                    return false;
                }
                else {
                    document.getElementById('<%= hdnOspRegReq.ClientID %>').value = result[0].IS_REG_REQUIRED;
                    $(".stoast").toastText("Alert", "Registration Fees Not Paid", 5, 2);
                }
            }
        }
        if (result[0].BILL_NO != "" && result[0].BILL_NO != null && result[0].BILL_NO != undefined) {
            document.getElementById('<%= hdnBillNo.ClientID %>').value = result[0].BILL_NO;
        }
        /*if(form_name=='ER'){   Not Required Here. because automatically patient address is populating here let them entering EC Address &this block not working properly also.
        document.getElementById('' + ctrlcom + '_hdnpat_id').value =result[0].PATIENT_ID;
        regaddressdetails();
        }*/
        if (form_name == 'OP' || form_name == 'Cons') {
            GetAsync(
                        "Private/FrontOffice/OpBilling/OPBillClientSide.aspx/Get_Package_Bill_Numbers",
                        { UMR_NO: result[0].UmrNo },
                        function (data) {
                        },
                        function (jqXHR, textStatus, errorThrown) {
                        });
        }
        if (form_name == 'OPQUICK') {
            GetAsync(
                        "Private/FrontOffice/OPDBill.aspx/Get_Package_Bill_Numbers",
                        { UMR_NO: result[0].UmrNo },
                        function (data) {
                        },
                        function (jqXHR, textStatus, errorThrown) {
                        });
        }
        $('[id*=hdnisosp]').val(result[0].IS_OSP);
        if (result[0].IS_VIP == "V" || result[0].IS_VIP == "VV") {
            $('.vipsource').css('display', '');
            var txt1 = '', txt2 = '';
            if (result[0].VIP_TYPE_NAME != undefined && result[0].VIP_TYPE_NAME != null && result[0].VIP_TYPE_NAME != '') {
                txt1 = '<b> Source :</b><span>' + result[0].VIP_TYPE_NAME + '</span>';
            }
            if (result[0].VIP_NOTE != undefined && result[0].VIP_NOTE != null && result[0].VIP_NOTE != '') {
                txt2 = '<b> Remarks :</b><span>' + result[0].VIP_NOTE + '</span>';
            }
            if (txt1 != '') {
                $('.vsource').empty();
                $('.vsource').append(txt1);
            }
            if (txt2 != '') {
                $('.vremarks').empty();
                $('.vremarks').append(txt2);
            }
        }
        else {
            $('.vipsource').css('display', 'none');
        }
        var STR = result[0].PATIENT_IMAGE; var _umr_no = result[0].UmrNo, _pat_id = result[0].PATIENT_ID, _ref_type_id = "1";
        document.getElementById('<%=HdnHealthcardid.ClientID %>').value = result[0].HEALTH_CARD_ID;
        document.getElementById('<%=HdnHealthcardno.ClientID %>').value = result[0].HEALTH_CARD_NAME;
        document.getElementById('<%=lblhcno.ClientID %>').innerHTML = result[0].HEALTH_CARD_NAME;
        document.getElementById('<%=hdncashlmtamt.ClientID %>').value = result[0].CASH_LIMIT_AMT;
        if (document.getElementById('<%=hdnDocName.ClientID %>').value == "MLC") {
            document.getElementById('' + ctrlcom + '_hdnmlcumrno').value = _umr_no;
        }
        /* added by pushkar please let his know
        if(result[0].HC_HEALTH_CARD_STS=='Y')
        {
        $.ajax({
        type: "POST",
        url: _iniUrl + "GridService.asmx/MultipleHcGetting",
        data: "{'_umr_no':'" + _umr_no + "'}",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        async: false,
        error: function (jqXHR, textStatus, errorThrown) {
        },
        success: function (JData) {
        }
        });
        } added by pushkar please let his know */

        $('#' + ctrlcom + '_umrPatientDetails_hdnReg_id').val(result[0].REGISTRATION_ID);
        if (form_name != "OPCNCL" && form_name != "PREAUTH" && form_name != "DI" && form_name != "OPPKGBILL" && form_name != "CorpClaim" && form_name != "OUTSTDNGDUE" && form_name != "POSTDSCNT" && form_name != "IP CREDIT LIMIT" && form_name != "PREADVANCE" && form_name != "MLC" && form_name != "PDoc" && form_name != "Refund" && form_name != "Passport" && form_name != 'PREADVANCE' && form_name != 'MAB' && form_name != 'CREF' && form_name != "ConsTransfer" && form_name != "PATIENT COMPONENT" && form_name != "PATIENTDAILIZERMAPPING" && form_name != "DIALYSIS BOOKING" && form_name != "DIALLABIND" && form_name != "DIAREND" && form_name != "DIALSERIND" && form_name != "HCSUMRY" && form_name != "FeedBack Form" && form_name != "OpBillAssesment" && form_name != "ER" && form_name != 'PASSPORTDETAILS' && form_name != "BillConvertion" && form_name != "HCFEEDBK" && form_name != 'ADVTRAN' && form_name != 'TO_ADVTRAN' && form_name != "HISAPPT" && form_name != "RefLetterValidity" && form_name != "AssesmentMerge" && form_name != "OrderedVerification" && form_name != "ESTBILL" && form_name != "PreAssessmentBills" && form_name != "IPRECEIPT_CNCL" && form_name != "PatientAccount" && form_name != "MULTIPLEBILLS" && form_name != "QUICKADMN") {
            if (result[0].CREDIT_ORG_ID != undefined && result[0].CREDIT_ORG_ID != null && result[0].CREDIT_ORG_ID != "") {
                document.getElementById('' + ctrlcom + '_uccorporate_CmpLookup__hiddenID').value = result[0].CREDIT_ORG_ID;
            }
        }
        if (form_name == "Cons") {
            document.getElementById('' + ctrlcom + '_hdndueamt').value = result[0].DUE_AMOUNT;
            document.getElementById('' + ctrlcom + '_hdnpat_id').value = _pat_id;
            document.getElementById('<%=hdnconsultentdoctorid.ClientID %>').value = result[0].TREATMENT_BY_ID;
        }
        if (form_name == "DIALLABIND") {
            document.getElementById('<%=hdnconsultentdoctorid.ClientID %>').value = result[0].TREATMENT_BY_ID;
        }
        if (form_name == "OP") {
            document.getElementById('<%=hdnconsultentdoctorid.ClientID %>').value = result[0].TREATMENT_BY_ID;

        }
        if (form_name == "DIAREND") {
            document.getElementById('<%=hdnconsultentdoctorid.ClientID %>').value = result[0].TREATMENT_BY_ID;

        }


        document.getElementById('<%=hdnUmrNo.ClientID %>').value = _umr_no;
        document.getElementById('<%=hdnRegID.ClientID %>').value = result[0].REGISTRATION_ID;
        document.getElementById('<%=hdnRegDt.ClientID %>').value = result[0].REGISTRATION_DT;
        document.getElementById('<%=hdnPatientid.ClientID %>').value = _pat_id;
        document.getElementById('<%=hdnDeptId.ClientID %>').value = result[0].Department_ID;
        document.getElementById('<%=hdnDeptName.ClientID %>').value = result[0].Department_Name;
        document.getElementById('<%=hdnbillid.ClientID %>').value = result[0].BILL_ID;
        /*don't remove This Condition if in case U Use "hdnoldregtpaid" Split & Use */
        if (document.getElementById('<%=hdnoldregtpaid.ClientID %>').value == "" || document.getElementById('<%=hdnoldregtpaid.ClientID %>').value == "0" || document.getElementById('<%=hdnoldregtpaid.ClientID %>').value == null) {
            document.getElementById('<%=hdnoldregtpaid.ClientID %>').value = result[0].COMPANY_ID;
        }
        document.getElementById('<%=hdnisnewborn.ClientID %>').value = result[0].IS_NEWBORN;
        $('#' + ctrlcom + '_umrPatientDetails_ucPatOptions_hdnOptUmrNo').val(_umr_no);
        $('#' + ctrlcom + '_umrPatientDetails_Umrlookup_txtSearchControl').val(_umr_no);
        /*related to upload files in dms*/
        document.getElementById('ctl00_hdnDMSUmrNo').value = _umr_no;
        document.getElementById('ctl00_hdnDMSAdmnNo').value = result[0]. ;
        document.getElementById('' + ctrlcom + '_umrPatientDetails_hdnpatareaid').value = result[0].AREA;
        $('#' + ctrlcom + '_umrPatientDetails_Umrlookup__hiddenID').val(_pat_id);
        $('#' + ctrlcom + '_umrPatientDetails_Umrlookup__hiddenText').val(_umr_no);
        $('#' + ctrlcom + '_umrPatientDetails_ucPatOptions_hdnOptRegID').value = result[0].REGISTRATION_ID;
        $('#' + ctrlcom + '_umrPatientDetails_ucPatOptions_hdnOptPatientid').val(_pat_id);
        $('#' + ctrlcom + '_umrPatientDetails_ucPatOptions_hdnOptBillid').value = result[0].BILL_ID;
        if (document.getElementById('' + ctrlcom + '_umrPatientDetails_Umrlookup_txtSearchControl').value != '') {
            document.getElementById('' + ctrlcom + '_umrPatientDetails_Umrlookup_txtSearchControl').style.border = "1px solid rgb(190, 190, 190)";
        }
        if (form_name == "PASSPORTDETAILS") {
            $('#' + ctrlcom + '_hdnNatinality_id').val(result[0].NATIONALITY_ID);
        }
        if (form_name == "PREADVANCE") {
            var umr_NO = result[0].UmrNo;
            PreviousAdvanceDetails(umr_NO);
        }
        if (document.getElementById('<%=hdnDocName.ClientID %>').value == 'ESTBILL') {
            AssignAdmnInfo1();
            IntermBillDetails();
            EstimationDeposiAmt();
            EstimationQuestionDetails();
            EstimationAddressDetails();


        }
        if (form_name == "QUICKADMN") {
            var res = result[0];
            umrdetalies(res);

        }

        var _baseString = '';
        GetAsync(
            "Private/FrontOffice/OPDBILLNEW.aspx/Get_imagedetails",
            { _str: STR, UMR_NO: _umr_no, REFERENCE_ID: _pat_id, REFERENCE_TYPE_ID: "1", formname: form_name },
            function (data) {
                _baseString = data.d;
                if (_baseString != '' && _baseString != undefined && _baseString != null) {
                    $('#<%=img.ClientID %>').attr('src', "data:image/jpg;base64," + _baseString);
                }
                else {
                    $('#<%=img.ClientID %>').attr('src', "");
                }
            },
            function (jqXHR, textStatus, errorThrown) {
            });
        var PatientID = result[0].PATIENT_ID;
        if (PatientID == undefined || PatientID == null || PatientID == "") { PatientID = "0"; }
        if (document.getElementById('<%=hdnDocName.ClientID %>').value == "ER") {
            document.getElementById('' + ctrlcom + '_ddlNationality').value = result[0].NATIONALITY_ID;
            document.getElementById('' + ctrlcom + '_hdnpatRev_No').value = result[0].PATIENT_RIVISION_NO;
            document.getElementById('' + ctrlcom + '_txtNearestPS').value = result[0].NEAREST_PS;

            ClearAddressDetails();
            $('#' + ctrlcom + '_hdnNatinality_id').val(result[0].NATIONALITY_ID);
            // AssignReferalDetails(PatientID);
            AssignReferalsInfo(PatientID);
            AssignAddrDtls(PatientID);
        }
        /* checking Registration Validity start */
        if (result[0].REG_EXPIRY_DT != null && result[0].REG_EXPIRY_DT != '' && result[0].REG_EXPIRY_DT != undefined) {
            var regExpDt = result[0].REG_EXPIRY_DT.split(' ')[0];
            var ExpDt = new Date(regExpDt).format('dd-MMM-yyyy');
            if (new Date(regExpDt).format('dd-MMM-yyyy') == "NaN--NaN") {
                ExpDt = regExpDt.split('-')[0] + "/" + regExpDt.split('-')[1] + "/" + regExpDt.split('-')[2];
            }
            var REGExpDt = new Date(ExpDt).format('dd-MMM-yyyy');
            var currDt = new Date().format("dd-MMM-yyyy");
            if (REGExpDt.length == 11) {
                var sedt = REGExpDt;
                var currDt = new Date().format('dd-MMM-yyyy');
                var res = CompareExpireDate(sedt, currDt);
                if (res == "d1<d2") {
                    var type = '';
                    if (document.getElementById('<%=hdnFormName.ClientID %>').value == 'OP')
                    { type = 'OP'; }
                    else if (document.getElementById('<%=hdnDocName.ClientID %>').value == 'ADMN')
                    { type = 'ADMN'; }
                    else
                    { type = 'CON'; }
                }
            }
        }    /* checking Registration Validity Ends */
        /* assigning data to Banner controls */
        document.getElementById('<%=lblPatName.ClientID %>').innerHTML = result[0].DISPLAY_NAME;
        if (document.getElementById('<%=hdnDocName.ClientID %>').value != "ADMN" && document.getElementById('<%=hdnDocName.ClientID %>').value == "OPCNCL" && document.getElementById('<%=hdnDocName.ClientID %>').value == "OPPKGBILL" && document.getElementById('<%=hdnDocName.ClientID %>').value == "OUTSTDNGDUE" && document.getElementById('<%=hdnDocName.ClientID %>').value == "Refund" && document.getElementById('<%=hdnDocName.ClientID %>').value == "POSTDSCNT") {
            document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnPatientName').value = result[0].DISPLAY_NAME;
        }
        if (form_name == "PREADVANCE") {
            document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnPatientName').value = result[0].DISPLAY_NAME;
            document.getElementById('' + ctrlcom + '_chkpatientname').checked = true;
            depositer();
        }
        document.getElementById('<%=lblgender.ClientID %>').innerHTML = result[0].GENDER;
        document.getElementById('<%=lblpatientcategory.ClientID %>').innerHTML = result[0].FOREIGN_CATEGORIES_NAME;
        var age = result[0].AGE.split(',');
        /* changed Bby rani age[0] to DISPLAY_AGE */
        document.getElementById('<%=lblagedob.ClientID %>').innerHTML = result[0].DISPLAY_AGE + "/" + new Date(result[0].DOB).format(document.getElementById('<%=hdndtfmt.ClientID %>').value);
        document.getElementById('<%=hdnDOB.ClientID %>').value = new Date(result[0].DOB).format(document.getElementById('<%=hdndtfmt.ClientID %>').value);
        document.getElementById('<%=lbloccupation.ClientID %>').innerHTML = result[0].OCCUPATION;
        document.getElementById('<%=lblmothername.ClientID %>').innerHTML = result[0].MOTHER_MAIDEN_NAME;
        if (result[0].IS_REG_REQUIRED == 'Y' && result[0].REG_PATIENT_TYPE_NAME == '') {
            document.getElementById('<%=lblpattype.ClientID %>').innerHTML = 'General';
        }
        else {
            document.getElementById('<%=lblpattype.ClientID %>').innerHTML = result[0].REG_PATIENT_TYPE_NAME + "/" + result[0].REG_TYPE_NAME;
        }

        var __admnNO = document.getElementById('' + ctrlcom + '_umrPatientDetails_hdnucadmnno').value;
        var hdnUAdmnNO = document.getElementById('<%=hdnUAdmnNO.ClientID %>').value
        if (hdnUAdmnNO == '' || hdnUAdmnNO == null || hdnUAdmnNO == undefined) { hdnUAdmnNO = ''; }
        if (__admnNO == '' || __admnNO == null || __admnNO == undefined) { __admnNO = ''; }
        /* if(hdnUAdmnNO!=''){
        $('#'+ ctrlcom + '_umrPatientDetails_ucAdmission_txtSearchControl').val(hdnUAdmnNO);
        }
        else
        $('#'+ ctrlcom + '_umrPatientDetails_ucAdmission_txtSearchControl').val(__admnNO);*/


        document.getElementById('<%=lblcmpname.ClientID %>').innerHTML = result[0].REG_REFERENCE_TYPE_NAME; //result[0].COMPANY_NAME;-->Commented By Naresh
        document.getElementById('<%=lblMobileNo.ClientID %>').innerHTML = result[0].MOBILE_NO1;


        if (result[0].RELATION_SHIP_NAME == 'Self') {
            document.getElementById('<%=lblrespperson.ClientID %>').innerHTML = 'Responsible';
            document.getElementById('<%=lblfathername.ClientID %>').innerHTML = 'Self';
        }
        else if (result[0].RELATION_SHIP_NAME == '') {
            document.getElementById('<%=lblrespperson.ClientID %>').innerHTML = 'Responsible';
        }
        else {
            document.getElementById('<%=lblrespperson.ClientID %>').innerHTML = result[0].RELATION_SHIP_NAME;
            document.getElementById('<%=lblfathername.ClientID %>').innerHTML = result[0].RES_PERSON_NAME;
        }

        document.getElementById('<%=hdnOspRegPatID.ClientID %>').value = result[0].PATIENT_ID;
        if (result[0].IS_REG_REQUIRED != 'Y' && result[0].CONSULTANT != '')
            document.getElementById('<%=lblrefdoc.ClientID %>').innerHTML = result[0].CONSULTANT + '-' + result[0].Department_Name;
        document.getElementById('<%=hdnGenderID.ClientID %>').value = result[0].GENDER_ID;
        if (form_name == "POSTDSCNT") {
            $('#' + ctrlcom + '_umrPatientDetails_ucAdmission_txtSearchControl').val(document.getElementById('' + ctrlcom + '_umrPatientDetails_hdnIPAdmnno').value);
        }
        if (document.getElementById('<%=hdnDocName.ClientID %>').value == "Cons" || document.getElementById('<%=hdnDocName.ClientID %>').value == "ADMN") {

            if (document.getElementById('<%=hdnDocName.ClientID %>').value == "ADMN") {
                if (result[0].PATIENT_TYPE_ID == "2" || result[0].PATIENT_TYPE_ID == "5" || result[0].PATIENT_TYPE_ID == "8" || result[0].PATIENT_TYPE_ID == "9") {
                    document.getElementById('' + ctrlcom + '_uccorporate_ddlPaymentBy').value = 0;
                } else { document.getElementById('' + ctrlcom + '_uccorporate_ddlPaymentBy').value = 1; }
            } else {
                document.getElementById('' + ctrlcom + '_uccorporate_ddlPaymentBy').value = 0;
                $('#' + ctrlcom + '_uccorporate_ddlPaymentBy').addClass('red');
            }
            /* Company setting Reg Details Required in Transaction screen and Days for consideration */
            var IsRegReq = document.getElementById('' + ctrlcom + '_hdnIsRegDtlsReq').value; /*Registration Details Required in Transaction Forms*/
            var RegReferalDays = document.getElementById('' + ctrlcom + '_hdnRegRefDays').value;
            if (IsRegReq == "Yes") {
                var NoofDays = 0;
                var RegDt = result[0].REGISTRATION_DT;
                if (RegDt == '' || RegDt == undefined || RegDt == "") { NoofDays = 0; }
                else {
                    NoofDays = Math.round(Math.ceil(((new Date()).getTime() - (new Date(RegDt)).getTime())) / (1000 * 60 * 60 * 24));
                }
                if (NoofDays <= RegReferalDays) {
                    var patid = result[0].PATIENT_ID;
                    AssignReferalsInfo(patid);
                    if (result[0].PATIENT_TYPE_ID == "2" || result[0].PATIENT_TYPE_ID == "5" || result[0].PATIENT_TYPE_ID == "8" || result[0].PATIENT_TYPE_ID == "9") {
                        document.getElementById('' + ctrlcom + '_uccorporate_ddlPaymentBy').value = 2;
                    } else { document.getElementById('' + ctrlcom + '_uccorporate_ddlPaymentBy').value = 1; }
                    $('#' + ctrlcom + '_uccorporate_ddlPaymentBy').removeClass('red');
                    AssignCompanyDetails();
                    if (document.getElementById('<%=hdnDocName.ClientID %>').value == "ADMN") {
                        document.getElementById('' + ctrlcom + '_hdnpat_id').value = result[0].PATIENT_ID;
                        if (result[0].EMPLOYEE_ID != null && result[0].EMPLOYEE_ID != '' && result[0].EMPLOYEE_ID != undefined) {
                            if (result[0].EMPLOYEE_ID > 0) {
                                if (result[0].ELIGIBLE_WARD_GROUP_NAME != '' && result[0].ELIGIBLE_WARD_GROUP_NAME != undefined && result[0].ELIGIBLE_WARD_GROUP_NAME != null) {
                                    document.getElementById('' + ctrlcom + '_ucBedRoomWard_tdlblEligiblewardGrp').style.display = "table-cell"
                                    document.getElementById('' + ctrlcom + '_ucBedRoomWard_tdtxtEligiblewardGrp').style.display = "table-cell"
                                    document.getElementById('' + ctrlcom + '_ucBedRoomWard_TxteliblewardGrp').value = result[0].ELIGIBLE_WARD_GROUP_NAME;
                                    document.getElementById('' + ctrlcom + '_ucBedRoomWard_hdnEligibleWardGrpId').value = result[0].ELIGIBLE_WARD_GROUP_ID;
                                }
                            }
                        }
                        else {
                            document.getElementById('' + ctrlcom + '_ucBedRoomWard_tdlblEligiblewardGrp').style.display = "none"
                            document.getElementById('' + ctrlcom + '_ucBedRoomWard_tdtxtEligiblewardGrp').style.display = "none"
                        }
                        if (result[0].IS_NEWBORN == 'Y') {
                            document.getElementById('' + ctrlcom + '_ddlLinktype').value = 2;
                            document.getElementById('' + ctrlcom + '_chkLinkIP').disabled = false;
                            document.getElementById('' + ctrlcom + '_hdnIsNewBorn').value = "Y";
                            document.getElementById('' + ctrlcom + '_ucParentIP_txtSearchControl').style.border = "1px solid #f4785e";
                            document.getElementById('tdlinkno').style.display = 'table-cell';
                            document.getElementById('tdcadavar').style.display = 'none';
                            document.getElementById('' + ctrlcom + '_txtcadvarremarks').style.border = '1px solid rgb(190,190,190)';
                            document.getElementById('' + ctrlcom + '_ucParentIP_txtSearchControl').disabled = false;
                            document.getElementById('lk_btn_ctl00_ContentPlaceHolder1_ucParentIP').disabled = false;
                            document.getElementById('' + ctrlcom + '_lbllinkno').innerHTML = 'Link#';
                            document.getElementById('' + ctrlcom + '_ucParentIP_txtSearchControl').value = result[0].ADMN_NO;
                            document.getElementById('' + ctrlcom + '_ucParentIP__hiddenID').value = result[0].ADMN_ID;
                            document.getElementById('' + ctrlcom + '_hdnParentWardID').value = result[0].WARD_ID;
                            document.getElementById('' + ctrlcom + '_hdnParentWardName').value = result[0].WARD_NAME;
                            document.getElementById('' + ctrlcom + '_hdnParentTWardID').value = result[0].TREATED_WARD_ID;
                            document.getElementById('' + ctrlcom + '_hdnParentTWardName').value = result[0].TREATED_WARD_NAME;
                            document.getElementById('' + ctrlcom + '_hdnParentRoomID').value = result[0].ROOM_ID;
                            document.getElementById('' + ctrlcom + '_hdnParentRoomName').value = result[0].ROOM_NAME;
                            document.getElementById('' + ctrlcom + '_hdnParentBedID').value = result[0].BED_ID;
                            document.getElementById('' + ctrlcom + '_hdnParentBedName').value = result[0].BED_NAME;
                            document.getElementById('' + ctrlcom + '_hdnParentwardgrpid').value = result[0].WARD_GROUP_ID;
                            document.getElementById('' + ctrlcom + '_hdnParentwardgrpname').value = result[0].WARD_GROUP_NAME;
                            document.getElementById('' + ctrlcom + '_hdnParenttwardgrpid').value = result[0].TREATED_WARD_GROUP_ID;
                            document.getElementById('' + ctrlcom + '_hdnParenttwardgrpname').value = result[0].TREATED_WARD_GROUP_NAME;

                            //                                GetAsync(
                            //                                    "Private/FrontOffice/DayCare/AddNewAdmission.aspx/Link_Precondition",
                            //                                    { UMR_NO:result[0].PARENT_UMR_NO},
                            //                                    function (JData) {
                            //                                    },
                            //                                    function (jqXHR, textStatus, errorThrown) {
                            //                                    });

                            document.getElementById('ctl00_ContentPlaceHolder1_ucParentIP_hdn_preCond').value = "WOMEN^^^" + result[0].PARENT_UMR_NO;
                        }
                        if (result[0].CONSULTANT != '') {
                            document.getElementById('' + ctrlcom + '_hdnPreAdvanceAmt').value = result[0].PRE_ADVANCE;
                            AssignPrimaryDoctor(result[0].Doctor_ID, result[0].CONSULTANT, result[0].SPECIALIZATION_ID, result[0].SPECIALIZATION_NAME);
                        }
                        if (form_name == "ADMN") {
                            document.getElementById('<%=hdnpatient_type.ClientID %>').value = result[0].PATIENT_TYPE_ID;
                            if (result[0].IS_MLC == 'Y') {
                                $(".stoast").toastText("Info", 'MLC Patient !', 5, 2);
                            }
                            if (result[0].PATIENT_TYPE_ID == '1') {
                                document.getElementById('' + ctrlcom + '_uccorporate_CmpLookup_txtSearchControl').disabled = true;
                                document.getElementById('lk_btn_ctl00_ContentPlaceHolder1_uccorporate_CmpLookup').disabled = true;
                                document.getElementById('' + ctrlcom + '_uccorporate_btnCmpReg').disabled = true;
                                document.getElementById('' + ctrlcom + '_uccorporate_btnRefLetter').disabled = true;
                                document.getElementById('' + ctrlcom + '_uccorporate_ucRefLetterNo_txtSearchControl').disabled = true;
                                document.getElementById('lk_btn_ctl00_ContentPlaceHolder1_uccorporate_ucRefLetterNo').disabled = true;
                                var type = '<%=Request.QueryString["Type"] %>';

                                if (type == "Pre") {
                                    OnPagePreAdmnValidations();
                                }
                                else {
                                    OnPageValidations();
                                }
                            }

                            Get_Emergency_Dtls(result[0].PATIENT_ID);
                        }
                    }
                }
                else {
                    document.getElementById('' + ctrlcom + '_ucReferal_ddlreferral').value = '1';


                    if (document.getElementById('' + ctrlcom + '_umrPatientDetails_hdnIsRefDtlsDisable').value == 'YES') {
                        document.getElementById('' + ctrlcom + '_ucReferal_ucreferalname_txtSearchControl').value = '';
                        document.getElementById('' + ctrlcom + '_ucReferal_txtrefaddr').value = '';
                        document.getElementById('' + ctrlcom + '_ucReferal_txtRefPhone').value = '';
                        document.getElementById('' + ctrlcom + '_ucReferal_ddlreferral').className = 'Gray';
                    }
                    else {
                        if (document.getElementById('' + ctrlcom + '_ucReferal_ddlreferral').value == '1') {
                            GetNonAsync(
                        "GridService.asmx/Get_Default_Values",
                        {},
                        function (data) {

                            if (data.d.length > 0) {

                                var ref_by = jQuery.parseJSON(data.d[0]);
                                var ref_source = jQuery.parseJSON(data.d[1]);
                                var ref_to = jQuery.parseJSON(data.d[2]);

                                var adress;
                                document.getElementById('' + ctrlcom + '_ucReferal_ucreferalname__hiddenID').value = ref_by[0].REFRL_ID;
                                document.getElementById('' + ctrlcom + '_ucReferal_ucreferalname__hiddenText').value = ref_by[0].REFERAL_NAME;
                                document.getElementById('' + ctrlcom + '_ucReferal_ucreferalname_txtSearchControl').value = ref_by[0].REFERAL_NAME;
                                document.getElementById('' + ctrlcom + '_ucReferal_txtRefPhone').value = ref_by[0].MOBILE_PHONE;
                                document.getElementById('' + ctrlcom + '_ucReferal__hdnID').value = ref_by[0].REFRL_ID;

                                if (ref_by[0].CITY_NAME != undefined && ref_by[0].CITY_NAME != null && ref_by[0].CITY_NAME != "") {
                                    if (ref_by[0].ADDRESS1 != undefined && ref_by[0].ADDRESS1 != null && ref_by[0].ADDRESS1 != "") {
                                        adress = ref_by[0].ADDRESS1 + "," + ref_by[0].CITY_NAME;
                                    }
                                    else {
                                        adress = ref_by[0].CITY_NAME;
                                    }

                                }
                                if (ref_by[0].LOCATION_NAME != undefined && ref_by[0].LOCATION_NAME != null && ref_by[0].LOCATION_NAME != "") {
                                    if (ref_by[0].ADDRESS1 != undefined && ref_by[0].ADDRESS1 != null && ref_by[0].ADDRESS1 != "") {
                                        adress = adress + "," + ref_by[0].LOCATION_NAME;
                                    }
                                    else {
                                        adress = ref_by[0].LOCATION_NAME;
                                    }
                                }

                                document.getElementById('' + ctrlcom + '_ucReferal_txtrefaddr').value = adress
                                document.getElementById('' + ctrlcom + '_ucReferal_hdnrefareaid').value = ref_by[0].AREA_ID;

                                document.getElementById('' + ctrlcom + '_ucReferal_ucrfrlsrc_txtSearchControl').value = "";

                                document.getElementById('' + ctrlcom + '_ucReferal_ucrfrlsrc_txtSearchControl').value = ref_source[0].REFERAL_CATEGORY_NAME;
                                document.getElementById('' + ctrlcom + '_ucReferal_ucrfrlsrc__hiddenID').value = ref_source[0].CAT_REFRL_ID;
                                document.getElementById('' + ctrlcom + '_ucReferal_ucrfrlsrc__hiddenText').value = ref_source[0].REFERAL_CATEGORY_NAME;
                                $('#' + ctrlcom + '_ucReferal_hdncattype_id').val(ref_source[0].CAT_REFRL_SOURCE_ID);


                                document.getElementById('' + ctrlcom + '_ucReferal_ucReferedto_txtSearchControl').value = ref_to[0].REFERED_TO_REFERAL_NAME;
                                document.getElementById('' + ctrlcom + '_ucReferal_ucReferedto__hiddenID').value = ref_to[0].REFERED_TO_REFRL_ID;
                                document.getElementById('' + ctrlcom + '_ucReferal_ucReferedto__hiddenText').value = ref_to[0].REFERED_TO_REFERAL_NAME;

                                var Source = document.getElementById('' + ctrlcom + '_ucReferal_ddlreferral').value;
                                var Name = document.getElementById('' + ctrlcom + '_ucReferal_ucreferalname_txtSearchControl').value;

                                var ReferedTo = document.getElementById('' + ctrlcom + '_ucReferal_ucReferedto_txtSearchControl').value;

                                var Ref_id = document.getElementById('' + ctrlcom + '_ucReferal_ucreferalname__hiddenID').value;
                                var ReferedTo_id = document.getElementById('' + ctrlcom + '_ucReferal_ucReferedto__hiddenID').value;
                                var ReferalClass = document.getElementById('' + ctrlcom + '_ucReferal_ucrfrlsrc_txtSearchControl').value;
                                var Refrl_class_id = document.getElementById('' + ctrlcom + '_ucReferal_ucrfrlsrc__hiddenID').value;
                                var Cat_type_id = document.getElementById('' + ctrlcom + '_ucReferal_hdncattype_id').value;
                                var Address = document.getElementById('' + ctrlcom + '_ucReferal_txtrefaddr').value;
                                var Phone = document.getElementById('' + ctrlcom + '_ucReferal_txtRefPhone').value;
                                var id = document.getElementById('' + ctrlcom + '_ucReferal__hdnID').value;
                                var pat_rfrl_dtl_id = '0';
                                var RefArea_Id = document.getElementById('' + ctrlcom + '_ucReferal_hdnrefareaid').value;
                                if (Cat_type_id == undefined || Cat_type_id == null || Cat_type_id == '')
                                { Cat_type_id = 0; }
                                var chksms = 'N';
                                var chkleter = 'N';

                                var Remarks = document.getElementById('' + ctrlcom + '_ucReferal_txtremarks').value;
                                var smstime = new Date().format('HH:mm:ss');
                                var smsDt = "";
                                MaintainReferal_sourceid(Ref_id);
                                SelectedRowIndex = SelectedRowIndex == 0 ? 1 : SelectedRowIndex;
                                if (SelectedRowIndex == 1) {
                                    multiDimArrayR1(SelectedRowIndex, Source, Name, Ref_id, ReferalClass, Refrl_class_id, Address, Phone, id, pat_rfrl_dtl_id, RefArea_Id, ReferedTo_id, ReferedTo, chksms, chkleter, Remarks, Cat_type_id, smsDt);
                                }

                                $('#' + ctrlcom + '_ucReferal_ucreferalname_txtSearchControl').removeClass('red');
                                $('#' + ctrlcom + '_ucReferal_ucrfrlsrc_txtSearchControl').removeClass('red');
                                $('#' + ctrlcom + '_ucReferal_ucReferedto_txtSearchControl').removeClass('red');

                            }
                        },
                        function (jerror, jerrorstatus, errorThrown)
                        { });
                        }
                    }
                }
            }

            if (document.getElementById('<%=hdnDocName.ClientID %>').value == "Cons") {/* Company setting Reg Doctor Required in consultation screen and Days for consideration */
                $('#' + ctrlcom + '_UCServices_hdnGender_ID').val(result[0].GENDER_ID);
                $('#' + ctrlcom + '_UCServices_hdnPat_Age').val('0');
                var age = result[0].AGE;
                var age_split = age.split(",");

                $('#' + ctrlcom + '_UCServices_hdnPat_Age').val(age_split[0]);
                $('#' + ctrlcom + '_UCServices_hdnCasulity').val(result[0].REG_TYPE_ID);
                document.getElementById('<%=hdnpatient_type.ClientID %>').value = result[0].PATIENT_TYPE_ID;

                var Pat_Type = result[0].PATIENT_TYPE_ID;
                if (Pat_Type != '') {
                    if (Pat_Type == '2' || Pat_Type == '3' || Pat_Type == '4' || Pat_Type == '5' || Pat_Type == '6' || Pat_Type == '7' || Pat_Type == '8' || Pat_Type == '9' || Pat_Type == '10') {
                        document.getElementById('' + ctrlcom + '_uccorporate_ddlPaymentBy').value = 0;
                        $('#' + ctrlcom + '_uccorporate_ddlPaymentBy').addClass('red');
                    } /*Changed 0 to 2 by naresh*/
                    else {
                        document.getElementById('' + ctrlcom + '_uccorporate_ddlPaymentBy').value = result[0].PATIENT_TYPE_ID;
                        $('#' + ctrlcom + '_uccorporate_ddlPaymentBy').removeClass('red');
                    }
                } else {

                    document.getElementById('' + ctrlcom + '_uccorporate_ddlPaymentBy').value = 0;
                    $('#' + ctrlcom + '_uccorporate_ddlPaymentBy').addClass('red');

                }
                if (getParameterByName('MODE') != 'VIEW') {
                    if (document.getElementById('' + ctrlcom + '_hdnAppsync').value == "true") {
                        BindConsultReq(result[0].Doctor_ID);
                    }
                    //                        GetAsync(
                    //                            "Private/FrontOffice/OpBilling/OPConsultation1.aspx/Company_Precondition",
                    //                            { PatientId: PatientID,UMR_NO:_umr_no,CMPNY_ID:0 },
                    //                            function (JData) {
                    //                            },
                    //                            function (jqXHR, textStatus, errorThrown) {
                    //                            }); 
                    
 var oprefltrfor = "";
        if (document.getElementById('<%=hdnDocName.ClientID %>').value == "OP")
            oprefltrfor = "OPB"
        else if (document.getElementById('<%=hdnDocName.ClientID %>').value == "Cons")
            oprefltrfor = "OPC"

                    document.getElementById('ctl00_ContentPlaceHolder1_uccorporate_CmpLookup_hdn_preCond').value = "0^PATIENTCMP^" + PatientID + "^";
                    document.getElementById('ctl00_ContentPlaceHolder1_uccorporate_ucRefLetterNo_hdn_preCond').value = "^^^^" + 0 + "^" + _umr_no + "^^^"+oprefltrfor+"^";

                    set_contextKey = 'PATIENT';
                }
                var hdnRegDoctorReq = $('#<%=hdnRegDoctorRequired.ClientID %>').val();
                if (hdnRegDoctorReq == "True") {
                    var RegDoctorDays = $('#<%=hdnRegShowDocDays.ClientID %>').val();
                    var RegDt = result[0].REGISTRATION_DT;
                    var NoofDays = Math.round(Math.ceil(((new Date()).getTime() - (new Date(RegDt)).getTime())) / (1000 * 60 * 60 * 24));
                    if (NoofDays > RegDoctorDays) {
                    }
                    else {
                        AssignConsultantDoctor(result[0].Doctor_ID, result[0].CONSULTANT, result[0].CONSULTANT_CD, result[0].Department_ID, result[0].Department_Name);
                    }
                }
            }
        }
        else if (document.getElementById('<%=hdnDocName.ClientID %>').value == "OP") {
            var patid = result[0].PATIENT_ID;
            if (document.getElementById('' + ctrlcom + '_hdnView').value == 'REG') {
                document.getElementById('' + ctrlcom + '_umrPatientDetails_Umrlookup_txtSearchControl').value = result[0].UmrNo;
                document.getElementById('' + ctrlcom + '_umrPatientDetails_Umrlookup__hiddenID').value = result[0].PATIENT_ID;
                document.getElementById('' + ctrlcom + '_umrPatientDetails_Umrlookup__hiddenText').value = result[0].UmrNo;
                document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnTranUMRNO').value = result[0].UmrNo;
                $('#' + ctrlcom + '_umrPatientDetails_hdnReg_id').val(result[0].REGISTRATION_ID);
            }
            if (document.getElementById('' + ctrlcom + '_hdnView').value == 'VIEW_OP') {
                document.getElementById('' + ctrlcom + '_umrPatientDetails_Umrlookup_txtSearchControl').value = result[0].UmrNo;
                document.getElementById('' + ctrlcom + '_umrPatientDetails_Umrlookup__hiddenID').value = result[0].PATIENT_ID;
                document.getElementById('' + ctrlcom + '_umrPatientDetails_Umrlookup__hiddenText').value = result[0].UmrNo;
                $('#' + ctrlcom + '_umrPatientDetails_hdnReg_id').val(result[0].REGISTRATION_ID);
                AssignReferalsInfo(patid);
                AssignConsultantDoctor(result[0].Doctor_ID, result[0].CONSULTANT, result[0].CONSULTANT_CD, result[0].Department_ID, result[0].Department_Name);
            }
            $('#' + ctrlcom + '_hdnpat_id').val(result[0].PATIENT_ID);
            $('#' + ctrlcom + '_UCServices_hdnGender_ID').val(result[0].GENDER_ID);
            $('#' + ctrlcom + '_UCServices_hdnPat_Age').val('0');
            var age = result[0].AGE;
            var age_split = age.split(",");
            $('#' + ctrlcom + '_UCServices_hdnPat_Age').val(age_split[0]);
            $('#' + ctrlcom + '_UCServices_hdnCasulity').val(result[0].REG_TYPE_ID);
            document.getElementById('<%=hdnpatient_type.ClientID %>').value = result[0].PATIENT_TYPE_ID;
            var Pat_Type = result[0].PATIENT_TYPE_ID;
            if (Pat_Type != '') {
                if (Pat_Type == '2' || Pat_Type == '3' || Pat_Type == '4' || Pat_Type == '5' || Pat_Type == '6' || Pat_Type == '7' || Pat_Type == '8' || Pat_Type == '9' || Pat_Type == '10') {
                    document.getElementById('' + ctrlcom + '_uccorporate_ddlPaymentBy').value = 0;
                    $('#' + ctrlcom + '_uccorporate_ddlPaymentBy').addClass('red');
                } /*Changed 0 to 2 by naresh*/
                else {
                    document.getElementById('' + ctrlcom + '_uccorporate_ddlPaymentBy').value = result[0].PATIENT_TYPE_ID;
                    $('#' + ctrlcom + '_uccorporate_ddlPaymentBy').removeClass('red');
                    $('#' + ctrlcom + '_UCServices_divrptDispatch').val('2');
                }
            }
            else {
                document.getElementById('' + ctrlcom + '_uccorporate_ddlPaymentBy').value = 0;
                $('#' + ctrlcom + '_uccorporate_ddlPaymentBy').addClass('red');


            }
            if (document.getElementById('' + ctrlcom + '_hdnView').value != 'VIEW_OP') {/* Company setting Reg Details Required in Transaction screen and Days for consideration */
                var IsRegReq = $('#<%=hdnIsRegDtlsReq.ClientID %>').val(); /*Registration Details Required in Transaction Forms*/
                var RegReferalDays = $('#<%=hdnRegRefDays.ClientID %>').val();
                if (IsRegReq == "Yes") {
                    var NoofDays = 0;
                    var RegDt = result[0].REGISTRATION_DT;
                    if (RegDt == '' || RegDt == undefined || RegDt == "") {
                        NoofDays = 0;
                    }
                    else {
                        NoofDays = Math.round(Math.ceil(((new Date()).getTime() - (new Date(RegDt)).getTime())) / (1000 * 60 * 60 * 24));
                    }
                    if (NoofDays <= RegReferalDays) {
                        AssignReferalsInfo(patid);
                        AssignConsultantDoctor(result[0].Doctor_ID, result[0].CONSULTANT, result[0].CONSULTANT_CD, result[0].Department_ID, result[0].Department_Name);
                    }
                    else {
                        document.getElementById('' + ctrlcom + '_ucReferal_ddlreferral').value = '1';
                        document.getElementById('' + ctrlcom + '_ucReferal_ucreferalname_txtSearchControl').value = '';
                        document.getElementById('' + ctrlcom + '_ucReferal_txtrefaddr').value = '';
                        document.getElementById('' + ctrlcom + '_ucReferal_txtRefPhone').value = '';
                        document.getElementById('' + ctrlcom + '_ucReferal__hdnID').value = '0';
                    }
                }
                var hdnRegDoctorReq = document.getElementById('' + ctrlcom + '_hdnRegDoctorRequired');
                if (hdnRegDoctorReq.value == "True") {
                    var RegDoctorDays = document.getElementById('' + ctrlcom + '_hdnRegShowDocDays').value;
                    var RegDt = result[0].REGISTRATION_DT;
                    var NoofDays = 0;
                    if (RegDt == '' || RegDt == undefined || RegDt == "") {
                        NoofDays = 0;
                    }
                    NoofDays = Math.round(Math.ceil(((new Date()).getTime() - (new Date(RegDt)).getTime())) / (1000 * 60 * 60 * 24));
                    if (NoofDays > RegDoctorDays) {
                        $('#' + ctrlcom + '_UcOdrPsyn_txtSearchControl').val('');
                        $('#' + ctrlcom + '_UcOdrPsyn__hiddenText').val('');
                        $('#' + ctrlcom + '_UcOdrPsyn__hiddenID').val('');
                    }
                    else {
                        AssignConsultantDoctor(result[0].Doctor_ID, result[0].CONSULTANT, result[0].CONSULTANT_CD, result[0].Department_ID, result[0].Department_Name);
                    }
                }
                if (document.getElementById('' + ctrlcom + '_hdnAppsync').value == "true") {
                    BindBillingRequisitions();
                }
            }
            $('#' + ctrlcom + '_ucReferal_ddlreferral').removeClass('red');
            $('#' + ctrlcom + '_uccorporate_ddlPaymentBy').removeClass('red');
        }
    }
    if (form_name == 'OP') {
        if (result[0].DOCTOR_PAS_NO != undefined && result[0].DOCTOR_PAS_NO != null && result[0].DOCTOR_PAS_NO != '') {
            document.getElementById('' + ctrlcom + '_UCServices_hdnDoctrPasNo').value = result[0].DOCTOR_PAS_NO;
        }
        else {
            document.getElementById('' + ctrlcom + '_UCServices_hdnDoctrPasNo').value = '';
        }
    }
    if (form_name == 'HISAPPT') {
        BindAppointmentDetails('NEW', result);
        var patid = result[0].PATIENT_ID;
        AssignReferalsInfo(patid);
    }
    if (document.getElementById('<%=hdnDocName.ClientID %>').value == "OPCNCL") {
        BindBillCnclData();
        OnPageValidationBillCancell();
    }
    if (document.getElementById('<%=hdnDocName.ClientID %>').value == "OUTSTDNGDUE") {
        BindoutStndgDueData();
        OnPageValidation();
    }
    if (document.getElementById('<%=hdnDocName.ClientID %>').value == "Refund") {
        BindRefundDueData();
        OnPageValidation();
    }
    if (document.getElementById('<%=hdnDocName.ClientID %>').value == "POSTDSCNT") {
        BindPostDscntDueData();
        var admnNO = document.getElementById('<%=hdnUAdmnNO.ClientID %>').value;
        if (admnNO == '' || admnNO == undefined || admnNO == null) { admnNO = ''; }
        document.getElementById('' + ctrlcom + '_umrPatientDetails_ucAdmission_txtSearchControl').value = admnNO;
        OnPageValidation();
    }
    if (document.getElementById('<%=hdnDocName.ClientID %>').value == "OpBillAssesment") {
        BindBillCnclData();
        BindPrevAssesmentDetails();
        EstimationBillDetails();
        EstimationQuestionDetails();
        EstimationAddressDetails();
    }
    if (document.getElementById('<%=hdnDocName.ClientID %>').value == "AssesmentMerge") {
        BindBillCnclMergeData();
    }
    if (document.getElementById('<%=hdnDocName.ClientID %>').value == "PreAssessmentBills") {
        BindAdtEstData();
    }
    if (form_name == 'ADVTRAN') {
        Previous_Advance_Grid(result[0].UmrNo);
        OnPageValidation();
    }
    if (form_name == 'TO_ADVTRAN') {
        Previous_Advance_Grid_TO(result[0].UmrNo);
    }
    if (document.getElementById('<%=hdnFormName.ClientID %>').value == 'OP' || document.getElementById('<%=hdnFormName.ClientID %>').value == "Cons") {
        var cmp_Id = document.getElementById('' + ctrlcom + '_uccorporate_CmpLookup__hiddenID').value;
        var Pat_Type = document.getElementById('' + ctrlcom + '_uccorporate_ddlPaymentBy').value;
        if (Pat_Type == '2' || Pat_Type == '5' || Pat_Type == '8') {
            document.getElementById('' + ctrlcom + '_UCServices_hdnCorpPat').value = 'Y';
            FirstRowShowCmpAmts();
            EnableCmpInfo();
        }
        else {
            FirstRowHideCmpAmts();
            DisableCmpInfo();
            document.getElementById('' + ctrlcom + '_UCServices_hdnCorpPat').value = 'N';
        }
        if (parseInt(cmp_Id) > 0 && Pat_Type == '2') {
            DivCorporate.style.display = "block";
            DivCorpColors.style.display = "block";
        }
        else {
            DivCorporate.style.display = "none";
            DivCorpColors.style.display = "none";
        }
        if (getParameterByName('MODE') != 'VIEW_OP') {
            ServicesAutoContextKey();
        }
    }
    if (document.getElementById('<%=hdnDocName.ClientID %>').value == "OP" || document.getElementById('<%=hdnDocName.ClientID %>').value == "Cons") {
        $('#' + ctrlcom + '_hdnpat_id').val(result[0].PATIENT_ID);
        $('#' + ctrlcom + '_UCServices_hdnpatienttokenno').val(result[0].TOKEN_NO);
        onExtendedDisplayValues();
        if (document.getElementById('<%=hdnDocName.ClientID %>').value == "Cons")
        { OnPageValidation(); }
    }
    if (document.getElementById('<%=hdnDocName.ClientID %>').value == "ConsTransfer") {
        if (getParameterByName("MODE") != "VIEW") {
            BindPackageBillsList(result);
        }
    }
    if (document.getElementById('<%=hdnDocName.ClientID %>').value == "OPPKGBILL") {
        if (getParameterByName("MODE") != "VIEW") {
            BindPkgBillData();
        }
    }
    if (document.getElementById('<%=hdnDocName.ClientID %>').value == "ADMN") {
        OnchangeStatus(); onExtendedDisplayValues();
        notapplicablevalidation();
        Get_Advance_Related_data();
    }
    if (document.getElementById('<%=hdnDocName.ClientID %>').value == "CREF") {
        ChkRefLetDetails();
    }
    if (form_name == 'ADVTRAN') {
        OnPageValidation();
    }
    if (form_name == 'Cons' && document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnOPDState').value != '')
    //   if (ctl00_ContentPlaceHolder1_chk_old.checked == false) {
    {
        if (document.getElementById('' + ctrlcom + '_UCServices_hdnallowconsservice').value.toUpperCase() == "TRUE") {

            AllowAdminCharges();
            //   }
        }
    }
    document.getElementById('<%=hdnIsUmrSelection.ClientID %>').value = 'Y';
    if (form_name == 'MULTIPLEBILLS') {
        GetPatentBills();
        var admn_no = document.getElementById('' + ctrlcom + '_umrPatientDetails_ucbill__hiddenID').value;
        $('#' + ctrlcom + '_umrPatientDetails_Umrlookup_txtSearchControl').removeClass('lookuptextbox red');
        if (admn_no > 0) {
            $('#' + ctrlcom + '_umrPatientDetails_ucbill_txtSearchControl').removeClass('lookuptextbox red');
        }
        else {
            $(".stoast").toastText("Info", "Please Select Bill # ", 3, 2);
        }
        GetNonAsync(
        "Private/Corporate/Changes/CorpMultipleIns.aspx/GetSavedInsurancesbillsBILL_NO",
        { admn_no: admn_no },
        function (data) {
            $('[id*=tblmultiins] tr:has(td)').remove();
            var sdata = data.d[0];
            for (i = 0; i < sdata.length; i++) {
                var dob = sdata[i].PH_DOB;
                if (dob == null || dob == undefined) { dob = ''; }
                if (dob != '') { dob = new Date(dob).format('dd-MMM-yyyy'); }
                var POLICY_EXPIRY_DT = sdata[i].POLICY_EXPIRY_DT;
                if (POLICY_EXPIRY_DT == null || POLICY_EXPIRY_DT == undefined) { POLICY_EXPIRY_DT = ''; }
                if (POLICY_EXPIRY_DT != '') { POLICY_EXPIRY_DT = new Date(POLICY_EXPIRY_DT).format('dd-MMM-yyyy'); }
                var inslevel = sdata[i].INSURANCE_LEVEL_NAME;
                var idprof = sdata[i].ID_PROOF;
                var ID_PROOF_ID = sdata[i].ID_PROOF_ID;
                if (inslevel == 1) { inslevel = "Primary"; } if (inslevel == 2) { inslevel = "Secondary"; } if (inslevel == 3) { inslevel = "Territory"; }
                var InsPerc = sdata[i].CMP_PER.replace('.', '');
                var PatPerc = sdata[i].PAT_PER.replace('.', '');
                var PinZip = sdata[i].ZIPCODE;
                var Name = sdata[i].PH_FULL_NAME;
                var PRE_AUTH_AMOUNT = sdata[i].PRE_AUTH_AMOUNT;
                var APRVL_AMOUNT = sdata[i].APRVL_AMOUNT;
                var District_name = sdata[i].DISTRICT_NAME;
                var jDataval = AddUpdateInscmp(i + 1, sdata[i].INS_COMPANY_NAME, sdata[i].TPA_COMPANY_NAME, sdata[i].INS_COMPANY_ID, inslevel, sdata[i].INSURANCE_LEVEL, sdata[i].PLAN_NAME, InsPerc, PatPerc, sdata[i].PH_SSN, sdata[i].POLICY_NO, sdata[i].POLICY_MEMBER_ID, sdata[i].POLICY_GROUP_ID,
                                sdata[i].RELATION_NAME, sdata[i].RELATION_ID, POLICY_EXPIRY_DT, sdata[i].PH_FIRST_NAME, sdata[i].PH_MIDDLE_NAME, sdata[i].PH_LAST_NAME, sdata[i].GENDER_NAME, sdata[i].PH_GENDER_ID, dob,
                                sdata[i].ADDRESS1, sdata[i].AREA_NAME, sdata[i].AREA_ID, sdata[i].CITY_NAME, sdata[i].ZIPCODE, sdata[i].OFFICE_PHONE, sdata[i].MOBILE_PHONE, sdata[i].EMAIL_ID, sdata[i].EMPLOYER_NAME, sdata[i].EMPLOYER_LOCATION, sdata[i].CITY_ID,
                                 sdata[i].STATE_ID, sdata[i].COUNTRY_ID, 0, sdata[i].PATIENT_INS_ID, sdata[i].PH_FIRST_NAME, sdata[i].ADDRESS1, sdata[i].ADDRESS1, sdata[i].AREA_NAME, sdata[i].CITY_NAME, sdata[i].STATE_NAME, sdata[i].COUNTRY_NAME, PinZip, sdata[i].OFFICE_PHONE, sdata[i].ADDRESS2, Name, idprof, ID_PROOF_ID, PRE_AUTH_AMOUNT, APRVL_AMOUNT, District_name, 0, sdata[i].CLAIM_ID
                                 );
                renderUIDis(jDataval);
            }
            $('table[id*=tblmultiins] tr:has(td) div').css('display', 'block');
            if (getParameterByName("MODE") == 'VIEW') {
                $('table[id*=tblmultiins] tbody').find('[id*=imagetd]').css('display', 'none');
                $("[id$=tblmultiins] th").filter(':not(:has(table th))')[0].style.display = 'none';
            }
        },
        function () {
        });
    }
    else if (form_name == 'PREAUTH') {
        var admn_no = $('[id*=umrPatientDetails_ucPreAdmUmr_txtSearchControl]').val();
        GetAsync(
        "Private/Corporate/Changes/CorpMultipleIns.aspx/GetSavedInsurances",
        { admn_no: admn_no },
        function (data) {
            var sdata = data.d[0];
            for (i = 0; i < sdata.length; i++) {
                var dob = sdata[i].PH_DOB;
                if (dob == null || dob == undefined) { dob = ''; }
                if (dob != '') { dob = new Date(dob).format('dd-MMM-yyyy'); }
                var POLICY_EXPIRY_DT = sdata[i].POLICY_EXPIRY_DT;
                if (POLICY_EXPIRY_DT == null || POLICY_EXPIRY_DT == undefined) { POLICY_EXPIRY_DT = ''; }
                if (POLICY_EXPIRY_DT != '') { POLICY_EXPIRY_DT = new Date(POLICY_EXPIRY_DT).format('dd-MMM-yyyy'); }
                var inslevel = sdata[i].INSURANCE_LEVEL_NAME;
                var idprof = sdata[i].ID_PROOF;
                var ID_PROOF_ID = sdata[i].ID_PROOF_ID;
                if (inslevel == 1) { inslevel = "Primary"; } if (inslevel == 2) { inslevel = "Secondary"; } if (inslevel == 3) { inslevel = "Territory"; }
                var InsPerc = sdata[i].CMP_PER.replace('.', '');
                var PatPerc = sdata[i].PAT_PER.replace('.', '');
                var PinZip = sdata[i].ZIPCODE;
                var Name = sdata[i].PH_FULL_NAME;
                var PRE_AUTH_AMOUNT = sdata[i].PRE_AUTH_AMOUNT;
                var APRVL_AMOUNT = sdata[i].APRVL_AMOUNT;
                var District_name = sdata[i].DISTRICT_NAME;
                var jDataval = AddUpdateInscmp(i + 1, sdata[i].INS_COMPANY_NAME, sdata[i].TPA_COMPANY_NAME, sdata[i].INS_COMPANY_ID, inslevel, sdata[i].INSURANCE_LEVEL, sdata[i].PLAN_NAME, InsPerc, PatPerc, sdata[i].PH_SSN, sdata[i].POLICY_NO, sdata[i].POLICY_MEMBER_ID, sdata[i].POLICY_GROUP_ID,
                                sdata[i].RELATION_NAME, sdata[i].RELATION_ID, POLICY_EXPIRY_DT, sdata[i].PH_FIRST_NAME, sdata[i].PH_MIDDLE_NAME, sdata[i].PH_LAST_NAME, sdata[i].GENDER_NAME, sdata[i].PH_GENDER_ID, dob,
                                sdata[i].ADDRESS1, sdata[i].AREA_NAME, sdata[i].AREA_ID, sdata[i].CITY_NAME, sdata[i].ZIPCODE, sdata[i].OFFICE_PHONE, sdata[i].MOBILE_PHONE, sdata[i].EMAIL_ID, sdata[i].EMPLOYER_NAME, sdata[i].EMPLOYER_LOCATION, sdata[i].CITY_ID,
                                 sdata[i].STATE_ID, sdata[i].COUNTRY_ID, 0, sdata[i].PATIENT_INS_ID, sdata[i].PH_FIRST_NAME, sdata[i].ADDRESS1, sdata[i].ADDRESS1, sdata[i].AREA_NAME, sdata[i].CITY_NAME, sdata[i].STATE_NAME, sdata[i].COUNTRY_NAME, PinZip, sdata[i].OFFICE_PHONE, sdata[i].ADDRESS2, Name, idprof, ID_PROOF_ID, PRE_AUTH_AMOUNT, APRVL_AMOUNT, District_name
                                 );
                renderUIDis(jDataval);
            }
            $('table[id*=tblmultiins] tr:has(td) div').css('display', 'block');
        },
        function () {
        });
    }


    return false;
}