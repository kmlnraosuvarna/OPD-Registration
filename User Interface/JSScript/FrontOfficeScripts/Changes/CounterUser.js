function Grid_Redirections() {
    window.location.href = _iniUrl +"Private/FrontOffice/CounterUserlist.aspx";
    return false;

}
function OnUser(input) {
    var a;
    var Username;
    var counterid;
    var countername;


    document.getElementById('ctl00_ContentPlaceHolder1_UCusers_txtSearchControl').value = input["_lktext"];
    if (input["_lktext"] == input.USER_NAME) {
        document.getElementById('ctl00_ContentPlaceHolder1_UCusers__hiddenID').value = input["USER_ID"];
        document.getElementById('ctl00_ContentPlaceHolder1_hdnUserId').value = input["USER_ID"];

    }
    else {
        document.getElementById('ctl00_ContentPlaceHolder1_UCusers__hiddenID').value = input["RESULT"].USER_ID;
        document.getElementById('ctl00_ContentPlaceHolder1_hdnUserId').value = input["RESULT"].USER_ID;
    }

    counterid = document.getElementById('ctl00_ContentPlaceHolder1_ddlcounter').value;
    Userid = document.getElementById('ctl00_ContentPlaceHolder1_hdnUserId').value
    Username = document.getElementById('ctl00_ContentPlaceHolder1_UCusers_txtSearchControl').value;
    var count = 0;
    $('table[id$=gvcounteruser] tr:has(td)').each(function (e) {
        a = $(this).closest('tr').find('[id*=txtUsername]').val();
        if (a == Username) {
            count++;
        }

    });


    if (count > 0) {
        $(".stoast").toastText("warning", "User Already Exists!.", 5, 3);
        document.getElementById('ctl00_ContentPlaceHolder1_UCusers_txtSearchControl').value = "";
        document.getElementById('ctl00_ContentPlaceHolder1_UCusers_txtSearchControl').focus();
        return false;
    }
    else {

        $('table[id$=gvcounteruser] tr:has(td)').each(function (e) {
            if ($(this).closest('tr').find('[id*=txtUsername]').val() == '') {
                $(this).closest('tr').find('[id*=txtUsername]').val(Username);
                $(this).closest('tr').find('[id*=hdnuser]').val(Userid);
                fn_AddFilterRow1(0, '');
            }
        });
    }
    var len = document.getElementById('ctl00_ContentPlaceHolder1_gvcounteruser').rows.length;
    if (len >= 2) {
        document.getElementById('ctl00_ContentPlaceHolder1_UCusers_txtSearchControl').value = "";
    }
    OnNullValue(document.getElementById('ctl00_ContentPlaceHolder1_UCusers_txtSearchControl'));


}

function OnDoctors(data) {
   
    var consultant = document.getElementById('ctl00_ContentPlaceHolder1_ucConsultant_txtSearchControl');
    $('#ctl00_ContentPlaceHolder1_hdnDoctorId').val(data.ID);
    if (data.DEPARTMENT_DESC != undefined) {
        $('#ctl00_ContentPlaceHolder1_ucConsultant_txtSearchControl').val(data._lktext + '-' + data.DEPARTMENT_DESC);
        $('#ctl00_ContentPlaceHolder1_ucConsultant__hiddenText').val(data._lktext + '-' + data.DEPARTMENT_DESC);
    }
    else {
        $('#ctl00_ContentPlaceHolder1_ucConsultant_txtSearchControl').val(data._lktext);
        $('#ctl00_ContentPlaceHolder1_ucConsultant__hiddenText').val(data._lktext);
    }

    counterid = document.getElementById('ctl00_ContentPlaceHolder1_ddlcounter').value;
    Doctorid = document.getElementById('ctl00_ContentPlaceHolder1_hdnDoctorId').value
    Doctorname = document.getElementById('ctl00_ContentPlaceHolder1_ucConsultant_txtSearchControl').value;
    var count = 0;
    $('table[id$=gvdoctor] tr:has(td)').each(function (e) {
        a = $(this).closest('tr').find('[id*=txtDoctor]').val();
        if (a == Doctorname) {
            count++;
        }

    });


    if (count > 0) {
        $(".stoast").toastText("warning", "This Doctor Is Already Exists!.", 5, 3);
        document.getElementById('ctl00_ContentPlaceHolder1_ucConsultant_txtSearchControl').value = "";
        document.getElementById('ctl00_ContentPlaceHolder1_ucConsultant_txtSearchControl').focus();
        return false;
    }
    else {

        $('table[id$=gvdoctor] tr:has(td)').each(function (e) {
            if ($(this).closest('tr').find('[id*=txtDoctor]').val() == '') {
                $(this).closest('tr').find('[id*=txtDoctor]').val(Doctorname);
                $(this).closest('tr').find('[id*=hdnDoctor]').val(Doctorid);
                fn_AddFilterRow2(0, '');
            }
        });
    }
    var len = document.getElementById('ctl00_ContentPlaceHolder1_gvdoctor').rows.length;
    if (len >= 2) {
        document.getElementById('ctl00_ContentPlaceHolder1_ucConsultant_txtSearchControl').value = "";
    }
    OnNullValue(document.getElementById('ctl00_ContentPlaceHolder1_ucConsultant_txtSearchControl'));


}
function pageLoad(sender, args) {
   
   
    

    if (getParameterByName("MODE") != "VIEW" && getParameterByName("MODE") != "EDIT") {
        onPageValidation();
        if (document.getElementById('ctl00_ContentPlaceHolder1_hdntype').value == "D") {
            $('#headeruser').hide();
            $('#gvcounteruser').hide();
            $('#divuser').hide();
            $('#headeruserr').hide();

        }
        else {
            $('#headerdoctor').hide();
            $('#gvdoctor').hide();
        }
    }
    if (getParameterByName("MODE") == "VIEW") {
        Editandviewdata();
        disabledAll();

    }
    if (getParameterByName("MODE") == "EDIT") {
        Editandviewdata();
        disabledAll();
    }
}

function disabledAll() {
   
        if (getParameterByName("MODE") == "VIEW") {
            $('[id$=ddlcounter]').attr('disabled', true);
    $('#ctl00_ContentPlaceHolder1_UCusers_txtSearchControl').attr('disabled', true);
    document.getElementById('lk_btn_ctl00_ContentPlaceHolder1_UCusers').disabled = true;
  
    gvServicesindex = document.getElementById('ctl00_ContentPlaceHolder1_gvcounteruser').rows.length - 1;

   
}
else if (getParameterByName("MODE") == "EDIT") {
    $('[id$=ddlcounter]').attr('disabled', true);
     }
   

}

function Editandviewdata() {
    var COUNTER_ID = getParameterByName("COUNTER_ID");
    $('#ctl00_ContentPlaceHolder1_ddlcounter').val(COUNTER_ID);
    $.ajax({
        type: "POST",
        url: "CounterUser.aspx/Counter_User",
        data: "{COUNTER_ID:" + COUNTER_ID + "}",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        async: false,
        error: function (jqXHR, textStatus, errorThrown) { alert("Error....."); },
        success: function (JData) {
            var data = JData;
            var gridid = $('#ctl00_ContentPlaceHolder1_gvcounteruser');

            $('table[id$=gvcounteruser] tr:has(td)').each(function (e) {

                if (data.d != null) {
                    for (var i = 0; i <= data.d.length - 1; i++) {

                        if (i == 0) {

                            $(this).closest('tr').find('[id*=txtUsername]').val(JData.d[i].USER_NAME);
                            $(this).closest('tr').find('[id*=hdnuser]').val(JData.d[i].USER_ID);

                        }
                        else {
                            if (i > 0) {

                                fn_AddFilterRow1(JData.d[i].USER_ID, JData.d[i].USER_NAME);
                            }
                        }
                    }
                    CNtrData = "1";
                }
                else {
                    CNtrData = "0";
                }

            });

        }

    });
    if (CNtrData != "0") {
        fn_AddFilterRow1(0, '');
        return false;
    }

}
function onPageValidation() {
    var _chkValidation = true;
    var _ctrls = new Array();
    _ctrls[0] = 'ctl00_ContentPlaceHolder1_ddlcounter';
    _ctrls[1] = 'ctl00_ContentPlaceHolder1_UCusers_txtSearchControl';
    _ctrls[2] = 'ctl00_ContentPlaceHolder1_ucConsultant_txtSearchControl';
    for (var i = 0; i < _ctrls.length; i++) {
        var ctrl = document.getElementById(_ctrls[i]);
        if (OnNullValue(ctrl) == false) {

            _chkValidation = false;
        }
    }
    return _chkValidation;
}

var hdnuserTEMP = "";
function CheckMandatoryfieldsData(obj) {
   

    if (document.getElementById('ctl00_ContentPlaceHolder1_ddlcounter').value == 0) {
        $(".stoast").toastText("warning", "Please select Counter Name!.", 2, 3);
        document.getElementById('ctl00_ContentPlaceHolder1_ddlcounter').focus();
        return false;
    }

    if (document.getElementById('ctl00_ContentPlaceHolder1_hdntype').value == "D") {
        var len = document.getElementById('ctl00_ContentPlaceHolder1_gvdoctor').rows.length;
        var id = document.getElementById('ctl00_ContentPlaceHolder1_hdnDoctorId').value;

        if (len <= 2) {

            if (document.getElementById('ctl00_ContentPlaceHolder1_ucConsultant_txtSearchControl').value == "") {
                $(".stoast").toastText("warning", "Please select Doctor!.", 2, 3);
                document.getElementById('ctl00_ContentPlaceHolder1_ucConsultant_txtSearchControl').focus();
                return false;
            }
        }

        len = len - 1;
        $("table[id$=gvdoctor] tr:has(td)").each(function (e) {

            hdnuserTEMP = "";
            for (var i = 0; i < len; i++) {


                var hdnsid = $('[id$=gvdoctor] tr:has(td)').filter(':eq(' + i + ')').find('input[type=hidden][id*=hdnDoctor]').val();
                if (hdnsid != undefined && hdnsid != '' && hdnsid != null && (i == 0)) {
                    hdnuserTEMP = hdnsid;
                }
                else if (hdnsid != undefined && hdnsid != '' && hdnsid != null && hdnsid != 0) {
                    hdnuserTEMP = hdnuserTEMP + ',' + hdnsid;
                }

            }
        });

        if (hdnuserTEMP != "") {
            document.getElementById('ctl00_ContentPlaceHolder1_hdnSaveAlert').value = hdnuserTEMP;
        }
    }
    else {
        var len = document.getElementById('ctl00_ContentPlaceHolder1_gvcounteruser').rows.length;
        var id = document.getElementById('ctl00_ContentPlaceHolder1_hdnUserId').value;
        if (len <= 2) {

            if (document.getElementById('ctl00_ContentPlaceHolder1_UCusers_txtSearchControl').value == "") {
                $(".stoast").toastText("warning", "Please select User!.", 2, 3);
                document.getElementById('ctl00_ContentPlaceHolder1_UCusers_txtSearchControl').focus();
                return false;
            }
        }

        len = len - 1;
        $("table[id$=gvcounteruser] tr:has(td)").each(function (e) {

            hdnuserTEMP = "";
            for (var i = 0; i < len; i++) {


                var hdnsid = $('[id$=gvcounteruser] tr:has(td)').filter(':eq(' + i + ')').find('input[type=hidden][id*=hdnuser]').val();
                if (hdnsid != undefined && hdnsid != '' && hdnsid != null && (i == 0)) {
                    hdnuserTEMP = hdnsid;
                }
                else if (hdnsid != undefined && hdnsid != '' && hdnsid != null && hdnsid != 0) {
                    hdnuserTEMP = hdnuserTEMP + ',' + hdnsid;
                }

            }
        });

        if (hdnuserTEMP != "") {
            document.getElementById('ctl00_ContentPlaceHolder1_hdnSaveAlert').value = hdnuserTEMP;
        }

    }

    if (document.getElementById('ctl00_ContentPlaceHolder1_hdntype').value == "D") {
        return ConfirmationToasterForSave(obj, '', "Counter Doctor");
    }
    else {
        return ConfirmationToasterForSave(obj, '', "Counter User");
    }
}

/*for Clearing data*/
function cleardata() {
    document.getElementById("ctl00_ContentPlaceHolder1_ddlcounter").value = 0;
    if (document.getElementById('ctl00_ContentPlaceHolder1_hdntype').value == "D") {
        document.getElementById("ctl00_ContentPlaceHolder1_ucConsultant_txtSearchControl").value = "";
        $('#ctl00_ContentPlaceHolder1_ucConsultant__hiddenID').val(0);
        $('#ctl00_ContentPlaceHolder1_ucConsultant__hiddenID').val('');
    }
    else {
        document.getElementById("ctl00_ContentPlaceHolder1_UCusers_txtSearchControl").value = "";
        $('#ctl00_ContentPlaceHolder1_UCusers__hiddenID').val(0);
        $('#ctl00_ContentPlaceHolder1_UCusers__hiddenID').val('');
    }
    onPageValidation();
    return false;

} /*for clearing grid data */
function Clearpopup(ev) {
   
    if (document.getElementById('ctl00_ContentPlaceHolder1_hdntype').value == "D") {
        var len = document.getElementById('ctl00_ContentPlaceHolder1_gvdoctor').rows.length;
        $("table[id$=gvdoctor] tr:has(td)").each(function (e) {

            for (var i = 0; i < len; i++) {
                if (i == 0)
                { }
                else {
                    $('[id$=gvdoctor] tr').filter(':eq(' + i + ')').remove();
                }
            }
        });
        document.getElementById('ctl00_ContentPlaceHolder1_hdnSaveAlert').value = "";
        fn_AddFilterRow2(0, '');
        AssignSno('0');
        return false;
    }
    else {
        var len = document.getElementById('ctl00_ContentPlaceHolder1_gvcounteruser').rows.length;
        $("table[id$=gvcounteruser] tr:has(td)").each(function (e) {

            for (var i = 0; i < len; i++) {
                if (i == 0)
                { }
                else {
                    $('[id$=gvcounteruser] tr').filter(':eq(' + i + ')').remove();
                }
            }
        });
        document.getElementById('ctl00_ContentPlaceHolder1_hdnSaveAlert').value = "";
        fn_AddFilterRow1(0, '');
        AssignSno('0');
        return false;
    }
}


function OnSuccessContinue() {
    __doPostBack($('[id*=imgbtnSave]').attr("name"), "");
}
function OnFailureContinue() {
    return false;
}
function OnSuccessMessage() {
    if (document.getElementById('ctl00_ContentPlaceHolder1_hdntype').value == "D") {
        $(".smessagebox").scustommessagebox(1, "Counter Doctor", "Saved Successfully", OnSuccessMsg);
    }
    else {
        $(".smessagebox").scustommessagebox(1, "Counter User", "Saved Successfully", OnSuccessMsg);
    }

}
function OnSuccessMsg() {
   
    if (document.getElementById('ctl00_ContentPlaceHolder1_hdntype').value == "D") {
        window.location.replace(_iniUrl + 'Private/FrontOffice/CounterUser.aspx?type=Doctor');
    }
    else {
        window.location.replace(_iniUrl + 'Private/FrontOffice/CounterUser.aspx');
    }
}
function OnFialMsg() {
    window.location.replace(_iniUrl + 'Private/FrontOffice/CounterUser.aspx');
}

function OnUpdateMessage() {
    $(".smessagebox").scustommessagebox(1, "Counter User", "Updated Successfully!", OnSuccessMsg);
}
function OnFail() {
    // $(".stoast").toastText("Info", "Failed to save", 5, 3);
    if (document.getElementById('ctl00_ContentPlaceHolder1_hdntype').value == "D") {
        $(".smessagebox").scustommessagebox(1, "Counter Doctor", "This doctor already exists!", OnSuccessMsg, '');
    } 
    else {
        $(".smessagebox").scustommessagebox(1, "Counter User", "This User  Already Exists", OnSuccessMsg, '');
    }
}


/*On Dropdown i.e Counter Selection*/
function Selectcounter(obj) {
   
    var CNtrData;
    if (document.getElementById('ctl00_ContentPlaceHolder1_hdntype').value == "D") {

        document.getElementById("ctl00_ContentPlaceHolder1_ucConsultant_txtSearchControl").value = "";
        $('table[id$=gvdoctor] tr:has(td)').each(function (e) {
            $(this).closest('tr').remove();
        });
        cntrids = "";
        dptids = "";
        document.getElementById('ctl00_ContentPlaceHolder1_hdnSaveAlert').value = "";


        fn_AddFilterRow2(0, '');
        var COUNTER_ID = obj.value;

        $.ajax({
            type: "POST",
            url: "CounterUser.aspx/Counter_Doctor",
            data: "{COUNTER_ID:" + COUNTER_ID + "}",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            async: false,
            error: function (jqXHR, textStatus, errorThrown) { alert("Error....."); },
            success: function (JData) {
                var data = JData;
                var gridid = $('#ctl00_ContentPlaceHolder1_gvdoctor');

                $('table[id$=gvdoctor] tr:has(td)').each(function (e) {

                    if (data.d != null) {
                        for (var i = 0; i <= data.d.length - 1; i++) {

                            if (i == 0) {

                                $(this).closest('tr').find('[id*=txtDoctor]').val(JData.d[i].DOCTOR_NAME);
                                $(this).closest('tr').find('[id*=hdnDoctor]').val(JData.d[i].DOCTOR_ID);

                            }
                            else {
                                if (i > 0) {

                                    fn_AddFilterRow2(JData.d[i].DOCTOR_ID, JData.d[i].DOCTOR_NAME);
                                }
                            }
                        }
                        CNtrData = "1";
                    }
                    else {
                        CNtrData = "0";
                    }

                });

            }

        });
        if (CNtrData != "0") {
            fn_AddFilterRow2(0, '');
            return false;
        }


        return false;
    }
    else {
        document.getElementById("ctl00_ContentPlaceHolder1_UCusers_txtSearchControl").value = "";
        $('table[id$=gvcounteruser] tr:has(td)').each(function (e) {
            $(this).closest('tr').remove();
        });
        cntrids = "";
        dptids = "";
        document.getElementById('ctl00_ContentPlaceHolder1_hdnSaveAlert').value = "";


        fn_AddFilterRow1(0, '');
        var COUNTER_ID = obj.value;

        $.ajax({
            type: "POST",
            url: "CounterUser.aspx/Counter_User",
            data: "{COUNTER_ID:" + COUNTER_ID + "}",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            async: false,
            error: function (jqXHR, textStatus, errorThrown) { alert("Error....."); },
            success: function (JData) {
                var data = JData;
                var gridid = $('#ctl00_ContentPlaceHolder1_gvcounteruser');

                $('table[id$=gvcounteruser] tr:has(td)').each(function (e) {

                    if (data.d != null) {
                        for (var i = 0; i <= data.d.length - 1; i++) {

                            if (i == 0) {

                                $(this).closest('tr').find('[id*=txtUsername]').val(JData.d[i].USER_NAME);
                                $(this).closest('tr').find('[id*=hdnuser]').val(JData.d[i].USER_ID);

                            }
                            else {
                                if (i > 0) {

                                    fn_AddFilterRow1(JData.d[i].USER_ID, JData.d[i].USER_NAME);
                                }
                            }
                        }
                        CNtrData = "1";
                    }
                    else {
                        CNtrData = "0";
                    }

                });

            }

        });
        if (CNtrData != "0") {
            fn_AddFilterRow1(0, '');
            return false;
        }


        return false;
    }

}


function fn_AddFilterRow1(USER_ID, USER_NAME) {

    var gvcounteruser = document.getElementById('ctl00_ContentPlaceHolder1_gvcounteruser');
    var rowIndex = gvcounteruser.rows.length;
    var gridIndex = $('table[id$=gvcounteruser] tr:has(td)').length;
    $('[id$=hdnRowIndex]').val(rowIndex);

    var newRow = gvcounteruser.insertRow(rowIndex);
    var newCell = newRow.insertCell(0);
    var span = document.createElement('span'); span.style.textAlign = 'left';

    var newTextBox = document.createElement('label');
    newTextBox.id = "lblSNo" + rowIndex;
    newTextBox.style.textAlign = 'left';
    newTextBox.innerHTML = rowIndex;
    span.appendChild(newTextBox);
    newCell.appendChild(span);
    newCell = newRow.insertCell(1);

    var txtUsername = document.createElement('input');
    txtUsername.type = 'text';
    txtUsername.id = 'txtUsername' + index;
    txtUsername.value = USER_NAME;
    txtUsername.disabled = true;

    var hdnuser = document.createElement('input');
    hdnuser.type = 'hidden';
    hdnuser.id = 'hdnuser' + index;
    hdnuser.value = USER_ID;
    newCell.appendChild(hdnuser);
    newCell.appendChild(txtUsername);

    newCell = newRow.insertCell(2);
    var spanImg = document.createElement('span');
    var imgBtnDelete = document.createElement('IMG'); imgBtnDelete.style.cursor = 'pointer';
    imgBtnDelete.id = 'imgBtnDelete' + index;
    imgBtnDelete.onclick = function () { RemoveRecords(this) };
    imgBtnDelete.src = '../../Images/Grid_Icons/delete.png';
    spanImg.appendChild(imgBtnDelete);
    newCell.align = "left";
    newCell.appendChild(spanImg);
    
    index++;
    gridIndex++;
}
function fn_AddFilterRow2(DOCTOR_ID, DOCTOR_NAME) {

    var gvdoctor = document.getElementById('ctl00_ContentPlaceHolder1_gvdoctor');
    var rowIndex = gvdoctor.rows.length;
    var gridIndex = $('table[id$=gvdoctor] tr:has(td)').length;
    $('[id$=hdnRowIndex1]').val(rowIndex);

    var newRow = gvdoctor.insertRow(rowIndex);
    var newCell = newRow.insertCell(0);
    var span = document.createElement('span'); span.style.textAlign = 'left';

    var newTextBox = document.createElement('label');
    newTextBox.id = "lblSNo" + rowIndex;
    newTextBox.style.textAlign = 'left';
    newTextBox.innerHTML = rowIndex;
    span.appendChild(newTextBox);
    newCell.appendChild(span);
    newCell = newRow.insertCell(1);

    var txtDoctor = document.createElement('input');
    txtDoctor.type = 'text';
    txtDoctor.id = 'txtDoctor' + index;
    txtDoctor.value = DOCTOR_NAME;
    txtDoctor.disabled = true;

    var hdnDoctor = document.createElement('input');
    hdnDoctor.type = 'hidden';
    hdnDoctor.id = 'hdnDoctor' + index;
    hdnDoctor.value = DOCTOR_ID;
    newCell.appendChild(hdnDoctor);
    newCell.appendChild(txtDoctor);

    newCell = newRow.insertCell(2);
    var spanImg = document.createElement('span');
    var imgBtnDelete = document.createElement('IMG'); imgBtnDelete.style.cursor = 'pointer';
    imgBtnDelete.id = 'imgBtnDelete' + index;
    imgBtnDelete.onclick = function () { RemoveRecords(this) };
    imgBtnDelete.src = '../../Images/Grid_Icons/delete.png';
    spanImg.appendChild(imgBtnDelete);
    newCell.align = "left";
    newCell.appendChild(spanImg);

    index++;
    gridIndex++;
}


/* for delete the grid records*/
function RemoveRecords(ev) {
    if (getParameterByName("MODE") == "VIEW") {
        $(".stoast").toastText("warning", "No Users  Delete At This Moment !", 5, 3);
    } else {
        if (document.getElementById('ctl00_ContentPlaceHolder1_hdntype').value == "D") {
            var CurrentRowIndex = 0;
            CurrentRowIndex = typeof (ev.parentElement.parentElement.rowIndex) == 'number' ? ev.parentElement.parentElement.rowIndex : ev.parentElement.parentElement.parentElement.rowIndex;
            CurrentRowIndex = CurrentRowIndex == 0 || CurrentRowIndex == '' || CurrentRowIndex == undefined ? 1 : CurrentRowIndex;
            var _srv_id = $('[id$=gvdoctor] tr').filter(':eq(' + CurrentRowIndex + ')').find('input[type=hidden][id*=hdnDoctor]').val();
            if (_srv_id > 0) {
                $(".smessagebox").scustommessagebox(2, '', "Do you want to Remove the Record?", ondeletesuccess, '', oncanceldelete);
                return false;
                function ondeletesuccess() {
                    $('[id$=gvdoctor] tr').filter(':eq(' + CurrentRowIndex + ')').remove();
                    $(".stoast").toastText("", "Deleted Successfully!", 5, 2);
                    AssignSno('0');
                }

                function oncanceldelete() {
                    return false;
                }
            }
            else {
                $(".stoast").toastText("warning", "No Users exists to Delete!", 5, 3);
                return false;
            }
        }

        else {
            var CurrentRowIndex = 0;
            CurrentRowIndex = typeof (ev.parentElement.parentElement.rowIndex) == 'number' ? ev.parentElement.parentElement.rowIndex : ev.parentElement.parentElement.parentElement.rowIndex;
            CurrentRowIndex = CurrentRowIndex == 0 || CurrentRowIndex == '' || CurrentRowIndex == undefined ? 1 : CurrentRowIndex;
            var _srv_id = $('[id$=gvcounteruser] tr').filter(':eq(' + CurrentRowIndex + ')').find('input[type=hidden][id*=hdnuser]').val();
            if (_srv_id > 0) {
                $(".smessagebox").scustommessagebox(2, '', "Do you want to Remove the Record?", ondeletesuccess, '', oncanceldelete);
                return false;
                function ondeletesuccess() {
                    $('[id$=gvcounteruser] tr').filter(':eq(' + CurrentRowIndex + ')').remove();
                    //$(".stoast").toastText("warning", "Deleted Successfully!", 5, 3);
                    $(".smessagebox").scustommessagebox(2, '', "Deleted Successfully?", ondeletesuccess, '');
                    AssignSno('0');
                }

                function oncanceldelete() {
                    return false;
                }
            }
            else {
                $(".stoast").toastText("warning", "No Users exists to Delete!", 5, 3);
                return false;
            }
        }
    }
}
/*after deleting the record then show sno in order*/
function AssignSno(rowindex) {
    if (document.getElementById('ctl00_ContentPlaceHolder1_hdntype').value == "D") {
        var gridID = document.getElementById('ctl00_ContentPlaceHolder1_gvdoctor');
        var index = 1;

        $("table[id*=gvdoctor] tr:has(td)").each(function () {
            $(this).closest('tr').find("[id*=lblSNo]").text(index);
            index++;
        });

    }
    else {
        var gridID = document.getElementById('ctl00_ContentPlaceHolder1_gvcounteruser');
        var index = 1;

        $("table[id*=gvcounteruser] tr:has(td)").each(function () {
            $(this).closest('tr').find("[id*=lblSNo]").text(index);
            index++;
        });
    }
}