function getPosition(str, m, i) { return str.split(m, i).join(m).length; }
function Onccbankselection(sender, eventArgs) {
    var results = eval('(' + eventArgs.get_value() + ')');
    document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_AccordionPane4_content_hdnccbankid').value = results.Value;
    document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_AccordionPane4_content_txtCCBankName').value = results.Text;
}
function Ondcbankselection(sender, eventArgs) {
    var results = eval('(' + eventArgs.get_value() + ')');
    document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_AccordionPane5_content_hdndcbankid').value = results.Value;
    document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_AccordionPane5_content_txtDCBankName').value = results.Text;
}
function Oncqbankselection(sender, eventArgs) {
    var results = eval('(' + eventArgs.get_value() + ')');
    document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_AccordionPane6_content_hdncqbankid').value = results.Value;
    document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_AccordionPane6_content_txtCQBankName').value = results.Text;
}
function IsEmptyReplaceWithZero(event) {

    if ($('#' + event.id + '').val() == '') {
        $('#' + event.id + '').val('0');
    }

}
function PaymentModeItems(obj1, obj) {
    checkBoxListOnClick();
    var arr = new Array();

    var objn;
    if (navigator.appName == "Microsoft Internet Explorer")
        objn = obj1.srcElement;
    else
        objn = obj1.target;

    var cash = CheckCash();
    var credit = CheckCredit();
    var debit = CheckDebit();
    var cheque = CheckCheque();

    if (obj == 'CREDIT CARD') {

        if (objn.checked == true) {

            if (cash == 1 && debit == 1 && cheque == 1) {
                if (document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_AccordionPane4_content_txtCCNo').value == '' || document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_AccordionPane4_content_txtCCNo').value == 0)
                    document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_AccordionPane4_content_txtCCNo').style.border = '1px solid #f4785e';
                else
                    document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_AccordionPane4_content_txtCCNo').style.borderColor = 'white';


                if (document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_AccordionPane4_content_txtCCHolderName').value == '' || document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_AccordionPane4_content_txtCCHolderName').value == 0)
                    document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_AccordionPane4_content_txtCCHolderName').style.border = 'solid 1px #818d98';
                else
                    document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_AccordionPane4_content_txtCCHolderName').style.border = 'solid 1px #818d98';

                if (document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_AccordionPane4_content_ddlCardType').value == '' || document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_AccordionPane4_content_ddlCardType').value == 0)
                    document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_AccordionPane4_content_ddlCardType').style.border = '1px solid #f4785e';

                if (document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_AccordionPane4_content_txtCCValidFrm').value == '' || document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_AccordionPane4_content_txtCCValidFrm').value == 0)
                    document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_AccordionPane4_content_txtCCValidFrm').style.border = '1px solid #f4785e';
                else
                    document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_AccordionPane4_content_txtCCValidFrm').style.border = 'solid 1px #818d98';

                if (document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_AccordionPane4_content_txtCCValidTo').value == '' || document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_AccordionPane4_content_txtCCValidTo').value == 0)
                    document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_AccordionPane4_content_txtCCValidTo').style.border = 'solid 1px #818d98';
                else
                    document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_AccordionPane4_content_txtCCValidTo').style.borderColor = 'solid 1px #818d98';
                if (document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_AccordionPane4_content_txtCCBankName').value == '' || document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_AccordionPane4_content_txtCCBankName').value == 0)
                    document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_AccordionPane4_content_txtCCBankName').style.border = '1px solid #f4785e';
                else
                    document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_AccordionPane4_content_txtCCBankName').style.border = 'solid 1px #818d98';
                if (document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_AccordionPane4_content_txtCC_Amount').value == '' || document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_AccordionPane4_content_txtCC_Amount').value == 0)
                    document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_AccordionPane4_content_txtCC_Amount').style.border = '1px solid #f4785e';
                else
                    document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_AccordionPane4_content_txtCC_Amount').style.border = 'solid 1px #818d98';
            }
            else {
                alert('Please Provide mandatory values for previous selected mode');
                document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_chkPaymentMode_1').checked = false;
                checkBoxListOnClick();
                return false;
            }
        }
        else {
            document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_AccordionPane4_content_txtCCNo').style.border = 'solid 1px #818d98';
            document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_AccordionPane4_content_txtCCHolderName').style.border = 'solid 1px #818d98';
            document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_AccordionPane4_content_ddlCardType').style.border = 'solid 1px #818d98';
            document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_AccordionPane4_content_txtCCValidFrm').style.border = 'solid 1px #818d98';
            document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_AccordionPane4_content_txtCCValidTo').style.border = 'solid 1px #818d98';
            document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_AccordionPane4_content_txtCCBankName').style.border = 'solid 1px #818d98';
            document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_AccordionPane4_content_txtCC_Amount').style.border = 'solid 1px #818d98';
            document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_AccordionPane4_content_txtCCNo').value = '';
            document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_AccordionPane4_content_txtCCApprovalNo').value = '';
            document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_AccordionPane4_content_txtCCHolderName').value = '';
            document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_AccordionPane4_content_txtCCEdcMachine').value = '';
            document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_AccordionPane4_content_ddlCardType').selectedIndex = '0';
            document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_AccordionPane4_content_txtCCValidFrm').value = '';
            document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_AccordionPane4_content_txtCCValidTo').value = '';
            document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_AccordionPane4_content_txtCCHoldAddress').value = '';
            document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_AccordionPane4_content_txtCC_Amount').value = '';
            document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_AccordionPane4_content_txtCCBankName').value = '';
            document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_AccordionPane4_content_hdnccbankid').value = '';
            document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_hfCC').value = '';
            CalculateCCAmount();
            ChkPayentAmt();
        }
    }
    else if (obj == 'DEBIT CARD') {
        if (objn.checked == true) {
            if (cash == 1 && credit == 1 && cheque == 1) {
                if (document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_AccordionPane5_content_txtDCNo').value == '' || document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_AccordionPane5_content_txtDCNo').value == 0)
                    document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_AccordionPane5_content_txtDCNo').style.border = '1px solid #f4785e';
                if (document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_AccordionPane5_content_txtDCHolderName').value == '' || document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_AccordionPane5_content_txtDCHolderName').value == 0)
                    document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_AccordionPane5_content_txtDCHolderName').style.border = 'solid 1px #818d98';
                if (document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_AccordionPane5_content_ddlDCType').value == '' || document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_AccordionPane5_content_ddlDCType').value == 0)
                    document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_AccordionPane5_content_ddlDCType').style.border = '1px solid #f4785e';
                if (document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_AccordionPane5_content_txtDCBankName').value == '' || document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_AccordionPane5_content_txtDCBankName').value == 0)
                    document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_AccordionPane5_content_txtDCBankName').style.border = '1px solid #f4785e';
                if (document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_AccordionPane5_content_txtDCValidFrm').value == '' || document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_AccordionPane5_content_txtDCValidFrm').value == 0)
                    document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_AccordionPane5_content_txtDCValidFrm').style.border = '1px solid #f4785e';
                if (document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_AccordionPane5_content_txtDCValidTo').value == '' || document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_AccordionPane5_content_txtDCValidTo').value == 0)
                    document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_AccordionPane5_content_txtDCValidTo').style.border = 'solid 1px #818d98';
                if (document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_AccordionPane5_content_txtDC_Amount').value == '' || document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_AccordionPane5_content_txtDC_Amount').value == 0)
                    document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_AccordionPane5_content_txtDC_Amount').style.border = '1px solid #f4785e';
            }
            else {
                alert('Please Provide mandatory values for previous selected mode');
                document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_chkPaymentMode_2').checked = false;
                checkBoxListOnClick();
                return false;
            }
        }
        else {
            document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_AccordionPane5_content_txtDCNo').style.border = 'solid 1px #818d98';
            document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_AccordionPane5_content_txtDCHolderName').style.border = 'solid 1px #818d98';
            document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_AccordionPane5_content_ddlDCType').style.border = 'solid 1px #818d98';
            document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_AccordionPane5_content_txtDCBankName').style.border = 'solid 1px #818d98';
            document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_AccordionPane5_content_txtDCValidFrm').style.border = 'solid 1px #818d98';
            document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_AccordionPane5_content_txtDCValidTo').style.border = 'solid 1px #818d98';
            document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_AccordionPane5_content_txtDC_Amount').style.border = 'solid 1px #818d98';
            document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_AccordionPane5_content_txtDCApproval').value = '';
            document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_AccordionPane5_content_txtDCHolderName').value = '';
            document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_AccordionPane5_content_txtDcEdcMc').value = '';
            document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_AccordionPane5_content_ddlDCType').selectedIndex = '0';
            document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_AccordionPane5_content_txtDCValidFrm').value = '';
            document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_AccordionPane5_content_txtDCValidTo').value = '';
            document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_AccordionPane5_content_txtDCHolderAdd').value = '';
            document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_AccordionPane5_content_txtDC_Amount').value = '';
            document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_AccordionPane5_content_txtDCBankName').value = '';
            document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_AccordionPane5_content_txtDCNo').value = '';
            CalculateDCAmount();
            ChkPayentAmt();
        }
    }
    else if (obj == 'CHEQUE') {
        if (objn.checked == true) {
            if (cash == 1 && credit == 1 && debit == 1) {
                if (document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_AccordionPane6_content_txtCQNo').value == '' || document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_AccordionPane6_content_txtCQNo').value == 0)
                    document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_AccordionPane6_content_txtCQNo').style.border = '1px solid #f4785e';
                if (document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_AccordionPane6_content_txtCQHolderName').value == '' || document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_AccordionPane6_content__txtCQHolderName').value == 0)
                    document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_AccordionPane6_content_txtCQHolderName').style.border = '1px solid #f4785e';
                if (document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_AccordionPane6_content_UcBrach_txtSearchControl').value == '' || document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_AccordionPane6_content_UcBrach_txtSearchControl').value == 0)
                    document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_AccordionPane6_content_UcBrach_txtSearchControl').style.border = '1px solid #f4785e';
                if (document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_AccordionPane6_content_txtCQValidFrm').value == '' || document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_AccordionPane6_content_txtCQValidFrm').value == 0)
                    document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_AccordionPane6_content_txtCQValidFrm').style.border = '1px solid #f4785e';
                if (document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_AccordionPane6_content_txtCQValidTo').value == '' || document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_AccordionPane6_content_txtCQValidTo').value == 0)
                    document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_AccordionPane6_content_txtCQValidTo').style.border = '1px solid #f4785e';
                if (document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_AccordionPane6_content_txtCQ_Amount').value == '' || document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_AccordionPane6_content_txtCQ_Amount').value == 0)
                    document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_AccordionPane6_content_txtCQ_Amount').style.border = '1px solid #f4785e';
            }
            else {
                alert('Please Provide mandatory values for previous selected mode');
                document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_chkPaymentMode_3').checked = false;
                checkBoxListOnClick();
                return false;
            }
        }
        else {
            document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_AccordionPane6_content_txtCQNo').style.border = 'solid 1px #818d98';
            document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_AccordionPane6_content_txtCQHolderName').style.border = 'solid 1px #818d98';
            document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_AccordionPane6_content_UcBrach_txtSearchCriteria').style.border = 'solid 1px #818d98';
            document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_AccordionPane6_content_txtCQValidFrm').style.border = 'solid 1px #818d98';
            document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_AccordionPane6_content_txtCQ_Amount').style.border = 'solid 1px #818d98';
            document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_AccordionPane6_content_txtCQValidTo').style.border = 'solid 1px #818d98';
            document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_AccordionPane6_content_txtCQNo').value = '';
            document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_AccordionPane6_content_txtCQHolderName').value = '';
            document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_AccordionPane6_content_UcBrach_txtSearchControl').value = '';
            document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_AccordionPane6_content_txtCQValidFrm').value = '';
            document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_AccordionPane6_content_txtCQ_Amount').value = '';
            document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_AccordionPane6_content_txtCQValidTo').value = '';
            document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_AccordionPane6_content_ucChqAuth_txtSearchControl').value = '';
            document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_AccordionPane6_content_txtCQBankName').value = '';
            CalculateCQAmount();
            ChkPayentAmt();
        }
    }
    else if (obj == 'CASH') {

        if (objn.checked == true) {
            if (credit == 1 && debit == 1 && cheque == 1) {
                if (document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_txtCs_Total').value == '' || document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_txtCs_Total').value == 0)
                    document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_txtCs_Total').style.border = '1px solid #f4785e';
            }
            else {
                alert('Please Provide mandatory values for previous selected mode');
                document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_chkPaymentMode_0').checked = false;
                return false;
            }
        }
        else {
            document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_txtCs_Total').value = '';
            document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_hdnTotal').value = '';
            CalculateCashAmount(obj);
            ChkPayentAmt();
        }
    }

    if (document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_hdnFormName').value == 'REFUND')
        document.getElementById('ctl00_ContentPlaceHolder1_txtRefundAmt').value = document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_txtPayAmt').value;
    else
        if (document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_hdnFormName').value == 'IPFINALBILL' && document.getElementById('ctl00_ContentPlaceHolder1_chkBxAdjAmt').checked == true) {
        if (parseFloat(document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_lblTamount').value) > parseFloat(document.getElementById('ctl00_ContentPlaceHolder1_txtAdjAdvance').value))
            document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_txtDueAmt').value = (parseFloat(document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_lblTamount').value) - parseFloat(document.getElementById('ctl00_ContentPlaceHolder1_txtAdjAdvance').value)) - parseFloat(document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_txtConcessionAmt').value);
        if (parseFloat(document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_txtPayAmt').value) > 0)
            document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_txtDueAmt').value = parseFloat(document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_txtDueAmt').value) - parseFloat(document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_txtPayAmt').value);
    }
    else if (document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_hdnFormName').value == 'CORP OP CLIENTSIDE' || document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_hdnFormName').value == 'Corporate OP Miscelleneous Billing') {
        if (parseFloat(document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_lblBillNetAmt').value) > 0) {
            document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_txtDueAmt').value = parseFloat(document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_lblBillNetAmt').value) + parseFloat(document.getElementById('ctl00_ContentPlaceHolder1_txtEmpTaxAmt').value) - parseFloat(document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_txtPayAmt').value)
        }
    }
    else if (document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_hdnFormName').value == 'OPConsultation') {
        if (document.getElementById('ctl00_ContentPlaceHolder1_hdnOpConsPayAmt').value == 'R') {
            document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_UCdueAuthBy_txtSearchControl').disabled = true;
            document.getElementById('lk_btn_ctl00_ContentPlaceHolder1_UCtransaction_UCdueAuthBy').disabled = true;
        }
    }
}

function CheckCash() {
    var cashAmt = document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_txtCs_Total').value;
    if (cashAmt == '')
        cashAmt = 0;
    if (document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_chkPaymentMode_0').checked == true) {
        return 1;
    }
    else if (document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_chkPaymentMode_0').checked == false)
        return 1;
    else
        return 0;
}
function CheckCredit() {
    var ccAmt = document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_AccordionPane4_content_txtCC_Amount').value;
    if (ccAmt == '') { ccAmt = 0; }
    if (document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_chkPaymentMode_1').checked == true && parseFloat(ccAmt) > 0) {
        var ccno = document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_AccordionPane4_content_txtCCNo').value;
        var chname = document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_AccordionPane4_content_txtCCHolderName').value;
        var ctype = document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_AccordionPane4_content_ddlCardType').value;
        var todt = document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_AccordionPane4_content_txtCCValidTo').value
        var bank = document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_AccordionPane4_content_hdnccbankid').value;
        if (ccno != '' && bank != '')
            return 1;
        else
            return 0;
    }
    else if (document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_chkPaymentMode_1').checked == false) {
        document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_AccordionPane4_content_txtCCNo').value = '';
        document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_AccordionPane4_content_txtCCApprovalNo').value = '';
        document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_AccordionPane4_content_txtCCHolderName').value = '';
        document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_AccordionPane4_content_txtCCEdcMachine').value = '';
        document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_AccordionPane4_content_ddlCardType').selectedIndex = '0';
        document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_AccordionPane4_content_txtCCValidFrm').value = '';
        document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_AccordionPane4_content_txtCCValidTo').value = '';
        document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_AccordionPane4_content_txtCCHoldAddress').value = '';
        document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_AccordionPane4_content_txtCC_Amount').value = '';
        document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_AccordionPane4_content_txtCCBankName').value = '';
        $("[id$=_UCtransaction_AccordionPane4_content_ucCreditBanks_txtSearchControl]").val('');
        $("[id$=_UCtransaction_AccordionPane4_content_ucCreditBanks__hiddenID]").val('0');
        document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_hfCC').value = '';
        return 1;
    }
    else
        return 0;
}

function CheckDebit() {

    var dcAmt = document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_AccordionPane5_content_txtDC_Amount').value;
    if (dcAmt == '')
        dcAmt = 0;
    if (document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_chkPaymentMode_2').checked == true && parseFloat(dcAmt) > 0) {
        var dhname = document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_AccordionPane5_content_txtDCHolderName').value;
        var dctype = document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_AccordionPane5_content_ddlDCType').value;
        var to = document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_AccordionPane5_content_txtDCValidTo').value;
        var bank = document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_AccordionPane5_content_hdndcbankid').value;
        var dcno = document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_AccordionPane5_content_txtDCNo').value;
        if (dcno != '' && bank != '')
            return 1;
        else
            return 0;
    }
    else if (document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_chkPaymentMode_2').checked == false) {
        document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_AccordionPane5_content_txtDCNo').value = '';
        document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_AccordionPane5_content_txtDCApproval').value = '';
        document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_AccordionPane5_content_txtDCHolderName').value = '';
        document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_AccordionPane5_content_txtDcEdcMc').value = '';
        document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_AccordionPane5_content_ddlDCType').selectedIndex = '0';
        document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_AccordionPane5_content_txtDCValidFrm').value = '';
        document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_AccordionPane5_content_txtDCValidTo').value = '';
        document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_AccordionPane5_content_txtDCHolderAdd').value = '';
        document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_AccordionPane5_content_txtDC_Amount').value = '';
        document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_AccordionPane5_content_txtDCBankName').value = '';
        $("[id$=_UCtransaction_AccordionPane5_content_ucDebitBanks_txtSearchControl]").val('');
        $("[id$=_UCtransaction_AccordionPane5_content_ucDebitBanks__hiddenID]").val('0');
        return 1;
    }
    else
        return 0;
}

function CheckCheque() {
    var cqAmt = document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_AccordionPane6_content_txtCQ_Amount').value;
    if (cqAmt == '')
        cqAmt = 0;
    if (document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_chkPaymentMode_3').checked == true && parseFloat(cqAmt) > 0) {
        var cqno = document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_AccordionPane6_content_txtCQNo').value;
        var cqhname = document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_AccordionPane6_content_txtCQHolderName').value;
        var bank = document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_AccordionPane6_content_UcBrach__hiddenID').value;
        var to = document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_AccordionPane6_content_txtCQValidTo').value;
        if (cqno != '' && cqhname != '' && bank != '' && to != '')
            return 1;
        else
            return 0;
    }
    else if (document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_chkPaymentMode_3').checked == false) {
        document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_AccordionPane6_content_txtCQNo').value = '';
        document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_AccordionPane6_content_txtCQHolderName').value = '';
        document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_AccordionPane6_content_txtCQValidFrm').value = '';
        document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_AccordionPane6_content_txtCQValidTo').value = '';
        document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_AccordionPane6_content_txtCQ_Amount').value = '';
        document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_AccordionPane6_content_UcBrach_txtSearchControl').value = '';
        document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_AccordionPane6_content_txtCQBankName').value = '';
        $("[id$=_UCtransaction_AccordionPane6_content_ucCQBanks_txtSearchControl]").val('');
        $("[id$=_UCtransaction_AccordionPane6_content_ucCQBanks__hiddenID]").val('0');
        $("[id$=_UCtransaction_AccordionPane6_content_UcBrach_txtSearchControl]").val('');
        $("[id$=_UCtransaction_AccordionPane6_content_UcBrach__hiddenID]").val('0');
        document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_AccordionPane6_content_ucChqAuth_txtSearchControl').value = '';
        document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_AccordionPane6_content_ucChqAuth__hiddenID').value = '0';
        return 1;
    }
    else
        return 0;
}
function ChkPayentAmt() {
    if (document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_chkPaymentMode_0').checked == false && document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_chkPaymentMode_1').checked == false && document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_chkPaymentMode_2').checked == false && document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_chkPaymentMode_3').checked == false) {
        document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_txtPayAmt').value = '0';
    }
}
function ExpandAccordion() {

    acc = $find("ctl00_ContentPlaceHolder1_UCtransaction_MyAccordion_AccordionExtender");
    var index;
    index = 0;
    header = acc.get_Pane(index).header;
    $removeHandler(header, "click", acc._headerClickHandler);
}
function RemoveValidation() {

    var dueamount = document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_txtDueAmt').value;
    if (dueamount === "0") {
        document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_UCdueAuthBy_txtSearchCriteria').disabled = false;
        document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_UCdueAuthBy_txtSearchCriteria').style.borderColor = 'yellow';
    }
    var payAmout = document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_txtPayAmt').value;
    if (payAmout == '' || payAmout == 'NaN') {
        document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_txtPayAmt').value = 0;
    }
    if (document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_chkPaymentMode_0').checked == true && document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_chkPaymentMode_1').checked == false && document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_chkPaymentMode_2').checked == false && document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_chkPaymentMode_3').checked == false) {
        document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_txtPayAmt').value = document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_txtCs_Total').value;
        document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_hdnTotal').value = document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_txtPayAmt').value;
    }
}
var countvar = 0;
function CalDueAmt(obj) {
    if (obj.value == '') obj.value = '0';

    var chequeAmt = document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_AccordionPane6_content_txtCQ_Amount');
    var creditCardAmount = document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_AccordionPane4_content_txtCC_Amount');
    var debitCardAmount = document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_AccordionPane5_content_txtDC_Amount');
    var cashAmount = document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_txtCs_Total');
    var paymentAmt = document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_txtPayAmt');

    if (chequeAmt.value == '') chequeAmt.value = '0';
    if (creditCardAmount.value == '') creditCardAmount.value = '0';
    if (debitCardAmount.value == '') debitCardAmount.value = '0';
    if (cashAmount.value == '') cashAmount.value = '0';

    if (document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_hdnFormName').value == 'PreRefund') {
        var totalAdvancePaid = document.getElementById('ctl00_ContentPlaceHolder1_lblTotalPaid');
        var paymentAmt = document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_txtPayAmt');
        if (paymentAmt.value == '' || paymentAmt.value == 'NaN' || paymentAmt.value == 'undefined')
            paymentAmt.value = 0;

        paymentAmt.value = parseFloat(cashAmount.value) + parseFloat(chequeAmt.value) + parseFloat(debitCardAmount.value) + parseFloat(creditCardAmount.value);

        if (parseFloat(paymentAmt.value) > parseFloat(totalAdvancePaid.value)) {
            RemoveLastIndexTran(obj);
            CalDueAmt(obj);
        }
    }
    else
        if (document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_hdnFormName').value == 'IPFINALBILL') {

        var dueAmt = document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_txtDueAmt');
        var paymentAmt = document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_txtPayAmt');
        var payableAmt = 0;
        if (paymentAmt.value == '' || paymentAmt.value == 'NaN' || paymentAmt.value == 'undefined')
            paymentAmt.value = 0;
        paymentAmt.value = parseFloat(cashAmount.value) + parseFloat(chequeAmt.value) + parseFloat(debitCardAmount.value) + parseFloat(creditCardAmount.value);

        if (document.getElementById('ctl00_ContentPlaceHolder1_chkBxAdjAmt').checked == true) {

            if (parseFloat(document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_lblBillNetAmt').value) > parseFloat(document.getElementById('ctl00_ContentPlaceHolder1_txtAdjAdvance').value)) {

                payableAmt = parseFloat(document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_lblBillNetAmt').value) - parseFloat(document.getElementById('ctl00_ContentPlaceHolder1_txtAdjAdvance').value);

                if (parseFloat(paymentAmt.value) > parseFloat(payableAmt)) {
                    RemoveLastIndexTran(obj);
                    CalDueAmt(obj);
                    paymentAmt.value = parseFloat(cashAmount.value) + parseFloat(chequeAmt.value) + parseFloat(debitCardAmount.value) + parseFloat(creditCardAmount.value);
                    dueAmt.value = parseFloat(payableAmt) - parseFloat(paymentAmt.value);
                }
                else {
                    paymentAmt.value = parseFloat(cashAmount.value) + parseFloat(chequeAmt.value) + parseFloat(debitCardAmount.value) + parseFloat(creditCardAmount.value);
                    dueAmt.value = parseFloat(payableAmt) - parseFloat(paymentAmt.value);
                }
            }
            else if (parseFloat(document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_lblBillNetAmt').value) == parseFloat(document.getElementById('ctl00_ContentPlaceHolder1_txtAdjAdvance').value)) {
                var chequeAmtVal = document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_AccordionPane6_content_txtCQ_Amount');
                var creditCardAmountVal = document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_AccordionPane4_content_txtCC_Amount');
                var debitCardAmountVal = document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_AccordionPane5_content_txtDC_Amount');
                var paymentAmtVal = document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_txtPayAmt');
                var cashAmountVal = document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_txtCs_Total');
                var dueAmount = parseFloat(document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_txtDueAmt').value);
                if (isNaN(dueAmount) || dueAmount == undefined)
                    dueAmount = 0;

                if (dueAmount == 0) {
                    chequeAmtVal.disabled = true;
                    creditCardAmountVal.disabled = true;
                    debitCardAmountVal.disabled = true;
                    paymentAmtVal.value = 0;
                    paymentAmtVal.disabled = true;
                    cashAmountVal.value = 0;
                    cashAmountVal.disabled = true;

                }
                else if (dueAmount > 0) {
                    chequeAmtVal.disabled = false;
                    creditCardAmountVal.disabled = false;
                    debitCardAmountVal.disabled = false;
                    paymentAmtVal.disabled = false;
                    cashAmountVal.disabled = false;

                }
            }
        }
        else
            if (parseFloat(paymentAmt.value) > parseFloat(document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_lblBillNetAmt').value)) {
            RemoveLastIndexTran(obj);
            CalDueAmt(obj);
            paymentAmt.value = parseFloat(cashAmount.value) + parseFloat(chequeAmt.value) + parseFloat(debitCardAmount.value) + parseFloat(creditCardAmount.value);
            dueAmt.value = parseFloat(document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_lblBillNetAmt').value) - parseFloat(paymentAmt.value);
        }
        else {
            paymentAmt.value = parseFloat(cashAmount.value) + parseFloat(chequeAmt.value) + parseFloat(debitCardAmount.value) + parseFloat(creditCardAmount.value);
            dueAmt.value = parseFloat(document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_lblBillNetAmt').value) - parseFloat(paymentAmt.value);
        }

        if (document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_txtDueAmt').value == '0') {
            document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_UCdueAuthBy_txtSearchControl').value = '';
            document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_UCdueAuthBy__hiddenID').vlaue = '0';
            document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_UCdueAuthBy_txtSearchControl').style.border = 'solid 1px #818d98';
            document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_UCdueAuthBy_txtSearchControl').disabled = true;
            document.getElementById('lk_btn_ctl00_ContentPlaceHolder1_UCtransaction_UCdueAuthBy').disabled = true;
        }
        else {
            document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_UCdueAuthBy_txtSearchControl').style.border = 'solid 1px #f4785e';
            document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_UCdueAuthBy_txtSearchControl').disabled = false;
            document.getElementById('lk_btn_ctl00_ContentPlaceHolder1_UCtransaction_UCdueAuthBy').disabled = false;
        }

    }
    else if (document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_hdnFormName').value == 'Change Receipt Mode') {
        var dueAmt = document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_txtDueAmt');

        var dueAmt = document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_txtDueAmt');
        var NetAmtFeild = document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_lblBillNetAmt');
        var dueAmtVal = 0;
        if (dueAmount != undefined)
            if (dueAmount.value.trim() != '' && !isNaN(dueAmount.value))
            dueAmtVal = dueAmount.value;

        var NetAmtVa = 0;
        if (NetAmtFeild != undefined)
            if (NetAmtFeild.value.trim() != '' && !isNaN(NetAmtFeild.value))
            NetAmtVa = NetAmtFeild.value;

        var paymentAmt = document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_txtPayAmt');
        if (paymentAmt.value == '' || paymentAmt.value == 'NaN' || paymentAmt.value == 'undefined')
            paymentAmt.value = 0;

        paymentAmt.value = parseFloat(cashAmount.value) + parseFloat(chequeAmt.value) + parseFloat(debitCardAmount.value) + parseFloat(creditCardAmount.value);

        if (NetAmtVa != 0) {
            if (parseFloat(paymentAmt.value) > parseFloat(document.getElementById('ctl00_ContentPlaceHolder1_UCPrevTransaction_txtPayAmt').value)) {
                RemoveLastIndexTran(obj);
                CalDueAmt(obj);
                paymentAmt.value = parseFloat(cashAmount.value) + parseFloat(chequeAmt.value) + parseFloat(debitCardAmount.value) + parseFloat(creditCardAmount.value);
                dueAmt.value = parseFloat(document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_lblBillNetAmt').value) - parseFloat(paymentAmt.value);
            }
            else {
                paymentAmt.value = parseFloat(cashAmount.value) + parseFloat(chequeAmt.value) + parseFloat(debitCardAmount.value) + parseFloat(creditCardAmount.value);
                dueAmt.value = parseFloat(document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_lblBillNetAmt').value) - parseFloat(paymentAmt.value);
            }
        }
        else if (document.getElementById('ctl00_ContentPlaceHolder1_rdbtnlst_4').checked == true && NetAmtVa == 0) {
            if (parseFloat(paymentAmt.value) > parseFloat(document.getElementById('ctl00_ContentPlaceHolder1_UCPrevTransaction_txtPayAmt').value)) {
                RemoveLastIndexTran(obj);
                CalDueAmt(obj);
                paymentAmt.value = parseFloat(cashAmount.value) + parseFloat(chequeAmt.value) + parseFloat(debitCardAmount.value) + parseFloat(creditCardAmount.value);
            }
            else {
                paymentAmt.value = parseFloat(cashAmount.value) + parseFloat(chequeAmt.value) + parseFloat(debitCardAmount.value) + parseFloat(creditCardAmount.value);
            }
        }
        if (document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_txtDueAmt').value == '0') {
            document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_UCdueAuthBy_txtSearchControl').value = '';
            document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_UCdueAuthBy__hiddenID').vlaue = '0';
            document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_UCdueAuthBy_txtSearchControl').style.border = 'solid 1px #818d98';
            document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_UCdueAuthBy_txtSearchControl').disabled = true;
            document.getElementById('lk_btn_ctl00_ContentPlaceHolder1_UCtransaction_UCdueAuthBy').disabled = true;
        }
        else {
            document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_UCdueAuthBy_txtSearchControl').style.border = 'solid 1px #f4785e';
            document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_UCdueAuthBy_txtSearchControl').disabled = false;
            document.getElementById('lk_btn_ctl00_ContentPlaceHolder1_UCtransaction_UCdueAuthBy').disabled = false;
        }
    }
    else
        if (document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_hdnFormName').value == 'OUTSTAN') {

        var dueAmt = document.getElementById('ctl00_ContentPlaceHolder1_txtDueAmount');
        var paymentAmt = document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_txtPayAmt');
        if (paymentAmt.value == '' || paymentAmt.value == 'NaN' || paymentAmt.value == 'undefined')
            paymentAmt.value = 0;


        paymentAmt.value = parseFloat(cashAmount.value) + parseFloat(chequeAmt.value) + parseFloat(debitCardAmount.value) + parseFloat(creditCardAmount.value);


        if (parseFloat(paymentAmt.value) > parseFloat(dueAmt.value)) {
            RemoveLastIndexTran(obj);
            paymentAmt.value = parseFloat(cashAmount.value) + parseFloat(chequeAmt.value) + parseFloat(debitCardAmount.value) + parseFloat(creditCardAmount.value);
            CalDueAmt(obj);
        }
        else {
            paymentAmt.value = parseFloat(cashAmount.value) + parseFloat(chequeAmt.value) + parseFloat(debitCardAmount.value) + parseFloat(creditCardAmount.value);
        }
    }
    else
        if (document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_hdnFormName').value == 'PREADVANCE') {

        var paymentAmt = document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_txtPayAmt');
        if (paymentAmt.value == '' || paymentAmt.value == 'NaN' || paymentAmt.value == 'undefined')
            paymentAmt.value = 0;
        paymentAmt.value = parseFloat(cashAmount.value) + parseFloat(chequeAmt.value) + parseFloat(debitCardAmount.value) + parseFloat(creditCardAmount.value);

    }
    else
        if (document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_hdnFormName').value == 'DEPOSITADVANCE') {

        var paymentAmt = document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_txtPayAmt');
        if (paymentAmt.value == '' || paymentAmt.value == 'NaN' || paymentAmt.value == 'undefined')
            paymentAmt.value = 0;
        paymentAmt.value = parseFloat(cashAmount.value) + parseFloat(chequeAmt.value) + parseFloat(debitCardAmount.value) + parseFloat(creditCardAmount.value);

    }
    else
        if (document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_hdnFormName').value == 'PREADVANCESETTELE') {

        var refundableAmount = document.getElementById('ctl00_ContentPlaceHolder1_txtRefundableAmt');
        var PaybleAmount = document.getElementById('ctl00_ContentPlaceHolder1_txtPaybleAmount');
        paymentAmt.value = parseFloat(cashAmount.value) + parseFloat(chequeAmt.value) + parseFloat(debitCardAmount.value) + parseFloat(creditCardAmount.value);

        if (refundableAmount.value == NaN || refundableAmount.value == undefined || refundableAmount.value == '')
            refundableAmount.value = '0';
        if (PaybleAmount.value == NaN || PaybleAmount.value == undefined || PaybleAmount.value == '')
            PaybleAmount.value = '0';
        if (parseFloat(refundableAmount.value) > 0) {
            if (parseFloat(paymentAmt.value) > parseFloat(refundableAmount.value)) {
                RemoveLastIndexTran(obj);
                paymentAmt.value = parseFloat(cashAmount.value) + parseFloat(chequeAmt.value) + parseFloat(debitCardAmount.value) + parseFloat(creditCardAmount.value);

                document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_txtPayAmt').value = parseFloat(paymentAmt.value);
                CalDueAmt(obj);
            }
        }
        else if (parseFloat(PaybleAmount.value) > 0) {
            if (parseFloat(paymentAmt.value) > parseFloat(PaybleAmount.value)) {
                RemoveLastIndexTran(obj);
                paymentAmt.value = parseFloat(cashAmount.value) + parseFloat(chequeAmt.value) + parseFloat(debitCardAmount.value) + parseFloat(creditCardAmount.value);

                document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_txtPayAmt').value = parseFloat(paymentAmt.value);
                CalDueAmt(obj);
            }
        }
        else if (refundableAmount.value == '0' && PaybleAmount.value == '0') {
            RemoveLastIndexTran(obj);
            document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_txtPayAmt').value = '0';
        }
        else
            document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_txtPayAmt').value = parseFloat(paymentAmt.value);
    }
    else
        if (document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_hdnFormName').value == 'VoucherEntry') {

        var len = document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_txtCs_Total').value.length;
        var index = document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_txtCs_Total').value.indexOf('.');

        if (index > 0) {
            var CharAfterdot = (len + 1) - index;
            if (CharAfterdot > 3) {
                if (CharAfterdot != 4) {
                    var removeTxt = document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_txtCs_Total').value.length - 1;
                    var orgText = document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_txtCs_Total').value;
                    var FinalText = orgText.substr(0, parseInt(removeTxt));
                    document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_txtCs_Total').value = parseFloat(FinalText);
                    return false;
                }
            }
        }

        var payableAmount = document.getElementById('ctl00_ContentPlaceHolder1_txtRefSettleAmt');

        if (paymentAmt.value == '' || paymentAmt.value == 'NaN' || paymentAmt.value == 'undefined')
            paymentAmt.value = 0;

        paymentAmt.value = parseFloat(cashAmount.value) + parseFloat(chequeAmt.value) + parseFloat(debitCardAmount.value) + parseFloat(creditCardAmount.value);

        if (parseFloat(paymentAmt.value) > parseFloat(RemoveComma(payableAmount.value))) {
            RemoveLastIndexTran(obj);
            paymentAmt.value = parseFloat(cashAmount.value) + parseFloat(chequeAmt.value) + parseFloat(debitCardAmount.value) + parseFloat(creditCardAmount.value);
            document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_txtPayAmt').value = parseFloat(paymentAmt.value);
            CalDueAmt(obj);
        }
        else {
            document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_txtPayAmt').value = parseFloat(paymentAmt.value);

        }

    }

    else
        if (document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_hdnFormName').value == 'REFUND') {

        var refundableAmount = '0';
        var IpBIlls = document.getElementById('ctl00_ContentPlaceHolder1_rdBtnListRefund_2');
        if (document.getElementById('ctl00_ContentPlaceHolder1_hdnAllowUptoReceipt') != null && document.getElementById('ctl00_ContentPlaceHolder1_hdnAllowUptoReceipt') != undefined && document.getElementById('ctl00_ContentPlaceHolder1_hdnAllowUptoReceipt').value == 'True' && IpBIlls.checked == true) {
            refundableAmount = document.getElementById('ctl00_ContentPlaceHolder1_txtTotReceived');
        }
        else {
            refundableAmount = document.getElementById('ctl00_ContentPlaceHolder1_txtRefundableAmt');
        }

        var refundAmount = document.getElementById('ctl00_ContentPlaceHolder1_txtRefundAmt');
        if (paymentAmt.value == '' || paymentAmt.value == 'NaN' || paymentAmt.value == 'undefined')
            paymentAmt.value = 0;

        paymentAmt.value = parseFloat(cashAmount.value) + parseFloat(chequeAmt.value) + parseFloat(debitCardAmount.value) + parseFloat(creditCardAmount.value);

        if (parseFloat(paymentAmt.value) > parseFloat(RemoveComma(refundableAmount.value))) {
            RemoveLastIndexTran(obj);
            paymentAmt.value = parseFloat(cashAmount.value) + parseFloat(chequeAmt.value) + parseFloat(debitCardAmount.value) + parseFloat(creditCardAmount.value);
            document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_txtPayAmt').value = parseFloat(paymentAmt.value);
            refundAmount.value = parseFloat(paymentAmt.value);
            CalDueAmt(obj);
        }
        else {
            document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_txtPayAmt').value = parseFloat(paymentAmt.value);
            refundAmount.value = parseFloat(paymentAmt.value);
        }

    }
    else if (document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_hdnFormName').value == 'Registration') {
        var concessionAmount = document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_txtConcessionAmt');
        var netAmount = document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_lblBillNetAmt');
        var grossAmount = document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_lblTamount');
        var dueAmount = document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_txtDueAmt');

        concessionAmount.value = concessionAmount.value == '' || concessionAmount == undefined ? '0' : concessionAmount.value;
        netAmount.value = parseFloat(grossAmount.value == '' ? '0' : grossAmount.value) - parseFloat(concessionAmount.value);
        paymentAmt.value = parseFloat(cashAmount.value) + parseFloat(chequeAmt.value) + parseFloat(debitCardAmount.value) + parseFloat(creditCardAmount.value);
        if (parseFloat(paymentAmt.value) > parseFloat(RemoveComma(netAmount.value))) {
            RemoveLastIndexTran(obj);
            paymentAmt.value = parseFloat(cashAmount.value) + parseFloat(chequeAmt.value) + parseFloat(debitCardAmount.value) + parseFloat(creditCardAmount.value);
            document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_txtPayAmt').value = parseFloat(paymentAmt.value);
            document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_txtDueAmt').value = parseFloat(netAmount.value) - parseFloat(paymentAmt.value);
            CalDueAmt(obj);
        }
        else {
            document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_txtPayAmt').value = parseFloat(paymentAmt.value);
            document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_txtDueAmt').value = parseFloat(netAmount.value) - parseFloat(paymentAmt.value);
        }
        if (document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_txtDueAmt').value == '0') {
            document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_UCdueAuthBy_txtSearchControl').value = '';
            document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_UCdueAuthBy__hiddenID').vlaue = '0';
            document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_UCdueAuthBy_txtSearchControl').style.border = 'solid 1px #818d98';
            document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_UCdueAuthBy_txtSearchControl').disabled = true;
            document.getElementById('lk_btn_ctl00_ContentPlaceHolder1_UCtransaction_UCdueAuthBy').disabled = true;
        }
        else {
            document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_UCdueAuthBy_txtSearchControl').style.border = 'solid 1px #f4785e';
            document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_UCdueAuthBy_txtSearchControl').disabled = false;
            document.getElementById('lk_btn_ctl00_ContentPlaceHolder1_UCtransaction_UCdueAuthBy').disabled = false;
        }

        if (concessionAmount.value == '0') {
            document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_UCconcAuth_txtSearchControl').value = '';
            document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_UCconcAuth__hiddenID').vlaue = '0';
            document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_UCconcAuth_txtSearchControl').style.border = 'solid 1px #818d98';
            document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_UCconcAuth_txtSearchControl').disabled = true;
            document.getElementById('lk_btn_ctl00_ContentPlaceHolder1_UCtransaction_UCconcAuth').disabled = true;
        }
        else {
            document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_UCconcAuth_txtSearchControl').style.border = 'solid 1px #f4785e';
            document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_UCconcAuth_txtSearchControl').disabled = false;
            document.getElementById('lk_btn_ctl00_ContentPlaceHolder1_UCtransaction_UCconcAuth').disabled = false;
        }
    }
    else if (document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_hdnFormName').value == 'SampleOpBilling') {
        var concessionAmount = document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_txtConcessionAmt');
        var netAmount = document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_lblBillNetAmt');
        var grossAmount = document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_lblTamount');
        var dueAmount = document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_txtDueAmt');
        var AdvanceAmt = document.getElementById('ctl00_ContentPlaceHolder1_txtAdjAdvance').value;
        AdvanceAmt = (AdvanceAmt == null || AdvanceAmt == "" || AdvanceAmt == "null") ? "0" : AdvanceAmt.trim() == "" ? "0" : AdvanceAmt;
        var ExcessAmt = document.getElementById('ctl00_ContentPlaceHolder1_txtExcessAmt').value;
        ExcessAmt = (ExcessAmt == null || ExcessAmt == "" || ExcessAmt == "null") ? "0" : ExcessAmt.trim() == "" ? "0" : ExcessAmt;
        concessionAmount.value = concessionAmount.value == '' || concessionAmount == undefined ? '0' : concessionAmount.value;
        if ($('[id*=chkAdjustbleAmt]')[0].checked == true) {
            netAmount.value = parseFloat(grossAmount.value == '' ? '0' : grossAmount.value) - parseFloat(concessionAmount.value) - parseFloat(AdvanceAmt) + parseFloat(ExcessAmt);
        }
        else {
            netAmount.value = parseFloat(grossAmount.value == '' ? '0' : grossAmount.value) - parseFloat(concessionAmount.value);
        }
        paymentAmt.value = parseFloat(cashAmount.value) + parseFloat(chequeAmt.value) + parseFloat(debitCardAmount.value) + parseFloat(creditCardAmount.value);
        if (parseFloat(paymentAmt.value) > parseFloat(RemoveComma(netAmount.value))) {
            RemoveLastIndexTran(obj);
            paymentAmt.value = parseFloat(cashAmount.value) + parseFloat(chequeAmt.value) + parseFloat(debitCardAmount.value) + parseFloat(creditCardAmount.value);
            document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_txtPayAmt').value = parseFloat(paymentAmt.value);
            document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_txtDueAmt').value = parseFloat(netAmount.value) - parseFloat(paymentAmt.value);
            CalDueAmt(obj);
        }
        else {
            document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_txtPayAmt').value = parseFloat(paymentAmt.value);
            document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_txtDueAmt').value = parseFloat(netAmount.value) - parseFloat(paymentAmt.value);
        }
        if (document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_txtDueAmt').value == '0') {
            document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_UCdueAuthBy_txtSearchControl').value = '';
            document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_UCdueAuthBy__hiddenID').vlaue = '0';
            document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_UCdueAuthBy_txtSearchControl').style.border = 'solid 1px #818d98';
            document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_UCdueAuthBy_txtSearchControl').disabled = true;
            document.getElementById('lk_btn_ctl00_ContentPlaceHolder1_UCtransaction_UCdueAuthBy').disabled = true;
        }
        else {
            document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_UCdueAuthBy_txtSearchControl').style.border = 'solid 1px #f4785e';
            document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_UCdueAuthBy_txtSearchControl').disabled = false;
            document.getElementById('lk_btn_ctl00_ContentPlaceHolder1_UCtransaction_UCdueAuthBy').disabled = false;
        }
    }
    else
        if (document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_hdnFormName').value == 'OPBILLING') { /*OPBILLING or OSP BILLING*/


        var concessionAmount = document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_txtConcessionAmt');
        var netAmount = document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_lblBillNetAmt');
        var grossAmount = document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_lblTamount');
        var dueAmount = document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_txtDueAmt');

        concessionAmount.value = concessionAmount.value == '' || concessionAmount == undefined ? '0' : concessionAmount.value;
        netAmount.value = parseFloat(grossAmount.value == '' ? '0' : grossAmount.value) - parseFloat(concessionAmount.value);
        paymentAmt.value = parseFloat(cashAmount.value) + parseFloat(chequeAmt.value) + parseFloat(debitCardAmount.value) + parseFloat(creditCardAmount.value);
        if (parseFloat(paymentAmt.value) > parseFloat(RemoveComma(netAmount.value))) {
            RemoveLastIndexTran(obj);
            paymentAmt.value = parseFloat(cashAmount.value) + parseFloat(chequeAmt.value) + parseFloat(debitCardAmount.value) + parseFloat(creditCardAmount.value);
            document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_txtPayAmt').value = parseFloat(paymentAmt.value);
            document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_txtDueAmt').value = parseFloat(netAmount.value) - parseFloat(paymentAmt.value);
            CalDueAmt(obj);
        }
        else {
            document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_txtPayAmt').value = parseFloat(paymentAmt.value);
            document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_txtDueAmt').value = parseFloat(netAmount.value) - parseFloat(paymentAmt.value);
        }
        if (document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_txtDueAmt').value == '0') {
            document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_UCdueAuthBy_txtSearchControl').value = '';
            document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_UCdueAuthBy__hiddenID').vlaue = '0';
            document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_UCdueAuthBy_txtSearchControl').style.border = 'solid 1px #818d98';
            document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_UCdueAuthBy_txtSearchControl').disabled = true;
            document.getElementById('lk_btn_ctl00_ContentPlaceHolder1_UCtransaction_UCdueAuthBy').disabled = true;
        }
        else {
            document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_UCdueAuthBy_txtSearchControl').style.border = 'solid 1px #f4785e';
            document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_UCdueAuthBy_txtSearchControl').disabled = false;
            document.getElementById('lk_btn_ctl00_ContentPlaceHolder1_UCtransaction_UCdueAuthBy').disabled = false;
        }
    }
    else
        if (document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_hdnFormName').value == 'REGCONSOPBILL') { /*OPBILLING or OSP BILLING*/


        var concessionAmount = document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_txtConcessionAmt');
        var netAmount = document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_lblBillNetAmt');
        var grossAmount = document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_lblTamount');
        var dueAmount = document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_txtDueAmt');

        concessionAmount.value = concessionAmount.value == '' || concessionAmount == undefined ? '0' : concessionAmount.value;
        netAmount.value = parseFloat(grossAmount.value == '' ? '0' : grossAmount.value) - parseFloat(concessionAmount.value);
        paymentAmt.value = parseFloat(cashAmount.value) + parseFloat(chequeAmt.value) + parseFloat(debitCardAmount.value) + parseFloat(creditCardAmount.value);
        if (parseFloat(paymentAmt.value) > parseFloat(RemoveComma(netAmount.value))) {
            RemoveLastIndexTran(obj);
            paymentAmt.value = parseFloat(cashAmount.value) + parseFloat(chequeAmt.value) + parseFloat(debitCardAmount.value) + parseFloat(creditCardAmount.value);
            document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_txtPayAmt').value = parseFloat(paymentAmt.value);
            document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_txtDueAmt').value = parseFloat(netAmount.value) - parseFloat(paymentAmt.value);
            CalDueAmt(obj);
        }
        else {
            document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_txtPayAmt').value = parseFloat(paymentAmt.value);
            document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_txtDueAmt').value = parseFloat(netAmount.value) - parseFloat(paymentAmt.value);
        }
        if (document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_txtDueAmt').value == '0') {
            document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_UCdueAuthBy_txtSearchControl').value = '';
            document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_UCdueAuthBy__hiddenID').vlaue = '0';
            document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_UCdueAuthBy_txtSearchControl').style.border = 'solid 1px #818d98';
            document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_UCdueAuthBy_txtSearchControl').disabled = true;
            document.getElementById('lk_btn_ctl00_ContentPlaceHolder1_UCtransaction_UCdueAuthBy').disabled = true;
        }
        else {
            document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_UCdueAuthBy_txtSearchControl').style.border = 'solid 1px #f4785e';
            document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_UCdueAuthBy_txtSearchControl').disabled = false;
            document.getElementById('lk_btn_ctl00_ContentPlaceHolder1_UCtransaction_UCdueAuthBy').disabled = false;
        }
    }
    else if (document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_hdnFormName').value == 'OPConsultation') {
        var concessionAmount = document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_txtConcessionAmt');
        var netAmount = document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_lblBillNetAmt');
        var grossAmount = document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_lblTamount');
        var dueAmount = document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_txtDueAmt');
        var IsCorp = document.getElementById('ctl00_ContentPlaceHolder1_hdnIsCorp');
        var TaxAmt = document.getElementById('ctl00_ContentPlaceHolder1_txtTaxAmt');
        concessionAmount.value = concessionAmount.value == '' || concessionAmount == undefined ? '0' : concessionAmount.value;
        if (IsCorp.value == "OPCORP") {
            if (TaxAmt.value == '' || TaxAmt.value == 'NaN' || TaxAmt.value == 'undefined')
                TaxAmt.value = '0';
            netAmount.value = parseFloat(grossAmount.value == '' ? '0' : grossAmount.value) - parseFloat(concessionAmount.value) + parseFloat(Math.round(TaxAmt.value));
        }
        else {
            netAmount.value = parseFloat(grossAmount.value == '' ? '0' : grossAmount.value) - parseFloat(concessionAmount.value);
        }
        paymentAmt.value = parseFloat(cashAmount.value) + parseFloat(chequeAmt.value) + parseFloat(debitCardAmount.value) + parseFloat(creditCardAmount.value);
        if (parseFloat(paymentAmt.value) > parseFloat(RemoveComma(netAmount.value))) {
            RemoveLastIndexTran(obj);
            paymentAmt.value = parseFloat(cashAmount.value) + parseFloat(chequeAmt.value) + parseFloat(debitCardAmount.value) + parseFloat(creditCardAmount.value);
            document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_txtPayAmt').value = parseFloat(paymentAmt.value);
            document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_txtDueAmt').value = parseFloat(netAmount.value) - parseFloat(paymentAmt.value);
            CalDueAmt(obj);
        }
        else {
            document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_txtPayAmt').value = parseFloat(paymentAmt.value);
            document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_txtDueAmt').value = parseFloat(netAmount.value) - parseFloat(paymentAmt.value);
        }
        if (document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_txtDueAmt').value == '0') {
            document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_UCdueAuthBy_txtSearchControl').value = '';
            document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_UCdueAuthBy__hiddenID').vlaue = '0';
            document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_UCdueAuthBy_txtSearchControl').style.border = 'solid 1px #818d98';
            document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_UCdueAuthBy_txtSearchControl').disabled = true;
            document.getElementById('lk_btn_ctl00_ContentPlaceHolder1_UCtransaction_UCdueAuthBy').disabled = true;
        }
        else {
            document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_UCdueAuthBy_txtSearchControl').style.border = 'solid 1px #f4785e';
            document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_UCdueAuthBy_txtSearchControl').disabled = false;
            document.getElementById('lk_btn_ctl00_ContentPlaceHolder1_UCtransaction_UCdueAuthBy').disabled = false;
        }
    }
    else if (document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_hdnFormName').value == 'STMTCOLLECTION') {
        var concessionAmount = document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_txtConcessionAmt');
        var netAmount = document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_lblBillNetAmt');
        var grossAmount = document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_lblTamount');
        var dueAmount = document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_txtDueAmt');

        netAmount.value = parseFloat(grossAmount.value);
        paymentAmt.value = parseFloat(cashAmount.value) + parseFloat(chequeAmt.value) + parseFloat(debitCardAmount.value) + parseFloat(creditCardAmount.value);
        if (parseFloat(paymentAmt.value) > parseFloat(netAmount.value)) {
            RemoveLastIndexTran(obj);
            paymentAmt.value = parseFloat(cashAmount.value) + parseFloat(chequeAmt.value) + parseFloat(debitCardAmount.value) + parseFloat(creditCardAmount.value);
            document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_txtPayAmt').value = parseFloat(paymentAmt.value);
            document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_txtDueAmt').value = parseFloat(netAmount.value) - parseFloat(paymentAmt.value);
            CalDueAmt(obj);
        }
        else {
            document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_txtPayAmt').value = parseFloat(paymentAmt.value);
            document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_txtDueAmt').value = parseFloat(netAmount.value) - parseFloat(paymentAmt.value);
        }
        if (document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_txtDueAmt').value == '0') {
            document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_UCdueAuthBy_txtSearchControl').value = '';
            document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_UCdueAuthBy__hiddenID').vlaue = '0';
            document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_UCdueAuthBy_txtSearchControl').style.border = 'solid 1px #818d98';
            document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_UCdueAuthBy_txtSearchControl').disabled = true;
            document.getElementById('lk_btn_ctl00_ContentPlaceHolder1_UCtransaction_UCdueAuthBy').disabled = true;
        }
    }
    else
        if (document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_hdnFormName').value == 'CORP OP CLIENTSIDE' || document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_hdnFormName').value == 'Corporate OP Miscelleneous Billing') {
        var grossAmount = document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_lblTamount');
        var netAmt = document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_lblBillNetAmt');
        var concessionAmount = document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_txtConcessionAmt');
        var CorpPayAmt = document.getElementById('ctl00_ContentPlaceHolder1_txtCorpPayAmt');
        var CorpDueAmt = document.getElementById('ctl00_ContentPlaceHolder1_txtCorpDueAmt');
        var EmpPayAmt = document.getElementById('ctl00_ContentPlaceHolder1_txtEmpPayAmt');
        var EmpDueChk = document.getElementById('ctl00_ContentPlaceHolder1_chkbx');

        var OrgTaxAmt = document.getElementById('ctl00_ContentPlaceHolder1_txtOrgTaxAmt');
        var EmpTaxAmt = document.getElementById('ctl00_ContentPlaceHolder1_txtEmpTaxAmt');
        if (OrgTaxAmt.value == '' || OrgTaxAmt.value == 'NaN')
            OrgTaxAmt.value = '0';
        if (EmpTaxAmt.value == '' || EmpPayAmt.value == 'NaN')
            EmpTaxAmt.value = '0';
        netAmt.value = parseFloat(EmpPayAmt.value) + parseFloat(EmpTaxAmt.value);
        if (document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_txtPayAmt').value == "0") {
            document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_txtDueAmt').value = parseFloat(netAmt.value);
        }
        paymentAmt.value = parseFloat(cashAmount.value) + parseFloat(chequeAmt.value) + parseFloat(debitCardAmount.value) + parseFloat(creditCardAmount.value);

        if (parseFloat(paymentAmt.value) > parseFloat(RemoveComma(netAmt.value))) {
            RemoveLastIndexTran(obj);
            paymentAmt.value = parseFloat(cashAmount.value) + parseFloat(chequeAmt.value) + parseFloat(debitCardAmount.value) + parseFloat(creditCardAmount.value);
            document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_txtPayAmt').value = parseFloat(paymentAmt.value);
            document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_txtDueAmt').value = parseFloat(netAmt.value) - parseFloat(paymentAmt.value);
            document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_lblBillNetAmt').value = parseFloat(EmpPayAmt.value) + parseFloat(EmpTaxAmt.value);
            CalDueAmt(obj);
        }
        else {
            document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_txtPayAmt').value = parseFloat(paymentAmt.value);
            document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_txtDueAmt').value = parseFloat(netAmt.value) - parseFloat(paymentAmt.value);
            document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_lblBillNetAmt').value = parseFloat(EmpPayAmt.value) + parseFloat(EmpTaxAmt.value);
        }

        if (document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_txtDueAmt').value == '0') {
            document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_UCdueAuthBy_txtSearchControl').value = '';
            document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_UCdueAuthBy__hiddenID').vlaue = '0';
            document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_UCdueAuthBy_txtSearchControl').style.border = 'solid 1px #818d98';
            document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_UCdueAuthBy_txtSearchControl').disabled = true;
            document.getElementById('lk_btn_ctl00_ContentPlaceHolder1_UCtransaction_UCdueAuthBy').disabled = true;
        }
        else {
            document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_UCdueAuthBy__hiddenID').vlaue = '0';
            document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_UCdueAuthBy_txtSearchControl').style.border = 'solid 1px #818d98';
            document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_UCdueAuthBy_txtSearchControl').disabled = false;
            document.getElementById('lk_btn_ctl00_ContentPlaceHolder1_UCtransaction_UCdueAuthBy').disabled = false;
        }
        if (EmpDueChk.checked == true) {
            document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_UCdueAuthBy__hiddenID').vlaue = '0';
            document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_UCdueAuthBy_txtSearchControl').disabled = false;
            document.getElementById('lk_btn_ctl00_ContentPlaceHolder1_UCtransaction_UCdueAuthBy').disabled = false;
        }
        else {
            document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_UCdueAuthBy_txtSearchControl').value = '';
            document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_UCdueAuthBy__hiddenID').vlaue = '0';
            document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_UCdueAuthBy_txtSearchControl').disabled = true;
            document.getElementById('lk_btn_ctl00_ContentPlaceHolder1_UCtransaction_UCdueAuthBy').disabled = true;
        }

    }
    else /* Organization Due Payment*/
        if (document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_hdnFormName').value == 'CORPDUE') {
        var DisAllowanceAmt = document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_txtDisAllowence').value;
        var HospitalConcAmt = document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_txtHospitalConAmt').value;
        var orgDueAmt = document.getElementById('ctl00_ContentPlaceHolder1_txtOrgDueAmount').value;
        var paymentValue = document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_txtPayAmt');
        DisAllowanceAmt = typeof DisAllowanceAmt == 'string' ? (typeof DisAllowanceAmt == 'undefined' || DisAllowanceAmt.trim() == '' ? 0 : parseFloat(DisAllowanceAmt)) : (typeof DisAllowanceAmt == 'object' ? 0 : parseFloat(DisAllowanceAmt));
        HospitalConcAmt = typeof HospitalConcAmt == 'string' ? (typeof HospitalConcAmt == 'undefined' || HospitalConcAmt.trim() == '' ? 0 : parseFloat(HospitalConcAmt)) : (typeof HospitalConcAmt == 'object' ? 0 : parseFloat(HospitalConcAmt));

        paymentValue.value = parseFloat(cashAmount.value) + parseFloat(chequeAmt.value) + parseFloat(debitCardAmount.value) + parseFloat(creditCardAmount.value);

        var orgDuePaymentAmt = document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_txtPayAmt').value;
        orgDueAmt == typeof orgDueAmt == 'string' ? (typeof orgDueAmt == 'undefined' || orgDueAmt.trim() == '' ? 0 : parseFloat(orgDueAmt)) : (typeof orgDueAmt == 'object' ? 0 : parseFloat(orgDueAmt));
        orgDueAmt = parseFloat(orgDueAmt) - (parseFloat(HospitalConcAmt) + parseFloat(DisAllowanceAmt));

        if (parseFloat(orgDuePaymentAmt) > parseFloat(orgDueAmt)) {
            RemoveLastIndexTran(obj);
            paymentValue.value = parseFloat(cashAmount.value) + parseFloat(chequeAmt.value) + parseFloat(debitCardAmount.value) + parseFloat(creditCardAmount.value);
            CalDueAmt(obj);

        }
        else {
            document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_txtPayAmt').value = parseFloat(paymentValue.value);
            document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_txtDueAmt').value = parseFloat(orgDueAmt) - parseFloat(paymentValue.value);
        }
    }


    if (document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_chkPaymentMode_0').checked == false && cashAmount.value > 0) {
        document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_chkPaymentMode_0').checked = true;
    }
    if (document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_chkPaymentMode_1').checked == false && creditCardAmount.value > 0) {
        document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_chkPaymentMode_1').checked = true;
    }
    if (document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_chkPaymentMode_2').checked == false && debitCardAmount.value > 0)
        document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_chkPaymentMode_2').checked = true;
    if (document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_chkPaymentMode_3').checked == false && chequeAmt.value > 0)
        document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_chkPaymentMode_3').checked = true;
    if (creditCardAmount.value > 0 || debitCardAmount.value || chequeAmt.value)
        CardsValidationForTC();
    if (localStorage.getItem("ED") != undefined && localStorage.getItem("ED") != null && localStorage.getItem("ED") != "") {
        OnExtendAmounts();
    }
}
function RemoveLastIndexTran(obj) {
    var removeTxt = obj.value.length - 1;
    var orgText = obj.value;
    obj.value = orgText.substr(0, parseInt(removeTxt));
    if (obj.value == '') obj.value = '0';
}
function ClearCashDenomication() {
    document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_txtCs_Total').value = '';
    document.getElementById('ctl00_ContentPlaceHolder1_UCtransaction_hdnTotal').value = '';
}
function RemoveCutCopyPaste(txtArray) {
    for (var i = 0; i <= txtArray.length - 1; i++) {
        $('' + txtArray[i] + '').bind('cut copy paste',
function(e) {
    e.preventDefault();
    alert("Cut / Copy / Paste disabled in this textbox");
});
    }
} 