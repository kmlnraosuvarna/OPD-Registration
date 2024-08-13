function OnPageValidation() {
    var _chkValidation = true;
    var _ctrls = new Array();
    _ctrls[0] = 'ctl00_ContentPlaceHolder1_IPPatientDtls1_ucUmrNo_txtSearchControl';
    _ctrls[1] = 'ctl00_ContentPlaceHolder1_txtRemark';
    _ctrls[2] = 'ctl00_ContentPlaceHolder1_txtPurpose';
    for (var i = 0; i < _ctrls.length; i++) {
        var ctrl = document.getElementById(_ctrls[i]);
        if (OnNullValue(ctrl) == false)
            _chkValidation = false;
    }
    return _chkValidation;
}
function OnIPSelection(_d) {
    ClearDetails();
    document.getElementById('ctl00_ContentPlaceHolder1_IPPatientDtls1_ucUmrNo_txtSearchControl').style.border = '1px solid rgb(190, 190, 190)';
    var PreCondition = document.getElementById('ctl00_ContentPlaceHolder1_hdnPreCondition').value;
    _d = AssignIPPatDtls(_d, PreCondition);
    if (_d.RESULT == undefined) {
        if (_d.BILL_CANCEL_STATUS == 'A') {
            $(".stoast").toastText("Info", "Final bill has already been generated for this patient!", 5, 2);
            count++;
        }
        if (_d.RECORD_STATUS == 'C') {
            $(".stoast").toastText("Info", "This admission has already been cancelled!", 5, 2);
            count++;
        }
        if (_d.DSCHRG_STATUS == 'D') {
            $(".stoast").toastText("Info", "System should not allow Dischaged Patients", 5, 2);
            count++;
        }
        if (_d.LOCK_STATUS == 'Y') {
            $(".stoast").toastText("Info", "This Patient is Already locked status!", 5, 2);
            count++;
        }
    }
    else {
        if (_d.RESULT.BILL_CANCEL_STATUS == 'A') {
            $(".toast").toastText("Info", "Final bill has already been generated for this patient!", 5, 2);
            count++;
        }
        if (_d.RESULT.RECORD_STATUS == 'C') {
            $(".toast").toastText("Info", "This admission is cancelled!.", 5, 2);
            count++;
        }
        if (_d.RESULT.DSCHRG_STATUS == 'D') {
            $(".toast").toastText("Info", "System should not allow Dischaged Patients", 5, 2)
            count++;
        }
        if (_d.RESULT.LOCK_STATUS == 'Y') {
            $(".stoast").toastText("Info", "This Patient is Already locked status!", 5, 2);
            count++;
        }
    }
    /*up to here */
    if (count > 0) {
        ClearControlValues();
        return false;
    }
    document.getElementById('ctl00_ContentPlaceHolder1_hdnAdmnNo').value = _d.ADMN_NO;
    document.getElementById('ctl00_ContentPlaceHolder1_hdnUmrNo').value = _d.UMR_NO;
    document.getElementById('ctl00_ContentPlaceHolder1_txtApprxAmt').value = typeof _d.ESTIMATED_BILL_AMT == "string" ? _d.ESTIMATED_BILL_AMT : "0";
    var admnNO = document.getElementById('ctl00_ContentPlaceHolder1_hdnAdmnNo').value;
    var umrNO = document.getElementById('ctl00_ContentPlaceHolder1_hdnUmrNo').value;
    GetPreAdvanceDetails(umrNO, admnNO);
}
function GetTotalPaidAmount() {
    var TotPaid = 0;
    var approximateBillAmt = 0;
    $(document).ready(function (e) {
        $('[id$=gvPreAdvanceDetails] tr:has(td)').each(function (e) {
            if ($(this).closest('tr').find('[id*=lblReceiptAmt]').text() != '' && $(this).closest('tr').find('input[type=hidden][id*=hdnRecpTypID]').val() == '12')
                $(this).closest('tr').find('[id*=lblReceiptAmt]').text($(this).closest('tr').find('[id*=lblReceiptAmt]').text());
            /* Advance and Pre-Advance Receipt */
            if ($(this).closest('tr').find('[id*=lblReceiptAmt]').text() != '' && ($(this).closest('tr').find('input[type=hidden][id*=hdnRecpTypID]').val() == '1' || $(this).closest('tr').find('input[type=hidden][id*=hdnRecpTypID]').val() == '8'))
                TotPaid = parseFloat(TotPaid) + parseFloat($(this).closest('tr').find('[id*=lblReceiptAmt]').text());
            if ($(this).closest('tr').find('[id*=lblReceiptAmt]').text() != '' && $(this).closest('tr').find('input[type=hidden][id*=hdnRecpTypID]').val() == '12')
                TotPaid = parseFloat(TotPaid) + parseFloat($(this).closest('tr').find('[id*=lblReceiptAmt]').text());
            approximateBillAmt = $(this).closest('tr').find('[id*=netAmtlbl]').text();
        });
        if (TotPaid == undefined || TotPaid == NaN || TotPaid == '')
            TotPaid = '0';
        if (approximateBillAmt == undefined || approximateBillAmt == TotPaid || approximateBillAmt == '')
            approximateBillAmt = '0';
        document.getElementById('ctl00_ContentPlaceHolder1_txtAdvanceAmt').value = TotPaid;
        document.getElementById('ctl00_ContentPlaceHolder1_txtApprxAmt').value = parseFloat(approximateBillAmt);
        if (approximateBillAmt > TotPaid)
            document.getElementById('ctl00_ContentPlaceHolder1_txtDueAmt').value = parseFloat(approximateBillAmt) - parseFloat(TotPaid);
        else
            document.getElementById('ctl00_ContentPlaceHolder1_txtDueAmt').value = '0';
    });
    var IsView = getParameterByName('VIW');
    if (IsView == 'V') {
        $('#ctl00_ContentPlaceHolder1_UCHeaderControl_imgdirectPrint').css('display', 'none');
        $('#ctl00_ContentPlaceHolder1_UCHeaderControl_imgDmsUpload').css('display', 'none');
        $('#ctl00_ContentPlaceHolder1_UCHeaderControl_imgDmsView').css('display', 'none');
    }
    return false;
}

function IsMandatoryFieldsNull(obj) {
    if (document.getElementById('ctl00_ContentPlaceHolder1_IPPatientDtls1_ucUmrNo_txtSearchControl').value == '' || document.getElementById('ctl00_ContentPlaceHolder1_IPPatientDtls1_ucUmrNo__hiddenID').value == '' || document.getElementById('ctl00_ContentPlaceHolder1_IPPatientDtls1_ucUmrNo__hiddenID').value == '0') {
        $(".stoast").toastText("Info", "Please Select Admn#", 5, 2);
        document.getElementById('ctl00_ContentPlaceHolder1_IPPatientDtls1_ucUmrNo_txtSearchControl').focus();
        return false;
    }
    if (document.getElementById('ctl00_ContentPlaceHolder1_txtRemark').value == '') {
        $(".stoast").toastText("Info", "Please enter the Remarks", 5, 2);
        document.getElementById('ctl00_ContentPlaceHolder1_txtRemark').focus();
        return false;
    }
    if (document.getElementById('ctl00_ContentPlaceHolder1_txtPurpose').value == '') {
        $(".stoast").toastText("Info", "Please enter the purpose", 5, 2);
        document.getElementById('ctl00_ContentPlaceHolder1_txtPurpose').focus();
        return false;
    }
    if (ctl00_ContentPlaceHolder1_UCHeaderControl_hdnisSaveDisable.value == 1)
        return false;
    return ConfirmationToasterForSave(obj, '', "Service CallOff");
}
function OnSuccessContinue() {
    ctl00_ContentPlaceHolder1_UCHeaderControl_hdnisSaveDisable.value = 1;
    __doPostBack($('[id*=imgbtnSave]').attr("name"), "");
}
function OnFailureContinue() {
    return false;
}
function OnSuccessMessage(admnno, SrvCallOffNo) {
    $(".smessagebox").scustommessagebox(1, "Service CallOff", "Services locked for Admission No:'" + admnno + "',Service call off no:'" + SrvCallOffNo + "'", OnSuccessMsg);
}
function OnSuccessMessage_New(admnno) {
    $(".smessagebox").scustommessagebox(1, "Service CallOff", "This Patient Has Already Service calloff:'" + admnno + "'", OnSuccessMsg);
}
function OnSuccessMsg() {
    ClearDetails();
    if ($("[id$=hdnQryStrEr]").val() == "Y") {
        window.location.replace(_iniUrl + 'Private/FrontOffice/IPBilling/Changes/ServiceCallOffList.aspx?ER=Y');
    }
    else {
        window.location.replace(_iniUrl + 'Private/FrontOffice/IPBilling/Changes/ServiceCallOffList.aspx');
    }
}
function OnFialMsg() {
    window.location.replace(_iniUrl + 'Private/FrontOffice/IPBilling/Changes/IPServiceCalloff');
    return false;
}
function OnFailProcess() {
    $(".smessagebox").scustommessagebox(1, "Service CallOff", "Failed to process!.", OnSuccessMsg);
    return false;
}
function OnFail(admnno) {
    $(".smessagebox").scustommessagebox(1, "Service CallOff", "Services Already locked for this Admission No :" + admnno + "'", OnSuccessMsg);
    ClearDetails();
    return false;
}

function ClearDetails() {
    ClearControlValues(); GridClear();
    document.getElementById('ctl00_ContentPlaceHolder1_txtApprxAmt').value = '';
    document.getElementById('ctl00_ContentPlaceHolder1_txtAdvanceAmt').value = '';
    document.getElementById('ctl00_ContentPlaceHolder1_txtDueAmt').value = '';
    document.getElementById('ctl00_ContentPlaceHolder1_txtRemark').value = '';
    document.getElementById('ctl00_ContentPlaceHolder1_txtPurpose').value = '';
    document.getElementById('ctl00_ContentPlaceHolder1_chkCallOffService').checked = false;
    return false;
}
function GridClear() {
    $('[id$=gvPreAdvanceDetails] tr:has(td)').each(function (e) {
        $(this).remove();
    }); ;
}
function checkDate(sender, args) {
    var FromDate;
    if (document.getElementById('ctl00_ContentPlaceHolder1_txtFromDt').value == '')
        FromDate = new Date().format('MM/dd/yyyy');
    else
        FromDate = document.getElementById('ctl00_ContentPlaceHolder1_txtFromDt').value;
    var str1 = document.getElementById('ctl00_ContentPlaceHolder1_txtFromDt').value;
    var str2 = sender._selectedDate.format('MM/dd/yyyy');
    var mon1 = parseInt(str1.substring(0, 2), 10);
    var dt1 = parseInt(str1.substring(3, 5), 10);
    var yr1 = parseInt(str1.substring(6, 10), 10);
    var mon2 = parseInt(str2.substring(0, 2), 10);
    var dt2 = parseInt(str2.substring(3, 5), 10);
    var yr2 = parseInt(str2.substring(6, 10), 10);
    var date1 = new Date(yr1, mon1, dt1);
    var date2 = new Date(yr2, mon2, dt2);
    if (date2 < date1) {
        if (mon2 < mon1) {
            if (yr2 < yr1) {
                $(".stoast").toastText("Info", "To date cannot be less than from date", 5, 2);
                return false;
            }
        }
    }
}
function AssignPatientDetails(Patid, Age, admnNo, admnDt, wardName, RoomName, BedName, gender, patienttype, Consultatnt, CorpName, regNo, WardId, RoomId, BedId, OrderDocId, AdmnId, Title, displayName, Umrno) {
    document.getElementById('ctl00_ContentPlaceHolder1_IPPatientDtls1_txtRegNo').value = regNo;
    document.getElementById('ctl00_ContentPlaceHolder1_IPPatientDtls1_txtPatName').value = displayName;
    document.getElementById('ctl00_ContentPlaceHolder1_IPPatientDtls1_txtPatType').value = patienttype;
    document.getElementById('ctl00_ContentPlaceHolder1_IPPatientDtls1_txtUmrNo').value = Umrno;
    document.getElementById('ctl00_ContentPlaceHolder1_IPPatientDtls1_txtConsult').value = Consultatnt;
    document.getElementById('ctl00_ContentPlaceHolder1_IPPatientDtls1_txtWard').value = wardName;
    document.getElementById('ctl00_ContentPlaceHolder1_IPPatientDtls1_txtAdminDt').value = admnDt;
    document.getElementById('ctl00_ContentPlaceHolder1_IPPatientDtls1_txtCropName').value = CorpName;
    document.getElementById('ctl00_ContentPlaceHolder1_IPPatientDtls1_txtRoom').value = RoomName;
    document.getElementById('ctl00_ContentPlaceHolder1_IPPatientDtls1_txtBed').value = BedName;
    document.getElementById('ctl00_ContentPlaceHolder1_IPPatientDtls1_txtGender').value = gender;
    document.getElementById('ctl00_ContentPlaceHolder1_IPPatientDtls1_hdnCompID').value = '';
    document.getElementById('ctl00_ContentPlaceHolder1_IPPatientDtls1_hdnAdmnid').value = AdmnId;
    document.getElementById('ctl00_ContentPlaceHolder1_IPPatientDtls1_hdnConsDocid').value = OrderDocId;
    document.getElementById('ctl00_ContentPlaceHolder1_IPPatientDtls1_hdnRoomid').value = RoomId;
    document.getElementById('ctl00_ContentPlaceHolder1_IPPatientDtls1_hdnBedid').value = BedId;
    document.getElementById('ctl00_ContentPlaceHolder1_IPPatientDtls1_hdnWardid').value = WardId;
    document.getElementById('ctl00_ContentPlaceHolder1_IPPatientDtls1_ucUmrNo__hiddenID').value = Patid;
    document.getElementById('ctl00_ContentPlaceHolder1_IPPatientDtls1_txtYs').value = Age.split(',')[0];
    document.getElementById('ctl00_ContentPlaceHolder1_IPPatientDtls1_txtMs').value = Age.split(',')[1];
    document.getElementById('ctl00_ContentPlaceHolder1_IPPatientDtls1_txtDs').value = Age.split(',')[2];
    document.getElementById('ctl00_ContentPlaceHolder1_IPPatientDtls1_hdnApproxBill').value = '';
    document.getElementById('ctl00_ContentPlaceHolder1_IPPatientDtls1_hdnPaidAmt').value = '';
    document.getElementById('ctl00_ContentPlaceHolder1_IPPatientDtls1_hdnTeatedWardid').value = '';
    GetTotalPaidAmount();
}
function GetPreAdvanceDetails(UmrNo, AdmnNo) {
    if (UmrNo == undefined || UmrNo == null || UmrNo == '') { UmrNo = "0"; }
    if (AdmnNo == undefined || AdmnNo == null || AdmnNo == '') { AdmnNo = "0"; }
    if (AdmnNo != "0" && UmrNo != "0") {
        GetAsync(
            "ReceiptWebService.asmx/GetReceiptTypeDetailsByUMRNO",
            { umr_no: UmrNo, admn_no: AdmnNo },
            function (data) {
                AdvanceDetails(data.d);
            },
            function (jqXHR, textStatus, errorThrown) {
                $(".stoast").toastText("Info", errorThrown, 5, 3);
            });
    }
    return true;
}
function AdvanceDetails(data) {
    if (data != null) {
        var gridAdvance = document.getElementById('ctl00_ContentPlaceHolder1_gvPreAdvanceDetails');
        for (var i = 0; i < data.length; i++) {
            if (i == 0 && gridAdvance.rows.length - 1 == 1) {
                $('table[id$=gvPreAdvanceDetails] tr:has(td)').each(function (e) {
                    $(this).closest('tr').find('[id*=lblReceiptNo]').text(data[0].TRANSACTION_NO);
                    $(this).closest('tr').find('[id*=lblReceiptDt]').text(data[0].TRANSACTION_DT);
                    $(this).closest('tr').find('input[type=hidden][id*=hdnRecpTypID]').val(data[0].REFERENCE_TYPE_ID);
                    $(this).closest('tr').find('[id*=lblReceptyp]').text(data[0].RECEIPT_TYPE_NAME);
                    $(this).closest('tr').find('[id*=lblReceiptAmt]').text(data[0].AMOUNT);
                    $(this).closest('tr').find('[id*=netAmtlbl]').text(data[0].NET_AMOUNT);
                    $(this).closest('tr').find('[id*=lblRemarks]').text(data[0].REMARKS);
                    return false;
                });
            }
            else {
                fn_Add_Grid_Row(data[i].TRANSACTION_NO, data[i].TRANSACTION_DT, data[i].REFERENCE_TYPE_ID, data[i].RECEIPT_TYPE_NAME, data[i].AMOUNT, data[i].NET_AMOUNT, data[i].REMARKS);
            }
        }
        if (data.length > 0) {
            GetTotalPaidAmount();
        }
        else {
            document.getElementById('ctl00_ContentPlaceHolder1_txtAdvanceAmt').value = '0';
            document.getElementById('ctl00_ContentPlaceHolder1_txtDueAmt').value = '0';
        }
    }
}
var index = 0;
function fn_Add_Grid_Row(TransNo, TranDt, ReferenceTypeID, ReceiptTypeName, Amount, NetAmount, Remaks) {
    var rowIndex = 0;
    var rowColor = 0;
    var newCell = 0;
    var gvAdvance = document.getElementById('ctl00_ContentPlaceHolder1_gvPreAdvanceDetails');
    var rowIndex = gvAdvance.rows.length;
    var newRow = gvAdvance.insertRow(rowIndex);
    if (rowColor == 0) {
        newRow.className = 'gridAlternaterow'
        rowColor++;
    }
    else {
        newRow.className = 'gridrow'
        rowColor = 0;
    }
    newCell = newRow.insertCell(0);
    var span = document.createElement('span');
    var newTextBox = document.createElement('label'); newTextBox.id = 'lblSNo' + index; newTextBox.innerHTML = rowIndex; span.appendChild(newTextBox);
    newCell.align = "left";
    newCell.appendChild(span);
    newCell = newRow.insertCell(1);
    var lblReceiptNo = document.createElement('label'); lblReceiptNo.id = 'lblReceiptNo' + index; lblReceiptNo.innerHTML = TransNo;
    newCell.appendChild(lblReceiptNo);
    newCell = newRow.insertCell(2);
    var lblReceiptDt = document.createElement('label'); lblReceiptDt.id = 'lblReceiptDt' + index; lblReceiptDt.innerHTML = TranDt;
    newCell.appendChild(lblReceiptDt);
    newCell = newRow.insertCell(3);
    var hdnRecpTypID = document.createElement('input'); hdnRecpTypID.type = 'hidden'; hdnRecpTypID.id = 'hdnRecpTypID' + index; hdnRecpTypID.value = ReferenceTypeID;
    newCell.appendChild(hdnRecpTypID);
    var lblReceptyp = document.createElement('label'); newCell.align = 'left'; lblReceptyp.id = 'lblReceptyp' + index; lblReceptyp.innerHTML = ReceiptTypeName;
    newCell.appendChild(lblReceptyp);
    newCell = newRow.insertCell(4);
    var lblReceiptAmt = document.createElement('label'); newCell.align = 'right'; lblReceiptAmt.id = 'lblReceiptAmt' + index; lblReceiptAmt.innerHTML = Amount;
    newCell.appendChild(lblReceiptAmt);
    var netAmtlbl = document.createElement('label'); netAmtlbl.style.display = 'none'; newCell.align = 'right'; netAmtlbl.id = 'netAmtlbl' + index; netAmtlbl.innerHTML = NetAmount;
    newCell.appendChild(netAmtlbl);
    newCell = newRow.insertCell(5);
    var lblRemarks = document.createElement('label'); newCell.align = 'left'; lblRemarks.id = 'lblRemarks' + index; lblRemarks.innerHTML = Remaks;
    newCell.appendChild(lblRemarks);
    index++;
}
function OnCallOFFError(result) {
    $(".stoast").toastText("Info", "unable to connect to the service", 5, 3);
}
function OnItemSelectionPatient(sender, eventArgs) {
    var results = eval('(' + eventArgs.get_value() + ')');
    if (results != null) {
        var umrNo = '';
        AssignDetails(results.Text, umrNo);
    }
    return false;
}