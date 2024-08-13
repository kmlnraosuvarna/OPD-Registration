function ConfirmationRequiredForSave(obj)
{
    var SaveAlert=document.getElementById(obj);
    if (SaveAlert != null) {
        if (SaveAlert.value == '2') {
            DisableKeys();
            return true;
        }
        else {
            $(".smessagebox").scustommessagebox(2, "", "Do you want to save the record?.", onOkClick, '', OnCancelConfirmation);
        }
    }
}
function onOkClick() {
    $('#progress').show();
    OnsuccesssaveConfirmation();
}
function ConfirmationRequiredForSaveNew(obj) {
    if (obj == '1') {
        if (confirm('Do you want to save the record?.')) {
            DisableKeys();
            return true;
        }
        else {
            EnableKeys();
            return false;
        }
    }
    else {
        DisableKeys();      
        return true;
    }
}
 function ClearAllControls()
        {
              for (i=0; i<document.forms[0].length; i++)
              {
                    doc = document.forms[0].elements[i];
                    switch (doc.type)
                    {
                        case "text" :
                                doc.value = "";
                                break;
                          case "checkbox" :
                                doc.checked = false;
                                break;   
                          case "radio" :
                                doc.checked = false;
                                break;  
                                
                          case "textarea":
                              doc.value="";
                              break;
                          case "select-one":
                              if (doc.options != "") {
                                  if (doc.options[doc.selectedIndex] >= 0) {
                                      doc.options[doc.selectedIndex].selected = false;
                                  }
                              }
                              break;                     
                          case "select-multiple" :
                                while (doc.selectedIndex != -1)
                                {
                                      indx = doc.selectedIndex;
                                      doc.options[indx].selected = false;
                                }
                                doc.selected = false;
                                break;
                                   
                          default :
                                break;
                    }                    
              }              
              return false;
          }


          function EnableKeys() {
              var arr = new Array(32, 13,116);
              $(document).keydown(function(e) {
                  var key = e.which;
                  if ($.inArray(key, arr) > -1) {
                      return true;
                  }
              });
          }

          function DisableKeys() {
              var arr = new Array(32, 13,116);
              $(document).keydown(function(e) {
                  var key = e.which;
                  if ($.inArray(key, arr) > -1) {
                      e.preventDefault();
                      return false;
                  }
                  return true;
              });
          }