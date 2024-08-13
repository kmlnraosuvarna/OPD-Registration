var _RegXml = ''; var _Cnsltxml = ''; var _recpayxml = ''; var _isQuickreg = 'N'; var UmrNO = ''; var Pat_ID = ''; var BType = '';
var _PaidAmnt = 0; var _RegPaidAmnt = 0; var _ConsPaidAmnt = 0; var PAYMENT_TYPE_ID = ''; var CnsCount = 0;
var b_cmp_net = 0; var b_cmp_grs_amt = 0; var b_cmp_cnc_amt = 0; var b_cmp_pct = 0;
var c_cmp_net = 0; var c_cmp_grs_amt = 0; var c_cmp_cnc_amt = 0; var c_cmp_pct = 0;
var referral_save_count = ''; var Rfrl_Ltr_Id = '';
var _app_pat_id = 0; var __apptID = 0;
var _post_cons_ref_id = '0'; var doc_rev_no = '0'; var ff_doc_id = '0';
var OrderingPhyCount = 0;
var fobillamount = 0;
var ctrlcom = 'ctl00_ContentPlaceHolder1';

function httpGet(theUrl) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", theUrl, false); // false for synchronous request
    xmlHttp.send(null);
    return xmlHttp.responseText;
}

function ConfirmationOPDSave(obj, param, form_name, savectrl) {
    savectrl.value = 1;
    var SaveAlert = document.getElementById(obj);
    if (SaveAlert != null) {
        if (SaveAlert.value == '2') {
            //  DisableKeys();
            onOkClickToaster(param);
            return true;
        }
        else {
            //   DisableKeys();
            $(".smessagebox").scustommessagebox(2, form_name, "Do you want to save the record?", onClickOkOPD, param, OnCancelOPDSave, savectrl);
            return false;
        }
    }
}
function onClickOkOPD(param) {
    $('#progress').show();
    OnSuccessContinue(param);
}
function OnCancelOPDSave(savectrl) {
    savectrl.value = 0;
    //ctl00_ContentPlaceHolder1_headerControl1_hdnisSaveDisable.value = 0;
    EnableKeys();
}


function CheckMandatoryfieldsData(obj) {
    var reg_type = $('#' + ctrlcom + '_ddlRegType').val();
    if (reg_type == undefined || reg_type == null || reg_type == '') { reg_type = 0; }
    if (reg_type != 0) {
        $('#' + ctrlcom + '_hdnregtypemain').val(reg_type);
    }
    if (document.getElementById('' + ctrlcom + '_pre_regi').value == '5') {
        alert_count = 0;
        OSPSave(obj);
        if (alert_count == 1) {
            return false;
        }
        if (ctl00_ContentPlaceHolder1_headerControl1_hdnisSaveDisable.value == 1)
            return false;
        return ConfirmationOPDSave(obj, 'OSP', 'OPD Bill', ctl00_ContentPlaceHolder1_headerControl1_hdnisSaveDisable);
    }
    if (document.getElementById('' + ctrlcom + '_pre_regi').value == '4') {
        if (ctl00_ContentPlaceHolder1_headerControl1_hdnisSaveDisable.value == 1)
            return false;
        return ConfirmationOPDSave(obj, 'IndentSave', 'OPD Bill', ctl00_ContentPlaceHolder1_headerControl1_hdnisSaveDisable);
    } if (document.getElementById('' + ctrlcom + '_pre_regi').value == '4') {
        if (ctl00_ContentPlaceHolder1_headerControl1_hdnisSaveDisable.value == 1)
            return false;
        return ConfirmationOPDSave(obj, 'IndentSave', 'OPD Bill', ctl00_ContentPlaceHolder1_headerControl1_hdnisSaveDisable);
    }
    if (document.getElementById('' + ctrlcom + '_chk_old').checked == true) {
        IsRegisteredValidations();
        if (OPcnt == 1) {
            return false;
        }
        if (ctl00_ContentPlaceHolder1_headerControl1_hdnisSaveDisable.value == 1)
            return false;
        return ConfirmationOPDSave(obj, 'OPD', 'OPD Bill', ctl00_ContentPlaceHolder1_headerControl1_hdnisSaveDisable);
    }
    else {
        Objct = obj;
        _isQuickreg = "N";
        ddlregtype = document.getElementById('' + ctrlcom + '_ddlRegType');
        ddlregtypeIndex = document.getElementById('' + ctrlcom + '_ddlRegType').selectedIndex;
        var val = ddlregtypeIndex;
        if (ddlregtype[val].innerHTML == 'Emergency') {
            _isQuickreg = "Y";
            if (document.getElementById('' + ctrlcom + '_ddlTitle').value == '0') {
                $(".stoast").toastText("warning", "Please select Title!.", 5, 3);
                document.getElementById('' + ctrlcom + '_ddlTitle').focus();
                return false;
            }
            if (document.getElementById('' + ctrlcom + '_txtFirstName').value == '') {
                $(".stoast").toastText("warning", "Please Enter FirstName!.", 5, 3);
                document.getElementById('' + ctrlcom + '_txtFirstName').focus();
                return false;
            }
            if (document.getElementById('' + ctrlcom + '_newAgeUc_txtDob').value == "__-__-____") {
                $(".stoast").toastText("warning", "Please Enter Dob !.", 5, 3);
                document.getElementById('' + ctrlcom + '_newAgeUc_txtDob').focus();
                return false;
            }
            var Nationality_Value = 'N';
            var def_nation = $('#' + ctrlcom + '_hdnddlNationality').val();
            var sel_nation = $('#' + ctrlcom + '_ddlNationality').val();
            if (def_nation != sel_nation) { Nationality_Value = 'Y'; }
            var _mobileValidate = MobileNoSettingSavevalidate('ctl00_ContentPlaceHolder1_Address1_txtMobile1', '', 'OPD', Nationality_Value);
            if (_mobileValidate == false) {
                return _mobileValidate;
            }
        }
        else {
            if (document.getElementById('' + ctrlcom + '_chkisold').checked == true) {
                if (document.getElementById('' + ctrlcom + '_ucUMRno_txtSearchControl').value == '') {
                    $(".stoast").toastText("warning", "Please select the UMR number!..", 5, 3);
                    document.getElementById('' + ctrlcom + '_ucUMRno_txtSearchControl').focus();
                    return false;
                }
            }
            var renewal = $('#' + ctrlcom + '_chkisold')[0].checked;
            if (renewal != true) {
                if (document.getElementById('' + ctrlcom + '_ddlRegType').value == 6 || document.getElementById('' + ctrlcom + '_ddlRegType').value == 7) {
                    if ((document.getElementById('' + ctrlcom + '_ddlRegType').value == 6 || document.getElementById('' + ctrlcom + '_ddlRegType').value == 7) && document.getElementById('' + ctrlcom + '_UcStaffName_txtSearchControl').value == "") {
                        $(".stoast").toastText("warning", "Please Select Staff Name", 5, 3);
                        document.getElementById('' + ctrlcom + '_UcStaffName_txtSearchControl').focus();
                        return false;
                    }
                    if (document.getElementById('' + ctrlcom + '_ddlRegType').value == 7 && document.getElementById('' + ctrlcom + '_StaffRelation').value == 0) {
                        $(".stoast").toastText("warning", "Please Select Staff Relation", 5, 3);
                        document.getElementById('' + ctrlcom + '_StaffRelation').focus();
                        return false;
                    }
                }
                else if (document.getElementById('' + ctrlcom + '_ddlRegType').value == 12) {
                    if (document.getElementById('' + ctrlcom + '_ddlhctype').value == 0) {
                        $(".stoast").toastText("warning", "Please select Health Card type", 5, 3);
                        document.getElementById('' + ctrlcom + '_ddlhctype').focus();
                        return false;
                    }
                    if (document.getElementById('' + ctrlcom + '_ddlRegType').value == 12 && document.getElementById('' + ctrlcom + '_StaffRelation').value == 0) {
                        $(".stoast").toastText("warning", "Please enter relation to patient!", 5, 3);
                        document.getElementById('' + ctrlcom + '_StaffRelation').focus();
                        return false;
                    }
                }
            }
            if (document.getElementById('' + ctrlcom + '_rbt_pat_type_1').checked == true || document.getElementById('' + ctrlcom + '_rbt_pat_type_2').checked == true) {

                if (document.getElementById('' + ctrlcom + '_dd_reg_source').value == '0') {
                    $(".stoast").toastText("warning", "Please select VIP Source!.", 5, 3);
                    document.getElementById('' + ctrlcom + '_dd_reg_source').focus();
                    return false;
                }
                if (document.getElementById('' + ctrlcom + '_source_remarks').value == '') {
                    $(".stoast").toastText("warning", "Please enter your remarks!!.", 5, 3);
                    document.getElementById('' + ctrlcom + '_source_remarks').focus();
                    return false;
                }

            }
            if (document.getElementById('' + ctrlcom + '_ddlTitle').value == '0') {
                $(".stoast").toastText("warning", "Please select Title!.", 5, 3);
                document.getElementById('' + ctrlcom + '_ddlTitle').focus();
                return false;
            }
            var ddlDisplayName = document.getElementById('' + ctrlcom + '_hdnDisplayNameSetting');
            ddlDisplayName = ddlDisplayName.value;
            var fname = '', mname = '', lname = '';
            var val = 2;
            if (val > -1) {
                if (ddlDisplayName == 'First Name And Last Name') {

                    var FirstLastName = document.getElementById('ctl00_ContentPlaceHolder1_hdnFirstLastName').value; ;
                    FirstLastName = FirstLastName.split(',');
                    for (var i = 0; i < FirstLastName.length; i++) {
                        if (FirstLastName[i] == 1) {
                            if (document.getElementById('' + ctrlcom + '_txtFirstName').value == '') {
                                $(".stoast").toastText("warning", "Please Enter FirstName!.", 5, 3);
                                document.getElementById('' + ctrlcom + '_txtFirstName').focus();
                                return false;
                            }
                        }
                        if (FirstLastName[i] == 2) {
                            if (document.getElementById('' + ctrlcom + '_txtLastName').value == '') {
                                $(".stoast").toastText("warning", "Please Enter LastName!.", 5, 3);
                                document.getElementById('' + ctrlcom + '_txtLastName').focus();
                                return false;
                            }
                        }
                    }
                }
                else if (ddlDisplayName == 'First Name And Middle Name And Last Name') {
                    var FirstMiddleLastName = document.getElementById('ctl00_ContentPlaceHolder1_hdnFirstMiddleLastName').value; ;
                    FirstMiddleLastName = FirstMiddleLastName.split(',');
                    for (var i = 0; i < FirstMiddleLastName.length; i++) {
                        if (FirstMiddleLastName[i] == 1) {
                            if (document.getElementById('' + ctrlcom + '_txtFirstName').value == '') {
                                $(".stoast").toastText("warning", "Please Enter FirstName!.", 5, 3);
                                document.getElementById('' + ctrlcom + '_txtFirstName').focus();
                                return false;
                            }
                        } if (FirstMiddleLastName[i] == 2) {
                            if (document.getElementById('' + ctrlcom + '_txtMiddleName').value == '') {
                                $(".stoast").toastText("warning", "Please Enter MiddleName!.", 5, 3);
                                document.getElementById('' + ctrlcom + '_txtMiddleName').focus();
                                return false;
                            }
                        }
                        if (FirstMiddleLastName[i] == 3) {
                            if (document.getElementById('' + ctrlcom + '_txtLastName').value == '') {
                                $(".stoast").toastText("warning", "Please Enter LastName!.", 5, 3);
                                document.getElementById('' + ctrlcom + '_txtLastName').focus();
                                return false;
                            }
                        }
                    }
                }
                else if (ddlDisplayName == 'First Name') {
                    if (document.getElementById('' + ctrlcom + '_txtFirstName').value == '') {
                        $(".stoast").toastText("warning", "Please Enter FirstName!.", 5, 3);
                        document.getElementById('' + ctrlcom + '_txtFirstName').focus();
                        return false;
                    }
                }
            }

            if (document.getElementById('' + ctrlcom + '_ddlGender').selectedIndex == "0") {
                $(".stoast").toastText("warning", "Please select Gender!.", 5, 3);
                document.getElementById('' + ctrlcom + '_ddlGender').focus();
                return false;
            }
            if (document.getElementById('' + ctrlcom + '_newAgeUc_txtDob').value == "__-__-____") {
                $(".stoast").toastText("warning", "Please Enter Dob !.", 5, 3);
                document.getElementById('' + ctrlcom + '_newAgeUc_txtDob').focus();
                return false;
            }
            //   if (document.getElementById('' + ctrlcom + '_hdnfatherrequired').value.toLowerCase() == 'true') {
            if (document.getElementById('ctl00_ContentPlaceHolder1_hdnKineNameMandatary').value == 'Y') {
                // if (document.getElementById('ctl00_ContentPlaceHolder1_ddlPatientType').value != '1') {
                if (document.getElementById('ctl00_ContentPlaceHolder1_ddlResPerson').value == 0) {
                    $(".stoast").toastText("Warning", "Please Select KIN Name", 5, 3);
                    document.getElementById('ctl00_ContentPlaceHolder1_ddlResPerson').focus();
                    return false;
                }
                if (document.getElementById('ctl00_ContentPlaceHolder1_txtResPerson').value == 0) {
                    $(".stoast").toastText("Warning", "Please Enter Name Of Responsible Person", 5, 3);
                    document.getElementById('ctl00_ContentPlaceHolder1_txtResPerson').focus();
                    return false;
                }
                //}





            }
            //  }
             var clientname = $('[id*=hdnclientNameFor]').val();
    clientname = clientname.toUpperCase();
    if (clientname != 'MRRCH') {
        var ddlTitle = document.getElementById('' + ctrlcom + '_ddlTitle');
        var ddlTitleIndex = document.getElementById('' + ctrlcom + '_ddlTitle').selectedIndex;
        var val = ddlTitleIndex;
        if (ddlTitle[val].innerHTML != '' && ddlTitle[val].innerHTML != '--select--') {
            /*Age Calculation*/
            var _years = document.getElementById('' + ctrlcom + '_newAgeUc_txtYear').value;
            var _months = document.getElementById('' + ctrlcom + '_newAgeUc_txtMonths').value;
            var _days = document.getElementById('' + ctrlcom + '_newAgeUc_txtDay').value;
            var msg = '';
            if ((_years != '0' || _years != '') || (_months != '0' || _months != '') || (_days != '0' || _days != '')) {
                if (ddlTitle[val].innerHTML == 'Mr' || ddlTitle[val].innerHTML == 'Mrs' || ddlTitle[val].innerHTML == 'Ms' || ddlTitle[val].innerHTML == 'Dr' || ddlTitle[val].innerHTML == 'Prof' || ddlTitle[val].innerHTML == 'Capt') {
                    if (_years >= 17) {
                    }
                    else {
                        msg = "Please Enter Proper age of " + ddlTitle[val].innerHTML + " !!!";
                        $(".stoast").toastText("warning", msg, 5, 3);
                        document.getElementById('' + ctrlcom + '_newAgeUc_txtYear').value = 0;
                        document.getElementById('' + ctrlcom + '_newAgeUc_txtDob').value = "__-__-____";
                        $('#' + ctrlcom + '_newAgeUc_txtDob').addClass('red');
                        document.getElementById('' + ctrlcom + '_newAgeUc_txtYear').value = 0;
                        document.getElementById('' + ctrlcom + '_newAgeUc_txtMonths').value = 0;
                        document.getElementById('' + ctrlcom + '_newAgeUc_txtDay').value = 0;
                        document.getElementById('' + ctrlcom + '_newAgeUc_txtYear').focus();
                        return false;
                    }
                }

                if (ddlTitle[val].innerHTML == 'Master' || ddlTitle[val].innerHTML == 'Baby' || ddlTitle[val].innerHTML == 'Baby Of') {
                    if (_years < 17) {

                    }
                    else {
                        msg = "Please Enter Proper age of " + ddlTitle[val].innerHTML + " !!!";
                        $(".stoast").toastText("warning", msg, 5, 3);
                        //                        alert(msg);
                        document.getElementById('' + ctrlcom + '_newAgeUc_txtYear').value = 0;
                        document.getElementById('' + ctrlcom + '_newAgeUc_txtDob').value = "__-__-____";
                        $('#' + ctrlcom + '_newAgeUc_txtDob').addClass('red');
                        _years = 0;
                        _days = 0;
                        _months = 0;
                        document.getElementById('' + ctrlcom + '_newAgeUc_txtYear').focus();
                        return false;
                    }
                }
            }

            if (ddlTitle[val].innerHTML == 'Baby Boy' || ddlTitle[val].innerHTML == 'Baby Girl') {

                if (_years == 0) {
                    if (_months < 3) {
                        if (_days <= 31) {
                        }
                        else {
                            msg = "Please Enter Proper age of " + ddlTitle[val].innerHTML + " Patient!!!";
                            $(".stoast").toastText("warning", msg, 5, 3);
                            //                            alert(msg);
                            document.getElementById('' + ctrlcom + '_newAgeUc_txtDay').value = 0;
                            document.getElementById('' + ctrlcom + '_newAgeUc_txtDob').value = "__-__-____";
                            $('#' + ctrlcom + '_newAgeUc_txtDob').addClass('red');
                            _years = 0;
                            _days = 0;
                            _months = 0;
                            document.getElementById('' + ctrlcom + '_newAgeUc_txtDay').focus();
                            return false;
                        }
                    }
                    else {
                        msg = "Please Enter Proper age of " + ddlTitle[val].innerHTML + " Patient!!!";
                        $(".stoast").toastText("warning", msg, 5, 3);
                        document.getElementById('' + ctrlcom + '_newAgeUc_txtMonths').value = 0;
                        document.getElementById('' + ctrlcom + '_newAgeUc_txtDob').value = "__-__-____";
                        $('#' + ctrlcom + '_newAgeUc_txtDob').addClass('red');
                        _years = 0;
                        _days = 0;
                        _months = 0;
                        document.getElementById('' + ctrlcom + '_newAgeUc_txtMonths').focus();
                        return false;
                    }
                }
                else {
                    msg = "Please Enter Proper age of " + ddlTitle[val].innerHTML + " Patient!!!";
                    $(".stoast").toastText("warning", msg, 5, 3);
                    document.getElementById('' + ctrlcom + '_newAgeUc_txtYear').value = 0;
                    document.getElementById('' + ctrlcom + '_newAgeUc_txtDob').value = "__-__-____";
                    $('#' + ctrlcom + '_newAgeUc_txtDob').addClass('red');
                    _years = 0;
                    _days = 0;
                    _months = 0;
                    document.getElementById('' + ctrlcom + '_newAgeUc_txtYear').focus();
                    return false;
                }

            }
            /*Age Calculation ends*/

        }
    }
            if ($('[id*=ddlNationality]').find('option:selected').text().trim() == "--select--" || $('[id*=ddlNationality]').val() == '0') {
                $(".stoast").toastText("warning", "Please Select Nationality !.", 5, 3);
                document.getElementById('' + ctrlcom + '_ddlNationality').focus();
                return false;
            }
            if ($('[id*=ddlPatientType]').find('option:selected').text().trim() == "--select--" || $('[id*=ddlPatientType]').find('option:selected').val() == "0") {
                $(".stoast").toastText("warning", "Please Select Patient Type !.", 5, 3);
                document.getElementById('' + ctrlcom + '_ddlPatientType').focus();
                return false;
            }
            $("table[id$=gvServices] tr:has(td)").each(function (e) {
                var _hdnserviceid = $(this).closest('tr').find("input[type=hidden][id*=hdnServiceID]").val();
                if (parseInt(_hdnserviceid) > 2) {

                    OrderingPhyCount = 1;
                }
            });
            if (document.getElementById('' + ctrlcom + '_pre_regi').value != 5) {
                if (document.getElementById('' + ctrlcom + '_hdndtrmandatary').value == 'YES' || OrderingPhyCount == 1) {
                    if (document.getElementById('' + ctrlcom + '_ucConsultant_txtSearchControl').value == '' || document.getElementById('' + ctrlcom + '_ucConsultant__hiddenID').value == '') {
                        $(".stoast").toastText("warning", "Please select Consultant Doctor.", 5, 3);
                        document.getElementById('' + ctrlcom + '_ucConsultant_txtSearchControl').focus();
                        OrderingPhyCount = 0;
                        return false;
                    }
                }
            }
            var ReferalDoctor = document.getElementById('' + ctrlcom + '_ucReferal_ucreferalname_txtSearchControl').value;
            var ClientName = document.getElementById('' + ctrlcom + '_hdnClientName').value;
            if (document.getElementById('' + ctrlcom + '_hdnRefReq').value == "Yes") {
                SelectedRowIndex = SelectedRowIndex == 0 ? 1 : SelectedRowIndex;
                if (SelectedRowIndex == 1) {
                    if (document.getElementById('' + ctrlcom + '_ucReferal_ddlreferral').value == 0) {
                        $(".stoast").toastText("warning", "Please select the type of referral!", 5, 3);
                        document.getElementById('' + ctrlcom + '_ucReferal_ddlreferral').focus();
                        return false;
                    }
                }
                if (document.getElementById('' + ctrlcom + '_ucReferal_ddlreferral').value > '0') {
                    if (document.getElementById('' + ctrlcom + '_ucReferal_ddlreferral').value != '27') {
                        if (myMultiDatar1 != '') {
                            if (document.getElementById("" + ctrlcom + "_ucReferal_hdnreferaldisable").value != "YES") {
                                if (myMultiDatar1[0]["Source"] > 0) {
                                    if ((myMultiDatar1[0]["Name"]) == '') {
                                        $("#R1").addClass("select");
                                        $("#R2,#R3,#R4").removeClass("select");
                                        $(".stoast").toastText("warning", "Please select referred by for R1!!", 5, 3);
                                        document.getElementById('' + ctrlcom + '_ucReferal_ucreferalname_txtSearchControl').focus();
                                        return false;
                                    }
//                                    if ((myMultiDatar1[0]["ReferalClass"]) == '') {
//                                        if (document.getElementById("" + ctrlcom + "_ucReferal_hdnreferaldisable").value != "YES") {
//                                            $("#R1").addClass("select");
//                                            $("#R2,#R3,#R4").removeClass("select");
//                                            $(".stoast").toastText("warning", "Please select referral source for R1!!", 5, 3);
//                                            document.getElementById('' + ctrlcom + '_ucReferal_ucrfrlsrc_txtSearchControl').focus();
//                                            return false;
//                                        }
//                                    }
//                                    if ((myMultiDatar1[0]["referedTo"]) == '') {
//                                        if (document.getElementById("" + ctrlcom + "_ucReferal_hdnreferaldisable").value != "YES") {
//                                            $("#R1").addClass("select");
//                                            $("#R2,#R3,#R4").removeClass("select");
//                                            $(".stoast").toastText("warning", "Please Select ReferredTo for R1", 5, 3);
//                                            document.getElementById('' + ctrlcom + '_ucReferal_ucReferedto_txtSearchControl').focus();
//                                            return false;
//                                        }
//                                    }
                                }
                            }
                            else {
                                if (myMultiDatar1[0]["Source"] > 1) {
                                    if ((myMultiDatar1[0]["Name"]) == '') {
                                        $("#R1").addClass("select");
                                        $("#R2,#R3,#R4").removeClass("select");
                                        $(".stoast").toastText("warning", "Please select referred by for R1!!", 5, 3);
                                        document.getElementById('' + ctrlcom + '_ucReferal_ucreferalname_txtSearchControl').focus();
                                        return false;
                                    }
//                                    if ((myMultiDatar1[0]["ReferalClass"]) == '') {
//                                        if (document.getElementById("" + ctrlcom + "_ucReferal_hdnreferaldisable").value != "YES") {
//                                            $("#R1").addClass("select");
//                                            $("#R2,#R3,#R4").removeClass("select");
//                                            $(".stoast").toastText("warning", "Please select referral source for R1!!", 5, 3);
//                                            document.getElementById('' + ctrlcom + '_ucReferal_ucrfrlsrc_txtSearchControl').focus();
//                                            return false;
//                                        }
//                                    }
//                                    if ((myMultiDatar1[0]["referedTo"]) == '') {
//                                        if (document.getElementById("" + ctrlcom + "_ucReferal_hdnreferaldisable").value != "YES") {
//                                            $("#R1").addClass("select");
//                                            $("#R2,#R3,#R4").removeClass("select");
//                                            $(".stoast").toastText("warning", "Please Select ReferredTo for R1", 5, 3);
//                                            document.getElementById('' + ctrlcom + '_ucReferal_ucReferedto_txtSearchControl').focus();
//                                            return false;
//                                        }
//                                    }
                                }
                            }
                        }
                        if (myMultiDatar2 != '') {
                            if (document.getElementById("" + ctrlcom + "_ucReferal_hdnreferaldisable").value != "YES") {
                                if (myMultiDatar2[0]["Source"] > 0) {
                                    if ((myMultiDatar2[0]["Name"]) == '') {
                                        $("#R2").addClass("select");
                                        $("#R2").click();
                                        $("#R1,#R3,#R4").removeClass("select");
                                        $(".stoast").toastText("warning", "Please select referred by for R2!", 5, 3);
                                        document.getElementById('' + ctrlcom + '_ucReferal_ucreferalname_txtSearchControl').focus();
                                        return false;
                                    }
//                                    if ((myMultiDatar2[0]["ReferalClass"]) == '') {
//                                        if (document.getElementById("" + ctrlcom + "_ucReferal_hdnreferaldisable").value != "YES") {
//                                            $("#R2").addClass("select");
//                                            $("#R2").click();
//                                            $("#R1,#R3,#R4").removeClass("select");
//                                            $(".stoast").toastText("warning", "Please select referral source for R2!", 5, 3);
//                                            document.getElementById('' + ctrlcom + '_ucReferal_ucrfrlsrc_txtSearchControl').focus();
//                                            return false;
//                                        }
//                                    }
//                                    if ((myMultiDatar2[0]["referedTo"]) == '') {
//                                        if (document.getElementById("" + ctrlcom + "_ucReferal_hdnreferaldisable").value != "YES") {
//                                            $("#R2").addClass("select");
//                                            $("#R2").click();
//                                            $("#R1,#R3,#R4").removeClass("select");
//                                            $(".stoast").toastText("warning", "Please Select ReferredTo for R2", 5, 3);
//                                            document.getElementById('' + ctrlcom + '_ucReferal_ucReferedto_txtSearchControl').focus();
//                                            return false;
//                                        }
//                                    }
                                }
                                else {
                                    if (myMultiDatar2[0]["Source"] > 1) {
                                        if ((myMultiDatar2[0]["Name"]) == '') {
                                            $("#R2").addClass("select");
                                            $("#R2").click();
                                            $("#R1,#R3,#R4").removeClass("select");
                                            $(".stoast").toastText("warning", "Please select referred by for R2!", 5, 3);
                                            document.getElementById('' + ctrlcom + '_ucReferal_ucreferalname_txtSearchControl').focus();
                                            return false;
                                        }
//                                        if ((myMultiDatar2[0]["ReferalClass"]) == '') {
//                                            if (document.getElementById("" + ctrlcom + "_ucReferal_hdnreferaldisable").value != "YES") {
//                                                $("#R2").addClass("select");
//                                                $("#R2").click();
//                                                $("#R1,#R3,#R4").removeClass("select");
//                                                $(".stoast").toastText("warning", "Please select referral source for R2!", 5, 3);
//                                                document.getElementById('' + ctrlcom + '_ucReferal_ucrfrlsrc_txtSearchControl').focus();
//                                                return false;
//                                            }
//                                        }
//                                        if ((myMultiDatar2[0]["referedTo"]) == '') {
//                                            if (document.getElementById("" + ctrlcom + "_ucReferal_hdnreferaldisable").value != "YES") {
//                                                $("#R2").addClass("select");
//                                                $("#R2").click();
//                                                $("#R1,#R3,#R4").removeClass("select");
//                                                $(".stoast").toastText("warning", "Please Select ReferredTo for R2", 5, 3);
//                                                document.getElementById('' + ctrlcom + '_ucReferal_ucReferedto_txtSearchControl').focus();
//                                                return false;
//                                            }
//                                        }
                                    }
                                }

                            }
                        }
                        if (myMultiDatar3 != '') {
                            if (document.getElementById("" + ctrlcom + "_ucReferal_hdnreferaldisable").value != "YES") {
                                if (myMultiDatar3[0]["Source"] > 0) {
                                    if ((myMultiDatar3[0]["Name"]) == '') {
                                        $("#R3").addClass("select");
                                        $("#R3").click();
                                        $("#R1,#R2,#R4").removeClass("select");
                                        $(".stoast").toastText("warning", "Please select referred by for R3!", 5, 3);
                                        document.getElementById('' + ctrlcom + '_ucReferal_ucreferalname_txtSearchControl').focus();
                                        return false;
                                    }
//                                    if ((myMultiDatar3[0]["ReferalClass"]) == '') {
//                                        if (document.getElementById("" + ctrlcom + "_ucReferal_hdnreferaldisable").value != "YES") {
//                                            $("#R3").addClass("select");
//                                            $("#R3").click();
//                                            $("#R1,#R2,#R4").removeClass("select");
//                                            $(".stoast").toastText("warning", "Please select referral source for R3!", 5, 3);
//                                            document.getElementById('' + ctrlcom + '_ucReferal_ucrfrlsrc_txtSearchControl').focus();
//                                            return false;
//                                        }
//                                    }
//                                    if ((myMultiDatar3[0]["referedTo"]) == '') {
//                                        if (document.getElementById("" + ctrlcom + "_ucReferal_hdnreferaldisable").value != "YES") {
//                                            $("#R3").addClass("select");
//                                            $("#R3").click();
//                                            $("#R1,#R2,#R4").removeClass("select");
//                                            $(".stoast").toastText("warning", "Please Select ReferredTo for R3", 5, 3);
//                                            document.getElementById('' + ctrlcom + '_ucReferal_ucReferedto_txtSearchControl').focus();
//                                            return false;
//                                        }
//                                    }
                                }
                            }
                            else {
                                if (myMultiDatar3[0]["Source"] > 1) {
                                    if ((myMultiDatar3[0]["Name"]) == '') {
                                        $("#R3").addClass("select");
                                        $("#R3").click();
                                        $("#R1,#R2,#R4").removeClass("select");
                                        $(".stoast").toastText("warning", "Please select referred by for R3!", 5, 3);
                                        document.getElementById('' + ctrlcom + '_ucReferal_ucreferalname_txtSearchControl').focus();
                                        return false;
                                    }
//                                    if ((myMultiDatar3[0]["ReferalClass"]) == '') {
//                                        if (document.getElementById("" + ctrlcom + "_ucReferal_hdnreferaldisable").value != "YES") {
//                                            $("#R3").addClass("select");
//                                            $("#R3").click();
//                                            $("#R1,#R2,#R4").removeClass("select");
//                                            $(".stoast").toastText("warning", "Please select referral source for R3!", 5, 3);
//                                            document.getElementById('' + ctrlcom + '_ucReferal_ucrfrlsrc_txtSearchControl').focus();
//                                            return false;
//                                        }
//                                    }
//                                    if ((myMultiDatar3[0]["referedTo"]) == '') {
//                                        if (document.getElementById("" + ctrlcom + "_ucReferal_hdnreferaldisable").value != "YES") {
//                                            $("#R3").addClass("select");
//                                            $("#R3").click();
//                                            $("#R1,#R2,#R4").removeClass("select");
//                                            $(".stoast").toastText("warning", "Please Select ReferredTo for R3", 5, 3);
//                                            document.getElementById('' + ctrlcom + '_ucReferal_ucReferedto_txtSearchControl').focus();
//                                            return false;
//                                        }
//                                    }
                                }
                            }
                        }
                        if (myMultiDatar4 != '') {
                            if (document.getElementById("" + ctrlcom + "_ucReferal_hdnreferaldisable").value != "YES") {
                                if (myMultiDatar4[0]["Source"] > 0) {
                                    if ((myMultiDatar4[0]["Name"]) == '') {
                                        $("#R4").addClass("select");
                                        $("#R4").click();
                                        $("#R1,#R2,#R3").removeClass("select");
                                        $(".stoast").toastText("warning", "Please select referred by for R4!", 5, 3);
                                        document.getElementById('' + ctrlcom + '_ucReferal_ucreferalname_txtSearchControl').focus();
                                        return false;
                                    }
//                                    if ((myMultiDatar4[0]["ReferalClass"]) == '') {
//                                        if (document.getElementById("" + ctrlcom + "_ucReferal_hdnreferaldisable").value != "YES") {
//                                            $("#R3").addClass("select");
//                                            $("#R3").click();
//                                            $("#R1,#R2,#R4").removeClass("select");
//                                            $(".stoast").toastText("warning", "Please select referral source for R4!", 5, 3);
//                                            document.getElementById('' + ctrlcom + '_ucReferal_ucrfrlsrc_txtSearchControl').focus();
//                                            return false;
//                                        }
//                                    }
//                                    if ((myMultiDatar4[0]["referedTo"]) == '') {
//                                        if (document.getElementById("" + ctrlcom + "_ucReferal_hdnreferaldisable").value != "YES") {
//                                            $("#R3").addClass("select");
//                                            $("#R3").click();
//                                            $("#R1,#R2,#R4").removeClass("select");
//                                            $(".stoast").toastText("warning", "Please Select ReferredTo for R4", 5, 3);
//                                            document.getElementById('' + ctrlcom + '_ucReferal_ucReferedto_txtSearchControl').focus();
//                                            return false;
//                                        }
//                                    }
                                }
                            }
                            else {
                                if (myMultiDatar4[0]["Source"] > 1) {
                                    if ((myMultiDatar4[0]["Name"]) == '') {
                                        $("#R4").addClass("select");
                                        $("#R4").click();
                                        $("#R1,#R2,#R3").removeClass("select");
                                        $(".stoast").toastText("warning", "Please select referred by for R4!", 5, 3);
                                        document.getElementById('' + ctrlcom + '_ucReferal_ucreferalname_txtSearchControl').focus();
                                        return false;
                                    }
//                                    if ((myMultiDatar4[0]["ReferalClass"]) == '') {
//                                        if (document.getElementById("" + ctrlcom + "_ucReferal_hdnreferaldisable").value != "YES") {
//                                            $("#R3").addClass("select");
//                                            $("#R3").click();
//                                            $("#R1,#R2,#R4").removeClass("select");
//                                            $(".stoast").toastText("warning", "Please select referral source for R4!", 5, 3);
//                                            document.getElementById('' + ctrlcom + '_ucReferal_ucrfrlsrc_txtSearchControl').focus();
//                                            return false;
//                                        }
//                                    }
//                                    if ((myMultiDatar4[0]["referedTo"]) == '') {
//                                        if (document.getElementById("" + ctrlcom + "_ucReferal_hdnreferaldisable").value != "YES") {
//                                            $("#R3").addClass("select");
//                                            $("#R3").click();
//                                            $("#R1,#R2,#R4").removeClass("select");
//                                            $(".stoast").toastText("warning", "Please Select ReferredTo for R4", 5, 3);
//                                            document.getElementById('' + ctrlcom + '_ucReferal_ucReferedto_txtSearchControl').focus();
//                                            return false;
//                                        }
//                                    }
                                }
                            }
                        }
                    }
                }
            }
            $($("#DivAdressadditem li")[0]).trigger("click");

            if (document.getElementById('' + ctrlcom + '_Address1_txtAddress1').value == '') {
                $(".stoast").toastText("warning", "Please enter Address1!.", 5, 3);
                return false;
            }
            if ($('[id*=ddlNationality]').val() == '1' && $('[id*=ddlNationality]').val() != '0') {
                if ((document.getElementById('' + ctrlcom + '_Address1_AreaUserControl1_txtSearchControl').value == '') || (document.getElementById('' + ctrlcom + '_Address1_AreaUserControl1__hiddenID').value == '')) {
                    $(".stoast").toastText("warning", "Please select area!!.", 5, 3);
                    document.getElementById('' + ctrlcom + '_Address1_AreaUserControl1_txtSearchControl').focus();
                    return false;
                }
            }
            /*patient category validation*/
            var _ispatcat = $('[id*=hdnallowtariffslcn]').val().toLowerCase();
            if (_ispatcat == 'true' && $('#' + ctrlcom + '_UCServices_ddlpatcat').val().trim() == "--Select--" && !$('#' + ctrlcom + '_chk_old').prop('checked')) {
                $(".stoast").toastText("Warning", "Please Select Patient Category!.", 5, 3);
                document.getElementById('' + ctrlcom + '_UCServices_ddlpatcat').focus();
                return false;
            }
            var Nationality_Value = 'N';
            var def_nation = $('#' + ctrlcom + '_hdnddlNationality').val();
            var sel_nation = $('#' + ctrlcom + '_ddlNationality').val();
            if (def_nation != sel_nation) { Nationality_Value = 'Y'; }
            var _mobileValidate = MobileNoSettingSavevalidate('ctl00_ContentPlaceHolder1_Address1_txtMobile1', '', 'OPD', Nationality_Value);
            if (_mobileValidate == false) {
                return _mobileValidate;
            }
            if (document.getElementById('' + ctrlcom + '_Address1_txtMobile2').value != '') {
                var _mobileValidate = MobileNoSettingSavevalidate('ctl00_ContentPlaceHolder1_Address1_txtMobile2', '');
                if (_mobileValidate == false) {
                    return _mobileValidate;
                }
            }
            if (document.getElementById('' + ctrlcom + '_txtMobile3').value != '') {
                var _mobileValidate = MobileNoSettingSavevalidate('ctl00_ContentPlaceHolder1_txtMobile3', '');
                if (_mobileValidate == false) {
                    return _mobileValidate;
                }
            }
            if (myMultiAddress3.length > 0 && myMultiAddress3[0] != undefined) {
                $($("#DivAdressadditem li")[2]).trigger("click");
                if ((document.getElementById('' + ctrlcom + '_Address1_AreaUserControl1_txtSearchControl').value != '') && (document.getElementById('' + ctrlcom + '_Address1_AreaUserControl1__hiddenID').value != '' && document.getElementById('' + ctrlcom + '_Address1_ddrelationaddr').value == 0)) {
                    $(".stoast").toastText("warning", "Please Select Address Type!.", 5, 3);
                    document.getElementById('' + ctrlcom + '_Address1_ddrelationaddr').focus();
                    return false;
                }
            }
            /*if (document.getElementById('' + ctrlcom + '_Address1_txtMobile2').value != '') {
            var x = document.getElementById('' + ctrlcom + '_Address1_txtMobile2').value;
            if (x.length < 10) {
            $(".stoast").toastText("warning", "Enter 10 Digits Telephone Number!.", 5, 3);
            //            alert('Please enter mobile number!');
            document.getElementById('' + ctrlcom + '_Address1_txtMobile2').focus();
            return false;
            }
            //RAMA MA'AM SAID 'SAVE THE RECORD IF THEY ENTER TELEPHONE # AS STD-CD+PHN OR STD' AND REMOVE THE VALIDATION FOR TELPEPHONE #
            }*/

            var Client_Name = document.getElementById('' + ctrlcom + '_headerControl1_hdnclientNameFor').value;
            if ($('#' + ctrlcom + '_ddlPatientType').val() == 2 || $('#' + ctrlcom + '_ddlPatientType').val() == 5
            || $('#' + ctrlcom + '_ddlPatientType').val() == 8 || $('#' + ctrlcom + '_ddlPatientType').val() == 9) {
                if (document.getElementById('' + ctrlcom + '_EmployerInfo1_uctpa_txtSearchControl').value == '') {
                    $(".stoast").toastText("warning", "Please select company!", 5, 3);
                    document.getElementById('' + ctrlcom + '_EmployerInfo1_uctpa_txtSearchControl').focus();
                    return false;
                }
                if (Client_Name.trim() != 'YASHODA' && Client_Name.trim() != 'LNT') {
                    if (document.getElementById('' + ctrlcom + '_EmployerInfo1_ddlrelation').value == "--select--" || document.getElementById('' + ctrlcom + '_EmployerInfo1_ddlrelation').value == "0") {
                        $(".stoast").toastText("warning", "Please enter relation to patient!", 5, 3);
                        document.getElementById('' + ctrlcom + '_EmployerInfo1_ddlrelation').focus();
                        return false;
                    }
                    if ($('#' + ctrlcom + '_ddlPatientType').val() != 8) {
                        if (document.getElementById('' + ctrlcom + '_EmployerInfo1_txtEmploeeID').value == '') {
                            $(".stoast").toastText("warning", "Please Enter Employee Id", 5, 3);
                            document.getElementById('' + ctrlcom + '_EmployerInfo1_txtEmploeeID').focus();
                            return false;
                        }
                    }
                    if (document.getElementById('' + ctrlcom + '_EmployerInfo1_txtEmployeeName').value == '') {
                        $(".stoast").toastText("warning", "Please Enter Employee Name", 5, 3);
                        document.getElementById('' + ctrlcom + '_EmployerInfo1_txtEmployeeName').focus();
                        return false;
                    }
                    if ($('#' + ctrlcom + '_ddlPatientType').val() == 2 || $('#' + ctrlcom + '_ddlPatientType').val() == 9) {
                        if (document.getElementById('' + ctrlcom + '_EmployerInfo1_txtEmpMRNo').value == '') {
                            $(".stoast").toastText("warning", "Please Enter Medical Card No", 5, 3);
                            document.getElementById('' + ctrlcom + '_EmployerInfo1_txtEmpMRNo').focus();
                            return false;
                        }
                    }
                    if ($('#' + ctrlcom + '_ddlPatientType').val() == 5) {
                        if (document.getElementById('' + ctrlcom + '_EmployerInfo1_txtEmpMRNo').value == '') {
                            $(".stoast").toastText("warning", "Please Enter Policy#", 5, 3);
                            document.getElementById('' + ctrlcom + '_EmployerInfo1_txtEmpMRNo').focus();
                            return false;
                        }
                    }
                    if ($('#' + ctrlcom + '_ddlPatientType').val() == 8) {
                        if (document.getElementById('' + ctrlcom + '_EmployerInfo1_txtEmpMRNo').value == '') {
                            $(".stoast").toastText("warning", "Please Enter WAP#", 5, 3);
                            document.getElementById('' + ctrlcom + '_EmployerInfo1_txtEmpMRNo').focus();
                            return false;
                        }
                    }
                    if ($('#' + ctrlcom + '_ddlPatientType').val() != 8) {
                        if (document.getElementById('' + ctrlcom + '_EmployerInfo1_txtdateofissue').value == '') {
                            $(".stoast").toastText("warning", "Please Enter Proper value for Date of Issue", 5, 3);
                            document.getElementById('' + ctrlcom + '_EmployerInfo1_txtdateofissue').focus();
                            return false;
                        }
                        if (document.getElementById('' + ctrlcom + '_EmployerInfo1_txtEmpCardValidity').value == "") {
                            $(".stoast").toastText("warning", "Date of Expiry for Medical Card should not be Today Date", 5, 3);
                            document.getElementById('' + ctrlcom + '_EmployerInfo1_txtEmpCardValidity').focus();
                            return false;
                        }
                    }
                    if ($('#' + ctrlcom + '_ddlPatientType').val() == 5) {
                        if ($('#' + ctrlcom + '_EmployerInfo1_ddlpolicytype').val() == 2 && $('#' + ctrlcom + '_EmployerInfo1_txtemployername').val() == '') {
                            $(".stoast").toastText("warning", "Please Enter Employeer Name", 5, 3); $('#' + ctrlcom + '_EmployerInfo1_txtemployername').focus();
                            return false;
                        }
                    }
                }
                if ($('#' + ctrlcom + '_EmployerInfo1_txtrefletter').val() != "") {
                    if (($('#' + ctrlcom + '_EmployerInfo1_txtcreditlimitamt').val() == "" || $('#' + ctrlcom + '_EmployerInfo1_txtcreditlimitamt').val() == "0") && $('#' + ctrlcom + '_EmployerInfo1_chkcreditcheck')[0].checked == false) {
                        $(".stoast").toastText("warning", "Please Select Credit unlimited or Enter Limit amount", 5, 3);
                        $('#' + ctrlcom + '_EmployerInfo1_txtcreditlimitamt').focus();
                        return false;
                    }
                    if (Client_Name.trim() != 'YASHODA' && Client_Name.trim() != 'LNT') {
                        if ($('#' + ctrlcom + '_EmployerInfo1_txtletterissuedby').val() == "") {
                            $(".stoast").toastText("warning", "Please Enter Letter Issue by", 5, 3);
                            $('#' + ctrlcom + '_EmployerInfo1_txtletterissuedby').focus();
                            return false;
                        }
                        if ($('#' + ctrlcom + '_EmployerInfo1_txtlettervalidity').val() == '') {
                            $(".stoast").toastText("warning", "Date of Expiry for Referral Letter should not be Todays Date", 5, 3);
                            $('#' + ctrlcom + '_EmployerInfo1_txtlettervalidity').focus();
                            return false;
                        }
                    }
                }
                if ($('#' + ctrlcom + '_EmployerInfo1_txtletterissuedby').val() != "") {
                    if ($('#' + ctrlcom + '_EmployerInfo1_txtrefletter').val() == "") {
                        $(".stoast").toastText("warning", "Please Enter Referral Letter no", 5, 3);
                        $('#' + ctrlcom + '_EmployerInfo1_txtrefletter').focus();
                        return false;
                    }
                }
                var RefLetter = document.getElementById('' + ctrlcom + '_hdnrefletterreq').value;
                if (RefLetter == "N" || RefLetter == "" || RefLetter == null) { } else {
                    if (document.getElementById('' + ctrlcom + '_EmployerInfo1_txtrefletter').value == "") {
                        $(".stoast").toastText("warning", "Please Select Referral Letter", 5, 3);
                        document.getElementById('' + ctrlcom + '_EmployerInfo1_txtrefletter').focus();
                        return false;
                    }
                    if (Client_Name.trim() != 'YASHODA' && Client_Name.trim() != 'LNT') {
                        if (document.getElementById('' + ctrlcom + '_EmployerInfo1_txtletterissuedby').value == "") {
                            $(".stoast").toastText("warning", "Please Select Letter Issued by", 5, 3);
                            document.getElementById('' + ctrlcom + '_EmployerInfo1_txtletterissuedby').focus();
                            return false;
                        }
                        if (document.getElementById('' + ctrlcom + '_EmployerInfo1_txtlettervalidity').value == '') {
                            $(".stoast").toastText("warning", "Date of Expiry for Referral Letter should not be Today Date", 5, 3);
                            document.getElementById('' + ctrlcom + '_EmployerInfo1_txtlettervalidity').focus();
                            return false;
                        }
                    }
                }
                var age = 0; var gender = 0; var maritalstatus = 0; var umr_no = ''; var company_id = 0; var state = "N";
                age = document.getElementById('' + ctrlcom + '_newAgeUc_txtYear').value;
                gender = document.getElementById('' + ctrlcom + '_ddlGender').value;
                maritalstatus = document.getElementById('' + ctrlcom + '_ddlMaritalStatus').value;
                company_id = $("#" + ctrlcom + "_EmployerInfo1_uctpa__hiddenID").val();
                if (company_id > 0) {
                    GetNonAsync(
                        "Private/FrontOffice/OPDBILLNEW.aspx/GetEligilibityData",
                        { age: age, gender: gender, maritalstatus: maritalstatus, umr_no: umr_no, company_id: company_id },
                        function (data) {
                            var _optionsVal = '';
                            if (data.d[0].STATUS != "Y") {
                                $(".stoast").toastText("warning", "Based on Company Eligibility Settings,Patient is not eligible for Reff. Letter # Creation", 5, 3);
                                document.getElementById('' + ctrlcom + '_EmployerInfo1_txtrefletter').value = '';
                                state = "Y";
                                return false;
                            }
                        },
                        function (jqXHR, textStatus, errorThrown) {
                            alert(errorThrown);
                        });
                }
                if (state == "Y") { return false; }
            }
        }
        var slot_req = document.getElementById('' + ctrlcom + '_hdnisapptslotreq').value;
        var is_doc_slots_req = document.getElementById('' + ctrlcom + '_hdnIsDoctorSlotsReq').value;
        if (is_doc_slots_req != '') {
            is_doc_slots_req = is_doc_slots_req.toLowerCase();
        }

        if (slot_req == "True" && is_doc_slots_req == "true") {
            var flag = false;
            $("table[id*=gvServices] tr:has(td)").each(function (e) {
                var slot_time = $(this).closest('tr').find('[id*=ddlSlotTiming]').find('option:selected').text();
                var doc_name = $(this).closest('tr').find("input[type=text][id*=txtServiceName]").val();
                var docid = $(this).closest('tr').find("input[type=hidden][id*=hdnDoctorID]").val();
                var Doctor_id = docid;
                var class_srv_id = $(this).closest('tr').find("input[type=hidden][id*=hdnClass_Srv_ID]").val();
                if (Doctor_id == null || Doctor_id == undefined || Doctor_id == '') { Doctor_id = 0; }
                if (class_srv_id == null || class_srv_id == undefined || class_srv_id == '') { class_srv_id = 0; }


                if (docid > 0) {
                    if (slot_time == "Select" || slot_time == "" || slot_time == undefined || slot_time == NaN || slot_time == "0") {
                        $(".stoast").toastText("warning", "Please Select the Slot for this " + doc_name + "  ", 5, 3);
                        flag = true;
                        return false;
                    }
                }

                if (class_srv_id > 0 && Doctor_id > 0 && $(this).closest('tr').find("[id*=chkPstCons]")[0].checked == true && (is_doc_slots_req == 'True' || is_doc_slots_req == 'true')) {
                    if (slot_time == "Select" || slot_time == "" || slot_time == undefined || slot_time == NaN || slot_time == "0") {
                        $(".stoast").toastText("warning", "Please Select the Slot for this " + doc_name + "  ", 5, 3);
                        flag = true;
                        return false;
                    }
                }
            });
            if (flag == true) {
                return false;
            }
        }


        var count = '0';
        var GvRowscount = 0;
        var grid = document.getElementById('' + ctrlcom + '_UCServices_gvServices');
        var _index = grid.rows.length;

        /* this is hystory types related functinality change is there so we commented this */
        $("table[id$=gvServices] tr:has(td)").each(function (e) {
            if (GvRowscount < _index) {

                SrvID = $(this).closest('tr').find("input[type=hidden][id*=hdnServiceID]").val();
                SrvName = $(this).closest('tr').find("input[type=text][id*=txtServiceName]").val();
                history_type = $(this).closest('tr').find("input[type=hidden][id*=hdnhistorytypeID]").val();
                medication = $(this).closest('tr').find("input[type=hidden][id*=hdnMedicationType]").val();
                lmpcalander = $(this).closest('tr').find("input[type=hidden][id*=hdnLmpCal]").val();
                outhermedication = $(this).closest('tr').find("input[type=hidden][id*=hdnOutherMedic]").val();
                historystatus = $(this).closest('tr').find("input[type=hidden][id*=hdnIsTakenToday]").val();
                if (history_type == undefined || history_type == '' || history_type == null) { history_type = '0'; } else { history_type = history_type; }
                if (medication == undefined || medication == '' || medication == null) { medication = '0'; } else { medication = medication; }
                if (historystatus == undefined || historystatus == '' || historystatus == null) { historystatus = 'N'; } else { historystatus = historystatus; }

                switch (history_type) {
                    case '1':
                        {
                            if (medication == '0') {
                                $(".stoast").toastText("warning", "Please Select History Type For '" + SrvName + "'", 2, 3);
                                count = '4';
                                OPcnt = 1; return false;
                            }
                        } break;
                    case '2':
                        {
                            var f_name = document.getElementById('' + ctrlcom + '_umrPatientDetails_hdnDocName').value;
                            var gender = '';
                            if (f_name == 'OPQUICK') {
                                var gender_id = $('#' + ctrlcom + '_ddlGender').val();
                                if (gender_id == '2') {
                                    gender = 'Female';
                                }
                            }
                            else {
                                gender = $('#' + ctrlcom + '_umrPatientDetails_lblgender').text();
                            }
                            if ((lmpcalander == undefined || lmpcalander == null || lmpcalander == '') && gender == "Female") {
                                $(".stoast").toastText("warning", "Please Select History Type For '" + SrvName + "'", 2, 3);
                                count = '4';
                                OPcnt = 1; return false;
                            }
                        } break;
                    case '3':
                        {
                            if (medication == '0') {
                                $(".stoast").toastText("warning", "Please Select History Type For '" + SrvName + "'", 2, 3);
                                count = '4';
                                OPcnt = 1; return false;
                            }
                        } break;
                    case '4':
                        {
                            if (medication == '0') {
                                $(".stoast").toastText("warning", "Please Select History Type For '" + SrvName + "'", 2, 3);
                                count = '4';
                                OPcnt = 1; return false;
                            }
                        } break;
                    case '5':
                        {
                            if (medication == '0') {
                                $(".stoast").toastText("warning", "Please Select History Type For '" + SrvName + "'", 5, 3);
                                count = '4';
                                OPcnt = 1; return false;
                            }
                        } break;
                    case '6':
                        {
                            if (outhermedication == '') {
                                $(".stoast").toastText("warning", "Please Select History Type For '" + SrvName + "'", 5, 3);
                                count = '4';
                                OPcnt = 1; return false;
                            }
                        } break;
                    default:
                        {
                            break;
                        }

                }
            }
            GvRowscount++;
        })
        if (count == '4')
        { OPcnt = 1; return false; }



        var cardamt = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtCardAmt');
        var cardno = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtcardNoCmp');
        var cardtype = document.getElementById('' + ctrlcom + '_ReceiptControl2_ddcardType');
        var bankname = document.getElementById('' + ctrlcom + '_ReceiptControl2_ddbankName');
        var cardexpirydt = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtcardExpiredt');
        var auth = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtcardAuther');
        var clientname = $('[id*=hdnclientNameFor]').val();
        clientname = clientname.toLowerCase();
        if (cardamt.value > 0) {
            if (cardno.value == "") {
                $(".stoast").toastText("warning", "Please Enter Card No", 5, 3);
                cardno.focus();
                return false;
            }
            if (clientname != 'vijaya') {
                if (cardtype.value == 0) {
                    $(".stoast").toastText("warning", "Please select the Card Type!", 5, 3);
                    cardtype.focus();
                    return false;
                }
                if (bankname.value == 0) {
                    $(".stoast").toastText("warning", "Please select the name of the Bank!", 5, 3);
                    bankname.focus();
                    return false;
                }
            }
            /*if (cardexpirydt.value == "") {
            $(".stoast").toastText("warning", "Please Select Card Expiry Date", 5, 3);
            cardexpirydt.focus();
            return false;
            }*/
            if (auth.value == "") {
                $(".stoast").toastText("warning", "Please Enter Authorisation#", 5, 3);
                auth.focus();
                return false;
            }
        }
        if (document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlcrdtype').value == "4" && cardamt.value > 0) {
            var otpcheck = document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnotp').value;
            var otpnum = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtotp');
            if (otpcheck != otpnum.value) {
                $(".stoast").toastText("warning", "Please verify OTP number!", 5, 3);
                otpnum.focus();
                return false;
            }
        }
        var grossamt = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtgrosstotal');
        var dueamt = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatdue');
        var cashamt = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtcashAmt').value;
        var dueauth = document.getElementById('' + ctrlcom + '_ReceiptControl2_Search3_txtSearchControl');
        var Concauth = document.getElementById('' + ctrlcom + '_ReceiptControl2_ucdueauth_txtSearchControl');
        var ConcAmt = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatgrossamt');
        var TenderedCash = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtTenderedAmt');

        var dsctyp = document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlDiscountType').value;
        if (parseFloat(ConcAmt.value) > 0 && Concauth.value == "" && dsctyp > 0) {
            $(".stoast").toastText("warning", "Please Select Discount Authorization", 5, 3);
            Concauth.focus();
            return false;
        }
        if (document.getElementById('' + ctrlcom + '_ChkAssesment').checked == false) {
            if (parseFloat(dueamt.value) > 0 && dueauth.value == "") {
                $(".stoast").toastText("warning", "Please Select Due Authorization", 5, 3);
                dueauth.focus();
                return false;
            }
        }
        var message = document.getElementById('' + ctrlcom + '_hdndueamount').value;
        var Due_amt = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatdue').value;
        if (parseFloat(Due_amt) > 0) { } else { Due_amt = 0; }
        if (message == "No") {
            if (parseFloat(Due_amt) > 0) {
                $(".stoast").toastText("warning", "Due Is Not Allowed, Plese Contact administation", 5, 3);
                return false;
            }
            else {
            }
        }
        else {
        }
        /*end the function */
        if (parseFloat(TenderedCash.value) > 0) {
            $(".stoast").toastText("warning", "Please Remove The TenderedCash Amount", 5, 3);
            TenderedCash.focus();
            return false;
        }
        var credit_limit_count = CheckCreditLimits();
        if (credit_limit_count == '150') {
            return false;
        }
        var SrvShdleCount = '';
        $("table[id$=UCServices_gvServices] tr:has(td)").each(function (e) {
            SrvShdleCount = '';
            var issrvsch = $(this).closest('tr').find('[id*=hdnisschedulerequired]').val();
            var SrvName = $(this).closest('tr').find("input[type=text][id*=txtServiceName]").val();
            var qty = $(this).closest('tr').find('[id*=txtQty]').val();
            var hdnSaveSrvShdle = $(this).closest('tr').find('[id*=hdnSrvShcedulSave]').val();
            var srv_grp_name = $(this).closest('tr').find('[id*=hdnSrv_Grp_Name]').val();
            var hdn_remarks_mandatory = $(this).closest('tr').find('[id*=hdn_remarks_mandatory]').val();
            var txtremks = $(this).closest('tr').find('[id*=txtremks]').val();
            if (txtremks == null || txtremks == undefined || txtremks == '') { txtremks == ''; }
            if (hdn_remarks_mandatory == null || hdn_remarks_mandatory == undefined || hdn_remarks_mandatory == '') { hdn_remarks_mandatory = 'N'; }

            var _srvId = $(this).closest('tr').find("input[type=hidden][id*=hdnServiceID]").val();
            var constypeid = $(this).closest('tr').find('[id*=ddSType]').val();
            if (constypeid == null || constypeid == undefined || constypeid == '') {
                constypeid = '0';
            }
            if (SrvName != "REGISTRATION" && _srvId == 2) {

                if (constypeid == 0) {
                    SrvShdleCount = '1';
                    $(".stoast").toastText("Warning", "Please Select Doctor " + SrvName + " Against to Consultation Type!", 2, 3);
                    return false;
                }
            }


            if (qty > 1 && hdnSaveSrvShdle == '' && srv_grp_name != 'FOOD N BEWERAGES') {
                if (issrvsch == 'Y') {
                    SrvShdleCount = '1';
                    $(this).closest('tr').find('[id*=imgSrvShedul]').focus();
                    $(".stoast").toastText("warning", "Please Select Service Schedule For '" + SrvName + "'", 5, 3);
                    return false;
                }
            }
            if (hdn_remarks_mandatory == 'Y' && txtremks.trim() == '') {
                SrvShdleCount = '1';
                $(this).closest('tr').find('[id*=txtremks]').focus();
                $(".stoast").toastText("warning", "Please enter your remarks! For '" + SrvName + "'", 5, 3);
                return false;
            }
            var pkg_id = $(this).closest('tr').find('input[type=hidden][id*=hdnClass_Srv_ID]').val();
            var gen_srv_id = $(this).closest('tr').find('input[type=hidden][id*=hdnServiceID]').val();
            var doctorid = $(this).closest('tr').find('input[type=hidden][id*=hdnDoctorID]').val();
            if (pkg_id > 0) {
                if (gen_srv_id == 2 && doctorid == 0) {
                    $(this).closest('tr').find('input[type=text][id*=txtServiceName]').addClass('red');
                    $(".stoast").toastText("Warning", "Please Select Doctor  against the '" + SrvName + "' Department..", 5, 3);
                    //SrvShdleCount = '1';
                    //  return false;
                }
            }

        });
        if (SrvShdleCount == '1')
        { return false; }

        var Cmp_due_allow = $('#' + ctrlcom + '_hdnallowdueopd').val();
        if (Cmp_due_allow == 'False') {
            var due_amt_a = $('#' + ctrlcom + '_ReceiptControl2_txtpatdue').val();
            if (due_amt_a == null || due_amt_a == '' || due_amt_a == undefined)
            { due_amt_a = 0; }
            if (parseFloat(due_amt_a) > 0) {
                $(".stoast").toastText("warning", "Due Not Allowed ,Please Contact Administrator! ", 5, 3);
                return false;
            }
        }

        var due_amount = $('#' + ctrlcom + '_ReceiptControl2_txtpatdue').val();
        var concess_amount = $('#' + ctrlcom + '_ReceiptControl2_txtpatgrossamt').val();
        if (parseFloat(due_amount) > 0) { } else { due_amount = 0; }
        if (parseFloat(concess_amount) > 0) { } else { concess_amount = 0; }
        var remarks = '';
        if (lblquick.className == "select") {
            remarks = $('#' + ctrlcom + '_ReceiptControl2_txtquickremarks').val();
            var pat_due = $('#' + ctrlcom + '_ReceiptControl2_txtpatdue').val();
            if (parseFloat(pat_due) > 0) { } else { pat_due = 0; }
            if (parseFloat(pat_due) > 0 && remarks == '') {
                $(".stoast").toastText("warning", "Please enter your remarks! ", 5, 3);
                document.getElementById('' + ctrlcom + '_ReceiptControl2_txtquickremarks').focus();
                return false;
            }
        }
        else {
            remarks = $('#' + ctrlcom + '_ReceiptControl2_txtRemarks').val();
            if ((parseFloat(concess_amount) > 0 || parseFloat(due_amount) > 0) && remarks == '' && lbladvanced.className == 'select') {
                $(".stoast").toastText("warning", "Please enter your remarks! ", 5, 3);
                document.getElementById('' + ctrlcom + '_ReceiptControl2_txtRemarks').focus();
                return false;
            }
        }
        if (document.getElementById('' + ctrlcom + '_ReceiptControl2_imgbtnupdate').style.display == "block") {
            $(".stoast").toastText("Warning", "Enter Transaction details Properly..!", 5, 3);
            return false;

        }
        if (document.getElementById('' + ctrlcom + '_ReceiptControl2_chkismultiple').checked == true) {
            var Multi_disc_grid = document.getElementById('' + ctrlcom + '_ReceiptControl2_gvMultipleConcession');
            var _index_MD = Multi_disc_grid.rows.length;
            var GvRowscount_MD = 0;
            var MD_Count = 0;
            $("table[id*=gvMultipleConcession] tr:has(td)").each(function (i, j) {
                if (GvRowscount_MD < _index_MD) {
                    var Disc_Type_id = $(this).closest('tr').find("[id*=ddlMultiDiscounttype]").val();
                    var authid = $(this).closest('tr').find("input[type=hidden][id*=hdnauthid]").val();
                    var authname = $(this).closest('tr').find("[id*=txtAutherizedPersion]").val();
                    var disamt = $(this).closest('tr').find("[id*=txtAmount]").val();
                    if (parseFloat(Disc_Type_id) > 0) {
                        if (authid == '0' || authid == '' || authid == undefined || authname == '' || authname == undefined) {
                            if (disamt != '' && disamt != '0') {
                                MD_Count = 149;
                                $(".stoast").toastText("warning", "Please select auth name for multi discounts ", 5, 3);
                            }
                        } 
                    }

                }
            });
            if (MD_Count == 149) {
                OPcnt = 1; return false;
            }
        }

        if (ctl00_ContentPlaceHolder1_headerControl1_hdnisSaveDisable.value == 1)
            return false;

        return ConfirmationOPDSave(obj, 'OPD', 'OPD Bill', ctl00_ContentPlaceHolder1_headerControl1_hdnisSaveDisable);
    }
}
//var _orderstatus = false;
function OnSuccessContinue(param) {

    ctl00_ContentPlaceHolder1_headerControl1_hdnisSaveDisable.value = 1;

    proratecal();
    if (param == 'PkgCons') {
        PackageConsultationSaveRoot('PackageConsultationSave');
    }
    if (param == 'OSP') {
        OSPSaveRoot(param);
    }
    if (param == 'IndentSave') {
        IndentSaveRoot(param);
    }
    if (param == 'OPD') {
        OPDSaveRoot(param);
    }
}
/* Indents Saving */
function IndentSaveRoot(type) {

    if (type == 'IndentSave') {
        if (document.getElementById('' + ctrlcom + '_UCServices_hdnRemoveSrv').value == "Y") {
            $(".stoast").toastText("warning", "Please enter your remarks! !.", 5, 3);
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtRemarks').focus();
            return false;
        }
        if (document.getElementById('' + ctrlcom + '_UCServices_gvServices').rows.length >= 1) {
            _RegXml += OPDSave();
            _RegXml += OPDTransactionSave();
        }
        document.getElementById('' + ctrlcom + '_hdnHTMLstring').value = _RegXml;
        __doPostBack($('[id*=imgbtnSave]').attr("name"), "");
    }
}
function OPDSaveRoot(param) {
    var xmlStr = ""; var _Srvc = '';
    var _RegXml = ''; var _Cnsltxml = ''; var _recpayxml = '';
    var _isQuickreg = 'N'; var UmrNO = ''; var Pat_ID = ''; var BType = '';
    var _PaidAmnt = 0; var _RegPaidAmnt = 0; var _ConsPaidAmnt = 0; var PAYMENT_TYPE_ID = ''; var CnsCount = 0;
    var b_cmp_net = 0; var b_cmp_grs_amt = 0; var b_cmp_cnc_amt = 0; var b_cmp_pct = 0;
    var c_cmp_net = 0; var c_cmp_grs_amt = 0; var c_cmp_cnc_amt = 0; var c_cmp_pct = 0;
    var referral_save_count = ''; var Rfrl_Ltr_Id = '';
    var _app_pat_id = 0; var __apptID = 0;
    var _post_cons_ref_id = '0'; var doc_rev_no = '0'; var ff_doc_id = '0';
    var OrderingPhyCount = 0;
    document.getElementById('' + ctrlcom + '_hdnHTMLstring').value = '';

    if (document.getElementById('' + ctrlcom + '_chk_old').checked == false) {
        xmlStr = "<root>";
        xmlStr += RegistrationSave();
        // _recpayxml = '';
        if (document.getElementById('' + ctrlcom + '_UCServices_gvServices').rows.length >= 1) {
            _Srvc = Consultationsave();
            _Srvc += OPDSave();
        }
        xmlStr += _Srvc;
        xmlStr += OPDTransactionSave();
    }
    else {
        if (document.getElementById('' + ctrlcom + '_UCServices_gvServices').rows.length >= 1) {
            document.getElementById('' + ctrlcom + '_hdnpatienttype').value = document.getElementById('' + ctrlcom + '_uccorporate_ddlPaymentBy').value;
            if (document.getElementById('' + ctrlcom + '_umrPatientDetails_hdnOspRegReq').value == 'Y') {
                var __conxml = Consultationsave();
                if (__conxml != "") {
                    _Srvc = OSPRegNotReq();
                }
                _Srvc += __conxml;
            }
            else {
                _Srvc = Consultationsave();
            }
            _Srvc += OPDSave();
        }
        if (_xmlCorpReg != "") {
            xmlStr += "<root>"
            xmlStr += _xmlCorpReg += _xmlCorpRef;
            xmlStr += "</root>";
        }
        else {
            if (_xmlCorpRef != "") {
                xmlStr += "<root>"
                xmlStr += _xmlCorpRef;
                xmlStr += "</root>";
            }
        }
        xmlStr += _Srvc;
        xmlStr += OPDTransactionSave();
    }

    document.getElementById('' + ctrlcom + '_hdnHTMLstring').value = xmlStr;
    document.getElementById('' + ctrlcom + '_txtregfee').focus();
    var PAID_AMOUNT = 0;
    var changeamount = document.getElementById('' + ctrlcom + '_ReceiptControl2_lblqickchangeamt').innerHTML;

    if (changeamount == undefined || changeamount == null || changeamount == '') { changeamount = 0; }


    if (lblquick.className == 'select') {
        var cash_amt = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtcashAmt').value;
        var card_amt = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtCardAmt').value;

        if (parseInt(cash_amt) > 0) {
        }
        else {
            cash_amt = '0';
        }
        if (parseInt(card_amt) > 0) {
        }
        else {
            card_amt = '0';
        }
        var insrenceAmt = 0;
        $('table[id*=GvIns] tr:has(td)').each(function () {
            var insamt = $(this).closest('tr').find('[id*=lblinsamt]').text();
            if (insamt == undefined || insamt == null || insamt == '') { insamt = 0; }
            insrenceAmt = parseFloat(insrenceAmt) + parseFloat(insamt);
        });
        PAID_AMOUNT = parseFloat(parseFloat(cash_amt) + parseFloat(card_amt)) - parseFloat(changeamount);
        if (parseFloat(insrenceAmt) > 0) {
            PAID_AMOUNT = parseFloat(PAID_AMOUNT) + parseFloat(insrenceAmt);
        }
    }
    else {/* Advance Mode */
        PAID_AMOUNT = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtreceiptAmount').value;
    }
    if (fobillamount == PAID_AMOUNT)
        __doPostBack($('[id*=imgbtnSave]').attr("name"), "");
    else {
        $(".stoast").toastText("warning", "Receipt amount is not matching with the Bills paid amount.", 5, 3);
        return false;
    }
    fobillamount = 0; PAID_AMOUNT = 0;
}
function OSPRegNotReq() {
    var rec_type_id = 0;
    if (document.getElementById('ctl00_hdnIsMedClg').value == "TRUE") {
        rec_type_id = $('input[id*=radiousertran]:checked').val()
        if (rec_type_id == 0 || rec_type_id == null || rec_type_id == undefined) { rec_type_id = 1; }
    }
    else { rec_type_id = 1; }

    var RegFee = document.getElementById('' + ctrlcom + '_hdnregfee').value;
    var UmrNO = document.getElementById('' + ctrlcom + '_ucUMRno_txtSearchControl').value;
    var Consultant = document.getElementById('' + ctrlcom + '_UcOdrPsyn__hiddenID').value;
    if (Consultant == null || Consultant == '' || Consultant == undefined) { Consultant = "0"; }
    if (RegFee == undefined || RegFee == null || RegFee == '') { RegFee = "0"; }
    if (UmrNO == undefined || UmrNO == null) { UmrNO = "0"; }
    var _xmlRegStr = '<root>';
    _xmlRegStr += "<PATIENT";
    _xmlRegStr += " PATIENT_ID=$" + document.getElementById('' + ctrlcom + '_umrPatientDetails_hdnOspRegPatID').value + "$";
    _xmlRegStr += " UMR_NO=$" + document.getElementById('' + ctrlcom + '_umrPatientDetails_Umrlookup_txtSearchControl').value + "$";
    _xmlRegStr += " IS_REG_REQUIRED=$" + "A" + "$";
    _xmlRegStr += " IS_OSP=$" + "N" + "$";
    _xmlRegStr += "/>";

    _xmlRegStr += "<FO_REG";
    _xmlRegStr += " REG_ID=$" + "0" + "$";
    _xmlRegStr += " UMR_NO=$" + document.getElementById('' + ctrlcom + '_umrPatientDetails_Umrlookup_txtSearchControl').value + "$";

    _xmlRegStr += " PATIENT_ID=$" + document.getElementById('' + ctrlcom + '_umrPatientDetails_hdnOspRegPatID').value + "$";

    _xmlRegStr += " MOBILE_NO1=$" + '' + "$";
    _xmlRegStr += " MOBILE_NO2=$" + '' + "$";
    _xmlRegStr += " TREATMENT_BY_ID=$" + '' + "$";
    _xmlRegStr += " REFERENCE_TYPE_ID=$" + "1" + "$";
    _xmlRegStr += " REG_PATIENT_TYPE_ID=$" + "1" + "$";
    _xmlRegStr += " NATIONALITY_ID=$" + '' + "$";
    _xmlRegStr += " EMAIL_ID=$" + '' + "$";
    _xmlRegStr += " PATIENT_REV_NO=$" + "1" + "$";
    _xmlRegStr += " REFERAL_SOURCE_ID=$" + document.getElementById('' + ctrlcom + '_ucReferal_ddlreferral').value + "$";
    _xmlRegStr += " REFERRED_DOCTOR_ID=$" + '' + "$";
    _xmlRegStr += " REFERAL_SOURCE_REV_NO=$" + "1" + "$";
    _xmlRegStr += " REFERRED_DOCTOR_TYPE_REV_NO=$" + "1" + "$";
    _xmlRegStr += " REFERRED_DOCTOR_REV_NO=$" + "1" + "$";
    _xmlRegStr += " PATIENT_CLASS_REV_NO=$" + "1" + "$";
    _xmlRegStr += " EXPIRY_DT=$" + document.getElementById('' + ctrlcom + '_txtregValidity').value + "$";
    _xmlRegStr += " PATIENT_CLASS_ID=$" + "2" + "$";
    _xmlRegStr += " IS_QUICK_REG=$" + '' + "$";
    _xmlRegStr += " QUESTIONARY_ID=$" + '' + "$";
    _xmlRegStr += " PRE_REG_ID=$" + '' + "$";
    _xmlRegStr += " IS_EXPIRED=$" + "N" + "$";
    _xmlRegStr += " REG_TYPE_ID=$" + rec_type_id + "$";
    _xmlRegStr += " REG_REFERENCE_TYPE_ID=$" + '' + "$";
    _xmlRegStr += " SESSION_ID=$" + document.getElementById('' + ctrlcom + '_HDNSESSIONID').value + "$";
    _xmlRegStr += "/>";

    var UmrNO = '', _reg_id = 0;
    if (document.getElementById('' + ctrlcom + '_chkisold').checked == true) {
        UmrNO = document.getElementById('' + ctrlcom + '_ucUMRno_txtSearchControl').value;
        _reg_id = document.getElementById('' + ctrlcom + '_hdnRegID').value;
        if (_reg_id == undefined || _reg_id == null || _reg_id == '') { _reg_id = "0"; }
    }

    else if (document.getElementById('' + ctrlcom + '_chk_old').checked == true) {
        UmrNO = document.getElementById('' + ctrlcom + '_umrPatientDetails_Umrlookup_txtSearchControl').value;
    }
    else {
        UmrNO = document.getElementById('' + ctrlcom + '_txtumrno').value;
    }

    var _apptID = 0;
    if (document.getElementById('' + ctrlcom + '_UcAppointmentNo_txtSearchControl').value != '' && document.getElementById('' + ctrlcom + '_hdnAPTID').value != '') {
        _apptID = document.getElementById('' + ctrlcom + '_hdnAPTID').value;
    }
    var COMPANY_CONCESSION_AMOUNT = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpartygrossamt').value;
    var COMPANY_AMOUNT = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtparygross').value;
    var BILL_AMOUNT = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtgrosstotal').value;
    var NET_AMOUNT = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtTotalNet').value;
    var PAID_AMOUNT = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatientReceiptAmt').value;
    var DUE_AMOUNT = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtTotalDue').value;
    var TOTAL_DISCOUNT = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtgrossamttotal').value;
    var CMP_OUTSTANDING_DUE = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtTotalDue').value;
    var CMP_NET_AMT = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtTotalNet').value;
    var CMP_PAID_AMT = 0;
    var con_AuthID = document.getElementById('' + ctrlcom + '_ReceiptControl2_ucdueauth__hiddenID').value;
    var CONCESSION = 0;

    if (CONCESSION == undefined || CONCESSION == null || CONCESSION == '') { CONCESSION = "0"; }
    if (COMPANY_CONCESSION_AMOUNT == undefined || COMPANY_CONCESSION_AMOUNT == null || COMPANY_CONCESSION_AMOUNT == '') { COMPANY_CONCESSION_AMOUNT = "0"; }
    if (COMPANY_AMOUNT == undefined || COMPANY_AMOUNT == null || COMPANY_AMOUNT == '') { COMPANY_AMOUNT = "0"; }
    if (BILL_AMOUNT == undefined || BILL_AMOUNT == null || BILL_AMOUNT == '') { BILL_AMOUNT = "0"; }
    if (NET_AMOUNT == undefined || NET_AMOUNT == null || NET_AMOUNT == '') { NET_AMOUNT = "0"; }
    if (PAID_AMOUNT == undefined || PAID_AMOUNT == null || PAID_AMOUNT == '') { PAID_AMOUNT = "0"; }
    if (DUE_AMOUNT == undefined || DUE_AMOUNT == null || DUE_AMOUNT == '') { DUE_AMOUNT = "0"; }
    if (TOTAL_DISCOUNT == undefined || TOTAL_DISCOUNT == null || TOTAL_DISCOUNT == '') { TOTAL_DISCOUNT = "0"; }
    if (CMP_OUTSTANDING_DUE == undefined || CMP_OUTSTANDING_DUE == null || CMP_OUTSTANDING_DUE == '') { CMP_OUTSTANDING_DUE = "0"; }
    if (CMP_NET_AMT == undefined || CMP_NET_AMT == null || CMP_NET_AMT == '') { CMP_NET_AMT = "0"; }
    if (CMP_PAID_AMT == undefined || CMP_PAID_AMT == null || CMP_PAID_AMT == '') { CMP_PAID_AMT = "0"; }
    if (con_AuthID == undefined || con_AuthID == null || con_AuthID == '') { con_AuthID = "0"; }
    var staffConper = '';
    var staffConAmt = '';
    var mngmtConper = '';
    var MngmtConAmt = '';
    var ebConper = '';
    var ebConAmt = '';
    var ConRuleConper = '';
    var ConRuleConAmt = '';
    var HCConper = '';
    var HCConAmt = '';
    var CashConper = '';
    var CashConAmt = '';
    var regDuePay = 0, RegPayment = 0, regnetamt = 0; ;
    var regpayfee = '0', regpaydue = '0'; var Concession_per = 0; var _concession = ''; var _concession_per = '';
    var PNamt = 0; var Pamt = 0;
    var pat_cncsn_pct = 0;
    var pat_cncsn_amt = 0;
    var PNamt = 0; var Pamt = 0;
    var pat_cncsn_pct = 0;
    var pat_cncsn_amt = 0; var sno = 0; var txtServiceName = ''; var txtServiceCD = '';
    if (document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnRegconSetting').value == "Yes" && ((is_reg_include == '' || is_reg_include == 'N') || (is_reg_include == '' || is_reg_include == 'N'))) {
        Concession_per = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatdis').value;
        if ($('#' + ctrlcom + '_ReceiptControl2_ddlDiscountType').val() > 0) {

            CONCESSION = parseFloat(RegFee) / 100 * parseFloat(Concession_per);
        }
        if (document.getElementById('' + ctrlcom + '_ReceiptControl2_chkismultiple').checked == true) {
            CONCESSION = parseFloat(RegFee) / 100 * parseFloat(Concession_per);
        }
        if (CONCESSION == undefined || CONCESSION == null || CONCESSION == '' || CONCESSION == "NaN") { CONCESSION = "0"; }
        $("table[id$=gvServices] tr:has(td)").each(function (e) {
            sno = $(this).closest('tr').find('[id*=lblSNo]').text();
            txtServiceName = $(this).closest('tr').find("input[type=text][id*=txtServiceName]").val();
            var hdnServiceID = $(this).closest('tr').find("input[type=hidden][id*=hdnServiceID]").val();
            if (txtServiceName.trim() == 'REGISTRATION' && txtServiceName.trim() != '' && txtServiceName != null && txtServiceName != undefined && txtServiceName != "--Enter Service Name Here--" && hdnServiceID != '' && hdnServiceID != null && hdnServiceID != undefined) {
                staffConper = $(this).closest('tr').find('input[type=text][id*=txtstPer]').val();
                txtServiceName = $(this).closest('tr').find("input[type=text][id*=txtServiceName]").val();
                txtServiceCD = $(this).closest('tr').find("input[type=text][id*=txtServiceCode]").val();
                staffConAmt = $(this).closest('tr').find('input[type=text][id*=txtstAmt]').val();
                mngmtConper = $(this).closest('tr').find('input[type=text][id*=txtmaPer]').val();
                MngmtConAmt = $(this).closest('tr').find('input[type=text][id*=txtmgAmt]').val();
                ebConper = $(this).closest('tr').find('input[type=text][id*=ttxtebPer]').val();
                ebConAmt = $(this).closest('tr').find('input[type=text][id*=txtebAmt]').val();
                ConRuleConper = $(this).closest('tr').find('input[type=text][id*=txtRulePer]').val();
                ConRuleConAmt = $(this).closest('tr').find('input[type=text][id*=txtcncrlAmt]').val();
                HCConper = $(this).closest('tr').find('input[type=text][id*=txthcPer]').val();
                HCConAmt = $(this).closest('tr').find('input[type=text][id*=txtHcAmt]').val();
                CashConper = $(this).closest('tr').find('input[type=text][id*=txtDiscP]').val();
                CashConAmt = $(this).closest('tr').find('input[type=text][id*=txtDiscAmt]').val();

                Pamt = $(this).closest('tr').find('input[type=text][id*=txtPamt]').val();
                PNamt = $(this).closest('tr').find('input[type=text][id*=txtPNAmt]').val();

                if (PNamt == null || PNamt == '' || PNamt == undefined || isNaN(PNamt)) { PNamt = "0"; }
                if (Pamt == null || Pamt == '' || Pamt == undefined || isNaN(Pamt)) { Pamt = "0"; }

                pat_cncsn_pct = ((parseFloat(CashConAmt) + parseFloat(HCConAmt) + parseFloat(MngmtConAmt) + parseFloat(staffConAmt) + parseFloat(ebConAmt)) * 100) / (RegFee);
                pat_cncsn_amt = parseFloat(CashConAmt) + parseFloat(HCConAmt) + parseFloat(MngmtConAmt) + parseFloat(staffConAmt) + parseFloat(ebConAmt);
                if (pat_cncsn_amt == undefined || pat_cncsn_amt == null || pat_cncsn_amt == '' || isNaN(pat_cncsn_amt) || parseFloat(pat_cncsn_amt) < 0) { pat_cncsn_amt = "0"; }
                if (pat_cncsn_pct == undefined || pat_cncsn_pct == null || pat_cncsn_pct == '' || isNaN(pat_cncsn_pct) || parseFloat(pat_cncsn_pct) < 0) { pat_cncsn_pct = "0"; }

                _concession = parseFloat(Pamt) - parseFloat(PNamt);
                if (parseFloat(Pamt) > 0) {
                    _concession_per = (parseFloat(_concession) * 100) / parseFloat(Pamt);
                }
                if (_concession_per == '' || _concession_per == null || _concession_per == undefined) { _concession_per = 0; }
            }
        });
    }
    else {
        _concession = 0;
    }

    if (parseFloat(_concession) > 0) {
        regnetamt = parseFloat(RegFee) - parseFloat(_concession);
    }
    else {
        if ((is_reg_include == 'Y') || (is_reg_include == 'Y')) { regnetamt = 0; RegFee = 0; }
        else {
            regnetamt = RegFee;
        }
    }
    if (RegFee != "0") {
        if (parseFloat(PAID_AMOUNT) > 0 && parseFloat(PAID_AMOUNT) >= parseFloat(regnetamt)) {
            regpayfee = parseFloat(regnetamt);
            _RegPaidAmnt = regpayfee;
        }
        else if (PAID_AMOUNT > 0 && parseFloat(PAID_AMOUNT) <= parseFloat(regnetamt)) {
            regpayfee = parseFloat(PAID_AMOUNT);
            _RegPaidAmnt = regpayfee;
        }
    }
    if (DUE_AMOUNT > 0) {
        if (parseFloat(PAID_AMOUNT) < parseFloat(regnetamt)) {
            regpaydue = parseFloat(regnetamt) - parseFloat(PAID_AMOUNT);
        }
    }
    var DueAuth_Id = document.getElementById('' + ctrlcom + '_ReceiptControl2_Search3__hiddenID').value;
    if (DueAuth_Id == undefined || DueAuth_Id == null || DueAuth_Id == '') { DueAuth_Id = 0; }
    var con_amt = 0;
    if (parseFloat(CONCESSION) > 0) {
        con_amt = ((100 * _concession) / parseFloat(RegFee));
    }
    if (lblquick.className == "select") {
        PAYMENT_TYPE_ID = 2;
    } else if (lbladvanced.className == "select") {
        PAYMENT_TYPE_ID = 1;
    }


    if (staffConper == '' || staffConper == undefined || staffConper == null) { staffConper = 0; }
    if (staffConAmt == '' || staffConAmt == undefined || staffConAmt == null) { staffConAmt = 0; }
    if (mngmtConper == '' || mngmtConper == undefined || mngmtConper == null) { mngmtConper = 0; }
    if (MngmtConAmt == '' || MngmtConAmt == undefined || MngmtConAmt == null) { MngmtConAmt = 0; }
    if (ebConper == '' || ebConper == undefined || ebConper == null) { ebConper = 0; }
    if (ebConAmt == '' || ebConAmt == undefined || ebConAmt == null) { ebConAmt = 0; }
    if (ConRuleConper == '' || ConRuleConper == undefined || ConRuleConper == null) { ConRuleConper = 0; }
    if (ConRuleConAmt == '' || ConRuleConAmt == undefined || ConRuleConAmt == null) { ConRuleConAmt = 0; }
    if (HCConper == '' || HCConper == undefined || HCConper == null) { HCConper = 0; }
    if (HCConAmt == '' || HCConAmt == undefined || HCConAmt == null) { HCConAmt = 0; }
    if (CashConper == '' || CashConper == undefined || CashConper == null) { CashConper = 0; }
    if (CashConAmt == '' || CashConAmt == undefined || CashConAmt == null) { CashConAmt = 0; }

    var _dispatchID = document.getElementById('' + ctrlcom + '_UCServices_divrptDispatch').value;
    if (_dispatchID == undefined || _dispatchID == null || _dispatchID == '') { _dispatchID = 0; }
    var rfltrid = document.getElementById('' + ctrlcom + '_uccorporate_ucRefLetterNo__hiddenID').value;
    var patient_type_id = document.getElementById('' + ctrlcom + '_ddlPatientType').value;
    if (patient_type_id == undefined || patient_type_id == null || patient_type_id == '') { patient_type_id = '1'; }
    var Pat_cat = document.getElementById('' + ctrlcom + '_UCServices_ddlpatcat').value;
    if (Pat_cat == undefined || Pat_cat == null || Pat_cat == '') { Pat_cat = '0'; }
    var cmppersave = document.getElementById('' + ctrlcom + '_txtCorpPercentage').value;
    var emppersave = document.getElementById('' + ctrlcom + '_txtEmpPercentage').value;
    if (cmppersave == undefined || cmppersave == null || cmppersave == '') { cmppersave = "0"; }
    if (emppersave == undefined || emppersave == null || emppersave == '') { emppersave = "0"; }
    cmppersave = setProperDecimals(cmppersave);
    emppersave = setProperDecimals(emppersave);
    var Diagnosis_id = document.getElementById('ctl00_ContentPlaceHolder1_UcDiagnosis__hiddenID').value;
    if (Diagnosis_id == undefined || Diagnosis_id == null || Diagnosis_id == '') { Diagnosis_id = "0"; }
    _xmlRegStr += "<FO_BILL";
    _xmlRegStr += " BILL_ID=$" + "0" + "$";
    _xmlRegStr += " BILL_DT=$" + "" + "$";
    _xmlRegStr += " UMR_NO=$" + UmrNO + "$";
    _xmlRegStr += " ADMN_NO=$" + 0 + "$";
    if (myMultiDatar1 != '') {
        _xmlRegStr += " REFERAL_SOURCE_ID=$" + myMultiDatar1[0]["Refrl_class_id"] + "$";
        _xmlRegStr += " REFERAL_DOCTOR_ID=$" + myMultiDatar1[0]["id"] + "$";
        _xmlRegStr += " REFERAL_NAME=$" + ReplaceSplCharactor(myMultiDatar1[0]["Name"]) + "$";
        _xmlRegStr += " REFERAL_REF_ID=$" + myMultiDatar1[0]["RfrlTo_Id"] + "$";
        _xmlRegStr += " REFERAL_TYPE_ID=$" + myMultiDatar1[0]["Source"] + "$";
    }
    else {
        _xmlRegStr += " REFERAL_SOURCE_ID=$" + "0" + "$";
        _xmlRegStr += " REFERAL_DOCTOR_ID=$" + "0" + "$";
        _xmlRegStr += " REFERAL_NAME=$" + '' + "$";

        _xmlRegStr += " REFERAL_TYPE_ID=$" + 0 + "$";
        _xmlRegStr += " REFERAL_REF_ID=$" + 0 + "$";
    }
    _xmlRegStr += " DOCTOR_ID=$" + Consultant + "$";
    _xmlRegStr += " EMPLOYEE_ID=$" + 0 + "$";
    _xmlRegStr += " CREDIT_TYPE_ID=$" + 0 + "$";
    _xmlRegStr += " CONCESSION_ON_ID=$" + 0 + "$";
    _xmlRegStr += " CONCESSION_MODE_ID=$" + 1 + "$";
    _xmlRegStr += " CONCESSION_TYPE_ID=$" + 0 + "$";
    _xmlRegStr += " CONCESSION_TO_ID=$" + 0 + "$";
    _xmlRegStr += " CONCESSION=$" + con_amt + "$";
    _xmlRegStr += " BILLCONCESSION_AUTH_ID=$" + con_AuthID + "$";
    _xmlRegStr += " DUE_AUTH_ID=$" + DueAuth_Id + "$";
    _xmlRegStr += " COMPANY_DUE=$" + 0 + "$";
    _xmlRegStr += " COMPANY_DUE_AUTH_ID=$" + 0 + "$";
    _xmlRegStr += " COMPANY_CONCESSION_AMOUNT=$" + 0 + "$";
    _xmlRegStr += " COMPANY_AMOUNT=$" + 0 + "$";
    _xmlRegStr += " DUE_VERIFY_ID=$" + 0 + "$";
    _xmlRegStr += " DUE_VERIFY_DT=$" + '' + "$";
    _xmlRegStr += " DUE_APPROVE_ID=$" + 0 + "$";
    _xmlRegStr += " DUE_APPROVE_DT=$" + '' + "$";
    _xmlRegStr += " DUE_AUTH_DT=$" + '' + "$";
    _xmlRegStr += " CONCESSION_VERIFY_ID=$" + 0 + "$";
    _xmlRegStr += " CONCESSION_VERIFY_DT=$" + '' + "$";
    _xmlRegStr += " CONCESSION_APPROVE_ID=$" + 0 + "$";
    _xmlRegStr += " CONCESSION_APPROVE_DT=$" + '' + "$";
    _xmlRegStr += " CONCESSION_AUTH_ID=$" + con_AuthID + "$";
    _xmlRegStr += " CONCESSION_AUTH_DT=$" + '' + "$";
    fobillamount += Math.round(regpayfee);
    _xmlRegStr += " PRINT_COUNT=$" + 0 + "$";
    _xmlRegStr += " BILL_AMOUNT=$" + Math.round(RegFee) + "$";
    _xmlRegStr += " BILL_AMOUNT_EXC_GST=$" + Math.round(RegFee) + "$";
    _xmlRegStr += " CONCESSION_AMOUNT=$" + Math.round(_concession) + "$";
    _xmlRegStr += " NET_AMOUNT=$" + Math.round(regnetamt) + "$";
    _xmlRegStr += " NET_AMOUNT_EXC_GST=$" + Math.round(regnetamt) + "$";
    _xmlRegStr += " PAID_AMOUNT=$" + Math.round(regpayfee) + "$";
    _xmlRegStr += " ADVANCE_AMOUNT=$" + 0 + "$";
    _xmlRegStr += " DUE_AMOUNT=$" + Math.round(regpaydue) + "$";
    _xmlRegStr += " DUE_RECOVERED=$" + 0 + "$";
    _xmlRegStr += " OUTSTANDING_DUE=$" + Math.round(regpaydue) + "$";
    _xmlRegStr += " POST_DISCOUNT=$" + 0 + "$";
    _xmlRegStr += " TOTAL_DISCOUNT=$" + "0" + "$";
    _xmlRegStr += " CANCEL_AMOUNT=$" + 0 + "$";
    _xmlRegStr += " REFUND_AMOUNT=$" + 0 + "$";
    _xmlRegStr += " EXCESS_AMOUNT=$" + 0 + "$";
    _xmlRegStr += " CA_BILL_AMT=$" + 0 + "$";
    _xmlRegStr += " CMP_CNCSN_AMT=$" + 0 + "$";
    _xmlRegStr += " CMP_CNCSN_PCT=$" + 0 + "$";
    _xmlRegStr += " CMP_DUE_AMT=$" + 0 + "$";
    _xmlRegStr += " CMP_GROSS_AMT=$" + 0 + "$";
    _xmlRegStr += " CMP_NET_AMT=$" + 0 + "$";
    _xmlRegStr += " CMP_PAID_AMT=$" + 0 + "$";
    _xmlRegStr += " CMP_TAX_AMT=$" + 0 + "$";
    _xmlRegStr += " CMP_TAX_PCT=$" + 0 + "$";
    _xmlRegStr += " CR_BILL_AMT=$" + 0 + "$";
    _xmlRegStr += " CR_CMP_AMT=$" + 0 + "$";
    _xmlRegStr += " CR_CMP_PCT=$" + cmppersave + "$";
    _xmlRegStr += " CR_PAT_AMT=$" + 0 + "$";
    _xmlRegStr += " CR_PAT_PCT=$" + emppersave + "$";
    _xmlRegStr += " EXC_PHA_AMT=$" + 0 + "$";
    _xmlRegStr += " GROSS_PHA_AMT=$" + 0 + "$";
    _xmlRegStr += " INC_PHA_AMT=$" + 0 + "$";
    _xmlRegStr += " IS_DSCHRG_WITHOUT_BILL=$" + 0 + "$";
    //    _xmlRegStr += " PAT_CNCSN_AMT=$" + 0 + "$";
    //    _xmlRegStr += " PAT_CNCSN_PCT=$" + 0 + "$";
    //    _xmlRegStr += " PAT_DUE_AMT=$" + 0 + "$";
    //    _xmlRegStr += " PAT_GROSS_AMT=$" + 0 + "$";
    //    _xmlRegStr += " PAT_NET_AMT=$" + 0 + "$";
    //    _xmlRegStr += " PAT_PAID_AMT=$" + 0 + "$";
    _xmlRegStr += " PAT_CNCSN_AMT=$" + pat_cncsn_amt + "$";
    _xmlRegStr += " PAT_CNCSN_PCT=$" + pat_cncsn_pct + "$";
    _xmlRegStr += " PAT_DUE_AMT=$" + setProperDecimals(regpaydue) + "$";
    _xmlRegStr += " PAT_GROSS_AMT=$" + Math.round(Pamt) + "$";
    _xmlRegStr += " PAT_NET_AMT=$" + Math.round(PNamt) + "$";
    _xmlRegStr += " PAT_PAID_AMT=$" + setProperDecimals(regpayfee) + "$";

    _xmlRegStr += " PAT_TAX_AMT=$" + 0 + "$";
    _xmlRegStr += " PAT_TAX_PCT=$" + 0 + "$";
    _xmlRegStr += " PERFORMED_PROCS=$" + 0 + "$";
    _xmlRegStr += " PKG_BILL_AMT=$" + 0 + "$";
    _xmlRegStr += " PKG_CNCSN_AMT=$" + 0 + "$";
    _xmlRegStr += " PKG_DUE_AMT=$" + 0 + "$";
    _xmlRegStr += " PKG_EXC_AMT=$" + 0 + "$";
    _xmlRegStr += " PKG_GROSS_AMT=$" + 0 + "$";
    _xmlRegStr += " PKG_INC_AMT=$" + 0 + "$";
    _xmlRegStr += " PKG_NET_AMT=$" + 0 + "$";
    _xmlRegStr += " PKG_PAID_AMT=$" + 0 + "$";
    _xmlRegStr += " PKG_POSTDSC_AMT=$" + 0 + "$";
    _xmlRegStr += " REMARKS=$" + 0 + "$";
    _xmlRegStr += " IS_SHINK=$" + 0 + "$";
    _xmlRegStr += " PKG_TOTAL_RECEIVED_AMT=$" + 0 + "$";
    _xmlRegStr += " REF_ID=$" + 0 + "$";
    _xmlRegStr += " ACC_CMP_ID=$" + 0 + "$";
    _xmlRegStr += " ACC_CMP_AMT=$" + 0 + "$";
    _xmlRegStr += " ACC_CMP_PCT=$" + 0 + "$";
    _xmlRegStr += " ACC_CMP_LVL_ID=$" + 0 + "$";
    _xmlRegStr += " IS_REFERAL=$" + 0 + "$";
    _xmlRegStr += " PKG_EXCESS_AMT=$" + 0 + "$";
    _xmlRegStr += " PCKG_CONV_ID=$" + 0 + "$";
    _xmlRegStr += " PAT_EXCESS_AMT=$" + 0 + "$";
    _xmlRegStr += " CMPNY_REFERAL_LETTER_ID=$" + 0 + "$";
    _xmlRegStr += " PREREFUND=$" + 0 + "$";
    _xmlRegStr += " CORP_ADMN_DT=$" + '' + "$";
    _xmlRegStr += " CORP_DISCHR_DT=$" + '' + "$";
    _xmlRegStr += " PATIENT_CLASS_ID=$" + 0 + "$";
    _xmlRegStr += " OLD_BILL_TYPE_ID=$" + 0 + "$";
    _xmlRegStr += " PATIENT_TYPE_ID=$" + patient_type_id + "$";
    _xmlRegStr += " PKG_RFND_AMT=$" + 0 + "$";
    _xmlRegStr += " PACKAGE_STATUS=$" + 0 + "$";
    _xmlRegStr += " CMP_OUTSTANDING_DUE=$" + 0 + "$";
    _xmlRegStr += " CMP_DUE_RECOVERED=$" + 0 + "$";
    _xmlRegStr += " DISALLOWANCE_AMT=$" + 0 + "$";
    _xmlRegStr += " TDS_AMT=$" + 0 + "$";
    _xmlRegStr += " IS_CORP_APPBILL=$" + 0 + "$";
    _xmlRegStr += " SAMPLE_COLLETED_DATE=$" + "" + "$";
    _xmlRegStr += " CLINLICAL_SUMMARY=$" + 0 + "$";
    _xmlRegStr += " DISC_REQ_REASON=$" + 0 + "$";
    _xmlRegStr += " PKG_EF_FRM_TODT=$" + '' + "$";
    _xmlRegStr += " PKG_DUE_RECOVERED=$" + 0 + "$";
    _xmlRegStr += " CLINLICAL_SUMMARY_FILE=$" + 0 + "$";
    _xmlRegStr += " REFERAL_CUSTMER=$" + 0 + "$";
    _xmlRegStr += " EMP_NARATION=$" + 0 + "$";
    _xmlRegStr += " CNCSN_NARATION=$" + 0 + "$";
    _xmlRegStr += " IS_POST_CONSULT=$" + 0 + "$";
    _xmlRegStr += " BILL_NO=$" + 0 + "$";
    _xmlRegStr += " REFERAL_CUSTOMER_ID=$" + 0 + "$";
    _xmlRegStr += " CENTER_ID=$" + 0 + "$";
    var Token_no = $('[id*=ddlToken]').find('option:selected').text();
    if (Token_no == undefined || Token_no == null || Token_no == 'select') { Token_no = ''; }
    _xmlRegStr += " TOKEN_NO=$" + Token_no + "$";
    _xmlRegStr += " REG_CONS_BILL_ID=$" + 0 + "$";
    _xmlRegStr += " REG_ID=$" + _reg_id + "$";

    _xmlRegStr += " CMP_ID=$" + 0 + "$";
    _xmlRegStr += " BILL_TYPE_ID=$" + 0 + "$";
    _xmlRegStr += " BILL_TYPE_REV_NO=$" + '1' + "$";
    _xmlRegStr += " REFERAL_SOURCE_REV_NO=$" + 1 + "$";
    _xmlRegStr += " REFERAL_TYPE_REV_NO=$" + 1 + "$";
    _xmlRegStr += " REFERAL_DOCTOR_REV_NO=$" + "1" + "$";
    _xmlRegStr += " REFERAL_REF_REV_NO=$" + "1" + "$";
    _xmlRegStr += " DOCTOR_REV_NO=$" + 1 + "$";
    _xmlRegStr += " EMPLOYEE_REV_NO=$" + 1 + "$";
    _xmlRegStr += " CREDIT_TYPE_REV_NO=$" + 1 + "$";
    _xmlRegStr += " CONCESSION_ON_REV_NO=$" + 1 + "$";
    _xmlRegStr += " CONCESSION_MODE_REV_NO=$" + "1" + "$";
    _xmlRegStr += " CONCESSION_TYPE_REV_NO=$" + "1" + "$";
    _xmlRegStr += " CONCESSION_AUTH_REV_NO=$" + "1" + "$";
    _xmlRegStr += " DUE_AUTH_REV_NO=$" + "1" + "$";
    _xmlRegStr += " ACC_CMP_REV_NO=$" + 1 + "$";
    _xmlRegStr += " ACC_CMP_LVL_REV_NO=$" + 1 + "$";
    _xmlRegStr += " GRP_REV_NO=$" + 1 + "$";
    _xmlRegStr += " ORG_REV_NO=$" + "1" + "$";
    _xmlRegStr += " BILL_TYPE=$" + "REG" + "$";
    _xmlRegStr += " REPORT_DISPATCH_ID=$" + _dispatchID + "$";
    _xmlRegStr += " TPA_ID=$" + 0 + "$";
    if (parseFloat(regpaydue) > 0 && document.getElementById('' + ctrlcom + '_hdnisassestreq').value == "True" && document.getElementById('' + ctrlcom + '_ChkAssesment').checked) {
        _xmlRegStr += " RECORD_STATUS=$" + "P" + "$";
    }
    else {
        _xmlRegStr += " RECORD_STATUS=$" + 'A' + "$";
    }
    _xmlRegStr += " SESSION_ID=$" + document.getElementById('' + ctrlcom + '_HDNSESSIONID').value + "$";
    _xmlRegStr += " ROUND_ERR=$" + 0 + "$";
    _xmlRegStr += " EXCESS_AMT=$" + 0 + "$";
    _xmlRegStr += " TRN_SOURCE_ID=$" + 0 + "$";
    _xmlRegStr += " DMS_UPLOAD=$" + 'N' + "$";
    _xmlRegStr += " TRN_DOCUMENT_ID=$" + $('[id*=hdnSessionDocId]').val() + "$";
    _xmlRegStr += " DOCTOR_PCT =$" + 0 + "$";
    _xmlRegStr += " ORG_PCT =$" + 0 + "$";
    _xmlRegStr += " FOREIGN_CATEGORY_ID =$" + 0 + "$";
    _xmlRegStr += " DOCTOR_TYPE =$" + "I" + "$";
    _xmlRegStr += " GST_AMOUNT =$" + 0 + "$";
    _xmlRegStr += " SGST_AMOUNT =$" + 0 + "$";
    _xmlRegStr += " CGST_AMOUNT =$" + 0 + "$";
    _xmlRegStr += " REC_TYPE_ID =$" + rec_type_id + "$";
    _xmlRegStr += " DIAGNOSIS_ID =$" + Diagnosis_id + "$";
    _xmlRegStr += "/>";

    _xmlRegStr += "<FO_BILL_SRV";
    _xmlRegStr += " BILL_SRV_ID=$" + 0 + "$";
    _xmlRegStr += " UMR_NO=$" + UmrNO + "$";
    _xmlRegStr += " SERVICE_TYPE_ID=$" + 5 + "$";
    _xmlRegStr += " SERVICE_GROUP_ID=$" + 0 + "$";
    _xmlRegStr += " SERVICE_ID=$" + 1 + "$";
    _xmlRegStr += " SERVICE_CLASS_ID=$" + 1 + "$";
    _xmlRegStr += " CLASS_SERVICE_ID=$" + 0 + "$";
    _xmlRegStr += " QUANTITY=$" + 1 + "$";
    _xmlRegStr += " RATE=$" + Math.round(RegFee) + "$";
    _xmlRegStr += " RATE_EXC_GST=$" + Math.round(RegFee) + "$";
    _xmlRegStr += " AMOUNT=$" + Math.round(RegFee) + "$";
    _xmlRegStr += " CONCESSION=$" + con_amt + "$";
    _xmlRegStr += " CONCESSION_AMOUNT=$" + Math.round(_concession) + "$";
    _xmlRegStr += " NET_AMOUNT=$" + Math.round(regnetamt) + "$";
    _xmlRegStr += " DOCTOR_PRICE=$" + 0 + "$";
    _xmlRegStr += " ORG_PRICE=$" + 0 + "$";
    _xmlRegStr += " RECORD_SNO=$" + 1 + "$";
    _xmlRegStr += " SERVICE_PRICE_ID=$" + 0 + "$";
    _xmlRegStr += " TO_LOC_ID=$" + 1 + "$";
    _xmlRegStr += " EDIT_SERVICE_NAME=$" + "REGISTRATION" + "$";
    _xmlRegStr += " EDIT_SERVICE_CD=$" + txtServiceCD + "$";
    _xmlRegStr += " IS_FOREIGN_SERVICE=$" + "N" + "$";
    _xmlRegStr += " SERVICE_STATUS=$" + "B" + "$";
    _xmlRegStr += " IS_EMERGENCY=$" + 'N' + "$";
    _xmlRegStr += " IS_EMERGNCY_PRICE=$" + 0 + "$";
    _xmlRegStr += " APPT_NO=$" + _apptID + "$";
    _xmlRegStr += " CONSULTATION_TYPE_ID=$" + 1 + "$";
    _xmlRegStr += " IS_CASH =$" + "N" + "$";
    _xmlRegStr += " TARIFF_ID =$" + 0 + "$";
    _xmlRegStr += " COMPANY_TARIFF_ID =$" + 0 + "$";
    _xmlRegStr += " TRN_SOURCE_ID =$" + 0 + "$";
    _xmlRegStr += " TREATED_BY_ID =$" + Consultant + "$";
    _xmlRegStr += " DOCTOR_ID =$" + Consultant + "$";
    _xmlRegStr += " SESSION_ID=$" + document.getElementById('' + ctrlcom + '_HDNSESSIONID').value + "$";
    _xmlRegStr += " TAX_PCT =$" + 0 + "$";
    _xmlRegStr += " TAX_AMOUNT =$" + 0 + "$";
    _xmlRegStr += " SGST_PCT =$" + 0 + "$";
    _xmlRegStr += " SGST_AMOUNT =$" + 0 + "$";
    _xmlRegStr += " CGST_PCT =$" + 0 + "$";
    _xmlRegStr += " SAC_CD =$" + 0 + "$";
    _xmlRegStr += " REC_TYPE_ID =$" + rec_type_id + "$";
    _xmlRegStr += " />";

    _recpayxml += "<FO_RECPAY_REF ";
    _recpayxml += " RECPAY_REF_ID=$" + "0" + "$";
    _recpayxml += " APPROVE_BY=$" + 0 + "$";
    _recpayxml += " APPROVE_DT=$" + '' + "$";
    _recpayxml += " AMOUNT=$" + Math.round(regpayfee) + "$";
    _recpayxml += " REFERENCE_TYPE_ID=$" + 0 + "$";
    _recpayxml += " DOCTOR_ID=$" + Consultant + "$";
    _recpayxml += " PAYMENT_TYPE_ID=$" + PAYMENT_TYPE_ID + "$";
    _recpayxml += " SESSION_ID=$" + document.getElementById('' + ctrlcom + '_HDNSESSIONID').value + "$";
    var curr_id = document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnstpcurrid').value;
    _recpayxml += " CURR_ID=$" + curr_id + "$";
    _recpayxml += " TRN_SOURCE_ID=$" + 0 + "$";

    _recpayxml += " NET_GROSS_AMT=$" + (RegFee) + "$";
    _recpayxml += " NET_DISCOUNT_AMT=$" + (_concession) + "$";
    _recpayxml += " NET_RECEIPT_AMT=$" + (regpayfee) + "$";
    _recpayxml += " OUTSTANDING_DUE_AMT=$" + regpaydue + "$";
    _recpayxml += " EXCESS_AMT=$" + 0 + "$";
    _recpayxml += " REC_TYPE_ID =$" + rec_type_id + "$";


    _recpayxml += "/>";


    var _xmlStr_concession = '';
    if (document.getElementById('' + ctrlcom + '_ReceiptControl2_chkismultiple').checked == true && document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnRegconSetting').value == "Yes") {
        $("table[id*=gvMultipleConcession] tr:has(td)").each(function (e) {

            var cncsntypeid = $(this).closest('tr').find("[id*=ddlMultiDiscounttype]").val();
            var Amount = $(this).closest('tr').find("input[type=text][id*=txtAmount]").val();
            var authid = $(this).closest('tr').find("input[type=hidden][id*=hdnauthid]").val();
            var _cncsPer = $(this).closest('tr').find("input[type=text][id*=txtPersentage]").val();
            var cncsn_rule_id = document.getElementById('' + ctrlcom + '_umrPatientDetails_hdncncsn_rule_id').value;
            if (parseInt(cncsn_rule_id) > 0)
            { }
            else
            { cncsn_rule_id = 0; }
            if (cncsn_rule_id == undefined || cncsn_rule_id == null || cncsn_rule_id == '')
            { cncsn_rule_id = 0; }
            var _ddlmodeid = $(this).closest('tr').find("[id*=ddlModes]").val();
            var _Cardno = $(this).closest('tr').find("input[type=text][id*=txtcardno]").val();
            var cncsremarks = $(this).closest('tr').find("input[type=text][id*=txtCRemks]").val();
            if (cncsntypeid == undefined || cncsntypeid == null || cncsntypeid == '') { cncsntypeid = 0; }
            if (Amount == undefined || Amount == null || Amount == '' || Amount == "NaN") { Amount = 0; }
            if (authid == undefined || authid == null || authid == '') { authid = 0; }
            if (_cncsPer == undefined || _cncsPer == null || _cncsPer == '') { _cncsPer = 0; }
            if (_ddlmodeid == undefined || _ddlmodeid == null || _ddlmodeid == '') { _ddlmodeid = 0; }
            if (_Cardno == undefined || _Cardno == null) { _Cardno = ''; }

            var cardid = 0;
            if (cncsntypeid == 2) {
                cardid = $(this).closest('tr').find("input[type=hidden][id*=hdncardid]").val();
            } else if (cncsntypeid == 5) {
                cardid = $(this).closest('tr').find("input[type=hidden][id*=hdneventid]").val();
            } else if (cncsntypeid == 6) {
                cardid = $(this).closest('tr').find("input[type=hidden][id*=hdnRuleid]").val();
            } else {
                cardid = 0;
            }

            if (cncsntypeid != '0' && parseFloat(_cncsPer) > 0 && parseFloat(Amount) > 0) {

                _xmlStr_concession += "<FO_BILL_CNCSN";
                _xmlStr_concession += " BILL_CNCSN_ID=$" + 0 + "$";
                _xmlStr_concession += " BILL_CNCSN_REV_NO=$" + 1 + "$";
                _xmlStr_concession += " BILL_ID=$" + "0" + "$";
                _xmlStr_concession += " CONCESSION_TYPE_ID=$" + cncsntypeid + "$";
                _xmlStr_concession += " CONCESSION_MODE_ID=$" + _ddlmodeid + "$";
                _xmlStr_concession += " CONCESSION_PERCENT=$" + _cncsPer + "$";
                _xmlStr_concession += " CONCESSION_AMOUNT=$" + Math.round(Amount) + "$";
                _xmlStr_concession += " RECORD_STATUS=$" + "A" + "$";
                _xmlStr_concession += " CNCSN_RULE_ID=$" + cardid + "$";
                _xmlStr_concession += " CARD_NO=$" + ReplaceSplCharactor(_Cardno) + "$";
                _xmlStr_concession += " CNCSN_AUTH_ID=$" + authid + "$";
                _xmlStr_concession += " CNCSN_REF_NO=$" + 0 + "$";
                _xmlStr_concession += " REMARKS=$" + ReplaceSplCharactor(cncsremarks) + "$";
                _xmlStr_concession += "/>";
            }
        });
        $("table[id$=gvServices] tr:has(td)").each(function (e) {

            var hdnServiceID = $(this).closest('tr').find("input[type=hidden][id*=hdnServiceID]").val();
            var txtserviceName = $(this).closest('tr').find("input[type=text][id*=txtServiceName]").val();
            var hdnDoctorID = $(this).closest('tr').find("input[type=hidden][id*=hdnDoctorID]").val();
            if (txtserviceName == "REGISTRATION" && hdnServiceID == "1") {
                var staffConAmt = $(this).closest('tr').find('input[type=text][id*=txtstAmt]').val();
                var staffConper = $(this).closest('tr').find('input[type=text][id*=txtstPer]').val();
                var mngmtConper = $(this).closest('tr').find('input[type=text][id*=txtmaPer]').val();
                var MngmtConAmt = $(this).closest('tr').find('input[type=text][id*=txtmgAmt]').val();
                var ebConper = $(this).closest('tr').find('input[type=text][id*=txtebPer]').val();
                var ebConAmt = $(this).closest('tr').find('input[type=text][id*=txtebAmt]').val();
                var ConRuleConper = $(this).closest('tr').find('input[type=text][id*=txtRulePer]').val();
                var ConRuleConAmt = $(this).closest('tr').find('input[type=text][id*=txtcncrlAmt]').val();
                var HCConper = $(this).closest('tr').find('input[type=text][id*=txthcPer]').val();
                var HCConAmt = $(this).closest('tr').find('input[type=text][id*=txtHcAmt]').val();
                var CashConper = $(this).closest('tr').find('input[type=text][id*=txtDiscP]').val();
                var CashConAmt = $(this).closest('tr').find('input[type=text][id*=txtDiscAmt]').val();
                if (staffConper == '' || staffConper == undefined || staffConper == null) { staffConper = 0; }
                if (staffConAmt == '' || staffConAmt == undefined || staffConAmt == null) { staffConAmt = 0; }
                if (mngmtConper == '' || mngmtConper == undefined || mngmtConper == null) { mngmtConper = 0; }
                if (MngmtConAmt == '' || MngmtConAmt == undefined || MngmtConAmt == null) { MngmtConAmt = 0; }
                if (ebConper == '' || ebConper == undefined || ebConper == null) { ebConper = 0; }
                if (ebConAmt == '' || ebConAmt == undefined || ebConAmt == null) { ebConAmt = 0; }
                if (ConRuleConper == '' || ConRuleConper == undefined || ConRuleConper == null) { ConRuleConper = 0; }
                if (ConRuleConAmt == '' || ConRuleConAmt == undefined || ConRuleConAmt == null) { ConRuleConAmt = 0; }
                if (HCConper == '' || HCConper == undefined || HCConper == null) { HCConper = 0; }
                if (HCConAmt == '' || HCConAmt == undefined || HCConAmt == null) { HCConAmt = 0; }
                if (CashConper == '' || CashConper == undefined || CashConper == null) { CashConper = 0; }
                if (CashConAmt == '' || CashConAmt == undefined || CashConAmt == null) { CashConAmt = 0; }
                if (hdnServiceID == '' || hdnServiceID == undefined || hdnServiceID == null) { hdnServiceID = 0; }
                if (hdnDoctorID == '' || hdnDoctorID == undefined || hdnDoctorID == null) { hdnDoctorID = 0; }

                $("table[id*=gvMultipleConcession] tr:has(td)").each(function (e) {

                    var cncsntypeid = $(this).closest('tr').find("[id*=ddlMultiDiscounttype]").val();
                    var Amount = $(this).closest('tr').find("input[type=text][id*=txtAmount]").val();
                    if (cncsntypeid == undefined || cncsntypeid == null || cncsntypeid == "") { cncsntypeid = 0; }
                    if (Amount == undefined || Amount == null || Amount == "" || Amount == "NaN") { Amount = 0; }

                    var _Cncs_Per = 0;
                    if (cncsntypeid == '1') {
                        _Cncs_Per = CashConper;
                    }
                    else if (cncsntypeid == '2') {
                        _Cncs_Per = HCConper;
                    }
                    else if (cncsntypeid == '3') {
                        _Cncs_Per = mngmtConper;
                    }
                    else if (cncsntypeid == '4') {
                        _Cncs_Per = staffConper;
                    }
                    else if (cncsntypeid == '5') {
                        _Cncs_Per = ebConper;
                    }
                    else if (cncsntypeid == '6') {
                        _Cncs_Per = ConRuleConper;
                    }


                    if (cncsntypeid > 0 && parseFloat(Amount) > 0 && parseFloat(_Cncs_Per) > 0) {
                        _xmlStr_concession += "<FO_BILL_SRV_CNCSN";
                        _xmlStr_concession += " BILL_SRV_CNCSN_ID=$" + 0 + "$";
                        _xmlStr_concession += " BILL_SRV_ID=$" + 0 + "$";
                        _xmlStr_concession += " BILL_CNCSN_ID=$" + "0" + "$";
                        _xmlStr_concession += " CONCESSION_TYPE_ID=$" + cncsntypeid + "$";
                        _xmlStr_concession += " CONCESSION_AMOUNT=$" + Math.round(Amount) + "$";
                        _xmlStr_concession += " PAT_CONC_PER=$" + CashConper + "$";
                        _xmlStr_concession += " PAT_CONC_AMT=$" + Math.round(CashConAmt) + "$";
                        _xmlStr_concession += " HC_PERC=$" + HCConper + "$";
                        _xmlStr_concession += " HC_AMT=$" + Math.round(HCConAmt) + "$";
                        _xmlStr_concession += " MG_PERC=$" + mngmtConper + "$";
                        _xmlStr_concession += " MG_AMT=$" + Math.round(MngmtConAmt) + "$";
                        _xmlStr_concession += " STAFF_PERC=$" + staffConper + "$";
                        _xmlStr_concession += " STAFF_AMT=$" + Math.round(staffConAmt) + "$";
                        _xmlStr_concession += " EB_PERC=$" + ebConper + "$";
                        _xmlStr_concession += " EB_AMT=$" + Math.round(ebConAmt) + "$";
                        _xmlStr_concession += " CNCSNRULEPERC=$" + ConRuleConper + "$";
                        _xmlStr_concession += " CNCSNRULEAMT=$" + Math.round(ConRuleConAmt) + "$";
                        _xmlStr_concession += " RECORD_STATUS=$" + 'A' + "$";
                        _xmlStr_concession += " SERVICE_ID=$" + hdnServiceID + "$";
                        _xmlStr_concession += " DOCTOR_ID=$" + hdnDoctorID + "$";
                        _xmlStr_concession += " CONCESSION_PERCENT=$" + _Cncs_Per + "$";
                        _xmlStr_concession += "/>";
                    }
                });
            }
        });

    }
    else if (document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnRegconSetting').value == "Yes" && document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlDiscountType').value == 1) {
        /* Single Discount */

        var sing_disc_auth = $('#' + ctrlcom + '_ReceiptControl2_ucdueauth__hiddenID').val();
        if (sing_disc_auth == undefined || sing_disc_auth == null || sing_disc_auth == '' || sing_disc_auth == 'undefined') { sing_disc_auth = 0; }
        Con_Remarks = $('#' + ctrlcom + '_ReceiptControl2_txtRemarks').val();
        $("table[id$=gvServices] tr:has(td)").each(function (e) {
            var hdnServiceID = $(this).closest('tr').find("input[type=hidden][id*=hdnServiceID]").val();
            var txtserviceName = $(this).closest('tr').find("input[type=text][id*=txtServiceName]").val();
            var hdnDoctorID = $(this).closest('tr').find("input[type=hidden][id*=hdnDoctorID]").val();
            if (txtserviceName == "REGISTRATION" && hdnServiceID == "1") {
                var CashConper = $(this).closest('tr').find('input[type=text][id*=txtDiscP]').val();
                var CashConAmt = $(this).closest('tr').find('input[type=text][id*=txtDiscAmt]').val();
                if (CashConper == '' || CashConper == undefined || CashConper == null) { CashConper = 0; }
                if (CashConAmt == '' || CashConAmt == undefined || CashConAmt == null) { CashConAmt = 0; }
                if (hdnServiceID == '' || hdnServiceID == undefined || hdnServiceID == null) { hdnServiceID = 0; }
                if (hdnDoctorID == '' || hdnDoctorID == undefined || hdnDoctorID == null) { hdnDoctorID = 0; }
                if (parseFloat(CashConper) > 0 && parseFloat(CashConAmt) > 0) {
                    _xmlStr_concession += "<FO_BILL_CNCSN";
                    _xmlStr_concession += " BILL_CNCSN_ID=$" + 0 + "$";
                    _xmlStr_concession += " BILL_CNCSN_REV_NO=$" + 1 + "$";
                    _xmlStr_concession += " BILL_ID=$" + "0" + "$";
                    _xmlStr_concession += " CONCESSION_TYPE_ID=$" + 1 + "$";
                    _xmlStr_concession += " CONCESSION_MODE_ID=$" + 1 + "$";
                    _xmlStr_concession += " CONCESSION_PERCENT=$" + CashConper + "$";
                    _xmlStr_concession += " CONCESSION_AMOUNT=$" + Math.round(CashConAmt) + "$";
                    _xmlStr_concession += " RECORD_STATUS=$" + "A" + "$";
                    _xmlStr_concession += " CNCSN_RULE_ID=$" + "" + "$";
                    _xmlStr_concession += " CARD_NO=$" + "" + "$";
                    _xmlStr_concession += " CNCSN_AUTH_ID=$" + sing_disc_auth + "$";
                    _xmlStr_concession += " CNCSN_REF_NO=$" + 0 + "$";
                    _xmlStr_concession += " REMARKS=$" + ReplaceSplCharactor(Con_Remarks) + "$";
                    _xmlStr_concession += " BILL_TYPE_ID=$" + "0" + "$";
                    _xmlStr_concession += "/>";

                    _xmlStr_concession += "<FO_BILL_SRV_CNCSN";
                    _xmlStr_concession += " BILL_SRV_CNCSN_ID=$" + 0 + "$";
                    _xmlStr_concession += " BILL_SRV_ID=$" + 0 + "$";
                    _xmlStr_concession += " BILL_CNCSN_ID=$" + "0" + "$";
                    _xmlStr_concession += " CONCESSION_TYPE_ID=$" + 1 + "$";
                    _xmlStr_concession += " CONCESSION_AMOUNT=$" + setProperDecimals(CashConAmt) + "$";
                    _xmlStr_concession += " PAT_CONC_PER=$" + CashConper + "$";
                    _xmlStr_concession += " PAT_CONC_AMT=$" + setProperDecimals(CashConAmt) + "$";
                    _xmlStr_concession += " HC_PERC=$" + 0 + "$";
                    _xmlStr_concession += " HC_AMT=$" + 0 + "$";
                    _xmlStr_concession += " MG_PERC=$" + 0 + "$";
                    _xmlStr_concession += " MG_AMT=$" + 0 + "$";
                    _xmlStr_concession += " STAFF_PERC=$" + 0 + "$";
                    _xmlStr_concession += " STAFF_AMT=$" + 0 + "$";
                    _xmlStr_concession += " EB_PERC=$" + 0 + "$";
                    _xmlStr_concession += " EB_AMT=$" + 0 + "$";
                    _xmlStr_concession += " CNCSNRULEPERC=$" + 0 + "$";
                    _xmlStr_concession += " CNCSNRULEAMT=$" + 0 + "$";
                    _xmlStr_concession += " RECORD_STATUS=$" + 'A' + "$";
                    _xmlStr_concession += " SERVICE_ID=$" + hdnServiceID + "$";
                    _xmlStr_concession += " DOCTOR_ID=$" + hdnDoctorID + "$";
                    _xmlStr_concession += " CONCESSION_PERCENT=$" + CashConper + "$";
                    _xmlStr_concession += "/>";
                }
            }
        });
    }
 //   _xmlStr_concession += SaveMOUDiscount();;
    _xmlRegStr += _xmlStr_concession;
    _xmlRegStr += "</root>";

    return _xmlRegStr;

}
function RegistrationSave() {
    _recpayxml = '';
    var rec_type_id = 0;
    if (document.getElementById('ctl00_hdnIsMedClg').value == "TRUE") {
        rec_type_id = $('input[id*=radiousertran]:checked').val()
        if (rec_type_id == 0 || rec_type_id == null || rec_type_id == undefined) { rec_type_id = 1; }
    }
    else { rec_type_id = 1; }

    var error_Reg_net_amount = 0;
    var VIP = document.getElementById('' + ctrlcom + '_rbt_pat_type_1').checked;
    var VVIP = document.getElementById('' + ctrlcom + '_rbt_pat_type_2').checked;
    var routine = document.getElementById('' + ctrlcom + '_rbt_pat_type_0').checked;
    if (VIP == true) { VIP = "V"; } else if (VVIP == true) { VIP = "VV" } else { VIP = "R"; }
    var IS_NEW_BORN = document.getElementById('' + ctrlcom + '_ChkNBorn').checked ? 'Y' : 'N';
    var IS_OLD = $('#' + ctrlcom + '_chkisold')[0].checked == true ? 'Y' : 'N';
    var remarks = document.getElementById('' + ctrlcom + '_source_remarks').value;
    remarks = ReplaceSplCharactor(remarks);
    var ddlRegType = document.getElementById('' + ctrlcom + '_ddlRegType').value;
    var staff_id = document.getElementById('' + ctrlcom + '_UcStaffName__hiddenID').value;
    var staff_relation = document.getElementById('' + ctrlcom + '_StaffRelation').value;

    var UmrNO = '', _reg_id = 0;
    if (document.getElementById('' + ctrlcom + '_chkisold').checked == true) {
        UmrNO = document.getElementById('' + ctrlcom + '_ucUMRno_txtSearchControl').value;
        _reg_id = document.getElementById('' + ctrlcom + '_hdnRegID').value;
        if (_reg_id == undefined || _reg_id == null || _reg_id == '') { _reg_id = "0"; }
    }

    else {
        UmrNO = document.getElementById('' + ctrlcom + '_txtumrno').value;
    }

    if (document.getElementById('' + ctrlcom + '_UcAppointmentNo_txtSearchControl').value != '' && document.getElementById('' + ctrlcom + '_hdnAPTID').value != '') {
        __apptID = document.getElementById('' + ctrlcom + '_hdnAPTID').value;
    }
    var _apID = document.getElementById('' + ctrlcom + '_ApptPatientId').value;
    if (_apID == '' || _apID == null || _apID == undefined) { _apID = 0; }
    if (_app_pat_id == '' || _app_pat_id == null || _app_pat_id == undefined) { _app_pat_id = 0; }
    if (_apID == '0' && _app_pat_id > 0) {
        document.getElementById('' + ctrlcom + '_ApptPatientId').value = _app_pat_id;
    }

    var RegNo = document.getElementById('' + ctrlcom + '_txtRegistration').value;
    var RegDt = document.getElementById('' + ctrlcom + '_txtRegDateTime').value;
    var RegValidity = document.getElementById('' + ctrlcom + '_txtregValidity').value;
    var RegFee = document.getElementById('' + ctrlcom + '_txtregfee').value;
    if (RegFee == undefined || RegFee == null || RegFee == '') { RegFee = "0"; }
    var ddlTitle = document.getElementById('' + ctrlcom + '_ddlTitle').value;
    var txtFirstName = document.getElementById('' + ctrlcom + '_txtFirstName').value;
    txtFirstName = ReplaceSplCharactor(txtFirstName);
    var txtMiddleName = document.getElementById('' + ctrlcom + '_txtMiddleName').value;
    txtMiddleName = ReplaceSplCharactor(txtMiddleName);
    var lastName = document.getElementById('' + ctrlcom + '_txtLastName').value;
    lastName = ReplaceSplCharactor(lastName);
    var Aliasname = "";
    Aliasname = ReplaceSplCharactor(Aliasname);
    var ddlDisplayName = document.getElementById('' + ctrlcom + '_txtDisplayname').innerHTML;
    DisplayName = ReplaceSplCharactor(ddlDisplayName);
    var MotherName = document.getElementById('' + ctrlcom + '_txtMotherMName').value;
    MotherName = ReplaceSplCharactor(MotherName);


    var Fathername = document.getElementById('' + ctrlcom + '_txtfathername').value;
    Fathername = ReplaceSplCharactor(Fathername);
    var ddlGender = document.getElementById('' + ctrlcom + '_ddlGender').value;
    var dob = document.getElementById('' + ctrlcom + '_newAgeUc_txtDob').value;
    var Pat_Year = document.getElementById('' + ctrlcom + '_newAgeUc_txtYear').value;
    var Pat_Month = document.getElementById('' + ctrlcom + '_newAgeUc_txtMonths').value;
    var Pat_Days = document.getElementById('' + ctrlcom + '_newAgeUc_txtDay').value;
    var Pat_Hours = document.getElementById('' + ctrlcom + '_newAgeUc_txtDay').value;
    var Pat_Minits = document.getElementById('' + ctrlcom + '_newAgeUc_txtDay').value;

    if (Pat_Year == null || Pat_Year == undefined || Pat_Year == '') { Pat_Year = '0'; }
    if (Pat_Month == null || Pat_Month == undefined || Pat_Month == '') { Pat_Month = '0'; }
    if (Pat_Days == null || Pat_Days == undefined || Pat_Days == '') { Pat_Days = '0'; }
    if (Pat_Hours == null || Pat_Hours == undefined || Pat_Hours == '') { Pat_Hours = '0'; }
    if (Pat_Minits == null || Pat_Minits == undefined || Pat_Minits == '') { Pat_Minits = '0'; }
    var PatientAge = Pat_Year + "," + Pat_Month + "," + Pat_Days + "," + Pat_Hours + "," + Pat_Minits;
    var RespPersonType = document.getElementById('' + ctrlcom + '_ddlResPerson').value;
    var RespPersonName = document.getElementById('' + ctrlcom + '_txtResPerson').value;
    var MarStatus = document.getElementById('' + ctrlcom + '_ddlMaritalStatus').value;
    var BloodGrp_Id = document.getElementById('' + ctrlcom + '_ddlBloodGroup').value;
    var Occupation = document.getElementById('' + ctrlcom + '_ddlOccupation').value;
    var Religion = document.getElementById('' + ctrlcom + '_ddlReligion').value;
    var Ethnicity = document.getElementById('' + ctrlcom + '_ddlEthnicity').value;
    var Nationality = document.getElementById('' + ctrlcom + '_ddlNationality').value;
    var PatType = document.getElementById('' + ctrlcom + '_ddlPatientType').value;
    var Consultant = document.getElementById('' + ctrlcom + '_ucConsultant__hiddenID').value;
    var Questionary = document.getElementById('' + ctrlcom + '_ddlquestionary').value;
    var Pat_HH = document.getElementById('' + ctrlcom + '_newAgeUc_txtHH').value;
    var Pat_MM = document.getElementById('' + ctrlcom + '_newAgeUc_txtMM').value;
    if (Pat_HH == null || Pat_HH == undefined || Pat_HH == '') { Pat_HH = '0'; }
    if (Pat_MM == null || Pat_MM == undefined || Pat_MM == '') { Pat_MM = '0'; }
    if (IS_NEW_BORN == "Y") {
        pdob = document.getElementById('' + ctrlcom + '_newAgeUc_txtDob').value;
        PatientAge = Pat_Year + "," + Pat_Month + "," + Pat_Days + "," + Pat_HH + "," + Pat_MM;
        // Pat_HH = new Date().format('hh') - Pat_HH;
        // Pat_MM = new Date().format('mm') - Pat_MM;
        dob = pdob + " " + Pat_HH + ":" + Pat_MM;
    }
    else {
        PatientAge = Pat_Year + "," + Pat_Month + "," + Pat_Days;
        dob = document.getElementById('' + ctrlcom + '_newAgeUc_txtDob').value;
        //    RespPersonType = 4;
        // RespPersonName = ddlDisplayName;
    }
    /*dob = Date.parse(dob).format('dd-MMM-yyyy');*/
    if (dob.length == 11) {
        dob = dob;
    } else {
        if (IS_NEW_BORN == "Y") {
            var day = (pdob.split('-')[0]);
            var month = new Date((pdob.split('-')[1])).format('MMM');
            var year = (pdob.split('-')[2]);
            dob = pdob + " " + Pat_HH + ":" + Pat_MM
            // dob = day + '-' + month + '-' + year + ' ' + Pat_HH + ':' + Pat_MM;
            // dob =  new Date(new_age).format('dd-MMM-yyyy hh:mm');

        }
        else {
            dob = $.datepicker.parseDate('dd-mm-yy', dob).format('dd-MMM-yyyy');
        }
    }
    //Contact Details
    var isdcodemobile1 = $('#isdcodemobile1').text();
    var isdcodemobile3 = $('#isdcodemobile3').text();
    if (isdcodemobile1 == undefined || isdcodemobile1 == null || isdcodemobile1 == "NaN--NaN" || isdcodemobile1 == '' || isdcodemobile1 == NaN) {
        isdcodemobile1 = '';
    }

    if (isdcodemobile3 == undefined || isdcodemobile3 == null || isdcodemobile3 == "NaN--NaN" || isdcodemobile3 == '' || isdcodemobile3 == NaN) {
        isdcodemobile3 = '';
    }
    var Mobile1 = document.getElementById('' + ctrlcom + '_Address1_txtMobile1').value;
    var Mobile2 = document.getElementById('' + ctrlcom + '_Address1_txtMobile2').value;

    Mobile1 = isdcodemobile1 + Mobile1;
    Mobile2 = isdcodemobile3 + Mobile2;
    var homePhone = document.getElementById('' + ctrlcom + '_Address1_txtMobile2').value;
    if (homePhone == undefined || homePhone == null || homePhone == '')
    { homePhone = '0'; }
    var EmailID = document.getElementById('' + ctrlcom + '_Address1_txtemail').value;

    //Company Information
    var rfltrid = document.getElementById('' + ctrlcom + '_uccorporate_ucRefLetterNo__hiddenID').value;
    if (rfltrid == '' || rfltrid == null || rfltrid == undefined) { rfltrid = '0'; }
    // var Cmp_Cd = document.getElementById('' + ctrlcom + '_EmployerInfo1_lblCmpCode').value;
    var Cmp_Name = document.getElementById('' + ctrlcom + '_EmployerInfo1_EmployerControl1_txtSearchControl').value;
    var Cmp_Id = document.getElementById('' + ctrlcom + '_EmployerInfo1_EmployerControl1__hiddenID').value;
    //  var Cmp_Fee = document.getElementById('' + ctrlcom + '_EmployerInfo1_txtCmpFee').value;
    var Emp_Id = document.getElementById('' + ctrlcom + '_EmployerInfo1_txtEmploeeID').value;
    var Emp_Name = document.getElementById('' + ctrlcom + '_EmployerInfo1_txtEmployeeName').value;
    //   var Salary = document.getElementById('' + ctrlcom + '_EmployerInfo1_txtSalary').value;
    var Designation = document.getElementById('' + ctrlcom + '_EmployerInfo1_txtDesignation').value;
    var Relationship = document.getElementById('' + ctrlcom + '_EmployerInfo1_ddlrelation').value;
    var Emp_Dept = document.getElementById('' + ctrlcom + '_EmployerInfo1_ddlCorpDept').value;
    var GradeID = document.getElementById('' + ctrlcom + '_EmployerInfo1_txtempgrade').value;
    var Branch = document.getElementById('' + ctrlcom + '_EmployerInfo1_ddlCorpBranch').value;
    var Contact = document.getElementById('' + ctrlcom + '_EmployerInfo1_txtEmpContactNo').value;
    var MedCardNo = document.getElementById('' + ctrlcom + '_EmployerInfo1_txtEmpMRNo').value;
    var EmpCardValidity = document.getElementById('' + ctrlcom + '_EmployerInfo1_txtEmpCardValidity').value;
    var RefLetterNo = document.getElementById('' + ctrlcom + '_EmployerInfo1_txtrefletter').value;
    var DateofIssue = document.getElementById('' + ctrlcom + '_EmployerInfo1_txtrefissuedt').value;

    var LetterValidity = document.getElementById('' + ctrlcom + '_EmployerInfo1_txtlettervalidity').value;
    var DeptName = document.getElementById('' + ctrlcom + '_EmployerInfo1_txtDept').value;
    var BranchID = document.getElementById('' + ctrlcom + '_EmployerInfo1_txtBranch').value;
    var empsamepatient = "N"; // document.getElementById('' + ctrlcom + '_EmployerInfo1_chkEmpASPatient').checked;
    if (empsamepatient == true) { empsamepatient = "Y"; } else { empsamepatient = "N"; }
    var TPA_ID = document.getElementById('' + ctrlcom + '_EmployerInfo1_uctpa__hiddenID').value;
    if (TPA_ID == "" || TPA_ID == undefined || TPA_ID == null) { TPA_ID = "0"; }
    var iscorporate = TPA_ID > 0 ? 'Y' : 'N';


    var EmpDepID = $('#' + ctrlcom + '_hdnEmpDepID').val();

    //Passport Details
    var PassportNo = document.getElementById('' + ctrlcom + '_txtPassprotno').value;
    var IssueDt = document.getElementById('' + ctrlcom + '_txtIssueDt').value;
    var ExpiryDt = document.getElementById('' + ctrlcom + '_txtExpiryDt').value;
    var IssuedAt = document.getElementById('' + ctrlcom + '_txtissuedat').value;
    var IssuedAtID = document.getElementById('' + ctrlcom + '_HiddenField4').value;
    var proofno = document.getElementById('' + ctrlcom + '_txtSSN').value;
    var Proof_id = document.getElementById('' + ctrlcom + '_ddlproofid').value;
    if (Proof_id == undefined || Proof_id == null || Proof_id == '') { Proof_id = "0"; }
    if (IssuedAtID == undefined || IssuedAtID == null || IssuedAtID == '' || IssuedAtID == 'undefined') { IssuedAtID = "0"; }

    var ReferalSourceId = document.getElementById('' + ctrlcom + '_ucReferal_ddlreferral').value;
    var ReferalDoctorId = document.getElementById('' + ctrlcom + '_ucReferal__hdnID').value;
    var Method_Id = '0';
    var renewalchk = document.getElementById('' + ctrlcom + '_chkisold').checked;
    var isoldchk = document.getElementById('' + ctrlcom + '_chk_old').checked;
    var fmlyPatId = document.getElementById('' + ctrlcom + '_UcFamilyReff__hiddenID').value;

    var Pat_ID = document.getElementById('' + ctrlcom + '_hdnPatientid').value;
    if (document.getElementById('' + ctrlcom + '_chk_old').checked == true) {
        Pat_ID = Pat_ID;
    } else {
        Pat_ID = 0;
    }


    var Address_type = document.getElementById('' + ctrlcom + '_Address1_ddrelationaddr').value;
    if (Address_type == '0' || Address_type == '' || Address_type == null || Address_type == undefined) { Address_type = 14; }
    var add1 = ''; var add2 = ''; var add3 = ''; var addrev1 = ''; var addrev2 = ''; var addrev3 = ''; var ref1 = ''; var ref2 = ''; var ref3 = ''; var ref4 = '';
    if (parseInt(Pat_ID) > 0) {
        add1 = document.getElementById('' + ctrlcom + '_hdnadd1').value;
        add2 = document.getElementById('' + ctrlcom + '_hdnadd2').value;
        add3 = document.getElementById('' + ctrlcom + '_hdnadd3').value;

        addrev1 = document.getElementById('' + ctrlcom + '_hdnaddrev1').value;
        addrev2 = document.getElementById('' + ctrlcom + '_hdnaddrev2').value;
        addrev3 = document.getElementById('' + ctrlcom + '_hdnaddrev3').value;

        ref1 = document.getElementById('' + ctrlcom + '_hdnref1').value;
        ref2 = document.getElementById('' + ctrlcom + '_hdnref2').value;
        ref3 = document.getElementById('' + ctrlcom + '_hdnref3').value;
        ref4 = document.getElementById('' + ctrlcom + '_hdnref4').value;
    }
    var REG_ID = $('#' + ctrlcom + '_hdnCrpRegId').val();

    var VIP_TYPE_ID = document.getElementById('' + ctrlcom + '_dd_reg_source').value;
    var VIP_remarks = document.getElementById('' + ctrlcom + '_source_remarks').value;
    var staff_id = document.getElementById('' + ctrlcom + '_UcStaffName__hiddenID').value;
    var _agesource = document.getElementById('' + ctrlcom + '_newAgeUc_hdnageSource').value;
    var _familyrefNo = document.getElementById('' + ctrlcom + '_UcFamilyReff_txtSearchControl').value;
    if (_familyrefNo == undefined || _familyrefNo == null) { _familyrefNo = ""; }
    var _seniorcitizen = 'N';
    var stop_alert = document.getElementById('' + ctrlcom + '_Address1_chkDND').checked;
    if (stop_alert == false) { stop_alert = "N"; } else { stop_alert = "Y"; }
    if (ddlGender == '1') {
        if (Pat_Year > '60') { _seniorcitizen = 'Y'; } else { _seniorcitizen = 'N'; }
    }
    else if (ddlGender == '2') {
        if (Pat_Year > '58') { _seniorcitizen = 'Y'; } else { _seniorcitizen = 'N'; }
    }
    if (document.getElementById('ctl00_ContentPlaceHolder1_chkIsSenior').checked == true) {
        _seniorcitizen = 'Y';
    }
    else {
        _seniorcitizen = 'N';
    }
    var _is_mlc = '';
    if (document.getElementById('ctl00_ContentPlaceHolder1_ChkMlcStatus').checked == true) {
        _is_mlc = 'Y';
    }
    else {
        _is_mlc = 'N';
    }
    if (ddlRegType == 12) {
        staff_id = document.getElementById('' + ctrlcom + '_ddlhctype').value;
    }

    if (VIP_TYPE_ID == undefined || VIP_TYPE_ID == null || VIP_TYPE_ID == '') { VIP_TYPE_ID = "0"; }
    if (staff_id == undefined || staff_id == null || staff_id == '') { staff_id = "0"; }
    if (Pat_ID == null || Pat_ID == undefined || Pat_ID == '') { Pat_ID = '0'; }
    var _pre_reg_id = document.getElementById('' + ctrlcom + '_hdnpreregid').value;
    if (_pre_reg_id == undefined || _pre_reg_id == null || _pre_reg_id == '') { _pre_reg_id = "0"; }


    if (document.getElementById('' + ctrlcom + '_chk_old').checked == true) {
        if (document.getElementById('' + ctrlcom + '_uccorporate_ddlPaymentBy').value == '1') {
            var Pat_cat = document.getElementById('' + ctrlcom + '_UCServices_ddlpatcat').value;
        } else if (document.getElementById('' + ctrlcom + '_uccorporate_ddlPaymentBy').value == '2') {
            var Pat_cat = $('[id*=hdnforeigncatid]').val();

        }
    }
    else {
        var Pat_cat = document.getElementById('' + ctrlcom + '_UCServices_ddlpatcat').value;

    }


    if (Pat_cat == null || Pat_cat == undefined || Pat_cat == '' || Pat_cat == '--Select--') { Pat_cat = '0'; }
    if (document.getElementById('' + ctrlcom + '_Address1_hdnIsAssesment').value == 'True') {
        /*EC Details  */
        var Ec_Name = document.getElementById('' + ctrlcom + '_Address1_UcGuarantor_txtEName').value;
        var Ec_Relation = document.getElementById('' + ctrlcom + '_Address1_UcGuarantor_ddlERelation').value;

        var isdcodemobile5 = $('#isdcodemobile5').text();

        if (isdcodemobile5 == undefined || isdcodemobile5 == null || isdcodemobile5 == "NaN--NaN" || isdcodemobile5 == '' || isdcodemobile5 == NaN) {
            isdcodemobile5 = '';
        }
        var Ec_MblNo = document.getElementById('' + ctrlcom + '_Address1_UcGuarantor_txtmobileno').value;

        Ec_MblNo = isdcodemobile5 + Ec_MblNo;
        var Ec_Address1 = document.getElementById('' + ctrlcom + '_Address1_UcGuarantor_txtAddress1').value;
        Ec_Address1 = ReplaceSplCharactor(Ec_Address1);
        var Ec_Address2 = document.getElementById('' + ctrlcom + '_Address1_UcGuarantor_txtAddress2').value;
        Ec_Address2 = ReplaceSplCharactor(Ec_Address2);
        var Ec_Area = document.getElementById('' + ctrlcom + '_Address1_UcGuarantor_ucArea_txtSearchControl').value;
        var Ec_AreaId = document.getElementById('' + ctrlcom + '_Address1_UcGuarantor_ucArea__hiddenID').value;
        var Ec_City = document.getElementById('' + ctrlcom + '_Address1_UcGuarantor_ucCity').value;
        var Ec_CityId = document.getElementById('' + ctrlcom + '_Address1_UcGuarantor_hdncityid').value;
        var Ec_State = document.getElementById('' + ctrlcom + '_Address1_UcGuarantor_ucState').value;
        var Ec_StateId = document.getElementById('' + ctrlcom + '_Address1_UcGuarantor_hdnstateid').value;
        var Ec_Country = document.getElementById('' + ctrlcom + '_Address1_UcGuarantor_ucCountry').value;
        var Ec_CountryId = document.getElementById('' + ctrlcom + '_Address1_UcGuarantor_hdncountryid').value;
        var Ec_Pin = document.getElementById('' + ctrlcom + '_Address1_UcGuarantor_txtPin').value;
        var Ec_hdnPin = document.getElementById('' + ctrlcom + '_Address1_UcGuarantor_hdnpincode').value;
        var Ec_PhnNo = document.getElementById('' + ctrlcom + '_Address1_UcGuarantor_txtPhone').value;


        /*Guarantor Details*/

        var Gc_Name = document.getElementById('' + ctrlcom + '_Address1_UcGuarantor_txtGEName').value;
        var Gc_Relation = document.getElementById('' + ctrlcom + '_Address1_UcGuarantor_ddlGERelation').value;
        var isdcodemobile4 = $('#isdcodemobile4').text();

        if (isdcodemobile4 == undefined || isdcodemobile4 == null || isdcodemobile4 == "NaN--NaN" || isdcodemobile4 == '' || isdcodemobile4 == NaN) {
            isdcodemobile4 = '';
        }
        var Gc_MblNo = document.getElementById('' + ctrlcom + '_Address1_UcGuarantor_txtGmobileno').value;
        Gc_MblNo = isdcodemobile4 + Gc_MblNo;
        var Gc_Address1 = document.getElementById('' + ctrlcom + '_Address1_UcGuarantor_txtGAddress1').value;
        Gc_Address1 = ReplaceSplCharactor(Gc_Address1);
        var Gc_Address2 = document.getElementById('' + ctrlcom + '_Address1_UcGuarantor_txtGAddress2').value;
        Gc_Address2 = ReplaceSplCharactor(Gc_Address2);
        var Gc_Area = document.getElementById('' + ctrlcom + '_Address1_UcGuarantor_ucGArea_txtSearchControl').value;
        var Gc_AreaId = document.getElementById('' + ctrlcom + '_Address1_UcGuarantor_ucGArea__hiddenID').value;
        var Gc_City = document.getElementById('' + ctrlcom + '_Address1_UcGuarantor_ucGCity').value;
        var Gc_CityId = document.getElementById('' + ctrlcom + '_Address1_UcGuarantor_hdnGcityid').value;
        var Gc_State = document.getElementById('' + ctrlcom + '_Address1_UcGuarantor_ucGState').value;
        var Gc_StateId = document.getElementById('' + ctrlcom + '_Address1_UcGuarantor_hdnGstateid').value;
        var Gc_Country = document.getElementById('' + ctrlcom + '_Address1_UcGuarantor_ucGCountry').value;
        var Gc_CountryId = document.getElementById('' + ctrlcom + '_Address1_UcGuarantor_hdnGcountryid').value;
        var Gc_Pin = document.getElementById('' + ctrlcom + '_Address1_UcGuarantor_txtGPin').value;
        var Gc_hdnPin = document.getElementById('' + ctrlcom + '_Address1_UcGuarantor_hdnGpincode').value;
        var Gc_PhnNo = document.getElementById('' + ctrlcom + '_Address1_UcGuarantor_txtGPhone').value;
    }


    var _xmlRegStr = '';
    _xmlRegStr += "<PATIENT";
    if (parseInt(Pat_ID) > 0)  /* Esisting CUstomer*/
    {
        _xmlRegStr += " PATIENT_ID=$" + Pat_ID + "$";
    }
    else {
        _xmlRegStr += " PATIENT_ID=$" + "0" + "$";
    }
    _xmlRegStr += " UMR_NO=$" + UmrNO + "$";
    _xmlRegStr += " TITILE_REV_NO=$" + 1 + "$";
    _xmlRegStr += " GENDER_REV_NO=$" + 1 + "$";
    _xmlRegStr += " MARITAL_STATUS_REV_NO=$" + 1 + "$";
    _xmlRegStr += " AGE_UOM_REV_NO=$" + 1 + "$";
    _xmlRegStr += " PATIENT_TYPE_REV_NO=$" + 1 + "$";
    _xmlRegStr += " PATIENT_TYPE_REFERENCE_REV_NO=$" + 1 + "$";
    _xmlRegStr += " PATIENT_CATEGORY_REV_NO=$" + 1 + "$";
    _xmlRegStr += " OCCUPATION_REV_NO=$" + 1 + "$";
    _xmlRegStr += " NATIONALITY_REV_NO=$" + 1 + "$";
    _xmlRegStr += " BLOOD_GROUP_REV_NO=$" + 1 + "$";
    _xmlRegStr += " RELIGION_REV_NO=$" + 1 + "$";
    _xmlRegStr += " EDUCATION_REV_NO=$" + 1 + "$";
    _xmlRegStr += " DIET_TYPE_REV_NO=$" + 1 + "$";
    _xmlRegStr += " ETHNICITY_ID_REV_NO=$" + 1 + "$";
    _xmlRegStr += " LANGUAGE_REV_NO=$" + 1 + "$";
    _xmlRegStr += " RES_PERSON_REL_REV_NO=$" + 1 + "$";
    _xmlRegStr += " METHOD_OF_COMM_REV_NO=$" + 1 + "$";
    _xmlRegStr += " DISPLAY_NAME_REV_NO=$" + 1 + "$";
    _xmlRegStr += " TITILE_ID=$" + ddlTitle + "$";
    _xmlRegStr += " FIRST_NAME=$" + txtFirstName + "$";
    _xmlRegStr += " MIDDLE_NAME=$" + txtMiddleName + "$";
    _xmlRegStr += " LAST_NAME=$" + lastName + "$";
    _xmlRegStr += " DISPLAY_NAME=$" + DisplayName + "$";
    _xmlRegStr += " GENDER_ID=$" + ddlGender + "$";
    _xmlRegStr += " MOTHER_MAIDEN_NAME=$" + MotherName + "$";
    _xmlRegStr += " FATHER_NAME=$" + Fathername + "$";
    _xmlRegStr += " DOB=$" + dob + "$";
    _xmlRegStr += " AGE=$" + PatientAge + "$";
    _xmlRegStr += " PATIENT_TYPE_ID=$" + PatType + "$";
    _xmlRegStr += " DISPLAY_NAME_ID=$" + 0 + "$";
    _xmlRegStr += " MOBILE_NO1=$" + Mobile1 + "$";
    _xmlRegStr += " MOBILE_NO2=$" + Mobile2 + "$";
    _xmlRegStr += " BLOOD_GROUP_ID=$" + BloodGrp_Id + "$";
    _xmlRegStr += " EMAIL_ID=$" + EmailID + "$";
    _xmlRegStr += " IS_VIP=$" + VIP + "$";
    _xmlRegStr += " IS_NEW_BORN=$" + IS_NEW_BORN + "$";
    _xmlRegStr += " ETHNICITY_ID=$" + Ethnicity + "$";
    _xmlRegStr += " NATIONALITY_ID=$" + Nationality + "$";
    _xmlRegStr += " IS_OLD=$" + IS_OLD + "$";
    _xmlRegStr += " MARITAL_STATUS_ID=$" + MarStatus + "$";
    _xmlRegStr += " OCCUPATION_ID=$" + Occupation + "$";
    _xmlRegStr += " RELIGION_ID=$" + Religion + "$";
    _xmlRegStr += " METHOD_OF_COMM_ID=$" + Method_Id + "$";
    _xmlRegStr += " IS_OSP=$" + 'N' + "$";
    _xmlRegStr += " ID_PROOF_TYPE_ID=$" + Proof_id + "$";
    _xmlRegStr += " ID_PROOF_TYPE_NAME=$" + proofno + "$";
    _xmlRegStr += " IS_SENIOR_CITIZEN=$" + _seniorcitizen + "$";
    _xmlRegStr += " VIP_TYPE_ID=$" + VIP_TYPE_ID + "$";
    _xmlRegStr += " VIP_NOTE=$" + ReplaceSplCharactor(VIP_remarks) + "$";
    _xmlRegStr += " AGE_SOURCE=$" + _agesource + "$";
    if (staff_id == '' || staff_id == null || staff_id == undefined) { staff_id = 0; }
    _xmlRegStr += " EMPLOYEE_ID=$" + staff_id + "$";
    var _empRlID = document.getElementById('' + ctrlcom + '_StaffRelation').value;
    if (_empRlID == '' || _empRlID == null || _empRlID == undefined) { _empRlID = 0; }
    _xmlRegStr += " EMPLOYEE_RELATION_ID=$" + _empRlID + "$";
    _xmlRegStr += " PASSPORT_NO=$" + PassportNo + "$";
    _xmlRegStr += " ISSUED_AT_ID=$" + IssuedAtID + "$";
    _xmlRegStr += " ISSUE_DT=$" + IssueDt + "$";
    _xmlRegStr += " EXPIRY_DT=$" + ExpiryDt + "$";
    _xmlRegStr += " IS_STOP_ALERT=$" + stop_alert + "$";
    _xmlRegStr += " IS_MLC=$" + _is_mlc + "$";
    if (EmpDepID == '' || EmpDepID == null || EmpDepID == undefined) { EmpDepID = 0; }
    _xmlRegStr += " EMPLOYEE_DEPENDENTS_ID=$" + EmpDepID + "$";
    _xmlRegStr += " PARENT_UMR_NO=$" + _familyrefNo + "$";
    _xmlRegStr += " SESSION_ID=$" + document.getElementById('' + ctrlcom + '_HDNSESSIONID').value + "$";
    _xmlRegStr += " FOREIGN_CATEGORY_ID=$" + Pat_cat + "$";
    _xmlRegStr += " RES_PERSON_REL_ID=$" + RespPersonType + "$";
    _xmlRegStr += " RES_PERSON_NAME=$" + RespPersonName + "$";
    _xmlRegStr += " REC_TYPE_ID =$" + rec_type_id + "$";

    _xmlRegStr += "/>";

    if (ddlRegType == 7 && staff_id > 0 && EmpDepID == 0) {
        _xmlStr += "<MA.EMPLOYEE_DEPENDENTS ";
        _xmlStr += " EMPLOYEE_DEPENDENTS_ID =$" + 0 + "$";
        _xmlStr += " EMPLOYEE_DEPENDENTS_REV_NO =$" + 0 + "$";
        _xmlStr += " EMPLOYEE_ID =$" + staff_id + "$";
        _xmlStr += " DEPENDENT_ID =$" + "0" + "$";
        _xmlStr += " UMR_NO =$" + "" + "$";
        _xmlStr += " NAME =$" + DisplayName + "$";
        _xmlStr += " DOB =$" + dob + "$";
        _xmlStr += " AGE =$" + PatientAge + "$";
        _xmlStr += " GENDER =$" + ddlGender + "$";
        _xmlStr += " REL_SHIP_ID =$" + _empRlID + "$";
        _xmlStr += " RECORD_STATUS =$" + "A" + "$";
        _xmlStr += "/>";
    }

    if ($('[id*=ddlPatientType]').find('option:selected').val() == 2 || $('[id*=ddlPatientType]').find('option:selected').val() == 3 || $('[id*=ddlPatientType]').find('option:selected').val() == 4 || $('[id*=ddlPatientType]').find('option:selected').val() == 5 || $('[id*=ddlPatientType]').find('option:selected').val() == 6 || $('[id*=ddlPatientType]').find('option:selected').val() == 7 || $('[id*=ddlPatientType]').find('option:selected').val() == 8 || $('[id*=ddlPatientType]').find('option:selected').val() == 9 || $('[id*=ddlPatientType]').find('option:selected').val() == 10 || $('[id*=ddlPatientType]').find('option:selected').val() == 11) {
        var CreditLimtAmt = document.getElementById('' + ctrlcom + '_EmployerInfo1_txtcreditlimitamt').value;
        var DateofIssue = document.getElementById('' + ctrlcom + '_EmployerInfo1_txtrefissuedt').value;
        var letterissueby = document.getElementById('' + ctrlcom + '_EmployerInfo1_txtletterissuedby').value;
        var orgletterper = document.getElementById("" + ctrlcom + "_EmployerInfo1_txtorgletterper").value;
        var empletterper = document.getElementById("" + ctrlcom + "_EmployerInfo1_txtempletterper").value;
        if (orgletterper == "" || orgletterper == null || orgletterper == undefined) { orgletterper = "0"; }
        if (empletterper == "" || empletterper == null || empletterper == undefined) { empletterper = "0"; }
        if (CreditLimtAmt == "" || CreditLimtAmt == null || CreditLimtAmt == undefined) { CreditLimtAmt = "0"; }
        var remarks = document.getElementById('ctl00_ContentPlaceHolder1_EmployerInfo1_txtempremarks').value;
        if (remarks == "" || remarks == null || remarks == undefined) { remarks = ""; }
        if (RefLetterNo != "") {
            _xmlRegStr += "<CMPNY_REFERAL_LETTER";
            _xmlRegStr += " CMPNY_REFERAL_LETTER_ID=$" + "0" + "$";
            _xmlRegStr += " PATIENT_COVERAGE_ID=$" + "2" + "$";
            _xmlRegStr += " ADMISSION_ID=$" + '0' + "$";
            _xmlRegStr += " ADMN_NO=$" + '' + "$";
            _xmlRegStr += " REFERAL_LETTER_NO=$" + RefLetterNo + "$";
            _xmlRegStr += " REFERAL_LETTER_DT=$" + new Date().format('dd-MMM-yyyy') + "$";
            _xmlRegStr += " REFERENCE_TYPE_ID=$" + 0 + "$";
            _xmlRegStr += " COMPANY_ID=$" + Cmp_Id + "$";
            _xmlRegStr += " UMR_NO=$" + UmrNO + "$";
            _xmlRegStr += " ELIGIBAL_WARD_ID=$" + 0 + "$";
            _xmlRegStr += " ELIGIBAL_WARD_GROUP_ID=$" + 0 + "$";
            _xmlRegStr += " TPA_ID=$" + TPA_ID + "$";
            _xmlRegStr += " LETTER_ISSUED_BY=$" + letterissueby + "$";
            _xmlRegStr += " REFERRAL_LETTER_ISSUE_DT=$" + DateofIssue + "$";
            _xmlRegStr += " REFERRAL_VALIDITY_DT=$" + LetterValidity + "$";
            _xmlRegStr += " ORG_PERCENT=$" + orgletterper + "$";
            _xmlRegStr += " EMP_PERCENT=$" + empletterper + "$";
            var opforCons = $('#ctl00_ContentPlaceHolder1_uccorporate_EmployerInfo1_chkCons')[0].checked ? 'Y' : 'N';
            var opforBill = $('#ctl00_ContentPlaceHolder1_uccorporate_EmployerInfo1_chkOPBill')[0].checked ? 'Y' : 'N';
            var opforPhar = $('#ctl00_ContentPlaceHolder1_uccorporate_EmployerInfo1_chkPharmacy')[0].checked ? 'Y' : 'N';
            _xmlRegStr += " OP_CONSULTATION_REQUIRED=$" + opforCons + "$";
            _xmlRegStr += " OP_BILL_REQUIRED=$" + opforBill + "$";
            _xmlRegStr += " OP_PHARMACY_REQUIRED=$" + opforPhar + "$";

            _xmlRegStr += "/>";

            var chkunlimit = document.getElementById('' + ctrlcom + '_EmployerInfo1_chkcreditcheck').checked;
            if (chkunlimit == true) { chkunlimit = "Y"; } else { chkunlimit = "N"; }

            _xmlRegStr += "<ADT_CREDIT_LIMIT";
            _xmlRegStr += " CREDIT_LIMIT_ID=$" + "0" + "$";
            if (UmrNO != '') { _xmlRegStr += " UMR_NO=$" + UmrNO + "$"; }
            else { _xmlRegStr += " UMR_NO=$" + UmrNO + "$"; }
            _xmlRegStr += " CREDIT_LIMIT_AMT=$" + CreditLimtAmt + "$";
            _xmlRegStr += " AUTH_BY=$" + 1 + "$";
            _xmlRegStr += " REMARKS=$" + remarks + "$";
            _xmlRegStr += " CREDIT_LIMIT_NO=$" + "" + "$";
            _xmlRegStr += " ADMN_NO=$" + "" + "$";
            _xmlRegStr += " CREDIT_TYPE=$" + "OP" + "$";
            _xmlRegStr += " COMPANY_ID=$" + Cmp_Id + "$";
            _xmlRegStr += " TPA_ID=$" + TPA_ID + "$";
            _xmlRegStr += " IS_CREDIT_LIMIT_UNLIMITED=$" + chkunlimit + "$";
            _xmlRegStr += " REFERRAL_LETTER_ID=$" + 0 + "$";
            _xmlRegStr += "/>";
        }
    }
    _xmlRegStr += "<FO_REG";
    _xmlRegStr += " REG_ID=$" + "0" + "$";
    _xmlRegStr += " UMR_NO=$" + UmrNO + "$";
    if (Pat_ID > 0) {
        _xmlRegStr += " PATIENT_ID=$" + Pat_ID + "$";
    }
    else {
        _xmlRegStr += " PATIENT_ID=$" + '0' + "$";
    }
    _xmlRegStr += " MOBILE_NO1=$" + Mobile1 + "$";
    _xmlRegStr += " MOBILE_NO2=$" + Mobile2 + "$";
    _xmlRegStr += " TREATMENT_BY_ID=$" + Consultant + "$";
    _xmlRegStr += " REFERENCE_TYPE_ID=$" + "1" + "$";
    _xmlRegStr += " REG_PATIENT_TYPE_ID=$" + PatType + "$";
    _xmlRegStr += " NATIONALITY_ID=$" + Nationality + "$";
    _xmlRegStr += " EMAIL_ID=$" + EmailID + "$";
    _xmlRegStr += " PATIENT_REV_NO=$" + "1" + "$";
    _xmlRegStr += " REFERAL_SOURCE_ID=$" + ReferalSourceId + "$";
    _xmlRegStr += " REFERRED_DOCTOR_ID=$" + ReferalDoctorId + "$";
    _xmlRegStr += " REFERAL_SOURCE_REV_NO=$" + "1" + "$";
    _xmlRegStr += " REFERRED_DOCTOR_TYPE_REV_NO=$" + "1" + "$";
    _xmlRegStr += " REFERRED_DOCTOR_REV_NO=$" + "1" + "$";
    _xmlRegStr += " PATIENT_CLASS_REV_NO=$" + "1" + "$";
    _xmlRegStr += " EXPIRY_DT=$" + RegValidity + "$";
    _xmlRegStr += " PATIENT_CLASS_ID=$" + 2 + "$";
    _xmlRegStr += " IS_QUICK_REG=$" + _isQuickreg + "$";
    _xmlRegStr += " QUESTIONARY_ID=$" + Questionary + "$";
    _xmlRegStr += " PRE_REG_ID=$" + _pre_reg_id + "$";
    _xmlRegStr += " IS_EXPIRED=$" + "N" + "$";
    _xmlRegStr += " REG_TYPE_ID=$" + ddlRegType + "$";
    _xmlRegStr += " REC_TYPE_ID=$" + rec_type_id + "$";
    _xmlRegStr += " REG_REFERENCE_TYPE_ID=$" + TPA_ID + "$";
    _xmlRegStr += " SESSION_ID=$" + document.getElementById('' + ctrlcom + '_HDNSESSIONID').value + "$";
    _xmlRegStr += "/>";

    if (chkvalue.length > 0 && TPA_ID > 0) {
        $('[id*=divchecklist] ul li').each(function () {
            if ($(this).closest('li').find('input[id*=chklst]')[0].checked == true) {
                var chklistid = $(this).closest('li').find('input[id*=chklst]')[0].value;
                var remarks = $(this).closest('li').find('input[id*=txtremarks]').val();
                var chktypeid = $(this).find('[type=hidden][id*=hdnchklistypeid]').val();
                _xmlRegStr += "<FO_BILL_CMP_CHECKLIST ";
                _xmlRegStr += " BILL_CMP_CHECKLIST_ID=$" + 0 + "$";
                _xmlRegStr += " BILL_CMP_CHECKLIST_REV_NO=$" + "1" + "$";
                _xmlRegStr += " CHECKLIST_ID=$" + chklistid + "$";
                _xmlRegStr += " SUBMITTED_FLAG=$" + "REG" + "$";
                _xmlRegStr += " ADMN_ID=$" + "0" + "$";
                _xmlRegStr += " BILL_ID=$" + "0" + "$";
                _xmlRegStr += " UMR_NO=$" + "" + "$";
                _xmlRegStr += " CHECKLIST_TYPE_ID=$" + chktypeid + "$";
                _xmlRegStr += " REMARKS=$" + ReplaceSplCharactor(remarks) + "$";
                _xmlRegStr += " />";
            }
        });
    }
    var policy_type_id = '0'; var sum_insured = '0';
    if (PatType == 5) {
        policy_type_id = document.getElementById('' + ctrlcom + '_EmployerInfo1_ddlpolicytype').value;
        sum_insured = document.getElementById('' + ctrlcom + '_EmployerInfo1_txtsuminsured').value;
    }
    if (policy_type_id == '' || policy_type_id == null || policy_type_id == undefined) { policy_type_id = '0'; }
    if (sum_insured == '' || sum_insured == null || sum_insured == undefined) { sum_insured = '0'; }
    if (TPA_ID > 0) {
        var empdateofissue = document.getElementById('' + ctrlcom + '_EmployerInfo1_txtdateofissue').value;
        var employername = document.getElementById('' + ctrlcom + '_EmployerInfo1_txtemployername').value;
        _xmlRegStr += "<FO_REG_CORPORATE";
        _xmlRegStr += " REG_CORPORATE_ID=$" + "0" + "$";
        if (REG_ID > 0) {
            if (document.getElementById('' + ctrlcom + '_chkisold').checked == true) {
                _xmlRegStr += " REG_ID=$" + "0" + "$";
            }
            else {
                _xmlRegStr += " REG_ID=$" + REG_ID + "$";
            }
        }
        else {
            _xmlRegStr += " REG_ID=$" + "0" + "$";
        }

        _xmlRegStr += " EMPLOYEE_ID=$" + Emp_Id + "$";
        _xmlRegStr += " CREDIT_ORG_ID=$" + Cmp_Id + "$";
        _xmlRegStr += " EMP_SAME_AS_PATIENT_FLG=$" + empsamepatient + "$";
        _xmlRegStr += " EMP_RELATIONSHIP_ID=$" + Relationship + "$";
        _xmlRegStr += " CARD_NO=$" + MedCardNo + "$";
        _xmlRegStr += " CARD_VALIDITY=$" + EmpCardValidity + "$";
        _xmlRegStr += " EMP_CONTACTNO=$" + Contact + "$";
        _xmlRegStr += " DESIGNATION=$" + Designation + "$";
        _xmlRegStr += " DEPARTMENT=$" + DeptName + "$";
        _xmlRegStr += " BRANCH=$" + BranchID + "$";
        _xmlRegStr += " REG_REV_NO=$" + 1 + "$";
        _xmlRegStr += " CREDIT_ORG_REV_NO=$" + 1 + "$";
        _xmlRegStr += " EMP_GRADE_REV_NO=$" + "1" + "$";
        _xmlRegStr += " EMP_RELATIONSHIP_REV_NO=$" + "1" + "$";
        _xmlRegStr += " EMP_COVERAGE_REV_NO=$" + "1" + "$";
        _xmlRegStr += " EMP_COVERAGE_ID=$" + "2" + "$";
        _xmlRegStr += " INSURANCE_TYPE_REV_NO=$" + "1" + "$";
        _xmlRegStr += " EMP_NAME=$" + Emp_Name + "$";
        _xmlRegStr += " TPA_ID=$" + TPA_ID + "$";
        _xmlRegStr += " CARD_ISSUE_DT=$" + empdateofissue + "$";
        _xmlRegStr += " EMPLOYERNAME=$" + employername + "$";
        _xmlRegStr += " EMP_GRADE_ID=$" + GradeID + "$";
        _xmlRegStr += " POLICY_TYPE_ID=$" + policy_type_id + "$";
        _xmlRegStr += " SUM_INSURED=$" + sum_insured + "$";
        _xmlRegStr += " SESSION_ID=$" + document.getElementById('' + ctrlcom + '_HDNSESSIONID').value + "$";
        _xmlRegStr += "/>";
    }
    BType = 'R';
    _xmlRegStr += ReferralSave(BType);

    if (document.getElementById('' + ctrlcom + '_Address1_hdnIsAssesment').value == 'True') {
        if (Ec_AreaId != '') {
            _xmlRegStr += "<FO_REG_EC"
            _xmlRegStr += " REG_EC_ID=$" + "0" + "$";
            _xmlRegStr += " FULL_NAME=$" + Ec_Name + "$";
            _xmlRegStr += " RELATION_ID=$" + Ec_Relation + "$";
            _xmlRegStr += " MOBILE_NO=$" + Ec_MblNo + "$";
            _xmlRegStr += "/>"
        }
        if (Gc_AreaId != '') {
            _xmlRegStr += "<FO_REG_GRNTR"
            _xmlRegStr += " REG_GRNTR_ID=$" + "0" + "$";
            _xmlRegStr += " FULL_NAME=$" + Gc_Name + "$";
            _xmlRegStr += " RELATION_ID=$" + Gc_Relation + "$";
            _xmlRegStr += " MOBILE_NO=$" + Gc_MblNo + "$";
            _xmlRegStr += "/>"
        }

        if (Ec_AreaId != '') {

            _xmlRegStr += "<MA.ADDRESS_REG_EC";
            _xmlRegStr += " ADDRESS_ID=$" + 0 + "$";
            _xmlRegStr += " ADDRESS1=$" + Ec_Address1 + "$";
            _xmlRegStr += " ADDRESS2=$" + Ec_Address2 + "$";
            _xmlRegStr += " AREA_ID=$" + Ec_AreaId + "$";
            _xmlRegStr += " ADDR_TYPE_ID=$" + 12 + "$";
            _xmlRegStr += " CITY_ID=$" + Ec_CityId + "$";
            _xmlRegStr += " STATE_ID=$" + Ec_StateId + "$";
            _xmlRegStr += " COUNTRY_ID=$" + Ec_CountryId + "$";
            //_xmlRegStr += " DISTRICT=$" + myMultiAddress1[0]["District"] + "$";
            _xmlRegStr += " ZIPCODE=$" + Ec_Pin + "$";
            _xmlRegStr += " MOBILE_PHONE=$" + Ec_MblNo + "$";
            _xmlRegStr += " HOME_PHONE=$" + Ec_PhnNo + "$";
            _xmlRegStr += " OFFICE_PHONE=$" + '' + "$";
            _xmlRegStr += " EMAIL_ID=$" + '' + "$";
            _xmlRegStr += " REFERENCE_TYPE_ID=$" + 1 + "$";
            _xmlRegStr += " AREA_REV_NO=$" + 1 + "$";
            _xmlRegStr += " CITY_REV_NO=$" + 1 + "$";
            _xmlRegStr += " STATE_REV_NO=$" + 1 + "$";
            _xmlRegStr += " COUNTRY_REV_NO=$" + 1 + "$";
            _xmlRegStr += " ADDRESS_REV_NO=$" + 1 + "$";
            _xmlRegStr += " REFERENCE_TYPE_REV_NO=$" + 1 + "$";
            _xmlRegStr += " REFERENCE_REV_NO=$" + 1 + "$";
            _xmlRegStr += " ADDR_GRP_ID=$" + 2 + "$";
            _xmlRegStr += "/>";

        }
        if (Gc_AreaId != '') {

            _xmlRegStr += "<MA.ADDRESS_REG_GRNTR";
            _xmlRegStr += " ADDRESS_ID=$" + 0 + "$";
            _xmlRegStr += " ADDRESS1=$" + Gc_Address1 + "$";
            _xmlRegStr += " ADDRESS2=$" + Gc_Address2 + "$";
            _xmlRegStr += " AREA_ID=$" + Gc_AreaId + "$";
            _xmlRegStr += " ADDR_TYPE_ID=$" + 12 + "$";
            _xmlRegStr += " CITY_ID=$" + Gc_CityId + "$";
            _xmlRegStr += " STATE_ID=$" + Gc_StateId + "$";
            _xmlRegStr += " COUNTRY_ID=$" + Gc_CountryId + "$";
            //_xmlRegStr += " DISTRICT=$" + myMultiAddress1[0]["District"] + "$";
            _xmlRegStr += " ZIPCODE=$" + Gc_Pin + "$";
            _xmlRegStr += " MOBILE_PHONE=$" + Gc_MblNo + "$";
            _xmlRegStr += " HOME_PHONE=$" + Gc_PhnNo + "$";
            _xmlRegStr += " OFFICE_PHONE=$" + '' + "$";
            _xmlRegStr += " EMAIL_ID=$" + '' + "$";
            _xmlRegStr += " REFERENCE_TYPE_ID=$" + 1 + "$";
            _xmlRegStr += " AREA_REV_NO=$" + 1 + "$";
            _xmlRegStr += " CITY_REV_NO=$" + 1 + "$";
            _xmlRegStr += " STATE_REV_NO=$" + 1 + "$";
            _xmlRegStr += " COUNTRY_REV_NO=$" + 1 + "$";
            _xmlRegStr += " ADDRESS_REV_NO=$" + 1 + "$";
            _xmlRegStr += " REFERENCE_TYPE_REV_NO=$" + 1 + "$";
            _xmlRegStr += " REFERENCE_REV_NO=$" + 1 + "$";
            _xmlRegStr += " ADDR_GRP_ID=$" + 2 + "$";
            _xmlRegStr += "/>";

        }
    }

    if (myMultiAddress1 != '') {
        //if (myMultiAddress1[0]["Address1"] != '' || myMultiAddress1[0]["Address2"] != '') {
        if (myMultiAddress1[0]["Area"] != '' || myMultiAddress1[0]["area_name"] != '') {
            _xmlRegStr += "<MA.ADDRESS";
            if (add1 > 0)
            { _xmlRegStr += " ADDRESS_ID=$" + add1 + "$"; } else {
                _xmlRegStr += " ADDRESS_ID=$" + 0 + "$";
            }
            _xmlRegStr += " ADDRESS1=$" + ReplaceSplCharactor(myMultiAddress1[0]["Address1"]) + "$";
            _xmlRegStr += " ADDRESS2=$" + ReplaceSplCharactor(myMultiAddress1[0]["Address2"]) + "$";
            _xmlRegStr += " AREA_ID=$" + myMultiAddress1[0]["Area"] + "$";
            //            if (document.getElementById('ctl00_ContentPlaceHolder1_hdnClientName').value.toLowerCase() == 'ssbgmc') {
            //                _xmlRegStr += " ADDR_TYPE_ID=$" + 13 + "$"
            //            }
            //            else {
            _xmlRegStr += " ADDR_TYPE_ID=$" + 12 + "$";
            //  }

            _xmlRegStr += " CITY_ID=$" + myMultiAddress1[0]["City"] + "$";
            _xmlRegStr += " STATE_ID=$" + myMultiAddress1[0]["State"] + "$";
            _xmlRegStr += " COUNTRY_ID=$" + myMultiAddress1[0]["Country"] + "$";
            _xmlRegStr += " DISTRICT=$" + myMultiAddress1[0]["District"] + "$";
            _xmlRegStr += " ZIPCODE=$" + myMultiAddress1[0]["PinZip"] + "$";
            _xmlRegStr += " REFERENCE_TYPE_ID=$" + 1 + "$";
            if (parseInt(Pat_ID) > 0) { _xmlRegStr += " REFERENCE_ID=$" + Pat_ID + "$"; }
            else
            { _xmlRegStr += " REFERENCE_ID=$" + 0 + "$"; }
            _xmlRegStr += " AREA_REV_NO=$" + 1 + "$";
            _xmlRegStr += " CITY_REV_NO=$" + 1 + "$";
            _xmlRegStr += " STATE_REV_NO=$" + 1 + "$";
            _xmlRegStr += " COUNTRY_REV_NO=$" + 1 + "$";
            if (addrev1 > 0)
            { _xmlRegStr += " ADDRESS_REV_NO=$" + addrev1 + "$"; } else {
                _xmlRegStr += " ADDRESS_REV_NO=$" + 1 + "$";
            }
            _xmlRegStr += " REFERENCE_TYPE_REV_NO=$" + 1 + "$";
            _xmlRegStr += " REFERENCE_REV_NO=$" + 1 + "$";
            /* _xmlRegStr += " HOME_PHONE=$" + homePhone + "$";
            _xmlRegStr += " MOBILE_PHONE=$" + Mobile1 + "$";*/
            _xmlRegStr += " ADDR_GRP_ID=$" + 2 + "$";
            _xmlRegStr += " MOBILE_PHONE=$" + myMultiAddress1[0]["Mobile_No1"] + "$";
            _xmlRegStr += " HOME_PHONE=$" + myMultiAddress1[0]["Mobile_No2"] + "$";
            _xmlRegStr += " EMAIL_ID=$" + EmailID + "$";
            _xmlRegStr += " REC_TYPE_ID=$" + rec_type_id + "$";
            _xmlRegStr += " SESSION_ID=$" + document.getElementById('' + ctrlcom + '_HDNSESSIONID').value + "$";
            _xmlRegStr += "/>";

            if ($('[id*=ddlNationality]').val() != '1') {
                _xmlRegStr += "<MA.ADDRESS";
                if (add1 > 0)
                { _xmlRegStr += " ADDRESS_ID=$" + add1 + "$"; } else {
                    _xmlRegStr += " ADDRESS_ID=$" + 0 + "$";
                }
                _xmlRegStr += " ADDRESS1=$" + ReplaceSplCharactor(myMultiAddress1[0]["Address1"]) + "$";
                _xmlRegStr += " ADDRESS2=$" + ReplaceSplCharactor(myMultiAddress1[0]["Address2"]) + "$";
                _xmlRegStr += " AREA_ID=$" + myMultiAddress1[0]["Area"] + "$";
                _xmlRegStr += " CITY_ID=$" + myMultiAddress1[0]["City"] + "$";
                _xmlRegStr += " DISTRICT=$" + myMultiAddress1[0]["District"] + "$";
                _xmlRegStr += " STATE_ID=$" + myMultiAddress1[0]["State"] + "$";
                _xmlRegStr += " COUNTRY_ID=$" + myMultiAddress1[0]["Country"] + "$";
                _xmlRegStr += " ZIPCODE=$" + myMultiAddress1[0]["PinZip"] + "$";
                _xmlRegStr += " REFERENCE_TYPE_ID=$" + 1 + "$";
                if (parseInt(Pat_ID) > 0) { _xmlRegStr += " REFERENCE_ID=$" + Pat_ID + "$"; }
                else { _xmlRegStr += " REFERENCE_ID=$" + 0 + "$"; }
                _xmlRegStr += " ADDR_TYPE_ID=$" + Address_type + "$";
                _xmlRegStr += " AREA_REV_NO=$" + 1 + "$";
                _xmlRegStr += " CITY_REV_NO=$" + 1 + "$";
                _xmlRegStr += " STATE_REV_NO=$" + 1 + "$";
                _xmlRegStr += " COUNTRY_REV_NO=$" + 1 + "$";
                if (addrev1 > 0)
                { _xmlRegStr += " ADDRESS_REV_NO=$" + addrev1 + "$"; } else {
                    _xmlRegStr += " ADDRESS_REV_NO=$" + 1 + "$";
                }
                _xmlRegStr += " REFERENCE_TYPE_REV_NO=$" + 1 + "$";
                _xmlRegStr += " REFERENCE_REV_NO=$" + 1 + "$";
                /*_xmlRegStr += " HOME_PHONE=$" + homePhone + "$";
                _xmlRegStr += " MOBILE_PHONE=$" + Mobile1 + "$";*/
                _xmlRegStr += " MOBILE_PHONE=$" + myMultiAddress1[0]["Mobile_No1"] + "$";
                _xmlRegStr += " HOME_PHONE=$" + myMultiAddress1[0]["Mobile_No2"] + "$";
                _xmlRegStr += " ADDR_GRP_ID=$" + 2 + "$";
                _xmlRegStr += " REC_TYPE_ID=$" + rec_type_id + "$";
                _xmlRegStr += " SESSION_ID=$" + document.getElementById('' + ctrlcom + '_HDNSESSIONID').value + "$";
                _xmlRegStr += "/>";
            }

        }
    }
    if (myMultiAddress2 != '') {
        //if (myMultiAddress2[0]["Address1"] != '' || myMultiAddress2[0]["Address2"] != '') {
        if (myMultiAddress1[0]["Area"] != '' || myMultiAddress1[0]["area_name"] != '') {
            _xmlRegStr += "<MA.ADDRESS";
            if (add2 > 0)
            { _xmlRegStr += " ADDRESS_ID=$" + add2 + "$"; } else {
                _xmlRegStr += " ADDRESS_ID=$" + 0 + "$";
            }
            _xmlRegStr += " ADDRESS1=$" + ReplaceSplCharactor(myMultiAddress2[0]["Address1"]) + "$";
            _xmlRegStr += " ADDRESS2=$" + ReplaceSplCharactor(myMultiAddress2[0]["Address2"]) + "$";
            _xmlRegStr += " AREA_ID=$" + myMultiAddress2[0]["Area"] + "$";
            _xmlRegStr += " CITY_ID=$" + myMultiAddress2[0]["City"] + "$";
            _xmlRegStr += " DISTRICT=$" + myMultiAddress2[0]["District"] + "$";
            _xmlRegStr += " STATE_ID=$" + myMultiAddress2[0]["State"] + "$";
            _xmlRegStr += " COUNTRY_ID=$" + myMultiAddress2[0]["Country"] + "$";
            _xmlRegStr += " ZIPCODE=$" + myMultiAddress2[0]["PinZip"] + "$";
            _xmlRegStr += " REFERENCE_TYPE_ID=$" + 1 + "$";

            //            if (document.getElementById('ctl00_ContentPlaceHolder1_hdnClientName').value.toLowerCase() == 'ssbgmc') {
            //                _xmlRegStr += " ADDR_TYPE_ID=$" + 12 + "$";
            //            } else {
            _xmlRegStr += " ADDR_TYPE_ID=$" + 13 + "$";
            // }
            if (parseInt(Pat_ID) > 0) { _xmlRegStr += " REFERENCE_ID=$" + Pat_ID + "$"; }
            else
            { _xmlRegStr += " REFERENCE_ID=$" + 0 + "$"; }
            _xmlRegStr += " AREA_REV_NO=$" + 1 + "$";
            _xmlRegStr += " CITY_REV_NO=$" + 1 + "$";
            _xmlRegStr += " STATE_REV_NO=$" + 1 + "$";
            _xmlRegStr += " COUNTRY_REV_NO=$" + 1 + "$";
            if (addrev2 > 0)
            { _xmlRegStr += " ADDRESS_REV_NO=$" + addrev2 + "$"; } else {
                _xmlRegStr += " ADDRESS_REV_NO=$" + 1 + "$";
            }
            _xmlRegStr += " REFERENCE_TYPE_REV_NO=$" + 1 + "$";
            _xmlRegStr += " REFERENCE_REV_NO=$" + 1 + "$";
            /* _xmlRegStr += " HOME_PHONE=$" + homePhone + "$";
            _xmlRegStr += " MOBILE_PHONE=$" + Mobile1 + "$";*/
            _xmlRegStr += " MOBILE_PHONE=$" + myMultiAddress2[0]["Mobile_No1"] + "$";
            _xmlRegStr += " HOME_PHONE=$" + myMultiAddress2[0]["Mobile_No2"] + "$";
            _xmlRegStr += " ADDR_GRP_ID=$" + 2 + "$";
            _xmlRegStr += " REC_TYPE_ID=$" + rec_type_id + "$";
            _xmlRegStr += " SESSION_ID=$" + document.getElementById('' + ctrlcom + '_HDNSESSIONID').value + "$";
            _xmlRegStr += "/>";
        }
    }
    if (myMultiAddress3 != '') {
        // if (myMultiAddress3[0]["Address1"] != '' || myMultiAddress3[0]["Address2"] != '') {
        if (myMultiAddress1[0]["Area"] != '' || myMultiAddress1[0]["area_name"] != '') {
            _xmlRegStr += "<MA.ADDRESS";
            if (add3 > 0)
            { _xmlRegStr += " ADDRESS_ID=$" + add3 + "$"; } else {
                _xmlRegStr += " ADDRESS_ID=$" + 0 + "$";
            }
            _xmlRegStr += " ADDRESS1=$" + ReplaceSplCharactor(myMultiAddress3[0]["Address1"]) + "$";
            _xmlRegStr += " ADDRESS2=$" + ReplaceSplCharactor(myMultiAddress3[0]["Address2"]) + "$";
            _xmlRegStr += " AREA_ID=$" + myMultiAddress3[0]["Area"] + "$";
            _xmlRegStr += " CITY_ID=$" + myMultiAddress3[0]["City"] + "$";
            _xmlRegStr += " DISTRICT=$" + myMultiAddress3[0]["District"] + "$";
            _xmlRegStr += " STATE_ID=$" + myMultiAddress3[0]["State"] + "$";
            _xmlRegStr += " COUNTRY_ID=$" + myMultiAddress3[0]["Country"] + "$";
            _xmlRegStr += " ZIPCODE=$" + myMultiAddress3[0]["PinZip"] + "$";
            _xmlRegStr += " REFERENCE_TYPE_ID=$" + 1 + "$";
            if (parseInt(Pat_ID) > 0) { _xmlRegStr += " REFERENCE_ID=$" + Pat_ID + "$"; }
            else { _xmlRegStr += " REFERENCE_ID=$" + 0 + "$"; }
            _xmlRegStr += " ADDR_TYPE_ID=$" + Address_type + "$";
            _xmlRegStr += " AREA_REV_NO=$" + 1 + "$";
            _xmlRegStr += " CITY_REV_NO=$" + 1 + "$";
            _xmlRegStr += " STATE_REV_NO=$" + 1 + "$";
            _xmlRegStr += " COUNTRY_REV_NO=$" + 1 + "$";
            if (addrev3 > 0)
            { _xmlRegStr += " ADDRESS_REV_NO=$" + addrev3 + "$"; } else {
                _xmlRegStr += " ADDRESS_REV_NO=$" + 1 + "$";
            }
            _xmlRegStr += " REFERENCE_TYPE_REV_NO=$" + 1 + "$";
            _xmlRegStr += " REFERENCE_REV_NO=$" + 1 + "$";
            /*_xmlRegStr += " HOME_PHONE=$" + homePhone + "$";
            _xmlRegStr += " MOBILE_PHONE=$" + Mobile1 + "$";*/
            _xmlRegStr += " MOBILE_PHONE=$" + myMultiAddress3[0]["Mobile_No1"] + "$";
            _xmlRegStr += " HOME_PHONE=$" + myMultiAddress3[0]["Mobile_No2"] + "$";
            _xmlRegStr += " ADDR_GRP_ID=$" + 2 + "$";
            _xmlRegStr += " REC_TYPE_ID=$" + rec_type_id + "$";
            _xmlRegStr += " SESSION_ID=$" + document.getElementById('' + ctrlcom + '_HDNSESSIONID').value + "$";
            _xmlRegStr += "/>";
        }

    }

    //    var CONCESSION = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatgrossamt').value;//document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnRegConcAmt').value;
    var COMPANY_CONCESSION_AMOUNT = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpartygrossamt').value;
    var COMPANY_AMOUNT = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtparygross').value;
    var BILL_AMOUNT = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtgrosstotal').value;
    var NET_AMOUNT = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtTotalNet').value;
    var PAID_AMOUNT = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatientReceiptAmt').value;
    var DUE_AMOUNT = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtTotalDue').value;
    var TOTAL_DISCOUNT = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtgrossamttotal').value;
    var CMP_OUTSTANDING_DUE = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtTotalDue').value;
    var CMP_NET_AMT = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtTotalNet').value;
    var CMP_PAID_AMT = 0;  //document.getElementById('' + ctrlcom + '_ReceiptControl2_txtCompanyReciptAmt').value;
    var con_AuthID = document.getElementById('' + ctrlcom + '_ReceiptControl2_ucdueauth__hiddenID').value;
    var CONCESSION = 0;

    if (CONCESSION == undefined || CONCESSION == null || CONCESSION == '') { CONCESSION = "0"; }
    if (COMPANY_CONCESSION_AMOUNT == undefined || COMPANY_CONCESSION_AMOUNT == null || COMPANY_CONCESSION_AMOUNT == '') { COMPANY_CONCESSION_AMOUNT = "0"; }
    if (COMPANY_AMOUNT == undefined || COMPANY_AMOUNT == null || COMPANY_AMOUNT == '') { COMPANY_AMOUNT = "0"; }
    if (BILL_AMOUNT == undefined || BILL_AMOUNT == null || BILL_AMOUNT == '') { BILL_AMOUNT = "0"; }
    if (NET_AMOUNT == undefined || NET_AMOUNT == null || NET_AMOUNT == '') { NET_AMOUNT = "0"; }
    if (PAID_AMOUNT == undefined || PAID_AMOUNT == null || PAID_AMOUNT == '') { PAID_AMOUNT = "0"; }
    if (DUE_AMOUNT == undefined || DUE_AMOUNT == null || DUE_AMOUNT == '') { DUE_AMOUNT = "0"; }
    if (TOTAL_DISCOUNT == undefined || TOTAL_DISCOUNT == null || TOTAL_DISCOUNT == '') { TOTAL_DISCOUNT = "0"; }
    if (CMP_OUTSTANDING_DUE == undefined || CMP_OUTSTANDING_DUE == null || CMP_OUTSTANDING_DUE == '') { CMP_OUTSTANDING_DUE = "0"; }
    if (CMP_NET_AMT == undefined || CMP_NET_AMT == null || CMP_NET_AMT == '') { CMP_NET_AMT = "0"; }
    if (CMP_PAID_AMT == undefined || CMP_PAID_AMT == null || CMP_PAID_AMT == '') { CMP_PAID_AMT = "0"; }
    if (con_AuthID == undefined || con_AuthID == null || con_AuthID == '') { con_AuthID = "0"; }
    var staffConper = '';
    var staffConAmt = '';
    var mngmtConper = '';
    var MngmtConAmt = '';
    var ebConper = '';
    var ebConAmt = '';
    var ConRuleConper = '';
    var ConRuleConAmt = '';
    var HCConper = '';
    var HCConAmt = '';
    var CashConper = '';
    var CashConAmt = '';
    var regDuePay = 0, RegPayment = 0, regnetamt = 0; ;
    var regpayfee = '0', regpaydue = '0'; var Concession_per = 0; var _concession = ''; var _concession_per = '';
    var PNamt = 0; var Pamt = 0;
    var pat_cncsn_pct = 0;
    var pat_cncsn_amt = 0;
    var M_GvRowscount = 1;
    var grid = document.getElementById('' + ctrlcom + '_ReceiptControl2_gvMultipleConcession');
    var M_index = grid.rows.length;
    var con_rule_id = 0;
    var con_auth_id = 0;

    if (document.getElementById('' + ctrlcom + '_ReceiptControl2_chkismultiple').checked == true) {
        $("table[id*=gvMultipleConcession] tr:has(td)").each(function (e) {
            if (M_GvRowscount < M_index) {
                var dscntype = $(this).closest('tr').find("[id*=ddlMultiDiscounttype]").val();
                if (dscntype == 6) {
                    con_auth_id = $(this).closest('tr').find("input[type=hidden][id*=hdnauthid]").val();
                    con_rule_id = $(this).closest('tr').find("input[type=hidden][id*=hdnRuleid]").val();
                }
            }
        });
    }
    if (document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnRegconSetting').value == "Yes" && ((is_reg_include == '' || is_reg_include == 'N'))) {

        $("table[id$=gvServices] tr:has(td)").each(function (e) {
            
            var cash_disc_pcnt = $(this).closest('tr').find('input[type=text][id*=txtDiscP]').val();
            var Hc_disc_pcnt = $(this).closest('tr').find('input[type=text][id*=txthcPer]').val();
            var mng_disc_pcnt = $(this).closest('tr').find('input[type=text][id*=txtmaPer]').val();
            var st_disc_pcnt = $(this).closest('tr').find('input[type=text][id*=txtstPer]').val();
            var cc_rule_disc_pcnt = $(this).closest('tr').find('input[type=text][id*=txtRulePer]').val();
            var EB_disc_pcnt = $(this).closest('tr').find('input[type=text][id*=txtebPer]').val();
            if (parseFloat(cash_disc_pcnt) > 0) { } else { cash_disc_pcnt = 0; }
            if (parseFloat(Hc_disc_pcnt) > 0) { } else { Hc_disc_pcnt = 0; }
            if (parseFloat(mng_disc_pcnt) > 0) { } else { mng_disc_pcnt = 0; }
            if (parseFloat(st_disc_pcnt) > 0) { } else { st_disc_pcnt = 0; }
            if (parseFloat(cc_rule_disc_pcnt) > 0) { } else { cc_rule_disc_pcnt = 0; }
            if (parseFloat(EB_disc_pcnt) > 0) { } else { EB_disc_pcnt = 0; }
            Concession_per = parseFloat(cash_disc_pcnt) + parseFloat(Hc_disc_pcnt) + parseFloat(mng_disc_pcnt) + parseFloat(st_disc_pcnt) + parseFloat(cc_rule_disc_pcnt) + parseFloat(EB_disc_pcnt);
            if ($('#' + ctrlcom + '_ReceiptControl2_ddlDiscountType').val() > 0) {

                CONCESSION = Math.round(parseFloat(RegFee) / 100 * parseFloat(Concession_per));
            }
            if (document.getElementById('' + ctrlcom + '_ReceiptControl2_chkismultiple').checked == true) {
                CONCESSION = Math.round(parseFloat(RegFee) / 100 * parseFloat(Concession_per));
            }
            if (CONCESSION == undefined || CONCESSION == null || CONCESSION == '' || CONCESSION == "NaN") { CONCESSION = "0"; }
            var sno = $(this).closest('tr').find('[id*=lblSNo]').text();
            var txtServiceName = $(this).closest('tr').find("input[type=text][id*=txtServiceName]").val();
            var hdnServiceID = $(this).closest('tr').find("input[type=hidden][id*=hdnServiceID]").val();
            if (txtServiceName.trim() == 'REGISTRATION' && txtServiceName.trim() != '' && txtServiceName != null && txtServiceName != undefined && txtServiceName != "--Enter Service Name Here--" && hdnServiceID != '' && hdnServiceID != null && hdnServiceID != undefined) {
                var staffConper = $(this).closest('tr').find('input[type=text][id*=txtstPer]').val();
                var staffConAmt = $(this).closest('tr').find('input[type=text][id*=txtstAmt]').val();
                var mngmtConper = $(this).closest('tr').find('input[type=text][id*=txtmaPer]').val();
                var MngmtConAmt = $(this).closest('tr').find('input[type=text][id*=txtmgAmt]').val();
                var ebConper = $(this).closest('tr').find('input[type=text][id*=ttxtebPer]').val();
                var ebConAmt = $(this).closest('tr').find('input[type=text][id*=txtebAmt]').val();
                var ConRuleConper = $(this).closest('tr').find('input[type=text][id*=txtRulePer]').val();
                var ConRuleConAmt = $(this).closest('tr').find('input[type=text][id*=txtcncrlAmt]').val();
                var HCConper = $(this).closest('tr').find('input[type=text][id*=txthcPer]').val();
                var HCConAmt = $(this).closest('tr').find('input[type=text][id*=txtHcAmt]').val();
                var CashConper = $(this).closest('tr').find('input[type=text][id*=txtDiscP]').val();
                var CashConAmt = $(this).closest('tr').find('input[type=text][id*=txtDiscAmt]').val();

                Pamt = $(this).closest('tr').find('input[type=text][id*=txtPamt]').val();
                PNamt = $(this).closest('tr').find('input[type=text][id*=txtPNAmt]').val();
                
                var concamt = parseFloat(staffConAmt) + parseFloat(MngmtConAmt) + parseFloat(ebConAmt) + parseFloat(ConRuleConAmt) + parseFloat(HCConAmt) + parseFloat(CashConAmt);
                concamt = concamt || 0;
                PNamt = parseFloat(Pamt) - parseFloat(concamt);

                if (Pamt == null || Pamt == '' || Pamt == undefined) { Pamt = "0"; }
                if (PNamt == null || PNamt == '' || PNamt == undefined) { PNamt = "0"; }
                var acc_net_amount = Math.round(PNamt);
                if (parseFloat(acc_net_amount) > parseFloat(PNamt)) {
                    error_Reg_net_amount = -Math.abs(parseFloat(acc_net_amount) - parseFloat(PNamt));
                }
                else {
                    error_Reg_net_amount = parseFloat(PNamt) - parseFloat(acc_net_amount);
                }
                if (error_Reg_net_amount == undefined || error_Reg_net_amount == null || error_Reg_net_amount == '') { error_Reg_net_amount = 0; }

                _concession = concamt;
                if (parseFloat(Pamt) > 0) {
                    _concession_per = (parseFloat(_concession) * 100) / parseFloat(Pamt);
                }
                if (_concession_per == '' || _concession_per == null || _concession_per == undefined) { _concession_per = 0; }
            }
        });
    }
    else {
        _concession = 0;
    }

    if (parseFloat(_concession) > 0) {
        regnetamt = parseFloat(RegFee) - parseFloat(_concession);
    }
    else {
        if ((is_reg_include == 'Y')) { regnetamt = 0; RegFee = 0; }
        else {
            regnetamt = RegFee;
        }
    }
    if (RegFee != "0") {
        if (parseFloat(PAID_AMOUNT) > 0 && parseFloat(PAID_AMOUNT) >= parseFloat(regnetamt)) {
            regpayfee = parseFloat(regnetamt);
            _RegPaidAmnt = Math.round(regpayfee);
        }
        else if (PAID_AMOUNT > 0 && parseFloat(PAID_AMOUNT) <= parseFloat(regnetamt)) {
            regpayfee = parseFloat(PAID_AMOUNT);
            _RegPaidAmnt = Math.round(regpayfee);
        }
    }
    if (DUE_AMOUNT > 0) {
        if (parseFloat(PAID_AMOUNT) < parseFloat(regnetamt)) {
            regpaydue = parseFloat(regnetamt) - parseFloat(PAID_AMOUNT);
        }
    }
    var DueAuth_Id = document.getElementById('' + ctrlcom + '_ReceiptControl2_Search3__hiddenID').value;
    if (DueAuth_Id == undefined || DueAuth_Id == null || DueAuth_Id == '') { DueAuth_Id = 0; }
    var con_amt = 0;
    if (parseFloat(CONCESSION) > 0) {
        con_amt = ((100 * _concession) / parseFloat(RegFee));
    }
    if (lblquick.className == "select") {
        PAYMENT_TYPE_ID = 2;
    } else if (lbladvanced.className == "select") {
        PAYMENT_TYPE_ID = 1;
    }
    var tretedconsultant = document.getElementById('' + ctrlcom + '_ucConsultant__hiddenID').value;
    if (tretedconsultant == '' || tretedconsultant == undefined || tretedconsultant == null) { tretedconsultant = 0; }

    if (staffConper == '' || staffConper == undefined || staffConper == null) { staffConper = 0; }
    if (staffConAmt == '' || staffConAmt == undefined || staffConAmt == null) { staffConAmt = 0; }
    if (mngmtConper == '' || mngmtConper == undefined || mngmtConper == null) { mngmtConper = 0; }
    if (MngmtConAmt == '' || MngmtConAmt == undefined || MngmtConAmt == null) { MngmtConAmt = 0; }
    if (ebConper == '' || ebConper == undefined || ebConper == null) { ebConper = 0; }
    if (ebConAmt == '' || ebConAmt == undefined || ebConAmt == null) { ebConAmt = 0; }
    if (ConRuleConper == '' || ConRuleConper == undefined || ConRuleConper == null) { ConRuleConper = 0; }
    if (ConRuleConAmt == '' || ConRuleConAmt == undefined || ConRuleConAmt == null) { ConRuleConAmt = 0; }
    if (HCConper == '' || HCConper == undefined || HCConper == null) { HCConper = 0; }
    if (HCConAmt == '' || HCConAmt == undefined || HCConAmt == null) { HCConAmt = 0; }
    if (CashConper == '' || CashConper == undefined || CashConper == null) { CashConper = 0; }
    if (CashConAmt == '' || CashConAmt == undefined || CashConAmt == null) { CashConAmt = 0; }
    var _dispatchID = document.getElementById('' + ctrlcom + '_UCServices_divrptDispatch').value;
    if (_dispatchID == undefined || _dispatchID == null || _dispatchID == '') { _dispatchID = 0; }
    var dept_id = document.getElementById('' + ctrlcom + '_hdnDeptId').value;
    if (dept_id == '' || dept_id == undefined || dept_id == null) { dept_id = 0; }
    var patient_type_id = document.getElementById('' + ctrlcom + '_ddlPatientType').value;
    if (patient_type_id == undefined || patient_type_id == null || patient_type_id == '') { patient_type_id = '1'; }
    if (_concession == undefined || _concession == null || _concession == '') { _concession = 0; }
    var billinghead_id = $(this).closest('tr').find('input[type=hidden][id*=hdnbillingheadid]').val();
    if (billinghead_id == "undefined" || billinghead_id == undefined || billinghead_id == null) { billinghead_id = "0"; }
    var REMARKS = '';
    REMARKS = ReplaceSplCharactor($('#' + ctrlcom + '_ReceiptControl2_txtRemarks').val());
    if (REMARKS == '' || REMARKS == undefined || REMARKS == null) {
        REMARKS = ReplaceSplCharactor($('#' + ctrlcom + '_ReceiptControl2_txtquickremarks').val());
    }
    var cmppersave = document.getElementById('' + ctrlcom + '_txtCorpPercentage').value;
    var emppersave = document.getElementById('' + ctrlcom + '_txtEmpPercentage').value;
    if (cmppersave == undefined || cmppersave == null || cmppersave == '') { cmppersave = "0"; }
    if (emppersave == undefined || emppersave == null || emppersave == '') { emppersave = "0"; }
    cmppersave = setProperDecimals(cmppersave);
    emppersave = setProperDecimals(emppersave);
    var Diagnosis_id = document.getElementById('ctl00_ContentPlaceHolder1_UcDiagnosis__hiddenID').value;
    if (Diagnosis_id == undefined || Diagnosis_id == null || Diagnosis_id == '') { Diagnosis_id = "0"; }
    _xmlRegStr += "<FO_BILL";
    _xmlRegStr += " BILL_ID=$" + "0" + "$";
    _xmlRegStr += " BILL_DT=$" + "" + "$";
    _xmlRegStr += " UMR_NO=$" + UmrNO + "$";
    _xmlRegStr += " ADMN_NO=$" + 0 + "$";
    if (myMultiDatar1 != '') {
        _xmlRegStr += " REFERAL_SOURCE_ID=$" + myMultiDatar1[0]["Refrl_class_id"] + "$";
        _xmlRegStr += " REFERAL_DOCTOR_ID=$" + myMultiDatar1[0]["id"] + "$";
        _xmlRegStr += " REFERAL_NAME=$" + ReplaceSplCharactor(myMultiDatar1[0]["Name"]) + "$";
        _xmlRegStr += " REFERAL_REF_ID=$" + myMultiDatar1[0]["RfrlTo_Id"] + "$";
        _xmlRegStr += " REFERAL_TYPE_ID=$" + myMultiDatar1[0]["Source"] + "$";
    }
    else {
        _xmlRegStr += " REFERAL_SOURCE_ID=$" + "0" + "$";
        _xmlRegStr += " REFERAL_DOCTOR_ID=$" + "0" + "$";
        _xmlRegStr += " REFERAL_NAME=$" + '' + "$";

        _xmlRegStr += " REFERAL_TYPE_ID=$" + 0 + "$";
        _xmlRegStr += " REFERAL_REF_ID=$" + 0 + "$";
    }
    _xmlRegStr += " DOCTOR_ID=$" + Consultant + "$";
    _xmlRegStr += " EMPLOYEE_ID=$" + 0 + "$";
    if (patient_type_id == 1) {
        _xmlRegStr += " CREDIT_TYPE_ID=$" + 1 + "$";
    } else {
        _xmlRegStr += " CREDIT_TYPE_ID=$" + 2 + "$";
    }

    _xmlRegStr += " CONCESSION_ON_ID=$" + 0 + "$";
    _xmlRegStr += " CONCESSION_MODE_ID=$" + 1 + "$";
    _xmlRegStr += " CONCESSION_TYPE_ID=$" + 0 + "$";
    _xmlRegStr += " CONCESSION_TO_ID=$" + 0 + "$";
    _xmlRegStr += " CONCESSION=$" + con_amt + "$";
    _xmlRegStr += " BILLCONCESSION_AUTH_ID=$" + con_AuthID + "$";
    _xmlRegStr += " DUE_AUTH_ID=$" + DueAuth_Id + "$";
    _xmlRegStr += " COMPANY_DUE=$" + 0 + "$";
    _xmlRegStr += " COMPANY_DUE_AUTH_ID=$" + 0 + "$";
    _xmlRegStr += " COMPANY_CONCESSION_AMOUNT=$" + 0 + "$";
    _xmlRegStr += " COMPANY_AMOUNT=$" + 0 + "$";
    _xmlRegStr += " DUE_VERIFY_ID=$" + 0 + "$";
    _xmlRegStr += " DUE_VERIFY_DT=$" + '' + "$";
    _xmlRegStr += " DUE_APPROVE_ID=$" + 0 + "$";
    _xmlRegStr += " DUE_APPROVE_DT=$" + '' + "$";
    _xmlRegStr += " DUE_AUTH_DT=$" + '' + "$";
    _xmlRegStr += " CONCESSION_VERIFY_ID=$" + 0 + "$";
    _xmlRegStr += " CONCESSION_VERIFY_DT=$" + '' + "$";
    _xmlRegStr += " CONCESSION_APPROVE_ID=$" + 0 + "$";
    _xmlRegStr += " CONCESSION_APPROVE_DT=$" + '' + "$";
    _xmlRegStr += " CONCESSION_AUTH_ID=$" + con_AuthID + "$";
    _xmlRegStr += " CONCESSION_AUTH_DT=$" + '' + "$";
    _xmlRegStr += " PRINT_COUNT=$" + 0 + "$";
    fobillamount += Math.round(regpayfee);
    _xmlRegStr += " BILL_AMOUNT=$" + Math.round(RegFee) + "$";
    _xmlRegStr += " BILL_AMOUNT_EXC_GST=$" + Math.round(RegFee) + "$";
    _xmlRegStr += " CONCESSION_AMOUNT=$" + Math.round(_concession) + "$";


    _xmlRegStr += " NET_AMOUNT=$" + Math.round(regnetamt) + "$";
    _xmlRegStr += " NET_AMOUNT_EXC_GST=$" + Math.round(regnetamt) + "$";
    _xmlRegStr += " PAID_AMOUNT=$" + Math.round(regpayfee) + "$";
    _xmlRegStr += " ADVANCE_AMOUNT=$" + 0 + "$";
    _xmlRegStr += " DUE_AMOUNT=$" + Math.round(regpaydue) + "$";
    _xmlRegStr += " DUE_RECOVERED=$" + 0 + "$";
    _xmlRegStr += " OUTSTANDING_DUE=$" + Math.round(regpaydue) + "$";
    _xmlRegStr += " POST_DISCOUNT=$" + 0 + "$";
    _xmlRegStr += " TOTAL_DISCOUNT=$" + Math.round(_concession) + "$";
    _xmlRegStr += " CANCEL_AMOUNT=$" + 0 + "$";
    _xmlRegStr += " REFUND_AMOUNT=$" + 0 + "$";
    _xmlRegStr += " EXCESS_AMOUNT=$" + 0 + "$";
    _xmlRegStr += " CA_BILL_AMT=$" + 0 + "$";
    _xmlRegStr += " CMP_CNCSN_AMT=$" + 0 + "$";
    _xmlRegStr += " CMP_CNCSN_PCT=$" + 0 + "$";
    _xmlRegStr += " CMP_DUE_AMT=$" + 0 + "$";
    _xmlRegStr += " CMP_GROSS_AMT=$" + 0 + "$";
    _xmlRegStr += " CMP_NET_AMT=$" + 0 + "$";
    _xmlRegStr += " CMP_PAID_AMT=$" + 0 + "$";
    _xmlRegStr += " CMP_TAX_AMT=$" + 0 + "$";
    _xmlRegStr += " CMP_TAX_PCT=$" + 0 + "$";
    _xmlRegStr += " CR_BILL_AMT=$" + 0 + "$";
    _xmlRegStr += " CR_CMP_AMT=$" + 0 + "$";
    _xmlRegStr += " CR_CMP_PCT=$" + cmppersave + "$";
    _xmlRegStr += " CR_PAT_AMT=$" + 0 + "$";
    _xmlRegStr += " CR_PAT_PCT=$" + emppersave + "$";
    _xmlRegStr += " EXC_PHA_AMT=$" + 0 + "$";
    _xmlRegStr += " GROSS_PHA_AMT=$" + 0 + "$";
    _xmlRegStr += " INC_PHA_AMT=$" + 0 + "$";
    _xmlRegStr += " IS_DSCHRG_WITHOUT_BILL=$" + 0 + "$";
    _concession = _concession || 0;
    _xmlRegStr += " PAT_CNCSN_AMT=$" + Math.round(_concession) + "$";
    con_amt = con_amt || 0;
    _xmlRegStr += " PAT_CNCSN_PCT=$" + con_amt + "$";
    _xmlRegStr += " PAT_DUE_AMT=$" + Math.round(regpaydue) + "$";
    _xmlRegStr += " PAT_GROSS_AMT=$" + Math.round(RegFee) + "$";
    _xmlRegStr += " PAT_NET_AMT=$" + Math.round(regnetamt) + "$";
    _xmlRegStr += " PAT_PAID_AMT=$" + Math.round(regpayfee) + "$";
    _xmlRegStr += " PAT_TAX_AMT=$" + 0 + "$";
    _xmlRegStr += " PAT_TAX_PCT=$" + 0 + "$";
    _xmlRegStr += " PERFORMED_PROCS=$" + 0 + "$";
    _xmlRegStr += " PKG_BILL_AMT=$" + 0 + "$";
    _xmlRegStr += " PKG_CNCSN_AMT=$" + 0 + "$";
    _xmlRegStr += " PKG_DUE_AMT=$" + 0 + "$";
    _xmlRegStr += " PKG_EXC_AMT=$" + 0 + "$";
    _xmlRegStr += " PKG_GROSS_AMT=$" + 0 + "$";
    _xmlRegStr += " PKG_INC_AMT=$" + 0 + "$";
    _xmlRegStr += " PKG_NET_AMT=$" + 0 + "$";
    _xmlRegStr += " PKG_PAID_AMT=$" + 0 + "$";
    _xmlRegStr += " PKG_POSTDSC_AMT=$" + 0 + "$";
    _xmlRegStr += " REMARKS=$" + REMARKS + "$";
    _xmlRegStr += " IS_SHINK=$" + 0 + "$";
    _xmlRegStr += " PKG_TOTAL_RECEIVED_AMT=$" + 0 + "$";
    _xmlRegStr += " REF_ID=$" + 0 + "$";
    _xmlRegStr += " ACC_CMP_ID=$" + 0 + "$";
    _xmlRegStr += " ACC_CMP_AMT=$" + 0 + "$";
    _xmlRegStr += " ACC_CMP_PCT=$" + 0 + "$";
    _xmlRegStr += " ACC_CMP_LVL_ID=$" + 0 + "$";
    _xmlRegStr += " IS_REFERAL=$" + 0 + "$";
    _xmlRegStr += " PKG_EXCESS_AMT=$" + 0 + "$";
    //   _xmlRegStr += " APPROVE_BY=$" + 0 + "$";
    //   _xmlRegStr += " APPROVE_DT=$" + '' + "$";
    _xmlRegStr += " PCKG_CONV_ID=$" + 0 + "$";
    _xmlRegStr += " PAT_EXCESS_AMT=$" + 0 + "$";
    _xmlRegStr += " CMPNY_REFERAL_LETTER_ID=$" + rfltrid + "$";
    _xmlRegStr += " PREREFUND=$" + 0 + "$";
    _xmlRegStr += " CORP_ADMN_DT=$" + '' + "$";
    _xmlRegStr += " CORP_DISCHR_DT=$" + '' + "$";
    _xmlRegStr += " PATIENT_CLASS_ID=$" + 0 + "$";
    _xmlRegStr += " OLD_BILL_TYPE_ID=$" + 0 + "$";
    _xmlRegStr += " PATIENT_TYPE_ID=$" + patient_type_id + "$";
    _xmlRegStr += " PKG_RFND_AMT=$" + 0 + "$";
    _xmlRegStr += " PACKAGE_STATUS=$" + 0 + "$";
    _xmlRegStr += " CMP_OUTSTANDING_DUE=$" + 0 + "$";
    _xmlRegStr += " CMP_DUE_RECOVERED=$" + 0 + "$";
    _xmlRegStr += " DISALLOWANCE_AMT=$" + 0 + "$";
    _xmlRegStr += " TDS_AMT=$" + 0 + "$";
    _xmlRegStr += " IS_CORP_APPBILL=$" + 0 + "$";
    _xmlRegStr += " SAMPLE_COLLETED_DATE=$" + "" + "$";
    _xmlRegStr += " CLINLICAL_SUMMARY=$" + 0 + "$";
    _xmlRegStr += " DISC_REQ_REASON=$" + 0 + "$";
    _xmlRegStr += " PKG_EF_FRM_TODT=$" + '' + "$";
    _xmlRegStr += " PKG_DUE_RECOVERED=$" + 0 + "$";
    _xmlRegStr += " CLINLICAL_SUMMARY_FILE=$" + 0 + "$";
    _xmlRegStr += " REFERAL_CUSTMER=$" + 0 + "$";
    _xmlRegStr += " EMP_NARATION=$" + 0 + "$";
    _xmlRegStr += " CNCSN_NARATION=$" + 0 + "$";
    _xmlRegStr += " IS_POST_CONSULT=$" + 0 + "$";
    _xmlRegStr += " BILL_NO=$" + 0 + "$";
    _xmlRegStr += " REFERAL_CUSTOMER_ID=$" + 0 + "$";
    _xmlRegStr += " CENTER_ID=$" + 0 + "$";
    var Token_no = $('[id*=ddlToken]').find('option:selected').text();
    if (Token_no == undefined || Token_no == null || Token_no == 'select') { Token_no = ''; }
    _xmlRegStr += " TOKEN_NO=$" + Token_no + "$";
    _xmlRegStr += " REG_CONS_BILL_ID=$" + 0 + "$";
    _xmlRegStr += " REG_ID=$" + _reg_id + "$";

    _xmlRegStr += " CMP_ID=$" + Cmp_Id + "$";
    _xmlRegStr += " BILL_TYPE_ID=$" + 0 + "$";
    _xmlRegStr += " BILL_TYPE_REV_NO=$" + '1' + "$";
    _xmlRegStr += " REFERAL_SOURCE_REV_NO=$" + 1 + "$";
    _xmlRegStr += " REFERAL_TYPE_REV_NO=$" + 1 + "$";
    _xmlRegStr += " REFERAL_DOCTOR_REV_NO=$" + "1" + "$";
    _xmlRegStr += " REFERAL_REF_REV_NO=$" + "1" + "$";
    _xmlRegStr += " DOCTOR_REV_NO=$" + 1 + "$";
    _xmlRegStr += " EMPLOYEE_REV_NO=$" + 1 + "$";
    _xmlRegStr += " CREDIT_TYPE_REV_NO=$" + 1 + "$";
    _xmlRegStr += " CONCESSION_ON_REV_NO=$" + 1 + "$";
    _xmlRegStr += " CONCESSION_MODE_REV_NO=$" + "1" + "$";
    _xmlRegStr += " CONCESSION_TYPE_REV_NO=$" + "1" + "$";
    _xmlRegStr += " CONCESSION_AUTH_REV_NO=$" + "1" + "$";
    _xmlRegStr += " DUE_AUTH_REV_NO=$" + "1" + "$";
    _xmlRegStr += " ACC_CMP_REV_NO=$" + 1 + "$";
    _xmlRegStr += " ACC_CMP_LVL_REV_NO=$" + 1 + "$";
    _xmlRegStr += " GRP_REV_NO=$" + 1 + "$";
    _xmlRegStr += " ORG_REV_NO=$" + "1" + "$";
    _xmlRegStr += " BILL_TYPE=$" + "REG" + "$";
    _xmlRegStr += " REPORT_DISPATCH_ID=$" + _dispatchID + "$";
    _xmlRegStr += " TPA_ID=$" + TPA_ID + "$";
    _xmlRegStr += " REC_TYPE_ID=$" + rec_type_id + "$";
    _xmlRegStr += " SESSION_ID=$" + document.getElementById('' + ctrlcom + '_HDNSESSIONID').value + "$";
    if (parseFloat(regpaydue) > 0 && document.getElementById('' + ctrlcom + '_ChkAssesment').checked) {
        _xmlRegStr += " RECORD_STATUS=$" + "P" + "$";
    }
    else {
        _xmlRegStr += " RECORD_STATUS=$" + 'A' + "$";
    }
    _xmlRegStr += " ROUND_ERR=$" + 0 + "$";
    _xmlRegStr += " EXCESS_AMT=$" + 0 + "$";
    _xmlRegStr += " TRN_SOURCE_ID=$" + 0 + "$";
    _xmlRegStr += " DMS_UPLOAD=$" + 'N' + "$";
    _xmlRegStr += " TRN_DOCUMENT_ID=$" + $('[id*=hdnSessionDocId]').val() + "$";
    _xmlRegStr += " DOCTOR_PCT =$" + 0 + "$";
    _xmlRegStr += " ORG_PCT =$" + 0 + "$";
    _xmlRegStr += " FOREIGN_CATEGORY_ID =$" + Pat_cat + "$";
    _xmlRegStr += " DOCTOR_TYPE =$" + "I" + "$";
    _xmlRegStr += " GST_AMOUNT =$" + 0 + "$";
    _xmlRegStr += " SGST_AMOUNT =$" + 0 + "$";
    _xmlRegStr += " CGST_AMOUNT =$" + 0 + "$";
    _xmlRegStr += " DIAGNOSIS_ID =$" + Diagnosis_id + "$";
    _xmlRegStr += "/>";

    _xmlRegStr += "<FO_BILL_SRV";
    _xmlRegStr += " BILL_SRV_ID=$" + 0 + "$";
    _xmlRegStr += " UMR_NO=$" + UmrNO + "$";
    _xmlRegStr += " SERVICE_TYPE_ID=$" + 5 + "$";
    _xmlRegStr += " SERVICE_GROUP_ID=$" + dept_id + "$";
    _xmlRegStr += " SERVICE_ID=$" + 1 + "$";
    _xmlRegStr += " SERVICE_CLASS_ID=$" + 0 + "$";
    _xmlRegStr += " CLASS_SERVICE_ID=$" + 0 + "$";
    _xmlRegStr += " QUANTITY=$" + 1 + "$";
    _xmlRegStr += " RATE=$" + Math.round(RegFee) + "$";
    _xmlRegStr += " RATE_EXC_GST=$" + Math.round(RegFee) + "$";
    _xmlRegStr += " AMOUNT=$" + Math.round(RegFee) + "$";
    _xmlRegStr += " CONCESSION=$" + con_amt + "$";
    _xmlRegStr += " CONCESSION_AMOUNT=$" + Math.round(_concession) + "$";
    _xmlRegStr += " NET_AMOUNT=$" + Math.round(regnetamt) + "$";

    _xmlRegStr += " EMP_GROSS_AMT=$" + Math.round(RegFee) + "$";
    _xmlRegStr += " EMP_NET_AMT=$" + Math.round(regnetamt) + "$";
    _xmlRegStr += " CONCESSION_AMT=$" + Math.round(_concession) + "$";
    _xmlRegStr += " DOCTOR_PRICE=$" + 0 + "$";
    _xmlRegStr += " ORG_PRICE=$" + 0 + "$";
    _xmlRegStr += " RECORD_SNO=$" + 1 + "$";
    _xmlRegStr += " SERVICE_PRICE_ID=$" + 0 + "$";
    _xmlRegStr += " TO_LOC_ID=$" + 1 + "$";
    _xmlRegStr += " EDIT_SERVICE_NAME=$" + 'REGISTRATION' + "$";
    _xmlRegStr += " EDIT_SERVICE_CD=$" + 'REG' + "$";
    _xmlRegStr += " IS_FOREIGN_SERVICE=$" + "N" + "$";
    _xmlRegStr += " SERVICE_STATUS=$" + "B" + "$";
    _xmlRegStr += " IS_EMERGENCY=$" + 'N' + "$";
    _xmlRegStr += " IS_EMERGNCY_PRICE=$" + 0 + "$";
    _xmlRegStr += " APPT_NO=$" + __apptID + "$";
    _xmlRegStr += " CONSULTATION_TYPE_ID=$" + 1 + "$";
    _xmlRegStr += " TREATED_BY_ID=$" + tretedconsultant + "$";
    _xmlRegStr += " DEPARTMENT_ID=$" + dept_id + "$";
    _xmlRegStr += " DOCTOR_ID=$" + Consultant + "$";
    _xmlRegStr += " IS_CASH=$" + "N" + "$";
    _xmlRegStr += " TARIFF_ID =$" + 0 + "$";
    _xmlRegStr += " COMPANY_TARIFF_ID =$" + TPA_ID + "$";
    _xmlRegStr += " SESSION_ID=$" + document.getElementById('' + ctrlcom + '_HDNSESSIONID').value + "$";
    _xmlRegStr += " TRN_SOURCE_ID =$" + 0 + "$";
    _xmlRegStr += " DOCTOR_PCT =$" + 0 + "$";
    _xmlRegStr += " ORG_PCT =$" + 0 + "$";
    _xmlRegStr += " TAX_PCT =$" + 0 + "$";
    _xmlRegStr += " TAX_AMOUNT =$" + 0 + "$";
    _xmlRegStr += " SGST_PCT =$" + 0 + "$";
    _xmlRegStr += " SGST_AMOUNT =$" + 0 + "$";
    _xmlRegStr += " CGST_PCT =$" + 0 + "$";
    _xmlRegStr += " CGST_AMOUNT =$" + 0 + "$";
    _xmlRegStr += " COMPANY_BILL_HEAD_ID =$" + billinghead_id + "$";
    _xmlRegStr += " REC_TYPE_ID=$" + rec_type_id + "$";
    _xmlRegStr += " CNCSN_AUTH_ID=$" + con_auth_id + "$";
    _xmlRegStr += " CONC_RULE_ID=$" + con_rule_id + "$";
    _xmlRegStr += " />";

    _recpayxml += "<FO_RECPAY_REF ";
    _recpayxml += " RECPAY_REF_ID=$" + "0" + "$";
    _recpayxml += " APPROVE_BY=$" + 0 + "$";
    _recpayxml += " APPROVE_DT=$" + '' + "$";
    _recpayxml += " AMOUNT=$" + Math.round(regpayfee) + "$";
    _recpayxml += " REFERENCE_TYPE_ID=$" + 0 + "$";
    _recpayxml += " DOCTOR_ID=$" + Consultant + "$";
    _recpayxml += " PAYMENT_TYPE_ID=$" + PAYMENT_TYPE_ID + "$";
    _recpayxml += " SESSION_ID=$" + document.getElementById('' + ctrlcom + '_HDNSESSIONID').value + "$";
    var curr_id = document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnstpcurrid').value;
    _recpayxml += " CURR_ID=$" + curr_id + "$";
    _recpayxml += " TRN_SOURCE_ID=$" + 0 + "$";

    _recpayxml += " NET_GROSS_AMT=$" + (RegFee) + "$";
    _recpayxml += " NET_DISCOUNT_AMT=$" + (_concession) + "$";
    _recpayxml += " NET_RECEIPT_AMT=$" + (regpayfee) + "$";
    _recpayxml += " OUTSTANDING_DUE_AMT=$" + regpaydue + "$";
    _recpayxml += " EXCESS_AMT=$" + 0 + "$";
    _recpayxml += " REC_TYPE_ID=$" + rec_type_id + "$";

    _recpayxml += "/>";

    var _xmlStr_concession = '';
    var _Xml_healthcard_string = '';
    var all_cons_reg = document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnRegconSetting').value;
    var tothcamt = 0;
    if (document.getElementById('' + ctrlcom + '_ReceiptControl2_chkismultiple').checked == true && all_cons_reg == "Yes") {
        $("table[id$=gvServices] tr:has(td)").each(function (e) {

            var hdnServiceID = $(this).closest('tr').find("input[type=hidden][id*=hdnServiceID]").val();
            var txtserviceName = $(this).closest('tr').find("input[type=text][id*=txtServiceName]").val();
            var hdnDoctorID = $(this).closest('tr').find("input[type=hidden][id*=hdnDoctorID]").val();
            if (txtserviceName == "REGISTRATION" && hdnServiceID == "1") {
                var staffConAmt = $(this).closest('tr').find('input[type=text][id*=txtstAmt]').val();
                var staffConper = $(this).closest('tr').find('input[type=text][id*=txtstPer]').val();
                var mngmtConper = $(this).closest('tr').find('input[type=text][id*=txtmaPer]').val();
                var MngmtConAmt = $(this).closest('tr').find('input[type=text][id*=txtmgAmt]').val();
                var ebConper = $(this).closest('tr').find('input[type=text][id*=txtebPer]').val();
                var ebConAmt = $(this).closest('tr').find('input[type=text][id*=txtebAmt]').val();
                var ConRuleConper = $(this).closest('tr').find('input[type=text][id*=txtRulePer]').val();
                var ConRuleConAmt = $(this).closest('tr').find('input[type=text][id*=txtcncrlAmt]').val();
                var HCConper = $(this).closest('tr').find('input[type=text][id*=txthcPer]').val();
                var HCConAmt = $(this).closest('tr').find('input[type=text][id*=txtHcAmt]').val();
                var CashConper = $(this).closest('tr').find('input[type=text][id*=txtDiscP]').val();
                var CashConAmt = $(this).closest('tr').find('input[type=text][id*=txtDiscAmt]').val();
                if (staffConper == '' || staffConper == undefined || staffConper == null) { staffConper = 0; }
                if (staffConAmt == '' || staffConAmt == undefined || staffConAmt == null) { staffConAmt = 0; }
                if (mngmtConper == '' || mngmtConper == undefined || mngmtConper == null) { mngmtConper = 0; }
                if (MngmtConAmt == '' || MngmtConAmt == undefined || MngmtConAmt == null) { MngmtConAmt = 0; }
                if (ebConper == '' || ebConper == undefined || ebConper == null) { ebConper = 0; }
                if (ebConAmt == '' || ebConAmt == undefined || ebConAmt == null) { ebConAmt = 0; }
                if (ConRuleConper == '' || ConRuleConper == undefined || ConRuleConper == null) { ConRuleConper = 0; }
                if (ConRuleConAmt == '' || ConRuleConAmt == undefined || ConRuleConAmt == null) { ConRuleConAmt = 0; }
                if (HCConper == '' || HCConper == undefined || HCConper == null) { HCConper = 0; }
                if (HCConAmt == '' || HCConAmt == undefined || HCConAmt == null) { HCConAmt = 0; }
                if (CashConper == '' || CashConper == undefined || CashConper == null) { CashConper = 0; }
                if (CashConAmt == '' || CashConAmt == undefined || CashConAmt == null) { CashConAmt = 0; }
                if (hdnServiceID == '' || hdnServiceID == undefined || hdnServiceID == null) { hdnServiceID = 0; }
                if (hdnDoctorID == '' || hdnDoctorID == undefined || hdnDoctorID == null) { hdnDoctorID = 0; }
                $("table[id*=gvMultipleConcession] tr:has(td)").each(function (e) {

                    var cncsntypeid = $(this).closest('tr').find("[id*=ddlMultiDiscounttype]").val();
                    if (cncsntypeid == undefined || cncsntypeid == null || cncsntypeid == "") { cncsntypeid = 0; }
                    var authid = $(this).closest('tr').find("input[type=hidden][id*=hdnauthid]").val();
                    var _ddlmodeid = $(this).closest('tr').find("[id*=ddlModes]").val();
                    var _Cardno = $(this).closest('tr').find("input[type=text][id*=txtcardno]").val();
                    var cncsremarks = $(this).closest('tr').find("input[type=text][id*=txtCRemks]").val();
                    var cncsn_rule_id = document.getElementById('' + ctrlcom + '_umrPatientDetails_hdncncsn_rule_id').value;

                    if (cncsn_rule_id == undefined || cncsn_rule_id == null || cncsn_rule_id == '') { cncsn_rule_id = 0; }
                    if (cncsntypeid == undefined || cncsntypeid == null || cncsntypeid == '') { cncsntypeid = 0; }
                    if (authid == undefined || authid == null || authid == '') { authid = 0; }
                    if (_ddlmodeid == undefined || _ddlmodeid == null || _ddlmodeid == '') { _ddlmodeid = 0; }
                    if (_Cardno == undefined || _Cardno == null) { _Cardno = ''; }
                    var healthcarddetid = 0;
                    var healthcardid = 0;
                    if (_Cardno != '') {
                        healthcarddetid = document.getElementById('ctl00_ContentPlaceHolder1_umrPatientDetails_hdnhealthdepencyid').value;
                        healthcardid = document.getElementById('ctl00_ContentPlaceHolder1_umrPatientDetails_hdnhealthcard_id').value;
                    }
                    if (healthcarddetid == undefined || healthcarddetid == null || healthcarddetid == '') { healthcarddetid = "0"; }
                    if (healthcardid == undefined || healthcardid == null || healthcardid == '') { healthcardid = "0"; }
                    var cardid = 0;
                    if (cncsntypeid == 2) {
                        //cardid = $(this).closest('tr').find("input[type=hidden][id*=hdncardid]").val();
                        cardid = document.getElementById('ctl00_ContentPlaceHolder1_umrPatientDetails_hdncncsn_rule_id').value;
                    } else if (cncsntypeid == 5) {
                        cardid = $(this).closest('tr').find("input[type=hidden][id*=hdneventid]").val();
                    } else if (cncsntypeid == 6) {
                        cardid = $(this).closest('tr').find("input[type=hidden][id*=hdnRuleid]").val();
                    } else {
                        cardid = 0;
                    }

                    var _Cncs_Per = 0;
                    var _cncs_amt = 0;
                    if (cncsntypeid == '1') {
                        _Cncs_Per = CashConper;
                        _cncs_amt = CashConAmt;
                    }
                    else if (cncsntypeid == '2') {
                        _Cncs_Per = HCConper;
                        _cncs_amt = HCConAmt;
                        tothcamt = HCConAmt;
                    }
                    else if (cncsntypeid == '3') {
                        _Cncs_Per = mngmtConper;
                        _cncs_amt = MngmtConAmt;
                    }
                    else if (cncsntypeid == '4') {
                        _Cncs_Per = staffConper;
                        _cncs_amt = staffConAmt;
                    }
                    else if (cncsntypeid == '5') {
                        _Cncs_Per = ebConper;
                        _cncs_amt = ebConAmt;
                    }
                    else if (cncsntypeid == '6') {
                        _Cncs_Per = ConRuleConper;
                        _cncs_amt = ConRuleConAmt;
                    }
                    if (cncsntypeid > 0 && parseFloat(_Cncs_Per) > 0 && parseFloat(_cncs_amt) > 0) {
                        _xmlStr_concession += "<FO_BILL_CNCSN";
                        _xmlStr_concession += " BILL_CNCSN_ID=$" + 0 + "$";
                        _xmlStr_concession += " BILL_CNCSN_REV_NO=$" + 1 + "$";
                        _xmlStr_concession += " BILL_ID=$" + "0" + "$";
                        _xmlStr_concession += " CONCESSION_TYPE_ID=$" + cncsntypeid + "$";
                        _xmlStr_concession += " CONCESSION_MODE_ID=$" + _ddlmodeid + "$";
                        _xmlStr_concession += " CONCESSION_PERCENT=$" + _Cncs_Per + "$";
                        _xmlStr_concession += " CONCESSION_AMOUNT=$" + Math.round(_cncs_amt) + "$";
                        _xmlStr_concession += " RECORD_STATUS=$" + "A" + "$";
                        _xmlStr_concession += " CNCSN_RULE_ID=$" + cardid + "$";
                        _xmlStr_concession += " CARD_NO=$" + ReplaceSplCharactor(_Cardno) + "$";
                        _xmlStr_concession += " CNCSN_AUTH_ID=$" + authid + "$";
                        _xmlStr_concession += " CNCSN_REF_NO=$" + 0 + "$";
                        _xmlStr_concession += " REMARKS=$" + ReplaceSplCharactor(cncsremarks) + "$";
                        _xmlStr_concession += " HEALTH_CARD_DET_ID=$" + healthcarddetid + "$";
                        _xmlStr_concession += " HEALTH_CARD_ID=$" + healthcardid + "$";
                        _xmlStr_concession += " BILL_TYPE_ID=$" + "0" + "$";
                        _xmlStr_concession += "/>";

                        _xmlStr_concession += "<FO_BILL_SRV_CNCSN";
                        _xmlStr_concession += " BILL_SRV_CNCSN_ID=$" + 0 + "$";
                        _xmlStr_concession += " BILL_SRV_ID=$" + 0 + "$";
                        _xmlStr_concession += " BILL_CNCSN_ID=$" + "0" + "$";
                        _xmlStr_concession += " CONCESSION_TYPE_ID=$" + cncsntypeid + "$";
                        _xmlStr_concession += " CONCESSION_AMOUNT=$" + setProperDecimals(_cncs_amt) + "$";
                        _xmlStr_concession += " PAT_CONC_PER=$" + CashConper + "$";
                        _xmlStr_concession += " PAT_CONC_AMT=$" + setProperDecimals(CashConAmt) + "$";
                        _xmlStr_concession += " HC_PERC=$" + HCConper + "$";
                        _xmlStr_concession += " HC_AMT=$" + setProperDecimals(HCConAmt) + "$";
                        _xmlStr_concession += " MG_PERC=$" + mngmtConper + "$";
                        _xmlStr_concession += " MG_AMT=$" + setProperDecimals(MngmtConAmt) + "$";
                        _xmlStr_concession += " STAFF_PERC=$" + staffConper + "$";
                        _xmlStr_concession += " STAFF_AMT=$" + setProperDecimals(staffConAmt) + "$";
                        _xmlStr_concession += " EB_PERC=$" + ebConper + "$";
                        _xmlStr_concession += " EB_AMT=$" + setProperDecimals(ebConAmt) + "$";
                        _xmlStr_concession += " CNCSNRULEPERC=$" + ConRuleConper + "$";
                        _xmlStr_concession += " CNCSNRULEAMT=$" + setProperDecimals(ConRuleConAmt) + "$";
                        _xmlStr_concession += " RECORD_STATUS=$" + 'A' + "$";
                        _xmlStr_concession += " SERVICE_ID=$" + hdnServiceID + "$";
                        _xmlStr_concession += " DOCTOR_ID=$" + hdnDoctorID + "$";
                        _xmlStr_concession += " CONCESSION_PERCENT=$" + _Cncs_Per + "$";
                        _xmlStr_concession += "/>";
                    }
                });
            }
        });

    }
    else if (all_cons_reg == "Yes" && document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlDiscountType').value == 1) {
        /* Single Discount */

        var sing_disc_auth = $('#' + ctrlcom + '_ReceiptControl2_ucdueauth__hiddenID').val();
        if (sing_disc_auth == undefined || sing_disc_auth == null || sing_disc_auth == '' || sing_disc_auth == 'undefined') { sing_disc_auth = 0; }
        Con_Remarks = ReplaceSplCharactor($('#' + ctrlcom + '_ReceiptControl2_txtRemarks').val());
        $("table[id$=gvServices] tr:has(td)").each(function (e) {

            var hdnServiceID = $(this).closest('tr').find("input[type=hidden][id*=hdnServiceID]").val();
            var txtserviceName = $(this).closest('tr').find("input[type=text][id*=txtServiceName]").val();
            var hdnDoctorID = $(this).closest('tr').find("input[type=hidden][id*=hdnDoctorID]").val();
            if (txtserviceName == "REGISTRATION" && hdnServiceID == "1") {
                var CashConper = $(this).closest('tr').find('input[type=text][id*=txtDiscP]').val();
                var CashConAmt = $(this).closest('tr').find('input[type=text][id*=txtDiscAmt]').val();
                if (CashConper == '' || CashConper == undefined || CashConper == null) { CashConper = 0; }
                if (CashConAmt == '' || CashConAmt == undefined || CashConAmt == null) { CashConAmt = 0; }
                if (hdnServiceID == '' || hdnServiceID == undefined || hdnServiceID == null) { hdnServiceID = 0; }
                if (hdnDoctorID == '' || hdnDoctorID == undefined || hdnDoctorID == null) { hdnDoctorID = 0; }
                if (parseFloat(CashConper) > 0 && parseFloat(CashConper)) {
                    _xmlStr_concession += "<FO_BILL_CNCSN";
                    _xmlStr_concession += " BILL_CNCSN_ID=$" + 0 + "$";
                    _xmlStr_concession += " BILL_CNCSN_REV_NO=$" + 1 + "$";
                    _xmlStr_concession += " BILL_ID=$" + "0" + "$";
                    _xmlStr_concession += " CONCESSION_TYPE_ID=$" + 1 + "$";
                    _xmlStr_concession += " CONCESSION_MODE_ID=$" + 1 + "$";
                    _xmlStr_concession += " CONCESSION_PERCENT=$" + CashConper + "$";
                    _xmlStr_concession += " CONCESSION_AMOUNT=$" + Math.round(CashConAmt) + "$";
                    _xmlStr_concession += " RECORD_STATUS=$" + "A" + "$";
                    _xmlStr_concession += " CNCSN_RULE_ID=$" + "" + "$";
                    _xmlStr_concession += " CARD_NO=$" + "" + "$";
                    _xmlStr_concession += " CNCSN_AUTH_ID=$" + sing_disc_auth + "$";
                    _xmlStr_concession += " CNCSN_REF_NO=$" + 0 + "$";
                    _xmlStr_concession += " REMARKS=$" + ReplaceSplCharactor(Con_Remarks) + "$";
                    _xmlStr_concession += " BILL_TYPE_ID=$" + "0" + "$";
                    _xmlStr_concession += "/>";

                    _xmlStr_concession += "<FO_BILL_SRV_CNCSN";
                    _xmlStr_concession += " BILL_SRV_CNCSN_ID=$" + 0 + "$";
                    _xmlStr_concession += " BILL_SRV_ID=$" + 0 + "$";
                    _xmlStr_concession += " BILL_CNCSN_ID=$" + "0" + "$";
                    _xmlStr_concession += " CONCESSION_TYPE_ID=$" + 1 + "$";
                    _xmlStr_concession += " CONCESSION_AMOUNT=$" + setProperDecimals(CashConAmt) + "$";
                    _xmlStr_concession += " PAT_CONC_PER=$" + CashConper + "$";
                    _xmlStr_concession += " PAT_CONC_AMT=$" + setProperDecimals(CashConAmt) + "$";
                    _xmlStr_concession += " HC_PERC=$" + 0 + "$";
                    _xmlStr_concession += " HC_AMT=$" + 0 + "$";
                    _xmlStr_concession += " MG_PERC=$" + 0 + "$";
                    _xmlStr_concession += " MG_AMT=$" + 0 + "$";
                    _xmlStr_concession += " STAFF_PERC=$" + 0 + "$";
                    _xmlStr_concession += " STAFF_AMT=$" + 0 + "$";
                    _xmlStr_concession += " EB_PERC=$" + 0 + "$";
                    _xmlStr_concession += " EB_AMT=$" + 0 + "$";
                    _xmlStr_concession += " CNCSNRULEPERC=$" + 0 + "$";
                    _xmlStr_concession += " CNCSNRULEAMT=$" + 0 + "$";
                    _xmlStr_concession += " RECORD_STATUS=$" + 'A' + "$";
                    _xmlStr_concession += " SERVICE_ID=$" + hdnServiceID + "$";
                    _xmlStr_concession += " DOCTOR_ID=$" + hdnDoctorID + "$";
                    _xmlStr_concession += " CONCESSION_PERCENT=$" + CashConper + "$";
                    _xmlStr_concession += "/>";
                }
            }
        });
    }

    var hcid = '';
    var hcNo = '';
    var form_name = document.getElementById('' + ctrlcom + '_UCServices_hdnSrvFormName').value;
    if (form_name == 'OP' || form_name == 'Cons') {
        hcid = document.getElementById('' + ctrlcom + '_umrPatientDetails_HdnHealthcardid').value;
        hcNo = document.getElementById('' + ctrlcom + '_umrPatientDetails_HdnHealthcardno').value;
    }
    else if (form_name == 'OPQUICK') {
        if (document.getElementById('ctl00_ContentPlaceHolder1_chkhccrd').checked == true) {
            hcid = $('#' + ctrlcom + '_Address1_uchccrdtype__hiddenID').val();
            hcNo = document.getElementById('ctl00_ContentPlaceHolder1_lblhcnon').innerHTML;

        }
        else {
            hcid = document.getElementById('' + ctrlcom + '_ReceiptControl2_HdnHealthcardid').value;
            hcNo = document.getElementById('' + ctrlcom + '_ReceiptControl2_HdnHealthcardno').value;
        }
    }
    var cncsnruleid = document.getElementById('ctl00_ContentPlaceHolder1_umrPatientDetails_hdncncsn_rule_id').value;
    var eligibity_amt = document.getElementById('ctl00_ContentPlaceHolder1_umrPatientDetails_hdnhealthcardeligibleamt').value;
    var depencyid = document.getElementById('ctl00_ContentPlaceHolder1_umrPatientDetails_hdnhealthdepencyid').value
    hcid = hcid == '' ? 0 : hcid;
    hcNo = hcNo == '' ? 0 : hcNo;

    if (cncsnruleid == undefined || cncsnruleid == null || cncsnruleid == '') { cncsnruleid = "0"; }
    if (eligibity_amt == undefined || eligibity_amt == null || eligibity_amt == '') { eligibity_amt = "0"; }
    if (depencyid == undefined || depencyid == null || depencyid == '') { depencyid = "0"; }
    var healthcardid = document.getElementById('ctl00_ContentPlaceHolder1_umrPatientDetails_hdnhealthcard_id').value;
    if (healthcardid == undefined || healthcardid == null || healthcardid == '') { healthcardid = "0"; }
    if (document.getElementById('' + ctrlcom + '_ReceiptControl2_chkismultiple').checked == true && hcid > 0) {


        _Xml_healthcard_string += "<HEALTHCARD_USAGE_TRAN ";
        _Xml_healthcard_string += " UMR_NO=$" + UmrNO + "$";
        _Xml_healthcard_string += " DEPENDENCY_ID=$" + depencyid + "$";
        _Xml_healthcard_string += " GROSS_AMOUNT=$" + Math.round(RegFee) + "$";
        _Xml_healthcard_string += " CONCESSION_AMOUNT=$" + setProperDecimals(tothcamt) + "$";
        _Xml_healthcard_string += " NET_AMOUNT=$" + setProperDecimals(regnetamt) + "$";
        _Xml_healthcard_string += " ON_CARD_AMT=$" + eligibity_amt + "$";
        _Xml_healthcard_string += " CNCSN_RULE_ID=$" + cncsnruleid + "$";
        _Xml_healthcard_string += " HEALTH_CARD_NO=$" + hcNo + "$";
        _Xml_healthcard_string += " HEALTHCARD_TRAN_ID=$" + healthcardid + "$";
        _Xml_healthcard_string += "  />"
    }
    _xmlRegStr += _Xml_healthcard_string;

    //  _xmlStr_concession += SaveMOUDiscount();
    _xmlRegStr += _xmlStr_concession;
    _xmlRegStr += "</root>";
    return _xmlRegStr;
}
function ReferralSave(Type) {
    var rec_type_id = 0;
    if (document.getElementById('ctl00_hdnIsMedClg').value == "TRUE") {
        rec_type_id = $('input[id*=radiousertran]:checked').val()
        if (rec_type_id == 0 || rec_type_id == null || rec_type_id == undefined) { rec_type_id = 1; }
    }
    else { rec_type_id = 1; }
    referral_save_count = 1;
    if (document.getElementById('' + ctrlcom + '_chkisold').checked == true) {
        UmrNO = document.getElementById('' + ctrlcom + '_ucUMRno_txtSearchControl').value;
        _reg_id = document.getElementById('' + ctrlcom + '_hdnRegID').value;
        if (_reg_id == undefined || _reg_id == null || _reg_id == '') { _reg_id = "0"; }
    }
    else if (document.getElementById('' + ctrlcom + '_chk_old').checked) { UmrNO = document.getElementById('' + ctrlcom + '_umrPatientDetails_Umrlookup_txtSearchControl').value; }
    else {
        UmrNO = document.getElementById('' + ctrlcom + '_txtumrno').value;
    }
    var ref1 = document.getElementById('' + ctrlcom + '_hdnref1').value;
    var ref2 = document.getElementById('' + ctrlcom + '_hdnref2').value;
    var ref3 = document.getElementById('' + ctrlcom + '_hdnref3').value;
    var ref4 = document.getElementById('' + ctrlcom + '_hdnref4').value;

    var refrev1 = document.getElementById('' + ctrlcom + '_hdnrefrev1').value;
    var refrev2 = document.getElementById('' + ctrlcom + '_hdnrefrev2').value;
    var refrev3 = document.getElementById('' + ctrlcom + '_hdnrefrev3').value;
    var refrev4 = document.getElementById('' + ctrlcom + '_hdnrefrev4').value;

    var _xmlRfrlStr = '';


    if (myMultiDatar1 != '') {
        if (myMultiDatar1[0]["Source"] > 0) {
            _xmlRfrlStr += "<PAT_REFRL_DTLS";

            if (document.getElementById('' + ctrlcom + '_chkisold').checked) { _xmlRfrlStr += " PAT_RFRL_DTL_ID=$" + 0 + "$"; _xmlRfrlStr += " PAT_RFRL_DTL_REV_NO=$" + "" + "$"; }
            else {
                if (ref1 > 0)
                { _xmlRfrlStr += " PAT_RFRL_DTL_ID=$" + ref1 + "$"; }
                else {
                    _xmlRfrlStr += " PAT_RFRL_DTL_ID=$" + 0 + "$";
                }
                if (refrev1 > 0) { _xmlRfrlStr += " PAT_RFRL_DTL_REV_NO=$" + refrev1 + "$"; }
                else {
                    _xmlRfrlStr += " PAT_RFRL_DTL_REV_NO=$" + "" + "$";
                }
            }
            _xmlRfrlStr += " UMR_NO=$" + UmrNO + "$";
            _xmlRfrlStr += " ADMN_NO=$" + '' + "$";
            if (parseInt(Pat_ID) > 0) { _xmlRfrlStr += " REFERENCE_ID=$" + Pat_ID + "$"; }
            else {
                _xmlRfrlStr += " REFERENCE_ID=$" + myMultiDatar1[0]["id"] + "$";
            }
            if (Type == 'C') { _xmlRfrlStr += " REFERENCE_TYPE_ID=$" + 2 + "$"; }
            if (Type == 'OP') { _xmlRfrlStr += " REFERENCE_TYPE_ID=$" + 7 + "$"; }
            if (Type == 'R') {
                _xmlRfrlStr += " REFERENCE_TYPE_ID=$" + 0 + "$";
            }
            if (myMultiDatar1[0]["ReferalClass"] != undefined)
                _xmlRfrlStr += " REFERAL_CLASS=$" + myMultiDatar1[0]["ReferalClass"] + "$";
            else
                _xmlRfrlStr += " REFERAL_CLASS=$" + '' + "$";
            _xmlRfrlStr += " REFERAL_SOURCE_ID=$" + myMultiDatar1[0]["Source"] + "$";
            _xmlRfrlStr += " REFERL_ID=$" + myMultiDatar1[0]["id"] + "$";
            _xmlRfrlStr += " REFERL_NAME=$" + myMultiDatar1[0]["Name"] + "$";
            _xmlRfrlStr += " RECORD_STATUS=$" + "A" + "$";
            var rfrl_cls_id = myMultiDatar1[0]["Refrl_class_id"];
            if (rfrl_cls_id == undefined || rfrl_cls_id == null || rfrl_cls_id == NaN)
            { rfrl_cls_id = '0'; }
            var cat_typ_id = myMultiDatar1[0]["Cat_type_id"];
            if (cat_typ_id == undefined || cat_typ_id == null || cat_typ_id == NaN)
            { cat_typ_id = '0'; }
            _xmlRfrlStr += " REFERAL_CAT_ID=$" + rfrl_cls_id + "$";
            _xmlRfrlStr += " REFERAL_CAT_TYPE_ID=$" + cat_typ_id + "$";
            _xmlRfrlStr += " REFERED_TO=$" + myMultiDatar1[0]["RfrlTo_Id"] + "$";
            _xmlRfrlStr += " IS_SMS=$" + myMultiDatar1[0]["sms"] + "$";
            _xmlRfrlStr += " IS_LETTER=$" + myMultiDatar1[0]["letter"] + "$";
            _xmlRfrlStr += " REMARKS=$" + ReplaceSplCharactor(myMultiDatar1[0]["Remarks"]) + "$";
            _xmlRfrlStr += " SESSION_ID=$" + document.getElementById('' + ctrlcom + '_HDNSESSIONID').value + "$";
            _xmlRfrlStr += " RECORD_SNO=$" + 1 + "$";
            _xmlRfrlStr += " REC_TYPE_ID=$" + rec_type_id + "$";
            _xmlRfrlStr += "/>";
        }
    }
    if (myMultiDatar2 != '') {
        if (myMultiDatar2[0]["Source"] > 0) {
            _xmlRfrlStr += "<PAT_REFRL_DTLS";
            if (ref2 > 0)
            { _xmlRfrlStr += " PAT_RFRL_DTL_ID=$" + ref2 + "$"; }
            else {
                _xmlRfrlStr += " PAT_RFRL_DTL_ID=$" + 0 + "$";
            }
            if (refrev2 > 0) { _xmlRfrlStr += " PAT_RFRL_DTL_REV_NO=$" + refrev2 + "$"; }
            else {
                _xmlRfrlStr += " PAT_RFRL_DTL_REV_NO=$" + "" + "$";
            }
            _xmlRfrlStr += " UMR_NO=$" + UmrNO + "$";
            _xmlRfrlStr += " ADMN_NO=$" + '' + "$";
            if (parseInt(Pat_ID) > 0) { _xmlRfrlStr += " REFERENCE_ID=$" + Pat_ID + "$"; }
            else {
                _xmlRfrlStr += " REFERENCE_ID=$" + myMultiDatar2[0]["id"] + "$";
            }
            if (Type == 'C') { _xmlRfrlStr += " REFERENCE_TYPE_ID=$" + 2 + "$"; }
            if (Type == 'OP') { _xmlRfrlStr += " REFERENCE_TYPE_ID=$" + 7 + "$"; }
            if (Type == 'R') {
                _xmlRfrlStr += " REFERENCE_TYPE_ID=$" + 0 + "$";
            }
            if (myMultiDatar2[0]["Cat_type_id"] == undefined || myMultiDatar2[0]["Cat_type_id"] == null || myMultiDatar2[0]["Cat_type_id"] == "undefined") {
                myMultiDatar2[0]["Cat_type_id"] = 0;
            }
            if (myMultiDatar2[0]["ReferalClass"] != undefined)
                _xmlRfrlStr += " REFERAL_CLASS=$" + myMultiDatar2[0]["ReferalClass"] + "$";
            else
                _xmlRfrlStr += " REFERAL_CLASS=$" + '' + "$";
            _xmlRfrlStr += " REFERAL_SOURCE_ID=$" + myMultiDatar2[0]["Source"] + "$";
            _xmlRfrlStr += " REFERL_ID=$" + myMultiDatar2[0]["id"] + "$";
            _xmlRfrlStr += " REFERL_NAME=$" + myMultiDatar2[0]["Name"] + "$";
            _xmlRfrlStr += " REFERAL_CAT_ID=$" + myMultiDatar2[0]["Refrl_class_id"] + "$";
            _xmlRfrlStr += " REFERAL_CAT_TYPE_ID=$" + myMultiDatar2[0]["Cat_type_id"] + "$";
            _xmlRfrlStr += " REFERED_TO=$" + myMultiDatar2[0]["RfrlTo_Id"] + "$";
            _xmlRfrlStr += " IS_SMS=$" + myMultiDatar2[0]["sms"] + "$";
            _xmlRfrlStr += " IS_LETTER=$" + myMultiDatar2[0]["letter"] + "$";
            _xmlRfrlStr += " REMARKS=$" + ReplaceSplCharactor(myMultiDatar2[0]["Remarks"]) + "$";
            _xmlRfrlStr += " RECORD_STATUS=$" + "A" + "$";
            _xmlRfrlStr += " SESSION_ID=$" + document.getElementById('' + ctrlcom + '_HDNSESSIONID').value + "$";
            _xmlRfrlStr += " RECORD_SNO=$" + 2 + "$";
            _xmlRfrlStr += " REC_TYPE_ID=$" + rec_type_id + "$";
            _xmlRfrlStr += "/>";
        }
    }
    if (myMultiDatar3 != '') {
        if (myMultiDatar3[0]["Source"] > 0) {
            _xmlRfrlStr += "<PAT_REFRL_DTLS";
            if (ref3 > 0)
            { _xmlRfrlStr += " PAT_RFRL_DTL_ID=$" + ref3 + "$"; }
            else {
                _xmlRfrlStr += " PAT_RFRL_DTL_ID=$" + 0 + "$";
            }
            if (refrev3 > 0) { _xmlRfrlStr += " PAT_RFRL_DTL_REV_NO=$" + refrev3 + "$"; }
            else {
                _xmlRfrlStr += " PAT_RFRL_DTL_REV_NO=$" + "" + "$";
            }
            _xmlRfrlStr += " UMR_NO=$" + UmrNO + "$";
            _xmlRfrlStr += " ADMN_NO=$" + '' + "$";
            if (parseInt(Pat_ID) > 0) { _xmlRfrlStr += " REFERENCE_ID=$" + Pat_ID + "$"; }
            else {
                _xmlRfrlStr += " REFERENCE_ID=$" + myMultiDatar3[0]["id"] + "$";
            }
            if (Type == 'C') { _xmlRfrlStr += " REFERENCE_TYPE_ID=$" + 2 + "$"; }
            if (Type == 'OP') { _xmlRfrlStr += " REFERENCE_TYPE_ID=$" + 7 + "$"; }
            if (Type == 'R') {
                _xmlRfrlStr += " REFERENCE_TYPE_ID=$" + 0 + "$";
            }
            if (myMultiDatar3[0]["Cat_type_id"] == undefined || myMultiDatar3[0]["Cat_type_id"] == null || myMultiDatar3[0]["Cat_type_id"] == "undefined") {
                myMultiDatar3[0]["Cat_type_id"] = 0;
            }
            if (myMultiDatar3[0]["ReferalClass"] != undefined)
                _xmlRfrlStr += " REFERAL_CLASS=$" + myMultiDatar3[0]["ReferalClass"] + "$";
            else
                _xmlRfrlStr += " REFERAL_CLASS=$" + '' + "$";
            _xmlRfrlStr += " REFERAL_SOURCE_ID=$" + myMultiDatar3[0]["Source"] + "$";
            _xmlRfrlStr += " REFERL_ID=$" + myMultiDatar3[0]["id"] + "$";
            _xmlRfrlStr += " REFERL_NAME=$" + myMultiDatar3[0]["Name"] + "$";
            _xmlRfrlStr += " RECORD_STATUS=$" + "A" + "$";
            _xmlRfrlStr += " REFERAL_CAT_ID=$" + myMultiDatar3[0]["Refrl_class_id"] + "$";
            _xmlRfrlStr += " REFERAL_CAT_TYPE_ID=$" + myMultiDatar3[0]["Cat_type_id"] + "$";
            _xmlRfrlStr += " REFERED_TO=$" + myMultiDatar3[0]["RfrlTo_Id"] + "$";
            _xmlRfrlStr += " IS_SMS=$" + myMultiDatar3[0]["sms"] + "$";
            _xmlRfrlStr += " IS_LETTER=$" + myMultiDatar3[0]["letter"] + "$";
            _xmlRfrlStr += " REMARKS=$" + ReplaceSplCharactor(myMultiDatar3[0]["Remarks"]) + "$";
            _xmlRfrlStr += " SESSION_ID=$" + document.getElementById('' + ctrlcom + '_HDNSESSIONID').value + "$";
            _xmlRfrlStr += " RECORD_SNO=$" + 3 + "$";
            _xmlRfrlStr += " REC_TYPE_ID=$" + rec_type_id + "$";
            _xmlRfrlStr += "/>";
        }
    }
    if (myMultiDatar4 != '') {
        if (myMultiDatar4[0]["Source"] > 0) {
            _xmlRfrlStr += "<PAT_REFRL_DTLS";
            if (ref4 > 0)
            { _xmlRfrlStr += " PAT_RFRL_DTL_ID=$" + ref4 + "$"; }
            else {
                _xmlRfrlStr += " PAT_RFRL_DTL_ID=$" + 0 + "$";
            }
            if (refrev4 > 0) { _xmlRfrlStr += " PAT_RFRL_DTL_REV_NO=$" + refrev4 + "$"; }
            else {
                _xmlRfrlStr += " PAT_RFRL_DTL_REV_NO=$" + "" + "$";
            }
            _xmlRfrlStr += " UMR_NO=$" + UmrNO + "$";
            _xmlRfrlStr += " ADMN_NO=$" + '' + "$";
            if (parseInt(Pat_ID) > 0) { _xmlRfrlStr += " REFERENCE_ID=$" + Pat_ID + "$"; }
            else {
                _xmlRfrlStr += " REFERENCE_ID=$" + myMultiDatar4[0]["id"] + "$";
            }
            if (Type == 'C') { _xmlRfrlStr += " REFERENCE_TYPE_ID=$" + 2 + "$"; }
            if (Type == 'OP') { _xmlRfrlStr += " REFERENCE_TYPE_ID=$" + 7 + "$"; }
            if (Type == 'R') {
                _xmlRfrlStr += " REFERENCE_TYPE_ID=$" + 0 + "$";
            }
            if (myMultiDatar4[0]["Cat_type_id"] == undefined || myMultiDatar4[0]["Cat_type_id"] == null || myMultiDatar4[0]["Cat_type_id"] == "undefined") {
                myMultiDatar4[0]["Cat_type_id"] = 0;
            }
            if (myMultiDatar4[0]["ReferalClass"] != undefined)
                _xmlRfrlStr += " REFERAL_CLASS=$" + myMultiDatar4[0]["ReferalClass"] + "$";
            else
                _xmlRfrlStr += " REFERAL_CLASS=$" + '' + "$";
            _xmlRfrlStr += " REFERAL_SOURCE_ID=$" + myMultiDatar4[0]["Source"] + "$";
            _xmlRfrlStr += " REFERL_ID=$" + myMultiDatar4[0]["id"] + "$";
            _xmlRfrlStr += " REFERL_NAME=$" + myMultiDatar4[0]["Name"] + "$";
            _xmlRfrlStr += " RECORD_STATUS=$" + "A" + "$";
            _xmlRfrlStr += " REFERAL_CAT_ID=$" + myMultiDatar4[0]["Refrl_class_id"] + "$";
            _xmlRfrlStr += " REFERAL_CAT_TYPE_ID=$" + myMultiDatar4[0]["Cat_type_id"] + "$";
            _xmlRfrlStr += " REFERED_TO=$" + myMultiDatar4[0]["RfrlTo_Id"] + "$";
            _xmlRfrlStr += " IS_SMS=$" + myMultiDatar4[0]["sms"] + "$";
            _xmlRfrlStr += " IS_LETTER=$" + ReplaceSplCharactor(myMultiDatar4[0]["Remarks"]) + "$";
            _xmlRfrlStr += " SESSION_ID=$" + document.getElementById('' + ctrlcom + '_HDNSESSIONID').value + "$";
            _xmlRfrlStr += " RECORD_SNO=$" + 4 + "$";
            _xmlRfrlStr += " REC_TYPE_ID=$" + rec_type_id + "$";
            _xmlRfrlStr += "/>";
        }
    }

    return _xmlRfrlStr;
}

function CheckCreditLimits() {

    var allow_user_wise_cons = $('#' + ctrlcom + '_ReceiptControl2_hdnUserCrdLmt').val();
    var is_active = $('#' + ctrlcom + '_ReceiptControl2_hdnis_active').val();
    var OP_con_pcnt = $('#' + ctrlcom + '_ReceiptControl2_hdnopd_con').val();
    var op_due_pcnt = $('#' + ctrlcom + '_ReceiptControl2_hdnopd_due').val();
    var bill_op_con = 0;
    var bill_op_due = 0;
    if (lblquick.className == 'select') { /* Quick Mode */
        var due_auth_name = $('#' + ctrlcom + '_ReceiptControl2_Search3_txtSearchControl').val();
        var Due_Auth_ID = $('#' + ctrlcom + '_ReceiptControl2_Search3__hiddenID').val();
        if (Due_Auth_ID > 0) {
            var Pat_BIll = $('#' + ctrlcom + '_ReceiptControl2_txtpatgross').val();
            var Pat_Due = $('#' + ctrlcom + '_ReceiptControl2_txtpatdue').val();
            bill_op_due = (parseFloat(100) * parseFloat(Pat_Due)) / parseFloat(Pat_BIll);
        }
    }
    else if (lbladvanced.className == 'select') { /* Advance Mode */
        if (document.getElementById('' + ctrlcom + '_ReceiptControl2_chkismultiple').checked == true) /* Multiple Discount Mode */
        {
            var gridMulTiDim = document.getElementById('' + ctrlcom + '_ReceiptControl2_gvMultipleConcession');
            var gridMulTiDimLength = gridMulTiDim.rows.length;
            $("table[id*=gvMultipleConcession] tr:has(td)").each(function (e) {
                bill_op_con = 0;
                for (var i = 0; i < gridMulTiDimLength; i++) {
                    var disc_id = $('[id$=ReceiptControl2_gvMultipleConcession] tr').filter(':eq(' + i + ')').find('[id*=ddlMultiDiscounttype]').val();
                    var Disc = $('[id$=ReceiptControl2_gvMultipleConcession] tr').filter(':eq(' + i + ')').find('[id*=txtPersentage]').val();
                    if (parseFloat(Disc) > 0) { } else { Disc = 0; }
                    if (disc_id == 1 || disc_id == 3 || disc_id == 4) {
                        bill_op_con = parseFloat(bill_op_con) + parseFloat(Disc);
                    }
                }
            });
        }
        else if (document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlDiscountType').value == '1') {  /* Cash Discount Discount Mode */
            bill_op_con = $('#' + ctrlcom + '_ReceiptControl2_txtpatdis').val();
        }
        else /* No Discount */
        { }
        var A_Net_Amt = $('#' + ctrlcom + '_ReceiptControl2_txtpatNet').val();
        var A_Bill_Amt = $('#' + ctrlcom + '_ReceiptControl2_txtpatgross').val();
        var A_Due_Amt = $('#' + ctrlcom + '_ReceiptControl2_txtpatdue').val();
        if (parseFloat(A_Net_Amt) > 0) { } else { A_Net_Amt = 0; }
        if (parseFloat(A_Due_Amt) > 0) { } else { A_Due_Amt = 0; }
        if (parseFloat(A_Bill_Amt) > 0) { } else { A_Bill_Amt = 0; }
        bill_op_due = (parseFloat(100) * parseFloat(A_Due_Amt)) / parseFloat(A_Bill_Amt);
    }
    var credit_limit_count = 0;
    if (allow_user_wise_cons.trim() == 'True') /* User Wise Concession Checking */
    {
        if (is_active == 'Y') { /* User Wise Concession Is Active  */
            if (parseFloat(bill_op_con) == parseFloat(OP_con_pcnt)) /* concession checking */
            {
            }
            else if (parseFloat(bill_op_con) > parseFloat(OP_con_pcnt)) {
                credit_limit_count = '150';
                $(".stoast").toastText("warning", "For this user Concession Limits Are Difined Only Upto '" + OP_con_pcnt + "' % So, Please Contact Administrator!", 5, 3);
                return credit_limit_count;
            }
            else if (parseFloat(bill_op_con) < parseFloat(OP_con_pcnt))
            { }
            if (parseFloat(bill_op_due) == parseFloat(op_due_pcnt)) /* due checking */
            { }
            else if (parseFloat(bill_op_due) > parseFloat(op_due_pcnt)) {
                credit_limit_count = '150';
                $(".stoast").toastText("warning", "For this user Due Limits Are Difined Only Upto '" + op_due_pcnt + "' % So, Please Contact Administrator ", 5, 3);
                return credit_limit_count;
            }
            else if (parseFloat(bill_op_due) < parseFloat(op_due_pcnt))
            { }
        }
        else {  /* User Wise Concession INActive */
            credit_limit_count = 150;
            $(".stoast").toastText("warning", "Concession And Credit Limits Are Not In Active For THis User,So Please Contact Administrator ", 5, 3);
            return credit_limit_count;
        }

    }
    else /* User Wise Concession no needed */
    {
    }
    return credit_limit_count;
}

function OPDTransactionSave() {

    var rec_type_id = 0;
    if (document.getElementById('ctl00_hdnIsMedClg').value == "TRUE") {
        rec_type_id = $('input[id*=radiousertran]:checked').val()
        if (rec_type_id == 0 || rec_type_id == null || rec_type_id == undefined) { rec_type_id = 1; }
    }
    else { rec_type_id = 1; }
    var UmrNO = '', _reg_id = 0;
    if (document.getElementById('' + ctrlcom + '_chk_old').checked == true) {
        UmrNO = document.getElementById('' + ctrlcom + '_umrPatientDetails_Umrlookup_txtSearchControl').value;
        _reg_id = document.getElementById('' + ctrlcom + '_umrPatientDetails_hdnRegID').value;
        if (_reg_id == undefined || _reg_id == null || _reg_id == '') { _reg_id = "0"; }
    }
    else if (document.getElementById('' + ctrlcom + '_chkisold').checked == true) {
        UmrNO = UmrNO = document.getElementById('' + ctrlcom + '_ucUMRno_txtSearchControl').value;
        _reg_id = document.getElementById('' + ctrlcom + '_hdnRegID').value;
        if (_reg_id == undefined || _reg_id == null || _reg_id == '') { _reg_id = "0"; }
    }
    else {
        UmrNO = document.getElementById('' + ctrlcom + '_txtumrno').value;
    }
    var CONCESSION = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatgrossamt').value;
    var COMPANY_CONCESSION_AMOUNT = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpartygrossamt').value;
    var COMPANY_AMOUNT = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtparygross').value;
    var BILL_AMOUNT = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtgrosstotal').value;
    var NET_AMOUNT = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtTotalNet').value;
    var PAID_AMOUNT = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtTotalReciptAmt').value;
    var DUE_AMOUNT = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtTotalDue').value;
    var TOTAL_DISCOUNT = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtgrossamttotal').value;
    var CMP_OUTSTANDING_DUE = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtTotalDue').value;
    var CMP_NET_AMT = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtTotalNet').value;
    var CMP_PAID_AMT = 0; /* document.getElementById('' + ctrlcom + '_ReceiptControl2_txtTotalReciptAmt').value;*/
    //var UmrNO = document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnTranUMRNO').value;
    var AdmnNo = document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnTRANADMNNO').value;
    var TransactionNo = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtReceoptNoAdvanced').value;
    var TransactionDt = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtReceiptDtAdvanced').value;
    var Remarks = '';
    if (lblquick.className == "select") {
        Remarks = $('#' + ctrlcom + '_ReceiptControl2_txtquickremarks').val();
        Remarks = Remarks == undefined || null ? "" : Remarks;
        Remarks = ReplaceSplCharactor(Remarks);
        PAYMENT_TYPE_ID = 2;
    }
    else {
        Remarks = $('#' + ctrlcom + '_ReceiptControl2_txtRemarks').val();
        Remarks = Remarks == undefined || null ? "" : Remarks;
        Remarks = ReplaceSplCharactor(Remarks);
        PAYMENT_TYPE_ID = 1;
    }

    var Emp_Id = '0';
    var regpaidamt = 0;

    var regfee = document.getElementById('' + ctrlcom + '_txtregfee').value;
    var TotalPayAmt = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtTotalReciptAmt').value;
    if (TotalPayAmt == undefined || TotalPayAmt == null || TotalPayAmt == '' || isNaN(TotalPayAmt)) { TotalPayAmt = "0"; }
    var totlblchange = 0;
    $("table[id$=gvReceiptDetails] tr:has(td)").each(function (e) {
        var lblchange = $(this).closest('tr').find("[id*=lblchange]").text();
        if (lblchange == undefined || lblchange == '' || lblchange == null) { lblchange = 0; }
        totlblchange = parseFloat(totlblchange) + parseFloat(lblchange);
    });


    var _curr_id = document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnstpcurrid').value;
    var _Xml_Recpt_String = "<root>";
    _Xml_Recpt_String += "<FO_RECPAY ";
    _Xml_Recpt_String += " UMR_NO=$" + UmrNO + "$"; ;
    _Xml_Recpt_String += " ADMN_NO=$" + AdmnNo + "$";
    _Xml_Recpt_String += " AMOUNT=$" + Math.round(PAID_AMOUNT) + "$";
    _Xml_Recpt_String += " EMPLOYEE_ID=$" + Emp_Id + "$";
    _Xml_Recpt_String += " TRANSACTION_ID=$" + "0" + "$";
    _Xml_Recpt_String += " TRANSACTION_NO=$" + TransactionNo + "$";
    _Xml_Recpt_String += " TRANSACTION_DT=$" + TransactionDt + "$";
    _Xml_Recpt_String += " TRANSACTION_TYPE=$" + "R" + "$";
    _Xml_Recpt_String += " APPROVE_BY=$" + 0 + "$";
    _Xml_Recpt_String += " APPROVE_DT=$" + '' + "$";
    _Xml_Recpt_String += " REMARKS=$" + Remarks + "$";
    _Xml_Recpt_String += " CURR_ID=$" + _curr_id + "$";
    _Xml_Recpt_String += " PAYMENT_TYPE_ID=$" + PAYMENT_TYPE_ID + "$";
    _Xml_Recpt_String += " SESSION_ID=$" + document.getElementById('' + ctrlcom + '_HDNSESSIONID').value + "$";
    _Xml_Recpt_String += " TRN_SOURCE_ID=$" + 0 + "$";
    _Xml_Recpt_String += " REC_TYPE_ID=$" + rec_type_id + "$";
    _Xml_Recpt_String += "/>";

    _Xml_Recpt_String += _recpayxml;

    var CashAmt = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtcashAmt').value;
    var CardAmt = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtCardAmt').value;
    CashAmt = CashAmt == '' ? 0 : CashAmt;
    CardAmt = CardAmt == '' ? 0 : CardAmt;
    var TotalAmt = Math.round(CashAmt) + Math.round(CardAmt);
    var CardNO = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtcardNoCmp').value;
    var CradTypeId = document.getElementById('' + ctrlcom + '_ReceiptControl2_ddcardType').value;
    var BankName = $('[id*=ddbankName] option:selected').text();
    var CardExperyDt = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtcardExpiredt').value;
    if (CardExperyDt == undefined || CardExperyDt == '' || CardExperyDt == null || CardExperyDt == 0) { CardExperyDt = ''; }
    var paymentmodeid = document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlcrdtype').value;
    if (paymentmodeid == '' || paymentmodeid == '0' || paymentmodeid == null || paymentmodeid == undefined) { paymentmodeid = "4"; }
    var _curr_id = document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnstpcurrid').value;
    var changinamt = document.getElementById('' + ctrlcom + '_ReceiptControl2_lblqickchangeamt').innerHTML;
    if (changinamt == '' || changinamt == undefined || changinamt == null) { changinamt = 0; }
    var QckCardHldrName = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtQckCardHldrName').value;
    if (QckCardHldrName == undefined || QckCardHldrName == 'undefined' || QckCardHldrName == null) { QckCardHldrName = ''; }
    var hdnbankid = document.getElementById('' + ctrlcom + '_ReceiptControl2_ddbankName').value;
    var gridhdnplutusreferenceval = document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnPlutusTransactionReferenceID').value;
    gridhdnplutusreferenceval = gridhdnplutusreferenceval == '' || gridhdnplutusreferenceval == 'undefined' || gridhdnplutusreferenceval == undefined ? 0 : gridhdnplutusreferenceval;

    if (TotalAmt > 0) {
        /*Quick Mode*/
        var auth_cd = $('#' + ctrlcom + '_ReceiptControl2_txtcardAuther').val();
        if (auth_cd == undefined || auth_cd == null) { auth_cd = ''; }

        if (CashAmt == undefined || CashAmt == null || CashAmt == '' || isNaN(CashAmt)) { CashAmt = "0"; }
        if (parseFloat(CashAmt) > 0) {

            if (CashAmt == null || CashAmt == undefined || CashAmt == '' || isNaN(CashAmt)) { CashAmt = "0"; }
            if (changinamt == null || changinamt == undefined || changinamt == '' || isNaN(changinamt)) { changinamt = "0"; }
            var CashAmt = parseFloat(CashAmt) - parseFloat(changinamt);
            var enteredamt = CashAmt;
            _Xml_Recpt_String += FoRecpayDetXml(1, CashAmt, Remarks, _curr_id, 1, enteredamt, enteredamt, changinamt, 1, rec_type_id, UmrNO, CardNO, hdnbankid, CardExperyDt, '', '', QckCardHldrName, auth_cd, BankName, '', CradTypeId, 0, 0, gridhdnplutusreferenceval);
        }
        //  var amount = parseFloat(CashAmt) > 0 ? parseFloat(CashAmt) - parseFloat(changinamt) : CardAmt;
        //var enteredamt = parseFloat(CashAmt) > 0 ? CashAmt : CardAmt;
        /*        if (CashAmt > 0) {
        _Xml_Recpt_String += "<FO_RECPAY_DET ";
        _Xml_Recpt_String += " TRANSACTION_ID=$" + 0 + "$";
        _Xml_Recpt_String += " TRANSACTION_DET_ID=$" + 0 + "$";
        _Xml_Recpt_String += " TRANSACTION_NO=$" + 0 + "$";
        _Xml_Recpt_String += " TRANSACTION_DT=$" + '' + "$";
        _Xml_Recpt_String += " TRANSACTION_TYPE=$" + '' + "$";
        _Xml_Recpt_String += " AMOUNT=$" + amount + "$";
        _Xml_Recpt_String += " TENDERED_AMOUNT=$" + CashAmt + "$";
        _Xml_Recpt_String += " ENTERED_AMOUNT=$" + CashAmt + "$";
        _Xml_Recpt_String += " CHANGE_AMOUNT=$" + changinamt + "$";
        _Xml_Recpt_String += " REMARKS=$" + Remarks + "$";
        _Xml_Recpt_String += " EMPLOYEE_ID=$" + 0 + "$";
        _Xml_Recpt_String += " REFERENCE_ID=$" + 0 + "$";
        _Xml_Recpt_String += " PAYMENT_MODE_ID=$" + 1 + "$";
        _Xml_Recpt_String += " CURR_ID=$" + _curr_id + "$";
        _Xml_Recpt_String += " EX_RATE=$" + 1 + "$";
        _Xml_Recpt_String += " TOTAL_PAID_AMT=$" + TotalPayAmt + "$";
        _Xml_Recpt_String += " SESSION_ID=$" + document.getElementById('' + ctrlcom + '_HDNSESSIONID').value + "$";
        _Xml_Recpt_String += " CC_AUTH_CD=$" + "" + "$";
        _Xml_Recpt_String += " DC_AUTH_CD=$" + "" + "$";
        _Xml_Recpt_String += " REC_TYPE_ID=$" + rec_type_id + "$";
        _Xml_Recpt_String += "/>";
        }

        if (CardAmt > 0) {
        if (paymentmodeid == '4') { // Credit Card 
        _Xml_Recpt_String += "<FO_RECPAY_DET ";
        _Xml_Recpt_String += " TRANSACTION_ID=$" + 0 + "$";
        _Xml_Recpt_String += " TRANSACTION_DET_ID=$" + 0 + "$";
        _Xml_Recpt_String += " UMR_NO=$" + UmrNO + "$";
        _Xml_Recpt_String += " AMOUNT=$" + CardAmt + "$";
        _Xml_Recpt_String += " REMARKS=$" + Remarks + "$";
        _Xml_Recpt_String += " REFERENCE_ID=$" + 0 + "$";
        _Xml_Recpt_String += " PAYMENT_MODE_ID=$" + paymentmodeid + "$";
        _Xml_Recpt_String += " CC_CARD_NO=$" + CardNO + "$";
        _Xml_Recpt_String += " CC_APPROVAL_NO=$" + '0' + "$";
        _Xml_Recpt_String += " CC_CARD_HOLDER_NAME=$" + QckCardHldrName + "$";
        _Xml_Recpt_String += " CC_EDC_MACHINE=$" + '' + "$";
        _Xml_Recpt_String += " CC_CARD_TYPE_ID=$" + CradTypeId + "$";
        _Xml_Recpt_String += " CC_ISSUE_BANK_NAME=$" + BankName + "$";
        _Xml_Recpt_String += " CC_VALID_TO_DT=$" + CardExperyDt + "$";
        _Xml_Recpt_String += " CC_CARD_HOLDER_ADDRESS=$" + 0 + "$";
        _Xml_Recpt_String += " TOTAL_PAID_AMT=$" + TotalPayAmt + "$";
        _Xml_Recpt_String += " SESSION_ID=$" + document.getElementById('' + ctrlcom + '_HDNSESSIONID').value + "$";
        _Xml_Recpt_String += " CURR_ID=$" + _curr_id + "$";
        _Xml_Recpt_String += " EX_RATE=$" + 1 + "$";
        _Xml_Recpt_String += " CC_AUTH_CD=$" + auth_cd + "$";
        _Xml_Recpt_String += " DC_AUTH_CD=$" + "" + "$";
        _Xml_Recpt_String += " TENDERED_AMOUNT=$" + CardAmt + "$";
        _Xml_Recpt_String += " ENTERED_AMOUNT=$" + CardAmt + "$";
        _Xml_Recpt_String += " CHANGE_AMOUNT=$" + changinamt + "$";
        _Xml_Recpt_String += " REC_TYPE_ID=$" + rec_type_id + "$";
        _Xml_Recpt_String += "/>";
        }
        else if (paymentmodeid == '5') { // Debit Card 
        _Xml_Recpt_String += "<FO_RECPAY_DET ";
        _Xml_Recpt_String += " TRANSACTION_ID=$" + 0 + "$";
        _Xml_Recpt_String += " TRANSACTION_DET_ID=$" + 0 + "$";
        _Xml_Recpt_String += " UMR_NO=$" + UmrNO + "$";
        _Xml_Recpt_String += " AMOUNT=$" + CardAmt + "$";
        _Xml_Recpt_String += " REMARKS=$" + Remarks + "$";
        _Xml_Recpt_String += " REFERENCE_ID=$" + 0 + "$";
        _Xml_Recpt_String += " PAYMENT_MODE_ID=$" + paymentmodeid + "$";
        _Xml_Recpt_String += " DC_CARD_NO=$" + CardNO + "$";
        _Xml_Recpt_String += " DC_APPROVAL_NO=$" + '0' + "$";
        _Xml_Recpt_String += " DC_CARD_HOLDER_NAME=$" + QckCardHldrName + "$";
        _Xml_Recpt_String += " DC_EDC_MACHINE=$" + '' + "$";
        _Xml_Recpt_String += " DC_CARD_TYPE_ID=$" + CradTypeId + "$";
        _Xml_Recpt_String += " DC_CARD_TYPE_REV_NO=$" + 1 + "$";
        _Xml_Recpt_String += " DC_ISSUE_BANK_NAME=$" + BankName + "$";
        _Xml_Recpt_String += " DC_VALID_TO_DT=$" + CardExperyDt + "$";
        _Xml_Recpt_String += " DC_CARD_HOLDER_ADDRESS=$" + 0 + "$";
        _Xml_Recpt_String += " TOTAL_PAID_AMT=$" + TotalPayAmt + "$";
        _Xml_Recpt_String += " SESSION_ID=$" + document.getElementById('' + ctrlcom + '_HDNSESSIONID').value + "$";
        _Xml_Recpt_String += " CURR_ID=$" + _curr_id + "$";
        _Xml_Recpt_String += " EX_RATE=$" + 1 + "$";
        _Xml_Recpt_String += " CC_AUTH_CD=$" + "" + "$";
        _Xml_Recpt_String += " DC_AUTH_CD=$" + auth_cd + "$";
        _Xml_Recpt_String += " TENDERED_AMOUNT=$" + CardAmt + "$";
        _Xml_Recpt_String += " ENTERED_AMOUNT=$" + CardAmt + "$";
        _Xml_Recpt_String += " CHANGE_AMOUNT=$" + changinamt + "$";
        _Xml_Recpt_String += " REC_TYPE_ID=$" + rec_type_id + "$";
        _Xml_Recpt_String += "/>";
        }
        }*/
        if (CardAmt > 0) {
            var enteredamt = CardAmt;
            _Xml_Recpt_String += FoRecpayDetXml(paymentmodeid, CardAmt, Remarks, _curr_id, 1, enteredamt, enteredamt, changinamt, 1, rec_type_id, UmrNO, CardNO, hdnbankid, CardExperyDt, '', '', QckCardHldrName, auth_cd, BankName, '', CradTypeId, 0, 0, gridhdnplutusreferenceval);
        }
    }
    else {
        /*Advanced Mode*/
        /*   var countrep = 0;
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
        var AUTH_CD = $(this).closest('tr').find("[id*=lblauthcode]").text();
        var cheque_dt = $(this).closest('tr').find("[id*=lblchequedt]").text();
        var cheque_reql_dt = $(this).closest('tr').find("[id*=lblcqreldt]").text();
        var chq_issue_name = $(this).closest('tr').find("[id*=lblcqissuername]").text();
        if (cheque_dt == undefined || cheque_dt == null) { cheque_dt = ''; }
        if (cheque_reql_dt == undefined || cheque_reql_dt == null) { cheque_reql_dt = ''; }
        if (chq_issue_name == undefined || chq_issue_name == null) { chq_issue_name = ''; }
        if (lblAmount == undefined || lblAmount == null || lblAmount == '' || isNaN(lblAmount)) { lblAmount = "0"; }
        if (lblcurrname == undefined || lblcurrname == null || lblcurrname == '' || isNaN(lblcurrname)) { lblcurrname = "0"; }
        if (lblexchrate == undefined || lblexchrate == null || lblexchrate == '' || isNaN(lblexchrate)) { lblexchrate = "0"; }
        if (paymentmodeid == undefined || paymentmodeid == null || paymentmodeid == '' || isNaN(paymentmodeid)) { paymentmodeid = "0"; }
        if (lblconvertedamt == undefined || lblconvertedamt == null || lblconvertedamt == '' || isNaN(lblconvertedamt)) { lblconvertedamt = "0"; }
        if (lblbankname == undefined || lblbankname == null || lblbankname == '') { lblbankname = ''; }
        if (lblcardno == undefined || lblcardno == null || lblcardno == '' || isNaN(lblcardno)) { lblcardno = "0"; }
        if (lblauthcode == undefined || lblauthcode == null || lblauthcode == '' || isNaN(lblauthcode)) { lblauthcode = "0"; }
        if (lblcardexpdt == undefined || lblcardexpdt == null || lblcardexpdt == '') { lblcardexpdt = ''; }
        if (lbltendcash == undefined || lbltendcash == null || lbltendcash == '' || isNaN(lbltendcash)) { lbltendcash = "0"; }
        if (lblchange == undefined || lblchange == null || lblchange == '' || isNaN(lblchange)) { lblchange = "0"; }
        if (lblcardtype == undefined || lblcardtype == null || lblcardtype == '' || isNaN(lblcardtype)) { lblcardtype = "0"; }
        if (hdncardtypeId == undefined || hdncardtypeId == null || hdncardtypeId == '' || isNaN(hdncardtypeId)) { hdncardtypeId = "0"; }
        if (hdncurrId == undefined || hdncurrId == null || hdncurrId == '' || isNaN(hdncurrId)) { hdncurrId = "0"; }
        if (AUTH_CD == undefined || AUTH_CD == null || AUTH_CD == NaN) { AUTH_CD = ''; }


        var receiptChange = parseFloat(lblchange) / parseFloat(lblexchrate);
        if (receiptChange == undefined || receiptChange == null || receiptChange == '' || isNaN(receiptChange)) { receiptChange = "0"; }
        receiptChange = setProperDecimals(receiptChange);
        lblAmount = parseFloat(lblconvertedamt) - parseFloat(receiptChange);

        if (paymentmodeid == "1") {
        countrep++;
        _Xml_Recpt_String += "<FO_RECPAY_DET ";
        _Xml_Recpt_String += " TRANSACTION_DET_ID=$" + "0" + "$";
        _Xml_Recpt_String += " PAYMENT_MODE_ID=$" + paymentmodeid + "$";
        _Xml_Recpt_String += " AMOUNT=$" + lblAmount + "$";
        _Xml_Recpt_String += " REMARKS=$" + Remarks + "$";
        _Xml_Recpt_String += " SESSION_ID=$" + document.getElementById('' + ctrlcom + '_HDNSESSIONID').value + "$";
        _Xml_Recpt_String += " TOTAL_PAID_AMT=$" + TotalPayAmt + "$";
        _Xml_Recpt_String += " CURR_ID=$" + hdncurrId + "$";
        _Xml_Recpt_String += " EX_RATE=$" + lblexchrate + "$";
        _Xml_Recpt_String += " ENTERED_AMOUNT=$" + lblconvertedamt + "$";
        _Xml_Recpt_String += " TENDERED_AMOUNT=$" + lbltendcash + "$";
        _Xml_Recpt_String += " CHANGE_AMOUNT=$" + lblchange + "$";
        _Xml_Recpt_String += " CC_AUTH_CD=$" + "" + "$";
        _Xml_Recpt_String += " DC_AUTH_CD=$" + "" + "$";
        _Xml_Recpt_String += " REC_TYPE_ID=$" + rec_type_id + "$";
        _Xml_Recpt_String += " />";
        }
        //Cheque
        if (paymentmodeid == "2") {
        countrep++;
        _Xml_Recpt_String += "<FO_RECPAY_DET ";
        _Xml_Recpt_String += " TRANSACTION_DET_ID=$" + "0" + "$";
        _Xml_Recpt_String += " PAYMENT_MODE_ID=$" + paymentmodeid + "$";
        _Xml_Recpt_String += " AMOUNT=$" + lblconvertedamt + "$";
        _Xml_Recpt_String += " CQ_CHEQUE_NO=$" + lblcardno + "$";
        _Xml_Recpt_String += " CC_CARD_NO=$" + lblcardno + "$";
        _Xml_Recpt_String += " CQ_BANK_ID=$" + hdnbankid + "$";
        _Xml_Recpt_String += " CQ_BANK_REV_NO=$" + '1' + "$";
        _Xml_Recpt_String += " CQ_BRANCH_ID=$" + 0 + "$";
        _Xml_Recpt_String += " CQ_BRANCH_REV_NO=$" + 1 + "$";
        _Xml_Recpt_String += " CQ_VALID_TO_DT=$" + lblcardexpdt + "$";
        _Xml_Recpt_String += " REMARKS=$" + Remarks + "$";
        _Xml_Recpt_String += " SESSION_ID=$" + document.getElementById('' + ctrlcom + '_HDNSESSIONID').value + "$";
        _Xml_Recpt_String += " TOTAL_PAID_AMT=$" + TotalPayAmt + "$";
        _Xml_Recpt_String += " CURR_ID=$" + hdncurrId + "$";
        _Xml_Recpt_String += " EX_RATE=$" + lblexchrate + "$";
        _Xml_Recpt_String += " ENTERED_AMOUNT=$" + lblAmount + "$";
        _Xml_Recpt_String += " TENDERED_AMOUNT=$" + lbltendcash + "$";
        _Xml_Recpt_String += " CHANGE_AMOUNT=$" + lblchange + "$";
        _Xml_Recpt_String += " CC_AUTH_CD=$" + AUTH_CD + "$";
        _Xml_Recpt_String += " DC_AUTH_CD=$" + "" + "$";
        _Xml_Recpt_String += " CQ_DATE=$" + cheque_dt + "$";
        _Xml_Recpt_String += " CQ_CHEQUE_REALIZATION_DT=$" + cheque_reql_dt + "$";
        _Xml_Recpt_String += " CQ_ISSUER_NAME=$" + chq_issue_name + "$";
        _Xml_Recpt_String += " REC_TYPE_ID=$" + rec_type_id + "$";
        _Xml_Recpt_String += "  />"
        }
        //DD
        if (paymentmodeid == "3") {
        countrep++;
        _Xml_Recpt_String += "<FO_RECPAY_DET ";
        _Xml_Recpt_String += " TRANSACTION_DET_ID=$" + 0 + "$";
        _Xml_Recpt_String += " PAYMENT_MODE_ID=$" + paymentmodeid + "$";
        _Xml_Recpt_String += " AMOUNT=$" + lblconvertedamt + "$";
        _Xml_Recpt_String += " DD_NO=$" + lblcardno + "$";
        _Xml_Recpt_String += " CC_CARD_NO=$" + lblcardno + "$";
        _Xml_Recpt_String += " DD_ISSUE_BANK_ID=$" + hdnbankid + "$";
        _Xml_Recpt_String += " CC_ISSUE_BANK_NAME=$" + lblbankname + "$";
        _Xml_Recpt_String += " DD_ISSUE_BANK_REV_NO=$" + lblAmount + "$";
        _Xml_Recpt_String += " DD_ISSUE_BRANCH_ID=$" + 0 + "$";
        _Xml_Recpt_String += " DD_ISSUE_BRANCH_REV_NO=$" + 1 + "$";
        _Xml_Recpt_String += " DD_VALID_TO_DT=$" + lblcardexpdt + "$";
        _Xml_Recpt_String += " CC_VALID_TO_DT=$" + lblcardexpdt + "$";
        _Xml_Recpt_String += " DD_SERVICE_BANK_ID=$" + 0 + "$";
        _Xml_Recpt_String += " DD_SERVICE_BRANCH_ID=$" + 0 + "$";
        _Xml_Recpt_String += " DD_SERVICE_BANK_REV_NO=$" + 1 + "$";
        _Xml_Recpt_String += " DD_SERVICE_BRANCH_REV_NO=$" + 1 + "$";
        _Xml_Recpt_String += " REMARKS=$" + Remarks + "$";
        _Xml_Recpt_String += " SESSION_ID=$" + document.getElementById('' + ctrlcom + '_HDNSESSIONID').value + "$";
        _Xml_Recpt_String += " TOTAL_PAID_AMT=$" + TotalPayAmt + "$";
        _Xml_Recpt_String += " CURR_ID=$" + hdncurrId + "$";
        _Xml_Recpt_String += " EX_RATE=$" + lblexchrate + "$";
        _Xml_Recpt_String += " ENTERED_AMOUNT=$" + lblAmount + "$";
        _Xml_Recpt_String += " TENDERED_AMOUNT=$" + lbltendcash + "$";
        _Xml_Recpt_String += " CHANGE_AMOUNT=$" + lblchange + "$";
        _Xml_Recpt_String += " CC_AUTH_CD=$" + AUTH_CD + "$";
        _Xml_Recpt_String += " DC_AUTH_CD=$" + "" + "$";
        _Xml_Recpt_String += " CC_CARD_TYPE_ID=$" + hdncardtypeId + "$";
        _Xml_Recpt_String += " REC_TYPE_ID=$" + rec_type_id + "$";
        _Xml_Recpt_String += "  />"
        }
        //Credit Card
        if (paymentmodeid == "4") {
        countrep++;
        _Xml_Recpt_String += "<FO_RECPAY_DET ";
        _Xml_Recpt_String += " TRANSACTION_DET_ID=$" + 0 + "$";
        _Xml_Recpt_String += " PAYMENT_MODE_ID=$" + paymentmodeid + "$";
        _Xml_Recpt_String += " AMOUNT=$" + lblconvertedamt + "$";
        _Xml_Recpt_String += " CC_CARD_NO=$" + lblcardno + "$";
        _Xml_Recpt_String += " CC_APPROVAL_NO=$" + '0' + "$";
        _Xml_Recpt_String += " CC_CARD_HOLDER_NAME=$" + chq_issue_name + "$";
        _Xml_Recpt_String += " CC_EDC_MACHINE=$" + '' + "$";
        _Xml_Recpt_String += " CC_CARD_TYPE_ID=$" + hdncardtypeId + "$";
        _Xml_Recpt_String += " CC_CARD_TYPE_REV_NO=$" + 1 + "$";
        _Xml_Recpt_String += " CC_ISSUE_BANK_NAME=$" + lblbankname + "$";
        _Xml_Recpt_String += " CC_VALID_TO_DT=$" + lblcardexpdt + "$";
        _Xml_Recpt_String += " CC_CARD_HOLDER_ADDRESS=$" + 0 + "$";
        _Xml_Recpt_String += " REMARKS=$" + Remarks + "$";
        _Xml_Recpt_String += " SESSION_ID=$" + document.getElementById('' + ctrlcom + '_HDNSESSIONID').value + "$";
        _Xml_Recpt_String += " TOTAL_PAID_AMT=$" + TotalPayAmt + "$";
        _Xml_Recpt_String += " CURR_ID=$" + hdncurrId + "$";
        _Xml_Recpt_String += " EX_RATE=$" + lblexchrate + "$";
        _Xml_Recpt_String += " ENTERED_AMOUNT=$" + lblAmount + "$";
        _Xml_Recpt_String += " TENDERED_AMOUNT=$" + lbltendcash + "$";
        _Xml_Recpt_String += " CHANGE_AMOUNT=$" + lblchange + "$";
        _Xml_Recpt_String += " CC_AUTH_CD=$" + AUTH_CD + "$";
        _Xml_Recpt_String += " DC_AUTH_CD=$" + "" + "$";
        _Xml_Recpt_String += " REC_TYPE_ID=$" + rec_type_id + "$";
        _Xml_Recpt_String += "/>";
        }
        //Debit Card
        if (paymentmodeid == "5") {
        countrep++;
        _Xml_Recpt_String += "<FO_RECPAY_DET ";
        _Xml_Recpt_String += " TRANSACTION_DET_ID=$" + 0 + "$";
        _Xml_Recpt_String += " PAYMENT_MODE_ID=$" + paymentmodeid + "$";
        _Xml_Recpt_String += " AMOUNT=$" + lblconvertedamt + "$";
        _Xml_Recpt_String += " DC_CARD_NO=$" + lblcardno + "$";
        _Xml_Recpt_String += " CC_CARD_NO=$" + lblcardno + "$";
        _Xml_Recpt_String += " DC_APPROVAL_NO=$" + '0' + "$";
        _Xml_Recpt_String += " DC_CARD_HOLDER_NAME=$" + chq_issue_name + "$";
        _Xml_Recpt_String += " CC_CARD_HOLDER_NAME=$" + chq_issue_name + "$";
        _Xml_Recpt_String += " DC_EDC_MACHINE=$" + '' + "$";
        _Xml_Recpt_String += " DC_CARD_TYPE_ID=$" + hdncardtypeId + "$";
        _Xml_Recpt_String += " CC_CARD_TYPE_ID=$" + hdncardtypeId + "$";
        _Xml_Recpt_String += " DC_CARD_TYPE_REV_NO=$" + 1 + "$";
        _Xml_Recpt_String += " DC_ISSUE_BANK_NAME=$" + lblbankname + "$";
        _Xml_Recpt_String += " CC_ISSUE_BANK_NAME=$" + lblbankname + "$";
        _Xml_Recpt_String += " DC_VALID_TO_DT=$" + lblcardexpdt + "$";
        _Xml_Recpt_String += " CC_VALID_TO_DT=$" + lblcardexpdt + "$";
        _Xml_Recpt_String += " DC_CARD_HOLDER_ADDRESS=$" + 0 + "$";
        _Xml_Recpt_String += " REMARKS=$" + Remarks + "$";
        _Xml_Recpt_String += " SESSION_ID=$" + document.getElementById('' + ctrlcom + '_HDNSESSIONID').value + "$";
        _Xml_Recpt_String += " TOTAL_PAID_AMT=$" + TotalPayAmt + "$";
        _Xml_Recpt_String += " CURR_ID=$" + hdncurrId + "$";
        _Xml_Recpt_String += " EX_RATE=$" + lblexchrate + "$";
        _Xml_Recpt_String += " ENTERED_AMOUNT=$" + lblAmount + "$";
        _Xml_Recpt_String += " TENDERED_AMOUNT=$" + lbltendcash + "$";
        _Xml_Recpt_String += " CHANGE_AMOUNT=$" + lblchange + "$";
        _Xml_Recpt_String += " CC_AUTH_CD=$" + AUTH_CD + "$";
        _Xml_Recpt_String += " DC_AUTH_CD=$" + AUTH_CD + "$";
        _Xml_Recpt_String += " REC_TYPE_ID=$" + rec_type_id + "$";
        _Xml_Recpt_String += "/>";
        }
        //NEFT/RGFT
        if (paymentmodeid == "8" || paymentmodeid == "16" || paymentmodeid == "13" || paymentmodeid == "7" || paymentmodeid == "9" || paymentmodeid == "6" || paymentmodeid == "17" || paymentmodeid == "10") {
        countrep++;
        _Xml_Recpt_String += "<FO_RECPAY_DET ";
        _Xml_Recpt_String += " TRANSACTION_DET_ID=$" + "0" + "$";
        _Xml_Recpt_String += " PAYMENT_MODE_ID=$" + paymentmodeid + "$";
        _Xml_Recpt_String += " AMOUNT=$" + (lblconvertedamt) + "$";
        _Xml_Recpt_String += " CQ_CHEQUE_NO=$" + lblcardno + "$";
        _Xml_Recpt_String += " CC_CARD_NO=$" + lblcardno + "$";
        _Xml_Recpt_String += " CQ_ISSUER_NAME=$" + '0' + "$";
        _Xml_Recpt_String += " CQ_BANK_ID=$" + hdnbankid + "$";
        _Xml_Recpt_String += " CQ_BANK_REV_NO=$" + '1' + "$";
        _Xml_Recpt_String += " CQ_BRANCH_ID=$" + 0 + "$";
        _Xml_Recpt_String += " CQ_BRANCH_REV_NO=$" + 1 + "$";
        _Xml_Recpt_String += " CQ_VALID_TO_DT=$" + '' + "$";
        _Xml_Recpt_String += " REMARKS=$" + Remarks + "$";
        _Xml_Recpt_String += " SESSION_ID=$" + document.getElementById('' + ctrlcom + '_HDNSESSIONID').value + "$";
        _Xml_Recpt_String += " TOTAL_PAID_AMT=$" + TotalPayAmt + "$";
        _Xml_Recpt_String += " CURR_ID=$" + hdncurrId + "$";
        _Xml_Recpt_String += " EX_RATE=$" + lblexchrate + "$";
        _Xml_Recpt_String += " ENTERED_AMOUNT=$" + lblAmount + "$";
        _Xml_Recpt_String += " TENDERED_AMOUNT=$" + lbltendcash + "$";
        _Xml_Recpt_String += " CHANGE_AMOUNT=$" + lblchange + "$";
        _Xml_Recpt_String += " CC_AUTH_CD=$" + AUTH_CD + "$";
        _Xml_Recpt_String += " DC_AUTH_CD=$" + "" + "$";
        _Xml_Recpt_String += " REC_TYPE_ID=$" + rec_type_id + "$";
        _Xml_Recpt_String += "  />"
        }
        //Advance Adjustment
        if (paymentmodeid == "11") {
        countrep++;
        _Xml_Recpt_String += "<FO_RECPAY_DET ";
        _Xml_Recpt_String += " TRANSACTION_DET_ID=$" + 0 + "$";
        _Xml_Recpt_String += " PAYMENT_MODE_ID=$" + paymentmodeid + "$";
        _Xml_Recpt_String += " AMOUNT=$" + lblconvertedamt + "$";
        _Xml_Recpt_String += " REMARKS=$" + Remarks + "$";
        _Xml_Recpt_String += " SESSION_ID=$" + document.getElementById('' + ctrlcom + '_HDNSESSIONID').value + "$";
        _Xml_Recpt_String += " TOTAL_PAID_AMT=$" + TotalPayAmt + "$";
        _Xml_Recpt_String += " CURR_ID=$" + hdncurrId + "$";
        _Xml_Recpt_String += " EX_RATE=$" + lblexchrate + "$";
        _Xml_Recpt_String += " ENTERED_AMOUNT=$" + lblAmount + "$";
        _Xml_Recpt_String += " TENDERED_AMOUNT=$" + lbltendcash + "$";
        _Xml_Recpt_String += " CHANGE_AMOUNT=$" + lblchange + "$";
        _Xml_Recpt_String += " CC_AUTH_CD=$" + AUTH_CD + "$";
        _Xml_Recpt_String += " DC_AUTH_CD=$" + "" + "$";
        _Xml_Recpt_String += " REC_TYPE_ID=$" + rec_type_id + "$";
        _Xml_Recpt_String += "/>";
        }
        //Funds
        if (paymentmodeid == "12") {
        countrep++;
        _Xml_Recpt_String += "<FO_RECPAY_DET ";
        _Xml_Recpt_String += " TRANSACTION_DET_ID=$" + 0 + "$";
        _Xml_Recpt_String += " PAYMENT_MODE_ID=$" + paymentmodeid + "$";
        _Xml_Recpt_String += " AMOUNT=$" + lblconvertedamt + "$";
        _Xml_Recpt_String += " REMARKS=$" + Remarks + "$";
        _Xml_Recpt_String += " SESSION_ID=$" + document.getElementById('' + ctrlcom + '_HDNSESSIONID').value + "$";
        _Xml_Recpt_String += " TOTAL_PAID_AMT=$" + TotalPayAmt + "$";
        _Xml_Recpt_String += " CURR_ID=$" + hdncurrId + "$";
        _Xml_Recpt_String += " EX_RATE=$" + lblexchrate + "$";
        _Xml_Recpt_String += " ENTERED_AMOUNT=$" + lblAmount + "$";
        _Xml_Recpt_String += " TENDERED_AMOUNT=$" + lbltendcash + "$";
        _Xml_Recpt_String += " CHANGE_AMOUNT=$" + lblchange + "$";
        _Xml_Recpt_String += " CC_AUTH_CD=$" + AUTH_CD + "$";
        _Xml_Recpt_String += " DC_AUTH_CD=$" + "" + "$";
        _Xml_Recpt_String += " REC_TYPE_ID=$" + rec_type_id + "$";
        _Xml_Recpt_String += "/>";
        }
        if (paymentmodeid == "19" || paymentmodeid == "20" || paymentmodeid == "21" || paymentmodeid == "22" || paymentmodeid == "23" || paymentmodeid == "24" || paymentmodeid == "25" || paymentmodeid == "26") {
        countrep++;
        _Xml_Recpt_String += "<FO_RECPAY_DET ";
        _Xml_Recpt_String += " TRANSACTION_DET_ID=$" + "0" + "$";
        _Xml_Recpt_String += " PAYMENT_MODE_ID=$" + paymentmodeid + "$";
        _Xml_Recpt_String += " AMOUNT=$" + lblconvertedamt + "$";
        _Xml_Recpt_String += " CC_CARD_NO=$" + lblcardno + "$";
        _Xml_Recpt_String += " EX_RATE=$" + lblexchrate + "$";
        _Xml_Recpt_String += " REMARKS=$" + ReplaceSplCharactor(Remarks) + "$";
        _Xml_Recpt_String += " SESSION_ID=$" + document.getElementById('' + ctrlcom + '_HDNSESSIONID').value + "$";
        _Xml_Recpt_String += " CURR_ID=$" + hdncurrId + "$";
        _Xml_Recpt_String += " ENTERED_AMOUNT=$" + lblAmount + "$";
        _Xml_Recpt_String += " TENDERED_AMOUNT=$" + lbltendcash + "$";
        _Xml_Recpt_String += " CC_AUTH_CD=$" + AUTH_CD + "$";
        _Xml_Recpt_String += " REC_TYPE_ID=$" + rec_type_id + "$";
        _Xml_Recpt_String += "  />";
        }
        });
        if (countrep == 0) {
        _Xml_Recpt_String += "<FO_RECPAY_DET ";
        _Xml_Recpt_String += " TRANSACTION_DET_ID=$" + 0 + "$";
        _Xml_Recpt_String += " PAYMENT_MODE_ID=$" + "0" + "$";
        _Xml_Recpt_String += " AMOUNT=$" + "0" + "$";
        _Xml_Recpt_String += " REMARKS=$" + Remarks + "$";
        _Xml_Recpt_String += " SESSION_ID=$" + document.getElementById('' + ctrlcom + '_HDNSESSIONID').value + "$";
        _Xml_Recpt_String += " TOTAL_PAID_AMT=$" + Math.round(TotalPayAmt) + "$";
        _Xml_Recpt_String += " CURR_ID=$" + 0 + "$";
        _Xml_Recpt_String += " EX_RATE=$" + 0 + "$";
        _Xml_Recpt_String += " ENTERED_AMOUNT=$" + 0 + "$";
        _Xml_Recpt_String += " TENDERED_AMOUNT=$" + 0 + "$";
        _Xml_Recpt_String += " CHANGE_AMOUNT=$" + 0 + "$";
        _Xml_Recpt_String += " CC_AUTH_CD=$" + "" + "$";
        _Xml_Recpt_String += " DC_AUTH_CD=$" + "" + "$";
        _Xml_Recpt_String += " REC_TYPE_ID=$" + rec_type_id + "$";
        _Xml_Recpt_String += " />"
        }*/
        _Xml_Recpt_String += FoRecPayDetAdvancedXml();
    }
    _Xml_Recpt_String += "</root>";
    _recpayxml = '';
    return _Xml_Recpt_String;
}

var _DashFlg; var _ID; var _OPStatus; var _Count;
var MlcStatus = '';
function OPDSaveMsg(Rpath, TransId, DashFlg, ID, OPStatus, Count, pkg_rpt, billid, bill_no, tran_no, srs_report, MlcStatus, patid) {
    MlcStatus = MlcStatus;
    _DashFlg = DashFlg; _ID = ID; _OPStatus = OPStatus; _Count = Count;
    document.getElementById('' + ctrlcom + '_hdnsvaeclickvalue').value = 2;
    if (document.getElementById('' + ctrlcom + '_hdnHTMLstring').value != '') {
        if (document.getElementById('' + ctrlcom + '_hdnpre_regi').value == 5) {

            if (OPStatus == 'True' && Count > 0) {
                if (DashFlg != '' && DashFlg == 'FrntOffice') {
                    _xmlCorpRef = '';
                    _xmlCorpReg = '';
                    $(".smessagebox").scustommessagebox(1, "Success", "Saved successfully(" + bill_no + "/<br>" + tran_no + "). Click OK to get Report", ReportNoalert, Rpath + ',' + TransId + ',' + pkg_rpt + ',' + billid + ',' + srs_report + ',' + MlcStatus + ',' + patid, ReportNoalert);
                }
                else {
                    _xmlCorpRef = '';
                    _xmlCorpReg = '';
                    $(".smessagebox").scustommessagebox(1, "Success", "Saved successfully(" + bill_no + "/<br>" + tran_no + "). Click OK to get Report", ReportNoalert, Rpath + ',' + TransId + ',' + pkg_rpt + ',' + billid + ',' + srs_report + ',' + MlcStatus + ',' + patid, ReportNoalert);
                }

            }
            else {
                ctl00_ContentPlaceHolder1_headerControl1_hdnisSaveDisable.value = 0;
                $(".stoast").toastText("warning", "Failed To Save", 5, 3);

            }
        }
        else {
            if (OPStatus == 'True') {

                if (MlcStatus == "Y") {
                    window.location.href = _iniUrl + "Private/FrontOffice/DayCare/MLC.aspx?PatID=" + patid + "&DOC_FORM_CD=FOMLC";
                }
            }
            else {
                ctl00_ContentPlaceHolder1_headerControl1_hdnisSaveDisable.value = 0;
                $(".stoast").toastText("warning", "Failed To Save", 5, 3);

                //window.location.href = 'OPDBill.aspx?DOC_FORM_CD=OPDREGBILL';
                document.getElementById('' + ctrlcom + '_hdnispatientbaneer').value = 'N';
                $('#' + ctrlcom + '_hdnregtypemain').val(2);
                ClearAllTransactionDetails1();
                document.getElementById('' + ctrlcom + '_ReceiptControl2_chkismultiple').checked = false;
                OnMultipleDiscGrid();
                AllClearPopUp();
                _RegXml = ''; _Cnsltxml = ''; _recpayxml = ''; _isQuickreg = 'N'; UmrNO = ''; Pat_ID = ''; BType = '';
                _PaidAmnt = 0; _RegPaidAmnt = 0; _ConsPaidAmnt = 0; PAYMENT_TYPE_ID = ''; CnsCount = 0;
                b_cmp_net = 0; b_cmp_grs_amt = 0; b_cmp_cnc_amt = 0; b_cmp_pct = 0;
                c_cmp_net = 0; c_cmp_grs_amt = 0; c_cmp_cnc_amt = 0; c_cmp_pct = 0;
                referral_save_count = ''; Rfrl_Ltr_Id = '';
                _app_pat_id = 0; __apptID = 0;
                _post_cons_ref_id = '0'; doc_rev_no = '0'; ff_doc_id = '0';
                OrderingPhyCount = 0;
                EnableKeys();

            }
        }
    }
    else {
        ctl00_ContentPlaceHolder1_headerControl1_hdnisSaveDisable.value = 0;
        $(".stoast").toastText("warning", "Failed To Save", 5, 3);

    }

}
function SaveFailelert(alert1) {
    ctl00_ContentPlaceHolder1_headerControl1_hdnisSaveDisable.value = 0;
    $(".stoast").toastText("warning", alert1, 5, 3);
    AllClearPopUp();
    return false;
}
function ConsultatentMsg(alert) {
    $(".stoast").toastText("warning", "Consultation is Already Done for " + alert.split('+')[0].split(',')[1] + " !", 5, 3);
    var RowIndexForGrid = 0;
    $("table[id*=UCServices_gvServices] tr:has(td)").each(function () {
        RowIndexForGrid = $(this)[0].rowIndex;
        var rdocid = alert.split('+')[0].split(',')[0];
        var srv_doctorId = $(this).closest('tr').find('input[type=hidden][id*=hdnDoctorID]').val();
        if (srv_doctorId == rdocid) {
            $(this).closest('tr').remove();
        }
        AssignSno(RowIndexForGrid + 1);
    });
    CalculateGridAmt(RowIndexForGrid);
    return false;
}
var hdnRUmrNo = '';
var hdnRPatID = '';
var hdnRType = '';
var hdnRpane = '';

function ReportOkalert(value) {


    hdnRType = document.getElementById('' + ctrlcom + '_hdnRType').value;
    hdnRpane = document.getElementById('' + ctrlcom + '_hdnRpane').value;

    var Rpath = value.split(',')[0];
    var TransId = value.split(',')[1];
    var pkg_rpt = value.split(',')[2];
    var billid = value.split(',')[3];
    // var srs_report = value.split(',')[4];
    MlcStatus = value.split(',')[5];
    var patid = value.split(',')[6];

    var foodnbev = $('#' + ctrlcom + '_UCServices_hdnfoodandbev').val();
    if (foodnbev != '') {
        var sub_food = foodnbev.split(';');
        var item_names_nclude = '';
        for (var j = 1; j < sub_food.length; j++) {
            var items_sub = sub_food[j].split(',');
            var item_id = items_sub[0];
            var item_group = items_sub[1];
            var item_qty = items_sub[2];
            var item_name = items_sub[3];
            //   for (var qty = 0; qty < item_qty; qty++) {
            item_names_nclude = item_names_nclude + '*' + item_name + '-' + item_id;
            //   }
        }
        //        window.open('barcode://' + item_names_nclude);
        window.open(document.getElementById('' + ctrlcom + '_hdnbarcodepath').value + item_names_nclude);
    }
    window.open(_iniUrl + "Private/Reports/HIMSReportViewer.aspx?rptPath=" + Rpath);
    if (pkg_rpt != '') {
        window.open(_iniUrl + "Private/Reports/HIMSReportViewer.aspx?rptPath1=" + pkg_rpt);
    }
    /*  if (srs_report != '') {
    window.open(_iniUrl + "Private/Reports/HIMSReportViewer.aspx?rptPath2=" + srs_report);
    }
    */

    var reg_type = $('#' + ctrlcom + '_hdnregtypemain').val();
    if (reg_type == undefined || reg_type == null || reg_type == '') { reg_type = 2; }
    if (document.getElementById('' + ctrlcom + '_hdnpre_regi').value == 5) {
        if (_OPStatus == 'True' && _Count > 0) {
            if (_DashFlg != '' && _DashFlg == 'FrntOffice') {
                window.location.href = '../../Admin/View/DashBoard/FrontOfficeDashBoard_New.aspx?Type="' + hdnRType + '"&DashBdFlag=FrntOffice&Patient_ID="' + hdnRPatID + '"&umr_no="' + hdnRUmrNo + '"&admn_no=%20&pat_id=2'
            }
            else {
                //window.location.href = 'OPDBill.aspx?Type="' + hdnRType + '"&pane="' + hdnRpane + '"&RID="' + _ID + '"&reg_type="' + reg_type + '"&DOC_FORM_CD=OPDREGBILL';
                document.getElementById('' + ctrlcom + '_hdnispatientbaneer').value = 'N';
                $('#' + ctrlcom + '_hdnregtypemain').val(2);
                ClearAllTransactionDetails1();
                document.getElementById('' + ctrlcom + '_ReceiptControl2_chkismultiple').checked = false;
                OnMultipleDiscGrid();
                AllClearPopUp();
                EnableKeys();
                _RegXml = ''; _Cnsltxml = ''; _recpayxml = ''; _isQuickreg = 'N'; UmrNO = ''; Pat_ID = ''; BType = '';
                _PaidAmnt = 0; _RegPaidAmnt = 0; _ConsPaidAmnt = 0; PAYMENT_TYPE_ID = ''; CnsCount = 0;
                b_cmp_net = 0; b_cmp_grs_amt = 0; b_cmp_cnc_amt = 0; b_cmp_pct = 0;
                c_cmp_net = 0; c_cmp_grs_amt = 0; c_cmp_cnc_amt = 0; c_cmp_pct = 0;
                referral_save_count = ''; Rfrl_Ltr_Id = '';
                _app_pat_id = 0; __apptID = 0;
                _post_cons_ref_id = '0'; doc_rev_no = '0'; ff_doc_id = '0';
                OrderingPhyCount = 0;

            }
        }
    }
    else {

    }
    if (MlcStatus == 'Y') {
        window.location.href = _iniUrl + "Private/FrontOffice/DayCare/MLC.aspx?PatID=" + patid + "&docname=OPQUICK" + "&DOC_FORM_CD=FOMLC";
    }


}
function ReportNoalert() {

    if (_OPStatus == 'True') {
        if (_DashFlg != '' && _DashFlg == 'FrntOffice') {
            window.location.href = '../../Admin/View/DashBoard/FrontOfficeDashBoard_New.aspx?Type="' + hdnRType + '"&DashBdFlag=FrntOffice&Patient_ID="' + hdnRPatID + '"&umr_no="' + hdnRUmrNo + '"&admn_no=%20&pat_id=2'
        }
        else {
            window.location.href = 'OPBillClientSide.aspx?Type="' + hdnRType + '"&pane="' + hdnRpane + '"&RID="' + _ID + '"&DOC_FORM_CD=FO_OPCONSULT';
        }
    }
    if (MlcStatus == 'Y') {
        window.location.href = _iniUrl + "Private/FrontOffice/DayCare/MLC.aspx?PatID=" + patid + "&docname=OPQUICK" + "&DOC_FORM_CD=FOMLC";
    }
}


function Consultationsave() {
    _ConsPaidAmnt = 0;
    var rec_type_id = 0;
    if (document.getElementById('ctl00_hdnIsMedClg').value == "TRUE") {
        rec_type_id = $('input[id*=radiousertran]:checked').val()
        if (rec_type_id == 0 || rec_type_id == null || rec_type_id == undefined) { rec_type_id = 1; }
    }
    else { rec_type_id = 1; }
    _Cnsltxml = '';
    var error_Con_net_amount = 0;
    var _Opxml = ''; BType = 'OP';
    var UmrNO = '', _reg_id = 0;
    if (document.getElementById('' + ctrlcom + '_chk_old').checked == true) {
        UmrNO = document.getElementById('' + ctrlcom + '_umrPatientDetails_Umrlookup_txtSearchControl').value;
        _reg_id = document.getElementById('' + ctrlcom + '_umrPatientDetails_hdnRegID').value;
        if (_reg_id == undefined || _reg_id == null || _reg_id == '') { _reg_id = "0"; }
    }
    else if (document.getElementById('' + ctrlcom + '_chkisold').checked == true) {
        UmrNO = document.getElementById('' + ctrlcom + '_ucUMRno_txtSearchControl').value;
        _reg_id = document.getElementById('' + ctrlcom + '_hdnRegID').value;
        if (_reg_id == undefined || _reg_id == null || _reg_id == '') { _reg_id = "0"; }
    }
    else {
        UmrNO = document.getElementById('' + ctrlcom + '_txtumrno').value;
    }
    var Cmp_Id = '';
    if (document.getElementById('' + ctrlcom + '_chk_old').checked) {
        Cmp_Id = document.getElementById('' + ctrlcom + '_uccorporate_CmpLookup__hiddenID').value;
    }
    else
    { }
    if ($('#' + ctrlcom + '_chk_old')[0].checked == false) {
        var Tpa_Id = document.getElementById('' + ctrlcom + '_EmployerInfo1_uctpa__hiddenID').value;
    } else {
        var Tpa_Id = document.getElementById('' + ctrlcom + '_uccorporate_CmpLookup__hiddenID').value;
    }

    var QuickBalCash = 0;
    var PAT_TAX_AMT = $('#' + ctrlcom + '_ReceiptControl2_txtpatTotTax').val();
    if (PAT_TAX_AMT == undefined || PAT_TAX_AMT == null || PAT_TAX_AMT == '') { PAT_TAX_AMT = "0"; }
    var CONCESSION = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatgrossamt').value;
    var COMPANY_CONCESSION_AMOUNT = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpartygrossamt').value;
    var COMPANY_AMOUNT = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtparygross').value;
    var BILL_AMOUNT = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtgrosstotal').value;
    var NET_AMOUNT = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtTotalNet').value;
    var PAID_AMOUNT = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatientReceiptAmt').value;
    var DUE_AMOUNT = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtTotalDue').value;
    var TOTAL_DISCOUNT = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtgrossamttotal').value;
    var CMP_OUTSTANDING_DUE = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtTotalDue').value;
    var CMP_GROSS_AMT = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtparygross').value;
    var CMP_NET_AMT = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtparygross').value;
    var CMP_DUE_AMT = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtcmpDue').value;
    var CMP_PAID_AMT = 0;
    var AdmnNo = document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnTRANADMNNO').value;
    var TransactionNo = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtReceoptNoAdvanced').value;
    var TransactionDt = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtReceiptDtAdvanced').value;
    var Remarks = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtRemarks').value;
    Remarks = ReplaceSplCharactor(Remarks);

    if (PAID_AMOUNT == null || PAID_AMOUNT == '' || PAID_AMOUNT == undefined) { PAID_AMOUNT = "0"; }
    if (DUE_AMOUNT == null || DUE_AMOUNT == '' || DUE_AMOUNT == undefined) { DUE_AMOUNT = "0"; }
    if (BILL_AMOUNT == null || BILL_AMOUNT == '' || BILL_AMOUNT == undefined) { BILL_AMOUNT = "0"; }
    if (NET_AMOUNT == null || NET_AMOUNT == '' || NET_AMOUNT == undefined) { NET_AMOUNT = "0"; }

    var Emp_Id = '0';
    var conpaidamt = 0;
    var regfee = document.getElementById('' + ctrlcom + '_txtregfee').value;
    if (parseFloat(_RegPaidAmnt) <= parseFloat(PAID_AMOUNT)) {
        PAID_AMOUNT = parseFloat(PAID_AMOUNT) - parseFloat(_RegPaidAmnt);
    }
    if (parseFloat(PAID_AMOUNT) <= 0) {
        PAID_AMOUNT = 0;
    }

    var cmp_concession_percent = $('#' + ctrlcom + '_txtCorpPercentage').val();
    var pat_concession_percent = $('#' + ctrlcom + '_txtEmpPercentage').val();
    if (parseFloat(cmp_concession_percent) > 0) { } else { cmp_concession_percent = 0; }
    if (parseFloat(pat_concession_percent) > 0) { } else { pat_concession_percent = 0; }
    var CashAmt = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtcashAmt').value;

    var CardAmt = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtCardAmt').value;
    CashAmt = CashAmt == '' ? 0 : CashAmt;
    var TotalAmt = parseFloat(CashAmt) + parseFloat(CardAmt);
    var CardNO = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtcardNoCmp').value;

    var CradTypeId = document.getElementById('' + ctrlcom + '_ReceiptControl2_ddcardType').value;
    var BankName = $('[id*=ddbankName] option:selected').text();
    var CardExperyDt = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtcardExpiredt').value;
    if (CardExperyDt == undefined || CardExperyDt == null || CardExperyDt == '' || CardExperyDt == 0) { CardExperyDt = ''; }
    var paymentmodeid = document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlcrdtype').value;
    if (paymentmodeid == '' || paymentmodeid == '0' || paymentmodeid == null || paymentmodeid == undefined) { paymentmodeid = "1"; }
    if (parseFloat(CashAmt) > 0) {
        if (parseFloat(CashAmt) > parseFloat(regfee)) {
            CashAmt = parseFloat(CashAmt) - parseFloat(regfee);
        }
        if (parseFloat(regfee) > parseFloat(CashAmt)) {
            CashAmt = parseFloat(regfee) - parseFloat(CashAmt);
        }
    }
    else if (parseFloat(CardAmt) > 0) {
        if (parseFloat(CardAmt) > parseFloat(regfee)) {
            CardAmt = parseFloat(CardAmt) - parseFloat(regfee);
        }
        if (parseFloat(regfee) > parseFloat(CardAmt)) {
            CardAmt = parseFloat(regfee) - parseFloat(CardAmt);
        }
    }
    var _apptID = 0;
    if (document.getElementById('' + ctrlcom + '_UcAppointmentNo_txtSearchControl').value != '' && document.getElementById('' + ctrlcom + '_hdnAPTID').value != '') {
        _apptID = document.getElementById('' + ctrlcom + '_hdnAPTID').value;
    }
    var _ref_id = $('[id$=hdnBillId]').val();
    if (_ref_id == undefined || _ref_id == null || _ref_id == '') { _ref_id = "0"; }
    var cos_sno = 0;
    var M_GvRowscount = 1;
    var grid = document.getElementById('' + ctrlcom + '_ReceiptControl2_gvMultipleConcession');
    var M_index = grid.rows.length;
    var con_rule_id = 0;
    var con_auth_id = 0;
    /* multiiple Discounts */

    if (document.getElementById('' + ctrlcom + '_ReceiptControl2_chkismultiple').checked == true) {
        $("table[id*=gvMultipleConcession] tr:has(td)").each(function (e) {

            if (M_GvRowscount < M_index) {

                var dscntype = $(this).closest('tr').find("[id*=ddlMultiDiscounttype]").val();

                if (dscntype == 6) {
                    con_auth_id = $(this).closest('tr').find("input[type=hidden][id*=hdnauthid]").val();
                    con_rule_id = $(this).closest('tr').find("input[type=hidden][id*=hdnRuleid]").val();
                }
            }

        });
    }
    $("table[id$=gvServices] tr:has(td)").each(function (e) {
        if (CnsCount == 0) {
            _Cnsltxml = '';
        }
        var sno = $(this).closest('tr').find('[id*=lblSNo]').text();
        cos_sno = 1;
        var txtServiceName = $(this).closest('tr').find("input[type=text][id*=txtServiceName]").val();
        var hdnServiceID = $(this).closest('tr').find("input[type=hidden][id*=hdnServiceID]").val();
        if (txtServiceName.trim() != '' && txtServiceName != null && txtServiceName != undefined && txtServiceName != "--Enter Service Name Here--" && hdnServiceID != '' && hdnServiceID != null && hdnServiceID != undefined) {
            if (hdnServiceID == "2") { txtServiceName = txtServiceName.split('-')[0]; }
            txtServiceName = ReplaceSplCharactor(txtServiceName);
            var txtServiceCode = $(this).closest('tr').find("input[type=text][id*=txtServiceCode]").val();
            var txtQuantity = $(this).closest('tr').find("input[type=text][id*=txtQty]").val();
            var lblServiceType = "";

            var apt_slot_id = $(this).closest('tr').find('input[type=hidden][id*=hdnreqid]').val();
            if (apt_slot_id == undefined || apt_slot_id == null || apt_slot_id == '' || apt_slot_id == 'undefined') { apt_slot_id = 0; }
            var hdnServiceClass = $(this).closest('tr').find("input[type=hidden][id*=hdnServiceClass]").val();
            var class_Srv_id = $(this).closest('tr').find("input[type=hidden][id*=hdnClass_Srv_ID]").val();
            var hdnServiceGrp = $(this).closest('tr').find("input[type=hidden][id*=hdnDepartment_Id]").val();
            var hdnServiceTypID = $(this).closest('tr').find("input[type=hidden][id*=hdnServiceTypID]").val();
            var hdnDoctorID = $(this).closest('tr').find("input[type=hidden][id*=hdnDoctorID]").val();

            var hdnDeptId = $(this).closest('tr').find("input[type=hidden][id*=hdnDepartment_Id]").val();
            var hdnVisitTypeId = $(this).closest('tr').find("input[type=hidden][id*=hdnVisitTypeId]").val();
            var hdnClassSrvid = $(this).closest('tr').find("input[type=hidden][id*=hdnClassSrvid]").val();
            var hdnOrgPrice = $(this).closest('tr').find('[id*=hdnOrgPrice]').val();
            var hdnDocPrice = $(this).closest('tr').find('[id*=hdnDoctorPrice]').val();
            var txtRate = $(this).closest('tr').find("input[type=text][id*=txtRate]").val();
            var txtrateAmount = $(this).closest('tr').find("input[type=text][id*=txtAmount]").val();
            var hdnRealOrgAmt = "";
            var hdnRealDocAmt = "";
            var hdnserpriceid = $(this).closest('tr').find("input[type=hidden][id*=hdnsrvpriceID]").val();
            var hdnisfrgnsrv = $(this).closest('tr').find("input[type=hidden][id*=hdnIsForeignSrv]").val();
            var hdnparentsrvic = "";
            var hdnserclass = $(this).closest('tr').find("input[type=hidden][id*=hdnServiceClass]").val();
            var Event_track_id = $(this).closest('tr').find("input[type=hidden][id*=hdnEvent_track_id]").val();
            if (Event_track_id == undefined || Event_track_id == null || Event_track_id == '' || Event_track_id == 'undefined')
            { Event_track_id = 0; }


            var txtamount = '';
            if (document.getElementById('' + ctrlcom + '_uccorporate_ddlPaymentBy').value == '2' || document.getElementById('' + ctrlcom + '_ddlPatientType').value > 1) {
                txtamount = $(this).closest('tr').find("input[type=text][id*=txtPamt]").val();
            }
            else {
                txtamount = $(this).closest('tr').find("input[type=text][id*=txtPamt]").val();
            }

            var txtconcamt = "";
            var txtDiscAmt = $(this).closest('tr').find("input[type=text][id*=txtDiscAmt]").val();
            var txtDiscPer = $(this).closest('tr').find("input[type=text][id*=txtDiscP]").val();
            var txtnetamt = $(this).closest('tr').find("input[type=text][id*=txtPNAmt]").val();


            var CashAmt = $(this).closest('tr').find("input[type=text][id*=txtDiscAmt]").val();
            var HealthcardAmt = $(this).closest('tr').find("input[type=text][id*=txtHcAmt]").val();
            var ManagementAmt = $(this).closest('tr').find("input[type=text][id*=txtmgAmt]").val();
            var StaffAmt = $(this).closest('tr').find("input[type=text][id*=txtstAmt]").val();
            var EventBasedAmt = $(this).closest('tr').find("input[type=text][id*=txtebAmt]").val();
            var RuleBasedAmt = $(this).closest('tr').find("input[type=text][id*=txtcncrlAmt]").val();
            CashAmt = CashAmt || 0;
            HealthcardAmt = HealthcardAmt || 0;
            ManagementAmt = ManagementAmt || 0;
            StaffAmt = StaffAmt || 0;
            EventBasedAmt = EventBasedAmt || 0;
            RuleBasedAmt = RuleBasedAmt || 0;
            txtDiscAmt = 0;
            txtDiscAmt += parseFloat(CashAmt) + parseFloat(HealthcardAmt) + parseFloat(ManagementAmt) + parseFloat(StaffAmt) + parseFloat(EventBasedAmt) + parseFloat(RuleBasedAmt);


            var namt = '';
            if (document.getElementById('' + ctrlcom + '_ReceiptControl2_chkismultiple').checked == false) {
                namt = $(this).closest('tr').find("input[type=text][id*=txtPNAmt]").val();
            } else { namt = $(this).closest('tr').find("input[type=text][id*=txtAmount]").val(); }
            if (namt == '' || namt == undefined || namt == null) { namt = 0; }

            txtnetamt = parseFloat(txtamount) - parseFloat(txtDiscAmt);
            namt = txtnetamt;

            var cncsn_pct = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatdis').value;
            var cncsn_amt = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatgrossamt').value;
            cncsn_pct = cncsn_pct == null || undefined || '' ? "0" : cncsn_pct;
            cncsn_amt = cncsn_amt == null || undefined || '' ? "0" : cncsn_amt;
            cncsn_amt = setProperDecimals(Math.round((parseFloat(namt) * parseFloat(cncsn_pct)) / 100));


            var _consconcession = 0; var _consconcession_per = 0;
            var Pamt = $(this).closest('tr').find('input[type=text][id*=txtPamt]').val();
            var PNamt = $(this).closest('tr').find('input[type=text][id*=txtPNAmt]').val();

            if (Pamt == null || Pamt == '' || Pamt == undefined) { Pamt = "0"; }
            if (PNamt == null || PNamt == '' || PNamt == undefined) { PNamt = "0"; }

            var acc_net_amount = Math.round(PNamt);
            if (parseFloat(acc_net_amount) > parseFloat(PNamt)) {
                error_Con_net_amount = -Math.abs(parseFloat(acc_net_amount) - parseFloat(PNamt));
            }
            else {
                error_Con_net_amount = parseFloat(PNamt) - parseFloat(acc_net_amount);
            }
            if (error_Con_net_amount == undefined || error_Con_net_amount == null || error_Con_net_amount == '') { error_Con_net_amount = 0; }


            _consconcession = txtDiscAmt;
            //_consconcession = parseFloat(Pamt) - parseFloat(PNamt);

            if (parseFloat(Pamt) > 0) {
                _consconcession_per = (parseFloat(_consconcession) * 100) / parseFloat(Pamt);
            }
            if (_consconcession_per == '' || _consconcession_per == null || _consconcession_per == undefined) { _consconcession_per = 0; }
            cncsn_pct = _consconcession_per;
            cncsn_amt = _consconcession;

            var Cmp_G_Amt = $(this).closest('tr').find('input[type=text][id*=txtCamt]').val();
            var Cmp_Disc_Pcnt = $(this).closest('tr').find('input[type=text][id*=txtCDiscP]').val();
            var Cmp_Disc_Amt = $(this).closest('tr').find('input[type=text][id*=txtCDiscAmt]').val();
            var Cmp_N_Amt = $(this).closest('tr').find('input[type=text][id*=txtCNetAmt]').val();
            var Tariff_ID = $(this).closest('tr').find('input[type=hidden][id*=hdnTariffId]').val();
            var histtype = $(this).closest('tr').find('input[type=hidden][id*=hdnhistorytypeID]').val();
            var medictype = $(this).closest('tr').find('input[type=hidden][id*=hdnMedicationType]').val();
            var docageqty = $(this).closest('tr').find('input[type=hidden][id*=hdnDosageqty]').val();
            var takentoday = $(this).closest('tr').find('input[type=hidden][id*=hdnIsTakenToday]').val();
            var lmpcal = $(this).closest('tr').find('input[type=hidden][id*=hdnLmpCal]').val();
            var outhermedic = $(this).closest('tr').find('input[type=hidden][id*=hdnOutherMedic]').val();
            var hdn_is_free_followup = $(this).closest('tr').find('input[type=hidden][id*=hdn_is_free_followup]').val();
            var org_pct = $(this).closest('tr').find('[id*=hdnOrgPct]').val();
            var doctor_pct = $(this).closest('tr').find('[id*=hdnDoctorPct]').val();
            if (org_pct == undefined || org_pct == null || org_pct == '') { org_pct = 0; }
            if (doctor_pct == undefined || doctor_pct == null || doctor_pct == '') { doctor_pct = 0; }
            if (hdn_is_free_followup == undefined || hdn_is_free_followup == 'undefined' || hdn_is_free_followup == '' || hdn_is_free_followup == null) {
                hdn_is_free_followup = 'N';
            }
            var _consultationTypeID = $(this).closest('tr').find('[id*=ddSType]').val();
            var SlotTime = $(this).closest('tr').find('[id*=ddlSlotTiming]').find('option:selected').text();
            if (SlotTime == 'Select') { SlotTime = ''; }
            var SlotId = $(this).closest('tr').find('[id*=ddlSlotTiming]').val();
            var tocken_no = '';
            if (SlotId == undefined || SlotId == null || SlotId == '')
            { }
            else {
                tocken_no = SlotId.split(',')[1];
                if (tocken_no == undefined || tocken_no == null || tocken_no == '')
                { tocken_no = ''; }
                SlotId = SlotId.split(',')[0];
            }
            var reqid = $(this).closest('tr').find("input[type=hidden][id*=hdnconrequistionid]").val();
            var srvremarks = $(this).closest('tr').find("input[type=text][id*=txtremks]").val();

            SlotTime = SlotTime == '--Select--' ? " " : SlotTime;
            if (SlotId == 'undefined' || SlotId == undefined || SlotId == null)
            { SlotId = 0; }

            if (SlotTime == 'Select' || SlotTime == 'undefined' || SlotTime == null || SlotTime == undefined || SlotTime == 'select' || SlotTime == 'SELECT' || SlotTime == "") {
                SlotTime = ' ';
            }
            else {
                SlotTime = new Date().format('dd-MMM-yyyy') + " " + SlotTime;
            }

            var txtstatus = "";
            var COLOR_CD = '';
            var histSpecimen = ""; // $(this).closest('tr').find("input[type=hidden][id*=hdnhistspeci]").val();
            var histsite = ""; // $(this).closest('tr').find("input[type=hidden][id*=hdnhistSite]").val();
            var histtrf = ""; // $(this).closest('tr').find("input[type=hidden][id*=hdnhisttrf]").val();
            var sample_type = '';
            var volume = '';
            var transport = '';
            var VactinerID = '0';
            var SpecimenID = '0';
            var DueAuth_Id = document.getElementById('' + ctrlcom + '_ReceiptControl2_Search3__hiddenID').value;
            var ConAuth_Id = document.getElementById('' + ctrlcom + '_ReceiptControl2_ucdueauth__hiddenID').value;
            if (DueAuth_Id == null || DueAuth_Id == '' || DueAuth_Id == undefined) { DueAuth_Id = "0"; }
            if (ConAuth_Id == null || ConAuth_Id == '' || ConAuth_Id == undefined) { ConAuth_Id = "0"; }

            var _isEmergency = $(this).closest('tr').find("input[type=checkbox][id*=chkstat]")[0].checked;
            var ISEmergency = "N";
            if (_isEmergency == true) { ISEmergency = "Y" }
            if (hdnServiceClass == '3' || hdnServiceClass == '4') {
                document.getElementById('' + ctrlcom + '_hdnPkgSrvs').value = hdnServiceID;
            }

            var hdnIsEmerPrice = $(this).closest('tr').find("input[type=hidden][id*=hdnIsEmerPrice]").val();
            if (hdnIsEmerPrice == null || hdnIsEmerPrice == '' || hdnIsEmerPrice == undefined) { hdnIsEmerPrice = "N"; }
            if (hdnserpriceid == null || hdnserpriceid == '' || hdnserpriceid == undefined) { hdnserpriceid = "0"; }
            if (hdnServiceTypID == null || hdnServiceTypID == '' || hdnServiceTypID == undefined) { hdnServiceTypID = "0"; }
            if (hdnDoctorID == null || hdnDoctorID == '' || hdnDoctorID == undefined) { hdnDoctorID = "0"; }
            if (hdnDeptId == null || hdnDeptId == '' || hdnDeptId == undefined) { hdnDeptId = "0"; }
            if (lblServiceType == null || lblServiceType == '' || lblServiceType == undefined) { lblServiceType = " "; }
            if (hdnOrgPrice == null || hdnOrgPrice == '' || hdnOrgPrice == undefined) { hdnOrgPrice = "0"; }
            if (hdnDocPrice == null || hdnDocPrice == '' || hdnDocPrice == undefined) { hdnDocPrice = "0"; }
            if (txtRate == null || txtRate == '' || txtRate == undefined) { txtRate = "0"; }
            if (hdnRealOrgAmt == null || hdnRealOrgAmt == '' || hdnRealOrgAmt == undefined) { hdnRealOrgAmt = "0"; }
            if (hdnRealDocAmt == null || hdnRealDocAmt == '' || hdnRealDocAmt == undefined) { hdnRealDocAmt = "0"; }
            if (hdnparentsrvic == null || hdnparentsrvic == '' || hdnparentsrvic == undefined) { hdnparentsrvic = "0"; }
            if (txtamount == null || txtamount == '' || txtamount == undefined) { txtamount = "0"; }
            if (txtconcamt == null || txtconcamt == '' || txtconcamt == undefined) { txtconcamt = "0"; }
            if (txtnetamt == null || txtnetamt == '' || txtnetamt == undefined) { txtnetamt = "0"; }
            if (txtstatus == null || txtstatus == '' || txtstatus == undefined) { txtstatus = "s"; }
            if (txtDiscAmt == null || txtDiscAmt == '' || txtDiscAmt == undefined) { txtDiscAmt = "0"; }
            if (txtDiscPer == null || txtDiscPer == '' || txtDiscPer == undefined) { txtDiscPer = "0"; }
            if (txtrateAmount == null || txtrateAmount == '' || txtrateAmount == undefined) { txtrateAmount = "0"; }
            if (Cmp_G_Amt != undefined && Cmp_G_Amt != null && Cmp_G_Amt != '') { Cmp_G_Amt = Cmp_G_Amt; } else { Cmp_G_Amt = '0'; }
            if (Cmp_Disc_Pcnt != undefined && Cmp_Disc_Pcnt != null && Cmp_Disc_Pcnt != '') { Cmp_Disc_Pcnt = Cmp_Disc_Pcnt; } else { Cmp_Disc_Pcnt = '0'; }
            if (Cmp_Disc_Amt != undefined && Cmp_Disc_Amt != null && Cmp_Disc_Amt != '') { Cmp_Disc_Amt = Cmp_Disc_Amt; } else { Cmp_Disc_Amt = '0'; }
            if (Cmp_N_Amt != undefined && Cmp_N_Amt != null && Cmp_N_Amt != '') { Cmp_N_Amt = Cmp_N_Amt; } else { Cmp_N_Amt = '0'; }
            if (Tariff_ID != undefined && Tariff_ID != null && Tariff_ID != '') { Tariff_ID = Tariff_ID } else { Tariff_ID = '0' }
            if (VactinerID != undefined && VactinerID != null && VactinerID != '') { VactinerID = VactinerID; } else { VactinerID = '0'; }
            if (SpecimenID != undefined && SpecimenID != null && SpecimenID != '') { SpecimenID = SpecimenID; } else { SpecimenID = '0'; }
            if (histtype != undefined && histtype != null && histtype != '') { histtype = histtype; } else { histtype = '0' }
            if (medictype != undefined && medictype != null && medictype != '') { medictype = medictype; } else { medictype = '0' }
            if (docageqty != undefined && docageqty != null && docageqty != '') { docageqty = docageqty; } else { docageqty = '0' }
            if (takentoday != undefined && takentoday != null && takentoday != '') { takentoday = takentoday; } else { takentoday = '0' }
            if (lmpcal != undefined && lmpcal != null && lmpcal != '') { lmpcal = lmpcal; } else { lmpcal = new Date().format('dd-MMM-yyyy'); }
            if (outhermedic != undefined && outhermedic != null && outhermedic != '') { outhermedic = outhermedic; } else { outhermedic = '0' }
            if (_consultationTypeID != undefined && _consultationTypeID != null && _consultationTypeID != '') { _consultationTypeID = _consultationTypeID; } else { _consultationTypeID = '0' }
            var _dispatchID = document.getElementById('' + ctrlcom + '_UCServices_divrptDispatch').value;
            if (_dispatchID == undefined || _dispatchID == null || _dispatchID == '') { _dispatchID = 0; }
            var rfltrid = document.getElementById('' + ctrlcom + '_uccorporate_ucRefLetterNo__hiddenID').value;
            var Concession_per = 0;
            /* c_cmp_net = parseFloat(c_cmp_net) + parseFloat(Cmp_N_Amt);
            c_cmp_grs_amt = parseFloat(c_cmp_grs_amt) + parseFloat(Cmp_G_Amt);
            c_cmp_pct = parseFloat(c_cmp_pct) + parseFloat(Cmp_Disc_Pcnt);
            c_cmp_cnc_amt = parseFloat(c_cmp_cnc_amt) + parseFloat(Cmp_Disc_Amt);*/



            var cash_disc_pcnt = $(this).closest('tr').find('input[type=text][id*=txtDiscP]').val();
            var Hc_disc_pcnt = $(this).closest('tr').find('input[type=text][id*=txthcPer]').val();
            var mng_disc_pcnt = $(this).closest('tr').find('input[type=text][id*=txtmaPer]').val();
            var st_disc_pcnt = $(this).closest('tr').find('input[type=text][id*=txtstPer]').val();
            var cc_rule_disc_pcnt = $(this).closest('tr').find('input[type=text][id*=txtRulePer]').val();
            var EB_disc_pcnt = $(this).closest('tr').find('input[type=text][id*=txtebPer]').val();
            if (parseFloat(cash_disc_pcnt) > 0) { } else { cash_disc_pcnt = 0; }
            if (parseFloat(Hc_disc_pcnt) > 0) { } else { Hc_disc_pcnt = 0; }
            if (parseFloat(mng_disc_pcnt) > 0) { } else { mng_disc_pcnt = 0; }
            if (parseFloat(st_disc_pcnt) > 0) { } else { st_disc_pcnt = 0; }
            if (parseFloat(cc_rule_disc_pcnt) > 0) { } else { cc_rule_disc_pcnt = 0; }
            if (parseFloat(EB_disc_pcnt) > 0) { } else { EB_disc_pcnt = 0; }
            Concession_per = parseFloat(cash_disc_pcnt) + parseFloat(Hc_disc_pcnt) + parseFloat(mng_disc_pcnt) + parseFloat(st_disc_pcnt) + parseFloat(cc_rule_disc_pcnt) + parseFloat(EB_disc_pcnt);
            // txtDiscAmt = Math.round(parseFloat(txtamount) / 100 * parseFloat(Concession_per));
            //txtDiscAmt = cncsn_amt;
            txtnetamt = ((parseFloat(txtamount)) - parseFloat(txtDiscAmt));
            var total_disc_Pct = parseFloat(Concession_per) + parseFloat(Cmp_Disc_Pcnt);
            var hdnPaidAmnt = document.getElementById('' + ctrlcom + '_hdnPaidAmnt').value;
            var Conspayfee = '0', Conspaydue = '0';
            if (txtnetamt != "0") {
                if ((hdnServiceID == '2' && hdnDoctorID > 0 && class_Srv_id == 0)) {
                    if (PAID_AMOUNT > 0 && parseFloat(PAID_AMOUNT) >= parseFloat(txtnetamt)) {
                        Conspayfee = parseFloat(txtnetamt);
                        _ConsPaidAmnt = parseFloat(_ConsPaidAmnt) + parseFloat(Conspayfee);
                    }
                    else if (PAID_AMOUNT > 0 && parseFloat(PAID_AMOUNT) <= parseFloat(txtnetamt)) {
                        Conspayfee = parseFloat(PAID_AMOUNT);
                        _ConsPaidAmnt = parseFloat(_ConsPaidAmnt) + parseFloat(Conspayfee);
                    }
                }
            }
            if (DUE_AMOUNT > 0) {
                if ((hdnServiceID == '2' && hdnDoctorID > 0 && class_Srv_id == 0)) {
                    if (parseFloat(PAID_AMOUNT) < parseFloat(txtnetamt)) {
                        Conspaydue = parseFloat(txtnetamt) - parseFloat(PAID_AMOUNT);
                    }
                }
            }
            if (parseFloat(Conspayfee) > parseFloat(PAID_AMOUNT)) {
                if (hdnServiceID == '2' && hdnDoctorID > 0 && class_Srv_id == 0) {
                    PAID_AMOUNT = parseFloat(Conspayfee) - parseFloat(PAID_AMOUNT);
                    document.getElementById('' + ctrlcom + '_hdnPaidAmnt').value = Math.round(PAID_AMOUNT);
                }
            }
            else if (parseFloat(PAID_AMOUNT) >= parseFloat(Conspayfee)) {
                if (hdnServiceID == '2' && hdnDoctorID > 0 && class_Srv_id == 0) {
                    PAID_AMOUNT = parseFloat(PAID_AMOUNT) - parseFloat(Conspayfee);
                    document.getElementById('' + ctrlcom + '_hdnPaidAmnt').value = Math.round(PAID_AMOUNT);
                }
            }

            if (_post_cons_ref_id == '' || _post_cons_ref_id == null || _post_cons_ref_id == undefined) { _post_cons_ref_id = '0'; }
            if (doc_rev_no == '' || doc_rev_no == null || doc_rev_no == undefined) { doc_rev_no = '0'; }
            if (ff_doc_id == '' || ff_doc_id == null || ff_doc_id == undefined) { ff_doc_id = '0'; }
            if (error_Con_net_amount == '0.5' || error_Con_net_amount == '-0.5') {
                txtnetamt = parseFloat(txtnetamt) - parseFloat(0.2);
            }
            var PostCons = $(this).closest('tr').find("input[type=checkbox][id*=chkPstCons]")[0].checked;
            if (lblquick.className == "select") {
                PAYMENT_TYPE_ID = 2;
            } else if (lbladvanced.className == "select") {
                PAYMENT_TYPE_ID = 1;
            }
            var tretedconsultant = document.getElementById('' + ctrlcom + '_ucConsultant__hiddenID').value;
            if (tretedconsultant == '' || tretedconsultant == undefined || tretedconsultant == null) { tretedconsultant = 0; }
            var total_cons_amount = parseFloat(txtamount) + parseFloat(Cmp_G_Amt);
            var total_cons_concession_amt = parseFloat(txtDiscAmt);
            var total_cons_due_amt = parseFloat(Conspaydue) + parseFloat(Cmp_N_Amt);
            var total_cons_net_amt = parseFloat(txtnetamt) + parseFloat(Cmp_N_Amt);
            var total_cons_concession_pct = (parseFloat(total_cons_concession_amt) * 100) / parseFloat(total_cons_amount);
            if (parseFloat(total_cons_amount) > 0) { } else { total_cons_amount = 0; }
            if (parseFloat(total_cons_concession_amt) > 0) { } else { total_cons_concession_amt = 0; }
            if (parseFloat(total_cons_due_amt) > 0) { } else { total_cons_due_amt = 0; }
            if (parseFloat(total_cons_net_amt) > 0) { } else { total_cons_net_amt = 0; }
            if (parseFloat(total_cons_concession_pct) > 0) { } else { total_cons_concession_pct = 0; }
            var patient_type_id = document.getElementById('' + ctrlcom + '_ddlPatientType').value;
            if (patient_type_id == undefined || patient_type_id == null || patient_type_id == '') { patient_type_id = '1'; }
            if (document.getElementById('' + ctrlcom + '_chk_old').checked == true) {
                if (document.getElementById('' + ctrlcom + '_uccorporate_ddlPaymentBy').value == '1') {
                    var pat_cat = document.getElementById('' + ctrlcom + '_UCServices_ddlpatcat').value;
                } else if (document.getElementById('' + ctrlcom + '_uccorporate_ddlPaymentBy').value == '2') {
                    var pat_cat = $('[id*=hdnforeigncatid]').val();

                }
            }
            else {
                var pat_cat = document.getElementById('' + ctrlcom + '_UCServices_ddlpatcat').value;

            }
            if (pat_cat == undefined || pat_cat == null || pat_cat == '' || pat_cat == '--Select--') { pat_cat = "0"; }
            var billinghead_id = $(this).closest('tr').find('input[type=hidden][id*=hdnbillingheadid]').val();
            if (billinghead_id == "undefined" || billinghead_id == undefined || billinghead_id == null) { billinghead_id = "0"; }

            var tretedconsultant = document.getElementById('' + ctrlcom + '_ucConsultant__hiddenID').value;

            var unit_id = $('#ctl00_ContentPlaceHolder1_UCServices_ddlunits').val();
            if (unit_id == undefined || unit_id == null || unit_id == '') { unit_id = "0"; }
            if ((hdnServiceID == '2' && hdnDoctorID > 0 && class_Srv_id == 0)) {
                CnsCount++;
                BType = 'C';
                var REMARKS = '';
                REMARKS = ReplaceSplCharactor($('#' + ctrlcom + '_ReceiptControl2_txtRemarks').val());
                if (REMARKS == '' || REMARKS == undefined || REMARKS == null) {
                    REMARKS = ReplaceSplCharactor($('#' + ctrlcom + '_ReceiptControl2_txtquickremarks').val());
                }
                var cmppersave = document.getElementById('' + ctrlcom + '_txtCorpPercentage').value;
                var emppersave = document.getElementById('' + ctrlcom + '_txtEmpPercentage').value;
                if (cmppersave == undefined || cmppersave == null || cmppersave == '') { cmppersave = "0"; }
                if (emppersave == undefined || emppersave == null || emppersave == '') { emppersave = "0"; }
                cmppersave = setProperDecimals(cmppersave);
                emppersave = setProperDecimals(emppersave);
                var Diagnosis_id = document.getElementById('ctl00_ContentPlaceHolder1_UcDiagnosis__hiddenID').value;
                if (Diagnosis_id == undefined || Diagnosis_id == null || Diagnosis_id == '') { Diagnosis_id = "0"; }
                _Cnsltxml += "<root>"
                _Cnsltxml += "<FO_BILL"
                _Cnsltxml += " BILL_ID=$" + "0" + "$";
                _Cnsltxml += " BILL_DT=$" + "" + "$";
                _Cnsltxml += " UMR_NO=$" + UmrNO + "$";
                _Cnsltxml += " ADMN_NO=$" + 0 + "$";
                if (parseFloat(Tpa_Id) > 0) {

                    _Cnsltxml += " BILL_TYPE_ID=$" + 20 + "$";
                }
                else {
                    _Cnsltxml += " BILL_TYPE_ID=$" + 2 + "$";
                }
                if (myMultiDatar1.length > 0) {
                    _Cnsltxml += " REFERAL_SOURCE_ID=$" + myMultiDatar1[0]["Refrl_class_id"] + "$";
                    _Cnsltxml += " REFERAL_DOCTOR_ID=$" + myMultiDatar1[0]["id"] + "$";
                    _Cnsltxml += " REFERAL_NAME=$" + ReplaceSplCharactor(myMultiDatar1[0]["Name"]) + "$";
                    _Cnsltxml += " REFERAL_TYPE_ID=$" + myMultiDatar1[0]["Source"] + "$";
                    _Cnsltxml += " REFERAL_REF_ID=$" + myMultiDatar1[0]["RfrlTo_Id"] + "$";
                } else {

                    _Cnsltxml += " REFERAL_SOURCE_ID=$" + "0" + "$";
                    _Cnsltxml += " REFERAL_DOCTOR_ID=$" + "0" + "$";
                    _Cnsltxml += " REFERAL_NAME=$" + '' + "$";
                    _Cnsltxml += " REFERAL_TYPE_ID=$" + "0" + "$";
                    _Cnsltxml += " REFERAL_REF_ID=$" + "0" + "$";

                }
                _Cnsltxml += " DOCTOR_ID=$" + hdnDoctorID + "$";
                _Cnsltxml += " EMPLOYEE_ID=$" + 0 + "$";
                if (patient_type_id == '1') {
                    _Cnsltxml += " CREDIT_TYPE_ID=$" + 1 + "$";
                } else {
                    _Cnsltxml += " CREDIT_TYPE_ID=$" + 2 + "$";
                }
                _Cnsltxml += " CONCESSION_ON_ID=$" + 0 + "$";
                _Cnsltxml += " CONCESSION_MODE_ID=$" + 1 + "$";
                _Cnsltxml += " CONCESSION_TYPE_ID=$" + 0 + "$";
                _Cnsltxml += " CONCESSION_TO_ID=$" + 0 + "$";
                _Cnsltxml += " BILLCONCESSION_AUTH_ID=$" + 0 + "$";
                _Cnsltxml += " DUE_AUTH_ID=$" + DueAuth_Id + "$";
                _Cnsltxml += " COMPANY_DUE_AUTH_ID=$" + 0 + "$";
                _Cnsltxml += " DUE_VERIFY_ID=$" + 0 + "$";
                _Cnsltxml += " DUE_VERIFY_DT=$" + '' + "$";
                _Cnsltxml += " DUE_APPROVE_ID=$" + 0 + "$";
                _Cnsltxml += " DUE_APPROVE_DT=$" + '' + "$";
                _Cnsltxml += " DUE_AUTH_DT=$" + '' + "$";
                _Cnsltxml += " CONCESSION_VERIFY_ID=$" + 0 + "$";
                _Cnsltxml += " CONCESSION_VERIFY_DT=$" + '' + "$";
                _Cnsltxml += " CONCESSION_APPROVE_ID=$" + 0 + "$";
                _Cnsltxml += " CONCESSION_APPROVE_DT=$" + '' + "$";
                _Cnsltxml += " CONCESSION_AUTH_ID=$" + ConAuth_Id + "$";
                _Cnsltxml += " CONCESSION_AUTH_DT=$" + '' + "$";
                _Cnsltxml += " PRINT_COUNT=$" + 0 + "$";
                fobillamount += Math.round(Conspayfee);
                _Cnsltxml += " BILL_AMOUNT=$" + Math.round(total_cons_amount) + "$";
                _Cnsltxml += " BILL_AMOUNT_EXC_GST=$" + Math.round(total_cons_amount) + "$";

                var concamtbill = (parseFloat(txtDiscAmt) + parseFloat(Cmp_Disc_Amt));
                var concperbill = parseFloat(concamtbill) * 100 / parseFloat(total_cons_amount);
                concamtbill = concamtbill || 0;
                concperbill = concperbill || 0;

                _Cnsltxml += " CONCESSION=$" + concperbill + "$";
                _Cnsltxml += " CONCESSION_AMOUNT=$" + concamtbill + "$";
                _Cnsltxml += " NET_AMOUNT=$" + Math.round(total_cons_net_amt) + "$";



                _Cnsltxml += " PAID_AMOUNT=$" + Math.round(Conspayfee) + "$";
                _Cnsltxml += " ADVANCE_AMOUNT=$" + 0 + "$";
                _Cnsltxml += " DUE_AMOUNT=$" + Math.round(total_cons_due_amt) + "$";
                _Cnsltxml += " DUE_RECOVERED=$" + 0 + "$";
                _Cnsltxml += " OUTSTANDING_DUE=$" + Math.round(total_cons_due_amt) + "$";
                _Cnsltxml += " POST_DISCOUNT=$" + 0 + "$";
                _Cnsltxml += " TOTAL_DISCOUNT=$" + Math.round(total_cons_concession_amt) + "$";
                _Cnsltxml += " CANCEL_AMOUNT=$" + 0 + "$";
                _Cnsltxml += " REFUND_AMOUNT=$" + 0 + "$";
                _Cnsltxml += " EXCESS_AMOUNT=$" + 0 + "$";
                _Cnsltxml += " CA_BILL_AMT=$" + 0 + "$";

                if (parseFloat(Tpa_Id) > 0) {
                    _Cnsltxml += " CMP_CNCSN_AMT=$" + Math.round(Cmp_Disc_Amt) + "$";
                    _Cnsltxml += " CMP_CNCSN_PCT=$" + "0" + "$";
                    _Cnsltxml += " CMP_GROSS_AMT=$" + Math.round(Cmp_G_Amt) + "$";
                    _Cnsltxml += " CMP_NET_AMT=$" + Math.round(Cmp_N_Amt) + "$";
                    _Cnsltxml += " CMP_PAID_AMT=$" + Math.round(CMP_PAID_AMT) + "$";
                    _Cnsltxml += " CMP_DUE_AMT=$" + Math.round(Cmp_N_Amt) + "$";
                    _Cnsltxml += " COMPANY_AMOUNT=$" + Math.round(Cmp_G_Amt) + "$";
                    _Cnsltxml += " COMPANY_CONCESSION_AMOUNT=$" + Math.round(Cmp_Disc_Amt) + "$";
                    _Cnsltxml += " COMPANY_DUE=$" + Math.round(Cmp_N_Amt) + "$";
                    _Cnsltxml += " CMP_OUTSTANDING_DUE=$" + Math.round(Cmp_N_Amt) + "$";
                    _Cnsltxml += " CMP_DUE_RECOVERED=$" + 0 + "$";
                }
                else {
                    _Cnsltxml += " CMP_CNCSN_AMT=$" + 0 + "$";
                    _Cnsltxml += " CMP_CNCSN_PCT=$" + "0" + "$";
                    _Cnsltxml += " CMP_GROSS_AMT=$" + 0 + "$";
                    _Cnsltxml += " CMP_NET_AMT=$" + 0 + "$";
                    _Cnsltxml += " CMP_PAID_AMT=$" + 0 + "$";
                    _Cnsltxml += " CMP_DUE_AMT=$" + 0 + "$";
                    _Cnsltxml += " COMPANY_AMOUNT=$" + 0 + "$";
                    _Cnsltxml += " COMPANY_CONCESSION_AMOUNT=$" + 0 + "$";
                    _Cnsltxml += " COMPANY_DUE=$" + 0 + "$";
                    _Cnsltxml += " CMP_OUTSTANDING_DUE=$" + 0 + "$";
                    _Cnsltxml += " CMP_DUE_RECOVERED=$" + 0 + "$";
                }


                _Cnsltxml += " CMP_TAX_AMT=$" + 0 + "$";
                _Cnsltxml += " CMP_TAX_PCT=$" + 0 + "$";
                _Cnsltxml += " CR_BILL_AMT=$" + 0 + "$";
                _Cnsltxml += " CR_CMP_AMT=$" + 0 + "$";
                _Cnsltxml += " CR_CMP_PCT=$" + cmppersave + "$";
                _Cnsltxml += " CR_PAT_AMT=$" + 0 + "$";
                _Cnsltxml += " CR_PAT_PCT=$" + emppersave + "$";
                _Cnsltxml += " EXC_PHA_AMT=$" + 0 + "$";
                _Cnsltxml += " GROSS_PHA_AMT=$" + 0 + "$";
                _Cnsltxml += " INC_PHA_AMT=$" + 0 + "$";
                _Cnsltxml += " IS_DSCHRG_WITHOUT_BILL=$" + 0 + "$";
                txtDiscAmt = txtDiscAmt || 0;
                txtamount = txtamount || 0;
                var discperpat = parseFloat(txtDiscAmt) * 100 / parseFloat(txtamount);
                discperpat = discperpat || 0;
                txtDiscAmt = txtDiscAmt || 0;
                _Cnsltxml += " PAT_CNCSN_AMT=$" + txtDiscAmt + "$";
                _Cnsltxml += " PAT_CNCSN_PCT=$" + discperpat + "$";
                _Cnsltxml += " CONCESSION_PCT=$" + discperpat + "$";

                _Cnsltxml += " PAT_GROSS_AMT=$" + Math.round(txtamount) + "$";
                _Cnsltxml += " PAT_NET_AMT=$" + Math.round(txtnetamt) + "$";
                _Cnsltxml += " NET_AMOUNT_EXC_GST=$" + Math.round(total_cons_net_amt) + "$";
                _Cnsltxml += " PAT_PAID_AMT=$" + Math.round(Conspayfee) + "$";
                _Cnsltxml += " PAT_DUE_AMT=$" + Math.round(Conspaydue) + "$";
                _Cnsltxml += " PAT_TAX_AMT=$" + 0 + "$";
                _Cnsltxml += " PAT_TAX_PCT=$" + 0 + "$";

                _Cnsltxml += " PERFORMED_PROCS=$" + 0 + "$";
                _Cnsltxml += " PKG_BILL_AMT=$" + 0 + "$";
                _Cnsltxml += " PKG_CNCSN_AMT=$" + 0 + "$";
                _Cnsltxml += " PKG_DUE_AMT=$" + 0 + "$";
                _Cnsltxml += " PKG_EXC_AMT=$" + 0 + "$";
                _Cnsltxml += " PKG_GROSS_AMT=$" + 0 + "$";
                _Cnsltxml += " PKG_INC_AMT=$" + 0 + "$";
                _Cnsltxml += " PKG_NET_AMT=$" + 0 + "$";
                _Cnsltxml += " PKG_PAID_AMT=$" + 0 + "$";
                _Cnsltxml += " PKG_POSTDSC_AMT=$" + 0 + "$";
                _Cnsltxml += " REMARKS=$" + REMARKS + "$";
                _Cnsltxml += " IS_SHINK=$" + 0 + "$";
                _Cnsltxml += " PKG_TOTAL_RECEIVED_AMT=$" + 0 + "$";
                _Cnsltxml += " ACC_CMP_ID=$" + 0 + "$";
                _Cnsltxml += " ACC_CMP_AMT=$" + 0 + "$";
                _Cnsltxml += " ACC_CMP_PCT=$" + 0 + "$";
                _Cnsltxml += " ACC_CMP_LVL_ID=$" + 0 + "$";
                _Cnsltxml += " IS_REFERAL=$" + 0 + "$";
                _Cnsltxml += " PKG_EXCESS_AMT=$" + 0 + "$";
                _Cnsltxml += " PCKG_CONV_ID=$" + 0 + "$";
                _Cnsltxml += " PAT_EXCESS_AMT=$" + 0 + "$";
                _Cnsltxml += " CMPNY_REFERAL_LETTER_ID=$" + rfltrid + "$";
                _Cnsltxml += " PREREFUND=$" + 0 + "$";
                _Cnsltxml += " CORP_ADMN_DT=$" + '' + "$";
                _Cnsltxml += " CORP_DISCHR_DT=$" + '' + "$";
                _Cnsltxml += " PATIENT_CLASS_ID=$" + 2 + "$";
                _Cnsltxml += " OLD_BILL_TYPE_ID=$" + 0 + "$";
                _Cnsltxml += " PATIENT_TYPE_ID=$" + patient_type_id + "$";
                _Cnsltxml += " PKG_RFND_AMT=$" + 0 + "$";
                _Cnsltxml += " PACKAGE_STATUS=$" + 0 + "$";


                _Cnsltxml += " DISALLOWANCE_AMT=$" + 0 + "$";
                _Cnsltxml += " TDS_AMT=$" + 0 + "$";
                _Cnsltxml += " IS_CORP_APPBILL=$" + 0 + "$";
                _Cnsltxml += " SAMPLE_COLLETED_DATE=$" + "" + "$";
                _Cnsltxml += " CLINLICAL_SUMMARY=$" + 0 + "$";
                _Cnsltxml += " DISC_REQ_REASON=$" + 0 + "$";
                _Cnsltxml += " PKG_EF_FRM_TODT=$" + '' + "$";
                _Cnsltxml += " PKG_DUE_RECOVERED=$" + 0 + "$";
                _Cnsltxml += " CLINLICAL_SUMMARY_FILE=$" + 0 + "$";
                _Cnsltxml += " REFERAL_CUSTMER=$" + 0 + "$";
                _Cnsltxml += " EMP_NARATION=$" + 0 + "$";
                _Cnsltxml += " CNCSN_NARATION=$" + 0 + "$";
                _Cnsltxml += " IS_POST_CONSULT=$" + 0 + "$";
                _Cnsltxml += " BILL_NO=$" + 0 + "$";
                _Cnsltxml += " REFERAL_CUSTOMER_ID=$" + 0 + "$";
                _Cnsltxml += " CENTER_ID=$" + 0 + "$";
                var Token_no = $('[id*=ddlToken]').find('option:selected').text();
                if (Token_no == undefined || Token_no == null || Token_no == 'select') { Token_no = ''; }
                _Cnsltxml += " TOKEN_NO=$" + Token_no + "$";
                _Cnsltxml += " REG_CONS_BILL_ID=$" + 0 + "$";
                _Cnsltxml += " REG_ID=$" + _reg_id + "$";

                _Cnsltxml += " CMP_ID=$" + Cmp_Id + "$";
                _Cnsltxml += " BILL_TYPE_REV_NO=$" + '1' + "$";
                _Cnsltxml += " REFERAL_SOURCE_REV_NO=$" + 1 + "$";
                _Cnsltxml += " REFERAL_TYPE_REV_NO=$" + 1 + "$";
                _Cnsltxml += " REFERAL_DOCTOR_REV_NO=$" + "1" + "$";
                _Cnsltxml += " REFERAL_REF_REV_NO=$" + "1" + "$";
                _Cnsltxml += " DOCTOR_REV_NO=$" + 1 + "$";
                _Cnsltxml += " EMPLOYEE_REV_NO=$" + 1 + "$";
                _Cnsltxml += " CREDIT_TYPE_REV_NO=$" + 1 + "$";
                _Cnsltxml += " CONCESSION_ON_REV_NO=$" + 1 + "$";
                _Cnsltxml += " CONCESSION_MODE_REV_NO=$" + "1" + "$";
                _Cnsltxml += " CONCESSION_TYPE_REV_NO=$" + "1" + "$";
                _Cnsltxml += " CONCESSION_AUTH_REV_NO=$" + "1" + "$";
                _Cnsltxml += " DUE_AUTH_REV_NO=$" + "1" + "$";
                _Cnsltxml += " ACC_CMP_REV_NO=$" + 1 + "$";
                _Cnsltxml += " ACC_CMP_LVL_REV_NO=$" + 1 + "$";
                _Cnsltxml += " GRP_REV_NO=$" + 1 + "$";
                _Cnsltxml += " ORG_REV_NO=$" + "1" + "$";
                _Cnsltxml += " BILL_TYPE=$" + "CON" + "$";
                _Cnsltxml += " REPORT_DISPATCH_ID=$" + _dispatchID + "$";
                _Cnsltxml += " EVENT_TRACK_ID=$" + Event_track_id + "$";
                _Cnsltxml += " TPA_ID=$" + Tpa_Id + "$";
                if (parseInt(reqid) > 0) {
                    _Cnsltxml += " REF_ID=$" + reqid + "$";
                }
                else {
                    _Cnsltxml += " REF_ID=$" + 0 + "$";
                }
                if (parseFloat(Conspaydue) > 0 && document.getElementById('' + ctrlcom + '_ChkAssesment').checked) {
                    _Cnsltxml += " RECORD_STATUS=$" + "P" + "$";
                }
                else {
                    _Cnsltxml += " RECORD_STATUS=$" + 'A' + "$";
                }
                _Cnsltxml += " SESSION_ID=$" + document.getElementById('' + ctrlcom + '_HDNSESSIONID').value + "$";
                _Cnsltxml += " ROUND_ERR=$" + 0 + "$";
                _Cnsltxml += " EXCESS_AMT=$" + 0 + "$";
                _Cnsltxml += " TRN_SOURCE_ID=$" + 0 + "$";
                _Cnsltxml += " DMS_UPLOAD=$" + 'N' + "$";
                _Cnsltxml += " TRN_DOCUMENT_ID=$" + $('[id*=hdnSessionDocId]').val() + "$";
                _Cnsltxml += " FOREIGN_CATEGORY_ID=$" + pat_cat + "$";
                _Cnsltxml += " DOCTOR_TYPE=$" + "I" + "$";
                _Cnsltxml += " GST_AMOUNT=$" + 0 + "$";
                _Cnsltxml += " SGST_AMOUNT=$" + 0 + "$";
                _Cnsltxml += " CGST_AMOUNT=$" + 0 + "$";
                _Cnsltxml += " REC_TYPE_ID=$" + rec_type_id + "$";
                _Cnsltxml += " DIAGNOSIS_ID =$" + Diagnosis_id + "$";
                _Cnsltxml += " />";


                _Cnsltxml += "<FO_BILL_SRV";
                _Cnsltxml += " BILL_SRV_ID=$" + 0 + "$";
                _Cnsltxml += " UMR_NO=$" + UmrNO + "$";
                _Cnsltxml += " SERVICE_TYPE_ID=$" + '1' + "$";
                _Cnsltxml += " SERVICE_GROUP_ID=$" + hdnServiceGrp + "$";
                _Cnsltxml += " SERVICE_ID=$" + hdnServiceID + "$";
                _Cnsltxml += " SERVICE_CLASS_ID=$" + hdnServiceClass + "$";
                _Cnsltxml += " CLASS_SERVICE_ID=$" + class_Srv_id + "$";

                if (Event_track_id > 0) {
                    _Cnsltxml += " CONSULTATION_TYPE_ID=$" + "5" + "$";
                }
                else {
                    _Cnsltxml += " CONSULTATION_TYPE_ID=$" + _consultationTypeID + "$";
                }
                _Cnsltxml += " QUANTITY=$" + txtQuantity + "$";
                _Cnsltxml += " RATE=$" + Math.round(txtRate) + "$";
                _Cnsltxml += " RATE_EXC_GST=$" + Math.round(txtRate) + "$";
                _Cnsltxml += " AMOUNT=$" + Math.round(txtrateAmount) + "$";
                _Cnsltxml += " CONCESSION=$" + total_disc_Pct + "$";
                _Cnsltxml += " CONCESSION_AMOUNT=$" + (parseFloat(cncsn_amt) + parseFloat(Cmp_Disc_Amt)) + "$";
                _Cnsltxml += " NET_AMOUNT=$" + Math.round(total_cons_net_amt) + "$";
                _Cnsltxml += " COMPANY_AMOUNT=$" + Math.round(Cmp_G_Amt) + "$";
                _Cnsltxml += " COMPANY_CNCSN_PCT=$" + Cmp_Disc_Pcnt + "$";
                _Cnsltxml += " COMPANY_CNCSN_AMT=$" + Math.round(Cmp_Disc_Amt) + "$";
                _Cnsltxml += " COMPANY_NET_AMT=$" + Math.round(Cmp_N_Amt) + "$";
                _Cnsltxml += " COLOR_CD=$" + COLOR_CD + "$";


                _Cnsltxml += " DEPARTMENT_ID=$" + hdnDeptId + "$";
                _Cnsltxml += " RECORD_SNO=$" + cos_sno + "$";
                _Cnsltxml += " SERVICE_PRICE_ID=$" + hdnserpriceid + "$";
                _Cnsltxml += " TO_LOC_ID=$" + 1 + "$";
                _Cnsltxml += " WF_STATUS=$" + "A" + "$";
                _Cnsltxml += " TARIFF_ID=$" + Tariff_ID + "$";
                _Cnsltxml += " EDIT_SERVICE_NAME=$" + txtServiceName + "$";
                _Cnsltxml += " EDIT_SERVICE_CD=$" + txtServiceCode + "$";
                _Cnsltxml += " IS_FOREIGN_SERVICE=$" + "N" + "$";
                _Cnsltxml += " SERVICE_STATUS=$" + "B" + "$";
                _Cnsltxml += " IS_EMERGENCY=$" + ISEmergency + "$";
                _Cnsltxml += " IS_EMERGNCY_PRICE=$" + hdnIsEmerPrice + "$";
                _Cnsltxml += " CNCL_HIS_ID=$" + histtype + "$";
                _Cnsltxml += " MEDICATION_ID=$" + medictype + "$";
                _Cnsltxml += " IS_TAKEN_TODAY=$" + takentoday + "$";
                _Cnsltxml += " LMP_DT=$" + lmpcal + "$";
                _Cnsltxml += " DOSAGE=$" + docageqty + "$";
                _Cnsltxml += " OTHER_MEDICATION=$" + outhermedic + "$";
                _Cnsltxml += " SPECIMEN_NAME=$" + histSpecimen + "$";
                _Cnsltxml += " SITE=$" + histsite + "$";
                _Cnsltxml += " TRF=$" + histtrf + "$";
                _Cnsltxml += " APPT_NO=$" + _apptID + "$";
                _Cnsltxml += " SLOT_ID=$" + SlotId + "$";
                if (SlotTime != " ") {
                    _Cnsltxml += " SLOT_TIME=$" + SlotTime + "$";
                }
                _Cnsltxml += " SLOT_TOKEN_NO=$" + tocken_no + "$";
                _Cnsltxml += " IS_FREE_FOLLOWUP=$" + hdn_is_free_followup + "$";
                _Cnsltxml += " REMARKS=$" + ReplaceSplCharactor(srvremarks) + "$";
                _Cnsltxml += " BILL_ID=$" + _post_cons_ref_id + "$";
                _Cnsltxml += " DOCTOR_REV_NO=$" + doc_rev_no + "$";
                _Cnsltxml += " FREE_FOLLOWUP_DOCTOR_ID=$" + ff_doc_id + "$";
                _Cnsltxml += " SESSION_ID=$" + document.getElementById('' + ctrlcom + '_HDNSESSIONID').value + "$";
                _Cnsltxml += " COMPANY_TARIFF_ID=$" + Tpa_Id + "$";
                _Cnsltxml += " APT_SLOTS_ID=$" + apt_slot_id + "$";
                _Cnsltxml += " TREATED_BY_ID=$" + hdnDoctorID + "$"; //tretedconsultant
                _Cnsltxml += " IS_CASH=$" + "N" + "$";
                _Cnsltxml += " TRN_SOURCE_ID=$" + 0 + "$";


                _Cnsltxml += " EMP_GROSS_AMT=$" + Pamt + "$";

                _Cnsltxml += " CONCESSION_AMT=$" + parseFloat(cncsn_amt) + "$";
                var empnetamtsrv = parseFloat(Pamt) - parseFloat(cncsn_amt);
                empnetamtsrv = empnetamtsrv || 0;
                _Cnsltxml += " EMP_NET_AMT=$" + empnetamtsrv + "$";


                _Cnsltxml += " DOCTOR_PCT=$" + doctor_pct + "$";
                _Cnsltxml += " ORG_PCT=$" + org_pct + "$";
                var orgamt = parseFloat(empnetamtsrv) * parseFloat(org_pct) / 100;
                orgamt = orgamt || 0;
                orgamt = Math.round(orgamt);
                var docamt = parseFloat(empnetamtsrv) - parseFloat(orgamt);
                docamt = docamt || 0;

                _Cnsltxml += " DOCTOR_PRICE=$" + docamt + "$";
                _Cnsltxml += " DOCTOR_ID=$" + hdnDoctorID + "$";
                _Cnsltxml += " ORG_PRICE=$" + orgamt + "$";


                _Cnsltxml += " CR_CMP_PCT=$" + cmp_concession_percent + "$";
                _Cnsltxml += " CR_PAT_PCT=$" + pat_concession_percent + "$";
                _Cnsltxml += " TAX_PCT=$" + 0 + "$";
                _Cnsltxml += " TAX_AMOUNT=$" + 0 + "$";
                _Cnsltxml += " SGST_PCT=$" + 0 + "$";
                _Cnsltxml += " SGST_AMOUNT=$" + 0 + "$";
                _Cnsltxml += " CGST_PCT=$" + 0 + "$";
                _Cnsltxml += " CGST_AMOUNT=$" + 0 + "$";
                _Cnsltxml += " COMPANY_BILL_HEAD_ID=$" + billinghead_id + "$";
                _Cnsltxml += " REC_TYPE_ID=$" + rec_type_id + "$";
                _Cnsltxml += " CNCSN_AUTH_ID=$" + con_auth_id + "$";
                _Cnsltxml += " CONC_RULE_ID=$" + con_rule_id + "$";
                _Cnsltxml += " UNIT_ID=$" + unit_id + "$";

                _Cnsltxml += " />";

                _recpayxml += "<FO_RECPAY_REF ";
                _recpayxml += " RECPAY_REF_ID=$" + "0" + "$";
                _recpayxml += " APPROVE_BY=$" + 0 + "$";
                _recpayxml += " APPROVE_DT=$" + '' + "$";
                _recpayxml += " AMOUNT=$" + Math.round(Conspayfee) + "$";
                if (parseFloat(Tpa_Id) > 0) {
                    _recpayxml += " REFERENCE_TYPE_ID=$" + 20 + "$";
                }
                else {
                    _recpayxml += " REFERENCE_TYPE_ID=$" + 2 + "$";
                }
                _recpayxml += " DOCTOR_ID=$" + hdnDoctorID + "$";
                _recpayxml += " PAYMENT_TYPE_ID=$" + PAYMENT_TYPE_ID + "$";
                _recpayxml += " SESSION_ID=$" + document.getElementById('' + ctrlcom + '_HDNSESSIONID').value + "$";
                var curr_id = document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnstpcurrid').value;
                _recpayxml += " CURR_ID=$" + curr_id + "$";
                _recpayxml += " TRN_SOURCE_ID=$" + 0 + "$";

                _recpayxml += " NET_GROSS_AMT=$" + (total_cons_amount) + "$";
                _recpayxml += " NET_DISCOUNT_AMT=$" + (total_cons_concession_amt) + "$";
                _recpayxml += " NET_RECEIPT_AMT=$" + (Conspayfee) + "$";
                _recpayxml += " OUTSTANDING_DUE_AMT=$" + total_cons_due_amt + "$";
                _recpayxml += " EXCESS_AMT=$" + 0 + "$";
                _recpayxml += " REC_TYPE_ID=$" + rec_type_id + "$";

                _recpayxml += "/>";

                var _xmlStr_concession = '';
                var _Xml_healthcard_string = '';
                var tothcamt = 0;
                /* Multiple Discount */
                if (document.getElementById('' + ctrlcom + '_ReceiptControl2_chkismultiple').checked == true) {
                    var staffConAmt = $(this).closest('tr').find('input[type=text][id*=txtstAmt]').val();
                    var staffConper = $(this).closest('tr').find('input[type=text][id*=txtstPer]').val();
                    var mngmtConper = $(this).closest('tr').find('input[type=text][id*=txtmaPer]').val();
                    var MngmtConAmt = $(this).closest('tr').find('input[type=text][id*=txtmgAmt]').val();
                    var ebConper = $(this).closest('tr').find('input[type=text][id*=txtebPer]').val();
                    var ebConAmt = $(this).closest('tr').find('input[type=text][id*=txtebAmt]').val();
                    var ConRuleConper = $(this).closest('tr').find('input[type=text][id*=txtRulePer]').val();
                    var ConRuleConAmt = $(this).closest('tr').find('input[type=text][id*=txtcncrlAmt]').val();
                    var HCConper = $(this).closest('tr').find('input[type=text][id*=txthcPer]').val();
                    var HCConAmt = $(this).closest('tr').find('input[type=text][id*=txtHcAmt]').val();
                    var CashConper = $(this).closest('tr').find('input[type=text][id*=txtDiscP]').val();
                    var CashConAmt = $(this).closest('tr').find('input[type=text][id*=txtDiscAmt]').val();

                    if (staffConper == '' || staffConper == undefined || staffConper == null) { staffConper = 0; }
                    if (staffConAmt == '' || staffConAmt == undefined || staffConAmt == null) { staffConAmt = 0; }
                    if (mngmtConper == '' || mngmtConper == undefined || mngmtConper == null) { mngmtConper = 0; }
                    if (MngmtConAmt == '' || MngmtConAmt == undefined || MngmtConAmt == null) { MngmtConAmt = 0; }
                    if (ebConper == '' || ebConper == undefined || ebConper == null) { ebConper = 0; }
                    if (ebConAmt == '' || ebConAmt == undefined || ebConAmt == null) { ebConAmt = 0; }
                    if (ConRuleConper == '' || ConRuleConper == undefined || ConRuleConper == null) { ConRuleConper = 0; }
                    if (ConRuleConAmt == '' || ConRuleConAmt == undefined || ConRuleConAmt == null) { ConRuleConAmt = 0; }
                    if (HCConper == '' || HCConper == undefined || HCConper == null) { HCConper = 0; }
                    if (HCConAmt == '' || HCConAmt == undefined || HCConAmt == null) { HCConAmt = 0; }
                    if (CashConper == '' || CashConper == undefined || CashConper == null) { CashConper = 0; }
                    if (CashConAmt == '' || CashConAmt == undefined || CashConAmt == null) { CashConAmt = 0; }
                    if (hdnServiceID == '' || hdnServiceID == undefined || hdnServiceID == null) { hdnServiceID = 0; }
                    if (hdnDoctorID == '' || hdnDoctorID == undefined || hdnDoctorID == null) { hdnDoctorID = 0; }

                    $("table[id*=gvMultipleConcession] tr:has(td)").each(function (e) {

                        var cncsntypeid = $(this).closest('tr').find("[id*=ddlMultiDiscounttype]").val();
                        var authid = $(this).closest('tr').find("input[type=hidden][id*=hdnauthid]").val();
                        var _ddlmodeid = $(this).closest('tr').find("[id*=ddlModes]").val();
                        var _Cardno = $(this).closest('tr').find("input[type=text][id*=txtcardno]").val();
                        var cncsremarks = $(this).closest('tr').find("input[type=text][id*=txtCRemks]").val();
                        var cncsn_rule_id = document.getElementById('' + ctrlcom + '_umrPatientDetails_hdncncsn_rule_id').value;

                        if (cncsntypeid == undefined || cncsntypeid == null || cncsntypeid == "") { cncsntypeid = 0; }
                        if (authid == undefined || authid == null || authid == '') { authid = 0; }
                        if (_ddlmodeid == undefined || _ddlmodeid == null || _ddlmodeid == '') { _ddlmodeid = 0; }
                        if (_Cardno == undefined || _Cardno == null) { _Cardno = ''; }
                        if (cncsremarks == undefined || cncsremarks == null) { cncsremarks = ''; }
                        var healthcarddetid = 0;
                        var healthcardid = 0;
                        if (_Cardno != '') {
                            healthcarddetid = document.getElementById('ctl00_ContentPlaceHolder1_umrPatientDetails_hdnhealthdepencyid').value;
                            healthcardid = document.getElementById('ctl00_ContentPlaceHolder1_umrPatientDetails_hdnhealthcard_id').value;
                        }
                        if (healthcarddetid == undefined || healthcarddetid == null || healthcarddetid == '') { healthcarddetid = "0"; }
                        if (healthcardid == undefined || healthcardid == null || healthcardid == '') { healthcardid = "0"; }
                        var _Cncs_Per = 0;
                        var _Cncs_amt = 0;
                        if (cncsntypeid == '1') {
                            _Cncs_Per = CashConper;
                            _Cncs_amt = CashConAmt;
                        }
                        else if (cncsntypeid == '2') {
                            _Cncs_Per = HCConper;
                            _Cncs_amt = HCConAmt;

                            tothcamt = HCConAmt;
                        }
                        else if (cncsntypeid == '3') {
                            _Cncs_Per = mngmtConper;
                            _Cncs_amt = MngmtConAmt;
                        }
                        else if (cncsntypeid == '4') {
                            _Cncs_Per = staffConper;
                            _Cncs_amt = staffConAmt;
                        }
                        else if (cncsntypeid == '5') {
                            _Cncs_Per = ebConper;
                            _Cncs_amt = ebConAmt;
                        }
                        else if (cncsntypeid == '6') {
                            _Cncs_Per = ConRuleConper;
                            _Cncs_amt = ConRuleConAmt;
                        }
                        if (cncsntypeid == 2) {
                            //cardid = $(this).closest('tr').find("input[type=hidden][id*=hdncardid]").val();
                            cardid = document.getElementById('ctl00_ContentPlaceHolder1_umrPatientDetails_hdncncsn_rule_id').value;
                        } else if (cncsntypeid == 5) {
                            cardid = $(this).closest('tr').find("input[type=hidden][id*=hdneventid]").val();
                        } else if (cncsntypeid == 6) {
                            cardid = $(this).closest('tr').find("input[type=hidden][id*=hdnRuleid]").val();
                        } else {
                            cardid = 0;
                        }

                        if (cncsntypeid > 0 && parseFloat(_Cncs_Per) > 0 && parseFloat(_Cncs_Per) > 0) {

                            _xmlStr_concession += "<FO_BILL_CNCSN";
                            _xmlStr_concession += " BILL_CNCSN_ID=$" + 0 + "$";
                            _xmlStr_concession += " BILL_CNCSN_REV_NO=$" + 1 + "$";
                            _xmlStr_concession += " BILL_ID=$" + "0" + "$";
                            _xmlStr_concession += " CONCESSION_TYPE_ID=$" + cncsntypeid + "$";
                            _xmlStr_concession += " CONCESSION_MODE_ID=$" + _ddlmodeid + "$";
                            _xmlStr_concession += " CONCESSION_PERCENT=$" + _Cncs_Per + "$";
                            _xmlStr_concession += " CONCESSION_AMOUNT=$" + Math.round(_Cncs_amt) + "$";
                            _xmlStr_concession += " RECORD_STATUS=$" + "A" + "$";
                            _xmlStr_concession += " CNCSN_RULE_ID=$" + cardid + "$";
                            _xmlStr_concession += " CARD_NO=$" + ReplaceSplCharactor(_Cardno) + "$";
                            _xmlStr_concession += " CNCSN_AUTH_ID=$" + authid + "$";
                            _xmlStr_concession += " CNCSN_REF_NO=$" + 0 + "$";
                            _xmlStr_concession += " REMARKS=$" + ReplaceSplCharactor(cncsremarks) + "$";
                            _xmlStr_concession += " HEALTH_CARD_DET_ID=$" + healthcarddetid + "$";
                            _xmlStr_concession += " HEALTH_CARD_ID=$" + healthcardid + "$";
                            _xmlStr_concession += " BILL_TYPE_ID=$" + "2" + "$";
                            _xmlStr_concession += "/>";

                            _xmlStr_concession += "<FO_BILL_SRV_CNCSN";
                            _xmlStr_concession += " BILL_SRV_CNCSN_ID=$" + 0 + "$";
                            _xmlStr_concession += " BILL_SRV_ID=$" + 0 + "$";
                            _xmlStr_concession += " BILL_CNCSN_ID=$" + "0" + "$";
                            _xmlStr_concession += " CONCESSION_TYPE_ID=$" + cncsntypeid + "$";
                            _xmlStr_concession += " CONCESSION_AMOUNT=$" + setProperDecimals(_Cncs_amt) + "$";
                            _xmlStr_concession += " PAT_CONC_PER=$" + CashConper + "$";
                            _xmlStr_concession += " PAT_CONC_AMT=$" + setProperDecimals(CashConAmt) + "$";
                            _xmlStr_concession += " HC_PERC=$" + HCConper + "$";
                            _xmlStr_concession += " HC_AMT=$" + setProperDecimals(HCConAmt) + "$";
                            _xmlStr_concession += " MG_PERC=$" + mngmtConper + "$";
                            _xmlStr_concession += " MG_AMT=$" + setProperDecimals(MngmtConAmt) + "$";
                            _xmlStr_concession += " STAFF_PERC=$" + staffConper + "$";
                            _xmlStr_concession += " STAFF_AMT=$" + setProperDecimals(staffConAmt) + "$";
                            _xmlStr_concession += " EB_PERC=$" + ebConper + "$";
                            _xmlStr_concession += " EB_AMT=$" + setProperDecimals(ebConAmt) + "$";
                            _xmlStr_concession += " CNCSNRULEPERC=$" + ConRuleConper + "$";
                            _xmlStr_concession += " CNCSNRULEAMT=$" + setProperDecimals(ConRuleConAmt) + "$";
                            _xmlStr_concession += " RECORD_STATUS=$" + 'A' + "$";
                            _xmlStr_concession += " SERVICE_ID=$" + hdnServiceID + "$";
                            _xmlStr_concession += " DOCTOR_ID=$" + hdnDoctorID + "$";
                            _xmlStr_concession += " CONCESSION_PERCENT=$" + _Cncs_Per + "$";
                            _xmlStr_concession += "/>";
                        }
                    });
                }
                else if (document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlDiscountType').value == 1) {
                    /* single discount */
                    var CashConper = $(this).closest('tr').find('input[type=text][id*=txtDiscP]').val();
                    var CashConAmt = $(this).closest('tr').find('input[type=text][id*=txtDiscAmt]').val();
                    if (CashConper == '' || CashConper == undefined || CashConper == null) { CashConper = 0; }
                    if (CashConAmt == '' || CashConAmt == undefined || CashConAmt == null) { CashConAmt = 0; }
                    if (hdnServiceID == '' || hdnServiceID == undefined || hdnServiceID == null) { hdnServiceID = 0; }
                    if (hdnDoctorID == '' || hdnDoctorID == undefined || hdnDoctorID == null) { hdnDoctorID = 0; }
                    var sing_disc_auth = $('#' + ctrlcom + '_ReceiptControl2_ucdueauth__hiddenID').val();
                    if (sing_disc_auth == undefined || sing_disc_auth == null || sing_disc_auth == '' || sing_disc_auth == 'undefined') { sing_disc_auth = 0; }
                    Con_Remarks = ReplaceSplCharactor($('#' + ctrlcom + '_ReceiptControl2_txtRemarks').val());
                    if (parseFloat(CashConper) > 0 && parseFloat(CashConAmt) > 0) {
                        _xmlStr_concession += "<FO_BILL_CNCSN";
                        _xmlStr_concession += " BILL_CNCSN_ID=$" + 0 + "$";
                        _xmlStr_concession += " BILL_CNCSN_REV_NO=$" + 1 + "$";
                        _xmlStr_concession += " BILL_ID=$" + "0" + "$";
                        _xmlStr_concession += " CONCESSION_TYPE_ID=$" + 1 + "$";
                        _xmlStr_concession += " CONCESSION_MODE_ID=$" + 1 + "$";
                        _xmlStr_concession += " CONCESSION_PERCENT=$" + CashConper + "$";
                        _xmlStr_concession += " CONCESSION_AMOUNT=$" + Math.round(CashConAmt) + "$";
                        _xmlStr_concession += " RECORD_STATUS=$" + "A" + "$";
                        _xmlStr_concession += " CNCSN_RULE_ID=$" + 0 + "$";
                        _xmlStr_concession += " CARD_NO=$" + "" + "$";
                        _xmlStr_concession += " CNCSN_AUTH_ID=$" + sing_disc_auth + "$";
                        _xmlStr_concession += " CNCSN_REF_NO=$" + 0 + "$";
                        _xmlStr_concession += " REMARKS=$" + ReplaceSplCharactor(Con_Remarks) + "$";
                        _xmlStr_concession += " BILL_TYPE_ID=$" + "2" + "$";
                        _xmlStr_concession += "/>";

                        _xmlStr_concession += "<FO_BILL_SRV_CNCSN";
                        _xmlStr_concession += " BILL_SRV_CNCSN_ID=$" + 0 + "$";
                        _xmlStr_concession += " BILL_SRV_ID=$" + 0 + "$";
                        _xmlStr_concession += " BILL_CNCSN_ID=$" + "0" + "$";
                        _xmlStr_concession += " CONCESSION_TYPE_ID=$" + 1 + "$";
                        _xmlStr_concession += " CONCESSION_AMOUNT=$" + setProperDecimals(CashConAmt) + "$";
                        _xmlStr_concession += " PAT_CONC_PER=$" + CashConper + "$";
                        _xmlStr_concession += " PAT_CONC_AMT=$" + setProperDecimals(CashConAmt) + "$";
                        _xmlStr_concession += " HC_PERC=$" + 0 + "$";
                        _xmlStr_concession += " HC_AMT=$" + 0 + "$";
                        _xmlStr_concession += " MG_PERC=$" + 0 + "$";
                        _xmlStr_concession += " MG_AMT=$" + 0 + "$";
                        _xmlStr_concession += " STAFF_PERC=$" + 0 + "$";
                        _xmlStr_concession += " STAFF_AMT=$" + 0 + "$";
                        _xmlStr_concession += " EB_PERC=$" + 0 + "$";
                        _xmlStr_concession += " EB_AMT=$" + 0 + "$";
                        _xmlStr_concession += " CNCSNRULEPERC=$" + 0 + "$";
                        _xmlStr_concession += " CNCSNRULEAMT=$" + 0 + "$";
                        _xmlStr_concession += " RECORD_STATUS=$" + 'A' + "$";
                        _xmlStr_concession += " SERVICE_ID=$" + hdnServiceID + "$";
                        _xmlStr_concession += " DOCTOR_ID=$" + hdnDoctorID + "$";
                        _xmlStr_concession += " CONCESSION_PERCENT=$" + CashConper + "$";
                        _xmlStr_concession += "/>";
                    }
                }

                //                var moudiscPer = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpartydis').value;
                //                var moudiscAmt = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpartygrossamt').value;
                var mouauthid = document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnPartyDiscAuthId').value;
                var mouauthname = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtDiscAuthPartyName').value;

                if (parseFloat(Cmp_Disc_Pcnt) > 0 && parseFloat(Cmp_Disc_Amt) > 0) {
                    _xmlStr_concession += "<FO_BILL_CNCSN";
                    _xmlStr_concession += " BILL_CNCSN_ID=$" + 0 + "$";
                    _xmlStr_concession += " BILL_CNCSN_REV_NO=$" + 1 + "$";
                    _xmlStr_concession += " BILL_ID=$" + "0" + "$";
                    _xmlStr_concession += " CONCESSION_TYPE_ID=$" + 17 + "$";
                    _xmlStr_concession += " CONCESSION_MODE_ID=$" + 1 + "$";
                    _xmlStr_concession += " CONCESSION_PERCENT=$" + Cmp_Disc_Pcnt + "$";
                    _xmlStr_concession += " CONCESSION_AMOUNT=$" + Math.round(Cmp_Disc_Amt) + "$";
                    _xmlStr_concession += " RECORD_STATUS=$" + "A" + "$";
                    _xmlStr_concession += " CNCSN_RULE_ID=$" + 0 + "$";
                    _xmlStr_concession += " CARD_NO=$" + '' + "$";
                    _xmlStr_concession += " CNCSN_AUTH_ID=$" + mouauthid + "$";
                    _xmlStr_concession += " CNCSN_REF_NO=$" + 0 + "$";
                    _xmlStr_concession += " REMARKS=$" + ReplaceSplCharactor(mouauthname) + "$";
                    _xmlStr_concession += "/>";

                    _xmlStr_concession += "<FO_BILL_SRV_CNCSN";
                    _xmlStr_concession += " BILL_SRV_CNCSN_ID=$" + 0 + "$";
                    _xmlStr_concession += " BILL_SRV_ID=$" + 0 + "$";
                    _xmlStr_concession += " BILL_CNCSN_ID=$" + "0" + "$";
                    _xmlStr_concession += " CONCESSION_TYPE_ID=$" + 17 + "$";
                    _xmlStr_concession += " MOU_DISCOUNT=$" + Math.round(Cmp_Disc_Amt) + "$";
                    _xmlStr_concession += " RECORD_STATUS=$" + 'A' + "$";
                    _xmlStr_concession += " SERVICE_ID=$" + hdnServiceID + "$";
                    _xmlStr_concession += " DOCTOR_ID=$" + hdnDoctorID + "$";
                    _xmlStr_concession += " CONCESSION_PERCENT=$" + Cmp_Disc_Pcnt + "$";
                    _xmlStr_concession += "/>";
                }


                _Cnsltxml += _xmlStr_concession;
                BType = 'C';
                var _xmlreferal = '';
                if (document.getElementById('' + ctrlcom + '_chk_old').checked && referral_save_count == '') {

                    _xmlreferal = ReferralSave(BType);
                    if (_xmlreferal == '') {
                        $(".stoast").toastText("Warning", "Referal Root is missed. Please check referal details", 5, 3);
                        document.getElementById('ctl00_ContentPlaceHolder1_txtSSN').focus();
                        $('#progress').hide();
                        return false;
                    }

                    else
                        _Cnsltxml += _xmlreferal;
                }



                var hcid = '';
                var hcNo = '';
                var form_name = document.getElementById('' + ctrlcom + '_UCServices_hdnSrvFormName').value;
                if (form_name == 'OP' || form_name == 'Cons') {
                    hcid = document.getElementById('' + ctrlcom + '_umrPatientDetails_HdnHealthcardid').value;
                    hcNo = document.getElementById('' + ctrlcom + '_umrPatientDetails_HdnHealthcardno').value;
                }
                else if (form_name == 'OPQUICK') {
                    if (document.getElementById('ctl00_ContentPlaceHolder1_chkhccrd').checked == true) {
                        hcid = $('#' + ctrlcom + '_Address1_uchccrdtype__hiddenID').val();
                        hcNo = document.getElementById('ctl00_ContentPlaceHolder1_lblhcnon').innerHTML;

                    }
                    else {
                        hcid = document.getElementById('' + ctrlcom + '_ReceiptControl2_HdnHealthcardid').value;
                        hcNo = document.getElementById('' + ctrlcom + '_ReceiptControl2_HdnHealthcardno').value;
                    }
                }
                var cncsnruleid = document.getElementById('ctl00_ContentPlaceHolder1_umrPatientDetails_hdncncsn_rule_id').value;
                var eligibity_amt = document.getElementById('ctl00_ContentPlaceHolder1_umrPatientDetails_hdnhealthcardeligibleamt').value;
                var depencyid = document.getElementById('ctl00_ContentPlaceHolder1_umrPatientDetails_hdnhealthdepencyid').value
                hcid = hcid == '' ? 0 : hcid;
                hcNo = hcNo == '' ? 0 : hcNo;

                if (cncsnruleid == undefined || cncsnruleid == null || cncsnruleid == '') { cncsnruleid = "0"; }
                if (eligibity_amt == undefined || eligibity_amt == null || eligibity_amt == '') { eligibity_amt = "0"; }
                if (depencyid == undefined || depencyid == null || depencyid == '') { depencyid = "0"; }
                var healthcardid = document.getElementById('ctl00_ContentPlaceHolder1_umrPatientDetails_hdnhealthcard_id').value;
                if (healthcardid == undefined || healthcardid == null || healthcardid == '') { healthcardid = "0"; }
                if (document.getElementById('' + ctrlcom + '_ReceiptControl2_chkismultiple').checked == true && hcid > 0) {


                    _Xml_healthcard_string += "<HEALTHCARD_USAGE_TRAN ";
                    _Xml_healthcard_string += " UMR_NO=$" + UmrNO + "$";
                    _Xml_healthcard_string += " DEPENDENCY_ID=$" + depencyid + "$";
                    _Xml_healthcard_string += " GROSS_AMOUNT=$" + Math.round(total_cons_amount) + "$";
                    _Xml_healthcard_string += " CONCESSION_AMOUNT=$" + setProperDecimals(tothcamt) + "$";
                    _Xml_healthcard_string += " NET_AMOUNT=$" + setProperDecimals(total_cons_net_amt) + "$";
                    _Xml_healthcard_string += " ON_CARD_AMT=$" + eligibity_amt + "$";
                    _Xml_healthcard_string += " CNCSN_RULE_ID=$" + cncsnruleid + "$";
                    _Xml_healthcard_string += " HEALTH_CARD_NO=$" + hcNo + "$";
                    _Xml_healthcard_string += " HEALTHCARD_TRAN_ID=$" + healthcardid + "$";
                    _Xml_healthcard_string += "  />"
                }



                _Cnsltxml += _Xml_healthcard_string;





                /* not required commented by pushkar */
                _Cnsltxml += "</root>";
            }
        }
    });
    return _Cnsltxml;

}

function OPDFOBILLROOT(UmrNO, hdnDoctorID, txtamount, txtDiscAmt, txtDiscPer, txtnetamt, OPpayfee, OPpaydue, Cmp_Id, Tpa_Id, _reg_id, ind_net_amount) {
    if (parseFloat(txtamount) > 0) { } else { txtamount = 0; }
    if (parseFloat(txtDiscAmt) > 0) { } else { txtDiscAmt = 0; }
    if (parseFloat(txtnetamt) > 0) { } else { txtnetamt = 0; }
    if (parseFloat(OPpayfee) > 0) { } else { OPpayfee = 0; }
    var rec_type_id = 0;
    if (document.getElementById('ctl00_hdnIsMedClg').value == "TRUE") {
        rec_type_id = $('input[id*=radiousertran]:checked').val()
        if (rec_type_id == 0 || rec_type_id == null || rec_type_id == undefined) { rec_type_id = 1; }
    }
    else { rec_type_id = 1; }

    var error_OPbill_net_amount = 0;
    if (parseFloat(txtnetamt) > parseFloat(ind_net_amount)) {
        error_OPbill_net_amount = -Math.abs(parseFloat(txtnetamt) - parseFloat(ind_net_amount));
    }
    else {
        error_OPbill_net_amount = parseFloat(ind_net_amount) - parseFloat(txtnetamt);
    }
    if (error_OPbill_net_amount == undefined || error_OPbill_net_amount == null || error_OPbill_net_amount == '') { error_OPbill_net_amount = 0; }

    txtnetamt = parseFloat(txtamount) - parseFloat(txtDiscAmt);

    if (error_OPbill_net_amount == '0.5' || error_OPbill_net_amount == '-0.5')
    { txtnetamt = parseFloat(txtnetamt) - parseFloat(0.2); }
    var ptaxamt = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatTotTax').value;
    OPpaydue = (parseFloat(txtnetamt) + Math.round(parseFloat(ptaxamt))) - parseFloat(OPpayfee);

    var _OPDxml = '';
    var rfltrid = document.getElementById('' + ctrlcom + '_uccorporate_ucRefLetterNo__hiddenID').value;
    if (rfltrid == '' || rfltrid == null || rfltrid == undefined) { rfltrid = '0'; }
    var regdocid = document.getElementById('' + ctrlcom + '_ucConsultant__hiddenID').value;
    var _dispatchID = document.getElementById('' + ctrlcom + '_UCServices_divrptDispatch').value;
    if (_dispatchID == undefined || _dispatchID == null || _dispatchID == '') { _dispatchID = 0; }
    if (lblquick.className == "select") {
        PAYMENT_TYPE_ID = 2;
    } else if (lbladvanced.className == "select") {
        PAYMENT_TYPE_ID = 1;
    }
    var DueAuth_Id = document.getElementById('' + ctrlcom + '_ReceiptControl2_Search3__hiddenID').value;
    if (DueAuth_Id == undefined || DueAuth_Id == null || DueAuth_Id == '') { DueAuth_Id = '0'; }
    var ConAuth_Id = document.getElementById('' + ctrlcom + '_ReceiptControl2_ucdueauth__hiddenID').value;
    if (ConAuth_Id == undefined || ConAuth_Id == null || ConAuth_Id == '') { ConAuth_Id = '0'; }
    if (hdnDoctorID != '' && hdnDoctorID != 0 && hdnDoctorID != null) {
        hdnDoctorID = hdnDoctorID;
    }
    else if (regdocid != '' && regdocid != 0 && regdocid != null) {
        hdnDoctorID = regdocid;
    }
    else {
        hdnDoctorID = $('#' + ctrlcom + '_UcOdrPsyn__hiddenID').val()
    }
    var total_bill_amount = parseFloat(txtamount) + parseFloat(b_cmp_grs_amt);
    var total_net = parseFloat(total_bill_amount) - parseFloat(txtDiscAmt);
    var total_bill_concession_amt = parseFloat(txtDiscAmt) + parseFloat(b_cmp_cnc_amt);
    var total_bill_due_amt = parseFloat(OPpaydue) + parseFloat(b_cmp_net);
    var total_bill_net_amt = parseFloat(txtnetamt) + parseFloat(b_cmp_net);
    var total_bill_concession_pct = (parseFloat(total_bill_concession_amt) * 100) / parseFloat(total_bill_amount);
    if (parseFloat(total_bill_amount) > 0) { } else { total_bill_amount = 0; }
    if (parseFloat(total_bill_concession_amt) > 0) { } else { total_bill_concession_amt = 0; }
    if (parseFloat(total_bill_due_amt) > 0) { } else { total_bill_due_amt = 0; }
    if (parseFloat(total_bill_net_amt) > 0) { } else { total_bill_net_amt = 0; }
    if (parseFloat(total_bill_concession_pct) > 0) { } else { total_bill_concession_pct = 0; }
    var patient_type_id = document.getElementById('' + ctrlcom + '_ddlPatientType').value;
    if (patient_type_id == undefined || patient_type_id == null || patient_type_id == '') { patient_type_id = '1'; }

    if (document.getElementById('' + ctrlcom + '_chk_old').checked == true) {
        if (document.getElementById('' + ctrlcom + '_uccorporate_ddlPaymentBy').value == '1') {
            var pat_cat = document.getElementById('' + ctrlcom + '_UCServices_ddlpatcat').value;
        } else if (document.getElementById('' + ctrlcom + '_uccorporate_ddlPaymentBy').value == '2') {
            var pat_cat = $('[id*=hdnforeigncatid]').val();

        }
    }
    else {
        var pat_cat = document.getElementById('' + ctrlcom + '_UCServices_ddlpatcat').value;
    }
    if (pat_cat == undefined || pat_cat == null || pat_cat == '' || pat_cat == '--Select--') { pat_cat = "0"; }
    tax_amount = $('#' + ctrlcom + '_ReceiptControl2_txttaxamt').val();
    sgst_tax_amt = $('#' + ctrlcom + '_ReceiptControl2_hdnTotalSgstAmount').val();
    cgst_tax_amt = $('#' + ctrlcom + '_ReceiptControl2_hdnTotalCgstAmount').val();
    CMP_TAX_AMT = $('#' + ctrlcom + '_ReceiptControl2_txtcmpTotTax').val();
    if (CMP_TAX_AMT == undefined || CMP_TAX_AMT == null || CMP_TAX_AMT == '') { CMP_TAX_AMT = "0"; }
    var PAT_TAX_AMT = $('#' + ctrlcom + '_ReceiptControl2_txtpatTotTax').val();
    if (PAT_TAX_AMT == undefined || PAT_TAX_AMT == null || PAT_TAX_AMT == '') { PAT_TAX_AMT = "0"; }
    if (tax_amount == undefined || tax_amount == null || tax_amount == '') { tax_amount = "0"; }
    if (sgst_tax_amt == undefined || sgst_tax_amt == null || sgst_tax_amt == '' || sgst_tax_amt == NaN) { sgst_tax_amt = "0"; }
    if (cgst_tax_amt == undefined || cgst_tax_amt == null || cgst_tax_amt == '' || cgst_tax_amt == NaN) { cgst_tax_amt = "0"; }
    var cmppersave = document.getElementById('' + ctrlcom + '_txtCorpPercentage').value;
    var emppersave = document.getElementById('' + ctrlcom + '_txtEmpPercentage').value;
    if (cmppersave == undefined || cmppersave == null || cmppersave == '') { cmppersave = "0"; }
    if (emppersave == undefined || emppersave == null || emppersave == '') { emppersave = "0"; }
    cmppersave = setProperDecimals(cmppersave);
    emppersave = setProperDecimals(emppersave);
    var Diagnosis_id = document.getElementById('ctl00_ContentPlaceHolder1_UcDiagnosis__hiddenID').value;
    if (Diagnosis_id == undefined || Diagnosis_id == null || Diagnosis_id == '') { Diagnosis_id = "0"; }
    _OPDxml += "<FO_BILL"
    _OPDxml += " BILL_ID=$" + "0" + "$";
    _OPDxml += " BILL_DT=$" + "" + "$";
    _OPDxml += " UMR_NO=$" + UmrNO + "$";
    _OPDxml += " ADMN_NO=$" + 0 + "$";
    if (parseFloat(Tpa_Id) > 0) {

        _OPDxml += " BILL_TYPE_ID=$" + 17 + "$";
    }
    else if (document.getElementById('' + ctrlcom + '_pre_regi').value == '5') {
        _OPDxml += " BILL_TYPE_ID=$" + 15 + "$";
    }
    else {
        _OPDxml += " BILL_TYPE_ID=$" + 7 + "$";
    }
    if (myMultiDatar1 != '') {
        _OPDxml += " REFERAL_SOURCE_ID=$" + myMultiDatar1[0]["Refrl_class_id"] + "$";
        _OPDxml += " REFERAL_DOCTOR_ID=$" + myMultiDatar1[0]["id"] + "$";
        _OPDxml += " REFERAL_NAME=$" + ReplaceSplCharactor(myMultiDatar1[0]["Name"]) + "$";
        _OPDxml += " REFERAL_TYPE_ID=$" + myMultiDatar1[0]["Source"] + "$";
        _OPDxml += " REFERAL_REF_ID=$" + myMultiDatar1[0]["RfrlTo_Id"] + "$";
    }
    _OPDxml += " DOCTOR_ID=$" + hdnDoctorID + "$";
    _OPDxml += " EMPLOYEE_ID=$" + 0 + "$";
    if (patient_type_id == '1') {
        _OPDxml += " CREDIT_TYPE_ID=$" + '1' + "$";
    }
    else {
        _OPDxml += " CREDIT_TYPE_ID=$" + '2' + "$";
    }
    _OPDxml += " CONCESSION_ON_ID=$" + 0 + "$";
    _OPDxml += " CONCESSION_MODE_ID=$" + 1 + "$";
    _OPDxml += " CONCESSION_TYPE_ID=$" + 0 + "$";
    _OPDxml += " CONCESSION_TO_ID=$" + 0 + "$";
    _OPDxml += " CONCESSION=$" + total_bill_concession_pct + "$";
    _OPDxml += " BILLCONCESSION_AUTH_ID=$" + ConAuth_Id + "$";
    //    if (DueAuth_Id > 0)
    //    {
    _OPDxml += " DUE_AUTH_ID=$" + DueAuth_Id + "$"; //}
    //    else {
    //        _OPDxml += " DUE_AUTH_ID=$" + 0 + "$";
    //    }
    _OPDxml += " COMPANY_DUE=$" + Math.round(b_cmp_net) + "$";
    _OPDxml += " COMPANY_DUE_AUTH_ID=$" + 0 + "$";
    _OPDxml += " COMPANY_CONCESSION_AMOUNT=$" + Math.round(b_cmp_cnc_amt) + "$";
    _OPDxml += " COMPANY_AMOUNT=$" + Math.round(b_cmp_grs_amt) + "$";
    _OPDxml += " DUE_VERIFY_ID=$" + 0 + "$";
    _OPDxml += " DUE_VERIFY_DT=$" + '' + "$";
    _OPDxml += " DUE_APPROVE_ID=$" + 0 + "$";
    _OPDxml += " DUE_APPROVE_DT=$" + '' + "$";
    _OPDxml += " DUE_AUTH_DT=$" + '' + "$";
    _OPDxml += " CONCESSION_VERIFY_ID=$" + 0 + "$";
    _OPDxml += " CONCESSION_VERIFY_DT=$" + '' + "$";
    _OPDxml += " CONCESSION_APPROVE_ID=$" + 0 + "$";
    _OPDxml += " CONCESSION_APPROVE_DT=$" + '' + "$";
    _OPDxml += " CONCESSION_AUTH_ID=$" + ConAuth_Id + "$";
    _OPDxml += " CONCESSION_AUTH_DT=$" + '' + "$";
    _OPDxml += " PRINT_COUNT=$" + 0 + "$";
    fobillamount += setProperDecimals(OPpayfee);
    _OPDxml += " BILL_AMOUNT=$" + Math.round(parseFloat(total_bill_amount) + Math.round(parseFloat(tax_amount))) + "$";
    _OPDxml += " CONCESSION_AMOUNT=$" + Math.round(total_bill_concession_amt) + "$";
    _OPDxml += " NET_AMOUNT=$" + Math.round(parseFloat(total_bill_net_amt) + Math.round(parseFloat(ptaxamt))) + "$";
    _OPDxml += " PAID_AMOUNT=$" + setProperDecimals(OPpayfee) + "$";
    _OPDxml += " ADVANCE_AMOUNT=$" + 0 + "$";
    _OPDxml += " DUE_AMOUNT=$" + Math.round(total_bill_due_amt) + "$";
    _OPDxml += " DUE_RECOVERED=$" + 0 + "$";
    _OPDxml += " OUTSTANDING_DUE=$" + Math.round(total_bill_due_amt) + "$";

    _OPDxml += " PAT_DUE_AMT=$" + setProperDecimals(OPpaydue) + "$";
    _OPDxml += " PAT_GROSS_AMT=$" + Math.round(parseFloat(txtamount) + Math.round(parseFloat(PAT_TAX_AMT))) + "$";
    _OPDxml += " PAT_NET_AMT=$" + Math.round(parseFloat(txtnetamt) + Math.round(parseFloat(ptaxamt))) + "$";
    _OPDxml += " PAT_PAID_AMT=$" + setProperDecimals(OPpayfee) + "$";
    _OPDxml += " POST_DISCOUNT=$" + 0 + "$";
    _OPDxml += " TOTAL_DISCOUNT=$" + Math.round(total_bill_concession_amt) + "$";
    _OPDxml += " CANCEL_AMOUNT=$" + 0 + "$";
    _OPDxml += " REFUND_AMOUNT=$" + 0 + "$";
    _OPDxml += " EXCESS_AMOUNT=$" + 0 + "$";
    _OPDxml += " CA_BILL_AMT=$" + 0 + "$";
    _OPDxml += " CMP_CNCSN_AMT=$" + Math.round(b_cmp_cnc_amt) + "$";
    if (parseFloat(OPpaydue) > 0 && document.getElementById('' + ctrlcom + '_hdnisassestreq').value == "True" && document.getElementById('' + ctrlcom + '_ChkAssesment').checked) {
        _OPDxml += " RECORD_STATUS=$" + "P" + "$";
    }
    else {
        _OPDxml += " RECORD_STATUS=$" + 'A' + "$";
    }
    if (parseInt(Tpa_Id) > 0) {
        var cmp_pay = $('#' + ctrlcom + '_txtCorpPercentage').val();
        var emp_pay = $('#' + ctrlcom + '_txtEmpPercentage').val();
        if (parseFloat(cmp_pay) > 0) { } else { cmp_pay = 0; }
        if (parseFloat(emp_pay) > 0) { } else { emp_pay = 0; }
        _OPDxml += " CMP_CNCSN_PCT=$" + "0" + "$";
        _OPDxml += " PAT_CNCSN_PCT=$" + txtDiscPer + "$";
    }
    else {
        _OPDxml += " CMP_CNCSN_PCT=$" + "0" + "$";
        _OPDxml += " PAT_CNCSN_PCT=$" + txtDiscPer + "$";
    }
    /*_OPDxml += " CMP_CNCSN_PCT=$" + b_cmp_pct + "$";*/
    _OPDxml += " CMP_DUE_AMT=$" + Math.round(b_cmp_net) + "$";
    _OPDxml += " CMP_GROSS_AMT=$" + Math.round(parseFloat(b_cmp_grs_amt) + Math.round(parseFloat(CMP_TAX_AMT))) + "$";
    _OPDxml += " CMP_NET_AMT=$" + Math.round(parseFloat(b_cmp_net) + Math.round(parseFloat(CMP_TAX_AMT))) + "$";
    _OPDxml += " CMP_PAID_AMT=$" + 0 + "$";
    _OPDxml += " CMP_TAX_AMT=$" + CMP_TAX_AMT + "$";
    _OPDxml += " CMP_TAX_PCT=$" + 0 + "$";
    _OPDxml += " CR_BILL_AMT=$" + 0 + "$";
    _OPDxml += " CR_CMP_AMT=$" + 0 + "$";
    _OPDxml += " CR_CMP_PCT=$" + cmppersave + "$";
    _OPDxml += " CR_PAT_AMT=$" + 0 + "$";
    _OPDxml += " CR_PAT_PCT=$" + emppersave + "$";
    _OPDxml += " EXC_PHA_AMT=$" + 0 + "$";
    _OPDxml += " GROSS_PHA_AMT=$" + 0 + "$";
    _OPDxml += " INC_PHA_AMT=$" + 0 + "$";
    _OPDxml += " IS_DSCHRG_WITHOUT_BILL=$" + 0 + "$";
    _OPDxml += " PAT_CNCSN_AMT=$" + Math.round(txtDiscAmt) + "$";
    /*_OPDxml += " PAT_CNCSN_PCT=$" + 0 + "$";*/
    _OPDxml += " PAT_TAX_AMT=$" + Math.round(PAT_TAX_AMT) + "$";
    _OPDxml += " PAT_TAX_PCT=$" + 0 + "$";
    _OPDxml += " PERFORMED_PROCS=$" + 0 + "$";
    _OPDxml += " PKG_BILL_AMT=$" + 0 + "$";
    _OPDxml += " PKG_CNCSN_AMT=$" + 0 + "$";
    _OPDxml += " PKG_DUE_AMT=$" + 0 + "$";
    _OPDxml += " PKG_EXC_AMT=$" + 0 + "$";
    _OPDxml += " PKG_GROSS_AMT=$" + 0 + "$";
    _OPDxml += " PKG_INC_AMT=$" + 0 + "$";
    _OPDxml += " PKG_NET_AMT=$" + 0 + "$";
    _OPDxml += " PKG_PAID_AMT=$" + 0 + "$";
    _OPDxml += " PKG_POSTDSC_AMT=$" + 0 + "$";
    _OPDxml += " REMARKS=$" + 0 + "$";
    _OPDxml += " IS_SHINK=$" + 0 + "$";
    _OPDxml += " PKG_TOTAL_RECEIVED_AMT=$" + 0 + "$";
    _OPDxml += " REF_ID=$" + 0 + "$";
    _OPDxml += " ACC_CMP_ID=$" + 0 + "$";
    _OPDxml += " ACC_CMP_AMT=$" + 0 + "$";
    _OPDxml += " ACC_CMP_PCT=$" + 0 + "$";
    _OPDxml += " ACC_CMP_LVL_ID=$" + 0 + "$";
    _OPDxml += " IS_REFERAL=$" + 0 + "$";
    _OPDxml += " PKG_EXCESS_AMT=$" + 0 + "$";
    //  _OPDxml += " APPROVE_BY=$" + 0 + "$";
    //  _OPDxml += " APPROVE_DT=$" + '' + "$";
    _OPDxml += " PCKG_CONV_ID=$" + 0 + "$";
    _OPDxml += " PAT_EXCESS_AMT=$" + 0 + "$";
    _OPDxml += " CMPNY_REFERAL_LETTER_ID=$" + rfltrid + "$";
    _OPDxml += " PREREFUND=$" + 0 + "$";
    _OPDxml += " CORP_ADMN_DT=$" + '' + "$";
    _OPDxml += " CORP_DISCHR_DT=$" + '' + "$";
    _OPDxml += " PATIENT_CLASS_ID=$" + 0 + "$";
    _OPDxml += " OLD_BILL_TYPE_ID=$" + 0 + "$";
    _OPDxml += " PATIENT_TYPE_ID=$" + patient_type_id + "$";
    _OPDxml += " PKG_RFND_AMT=$" + 0 + "$";
    _OPDxml += " PACKAGE_STATUS=$" + 0 + "$";
    _OPDxml += " CMP_OUTSTANDING_DUE=$" + Math.round(b_cmp_net) + "$";
    _OPDxml += " CMP_DUE_RECOVERED=$" + 0 + "$";
    _OPDxml += " DISALLOWANCE_AMT=$" + 0 + "$";
    _OPDxml += " TDS_AMT=$" + 0 + "$";
    _OPDxml += " IS_CORP_APPBILL=$" + 0 + "$";
    _OPDxml += " SAMPLE_COLLETED_DATE=$" + "" + "$";
    _OPDxml += " CLINLICAL_SUMMARY=$" + 0 + "$";
    _OPDxml += " DISC_REQ_REASON=$" + 0 + "$";
    _OPDxml += " PKG_EF_FRM_TODT=$" + '' + "$";
    _OPDxml += " PKG_DUE_RECOVERED=$" + 0 + "$";
    _OPDxml += " CLINLICAL_SUMMARY_FILE=$" + 0 + "$";
    _OPDxml += " REFERAL_CUSTMER=$" + 0 + "$";
    _OPDxml += " EMP_NARATION=$" + 0 + "$";
    _OPDxml += " CNCSN_NARATION=$" + 0 + "$";
    _OPDxml += " IS_POST_CONSULT=$" + 0 + "$";
    if (document.getElementById('' + ctrlcom + '_pre_regi').value == '5') { _OPDxml += " BILL_NO=$" + document.getElementById('' + ctrlcom + '_TxtOspNO').value + "$"; }
    else {
        _OPDxml += " BILL_NO=$" + 0 + "$";
    }
    _OPDxml += " REFERAL_CUSTOMER_ID=$" + 0 + "$";
    _OPDxml += " CENTER_ID=$" + 0 + "$";
    var Token_no = $('[id*=ddlToken]').find('option:selected').text();
    if (Token_no == undefined || Token_no == null || Token_no == 'select') { Token_no = ''; }
    _OPDxml += " TOKEN_NO=$" + Token_no + "$";
    _OPDxml += " REG_CONS_BILL_ID=$" + 0 + "$";
    _OPDxml += " REG_ID=$" + _reg_id + "$";

    _OPDxml += " CMP_ID=$" + Cmp_Id + "$";
    _OPDxml += " TPA_ID=$" + Tpa_Id + "$";
    _OPDxml += " BILL_TYPE_REV_NO=$" + '1' + "$";
    _OPDxml += " REFERAL_SOURCE_REV_NO=$" + 1 + "$";
    _OPDxml += " REFERAL_TYPE_REV_NO=$" + 1 + "$";
    _OPDxml += " REFERAL_DOCTOR_REV_NO=$" + "1" + "$";
    _OPDxml += " REFERAL_REF_REV_NO=$" + "1" + "$";
    _OPDxml += " DOCTOR_REV_NO=$" + 1 + "$";
    _OPDxml += " EMPLOYEE_REV_NO=$" + 1 + "$";
    _OPDxml += " CREDIT_TYPE_REV_NO=$" + 1 + "$";
    _OPDxml += " CONCESSION_ON_REV_NO=$" + 1 + "$";
    _OPDxml += " CONCESSION_MODE_REV_NO=$" + "1" + "$";
    _OPDxml += " CONCESSION_TYPE_REV_NO=$" + "1" + "$";
    _OPDxml += " CONCESSION_AUTH_REV_NO=$" + "1" + "$";
    _OPDxml += " DUE_AUTH_REV_NO=$" + "1" + "$";
    _OPDxml += " ACC_CMP_REV_NO=$" + 1 + "$";
    _OPDxml += " ACC_CMP_LVL_REV_NO=$" + 1 + "$";
    _OPDxml += " GRP_REV_NO=$" + 1 + "$";
    _OPDxml += " ORG_REV_NO=$" + "1" + "$";
    if (document.getElementById('' + ctrlcom + '_pre_regi').value == '5') {
        _OPDxml += " BILL_TYPE=$" + "OSB" + "$";
    }
    else {
        _OPDxml += " BILL_TYPE=$" + "OPB" + "$";
    }

    _OPDxml += " REPORT_DISPATCH_ID=$" + _dispatchID + "$";
    _OPDxml += " SESSION_ID=$" + document.getElementById('' + ctrlcom + '_HDNSESSIONID').value + "$";
    _OPDxml += " ROUND_ERR=$" + error_OPbill_net_amount + "$";
    _OPDxml += " EXCESS_AMT=$" + 0 + "$";
    _OPDxml += " TRN_SOURCE_ID=$" + 0 + "$";
    _OPDxml += " DMS_UPLOAD=$" + 'N' + "$";
    _OPDxml += " TRN_DOCUMENT_ID=$" + $('[id*=hdnSessionDocId]').val() + "$";
    _OPDxml += " DOCTOR_TYPE=$" + 'I' + "$";
    _OPDxml += " FOREIGN_CATEGORY_ID=$" + pat_cat + "$";
    _OPDxml += " GST_AMOUNT=$" + setProperDecimals(Math.round(tax_amount)) + "$";
    _OPDxml += " NET_AMOUNT_EXC_GST=$" + setProperDecimals(total_net) + "$";
    _OPDxml += " BILL_AMOUNT_EXC_GST=$" + setProperDecimals(total_bill_amount) + "$";
    _OPDxml += " SGST_AMOUNT=$" + setProperDecimals(sgst_tax_amt) + "$";
    _OPDxml += " CGST_AMOUNT=$" + setProperDecimals(cgst_tax_amt) + "$";
    _OPDxml += " REC_TYPE_ID=$" + rec_type_id + "$";
    _OPDxml += " DIAGNOSIS_ID =$" + Diagnosis_id + "$";
    _OPDxml += " />";

    _recpayxml += "<FO_RECPAY_REF ";
    _recpayxml += " RECPAY_REF_ID=$" + "0" + "$";
    _recpayxml += " APPROVE_BY=$" + 0 + "$";
    _recpayxml += " APPROVE_DT=$" + '' + "$";
    _recpayxml += " AMOUNT=$" + Math.round(OPpayfee) + "$";
    if (parseFloat(Tpa_Id) > 0) {
        _recpayxml += " REFERENCE_TYPE_ID=$" + 17 + "$";
    }
    else if (document.getElementById('' + ctrlcom + '_pre_regi').value == '5') {
        _recpayxml += " REFERENCE_TYPE_ID=$" + 15 + "$";
    }
    else {
        _recpayxml += " REFERENCE_TYPE_ID=$" + 7 + "$";
    }
    _recpayxml += " DOCTOR_ID=$" + hdnDoctorID + "$";
    _recpayxml += " PAYMENT_TYPE_ID=$" + PAYMENT_TYPE_ID + "$";
    _recpayxml += " SESSION_ID=$" + document.getElementById('' + ctrlcom + '_HDNSESSIONID').value + "$";
    var curr_id = document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnstpcurrid').value;
    _recpayxml += " CURR_ID=$" + curr_id + "$";
    _recpayxml += " TRN_SOURCE_ID=$" + 0 + "$";

    _recpayxml += " NET_GROSS_AMT=$" + (total_bill_amount) + "$";
    _recpayxml += " NET_DISCOUNT_AMT=$" + (total_bill_concession_amt) + "$";
    _recpayxml += " NET_RECEIPT_AMT=$" + (OPpayfee) + "$";
    _recpayxml += " OUTSTANDING_DUE_AMT=$" + total_bill_due_amt + "$";
    _recpayxml += " REC_TYPE_ID=$" + rec_type_id + "$";
    _recpayxml += " />";

    return _OPDxml;
}
var FO_BILL_SRV_SCH_ROOT = '';
function OPDSave() {
    var rec_type_id = 0;
    if (document.getElementById('ctl00_hdnIsMedClg').value == "TRUE") {
        rec_type_id = $('input[id*=radiousertran]:checked').val()
        if (rec_type_id == 0 || rec_type_id == null || rec_type_id == undefined) { rec_type_id = 1; }
    }
    else { rec_type_id = 1; }
    var ind_act_srv_net = 0;
    var _OPDxml = "<root>"
    var UmrNO = '', _reg_id = 0;
    if (document.getElementById('' + ctrlcom + '_chk_old').checked == true) {
        UmrNO = document.getElementById('' + ctrlcom + '_umrPatientDetails_Umrlookup_txtSearchControl').value;
        _reg_id = document.getElementById('' + ctrlcom + '_umrPatientDetails_hdnRegID').value;
        if (_reg_id == undefined || _reg_id == null || _reg_id == '') { _reg_id = "0"; }
    }
    else if (document.getElementById('' + ctrlcom + '_chkisold').checked == true) {
        UmrNO = document.getElementById('' + ctrlcom + '_ucUMRno_txtSearchControl').value;
        _reg_id = document.getElementById('' + ctrlcom + '_hdnRegID').value;
        if (_reg_id == undefined || _reg_id == null || _reg_id == '') { _reg_id = "0"; }
    }
    else {
        UmrNO = document.getElementById('' + ctrlcom + '_txtumrno').value;
    }
    var Cmp_Id = document.getElementById('' + ctrlcom + '_EmployerInfo1_EmployerControl1__hiddenID').value;
    var Tpa_Id = 0;
    if ($('#' + ctrlcom + '_chk_old')[0].checked == false) {
        Tpa_Id = document.getElementById('' + ctrlcom + '_EmployerInfo1_uctpa__hiddenID').value;
    } else {
        Tpa_Id = document.getElementById('' + ctrlcom + '_uccorporate_CmpLookup__hiddenID').value;
    }
    if (Tpa_Id == null || Tpa_Id == undefined || Tpa_Id == '') { Tpa_Id = "0"; }
    var QuickBalCash = 0;
    var CONCESSION = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatgrossamt').value;
    var COMPANY_CONCESSION_AMOUNT = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpartygrossamt').value;
    var COMPANY_AMOUNT = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtparygross').value;
    var BILL_AMOUNT = 0;  //document.getElementById('' + ctrlcom + '_ReceiptControl2_txtgrosstotal').value;
    var NET_AMOUNT = 0;  //document.getElementById('' + ctrlcom + '_ReceiptControl2_txtTotalNet').value;
    var PAID_AMOUNT = 0;

    BILL_AMOUNT = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtgrosstotal').value;

    NET_AMOUNT = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtTotalNet').value;
    var PAT_TAX_AMT = $('#' + ctrlcom + '_ReceiptControl2_txtpatTotTax').val();
    if (PAT_TAX_AMT == undefined || PAT_TAX_AMT == null || PAT_TAX_AMT == '') { PAT_TAX_AMT = "0"; }
    PAID_AMOUNT = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtTotalReciptAmt').value;

    var DUE_AMOUNT = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtTotalDue').value;
    var TOTAL_DISCOUNT = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtgrossamttotal').value;
    var CMP_OUTSTANDING_DUE = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtTotalDue').value;
    var CMP_NET_AMT = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtTotalNet').value;
    var CMP_PAID_AMT = 0; /*  document.getElementById('' + ctrlcom + '_ReceiptControl2_txtTotalReciptAmt').value;*/
    //var UmrNO = document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnTranUMRNO').value;
    var AdmnNo = document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnTRANADMNNO').value;
    var TransactionNo = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtReceoptNoAdvanced').value;
    var TransactionDt = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtReceiptDtAdvanced').value;
    var Remarks = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtRemarks').value;
    Remarks = ReplaceSplCharactor(Remarks);
    var _apptID = 0;
    if (document.getElementById('' + ctrlcom + '_UcAppointmentNo_txtSearchControl').value != '' && document.getElementById('' + ctrlcom + '_hdnAPTID').value != '') {
        _apptID = document.getElementById('' + ctrlcom + '_hdnAPTID').value;
    }
    if (Cmp_Id == null || Cmp_Id == '' || Cmp_Id == undefined) { Cmp_Id = "0"; }
    if (PAID_AMOUNT == null || PAID_AMOUNT == '' || PAID_AMOUNT == undefined) { PAID_AMOUNT = "0"; }
    if (DUE_AMOUNT == null || DUE_AMOUNT == '' || DUE_AMOUNT == undefined) { DUE_AMOUNT = "0"; }
    if (BILL_AMOUNT == null || BILL_AMOUNT == '' || BILL_AMOUNT == undefined) { BILL_AMOUNT = "0"; }
    if (NET_AMOUNT == null || NET_AMOUNT == '' || NET_AMOUNT == undefined) { NET_AMOUNT = "0"; }

    var Emp_Id = '0';
    var conpaidamt = 0;
    var regfee = document.getElementById('' + ctrlcom + '_txtregfee').value;
    if (parseFloat(regfee) <= parseFloat(PAID_AMOUNT)) {
        PAID_AMOUNT = parseFloat(PAID_AMOUNT) - parseFloat(_RegPaidAmnt) - parseFloat(_ConsPaidAmnt);
    }
    else if (parseFloat(regfee) > parseFloat(PAID_AMOUNT)) {
        if (parseFloat(PAID_AMOUNT) <= 0) {
            PAID_AMOUNT = 0;
        }
        else {
            PAID_AMOUNT = PAID_AMOUNT;
        }
    }

    var CashAmt = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtcashAmt').value;

    var CardAmt = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtCardAmt').value;
    CashAmt = CashAmt == '' ? 0 : CashAmt;
    var TotalAmt = parseFloat(CashAmt) + parseFloat(CardAmt);
    var CardNO = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtcardNoCmp').value;

    var CradTypeId = document.getElementById('' + ctrlcom + '_ReceiptControl2_ddcardType').value;
    var BankName = $('[id*=ddbankName] option:selected').text();
    var CardExperyDt = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtcardExpiredt').value;
    if (CardExperyDt == undefined || CardExperyDt == null || CardExperyDt == '' || CardExperyDt == 0) { CardExperyDt = ''; }
    var paymentmodeid = document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlcrdtype').value;
    if (paymentmodeid == '' || paymentmodeid == '0' || paymentmodeid == null || paymentmodeid == undefined) { paymentmodeid = "1"; }

    var congross = document.getElementById('' + ctrlcom + '_txtConGross').value;
    var conconcession = document.getElementById('' + ctrlcom + '_txtConDisc').value;
    var connetamt = document.getElementById('' + ctrlcom + '_txtConNet').value;

    if (parseFloat(CashAmt) > 0) {
        CashAmt = parseFloat(CashAmt) - parseFloat(regfee) - parseFloat(connetamt);
    }
    else if (parseFloat(CardAmt) > 0) {
        CardAmt = parseFloat(CardAmt) - parseFloat(regfee) - parseFloat(connetamt);
    }
    var cnt = 0; var totlamt = 0; var totlnetamt = 0; var _OPDSrvxml = ''; var hdnDiscPer = 0; var hdnDiscAmt = 0;
    var hdnDrId = document.getElementById('' + ctrlcom + '_ucConsultant__hiddenID').value;
    if (hdnDrId == null || hdnDrId == '' || hdnDrId == undefined) { hdnDrId = "0"; }
    if (document.getElementById('' + ctrlcom + '_uccorporate_EmployerInfo1_uctpa__hiddenID').value > 0) {
        if (chkvalue.length > 0) {
            for (i = 0; i < chkvalue.split(',').length; i++) {
                _OPDxml += "<FO_BILL_CMP_CHECKLIST";
                if (chk_listID != '') {
                    if (chk_listID.split(',')[i] > 0) {
                        _OPDxml += " BILL_CMP_CHECKLIST_ID=$" + chk_listID.split(',')[i] + "$";
                    }
                    else {
                        _OPDxml += " BILL_CMP_CHECKLIST_ID=$" + 0 + "$";
                    }
                }
                else {
                    _OPDxml += " BILL_CMP_CHECKLIST_ID=$" + 0 + "$";
                }
                _OPDxml += " BILL_CMP_CHECKLIST_REV_NO=$" + 1 + "$";
                _OPDxml += " CHECKLIST_ID=$" + chkvalue.split(',')[i] + "$";
                _OPDxml += " SUBMITTED_FLAG=$" + "OPD" + "$";
                _OPDxml += " UMR_NO=$" + UmrNO + "$";
                _OPDxml += "/>";
            }
        }
    }
    var bill_sno = 0;
    var food_bev = '';
    var M_GvRowscount = 1;
    var grid = document.getElementById('' + ctrlcom + '_ReceiptControl2_gvMultipleConcession');
    var M_index = grid.rows.length;
    var con_rule_id = 0;
    var con_auth_id = 0;
    /* multiiple Discounts */

    if (document.getElementById('' + ctrlcom + '_ReceiptControl2_chkismultiple').checked == true) {
        $("table[id*=gvMultipleConcession] tr:has(td)").each(function (e) {

            if (M_GvRowscount < M_index) {

                var dscntype = $(this).closest('tr').find("[id*=ddlMultiDiscounttype]").val();

                if (dscntype == 6) {
                    con_auth_id = $(this).closest('tr').find("input[type=hidden][id*=hdnauthid]").val();
                    con_rule_id = $(this).closest('tr').find("input[type=hidden][id*=hdnRuleid]").val();
                }
            }

        });
    }
    var profiledisc = 0;
    var profileamt = 0;
    $("table[id$=gvServices] tr:has(td)").each(function (e) {


        var txtServiceName = $(this).closest('tr').find("input[type=text][id*=txtServiceName]").val();
        var hdnServiceID = $(this).closest('tr').find("input[type=hidden][id*=hdnServiceID]").val();
        var hdnDoctorID = $(this).closest('tr').find("input[type=hidden][id*=hdnDoctorID]").val();
        var hdnDeptId = $(this).closest('tr').find("input[type=hidden][id*=hdnDepartment_Id]").val();

        var item_id = $(this).closest('tr').find('input[type=hidden][id*=hdnItem_id]').val();
        var item_group_id = $(this).closest('tr').find('input[type=hidden][id*=hdnitem_group_id]').val();
        if (item_id == '' || item_id == undefined || item_id == null)
        { item_id = 0; }
        if (item_group_id == '' || item_group_id == null || item_group_id == undefined)
        { item_group_id = 0; }
        if (txtServiceName.trim() != '' && txtServiceName != null && txtServiceName != undefined && txtServiceName != "--Enter Service Name Here--" && hdnServiceID != '' && hdnServiceID != null && hdnServiceID != undefined) {
            txtServiceName = ReplaceSplCharactor(txtServiceName);

            var txtServiceCode = $(this).closest('tr').find("input[type=text][id*=txtServiceCode]").val();
            var edit_srv_cd = $(this).closest('tr').find('input[type=hidden][id*=hdnedit_srv_cd]').val();
            var edit_srv_name = $(this).closest('tr').find('input[type=text][id*=txtEqui_Srv_Name]').val();
            if (edit_srv_cd == null || edit_srv_cd == undefined || edit_srv_cd == NaN) {
                edit_srv_cd = '';
            }
            if (edit_srv_name == null || edit_srv_name == undefined || edit_srv_name == NaN) {
                edit_srv_name = '';
            }
            if (txtServiceCode == null || txtServiceCode == undefined || txtServiceCode == NaN)
            { txtServiceCode = ''; }

            var txtQuantity = $(this).closest('tr').find("input[type=text][id*=txtQty]").val();
            var service_group_name = $(this).closest('tr').find("input[type=hidden][id*=hdnSrv_Grp_Name]").val();

            if (service_group_name == 'FOOD N BEWERAGES' && parseInt(item_group_id) > 0) {
                food_bev = food_bev + ';' + item_group_id + ',' + service_group_name + ',' + txtQuantity + ',' + txtServiceName;
            }
            var lblServiceType = "";
            var hdnServiceClass = $(this).closest('tr').find("input[type=hidden][id*=hdnServiceClass]").val();
            var hdn_is_free_followup = $(this).closest('tr').find("input[type=hidden][id*=hdn_is_free_followup]").val();
            if (hdn_is_free_followup == undefined || hdn_is_free_followup == 'undefined' || hdn_is_free_followup == '' || hdn_is_free_followup == null) {
                hdn_is_free_followup = 'N';
            }
            var class_Srv_id = $(this).closest('tr').find("input[type=hidden][id*=hdnClass_Srv_ID]").val();
            var hdnServiceClass = $(this).closest('tr').find("input[type=hidden][id*=hdnServiceClass]").val();
            var prorate = $(this).closest('tr').find('input[type=hidden][id*=hdnprorate]').val();
            if (prorate == undefined || prorate == null || prorate == '' || prorate == NaN) {
                prorate = 0;
            }
            if (hdnServiceClass == "3") {
                document.getElementById('' + ctrlcom + '_hdn_pkg_param_opd').value = hdnServiceClass;
            }
            var hdnServiceTypID = $(this).closest('tr').find("input[type=hidden][id*=hdnServiceTypID]").val();
            var hdnServiceGrp = $(this).closest('tr').find("input[type=hidden][id*=hdnServiceGrpID]").val();
            var hdnServiceTypID = $(this).closest('tr').find("input[type=hidden][id*=hdnServiceTypID]").val();

            if (hdnDeptId > 0 && hdnServiceTypID == '1') { hdnServiceID = '2'; }

            var hdnVisitTypeId = $(this).closest('tr').find("input[type=hidden][id*=hdnVisitTypeId]").val();
            var hdnClassSrvid = $(this).closest('tr').find("input[type=hidden][id*=hdnClassSrvid]").val();
            var hdnOrgPrice = $(this).closest('tr').find('[id*=hdnOrgPrice]').val();
            var hdnDocPrice = $(this).closest('tr').find('[id*=hdnDoctorPrice]').val();
            var txtRate = $(this).closest('tr').find("input[type=text][id*=txtRate]").val();
            var txtrateAmount = $(this).closest('tr').find("input[type=text][id*=txtAmount]").val();
            var hdnRealOrgAmt = "";
            var hdnRealDocAmt = "";
            var hdnserpriceid = $(this).closest('tr').find("input[type=hidden][id*=hdnsrvpriceID]").val();
            var hdnisfrgnsrv = $(this).closest('tr').find("input[type=hidden][id*=hdnIsForeignSrv]").val();
            var hdnparentsrvic = "";
            var hdnserclass = $(this).closest('tr').find("input[type=hidden][id*=hdnServiceClass]").val();
            var txtamount = '';
            if (document.getElementById('' + ctrlcom + '_uccorporate_ddlPaymentBy').value == '2' || document.getElementById('' + ctrlcom + '_ddlPatientType').value > 1) {
                txtamount = $(this).closest('tr').find("input[type=text][id*=txtPamt]").val();
            }
            else {
                txtamount = $(this).closest('tr').find("input[type=text][id*=txtPamt]").val();
            }
            var txtconcamt = "";
            var txtDiscAmt = $(this).closest('tr').find("input[type=text][id*=txtDiscAmt]").val();
            var txtDiscPer = $(this).closest('tr').find("input[type=text][id*=txtDiscP]").val();
            var txtnetamt = $(this).closest('tr').find("input[type=text][id*=txtPNAmt]").val();
            var namt = '';

            var CashAmt = $(this).closest('tr').find("input[type=text][id*=txtDiscAmt]").val();
            var HealthcardAmt = $(this).closest('tr').find("input[type=text][id*=txtHcAmt]").val();
            var ManagementAmt = $(this).closest('tr').find("input[type=text][id*=txtmgAmt]").val();
            var StaffAmt = $(this).closest('tr').find("input[type=text][id*=txtstAmt]").val();
            var EventBasedAmt = $(this).closest('tr').find("input[type=text][id*=txtebAmt]").val();
            var RuleBasedAmt = $(this).closest('tr').find("input[type=text][id*=txtcncrlAmt]").val();
            CashAmt = CashAmt || 0;
            HealthcardAmt = HealthcardAmt || 0;
            ManagementAmt = ManagementAmt || 0;
            StaffAmt = StaffAmt || 0;
            EventBasedAmt = EventBasedAmt || 0;
            RuleBasedAmt = RuleBasedAmt || 0;
            txtDiscAmt = 0;
            var txtDiscAmt = parseFloat(CashAmt) + parseFloat(HealthcardAmt) + parseFloat(ManagementAmt) + parseFloat(StaffAmt) + parseFloat(EventBasedAmt) + parseFloat(RuleBasedAmt);
            txtDiscAmt = txtDiscAmt || 0;



            if (document.getElementById('' + ctrlcom + '_ReceiptControl2_chkismultiple').checked == false) {
                namt = $(this).closest('tr').find("input[type=text][id*=txtPNAmt]").val();
            } else { namt = $(this).closest('tr').find("input[type=text][id*=txtAmount]").val(); }
            if (namt == '' || namt == undefined || namt == null) { namt = 0; }

            txtnetamt = parseFloat(txtamount) - parseFloat(txtDiscAmt);
            namt = txtnetamt;


            var cash_disc_pcnt = $(this).closest('tr').find('input[type=text][id*=txtDiscP]').val();
            var Hc_disc_pcnt = $(this).closest('tr').find('input[type=text][id*=txthcPer]').val();
            var mng_disc_pcnt = $(this).closest('tr').find('input[type=text][id*=txtmaPer]').val();
            var st_disc_pcnt = $(this).closest('tr').find('input[type=text][id*=txtstPer]').val();
            var cc_rule_disc_pcnt = $(this).closest('tr').find('input[type=text][id*=txtRulePer]').val();
            var EB_disc_pcnt = $(this).closest('tr').find('input[type=text][id*=txtebPer]').val();
            if (parseFloat(cash_disc_pcnt) > 0) { } else { cash_disc_pcnt = 0; }
            if (parseFloat(Hc_disc_pcnt) > 0) { } else { Hc_disc_pcnt = 0; }
            if (parseFloat(mng_disc_pcnt) > 0) { } else { mng_disc_pcnt = 0; }
            if (parseFloat(st_disc_pcnt) > 0) { } else { st_disc_pcnt = 0; }
            if (parseFloat(cc_rule_disc_pcnt) > 0) { } else { cc_rule_disc_pcnt = 0; }
            if (parseFloat(EB_disc_pcnt) > 0) { } else { EB_disc_pcnt = 0; }
            var cncsn_pct = parseFloat(cash_disc_pcnt) + parseFloat(Hc_disc_pcnt) + parseFloat(mng_disc_pcnt) + parseFloat(st_disc_pcnt) + parseFloat(cc_rule_disc_pcnt) + parseFloat(EB_disc_pcnt);
            var cash_disc_amt = $(this).closest('tr').find('input[type=text][id*=txtDiscAmt]').val();
            var Hc_disc_amt = $(this).closest('tr').find('input[type=text][id*=txtHcAmt]').val();
            var mng_disc_amt = $(this).closest('tr').find('input[type=text][id*=txtmgAmt]').val();
            var st_disc_amt = $(this).closest('tr').find('input[type=text][id*=txtstAmt]').val();
            var cc_rule_disc_amt = $(this).closest('tr').find('input[type=text][id*=txtcncrlAmt]').val();
            var EB_disc_amt = $(this).closest('tr').find('input[type=text][id*=txtebAmt]').val();
            if (parseFloat(cash_disc_amt) > 0) { } else { cash_disc_amt = 0; }
            if (parseFloat(Hc_disc_amt) > 0) { } else { Hc_disc_amt = 0; }
            if (parseFloat(mng_disc_amt) > 0) { } else { mng_disc_amt = 0; }
            if (parseFloat(st_disc_amt) > 0) { } else { st_disc_amt = 0; }
            if (parseFloat(cc_rule_disc_amt) > 0) { } else { cc_rule_disc_amt = 0; }
            if (parseFloat(EB_disc_amt) > 0) { } else { EB_disc_amt = 0; }
            var cncsn_amt = parseFloat(cash_disc_amt) + parseFloat(Hc_disc_amt) + parseFloat(mng_disc_amt) + parseFloat(st_disc_amt) + parseFloat(cc_rule_disc_amt) + parseFloat(EB_disc_amt);
            cncsn_pct = cncsn_pct == null || undefined || '' ? "0" : cncsn_pct;
            cncsn_amt = cncsn_amt == null || undefined || '' ? "0" : cncsn_amt;
            //cncsn_amt = setProperDecimals((parseFloat(txtamount) * parseFloat(cncsn_pct)) / 100);



            txtDiscPer = cncsn_pct;
            var _billconcession = 0; var _billconcession_per = 0;
            var Pamt = $(this).closest('tr').find('input[type=text][id*=txtPamt]').val();
            var PNamt = $(this).closest('tr').find('input[type=text][id*=txtPNAmt]').val();

            if (Pamt == null || Pamt == '' || Pamt == undefined) { Pamt = "0"; }
            if (PNamt == null || PNamt == '' || PNamt == undefined) { PNamt = "0"; }
            /* _billconcession = parseFloat(Pamt) - parseFloat(PNamt);
            if (parseFloat(Pamt) > 0) {
            _billconcession_per = (parseFloat(_billconcession) * 100) / parseFloat(Pamt);
            }
            if (_billconcession_per == '' || _billconcession_per == null || _billconcession_per == undefined) { _billconcession_per = 0; }
            txtDiscPer = _billconcession_per;
            txtDiscAmt = _billconcession;*/

            var Cmp_G_Amt = $(this).closest('tr').find('input[type=text][id*=txtCamt]').val();
            var Cmp_Disc_Pcnt = $(this).closest('tr').find('input[type=text][id*=txtCDiscP]').val();
            var Cmp_Disc_Amt = $(this).closest('tr').find('input[type=text][id*=txtCDiscAmt]').val();
            var Cmp_N_Amt = $(this).closest('tr').find('input[type=text][id*=txtCNetAmt]').val();
            var Tariff_ID = $(this).closest('tr').find('input[type=hidden][id*=hdnTariffId]').val();
            var histtype = $(this).closest('tr').find('input[type=hidden][id*=hdnhistorytypeID]').val();
            var medictype = $(this).closest('tr').find('input[type=hidden][id*=hdnMedicationType]').val();
            var docageqty = $(this).closest('tr').find('input[type=hidden][id*=hdnDosageqty]').val();
            var takentoday = $(this).closest('tr').find('input[type=hidden][id*=hdnIsTakenToday]').val();
            var lmpcal = $(this).closest('tr').find('input[type=hidden][id*=hdnLmpCal]').val();
            var outhermedic = $(this).closest('tr').find('input[type=hidden][id*=hdnOutherMedic]').val();
            var _consultationTypeID = $(this).closest('tr').find('[id*=ddSType]').val();
            var srvremarks = $(this).closest('tr').find('[id*=txtremks]').val();

            var Order_id = $(this).closest('tr').find('input[type=hidden][id*=hdn_ord_id]').val();
            var order_det_id = $(this).closest('tr').find('input[type=hidden][id*=hdnord_det_id]').val();

            var org_price = $(this).closest('tr').find('[id*=hdnOrgPrice]').val();
            var doctor_price = $(this).closest('tr').find('[id*=hdnDoctorPrice]').val();
            var org_pct = $(this).closest('tr').find('[id*=hdnOrgPct]').val();
            var doctor_pct = $(this).closest('tr').find('[id*=hdnDoctorPct]').val();
            var srvdoctor = $(this).closest('tr').find('[id*=hdnsrvdoctorID]').val();
            FO_BILL_SRV_SCH_ROOT = FO_BILL_SRV_SCH_ROOT + $(this).closest('tr').find('[id*=hdnSrvShcedulSave]').val();

            if (_consultationTypeID != undefined && _consultationTypeID != null && _consultationTypeID != '') { _consultationTypeID = _consultationTypeID; } else { _consultationTypeID = '0' }
            //var PostCons = $('[id$=UCServices_gvServices] tr').filter(':eq(' + GvRowscount + ')').find('input[type=checkbox][id*=chkPstCons]')[0].checked;
            var Concession_per = 0;
            if (parseFloat(txtamount) > 0) { } else { txtamount = 0; }
            if (parseFloat(Concession_per) > 0) { } else { Concession_per = 0; }

            var cash_disc_pcnt = $(this).closest('tr').find('input[type=text][id*=txtDiscP]').val();
            var Hc_disc_pcnt = $(this).closest('tr').find('input[type=text][id*=txthcPer]').val();
            var mng_disc_pcnt = $(this).closest('tr').find('input[type=text][id*=txtmaPer]').val();
            var st_disc_pcnt = $(this).closest('tr').find('input[type=text][id*=txtstPer]').val();
            var cc_rule_disc_pcnt = $(this).closest('tr').find('input[type=text][id*=txtRulePer]').val();
            var EB_disc_pcnt = $(this).closest('tr').find('input[type=text][id*=txtebPer]').val();
            if (parseFloat(cash_disc_pcnt) > 0) { } else { cash_disc_pcnt = 0; }
            if (parseFloat(Hc_disc_pcnt) > 0) { } else { Hc_disc_pcnt = 0; }
            if (parseFloat(mng_disc_pcnt) > 0) { } else { mng_disc_pcnt = 0; }
            if (parseFloat(st_disc_pcnt) > 0) { } else { st_disc_pcnt = 0; }
            if (parseFloat(cc_rule_disc_pcnt) > 0) { } else { cc_rule_disc_pcnt = 0; }
            if (parseFloat(EB_disc_pcnt) > 0) { } else { EB_disc_pcnt = 0; }
            Concession_per = parseFloat(cash_disc_pcnt) + parseFloat(Hc_disc_pcnt) + parseFloat(mng_disc_pcnt) + parseFloat(st_disc_pcnt) + parseFloat(cc_rule_disc_pcnt) + parseFloat(EB_disc_pcnt);

            //            if ( $('#'+ ctrlcom + '_ReceiptControl2_ddlDiscountType').val() > 0 && Concession_per > 0) {
            //                txtDiscAmt = Math.round( parseFloat(txtamount) / 100 * parseFloat(Concession_per));
            //                if (parseFloat(txtDiscAmt) > 0) { } else { txtDiscAmt = 0; }
            //                txtnetamt = parseFloat(txtamount) - parseFloat(txtDiscAmt);
            //            }
            var txtstatus = "";
            var COLOR_CD = '';
            var histSpecimen = ""; // $(this).closest('tr').find("input[type=hidden][id*=hdnhistspeci]").val();
            var histsite = ""; // $(this).closest('tr').find("input[type=hidden][id*=hdnhistSite]").val();
            var histtrf = ""; // $(this).closest('tr').find("input[type=hidden][id*=hdnhisttrf]").val();
            var sample_type = '';
            var volume = '';
            var transport = '';
            var VactinerID = '0';
            var SpecimenID = '0';
            var _isEmergency = $(this).closest('tr').find("input[type=checkbox][id*=chkstat]")[0].checked;
            var ISEmergency = "N";
            if (_isEmergency == true) { ISEmergency = "Y" }
            if (hdnServiceClass == '3' || hdnServiceClass == '4') {
                document.getElementById('' + ctrlcom + '_hdnPkgSrvs').value = hdnServiceID;
            }

            var hdnIsEmerPrice = $(this).closest('tr').find("input[type=hidden][id*=hdnIsEmerPrice]").val();
            if (hdnIsEmerPrice == null || hdnIsEmerPrice == '' || hdnIsEmerPrice == undefined) { hdnIsEmerPrice = "N"; }
            if (hdnserpriceid == null || hdnserpriceid == '' || hdnserpriceid == undefined) { hdnserpriceid = "0"; }
            if (hdnServiceTypID == null || hdnServiceTypID == '' || hdnServiceTypID == undefined) { hdnServiceTypID = "0"; }
            if (hdnDoctorID == null || hdnDoctorID == '' || hdnDoctorID == undefined) { hdnDoctorID = "0"; }
            if (hdnDeptId == null || hdnDeptId == '' || hdnDeptId == undefined) { hdnDeptId = "0"; }
            if (lblServiceType == null || lblServiceType == '' || lblServiceType == undefined) { lblServiceType = " "; }
            if (hdnOrgPrice == null || hdnOrgPrice == '' || hdnOrgPrice == undefined) { hdnOrgPrice = "0"; }
            if (hdnDocPrice == null || hdnDocPrice == '' || hdnDocPrice == undefined) { hdnDocPrice = "0"; }
            if (txtRate == null || txtRate == '' || txtRate == undefined) { txtRate = "0"; }
            if (hdnRealOrgAmt == null || hdnRealOrgAmt == '' || hdnRealOrgAmt == undefined) { hdnRealOrgAmt = "0"; }
            if (hdnRealDocAmt == null || hdnRealDocAmt == '' || hdnRealDocAmt == undefined) { hdnRealDocAmt = "0"; }
            if (hdnparentsrvic == null || hdnparentsrvic == '' || hdnparentsrvic == undefined) { hdnparentsrvic = "0"; }
            if (txtamount == null || txtamount == '' || txtamount == undefined) { txtamount = "0"; }
            if (txtconcamt == null || txtconcamt == '' || txtconcamt == undefined) { txtconcamt = "0"; }
            if (txtnetamt == null || txtnetamt == '' || txtnetamt == undefined) { txtnetamt = "0"; }
            if (txtstatus == null || txtstatus == '' || txtstatus == undefined) { txtstatus = "s"; }
            if (txtDiscAmt == null || txtDiscAmt == '' || txtDiscAmt == undefined) { txtDiscAmt = "0"; }
            if (txtDiscPer == null || txtDiscPer == '' || txtDiscPer == undefined) { txtDiscPer = "0"; }
            if (org_price == null || org_price == '' || org_price == undefined) { org_price = "0"; }
            if (doctor_price == null || doctor_price == '' || doctor_price == undefined) { doctor_price = "0"; }
            if (org_pct == null || org_pct == '' || org_pct == undefined) { org_pct = "0"; }
            if (doctor_pct == null || doctor_pct == '' || doctor_pct == undefined) { doctor_pct = "0"; }
            if (txtrateAmount == null || txtrateAmount == '' || txtrateAmount == undefined) { txtrateAmount = "0"; }
            if (Cmp_G_Amt != undefined && Cmp_G_Amt != null && Cmp_G_Amt != '') { Cmp_G_Amt = Cmp_G_Amt; } else { Cmp_G_Amt = '0'; }
            if (Cmp_Disc_Pcnt != undefined && Cmp_Disc_Pcnt != null && Cmp_Disc_Pcnt != '') { Cmp_Disc_Pcnt = Cmp_Disc_Pcnt; } else { Cmp_Disc_Pcnt = '0'; }
            if (Cmp_Disc_Amt != undefined && Cmp_Disc_Amt != null && Cmp_Disc_Amt != '') { Cmp_Disc_Amt = Cmp_Disc_Amt; } else { Cmp_Disc_Amt = '0'; }
            if (Cmp_N_Amt != undefined && Cmp_N_Amt != null && Cmp_N_Amt != '') { Cmp_N_Amt = Cmp_N_Amt; } else { Cmp_N_Amt = '0'; }

            if (Tariff_ID != undefined && Tariff_ID != null && Tariff_ID != '') { Tariff_ID = Tariff_ID } else { Tariff_ID = '0' }
            if (VactinerID != undefined && VactinerID != null && VactinerID != '') { VactinerID = VactinerID; } else { VactinerID = '0'; }
            if (SpecimenID != undefined && SpecimenID != null && SpecimenID != '') { SpecimenID = SpecimenID; } else { SpecimenID = '0'; }
            if (histtype != undefined && histtype != null && histtype != '') { histtype = histtype; } else { histtype = '0' }
            if (medictype != undefined && medictype != null && medictype != '') { medictype = medictype; } else { medictype = '0' }
            if (docageqty != undefined && docageqty != null && docageqty != '') { docageqty = docageqty; } else { docageqty = '0' }
            if (takentoday != undefined && takentoday != null && takentoday != '') { takentoday = takentoday; } else { takentoday = '0' }
            if (lmpcal != undefined && lmpcal != null && lmpcal != '') { lmpcal = lmpcal; } else { lmpcal = new Date().format('dd-MMM-yyyy'); }
            if (outhermedic != undefined && outhermedic != null && outhermedic != '') { outhermedic = outhermedic; } else { outhermedic = '0' }
            if (srvdoctor != undefined && srvdoctor != null && srvdoctor != '') { srvdoctor = srvdoctor; } else { srvdoctor = '0' }
            var srv_cons_status_id = 0;
            if (parseInt(class_Srv_id) > 0) {
                var txtrateAmount = prorate * txtQuantity;
            } else { var txtrateAmount = txtRate * txtQuantity; }

            if (class_Srv_id > 0 && hdnServiceID == 2) {
                var status = $(this).closest('tr').find('input[id*=chkPstCons]')[0].checked;
                if (status == true) { srv_cons_status_id = 4; }
            }
            var _type = 'Y';
            if (hdnServiceTypID == '5' || hdnServiceTypID == '1' || hdnServiceTypID == '0') {
                _type = 'N';
            }

            if (hdnServiceClass == '3' || _type == 'Y' || (hdnServiceID == '2' && class_Srv_id > 0)) {
                if (class_Srv_id > 0) {
                }
                else if (class_Srv_id > 0 && hdnDoctorID > 0) {
                }
                else {
                    totlamt = parseFloat(totlamt) + parseFloat(txtamount);
                    totlnetamt = parseFloat(totlnetamt) + parseFloat(txtnetamt);
                }

                b_cmp_net = parseFloat(b_cmp_net) + parseFloat(Cmp_N_Amt);
                b_cmp_grs_amt = parseFloat(b_cmp_grs_amt) + parseFloat(Cmp_G_Amt);
                b_cmp_pct = parseFloat(b_cmp_pct) + parseFloat(Cmp_Disc_Pcnt);
                b_cmp_cnc_amt = parseFloat(b_cmp_cnc_amt) + parseFloat(Cmp_Disc_Amt);
            }
            var ordr_doctor_id = $('#' + ctrlcom + '_UcOdrPsyn__hiddenID').val();
            if (ordr_doctor_id == "") { ordr_doctor_id = $('#' + ctrlcom + '_ucConsultant__hiddenID').val(); }
            if (ordr_doctor_id == undefined || ordr_doctor_id == null || ordr_doctor_id == '') { ordr_doctor_id = '0' } else { ordr_doctor_id = ordr_doctor_id; }
            var PostCons = $(this).closest('tr').find("input[type=checkbox][id*=chkPstCons]")[0].checked;
            var _type = 'Y';
            if (hdnServiceTypID == '5' || hdnServiceTypID == '1' || hdnServiceTypID == '0') {
                _type = 'N';
            }
            if (parseFloat(txtDiscAmt) > 0) { } else { txtDiscAmt = 0; }

            if (hdnServiceClass == '3' || _type == 'Y' || (hdnServiceID == '2' && class_Srv_id > 0)) {
                if (hdnServiceClass == '3') {
                    profiledisc = cncsn_amt;
                    profileamt = $(this).closest('tr').find("input[type=text][id*=txtPamt]").val();
                }
                cnt++; bill_sno++;
                hdnDiscAmt = parseFloat(hdnDiscAmt) + parseFloat(txtDiscAmt);
                hdnDiscPer = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatdis').value;

                if (hdnDiscPer == null || hdnDiscPer == '' || hdnDiscPer == undefined) { hdnDiscPer = "0"; }
                var PNamt_I = $(this).closest('tr').find('input[type=text][id*=txtPNAmt]').val();
                if (PNamt_I == null || PNamt_I == '' || PNamt_I == undefined) { PNamt_I = "0"; }
                var pat_tax_amt = $(this).closest('tr').find('input[type=text][id*=txtptax]').val();
                if (pat_tax_amt == undefined || pat_tax_amt == null || pat_tax_amt == '' || pat_tax_amt == NaN || pat_tax_amt == 'NaN') { pat_tax_amt = "0"; }
                if (class_Srv_id > 0) {
                    txtDiscPer = hdnDiscPer;
                    txtDiscAmt = Math.round((txtrateAmount * txtDiscPer) / 100);
                    txtnetamt = txtrateAmount - txtDiscAmt;
                } /* PPackage Includes */
                else {
                    ind_act_srv_net = (parseFloat(ind_act_srv_net) + parseFloat(PNamt_I) + parseFloat(pat_tax_amt));
                }

                var total_disc_Amt = parseFloat(txtDiscAmt) + parseFloat(Cmp_Disc_Amt);
                var total_disc_Pct = parseFloat(txtDiscPer) + parseFloat(Cmp_Disc_Pcnt);
                if (parseInt(prorate) > 0) {
                    total_disc_Amt = setProperDecimalsValtwo((parseFloat(prorate) * parseFloat(profiledisc)) / parseFloat(profileamt));
                    total_disc_Pct = setProperDecimalsValtwo((parseFloat(total_disc_Amt) * parseFloat(100)) / parseFloat(prorate));
                } else {
                    setProperDecimals(total_disc_Amt);
                }

                var total_net_Amount = parseFloat(Cmp_N_Amt) + parseFloat(PNamt);
                if (parseInt(class_Srv_id) > 0) {
                    var pakageseramt = (parseFloat(txtQuantity) * parseFloat(prorate)) - parseFloat(total_disc_Amt); //$(this).closest('tr').find('input[type=text][id*=txtRate]').val();
                    txtnetamt = pakageseramt;
                    txtamount = parseFloat(txtQuantity) * parseFloat(prorate);

                    if (pakageseramt == "undefined" || pakageseramt == undefined || pakageseramt == null) { pakageseramt = "0"; }
                }


                var TAX_PCT = $(this).closest('tr').find('input[type=hidden][id*=hdntaxpct]').val();
                if (TAX_PCT == undefined || TAX_PCT == null || TAX_PCT == '' || TAX_PCT == NaN) { TAX_PCT = "0"; }
                var RATE_EXC_GST = $(this).closest('tr').find('input[type=text][id*=txtRate]').val();
                if (RATE_EXC_GST == undefined || RATE_EXC_GST == null || RATE_EXC_GST == '') { RATE_EXC_GST = "0"; }
                var cmp_tax_amt = $(this).closest('tr').find('input[type=text][id*=txtcmptax]').val();
                if (cmp_tax_amt == undefined || cmp_tax_amt == null || cmp_tax_amt == '' || cmp_tax_amt == NaN) { cmp_tax_amt = "0"; }
                if (parseInt(class_Srv_id) > 0) {
                    var tax_amt = Math.round((parseFloat(txtrateAmount)) * parseFloat(TAX_PCT) / 100);
                }
                else {
                    var tax_amt = Math.round((parseFloat(cmp_tax_amt) + parseFloat(pat_tax_amt)));
                }
                if (tax_amt == undefined || tax_amt == null || tax_amt == '' || tax_amt == NaN) { tax_amt = "0"; }
                var SAC_CD = $(this).closest('tr').find('input[type=hidden][id*=hdnsaccd]').val();
                if (SAC_CD == undefined || SAC_CD == null || SAC_CD == '' || SAC_CD == NaN) { SAC_CD = "0"; }
                var sgst_pct = $(this).closest('tr').find('input[type=hidden][id*=hdnsgstpct]').val();
                var cgst_pct = $(this).closest('tr').find('input[type=hidden][id*=hdncgstpct]').val();
                var sgst_amount = $(this).closest('tr').find('input[type=hidden][id*=hdnsgstamount]').val();
                var cgst_amount = $(this).closest('tr').find('input[type=hidden][id*=hdncgstamount]').val();
                var Emp_Disc_Pcnt = $(this).closest('tr').find('input[type=text][id*=txtDiscP]').val();
                var Emp_Disc_Amt = $(this).closest('tr').find('input[type=text][id*=txtDiscAmt]').val();
                Emp_Disc_Amt = Emp_Disc_Amt || 0;
                Emp_Disc_Pcnt = Emp_Disc_Pcnt || 0;
                if (sgst_pct == undefined || sgst_pct == null || sgst_pct == '' || sgst_pct == NaN) { sgst_pct = "0"; }
                if (cgst_pct == undefined || cgst_pct == null || cgst_pct == '' || cgst_pct == NaN) { cgst_pct = "0"; }
                if (sgst_amount == undefined || sgst_amount == null || sgst_amount == '' || sgst_amount == NaN) { sgst_amount = "0"; }
                if (cgst_amount == undefined || cgst_amount == null || cgst_amount == '' || cgst_amount == NaN) { cgst_amount = "0"; }
                if (Emp_Disc_Pcnt == undefined || Emp_Disc_Pcnt == null || Emp_Disc_Pcnt == '' || Emp_Disc_Pcnt == NaN) { Emp_Disc_Pcnt = "0"; }
                if (Emp_Disc_Amt == undefined || Emp_Disc_Amt == null || Emp_Disc_Amt == '' || Emp_Disc_Amt == NaN) { Emp_Disc_Amt = "0"; }
                if (class_Srv_id > 0) { var indtax = 0; } else {
                    var indtax = tax_amt / txtQuantity;
                }
                if (indtax == undefined || indtax == null || indtax == '' || indtax == NaN || indtax == "NaN") { indtax = "0"; }
                var billinghead_id = $(this).closest('tr').find('input[type=hidden][id*=hdnbillingheadid]').val();
                if (billinghead_id == "undefined" || billinghead_id == undefined || billinghead_id == null) { billinghead_id = "0"; }
                /*RAM*/
                _OPDSrvxml += "<FO_BILL_SRV";
                _OPDSrvxml += " BILL_SRV_ID=$" + 0 + "$";
                _OPDSrvxml += " UMR_NO=$" + UmrNO + "$";
                _OPDSrvxml += " SERVICE_TYPE_ID=$" + hdnServiceTypID + "$";
                _OPDSrvxml += " SERVICE_GROUP_ID=$" + hdnServiceGrp + "$";
                _OPDSrvxml += " SERVICE_ID=$" + hdnServiceID + "$";
                if (class_Srv_id > 0) {
                    _OPDSrvxml += " SERVICE_CLASS_ID=$" + 0 + "$";
                }
                else {
                    _OPDSrvxml += " SERVICE_CLASS_ID=$" + hdnServiceClass + "$";
                }
                _OPDSrvxml += " CLASS_SERVICE_ID=$" + class_Srv_id + "$";
                _OPDSrvxml += " CONSULTATION_TYPE_ID=$" + _consultationTypeID + "$";
                _OPDSrvxml += " QUANTITY=$" + txtQuantity + "$";

                if (parseInt(class_Srv_id) > 0) {
                    _OPDSrvxml += " RATE=$" + setProperDecimals(parseFloat(prorate) + (parseFloat(indtax))) + "$";
                }
                else {
                    _OPDSrvxml += " RATE=$" + setProperDecimals(parseFloat(txtRate) + (parseFloat(indtax))) + "$";
                }
                if (parseInt(prorate) > 0) {

                    txtrateAmount = parseFloat(txtQuantity) * parseFloat(prorate);

                }


                _OPDSrvxml += " AMOUNT=$" + setProperDecimals(parseFloat(txtrateAmount) + Math.round(parseFloat(tax_amt))) + "$";
                _OPDSrvxml += " CONCESSION=$" + total_disc_Pct + "$";
                _OPDSrvxml += " CONCESSION_AMOUNT=$" + total_disc_Amt + "$";

                var Grosline = setProperDecimals(parseFloat(txtrateAmount) + Math.round(parseFloat(tax_amt)));
                var concline = total_disc_Amt;
                concline = concline || 0;
                var netlineamt = parseFloat(Grosline) - parseFloat(concline);
                netlineamt = netlineamt || 0;
                if (parseInt(class_Srv_id) > 0) {
                    _OPDSrvxml += " NET_AMOUNT=$" + setProperDecimals(parseFloat(pakageseramt) + Math.round(parseFloat(tax_amt))) + "$";
                }
                else {
                    _OPDSrvxml += " NET_AMOUNT=$" + netlineamt + "$";
                }

                _OPDSrvxml += " COMPANY_AMOUNT=$" + setProperDecimals(parseFloat(Cmp_G_Amt) + Math.round(parseFloat(cmp_tax_amt))) + "$";
                _OPDSrvxml += " COMPANY_CNCSN_PCT=$" + Cmp_Disc_Pcnt + "$";
                _OPDSrvxml += " COMPANY_CNCSN_AMT=$" + setProperDecimals(Cmp_Disc_Amt) + "$";
                _OPDSrvxml += " EMP_GROSS_AMT=$" + setProperDecimals(parseFloat(txtamount) + Math.round(parseFloat(pat_tax_amt))) + "$";

                var companygross = setProperDecimals(parseFloat(Cmp_G_Amt) + Math.round(parseFloat(cmp_tax_amt)));
                companygross = companygross || 0;
                if (companygross == 0) {
                    _OPDSrvxml += " CONCESSION_PCT=$" + total_disc_Pct + "$";
                    _OPDSrvxml += " CONCESSION_AMT=$" + total_disc_Amt + "$";
                } else {
                    _OPDSrvxml += " CONCESSION_AMT=$" + Emp_Disc_Amt + "$";
                    _OPDSrvxml += " CONCESSION_PCT=$" + Emp_Disc_Pcnt + "$";
                }

                var empgossamtline = setProperDecimals(parseFloat(txtamount) + Math.round(parseFloat(pat_tax_amt)));
                var empconcline = 0;
                if (companygross == 0) {
                    empconcline = total_disc_Amt;
                } else {
                    empconcline = Emp_Disc_Amt;
                }

                empconcline = empconcline || 0;

                var empnetamtline = parseFloat(empgossamtline) - parseFloat(empconcline);
                empnetamtline = empnetamtline || 0;

                _OPDSrvxml += " EMP_NET_AMT=$" + empnetamtline + "$";

                _OPDSrvxml += " COMPANY_NET_AMT=$" + setProperDecimals(parseFloat(Cmp_N_Amt) + Math.round(parseFloat(cmp_tax_amt))) + "$";
                _OPDSrvxml += " COLOR_CD=$" + COLOR_CD + "$";

                _OPDSrvxml += " DOCTOR_PCT=$" + doctor_pct + "$";
                _OPDSrvxml += " ORG_PCT=$" + org_pct + "$";
                doctor_pct = doctor_pct || 0;
                org_pct = org_pct || 0;
                var orgamt = parseFloat(empnetamtline) * parseFloat(org_pct) / 100;
                orgamt = orgamt || 0;
                orgamt = Math.round(orgamt);
                var docamt = parseFloat(empnetamtline) - parseFloat(orgamt);
                docamt = docamt || 0;

                _OPDSrvxml += " DOCTOR_PRICE=$" + docamt + "$";
                _OPDSrvxml += " ORG_PRICE=$" + orgamt + "$";


                if (hdnServiceTypID == 1) {
                    _OPDSrvxml += " DOCTOR_ID=$" + hdnDoctorID + "$";
                }
                else {
                    _OPDSrvxml += " DOCTOR_ID=$" + srvdoctor + "$";
                }

                if (PostCons == true)
                    _OPDSrvxml += " POST_CONS =$Y$";
                else
                    _OPDSrvxml += " POST_CONS =$N$";

                _OPDSrvxml += " DEPARTMENT_ID=$" + hdnDeptId + "$";
                _OPDSrvxml += " RECORD_SNO=$" + bill_sno + "$";
                _OPDSrvxml += " SERVICE_PRICE_ID=$" + hdnserpriceid + "$";
                _OPDSrvxml += " TO_LOC_ID=$" + 1 + "$";
                _OPDSrvxml += " WF_STATUS=$" + "A" + "$";
                _OPDSrvxml += " TARIFF_ID=$" + Tariff_ID + "$";
                _OPDSrvxml += " COMPANY_TARIFF_ID=$" + Tpa_Id + "$";
                _OPDSrvxml += " IS_CASH=$" + "N" + "$";
                _OPDSrvxml += " EDIT_SERVICE_NAME=$" + ReplaceSplCharactor(edit_srv_name) + "$";
                if (edit_srv_cd == '') {
                    _OPDSrvxml += " EDIT_SERVICE_CD=$" + txtServiceCode + "$";
                }
                else {
                    _OPDSrvxml += " EDIT_SERVICE_CD=$" + edit_srv_cd + "$";
                }
                _OPDSrvxml += " IS_FOREIGN_SERVICE=$" + "N" + "$";
                _OPDSrvxml += " SERVICE_STATUS=$" + "B" + "$";
                _OPDSrvxml += " IS_EMERGENCY=$" + ISEmergency + "$";
                _OPDSrvxml += " APPT_NO=$" + _apptID + "$";
                _OPDSrvxml += " IS_EMERGNCY_PRICE=$" + hdnIsEmerPrice + "$";
                _OPDSrvxml += " CNCL_HIS_ID=$" + histtype + "$";
                _OPDSrvxml += " MEDICATION_ID=$" + medictype + "$";
                _OPDSrvxml += " IS_TAKEN_TODAY=$" + takentoday + "$";
                _OPDSrvxml += " LMP_DT=$" + lmpcal + "$";
                _OPDSrvxml += " DOSAGE=$" + docageqty + "$";
                _OPDSrvxml += " OTHER_MEDICATION=$" + outhermedic + "$";
                _OPDSrvxml += " SPECIMEN_NAME=$" + histSpecimen + "$";
                _OPDSrvxml += " SITE=$" + histsite + "$";
                _OPDSrvxml += " REMARKS=$" + ReplaceSplCharactor(srvremarks) + "$";
                _OPDSrvxml += " IS_FREE_FOLLOWUP=$" + hdn_is_free_followup + "$";
                _OPDSrvxml += " TRF=$" + histtrf + "$";
                _OPDSrvxml += " SRV_ACKN_STATUS_ID=$" + srv_cons_status_id + "$";
                _OPDSrvxml += " SESSION_ID=$" + document.getElementById('' + ctrlcom + '_HDNSESSIONID').value + "$";

                if (parseInt(item_id) > 0) {
                    _OPDSrvxml += " ITEM_ID=$" + item_id + "$";
                }
                if (parseInt(item_group_id) > 0) {
                    _OPDSrvxml += " ITEM_GROUP_ID=$" + item_group_id + "$";
                }
                _OPDSrvxml += " COMPANY_BILL_HEAD_ID=$" + billinghead_id + "$";
                _OPDSrvxml += " TRN_SOURCE_ID=$" + 0 + "$";

                _OPDSrvxml += " ORIGINAL_PRICE=$" + setProperDecimals(txtRate) + "$ ";

                var ucconsultatant = document.getElementById('' + ctrlcom + '_ucConsultant__hiddenID').value;

                if (document.getElementById('' + ctrlcom + '_chk_old').checked == true)
                    _OPDSrvxml += " TREATED_BY_ID=$" + ordr_doctor_id + "$ ";
                else
                    _OPDSrvxml += " TREATED_BY_ID=$" + ucconsultatant + "$ ";
                _OPDSrvxml += " RATE_EXC_GST=$" + RATE_EXC_GST + "$ ";
                _OPDSrvxml += " TAX_PCT=$" + TAX_PCT + "$";
                _OPDSrvxml += " TAX_AMOUNT=$" + Math.round(tax_amt) + "$";
                _OPDSrvxml += " CMP_TAX_AMT=$" + Math.round(cmp_tax_amt) + "$";
                _OPDSrvxml += " EMP_TAX_AMT=$" + Math.round(pat_tax_amt) + "$";



                _OPDSrvxml += " SGST_PCT=$" + sgst_pct + "$";
                //_OPDSrvxml += " SGST_AMOUNT=$" + sgst_amount + "$";
                _OPDSrvxml += " CGST_PCT=$" + cgst_pct + "$";
                //_OPDSrvxml += " CGST_AMOUNT=$" + cgst_amount + "$";


                var SGST_AMOUNT = setProperDecimals(sgst_amount);
                SGST_AMOUNT = SGST_AMOUNT || 0;
                var CGST_AMOUNT = setProperDecimals(cgst_amount);
                CGST_AMOUNT = CGST_AMOUNT || 0;

                _OPDSrvxml += " SGST_AMOUNT=$" + SGST_AMOUNT + "$";
                _OPDSrvxml += " CGST_AMOUNT=$" + CGST_AMOUNT + "$";


                _OPDSrvxml += " SAC_CD=$" + SAC_CD + "$";
                _OPDSrvxml += " REC_TYPE_ID=$" + rec_type_id + "$";

                _OPDSrvxml += " CNCSN_AUTH_ID=$" + con_auth_id + "$";
                _OPDSrvxml += " CONC_RULE_ID=$" + con_rule_id + "$";


                _OPDSrvxml += " />";
            }
        }
    });
    var OPpayfee = '0', OPpaydue = '0';
    totlnetamt = parseFloat(totlamt) - parseFloat(hdnDiscAmt);
    totlnetamt = Math.round(parseFloat(totlnetamt) + parseFloat(PAT_TAX_AMT));

    if (totlnetamt != "0") {
        if (PAID_AMOUNT > 0 && parseFloat(PAID_AMOUNT) >= parseFloat(totlnetamt)) {
            OPpayfee = parseFloat(totlnetamt);
        }
        else if (PAID_AMOUNT > 0 && parseFloat(PAID_AMOUNT) <= parseFloat(totlnetamt)) {
            OPpayfee = parseFloat(PAID_AMOUNT);
        }
    }
    if (DUE_AMOUNT > 0) {
        if (parseFloat(PAID_AMOUNT) < parseFloat(totlnetamt)) {
            OPpaydue = parseFloat(totlnetamt) - parseFloat(PAID_AMOUNT);
        }
    }
    if (parseFloat(OPpayfee) > parseFloat(PAID_AMOUNT)) {
        PAID_AMOUNT = parseFloat(PAID_AMOUNT) - parseFloat(OPpayfee);
    }
    OPpayfee = Math.round(OPpayfee);

    if (cnt == 0) {
        _OPDxml = '';
    }
    else {
        if (ind_act_srv_net == undefined || ind_act_srv_net == null || ind_act_srv_net == '') { ind_act_srv_net = 0; }
        //YES
        _OPDxml += OPDFOBILLROOT(UmrNO, hdnDrId, totlamt, hdnDiscAmt, hdnDiscPer, totlnetamt, OPpayfee, OPpaydue, Cmp_Id, Tpa_Id, _reg_id, ind_act_srv_net);
        _OPDxml += _OPDSrvxml;
        _OPDxml += FO_BILL_SRV_SCH_ROOT;

        var _xmlStr_concession = '';
        var _Xml_healthcard_string = '';
        /* Multiple Discounts */
        var totnetamt = 0;
        var totgrossamt = 0;

        var mouauthid = document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnPartyDiscAuthId').value;
        var mouauthname = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtDiscAuthPartyName').value;
        var moudiscPer = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpartydis').value;
        var moudiscAmt = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpartygrossamt').value;
        var CmpMOUAmt_tot = 0;

        if (document.getElementById('' + ctrlcom + '_ReceiptControl2_chkismultiple').checked == true) {
            var staffConAmt_tot = 0, staffConper_tot = 0, mngmtConper_tot = 0, MngmtConAmt_tot = 0, ebConper_tot = 0, ebConAmt_tot = 0, ConRuleConper_tot = 0, ConRuleConAmt_tot = 0, HCConper_tot = 0, HCConAmt_tot = 0, CashConper_tot = 0, CashConAmt_tot = 0;
            CmpMOUAmt_tot = 0;
            $("table[id$=gvServices] tr:has(td)").each(function (e) {

                var hdnServiceID = $(this).closest('tr').find("input[type=hidden][id*=hdnServiceID]").val();
                var txtserviceName = $(this).closest('tr').find("input[type=text][id*=txtServiceName]").val();
                var hdnDoctorID = $(this).closest('tr').find("input[type=hidden][id*=hdnDoctorID]").val();
                var class_Srv_id = $(this).closest('tr').find("input[type=hidden][id*=hdnClass_Srv_ID]").val();
                var hdnServiceClass = $(this).closest('tr').find("input[type=hidden][id*=hdnServiceClass]").val();
                var hdnServiceTypID = $(this).closest('tr').find("input[type=hidden][id*=hdnServiceTypID]").val();

                var Cmp_Disc_Pcnt = $(this).closest('tr').find('input[type=text][id*=txtCDiscP]').val();
                var Cmp_Disc_Amt = $(this).closest('tr').find('input[type=text][id*=txtCDiscAmt]').val();
                if (Cmp_Disc_Pcnt != undefined && Cmp_Disc_Pcnt != null && Cmp_Disc_Pcnt != '') { Cmp_Disc_Pcnt = Cmp_Disc_Pcnt; } else { Cmp_Disc_Pcnt = '0'; }
                if (Cmp_Disc_Amt != undefined && Cmp_Disc_Amt != null && Cmp_Disc_Amt != '') { Cmp_Disc_Amt = Cmp_Disc_Amt; } else { Cmp_Disc_Amt = '0'; }


                if (hdnServiceClass == "3") {
                    document.getElementById('' + ctrlcom + '_hdn_pkg_param_opd').value = hdnServiceClass;
                }
                if (hdnServiceID == '' || hdnServiceID == undefined || hdnServiceID == null) { hdnServiceID = 0; }
                if (hdnDoctorID == '' || hdnDoctorID == undefined || hdnDoctorID == null) { hdnDoctorID = 0; }
                if (class_Srv_id == '' || class_Srv_id == undefined || class_Srv_id == null) { class_Srv_id = 0; }
                if (hdnServiceTypID == '' || hdnServiceTypID == undefined || hdnServiceTypID == null) { hdnServiceTypID = 0; }
                if (hdnServiceClass == '' || hdnServiceClass == undefined || hdnServiceClass == null) { hdnServiceClass = 0; }
                var _type = 'Y';
                if (hdnServiceTypID == '5' || hdnServiceTypID == '1' || hdnServiceTypID == '0') {
                    _type = 'N';
                }
                if (hdnServiceClass == '3' || _type == 'Y' || (hdnServiceID == '2' && class_Srv_id > 0)) {
                    var staffConAmt = $(this).closest('tr').find('input[type=text][id*=txtstAmt]').val();
                    var staffConper = $(this).closest('tr').find('input[type=text][id*=txtstPer]').val();
                    var mngmtConper = $(this).closest('tr').find('input[type=text][id*=txtmaPer]').val();
                    var MngmtConAmt = $(this).closest('tr').find('input[type=text][id*=txtmgAmt]').val();
                    var ebConper = $(this).closest('tr').find('input[type=text][id*=txtebPer]').val();
                    var ebConAmt = $(this).closest('tr').find('input[type=text][id*=txtebAmt]').val();
                    var ConRuleConper = $(this).closest('tr').find('input[type=text][id*=txtRulePer]').val();
                    var ConRuleConAmt = $(this).closest('tr').find('input[type=text][id*=txtcncrlAmt]').val();
                    var HCConper = $(this).closest('tr').find('input[type=text][id*=txthcPer]').val();
                    var HCConAmt = $(this).closest('tr').find('input[type=text][id*=txtHcAmt]').val();
                    var CashConper = $(this).closest('tr').find('input[type=text][id*=txtDiscP]').val();
                    var CashConAmt = $(this).closest('tr').find('input[type=text][id*=txtDiscAmt]').val();
                    var srvgrossamt = $(this).closest('tr').find('input[type=text][id*=txtPamt]').val();
                    var srvnetamt = $(this).closest('tr').find('input[type=text][id*=txtPNAmt]').val();

                    if (srvgrossamt == '' || srvgrossamt == undefined || srvgrossamt == null) { srvgrossamt = 0; }
                    if (srvnetamt == '' || srvnetamt == undefined || srvnetamt == null) { srvnetamt = 0; }
                    if (staffConper == '' || staffConper == undefined || staffConper == null) { staffConper = 0; }
                    if (staffConAmt == '' || staffConAmt == undefined || staffConAmt == null) { staffConAmt = 0; }
                    if (mngmtConper == '' || mngmtConper == undefined || mngmtConper == null) { mngmtConper = 0; }
                    if (MngmtConAmt == '' || MngmtConAmt == undefined || MngmtConAmt == null) { MngmtConAmt = 0; }
                    if (ebConper == '' || ebConper == undefined || ebConper == null) { ebConper = 0; }
                    if (ebConAmt == '' || ebConAmt == undefined || ebConAmt == null) { ebConAmt = 0; }
                    if (ConRuleConper == '' || ConRuleConper == undefined || ConRuleConper == null) { ConRuleConper = 0; }
                    if (ConRuleConAmt == '' || ConRuleConAmt == undefined || ConRuleConAmt == null) { ConRuleConAmt = 0; }
                    if (HCConper == '' || HCConper == undefined || HCConper == null) { HCConper = 0; }
                    if (HCConAmt == '' || HCConAmt == undefined || HCConAmt == null) { HCConAmt = 0; }
                    if (CashConper == '' || CashConper == undefined || CashConper == null) { CashConper = 0; }
                    if (CashConAmt == '' || CashConAmt == undefined || CashConAmt == null) { CashConAmt = 0; }

                    staffConAmt_tot = parseFloat(staffConAmt_tot) + parseFloat(staffConAmt);
                    MngmtConAmt_tot = parseFloat(MngmtConAmt_tot) + parseFloat(MngmtConAmt);
                    ebConAmt_tot = parseFloat(ebConAmt_tot) + parseFloat(ebConAmt);
                    ConRuleConAmt_tot = parseFloat(ConRuleConAmt_tot) + parseFloat(ConRuleConAmt);
                    HCConAmt_tot = parseFloat(HCConAmt_tot) + parseFloat(HCConAmt);
                    CashConAmt_tot = parseFloat(CashConAmt_tot) + parseFloat(CashConAmt);
                    CmpMOUAmt_tot = parseFloat(CmpMOUAmt_tot) + parseFloat(Cmp_Disc_Amt);
                    totgrossamt = parseFloat(totgrossamt) + parseFloat(srvgrossamt);
                    totnetamt = parseFloat(totnetamt) + parseFloat(srvnetamt);
                    $("table[id*=gvMultipleConcession] tr:has(td)").each(function (e) {
                        var cncsntypeid = $(this).closest('tr').find("[id*=ddlMultiDiscounttype]").val();
                        var Amount = $(this).closest('tr').find("input[type=text][id*=txtAmount]").val();
                        if (cncsntypeid == undefined || cncsntypeid == null || cncsntypeid == "") { cncsntypeid = 0; }
                        if (Amount == undefined || Amount == null || Amount == "" || Amount == "NaN") { Amount = 0; }

                        var _Cncs_Per = 0;
                        if (cncsntypeid == '1') {
                            _Cncs_Per = CashConper;
                        }
                        else if (cncsntypeid == '2') {
                            _Cncs_Per = HCConper;
                        }
                        else if (cncsntypeid == '3') {
                            _Cncs_Per = mngmtConper;
                        }
                        else if (cncsntypeid == '4') {
                            _Cncs_Per = staffConper;
                        }
                        else if (cncsntypeid == '5') {
                            _Cncs_Per = ebConper;
                        }
                        else if (cncsntypeid == '6') {
                            _Cncs_Per = ConRuleConper;
                        }

                        if (cncsntypeid > 0 && parseFloat(Amount) > 0 && parseFloat(_Cncs_Per)) {
                            _xmlStr_concession += "<FO_BILL_SRV_CNCSN";
                            _xmlStr_concession += " BILL_SRV_CNCSN_ID=$" + 0 + "$";
                            _xmlStr_concession += " BILL_SRV_ID=$" + 0 + "$";
                            _xmlStr_concession += " BILL_CNCSN_ID=$" + "0" + "$";
                            _xmlStr_concession += " CONCESSION_TYPE_ID=$" + cncsntypeid + "$";
                            _xmlStr_concession += " CONCESSION_AMOUNT=$" + setProperDecimals(Amount) + "$";
                            _xmlStr_concession += " PAT_CONC_PER=$" + CashConper + "$";
                            _xmlStr_concession += " PAT_CONC_AMT=$" + setProperDecimals(CashConAmt) + "$";
                            _xmlStr_concession += " HC_PERC=$" + HCConper + "$";
                            _xmlStr_concession += " HC_AMT=$" + setProperDecimals(HCConAmt) + "$";
                            _xmlStr_concession += " MG_PERC=$" + mngmtConper + "$";
                            _xmlStr_concession += " MG_AMT=$" + setProperDecimals(MngmtConAmt) + "$";
                            _xmlStr_concession += " STAFF_PERC=$" + staffConper + "$";
                            _xmlStr_concession += " STAFF_AMT=$" + setProperDecimals(staffConAmt) + "$";
                            _xmlStr_concession += " EB_PERC=$" + ebConper + "$";
                            _xmlStr_concession += " EB_AMT=$" + setProperDecimals(ebConAmt) + "$";
                            _xmlStr_concession += " CNCSNRULEPERC=$" + ConRuleConper + "$";
                            _xmlStr_concession += " CNCSNRULEAMT=$" + setProperDecimals(ConRuleConAmt) + "$";
                            _xmlStr_concession += " RECORD_STATUS=$" + 'A' + "$";
                            _xmlStr_concession += " SERVICE_ID=$" + hdnServiceID + "$";
                            _xmlStr_concession += " DOCTOR_ID=$" + hdnDoctorID + "$";
                            _xmlStr_concession += " CONCESSION_PERCENT=$" + _Cncs_Per + "$";
                            _xmlStr_concession += "/>";
                        }

                    });
                    if (parseFloat(Cmp_Disc_Amt) > 0 && parseFloat(Cmp_Disc_Pcnt) > 0) {
                        _xmlStr_concession += "<FO_BILL_SRV_CNCSN";
                        _xmlStr_concession += " BILL_SRV_CNCSN_ID=$" + 0 + "$";
                        _xmlStr_concession += " BILL_SRV_ID=$" + 0 + "$";
                        _xmlStr_concession += " BILL_CNCSN_ID=$" + "0" + "$";
                        _xmlStr_concession += " CONCESSION_TYPE_ID=$" + 17 + "$";
                        _xmlStr_concession += " MOU_DISCOUNT=$" + setProperDecimals(Cmp_Disc_Amt) + "$";
                        _xmlStr_concession += " RECORD_STATUS=$" + 'A' + "$";
                        _xmlStr_concession += " SERVICE_ID=$" + hdnServiceID + "$";
                        _xmlStr_concession += " DOCTOR_ID=$" + hdnDoctorID + "$";
                        _xmlStr_concession += " CONCESSION_PERCENT=$" + Cmp_Disc_Pcnt + "$";
                        _xmlStr_concession += "/>";
                    }
                }
            });


            $("table[id*=gvMultipleConcession] tr:has(td)").each(function (e) {
                var cncsntypeid = $(this).closest('tr').find("[id*=ddlMultiDiscounttype]").val();
                var Amount = $(this).closest('tr').find("input[type=text][id*=txtAmount]").val();
                var authid = $(this).closest('tr').find("input[type=hidden][id*=hdnauthid]").val();
                var _cncsPer = $(this).closest('tr').find("input[type=text][id*=txtPersentage]").val();
                var _ddlmodeid = $(this).closest('tr').find("[id*=ddlModes]").val();
                var _Cardno = $(this).closest('tr').find("input[type=text][id*=txtcardno]").val();
                var cncsremarks = $(this).closest('tr').find("input[type=text][id*=txtCRemks]").val();
                var cncsn_rule_id = document.getElementById('' + ctrlcom + '_umrPatientDetails_hdncncsn_rule_id').value;
                if (parseInt(cncsn_rule_id) > 0)
                { }
                else
                { cncsn_rule_id = 0; }
                if (cncsn_rule_id == undefined || cncsn_rule_id == null || cncsn_rule_id == '')
                { cncsn_rule_id = 0; }
                if (cncsntypeid == undefined || cncsntypeid == null || cncsntypeid == '') { cncsntypeid = 0; }
                if (Amount == undefined || Amount == null || Amount == '' || Amount == "NaN") { Amount = 0; }
                if (authid == undefined || authid == null || authid == '') { authid = 0; }
                if (_cncsPer == undefined || _cncsPer == null || _cncsPer == '') { _cncsPer = 0; }
                if (_ddlmodeid == undefined || _ddlmodeid == null || _ddlmodeid == '') { _ddlmodeid = 0; }
                if (_Cardno == undefined || _Cardno == null) { _Cardno = ''; }
                if (cncsntypeid == '2') {
                    $('#' + ctrlcom + '_hdnutilizamt').val(Amount);
                }
                var healthcarddetid = 0;
                var healthcardid = 0;
                if (_Cardno != '') {
                    healthcarddetid = document.getElementById('ctl00_ContentPlaceHolder1_umrPatientDetails_hdnhealthdepencyid').value;
                    healthcardid = document.getElementById('ctl00_ContentPlaceHolder1_umrPatientDetails_hdnhealthcard_id').value;
                }
                if (healthcarddetid == undefined || healthcarddetid == null || healthcarddetid == '') { healthcarddetid = "0"; }
                if (healthcardid == undefined || healthcardid == null || healthcardid == '') { healthcardid = "0"; }
                var cardid = 0;
                if (cncsntypeid == 2) {
                    //cardid = $(this).closest('tr').find("input[type=hidden][id*=hdncardid]").val();
                    cardid = document.getElementById('ctl00_ContentPlaceHolder1_umrPatientDetails_hdncncsn_rule_id').value;
                } else if (cncsntypeid == 5) {
                    cardid = $(this).closest('tr').find("input[type=hidden][id*=hdneventid]").val();
                } else if (cncsntypeid == 6) {
                    cardid = $(this).closest('tr').find("input[type=hidden][id*=hdnRuleid]").val();
                } else {
                    cardid = 0;
                }

                if (cncsntypeid != '0' && parseFloat(_cncsPer) > 0) {
                    _xmlStr_concession += "<FO_BILL_CNCSN";
                    _xmlStr_concession += " BILL_CNCSN_ID=$" + 0 + "$";
                    _xmlStr_concession += " BILL_CNCSN_REV_NO=$" + 1 + "$";
                    _xmlStr_concession += " BILL_ID=$" + "0" + "$";
                    _xmlStr_concession += " CONCESSION_TYPE_ID=$" + cncsntypeid + "$";
                    _xmlStr_concession += " CONCESSION_MODE_ID=$" + _ddlmodeid + "$";

                    _xmlStr_concession += " CONCESSION_PERCENT=$" + Math.round(_cncsPer) + "$";
                    if (Math.round(CashConAmt_tot) > 0) { } else { CashConAmt_tot = 0; }
                    if (Math.round(HCConAmt_tot) > 0) { } else { HCConAmt_tot = 0; }
                    if (Math.round(MngmtConAmt_tot) > 0) { } else { MngmtConAmt_tot = 0; }
                    if (Math.round(staffConAmt_tot) > 0) { } else { staffConAmt_tot = 0; }
                    if (Math.round(ebConAmt_tot) > 0) { } else { ebConAmt_tot = 0; }
                    if (Math.round(ConRuleConAmt_tot) > 0) { } else { ConRuleConAmt_tot = 0; }

                    if (cncsntypeid == '1') /* cash */
                    { _xmlStr_concession += " CONCESSION_AMOUNT=$" + Math.round(CashConAmt_tot) + "$"; }
                    else if (cncsntypeid == '2') /* hc*/
                    { _xmlStr_concession += " CONCESSION_AMOUNT=$" + Math.round(HCConAmt_tot) + "$"; }
                    else if (cncsntypeid == '3') /*mg*/
                    { _xmlStr_concession += " CONCESSION_AMOUNT=$" + Math.round(MngmtConAmt_tot) + "$"; }
                    else if (cncsntypeid == '4') /* staff*/
                    { _xmlStr_concession += " CONCESSION_AMOUNT=$" + Math.round(staffConAmt_tot) + "$"; }
                    else if (cncsntypeid == '5') /* event */
                    { _xmlStr_concession += " CONCESSION_AMOUNT=$" + Math.round(ebConAmt_tot) + "$"; }
                    else if (cncsntypeid == '6') /*concession rule */
                    { _xmlStr_concession += " CONCESSION_AMOUNT=$" + Math.round(ConRuleConAmt_tot) + "$"; }

                    _xmlStr_concession += " RECORD_STATUS=$" + "A" + "$";
                    _xmlStr_concession += " CNCSN_RULE_ID=$" + cardid + "$";
                    _xmlStr_concession += " CARD_NO=$" + _Cardno + "$";
                    _xmlStr_concession += " CNCSN_AUTH_ID=$" + authid + "$";
                    _xmlStr_concession += " REMARKS=$" + ReplaceSplCharactor(cncsremarks) + "$";

                    var Tpa_Id = 0;
                    if ($('#' + ctrlcom + '_chk_old')[0].checked == false) {
                        Tpa_Id = document.getElementById('' + ctrlcom + '_EmployerInfo1_uctpa__hiddenID').value;
                    } else {
                        Tpa_Id = document.getElementById('' + ctrlcom + '_uccorporate_CmpLookup__hiddenID').value;
                    }
                    if (Tpa_Id == null || Tpa_Id == undefined || Tpa_Id == '') { Tpa_Id = "0"; }

                    _xmlStr_concession += " CNCSN_REF_NO=$" + 0 + "$";
                    if (parseFloat(Tpa_Id) > 0)
                        _xmlStr_concession += " BILL_TYPE_ID=$" + "17" + "$";
                    else
                        _xmlStr_concession += " BILL_TYPE_ID=$" + "7" + "$";
                    _xmlStr_concession += " HEALTH_CARD_DET_ID=$" + healthcarddetid + "$";
                    _xmlStr_concession += " HEALTH_CARD_ID=$" + healthcardid + "$";
                    _xmlStr_concession += "/>";
                }
            });


        }
        else if (document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlDiscountType').value == 1 || (document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlDiscountType').value == 0 && parseFloat(moudiscPer) > 0 && parseFloat(moudiscAmt) > 0)) {
            /* Single Discount */
            var CashConAmt_tot = 0;
            CmpMOUAmt_tot = 0;
            var sing_disc_auth = $('#' + ctrlcom + '_ReceiptControl2_ucdueauth__hiddenID').val();
            if (sing_disc_auth == undefined || sing_disc_auth == null || sing_disc_auth == '' || sing_disc_auth == 'undefined') { sing_disc_auth = 0; }
            Con_Remarks = ReplaceSplCharactor($('#' + ctrlcom + '_ReceiptControl2_txtRemarks').val());
            $("table[id$=gvServices] tr:has(td)").each(function (e) {

                var hdnServiceID = $(this).closest('tr').find("input[type=hidden][id*=hdnServiceID]").val();
                var txtserviceName = $(this).closest('tr').find("input[type=text][id*=txtServiceName]").val();
                var hdnDoctorID = $(this).closest('tr').find("input[type=hidden][id*=hdnDoctorID]").val();
                var class_Srv_id = $(this).closest('tr').find("input[type=hidden][id*=hdnClass_Srv_ID]").val();
                var hdnServiceClass = $(this).closest('tr').find("input[type=hidden][id*=hdnServiceClass]").val();
                var hdnServiceTypID = $(this).closest('tr').find("input[type=hidden][id*=hdnServiceTypID]").val();
                if (hdnServiceClass == "3") {
                    document.getElementById('' + ctrlcom + '_hdn_pkg_param_opd').value = hdnServiceClass;
                }
                if (hdnServiceID == '' || hdnServiceID == undefined || hdnServiceID == null) { hdnServiceID = 0; }
                if (hdnDoctorID == '' || hdnDoctorID == undefined || hdnDoctorID == null) { hdnDoctorID = 0; }
                if (class_Srv_id == '' || class_Srv_id == undefined || class_Srv_id == null) { class_Srv_id = 0; }
                if (hdnServiceTypID == '' || hdnServiceTypID == undefined || hdnServiceTypID == null) { hdnServiceTypID = 0; }
                if (hdnServiceClass == '' || hdnServiceClass == undefined || hdnServiceClass == null) { hdnServiceClass = 0; }
                var _type = 'Y'; var CashConper = 0; var CashConAmt = 0;
                if (hdnServiceTypID == '5' || hdnServiceTypID == '1' || hdnServiceTypID == '0') {
                    _type = 'N';
                }

                var Cmp_Disc_Pcnt = $(this).closest('tr').find('input[type=text][id*=txtCDiscP]').val();
                var Cmp_Disc_Amt = $(this).closest('tr').find('input[type=text][id*=txtCDiscAmt]').val();
                if (Cmp_Disc_Pcnt != undefined && Cmp_Disc_Pcnt != null && Cmp_Disc_Pcnt != '') { Cmp_Disc_Pcnt = Cmp_Disc_Pcnt; } else { Cmp_Disc_Pcnt = '0'; }
                if (Cmp_Disc_Amt != undefined && Cmp_Disc_Amt != null && Cmp_Disc_Amt != '') { Cmp_Disc_Amt = Cmp_Disc_Amt; } else { Cmp_Disc_Amt = '0'; }


                if (hdnServiceClass == '3' || _type == 'Y' || (hdnServiceID == '2' && class_Srv_id > 0)) {
                    CashConper = $(this).closest('tr').find('input[type=text][id*=txtDiscP]').val();
                    CashConAmt = $(this).closest('tr').find('input[type=text][id*=txtDiscAmt]').val();
                    if (CashConper == '' || CashConper == undefined || CashConper == null) { CashConper = 0; }
                    if (CashConAmt == '' || CashConAmt == undefined || CashConAmt == null) { CashConAmt = 0; }
                    CashConAmt_tot = parseFloat(CashConAmt_tot) + parseFloat(CashConAmt);
                    CmpMOUAmt_tot = parseFloat(CmpMOUAmt_tot) + parseFloat(Cmp_Disc_Amt);

                    if (parseFloat(CashConAmt) > 0 && parseFloat(CashConper) > 0) {
                        _xmlStr_concession += "<FO_BILL_SRV_CNCSN";
                        _xmlStr_concession += " BILL_SRV_CNCSN_ID=$" + 0 + "$";
                        _xmlStr_concession += " BILL_SRV_ID=$" + 0 + "$";
                        _xmlStr_concession += " BILL_CNCSN_ID=$" + "0" + "$";
                        _xmlStr_concession += " CONCESSION_TYPE_ID=$" + 1 + "$";
                        _xmlStr_concession += " CONCESSION_AMOUNT=$" + setProperDecimals(CashConAmt) + "$";
                        _xmlStr_concession += " PAT_CONC_PER=$" + CashConper + "$";
                        _xmlStr_concession += " PAT_CONC_AMT=$" + setProperDecimals(CashConAmt) + "$";
                        _xmlStr_concession += " HC_PERC=$" + 0 + "$";
                        _xmlStr_concession += " HC_AMT=$" + 0 + "$";
                        _xmlStr_concession += " MG_PERC=$" + 0 + "$";
                        _xmlStr_concession += " MG_AMT=$" + 0 + "$";
                        _xmlStr_concession += " STAFF_PERC=$" + 0 + "$";
                        _xmlStr_concession += " STAFF_AMT=$" + 0 + "$";
                        _xmlStr_concession += " EB_PERC=$" + 0 + "$";
                        _xmlStr_concession += " EB_AMT=$" + 0 + "$";
                        _xmlStr_concession += " CNCSNRULEPERC=$" + 0 + "$";
                        _xmlStr_concession += " CNCSNRULEAMT=$" + 0 + "$";
                        _xmlStr_concession += " RECORD_STATUS=$" + 'A' + "$";
                        _xmlStr_concession += " SERVICE_ID=$" + hdnServiceID + "$";
                        _xmlStr_concession += " DOCTOR_ID=$" + hdnDoctorID + "$";
                        _xmlStr_concession += " CONCESSION_PERCENT=$" + CashConper + "$";
                        _xmlStr_concession += "/>";
                    }

                    if (parseFloat(Cmp_Disc_Amt) > 0 && parseFloat(Cmp_Disc_Pcnt) > 0) {
                        _xmlStr_concession += "<FO_BILL_SRV_CNCSN";
                        _xmlStr_concession += " BILL_SRV_CNCSN_ID=$" + 0 + "$";
                        _xmlStr_concession += " BILL_SRV_ID=$" + 0 + "$";
                        _xmlStr_concession += " BILL_CNCSN_ID=$" + "0" + "$";
                        _xmlStr_concession += " CONCESSION_TYPE_ID=$" + 17 + "$";
                        _xmlStr_concession += " MOU_DISCOUNT=$" + setProperDecimals(Cmp_Disc_Amt) + "$";
                        _xmlStr_concession += " RECORD_STATUS=$" + 'A' + "$";
                        _xmlStr_concession += " SERVICE_ID=$" + hdnServiceID + "$";
                        _xmlStr_concession += " DOCTOR_ID=$" + hdnDoctorID + "$";
                        _xmlStr_concession += " CONCESSION_PERCENT=$" + Cmp_Disc_Pcnt + "$";
                        _xmlStr_concession += "/>";
                    }
                }
            });
            var sing_disc_pcnt = $('#' + ctrlcom + '_ReceiptControl2_txtpatdis').val();
            if (sing_disc_pcnt == undefined || sing_disc_pcnt == null || sing_disc_pcnt == '' || sing_disc_pcnt == 'undefined') { sing_disc_pcnt = 0; }
            if (parseFloat(sing_disc_pcnt) > 0 && parseFloat(CashConAmt_tot) > 0) {
                _xmlStr_concession += "<FO_BILL_CNCSN";
                _xmlStr_concession += " BILL_CNCSN_ID=$" + 0 + "$";
                _xmlStr_concession += " BILL_CNCSN_REV_NO=$" + 1 + "$";
                _xmlStr_concession += " BILL_ID=$" + "0" + "$";
                _xmlStr_concession += " CONCESSION_TYPE_ID=$" + 1 + "$";
                _xmlStr_concession += " CONCESSION_MODE_ID=$" + 1 + "$";
                _xmlStr_concession += " CONCESSION_PERCENT=$" + sing_disc_pcnt + "$";
                if (Math.round(CashConAmt_tot) > 0) { } else { CashConAmt_tot = 0; }
                _xmlStr_concession += " CONCESSION_AMOUNT=$" + Math.round(CashConAmt_tot) + "$";
                _xmlStr_concession += " RECORD_STATUS=$" + "A" + "$";
                _xmlStr_concession += " CNCSN_RULE_ID=$" + "" + "$";
                _xmlStr_concession += " CARD_NO=$" + "" + "$";
                _xmlStr_concession += " CNCSN_AUTH_ID=$" + sing_disc_auth + "$";
                _xmlStr_concession += " REMARKS=$" + ReplaceSplCharactor(Con_Remarks) + "$";
                _xmlStr_concession += " CNCSN_REF_NO=$" + 0 + "$";
                _xmlStr_concession += " BILL_TYPE_ID=$" + "7" + "$";
                _xmlStr_concession += "/>";
            }

        }

        if (parseFloat(moudiscPer) > 0 && parseFloat(moudiscAmt) > 0) {
            _xmlStr_concession += "<FO_BILL_CNCSN";
            _xmlStr_concession += " BILL_CNCSN_ID=$" + 0 + "$";
            _xmlStr_concession += " BILL_CNCSN_REV_NO=$" + 1 + "$";
            _xmlStr_concession += " BILL_ID=$" + "0" + "$";
            _xmlStr_concession += " CONCESSION_TYPE_ID=$" + 17 + "$";
            _xmlStr_concession += " CONCESSION_MODE_ID=$" + 1 + "$";
            _xmlStr_concession += " CONCESSION_PERCENT=$" + moudiscPer + "$";
            _xmlStr_concession += " CONCESSION_AMOUNT=$" + Math.round(CmpMOUAmt_tot) + "$";
            _xmlStr_concession += " RECORD_STATUS=$" + "A" + "$";
            _xmlStr_concession += " CNCSN_RULE_ID=$" + 0 + "$";
            _xmlStr_concession += " CARD_NO=$" + '' + "$";
            _xmlStr_concession += " CNCSN_AUTH_ID=$" + mouauthid + "$";
            _xmlStr_concession += " CNCSN_REF_NO=$" + 0 + "$";
            _xmlStr_concession += " REMARKS=$" + ReplaceSplCharactor(mouauthname) + "$";
            _xmlStr_concession += "/>";
        }
        var hcid = '';
        var hcNo = '';
        var form_name = document.getElementById('' + ctrlcom + '_UCServices_hdnSrvFormName').value;
        if (form_name == 'OP' || form_name == 'Cons') {
            hcid = document.getElementById('' + ctrlcom + '_umrPatientDetails_HdnHealthcardid').value;
            hcNo = document.getElementById('' + ctrlcom + '_umrPatientDetails_HdnHealthcardno').value;
        }
        else if (form_name == 'OPQUICK') {
            if (document.getElementById('ctl00_ContentPlaceHolder1_chkhccrd').checked == true) {
                hcid = $('#' + ctrlcom + '_Address1_uchccrdtype__hiddenID').val();
                hcNo = document.getElementById('ctl00_ContentPlaceHolder1_lblhcnon').innerHTML;

            }
            else {
                hcid = document.getElementById('' + ctrlcom + '_ReceiptControl2_HdnHealthcardid').value;
                hcNo = document.getElementById('' + ctrlcom + '_ReceiptControl2_HdnHealthcardno').value;
            }
        }
        var cncsnruleid = document.getElementById('ctl00_ContentPlaceHolder1_umrPatientDetails_hdncncsn_rule_id').value;
        var eligibity_amt = document.getElementById('ctl00_ContentPlaceHolder1_umrPatientDetails_hdnhealthcardeligibleamt').value;
        var depencyid = document.getElementById('ctl00_ContentPlaceHolder1_umrPatientDetails_hdnhealthdepencyid').value;
        hcid = hcid == '' ? 0 : hcid;
        hcNo = hcNo == '' ? 0 : hcNo;

        if (cncsnruleid == undefined || cncsnruleid == null || cncsnruleid == '') { cncsnruleid = "0"; }
        if (eligibity_amt == undefined || eligibity_amt == null || eligibity_amt == '') { eligibity_amt = "0"; }
        if (depencyid == undefined || depencyid == null || depencyid == '') { depencyid = "0"; }
        var healthcardid = document.getElementById('ctl00_ContentPlaceHolder1_umrPatientDetails_hdnhealthcard_id').value;
        if (healthcardid == undefined || healthcardid == null || healthcardid == '') { healthcardid = "0"; }
        if (document.getElementById('' + ctrlcom + '_ReceiptControl2_chkismultiple').checked == true && hcid > 0) {


            _Xml_healthcard_string += "<HEALTHCARD_USAGE_TRAN ";
            _Xml_healthcard_string += " UMR_NO=$" + UmrNO + "$";
            _Xml_healthcard_string += " DEPENDENCY_ID=$" + depencyid + "$";
            _Xml_healthcard_string += " GROSS_AMOUNT=$" + Math.round(totgrossamt) + "$";
            _Xml_healthcard_string += " CONCESSION_AMOUNT=$" + setProperDecimals(HCConAmt_tot) + "$";
            _Xml_healthcard_string += " NET_AMOUNT=$" + setProperDecimals(totnetamt) + "$";
            _Xml_healthcard_string += " ON_CARD_AMT=$" + eligibity_amt + "$";
            _Xml_healthcard_string += " CNCSN_RULE_ID=$" + cncsnruleid + "$";
            _Xml_healthcard_string += " HEALTH_CARD_NO=$" + hcNo + "$";
            _Xml_healthcard_string += " HEALTHCARD_TRAN_ID=$" + healthcardid + "$";
            _Xml_healthcard_string += "  />"
        }

        _OPDxml += _Xml_healthcard_string;
        _OPDxml += _xmlStr_concession;
        BType = 'OP';
        var _xmlreferal = '';

        if (document.getElementById('' + ctrlcom + '_chk_old').checked && referral_save_count == '') {
            _xmlreferal = ReferralSave(BType);
            if (_xmlreferal == '') {
                $(".stoast").toastText("Warning", "Referal Root is missed. Please check referal details", 5, 3);
                document.getElementById('ctl00_ContentPlaceHolder1_txtSSN').focus();
                $('#progress').hide();
                return false;
            }

            else
                _OPDxml += _xmlreferal;
        }
        /* not required commented by pushkar */
        _OPDxml += "</root>";

    }


    $('#' + ctrlcom + '_UCServices_hdnfoodandbev').val('');
    $('#' + ctrlcom + '_UCServices_hdnfoodandbev').val(food_bev);
    return _OPDxml;
}
function SetPrintChanges() {
    /*
    var consolidateprint = document.getElementById('' + ctrlcom + '_rbtnPrintOptions_0');
    var otherprint = document.getElementById('' + ctrlcom + '_rbtnPrintOptions_1');
    if (consolidateprint.checked == true) {
    $('[id*=chkPrints] input[type=checkbox]').attr('checked', false);
    $('[id*=chkPrints] input[type=checkbox]').attr('disabled', true);

    }
    else if (otherprint.checked == true) {
    $('[id*=chkPrints] input[type=checkbox]').attr('checked', false);
    $('[id*=chkPrints] input[type=checkbox]').attr('disabled', true);
    document.getElementById('' + ctrlcom + '_chkPrints_5').disabled = false; 

    if (document.getElementById('' + ctrlcom + '_hdnPrintRegBillNo').value != '') {
    document.getElementById('' + ctrlcom + '_chkPrints_0').disabled = false;
    document.getElementById('' + ctrlcom + '_chkPrints_1').disabled = false;
    }
    if (document.getElementById('' + ctrlcom + '_hdnPrintConBillId').value != "") {
    document.getElementById('' + ctrlcom + '_chkPrints_2').disabled = false;
    document.getElementById('' + ctrlcom + '_chkPrints_3').disabled = false;
    }
    if (document.getElementById('' + ctrlcom + '_hdnPrintOPBillId').value != "" && document.getElementById('' + ctrlcom + '_hdnPrintOPBillId').value != "0") {
    document.getElementById('' + ctrlcom + '_chkPrints_4').disabled = false;
    }
    }*/
}
function checkall() {
    if (document.getElementById('' + ctrlcom + '_chkPrints_6').checked == true) {
        document.getElementById('' + ctrlcom + '_chkPrints_0').checked = true;
        document.getElementById('' + ctrlcom + '_chkPrints_1').checked = true;
        document.getElementById('' + ctrlcom + '_chkPrints_2').checked = true;
        document.getElementById('' + ctrlcom + '_chkPrints_3').checked = true;
        document.getElementById('' + ctrlcom + '_chkPrints_4').checked = true;
        document.getElementById('' + ctrlcom + '_chkPrints_5').checked = true;
    }
    /* Dont Uncomment this ,if we uncomment it then individual check boxes wont work ,please let pushkar know before uncomment it */
    /*  else {
    document.getElementById('' + ctrlcom + '_chkPrints_0').checked = false;
    document.getElementById('' + ctrlcom + '_chkPrints_1').checked = false;
    document.getElementById('' + ctrlcom + '_chkPrints_2').checked = false;
    document.getElementById('' + ctrlcom + '_chkPrints_3').checked = false;
    document.getElementById('' + ctrlcom + '_chkPrints_4').checked = false;
    } */
}
var __reg_bill_id = '';
function SaveSuccessMessages(patid, tranid, regbillno, conbillid, opbillid, umr_no, trans_no, mlcstatus, out9, out10, op_reg_no, reg_bill_id, grp_bill_no, hdnNoOfCopies) {
    __reg_bill_id = reg_bill_id;
    $('#' + ctrlcom + '_hdn_out_grp_bill_no').val(grp_bill_no);
    $('#' + ctrlcom + '_hdn_out_reg_no').val(op_reg_no);
    $('#' + ctrlcom + '_hdnout_reg_bill_id').val(reg_bill_id);
    document.getElementById('' + ctrlcom + '_hdntrans_id').value = tranid;
    document.getElementById('' + ctrlcom + '_hdnNoOfCopies').value;
    _mlc_status = mlcstatus;
    var _reg_bill_no = regbillno;
    var con_bill_no = '';
    var conbilllenght = conbillid.split(',').length;
    var count = 0;
    for (i = 0; i < _reg_bill_no.split(',').length; i++) {
        if (conbilllenght > 0) {
            if (conbilllenght == count) { break; }
            if (i != 0) {
                if (con_bill_no == '') { con_bill_no = _reg_bill_no.split(',')[i] } else {
                    con_bill_no = con_bill_no + ',' + _reg_bill_no.split(',')[i]
                }
                count++
            }
        }
    }
    if (regbillno.split(',')[0] != undefined && regbillno.split(',')[0] != null && regbillno.split(',')[0] != '') {
        regbillno = regbillno.split(',')[0];
    }

    if (umr_no != null && umr_no != undefined && umr_no != '') {
        document.getElementById('' + ctrlcom + '_hdnUmrNo').value = umr_no;
        umr_no = umr_no + "/" + "<br>";
    }
    else {
        umr_no = '';
    }
    var _new_umr_no = document.getElementById('' + ctrlcom + '_hdnUmrNo').value;
    if (document.getElementById('' + ctrlcom + '_hdnBothPrintSetting').value != 2) { opbillid = 0 }
    //var param = patid + "$" + tranid + "$" + regbillno + "$" + conbillid + "$" + opbillid;
    var param = patid + "$" + tranid + "$" + regbillno + "$" + conbillid + "$" + opbillid + "$" + _new_umr_no + "$" + mlcstatus + "$" + con_bill_no;
    document.getElementById('' + ctrlcom + '_hdnPatientid').value = patid;
    document.getElementById('' + ctrlcom + '_hdnsvaeclickvalue').value = 2;
    _xmlCorpRef = '';
    _xmlCorpReg = '';
    return $(".smessagebox").scustommessagebox(2, 'OPD Bill', "Saved Successfully(" + umr_no + _reg_bill_no + "/<br>" + trans_no + ")!.<br>Click OK to get Report!.", OnCanConfirmation, param, OnCanConfirmation);
}

var Pat_Mlc_status = 'N';
function OnSAveSuccessContinue(param) {
    var patid = 0;
    var tranid = 0;
    var regbillno = 0;
    var conbillid = 0;
    var opbillid = 0;
    var con_bill_no = 0;
    if (param != '') {
        patid = param.split('$')[0];
        tranid = param.split('$')[1];
        regbillno = param.split('$')[2];
        conbillid = param.split('$')[3];
        opbillid = param.split('$')[4];
        _umr_no = param.split('$')[5];
        _mlc_status = param.split('$')[6];
        Pat_Mlc_status = _mlc_status;
        con_bill_no = param.split('$')[7];
    }

    if (conbillid == '' || conbillid == null || conbillid == undefined) { conbillid = 0; }
    if (opbillid == '' || opbillid == null || opbillid == undefined) { opbillid = 0; }

        if (parseInt(opbillid) > 0 && parseInt(conbillid) == 0) {
            SaveISRegisteredSuccessMessages1(patid, tranid, regbillno, conbillid, opbillid, _umr_no, '', Pat_Mlc_status, '', '', con_bill_no);
        }
        else
            if (parseInt(conbillid) > 0 && parseInt(opbillid) == 0) {
                SaveISRegisteredSuccessMessages1(patid, tranid, regbillno, conbillid, opbillid, _umr_no, '', Pat_Mlc_status, '', '', con_bill_no);
            }
            else {
                $("#corptranprogress").hide();
                $('[id*=divPrints]')[0].style.display = 'block';
                document.getElementById('' + ctrlcom + '_hdnPrintPatID').value = patid;
                document.getElementById('' + ctrlcom + '_hdnPrintTranid').value = tranid;
                document.getElementById('' + ctrlcom + '_hdnPrintRegBillNo').value = regbillno;
                document.getElementById('' + ctrlcom + '_hdnPrintConBillId').value = conbillid;
                document.getElementById('' + ctrlcom + '_hdnPrintOPBillId').value = opbillid;
                document.getElementById('' + ctrlcom + '_hdnUmrNo').value = _umr_no;
                document.getElementById('' + ctrlcom + '_hdnbill_no').value = con_bill_no
                if (conbillid != '' && conbillid != 0) {
                    for (i = 0; i < conbillid.split(',').length; i++) {
                        GetConsReportName1(conbillid.split(',')[i], 1);
                    }
                }
                var reportname = document.getElementById('' + ctrlcom + '_hdnprescreportname').value;
                if (reportname != "" && reportname != undefined && reportname != null) {
                    document.getElementById('' + ctrlcom + '_hdnprescreportname').value = reportname; //.substring(0, reportname.length - 1);
                }
                /* if (_mlc_status == 'Y') {
                window.location.href = _iniUrl + "Private/FrontOffice/DayCare/MLC.aspx?UMR_NO=" + _umr_no + "&PatID=" + patid;
                }*/
            }
  //  PrintSelection();
}
function OnCanConfirmation() {
    // $('#'+ ctrlcom + '_headerControl1_imgbtnSave')[0].style.display = 'none';
    var _umr_no = document.getElementById('' + ctrlcom + '_hdnUmrNo').value;
    var _patid = document.getElementById('' + ctrlcom + '_hdnPatientid').value;
    var reg_type = $('#' + ctrlcom + '_hdnregtypemain').val();
    if (reg_type == undefined || reg_type == null || reg_type == '') { reg_type = 2; }
    if (_mlc_status == 'Y') {
        window.location.href = _iniUrl + "Private/FrontOffice/DayCare/MLC.aspx?UMR_NO=" + _umr_no + "&PatID=" + _patid + "&DOC_FORM_CD=FOMLC";

    }
    else {
        // window.location.href = "OPDBill.aspx?reg_type=" + reg_type + "&DOC_FORM_CD=OPDREGBILL" + "&" + "&DOC_ID=2354";
        document.getElementById('' + ctrlcom + '_hdnispatientbaneer').value = 'N';
        $('#' + ctrlcom + '_hdnregtypemain').val(2);
        ClearAllTransactionDetails1();
        document.getElementById('' + ctrlcom + '_ReceiptControl2_chkismultiple').checked = false;
        OnMultipleDiscGrid();
        AllClearPopUp();
        EnableKeys();
        _RegXml = ''; _Cnsltxml = ''; _recpayxml = ''; _isQuickreg = 'N'; UmrNO = ''; Pat_ID = ''; BType = '';
        _PaidAmnt = 0; _RegPaidAmnt = 0; _ConsPaidAmnt = 0; PAYMENT_TYPE_ID = ''; CnsCount = 0;
        b_cmp_net = 0; b_cmp_grs_amt = 0; b_cmp_cnc_amt = 0; b_cmp_pct = 0;
        c_cmp_net = 0; c_cmp_grs_amt = 0; c_cmp_cnc_amt = 0; c_cmp_pct = 0;
        referral_save_count = ''; Rfrl_Ltr_Id = '';
        _app_pat_id = 0; __apptID = 0;
        _post_cons_ref_id = '0'; doc_rev_no = '0'; ff_doc_id = '0';
        OrderingPhyCount = 0;

        umr_new_code();

    }
}

function PrintSelection() {
    //$("#corptranprogress").show();

    if (Pat_Mlc_status == 'Y') {
        var _umr_no = document.getElementById('' + ctrlcom + '_hdnUmrNo').value;
        var patid = document.getElementById('' + ctrlcom + '_hdnPrintPatID').value;
        window.location.href = _iniUrl + "Private/FrontOffice/DayCare/MLC.aspx?UMR_NO=" + _umr_no + "&PatID=" + patid + "&DOC_FORM_CD=FOMLC";
    }
    var _bill_id = document.getElementById('' + ctrlcom + '_hdnBill_ID').value;
    var umr_no = document.getElementById('' + ctrlcom + '_hdnUmrNo').value;
    var tranid = document.getElementById('' + ctrlcom + '_hdntrans_id').value;
    var _bill_no = document.getElementById('' + ctrlcom + '_hdnbill_no').value;
    var _dt_fmt = "dd-MMM-yyyy";
    var checkStatus = "";
    var authorized_user = "";
    var op_billid = document.getElementById('' + ctrlcom + '_hdnrptbill_id').value;
    if (op_billid == undefined || op_billid == "" || op_billid == "undefinwed") { op_billid = "0"; }
    var _patid = document.getElementById('' + ctrlcom + '_hdnPrintPatID').value;
    var BothPrintSetting = document.getElementById('' + ctrlcom + '_hdnBothPrintSetting').value;
    var conprtsetting = document.getElementById('' + ctrlcom + '_hdnConsPrintSetting').value;
    /*var datefmt = document.getElementById('' + ctrlcom + '_hdnDateFmt').value;*/
    var chk_IsReg = document.getElementById('' + ctrlcom + '_chk_old').checked;
    if (chk_IsReg == true) { chk_IsReg = "Y"; }
    else { chk_IsReg = "N"; }
    if (document.getElementById('' + ctrlcom + '_chk_old').checked == true) {
        var Pat_ID = document.getElementById('' + ctrlcom + '_umrPatientDetails_hdnPatientid').value;
    } else {
        var Pat_ID = document.getElementById('' + ctrlcom + '_hdnPatientid').value;
    }
    var hdnNoOfCopies = document.getElementById('' + ctrlcom + '_hdnNoOfCopies').value;
    var pattype = document.getElementById('' + ctrlcom + '_uccorporate_ddlPaymentBy').value;
    var conbillid = document.getElementById('' + ctrlcom + '_hdnPrintConBillId').value;
    var PreReportName = '';
    var reg_reg_no = document.getElementById('' + ctrlcom + '_hdn_out_reg_no').value;
    var reg_bill_id = document.getElementById('' + ctrlcom + '_hdnout_reg_bill_id').value;
    var opbillid = document.getElementById('' + ctrlcom + '_hdnPrintOPBillId').value;
    var regbillno = document.getElementById('' + ctrlcom + '_hdnPrintRegBillNo').value;
    var grpbillno = document.getElementById('' + ctrlcom + '_hdn_out_grp_bill_no').value;
    var rbtnPrintOptions = document.getElementById('' + ctrlcom + '_rbtnPrintOptions_0').value;
    var Reg_Type = $('#' + ctrlcom + '_ddlRegType').val();
    var _is_mlc = '';
    if (document.getElementById('ctl00_ContentPlaceHolder1_ChkMlcStatus').checked == true) {
        _is_mlc = 'Y';
    }
    else {
        _is_mlc = 'N';
    }
    var hdnauth_user = document.getElementById('' + ctrlcom + '_hdnauth_user').value;
    var chkPrints = [];
    if (document.getElementById('' + ctrlcom + '_chkPrints_0').checked) {
        chkPrints.push(1);
    }
    else {
        chkPrints.push(0);
    }
    if (document.getElementById('' + ctrlcom + '_chkPrints_1').checked) {
        chkPrints.push(1);
    }
    else {
        chkPrints.push(0);
    }
    if (document.getElementById('' + ctrlcom + '_chkPrints_2').checked) {
        chkPrints.push(1);
    }
    else {
        chkPrints.push(0);
    }
    if (document.getElementById('' + ctrlcom + '_chkPrints_3').checked) {
        chkPrints.push(1);
    }
    else {
        chkPrints.push(0);
    }
    if (document.getElementById('' + ctrlcom + '_chkPrints_4').checked) {
        chkPrints.push(1);
    }
    else {
        chkPrints.push(0);
    }
    if (document.getElementById('' + ctrlcom + '_chkPrints_5').checked) {
        chkPrints.push(1);
    }
    else {
        chkPrints.push(0);
    }
    if (document.getElementById('' + ctrlcom + '_chkPrints_6').checked) {
        chkPrints.push(1);
    }
    else {
        chkPrints.push(0);
    }

    var _dt_fmt = "dd-MMM-yyyy";

    var regdocid = document.getElementById('' + ctrlcom + '_hbnqureystringregid').value;

    if (paramConBillvalues != '')
        _patid = Pat_ID;
    GetAsync(
                "Private/FrontOffice/OPDBill.aspx/btnOk_Clicknew",
                { _patid: _patid, tranid: tranid, conbillid: conbillid, PreReportName: PreReportName, reg_reg_no: reg_reg_no, reg_bill_id: reg_bill_id, opbillid: opbillid, regbillno: regbillno, grpbillno: grpbillno, umr_no: umr_no, rbtnPrintOptions: rbtnPrintOptions, hdnauth_user: hdnauth_user, Reg_Type: Reg_Type, mlc: _is_mlc, BothPrintSetting: BothPrintSetting, hdnNoOfCopies: hdnNoOfCopies, chkPrints: chkPrints, DtFrmt: _dt_fmt, regdocid: regdocid },
                function (Jdata) {
                    var _path = Jdata.d.split('$%$')[0];
                    var r_typ = Jdata.d.split('$%$')[1];
                    var MLC = Jdata.d.split('$%$')[2];
                    var patid = Jdata.d.split('$%$')[3];
                    var umrno = Jdata.d.split('$%$')[4];
                    var new_umr_no = Jdata.d.split('$%$')[5];
                    var reg_type = r_typ;
                    if (reg_type == undefined || reg_type == null || reg_type == '') { reg_type = 0; }
                    if (_path != '') {
                        for (var i = 0; i < _path.split(',').length - 1; i++) {
                            if (_path.split(',')[i] != '')
                                window.open(_path.split(',')[i]);
                            /*  console.log(_path.split(',')[i]); */
                        }
                        if (_bill_no != '' && _bill_no != 0) {
                            for (j = 0; j < _bill_no.split(',').length; j++) {
                                if ($('[id*=hdnIstokencall]').val() == "True") {
                                    if ($('[id$=ddlCounter]').val() != null || $('[id$=ddlCounter]').val() != undefined || $('[id$=ddlCounter]').val() != '' || $('[id$=ddlCounter]').val() != 'undefined') {
                                        var burl = window.location.origin + '/wristband/patient/WristPrn?BillNo=' + _bill_no.split(',')[j] + '&Report_Type=W&Counter=' + $('[id$=ddlCounter]').val() + ''
                                        var c = httpGet(burl);
                                        c = JSON.parse(c);
                                        if (c.status.code == 200) { $(".stoast").toastText("warning", "WristBand print sent to printer", 5, 2); } else { $(".stoast").toastText("warning", "error", 5, 3); }
                                    } 
                                }
                                //window.open("barcode://L-" + _bill_no.split(',')[j]);
                            }
                        }
                    }
                    if (MLC == "Y") {
                        window.location.href = _iniUrl + "Private/FrontOffice/DayCare/MLC.aspx?UMR_NO=" + umrno + "&PatID=" + patid + "&DOC_FORM_CD=FOMLC";
                    }
                    else {
                        //window.location.href =  "OPDBill.aspx?reg_type=" + reg_type + "&DOC_FORM_CD=OPDREGBILL" + "&" + "&DOC_ID=2354";
                        document.getElementById('' + ctrlcom + '_hdnispatientbaneer').value = 'N';
                        $('#' + ctrlcom + '_hdnregtypemain').val(2);
                        ClearAllTransactionDetails1();
                        document.getElementById('' + ctrlcom + '_ReceiptControl2_chkismultiple').checked = false;

                        OnMultipleDiscGrid();
                        AllClearPopUp();
                        EnableKeys();
                        _RegXml = ''; _Cnsltxml = ''; _recpayxml = ''; _isQuickreg = 'N'; UmrNO = ''; Pat_ID = ''; BType = '';
                        _PaidAmnt = 0; _RegPaidAmnt = 0; _ConsPaidAmnt = 0; PAYMENT_TYPE_ID = ''; CnsCount = 0;
                        b_cmp_net = 0; b_cmp_grs_amt = 0; b_cmp_cnc_amt = 0; b_cmp_pct = 0;
                        c_cmp_net = 0; c_cmp_grs_amt = 0; c_cmp_cnc_amt = 0; c_cmp_pct = 0;
                        referral_save_count = ''; Rfrl_Ltr_Id = '';
                        _app_pat_id = 0; __apptID = 0;
                        _post_cons_ref_id = '0'; doc_rev_no = '0'; ff_doc_id = '0';
                        OrderingPhyCount = 0;
                        $('[id*=divPrints]')[0].style.display = 'none';


                        document.getElementById('' + ctrlcom + '_txtumrno').value = new_umr_no;
                    }

                    return false;
                },
                function (jqXHR, textStatus, errorThrown) {
                });
    return false;

}
function ClosingprintPopup() {
    //$('#' + ctrlcom + '_headerControl1_imgbtnSave')[0].style.display = 'none';
    var reg_type = $('#' + ctrlcom + '_hdnregtypemain').val();
    if (reg_type == undefined || reg_type == null || reg_type == '') { reg_type = 2; }
    document.getElementById('' + ctrlcom + '_hdnispatientbaneer').value = 'N';

    $('#' + ctrlcom + '_hdnregtypemain').val(2);
    ClearAllTransactionDetails1();
    document.getElementById('' + ctrlcom + '_ReceiptControl2_chkismultiple').checked = false;
    OnMultipleDiscGrid();
    AllClearPopUp();
    EnableKeys();
    _RegXml = ''; _Cnsltxml = ''; _recpayxml = ''; _isQuickreg = 'N'; UmrNO = ''; Pat_ID = ''; BType = '';
    _PaidAmnt = 0; _RegPaidAmnt = 0; _ConsPaidAmnt = 0; PAYMENT_TYPE_ID = ''; CnsCount = 0;
    b_cmp_net = 0; b_cmp_grs_amt = 0; b_cmp_cnc_amt = 0; b_cmp_pct = 0;
    c_cmp_net = 0; c_cmp_grs_amt = 0; c_cmp_cnc_amt = 0; c_cmp_pct = 0;
    referral_save_count = ''; Rfrl_Ltr_Id = '';
    _app_pat_id = 0; __apptID = 0;
    _post_cons_ref_id = '0'; doc_rev_no = '0'; ff_doc_id = '0';
    OrderingPhyCount = 0;
    $('[id*=divPrints]')[0].style.display = 'none';


    // window.location.href = "OPDBill.aspx?reg_type=" + reg_type + "&DOC_FORM_CD=OPDREGBILL" + "&" + "&DOC_ID=2354";
    umr_new_code();

    return false;
}
function ClosingprintPopup1() {
    // $('#' + ctrlcom + '_headerControl1_imgbtnSave')[0].style.display = 'none';
    var reg_type = $('#' + ctrlcom + '_hdnregtypemain').val();
    if (reg_type == undefined || reg_type == null || reg_type == '') { reg_type = 2; }
    document.getElementById('' + ctrlcom + '_hdnispatientbaneer').value = 'N';

    ClearAllTransactionDetails1();
    document.getElementById('' + ctrlcom + '_ReceiptControl2_chkismultiple').checked = false;
    OnMultipleDiscGrid();
    AllClearPopUp();
    EnableKeys();
    _RegXml = ''; _Cnsltxml = ''; _recpayxml = ''; _isQuickreg = 'N'; UmrNO = ''; Pat_ID = ''; BType = '';
    _PaidAmnt = 0; _RegPaidAmnt = 0; _ConsPaidAmnt = 0; PAYMENT_TYPE_ID = ''; CnsCount = 0;
    b_cmp_net = 0; b_cmp_grs_amt = 0; b_cmp_cnc_amt = 0; b_cmp_pct = 0;
    c_cmp_net = 0; c_cmp_grs_amt = 0; c_cmp_cnc_amt = 0; c_cmp_pct = 0;
    referral_save_count = ''; Rfrl_Ltr_Id = '';
    _app_pat_id = 0; __apptID = 0;
    _post_cons_ref_id = '0'; doc_rev_no = '0'; ff_doc_id = '0';
    OrderingPhyCount = 0;
    $('[id*=pnlBarCode2]')[0].style.display = 'none';

    // window.location.href = "OPDBill.aspx?reg_type=" + reg_type + "&DOC_FORM_CD=OPDREGBILL" + "&" + "&DOC_ID=2354";

    umr_new_code();

    return false;
}
function umr_new_code() {
    GetAsync(
                    "Private/FrontOffice/OPDBill.aspx/getnewumr",
                    {},
                    function (jdata) {
                        document.getElementById('' + ctrlcom + '_txtumrno').value = jdata.d;
                    },
                    function () {
                    });

}
function onchangePrintSelection() {
    var consolidateprint = document.getElementById('' + ctrlcom + '_rbtnPrintOptions_0');
    var otherprint = document.getElementById('' + ctrlcom + '_rbtnPrintOptions_1');
    if (consolidateprint.checked == true) {
        $('[id*=chkPrints] input[type=checkbox]').attr('checked', false);
        $('[id*=chkPrints] input[type=checkbox]').attr('disabled', true);
    }
    else if (otherprint.checked == true) {
        //        if (document.getElementById('' + ctrlcom + '_chkPrints_0').checked == true) {
        //            $('[id*=chkPrints] input[type=checkbox]').attr('checked', true);
        //        }
        //        else {
        $('[id*=chkPrints] input[type=checkbox]').attr('checked', false);
        //        }
        $('[id*=chkPrints] input[type=checkbox]').attr('disabled', false);

    }
}

var pkg_umr_no = '';
var pkg_reg_id = 0;
function getregid() {
    var quary = '';
    Query = "SELECT REG_ID FROM FO_REG WHERE UMR_NO='" + pkg_umr_no + "'  AND RECORD_STATUS='A'";
    GetNonAsync(
     "Private/FrontOffice/OPDBillNEW.aspx/getpkgregid",
     { Query: Query },
        function (jdata) {
            var _data = jQuery.parseJSON(jdata.d);
            if (_data != null && _data != undefined && _data[0] != undefined && _data[0] != null) {
                pkg_reg_id = _data[0].REG_ID;

            }
        },
                        function () { });

}

/* Post Consultations Saving In Package Billing */
function SavePackageConsultation(bill_ids) {
    bill_id = bill_ids.split(',')[0];
    grp_bill_no = bill_ids.split(',')[1];
    if (grp_bill_no == '' || grp_bill_no == null || grp_bill_no == undefined || grp_bill_no == "undefined") { grp_bill_no = 0; }
    var rec_type_id = 0;
    if (document.getElementById('ctl00_hdnIsMedClg').value == "TRUE") {
        rec_type_id = $('input[id*=radiousertran]:checked').val()
        if (rec_type_id == 0 || rec_type_id == null || rec_type_id == undefined) { rec_type_id = 1; }
    }
    else { rec_type_id = 1; }

    document.getElementById('' + ctrlcom + '_hdnsvaeclickvalue').value = 2;
    var GvRowscount = 0;
    var Post_Cons = '';
    var umr_no = '';
    var reg_id = 0;
    if (document.getElementById('' + ctrlcom + '_pre_regi').value == '5')
    { umr_no = '0'; }
    else if (document.getElementById('' + ctrlcom + '_chk_old').checked || document.getElementById('' + ctrlcom + '_chkisold').checked) {
        umr_no = document.getElementById('' + ctrlcom + '_umrPatientDetails_Umrlookup_txtSearchControl').value;
    }
    else {
        // umr_no = document.getElementById('' + ctrlcom + '_txtumrno').value;
        umr_no = bill_ids.split(',')[2];
        pkg_umr_no = umr_no;
        getregid();
        reg_id = pkg_reg_id;
    }
    var grid = document.getElementById('' + ctrlcom + '_UCServices_gvServices');
    var _index = grid.rows.length;
    if (lblquick.className == "select") {
        PAYMENT_TYPE_ID = 2;
        REMARKS = $('#' + ctrlcom + '_ReceiptControl2_txtquickremarks').val();
    }
    else {
        PAYMENT_TYPE_ID = 1;
        REMARKS = $('#' + ctrlcom + '_ReceiptControl2_txtRemarks').val();
    }
    var patient_typeid = document.getElementById('' + ctrlcom + '_uccorporate_ddlPaymentBy').value;
    if (patient_typeid == undefined || patient_typeid == null || patient_typeid == '') { patient_typeid = "0"; }
    if (patient_typeid == 1) {
        var pat_cat = $('#' + ctrlcom + '_UCServices_ddlpatcat').val();
    } else if (patient_typeid == 2) {
        var pat_cat = $('[id*=hdnforeigncatid]').val();
    }
    if (pat_cat == undefined || pat_cat == null || pat_cat == '' || pat_cat == '--Select--') { pat_cat = "0"; }
    $("table[id$=UCServices_gvServices] tr:has(td)").each(function (e) {

        var doctor_id = $('[id$=UCServices_gvServices] tr').filter(':eq(' + GvRowscount + ')').find('input[type=hidden][id*=hdnDoctorID]').val();
        var hdn_is_free_followup = $('[id$=UCServices_gvServices] tr').filter(':eq(' + GvRowscount + ')').find('input[type=hidden][id*=hdn_is_free_followup]').val();
        if (hdn_is_free_followup == undefined || hdn_is_free_followup == 'undefined' || hdn_is_free_followup == '' || hdn_is_free_followup == null) {
            hdn_is_free_followup = 'N';
        }
        var billinghead_id = $('[id$=UCServices_gvServices] tr').filter(':eq(' + GvRowscount + ')').find('input[type=hidden][id*=hdnbillingheadid]').val();
        if (billinghead_id == "undefined" || billinghead_id == undefined || billinghead_id == null) { billinghead_id = "0"; }
        var PostCons = $('[id$=UCServices_gvServices] tr').filter(':eq(' + GvRowscount + ')').find('input[type=checkbox][id*=chkPstCons]')[0].checked;
        var Department_Id = $('[id$=UCServices_gvServices] tr').filter(':eq(' + GvRowscount + ')').find('input[type=hidden][id*=hdnDepartment_Id]').val();
        var srvremarks = $('[id$=UCServices_gvServices] tr').filter(':eq(' + GvRowscount + ')').find('input[type=text][id*=txtremks]').val();
        var apt_slot_id = $('[id$=UCServices_gvServices] tr').filter(':eq(' + GvRowscount + ')').find('input[type=hidden][id*=hdnreqid]').val();
        var srv_code = $(this).closest('tr').find('input[type=text][id*=txtServiceCode]').val();
        var servicename = $(this).closest('tr').find("input[type=text][id*=txtServiceName]").val();
        var hdnDocPrice = $(this).closest('tr').find('[id*=hdnDoctorPrice]').val();
        var hdnOrgPrice = $(this).closest('tr').find('[id*=hdnOrgPrice]').val();
        var org_pct = $(this).closest('tr').find('[id*=hdnOrgPct]').val();
        var doctor_pct = $(this).closest('tr').find('[id*=hdnDoctorPct]').val();
        var hdnserpriceid = $(this).closest('tr').find('[id*=hdnsrvpriceID]').val();
        if (hdnserpriceid != undefined && hdnserpriceid != null && hdnserpriceid != '') { hdnserpriceid = hdnserpriceid; } else { hdnserpriceid = '0'; }
        if (doctor_pct == '' || doctor_pct == null || doctor_pct == undefined || doctor_pct == "undefined") { doctor_pct = 0; }
        if (org_pct == '' || org_pct == null || org_pct == undefined || org_pct == "undefined") { org_pct = 0; }
        if (hdnDocPrice == '' || hdnDocPrice == null || hdnDocPrice == undefined) { hdnDocPrice = '0'; }
        if (hdnOrgPrice == '' || hdnOrgPrice == null || hdnOrgPrice == undefined) { hdnOrgPrice = '0'; }
        if (apt_slot_id == undefined || apt_slot_id == null || apt_slot_id == '' || apt_slot_id == 'undefined') { apt_slot_id = 0; }
        var tocken_no = '';
        var slot_id = 0;
        var _slotTime = $('[id$=UCServices_gvServices] tr').filter(':eq(' + GvRowscount + ')').find('[id*=ddlSlotTiming]').val();
        if (_slotTime == '' || _slotTime == undefined || _slotTime == null || _slotTime == "0") {
            _slotTime = '';
        }
        else {
            tocken_no = _slotTime.split(',')[1];
            if (tocken_no == null || tocken_no == undefined || tocken_no == '')
            { tocken_no = ''; }
            slot_id = _slotTime.split(',')[0];
            _slotTime = $('[id$=UCServices_gvServices] tr').filter(':eq(' + GvRowscount + ')').find('[id*=ddlSlotTiming]').find('option:selected').text();

        }
        if (slot_id == undefined || slot_id == null || slot_id == '') { slot_id = 0; }
        if (_slotTime == '' || _slotTime == null || _slotTime == '') { _slotTime = ''; }

        if (PostCons == true) { PostCons = "Y" } else { PostCons = "N" }
        if (doctor_id == undefined || doctor_id == null || doctor_id == '0') { doctor_id = '0'; } else { doctor_id = doctor_id; }
        if (Department_Id == undefined || Department_Id == null || Department_Id == '0') { Department_Id = '0'; } else { Department_Id = Department_Id; }
        var cmppersave = document.getElementById('' + ctrlcom + '_txtCorpPercentage').value;
        var emppersave = document.getElementById('' + ctrlcom + '_txtEmpPercentage').value;
        if (cmppersave == undefined || cmppersave == null || cmppersave == '') { cmppersave = "0"; }
        if (emppersave == undefined || emppersave == null || emppersave == '') { emppersave = "0"; }
        cmppersave = setProperDecimals(cmppersave);
        emppersave = setProperDecimals(emppersave);
        var Diagnosis_id = document.getElementById('ctl00_ContentPlaceHolder1_UcDiagnosis__hiddenID').value;
        if (Diagnosis_id == undefined || Diagnosis_id == null || Diagnosis_id == '') { Diagnosis_id = "0"; }
        if (PostCons == 'Y') {
            Post_Cons += "<root><FO_BILL";
            Post_Cons += " BILL_ID=$0$";
            Post_Cons += " BILL_SRV_ID=$" + 0 + "$";
            Post_Cons += " BILL_SRV_REV_NO=$" + 0 + "$";
            Post_Cons += " BILL_TYPE_ID=$" + 2 + "$";
            Post_Cons += " BILL_TYPE_REV_NO=$" + 1 + "$";
            Post_Cons += " CREDIT_TYPE_ID=$" + 0 + "$";
            Post_Cons += " CLASS_SERVICE_ID=$" + 0 + "$";
            Post_Cons += " CREDIT_TYPE_REV_NO=$" + 0 + "$";
            if (myMultiDatar1 != '') {
                Post_Cons += " REFERAL_SOURCE_ID=$" + myMultiDatar1[0]["Refrl_class_id"] + "$";
                Post_Cons += " REFERAL_SOURCE_REV_NO=$" + 1 + "$";
                Post_Cons += " REFERL_NAME=$" + ReplaceSplCharactor(myMultiDatar1[0]["Name"]) + "$";
                Post_Cons += " REFERAL_DOCTOR_ID=$" + myMultiDatar1[0]["id"] + "$";
                Post_Cons += " REFERAL_TYPE_ID=$" + myMultiDatar1[0]["Source"] + "$";
                Post_Cons += " REFERAL_REF_ID=$" + myMultiDatar1[0]["RfrlTo_Id"] + "$";
            } else {
                Post_Cons += " REFERAL_SOURCE_ID=$" + 0 + "$";
                Post_Cons += " REFERAL_SOURCE_REV_NO=$" + 1 + "$";
                Post_Cons += " REFERL_NAME=$" + '' + "$";
                Post_Cons += " REFERAL_DOCTOR_ID=$" + 0 + "$";
                Post_Cons += " REFERAL_REF_ID=$" + 0 + "$";
                Post_Cons += " REFERAL_TYPE_ID=$" + "1" + "$";
            }
            Post_Cons += " REFERAL_TYPE_REV_NO=$" + 0 + "$";

            Post_Cons += " REF_ID=$" + bill_id + "$";
            Post_Cons += " CMP_ID=$" + 0 + "$";
            Post_Cons += " SERVICE_ID=$" + 2 + "$";
            Post_Cons += " SERVICE_CD=$" + "" + "$";
            Post_Cons += " SERVICE_REV_NO=$" + 1 + "$";
            Post_Cons += " CONSULTATION_TYPE_ID=$" + 1 + "$";
            Post_Cons += " CONSULTATION_TYPE_REV_NO=$" + 1 + "$";
            Post_Cons += " QUANTITY=$" + 0 + "$";
            Post_Cons += " RATE=$" + "0" + "$";
            Post_Cons += " CONCESSION=$" + 0 + "$";
            Post_Cons += " BILL_AMOUNT=$" + "0" + "$";
            Post_Cons += " NET_AMOUNT=$" + "0" + "$";
            Post_Cons += " PAID_AMOUNT=$" + 0 + "$";
            Post_Cons += " DEPARTMENT_ID=$" + Department_Id + "$";
            Post_Cons += " DEPARTMENT_REV_NO=$" + 1 + "$";
            Post_Cons += " DOCTOR_ID=$" + doctor_id + "$";
            Post_Cons += " DOCTOR_REV_NO=$" + 1 + "$";
            Post_Cons += " TREATED_BY_ID=$" + 0 + "$";
            Post_Cons += " TREATED_BY_REV_NO=$" + 0 + "$";
            Post_Cons += " CONSESSION_MODE_ID=$" + 0 + "$";
            Post_Cons += " CONSESSION_MODE_REV_NO=$" + 0 + "$";
            Post_Cons += " IS_FOREIGN_SERVICE=$" + "N" + "$";
            Post_Cons += " UMR_NO=$" + umr_no + "$";
            Post_Cons += " PATIENT_CLASS_ID=$" + 2 + "$";
            Post_Cons += " SESSION_ID=$" + 1 + "$";
            Post_Cons += " PATIENT_TYPE_ID=$" + 1 + "$";
            Post_Cons += " DMS_UPLOAD=$" + 'N' + "$";
            Post_Cons += " TRN_SOURCE_ID=$" + 0 + "$";
            Post_Cons += " REC_TYPE_ID=$" + rec_type_id + "$";
            Post_Cons += " TRN_DOCUMENT_ID=$" + $('[id*=hdnSessionDocId]').val() + "$";
            Post_Cons += " GRP_BILL_NO=$" + grp_bill_no + "$";
            Post_Cons += " GST_AMOUNT=$" + 0 + "$";
            Post_Cons += " NET_AMOUNT_EXC_GST=$" + 0 + "$";
            Post_Cons += " BILL_AMOUNT_EXC_GST=$" + 0 + "$";
            Post_Cons += " SGST_AMOUNT=$" + 0 + "$";
            Post_Cons += " CGST_AMOUNT=$" + 0 + "$";
            Post_Cons += " FOREIGN_CATEGORY_ID=$" + pat_cat + "$";
            Post_Cons += " REG_ID=$" + reg_id + "$";
            Post_Cons += " DIAGNOSIS_ID =$" + Diagnosis_id + "$";
            Post_Cons += " />";
            Post_Cons += "<FO_BILL_SRV";
            Post_Cons += " BILL_SRV_ID=$" + 0 + "$";
            Post_Cons += " BILL_SRV_REV_NO=$" + 0 + "$";
            Post_Cons += " BILL_TYPE_ID=$" + 2 + "$";
            Post_Cons += " BILL_TYPE_REV_NO=$" + 1 + "$";
            Post_Cons += " CREDIT_TYPE_ID=$" + 0 + "$";
            Post_Cons += " CREDIT_TYPE_REV_NO=$" + 0 + "$";
            Post_Cons += " CLASS_SERVICE_ID=$" + 0 + "$";
            Post_Cons += " SERVICE_GROUP_ID=$" + Department_Id + "$";
            Post_Cons += " REFERAL_SOURCE_ID=$" + "1" + "$";
            Post_Cons += " REFERAL_SOURCE_REV_NO=$" + 1 + "$";
            Post_Cons += " REFERAL_TYPE_ID=$" + "1" + "$";
            Post_Cons += " REFERAL_TYPE_REV_NO=$" + 0 + "$";
            Post_Cons += " REFERAL_DOCTOR_ID=$" + "0" + "$";
            Post_Cons += " REFERAL_NAME=$" + "" + "$";
            Post_Cons += " REF_ID=$" + bill_id + "$";
            Post_Cons += " CMP_ID=$" + 0 + "$";
            Post_Cons += " SERVICE_ID=$" + 2 + "$";
            Post_Cons += " SERVICE_CD=$" + "" + "$";
            Post_Cons += " SERVICE_REV_NO=$" + 1 + "$";
            Post_Cons += " CONSULTATION_TYPE_ID=$" + 1 + "$";
            Post_Cons += " CONSULTATION_TYPE_REV_NO=$" + 1 + "$";
            Post_Cons += " QUANTITY=$" + 0 + "$";
            Post_Cons += " RATE=$" + "0" + "$";
            Post_Cons += " AMOUNT=$" + "0" + "$";
            Post_Cons += " CONCESSION=$" + 0 + "$";
            Post_Cons += " BILL_AMOUNT=$" + "0" + "$";
            Post_Cons += " NET_AMOUNT=$" + "0" + "$";
            Post_Cons += " PAID_AMOUNT=$" + 0 + "$";
            Post_Cons += " DEPARTMENT_ID=$" + Department_Id + "$";
            Post_Cons += " DEPARTMENT_REV_NO=$" + 1 + "$";
            Post_Cons += " DOCTOR_ID=$" + doctor_id + "$";
            Post_Cons += " DOCTOR_REV_NO=$" + 1 + "$";
            Post_Cons += " TREATED_BY_REV_NO=$" + 0 + "$";
            Post_Cons += " CONSESSION_MODE_ID=$" + 0 + "$";
            Post_Cons += " CONSESSION_MODE_REV_NO=$" + 0 + "$";
            Post_Cons += " IS_FOREIGN_SERVICE=$" + "N" + "$";
            Post_Cons += " UMR_NO=$" + umr_no + "$";
            Post_Cons += " PATIENT_CLASS_ID=$" + 2 + "$";
            Post_Cons += " REMARKS=$" + ReplaceSplCharactor(srvremarks) + "$";
            Post_Cons += " IS_FREE_FOLLOWUP=$" + hdn_is_free_followup + "$";
            Post_Cons += " SLOT_ID=$" + slot_id + "$";
            Post_Cons += " SLOT_TIME=$" + _slotTime + "$";
            Post_Cons += " SLOT_TOKEN_NO=$" + tocken_no + "$";
            Post_Cons += " APT_SLOTS_ID=$" + apt_slot_id + "$";
            Post_Cons += " COMPANY_TARIFF_ID=$" + 0 + "$";
            Post_Cons += " IS_CASH=$" + "N" + "$";
            Post_Cons += " POST_DISCOUNT=$" + 0 + "$";
            Post_Cons += " CONCESSION_AMOUNT=$" + 0 + "$";
            Post_Cons += " COMPANY_BILL_HEAD_ID=$" + billinghead_id + "$";
            Post_Cons += " SERVICE_TYPE_ID=$" + 1 + "$";
            Post_Cons += " TREATED_BY_ID=$" + doctor_id + "$";
            Post_Cons += " SERVICE_CLASS_ID=$" + 1 + "$";
            Post_Cons += " TRN_SOURCE_ID=$" + '0' + "$";
            Post_Cons += " RECORD_SNO=$" + 1 + "$";
            Post_Cons += " EDIT_SERVICE_NAME=$" + ReplaceSplCharactor(servicename) + "$";
            Post_Cons += " EDIT_SERVICE_CD=$" + srv_code + "$";
            Post_Cons += " ORG_PCT=$" + org_pct + "$";
            Post_Cons += " DOCTOR_PCT=$" + doctor_pct + "$";
            Post_Cons += " DOCTOR_PRICE=$" + hdnDocPrice + "$";
            Post_Cons += " ORG_PRICE=$" + hdnOrgPrice + "$";
            Post_Cons += " SERVICE_PRICE_ID=$" + hdnserpriceid + "$";
            Post_Cons += " TARIFF_ID=$" + 1 + "$";
            Post_Cons += " ORIGINAL_PRICE=$" + 0 + "$";
            Post_Cons += " REC_TYPE_ID=$" + rec_type_id + "$";
            Post_Cons += " RATE_EXC_GST=$" + 0 + "$";
            Post_Cons += " TAX_PCT=$" + 0 + "$";
            Post_Cons += " TAX_AMOUNT=$" + 0 + "$";
            Post_Cons += " CMP_TAX_AMT=$" + 0 + "$";
            Post_Cons += " EMP_TAX_AMT=$" + 0 + "$";
            Post_Cons += " CONCESSION_AMT=$" + 0 + "$";
            Post_Cons += " CONCESSION_PCT=$" + 0 + "$";
            Post_Cons += " SGST_PCT=$" + 0 + "$";
            Post_Cons += " SGST_AMOUNT=$" + 0 + "$";
            Post_Cons += " CGST_PCT=$" + 0 + "$";
            Post_Cons += " CGST_AMOUNT=$" + 0 + "$";
            Post_Cons += " SAC_CD=$" + 0 + "$";
            Post_Cons += " CNCSN_AUTH_ID=$" + 0 + "$";
            Post_Cons += " CONC_RULE_ID=$" + 0 + "$";
            Post_Cons += " />"
            var _curr_id = document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnstpcurrid').value;
            Post_Cons += "<FO_RECPAY ";
            Post_Cons += " UMR_NO=$" + umr_no + "$"; ;
            Post_Cons += " ADMN_NO=$" + "" + "$";
            Post_Cons += " EMPLOYEE_ID=$" + "0" + "$";
            Post_Cons += " TRANSACTION_ID=$" + "0" + "$";
            Post_Cons += " TRANSACTION_NO=$" + "" + "$";
            Post_Cons += " TRANSACTION_DT=$" + "" + "$";
            Post_Cons += " TRANSACTION_TYPE=$" + "R" + "$";
            Post_Cons += " APPROVE_BY=$" + 0 + "$";
            Post_Cons += " APPROVE_DT=$" + '' + "$";
            Post_Cons += " AMOUNT=$" + "0" + "$";
            Post_Cons += " REMARKS=$" + "" + "$";
            Post_Cons += " CURR_ID=$" + _curr_id + "$";
            Post_Cons += " PAYMENT_TYPE_ID=$" + PAYMENT_TYPE_ID + "$";
            Post_Cons += " TRN_SOURCE_ID=$" + 0 + "$";
            Post_Cons += " REC_TYPE_ID=$" + rec_type_id + "$";
            Post_Cons += "/>";
            Post_Cons += "<FO_RECPAY_REF ";
            Post_Cons += " RECPAY_REF_ID=$" + "0" + "$";
            Post_Cons += " APPROVE_BY=$" + 0 + "$";
            Post_Cons += " APPROVE_DT=$" + '' + "$";
            Post_Cons += " AMOUNT=$" + "0" + "$";
            Post_Cons += " PAYMENT_TYPE_ID=$" + "2" + "$";
            Post_Cons += " REFERENCE_TYPE_ID=$" + "2" + "$";
            Post_Cons += " CURR_ID=$" + _curr_id + "$";
            Post_Cons += " TRN_SOURCE_ID=$" + 0 + "$";

            Post_Cons += " NET_GROSS_AMT=$" + 0 + "$";
            Post_Cons += " NET_DISCOUNT_AMT=$" + 0 + "$";
            Post_Cons += " NET_RECEIPT_AMT=$" + 0 + "$";
            Post_Cons += " OUTSTANDING_DUE_AMT=$" + 0 + "$";
            Post_Cons += " EXCESS_AMT=$" + 0 + "$";
            Post_Cons += " REC_TYPE_ID=$" + rec_type_id + "$";

            Post_Cons += "/>";
            Post_Cons += "<FO_RECPAY_DET ";
            Post_Cons += " TRANSACTION_ID=$" + 0 + "$";
            Post_Cons += " TRANSACTION_DET_ID=$" + 0 + "$";
            Post_Cons += " TRANSACTION_NO=$" + 0 + "$";
            Post_Cons += " TRANSACTION_DT=$" + 0 + "$";
            Post_Cons += " TRANSACTION_TYPE=$" + '' + "$";
            Post_Cons += " AMOUNT=$" + "0" + "$";
            Post_Cons += " REMARKS=$" + "0" + "$";
            Post_Cons += " EMPLOYEE_ID=$" + 0 + "$";
            Post_Cons += " REFERENCE_ID=$" + 0 + "$";
            Post_Cons += " PAYMENT_MODE_ID=$" + 1 + "$";
            Post_Cons += " UMR_NO=$" + umr_no + "$";
            Post_Cons += " CURR_ID=$" + 0 + "$";
            Post_Cons += " REC_TYPE_ID=$" + rec_type_id + "$";
            Post_Cons += "/>";
            Post_Cons += ReferralSave('C');
            Post_Cons += "</root>";
        }

        GvRowscount++;
    });
    var Xml = Post_Cons;
    if (Post_Cons != "") {
        GetNonAsync(
                    "Private/FrontOffice/OPDBill.aspx/SavePackageConsultations",
                    { Xml: Xml },
                    function (jdata) {
                    },
                    function () {
                    });
    }
    return false;
}
/**************Saving End ******************/



var dispat = '', title_id = '', first_name = '', Last_Name = '', gender_id = '', address = '', area_id = '', REMARKS = '';
var OPcnt = 0;
function IsRegisteredValidations() {

    /* Op Validations */OPcnt = 0;
    if (document.getElementById('' + ctrlcom + '_chkIsOsp').checked == false) {
        var hdnPatid = $('#' + ctrlcom + '_umrPatientDetails_Umrlookup__hiddenID').val();
        var hdnUmrNo = document.getElementById('' + ctrlcom + '_umrPatientDetails_Umrlookup_txtSearchControl').value;
        if (document.getElementById('' + ctrlcom + '_chkIsOsp').checked == false) {
            if (hdnUmrNo == '' || hdnPatid == undefined || hdnPatid == '0') {
                $(".stoast").toastText("warning", "Please Select Umr No", 2, 3);
                OPcnt = 1; return false;
            }
            var Pri_umr_text = $('#' + ctrlcom + '_umrPatientDetails_Umrlookup__hiddenText').val();
            var Txt_umr_no = $('#' + ctrlcom + '_umrPatientDetails_Umrlookup_txtSearchControl').val();
            if (Pri_umr_text != Txt_umr_no) {
                $(".stoast").toastText("warning", "Please Select Patient Properly", 2, 3);
                OPcnt = 1; return false;
            }
            var Pay_type = $('#' + ctrlcom + '_uccorporate_ddlPaymentBy').val();
            if (Pay_type == '0') {
                $('#' + ctrlcom + '_hdndontclrgrid').val('149');
                $(".stoast").toastText("warning", "Please Select Payment Type", 2, 3);
                document.getElementById('' + ctrlcom + '_uccorporate_ddlPaymentBy').focus();
                OPcnt = 1; return false;
            }
            var paymentby = document.getElementById('' + ctrlcom + '_uccorporate_ddlPaymentBy');
            var cmpname = document.getElementById('' + ctrlcom + '_uccorporate_CmpLookup_txtSearchControl');
            var refletter = document.getElementById('' + ctrlcom + '_uccorporate_ucRefLetterNo_txtSearchControl');
            var chkrefletter = document.getElementById('' + ctrlcom + '_uccorporate_chkRefLetReq');
            if (paymentby.value == 2) {
                if (cmpname.value == "") {
                    $(".stoast").toastText("warning", "Please Select Company Name", 5, 3);
                    cmpname.focus();
                    OPcnt = 1; return false;
                }
                if (chkrefletter.checked == true) {
                    if (refletter.value == "") {
                        $(".stoast").toastText("warning", "Please Select Referral Letter", 5, 3);
                        refletter.focus();
                        OPcnt = 1; return false;
                    }
                }
            }

            var slot_req = document.getElementById('' + ctrlcom + '_hdnisapptslotreq').value;
            var is_doc_slots_req = document.getElementById('' + ctrlcom + '_hdnIsDoctorSlotsReq').value;
            if (is_doc_slots_req != '') {
                is_doc_slots_req = is_doc_slots_req.toLowerCase();
            }
            if (slot_req == 'True') {
                if (is_doc_slots_req == "true") {
                    var flag = false; var __onlyconscount = 0;
                    $("table[id*=gvServices] tr:has(td)").each(function (e) {
                        var slot_time = $(this).closest('tr').find('[id*=ddlSlotTiming]').find('option:selected').text();
                        var doc_name = $(this).closest('tr').find("input[type=text][id*=txtServiceName]").val();
                        var docid = $(this).closest('tr').find("input[type=hidden][id*=hdnDoctorID]").val();
                        var hdnServiceID = $(this).closest('tr').find("input[type=hidden][id*=hdnServiceID]").val();
                        if (hdnServiceID == '' || hdnServiceID == undefined || hdnServiceID == null) { hdnServiceID = 0; }
                        if (hdnServiceID != 2 && hdnServiceID == 0 && hdnServiceID > 2) {
                            __onlyconscount = 1;
                        }
                        if (docid > 0) {
                            if (slot_time == "Select" || slot_time == "" || slot_time == undefined || slot_time == NaN || slot_time == "0") {
                                $(".stoast").toastText("warning", "Please Select the Slot for this " + doc_name + "  ", 5, 3);
                                flag = true;
                                return false;
                            }
                        }
                    });
                    if (flag == true) {
                        OPcnt = 1;
                        return false;
                    }
                }
            }
            if (__onlyconscount == 0) {
                var Cmp_due_allow = $('#' + ctrlcom + '_hdnallowdueopd').val();
                if (Cmp_due_allow == 'False') {
                    var due_amt_a = $('#' + ctrlcom + '_ReceiptControl2_txtpatdue').val();
                    if (due_amt_a == null || due_amt_a == '' || due_amt_a == undefined)
                    { due_amt_a = 0; }
                    if (parseFloat(due_amt_a) > 0) {
                        $(".stoast").toastText("warning", "Due Not Allowed ,Please Contact Administrator! ", 5, 3);
                        OPcnt = 1;
                        return false;
                    }
                }
            }
            /* var Order_phy_name =$('#' + ctrlcom + '_UcOdrPsyn_txtSearchControl').val();
            var order_phy_id =$('#' + ctrlcom + '_UcOdrPsyn__hiddenID').val();

            if (Order_phy_name == '' || Order_phy_name == undefined || Order_phy_name == null || order_phy_id == '' || order_phy_id == '0') {
            $(".stoast").toastText("warning", "Please Select Ordering Physician", 2, 3);
            document.getElementById('' + ctrlcom + '_UcOdrPsyn_txtSearchControl').focus();
            OPcnt =1;return false;
            }*/
        }

    }
    else /*Osp Validations */
    {
        title_id = $('#' + ctrlcom + '_ddlTitle').val();
        first_name = $('#' + ctrlcom + '_txtFirstName').val();
        Last_Name = $('#' + ctrlcom + '_txtLastName').val();
        gender_id = $('#' + ctrlcom + '_ddlGender').val();
        address = $('#' + ctrlcom + '_Address1_txtAddress1').val();
        area_id = $('#' + ctrlcom + '_ucArea__hiddenID').val();
        if (title_id == '0') {
            $(".stoast").toastText("warning", "Please Select Title !", 2, 3);
            document.getElementById('' + ctrlcom + '_ddlTitle').focus();
            OPcnt = 1; return false;
        }
        if (first_name == undefined || first_name == null || first_name == '') {
            $(".stoast").toastText("warning", "Please Select First Name !", 2, 3);
            document.getElementById('' + ctrlcom + '_txtFirstName').focus();
            OPcnt = 1; return false;
        }
        if (Last_Name == undefined || Last_Name == null || Last_Name == '') {
            $(".stoast").toastText("warning", "Please Select Last Name", 2, 3);
            document.getElementById('' + ctrlcom + '_txtLastName').focus();
            OPcnt = 1; return false;
        }
        if (gender_id == '0') {
            $(".stoast").toastText("warning", "Please Select Gender !", 2, 3);
            document.getElementById('' + ctrlcom + '_ddlGender').focus();
            OPcnt = 1; return false;
        }
        if (document.getElementById('' + ctrlcom + '_newAgeUc_txtDob').value == "__-__-____" || document.getElementById('' + ctrlcom + '_newAgeUc_txtDob').value == '') {
            $(".stoast").toastText("warning", "Please Enter Dob !.", 2, 3);
            document.getElementById('' + ctrlcom + '_newAgeUc_txtDob').focus();
            OPcnt = 1; return false;
        }
        if (address == undefined || address == null || address == '') {
            $(".stoast").toastText("warning", "Please Enter Address !.", 2, 3);
            document.getElementById('' + ctrlcom + '_Address1_txtAddress1').focus();
            OPcnt = 1; return false;
        }
        if (area_id == undefined || area_id == null || area_id == '0' || document.getElementById('' + ctrlcom + '_ucArea_txtSearchControl').value == '') {
            $(".stoast").toastText("warning", "Please select area!", 2, 3);
            document.getElementById('' + ctrlcom + '_ucArea_txtSearchControl').focus();
            OPcnt = 1; return false;
        }

    }
//    if (document.getElementById('' + ctrlcom + '_ucReferal_ddlreferral').value > 1) {
//        if (document.getElementById('' + ctrlcom + '_ucReferal_ddlreferral').value != '27') {
//            if (document.getElementById('' + ctrlcom + '_ucReferal_ucreferalname_txtSearchControl').value == '') {
//                $(".stoast").toastText("warning", "Please select referral Name", 2, 3);
//                document.getElementById('' + ctrlcom + '_ucReferal_ucreferalname_txtSearchControl').focus();
//                OPcnt = 1; return false;
//            }
//        }
//    }
//    if (document.getElementById('' + ctrlcom + '_hdnRefReq').value == "Yes") {
//        if (document.getElementById('' + ctrlcom + '_ucReferal_ddlreferral').selectedIndex == 0) {
//            $(".stoast").toastText("warning", "Please select the source of referral!", 2, 3);
//            document.getElementById('' + ctrlcom + '_ucReferal_ddlreferral').focus();
//            OPcnt = 1; return false;
//        }
    //    }

    var ReferalDoctor = document.getElementById('ctl00_ContentPlaceHolder1_ucReferal_ucreferalname_txtSearchControl').value;
    if (document.getElementById('ctl00_ContentPlaceHolder1_hdnRefReq').value == "Yes") {
        SelectedRowIndex = SelectedRowIndex == 0 ? 1 : SelectedRowIndex;
        if (SelectedRowIndex == 1) {

            if (document.getElementById('ctl00_ContentPlaceHolder1_ucReferal_ddlreferral').value == 0) {
                $(".stoast").toastText("Warning", "Please Select The Type Of Referral!", 5, 3);
                document.getElementById('ctl00_ContentPlaceHolder1_ucReferal_ddlreferral').focus();
                OPcnt = 1; return false;
            }
        }
        if (SelectedRowIndex == 1) {
            if (document.getElementById('ctl00_ContentPlaceHolder1_ucReferal_hdnreferaldisable').value != 'YES') {

            }
            else {
                if (document.getElementById('ctl00_ContentPlaceHolder1_ucReferal_ddlreferral').value > 1) {
                    if (document.getElementById('ctl00_ContentPlaceHolder1_ucReferal_ucreferalname_txtSearchControl').value == '') {
                        $(".stoast").toastText("Warning", "Please Select Referred By For R1!", 5, 3);
                        OPcnt = 1; return false;
                    }

                }
            }
        }
        if (SelectedRowIndex == 2) {
            if (document.getElementById('ctl00_ContentPlaceHolder1_ucReferal_hdnreferaldisable').value != 'YES') {

            }
            else {
                if (document.getElementById('ctl00_ContentPlaceHolder1_ucReferal_ddlreferral').value > 1) {
                    if (document.getElementById('ctl00_ContentPlaceHolder1_ucReferal_ucreferalname_txtSearchControl').value == '') {
                        $(".stoast").toastText("Warning", "Please Select Referred By For R2!", 5, 3);
                        OPcnt = 1; return false;
                    }

                }
            }

        }
        if (SelectedRowIndex == 3) {
            if (document.getElementById('ctl00_ContentPlaceHolder1_ucReferal_hdnreferaldisable').value != 'YES') {

            }
            else {
                if (document.getElementById('ctl00_ContentPlaceHolder1_ucReferal_ddlreferral').value > 1) {
                    if (document.getElementById('ctl00_ContentPlaceHolder1_ucReferal_ucreferalname_txtSearchControl').value == '') {
                        $(".stoast").toastText("Warning", "Please Select Referred By For R3!", 5, 3);
                        OPcnt = 1; return false;
                    }

                }
            }
        }
        if (SelectedRowIndex == 4) {
            if (document.getElementById('ctl00_ContentPlaceHolder1_ucReferal_hdnreferaldisable').value != 'YES') {

            }
            else {
                if (document.getElementById('ctl00_ContentPlaceHolder1_ucReferal_ddlreferral').value > 1) {
                    if (document.getElementById('ctl00_ContentPlaceHolder1_ucReferal_ucreferalname_txtSearchControl').value == '') {
                        $(".stoast").toastText("Warning", "Please Select Referred By For R4!", 5, 3);
                        OPcnt = 1; return false;
                    }

                }
            }
        }
    }
    if (myMultiDatar1[0]["Record_Status"] == 'D') {
        $(".stoast").toastText("warning", "Please enter atleast one referral details", 5, 3);
        OPcnt = 1; return false;
    }

    var GvRowscount = 2;
    var grid = document.getElementById('' + ctrlcom + '_UCServices_gvServices');
    var _index = grid.rows.length;
    var SrvID = '';
    var SrvName = '';
    var count = 0;
    if (document.getElementById('' + ctrlcom + '_umrPatientDetails_hdnOspRegReq').value == 'Y') {
        if (_index > 0) {
        }
        else {
            $(".stoast").toastText("warning", "Please Select Atleast One Service !", 2, 3);
            OPcnt = 1; return false;
        }
    }
    else if (_index > 0) {
    }
    else {
        $(".stoast").toastText("warning", "Please Select Atleast One Service !", 2, 3);
        OPcnt = 1; return false;
    }

    dispat = $('#' + ctrlcom + '_UCServices_divrptDispatch').val();
    if (dispat == '0') {
        $(".stoast").toastText("warning", "Please Select Reports Dispatch !", 2, 3);
        document.getElementById('' + ctrlcom + '_UCServices_divrptDispatch').focus();
        OPcnt = 1; return false;
    }
    var count = '0';
    var GvRowscount = 0;
    var grid = document.getElementById('' + ctrlcom + '_UCServices_gvServices');
    var _index = grid.rows.length;

    /* this is hystory types related functinality change is there so we commented this */
    $("table[id$=gvServices] tr:has(td)").each(function (e) {
        var _hdnserviceid = $(this).closest('tr').find("input[type=hidden][id*=hdnServiceID]").val();
        if (parseInt(_hdnserviceid) > 2) {

            OrderingPhyCount = 1;
        }
        if (GvRowscount < _index) {

            SrvID = $(this).closest('tr').find("input[type=hidden][id*=hdnServiceID]").val();
            SrvName = $(this).closest('tr').find("input[type=text][id*=txtServiceName]").val();
            history_type = $(this).closest('tr').find("input[type=hidden][id*=hdnhistorytypeID]").val();
            medication = $(this).closest('tr').find("input[type=hidden][id*=hdnMedicationType]").val();
            lmpcalander = $(this).closest('tr').find("input[type=hidden][id*=hdnLmpCal]").val();
            outhermedication = $(this).closest('tr').find("input[type=hidden][id*=hdnOutherMedic]").val();
            historystatus = $(this).closest('tr').find("input[type=hidden][id*=hdnIsTakenToday]").val();
            if (history_type == undefined || history_type == '' || history_type == null) { history_type = '0'; } else { history_type = history_type; }
            if (medication == undefined || medication == '' || medication == null) { medication = '0'; } else { medication = medication; }
            if (historystatus == undefined || historystatus == '' || historystatus == null) { historystatus = 'N'; } else { historystatus = historystatus; }
            switch (history_type) {
                case '1':
                    {
                        if (medication == '0') {
                            $(".stoast").toastText("warning", "Please Select History Type For '" + SrvName + "'", 2, 3);
                            count = '4';
                            OPcnt = 1; return false;
                        }
                    } break;
                case '2':
                    {
                        var f_name = document.getElementById('' + ctrlcom + '_umrPatientDetails_hdnDocName').value;
                        var gender = '';
                        if (f_name == 'OPQUICK') {
                            var gender_id = $('#' + ctrlcom + '_ddlGender').val();
                            if (gender_id == '2') {
                                gender = 'Female';
                            }
                        }
                        else {
                            gender = $('#' + ctrlcom + '_umrPatientDetails_lblgender').text();
                        }
                        if ((lmpcalander == undefined || lmpcalander == null || lmpcalander == '') && gender == "Female") {
                            $(".stoast").toastText("warning", "Please Select History Type For '" + SrvName + "'", 2, 3);
                            count = '4';
                            OPcnt = 1; return false;
                        }
                    } break;
                case '3':
                    {
                        if (medication == '0') {
                            $(".stoast").toastText("warning", "Please Select History Type For '" + SrvName + "'", 2, 3);
                            count = '4';
                            OPcnt = 1; return false;
                        }
                    } break;
                case '4':
                    {
                        if (medication == '0') {
                            $(".stoast").toastText("warning", "Please Select History Type For '" + SrvName + "'", 2, 3);
                            count = '4';
                            OPcnt = 1; return false;
                        }
                    } break;
                case '5':
                    {
                        if (medication == '0') {
                            $(".stoast").toastText("warning", "Please Select History Type For '" + SrvName + "'", 5, 3);
                            count = '4';
                            OPcnt = 1; return false;
                        }
                    } break;
                case '6':
                    {
                        if (outhermedication == '') {
                            $(".stoast").toastText("warning", "Please Select History Type For '" + SrvName + "'", 5, 3);
                            count = '4';
                            OPcnt = 1; return false;
                        }
                    } break;
                default:
                    {
                        break;
                    }

            }
        }
        GvRowscount++;
    })
    if (count == '4')
    { OPcnt = 1; return false; }

    var SrvShdleCount = '';
    $("table[id$=UCServices_gvServices] tr:has(td)").each(function (e) {
        SrvShdleCount = '';
        var SrvName = $(this).closest('tr').find("input[type=text][id*=txtServiceName]").val();
        var issrvsch = $(this).closest('tr').find('[id*=hdnisschedulerequired]').val();
        var srv_grp_name = $(this).closest('tr').find('[id*=hdnSrv_Grp_Name]').val();
        var qty = $(this).closest('tr').find('[id*=txtQty]').val();
        var hdnSaveSrvShdle = $(this).closest('tr').find('[id*=hdnSrvShcedulSave]').val();
        var hdn_remarks_mandatory = $(this).closest('tr').find('[id*=hdn_remarks_mandatory]').val();
        var txtremks = $(this).closest('tr').find('[id*=txtremks]').val();
        var hdnDoctorID = $(this).closest('tr').find("input[type=hidden][id*=hdnDoctorID]").val();
        var _dept_name = $(this).closest('tr').find("input[type=text][id*=txtServiceName]").val();
        var hdnDepartment_Id = $(this).closest('tr').find("input[type=hidden][id*=hdnDepartment_Id]").val();
        var hdnClass_Srv_ID = $(this).closest('tr').find("input[type=hidden][id*=hdnClass_Srv_ID]").val();
        var servicedtricon = $(this).closest('tr').find('[id*=imgsrvdtr]').css('display');
        var servicedtr = $(this).closest('tr').find('[id*=txtsrvdoctor]').val();

        if (txtremks == null || txtremks == undefined || txtremks == '') { txtremks == ''; }
        if (hdn_remarks_mandatory == null || hdn_remarks_mandatory == undefined || hdn_remarks_mandatory == '') { hdn_remarks_mandatory = 'N'; }
        if (hdnClass_Srv_ID == null || hdnClass_Srv_ID == undefined || hdnClass_Srv_ID == '') { hdnClass_Srv_ID = '0'; }
        if (servicedtr == null || servicedtr == undefined || servicedtr == '') { servicedtr = ''; }

        var _srvId = $(this).closest('tr').find("input[type=hidden][id*=hdnServiceID]").val();
        var constypeid = $(this).closest('tr').find('[id*=ddSType]').val();
        if (constypeid == null || constypeid == undefined || constypeid == '') {
            constypeid = '0';
        }

        if (servicedtricon == 'block' && servicedtr == '') {
            SrvShdleCount = '1';
            $(this).closest('tr').find('[id*=imgsrvdtr]').focus();
            $(".stoast").toastText("Warning", "Please Select Doctor  against the '" + SrvName + "'", 5, 3);
            return false;
        }

        if (SrvName != "REGISTRATION" && _srvId == 2) {

            if (constypeid == 0) {
                SrvShdleCount = '1';
                $(".stoast").toastText("Warning", "Please Select Doctor " + SrvName + " Against to Consultation Type!", 2, 3);
                return false;
            }
        }

        if (qty > 1 && hdnSaveSrvShdle == '' && srv_grp_name != 'FOOD N BEWERAGES') {
            if (issrvsch == 'Y') {
                SrvShdleCount = '1';
                $(this).closest('tr').find('[id*=imgSrvShedul]').focus();
                $(".stoast").toastText("warning", "Please Select Service Schedule For '" + SrvName + "'", 5, 3);
                return false;
            }
        }
        if (hdn_remarks_mandatory == 'Y' && txtremks == '') {
            SrvShdleCount = '1';
            $(this).closest('tr').find('[id*=txtremks]').focus();
            $(".stoast").toastText("warning", "Please enter your remarks! For '" + SrvName + "'", 5, 3);
            return false;
        }

        /* if (hdnDepartment_Id > 0 && hdnDoctorID == 0 && hdnClass_Srv_ID == 0) {
        SrvShdleCount = '1';
        $(".stoast").toastText("warning", "Please Select Doctor Against to " + _dept_name + " Department !", 2, 3);
        return false;
        }*/
        var slot_req = document.getElementById('' + ctrlcom + '_hdnisapptslotreq').value;
        var is_doc_slots_req = document.getElementById('' + ctrlcom + '_hdnIsDoctorSlotsReq').value;
        if (slot_req == 'True' && is_doc_slots_req == 'True') {
            if (hdnDoctorID > 0) {
                var slot_time = $(this).closest('tr').find('[id*=ddlSlotTiming]').find('option:selected').text();
                var doc_name = $(this).closest('tr').find("input[type=text][id*=txtServiceName]").val();
                if (slot_time == "Select" || slot_time == "" || slot_time == undefined || slot_time == NaN || slot_time == "0") {
                    $(".stoast").toastText("warning", "Please Select the Slot for this " + doc_name + "  ", 5, 3);
                    SrvShdleCount = '1';
                    return false;
                }
            }
        }
    });
    if (SrvShdleCount == '1')
    { OPcnt = 1; return false; }

    if (document.getElementById('' + ctrlcom + '_ReceiptControl2_chkismultiple').checked == true) {
        var Multi_disc_grid = document.getElementById('' + ctrlcom + '_ReceiptControl2_gvMultipleConcession');
        var _index_MD = Multi_disc_grid.rows.length;
        var GvRowscount_MD = 0;
        var MD_Count = 0;
        $("table[id*=gvMultipleConcession] tr:has(td)").each(function (i, j) {
            if (GvRowscount_MD < _index_MD) {
                var Disc_Type_id = $(this).closest('tr').find("[id*=ddlMultiDiscounttype]").val();
                var authid = $(this).closest('tr').find("input[type=hidden][id*=hdnauthid]").val();
                var authname = $(this).closest('tr').find("[id*=txtAutherizedPersion]").val();
                var disamt = $(this).closest('tr').find("[id*=txtAmount]").val();
                if (parseFloat(Disc_Type_id) > 0) {
                    if (authid == '0' || authid == '' || authid == undefined || authname == '' || authname == undefined) {
                        if (disamt != '' && disamt != '0') {
                            MD_Count = 149;
                            $(".stoast").toastText("warning", "Please select auth name for multi discounts ", 5, 3);
                        }
                    } 
                }

            }
        });
        if (MD_Count == 149) {
            OPcnt = 1; return false;
        }
    }
    else {
        var Cash_Disc_id = $('#' + ctrlcom + '_ReceiptControl2_ddlDiscountType').val();
        var Disc_Amt = $('#' + ctrlcom + '_ReceiptControl2_txtpatgrossamt').val();
        var Disc_Pcnt = $('#' + ctrlcom + '_ReceiptControl2_txtpatdis').val();
        var Disc_Auth = $('#' + ctrlcom + '_ReceiptControl2_ucdueauth_txtSearchControl').val();
        var Disc_Auth_Id = $('#' + ctrlcom + '_ReceiptControl2_ucdueauth__hiddenID').val();
        if (Cash_Disc_id == 1 && lbladvanced.className == 'select' && parseFloat(Disc_Pcnt) > 0 && (Disc_Auth == '' || Disc_Auth == undefined || Disc_Auth_Id == 0 || Disc_Auth_Id == '' || Disc_Auth_Id == undefined)) {
            $(".stoast").toastText("warning", "Please select user for discount authorization! ", 5, 3);
            OPcnt = 1; return false;
        }

    }
    var Pat_Due = $('#' + ctrlcom + '_ReceiptControl2_txtpatdue').val();
    if (lblquick.className == 'select') { /* Quick Mode */
        var Auth_id = document.getElementById('' + ctrlcom + '_ReceiptControl2_Search3__hiddenID').value;

        var Card_Amt = $('#' + ctrlcom + '_ReceiptControl2_txtCardAmt').val();
        if (parseInt(Card_Amt) > 0 && document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlcrdtype').value > 0) {
            var card_no = $('#' + ctrlcom + '_ReceiptControl2_txtcardNoCmp').val();
            var Card_Type = $('#' + ctrlcom + '_ReceiptControl2_ddcardType').val();
            var Exp_dt = $('#' + ctrlcom + '_ReceiptControl2_txtcardExpiredt').val();
            if (Exp_dt == undefined || Exp_dt == null || Exp_dt == '') { Exp_dt = ''; }
            var Card_Auth_name = $('#' + ctrlcom + '_ReceiptControl2_txtcardAuther').val();
            if (parseInt(Card_Amt) == 0) {
                $(".stoast").toastText("warning", "Please Enter Amount ", 5, 3);
                document.getElementById('' + ctrlcom + '_ReceiptControl2_txtCardAmt').focus();
                OPcnt = 1; return false;
            }
            if (card_no == '' || card_no == undefined || card_no == null) {
                $(".stoast").toastText("warning", "Please Select Card No ", 5, 3);
                document.getElementById('' + ctrlcom + '_ReceiptControl2_txtcardNoCmp').focus();
                OPcnt = 1; return false;
            }
            if (Card_Type == '0') {
                $(".stoast").toastText("warning", "Please select the Card Type! ", 5, 3);
                document.getElementById('' + ctrlcom + '_ReceiptControl2_ddcardType').focus();
                OPcnt = 1; return false;
            }
            /*if (Exp_dt == '' || Exp_dt == undefined || Exp_dt == null) {
            $(".stoast").toastText("warning", "Please Select Card Expiry Date ", 5, 3);
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtcardExpiredt').focus();
            OPcnt = 1; return false;
            }*/
            if (Card_Auth_name == '') {
                $(".stoast").toastText("warning", "Please Enter Authorisation# ", 5, 3);
                document.getElementById('' + ctrlcom + '_ReceiptControl2_txtcardAuther').focus();
                OPcnt = 1; return false;

            }
            if (document.getElementById('' + ctrlcom + '_ReceiptControl2_ddbankName').value == "0") {
                $(".stoast").toastText("warning", "Please select the name of the Bank! ", 5, 3);
                document.getElementById('' + ctrlcom + '_ReceiptControl2_ddbankName').focus();
                OPcnt = 1; return false;
            }
        }

        var grsAmnt = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatgross').value;
        var CashAmnt = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtcashAmt').value;
        var cardAmnt = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtCardAmt').value;
        if (CashAmnt == '' || CashAmnt == undefined || CashAmnt == NaN) { CashAmnt = "0"; } else { CashAmnt = CashAmnt; }
        if (cardAmnt == '' || cardAmnt == undefined || cardAmnt == NaN) { cardAmnt = "0"; } else { cardAmnt = cardAmnt; }
        /*  if (parseFloat(grsAmnt) < (parseFloat(CashAmnt) + parseFloat(cardAmnt))) {
        $(".stoast").toastText("warning", "Payment Amount GreterThan Due Amount.....!", 5, 3);
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtcashAmt').value = "0";
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtCardAmt').value = "0";
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatdue').value = grsAmnt;
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtTotalDue').value = grsAmnt;
        OPcnt = 1; return false;
        }*/
        var asses = document.getElementById('' + ctrlcom + '_ChkAssesment').checked;
        if (asses == true) {
        }
        else {
            if (document.getElementById('' + ctrlcom + '_ChkAssesment').checked == false) {
                if (parseInt(Pat_Due) > 0 && (Auth_id == undefined || Auth_id == null || Auth_id == 'NaN' || Auth_id == '' || Auth_id == "0")) {
                    $(".stoast").toastText("warning", "Please Select Due Authorization", 5, 3);
                    document.getElementById('' + ctrlcom + '_ReceiptControl2_Search3_txtSearchControl').focus();
                    OPcnt = 1; return false;
                }
            }
        }
    }
    else {
        var Auth_id = document.getElementById('' + ctrlcom + '_ReceiptControl2_Search3__hiddenID').value;
        var post_DscntP = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatdis').value;
        var post_DscntM = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatgrossamt').value;
        var Conc_Auth_ID = document.getElementById('' + ctrlcom + '_ReceiptControl2_ucdueauth_txtSearchControl').value;
        var asses = document.getElementById('' + ctrlcom + '_ChkAssesment').checked;
        if (asses == true) {
        }
        else {
            if (document.getElementById('' + ctrlcom + '_ChkAssesment').checked == false) {
                if (parseInt(Pat_Due) > 0 && (Auth_id == undefined || Auth_id == null || Auth_id == 'NaN' || Auth_id == '' || Auth_id == "0")) {
                    $(".stoast").toastText("warning", "Please Select Due Authorization", 5, 3);
                    document.getElementById('' + ctrlcom + '_ReceiptControl2_Search3_txtSearchControl').focus();
                    OPcnt = 1; return false;
                }
            }
        }
    }

    var Remark_Count = 0;
    var Cmp_due_allow = $('#' + ctrlcom + '_hdnallowdueopd').val();
    if (Cmp_due_allow == 'False') {
        var due_amt_a = $('#' + ctrlcom + '_ReceiptControl2_txtpatdue').val();
        if (due_amt_a == null || due_amt_a == '' || due_amt_a == undefined)
        { due_amt_a = 0; }
        if (parseFloat(due_amt_a) > 0) {
            $(".stoast").toastText("warning", "Due Not Allowed ,Please Contact Administrator! ", 5, 3);
            Remark_Count = 149;
        }
    }

    var indn = document.getElementById('' + ctrlcom + '_UCServices_hdnRemoveSrv').value;

    var Due_Auth_name = $('#' + ctrlcom + '_ReceiptControl2_Search3_txtSearchControl').val();
    var Due_Auth_Id = $('#' + ctrlcom + '_ReceiptControl2_Search3__hiddenID').val();
    var Due_Auth_Text = $('#' + ctrlcom + '_ReceiptControl2_Search3__hiddenText').val();
    var pat_due = $('#' + ctrlcom + '_ReceiptControl2_txtpatdue').val();
    if (document.getElementById('' + ctrlcom + '_ChkAssesment').checked == false) {
        if ((Pat_Due > 0) && (Due_Auth_Text == '' || Due_Auth_Text == null || Due_Auth_name == '' || Due_Auth_name == null || Due_Auth_Id == '' || Due_Auth_Id == '0')) {
            $(".stoast").toastText("warning", "Please Select Due Authorised Person!.", 5, 3);
            Remark_Count = 149;
        }
    }
    /*if ((parseInt(Due_Auth_Id) > 0 || indn == 'Y') && lbladvanced.className == 'select') {*/
    if ((parseFloat(pat_due) > 0 && indn == 'Y') && lbladvanced.className == 'select') {
        if (document.getElementById('' + ctrlcom + '_ReceiptControl2_txtRemarks').value.trim() == '') {
            $(".stoast").toastText("warning", "Please enter your remarks!!", 5, 3);
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtRemarks').value = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtRemarks').value.trim();
            $('#' + ctrlcom + '_ReceiptControl2_txtRemarks').addClass('red');
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtRemarks').focus();
            Remark_Count = 149
        }

    }
    var pat_due = $('#' + ctrlcom + '_ReceiptControl2_txtpatdue').val();
    if (parseFloat(pat_due) > 0) { } else { pat_due = 0; }
    var quick_remarks = $('#' + ctrlcom + '_ReceiptControl2_txtquickremarks').val();
    if ((parseFloat(pat_due) > 0 || indn == 'Y') > 0 && lblquick.className == 'select' && quick_remarks == '') {
        $(".stoast").toastText("warning", "Please enter your remarks!!", 5, 3);
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtquickremarks').focus();
        Remark_Count = 149
    }
    if (Remark_Count == 149)
    { OPcnt = 1; return false; }
    var credit_limit_count = CheckCreditLimits();
    if (credit_limit_count == '150') {
        OPcnt = 1; return false;
    }
    if (OrderingPhyCount == 1) {
        // if ($('[id*=hdnisaloworderphy]').val().toUpperCase() == "NO") {
        if ((document.getElementById('' + ctrlcom + '_UcOdrPsyn_txtSearchControl').value == '' || document.getElementById('' + ctrlcom + '_UcOdrPsyn_txtSearchControl').value == undefined || document.getElementById('' + ctrlcom + '_UcOdrPsyn_txtSearchControl').value == null)
        && ($('[id*=hdnisalowzeroprice]').val().toUpperCase() == "NO")) {
            $(".stoast").toastText("warning", "Please Select Ordering Physician", 5, 3);
            document.getElementById('' + ctrlcom + '_UcOdrPsyn_txtSearchControl').focus();
            OPcnt = 1;
            return false;
        }
        //}
    }
}
/*OSP SAVING*/
var alert_count = 0;
function OSPSave(obj) {
    alert_count = 0;
    if (document.getElementById('' + ctrlcom + '_ddlTitle').value == '0') {
        $(".stoast").toastText("warning", "Please select Title!.", 5, 3);
        //        alert('Please select Title!.');
        document.getElementById('' + ctrlcom + '_ddlTitle').focus();
        alert_count = 1;
        return false;
    }
    var ddlDisplayName = document.getElementById('' + ctrlcom + '_hdnDisplayNameSetting');
    ddlDisplayName = ddlDisplayName.value;
    if (ddlDisplayName == 'First Name And Last Name') {
        var FirstLastName = document.getElementById('ctl00_ContentPlaceHolder1_hdnFirstLastName').value; ;
        FirstLastName = FirstLastName.split(',');
        for (var i = 0; i < FirstLastName.length; i++) {
            if (FirstLastName[i] == 1) {
                if (document.getElementById('' + ctrlcom + '_txtFirstName').value == '') {
                    $(".stoast").toastText("warning", "Please Enter FirstName!.", 5, 3);
                    document.getElementById('' + ctrlcom + '_txtFirstName').focus();
                    alert_count = 1;
                    return false;
                }
            }
            if (FirstLastName[i] == 2) {
                if (document.getElementById('' + ctrlcom + '_txtLastName').value == '') {
                    $(".stoast").toastText("warning", "Please Enter LastName!.", 5, 3);
                    document.getElementById('' + ctrlcom + '_txtLastName').focus();
                    alert_count = 1;
                    return false;
                }
            }
        }
    }
    else if (ddlDisplayName == 'First Name And Middle Name') {

        if (document.getElementById('' + ctrlcom + '_txtFirstName').value == '') {
            $(".stoast").toastText("warning", "Please Enter FirstName!.", 5, 3);
            document.getElementById('' + ctrlcom + '_txtFirstName').focus();
            alert_count = 1;
            return false;
        }

        if (document.getElementById('' + ctrlcom + '_txtMiddleName').value == '') {
            $(".stoast").toastText("warning", "Please Enter MiddleName!.", 5, 3);
            document.getElementById('' + ctrlcom + '_txtMiddleName').focus();
            alert_count = 1;
            return false;
        }

    }
    else if (ddlDisplayName == 'First Name And Middle Name And Last Name') {
        var FirstMiddleLastName = document.getElementById('ctl00_ContentPlaceHolder1_hdnFirstMiddleLastName').value; ;
        FirstMiddleLastName = FirstMiddleLastName.split(',');
        for (var i = 0; i < FirstMiddleLastName.length; i++) {
            if (FirstMiddleLastName[i] == 1) {
                if (document.getElementById('' + ctrlcom + '_txtFirstName').value == '') {
                    $(".stoast").toastText("warning", "Please Enter FirstName!.", 5, 3);
                    document.getElementById('' + ctrlcom + '_txtFirstName').focus();
                    alert_count = 1;
                    return false;
                }
            }
            if (FirstMiddleLastName[i] == 2) {
                if (document.getElementById('' + ctrlcom + '_txtMiddleName').value == '') {
                    $(".stoast").toastText("warning", "Please Enter MiddleName!.", 5, 3);
                    document.getElementById('' + ctrlcom + '_txtMiddleName').focus();
                    alert_count = 1;
                    return false;
                }
            }
            if (FirstMiddleLastName[i] == 3) {
                if (document.getElementById('' + ctrlcom + '_txtLastName').value == '') {
                    $(".stoast").toastText("warning", "Please Enter LastName!.", 5, 3);
                    document.getElementById('' + ctrlcom + '_txtLastName').focus();
                    alert_count = 1;
                    return false;
                }
            }
        }


    }
    else if (ddlDisplayName == 'First Name') {
        if (document.getElementById('' + ctrlcom + '_txtFirstName').value == '') {
            $(".stoast").toastText("warning", "Please Enter FirstName!.", 5, 3);
            document.getElementById('' + ctrlcom + '_txtFirstName').focus();
            alert_count = 1;
            return false;
        }
    }
    else {
        if (document.getElementById('' + ctrlcom + '_txtFirstName').value == '') {
            $(".stoast").toastText("warning", "Please Enter FirstName!.", 5, 3);
            document.getElementById('' + ctrlcom + '_txtFirstName').focus();
            alert_count = 1;
            return false;
        }
        if (document.getElementById('' + ctrlcom + '_txtLastName').value == '') {
            $(".stoast").toastText("warning", "Please Enter LastName!.", 5, 3);
            document.getElementById('' + ctrlcom + '_txtLastName').focus();
            alert_count = 1;
            return false;
        }
    }
    if (document.getElementById('' + ctrlcom + '_newAgeUc_txtDob').value == "__-__-____") {
        $(".stoast").toastText("warning", "Please Enter Dob !.", 5, 3);
        document.getElementById('' + ctrlcom + '_newAgeUc_txtDob').focus();
        alert_count = 1;
        return false;
    }
    i
    var clientname = $('[id*=hdnclientNameFor]').val();
    clientname = clientname.toUpperCase();
    if (clientname != 'MRRCH') {
        var ddlTitle = document.getElementById('' + ctrlcom + '_ddlTitle');
        var ddlTitleIndex = document.getElementById('' + ctrlcom + '_ddlTitle').selectedIndex;
        var val = ddlTitleIndex;
        if (ddlTitle[val].innerHTML != '' && ddlTitle[val].innerHTML != '--select--') {
            /*Age Calculation*/
            var _years = document.getElementById('' + ctrlcom + '_newAgeUc_txtYear').value;
            var _months = document.getElementById('' + ctrlcom + '_newAgeUc_txtMonths').value;
            var _days = document.getElementById('' + ctrlcom + '_newAgeUc_txtDay').value;
            var msg = '';
            if ((_years != '0' || _years != '') || (_months != '0' || _months != '') || (_days != '0' || _days != '')) {
                if (ddlTitle[val].innerHTML == 'Mr' || ddlTitle[val].innerHTML == 'Mrs' || ddlTitle[val].innerHTML == 'Ms' || ddlTitle[val].innerHTML == 'Dr' || ddlTitle[val].innerHTML == 'Prof' || ddlTitle[val].innerHTML == 'Capt') {
                    if (_years >= 17) {
                    }
                    else {
                        msg = "Please Enter Proper age of " + ddlTitle[val].innerHTML + " !!!";
                        $(".stoast").toastText("warning", msg, 5, 3);
                        document.getElementById('' + ctrlcom + '_newAgeUc_txtYear').value = 0;
                        document.getElementById('' + ctrlcom + '_newAgeUc_txtDob').value = "__-__-____";
                        $('#' + ctrlcom + '_newAgeUc_txtDob').addClass('red');
                        document.getElementById('' + ctrlcom + '_newAgeUc_txtYear').value = 0;
                        document.getElementById('' + ctrlcom + '_newAgeUc_txtMonths').value = 0;
                        document.getElementById('' + ctrlcom + '_newAgeUc_txtDay').value = 0;
                        document.getElementById('' + ctrlcom + '_newAgeUc_txtYear').focus();
                        alert_count = 1;
                        return false;
                    }
                }

                if (ddlTitle[val].innerHTML == 'Master' || ddlTitle[val].innerHTML == 'Baby' || ddlTitle[val].innerHTML == 'Baby Of') {
                    if (_years < 17) {

                    }
                    else {
                        msg = "Please Enter Proper age of " + ddlTitle[val].innerHTML + " !!!";
                        $(".stoast").toastText("warning", msg, 5, 3);
                        //                        alert(msg);
                        document.getElementById('' + ctrlcom + '_newAgeUc_txtYear').value = 0;
                        document.getElementById('' + ctrlcom + '_newAgeUc_txtDob').value = "__-__-____";
                        $('#' + ctrlcom + '_newAgeUc_txtDob').addClass('red');
                        _years = 0;
                        _days = 0;
                        _months = 0;
                        document.getElementById('' + ctrlcom + '_newAgeUc_txtYear').focus();
                        alert_count = 1;
                        return false;
                    }
                }
            }

            if (ddlTitle[val].innerHTML == 'Baby Boy' || ddlTitle[val].innerHTML == 'Baby Girl') {

                if (_years == 0) {
                    if (_months < 3) {
                        if (_days <= 31) {
                        }
                        else {
                            msg = "Please Enter Proper age of " + ddlTitle[val].innerHTML + " Patient!!!";
                            $(".stoast").toastText("warning", msg, 5, 3);
                            //                            alert(msg);
                            document.getElementById('' + ctrlcom + '_newAgeUc_txtDay').value = 0;
                            document.getElementById('' + ctrlcom + '_newAgeUc_txtDob').value = "__-__-____";
                            $('#' + ctrlcom + '_newAgeUc_txtDob').addClass('red');
                            _years = 0;
                            _days = 0;
                            _months = 0;
                            document.getElementById('' + ctrlcom + '_newAgeUc_txtDay').focus();
                            alert_count = 1;
                            return false;
                        }
                    }
                    else {
                        msg = "Please Enter Proper age of " + ddlTitle[val].innerHTML + " Patient!!!";
                        $(".stoast").toastText("warning", msg, 5, 3);
                        document.getElementById('' + ctrlcom + '_newAgeUc_txtMonths').value = 0;
                        document.getElementById('' + ctrlcom + '_newAgeUc_txtDob').value = "__-__-____";
                        $('#' + ctrlcom + '_newAgeUc_txtDob').addClass('red');
                        _years = 0;
                        _days = 0;
                        _months = 0;
                        document.getElementById('' + ctrlcom + '_newAgeUc_txtMonths').focus();
                        alert_count = 1;
                        return false;
                    }
                }
                else {
                    msg = "Please Enter Proper age of " + ddlTitle[val].innerHTML + " Patient!!!";
                    $(".stoast").toastText("warning", msg, 5, 3);
                    document.getElementById('' + ctrlcom + '_newAgeUc_txtYear').value = 0;
                    document.getElementById('' + ctrlcom + '_newAgeUc_txtDob').value = "__-__-____";
                    $('#' + ctrlcom + '_newAgeUc_txtDob').addClass('red');
                    _years = 0;
                    _days = 0;
                    _months = 0;
                    document.getElementById('' + ctrlcom + '_newAgeUc_txtYear').focus();
                    alert_count = 1;
                    return false;
                }

            }
        }
    }
    if (document.getElementById('' + ctrlcom + '_pre_regi').value != 5) {
        if (document.getElementById('' + ctrlcom + '_hdndtrmandatary').value == 'YES') {
            if (document.getElementById('' + ctrlcom + '_ucConsultant_txtSearchControl').value == '' || document.getElementById('' + ctrlcom + '_ucConsultant__hiddenID').value == '') {
                $(".stoast").toastText("warning", "Please select Consultant Doctor.", 5, 3);
                document.getElementById('' + ctrlcom + '_ucConsultant_txtSearchControl').focus();
                alert_count = 1;
                return false;
            }
        }
    }
    var ReferalDoctor = document.getElementById('' + ctrlcom + '_ucReferal_ucreferalname_txtSearchControl').value;
    var ClientName = document.getElementById('' + ctrlcom + '_hdnClientName').value;
    if (document.getElementById('' + ctrlcom + '_hdnRefReq').value == "Yes") {
        SelectedRowIndex = SelectedRowIndex == 0 ? 1 : SelectedRowIndex;
        if (SelectedRowIndex == 1) {
            if (document.getElementById('' + ctrlcom + '_ucReferal_ddlreferral').value == 0) {
                $(".stoast").toastText("warning", "Please select the type of referral!", 5, 3);
                document.getElementById('' + ctrlcom + '_ucReferal_ddlreferral').focus();
                alert_count = 1;
                return false;
            }
        }
        if (document.getElementById('' + ctrlcom + '_ucReferal_ddlreferral').value > '0') {
            if (document.getElementById('' + ctrlcom + '_ucReferal_ddlreferral').value != '27') {
                if (myMultiDatar1 != '') {
                    if (document.getElementById("" + ctrlcom + "_ucReferal_hdnreferaldisable").value != "YES") {
                        if (myMultiDatar1[0]["Source"] > 0) {
                            if ((myMultiDatar1[0]["Name"]) == '') {
                                $("#R1").addClass("select");
                                $("#R2,#R3,#R4").removeClass("select");
                                $(".stoast").toastText("warning", "Please select referred by for R1!!", 5, 3);
                                //                            alert('Please select referred by for R1!!');
                                document.getElementById('' + ctrlcom + '_ucReferal_ucreferalname_txtSearchControl').focus();
                                alert_count = 1;
                                return false;
                            }
                            if ((myMultiDatar1[0]["ReferalClass"]) == '') {
                                if (document.getElementById("" + ctrlcom + "_ucReferal_hdnreferaldisable").value != "YES") {
                                    $("#R1").addClass("select");
                                    $("#R2,#R3,#R4").removeClass("select");
                                    $(".stoast").toastText("warning", "Please select referral source for R1!!", 5, 3);
                                    //                            alert('Please select referred by for R1!!');
                                    document.getElementById('' + ctrlcom + '_ucReferal_ucrfrlsrc_txtSearchControl').focus();
                                    alert_count = 1;
                                    return false;
                                }
                            }
                            if ((myMultiDatar1[0]["referedTo"]) == '') {
                                if (document.getElementById("" + ctrlcom + "_ucReferal_hdnreferaldisable").value != "YES") {
                                    $("#R1").addClass("select");
                                    $("#R2,#R3,#R4").removeClass("select");
                                    $(".stoast").toastText("warning", "Please Select ReferredTo for R1", 5, 3);
                                    //                            alert('Please select referred by for R1!!');
                                    document.getElementById('' + ctrlcom + '_ucReferal_ucReferedto_txtSearchControl').focus();
                                    alert_count = 1;
                                    return false;
                                }
                            }
                        }
                    }
                    else {
                        if (myMultiDatar1[0]["Source"] > 1) {
                            if ((myMultiDatar1[0]["Name"]) == '') {
                                $("#R1").addClass("select");
                                $("#R2,#R3,#R4").removeClass("select");
                                $(".stoast").toastText("warning", "Please select referred by for R1!!", 5, 3);
                                //                            alert('Please select referred by for R1!!');
                                document.getElementById('' + ctrlcom + '_ucReferal_ucreferalname_txtSearchControl').focus();
                                alert_count = 1;
                                return false;
                            }
                            if ((myMultiDatar1[0]["ReferalClass"]) == '') {
                                if (document.getElementById("" + ctrlcom + "_ucReferal_hdnreferaldisable").value != "YES") {
                                    $("#R1").addClass("select");
                                    $("#R2,#R3,#R4").removeClass("select");
                                    $(".stoast").toastText("warning", "Please select referral source for R1!!", 5, 3);
                                    //                            alert('Please select referred by for R1!!');
                                    document.getElementById('' + ctrlcom + '_ucReferal_ucrfrlsrc_txtSearchControl').focus();
                                    alert_count = 1;
                                    return false;
                                }
                            }
                            if ((myMultiDatar1[0]["referedTo"]) == '') {
                                if (document.getElementById("" + ctrlcom + "_ucReferal_hdnreferaldisable").value != "YES") {
                                    $("#R1").addClass("select");
                                    $("#R2,#R3,#R4").removeClass("select");
                                    $(".stoast").toastText("warning", "Please Select ReferredTo for R1", 5, 3);
                                    //                            alert('Please select referred by for R1!!');
                                    document.getElementById('' + ctrlcom + '_ucReferal_ucReferedto_txtSearchControl').focus();
                                    alert_count = 1;
                                    return false;
                                }
                            }
                        }
                    }
                }
                if (myMultiDatar2 != '') {
                    if (document.getElementById("" + ctrlcom + "_ucReferal_hdnreferaldisable").value != "YES") {
                        if (myMultiDatar2[0]["Source"] > 0) {
                            if ((myMultiDatar2[0]["Name"]) == '') {
                                $("#R2").addClass("select");
                                $("#R2").click();
                                $("#R1,#R3,#R4").removeClass("select");
                                $(".stoast").toastText("warning", "Please select referred by for R2!", 5, 3);
                                //                            alert('Please Select Referral Name for R2');
                                document.getElementById('' + ctrlcom + '_ucReferal_ucreferalname_txtSearchControl').focus();
                                alert_count = 1;
                                return false;
                            }
                            if ((myMultiDatar2[0]["ReferalClass"]) == '') {
                                if (document.getElementById("" + ctrlcom + "_ucReferal_hdnreferaldisable").value != "YES") {
                                    $("#R2").addClass("select");
                                    $("#R2").click();
                                    $("#R1,#R3,#R4").removeClass("select");
                                    $(".stoast").toastText("warning", "Please select referral source for R2!", 5, 3);
                                    //                            alert('Please select referred by for R1!!');
                                    document.getElementById('' + ctrlcom + '_ucReferal_ucrfrlsrc_txtSearchControl').focus();
                                    alert_count = 1;
                                    return false;
                                }
                            }
                            if ((myMultiDatar2[0]["referedTo"]) == '') {
                                if (document.getElementById("" + ctrlcom + "_ucReferal_hdnreferaldisable").value != "YES") {
                                    $("#R2").addClass("select");
                                    $("#R2").click();
                                    $("#R1,#R3,#R4").removeClass("select");
                                    $(".stoast").toastText("warning", "Please Select ReferredTo for R2", 5, 3);
                                    //                            alert('Please select referred by for R1!!');
                                    document.getElementById('' + ctrlcom + '_ucReferal_ucReferedto_txtSearchControl').focus();
                                    alert_count = 1;
                                    return false;
                                }
                            }
                        }
                        else {
                            if (myMultiDatar2[0]["Source"] > 1) {
                                if ((myMultiDatar2[0]["Name"]) == '') {
                                    $("#R2").addClass("select");
                                    $("#R2").click();
                                    $("#R1,#R3,#R4").removeClass("select");
                                    $(".stoast").toastText("warning", "Please select referred by for R2!", 5, 3);
                                    //                            alert('Please Select Referral Name for R2');
                                    document.getElementById('' + ctrlcom + '_ucReferal_ucreferalname_txtSearchControl').focus();
                                    alert_count = 1;
                                    return false;
                                }
                                if ((myMultiDatar2[0]["ReferalClass"]) == '') {
                                    if (document.getElementById("" + ctrlcom + "_ucReferal_hdnreferaldisable").value != "YES") {
                                        $("#R2").addClass("select");
                                        $("#R2").click();
                                        $("#R1,#R3,#R4").removeClass("select");
                                        $(".stoast").toastText("warning", "Please select referral source for R2!", 5, 3);
                                        //                            alert('Please select referred by for R1!!');
                                        document.getElementById('' + ctrlcom + '_ucReferal_ucrfrlsrc_txtSearchControl').focus();
                                        alert_count = 1;
                                        return false;
                                    }
                                }
                                if ((myMultiDatar2[0]["referedTo"]) == '') {
                                    if (document.getElementById("" + ctrlcom + "_ucReferal_hdnreferaldisable").value != "YES") {
                                        $("#R2").addClass("select");
                                        $("#R2").click();
                                        $("#R1,#R3,#R4").removeClass("select");
                                        $(".stoast").toastText("warning", "Please Select ReferredTo for R2", 5, 3);
                                        //                            alert('Please select referred by for R1!!');
                                        document.getElementById('' + ctrlcom + '_ucReferal_ucReferedto_txtSearchControl').focus();
                                        alert_count = 1;
                                        return false;
                                    }
                                }
                            }
                        }

                    }
                }
                if (myMultiDatar3 != '') {
                    if (document.getElementById("" + ctrlcom + "_ucReferal_hdnreferaldisable").value != "YES") {
                        if (myMultiDatar3[0]["Source"] > 0) {
                            if ((myMultiDatar3[0]["Name"]) == '') {
                                $("#R3").addClass("select");
                                $("#R3").click();
                                $("#R1,#R2,#R4").removeClass("select");
                                $(".stoast").toastText("warning", "Please select referred by for R3!", 5, 3);
                                //                            alert('Please Select Referral Name for R3');
                                document.getElementById('' + ctrlcom + '_ucReferal_ucreferalname_txtSearchControl').focus();
                                alert_count = 1;
                                return false;
                            }
                            if ((myMultiDatar3[0]["ReferalClass"]) == '') {
                                if (document.getElementById("" + ctrlcom + "_ucReferal_hdnreferaldisable").value != "YES") {
                                    $("#R3").addClass("select");
                                    $("#R3").click();
                                    $("#R1,#R2,#R4").removeClass("select");
                                    $(".stoast").toastText("warning", "Please select referral source for R3!", 5, 3);
                                    //                            alert('Please select referred by for R1!!');
                                    document.getElementById('' + ctrlcom + '_ucReferal_ucrfrlsrc_txtSearchControl').focus();
                                    alert_count = 1;
                                    return false;
                                }
                            }
                            if ((myMultiDatar3[0]["referedTo"]) == '') {
                                if (document.getElementById("" + ctrlcom + "_ucReferal_hdnreferaldisable").value != "YES") {
                                    $("#R3").addClass("select");
                                    $("#R3").click();
                                    $("#R1,#R2,#R4").removeClass("select");
                                    $(".stoast").toastText("warning", "Please Select ReferredTo for R3", 5, 3);
                                    //                            alert('Please select referred by for R1!!');
                                    document.getElementById('' + ctrlcom + '_ucReferal_ucReferedto_txtSearchControl').focus();
                                    alert_count = 1;
                                    return false;
                                }
                            }
                        }
                    }
                    else {
                        if (myMultiDatar3[0]["Source"] > 1) {
                            if ((myMultiDatar3[0]["Name"]) == '') {
                                $("#R3").addClass("select");
                                $("#R3").click();
                                $("#R1,#R2,#R4").removeClass("select");
                                $(".stoast").toastText("warning", "Please select referred by for R3!", 5, 3);
                                //                            alert('Please Select Referral Name for R3');
                                document.getElementById('' + ctrlcom + '_ucReferal_ucreferalname_txtSearchControl').focus();
                                alert_count = 1;
                                return false;
                            }
                            if ((myMultiDatar3[0]["ReferalClass"]) == '') {
                                if (document.getElementById("" + ctrlcom + "_ucReferal_hdnreferaldisable").value != "YES") {
                                    $("#R3").addClass("select");
                                    $("#R3").click();
                                    $("#R1,#R2,#R4").removeClass("select");
                                    $(".stoast").toastText("warning", "Please select referral source for R3!", 5, 3);
                                    //                            alert('Please select referred by for R1!!');
                                    document.getElementById('' + ctrlcom + '_ucReferal_ucrfrlsrc_txtSearchControl').focus();
                                    alert_count = 1;
                                    return false;
                                }
                            }
                            if ((myMultiDatar3[0]["referedTo"]) == '') {
                                if (document.getElementById("" + ctrlcom + "_ucReferal_hdnreferaldisable").value != "YES") {
                                    $("#R3").addClass("select");
                                    $("#R3").click();
                                    $("#R1,#R2,#R4").removeClass("select");
                                    $(".stoast").toastText("warning", "Please Select ReferredTo for R3", 5, 3);
                                    //                            alert('Please select referred by for R1!!');
                                    document.getElementById('' + ctrlcom + '_ucReferal_ucReferedto_txtSearchControl').focus();
                                    alert_count = 1;
                                    return false;
                                }
                            }
                        }
                    }
                }
                if (myMultiDatar4 != '') {
                    if (document.getElementById("" + ctrlcom + "_ucReferal_hdnreferaldisable").value != "YES") {
                        if (myMultiDatar4[0]["Source"] > 0) {
                            if ((myMultiDatar4[0]["Name"]) == '') {
                                $("#R4").addClass("select");
                                $("#R4").click();
                                $("#R1,#R2,#R3").removeClass("select");
                                $(".stoast").toastText("warning", "Please select referred by for R4!", 5, 3);
                                //                            alert('Please Select Referral Name for R4');
                                document.getElementById('' + ctrlcom + '_ucReferal_ucreferalname_txtSearchControl').focus();
                                alert_count = 1;
                                return false;
                            }
                            if ((myMultiDatar4[0]["ReferalClass"]) == '') {
                                if (document.getElementById("" + ctrlcom + "_ucReferal_hdnreferaldisable").value != "YES") {
                                    $("#R3").addClass("select");
                                    $("#R3").click();
                                    $("#R1,#R2,#R4").removeClass("select");
                                    $(".stoast").toastText("warning", "Please select referral source for R4!", 5, 3);
                                    //                            alert('Please select referred by for R1!!');
                                    document.getElementById('' + ctrlcom + '_ucReferal_ucrfrlsrc_txtSearchControl').focus();
                                    alert_count = 1;
                                    return false;
                                }
                            }
                            if ((myMultiDatar4[0]["referedTo"]) == '') {
                                if (document.getElementById("" + ctrlcom + "_ucReferal_hdnreferaldisable").value != "YES") {
                                    $("#R3").addClass("select");
                                    $("#R3").click();
                                    $("#R1,#R2,#R4").removeClass("select");
                                    $(".stoast").toastText("warning", "Please Select ReferredTo for R4", 5, 3);
                                    //                            alert('Please select referred by for R1!!');
                                    document.getElementById('' + ctrlcom + '_ucReferal_ucReferedto_txtSearchControl').focus();
                                    alert_count = 1;
                                    return false;
                                }
                            }
                        }
                    }
                    else {
                        if (myMultiDatar4[0]["Source"] > 1) {
                            if ((myMultiDatar4[0]["Name"]) == '') {
                                $("#R4").addClass("select");
                                $("#R4").click();
                                $("#R1,#R2,#R3").removeClass("select");
                                $(".stoast").toastText("warning", "Please select referred by for R4!", 5, 3);
                                //                            alert('Please Select Referral Name for R4');
                                document.getElementById('' + ctrlcom + '_ucReferal_ucreferalname_txtSearchControl').focus();
                                alert_count = 1;
                                return false;
                            }
                            if ((myMultiDatar4[0]["ReferalClass"]) == '') {
                                if (document.getElementById("" + ctrlcom + "_ucReferal_hdnreferaldisable").value != "YES") {
                                    $("#R3").addClass("select");
                                    $("#R3").click();
                                    $("#R1,#R2,#R4").removeClass("select");
                                    $(".stoast").toastText("warning", "Please select referral source for R4!", 5, 3);
                                    //                            alert('Please select referred by for R1!!');
                                    document.getElementById('' + ctrlcom + '_ucReferal_ucrfrlsrc_txtSearchControl').focus();
                                    alert_count = 1;
                                    return false;
                                }
                            }
                            if ((myMultiDatar4[0]["referedTo"]) == '') {
                                if (document.getElementById("" + ctrlcom + "_ucReferal_hdnreferaldisable").value != "YES") {
                                    $("#R3").addClass("select");
                                    $("#R3").click();
                                    $("#R1,#R2,#R4").removeClass("select");
                                    $(".stoast").toastText("warning", "Please Select ReferredTo for R4", 5, 3);
                                    //                            alert('Please select referred by for R1!!');
                                    document.getElementById('' + ctrlcom + '_ucReferal_ucReferedto_txtSearchControl').focus();
                                    alert_count = 1;
                                    return false;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    if (document.getElementById('' + ctrlcom + '_Address1_txtAddress1').value == '') {
        $(".stoast").toastText("warning", "Please Enter Address!.", 5, 3);
        //        alert('Please Enter Address!.');
        document.getElementById('' + ctrlcom + '_Address1_txtAddress1').focus();
        alert_count = 1;
        return false;
    }
    if ((document.getElementById('' + ctrlcom + '_Address1_AreaUserControl1_txtSearchControl').value == '') || (document.getElementById('' + ctrlcom + '_Address1_AreaUserControl1_txtSearchControl').value == '')) {
        $(".stoast").toastText("warning", "Please select area!!.", 5, 3);
        //        alert('Please select area!!.');
        document.getElementById('' + ctrlcom + '_Address1_AreaUserControl1_txtSearchControl').focus();
        alert_count = 1;
        return false;
    }
    if (document.getElementById('' + ctrlcom + '_hdnOSPMbl').value == 'True') {
        if (document.getElementById('' + ctrlcom + '_headerControl1_hdnMobileMadatory').value == 'True') {
            if (document.getElementById('' + ctrlcom + '_Address1_txtMobile1').value == '') {
                $(".stoast").toastText("warning", "Please Enter Mobile Number", 5, 3);
                //            alert('Please Enter Mobile Number');
                document.getElementById('' + ctrlcom + '_Address1_txtMobile1').focus();
                alert_count = 1;
                return false;
            }
            var x = document.getElementById('' + ctrlcom + '_Address1_txtMobile1').value;
            if (x.length < 10) {
                $(".stoast").toastText("warning", "Mobile number should be 10 digits or more!", 5, 3);
                document.getElementById('' + ctrlcom + '_Address1_txtMobile1').focus();
                alert_count = 1;
                return false;
            }
        }
    }
    var index_new = document.getElementById('' + ctrlcom + '_UCServices_gvServices').rows.length;
    if (arrServiceIds.length > 0) {
        if (arrServiceIds.length == 1) {
            if (arrServiceIds[0] == undefined) {
                $(".stoast").toastText("warning", "Please Select Atleast One Service !", 5, 3);
                document.getElementById('' + ctrlcom + '_UCServices_gv_services_header_ctl03_txtServiceName').focus();
                alert_count = 1;
                return false;

            }


        }

    }
    else {
        $(".stoast").toastText("warning", "Please Select Atleast One Service !", 5, 3);
        document.getElementById('' + ctrlcom + '_UCServices_gv_services_header_ctl03_txtServiceName').focus();
        alert_count = 1;
        return false;
    }
    var SrvShdleCount = '';
    var is_doc_slots_req = document.getElementById('' + ctrlcom + '_hdnIsDoctorSlotsReq').value;
    var slot_req = document.getElementById('' + ctrlcom + '_hdnisapptslotreq').value;
    $("table[id$=UCServices_gvServices] tr:has(td)").each(function (e) {
        SrvShdleCount = '';
        var issrvsch = $(this).closest('tr').find('[id*=hdnisschedulerequired]').val();
        var SrvName = $(this).closest('tr').find("input[type=text][id*=txtServiceName]").val();
        var qty = $(this).closest('tr').find('[id*=txtQty]').val();
        var hdnSaveSrvShdle = $(this).closest('tr').find('[id*=hdnSrvShcedulSave]').val();
        var srv_grp_name = $(this).closest('tr').find('[id*=hdnSrv_Grp_Name]').val();
        var hdn_remarks_mandatory = $(this).closest('tr').find('[id*=hdn_remarks_mandatory]').val();
        var txtremks = $(this).closest('tr').find('[id*=txtremks]').val();
        if (txtremks == null || txtremks == undefined || txtremks == '') { txtremks == ''; }
        if (hdn_remarks_mandatory == null || hdn_remarks_mandatory == undefined || hdn_remarks_mandatory == '') { hdn_remarks_mandatory = 'N'; }

        var docid = $(this).closest('tr').find("input[type=hidden][id*=hdnDoctorID]").val();
        var Doctor_id = $(this).closest('tr').find("input[type=hidden][id*=hdnDoctorID]").val();
        var class_srv_id = $(this).closest('tr').find("input[type=hidden][id*=hdnClass_Srv_ID]").val();
        if (Doctor_id == null || Doctor_id == undefined || Doctor_id == '') { Doctor_id = 0; }
        if (class_srv_id == null || class_srv_id == undefined || class_srv_id == '') { class_srv_id = 0; }

        if (class_srv_id > 0 && Doctor_id > 0 && $(this).closest('tr').find("[id*=chkPstCons]")[0].checked == true && (is_doc_slots_req == 'True' && slot_req == 'True')) {
            if (slot_time == "Select" || slot_time == "" || slot_time == undefined || slot_time == NaN || slot_time == "0") {
                $(".stoast").toastText("warning", "Please Select the Slot for this " + SrvName + "  ", 5, 3);
                SrvShdleCount = '1';
                return false;
            }
        }

        if (qty > 1 && hdnSaveSrvShdle == '' && srv_grp_name != 'FOOD N BEWERAGES') {
            if (issrvsch == 'Y') {
                SrvShdleCount = '1';
                $(this).closest('tr').find('[id*=imgSrvShedul]').focus();
                $(".stoast").toastText("warning", "Please Select Service Schedule For '" + SrvName + "'", 5, 3);
                return false;
            }
        }
        if (hdn_remarks_mandatory == 'Y' && txtremks == '') {
            SrvShdleCount = '1';
            $(this).closest('tr').find('[id*=txtremks]').focus();
            $(".stoast").toastText("warning", "Please enter your remarks! For '" + SrvName + "'", 5, 3);
            return false;
        }
    });
    if (SrvShdleCount == '1')
    { alert_count = 1; return false; }
    PaymentValidations();
    if (_PayCount == 1) {
        alert_count = 1;
        return false;
    }
    var Object = 'ctl00_ContentPlaceHolder1_hdnSaveAlert';
    //return ConfirmationToasterForSave(obj, 'OSP', 'OPD Bill');
    //alert_count = 1;
}
function OSPSaveRoot(type) {


    var rec_type_id = 0;
    if (document.getElementById('ctl00_hdnIsMedClg').value == "TRUE") {
        rec_type_id = $('input[id*=radiousertran]:checked').val()
        if (rec_type_id == 0 || rec_type_id == null || rec_type_id == undefined) { rec_type_id = 1; }
    }
    else { rec_type_id = 1; }
    document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnReference_type_id').value = '15';
    var VIP = document.getElementById('' + ctrlcom + '_rbt_pat_type_1').checked;
    var VVIP = document.getElementById('' + ctrlcom + '_rbt_pat_type_2').checked;
    var routine = document.getElementById('' + ctrlcom + '_rbt_pat_type_0').checked;
    if (VIP == true) { VIP = "V"; } else if (VVIP == true) { VIP = "VV" } else { VIP = "R"; }
    var IS_NEW_BORN = document.getElementById('' + ctrlcom + '_ChkNBorn').checked ? 'Y' : 'N';
    var remarks = document.getElementById('' + ctrlcom + '_source_remarks').value;
    remarks = ReplaceSplCharactor(remarks);
    var ddlRegType = document.getElementById('' + ctrlcom + '_ddlRegType').value;
    var staff_id = document.getElementById('' + ctrlcom + '_UcStaffName__hiddenID').value;
    var staff_relation = document.getElementById('' + ctrlcom + '_StaffRelation').value;
    var UmrNO = '', _reg_id = 0;
    if (document.getElementById('' + ctrlcom + '_chkisold').checked == true) {
        UmrNO = document.getElementById('' + ctrlcom + '_Umrlookup_txtSearchControl').value;
        _reg_id = document.getElementById('' + ctrlcom + '_hdnRegID').value;
        if (_reg_id == undefined || _reg_id == null || _reg_id == '') { _reg_id = "0"; }
    }
    else if (document.getElementById('' + ctrlcom + '_pre_regi').value == '5') {
        UmrNO = document.getElementById('' + ctrlcom + '_txtumrno').value;
    }
    else {
        UmrNO = document.getElementById('' + ctrlcom + '_txtumrno').value;
    }
    var RegNo = document.getElementById('' + ctrlcom + '_txtRegistration').value;
    var RegDt = document.getElementById('' + ctrlcom + '_txtRegDateTime').value;
    var RegValidity = document.getElementById('' + ctrlcom + '_txtregValidity').value;
    var RegFee = document.getElementById('' + ctrlcom + '_txtregfee').value;
    if (RegFee == undefined || RegFee == null || RegFee == '') { RegFee = "0"; }
    var ddlTitle = document.getElementById('' + ctrlcom + '_ddlTitle').value;
    var txtFirstName = document.getElementById('' + ctrlcom + '_txtFirstName').value;
    txtFirstName = ReplaceSplCharactor(txtFirstName);
    var txtMiddleName = document.getElementById('' + ctrlcom + '_txtMiddleName').value;
    txtMiddleName = ReplaceSplCharactor(txtMiddleName);
    var lastName = document.getElementById('' + ctrlcom + '_txtLastName').value;
    lastName = ReplaceSplCharactor(lastName);
    var Aliasname = "";
    Aliasname = ReplaceSplCharactor(Aliasname);
    var ddlDisplayName = document.getElementById('' + ctrlcom + '_txtDisplayname').innerHTML;
    DisplayName = ReplaceSplCharactor(ddlDisplayName);
    var MotherName = document.getElementById('' + ctrlcom + '_txtMotherMName').value;
    MotherName = ReplaceSplCharactor(MotherName);

    var Fathername = document.getElementById('' + ctrlcom + '_txtfathername').value;
    Fathername = ReplaceSplCharactor(Fathername);

    var ddlGender = document.getElementById('' + ctrlcom + '_ddlGender').value;
    var dob = document.getElementById('' + ctrlcom + '_newAgeUc_txtDob').value;
    /*dob = Date.parse(dob).format('dd-MMM-yyyy');*/
    if (dob.length == 11) {
        dob = dob;
    }
    else {
        dob = $.datepicker.parseDate('dd-mm-yy', dob).format('dd-MMM-yyyy');
    }
    var Pat_Year = document.getElementById('' + ctrlcom + '_newAgeUc_txtYear').value;
    var Pat_Month = document.getElementById('' + ctrlcom + '_newAgeUc_txtMonths').value;
    var Pat_Days = document.getElementById('' + ctrlcom + '_newAgeUc_txtDay').value;
    var Pat_HH = document.getElementById('' + ctrlcom + '_newAgeUc_txtHH').value;
    var Pat_MM = document.getElementById('' + ctrlcom + '_newAgeUc_txtMM').value;
    if (Pat_Year == null || Pat_Year == undefined || Pat_Year == '') { Pat_Year = '0'; }
    if (Pat_Month == null || Pat_Month == undefined || Pat_Month == '') { Pat_Month = '0'; }
    if (Pat_Days == null || Pat_Days == undefined || Pat_Days == '') { Pat_Days = '0'; }
    if (Pat_HH == null || Pat_HH == undefined || Pat_HH == '') { Pat_HH = '0'; }
    if (Pat_MM == null || Pat_MM == undefined || Pat_MM == '') { Pat_MM = '0'; }
    var PatientAge = 0;
    if (IS_NEW_BORN == "Y") {
        PatientAge = Pat_Year + "," + Pat_Month + "," + Pat_Days + "," + Pat_HH + "," + Pat_MM;
    }
    else {
        if (Pat_Year == "0" && Pat_Month == "0" && Pat_Days == "0" && Pat_HH == "0" && Pat_MM == "0")
            PatientAge = Pat_Year + "," + Pat_Month + "," + Pat_Days + "," + new Date().getHours() + ',' + new Date().getMinutes()
        else
            PatientAge = Pat_Year + "," + Pat_Month + "," + Pat_Days + "," + Pat_HH + "," + Pat_MM;
    }
    var RespPersonType = document.getElementById('' + ctrlcom + '_ddlResPerson').value;
    var RespPersonName = document.getElementById('' + ctrlcom + '_txtResPerson').value;
    var MarStatus = document.getElementById('' + ctrlcom + '_ddlMaritalStatus').value;
    var BloodGrp_Id = document.getElementById('' + ctrlcom + '_ddlBloodGroup').value;
    var Occupation = document.getElementById('' + ctrlcom + '_ddlOccupation').value;
    var Religion = document.getElementById('' + ctrlcom + '_ddlReligion').value;
    var Ethnicity = document.getElementById('' + ctrlcom + '_ddlEthnicity').value;
    var Nationality = document.getElementById('' + ctrlcom + '_ddlNationality').value;
    var PatType = document.getElementById('' + ctrlcom + '_ddlPatientType').value;
    var Consultant = document.getElementById('' + ctrlcom + '_ucConsultant__hiddenID').value;
    var Questionary = document.getElementById('' + ctrlcom + '_ddlquestionary').value;
    var Email_ID = document.getElementById('' + ctrlcom + '_txtemail').value;

    /* Contact Details */
    var isdcodemobile1 = $('#isdcodemobile1').text();
    var isdcodemobile3 = $('#isdcodemobile3').text();
    if (isdcodemobile1 == undefined || isdcodemobile1 == null || isdcodemobile1 == "NaN--NaN" || isdcodemobile1 == '' || isdcodemobile1 == NaN) {
        isdcodemobile1 = '';
    }

    if (isdcodemobile3 == undefined || isdcodemobile3 == null || isdcodemobile3 == "NaN--NaN" || isdcodemobile3 == '' || isdcodemobile3 == NaN) {
        isdcodemobile3 = '';
    }
    var Mobile1 = document.getElementById('' + ctrlcom + '_Address1_txtMobile1').value;
    var Mobile2 = document.getElementById('' + ctrlcom + '_Address1_txtMobile2').value;

    Mobile1 = isdcodemobile1 + Mobile1;
    Mobile2 = isdcodemobile3 + Mobile2;


    var homePhone = document.getElementById('' + ctrlcom + '_Address1_txtMobile3').value;
    if (homePhone == undefined || homePhone == null || homePhone == '')
    { homePhone = '0'; }



    var ReferalSourceId = document.getElementById('' + ctrlcom + '_ucReferal_ddlreferral').value;
    var ReferalDoctorId = document.getElementById('' + ctrlcom + '_ucReferal__hdnID').value;
    var Method_Id = '';
    var _xmlStr = "<root>";
    var Pat_ID = document.getElementById('' + ctrlcom + '_hdnPatientid').value;
    var EmpDepID = $('#' + ctrlcom + '_hdnEmpDepID').val();
    var _isOspRegistration = 'N';
    if (document.getElementById('' + ctrlcom + '_chkIsRegNotReq').checked) {
        _isOspRegistration = 'Y';
    }
    var _is_mlc = '';
    if (document.getElementById('ctl00_ContentPlaceHolder1_ChkMlcStatus').checked == true) {
        _is_mlc = 'Y';
    }
    else {
        _is_mlc = 'N';
    }
    var _seniorcitizen = '';
    if (document.getElementById('ctl00_ContentPlaceHolder1_chkIsSenior').checked == true) {
        _seniorcitizen = 'Y';
    }
    else {
        _seniorcitizen = 'N';
    }
    if (document.getElementById('' + ctrlcom + '_Address1_hdnIsAssesment').value == 'True') {
        /*EC Details  */
        var Ec_Name = document.getElementById('' + ctrlcom + '_Address1_UcGuarantor_txtEName').value;
        var Ec_Relation = document.getElementById('' + ctrlcom + '_Address1_UcGuarantor_ddlERelation').value;
        var Ec_MblNo = document.getElementById('' + ctrlcom + '_Address1_UcGuarantor_txtmobileno').value;
        var Ec_Address1 = document.getElementById('' + ctrlcom + '_Address1_UcGuarantor_txtAddress1').value;
        Ec_Address1 = Ec_Address1;
        var Ec_Address2 = document.getElementById('' + ctrlcom + '_Address1_UcGuarantor_txtAddress2').value;
        Ec_Address2 = Ec_Address2;
        var Ec_Area = document.getElementById('' + ctrlcom + '_Address1_UcGuarantor_ucArea_txtSearchControl').value;
        var Ec_AreaId = document.getElementById('' + ctrlcom + '_Address1_UcGuarantor_ucArea__hiddenID').value;
        var Ec_City = document.getElementById('' + ctrlcom + '_Address1_UcGuarantor_ucCity').value;
        var Ec_CityId = document.getElementById('' + ctrlcom + '_Address1_UcGuarantor_hdncityid').value;
        var Ec_State = document.getElementById('' + ctrlcom + '_Address1_UcGuarantor_ucState').value;
        var Ec_StateId = document.getElementById('' + ctrlcom + '_Address1_UcGuarantor_hdnstateid').value;
        var Ec_Country = document.getElementById('' + ctrlcom + '_Address1_UcGuarantor_ucCountry').value;
        var Ec_CountryId = document.getElementById('' + ctrlcom + '_Address1_UcGuarantor_hdncountryid').value;
        var Ec_District_id = document.getElementById('' + ctrlcom + '_Address1_UcGuarantor_hdndistrictid').value;
        var Ec_Pin = document.getElementById('' + ctrlcom + '_Address1_UcGuarantor_txtPin').value;
        var Ec_hdnPin = document.getElementById('' + ctrlcom + '_Address1_UcGuarantor_hdnpincode').value;
        var Ec_PhnNo = document.getElementById('' + ctrlcom + '_Address1_UcGuarantor_txtPhone').value;
        if (Ec_Relation == '' || Ec_Relation == undefined || Ec_Relation == null) { Ec_Relation = 0; }
        if (Ec_AreaId == '' || Ec_AreaId == undefined || Ec_AreaId == null) { Ec_AreaId = 0; }
        if (Ec_CityId == '' || Ec_CityId == undefined || Ec_CityId == null) { Ec_CityId = 0; }
        if (Ec_StateId == '' || Ec_StateId == undefined || Ec_StateId == null) { Ec_StateId = 0; }
        if (Ec_CountryId == '' || Ec_CountryId == undefined || Ec_CountryId == null) { Ec_CountryId = 0; }
        if (Ec_District_id == '' || Ec_District_id == undefined || Ec_District_id == null) { Ec_District_id = 0; }

        /*Guarantor Details*/

        var Gc_Name = document.getElementById('' + ctrlcom + '_Address1_UcGuarantor_txtGEName').value;
        var Gc_Relation = document.getElementById('' + ctrlcom + '_Address1_UcGuarantor_ddlGERelation').value;
        var Gc_MblNo = document.getElementById('' + ctrlcom + '_Address1_UcGuarantor_txtGmobileno').value;
        var Gc_Address1 = document.getElementById('' + ctrlcom + '_Address1_UcGuarantor_txtGAddress1').value;
        Gc_Address1 = Gc_Address1;
        var Gc_Address2 = document.getElementById('' + ctrlcom + '_Address1_UcGuarantor_txtGAddress2').value;
        Gc_Address2 = Gc_Address2;
        var Gc_Area = document.getElementById('' + ctrlcom + '_Address1_UcGuarantor_ucGArea_txtSearchControl').value;
        var Gc_AreaId = document.getElementById('' + ctrlcom + '_Address1_UcGuarantor_ucGArea__hiddenID').value;
        var Gc_City = document.getElementById('' + ctrlcom + '_Address1_UcGuarantor_ucGCity').value;
        var Gc_CityId = document.getElementById('' + ctrlcom + '_Address1_UcGuarantor_hdnGcityid').value;
        var Gc_State = document.getElementById('' + ctrlcom + '_Address1_UcGuarantor_ucGState').value;
        var Gc_StateId = document.getElementById('' + ctrlcom + '_Address1_UcGuarantor_hdnGstateid').value;
        var Gc_Country = document.getElementById('' + ctrlcom + '_Address1_UcGuarantor_ucGCountry').value;
        var Gc_CountryId = document.getElementById('' + ctrlcom + '_Address1_UcGuarantor_hdnGcountryid').value;
        var Gc_District_id = document.getElementById('' + ctrlcom + '_Address1_UcGuarantor_hdnGdistId').value;
        var Gc_Pin = document.getElementById('' + ctrlcom + '_Address1_UcGuarantor_txtGPin').value;
        var Gc_hdnPin = document.getElementById('' + ctrlcom + '_Address1_UcGuarantor_hdnGpincode').value;
        var Gc_PhnNo = document.getElementById('' + ctrlcom + '_Address1_UcGuarantor_txtGPhone').value;
        if (Gc_Relation == '' || Gc_Relation == undefined || Gc_Relation == null) { Gc_Relation = 0; }
        if (Gc_AreaId == '' || Gc_AreaId == undefined || Gc_AreaId == null) { Gc_AreaId = 0; }
        if (Gc_CityId == '' || Gc_CityId == undefined || Gc_CityId == null) { Gc_CityId = 0; }
        if (Gc_StateId == '' || Gc_StateId == undefined || Gc_StateId == null) { Gc_StateId = 0; }
        if (Gc_CountryId == '' || Gc_CountryId == undefined || Gc_CountryId == null) { Gc_CountryId = 0; }
        if (Gc_District_id == '' || Gc_District_id == undefined || Gc_District_id == null) { Gc_District_id = 0; }

    }
    var _nearestPs = document.getElementById('ctl00_ContentPlaceHolder1_Address1_txtNearestPS').value
    _nearestPs = ReplaceSplCharactor(_nearestPs);
    var COMM_ID = document.getElementById('ctl00_ContentPlaceHolder1_Address1_chkmodeComm_hf_checkBoxValue').value
    /* OSP Patient Details  */

    _xmlStr += "<PATIENT";
    _xmlStr += " PATIENT_ID=$" + "0" + "$";
    _xmlStr += " UMR_NO=$" + UmrNO + "$";
    _xmlStr += " TITILE_REV_NO=$" + 1 + "$";
    _xmlStr += " GENDER_REV_NO=$" + 1 + "$";
    _xmlStr += " MARITAL_STATUS_REV_NO=$" + 1 + "$";
    _xmlStr += " AGE_UOM_REV_NO=$" + 1 + "$";
    _xmlStr += " PATIENT_TYPE_REV_NO=$" + 1 + "$";
    _xmlStr += " PATIENT_TYPE_REFERENCE_REV_NO=$" + 1 + "$";
    _xmlStr += " PATIENT_CATEGORY_REV_NO=$" + 1 + "$";
    _xmlStr += " OCCUPATION_REV_NO=$" + 1 + "$";
    _xmlStr += " NATIONALITY_REV_NO=$" + 1 + "$";
    _xmlStr += " BLOOD_GROUP_REV_NO=$" + 1 + "$";
    _xmlStr += " RELIGION_REV_NO=$" + 1 + "$";
    _xmlStr += " EDUCATION_REV_NO=$" + 1 + "$";
    _xmlStr += " DIET_TYPE_REV_NO=$" + 1 + "$";
    _xmlStr += " ETHNICITY_ID_REV_NO=$" + 1 + "$";
    _xmlStr += " LANGUAGE_REV_NO=$" + 1 + "$";
    _xmlStr += " RES_PERSON_REL_REV_NO=$" + 1 + "$";
    _xmlStr += " METHOD_OF_COMM_REV_NO=$" + 1 + "$";
    _xmlStr += " DISPLAY_NAME_REV_NO=$" + 1 + "$";
    _xmlStr += " TITILE_ID=$" + ddlTitle + "$";
    _xmlStr += " FIRST_NAME=$" + txtFirstName + "$";
    _xmlStr += " MIDDLE_NAME=$" + txtMiddleName + "$";
    _xmlStr += " LAST_NAME=$" + lastName + "$";
    _xmlStr += " DISPLAY_NAME=$" + DisplayName + "$";
    _xmlStr += " GENDER_ID=$" + ddlGender + "$";
    _xmlStr += " MOTHER_MAIDEN_NAME=$" + MotherName + "$";
    _xmlStr += " FATHER_NAME=$" + Fathername + "$";
    _xmlStr += " DOB=$" + dob + "$";
    _xmlStr += " AGE=$" + PatientAge + "$";
    _xmlStr += " PATIENT_TYPE_ID=$" + PatType + "$";
    _xmlStr += " DISPLAY_NAME_ID=$" + 0 + "$";
    _xmlStr += " MOBILE_NO1=$" + Mobile1 + "$";
    _xmlStr += " MOBILE_NO2=$" + Mobile2 + "$";

    _xmlStr += " BLOOD_GROUP_ID=$" + BloodGrp_Id + "$";
    _xmlStr += " EMAIL_ID=$" + Email_ID + "$";
    _xmlStr += " IS_VIP=$" + VIP + "$";
    _xmlStr += " IS_NEW_BORN=$" + IS_NEW_BORN + "$";
    _xmlStr += " ETHNICITY_ID=$" + Ethnicity + "$";
    _xmlStr += " NATIONALITY_ID=$" + Nationality + "$";
    _xmlStr += " IS_OLD=$" + "" + "$";
    _xmlStr += " RES_PERSON_REL_ID=$" + RespPersonType + "$";
    _xmlStr += " RES_PERSON_NAME=$" + RespPersonName + "$";
    _xmlStr += " MARITAL_STATUS_ID=$" + MarStatus + "$";
    _xmlStr += " OCCUPATION_ID=$" + Occupation + "$";
    _xmlStr += " RELIGION_ID=$" + Religion + "$";
    _xmlStr += " ISSUE_DT=$" + "" + "$";
    _xmlStr += " EXPIRY_DT=$" + "" + "$";

    _xmlStr += " IS_OSP=$" + 'Y' + "$";
    _xmlStr += " VIP_NOTE=$" + "" + "$";
    _xmlStr += " IS_REG_REQUIRED=$" + _isOspRegistration + "$";
    _xmlStr += " IS_MLC=$" + _is_mlc + "$";
    _xmlStr += " IS_SENIOR_CITIZEN=$" + _seniorcitizen + "$";
    _xmlStr += " DISCHRG_STATUS=$" + 'N' + "$";
    _xmlStr += " REC_TYPE_ID=$" + rec_type_id + "$";
    _xmlStr += " SESSION_ID=$" + document.getElementById('' + ctrlcom + '_HDNSESSIONID').value + "$";
    _xmlStr += " NEAREST_PS=$" + _nearestPs + "$";
    _xmlStr += " METHOD_OF_COMM_ID=$" + COMM_ID + "$";

    _xmlStr += "/>";

    _xmlStr += "<FO_REG";
    _xmlStr += " REG_ID=$" + "0" + "$";
    _xmlStr += " UMR_NO=$" + UmrNO + "$";
    _xmlStr += " PATIENT_ID=$" + '0' + "$";
    _xmlStr += " MOBILE_NO1=$" + Mobile1 + "$";
    _xmlStr += " MOBILE_NO2=$" + Mobile2 + "$";
    _xmlStr += " TREATMENT_BY_ID=$" + Consultant + "$";
    _xmlStr += " REFERENCE_TYPE_ID=$" + "1" + "$";
    _xmlStr += " REG_PATIENT_TYPE_ID=$" + PatType + "$";
    _xmlStr += " NATIONALITY_ID=$" + Nationality + "$";
    _xmlStr += " EMAIL_ID=$" + "" + "$";
    _xmlStr += " IS_EXPIRED=$" + "N" + "$";
    _xmlStr += " PATIENT_REV_NO=$" + "1" + "$";
    _xmlStr += " REFERAL_SOURCE_ID=$" + ReferalSourceId + "$";
    _xmlStr += " REFERRED_DOCTOR_ID=$" + ReferalDoctorId + "$";
    _xmlStr += " REFERAL_SOURCE_REV_NO=$" + "1" + "$";
    _xmlStr += " REFERRED_DOCTOR_TYPE_REV_NO=$" + "1" + "$";
    _xmlStr += " REFERRED_DOCTOR_REV_NO=$" + "1" + "$";
    _xmlStr += " PATIENT_CLASS_REV_NO=$" + "1" + "$";
    _xmlStr += " EXPIRY_DT=$" + new Date().format('dd-MMM-yyyy') + "$";
    _xmlStr += " PATIENT_CLASS_ID=$" + 2 + "$";
    _xmlStr += " QUESTIONARY_ID=$" + Questionary + "$";
    _xmlStr += " REG_TYPE_ID=$" + ddlRegType + "$";
    _xmlStr += " REC_TYPE_ID=$" + rec_type_id + "$";
    _xmlStr += " SESSION_ID=$" + document.getElementById('' + ctrlcom + '_HDNSESSIONID').value + "$";
    _xmlStr += "/>";

    /* OSP Referral Details   */

    if (myMultiDatar1 != '') {
        if (myMultiDatar1[0]["Source"] > 0) {
            _xmlStr += "<PAT_REFRL_DTLS";
            _xmlStr += " PAT_RFRL_DTL_ID=$" + "0" + "$";
            _xmlStr += " PAT_RFRL_DTL_REV_NO=$" + "" + "$";
            _xmlStr += " UMR_NO=$" + UmrNO + "$";
            _xmlStr += " ADMN_NO=$" + '' + "$";
            _xmlStr += " REFERENCE_ID=$" + myMultiDatar1[0]["id"] + "$";
            _xmlStr += " REFERENCE_TYPE_ID=$" + 15 + "$";
            _xmlStr += " REFERAL_SOURCE_ID=$" + myMultiDatar1[0]["Source"] + "$";
            if (myMultiDatar1[0]["ReferalClass"] != undefined)
                _xmlStr += " REFERAL_CLASS=$" + myMultiDatar1[0]["ReferalClass"] + "$";
            else
                _xmlStr += " REFERAL_CLASS=$" + '' + "$";
            _xmlStr += " REFERL_ID=$" + myMultiDatar1[0]["id"] + "$";
            _xmlStr += " REFERL_NAME=$" + myMultiDatar1[0]["Name"] + "$";
            var rfl_cat_id = myMultiDatar1[0]["Refrl_class_id"];
            if (myMultiDatar1[0]["Refrl_class_id"] == undefined || myMultiDatar1[0]["Refrl_class_id"] == null || myMultiDatar1[0]["Refrl_class_id"] == '') { rfl_cat_id = 0; }
            var Cat_type_id = myMultiDatar1[0]["Cat_type_id"];
            if (myMultiDatar1[0]["Cat_type_id"] == undefined || myMultiDatar1[0]["Cat_type_id"] == null || myMultiDatar1[0]["Cat_type_id"] == '') { Cat_type_id = 0; }
            _xmlStr += " REFERAL_CAT_ID=$" + rfl_cat_id + "$";
            _xmlStr += " REFERAL_CAT_TYPE_ID=$" + Cat_type_id + "$";
            _xmlStr += " REFERED_TO=$" + myMultiDatar1[0]["RfrlTo_Id"] + "$";
            _xmlStr += " IS_SMS=$" + myMultiDatar1[0]["sms"] + "$";
            _xmlStr += " IS_LETTER=$" + myMultiDatar1[0]["letter"] + "$";
            _xmlStr += " REMARKS=$" + ReplaceSplCharactor(myMultiDatar1[0]["Remarks"]) + "$";
            _xmlStr += " RECORD_STATUS=$" + "A" + "$";
            _xmlStr += " REC_TYPE_ID=$" + rec_type_id + "$";
            _xmlStr += " RECORD_SNO=$" + 1 + "$";
            _xmlStr += " SESSION_ID=$" + document.getElementById('' + ctrlcom + '_HDNSESSIONID').value + "$";
            _xmlStr += "/>";
        }
    }
    if (myMultiDatar2 != '') {
        if (myMultiDatar2[0]["Source"] > 0) {
            _xmlStr += "<PAT_REFRL_DTLS";
            _xmlStr += " PAT_RFRL_DTL_ID=$" + "0" + "$";
            _xmlStr += " PAT_RFRL_DTL_REV_NO=$" + "" + "$";
            _xmlStr += " UMR_NO=$" + UmrNO + "$";
            _xmlStr += " ADMN_NO=$" + '' + "$";
            _xmlStr += " REFERENCE_ID=$" + myMultiDatar2[0]["id"] + "$";
            _xmlStr += " REFERENCE_TYPE_ID=$" + 15 + "$";
            _xmlStr += " REFERAL_SOURCE_ID=$" + myMultiDatar2[0]["Source"] + "$";
            if (myMultiDatar2[0]["ReferalClass"] != undefined)
                _xmlStr += " REFERAL_CLASS=$" + myMultiDatar2[0]["ReferalClass"] + "$";
            else
                _xmlStr += " REFERAL_CLASS=$" + '' + "$";
            _xmlStr += " REFERL_ID=$" + myMultiDatar2[0]["id"] + "$";
            _xmlStr += " REFERL_NAME=$" + myMultiDatar2[0]["Name"] + "$";

            var rfl_cat_id = myMultiDatar2[0]["Refrl_class_id"];
            if (myMultiDatar2[0]["Refrl_class_id"] == undefined || myMultiDatar2[0]["Refrl_class_id"] == null || myMultiDatar2[0]["Refrl_class_id"] == '') { rfl_cat_id = 0; }
            var Cat_type_id = myMultiDatar2[0]["Cat_type_id"];
            if (myMultiDatar2[0]["Cat_type_id"] == undefined || myMultiDatar2[0]["Cat_type_id"] == null || myMultiDatar2[0]["Cat_type_id"] == '') { Cat_type_id = 0; }
            _xmlStr += " REFERAL_CAT_ID=$" + rfl_cat_id + "$";
            _xmlStr += " REFERAL_CAT_TYPE_ID=$" + Cat_type_id + "$";
            _xmlStr += " REFERED_TO=$" + myMultiDatar2[0]["RfrlTo_Id"] + "$";
            _xmlStr += " IS_SMS=$" + myMultiDatar2[0]["sms"] + "$";
            _xmlStr += " IS_LETTER=$" + myMultiDatar2[0]["letter"] + "$";
            _xmlStr += " REMARKS=$" + ReplaceSplCharactor(myMultiDatar2[0]["Remarks"]) + "$";
            _xmlStr += " RECORD_STATUS=$" + "A" + "$";
            _xmlStr += " REC_TYPE_ID=$" + rec_type_id + "$";
            _xmlStr += " RECORD_SNO=$" + 2 + "$";
            _xmlStr += " SESSION_ID=$" + document.getElementById('' + ctrlcom + '_HDNSESSIONID').value + "$";
            _xmlStr += "/>";
        }
    }
    if (myMultiDatar3 != '') {
        if (myMultiDatar3[0]["Source"] > 0) {
            _xmlStr += "<PAT_REFRL_DTLS";
            _xmlStr += " PAT_RFRL_DTL_ID=$" + "0" + "$";
            _xmlStr += " PAT_RFRL_DTL_REV_NO=$" + "" + "$";
            _xmlStr += " UMR_NO=$" + UmrNO + "$";
            _xmlStr += " ADMN_NO=$" + '' + "$";
            _xmlStr += " REFERENCE_ID=$" + myMultiDatar3[0]["id"] + "$";
            _xmlStr += " REFERENCE_TYPE_ID=$" + 15 + "$";
            _xmlStr += " REFERAL_SOURCE_ID=$" + myMultiDatar3[0]["Source"] + "$";
            if (myMultiDatar3[0]["ReferalClass"] != undefined)
                _xmlStr += " REFERAL_CLASS=$" + myMultiDatar3[0]["ReferalClass"] + "$";
            else
                _xmlStr += " REFERAL_CLASS=$" + '' + "$";
            _xmlStr += " REFERL_ID=$" + myMultiDatar3[0]["id"] + "$";
            _xmlStr += " REFERL_NAME=$" + myMultiDatar3[0]["Name"] + "$";

            var rfl_cat_id = myMultiDatar3[0]["Refrl_class_id"];
            if (myMultiDatar3[0]["Refrl_class_id"] == undefined || myMultiDatar3[0]["Refrl_class_id"] == null || myMultiDatar3[0]["Refrl_class_id"] == '') { rfl_cat_id = 0; }
            var Cat_type_id = myMultiDatar3[0]["Cat_type_id"];
            if (myMultiDatar3[0]["Cat_type_id"] == undefined || myMultiDatar3[0]["Cat_type_id"] == null || myMultiDatar3[0]["Cat_type_id"] == '') { Cat_type_id = 0; }
            _xmlStr += " REFERAL_CAT_ID=$" + rfl_cat_id + "$";
            _xmlStr += " REFERAL_CAT_TYPE_ID=$" + Cat_type_id + "$";
            _xmlStr += " REFERED_TO=$" + myMultiDatar3[0]["RfrlTo_Id"] + "$";
            _xmlStr += " IS_SMS=$" + myMultiDatar3[0]["sms"] + "$";
            _xmlStr += " IS_LETTER=$" + myMultiDatar3[0]["letter"] + "$";
            _xmlStr += " REMARKS=$" + ReplaceSplCharactor(myMultiDatar3[0]["Remarks"]) + "$";
            _xmlStr += " RECORD_STATUS=$" + "A" + "$";
            _xmlStr += " REC_TYPE_ID=$" + rec_type_id + "$";
            _xmlStr += " RECORD_SNO=$" + 3 + "$";
            _xmlStr += " SESSION_ID=$" + document.getElementById('' + ctrlcom + '_HDNSESSIONID').value + "$";
            _xmlStr += "/>";
        }
    }
    if (myMultiDatar4 != '') {
        if (myMultiDatar4[0]["Source"] > 0) {
            _xmlStr += "<PAT_REFRL_DTLS";
            _xmlStr += " PAT_RFRL_DTL_ID=$" + "0" + "$";
            _xmlStr += " PAT_RFRL_DTL_REV_NO=$" + "" + "$";
            _xmlStr += " UMR_NO=$" + UmrNO + "$";
            _xmlStr += " ADMN_NO=$" + '' + "$";
            _xmlStr += " REFERENCE_ID=$" + myMultiDatar4[0]["id"] + "$";
            _xmlStr += " REFERENCE_TYPE_ID=$" + 15 + "$";
            _xmlStr += " REFERAL_SOURCE_ID=$" + myMultiDatar4[0]["Source"] + "$";
            if (myMultiDatar4[0]["ReferalClass"] != undefined)
                _xmlStr += " REFERAL_CLASS=$" + myMultiDatar4[0]["ReferalClass"] + "$";
            else
                _xmlStr += " REFERAL_CLASS=$" + '' + "$";
            _xmlStr += " REFERL_ID=$" + myMultiDatar4[0]["id"] + "$";
            _xmlStr += " REFERL_NAME=$" + myMultiDatar4[0]["Name"] + "$";
            var rfl_cat_id = myMultiDatar4[0]["Refrl_class_id"];
            if (myMultiDatar4[0]["Refrl_class_id"] == undefined || myMultiDatar4[0]["Refrl_class_id"] == null || myMultiDatar4[0]["Refrl_class_id"] == '') { rfl_cat_id = 0; }
            var Cat_type_id = myMultiDatar4[0]["Cat_type_id"];
            if (myMultiDatar4[0]["Cat_type_id"] == undefined || myMultiDatar4[0]["Cat_type_id"] == null || myMultiDatar4[0]["Cat_type_id"] == '') { Cat_type_id = 0; }
            _xmlStr += " REFERAL_CAT_ID=$" + rfl_cat_id + "$";
            _xmlStr += " REFERAL_CAT_TYPE_ID=$" + Cat_type_id + "$";
            _xmlStr += " REFERED_TO=$" + myMultiDatar4[0]["RfrlTo_Id"] + "$";
            _xmlStr += " IS_SMS=$" + myMultiDatar4[0]["sms"] + "$";
            _xmlStr += " IS_LETTER=$" + myMultiDatar4[0]["letter"] + "$";
            _xmlStr += " REMARKS=$" + ReplaceSplCharactor(myMultiDatar4[0]["Remarks"]) + "$";
            _xmlStr += " RECORD_STATUS=$" + "A" + "$";
            _xmlStr += " REC_TYPE_ID=$" + rec_type_id + "$";
            _xmlStr += " RECORD_SNO=$" + 4 + "$";
            _xmlStr += " SESSION_ID=$" + document.getElementById('' + ctrlcom + '_HDNSESSIONID').value + "$";
            _xmlStr += "/>";
        }
    }

    /* OSP Address Details   */

    if (myMultiAddress1[0]["Area"] != '' || myMultiAddress1[0]["area_name"] != '') {
        _xmlStr += "<MA.ADDRESS";
        _xmlStr += " ADDRESS_ID=$" + 0 + "$";
        _xmlStr += " ADDRESS1=$" + myMultiAddress1[0]["Address1"] + "$";
        _xmlStr += " ADDRESS2=$" + myMultiAddress1[0]["Address2"] + "$";
        _xmlStr += " AREA_ID=$" + myMultiAddress1[0]["Area"] + "$";

        //        if (document.getElementById('ctl00_ContentPlaceHolder1_hdnClientName').value.toLowerCase() == 'ssbgmc') {
        //            _xmlStr += " ADDR_TYPE_ID=$" + 13+ "$";
        //        } else {

        _xmlStr += " ADDR_TYPE_ID=$" + 12 + "$";
        //   }
        _xmlStr += " CITY_ID=$" + myMultiAddress1[0]["City"] + "$";
        _xmlStr += " DISTRICT=$" + myMultiAddress1[0]["District"] + "$";
        _xmlStr += " STATE_ID=$" + myMultiAddress1[0]["State"] + "$";
        _xmlStr += " COUNTRY_ID=$" + myMultiAddress1[0]["Country"] + "$";
        _xmlStr += " ZIPCODE=$" + myMultiAddress1[0]["PinZip"] + "$";
        _xmlStr += " REFERENCE_TYPE_ID=$" + 1 + "$";
        _xmlStr += " REFERENCE_ID=$" + 0 + "$";
        _xmlStr += " AREA_REV_NO=$" + 1 + "$";
        _xmlStr += " CITY_REV_NO=$" + 1 + "$";
        _xmlStr += " STATE_REV_NO=$" + 1 + "$";
        _xmlStr += " COUNTRY_REV_NO=$" + 1 + "$";
        _xmlStr += " ADDRESS_REV_NO=$" + 1 + "$";
        _xmlStr += " REFERENCE_TYPE_REV_NO=$" + 1 + "$";
        _xmlStr += " REFERENCE_REV_NO=$" + 1 + "$";
        /*_xmlStr += " MOBILE_PHONE=$" + Mobile1 + "$";
        _xmlStr += " HOME_PHONE=$" + Mobile2+ "$";*/
        _xmlStr += " MOBILE_PHONE=$" + myMultiAddress1[0]["Mobile_No1"] + "$";
        _xmlStr += " HOME_PHONE=$" + myMultiAddress1[0]["Mobile_No2"] + "$";
        _xmlStr += " OFFICE_PHONE=$" + myMultiAddress1[0]["Mobile_No3"] + "$";
        _xmlStr += " ADDR_GRP_ID=$" + 2 + "$";
        _xmlStr += " EMAIL_ID=$" + Email_ID + "$";
        _xmlStr += " REC_TYPE_ID=$" + rec_type_id + "$";
        _xmlStr += " SESSION_ID=$" + document.getElementById('' + ctrlcom + '_HDNSESSIONID').value + "$";
        _xmlStr += "/>";
    }
    if (myMultiAddress2 != '') {
        if (myMultiAddress2[0]["Area"] != '' || myMultiAddress2[0]["area_name"] != '') {
            _xmlStr += "<MA.ADDRESS";
            _xmlStr += " ADDRESS_ID=$" + 0 + "$";
            _xmlStr += " ADDRESS1=$" + myMultiAddress2[0]["Address1"] + "$";
            _xmlStr += " ADDRESS2=$" + myMultiAddress2[0]["Address2"] + "$";
            _xmlStr += " AREA_ID=$" + myMultiAddress2[0]["Area"] + "$";
            _xmlStr += " CITY_ID=$" + myMultiAddress2[0]["City"] + "$";
            _xmlStr += " DISTRICT=$" + myMultiAddress2[0]["District"] + "$";
            _xmlStr += " STATE_ID=$" + myMultiAddress2[0]["State"] + "$";
            _xmlStr += " COUNTRY_ID=$" + myMultiAddress2[0]["Country"] + "$";
            _xmlStr += " ZIPCODE=$" + myMultiAddress2[0]["PinZip"] + "$";
            _xmlStr += " REFERENCE_TYPE_ID=$" + 1 + "$";
            //            if (document.getElementById('ctl00_ContentPlaceHolder1_hdnClientName').value.toLowerCase() == 'ssbgmc') { _xmlStr += " ADDR_TYPE_ID=$" + 12 + "$"; } else {
            _xmlStr += " ADDR_TYPE_ID=$" + 13 + "$";
            // }
            _xmlStr += " REFERENCE_ID=$" + 0 + "$";
            _xmlStr += " AREA_REV_NO=$" + 1 + "$";
            _xmlStr += " CITY_REV_NO=$" + 1 + "$";
            _xmlStr += " STATE_REV_NO=$" + 1 + "$";
            _xmlStr += " COUNTRY_REV_NO=$" + 1 + "$";
            /*_xmlStr += " MOBILE_PHONE=$" + Mobile1 + "$";
            _xmlStr += " HOME_PHONE=$" + Mobile2 + "$";*/
            _xmlStr += " MOBILE_PHONE=$" + myMultiAddress2[0]["Mobile_No1"] + "$";
            _xmlStr += " HOME_PHONE=$" + myMultiAddress3[0]["Mobile_No2"] + "$";
            _xmlStr += " OFFICE_PHONE=$" + myMultiAddress3[0]["Mobile_No3"] + "$";

            _xmlStr += " ADDRESS_REV_NO=$" + 1 + "$";
            _xmlStr += " REFERENCE_TYPE_REV_NO=$" + 1 + "$";
            _xmlStr += " REFERENCE_REV_NO=$" + 1 + "$";
            _xmlStr += " ADDR_GRP_ID=$" + 2 + "$";
            _xmlStr += " REC_TYPE_ID=$" + rec_type_id + "$";
            _xmlStr += " SESSION_ID=$" + document.getElementById('' + ctrlcom + '_HDNSESSIONID').value + "$";
            _xmlStr += "/>";
        }
    }
    if (myMultiAddress3 != '') {
        if (myMultiAddress3[0]["Area"] != '' || myMultiAddress3[0]["area_name"] != '') {
            _xmlStr += "<MA.ADDRESS";
            _xmlStr += " ADDRESS_ID=$" + 0 + "$";
            _xmlStr += " ADDRESS1=$" + myMultiAddress3[0]["Address1"] + "$";
            _xmlStr += " ADDRESS2=$" + myMultiAddress3[0]["Address2"] + "$";
            _xmlStr += " AREA_ID=$" + myMultiAddress3[0]["Area"] + "$";
            _xmlStr += " CITY_ID=$" + myMultiAddress3[0]["City"] + "$";
            _xmlStr += " DISTRICT=$" + myMultiAddress3[0]["District"] + "$";
            _xmlStr += " STATE_ID=$" + myMultiAddress3[0]["State"] + "$";
            _xmlStr += " COUNTRY_ID=$" + myMultiAddress3[0]["Country"] + "$";
            _xmlStr += " ZIPCODE=$" + myMultiAddress3[0]["PinZip"] + "$";
            _xmlStr += " REFERENCE_TYPE_ID=$" + 1 + "$";
            _xmlStr += " REFERENCE_ID=$" + 0 + "$";
            _xmlStr += " ADDR_TYPE_ID=$" + document.getElementById('' + ctrlcom + '_Address1_ddrelationaddr').value + "$";
            _xmlStr += " AREA_REV_NO=$" + 1 + "$";
            _xmlStr += " CITY_REV_NO=$" + 1 + "$";
            _xmlStr += " STATE_REV_NO=$" + 1 + "$";
            _xmlStr += " COUNTRY_REV_NO=$" + 1 + "$";
            _xmlStr += " ADDRESS_REV_NO=$" + 1 + "$";
            /*_xmlStr += " MOBILE_PHONE=$" + Mobile1 + "$";
            _xmlStr += " HOME_PHONE=$" + Mobile2 + "$";*/
            _xmlStr += " MOBILE_PHONE=$" + myMultiAddress3[0]["Mobile_No1"] + "$";
            _xmlStr += " HOME_PHONE=$" + myMultiAddress3[0]["Mobile_No2"] + "$";
            _xmlStr += " OFFICE_PHONE=$" + myMultiAddress3[0]["Mobile_No3"] + "$";
            _xmlStr += " REFERENCE_TYPE_REV_NO=$" + 1 + "$";
            _xmlStr += " REFERENCE_REV_NO=$" + 1 + "$";
            _xmlStr += " ADDR_GRP_ID=$" + 2 + "$";
            _xmlStr += " REC_TYPE_ID=$" + rec_type_id + "$";
            _xmlStr += " SESSION_ID=$" + document.getElementById('' + ctrlcom + '_HDNSESSIONID').value + "$";
            _xmlStr += "/>";
        }

        if (document.getElementById('' + ctrlcom + '_Address1_hdnIsAssesment').value == 'True') {
            if (Ec_AreaId != '') {
                _xmlStr += "<FO_REG_EC"
                _xmlStr += " REG_EC_ID=$" + "0" + "$";
                _xmlStr += " FULL_NAME=$" + Ec_Name + "$";
                _xmlStr += " RELATION_ID=$" + Ec_Relation + "$";
                _xmlStr += " MOBILE_NO=$" + Ec_MblNo + "$";
                _xmlStr += "/>"
            }
            if (Gc_AreaId != '') {
                _xmlStr += "<FO_REG_GRNTR"
                _xmlStr += " REG_GRNTR_ID=$" + "0" + "$";
                _xmlStr += " FULL_NAME=$" + Gc_Name + "$";
                _xmlStr += " RELATION_ID=$" + Gc_Relation + "$";
                _xmlStr += " MOBILE_NO=$" + Gc_MblNo + "$";
                _xmlStr += "/>"
            }
            if (Ec_AreaId != '') {
                _xmlStr += "<MA.ADDRESS_REG_EC";
                _xmlStr += " ADDRESS_ID=$" + 0 + "$";
                _xmlStr += " ADDRESS1=$" + Ec_Address1 + "$";
                _xmlStr += " ADDRESS2=$" + Ec_Address2 + "$";
                _xmlStr += " AREA_ID=$" + Ec_AreaId + "$";
                _xmlStr += " ADDR_TYPE_ID=$" + 12 + "$";
                _xmlStr += " CITY_ID=$" + Ec_CityId + "$";
                _xmlStr += " STATE_ID=$" + Ec_StateId + "$";
                _xmlStr += " COUNTRY_ID=$" + Ec_CountryId + "$";
                _xmlStr += " ZIPCODE=$" + Ec_Pin + "$";
                _xmlStr += " MOBILE_PHONE=$" + Ec_MblNo + "$";
                _xmlStr += " HOME_PHONE=$" + Ec_PhnNo + "$";
                _xmlStr += " OFFICE_PHONE=$" + '' + "$";
                _xmlStr += " EMAIL_ID=$" + '' + "$";
                _xmlStr += " REFERENCE_TYPE_ID=$" + 1 + "$";
                _xmlStr += " AREA_REV_NO=$" + 1 + "$";
                _xmlStr += " CITY_REV_NO=$" + 1 + "$";
                _xmlStr += " STATE_REV_NO=$" + 1 + "$";
                _xmlStr += " COUNTRY_REV_NO=$" + 1 + "$";
                _xmlStr += " ADDRESS_REV_NO=$" + 1 + "$";
                _xmlStr += " REFERENCE_TYPE_REV_NO=$" + 1 + "$";
                _xmlStr += " REFERENCE_REV_NO=$" + 1 + "$";
                _xmlStr += " ADDR_GRP_ID=$" + 2 + "$";
                _xmlStr += "/>";
            }
            if (Gc_AreaId != '') {
                _xmlStr += "<MA.ADDRESS_REG_GRNTR";
                _xmlStr += " ADDRESS_ID=$" + 0 + "$";
                _xmlStr += " ADDRESS1=$" + Gc_Address1 + "$";
                _xmlStr += " ADDRESS2=$" + Gc_Address2 + "$";
                _xmlStr += " AREA_ID=$" + Gc_AreaId + "$";
                _xmlStr += " ADDR_TYPE_ID=$" + 12 + "$";
                _xmlStr += " CITY_ID=$" + Gc_CityId + "$";
                _xmlStr += " STATE_ID=$" + Gc_StateId + "$";
                _xmlStr += " COUNTRY_ID=$" + Gc_CountryId + "$";
                _xmlStr += " ZIPCODE=$" + Gc_Pin + "$";
                _xmlStr += " MOBILE_PHONE=$" + Gc_MblNo + "$";
                _xmlStr += " HOME_PHONE=$" + Gc_PhnNo + "$";
                _xmlStr += " OFFICE_PHONE=$" + '' + "$";
                _xmlStr += " EMAIL_ID=$" + '' + "$";
                _xmlStr += " REFERENCE_TYPE_ID=$" + 1 + "$";
                _xmlStr += " AREA_REV_NO=$" + 1 + "$";
                _xmlStr += " CITY_REV_NO=$" + 1 + "$";
                _xmlStr += " STATE_REV_NO=$" + 1 + "$";
                _xmlStr += " COUNTRY_REV_NO=$" + 1 + "$";
                _xmlStr += " ADDRESS_REV_NO=$" + 1 + "$";
                _xmlStr += " REFERENCE_TYPE_REV_NO=$" + 1 + "$";
                _xmlStr += " REFERENCE_REV_NO=$" + 1 + "$";
                _xmlStr += " ADDR_GRP_ID=$" + 2 + "$";
                _xmlStr += "/>";

            }
        }

    }
    var rfltrid = document.getElementById('' + ctrlcom + '_uccorporate_ucRefLetterNo__hiddenID').value;
    if (rfltrid == '' || rfltrid == null || rfltrid == undefined) { rfltrid = '0'; }
    /*Commented by Swetha Reddy*/
    /*if (document.getElementById('' + ctrlcom + '_chkIsRegNotReq').checked) {
    _xmlStr += "<FO_BILL";
    _xmlStr += " BILL_ID=$" + "0" + "$";
    _xmlStr += " BILL_DT=$" + "" + "$";
    _xmlStr += " UMR_NO=$" + UmrNO + "$";
    _xmlStr += " ADMN_NO=$" + 0 + "$";
    if (myMultiDatar1 != '') {
    _xmlStr += " REFERAL_SOURCE_ID=$" + myMultiDatar1[0]["Source"] + "$";
    _xmlStr += " REFERAL_DOCTOR_ID=$" + myMultiDatar1[0]["id"] + "$";
    _xmlStr += " REFERAL_NAME=$" + myMultiDatar1[0]["Name"] + "$";
    }
    else {
    _xmlStr += " REFERAL_SOURCE_ID=$" + "0" + "$";
    _xmlStr += " REFERAL_DOCTOR_ID=$" + "0" + "$";
    _xmlStr += " REFERAL_NAME=$" + '' + "$";
    }
    _xmlStr += " REFERAL_TYPE_ID=$" + 0 + "$";
    _xmlStr += " REFERAL_REF_ID=$" + 0 + "$";
    _xmlStr += " DOCTOR_ID=$" + Consultant + "$";
    _xmlStr += " EMPLOYEE_ID=$" + 0 + "$";
    _xmlStr += " CREDIT_TYPE_ID=$" + 0 + "$";
    _xmlStr += " CONCESSION_ON_ID=$" + 0 + "$";
    _xmlStr += " CONCESSION_MODE_ID=$" + 1 + "$";
    _xmlStr += " CONCESSION_TYPE_ID=$" + 0 + "$";
    _xmlStr += " CONCESSION_TO_ID=$" + 0 + "$";
    _xmlStr += " CONCESSION=$" + 0 + "$";
    _xmlStr += " BILLCONCESSION_AUTH_ID=$" + 0 + "$";
    //        if (DueAuth_Id > 0)
    //        { _xmlStr += " DUE_AUTH_ID=$" + 0 + "$"; }
    //        else {
    _xmlStr += " DUE_AUTH_ID=$" + 0 + "$";
    //        }
    _xmlStr += " COMPANY_DUE=$" + 0 + "$";
    _xmlStr += " COMPANY_DUE_AUTH_ID=$" + 0 + "$";
    _xmlStr += " COMPANY_CONCESSION_AMOUNT=$" + 0 + "$";
    _xmlStr += " COMPANY_AMOUNT=$" + 0 + "$";
    _xmlStr += " DUE_VERIFY_ID=$" + 0 + "$";
    _xmlStr += " DUE_VERIFY_DT=$" + '' + "$";
    _xmlStr += " DUE_APPROVE_ID=$" + 0 + "$";
    _xmlStr += " DUE_APPROVE_DT=$" + '' + "$";
    _xmlStr += " DUE_AUTH_DT=$" + '' + "$";
    _xmlStr += " CONCESSION_VERIFY_ID=$" + 0 + "$";
    _xmlStr += " CONCESSION_VERIFY_DT=$" + '' + "$";
    _xmlStr += " CONCESSION_APPROVE_ID=$" + 0 + "$";
    _xmlStr += " CONCESSION_APPROVE_DT=$" + '' + "$";
    _xmlStr += " CONCESSION_AUTH_ID=$" + 0 + "$";
    _xmlStr += " CONCESSION_AUTH_DT=$" + '' + "$";
    _xmlStr += " PRINT_COUNT=$" + 0 + "$";
    _xmlStr += " BILL_AMOUNT=$" + RegFee + "$";
    _xmlStr += " CONCESSION_AMOUNT=$" + 0 + "$";
    _xmlStr += " NET_AMOUNT=$" + RegFee + "$";
    _xmlStr += " PAID_AMOUNT=$" + 0 + "$";
    _xmlStr += " ADVANCE_AMOUNT=$" + 0 + "$";
    _xmlStr += " DUE_AMOUNT=$" + RegFee + "$";
    _xmlStr += " DUE_RECOVERED=$" + 0 + "$";
    _xmlStr += " OUTSTANDING_DUE=$" + RegFee + "$";
    _xmlStr += " POST_DISCOUNT=$" + 0 + "$";
    _xmlStr += " TOTAL_DISCOUNT=$" + "0" + "$";
    _xmlStr += " CANCEL_AMOUNT=$" + 0 + "$";
    _xmlStr += " REFUND_AMOUNT=$" + 0 + "$";
    _xmlStr += " EXCESS_AMOUNT=$" + 0 + "$";
    _xmlStr += " CA_BILL_AMT=$" + 0 + "$";
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
    _xmlStr += " EXC_PHA_AMT=$" + 0 + "$";
    _xmlStr += " GROSS_PHA_AMT=$" + 0 + "$";
    _xmlStr += " INC_PHA_AMT=$" + 0 + "$";
    _xmlStr += " IS_DSCHRG_WITHOUT_BILL=$" + 0 + "$";
    _xmlStr += " PAT_CNCSN_AMT=$" + 0 + "$";
    _xmlStr += " PAT_CNCSN_PCT=$" + 0 + "$";
    _xmlStr += " PAT_DUE_AMT=$" + 0 + "$";
    _xmlStr += " PAT_GROSS_AMT=$" + 0 + "$";
    _xmlStr += " PAT_NET_AMT=$" + 0 + "$";
    _xmlStr += " PAT_PAID_AMT=$" + 0 + "$";
    _xmlStr += " PAT_TAX_AMT=$" + 0 + "$";
    _xmlStr += " PAT_TAX_PCT=$" + 0 + "$";
    _xmlStr += " PERFORMED_PROCS=$" + 0 + "$";
    _xmlStr += " PKG_BILL_AMT=$" + 0 + "$";
    _xmlStr += " PKG_CNCSN_AMT=$" + 0 + "$";
    _xmlStr += " PKG_DUE_AMT=$" + 0 + "$";
    _xmlStr += " PKG_EXC_AMT=$" + 0 + "$";
    _xmlStr += " PKG_GROSS_AMT=$" + 0 + "$";
    _xmlStr += " PKG_INC_AMT=$" + 0 + "$";
    _xmlStr += " PKG_NET_AMT=$" + 0 + "$";
    _xmlStr += " PKG_PAID_AMT=$" + 0 + "$";
    _xmlStr += " PKG_POSTDSC_AMT=$" + 0 + "$";
    _xmlStr += " REMARKS=$" + 0 + "$";
    _xmlStr += " IS_SHINK=$" + 0 + "$";
    _xmlStr += " PKG_TOTAL_RECEIVED_AMT=$" + 0 + "$";
    _xmlStr += " REF_ID=$" + 0 + "$";
    _xmlStr += " ACC_CMP_ID=$" + 0 + "$";
    _xmlStr += " ACC_CMP_AMT=$" + 0 + "$";
    _xmlStr += " ACC_CMP_PCT=$" + 0 + "$";
    _xmlStr += " ACC_CMP_LVL_ID=$" + 0 + "$";
    _xmlStr += " IS_REFERAL=$" + 0 + "$";
    _xmlStr += " PKG_EXCESS_AMT=$" + 0 + "$";
    _xmlStr += " APPROVE_BY=$" + 0 + "$";
    _xmlStr += " APPROVE_DT=$" + '' + "$";
    _xmlStr += " PCKG_CONV_ID=$" + 0 + "$";
    _xmlStr += " PAT_EXCESS_AMT=$" + 0 + "$";
    _xmlStr += " CMPNY_REFERAL_LETTER_ID=$" + rfltrid + "$";
    _xmlStr += " PREREFUND=$" + 0 + "$";
    _xmlStr += " CORP_ADMN_DT=$" + '' + "$";
    _xmlStr += " CORP_DISCHR_DT=$" + '' + "$";
    _xmlStr += " PATIENT_CLASS_ID=$" + 0 + "$";
    _xmlStr += " OLD_BILL_TYPE_ID=$" + 0 + "$";
    _xmlStr += " PATIENT_TYPE_ID=$" + 0 + "$";
    _xmlStr += " PKG_RFND_AMT=$" + 0 + "$";
    _xmlStr += " PACKAGE_STATUS=$" + 0 + "$";
    _xmlStr += " CMP_OUTSTANDING_DUE=$" + 0 + "$";
    _xmlStr += " CMP_DUE_RECOVERED=$" + 0 + "$";
    _xmlStr += " DISALLOWANCE_AMT=$" + 0 + "$";
    _xmlStr += " TDS_AMT=$" + 0 + "$";
    _xmlStr += " IS_CORP_APPBILL=$" + 0 + "$";
    _xmlStr += " SAMPLE_COLLETED_DATE=$" + "" + "$";
    _xmlStr += " CLINLICAL_SUMMARY=$" + 0 + "$";
    _xmlStr += " DISC_REQ_REASON=$" + 0 + "$";
    _xmlStr += " PKG_EF_FRM_TODT=$" + '' + "$";
    _xmlStr += " PKG_DUE_RECOVERED=$" + 0 + "$";
    _xmlStr += " CLINLICAL_SUMMARY_FILE=$" + 0 + "$";
    _xmlStr += " REFERAL_CUSTMER=$" + 0 + "$";
    _xmlStr += " EMP_NARATION=$" + 0 + "$";
    _xmlStr += " CNCSN_NARATION=$" + 0 + "$";
    _xmlStr += " IS_POST_CONSULT=$" + 0 + "$";
    _xmlStr += " BILL_NO=$" + 0 + "$";
    _xmlStr += " REFERAL_CUSTOMER_ID=$" + 0 + "$";
    _xmlStr += " CENTER_ID=$" + 0 + "$";
    var Token_no = $('[id*=ddlToken]').find('option:selected').text();
    if (Token_no == undefined || Token_no == null) { Token_no = ''; }
    _xmlStr += " TOKEN_NO=$" + Token_no + "$";
    _xmlStr += " REG_CONS_BILL_ID=$" + 0 + "$";
    _xmlStr += " REG_ID=$" + _reg_id + "$";
    _xmlStr += " RECORD_STATUS=$" + 'A' + "$";
    _xmlStr += " CMP_ID=$" + 0 + "$";
    _xmlStr += " BILL_TYPE_ID=$" + 0 + "$";
    _xmlStr += " BILL_TYPE_REV_NO=$" + '1' + "$";
    _xmlStr += " REFERAL_SOURCE_REV_NO=$" + 1 + "$";
    _xmlStr += " REFERAL_TYPE_REV_NO=$" + 1 + "$";
    _xmlStr += " REFERAL_DOCTOR_REV_NO=$" + "1" + "$";
    _xmlStr += " REFERAL_REF_REV_NO=$" + "1" + "$";
    _xmlStr += " DOCTOR_REV_NO=$" + 1 + "$";
    _xmlStr += " EMPLOYEE_REV_NO=$" + 1 + "$";
    _xmlStr += " CREDIT_TYPE_REV_NO=$" + 1 + "$";
    _xmlStr += " CONCESSION_ON_REV_NO=$" + 1 + "$";
    _xmlStr += " CONCESSION_MODE_REV_NO=$" + "1" + "$";
    _xmlStr += " CONCESSION_TYPE_REV_NO=$" + "1" + "$";
    _xmlStr += " CONCESSION_AUTH_REV_NO=$" + "1" + "$";
    _xmlStr += " DUE_AUTH_REV_NO=$" + "1" + "$";
    _xmlStr += " ACC_CMP_REV_NO=$" + 1 + "$";
    _xmlStr += " ACC_CMP_LVL_REV_NO=$" + 1 + "$";
    _xmlStr += " GRP_REV_NO=$" + 1 + "$";
    _xmlStr += " ORG_REV_NO=$" + "1" + "$";
    _xmlStr += " BILL_TYPE=$" + "REG" + "$";
    _xmlStr += " REPORT_DISPATCH_ID=$" + 0 + "$";
    _xmlStr += " TPA_ID=$" + 0 + "$";
    _xmlStr += " IS_REG_NOT_REQ=$" + "Y" + "$";
    _xmlStr += " SESSION_ID=$" + 1 + "$";
    _xmlStr += "/>";

    _xmlStr += "<FO_BILL_SRV";
    _xmlStr += " BILL_SRV_ID=$" + 0 + "$";
    _xmlStr += " UMR_NO=$" + UmrNO + "$";
    _xmlStr += " SERVICE_TYPE_ID=$" + 5 + "$";
    _xmlStr += " SERVICE_GROUP_ID=$" + 0 + "$";
    _xmlStr += " SERVICE_ID=$" + 1 + "$";
    _xmlStr += " SERVICE_CLASS_ID=$" + 0 + "$";
    _xmlStr += " CLASS_SERVICE_ID=$" + 0 + "$";
    _xmlStr += " QUANTITY=$" + 1 + "$";
    _xmlStr += " RATE=$" + RegFee + "$";
    _xmlStr += " AMOUNT=$" + RegFee + "$";
    _xmlStr += " CONCESSION=$" + 0 + "$";
    _xmlStr += " CONCESSION_AMOUNT=$" + 0 + "$";
    _xmlStr += " NET_AMOUNT=$" + RegFee + "$";
    _xmlStr += " DOCTOR_PRICE=$" + 0 + "$";
    _xmlStr += " ORG_PRICE=$" + 0 + "$";
    _xmlStr += " RECORD_SNO=$" + 1 + "$";
    _xmlStr += " SERVICE_PRICE_ID=$" + 0 + "$";
    _xmlStr += " TO_LOC_ID=$" + 1 + "$";
    _xmlStr += " EDIT_SERVICE_NAME=$" + '' + "$";
    _xmlStr += " EDIT_SERVICE_CD=$" + '' + "$";
    _xmlStr += " IS_FOREIGN_SERVICE=$" + "N" + "$";
    _xmlStr += " SERVICE_STATUS=$" + "B" + "$";
    _xmlStr += " IS_EMERGENCY=$" + 'N' + "$";
    _xmlStr += " IS_EMERGNCY_PRICE=$" + 0 + "$";
    _xmlStr += " APPT_NO=$" + 0 + "$";
    _xmlStr += " CONSULTATION_TYPE_ID=$" + 1 + "$";
    _xmlStr += " SESSION_ID=$" + 1 + "$";
    _xmlStr += " />";
    }*/
    /*Commented by Swetha Reddy*/
    var _Srvc = '';
    if (document.getElementById('' + ctrlcom + '_UCServices_gvServices').rows.length >= 1) {
        _Srvc = OSPGridServicesSave();
    }
    _xmlStr += _Srvc;
    _xmlStr += "</root>";
    _RegXml += _xmlStr;
    document.getElementById('' + ctrlcom + '_hdnHTMLstring').value = _RegXml;

    __doPostBack($('[id*=imgbtnSave]').attr("name"), "");
}
function OSPGridServicesSave() {
    var UmrNO = '', _reg_id = 0; var _OPDxml = '';
    if (document.getElementById('' + ctrlcom + '_chk_old').checked == true) {
        UmrNO = document.getElementById('' + ctrlcom + '_Umrlookup_txtSearchControl').value;
        _reg_id = document.getElementById('' + ctrlcom + '_umrPatientDetails_hdnRegID').value;
        if (_reg_id == undefined || _reg_id == null || _reg_id == '') { _reg_id = "0"; }
    }
    else {
        UmrNO = document.getElementById('' + ctrlcom + '_txtumrno').value;
    }
    var Tpa_Id = "0";
    var Cmp_Id = document.getElementById('' + ctrlcom + '_EmployerInfo1_EmployerControl1__hiddenID').value;
    if ($('#' + ctrlcom + '_chk_old')[0].checked == false) {
        if (document.getElementById('' + ctrlcom + '_ddlPatientType').value == '2' && service_type_id == '1') {
            Tpa_Id = $("#" + ctrlcom + "_EmployerInfo1_uctpa__hiddenID").val();
        }
    }
    else {
        if (document.getElementById('' + ctrlcom + '_uccorporate_ddlPaymentBy').value == '2' && service_type_id == '1') {
            Tpa_Id = $("#" + ctrlcom + "_uccorporate_CmpLookup__hiddenID").val();
        }
    }
    if (Tpa_Id == null || Tpa_Id == undefined || Tpa_Id == '') { Tpa_Id = "0"; }
    if (Cmp_Id == null || Cmp_Id == undefined || Cmp_Id == '') { Cmp_Id = "0"; }
    var QuickBalCash = 0;
    var CONCESSION = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatgrossamt').value;
    var COMPANY_CONCESSION_AMOUNT = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpartygrossamt').value;
    var COMPANY_AMOUNT = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtparygross').value;
    var BILL_AMOUNT = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtgrosstotal').value;
    var NET_AMOUNT = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtTotalNet').value;
    var PAID_AMOUNT = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtTotalReciptAmt').value;
    var DUE_AMOUNT = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtTotalDue').value;
    var TOTAL_DISCOUNT = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtgrossamttotal').value;
    var CMP_OUTSTANDING_DUE = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtTotalDue').value;
    var CMP_NET_AMT = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtTotalNet').value;
    var CMP_PAID_AMT = 0; /*document.getElementById('' + ctrlcom + '_ReceiptControl2_txtTotalReciptAmt').value;*/
    var AdmnNo = document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnTRANADMNNO').value;
    var TransactionNo = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtReceoptNoAdvanced').value;
    var rec_type_id = 0;
    if (document.getElementById('ctl00_hdnIsMedClg').value == "TRUE") {
        rec_type_id = $('input[id*=radiousertran]:checked').val()
        if (rec_type_id == 0 || rec_type_id == null || rec_type_id == undefined) { rec_type_id = 1; }
    }
    else { rec_type_id = 1; }

    var TransactionDt = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtReceiptDtAdvanced').value;
    var Remarks = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtRemarks').value;
    Remarks = ReplaceSplCharactor(Remarks);
    if (PAID_AMOUNT == null || PAID_AMOUNT == '' || PAID_AMOUNT == undefined) { PAID_AMOUNT = "0"; }
    if (DUE_AMOUNT == null || DUE_AMOUNT == '' || DUE_AMOUNT == undefined) { DUE_AMOUNT = "0"; }
    if (BILL_AMOUNT == null || BILL_AMOUNT == '' || BILL_AMOUNT == undefined) { BILL_AMOUNT = "0"; }
    if (NET_AMOUNT == null || NET_AMOUNT == '' || NET_AMOUNT == undefined) { NET_AMOUNT = "0"; }

    var Emp_Id = '0';
    var conpaidamt = 0;
    var regfee = document.getElementById('' + ctrlcom + '_txtregfee').value;
    PAID_AMOUNT = parseFloat(PAID_AMOUNT) - parseFloat(regfee);

    var CashAmt = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtcashAmt').value;
    var CardAmt = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtCardAmt').value;
    CashAmt = CashAmt == '' ? 0 : CashAmt;
    var TotalAmt = parseFloat(CashAmt) + parseFloat(CardAmt);
    var CardNO = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtcardNoCmp').value;
    var CradTypeId = document.getElementById('' + ctrlcom + '_ReceiptControl2_ddcardType').value;
    var BankName = $('[id*=ddbankName] option:selected').text();
    var CardExperyDt = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtcardExpiredt').value;
    if (CardExperyDt == undefined || CardExperyDt == null || CardExperyDt == '' || CardExperyDt == 0) { CardExperyDt = ''; }
    var paymentmodeid = document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlcrdtype').value;
    if (paymentmodeid == '' || paymentmodeid == '0' || paymentmodeid == null || paymentmodeid == undefined) { paymentmodeid = "1"; }

    var congross = document.getElementById('' + ctrlcom + '_txtConGross').value;
    var conconcession = document.getElementById('' + ctrlcom + '_txtConDisc').value;
    var connetamt = document.getElementById('' + ctrlcom + '_txtConNet').value;

    if (parseFloat(CashAmt) > 0) {
        CashAmt = parseFloat(CashAmt) - parseFloat(regfee) - parseFloat(connetamt);
    }
    else if (parseFloat(CardAmt) > 0) {
        CardAmt = parseFloat(CardAmt) - parseFloat(regfee) - parseFloat(connetamt);
    }

    var M_GvRowscount = 1;
    var Post_Cons = '';
    var grid = document.getElementById('' + ctrlcom + '_ReceiptControl2_gvMultipleConcession');
    var _xmlStr_concession = '';

    var _Xml_healthcard_string = '';
    /* Multiple Discounts */
    var cnt = 0; var totlamt = 0; var totlnetamt = 0; var _OPDSrvxml = ''; var hdnDrId = ''; var hdnDiscPer = ''; var hdnDiscAmt = ''

    var totgrossamt = 0;
    var totnetamt = 0;
    if (document.getElementById('' + ctrlcom + '_ReceiptControl2_chkismultiple').checked == true) {
        var staffConAmt_tot = 0, staffConper_tot = 0, mngmtConper_tot = 0, MngmtConAmt_tot = 0, ebConper_tot = 0, ebConAmt_tot = 0, ConRuleConper_tot = 0, ConRuleConAmt_tot = 0, HCConper_tot = 0, HCConAmt_tot = 0, CashConper_tot = 0, CashConAmt_tot = 0;

        $("table[id$=gvServices] tr:has(td)").each(function (e) {

            var hdnServiceID = $(this).closest('tr').find("input[type=hidden][id*=hdnServiceID]").val();
            var txtserviceName = $(this).closest('tr').find("input[type=text][id*=txtServiceName]").val();
            var hdnDoctorID = $(this).closest('tr').find("input[type=hidden][id*=hdnDoctorID]").val();
            var class_Srv_id = $(this).closest('tr').find("input[type=hidden][id*=hdnClass_Srv_ID]").val();
            var hdnServiceClass = $(this).closest('tr').find("input[type=hidden][id*=hdnServiceClass]").val();
            var hdnServiceTypID = $(this).closest('tr').find("input[type=hidden][id*=hdnServiceTypID]").val();
            if (hdnServiceClass == "3") {
                document.getElementById('' + ctrlcom + '_hdn_pkg_param_opd').value = hdnServiceClass;
            }
            if (hdnServiceID == '' || hdnServiceID == undefined || hdnServiceID == null) { hdnServiceID = 0; }
            if (hdnDoctorID == '' || hdnDoctorID == undefined || hdnDoctorID == null) { hdnDoctorID = 0; }
            if (class_Srv_id == '' || class_Srv_id == undefined || class_Srv_id == null) { class_Srv_id = 0; }
            if (hdnServiceTypID == '' || hdnServiceTypID == undefined || hdnServiceTypID == null) { hdnServiceTypID = 0; }
            if (hdnServiceClass == '' || hdnServiceClass == undefined || hdnServiceClass == null) { hdnServiceClass = 0; }
            var _type = 'Y';
            if (hdnServiceTypID == '5' || hdnServiceTypID == '1' || hdnServiceTypID == '0') {
                _type = 'N';
            }
            // if (hdnServiceClass == '3' || _type == 'Y' || (hdnServiceID == '2' && class_Srv_id > 0)) {
            var staffConAmt = $(this).closest('tr').find('input[type=text][id*=txtstAmt]').val();
            var staffConper = $(this).closest('tr').find('input[type=text][id*=txtstPer]').val();
            var mngmtConper = $(this).closest('tr').find('input[type=text][id*=txtmaPer]').val();
            var MngmtConAmt = $(this).closest('tr').find('input[type=text][id*=txtmgAmt]').val();
            var ebConper = $(this).closest('tr').find('input[type=text][id*=txtebPer]').val();
            var ebConAmt = $(this).closest('tr').find('input[type=text][id*=txtebAmt]').val();
            var ConRuleConper = $(this).closest('tr').find('input[type=text][id*=txtRulePer]').val();
            var ConRuleConAmt = $(this).closest('tr').find('input[type=text][id*=txtcncrlAmt]').val();
            var HCConper = $(this).closest('tr').find('input[type=text][id*=txthcPer]').val();
            var HCConAmt = $(this).closest('tr').find('input[type=text][id*=txtHcAmt]').val();
            var CashConper = $(this).closest('tr').find('input[type=text][id*=txtDiscP]').val();
            var CashConAmt = $(this).closest('tr').find('input[type=text][id*=txtDiscAmt]').val();
            var srvgrossamt = $(this).closest('tr').find('input[type=text][id*=txtPamt]').val();
            var srvnetamt = $(this).closest('tr').find('input[type=text][id*=txtPNAmt]').val();


            if (srvgrossamt == '' || srvgrossamt == undefined || srvgrossamt == null) { srvgrossamt = 0; }
            if (srvnetamt == '' || srvnetamt == undefined || srvnetamt == null) { srvnetamt = 0; }
            if (staffConper == '' || staffConper == undefined || staffConper == null) { staffConper = 0; }
            if (staffConAmt == '' || staffConAmt == undefined || staffConAmt == null) { staffConAmt = 0; }
            if (mngmtConper == '' || mngmtConper == undefined || mngmtConper == null) { mngmtConper = 0; }
            if (MngmtConAmt == '' || MngmtConAmt == undefined || MngmtConAmt == null) { MngmtConAmt = 0; }
            if (ebConper == '' || ebConper == undefined || ebConper == null) { ebConper = 0; }
            if (ebConAmt == '' || ebConAmt == undefined || ebConAmt == null) { ebConAmt = 0; }
            if (ConRuleConper == '' || ConRuleConper == undefined || ConRuleConper == null) { ConRuleConper = 0; }
            if (ConRuleConAmt == '' || ConRuleConAmt == undefined || ConRuleConAmt == null) { ConRuleConAmt = 0; }
            if (HCConper == '' || HCConper == undefined || HCConper == null) { HCConper = 0; }
            if (HCConAmt == '' || HCConAmt == undefined || HCConAmt == null) { HCConAmt = 0; }
            if (CashConper == '' || CashConper == undefined || CashConper == null) { CashConper = 0; }
            if (CashConAmt == '' || CashConAmt == undefined || CashConAmt == null) { CashConAmt = 0; }

            staffConAmt_tot = parseFloat(staffConAmt_tot) + parseFloat(staffConAmt);
            MngmtConAmt_tot = parseFloat(MngmtConAmt_tot) + parseFloat(MngmtConAmt);
            ebConAmt_tot = parseFloat(ebConAmt_tot) + parseFloat(ebConAmt);
            ConRuleConAmt_tot = parseFloat(ConRuleConAmt_tot) + parseFloat(ConRuleConAmt);
            HCConAmt_tot = parseFloat(HCConAmt_tot) + parseFloat(HCConAmt);
            CashConAmt_tot = parseFloat(CashConAmt_tot) + parseFloat(CashConAmt);


            totgrossamt = parseFloat(totgrossamt) + parseFloat(srvgrossamt);
            totnetamt = parseFloat(totnetamt) + parseFloat(srvnetamt);
            $("table[id*=gvMultipleConcession] tr:has(td)").each(function (e) {
                var cncsntypeid = $(this).closest('tr').find("[id*=ddlMultiDiscounttype]").val();
                var Amount = $(this).closest('tr').find("input[type=text][id*=txtAmount]").val();
                if (cncsntypeid == undefined || cncsntypeid == null || cncsntypeid == "") { cncsntypeid = 0; }
                if (Amount == undefined || Amount == null || Amount == "" || Amount == "NaN") { Amount = 0; }

                var _Cncs_Per = 0;
                if (cncsntypeid == '1') {
                    _Cncs_Per = CashConper;
                }
                else if (cncsntypeid == '2') {
                    _Cncs_Per = HCConper;
                }
                else if (cncsntypeid == '3') {
                    _Cncs_Per = mngmtConper;
                }
                else if (cncsntypeid == '4') {
                    _Cncs_Per = staffConper;
                }
                else if (cncsntypeid == '5') {
                    _Cncs_Per = ebConper;
                }
                else if (cncsntypeid == '6') {
                    _Cncs_Per = ConRuleConper;
                }

                if (cncsntypeid > 0 && hdnServiceID != 1 && parseFloat(Amount) > 0 && parseFloat(_Cncs_Per) > 0) {
                    _xmlStr_concession += "<FO_BILL_SRV_CNCSN";
                    _xmlStr_concession += " BILL_SRV_CNCSN_ID=$" + 0 + "$";
                    _xmlStr_concession += " BILL_SRV_ID=$" + 0 + "$";
                    _xmlStr_concession += " BILL_CNCSN_ID=$" + "0" + "$";
                    _xmlStr_concession += " CONCESSION_TYPE_ID=$" + cncsntypeid + "$";
                    _xmlStr_concession += " CONCESSION_AMOUNT=$" + Math.round(Amount) + "$";
                    _xmlStr_concession += " PAT_CONC_PER=$" + CashConper + "$";
                    _xmlStr_concession += " PAT_CONC_AMT=$" + Math.round(CashConAmt) + "$";
                    _xmlStr_concession += " HC_PERC=$" + HCConper + "$";
                    _xmlStr_concession += " HC_AMT=$" + Math.round(HCConAmt) + "$";
                    _xmlStr_concession += " MG_PERC=$" + mngmtConper + "$";
                    _xmlStr_concession += " MG_AMT=$" + Math.round(MngmtConAmt) + "$";
                    _xmlStr_concession += " STAFF_PERC=$" + staffConper + "$";
                    _xmlStr_concession += " STAFF_AMT=$" + Math.round(staffConAmt) + "$";
                    _xmlStr_concession += " EB_PERC=$" + ebConper + "$";
                    _xmlStr_concession += " EB_AMT=$" + Math.round(ebConAmt) + "$";
                    _xmlStr_concession += " CNCSNRULEPERC=$" + ConRuleConper + "$";
                    _xmlStr_concession += " CNCSNRULEAMT=$" + Math.round(ConRuleConAmt) + "$";
                    _xmlStr_concession += " RECORD_STATUS=$" + 'A' + "$";
                    _xmlStr_concession += " SERVICE_ID=$" + hdnServiceID + "$";
                    _xmlStr_concession += " DOCTOR_ID=$" + hdnDoctorID + "$";
                    _xmlStr_concession += " CONCESSION_PERCENT=$" + _Cncs_Per + "$";
                    _xmlStr_concession += "/>";
                }
            });
            //}
        });


        $("table[id*=gvMultipleConcession] tr:has(td)").each(function (e) {
            var cncsntypeid = $(this).closest('tr').find("[id*=ddlMultiDiscounttype]").val();
            var Amount = $(this).closest('tr').find("input[type=text][id*=txtAmount]").val();
            var authid = $(this).closest('tr').find("input[type=hidden][id*=hdnauthid]").val();
            var _cncsPer = $(this).closest('tr').find("input[type=text][id*=txtPersentage]").val();
            var _ddlmodeid = $(this).closest('tr').find("[id*=ddlModes]").val();
            var _Cardno = $(this).closest('tr').find("input[type=text][id*=txtcardno]").val();
            var cncsremarks = $(this).closest('tr').find("input[type=text][id*=txtCRemks]").val();
            var cncsn_rule_id = document.getElementById('' + ctrlcom + '_umrPatientDetails_hdncncsn_rule_id').value;
            if (parseInt(cncsn_rule_id) > 0)
            { }
            else
            { cncsn_rule_id = 0; }
            if (cncsn_rule_id == undefined || cncsn_rule_id == null || cncsn_rule_id == '')
            { cncsn_rule_id = 0; }
            if (cncsntypeid == undefined || cncsntypeid == null || cncsntypeid == '') { cncsntypeid = 0; }
            if (Amount == undefined || Amount == null || Amount == '' || Amount == "NaN") { Amount = 0; }
            if (authid == undefined || authid == null || authid == '') { authid = 0; }
            if (_cncsPer == undefined || _cncsPer == null || _cncsPer == '') { _cncsPer = 0; }
            if (_ddlmodeid == undefined || _ddlmodeid == null || _ddlmodeid == '') { _ddlmodeid = 0; }
            if (_Cardno == undefined || _Cardno == null) { _Cardno = ''; }
            if (cncsntypeid == '2') {
                $('#' + ctrlcom + '_hdnutilizamt').val(Amount);
            }
            var cardid = 0;
            if (cncsntypeid == 2) {
                cardid = $(this).closest('tr').find("input[type=hidden][id*=hdncardid]").val();
            } else if (cncsntypeid == 5) {
                cardid = $(this).closest('tr').find("input[type=hidden][id*=hdneventid]").val();
            } else if (cncsntypeid == 6) {
                cardid = $(this).closest('tr').find("input[type=hidden][id*=hdnRuleid]").val();
            } else {
                cardid = 0;
            }
            if (Math.round(CashConAmt_tot) > 0) { } else { CashConAmt_tot = 0; }
            if (Math.round(HCConAmt_tot) > 0) { } else { HCConAmt_tot = 0; }
            if (Math.round(MngmtConAmt_tot) > 0) { } else { MngmtConAmt_tot = 0; }
            if (Math.round(staffConAmt_tot) > 0) { } else { staffConAmt_tot = 0; }
            if (Math.round(ebConAmt_tot) > 0) { } else { ebConAmt_tot = 0; }
            if (Math.round(ConRuleConAmt_tot) > 0) { } else { ConRuleConAmt_tot = 0; }
            if (cncsntypeid != '0' && parseFloat(_cncsPer) > 0 && (parseFloat(CashConAmt_tot) > 0 || parseFloat(HCConAmt_tot) > 0 || parseFloat(MngmtConAmt_tot) > 0 || parseFloat(staffConAmt_tot) > 0 || parseFloat(ebConAmt_tot) > 0 || parseFloat(ConRuleConAmt_tot) > 0)) {
                _xmlStr_concession += "<FO_BILL_CNCSN";
                _xmlStr_concession += " BILL_CNCSN_ID=$" + 0 + "$";
                _xmlStr_concession += " BILL_CNCSN_REV_NO=$" + 1 + "$";
                _xmlStr_concession += " BILL_ID=$" + "0" + "$";
                _xmlStr_concession += " CONCESSION_TYPE_ID=$" + cncsntypeid + "$";
                _xmlStr_concession += " CONCESSION_MODE_ID=$" + _ddlmodeid + "$";

                _xmlStr_concession += " CONCESSION_PERCENT=$" + Math.round(_cncsPer) + "$";


                if (cncsntypeid == '1') /* cash */
                { _xmlStr_concession += " CONCESSION_AMOUNT=$" + Math.round(CashConAmt_tot) + "$"; }
                else if (cncsntypeid == '2') /* hc*/
                { _xmlStr_concession += " CONCESSION_AMOUNT=$" + Math.round(HCConAmt_tot) + "$"; }
                else if (cncsntypeid == '3') /*mg*/
                { _xmlStr_concession += " CONCESSION_AMOUNT=$" + Math.round(MngmtConAmt_tot) + "$"; }
                else if (cncsntypeid == '4') /* staff*/
                { _xmlStr_concession += " CONCESSION_AMOUNT=$" + Math.round(staffConAmt_tot) + "$"; }
                else if (cncsntypeid == '5') /* event */
                { _xmlStr_concession += " CONCESSION_AMOUNT=$" + Math.round(ebConAmt_tot) + "$"; }
                else if (cncsntypeid == '6') /*concession rule */
                { _xmlStr_concession += " CONCESSION_AMOUNT=$" + Math.round(ConRuleConAmt_tot) + "$"; }

                _xmlStr_concession += " RECORD_STATUS=$" + "A" + "$";
                _xmlStr_concession += " CNCSN_RULE_ID=$" + cardid + "$";
                _xmlStr_concession += " CARD_NO=$" + _Cardno + "$";
                _xmlStr_concession += " CNCSN_AUTH_ID=$" + authid + "$";
                _xmlStr_concession += " REMARKS=$" + ReplaceSplCharactor(cncsremarks) + "$";
                _xmlStr_concession += " CNCSN_REF_NO=$" + 0 + "$";
                _xmlStr_concession += " BILL_TYPE_ID=$" + "15" + "$";
                _xmlStr_concession += "/>";
            }
        });
        //        var hcid = '';
        //        var hcNo = '';
        //        var form_name = document.getElementById('' + ctrlcom + '_UCServices_hdnSrvFormName').value;
        //        if (form_name == 'OP' || form_name == 'Cons') {
        //            hcid = document.getElementById('' + ctrlcom + '_umrPatientDetails_HdnHealthcardid').value;
        //            hcNo = document.getElementById('' + ctrlcom + '_umrPatientDetails_HdnHealthcardno').value;
        //        }
        //        else if (form_name == 'OPQUICK') {
        //            if (document.getElementById('' + ctrlcom + '_chkhccrd').checked == true) {
        //                hcid = $('#' + ctrlcom + '_Address1_uchccrdtype__hiddenID').val();
        //                hcNo = document.getElementById('ctl00_ContentPlaceHolder1_lblhcnon').innerHTML;

        //            }
        //            else {
        //                hcid = document.getElementById('' + ctrlcom + '_ReceiptControl2_HdnHealthcardid').value;
        //                hcNo = document.getElementById('' + ctrlcom + '_ReceiptControl2_HdnHealthcardno').value;
        //            }
        //        }
        //        var cncsnruleid = document.getElementById('ctl00_ContentPlaceHolder1_umrPatientDetails_hdncncsn_rule_id').value;
        //        var eligibity_amt = document.getElementById('ctl00_ContentPlaceHolder1_umrPatientDetails_hdnhealthcardeligibleamt').value;
        //        var depencyid = document.getElementById('ctl00_ContentPlaceHolder1_umrPatientDetails_hdnhealthdepencyid').value
        //        hcid = hcid == '' ? 0 : hcid;
        //        hcNo = hcNo == '' ? 0 : hcNo;

        //        if (cncsnruleid == undefined || cncsnruleid == null || cncsnruleid == '') { cncsnruleid = "0"; }
        //        if (eligibity_amt == undefined || eligibity_amt == null || eligibity_amt == '') { eligibity_amt = "0"; }
        //        if (depencyid == undefined || depencyid == null || depencyid == '') { depencyid = "0"; }

        //        if (document.getElementById('' + ctrlcom + '_ReceiptControl2_chkismultiple').checked == true && hcid > 0) {


        //            _Xml_healthcard_string += "<HEALTHCARD_USAGE_TRAN ";
        //            _Xml_healthcard_string += " UMR_NO=$" + UmrNO + "$";
        //            _Xml_healthcard_string += " DEPENDENCY_ID=$" + depencyid + "$";
        //            _Xml_healthcard_string += " GROSS_AMOUNT=$" + Math.round(totgrossamt) + "$";
        //            _Xml_healthcard_string += " CONCESSION_AMOUNT=$" + setProperDecimals(HCConAmt_tot) + "$";
        //            _Xml_healthcard_string += " NET_AMOUNT=$" + setProperDecimals(totnetamt) + "$";
        //            _Xml_healthcard_string += " ON_CARD_AMT=$" + eligibity_amt + "$";
        //            _Xml_healthcard_string += " CNCSN_RULE_ID=$" + cncsnruleid + "$";
        //            _Xml_healthcard_string += " HEALTH_CARD_NO=$" + hcNo + "$";
        //            _Xml_healthcard_string += " HEALTHCARD_TRAN_ID=$" + hcid + "$";
        //            _Xml_healthcard_string += "  />"
        //        }





    }
    else if (document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlDiscountType').value == 1) {
        /* Single Discount */
        var CashConAmt_tot = 0;
        var sing_disc_auth = $('#' + ctrlcom + '_ReceiptControl2_ucdueauth__hiddenID').val();
        if (sing_disc_auth == undefined || sing_disc_auth == null || sing_disc_auth == '' || sing_disc_auth == 'undefined') { sing_disc_auth = 0; }
        Con_Remarks = $('#' + ctrlcom + '_ReceiptControl2_txtRemarks').val();
        $("table[id$=gvServices] tr:has(td)").each(function (e) {

            var hdnServiceID = $(this).closest('tr').find("input[type=hidden][id*=hdnServiceID]").val();
            var txtserviceName = $(this).closest('tr').find("input[type=text][id*=txtServiceName]").val();
            var hdnDoctorID = $(this).closest('tr').find("input[type=hidden][id*=hdnDoctorID]").val();
            var class_Srv_id = $(this).closest('tr').find("input[type=hidden][id*=hdnClass_Srv_ID]").val();
            var hdnServiceClass = $(this).closest('tr').find("input[type=hidden][id*=hdnServiceClass]").val();
            var hdnServiceTypID = $(this).closest('tr').find("input[type=hidden][id*=hdnServiceTypID]").val();
            if (hdnServiceClass == "3") {
                document.getElementById('' + ctrlcom + '_hdn_pkg_param_opd').value = hdnServiceClass;
            }
            if (hdnServiceID == '' || hdnServiceID == undefined || hdnServiceID == null) { hdnServiceID = 0; }
            if (hdnDoctorID == '' || hdnDoctorID == undefined || hdnDoctorID == null) { hdnDoctorID = 0; }
            if (class_Srv_id == '' || class_Srv_id == undefined || class_Srv_id == null) { class_Srv_id = 0; }
            if (hdnServiceTypID == '' || hdnServiceTypID == undefined || hdnServiceTypID == null) { hdnServiceTypID = 0; }
            if (hdnServiceClass == '' || hdnServiceClass == undefined || hdnServiceClass == null) { hdnServiceClass = 0; }
            var _type = 'Y'; var CashConper = 0; var CashConAmt = 0;
            if (hdnServiceTypID == '5' || hdnServiceTypID == '1' || hdnServiceTypID == '0') {
                _type = 'N';
            }
            if (hdnServiceID != '1') {
                CashConper = $(this).closest('tr').find('input[type=text][id*=txtDiscP]').val();
                CashConAmt = $(this).closest('tr').find('input[type=text][id*=txtDiscAmt]').val();
                if (CashConper == '' || CashConper == undefined || CashConper == null) { CashConper = 0; }
                if (CashConAmt == '' || CashConAmt == undefined || CashConAmt == null) { CashConAmt = 0; }
                CashConAmt_tot = Math.round(CashConAmt_tot) + Math.round(CashConAmt);
                if (parseFloat(CashConAmt) > 0 && parseFloat(CashConper) > 0) {
                    _xmlStr_concession += "<FO_BILL_SRV_CNCSN";
                    _xmlStr_concession += " BILL_SRV_CNCSN_ID=$" + 0 + "$";
                    _xmlStr_concession += " BILL_SRV_ID=$" + 0 + "$";
                    _xmlStr_concession += " BILL_CNCSN_ID=$" + "0" + "$";
                    _xmlStr_concession += " CONCESSION_TYPE_ID=$" + 1 + "$";
                    _xmlStr_concession += " CONCESSION_AMOUNT=$" + Math.round(CashConAmt) + "$";
                    _xmlStr_concession += " PAT_CONC_PER=$" + CashConper + "$";
                    _xmlStr_concession += " PAT_CONC_AMT=$" + Math.round(CashConAmt) + "$";
                    _xmlStr_concession += " HC_PERC=$" + 0 + "$";
                    _xmlStr_concession += " HC_AMT=$" + 0 + "$";
                    _xmlStr_concession += " MG_PERC=$" + 0 + "$";
                    _xmlStr_concession += " MG_AMT=$" + 0 + "$";
                    _xmlStr_concession += " STAFF_PERC=$" + 0 + "$";
                    _xmlStr_concession += " STAFF_AMT=$" + 0 + "$";
                    _xmlStr_concession += " EB_PERC=$" + 0 + "$";
                    _xmlStr_concession += " EB_AMT=$" + 0 + "$";
                    _xmlStr_concession += " CNCSNRULEPERC=$" + 0 + "$";
                    _xmlStr_concession += " CNCSNRULEAMT=$" + 0 + "$";
                    _xmlStr_concession += " RECORD_STATUS=$" + 'A' + "$";
                    _xmlStr_concession += " SERVICE_ID=$" + hdnServiceID + "$";
                    _xmlStr_concession += " DOCTOR_ID=$" + hdnDoctorID + "$";
                    _xmlStr_concession += " CONCESSION_PERCENT=$" + CashConper + "$";
                    _xmlStr_concession += "/>";
                }
            }
        });
        var sing_disc_pcnt = $('#' + ctrlcom + '_ReceiptControl2_txtpatdis').val();
        if (sing_disc_pcnt == undefined || sing_disc_pcnt == null || sing_disc_pcnt == '' || sing_disc_pcnt == 'undefined') { sing_disc_pcnt = 0; }
        if (parseFloat(sing_disc_pcnt) > 0 && parseFloat(CashConAmt_tot) > 0) {
            _xmlStr_concession += "<FO_BILL_CNCSN";
            _xmlStr_concession += " BILL_CNCSN_ID=$" + 0 + "$";
            _xmlStr_concession += " BILL_CNCSN_REV_NO=$" + 1 + "$";
            _xmlStr_concession += " BILL_ID=$" + "0" + "$";
            _xmlStr_concession += " CONCESSION_TYPE_ID=$" + 1 + "$";
            _xmlStr_concession += " CONCESSION_MODE_ID=$" + 1 + "$";
            _xmlStr_concession += " CONCESSION_PERCENT=$" + sing_disc_pcnt + "$";
            if (Math.round(CashConAmt_tot) > 0) { } else { CashConAmt_tot = 0; }
            _xmlStr_concession += " CONCESSION_AMOUNT=$" + Math.round(CashConAmt_tot) + "$";
            _xmlStr_concession += " RECORD_STATUS=$" + "A" + "$";
            _xmlStr_concession += " CNCSN_RULE_ID=$" + "" + "$";
            _xmlStr_concession += " CARD_NO=$" + "" + "$";
            _xmlStr_concession += " CNCSN_AUTH_ID=$" + sing_disc_auth + "$";
            _xmlStr_concession += " REMARKS=$" + ReplaceSplCharactor(Con_Remarks) + "$";
            _xmlStr_concession += " CNCSN_REF_NO=$" + 0 + "$";



            _xmlStr_concession += " BILL_TYPE_ID=$" + "15" + "$";
            _xmlStr_concession += "/>";
        }

    }
  //  _xmlStr_concession += SaveMOUDiscount();;
    _OPDSrvxml += _xmlStr_concession;
    //_OPDSrvxml += _Xml_healthcard_string;
    var ind_s_net_amt = 0;

    $("table[id$=gvServices] tr:has(td)").each(function (e) {
        var sno = $(this).closest('tr').find('[id*=lblSNo]').text();
        var txtServiceName = $(this).closest('tr').find("input[type=text][id*=txtServiceName]").val();
        var hdnServiceID = $(this).closest('tr').find("input[type=hidden][id*=hdnServiceID]").val();
        if (txtServiceName.trim() != '' && txtServiceName != null && txtServiceName != undefined && txtServiceName != "--Enter Service Name Here--" && hdnServiceID != '' && hdnServiceID != null && hdnServiceID != undefined) {
            txtServiceName = ReplaceSplCharactor(txtServiceName);
            var txtServiceCode = $(this).closest('tr').find("input[type=text][id*=txtServiceCode]").val();
            var txtQuantity = $(this).closest('tr').find("input[type=text][id*=txtQty]").val();
            var lblServiceType = "";
            var hdnServiceClass = $(this).closest('tr').find("input[type=hidden][id*=hdnServiceClass]").val();
            var class_Srv_id = $(this).closest('tr').find("input[type=hidden][id*=hdnClass_Srv_ID]").val();
            var hdnServiceGrp = $(this).closest('tr').find("input[type=hidden][id*=hdnServiceGrpID]").val();
            var hdnServiceTypID = $(this).closest('tr').find("input[type=hidden][id*=hdnServiceTypID]").val();
            var hdnDoctorID = $(this).closest('tr').find("input[type=hidden][id*=hdnDoctorID]").val();
            var hdnVisitTypeId = $(this).closest('tr').find("input[type=hidden][id*=hdnVisitTypeId]").val();
            var hdnClassSrvid = $(this).closest('tr').find("input[type=hidden][id*=hdnClassSrvid]").val();
            var hdnOrgPrice = $(this).closest('tr').find('[id*=hdnOrgPrice]').val();
            var hdnDocPrice = $(this).closest('tr').find('[id*=hdnDoctorPrice]').val();
            var txtRate = $(this).closest('tr').find("input[type=text][id*=txtRate]").val();
            var txtrateAmount = $(this).closest('tr').find("input[type=text][id*=txtAmount]").val();
            var hdnRealOrgAmt = "";
            var hdnRealDocAmt = "";
            var hdnserpriceid = $(this).closest('tr').find("input[type=hidden][id*=hdnsrvpriceID]").val();
            var hdnisfrgnsrv = $(this).closest('tr').find("input[type=hidden][id*=hdnIsForeignSrv]").val();
            var hdnparentsrvic = "";
            var hdnserclass = $(this).closest('tr').find("input[type=hidden][id*=hdnServiceClass]").val();
            var txtamount = $(this).closest('tr').find("input[type=text][id*=txtAmount]").val();
            var txtconcamt = "";
            var txtnetamt = $(this).closest('tr').find("input[type=text][id*=txtPNAmt]").val();
            var txtstatus = "";
            var txtDiscAmt = $(this).closest('tr').find("input[type=text][id*=txtDiscAmt]").val();
            var txtDiscPer = $(this).closest('tr').find("input[type=text][id*=txtDiscP]").val();

            var staffConper = $(this).closest('tr').find('input[type=text][id*=txtstPer]').val();
            var staffConAmt = $(this).closest('tr').find('input[type=text][id*=txtstAmt]').val();
            var mngmtConper = $(this).closest('tr').find('input[type=text][id*=txtmaPer]').val();
            var MngmtConAmt = $(this).closest('tr').find('input[type=text][id*=txtmgAmt]').val();
            var ebConper = $(this).closest('tr').find('input[type=text][id*=txtebPer]').val();
            var ebConAmt = $(this).closest('tr').find('input[type=text][id*=txtebAmt]').val();
            var ConRuleConper = $(this).closest('tr').find('input[type=text][id*=txtRulePer]').val();
            var ConRuleConAmt = $(this).closest('tr').find('input[type=text][id*=txtcncrlAmt]').val();
            var HCConper = $(this).closest('tr').find('input[type=text][id*=txthcPer]').val();
            var HCConAmt = $(this).closest('tr').find('input[type=text][id*=txtHcAmt]').val();
            var CashConper = $(this).closest('tr').find('input[type=text][id*=txtDiscP]').val();
            var CashConAmt = $(this).closest('tr').find('input[type=text][id*=txtDiscAmt]').val();
            var txtPAmt = $(this).closest('tr').find('input[type=text][id*=txtPamt]').val();
            var Tariff_ID = $(this).closest('tr').find('input[type=hidden][id*=hdnTariffId]').val();
            var Cmp_G_Amt = $(this).closest('tr').find('input[type=text][id*=txtCamt]').val();
            var Cmp_Disc_Pcnt = $(this).closest('tr').find('input[type=text][id*=txtCDiscP]').val();
            var Cmp_Disc_Amt = $(this).closest('tr').find('input[type=text][id*=txtCDiscAmt]').val();
            var Cmp_N_Amt = $(this).closest('tr').find('input[type=text][id*=txtCNetAmt]').val();
            var Department_id = $(this).closest('tr').find("input[type=hidden][id*=hdnDepartment_Id]").val();
            var hdn_is_free_followup = $(this).closest('tr').find('input[type=hidden][id*=hdn_is_free_followup]').val();
            var srvdoctor = $(this).closest('tr').find('input[type=hidden][id*=hdnsrvdoctorID]').val();
            var billinghead_id = $(this).closest('tr').find('input[type=hidden][id*=hdnbillingheadid]').val();
            var org_pct = $(this).closest('tr').find('[id*=hdnOrgPct]').val();
            var doctor_pct = $(this).closest('tr').find('[id*=hdnDoctorPct]').val();
            var hdnsrvpriceID = $(this).closest('tr').find('[id*=hdnsrvpriceID]').val();
            var consultant = document.getElementById('' + ctrlcom + '_ucConsultant__hiddenID').value;
            if (hdn_is_free_followup == undefined || hdn_is_free_followup == null || hdn_is_free_followup == '') { hdn_is_free_followup = 'N'; }
            if (Cmp_G_Amt != undefined && Cmp_G_Amt != null && Cmp_G_Amt != '') { Cmp_G_Amt = Cmp_G_Amt; } else { Cmp_G_Amt = '0'; }
            if (Cmp_Disc_Pcnt != undefined && Cmp_Disc_Pcnt != null && Cmp_Disc_Pcnt != '') { Cmp_Disc_Pcnt = Cmp_Disc_Pcnt; } else { Cmp_Disc_Pcnt = '0'; }
            if (Cmp_Disc_Amt != undefined && Cmp_Disc_Amt != null && Cmp_Disc_Amt != '') { Cmp_Disc_Amt = Cmp_Disc_Amt; } else { Cmp_Disc_Amt = '0'; }
            if (Cmp_N_Amt != undefined && Cmp_N_Amt != null && Cmp_N_Amt != '') { Cmp_N_Amt = Cmp_N_Amt; } else { Cmp_N_Amt = '0'; }
            if (Department_id == null || Department_id == undefined || Department_id == '') { Department_id = 0; }
            if (staffConper == '' || staffConper == undefined || staffConper == null) { staffConper = 0; }
            if (staffConAmt == '' || staffConAmt == undefined || staffConAmt == null) { staffConAmt = 0; }
            if (mngmtConper == '' || mngmtConper == undefined || mngmtConper == null) { mngmtConper = 0; }
            if (MngmtConAmt == '' || MngmtConAmt == undefined || MngmtConAmt == null) { MngmtConAmt = 0; }
            if (ebConper == '' || ebConper == undefined || ebConper == null) { ebConper = 0; }
            if (ebConAmt == '' || ebConAmt == undefined || ebConAmt == null) { ebConAmt = 0; }
            if (ConRuleConper == '' || ConRuleConper == undefined || ConRuleConper == null) { ConRuleConper = 0; }
            if (ConRuleConAmt == '' || ConRuleConAmt == undefined || ConRuleConAmt == null) { ConRuleConAmt = 0; }
            if (HCConper == '' || HCConper == undefined || HCConper == null) { HCConper = 0; }
            if (HCConAmt == '' || HCConAmt == undefined || HCConAmt == null) { HCConAmt = 0; }
            if (CashConper == '' || CashConper == undefined || CashConper == null) { CashConper = 0; }
            if (CashConAmt == '' || CashConAmt == undefined || CashConAmt == null) { CashConAmt = 0; }
            if (Tariff_ID == '' || Tariff_ID == undefined || Tariff_ID == null) { Tariff_ID = 0; }
            if (org_pct != undefined && org_pct != null && org_pct != '') { org_pct = org_pct; } else { org_pct = '0'; }
            if (consultant != undefined && consultant != null && consultant != '') { consultant = consultant; } else { consultant = '0'; }
            if (doctor_pct != undefined && doctor_pct != null && doctor_pct != '') { doctor_pct = doctor_pct; } else { doctor_pct = '0'; }
            if (hdnsrvpriceID != undefined && hdnsrvpriceID != null && hdnsrvpriceID != '') { hdnsrvpriceID = hdnsrvpriceID; } else { hdnsrvpriceID = '0'; }
            if (srvdoctor != undefined && srvdoctor != null && srvdoctor != '') { srvdoctor = srvdoctor } else { srvdoctor = '0' }
            if (billinghead_id == "undefined" || billinghead_id == undefined || billinghead_id == null) { billinghead_id = "0"; }

            /* var namt = '';
            if (document.getElementById('' + ctrlcom + '_ReceiptControl2_chkismultiple').checked == false) {
            namt = $(this).closest('tr').find("input[type=text][id*=txtPNAmt]").val();
            } else { namt = $(this).closest('tr').find("input[type=text][id*=txtAmount]").val(); }

            if (namt == '' || namt == undefined || namt == null) { namt = 0; }

            var cncsn_pct = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatdis').value;
            var cncsn_amt = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatgrossamt').value;
            cncsn_pct = cncsn_pct == null || undefined || '' ? "0" : cncsn_pct;
            cncsn_amt = cncsn_amt == null || undefined || '' ? "0" : cncsn_amt;
            cncsn_amt = setProperDecimals((parseFloat(namt) * parseFloat(cncsn_pct)) / 100);

            txtDiscAmt = cncsn_amt;
            txtDiscPer = cncsn_pct;*/
            var _consultationTypeID = $(this).closest('tr').find('[id*=ddSType]').val();

            if (_consultationTypeID != undefined && _consultationTypeID != null && _consultationTypeID != '') { _consultationTypeID = _consultationTypeID; } else { _consultationTypeID = '0' }
            var _isEmergency = $(this).closest('tr').find("input[type=checkbox][id*=chkstat]")[0].checked;
            var ISEmergency = "N";
            if (_isEmergency == true) { ISEmergency = "Y" }
            var srv_remarks = $(this).closest('tr').find('input[type=text][id*=txtremks]').val();
            if (srv_remarks == undefined || srv_remarks == '' || srv_remarks == null) { srv_remarks = ''; }

            if (hdnServiceClass == '3' || hdnServiceClass == '4') {
                document.getElementById('' + ctrlcom + '_hdnPkgSrvs').value = hdnServiceID;
            }
            var prorate = $(this).closest('tr').find('input[type=hidden][id*=hdnprorate]').val();
            if (prorate == undefined || prorate == null || prorate == '') {
                prorate = 0;
            }
            var hdnIsEmerPrice = $(this).closest('tr').find("input[type=hidden][id*=hdnIsEmerPrice]").val();
            if (hdnIsEmerPrice == null || hdnIsEmerPrice == '' || hdnIsEmerPrice == undefined) { hdnIsEmerPrice = "N"; }
            if (hdnserpriceid == null || hdnserpriceid == '' || hdnserpriceid == undefined) { hdnserpriceid = "0"; }
            if (hdnServiceTypID == null || hdnServiceTypID == '' || hdnServiceTypID == undefined) { hdnServiceTypID = "0"; }
            if (lblServiceType == null || lblServiceType == '' || lblServiceType == undefined) { lblServiceType = " "; }
            if (hdnOrgPrice == null || hdnOrgPrice == '' || hdnOrgPrice == undefined) { hdnOrgPrice = "0"; }
            if (hdnDocPrice == null || hdnDocPrice == '' || hdnDocPrice == undefined) { hdnDocPrice = "0"; }
            if (txtRate == null || txtRate == '' || txtRate == undefined) { txtRate = "0"; }
            if (hdnRealOrgAmt == null || hdnRealOrgAmt == '' || hdnRealOrgAmt == undefined) { hdnRealOrgAmt = "0"; }
            if (hdnRealDocAmt == null || hdnRealDocAmt == '' || hdnRealDocAmt == undefined) { hdnRealDocAmt = "0"; }
            if (hdnparentsrvic == null || hdnparentsrvic == '' || hdnparentsrvic == undefined) { hdnparentsrvic = "0"; }
            if (txtamount == null || txtamount == '' || txtamount == undefined) { txtamount = "0"; }
            if (txtconcamt == null || txtconcamt == '' || txtconcamt == undefined) { txtconcamt = "0"; }
            if (txtnetamt == null || txtnetamt == '' || txtnetamt == undefined) { txtnetamt = "0"; }
            if (txtstatus == null || txtstatus == '' || txtstatus == undefined) { txtstatus = "s"; }
            if (txtDiscAmt == null || txtDiscAmt == '' || txtDiscAmt == undefined) { txtDiscAmt = "0"; }
            if (txtDiscPer == null || txtDiscPer == '' || txtDiscPer == undefined) { txtDiscPer = "0"; }
            if (txtrateAmount == null || txtrateAmount == '' || txtrateAmount == undefined) { txtrateAmount = "0"; }

            totlamt = parseFloat(totlamt) + parseFloat(txtamount);
            totlnetamt = parseFloat(totlnetamt) + parseFloat(txtnetamt);
            var TAX_PCT = $(this).closest('tr').find('input[type=hidden][id*=hdntaxpct]').val();
            var pat_tax_amt = $(this).closest('tr').find('input[type=text][id*=txtptax]').val(); // Math.round((parseFloat(pat_net_amt)) * parseFloat(TAX_PCT) / 100);
            if (pat_tax_amt == undefined || pat_tax_amt == null || pat_tax_amt == '' || pat_tax_amt == NaN || pat_tax_amt == "NaN") { pat_tax_amt = "0"; }
            var cmp_tax_amt = $(this).closest('tr').find('input[type=text][id*=txtcmptax]').val(); //Math.round((parseFloat(cmpamt)) * parseFloat(TAX_PCT) / 100);
            if (cmp_tax_amt == undefined || cmp_tax_amt == null || cmp_tax_amt == '' || cmp_tax_amt == NaN || cmp_tax_amt == "NaN") { cmp_tax_amt = "0"; }

            var tax_amt = (parseFloat(cmp_tax_amt) + parseFloat(pat_tax_amt)).toFixed(2);

            if (tax_amt == undefined || tax_amt == null || tax_amt == '' || tax_amt == NaN || tax_amt == "NaN") { tax_amt = "0"; }
            var SAC_CD = $(this).closest('tr').find('input[type=hidden][id*=hdnsaccd]').val();
            if (SAC_CD == undefined || SAC_CD == null || SAC_CD == '' || SAC_CD == NaN) { SAC_CD = "0"; }
            var sgst_pct = $(this).closest('tr').find('input[type=hidden][id*=hdnsgstpct]').val();
            var cgst_pct = $(this).closest('tr').find('input[type=hidden][id*=hdncgstpct]').val();
            var sgst_amount = $(this).closest('tr').find('input[type=hidden][id*=hdnsgstamount]').val();
            var cgst_amount = $(this).closest('tr').find('input[type=hidden][id*=hdncgstamount]').val();
            if (sgst_pct == undefined || sgst_pct == null || sgst_pct == '' || sgst_pct == NaN || sgst_pct == "NaN") { sgst_pct = "0"; }
            if (cgst_pct == undefined || cgst_pct == null || cgst_pct == '' || cgst_pct == NaN || cgst_pct == "NaN") { cgst_pct = "0"; }
            if (sgst_amount == undefined || sgst_amount == null || sgst_amount == '' || sgst_amount == NaN || sgst_amount == "NaN") { sgst_amount = "0"; }
            if (cgst_amount == undefined || cgst_amount == null || cgst_amount == '' || cgst_amount == NaN || cgst_amount == "NaN") { cgst_amount = "0"; }
            var Emp_Disc_Pcnt = $('[id$=UCServices_gvServices] tr').find('input[type=text][id*=txtDiscP]').val();
            var Emp_Disc_Amt = $('[id$=UCServices_gvServices] tr').find('input[type=text][id*=txtDiscAmt]').val();
            if (Emp_Disc_Pcnt != undefined && Emp_Disc_Pcnt != null && Emp_Disc_Pcnt != '') { Emp_Disc_Pcnt = Emp_Disc_Amt; } else { Emp_Disc_Pcnt = '0'; }
            if (Emp_Disc_Amt != undefined && Emp_Disc_Amt != null && Emp_Disc_Amt != '') { Emp_Disc_Amt = Emp_Disc_Amt; } else { Emp_Disc_Amt = '0'; }
            var _type = 'Y';
            if (hdnServiceTypID == '5' || hdnServiceTypID == '1' || hdnServiceTypID == '0') {
                _type = 'N';
            }
            if (hdnServiceClass == "3") {
                document.getElementById('' + ctrlcom + '_hdn_pkg_param_opd').value = hdnServiceClass;
            }
            var indtax = tax_amt / txtQuantity;
            if (indtax == undefined || indtax == null || indtax == '' || indtax == NaN || indtax == "NaN") { indtax = "0"; }
            if (hdnServiceClass == '3' || _type == 'Y' || (hdnServiceID == '2' && class_Srv_id > 0)) {
                cnt++;
                ind_s_net_amt = parseFloat(ind_s_net_amt) + parseFloat(txtnetamt);
                _OPDSrvxml += "<FO_BILL_SRV";
                _OPDSrvxml += " BILL_SRV_ID=$" + 0 + "$";
                _OPDSrvxml += " UMR_NO=$" + UmrNO + "$";
                _OPDSrvxml += " SERVICE_TYPE_ID=$" + hdnServiceTypID + "$";
                _OPDSrvxml += " SERVICE_GROUP_ID=$" + hdnServiceGrp + "$";
                _OPDSrvxml += " SERVICE_ID=$" + hdnServiceID + "$";
                _OPDSrvxml += " SERVICE_CLASS_ID=$" + hdnServiceClass + "$";
                _OPDSrvxml += " CLASS_SERVICE_ID=$" + class_Srv_id + "$";
                _OPDSrvxml += " QUANTITY=$" + txtQuantity + "$";
                if (parseInt(class_Srv_id) > 0) {
                    _OPDSrvxml += " RATE=$" + setProperDecimals(prorate) + "$";
                    _OPDSrvxml += " RATE_EXC_GST=$" + setProperDecimals(prorate) + (parseFloat(indtax)) + "$";
                }
                else {
                    _OPDSrvxml += " RATE=$" + setProperDecimals(parseFloat(txtRate) + (parseFloat(indtax))) + "$";
                    _OPDSrvxml += " RATE_EXC_GST=$" + setProperDecimals(txtRate) + "$";
                }


                _OPDSrvxml += " AMOUNT=$" + setProperDecimals(parseFloat(txtPAmt) + Math.round(parseFloat(tax_amt))) + "$";
                _OPDSrvxml += " CONCESSION=$" + txtDiscPer + "$";
                _OPDSrvxml += " CONCESSION_AMOUNT=$" + setProperDecimals(txtDiscAmt) + "$";
                _OPDSrvxml += " NET_AMOUNT=$" + setProperDecimals(parseFloat(txtnetamt) + Math.round(parseFloat(tax_amt))) + "$";
                _OPDSrvxml += " DOCTOR_PRICE=$" + setProperDecimals(hdnDocPrice) + "$";
                _OPDSrvxml += " ORG_PRICE=$" + setProperDecimals(hdnOrgPrice) + "$";
                _OPDSrvxml += " RECORD_SNO=$" + sno + "$";
                _OPDSrvxml += " SERVICE_PRICE_ID=$" + hdnserpriceid + "$";
                _OPDSrvxml += " TO_LOC_ID=$" + 1 + "$";
                _OPDSrvxml += " CONSULTATION_TYPE_ID=$" + 1 + "$";
                _OPDSrvxml += " EDIT_SERVICE_NAME=$" + txtServiceName + "$";
                _OPDSrvxml += " EDIT_SERVICE_CD=$" + txtServiceCode + "$";
                _OPDSrvxml += " IS_FOREIGN_SERVICE=$" + "N" + "$";
                _OPDSrvxml += " SERVICE_STATUS=$" + "B" + "$";
                _OPDSrvxml += " IS_EMERGENCY=$" + ISEmergency + "$";
                _OPDSrvxml += " IS_EMERGNCY_PRICE=$" + hdnIsEmerPrice + "$";
                _OPDSrvxml += " SESSION_ID=$" + document.getElementById('' + ctrlcom + '_HDNSESSIONID').value + "$";
                _OPDSrvxml += " REMARKS=$" + ReplaceSplCharactor(srv_remarks) + "$";
                _OPDSrvxml += " TARIFF_ID=$" + Tariff_ID + "$";
                _OPDSrvxml += " COMPANY_TARIFF_ID=$" + 0 + "$";
                _OPDSrvxml += " IS_CASH=$" + "N" + "$";
                _OPDSrvxml += " ORIGINAL_PRICE=$" + setProperDecimals(txtRate) + "$ ";
                _OPDSrvxml += " EMP_GROSS_AMT=$" + setProperDecimals(parseFloat(txtPAmt) + Math.round(parseFloat(tax_amt))) + "$";
                _OPDSrvxml += " EMP_NET_AMT=$" + setProperDecimals(parseFloat(txtnetamt) + Math.round(parseFloat(tax_amt))) + "$";
                _OPDSrvxml += " COMPANY_AMOUNT=$" + setProperDecimals(parseFloat(Cmp_G_Amt) + Math.round(parseFloat(cmp_tax_amt))) + "$";
                _OPDSrvxml += " COMPANY_CNCSN_PCT=$" + Cmp_Disc_Pcnt + "$";
                _OPDSrvxml += " COMPANY_CNCSN_AMT=$" + setProperDecimals(Cmp_Disc_Amt) + "$";
                _OPDSrvxml += " COMPANY_NET_AMT=$" + setProperDecimals(parseFloat(Cmp_N_Amt) + Math.round(parseFloat(cmp_tax_amt))) + "$";
                _OPDSrvxml += " COLOR_CD=$" + '' + "$";
                _OPDSrvxml += " DEPARTMENT_ID=$" + Department_id + "$";
                _OPDSrvxml += " DOCTOR_ID=$" + srvdoctor + "$";
                _OPDSrvxml += " WF_STATUS=$" + "A" + "$";
                _OPDSrvxml += " CMP_WARD_GROUP_ID=$" + "0" + "$";
                _OPDSrvxml += " STAFF_DISC_PER=$" + staffConper + "$";
                _OPDSrvxml += " STAFF_DISC_AMT=$" + setProperDecimals(staffConAmt) + "$";
                _OPDSrvxml += " MNGMT_DISC_PER=$" + mngmtConper + "$";
                _OPDSrvxml += " MNGMT_DISC_AMT=$" + setProperDecimals(MngmtConAmt) + "$";
                _OPDSrvxml += " EB_DISC_PER=$" + ebConper + "$";
                _OPDSrvxml += " EB_DISC_AMT=$" + setProperDecimals(ebConAmt) + "$";
                _OPDSrvxml += " CONRULE_DISC_PER=$" + ConRuleConper + "$";
                _OPDSrvxml += " CONRULE_DISC_AMT=$" + setProperDecimals(ConRuleConAmt) + "$";
                _OPDSrvxml += " HC_DISCT_PER=$" + HCConper + "$";
                _OPDSrvxml += " HC_DISCT_AMT=$" + setProperDecimals(HCConAmt) + "$";
                _OPDSrvxml += " CASH_DISC_PER=$" + CashConper + "$";
                _OPDSrvxml += " CASH_DISC_AMT=$" + setProperDecimals(CashConAmt) + "$";
                _OPDSrvxml += " IS_FREE_FOLLOWUP=$" + hdn_is_free_followup + "$";
                _OPDSrvxml += " TREATED_BY_ID=$" + consultant + "$";
                _OPDSrvxml += " COMPANY_BILL_HEAD_ID=$" + billinghead_id + "$";
                _OPDSrvxml += " DOCTOR_PCT=$" + doctor_pct + "$";
                _OPDSrvxml += " ORG_PCT=$" + org_pct + "$";
                _OPDSrvxml += " TRN_SOURCE_ID=$" + "0" + "$";
                _OPDSrvxml += " TAX_PCT=$" + TAX_PCT + "$";
                _OPDSrvxml += " TAX_AMOUNT=$" + tax_amt + "$";
                _OPDSrvxml += " CMP_TAX_AMT=$" + cmp_tax_amt + "$";
                _OPDSrvxml += " EMP_TAX_AMT=$" + pat_tax_amt + "$";

                var companygross = setProperDecimals(parseFloat(Cmp_G_Amt) + Math.round(parseFloat(cmp_tax_amt)));

                var total_disc_Pct = parseFloat(txtDiscPer) + parseFloat(Cmp_Disc_Pcnt);
                var total_disc_Amt = parseFloat(txtDiscAmt) + parseFloat(Cmp_Disc_Amt);

                if (total_disc_Pct == undefined || total_disc_Pct == null || total_disc_Pct == '' || total_disc_Pct == NaN || total_disc_Pct == "NaN") { total_disc_Pct = "0"; }
                if (total_disc_Amt == undefined || total_disc_Amt == null || total_disc_Amt == '' || total_disc_Amt == NaN || total_disc_Amt == "NaN") { total_disc_Amt = "0"; }

                companygross = companygross || 0;
                if (companygross == 0) {
                    _OPDSrvxml += " CONCESSION_PCT=$" + total_disc_Pct + "$";
                    _OPDSrvxml += " CONCESSION_AMT=$" + total_disc_Amt + "$";
                } else {
                    _OPDSrvxml += " CONCESSION_AMT=$" + Emp_Disc_Amt + "$";
                    _OPDSrvxml += " CONCESSION_PCT=$" + Emp_Disc_Pcnt + "$";
                }

                _OPDSrvxml += " SGST_PCT=$" + sgst_pct + "$";
                _OPDSrvxml += " SGST_AMOUNT=$" + sgst_amount + "$";
                _OPDSrvxml += " CGST_PCT=$" + cgst_pct + "$";
                _OPDSrvxml += " CGST_AMOUNT=$" + cgst_amount + "$";
                _OPDSrvxml += " SAC_CD=$" + SAC_CD + "$";
                _OPDSrvxml += " REC_TYPE_ID=$" + rec_type_id + "$";
                _OPDSrvxml += " />";
            }
        }
    });

    var OPpayfee = '0', OPpaydue = '0';
    if (totlnetamt != "0") {
        if (PAID_AMOUNT > 0 && parseFloat(PAID_AMOUNT) >= parseFloat(totlnetamt)) {
            OPpayfee = parseFloat(totlnetamt);
        }
        else if (PAID_AMOUNT > 0 && parseFloat(PAID_AMOUNT) <= parseFloat(totlnetamt)) {
            OPpayfee = parseFloat(PAID_AMOUNT);
        }
    }
    if (DUE_AMOUNT > 0) {
        if (parseFloat(PAID_AMOUNT) < parseFloat(totlnetamt)) {
            OPpaydue = parseFloat(totlnetamt) - parseFloat(PAID_AMOUNT);
        }
    }
    if (parseFloat(OPpayfee) > parseFloat(PAID_AMOUNT)) {
        PAID_AMOUNT = parseFloat(PAID_AMOUNT) - parseFloat(OPpayfee);
    }
    else {
    }

    if (cnt == 0) {
        _OPDxml = '';
    }
    else {
        hdnDiscAmt = $('#' + ctrlcom + '_ReceiptControl2_txtpatgrossamt').val();
        hdnDiscPer = $('#' + ctrlcom + '_ReceiptControl2_txtpatdis').val();
        if (ind_s_net_amt == undefined || ind_s_net_amt == null || ind_s_net_amt == '') { ind_s_net_amt = 0; }
        _OPDxml += OPDFOBILLROOT(UmrNO, hdnDrId, totlamt, hdnDiscAmt, hdnDiscPer, totlnetamt, OPpayfee, OPpaydue, Cmp_Id, Tpa_Id, _reg_id, ind_s_net_amt);
        _OPDxml += _OPDSrvxml;
        _OPDxml += TransactionSave2();

    }

    return _OPDxml;
}
/*--------  OSP SAVING END  ---------- */


var _PayCount = 0;
function PaymentValidations() {
    _PayCount = 0;
    if ($("#lbladvanced").attr('class') == 'select') {
        if ($('[id*=imgbtnupdate]').css('display') == 'block') {
            if (confirm('Are You Sure Do you want to Update Transaction mode which is in edit mode?')) {
                UpdateTransactionDetails();
            }
            else {
            }
        }
    }
    if ($("#lblquick").attr('class') == 'select' || $("#lbladvanced").attr('class') == 'select') {
        var _Patdue = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatdue').value;
        var _dueAuthName = document.getElementById('' + ctrlcom + '_ReceiptControl2_Search3_txtSearchControl').value;
        var _dueAuthID = document.getElementById('' + ctrlcom + '_ReceiptControl2_Search3__hiddenID').value;

        var _DiscAmt = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatgrossamt').value;
        var _DiscAuthName = document.getElementById('' + ctrlcom + '_ReceiptControl2_ucdueauth_txtSearchControl').value;
        var _DiscAuthID = document.getElementById('' + ctrlcom + '_ReceiptControl2_ucdueauth__hiddenID').value;

        if (_Patdue == undefined || _Patdue == null || _Patdue == '') { _Patdue = "0"; }
        if (_dueAuthID == undefined || _dueAuthID == null || _dueAuthID == '') { _dueAuthID = "0"; }

        if (_DiscAmt == undefined || _DiscAmt == null || _DiscAmt == '') { _DiscAmt = "0"; }
        if (_DiscAuthID == undefined || _DiscAuthID == null || _DiscAuthID == '') { _DiscAuthID = "0"; }
        if (document.getElementById('' + ctrlcom + '_ChkAssesment').checked == false) {
            if (parseFloat(_Patdue) > 0 && _dueAuthID == "0") {
                $(".stoast").toastText("warning", "Please Select Due Authorised Person!.", 5, 3);
                _PayCount = 1;
                /*document.getElementById('' + ctrlcom + '_ReceiptControl2_Search3_txtSearchControl').style.border = '1px solid rgb(244, 120, 94);';*/
                $('#' + ctrlcom + '_ReceiptControl2_Search3_txtSearchControl').addClass('red');
                document.getElementById('' + ctrlcom + '_ReceiptControl2_Search3_txtSearchControl').focus();
                return false;
            }
        }
    }
    if (document.getElementById('' + ctrlcom + '_ReceiptControl2_txtCardAmt').value > 0) {
        if (document.getElementById('' + ctrlcom + '_ReceiptControl2_txtcardNoCmp').value == '') {
            $(".stoast").toastText("warning", "Please enter the card number!", 5, 3);
            _PayCount = 1;
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtcardNoCmp').focus();
            return false;
        }
        if (document.getElementById('' + ctrlcom + '_ReceiptControl2_ddcardType').value == '0') {
            $(".stoast").toastText("warning", "Please select the Card Type!", 5, 3);
            _PayCount = 1;
            document.getElementById('' + ctrlcom + '_ReceiptControl2_ddcardType').focus();
            return false;
        }
        if (document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlcrdtype').value == '0') {
            $(".stoast").toastText("warning", "Please Select Card", 5, 3);
            _PayCount = 1;
            document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlcrdtype').focus();
            return false;
        }
        if (document.getElementById('' + ctrlcom + '_ReceiptControl2_ddbankName').value == '0') {
            $(".stoast").toastText("warning", "Please select the name of the Bank!", 5, 3);
            _PayCount = 1;
            document.getElementById('' + ctrlcom + '_ReceiptControl2_ddbankName').focus();
            return false;
        }
        /* if (document.getElementById('' + ctrlcom + '_ReceiptControl2_txtcardExpiredt').value == '') {
        $(".stoast").toastText("warning", "Please Select Card Expire Date", 5, 3);
        _PayCount = 1;
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtcardExpiredt').focus();
        return false;
        }*/

    }
    var multicount = 0;
    var mul_remarks_count = 0;
    var Cash_Disc_id = $('#' + ctrlcom + '_ReceiptControl2_ddlDiscountType').val();
    if (document.getElementById('' + ctrlcom + '_ReceiptControl2_chkismultiple').checked == true) {
        $("table[id*=gvMultipleConcession] tr:has(td)").each(function (e) {
            var authname = $(this).closest('tr').find('input[type=text][id*=txtAutherizedPersion]').val();
            var authid = $(this).closest('tr').find('input[type=hidden][id*=hdnauthid]').val(); //ddlMultiDiscounttype
            var Auth_Rematks = $(this).closest('tr').find("[id*=txtCRemks]").val();
            var ddlMultiDiscounttype = $(this).closest('tr').find('[id*=ddlMultiDiscounttype]').val();
            if (ddlMultiDiscounttype > 0) {
                if (authid == '' || authid == undefined || authid == null || authname == '' || authname == undefined) {
                    multicount++;
                    _PayCount = 1;
                    return false;
                }
                if (Auth_Rematks == undefined || Auth_Rematks == null || Auth_Rematks == '') {
                    mul_remarks_count++;

                    return false;
                }
            }
        });
        if (multicount > 0) {
            $(".stoast").toastText("warning", "Please Select Discount Authroised for Multiple Discounts!.", 5, 3);
            _PayCount = 1;
            return false;
        }
        if (mul_remarks_count > 0) {
            $(".stoast").toastText("warning", "Please enter your remarks! For Discounts ", 5, 3);
            _PayCount = 1;
            return false;
        }
    }
    else if (parseFloat(_DiscAmt) > 0 && Cash_Disc_id == '1') {
        if (_DiscAuthName == "" || _DiscAuthID == '0') {
            $(".stoast").toastText("warning", "Please Select Discount Authorised Person!.", 5, 3);
            _PayCount = 1;
            /* document.getElementById('' + ctrlcom + '_ReceiptControl2_ucdueauth_txtSearchControl').style.border = '1px solid rgb(244, 120, 94);';*/
            $('#' + ctrlcom + '_ReceiptControl2_ucdueauth_txtSearchControl').addClass('red');
            document.getElementById('' + ctrlcom + '_ReceiptControl2_ucdueauth_txtSearchControl').focus();
            return false;
        }
    }
}
function TransactionSave2() {
    var rec_type_id = 0;
    if (document.getElementById('ctl00_hdnIsMedClg').value == "TRUE") {
        rec_type_id = $('input[id*=radiousertran]:checked').val()
        if (rec_type_id == 0 || rec_type_id == null || rec_type_id == undefined) { rec_type_id = 1; }
    }
    else { rec_type_id = 1; }

    var _curr_id = document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnstpcurrid').value;
    var CONCESSION = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatgrossamt').value;
    var COMPANY_CONCESSION_AMOUNT = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpartygrossamt').value;
    var COMPANY_AMOUNT = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtparygross').value;
    var BILL_AMOUNT = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtgrosstotal').value;
    var NET_AMOUNT = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtTotalNet').value;
    var PAID_AMOUNT = '';
    if (lblquick.className == 'select') { /* Quick Mode */
        var cash_amt = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtcashAmt').value;
        var card_amt = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtCardAmt').value;
        if (parseFloat(cash_amt) > 0)
        { }
        else {
            cash_amt = '0';
        }
        if (parseFloat(card_amt) > 0)
        { }
        else
        { card_amt = '0'; }
        PAID_AMOUNT = parseFloat(cash_amt) + parseFloat(card_amt);
    }
    else {/* Advance Mode */
        PAID_AMOUNT = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtTotalReciptAmt').value;
    }

    var DUE_AMOUNT = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtTotalDue').value;
    var TOTAL_DISCOUNT = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtgrossamttotal').value;
    var CMP_OUTSTANDING_DUE = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtTotalDue').value;
    var CMP_NET_AMT = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtTotalNet').value;
    var CMP_PAID_AMT = 0; /*  document.getElementById('' + ctrlcom + '_ReceiptControl2_txtTotalReciptAmt').value;*/
    var UmrNO = document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnTranUMRNO').value;
    var AdmnNo = document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnTRANADMNNO').value;
    var TransactionNo = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtReceoptNoAdvanced').value;
    var TransactionDt = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtReceiptDtAdvanced').value;
    var PAYMENT_TYPE_ID = 0;

    var REMARKS = '';
    if (lblquick.className == "select") {
        PAYMENT_TYPE_ID = 2;
        REMARKS = $('#' + ctrlcom + '_ReceiptControl2_txtquickremarks').val();
    }
    else {
        PAYMENT_TYPE_ID = 1;
        REMARKS = $('#' + ctrlcom + '_ReceiptControl2_txtRemarks').val();
    }
    var Emp_Id = '0';

    var _Xml_Recpt_String = "";
    _Xml_Recpt_String += "<FO_RECPAY ";
    _Xml_Recpt_String += " UMR_NO=$" + UmrNO + "$"; ;
    _Xml_Recpt_String += " ADMN_NO=$" + AdmnNo + "$";
    _Xml_Recpt_String += " EMPLOYEE_ID=$" + Emp_Id + "$";
    _Xml_Recpt_String += " TRANSACTION_ID=$" + "0" + "$";
    _Xml_Recpt_String += " TRANSACTION_NO=$" + TransactionNo + "$";
    _Xml_Recpt_String += " TRANSACTION_DT=$" + TransactionDt + "$";
    _Xml_Recpt_String += " TRANSACTION_TYPE=$" + "R" + "$";
    _Xml_Recpt_String += " APPROVE_BY=$" + 0 + "$";
    _Xml_Recpt_String += " APPROVE_DT=$" + '' + "$";
    _Xml_Recpt_String += " AMOUNT=$" + Math.round(PAID_AMOUNT) + "$";
    _Xml_Recpt_String += " CURR_ID=$" + _curr_id + "$";
    _Xml_Recpt_String += " REMARKS=$" + ReplaceSplCharactor(REMARKS) + "$";
    _Xml_Recpt_String += " REC_TYPE_ID=$" + rec_type_id + "$";
    _Xml_Recpt_String += " PAYMENT_TYPE_ID=$" + PAYMENT_TYPE_ID + "$";
    _Xml_Recpt_String += "/>";
    _Xml_Recpt_String += "<FO_RECPAY_REF ";
    _Xml_Recpt_String += " RECPAY_REF_ID=$" + "0" + "$";
    _Xml_Recpt_String += " APPROVE_BY=$" + 0 + "$";
    _Xml_Recpt_String += " APPROVE_DT=$" + '' + "$";
    _Xml_Recpt_String += " AMOUNT=$" + Math.round(PAID_AMOUNT) + "$";
    _Xml_Recpt_String += " PAYMENT_TYPE_ID=$" + PAYMENT_TYPE_ID + "$";
    _Xml_Recpt_String += " REC_TYPE_ID=$" + rec_type_id + "$";
    var ref_type_id = document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnReference_type_id').value;
    if (ref_type_id == undefined || ref_type_id == null) {
        _Xml_Recpt_String += " REFERENCE_TYPE_ID=$" + 0 + "$";
    }
    else {
        _Xml_Recpt_String += " REFERENCE_TYPE_ID=$" + ref_type_id + "$";
    }
    _Xml_Recpt_String += " CURR_ID=$" + _curr_id + "$";
    _Xml_Recpt_String += " TRN_SOURCE_ID=$" + 0 + "$";

    _Xml_Recpt_String += " NET_GROSS_AMT=$" + (BILL_AMOUNT) + "$";
    _Xml_Recpt_String += " NET_DISCOUNT_AMT=$" + (TOTAL_DISCOUNT) + "$";
    _Xml_Recpt_String += " NET_RECEIPT_AMT=$" + (PAID_AMOUNT) + "$";
    _Xml_Recpt_String += " OUTSTANDING_DUE_AMT=$" + DUE_AMOUNT + "$";
    _Xml_Recpt_String += " EXCESS_AMT=$" + 0 + "$";


    _Xml_Recpt_String += "/>";


    var CashAmt = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtcashAmt').value;
    var CardAmt = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtCardAmt').value;
    CashAmt = CashAmt == '' ? 0 : CashAmt;
    CardAmt = CardAmt == '' ? 0 : CardAmt;

    var TotalAmt = parseFloat(CashAmt) + parseFloat(CardAmt);

    var Remarks = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtRemarks').value;
    var CardNO = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtcardNoCmp').value;

    var CradTypeId = document.getElementById('' + ctrlcom + '_ReceiptControl2_ddcardType').value;
    var BankName = $('[id*=ddbankName] option:selected').text();
    var bankid = document.getElementById('' + ctrlcom + '_ReceiptControl2_ddbankName').value;
    var CardExperyDt = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtcardExpiredt').value;
    if (CardExperyDt == undefined || CardExperyDt == '' || CardExperyDt == null || CardExperyDt == 0) { CardExperyDt = ''; }
    var paymentmodeid = document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlcrdtype').value;
    if (paymentmodeid == '' || paymentmodeid == '0' || paymentmodeid == null || paymentmodeid == undefined) { paymentmodeid = "4"; }
    var auth_cd = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtcardAuther').value;
    var changinamt = document.getElementById('' + ctrlcom + '_ReceiptControl2_lblqickchangeamt').innerHTML;
    if (changinamt == '' || changinamt == undefined || changinamt == null) { changinamt = 0; }
    var QckCardHldrName = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtQckCardHldrName').value;
    if (QckCardHldrName == undefined || QckCardHldrName == 'undefined' || QckCardHldrName == null) { QckCardHldrName = ''; }
    var rec_type_id = 0;
    if (document.getElementById('ctl00_hdnIsMedClg').value == "TRUE") {
        rec_type_id = $('input[id*=radiousertran]:checked').val()
        if (rec_type_id == 0 || rec_type_id == null || rec_type_id == undefined) { rec_type_id = 1; }
    }
    else { rec_type_id = 1; }
    if (BankName == "--Select--")
        BankName = '';
    var hdnbankid = document.getElementById('' + ctrlcom + '_ReceiptControl2_ddbankName').value;
    // var tenderAmt = parseFloat(CashAmt) > 0 ? CashAmt : CardAmt;
    var gridhdnplutusreferenceval = document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnPlutusTransactionReferenceID').value;
    gridhdnplutusreferenceval = gridhdnplutusreferenceval == '' || gridhdnplutusreferenceval == 'undefined' || gridhdnplutusreferenceval == undefined ? "" : gridhdnplutusreferenceval;
    if (TotalAmt > 0) {
        // var amount = parseFloat(CashAmt) > 0 ? CashAmt : CardAmt;
        if (CashAmt > 0) {
            var tenderAmt = CashAmt;
            _Xml_Recpt_String += FoRecpayDetXmlQuick(1, CashAmt, Remarks, _curr_id, 1, tenderAmt, tenderAmt, changinamt, 1, rec_type_id, UmrNO, CardNO, hdnbankid, CardExperyDt, '', '', QckCardHldrName, auth_cd, BankName, '', CradTypeId, 0, 0, gridhdnplutusreferenceval);
        }
        if (CardAmt > 0) {
            var tenderAmt = CardAmt;
            _Xml_Recpt_String += FoRecpayDetXmlQuick(paymentmodeid, CardAmt, Remarks, _curr_id, 1, tenderAmt, tenderAmt, changinamt, 1, rec_type_id, UmrNO, CardNO, hdnbankid, CardExperyDt, '', '', QckCardHldrName, auth_cd, BankName, '', CradTypeId, 0, 0, gridhdnplutusreferenceval);
        }
        /*if (CashAmt > 0) {
        _Xml_Recpt_String += "<FO_RECPAY_DET ";
        _Xml_Recpt_String += " TRANSACTION_ID=$" + 0 + "$";
        _Xml_Recpt_String += " TRANSACTION_DET_ID=$" + 0 + "$";
        _Xml_Recpt_String += " TRANSACTION_NO=$" + 0 + "$";
        _Xml_Recpt_String += " TRANSACTION_DT=$" + 0 + "$";
        _Xml_Recpt_String += " TRANSACTION_TYPE=$" + '' + "$";
        _Xml_Recpt_String += " AMOUNT=$" + CashAmt + "$";
        _Xml_Recpt_String += " TENDERED_AMOUNT=$" + CashAmt + "$";
        _Xml_Recpt_String += " CHANGE_AMOUNT=$" + changinamt + "$";
        _Xml_Recpt_String += " REMARKS=$" + REMARKS + "$";
        _Xml_Recpt_String += " EMPLOYEE_ID=$" + 0 + "$";
        _Xml_Recpt_String += " REFERENCE_ID=$" + 0 + "$";
        _Xml_Recpt_String += " PAYMENT_MODE_ID=$" + 1 + "$";
        _Xml_Recpt_String += " UMR_NO=$" + UmrNO + "$";
        _Xml_Recpt_String += " CURR_ID=$" + _curr_id + "$";
        _Xml_Recpt_String += " EX_RATE=$" + 1 + "$";
        _Xml_Recpt_String += " REC_TYPE_ID=$" + rec_type_id + "$";
        _Xml_Recpt_String += "/>";
        }
        if (CardAmt > 0 && paymentmodeid == 4) {
        _Xml_Recpt_String += "<FO_RECPAY_DET ";
        _Xml_Recpt_String += " TRANSACTION_ID=$" + 0 + "$";
        _Xml_Recpt_String += " TRANSACTION_DET_ID=$" + 0 + "$";
        _Xml_Recpt_String += " UMR_NO=$" + UmrNO + "$";
        _Xml_Recpt_String += " AMOUNT=$" + CardAmt + "$";
        _Xml_Recpt_String += " REMARKS=$" + REMARKS + "$";
        _Xml_Recpt_String += " REFERENCE_ID=$" + 0 + "$";
        _Xml_Recpt_String += " PAYMENT_MODE_ID=$" + paymentmodeid + "$";
        _Xml_Recpt_String += " CC_CARD_NO=$" + CardNO + "$";
        _Xml_Recpt_String += " CC_APPROVAL_NO=$" + '0' + "$";
        _Xml_Recpt_String += " CC_CARD_HOLDER_NAME=$" + QckCardHldrName + "$";
        _Xml_Recpt_String += " CC_EDC_MACHINE=$" + '' + "$";
        _Xml_Recpt_String += " CC_CARD_TYPE_ID=$" + CradTypeId + "$";
        _Xml_Recpt_String += " CC_ISSUE_BANK_NAME=$" + BankName + "$";
        _Xml_Recpt_String += " CC_VALID_TO_DT=$" + CardExperyDt + "$";
        _Xml_Recpt_String += " CC_CARD_HOLDER_ADDRESS=$" + 0 + "$";
        _Xml_Recpt_String += " CC_AUTH_CD=$" + auth_cd + "$";
        _Xml_Recpt_String += " CURR_ID=$" + _curr_id + "$";
        _Xml_Recpt_String += " EX_RATE=$" + 1 + "$";
        _Xml_Recpt_String += " CC_ISSUE_BANK_ID=$" + bankid + "$";
        _Xml_Recpt_String += " REC_TYPE_ID=$" + rec_type_id + "$";
        _Xml_Recpt_String += "/>";
        }
        if (CardAmt > 0 && paymentmodeid == 5) {
        _Xml_Recpt_String += "<FO_RECPAY_DET ";
        _Xml_Recpt_String += " TRANSACTION_ID=$" + 0 + "$";
        _Xml_Recpt_String += " TRANSACTION_DET_ID=$" + 0 + "$";
        _Xml_Recpt_String += " UMR_NO=$" + UmrNO + "$";
        _Xml_Recpt_String += " AMOUNT=$" + CardAmt + "$";
        _Xml_Recpt_String += " REMARKS=$" + REMARKS + "$";
        _Xml_Recpt_String += " REFERENCE_ID=$" + 0 + "$";
        _Xml_Recpt_String += " PAYMENT_MODE_ID=$" + paymentmodeid + "$";
        _Xml_Recpt_String += " DC_CARD_NO=$" + CardNO + "$";
        _Xml_Recpt_String += " DC_APPROVAL_NO=$" + '0' + "$";
        _Xml_Recpt_String += " DC_CARD_HOLDER_NAME=$" + QckCardHldrName + "$";
        _Xml_Recpt_String += " DC_EDC_MACHINE=$" + '' + "$";
        _Xml_Recpt_String += " DC_CARD_TYPE_ID=$" + CradTypeId + "$";
        _Xml_Recpt_String += " DC_ISSUE_BANK_NAME=$" + BankName + "$";
        _Xml_Recpt_String += " DC_VALID_TO_DT=$" + CardExperyDt + "$";
        _Xml_Recpt_String += " DC_CARD_HOLDER_ADDRESS=$" + 0 + "$";
        _Xml_Recpt_String += " DC_AUTH_CD=$" + auth_cd + "$";
        _Xml_Recpt_String += " CURR_ID=$" + _curr_id + "$";
        _Xml_Recpt_String += " EX_RATE=$" + 1 + "$";
        _Xml_Recpt_String += " DC_ISSUE_BANK_ID=$" + bankid + "$";
        _Xml_Recpt_String += " REC_TYPE_ID=$" + rec_type_id + "$";
        _Xml_Recpt_String += "/>";
        }*/
    }
    else {

        /*    var countrep = 0; var newpaymentcommid = 0;
        $("table[id$=gvReceiptDetails] tr:has(td)").each(function (e) {

        var paymentmodeid = $(this).closest('tr').find("input[type=hidden][id*=hdnrecmodeId]").val();
        var lblAmount = $(this).closest('tr').find("[id*=lblAmount]").text();
        var newpaymentcommid = $(this).closest('tr').find("input[type=hidden][id*=hdnpaymentcommid]").val();
        var lblcurrname = $(this).closest('tr').find("[id*=lblcurrname]").text();
        var lblexchrate = $(this).closest('tr').find("[id*=lblexchrate]").text();
        var lblconvertedamt = $(this).closest('tr').find("[id*=lblconvertedamt]").text();
        var lblbankname = $(this).closest('tr').find("[id*=lblbankname]").text();
        lblbankname = ReplaceSplCharactor(lblbankname);
        var lblcardno = $(this).closest('tr').find("[id*=lblcardno]").text();
        var lblauthcode = $(this).closest('tr').find("[id*=lblauthcode]").text();

        var lblcardexpdt = $(this).closest('tr').find("[id*=lblcardexpdt]").text();
        var lbltendcash = $(this).closest('tr').find("[id*=lbltendcash]").text();
        var lblchange = $(this).closest('tr').find("[id*=lblchange]").text();
        var lblcardtype = $(this).closest('tr').find("[id*=lblcardtype]").text();
        var hdncardtypeId = $(this).closest('tr').find("input[type=hidden][id*=hdncardtypeId]").val();
        var hdncurrId = $(this).closest('tr').find("input[type=hidden][id*=hdncurrId]").val();
        var hdnbankid = $(this).closest('tr').find("input[type=hidden][id*=hdnbankid]").val();
        var hdncheck_AuthID = $(this).closest('tr').find("input[type=hidden][id*=hdncheck_AuthID]").val();
        var AUTH_CD = $(this).closest('tr').find("[id*=lblauthcode]").text();
        var cheque_dt = $(this).closest('tr').find("[id*=lblchequedt]").text();
        var cheque_reql_dt = $(this).closest('tr').find("[id*=lblcqreldt]").text();
        var chq_issue_name = $(this).closest('tr').find("[id*=lblcqissuername]").text();
        if (cheque_dt == undefined || cheque_dt == null) { cheque_dt = ''; }
        if (cheque_reql_dt == undefined || cheque_reql_dt == null) { cheque_reql_dt = ''; }
        if (chq_issue_name == undefined || chq_issue_name == null) { chq_issue_name = ''; }
        if (lblAmount == undefined || lblAmount == null || lblAmount == '' || isNaN(lblAmount)) { lblAmount = "0"; }
        if (lblcurrname == undefined || lblcurrname == null || lblcurrname == '' || isNaN(lblcurrname)) { lblcurrname = "0"; }
        if (lblexchrate == undefined || lblexchrate == null || lblexchrate == '' || isNaN(lblexchrate)) { lblexchrate = "0"; }
        if (paymentmodeid == undefined || paymentmodeid == null || paymentmodeid == '' || isNaN(paymentmodeid)) { paymentmodeid = "0"; }
        if (lblconvertedamt == undefined || lblconvertedamt == null || lblconvertedamt == '' || isNaN(lblconvertedamt)) { lblconvertedamt = "0"; }
        if (lblbankname == undefined || lblbankname == null || lblbankname == '') { lblbankname = ''; }
        if (lblcardno == undefined || lblcardno == null || lblcardno == '') { lblcardno = "0"; } //|| isNaN(lblcardno)
        if (lblauthcode == undefined || lblauthcode == null || lblauthcode == '') { lblauthcode = "0"; }
        if (hdnbankid == undefined || hdnbankid == null || hdnbankid == '' || isNaN(hdnbankid)) { hdnbankid = "0"; }

        if (lblcardexpdt == undefined || lblcardexpdt == null || lblcardexpdt == '' || lblcardexpdt == NaN)
        { lblcardexpdt = new Date().format('dd-MMM-yyyy'); }
        else {
        lblcardexpdt = new Date(lblcardexpdt).format('dd-MMM-yyyy');
        }
        if (lbltendcash == undefined || lbltendcash == null || lbltendcash == '' || isNaN(lbltendcash)) { lbltendcash = "0"; }
        if (lblchange == undefined || lblchange == null || lblchange == '' || isNaN(lblchange)) { lblchange = "0"; }
        if (lblcardtype == undefined || lblcardtype == null || lblcardtype == '' || isNaN(lblcardtype)) { lblcardtype = "0"; }
        if (hdncardtypeId == undefined || hdncardtypeId == null || hdncardtypeId == '' || isNaN(hdncardtypeId)) { hdncardtypeId = "0"; }
        if (hdncurrId == undefined || hdncurrId == null || hdncurrId == '' || isNaN(hdncurrId)) { hdncurrId = "0"; }
        if (AUTH_CD == undefined || AUTH_CD == null || AUTH_CD == NaN) { AUTH_CD = ''; }
        if (paymentmodeid == "1" || paymentmodeid == "14" || paymentmodeid == "15") {
        countrep++;
        if (parseFloat(lblchange) > 0) {
        var receiptChange = parseFloat(lblchange) / parseFloat(lblexchrate);
        receiptChange = setProperDecimalsCorp(receiptChange);
        if (lblconvertedamt == '' || lblconvertedamt == null || lblconvertedamt == undefined || isNaN(lblconvertedamt)) { lblconvertedamt = "0"; }
        }
        _Xml_Recpt_String += "<FO_RECPAY_DET ";
        _Xml_Recpt_String += " TRANSACTION_DET_ID=$" + "0" + "$";
        _Xml_Recpt_String += " PAYMENT_MODE_ID=$" + paymentmodeid + "$";
        _Xml_Recpt_String += " AMOUNT=$" + lblAmount + "$";
        _Xml_Recpt_String += " REMARKS=$" + Remarks + "$";
        _Xml_Recpt_String += " SESSION_ID=$" + document.getElementById('' + ctrlcom + '_ReceiptControl2_HdnSessionID').value + "$";
        _Xml_Recpt_String += " CURR_ID=$" + hdncurrId + "$";
        _Xml_Recpt_String += " EX_RATE=$" + lblexchrate + "$";
        _Xml_Recpt_String += " ENTERED_AMOUNT=$" + lblconvertedamt + "$";
        _Xml_Recpt_String += " TENDERED_AMOUNT=$" + lbltendcash + "$";
        _Xml_Recpt_String += " CHANGE_AMOUNT=$" + lblchange + "$";
        _Xml_Recpt_String += " CC_AUTH_CD=$" + "" + "$";
        _Xml_Recpt_String += " DC_AUTH_CD=$" + "" + "$";
        _Xml_Recpt_String += " PAYMENT_COMM_ID=$" + newpaymentcommid + "$";
        _Xml_Recpt_String += " REC_TYPE_ID=$" + rec_type_id + "$";
        _Xml_Recpt_String += " />";
        }
        //Cheque
        else if (paymentmodeid == "2") {
        countrep++;
        _Xml_Recpt_String += "<FO_RECPAY_DET ";
        _Xml_Recpt_String += " TRANSACTION_DET_ID=$" + "0" + "$";
        _Xml_Recpt_String += " PAYMENT_MODE_ID=$" + paymentmodeid + "$";
        _Xml_Recpt_String += " AMOUNT=$" + lblconvertedamt + "$";
        _Xml_Recpt_String += " CQ_CHEQUE_NO=$" + lblcardno + "$";
        _Xml_Recpt_String += " CQ_BANK_ID=$" + hdnbankid + "$";
        _Xml_Recpt_String += " CQ_BANK_REV_NO=$" + '1' + "$";
        _Xml_Recpt_String += " CQ_BRANCH_ID=$" + 0 + "$";
        _Xml_Recpt_String += " CQ_BRANCH_REV_NO=$" + 1 + "$";
        _Xml_Recpt_String += " CQ_VALID_TO_DT=$" + lblcardexpdt + "$";
        _Xml_Recpt_String += " REMARKS=$" + Remarks + "$";
        _Xml_Recpt_String += " SESSION_ID=$" + document.getElementById('' + ctrlcom + '_ReceiptControl2_HdnSessionID').value + "$";
        _Xml_Recpt_String += " CURR_ID=$" + hdncurrId + "$";
        _Xml_Recpt_String += " EX_RATE=$" + lblexchrate + "$";
        _Xml_Recpt_String += " ENTERED_AMOUNT=$" + lblAmount + "$";
        _Xml_Recpt_String += " TENDERED_AMOUNT=$" + lbltendcash + "$";
        _Xml_Recpt_String += " CHANGE_AMOUNT=$" + lblchange + "$";
        _Xml_Recpt_String += " CC_AUTH_CD=$" + AUTH_CD + "$";
        _Xml_Recpt_String += " DC_AUTH_CD=$" + "" + "$";
        _Xml_Recpt_String += " PAYMENT_COMM_ID=$" + newpaymentcommid + "$";
        _Xml_Recpt_String += " CQ_DATE=$" + cheque_dt + "$";
        _Xml_Recpt_String += " CQ_CHEQUE_REALIZATION_DT=$" + cheque_reql_dt + "$";
        _Xml_Recpt_String += " CQ_ISSUER_NAME=$" + chq_issue_name + "$";
        _Xml_Recpt_String += " REC_TYPE_ID=$" + rec_type_id + "$";
        _Xml_Recpt_String += "  />"
        }
        //DD
        else if (paymentmodeid == "3") {
        countrep++;
        _Xml_Recpt_String += "<FO_RECPAY_DET ";
        _Xml_Recpt_String += " TRANSACTION_DET_ID=$" + 0 + "$";
        _Xml_Recpt_String += " PAYMENT_MODE_ID=$" + paymentmodeid + "$";
        _Xml_Recpt_String += " AMOUNT=$" + lblconvertedamt + "$";
        _Xml_Recpt_String += " DD_NO=$" + lblcardno + "$";
        _Xml_Recpt_String += " DD_ISSUE_BANK_ID=$" + hdnbankid + "$";
        _Xml_Recpt_String += " DC_ISSUE_BANK_NAME=$" + lblbankname + "$";
        _Xml_Recpt_String += " DD_ISSUE_BANK_REV_NO=$" + lblAmount + "$";
        _Xml_Recpt_String += " DD_ISSUE_BRANCH_ID=$" + 0 + "$";
        _Xml_Recpt_String += " DD_ISSUE_BRANCH_REV_NO=$" + 1 + "$";
        _Xml_Recpt_String += " DD_VALID_TO_DT=$" + lblcardexpdt + "$";
        _Xml_Recpt_String += " DD_SERVICE_BANK_ID=$" + 0 + "$";
        _Xml_Recpt_String += " DD_SERVICE_BRANCH_ID=$" + 0 + "$";
        _Xml_Recpt_String += " DD_SERVICE_BANK_REV_NO=$" + 1 + "$";
        _Xml_Recpt_String += " DD_SERVICE_BRANCH_REV_NO=$" + 1 + "$";
        _Xml_Recpt_String += " REMARKS=$" + Remarks + "$";
        _Xml_Recpt_String += " SESSION_ID=$" + document.getElementById('' + ctrlcom + '_ReceiptControl2_HdnSessionID').value + "$";
        _Xml_Recpt_String += " CURR_ID=$" + hdncurrId + "$";
        _Xml_Recpt_String += " EX_RATE=$" + lblexchrate + "$";
        _Xml_Recpt_String += " ENTERED_AMOUNT=$" + lblAmount + "$";
        _Xml_Recpt_String += " TENDERED_AMOUNT=$" + lbltendcash + "$";
        _Xml_Recpt_String += " CHANGE_AMOUNT=$" + lblchange + "$";
        _Xml_Recpt_String += " CC_AUTH_CD=$" + AUTH_CD + "$";
        _Xml_Recpt_String += " DC_AUTH_CD=$" + "" + "$";
        _Xml_Recpt_String += " PAYMENT_COMM_ID=$" + newpaymentcommid + "$";
        _Xml_Recpt_String += " REC_TYPE_ID=$" + rec_type_id + "$";
        _Xml_Recpt_String += "  />"
        }
        //Credit Card
        else if (paymentmodeid == "4") {
        countrep++;
        _Xml_Recpt_String += "<FO_RECPAY_DET ";
        _Xml_Recpt_String += " TRANSACTION_DET_ID=$" + 0 + "$";
        _Xml_Recpt_String += " PAYMENT_MODE_ID=$" + paymentmodeid + "$";
        _Xml_Recpt_String += " AMOUNT=$" + lblconvertedamt + "$";
        _Xml_Recpt_String += " CC_CARD_NO=$" + lblcardno + "$";
        _Xml_Recpt_String += " CC_APPROVAL_NO=$" + '0' + "$";
        _Xml_Recpt_String += " CC_CARD_HOLDER_NAME=$" + chq_issue_name + "$";
        _Xml_Recpt_String += " CC_EDC_MACHINE=$" + '' + "$";
        _Xml_Recpt_String += " CC_CARD_TYPE_ID=$" + hdncardtypeId + "$";
        _Xml_Recpt_String += " CC_CARD_TYPE_REV_NO=$" + 1 + "$";
        _Xml_Recpt_String += " CC_ISSUE_BANK_NAME=$" + lblbankname + "$";
        _Xml_Recpt_String += " CC_VALID_TO_DT=$" + lblcardexpdt + "$";
        _Xml_Recpt_String += " CC_CARD_HOLDER_ADDRESS=$" + 0 + "$";
        _Xml_Recpt_String += " REMARKS=$" + Remarks + "$";
        _Xml_Recpt_String += " SESSION_ID=$" + document.getElementById('' + ctrlcom + '_ReceiptControl2_HdnSessionID').value + "$";
        _Xml_Recpt_String += " CURR_ID=$" + hdncurrId + "$";
        _Xml_Recpt_String += " EX_RATE=$" + lblexchrate + "$";
        _Xml_Recpt_String += " ENTERED_AMOUNT=$" + lblAmount + "$";
        _Xml_Recpt_String += " TENDERED_AMOUNT=$" + lbltendcash + "$";
        _Xml_Recpt_String += " CHANGE_AMOUNT=$" + lblchange + "$";
        _Xml_Recpt_String += " CC_AUTH_CD=$" + AUTH_CD + "$";
        _Xml_Recpt_String += " DC_AUTH_CD=$" + "" + "$";
        _Xml_Recpt_String += " PAYMENT_COMM_ID=$" + newpaymentcommid + "$";
        _Xml_Recpt_String += " REC_TYPE_ID=$" + rec_type_id + "$";
        _Xml_Recpt_String += " CC_ISSUE_BANK_ID=$" + hdnbankid + "$";
        _Xml_Recpt_String += "/>";
        }
        //Debit Card
        else if (paymentmodeid == "5") {
        countrep++;
        _Xml_Recpt_String += "<FO_RECPAY_DET ";
        _Xml_Recpt_String += " TRANSACTION_DET_ID=$" + 0 + "$";
        _Xml_Recpt_String += " PAYMENT_MODE_ID=$" + paymentmodeid + "$";
        _Xml_Recpt_String += " AMOUNT=$" + lblconvertedamt + "$";
        _Xml_Recpt_String += " DC_CARD_NO=$" + lblcardno + "$";
        _Xml_Recpt_String += " DC_APPROVAL_NO=$" + '0' + "$";
        _Xml_Recpt_String += " DC_CARD_HOLDER_NAME=$" + chq_issue_name + "$";
        _Xml_Recpt_String += " DC_EDC_MACHINE=$" + '' + "$";
        _Xml_Recpt_String += " DC_CARD_TYPE_ID=$" + hdncardtypeId + "$";
        _Xml_Recpt_String += " DC_CARD_TYPE_REV_NO=$" + 1 + "$";
        _Xml_Recpt_String += " DC_ISSUE_BANK_NAME=$" + lblbankname + "$";
        _Xml_Recpt_String += " DC_VALID_TO_DT=$" + lblcardexpdt + "$";
        _Xml_Recpt_String += " DC_CARD_HOLDER_ADDRESS=$" + 0 + "$";
        _Xml_Recpt_String += " REMARKS=$" + Remarks + "$";
        _Xml_Recpt_String += " SESSION_ID=$" + document.getElementById('' + ctrlcom + '_ReceiptControl2_HdnSessionID').value + "$";
        _Xml_Recpt_String += " CURR_ID=$" + hdncurrId + "$";
        _Xml_Recpt_String += " EX_RATE=$" + lblexchrate + "$";
        _Xml_Recpt_String += " ENTERED_AMOUNT=$" + lblAmount + "$";
        _Xml_Recpt_String += " TENDERED_AMOUNT=$" + lbltendcash + "$";
        _Xml_Recpt_String += " CHANGE_AMOUNT=$" + lblchange + "$";
        _Xml_Recpt_String += " CC_AUTH_CD=$" + AUTH_CD + "$";
        _Xml_Recpt_String += " DC_AUTH_CD=$" + AUTH_CD + "$";
        _Xml_Recpt_String += " PAYMENT_COMM_ID=$" + newpaymentcommid + "$";
        _Xml_Recpt_String += " REC_TYPE_ID=$" + rec_type_id + "$";
        _Xml_Recpt_String += " DC_ISSUE_BANK_ID=$" + hdnbankid + "$";
        _Xml_Recpt_String += "/>";
        }
        //NEFT/RGFT
        else if (paymentmodeid == "8" || paymentmodeid == "16" || paymentmodeid == "13" || paymentmodeid == "7" || paymentmodeid == "9" || paymentmodeid == "6" || paymentmodeid == "17" || paymentmodeid == "10") {
        countrep++;
        _Xml_Recpt_String += "<FO_RECPAY_DET ";
        _Xml_Recpt_String += " TRANSACTION_DET_ID=$" + "0" + "$";
        _Xml_Recpt_String += " PAYMENT_MODE_ID=$" + paymentmodeid + "$";
        _Xml_Recpt_String += " AMOUNT=$" + (lblconvertedamt) + "$";
        _Xml_Recpt_String += " SESSION_ID=$" + document.getElementById('' + ctrlcom + '_ReceiptControl2_HdnSessionID').value + "$";
        _Xml_Recpt_String += " CURR_ID=$" + hdncurrId + "$";
        _Xml_Recpt_String += " EX_RATE=$" + lblexchrate + "$";
        _Xml_Recpt_String += " ENTERED_AMOUNT=$" + (lblAmount) + "$";
        _Xml_Recpt_String += " TENDERED_AMOUNT=$" + (lbltendcash) + "$";
        _Xml_Recpt_String += " CHANGE_AMOUNT=$" + (lblchange) + "$";
        _Xml_Recpt_String += " PAYMENT_COMM_ID=$" + paymentmodeid + "$";
        _Xml_Recpt_String += " OL_BANK_ID=$" + hdnbankid + "$";
        _Xml_Recpt_String += " OL_ACCOUNT_NO=$" + lblcardno + "$";
        _Xml_Recpt_String += " OL_AUTH_CD=$" + lblauthcode + "$";
        _Xml_Recpt_String += " OL_BANK_NAME=$" + ReplaceSplCharactor(lblbankname) + "$";
        _Xml_Recpt_String += " REC_TYPE_ID=$" + rec_type_id + "$";
        _Xml_Recpt_String += " CC_AUTH_CD=$" + AUTH_CD + "$";
        _Xml_Recpt_String += "  />"
        }
        //Advance Adjustment
        else if (paymentmodeid == "11") {
        countrep++;
        _Xml_Recpt_String += "<FO_RECPAY_DET ";
        _Xml_Recpt_String += " TRANSACTION_DET_ID=$" + 0 + "$";
        _Xml_Recpt_String += " PAYMENT_MODE_ID=$" + paymentmodeid + "$";
        _Xml_Recpt_String += " AMOUNT=$" + lblconvertedamt + "$";
        _Xml_Recpt_String += " BANK_ID=$" + lblcardno + "$";
        _Xml_Recpt_String += " EXPIRY_DT=$" + '' + "$";
        _Xml_Recpt_String += " AUTH_CODE=$" + '0' + "$";
        _Xml_Recpt_String += " CARD_NO=$" + '0' + "$";
        _Xml_Recpt_String += " BANK_NAME=$" + 0 + "$";
        _Xml_Recpt_String += " REMARKS=$" + Remarks + "$";
        _Xml_Recpt_String += " SESSION_ID=$" + document.getElementById('' + ctrlcom + '_ReceiptControl2_HdnSessionID').value + "$";
        _Xml_Recpt_String += " CURR_ID=$" + hdncurrId + "$";
        _Xml_Recpt_String += " EX_RATE=$" + lblexchrate + "$";
        _Xml_Recpt_String += " ENTERED_AMOUNT=$" + lblAmount + "$";
        _Xml_Recpt_String += " TENDERED_AMOUNT=$" + lbltendcash + "$";
        _Xml_Recpt_String += " CHANGE_AMOUNT=$" + lblchange + "$";
        _Xml_Recpt_String += " CC_AUTH_CD=$" + AUTH_CD + "$";
        _Xml_Recpt_String += " DC_AUTH_CD=$" + "" + "$";
        _Xml_Recpt_String += " PAYMENT_COMM_ID=$" + newpaymentcommid + "$";
        _Xml_Recpt_String += " REC_TYPE_ID=$" + rec_type_id + "$";
        _Xml_Recpt_String += "/>";
        }
        //Funds
        else if (paymentmodeid == "12") {
        countrep++;
        _Xml_Recpt_String += "<FO_RECPAY_DET ";
        _Xml_Recpt_String += " TRANSACTION_DET_ID=$" + 0 + "$";
        _Xml_Recpt_String += " PAYMENT_MODE_ID=$" + paymentmodeid + "$";
        _Xml_Recpt_String += " AMOUNT=$" + lblconvertedamt + "$";
        _Xml_Recpt_String += " BANK_ID=$" + lblcardno + "$";
        _Xml_Recpt_String += " EXPIRY_DT=$" + '' + "$";
        _Xml_Recpt_String += " AUTH_CODE=$" + '0' + "$";
        _Xml_Recpt_String += " CARD_NO=$" + '0' + "$";
        _Xml_Recpt_String += " BANK_NAME=$" + 0 + "$";
        _Xml_Recpt_String += " REMARKS=$" + ReplaceSplCharactor(Remarks) + "$";
        _Xml_Recpt_String += " SESSION_ID=$" + document.getElementById('' + ctrlcom + '_ReceiptControl2_HdnSessionID').value + "$";
        _Xml_Recpt_String += " CURR_ID=$" + hdncurrId + "$";
        _Xml_Recpt_String += " EX_RATE=$" + lblexchrate + "$";
        _Xml_Recpt_String += " ENTERED_AMOUNT=$" + lblAmount + "$";
        _Xml_Recpt_String += " TENDERED_AMOUNT=$" + lbltendcash + "$";
        _Xml_Recpt_String += " CHANGE_AMOUNT=$" + lblchange + "$";
        _Xml_Recpt_String += " CC_AUTH_CD=$" + AUTH_CD + "$";
        _Xml_Recpt_String += " DC_AUTH_CD=$" + "" + "$";
        _Xml_Recpt_String += " PAYMENT_COMM_ID=$" + newpaymentcommid + "$";
        _Xml_Recpt_String += " REC_TYPE_ID=$" + rec_type_id + "$";
        _Xml_Recpt_String += "/>";
        }
        // UPI,PAYTM,PHONEPE,GOOGLE PAY 
        else if (paymentmodeid == "19" || paymentmodeid == "20" || paymentmodeid == "21" || paymentmodeid == "22" || paymentmodeid == "23" || paymentmodeid == "24" || paymentmodeid == "25" || paymentmodeid == "26") {
        countrep++;
        _Xml_Recpt_String += "<FO_RECPAY_DET ";
        _Xml_Recpt_String += " TRANSACTION_DET_ID=$" + "0" + "$";
        _Xml_Recpt_String += " PAYMENT_MODE_ID=$" + paymentmodeid + "$";
        _Xml_Recpt_String += " AMOUNT=$" + lblconvertedamt + "$";
        _Xml_Recpt_String += " CC_CARD_NO=$" + lblcardno + "$";
        _Xml_Recpt_String += " CURR_ID=$" + hdncurrId + "$";
        _Xml_Recpt_String += " EX_RATE=$" + lblexchrate + "$";
        _Xml_Recpt_String += " REMARKS=$" + ReplaceSplCharactor(Remarks) + "$";
        _Xml_Recpt_String += " SESSION_ID=$" + document.getElementById('' + ctrlcom + '_ReceiptControl2_HdnSessionID').value + "$";
        _Xml_Recpt_String += " ENTERED_AMOUNT=$" + lblAmount + "$";
        _Xml_Recpt_String += " TENDERED_AMOUNT=$" + lbltendcash + "$";
        _Xml_Recpt_String += " CC_AUTH_CD=$" + lblauthcode + "$";
        _Xml_Recpt_String += "  />";
        }
        else {
        countrep++;
        _Xml_Recpt_String += "<FO_RECPAY_DET ";
        _Xml_Recpt_String += " TRANSACTION_DET_ID=$" + "0" + "$";
        _Xml_Recpt_String += " PAYMENT_MODE_ID=$" + paymentmodeid + "$";
        _Xml_Recpt_String += " AMOUNT=$" + lblAmount + "$";
        _Xml_Recpt_String += " REMARKS=$" + ReplaceSplCharactor(Remarks) + "$";
        _Xml_Recpt_String += " SESSION_ID=$" + document.getElementById('' + ctrlcom + '_ReceiptControl2_HdnSessionID').value + "$";
        _Xml_Recpt_String += " CURR_ID=$" + hdncurrId + "$";
        _Xml_Recpt_String += " EX_RATE=$" + lblexchrate + "$";
        _Xml_Recpt_String += " ENTERED_AMOUNT=$" + lblconvertedamt + "$";
        _Xml_Recpt_String += " TENDERED_AMOUNT=$" + lbltendcash + "$";
        _Xml_Recpt_String += " CHANGE_AMOUNT=$" + lblchange + "$";
        _Xml_Recpt_String += " CC_AUTH_CD=$" + "" + "$";
        _Xml_Recpt_String += " DC_AUTH_CD=$" + "" + "$";
        _Xml_Recpt_String += " PAYMENT_COMM_ID=$" + newpaymentcommid + "$";
        _Xml_Recpt_String += " REC_TYPE_ID=$" + rec_type_id + "$";
        _Xml_Recpt_String += " />";
        }
        });
        if (countrep == 0) {
        _Xml_Recpt_String += "<FO_RECPAY_DET ";
        _Xml_Recpt_String += " TRANSACTION_DET_ID=$" + 0 + "$";
        _Xml_Recpt_String += " PAYMENT_MODE_ID=$" + "1" + "$";
        _Xml_Recpt_String += " AMOUNT=$" + "0" + "$";
        _Xml_Recpt_String += " REMARKS=$" + Remarks + "$";
        _Xml_Recpt_String += " SESSION_ID=$" + document.getElementById('' + ctrlcom + '_ReceiptControl2_HdnSessionID').value + "$";
        _Xml_Recpt_String += " CURR_ID=$" + 0 + "$";
        _Xml_Recpt_String += " EX_RATE=$" + 0 + "$";
        _Xml_Recpt_String += " ENTERED_AMOUNT=$" + 0 + "$";
        _Xml_Recpt_String += " TENDERED_AMOUNT=$" + 0 + "$";
        _Xml_Recpt_String += " CHANGE_AMOUNT=$" + 0 + "$";
        _Xml_Recpt_String += " CC_AUTH_CD=$" + "" + "$";
        _Xml_Recpt_String += " DC_AUTH_CD=$" + "" + "$";
        _Xml_Recpt_String += " PAYMENT_COMM_ID=$" + newpaymentcommid + "$";
        _Xml_Recpt_String += " REC_TYPE_ID=$" + rec_type_id + "$";
        _Xml_Recpt_String += " />"
        }
        */
        _Xml_Recpt_String += FoRecPayDetAdvancedXml();
    }
    return _Xml_Recpt_String;
}



function SaveISRegisteredSuccessMessages(patid, tranid, regbillno, conbillid, opbillid, umr_no, trans_no, mlcstatus, op_reg_no, reg_bill_id, grp_bill_no) {
    console.log('patid :' + patid + 'tranid :' + tranid + 'regbillno :' + regbillno + 'conbillid :' + conbillid + 'umr_no :' + umr_no + 'trans_no :' + trans_no + 'mlcstatus :' + mlcstatus + 'op_reg_no :' + op_reg_no + 'reg_bill_id :' + reg_bill_id, 'grp_bill_no :' + grp_bill_no);
    document.getElementById('' + ctrlcom + '_hdnsvaeclickvalue').value = 2;
    var transid = tranid;
    var billid = conbillid; var _reportPath = '';
    var billno = regbillno;
    var transno = trans_no;
    umrno = document.getElementById('' + ctrlcom + '_umrPatientDetails_Umrlookup_txtSearchControl').value;
    $('#' + ctrlcom + '_hdn_out_reg_no').val(op_reg_no);
    $('#' + ctrlcom + '_hdnout_reg_bill_id').val(reg_bill_id);


    var con_bill_no = '';
    var conbilllenght = conbillid.split(',').length;
    var count = 0;
    for (i = 0; i < regbillno.split(',').length; i++) {
        if (conbilllenght > 0) {
            if (conbilllenght == count) { break; }

            if (con_bill_no == '') { con_bill_no = regbillno.split(',')[i] } else {
                con_bill_no = con_bill_no + ',' + regbillno.split(',')[i]
            }
            count++

        }
    }


    if (reg_bill_id == "0" && ((conbillid != "0" && conbillid != "") || (opbillid != "0" && opbillid != ""))) {
        //        $('[id*=divPrints]')[0].style.display = 'block';
        //        document.getElementById('' + ctrlcom + '_chkPrints_0').disabled = true;
        //        document.getElementById('' + ctrlcom + '_chkPrints_1').disabled = true;
        //        document.getElementById('' + ctrlcom + '_chkPrints_5').disabled = true;
        //        document.getElementById('' + ctrlcom + '_chkPrints_6').disabled = true;

        document.getElementById('' + ctrlcom + '_hdntrans_id').value = transid;
        document.getElementById('' + ctrlcom + '_hdnbill_no').value = con_bill_no;
        document.getElementById('' + ctrlcom + '_hdnUmrNo').value = umr_no;
        document.getElementById('' + ctrlcom + '_hdnPrintConBillId').value = billid;
        document.getElementById('' + ctrlcom + '_hdnPrintOPBillId').value = opbillid;
        document.getElementById('' + ctrlcom + '_hdn_out_grp_bill_no').value = grp_bill_no;
        _xmlCorpRef = '';
        _xmlCorpReg = '';
        $(".smessagebox").scustommessagebox(1, "Success", "Saved successfully <br>(" + billno + "/<br>" + transno + "). Click OK to get Report", ReportNoalert, billid + '+' + transid + '+' + opbillid + '+' + billno + '+' + umrno, ReportNoalert);

    }
    else if (conbillid != "0" && conbillid != "") {
        _xmlCorpRef = '';
        _xmlCorpReg = '';
        $(".smessagebox").scustommessagebox(1, "Success", "Saved successfully <br>(" + billno + "/<br>" + transno + "). Click OK to get Report", ReportNoalert, billid + '+' + transid + '+' + opbillid + '+' + billno + '+' + umrno, ReportNoalert);
    } else {
        _xmlCorpRef = '';
        _xmlCorpReg = '';
        $(".smessagebox").scustommessagebox(1, "Success", "Saved successfully <br>(" + billno + "/<br>" + transno + "). Click OK to get Report", ReportNoalert, billid + '+' + transid + '+' + opbillid, ReportNoalert);
    }
}

function ReportConsolidateprint(value) {
    PrintSelection();
}

function SaveISRegisteredSuccessMessages1(patid, tranid, regbillno, conbillid, opbillid, umr_no, trans_no, mlcstatus, op_reg_no, reg_bill_id, con_bill_no) {
    var transid = tranid;
    var billid = conbillid; var _reportPath = '';
    var billno = regbillno;
    var transno = trans_no;
    var sessionID = document.getElementById('' + ctrlcom + '_ReceiptControl2_HdnSessionID').value;
    $('#' + ctrlcom + '_hdn_out_reg_no').val(op_reg_no);
    $('#' + ctrlcom + '_hdnout_reg_bill_id').val(reg_bill_id);
    var value = billid + '+' + transid + '+' + opbillid + '+' + con_bill_no + '+' + umr_no;
    if (conbillid != "0" && conbillid != "") {
        ReportConsOkalert1(value);
        // window.open("barcode://OPC-" + billid + '-' + transid + '-' + sessionID);
    }
    else {
        ReportConsOkalert(value);
        //        window.open("barcode://OPB-" + opbillid + '-' + transid + '-' + sessionID);
    }

}
var paramConBillvalues;
function ReportConsOkalert1(value) {
    document.getElementById('' + ctrlcom + '_hdnBill_ID').value = value.split('+')[0];
    document.getElementById('' + ctrlcom + '_hdntrans_id').value = value.split('+')[1];
    document.getElementById('' + ctrlcom + '_hdnrptbill_id').value = value.split('+')[2];
    document.getElementById('' + ctrlcom + '_hdnbill_no').value = value.split('+')[3];
    document.getElementById('' + ctrlcom + '_hdnUmrNo').value = value.split('+')[4];
    //$find('ctl00_ContentPlaceHolder1_ModelPopBarcode1').show();
    //    document.getElementById('' + ctrlcom + '_RadioButtonList1_0').checked = true;
    //    Prescription();
    $('[id*=pnlBarCode2]')[0].style.display = 'block';
    btnokPrescription.focus();
    return false;
}
function Prescription() {
    console.log('Prescription');
    var _bill_id = document.getElementById('' + ctrlcom + '_hdnBill_ID').value;
    var umr_no = document.getElementById('' + ctrlcom + '_hdnUmrNo').value;
    var _tran_id = document.getElementById('' + ctrlcom + '_hdntrans_id').value;
    var _bill_no = document.getElementById('' + ctrlcom + '_hdnbill_no').value;
    var _dt_fmt = "dd-MMM-yyyy";
    var checkStatus = "";
    var authorized_user = "";
    var op_billid = document.getElementById('' + ctrlcom + '_hdnrptbill_id').value;
    if (op_billid == undefined || op_billid == "" || op_billid == "undefinwed") { op_billid = "0"; }
    var _pat_id = document.getElementById('' + ctrlcom + '_umrPatientDetails_hdnPatientid').value;
    var bprtsetting = document.getElementById('' + ctrlcom + '_hdnBothPrintSetting').value;
    var conprtsetting = document.getElementById('' + ctrlcom + '_hdnConsPrintSetting').value;
    /*var datefmt = document.getElementById('' + ctrlcom + '_hdnDateFmt').value;*/
    var chk_IsReg = document.getElementById('' + ctrlcom + '_chk_old').checked;
    if (chk_IsReg == true) {
        chk_IsReg = "Y";
        document.getElementById('' + ctrlcom + '_RadioButtonList1_0').checked = false;
        document.getElementById('' + ctrlcom + '_RadioButtonList1_1').checked = true;
        ctl00_ContentPlaceHolder1_RadioButtonList1_0.disabled = true;

        document.getElementById('' + ctrlcom + '_chkReglbl_0').checked = false;
        document.getElementById('' + ctrlcom + '_chkReglbl_0').disabled = true;
    }
    else { chk_IsReg = "N"; ctl00_ContentPlaceHolder1_RadioButtonList1_0.disabled = false; }
    if (document.getElementById('' + ctrlcom + '_chk_old').checked == true) {
        var Pat_ID = document.getElementById('' + ctrlcom + '_umrPatientDetails_hdnPatientid').value;
    } else {
        var Pat_ID = document.getElementById('' + ctrlcom + '_hdnPatientid').value;
    }
    var _hdnNoOfCopies = document.getElementById('' + ctrlcom + '_hdnNoOfCopies').value;
    var pattype = document.getElementById('' + ctrlcom + '_uccorporate_ddlPaymentBy').value;
    var pkg_chk_req = $('#' + ctrlcom + '_UCServices_hdnpkg_print_req').val();
    if (document.getElementById('' + ctrlcom + '_RadioButtonList1_0').checked == true) {
        var Prec_id = 3;
    } else if (document.getElementById('' + ctrlcom + '_RadioButtonList1_1').checked == true) {
        var Prec_id = 1;
    }
    else
        var Prec_id = 2;
    document.getElementById('' + ctrlcom + '_hdnprescreportname').value = '';
    if (_bill_id != '' && _bill_id != 0) {
        for (i = 0; i < _bill_id.split(',').length; i++) {
            GetConsReportName1(_bill_id.split(',')[i], 1);
        }
    }
    if (document.getElementById('' + ctrlcom + '_hdnBothPrintSetting').value != 2) { op_billid = 0 }
    //GetConsReportName1(_bill_id, Prec_id);
    var PrescReportName = document.getElementById('' + ctrlcom + '_hdnprescreportname').value;
    /* GetAsync(
    "Private/FrontOffice/OP_Quick_Grid.aspx/PriscriptionPrint",
    { Bill_ID: _bill_id, Tran_ID: _tran_id, Bill_NO: _bill_no, checkStatus: checkStatus, _pat_id: _pat_id, _dt_fmt: _dt_fmt, umr_no: umr_no, PrescReportName: PrescReportName },
    function (_path) {
    _path = _path.d;
    window.open(_path);
    },
    function (jqXHR, textStatus, errorThrown) {
    });*/

    var chkPrints = [];
    if (document.getElementById('' + ctrlcom + '_chkReglbl_0').checked) {
        chkPrints.push(1);
    }
    else {
        chkPrints.push(0);
    }
    var _grpbillno = document.getElementById('' + ctrlcom + '_hdn_out_grp_bill_no').value;
    GetAsync(
                "Private/FrontOffice/OPDBill.aspx/ConsultationReport",
                { Tid: _tran_id, PatientId: Pat_ID, BothPrintSetting: conprtsetting, PatType: pattype, DtFrmt: _dt_fmt, billid: _bill_id, opbillid: op_billid, hdnNoOfCopies: _hdnNoOfCopies, pkg_chk_req: pkg_chk_req, PrescReportName: PrescReportName, chk_IsReg: chk_IsReg, grpbillno: _grpbillno, Prec_Id: Prec_id, chkPrints: chkPrints, UmrNO: umr_no },
                function (Jdata) {

                    var _path = Jdata.d.split('$%$')[0];
                    var new_umr_no = Jdata.d.split('$%$')[1];
                    var foodnbev = $('#' + ctrlcom + '_UCServices_hdnfoodandbev').val();
                    if (foodnbev != '') {
                        var sub_food = foodnbev.split(';');
                        var item_names_nclude = '';
                        for (var j = 1; j < sub_food.length; j++) {
                            var items_sub = sub_food[j].split(',');
                            var item_id = items_sub[0];
                            var item_group = items_sub[1];
                            var item_qty = items_sub[2];
                            for (var qty = 0; qty < item_qty; qty++) {
                                item_names_nclude = item_names_nclude + '*12-' + item_id;
                            }
                        }
                        window.open(document.getElementById('' + ctrlcom + '_hdnbarcodepath').value + item_names_nclude);
                    }
                    // _path = _path.d;
                    for (var i = 0; i < _path.split(',').length - 1; i++) {
                        if (_path.split(',')[i] != '' && _path.split(',')[i] != '../Reports/HIMSReportViewer.aspx?count=2&rptPath=/HIMSReprots/SUB_Service_Requisition_Slip&tid=0')
                            window.open(_path.split(',')[i]);
                        // window.open("barcode://L-" + _bill_no.split(',')[i]);
                    }
                    var reg_type = $('#' + ctrlcom + '_hdnregtypemain').val();
                    if (reg_type == undefined || reg_type == null || reg_type == '') { reg_type = 2; }
                    //window.location.href = "OPDBill.aspx?reg_type=" + reg_type + "&DOC_FORM_CD=OPDREGBILL" + "&" + "&DOC_ID=2354";
                    document.getElementById('' + ctrlcom + '_hdnispatientbaneer').value = 'N';
                    $('#' + ctrlcom + '_hdnregtypemain').val(2);
                    ClearAllTransactionDetails1();
                    document.getElementById('' + ctrlcom + '_ReceiptControl2_chkismultiple').checked = false;
                    OnMultipleDiscGrid();
                    AllClearPopUp();
                    EnableKeys();
                    _RegXml = ''; _Cnsltxml = ''; _recpayxml = ''; _isQuickreg = 'N'; UmrNO = ''; Pat_ID = ''; BType = '';
                    _PaidAmnt = 0; _RegPaidAmnt = 0; _ConsPaidAmnt = 0; PAYMENT_TYPE_ID = ''; CnsCount = 0;
                    b_cmp_net = 0; b_cmp_grs_amt = 0; b_cmp_cnc_amt = 0; b_cmp_pct = 0;
                    c_cmp_net = 0; c_cmp_grs_amt = 0; c_cmp_cnc_amt = 0; c_cmp_pct = 0;
                    referral_save_count = ''; Rfrl_Ltr_Id = '';
                    _app_pat_id = 0; __apptID = 0;
                    _post_cons_ref_id = '0'; doc_rev_no = '0'; ff_doc_id = '0';
                    OrderingPhyCount = 0; fobillamount = 0;
                    $('[id*=pnlBarCode2]')[0].style.display = 'none';

                    document.getElementById('' + ctrlcom + '_txtumrno').value = new_umr_no;
                    return false;
                },
                function (jqXHR, textStatus, errorThrown) {
                });
    return false;
}


function ReportConsOkalert(value) {
    console.log('ReportConsOkalert - 1');
    var Prec_Id = '0';
    var transid = value.split('+')[1];
    var billid = value.split('+')[0];
    var op_billid = value.split('+')[2];
    var bprtsetting = document.getElementById('' + ctrlcom + '_hdnBothPrintSetting').value;
    var conprtsetting = document.getElementById('' + ctrlcom + '_hdnConsPrintSetting').value;
    var datefmt = document.getElementById('' + ctrlcom + '_hdnDateFmt').value;
    var chk_IsReg = document.getElementById('' + ctrlcom + '_chk_old').checked;
    if (chk_IsReg == true) { chk_IsReg = "Y"; }
    else { chk_IsReg = "N"; }
    if (document.getElementById('' + ctrlcom + '_chk_old').checked == true) {
        var Pat_ID = document.getElementById('' + ctrlcom + '_umrPatientDetails_hdnPatientid').value;
    } else {
        var Pat_ID = document.getElementById('' + ctrlcom + '_hdnPatientid').value;
    }
    /*   var UmrNO = document.getElementById('' + ctrlcom + '_umrPatientDetails_Umrlookup_txtSearchControl').value;*/
    var _hdnNoOfCopies = document.getElementById('' + ctrlcom + '_hdnNoOfCopies').value;
    var pattype = document.getElementById('' + ctrlcom + '_uccorporate_ddlPaymentBy').value;
    var pkg_chk_req = $('#' + ctrlcom + '_UCServices_hdnpkg_print_req').val();
    if (billid != '' && billid != 0) {
        for (i = 0; i < billid.split(',').length; i++) {
            GetConsReportName1(billid.split(',')[i], 1);
        }
    }
    var _grpbillno = document.getElementById('' + ctrlcom + '_hdn_out_grp_bill_no').value;
    if (document.getElementById('' + ctrlcom + '_hdnBothPrintSetting').value != 2) { op_billid = 0 }
    var PrescReportName = document.getElementById('' + ctrlcom + '_hdnprescreportname').value;
    PrescReportName = PrescReportName; //.substring(0, PrescReportName.length - 1);
    var chkPrints = [];
    GetNonAsync(
                "Private/FrontOffice/OPDBill.aspx/ConsultationReport",
                { Tid: transid, PatientId: Pat_ID, BothPrintSetting: conprtsetting, PatType: pattype, DtFrmt: datefmt, billid: billid, opbillid: op_billid, hdnNoOfCopies: _hdnNoOfCopies, pkg_chk_req: pkg_chk_req, PrescReportName: PrescReportName, chk_IsReg: chk_IsReg, grpbillno: _grpbillno, Prec_Id: Prec_Id, chkPrints: chkPrints, UmrNO: '' },
                function (Jdata) {


                    var _path = Jdata.d.split('$%$')[0];
                    var new_umr_no = Jdata.d.split('$%$')[1];
                    var foodnbev = $('#' + ctrlcom + '_UCServices_hdnfoodandbev').val();
                    if (foodnbev != '') {
                        var sub_food = foodnbev.split(';');
                        var item_names_nclude = '';
                        for (var j = 1; j < sub_food.length; j++) {
                            var items_sub = sub_food[j].split(',');
                            var item_id = items_sub[0];
                            var item_group = items_sub[1];
                            var item_qty = items_sub[2];
                            for (var qty = 0; qty < item_qty; qty++) {
                                item_names_nclude = item_names_nclude + '*12-' + item_id;
                            }
                        }
                        window.open(document.getElementById('' + ctrlcom + '_hdnbarcodepath').value + item_names_nclude);
                    }
                    for (var i = 0; i < _path.split(',').length - 1; i++) {
                        if (_path.split(',')[i] != '' && _path.split(',')[i] != '../Reports/HIMSReportViewer.aspx?count=2&rptPath=/HIMSReprots/SUB_Service_Requisition_Slip&tid=0')
                            window.open(_path.split(',')[i]);
                    }

                    var reg_type = $('#' + ctrlcom + '_hdnregtypemain').val();
                    if (reg_type == undefined || reg_type == null || reg_type == '') { reg_type = 2; }
                    document.getElementById('' + ctrlcom + '_hdnispatientbaneer').value = 'N';
                    $('#' + ctrlcom + '_hdnregtypemain').val(2);
                    ClearAllTransactionDetails1();
                    document.getElementById('' + ctrlcom + '_ReceiptControl2_chkismultiple').checked = false;
                    OnMultipleDiscGrid();
                    AllClearPopUp();
                    EnableKeys();
                    _RegXml = ''; _Cnsltxml = ''; _recpayxml = ''; _isQuickreg = 'N'; UmrNO = ''; Pat_ID = ''; BType = '';
                    _PaidAmnt = 0; _RegPaidAmnt = 0; _ConsPaidAmnt = 0; PAYMENT_TYPE_ID = ''; CnsCount = 0;
                    b_cmp_net = 0; b_cmp_grs_amt = 0; b_cmp_cnc_amt = 0; b_cmp_pct = 0;
                    c_cmp_net = 0; c_cmp_grs_amt = 0; c_cmp_cnc_amt = 0; c_cmp_pct = 0;
                    referral_save_count = ''; Rfrl_Ltr_Id = '';
                    _app_pat_id = 0; __apptID = 0;
                    _post_cons_ref_id = '0'; doc_rev_no = '0'; ff_doc_id = '0';
                    OrderingPhyCount = 0; fobillamount = 0;
                    document.getElementById('' + ctrlcom + '_txtumrno').value = new_umr_no;
                    return false;
                },
                function (jqXHR, textStatus, errorThrown) {
                });
}
function ReportNoalert() {
    var reg_type = $('#' + ctrlcom + '_hdnregtypemain').val();
    if (reg_type == undefined || reg_type == null || reg_type == '') { reg_type = 2; }

    // window.location.href = "OPDBill.aspx?reg_type=" + reg_type + "&DOC_FORM_CD=OPDREGBILL" + "&" + "&DOC_ID=2354";
    document.getElementById('' + ctrlcom + '_hdnispatientbaneer').value = 'N';

    ClearAllTransactionDetails1();
    document.getElementById('' + ctrlcom + '_ReceiptControl2_chkismultiple').checked = false;
    OnMultipleDiscGrid();
    AllClearPopUp();
    EnableKeys();
    _RegXml = ''; _Cnsltxml = ''; _recpayxml = ''; _isQuickreg = 'N'; UmrNO = ''; Pat_ID = ''; BType = '';
    _PaidAmnt = 0; _RegPaidAmnt = 0; _ConsPaidAmnt = 0; PAYMENT_TYPE_ID = ''; CnsCount = 0;
    b_cmp_net = 0; b_cmp_grs_amt = 0; b_cmp_cnc_amt = 0; b_cmp_pct = 0;
    c_cmp_net = 0; c_cmp_grs_amt = 0; c_cmp_cnc_amt = 0; c_cmp_pct = 0;
    referral_save_count = ''; Rfrl_Ltr_Id = '';
    _app_pat_id = 0; __apptID = 0;
    _post_cons_ref_id = '0'; doc_rev_no = '0'; ff_doc_id = '0';
    OrderingPhyCount = 0;
    umr_new_code();
}
function GetConsReportName(obj) {
    GetNonAsync(
    "Private/FrontOffice/OpBilling/OPConsultation1.aspx/GetPrescriptionReportName",
    { billid: obj },
    function (data) {
        if (data != "") {
            document.getElementById('' + ctrlcom + '_hdnprescreportname').value = data.d;
        }
    },
    function (jqXHR, textStatus, errorThrown) {
    });
}
function GetConsReportName1(obj, Prec_id) {
    GetNonAsync(
    "Private/FrontOffice/OpBilling/OPConsultation1.aspx/GetPrescriptionReportName1",
    { billid: obj, Prec_id: Prec_id },
    function (data) {
        if (data != "") {

            if (document.getElementById('' + ctrlcom + '_hdnprescreportname').value == "") {
                document.getElementById('' + ctrlcom + '_hdnprescreportname').value = data.d;
            } else {
                document.getElementById('' + ctrlcom + '_hdnprescreportname').value = document.getElementById('' + ctrlcom + '_hdnprescreportname').value + ',' + data.d;
            }


        }
    },
    function (jqXHR, textStatus, errorThrown) {
    });
}


function setProperDecimalsValtwo(ActualVal) {
    if (ActualVal == undefined || ActualVal == null || ActualVal == '') { ActualVal = 0; }
    var v = 2;
    if (v == '' || v == null || v == undefined) { v = 0; }
    v = parseInt(v);
    var power = Math.pow(10, v || 0);
    var ActualVal = String(Math.round(ActualVal * power) / power);
    if ((ActualVal.indexOf('.') + 1) == 0) {
        ActualVal = ActualVal;
    }
    return ActualVal;
}