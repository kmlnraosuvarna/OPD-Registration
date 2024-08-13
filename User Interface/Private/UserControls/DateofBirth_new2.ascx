<%@ Control Language="C#" AutoEventWireup="true" CodeFile="DateofBirth_new2.ascx.cs"
    Inherits="Private_UserControls_DateofBirth_new2" %>
<%@ Register Assembly="AjaxControlToolkit" Namespace="AjaxControlToolkit" TagPrefix="cc1" %>
<script type="text/javascript">
    var ctrlcom = 'ctl00_ContentPlaceHolder1';
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
    function OnGetAge_Dob(obj) {

        if (obj._selectedDate > new Date()) {
            $(".stoast").toastText("warning", "You cannot select a day after today!", 5, 3);
            /*alert("You cannot select a day after today!");*/
            obj._selectedDate = new Date();
            obj._textbox.set_Value(obj._selectedDate.format("dd-MM-yyyy"))
            document.getElementById('' + ctrlcom + '_newAgeUc_txtDay').value = 1;
            OnNullValue(document.getElementById(obj._element.id));
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
            calcYearDiff(yearOfToday, monthOfToday, dayOfToday, yearOfBirth, monthOfBirth, dayOfBirth, yearDiff, monthDiff, daysDiff);
            OnNullValue(document.getElementById(obj._element.id));
        }
        var dob = obj.get_selectedDate().format("dd-MM-yyyy");
        obj.value = dob;
        onExtendAge();
        var form_name = document.getElementById('' + ctrlcom + '_newAgeUc_hdnDocument').value;
        if (form_name == "REG" || form_name == "OPQUICK") {
            var title = document.getElementById('' + ctrlcom + '_newAgeUc_hdnTitle').value;
            var gender = document.getElementById('' + ctrlcom + '_newAgeUc_hdnGender').value;
            if ((title == 1 || title == 9) && gender == 1) {
                var age = document.getElementById('' + ctrlcom + '_newAgeUc_txtYear').value;
                if (age >= 65) {
                    CheckIsSeniorCitizen('Y');
                }
                else {
                    CheckIsSeniorCitizen('N');
                }
            }
            else if ((title == 3 || title == 9 || title == 14) && gender == 2) {
                var age = document.getElementById('' + ctrlcom + '_newAgeUc_txtYear').value;
                if (age >= 65) {
                    CheckIsSeniorCitizen('Y');
                }
                else {
                    CheckIsSeniorCitizen('N');
                }
            }
        }
        if (form_name == "OPQUICK")
        { RemoveAgeSrv(); }
        document.getElementById('' + ctrlcom + '_newAgeUc_hdnageSource').value = 'D';
        document.getElementById('' + ctrlcom + '_newAgeUc_txtDob').value = dob;
    }
    /*Calculate Year Diff*/
    function calcYearDiff(yearOfToday, monthOfToday, dayOfToday, yearOfBirth, monthOfBirth, dayOfBirth, yearDiff, monthDiff, daysDiff) {

        if (monthOfToday > monthOfBirth) {
            yearDiff = yearOfToday - yearOfBirth;
            monthDiff = monthOfToday - monthOfBirth;
            calcDateDiff(yearOfToday, monthOfToday, dayOfToday, yearOfBirth, monthOfBirth, dayOfBirth, yearDiff, monthDiff, daysDiff);
        }
        else if (monthOfToday == monthOfBirth) {
            if ((dayOfToday == dayOfBirth) || (dayOfToday > dayOfBirth)) {
                yearDiff = yearOfToday - yearOfBirth;
            }
            else
                yearDiff = yearOfToday - yearOfBirth - 1;
            calcMonthDiff(yearOfToday, monthOfToday, dayOfToday, yearOfBirth, monthOfBirth, dayOfBirth, yearDiff, monthDiff, daysDiff);
        }
        else {
            yearDiff = yearOfToday - yearOfBirth - 1;
            monthDiff = 12 - (monthOfBirth - monthOfToday);
            calcDateDiff(yearOfToday, monthOfToday, dayOfToday, yearOfBirth, monthOfBirth, dayOfBirth, yearDiff, monthDiff, daysDiff);
        }
        return false;
    }
    /*Calculate Month Diff*/
    function calcMonthDiff(yearOfToday, monthOfToday, dayOfToday, yearOfBirth, monthOfBirth, dayOfBirth, yearDiff, monthDiff, daysDiff) {
        if (monthOfToday == monthOfBirth) {
            if (dayOfToday > dayOfBirth)
                monthDiff = monthOfToday - monthOfBirth;
            else if (dayOfToday == dayOfBirth)
                monthDiff = 0; /* That's a Birthday*/
            else
                monthDiff = 11; /* Birthday coming soon*/
        }
        calcDateDiff(yearOfToday, monthOfToday, dayOfToday, yearOfBirth, monthOfBirth, dayOfBirth, yearDiff, monthDiff, daysDiff);
        return false;
    }
    /*Calculate Date Diff*/
    function calcDateDiff(yearOfToday, monthOfToday, dayOfToday, yearOfBirth, monthOfBirth, dayOfBirth, yearDiff, monthDiff, daysDiff) {

        if (yearOfToday % 4 == 0) { totalNumOfDaysOfMonths[1] = 29; }
        if (dayOfToday > dayOfBirth)
            daysDiff = dayOfToday - dayOfBirth;
        else if (dayOfToday == dayOfBirth) {
            /*daysDiff = 1;*/
        }
        else {
            switch (monthOfToday) {
                case "01": /*Jan*/
                    if (monthDiff == '1') {
                        daysDiff = parseInt(totalNumOfDaysOfMonths[monthOfToday - 1]) + parseInt(dayOfToday.replace(/^[0]+/g, "")) - parseInt(dayOfBirth);
                        monthDiff = monthDiff - 1;
                    }
                    else if (monthDiff == '2' || monthDiff == '4' || monthDiff == '7' || monthDiff == '9') {
                        daysDiff = parseInt(totalNumOfDaysOfMonths[monthOfToday - 1]) + parseInt(dayOfToday.replace(/^[0]+/g, "") - 1) - parseInt(dayOfBirth);
                        monthDiff = monthDiff - 1;
                    }
                    else if (monthDiff == '10') {
                        if (monthOfBirth == '02') {
                            if ((yearOfBirth % 400 == 0) || (yearOfBirth % 4 == 0) || (yearOfBirth % 400 == 0 && yearOfBirth % 100 != 0)) {
                                daysDiff = parseInt(totalNumOfDaysOfMonths[monthOfToday - 1]) + parseInt(dayOfToday.replace(/^[0]+/g, "") - 2) - parseInt(dayOfBirth);
                                monthDiff = monthDiff - 1;
                            }
                        }
                        else {
                            daysDiff = parseInt(totalNumOfDaysOfMonths[monthOfToday - 1]) + parseInt(dayOfToday.replace(/^[0]+/g, "")) - parseInt(dayOfBirth);
                            if (daysDiff == 0)
                                daysDiff = 1;
                            monthDiff = monthDiff - 1;

                        }
                    }
                    else if (monthDiff == '11') {
                        if (monthOfBirth == '01') {
                            daysDiff = parseInt(totalNumOfDaysOfMonths[monthOfToday - 1]) + parseInt(dayOfToday.replace(/^[0]+/g, "")) - parseInt(dayOfBirth);
                        }
                        else {
                            if ((yearOfBirth % 400 == 0) || (yearOfBirth % 4 == 0) || (yearOfBirth % 400 == 0 && yearOfBirth % 100 != 0)) {
                                daysDiff = parseInt(totalNumOfDaysOfMonths[monthOfToday - 1]) + parseInt(dayOfToday.replace(/^[0]+/g, "") - 2) - parseInt(dayOfBirth);
                                monthDiff = monthDiff - 1;
                            }
                            else {
                                daysDiff = parseInt(totalNumOfDaysOfMonths[monthOfToday - 1]) + parseInt(dayOfToday.replace(/^[0]+/g, "") - 3) - parseInt(dayOfBirth);
                                monthDiff = monthDiff - 1;
                            }
                        }
                    }
                    else {
                        daysDiff = parseInt(totalNumOfDaysOfMonths[monthOfToday - 1]) + parseInt(dayOfToday.replace(/^[0]+/g, "")) - parseInt(dayOfBirth);
                        monthDiff = monthDiff - 1;
                    }

                    break;
                case "02": /*Feb*/
                    if (totalNumOfDaysOfMonths[monthOfBirth - 1] == "31") {
                        if (dayOfBirth > dayOfToday) {
                            if (monthOfToday == "02") {
                                daysDiff = parseInt(totalNumOfDaysOfMonths[monthOfToday - 1]) + parseInt(dayOfToday.replace(/^[0]+/g, "")) - parseInt(dayOfBirth) + 1;
                                if (daysDiff < 31)
                                    daysDiff = parseInt(daysDiff) + 2;
                                else
                                    daysDiff = 1;

                            }
                        }
                    }
                    else if (totalNumOfDaysOfMonths[monthOfBirth - 1] == "30") {
                        if (dayOfBirth > dayOfToday) {
                            if (monthOfToday == "02") {
                                daysDiff = parseInt(totalNumOfDaysOfMonths[monthOfToday - 1]) + parseInt(dayOfToday.replace(/^[0]+/g, "") - 1) - parseInt(dayOfBirth) + 1;
                                if (daysDiff < 31)
                                    daysDiff = parseInt(daysDiff) + 2;
                                else
                                    daysDiff = 1;
                            }
                        }
                    }
                    else if (totalNumOfDaysOfMonths[monthOfBirth - 1] == "29") {
                        if (dayOfBirth > dayOfToday) {
                            if (monthOfToday == "02") {
                                if ((yearOfBirth % 400 == 0) || (yearOfBirth % 4 == 0) || (yearOfBirth % 400 == 0 && yearOfBirth % 100 != 0)) {
                                    daysDiff = parseInt(totalNumOfDaysOfMonths[monthOfToday - 1]) + parseInt(dayOfToday.replace(/^[0]+/g, "") - 1) - parseInt(dayOfBirth) + 1;
                                    monthDiff = monthDiff + 1;
                                }
                                else {
                                    daysDiff = parseInt(totalNumOfDaysOfMonths[monthOfToday - 1]) + parseInt(dayOfToday.replace(/^[0]+/g, "") - 1) - parseInt(dayOfBirth);
                                    if (daysDiff <= 29) {
                                        daysDiff = parseInt(daysDiff);
                                        monthDiff = monthDiff + 1;
                                    }
                                    else {
                                        monthDiff = monthDiff;
                                        daysDiff = 1;
                                    }
                                }
                            }
                        }
                    }
                    else if (totalNumOfDaysOfMonths[monthOfBirth - 1] == "28") {
                        if (dayOfBirth > dayOfToday) {
                            if (monthOfToday == "02") {
                                if ((yearOfBirth % 400 == 0) || (yearOfBirth % 4 == 0) || (yearOfBirth % 400 == 0 && yearOfBirth % 100 != 0)) {
                                    daysDiff = parseInt(totalNumOfDaysOfMonths[monthOfToday - 1]) + parseInt(dayOfToday.replace(/^[0]+/g, "")) - parseInt(dayOfBirth) + 1;
                                    monthDiff = monthDiff + 1;
                                }
                                else {
                                    daysDiff = parseInt(totalNumOfDaysOfMonths[monthOfToday - 1]) + parseInt(dayOfToday.replace(/^[0]+/g, "")) - parseInt(dayOfBirth);
                                    if (daysDiff < 29) {
                                        daysDiff = parseInt(daysDiff);
                                        monthDiff = monthDiff + 1;
                                    }
                                    else {
                                        monthDiff = monthDiff;
                                        daysDiff = 1;
                                    }
                                }
                            }
                        }
                    }
                    monthDiff = monthDiff - 1;
                    break;
                case "03": /*Mar*/
                    if (monthDiff == '1') {
                        if ((yearOfBirth % 400 == 0) || (yearOfBirth % 4 == 0) || (yearOfBirth % 400 == 0 && yearOfBirth % 100 != 0)) {
                            daysDiff = parseInt(totalNumOfDaysOfMonths[monthOfToday - 1]) + parseInt(dayOfToday.replace(/^[0]+/g, "") - 2) - parseInt(dayOfBirth);
                        }
                        else {
                            daysDiff = parseInt(totalNumOfDaysOfMonths[monthOfToday - 1]) + parseInt(dayOfToday.replace(/^[0]+/g, "") - 3) - parseInt(dayOfBirth);
                        }
                        monthDiff = monthDiff - 1;
                    }
                    else if (monthDiff == '4' || monthDiff == '9') {
                        daysDiff = parseInt(totalNumOfDaysOfMonths[monthOfToday - 1]) + parseInt(dayOfToday.replace(/^[0]+/g, "") - 1) - parseInt(dayOfBirth);
                        monthDiff = monthDiff - 1;
                    }
                    else if (monthDiff == '2' || monthDiff == '7' || monthDiff == '6') {
                        daysDiff = parseInt(totalNumOfDaysOfMonths[monthOfToday - 1]) + parseInt(dayOfToday.replace(/^[0]+/g, "")) - parseInt(dayOfBirth);
                        monthDiff = monthDiff - 1
                    }
                    else if (monthDiff == '10') {
                        if (monthOfBirth == '02') {
                            if ((yearOfBirth % 400 == 0) || (yearOfBirth % 4 == 0) || (yearOfBirth % 400 == 0 && yearOfBirth % 100 != 0)) {
                                daysDiff = parseInt(totalNumOfDaysOfMonths[monthOfToday - 1]) + parseInt(dayOfToday.replace(/^[0]+/g, "") - 2) - parseInt(dayOfBirth);
                                monthDiff = monthDiff - 1;
                            }
                        }
                        else {
                            daysDiff = parseInt(totalNumOfDaysOfMonths[monthOfToday - 1]) + parseInt(dayOfToday.replace(/^[0]+/g, "")) - parseInt(dayOfBirth);
                            if (daysDiff == 0)
                                daysDiff = 1;
                            monthDiff = monthDiff - 1;

                        }
                    }
                    else if (monthDiff == '11') {
                        if (monthOfBirth == '01') {
                            daysDiff = parseInt(totalNumOfDaysOfMonths[monthOfToday - 1]) + parseInt(dayOfToday.replace(/^[0]+/g, "")) - parseInt(dayOfBirth);
                        }
                        else {
                            if ((yearOfBirth % 400 == 0) || (yearOfBirth % 4 == 0) || (yearOfBirth % 400 == 0 && yearOfBirth % 100 != 0)) {
                                if (monthOfBirth == '03') {
                                    daysDiff = parseInt(totalNumOfDaysOfMonths[monthOfToday - 1]) + parseInt(dayOfToday.replace(/^[0]+/g, "")) - parseInt(dayOfBirth);
                                }
                                else {
                                    daysDiff = parseInt(totalNumOfDaysOfMonths[monthOfToday - 1]) + parseInt(dayOfToday.replace(/^[0]+/g, "") - 1) - parseInt(dayOfBirth);
                                    monthDiff = monthDiff - 1;
                                }
                            }
                            else {
                                if (monthOfBirth == '03') {
                                    daysDiff = parseInt(totalNumOfDaysOfMonths[monthOfToday - 1]) + parseInt(dayOfToday.replace(/^[0]+/g, "")) - parseInt(dayOfBirth);
                                }
                                else {
                                    daysDiff = parseInt(totalNumOfDaysOfMonths[monthOfToday - 1]) + parseInt(dayOfToday.replace(/^[0]+/g, "") - 1) - parseInt(dayOfBirth);
                                    monthDiff = monthDiff - 1;
                                }

                            }
                        }
                    }
                    else {
                        daysDiff = parseInt(totalNumOfDaysOfMonths[monthOfToday - 1]) + parseInt(dayOfToday.replace(/^[0]+/g, "")) - parseInt(dayOfBirth);
                        monthDiff = monthDiff - 1;
                    }


                    break;
                case "04": /*Apr*/
                    if (monthDiff == '4' || monthDiff == '3' || monthDiff == '1' || monthDiff == "11" || monthDiff == "6" || monthDiff == "8" || monthDiff == "9") {
                        if (monthOfBirth == '04') {
                            daysDiff = parseInt(totalNumOfDaysOfMonths[monthOfToday - 1]) + parseInt(dayOfToday.replace(/^[0]+/g, "")) - parseInt(dayOfBirth);
                        }
                        else {
                            daysDiff = parseInt(totalNumOfDaysOfMonths[monthOfToday - 1]) + parseInt(dayOfToday.replace(/^[0]+/g, "")) - parseInt(dayOfBirth);
                            daysDiff = parseFloat(daysDiff) + 1;
                            monthDiff = monthDiff - 1;
                        }
                    }
                    else if (monthDiff == '2') {
                        if ((yearOfBirth % 400 == 0) || (yearOfBirth % 4 == 0) || (yearOfBirth % 400 == 0 && yearOfBirth % 100 != 0)) {
                            daysDiff = parseInt(totalNumOfDaysOfMonths[monthOfToday - 1]) + parseInt(dayOfToday.replace(/^[0]+/g, "") - 1) - parseInt(dayOfBirth);
                            monthDiff = monthDiff - 1
                        }
                        else {
                            daysDiff = parseInt(totalNumOfDaysOfMonths[monthOfToday - 1]) + parseInt(dayOfToday.replace(/^[0]+/g, "") - 2) - parseInt(dayOfBirth);
                            monthDiff = monthDiff - 1
                        }
                    }
                    else if (monthDiff == '10') {
                        if (monthOfBirth == '02') {
                            if ((yearOfBirth % 400 == 0) || (yearOfBirth % 4 == 0) || (yearOfBirth % 400 == 0 && yearOfBirth % 100 != 0)) {
                                daysDiff = parseInt(totalNumOfDaysOfMonths[monthOfToday - 1]) + parseInt(dayOfToday.replace(/^[0]+/g, "") - 2) - parseInt(dayOfBirth);
                                monthDiff = monthDiff - 1;
                            }
                        }
                        else {
                            daysDiff = parseInt(totalNumOfDaysOfMonths[monthOfToday - 1]) + parseInt(dayOfToday.replace(/^[0]+/g, "")) - parseInt(dayOfBirth);
                            if (daysDiff == 0)
                                daysDiff = 1;
                            monthDiff = monthDiff - 1;
                        }
                    }
                    else {
                        daysDiff = parseInt(totalNumOfDaysOfMonths[monthOfToday - 1]) + parseInt(dayOfToday.replace(/^[0]+/g, "")) - parseInt(dayOfBirth);
                        monthDiff = monthDiff - 1;
                    }

                    break;
                case "05": /*May*/
                    if (monthDiff == '1' || monthDiff == '6') {
                        daysDiff = parseInt(totalNumOfDaysOfMonths[monthOfToday - 1]) + parseInt(dayOfToday.replace(/^[0]+/g, "") - 1) - parseInt(dayOfBirth);
                        monthDiff = monthDiff - 1;
                    }
                    else if (monthDiff == '4' || monthDiff == '9' || monthDiff == '5') {
                        daysDiff = parseInt(totalNumOfDaysOfMonths[monthOfToday - 1]) + parseInt(dayOfToday.replace(/^[0]+/g, "")) - parseInt(dayOfBirth);
                        monthDiff = monthDiff - 1;
                    }
                    else if (monthDiff == '3') {
                        if ((yearOfBirth % 400 == 0) || (yearOfBirth % 4 == 0) || (yearOfBirth % 400 == 0 && yearOfBirth % 100 != 0)) {
                            daysDiff = parseInt(totalNumOfDaysOfMonths[monthOfToday - 1]) + parseInt(dayOfToday.replace(/^[0]+/g, "") - 2) - parseInt(dayOfBirth);
                            monthDiff = monthDiff - 1
                        }
                        else {
                            daysDiff = parseInt(totalNumOfDaysOfMonths[monthOfToday - 1]) + parseInt(dayOfToday.replace(/^[0]+/g, "") - 3) - parseInt(dayOfBirth);
                            monthDiff = monthDiff - 1
                        }
                    }
                    else if (monthDiff == '2' || monthDiff == '7') {
                        daysDiff = parseInt(totalNumOfDaysOfMonths[monthOfToday - 1]) + parseInt(dayOfToday.replace(/^[0]+/g, "")) - parseInt(dayOfBirth);
                        monthDiff = monthDiff - 1
                    }
                    else if (monthDiff == '10') {
                        if (monthOfBirth == '02') {
                            if ((yearOfBirth % 400 == 0) || (yearOfBirth % 4 == 0) || (yearOfBirth % 400 == 0 && yearOfBirth % 100 != 0)) {
                                daysDiff = parseInt(totalNumOfDaysOfMonths[monthOfToday - 1]) + parseInt(dayOfToday.replace(/^[0]+/g, "") - 2) - parseInt(dayOfBirth);
                                monthDiff = monthDiff - 1;
                            }
                        }
                        else {
                            daysDiff = parseInt(totalNumOfDaysOfMonths[monthOfToday - 1]) + parseInt(dayOfToday.replace(/^[0]+/g, "")) - parseInt(dayOfBirth);
                            if (daysDiff == 0)
                                daysDiff = 1;
                            monthDiff = monthDiff - 1;

                        }
                    }
                    else if (monthDiff == '11') {
                        if (monthOfBirth == '01') {
                            daysDiff = parseInt(totalNumOfDaysOfMonths[monthOfToday - 1]) + parseInt(dayOfToday.replace(/^[0]+/g, "")) - parseInt(dayOfBirth);
                        }
                        else {
                            if (monthOfBirth == '06') {
                                daysDiff = parseInt(totalNumOfDaysOfMonths[monthOfToday - 1]) + parseInt(dayOfToday.replace(/^[0]+/g, "") - 1) - parseInt(dayOfBirth);
                                monthDiff = monthDiff - 1;
                            }
                            else {
                                daysDiff = parseInt(totalNumOfDaysOfMonths[monthOfToday - 1]) + parseInt(dayOfToday.replace(/^[0]+/g, "")) - parseInt(dayOfBirth);
                            }
                        }
                    }
                    else {
                        daysDiff = parseInt(totalNumOfDaysOfMonths[monthOfToday - 1]) + parseInt(dayOfToday.replace(/^[0]+/g, "") - 1) - parseInt(dayOfBirth);
                        monthDiff = monthDiff - 1;
                    }
                    break;
                case "06": /*June*/
                    if (monthDiff == '3' || monthDiff == '2' || monthDiff == '1' || monthDiff == "6" || monthDiff == "8") {
                        if (monthOfBirth == '04') {
                            daysDiff = parseInt(totalNumOfDaysOfMonths[monthOfToday - 1]) + parseInt(dayOfToday.replace(/^[0]+/g, "")) - parseInt(dayOfBirth);
                            monthDiff = monthDiff - 1;
                        }
                        else {
                            daysDiff = parseInt(totalNumOfDaysOfMonths[monthOfToday - 1]) + parseInt(dayOfToday.replace(/^[0]+/g, "")) - parseInt(dayOfBirth);
                            daysDiff = parseFloat(daysDiff) + 1;
                            monthDiff = monthDiff - 1;
                        }
                    }
                    else if (monthDiff == "9") {
                        daysDiff = parseInt(totalNumOfDaysOfMonths[monthOfToday - 1]) + parseInt(dayOfToday.replace(/^[0]+/g, "")) - parseInt(dayOfBirth);
                        monthDiff = monthDiff - 1;
                    }
                    else if (monthDiff == "11") {
                        if (monthOfBirth == "06") {
                            daysDiff = parseInt(totalNumOfDaysOfMonths[monthOfToday - 1]) + parseInt(dayOfToday.replace(/^[0]+/g, "")) - parseInt(dayOfBirth);
                        }
                        else {
                            daysDiff = parseInt(totalNumOfDaysOfMonths[monthOfToday - 1]) + parseInt(dayOfToday.replace(/^[0]+/g, "")) - parseInt(dayOfBirth);
                            daysDiff = parseFloat(daysDiff) + 1;
                            monthDiff = monthDiff - 1;
                        }
                    }
                    else if (monthDiff == '5' || monthDiff == '10') {
                        daysDiff = parseInt(totalNumOfDaysOfMonths[monthOfToday - 1]) + parseInt(dayOfToday.replace(/^[0]+/g, "")) - parseInt(dayOfBirth);
                        daysDiff = parseInt(daysDiff) + 1;
                        monthDiff = monthDiff - 1
                    }
                    else if (monthDiff == '4') {
                        if ((yearOfBirth % 400 == 0) || (yearOfBirth % 4 == 0) || (yearOfBirth % 400 == 0 && yearOfBirth % 100 != 0)) {
                            daysDiff = parseInt(totalNumOfDaysOfMonths[monthOfToday - 1]) + parseInt(dayOfToday.replace(/^[0]+/g, "") - 1) - parseInt(dayOfBirth);
                            monthDiff = monthDiff - 1
                        }
                        else {
                            daysDiff = parseInt(totalNumOfDaysOfMonths[monthOfToday - 1]) + parseInt(dayOfToday.replace(/^[0]+/g, "") - 2) - parseInt(dayOfBirth);
                            monthDiff = monthDiff - 1
                        }
                    }
                    else {
                        daysDiff = parseInt(totalNumOfDaysOfMonths[monthOfToday - 1]) + parseInt(dayOfToday.replace(/^[0]+/g, "")) - parseInt(dayOfBirth);
                        monthDiff = monthDiff - 1;
                    }

                    break;
                case "07": /*July*/
                    if (monthDiff == '5') {
                        if ((yearOfBirth % 400 == 0) || (yearOfBirth % 4 == 0) || (yearOfBirth % 400 == 0 && yearOfBirth % 100 != 0)) {
                            daysDiff = parseInt(totalNumOfDaysOfMonths[monthOfToday - 1]) + parseInt(dayOfToday.replace(/^[0]+/g, "") - 2) - parseInt(dayOfBirth);
                        }
                        else {
                            daysDiff = parseInt(totalNumOfDaysOfMonths[monthOfToday - 1]) + parseInt(dayOfToday.replace(/^[0]+/g, "") - 3) - parseInt(dayOfBirth);
                        }
                        monthDiff = monthDiff - 1;
                    }
                    else if (monthDiff == '4' || monthDiff == '6' || monthDiff == '9') {
                        daysDiff = parseInt(totalNumOfDaysOfMonths[monthOfToday - 1]) + parseInt(dayOfToday.replace(/^[0]+/g, "")) - parseInt(dayOfBirth);
                        monthDiff = monthDiff - 1;
                    }
                    else if (monthDiff == '11') {
                        daysDiff = parseInt(totalNumOfDaysOfMonths[monthOfToday - 1]) + parseInt(dayOfToday.replace(/^[0]+/g, "")) - parseInt(dayOfBirth);
                        if (monthOfBirth == "08") {
                            monthDiff = monthDiff - 1;
                        }
                    }
                    else if (monthDiff == '3' || monthDiff == '1' || monthDiff == '10' || monthDiff == '8') {
                        daysDiff = parseInt(totalNumOfDaysOfMonths[monthOfToday - 1]) + parseInt(dayOfToday.replace(/^[0]+/g, "") - 1) - parseInt(dayOfBirth);
                        monthDiff = monthDiff - 1;
                    }
                    else if (monthDiff == '2' || monthDiff == '7') {
                        daysDiff = parseInt(totalNumOfDaysOfMonths[monthOfToday - 1]) + parseInt(dayOfToday.replace(/^[0]+/g, "")) - parseInt(dayOfBirth);
                        monthDiff = monthDiff - 1
                    }
                    else {
                        daysDiff = parseInt(totalNumOfDaysOfMonths[monthOfToday - 1]) + parseInt(dayOfToday.replace(/^[0]+/g, "")) - parseInt(dayOfBirth);
                        monthDiff = monthDiff - 1;
                    }
                    break;
                case "08": /*Aug*/
                    if (monthDiff == '1') {
                        daysDiff = parseInt(totalNumOfDaysOfMonths[monthOfToday - 1]) + parseInt(dayOfToday.replace(/^[0]+/g, "")) - parseInt(dayOfBirth);
                        monthDiff = monthDiff - 1;
                    }
                    else if (monthDiff == '6') {
                        if ((yearOfBirth % 400 == 0) || (yearOfBirth % 4 == 0) || (yearOfBirth % 400 == 0 && yearOfBirth % 100 != 0)) {
                            daysDiff = parseInt(totalNumOfDaysOfMonths[monthOfToday - 1]) + parseInt(dayOfToday.replace(/^[0]+/g, "") - 2) - parseInt(dayOfBirth);
                            monthDiff = monthDiff - 1;
                        }
                        else {
                            daysDiff = parseInt(totalNumOfDaysOfMonths[monthOfToday - 1]) + parseInt(dayOfToday.replace(/^[0]+/g, "") - 3) - parseInt(dayOfBirth);
                            monthDiff = monthDiff - 1;
                        }
                    }
                    else if (monthDiff == '2' || monthDiff == '4' || monthDiff == '9') {
                        daysDiff = parseInt(totalNumOfDaysOfMonths[monthOfToday - 1]) + parseInt(dayOfToday.replace(/^[0]+/g, "") - 1) - parseInt(dayOfBirth);
                        monthDiff = monthDiff - 1;
                    }
                    else if (monthDiff == '7') {
                        daysDiff = parseInt(totalNumOfDaysOfMonths[monthOfToday - 1]) + parseInt(dayOfToday.replace(/^[0]+/g, "")) - parseInt(dayOfBirth);
                        monthDiff = monthDiff - 1
                    }
                    else if (monthDiff == '10') {
                        if (monthOfBirth == '02') {
                            if ((yearOfBirth % 400 == 0) || (yearOfBirth % 4 == 0) || (yearOfBirth % 400 == 0 && yearOfBirth % 100 != 0)) {
                                daysDiff = parseInt(totalNumOfDaysOfMonths[monthOfToday - 1]) + parseInt(dayOfToday.replace(/^[0]+/g, "") - 2) - parseInt(dayOfBirth);
                                monthDiff = monthDiff - 1;
                            }
                        }
                        else {
                            daysDiff = parseInt(totalNumOfDaysOfMonths[monthOfToday - 1]) + parseInt(dayOfToday.replace(/^[0]+/g, "")) - parseInt(dayOfBirth);
                            if (daysDiff == 0)
                                daysDiff = 1;
                            monthDiff = monthDiff - 1;

                        }
                    }
                    else if (monthDiff == '11') {
                        if (monthOfBirth == '08') {
                            daysDiff = parseInt(totalNumOfDaysOfMonths[monthOfToday - 1]) + parseInt(dayOfToday.replace(/^[0]+/g, "")) - parseInt(dayOfBirth);
                        }
                        else {
                            if ((yearOfBirth % 400 == 0) || (yearOfBirth % 4 == 0) || (yearOfBirth % 400 == 0 && yearOfBirth % 100 != 0)) {
                                if (monthOfBirth == '03') {
                                    daysDiff = parseInt(totalNumOfDaysOfMonths[monthOfToday - 1]) + parseInt(dayOfToday.replace(/^[0]+/g, "")) - parseInt(dayOfBirth);
                                }
                                else {
                                    daysDiff = parseInt(totalNumOfDaysOfMonths[monthOfToday - 1]) + parseInt(dayOfToday.replace(/^[0]+/g, "") - 1) - parseInt(dayOfBirth);
                                    monthDiff = monthDiff - 1;
                                }
                            }
                            else {
                                if (monthOfBirth == '03') {
                                    daysDiff = parseInt(totalNumOfDaysOfMonths[monthOfToday - 1]) + parseInt(dayOfToday.replace(/^[0]+/g, "")) - parseInt(dayOfBirth);
                                }
                                else {
                                    daysDiff = parseInt(totalNumOfDaysOfMonths[monthOfToday - 1]) + parseInt(dayOfToday.replace(/^[0]+/g, "") - 1) - parseInt(dayOfBirth);
                                    monthDiff = monthDiff - 1;
                                }

                            }
                        }
                    }
                    else {
                        daysDiff = parseInt(totalNumOfDaysOfMonths[monthOfToday - 1]) + parseInt(dayOfToday.replace(/^[0]+/g, "")) - parseInt(dayOfBirth);
                        monthDiff = monthDiff - 1;
                    }


                    break;
                case "09": /*Sep*/
                    if (monthDiff == '2' || monthDiff == '4' || monthDiff == '1' || monthDiff == "11" || monthDiff == "6" || monthDiff == "8" || monthDiff == "9") {
                        if (monthOfBirth == '09') {
                            daysDiff = parseInt(totalNumOfDaysOfMonths[monthOfToday - 1]) + parseInt(dayOfToday.replace(/^[0]+/g, "")) - parseInt(dayOfBirth);
                        }
                        else {
                            daysDiff = parseInt(totalNumOfDaysOfMonths[monthOfToday - 1]) + parseInt(dayOfToday.replace(/^[0]+/g, "")) - parseInt(dayOfBirth);
                            daysDiff = parseFloat(daysDiff) + 1;
                            monthDiff = monthDiff - 1;
                        }
                    }
                    else if (monthDiff == '7') {
                        if ((yearOfBirth % 400 == 0) || (yearOfBirth % 4 == 0) || (yearOfBirth % 400 == 0 && yearOfBirth % 100 != 0)) {
                            daysDiff = parseInt(totalNumOfDaysOfMonths[monthOfToday - 1]) + parseInt(dayOfToday.replace(/^[0]+/g, "") - 1) - parseInt(dayOfBirth);
                            monthDiff = monthDiff - 1
                        }
                        else {
                            daysDiff = parseInt(totalNumOfDaysOfMonths[monthOfToday - 1]) + parseInt(dayOfToday.replace(/^[0]+/g, "") - 2) - parseInt(dayOfBirth);
                            monthDiff = monthDiff - 1
                        }
                    }
                    else if (monthDiff == '10') {
                        if (monthOfBirth == '02') {
                            if ((yearOfBirth % 400 == 0) || (yearOfBirth % 4 == 0) || (yearOfBirth % 400 == 0 && yearOfBirth % 100 != 0)) {
                                daysDiff = parseInt(totalNumOfDaysOfMonths[monthOfToday - 1]) + parseInt(dayOfToday.replace(/^[0]+/g, "") - 2) - parseInt(dayOfBirth);
                                monthDiff = monthDiff - 1;
                            }
                        }
                        else {
                            daysDiff = parseInt(totalNumOfDaysOfMonths[monthOfToday - 1]) + parseInt(dayOfToday.replace(/^[0]+/g, "")) - parseInt(dayOfBirth);
                            if (daysDiff == 0)
                                daysDiff = 1;
                            monthDiff = monthDiff - 1;
                        }
                    }
                    else if (monthDiff == '3') {
                        daysDiff = parseInt(totalNumOfDaysOfMonths[monthOfToday - 1]) + parseInt(dayOfToday.replace(/^[0]+/g, "") - 1) - parseInt(dayOfBirth);
                        daysDiff = parseFloat(daysDiff) + 1;
                        monthDiff = monthDiff - 1;
                    }
                    else {
                        daysDiff = parseInt(totalNumOfDaysOfMonths[monthOfToday - 1]) + parseInt(dayOfToday.replace(/^[0]+/g, "")) - parseInt(dayOfBirth);
                        monthDiff = monthDiff - 1;
                    }

                    break;
                case "10": /*Oct*/
                    if (monthDiff == '8') {
                        if ((yearOfBirth % 400 == 0) || (yearOfBirth % 4 == 0) || (yearOfBirth % 400 == 0 && yearOfBirth % 100 != 0)) {
                            daysDiff = parseInt(totalNumOfDaysOfMonths[monthOfToday - 1]) + parseInt(dayOfToday.replace(/^[0]+/g, "") - 2) - parseInt(dayOfBirth);
                        }
                        else {
                            daysDiff = parseInt(totalNumOfDaysOfMonths[monthOfToday - 1]) + parseInt(dayOfToday.replace(/^[0]+/g, "") - 3) - parseInt(dayOfBirth);
                        }
                        monthDiff = monthDiff - 1;
                    }
                    else if (monthDiff == '9' || monthDiff == '2' || monthDiff == '7') {
                        daysDiff = parseInt(totalNumOfDaysOfMonths[monthOfToday - 1]) + parseInt(dayOfToday.replace(/^[0]+/g, "")) - parseInt(dayOfBirth);
                        monthDiff = monthDiff - 1;
                    }
                    else if (monthDiff == '10') {
                        if (monthOfBirth == '02') {
                            if ((yearOfBirth % 400 == 0) || (yearOfBirth % 4 == 0) || (yearOfBirth % 400 == 0 && yearOfBirth % 100 != 0)) {
                                daysDiff = parseInt(totalNumOfDaysOfMonths[monthOfToday - 1]) + parseInt(dayOfToday.replace(/^[0]+/g, "") - 2) - parseInt(dayOfBirth);
                                monthDiff = monthDiff - 1;
                            }
                        }
                        else {
                            daysDiff = parseInt(totalNumOfDaysOfMonths[monthOfToday - 1]) + parseInt(dayOfToday.replace(/^[0]+/g, "")) - parseInt(dayOfBirth);
                            if (daysDiff == 0)
                                daysDiff = 1;
                            monthDiff = monthDiff - 1;

                        }
                    }
                    else if (monthDiff == '11') {
                        if (monthOfBirth == '10') {
                            daysDiff = parseInt(totalNumOfDaysOfMonths[monthOfToday - 1]) + parseInt(dayOfToday.replace(/^[0]+/g, "")) - parseInt(dayOfBirth);
                        }
                        else {
                            daysDiff = parseInt(totalNumOfDaysOfMonths[monthOfToday - 1]) + parseInt(dayOfToday.replace(/^[0]+/g, "") - 1) - parseInt(dayOfBirth);
                            monthDiff = monthDiff - 1;
                        }
                    }
                    else if (monthDiff == '1' || monthDiff == '4' || monthDiff == "06") {
                        daysDiff = parseInt(totalNumOfDaysOfMonths[monthOfToday - 1]) + parseInt(dayOfToday.replace(/^[0]+/g, "") - 1) - parseInt(dayOfBirth);
                        monthDiff = monthDiff - 1;
                    }
                    else {
                        daysDiff = parseInt(totalNumOfDaysOfMonths[monthOfToday - 1]) + parseInt(dayOfToday.replace(/^[0]+/g, "")) - parseInt(dayOfBirth);
                        monthDiff = monthDiff - 1;
                    }


                    break;
                case "11": /*Nov*/
                    if (monthDiff == '4' || monthDiff == '3' || monthDiff == '1' || monthDiff == "6" || monthDiff == "8") {
                        if (monthOfBirth == '04') {
                            daysDiff = parseInt(totalNumOfDaysOfMonths[monthOfToday - 1]) + parseInt(dayOfToday.replace(/^[0]+/g, "")) - parseInt(dayOfBirth);
                        }
                        else {
                            daysDiff = parseInt(totalNumOfDaysOfMonths[monthOfToday - 1]) + parseInt(dayOfToday.replace(/^[0]+/g, "")) - parseInt(dayOfBirth);
                            daysDiff = parseFloat(daysDiff) + 1;
                            monthDiff = monthDiff - 1;
                        }
                    }
                    else if (monthDiff == '2') {
                        if (monthOfBirth == "09") {
                            daysDiff = parseInt(totalNumOfDaysOfMonths[monthOfToday - 1]) + parseInt(dayOfToday.replace(/^[0]+/g, "")) - parseInt(dayOfBirth);
                            monthDiff = monthDiff - 1
                        }
                        else {
                            daysDiff = parseInt(totalNumOfDaysOfMonths[monthOfToday - 1]) + parseInt(dayOfToday.replace(/^[0]+/g, "")) - parseInt(dayOfBirth);
                            daysDiff = daysDiff + 1;
                            monthDiff = monthDiff - 1
                        }
                    }
                    else if (monthDiff == '11') {
                        if (monthOfBirth == "11") {
                            daysDiff = parseInt(totalNumOfDaysOfMonths[monthOfToday - 1]) + parseInt(dayOfToday.replace(/^[0]+/g, "")) - parseInt(dayOfBirth);
                        }
                        else {
                            daysDiff = parseInt(totalNumOfDaysOfMonths[monthOfToday - 1]) + parseInt(dayOfToday.replace(/^[0]+/g, "")) - parseInt(dayOfBirth);
                            daysDiff = daysDiff + 1;
                            monthDiff = monthDiff - 1
                        }
                    }
                    else if (monthDiff == "9") {
                        if ((yearOfBirth % 400 == 0) || (yearOfBirth % 4 == 0) || (yearOfBirth % 400 == 0 && yearOfBirth % 100 != 0)) {
                            daysDiff = parseInt(totalNumOfDaysOfMonths[monthOfToday - 1]) + parseInt(dayOfToday.replace(/^[0]+/g, "") - 1) - parseInt(dayOfBirth);
                            monthDiff = monthDiff - 1
                        }
                        else {
                            daysDiff = parseInt(totalNumOfDaysOfMonths[monthOfToday - 1]) + parseInt(dayOfToday.replace(/^[0]+/g, "") - 2) - parseInt(dayOfBirth);
                            monthDiff = monthDiff - 1
                        }
                    }
                    else if (monthDiff == '10') {
                        if (monthOfBirth == '02') {
                            if ((yearOfBirth % 400 == 0) || (yearOfBirth % 4 == 0) || (yearOfBirth % 400 == 0 && yearOfBirth % 100 != 0)) {
                                daysDiff = parseInt(totalNumOfDaysOfMonths[monthOfToday - 1]) + parseInt(dayOfToday.replace(/^[0]+/g, "") - 2) - parseInt(dayOfBirth);
                                monthDiff = monthDiff - 1;
                            }
                        }
                        else {
                            daysDiff = parseInt(totalNumOfDaysOfMonths[monthOfToday - 1]) + parseInt(dayOfToday.replace(/^[0]+/g, "")) - parseInt(dayOfBirth);
                            daysDiff = daysDiff + 1;
                            monthDiff = monthDiff - 1;
                        }
                    }
                    else {
                        daysDiff = parseInt(totalNumOfDaysOfMonths[monthOfToday - 1]) + parseInt(dayOfToday.replace(/^[0]+/g, "")) - parseInt(dayOfBirth);
                        monthDiff = monthDiff - 1;
                    }

                    break;
                case "12": /*Dec*/
                    if (monthDiff == '1') {
                        daysDiff = parseInt(totalNumOfDaysOfMonths[monthOfToday - 1]) + parseInt(dayOfToday.replace(/^[0]+/g, "") - 1) - parseInt(dayOfBirth);
                        monthDiff = monthDiff - 1;
                    }
                    else if (monthDiff == '6' || monthDiff == '8' || monthDiff == '3') {
                        daysDiff = parseInt(totalNumOfDaysOfMonths[monthOfToday - 1]) + parseInt(dayOfToday.replace(/^[0]+/g, "") - 1) - parseInt(dayOfBirth);
                        monthDiff = monthDiff - 1;
                    }
                    else if (monthDiff == '4' || monthDiff == '2' || monthDiff == '7' || monthDiff == '9') {
                        daysDiff = parseInt(totalNumOfDaysOfMonths[monthOfToday - 1]) + parseInt(dayOfToday.replace(/^[0]+/g, "")) - parseInt(dayOfBirth);
                        monthDiff = monthDiff - 1
                    }
                    else if (monthDiff == '10') {
                        if ((yearOfBirth % 400 == 0) || (yearOfBirth % 4 == 0) || (yearOfBirth % 400 == 0 && yearOfBirth % 100 != 0)) {
                            daysDiff = parseInt(totalNumOfDaysOfMonths[monthOfToday - 1]) + parseInt(dayOfToday.replace(/^[0]+/g, "") - 2) - parseInt(dayOfBirth);
                            monthDiff = monthDiff - 1;
                        }
                        else {
                            daysDiff = parseInt(totalNumOfDaysOfMonths[monthOfToday - 1]) + parseInt(dayOfToday.replace(/^[0]+/g, "") - 3) - parseInt(dayOfBirth);
                            monthDiff = monthDiff - 1;
                        }
                    }
                    else if (monthDiff == '11') {
                        if (monthOfBirth == '01') {
                            daysDiff = parseInt(totalNumOfDaysOfMonths[monthOfToday - 1]) + parseInt(dayOfToday.replace(/^[0]+/g, "")) - parseInt(dayOfBirth);
                            monthDiff = monthDiff - 1;
                        }
                        else {
                            daysDiff = parseInt(totalNumOfDaysOfMonths[monthOfToday - 1]) + parseInt(dayOfToday.replace(/^[0]+/g, "")) - parseInt(dayOfBirth);
                        }
                    }
                    else {
                        daysDiff = parseInt(totalNumOfDaysOfMonths[monthOfToday - 1]) + parseInt(dayOfToday.replace(/^[0]+/g, "")) - parseInt(dayOfBirth);
                        monthDiff = monthDiff - 1;
                    }

                    break;
                default:
                    break;
            }
        }
        if (daysDiff == 0) { daysDiff = 0; }

        process(yearOfToday, monthOfToday, dayOfToday, yearOfBirth, monthOfBirth, dayOfBirth, yearDiff, monthDiff, daysDiff);
        onExtendAge();
        var clientname = $('[id*=hdnclientNameFor]').val();
        clientname = clientname.toUpperCase();
        if (clientname != 'MRRCH') {
            onTitleValidation();
        }
        return false;
    }
    /*This Javascript code is to get number of days in perticuler month of year*/
    function caldays(m, y) {
        if (m == 01 || m == 03 || m == 05 || m == 07 || m == 08 || m == 10 || m == 12) {
            var dmax = 31; return dmax;
        }
        else if (m == 04 || m == 06 || m == 09 || m == 11) {
            var dmax = 30; return dmax;
        }
        else if (m == 0) {
            var dmax = 31; return dmax;
        }
        else {
            if ((y % 400 == 0) || (y % 4 == 0) || (y % 400 == 0 && y % 100 != 0)) {
                dmax = 29; return dmax;
            }
            else {
                dmax = 28;
            }
            return dmax;
        }
    }
    /*Get the number validation for years ,months and days*/
    function CheckNumberData() {
        var charCode = (e.charCode) ? e.charCode : ((e.keyCode) ? e.keyCode : ((e.which) ? e.which : 0));
        if (charCode == 9 || charCode == 8) { return true; }
        if (charCode >= 48 && charCode <= 57) {
            e.returnValue = true; return true;
        }
        e.returnValue = false;
        return false;
    }

    function fn_CalAge(ctrlY, ctrlM, ctrlD, ctrlDOB, ctrlHY, ctrlHM, ctrlHD, ctrlHUOM, ctrlHA, inputsrc) {

        var month = ctrlM.value; var years = ctrlY.value; var days = ctrlD.value; var dob;
        if (ctrlD.value != "") { dob = ctrlD.value; } else { dob = ""; }

        if (years > 120) {
            $(".stoast").toastText("warning", "Please Enter Valid No. of  Years", 5, 3);
            /*alert('Please Enter Valid Nos.of Years');*/
            ctrlY.value = 0;
            fn_CalAge(ctrlY, ctrlM, ctrlD, ctrlDOB, ctrlHY, ctrlHM, ctrlHD, ctrlHUOM, ctrlHA, inputsrc);
            return false;
        }
        if (days > 31) {
            $(".stoast").toastText("warning", "Please Enter Valid No. Of days", 5, 3);
            /*alert('Please Enter Valid Nos. Of days'); */
            ctrlD.value = 0; return false;
        }
        if (days < 0) {
            $(".stoast").toastText("warning", "Please Enter Valid No. Of days", 5, 3);
            /*alert('Please Enter Valid Nos. Of days'); */
            ctrlD.value = 0; ctrlD.value = ''; return false;
        }
        if (month == 12) {
            if (years == '' || years == 'NaN') { years = 0; }
            years = parseInt(years) + parseInt(1); month = 0; ctrlM.value = month; ctrlY.value = years;
        }
        if (month > 12) {
            $(".stoast").toastText("warning", "Please Enter Valid No. Of months", 5, 3);
            /*alert('Please Enter Valid Nos. Of months'); */
            ctrlM.value = 0; month = 0; return false;
        }
        if (month < 0) {
            $(".stoast").toastText("warning", "Please Enter Valid No. Of months", 5, 3);
            /* alert('Please Enter Valid Nos. Of months'); */
            ctrlD.value = ''; ctrlM.value = 0; month = 0; return false;
        }
        today_date = new Date(); today_Year = today_date.getFullYear(); today_month = today_date.getMonth();

        today_Day = today_date.getDate();
       // var pastdate = new Date(years, month - 1, days); 
        
        var ageYear = today_Year - years;
        var ageMonth = today_month - month + 1;

        if (ageMonth < 0) { ageMonth = ageMonth + 12; ageYear = ageYear - 1; }
        //if (ctrlDOB.value == new Date().format('dd-MMM-yyyy')) {ctrlDOB.value = "__-___-____"; }
        //    if (ctrlDOB.value == new Date().format('dd-MMM-yyyy')) {
        //        days = 0;
        //    }
        var ageDay = today_Day - days; var noofDays = caldays(ageMonth, ageYear);

        if (ageDay > noofDays) {
            ctrlD.value = ageDay - noofDays;
            ageDay = ageDay - (ageDay - noofDays);
        }

        if (ageMonth < 0) {
            var noofYears = Math.round(parseInt(ageMonth) / 12);
            if (noofYears == 0) { noofYears = -1; }
            ageMonth = today_month - (ageMonth) + 1;
            if (ageMonth == 12) {
                ageYear = ageYear - 1; ageMonth = today_month + 1;
            }
            else {
                ageYear = ageYear + noofYears; ageMonth = today_month + 1;
            }
        }
        if (ageDay < 0) {
            if (ageMonth > 0)
                ageMonth = ageMonth - 1;
            else {
                ageMonth = ageMonth - 1 + 12; ageYear = ageYear - 1;
            }

            var noofDays = caldays(ageMonth, ageYear); var _eDay = (noofDays + parseInt(ageDay)); ageDay = _eDay;

        }
        if (ageDay == 0) {
            if (ageMonth == 0) { ageMonth = ageMonth + 12; ageYear = ageYear - 1; }
            if (parseInt(ageMonth - 1) == 1) { ageDay = '31' }
            else if (parseInt(ageMonth - 1) == 2) {
                if ((parseInt(ageYear % 4) == 0) || (parseInt(ageYear % 400) == 0) || (parseInt(ageYear % 400) == 0 && parseInt(ageYear % 100) != 0)) { ageDay = '29' } else { ageDay = '28' }
            }
            else if (parseInt(ageMonth - 1) == 3) { ageDay = '31' } else if (parseInt(ageMonth - 1) == 4) { ageDay = '30' } else if (parseInt(ageMonth - 1) == 5) { ageDay = '31' } else if (parseInt(ageMonth - 1) == 6) { ageDay = '30' } else if (parseInt(ageMonth - 1) == 7) { ageDay = '31' } else if (parseInt(ageMonth - 1) == 8) { ageDay = '31' } else if (parseInt(ageMonth - 1) == 9) { ageDay = '30' } else if (parseInt(ageMonth - 1) == 10) { ageDay = '31' } else if (parseInt(ageMonth - 1) == 11) { ageDay = '30' } else { ageDay = '31' }
            ageMonth = ageMonth - 1;
        }
        if (ageMonth == 0) { ageYear = ageYear - 1; }
        //  if (ageMonth == 0) { ageMonth = 'Dec' } else if (ageMonth == 1) { ageMonth = 'Jan' } else if (ageMonth == 2) { ageMonth = 'Feb' } else if (ageMonth == 3) { ageMonth = 'Mar' } else if (ageMonth == 4) { ageMonth = 'Apr' } else if (ageMonth == 5) { ageMonth = 'May' } else if (ageMonth == 6) { ageMonth = 'Jun' } else if (ageMonth == 7) { ageMonth = 'Jul' } else if (ageMonth == 8) { ageMonth = 'Aug' } else if (ageMonth == 9) { ageMonth = 'Sep' } else if (ageMonth == 10) { ageMonth = 'Oct' } else if (ageMonth == 11) { ageMonth = 'Nov' } else if (ageMonth == 12) { ageMonth = 'Dec' }
        if (ageYear % 4 == 0 && (ageMonth == 'Feb' || ageMonth == '02' || ageMonth == '2')) {
            if (ageDay == '29' && (ageMonth == 'Feb' || ageMonth == '02' || ageMonth == '2')) {
                ageDay == '29';
            }
            else if (ageDay > 29) {
                ageDay == '1'; ageMonth = '03';
            }
        }
        if (parseInt(ageDay).toString().length == 1)
            ageDay = "0" + ageDay;
        if (document.getElementById('' + ctrlcom + '_newAgeUc_hdnageSource').value != 'D') {
            // if (ageMonth != "0") { ageDay = "01"; }
            if (inputsrc != 'D') { ageDay = "01"; }
        }
        if (ageMonth == 0) { ageMonth = 12; }
        if (ageMonth.toString().length == 1)
            ageMonth = "0" + ageMonth;
        age = ageDay + '-' + ageMonth + '-' + ageYear;
        /* if (age.length == 10) { age = "0" + age; } */
        ctrlDOB.value = age; ctrlHY.value = years; ctrlHM.value = month;

        ctrlD.value = days; ctrlHD.value = days;
        if (years != "0") { ctrlHUOM.value = 83; }
        if (month != "0") { ctrlHUOM.value = 84; }
        if (days != "0") { ctrlHUOM.value = 85; }
        ctrlHA.value = years + ',' + month + ',' + days;
        if (month == 0 && days == 0 && years == 0) {
            new Date().format('dd-MM-yyyy'); /*ctrlDOB.value = "__-___-____"; */
        }
        if (document.getElementById('' + ctrlcom + '_newAgeUc_hdnageSource').value != 'D') {
            ValidatetextChangedDateOfBirth(document.getElementById('' + ctrlcom + '_newAgeUc_txtDob'));
        }
        onExtendAge();
        if (AgeCount > 0) {
            document.getElementById('' + ctrlcom + '_newAgeUc_txtDob').value = "__-__-____";
            years = 0;
            month = 0;
            days = 0;
        }
        var clientname = $('[id*=hdnclientNameFor]').val();
        clientname = clientname.toUpperCase();
        if (clientname != 'MRRCH') {
            onTitleValidation();
        }

    }
    function onExtendAge() {

        if (localStorage.getItem("ED") != "" && localStorage.getItem("ED") != undefined && localStorage.getItem("ED") != null) {
            var Age = $('[id*=txtYear]').val() + "(Y), " + $('[id*=txtMonths]').val() + "(M), " + $('[id*=txtDay]').val() + "(D)";
            var Dob = $('[id*=txtDob]').val();
            Age = Age.replace(',', ':');
            Age = Age.replace(',', ':');
            //console.log(localStorage.getItem("ED"));
            if ((Age != "0(Y), 0(M), 0(D)") && (Dob != "__-___-____")) {//Shiva 1-1-2016
                if (localStorage.getItem("ED") == "OPBillClientSide.aspx") {
                    var _gender = $('[id*=ddlGender]').find("option:selected").text();
                    if (_gender == "--select" || $('[id*=ddlGender]').val() == "0") { _gender = ''; }
                    extendedDisplay.setData(3, 'Gender/Age(Y/M/D) :', _gender + " / " + Age);
                }
                else if (localStorage.getItem("ED") == "OPDBill.aspx") {
                    extendedDisplay.setData(1, 'DOB / Age(Y/M/D) :', Dob + " / " + Age);
                }
                else if (localStorage.getItem("ED") == "New_IPRegistrationChengesDetails.aspx") {
                    extendedDisplay.setData(4, 'DOB / Age(Y/M/D) :', Dob + " / " + Age);
                }
                else {
                    extendedDisplay.setData(3, 'DOB / Age(Y/M/D) :', Dob + " / " + Age);
                }
            } //Shiva
            else {//Shiva 1-3-2016
                if (((Age == "(Y), (M), (D)") && (Dob == "__-___-____")) || ((Age == "(Y): (M): (D)") && (Dob == "__-___-____"))) {
                    Age = ""; Dob = "";
                    if (localStorage.getItem("ED") == "OPDBill.aspx") {
                        extendedDisplay.setData(1, 'DOB / Age(Y/M/D) :', Dob + " / " + Age);
                    }
                    else {
                        extendedDisplay.setData(3, 'DOB / Age(Y/M/D) :', Dob + Age);
                    }
                }
            }
        }
        if (localStorage.getItem("ED") == "OP_QUICK.aspx") {
            var _age = $('[id*=txtYear]').val();
            if (_age == '' || _age == undefined || _age == null) { _age = 0; }
            document.getElementById('' + ctrlcom + '_UCServices_hdnPat_Age').value = _age;
        }
        if (localStorage.getItem("ED") == "OPDBill.aspx") {
            var _age = $('[id*=txtYear]').val();
            if (_age == '' || _age == undefined || _age == null) { _age = 0; }
            document.getElementById('' + ctrlcom + '_UCServices_hdnPat_Age').value = _age;
        }
    }

    function onTitleValidation() {
        var ddlvalue = document.getElementById('' + ctrlcom + '_ddlTitle').value;
        var ddlTitle = document.getElementById('' + ctrlcom + '_ddlTitle');
        var ddlTitleIndex = document.getElementById('' + ctrlcom + '_ddlTitle').selectedIndex;
        var val = ddlTitleIndex; AgeCount = 0;
        var checked = false;
        var doc_name = document.getElementById('' + ctrlcom + '_newAgeUc_hdnDocument').value;
        if (doc_name == "REG") {
            checked = document.getElementById('' + ctrlcom + '_ChkNBorn').checked;
        }
        else if (doc_name == 'OPQUICK')
        { checked = false; }
        if ((ddlvalue == '7' || ddlvalue == '8' || ddlvalue == '5') && checked == true) {
            var _years = document.getElementById('' + ctrlcom + '_newAgeUc_txtYear').value;
            var _months = document.getElementById('' + ctrlcom + '_newAgeUc_txtMonths').value;
            var _days = document.getElementById('' + ctrlcom + '_newAgeUc_txtDay').value;
            var msg = '';
            if (_years < 5) {
                //            if (_months < 3) {
                //                if (_days <= 31) {
                //                }
                //                else {
                //                    msg = "Please Enter Proper age of " + ddlTitle[val].innerHTML + " Patient!!!";
                //                    $(".stoast").toastText("warning", msg, 5, 3);
                //                    /*alert(msg);*/
                //                    document.getElementById('' + ctrlcom + '_newAgeUc_txtDob').value = '__-___-____';
                //                    document.getElementById('' + ctrlcom + '_newAgeUc_txtYear').value = '0';
                //                    document.getElementById('' + ctrlcom + '_newAgeUc_txtMonths').value = '0';
                //                    document.getElementById('' + ctrlcom + '_newAgeUc_txtDay').value = '0';
                //                    document.getElementById('' + ctrlcom + '_newAgeUc_txtDay').focus();
                //                    AgeCount++;
                //                    return false;
                //                }
                //            }
                //            else {
                //                msg = "Please Enter Proper age of " + ddlTitle[val].innerHTML + " Patient!!!";
                //                $(".stoast").toastText("warning", msg, 5, 3);
                //               /*alert(msg);*/
                //                document.getElementById('' + ctrlcom + '_newAgeUc_txtDob').value = '__-___-____';
                //                document.getElementById('' + ctrlcom + '_newAgeUc_txtYear').value = '0';
                //                document.getElementById('' + ctrlcom + '_newAgeUc_txtMonths').value = '0';
                //                document.getElementById('' + ctrlcom + '_newAgeUc_txtDay').value = '0';
                //                document.getElementById('' + ctrlcom + '_newAgeUc_txtMonths').focus();
                //                AgeCount++;
                //                return false;
                //            }
            }
            else {
                msg = "Please Enter Proper age of " + ddlTitle[val].innerHTML + " Patient!!!";
                $(".stoast").toastText("warning", msg, 5, 3);
                /* alert(msg);*/
                document.getElementById('' + ctrlcom + '_newAgeUc_txtDob').value = '__-___-____';
                document.getElementById('' + ctrlcom + '_newAgeUc_txtYear').value = '0';
                document.getElementById('' + ctrlcom + '_newAgeUc_txtMonths').value = '0';
                document.getElementById('' + ctrlcom + '_newAgeUc_txtDay').value = '0';
                document.getElementById('' + ctrlcom + '_newAgeUc_txtYear').focus();
                AgeCount++;
                return false;
            }
        }
        if (ddlvalue == "4" || ddlvalue == "5" || ddlvalue == "6" || ddlvalue == "7" || ddlvalue == "8") {
            var dob = document.getElementById('' + ctrlcom + '_newAgeUc_txtDob').value;
            var years = document.getElementById('' + ctrlcom + '_newAgeUc_txtYear').value;
            var months = document.getElementById('' + ctrlcom + '_newAgeUc_txtMonths').value;
            var days = document.getElementById('' + ctrlcom + '_newAgeUc_txtDay').value;
            var currentdate = new Date();
            if (years >= 18) {
                $(".stoast").toastText("warning", "Enter Valid Age As Per The Title", 5, 3);
                /* alert('Enter Valid Age As Per The Title');*/
                document.getElementById('' + ctrlcom + '_newAgeUc_txtDob').value = '__-___-____';
                document.getElementById('' + ctrlcom + '_newAgeUc_txtYear').value = '0';
                document.getElementById('' + ctrlcom + '_newAgeUc_txtMonths').value = '0';
                document.getElementById('' + ctrlcom + '_newAgeUc_txtDay').value = '0';
                AgeCount++;
                return false;
            }
        }
    }
    function CalHrs() {
        var hours = document.getElementById('<%= txtHH.ClientID%>').value;
        var mints = document.getElementById('<%= txtMM.ClientID%>').value;
        if (parseInt(hours) > 23) {
            $(".stoast").toastText("warning", "Please Enter bellow 24 Hours", 5, 3);
            /*alert('Please Enter bellow 24 Hours');*/
            document.getElementById('<%= txtHH.ClientID%>').value = '0';
            document.getElementById('<%= txtHH.ClientID%>').focus();
            return false;
        }
        else if (parseInt(mints) > 59) {
            $(".stoast").toastText("warning", "Please Enter bellow 59 Mints", 5, 3);
            /*alert('Please Enter bellow 59 Mints');*/
            document.getElementById('<%= txtMM.ClientID%>').value = '0';
            document.getElementById('<%= txtMM.ClientID%>').focus();
            return false;
        }
         else if(parseInt(hours) >new Date().getHours()){
             $(".stoast").toastText("warning", "Please Enter bellow  Current Time", 5, 3);
          document.getElementById('<%= txtHH.ClientID%>').value = '0';
            document.getElementById('<%= txtHH.ClientID%>').focus();
            return false;
        }
        else if(parseInt(mints) > new Date().getMinutes()){
            $(".stoast").toastText("warning", "Please Enter bellow  Current Time", 5, 3);
        document.getElementById('<%= txtMM.ClientID%>').value = '0';
            document.getElementById('<%= txtMM.ClientID%>').focus();
          return false;
        }

    }

    function ValidatetextChangedDateOfBirth_appt() {

        /* if (document.getElementById('<%=hdnDocument.ClientID%>').value == "OPQUICK" || document.getElementById('<%=hdnDocument.ClientID%>').value == "REG") {
        CheckCombinationValidations();
        }*/
        /* Commemted By Pushkar Please Let Me Know Before Uncomment It */
        if (document.getElementById('<%=txtDob.ClientID%>').value == "__-__-____") {
            document.getElementById('<%= txtMonths.ClientID%>').value = '0';
            document.getElementById('<%= txtYear.ClientID%>').value = '0';
            document.getElementById('<%= txtDay.ClientID%>').value = '0';
            return false;
        }
        var dtval = document.getElementById('<%=txtDob.ClientID%>').value;
        var DateValExp = /^(?:((31-([Jj][Aa][Nn]|[Mm][Aa][Rr]|[Mm][Aa][Yy]|[Jj][Uu][Ll]|[Aa][Uu][Gg]|[Oo][Cc][Tt]|[Dd][Ee][Cc]))|((([0-2]\d)|30)-([Jj][Aa][Nn]|[Mm][Aa][Rr]|[Aa][Pp][Rr]|[Mm][Aa][Yy]|[Jj][Uu][Nn]|[Jj][Uu][Ll]|[Aa][Uu][Gg]|[Ss][Ee][Pp]|[Oo][Cc][Tt]|[Nn][Oo][Vv]|[Dd][Ee][Cc]))|(([01]\d|2[0-8])-[Ff][Ee][Bb]))|(29-[Ff][Ee][Bb](?=-(((1[6-9]|[2-9]\d)([02468][48]|[2468][048]|[13579][26]))|((16|[2468][048]|[3579][26])00)))))-((1[6-9]|[2-9]\d)\d{2})$/;

        //var DateValExp="(^(((([1-9])|([1-2][0-9])|(30))\\-([A,a][P,p][R,r]|[J,j][U,u][N,n]|[J,j][U,u][N,n]|[S,s][E,e][P,p]|[N,n][O,o][V,v]))|((([1-9])|([1-2][0-9])|([3][0-1]))\\-([J,j][A,a][N,n]|[M,m][A,a][R,r]|[M,m][A,a][Y,y]|[J,j][U,u][L,l]|[A,a][U,u][G,g]|[O,o][C,c][T,t]|[D,d][E,e][C,c])))\\-[0-9]{4}$)|(^([1-9])|([0][1-9])|([1][0-9])|([2][0-8]))\\-([F,f][E,e][B,b])\\-[0-9]{2}(([0248][1235679])|([13579][01345789]))$)|(^(([1-9])|([0][1-9])|([1][0-9])|([2][0-9]))\\-([F,f][E,e][B,b])\\-[0-9]{2}(([02468][048])|([13579][26]))$)";
        console.log('S:', 1);
        if ((DateValExp).test(dtval)) {

            console.log('S:', 2);
            var str1 = document.getElementById('<%=txtDob.ClientID%>').value;
            var str2 = new Date().format('dd-MM-yyyy');
            var t_sdate = str1;
            var sptdate = String(t_sdate).split("-");
            var myDay = sptdate[0];
            var myMonth = sptdate[1];
            var myYear = sptdate[2];
            var MON = myMonth;
            if (myDay > 31) {
                $(".stoast").toastText("warning", "Please Enter Valid Nos. Of days", 5, 3);
                /*alert('Please Enter Valid Nos. Of days'); */
                document.getElementById('<%=txtDob.ClientID%>').value = ''; return false;
            }
            if (MON == undefined) {
                $(".stoast").toastText("warning", "Please Enter Correct Date Format", 5, 3);
                /*alert('Please Enter Correct Date Format');*/
                document.getElementById('<%=txtDob.ClientID%>').value = '';
                document.getElementById('<%= txtMonths.ClientID%>').value = '';
                document.getElementById('<%= txtYear.ClientID%>').value = '';
                document.getElementById('<%= txtDay.ClientID%>').value = '';
                return false;
            }
            else {
                var uppercase = MON.toUpperCase();
            }

            var monthvalied = 0;
            MON = uppercase;
            switch (MON) {
                case "JAN": MON = "01"; monthvalied = 1; break;
                case "FEB": MON = "02"; monthvalied = 1; break;
                case "MAR": MON = "03"; monthvalied = 1; break;
                case "APR": MON = "04"; monthvalied = 1; break;
                case "MAY": MON = "05"; monthvalied = 1; break;
                case "JUN": MON = "06"; monthvalied = 1; break;
                case "JUL": MON = "07"; monthvalied = 1; break;
                case "AUG": MON = "08"; monthvalied = 1; break;
                case "SEP": MON = "09"; monthvalied = 1; break;
                case "OCT": MON = "10"; monthvalied = 1; break;
                case "NOV": MON = "11"; monthvalied = 1; break;
                case "DEC": MON = "12"; monthvalied = 1; break;

                case "01": MON = "01"; monthvalied = 1; break;
                case "02": MON = "02"; monthvalied = 1; break;
                case "03": MON = "03"; monthvalied = 1; break;
                case "04": MON = "04"; monthvalied = 1; break;
                case "05": MON = "05"; monthvalied = 1; break;
                case "06": MON = "06"; monthvalied = 1; break;
                case "07": MON = "07"; monthvalied = 1; break;
                case "08": MON = "08"; monthvalied = 1; break;
                case "09": MON = "09"; monthvalied = 1; break;
                case "10": MON = "10"; monthvalied = 1; break;
                case "11": MON = "11"; monthvalied = 1; break;
                case "12": MON = "12"; monthvalied = 1; break;

                case "1": MON = "01"; monthvalied = 1; break;
                case "2": MON = "02"; monthvalied = 1; break;
                case "3": MON = "03"; monthvalied = 1; break;
                case "4": MON = "04"; monthvalied = 1; break;
                case "5": MON = "05"; monthvalied = 1; break;
                case "6": MON = "06"; monthvalied = 1; break;
                case "7": MON = "07"; monthvalied = 1; break;
                case "8": MON = "08"; monthvalied = 1; break;
                case "9": MON = "09"; monthvalied = 1; break;

            }

            if (monthvalied == 0) {
                $(".stoast").toastText("warning", "Please Enter Valid Month", 5, 3);
                /*alert('Please Enter Valid Month');*/
                document.getElementById('<%= txtDob.ClientID%>').value = '';
                document.getElementById('<%= txtMonths.ClientID%>').value = '';
                document.getElementById('<%= txtYear.ClientID%>').value = '';
                document.getElementById('<%= txtDay.ClientID%>').value = '';
                return false;
            }

            var combineDatestr = myDay + "-" + MON + "-" + myYear;
            var dt1 = parseInt(combineDatestr.substring(0, 2), 10);
            //var mon1 = parseInt(combineDatestr.substring(3, 5), 10);
            var mon1 = MON;
            var yr1 = parseInt(combineDatestr.substring(6, 10), 10);
            //var dt2 = parseInt(str2.substring(0, 2), 10);
            var dt2 = str2.substring(0, 2);
            //var mon2 = parseInt(str2.substring(3, 5), 10);
            var mon2 = str2.substring(3, 5);
            var yr2 = parseInt(str2.substring(6, 10), 10);
            var yerMonDt = yr1 + " " + mon1 + " " + dt1;
            var curYerMonDt = yr2 + " " + mon2 + " " + dt2;
            var date1 = new Date(yerMonDt);
            var date2 = new Date(curYerMonDt);

            if (date1 > date2) {
                $(".stoast").toastText("warning", "Please select proper DOB!", 5, 3);
                /* alert("You cannot select a day after today!");*/
                document.getElementById('<%=txtDob.ClientID%>').value = '';
                document.getElementById('<%=txtDob.ClientID%>').focus();
                return false;
            }
            else {
                var _sele_date = combineDatestr;
                var ageby = _sele_date.replace(/[-:,\.]/g, "-");
                var ageby = _sele_date.replace(/[^0-9A-Za-z\-]/gi, "-");
                var date = ageby.split('-');
                var _tdate = date[0];
                var _tmonth = date[1];
                var _tyear = date[2];
                var dayOfBirth = _tdate;
                var monthOfBirth = _tmonth;
                var yearOfBirth = _tyear;
                var today = new Date().format('dd-MM-yyyy');
                var dt = today.split('-');
                var dayOfToday = dt[0];
                var monthOfToday = dt[1];
                var yearOfToday = dt[2];
                var yearDiff = 0;
                var monthDiff = 0;
                var daysDiff = 0;
                calcYearDiff(yearOfToday, monthOfToday, dayOfToday, yearOfBirth, monthOfBirth, dayOfBirth, yearDiff, monthDiff, daysDiff);
            }
            var dob = _sele_date;
            var rechangemonth;
            rechangemonth = dob.split('-')
            var myDay = rechangemonth[0];
            var myMonth = rechangemonth[1];
            var myYear = rechangemonth[2];
            var MON = myMonth;
            console.log('MON:', MON);
            switch (MON) {
                case "01":
                    MON = "Jan";
                    break;
                case "02":
                    MON = "Feb";
                    break;
                case "03":
                    MON = "Mar";
                    break;
                case "04":
                    MON = "Apr";
                    break;
                case "05":
                    MON = "May";
                    break;
                case "06":
                    MON = "Jun";
                    break;
                case "07":
                    MON = "Jul";
                    break;
                case "08":
                    MON = "Aug";
                    break;
                case "09":
                    MON = "Sep";
                    break;
                case "10":
                    MON = "Oct";
                    break;
                case "11":
                    MON = "Nov";
                    break;
                case "12":
                    MON = "Dec";
                    break;
            }
            var combineDatestr = myDay + "-" + MON + "-" + myYear;
            if (combineDatestr.length == 10)
                combineDatestr = "0" + combineDatestr;

            document.getElementById('<%= txtDob.ClientID%>').value = combineDatestr;
            console.log('assign1');
            if (document.getElementById('<%= txtYear.ClientID%>').value > 120) {
                $(".stoast").toastText("warning", "Please enter valid no. of years", 5, 3);
                document.getElementById('<%=txtDob.ClientID%>').value = "__-__-____";
                document.getElementById('<%= txtMonths.ClientID%>').value = '';
                document.getElementById('<%= txtYear.ClientID%>').value = '';
                document.getElementById('<%= txtDay.ClientID%>').value = '';
                return false;
            }
        }
        else {
            document.getElementById('<%=txtDob.ClientID%>').value = '__-__-____';
            document.getElementById('<%= txtMonths.ClientID%>').value = '';
            document.getElementById('<%= txtYear.ClientID%>').value = '';
            document.getElementById('<%= txtDay.ClientID%>').value = '';
            //$(".stoast").toastText("warning", "Please Enter Valid Date Of Birth.Enter Like (Ex:01-Jan-2999", 5, 3);
            /* alert('Please enter a valid date of birth! Format - 01-Jan-2999');*/
        }

    }
    function ValidatetextChangedDateOfBirth(sender) {

        /* if (document.getElementById('<%=hdnDocument.ClientID%>').value == "OPQUICK" || document.getElementById('<%=hdnDocument.ClientID%>').value == "REG") {
        CheckCombinationValidations();
        }*/
        /* Commemted By Pushkar Please Let Me Know Before Uncomment It */
        if (document.getElementById('<%=txtDob.ClientID%>').value == "__-__-____") {
            document.getElementById('<%= txtMonths.ClientID%>').value = '0';
            document.getElementById('<%= txtYear.ClientID%>').value = '0';
            document.getElementById('<%= txtDay.ClientID%>').value = '0';
            return false;
        }

        var dtval = $(sender).val();
        var DateValExp = /^(?:((31-([Jj][Aa][Nn]|[Mm][Aa][Rr]|[Mm][Aa][Yy]|[Jj][Uu][Ll]|[Aa][Uu][Gg]|[Oo][Cc][Tt]|[Dd][Ee][Cc]))|((([0-2]\d)|30)-([Jj][Aa][Nn]|[Mm][Aa][Rr]|[Aa][Pp][Rr]|[Mm][Aa][Yy]|[Jj][Uu][Nn]|[Jj][Uu][Ll]|[Aa][Uu][Gg]|[Ss][Ee][Pp]|[Oo][Cc][Tt]|[Nn][Oo][Vv]|[Dd][Ee][Cc]))|(([01]\d|2[0-8])-[Ff][Ee][Bb]))|(29-[Ff][Ee][Bb](?=-(((1[6-9]|[2-9]\d)([02468][48]|[2468][048]|[13579][26]))|((16|[2468][048]|[3579][26])00)))))-((1[6-9]|[2-9]\d)\d{2})$/;
        //var DateValExp="(^(((([1-9])|([1-2][0-9])|(30))\\-([A,a][P,p][R,r]|[J,j][U,u][N,n]|[J,j][U,u][N,n]|[S,s][E,e][P,p]|[N,n][O,o][V,v]))|((([1-9])|([1-2][0-9])|([3][0-1]))\\-([J,j][A,a][N,n]|[M,m][A,a][R,r]|[M,m][A,a][Y,y]|[J,j][U,u][L,l]|[A,a][U,u][G,g]|[O,o][C,c][T,t]|[D,d][E,e][C,c])))\\-[0-9]{4}$)|(^([1-9])|([0][1-9])|([1][0-9])|([2][0-8]))\\-([F,f][E,e][B,b])\\-[0-9]{2}(([0248][1235679])|([13579][01345789]))$)|(^(([1-9])|([0][1-9])|([1][0-9])|([2][0-9]))\\-([F,f][E,e][B,b])\\-[0-9]{2}(([02468][048])|([13579][26]))$)";
        // if ((DateValExp).test($(sender).val())) {

        var str1 = document.getElementById('<%=txtDob.ClientID%>').value;
        var str2 = new Date().format('dd-MM-yyyy');
        var t_sdate = str1;
        var sptdate = String(t_sdate).split("-");
        var myDay = sptdate[0];
        var myMonth = sptdate[1];
        var myYear = sptdate[2];
        var MON = myMonth;

        if (myDay > 31) {
            $(".stoast").toastText("warning", "Please Enter Valid Nos. Of days", 5, 3);
            /*alert('Please Enter Valid Nos. Of days'); */
            document.getElementById('<%=txtDob.ClientID%>').value = ''; return false;
        }
        if (MON == undefined) {
            $(".stoast").toastText("warning", "Please Enter Correct Date Format", 5, 3);
            /*alert('Please Enter Correct Date Format');*/
            document.getElementById('<%=txtDob.ClientID%>').value = '';
            document.getElementById('<%= txtMonths.ClientID%>').value = '';
            document.getElementById('<%= txtYear.ClientID%>').value = '';
            document.getElementById('<%= txtDay.ClientID%>').value = '';
            return false;
        }
        else {
            var uppercase = MON.toUpperCase();
        }

        var monthvalied = 0;
        MON = uppercase;
        switch (MON) {
            case "JAN": MON = "01"; monthvalied = 1; break;
            case "FEB": MON = "02"; monthvalied = 1; break;
            case "MAR": MON = "03"; monthvalied = 1; break;
            case "APR": MON = "04"; monthvalied = 1; break;
            case "MAY": MON = "05"; monthvalied = 1; break;
            case "JUN": MON = "06"; monthvalied = 1; break;
            case "JUL": MON = "07"; monthvalied = 1; break;
            case "AUG": MON = "08"; monthvalied = 1; break;
            case "SEP": MON = "09"; monthvalied = 1; break;
            case "OCT": MON = "10"; monthvalied = 1; break;
            case "NOV": MON = "11"; monthvalied = 1; break;
            case "DEC": MON = "12"; monthvalied = 1; break;

            case "01": MON = "01"; monthvalied = 1; break;
            case "02": MON = "02"; monthvalied = 1; break;
            case "03": MON = "03"; monthvalied = 1; break;
            case "04": MON = "04"; monthvalied = 1; break;
            case "05": MON = "05"; monthvalied = 1; break;
            case "06": MON = "06"; monthvalied = 1; break;
            case "07": MON = "07"; monthvalied = 1; break;
            case "08": MON = "08"; monthvalied = 1; break;
            case "09": MON = "09"; monthvalied = 1; break;
            case "10": MON = "10"; monthvalied = 1; break;
            case "11": MON = "11"; monthvalied = 1; break;
            case "12": MON = "12"; monthvalied = 1; break;

            case "1": MON = "01"; monthvalied = 1; break;
            case "2": MON = "02"; monthvalied = 1; break;
            case "3": MON = "03"; monthvalied = 1; break;
            case "4": MON = "04"; monthvalied = 1; break;
            case "5": MON = "05"; monthvalied = 1; break;
            case "6": MON = "06"; monthvalied = 1; break;
            case "7": MON = "07"; monthvalied = 1; break;
            case "8": MON = "08"; monthvalied = 1; break;
            case "9": MON = "09"; monthvalied = 1; break;


        }

        if (monthvalied == 0) {
            $(".stoast").toastText("warning", "Please Enter Valid Month", 5, 3);
            /*alert('Please Enter Valid Month');*/
            document.getElementById('<%= txtDob.ClientID%>').value = '';
            document.getElementById('<%= txtMonths.ClientID%>').value = '';
            document.getElementById('<%= txtYear.ClientID%>').value = '';
            document.getElementById('<%= txtDay.ClientID%>').value = '';
            return false;
        }
        var combineDatestr = myDay + "-" + MON + "-" + myYear;
        var dt1 = parseInt(combineDatestr.substring(0, 2), 10);
        /*var mon1 = parseInt(combineDatestr.substring(3, 5), 10);*/
        var mon1 = MON;
        var yr1 = parseInt(combineDatestr.substring(6, 10), 10);
        //var dt2 = parseInt(str2.substring(0, 2), 10);
        var dt2 = str2.substring(0, 2);
        //            var mon2 = parseInt(str2.substring(3, 5), 10);
        var mon2 = str2.substring(3, 5);
        var yr2 = parseInt(str2.substring(6, 10), 10);
        var yerMonDt = yr1 + " " + mon1 + " " + dt1;
        var curYerMonDt = yr2 + " " + mon2 + " " + dt2;
        var date1 = new Date(yerMonDt);
        var date2 = new Date(curYerMonDt);

        if (date1 > date2) {
            $(".stoast").toastText("warning", "Please select proper DOB!", 5, 3);
            /* alert("You cannot select a day after today!");*/
            document.getElementById('<%=txtDob.ClientID%>').value = '';
            document.getElementById('<%=txtDob.ClientID%>').focus();
            return false;
        }
        else {
            var _sele_date = combineDatestr;
            var ageby = _sele_date.replace(/[-:,\.]/g, "-");
            var ageby = _sele_date.replace(/[^0-9A-Za-z\-]/gi, "-");
            var date = ageby.split('-');
            var _tdate = date[0];
            var _tmonth = date[1];
            var _tyear = date[2];
            var dayOfBirth = _tdate;
            var monthOfBirth = _tmonth;
            var yearOfBirth = _tyear;
            var today = new Date().format('dd-MM-yyyy');
            var dt = today.split('-');
            var dayOfToday = dt[0];
            var monthOfToday = dt[1];
            var yearOfToday = dt[2];
            var yearDiff = 0;
            var monthDiff = 0;
            var daysDiff = 0;
            calcYearDiff(yearOfToday, monthOfToday, dayOfToday, yearOfBirth, monthOfBirth, dayOfBirth, yearDiff, monthDiff, daysDiff);
        }
        var dob = _sele_date;
        var rechangemonth;
        rechangemonth = dob.split('-')
        var myDay = rechangemonth[0];
        var myMonth = rechangemonth[1];
        var myYear = rechangemonth[2];
        var MON = myMonth;
        /*switch (MON) {
        case "01":
        MON = "Jan";
        break;
        case "02":
        MON = "Feb";
        break;
        case "03":
        MON = "Mar";
        break;
        case "04":
        MON = "Apr";
        break;
        case "05":
        MON = "May";
        break;
        case "06":
        MON = "Jun";
        break;
        case "07":
        MON = "Jul";
        break;
        case "08":
        MON = "Aug";
        break;
        case "09":
        MON = "Sep";
        break;
        case "10":
        MON = "Oct";
        break;
        case "11":
        MON = "Nov";
        break;
        case "12":
        MON = "Dec";
        break;
        }*/

        var combineDatestr = myDay + "-" + MON + "-" + myYear;
        /* if (combineDatestr.length == 10)
        combineDatestr = "0" + combineDatestr;*/
        console.log('combineDatestr:', combineDatestr);
        document.getElementById('<%= txtDob.ClientID%>').value = combineDatestr;
        console.log('combineDatestr:', combineDatestr);
        console.log('assign2');
        if (document.getElementById('<%= txtYear.ClientID%>').value > 120) {
            $(".stoast").toastText("warning", "Please enter valid no. of years", 5, 3);
            document.getElementById('<%=txtDob.ClientID%>').value = "__-__-____";
            document.getElementById('<%= txtMonths.ClientID%>').value = '';
            document.getElementById('<%= txtYear.ClientID%>').value = '';
            document.getElementById('<%= txtDay.ClientID%>').value = '';
            return false;
        }
        /* }
        else {
        document.getElementById('<%=txtDob.ClientID%>').value = '__-__-____';
        document.getElementById('<%= txtMonths.ClientID%>').value = '';
        document.getElementById('<%= txtYear.ClientID%>').value = '';
        document.getElementById('<%= txtDay.ClientID%>').value = '';
        $(".stoast").toastText("warning", "Please Enter Valid Date Of Birth.Enter Like (Ex:01-10-2999", 5, 3);
            
        } */
        return false;
    }


    function process(yearOfToday, monthOfToday, dayOfToday, yearOfBirth, monthOfBirth, dayOfBirth, yearDiff, monthDiff, daysDiff) {

        var ageString_d = 0;
        var ageString_m = 0;
        var ageString_y = 0;
        //if ((monthOfBirth > monthOfToday) && (dayOfToday < dayOfBirth))
        //monthDiff -= 1;

        if (yearDiff == 0)
            ageString_y = 0;
        else if (yearDiff == 1)
            ageString_y = yearDiff;
        else
            ageString_y = yearDiff;

        if ((!((monthDiff == 0) && (daysDiff == 0))) && (yearDiff != 0))
            ageString_d = ageString_d;

        if (monthDiff == 0)
            ageString_m = 0;
        else if (monthDiff == 1)
            ageString_m = monthDiff;
        else
            ageString_m = ageString_m + monthDiff;

        if (daysDiff == 0) {
            ageString_d = ageString_d;
        }
        else if (daysDiff == 1) {
            if (!(yearDiff == 0) && (monthDiff == 0))
                ageString_d = ageString_d + 1;
            else
                ageString_d = daysDiff;
        }
        else {
            if (!(yearDiff == 0) && (monthDiff == 0)) {
                ageString_d = daysDiff;
            }
            else {
                ageString_d = ageString_d + daysDiff;
            }
        }
        document.getElementById('<%= txtMonths.ClientID%>').value = ageString_m;
        document.getElementById('<%= txtYear.ClientID%>').value = ageString_y;
        document.getElementById('<%= txtDay.ClientID%>').value = ageString_d;
        var actualage = ageString_y + 'years' + ageString_m + 'months' + ageString_d + 'day';
        document.getElementById('<%= hdnAge.ClientID%>').value = actualage;

        document.getElementById('<%= hdnYear.ClientID%>').value = ageString_y;
        document.getElementById('<%= hdnMonth.ClientID%>').value = ageString_m;
        document.getElementById('<%= hdnDay.ClientID%>').value = ageString_d;
        if (ageString_y != "0")
            document.getElementById('<%= hdnUOM.ClientID%>').value = 83;
        if (ageString_m != "0")
            document.getElementById('<%= hdnUOM.ClientID%>').value = 84;
        if (ageString_d != "0")
            document.getElementById('<%= hdnUOM.ClientID%>').value = 85;
        if (ageString_y >= 65) {
            CheckIsSeniorCitizen('Y');
        }
        else {
            CheckIsSeniorCitizen('N');
            // RetirementDate();
            CheckRetirementDate()
        }
        return false;
    }
    function CheckRetirementDate() {
        var form_name = document.getElementById('' + ctrlcom + '_newAgeUc_hdnDocument').value;
        var DateControl = document.getElementById('' + ctrlcom + '_newAgeUc_txtDob').value;
        if (form_name == "") {
            if (DateControl != "__-___-____" && DateControl != "" && DateControl != undefined && DateControl != null) {
                RetirementDate();
            }
        }
        return false;
    }
    function CalAge(inputsrc) {
        if (inputsrc != undefined) {
            if (document.getElementById('' + ctrlcom + '_newAgeUc_hdnageSource').value == 'A') {
                //            document.getElementById('<%= txtMonths.ClientID%>').value = '0';
                //            document.getElementById('<%= txtDay.ClientID%>').value = '0';
            }
            fn_CalAge(document.getElementById('<%= txtYear.ClientID%>'), document.getElementById('<%= txtMonths.ClientID%>'), document.getElementById('<%= txtDay.ClientID%>'), document.getElementById('<%= txtDob.ClientID%>'), document.getElementById('<%= hdnYear.ClientID%>'), document.getElementById('<%= hdnMonth.ClientID%>'), document.getElementById('<%= hdnDay.ClientID%>'), document.getElementById('<%= hdnUOM.ClientID%>'), document.getElementById('<%= hdnAge.ClientID%>'), inputsrc);
            CalHrs();
            var a = document.getElementById('' + ctrlcom + '_newAgeUc_txtDob');
            OnNullValue(a);
            var form_name = document.getElementById('' + ctrlcom + '_newAgeUc_hdnDocument').value;
            if (form_name == "REG" || form_name == "OPQUICK" || form_name == "PRE-REG" || form_name == "CHANGE-REG") {
                var title = document.getElementById('<%= hdnTitle.ClientID%>').value;
                var gender = document.getElementById('<%= hdnGender.ClientID%>').value;
                if (form_name == "REG" || form_name == "OPQUICK" || form_name == "CHANGE-REG") {
                    title = document.getElementById('' + ctrlcom + '_ddlTitle').value;
                    gender = document.getElementById('' + ctrlcom + '_ddlGender').value;
                }
                //Naresh
                if (gender == '1') /* male */
                {
                    var age = document.getElementById('<%= txtYear.ClientID%>').value;
                    if (age >= 65) {
                        CheckIsSeniorCitizen('Y');
                    }
                    else {
                        CheckIsSeniorCitizen('N');
                    }
                }
                else if (gender == '2') { /* female */
                    var age = document.getElementById('<%= txtYear.ClientID%>').value;
                    if (age >= 65) {
                        CheckIsSeniorCitizen('Y');
                    }
                    else {
                        CheckIsSeniorCitizen('N');
                    }
                }
                else { /* all or select gender */
                    var age = document.getElementById('<%= txtYear.ClientID%>').value;
                    if (age >= 65) {
                        CheckIsSeniorCitizen('Y');
                    }
                    else {
                        CheckIsSeniorCitizen('N');
                    }
                }
            }
            if (form_name == "OPQUICK")
            { RemoveAgeSrv(); }

            if (form_name == "OPQUICK") {
                var age = document.getElementById('<%= txtYear.ClientID%>').value;
                if (age > 0) { } else { age = 0; }
                $('#'+ ctrlcom + '_UCServices_hdnPat_Age').val(age);
            }
        }
    }
    function ValidateDOB(oField, index) {
        var myValue;
        if (index == 1) { myValue = document.getElementById('<%= txtDob.ClientID%>').value; }
        else if (index == 2) { myValue = document.getElementById('<%= txtDob.ClientID%>').value; }
        else if (index == 3) { myValue = document.getElementById('<%= txtDob.ClientID%>').value; }
        for (i = 0; i < myValue.length; i++) {
            var code = myValue.charCodeAt(i);
            if (!(code >= 48 && code <= 57)) {
                if (index == 1) {
                    document.getElementById('<%= txtYear.ClientID%>').value = 0; document.getElementById('<%= txtYear.ClientID%>').focus();
                }
                else if (index == 2) {
                    document.getElementById('<%= txtMonths.ClientID%>').value = 0; document.getElementById('<%= txtMonths.ClientID%>').focus();
                }
                else if (index == 3) {
                    document.getElementById('<%= txtDay.ClientID%>').value = 0; document.getElementById('<%= txtDay.ClientID%>').focus();
                }
                document.getElementById('<%= txtDob.ClientID%>').value = '';
                break;
            }
        }
    }
   
</script>
<script type="text/javascript" language="javascript">
    function KeyDownHandler(event) {

        console.log('keydown:', event);
        if (navigator.appName != "Microsoft Internet Explorer") {

            if (event.keyCode == 8 || event.keyCode == 46) {
                var txtElement = $get(event.target.id);
                var txtElmntText = GetTextElementValue(event.target.id);
                var txtElementCursorPos = doGetCursorPosition(txtElement);
                var maskExtender = $find('<%= MaskedEdit1.ClientID%>');
                var start = txtElement.selectionStart;
                var end = txtElement.selectionEnd;
                var selectedSymbols = end - start;
                if (event.keyCode == 8) {
                    if (selectedSymbols > 0) {
                        var str1 = txtElmntText.substr(0, start);
                        var str2 = txtElmntText.substr(end);
                        var str = str1 + str2;
                        if (str.length < txtElmntText.length)
                            str = appendStrWithChar(str, txtElmntText, "_");
                        setTextElementValue(event.target.id, str);
                        maskExtender._LogicTextMask = DeleteCursorChars(str, "_");
                        setCursorPosition(txtElement, start);
                    }
                    else {
                        if ((txtElementCursorPos - 1) >= 0) {
                            var symbol_to_Delete = txtElmntText[txtElementCursorPos - 1];
                            if (symbol_to_Delete == "-") {
                                setCursorPosition(txtElement, txtElementCursorPos - 1);
                            }
                            else {
                                var str1 = txtElmntText.substr(0, txtElementCursorPos - 1);
                                var str2 = txtElmntText.substr(txtElementCursorPos);
                                var str = str1 + str2;
                                if (str.length < txtElmntText.length)
                                    str = appendStrWithChar(str, txtElmntText, "_");
                                setTextElementValue(event.target.id, str);
                                maskExtender._LogicTextMask = DeleteCursorChars(str, "_");
                                setCursorPosition(txtElement, txtElementCursorPos - 1);
                            }
                        }
                    }
                }
                else if (event.keyCode == 46) {

                    if (txtElementCursorPos >= 0 && txtElementCursorPos < txtElmntText.length && ((selectedSymbols <= 1 && txtElmntText[txtElementCursorPos] != "_") || selectedSymbols > 1)) {
                        if (selectedSymbols > 1) {
                            var str1 = txtElmntText.substr(0, start);
                            var str2 = txtElmntText.substr(end);
                            var str = str1 + str2;
                            if (str.length < txtElmntText.length)
                                str = appendStrWithChar(str, txtElmntText, "_");
                            setTextElementValue(event.target.id, str);
                            maskExtender._LogicTextMask = DeleteCursorChars(str, "_");
                            setCursorPosition(txtElement, start);
                        }
                        else {
                            var symbol_to_Delete = txtElmntText[txtElementCursorPos];
                            if (symbol_to_Delete != "-") {
                                var str1 = txtElmntText.substr(0, txtElementCursorPos);
                                var str2 = txtElmntText.substr(txtElementCursorPos + 1);
                                var str = str1 + str2;
                                if (str.length < txtElmntText.length)
                                    str = appendStrWithChar(str, txtElmntText, "_");
                                setTextElementValue(event.target.id, str);
                                maskExtender._LogicTextMask = DeleteCursorChars(str, "_");
                                setCursorPosition(txtElement, txtElementCursorPos);
                            }
                            else {
                                setCursorPosition(txtElement, txtElementCursorPos + 1);
                            }
                        }
                    }
                }
            }
            else if (event.keyCode == 35 || event.keyCode == 36) {

                var txtElement = $get(event.target.id);
                var txtElmntText = GetTextElementValue(event.target.id);
                if (event.keyCode == 36) { setCursorPosition(txtElement, 0); }
                if (event.keyCode == 35) { setCursorPosition(txtElement, txtElmntText.length); }
            }
        }
        else {
            console.log('Error');
        }
        document.getElementById('<%= hdnageSource.ClientID %>').value = 'D';
        //        if (event.keyCode == 9) {
        //            
        //            var entered_dob = document.getElementById('' + ctrlcom + '_newAgeUc_txtDob').value;
        //            var dobday = entered_dob.split('-')[0];
        //            if (dobday.length == 1)
        //                dobday = '0' + dobday;
        //            var dobMon = entered_dob.split('-')[1];
        //            if (dobMon.length == 1)
        //                dobMon = '0' + dobMon;
        //            var dobyear = entered_dob.split('-')[2];
        //            document.getElementById('' + ctrlcom + '_newAgeUc_txtDob').value = dobday + "-" + dobMon + "-" + dobyear;
        //            console.log(document.getElementById('' + ctrlcom + '_newAgeUc_txtDob').value);
        //            return false;
        //        }
        console.log(document.getElementById('' + ctrlcom + '_newAgeUc_txtDob').value);
        return false;
    }
    function setCursorPosition(ctrl, pos) {

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
    function DeleteCursorChars(str, char) {
        for (i = 0; i < str.length; i++) {
            if (str[i] == char) {
                str = str.substr(0, i);
                return str;
            }
        }
    }
    function setTextElementValue(elementId, txt) {
        var text = $get(elementId);
        if (text.AjaxControlToolkitTextBoxWrapper) {
            text.AjaxControlToolkitTextBoxWrapper.set_Value(txt);
        }
        else
        { text.value = txt; }
    }
    function appendStrWithChar(str, tempstr, appchar) {

        var differnce = tempstr.length - str.length;
        if (differnce > 0) {
            var s = str.split('-');
            if ((str.split('-')[0]).length <= 2) { var pos1 = (s[0].split(''))[0]; var pos2 = (s[0].split(''))[1]; if (pos1 == '' || pos1 == undefined) { pos1 = appchar; } else if (pos2 == '' || pos2 == undefined) { pos2 = appchar; } var day = pos1 + pos2; }
            if ((str.split('-')[1]).length <= 2) { var pos1 = (s[1].split(''))[0]; var pos2 = (s[1].split(''))[1]; if (pos1 == '' || pos1 == undefined) { pos1 = appchar; } else if (pos2 == '' || pos2 == undefined) { pos2 = appchar; } var mon = pos1 + pos2; }
            if ((str.split('-')[2]).length <= 4) { var pos1 = (s[2].split(''))[0]; var pos2 = (s[2].split(''))[1]; var pos3 = (s[2].split(''))[2]; var pos4 = (s[2].split(''))[3]; if (pos1 == '' || pos1 == undefined) { pos1 = appchar; } else if (pos2 == '' || pos2 == undefined) { pos2 = appchar; } else if (pos3 == '' || pos3 == undefined) { pos3 = appchar; } else if (pos4 == '' || pos4 == undefined) { pos4 = appchar; } var year = pos1 + pos2 + pos3 + pos4; }
            str = day + "-" + mon + "-" + year;
        }
        return str;
    }

    function doGetCursorPosition(ctrl) {
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
    function GetTextElementValue(elementId) {
        var textBox = $get(elementId), text;
        if (textBox.AjaxControlToolkitTextBoxWrapper) {
            text = textBox.AjaxControlToolkitTextBoxWrapper.get_Value();
        }
        else {
            text = textBox.value;
        }
        return text;
    }
    function dobvalidation(ev) {
        document.getElementById('<%= hdnageSource.ClientID %>').value = 'D';
        return false;
    }
    function chkageNumeric(evt) {
        evt = (evt) ? evt : window.event
        var charCode = (evt.which) ? evt.which : evt.keyCode
        if (charCode > 31 && (charCode < 48 || charCode > 57)) {
            status = "This field only accepts numbers!"
            return false
        }
        status = "";
        document.getElementById('<%= hdnageSource.ClientID %>').value = 'A';
        return true;
    }
    $(document).ready(function () {
        if (document.getElementById('<%= hdndobmontheditable.ClientID%>').value == 'True') {
            document.getElementById('<%= txtMonths.ClientID%>').disabled = false;
            document.getElementById('<%= txtDay.ClientID%>').disabled = false;
        }
        else {
            document.getElementById('<%= txtMonths.ClientID%>').disabled = true;
            document.getElementById('<%= txtDay.ClientID%>').disabled = true;
        }
        $('[id*=txtDob]').on('keyup', function (e) { return OnNullValue(this); });
        $('[id*=txtDob]').on('keypress', function (e) { return dobvalidation(this); });
        $('[id*=txtDob]').on('blur', function (e) { ValidatetextChangedDateOfBirth(this); CheckCombinationValidations(); });
        $('[id*=txtYear]').on('blur', function (e) { CheckCombinationValidations(); });
        $('[id*=txtDob]').on('keydown', function (e) { KeyDownHandler(e); });
    });


    function CheckIsSenioerDOB() {
        var doc_name = document.getElementById('' + ctrlcom + '_newAgeUc_hdnDocument').value;
        if (doc_name == "REG" || doc_name == "OPQUICK" || doc_name == "PRE-REG") {
            var title = document.getElementById('<%= hdnTitle.ClientID%>').value;
            var gender = document.getElementById('<%= hdnGender.ClientID%>').value;
            if ((title == 1 || title == 9) || gender == 1) {
                var age = document.getElementById('<%= txtYear.ClientID%>').value;
                if (age >= 65) {
                    CheckIsSeniorCitizen('Y');
                }
                else {
                    CheckIsSeniorCitizen('N');
                }
            }
            else if ((title == 3 || title == 9 || title == 14) || gender == 2) {
                var age = document.getElementById('<%= txtYear.ClientID%>').value;
                if (age >= 65) {
                    CheckIsSeniorCitizen('Y');
                }
                else {
                    CheckIsSeniorCitizen('N');
                }
            }
        }
        if (doc_name == "OPQUICK")
        { RemoveAgeSrv(); }
        document.getElementById('' + ctrlcom + '_newAgeUc_txtYear').focus();
        CalAge();

    }
    function RemoveAgeSrv() {
        var form_name = document.getElementById('' + ctrlcom + '_newAgeUc_hdnDocument').value;
        if (form_name == "OPQUICK") {



            var con_srv_id = 0;
            var form_name = $('#' + ctrlcom + '_UCServices_hdnSrvFormName').val();
          
                if (document.getElementById('' + ctrlcom + '_UCServices_hdnallowconsservice').value.toUpperCase() == "TRUE") {
                    con_srv_id = document.getElementById('' + ctrlcom + '_UCServices_hdnconssrvID').value;
                }

                if (con_srv_id == null || con_srv_id == undefined || con_srv_id == '' || con_srv_id == "undefined") { con_srv_id = 0; }
            var Length = $('table[id*=gvServices] tr:has(td)').length; var pat_age = document.getElementById('' + ctrlcom + '_newAgeUc_txtYear').value;
            $("table[id*=gvServices] tr:has(td)").each(function (e) {
                var srv_name = $(this).closest('tr').find('input[type=text][id*=txtServiceName]').val();
                var _srvId = $(this).closest('tr').find("input[type=hidden][id*=hdnServiceID]").val();
                var _doctor_id = $(this).closest('tr').find("input[type=hidden][id*=hdnDoctorID]").val();
                var _srv_class_id = $(this).closest('tr').find('input[type=hidden][id*=hdnServiceClass]').val();
                var FDays = $(this).closest('tr').find('input[type=hidden][id*=hdnSrvFDays]').val();
                var TDays = $(this).closest('tr').find('input[type=hidden][id*=hdnSrvTDays]').val();
                if (srv_name != "REGISTRATION") {
                    if (parseInt(FDays) >= 0 && parseInt(TDays) > 0) {
                        if ((parseInt(FDays) <= parseInt(pat_age)) && (parseInt(pat_age) <= parseInt(TDays))) {

                        }
                        else {
                          


                            if (con_srv_id != _srvId) {
                                RemoveGridViewService(this, 'I');
                            }

                            $(".stoast").toastText("warning", "This '" + srv_name + "' service is applicable for patient of age " + parseInt(FDays) + ' To ' + parseInt(TDays), 5, 3);
                        }
                    }


                }

            });

        }
    }
</script>
<div id="divdob" class="doblbl">
    DOB
</div>
<div id="Dobtxt" class="dobtxt">
    <div class="btntxt btntxtW">
        <asp:TextBox ID="txtDob" onblur="return OnNullValue(this);" placeholder="dd-MM-yyyy"
            runat="server" MaxLength="10" ToolTip="DD-MM-YYYY"> </asp:TextBox>
        <div class="txtbtn">
            <asp:Button ID="imgCal" onblur="CheckIsSenioerDOB();" runat="server" CssClass="tb_Btn calendar"
                Text="&times;" />
        </div>
        <cc1:CalendarExtender ID="CalendarExtender1" TargetControlID="txtDob" runat="server"
            CssClass="MyCalendar" PopupButtonID="imgCal" OnClientDateSelectionChanged="OnGetAge_Dob"
            PopupPosition="Right">
        </cc1:CalendarExtender>
        <asp:TextBox ID="txt1" runat="server" Style="display: none;"></asp:TextBox>
        <cc1:MaskedEditExtender ID="MaskedEdit1" runat="server" ClearMaskOnLostFocus="false"
            EnableViewState="false" CultureName="en-GB" MessageValidatorTip="true" Mask="99-99-9999"
            TargetControlID="txtDob" UserDateFormat="DayMonthYear">
        </cc1:MaskedEditExtender>
    </div>
</div>
<div id="YYMMDD" class="uc-yrs">
    <asp:TextBox ID="txtYear" onkeypress="return chkageNumeric(event);" MaxLength="3"  onpaste="return false"
        CssClass="txt-yy" runat="server" onkeyup="return CalAge('Y')" placeholder="Years"
        ToolTip="Enter the age in years" autocomplete="off"></asp:TextBox>
    <asp:TextBox ID="txtMonths" onkeypress="return chkageNumeric(event);" placeholder="Months"
        Enabled="false" MaxLength="2" CssClass="txt-mm" runat="server" onkeyup="return CalAge('M')"
        ToolTip="Age in months" autocomplete="off"></asp:TextBox>
    <asp:TextBox ID="txtDay" onkeypress="return chkageNumeric(event);" Enabled="false"
        MaxLength="2" placeholder="Days" CssClass="txt-dd" runat="server" onkeyup="return CalAge('D')"
        ToolTip="Age in days" autocomplete="off"></asp:TextBox>
</div>
<div id="pediatric" class="uc-hh-mm" style="display: none; width: 100px;">
    <asp:TextBox ID="txtHH" onkeypress="return chkageNumeric(event);" MaxLength="2" onkeyup="return CalHrs()"
        runat="server" CssClass="txt-yy" placeholder="Hours" Style="text-align: right"
        ToolTip="Enter the Hours" autocomplete="off"></asp:TextBox>
    <asp:TextBox ID="txtMM" onkeypress="return chkageNumeric(event);" placeholder="MInutes"
        CssClass="txt-mm" MaxLength="2" runat="server" Style="text-align: right" onkeyup="return CalHrs()"
        ToolTip="Enter the Minutes" autocomplete="off"></asp:TextBox>
</div>
<div style="display: none;">
    <asp:HiddenField ID="hdnAge" runat="server" />
    <asp:HiddenField ID="hdnYear" runat="server" />
    <asp:HiddenField ID="hdnMonth" runat="server" />
    <asp:HiddenField ID="hdnDay" runat="server" />
    <asp:HiddenField ID="hdnUOM" runat="server" />
    <asp:HiddenField ID="hdnageSource" runat="server" />
    <asp:HiddenField ID="hdnDocument" runat="server" />
    <asp:HiddenField ID="hdnTitle" runat="server" />
    <asp:HiddenField ID="hdnGender" runat="server" />
    <asp:HiddenField ID="hdndobmontheditable" runat="server" />
</div>
