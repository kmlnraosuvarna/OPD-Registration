         function onValidation()
         {
         var _Umr= document.getElementById('ctl00_ContentPlaceHolder1_UCUMRNO_ucUmrNo_txtSearchControl').value;
          var _AuthorisedBy= document.getElementById('ctl00_ContentPlaceHolder1_ucAuth_txtSearchControl').value;
         if(_Umr == '')
         {
           alert('Please Enter Umr #.');
           return false;
         }
         
          if(_AuthorisedBy == '')
         {
           alert('Please Enter Authorised By');
           return false;
         }
         
        }
        function OnPageValidation()
             {
            var _chkValidation = true;
            var _ctrls = new Array();
            _ctrls[0] = 'ctl00_ContentPlaceHolder1_ucAuth_txtSearchControl';
             _ctrls[1] = 'ctl00_ContentPlaceHolder1_txtRemarks';
             _ctrls[2]= 'ctl00_ContentPlaceHolder1_UCUMRNO_ucUmrNo_txtSearchControl';
            for (var i = 0; i < _ctrls.length; i++) {
                var ctrl = document.getElementById(_ctrls[i]);
                if (OnNullValue(ctrl) == false) {
                    _chkValidation = false;
                }
            }
            return _chkValidation;
        }   
        function pageLoad(sender, args) {
            
            OnPageValidation();
             document.getElementById('ctl00_ContentPlaceHolder1__uPnl').className = 'UpDt';
           
        }
        function ClearDetails() {
            document.getElementById('ctl00_ContentPlaceHolder1_UCUMRNO_txtYs').value = '';
            document.getElementById('ctl00_ContentPlaceHolder1_UCUMRNO_txtMs').value = '';
            document.getElementById('ctl00_ContentPlaceHolder1_UCUMRNO_txtDs').value = '';
            document.getElementById('ctl00_ContentPlaceHolder1_UCUMRNO_txtRegNo').value = '';
            document.getElementById('ctl00_ContentPlaceHolder1_UCUMRNO_txtPatName').value = '';
            document.getElementById('ctl00_ContentPlaceHolder1_UCUMRNO_txtPatType').value = '';
            document.getElementById('ctl00_ContentPlaceHolder1_UCUMRNO_ucUmrNo_txtSearchControl').value = '';
            document.getElementById('ctl00_ContentPlaceHolder1_UCUMRNO_txtConsult').value = '';
            document.getElementById('ctl00_ContentPlaceHolder1_UCUMRNO_txtConsult').value = '';
            document.getElementById('ctl00_ContentPlaceHolder1_UCUMRNO_txtWard').value = '';
            document.getElementById('ctl00_ContentPlaceHolder1_UCUMRNO_txtAdminDt').value = '';
            document.getElementById('ctl00_ContentPlaceHolder1_UCUMRNO_txtCropName').value = '';
            document.getElementById('ctl00_ContentPlaceHolder1_UCUMRNO_txtGender').value = '';
            document.getElementById('ctl00_ContentPlaceHolder1_UCUMRNO_txtRoom').value = '';
            document.getElementById('ctl00_ContentPlaceHolder1_UCUMRNO_txtBed').value = '';
            document.getElementById('ctl00_ContentPlaceHolder1_UCUMRNO_txtUmrNo').value='';
            document.getElementById('ctl00_ContentPlaceHolder1_ucAuth_txtSearchControl').value = '';
            document.getElementById('ctl00_ContentPlaceHolder1_txtRemarks').value = '';

            return false;
        }
        
       function OnIPSelection(_d){
        AssignIPPatDtls(_d);
        }
        function OnAuthorize(input){
       $('#ctl00_ContentPlaceHolder1_ucAuth_txtSearchControl').val(input["_lktext"]);
       $('#ctl00_ContentPlaceHolder1_hdnAuthBy').val(input.AUTH_ID);
       }
      
        
   
 