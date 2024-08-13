
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

//preventing a TextBox from taking spaces

function validateTextBox(eventRef, elementRef)
{
 var functionReturn = true;
 eventRef = (eventRef) ? eventRef : (window.event) ? window.event : (event) ? event : null;

 if ( eventRef == null )
 {
  return false;
 }

 var keyCodeEntered = (eventRef.which) ? eventRef.which : (eventRef.keyCode) ? eventRef.keyCode : -1;


 // If this is a space character (32) and this is the first character entered...
 if ( (keyCodeEntered == 32) && (elementRef.value.length <= 0) )
  functionReturn = false;

 if ( functionReturn == false )
 {
  if ( window.event )
  {
   // Internet Explorer...

   window.event.cancelBubble = true;
   window.event.returnValue = false;
  }
  else
  {
   // Firefox...

   eventRef.preventDefault();
   eventRef.stopPropagation();
  }
 }

 return functionReturn;
}

//saving alert
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
//enable,disable GenericGrid
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