//This function is for only Accepts 2 Digit after Decimal into the text box

function CheckDecimal(id)
{
//sddalert(id.select());
    var keyCode = parseInt(event.keyCode)
    if(keyCode == 8 || keyCode == 190|| keyCode ==46)
    {
        return true;
    }
   
    if(CheckNumeric(event) && !event.shiftKey)
    {
    
    //var regex = /[]
       var regex=/[0-9][.][0-9]{2}/; 
        if(!regex.test(id.value))
        {
            return true;
        }
    }
    return false;
    
    
}
function(evtid)
{

}

function EmailIdValidation(ID)
{
     var regex=/\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;
        if(regex.test(ID.value))
        {
            return true;
        }
           alert('Please enter the email address!');
           //
           ID.value = '';
}

function UrlValidation(ID)
{
    var regex = /http(s)?:\/\/([\w-]+\.)+[A-Za-z0-9\.-]{3,}\.[A-Za-z]{3}/; ///http(s)?:\/\/([\w-]+\.)+[\w-]+(/[\w- ./?%&amp;=]*)?/;
    ///http:\/\/([\w-]+\.)+[A-Za-z0-9\.-]{3,}\.[A-Za-z]{3}/
    if(regex.test(ID.value))
    {
        return true;
    }
    alert('Please enter url like http://www.abc.com');
    ID.value ='';
}

function onlyNumbers(evt)
{
	var e = event || evt; // for trans-browser compatibility
	var charCode = e.which || e.keyCode;

	if (charCode > 31 && (charCode < 48 || charCode > 57))
		return false;

	return true;

}

function RestrictInt(val)

    {

    if(isNaN(val)){

    val = val.substring(0, val.length-1);

    document.form1.txtAge.value = val;

    return false;

    }

    return true;

    }

function RestrictCharacter()
{
       var element;
       var len=document.forms[0].elements.length;
       
       for(i=0;i<len;i++)
       {
            element=document.forms[0].elements;
             
            if(element.type=='text' || element.type=='textarea')
            {
                        element.attachEvent("onkeypress",function(){if(event.keyCode == 60 || event.keyCode==62 ||
                                    event.keyCode==38 || event.keyCode==39)return false;});
                        element.attachEvent("onpaste",function()
                        {
                            var REGX=new RegExp('<|>|&|\'','gi'); 
                            var val=window.clipboardData.getData('Text');
                             if(REGX.test(val))
                                return false;
                        });
                element.attachEvent("ondrop",function(){return false;});
            }
       }
}

 function lettersOnly(evt) 
 {       evt = (evt) ? evt : event;   
     var charCode = (evt.charCode) ? evt.charCode : ((evt.keyCode) ? evt.keyCode : ((evt.which) ? evt.which : 0));     
       if (charCode >32 && (charCode < 65 || charCode > 90) && (charCode < 97 || charCode > 122) ) 
       {         
      
             return false;   
       }     
       return true;  
 }
                      
  function Del()
        {
            var response = confirm('Are you sure to Delete?')
            if (true == response )
                return true; 
            else
                return false;
        }	                    
                                 
                      
//This function is for only Accepts digits into the text box

function CheckNumeric(e)
{
    var keycode;
    
    if(document.all)
    {
    // for IE Browser
        keycode=e.keyCode;
    }
    else
    {
   
        keycode=e.which;
    }
    if(keycode>=48 && keycode<=57 || keycode==43 || keycode==45 || keycode==8 || keycode==46)
    {
        return true;
    }
    else
    {
        return false;
    }
}

function CannotEnter(e)
{
 var keycode;
    
    if(document.all)
    {
    // for IE Browser
        keycode=e.keyCode;
    }
    else
    {
   
        keycode=e.which;
    }
    if(keycode==13)
    {
        return true;
    }
    else
    {
        return false;
    }
}

    function AllowCharNums(e)
    {
        var keycode;
        if(document.all)
        {
        // for IE Browser
            keycode=e.keyCode;
        }
        else
        {
            keycode=e.which;
        }
        if(keycode>=65 && keycode<=91 || keycode>=97 && keycode<=122 || keycode==32 ||  keycode==8 )
        {
            return true;
        }
        else
        {
            return false;
        }
    }
    
    function AllowChar(e)
    {
        var keycode;
        if(document.all)
        {
        // for IE Browser
            keycode=e.keyCode;
        }
        else
        {
            keycode=e.which;
        }
        if(keycode>=65 && keycode<=91 || keycode>=97 && keycode<=122 || keycode==32 ||  keycode==8 )
        {
            return true;
        }
        else
        {
            return false;
        }
    }
  function RestricChars(e)
    {
        var keycode;
        if(document.all)
        {
        // for IE Browser
            keycode=e.keyCode;
        }
        else
        {
            keycode=e.which;
        }
        if(keycode==8)
        {
            return true;
        }
        else
        {
            return false;
        }
    }
    
    
    var mikExp = /[$\\@\\\#%\^\&\*\(\)\[\]\+\_\{\}\`\~\=\|]/;
function dodacheck(val) {
var strPass = val.value;
var strLength = strPass.length;
var lchar = val.value.charAt((strLength) - 1);
if(lchar.search(mikExp) != -1) {
var tst = val.value.substring(0, (strLength) - 1);
val.value = tst;
   }
}
 function refreshParent() 
        {
            window.opener.location.href = window.opener.location.href;

            if (window.opener.progressWindow)
		
            {
                    window.opener.progressWindow.close()
            }
            window.close();
        }
function doanothercheck(form) {
if(form.value.length < 1) {
alert("Please enter something.");
return false;
}
if(form.value.search(mikExp) == -1) {
alert("Correct Input");
return false;
}
else {
alert("Sorry, but the following characters\n\r\n\r@ $ % ^ & * # ( ) [ ] \\ { + } ` ~ =  | \n\r\n\rare not allowed!\n");
form.select();
form.focus();
return false;
}
alert("Correct Input");
return false;
}
//  End -->
