function EmployeeDetails(data) {
    document.getElementById('ctl00_ContentPlaceHolder1_ucEmployee_txtSearchControl').value = data["_lktext"]
    document.getElementById('ctl00_ContentPlaceHolder1_hdnemployee').value = data.ID;
    document.getElementById('ctl00_ContentPlaceHolder1_hdnemployee_Name').value = data["_lktext"]
}
function pageLoad() {

    var AdmnNo = document.getElementById('ctl00_ContentPlaceHolder1_hdnadmnno').value;
    AssignIPValuesCls(AdmnNo);
    $('ctl00_ContentPlaceHolder1_UCHeaderControl_imgpro').hide();
}
function NurseStation() {
    window.location = "Nursemanagements.aspx";
}
function OnIPSelection() { }
function Titlealert(Mode, Status, Msg) {
    if (Status == 'True') {
        if (Mode == '') {
            $(".smessagebox").scustommessagebox(1, "Patient Acuity System", "Saved Sucessfully", OnSuccessMsg, '');
        }
    }
}
function OnSuccessMsg() {

    if (document.getElementById('ctl00_ContentPlaceHolder1_hdnER').value == 'Y')
        window.location = '../FrontOffice/ER/ERList.aspx';
    else

        window.location = "Nursemanagements.aspx";
    // window.location.replace(_iniUrl + 'Private/NurseStation/PatientAcuitySystem.aspx');
}

function servicedtformat() {
    var grid = document.getElementById('ctl00_ContentPlaceHolder1_gvPatFlags');
    var hdnDateFormat = document.getElementById('ctl00_ContentPlaceHolder1_UCHeaderControl_hdnDateFormat').value;
    if (hdnDateFormat == undefined || hdnDateFormat == null || hdnDateFormat == "") { hdnDateFormat = "dd-MMM-yyyy"; }
    var hdnTimeFormat = document.getElementById('ctl00_ContentPlaceHolder1_UCHeaderControl_hdnTimeFormat').value;
    if (hdnTimeFormat == undefined || hdnTimeFormat == null || hdnTimeFormat == "") { hdnTimeFormat = "H:mm:ss"; }

    if (grid != null) {
        $('table[id$=gvPatFlags] tr:has(td)').each(function (e) {
            var StartDate = $(this).closest('tr').find('[id*=lblStartTime]').text();
            var StopDate = $(this).closest('tr').find('[id*=lblStopTime]').text();
            if (hdnDateFormat = "dd-MMM-yyyy HH:mm:ss tt") {
                if (StartDate != "")
                    $(this).closest('tr').find('[id*=lblStartTime]').text(new Date(StartDate).format(hdnDateFormat));
                if (StopDate != "")
                    $(this).closest('tr').find('[id*=lblStopTime]').text(new Date(StopDate).format(hdnDateFormat));
            }
        });
    }
}

function changedata(obj) {
    if (obj == 1) {
        if (document.getElementById('ctl00_ContentPlaceHolder1_chk1').checked == true) {
            if (document.getElementById('ctl00_ContentPlaceHolder1_ddlsubflgs').value == "--select--" || document.getElementById('ctl00_ContentPlaceHolder1_ddlsubflgs').value == "") {

                $(".stoast").toastText("warning", "Please Select Status!.", 5, 3);
                document.getElementById('ctl00_ContentPlaceHolder1_chk1').checked = false;
                document.getElementById('ctl00_ContentPlaceHolder1_txtAct_Comments').focus();
                return false;
            }
        }
    }

    if (obj == 2) {

        if (document.getElementById('ctl00_ContentPlaceHolder1_radiostopstart_0').checked == false && document.getElementById('ctl00_ContentPlaceHolder1_radiostopstart_1').checked == false) {

            $(".stoast").toastText("warning", "Please Select Start or Stop!.", 5, 3);
            document.getElementById('ctl00_ContentPlaceHolder1_chk2').checked = false
            document.getElementById('ctl00_ContentPlaceHolder1_txtNbm_Comments').focus();
            return false;

        }
    }

    if (obj == 3) {

        if (document.getElementById('ctl00_ContentPlaceHolder1_ddlinf').value == "0" || document.getElementById('ctl00_ContentPlaceHolder1_ddlinf').value == "") {
            $(".stoast").toastText("warning", "Required Infectuas!.", 5, 3);
            document.getElementById('ctl00_ContentPlaceHolder1_chk3').checked = false
            document.getElementById('ctl00_ContentPlaceHolder1_txt_inf_Reason').focus();
            return false;


        }
    }
    if (obj == 4) {

        if (document.getElementById('ctl00_ContentPlaceHolder1_Ddlmont').value == "--select--" || document.getElementById('ctl00_ContentPlaceHolder1_Ddlmont').value == "") {
            $(".stoast").toastText("warning", "Required Centraline monitoring!.", 5, 3);
            document.getElementById('ctl00_ContentPlaceHolder1_chk4').checked = false;
            return false;
        }
    }
    if (obj == 5) {

        if (document.getElementById('ctl00_ContentPlaceHolder1_txt_Drains_NoodDrains').value == "") {
            $(".stoast").toastText("warning", "Please Enter No Of Drains!.", 5, 3);
            document.getElementById('ctl00_ContentPlaceHolder1_chk5').checked = false
            document.getElementById('ctl00_ContentPlaceHolder1_txt_Drains_NoodDrains').focus();
            return false;
        }
    }
    if (obj == 7) {

        if (document.getElementById('ctl00_ContentPlaceHolder1_RadioButtonList1_0').checked == false && document.getElementById('ctl00_ContentPlaceHolder1_RadioButtonList1_1').checked == false) {
            $(".stoast").toastText("warning", "Please Select Yes  or No!.", 5, 3);
            document.getElementById('ctl00_ContentPlaceHolder1_chk6').checked = false
            document.getElementById('ctl00_ContentPlaceHolder1_TextBox5').focus();
            return false;

        }
    }
    if (obj == 6) {

        if (document.getElementById('ctl00_ContentPlaceHolder1_tbtnlstvaccination_0').checked == false && document.getElementById('ctl00_ContentPlaceHolder1_tbtnlstvaccination_1').checked == false) {

            $(".stoast").toastText("warning", "Please Select Yes or No!.", 5, 3);
            document.getElementById('ctl00_ContentPlaceHolder1_chk7').checked = false
            document.getElementById('ctl00_ContentPlaceHolder1_txtvaccinationcomments').focus();
            return false;

        }
    }
}
function Mandatoryfields(obj) {
    var i = 0;
    if (document.getElementById('ctl00_ContentPlaceHolder1_IPPatientDtls1_ucAdmission_txtSearchControl').value == "" && document.getElementById('ctl00_ContentPlaceHolder1_hdnadmnId').value) {
        $(".stoast").toastText("warning", "Admn Number Not Selected!.", 5, 3);
        return false;
    }
    for (var j = 1; j <= 7; j++) {
        chk = "ctl00_ContentPlaceHolder1_chk" + j;
        if (document.getElementById(chk).checked == true) {
            i = 1;

        }
    }
    if (i == 0) {
        $(".stoast").toastText("warning", "Please Select Any One Acuity To Save!.", 5, 3);
        return false;
    }

    return ConfirmationToasterForSave_NEW(obj, '', "PatientAcuity System");

}


function ConfirmationToasterForSave_NEW(obj, param, form_name) {
    DisableKeys();
    $(".smessagebox").scustommessagebox(2, form_name, "Do you want to Save the Record?", OnSuccessContinue, param, OnCancelConfirmation);
    return false;
}

function OnSuccessContinue() {
    saveXml();
    __doPostBack($('[id*=imgbtnSave]').attr("name"), "");
}

function ModifyEnterKeyPressAsTab() {
    if (window.event && window.event.keyCode == 13) {
        window.event.keyCode = 9;
    }
}
function saveXml() {
    
    var PATIENT_ID = document.getElementById('ctl00_ContentPlaceHolder1_hdnpatId').value;
    var ADMISSION_ID = document.getElementById('ctl00_ContentPlaceHolder1_hdnadmnId').value;
    // var CLINICAL_FLAG_ID = document.getElementById('ctl00_ContentPlaceHolder1_hdnHTMLstring').value;
    var CLINICAL_SUBFLAG_ID = 0;
    var START_BY = document.getElementById('ctl00_ContentPlaceHolder1_hdnuserid').value;
    var STOP_BY = document.getElementById('ctl00_ContentPlaceHolder1_hdnuserid').value;
    var UMR_NO = document.getElementById('ctl00_ContentPlaceHolder1_IPPatientDtls1_ucAdmission_txtSearchControl').value;
    var START_TIME = "";
    var STOP_TIME = "";
    var chk;
    var COMMENTS = "";
    var REASON = "";
    var NO_OF_DRAINS = document.getElementById('ctl00_ContentPlaceHolder1_txt_Drains_NoodDrains').value;
    var NAME_OF_DRAIN = document.getElementById('ctl00_ContentPlaceHolder1_txt_Name_Drain').value;
    var _xmlStr = "<root>";
    for (var j = 1; j <= 7; j++) {
        var CLINICAL_FLAG_ID = j;
        chk = "ctl00_ContentPlaceHolder1_chk" + j;
        if (document.getElementById(chk).checked == true) {
            if (j == 1) {
                COMMENTS = document.getElementById('ctl00_ContentPlaceHolder1_txtAct_Comments').value;
                CLINICAL_SUBFLAG_ID = document.getElementById('ctl00_ContentPlaceHolder1_ddlsubflgs').value;
                REASON = "";
                NO_OF_DRAINS = "";
                NAME_OF_DRAIN = "";
                STOP_TIME = "";
                START_TIME = "";
            }
            if (j == 2) {
                COMMENTS = document.getElementById('ctl00_ContentPlaceHolder1_txtNbm_Comments').value;
                REASON = "";
                NO_OF_DRAINS = "";
                NAME_OF_DRAIN = "";
                if (document.getElementById('ctl00_ContentPlaceHolder1_radiostopstart_0').checked == true) {
                    START_TIME = document.getElementById('ctl00_ContentPlaceHolder1_hdnstart_time').value;
                    STOP_TIME = "";
                }
                if (document.getElementById('ctl00_ContentPlaceHolder1_radiostopstart_1').checked == true) {
                    STOP_TIME = document.getElementById('ctl00_ContentPlaceHolder1_hdnstart_time').value;
                    START_TIME = "";
                }
                CLINICAL_SUBFLAG_ID = 0;
            }
            if (j == 3) {
                REASON = document.getElementById('ctl00_ContentPlaceHolder1_txt_inf_Reason').value;
                COMMENTS = $('#ctl00_ContentPlaceHolder1_ddlinf').find('option:selected').text();
                NO_OF_DRAINS = "";
                NAME_OF_DRAIN = "";
                STOP_TIME = "";
                START_TIME = "";
                CLINICAL_SUBFLAG_ID = 0;
            }
            if (j == 4) {
                REASON = document.getElementById('ctl00_ContentPlaceHolder1_txt_cen_Reason').value;
                CLINICAL_SUBFLAG_ID = document.getElementById('ctl00_ContentPlaceHolder1_Ddlmont').value;
                //COMMENTS = document.getElementById('ctl00_ContentPlaceHolder1_txtx_cen_NurseName').value
                COMMENTS = document.getElementById('ctl00_ContentPlaceHolder1_hdnemployee_Name').value
                NO_OF_DRAINS = "";
                NAME_OF_DRAIN = "";
                if (document.getElementById('ctl00_ContentPlaceHolder1_RadioButtonList2_0').checked == true) {
                    STOP_TIME = "";
                    START_TIME = document.getElementById('ctl00_ContentPlaceHolder1_hdnstart_time').value;
                }
                if (document.getElementById('ctl00_ContentPlaceHolder1_RadioButtonList2_1').checked == true) {
                    START_TIME = "";
                    STOP_TIME = document.getElementById('ctl00_ContentPlaceHolder1_hdnstart_time').value;
                }
            }

            if (j == 5) {
                REASON = "";
                COMMENTS = "";
                NO_OF_DRAINS = document.getElementById('ctl00_ContentPlaceHolder1_txt_Drains_NoodDrains').value;
                NAME_OF_DRAIN = document.getElementById('ctl00_ContentPlaceHolder1_txt_Name_Drain').value;
                STOP_TIME = "";
                START_TIME = "";
                CLINICAL_SUBFLAG_ID = 0;
            }

//            if (j == 6) {
//                REASON = document.getElementById('ctl00_ContentPlaceHolder1_TextBox5').value;
//                if (document.getElementById('ctl00_ContentPlaceHolder1_RadioButtonList1_0').checked == true)
//                    COMMENTS = "Yes";
//                if (document.getElementById('ctl00_ContentPlaceHolder1_RadioButtonList1_1').checked == true)
//                    COMMENTS = "No";

//                // COMMENTS = "";
//                NO_OF_DRAINS = "";
//                NAME_OF_DRAIN = "";
//                STOP_TIME = "";
//                START_TIME = "";
//                CLINICAL_SUBFLAG_ID = 0;
//            }
            if (j == 6) {
                REASON = document.getElementById('ctl00_ContentPlaceHolder1_txtvaccinationcomments').value;
                if (document.getElementById('ctl00_ContentPlaceHolder1_tbtnlstvaccination_0').checked == true)
                    COMMENTS = "Yes";
                if (document.getElementById('ctl00_ContentPlaceHolder1_tbtnlstvaccination_1').checked == true)
                    COMMENTS = "No";
                NO_OF_DRAINS = "";
                NAME_OF_DRAIN = "";
                STOP_TIME = "";
                START_TIME = "";
                CLINICAL_SUBFLAG_ID = 0;


            }
            _xmlStr += "<ADT_PATIENT_CLINICAL_FLAGS";
            _xmlStr += " PAT_CLINICAL_FLAG_ID=$" + "0" + "$";
            _xmlStr += " PATIENT_ID=$" + PATIENT_ID + "$";
            _xmlStr += " ADMISSION_ID=$" + ADMISSION_ID + "$";
            _xmlStr += " CLINICAL_FLAG_ID=$" + CLINICAL_FLAG_ID + "$";
            _xmlStr += " CLINICAL_SUBFLAG_ID=$" + CLINICAL_SUBFLAG_ID + "$";
            _xmlStr += " START_BY=$" + START_BY + "$";
            _xmlStr += " STOP_BY=$" + STOP_BY + "$";
            _xmlStr += " UMR_NO=$" + UMR_NO + "$";
            _xmlStr += " START_TIME=$" + START_TIME + "$";
            _xmlStr += " STOP_TIME =$" + STOP_TIME + "$";
            _xmlStr += " COMMENTS =$" + COMMENTS + "$";
            _xmlStr += " REASON =$" + REASON + "$";
            _xmlStr += " NO_OF_DRAINS =$" + NO_OF_DRAINS + "$";
            _xmlStr += " NAME_OF_DRAIN =$" + NAME_OF_DRAIN + "$";
            if (document.getElementById('ctl00_ContentPlaceHolder1_hdnER').value == 'Y') {
                _xmlStr += " TRN_SOURCE_ID=$" + '2' + "$";
                _xmlStr += " ER_NO =$" + PATIENT_ID + "$";
            }
            else {
                _xmlStr += " TRN_SOURCE_ID=$" + '' + "$";
                _xmlStr += " ER_NO =$" + '' + "$";
            }

            _xmlStr += ">";
            _xmlStr += "</ADT_PATIENT_CLINICAL_FLAGS>";
        }

    }
    _xmlStr += "</root>";
    document.getElementById('ctl00_ContentPlaceHolder1_hdnHTMLstring').value = _xmlStr;
    console.log(_xmlStr);
    return false;
}    