function addRow(e)
{
  fn_AddFilterRow();
}
var index = 0;
function fn_AddFilterRow() 
{
    try 
    {
        var gvDetails = document.getElementById('ctl00_ContentPlaceHolder1_gvDetails');
        var rowIndex = gvDetails.rows.length;
        var newRow = gvDetails.insertRow();

        var newCell = newRow.insertCell();
        var span = document.createElement('span');
        var lblSNo = document.createElement('label'); 
        lblSNo.innerHTML = rowIndex; 
        span.appendChild(lblSNo);
        newCell.appendChild(span);

        newCell = newRow.insertCell();
        var span = document.createElement('span');
        var txtTime = GetTimeTextBox("txtTime");
        span.appendChild(txtTime);
        newCell.appendChild(span);

        newCell = newRow.insertCell();
        var txtBP = GetBPTextBox("txtBP");
        newCell.appendChild(txtBP);

        newCell = newRow.insertCell();
        var txtPulse = GetPulseTextBox("txtPulse");
        newCell.appendChild(txtPulse);
        
        newCell = newRow.insertCell();
        var txtRespiration = GetRespTextBox("txtRespiration");
        newCell.appendChild(txtRespiration);


        newCell = newRow.insertCell();
        var txtTemp = GetTemperatureBox("txtTemp");
        newCell.appendChild(txtTemp);
        
        newCell = newRow.insertCell();
        var txtCVP = GetCVPBox("txtCVP");
        newCell.appendChild(txtCVP);
        
        //debugger;
        newCell=newRow.insertCell();
        
        var span1=document.createElement('span');
        var txtIntraFluid = GetIntraFluidTextBox("txtIntraFluid");
        span1.appendChild(txtIntraFluid);
        span1.style.padding='0px 5px 0px 3px';

        var span2=document.createElement('span');
        var txtHrly = GetHrlyTextBox("txtHrly");
        span2.appendChild(txtHrly);
        span2.style.padding='0px 10px 0px 8px';

        var span3=document.createElement('span');
        var txtTotal = GetTotalTextBox("txtTotal");
        span3.appendChild(txtTotal);
        span3.style.padding='0px 10px 0px 7px';


        var span4=document.createElement('span');
        var txtOralFluid = GetOralFluidTextBox("txtOralFluid");
        span4.appendChild(txtOralFluid);
        span4.style.padding='0px 5px 0px 4px';

        var span5=document.createElement('span');
        var txtAmt = GetAmtBox("txtAmt");
        span5.appendChild(txtAmt);
        span5.style.padding='0px 2px 0px 8px';
        
       
         
        newCell.appendChild(span1);
        newCell.appendChild(span2);
        newCell.appendChild(span3);
        newCell.appendChild(span4);
        newCell.appendChild(span5);
        
        newCell=newRow.insertCell();
       
        var span6=document.createElement('span');
        var txtUrine = GetUrineTextBox("txtUrine");
        span6.appendChild(txtUrine);
        span6.style.padding='0px 0px 0px 4px';

        var span7=document.createElement('span');
        var txtNGASP = GetNGASPTextBox("txtNGASP");
        span7.appendChild(txtNGASP);
        span7.style.padding='0px 0px 0px 8px';

        var span8=document.createElement('span');
        var txtDrainage = GetDrainageTextBox("txtDrainage");
        span8.appendChild(txtDrainage);
        span8.style.padding='0px 0px 0px 8px';

        var span9=document.createElement('span');
        var txtMisc = GetMiscTextBox("txtMisc");
        span9.appendChild(txtMisc);
        span9.style.padding='0px 0px 0px 8px';
        
        newCell.appendChild(span6);
        newCell.appendChild(span7);
        newCell.appendChild(span8);
        newCell.appendChild(span9);
        
        
        newCell = newRow.insertCell();
        var spanImg = document.createElement('span'); spanImg.onmouseover = function() { tooltip.show('Remove?'); }; spanImg.onmouseout = function() { tooltip.hide(); };
        var imgBtnDelete = document.createElement('image'); imgBtnDelete.onmouseover = function() { imgBtnDelete.style.cursor = 'hand'; };
        imgBtnDelete.onmouseout = function() { imgBtnDelete.style.cursor = 'none'; }; imgBtnDelete.id = 'imgBtnDelete' + index;
        imgBtnDelete.onclick = function() { return RemoveService(lblSNo.innerHTML); }; 
        imgBtnDelete.src = '../../Images/Grid_Icons/delete.png';
        spanImg.appendChild(imgBtnDelete);
        newCell.appendChild(spanImg);
        document.getElementById('ctl00_ContentPlaceHolder1_hdnHTMLstring').value = gvDetails.innerHTML;

        index++;
    }
    catch (e)
            { }
}

function GetVarcharTextBox(value) {
    var textBox;
    textBox = document.createElement('input'); textBox.id = value + index; textBox.type = 'text'; textBox.style.width = '80px'; textBox.className = 'formtextbox'; 
    textBox.onkeypress = function() { return numeralsOnly(event); };
    return textBox;
}

function GetNumericBox(value) {
    var textBox;
    textBox = document.createElement('input'); textBox.id = value + index; textBox.type = 'text'; textBox.style.width = '80px'; textBox.className = 'formtextbox'; textBox.onkeypress = function() { return isNumericKeyStroke(this);};
    return textBox;
}
function GetTimeTextBox(value)
{
    var textBox;
    var n;
    var x;
    var y;
    var z;
    textBox = document.createElement('input'); textBox.id = value + index; textBox.type = 'text'; textBox.style.width = '80px'; textBox.className = 'formtextbox'; var date=new Date();var hrs=date.getHours();var mins=date.getMinutes(); var sec=date.getSeconds();
    if(hrs<10)
      x='0'+hrs;
    else
      x=hrs;
    if(hrs<=12)
       n='AM';
     else
       n='PM';
    if(mins<10)
      y='0'+mins;
    else
      y=mins;
    if(sec<10)
      z='0'+sec;
    else
      z=sec;
    textBox.value=x+':'+y+':'+z+' '+n;
    return textBox;
}
function GetBPTextBox(value)
{
    var textBox;
    textBox = document.createElement('input'); textBox.id = value + index; textBox.type = 'text'; textBox.style.width = '80px'; textBox.className = 'formtextbox';   textBox.onkeypress = function() { return CheckNumber(this);};
    return textBox;
}
function GetPulseTextBox(value)
{
    var textBox;
    textBox = document.createElement('input'); textBox.id = value + index; textBox.type = 'text'; textBox.style.width = '80px'; textBox.className = 'formtextbox';  textBox.onkeypress = function() { return CheckNumber(this);};
    return textBox;
}
function GetRespTextBox(value)
{
    var textBox;
    textBox = document.createElement('input'); textBox.id = value + index; textBox.type = 'text'; textBox.style.width = '80px'; textBox.className = 'formtextbox';  textBox.onkeypress = function() { return CheckNumber(this);};
    return textBox;
}
function GetTemperatureBox(value)
{
    var textBox;
    textBox = document.createElement('input'); textBox.id = value + index; textBox.type = 'text'; textBox.style.width = '80px'; textBox.className = 'formtextbox'; textBox.onkeypress = function() { return CheckNumber(this);};
    return textBox;
}
function GetCVPBox(value)
{
    var textBox;
    textBox = document.createElement('input'); textBox.id = value + index; textBox.type = 'text'; textBox.style.width = '80px'; textBox.className = 'formtextbox'; textBox.onkeypress = function() { return CheckNumber(this);};
    return textBox;
}
function GetIntraFluidTextBox(value)
{
  var textBox;
  textBox=document.createElement('input');textBox.id=value+index;textBox.type='text';textBox.className='formtextbox'; textBox.onkeypress = function() { return CheckNumber(this);};
  textBox.style.width='103px';
  return textBox;
}
function GetHrlyTextBox(value)
{
  var textBox;
  textBox=document.createElement('input');textBox.id=value+index;textBox.type='text';textBox.style.width='105px';textBox.className='formtextbox';textBox.value='0';
   return textBox;
}
function GetTotalTextBox(value)
{
  var textBox;
  textBox=document.createElement('input');textBox.id=value+index;textBox.type='text';textBox.style.width='106px';textBox.className='formtextbox';textBox.onkeypress=function(){return CheckNumber(event); };textBox.value='0';
   return textBox;
}
function GetOralFluidTextBox(value)
{
  var textBox;
  textBox=document.createElement('input');textBox.id=value+index;textBox.type='text';textBox.style.width='104px';textBox.className='formtextbox';
   return textBox;
}
function GetAmtBox(value)
{
  var textBox;
  textBox=document.createElement('input');textBox.id=value+index;textBox.type='text';textBox.style.width='108px';textBox.className='formtextbox';textBox.onkeypress=function(){return CheckNumber(event); };textBox.value='0';
   return textBox;
}
function GetUrineTextBox(value)
{
  var textBox;
  textBox=document.createElement('input');textBox.id=value+index;textBox.type='text';textBox.style.width='50px';textBox.className='formtextbox';textBox.onkeypress=function(){return CheckNumber(event); };textBox.value='0';
   return textBox;
}
function GetNGASPTextBox(value)
{
  var textBox;
  textBox=document.createElement('input');textBox.id=value+index;textBox.type='text';textBox.style.width='50px';textBox.className='formtextbox';textBox.onkeypress=function(){return CheckNumber(event); };textBox.value='0';
   return textBox;
}
function GetDrainageTextBox(value)
{
  var textBox;
  textBox=document.createElement('input');textBox.id=value+index;textBox.type='text';textBox.style.width='50px';textBox.className='formtextbox';textBox.onkeypress=function(){return CheckNumber(event); };textBox.value='0';
   return textBox;
}
function GetMiscTextBox(value)
{
  var textBox;
  textBox=document.createElement('input');textBox.id=value+index;textBox.type='text';textBox.style.width='108px';textBox.className='formtextbox';textBox.onblur=function(){ return fn_AddFilterRow();};
  
   return textBox;
}
function GetTable(value)
{
    var table=document.createElement('table');
    var tr=document.createElement('tr');

    var td1=document.createElement('td');
    var txtIntraFluid = GetIntraFluidTextBox("txtIntraFluid");
    td1.appendChild(txtIntraFluid);
    tr.appendChild(td1);
    
    var td2=document.createElement('td');
    var txtHrly = GetHrlyTextBox("txtHrly");
    td2.appendChild(txtHrly);
    tr.appendChild(td2);

    var td3=document.createElement('td');
    var txtTotal = GetTotalTextBox("txtTotal");
    td3.appendChild(txtTotal);
    tr.appendChild(td3);

    var td4=document.createElement('td');
    var txtOralFluid = GetOralFluidTextBox("txtOralFluid");
    td4.appendChild(txtOralFluid);
    tr.appendChild(td4);

    var td5=document.createElement('td');
    var txtAmt = GetAmtBox("txtAmt");
    td5.appendChild(txtAmt);
    tr.appendChild(td5);
    
    table.appendChild(tr);
    return table;
    
}

function DelGridrow(rowIndex) 
{
    var gridID = document.getElementById('ctl00_ContentPlaceHolder1_gvDetails');
    gridID.deleteRow(rowIndex);
    try {
            while (rowIndex < gridID.rows.length) 
            {
                if (gridID.rows[rowIndex].cells[0].childNodes[0].childNodes[1].outerHTML != 'undefined')
                    gridID.rows[rowIndex].cells[0].childNodes[0].childNodes[1].outerHTML = '<LABEL>' + rowIndex + '</LABEL>';
                rowIndex++;
            }
            if (gridID.rows.length == 1 || (gridID.rows.length == 0 && gridID != null))
                fn_AddFilterRow();
       }
    catch (e) 
      {

      }
}


function IsMandatoryFieldsNull(obj) 
{
    if (document.getElementById('ctl00_ContentPlaceHolder1_IPPatientDtls1_ucUmrNo_txtSearchControl').value == '') {
        return false;
    }
    var grid = document.getElementById('ctl00_ContentPlaceHolder1_gvDetails');
    document.getElementById('ctl00_ContentPlaceHolder1_hdnHTMLstring').value = grid.innerHTML;
    return ConfirmationRequiredForSave(obj);
}

function ClearDetails() 
{
    ClearControlValues();
    var gvDetails = document.getElementById('ctl00_ContentPlaceHolder1_gvDetails');
    if (gvDetails != null) 
    {
        if (gvDetails.rows.length > 0) 
        {
            var count = gvDetails.rows.length;
            for (i = 1; i < count - 1; i++) 
            {
                gvDetails.deleteRow();
            }
        }
            gvDetails.rows[1].cells[2].childNodes[0].value='';
            gvDetails.rows[1].cells[3].childNodes[0].value='';
            gvDetails.rows[1].cells[4].childNodes[0].value='';
            gvDetails.rows[1].cells[5].childNodes[0].value='';
            gvDetails.rows[1].cells[6].childNodes[0].value='';
            gvDetails.rows[1].cells[7].childNodes[0].childNodes[0].childNodes[0].childNodes[0].childNodes[0].value='';
            gvDetails.rows[1].cells[7].childNodes[0].childNodes[0].childNodes[0].childNodes[1].childNodes[0].value='';
            gvDetails.rows[1].cells[7].childNodes[0].childNodes[0].childNodes[0].childNodes[2].childNodes[0].value='';
            gvDetails.rows[1].cells[7].childNodes[0].childNodes[0].childNodes[0].childNodes[3].childNodes[0].value='';
            gvDetails.rows[1].cells[7].childNodes[0].childNodes[0].childNodes[0].childNodes[4].childNodes[0].value='';
            gvDetails.rows[1].cells[8].childNodes[0].childNodes[0].childNodes[0].childNodes[0].childNodes[0].value='';
            gvDetails.rows[1].cells[8].childNodes[0].childNodes[0].childNodes[0].childNodes[1].childNodes[0].value='';
            gvDetails.rows[1].cells[8].childNodes[0].childNodes[0].childNodes[0].childNodes[2].childNodes[0].value='';
            gvDetails.rows[1].cells[8].childNodes[0].childNodes[0].childNodes[0].childNodes[3].childNodes[0].value='';
     }
    
    
}

/*------------------------------------------Allow only numbers------------------------------------------------------------------*/

function CheckNumber(e) 
{
    var charCode =(window.event.which) ? window.event.which : window.event.keyCode;
    if (charCode == 9 || charCode == 8 || (charCode > 95 && charCode <106))
        return false;
    if ((charCode == 45)||(charCode == 46) || (charCode >= 48 && charCode <= 57)) {
        e.returnValue = true;
        return true;
    }
    e.returnValue = false;
    return false;
}


/* --------------------------- Allow Only charecters ------------*/



function OnlyCharecters(evt) 
{
    evt = (evt) ? evt : event;
    var charCode = (evt.charCode) ? evt.charCode : ((evt.keyCode) ? evt.keyCode : ((evt.which) ? evt.which : 0));
    if (charCode > 30 && (charCode < 65 || charCode > 90) && (charCode < 97 || charCode > 122)) 
    {
        //alert("Enter letters only.");
        if(charCode==32)//to allow space and dot
            return true;
            if(charCode==46)
            return true;
        return false;
    }
    return true;
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

//TextBox allow only characters	
	
function AllowAlphabet(e)
{
	isIE=document.all? 1:0
	keyEntry = !isIE? e.which:event.keyCode;
	if(((keyEntry >= '65') && (keyEntry <= '90')) || ((keyEntry >= '97') && (keyEntry <= '122'))) 
		return true;  
	else
		return false;
}

/*--------------------------------------------- PAGE VALIDATION ON NULL VALUE ----------------------------------------------------*/
function OnNullValue(controlId) {
    if (controlId == null)
        return false;
    if (controlId.tagName == 'INPUT') {
        if (controlId.value == '') {
            //controlId.style.borderColor ="#ffaa00";
            controlId.style.border = "1px solid #f4785e";
            return false;
        }
    }
    if (controlId.tagName == 'SELECT') {
        if (controlId[0].selected == true) {
            controlId.style.border = "1px solid #f4785e";
            return false;
        }
    }
    controlId.style.border = "1px solid #bebebe";
}


function RemoveService(rowIndex) 
{
debugger;
    var grid = document.getElementById('ctl00_ContentPlaceHolder1_gvDetails');
    var Index = 1;
    if (rowIndex == undefined ) {
        if (confirm('Are you sure,you want to Remove Entry?'))
            DelGridrow(1);
        return false;
    }
    if (rowIndex == undefined && grid.rows[1].cells[0].childNodes[0].childNodes[0].value != '')
        rowIndex = grid.rows[1].cells[0].childNodes[0].childNodes[0].value;

    if (rowIndex != '') 
    {
        if ( grid.rows[1].cells[2].childNodes[0].value== '' || grid.rows[1].cells[3].childNodes[0].value=='') 
        {
            alert('No Entries existed to remove.');
            return false;
        }
        if (confirm('Are you sure,you want to Remove Entry?')) 
        {
            if (rowIndex < grid.rows.length) 
            {
                DelGridrow(rowIndex);
                return false;
            }
        }
        else
            return false;
    }
    else 
    {
        alert('No Entries existed to remove.');
        return false;
    }
}