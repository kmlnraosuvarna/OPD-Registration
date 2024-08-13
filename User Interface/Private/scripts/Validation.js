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
                        $(".smessagebox").scustommessagebox(2, "", "Are You Sure Want To Delete The Record?", OnsuccessdeleteConfirmation, '', OndeleteCancelConfirmation);
                        return false;
                    }
                }
            }
        }
        $(".stoast").toastText("warning", "Please Select Record!.", 5, 3);
       // alert("Please Select Record");
        return false;
    }
}
 

function OnsuccessdeleteConfirmation() {
    __doPostBack($('[id*=imgdelete]').attr("name"), "");
}

function OndeleteCancelConfirmation() {
    return false;
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
     CheckBoxCount = 0;
    if (grid.rows.length > 0) {
        cell = grid.rows[0].cells[ind];
        for (var j = 0; j < cell.childNodes.length; j++) {
            if (cell.childNodes[j].type == "checkbox") {
                cell.childNodes[j].checked = false;
                CheckBoxCount=grid.rows.length-1;
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
        while (n1--) { months[months[n1]] = n1; } // map month names to their index :)
        matches1 = Date1.match(re1); // extract date parts from string
        var dt1 = new Date(matches1[3], months[matches1[2]], matches1[1]);
        matches1 = Date2.match(re1); // extract date parts from string
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
        document.getElementById("ctl00_ContentPlaceHolder1_txtDOB").value = "";
        document.getElementById("ctl00_ContentPlaceHolder1_txtDOB").focus();
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
        else if(controlId.value.trim()=='__-___-____')
        {
            controlId.style.border = "1px solid #f4785e";
            return false;
        }
    }
   else  if (controlId.tagName == 'SELECT') {
        if (controlId[0].selected == true) {
            controlId.style.border = "1px solid #f4785e";
            return false;
        }
    }
  else  if (controlId.tagName == 'TEXTAREA') {
        if (controlId.value.trim() == '') {
            controlId.style.border = "1px solid #f4785e";
            return false;
        }
    }
   else  if (controlId.tagName == 'DIV') {   
    }
     if (controlId.tagName == 'DIV')
     controlId.style.border = "0px solid #ffffff";
     else
    controlId.style.border = "1px solid #bebebe";
}
function SetGender(ctrlid) {
    OnNullValue(ctrlid);
    var ddlTitle = document.getElementById('ctl00_ContentPlaceHolder1_ddlTitle');
    var ddlGender = document.getElementById('ctl00_ContentPlaceHolder1_ddlGender');
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
function onChkAge(event)
{
 var ddlTitle=document.getElementById('ctl00_ContentPlaceHolder1_ddlTitle'); 
 var val=ddlTitle.value;
 var age=document.getElementById('ctl00_ContentPlaceHolder1_AgeCalUsercontrol1_txtBirthNumber');
 var ddlAgeOption=document.getElementById('ctl00_ContentPlaceHolder1_AgeCalUsercontrol1_ddlAgeOption');
 var txtDateOfBirth=document.getElementById('ctl00_ContentPlaceHolder1_AgeCalUsercontrol1_txtDateOfBirth');
 var Ageval=age.value;
    if(ddlTitle.selectedIndex==0)
    {
      alert('please select the title before you enter age');
      ddlTitle.focus();
      age.value='';
      ddlAgeOption.selectedIndex=0;
      txtDateOfBirth.value='';
      return false;
    }
    if(ddlTitle[val].innerText=='Baby')
    {
      if(Ageval>12)
       {
         alert('please enter suitable age');
         document.getElementById('ctl00_ContentPlaceHolder1_AgeCalUsercontrol1_txtBirthNumber').focus();
         return false;
       }
    }
    else if(ddlTitle[val].innerText=='Master')
    {
      if(Ageval>21)
       {
        alert('please enter suitable age');
        document.getElementById('ctl00_ContentPlaceHolder1_AgeCalUsercontrol1_txtBirthNumber').focus();
       }  
    }
 }
 function chkPhone(event)
 {
    var phone=document.getElementById('ctl00_ContentPlaceHolder1_txtRefPhone').value;
    var val=phone.length;
    if (val<10)
        {
          alert('please enter a valid phone number');
          document.getElementById('ctl00_ContentPlaceHolder1_txtRefPhone').focus();
        }
 }
 function checkDate(sender,args)
 {
    if (sender._selectedDate > new Date())
     {
        alert("You cannot select a day greater than today!");
        sender._selectedDate = new Date();
        sender._textbox.set_Value(sender._selectedDate.format(sender._format));
     }
 }
 function checkExpDate(sender)
 {
   var v1=document.getElementById('ctl00_ContentPlaceHolder1_txtIssueDt').value;
   var issueDate=parseInt(v1);
   var v2=document.getElementById('ctl00_ContentPlaceHolder1_txtExpiryDt').value;
   var expDate=parseInt(v2);
   if(expDate<issueDate)
   {
     alert('Expiry date cannot less than issue date');
     document.getElementById('ctl00_ContentPlaceHolder1_txtExpiryDt').focus();
   }
 }
 function checkToDate(sender,args)
 {
   if (sender._selectedDate < new Date())
    {
      alert("You cannot select a day lesser than today!");
      sender._selectedDate = new Date();
      sender._textbox.set_Value(sender._selectedDate.format(sender._format));
    }
 }
 function DeleteGridRecords(grid,index)
 {
    var cell;
    if (grid.rows.length > 0)
     {
        for (var i = 1; i < grid.rows.length; i++) 
        {
            cell = grid.rows[i].cells[index];
            for (var j = 0; j < cell.childNodes.length; j++)
             {
                if (cell.childNodes[j].childNodes[j].type == "checkbox") 
                {
                    if (cell.childNodes[j].childNodes[j].checked == true) 
                    {
                        if (confirm('Are you sure to Delete?')) 
                        {
                            return true;
                        }
                        else
                         {
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
 function remove(ctrl)
    {
         var txt=document.getElementById(ctrl.id);
         var val=txt.value;
         for(i=0;i<val.length;i++)
           {
             var code=val.charCodeAt(i);
             if(!(code>=48 && code<=57))
             { 
               txt.value=""; 
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
function CheckNumber(e) 
{
}
/* --------------------------- Allow Only charecters ------------*/
function OnlyCharecters(evt) 
{
    evt = (evt) ? evt : event;
    var charCode = (evt.charCode) ? evt.charCode : ((evt.keyCode) ? evt.keyCode : ((evt.which) ? evt.which : 0));
    if (charCode > 30 && (charCode < 65 || charCode > 90) && (charCode < 97 || charCode > 122)) 
    {
        if(charCode==32)
           {
           evt.returnValue = true;
            return true;
            }
            if(charCode==46)
            {
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
    if(Date1.length==10)Date1='0'+Date1;if(Date2.length==10)Date2='0'+Date2;
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
        if(charCode==8)
            return true;
        else
            return false;
    }
    else
        return true;
    return false;
}
function chkNumeric(evt)
    { 
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
  function CheckNumericphno(e)
        {
         var keycode; 
         if(document.all)
           {
               /* for IE Browser*/
        keycode=e.keyCode;
           }
          else
          {
        keycode=e.which;
         }
        if(keycode>=48 && keycode<=57 || keycode==43 || keycode==9 || keycode==13  || keycode==8 || keycode==43 || keycode==45 )
         {
        return true;
         }
       else
        {
        return false;
      }
   }
function ShowPopUp(popup) {
    $find(popup).show();
} 
function ClearTextbox(id)
{
    if(parseFloat(document.getElementById(id.id).value)==0)
        document.getElementById(id.id).value='';
}
function ConfirmationRequiredForSave(obj)
{
    var SaveAlert=document.getElementById(obj);
    if(SaveAlert!=null)
    {
        if (SaveAlert.value == '2') {
            return true;
        }
        else {
            $(".smessagebox").scustommessagebox(1, "", "Do you want to save the record?", OnsuccesssaveConfirmation, '', NoCallBack);
            return false;
        }
    }
}
function NoCallBack() {
    return false;
}
function OnsuccesssaveConfirmation() {
    __doPostBack('ctl00$ContentPlaceHolder1$pageHeader$imgbtnSave', '');
}
function ClearTextbox(id)
{
    if(parseFloat(document.getElementById(id.id).value)==0)
        document.getElementById(id.id).value='';
}
function OnlyTabkey(evt) {
    var keycode;
    var charCode = (evt.which) ? evt.which : event.keyCode
    if (charCode == 9) return true;
    else return false;
}
function lettersOnly(evt){evt = (evt) ? evt : event;var charCode = (evt.charCode) ? evt.charCode : ((evt.keyCode) ? evt.keyCode : ((evt.which) ? evt.which : 0));if (charCode > 33 && (charCode < 65 || charCode > 90) && (charCode < 97 || charCode > 122)) {if (charCode == 40 || charCode == 46 || charCode == 38 || charCode == 37 || charCode == 39){return true;}else {alert("Enter letters only.");return false;}}return true;}
function EmailIdValidation(ID)
{
if(ID.value.trim() != ''){
var regex=/\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;
if(regex.test(ID.value))
{
ID.value=ID.value.toLowerCase();
return true;
}
else
{
alert('Please enter the email address!');
ID.value = '';
return false;       
}
}
return false;
}
function UPPER(obj) {
var mystring = obj.value;
var sp = mystring.split(' ');
var wl=0;
var f ,r;
var word = new Array();
for (i = 0 ; i < sp.length ; i ++ ) {
f = sp[i].substring(0,1).toUpperCase();
r = sp[i].substring(1);
word[i] = f+r;
}
newstring = word.join(' ');
obj.value = newstring;
return true;   
}
function numbersonly(e)
{   
var unicode=e.charCode? e.charCode : e.keyCode
if (unicode!=8)
{
if (unicode<48||unicode>57) 
{
alert('Please Enter Numbers Only.');
return false 
}
}
}   
function lower(ustr)
{
var str=ustr.value;
ustr.value=str.toLowerCase();
}
function CancelBackSpace(event)
{
	if (event.keyCode == 8) {
	return false;
  }
}     