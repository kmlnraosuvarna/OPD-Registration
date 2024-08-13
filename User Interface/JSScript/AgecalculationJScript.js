$(document).ready(function () {
    $('[id*=txtEmpJoiningDt]').on('keydown', function (e) { Editemployejoiningdate(e); });
    $('[id*=EmployeRegistationDate]').on('keydown', function (e) { EditEmployeRegistationDate(e); });
});


var AgeCount;
var one_day = 1000 * 60 * 60 * 24
var one_month = 1000 * 60 * 60 * 24 * 30
var one_year = 1000 * 60 * 60 * 24 * 30 * 12
var dat = new Date();
var curday = dat.getDate();
var curmon = dat.getMonth() + 1;
var curyear = dat.getFullYear();
var totalNumOfDaysOfMonths = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
/*Calculate The age by choosing calender Data*/

function Joiningdatecalculation(obj) {
    if (obj._selectedDate > new Date()) {
        $(".stoast").toastText("warning", "You cannot select a day after today!", 5, 3);
        document.getElementById('ctl00_ContentPlaceHolder1_txtEmpJoiningDt').value = '__-___-____';
        return false;
    }
    else {
        var _sele_date = obj.get_selectedDate().format("dd-MM-yyyy");
        var ageby = _sele_date.replace(/[-:,\.]/g, "-"); // change delimiters to /
        var ageby = _sele_date.replace(/[^0-9A-Za-z\-]/gi, "-");
        var date = ageby.split('-');
        var _tdate = date[0];
        var _tmonth = date[1];
        var _tyear = date[2]; /* strip all but digits and */
        var dayOfBirth = _tdate; /*your literal date of birth*/
        var monthOfBirth = _tmonth; /*your month of birth*/
        var yearOfBirth = _tyear; /*your year of birth :: Use all the 4 digits, not 2 two digits in short form*/
        var today = new Date().format('dd-MM-yyyy');
        var dt = today.split('-');
        var dayOfToday = dt[0];
        var monthOfToday = dt[1];
        var yearOfToday = dt[2];
        var yearDiff = 0;
        var monthDiff = 0;
        var daysDiff = 0;

        var month_birth_format = 'Jan';
        switch (monthOfBirth) {
            case '01':
                month_birth_format = 'Jan';
                break;
            case '02':
                month_birth_format = 'Feb';
                break;
            case '03':
                month_birth_format = 'Mar';
                break;
            case '04':
                month_birth_format = 'Apr';
                break;
            case '05':
                month_birth_format = 'May';
                break;
            case '06':
                month_birth_format = 'Jun';
                break;
            case '07':
                month_birth_format = 'Jul';
                break;
            case '08':
                month_birth_format = 'Aug';
                break;
            case '09':
                month_birth_format = 'Sep';
                break;
            case '10':
                month_birth_format = 'Oct';
                break;
            case '11':
                month_birth_format = 'Nov';
                break;
            case '12':
                month_birth_format = 'Dec';
                break;
            default:
                month_birth_format = 'Jan';
                break;
         }
        var date_format = dayOfBirth + '-' + month_birth_format + '-' + yearOfBirth;
        document.getElementById('ctl00_ContentPlaceHolder1_txtEmpJoiningDt').value = date_format;
        OnNullValue(document.getElementById(obj._element.id));
    }
}

function Editemployejoiningdate(event) {
    if (navigator.appName != "Microsoft Internet Explorer") {
        if (event.keyCode == 8 || event.keyCode == 46) {
            var txtElement = $get(event.target.id);
            var txtElmntText = GetTextElementValue1(event.target.id);
            var txtElementCursorPos = doGetCursorPosition1(txtElement);
            var maskExtender = $find('ctl00_ContentPlaceHolder1_MaskedEdit2'); //$find('<%= MaskedEdit2.ClientID%>');
            var start = txtElement.selectionStart;
            var end = txtElement.selectionEnd;
            var selectedSymbols = end - start;
            if (event.keyCode == 8) {
                if (selectedSymbols > 0) {
                    var str1 = txtElmntText.substr(0, start);
                    var str2 = txtElmntText.substr(end);
                    var str = str1 + str2;
                    if (str.length < txtElmntText.length)
                        str = appendStrWithChar1(str, txtElmntText, "_");
                    setTextElementValue1(event.target.id, str);
                    maskExtender._LogicTextMask = DeleteCursorChars1(str, "_");
                    setCursorPosition1(txtElement, start);
                }
                else {
                    if ((txtElementCursorPos - 1) >= 0) {
                        var symbol_to_Delete = txtElmntText[txtElementCursorPos - 1];
                        if (symbol_to_Delete == "-") {
                            setCursorPosition1(txtElement, txtElementCursorPos - 1);
                        }
                        else {
                            var str1 = txtElmntText.substr(0, txtElementCursorPos - 1);
                            var str2 = txtElmntText.substr(txtElementCursorPos);
                            var str = str1 + str2;
                            if (str.length < txtElmntText.length)
                                str = appendStrWithChar1(str, txtElmntText, "_");
                            setTextElementValue1(event.target.id, str);
                            maskExtender._LogicTextMask = DeleteCursorChars1(str, "_");
                            setCursorPosition1(txtElement, txtElementCursorPos - 1);
                        }
                    }
                }
            }
            if (event.keyCode == 46) {
                if (txtElementCursorPos >= 0 && txtElementCursorPos < txtElmntText.length && ((selectedSymbols <= 1 && txtElmntText[txtElementCursorPos] != "_") || selectedSymbols > 1)) {
                    if (selectedSymbols > 1) {
                        var str1 = txtElmntText.substr(0, start);
                        var str2 = txtElmntText.substr(end);
                        var str = str1 + str2;
                        if (str.length < txtElmntText.length)
                            str = appendStrWithChar1(str, txtElmntText, "_");
                        setTextElementValue1(event.target.id, str);
                        maskExtender._LogicTextMask = DeleteCursorChars1(str, "_");
                        setCursorPosition1(txtElement, start);
                    }
                    else {
                        var symbol_to_Delete = txtElmntText[txtElementCursorPos];
                        if (symbol_to_Delete != "-") {
                            var str1 = txtElmntText.substr(0, txtElementCursorPos);
                            var str2 = txtElmntText.substr(txtElementCursorPos + 1);
                            var str = str1 + str2;
                            if (str.length < txtElmntText.length)
                                str = appendStrWithChar1(str, txtElmntText, "_");
                            setTextElementValue1(event.target.id, str);
                            maskExtender._LogicTextMask = DeleteCursorChars1(str, "_");
                            setCursorPosition1(txtElement, txtElementCursorPos);
                        }
                        else {
                            setCursorPosition1(txtElement, txtElementCursorPos + 1);
                        }
                    }
                }
            }
        }
        if (event.keyCode == 35 || event.keyCode == 36) {
            var txtElement = $get(event.target.id);
            var txtElmntText = GetTextElementValue1(event.target.id);
            if (event.keyCode == 36) { setCursorPosition1(txtElement, 0); }
            if (event.keyCode == 35) { setCursorPosition1(txtElement, txtElmntText.length); }
        }
    }
}

function setCursorPosition1(ctrl, pos) {
    if (ctrl.setSelectionRange) {
        ctrl.focus();
        ctrl.setSelectionRange(pos, pos);
    }
    else if (ctrl.createTextRange) {
        var range = ctrl.createTextRange();
        range.collapse(true);
        range.moveEnd('character', pos);
        range.moveStart('character', pos);
        range.select();
    }
}
function DeleteCursorChars1(str, char) {
    for (i = 0; i < str.length; i++) {
        if (str[i] == char) {
            str = str.substr(0, i);
            return str;
        }
    }
}
function setTextElementValue1(elementId, txt) {
    var text = $get(elementId);
    if (text.AjaxControlToolkitTextBoxWrapper) {
        text.AjaxControlToolkitTextBoxWrapper.set_Value(txt);
    }
    else
    { text.value = txt; }
}
function appendStrWithChar1(str, tempstr, appchar) {
    var differnce = tempstr.length - str.length;
    if (differnce > 0) {
        var s = str.split('-');
        if ((str.split('-')[0]).length <= 2) { var pos1 = (s[0].split(''))[0]; var pos2 = (s[0].split(''))[1]; if (pos1 == '' || pos1 == undefined) { pos1 = appchar; } else if (pos2 == '' || pos2 == undefined) { pos2 = appchar; } var day = pos1 + pos2; }
        if ((str.split('-')[1]).length <= 3) { var pos1 = (s[1].split(''))[0]; var pos2 = (s[1].split(''))[1]; var pos3 = (s[1].split(''))[2]; if (pos1 == '' || pos1 == undefined) { pos1 = appchar; } else if (pos2 == '' || pos2 == undefined) { pos2 = appchar; } else if (pos3 == '' || pos3 == undefined) { pos3 = appchar; } var mon = pos1 + pos2 + pos3; }
        if ((str.split('-')[2]).length <= 4) { var pos1 = (s[2].split(''))[0]; var pos2 = (s[2].split(''))[1]; var pos3 = (s[2].split(''))[2]; var pos4 = (s[2].split(''))[3]; if (pos1 == '' || pos1 == undefined) { pos1 = appchar; } else if (pos2 == '' || pos2 == undefined) { pos2 = appchar; } else if (pos3 == '' || pos3 == undefined) { pos3 = appchar; } else if (pos4 == '' || pos4 == undefined) { pos4 = appchar; } var year = pos1 + pos2 + pos3 + pos4; }
        str = day + "-" + mon + "-" + year;
    }
    return str;
}

function doGetCursorPosition1(ctrl) {
    var CurPos = 0;
    if (document.selection) {
        ctrl.focus();
        var sel = document.selection.createRange();
        sel.movStart('character', -ctrl.valueOf.length);
        CurPos = sel.text.length;
    }
    else if (ctrl.selectionStart || ctrl.selectionStart == '0')
        CurPos = ctrl.selectionStart;
    return CurPos;
}
function GetTextElementValue1(elementId) {
    var textBox = $get(elementId), text;
    if (textBox.AjaxControlToolkitTextBoxWrapper) {
        text = textBox.AjaxControlToolkitTextBoxWrapper.get_Value();
    }
    else {
        text = textBox.value;
    }
    return text;
}

/*********************    EditEmployeRegistationDate     *****************/
var AgeCount;
var one_day = 1000 * 60 * 60 * 24
var one_month = 1000 * 60 * 60 * 24 * 30
var one_year = 1000 * 60 * 60 * 24 * 30 * 12
var dat = new Date();
var curday = dat.getDate();
var curmon = dat.getMonth() + 1;
var curyear = dat.getFullYear();
var totalNumOfDaysOfMonths = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
/*Calculate The age by choosing calender Data*/

function EmployeRegistationDate(obj) {
    if (obj._selectedDate > new Date()) {
        $(".stoast").toastText("warning", "You cannot select a day after today!", 5, 3);
        document.getElementById('ctl00_ContentPlaceHolder1_txtEmpResignDt').value = '__-___-____';
        return false;
    }
    else {
        var _sele_date = obj.get_selectedDate().format("dd-MM-yyyy");
        var ageby = _sele_date.replace(/[-:,\.]/g, "-"); // change delimiters to /
        var ageby = _sele_date.replace(/[^0-9A-Za-z\-]/gi, "-");
        var date = ageby.split('-');
        var _tdate = date[0];
        var _tmonth = date[1];
        var _tyear = date[2]; /* strip all but digits and */
        var dayOfBirth = _tdate; /*your literal date of birth*/
        var monthOfBirth = _tmonth; /*your month of birth*/
        var yearOfBirth = _tyear; /*your year of birth :: Use all the 4 digits, not 2 two digits in short form*/
        var today = new Date().format('dd-MM-yyyy');
        var dt = today.split('-');
        var dayOfToday = dt[0];
        var monthOfToday = dt[1];
        var yearOfToday = dt[2];
        var yearDiff = 0;
        var monthDiff = 0;
        var daysDiff = 0;

        var month_birth_format = 'Jan';
        switch (monthOfBirth) {
            case '01':
                month_birth_format = 'Jan';
                break;
            case '02':
                month_birth_format = 'Feb';
                break;
            case '03':
                month_birth_format = 'Mar';
                break;
            case '04':
                month_birth_format = 'Apr';
                break;
            case '05':
                month_birth_format = 'May';
                break;
            case '06':
                month_birth_format = 'Jun';
                break;
            case '07':
                month_birth_format = 'Jul';
                break;
            case '08':
                month_birth_format = 'Aug';
                break;
            case '09':
                month_birth_format = 'Sep';
                break;
            case '10':
                month_birth_format = 'Oct';
                break;
            case '11':
                month_birth_format = 'Nov';
                break;
            case '12':
                month_birth_format = 'Dec';
                break;
            default:
                month_birth_format = 'Jan';
                break;
        }
        var date_format = dayOfBirth + '-' + month_birth_format + '-' + yearOfBirth;
        document.getElementById('ctl00_ContentPlaceHolder1_txtEmpResignDt').value = date_format;
        OnNullValue(document.getElementById(obj._element.id));
    }
}

function EditEmployeRegistationDate(event) {
    if (navigator.appName != "Microsoft Internet Explorer") {
        if (event.keyCode == 8 || event.keyCode == 46) {
            var txtElement = $get(event.target.id);
            var txtElmntText = GetTextElementValue2(event.target.id);
            var txtElementCursorPos = doGetCursorPosition2(txtElement);
            var maskExtender = $find('ctl00_ContentPlaceHolder1_MaskedEditExtender3'); //$find('<%= MaskedEdit2.ClientID%>');
            var start = txtElement.selectionStart;
            var end = txtElement.selectionEnd;
            var selectedSymbols = end - start;
            if (event.keyCode == 8) {
                if (selectedSymbols > 0) {
                    var str1 = txtElmntText.substr(0, start);
                    var str2 = txtElmntText.substr(end);
                    var str = str1 + str2;
                    if (str.length < txtElmntText.length)
                        str = appendStrWithChar2(str, txtElmntText, "_");
                    setTextElementValue2(event.target.id, str);
                    maskExtender._LogicTextMask = DeleteCursorChars2(str, "_");
                    setCursorPosition2(txtElement, start);
                }
                else {
                    if ((txtElementCursorPos - 1) >= 0) {
                        var symbol_to_Delete = txtElmntText[txtElementCursorPos - 1];
                        if (symbol_to_Delete == "-") {
                            setCursorPosition1(txtElement, txtElementCursorPos - 1);
                        }
                        else {
                            var str1 = txtElmntText.substr(0, txtElementCursorPos - 1);
                            var str2 = txtElmntText.substr(txtElementCursorPos);
                            var str = str1 + str2;
                            if (str.length < txtElmntText.length)
                                str = appendStrWithChar2(str, txtElmntText, "_");
                            setTextElementValue2(event.target.id, str);
                            maskExtender._LogicTextMask = DeleteCursorChars2(str, "_");
                            setCursorPosition2(txtElement, txtElementCursorPos - 1);
                        }
                    }
                }
            }
            if (event.keyCode == 46) {
                if (txtElementCursorPos >= 0 && txtElementCursorPos < txtElmntText.length && ((selectedSymbols <= 1 && txtElmntText[txtElementCursorPos] != "_") || selectedSymbols > 1)) {
                    if (selectedSymbols > 1) {
                        var str1 = txtElmntText.substr(0, start);
                        var str2 = txtElmntText.substr(end);
                        var str = str1 + str2;
                        if (str.length < txtElmntText.length)
                            str = appendStrWithChar2(str, txtElmntText, "_");
                        setTextElementValue2(event.target.id, str);
                        maskExtender._LogicTextMask = DeleteCursorChars1(str, "_");
                        setCursorPosition1(txtElement, start);
                    }
                    else {
                        var symbol_to_Delete = txtElmntText[txtElementCursorPos];
                        if (symbol_to_Delete != "-") {
                            var str1 = txtElmntText.substr(0, txtElementCursorPos);
                            var str2 = txtElmntText.substr(txtElementCursorPos + 1);
                            var str = str1 + str2;
                            if (str.length < txtElmntText.length)
                                str = appendStrWithChar2(str, txtElmntText, "_");
                            setTextElementValue2(event.target.id, str);
                            maskExtender._LogicTextMask = DeleteCursorChars1(str, "_");
                            setCursorPosition2(txtElement, txtElementCursorPos);
                        }
                        else {
                            setCursorPosition2(txtElement, txtElementCursorPos + 1);
                        }
                    }
                }
            }
        }
        if (event.keyCode == 35 || event.keyCode == 36) {
            var txtElement = $get(event.target.id);
            var txtElmntText = GetTextElementValue2(event.target.id);
            if (event.keyCode == 36) { setCursorPosition2(txtElement, 0); }
            if (event.keyCode == 35) { setCursorPosition2(txtElement, txtElmntText.length); }
        }
    }
}

function setCursorPosition2(ctrl, pos) {
    if (ctrl.setSelectionRange) {
        ctrl.focus();
        ctrl.setSelectionRange(pos, pos);
    }
    else if (ctrl.createTextRange) {
        var range = ctrl.createTextRange();
        range.collapse(true);
        range.moveEnd('character', pos);
        range.moveStart('character', pos);
        range.select();
    }
}
function DeleteCursorChars2(str, char) {
    for (i = 0; i < str.length; i++) {
        if (str[i] == char) {
            str = str.substr(0, i);
            return str;
        }
    }
}
function setTextElementValue2(elementId, txt) {
    var text = $get(elementId);
    if (text.AjaxControlToolkitTextBoxWrapper) {
        text.AjaxControlToolkitTextBoxWrapper.set_Value(txt);
    }
    else
    { text.value = txt; }
}
function appendStrWithChar2(str, tempstr, appchar) {
    var differnce = tempstr.length - str.length;
    if (differnce > 0) {
        var s = str.split('-');
        if ((str.split('-')[0]).length <= 2) { var pos1 = (s[0].split(''))[0]; var pos2 = (s[0].split(''))[1]; if (pos1 == '' || pos1 == undefined) { pos1 = appchar; } else if (pos2 == '' || pos2 == undefined) { pos2 = appchar; } var day = pos1 + pos2; }
        if ((str.split('-')[1]).length <= 3) { var pos1 = (s[1].split(''))[0]; var pos2 = (s[1].split(''))[1]; var pos3 = (s[1].split(''))[2]; if (pos1 == '' || pos1 == undefined) { pos1 = appchar; } else if (pos2 == '' || pos2 == undefined) { pos2 = appchar; } else if (pos3 == '' || pos3 == undefined) { pos3 = appchar; } var mon = pos1 + pos2 + pos3; }
        if ((str.split('-')[2]).length <= 4) { var pos1 = (s[2].split(''))[0]; var pos2 = (s[2].split(''))[1]; var pos3 = (s[2].split(''))[2]; var pos4 = (s[2].split(''))[3]; if (pos1 == '' || pos1 == undefined) { pos1 = appchar; } else if (pos2 == '' || pos2 == undefined) { pos2 = appchar; } else if (pos3 == '' || pos3 == undefined) { pos3 = appchar; } else if (pos4 == '' || pos4 == undefined) { pos4 = appchar; } var year = pos1 + pos2 + pos3 + pos4; }
        str = day + "-" + mon + "-" + year;
    }
    return str;
}

function doGetCursorPosition2(ctrl) {
    var CurPos = 0;
    if (document.selection) {
        ctrl.focus();
        var sel = document.selection.createRange();
        sel.movStart('character', -ctrl.valueOf.length);
        CurPos = sel.text.length;
    }
    else if (ctrl.selectionStart || ctrl.selectionStart == '0')
        CurPos = ctrl.selectionStart;
    return CurPos;
}
function GetTextElementValue2(elementId) {
    var textBox = $get(elementId), text;
    if (textBox.AjaxControlToolkitTextBoxWrapper) {
        text = textBox.AjaxControlToolkitTextBoxWrapper.get_Value();
    }
    else {
        text = textBox.value;
    }
    return text;
}
/********************  EmployeprobitionDate    ********************/

var AgeCount;
var one_day = 1000 * 60 * 60 * 24
var one_month = 1000 * 60 * 60 * 24 * 30
var one_year = 1000 * 60 * 60 * 24 * 30 * 12
var dat = new Date();
var curday = dat.getDate();
var curmon = dat.getMonth() + 1;
var curyear = dat.getFullYear();
var totalNumOfDaysOfMonths = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
/*Calculate The age by choosing calender Data*/

function EmployeprobitionDate(obj) {
    if (obj._selectedDate > new Date()) {
        $(".stoast").toastText("warning", "You cannot select a day after today!", 5, 3);
        document.getElementById('ctl00_ContentPlaceHolder1_txtEmpprobitionDt').value = '__-___-____';
        return false;
    }
    else {
        var _sele_date = obj.get_selectedDate().format("dd-MM-yyyy");
        var ageby = _sele_date.replace(/[-:,\.]/g, "-"); // change delimiters to /
        var ageby = _sele_date.replace(/[^0-9A-Za-z\-]/gi, "-");
        var date = ageby.split('-');
        var _tdate = date[0];
        var _tmonth = date[1];
        var _tyear = date[2]; /* strip all but digits and */
        var dayOfBirth = _tdate; /*your literal date of birth*/
        var monthOfBirth = _tmonth; /*your month of birth*/
        var yearOfBirth = _tyear; /*your year of birth :: Use all the 4 digits, not 2 two digits in short form*/
        var today = new Date().format('dd-MM-yyyy');
        var dt = today.split('-');
        var dayOfToday = dt[0];
        var monthOfToday = dt[1];
        var yearOfToday = dt[2];
        var yearDiff = 0;
        var monthDiff = 0;
        var daysDiff = 0;

        var month_birth_format = 'Jan';
        switch (monthOfBirth) {
            case '01':
                month_birth_format = 'Jan';
                break;
            case '02':
                month_birth_format = 'Feb';
                break;
            case '03':
                month_birth_format = 'Mar';
                break;
            case '04':
                month_birth_format = 'Apr';
                break;
            case '05':
                month_birth_format = 'May';
                break;
            case '06':
                month_birth_format = 'Jun';
                break;
            case '07':
                month_birth_format = 'Jul';
                break;
            case '08':
                month_birth_format = 'Aug';
                break;
            case '09':
                month_birth_format = 'Sep';
                break;
            case '10':
                month_birth_format = 'Oct';
                break;
            case '11':
                month_birth_format = 'Nov';
                break;
            case '12':
                month_birth_format = 'Dec';
                break;
            default:
                month_birth_format = 'Jan';
                break;
        }
        var date_format = dayOfBirth + '-' + month_birth_format + '-' + yearOfBirth;
        document.getElementById('ctl00_ContentPlaceHolder1_txtEmpprobitionDt').value = date_format;
        OnNullValue(document.getElementById(obj._element.id));
    }
}

/********************  EmployeprobitionDate    ********************/

var AgeCount;
var one_day = 1000 * 60 * 60 * 24
var one_month = 1000 * 60 * 60 * 24 * 30
var one_year = 1000 * 60 * 60 * 24 * 30 * 12
var dat = new Date();
var curday = dat.getDate();
var curmon = dat.getMonth() + 1;
var curyear = dat.getFullYear();
var totalNumOfDaysOfMonths = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
/*Calculate The age by choosing calender Data*/

function Marriagedate(obj) {
    if (obj._selectedDate > new Date()) {
        $(".stoast").toastText("warning", "You cannot select a day after today!", 5, 3);
        document.getElementById('ctl00_ContentPlaceHolder1_txtMarrigeDate').value = '__-___-____';
        return false;
    }
    else {
        var _sele_date = obj.get_selectedDate().format("dd-MM-yyyy");
        var ageby = _sele_date.replace(/[-:,\.]/g, "-"); // change delimiters to /
        var ageby = _sele_date.replace(/[^0-9A-Za-z\-]/gi, "-");
        var date = ageby.split('-');
        var _tdate = date[0];
        var _tmonth = date[1];
        var _tyear = date[2]; /* strip all but digits and */
        var dayOfBirth = _tdate; /*your literal date of birth*/
        var monthOfBirth = _tmonth; /*your month of birth*/
        var yearOfBirth = _tyear; /*your year of birth :: Use all the 4 digits, not 2 two digits in short form*/
        var today = new Date().format('dd-MM-yyyy');
        var dt = today.split('-');
        var dayOfToday = dt[0];
        var monthOfToday = dt[1];
        var yearOfToday = dt[2];
        var yearDiff = 0;
        var monthDiff = 0;
        var daysDiff = 0;

        var month_birth_format = 'Jan';
        switch (monthOfBirth) {
            case '01':
                month_birth_format = 'Jan';
                break;
            case '02':
                month_birth_format = 'Feb';
                break;
            case '03':
                month_birth_format = 'Mar';
                break;
            case '04':
                month_birth_format = 'Apr';
                break;
            case '05':
                month_birth_format = 'May';
                break;
            case '06':
                month_birth_format = 'Jun';
                break;
            case '07':
                month_birth_format = 'Jul';
                break;
            case '08':
                month_birth_format = 'Aug';
                break;
            case '09':
                month_birth_format = 'Sep';
                break;
            case '10':
                month_birth_format = 'Oct';
                break;
            case '11':
                month_birth_format = 'Nov';
                break;
            case '12':
                month_birth_format = 'Dec';
                break;
            default:
                month_birth_format = 'Jan';
                break;
        }
        var date_format = dayOfBirth + '-' + month_birth_format + '-' + yearOfBirth;
        document.getElementById('ctl00_ContentPlaceHolder1_txtMarrigeDate').value = date_format;
        OnNullValue(document.getElementById(obj._element.id));
    }
}