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
        document.getElementById('ctl00_ContentPlaceHolder1_newAgeUc_txtDay').value = 1;
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
    var form_name = document.getElementById('ctl00_ContentPlaceHolder1_newAgeUc_hdnDocument').value;
    if (form_name == "REG" || form_name == "OPQUICK") {
        var title = document.getElementById('ctl00_ContentPlaceHolder1_newAgeUc_hdnTitle').value;
        var gender = document.getElementById('ctl00_ContentPlaceHolder1_newAgeUc_hdnGender').value;
        if ((title == 1 || title == 9) && gender == 1) {
            var age = document.getElementById('ctl00_ContentPlaceHolder1_newAgeUc_txtYear').value;
            if (age >= 65) {
                CheckIsSeniorCitizen('Y');
            }
            else {
                CheckIsSeniorCitizen('N');
            }
        }
        else if ((title == 3 || title == 9 || title == 14) && gender == 2) {
            var age = document.getElementById('ctl00_ContentPlaceHolder1_newAgeUc_txtYear').value;
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
    document.getElementById('ctl00_ContentPlaceHolder1_newAgeUc_hdnageSource').value = 'D';
    document.getElementById('ctl00_ContentPlaceHolder1_newAgeUc_txtDob').value = dob;
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
                            daysDiff = parseInt(totalNumOfDaysOfMonths[monthOfToday - 1]) + parseInt(dayOfToday.replace(/^[0]+/g, "")) - parseInt(dayOfBirth);
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
                            daysDiff = parseInt(totalNumOfDaysOfMonths[monthOfToday - 1]) + parseInt(dayOfToday.replace(/^[0]+/g, "") - 1) - parseInt(dayOfBirth);
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
    onTitleValidation();
    return false;
}
/*This Javascript code is to get number of days in perticuler month of year*/
function caldays(m, y) {
    debugger;
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

function fn_CalAge(ctrlY, ctrlM, ctrlD, ctrlDOB, ctrlHY, ctrlHM, ctrlHD, ctrlHUOM, ctrlHA) {

    var month = ctrlM.value; var years = ctrlY.value; var days = ctrlD.value; var dob;
    if (ctrlD.value == "") { dob = ctrlD.value; } else { dob = ""; }

    if (years > 120) {
        $(".stoast").toastText("warning", "Please Enter Valid No. of  Years", 5, 3);
        /*alert('Please Enter Valid Nos.of Years');*/
        ctrlY.value = 0;
        fn_CalAge(ctrlY, ctrlM, ctrlD, ctrlDOB, ctrlHY, ctrlHM, ctrlHD, ctrlHUOM, ctrlHA);
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
    var pastdate = new Date(years, month - 1, days); var ageYear = today_Year - years;
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
        
        var noofDays = caldays(ageMonth, ageYear); var _eDay = (noofDays + parseInt(ageDay)); ageDay = _eDay-1;
        
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
    if (document.getElementById('ctl00_ContentPlaceHolder1_newAgeUc_hdnageSource').value != 'D') {
        if (ageMonth != "0") { ageDay = "01"; }
    }
    if (ageMonth == 0) {ageMonth = 12;}
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
    if (document.getElementById('ctl00_ContentPlaceHolder1_newAgeUc_hdnageSource').value != 'D') {
        ValidatetextChangedDateOfBirth(document.getElementById('ctl00_ContentPlaceHolder1_newAgeUc_txtDob'));
    }
    onExtendAge();
    if (AgeCount > 0) {
        document.getElementById('ctl00_ContentPlaceHolder1_newAgeUc_txtDob').value = "__-__-____";
        years = 0;
        month = 0;
        days = 0;
    }
    onTitleValidation();

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
        document.getElementById('ctl00_ContentPlaceHolder1_UCServices_hdnPat_Age').value = _age;
    }
    if (localStorage.getItem("ED") == "OPDBill.aspx") {
        var _age = $('[id*=txtYear]').val();
        if (_age == '' || _age == undefined || _age == null) { _age = 0; }
        document.getElementById('ctl00_ContentPlaceHolder1_UCServices_hdnPat_Age').value = _age;
    }
}

function onTitleValidation() {
    var ddlvalue = document.getElementById('ctl00_ContentPlaceHolder1_ddlTitle').value;
    var ddlTitle = document.getElementById('ctl00_ContentPlaceHolder1_ddlTitle');
    var ddlTitleIndex = document.getElementById('ctl00_ContentPlaceHolder1_ddlTitle').selectedIndex;
    var val = ddlTitleIndex; AgeCount = 0;
    var checked = false;
    var doc_name = document.getElementById('ctl00_ContentPlaceHolder1_newAgeUc_hdnDocument').value;
    if (doc_name == "REG") {
        checked = document.getElementById('ctl00_ContentPlaceHolder1_ChkNBorn').checked;
    }
    else if (doc_name == 'OPQUICK')
    { checked = false; }
    if ((ddlvalue == '7' || ddlvalue == '8' || ddlvalue == '5') && checked == true) {
        var _years = document.getElementById('ctl00_ContentPlaceHolder1_newAgeUc_txtYear').value;
        var _months = document.getElementById('ctl00_ContentPlaceHolder1_newAgeUc_txtMonths').value;
        var _days = document.getElementById('ctl00_ContentPlaceHolder1_newAgeUc_txtDay').value;
        var msg = '';
        if (_years < 5) {
        
        }
        else {
            msg = "Please Enter Proper age of " + ddlTitle[val].innerHTML + " Patient!!!";
            $(".stoast").toastText("warning", msg, 5, 3);
            /* alert(msg);*/
            document.getElementById('ctl00_ContentPlaceHolder1_newAgeUc_txtDob').value = '__-___-____';
            document.getElementById('ctl00_ContentPlaceHolder1_newAgeUc_txtYear').value = '0';
            document.getElementById('ctl00_ContentPlaceHolder1_newAgeUc_txtMonths').value = '0';
            document.getElementById('ctl00_ContentPlaceHolder1_newAgeUc_txtDay').value = '0';
            document.getElementById('ctl00_ContentPlaceHolder1_newAgeUc_txtYear').focus();
            AgeCount++;
            return false;
        }
    }
    if (ddlvalue == "4" || ddlvalue == "5" || ddlvalue == "6" || ddlvalue == "7" || ddlvalue == "8") {
    
        var dob = document.getElementById('ctl00_ContentPlaceHolder1_newAgeUc_txtDob').value;
        var years = document.getElementById('ctl00_ContentPlaceHolder1_newAgeUc_txtYear').value;
        var months = document.getElementById('ctl00_ContentPlaceHolder1_newAgeUc_txtMonths').value;
        var days = document.getElementById('ctl00_ContentPlaceHolder1_newAgeUc_txtDay').value;
        var currentdate = new Date();
        if (years >= 18) {
            $(".stoast").toastText("warning", "Enter Valid Age As Per The Title", 5, 3);
            /* alert('Enter Valid Age As Per The Title');*/
            document.getElementById('ctl00_ContentPlaceHolder1_newAgeUc_txtDob').value = '__-___-____';
            document.getElementById('ctl00_ContentPlaceHolder1_newAgeUc_txtYear').value = '0';
            document.getElementById('ctl00_ContentPlaceHolder1_newAgeUc_txtMonths').value = '0';
            document.getElementById('ctl00_ContentPlaceHolder1_newAgeUc_txtDay').value = '0';
            AgeCount++;
            return false;
        }
    }
}