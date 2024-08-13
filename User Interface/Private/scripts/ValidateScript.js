//This function is for only Accepts 2 Digit after Decimal into the text box
function OnDeleteRecord() {
    if (confirm('are you sure, you want to delete it?')) {
        return true;
    }
    else {
        return false;
    }
}
function CheckDecimal(id) {
    //sddalert(id.select());
    var keyCode = parseInt(event.keyCode)
    if (keyCode == 8 || keyCode == 190 || keyCode == 46) {
        return true;
    }

    if (CheckNumeric(event) && !event.shiftKey) {

        //var regex = /[]
        var regex = /[0-9][.][0-9]{2}/;
        if (!regex.test(id.value)) {
            return true;
        }
    }
    return false;


}
function CheckNumeric() {
    var kcode = parseInt(event.keyCode);
    if (kcode >= 48 && kcode <= 57 || (kcode == 45)) {
        event.returnValue = true;
        return true;
    }
    else {
        event.returnValue = false;
        return false;
    }
}

function EmailIdValidation(ID) {
    if(ID.value.length>0)
    {
        var regex = /\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;
        if (regex.test(ID.value)) {
            return true;
        }
        else {
            alert('Please enter the email address!');
            ID.value = '';
             ID.focus();
             return false;
        }
    }
    else
        return false;
}

function UrlValidation(ID) {
//debugger;

    if(ID.value.length>0)
    {
    var checkval=ID.value.toUpperCase();
    if(checkval.indexOf("WWW.")!=-1)
    checkval=checkval.substring(checkval.indexOf("WWW."));
    
    checkval='http://'+checkval;
   
   
    
        var regex = /http(s)?:\/\/([\w-]+\.)+[A-Za-z0-9\.-]{3,}\.[A-Za-z]{3}/; ///http(s)?:\/\/([\w-]+\.)+[\w-]+(/[\w- ./?%&amp;=]*)?/;
        ///http:\/\/([\w-]+\.)+[A-Za-z0-9\.-]{3,}\.[A-Za-z]{3}/
        if (regex.test(checkval)) {
            return true;
        }
        alert('Please enter url like www.abc.com');
        ID.value = '';
         ID.focus();
             return false;
     }
    else
        return false;
}
function NumbersWithDot(evt) {
    var e = event || evt; // for trans-browser compatibility
    var charCode = e.which || e.keyCode;
    if (charCode == 190 || charCode == 110) 
    {
        return true;
    }
    if (charCode > 31 && (charCode < 48 || charCode > 57) && charCode > 48 && (charCode < 96 || charCode > 105))

        return false;

    return true;

}

function onlyNumbers(evt) {
    var e = event || evt; // for trans-browser compatibility
    var charCode = e.which || e.keyCode;

    if (charCode > 31 && (charCode < 48 || charCode > 57) && (charCode < 96 || charCode > 105))
        return false;

    return true;

}
function NumbersWithSlash(evt) {
    var e = event || evt; // for trans-browser compatibility
    var charCode = e.which || e.keyCode;
    if (charCode == 191 || charCode == 47) {
        return true;
    }
    if (charCode > 31 && (charCode < 48 || charCode > 57) && (charCode < 96 || charCode > 105) && charCode > 48)
        return false;

    return true;

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

function RestrictInt(val) {
 
    if (isNaN(val)) {

        val = val.substring(0, val.length - 1);

        document.form1.txtAge.value = val;

        return false;

    }

    return true;

}

function RestrictCharacter() {
    var element;
    var len = document.forms[0].elements.length;

    for (i = 0; i < len; i++) {
        element = document.forms[0].elements;

        if (element.type == 'text' || element.type == 'textarea') {
            element.attachEvent("onkeypress", function() {
                if (event.keyCode == 60 || event.keyCode == 62 ||
                                    event.keyCode == 38 || event.keyCode == 39) return false;
            });
            element.attachEvent("onpaste", function() {
                var REGX = new RegExp('<|>|&|\'', 'gi');
                var val = window.clipboardData.getData('Text');
                if (REGX.test(val))
                    return false;
            });
            element.attachEvent("ondrop", function() { return false; });
        }
    }
}

function lettersOnly(evt) {
    evt = (evt) ? evt : event;
    var charCode = (evt.charCode) ? evt.charCode : ((evt.keyCode) ? evt.keyCode : ((evt.which) ? evt.which : 0));

    if (charCode > 33 && (charCode < 65 || charCode > 90) && (charCode < 97 || charCode > 122)) {
        if (charCode == 40 || charCode == 46 || charCode == 38 || charCode == 37 || charCode == 39) // arrows and del key
        {
            return true;
        }
        else {
            alert("Enter letters only.");
            return false;
        }
    }
    return true;
}

  function letterAlphabets(evt) {
    evt = (evt) ? evt : event;
    var charCode = (evt.charCode) ? evt.charCode : ((evt.keyCode) ? evt.keyCode : ((evt.which) ? evt.which : 0));

    if ((charCode < 65 || charCode > 90) && (charCode < 97 || charCode > 122)) {
        if (charCode == 40 || charCode == 46 || charCode == 38 || charCode == 37 || charCode == 39) // arrows and del key
        {
            return true;
        }
        else {
            alert("Enter letters only.");
            return false;
        }
    }
    return true;
 }
 
function AllowChar(evt) {
    evt = (evt) ? evt : event;
    var charCode = (evt.charCode) ? evt.charCode : ((evt.keyCode) ? evt.keyCode : ((evt.which) ? evt.which : 0));
    if (charCode > 30 && (charCode < 65 || charCode > 90) && (charCode < 97 || charCode > 122)) {
        alert("Enter letters only.");
        return false;
    }
    return true;
}

function Del() {
    var response = confirm('Are you sure to Delete?')
    if (true == response)
        return true;
    else
        return false;
}


//This function is for only Accepts digits and '+' into the text box

function CheckNumeric(e) {
    var keycode;

    if (document.all) {
        // for IE Browser
        keycode = e.keyCode;
    }
    else {

        keycode = e.which;
    }
    if (keycode >= 48 && keycode <= 57 || keycode == 43 || keycode == 9 || keycode == 13 || keycode >= 96 && keycode <= 105 || keycode == 45 || keycode == 8 || keycode == 46) {
        //e.returnValue = true;
        return true;
    }
    else {
        //e.returnValue = false;
        return false;
    }
}
function CheckNumericphno(e) {
    var keycode;

    if (document.all) {
        // for IE Browser
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
function CheckNumericHomephno(e) {
    var keycode;

    if (document.all) {
        // for IE Browser
        keycode = e.keyCode;
    }
    else {

        keycode = e.which;
    }
    if (keycode >= 48 && keycode <= 57 || keycode == 9 || keycode == 13 || keycode == 8 || keycode == 45 || keycode == 32) {
        return true;
    }
    else {
        return false;
    }
}



function CannotEnter(e) {
    var keycode;

    if (document.all) {
        // for IE Browser
        keycode = e.keyCode;
    }
    else {

        keycode = e.which;
    }
    if (keycode == 13) {
        return true;
    }
    else {
        return false;
    }
}

function AllowCharNums(e) {
    var keycode;
    if (document.all) {
        // for IE Browser
        keycode = e.keyCode;
    }
    else {
        keycode = e.which;
    }
    if (keycode >= 65 && keycode <= 91 || keycode >= 97 && keycode <= 122 || keycode == 32 || keycode == 8) {
        return true;
    }
    else {
        return false;
    }
}


//function RestricChars(e) {
//    var keycode;
//    if (document.all) {
//        // for IE Browser
//        keycode = e.keyCode;
//    }
//    else {
//        keycode = e.which;
//    }
//    if (keycode == 8) {
//        return true;
//    }
//    else {
//        return false;
//    }
//}





function checklengthPharPhone(e) {
    var len1 = document.getElementById("ctl00_ContentPlaceHolder1_txtPharPhone").value;


    if (parseInt(len1.length) < 10) {
        alert("please enter length minimun 10 chars");

        return false;
    }
}

//To restrict Special Charachter into text box  :-       onkeypress="return alphanumeric_only(event);"              
function alphanumeric_only(e) {

    var keycode;
    if (window.event) keycode = window.event.keyCode;

    else if (event) keycode = event.keyCode;
    else if (e) keycode = e.which;

    else return true; if ((keycode >= 47 && keycode <= 57) || (keycode >= 65 && keycode <= 90) || (keycode >= 97 && keycode <= 122) || keycode == 32) {

        return true;
    }

    else {

        return false;
    }

    return true;
}

// Checks that an input string is a decimal number, with an optional +/- sign character.
var isDecimal_re = /^\s*((\d+(\.\d+)?)|(\.\d+))\s*/;
function isDecimal(s) {
    return String(s).search(isDecimal_re) != -1
}

function checkForInt(evt) {
    var charCode = (evt.which) ? evt.which : event.keyCode;
    return (charCode >= 48 && charCode <= 57);
}
function isAlpha(keyCode) {
    return ((keyCode >= 65 && keyCode <= 90) || keyCode == 8)
}

function RestrictSpecialChar(event) {
    var exp = String.fromCharCode(window.event.keyCode)
    var address = document.getElementById("txtName");
    //Allowed some special chars and alphabets and numbers        
    //If you donâ€™t want any special char you can remove from the below line	        
    var r = new RegExp("[-_,/'().0-9a-zA-Z \r]", "g");
    if (exp.match(r) == null) {
        window.event.keyCode = 0
        return false;
    }

}



/*------------------------ grid validation ------------------*/

//Check All checkboxes...
//gridid, column position of the checkbox, header checkbox for status.
function OnSelectAll(grid, ind, sender) {
    //variable to contain the cell of the grid
    var cell;
    if (grid.rows.length > 0) {
        //loop starts from 1. rows[0] points to the header.
        for (var i = 1; i < grid.rows.length; i++) {
            //get the reference of first column
            cell = grid.rows[i].cells[ind];

            //loop according to the number of childNodes in the cell
            for (var j = 0; j < cell.childNodes.length; j++) {
                //if childNode type is CheckBox                 
                if (cell.childNodes[j].type == "checkbox") {
                    //assign the status of the Select All checkbox to the cell checkbox within the grid
                    cell.childNodes[j].checked = sender.checked;
                }
            }
        }
    }
}
/*------------------ grid validation -----------------------*/


//This function use to validate text box first char not alow the Space
 function CheckFirstChar(key, txt)
    {
  if(key == 32 && txt.value.length<=0)
  {
    return false;
  }
  else if(txt.value.length>0)
  {
    if(txt.value.charCodeAt(0)==32)
    {
      txt.value=txt.value.substring(1,txt.value.length);
      return true;
    }
  }
  return true;
   }
   //Alow only Alphabets
    function isValidAlpha() {
   var c=	event.keyCode;

	event.keyCode=(!( (c>=65 && c<=90) 
                      ||(c>=97 && c<=122)
                      || (c==32)))?0:event.keyCode;
    }
    function checknum(e){ 
    	isIE=document.all? 1:0	
    	keyEntry = !isIE? e.which:event.keyCode;
    		if((keyEntry=='48'))	
    		{	
    			var str = document.getElementById(event.srcElement.name).value;	
    				if((str.indexOf('0')==-1 || str.indexOf('0')==0) && str.length<=0)
    				
    				
    							return false;	
    								else if(str.indexOf('0')==0 && str.length>0)	
    										return false;
    											}	
    											else
    												{	
    													if((keyEntry > '47') && (keyEntry < '58')|| (keyEntry == '46') ) 	
    															return true;	
    																else if(keyEntry == '8')
    																			return true;	
    																				else	
    																				
    																	
    																	return false;	}} //================>