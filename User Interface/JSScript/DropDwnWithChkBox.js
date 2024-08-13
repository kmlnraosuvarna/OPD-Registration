
var Browser = {
    Version: function() {
        var version = 999; 
        if (navigator.appVersion.indexOf("MSIE") != -1)
            version = parseFloat(navigator.appVersion.split("MSIE")[1]);
        return version;
    }
}

function showIE6Tooltip(e) {
    if (navigator.appName == 'Microsoft Internet Explorer' && Browser.Version() == 6) {
        if (!e) { var e = window.event; }
        var obj = e.srcElement;

        tempX = event.clientX + (document.documentElement.scrollLeft || document.body.scrollLeft);
        tempY = event.clientY + (document.documentElement.scrollTop || document.body.scrollTop);

        var tooltip = document.getElementById('ie6SelectTooltip');
        tooltip.innerHTML = obj.options.title; /*set the title to the div,display the tooltip based on the mouse location*/
        tooltip.style.left = tempX;
        tooltip.style.top = tempY + 10;
        tooltip.style.width = '100%';
        tooltip.style.display = 'block';
    }
}
function hideIE6Tooltip(e) {
    if (navigator.appName == 'Microsoft Internet Explorer' && Browser.Version() == 6) {
        var tooltip = document.getElementById('ie6SelectTooltip');
        tooltip.innerHTML = '';
        tooltip.style.display = 'none';
    }
}

function getCheckBoxListItemsChecked(elementId) {

    var elementRef = document.getElementById(elementId);
    var checkBoxArray = elementRef.getElementsByTagName('input');
    var checkedValues = '';
    var checkedText = '';
    var checkedSelIndex = '';
    var myCheckBox = new Array();

    for (var i = 0; i < checkBoxArray.length; i++) {
        var checkBoxRef = checkBoxArray[i];

        if (checkBoxRef.checked == true) {

            
            if (checkedSelIndex.length > 0)
                checkedSelIndex += ', ';
            checkedSelIndex += i;

            if (checkedValues.length > 0)
                checkedValues += ', ';

            checkedValues += checkBoxRef.value;

            var labelArray = checkBoxRef.parentNode.getElementsByTagName('label');

            if (labelArray.length > 0) {
                if (checkedText.length > 0)
                    checkedText += ', ';
                checkedText += labelArray[0].innerHTML;
            }

        }
    }

    myCheckBox[0] = checkedText;
    myCheckBox[1] = checkedValues;
    myCheckBox[2] = checkedSelIndex;

    return myCheckBox;
}
var samplepatcount = 0;
var flag = 0;
var flagDoc = 0;

function readCheckBoxList(chkBox, ddlList, hiddenFieldText, hiddenFieldValue, hiddenFieldSelIndex) {
    var due_flag = 'N';
    var Concess_flag = 'N';
    var checkedItems = getCheckBoxListItemsChecked(chkBox);
    $get(ddlList).options[0].innerHTML = checkedItems[0]; 
    $get(ddlList).title = checkedItems[0]; 
    $get(hiddenFieldValue).value = checkedItems[1];
    $get(hiddenFieldText).value = checkedItems[0];
    $get(hiddenFieldSelIndex).value = checkedItems[2];
     var chkbccoll=document.getElementById('ctl00_ContentPlaceHolder1_chkmodeComm_hf_checkBoxValue').value;
      var chkbxlist= chkbccoll.split(',');
      var chkbxnamecoll=document.getElementById('ctl00_ContentPlaceHolder1_chkmodeComm_hf_checkBoxText').value;
      var chkbxnamelist = chkbxnamecoll.split(',');

      for (var i = 0; i < chkbxlist.length; i++)
   {

       if ((chkbxlist[i] == '9' || chkbxlist[i] == ' 9') && (chkbxnamelist[i] == 'Home Delivery' || chkbxnamelist[i] == ' Home Delivery') && document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_hdnFormName').value == 'SampleOpBilling' && samplepatcount < 1) {
           opsampleregPatientService();
           samplepatcount += 1;
       }
       else if ((chkbxlist[i] == '5' || chkbxlist[i] == ' 5') && (chkbxnamelist[i] == 'Patient Email' || chkbxnamelist[i] == ' Patient Email') && document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_hdnFormName').value == 'SampleOpBilling' && flag < 1) {

           OnPatientEmailValidation();
           flag += 1;
       }
       else if ((chkbxlist[i] == '6' || chkbxlist[i] == ' 6') && (chkbxnamelist[i] == 'Doctor Email' || chkbxnamelist[i] == ' Doctor Email') && document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_hdnFormName').value == 'SampleOpBilling' && flagDoc < 1) {
           OnDoctorEmailValidation();
           flagDoc += 1;
       }
    /*   else if ((chkbxlist[i] == '1' || chkbxlist[i] == ' 1') && (chkbxnamelist[i] == 'Op Concession' || chkbxnamelist[i] == ' Op Concession')) {
       Concess_flag = 'Y';
       }
       else if ((chkbxlist[i] == '2' || chkbxlist[i] == ' 2') && (chkbxnamelist[i] == 'Op Credit' || chkbxnamelist[i] == ' Op Credit')) {
       due_flag = 'Y';
       } */
       /* commented by pushkar because not required  For Authorization */
       
       else {
       }
   }
 /*  if (Concess_flag == 'Y' && due_flag == 'Y') {
       blockanddisplay('table-cell', 'table-cell', 'table-cell');
   }
  else if (Concess_flag == 'Y') {
      blockanddisplay('table-cell', 'none', 'table-cell');
    }
   else if (due_flag == 'Y') {
       blockanddisplay('none', 'table-cell', 'table-cell');
   }
   else {
       blockanddisplay('none', 'none', 'none');
    } */
   /* commented by pushkar because not required  For Authorization*/

}
