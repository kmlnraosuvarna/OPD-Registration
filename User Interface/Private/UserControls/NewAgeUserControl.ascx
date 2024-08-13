<%@ Control Language="C#" AutoEventWireup="true" CodeFile="NewAgeUserControl.ascx.cs"
    Inherits="Private_UserControls_NewAgeUserControl" %>
<%@ Register Assembly="AjaxControlToolkit" Namespace="AjaxControlToolkit" TagPrefix="cc1" %>
<style type="text/css">
    .ajax__calendar_container
    {
        z-index: 1000;
    }
    .ajax__calendar
    {
        position: relative;
        left: 50px !important;
        top: 50px !important;
        visibility: visible;
        display: block;
    }
    .ajax__calendariframe
    {
        left: 100px !important;
        top: 100px !important;
    }
    .style1
    {
        width: 471px;
    }
</style>
<script type="text/javascript">
    var one_day = 1000 * 60 * 60 * 24
    var one_month = 1000 * 60 * 60 * 24 * 30
    var one_year = 1000 * 60 * 60 * 24 * 30 * 12
    var dat = new Date();
    var curday = dat.getDate();
    var curmon = dat.getMonth() + 1;
    var curyear = dat.getFullYear();
    var totalNumOfDaysOfMonths = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    //Calculate The age by choosing calender Data
    function OnGetAge(obj) {

        if (obj._selectedDate > new Date()) {
            alert("You cannot select a day after today!");
            obj._selectedDate = new Date();
            // set the date back to the today
            obj._textbox.set_Value(obj._selectedDate.format(obj._format))
            return false;
        }
        else {

            var _sele_date = obj.get_selectedDate().format("dd-MM-yyyy");

            var ageby = _sele_date.replace(/[-:,\.]/g, "-");  // change delimiters to /
            var ageby = _sele_date.replace(/[^0-9A-Za-z\-]/gi, "-");
            var date = ageby.split('-');
            var _tdate = date[0];
            var _tmonth = date[1];
            var _tyear = date[2]; // strip all but digits and /
            var dayOfBirth = _tdate; //your literal date of birth
            var monthOfBirth = _tmonth; //your month of birth
            var yearOfBirth = _tyear; //your year of birth :: Use all the 4 digits, not 2 two digits in short form

            //Variables containg values of current date
            var today = new Date().format('dd-MM-yyyy');
            var dt = today.split('-');
            var dayOfToday = dt[0];
            var monthOfToday = dt[1];
            var yearOfToday = dt[2];
            //Variables required to calculate age. 
            var yearDiff = 0;
            var monthDiff = 0;
            var daysDiff = 0;
            calcYearDiff(yearOfToday, monthOfToday, dayOfToday, yearOfBirth, monthOfBirth, dayOfBirth, yearDiff, monthDiff, daysDiff);
        }
        var dob = obj.get_selectedDate().format("dd-MMM-yyyy");
        document.getElementById('<%= txtDob.ClientID%>').value = dob;

    }
    //----------------------------------------------Textchange date of birth--------------------
    function ValidatetextChangedDateOfBirth(obj) {

        if (document.getElementById('<%=txtDob.ClientID%>').value == "__-___-____") {
            document.getElementById('<%= txtMonths.ClientID%>').value = '';
            document.getElementById('<%= txtYear.ClientID%>').value = '';
            document.getElementById('<%= txtDay.ClientID%>').value = '';
            return false;
        }
        var str1 = document.getElementById('<%=txtDob.ClientID%>').value;

        var str2 = new Date().format('dd-MM-yyyy');
        var t_sdate = str1;
        var sptdate = String(t_sdate).split("-");
        var myDay = sptdate[0];
        var myMonth = sptdate[1];
        var myYear = sptdate[2];
        var MON = myMonth;
        if (myDay > 31) {
            alert('Please Enter Valid Nos. Of days');
            document.getElementById('<%=txtDob.ClientID%>').value = '';
            // document.getElementById('<%= txtDob.ClientID%>').value='';
            return false;
        }
        if (MON == undefined) {
            alert('Please Enter Correct Date Format');
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
            case "JAN":
                MON = "01";
                monthvalied = 1;
                break;
            case "FEB":
                MON = "02";
                monthvalied = 1;
                break;
            case "MAR":
                MON = "03";
                monthvalied = 1;
                break;
            case "APR":
                MON = "04";
                monthvalied = 1;
                break;
            case "MAY":
                MON = "05";
                monthvalied = 1;
                break;
            case "JUN":
                MON = "06";
                monthvalied = 1;
                break;
            case "JUL":
                MON = "07";
                monthvalied = 1;
                break;
            case "AUG":
                MON = "08";
                monthvalied = 1;
                break;
            case "SEP":
                MON = "09";
                monthvalied = 1;
                break;
            case "OCT":
                MON = "10";
                monthvalied = 1;
                break;
            case "NOV":
                MON = "11";
                monthvalied = 1;
                break;
            case "DEC":
                MON = "12";
                monthvalied = 1;
                break;
        }

        if (monthvalied == 0) {
            alert('Please Enter Valid Month');
            document.getElementById('<%= txtDob.ClientID%>').value = '';
            document.getElementById('<%= txtMonths.ClientID%>').value = '';
            document.getElementById('<%= txtYear.ClientID%>').value = '';
            document.getElementById('<%= txtDay.ClientID%>').value = '';
            return false;
        }
        var combineDatestr = myDay + "-" + MON + "-" + myYear;
        var dt1 = parseInt(combineDatestr.substring(0, 2), 10);
        var mon1 = parseInt(combineDatestr.substring(3, 5), 10);
        var yr1 = parseInt(combineDatestr.substring(6, 10), 10);
        var dt2 = parseInt(str2.substring(0, 2), 10);
        var mon2 = parseInt(str2.substring(3, 5), 10);
        var yr2 = parseInt(str2.substring(6, 10), 10);
        var date1 = new Date(yr1, mon1, dt1);
        var date2 = new Date(yr2, mon2, dt2);

        if (date1 > date2) {
            alert("You cannot select a day after today!");
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
    }

    //----------------------------
    //******************************************************Calculate Year Diff-------------
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
    //******************************************************Calculate Month Diff
    function calcMonthDiff(yearOfToday, monthOfToday, dayOfToday, yearOfBirth, monthOfBirth, dayOfBirth, yearDiff, monthDiff, daysDiff) {

        if (monthOfToday == monthOfBirth) {
            if (dayOfToday > dayOfBirth)
                monthDiff = monthOfToday - monthOfBirth;
            else if (dayOfToday == dayOfBirth)
                monthDiff = 0; // That's a Birthday
            else
                monthDiff = 11; // Birthday coming soon
        }
        calcDateDiff(yearOfToday, monthOfToday, dayOfToday, yearOfBirth, monthOfBirth, dayOfBirth, yearDiff, monthDiff, daysDiff);
    }
    //******************************************************Calculate Date Diff
    function calcDateDiff(yearOfToday, monthOfToday, dayOfToday, yearOfBirth, monthOfBirth, dayOfBirth, yearDiff, monthDiff, daysDiff) {

        if (yearOfToday % 4 == 0)
            totalNumOfDaysOfMonths[1] = 29;

        if (dayOfToday > dayOfBirth)
            daysDiff = dayOfToday - dayOfBirth;
        else if (dayOfToday == dayOfBirth)
            daysDiff = 0;
        else {
            // daysDiff = parseInt((totalNumOfDaysOfMonths[monthOfToday - 1] - dayOfBirth)) + 1 + parseInt(dayOfToday);
            daysDiff = parseInt(totalNumOfDaysOfMonths[monthOfToday - 1]) + parseInt(dayOfToday.replace(/^[0]+/g, "")) - parseInt(dayOfBirth);
            monthDiff = monthDiff - 1;
        }
        if (daysDiff == 0)
            daysDiff = 0;
        process(yearOfToday, monthOfToday, dayOfToday, yearOfBirth, monthOfBirth, dayOfBirth, yearDiff, monthDiff, daysDiff);

    }
    //******************************************************Final Process
    function process(yearOfToday, monthOfToday, dayOfToday, yearOfBirth, monthOfBirth, dayOfBirth, yearDiff, monthDiff, daysDiff) {

        var ageString_d = 0;
        var ageString_m = 0;
        var ageString_y = 0;
        if ((monthOfBirth > monthOfToday) && (dayOfToday < dayOfBirth))
            monthDiff -= 1;

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

        if (daysDiff == 0)
            ageString_d = ageString_d;
        else if (daysDiff == 1) {
            if (!(yearDiff == 0) && (monthDiff == 0))
                ageString_d = ageString_d;
            else
                ageString_d = daysDiff;
        }
        else {
            if (!(yearDiff == 0) && (monthDiff == 0))
                ageString_d = daysDiff; //ageString_d + 'and ' + daysDiff + ' days';
            else
                ageString_d = ageString_d + daysDiff;
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
    }
    //******************************************************

    //Calculate The age by supplying Data
    function CalAge() {

        var month = document.getElementById('<%= txtMonths.ClientID%>').value;
        var years = document.getElementById('<%= txtYear.ClientID%>').value;
        var days = document.getElementById('<%= txtDay.ClientID%>').value;
        var dob;
        if (document.getElementById('<%= txtDob.ClientID%>').value == "")
            dob = document.getElementById('<%= txtDob.ClientID%>').value;
        else
            dob = "";

        if (days > 31) {
            alert('Please Enter Valid Nos. Of days');
            document.getElementById('<%= txtDay.ClientID%>').value = 0;
            // document.getElementById('<%= txtDob.ClientID%>').value='';
            return false;
        }
        if (days < 0) {
            alert('Please Enter Valid Nos. Of days');
            document.getElementById('<%= txtDay.ClientID%>').value = 0;
            document.getElementById('<%= txtDob.ClientID%>').value = '';
            return false;
        }
        if (month == 13) {
            if (years == '' || years == 'NaN')
                years = 0;
            years = parseInt(years) + parseInt(1);
            month = 0;
            document.getElementById('<%= txtMonths.ClientID%>').value = month;
            document.getElementById('<%= txtYear.ClientID%>').value = years;
        }
        if (month > 12) {
            alert('Please Enter Valid Nos. Of months');
            // document.getElementById('<%= txtDob.ClientID%>').value='';
            document.getElementById('<%= txtMonths.ClientID%>').value = 0;
            month = 0;
            return false;
        }
        if (month < 0) {
            alert('Please Enter Valid Nos. Of months');
            document.getElementById('<%= txtDob.ClientID%>').value = '';
            document.getElementById('<%= txtMonths.ClientID%>').value = 0;
            month = 0;
            return false;
        }
        today_date = new Date();
        today_Year = today_date.getFullYear();
        today_month = today_date.getMonth();
        today_Day = today_date.getDate();

        var pastdate = new Date(years, month - 1, days);
        var ageYear = today_Year - years;
        var ageMonth = today_month - month + 1;
        if (ageMonth < 0) {
            ageMonth = ageMonth + 12;
            ageYear = ageYear - 1;
        }
        var ageDay = today_Day - days;
        var noofDays = caldays(ageMonth, ageYear);
        if (ageMonth < 0) {
            var noofYears = Math.round(parseInt(ageMonth) / 12);
            if (noofYears == 0) {
                noofYears = -1;
            }
            ageMonth = today_month - (ageMonth) + 1;
            if (ageMonth == 12) {
                ageYear = ageYear - 1;
                ageMonth = today_month + 1;
            }
            else {
                ageYear = ageYear + noofYears;
                ageMonth = today_month + 1;
            }

        }
        if (ageDay < 0) {
            if (ageMonth > 0)
                ageMonth = ageMonth - 1;
            else {
                ageMonth = ageMonth - 1 + 12;
                ageYear = ageYear - 1;
            }
            var noofDays = caldays(ageMonth, ageYear);
            var _eDay = (noofDays + parseInt(ageDay));
            ageDay = _eDay;

        }

        if (ageDay == 0) {
            if (ageMonth == 0) {
                ageMonth = ageMonth + 12;
                ageYear = ageYear - 1;
            }
            if (parseInt(ageMonth - 1) == 1) { ageDay = '31' }
            else if (parseInt(ageMonth - 1) == 2) {
                if ((parseInt(ageYear % 4) == 0) || (parseInt(ageYear % 400) == 0) || (parseInt(ageYear % 400) == 0 && parseInt(ageYear % 100) != 0))
                { ageDay = '29' }
                else { ageDay = '28' }
            }
            else if (parseInt(ageMonth - 1) == 3) { ageDay = '31' } else if (parseInt(ageMonth - 1) == 4) { ageDay = '30' }
            else if (parseInt(ageMonth - 1) == 5) { ageDay = '31' } else if (parseInt(ageMonth - 1) == 6) { ageDay = '30' }
            else if (parseInt(ageMonth - 1) == 7) { ageDay = '31' } else if (parseInt(ageMonth - 1) == 8) { ageDay = '31' }
            else if (parseInt(ageMonth - 1) == 9) { ageDay = '30' } else if (parseInt(ageMonth - 1) == 10) { ageDay = '31' }
            else if (parseInt(ageMonth - 1) == 11) { ageDay = '30' } else { ageDay = '31' }
            ageMonth = ageMonth - 1;
            //ageDay ='1';
        }

        if (ageMonth == 0) {
            ageYear = ageYear - 1;
        }

        if (ageMonth == 0) { ageMonth = 12 }
        if (ageMonth == 1) { ageMonth = 'Jan' } if (ageMonth == 2) { ageMonth = 'Feb' } if (ageMonth == 3) { ageMonth = 'Mar' }
        if (ageMonth == 4) { ageMonth = 'Apr' } if (ageMonth == 5) { ageMonth = 'May' } if (ageMonth == 6) { ageMonth = 'Jun' }
        if (ageMonth == 7) { ageMonth = 'Jul' } if (ageMonth == 8) { ageMonth = 'Aug' } if (ageMonth == 9) { ageMonth = 'Sep' }
        if (ageMonth == 10) { ageMonth = 'Oct' } if (ageMonth == 11) { ageMonth = 'Nov' } if (ageMonth == 12) { ageMonth = 'Dec' }
        if (ageYear % 4 == 0 && ageMonth == 'Feb')
            if (ageDay == '29' && ageMonth == 'Feb')
                ageDay == '29';
            else if (ageDay > 29) {
                ageDay == '1'; ageMonth = 'Mar';
            }

        age = ageDay + '-' + ageMonth + '-' + ageYear;
        if (age.length == 10)
            age = "0" + age;

        document.getElementById('<%= txtDob.ClientID%>').value = age;

        document.getElementById('<%= hdnYear.ClientID%>').value = years;
        document.getElementById('<%= hdnMonth.ClientID%>').value = month;
        document.getElementById('<%= hdnDay.ClientID%>').value = days;
        if (years != "0")
            document.getElementById('<%= hdnUOM.ClientID%>').value = 83;
        if (month != "0")
            document.getElementById('<%= hdnUOM.ClientID%>').value = 84;
        if (days != "0")
            document.getElementById('<%= hdnUOM.ClientID%>').value = 85;
        document.getElementById('<%= hdnAge.ClientID%>').value = years + ',' + month + ',' + days;

    }
    //This Javascript code is to get number of days in perticuler month of year

    function caldays(m, y) {
        if (m == 01 || m == 03 || m == 05 || m == 07 || m == 08 || m == 10 || m == 12) {

            var dmax = 31;
            return dmax;
        }
        else if (m == 04 || m == 06 || m == 09 || m == 11) {
            var dmax = 30;
            return dmax;
        }
        else if (m == 0) {
            var dmax = 31;
            return dmax;
        }
        else {
            if ((y % 400 == 0) || (y % 4 == 0) || (y % 400 == 0 && y % 100 != 0)) {
                dmax = 29;
                return dmax;
            }
            else {
                dmax = 28;
            }
            return dmax;
        }
    }
    //Get the number validation for years ,months and days
    function CheckNumberData() {
        var charCode = (e.charCode) ? e.charCode : ((e.keyCode) ? e.keyCode : ((e.which) ? e.which : 0));
        if (charCode == 9 || charCode == 8)
            return true;

        if (charCode >= 48 && charCode <= 57) {
            e.returnValue = true;
            return true;
        }
        e.returnValue = false;
        return false;
    }

    function ValidateDOB(oField, index) {

        var myValue;
        if (index == 1)
            myValue = document.getElementById('<%= txtDob.ClientID%>').value;
        else if (index == 2)
            myValue = document.getElementById('<%= txtDob.ClientID%>').value;
        else if (index == 3)
            myValue = document.getElementById('<%= txtDob.ClientID%>').value;
        for (i = 0; i < myValue.length; i++) {
            var code = myValue.charCodeAt(i);
            if (!(code >= 48 && code <= 57)) {
                if (index == 1) {
                    document.getElementById('<%= txtYear.ClientID%>').value = 0;
                    document.getElementById('<%= txtYear.ClientID%>').focus();
                }
                else if (index == 2) {
                    document.getElementById('<%= txtMonths.ClientID%>').value = 0;
                    document.getElementById('<%= txtMonths.ClientID%>').focus();
                }
                else if (index == 3) {
                    document.getElementById('<%= txtDay.ClientID%>').value = 0;
                    document.getElementById('<%= txtDay.ClientID%>').focus();
                }
                document.getElementById('<%= txtDob.ClientID%>').value = '';
                break;
            }
        }
    }
   
</script>
<asp:UpdatePanel ID="updDob" runat="server" UpdateMode="Always">
    <ContentTemplate>
        <tr>
            <td align="left">
                DOB
            </td>
            <td align="left">
                <div class="btntxt">
                    <asp:TextBox ID="txtDob" runat="server" MaxLength="11" ToolTip="DD-MMM-YYYY" onkeyup="return CalAge()"
                        onblur="ValidatetextChangedDateOfBirth(this);"> </asp:TextBox>
                    <div class="txtbtn">
                        <asp:Button ID="imgCal" runat="server" ImageAlign="Top" CssClass="tb_Btn calendar" />
                    </div>
                    <cc1:CalendarExtender ID="CalendarExtender1" TargetControlID="txtDob" runat="server"
                        CssClass="MyCalendar" PopupButtonID="imgCal" OnClientDateSelectionChanged="OnGetAge"
                        PopupPosition="Right">
                    </cc1:CalendarExtender>
                    <asp:TextBox ID="txt1" runat="server" Style="display: none;"></asp:TextBox>
                    <cc1:MaskedEditExtender ID="MaskedEdit1" runat="server" ClearMaskOnLostFocus="false"
                        EnableViewState="false" CultureName="en-GB" MessageValidatorTip="true" Mask="99-LLL-9999"
                        TargetControlID="txtDob">
                    </cc1:MaskedEditExtender>
                </div>
            </td>
            <td colspan="2">
                <table cellpadding="0" cellspacing="0" border="0" width="100%">
                    <tr>
                        <td align="left" width="10%">
                            Years
                        </td>
                        <td align="left" width="25%">
                            <asp:TextBox ID="txtYear" onkeypress="return numeralsOnly(event);" Text="0" MaxLength="3"  onpaste="return false"
                                runat="server" onkeyup="return CalAge()" ToolTip="Enter the Age in Year"></asp:TextBox>
                        </td>
                        <td align="left" width="10%">
                            Months
                        </td>
                        <td align="left" width="18%">
                            <asp:TextBox ID="txtMonths" onkeypress="return numeralsOnly(event);" Text="0" MaxLength="2"
                                runat="server" onkeyup="return CalAge()" ToolTip="Enter the Age in Months"></asp:TextBox>
                        </td>
                        <td align="left" width="10%">
                            Days
                        </td>
                        <td align="left" width="17%">
                            <asp:TextBox ID="txtDay" onkeypress="return numeralsOnly(event);" Text="0" MaxLength="2"
                                runat="server" onkeyup="return CalAge()" ToolTip="Enter the Age in Days"></asp:TextBox>
                            <asp:HiddenField ID="hdnAge" runat="server" />
                            <asp:HiddenField ID="hdnYear" runat="server" />
                            <asp:HiddenField ID="hdnMonth" runat="server" />
                            <asp:HiddenField ID="hdnDay" runat="server" />
                            <asp:HiddenField ID="hdnUOM" runat="server" />
                            <asp:HiddenField ID="hdndobmontheditable" runat="server" />
                        </td>
                    </tr>
                </table>
                <div id="pediatric" class="uc-hh-mm" style="display: none;">
                    <asp:TextBox ID="txtHH" MaxLength="2" runat="server" CssClass="txt-yy" placeholder="Hours"
                        Style="text-align: right" ToolTip="Enter the Hours" autocomplete="off"></asp:TextBox>
                    <asp:TextBox ID="txtMM" placeholder="MInutes" CssClass="txt-mm" MaxLength="2" runat="server"
                        Style="text-align: right" ToolTip="Enter the Minutes" autocomplete="off"></asp:TextBox>
                </div>
            </td>
        </tr>
    </ContentTemplate>
</asp:UpdatePanel>
