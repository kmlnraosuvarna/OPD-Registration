/*===================================================================(ValidateScript.js)starts======================================================================*/


/*This function is for only Accepts 2 Digit after Decimal into the text box*/

var ctrlcom = 'ctl00_ContentPlaceHolder1';
function OnDeleteRecord() {
    if (confirm('are you sure, you want to delete it?')) {
        return true;
    }
    else {
        return false;
    }
}
function CheckDecimal(id) {
    var keyCode = parseInt(event.keyCode)
    if (keyCode == 8 || keyCode == 190 || keyCode == 46) {
        return true;
    }

    if (CheckNumeric(event) && !event.shiftKey) {

        var regex = /[0-9][.][0-9]{2}/;
        if (!regex.test(id.value)) {
            return true;
        }
    }
    return false;


}
function CheckNumeric() {
    var kcode = parseInt(event.keyCode);
    if (kcode >= 48 && kcode <= 57 || (kcode == 45)) {
        event.returnValue = true;
        return true;
    }
    else {
        event.returnValue = false;
        return false;
    }
}

function EmailIdValidation(ID) {
    if (ID.value.length > 0) {
        var regex = /\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;
        if (regex.test(ID.value)) {
            return true;
        }
        else {
            $(".stoast").toastText("warning", "Please enter the email address!", 5, 3);
//            alert('Please enter mail like abc@mail.com');
            ID.value = '';
            ID.focus();
            return false;
        }
    }
    else
        return false;
}

function EmailValidations(Id) {
    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    if (reg.test(Id.value) == false) {
        Id.valueOf = '';
        $(".stoast").toastText("warning", "Invalid Email Address", 5, 3);
//        alert('Invalid Email Address'); return false;
    }
    return true;
}

function UrlValidation(ID) {

    if (ID.value.length > 0) {
        var checkval = ID.value.toUpperCase();
        if (checkval.indexOf("WWW.") != -1)
            checkval = checkval.substring(checkval.indexOf("WWW."));

        checkval = 'http://' + checkval;



        var regex = /http(s)?:\/\/([\w-]+\.)+[A-Za-z0-9\.-]{3,}\.[A-Za-z]{3}/;
        if (regex.test(checkval)) {
            return true;
        }
        $(".stoast").toastText("warning", "Please enter url like www.abc.com", 5, 3);
//        alert('Please enter url like www.abc.com');
        ID.value = '';
        ID.focus();
        return false;
    }
    else
        return false;
}
function NumbersWithDot(evt) {
    var e = event || evt; /* for trans-browser compatibility*/
    var charCode = e.which || e.keyCode;
    if (charCode == 190 || charCode == 110) {
        return true;
    }
    if (charCode > 31 && (charCode < 48 || charCode > 57) && charCode > 48 && (charCode < 96 || charCode > 105))

        return false;

    return true;

}

function onlyNumbers(evt) {
    var e = event || evt; /* for trans-browser compatibility*/
    var charCode = e.which || e.keyCode;

    if (charCode > 31 && (charCode < 48 || charCode > 57) && (charCode < 96 || charCode > 105))
        return false;

    return true;

}
function NumbersWithSlash(evt) {
    var e = event || evt; /* for trans-browser compatibility*/
    var charCode = e.which || e.keyCode;
    if (charCode == 191 || charCode == 47) {
        return true;
    }
    if (charCode > 31 && (charCode < 48 || charCode > 57) && (charCode < 96 || charCode > 105) && charCode > 48)
        return false;

    return true;

}
function NumbersWithDot(evt) {
    var e = event || evt; /* for trans-browser compatibility*/
    var charCode = e.which || e.keyCode;
    if (charCode == 190 || charCode == 110) {
        return true;
    }
    if (charCode > 31 && (charCode < 48 || charCode > 57) && charCode > 48 && (charCode < 96 || charCode > 105))

        return false;

    return true;

}

function RestrictInt(val) {

    if (isNaN(val)) {

        val = val.substring(0, val.length - 1);

        document.form1.txtAge.value = val;

        return false;

    }

    return true;

}

function RestrictCharacter() {
    var element;
    var len = document.forms[0].elements.length;

    for (i = 0; i < len; i++) {
        element = document.forms[0].elements;

        if (element.type == 'text' || element.type == 'textarea') {
            element.attachEvent("onkeypress", function () {
                if (event.keyCode == 60 || event.keyCode == 62 ||
                                    event.keyCode == 38 || event.keyCode == 39) return false;
            });
            element.attachEvent("onpaste", function () {
                var REGX = new RegExp('<|>|&|\'', 'gi');
                var val = window.clipboardData.getData('Text');
                if (REGX.test(val))
                    return false;
            });
            element.attachEvent("ondrop", function () { return false; });
        }
    }
}

function lettersOnly(evt) {
    evt = (evt) ? evt : event;
    var charCode = (evt.charCode) ? evt.charCode : ((evt.keyCode) ? evt.keyCode : ((evt.which) ? evt.which : 0));

    if (charCode > 33 && (charCode < 65 || charCode > 90) && (charCode < 97 || charCode > 122)) {
        if (charCode == 40 || charCode == 46 || charCode == 38 || charCode == 37 || charCode == 39) // arrows and del key
        {
            return true;
        }
        else {
            $(".stoast").toastText("warning", "Enter letters only.", 5, 3);
//            alert("Enter letters only.");
            return false;
        }
    }
    return true;
}

function letterAlphabets(evt) {
    evt = (evt) ? evt : event;
    var charCode = (evt.charCode) ? evt.charCode : ((evt.keyCode) ? evt.keyCode : ((evt.which) ? evt.which : 0));

    if ((charCode < 65 || charCode > 90) && (charCode < 97 || charCode > 122)) {
        if (charCode == 40 || charCode == 46 || charCode == 38 || charCode == 37 || charCode == 39) // arrows and del key
        {
            return true;
        }
        else {
            $(".stoast").toastText("warning", "Enter letters only.", 5, 3);
//            alert("Enter letters only.");
            return false;
        }
    }
    return true;
}

function AllowChar(evt) {
    evt = (evt) ? evt : event;
    var charCode = (evt.charCode) ? evt.charCode : ((evt.keyCode) ? evt.keyCode : ((evt.which) ? evt.which : 0));
    if (charCode > 30 && (charCode < 65 || charCode > 90) && (charCode < 97 || charCode > 122)) {
        $(".stoast").toastText("warning", "Enter letters only.", 5, 3);
//        alert("Enter letters only.");
        return false;
    }
    return true;
}

function Del() {
    var response = confirm('Are you sure to Delete?')
    if (true == response)
        return true;
    else
        return false;
}


/*This function is for only Accepts digits and '+' into the text box*/

function CheckNumeric(e) {
    var keycode;

    if (document.all) {
        /* for IE Browser*/
        keycode = e.keyCode;
    }
    else {

        keycode = e.which;
    }
    if (keycode >= 48 && keycode <= 57 || keycode == 43 || keycode == 9 || keycode == 13 || keycode >= 96 && keycode <= 105 || keycode == 45 || keycode == 8 || keycode == 46) {
        return true;
    }
    else {
        return false;
    }
}
function CheckNumericphno(e) {
    var keycode;

    if (document.all) {
        /* for IE Browser*/
        keycode = e.keyCode;
    }
    else {

        keycode = e.which;
    }
    if (keycode >= 48 && keycode <= 57 || keycode == 43 || keycode == 9 || keycode == 13 || keycode == 8 || keycode == 43 || keycode == 45) {
        return true;
    }
    else {
        return false;
    }
}
function CheckNumericHomephno(e) {
    var keycode;

    if (document.all) {
        /* for IE Browser*/
        keycode = e.keyCode;
    }
    else {

        keycode = e.which;
    }
    if (keycode >= 48 && keycode <= 57 || keycode == 9 || keycode == 13 || keycode == 8 || keycode == 45 || keycode == 32) {
        return true;
    }
    else {
        return false;
    }
}



function CannotEnter(e) {
    var keycode;

    if (document.all) {
        /* for IE Browser*/
        keycode = e.keyCode;
    }
    else {

        keycode = e.which;
    }
    if (keycode == 13) {
        return true;
    }
    else {
        return false;
    }
}

function AllowCharNums(e) {
    var keycode;
    if (document.all) {
        /* for IE Browser*/
        keycode = e.keyCode;
    }
    else {
        keycode = e.which;
    }
    if (keycode >= 65 && keycode <= 91 || keycode >= 97 && keycode <= 122 || keycode == 32 || keycode == 8) {
        return true;
    }
    else {
        return false;
    }
}







function checklengthPharPhone(e) {
    var len1 = document.getElementById("" + ctrlcom + "_txtPharPhone").value;


    if (parseInt(len1.length) < 10) {
        $(".stoast").toastText("warning", "please enter length minimun 10 chars", 5, 3);
//        alert("please enter length minimun 10 chars");

        return false;
    }
}

/*To restrict Special Charachter into text box  :-       onkeypress="return alphanumeric_only(event);"   */
function alphanumeric_only(e) {

    var keycode;
    if (window.event) keycode = window.event.keyCode;

    else if (event) keycode = event.keyCode;
    else if (e) keycode = e.which;

    else return true; if ((keycode >= 47 && keycode <= 57) || (keycode >= 65 && keycode <= 90) || (keycode >= 97 && keycode <= 122) || keycode == 32) {

        return true;
    }

    else {

        return false;
    }

    return true;
}

/* Checks that an input string is a decimal number, with an optional +/- sign character.*/
var isDecimal_re = /^\s*((\d+(\.\d+)?)|(\.\d+))\s*/;
function isDecimal(s) {
    return String(s).search(isDecimal_re) != -1
}

function checkForInt(evt) {
    var charCode = (evt.which) ? evt.which : event.keyCode;
    return (charCode >= 48 && charCode <= 57);
}
function isAlpha(keyCode) {
    return ((keyCode >= 65 && keyCode <= 90) || keyCode == 8)
}

function RestrictSpecialChar(event) {
    var exp = String.fromCharCode(window.event.keyCode)
    var address = document.getElementById("txtName");
    /*Allowed some special chars and alphabets and numbers        
    If you donâ€™t want any special char you can remove from the below line*/
    var r = new RegExp("[-_,/'().0-9a-zA-Z \r]", "g");
    if (exp.match(r) == null) {
        window.event.keyCode = 0
        return false;
    }

}



/*------------------------ grid validation ------------------*/

/*Check All checkboxes...
gridid, column position of the checkbox, header checkbox for status.*/
function OnSelectAll(grid, ind, sender) {
    /*variable to contain the cell of the grid*/
    var cell;
    if (grid.rows.length > 0) {
        /*loop starts from 1. rows[0] points to the header.*/
        for (var i = 1; i < grid.rows.length; i++) {
            /*get the reference of first column*/
            cell = grid.rows[i].cells[ind];

            /*loop according to the number of childNodes in the cell*/
            for (var j = 0; j < cell.childNodes.length; j++) {
                /*if childNode type is CheckBox */
                if (cell.childNodes[j].type == "checkbox") {
                    /*assign the status of the Select All checkbox to the cell checkbox within the grid*/
                    cell.childNodes[j].checked = sender.checked;
                }
            }
        }
    }
}
/*------------------ grid validation -----------------------*/


/*This function use to validate text box first char not alow the Space*/
function CheckFirstChar(key, txt) {
    if (key == 32 && txt.value.length <= 0) {
        return false;
    }
    else if (txt.value.length > 0) {
        if (txt.value.charCodeAt(0) == 32) {
            txt.value = txt.value.substring(1, txt.value.length);
            return true;
        }
    }
    return true;
}
/*Alow only Alphabets*/
function isValidAlpha() {
    var c = event.keyCode;

    event.keyCode = (!((c >= 65 && c <= 90)
                      || (c >= 97 && c <= 122)
                      || (c == 32))) ? 0 : event.keyCode;
}
function checknum(e) {
    isIE = document.all ? 1 : 0
    keyEntry = !isIE ? e.which : event.keyCode;
    if ((keyEntry == '48')) {
        var str = document.getElementById(event.srcElement.name).value;
        if ((str.indexOf('0') == -1 || str.indexOf('0') == 0) && str.length <= 0)


            return false;
        else if (str.indexOf('0') == 0 && str.length > 0)
            return false;
    }
    else {
        if ((keyEntry > '47') && (keyEntry < '58') || (keyEntry == '46'))
            return true;
        else if (keyEntry == '8')
            return true;
        else


            return false;
    }
}



/*===================================================================(ValidateScript.js)Ends======================================================================*/

/*===================================================================(ReadOnly.js)starts======================================================================*/
function OnMakeReadOnlyTxt() {

    var inputElements = document.getElementsByTagName("input");
    for (var _index = 0; _index < inputElements.length; _index++) {

        if (inputElements[_index].readOnly == true) {
            inputElements[_index].setAttribute("onfocus", "OnLostFoucs(this)");
        }
    }
}

function OnLostFoucs(txtid) {
    try {
        if (txtid != null)
            txtid.blur();
    }
    catch (exp) { }
}
/*===================================================================(ReadOnly.js)Ends======================================================================*/


/*===================================================================(Validation.js)starts======================================================================*/
/*--------------------------------------------     Validation for the Grid        -----------------------------------------------------------------------*/
/*check whether the checkbox atleast one is selected or not..*/
function OnDeleteChkStatus(grid, index) {
    var cell;
    if (grid.rows.length > 0) {
        for (var i = 1; i < grid.rows.length; i++) {
            cell = grid.rows[i].cells[index];
            for (var j = 0; j < cell.childNodes.length; j++) {
                if (cell.childNodes[j].type == "checkbox") {
                    if (cell.childNodes[j].checked == true) {
                        if (confirm('Are you sure you want to Delete?')) {
                            return true;
                        }
                        else {
                            return false;
                        }
                    }
                }
            }
        }

        $(".stoast").toastText("warning", "Please Select Record", 5, 3);
//        alert("Please Select Record");
        return false;
    }
}
/*Check All checkboxes...*/
function OnSelectAll(grid, ind, sender) {
    var cell;
    if (grid.rows.length > 0) {
        for (var i = 1; i < grid.rows.length; i++) {
            cell = grid.rows[i].cells[ind];
            for (var j = 0; j < cell.childNodes.length; j++) {
                if (cell.childNodes[j].type == "checkbox") {
                    cell.childNodes[j].checked = sender.checked;
                }
            }
        }
    }
}
function OnDeSelectAll(grid, ind) {
    var cell;
    if (grid.rows.length > 0) {
        cell = grid.rows[0].cells[ind];
        for (var j = 0; j < cell.childNodes.length; j++) {
            if (cell.childNodes[j].type == "checkbox") {
                cell.childNodes[j].checked = false;
            }
        }
    }
}
function OnClearCheckBoxList(_lstElements) {
    for (var i = 0; i < _lstElements.cells.length; i++) {
        var _cell = _lstElements.cells[i];
        for (var j = 0; j < _cell.childNodes.length; j++) {
            if (_cell.childNodes[j].type == "checkbox" || _cell.childNodes[j].type == "radio") {
                _cell.childNodes[j].checked = false;
            }
        }
    }
}
/*Date validation format like dd-MMM-yyyy ---->08-Feb-2011 */
function CompareDates(Date1, Date2) {


    if (Date1 != "" && Date2 != "") {
        var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    n1 = months.length, re1 = /(\d{2})-([a-z]{3})-(\d{4})/i, matches1;
        while (n1--) { months[months[n1]] = n1; } /* map month names to their index :)*/
        matches1 = Date1.match(re1); /* extract date parts from string*/
        var dt1 = new Date(matches1[3], months[matches1[2]], matches1[1]);
        matches1 = Date2.match(re1); /* extract date parts from string*/
        var dt2 = new Date(matches1[3], months[matches1[2]], matches1[1]);
        if (dt1 > dt2)
            return "d1>=d2";
        else if (dt1 < dt2)
            return "d1<d2";
    }
}
/* ----------------------------------------------------  Age Based on DateTime ---------------------------------------------------------*/
function OnDateAGeSelection(sender, args) {
    var _selDate = sender._selectedDate.format('dd-MM-yyyy');
    var _today = new Date().format('dd-MM-yyyy');
    var dt1 = parseInt(_selDate.substring(0, 2), 10);
    var mon1 = parseInt(_selDate.substring(3, 5), 10);
    var yr1 = parseInt(_selDate.substring(6, 10), 10);
    var dt2 = parseInt(_today.substring(0, 2), 10);
    var mon2 = parseInt(_today.substring(3, 5), 10);
    var yr2 = parseInt(_today.substring(6, 10), 10);
    var date1 = new Date(yr1, mon1, dt1);
    var date2 = new Date(yr2, mon2, dt2);
    if (date1 > date2) {
        $(".stoast").toastText("warning", "Please Select Valid Date", 5, 3);
//        alert('Please Select Valid Date');
        return false;
    }
    if (dt2 < dt1) {
        mon2 = mon2 - 1;
        dt2 = dt2 + 30;
        var days = dt2 - dt1;
        $(".stoast").toastText("warning", days, 5, 3);
//        alert(days);
    }
    if (mon2 < mon1) {
        yr2 = yr2 - yr1;
        mon2 = mon2 + 12;
        var months = mon2 - mon1;
        $(".stoast").toastText("warning", months, 5, 3);
//        alert(months);
    }
    var years = yr2 - yr1;
    $(".stoast").toastText("warning", years, 5, 3);
//    alert(years);
}
function checkDate(sender, args) {
    var str1 = sender._selectedDate.format('dd-MM-yyyy');
    var str2 = new Date().format('dd-MM-yyyy');
    var dt1 = parseInt(str1.substring(0, 2), 10);
    var mon1 = parseInt(str1.substring(3, 5), 10);
    var yr1 = parseInt(str1.substring(6, 10), 10);
    var dt2 = parseInt(str2.substring(0, 2), 10);
    var mon2 = parseInt(str2.substring(3, 5), 10);
    var yr2 = parseInt(str2.substring(6, 10), 10);
    var date1 = new Date(yr1, mon1, dt1);
    var date2 = new Date(yr2, mon2, dt2);
    if (date1 > date2) {
        $(".stoast").toastText("warning", "Please enter valid date of birth..!", 5, 3);
//        alert("Please enter valid date of birth..!");
        sender._selectedDate = new Date();
        sender._textbox.set_Value(sender._selectedDate.format(sender._format))
        document.getElementById("" + ctrlcom + "_txtDOB").value = "";
        document.getElementById("" + ctrlcom + "_txtDOB").focus();
    }
}
/*--------------------------------------------- PAGE VALIDATION ON NULL VALUE ----------------------------------------------------*/
function OnNullValue(controlId) {
    if (controlId == null)
        return false;
    if (controlId.tagName == 'INPUT') {
        if (controlId.value.trim() == '') {
            controlId.style.border = "1px solid #f4785e";
            return false;
        }
        else if (controlId.value.trim() == '__-___-____') {
            controlId.style.border = "1px solid #f4785e";
            return false;
        }
    }
    else if (controlId.tagName == 'SELECT') {
        if (controlId[0].selected == true) {
            controlId.style.border = "1px solid #f4785e";
            return false;
        }
    }
    else if (controlId.tagName == 'TEXTAREA') {
        if (controlId.value.trim() == '') {
            controlId.style.border = "1px solid #f4785e";
            return false;
        }
    }
    else if (controlId.tagName == 'DIV') {
    }
    if (controlId.tagName == 'DIV')
        controlId.style.border = "0px solid #ffffff";
    else
        controlId.style.border = "1px solid #bebebe";
}
function SetGender(ctrlid) {
    OnNullValue(ctrlid);
    var ddlTitle = document.getElementById('' + ctrlcom + '_ddlTitle');
    var ddlGender = document.getElementById('' + ctrlcom + '_ddlGender');
    var val = ddlTitle.value;
    if (val > 0) {
        if (ddlTitle[val].innerText == 'Mr' || ddlTitle[val].innerText == 'Master')
            ddlGender.value = 1;
        else
            ddlGender.value = 2;
    }
    else {
        ddlGender.value = 0
        return false;
    }
}
/*---------------------------------VALIDATIONS----------------------------------------------------*/
function onChkAge(event) {
    var ddlTitle = document.getElementById('' + ctrlcom + '_ddlTitle');
    var val = ddlTitle.value;
    var age = document.getElementById('' + ctrlcom + '_AgeCalUsercontrol1_txtBirthNumber');
    var ddlAgeOption = document.getElementById('' + ctrlcom + '_AgeCalUsercontrol1_ddlAgeOption');
    var txtDateOfBirth = document.getElementById('' + ctrlcom + '_AgeCalUsercontrol1_txtDateOfBirth');
    var Ageval = age.value;
    if (ddlTitle.selectedIndex == 0) {
        $(".stoast").toastText("warning", "please select the title before you enter age", 5, 3);
//        alert('please select the title before you enter age');
        ddlTitle.focus();
        age.value = '';
        ddlAgeOption.selectedIndex = 0;
        txtDateOfBirth.value = '';
        return false;
    }
    if (ddlTitle[val].innerText == 'Baby') {
        if (Ageval > 12) {
            $(".stoast").toastText("warning", "please enter suitable age", 5, 3);
//            alert('please enter suitable age');
            document.getElementById('' + ctrlcom + '_AgeCalUsercontrol1_txtBirthNumber').focus();
            return false;
        }
    }
    else if (ddlTitle[val].innerText == 'Master') {
        if (Ageval > 21) {
            $(".stoast").toastText("warning", "please enter suitable age", 5, 3);
//            alert('please enter suitable age');
            document.getElementById('' + ctrlcom + '_AgeCalUsercontrol1_txtBirthNumber').focus();
        }
    }
}
function chkPhone(event) {
    var phone = document.getElementById('' + ctrlcom + '_txtRefPhone').value;
    var val = phone.length;
    if (val < 10) {
        $(".stoast").toastText("warning", "please enter a valid phone number", 5, 3);
//        alert('please enter a valid phone number');
        document.getElementById('' + ctrlcom + '_txtRefPhone').focus();
    }
}
function checkDate(sender, args) {
    if (sender._selectedDate > new Date()) {
        $(".stoast").toastText("warning", "You cannot select a day greater than today!", 5, 3);
//        alert("You cannot select a day greater than today!");
        sender._selectedDate = new Date();
        sender._textbox.set_Value(sender._selectedDate.format(sender._format));
    }
}
function checkExpDate(sender) {
    var v1 = document.getElementById('' + ctrlcom + '_txtIssueDt').value;
    var issueDate = parseInt(v1);
    var v2 = document.getElementById('' + ctrlcom + '_txtExpiryDt').value;
    var expDate = parseInt(v2);
    if (expDate < issueDate) {
        $(".stoast").toastText("warning", "Expiry date cannot less than issue date", 5, 3);
//        alert('Expiry date cannot less than issue date');
        document.getElementById('' + ctrlcom + '_txtExpiryDt').focus();
    }
}
function checkToDate(sender, args) {
    if (sender._selectedDate < new Date()) {
        $(".stoast").toastText("warning", "You cannot select a day lesser than today!", 5, 3);
//        alert("You cannot select a day lesser than today!");
        sender._selectedDate = new Date();
        sender._textbox.set_Value(sender._selectedDate.format(sender._format));
    }
}
function DeleteGridRecords(grid, index) {
    var cell;
    if (grid.rows.length > 0) {
        for (var i = 1; i < grid.rows.length; i++) {
            cell = grid.rows[i].cells[index];
            for (var j = 0; j < cell.childNodes.length; j++) {
                if (cell.childNodes[j].childNodes[j].type == "checkbox") {
                    if (cell.childNodes[j].childNodes[j].checked == true) {
                        if (confirm('Are you sure to Delete?')) {
                            return true;
                        }
                        else {
                            return false;
                        }
                    }
                }
            }
        }
        $(".stoast").toastText("warning", "Please Select Record", 5, 3);
//        alert("Please Select Record");
        return false;
    }
}
function remove(ctrl) {
    var txt = document.getElementById(ctrl.id);
    var val = txt.value;
    for (i = 0; i < val.length; i++) {
        var code = val.charCodeAt(i);
        if (!(code >= 48 && code <= 57)) {
            txt.value = "";
            txt.focus();
            return false;
        }
    }
}
function convertEnterToTab(e) {
    var charCode = (e.charCode) ? e.charCode : ((e.keyCode) ? e.keyCode : ((e.which) ? e.which : 0));
    if (charCode == 13) {
        event.keyCode = 9;
    }
}
/*------------------------------------------Allow only numbers------------------------------------------------------------------*/
function CheckNumber(e) {
}
/* --------------------------- Allow Only charecters ------------*/
function OnlyCharecters(evt) {
    evt = (evt) ? evt : event;
    var charCode = (evt.charCode) ? evt.charCode : ((evt.keyCode) ? evt.keyCode : ((evt.which) ? evt.which : 0));
    if (charCode > 30 && (charCode < 65 || charCode > 90) && (charCode < 97 || charCode > 122)) {
        if (charCode == 32) {
            evt.returnValue = true;
            return true;
        }
        if (charCode == 46) {
            evt.returnValue = true;
            return true;
        }
        evt.returnValue = false;
        return false;
    }
    return true;
}
function NumCharsWithSpace(evt) {
    evt = (evt) ? evt : event;
    var charCode = (evt.charCode) ? evt.charCode : ((evt.keyCode) ? evt.keyCode : ((evt.which) ? evt.which : 0));
    if ((charCode == 8 || charCode == 9 || charCode == 32 || charCode == 37 || charCode == 39 || charCode == 46) || (charCode > 64 && charCode < 91) || (charCode > 47 && charCode < 58 && evt.shiftKey == false) || (charCode > 97 && charCode < 106)) {
        return true;
    }
    return false;
}
/*------------------------------DATE COMPARISSION-----------------------------*/
function CompareDates(Date1, Date2) {
    if (Date1 != "" && Date2 != "") {
        if (Date1.length == 10) Date1 = '0' + Date1; if (Date2.length == 10) Date2 = '0' + Date2;
        var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    n1 = months.length, re1 = /(\d{2})-([a-z]{3})-(\d{4})/i, matches1;
        while (n1--) { months[months[n1]] = n1; }
        matches1 = Date1.match(re1);
        var dt1 = new Date(matches1[3], months[matches1[2]], matches1[1]);
        matches1 = Date2.match(re1);
        var dt2 = new Date(matches1[3], months[matches1[2]], matches1[1]);
        if (dt1 > dt2)
            return "d1>=d2";
        else if (dt1 < dt2)
            return "d1<d2";
    }
}
/*--------------------------- Alpha Numaric Values --------------------------*/
function AlphaNumaric(e) {
    var charCode = (e.charCode) ? e.charCode : ((e.keyCode) ? e.keyCode : ((e.which) ? e.which : 0));
    if ((charCode == 45) || (charCode >= 48 && charCode <= 57) && e.shiftKey == false)
        return true;
    if (charCode > 30 && (charCode < 65 || charCode > 90) && (charCode < 97 || charCode > 122)) {
        if (charCode == 8)
            return true;
        else
            return false;
    }
    else
        return true;
    return false;
}
function chkNumeric(evt) {
    evt = (evt) ? evt : window.event
    var charCode = (evt.which) ? evt.which : evt.keyCode
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        status = "This field only accepts numbers!"
        return false
    }
    status = "";
    return true;
}
/*----------------------------------------- Set the cursor at the END of textfield ----------------------------------------*/
function SetEnd(TB) {
    if (TB.createTextRange) {
        var FieldRange = TB.createTextRange();
        FieldRange.moveStart('character', TB.value.length);
        FieldRange.collapse();
        FieldRange.select();
    }
}
function CheckNumericphno(e) {
    var keycode;
    // alert(document.all+":"+e.keyCode+":"+e.which);
    if (document.all) {
        /* for IE Browser*/
        keycode = e.keyCode;
    }
    else {
        keycode = e.which;
    }
    if (keycode >= 48 && keycode <= 57 || keycode == 43 || keycode == 9 || keycode == 13 || keycode == 8 || keycode == 43 || keycode == 45) {
        return true;
    }
    else {
        return false;
    }
}
function ShowPopUp(popup) {
    $find(popup).show();
}
function ClearTextbox(id) {
    if (parseFloat(document.getElementById(id.id).value) == 0)
        document.getElementById(id.id).value = '';
}
function ConfirmationRequiredForSave(obj) {
    var SaveAlert = document.getElementById(obj);
    if (SaveAlert != null) {
        if (SaveAlert.value == '2') {
         //   DisableKeys();
            return true;
        }
        else {
          //  DisableKeys();
            if (confirm('Do You want to save Record?.')) {
           //     DisableKeys();
                return true;
            }
            else {
                EnableKeys();
                return false;
            }
        }
    }
}
function ClearTextbox(id) {
    if (parseFloat(document.getElementById(id.id).value) == 0)
        document.getElementById(id.id).value = '';
}
function OnlyTabkey(evt) {
    var keycode;
    var charCode = (evt.which) ? evt.which : event.keyCode
    if (charCode == 9) return true;
    else return false;
}
function lettersOnly(evt) {
    evt = (evt) ? evt : event; var charCode = (evt.charCode) ? evt.charCode : ((evt.keyCode) ? evt.keyCode : ((evt.which) ? evt.which : 0)); if (charCode > 33 && (charCode < 65 || charCode > 90) && (charCode < 97 || charCode > 122)) {
        if (charCode == 40 || charCode == 46 || charCode == 38 || charCode == 37 || charCode == 39) { return true; } else {
            $(".stoast").toastText("warning", "Enter letters only.", 5, 3);
//            alert("Enter letters only."); 
return false; } } return true; }
function EmailIdValidation(ID) {
    if (ID.value.trim() != '') {
        var regex = /\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;
        if (regex.test(ID.value)) {
            ID.value = ID.value.toLowerCase();
            return true;
        }
        else {
            $(".stoast").toastText("warning", "Please enter the email address!", 5, 3);
//            alert('Please enter mail like abc@mail.com');
            ID.value = '';
            //Shiva 12-02-2016
            ID.focus();
            if (localStorage.getItem("ED") != "" && localStorage.getItem("ED") != undefined && localStorage.getItem("ED") != null) {
                if (localStorage.getItem("ED") == "OPRegConBilling.aspx" || localStorage.getItem("ED") == "NewPatientRegistration.aspx") {
                    var _email = ID.value;
                    extendedDisplay.setData(9, 'Email :', _email);
                }
            } //End
            return false;
        }
    }
    return false;
}
function UPPER(obj) {
    var mystring = obj.value;
    var sp = mystring.split(' ');
    var wl = 0;
    var f, r;
    var word = new Array();
    for (i = 0; i < sp.length; i++) {
        f = sp[i].substring(0, 1).toUpperCase();
        r = sp[i].substring(1);
        word[i] = f + r;
    }
    newstring = word.join(' ');
    obj.value = newstring;
    return true;
}
function numbersonly(e) {
    var unicode = e.charCode ? e.charCode : e.keyCode
    if (unicode != 8) {
        if (unicode < 48 || unicode > 57) {
            $(".stoast").toastText("warning", "Please Enter Numbers Only.", 5, 3);
//            alert('Please Enter Numbers Only.');
            return false
        }
    }
}
function lower(ustr) {
    var str = ustr.value;
    ustr.value = str.toLowerCase();
}
function CancelBackSpace(event) {
    if (event.keyCode == 8) {
        return false;
    }
}

function EnableKeys() {
    var arr = new Array(32, 13, 116);
    $(document).keydown(function (e) {
        var key = e.which;
        if ($.inArray(key, arr) > -1) {
            return true;
        }
    });
}

function DisableKeys() {
    var arr = new Array(32, 13, 116);
    $(document).keydown(function (e) {
        var key = e.which;
        if ($.inArray(key, arr) > -1) {
            e.preventDefault();
            return false;
        }
        return true;
    });
}


function ReplaceSplCharactor(value) {
    value = value.replace(/>/g, '&gt;');
    value = value.replace(/</g, '&lt;');
    value = value.replace(/&/g, '&amp;');
    value = value.replace(/'/g, '&apos;');
    value = value.replace(/%/g, '&#37;');
    value = value.replace(/\"/g, '&quot;');
    value = value.replace(/\'/g, "&#39;");
    return value;
}
/*===================================================================(Validation.js)Ends======================================================================*/


/*===================================================================(DropDwnWithChkBox.js)starts======================================================================*/

var Browser = {
    Version: function () {
        var version = 999;
        if (navigator.appVersion.indexOf("MSIE") != -1)
            version = parseFloat(navigator.appVersion.split("MSIE")[1]);
        return version;
    }
}

function showIE6Tooltip(e) {
    if (navigator.appName == 'Microsoft Internet Explorer' && Browser.Version() == 6) {
        if (!e) { var e = window.event; }
        var obj = e.srcElement;

        tempX = event.clientX + (document.documentElement.scrollLeft || document.body.scrollLeft);
        tempY = event.clientY + (document.documentElement.scrollTop || document.body.scrollTop);

        var tooltip = document.getElementById('ie6SelectTooltip');
        tooltip.innerHTML = obj.options.title; /*set the title to the div,display the tooltip based on the mouse location*/
        tooltip.style.left = tempX;
        tooltip.style.top = tempY + 10;
        tooltip.style.width = '100%';
        tooltip.style.display = 'block';
    }
}
function hideIE6Tooltip(e) {
    if (navigator.appName == 'Microsoft Internet Explorer' && Browser.Version() == 6) {
        var tooltip = document.getElementById('ie6SelectTooltip');
        tooltip.innerHTML = '';
        tooltip.style.display = 'none';
    }
}

function getCheckBoxListItemsChecked(elementId) {

    var elementRef = document.getElementById(elementId);
    var checkBoxArray = elementRef.getElementsByTagName('input');
    var checkedValues = '';
    var checkedText = '';
    var checkedSelIndex = '';
    var myCheckBox = new Array();

    for (var i = 0; i < checkBoxArray.length; i++) {
        var checkBoxRef = checkBoxArray[i];

        if (checkBoxRef.checked == true) {


            if (checkedSelIndex.length > 0)
                checkedSelIndex += ', ';
            checkedSelIndex += i;

            if (checkedValues.length > 0)
                checkedValues += ', ';

            checkedValues += checkBoxRef.value;

            var labelArray = checkBoxRef.parentNode.getElementsByTagName('label');

            if (labelArray.length > 0) {
                if (checkedText.length > 0)
                    checkedText += ', ';
                checkedText += labelArray[0].innerHTML;
            }

        }
    }

    myCheckBox[0] = checkedText;
    myCheckBox[1] = checkedValues;
    myCheckBox[2] = checkedSelIndex;

    return myCheckBox;
}
var samplepatcount = 0;
var flag = 0;
var flagDoc = 0;
function readCheckBoxList(chkBox, ddlList, hiddenFieldText, hiddenFieldValue, hiddenFieldSelIndex) {

    var checkedItems = getCheckBoxListItemsChecked(chkBox);
    $get(ddlList).options[0].innerHTML = checkedItems[0];
    $get(ddlList).title = checkedItems[0];
    $get(hiddenFieldValue).value = checkedItems[1];
    $get(hiddenFieldText).value = checkedItems[0];
    $get(hiddenFieldSelIndex).value = checkedItems[2];
    var chkbccoll = document.getElementById('' + ctrlcom + '_chkmodeComm_hf_checkBoxValue').value;
    var chkbxlist = chkbccoll.split(',');
    var chkbxnamecoll = document.getElementById('' + ctrlcom + '_chkmodeComm_hf_checkBoxText').value;
    var chkbxnamelist = chkbxnamecoll.split(',');

    for (var i = 0; i < chkbxlist.length; i++) {

        if ((chkbxlist[i] == '9' || chkbxlist[i] == ' 9') && (chkbxnamelist[i] == 'Home Delivery' || chkbxnamelist[i] == ' Home Delivery') && document.getElementById('' + ctrlcom + '_UCtransaction_hdnFormName').value == 'SampleOpBilling' && samplepatcount < 1) {
            opsampleregPatientService();
            samplepatcount += 1;
        }
        else if ((chkbxlist[i] == '5' || chkbxlist[i] == ' 5') && (chkbxnamelist[i] == 'Patient Email' || chkbxnamelist[i] == ' Patient Email') && document.getElementById('' + ctrlcom + '_UCtransaction_hdnFormName').value == 'SampleOpBilling' && flag < 1) {

            OnPatientEmailValidation();
            flag += 1;
        }
        else if ((chkbxlist[i] == '6' || chkbxlist[i] == ' 6') && (chkbxnamelist[i] == 'Doctor Email' || chkbxnamelist[i] == ' Doctor Email') && document.getElementById('' + ctrlcom + '_UCtransaction_hdnFormName').value == 'SampleOpBilling' && flagDoc < 1) {
            OnDoctorEmailValidation();
            flagDoc += 1;
        }
        else {
        }
    }
}

/*===================================================================(DropDwnWithChkBox.js)Ends======================================================================*/


/*===================================================================(TextBoxValidationScript.js)starts======================================================================*/
function keyUP(keyCode) {
    var isShift;
    if (keyCode == 16)
        isShift = false;
}
function CheckFirstChar(key, txt) {
    if (key == 32 && txt.value.length <= 0) {
        return false;
    }
    else if (txt.value.length > 0) {
        if (txt.value.charCodeAt(0) == 32) {
            txt.value = txt.value.substring(1, txt.value.length);
            return true;
        }
    }
    return true;
}

function validateTextBox(eventRef, elementRef) {
    var functionReturn = true;
    eventRef = (eventRef) ? eventRef : (window.event) ? window.event : (event) ? event : null;
    if (eventRef == null) {
        return false;
    }
    var keyCodeEntered = (eventRef.which) ? eventRef.which : (eventRef.keyCode) ? eventRef.keyCode : -1;
    if ((keyCodeEntered == 32) && (elementRef.value.length <= 0))
        functionReturn = false;
    if (functionReturn == false) {
        if (window.event) {

            window.event.cancelBubble = true;
            window.event.returnValue = false;
        }
        else {

            eventRef.preventDefault();
            eventRef.stopPropagation();
        }
    }
    return functionReturn;
}
function OnSaveRecord() {
    if (confirm('are you sure, you want to save it?')) {
        return true;
    }
    else {
        return false;
    }
}
function gg_onkeypress(e) {
    return false;
}
function gg_onkeydown(e) {
    if (e.keyCode != 11) {
        return false;
    }
}
function gg_onkeyup(e) {
    if (e.keyCode != 11) {
        return false;
    }
}
function AllowAlphabet(e) {
    isIE = document.all ? 1 : 0
    keyEntry = !isIE ? e.which : event.keyCode;
    if (((keyEntry >= '65') && (keyEntry <= '90')) || ((keyEntry >= '97') && (keyEntry <= '122')))
        return true;
    else
        return false;
}

function DateValidation(control) {
    var textDate = document.getElementById('' + ctrlcom + '_txtSearchCriteria').value;
    if (textDate != '') {
        var DateExpression = /^(\d{2})-([A-Za-z][A-Za-z][A-Za-z])-(\d{4})$/;
        var valresult = textDate.match(DateExpression);
        if (valresult == null) {
            $(".stoast").toastText("warning", "Enter a valid date in dd-mmm-yyyy format (e.g. 01-Jan-1999)", 5, 3);
//            alert('Enter a valid date in dd-mmm-yyyy format (e.g. 01-Jan-1999)');
            document.forms[0].elements[dateV].value = '';
            return false;
        }
        else {
            return true;
        }
    }
}

function isNumericKeyStroke(event) {
    var keyCode = (window.event.which) ? window.event.which : window.event.keyCode;
    if (keyCode <= 91 && keyCode >= 65)
        return false;
    if ((keyCode == 8) && (keyCode <= 31))
        return true;
    if ((keyCode == 13) && (keyCode <= 31))
        return true;
}
function isNumber(evt) {
    evt = (evt) ? evt : window.event;
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        return false;
    }
    return true;
}
function AllowOnlyYorN(e) {
    isIE = document.all ? 1 : 0
    keyEntry = !isIE ? e.which : event.keyCode;
    if ((keyEntry == '78') || (keyEntry == '110') || (keyEntry == '89') || (keyEntry == '121'))
        return true;
    else
        return false;
}
/*===================================================================(TextBoxValidationScript.js)Ends======================================================================*/

function OnMobileNo2Validation(obj) {
    var x = document.getElementById(obj.id).value;
    if (x != '') {
        if (x.length < 10) {
            $(".stoast").toastText("warning", "Mobile number should be 10 digits or more!", 5, 3);
//            alert("Mobile number should be 10 digits or more!");
            document.getElementById(obj.id).focus();
            return false;
        }
    }
}



function ConfirmationToasterForSave(obj, param, form_name) {
    var SaveAlert = document.getElementById(obj);
    if (SaveAlert != null) {
        if (SaveAlert.value == '2') {
           // DisableKeys();
            OnSuccessContinue();
            return true;
        }
        else {
       //     DisableKeys();
            //            $(".smessagebox").scustommessagebox(form_name, "Do you want to save record?", OnSuccessContinue);
            $(".smessagebox").scustommessagebox(2, form_name, "Do you want to Save the Record?", OnSuccessContinue, param, OnCancelConfirmation);
            return false;
            //            if (confirm('Do You want to save Record?.')) {
            //                DisableKeys();
            //                return true;
            //            }
            //            else {
            //                EnableKeys();
            //                return false;
            //            }
        }
    }
}
function OnCancelConfirmation() {
}