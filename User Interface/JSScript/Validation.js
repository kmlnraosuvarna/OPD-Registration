
var ctrlcom = 'ctl00_ContentPlaceHolder1';

var padding = function (n, width, z) {
    z = z || '0';
    n = n + '';
    return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
};
var _xmlData = function (_arrData, _parentNode, _childNode) {
    var _xmlJson = '';
    if (typeof (_arrData) == "object") {
        _xmlJson = JSON.stringify(_arrData);
    }
    else {
        for (var i = 0; i < _arrData.length; i++) {
            _xmlJson += JSON.stringify(_arrData[i]);
            if (i != _arrData.length - 1)
                _xmlJson += ',';
        }
    }
    return '{' + '"' + _parentNode + '"' + ':' + _xmlJson + '}';
};


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
        alert("Please Select Record");
        return false;
    }
}
function numeralsOnly(evt) {

    var intKey = (window.Event) ? evt.which : evt.keyCode;
    if (intKey == undefined)//for InternetExplorer(IE) 
    {
        var charcode = evt.keyCode;
        //EDITMODCODE
        // if (charcode > 31 && (charcode < 48 || charcode > 57))
        if (charcode > 31 && (charcode < 48 || charcode > 57) && charcode != 46) {
            evt.returnValue = false;
            return false;
        }
        return true;
    }
    else//for Mozilla
    {

        //EDITMODCODE
        // if (intKey > 31 && (intKey < 48 || intKey > 57
        if (intKey > 31 && (intKey < 48 || intKey > 57) && intKey != 46) {
            evt.returnValue = false;
            return false;
        }

        return true;
    }
}
/* payment control*/
function numeralsOnlypcontrol(evt) {
    var sel_text = $('#'+ ctrlcom + '_ReceiptControl2_ddlPaymentType').find('option:selected').text();
    if (sel_text == "UPI" || sel_text == "Google Pay" || sel_text == "PhonePe" || sel_text == 'Paytm' || sel_text == 'Lazypay') { }
    else {
        var intKey = (window.Event) ? evt.which : evt.keyCode;
        if (intKey == undefined)//for InternetExplorer(IE) 
        {
            var charcode = evt.keyCode;
            if (charcode > 31 && (charcode < 48 || charcode > 57) && charcode != 46) {
                evt.returnValue = false;
                return false;
            }
            return true;
        }
        else//for Mozilla
        {

            if (intKey > 31 && (intKey < 48 || intKey > 57) && intKey != 46) {
                evt.returnValue = false;
                return false;
            }

            return true;
        } 
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
    Date1 = Date1.split(' ')[0];
    Date2 = Date2.split(' ')[0];
    Date1 = new Date(Date1).format('dd-MMM-yyyy');
    Date2 = new Date(Date2).format('dd-MMM-yyyy');


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
        alert('Please Select Valid Date');
        return false;
    }
    if (dt2 < dt1) {
        mon2 = mon2 - 1;
        dt2 = dt2 + 30;
        var days = dt2 - dt1;
        alert(days);
    }
    if (mon2 < mon1) {
        yr2 = yr2 - yr1;
        mon2 = mon2 + 12;
        var months = mon2 - mon1;
        alert(months);
    }
    var years = yr2 - yr1;
    alert(years);
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
        alert("Please enter valid date of birth..!");
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
            // controlId.style.border = "1px solid #f4785e";
            $('#' + controlId.id).addClass('red');
            return false;
        }
        else if (controlId.value.trim() == '__-__-____') {
            // controlId.style.border = "1px solid #f4785e";
            $('#' + controlId.id).addClass('red');
            return false;
        }
        else if (controlId.value.trim() == '__-___-____') {
            // controlId.style.border = "1px solid #f4785e";
            $('#' + controlId.id).addClass('red');
            return false;
        }
    }
    else if (controlId.tagName == 'SELECT') {
        if (controlId[0] != undefined) {
            if ((controlId[0].innerHTML == '--select--' || controlId[0].value == "0" || controlId[0].innerHTML == '--Select--' || controlId[0].innerHTML == "---Select---") && controlId[0].selected == true) {
                //  controlId.style.border = "1px solid #f4785e";
                $('#' + controlId.id).addClass('red');
                return false;
            }
        }
    }
    else if (controlId.tagName == 'TEXTAREA') {
        if (controlId.value.trim() == '') {
            //controlId.style.border = "1px solid #f4785e";
            $('#' + controlId.id).addClass('red');
            return false;
        }
    }
    else if (controlId.tagName == 'DIV') {
    }
    else if (controlId.tagName == 'TABLE') { /* this control to validate radiovuttionlist added by pushkar */
        if ($("#" + controlId.id + " input:checked").val() == '' || $("#" + controlId.id + " input:checked").val() == undefined) {
            $('#' + controlId.id).addClass('red');
            return false;
        }
    }
    if (controlId.tagName == 'DIV') {
        //controlId.style.border = "0px solid #ffffff";
        $('#' + controlId.id).removeClass('red');
    }
    else {
        // controlId.style.border = "1px solid #bebebe";
        $('#' + controlId.id).removeClass('red');
    }
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
        alert('please select the title before you enter age');
        ddlTitle.focus();
        age.value = '';
        ddlAgeOption.selectedIndex = 0;
        txtDateOfBirth.value = '';
        return false;
    }
    if (ddlTitle[val].innerText == 'Baby') {
        if (Ageval > 12) {
            alert('please enter suitable age');
            document.getElementById('' + ctrlcom + '_AgeCalUsercontrol1_txtBirthNumber').focus();
            return false;
        }
    }
    else if (ddlTitle[val].innerText == 'Master') {
        if (Ageval > 21) {
            alert('please enter suitable age');
            document.getElementById('' + ctrlcom + '_AgeCalUsercontrol1_txtBirthNumber').focus();
        }
    }
}
function chkPhone(event) {
    var phone = document.getElementById('' + ctrlcom + '_txtRefPhone').value;
    var val = phone.length;
    if (val < 10) {
        alert('please enter a valid phone number');
        document.getElementById('' + ctrlcom + '_txtRefPhone').focus();
    }
}
function checkDate(sender, args) {
    if (sender._selectedDate > new Date()) {
        //alert("You cannot select a day greater than today!");
        $(".stoast").toastText("Info", "You cannot select a day greater than today!", 5, 2);
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
        alert('Expiry date cannot less than issue date');
        document.getElementById('' + ctrlcom + '_txtExpiryDt').focus();
    }
}
function checkToDate(sender, args) {
    if (sender._selectedDate < new Date()) {
        alert("You cannot select a day lesser than today!");
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
        alert("Please Select Record");
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
        if (charCode == 32 || charCode == 37) {
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
        if (dt1 >= dt2)
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
function ConfirmationRequiredForSave(obj) /* saving time alert */
{

    var SaveAlert = document.getElementById(obj);
    if (SaveAlert != null) {
        if (SaveAlert.value == '2') {
            /* While Saving Record Ask For Conformation Not Required 
            Added By Pushkar please let him Know Before Uncomment it */
            DisableKeys();
            onOkClick();
            /* return true; */
        }
        else {
            $(".smessagebox").scustommessagebox(2, "Confirmation", "Do you want to save the record?", onOkClick, '', OnCancelConfirmation);
        }
    }
}

function onOkClick() {
    $('#progress').show();
    OnsuccesssaveConfirmation();
    enablelookup();
}

function globalchecking() {
    var status = '';
    var ADMN_NO = $('[id*=ucUmrNo]').val();
    if (ADMN_NO != undefined && ADMN_NO != '' && ADMN_NO != null) {
        var Global_org_id = 0;

        GetNonAsync(
                "Private/Corporate/Changes/billingone.aspx/SaveCheck",
                { ADMN_NO: ADMN_NO, CMP_ID: Global_org_id, FLAG: $('[id*=hdngdocformcd]').val(), datetime: globaldatetime },
                function (Data) {
                    if (Data.d != '') {
                        var data = JSON.parse(Data.d);
                        if (data[0].STATUS != '') {
                            $(".stoast").toastText("warning", data[0].STATUS, 5, 3);
                            status = data[0].STATUS;

                        } 
                    }
                },
                function (jqXHR, textStatus, errorThrown) {
                });
        if (status != "") {
            return true;
        } else { return true; }
    } else { return true; }
}

function WardConfirmationRequiredForSave(obj) /* saving time alert */
{

    var SaveAlert = document.getElementById(obj);
    if (SaveAlert != null) {
        if (SaveAlert.value == '2') {
            /* While Saving Record Ask For Conformation Not Required 
            Added By Pushkar please let him Know Before Uncomment it */
            onOkClickWard();
            DisableKeys();
            /* return true; */
        }
        else {
            $(".smessagebox").scustommessagebox(2, "Confirmation", "Do you want to save the record?", onOkClickWard, '', OnCancelConfirmation);
        }
    }
}
function onOkClickWard() {
    $('#progress').show();
    OnsuccesssaveConfirmation1();
    enablelookup();
}

function ConfirmationRequiredForSaveWithParam(obj, param) { /* param --means report path parameter , after saving report related alert */
    var SaveAlert = document.getElementById(obj);
    if (SaveAlert != null) {
        if (SaveAlert.value == '2') {
            DisableKeys();
            return true;
        }
        else {
            $(".smessagebox").scustommessagebox(2, "Confirmation", "Do you want to save the record?", onOkClickParam, param, OnCancelConfirmation);
        }
    }
}
function onOkClickParam(param) {
    $('#progress').show();
    OnsuccesssaveConfirmationwithParam(param);
    enablelookup();
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
function lettersOnly(evt) { evt = (evt) ? evt : event; var charCode = (evt.charCode) ? evt.charCode : ((evt.keyCode) ? evt.keyCode : ((evt.which) ? evt.which : 0)); if (charCode > 33 && (charCode < 65 || charCode > 90) && (charCode < 97 || charCode > 122)) { if (charCode == 40 || charCode == 46 || charCode == 38 || charCode == 37 || charCode == 39) { return true; } else { alert("Enter letters only."); return false; } } return true; }
function EmailIdValidation(ID) {
    if (ID.value.trim() != '') {
        var regex = /\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;
        if (regex.test(ID.value)) {
            ID.value = ID.value.toLowerCase();
            return true;
        }
        else {

            $(".stoast").toastText("warning", "Please enter the email address!", 5, 3);
            ID.value = '';
            //Shiva 12-02-2016
            ID.focus();
            if (localStorage.getItem("ED") != "" && localStorage.getItem("ED") != undefined && localStorage.getItem("ED") != null) {
                if (localStorage.getItem("ED") == "OPRegConBilling.aspx" || localStorage.getItem("ED") == "NewPatientRegistration.aspx" || localStorage.getItem("ED") == "OPDBill.aspx") {
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
            alert('Please Enter Numbers Only.');
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
    //  var arr = new Array(32, 13, 116);
    var arr = new Array(32, 116);
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
    if (value != "" && value != null && value && 'null' && value != undefined) {
        //value = value.replace(/\;/g, '&#59;');
        value = value.replace(/\&/g, '&amp;');/*IMP*/
        value = value.replace(/\#/g, '&#35;');
        value = value.replace(/\>/g, '&gt;'); /*IMP*/
        value = value.replace(/\</g, '&lt;'); /*IMP*/
        value = value.replace(/\'/g, '&apos;'); /*IMP*/
        value = value.replace(/\%/g, '&#37;');
        value = value.replace(/\"/g, '&quot;'); /*IMP*/
        value = value.replace(/\'/g, '&#39;');
        value = value.replace(/\$/g, '&#36;');
        
    
        value = value.replace(/\@/g, '&#64;');
        value = value.replace(/\-/g, '&#45;');
        value = value.replace(/\_/g, '&#95;');
        value = value.replace(/\,/g, '&#44;');
        value = value.replace(/\!/g, '&#33;');
        value = value.replace(/\+/g, '&#43;');
        value = value.replace(/\./g, '&#46;');
        value = value.replace(/\//g, '&#47;');
        value = value.replace(/\\/g, '&#92;');


        value = value.replace(/\[/g, '&#91;');
        value = value.replace(/\]/g, '&#93;');
        value = value.replace(/\~/g, '&#126;');
        value = value.replace(/\`/g, '&#96;');
        value = value.replace(/\^/g, '&#94;');
        value = value.replace(/\*/g, '&#42;');
        value = value.replace(/\(/g, '&#40;');
        value = value.replace(/\)/g, '&#41;');
        value = value.replace(/\=/g, '&#61;');
        value = value.replace(/\|/g, '&#124;');
        value = value.replace(/\{/g, '&#123;');
        value = value.replace(/\{/g, '&#125;');
       // value = value.replace(/\:/g, '&#58;');
        value = value.replace(/\?/g, '&#63;');
        return value;
    }
    else {
        return '';
    }
}
function ConfirmationToasterForSave(obj, param, form_name, savectrl) {
    if (savectrl != undefined)
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
         if(savectrl!=undefined)
             $(".smessagebox").scustommessagebox(2, form_name, "Do you want to save the record?", onOkClickToaster, param, OnCancelConfirmation, savectrl);
         else
             $(".smessagebox").scustommessagebox(2, form_name, "Do you want to save the record?", onOkClickToaster, param, OnCancelConfirmation);
            return false;
        }
    }
}
function onOkClickToaster(param) {
    $('#progress').show();
    OnSuccessContinue(param);
    enablelookup();
}
function ConfirmationToasterForSaveIP(obj, param, form_name, savectrl) {
    if (savectrl != undefined)
        savectrl.value = 1;
    var SaveAlert = document.getElementById(obj);
    if (form_name == undefined || form_name=='') {form_name = "Confirmation"; }
    if (SaveAlert != null) {
        if (SaveAlert.value == '2') {
            //  DisableKeys();
            onOkClickToasterIP(param);
            return true;
        }
        else {
            //   DisableKeys();
            if (savectrl != undefined)
                $(".smessagebox").scustommessagebox(2, form_name, "Do you want to save the record?", onOkClickToasterIP, param, OnCancelConfirmation, savectrl);
            else
                $(".smessagebox").scustommessagebox(2, form_name, "Do you want to save the record?", onOkClickToasterIP, param, OnCancelConfirmation);
            return false;
        }
    }
}
function onOkClickToasterIP(param) {
    $('#progress').show();
    var process = globalchecking(process);
    if (process == false) { return false; } else {
        OnSuccessContinue(param);
        enablelookup();
    }
}
function OnCancelConfirmation(savectrl) {
if(savectrl!=undefined)
    savectrl.value = 0;
    //ctl00_ContentPlaceHolder1_headerControl1_hdnisSaveDisable.value = 0;
    EnableKeys();
}
/* Form Level Messages Needed For Details Added By Pushkar */
function ConfirmationRequiredForSaveWithParam_message(obj, param, message) { /* param --means report path parameter , after saving report related alert */
    
    var SaveAlert = document.getElementById(obj);
    setTimeout(function () {
        $(".smessagebox").scustommessagebox(1, "Confirmation", message, OnsuccesssaveConfirmationwithParam_message, param, OnCancelConfirmation);
    }, 1 * 500);
    return false;
}


/* Form Level Messages Needed For Services  Details Added By Pushkar */
function ConfirmationRequiredForSaveWithParam_message_services(obj, param, message) { /* param --means report path parameter , after saving report related alert */
    var SaveAlert = document.getElementById(obj);
    $(".smessagebox").scustommessagebox(1, "Confirmation", message, OnsuccesssaveConfirmationwithParam_message_services, param, OnCancelConfirmation_services);
}
/* Form Level Messages Needed For Transaction copay   Added By Pushkar */

function ConfirmationRequiredForSaveWithParam_message_transaction(obj, param, message) { /* param --means report path parameter , after saving report related alert */
    var SaveAlert = document.getElementById(obj);
    $(".smessagebox").scustommessagebox(1, "Confirmation", message, OnsuccesssaveConfirmationwithParam_message_transaction, param, OnCancelConfirmation_transaction);
}


/* Form Level Messages Needed For Services  Details Added By Pushkar */
function ConfirmationRequiredForSaveWithParam_message_services_array(obj, param, message) { /* param --means report path parameter , after saving report related alert */
    var SaveAlert = document.getElementById(obj);
    $(".smessagebox").scustommessagebox(1, "Confirmation", message, OnsuccesssaveConfirmationwithParam_message_services_array, param, OnCancelConfirmation_services_array);
}


function NumCharsSpaceWithHiphen(evt) {
    evt = (evt) ? evt : event;
    var charCode = (evt.charCode) ? evt.charCode : ((evt.keyCode) ? evt.keyCode : ((evt.which) ? evt.which : 0));
    if (charCode > 30 && (charCode < 65 || charCode > 90) && (charCode < 97 || charCode > 122) && (charCode < 48 || charCode > 57)) {
        if (charCode == 45) {
            evt.returnValue = true;
            return true;
        }
        if (charCode == 32 || charCode == 37) {
            evt.returnValue = true;
            return true;
        }
        evt.returnValue = false;
        return false;
    }
    return true;
}

/*Days Count between Dates*/
function days_betwwen_dates(d1, d2) {
    var oneday = 24 * 60 * 60 * 1000;
    var date1 = new Date(d1).getTime();
    var date2 = new Date(d2).getTime();
    var diffdays = Math.abs(date1 - date2);
    return Math.round(diffdays / oneday);
}

/* Form Level Messages Needed For Services  Details Added By Pushkar */
function ConfirmationRequiredForSaveWithParam_message_services_array_lat(obj, param, message) { /* param --means report path parameter , after saving report related alert */
    var SaveAlert = document.getElementById(obj);
    $(".smessagebox").scustommessagebox(1, "Confirmation", message, OnsuccesssaveConfirmationwithParam_message_services_array_lat, param, OnCancelConfirmation_services_array_lat);
}

function CheckNumeric(evt) {
    evt = (evt) ? evt : window.event
    var charCode = (evt.which) ? evt.which : evt.keyCode
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        $(".stoast").toastText("Info", "This field accepts numbers only!", 2, 3);
        //$(".stoast").toastText("Info", "This field only accepts numbers!", 2, 3);
        return false
    }
    status = "";
    return true;
}
function ShowCustomDialogBox(evt, Title, Content, btn1Text, Btn2Text, functionName, paramList) {

    var btn1css;
    var btn2css;
    if (btn1Text == '')
        btn1css = "hidecss";
    else
        btn1css = "showcss";
    if (Btn2Text == '')
        btn2css = "hidecss";
    else
        btn2css = "showcss";
    // $("#lblMessage").html(Content);
    $("#_modaltitle").html(Title);
    $("#_modalmsg").html(Content);
    $("#_modalyes").html(btn1Text);
    $("#_modalno").html(Btn2Text);
    $("#dialog").show();
    $(".modal-dialog").animate({ top: '80px', opacity: '1' });
    $('.modamask').show();

    $('.alertclose,#_modalno').click(function () {
        $(".modal-dialog").animate({ top: '-50px', opacity: '0' });
        $('#dialog,.modamask').hide(100);
    });

    $('#_modalyes').click(function (e) {
        $('#dialog,.modamask').hide(100);
        alert('Hi');
        functionName(paramList);
        e.stopPropagation();
        return false;
    });


    evt.stopPropagation();
    return false;
}

function CommonRecordDeactive(_tbl, _key, _status) {
    GetAsync(
          "BloodBankService.cs/CommonRecordDeactive",
        { tbl: _tbl, key: _key, status: _status },
        function (JData) {
        },
        function (jqXHR, textStatus, errorThrown) {
            $(".stoast").toastText("Info", errorThrown, 5, 4);
        });
}
function validateTextBox(eventRef, elementRef) {
    var functionReturn = true;
    eventRef = (eventRef) ? eventRef : (window.event) ? window.event : (event) ? event : null;

    if (eventRef == null) {
        return false;
    }

    var keyCodeEntered = (eventRef.which) ? eventRef.which : (eventRef.keyCode) ? eventRef.keyCode : -1;


    // If this is a space character (32) and this is the first character entered...
    if ((keyCodeEntered == 32) && (elementRef.value.length <= 0))
        functionReturn = false;

    if (functionReturn == false) {
        if (window.event) {
            // Internet Explorer...

            window.event.cancelBubble = true;
            window.event.returnValue = false;
        }
        else {
            // Firefox...

            eventRef.preventDefault();
            eventRef.stopPropagation();
        }
    }

    return functionReturn;
}

function ValidateValidateLandNumber(value) {
    var value = document.getElementById('' + ctrlcom + '_txtMobile2').value;
    var length = value.length;
    chk1 = "1234567890()-+ ";
    for (i = 0; i < length; i++) {
        ch1 = value.charAt(i);
        rtn1 = chk1.indexOf(ch1);
        if (rtn1 == -1)
            document.getElementById('' + ctrlcom + '_txtMobile2').value = '';
        return false;
    }
    return true;
}
function ValidateLandNumber(value) {
    var value = document.getElementById('' + ctrlcom + '_txtMobile1').value;
    var length = value.length;
    chk1 = "1234567890()-+ ";
    for (i = 0; i < length; i++) {
        ch1 = value.charAt(i);
        rtn1 = chk1.indexOf(ch1);
        if (rtn1 == -1)
            document.getElementById('' + ctrlcom + '_txtMobile1').value = '';
        return false;
    }
    return true;
}
function DisableFields() {
    $('#aspnetForm').find(':input').each(function () {
        if ($(this).prop('type') != 'image')
            $(this).attr('disabled', true);
    });
}
function NumbersWithDot(evt) {
    var e = event || evt; // for trans-browser compatibility
    var charCode = e.which || e.keyCode;
    if (charCode == 190 || charCode == 110) {
        return true;
    }
    if (charCode > 31 && (charCode < 48 || charCode > 57) && charCode > 48 && (charCode < 96 || charCode > 105))

        return false;

    return true;

}



function CheckMblNo(ev) {
    if (document.getElementById(ev.id).value == '0000000000') {
        document.getElementById(ev.id).value = '';
        $(".stoast").toastText("warning", "The mobile number should not be all zeros!", 2, 3);
        return false;
    }
}
/* Remove Conformation */
function ConfirmationRequiredForRemoove(param, message) {
    setTimeout(function () {
        $(".smessagebox").scustommessagebox(1, "", message, OnRemoveConfirmation, param, OnRemoveCancelConfirmation);
    }, 1 * 500);
    return false;
}

/* Form Level Messages Needed For Services  Details Added By Pushkar */
function ConfirmationRequiredFor_message(obj, param, message) { /* param --means report path parameter , after saving report related alert */
    var SaveAlert = document.getElementById(obj);
    $(".smessagebox").scustommessagebox(1, "Confirmation", message, OnsuccesssaveConfirmation_message, param);
}

function MobileNoSettingValidations(obj) {
    var maxmobilenodigits = $('[id*=hdnMobileMaxDigits]').val();
    var minmobilenodigits = $('[id*=hdnMobileMinDigits]').val();
    //if ($('[id*=hdnMobileMadatory]').val() == 'True') {
    if (maxmobilenodigits != '' && maxmobilenodigits != undefined && maxmobilenodigits != null) {
        document.getElementById(obj).maxLength = maxmobilenodigits;
    }
    else {
        document.getElementById(obj).maxLength = '10';
    }
    //}
}
function isObject(objectid) {
    return ((objectid) ? true : false);
}
function MobileNoSettingSavevalidate(obj, flag, form_name, Nationality) {

    var _status = true;
    var maxmobilenodigits = $('[id*=hdnMobileMaxDigits]').val();
    var minmobilenodigits = $('[id*=hdnMobileMinDigits]').val();

    //if ((isObject(document.getElementById(obj)) ? document.getElementById(obj).value : "") == '') {
    if (document.getElementById(obj) != null) {
        if (document.getElementById(obj).value == '') {
            if (flag != 'T') {
                if ($('[id*=hdnMobileMadatory]').val() == 'True') {
                    if (form_name == undefined || (form_name == 'REG' && Nationality != 'Y') || (form_name == "OPD" && Nationality != 'Y') || (form_name == "PRE" && Nationality != 'Y')) {
                        $(".stoast").toastText("warning", "Please enter mobile number!", 5, 3);
                        document.getElementById(obj).focus();
                        _status = false;
                    }

                }
            }

        }
        else {
            var x = document.getElementById(obj).value;
            if (x.length < minmobilenodigits) {
                $(".stoast").toastText("warning", "Enter Minimum of " + minmobilenodigits + " Digits Mobile Number", 5, 3);
                if (flag != 'T')
                    document.getElementById(obj).focus();
                _status = false;
            }
        }
    }
    return _status;
}
function CheckProofIDStatus(obj) {

    var ProofID = $('[id*=ddlproofid]').val();
    var ProofName = $('[id*=txtSSN]').val();
    if (ProofID == '' || ProofID == null || ProofID == undefined) { ProofID = 0; }
    if (ProofName == '' || ProofName == null || ProofName == undefined) { ProofName = ''; }
    if (obj == '' || obj == null || obj == undefined) { obj = ''; }
    if (document.getElementById('ctl00_ContentPlaceHolder1_hdnClientName').value.toLowerCase() == 'ssbgmc') {
        if (obj == 'REG') {
            if (ProofID == 3) { ProofID = 0; }
        }
    }
    if (parseInt(ProofID) > 0 && ProofName != '') {

        if (obj == 'PRE') { /* Pre Registration Condition Starts */
            GetAsync(
                    "Private/FrontOffice/OPDBILLNEW.aspx/CheckIdProofStatus",
                    { ProofID: ProofID, ProofName: ProofName, obj: '' },
                    function (jdata) {

                        if (jdata != null) {
                            if (jdata.d != null) {
                                if (jdata.d[0].STATUS == 'Y') {
                                    document.getElementById('' + ctrlcom + '_txtSSN').value = '';
                                    $(".stoast").toastText("Info", "This Card number is already Registered !", 5, 3);
                                    return false;
                                }
                                else { /* Pre Registration Starts */
                                    GetAsync(
                                                        "Private/FrontOffice/OPDBILLNEW.aspx/CheckIdProofStatus",
                                                        { ProofID: ProofID, ProofName: ProofName, obj: obj },
                                                        function (jdata) {

                                                            if (jdata != null) {
                                                                if (jdata.d != null) {
                                                                    if (jdata.d[0].STATUS == 'Y') {
                                                                        if ($('[id*=hdnAdharNo]').val() != $('[id*=txtSSN]').val()) {
                                                                            document.getElementById('' + ctrlcom + '_txtSSN').value = '';
                                                                            $(".stoast").toastText("Info", "This Card number is already exists.!", 5, 3);
                                                                            return false;
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        },
                                                        function (jqXHR, textStatus, errorThrown) {
                                                            $(".stoast").toastText("Warning", errorThrown, 5, 3);
                                                        });

                                } /* Pre Registration Ends */
                            }
                        }
                    },
                    function (jqXHR, textStatus, errorThrown) {
                        $(".stoast").toastText("Warning", errorThrown, 5, 3);
                    });

        } /* Pre Registration Condition Ends */
                else { /* Reg Condition Starts */
    
            GetAsync(
                    "Private/FrontOffice/OPDBILLNEW.aspx/CheckIdProofStatus",
                    { ProofID: ProofID, ProofName: ProofName, obj: obj },
                    function (jdata) {

                        if (jdata != null) {
                            if (jdata.d != null) { /* reg condition starts */
                                if (jdata.d[0].STATUS == 'Y') {
                                    document.getElementById('' + ctrlcom + '_txtSSN').value = '';
                                    $(".stoast").toastText("Info", "This Card number is already exists.!", 5, 3);
                                    return false;
                                } /* Reg Condition Ends */
                                else {/* Pre Reg Ends */
                                    GetAsync(
                                                        "Private/FrontOffice/OPDBILLNEW.aspx/CheckIdProofStatus",
                                                        { ProofID: ProofID, ProofName: ProofName, obj: 'PRE' },
                                                        function (jdata) {

                                                            if (jdata != null) {
                                                                if (jdata.d != null) {
                                                                    if (jdata.d[0].STATUS == 'Y') {
                                                                        if (obj == 'REG') {
                                                                            var pre_reg_no = $('#'+ ctrlcom + '_UCprereg_txtSearchControl').val();
                                                                            if (pre_reg_no == undefined || pre_reg_no == null || pre_reg_no == '') { pre_reg_no = ''; }
                                                                            if (pre_reg_no == '') {
                                                                                document.getElementById('' + ctrlcom + '_txtSSN').value = '';
                                                                                $(".stoast").toastText("Info", "This Card number is already exists In Pre Registration ,Please Select Through Pre-Registration !", 5, 3);
                                                                                return false;
                                                                            }
                                                                        }
                                                                        else {
                                                                            document.getElementById('' + ctrlcom + '_txtSSN').value = '';
                                                                            $(".stoast").toastText("Info", "This Card number is already exists In Pre Registration ,Please Select Through Pre-Registration !", 5, 3);
                                                                            return false;
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        },
                                                        function (jqXHR, textStatus, errorThrown) {
                                                            $(".stoast").toastText("Warning", errorThrown, 5, 3);
                                                        });
                                } /* Pre Reg Ends */
                            }
                        }
                    },
                    function (jqXHR, textStatus, errorThrown) {
                        $(".stoast").toastText("Warning", errorThrown, 5, 3);
                    });
        } /* Reg Condition Ends */
    }
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
function LookUpset(obj) {
    if (obj != '' && obj != null && obj != undefined) {

        if ($('[id*=hdnDocName]') != null) {
            if ($('[id*=hdnDocName]').val() == 'OPQUICK') {
                if (obj == 'ctl00_ContentPlaceHolder1_ucReferal_ucreferalname_txtSearchControl') {
                    $('#lk_txt_options_ctl00_ContentPlaceHolder1_ucReferal_ucreferalname').css('top', '203px');
                    $('#lk_txt_options_ctl00_ContentPlaceHolder1_ucReferal_ucreferalname').css('left', '115px');
                    $('#lk_txt_options_ctl00_ContentPlaceHolder1_ucReferal_ucreferalname').css('min-width', '179px');
                    $('#lk_txt_options_ctl00_ContentPlaceHolder1_ucReferal_ucreferalname').css('width', '219px');


                    var add = $('#lk_txt_options_ctl00_ContentPlaceHolder1_ucReferal_ucreferalname');
                    $('#lk_txt_options_ctl00_ContentPlaceHolder1_ucReferal_ucreferalname').remove();
                    $('#Refscroll').append(add);
                }
                else if (obj == 'ctl00_ContentPlaceHolder1_ucReferal_ucrfrlsrc_txtSearchControl') {
                    $('#lk_txt_options_ctl00_ContentPlaceHolder1_ucReferal_ucrfrlsrc').css('top', '226px');
                    $('#lk_txt_options_ctl00_ContentPlaceHolder1_ucReferal_ucrfrlsrc').css('left', '115px');
                    $('#lk_txt_options_ctl00_ContentPlaceHolder1_ucReferal_ucrfrlsrc').css('min-width', '197px');



                    var add = $('#lk_txt_options_ctl00_ContentPlaceHolder1_ucReferal_ucrfrlsrc');
                    $('#lk_txt_options_ctl00_ContentPlaceHolder1_ucReferal_ucrfrlsrc').remove();
                    $('#Refscroll').append(add);


                }
                else if (obj == 'ctl00_ContentPlaceHolder1_ucReferal_ucReferedto_txtSearchControl') {
                    $('#lk_txt_options_ctl00_ContentPlaceHolder1_ucReferal_ucReferedto').css('top', '249px');
                    $('#lk_txt_options_ctl00_ContentPlaceHolder1_ucReferal_ucReferedto').css('left', '115px');
                    $('#lk_txt_options_ctl00_ContentPlaceHolder1_ucReferal_ucReferedto').css('min-width', '197px');


                    var add = $('#lk_txt_options_ctl00_ContentPlaceHolder1_ucReferal_ucReferedto');
                    $('#lk_txt_options_ctl00_ContentPlaceHolder1_ucReferal_ucReferedto').remove();
                    $('#Refscroll').append(add);
                }
            }
        }
    }

}
/* added by rani on 01-03-2018 fro ot*/
function GetDateFormatCompanyPolicySettings(DateCntrlId, TimeCntrl, CreateDt) {
    var Time = CreateDt.split(' ');
    if ($('#' + DateCntrlId + '').val() == "") { $('#' + DateCntrlId + '').val("dd-MMM-yyyy"); }
    /* if ($('#' + TimeCntrl + '').val() == "") { $('#' + TimeCntrl + '').val("hh:mm"); }+ " " + $('#' + TimeCntrl + '').val(); */
    var DateFormat = $('#' + DateCntrlId + '').val()
    if (Time[1] == undefined) { Time[1] = ""; }
    var CreateDt = new Date(CreateDt); CreateDt = CreateDt.format(DateFormat); CreateDt = CreateDt + " " + Time[1];
    return CreateDt;
}
/* up to here */


function ValidateEmail(obj) {
    var exp = /^[a-zA-Z0-9._-]+@[a-zA-Z0-0.-]+\.[a-zA-Z]{2,5}$/;
    return (exp.test(obj)) ? true : false;
}
function VaildateMultipleEMailID(obj, separator) {
    var val = obj.value;
    if (val != '') {
        var res = val.split(separator);
        for (var i = 0; i < res.length; i++) {
            if (res[i] != '') {
                if (!ValidateEmail(res[i])) {
                    obj.focus();
                    alert('Please check ' + res[i] + 'Email address not valid');
                    return false;
                }
            }
        }

    }
    return true;
}
function numeralsOnlyTest(evt, obj) {

    var intKey = (window.Event) ? evt.which : evt.keyCode;
    if (intKey == undefined)/*for InternetExplorer(IE) */
    {
        var charcode = evt.keyCode;
        if (charcode > 31 && (charcode < 48 || charcode > 57) && charcode != 46) {
            evt.preventDefault()

        }
        if (charcode == 46) {
            if ($.inArray(parseInt(charcode), arr) != -1) {
                evt.preventDefault()

            }
            else {
                arr.push(charcode);
            }
        }
        /*ReplaceStartWithZero(obj);*//*Please dont uncomment this line b'coz some payment selection of amt will get some problem*/
        return true;
    }
    else/*for Mozilla*/
    {
        if (intKey > 31 && (intKey < 48 || intKey > 57) && intKey != 46) {
            evt.preventDefault()

        }
        if (intKey == 46) {
            if ($.inArray(parseInt(intKey), arr) != -1) {
                evt.preventDefault()

            }
            else {
                arr.push(intKey);
            }
        }
        /*ReplaceStartWithZero(obj);*//*Please dont uncomment this line b'coz some payment selection of amt will get some problem*/
        return true;
    }
}
function numeralsandOneDcml(ev, obj) {
    var Keycd = (event.which) ? event.which : (window.event.keyCode) ? window.event.keyCode : -1;
    if (Keycd >= 48 && Keycd <= 57) {
        return true;
    }
    else if (Keycd == 46) {
    if ((obj.value) && (obj.value.indexOf('.') >= 0)) {
        ev.preventDefault();
    }
    else {
        return true;
    }
    }
    else {
        ev.preventDefault();
    }
}
function TitleUpperCase(oField) {
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
    myValue = myValue.toUpperCase().trim();
    return myValue;
}