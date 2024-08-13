function keyUP(keyCode)
{
var isShift;
    if(keyCode==16)
      isShift = false;
}
function CheckFirstChar(key, txt)
{
  if(key == 32 && txt.value.length<=0)
  {
    return false;
  }
  else if(txt.value.length>0)
  {
    if(txt.value.charCodeAt(0) == 32)
    {
      txt.value=txt.value.substring(1,txt.value.length);
      return true;
    }
  }
  return true;
}
/*preventing a TextBox from taking spaces*/
function validateTextBox(eventRef, elementRef)
{
 var functionReturn = true;
 eventRef = (eventRef) ? eventRef : (window.event) ? window.event : (event) ? event : null;
 if ( eventRef == null )
 {
  return false;
 }
 var keyCodeEntered = (eventRef.which) ? eventRef.which : (eventRef.keyCode) ? eventRef.keyCode : -1;
 if ( (keyCodeEntered == 32) && (elementRef.value.length <= 0) )
  functionReturn = false;
 if ( functionReturn == false )
 {
  if ( window.event )
  {
      /* Internet Explorer...*/
   window.event.cancelBubble = true;
   window.event.returnValue = false;
  }
  else
  {
      /* Firefox...*/
   eventRef.preventDefault();
   eventRef.stopPropagation();
  }
 }
 return functionReturn;
}
function OnSaveRecord()
 {
    if (confirm('are you sure, you want to save it?'))
     {
        return true;
    }
    else 
    {
        return false;
    }
}
    function gg_onkeypress(e)
	{				
			return false;
	}
	function gg_onkeydown(e)
	{
		if(e.keyCode != 11)
		{
				return false;
		}
	}
	function gg_onkeyup(e)
	{
		if(e.keyCode != 11)
		{
			return false;
		}
	}    
function AllowAlphabet(e)
{
	isIE=document.all? 1:0
	keyEntry = !isIE? e.which:event.keyCode;
	if(((keyEntry >= '65') && (keyEntry <= '90')) || ((keyEntry >= '97') && (keyEntry <= '122'))) 
		return true;  
	else
		return false;
}
///*-------------------Allowing Date Format of dd-MMM-yyyy---------------------*/
function DateValidation(control) 
{     
   var textDate = document.getElementById('ctl00_ContentPlaceHolder1_txtSearchCriteria').value;
   if(textDate != '')
   {
    var DateExpression = /^(\d{2})-([A-Za-z][A-Za-z][A-Za-z])-(\d{4})$/;
    var valresult = textDate.match(DateExpression);
    if (valresult==null) 
    {  
        alert('Enter a valid date in dd-mmm-yyyy format (e.g. 01-Jan-1999)');
        document.forms[0].elements[dateV].value='';
        return false;
    }
    else
    {
      return true;
    }
   }
}
///*-------------------Allowing Numbers only---------------------*/
function isNumericKeyStroke(event)
{
      var keyCode = (window.event.which) ? window.event.which : window.event.keyCode;
      if  (keyCode<=91 && keyCode >= 65)    
      return false; 
        if((keyCode==8 ) && (keyCode <= 31))
        return true;
         if((keyCode ==13) && (keyCode <= 31))
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
  function AllowOnlyYorN(e)
{
	isIE=document.all? 1:0
	keyEntry = !isIE? e.which:event.keyCode;
	if((keyEntry == '78') || (keyEntry == '110') || (keyEntry == '89') || (keyEntry == '121')) 
		return true;  
	else
		return false;
}