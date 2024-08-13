function pageLoad() {
    
            var _chkValidation = true;
            var _ctrls = new Array();
            
           
            _ctrls[0] = document.getElementById('ctl00_ContentPlaceHolder1_txtTradeName');
            _ctrls[1] = document.getElementById('ctl00_ContentPlaceHolder1_txtShortName');
           
              for (var i = 0; i < _ctrls.length; i++) {
                var ctrl = _ctrls[i];
                if (OnNullValue(ctrl) == false) {
               
                    _chkValidation = false;
                }
            }
           
             return _chkValidation;
      }
      
   function ChkValidation()
   {
                    var txttrade= document.getElementById('ctl00_ContentPlaceHolder1_txtTradeName').value;
                    var txtsrt=document.getElementById('ctl00_ContentPlaceHolder1_txtShortName').value;
   
          
   
             
   }
        function ClearControls()
                    {
                       document.getElementById('ctl00_ContentPlaceHolder1_txtTradeName').value='';
                       document.getElementById('ctl00_ContentPlaceHolder1_ddlItemLevel').selectedIndex=0;
                       document.getElementById('ctl00_ContentPlaceHolder1_txtRegdName').value='';
                       document.getElementById('ctl00_ContentPlaceHolder1_txtShortName').value='';
                       document.getElementById('ctl00_ContentPlaceHolder1_txtGlobalId').value='';
                       document.getElementById('ctl00_ContentPlaceHolder1_txtReg').value='';
                       document.getElementById('ctl00_ContentPlaceHolder1_txtTax').value='';
                       document.getElementById('ctl00_ContentPlaceHolder1_txtLST').value='';
                       document.getElementById('ctl00_ContentPlaceHolder1_txtCST').value='';
                       document.getElementById('ctl00_ContentPlaceHolder1_txtDL').value='';
                      // document.getElementById('ctl00_ContentPlaceHolder1_txtTelephone').value='';
                       document.getElementById('ctl00_ContentPlaceHolder1_txtContactPerson').value='';
                       document.getElementById('ctl00_ContentPlaceHolder1_txtMobileNo').value='';
                       document.getElementById('ctl00_ContentPlaceHolder1_txtTelex').value='';
                       document.getElementById('ctl00_ContentPlaceHolder1_txtfaxno').value='';
                       document.getElementById('ctl00_ContentPlaceHolder1_txtEMail').value='';
                       document.getElementById('ctl00_ContentPlaceHolder1_ucAddressDetails_txtAddress1').value='';
                       document.getElementById('ctl00_ContentPlaceHolder1_ucAddressDetails_txtPhone').value='';
                       document.getElementById('ctl00_ContentPlaceHolder1_ucAddressDetails_ucArea_txtSearchControl').value='';
                       document.getElementById('ctl00_ContentPlaceHolder1_ucAddressDetails_ucCity_txtSearchControl').value='';
                       document.getElementById('ctl00_ContentPlaceHolder1_ucAddressDetails_ucState_txtSearchControl').value='';
                       document.getElementById('ctl00_ContentPlaceHolder1_ucAddressDetails_ucCountry_txtSearchControl').value='';
                       document.getElementById('ctl00_ContentPlaceHolder1_ucAddressDetails_txtPin').value='';
                      return false;
                    }
                    