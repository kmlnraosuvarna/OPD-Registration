        function pageLoad() {
            onCheck();
            OnPageValidation();
            document.getElementById('ctl00_ContentPlaceHolder1__uPnl').className = 'UpDt';
        }
        function OnPageValidation() {

            _chkValidation = true;
            _controls = new Array();
            _controls[0] = 'ctl00_ContentPlaceHolder1_UcpatientDl_ucUMRno_txtSearchControl';
            _controls[1] = 'ctl00_ContentPlaceHolder1_ucConsultant_txtSearchControl';
            _controls[3] = 'ctl00_ContentPlaceHolder1_ddlDisType';
            var dueamnt = document.getElementById('ctl00_ContentPlaceHolder1_txtDueAmt').innerHTML;
            if (dueamnt != "0") {
                _controls[2] = 'ctl00_ContentPlaceHolder1_ucDueRef_txtSearchControl';
                _controls[5] = 'ctl00_ContentPlaceHolder1_txtDignosis';
            }
            else {
                document.getElementById('ctl00_ContentPlaceHolder1_ucDueRef_txtSearchControl').enabled = false;
            }
            _controls[4] = 'ctl00_ContentPlaceHolder1_ucApprovedBy_txtSearchControl';

            return OnValidation();
        }

        function OnValidation() {
            for (var _index = 0; _index < _controls.length; _index++) {
                var _control = document.getElementById(_controls[_index]);
                if (OnNullValue(_control) == false) {
                    _chkValidation = false
                }
            }
            return true;
        }
        function chkSaveValidation() {
            var txtUmrCode = document.getElementById('ctl00_ContentPlaceHolder1_UcpatientDl_ucUmrNo_txtSearchControl').value;
            var txtConsultCode = document.getElementById('ctl00_ContentPlaceHolder1_ucConsultant_txtSearchControl').value;
            var txtDuerefname = document.getElementById('ctl00_ContentPlaceHolder1_ucDueRef_txtSearchControl').value;
            var txtDistype = document.getElementById('ctl00_ContentPlaceHolder1_ddlDisType').selectedIndex;
            var txtRevwDT = document.getElementById('ctl00_ContentPlaceHolder1_txtRvwDT').value;
            var dueamount = document.getElementById('ctl00_ContentPlaceHolder1_txtDueAmt').innerHTML;
            var ChkBox = document.getElementById('ctl00_ContentPlaceHolder1_chkbox');
            var txtremarks = document.getElementById('ctl00_ContentPlaceHolder1_txtDignosis').value;
          
            if (txtUmrCode == "") {
                alert('Please Enter Umr No.');
                document.getElementById('ctl00_ContentPlaceHolder1_UcpatientDl_ucUmrNo_txtSearchControl').focus();
                return false;
            }
            if (txtConsultCode == "") {
                alert('Please Enter Consult Doctor Name');
                document.getElementById('ctl00_ContentPlaceHolder1_ucConsultant_txtSearchControl').focus();
                return false;
            }
            
            if ((txtDuerefname == "") && (dueamount != "0")) {
                alert('Please enter the due referral name!');
                document.getElementById('ctl00_ContentPlaceHolder1_ucDueRef_txtSearchControl').focus();
                return false;
            }

            if (txtDistype == "0") {
                alert('Please Select Discharge Type');
                document.getElementById('ctl00_ContentPlaceHolder1_ddlDisType').focus();
                return false;
            }

            if (ChkBox != null && ChkBox != undefined && ChkBox.checked == true) {
                if (txtremarks == "") {
                    alert('Please enter your remarks!');
                    document.getElementById('ctl00_ContentPlaceHolder1_txtDignosis').focus();
                    return false;
                }
            }
            else if (dueamount != "0") {
                if (txtremarks == "") {
                    alert('Please enter your remarks!');
                    document.getElementById('ctl00_ContentPlaceHolder1_txtDignosis').focus();
                    return false;
                }
            }

        }

        function OnGetAge(obj) {
            var endDate = new Date().format('MM/dd/yyyy');
            var stdate = obj._selectedDate.format('MM/dd/yyyy');
            if (stdate < endDate) {
                alert("Review date should be a future date!");
                obj._selectedDate = new Date();
                obj._textbox.set_Value(obj._selectedDate.format(obj._format))
                return false;
            }
        }
        function ValidateDate() {

            var fromDate = document.getElementById('ctl00_ContentPlaceHolder1_txtDisDT').value;
            var toDate = document.getElementById('ctl00_ContentPlaceHolder1_txtRvwDT').value;
            var alertReason1 = 'Review Date  must be greater than or equal to Discharge Date.'

            var endDate = new Date(toDate);
            var startDate = new Date(fromDate);
            if (fromDate == '' && toDate == '') {
                alert("Please enter date period!");
                return false;
            }
            else if (fromDate == '') {
                alert("Please enter date period! ");
                return false;
            }
            else if (toDate == '') {
                alert("Please enter date! ");
                return false;
            }
            else if (fromDate != '' && toDate != '' && startDate > endDate) {
                alert(alertReason1);

                document.getElementById('ctl00_ContentPlaceHolder1_txtRvwDT').value = '';
                document.getElementById('ctl00_ContentPlaceHolder1_txtRvwDT').focus();
                return false;
            }
        }
        function ShowApprove(event) {

            var rblApprove = document.getElementById('ctl00_ContentPlaceHolder1_rblApprovStatus');
            var rblAp0 = document.getElementById('ctl00_ContentPlaceHolder1_rblApprovStatus_0');
            var rblAp1 = document.getElementById('ctl00_ContentPlaceHolder1_rblApprovStatus_1');
            var tdApprove = document.getElementById('ctl00_ContentPlaceHolder1_trApprove');
            if (rblAp1.checked == true) {
                tdApprove.style.display = 'block';

                var txtApprovlCode = document.getElementById('ctl00_ContentPlaceHolder1_ucApprovedBy_txtSearchControl');
                var txtDuerefname = document.getElementById('ctl00_ContentPlaceHolder1_txtAppDt');
                txtApprovlCode.style.border = "1px solid #f4785e";
                txtDuerefname.style.border = "1px solid #f4785e";
            }
            else {
                tdApprove.style.display = 'none';
            }
        }
        function ClearControlValues() {
            document.getElementById('ctl00_ContentPlaceHolder1_ucConsultant_txtSearchControl').value = '';
            document.getElementById('ctl00_ContentPlaceHolder1_UcpatientDl_txtUmrNo').value = '';
            document.getElementById('ctl00_ContentPlaceHolder1_UcpatientDl_txtStatus').value = '';
            document.getElementById('ctl00_ContentPlaceHolder1_UcpatientDl_txtYs').value = '';
            document.getElementById('ctl00_ContentPlaceHolder1_UcpatientDl_txtMs').value = '';
            document.getElementById('ctl00_ContentPlaceHolder1_UcpatientDl_txtDs').value = '';
            document.getElementById('ctl00_ContentPlaceHolder1_UcpatientDl_txtRegNo').value = '';
            document.getElementById('ctl00_ContentPlaceHolder1_UcpatientDl_txtPatName').value = '';
            document.getElementById('ctl00_ContentPlaceHolder1_UcpatientDl_txtPatType').value = '';
            document.getElementById('ctl00_ContentPlaceHolder1_UcpatientDl_txtAdminNo').value = '';
            document.getElementById('ctl00_ContentPlaceHolder1_UcpatientDl_txtConsult').value = '';
            document.getElementById('ctl00_ContentPlaceHolder1_UcpatientDl_txtConsult').value = '';
            document.getElementById('ctl00_ContentPlaceHolder1_UcpatientDl_txtWard').value = '';
            document.getElementById('ctl00_ContentPlaceHolder1_UcpatientDl_txtAdminDt').value = '';
            document.getElementById('ctl00_ContentPlaceHolder1_UcpatientDl_txtCropName').value = '';
            document.getElementById('ctl00_ContentPlaceHolder1_UcpatientDl_txtRoom').value = '';
            document.getElementById('ctl00_ContentPlaceHolder1_UcpatientDl_txtBed').value = '';
            document.getElementById('ctl00_ContentPlaceHolder1_UcpatientDl_txtGender').value = '';
            document.getElementById('ctl00_ContentPlaceHolder1_txtBillNo').value = '';
            document.getElementById('ctl00_ContentPlaceHolder1_txtBillDT').value = '';
            document.getElementById('ctl00_ContentPlaceHolder1_txtGrossAmt').value = '';
            document.getElementById('ctl00_ContentPlaceHolder1_txtConcession').value = '';
            document.getElementById('ctl00_ContentPlaceHolder1_txtPostDiscount').value = '';
            document.getElementById('ctl00_ContentPlaceHolder1_txtTotalAdv').value = '';
            document.getElementById('ctl00_ContentPlaceHolder1_txtRecvAmt').value = '';
            document.getElementById('ctl00_ContentPlaceHolder1_txtDueAmt').value = '';
            document.getElementById('ctl00_ContentPlaceHolder1_txtRefndAmt').value = '';

        }
        
        function CheckEditDschrgDate(sender, args) {
            var selectDt = sender._selectedDate.format('dd-MMM-yyyy');
            var ResetDt = new Date().format('dd-MMM-yyyy hh:MM:ss');
            var currDt = new Date().format("dd-MMM-yyyy");
            var Admindt = document.getElementById('ctl00_ContentPlaceHolder1_UcpatientDl_txtAdminDt').value;
            var date = new Date();
            var hours = date.getHours();
            var minutes = date.getMinutes();
            var Seconds = date.getSeconds();

            if (document.getElementById('ctl00_ContentPlaceHolder1_UcpatientDl_ucUmrNo_txtSearchControl').value == '') {
                alert('Please Select Patient');
                document.getElementById('ctl00_ContentPlaceHolder1_txtDisDT').value = currDt + " " + hours + ":" + minutes + ":" + Seconds;
                return false;
            }
            if (selectDt.length == 10) {
                var sedt = selectDt;
                var currDt = new Date().format('dd-MMM-yyyy');
                var result = CompareDates(sedt, currDt);
                if (result == "d1>=d2") {
                    alert('You Can not Select Day After Today');
                    document.getElementById('ctl00_ContentPlaceHolder1_txtDisDT').value = currDt + " " + hours + ":" + minutes + ":" + Seconds;
                    return false;
                }
                else {
                    var AdmnResult = CompareDates(sedt, Admindt);
                    if (AdmnResult == "d1<d2") {
                        alert('You Can not Select Before Admission Date');
                        document.getElementById('ctl00_ContentPlaceHolder1_txtDisDT').value = currDt + " " + hours + ":" + minutes + ":" + Seconds;
                        return false;
                    }
                    document.getElementById('ctl00_ContentPlaceHolder1_txtDisDT').value = selectDt + " " + hours + ":" + minutes + ":" + Seconds;
                }
            }
            else if (selectDt.length == 11) {
                var sedt = selectDt;
                var currDt = new Date().format('dd-MMM-yyyy');
                var result = CompareDates(sedt, currDt);
                if (result == "d1>=d2") {
                    alert('You Can not Select Day After Today');
                    document.getElementById('ctl00_ContentPlaceHolder1_txtDisDT').value = currDt + " " + hours + ":" + minutes + ":" + Seconds;
                    document.getElementById('ctl00_ContentPlaceHolder1_hdnDischrgDt').value = currDt + " " + hours + ":" + minutes + ":" + Seconds;  
                    return false;
                }
                else {
                    var AdmnResult = CompareDates(sedt, Admindt);
                    if (AdmnResult == "d1<d2") {
                        alert('You Can not Select Before Admission Date');
                        document.getElementById('ctl00_ContentPlaceHolder1_txtDisDT').value = currDt + " " + hours + ":" + minutes + ":" + Seconds;
                        document.getElementById('ctl00_ContentPlaceHolder1_hdnDischrgDt').value = currDt + " " + hours + ":" + minutes + ":" + Seconds;
                        return false;
                    }
                    else {
                        document.getElementById('ctl00_ContentPlaceHolder1_txtDisDT').value = selectDt + " " + hours + ":" + minutes + ":" + Seconds;
                        document.getElementById('ctl00_ContentPlaceHolder1_hdnDischrgDt').value = selectDt + " " + hours + ":" + minutes + ":" + Seconds;
                    }
                }
            }
        }
        
    function OnIPSelection(_d)
    {
        AssignIPPatDtls(_d);
        document.getElementById('ctl00_ContentPlaceHolder1_hdnAdmnid').value=_d.ADMN_ID;
        document.getElementById('ctl00_ContentPlaceHolder1_ucConsultant_txtSearchControl').value=_d.CONSULTANT;
        document.getElementById('ctl00_ContentPlaceHolder1_hdnConsultant').value=_d.ORDR_DOCTOR_ID;
        if(document.getElementById('ctl00_ContentPlaceHolder1_chkbox').checked==false)
        {
            var Admnno=_d.ADMN_NO
            PreviousAdvanceDetails(Admnno);
        }
    }
     function PreviousAdvanceDetails(Admnno)
  {  
   GetAsync(
         "Private/FrontOffice/IPBilling/IPDischarge.aspx/GetPatientBillDetails",
        "{'Admnno':'"+Admnno+"'}",
        function(data){
            if(data!=null)
            { 
            if(data.d[0].BILL_NO !='')          
              document.getElementById('ctl00_ContentPlaceHolder1_txtBillNo').value=data.d[0].BILL_NO;
              document.getElementById('ctl00_ContentPlaceHolder1_txtBillDT').value=data.d[0].BILL_DT;
              document.getElementById('ctl00_ContentPlaceHolder1_txtGrossAmt').value=data.d[0].BILL_AMOUNT;
              document.getElementById('ctl00_ContentPlaceHolder1_txtConcession').value=data.d[0].CONCESSION_AMOUNT;
              document.getElementById('ctl00_ContentPlaceHolder1_txtPostDiscount').value=data.d[0].POST_DISCOUNT;
              document.getElementById('ctl00_ContentPlaceHolder1_txtTotalAdv').value=data.d[0].ADVANCE_AMOUNT;
              document.getElementById('ctl00_ContentPlaceHolder1_txtRecvAmt').value=data.d[0].PAID_AMOUNT+data.d[0].ADVANCE_AMOUNT;
              document.getElementById('ctl00_ContentPlaceHolder1_txtDueAmt').value=data.d[0].DUE_AMOUNT;
              document.getElementById('ctl00_ContentPlaceHolder1_txtRefndAmt').value=data.d[0].REFUND_AMOUNT;
            }
        },
        function(jqXHR, textStatus, errorThrown){
        alert(errorThrown);
        }); 
   }


            
    function OnConsultant(input)
    {
    $('#ctl00_ContentPlaceHolder1_ucConsultant_txtSearchControl').val(input["_lktext"]);
    $('#ctl00_ContentPlaceHolder1_hdnConsultant').val(input.ID);
    }
    function OnDueReference(input)
    {
    $('#ctl00_ContentPlaceHolder1_ucDueRef_txtSearchControl').val(input["_lktext"]);
    $('#ctl00_ContentPlaceHolder1_hdnDueRef').val(input.AUTH_ID);
    }
    
    function onCheck()
    {
    var _chkd='';
    if(document.getElementById('ctl00_ContentPlaceHolder1_chkbox').checked==false)
     {
        document.getElementById('ctl00_ContentPlaceHolder1_lbltext').innerHTML='Diagnosis';
        _chkd='PatForDisWithIPFianlBills';
        ClearControlValues();
        clearBillDetails();
     }
     else
     {
        document.getElementById('ctl00_ContentPlaceHolder1_lbltext').innerHTML='Remarks';
        _chkd='PatForDisWithoutFinalBills';
        ClearControlValues();
        clearBillDetails();
     }
       GetAsync(
        "Private/FrontOffice/IPBilling/IPDischarge.aspx/AddPrecondition",
        "{chkdval:'"+_chkd+"'}",
        function(JData){
        },
        function(jqXHR, textStatus, errorThrown){
        alert(errorThrown);
        });   
    }
    function clearBillDetails()
    {
           document.getElementById('ctl00_ContentPlaceHolder1_ucConsultant_txtSearchControl').value='';
           document.getElementById('ctl00_ContentPlaceHolder1_txtBillNo').value='';
           document.getElementById('ctl00_ContentPlaceHolder1_txtBillDT').value='';
           document.getElementById('ctl00_ContentPlaceHolder1_txtGrossAmt').value='';
           document.getElementById('ctl00_ContentPlaceHolder1_txtConcession').value='';
           document.getElementById('ctl00_ContentPlaceHolder1_txtPostDiscount').value='';
           document.getElementById('ctl00_ContentPlaceHolder1_txtTotalAdv').value='';
           document.getElementById('ctl00_ContentPlaceHolder1_txtRecvAmt').value='';
           document.getElementById('ctl00_ContentPlaceHolder1_txtDueAmt').value='';
           document.getElementById('ctl00_ContentPlaceHolder1_txtRefndAmt').value='';
    }

