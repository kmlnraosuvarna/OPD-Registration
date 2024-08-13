var one_day = 1000 * 60 * 60 * 24
var one_month = 1000 * 60 * 60 * 24 * 30
var one_year = 1000 * 60 * 60 * 24 * 30 * 12
var dat = new Date();
var curday = dat.getDate();
var curmon = dat.getMonth() + 1;
var curyear = dat.getFullYear();
var totalNumOfDaysOfMonths = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
/*Calculate The age by choosing calender Data*/
function OnGetAge(obj) {
if (obj._selectedDate > new Date()) {
alert("You cannot select a day after today!");
obj._selectedDate = new Date();
obj._textbox.set_Value(obj._selectedDate.format(obj._format))
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
}
var dob = obj.get_selectedDate().format("dd-MMM-yyyy"); 
obj.value = dob;
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
}
/*Calculate Date Diff*/
function calcDateDiff(yearOfToday, monthOfToday, dayOfToday, yearOfBirth, monthOfBirth, dayOfBirth, yearDiff, monthDiff, daysDiff) {
if (yearOfToday % 4 == 0){totalNumOfDaysOfMonths[1] = 29;}
if (dayOfToday > dayOfBirth)
daysDiff = dayOfToday - dayOfBirth;
else if (dayOfToday == dayOfBirth)
daysDiff = 0;
else {
daysDiff = parseInt(totalNumOfDaysOfMonths[monthOfToday - 1]) + parseInt(dayOfToday.replace(/^[0]+/g, "")) - parseInt(dayOfBirth);
monthDiff = monthDiff - 1;
}
if (daysDiff == 0){daysDiff = 0;}
process(yearOfToday, monthOfToday, dayOfToday, yearOfBirth, monthOfBirth, dayOfBirth, yearDiff, monthDiff, daysDiff);
}
/*This Javascript code is to get number of days in perticuler month of year*/
function caldays(m, y) {
if (m == 01 || m == 03 || m == 05 || m == 07 || m == 08 || m == 10 || m == 12) {
var dmax = 31;return dmax;
}
else if (m == 04 || m == 06 || m == 09 || m == 11) {
var dmax = 30;return dmax;
}
else if (m == 0) {var dmax = 31;return dmax;
}
else {
if ((y % 400 == 0) || (y % 4 == 0) || (y % 400 == 0 && y % 100 != 0)) {
dmax = 29;return dmax;
}
else {dmax = 28;
}
return dmax;
}
}
/*Get the number validation for years ,months and days*/
function CheckNumberData() {
var charCode = (e.charCode) ? e.charCode : ((e.keyCode) ? e.keyCode : ((e.which) ? e.which : 0));
if (charCode == 9 || charCode == 8){return true;}
if (charCode >= 48 && charCode <= 57) {e.returnValue = true;return true;
}
e.returnValue = false;
return false;
}

function fn_CalAge(ctrlY,ctrlM,ctrlD,ctrlDOB,ctrlHY,ctrlHM,ctrlHD,ctrlHUOM,ctrlHA) { 
var month = ctrlM.value;var years = ctrlY.value;var days = ctrlD.value;var dob;
if (ctrlD.value == ""){dob = ctrlD.value;}else{dob = "";}
if (days > 31) {alert('Please Enter Valid Nos. Of days');ctrlD.value = 0;return false;
}
if (days < 0) {alert('Please Enter Valid Nos. Of days');ctrlD.value = 0;ctrlD.value = '';return false;
}
if (month == 13) {
if (years == '' || years == 'NaN'){years = 0;}
years = parseInt(years) + parseInt(1);month = 0;ctrlM.value = month;ctrlY.value = years;}
if (month > 12) {alert('Please Enter Valid Nos. Of months');ctrlM.value = 0;month = 0;return false;}
if (month < 0) {alert('Please Enter Valid Nos. Of months');ctrlD.value = '';ctrlM.value = 0;month = 0;return false;}
today_date = new Date();today_Year = today_date.getFullYear();today_month = today_date.getMonth();today_Day = today_date.getDate();
var pastdate = new Date(years, month - 1, days);var ageYear = today_Year - years;var ageMonth = today_month - month + 1;
if (ageMonth < 0) {ageMonth = ageMonth + 12;ageYear = ageYear - 1;}
var ageDay = today_Day - days;var noofDays = caldays(ageMonth, ageYear);
if (ageMonth < 0) {var noofYears = Math.round(parseInt(ageMonth) / 12);
if (noofYears == 0) {noofYears = -1;}
ageMonth = today_month - (ageMonth) + 1;
if (ageMonth == 12) {ageYear = ageYear - 1;ageMonth = today_month + 1;
}
else {ageYear = ageYear + noofYears;ageMonth = today_month + 1;
}
}
if (ageDay < 0) {
if (ageMonth > 0)
ageMonth = ageMonth - 1;
else {ageMonth = ageMonth - 1 + 12;ageYear = ageYear - 1;
}
var noofDays = caldays(ageMonth, ageYear);var _eDay = (noofDays + parseInt(ageDay));ageDay = _eDay;
}
if (ageDay == 0) {
if (ageMonth == 0) {ageMonth = ageMonth + 12;ageYear = ageYear - 1;}
if (parseInt(ageMonth - 1) == 1) { ageDay = '31' }
else if (parseInt(ageMonth - 1) == 2) {
if ((parseInt(ageYear % 4) == 0) || (parseInt(ageYear % 400) == 0) || (parseInt(ageYear % 400) == 0 && parseInt(ageYear % 100) != 0)){ ageDay = '29' }else { ageDay = '28' }
}
else if (parseInt(ageMonth - 1) == 3) { ageDay = '31' } else if (parseInt(ageMonth - 1) == 4) { ageDay = '30' } else if (parseInt(ageMonth - 1) == 5) { ageDay = '31' } else if (parseInt(ageMonth - 1) == 6) { ageDay = '30' } else if (parseInt(ageMonth - 1) == 7) { ageDay = '31' } else if (parseInt(ageMonth - 1) == 8) { ageDay = '31' } else if (parseInt(ageMonth - 1) == 9) { ageDay = '30' } else if (parseInt(ageMonth - 1) == 10) { ageDay = '31' } else if (parseInt(ageMonth - 1) == 11) { ageDay = '30' } else { ageDay = '31' }
ageMonth = ageMonth - 1;
}
if (ageMonth == 0) {ageYear = ageYear - 1;}
if (ageMonth == 0) { ageMonth = 12 }else if (ageMonth == 1) { ageMonth = 'Jan' }else if (ageMonth == 2) { ageMonth = 'Feb' }else if (ageMonth == 3) { ageMonth = 'Mar' }else if (ageMonth == 4) { ageMonth = 'Apr' }else if (ageMonth == 5) { ageMonth = 'May' }else if (ageMonth == 6) { ageMonth = 'Jun' }else if (ageMonth == 7) { ageMonth = 'Jul' }else if (ageMonth == 8) { ageMonth = 'Aug' }else if (ageMonth == 9) { ageMonth = 'Sep' }else if (ageMonth == 10) { ageMonth = 'Oct' }else if (ageMonth == 11) { ageMonth = 'Nov' }else if (ageMonth == 12) { ageMonth = 'Dec' }
if (ageYear % 4 == 0 && ageMonth == 'Feb'){
if (ageDay == '29' && ageMonth == 'Feb'){
ageDay == '29';}}
else if (ageDay > 29) {
ageDay == '1'; ageMonth = 'Mar';
}
age = ageDay + '-' + ageMonth + '-' + ageYear;
if(age.length==10){age="0"+age;}
ctrlDOB.value = age;ctrlHY.value = years;ctrlHM.value = month;ctrlHD.value = days;
if (years != "0"){ctrlHUOM.value = 83;}
if (month != "0"){ctrlHUOM.value = 84;}
if (days != "0"){ctrlHUOM.value = 85;}
ctrlHA.value = years + ',' + month + ',' + days;
}