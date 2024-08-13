

/*$(document).ready(function () {
document.getElementById('' + ctrlcom + '_ucReferal_hdnRefQucikAdd').value = document.getElementById('' + ctrlcom + '_hdnrefquick').value;
if (document.getElementById('' + ctrlcom + '_hdnrefquick').value == 'N') {
document.getElementById('' + ctrlcom + '_ucReferal_btnQkAdd').style.display = 'none';
} 
if (document.getElementById('' + ctrlcom + '_hdncmpquick').value == 'N') {
document.getElementById('' + ctrlcom + '_Address1_imgBtnQuickAddr').style.display = 'none';
}
if (document.getElementById('' + ctrlcom + '_hdnareaquick').value == 'N') {
document.getElementById('' + ctrlcom + '_EmployerInfo1_btnCmpReg').style.display = 'none';
}

});*/

var ctrlcom = 'ctl00_ContentPlaceHolder1';
function OnPatientInfoFailure(data) {
    $(".stoast").toastText("warning", "Unable to connect service,Please try again!", 5, 3);
    return false;
}

function CommingFromRegToCons(PatientID, UmrNO) {

    BindPatientDetails(PatientID, UmrNO);
}

function AssignReferalsInfo(patID) {

    var PatientID = patID;
    if (getParameterByName("MODE") != "VIEW") {
        if (document.getElementById('' + ctrlcom + '_hdnRefReq').value == "Yes") {
            GetAsync(
                    "PatientRegistration.asmx/Get_Patient_Referals_Details",
                    { _patID: parseInt(PatientID) },
                    function (jdata) {
                        var result = jdata.d;
                        for (i = 0; i < result.length; i++) {

                            var Source = result[i].REFERAL_SOURCE_ID;
                            var Name = result[i].REFERAL_NAME;
                            var ReferalClass = result[i].REFERAL_CLASS_ID;
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

                                    if (Source != 0) {
                                        document.getElementById('' + ctrlcom + '_ucReferal_ucreferalname_txtSearchControl').value = Name;
                                        document.getElementById('' + ctrlcom + '_ucReferal_ucrfrlsrc_txtSearchControl').value = ReferalClass;
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

                                    document.getElementById('' + ctrlcom + '_ucReferal_txtrefaddr').disabled = true;
                                    document.getElementById('' + ctrlcom + '_ucReferal_txtRefPhone').disabled = true;
                                    document.getElementById('lk_btn_ctl00_ContentPlaceHolder1_ucReferal_ucreferalname').disabled = true;
                                    $('#' + ctrlcom + '_ucReferal_ucreferalname_txtSearchControl').removeClass('red');
                                }
                            }
                            if (i == 1) {
                                GlobalMyData2 = new Array();
                                // multiDimArrayR2(i, Source, Name, id, ReferalClass, Address, Phone, id);
                                multiDimArrayR2(i, Source, Name, id, ReferalClass, ReferalClassId, Address, Phone, id, '', '', RefToID, RefToName, is_sms, is_letter, remarks, cattypeid);

                            }
                            if (i == 2) {
                                GlobalMyData3 = new Array();
                                //multiDimArrayR3(i, Source, Name, id, ReferalClass, Address, Phone, id);
                                multiDimArrayR3(i, Source, Name, id, ReferalClass, ReferalClassId, Address, Phone, id, '', '', RefToID, RefToName, is_sms, is_letter, remarks, cattypeid);
                            }
                            if (i == 3) {
                                GlobalMyData4 = new Array();
                                //multiDimArrayR4(i, Source, Name, id, ReferalClass, Address, Phone, id);
                                multiDimArrayR4(i, Source, Name, id, ReferalClass, ReferalClassId, Address, Phone, id, '', '', RefToID, RefToName, is_sms, is_letter, remarks, cattypeid);
                            }

                        }

                    },
                    function (jqXHR, textStatus, errorThrown) {
                        $(".stoast").toastText("warning", errorThrown, 5, 3);
                    });
        }
    }
}


var arr = new Array();
function AssignConsultantDoctor(docid, doctname, doctorcd, deptid, docdeptname) {

    if (getParameterByName("MODE") == "VIEW") {
        var patid = getParameterByName("PatientID");
        var _billid = document.getElementById('' + ctrlcom + '_umrPatientDetails_hdnbillid').value;
    }
    else {
        DivCorpColors.style.display = 'none';

        arr[0] = docid; arr[1] = doctname; arr[2] = doctorcd; arr[3] = deptid; arr[4] = docdeptname;
        if (doctname == '' || doctname == null || doctname == undefined) { doctname = ''; }
        if (docdeptname == '' || docdeptname == null || docdeptname == undefined) { docdeptname = ''; }

        document.getElementById('' + ctrlcom + '_uccorporate_hdnarrdocid').value = docid;
        document.getElementById('' + ctrlcom + '_uccorporate_hdnarrdocname').value = doctname;
        document.getElementById('' + ctrlcom + '_uccorporate_hdnarrdoctcd').value = doctorcd;
        document.getElementById('' + ctrlcom + '_uccorporate_hdnarrdeptid').value = deptid;
        document.getElementById('' + ctrlcom + '_uccorporate_hdnarrdeptname').value = docdeptname;
        var patientid = document.getElementById('' + ctrlcom + '_umrPatientDetails_hdnPatientid').value;
        var companyid = document.getElementById('' + ctrlcom + '_uccorporate_CmpLookup__hiddenID').value;
        var paymentby = document.getElementById('' + ctrlcom + '_uccorporate_ddlPaymentBy').value;
        var apmnt_doc_leave_from_dt = document.getElementById('' + ctrlcom + '_umrPatientDetails_hdnapmntfromdt').value;
        var apmnt_doc_leave_to_dt = document.getElementById('' + ctrlcom + '_umrPatientDetails_hdnapmnttodt').value;
        if (apmnt_doc_leave_from_dt == null || apmnt_doc_leave_from_dt == undefined) { apmnt_doc_leave_from_dt = "" }
        if (apmnt_doc_leave_to_dt == null || apmnt_doc_leave_to_dt == undefined) { apmnt_doc_leave_to_dt = "" }
        $('#' + ctrlcom + '_UcOdrPsyn__hiddenID').val(docid);
        if (docdeptname != '' && doctname != '') {
            $('#' + ctrlcom + '_UcOdrPsyn_txtSearchControl').val(doctname + '-' + docdeptname);
            $('#' + ctrlcom + '_UcOdrPsyn__hiddenText').val(doctname + '-' + docdeptname);
        }
        else {
            $('#' + ctrlcom + '_UcOdrPsyn_txtSearchControl').val(doctname);
            $('#' + ctrlcom + '_UcOdrPsyn__hiddenText').val(docdeptname);
        }
        if (document.getElementById('' + ctrlcom + '_UcOdrPsyn_txtSearchControl').value != '') {
            $('#' + ctrlcom + '_UcOdrPsyn_txtSearchControl').removeClass('red');
        }
        var tariffid = 1;
        if (paymentby == 2) {
            tariffid = companyid;
        }

        //  ClearServicesGrid();
        GlobaltariffId = GlobaltariffId == '' ? 1 : GlobaltariffId;
        GlobaltariffId = GlobaltariffId == 0 ? tariffid : tariffid;
        tariffid = GlobaltariffId;
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

        if (paymentby == 1) {
            if (document.getElementById('' + ctrlcom + '_umrPatientDetails_hdndocreqstatus').value == "I") {
                $(".stoast").toastText("Info", 'Consultant Doctor is in In-Active status.System did not allow Consultation for Consultant Doctor.', 5, 2);
                return false;
            }
            else if (document.getElementById('' + ctrlcom + '_umrPatientDetails_hdnstopcons').value == "Y") {
                $(".stoast").toastText("Info", 'Sorry,No more Consultations allowed for Consultant doctor', 5, 2);
                return false;
            }
            else if (document.getElementById('' + ctrlcom + '_umrPatientDetails_hdndocholdstatus').value == "Y") {
                if (apmnt_doc_leave_from_dt != "" && apmnt_doc_leave_to_dt != "") {
                    var from_dt = new Date(apmnt_doc_leave_from_dt).format("dd-MMM-yyyy");
                    var to_dt = new Date(apmnt_doc_leave_to_dt).format("dd-MMM-yyyy");
                    $(".stoast").toastText("warning", "This Doctor is in Vacation/Holiday From " + from_dt + " to " + to_dt + "!", 5, 3);
                } else {
                    $(".stoast").toastText("warning", "Today Doctor is in Vacation/Holiday!", 5, 3);
                }
                return false;
            }
            else {
                BindCOnsultatnt_Det_Jquery(docid, patientid, companyid, tariffid, doctname, doctorcd, deptid, docdeptname, "", '', '0', 0);
            }
        }
        if (paymentby == 2) {
            if (document.getElementById('' + ctrlcom + '_uccorporate_CmpLookup_txtSearchControl').value != '') {
                var umr_no = $('#' + ctrlcom + '_umrPatientDetails_Umrlookup_txtSearchControl').val();
                var Cmpny_id = $('#' + ctrlcom + '_uccorporate_CmpLookup__hiddenID').val();
                var pat_id = $('#' + ctrlcom + '_hdnpat_id').val();
                Company_precondition(pat_id, umr_no, Cmpny_id);
                if (document.getElementById('' + ctrlcom + '_umrPatientDetails_hdndocreqstatus').value == "I") {
                    $(".stoast").toastText("Info", 'Consultant Doctor is in In-Active status.System did not allow Consultation for Consultant Doctor.', 5, 2);
                    return false;
                }
                else if (document.getElementById('' + ctrlcom + '_umrPatientDetails_hdnstopcons').value == "Y") {
                    $(".stoast").toastText("Info", 'Sorry,No more Consultations allowed for Consultant doctor', 5, 2);
                    return false;
                }
                else if (document.getElementById('' + ctrlcom + '_umrPatientDetails_hdndocholdstatus').value == "Y") {
                    if (apmnt_doc_leave_from_dt != "" && apmnt_doc_leave_to_dt != "") {
                        var from_dt = new Date(apmnt_doc_leave_from_dt).format("dd-MMM-yyyy");
                        var to_dt = new Date(apmnt_doc_leave_to_dt).format("dd-MMM-yyyy");
                        $(".stoast").toastText("warning", "This Doctor is in Vacation/Holiday From " + from_dt + " to " + to_dt + "!", 5, 3);
                    } else {
                        $(".stoast").toastText("warning", "Today Doctor is in Vacation/Holiday!", 5, 3);
                    }
                    return false;
                }
                else {
                    BindCOnsultatnt_Det_Jquery(docid, patientid, companyid, tariffid, doctname, doctorcd, deptid, docdeptname, "", '', '', 0);
                }
            }
        }
        if (document.getElementById('' + ctrlcom + '_ReceiptControl2_txtTotalDue').value > 0) {
            var asses = document.getElementById('' + ctrlcom + '_ChkAssesment').checked;
            if (asses == true) {
                $('#' + ctrlcom + '_ReceiptControl2_Search3_txtSearchControl').removeClass('red');
            }
            else {
                $('#' + ctrlcom + '_ReceiptControl2_Search3_txtSearchControl').addClass('red');

            }
        } else {
            $('#' + ctrlcom + '_ReceiptControl2_Search3_txtSearchControl').removeClass('red');
        }
    }

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
        var doctor_id = docid;
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
function BindCOnsultatnt_Det_Jquery(_doctor_id, _patient_id, _company_id, _tariff_id, doctorname, doctorcd, deptid, deptname, bill_id, reqid, event_track_id, APT_SLOTS_ID) {
    /*patient Category Mapping Concept*/
    var form_name = $('#' + ctrlcom + '_ReceiptControl2_hdnDocName').val();
    if (form_name == 'OP' || form_name == 'Cons' || form_name == 'OPQUICK') {
        var hdnallowtariffslcn = $('[id*=hdnallowtariffslcn]').val().toLowerCase();
        var pat_cat_id = $('#' + ctrlcom + '_UCServices_ddlpatcat').val();
        var pat_tariff_id = $('#' + ctrlcom + '_UCServices_ddltariff').val();
        var pat_type = $('#' + ctrlcom + '_uccorporate_ddlPaymentBy').val();
        if (pat_cat_id == undefined || pat_cat_id == null || pat_cat_id == '' || pat_cat_id == '--select--') { pat_cat_id = 0; }
        if (pat_tariff_id == undefined || pat_tariff_id == null || pat_tariff_id == '' || pat_tariff_id == '--select--') { pat_tariff_id = 0; }
        if (pat_type == undefined || pat_type == null || pat_type == '' || pat_type == '--select--' || pat_type == '0' || pat_type == 0) { pat_type = 1; }
        if (hdnallowtariffslcn == 'true' && parseInt(pat_cat_id) > 0 && parseInt(pat_tariff_id) > 0 && parseInt(pat_type) == 1)
            _tariff_id = pat_tariff_id;
    }
    document.getElementById('' + ctrlcom + '_hdnDoctorID').value = _doctor_id;
    document.getElementById('' + ctrlcom + '_hdnDoctor_ID').value = _doctor_id;
    document.getElementById('' + ctrlcom + '_hdnDoctorName').value = doctorname;
    document.getElementById('' + ctrlcom + '_hdnDoctorCd').value = doctorcd;
    document.getElementById('' + ctrlcom + '_hdnDeptId').value = deptid;
    document.getElementById('' + ctrlcom + '_hdnDeptName').value = deptname;
    var Servicetypeid = 0;
    var Servicegroupid = 0;
    if (_patient_id != undefined && _patient_id != null && _patient_id != '') { _patient_id = _patient_id; } else { _patient_id = "0"; }
    if (_company_id != undefined && _company_id != null && _company_id != '') { _company_id = _company_id; } else { _company_id = "0"; }
    if (_tariff_id != undefined && _tariff_id != null && _tariff_id != '') { _tariff_id = _tariff_id; } else { _tariff_id = "0"; }
    if (_doctor_id != undefined && _doctor_id != null && _doctor_id != '') {

        var hdnNoConsLimts = document.getElementById('' + ctrlcom + '_hdnNoConsLimts');
        if (hdnNoConsLimts.value == "True") {
            GetNonAsync("Private/FrontOffice/OpBilling/OPConsultation1.aspx/GetNoOfConsultationLimits",
                            { Doc_ID: _doctor_id },
                            function (jdata) {

                                if (jdata == null || jdata == '' || jdata == 0) {
                                    $(".stoast").toastText("warning", "This Patient consultant doctor has no Charge setup", 5, 3);
                                    return false;
                                }
                                var _objconcount = jdata.d;
                                if (_objconcount != null && _objconcount.length > 0) {
                                    if (_objconcount[0].Doc_status_id.toUpperCase() == "YES") {

                                        if (parseInt(_objconcount[0].CONSULTATION_COUNT) < parseInt(_objconcount[0].No_of_consult_days)) {
                                            var paymentby = document.getElementById('' + ctrlcom + '_uccorporate_ddlPaymentBy').value;

                                        }
                                        else {
                                            $(".stoast").toastText("warning", "Today's No of Consultaions Are Over For This Doctor " + _objconcount[0].Doctor_name, 5, 3);
                                            isdoctorexists = true;
                                            if (isdoctorexists) {
                                                $("table[id*=gvServices] tr:has(td)").each(function () {

                                                    var docid = $(this).closest('tr').find("input[type=hidden][id*=hdnDoctorId]").val();
                                                    if (docid == _doctor_id) {
                                                        $(this).remove();

                                                    }
                                                });
                                            }

                                            return false;
                                        }
                                    }
                                    else {
                                        $(".stoast").toastText("warning", "Not available doctor" + _pat_con_lmts[0].From_dt + " to " + _pat_con_lmts[0].To_dt + " this time", 5, 3);
                                        return false;
                                    }
                                }
                            },
                            function (jqXHR, textStatus, errorThrown) {
                                $(".stoast").toastText("warning", errorThrown, 5, 3);
                            });
        }

        GetNonAsync(
                          "Private/FrontOffice/OPDBILLNEW.aspx/Bind_Consultation_Det_Async",
                          { DOCTOR_ID: _doctor_id, PATIENT_ID: _patient_id, COMPANY_ID: _company_id, TARIFF_ID: _tariff_id },
                          function (msg) {
                              AjaxSucceededForBindCon(msg, reqid, event_track_id, APT_SLOTS_ID);

                              if ($('[id$=UCServices_gvServices] tr').filter(':eq(' + 0 + ')').find('input[type=hidden][id*=hdnServiceID]') > 0) {
                                  $('[id$=UCServices_gvServices] tr').filter(':eq(' + 0 + ')').find('[id*=lblvisitdetails]')[0].innerHTML = 'D-H' + '/' + msg.d[0].P_D_NO_VISITS + '-' + msg.d[0].P_NO_VISITS;
                                  $('[id$=UCServices_gvServices] tr').filter(':eq(' + 0 + ')').find('[id*=divsrvname]').addClass('btntxt srvdvisitdiv');
                                  $('[id$=UCServices_gvServices] tr').filter(':eq(' + 0 + ')').find('[id*=lblvisitdetails]').show();
                              }
                          },
                          function (jqXHR, textStatus, errorThrown) {
                              AjaxFailedForBindCon;
                          });
    }
}
var isdoctorexists = false;
var OrgPrice = 0, EmpPrice = 0, OrgConPer = 0, OrgConcAmt = 0;
function AjaxSucceededForBindCon(data, reqid, event_track_id, APT_SLOTS_ID) {
    if (data.d.length > 0) {
        if (data.d[0].CONSULTATION_TYPE_ID > 0) {
            if (data.d[0].LAST_VISITED == null || data.d[0].LAST_VISITED == '') {
                var _bill_dt = '';
            }
            else {
                var _bill_dt = new Date(data.d[0].LAST_VISITED).format('MM-dd-yyyy');
            }
            var today = new Date();
            var dd = today.getDate();
            var mm = today.getMonth() + 1;
            var yyyy = today.getFullYear();
            if (dd < 10) { dd = '0' + dd } if (mm < 10) { mm = '0' + mm }
            var today = mm + '-' + dd + '-' + yyyy;
            if (_bill_dt != '') {
                if (_bill_dt == today) {
                    if (document.getElementById('' + ctrlcom + '_ddlPatientType').value == 1 || document.getElementById('' + ctrlcom + '_ddlPatientType').value == 2 || document.getElementById('' + ctrlcom + '_uccorporate_ddlPaymentBy').value == 1 || document.getElementById('' + ctrlcom + '_uccorporate_ddlPaymentBy').value == 2)//if payment by general
                    {
                        var docName = document.getElementById('' + ctrlcom + '_hdnDoctorName').value;
                        if (document.getElementById('' + ctrlcom + '_hdnalwsameconsameday').value == "Yes") {
                            param = data.d[0]; var obj = 'suvarna';
                            return ConfirmationRequiredForSaveWithParam_message_Cons(obj, param, "Consultation For This Doctor (" + docName + ") Was Already Done On (" + _bill_dt + "). Do You Want To Continue..");
                        }
                        else {
                            $(".stoast").toastText("warning", "Consultation For This Doctor (" + docName + ") Was Already Done On (" + new Date(_bill_dt).format("dd-MMM-yyyy") + "). System Doesn't allow More Than One Consultation For Same Doctor On Same Day", 5, 3);
                            isdoctorexists = true;
                            return false;
                        }

                    }
                }
            }
            if (document.getElementById('' + ctrlcom + '_ddlPatientType').value == 2 || document.getElementById('' + ctrlcom + '_ddlPatientType').value == 5 || document.getElementById('' + ctrlcom + '_ddlPatientType').value == 8 || document.getElementById('' + ctrlcom + '_ddlPatientType').value == 9) {
                if (data.d[0].CHARGE_SETUP_DONE == 'N') {
                    var doctorName = document.getElementById('' + ctrlcom + '_hdnDoctorName').value;
                    $(".stoast").toastText("warning", "Consultation Charge Setup was not done for " + doctorName + " Please Contact Administrator !", 5, 3);
                    return false;
                }
                var umrno = document.getElementById('' + ctrlcom + '_umrPatientDetails_Umrlookup_txtSearchControl').value;
                var companyid = document.getElementById('' + ctrlcom + '_EmployerInfo1_uctpa__hiddenID').value;

            }
            var _srv_tax_amount = 0;
            if (document.getElementById('' + ctrlcom + '_hdnSrvTaxRequired').value == 'True') {
                var contax = document.getElementById('' + ctrlcom + '_hdnOpConsulTax').value;
                if (contax == undefined || contax == '' || contax == NaN)
                    contax = 0;
                _srv_tax_amount = (parseFloat(data.d[0].PRICE) * parseFloat(contax)) / 100;

                $('[id$=txtTaxAmt]').val(_srv_tax_amount);
                document.getElementById('' + ctrlcom + '_hdnOpConsPayAmt').value = data.d[0].PRICE;
            }
            _srv_tax_amount = parseFloat(_srv_tax_amount) + parseFloat(data.d[0].PRICE);

            var companyid = document.getElementById('' + ctrlcom + '_EmployerInfo1_uctpa__hiddenID').value;
            if (companyid > 0) {
                _price = data.d[0].PRICE;
                _price = _price == '' ? 0 : _price;
                OrgPrice = data.d[0].ORG_PRICE;
                OrgPrice = OrgPrice == '' ? 0 : OrgPrice;
            }
            else {
                var status = $("table[id$=tbl_tbl_PatRequisitions] tr:has(td)").find("input[type=checkbox]").is(':checked');
                if (document.getElementById('' + ctrlcom + '_hdnreqtype').value == "PACKAGE") {
                    _price = 0;
                } else {
                    _price = data.d[0].PRICE;
                }
            }
            var is_counter_required = data.d[0].IS_COUNTER_REQUIRED;
            var doctor_exists = data.d[0].DOCTOR_EXISTS;
            var _doctor_id = document.getElementById('' + ctrlcom + '_hdnDoctor_ID').value;
            var doctorname = document.getElementById('' + ctrlcom + '_hdnDoctorName').value;
            var doctorcd = document.getElementById('' + ctrlcom + '_hdnDoctorCd').value;
            var deptid = document.getElementById('' + ctrlcom + '_hdnDeptId').value;
            var deptname = document.getElementById('' + ctrlcom + '_hdnDeptName').value;
            var Servicegroupid = 0;
            var Servicetypeid = 0;
            var objectexp = arrayRequest1;
            var flagExist = false;

            if (document.getElementById('' + ctrlcom + '_chk_old').checked == true) {
                if (flagExist == false) {
                    if (arrayRequest1.length > 0) {
                        for (var i = 0; i < arrayRequest1.length; i++) {
                            reqid = arrayRequest1[i].REF_NO;
                            slottime = arrayRequest1[i].SLOT_TIME;
                        }
                    }
                    else {
                        if ($.inArray(parseInt(_doctor_id), arrServiceIds) == -1) {
                            var paymentby = document.getElementById('' + ctrlcom + '_uccorporate_ddlPaymentBy').value;
                            if (data.d[0].LAST_VISITED == null || data.d[0].LAST_VISITED == '') {
                                var _lastvisitedDt = '';
                            } else {
                                var _lastvisitedDt = new Date(data.d[0].LAST_VISITED).format('MM-dd-yyyy');
                            }
                            if (_lastvisitedDt == undefined || _lastvisitedDt == null || _lastvisitedDt == '') { _lastvisitedDt = ''; }
                            var VisitTypeId = data.d[0].CONSULTATION_TYPE_ID;
                            if (VisitTypeId == undefined || VisitTypeId == null || VisitTypeId == '') { VisitTypeId = '0'; }
                            if (is_counter_required.trim() == 'Y' && doctor_exists.trim() == 'N') {
                                return false;
                            }
                            else {
                                var hdnDoctorPrice = data.d[0].DOCTOR_PRICE;

                                var hdnDoctorPct = data.d[0].DOCTOR_PCT;
                                var hdnOrgPrice = data.d[0].ORG_PRICE;
                                var hdnOrgPct = data.d[0].ORG_PCT;
                                var hdnsrvpriceID = data.d[0].SERVICE_PRICE_ID;



                                if (hdnDoctorPrice == undefined || hdnDoctorPrice == null || hdnDoctorPrice == '') { hdnDoctorPrice = '0'; }
                                if (hdnDoctorPct == undefined || hdnDoctorPct == null || hdnDoctorPct == '') { hdnDoctorPct = '0'; }
                                if (hdnOrgPrice == undefined || hdnOrgPrice == null || hdnOrgPrice == '') { hdnOrgPrice = '0'; }
                                if (hdnOrgPct == undefined || hdnOrgPct == null || hdnOrgPct == '') { hdnOrgPct = '0'; }
                                var tariff_id = data.d[0].TARIFF_ID;
                                if (tariff_id == undefined || tariff_id == null || tariff_id == '') { tariff_id = '1'; }

                                fn_AddFilterRow_pkgbillSelection('G', 'N', 'N', 'N', 'N', 'N', 1, 2, doctorname, doctorcd, 'Consultation', _price, 0, _price, '', '', '', 0, 0, 1, _doctor_id, tariff_id, '', 'N', '', '', 0, '', 0, 0, _price, 0, 0, '', '', _lastvisitedDt, 0, '', '', '', '', deptid, '4', '', '', '0', '0', VisitTypeId, reqid, SlotTime, SlotId, '', 0, '', '', 'N', 'N', 0, '', '', 0, 0, 0, 0, event_track_id, '', 0, '', '', 0, 0, 0, 0, 0, '', 0, 0, '', hdnDoctorPrice, hdnDoctorPct, hdnOrgPrice, hdnOrgPct, hdnsrvpriceID);
                            }
                            $("table[id*=UCServices_gvServices] tr:has(td)").each(function () {
                                var RowIndexForGrid = $(this)[0].rowIndex;
                                if (document.getElementById('' + ctrlcom + '_hdnreqtype').value != "PACKAGE") {

                                    var class_srv_id = $("table[id$=UCServices_gvServices] tr").filter(":eq(" + RowIndexForGrid + ")").find("input[type=hidden][id*=hdnClass_Srv_ID]").val();
                                    var gen_servic_id = $("table[id$=UCServices_gvServices] tr").filter(":eq(" + RowIndexForGrid + ")").find('input[type=hidden][id*=hdnServiceID]').val();
                                    if (gen_servic_id == null || gen_servic_id == undefined || gen_servic_id == '') { gen_servic_id = 0; }
                                    if (class_srv_id == null || class_srv_id == undefined || class_srv_id == '') { class_srv_id = 0; }
                                    if (class_srv_id > 0 && gen_servic_id == 2) {

                                    } else {
                                        $("table[id$=UCServices_gvServices] tr").filter(":eq(" + RowIndexForGrid + ")").find('[id*=BtnSrvSearch]').attr("disabled", "true");
                                    }

                                }
                            });
                        }
                        else {
                            $(".stoast").toastText("warning", "Doctor " + doctorname + " Already Exists !", 5, 3);

                        }
                    }
                    objectexp = '';
                }
            }
            else {
                if (flagExist == false) {
                    if ($.inArray(parseInt(_doctor_id), arrServiceIds) == -1) {
                        var paymentby = document.getElementById('' + ctrlcom + '_uccorporate_ddlPaymentBy').value;
                        if (data.d[0].LAST_VISITED == null || data.d[0].LAST_VISITED == '') {
                            var _lastvisitedDt = '';
                        } else {
                            var _lastvisitedDt = new Date(data.d[0].LAST_VISITED).format('MM-dd-yyyy');
                        }
                        if (_lastvisitedDt == undefined || _lastvisitedDt == null || _lastvisitedDt == '') { _lastvisitedDt = ''; }
                        var VisitTypeId = data.d[0].CONSULTATION_TYPE_ID;
                        if (VisitTypeId == undefined || VisitTypeId == null || VisitTypeId == '') { VisitTypeId = '0'; }

                        reqid = 0;
                        if (is_counter_required.trim() == 'Y' && doctor_exists.trim() == 'N') {
                            return false;
                        }
                        else {
                            var con_dic_pcr = document.getElementById('' + ctrlcom + '_uccorporate_hbncondisamount').value;
                            if (con_dic_pcr == undefined || con_dic_pcr == null || con_dic_pcr == '') { con_dic_pcr = '0'; }
                            var con_dis_amt = 0;
                            if (con_dic_pcr > 0) {
                                con_dis_amt = Math.round((parseFloat(_price) * parseFloat(con_dic_pcr)) / 100);
                            }
                            var hdnDoctorPrice = data.d[0].DOCTOR_PRICE;
                            var tariff_id = data.d[0].TARIFF_ID
                            var hdnDoctorPct = data.d[0].DOCTOR_PCT;
                            var hdnOrgPrice = data.d[0].ORG_PRICE;
                            var hdnOrgPct = data.d[0].ORG_PCT;
                            var hdnsrvpriceID = data.d[0].SERVICE_PRICE_ID;

                            if (hdnDoctorPrice == undefined || hdnDoctorPrice == null || hdnDoctorPrice == '') { hdnDoctorPrice = '0'; }
                            if (hdnDoctorPct == undefined || hdnDoctorPct == null || hdnDoctorPct == '') { hdnDoctorPct = '0'; }
                            if (hdnOrgPrice == undefined || hdnOrgPrice == null || hdnOrgPrice == '') { hdnOrgPrice = '0'; }
                            if (hdnOrgPct == undefined || hdnOrgPct == null || hdnOrgPct == '') { hdnOrgPct = '0'; }
                            if (tariff_id == undefined || tariff_id == null || tariff_id == '') { tariff_id = '1'; }
                            fn_AddFilterRow_pkgbillSelection('G', 'N', 'N', 'N', 'N', 'N', 1, 2, doctorname, doctorcd, 'Consultation', _price, 0, _price, '', '', '', 0, 0, 1, _doctor_id, tariff_id, '', 'N', '', '', 0, '', 0, 0, _price, 0, 0, '', '', _lastvisitedDt, 0, '', '', '', '', deptid, '4', '', '', '0', '0', VisitTypeId, reqid, slottime, slotid, '', 0, '', '', '', '', '', '', 0, 1, 0, 0, 0, 0, '', 0, '', '', 0, 0, 0, 0, 0, '', 0, 0, '', hdnDoctorPrice, hdnDoctorPct, hdnOrgPrice, hdnOrgPct, hdnsrvpriceID);
                        }
                        $("table[id*=UCServices_gvServices] tr:has(td)").each(function () {
                            var RowIndexForGrid = $(this)[0].rowIndex;
                            if (document.getElementById('' + ctrlcom + '_hdnreqtype').value != "PACKAGE") {
                                var class_srv_id = $("table[id$=UCServices_gvServices] tr").filter(":eq(" + RowIndexForGrid + ")").find("input[type=hidden][id*=hdnClass_Srv_ID]").val();
                                var gen_servic_id = $("table[id$=UCServices_gvServices] tr").filter(":eq(" + RowIndexForGrid + ")").find('input[type=hidden][id*=hdnServiceID]').val();
                                if (gen_servic_id == null || gen_servic_id == undefined || gen_servic_id == '') { gen_servic_id = 0; }
                                if (class_srv_id == null || class_srv_id == undefined || class_srv_id == '') { class_srv_id = 0; }
                                if (class_srv_id > 0 && gen_servic_id == 2) {

                                } else {
                                    $("table[id$=UCServices_gvServices] tr").filter(":eq(" + RowIndexForGrid + ")").find('[id*=BtnSrvSearch]').attr("disabled", "true");
                                }
                            }
                        });
                    }
                    else {
                        $(".stoast").toastText("warning", "Doctor " + doctorname + " Already Exists !", 5, 3);
                    }
                    objectexp = '';
                }
            }

        }

        var status = $("table[id$=tbl_tbl_PatRequisitions] tr:has(td)").find("input[type=checkbox]").is(':checked');
        if (status == true) {
            if (document.getElementById('' + ctrlcom + '_hdnreqtype').value == "APPOINTMENTS") {
                $("table[id*=UCServices_gvServices] tr:has(td)").each(function () {
                    var RowIndexForGrid = $(this)[0].rowIndex;
                    var doctor_id = document.getElementById('' + ctrlcom + '_hdnconsreqdocid').value;
                    var _srv_doctorId = $(this).closest('tr').find('input[type=hidden][id*=hdnDoctorID]').val();
                    if (_srv_doctorId == doctor_id) {
                        $("table[id$=UCServices_gvServices] tr").filter(":eq(" + RowIndexForGrid + ")").find('[id*=hdnreqid]').val(APT_SLOTS_ID);
                        $("table[id$=UCServices_gvServices] tr").filter(":eq(" + RowIndexForGrid + ")").find('[id*=BtnSrvSearch]').attr("disabled", "true");
                        $("table[id$=UCServices_gvServices] tr").filter(":eq(" + RowIndexForGrid + ")").find('[id*=txtServiceName]').attr("disabled", "true");
                        var clientname = $('[id*=hdnclientNameFor]').val();
                        clientname = clientname.toUpperCase();
                        if (clientname != 'MRRCH')
                            $("table[id$=UCServices_gvServices] tr").filter(":eq(" + RowIndexForGrid + ")").find('[id*=ddSType]').attr("disabled", "true");
                    }

                });
            }
            if (document.getElementById('' + ctrlcom + '_hdnreqtype').value == "PACKAGE") {
                $("table[id*=UCServices_gvServices] tr:has(td)").each(function () {
                    var RowIndexForGrid = $(this)[0].rowIndex;
                    var doctor_id = document.getElementById('' + ctrlcom + '_hdnconsreqdocid').value;
                    var _srv_doctorId = $(this).closest('tr').find('input[type=hidden][id*=hdnDoctorID]').val();
                    if (_srv_doctorId == doctor_id) {
                        $("table[id$=UCServices_gvServices] tr").filter(":eq(" + RowIndexForGrid + ")").find('[id*=hdnreqid]').val(APT_SLOTS_ID);
                        $("table[id$=UCServices_gvServices] tr").filter(":eq(" + RowIndexForGrid + ")").find('[id*=ddSType]').attr("disabled", "true");
                        $("table[id$=UCServices_gvServices] tr").filter(":eq(" + RowIndexForGrid + ")").find('[id*=BtnSrvSearch]').prop("disable", "false");
                    }

                });
            }
            if (document.getElementById('' + ctrlcom + '_hdnreqtype').value == "CROSS CONSULTATION") {
                $("table[id*=UCServices_gvServices] tr:has(td)").each(function () {
                    var RowIndexForGrid = $(this)[0].rowIndex;
                    if (document.getElementById('' + ctrlcom + '_hdnAppsync').value == "true") {
                        if (document.getElementById('' + ctrlcom + '_hdnisapptslotreq').value.toLowerCase() == "true") {
                            BindSlotsCalling();
                        }
                    }
                });
            }
        }
        var ddlpattypchk = document.getElementById('' + ctrlcom + '_ddlPatientType').value;
        if (ddlpattypchk == '2' || ddlpattypchk == '5' || ddlpattypchk == '7' || ddlpattypchk == '8' || ddlpattypchk == '9' || ddlpattypchk == '10') {
            if ($('#' + ctrlcom + '_chk_old')[0].checked == true) {
                classDisplayCmpAmts();
            } else {
                classDisplayCmpAmts();
            }
        } else {
            classHideCmpAmts();
        }
    }
    if (document.getElementById('' + ctrlcom + '_ReceiptControl2_txtTotalDue').value > 0) {
        var asses = document.getElementById('' + ctrlcom + '_ChkAssesment').checked;
        if (asses == true) {
            $('#' + ctrlcom + '_ReceiptControl2_Search3_txtSearchControl').removeClass('red');
        }
        else {
            $('#' + ctrlcom + '_ReceiptControl2_Search3_txtSearchControl').addClass('red');
        }
    } else {
        $('#' + ctrlcom + '_ReceiptControl2_Search3_txtSearchControl').removeClass('red');
    }
    AssignSnoIndex();
}

function AssignSnoIndex() {
    var gridID = document.getElementById('' + ctrlcom + '_UCServices_gvServices');
    var index = 0;
    $("table[id*=UCServices_gvServices] tr:has(td)").each(function () {
        index = index == 0 ? 1 : index;
        $(this).closest('tr').find("[id*=lblSNo]").text(index);
        index++;
    });
}
function AjaxFailedForBindCon(data) {
    $('[id$=progress]').hide();
    $(".stoast").toastText("warning", "Unable to conncet Service,Please Try Again!", 5, 3);
    return false;
}
var GlobaltariffId = 1;
function AssignCompanyDetails() {
    var patid = document.getElementById('' + ctrlcom + '_umrPatientDetails_hdnPatientid').value;
    GetAsync("Private/FrontOffice/OPDBILLNEW.aspx/onref", { patid: patid }, function () { }, function (jqXHR, textStatus, errorThrown) { });
    var umrno = document.getElementById('' + ctrlcom + '_umrPatientDetails_Umrlookup_txtSearchControl').value;
    GetAsync("Private/FrontOffice/OPDBILLNEW.aspx/OnImageCondition", { umrno: umrno }, function () { }, function (jqXHR, textStatus, errorThrown) { });
    var paymentby = $('#' + ctrlcom + '_uccorporate_ddlPaymentBy').val();
    if (paymentby == 1) {
        ClearCmpControlInfo();
        ClearCmpDtls();
        DisableCorp(true);
        $('#' + ctrlcom + '_uccorporate_CmpLookup_txtSearchControl').removeClass('red');
        $('#' + ctrlcom + '_uccorporate_ddlPaymentBy')[0].disabled = false;
        $('#' + ctrlcom + '_uccorporate_chkEmpDue')[0].disabled = false;
        $('#' + ctrlcom + '_uccorporate_btnCmpReg')[0].disabled = true;
    } else { DisableCorp(false); }
    var patientID = document.getElementById('' + ctrlcom + '_umrPatientDetails_hdnPatientid').value;
    document.getElementById('' + ctrlcom + '_ddlPatientType').value = document.getElementById('' + ctrlcom + '_uccorporate_ddlPaymentBy').value;
    if (document.getElementById('' + ctrlcom + '_uccorporate_ddlPaymentBy').value == 2) {
        $('#' + ctrlcom + '_uccorporate_CmpLookup_txtSearchControl').addClass('red');
        //hidecolumns('table-cell');
        GetNonAsync(
                    "PatientRegistration.asmx/Get_Patient_CorpReg_Details",
                    { _patID: parseInt(patientID) },
                    function (jdata) {
                        if (jdata.d.length > 0) {
                            var result = jdata.d;
                            GlobaltariffId = result[0]["CONS_TARIFF_ID"];
                            if (result[0]["EFFECT_TO_DT"] != undefined || result[0]["EFFECT_TO_DT"] != '') {
                                var efftodt = result[0]["EFFECT_TO_DT"];
                                var currDt = new Date().format('dd-MMM-yyyy');
                                var res = CompareExpireDate(efftodt, currDt);
                                if (res == "d1<d2") {
                                    $(".stoast").toastText("warning", "Company Effct To Date is expired", 5, 3);
                                    return false;
                                }
                            }
                            else if (result[0]["CARD_VALIDITY"] != undefined || result[0]["CARD_VALIDITY"] != '') {
                                var sedt = result[0]["CARD_VALIDITY"];
                                var currDt = new Date().format('dd-MMM-yyyy');
                                var res = CompareExpireDate(sedt, currDt);
                                if (res == "d1<d2") {
                                    $(".stoast").toastText("warning", "Card Validity is Over  for this Patient", 5, 3);
                                    return false;
                                }
                            }
                            document.getElementById('' + ctrlcom + '_hdnNoOfConsValidDays').value = result[0]["VAL_NO_OF_DAYS"];
                            document.getElementById('' + ctrlcom + '_hdnNoOfValidConsults').value = result[0]["VAL_NO_OF_CONSULTATIONS"];
                            document.getElementById('' + ctrlcom + '_hdnOrgPer').value = result[0]["ORG_PERCENT"];
                            document.getElementById('' + ctrlcom + '_hdnEmpPer').value = result[0]["EMP_PERCENT"];
                            document.getElementById('' + ctrlcom + '_hdnCmpColor').value = result[0]["COLOUR_ID"];
                            document.getElementById('' + ctrlcom + '_hdnCmpConsTariffId').value = result[0]["CONS_TARIFF_ID"];
                            document.getElementById('' + ctrlcom + '_uccorporate_CmpLookup__hiddenID').value = result[0]["EMPLOYER_ID"];

                            if (document.getElementById('' + ctrlcom + '_uccorporate_ddlPaymentBy').value == 2) {
                                document.getElementById('' + ctrlcom + '_uccorporate_CmpLookup__hiddenID').value = result[0]["EMPLOYER_ID"];
                                document.getElementById('' + ctrlcom + '_uccorporate_CmpLookup_txtSearchControl').disabled = false;
                                document.getElementById('' + ctrlcom + '_uccorporate_ucRefLetterNo_txtSearchControl').disabled = false;
                                document.getElementById('lk_btn_ctl00_ContentPlaceHolder1_uccorporate_CmpLookup').disabled = false;
                                document.getElementById('' + ctrlcom + '_uccorporate_btnCmpReg').disabled = false;
                                document.getElementById('' + ctrlcom + '_uccorporate_chkEmpDue').disabled = false;
                                document.getElementById('' + ctrlcom + '_uccorporate_btnRefLetter').disabled = false;

                                if (result[0]["IS_LETTER_REQUIRED"] == 'Y')
                                    document.getElementById('' + ctrlcom + '_uccorporate_txtEmpName').checked = true;

                                var Dueamt = document.getElementById('' + ctrlcom + '_hdndueamt').value;
                                if (result[0] != null && result[0] != undefined) {
                                    var resultamt = Dueamt - result[0].POST_DISCOUNT;
                                    if (Dueamt > 0 && resultamt > 0) {
                                        var dueremainder = document.getElementById('' + ctrlcom + '_hdnDueRemainder').value;
                                        if ((dueremainder != null || dueremainder != '') && dueremainder == 'True') {
                                            $(".stoast").toastText("warning", "There is Due amount(" + resultamt + ") pending for this UMR# : " + document.getElementById("" + ctrlcom + "_umrPatientDetails_txtSearchControl").value, 5, 3);
                                        }
                                    }
                                }
                            }
                            else {
                                var paymentby = document.getElementById('' + ctrlcom + '_uccorporate_ddlPaymentBy').value;
                                if (paymentby == 2) {
                                    //hidecolumns('table-cell');
                                }
                                else {
                                    //hidecolumns('none');
                                }
                                document.getElementById('' + ctrlcom + '_uccorporate_ucRefLetterNo_txtSearchControl').disabled = true;
                                document.getElementById('lk_btn_ctl00_ContentPlaceHolder1_uccorporate_ucRefLetterNo').disabled = true;
                                document.getElementById('' + ctrlcom + '_uccorporate_btnRefLetter').disabled = true;
                                document.getElementById('' + ctrlcom + '_uccorporate_CmpLookup_txtSearchControl').disabled = true;
                                document.getElementById('lk_btn_ctl00_ContentPlaceHolder1_uccorporate_CmpLookup').disabled = true;
                                document.getElementById('' + ctrlcom + '_uccorporate_btnCmpReg').disabled = true;
                                document.getElementById('' + ctrlcom + '_uccorporate_chkEmpDue').disabled = true;
                                document.getElementById('' + ctrlcom + '_uccorporate_btnRefLetter').disabled = true;
                                document.getElementById('' + ctrlcom + '_uccorporate_CmpLookup_txtSearchControl').value = '';
                                document.getElementById('' + ctrlcom + '_uccorporate_CmpLookup__hiddenID').value = '';
                                document.getElementById('' + ctrlcom + '_uccorporate_txtMedcard').value = '';
                                document.getElementById('' + ctrlcom + '_uccorporate_txtEmpCd').value = '';
                                document.getElementById('' + ctrlcom + '_uccorporate_txtEmpName').value = '';
                                document.getElementById('' + ctrlcom + '_uccorporate_txtRefLetIssuedby').value = '';
                                document.getElementById('' + ctrlcom + '_uccorporate_txtRefLetIssueDt').value = '';
                                document.getElementById('' + ctrlcom + '_uccorporate_txtRefLetValidDt').value = '';
                            }
                        }
                    },
                    function (jqXHR, textStatus, errorThrown) {
                        $(".stoast").toastText("warning", errorThrown, 5, 3);
                    });
    }
}

//var set_contextKey = '';
//function SetReferalContextKey(ddl) {
//    document.getElementById('' + ctrlcom + '_ucReferal_txtReferal').value = '';
//    if (ddl.value == '1') {
//        document.getElementById('' + ctrlcom + '_ucReferal_txtReferal').disabled = true;
//        //document.getElementById('' + ctrlcom + '_imgBtnref').disabled = false;

//    }
//    else {
//        document.getElementById('' + ctrlcom + '_ucReferal_txtReferal').disabled = false;
//        // document.getElementById('' + ctrlcom + '_imgBtnref').disabled = false;

//    }
//    if (ddl.value == '2')
//        set_contextKey = 'DOCTOR';
//    else if (ddl.value == '3')
//        set_contextKey = 'STAFF';
//    else if (ddl.value == '4')
//        set_contextKey = 'ORGANIZATION';
//    else
//        set_contextKey = ddl.value;
//    return;
//}

var SlotId = 0;
var SlotTime = "";
var APT_SLOTS_ID = 0;
var data;
var __jsonData = [];
var arrayRequest1 = [];
var reqrowindex = 0;
var arrRequisations = [];
function BindConsultReq(consdocid) {

    SlotId = 0;
    SlotTime = "";
    reqrowindex = 0;
    var hdnDateFormat = document.getElementById('' + ctrlcom + '_headerControl1_hdnDateFormat').value;
    if (hdnDateFormat == undefined || hdnDateFormat == null || hdnDateFormat == "") { hdnDateFormat = "dd-MMM-yyyy"; }
    var hdnTimeFormat = document.getElementById('' + ctrlcom + '_headerControl1_hdnTimeFormat').value;
    if (hdnTimeFormat == undefined || hdnTimeFormat == null || hdnTimeFormat == "") { hdnTimeFormat = "HH:mm:ss"; }
    hdnTimeFormat = "HH:mm:ss";
    var param = param || {};
    var pText = document.getElementById('' + ctrlcom + '_umrPatientDetails_Umrlookup_txtSearchControl').value
    var cName = 'UMR_NO';
    param.dataKey = "NEWROW_ID"; /* tHIS oNE aDDED bY pUSHKAR pLEASE lET hIS kNOW bEFORE cHANGE kEY ,to hANDLE aPPT,cROSS CONS,pKG cONS,fOLLUPS*/
    param.pageSize = 10;
    param.pageNum = 1;
    param.defaultWSParams = { _cName: cName, _pText: pText, _advSrch: '' };
    param.wsPath = "Private/FrontOffice/OPDBILLNEW.aspx/GetPatientRequisitions";
    param.wsFilterPath = "Private/FrontOffice/OPDBILLNEW.aspx/GetPatientRequisitions";
    param.template = [[{ icon: '../../Assets/Grid_Icons/delete.png', click: 'Delete', alt: 'Delete'}]
                            , "REF_TYPE*REF_TYPE"
                            , "REF_ID_N*REF_ID_N"
                            , "Consultantname*Consultantname"
                            , "SPECIALIZATION_NAME*SPECIALIZATION_NAME"
                            , "APMNT_DT*APMNT_DT"
                            , "REFERRED_BY*REFERRED_BY"
                            , "REMARKS*REMARKS"
                            , "CREATE_BY*CREATE_BY"
                            , "CREATE_DT*CREATE_DT"
                            ];
    param.header = ["Manage"
                            , { col: "Type", sort: true, filter: true }
                            , { col: "Appointment#", sort: true, filter: true }
                            , { col: "Doctor Name / Department ", sort: true, filter: true }
                            , { col: "Specialisation", sort: true, filter: true }
                            , { col: "Slot Time", sort: true, filter: true }
                            , { col: "Referred By", sort: true, filter: true }
                            , { col: "Remarks", sort: true, filter: true }
                            , { col: "Created By", sort: true, filter: true }
                            , { col: "Created Dt", sort: true, filter: true }
                           ];

    param.enablePaging = false;
    param.enableTrace = false;
    param.enableSorting = true;
    param.enableFilter = true;
    param.enableCheckbox = true;
    param.checkboxClick = getconsultdetails;
    param.checkboxClick.id = "chkreq";
    param.tableTemplate = true;
    param.enableDMS = false;
    param.RowDataBinding = function (rowitem, _data) {
        var obj = $(rowitem);
        obj.find("td").each(function (i, j) {
            if (i == 6) {
                if (_data.APMNT_DT != undefined && _data.APMNT_DT != null && _data.APMNT_DT != "" && _data.APMNT_DT != "null")
                    $(this).text(new Date(_data.APMNT_DT).format(hdnDateFormat) + " " + new Date(_data.APMNT_DT).format("HH:mm:ss"));
            }
            if (i == 10) {
                if (_data.CREATE_DT != undefined && _data.CREATE_DT != null && _data.CREATE_DT != "" && _data.CREATE_DT != "null")
                    $(this).text(new Date(_data.CREATE_DT).format(hdnDateFormat) + " " + new Date(_data.CREATE_DT).format("HH:mm:ss"));
            }
            if (i == 3) {
                if (_data.DOCTOR_ID != undefined && _data.DOCTOR_ID != null && _data.DOCTOR_ID != "" && _data.DOCTOR_ID != "null" && _data.DOCTOR_ID > 0) {
                    arrRequisations.push(parseInt(_data.DOCTOR_ID));
                }
                else {
                }
            }
        });
        setTimeout(function () {
            reqrowindex++;
            $('.ajaxTablecheckboxalltbl_PatRequisitions').css('display', 'none');
            if ($(rowitem).closest('tr').attr('data-key') == consdocid && _data.REF_TYPE != "PACKAGE") {
                if (document.getElementById('' + ctrlcom + '_uccorporate_ddlPaymentBy').value != '0') {
                    SlotId = _data.REF_NO;
                    SlotTime = _data.SLOT_TIME;
                    APT_SLOTS_ID = _data.APT_SLOTS_ID;
                    $($("table[id$=tbl_tbl_PatRequisitions] tr input[type=checkbox]")[reqrowindex]).attr("Checked", "true");
                    bindSlotAppointment(SlotId, SlotTime, APT_SLOTS_ID);
                }
            }
            else {
                if (document.getElementById('ctl00_ContentPlaceHolder1_hdndefaultconsultation').value == 'Y') {
                    if ($(rowitem).closest('tr').attr('data-key') != 0) {
                        if (document.getElementById('' + ctrlcom + '_uccorporate_ddlPaymentBy').value != '0') {
                            if (document.getElementById('tbl_tbl_PatRequisitions').rows.length == 4) {
                                SlotId = _data.REF_NO;
                                SlotTime = _data.SLOT_TIME;
                                APT_SLOTS_ID = _data.APT_SLOTS_ID;
                                $($("table[id$=tbl_tbl_PatRequisitions] tr input[type=checkbox]")[reqrowindex]).attr("Checked", "true");
                                var r = $('[id*=tbl_tbl_PatRequisitions] tbody tr td').find('[type=checkbox]');
                                getconsultdetails(_data, r);

                            }
                        }
                    }
                }
            }
        }, 1000);
        return obj[0].outerHTML;
    };
    gridControl = $("#tbl_PatRequisitions").jtable(param);
    bindSlotAppointment(SlotId, SlotTime, APT_SLOTS_ID);

}



function Delete(srvid) {

    var _data = gridControl.getDataRow(srvid);
    _bill_srv_id = _data.BILL_SRV_ID;
    $.ajax({
        type: "POST",
        url: "OPDBill.aspx/DeleteStatus",
        data: "{'srvid': '" + _bill_srv_id + "'}",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        error: function (jqXHR, textStatus, errorThrown) {
        },
        success: function (Result) {
            // OnSuccess(Result);
            if (Result.d) {
                var ln = $('[id*=tbl_tbl_PatRequisitions] tbody tr').length;
                $('#tbl_tbl_PatRequisitions tbody tr').each(function () {
                    for (var i = 0; i < ln; i++) {
                        var key = $('[id*=tbl_tbl_PatRequisitions] tbody tr').filter(':eq(' + i + ')').attr('data-key');
                        if (key == srvid) {
                            $(this).closest('tr').remove();
                            $(".stoast").toastText("", "Record Removed Successfully", 5, 2);
                            return false;
                        }
                    }
                });
            }
        }
    });


}




function checkconsultreq() {
    var grid = $('#tbl_PatRequisitions');
    var gridlength = grid.rows.length;
    if (gridlength == 1) {
        for (i = 0; i = gridlength; i++) {
            $('[id$=tbl_PatRequisitions] tr').filter(':eq(' + 0 + ')').find('input[type=checkbox][id*=checkbox]').checked;
        }
    }

}
function bindSlotAppointment(SlotId, SlotTime, APT_SLOTS_ID) {
    if (SlotId > 0) {
        if ($('[id$=UCServices_gvServices] tr').filter(':eq(' + 0 + ')').find('input[type=hidden][id*=hdnconrequistionid]').val() == "" || $('[id$=UCServices_gvServices] tr').filter(':eq(' + 1 + ')').find('input[type=hidden][id*=hdnconrequistionid]').val() == undefined) {
            $('[id$=UCServices_gvServices] tr').filter(':eq(' + 0 + ')').find('input[type=hidden][id*=hdnconrequistionid]').val(SlotId);
            $('[id$=UCServices_gvServices] tr').filter(':eq(' + 0 + ')').find('[id*=ddlSlotTiming] option:selected').text(SlotTime);
            $('[id$=UCServices_gvServices] tr').filter(':eq(' + 0 + ')').find('[id*=ddlSlotTiming] option:selected').val(SlotId);
            $('[id$=UCServices_gvServices] tr').filter(':eq(' + 0 + ')').find('[id*=hdnreqid]').val(APT_SLOTS_ID);
        }
    } else {
        $('[id$=UCServices_gvServices] tr').filter(':eq(' + 1 + ')').find('input[type=hidden][id*=hdnconrequistionid]').val(0);
        $('[id$=UCServices_gvServices] tr').filter(':eq(' + 1 + ')').find('[id*=ddlSlotTiming] option:selected').text('');
        $('[id$=UCServices_gvServices] tr').filter(':eq(' + 1 + ')').find('[id*=ddlSlotTiming] option:selected').val(0);
        $('[id$=UCServices_gvServices] tr').filter(':eq(' + 1 + ')').find('[id*=hdnreqid]').val(0);
    }
}

/*function bind(consdocid) {
var _index = 0;
var _index = $('#tbl_tbl_PatRequisitions tbody tr').length;
var OpBillSrvRowscount = 0; var _data; var Chk_length = _index;
var Srv_Same_Bill_Count = 0;
$("table[id$=tbl_tbl_PatRequisitions] tr:has(td)").each(function (e) {
for (OpBillSrvRowscount; OpBillSrvRowscount <= _index - 1; OpBillSrvRowscount++) {
var Srvkey = $('#tbl_tbl_PatRequisitions tbody').find('tr:eq(' + OpBillSrvRowscount + ')').attr("data-key");
_data = getRow_op(Srvkey);
if (consdocid == _data.DOCTOR_ID) {
$('#tbl_tbl_PatRequisitions tbody').find('tr:eq(' + OpBillSrvRowscount + ')').attr("Checked", "true");
if ($('#tbl_tbl_PatRequisitions tbody').find('tr:eq(' + OpBillSrvRowscount + ')').find('input[type=checkbox]').is(':checked')) {
SlotId = _data.REF_NO;
SlotTime = _data.SLOT_TIME;
bindSlotAppointment(SlotId, SlotTime);
}
else {
}
}
}
});
}

function getRow_op(key) {
arraykey = 'BILL_ID';
var _row = array;
if (key !== undefined) {
_row = {};
for (var i in array) {
if (array[i][arraykey] == key) {
_row = array[i];
break;
}
}
}
return _row;
}*/

var reqcount = 0;
function getconsultdetails(objs, row) {

    var _doctor_id = 0;
    var consid = objs.DOCTOR_ID;
    if (consid == undefined || consid == null || consid == '') { consid = 0; }
    var billid = 0;
    if (objs.REF_TYPE == 'CROSS CONSULTATION' || objs.REF_TYPE == 'APPOINTMENTS') {
        billid = 0;
    }
    else {
        billid = objs.REF_NO;
    }
    var APT_SLOTS_ID = objs.APT_SLOTS_ID;
    if (APT_SLOTS_ID == undefined || APT_SLOTS_ID == null || APT_SLOTS_ID == '') { APT_SLOTS_ID = 0; }
    var BILL_NEW_ID = objs.BILL_ID;
    _post_cons_ref_id = BILL_NEW_ID;
    var Free_Followup = objs.REF_TYPE;
    doc_rev_no = objs.DOCTOR_REV_NO;
    ff_doc_id = objs.FREE_FOLLOWUP_DOCTOR_ID;
    var _dep_name = objs.DEPARTMENT_NAME;
    if (ff_doc_id > 0) { }
    else { _is_free_followup = 'Y'; }
    var flag = true;
    var event_track_id = 0;
    if (objs.REF_TYPE == 'CROSS CONSULTATION') {
        event_track_id = objs.EVENT_TRACK_ID;
    }
    if (document.getElementById('' + ctrlcom + '_uccorporate_ddlPaymentBy').value == 0) {
        $(".stoast").toastText("warning", "Please Select Paymeny by", 5, 3);
        row[0].checked = false;
        document.getElementById('' + ctrlcom + '_uccorporate_ddlPaymentBy').focus();
        return false;
    }
    if (document.getElementById('' + ctrlcom + '_uccorporate_ddlPaymentBy').value == 2) {
        if (document.getElementById('' + ctrlcom + '_uccorporate_CmpLookup_txtSearchControl').value == '' || document.getElementById('' + ctrlcom + '_uccorporate_CmpLookup__hiddenID').value == 0) {
            $(".stoast").toastText("warning", "Please select company!", 5, 3);
            row[0].checked = false;
            document.getElementById('' + ctrlcom + '_uccorporate_CmpLookup_txtSearchControl').focus();
            return false;
        }
        if (row.is(':checked')) {
            var conslimit = document.getElementById('' + ctrlcom + '_uccorporate_hdncmpcons').value;
            var consover = document.getElementById('' + ctrlcom + '_uccorporate_hdncmpconsdone').value;
            if (consover == "" || consover == null || consover == undefined) { consover = "0"; }
            var count = 0;
            $('table[id*=UCServices_gvServices] tr').each(function (e) {
                var srvconcount = $(this).closest('tr').find('input[type=hidden][id*=hdnServiceID]').val();
                if (srvconcount == 2) {
                    var classsrvid = $(this).closest('tr').find('input[type=hidden][id*=hdnClass_Srv_ID]').val();
                    if (classsrvid > 0) {
                        if ($(this).closest('tr').find('[id*=chkPstCons]')[0].checked == true) { count++; }
                    } else {
                        count++;
                    }
                }
            });
            consover = parseFloat(consover) + parseFloat(count);
            if (parseFloat(consover) >= parseFloat(conslimit)) {
                $(".toast").toastText("Info", "Consultations Limit over under this Company/TPA", 5, 2);
                row[0].checked = false;
                return false;
            }
        }
    }
    if (row.is(':checked')) {
        if (objs.SOURCE_TYPE == "H") {
            var apptid = objs.CURRENCY_ID;
            if (apptid != undefined && apptid != null && apptid != '') {
                AssignApptReferalInfo(apptid);
            }
        }

        if (objs.SOURCE_TIME == "N" && $('#' + ctrlcom + '_UCServices_hdnAllowFutureDateAppointments').val().toLowerCase() == 'true') {
            /*$(".stoast").toastText("Info", "Future solt cannot be selected", 7, 2);
            row[0].checked = false;
            return false;*/
            var param = objs;
            var obj = objs;

            var msg = 'The appointment slot you have selected is for a future date. Do you want to continue.';
            ConfirmationRequiredFo(objs, param, msg, row);
            return false;

        }
        else if (objs.SOURCE_TIME == "N" && $('#' + ctrlcom + '_UCServices_hdnAllowFutureDateAppointments').val().toLowerCase() == 'false') {

            // var msg = 'The appointment slot you have selected is for a future date.';
            // rows = row
            $(".stoast").toastText("Info", "future date appointment's is not allow to do Consultations", 7, 2);
            OnCancelFutslot();
            //  $(".smessagebox").scustommessagebox(1, "Success", msg, OnCancelFutslot, '');
            return false;
        }
        $("table[id*=UCServices_gvServices] tr:has(td)").each(function () {
            var reqid = $(this).closest('tr').find('input[type=hidden][id*=hdnconrequistionid]').val();
            var srvConsid = $(this).closest('tr').find('input[type=hidden][id*=hdnDoctorID]').val();
            if (reqid == billid && srvConsid == consid) {
                flag = false;
            }
        });
        $("table[id*=UCServices_gvServices] tr:has(td)").each(function () {
            var srvConsid = $(this).closest('tr').find('input[type=hidden][id*=hdnDoctorID]').val();
            if (srvConsid == undefined || srvConsid == null || srvConsid == '') { srvConsid = 0; }
            if (consid == srvConsid && consid != 0 && srvConsid != 0) {
                $(".stoast").toastText("Info", "Doctor already exists", 7, 2);
                row[0].checked = false;
                flag = false;
                return false;
            }
        });
    }
    else {

        if (objs.SOURCE_TYPE == "H") {
            var patid = $('#ctl00_ContentPlaceHolder1_hdnpat_id').val();
            if (patid != undefined && patid != null && patid != '') {
                AssignReferalsInfo(patid);
            }
        }
        var grid = document.getElementById('' + ctrlcom + '_UCServices_gvServices');
        var length = grid.rows.length;

        $("table[id*=UCServices_gvServices] tr:has(td)").each(function () {
            var RowIndexForGrid = $(this)[0].rowIndex;
            // for (var i = 0; i < length; i++) {
            var reqid = $(this).closest('tr').find('input[type=hidden][id*=hdnconrequistionid]').val();
            var srvConsid = $(this).closest('tr').find('input[type=hidden][id*=hdnDoctorID]').val();
            if (srvConsid == consid) {
                $(this).closest('tr').remove();
                arrServiceIds = $.grep(arrServiceIds, function (value) {
                    return value != srvConsid;
                });
                CalculateGridAmt(RowIndexForGrid);
            }
            AssignSno(RowIndexForGrid + 1);
            //}
        });
    }
    document.getElementById('' + ctrlcom + '_hdnreqtype').value = objs.REF_TYPE;
    if (row.is(':checked') && flag == true) {
        document.getElementById('' + ctrlcom + '_UCServices_hdnOptions').value = '3';
        document.getElementById('' + ctrlcom + '_hdnconsreqdocid').value = consid;
        var doctorname = objs.RSRC_NAME;
        var doctorcd = objs.DOCTOR_CD;
        var deptid = objs.DEPARTMENT_ID;
        var _patient_id = document.getElementById('' + ctrlcom + '_umrPatientDetails_hdnPatientid').value;
        var _company_id = document.getElementById('' + ctrlcom + '_hdnCompnyId').value;
        var _tariff_id = 1; var deptname = '';
        _tariff_id = GlobaltariffId;
        var refid = 0;
        if (objs.REF_TYPE == 'CROSS CONSULTATION' || objs.REF_TYPE == 'APPOINTMENTS') {
            refid = 0;
        }
        else {
            refid = objs.REF_NO;
        }
        if (objs.SLOT_TIME != "" || objs.REF_TYPE == 'CROSS CONSULTATION') {
            SlotId = objs.REF_NO;
            var slot_token_no = objs.SLOT_TOKEN_NO;
            if (slot_token_no == '' || slot_token_no == undefined || slot_token_no == null) { slot_token_no = 0; }
            SlotId = SlotId + "," + slot_token_no;

            if (objs.SLOT_TIME == undefined || objs.SLOT_TIME == null || objs.SLOT_TIME == '') {
                SlotTime = "";
            }
            else {
                SlotTime = objs.SLOT_TIME;
            }
        }
        else {
            SlotId = 0 + "," + 0;
            SlotTime = "";
        }
        docreqid = objs.DOCTOR_ID;  //document.getElementById('' + ctrlcom + '_hdnconsreqdocid').value;
        var is_pkg = objs.REF_TYPE;
        if (is_pkg.trim() == 'PACKAGE' || is_pkg.trim() == 'IS_FREE_FOLLOWUP') {
            document.getElementById('' + ctrlcom + '_hdnDoctorID').value = docreqid;
            document.getElementById('' + ctrlcom + '_hdnDoctorName').value = doctorname;
            document.getElementById('' + ctrlcom + '_hdnDoctorCd').value = doctorcd;
            document.getElementById('' + ctrlcom + '_hdnDeptId').value = deptid;
            document.getElementById('' + ctrlcom + '_hdnDeptName').value = deptname;

            var hdnNoConsLimts = document.getElementById('' + ctrlcom + '_hdnNoConsLimts');
            /*   if (hdnNoConsLimts.value == "True") {
             
            GetAsync("Private/FrontOffice/OpBilling/OPConsultation1.aspx/GetNoOfConsultationLimits",
            { Doc_ID: docreqid },
            function (jdata) {
            if (jdata.d != "") {
            var _objconcount = jdata.d;
            if (_objconcount != null && _objconcount.length > 0) {
            if (_objconcount[0].Doc_status_id.toUpperCase() == "YES") {
            if (parseInt(_objconcount[0].CONSULTATION_COUNT) < parseInt(_objconcount[0].No_of_consult_days)) {
            reqcons = 'P';
            fn_AddFilterRow_pkgbillSelection('G', 'N', 'N', 'N', 'N', 'N', 1, 2, doctorname, doctorcd, 'Consultation', 0, 0, 0, '', '', '', 0, 0, 1, docreqid, 1, '', 'N', '', '', 0, '', 0, 0, 0, 0, 0, '', '', '', 0, '', '', '', '', deptid, '4', '1', '1', '0', '0', 1, BILL_NEW_ID, 0, 0);

            }
            else {
            $(".stoast").toastText("warning", "Today's No of Consultaions Are Over For This Doctor " + _objconcount[0].Doctor_name, 5, 3);
            return false;
            }
            }
            else {
            $(".stoast").toastText("warning", "Not available doctor" + _pat_con_lmts[0].From_dt + " to " + _pat_con_lmts[0].To_dt + " this time", 5, 3);
            return false;
            }
            }
            } else {
            $(".stoast").toastText("Info", "No Consultation limits are mapped for this Doctor", 7, 2);
            $("table[id$=tbl_tbl_PatRequisitions] tr input[type=checkbox]").each(function () {
            var drid = $(this).closest('tr').attr('data-key');
            if (drid == docreqid) {
            $(this)[0].checked = false;
            }
            });
            return false;
            }
            },
            function (jqXHR, textStatus, errorThrown) {
            $(".stoast").toastText("warning", errorThrown, 5, 3);
            });

               
            }
            else {*/
            //                reqcons = 'P';
            //                fn_AddFilterRow_pkgbillSelection('G', 'N', 'N', 'N', 'N', 'N', 1, 2, doctorname, doctorcd, 'Consultation', 0, 0, 0, '', '', '', 0, 0, 1, docreqid, 1, '', 'N', '', '', 0, '', 0, 0, 0, 0, 0, '', '', '', 0, '', '', '', '', deptid, '4', '1', '1', '0', '0', 1, BILL_NEW_ID, 0, 0);

            var _doctor_id = docreqid;
            var _patient_id = $('#' + ctrlcom + '_umrPatientDetails_Umrlookup__hiddenID').val();
            var _company_id = 0;
            if (document.getElementById('' + ctrlcom + '_uccorporate_ddlPaymentBy').value == '2') {
                _company_id = $('#' + ctrlcom + '_uccorporate_CmpLookup__hiddenID').val();
            }
            if (_company_id == undefined || _company_id == null || _company_id == '')
            { _company_id = 0; }
            if (_patient_id == undefined || _patient_id == null || _patient_id == '')
            { _patient_id = 0; }
            var _tariff_id = 1;
            GetAsync(
                          "Private/FrontOffice/OPDBILLNEW.aspx/Bind_Consultation_Det_Async",
                          { DOCTOR_ID: _doctor_id, PATIENT_ID: _patient_id, COMPANY_ID: _company_id, TARIFF_ID: _tariff_id },
                          function (msg) {
                              if (msg.d != null) {
                                  var Priv_dt = new Date(msg.d[0].BILL_DT).format('dd-MMM-yyyy');
                              }
                              var today_dt = new Date().format('dd-MMM-yyyy');

                              if (Priv_dt == today_dt) {
                                  if (document.getElementById('' + ctrlcom + '_hdnalwsameconsameday').value == "Yes") {
                                      param = msg;
                                      return ConfirmationRequiredForSaveWithParam_message_Cons(obj, param, "Consultation For This Doctor (" + docName + ") Was Already Done On (" + sedt + "). Do You Want To Continue..");
                                  }
                                  else {
                                      $(".stoast").toastText("warning", "Consultation For This Doctor (" + doctorname + ") Was Already Done On (" + today_dt + "). System Doesnot allow More Than One Consultation For Same Doctor On Same Day", 5, 3);
                                      var docid = _doctor_id
                                      $("table[id$=tbl_tbl_PatRequisitions] tbody tr:has(td)").each(function () {
                                          var reqid = $(this).closest('tr').attr('data-key');
                                          if (reqid > 0) {
                                              if (reqid == docid) {
                                                  $(this).closest('tr').find('input[type=checkbox]')[0].checked = false;
                                              }
                                          }
                                      });
                                      return false;
                                  }

                              }
                              else {
                                  reqcons = 'P';
                                  if (doctorcd == '') {
                                      doctorname = _dep_name;
                                  }
                                  if (msg.d != null) {
                                      var tariff_id = msg.d[0].TARIFF_ID;
                                      if (tariff_id == undefined || tariff_id == null || tariff_id == '') { tariff_id = '1'; }
                                  } else {
                                      var tariff_id = _tariff_id;
                                  }
                                  fn_AddFilterRow_pkgbillSelection('G', 'N', 'N', 'N', 'N', 'N', 1, 2, doctorname, doctorcd, 'Consultation', 0, 0, 0, '', '', '', 0, 0, 1, docreqid, tariff_id, '', 'N', '', '', 0, '', 0, 0, 0, 0, 0, '', '', '', 0, '', '', '', '', deptid, '4', '', '', '0', '0', 1, BILL_NEW_ID, 0, 0);
                                  if (msg.d != null) {
                                      $('[id$=UCServices_gvServices] tr').filter(':eq(' + 0 + ')').find('[id*=lblvisitdetails]')[0].innerHTML = 'D-H' + '/' + msg.d[0].P_D_NO_VISITS + '-' + msg.d[0].P_NO_VISITS;
                                  }
                                  $('[id$=UCServices_gvServices] tr').filter(':eq(' + 0 + ')').find('[id*=divsrvname]').addClass('btntxt srvdvisitdiv');
                                  $('[id$=UCServices_gvServices] tr').filter(':eq(' + 0 + ')').find('[id*=lblvisitdetails]').show();
                              }

                          },
                          function (jqXHR, textStatus, errorThrown) {

                          });

            //}
        } else {
            BindCOnsultatnt_Det_Jquery(docreqid, _patient_id, _company_id, _tariff_id, doctorname, doctorcd, deptid, deptname, billid, refid, event_track_id, APT_SLOTS_ID);

        }
        flag = false; reqcount = 0;
    }

}

function OnCancelFutslot(objs) {
    rows[0].checked = false;
    return false;
    //var indexUncheck = $("table[id$=tbl_tbl_PatRequisitions]  tr [type=checkbox]:checked").length;
    //$('[id$=gvServices] tr').filter(':eq(' + indexUncheck + ')').find('input[type=text][id*=checkboxid]').[0].checked = false;
}
function ConfirmationRequiredFo(obj, param, message, row) { /* param --means report path parameter , after saving report related alert */
    objs = obj;
    rows = row
    $(".smessagebox").scustommessagebox(1, "", message, OnsuccessConfirmPost, param, OnCancelFutslot);
}
function OnsuccessConfirmPost() {
    var _doctor_id = 0; var _is_free_followup = 'N';
    var consid = objs.DOCTOR_ID;
    if (consid == undefined || consid == null || consid == '') { consid = 0; }
    var APT_SLOTS_ID = objs.APT_SLOTS_ID;
    if (APT_SLOTS_ID == undefined || APT_SLOTS_ID == null || APT_SLOTS_ID == '') { APT_SLOTS_ID = 0; }

    var billid = objs.CURRENCY_ID;
    var BILL_NEW_ID = objs.BILL_ID;
    _post_cons_ref_id = BILL_NEW_ID;
    var Free_Followup = objs.REF_TYPE;
    doc_rev_no = objs.DOCTOR_REV_NO;
    ff_doc_id = objs.FREE_FOLLOWUP_DOCTOR_ID;
    var _dep_name = objs.DEPARTMENT_NAME;

    if (ff_doc_id > 0) { }
    else { _is_free_followup = 'Y'; }
    var flag = true;
    var event_track_id = 0;
    if (objs.REF_TYPE == 'CROSS CONSULTATION') {
        event_track_id = objs.EVENT_TRACK_ID;
    }

    document.getElementById('ctl00_ContentPlaceHolder1_hdnconsreqdocid').value = consid;
    var doctorname = objs.RSRC_NAME;
    var doctorcd = objs.DOCTOR_CD;
    var deptid = objs.DEPARTMENT_ID;
    var _patient_id = document.getElementById('ctl00_ContentPlaceHolder1_umrPatientDetails_hdnPatientid').value;
    var _company_id = document.getElementById('ctl00_ContentPlaceHolder1_hdnCompnyId').value;
    var _tariff_id = 1; var deptname = '';
    _tariff_id = GlobaltariffId;
    //var refid = objs.REF_NO;
    var refid = objs.CURRENCY_ID;
    if (objs.SLOT_TIME != "" || objs.REF_TYPE == 'CROSS CONSULTATION') {
        SlotId = objs.CURRENCY_ID;
        var slot_token_no = objs.SLOT_TOKEN_NO;
        if (slot_token_no == '' || slot_token_no == undefined || slot_token_no == null) { slot_token_no = 0; }
        SlotId = SlotId + "," + slot_token_no;
        if (objs.SLOT_TIME == null || objs.SLOT_TIME == undefined || objs.SLOT_TIME == '') {
            SlotTime = "";
        }
        else {
            SlotTime = objs.SLOT_TIME;
        }
    }
    else {
        SlotId = 0 + "," + 0;
        SlotTime = "";
    }
    docreqid = objs.DOCTOR_ID;
    var is_pkg = objs.REF_TYPE;
    if (is_pkg.trim() == 'PACKAGE' || is_pkg.trim() == 'IS_FREE_FOLLOWUP') {
        document.getElementById('ctl00_ContentPlaceHolder1_hdnDoctorID').value = docreqid;
        document.getElementById('ctl00_ContentPlaceHolder1_hdnDoctorName').value = doctorname;
        document.getElementById('ctl00_ContentPlaceHolder1_hdnDoctorCd').value = doctorcd;
        document.getElementById('ctl00_ContentPlaceHolder1_hdnDeptId').value = deptid;
        document.getElementById('ctl00_ContentPlaceHolder1_hdnDeptName').value = deptname;
        var hdnNoConsLimts = document.getElementById('ctl00_ContentPlaceHolder1_hdnNoConsLimts');
        var _doctor_id = docreqid;
        var _patient_id = $('#ctl00_ContentPlaceHolder1_umrPatientDetails_Umrlookup__hiddenID').val();
        var _company_id = 0;
        if (document.getElementById('ctl00_ContentPlaceHolder1_uccorporate_ddlPaymentBy').value == '2') {
            _company_id = $('#ctl00_ContentPlaceHolder1_uccorporate_CmpLookup__hiddenID').val();
        }
        if (_company_id == undefined || _company_id == null || _company_id == '')
        { _company_id = 0; }
        if (_patient_id == undefined || _patient_id == null || _patient_id == '')
        { _patient_id = 0; }
        var _tariff_id = 1;
        GetAsync(
                          "Private/FrontOffice/OPDBILLNEW.aspx/Bind_Consultation_Det_Async",
                          { DOCTOR_ID: _doctor_id, PATIENT_ID: _patient_id, COMPANY_ID: _company_id, TARIFF_ID: _tariff_id },
                          function (msg) {

                              var Priv_dt = new Date(msg.d[0].LAST_VISITED).format('dd-MMM-yyyy');
                              var today_dt = new Date().format('dd-MMM-yyyy');

                              if (Priv_dt == today_dt) {
                                  if (document.getElementById('' + ctrlcom + '_hdnalwsameconsameday').value == "Yes") {
                                      param = msg; var obj = 'suvarna';
                                      return ConfirmationRequiredForSaveWithParam_message_Cons(obj, param, "Consultation For This Doctor (" + docName + ") Was Already Done On (" + sedt + "). Do You Want To Continue..");
                                  }
                                  else {
                                      $(".stoast").toastText("Warning", "Consultation For This Doctor (" + doctorname + ") Was Already Done On (" + today_dt + "). System Doesnot allow More Than One Consultation For Same Doctor On Same Day", 5, 3);
                                      var docid = _doctor_id
                                      $("table[id$=tbl_tbl_PatRequisitions] tbody tr:has(td)").each(function () {
                                          var reqid = $(this).closest('tr').attr('data-key');
                                          if (reqid > 0) {
                                              if (reqid == docid) {
                                                  $(this).closest('tr').find('input[type=checkbox]')[0].checked = false;
                                              }
                                          }
                                      });
                                      return false;
                                  }

                              }
                              else {
                                  reqcons = 'P';
                                  if (doctorcd == '') {
                                      doctorname = _dep_name;
                                  }
                                  if (msg.d[0].NO_OF_VISITS_DOCTOR_DAY == undefined || msg.d[0].NO_OF_VISITS_DOCTOR_DAY == "undefined" || msg.d[0].NO_OF_VISITS_DOCTOR_DAY == null) { msg.d[0].NO_OF_VISITS_DOCTOR_DAY = ''; }
                                  if (msg.d[0].P_D_NO_VISITS == undefined || msg.d[0].P_D_NO_VISITS == "undefined" || msg.d[0].P_D_NO_VISITS == null) { msg.d[0].P_D_NO_VISITS = ''; }
                                  var service_unicode = '', uni_srv_type_id = 0;
                                  var tariff_id = msg.d[0].TARIFF_ID;
                                  if (tariff_id == undefined || tariff_id == null || tariff_id == '') { tariff_id = '1'; }
                                  fn_AddFilterRow_pkgbillSelection('G', 'N', 'N', 'N', 'N', 'N', 1, 2, doctorname, doctorcd, 'Consultation', 0, 0, 0, '', '', '', 0, 0, 1, docreqid, tariff_id, '', 'N', '', '', 0, '', 0, 0, 0, 0, 0, '', '', '', 0, '', '', '', '', deptid, '4', '1', '1', '0', '0', 1, BILL_NEW_ID, 0, 0, '', 1, '', '', '', '', 0, '', service_unicode, 1, uni_srv_type_id, 0, 0, 0)
                                  $('[id$=UCServices_gvServices] tr').filter(':eq(' + 0 + ')').find('[id*=lblvisitdetails]')[0].innerHTML = 'D-H' + '/' + msg.d[0].NO_OF_VISITS_DOCTOR_DAY + '-' + msg.d[0].P_D_NO_VISITS;
                                  $('[id$=UCServices_gvServices] tr').filter(':eq(' + 0 + ')').find('[id*=divsrvname]').addClass('btntxt srvdvisitdiv');
                                  $('[id$=UCServices_gvServices] tr').filter(':eq(' + 0 + ')').find('[id*=lblvisitdetails]').show();
                              }

                          },
                          function (jqXHR, textStatus, errorThrown) {
                          });
    }
    else if (is_pkg.trim() == "APPOINTMENTS") {
        refid = 0;
        if (docreqid == undefined || docreqid == null || docreqid == '') { docreqid = "0"; }


        BindCOnsultatnt_Det_Jquery(docreqid, _patient_id, _company_id, _tariff_id, doctorname, doctorcd, deptid, deptname, refid, event_track_id, APT_SLOTS_ID);
        if ($('[id*=hdnclientNameFor]').val() == "UHWI") {
            $("[id$=gvServices] tr:has(td)").each(function () {
                var _Doctor_ID = $(this).closest('tr').find('input[type=hidden][id*=hdnDoctorID]').val();
                var _ddlVisitType = $(this).closest('tr').find('select[id*=ddSType]');
                if (_Doctor_ID != undefined && _Doctor_ID != null && _Doctor_ID != '') {
                    if (_Doctor_ID == docreqid) {
                        if (objs.APPT_PATIENT_TYPE == 2) {
                            _ddlVisitType.val("11");
                            var id = $(_ddlVisitType).attr('id');
                            var _ddltype = document.getElementById(id)
                            DropDownTypeChanges(_ddltype);
                        }
                    }
                }
            });
        }
    }
    else {

        BindCOnsultatnt_Det_Jquery(docreqid, _patient_id, _company_id, _tariff_id, doctorname, doctorcd, deptid, deptname, refid, event_track_id, APT_SLOTS_ID);
    }
}
function Clear_color() {
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
}
/* DD_Type Changes Mandatory Colors */
function CompanyMandatoryColorsApply() {
    //    document.getElementById('' + ctrlcom + '_uccorporate_txtRefLetValidDt').style.border = '1px solid #f4785e';
    $('#' + ctrlcom + '_uccorporate_CmpLookup_txtSearchControl').addClass('red');
    $('#' + ctrlcom + '_uccorporate_ucRefLetterNo_txtSearchControl').addClass('red');
}
function CompanyMandatoryColorsRemove() {
    $('#' + ctrlcom + '_uccorporate_CmpLookup_txtSearchControl').removeClass('red');
    $('#' + ctrlcom + '_uccorporate_ucRefLetterNo_txtSearchControl').removeClass('red');
    $('#' + ctrlcom + '_uccorporate_txtRefLetValidDt').removeClass('red');

}


function oncorpsuccess(result) {
    var corp_pcnt = parseFloat(result[0].ORG_PERCENT);
    var emp_pcnt = parseFloat(result[0].EMP_PERCENT);
    if (parseFloat(corp_pcnt) > 0 || parseFloat(emp_pcnt) > 0) {
        DivCorporate.style.display = "block";
        $('#DivCorpColors')[0].style.display = 'block';
    }
    else {
        DivCorporate.style.display = "none";
        $('#DivCorpColors')[0].style.display = 'none';
    }
    document.getElementById('' + ctrlcom + '_UCServices_HdnPri1').value = '0';
    document.getElementById('' + ctrlcom + '_UCServices_HdnPri2').value = '0';
    document.getElementById('' + ctrlcom + '_UCServices_HdnPri3').value = '0';
    document.getElementById('' + ctrlcom + '_UCServices_HdnPri4').value = '0';
    document.getElementById('' + ctrlcom + '_UCServices_HdnPriC1').value = '';
    document.getElementById('' + ctrlcom + '_UCServices_HdnPriC2').value = '';
    document.getElementById('' + ctrlcom + '_UCServices_HdnPriC3').value = '';
    document.getElementById('' + ctrlcom + '_UCServices_HdnPriC4').value = '';
    if (result[0] != null) {
        /*$('#'+ ctrlcom + '_uccorporate_hdnrefletterreq').val(result[0].VALNOOFDAYS);*/
        var receiptType = "OPCOR";
        document.getElementById('' + ctrlcom + '_UCServices_hdnCorpPat').value = '';
        document.getElementById('' + ctrlcom + '_UCServices_hdnCorpPat').value = 'Y';
        if (document.getElementById('' + ctrlcom + '_hdnOrgPer').value != '' && document.getElementById('' + ctrlcom + '_hdnEmpPer').value != '') {
            document.getElementById('' + ctrlcom + '_txtCorpPercentage').value = document.getElementById('' + ctrlcom + '_hdnOrgPer').value;
            document.getElementById('' + ctrlcom + '_txtEmpPercentage').value = document.getElementById('' + ctrlcom + '_hdnEmpPer').value

        }
        else {
            document.getElementById('' + ctrlcom + '_txtCorpPercentage').value = typeof result[0].ORG_PERCENT == "string" ? result[0].ORG_PERCENT : '';
            document.getElementById('' + ctrlcom + '_txtEmpPercentage').value = typeof result[0].EMP_PERCENT == "string" ? result[0].EMP_PERCENT : '';
            document.getElementById('' + ctrlcom + '_hdnOrgPer').value = typeof result[0].ORG_PERCENT == "string" ? result[0].ORG_PERCENT : '';
            document.getElementById('' + ctrlcom + '_hdnEmpPer').value = typeof result[0].EMP_PERCENT == "string" ? result[0].EMP_PERCENT : '';
        }
        document.getElementById('' + ctrlcom + '_uccorporate_hbncondisamount').value = typeof result[0].CONSULTATION_DISC_PER == "string" ? result[0].CONSULTATION_DISC_PER : '';
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
        if (getParameterByName('MODE') != 'VIEW') {
            ServicesAutoContextKey();
        }
    }
    var CurrentRowIndex = 0;
    CalculateGridAmt(2);
    if (document.getElementById('' + ctrlcom + '_umrPatientDetails_hdnDocName').value == "Cons") {
        $('#DivCorpColors')[0].style.display = 'none';
    }
}
function AmountCal() {
    $("table[id*=gvServices] tr:has(td)").each(function (e) {
        Qty = $(this).closest('tr').find("input[type=text][id*=txtQty]").val();
        Rate = $(this).closest('tr').find("input[type=text][id*=txtRate]").val();
        Amount = parseFloat(Qty) * parseFloat(Rate);
        var Class_Srv_id = $(this).closest('tr').find("input[type=hidden][id*=hdnClass_Srv_ID]").val();
        var Service_Class_id = $(this).closest('tr').find("input[type=hidden][id*=hdnServiceClass]").val();
        if (parseInt(Class_Srv_id) > 0) {/* Package Includes Amount Not Consider*/
            Amount = '0';
        }
        if (!isNaN(Amount))
            GAmount = parseFloat(GAmount) + parseFloat(Amount);
        // caluculating individual concession
        IndivConcession = parseFloat($(this).closest('tr').find("input[type=text][id*=txtDiscAmt]").val());
        if (!isNaN(IndivConcession))
            TotConcession = parseFloat(TotConcession) + parseFloat(IndivConcession);
        var PatBAmt = $(this).closest('tr').find("input[type=text][id*=txtPamt]").val();
        var PatCAmt = $(this).closest('tr').find("input[type=text][id*=txtDiscAmt]").val();
        var PatCNAmt = $(this).closest('tr').find("input[type=text][id*=txtPNAmt]").val();

        if (PatBAmt == undefined || PatBAmt == null || PatBAmt == "" || isNaN(PatBAmt)) { PatBAmt = "0"; }
        if (PatCAmt == undefined || PatCAmt == null || PatCAmt == "" || isNaN(PatCAmt)) { PatCAmt = "0"; }
        if (PatCNAmt == undefined || PatCNAmt == null || PatCNAmt == "" || isNaN(PatCNAmt)) { PatCNAmt = "0"; }

        if (parseInt(Class_Srv_id) > 0) {/* Package Includes Amount Not Consider*/
            PatBAmt = '0';
            PatCAmt = '0';
            PatCNAmt = '0';
        }
        if (parseInt(PatTBAmt) > 0) {

        }
        else {
            PatTBAmt = '0';
            PatTCAmt = '0';
            PatTNAmt = '0';
        }
        PatTBAmt = parseFloat(PatTBAmt) + parseFloat(PatBAmt);
        PatTCAmt = parseFloat(PatTCAmt) + parseFloat(PatCAmt);
        PatTNAmt = parseFloat(PatTNAmt) + parseFloat(PatCNAmt);
        if ((document.getElementById('' + ctrlcom + '_UCServices_hdnSrvFormName').value == 'OP' || (document.getElementById('' + ctrlcom + '_UCServices_hdnSrvFormName').value == 'Cons'))
            && document.getElementById('' + ctrlcom + '_uccorporate_ddlPaymentBy').value == '2') {
            if (parseInt(CmpTBAmt) > 0) {
            }
            else {
                CmpTBAmt = '0';
                CmpTCAmt = '0';
                CmpTNAmt = '0';
            }
            var CmpBAmt = $(this).closest('tr').find("input[type=text][id*=txtCamt]").val();
            var CmpCAmt = $(this).closest('tr').find("input[type=text][id*=txtCDiscAmt]").val();
            var CmpCNAmt = $(this).closest('tr').find("input[type=text][id*=txtCNetAmt]").val();

            if (CmpBAmt == undefined || CmpBAmt == null || CmpBAmt == "" || isNaN(CmpBAmt)) { CmpBAmt = "0"; }
            if (CmpCAmt == undefined || CmpCAmt == null || CmpCAmt == "" || isNaN(CmpCAmt)) { CmpCAmt = "0"; }
            if (CmpCNAmt == undefined || CmpCNAmt == null || CmpCNAmt == "" || isNaN(CmpCNAmt)) { CmpCNAmt = "0"; }

            if (parseInt(Class_Srv_id) > 0) {/* Package Includes Amount Not Consider*/
                CmpBAmt = '0';
                CmpCAmt = '0';
                CmpCNAmt = '0';
            }
            CmpTBAmt = parseFloat(CmpTBAmt) + parseFloat(CmpBAmt);
            CmpTCAmt = parseFloat(CmpTCAmt) + parseFloat(CmpCAmt);
            CmpTNAmt = parseFloat(CmpTNAmt) + parseFloat(CmpCNAmt);
        }
        else if (document.getElementById('' + ctrlcom + '_UCServices_hdnSrvFormName').value == 'OPQUICK') {
            if (parseInt(CmpTBAmt) > 0) {
            }
            else {
                CmpTBAmt = '0';
                CmpTCAmt = '0';
                CmpTNAmt = '0';
            }
            var CmpBAmt = $(this).closest('tr').find("input[type=text][id*=txtCamt]").val();
            var CmpCAmt = $(this).closest('tr').find("input[type=text][id*=txtCDiscAmt]").val();
            var CmpCNAmt = $(this).closest('tr').find("input[type=text][id*=txtCNetAmt]").val();

            if (CmpBAmt == undefined || CmpBAmt == null || CmpBAmt == "" || isNaN(CmpBAmt)) { CmpBAmt = "0"; }
            if (CmpCAmt == undefined || CmpCAmt == null || CmpCAmt == "" || isNaN(CmpCAmt)) { CmpCAmt = "0"; }
            if (CmpCNAmt == undefined || CmpCNAmt == null || CmpCNAmt == "" || isNaN(CmpCNAmt)) { CmpCNAmt = "0"; }

            CmpTBAmt = parseFloat(CmpTBAmt) + parseFloat(CmpBAmt);
            CmpTCAmt = parseFloat(CmpTCAmt) + parseFloat(CmpCAmt);
            CmpTNAmt = parseFloat(CmpTNAmt) + parseFloat(CmpCNAmt);
        }
    });
}



function hideCompPopup() {
    $("#divCmpPopup").hide();
    return false;
}


function CompareExpireDate(Date1, Date2) {

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



/*function clearpopupcontrols() {

document.getElementById('' + ctrlcom + '_ucReferal_txtRefName').value = '';
document.getElementById('' + ctrlcom + '_ucReferal_txtRefMobile').value = '';
document.getElementById('' + ctrlcom + '_ucReferal_txtRefRegistNo').value = '';
document.getElementById('' + ctrlcom + '_ucReferal_Lookuparea__hiddenID').value = '';
document.getElementById('' + ctrlcom + '_ucReferal_txtaddressref').value = '';
document.getElementById('' + ctrlcom + '_ucReferal_Lookuparea_txtSearchControl').value = '';
document.getElementById('' + ctrlcom + '_ucReferal_txtcountry').value = '';
document.getElementById('' + ctrlcom + '_ucReferal_txtstate').value = '';
document.getElementById('' + ctrlcom + '_ucReferal_txtcity').value = '';
var referalsource = document.getElementById('' + ctrlcom + '_ucReferal_ddlreferral').value;
document.getElementById('' + ctrlcom + '_ucReferal_ddlRefSourceType').value = referalsource;
$('[id*=DivReferal]')[0].style.display = 'block';
return false;
} */




function OnCorporateCons() {
}

function OnCompany() {
}

function Onccbankselection() {
}

function RemoveCutCopyPaste() {
}








function CheckRefValidDt(input) {
    var duration = document.getElementById('' + ctrlcom + '_hdnrefvaliddays').value;
    var validdt = new Date(new Date(input).getTime() + duration * 24 * 60 * 60 * 1000).format('dd-MMM-yyyy');
    //$('#' + ctrlcom + '_EmployerInfo1_txtlettervalidity').val(validdt);
}



/*Validating Values entered for insertion in Consultation.*/
var Objct;
function ValidateData(obj) {
    Objct = obj;
    if (document.getElementById('' + ctrlcom + '_umrPatientDetails_Umrlookup_txtSearchControl').value == '' || document.getElementById('' + ctrlcom + '_umrPatientDetails_Umrlookup__hiddenID').value == '') {
        $(".stoast").toastText("warning", "Please select UMR NO!.", 5, 3);
        document.getElementById('' + ctrlcom + '_umrPatientDetails_Umrlookup_txtSearchControl').value = '';
        document.getElementById('' + ctrlcom + '_umrPatientDetails_Umrlookup__hiddenText').value = '';
        document.getElementById('' + ctrlcom + '_umrPatientDetails_Umrlookup_txtSearchControl').focus();
        return false;
    }

    if (document.getElementById('' + ctrlcom + '_uccorporate_ddlPaymentBy').value == 2 && document.getElementById('' + ctrlcom + '_uccorporate_chkRefLetReq').check) {
        if (document.getElementById('' + ctrlcom + '_txtRefLetterNo').value == '') {
            document.getElementById('' + ctrlcom + '_txtRefLetterNo').focus();
            return false;
        }
        if (document.getElementById('' + ctrlcom + '_uccorporate_txtRefLetIssuedby').value == '') {
            document.getElementById('' + ctrlcom + '_uccorporate_txtRefLetIssuedby').focus();
            return false;
        }
        if (document.getElementById('' + ctrlcom + '_uccorporate_txtRefLetIssueDt').value == '') {
            document.getElementById('' + ctrlcom + '_uccorporate_txtRefLetIssueDt').focus();
            return false;
        }
        if (document.getElementById('' + ctrlcom + '_uccorporate_txtRefLetValidDt').value == '') {
            document.getElementById('' + ctrlcom + '_uccorporate_txtRefLetValidDt').focus();
            return false;
        }
    }

    if (document.getElementById('' + ctrlcom + '_hdnRefReq').value == 'Yes') {
        if (document.getElementById('' + ctrlcom + '_ucReferal_ddlreferral').value == '--select--') {
            document.getElementById('' + ctrlcom + '_ucReferal_ddlreferral').focus();
            return false;
        }
        if (document.getElementById('' + ctrlcom + '_ucReferal_ddlreferral').value != '1') {
            if (document.getElementById('' + ctrlcom + '_ucReferal_ucreferalname_txtSearchControl').value == '') {
                document.getElementById('' + ctrlcom + '_ucReferal_ucreferalname_txtSearchControl').focus();
                return false;
            }
        }
    }
    var totalCon
}
function IsEmptyReplaceWithZero(event) {
    if ($('#' + event.id + '').val() == '') {
        $('#' + event.id + '').val('0');
    }
}
function SaveConsultation() {
    var _xmlStr = "";
    var Pat_ID = document.getElementById('' + ctrlcom + '_umrPatientDetails_hdnPatientid').value;
    var UmrNO = document.getElementById('' + ctrlcom + '_umrPatientDetails_Umrlookup_txtSearchControl').value;
    var regid = document.getElementById('' + ctrlcom + '_umrPatientDetails_hdnRegID').value;
    var pattype = document.getElementById('' + ctrlcom + '_uccorporate_ddlPaymentBy').value;
    var Consultant = '';
    var Cmp_Id = '';
    var _xmlreferal = "";
    if (myMultiDatar1 != '') {
        if (myMultiDatar1[0]["Source"] > 0) {
            _xmlreferal += "<PAT_REFRL_DTLS";
            _xmlreferal += " PAT_RFRL_DTL_ID=$" + "0" + "$";
            _xmlreferal += " PAT_RFRL_DTL_REV_NO=$" + "" + "$";
            _xmlreferal += " UMR_NO=$" + UmrNO + "$";
            _xmlreferal += " ADMN_NO=$" + '' + "$";
            _xmlreferal += " REFERENCE_ID=$" + myMultiDatar1[0]["id"] + "$";
            _xmlreferal += " REFERENCE_TYPE_ID=$" + myMultiDatar1[0]["Source"] + "$";
            _xmlreferal += " REFERAL_CLASS=$" + myMultiDatar1[0]["ReferalClass"] + "$";
            _xmlreferal += " REFERAL_SOURCE_ID=$" + myMultiDatar1[0]["Source"] + "$";
            _xmlreferal += " REFERL_ID=$" + myMultiDatar1[0]["id"] + "$";
            _xmlreferal += " REFERL_NAME=$" + myMultiDatar1[0]["Name"] + "$";
            _xmlreferal += " RECORD_STATUS=$" + "A" + "$";
            _xmlreferal += "/>";
        }
    }
    if (myMultiDatar2 != '') {
        if (myMultiDatar2[0]["Source"] > 0) {
            _xmlreferal += "<PAT_REFRL_DTLS";
            _xmlreferal += " PAT_RFRL_DTL_ID=$" + "0" + "$";
            _xmlreferal += " PAT_RFRL_DTL_REV_NO=$" + "" + "$";
            _xmlreferal += " UMR_NO=$" + UmrNO + "$";
            _xmlreferal += " ADMN_NO=$" + '' + "$";
            _xmlreferal += " REFERENCE_ID=$" + myMultiDatar2[0]["id"] + "$";
            _xmlreferal += " REFERENCE_TYPE_ID=$" + myMultiDatar2[0]["Source"] + "$";
            _xmlreferal += " REFERAL_CLASS=$" + myMultiDatar2[0]["ReferalClass"] + "$";
            _xmlreferal += " REFERAL_SOURCE_ID=$" + myMultiDatar2[0]["Source"] + "$";
            _xmlreferal += " REFERL_ID=$" + myMultiDatar2[0]["id"] + "$";
            _xmlreferal += " REFERL_NAME=$" + myMultiDatar2[0]["Name"] + "$";
            _xmlreferal += " RECORD_STATUS=$" + "A" + "$";
            _xmlreferal += "/>";
        }
    }
    if (myMultiDatar3 != '') {
        if (myMultiDatar3[0]["Source"] > 0) {
            _xmlreferal += "<PAT_REFRL_DTLS";
            _xmlreferal += " PAT_RFRL_DTL_ID=$" + "0" + "$";
            _xmlreferal += " PAT_RFRL_DTL_REV_NO=$" + "" + "$";
            _xmlreferal += " UMR_NO=$" + UmrNO + "$";
            _xmlreferal += " ADMN_NO=$" + '' + "$";
            _xmlreferal += " REFERENCE_ID=$" + myMultiDatar3[0]["id"] + "$";
            _xmlreferal += " REFERENCE_TYPE_ID=$" + myMultiDatar3[0]["Source"] + "$";
            _xmlreferal += " REFERAL_CLASS=$" + myMultiDatar3[0]["ReferalClass"] + "$";
            _xmlreferal += " REFERAL_SOURCE_ID=$" + myMultiDatar3[0]["Source"] + "$";
            _xmlreferal += " REFERL_ID=$" + myMultiDatar3[0]["id"] + "$";
            _xmlreferal += " REFERL_NAME=$" + myMultiDatar3[0]["Name"] + "$";
            _xmlreferal += " RECORD_STATUS=$" + "A" + "$";
            _xmlreferal += "/>";
        }
    }
    if (myMultiDatar4 != '') {
        if (myMultiDatar4[0]["Source"] > 0) {
            _xmlreferal += "<PAT_REFRL_DTLS";
            _xmlreferal += " PAT_RFRL_DTL_ID=$" + "0" + "$";
            _xmlreferal += " PAT_RFRL_DTL_REV_NO=$" + "" + "$";
            _xmlreferal += " UMR_NO=$" + UmrNO + "$";
            _xmlreferal += " ADMN_NO=$" + '' + "$";
            _xmlreferal += " REFERENCE_ID=$" + myMultiDatar4[0]["id"] + "$";
            _xmlreferal += " REFERENCE_TYPE_ID=$" + myMultiDatar4[0]["Source"] + "$";
            _xmlreferal += " REFERAL_CLASS=$" + myMultiDatar4[0]["ReferalClass"] + "$";
            _xmlreferal += " REFERAL_SOURCE_ID=$" + myMultiDatar4[0]["Source"] + "$";
            _xmlreferal += " REFERL_ID=$" + myMultiDatar4[0]["id"] + "$";
            _xmlreferal += " REFERL_NAME=$" + myMultiDatar4[0]["Name"] + "$";
            _xmlreferal += " RECORD_STATUS=$" + "A" + "$";
            _xmlreferal += "/>";
        }
    }


    var CONCESSION = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatgross').value;
    var COMPANY_CONCESSION_AMOUNT = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpartygrossamt').value;
    var COMPANY_AMOUNT = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtparygross').value;
    var BILL_AMOUNT = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtgrosstotal').value;
    var NET_AMOUNT = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtTotalNet').value;
    var PAID_AMOUNT = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtTotalReciptAmt').value;
    var DUE_AMOUNT = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtTotalDue').value;
    var TOTAL_DISCOUNT = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtgrossamttotal').value;
    var CMP_OUTSTANDING_DUE = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtTotalDue').value;
    var CMP_NET_AMT = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtTotalNet').value;
    var CMP_PAID_AMT = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtTotalReciptAmt').value;

    var TRANSACTION_AMOUNT = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtTotalReciptAmt').value;

    var TransactionNo = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtReceoptNoAdvanced').value;
    var TransactionDt = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtReceiptDtAdvanced').value;
    var Remarks = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtRemarks').value;

    var conpaidamt = 0;
    var CashAmt = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtcashAmt').value;
    var CardAmt = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtCardAmt').value;
    CashAmt = CashAmt == '' ? 0 : CashAmt;
    var TotalAmt = parseFloat(CashAmt) + parseFloat(CardAmt);
    var CardNO = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtcardNoCmp').value;

    var CradTypeId = document.getElementById('' + ctrlcom + '_ReceiptControl2_ddcardType').value;
    var BankName = $('[id*=ddbankName] option:selected').text();
    var CardExperyDt = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtcardExpiredt').value;
    var paymentmodeid = document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlcrdtype').value;
    if (paymentmodeid == '' || paymentmodeid == '0' || paymentmodeid == null || paymentmodeid == undefined) { paymentmodeid = "4"; }
    var Emp_Id = '0';
    var _Xml_recpay_String = ""; var _Xml_Recpt_String = "";
    var _xml_recpayref_string = "";
    _Xml_recpay_String += "<root><FO_RECPAY ";
    _Xml_recpay_String += " UMR_NO=$" + UmrNO + "$"; ;
    _Xml_recpay_String += " EMPLOYEE_ID=$" + Emp_Id + "$";
    _Xml_recpay_String += " TRANSACTION_ID=$" + "0" + "$";
    _Xml_recpay_String += " TRANSACTION_NO=$" + TransactionNo + "$";
    _Xml_recpay_String += " TRANSACTION_DT=$" + TransactionDt + "$";
    _Xml_recpay_String += " TRANSACTION_TYPE=$" + "R" + "$";
    _Xml_recpay_String += " APPROVE_BY=$" + 0 + "$";
    _Xml_recpay_String += " APPROVE_DT=$" + '' + "$";
    _Xml_recpay_String += " AMOUNT=$" + PAID_AMOUNT + "$";
    _Xml_recpay_String += " REMARKS=$" + Remarks + "$";
    _Xml_recpay_String += "/>";
    $("table[id*=gvServices] tr:has(td)").each(function (e) {

        var id = $(this).closest('tr').find("input[type=hidden][id*=hdnServiceID]").val();
        if (id != '') {
            var Qty = $(this).closest('tr').find("input[type=text][id*=txtQty]").val();
            var Rate = $(this).closest('tr').find("input[type=text][id*=txtRate]").val();
            var ConPer = $(this).closest('tr').find("input[type=text][id*=txtDiscP]").val();
            var ConAmt = $(this).closest('tr').find("input[type=text][id*=txtDiscAmt]").val();
            var bamt = parseInt(Qty) * parseFloat(Rate);
            var namt = parseFloat(bamt) - parseFloat(ConAmt);
            var doctorid = $(this).closest('tr').find("input[type=hidden][id*=hdnDoctorId]").val();
            _xmlStr += "<root>";
            _xmlStr += "<FO_BILL";
            _xmlStr += " BILL_ID=$" + "0" + "$";
            _xmlStr += " BILL_DT=$" + new Date().format('dd-MMM-yyyy') + "$";
            _xmlStr += " UMR_NO=$" + UmrNO + "$";
            _xmlStr += " REG_ID=$" + regid + "$";
            _xmlStr += " BILL_TYPE_ID=$" + 2 + "$";
            _xmlStr += " REFERENCE_TYPE_ID=$" + 2 + "$";
            _xmlStr += " PATIENT_TYPE_ID=$" + pattype + "$";
            _xmlStr += " REFERAL_SOURCE_ID=$" + myMultiDatar1[0]["Source"] + "$";
            _xmlStr += " REFERAL_TYPE_ID=$" + myMultiDatar1[0]["id"] + "$";
            _xmlStr += " REFERAL_DOCTOR_ID=$" + myMultiDatar1[0]["id"] + "$";
            _xmlStr += " REFERAL_REF_ID=$" + 0 + "$";
            _xmlStr += " REFERAL_NAME=$" + myMultiDatar1[0]["Name"] + "$";
            _xmlStr += " DOCTOR_ID=$" + doctorid + "$";
            _xmlStr += " BILL_AMOUNT=$" + bamt + "$";
            _xmlStr += " CONCESSION=$" + ConPer + "$";
            _xmlStr += " CONCESSION_AMOUNT=$" + ConAmt + "$";
            _xmlStr += " NET_AMOUNT=$" + namt + "$";

            _xmlStr += " PAID_AMOUNT=$" + PAID_AMOUNT + "$";
            _xmlStr += " DUE_AMOUNT=$" + DUE_AMOUNT + "$";
            _xmlStr += " OUTSTANDING_DUE=$" + DUE_AMOUNT + "$";
            _xmlStr += " TOTAL_DISCOUNT=$" + TOTAL_DISCOUNT + "$";
            _xmlStr += " TRANSACTION_TYPE =$R$";
            _xmlStr += " CONCESSION_MODE_ID=$" + 1 + "$";
            _xmlStr += " BILL_CONCESSION_MODE_ID=$" + 1 + "$";
            _xmlStr += " EMPLOYEE_ID=$" + 0 + "$";
            _xmlStr += " CREDIT_TYPE_ID=$" + 0 + "$";
            _xmlStr += " CONCESSION_ON_ID=$" + 0 + "$";
            _xmlStr += " CONCESSION_TYPE_ID=$" + 0 + "$";
            _xmlStr += " CONCESSION_TO_ID=$" + 0 + "$";
            _xmlStr += " CONCESSION_AUTH_ID=$" + 0 + "$";
            _xmlStr += " CONCESSION_AUTH_DT=$" + '' + "$";
            _xmlStr += " DUE_AUTH_ID=$" + 0 + "$";
            _xmlStr += " COMPANY_DUE=$" + 0 + "$";
            _xmlStr += " COMPANY_DUE_AUTH_ID=$" + 0 + "$";
            _xmlStr += " COMPANY_CONCESSION_AMOUNT=$" + 0 + "$";
            _xmlStr += " COMPANY_AMOUNT=$" + 0 + "$";
            _xmlStr += " CMP_CNCSN_AMT=$" + 0 + "$";
            _xmlStr += " CMP_CNCSN_PCT=$" + 0 + "$";
            _xmlStr += " CMP_DUE_AMT=$" + 0 + "$";
            _xmlStr += " CMP_GROSS_AMT=$" + 0 + "$";
            _xmlStr += " CMP_NET_AMT=$" + 0 + "$";
            _xmlStr += " CMP_PAID_AMT=$" + 0 + "$";
            _xmlStr += " CMP_TAX_AMT=$" + 0 + "$";
            _xmlStr += " CMP_TAX_PCT=$" + 0 + "$";
            _xmlStr += " CR_BILL_AMT=$" + 0 + "$";
            _xmlStr += " CR_CMP_AMT=$" + 0 + "$";
            _xmlStr += " CR_CMP_PCT=$" + 0 + "$";
            _xmlStr += " CR_PAT_AMT=$" + 0 + "$";
            _xmlStr += " CR_PAT_PCT=$" + 0 + "$";
            _xmlStr += " PAT_CNCSN_AMT=$" + 0 + "$";
            _xmlStr += " PAT_CNCSN_PCT=$" + 0 + "$";
            _xmlStr += " PAT_DUE_AMT=$" + 0 + "$";
            _xmlStr += " PAT_GROSS_AMT=$" + 0 + "$";
            _xmlStr += " PAT_NET_AMT=$" + 0 + "$";
            _xmlStr += " PAT_PAID_AMT=$" + 0 + "$";
            _xmlStr += " PAT_TAX_AMT=$" + 0 + "$";
            _xmlStr += " PAT_TAX_PCT=$" + 0 + "$";
            _xmlStr += " REMARKS=$" + 0 + "$";
            _xmlStr += " APPROVE_BY=$" + 0 + "$";
            _xmlStr += " APPROVE_DT=$" + '' + "$";
            _xmlStr += " CMPNY_REFERAL_LETTER_ID=$" + 0 + "$";
            _xmlStr += " PATIENT_CLASS_ID=$" + 2 + "$";
            _xmlStr += " RECORD_STATUS=$" + 'A' + "$";
            _xmlStr += " CMP_ID=$" + Cmp_Id + "$";
            _xmlStr += " BILL_TYPE=$" + "CONS" + "$";
            _xmlStr += "/>";
            var hdnDocPrice = 0;
            var hdnOrgPrice = 0; var hdnserpriceid = 0; var hdnIsEmerPrice = 0;
            _xmlStr += "<FO_BILL_SRV";
            _xmlStr += " UMR_NO=$" + UmrNO + "$";
            _xmlStr += " SERVICE_TYPE_ID=$" + 1 + "$";
            _xmlStr += " CONSULTATION_TYPE_ID=$" + "1" + "$";
            _xmlStr += " SERVICE_ID=$" + "2" + "$";
            _xmlStr += " QUANTITY=$" + Qty + "$";
            _xmlStr += " RATE=$" + Rate + "$";
            _xmlStr += " AMOUNT=$" + bamt + "$";
            _xmlStr += " CONCESSION=$" + ConPer + "$";
            _xmlStr += " CONCESSION_AMOUNT=$" + ConAmt + "$";
            _xmlStr += " NET_AMOUNT=$" + namt + "$";
            _xmlStr += " DOCTOR_ID=$" + doctorid + "$";
            _xmlStr += " TREATED_BY_ID=$" + doctorid + "$";
            _xmlStr += " CONCESSION_MODE_ID=$" + 1 + "$";

            _xmlStr += " DOCTOR_PRICE=$" + hdnDocPrice + "$";
            _xmlStr += " ORG_PRICE=$" + hdnOrgPrice + "$";
            _xmlStr += " SERVICE_PRICE_ID=$" + hdnserpriceid + "$";
            _xmlStr += " IS_EMERGNCY_PRICE=$" + hdnIsEmerPrice + "$";
            _xmlStr += " TO_LOC_ID=$" + "0" + "$";
            _xmlStr += "/>";


            if (parseFloat(PAID_AMOUNT) <= parseFloat(namt)) {
                conpaidamt = parseFloat(PAID_AMOUNT);
            }
            else if (parseFloat(PAID_AMOUNT) > parseFloat(namt)) {
                conpaidamt = parseFloat(namt);
            }
            PAID_AMOUNT = parseFloat(PAID_AMOUNT) - parseFloat(namt)

            _xmlStr += _xmlreferal;

            _xml_recpayref_string += "<FO_RECPAY_REF ";
            _xml_recpayref_string += " RECPAY_REF_ID=$" + "0" + "$";
            _xml_recpayref_string += " DOCTOR_ID=$" + doctorid + "$";
            _xml_recpayref_string += " APPROVE_BY=$" + 0 + "$";
            _xml_recpayref_string += " APPROVE_DT=$" + '' + "$";
            _xml_recpayref_string += " AMOUNT=$" + namt + "$";
            _xml_recpayref_string += " REFERENCE_TYPE_ID=$" + 2 + "$";
            _xml_recpayref_string += "/>";
            _xmlStr += "</root>";
        }
    });

    var cnt = 0; var baltendamt = 0; var cashpay = 0
    if (TotalAmt > 0) {
        /*Quick Mode*/
        if (parseFloat(CashAmt) > 0) {
            var cashtendamt = 0;

            if (cnt == 0) {
                if (parseFloat(CashAmt) >= parseFloat(NET_AMOUNT)) {
                    cashpay = parseFloat(NET_AMOUNT);
                    CashAmt = parseFloat(CashAmt) - parseFloat(NET_AMOUNT);
                }
                else {
                    cashpay = parseFloat(CashAmt);
                    CashAmt = 0;
                }
                cnt++;

            }

            _Xml_Recpt_String += "<FO_RECPAY_DET ";
            _Xml_Recpt_String += " TRANSACTION_ID=$" + 0 + "$";
            _Xml_Recpt_String += " TRANSACTION_DET_ID=$" + 0 + "$";
            _Xml_Recpt_String += " TRANSACTION_NO=$" + 0 + "$";
            _Xml_Recpt_String += " TRANSACTION_DT=$" + 0 + "$";
            _Xml_Recpt_String += " TRANSACTION_TYPE=$" + '' + "$";
            _Xml_Recpt_String += " AMOUNT=$" + cashpay + "$";
            _Xml_Recpt_String += " REMARKS=$" + Remarks + "$";
            _Xml_Recpt_String += " EMPLOYEE_ID=$" + 0 + "$";
            _Xml_Recpt_String += " REFERENCE_ID=$" + 0 + "$";
            _Xml_Recpt_String += " PAYMENT_MODE_ID=$" + 1 + "$";
            _Xml_Recpt_String += " UMR_NO=$" + UmrNO + "$";
            _Xml_Recpt_String += " BILL_AMOUNT=$" + TRANSACTION_AMOUNT + "$";
            _Xml_Recpt_String += "/>";
        }
        if (parseFloat(cashpay) < parseFloat(NET_AMOUNT)) {
            if (CardAmt > 0) {
                var cardtendamt = 0;
                if (cnt == 0) {
                    if (parseFloat(CardAmt) >= parseFloat(NET_AMOUNT)) {
                        cardpay = parseFloat(NET_AMOUNT);
                    }
                    else {
                        cardpay = parseFloat(CardAmt);
                    }
                }
                else {
                    cardpay = CardAmt;
                }
                _Xml_Recpt_String += "<FO_RECPAY_DET ";
                _Xml_Recpt_String += " TRANSACTION_ID=$" + 0 + "$";
                _Xml_Recpt_String += " TRANSACTION_DET_ID=$" + 0 + "$";
                _Xml_Recpt_String += " UMR_NO=$" + UmrNO + "$";
                _Xml_Recpt_String += " AMOUNT=$" + cardpay + "$";
                _Xml_Recpt_String += " REMARKS=$" + Remarks + "$";
                _Xml_Recpt_String += " REFERENCE_ID=$" + 0 + "$";
                _Xml_Recpt_String += " PAYMENT_MODE_ID=$" + paymentmodeid + "$";
                _Xml_Recpt_String += " CC_CARD_NO=$" + CardNO + "$";
                _Xml_Recpt_String += " CC_APPROVAL_NO=$" + '0' + "$";
                _Xml_Recpt_String += " CC_CARD_HOLDER_NAME=$" + '' + "$";
                _Xml_Recpt_String += " CC_EDC_MACHINE=$" + '' + "$";
                _Xml_Recpt_String += " CC_CARD_TYPE_ID=$" + CradTypeId + "$";
                _Xml_Recpt_String += " CC_ISSUE_BANK_NAME=$" + BankName + "$";
                _Xml_Recpt_String += " CC_VALID_TO_DT=$" + CardExperyDt + "$";
                _Xml_Recpt_String += " CC_CARD_HOLDER_ADDRESS=$" + 0 + "$";
                _Xml_Recpt_String += " BILL_AMOUNT=$" + TRANSACTION_AMOUNT + "$";
                _Xml_Recpt_String += "/>";
            }
        }
    }
    else {
        /*Advanced Mode*/
        var countrep = 0; var calAmt = 0; var balamt = 0;
        $("table[id$=gvReceiptDetails] tr:has(td)").each(function (e) {

            var paymentmodeid = $(this).closest('tr').find("input[type=hidden][id*=hdnrecmodeId]").val();
            var lblAmount = $(this).closest('tr').find("[id*=lblAmount]").text();
            var lblcurrname = $(this).closest('tr').find("[id*=lblcurrname]").text();
            var lblexchrate = $(this).closest('tr').find("[id*=lblexchrate]").text();
            var lblconvertedamt = $(this).closest('tr').find("[id*=lblconvertedamt]").text();
            var lblbankname = $(this).closest('tr').find("[id*=lblbankname]").text();
            var lblcardno = $(this).closest('tr').find("[id*=lblcardno]").text();
            var lblauthcode = $(this).closest('tr').find("[id*=lblauthcode]").text();
            var lblcardexpdt = $(this).closest('tr').find("[id*=lblcardexpdt]").text();
            var lbltendcash = $(this).closest('tr').find("[id*=lbltendcash]").text();
            var lblchange = $(this).closest('tr').find("[id*=lblchange]").text();
            var lblcardtype = $(this).closest('tr').find("[id*=lblcardtype]").text();
            var hdncardtypeId = $(this).closest('tr').find("input[type=hidden][id*=hdncardtypeId]").val();
            var hdncurrId = $(this).closest('tr').find("input[type=hidden][id*=hdncurrId]").val();
            var hdnbankid = $(this).closest('tr').find("input[type=hidden][id*=hdnbankid]").val();

            if (lblAmount == undefined || lblAmount == null || lblAmount == '' || isNaN(lblAmount)) { lblAmount = "0"; }
            if (lblcurrname == undefined || lblcurrname == null || lblcurrname == '' || isNaN(lblcurrname)) { lblcurrname = "0"; }
            if (lblexchrate == undefined || lblexchrate == null || lblexchrate == '' || isNaN(lblexchrate)) { lblexchrate = "0"; }
            if (paymentmodeid == undefined || paymentmodeid == null || paymentmodeid == '' || isNaN(paymentmodeid)) { paymentmodeid = "0"; }
            if (lblconvertedamt == undefined || lblconvertedamt == null || lblconvertedamt == '' || isNaN(lblconvertedamt)) { lblconvertedamt = "0"; }
            if (lblbankname == undefined || lblbankname == null || lblbankname == '' || isNaN(lblbankname)) { lblbankname = "0"; }
            if (lblcardno == undefined || lblcardno == null || lblcardno == '' || isNaN(lblcardno)) { lblcardno = "0"; }
            if (lblauthcode == undefined || lblauthcode == null || lblauthcode == '' || isNaN(lblauthcode)) { lblauthcode = "0"; }
            if (lblcardexpdt == undefined || lblcardexpdt == null || lblcardexpdt == '' || isNaN(lblcardexpdt)) { lblcardexpdt = "0"; }
            if (lbltendcash == undefined || lbltendcash == null || lbltendcash == '' || isNaN(lbltendcash)) { lbltendcash = "0"; }
            if (lblchange == undefined || lblchange == null || lblchange == '' || isNaN(lblchange)) { lblchange = "0"; }
            if (lblcardtype == undefined || lblcardtype == null || lblcardtype == '' || isNaN(lblcardtype)) { lblcardtype = "0"; }
            if (hdncardtypeId == undefined || hdncardtypeId == null || hdncardtypeId == '' || isNaN(hdncardtypeId)) { hdncardtypeId = "0"; }
            if (hdncurrId == undefined || hdncurrId == null || hdncurrId == '' || isNaN(hdncurrId)) { hdncurrId = "0"; }

            if (paymentmodeid == "1") {
                countrep++;
                if (parseFloat(regfee) >= parseFloat(lblAmount)) {
                    calAmt = lblAmount; balamt = parseFloat(regfee) - parseFloat(lblAmount);
                }
                else if (parseFloat(regfee) < parseFloat(lblAmount)) {
                    calAmt = regfee; balamt = "0";
                }
                _Xml_Recpt_String += "<FO_RECPAY_DET ";
                _Xml_Recpt_String += " TRANSACTION_DET_ID=$" + "0" + "$";
                _Xml_Recpt_String += " PAYMENT_MODE_ID=$" + paymentmodeid + "$";
                _Xml_Recpt_String += " AMOUNT=$" + calAmt + "$";
                _Xml_Recpt_String += " REMARKS=$" + Remarks + "$";
                _Xml_Recpt_String += " SESSION_ID=$" + document.getElementById('' + ctrlcom + '_HDNSESSIONID').value + "$";
                _Xml_Recpt_String += " BILL_AMOUNT=$" + TRANSACTION_AMOUNT + "$";
                _Xml_Recpt_String += " />";
            }
            /*Cheque*/
            if (paymentmodeid == "2") {
                countrep++;
                if (parseFloat(balamt) > 0) {
                    if (parseFloat(balamt) >= parseFloat(lblAmount)) {
                        calAmt = lblAmount;
                        balamt = parseFloat(regfee) - parseFloat(lblAmount);
                    }
                    else if (parseFloat(balamt) < parseFloat(lblAmount)) {
                        calAmt = balamt; balamt = "0";
                    }
                }

                _Xml_Recpt_String += "<FO_RECPAY_DET ";
                _Xml_Recpt_String += " TRANSACTION_DET_ID=$" + "0" + "$";
                _Xml_Recpt_String += " PAYMENT_MODE_ID=$" + paymentmodeid + "$";
                _Xml_Recpt_String += " AMOUNT=$" + calAmt + "$";
                _Xml_Recpt_String += " CQ_CHEQUE_NO=$" + lblcardno + "$";
                _Xml_Recpt_String += " CQ_ISSUER_NAME=$" + '0' + "$";
                _Xml_Recpt_String += " CQ_BANK_ID=$" + '' + "$";
                _Xml_Recpt_String += " CQ_BANK_REV_NO=$" + '' + "$";
                _Xml_Recpt_String += " CQ_BRANCH_ID=$" + CradTypeId + "$";
                _Xml_Recpt_String += " CQ_BRANCH_REV_NO=$" + CradTypeId + "$";
                _Xml_Recpt_String += " CQ_VALID_TO_DT=$" + CardExperyDt + "$";
                _Xml_Recpt_String += " REMARKS=$" + Remarks + "$";
                _Xml_Recpt_String += " BILL_AMOUNT=$" + TRANSACTION_AMOUNT + "$";
                _Xml_Recpt_String += " SESSION_ID=$" + document.getElementById('' + ctrlcom + '_HDNSESSIONID').value + "$";
                _Xml_Recpt_String += "  />"
            }
            /*DD*/
            if (paymentmodeid == "3") {
                countrep++;
                if (parseFloat(balamt) > 0) {
                    if (parseFloat(balamt) >= parseFloat(lblAmount)) {
                        calAmt = lblAmount;
                        balamt = parseFloat(regfee) - parseFloat(lblAmount);
                    }
                    else if (parseFloat(balamt) < parseFloat(lblAmount)) {
                        calAmt = balamt; balamt = "0";
                    }
                }

                _Xml_Recpt_String += "<FO_RECPAY_DET ";
                _Xml_Recpt_String += " TRANSACTION_DET_ID=$" + 0 + "$";
                _Xml_Recpt_String += " PAYMENT_MODE_ID=$" + paymentmodeid + "$";
                _Xml_Recpt_String += " AMOUNT=$" + calAmt + "$";
                _Xml_Recpt_String += " DD_NO=$" + lblcardno + "$";
                _Xml_Recpt_String += " DD_ISSUE_BANK_ID=$" + hdnbankid + "$";
                _Xml_Recpt_String += " DD_ISSUE_BANK_REV_NO=$" + lblAmount + "$";
                _Xml_Recpt_String += " DD_ISSUE_BRANCH_ID=$" + 0 + "$";
                _Xml_Recpt_String += " DD_ISSUE_BRANCH_REV_NO=$" + 1 + "$";
                _Xml_Recpt_String += " DD_VALID_TO_DT=$" + lblcardexpdt + "$";
                _Xml_Recpt_String += " DD_SERVICE_BANK_ID=$" + 0 + "$";
                _Xml_Recpt_String += " DD_SERVICE_BRANCH_ID=$" + 0 + "$";
                _Xml_Recpt_String += " DD_SERVICE_BANK_REV_NO=$" + 1 + "$";
                _Xml_Recpt_String += " DD_SERVICE_BRANCH_REV_NO=$" + 1 + "$";
                _Xml_Recpt_String += " REMARKS=$" + Remarks + "$";
                _Xml_Recpt_String += " SESSION_ID=$" + document.getElementById('' + ctrlcom + '_HDNSESSIONID').value + "$";
                _Xml_Recpt_String += " BILL_AMOUNT=$" + TRANSACTION_AMOUNT + "$";
                _Xml_Recpt_String += "  />"
            }
            /*Credit Card*/
            if (paymentmodeid == "4") {
                countrep++;
                if (parseFloat(balamt) > 0) {
                    if (parseFloat(balamt) >= parseFloat(lblAmount)) {
                        calAmt = lblAmount;
                        balamt = parseFloat(regfee) - parseFloat(lblAmount);
                    }
                    else if (parseFloat(balamt) < parseFloat(lblAmount)) {
                        calAmt = balamt; balamt = "0";
                    }
                }
                _Xml_Recpt_String += "<FO_RECPAY_DET ";
                _Xml_Recpt_String += " TRANSACTION_DET_ID=$" + 0 + "$";
                _Xml_Recpt_String += " PAYMENT_MODE_ID=$" + paymentmodeid + "$";
                _Xml_Recpt_String += " AMOUNT=$" + calAmt + "$";
                _Xml_Recpt_String += " CC_CARD_NO=$" + lblcardno + "$";
                _Xml_Recpt_String += " CC_APPROVAL_NO=$" + '0' + "$";
                _Xml_Recpt_String += " CC_CARD_HOLDER_NAME=$" + '' + "$";
                _Xml_Recpt_String += " CC_EDC_MACHINE=$" + '' + "$";
                _Xml_Recpt_String += " CC_CARD_TYPE_ID=$" + hdncardtypeId + "$";
                _Xml_Recpt_String += " CC_CARD_TYPE_REV_NO=$" + 1 + "$";
                _Xml_Recpt_String += " CC_ISSUE_BANK_NAME=$" + lblbankname + "$";
                _Xml_Recpt_String += " CC_VALID_TO_DT=$" + lblcardexpdt + "$";
                _Xml_Recpt_String += " CC_CARD_HOLDER_ADDRESS=$" + 0 + "$";
                _Xml_Recpt_String += " REMARKS=$" + Remarks + "$";
                _Xml_Recpt_String += " SESSION_ID=$" + document.getElementById('' + ctrlcom + '_HDNSESSIONID').value + "$";
                _Xml_Recpt_String += " BILL_AMOUNT=$" + TRANSACTION_AMOUNT + "$";
                _Xml_Recpt_String += "/>";
            }
            /*Debit Card*/
            if (paymentmodeid == "5") {
                countrep++;
                if (parseFloat(balamt) > 0) {
                    if (parseFloat(balamt) >= parseFloat(lblAmount)) {
                        calAmt = lblAmount;
                        balamt = parseFloat(regfee) - parseFloat(lblAmount);
                    }
                    else if (parseFloat(balamt) < parseFloat(lblAmount)) {
                        calAmt = balamt; balamt = "0";
                    }
                }
                _Xml_Recpt_String += "<FO_RECPAY_DET ";
                _Xml_Recpt_String += " TRANSACTION_DET_ID=$" + 0 + "$";
                _Xml_Recpt_String += " PAYMENT_MODE_ID=$" + paymentmodeid + "$";
                _Xml_Recpt_String += " AMOUNT=$" + calAmt + "$";
                _Xml_Recpt_String += " DC_CARD_NO=$" + lblcardno + "$";
                _Xml_Recpt_String += " DC_APPROVAL_NO=$" + '0' + "$";
                _Xml_Recpt_String += " DC_CARD_HOLDER_NAME=$" + '' + "$";
                _Xml_Recpt_String += " DC_EDC_MACHINE=$" + '' + "$";
                _Xml_Recpt_String += " DC_CARD_TYPE_ID=$" + hdncardtypeId + "$";
                _Xml_Recpt_String += " DC_CARD_TYPE_REV_NO=$" + 1 + "$";
                _Xml_Recpt_String += " DC_ISSUE_BANK_NAME=$" + lblbankname + "$";
                _Xml_Recpt_String += " DC_VALID_TO_DT=$" + lblcardexpdt + "$";
                _Xml_Recpt_String += " DC_CARD_HOLDER_ADDRESS=$" + 0 + "$";
                _Xml_Recpt_String += " REMARKS=$" + Remarks + "$";
                _Xml_Recpt_String += " SESSION_ID=$" + document.getElementById('' + ctrlcom + '_HDNSESSIONID').value + "$";
                _Xml_Recpt_String += " TRANSACTION_AMOUNT=$" + PAID_AMOUNT + "$";
                _Xml_Recpt_String += "/>";
            }
            /*Voucher*/
            if (paymentmodeid == "7") {
                countrep++;
            }
            /*NEFT/RGFT*/
            if (paymentmodeid == "8") {
                countrep++;
            }
            /*My Card*/
            if (paymentmodeid == "9") {
                countrep++;
            }
            /*Health Card*/
            if (paymentmodeid == "10") {
                countrep++;
            }
        });
        if (countrep == 0) {
            _Xml_Recpt_String += " PAYMENT_MODE_ID=$" + "" + "$";
            _Xml_Recpt_String += " AMOUNT=$" + "0" + "$";
            _Xml_Recpt_String += " TRANSACTION_DET_ID=$" + "0" + "$";
            _Xml_Recpt_String += " REMARKS=$" + Remarks + "$";
            _Xml_Recpt_String += " SESSION_ID=$" + document.getElementById('' + ctrlcom + '_HDNSESSIONID').value + "$";
            _Xml_Recpt_String += " />"
        }
    }
    _Xml_Recpt_String += "</root>";

    _xmlStr += _Xml_recpay_String;
    _xmlStr += _xml_recpayref_string;
    _xmlStr += _Xml_Recpt_String;

    GetAsync(
                      "Private/FrontOffice/OpBilling/OPConsultation1.aspx/SaveConsultation",
                      { xmlString: _xmlStr, regid: regid },
                      function (JData) {

                          console.log(JData.d);
                          if (JData.d.split(',')[0] == "1" && JData.d.split(',')[1] == "0") {
                              $(".stoast").toastText("warning", "Consultation is Already Done for This Doctor!!!", 5, 3);
                              window.location.replace('./OPConsultation1.aspx?MODE=NEW');
                          }
                          else {
                              if (confirm('Consultation Confirmed. Click OK to get Receipt.')) {

                                  var Billid = JData.d.split(',')[1];
                                  var transid = JData.d.split(',')[2];
                                  var bprtsetting = document.getElementById('' + ctrlcom + '_hdnBothPrintSetting').value;
                                  var datefmt = document.getElementById('' + ctrlcom + '_hdnDateFmt').value;

                                  GetAsync(
                                            "Private/FrontOffice/OpBilling/OPConsultation1.aspx/ConsultationReport",
                                            { Bid: Billid, Tid: transid, PatientId: Pat_ID, BothPrintSetting: bprtsetting, PatType: pattype, DtFrmt: datefmt },
                                            function (_path) {
                                                console.log(_path.d);
                                                _path = _path.d;
                                                for (var i = 0; i < _path.split(',').length; i++) {
                                                    if (_path.split(',')[i] != '')
                                                        window.open(_path.split(',')[i]);
                                                }
                                                window.location.replace('./OPConsultation.aspx?MODE=NEW');
                                                return false;
                                            },
                                            function (jqXHR, textStatus, errorThrown) {
                                            });
                              }
                          }
                      },
                      function (jqXHR, textStatus, errorThrown) {
                          $(".stoast").toastText("warning", errorThrown, 5, 3);
                      });
}


/*To show n Hide history of Patient in Grid.*/

/*function ShowGrid(event) {
var PatientID = document.getElementById('' + ctrlcom + '_umrPatientDetails_hdnPatientid').value;
if (document.getElementById('' + ctrlcom + '_umrPatientDetails_Umrlookup_txtSearchControl').value == '') {
alert('Please select UMR NO!.');
document.getElementById('' + ctrlcom + '_umrPatientDetails_Umrlookup_txtSearchControl').focus();
return false;
}
if (document.getElementById('lnkBtnHistory').value == 'History') {
document.getElementById('' + ctrlcom + '_trHistoryGrid').style.display = 'block';
document.getElementById('lnkBtnHistory').value = 'Back';
var param = param || {};
param.dataKey = "DOCTOR_ID";
param.pageSize = 10;
param.pageNum = 1;
param.defaultWSParams = { _PatID: PatientID, _docID: 0 };
param.wsPath = "Private/FrontOffice/OpBilling/OPConsultation1.aspx/BindPrevConsultations";
param.wsFilterPath = "Private/FrontOffice/OpBilling/OPConsultation1.aspx/BindPrevConsultations";
param.template = ["BILL_NO*BILL_NO"
, "PATIENT_NAME*PATIENT_NAME"
, "BILL_DT*BILL_DT"
, "DOCTOR_NAME*DOCTOR_NAME"
, "CONSULTATION_TYPE_NAME*CONSULTATION_TYPE_NAME"
, "NET_AMOUNT*NET_AMOUNT"
, "RECORD_STATUS*RECORD_STATUS"];

param.header = [{ col: "Consultation#", sort: true, filter: true }
, { col: "Name", sort: true, filter: true }
, { col: "Date", sort: true, filter: true }
, { col: "Doctor Name", sort: true, filter: true }
, { col: "Visit Type", sort: false }
, { col: "Amount", sort: true, filter: true }
, { col: "Status", sort: false, filter: true}];
param.enablePaging = false;
param.enableTrace = false;
param.enableFilter = false;
param.enableCheckbox = false;
param.enableSorting = true;
param.RowNo = true;
gridControl = $("#tbl_PreConsultation").jtable(param);

}
else {
document.getElementById('' + ctrlcom + '_lblError').style.display = 'none';
document.getElementById('' + ctrlcom + '_trHistoryGrid').style.display = 'none';
document.getElementById('lnkBtnHistory').value = 'History';
}
   
}*/

function GetVisitTypeDropDown(value) {
    var dropdown;
    dropdown = document.createElement('select');
    //  dropdown.id = value + index;
    dropdown.style.width = '100%';
    dropdown.className = 'ComboBoxDropDown';
    var opt0 = document.createElement("option"); opt0.text = '-- select --'; opt0.value = '0';
    dropdown.options.add(opt0, 0);
    for (var i = 0; i < document.getElementById('' + ctrlcom + '_hdnvisittypes').value.split(',').length - 1; i++) {
        var data = document.getElementById('' + ctrlcom + '_hdnvisittypes').value.split(',')[i];
        var opt1 = document.createElement("option");
        opt1.text = data.split(':')[1];
        opt1.value = data.split(':')[0];
        dropdown.options.add(opt1, i + 1);
    }
    return dropdown;
}
var currowindex = 0;

function OnFailPatientHistory(result) {
    $(".stoast").toastText("warning", "Unable to connect service,Please try again!", 5, 3);
    return false;
}


function RemoveGridRow(doctorid) {
    var index = 1;
    var grid = document.getElementById('' + ctrlcom + '_gvServices');
    if (doctorid == undefined || doctorid == '')
        $(".stoast").toastText("warning", "No Services to Delete.", 5, 3);
    else {
        if (confirm('Do you want to Remove the record?')) {
            $("table[id*=gvServices] tr:has(td)").each(function () {
                var srvID = $(this).closest('tr').find("input[type=hidden][id*=hdnDoctorId]").val();
                var BAR_CODE = '';
                if ((srvID != '') || (srvID != undefined)) {
                    if (srvID == doctorid) {
                        $(this).remove();
                        index = $(this).closest('tr').find("[id*=lblSNo]").text();
                    }

                }
            });
        }
    }
    var paymentby = document.getElementById('' + ctrlcom + '_uccorporate_ddlPaymentBy').value;
    if (grid.rows.length == 1 || (grid.rows.length == 0 && grid != null)) {
    }

    AssignSno(index);
    CalculateGridAmtCount();
    document.getElementById('' + ctrlcom + '_hdnHTMLstring').value = document.getElementById('' + ctrlcom + '_gvServices').innerHTML;
    $("table[id*=gvServices] tr:has(td)").each(function (e) {
        if (this.rowIndex == index + 1) {
            $(this).closest('tr').find('input[type=text][id*=txtServiceName]').focus();
        }
    });

    return false;
}

function AmtChange(ev, obj) {
    var gridRowIndex = 0;
    var rowIndex = 0;
    if (ev == 1)
        rowIndex = 1;

    $("#<%=gvServices.ClientID%> tr:has(td)").each(function (e) {
        var cell = $(this).find("td:eq(1)");

        gridRowIndex = this.rowIndex;

        var qty = $(this).closest('tr').find("input[type=text][id*=txtQty]").val();
        var rate = $(this).closest('tr').find("input[type=text][id*=txtRate]").val();
        var Amount = parseFloat(qty) * parseFloat(rate);

        if (!isNaN(Amount)) {
            $(this).closest('tr').find("[id*=lblgvAmount]").text(Amount);
            $(this).closest('tr').find("input[type=text][id*=txtConcession]").val("0");
            $(this).closest('tr').find("input[type=text][id*=lblNetAmount]").val(Amount);
        }
    });
}


function ConcessionModeChange() {
    $('#' + ctrlcom + '_ReceiptControl2_txtpatdis')[0].enabled = true;
    $('#' + ctrlcom + '_ReceiptControl2_txtpatdis')[0].focus();
    if (document.getElementById('' + ctrlcom + '_rdBtnConMode_2').checked == true) {
        CalCulatelbladvancedAmt();
    }
    else {
        CalCulatelblquickAmt();
    }

    var GAmount = 0;
    var Perconces = 0, concession = 0, txtPayAmt = 0, dec = 2;
    var sGrid = document.getElementById('' + ctrlcom + '_UCServices_gvServices');
    var TAmount = 0, GAmount = 0, Amount = 0, NetAmount = 0, Qty = 0, Rate = 0, IndivConcession = 0, InitialAmount = 0, TotConcession = 0;
    var CmpcGross = 0; cmpcDPent = 0; cmpcDFlat = 0, CmpcNAmt = 0;
    $("table[id*=gvServices] tr:has(td)").each(function (e) {
        var ev = this.rowIndex;
        if (ev != undefined && ev != '' && ev != null) { ev = ev; } else { ev = 1; }
        var patbAmt = $(this).closest('tr').find("input[type=text][id*=txtPamt]").val();
        var patDPercent = $(this).closest('tr').find("input[type=text][id*=txtDiscP]").val();
        var patDFlat = $(this).closest('tr').find("input[type=text][id*=txtDiscAmt]").val();
        var PatNAmt = $(this).closest('tr').find("input[type=text][id*=txtPNAmt]").val();
        var CmpBAmt = $(this).closest('tr').find("input[type=text][id*=txtCamt]").val();
        var CmpDPercent = $(this).closest('tr').find("input[type=text][id*=txtCDiscP]").val();
        var CmpDFlat = $(this).closest('tr').find("input[type=text][id*=txtCDiscAmt]").val();
        var CmpNAmt = $(this).closest('tr').find("input[type=text][id*=txtCNetAmt]").val();



        if (patbAmt == '' || patbAmt == undefined || isNaN(patbAmt))
            patbAmt = '0';
        GAmount = parseFloat(GAmount) + parseFloat(patbAmt); /*Patient Bill Amount */
        patDFlat = PatNAmt - patDFlat;
        if (!isNaN(patDFlat))
            TotConcession = parseFloat(patDFlat) + parseFloat(IndivConcession); /* caluculating total concession*/
        CmpcGross = parseFloat(CmpBAmt) + parseFloat(CmpcGross);
        CmpcGross = 0;
        document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnPayAmt').value = GAmount;
    });


    if (document.getElementById('' + ctrlcom + '_rdBtnConMode_0').checked == true) {
        $("table[id*=gvServices] tr:has(td)").each(function (e) {

            $(this).closest('tr').find("input[type=text][id*=txtDiscP]").val('0');
            $(this).closest('tr').find("input[type=text][id*=txtDiscAmt]").val('0');
            $(this).closest('tr').find("input[type=text][id*=txtPNAmt]").val($(this).closest('tr').find("input[type=text][id*=txtRate]").val());

            $(this).closest('tr').find("input[type=text][id*=txtCDiscP]").val('0');
            $(this).closest('tr').find("input[type=text][id*=txtCDiscAmt]").val('0');
            $(this).closest('tr').find("input[type=text][id*=txtCNetAmt]").val($(this).closest('tr').find("input[type=text][id*=txtCamt]").val());

            $(this).closest('tr').find('input[type=text][id*=txtDiscP]').attr('disabled', true);
            $(this).closest('tr').find('input[type=text][id*=txtDiscAmt]').attr('disabled', true);

            $(this).closest('tr').find('input[type=text][id*=txtCDiscP]').attr('disabled', true);
            $(this).closest('tr').find('input[type=text][id*=txtCDiscAmt]').attr('disabled', true);



        });
    }
    else if (document.getElementById('' + ctrlcom + '_rdBtnConMode_1').checked == true) {// line by item
        var AllowConc = document.getElementById('' + ctrlcom + '_hdnIsAllowCncn').value;
        var concpersent = document.getElementById('' + ctrlcom + '_hdnCncnPercent').value;
        if (AllowConc == 'True') {
            if (concpersent == '0' || concpersent == '') {/*checking concession permission is there or not.*/
                $(".stoast").toastText("warning", "Sorry..!you do not have permission to give concession!", 5, 3);
                document.getElementById('' + ctrlcom + '_rdBtnConMode_0').checked = true;
            }
            else {
                $("table[id*=gvServices] tr:has(td)").each(function (e) {

                    $(this).closest('tr').find("input[type=text][id*=txtDiscP]").val('0');
                    $(this).closest('tr').find("input[type=text][id*=txtDiscAmt]").val('0');
                    $(this).closest('tr').find("input[type=text][id*=txtPNAmt]").val($(this).closest('tr').find("input[type=text][id*=txtRate]").val());

                    $(this).closest('tr').find("input[type=text][id*=txtCDiscP]").val('0');
                    $(this).closest('tr').find("input[type=text][id*=txtCDiscAmt]").val('0');
                    $(this).closest('tr').find("input[type=text][id*=txtCNetAmt]").val($(this).closest('tr').find("input[type=text][id*=txtCamt]").val());

                    $(this).closest('tr').find('input[type=text][id*=txtDiscP]').attr('disabled', false);
                    $(this).closest('tr').find('input[type=text][id*=txtDiscAmt]').attr('disabled', false);

                    $(this).closest('tr').find('input[type=text][id*=txtCDiscP]').attr('disabled', false);
                    $(this).closest('tr').find('input[type=text][id*=txtCDiscAmt]').attr('disabled', false);
                });
            }
        }
    }
    else if (document.getElementById('' + ctrlcom + '_rdBtnConMode_2').checked == true) {//Overall
        var AllowConc = document.getElementById('' + ctrlcom + '_hdnIsAllowCncn').value;
        var concpersent = document.getElementById('' + ctrlcom + '_hdnCncnPercent').value;
        if (AllowConc == 'True') {
            if (concpersent == '0' || concpersent == '') {/*checking concession permission is there or not.*/
                $(".stoast").toastText("warning", "Sorry..!you do not have permission to give concession!", 5, 3);
                document.getElementById('' + ctrlcom + '_rdBtnConMode_0').checked = true;
            }

            else {
                $("table[id*=gvServices] tr:has(td)").each(function (e) {
                    $(this).closest('tr').find("input[type=text][id*=txtDiscP]").val('0');
                    $(this).closest('tr').find("input[type=text][id*=txtDiscAmt]").val('0');
                    $(this).closest('tr').find("input[type=text][id*=txtPNAmt]").val($(this).closest('tr').find("input[type=text][id*=txtRate]").val());

                    $(this).closest('tr').find("input[type=text][id*=txtCDiscP]").val('0');
                    $(this).closest('tr').find("input[type=text][id*=txtCDiscAmt]").val('0');
                    $(this).closest('tr').find("input[type=text][id*=txtCNetAmt]").val($(this).closest('tr').find("input[type=text][id*=txtCamt]").val());

                    $(this).closest('tr').find('input[type=text][id*=txtDiscP]').attr('disabled', true);
                    $(this).closest('tr').find('input[type=text][id*=txtDiscAmt]').attr('disabled', true);

                    $(this).closest('tr').find('input[type=text][id*=txtCDiscP]').attr('disabled', true);
                    $(this).closest('tr').find('input[type=text][id*=txtCDiscAmt]').attr('disabled', true);
                });
            }
        }
    }
    CalculateGridAmtCount();
    $('#' + ctrlcom + '_ReceiptControl2_txtpatdis')[0].enabled = true;
    $('#' + ctrlcom + '_ReceiptControl2_txtpatdis')[0].focus();

}

function ApplyOverallConcession() {
    var overallconamt = document.getElementById('' + ctrlcom + '_txtoverallconcession').value;
    var concpersent = document.getElementById('' + ctrlcom + '_hdnCncnPercent').value;
    var totPgrossamt = 0;
    $("table[id*=gvServices] tr:has(td)").each(function (e) {
        if ($(this).closest('tr').find("input[type=text][id*=txtServiceName]").val() != '') {
            var Pgrossamt = $(this).closest('tr').find("input[type=text][id*=txtPamt]").val();
            $(this).closest('tr').find("input[type=text][id*=txtDiscAmt]").val(overallconamt);
            var PconPer = (parseFloat(overallconamt) / parseFloat(Pgrossamt) * 100);
            var PconNetAmt = parseFloat(Pgrossamt) - parseFloat(overallconamt);
            totPgrossamt = parseFloat(totPgrossamt) + parseFloat(Pgrossamt);
            $(this).closest('tr').find("input[type=text][id*=txtDiscP]").val(PconPer);
            $(this).closest('tr').find("input[type=text][id*=txtPNAmt]").val(PconNetAmt);
        }
    });

    var AllowConc = document.getElementById('' + ctrlcom + '_hdnIsAllowCncn').value;
    var AllowConcAmt = parseFloat((concpersent * totPgrossamt)) / 100;

    if (AllowConc == 'True') {

        if (parseFloat(overallconamt) > parseFloat(AllowConcAmt)) {
            $(".stoast").toastText("warning", "Sorry..!you can  give concession upto " + concpersent + "% only!", 5, 3);
            document.getElementById('' + ctrlcom + '_txtoverallconcession').value = "0";
        }
    }
    CalculateGridAmtCount();
}

function ClearTextbox(id) {
    if (parseFloat(document.getElementById(id.id).value) == 0)
        document.getElementById(id.id).value = '';
}

function numeralsOnly(evt) {

    var intKey = (window.Event) ? evt.which : evt.keyCode;
    if (intKey == undefined)//for InternetExplorer(IE) 
    {
        var charcode = evt.keyCode;
        if (charcode > 31 && (charcode < 48 || charcode > 57)) {
            evt.returnValue = false;
            return false;
        }
        return true;
    }
    else//for Mozilla
    {
        if (intKey > 31 && (intKey < 48 || intKey > 57)) {
            evt.returnValue = false;
            return false;
        }

        return true;
    }
}

function CheckCreditLimit(obj) {

}


function ClearConsultaionControls() {
    var gridID = document.getElementById('' + ctrlcom + '_gvServices');
    if (gridID.rows.length > 2) {
        $("table[id$=gvServices] tr:has(td)").each(function () {

            if (this.rowIndex != gridID.rows.length - 1) {
                $(this).closest('tr').remove();
            }
        });

        AssignSno(1);

    }

    // Clear Patient Info  
    document.getElementById('' + ctrlcom + '_umrPatientDetails_ucUMRno_txtSearchControl').value = '';
    document.getElementById('' + ctrlcom + '_umrPatientDetails_ucUMRno__hiddenID').value = '';
    document.getElementById('' + ctrlcom + '_umrPatientDetails_txtRegNo').value = '';
    document.getElementById('' + ctrlcom + '_umrPatientDetails_txttitle').value = '';
    document.getElementById('' + ctrlcom + '_umrPatientDetails_txtPatientName').value = '';
    document.getElementById('' + ctrlcom + '_umrPatientDetails_txtGender').value = '';
    document.getElementById('' + ctrlcom + '_umrPatientDetails_txtmothermname').value = '';
    document.getElementById('' + ctrlcom + '_umrPatientDetails_txtresname').value = '';
    document.getElementById('' + ctrlcom + '_umrPatientDetails_txtOccupation').value = '';
    document.getElementById('' + ctrlcom + '_umrPatientDetails_txtPatType').value = '';
    document.getElementById('' + ctrlcom + '_umrPatientDetails_txtCompName').value = '';
    if (document.getElementById('' + ctrlcom + '_umrPatientDetails_AgeCalUsercontrol1_txtDob') != null && document.getElementById('' + ctrlcom + '_umrPatientDetails_AgeCalUsercontrol1_txtDob') != undefined)
        document.getElementById('' + ctrlcom + '_umrPatientDetails_AgeCalUsercontrol1_txtDob').value = '';
    if (document.getElementById('' + ctrlcom + '_umrPatientDetails_AgeCalUsercontrol1_txtYear') != null && document.getElementById('' + ctrlcom + '_umrPatientDetails_AgeCalUsercontrol1_txtYear') != undefined)
        document.getElementById('' + ctrlcom + '_umrPatientDetails_AgeCalUsercontrol1_txtYear').value = '';
    if (document.getElementById('' + ctrlcom + '_umrPatientDetails_AgeCalUsercontrol1_txtMonths') != null && document.getElementById('' + ctrlcom + '_umrPatientDetails_AgeCalUsercontrol1_txtMonths') != undefined)
        document.getElementById('' + ctrlcom + '_umrPatientDetails_AgeCalUsercontrol1_txtMonths').value = '';
    if (document.getElementById('' + ctrlcom + '_umrPatientDetails_AgeCalUsercontrol1_txtDay') != null && document.getElementById('' + ctrlcom + '_umrPatientDetails_AgeCalUsercontrol1_txtDay') != undefined)
        document.getElementById('' + ctrlcom + '_umrPatientDetails_AgeCalUsercontrol1_txtDay').value = '';

    document.getElementById('' + ctrlcom + '_UCConsultationNo_txtSearchControl').value = '';
    document.getElementById('' + ctrlcom + '_ddlRefSourceType').selectedIndex = 1;
    document.getElementById('' + ctrlcom + '_txtReferal').value = '';
    document.getElementById('' + ctrlcom + '_UCConsultantName_txtSearchControl').value = '';

    document.getElementById('' + ctrlcom + '_chkReferal').checked = false;
    document.getElementById('' + ctrlcom + '_chkIsFree').checked = false;
    document.getElementById('' + ctrlcom + '_chkOverAllConc').checked = false;
    document.getElementById('' + ctrlcom + '_txtConcPerc').value = '';
    document.getElementById('' + ctrlcom + '_txtConcAmt').value = '';
    document.getElementById('' + ctrlcom + '_txtmobileno').value = '';
    document.getElementById('' + ctrlcom + '_hdnSaveAlert').value = '';
    document.getElementById('' + ctrlcom + '_hdnHTMLstring').value = '';
    document.getElementById('' + ctrlcom + '_txtCorpPayAmt').value = '';
    document.getElementById('' + ctrlcom + '_txtCorpDueAmt').value = '';
    document.getElementById('' + ctrlcom + '_txtCorpPercentage').value = '';
    document.getElementById('' + ctrlcom + '_txtEmpPercentage').value = '';
    document.getElementById('' + ctrlcom + '_txtEmpPayAmt').value = '';

    arrServiceIds = new Array();
    arrRequisations = new Array();

}

//function hidecolumns(val) {

//    var grid = document.getElementById('' + ctrlcom + '_gvServices');
//    for (intC = 0; intC < grid.rows.length; intC++) {
//        grid.rows[intC].cells[12].style.display = val;
//        grid.rows[intC].cells[13].style.display = val;
//        grid.rows[intC].cells[14].style.display = val;
//        grid.rows[intC].cells[15].style.display = val;
//    }
//}

function checklettervalidDt(sender, args) {
    if (sender._selectedDate < new Date()) {
        $(".stoast").toastText("warning", "Letter validity should not be less than Today date", 5, 3);
        document.getElementById('' + ctrlcom + '_EmployerInfo1_txtlettervalidity').value = new Date().format('dd-MMM-yyyy');
    }
}
function hideRefPopup() {
    $("#div1").hide();
    return false;
}

function CompareDate(Date1, Date2) {
    if (Date1 != "" && Date2 != "") {
        if (Date1.length == 10) Date1 = '0' + Date1; if (Date2.length == 10) Date2 = '0' + Date2;
        var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                   n1 = months.length, matches1;
        while (n1--) { months[months[n1]] = n1; }
        matches1 = Date1.split('-');
        var dt1 = new Date(matches1[2], months[matches1[1]], matches1[0]);
        matches1 = Date2.split('-');
        var dt2 = new Date(matches1[2], months[matches1[1]], matches1[0]);
        if (dt1 < dt2)
            return "d1<d2";
    }
}

/*Grid First Row Show*/
function FirstRowShowCmpAmts() {

    /* header row columns show related function */
    $("table[id*=UCServices_gv_services_header] tr:has(td)").each(function (e) {
        var ev = this.rowIndex;
        $(this).closest('tr').find("input[type=text][id*=txtCamt]").css("display", "table-cell");
        $(this).closest('tr').find("input[type=text][id*=txtCDiscP]").css("display", "table-cell");
        $(this).closest('tr').find("input[type=text][id*=txtCDiscAmt]").css("display", "table-cell");
        $(this).closest('tr').find("input[type=text][id*=txtCNetAmt]").css("display", "table-cell");
        $(this).closest('tr').find("input[type=text][id*=txtEqui_Srv_Name]").css("display", "table-cell");
    });
    classDisplayCmpAmts(); /* header columns show related function */
}
/*Grid First Row hide*/
function FirstRowHideCmpAmts() {

    /* header row columns hide related function */
    //document.getElementById('' + ctrlcom + '_UCServices_gv_services_header').className = 'grid gvServices-min';
    // document.getElementById('' + ctrlcom + '_UCServices_gvServices').className = 'grid gvServices-min';
    $("table[id*=UCServices_gvServices] tr:has(td)").each(function (e) {
        var ev = this.rowIndex;
        $(this).closest('tr').find("input[type=text][id*=txtCamt]").css("display", "none");
        $(this).closest('tr').find("input[type=text][id*=txtCDiscP]").css("display", "none");
        $(this).closest('tr').find("input[type=text][id*=txtCDiscAmt]").css("display", "none");
        $(this).closest('tr').find("input[type=text][id*=txtCNetAmt]").css("display", "none");
        $(this).closest('tr').find("input[type=text][id*=txtEqui_Srv_Name]").css("display", "none");

    });
    classHideCmpAmts(); /* header columns hide related function */
}
function DisableCorp(val) {
    $('#lk_btn_ctl00_ContentPlaceHolder1_uccorporate_CmpLookup')[0].disabled = val;
    $('#' + ctrlcom + '_uccorporate_btnRefLetter')[0].disabled = val;
    $('#lk_btn_ctl00_ContentPlaceHolder1_uccorporate_ucRefLetterNo')[0].disabled = val;
    //$('#'+ ctrlcom + '_imgCal')[0].disabled = val;
    //$('#'+ ctrlcom + '_btnRefLetValid')[0].disabled = val;
    $('#' + ctrlcom + '_uccorporate_chkRefLetReq')[0].disabled = val;
}
var _varEmpTaxAmt = 0;
var _varCorpTaxAmt = 0;
var _emp_Pay_amt = 0;
function onEmpDueamt(obj) {

}
/*function EmployeeAsPatient() {
if ($('[id*=ddlrelation]').find('option:selected').text() == "Self") {
document.getElementById('' + ctrlcom + '_uccorporate_EmployerInfo1_txtEmployeeName').value = document.getElementById('' + ctrlcom + '_umrPatientDetails_lblPatName').innerHTML;
for (var i = 0; i < document.getElementById('' + ctrlcom + '_uccorporate_EmployerInfo1_ddlrelation').length; i++) {
if (document.getElementById('' + ctrlcom + '_uccorporate_EmployerInfo1_ddlrelation')[i].text == 'Self') {
document.getElementById('' + ctrlcom + '_uccorporate_EmployerInfo1_ddlrelation')[i].selected = true;
}
}
if (document.getElementById('' + ctrlcom + '_uccorporate_EmployerInfo1_txtEmployeeName').value == "") {
document.getElementById('' + ctrlcom + '_uccorporate_EmployerInfo1_txtEmployeeName').style.border = '1px solid rgb(244, 120, 94)';
} else {
document.getElementById('' + ctrlcom + '_uccorporate_EmployerInfo1_txtEmployeeName').style.border = '1px solid rgb(190, 190, 190)';
}
document.getElementById('' + ctrlcom + '_uccorporate_EmployerInfo1_txtEmployeeName').disabled = true;
}
else {
document.getElementById('' + ctrlcom + '_uccorporate_EmployerInfo1_txtEmployeeName').style.border = '1px solid rgb(244, 120, 94)';
document.getElementById('' + ctrlcom + '_uccorporate_EmployerInfo1_txtEmployeeName').value = '';
document.getElementById('' + ctrlcom + '_uccorporate_EmployerInfo1_txtEmployeeName').disabled = false;
}
}*/
function DisableCmpInfo() {
    document.getElementById('' + ctrlcom + '_uccorporate_CmpLookup_txtSearchControl').disabled = true;
    document.getElementById('lk_btn_ctl00_ContentPlaceHolder1_uccorporate_CmpLookup').disabled = true;
    document.getElementById('' + ctrlcom + '_uccorporate_btnCmpReg').disabled = true;
    document.getElementById('' + ctrlcom + '_uccorporate_ucRefLetterNo_txtSearchControl').disabled = true;
    document.getElementById('lk_btn_ctl00_ContentPlaceHolder1_uccorporate_ucRefLetterNo').disabled = true;
    document.getElementById('' + ctrlcom + '_uccorporate_btnRefLetter').disabled = true;
    document.getElementById('' + ctrlcom + '_uccorporate_txtRefLetValidDt').disabled = true;
    document.getElementById('' + ctrlcom + '_uccorporate_chkRefLetReq').checked = false;
    document.getElementById('' + ctrlcom + '_uccorporate_chkRefLetReq').disabled = true;
    document.getElementById('' + ctrlcom + '_uccorporate_chkEmpDue').checked = false;
    document.getElementById('' + ctrlcom + '_uccorporate_chkEmpDue').disabled = true;
    //document.getElementById('' + ctrlcom + '_btnRefLetValid').disabled = true;
    document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlDiscountType').disabled = false;
    document.getElementById('' + ctrlcom + '_ReceiptControl2_chkismultiple').disabled = false;
    if (getParameterByName('MODE') == 'VIEW') {
        document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlDiscountType').disabled = true;
        document.getElementById('' + ctrlcom + '_ReceiptControl2_chkismultiple').disabled = true;
    }
}

function EnableCmpInfo() {
    document.getElementById('' + ctrlcom + '_uccorporate_CmpLookup_txtSearchControl').disabled = false;
    document.getElementById('lk_btn_ctl00_ContentPlaceHolder1_uccorporate_CmpLookup').disabled = false;
    document.getElementById('' + ctrlcom + '_uccorporate_btnCmpReg').disabled = false;
    document.getElementById('' + ctrlcom + '_uccorporate_ucRefLetterNo_txtSearchControl').disabled = false;
    document.getElementById('lk_btn_ctl00_ContentPlaceHolder1_uccorporate_ucRefLetterNo').disabled = false;
    document.getElementById('' + ctrlcom + '_uccorporate_btnRefLetter').disabled = false;
    document.getElementById('' + ctrlcom + '_uccorporate_chkRefLetReq').disabled = false;
    document.getElementById('' + ctrlcom + '_uccorporate_chkEmpDue').disabled = false;
    document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlDiscountType').disabled = true;
    document.getElementById('' + ctrlcom + '_ReceiptControl2_chkismultiple').disabled = true;

}
function ClearConsultation() {
    $('#' + ctrlcom + '_UcOdrPsyn_txtSearchControl').val('');
    $('#' + ctrlcom + '_UcOdrPsyn__hiddenText').val('');
    $('#' + ctrlcom + '_UcOdrPsyn__hiddenID').val(0);
    ClearPatientBanerControl(); /* Clear Patient Banner */
    clearRefDtls(); /* Clear Referral Details  */
    //clearpopupcontrols(); /*Quick Add New Referal */
    ctl00_ContentPlaceHolder1_ucReferal_DivReferal.style.display = 'none';
    ClearCmpDtls(); /* company dtls clearing */
    $("table[id$=tbl_PatRequisitions]").each(function (i, j) { $(this).remove(); });
    clearGridFields(); /* Clear Grid View */
    ClearClinicalSummary(); /* Clear History Types */
    ClearTransactionUserControl(); /* Clear Transactions */

    return false;
}
function clearGridFields() {
    arrServiceIds = new Array();
    arrRequisations = new Array();
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
        var checkRowIndex = rowIndex - 1;
        //if (checkRowIndex != 0) {
        $('[id$=UCServices_gvServices] tr').filter(':eq(' + checkRowIndex + ')').remove();
        //}

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
    $('#' + ctrlcom + '_ddlPatientType').val('1');
}
function ClearClinicalSummary() {/* History Types */
    document.getElementById('' + ctrlcom + '_UCServices_ddlmeditation').value = '0';
    document.getElementById('' + ctrlcom + '_UCServices_txtDosage').value = '0';
    document.getElementById('' + ctrlcom + '_UCServices_chkDosgeTaken').checked = false;
    document.getElementById('' + ctrlcom + '_UCServices_txtOthrMedicText').value = '';
    document.getElementById('' + ctrlcom + '_UCServices_lblhisttype').innerHTML = '';
    document.getElementById('' + ctrlcom + '_UCServices_ddlclinical').value = '0';
    document.getElementById('' + ctrlcom + '_UCServices_txtLmpCalander').value = '';

}
function ClearTransactionUserControl() {
    /*Total Gross Amounts*/
    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatgross').value = '0';
    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtparygross').value = '0';
    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtgrosstotal').value = '0';
    document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlDiscountType').value = '0';
    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtcashAmt').value = '0';
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
function DisabledCntrl() {
    $('#' + ctrlcom + '_ReceiptControl2_Search3_txtSearchControl').removeClass('red');
    $('#' + ctrlcom + '_PageHeaderControl1_imgbtnSave').css('display', 'none');
    $('#' + ctrlcom + '_PageHeaderControl1_imgbtnclear').css('display', 'none');
    document.getElementById('' + ctrlcom + '_umrPatientDetails_Umrlookup_txtSearchControl').disabled = true;
    document.getElementById('lk_btn_ctl00_ContentPlaceHolder1_umrPatientDetails_Umrlookup').disabled = true;
    document.getElementById('' + ctrlcom + '_umrPatientDetails_Umrlookup_imgbtnSearch').disabled = true;
    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtcashAmt').disabled = true;
    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtCardAmt').disabled = true;
    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtcardNoCmp').disabled = true;
    document.getElementById('' + ctrlcom + '_uccorporate_txtRefLetValidDt').disabled = true;
    document.getElementById('' + ctrlcom + '_uccorporate_chkRefLetReq').disabled = true;
    document.getElementById('' + ctrlcom + '_ReceiptControl2_ddcardType').disabled = true;
    document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlcrdtype').disabled = true;
    document.getElementById('' + ctrlcom + '_ReceiptControl2_ddbankName').disabled = true;
    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtcardExpiredt').disabled = true;
    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtcardAuther').disabled = true;
    document.getElementById('lnkBtnHistory').disabled = true;
    document.getElementById('' + ctrlcom + '_ucReferal_btnQkAdd').disabled = true;
    document.getElementById('' + ctrlcom + '_ucReferal_ddlreferral').disabled = true;
    document.getElementById('' + ctrlcom + '_ucReferal_ucreferalname_txtSearchControl').disabled = true;
    document.getElementById('lk_btn_ctl00_ContentPlaceHolder1_ucReferal_ucreferalname').disabled = true;
    document.getElementById('' + ctrlcom + '_uccorporate_ddlPaymentBy').disabled = true;
    document.getElementById('' + ctrlcom + '_uccorporate_CmpLookup_txtSearchControl').disabled = true;
    document.getElementById('lk_btn_ctl00_ContentPlaceHolder1_uccorporate_CmpLookup').disabled = true;
    document.getElementById('' + ctrlcom + '_uccorporate_btnCmpReg').disabled = true;
    document.getElementById('' + ctrlcom + '_uccorporate_ucRefLetterNo_txtSearchControl').disabled = true;
    document.getElementById('lk_btn_ctl00_ContentPlaceHolder1_uccorporate_ucRefLetterNo').disabled = true;
    document.getElementById('' + ctrlcom + '_uccorporate_btnRefLetter').disabled = true;
    document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlDiscountType').disabled = true;
    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatdis').disabled = true;
    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpartydis').disabled = true;
    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatgrossamt').disabled = true;
    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpartygrossamt').disabled = true;
    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtgrossamttotal').disabled = true;
    document.getElementById('lk_btn_ctl00_ContentPlaceHolder1_ReceiptControl2_ucdueauth').disabled = true;
    document.getElementById('' + ctrlcom + '_ReceiptControl2_Search3_txtSearchControl').disabled = true;
    document.getElementById('lk_btn_ctl00_ContentPlaceHolder1_ReceiptControl2_Search3').disabled = true;
    document.getElementById('' + ctrlcom + '_ReceiptControl2_ucdueauth_txtSearchControl').disabled = true;
    document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlPaymentType').disabled = true;
    document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlCurrency').disabled = true;
    document.getElementById('' + ctrlcom + '_ReceiptControl2_UcTransactionNo_txtSearchControl').disabled = true;
    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtTenderedAmt').disabled = true;
    document.getElementById('' + ctrlcom + '_ReceiptControl2_imgbtnadd').disabled = true;
    document.getElementById('' + ctrlcom + '_ReceiptControl2_imgbtnadd').disabled = true;
    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtRemarks').disabled = true;
    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtquickremarks').disabled = true;
    document.getElementById('' + ctrlcom + '_UCServices_ucbillno_txtSearchControl').disabled = true;
    document.getElementById('lk_btn_ctl00_ContentPlaceHolder1_UCServices_ucbillno').disabled = true;
    document.getElementById('btnselfinv').disabled = true;
    document.getElementById('imgbtnNewReg').disabled = true;

    $("table[id$=gvReceiptDetails] tr:has(td)").each(function (e) {
        $(this).closest("tr").find("[id*=imgBtnEdit]").attr('disabled', true);
        $(this).closest("tr").find("[id*=imgBtnDelete]").attr('disabled', true);
    });
    $(this).closest("tr").find("[id*=lnkBtnHistory]").attr('disabled', true);
    $('[id*=gvServices] tr:has(td) input[type=text]').attr('disabled', 'true');
    $('[id*=gvServices] tr:has(td) input[type=button]').attr('disabled', 'true');
    $('[id*=gvServices] tr:has(td) select').attr('disabled', 'true');
    $('.divmanage i').css('display', 'none');
    document.getElementById('' + ctrlcom + '_ReceiptControl2_chkismultiple').disabled = true;
}

function PkgConsView(_billid) {
    disableview();
    var Bill_ID = _billid;
    GetAsync(
                    "ReceiptWebService.asmx/Get_Consultation_Details",
                    { billid: Bill_ID },
                    function (jdata) {

                        var _price = jdata.d[0].RATE; var _lastvisitedDt = ''; var deptid = 0; var VisitTypeId = jdata.d[0].CONSULTATION_TYPE_ID; var _doctor_id = jdata.d[0].BILL_DET_DOCTOR_ID;
                        fn_AddFilterRow_pkgbillSelection('G', 'N', 'N', 'N', 'N', 'N', 1, 2, jdata.d[0].DOCTOR_NAME, jdata.d[0].DOCTOR_CODE, 'Consultation', _price, 0, _price, '', '', '', 0, 0, 1,
                         _doctor_id, 1, '', 'N', '', '', 0, '', 0, 0, _price, 0, 0, '', '', _lastvisitedDt, 0, '', '', '', '', deptid, '4', '', '', '0', '0', VisitTypeId, 0, 0);
                        DisabledCntrl();
                    },
                    function (jqXHR, textStatus, errorThrown) {
                        $(".stoast").toastText("warning", errorThrown, 5, 3);
                    });
}
function PaymentDetails(data) {
    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatgross').value = jdata.d[0].BILL_DET_AMOUNT;
    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtgrosstotal').value = jdata.d[0].BILL_DET_AMOUNT;
    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatientReceiptAmt').value = jdata.d[0].BILL_DET_NET_AMOUNT;
    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtTotalReciptAmt').value = jdata.d[0].BILL_DET_NET_AMOUNT;
    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatdue').value = jdata.d[0].OUTSTANDING_DUE;
    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtTotalDue').value = jdata.d[0].OUTSTANDING_DUE;
}
/* commented by pushkar duplicate method exist in opdbill.js please let pushkar know before uncomment it */
/*
function AssignPatInfo_Dtls(patid) {
var patientID = patid;
var patID = patid;
GetAsync(
"PatientRegistration.asmx/Get_Patient_Details",
{ _patID: parseInt(patientID) },
function (jdata) {
if (jdata != null && jdata.d.length > 0) {
document.getElementById('' + ctrlcom + '_chk_old').checked = true;
onGetPatientBanner();

document.getElementById('' + ctrlcom + '_uccorporate_ddlPaymentBy').value = 0;

document.getElementById('' + ctrlcom + '_umrPatientDetails_Umrlookup_txtSearchControl').value = jdata.d[0].UmrNo;
document.getElementById('' + ctrlcom + '_umrPatientDetails_Umrlookup__hiddenText').value = jdata.d[0].UmrNo;
document.getElementById('' + ctrlcom + '_umrPatientDetails_Umrlookup__hiddenID').value = patientID;
document.getElementById('' + ctrlcom + '_umrPatientDetails_lblPatName').innerHTML = jdata.d[0].DISPLAY_NAME;
document.getElementById('' + ctrlcom + '_umrPatientDetails_lblgender').innerHTML = jdata.d[0].GENDER;
document.getElementById('' + ctrlcom + '_umrPatientDetails_lblagedob').innerHTML = jdata.d[0].DOB;
document.getElementById('' + ctrlcom + '_umrPatientDetails_lblrefdoc').innerHTML = jdata.d[0].CONSULTANT;
document.getElementById('' + ctrlcom + '_umrPatientDetails_lbloccupation').innerHTML = jdata.d[0].OCCUPATION;
document.getElementById('' + ctrlcom + '_umrPatientDetails_lblfathername').innerHTML = jdata.d[0].FATHERNAME;
document.getElementById('' + ctrlcom + '_umrPatientDetails_lblmothername').innerHTML = jdata.d[0].MOTHER_MAIDEN_NAME;
document.getElementById('' + ctrlcom + '_umrPatientDetails_lblMobileNo').innerHTML = jdata.d[0].MOBILE_NO1;
document.getElementById('' + ctrlcom + '_umrPatientDetails_lblfathername').innerHTML = jdata.d[0].RES_PERSON_NAME;
AssignReferalsInfo(patID);
}
},
function (jqXHR, textStatus, errorThrown) {
alert(errorThrown);
});
} */
var arrServiceIds = new Array();
var set_contextKey = '';


/*function ViewAssignTransDetails2(result) {
result = jQuery.parseJSON(result);
console.log(result);
if (result.length > 0) {
var rcount = 0;
if (result[0].PAYMENT_TYPE_ID == 2) {
for (var i = 0; i <= result.length - 1; i++) {
var card_no = result[i].CC_CARD_NO;
var dc_no = result[i].DC_CARD_NO;
if (card_no == undefined || card_no == null) { card_no = ''; }
if (dc_no == undefined || dc_no == null) { dc_no = ''; }

document.getElementById('' + ctrlcom + '_ReceiptControl2_txtreceiptNoQuick').value = result[i].TRANSACTION_NO;
document.getElementById('' + ctrlcom + '_ReceiptControl2_txtquickremarks').value = result[i].REMARKS;
if (card_no != '' || dc_no != '') {
if (card_no != '') {
document.getElementById('' + ctrlcom + '_ReceiptControl2_ddcardType').value = result[i].CC_CARD_TYPE_ID;
$("#"+ ctrlcom + "_ReceiptControl2_ddbankName option:Contains(" + result[i].CC_ISSUE_BANK_NAME + ")").attr("selected", "selected");
document.getElementById('' + ctrlcom + '_ReceiptControl2_txtcardNoCmp').value = result[i].CC_CARD_NO;
document.getElementById('' + ctrlcom + '_ReceiptControl2_txtcardExpiredt').value = new Date(result[i].CC_VALID_TO_DT).format('dd-MMM-yyyy');
document.getElementById('' + ctrlcom + '_ReceiptControl2_txtcardAuther').value = result[i].CC_AUTH_CD;
}
else if (dc_no != '') {
document.getElementById('' + ctrlcom + '_ReceiptControl2_ddcardType').value = result[i].DC_CARD_TYPE_ID;
$("#"+ ctrlcom + "_ReceiptControl2_ddbankName option:Contains(" + result[i].DC_ISSUE_BANK_NAME + ")").attr("selected", "selected");
document.getElementById('' + ctrlcom + '_ReceiptControl2_txtcardNoCmp').value = result[i].DC_CARD_NO;
document.getElementById('' + ctrlcom + '_ReceiptControl2_txtcardExpiredt').value = new Date(result[i].DC_VALID_TO_DT).format('dd-MMM-yyyy');
document.getElementById('' + ctrlcom + '_ReceiptControl2_txtcardAuther').value = result[i].DC_AUTH_CD;
}
document.getElementById('' + ctrlcom + '_ReceiptControl2_txtCardAmt').value = setProperDecimals(result[i].AMOUNT);
document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlcrdtype').value = result[i].PAYMENT_MODE_ID;
}
else {

document.getElementById('' + ctrlcom + '_ReceiptControl2_txtcashAmt').value = result[i].AMOUNT;

}
}
}
else {
$(".col-hide tr:nth-child(3),.col-hide tr:nth-child(4),.col-hide tr:nth-child(5),.col-hide tr:nth-child(6),.col-hide tr:nth-child(7),.col-hide tr:nth-child(8),.col-hide tr:nth-child(9),.col-hide tr:nth-child(12),.col-hide tr:nth-child(13)").show();
$("#payitem2,._quick-div").show();
$("._mdisc").css('width', '72%');
$("#payitem1,#payitem3").hide();
$("#lbladvanced").addClass("select");
$('[id*=ConcessionAmt]')[0].style.display = 'none';
$("#lblquick,#lblmdis").removeClass("select");

for (var i = 0; i <= result.length - 1; i++) {
var BANK_NAME = ''; var VALID_TO_DT = ''; var CARD_NO = '';
var _bankname = ''; var card = '';
if (result[i].PAYMENT_MODE_ID == '1') {
card = 'Cash';
}
else if (result[i].PAYMENT_MODE_ID == 2) {
_bankname = result[i].CQ_BANK_NAME;
CARD_NO = result[i].CQ_CHEQUE_NO;
VALID_TO_DT = result[i].CQ_VALID_TO_DT;
card = '';
}
else if (result[i].PAYMENT_MODE_ID == 3) {
_bankname = result[i].DC_ISSUE_BANK_NAME;
CARD_NO = result[i].DC_CARD_NO;
card = result[i].DC_CARD_TYPE_ID;
}
else if (result[i].PAYMENT_MODE_ID == 4) {
_bankname = result[i].CC_ISSUE_BANK_NAME
CARD_NO = result[i].CC_CARD_NO;
VALID_TO_DT = result[i].CC_VALID_TO_DT;
card = result[i].CC_CARD_TYPE_ID;
}
else if (result[i].PAYMENT_MODE_ID == '5') {
CARD_NO = result[i].DC_CARD_NO;
card = result[i].DC_CARD_TYPE_ID;
_bankname = result[i].DC_ISSUE_BANK_NAME;
VALID_TO_DT = result[i].DC_VALID_TO_DT;
}
var currname = result[i].CURRENCY_NAME;
var tenderedCash = result[i].TENDERED_AMOUNT;
var changeinAmt = result[i].CHANGE_AMOUNT;
if (result[i].PAYMENT_TYPE == null || result[i].PAYMENT_TYPE == undefined) { result[i].PAYMENT_TYPE = ''; }
if (result[i].EX_RATE == null || result[i].EX_RATE == undefined) { result[i].EX_RATE = 0; }
if (currname == null || currname == undefined) { currname = 0; }
if (changeinAmt == null || changeinAmt == undefined) { changeinAmt = 0; }
if (tenderedCash == null || tenderedCash == undefined || tenderedCash == '') { tenderedCash = 0; }
if (_bankname == null || _bankname == undefined) { _bankname = ''; }
var cardname = '';
if (card == 1) { cardname = 'visa'; } else if (card == 2) { cardname = 'Master'; } else { cardname = card; }
var cardexpdt = '', cardexpTime = ''; ;
if (VALID_TO_DT != undefined && VALID_TO_DT != null && VALID_TO_DT != '') {
cardexpdt = VALID_TO_DT.split(' ')[0];
cardexpdt = new Date(cardexpdt).format("dd-MMM-yyyy") + " " + VALID_TO_DT.split(' ')[1];
}
if (cardexpdt == 'NaN--NaN undefined') {
cardexpdt = new Date(jQuery.parseJSON(VALID_TO_DT.split('(')[1].split(')')[0])).format('dd-MMM-yyyy');
}
if (i == 0) {
$('table[id$=gvReceiptDetails]').find("tr:eq(1)").find('[id*=lblrecmode]').text(result[i].PAYMENT_TYPE);
$('table[id$=gvReceiptDetails]').find("tr:eq(1)").find('[id*=lblcurrname]').text(result[i].CURRENCY_NAME);
$('table[id$=gvReceiptDetails]').find("tr:eq(1)").find('[id*=lblexchrate]').text(result[i].EX_RATE);
$('table[id$=gvReceiptDetails]').find("tr:eq(1)").find('[id*=lblconvertedamt]').text(result[i].AMOUNT);
$('table[id$=gvReceiptDetails]').find("tr:eq(1)").find('[id*=lblbankname]').text(_bankname);
$('table[id$=gvReceiptDetails]').find("tr:eq(1)").find('[id*=lblcardno]').text(CARD_NO);
$('table[id$=gvReceiptDetails]').find("tr:eq(1)").find('[id*=lblAmount]').text(result[i].AMOUNT);
$('table[id$=gvReceiptDetails]').find("tr:eq(1)").find('[id*=lblcardexpdt]').text(cardexpdt);
$('table[id$=gvReceiptDetails]').find("tr:eq(1)").find('[id*=lbltendcash]').text(tenderedCash);
$('table[id$=gvReceiptDetails]').find("tr:eq(1)").find('[id*=lblchange]').text(0);
$('table[id$=gvReceiptDetails]').find("tr:eq(1)").find('[id*=lblcardtype]').text(cardname);
}
else {
fn_AddFilterRow_getdata(result[i].PAYMENT_MODE_ID, result[i].PAYMENT_TYPE, result[i].AMOUNT, result[i].EX_RATE, _bankname, result[i].AMOUNT, result[i].DISCNT_AMT, currname,
CARD_NO, cardexpdt, result[i].CARD_TYPE, tenderedCash, 0, "VIEW", '', cardexpdt);
}
}
}
$('.manage1').css('display', 'none');
}
}
*/


function BindAdjestumentdata() {
    var umrno = '', patientid = 0;
    patientid = document.getElementById('' + ctrlcom + '_umrPatientDetails_hdnPatientid').value;
    umrno = document.getElementById('' + ctrlcom + '_umrPatientDetails_Umrlookup_txtSearchControl').value;

    if (document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlPaymentType').selectedIndex == 9) {

        var UrlVal = ReturnIniUrl();
        $.ajax({
            type: "POST",
            url: UrlVal + "ServiceMasterWebService.asmx/BindAdjestumentdataAmount",
            data: "{'umrno': '" + umrno + "','patientid': '" + patientid + "'}",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            async: false,
            error: function (jqXHR, textStatus, errorThrown) {
                alert(errorThrown);
            },
            success: function (JData) {
                document.getElementById('' + ctrlcom + '_ReceiptControl2_txtadjustmentamt').value = JData.d[0].AMOUNT;
                tdadv.style.display = 'table-cell';
                tdadvcell.style.display = 'table-cell';
            }
        });

    }
    else {
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtadjustmentamt').value = 0;
        tdadv.style.display = 'none';
        tdadvcell.style.display = 'none';
    }
}
function datechange(sender) {
    var input = sender._selectedDate.format('dd-MMM-yyyy');
    var duration = document.getElementById('' + ctrlcom + '_hdnrefvaliddays').value;
    var validdt = new Date(new Date(input).getTime() + duration * 24 * 60 * 60 * 1000).format('dd-MMM-yyyy');
    $('#' + ctrlcom + '_uccorporate_txtRefLetValidDt').val(validdt);
}
/*
function ViewDetails(Patdetails, ServiceDtls, RefDetails, TranModeDtls, BillDtls, MutilDiscDtls, RefLetterDetails) {
//ViewAssignAddressDetails(AddressDtls, _str_Bill_Type);
document.getElementById('' + ctrlcom + '_uccorporate_chkRefLetReq').disabled = true;
// ViewAssignPatDetails(Patdetails);
ViewAssignReferalDetails(RefDetails);
ViewAssignServicesDetails(ServiceDtls);
var data = jQuery.parseJSON(Patdetails);
if (data[0].PATIENT_TYPE_ID == 2) { ViewAssignRefLetDetails(RefLetterDetails); }
ViewAssignTransDetails2(TranModeDtls);
ViewAssignAmntDetails(BillDtls);
ViewMultiDiscounttypes(MutilDiscDtls);
$('[id*=gv_services_header] tr td input[type=text]').attr('disabled', true);
$('[id*=gv_services_header] tr td input[type=button]').attr('disabled', true);
$('[id*=gv_services_header] tr td select').attr('disabled', true);
$('[id*=gv_services_header] tr td input[type=checkbox]').attr('disabled', true);
$('[id*=gvServices] tr td input[type=checkbox]').attr('disabled', true);
$('[id*=gvServices] tr:has(td) input[type=text]').attr('disabled', 'true');
$('[id*=gvServices] tr:has(td) input[type=button]').attr('disabled', 'true');
$('[id*=gvServices] tr:has(td) input[type=checkbox]').attr('disabled', 'true');
$('[id*=gvServices] tr:has(td) select').attr('disabled', 'true');
$('.divmanage i').css('display', 'none'); $('#divconsentfrom')[0].style.display = 'none'; DivSrvConS.style.display = "none";
//classHideCmpAmts();
}
function ViewAssignRefLetDetails(result) {
result = jQuery.parseJSON(result);
if (result.length > 0) {
document.getElementById('' + ctrlcom + '_uccorporate_ucRefLetterNo_txtSearchControl').value = result[0].REFERAL_LETTER_NO;
document.getElementById('' + ctrlcom + '_uccorporate_txtRefLetIssuedby').value = result[0].LETTER_ISSUED_BY;
var issuedt = new Date(jQuery.parseJSON(result[0].REFERRAL_LETTER_ISSUE_DT.split('(')[1].split(')')[0])).format('dd-MMM-yyyy');
var validitydt = new Date(jQuery.parseJSON(result[0].REFERRAL_VALIDITY_DT.split('(')[1].split(')')[0])).format('dd-MMM-yyyy');
document.getElementById('' + ctrlcom + '_uccorporate_txtRefLetIssueDt').value = issuedt;
document.getElementById('' + ctrlcom + '_uccorporate_txtRefLetValidDt').value = validitydt;
}
}
function ViewAssignAmntDetails(result) {
result = jQuery.parseJSON(result);
if (result.length > 0) {
if (result[0].BILL_AMOUNT > 0) {
document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatgross').value = result[0].BILL_AMOUNT;
document.getElementById('' + ctrlcom + '_ReceiptControl2_txtgrosstotal').value = result[0].BILL_AMOUNT;
document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatNet').value = parseFloat(result[0].NET_AMOUNT);
document.getElementById('' + ctrlcom + '_ReceiptControl2_txtTotalNet').value = parseFloat(result[0].NET_AMOUNT);
document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatientReceiptAmt').value = parseFloat(result[0].PAID_AMOUNT);
document.getElementById('' + ctrlcom + '_ReceiptControl2_txtTotalReciptAmt').value = parseFloat(result[0].PAID_AMOUNT);
document.getElementById('' + ctrlcom + '_ReceiptControl2_txtTotalDue').value = result[0].DUE_AMOUNT;
document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatdue').value = result[0].DUE_AMOUNT;
document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatgrossamt').value = parseFloat(result[0].CONCESSION_AMOUNT);
document.getElementById('' + ctrlcom + '_ReceiptControl2_txtgrossamttotal').value = parseFloat(result[0].CONCESSION_AMOUNT);
document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatdis').value = parseFloat(result[0].CONCESSION);
document.getElementById('' + ctrlcom + '_ReceiptControl2_txtreceiptAmount').value = parseFloat(result[0].PAID_AMOUNT);
}
}
}
function ViewAssignPatDetails(input) {
input = jQuery.parseJSON(input);
input[0].COMPANY_NAME = input[0].COMPANY_NAME == undefined || null ? '' : input[0].COMPANY_NAME;
input[0].OCCUPATION = input[0].OCCUPATION == undefined || null ? '' : input[0].OCCUPATION;
if (input[0].PATIENT_TYPE_ID == 2) {
document.getElementById('' + ctrlcom + '_uccorporate_CmpLookup_txtSearchControl').value = input[0].COMPANY;
document.getElementById('' + ctrlcom + '_uccorporate_txtMedcard').value = input[0].CARD_NO;
document.getElementById('' + ctrlcom + '_uccorporate_txtEmpCd').value = input[0].EMPLOYEE_ID1;
document.getElementById('' + ctrlcom + '_uccorporate_txtEmpName').value = input[0].EMP_NAME;
}
document.getElementById('' + ctrlcom + '_uccorporate_ddlPaymentBy').value = input[0].PATIENT_TYPE_ID;
document.getElementById('' + ctrlcom + '_umrPatientDetails_lblPatName').innerHTML = input[0].DISPLAY_NAME;
document.getElementById('' + ctrlcom + '_umrPatientDetails_Umrlookup_txtSearchControl').value = input[0].UMR_NO;
document.getElementById('' + ctrlcom + '_umrPatientDetails_lblgender').innerHTML = input[0].GENDER;
if (input[0].AGE.split(',')[0] == "0") { }
document.getElementById('' + ctrlcom + '_umrPatientDetails_lblagedob').innerHTML = input[0].AGE.split(',')[0] + "(Ys)" + "/" + new Date(jQuery.parseJSON(input[0].DOB.split('(')[1].split(')')[0])).format(document.getElementById('' + ctrlcom + '_umrPatientDetails_hdndtfmt').value);
document.getElementById('' + ctrlcom + '_umrPatientDetails_lbloccupation').innerHTML = input[0].OCCUPATION_NAME;
document.getElementById('' + ctrlcom + '_umrPatientDetails_lblmothername').innerHTML = input[0].MOTHER_NAME;
document.getElementById('' + ctrlcom + '_umrPatientDetails_lblpattype').innerHTML = input[0].PATIENT_TYPE_NAME;
document.getElementById('' + ctrlcom + '_umrPatientDetails_lblcmpname').innerHTML = input[0].COMPANY_NAME;
if (input[0].RELATIONSHIP == 'Self') {
document.getElementById('' + ctrlcom + '_umrPatientDetails_lblrespperson').innerHTML = 'Responsible';
document.getElementById('' + ctrlcom + '_umrPatientDetails_lblfathername').innerHTML = 'Self';
}
else {
document.getElementById('' + ctrlcom + '_umrPatientDetails_lblrespperson').innerHTML = input[0].RELATIONSHIP;
document.getElementById('' + ctrlcom + '_umrPatientDetails_lblfathername').innerHTML = input[0].RES_PERSON_NAME;
}
document.getElementById('' + ctrlcom + '_umrPatientDetails_lblrefdoc').innerHTML = input[0].DOCTOR_NAME;
document.getElementById('' + ctrlcom + '_umrPatientDetails_hdnGenderID').value = input[0].GENDER_ID;

}
function ViewAssignReferalDetails(data) {
data = jQuery.parseJSON(data);
if (data != "") {
for (i = 0; i < data.length; i++) {
var Source = data[i].REFERAL_SOURCE_ID;
var Name = data[i].REFERL_NAME;
var ReferalClass = data[i].REFERAL_CLASS_ID;
var Address = data[i].ADDRESS1;
var Phone = data[i].MOBILE_PHONE;
var id = data[i].REFERL_ID;

if (i == 0) {
GlobalMyData1 = new Array();
multiDimArrayR1(i, Source, Name, id, ReferalClass, Address, Phone, id);
$.each(GlobalMyData1, function (ArrIndex, ChngRowIndex) {
document.getElementById('' + ctrlcom + '_ucReferal_ddlreferral').value = Source;
document.getElementById('' + ctrlcom + '_ucReferal_ucreferalname_txtSearchControl').value = Name;

document.getElementById('' + ctrlcom + '_ucReferal_txtrefaddr').value = Address;
document.getElementById('' + ctrlcom + '_ucReferal_txtRefPhone').value = Phone;
document.getElementById('' + ctrlcom + '_ucReferal__hdnID').value = id;

});
if ($('[id*=ddlreferral]').find('option:selected').text() == "Walk-in") {
document.getElementById('' + ctrlcom + '_ucReferal_ucreferalname_txtSearchControl').disabled = true;

document.getElementById('' + ctrlcom + '_ucReferal_txtrefaddr').disabled = true;
document.getElementById('' + ctrlcom + '_ucReferal_txtRefPhone').disabled = true;
document.getElementById('lk_btn_ctl00_ContentPlaceHolder1_ucReferal_ucreferalname').disabled = true;
document.getElementById('' + ctrlcom + '_ucReferal_ucreferalname_txtSearchControl').style.border = '1px solid rgb(190,190,190)';
}
}
if (i == 1) {
GlobalMyData2 = new Array();
multiDimArrayR2(i, Source, Name, id, ReferalClass, Address, Phone, id);

}
if (i == 2) {
GlobalMyData3 = new Array();
multiDimArrayR3(i, Source, Name, id, ReferalClass, Address, Phone, id);

}
if (i == 3) {
GlobalMyData4 = new Array();
multiDimArrayR4(i, Source, Name, id, ReferalClass, Address, Phone, id);

}
}
}
}
function ViewMultiDiscounttypes(input) {
if (input != " ") {
input = jQuery.parseJSON(input);
var session_id = document.getElementById('' + ctrlcom + '_HDNSESSIONID').value;
var ddlreport = '';
GetNonAsync(
"PatientRegistration.asmx/Get_Dscnttype",
{ session_id: session_id },
function (Mmodule) {
if (Mmodule != null) {
relation1 = Mmodule;
}
},
function (jqXHR, textStatus, errorThrown) {
});
if (input != null) {
if (input.length > 0) {
document.getElementById('' + ctrlcom + '_ReceiptControl2_chkismultiple').checked = true;
$('#'+ ctrlcom + '_ReceiptControl2_Div2')[0].style.display = 'block';
$("table[id*=gvMultipleConcession] tr:has(td)").each(function (e) {
$(this).remove();
});
for (var i = 0; i < input.length; i++) {
View_fn_AddRowWithDetais(input[i].CONCESSION_TYPE_ID, input[i].CARD_NO, input[i].CONCESSION_MODE_ID, input[i].CONCESSION_PERCENT, input[i].CONCESSION_AMOUNT, input[i].CNCSN_AUTH_ID, input[i].CONCESSION_AUTHOR);
}
$($("table[id*=gvMultipleConcession] tr:has(td)").find('input[type=text]')).attr('disabled', 'disabled');
$($("table[id*=gvMultipleConcession] tr:has(td)").find('input[type=button]')).attr('disabled', 'disabled');
$($("table[id*=gvMultipleConcession] tr:has(td)").find('select')).attr('disabled', 'disabled');
}
}
}
document.getElementById('' + ctrlcom + '_UCServices_lblheadsrvname').innerHTML = "Add Consultations";
}
function ViewAssignServicesDetails(result) {
result = jQuery.parseJSON(result);
GetNonAsync("GridService.asmx/BindVisitType",
{},
function (jdata) {
var _optionsVal = ''; var _VisitVal = '';
if (jdata.d != null) {
VisitTypes = jdata.d;
}
for (var i = 0; i < jdata.d.length; i++) {
if (document.getElementById('' + ctrlcom + '_UCServices_rbtnSrvsAndCons_0').checked == true) {
if (jdata.d[i]["ENTITY_VALUE_CD"] == "NORMAL")
_VisitVal += "<OPTION selected value='" + jdata.d[i]["ENTITY_VALUE_ID"] + "'>" + jdata.d[i]["ENTITY_VALUE_NAME"] + "</OPTION>";
if (jdata.d[i]["ENTITY_VALUE_CD"] == "EMER")
_VisitVal += "<OPTION  value='" + jdata.d[i]["ENTITY_VALUE_ID"] + "'>" + jdata.d[i]["ENTITY_VALUE_NAME"] + "</OPTION>";
}
else {
if (jdata.d[i]["ENTITY_VALUE_CD"] == "NORMAL") {
_VisitVal += "<OPTION selected value='" + jdata.d[i]["ENTITY_VALUE_ID"] + "'>" + jdata.d[i]["ENTITY_VALUE_NAME"] + "</OPTION>";
}
else {
_VisitVal += "<OPTION  value='" + jdata.d[i]["ENTITY_VALUE_ID"] + "'>" + jdata.d[i]["ENTITY_VALUE_NAME"] + "</OPTION>";
}

}
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
if (result[i].DOCTOR_ID > 0) {
result[i].DOCTOR_ID;
var visittypeid = result[i].CONSULTATION_TYPE_ID;
fn_AddFilterRow_pkgbillSelection('G', 'N', 'N', 'N', 'N', 'N', sno, result[i].VALUE, result[i].DOCTOR, result[i].SERVICE_CD, 'Consultation', result[i].RATE, result[i].CONCESSION, result[i].RATE, '', '', '', 0, 0, 1, result[i].Doctor_id,
result[i].Tariff_Id, '', 'N', '', '', 0, '', 0, 0, result[i].RATE, 0, 0, '', '', result[i].PRIV_SRV_POSTED_DT, 0, '', '', '', '', result[i].Department_id, 4, '1', '1', 0, 0, visittypeid, result[i].SLOT_ID, result[i].SLOT_TIME, result[i].SLOT_ID);
}
document.getElementById('' + ctrlcom + '_ReceiptControl2_Search3_txtSearchControl').value = result[i].DUE_AUTHER;
document.getElementById('' + ctrlcom + '_ReceiptControl2_ucdueauth_txtSearchControl').value = result[i].CONCESSION_AUTHER;
}

DisabledCntrl();
}
function View_fn_AddRowWithDetais(Discounttypeid, cardno, ddlmodeid, percentage, amount, authid, authname) {
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



Pkgindex++;
}*/

function ClosingUploadPhoto() {
    $('[id*=divUploadPhoto]')[0].style.display = 'none';
}
/*
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
umr_no = $('#'+ ctrlcom + '_Umrlookup_txtSearchControl').val();
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
fn_AddFilterRow_pkgbillSelection('G', 'N', 'N', 'N', 'N', 'N', 1, 2, doctorname, doctorcd, 'Consultation', _price, 0, _price, '', '', '', 0, 0, 1, _doctor_id, 1, '', 'N', '', '', 0, '', 0, 0, _price, 0, 0, '', '', _lastvisitedDt, 0, '', '', '', '', deptid, '4', 0, 0, 0, 0, VisitTypeId);
$('[id$=gvServices] tr').filter(':eq(' + 2 + ')').find('input[type=text][id*=txtServiceName]').attr('disabled', true);
$('[id$=gvServices] tr').filter(':eq(' + 2 + ')').find('input[type=text][id*=txtServiceCode]').attr('disabled', true);
$('[id$=gvServices] tr').filter(':eq(' + 2 + ')').find('input[type=button][id*=BtnSrvSearch]').attr('disabled', true);
}
}
},
function () {
});

}
*/
function RemoveReqDoctor(index) {
    var row = index;
    var docid = $('[id$=gvServices] tr').filter(':eq(' + row + ')').find('input[type=hidden][id*=hdnDoctorID]').val();
    $("table[id$=tbl_tbl_PatRequisitions] tbody tr:has(td)").each(function () {
        var reqid = $(this).closest('tr').attr('data-key');
        if (reqid > 0) {
            if (reqid == docid) {
                $(this).closest('tr').find('input[type=checkbox]')[0].checked = false;
            }
        }
    });
}