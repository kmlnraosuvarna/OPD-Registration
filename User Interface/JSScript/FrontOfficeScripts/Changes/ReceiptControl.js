
var ctrlcom = 'ctl00_ContentPlaceHolder1';



function setProperDecimals(ActualVal) {

    if (ActualVal == undefined || ActualVal == null || ActualVal == '') { ActualVal = 0; }
    /**/
    //var ActualVal = Math.round(ActualVal * 100) / 100;
       var ActualVal = (ActualVal * 100) / 100;
    return ActualVal;
}
/* Modifacation done by Swetha Reddy if u want to change let me know*/
/* Validations Starts */


function setProperDecimalsCorp(ActualVal) {
    if (ActualVal == undefined || ActualVal == null || ActualVal == '') { ActualVal = 0; }
    var power = Math.pow(10, 6 || 0);
    var ActualVal = String(Math.round(ActualVal * power) / power);
    if ((ActualVal.indexOf('.') + 1) == 0) {
        ActualVal = ActualVal;
    }
    return ActualVal;
}
function AssignZeroTest(ev) {
    var CurrentRowIndex = 0;
    if (ev.value == '' || ev.value == undefined || ev.value == null || ev.value.trim() == "NaN") {
        ev.value = '0';
    }
}
function isNumericEntry(evt) {
    var intKey = (window.Event) ? evt.which : evt.keyCode;
    if (intKey == 13 || intKey == 8 || intKey == 0 || intKey == 46 || intKey == 40 || intKey == 32 || intKey >= 48 && intKey <= 57) /*|| event.keyCode == 50 || event.keyCode == 51 || event.keyCode == 52 || event.keyCode == 53 || event.keyCode == 54 || event.keyCode == 55 || event.keyCode == 56 || event.keyCode == 57 )*/
    {
        evt.returnValue = true;
        return true;
    }
    else {
        evt.returnValue = false;
        return false;
    }

}
function ReplaceStartWithZero(obj) {
    var _amt = document.getElementById(obj.id).value;
    var _test = _amt.split('');
    var str = 0;
    for (var i = 0; i <= _test.length; i++) {
        if (_test[i] > 0) {
            break
        }
        else {
            str++;
        }
    }
    var strValue = _amt.substring(str, _amt.length);
    document.getElementById(obj.id).value = strValue;
}
var arr = new Array();
function numeralsOnlyTest(evt, obj) {

    var intKey = (window.Event) ? evt.which : evt.keyCode;
    if (intKey == undefined)/*for InternetExplorer(IE) */
    {
        var charcode = evt.keyCode;
        if (charcode > 31 && (charcode < 48 || charcode > 57) && charcode != 46) {
            evt.returnValue = false;
            return false;
        }
        if (charcode == 46) {
            if ($.inArray(parseInt(charcode), arr) != -1) {
                evt.returnValue = false;
                return false;
            }
            else {
                arr.push(charcode);
            }
        }
        /*ReplaceStartWithZero(obj);*//*Please dont uncomment this line b'coz some payment selection of amt will get some problem*/
        return true;
    }
    else/*for Mozilla*/
    {
        if (intKey > 31 && (intKey < 48 || intKey > 57) && intKey != 46) {
            evt.returnValue = false;
            return false;
        }
        if (intKey == 46) {
            if ($.inArray(parseInt(intKey), arr) != -1) {
                evt.returnValue = false;
                return false;
            }
            else {
                arr.push(intKey);
            }
        }
        /*ReplaceStartWithZero(obj);*//*Please dont uncomment this line b'coz some payment selection of amt will get some problem*/
        return true;
    }
}
function TestCondition(evt, obj) {
    var _val = '';
    if (evt == "Perecent" || evt == "Amount") {
        _val = obj.value;
    }
    else {
        _val = document.getElementById(obj.id).value;
    }

    if (_val == '' || _val == 0) {
        arr = [];
    }
    if (_val.indexOf('.') == -1) {
        arr = [];
    }
}
function ClearTextboxTest(ev) {
    var CurrentRowIndex = 0;
    if (ev.value == 0 || ev.value == '') {
        arr = [];
    }
    if (ev.value == 0 || ev.value == '0' || ev.value == "NaN" || ev.value == undefined || ev.value == null) {
        ev.value = '';
    }
}
function ClearPointArray(obj) {
    arr = [];
}
function RemoveLastIndx(obj) {
    var removeTxt = document.getElementById(obj).value.length - 1;
    var orgText = document.getElementById(obj).value;
    document.getElementById(obj).value = orgText.substr(0, parseInt(removeTxt));
}
/* Validations Ends */
var TotalConcessionPersentage = 0;
function CalculateAmountConcSrv(obj, Type, Currentvalue) {
    var Perconces = 0, concession = 0, txtPayAmt = 0, dec = 2;
    var corpPercent = 0;
    var empPercent = 100;
    var sGrid = document.getElementById('' + ctrlcom + '_UCServices_gvServices');
    var OrginalTransAmount = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtgrosstotal').value;
    var TAmount = 0, GAmount = 0, Amount = 0, NetAmount = 0, Qty = 0, Rate = 0, IndivConcession = 0, InitialAmount = 0, TotConcession = 0, empAmt = 0, corpAmt = 0;
    var servicename = 0;
    var concpersent = 0;
    var GridConcPer = 0;
    var HealthCardGridConcPer = 0;
    var ManagementGridConcPer = 0;
    var StaffGridConcPer = 0;
    var EventBasedGridConcPer = 0;
    $("table[id*=gvMultipleConcession] tr").each(function (e) {
        var ConcessionAmtInd = $(this).closest('tr').find("input[type=text][id*=txtPersentage]").val();
        ConcessionAmtInd = ConcessionAmtInd == '' ? 0 : ConcessionAmtInd;
        var selectedValue = $(this).closest('tr').find("[id*=ddlMultiDiscounttype]").val();
        if (selectedValue == 'Cash') {
            GridConcPer += parseFloat(ConcessionAmtInd);
        }
        if (selectedValue == 'HealthCard') {
            HealthCardGridConcPer += parseFloat(ConcessionAmtInd);
        }
        if (selectedValue == 'Management') {
            ManagementGridConcPer += parseFloat(ConcessionAmtInd);
        }
        if (selectedValue == 'Staff') {
            StaffGridConcPer += parseFloat(ConcessionAmtInd);
        }
        if (selectedValue == 'EventBased') {
            EventBasedGridConcPer += parseFloat(ConcessionAmtInd);
        }
        if (GridConcPer != '') { Perconces = GridConcPer; }
        if (HealthCardGridConcPer != '') { Perconces = HealthCardGridConcPer; }
        if (ManagementGridConcPer != '') { Perconces = ManagementGridConcPer; }
        if (StaffGridConcPer != '') { Perconces = StaffGridConcPer; }
        if (EventBasedGridConcPer != '') { Perconces = EventBasedGridConcPer; }
    });

    TotalConcessionPersentage = GridConcPer + HealthCardGridConcPer + ManagementGridConcPer + StaffGridConcPer + EventBasedGridConcPer;

    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatdis').value = setProperDecimalsCorpPer(TotalConcessionPersentage);
    if (Type == 'Amount') {
        if ($(obj).val() != null && $(obj).val() != "") {
            concession = $(obj).val();
            if (concession == '' || concession == NaN || concession == undefined)
                concession = 0;
        }
    }
    if (document.getElementById('' + ctrlcom + '_ReceiptControl2_txtgrosstotal') != null)
        txtPayAmt = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtgrosstotal').value;
    if (sGrid != null) {
        $("table[id*=gvServices] tr:has(td)").each(function (e) {
            servicename = $(this).closest('tr').find("input[type=text][id*=txtServiceName]").val();
            Rate = $(this).closest('tr').find("input[type=text][id*=txtRate]").val();
            if (Rate != '' && $(this).closest('tr').find("input[type=hidden][id*=hdnServiceID]").val() > 0 && servicename != '' && servicename != '--Enter Service Name Here--' && $(this).closest('tr').find("input[type=hidden][id*=hdnClass_Srv_ID]").val() == 0) {
                Amount = ($(this).closest('tr').find("input[type=text][id*=txtPamt]").val());
                TAmount = parseFloat(TAmount) + parseFloat(Amount);
            }
        });
        dec = 0;
        if (txtPayAmt > 0) {
            GetPayment(concession, Perconces, TAmount, dec, txtPayAmt, Currentvalue, TotalConcessionPersentage, obj);
        }
    }
    CalculateGridAmtCount();
}

function CalculateGridAmtCount() {
    var Perconces = 0, concession = 0, txtPayAmt = 0, dec = 2; var IsRegInGrid = '';
    var sGrid = document.getElementById('' + ctrlcom + '_UCServices_gvServices');
    var TAmount = 0, GAmount = 0, Amount = 0, NetAmount = 0, Qty = 0, Rate = 0, IndivConcession = 0, InitialAmount = 0, TotConcession = 0;
    var IndividualSumAmt = 0;
    var CmpcGross = 0; var cmpcDPent = 0; var cmpcDFlat = 0, CmpcNAmt = 0;
    var TotalDisPer = 0;
    var TotalDiscAmt = 0;
    var GTAX = 0; var taxamt = 0, CTAX = 0;
    var totalsgstamount = 0;
    var totalcgstamount = 0;
    var OutSrcConAllow = $('#ctl00_ContentPlaceHolder1_UCServices_hdnAllowOutSideConcs').val();
    try {
        $("table[id*=gvServices] tr:has(td)").each(function (e) {
            IsRegInGrid = '1';
            var ev = this.rowIndex;
            if (ev != undefined && ev != '' && ev != null) { ev = ev; } else { ev = 1; }
            if ($(this).closest('tr').find("input[type=hidden][id*=hdnClass_Srv_ID]").val() == 0) {
                var patbAmt = $(this).closest('tr').find("input[type=text][id*=txtPamt]").val();
                var patDPercent = $(this).closest('tr').find("input[type=text][id*=txtDiscP]").val();
                var patDFlat = $(this).closest('tr').find("input[type=text][id*=txtDiscAmt]").val();
                var HcpatDPercent = $(this).closest('tr').find("input[type=text][id*=txthcPer]").val();
                var HcpatDFlat = $(this).closest('tr').find("input[type=text][id*=txtHcAmt]").val();
                var mapatDPercent = $(this).closest('tr').find("input[type=text][id*=txtmaPer]").val();
                var mapatDFlat = $(this).closest('tr').find("input[type=text][id*=txtmgAmt]").val();
                var stpatDPercent = $(this).closest('tr').find("input[type=text][id*=txtstPer]").val();
                var stpatDFlat = $(this).closest('tr').find("input[type=text][id*=txtstAmt]").val();
                var ebpatDPercent = $(this).closest('tr').find("input[type=text][id*=txtebPer]").val();
                var ebpatDFlat = $(this).closest('tr').find("input[type=text][id*=txtebAmt]").val();
                var crpatDPercent = $(this).closest('tr').find("input[type=text][id*=txtRulePer]").val();
                var crpatDFlat = $(this).closest('tr').find("input[type=text][id*=txtcncrlAmt]").val();

                var CmpBAmt = $(this).closest('tr').find("input[type=text][id*=txtCamt]").val();
                var CmpDPercent = $(this).closest('tr').find("input[type=text][id*=txtCDiscP]").val();
                var CmpDFlat = $(this).closest('tr').find("input[type=text][id*=txtCDiscAmt]").val();
                var CmpNAmt = $(this).closest('tr').find("input[type=text][id*=txtCNetAmt]").val();
                var tax_pct = $(this).closest('tr').find("[id*=hdntaxpct]").val();
                var tax_amt = $(this).closest('tr').find("[id*=hdntaxamount]").val();
                var exec_gst_amt = $(this).closest('tr').find("[id*=hdnrateexcgst]").val();
                var concamt = $(this).closest('tr').find("[id*=txtDiscAmt]").val();
                var PatNAmt = $(this).closest('tr').find("input[type=text][id*=txtPNAmt]").val();
                var CmpNAmt = $(this).closest('tr').find("input[type=text][id*=txtCNetAmt]").val();
                if (tax_pct == undefined || tax_pct == null || tax_pct == '') { tax_pct = "0"; }
                var sgst_tax_pct = $(this).closest('tr').find("[id*=hdnsgstpct]").val();
                var cgst_tax_pct = $(this).closest('tr').find("[id*=hdncgstpct]").val();
                if (CmpNAmt == undefined || CmpNAmt == null || CmpNAmt == '') { CmpNAmt = "0"; }
                if (PatNAmt == undefined || PatNAmt == null || PatNAmt == '') { PatNAmt = "0"; }

                var OrgPrice = $(this).closest('tr').find('[id*=hdnOrgPrice]').val();
                var DoctorPrice = $(this).closest('tr').find("[id*=hdnDoctorPrice]").val();
                var OrgPct = $(this).closest('tr').find("[id*=hdnOrgPct]").val();
                var DoctorPct = $(this).closest('tr').find("[id*=hdnDoctorPct]").val();
                if (OrgPct == undefined || OrgPct == null || OrgPct == "" || isNaN(OrgPct)) { OrgPct = "0"; }
                if (DoctorPct == undefined || DoctorPct == null || DoctorPct == "" || isNaN(DoctorPct)) { DoctorPct = "0"; }
                var orgprice = Math.round((parseFloat(PatNAmt) + parseFloat(CmpNAmt)) * (parseFloat(OrgPct) / 100));
                var doctorprice = Math.round((parseFloat(PatNAmt) + parseFloat(CmpNAmt)) * (parseFloat(DoctorPct) / 100));

                $(this).closest('tr').find('[id*=hdnOrgPrice]').val(orgprice);
                $(this).closest('tr').find("[id*=hdnDoctorPrice]").val(doctorprice);

                // var concamt = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatgrossamt').value;
                // var taxamount = $(this).closest('tr').find("input[type=hidden][id*=hdntaxamount]").val();
                if (patbAmt == '' || patbAmt == undefined || isNaN(patbAmt))
                    patbAmt = '0';
                if (CmpBAmt == '' || CmpBAmt == undefined || isNaN(CmpBAmt))
                    CmpBAmt = '0';
                if (patDFlat == '' || patDFlat == undefined || isNaN(patDFlat))
                    patDFlat = '0';
                if (HcpatDFlat == '' || HcpatDFlat == undefined || isNaN(HcpatDFlat))
                    HcpatDFlat = '0';
                if (mapatDFlat == '' || mapatDFlat == undefined || isNaN(mapatDFlat))
                    mapatDFlat = '0';
                if (stpatDFlat == '' || stpatDFlat == undefined || isNaN(stpatDFlat))
                    stpatDFlat = '0';
                if (ebpatDFlat == '' || ebpatDFlat == undefined || isNaN(ebpatDFlat))
                    ebpatDFlat = '0';
                if (crpatDPercent == '' || crpatDPercent == undefined || crpatDPercent == null) { crpatDPercent = 0; }
                if (crpatDFlat == '' || crpatDFlat == undefined || crpatDFlat == null) { crpatDFlat = 0; }
                var Is_Out_src_Srv = $(this).closest('tr').find("input[type=hidden][id*=hdnIsForeignSrv]").val();
                GAmount = parseFloat(GAmount) + parseFloat(patbAmt); /*Patient Bill Amount */
                CmpcGross = parseFloat(CmpcGross) + parseFloat(CmpBAmt); /*Patient Bill Amount */
                CmpcNAmt = parseFloat(CmpcNAmt) + parseFloat(CmpNAmt);
                if (document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnisallowgst').value.toUpperCase() == "YES") {
                    //finalamount = seramount - stpatDFlat - patDFlat - mapatDFlat - HcpatDFlat - CmpDFlat;

                    taxamt = Math.round((parseFloat(PatNAmt)) * (parseFloat(tax_pct) / 100));
                    cmp_tax = (parseFloat(CmpNAmt)) * (parseFloat(tax_pct) / 100);
                    GTAX = parseFloat(GTAX) + parseFloat(taxamt);
                    CTAX = parseFloat(CTAX) + parseFloat(cmp_tax);
                    var sgsttaxamt = (parseFloat(taxamt) * parseFloat(sgst_tax_pct) / 100);
                    sgsttaxamt = sgsttaxamt.toFixed(2);
                    var cgsttaxamt = (parseFloat(taxamt) * parseFloat(cgst_tax_pct) / 100); //parseFloat(tottax_amt) - parseFloat(sgsttaxamt);
                    cgsttaxamt = cgsttaxamt.toFixed(2);
                    $(this).closest('tr').find('[id*=hdncgstamount]').val(cgsttaxamt);
                    $(this).closest('tr').find('[id*=hdnsgstamount]').val(sgsttaxamt);
                    totalsgstamount = (parseFloat(totalsgstamount) + parseFloat(sgsttaxamt));
                    totalsgstamount = totalsgstamount.toFixed(2);
                    totalcgstamount = (parseFloat(totalcgstamount) + parseFloat(cgsttaxamt));
                    totalcgstamount = totalcgstamount.toFixed(2);
                }
                else {
                    GTAX = 0;
                    CTAX = 0;
                }
                var TotalFlatPer = parseFloat(patDFlat) + parseFloat(HcpatDFlat) + parseFloat(mapatDFlat) + parseFloat(stpatDFlat) + parseFloat(ebpatDFlat) + parseFloat(crpatDFlat);
                if (!isNaN(patDFlat) && patDFlat != "") {
                    patDFlat = patDFlat = "" ? 0 : patDFlat;
                    IndivConcession = IndivConcession = "" ? 0 : IndivConcession;
                    TotConcession = parseFloat(TotalFlatPer) + parseFloat(IndivConcession); /* caluculating total concession*/
                    IndividualSumAmt = parseFloat(TotConcession) + parseFloat(IndividualSumAmt);
                }
            }
        });
        $('#ctl00_ContentPlaceHolder1_ReceiptControl2_hdnTotalSgstAmount').val(totalsgstamount);
        $('#ctl00_ContentPlaceHolder1_ReceiptControl2_hdnTotalCgstAmount').val(totalcgstamount);
    }
    catch (e) {
    }
    var TotalReceiptAmt = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtTotalDue').value;
    TotalReceiptAmt = typeof TotalReceiptAmt == 'string' ? (typeof TotalReceiptAmt == 'undefined' || TotalReceiptAmt.trim() == '' ? 0 : parseFloat(TotalReceiptAmt)) : (typeof TotalReceiptAmt == 'object' ? 0 : parseFloat(TotalReceiptAmt));
    if (document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnDocName').value == 'OPQUICK') {
        var regFee = 0; var regConfee = 0;

        if (document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnRegconSetting').value == "Yes")
        { }
        else {
            regFee = document.getElementById('' + ctrlcom + '_UCServices_hdnReg_fee').value;
            regConfee = 0;
        }
        if (document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnRegconSetting').value == "No" && IsRegInGrid == '') {
            regFee = document.getElementById('' + ctrlcom + '_UCServices_hdnReg_fee').value;
        }
        regFee = regFee == '' ? 0 : regFee;
        regFee = regFee == undefined ? 0 : regFee;
        GAmount = GAmount == undefined ? 0 : GAmount;
        GAmount = GAmount == '' ? 0 : GAmount;
        GAmount = parseFloat(GAmount);
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtparygross').value = Math.round(CmpcGross);
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatdue').value = Math.round((GAmount));
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtTotalDue').value = Math.round(parseFloat(GAmount) + parseFloat(CmpcNAmt));
        document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnDueAmt').value = Math.round((GAmount));
        document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnNetAmt').value = Math.round(GAmount);
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtcmpDue').value = Math.round(CmpcNAmt);
        document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnPayAmt').value = Math.round(parseFloat(GAmount) + parseFloat(regFee));
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtTotalDue').value = Math.round(parseFloat(GAmount - IndividualSumAmt) + parseFloat(CmpcGross));
        /*Quick End */
        /* Advanced Start */
        var CurentNetyamount = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatgrossamt').value;
        CurentNetyamount = CurentNetyamount == '' ? 0 : CurentNetyamount;
        CurentNetyamount = CurentNetyamount == undefined ? 0 : CurentNetyamount;
        var concPer = 0; var Concess = 0; var AmountPlus = 0;
        if (CurentNetyamount != 0 && (GAmount != 0 || regConfee != 0)) {
            var concPer = setProperDecimalsCorpPer(parseFloat(CurentNetyamount) * 100 / (parseFloat(GAmount) + parseFloat(regConfee)));
        }
        if (concPer != 0 && regFee != 0) {
            Concess = setProperDecimalsCorpPer((parseFloat(concPer) / 100) * parseFloat(regFee));
        }
        AmountPlus = setProperDecimalsCorpPer(parseFloat(GAmount - (IndividualSumAmt + Concess)));
        AmountPlus = AmountPlus > 0 ? AmountPlus : 0;
        document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnRegConcAmt').value = Math.round(Concess);
        document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnBillingConcAmt').value = Math.round(IndividualSumAmt);

        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatdis').value = setProperDecimalsCorpPer(concPer);
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatgross').value = Math.round(parseFloat(GAmount) + parseFloat(regFee));
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtparygross').value = Math.round(CmpcGross);
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtgrosstotal').value = Math.round(parseFloat(GAmount) + parseFloat(CmpcGross) + parseFloat(regFee));

        var ConcAmt = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatgrossamt').value;
        var GrossAmt = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatgross').value;
        if (ConcAmt == '' || ConcAmt == undefined || ConcAmt == null) { ConcAmt = 0; }
        if (GrossAmt == '' || GrossAmt == undefined || GrossAmt == null) { GrossAmt = 0; }
        var _netamt = setProperDecimalsCorpPer((parseFloat(GrossAmt) - parseFloat(ConcAmt)));
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatNet').value = Math.round(_netamt);
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtcmpNet').value = Math.round(CmpcNAmt);
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtTotalNet').value = Math.round(parseFloat(_netamt) + parseFloat(CmpcNAmt));
        if (document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnisallowgst').value.toUpperCase() == "YES") {
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtreqamtkyd').value = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatdue').value;
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtCurrAmt').value = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatdue').value;
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatdue').value = Math.round(parseFloat(_netamt) + parseFloat(GTAX));
            document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnDueAmt').value = Math.round(parseFloat(_netamt) + parseFloat(GTAX) + parseFloat(CTAX));
            document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnNetAmt').value = Math.round(parseFloat(_netamt) + parseFloat(GTAX) + parseFloat(CTAX));
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtTotalDue').value = Math.round(parseFloat(_netamt) + parseFloat(CmpcNAmt) + parseFloat(GTAX) + parseFloat(CTAX));
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtcmpDue').value = Math.round(parseFloat(CmpcNAmt) + parseFloat(CTAX));
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatTotTax').value = parseFloat(GTAX).toFixed(2);
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtcmpTotTax').value = parseFloat(CTAX).toFixed(2);
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txttaxamt').value = (parseFloat(GTAX) + parseFloat(CTAX)).toFixed(2);
        }
        else {
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtreqamtkyd').value = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatNet').value;
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtCurrAmt').value = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatNet').value;
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatdue').value = Math.round(parseFloat(_netamt));
            document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnDueAmt').value = Math.round(_netamt);
            document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnNetAmt').value = Math.round(_netamt);
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtTotalDue').value = Math.round(parseFloat(_netamt) + parseFloat(CmpcNAmt));
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtcmpDue').value = Math.round(CmpcNAmt);
            document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnNetAmt').value = Math.round(_netamt);
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatTotTax').value = parseFloat(GTAX).toFixed(2);
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtcmpTotTax').value = parseFloat(CTAX).toFixed(2);
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txttaxamt').value = (parseFloat(GTAX) + parseFloat(CTAX)).toFixed(2);
        }

        var CurDue = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatgrossamt').value;
        var CurCmpDue = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpartygrossamt').value;
        CurDue = typeof CurDue == 'string' ? (typeof CurDue == 'undefined' || CurDue.trim() == '' ? 0 : parseFloat(CurDue)) : (typeof CurDue == 'object' ? 0 : parseFloat(CurDue));
        CurCmpDue = typeof CurCmpDue == 'string' ? (typeof CurCmpDue == 'undefined' || CurCmpDue.trim() == '' ? 0 : parseFloat(CurCmpDue)) : (typeof CurCmpDue == 'object' ? 0 : parseFloat(CurCmpDue));
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtgrossamttotal').value = Math.round(CurDue + CurCmpDue);
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatientReceiptAmt').value = 0;
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtCompanyReciptAmt').value = 0;
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtTotalReciptAmt').value = 0;
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtreceiptAmount').value = 0;

        ClearTransactionGrid();
        regFee = 0;
        Concess = 0;
        IndividualSumAmt = 0;
    } else {
        /*Quick Start*/
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatgross').value = Math.round(GAmount);
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtparygross').value = Math.round(CmpcGross);
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtgrosstotal').value = Math.round(parseFloat(GAmount) + parseFloat(CmpcGross));
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatNet').value = Math.round(GAmount);
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtcmpNet').value = Math.round(CmpcNAmt);
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtTotalNet').value = Math.round(parseFloat(GAmount) + parseFloat(CmpcNAmt));



        if (document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnisallowgst').value.toUpperCase() == "YES") {
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatdue').value = Math.round((GAmount) + parseFloat(GTAX));
            document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnDueAmt').value = Math.round((GAmount) + parseFloat(GTAX));
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtTotalDue').value = Math.round(parseFloat(GAmount) + parseFloat(CmpcNAmt) + parseFloat(GTAX) + parseFloat(CTAX));
            document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnPayAmt').value = Math.round(parseFloat(GAmount) + parseFloat(GTAX));
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txttaxamt').value = (parseFloat(GTAX) + parseFloat(CTAX)).toFixed(2);
            document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnNetAmt').value = Math.round((GAmount) + parseFloat(GTAX));
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtcmpDue').value = Math.round((CmpcNAmt) + parseFloat(CTAX));
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatTotTax').value = (parseFloat(GTAX)).toFixed(2);
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtcmpTotTax').value = (parseFloat(CTAX)).toFixed(2);
        }
        else {
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtTotalDue').value = Math.round(parseFloat(GAmount) + parseFloat(CmpcNAmt));
            document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnPayAmt').value = Math.round(GAmount);
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtTotalDue').value = Math.round(parseFloat(GAmount - IndividualSumAmt) + parseFloat(CmpcNAmt));
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatdue').value = Math.round((GAmount));
            document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnDueAmt').value = Math.round((GAmount));
            document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnNetAmt').value = Math.round(GAmount);
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtcmpDue').value = Math.round(CmpcNAmt);
        }
        /*Quick End */
        /* Advanced Start */
        var CurentNetyamount = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatgrossamt').value;
        CurentNetyamount = CurentNetyamount == '' ? 0 : CurentNetyamount;
        CurentNetyamount = CurentNetyamount == undefined ? 0 : CurentNetyamount;
        var concPer = 0;
        var tot_based_con_gross = 0;
        var tot_based_con_Net = 0;
        var tot_exc_gst = 0;
        $("table[id*=gvServices] tr:has(td)").each(function (e) {
            var class_srv_id = $(this).closest('tr').find("input[type=hidden][id*=hdnClass_Srv_ID]").val();
            if (class_srv_id == 0) {
                var Is_Out_src_Srv = $(this).closest('tr').find("input[type=hidden][id*=hdnIsForeignSrv]").val();
                var Gross_amt = $(this).closest('tr').find("input[type=text][id*=txtPamt]").val();
                var net_amt = $(this).closest('tr').find("input[type=text][id*=txtpatNet]").val();

                if (net_amt == '' || net_amt == undefined || net_amt == null) { net_amt = 0; }
                if (OutSrcConAllow == 'False' && Is_Out_src_Srv == 'Y') {
                }
                else {
                    tot_based_con_gross = parseFloat(tot_based_con_gross) + parseFloat(Gross_amt);
                    tot_based_con_Net = parseFloat(tot_based_con_Net) + parseFloat(net_amt);
                }
            }
        });

        if (CurentNetyamount != '0' && tot_based_con_gross != '0') {
            concPer = parseFloat(CurentNetyamount) * 100 / parseFloat(tot_based_con_gross);
        }
        else
            concPer = '0';
        var AmountVal = setProperDecimalsCorpPer(parseFloat(GAmount - IndividualSumAmt));
        AmountVal = AmountVal > 0 ? AmountVal : 0;
        AmountVal = setProperDecimalsCorpPer(AmountVal);
        if (concPer == 'NaN' || concPer == '' || concPer == null || concPer == 'undefined' || concPer == undefined) { concPer = '0'; }
        if (parseFloat(concPer) > 0) {
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatdis').value = setProperDecimalsCorpPer(concPer);
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatgross').value = Math.round(parseFloat(GAmount));
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtparygross').value = Math.round(CmpcGross);
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtgrosstotal').value = Math.round(parseFloat(GAmount) + parseFloat(CmpcGross));
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatNet').value = Math.round(AmountVal);
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtcmpNet').value = Math.round(CmpcNAmt);
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtTotalNet').value = Math.round(parseFloat(AmountVal) + parseFloat(CmpcNAmt));

            if (document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnisallowgst').value.toUpperCase() == "YES") {
                document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatdue').value = Math.round(parseFloat(AmountVal) + parseFloat(GTAX));
                document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnDueAmt').value = Math.round(parseFloat(AmountVal) + parseFloat(GTAX));
                document.getElementById('' + ctrlcom + '_ReceiptControl2_txtTotalDue').value = Math.round(parseFloat(AmountVal) + parseFloat(CmpcNAmt) + parseFloat(GTAX) + parseFloat(CTAX));
                document.getElementById('' + ctrlcom + '_ReceiptControl2_txtCurrAmt').value = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatdue').value;
                document.getElementById('' + ctrlcom + '_ReceiptControl2_txtreqamtkyd').value = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatdue').value;
                document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnNetAmt').value = Math.round(parseFloat(AmountVal) + parseFloat(GTAX));
                document.getElementById('' + ctrlcom + '_ReceiptControl2_txtcmpDue').value = Math.round(parseFloat(CmpcNAmt) + parseFloat(CTAX));
            }
            else {
                document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatdue').value = Math.round(AmountVal);
                document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnDueAmt').value = Math.round(AmountVal);
                document.getElementById('' + ctrlcom + '_ReceiptControl2_txtTotalDue').value = Math.round(parseFloat(AmountVal) + parseFloat(CmpcGross));
                document.getElementById('' + ctrlcom + '_ReceiptControl2_txtCurrAmt').value = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatNet').value;
                document.getElementById('' + ctrlcom + '_ReceiptControl2_txtreqamtkyd').value = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatNet').value;
                document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnNetAmt').value = Math.round(AmountVal);
                document.getElementById('' + ctrlcom + '_ReceiptControl2_txtcmpDue').value = Math.round(CmpcNAmt);
            }
            var CurDue = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatgrossamt').value;
            var CurCmpDue = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpartygrossamt').value;
            CurDue = typeof CurDue == 'string' ? (typeof CurDue == 'undefined' || CurDue.trim() == '' ? 0 : parseFloat(CurDue)) : (typeof CurDue == 'object' ? 0 : parseFloat(CurDue));
            CurCmpDue = typeof CurCmpDue == 'string' ? (typeof CurCmpDue == 'undefined' || CurCmpDue.trim() == '' ? 0 : parseFloat(CurCmpDue)) : (typeof CurCmpDue == 'object' ? 0 : parseFloat(CurCmpDue));
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtgrossamttotal').value = Math.round(CurDue + CurCmpDue);
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatientReceiptAmt').value = 0;
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtCompanyReciptAmt').value = 0;
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtTotalReciptAmt').value = 0;
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtreceiptAmount').value = 0;
        }
        ClearTransactionGrid();
    }
    /* Advanced End */
    var DisPer = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatdis').value;
    DisPer = typeof DisPer == 'string' ? (typeof DisPer == 'undefined' || DisPer.trim() == '' ? 0 : parseFloat(DisPer)) : (typeof DisPer == 'object' ? 0 : parseFloat(DisPer));
    if (DisPer == 0) {
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatdis').value = 0;
        document.getElementById('' + ctrlcom + '_ReceiptControl2_ucdueauth_txtSearchControl').className = 'grey';
        document.getElementById('' + ctrlcom + '_ReceiptControl2_ucdueauth_txtSearchControl').disabled = true;
        document.getElementById('lk_btn_ctl00_ContentPlaceHolder1_ReceiptControl2_ucdueauth').disabled = true;

    }
    else {
        document.getElementById('lk_btn_ctl00_ContentPlaceHolder1_ReceiptControl2_ucdueauth').disabled = false;
        document.getElementById('' + ctrlcom + '_ReceiptControl2_ucdueauth_txtSearchControl').disabled = false;
        document.getElementById('' + ctrlcom + '_ReceiptControl2_ucdueauth_txtSearchControl').className = 'grey';
    }
}
var totalamount = 0;
var CashAmt = 0;
var CardAmt = 0;
var amnt = 0;
function CalculateAmount(obj, value) {
    var count = 0;
    TestCondition(value, obj);
    var GrosssAmt = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatgross').value;
    var ConceAmt = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatgrossamt').value;
    var PatreceiptAmt = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatientReceiptAmt');
    var CmpreceiptAmt = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtCompanyReciptAmt');
    var TotalreceiptAmt = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtTotalReciptAmt');
    var advanceAmt = 0;
    GrosssAmt = GrosssAmt == '' ? 0 : GrosssAmt;
    ConceAmt = ConceAmt == '' ? 0 : ConceAmt;
    var _paymentTypeID = document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlPaymentType').value;
    if (document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnDocName').value == 'NewChangeReceipt') {
        CalculationPart();
    }
    if (document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnDocName').value == 'PreAdvance') {
        TotalAdvance();
    }
    if (document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnDocName').value == 'OUTSTDNGDUE') {
        count = OutStandingdueCalculations();
        return false;
    }
    else if (document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnDocName').value == 'Refund') {
        count = RefundCalculations();
        return false;
    }
    else if (document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnDocName').value == 'IPFINAL') {
        advanceAmt = document.getElementById('' + ctrlcom + '_txtTotAdvance').value;
        var ClaimAmt = $('[id*=hdnClaimAdjAmt]').val();
        if (ClaimAmt == '' || ClaimAmt == null || ClaimAmt == undefined) { ClaimAmt = 0; }
        if (advanceAmt == undefined || advanceAmt == null || advanceAmt == '') { advanceAmt = "0"; }
        advanceAmt = parseFloat(advanceAmt) + parseFloat(ClaimAmt);
        CashAmt = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtcashAmt').value;
        if (CashAmt == '.' || CashAmt == '' || CashAmt == undefined || CashAmt == null) { CashAmt = 0; }
        var PrvCashAmt = $('[id*=hdnAdmnCashAmt]').val();
        if (PrvCashAmt == '' || PrvCashAmt == null || PrvCashAmt == undefined) { PrvCashAmt = 0; }
        var AdvAmtLimit = $('[id*=hdnAdvAmtLimit]').val();
        var AdvLimitMand = $('[id*=hdnAdvAmtLmtMand]').val();
        if (AdvAmtLimit == '' || AdvAmtLimit == null || AdvAmtLimit == undefined) { AdvAmtLimit = 0; }
        if (AdvLimitMand == '' || AdvLimitMand == null || AdvLimitMand == undefined) { AdvLimitMand = "false"; }
        var PrvCashAmt = $('[id*=hdnAdmnCashAmt]').val();
        if (PrvCashAmt == '' || PrvCashAmt == null || PrvCashAmt == undefined) { PrvCashAmt = 0; }
        var TotCashAmt = parseFloat(CashAmt) + parseFloat(PrvCashAmt);
        if (parseFloat(AdvAmtLimit) > 0) {
            if (parseFloat(AdvAmtLimit) < parseFloat(TotCashAmt)) {
                $(".stoast").toastText("Info", "Patient cash amount limit has exceed..!", 5, 2);
                if (_paymentTypeID != 11) {
                    if (AdvLimitMand.trim().toLowerCase() == 'true') {
                        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtcashAmt').value = 0;
                        CalculateAmount(document.getElementById('' + ctrlcom + '_ReceiptControl2_txtcashAmt'), 'Cash');
                        return false;
                    }
                    else {
                        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtcashAmt').value = 0;
                    }
                }
            }

        }
    }

     
    if (parseFloat(GrosssAmt) > 0) {
        if (parseFloat(GrosssAmt) > parseFloat(advanceAmt)) {
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatNet').value = parseFloat(GrosssAmt) - parseFloat(ConceAmt);
        }
        else {
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatNet').value = parseFloat(GrosssAmt) - parseFloat(ConceAmt);

        }
    }
    else {
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatNet').value = 0;
    }

    CashAmt = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtcashAmt').value;
    CardAmt = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtCardAmt').value;
    if (CashAmt == '.' || CashAmt == '' || CashAmt == undefined || CashAmt == null) { CashAmt = 0; }
    if (CardAmt == '.' || CardAmt == '' || CardAmt == undefined || CardAmt == null) { CardAmt = 0; }
    var NetAmt = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatNet').value;
    var DueAmt = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatdue').value;
    if (NetAmt == '.' || NetAmt == '' || NetAmt == undefined || NetAmt == null) { NetAmt = 0; }
    if (DueAmt == '.' || DueAmt == '' || DueAmt == undefined || DueAmt == null) { DueAmt = 0; }
    totalamount = parseFloat(CardAmt) + parseFloat(CashAmt);
    if (document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnDocName').value == 'IpAdvance' || document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnDocName').value == 'PreAdvance') {
        CashAmt = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtcashAmt').value;
    }
    else if (document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnDocName').value == 'PreRefund') {
        CashAmt = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtcashAmt').value;
        Totpaidamnt = document.getElementById('' + ctrlcom + '_txtTotPaid').value;
        if (parseFloat(CashAmt) > parseFloat(Totpaidamnt)) {
            RemoveLastIndx($('[id*=_txtcashAmt]')[0].id);
            PatreceiptAmt.value = $('[id*=_txtcashAmt]').val();
            CashAmt = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtcashAmt').value;
        }
    }
    else {
        if (document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnDocName').value == 'NewChangeReceipt') {
            /* if (parseFloat(CashAmt) > parseFloat(paid_Amnt)) {
            RemoveLastIndx($('[id*=_txtcashAmt]')[0].id);
            PatreceiptAmt.value = $('[id*=_txtcashAmt]').val();
            CashAmt = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtcashAmt').value;
            } */
        }
        else {
            if (parseFloat(GrosssAmt) > 0) {
                var taxamt = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatTotTax').value;
                if (taxamt == undefined || taxamt == null || taxamt == '') { taxamt = "0"; }

                if (parseFloat(CashAmt) > parseFloat(GrosssAmt) + Math.round(parseFloat(taxamt))) {
                    if (document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnDocName').value == 'IPFINAL') {
                        var _totadvnccash = 0;
                        if (parseFloat(CashAmt) > 0) {
                            _totadvnccash = setProperDecimalsVal(parseFloat(advanceAmt) + parseFloat(CashAmt));
                        }
                        else {
                            _totadvnccash = 0;
                        }
                        if (_totadvnccash == '' || _totadvnccash == undefined || _totadvnccash == null) { _totadvnccash = 0; }
                        var _totAmt = parseFloat(CardAmt) + parseFloat(_totadvnccash);
                        if (_totAmt == '' || _totAmt == undefined || _totAmt == null) { _totAmt = 0; }
                        if (parseFloat(_totAmt) > parseFloat(GrosssAmt)) {
                            var Chnageinamt = 0;
                            if (parseFloat(_totAmt) > 0) {
                                Chnageinamt = setProperDecimalsVal((parseFloat(CashAmt) + parseFloat(advanceAmt) + parseFloat(CardAmt)) - parseFloat(GrosssAmt));
                            }
                            else { Chnageinamt = 0; }

                            Chnageinamt = Chnageinamt == ('' || undefined || isNaN || NaN) ? 0 : Chnageinamt;

                            ctl00_ContentPlaceHolder1_ReceiptControl2_lblqickchangeamt.innerHTML = setProperDecimalsCorpPer(Chnageinamt);
                            PatreceiptAmt.value = $('[id*=_txtcashAmt]').val();
                            CashAmt = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtcashAmt').value;
                        }
                        else {
                            ctl00_ContentPlaceHolder1_ReceiptControl2_lblqickchangeamt.innerHTML = 0;
                        }
                    }
                    else {

                        var Chnageinamt = parseFloat(CashAmt) - (parseFloat(GrosssAmt) + Math.round(parseFloat(taxamt)));

                        Chnageinamt = Chnageinamt == ('' || undefined || isNaN || NaN) ? 0 : Chnageinamt;
                        ctl00_ContentPlaceHolder1_ReceiptControl2_lblqickchangeamt.innerHTML = setProperDecimalsCorpPer(Chnageinamt);
                        PatreceiptAmt.value = $('[id*=_txtcashAmt]').val();
                        CashAmt = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtcashAmt').value;
                    }
                }
                else if (document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnDocName').value == 'IPFINAL') {
                    var _totadvnccash = 0;
                    if (parseFloat(CashAmt) > 0) {
                        _totadvnccash = setProperDecimalsVal(parseFloat(advanceAmt) + parseFloat(CashAmt));
                    }
                    else { _totadvnccash = 0; }
                    if (_totadvnccash == '' || _totadvnccash == undefined || _totadvnccash == null) { _totadvnccash = 0; }
                    var _totAmt = parseFloat(CardAmt) + parseFloat(_totadvnccash);
                    if (_totAmt == '' || _totAmt == undefined || _totAmt == null) { _totAmt = 0; }
                    if (parseFloat(_totAmt) > parseFloat(GrosssAmt)) {
                        var Chnageinamt = 0;
                        if (parseFloat(_totAmt) > 0) {
                            Chnageinamt = setProperDecimalsVal((parseFloat(CashAmt) + parseFloat(advanceAmt) + parseFloat(CardAmt)) - parseFloat(GrosssAmt));
                        }
                        else { Chnageinamt = 0; }

                        Chnageinamt = Chnageinamt == ('' || undefined || isNaN || NaN) ? 0 : Chnageinamt;
                        if ($('#lblquick').prop('class') == 'select')
                            ctl00_ContentPlaceHolder1_ReceiptControl2_lblqickchangeamt.innerHTML = setProperDecimalsVal(Chnageinamt);

                        PatreceiptAmt.value = $('[id*=_txtcashAmt]').val();
                        CashAmt = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtcashAmt').value;
                    }
                    else {
                        ctl00_ContentPlaceHolder1_ReceiptControl2_lblqickchangeamt.innerHTML = 0;
                    }
                }
                else {
                    ctl00_ContentPlaceHolder1_ReceiptControl2_lblqickchangeamt.innerHTML = 0;
                }
            }
            else {
                obj.value = '';
            }
        }
    }
    var clientname = $('[id*=hdnclientNameFor]').val();
    clientname = clientname.toLowerCase();
    if (CardAmt > 0) {
        if (document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnDocName').value == 'IpAdvance' || document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnDocName').value == 'PreAdvance') {
            CardAmt = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtCardAmt').value;
        }
        else if (document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnDocName').value == 'PreRefund') {
            CardAmt = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtCardAmt').value;
            Totpaidamnt = document.getElementById('' + ctrlcom + '_txtTotPaid').value;
        }
        if(clientname!='vijaya')
        {
       
        if (document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnCardNoMand').value=='YES' && document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlcrdtype').value == '0') {
            document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlcrdtype').className = 'red';
        }
        if (document.getElementById('' + ctrlcom + '_ReceiptControl2_txtcardNoCmp').value == '' ) {
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtcardNoCmp').className = 'red';
        }
        if (document.getElementById('' + ctrlcom + '_ReceiptControl2_txtcardAuther').value == '') {
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtcardAuther').className = 'red';
        }
        }
        /*if (document.getElementById('' + ctrlcom + '_ReceiptControl2_txtcardExpiredt').value == '') {
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtcardExpiredt').className = 'red';
        }*/
    }
    else {
        document.getElementById('' + ctrlcom + '_ReceiptControl2_ddcardType').className = 'grey';
        document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlcrdtype').className = 'grey';
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtcardNoCmp').className = 'grey';
        document.getElementById('' + ctrlcom + '_ReceiptControl2_ddbankName').className = 'grey';
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtcardExpiredt').className = 'grey';
    }
    if (CashAmt == '.' || CashAmt == '' || CashAmt == undefined || CashAmt == null) { CashAmt = 0; }
    if (CardAmt == '.' || CardAmt == '' || CardAmt == undefined || CardAmt == null) { CardAmt = 0; }
    if (NetAmt == '.' || NetAmt == '' || NetAmt == undefined || NetAmt == null) { NetAmt = 0; }
    if (DueAmt == '.' || DueAmt == '' || DueAmt == undefined || DueAmt == null) { DueAmt = 0; }
    if (document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnDocName').value == 'IpAdvance' || document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnDocName').value == 'PreAdvance') {
        if (value == 'Cash') {
            if (DueAmt < 0 && CardAmt > 0) {
                CashAmt = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtcashAmt').value;
                if (CashAmt == '.' || CashAmt == '' || CashAmt == undefined || CashAmt == null) { CashAmt = 0; }
                DueAmt = NetAmt - (parseFloat(CashAmt) + parseFloat(CardAmt));
                if (DueAmt == '.' || DueAmt == '' || DueAmt == undefined || DueAmt == null) { DueAmt = 0; }
            }
        }
        if (value = 'Card') {

            if (DueAmt < 0 && CardAmt > 0) {
                CardAmt = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtCardAmt').value;
                if (CardAmt == '.' || CardAmt == '' || CardAmt == undefined || CardAmt == null) { CardAmt = 0; }
                DueAmt = NetAmt - (parseFloat(CashAmt) + parseFloat(CardAmt));
                if (DueAmt == '.' || DueAmt == '' || DueAmt == undefined || DueAmt == null) { DueAmt = 0; }
            }
        }
    }
    else if (document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnDocName').value == 'PreRefund') {
        CardAmt = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtCardAmt').value;
        Totpaidamnt = document.getElementById('' + ctrlcom + '_txtTotPaid').value;
        if (CardAmt == '.' || CardAmt == '' || CardAmt == undefined || CardAmt == null) { CardAmt = 0; }
        if (Totpaidamnt == '.' || Totpaidamnt == '' || Totpaidamnt == undefined || Totpaidamnt == null) { Totpaidamnt = 0; }
        amnt = Totpaidamnt - (parseFloat(CashAmt) + parseFloat(CardAmt));
        if (amnt == '.' || amnt == '' || amnt == undefined || amnt == null) { amnt = 0; }
        if (value == 'Cash') {
            if (amnt < 0 && CardAmt > 0) {
                RemoveLastIndx($('[id*=_txtcashAmt]')[0].id);
                CashAmt = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtcashAmt').value;
                if (CashAmt == '.' || CashAmt == '' || CashAmt == undefined || CashAmt == null) { CashAmt = 0; }
                amnt = Totpaidamnt - (parseFloat(CashAmt) + parseFloat(CardAmt));
                if (amnt == '.' || amnt == '' || amnt == undefined || amnt == null) { amnt = 0; }
            }
        }
        if (value = 'Card') {
            if (amnt < 0 && CardAmt > 0) {
                RemoveLastIndx($('[id*=_txtCardAmt]')[0].id);
                CardAmt = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtCardAmt').value;
                if (CardAmt == '.' || CardAmt == '' || CardAmt == undefined || CardAmt == null) { CardAmt = 0; }
                amnt = Totpaidamnt - (parseFloat(CashAmt) + parseFloat(CardAmt));
                if (amnt == '.' || amnt == '' || amnt == undefined || amnt == null) { amnt = 0; }
            }
        }
    }
    else {
        if (document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnDocName').value == 'IPFINAL') {
            var ClaimAmt = $('[id*=hdnClaimAdjAmt]').val();
            if (ClaimAmt == '' || ClaimAmt == null || ClaimAmt == undefined) { ClaimAmt = 0; }
            if (parseFloat(GrosssAmt) > parseFloat(advanceAmt)) {
                DueAmt = setProperDecimalsVal(parseFloat(NetAmt) - (parseFloat(advanceAmt) + parseFloat(CashAmt) + parseFloat(CardAmt)));
                if (DueAmt == '' || DueAmt == null || DueAmt == undefined || parseFloat(DueAmt) < 0) { DueAmt = 0; }
            }
            else {
                DueAmt = "0";
            }
        }
        else {
            if (document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnisallowgst').value.toUpperCase() == "YES") {
                var tnet = 0;
                var taxamt = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatTotTax').value;
                if (taxamt == '' || taxamt == undefined || taxamt == null) { taxamt = 0; }
                tnet = Math.round(parseFloat(NetAmt) + parseFloat(taxamt));
                DueAmt = (tnet - (parseFloat(CashAmt) + parseFloat(CardAmt)));
                if (DueAmt == '' || DueAmt == null || DueAmt == undefined || parseFloat(DueAmt) < 0) { DueAmt = 0; }
            }
            else {
                DueAmt = NetAmt - (parseFloat(CashAmt) + parseFloat(CardAmt));
                if (DueAmt == '' || DueAmt == null || DueAmt == undefined || parseFloat(DueAmt) < 0) { DueAmt = 0; }
            }
        }
        if (DueAmt == '.' || DueAmt == '' || DueAmt == undefined || DueAmt == null) { DueAmt = 0; }
        if (value == 'Cash') {
            var CashAmt = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtcashAmt').value;
            var GrosAmt = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatgross').value;
            var CardAmt = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtCardAmt').value;
            if (CashAmt == '.' || CashAmt == '' || CashAmt == undefined || CashAmt == null) { CashAmt = 0; }
            if (CardAmt == '.' || CardAmt == '' || CardAmt == undefined || CardAmt == null) { CardAmt = 0; }
            if (GrosAmt == '.' || GrosAmt == '' || GrosAmt == undefined || GrosAmt == null) { GrosAmt = 0; }
            var TotalPayAmt = parseFloat(CashAmt) + parseFloat(CardAmt);
            if (DueAmt < 0 && CardAmt > 0) {
            var taxamt = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatTotTax').value;
                if (taxamt == undefined || taxamt == null || taxamt == '') { taxamt = "0"; }


                var Chnageinamt = (parseFloat(CashAmt) + parseFloat(CardAmt)) - parseFloat(parseFloat(GrosAmt) + Math.round(parseFloat(taxamt)));
                Chnageinamt = Chnageinamt == ('' || undefined || isNaN || NaN) ? 0 : Chnageinamt;
                ctl00_ContentPlaceHolder1_ReceiptControl2_lblqickchangeamt.innerHTML = setProperDecimalsCorpPer(Chnageinamt);
                CashAmt = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtcashAmt').value;
                DueAmt = NetAmt - (parseFloat(CashAmt) + parseFloat(CardAmt));
            }
            if (TotalPayAmt > parseFloat(parseFloat(GrosAmt) + Math.round(parseFloat(taxamt)))) {
                var taxamt = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatTotTax').value;
                if (taxamt == undefined || taxamt == null || taxamt == '') { taxamt = "0"; }
                var Chnageinamt = (parseFloat(CashAmt) + parseFloat(CardAmt)) - parseFloat(parseFloat(GrosAmt) + Math.round(parseFloat(taxamt)));
                Chnageinamt = Chnageinamt == ('' || undefined || isNaN || NaN) ? 0 : Chnageinamt;
                ctl00_ContentPlaceHolder1_ReceiptControl2_lblqickchangeamt.innerHTML = setProperDecimalsCorpPer(Chnageinamt);
                CashAmt = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtcashAmt').value;
                DueAmt = NetAmt - (parseFloat(CashAmt) + parseFloat(CardAmt));
            }
        }
        if (value == 'Card') {
            var CashAmt = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtcashAmt').value;
            var GrosAmt = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatgross').value;
            var CardAmt = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtCardAmt').value;
            var taxamt = document.getElementById('' + ctrlcom + '_ReceiptControl2_txttaxamt').value;
            if (taxamt == '' || taxamt == null || taxamt == undefined || taxamt == NaN) { taxamt = 0; }
            CardAmt = typeof CardAmt == "string" ? (CardAmt.trim() == "" ? "0" : CardAmt) : (typeof CardAmt == "number" ? CardAmt : "0");
            GrosAmt = typeof GrosAmt == "string" ? (GrosAmt.trim() == "" ? "0" : GrosAmt) : (typeof GrosAmt == "number" ? GrosAmt : "0");
            CashAmt = typeof CashAmt == "string" ? (CashAmt.trim() == "" ? "0" : CashAmt) : (typeof CashAmt == "number" ? CashAmt : "0");
            var TotalPayAmt = parseFloat(CashAmt) + parseFloat(CardAmt);
            if (document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnisallowgst').value.toUpperCase() == "YES") {
                GrosAmt = (parseFloat(GrosAmt) + parseFloat(taxamt));
            }
            if (TotalPayAmt > GrosAmt) {
                $(".stoast").toastText("Info", "Payment amount cannot be more than the amount due!", 5, 2);
                var cashamt = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtcashAmt').value;
                document.getElementById('' + ctrlcom + '_ReceiptControl2_txtCardAmt').value = 0;
                if (cashamt == '' || cashamt == null || cashamt == undefined || cashamt == NaN) { cashamt = 0; }
                var newdueamt= parseFloat(GrosAmt) - (parseFloat(cashamt)) - (parseFloat(advanceAmt));
                if (newdueamt == '' || newdueamt == null || newdueamt == undefined || newdueamt == NaN || newdueamt<0) { newdueamt = 0; }
                    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatdue').value = newdueamt;
                    document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnDueAmt').value = newdueamt;
                var CompAmtDue = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtcmpDue').value;
                document.getElementById('' + ctrlcom + '_ReceiptControl2_Search3_txtSearchControl').disabled = false;
                document.getElementById('' + ctrlcom + '_ReceiptControl2_Search3_txtSearchControl').className = 'grey';
                CompAmtDue = typeof CompAmtDue == "string" ? (CompAmtDue.trim() == "" ? "0" : CompAmtDue) : (typeof CompAmtDue == "number" ? CompAmtDue : "0");
                document.getElementById('' + ctrlcom + '_ReceiptControl2_txtTotalDue').value = parseFloat(newdueamt) + parseFloat(CompAmtDue);
                amountinwords();
                return false;
            }

            if (DueAmt < 0 && CardAmt > 0) {
                RemoveLastIndx($('[id*=_txtCardAmt]')[0].id);
                CardAmt = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtCardAmt').value;
                if (document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnDocName').value == 'IPFINAL') {
                    DueAmt = setProperDecimalsVal(parseFloat(NetAmt) - (parseFloat(advanceAmt) + parseFloat(CashAmt) + parseFloat(CardAmt)));
                    if (DueAmt == '' || DueAmt == null || DueAmt == undefined || parseFloat(DueAmt) < 0) { DueAmt = 0; }
                }
                else {
                    DueAmt = NetAmt - (parseFloat(CashAmt) + parseFloat(CardAmt));
                }
            }
        }
    }

    DueAmt = DueAmt > 0 ? DueAmt : 0;
    PatreceiptAmt.value = (parseFloat(CashAmt) + parseFloat(CardAmt));
    PatreceiptAmt.value = PatreceiptAmt.value == '' ? 0 : parseFloat(PatreceiptAmt.value);
    CmpreceiptAmt.value = CmpreceiptAmt.value == '' ? 0 : parseFloat(CmpreceiptAmt.value);
    var changeamt = ctl00_ContentPlaceHolder1_ReceiptControl2_lblqickchangeamt.innerHTML;
    if (changeamt == "" || changeamt == undefined) {
        changeamt = 0;
    }

    TotalreceiptAmt.value = ((parseFloat(PatreceiptAmt.value) + parseFloat(CmpreceiptAmt.value)) - parseFloat(changeamt));
    if ((document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnDocName').value == 'Cons' || document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnDocName').value == 'OP' ||document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnDocName').value == 'OPQUICK'||document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnDocName').value == 'OUTSTDNGDUE'  ||document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnDocName').value == 'PREADVANCE') && value == 'Cash') {
        CashAmt = TotalreceiptAmt.value;
        if (CashAmt == '.' || CashAmt == '' || CashAmt == undefined || CashAmt == null) { CashAmt = 0; }
        var balCashAmtLimit = $('[id*=hdncashlmtamt]').val();
        var AdvLimitMand = $('[id*=hdnAdvAmtLmtMand]').val();
        if (balCashAmtLimit == '' || balCashAmtLimit == null || balCashAmtLimit == undefined) { balCashAmtLimit = 0; }
        if (AdvLimitMand == '' || AdvLimitMand == null || AdvLimitMand == undefined) { AdvLimitMand = "false"; }
        if (parseFloat(balCashAmtLimit) > 0) {
            if (AdvLimitMand.trim().toLowerCase() == 'true' && parseFloat(balCashAmtLimit) < parseFloat(CashAmt)) {
                $(".stoast").toastText("Info", "Patient cash amount limit has exceed..!", 5, 2);
                document.getElementById('' + ctrlcom + '_ReceiptControl2_txtcashAmt').value = 0;
                CalculateAmount(document.getElementById('' + ctrlcom + '_ReceiptControl2_txtcashAmt'), 'Cash');
                return false;
            }
        }
    }
    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatdue').value = DueAmt;
    var cmpdue = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtcmpDue').value;
    if (cmpdue == "") {
        cmpdue = 0;
    }
    var totdue = parseFloat(cmpdue) + parseFloat(DueAmt);
    if (totdue == undefined || totdue == null || totdue == "" || totdue == "NaN") { totdue = "0" }
    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtTotalDue').value = parseFloat(totdue);

    var due_amt = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatdue').value;
    if (due_amt == 0 || due_amt == "") {
        document.getElementById('' + ctrlcom + '_ReceiptControl2_Search3_txtSearchControl').disabled = true;
        document.getElementById('' + ctrlcom + '_ReceiptControl2_Search3_txtSearchControl').value = '';
        document.getElementById('' + ctrlcom + '_ReceiptControl2_Search3__hiddenID').value = '0';
        document.getElementById('lk_btn_ctl00_ContentPlaceHolder1_ReceiptControl2_Search3').disabled = true;
        document.getElementById('' + ctrlcom + '_ReceiptControl2_Search3_txtSearchControl').className = 'grey';
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtquickremarks').className = 'grey';
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtRemarks').className = 'grey';
    }
    else {
        document.getElementById('' + ctrlcom + '_ReceiptControl2_Search3_txtSearchControl').disabled = false;
        document.getElementById('lk_btn_ctl00_ContentPlaceHolder1_ReceiptControl2_Search3').disabled = false;
        var form_name = document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnDocName').value;
        var assest = '';
        if (form_name == 'OP') {
            assest = document.getElementById('' + ctrlcom + '_ChkAssesment').checked;
        }
        else if (form_name == 'Cons') {
            assest = document.getElementById('' + ctrlcom + '_ChkAssesment').checked;
        }
        else if (form_name == 'OPQUICK') {
            assest = document.getElementById('' + ctrlcom + '_ChkAssesment').checked;
        }
        else {
            assest = false;
        }
        if (assest == true) {
            document.getElementById('' + ctrlcom + '_ReceiptControl2_Search3_txtSearchControl').className = 'grey';
        }
        else {
            document.getElementById('' + ctrlcom + '_ReceiptControl2_Search3_txtSearchControl').className = 'red';
        }
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtquickremarks').className = 'red';
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtRemarks').className = 'red';
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtquickremarks').disabled = false;
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtRemarks').disabled = false;
    }
    if (localStorage.getItem("ED") != null && localStorage.getItem("ED") != undefined && localStorage.getItem("ED") != '') {
        OnExtendAmounts();
    }
    if (document.getElementById('' + ctrlcom + '_ReceiptControl2_Search3_txtSearchControl').value != '' && document.getElementById('' + ctrlcom + '_ReceiptControl2_Search3__hiddenText').value != '' && document.getElementById('' + ctrlcom + '_ReceiptControl2_Search3__hiddenID').value != '')
    { document.getElementById('' + ctrlcom + '_ReceiptControl2_Search3_txtSearchControl').value = ''; document.getElementById('' + ctrlcom + '_ReceiptControl2_Search3__hiddenText').value = ''; document.getElementById('' + ctrlcom + '_ReceiptControl2_Search3__hiddenID').value = ''; }

    amountinwords();

}
function amountinworsforview(){
 $('table[id$=gvReceiptDetails]').find("tr:eq(1)").find("[id*=lblAmtinwords]").text(convertNumberToWords(parseFloat($('table[id$=gvReceiptDetails]').find("tr:eq(1)").find("[id*=lblAmount]").text())).toLowerCase().replace(/(^.|\s+.)/g, m=>m.toUpperCase())) ;    

}
function amountinwords(){

var cashamtw = $('#ctl00_ContentPlaceHolder1_ReceiptControl2_txtcashAmt').val();
    var cardamtw = $('#ctl00_ContentPlaceHolder1_ReceiptControl2_txtCardAmt').val();
    var changeamtw = $('#ctl00_ContentPlaceHolder1_ReceiptControl2_lblqickchangeamt').text();
    if (cashamtw == '' || cashamtw == undefined || cashamtw == "undefined" || cashamtw == null || isNaN(cashamtw)) { cashamtw = "0"; }
    if (cardamtw == '' || cardamtw == undefined || cardamtw == "undefined" || cardamtw == null || isNaN(cardamtw)) { cardamtw = "0"; }
    if (changeamtw == '' || changeamtw == undefined || changeamtw == "undefined" || changeamtw == null || isNaN(changeamtw)) { changeamtw = "0"; }

    
    document.getElementById('' + ctrlcom + '_ReceiptControl2_txttotalamtinwordsquick').innerHTML =     convertNumberToWords(parseFloat(parseFloat(cashamtw)+parseFloat(cardamtw))).toLowerCase().replace(/(^.|\s+.)/g, m=>m.toUpperCase()) ;
    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtcashamtinwordsquick').innerHTML =       convertNumberToWords(parseFloat(cashamtw)).toLowerCase().replace(/(^.|\s+.)/g, m=>m.toUpperCase()) ; 
    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtcardamtinwordsquick').innerHTML =       convertNumberToWords(parseFloat(cardamtw)).toLowerCase().replace(/(^.|\s+.)/g, m=>m.toUpperCase()) ;   
    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtchangeamtinwordsquick').innerHTML =     convertNumberToWords(parseFloat(changeamtw)).toLowerCase().replace(/(^.|\s+.)/g, m=>m.toUpperCase()) ; 

        var totchangeamtforwords=0;
        var chaamtforwors=0; var totamtforwords=0;
        $("table[id*=gvReceiptDetails] tr:has(td)").each(function (e) {
           

            
          if( $(this).closest('tr').find("[id*=lblAmount]").text() !=''|| $(this).closest('tr').find("[id*=lblAmount]").text()!='undefined'|| $(this).closest('tr').find("[id*=lblAmount]").text()!=undefined||$(this).closest('tr').find("[id*=lblAmount]").text()!=null){
        totamtforwords=parseFloat(totamtforwords)+parseFloat($(this).closest('tr').find("[id*=lblAmount]").text());
        
         if (totamtforwords == '' || totamtforwords == undefined|| totamtforwords == 'undefined' || totamtforwords == null || isNaN(totamtforwords)) { totamtforwords = "0"; }
       var chaamtforwords= $(this).closest('tr').find("[id*=lblchange]").text();
         if (chaamtforwords == '' || chaamtforwords == undefined|| chaamtforwords == 'undefined' || chaamtforwords == null || isNaN(chaamtforwords)) { chaamtforwords = "0"; }
        totchangeamtforwords=parseFloat(totchangeamtforwords)+parseFloat(chaamtforwords);
         if (totchangeamtforwords == '' || totchangeamtforwords == undefined|| totchangeamtforwords == 'undefined' || totchangeamtforwords == null || isNaN(totchangeamtforwords)) { totchangeamtforwords = "0"; }
        }

        if($("table[id$=gvReceiptDetails] tr:has(td)").length==parseFloat(e)+1){
      
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txttotamtinwordsadd').innerHTML    =  convertNumberToWords(parseFloat(totamtforwords)).toLowerCase().replace(/(^.|\s+.)/g, m=>m.toUpperCase()) ;
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtchangeamtinwordsadd').innerHTML =  convertNumberToWords(parseFloat(totchangeamtforwords)).toLowerCase().replace(/(^.|\s+.)/g, m=>m.toUpperCase()) ; 
      
        
        }

        });
}
function mandatorys() {
    var clientname = $('[id*=hdnclientNameFor]').val();
    clientname = clientname.toUpperCase();
    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtamt').className = 'red';
   if(document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnCardNoMand').value=='YES')
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtCardNo').className = 'red';
        else
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtCardNo').className = 'grey';
    document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlCardType').className = 'red';
    document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlBankName').className = 'red';
    if ($('[id*=hdnExpiredateman]').val() == 'YES') {
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtExpDt').className = 'red';
    }
    document.getElementById('' + ctrlcom + '_ReceiptControl2_UCchequeAuth_txtSearchControl').className = 'red';
    if (document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlCurrency').value == 0) {
        document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlCurrency').className = 'red';
    }
    else {
        document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlCurrency').className = 'grey';
    }
    if (document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnCardRefNoMand').value=='YES')
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtAuthCode').className = 'red';
    else
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtAuthCode').className = 'grey';
    document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlCardType').className = 'red';
}
function mandatoryscard() {
    var clientname = $('[id*=hdnclientNameFor]').val();
    clientname = clientname.toUpperCase();
    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtamt').className = 'red';
    if(document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnCardNoMand').value=='YES')
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtCardNo').className = 'red';
    else
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtCardNo').className = 'grey';
    if ($('[id*=hdnExpiredateman]').val() == 'YES') {
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtExpDt').className = 'red';
    }
    document.getElementById('' + ctrlcom + '_ReceiptControl2_UCchequeAuth_txtSearchControl').className = 'red';
    if (document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlCurrency').value == 0) {
        document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlCurrency').className = 'red';
    }
    else {
        document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlCurrency').className = 'grey';
    }
   if (document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnCardRefNoMand').value=='YES')
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtAuthCode').className = 'red';
    else
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtAuthCode').className = 'grey';
    
}
function nonmandatorys() {
    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtamt').className = 'grey'
    $('#ctl00_ContentPlaceHolder1_ReceiptControl2_txtExpDt').addClass('grey');
    $('#ctl00_ContentPlaceHolder1_ReceiptControl2_txtExpDt').removeClass('red');
    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtCardNo').className = 'grey'
    document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlCardType').className = 'grey'
    document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlBankName').className = 'grey'
    document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlCurrency').className = 'grey'
    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtAuthCode').className = 'grey'
    document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlCardType').className = 'grey'
}

function chkotp(ev) {
    var page_l_otp_checked = document.getElementById('' + ctrlcom + '_ReceiptControl2_chkotpadvanced').checked;
    if (document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlPaymentType').value == '4') {
        var otp = document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnotp').value;
        if (ev.value == otp && page_l_otp_checked == true)
        { }
        else if (page_l_otp_checked == true) {
            $(".stoast").toastText("warning", "Please verify OTP number!", 5, 3);
            return false;
        }
    }
    else
    { }
    return false;
}
function paymode() {
    if ($('#ctl00_ContentPlaceHolder1_chkAdvRefund').prop('checked') == true) {
        if (document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlPaymentType').value == 18) {
            $(".stoast").toastText("Warning", "EXCESS TO ADVANCE Not Allowed to Advance Refund", 5, 3);
            document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlPaymentType').value = 1;
            return false;
        }
    }
}

function checkpayment() {
document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlCurrency').value = document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnbaseCurrency').value;
var clientname=$('[id*=hdnclientNameFor]').val();
    paymode(); var groupid = 0;
    var paymnetmodeid = $('#ctl00_ContentPlaceHolder1_ReceiptControl2_ddlPaymentType').find('option:selected').val();
    if (paymnetmodeid > 0) {
        var _JSONParams = JSON.stringify({ paymnetmodeid: paymnetmodeid });
        var _ServiceURL = _iniUrl + "Private/FrontOffice/OPDBILLNEW.aspx/GetPaymentModdedetails";

        $.ajax({
            type: "POST",
            url: _ServiceURL,
            dataType: "json",
            data: _JSONParams,
            async: false,
            contentType: "application/json; charset=utf-8",
            error: function (jqXHR, textStatus, errorThrown) {
            },
            success: function (jdata) {
                var jdata = JSON.parse(jdata.d);
                document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnapppaymentgroupid').value = jdata[0].APP_PAYMENT_GROUP_ID;
            }
        });
        groupid = document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnapppaymentgroupid').value;
    }
    if (document.getElementById('' + ctrlcom + '_ReceiptControl2_chkotpadvanced').checked) {
        var _docName = document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnDocName').value;
        if (_docName == 'OP') {
            var _opCount = 0;
            $("table[id*=gvServices] tr:has(td)").each(function (e) {
                var hdnServiceID = $(this).closest('tr').find('input[type=hidden][id*=hdnServiceID]').val();
                if (hdnServiceID == '' | hdnServiceID == null || hdnServiceID == undefined) { hdnServiceID = 0; }
                if (hdnServiceID > 0) {
                    _opCount = 1;
                }
            });
            if (_opCount == 0) {
                document.getElementById('' + ctrlcom + '_ReceiptControl2_chkotpreq').checked = false;
                $(".stoast").toastText("warning", "Please post at least one service!", 5, 3);
                return false;
            }
        }
    }

    tdchkotpadvanced.style.display = 'none';
    document.getElementById('tdadv').style.display = 'none';
    document.getElementById('tdadvcell').style.display = 'none';
    var docName = document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnDocName').value;
    document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlCurrency').disabled = false;
    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtsrvcharges').disabled = true;
    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtsrvcharges').value = 0;
    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtsrvcharges').className = "formtextbox";
    /*  var index = document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlPaymentType').value;
    if (index == '' || index == undefined || index == null) { index = 0; }
    if (document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnDocName').value == 'CorporateCheckEntry') {
    if (index == 16 || index == 20) {
    tdrtgsacheader.style.display = 'table-cell';
    tdrtgsacdetail.style.display = 'table-cell';
    } else {
    tdrtgsacheader.style.display = 'none';
    tdrtgsacdetail.style.display = 'none';
    }
    }
    if (index == 2) {
    $('[id*=divchequeauth]').css('display', 'block');
    $('[id*=divauthcd]').css('display', 'none');
    document.getElementById('' + ctrlcom + '_ReceiptControl2_lblcardtranNo').innerHTML = 'Cheque Auth.';
    }
    else {
    $('[id*=divchequeauth]').css('display', 'none');
    $('[id*=divauthcd]').css('display', 'block');
    document.getElementById('' + ctrlcom + '_ReceiptControl2_lblcardtranNo').innerHTML = 'Card Trans#.';
    }*/

    if (groupid == 6||(groupid == '12' && clientname=='MRRCH')) {
        $('[id*=divchequeauth]').css('display', 'block');
        $('[id*=divauthcd]').css('display', 'none');
        document.getElementById('' + ctrlcom + '_ReceiptControl2_lblcardtranNo').innerHTML = 'Cheque Auth.';
    }
    else {
        $('[id*=divchequeauth]').css('display', 'none');
        $('[id*=divauthcd]').css('display', 'block');
        document.getElementById('' + ctrlcom + '_ReceiptControl2_lblcardtranNo').innerHTML = 'Card Trans#.';
    }
    if (groupid == 8 && docName == 'CorporateCheckEntry') {
        tdrtgsacheader.style.display = 'table-cell';
        tdrtgsacdetail.style.display = 'table-cell';
    } /* else {
        tdrtgsacheader.style.display = 'none';
        tdrtgsacdetail.style.display = 'none';
    }*/

    var otpadvance = document.getElementById('' + ctrlcom + '_ReceiptControl2_chkotpadvanced').checked;
    if (docName == 'Refund' && (groupid == '5' || groupid == '14'  || groupid == "6" || groupid == "12")) {

        document.getElementById('titleSrvCharges').style.display = 'block';
        document.getElementById('DivSrvCharges').style.display = 'block';
    }
    else {
        document.getElementById('titleSrvCharges').style.display = 'none';
        document.getElementById('DivSrvCharges').style.display = 'none';
    }

    if (groupid == '5') {
        /**add for swipe functionality**/
        VisibleSwipe();
        $('[id*=tdCardHldr]').css('display', 'table-cell');
        $('[id*=tdTxtCardHldr]').css('display', 'table-cell');
    }
    if (groupid == '14') {
        /**add for swipe functionality**/
        VisibleSwipe();
        $('[id*=tdCardHldr]').css('display', 'table-cell');
        $('[id*=tdTxtCardHldr]').css('display', 'table-cell');
    }
    else {

        document.getElementById('' + ctrlcom + '_ReceiptControl2_btnsettle').style.display = 'none';
        document.getElementById('' + ctrlcom + '_ReceiptControl2_btnswp').style.display = 'none';
        $('[id*=tdCardHldr]').css('display', 'none');
        $('[id*=tdTxtCardHldr]').css('display', 'none');
    }

    /* if (docName == "IMRSRVENTRY" || docName == "IMR ORDER LOOKUP") {
    var _selectedText = $('#ctl00_ContentPlaceHolder1_ReceiptControl2_ddlPaymentType').find('option:selected').text()
    if (_selectedText == "Cash" || _selectedText == "Credit Card" || _selectedText == "Debit Card" || _selectedText == "Cheque" || _selectedText == "Funds" || _selectedText.toLocaleLowerCase() == "excess to advance") {
    }
    else {
    $(".stoast").toastText("Info", "System doesn't allow payment through " + _selectedText, 5, 2);
    document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlPaymentType').value = 1;
    index = document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlPaymentType').value;
    if (index == '' || index == undefined || index == null) { index = 0; }
    }
    }*/
    var sel_text = $('#ctl00_ContentPlaceHolder1_ReceiptControl2_ddlPaymentType').find('option:selected').text();
    var sel_val_id = $('#ctl00_ContentPlaceHolder1_ReceiptControl2_ddlPaymentType').val();
    var _pagemode = '';
    if (docName == 'IPFINAL') {
        _pagemode = getParameterByName("MODE");

    }
    if (_pagemode == '' || _pagemode == null || _pagemode == undefined) { _pagemode = ''; }
    if (_pagemode == 'VIEW') {
        document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlCurrency').disabled = true;
    }
    if (_pagemode != 'VIEW') {
        if (groupid == 5) {
            document.getElementById('tdadv').style.display = 'table-cell';
            document.getElementById('tdadvcell').style.display = 'table-cell';
            document.getElementById('' + ctrlcom + '_ReceiptControl2_lbladjorotp').innerHTML = 'OTP';
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtadjustmentamt').value='';
            if (document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlPaymentType').value == '4' && document.getElementById('ctl00_ContentPlaceHolder1_ReceiptControl2_chkotpadvanced').checked == false ) {
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtadjustmentamt').disabled = true;
            }else{
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtadjustmentamt').disabled = false;
            }
        }
        else if ((groupid == 11 || groupid == 13) && docName != "PreRefund" && docName != "Refund") {
            document.getElementById('tdadv').style.display = 'table-cell';
            document.getElementById('tdadvcell').style.display = 'table-cell';
            document.getElementById('' + ctrlcom + '_ReceiptControl2_lbladjorotp').innerHTML = 'Available Bal';
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtadjustmentamt').disabled = true;
            document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlCurrency').disabled = true;
            document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlCurrency').value = document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnbaseCurrency').value
        }
        else {
            if (docName == 'Refund' && groupid == 5) {

                tdchkotpadvanced.style.display = 'table-cell';
                document.getElementById('tdadv').style.display = 'table-cell';
                document.getElementById('tdadvcell').style.display = 'table-cell';
                document.getElementById('' + ctrlcom + '_ReceiptControl2_lbladjorotp').innerHTML = 'OTP';
                document.getElementById('' + ctrlcom + '_ReceiptControl2_txtadjustmentamt').disabled = false;
                var mobile_no = '';

                mobile_no = document.getElementById('' + ctrlcom + '_txtrecmobile_no').value;
                if (mobile_no == '') {
                    $(".stoast").toastText("warning", "Please enter a minimum of 10 digits for the mobile number!", 5, 3);
                    document.getElementById('' + ctrlcom + '_txtrecmobile_no').focus();
                    document.getElementById('' + ctrlcom + '_ReceiptControl2_chkotpadvanced').checked = false;
                }
                else if (mobile_no.length >= 10) {
                    $(".stoast").toastText("warning", "Please enter a minimum of 10 digits for the mobile number!", 5, 3);
                    document.getElementById('' + ctrlcom + '_txtrecmobile_no').focus();
                    document.getElementById('' + ctrlcom + '_txtrecmobile_no').value = '';
                    document.getElementById('' + ctrlcom + '_ReceiptControl2_chkotpadvanced').checked = false;
                }
                else if ((document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlPaymentType').value != '' && otpadvance == true)) {
                    GetOTPSms(mobile_no);
                    return false;
                }
            }
            else {
                document.getElementById('tdadv').style.display = 'none';
                document.getElementById('tdadvcell').style.display = 'none';
                document.getElementById('' + ctrlcom + '_ReceiptControl2_lbladjorotp').innerHTML = 'Available Bal';
                document.getElementById('' + ctrlcom + '_ReceiptControl2_txtadjustmentamt').disabled = true;
            }
        }
        BindAdjestumentdata1();
        GetExchangeRate();
        var sel_text = $('#ctl00_ContentPlaceHolder1_ReceiptControl2_ddlPaymentType').find('option:selected').text();
        if (groupid == 1) {
            DisableControl();
            TenderedColorCode();
            nonmandatorys();
            if (sel_text == 'Cash') {
                var ErAdvAllow = 'N';
                var WebCfngAllowCash = $('[id*=hdnWebCfngAllowCash]').val();
                if (WebCfngAllowCash == null || WebCfngAllowCash == undefined || WebCfngAllowCash == '' || WebCfngAllowCash == 'undefined') WebCfngAllowCash = 'N';
                if (WebCfngAllowCash == 'Y' || WebCfngAllowCash == 'y') {
                    ErAdvAllow = $('[id*=hdnAllowCashTrnd]').val();
                    if (ErAdvAllow == null || ErAdvAllow == undefined || ErAdvAllow == '' || ErAdvAllow == 'undefined') ErAdvAllow = 'N';
                }
                if (ErAdvAllow == 'Y') {
                    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtamt').disabled = false;
                }
                else {
                    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtamt').disabled = true;
                }
            }
            else {
                document.getElementById('' + ctrlcom + '_ReceiptControl2_txtamt').disabled = true;
            }
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtamt').value = 0;
            if(getParameterByName("MODE")=='VIEW_OP' || getParameterByName("MODE")=='VIEW' ){
              document.getElementById('' + ctrlcom + '_ReceiptControl2_txtTenderedAmt').disabled = true;
            }else{
              document.getElementById('' + ctrlcom + '_ReceiptControl2_txtTenderedAmt').disabled = false;
              document.getElementById('' + ctrlcom + '_ReceiptControl2_txtTenderedAmt').className = 'red';
            }

        }
        if (groupid == 2) {
            var _selectedText = $('#ctl00_ContentPlaceHolder1_ReceiptControl2_ddlPaymentType').find('option:selected').text();
            if (_selectedText == 'M-PESA') {
                document.getElementById('' + ctrlcom + '_ReceiptControl2_lblcarsNo').innerHTML = 'Mobile#';
                document.getElementById('' + ctrlcom + '_ReceiptControl2_txtCardNo').value = '254 ';
            } else {
                document.getElementById('' + ctrlcom + '_ReceiptControl2_lblcarsNo').innerHTML = 'Card No';
            }
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtamt').disabled = true;
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtamt').className = "formtextbox";
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtsrvcharges').disabled = false;
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtsrvcharges').className = "formtextbox";
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtExpDt').disabled = true;
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtamt').className = 'grey';
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtTenderedAmt').disabled = false;
            document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlBankName').className = 'grey';
            document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlCardType').className = 'grey';
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtExpDt').className = 'grey';
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtTenderedAmt').value = 0;
            document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlBankName').disabled = true;
            document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlBankName').value = 0;
            document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlCardType').disabled = true;
            document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlCardType').value = 0;
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtCurrAmt').disabled = true;
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtCurrAmt').className = "ReadOnlyTextBox";
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtreqamtkyd').disabled = true;
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtreqamtkyd').className = "ReadOnlyTextBox";
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtCardNo').disabled = false;
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtCardNo').className = "formtextbox";
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtCurrency').disabled = true;
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtCurrency').className = "ReadOnlyTextBox";
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtAuthCode').disabled = false;
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtAuthCode').className = "formtextbox";
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtChangeKyd').disabled = true;
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtChangeKyd').className = "ReadOnlyTextBox";
            document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlCurrency').disabled = false;
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtTenderedAmt').className = "ReadOnlyTextBox";

           if (document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnCardRefNoMand').value=='YES')
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtAuthCode').className = 'red';
    else
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtAuthCode').className = 'grey';
            document.getElementById('' + ctrlcom + '_ReceiptControl2_UCchequeAuth_txtSearchControl').className = 'red';
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtTenderedAmt').className = 'red';
            if(document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnCardNoMand').value=='YES')
                document.getElementById('' + ctrlcom + '_ReceiptControl2_txtCardNo').className = 'red';
            else
                document.getElementById('' + ctrlcom + '_ReceiptControl2_txtCardNo').className = 'grey';

        }
        if (groupid == '3') {
            DisableControl();
            TenderedColorCode();
            nonmandatorys();
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtamt').value = 0;
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtTenderedAmt').className = 'grey';
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtamt').className = 'red';
        }

        if (groupid == '4') {
            DisableControl();
            TenderedColorCode();
            nonmandatorys();
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtamt').disabled = true;
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtamt').value = 0;
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtTenderedAmt').className = 'red';
        }
        if (groupid == '5' || (groupid == '12' && clientname!='MRRCH')) {
            EnableControls();
            mandatorys();
            document.getElementById('' + ctrlcom + '_ReceiptControl2_lblcarsNo').innerHTML = 'Card No';
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtTenderedAmt').className = 'grey';
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtTenderedAmt').className = 'ReadOnlyTextBox';
            if (document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlPaymentType').value == '4') {
                var docName = document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnDocName').value;
                if (docName != "") {
                    if (docName == 'IpAdvance') {
                        curvalue = document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnSrvchargValSetting').value;
                        if (curvalue == undefined || curvalue == "" || curvalue == null) { curvalue = 0; }
                        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtsrvcharges').value = curvalue;
                    }
                    else
                        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtsrvcharges').value = 0;
                    tdchkotpadvanced.style.display = 'table-cell';
                    var otpreq = $('#ctl00_ContentPlaceHolder1_ReceiptControl2_hdnotprequired').val();
                    var mobile_no = '';
                    if (otpreq == 'True') {
                        document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnotp').value = '';
                        if (otpadvance == false) {
                            chequeauthrization();
                        }

                        document.getElementById('tdadv').style.display = 'table-cell';
                        document.getElementById('tdadvcell').style.display = 'table-cell';
                        document.getElementById('' + ctrlcom + '_ReceiptControl2_lbladjorotp').innerHTML = 'OTP';
                        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtadjustmentamt').disabled = false;
                        var otp_chk = document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnotp').value;
                        if (otp_chk == null || otp_chk == undefined || otp_chk == '') {
                            if (docName == 'OP' || docName == 'Cons' || docName == 'OUTSTDNGDUE' || docName == 'PREADVANCE') {
                                if (docName == 'OP') {
                                    if (document.getElementById('' + ctrlcom + '_chkIsOsp').checked == true) {
                                        mobile_no = document.getElementById('' + ctrlcom + '_TxtMobile').value;
                                    }
                                    else {
                                        if (document.getElementById('' + ctrlcom + '_umrPatientDetails_lblMobileNo') != null)
                                            mobile_no = document.getElementById('' + ctrlcom + '_umrPatientDetails_lblMobileNo').innerHTML;
                                    }
                                }

                                else {
                                    if (document.getElementById('' + ctrlcom + '_umrPatientDetails_lblMobileNo') != null)
                                        mobile_no = document.getElementById('' + ctrlcom + '_umrPatientDetails_lblMobileNo').innerHTML;
                                }

                            }
                            else if (docName == 'OPQUICK') {
                                mobile_no = document.getElementById('' + ctrlcom + '_Address1_txtMobile1').value;
                                if (mobile_no == '') {

                                    $(".stoast").toastText("warning", "Please Please enter mobile number!", 5, 3);
                                    document.getElementById('' + ctrlcom + '_ReceiptControl2_chkotpadvanced').checked = false;
                                }
                                else if (mobile_no.length < 10) {
                                    $(".stoast").toastText("warning", "Please enter a minimum of 10 digits for the mobile number!", 5, 3);
                                    document.getElementById('' + ctrlcom + '_Address1_txtMobile1').focus();
                                    document.getElementById('' + ctrlcom + '_Address1_txtMobile1').value = '';
                                    document.getElementById('' + ctrlcom + '_ReceiptControl2_chkotpadvanced').checked = false;
                                }
                            }
                            else if (docName == 'Refund') {

                                mobile_no = document.getElementById('' + ctrlcom + '_txtrecmobile_no').value;

                            }
                            else if (docName == 'IPFINAL') {
                                mobile_no = document.getElementById('' + ctrlcom + '_IPPatientDtls1_LblMobile').innerHTML;

                            }

                            else if (docName == 'REG') {
                                mobile_no = document.getElementById('' + ctrlcom + '_txtMobile1').value;
                                if (mobile_no == '') {
                                    $(".stoast").toastText("warning", "Please Please enter mobile number!", 5, 3);
                                    document.getElementById('' + ctrlcom + '_ReceiptControl2_chkotpadvanced').checked = false;
                                }
                                else if (mobile_no.length < 10) {
                                    $(".stoast").toastText("warning", "Please enter a minimum of 10 digits for the mobile number!", 5, 3);
                                    document.getElementById('' + ctrlcom + '_txtMobile1').focus();
                                    document.getElementById('' + ctrlcom + '_txtMobile1').value = '';
                                    document.getElementById('' + ctrlcom + '_ReceiptControl2_chkotpadvanced').checked = false;
                                }
                            }
                            else if (docName == 'DONATEEDETAILS') {
                                mobile_no = '';
                            }
                            else {
                                if (document.getElementById('' + ctrlcom + '_umrPatientDetails_lblMobileNo') != null)
                                    mobile_no = document.getElementById('' + ctrlcom + '_umrPatientDetails_lblMobileNo').innerHTML;

                                if (docName == 'IMRSRVENTRY' && $('[id*=LblMobile]')[0] != undefined) {
                                    mobile_no = $('[id*=LblMobile]')[0].innerHTML;
                                }
                            }
                            if (mobile_no == '' || mobile_no == undefined || mobile_no == null || mobile_no == NaN) {
                                if (docName == 'REG' || docName == 'OPQUICK' || docName == 'IpAdvance' || docName == 'ER') {
                                    $(".stoast").toastText("warning", "Please Enter Mobile No .", 5, 3);
                                    return false;
                                }
                                else {
                                    return false;
                                }
                            }
                            if (otpadvance == true) {
                                GetOTPSms(mobile_no);
                                return false;
                            }
                        }

                        var otp = document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnotp').value;
                        var entered_otp = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtadjustmentamt').value;
                        var page_l_otp_setting = document.getElementById('' + ctrlcom + '_ReceiptControl2_chkotpadvanced').checked;
                        if (entered_otp == otp && page_l_otp_setting == true)
                        { }
                        else if (page_l_otp_setting == true) {
                            $(".stoast").toastText("warning", "Please verify OTP number!", 5, 3);
                            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtadjustmentamt').focus();
                            return false;
                        }
                    }
                }
            }
            else
            { }
        }
        if (groupid == '14' || (groupid == '12' && clientname!='MRRCH')) {

            EnableControlsCredit();
            mandatoryscard();
            document.getElementById('' + ctrlcom + '_ReceiptControl2_lblcarsNo').innerHTML = 'Card No';
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtTenderedAmt').className = 'grey';
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtTenderedAmt').className = 'ReadOnlyTextBox';
            if (document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlPaymentType').value == '4') {
                var docName = document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnDocName').value;
                if (docName != "") {
                    if (docName == 'IpAdvance') {
                        curvalue = document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnSrvchargValSetting').value;
                        if (curvalue == undefined || curvalue == "" || curvalue == null) { curvalue = 0; }
                        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtsrvcharges').value = curvalue;
                    }
                    else
                        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtsrvcharges').value = 0;
                    tdchkotpadvanced.style.display = 'table-cell';
                    var otpreq = $('#ctl00_ContentPlaceHolder1_ReceiptControl2_hdnotprequired').val();
                    var mobile_no = '';
                    if (otpreq == 'True') {
                        document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnotp').value = '';
                        if (otpadvance == false) {
                            chequeauthrization();
                        }

                        document.getElementById('tdadv').style.display = 'table-cell';
                        document.getElementById('tdadvcell').style.display = 'table-cell';
                        document.getElementById('' + ctrlcom + '_ReceiptControl2_lbladjorotp').innerHTML = 'OTP';
                        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtadjustmentamt').disabled = false;
                        var otp_chk = document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnotp').value;
                        if (otp_chk == null || otp_chk == undefined || otp_chk == '') {
                            if (docName == 'OP' || docName == 'Cons' || docName == 'OUTSTDNGDUE' || docName == 'PREADVANCE') {
                                if (docName == 'OP') {
                                    if (document.getElementById('' + ctrlcom + '_chkIsOsp').checked == true) {
                                        mobile_no = document.getElementById('' + ctrlcom + '_TxtMobile').value;
                                    }
                                    else {
                                        if (document.getElementById('' + ctrlcom + '_umrPatientDetails_lblMobileNo') != null)
                                            mobile_no = document.getElementById('' + ctrlcom + '_umrPatientDetails_lblMobileNo').innerHTML;
                                    }
                                }

                                else {
                                    if (document.getElementById('' + ctrlcom + '_umrPatientDetails_lblMobileNo') != null)
                                        mobile_no = document.getElementById('' + ctrlcom + '_umrPatientDetails_lblMobileNo').innerHTML;
                                }

                            }
                            else if (docName == 'OPQUICK') {
                                mobile_no = document.getElementById('' + ctrlcom + '_Address1_txtMobile1').value;
                                if (mobile_no == '') {

                                    $(".stoast").toastText("warning", "Please Please enter mobile number!", 5, 3);
                                    document.getElementById('' + ctrlcom + '_ReceiptControl2_chkotpadvanced').checked = false;
                                }
                                else if (mobile_no.length < 10) {
                                    $(".stoast").toastText("warning", "Please enter a minimum of 10 digits for the mobile number!", 5, 3);
                                    document.getElementById('' + ctrlcom + '_Address1_txtMobile1').focus();
                                    document.getElementById('' + ctrlcom + '_Address1_txtMobile1').value = '';
                                    document.getElementById('' + ctrlcom + '_ReceiptControl2_chkotpadvanced').checked = false;
                                }
                            }
                            else if (docName == 'Refund') {

                                mobile_no = document.getElementById('' + ctrlcom + '_txtrecmobile_no').value;

                            }
                            else if (docName == 'IPFINAL') {
                                mobile_no = document.getElementById('' + ctrlcom + '_IPPatientDtls1_LblMobile').innerHTML;

                            }

                            else if (docName == 'REG') {
                                mobile_no = document.getElementById('' + ctrlcom + '_txtMobile1').value;
                                if (mobile_no == '') {
                                    $(".stoast").toastText("warning", "Please Please enter mobile number!", 5, 3);
                                    document.getElementById('' + ctrlcom + '_ReceiptControl2_chkotpadvanced').checked = false;
                                }
                                else if (mobile_no.length < 10) {
                                    $(".stoast").toastText("warning", "Please enter a minimum of 10 digits for the mobile number!", 5, 3);
                                    document.getElementById('' + ctrlcom + '_txtMobile1').focus();
                                    document.getElementById('' + ctrlcom + '_txtMobile1').value = '';
                                    document.getElementById('' + ctrlcom + '_ReceiptControl2_chkotpadvanced').checked = false;
                                }
                            }
                            else if (docName == 'DONATEEDETAILS') {
                                mobile_no = '';
                            }
                            else {
                                if (document.getElementById('' + ctrlcom + '_umrPatientDetails_lblMobileNo') != null)
                                    mobile_no = document.getElementById('' + ctrlcom + '_umrPatientDetails_lblMobileNo').innerHTML;

                                if (docName == 'IMRSRVENTRY' && $('[id*=LblMobile]')[0] != undefined) {
                                    mobile_no = $('[id*=LblMobile]')[0].innerHTML;
                                }
                            }
                            if (mobile_no == '' || mobile_no == undefined || mobile_no == null || mobile_no == NaN) {
                                if (docName == 'REG' || docName == 'OPQUICK' || docName == 'IpAdvance' || docName == 'ER') {
                                    $(".stoast").toastText("warning", "Please Enter Mobile No .", 5, 3);
                                    return false;
                                }
                                else {
                                    return false;
                                }
                            }
                            if (otpadvance == true) {
                                GetOTPSms(mobile_no);
                                return false;
                            }
                        }

                        var otp = document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnotp').value;
                        var entered_otp = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtadjustmentamt').value;
                        var page_l_otp_setting = document.getElementById('' + ctrlcom + '_ReceiptControl2_chkotpadvanced').checked;
                        if (entered_otp == otp && page_l_otp_setting == true)
                        { }
                        else if (page_l_otp_setting == true) {
                            $(".stoast").toastText("warning", "Please verify OTP number!", 5, 3);
                            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtadjustmentamt').focus();
                            return false;
                        }
                    }
                }
            }
            else
            { }
        }
         if (groupid == '4') {
            DisableControl();
            TenderedColorCode();
            nonmandatorys();
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtamt').disabled = true;
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtamt').value = 0;
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtTenderedAmt').className = 'red';
        }
        if (groupid == '5' || (groupid == '12' && clientname!='MRRCH')) {
            EnableControls();
            mandatorys();
            document.getElementById('' + ctrlcom + '_ReceiptControl2_lblcarsNo').innerHTML = 'Card No';
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtTenderedAmt').className = 'grey';
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtTenderedAmt').className = 'ReadOnlyTextBox';
            if (document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlPaymentType').value == '4') {
                var docName = document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnDocName').value;
                if (docName != "") {
                    if (docName == 'IpAdvance') {
                        curvalue = document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnSrvchargValSetting').value;
                        if (curvalue == undefined || curvalue == "" || curvalue == null) { curvalue = 0; }
                        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtsrvcharges').value = curvalue;
                    }
                    else
                        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtsrvcharges').value = 0;
                    tdchkotpadvanced.style.display = 'table-cell';
                    var otpreq = $('#ctl00_ContentPlaceHolder1_ReceiptControl2_hdnotprequired').val();
                    var mobile_no = '';
                    if (otpreq == 'True') {
                        document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnotp').value = '';
                        if (otpadvance == false) {
                            chequeauthrization();
                        }

                        document.getElementById('tdadv').style.display = 'table-cell';
                        document.getElementById('tdadvcell').style.display = 'table-cell';
                        document.getElementById('' + ctrlcom + '_ReceiptControl2_lbladjorotp').innerHTML = 'OTP';
                        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtadjustmentamt').disabled = false;
                        var otp_chk = document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnotp').value;
                        if (otp_chk == null || otp_chk == undefined || otp_chk == '') {
                            if (docName == 'OP' || docName == 'Cons' || docName == 'OUTSTDNGDUE' || docName == 'PREADVANCE') {
                                if (docName == 'OP') {
                                    if (document.getElementById('' + ctrlcom + '_chkIsOsp').checked == true) {
                                        mobile_no = document.getElementById('' + ctrlcom + '_TxtMobile').value;
                                    }
                                    else {
                                        if (document.getElementById('' + ctrlcom + '_umrPatientDetails_lblMobileNo') != null)
                                            mobile_no = document.getElementById('' + ctrlcom + '_umrPatientDetails_lblMobileNo').innerHTML;
                                    }
                                }

                                else {
                                    if (document.getElementById('' + ctrlcom + '_umrPatientDetails_lblMobileNo') != null)
                                        mobile_no = document.getElementById('' + ctrlcom + '_umrPatientDetails_lblMobileNo').innerHTML;
                                }

                            }
                            else if (docName == 'OPQUICK') {
                                mobile_no = document.getElementById('' + ctrlcom + '_Address1_txtMobile1').value;
                                if (mobile_no == '') {

                                    $(".stoast").toastText("warning", "Please Please enter mobile number!", 5, 3);
                                    document.getElementById('' + ctrlcom + '_ReceiptControl2_chkotpadvanced').checked = false;
                                }
                                else if (mobile_no.length < 10) {
                                    $(".stoast").toastText("warning", "Please enter a minimum of 10 digits for the mobile number!", 5, 3);
                                    document.getElementById('' + ctrlcom + '_Address1_txtMobile1').focus();
                                    document.getElementById('' + ctrlcom + '_Address1_txtMobile1').value = '';
                                    document.getElementById('' + ctrlcom + '_ReceiptControl2_chkotpadvanced').checked = false;
                                }
                            }
                            else if (docName == 'Refund') {

                                mobile_no = document.getElementById('' + ctrlcom + '_txtrecmobile_no').value;

                            }
                            else if (docName == 'IPFINAL') {
                                mobile_no = document.getElementById('' + ctrlcom + '_IPPatientDtls1_LblMobile').innerHTML;

                            }

                            else if (docName == 'REG') {
                                mobile_no = document.getElementById('' + ctrlcom + '_txtMobile1').value;
                                if (mobile_no == '') {
                                    $(".stoast").toastText("warning", "Please Please enter mobile number!", 5, 3);
                                    document.getElementById('' + ctrlcom + '_ReceiptControl2_chkotpadvanced').checked = false;
                                }
                                else if (mobile_no.length < 10) {
                                    $(".stoast").toastText("warning", "Please enter a minimum of 10 digits for the mobile number!", 5, 3);
                                    document.getElementById('' + ctrlcom + '_txtMobile1').focus();
                                    document.getElementById('' + ctrlcom + '_txtMobile1').value = '';
                                    document.getElementById('' + ctrlcom + '_ReceiptControl2_chkotpadvanced').checked = false;
                                }
                            }
                            else if (docName == 'DONATEEDETAILS') {
                                mobile_no = '';
                            }
                            else {
                                if (document.getElementById('' + ctrlcom + '_umrPatientDetails_lblMobileNo') != null)
                                    mobile_no = document.getElementById('' + ctrlcom + '_umrPatientDetails_lblMobileNo').innerHTML;

                                if (docName == 'IMRSRVENTRY' && $('[id*=LblMobile]')[0] != undefined) {
                                    mobile_no = $('[id*=LblMobile]')[0].innerHTML;
                                }
                            }
                            if (mobile_no == '' || mobile_no == undefined || mobile_no == null || mobile_no == NaN) {
                                if (docName == 'REG' || docName == 'OPQUICK' || docName == 'IpAdvance' || docName == 'ER') {
                                    $(".stoast").toastText("warning", "Please Enter Mobile No .", 5, 3);
                                    return false;
                                }
                                else {
                                    return false;
                                }
                            }
                            if (otpadvance == true) {
                                GetOTPSms(mobile_no);
                                return false;
                            }
                        }

                        var otp = document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnotp').value;
                        var entered_otp = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtadjustmentamt').value;
                        var page_l_otp_setting = document.getElementById('' + ctrlcom + '_ReceiptControl2_chkotpadvanced').checked;
                        if (entered_otp == otp && page_l_otp_setting == true)
                        { }
                        else if (page_l_otp_setting == true) {
                            $(".stoast").toastText("warning", "Please verify OTP number!", 5, 3);
                            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtadjustmentamt').focus();
                            return false;
                        }
                    }
                }
            }
            else
            { }
        }
        if (groupid == '14' || (groupid == '12' && clientname!='MRRCH')) {
            EnableControlsCredit();
            mandatoryscard();
            document.getElementById('' + ctrlcom + '_ReceiptControl2_lblcarsNo').innerHTML = 'Card No';
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtTenderedAmt').className = 'grey';
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtTenderedAmt').className = 'ReadOnlyTextBox';
            if (document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlPaymentType').value == '4') {
                var docName = document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnDocName').value;
                if (docName != "") {
                    if (docName == 'IpAdvance') {
                        curvalue = document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnSrvchargValSetting').value;
                        if (curvalue == undefined || curvalue == "" || curvalue == null) { curvalue = 0; }
                        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtsrvcharges').value = curvalue;
                    }
                    else
                        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtsrvcharges').value = 0;
                    tdchkotpadvanced.style.display = 'table-cell';
                    var otpreq = $('#ctl00_ContentPlaceHolder1_ReceiptControl2_hdnotprequired').val();
                    var mobile_no = '';
                    if (otpreq == 'True') {
                        document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnotp').value = '';
                        if (otpadvance == false) {
                            chequeauthrization();
                        }

                        document.getElementById('tdadv').style.display = 'table-cell';
                        document.getElementById('tdadvcell').style.display = 'table-cell';
                        document.getElementById('' + ctrlcom + '_ReceiptControl2_lbladjorotp').innerHTML = 'OTP';
                        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtadjustmentamt').disabled = false;
                        var otp_chk = document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnotp').value;
                        if (otp_chk == null || otp_chk == undefined || otp_chk == '') {
                            if (docName == 'OP' || docName == 'Cons' || docName == 'OUTSTDNGDUE' || docName == 'PREADVANCE') {
                                if (docName == 'OP') {
                                    if (document.getElementById('' + ctrlcom + '_chkIsOsp').checked == true) {
                                        mobile_no = document.getElementById('' + ctrlcom + '_TxtMobile').value;
                                    }
                                    else {
                                        if (document.getElementById('' + ctrlcom + '_umrPatientDetails_lblMobileNo') != null)
                                            mobile_no = document.getElementById('' + ctrlcom + '_umrPatientDetails_lblMobileNo').innerHTML;
                                    }
                                }

                                else {
                                    if (document.getElementById('' + ctrlcom + '_umrPatientDetails_lblMobileNo') != null)
                                        mobile_no = document.getElementById('' + ctrlcom + '_umrPatientDetails_lblMobileNo').innerHTML;
                                }

                            }
                            else if (docName == 'OPQUICK') {
                                mobile_no = document.getElementById('' + ctrlcom + '_Address1_txtMobile1').value;
                                if (mobile_no == '') {

                                    $(".stoast").toastText("warning", "Please Please enter mobile number!", 5, 3);
                                    document.getElementById('' + ctrlcom + '_ReceiptControl2_chkotpadvanced').checked = false;
                                }
                                else if (mobile_no.length < 10) {
                                    $(".stoast").toastText("warning", "Please enter a minimum of 10 digits for the mobile number!", 5, 3);
                                    document.getElementById('' + ctrlcom + '_Address1_txtMobile1').focus();
                                    document.getElementById('' + ctrlcom + '_Address1_txtMobile1').value = '';
                                    document.getElementById('' + ctrlcom + '_ReceiptControl2_chkotpadvanced').checked = false;
                                }
                            }
                            else if (docName == 'Refund') {

                                mobile_no = document.getElementById('' + ctrlcom + '_txtrecmobile_no').value;

                            }
                            else if (docName == 'IPFINAL') {
                                mobile_no = document.getElementById('' + ctrlcom + '_IPPatientDtls1_LblMobile').innerHTML;

                            }

                            else if (docName == 'REG') {
                                mobile_no = document.getElementById('' + ctrlcom + '_txtMobile1').value;
                                if (mobile_no == '') {
                                    $(".stoast").toastText("warning", "Please Please enter mobile number!", 5, 3);
                                    document.getElementById('' + ctrlcom + '_ReceiptControl2_chkotpadvanced').checked = false;
                                }
                                else if (mobile_no.length < 10) {
                                    $(".stoast").toastText("warning", "Please enter a minimum of 10 digits for the mobile number!", 5, 3);
                                    document.getElementById('' + ctrlcom + '_txtMobile1').focus();
                                    document.getElementById('' + ctrlcom + '_txtMobile1').value = '';
                                    document.getElementById('' + ctrlcom + '_ReceiptControl2_chkotpadvanced').checked = false;
                                }
                            }
                            else if (docName == 'DONATEEDETAILS') {
                                mobile_no = '';
                            }
                            else {
                                if (document.getElementById('' + ctrlcom + '_umrPatientDetails_lblMobileNo') != null)
                                    mobile_no = document.getElementById('' + ctrlcom + '_umrPatientDetails_lblMobileNo').innerHTML;

                                if (docName == 'IMRSRVENTRY' && $('[id*=LblMobile]')[0] != undefined) {
                                    mobile_no = $('[id*=LblMobile]')[0].innerHTML;
                                }
                            }
                            if (mobile_no == '' || mobile_no == undefined || mobile_no == null || mobile_no == NaN) {
                                if (docName == 'REG' || docName == 'OPQUICK' || docName == 'IpAdvance' || docName == 'ER') {
                                    $(".stoast").toastText("warning", "Please Enter Mobile No .", 5, 3);
                                    return false;
                                }
                                else {
                                    return false;
                                }
                            }
                            if (otpadvance == true) {
                                GetOTPSms(mobile_no);
                                return false;
                            }
                        }

                        var otp = document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnotp').value;
                        var entered_otp = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtadjustmentamt').value;
                        var page_l_otp_setting = document.getElementById('' + ctrlcom + '_ReceiptControl2_chkotpadvanced').checked;
                        if (entered_otp == otp && page_l_otp_setting == true)
                        { }
                        else if (page_l_otp_setting == true) {
                            $(".stoast").toastText("warning", "Please verify OTP number!", 5, 3);
                            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtadjustmentamt').focus();
                            return false;
                        }
                    }
                }
            }
            else
            { }
        }
        var sel_text = $('#ctl00_ContentPlaceHolder1_ReceiptControl2_ddlPaymentType').find('option:selected').text();
        if (groupid == '6' ||(groupid == '12' && clientname=='MRRCH')) {
            ClearTranctions();
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtsrvcharges').disabled = false;
            document.getElementById('' + ctrlcom + '_ReceiptControl2_lblcarsNo').innerHTML = 'Cheque No';
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtAuthCode').disabled = false;
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtAuthCode').className = "ReadOnlyTextBox";
            document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlCardType').disabled = true;
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtTenderedAmt').disabled = true;
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtTenderedAmt').className = "ReadOnlyTextBox";
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtamt').disabled = false;
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtamt').className = "formtextbox";
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtExpDt').disabled = false;
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtCurrAmt').disabled = true;
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtCurrAmt').className = "ReadOnlyTextBox";
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtreqamtkyd').disabled = true;
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtreqamtkyd').className = "ReadOnlyTextBox";
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtCardNo').disabled = false;
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtCardNo').className = "formtextbox";
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtCurrency').disabled = true;
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtCurrency').className = "ReadOnlyTextBox";
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtChangeKyd').disabled = true;
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtChangeKyd').className = "ReadOnlyTextBox";
            document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlCardType').disabled = true;
            document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlBankName').disabled = false;
            document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlCurrency').disabled = false;
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtamt').className = 'red';
           if(document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnCardNoMand').value=='YES')
                document.getElementById('' + ctrlcom + '_ReceiptControl2_txtCardNo').className = 'red';
            else
                document.getElementById('' + ctrlcom + '_ReceiptControl2_txtCardNo').className = 'grey';
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtTenderedAmt').className = 'grey';
            document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlBankName').className = 'red';
            document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlCardType').className = 'grey';
            document.getElementById('' + ctrlcom + '_ReceiptControl2_UCchequeAuth_txtSearchControl').className = 'red';
            date = new Date();
            checkexpdate = new Date(date.getTime() + (90 * 24 * 60 * 60 * 1000)).format("dd-MMM-yyyy");
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtExpDt').value = checkexpdate;
            var dateaddexp = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtExpDt').value;
            if (dateaddexp == '' || dateaddexp == undefined || dateaddexp == 'undefined') {
                dateaddexp = 'N';
            }
            if (dateaddexp !== 'N') {
                $('#ctl00_ContentPlaceHolder1_ReceiptControl2_txtExpDt').addClass('grey');
                $('#ctl00_ContentPlaceHolder1_ReceiptControl2_txtExpDt').removeClass('red');
            }

            trchequedt.style.display = "table-row";
        }
        else if (groupid == '7') {
            document.getElementById('' + ctrlcom + '_ReceiptControl2_lblcarsNo').innerHTML = 'Voucher No';
            ClearTranctions();
            document.getElementById('' + ctrlcom + '_ReceiptControl2_lblcarsNo').innerHTML = 'Cheque No';
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtAuthCode').disabled = true;
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtAuthCode').className = "ReadOnlyTextBox";
            document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlCardType').disabled = true;
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtTenderedAmt').disabled = true;
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtTenderedAmt').className = "ReadOnlyTextBox";
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtamt').disabled = false;
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtamt').className = "formtextbox";
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtExpDt').disabled = false;
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtCurrAmt').disabled = true;
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtCurrAmt').className = "ReadOnlyTextBox";
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtreqamtkyd').disabled = true;
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtreqamtkyd').className = "ReadOnlyTextBox";
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtCardNo').disabled = false;
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtCardNo').className = "formtextbox";
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtCurrency').disabled = true;
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtCurrency').className = "ReadOnlyTextBox";
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtChangeKyd').disabled = true;
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtChangeKyd').className = "ReadOnlyTextBox";
            document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlCardType').disabled = true;
            document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlBankName').disabled = false;
            document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlCurrency').disabled = false;
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtamt').className = 'red';
            $('#ctl00_ContentPlaceHolder1_ReceiptControl2_txtExpDt').addClass('red');
            $('#ctl00_ContentPlaceHolder1_ReceiptControl2_txtExpDt').removeClass('grey');
            if(document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnCardNoMand').value=='YES')
                document.getElementById('' + ctrlcom + '_ReceiptControl2_txtCardNo').className = 'red';
            else
                document.getElementById('' + ctrlcom + '_ReceiptControl2_txtCardNo').className = 'grey';
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtTenderedAmt').className = 'grey';
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtAuthCode').className = 'grey';
            trchequedt.style.display = "none";
        }
        else if (groupid == 8) {
            var recdocname = document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnDocName').value;
            if (recdocname == 'CorporateCheckEntry' || recdocname == 'CorporateCheck') {
                ClearTranctions();
                $('#trchequedt').find('td').filter(":eq(" + 0 + ")").text('Neft Dt');
                $('#trchequedt').find('td').filter(":eq(" + 2 + ")").text('Neft Realization Dt')
                document.getElementById('' + ctrlcom + '_ReceiptControl2_txtamt').disabled = false;
                document.getElementById('' + ctrlcom + '_ReceiptControl2_txtamt').value = 0;
                document.getElementById('' + ctrlcom + '_ReceiptControl2_txtamt').className = "formtextbox";
                document.getElementById('' + ctrlcom + '_ReceiptControl2_txtamt').className = 'grey';
                document.getElementById('' + ctrlcom + '_ReceiptControl2_txtamt').disabled = false;
                document.getElementById('' + ctrlcom + '_ReceiptControl2_txtamt').className = 'red';
                document.getElementById('' + ctrlcom + '_ReceiptControl2_txtTenderedAmt').className = 'grey';
                document.getElementById('' + ctrlcom + '_ReceiptControl2_txtTenderedAmt').disabled = true;
                document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlCardType').disabled = true;
                document.getElementById('' + ctrlcom + '_ReceiptControl2_txtTenderedAmt').value = 0;
                document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlBankName').disabled = false;
                document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlBankName').value = 0;
                document.getElementById('' + ctrlcom + '_ReceiptControl2_txtExpDt').value = '';
                document.getElementById('' + ctrlcom + '_ReceiptControl2_txtCardNo').value = '';
                document.getElementById('' + ctrlcom + '_ReceiptControl2_txtCardNo').disabled = false;
                document.getElementById('' + ctrlcom + '_ReceiptControl2_txtAuthCode').disabled = false;
                document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlCardType').value = 0;
                document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlBankName').className = 'red';
                document.getElementById('' + ctrlcom + '_ReceiptControl2_txtCardNo').className = 'grey';
                if (document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnCardRefNoMand').value=='YES')
                    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtAuthCode').className = 'red';
                else
                    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtAuthCode').className = 'grey';
                document.getElementById('' + ctrlcom + '_ReceiptControl2_lblcarsNo').innerHTML = 'Refer No';
                document.getElementById('' + ctrlcom + '_ReceiptControl2_lblcardtranNo').innerHTML = 'Refer Trans#.';
                date = new Date();
                checkexpdate = new Date(date.getTime() + (90 * 24 * 60 * 60 * 1000)).format("dd-MMM-yyyy");
                document.getElementById('' + ctrlcom + '_ReceiptControl2_txtExpDt').value = checkexpdate;
                var dateaddexp = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtExpDt').value;
                if (dateaddexp == '' || dateaddexp == undefined || dateaddexp == 'undefined') {
                    dateaddexp = 'N';
                }
                if (dateaddexp !== 'N') {
                    $('#ctl00_ContentPlaceHolder1_ReceiptControl2_txtExpDt').addClass('grey');
                    $('#ctl00_ContentPlaceHolder1_ReceiptControl2_txtExpDt').removeClass('red');
                }
                trchequedt.style.display = "table-row";
            }
            else {
                document.getElementById('' + ctrlcom + '_ReceiptControl2_txtamt').disabled = false;
                document.getElementById('' + ctrlcom + '_ReceiptControl2_txtamt').value = 0;
                document.getElementById('' + ctrlcom + '_ReceiptControl2_txtamt').className = "formtextbox";
                document.getElementById('' + ctrlcom + '_ReceiptControl2_txtamt').className = 'grey';
                document.getElementById('' + ctrlcom + '_ReceiptControl2_txtamt').disabled = false;
                document.getElementById('' + ctrlcom + '_ReceiptControl2_txtamt').className = 'red';
                document.getElementById('' + ctrlcom + '_ReceiptControl2_txtTenderedAmt').className = 'grey';
                document.getElementById('' + ctrlcom + '_ReceiptControl2_txtTenderedAmt').disabled = true;
                document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlCardType').disabled = true;
                document.getElementById('' + ctrlcom + '_ReceiptControl2_txtTenderedAmt').value = 0;
                document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlBankName').disabled = false;
                document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlBankName').value = 0;
                document.getElementById('' + ctrlcom + '_ReceiptControl2_txtExpDt').value = '';
                document.getElementById('' + ctrlcom + '_ReceiptControl2_txtCardNo').value = '';
                document.getElementById('' + ctrlcom + '_ReceiptControl2_txtCardNo').disabled = false;
                document.getElementById('' + ctrlcom + '_ReceiptControl2_txtAuthCode').disabled = false;
                document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlCardType').value = 0;
                document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlBankName').className = 'red';
                document.getElementById('' + ctrlcom + '_ReceiptControl2_txtCardNo').className = 'grey';
                if (document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnCardRefNoMand').value=='YES')
                    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtAuthCode').className = 'red';
                else
                    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtAuthCode').className = 'grey';
                document.getElementById('' + ctrlcom + '_ReceiptControl2_lblcarsNo').innerHTML = 'Refer No';
                document.getElementById('' + ctrlcom + '_ReceiptControl2_lblcardtranNo').innerHTML = 'Refer Trans#.';
                trchequedt.style.display = "none";
            }
        }
        else if (groupid == '9') {
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtamt').disabled = false;
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtamt').value = 0;
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtamt').className = "formtextbox";
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtamt').className = 'grey';
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtamt').disabled = false;
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtamt').className = 'red';
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtTenderedAmt').className = 'grey';
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtTenderedAmt').disabled = true;
            document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlCardType').disabled = true;
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtTenderedAmt').value = 0;
            document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlBankName').disabled = false;
            document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlBankName').value = 0;
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtExpDt').value = '';
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtCardNo').value = '';
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtCardNo').disabled = false;
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtAuthCode').disabled = false;
            document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlCardType').value = 0;
            document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlBankName').className = 'red';
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtCardNo').className = 'grey';
            if (document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnCardRefNoMand').value=='YES')
                document.getElementById('' + ctrlcom + '_ReceiptControl2_txtAuthCode').className = 'red';
            else
                document.getElementById('' + ctrlcom + '_ReceiptControl2_txtAuthCode').className = 'grey';
            document.getElementById('' + ctrlcom + '_ReceiptControl2_lblcarsNo').innerHTML = 'Reference#';
            document.getElementById('' + ctrlcom + '_ReceiptControl2_lblcardtranNo').innerHTML = 'Reference#';
            trchequedt.style.display = "none";
        }
        else if (groupid == '10') {
            if(document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnCardNoMand').value=='YES')
                document.getElementById('' + ctrlcom + '_ReceiptControl2_txtCardNo').className = 'red';
            else
                document.getElementById('' + ctrlcom + '_ReceiptControl2_txtCardNo').className = 'grey';
            $('#ctl00_ContentPlaceHolder1_ReceiptControl2_txtExpDt').addClass('grey');
            $('#ctl00_ContentPlaceHolder1_ReceiptControl2_txtExpDt').removeClass('red');
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtExpDt').disabled = false;
            document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlBankName').className = 'grey';
            document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlBankName').value = 0;
            document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlCardType').className = 'grey';
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtAuthCode').className = 'grey';
            document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlCardType').value = 0;
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtamt').disabled = false;
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtamt').value = 0;
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtamt').className = "formtextbox";
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtamt').className = 'grey';
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtCardNo').className = 'grey';
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtamt').disabled = false;
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtamt').className = 'red';
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtTenderedAmt').disabled = true;
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtTenderedAmt').value = 0;
            document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlBankName').disabled = true;
            document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlBankName').value = 0;
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtExpDt').value = '';
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtCardNo').value = '';
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtCardNo').disabled = false;
            document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlCardType').value = 0;
            trchequedt.style.display = "none";
        }
        else if (groupid == '11') {
            DisableControl();
            TenderedColorCode();
            nonmandatorys();
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtamt').disabled = true;
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtamt').value = 0;
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtTenderedAmt').className = 'red';
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtTenderedAmt').disabled = false;
            document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlCurrency').value = document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnbaseCurrency').value
            document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlCurrency').disabled = true;
            trchequedt.style.display = "none";
        }
        else {
            if (groupid == 2) {
                var _selectedText = $('#ctl00_ContentPlaceHolder1_ReceiptControl2_ddlPaymentType').find('option:selected').text();
                if (_selectedText == 'M-PESA') {
                    document.getElementById('' + ctrlcom + '_ReceiptControl2_lblcarsNo').innerHTML = 'Mobile#';
                    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtCardNo').value = '254 ';
                    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtCardNo').focus();
                } else {
                    document.getElementById('' + ctrlcom + '_ReceiptControl2_lblcarsNo').innerHTML = 'Card No';
                    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtCardNo').value = '';
                }
            } else {
                document.getElementById('' + ctrlcom + '_ReceiptControl2_lblcarsNo').innerHTML = 'Card No';
                document.getElementById('' + ctrlcom + '_ReceiptControl2_txtCardNo').value = '';
            }

            var form_name = $('#ctl00_ContentPlaceHolder1_ReceiptControl2_hdnDocName').val();
            if (form_name == undefined || form_name == null) { form_name = ''; }
            if (form_name != '') {
                trchequedt.style.display = "none";
            }
            /*DisableControl();
            TenderedColorCode();
            nonmandatorys();
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtamt').disabled = true;            
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtamt').value = 0;
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtTenderedAmt').className = 'red';*/
        }
        /*   var docname = document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnDocName').value;
        var paymentmode = $('#ctl00_ContentPlaceHolder1_ReceiptControl2_ddlPaymentType').find('option:selected').text();
        var curvalue = 0;
        if (docname == "IpAdvance") {
        if (paymentmode == 'Credit Card' || paymentmode == 'Debit Card' || paymentmode == 'Cheque') {
        curvalue = document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnSrvchargValSetting').value;
        if (curvalue == undefined || curvalue == "" || curvalue == null) { curvalue = 0; }
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtsrvcharges').value = curvalue;
        }
        else
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtsrvcharges').value = 0;
        }
        else
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtsrvcharges').value = 0;*/
        chequeauthrization(); /* added on 03.10.2016 */
    }
}
function checkpayment2() {
var clientname=$('[id*=hdnclientNameFor]').val();
    var index = document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlPaymentType').value;
    if (index == '' || index == null || index == undefined) { index = 0; }
    var sel_text = $('#ctl00_ContentPlaceHolder1_ReceiptControl2_ddlPaymentType').find('option:selected').text();
    var groupid = document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnapppaymentgroupid').value;

    if (groupid == '1') {
        DisableControl();
        TenderedColorCode();
        nonmandatorys();
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtamt').disabled = true;
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtamt').value = 0;
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtTenderedAmt').className = 'red';
    }
    if (groupid == 5) {
        EnableControls();
        mandatorys();
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtTenderedAmt').className = 'grey';
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtTenderedAmt').className = 'ReadOnlyTextBox';
    }

    if (groupid == 6||(groupid == '12' && clientname=='MRRCH')) {
        ClearTranctions();
        document.getElementById('' + ctrlcom + '_ReceiptControl2_lblcarsNo').innerHTML = 'Cheque No';
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtAuthCode').disabled = false;
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtAuthCode').className = "ReadOnlyTextBox";
        document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlCardType').disabled = true;
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtTenderedAmt').disabled = true;
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtTenderedAmt').className = "ReadOnlyTextBox";
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtamt').disabled = false;
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtamt').className = "formtextbox";
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtExpDt').disabled = false;
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtCurrAmt').disabled = true;
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtCurrAmt').className = "ReadOnlyTextBox";
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtreqamtkyd').disabled = true;
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtreqamtkyd').className = "ReadOnlyTextBox";
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtCardNo').disabled = false;
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtCardNo').className = "formtextbox";
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtCurrency').disabled = true;
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtCurrency').className = "ReadOnlyTextBox";
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtChangeKyd').disabled = true;
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtChangeKyd').className = "ReadOnlyTextBox";
        document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlCardType').disabled = true;
        document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlBankName').disabled = false;
        document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlCurrency').disabled = false;
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtamt').className = 'red';
        $('#ctl00_ContentPlaceHolder1_ReceiptControl2_txtExpDt').addClass('red');
        $('#ctl00_ContentPlaceHolder1_ReceiptControl2_txtExpDt').removeClass('grey');
        if(document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnCardNoMand').value=='YES')
                document.getElementById('' + ctrlcom + '_ReceiptControl2_txtCardNo').className = 'red';
            else
                document.getElementById('' + ctrlcom + '_ReceiptControl2_txtCardNo').className = 'grey';
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtTenderedAmt').className = 'grey';
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtAuthCode').className = 'grey';
    }
    else if (groupid == '12' &&  clientname!='MRRCH') {

        document.getElementById('' + ctrlcom + '_ReceiptControl2_lblcarsNo').innerHTML = 'DD No';
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtAuthCode').disabled = true;
        document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlCardType').disabled = true;
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtCardNo').disabled = false;
        $('#ctl00_ContentPlaceHolder1_ReceiptControl2_txtCardNo').attr("onkeypress", "return AlphaNumaric(event);");
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtAuthCode').className = 'grey';
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtTenderedAmt').className = 'grey';
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtamt').className = 'grey';
        $('#ctl00_ContentPlaceHolder1_ReceiptControl2_txtExpDt').addClass('grey');
        $('#ctl00_ContentPlaceHolder1_ReceiptControl2_txtExpDt').removeClass('red');
        if(document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnCardNoMand').value=='YES')
                document.getElementById('' + ctrlcom + '_ReceiptControl2_txtCardNo').className = 'red';
            else
                document.getElementById('' + ctrlcom + '_ReceiptControl2_txtCardNo').className = 'grey';
        document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlCardType').className = 'grey';
        document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlBankName').className = 'grey';
        document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlCurrency').className = 'red';
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtAuthCode').className = 'grey';
        document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlCardType').className = 'grey';
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtTenderedAmt').className = 'grey';
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtTenderedAmt').className = 'ReadOnlyTextBox';
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtAuthCode').className = 'ReadOnlyTextBox';
    }
    else if (groupid == '7') {
        document.getElementById('' + ctrlcom + '_ReceiptControl2_lblcarsNo').innerHTML = 'Voucher No';
        ClearTranctions();
        document.getElementById('' + ctrlcom + '_ReceiptControl2_lblcarsNo').innerHTML = 'Cheque No';
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtAuthCode').disabled = true;
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtAuthCode').className = "ReadOnlyTextBox";
        document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlCardType').disabled = true;
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtTenderedAmt').disabled = true;
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtTenderedAmt').className = "ReadOnlyTextBox";
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtamt').disabled = false;
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtamt').className = "formtextbox";
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtExpDt').disabled = false;
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtCurrAmt').disabled = true;
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtCurrAmt').className = "ReadOnlyTextBox";
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtreqamtkyd').disabled = true;
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtreqamtkyd').className = "ReadOnlyTextBox";
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtCardNo').disabled = false;
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtCardNo').className = "formtextbox";
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtCurrency').disabled = true;
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtCurrency').className = "ReadOnlyTextBox";
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtChangeKyd').disabled = true;
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtChangeKyd').className = "ReadOnlyTextBox";
        document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlCardType').disabled = true;
        document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlBankName').disabled = false;
        document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlCurrency').disabled = false;
        $('#ctl00_ContentPlaceHolder1_ReceiptControl2_txtamt').addClass('red');
        $('#ctl00_ContentPlaceHolder1_ReceiptControl2_txtExpDt').addClass('red');
        $('#ctl00_ContentPlaceHolder1_ReceiptControl2_txtExpDt').removeClass('grey');
        if(document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnCardNoMand').value=='YES')
                document.getElementById('' + ctrlcom + '_ReceiptControl2_txtCardNo').className = 'red';
            else
                document.getElementById('' + ctrlcom + '_ReceiptControl2_txtCardNo').className = 'grey';
        $('#ctl00_ContentPlaceHolder1_ReceiptControl2_txtTenderedAmt').removeClass('red');
        $('#ctl00_ContentPlaceHolder1_ReceiptControl2_txtAuthCode').removeClass('red');
    }
    else if (groupid == 8) {
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtamt').disabled = false;
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtamt').value = 0;
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtamt').className = "formtextbox";
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtamt').className = 'grey';
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtamt').disabled = false;
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtamt').className = 'red';
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtTenderedAmt').disabled = true;
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtTenderedAmt').value = 0;
        document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlBankName').disabled = true;
        document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlBankName').value = 0;
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtExpDt').value = '';
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtCardNo').value = '';
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtCardNo').disabled = true;
        document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlCardType').value = 0;
    }
    else if (groupid == '10') {
        if(document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnCardNoMand').value=='YES')
                document.getElementById('' + ctrlcom + '_ReceiptControl2_txtCardNo').className = 'red';
            else
                document.getElementById('' + ctrlcom + '_ReceiptControl2_txtCardNo').className = 'grey';
        $('#ctl00_ContentPlaceHolder1_ReceiptControl2_txtExpDt').addClass('grey');
        $('#ctl00_ContentPlaceHolder1_ReceiptControl2_txtExpDt').removeClass('red');
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtExpDt').disabled = false;
        document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlBankName').className = 'grey';
        document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlBankName').value = 0;
        document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlCardType').className = 'grey';
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtAuthCode').className = 'grey';
        document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlCardType').value = 0;
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtamt').disabled = false;
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtamt').value = 0;
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtamt').className = "formtextbox";
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtamt').className = 'grey';

        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtamt').disabled = false;
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtamt').className = 'red';
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtTenderedAmt').disabled = true;
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtTenderedAmt').value = 0;
        document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlBankName').disabled = true;
        document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlBankName').value = 0;
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtExpDt').value = '';
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtCardNo').value = '';
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtCardNo').disabled = false;
        document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlCardType').value = 0;
    }
    else {
        document.getElementById('' + ctrlcom + '_ReceiptControl2_lblcarsNo').innerHTML = 'Card No';
    }
}
function Editpayment() {
    var ErAdvAllow = 'N';
    var WebCfngAllowCash = $('[id*=hdnWebCfngAllowCash]').val();
    if (WebCfngAllowCash == null || WebCfngAllowCash == undefined || WebCfngAllowCash == '' || WebCfngAllowCash == 'undefined') WebCfngAllowCash = 'N';
    if (WebCfngAllowCash == 'Y' || WebCfngAllowCash == 'y') {
        ErAdvAllow = $('[id*=hdnAllowCashTrnd]').val();
        if (ErAdvAllow == null || ErAdvAllow == undefined || ErAdvAllow == '' || ErAdvAllow == 'undefined') ErAdvAllow = 'N';
    }
    var index = document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlPaymentType').value;
    if (index == null || index == undefined || index == '') { index = 0; }
    var sel_text = $('#ctl00_ContentPlaceHolder1_ReceiptControl2_ddlPaymentType').find('option:selected').text();

    var groupid = document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnapppaymentgroupid').value;
    if (groupid == '1') {
        EditDisableControl();
        TenderedColorCode();
        nonmandatorys();
        var form_name = $('#ctl00_ContentPlaceHolder1_ReceiptControl2_hdnDocName').val();
        if (ErAdvAllow == 'Y') {
            if (sel_text == "Advance Adjustment") { document.getElementById('' + ctrlcom + '_ReceiptControl2_txtamt').disabled = true; } else {
                document.getElementById('' + ctrlcom + '_ReceiptControl2_txtamt').disabled = false;
            }
        }
    }
    if (groupid == 5 || groupid == 12) {
        EditEnableControls();
        mandatorys();
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtTenderedAmt').className = 'grey';
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtTenderedAmt').className = 'ReadOnlyTextBox';
    }
    if (groupid == 6) {
        document.getElementById('' + ctrlcom + '_ReceiptControl2_lblcarsNo').innerHTML = 'Cheque No';
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtAuthCode').disabled = false;
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtAuthCode').className = "ReadOnlyTextBox";
        document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlCardType').disabled = true;
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtTenderedAmt').disabled = true;
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtTenderedAmt').className = "ReadOnlyTextBox";
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtamt').disabled = false;
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtamt').className = "formtextbox";
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtExpDt').disabled = false;
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtCurrAmt').disabled = true;
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtCurrAmt').className = "ReadOnlyTextBox";
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtreqamtkyd').disabled = true;
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtreqamtkyd').className = "ReadOnlyTextBox";
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtCardNo').disabled = false;
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtCardNo').className = "formtextbox";
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtCurrency').disabled = true;
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtCurrency').className = "ReadOnlyTextBox";
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtChangeKyd').disabled = true;
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtChangeKyd').className = "ReadOnlyTextBox";
        document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlCardType').disabled = true;
        document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlBankName').disabled = false;
        document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlCurrency').disabled = false;
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtsrvcharges').disabled = false;
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtamt').className = 'red';
        $('#ctl00_ContentPlaceHolder1_ReceiptControl2_txtExpDt').addClass('red');
        $('#ctl00_ContentPlaceHolder1_ReceiptControl2_txtExpDt').removeClass('grey');
        if(document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnCardNoMand').value=='YES')
                document.getElementById('' + ctrlcom + '_ReceiptControl2_txtCardNo').className = 'red';
            else
                document.getElementById('' + ctrlcom + '_ReceiptControl2_txtCardNo').className = 'grey';
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtTenderedAmt').className = 'grey';
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtAuthCode').className = 'grey';
        trchequedt.style.display = "table-row";
        /*document.getElementById('' + ctrlcom + '_ReceiptControl2_txtchequedt').value=*/
    }
    else if (groupid == '7') {
        document.getElementById('' + ctrlcom + '_ReceiptControl2_lblcarsNo').innerHTML = 'Voucher No';
        document.getElementById('' + ctrlcom + '_ReceiptControl2_lblcarsNo').innerHTML = 'Cheque No';
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtAuthCode').disabled = true;
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtAuthCode').className = "ReadOnlyTextBox";
        document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlCardType').disabled = true;
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtTenderedAmt').disabled = true;
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtTenderedAmt').className = "ReadOnlyTextBox";
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtamt').disabled = false;
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtamt').className = "formtextbox";
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtExpDt').disabled = false;
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtCurrAmt').disabled = true;
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtCurrAmt').className = "ReadOnlyTextBox";
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtreqamtkyd').disabled = true;
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtreqamtkyd').className = "ReadOnlyTextBox";
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtCardNo').disabled = false;
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtCardNo').className = "formtextbox";
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtCurrency').disabled = true;
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtCurrency').className = "ReadOnlyTextBox";
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtChangeKyd').disabled = true;
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtChangeKyd').className = "ReadOnlyTextBox";
        document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlCardType').disabled = true;
        document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlBankName').disabled = false;
        document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlCurrency').disabled = false;
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtamt').className = 'red';
        $('#ctl00_ContentPlaceHolder1_ReceiptControl2_txtExpDt').addClass('red');
        $('#ctl00_ContentPlaceHolder1_ReceiptControl2_txtExpDt').removeClass('grey');
        if(document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnCardNoMand').value=='YES')
                document.getElementById('' + ctrlcom + '_ReceiptControl2_txtCardNo').className = 'red';
            else
                document.getElementById('' + ctrlcom + '_ReceiptControl2_txtCardNo').className = 'grey';
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtTenderedAmt').className = 'grey';
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtAuthCode').className = 'grey';
    }
    else if (groupid == 8) {
        var recdocname = document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnDocName').value;
        if (recdocname == 'CorporateCheckEntry' || recdocname == 'CorporateCheck') {
            trchequedt.style.display = "table-row";
            $('#trchequedt').find('td').filter(":eq(" + 0 + ")").text('Neft Dt');
            $('#trchequedt').find('td').filter(":eq(" + 2 + ")").text('Neft Realization Dt');
        } else {
            trchequedt.style.display = "none";
        }
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtamt').disabled = false;
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtamt').className = "formtextbox";
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtamt').className = 'grey';
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtamt').disabled = false;
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtamt').className = 'red';
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtTenderedAmt').className = 'grey';
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtTenderedAmt').disabled = true;
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtsrvcharges').disabled = true;
        document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlCardType').disabled = true;
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtExpDt').disabled = true;
        $('#ctl00_ContentPlaceHolder1_ReceiptControl2_txtExpDt').addClass('grey');
        $('#ctl00_ContentPlaceHolder1_ReceiptControl2_txtExpDt').removeClass('red');
        document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlCardType').value = 0;
        document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlCardType').className = 'grey';
        document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlBankName').disabled = false;
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtCardNo').disabled = false;
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtAuthCode').disabled = false;
        document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlBankName').className = 'red';
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtCardNo').className = 'grey';
        if (document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnCardRefNoMand').value=='YES')
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtAuthCode').className = 'red';
    else
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtAuthCode').className = 'grey';
        document.getElementById('' + ctrlcom + '_ReceiptControl2_lblcarsNo').innerHTML = 'Refer No';
        document.getElementById('' + ctrlcom + '_ReceiptControl2_lblcardtranNo').innerHTML = 'Refer Trans#.';

    }
    else if (groupid == '9') {
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtamt').disabled = false;
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtamt').className = "formtextbox";
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtamt').className = 'grey';
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtamt').disabled = false;
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtamt').className = 'red';
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtTenderedAmt').className = 'grey';
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtTenderedAmt').disabled = true;
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtsrvcharges').disabled = true;
        document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlCardType').disabled = true;
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtExpDt').disabled = true;
        $('#ctl00_ContentPlaceHolder1_ReceiptControl2_txtExpDt').addClass('grey');
        $('#ctl00_ContentPlaceHolder1_ReceiptControl2_txtExpDt').removeClass('red');
        document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlCardType').value = 0;
        document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlCardType').className = 'grey';
        document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlBankName').disabled = false;
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtCardNo').disabled = false;
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtAuthCode').disabled = false;
        document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlBankName').className = 'red';
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtCardNo').className = 'grey';
        if (document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnCardRefNoMand').value=='YES')
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtAuthCode').className = 'red';
    else
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtAuthCode').className = 'grey';
        document.getElementById('' + ctrlcom + '_ReceiptControl2_lblcarsNo').innerHTML = 'Reference#';
        document.getElementById('' + ctrlcom + '_ReceiptControl2_lblcardtranNo').innerHTML = 'Reference#';
        trchequedt.style.display = "none";
    }
    else if (groupid == 'Online') {

    }
    else {
        document.getElementById('' + ctrlcom + '_ReceiptControl2_lblcarsNo').innerHTML = 'Card No';
    }
    BindAdjestumentdata1();
}
function EditDisableControl() {
    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtamt').disabled = true;
    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtamt').className = "ReadOnlyTextBox";
    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtExpDt').disabled = true;
    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtCurrAmt').disabled = true;
    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtCurrAmt').className = "ReadOnlyTextBox";
    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtreqamtkyd').disabled = true;
    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtreqamtkyd').className = "ReadOnlyTextBox";
    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtCardNo').disabled = true;
    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtCardNo').className = "ReadOnlyTextBox";
    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtCurrency').disabled = true;
    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtCurrency').className = "ReadOnlyTextBox";
    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtAuthCode').disabled = true;
    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtAuthCode').className = "ReadOnlyTextBox";
    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtChangeKyd').disabled = true;
    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtChangeKyd').className = "ReadOnlyTextBox";
    document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlCardType').disabled = true;
    document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlBankName').disabled = true;
    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtTenderedAmt').disabled = false;
    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtTenderedAmt').className = "formtextbox";
}

function EnableControls() {
    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtamt').disabled = false;
    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtamt').className = "formtextbox";
    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtsrvcharges').disabled = false;
    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtsrvcharges').className = "formtextbox";
    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtExpDt').disabled = false;
    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtCurrAmt').disabled = true;
    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtCurrAmt').className = "ReadOnlyTextBox";
    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtreqamtkyd').disabled = true;
    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtreqamtkyd').className = "ReadOnlyTextBox";
    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtCardNo').disabled = false;
    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtCardNo').className = "formtextbox";
    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtCurrency').disabled = true;
    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtCurrency').className = "ReadOnlyTextBox";
    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtAuthCode').disabled = false;
    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtAuthCode').className = "formtextbox";
    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtChangeKyd').disabled = true;
    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtChangeKyd').className = "ReadOnlyTextBox";
    document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlCardType').disabled = false;
    document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlBankName').disabled = false;
    document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlCurrency').disabled = false;
    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtTenderedAmt').disabled = true;
    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtTenderedAmt').className = "ReadOnlyTextBox";
    if (document.getElementById('' + ctrlcom + '_ReceiptControl2_chkotpadvanced').checked == false) {
        ClearTranctions();
    }
}

function EnableControlsCredit() {
    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtamt').disabled = false;
    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtamt').className = "formtextbox";
    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtsrvcharges').disabled = false;
    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtsrvcharges').className = "formtextbox";
    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtExpDt').disabled = false;
    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtCurrAmt').disabled = true;
    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtCurrAmt').className = "ReadOnlyTextBox";
    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtreqamtkyd').disabled = true;
    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtreqamtkyd').className = "ReadOnlyTextBox";
    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtCardNo').disabled = false;
    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtCardNo').className = "formtextbox";
    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtCurrency').disabled = true;
    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtCurrency').className = "ReadOnlyTextBox";
    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtAuthCode').disabled = false;
    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtAuthCode').className = "formtextbox";
    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtChangeKyd').disabled = true;
    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtChangeKyd').className = "ReadOnlyTextBox";
    document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlCurrency').disabled = false;
    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtTenderedAmt').disabled = true;
    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtTenderedAmt').className = "ReadOnlyTextBox";
    if (document.getElementById('' + ctrlcom + '_ReceiptControl2_chkotpadvanced').checked == false) {
        ClearTranctions();
    }
}

function EditEnableControls(val) {

    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtamt').disabled = false;
    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtamt').className = "formtextbox";
    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtsrvcharges').disabled = false;
    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtsrvcharges').className = "formtextbox";
    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtExpDt').disabled = false;
    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtCurrAmt').disabled = true;
    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtCurrAmt').className = "ReadOnlyTextBox";
    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtreqamtkyd').disabled = true;
    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtreqamtkyd').className = "ReadOnlyTextBox";
    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtCardNo').disabled = false;
    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtCardNo').className = "formtextbox";
    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtCurrency').disabled = true;
    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtCurrency').className = "ReadOnlyTextBox";
    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtAuthCode').disabled = false;
    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtAuthCode').className = "formtextbox";
    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtChangeKyd').disabled = true;
    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtChangeKyd').className = "ReadOnlyTextBox";
    document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlCardType').disabled = false;
    document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlBankName').disabled = false;
    document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlCurrency').disabled = false;
    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtTenderedAmt').disabled = true;
    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtTenderedAmt').className = "ReadOnlyTextBox";
}

function RemoveService(obj) {


    var PaymexntIndex = obj.parentElement.parentElement.parentElement.parentElement.rowIndex;
    PaymexntIndex = PaymexntIndex == undefined ? 1 : PaymexntIndex;
    var srvsid = $("table[id$=gvReceiptDetails] tr").filter(":eq(" + PaymexntIndex + ")").find('[id*=hdnrecmodeId]').val();
    var gridID = document.getElementById('' + ctrlcom + '_ReceiptControl2_gvReceiptDetails');
    var pluturefid = $('[id$=gvReceiptDetails] tr').filter(':eq(' + PaymexntIndex + ')').find("input[type=hidden][id*=gridhdnplutusreferenceid]").val();
    if (pluturefid == '' || pluturefid == 'undefined' || pluturefid == undefined || pluturefid == null || pluturefid == 'null') {
        pluturefid = "";
    }
    if (pluturefid != "") {
        $(".stoast").toastText("warning", "u can't delete this record.", 5, 3);
        return false;
    }
    if ($('table[id$=gvReceiptDetails]').find("tr:eq(1)").find('input[type=hidden][id*=hdnrecmodeId]').val() == 0) {
        gridID.deleteRow(1);
        if (gridID.rows.length == 1 || (gridID.rows.length == 0 && gridID != null)) {
            fn_AddFilterRow1();
        }
        return false;
    }
    else if (PaymexntIndex == 1) {
        var pay_mode = $('[id$=gvReceiptDetails] tr').filter(':eq(' + PaymexntIndex + ')').find("input[type=hidden][id*=hdnrecmodeId]").val();
        var form_name = $('#ctl00_ContentPlaceHolder1_ReceiptControl2_hdnDocName').val();
        if (form_name == 'ASSESOUTSTDNGDUE') {
            $("table[id$=tbl_Prevoius_Settled_Bills_sch] tr [type=checkbox]").attr('disabled', false);
        }
        if(form_name == 'PREADVANCE' && preadvflag=='SD')
        {
            document.getElementById('ctl00_ContentPlaceHolder1_ReceiptControl2_txtreqamtkyd').value=$('[id$=gvReceiptDetails] tr').filter(':eq(' + PaymexntIndex + ')').find("[id*=lblAmount]").text(); 
            document.getElementById('ctl00_ContentPlaceHolder1_ReceiptControl2_hdnDueAmt').value=$('[id$=gvReceiptDetails] tr').filter(':eq(' + PaymexntIndex + ')').find("[id*=lblAmount]").text(); 
            $('#' + ctrlcom + '_txtRefundableAmt').val($('[id$=gvReceiptDetails] tr').filter(':eq(' + PaymexntIndex + ')').find("[id*=lblAmount]").text());
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatdue').value = $('[id$=gvReceiptDetails] tr').filter(':eq(' + PaymexntIndex + ')').find("[id*=lblAmount]").text(); 
        }
        if (form_name == 'Refund') {
            if (pay_mode == '1' || pay_mode == '2') {
                Rest_Amt = $('#ctl00_ContentPlaceHolder1_BillsGrid_hdncashamt').val();
                if (Rest_Amt == '' || Rest_Amt == null || Rest_Amt == undefined)
                { Rest_Amt = 0; }
                var amt = $('[id$=gvReceiptDetails] tr').filter(':eq(' + PaymexntIndex + ')').find("[id*=lblAmount]").text();
                if (amt == '' || amt == null || amt == undefined)
                { amt = 0; }
                $('#ctl00_ContentPlaceHolder1_BillsGrid_hdncashamt').val(parseFloat(Rest_Amt) + parseFloat(amt));
                if(preadvflag=='SD')
                {
                     document.getElementById('ctl00_ContentPlaceHolder1_ReceiptControl2_txtreqamtkyd').value=parseFloat(Rest_Amt) + parseFloat(amt); 
                    document.getElementById('ctl00_ContentPlaceHolder1_ReceiptControl2_hdnDueAmt').value=parseFloat(Rest_Amt) + parseFloat(amt);
                    $('#' + ctrlcom + '_txtRefundableAmt').val(parseFloat(Rest_Amt) + parseFloat(amt));
                    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatdue').value = parseFloat(Rest_Amt) + parseFloat(amt);
                }
            }
            else
            { 
                document.getElementById('ctl00_ContentPlaceHolder1_ReceiptControl2_txtreqamtkyd').value=$('[id$=gvReceiptDetails] tr').filter(':eq(' + PaymexntIndex + ')').find("[id*=lblAmount]").text(); 
                document.getElementById('ctl00_ContentPlaceHolder1_ReceiptControl2_hdnDueAmt').value=$('[id$=gvReceiptDetails] tr').filter(':eq(' + PaymexntIndex + ')').find("[id*=lblAmount]").text(); 
                $('#' + ctrlcom + '_txtRefundableAmt').val($('[id$=gvReceiptDetails] tr').filter(':eq(' + PaymexntIndex + ')').find("[id*=lblAmount]").text());
                document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatdue').value = $('[id$=gvReceiptDetails] tr').filter(':eq(' + PaymexntIndex + ')').find("[id*=lblAmount]").text(); 
            }
        }
        gridID.deleteRow(1);
    }
    else if (srvsid == undefined || srvsid == '') {
        $(".stoast").toastText("warning", "No Item to delete.", 5, 3);
    }
    else {

        var pay_mode = $('[id$=gvReceiptDetails] tr').filter(':eq(' + PaymexntIndex + ')').find("input[type=hidden][id*=hdnrecmodeId]").val();
        var form_name = $('#ctl00_ContentPlaceHolder1_ReceiptControl2_hdnDocName').val();
        if (form_name == 'Refund') {
            if (pay_mode == '1' || pay_mode == '2') {
                Rest_Amt = $('#ctl00_ContentPlaceHolder1_BillsGrid_hdncashamt').val();
                if (Rest_Amt == '' || Rest_Amt == null || Rest_Amt == undefined)
                { Rest_Amt = 0; }
                var amt = $('[id$=gvReceiptDetails] tr').filter(':eq(' + PaymexntIndex + ')').find("[id*=lblAmount]").text();
                if (amt == '' || amt == null || amt == undefined)
                { amt = 0; }
                $('#ctl00_ContentPlaceHolder1_BillsGrid_hdncashamt').val(parseFloat(Rest_Amt) + parseFloat(amt));
            }
            else
            { }
        }
        $('[id$=gvReceiptDetails] tr').filter(':eq(' + PaymexntIndex + ')').remove();
    }
    if (gridID.rows.length == 1 || (gridID.rows.length == 0 && gridID != null)) {
        fn_AddFilterRow1();
    }
    count = gridID.rows.length - 2;
    document.getElementById('' + ctrlcom + '_ReceiptControl2_imgbtnadd').style.display = 'block';
    document.getElementById('' + ctrlcom + '_ReceiptControl2_imgbtnupdate').style.display = "none";
    remove();
    getDueAmount();
    onRedColors();
    var dueAmt = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtTotalDue').value;
    var exrate = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtExchangeRate').value;
    if (dueAmt != 'NaN' && dueAmt != undefined && dueAmt != null && dueAmt != '' && dueAmt != 0 ) {
        SetCurrencyAmtFields(dueAmt, exrate);
    }

    document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlPaymentType').selectedIndex = 0;
    document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlPaymentType').disabled = false;
    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtadjustmentamt').value = 0;

    if (document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnDocName').value != "NewChangeReceipt") {
        tdadv.style.display = 'none';
        tdadvcell.style.display = 'none';

        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtorganizationFund').value = 0;
        tdfund.style.display = 'none';
        tdfundcell.style.display = 'none';
    }
    document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnHTMLString1').value = gridID.innerHTML;
    document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlPaymentType').focus();
    checkpayment();
    if (document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnDocName').value == 'OUTSTDNGDUE') {
        OutStandingdueCalculations();
        var due_amtn = $('#ctl00_ContentPlaceHolder1_txtDueAmount').val();
        if (parseFloat(due_amtn) < 0)
        { due_amtn = 0; }
        document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnDueAmt').value = due_amtn;
        GetExchangeRate();
    }
    if (document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnDocName').value == 'Refund') {
        RefundCalculations();
        var Ref_amt = $('#ctl00_ContentPlaceHolder1_txtRefundableAmt').val();
        var recp_amt = $('#ctl00_ContentPlaceHolder1_ReceiptControl2_txtreceiptAmount').val();
        if (Ref_amt == undefined || Ref_amt == null || Ref_amt == '')
        { Ref_amt = 0; }
        if (recp_amt == undefined || recp_amt == null || recp_amt == '')
        { recp_amt = 0; }
        var due_amtn = parseFloat(Ref_amt) - parseFloat(recp_amt);
        if (parseFloat(due_amtn) < 0)
        { due_amtn = 0; }
        document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnDueAmt').value = due_amtn;
        $('#ctl00_ContentPlaceHolder1_txtRefundAmt').val(recp_amt);
        GetExchangeRate();
    }
    if (document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnDocName').value == 'companyRefund') {
        document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlCurrency').disabled = true;
    }
    if (document.getElementById('' + ctrlcom + '_ReceiptControl2_Search3_txtSearchControl').value != '' && document.getElementById('' + ctrlcom + '_ReceiptControl2_Search3__hiddenText').value != '' && document.getElementById('' + ctrlcom + '_ReceiptControl2_Search3__hiddenID').value != '')
    { document.getElementById('' + ctrlcom + '_ReceiptControl2_Search3_txtSearchControl').value = ''; document.getElementById('' + ctrlcom + '_ReceiptControl2_Search3__hiddenText').value = ''; document.getElementById('' + ctrlcom + '_ReceiptControl2_Search3__hiddenID').value = ''; }

    return false;
}
function ClearTransactionGrid() {
    $('table[id$=gvReceiptDetails]').find("tr:eq(1)").find('input[type=hidden][id*=hdnrecmodeId]').val('0');
    $('table[id$=gvReceiptDetails]').find("tr:eq(1)").find('input[type=hidden][id*=_RECEIPT_MODE_ID]').val('0');
    $('table[id$=gvReceiptDetails]').find("tr:eq(1)").find('[id*=lblrecmode]').text('');
    $('table[id$=gvReceiptDetails]').find("tr:eq(1)").find('[id*=lblAmount]').text('');
    $('table[id$=gvReceiptDetails]').find("tr:eq(1)").find('[id*=lblAmtinwords]').text('');
    $('table[id$=gvReceiptDetails]').find("tr:eq(1)").find('[id*=lblcurrname]').text('');
    $('table[id$=gvReceiptDetails]').find("tr:eq(1)").find('[id*=lblexchrate]').text('0');
    $('table[id$=gvReceiptDetails]').find("tr:eq(1)").find('[id*=lblconvertedamt]').text('');
    $('table[id$=gvReceiptDetails]').find("tr:eq(1)").find('[id*=lblbankname]').text('');
    $('table[id$=gvReceiptDetails]').find("tr:eq(1)").find('[id*=lblcardno]').text('');
    $('table[id$=gvReceiptDetails]').find("tr:eq(1)").find('[id*=lblauthcode]').text('');
    $('table[id$=gvReceiptDetails]').find("tr:eq(1)").find('[id*=lblcardexpdt]').text('');
    $('table[id$=gvReceiptDetails]').find("tr:eq(1)").find('[id*=lbltendcash]').text('');
    $('table[id$=gvReceiptDetails]').find("tr:eq(1)").find('[id*=lblchange]').text('');
    $('table[id$=gvReceiptDetails]').find("tr:eq(1)").find('[id*=hdnbankid]').val('0');
    $('table[id$=gvReceiptDetails]').find("tr:eq(1)").find('[id*=_BANK_ID]').val('0');
    $('table[id$=gvReceiptDetails]').find("tr:eq(1)").find('[id*=hdncardtypeId]').val('0');
    $('table[id$=gvReceiptDetails]').find("tr:eq(1)").find('[id*=hdncurrId]').val('0');
    $('table[id$=gvReceiptDetails]').find("tr:eq(1)").find('[id*=hdnSNo]').val('1');
    $('table[id$=gvReceiptDetails]').find("tr:eq(1)").find('[id*=hdnpaymentappgroupid]').val('0');
    $('table[id$=gvReceiptDetails]').find("tr:eq(1)").find('[id*=hdnpaymentcommid]').val('0');
    $('table[id$=gvReceiptDetails]').find("tr:eq(1)").find('[id*=hdnis_adjested_o]').val('');
    $('table[id$=gvReceiptDetails]').find("tr:eq(1)").find('[id*=hdncalamtwithsrvchrg]').val('0');
    $('table[id$=gvReceiptDetails]').find("tr:eq(1)").find('[id*=hdnsrvcharg]').val('0');
    $('table[id$=gvReceiptDetails]').find("tr:eq(1)").find('[id*=hdnsrvchargamt]').val('0');
    $('table[id$=gvReceiptDetails]').find("tr:eq(1)").find('[id*=gridhdnplutusreferenceid]').val('0');
    $('table[id$=gvReceiptDetails]').find("tr:eq(1)").find('[id*=hdncheck_AuthID]').val('0');



    document.getElementById('ctl00_ContentPlaceHolder1_ReceiptControl2_imgbtnadd').style.display = 'block'; 
    document.getElementById('ctl00_ContentPlaceHolder1_ReceiptControl2_imgbtnupdate').style.display = "none";
    $("table[id$=gvReceiptDetails] tr:gt(1)").each(function (i, j) {
        $(this).remove();
    });
    DisplayMultiDiscount();
    ClearTransactioncontrols();
    document.getElementById('' + ctrlcom + '_ReceiptControl2_Search3_txtSearchControl').value = '';
    document.getElementById('' + ctrlcom + '_ReceiptControl2_Search3__hiddenID').value = '';
    document.getElementById('' + ctrlcom + '_ReceiptControl2_Search3__hiddenText').value = '';
    document.getElementById('' + ctrlcom + '_ReceiptControl2_ucdueauth_txtSearchControl').value = '';
    document.getElementById('' + ctrlcom + '_ReceiptControl2_ucdueauth__hiddenID').value = '';
    document.getElementById('' + ctrlcom + '_ReceiptControl2_ucdueauth__hiddenText').value = '';
    onsetDiscAuthThroughMultiDisc();
    getDueAmount();
    onRedColors();
    count = 0;
}
function ClearMultiConcessionGrid() {
    $('table[id$=gvMultipleConcession]').find("tr:eq(1)").find('[id*=lblSNo]').text('1');
    $('table[id$=gvMultipleConcession]').find("tr:eq(1)").find('[id*=hdncardid]').val('0');
    $('table[id$=gvMultipleConcession]').find("tr:eq(1)").find('input[type=hidden][id*=hdnauthid]').val('0');
    $('table[id$=gvMultipleConcession]').find("tr:eq(1)").find('input[type=hidden][id*=hdnRuleid]').val('0');
    $('table[id$=gvMultipleConcession]').find("tr:eq(1)").find('input[type=hidden][id*=hdneventid]').val('0');
    $('table[id$=gvMultipleConcession]').find("tr:eq(1)").find('[id*=ddlMultiDiscounttype]').val(0);
    $('table[id$=gvMultipleConcession]').find("tr:eq(1)").find('[id*=txtcardno]').text('');
    $('table[id$=gvMultipleConcession]').find("tr:eq(1)").find('[id*=ddlModes]').val(0);
    $('table[id$=gvMultipleConcession]').find("tr:eq(1)").find('[id*=txtPersentage]').text('');
    $('table[id$=gvMultipleConcession]').find("tr:eq(1)").find('[id*=txtAmount]').text('');
    $('table[id$=gvMultipleConcession]').find("tr:eq(1)").find('[id*=txtAutherizedPersion]').text('');
    $("table[id$=gvMultipleConcession] tr:gt(1)").each(function (i, j) {
        $(this).remove();
    });
}
function ChangeCardTypeName() {
    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtQckCardHldrName').disabled = true;
    var reg_fee_auto = document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnAutoFill_tran').value;
    if (reg_fee_auto == 'True') {
        var pat_b_amt = $('#ctl00_ContentPlaceHolder1_ReceiptControl2_txtpatgross').val();
        var cash_amt = $('#ctl00_ContentPlaceHolder1_ReceiptControl2_txtcashAmt').val();
        if (parseFloat(pat_b_amt) > 0) { } else { pat_b_amt = 0; }
        if (parseFloat(cash_amt) > 0) { } else { cash_amt = 0; }
        if (pat_b_amt == cash_amt && cash_amt != 0 && pat_b_amt != 0) {
            $('#ctl00_ContentPlaceHolder1_ReceiptControl2_txtcashAmt').val(0);
            ctl00_ContentPlaceHolder1_ReceiptControl2_lblqickchangeamt.innerHTML = 0;
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtTotalDue').value = pat_b_amt;
            document.getElementById('' + ctrlcom + '_ReceiptControl2_Search3_txtSearchControl').disabled = false;
            document.getElementById('lk_btn_ctl00_ContentPlaceHolder1_ReceiptControl2_Search3').disabled = false;
            var form_name = document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnDocName').value;
            var assest = '';
            if (form_name == 'OP') {
                assest = document.getElementById('' + ctrlcom + '_ChkAssesment').checked;
            }
            else if (form_name == 'Cons') {
                assest = document.getElementById('' + ctrlcom + '_ChkAssesment').checked;
            }
            else if (form_name == 'OPQUICK') {
                assest = document.getElementById('' + ctrlcom + '_ChkAssesment').checked;
            }
            else {
                assest = false;
            }
            if (assest == true) {
                document.getElementById('' + ctrlcom + '_ReceiptControl2_Search3_txtSearchControl').className = 'grey';
            }
            else {
                document.getElementById('' + ctrlcom + '_ReceiptControl2_Search3_txtSearchControl').className = 'red';
            }
    
        }
    }

    var cardamt = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtCardAmt').value;
    var __cardtype = document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlcrdtype').value;
    if (document.getElementById('' + ctrlcom + '_ReceiptControl2_txtTotalDue').value == 0 && __cardtype > 0 && (cardamt == 0 || cardamt == '')) {
        $(".stoast").toastText("warning", "Your total due amount is 0", 5, 3);
        $('#ctl00_ContentPlaceHolder1_ReceiptControl2_ddlcrdtype').val(0);
        return false;
    }

    if (document.getElementById('' + ctrlcom + '_ReceiptControl2_chkotpreq').checked) {
        var _docName = document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnDocName').value;
        if (_docName == 'OP') {
            var _opCount = 0;
            $("table[id*=gvServices] tr:has(td)").each(function (e) {
                var hdnServiceID = $(this).closest('tr').find('input[type=hidden][id*=hdnServiceID]').val();
                if (hdnServiceID == '' | hdnServiceID == null || hdnServiceID == undefined) { hdnServiceID = 0; }
                if (hdnServiceID > 0) {
                    _opCount = 1;
                }
            });
            if (_opCount == 0) {
                document.getElementById('' + ctrlcom + '_ReceiptControl2_chkotpreq').checked = false;
                $(".stoast").toastText("warning", "Please post at least one service!", 5, 3);
                return false;
            }
        }
    }
    tdquickotp.style.display = 'none';
    tdquickotpreq.style.display = 'none';
    var ddlCardtypeIndex = document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlcrdtype').value;
    if (ddlCardtypeIndex == '' || ddlCardtypeIndex == null || ddlCardtypeIndex == undefined) { ddlCardtypeIndex = 0; }
    if (ddlCardtypeIndex != 0) {

        var _docName = document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnDocName').value;
        var clientName = $('[id*=hdnclientNameFor]').val();
        if (clientName == '' || clientName == null || clientName == undefined) { clientName = ''; }

        clientName = clientName.toLowerCase();
        if (_docName == 'IPFINAL' && clientName == 'yashoda') {
            ctl00_ContentPlaceHolder1_ReceiptControl2_txtcardNoCmp.value = '';
            ctl00_ContentPlaceHolder1_ReceiptControl2_txtquickremarks.value = '';
            ctl00_ContentPlaceHolder1_ReceiptControl2_ddbankName.value = 0;
            ctl00_ContentPlaceHolder1_ReceiptControl2_txtcardExpiredt.value = '';
            ctl00_ContentPlaceHolder1_ReceiptControl2_txtcardAuther.value = '';
            ctl00_ContentPlaceHolder1_ReceiptControl2_ddcardType.value = 0;
            document.getElementById('' + ctrlcom + '_ReceiptControl2_ddcardType').className = 'red';
            document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlcrdtype').className = 'red';
            if(document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnCardNoMand').value=='YES')
                document.getElementById('' + ctrlcom + '_ReceiptControl2_txtCardNo').className = 'red';
            else
                document.getElementById('' + ctrlcom + '_ReceiptControl2_txtCardNo').className = 'grey';
            document.getElementById('' + ctrlcom + '_ReceiptControl2_ddbankName').className = 'red';
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtcardAuther').className = 'red';
            /*document.getElementById('' + ctrlcom + '_ReceiptControl2_txtcardExpiredt').className = 'red';*/

        }
        if (document.getElementById('' + ctrlcom + '_ReceiptControl2_chkotpreq').checked == false) {
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtCardAmt').value = '';
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtCardAmt').className = 'red';
        }
        if (lblquick.classList == 'select') {
            var cashamt = ctl00_ContentPlaceHolder1_ReceiptControl2_txtcashAmt.value;
            var Patgross = ctl00_ContentPlaceHolder1_ReceiptControl2_txtpatgross.value;
            var partypay = ctl00_ContentPlaceHolder1_ReceiptControl2_txtcmpDue.value;
            var taxamount = ctl00_ContentPlaceHolder1_ReceiptControl2_txttaxamt.value;
            var changeinamt = ctl00_ContentPlaceHolder1_ReceiptControl2_lblqickchangeamt.innerHTML;
            if (taxamount == undefined || taxamount == '' || taxamount == null || taxamount == "NaN") { taxamount = 0; }
            changeinamt = changeinamt == '' ? 0 : parseFloat(changeinamt);
            partypay = partypay == '' ? 0 : parseFloat(partypay);
            cashamt = cashamt - changeinamt;
            var dueamt = 0;
            if (document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnDocName').value == 'IPFINAL') {
                var _advnce = $('#ctl00_ContentPlaceHolder1_txtTotAdvance').val();
                var ClaimAmt = $('[id*=hdnClaimAdjAmt]').val();
                if (ClaimAmt == '' || ClaimAmt == null || ClaimAmt == undefined) { ClaimAmt = 0; }

                if (_advnce == '' || _advnce == null || _advnce == undefined) { _advnce = 0; }
                dueamt = setProperDecimalsVal(parseFloat(Patgross) - parseFloat(cashamt) - parseFloat(_advnce) - parseFloat(ClaimAmt));
            }
            else {
                if (document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnisallowgst').value.toUpperCase() == "YES") {
                    dueamt = (parseFloat(Patgross) + parseFloat(taxamount)) - parseFloat(cashamt);
                }
                else {
                    dueamt = parseFloat(Patgross) - parseFloat(cashamt);
                }
            }
            ctl00_ContentPlaceHolder1_ReceiptControl2_txtpatdue.value = dueamt;
            ctl00_ContentPlaceHolder1_ReceiptControl2_txtTotalDue.value = parseFloat(dueamt) + parseFloat(partypay);
            if (cashamt == 0 || cashamt == "") {
                ctl00_ContentPlaceHolder1_ReceiptControl2_lblqickchangeamt.innerHTML = 0;
            }
        }
    }
    if (document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlcrdtype').value == 0) {

        document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlcrdtype').className = 'red';
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtCardAmt').disabled = true;
        document.getElementById('' + ctrlcom + '_ReceiptControl2_ddcardType').value = '0'
        document.getElementById('' + ctrlcom + '_ReceiptControl2_ddcardType').className = 'grey';
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtCardAmt').value = '0';

        document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlcrdtype').value = '0'
        document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlcrdtype').className = 'grey';

        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtCardAmt').value = '0'
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtCardAmt').className = 'grey';

        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtcardNoCmp').value = ''
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtcardNoCmp').className = 'grey';

        document.getElementById('' + ctrlcom + '_ReceiptControl2_ddbankName').value = '0'
        document.getElementById('' + ctrlcom + '_ReceiptControl2_ddbankName').className = 'grey';
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtcardAuther').value = '';
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtcardAuther').className = 'grey';

        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtcardExpiredt').value = ''
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtcardExpiredt').className = 'grey';
        ctl00_ContentPlaceHolder1_ReceiptControl2_lblqickchangeamt.innerHTML = 0;
        document.getElementById('' + ctrlcom + '_ReceiptControl2_ddcardType').disabled = true;
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtcardExpiredt').disabled = true;
        document.getElementById('' + ctrlcom + '_ReceiptControl2_ddbankName').disabled = true;
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtcardNoCmp').disabled = true;
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtcardAuther').disabled = true;
        document.getElementById('' + ctrlcom + '_ReceiptControl2_Search3_txtSearchControl').className = 'red';


        var _due = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatdue').value;
        var _Totdue = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtTotalDue').value;
        if (_due == '' || _due == null || _due == undefined) { _due = 0; }
        if (_Totdue == '' || _Totdue == null || _Totdue == undefined) { _Totdue = 0; }
        if (parseFloat(_due) > 0 && parseFloat(_Totdue) > 0) {
            document.getElementById('' + ctrlcom + '_ReceiptControl2_Search3_txtSearchControl').disabled = false;
            document.getElementById('lk_btn_ctl00_ContentPlaceHolder1_ReceiptControl2_Search3').disabled = false;
        }

        tdquickotp.style.display = 'none';
        if (lblquick.classList == 'select') {
            var cashamt = ctl00_ContentPlaceHolder1_ReceiptControl2_txtcashAmt.value;
            var Patgross = ctl00_ContentPlaceHolder1_ReceiptControl2_txtpatgross.value;
            var partypay = ctl00_ContentPlaceHolder1_ReceiptControl2_txtcmpDue.value;
            var changeinamt = ctl00_ContentPlaceHolder1_ReceiptControl2_lblqickchangeamt.innerHTML;
            changeinamt = changeinamt == '' ? 0 : parseFloat(changeinamt);
            partypay = partypay == '' ? 0 : parseFloat(partypay);
            cashamt = cashamt - changeinamt;
            var CardAmt = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtCardAmt').value;
            if (cashamt == '.' || cashamt == '' || cashamt == undefined || cashamt == null) { cashamt = 0; }
            if (CardAmt == '.' || CardAmt == '' || CardAmt == undefined || CardAmt == null) { CardAmt = 0; }
          
            var TotalPayAmt = parseFloat(cashamt) + parseFloat(CardAmt);
            if (TotalPayAmt > Patgross) {
                var Chnageinamt = (parseFloat(cashamt) + parseFloat(CardAmt)) - parseFloat(Patgross);
                Chnageinamt = Chnageinamt == ('' || undefined || isNaN || NaN) ? 0 : Chnageinamt;
                ctl00_ContentPlaceHolder1_ReceiptControl2_lblqickchangeamt.innerHTML = setProperDecimalsCorpPer(Chnageinamt);
            
               
            }
            var dueamt = parseFloat(Patgross) - parseFloat(cashamt);
            dueamt = dueamt > 0 ? dueamt : 0;
            ctl00_ContentPlaceHolder1_ReceiptControl2_txtpatdue.value = dueamt;
            ctl00_ContentPlaceHolder1_ReceiptControl2_txtTotalDue.value = parseFloat(dueamt) + parseFloat(partypay);
            if (cashamt == 0 || cashamt == "") {
                ctl00_ContentPlaceHolder1_ReceiptControl2_lblqickchangeamt.innerHTML = 0;
            }
        }
    }
    else {
        var docName = document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnDocName').value;
        var type = document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlcrdtype').value;
        var mobile_no = '';
        if (type == '4' || type == '5') {
            VisibleSwipe();
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtQckCardHldrName').disabled = false;
        }

        if (document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlcrdtype').value == "4") {
            var mobile_no = '';
            var otpreq = $('#ctl00_ContentPlaceHolder1_ReceiptControl2_hdnotprequired').val();
            if (otpreq == 'True') {

                if (docName == 'OP' || docName == 'Cons' || docName == 'Refund' || docName == 'OUTSTDNGDUE' || docName == 'PREADVANCE') {
                    if (document.getElementById('' + ctrlcom + '_umrPatientDetails_lblMobileNo') != null)
                        mobile_no = document.getElementById('' + ctrlcom + '_umrPatientDetails_lblMobileNo').innerHTML;
                }
                else if (docName == 'OPQUICK') {
                    mobile_no = document.getElementById('' + ctrlcom + '_Address1_txtMobile1').value;
                    if (mobile_no == '') {
                        $(".stoast").toastText("warning", "Please Please enter mobile number!", 5, 3);
                        document.getElementById('' + ctrlcom + '_ReceiptControl2_chkotpreq').checked = false;
                    }
                    else if (mobile_no.length < 10) {
                        $(".stoast").toastText("warning", "Please enter a minimum of 10 digits for the mobile number!", 5, 3);
                        document.getElementById('' + ctrlcom + '_Address1_txtMobile1').focus();
                        document.getElementById('' + ctrlcom + '_Address1_txtMobile1').value = '';
                        document.getElementById('' + ctrlcom + '_ReceiptControl2_chkotpreq').checked = false;
                    }
                }
                else if (docName == 'IPFINAL') {
                    mobile_no = document.getElementById('' + ctrlcom + '_IPPatientDtls1_LblMobile').innerHTML;

                }

                else if (docName == 'REG') {
                    mobile_no = document.getElementById('' + ctrlcom + '_txtMobile1').value;
                    if (mobile_no == '') {
                        $(".stoast").toastText("warning", "Please Please enter mobile number!", 5, 3);
                        document.getElementById('' + ctrlcom + '_ReceiptControl2_chkotpreq').checked = false;
                    }
                    else if (mobile_no.length < 10) {
                        $(".stoast").toastText("warning", "Please enter a minimum of 10 digits for the mobile number!", 5, 3);
                        document.getElementById('' + ctrlcom + '_txtMobile1').focus();
                        document.getElementById('' + ctrlcom + '_txtMobile1').value = '';
                        document.getElementById('' + ctrlcom + '_ReceiptControl2_chkotpreq').checked = false;
                    }
                }

                else if (docName == 'NewChangeReceipt') {
                    mobile_no = '';
                }
                else if (docName == 'DONATEEDETAILS') {
                    mobile_no = '';
                }
                else {
                    if (document.getElementById('' + ctrlcom + '_umrPatientDetails_lblMobileNo') != null)
                        mobile_no = document.getElementById('' + ctrlcom + '_umrPatientDetails_lblMobileNo').innerHTML;
                }

                if (mobile_no == '' || mobile_no == undefined || mobile_no == null || mobile_no == NaN) {
                    if (docName == 'REG' || docName == 'OPQUICK') {
                        return false;
                    }
                    else if (docName == 'NewChangeReceipt' || docName == 'DONATEEDETAILS')
                    { }
                    else if (docName == "IPFINAL" && document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnerdocname').value == "ER") {

                    }
                    else {
                        if (docName == 'OP' || docName == 'ER') { }
                        else {
                            $(".stoast").toastText("warning", "please enter mobile number.", 5, 3);
                            return false;
                        }
                    }
                }
                if (docName == 'NewChangeReceipt' || docName == 'DONATEEDETAILS')
                { }
                else {
                    tdquickotp.style.display = 'table-cell';
                    tdquickotpreq.style.display = 'block';
                    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtotp').className = 'red';
                    GetOTPSms(mobile_no);
                    //return false;
                }
            }
        }
        document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlcrdtype').className = 'grey';
        document.getElementById('' + ctrlcom + '_ReceiptControl2_ddcardType').disabled = false;
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtcardExpiredt').disabled = false;
        document.getElementById('' + ctrlcom + '_ReceiptControl2_ddbankName').disabled = false;
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtcardNoCmp').disabled = false;
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtcardAuther').disabled = false;
        if (document.getElementById('' + ctrlcom + '_ReceiptControl2_txtcardAuther').value == '') {
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtcardAuther').className = 'red';
        }
    }

    if (document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlcrdtype').value == 0) {
        var _due = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatdue').value;
        var _Totdue = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtTotalDue').value;
        if (_due == '' || _due == null || _due == undefined) { _due = 0; }
        if (_Totdue == '' || _Totdue == null || _Totdue == undefined) { _Totdue = 0; }
        if (parseFloat(_due) > 0 && parseFloat(_Totdue) > 0) {
            document.getElementById('' + ctrlcom + '_ReceiptControl2_Search3_txtSearchControl').disabled = false;
            document.getElementById('lk_btn_ctl00_ContentPlaceHolder1_ReceiptControl2_Search3').disabled = false;
        }
    }

    var DueOrRefund = 0;
    var cardType = document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlcrdtype').value;
    var DueAmnt1 = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatdue').value;
    var Formname = $('#ctl00_ContentPlaceHolder1_ReceiptControl2_hdnDocName').val();
    var clientName = $('[id*=hdnclientNameFor]').val();
    if (clientName == '' || clientName == null || clientName == undefined) { clientName = ''; }
    clientName = clientName.toLowerCase();

    if (DueAmnt1 > 0 || Formname != 'OUTSTDNGDUE' || Formname != 'Refund') {
        if (Formname == 'OUTSTDNGDUE') {
            DueOrRefund = $('#ctl00_ContentPlaceHolder1_txtDueAmount').val();
            if (parseFloat(DueOrRefund) > 0) { } else { DueOrRefund = 0; }
        }
        else if (Formname == 'Refund') {
            DueOrRefund = $('#ctl00_ContentPlaceHolder1_txtRefundableAmt').val();
            if (parseFloat(DueOrRefund) > 0) { } else { DueOrRefund = 0; }
        }
        if (cardType > 0 && (Formname != 'OUTSTDNGDUE' || Formname != 'Refund') && parseFloat(DueOrRefund) == '0' && clientName !='vijaya') {

            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtCardAmt').disabled = false;

            if (document.getElementById('' + ctrlcom + '_ReceiptControl2_ddcardType').value == '0' || document.getElementById('' + ctrlcom + '_ReceiptControl2_ddcardType').value == '') {
                document.getElementById('' + ctrlcom + '_ReceiptControl2_ddcardType').className = 'red';
            }
            if (document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlcrdtype').value == '0' || document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlcrdtype').value == '') {
                document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlcrdtype').className = 'red';
            }
            if (document.getElementById('' + ctrlcom + '_ReceiptControl2_txtcardNoCmp').value == '' || document.getElementById('' + ctrlcom + '_ReceiptControl2_txtcardNoCmp').value == '') {
                document.getElementById('' + ctrlcom + '_ReceiptControl2_txtcardNoCmp').className = 'red';
            }

            if (document.getElementById('' + ctrlcom + '_ReceiptControl2_ddbankName').value == '0' || document.getElementById('' + ctrlcom + '_ReceiptControl2_ddbankName').value == '') {
                document.getElementById('' + ctrlcom + '_ReceiptControl2_ddbankName').className = 'red';
            }

            if (document.getElementById('' + ctrlcom + '_ReceiptControl2_txtcardAuther') == '') {
                document.getElementById('' + ctrlcom + '_ReceiptControl2_txtcardAuther').className = 'red';
            }

            /*if (document.getElementById('' + ctrlcom + '_ReceiptControl2_txtcardExpiredt').value == '') {
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtcardExpiredt').className = 'red';
            }*/
            if (document.getElementById('' + ctrlcom + '_ReceiptControl2_txtCardAmt').value == '0') {
                document.getElementById('' + ctrlcom + '_ReceiptControl2_txtCardAmt').className = 'red';
            }
        }
        else if (cardType > 0 && (Formname != 'OUTSTDNGDUE' || Formname != 'Refund') && parseFloat(DueOrRefund) == '0' && clientName == 'vijaya' ) {
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtCardAmt').disabled = false;
            if (document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlcrdtype').value == '0' || document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlcrdtype').value == '') {
                document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlcrdtype').className = 'red';
            }
            if (document.getElementById('' + ctrlcom + '_ReceiptControl2_txtcardNoCmp').value == '' || document.getElementById('' + ctrlcom + '_ReceiptControl2_txtcardNoCmp').value == '') {
                document.getElementById('' + ctrlcom + '_ReceiptControl2_txtcardNoCmp').className = 'red';
            }
            if (document.getElementById('' + ctrlcom + '_ReceiptControl2_txtcardAuther') == '') {
                document.getElementById('' + ctrlcom + '_ReceiptControl2_txtcardAuther').className = 'red';
            }
            if (document.getElementById('' + ctrlcom + '_ReceiptControl2_txtCardAmt').value == '0') {
                document.getElementById('' + ctrlcom + '_ReceiptControl2_txtCardAmt').className = 'red';
            }
        }
        else if (cardType > 0 && parseFloat(DueOrRefund) > 0 && (Formname == 'OUTSTDNGDUE' || Formname == 'Refund')) {
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtCardAmt').disabled = false;

            if (document.getElementById('' + ctrlcom + '_ReceiptControl2_ddcardType').value == '0' || document.getElementById('' + ctrlcom + '_ReceiptControl2_ddcardType').value == '') {
                document.getElementById('' + ctrlcom + '_ReceiptControl2_ddcardType').className = 'red';
            }
            if (document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlcrdtype').value == '0' || document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlcrdtype').value == '') {
                document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlcrdtype').className = 'red';
            }
            if (document.getElementById('' + ctrlcom + '_ReceiptControl2_txtcardNoCmp').value == '' || document.getElementById('' + ctrlcom + '_ReceiptControl2_txtcardNoCmp').value == '') {
                document.getElementById('' + ctrlcom + '_ReceiptControl2_txtcardNoCmp').className = 'red';
            }

            if (document.getElementById('' + ctrlcom + '_ReceiptControl2_ddbankName').value == '0' || document.getElementById('' + ctrlcom + '_ReceiptControl2_ddbankName').value == '') {
                document.getElementById('' + ctrlcom + '_ReceiptControl2_ddbankName').className = 'red';
            }

            if (document.getElementById('' + ctrlcom + '_ReceiptControl2_txtcardAuther').value == '') {
                document.getElementById('' + ctrlcom + '_ReceiptControl2_txtcardAuther').className = 'red';
            }
            if (document.getElementById('' + ctrlcom + '_ReceiptControl2_txtCardAmt').value == '0') {
                document.getElementById('' + ctrlcom + '_ReceiptControl2_txtCardAmt').className = 'red';
            }
        }
        else {
            document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlcrdtype').value = "0";
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtCardAmt').disabled = true;
            return false;
        }
    }

    else {
        $(".stoast").toastText("warning", "NO Need Of Card Amount Entry ", 5, 3);
        document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlcrdtype').value = "0";
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtCardAmt').disabled = true;
        return false;
    }

        var clientName = $('[id*=hdnclientNameFor]').val();
        if (clientName == '' || clientName == null || clientName == undefined) { clientName = ''; }
        clientName = clientName.toLowerCase();
        if(clientName == "omega"){
        $('[id$=textcardNoCmp]').attr("onkeypress","");
        $('[id$=textcardNoCmp]').attr("maxlength","4");
        }
amountinwords();
}
function GetOTPSms(mobile_no) {
    if (mobile_no == undefined || mobile_no == null || mobile_no == '')
    { mobile_no = ''; }
    var otpquick = document.getElementById('' + ctrlcom + '_ReceiptControl2_chkotpreq').checked;
    var otpadvance = document.getElementById('' + ctrlcom + '_ReceiptControl2_chkotpadvanced').checked;
    var docName = document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnDocName').value;
    if ((document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlcrdtype').value == "4" && otpquick == true) || (document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlPaymentType').value == "4" && otpadvance == true)) {
        GetAsync(
                 "GridService.asmx/Insertsms",
                { mobile_no: mobile_no },
                function (data) {

                    if (data.d != 'False') {
                        document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnotp').value = data.d;
                        $(".stoast").toastText("sucess", "OTP Sent Sucessfully, Please Enter In OTP Field", 5, 1);
                    }
                    return false;
                },
                function (jqXHR, textStatus, errorThrown) {
                    $(".stoast").toastText("warning", "Failed To Send OTP", 5, 3);
                });
    }
    else if (docName == 'Refund') {
        GetAsync(
                 "GridService.asmx/Insertsms",
                { mobile_no: mobile_no },
                function (data) {

                    if (data.d != 'False') {
                        document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnotp').value = data.d;
                        $(".stoast").toastText("sucess", "OTP Sent Sucessfully, Please Enter In OTP Field", 5, 1);
                    }
                    return false;
                },
                function (jqXHR, textStatus, errorThrown) {
                    $(".stoast").toastText("warning", "Failed To Send OTP", 5, 3);
                });
    }
}

/*Quick Mode Starts */
/* card expiry textbox color code changing*/
function Changecolour(obj) {
    if (obj.value != "") {
        $('#' + obj).removeClass('red');
    }
    if (document.getElementById('' + ctrlcom + '_ReceiptControl2_txtExpDt').value != "") {
        $('#ctl00_ContentPlaceHolder1_ReceiptControl2_txtExpDt').addClass('grey');
        $('#ctl00_ContentPlaceHolder1_ReceiptControl2_txtExpDt').removeClass('red');
    }
}
/* whenever card amount > 0 at that time change of color codes to card related textboxes */
function IsEmptyReplaceWithZero() {
    var clientname = $('[id*=hdnclientNameFor]').val();
    clientname = clientname.toLowerCase();
    if (document.getElementById('' + ctrlcom + '_ReceiptControl2_txtCardAmt').value > 0) {
       
        if(clientname !='vijaya')
        {
         if (document.getElementById('' + ctrlcom + '_ReceiptControl2_txtcardNoCmp').value > 0) {
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtcardNoCmp').className = 'grey';
        }
        else {
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtcardNoCmp').className = 'red';
        }
        if (document.getElementById('' + ctrlcom + '_ReceiptControl2_ddcardType').value != 0) {
            document.getElementById('' + ctrlcom + '_ReceiptControl2_ddcardType').className = 'grey';
        }
        else {
            document.getElementById('' + ctrlcom + '_ReceiptControl2_ddcardType').className = 'red';
        }
        if (document.getElementById('' + ctrlcom + '_ReceiptControl2_ddbankName').value != 0) {
            document.getElementById('' + ctrlcom + '_ReceiptControl2_ddbankName').className = 'grey';
        }
        else {
            document.getElementById('' + ctrlcom + '_ReceiptControl2_ddbankName').className = 'red';
        }
        }
          if (document.getElementById('' + ctrlcom + '_ReceiptControl2_txtcardNoCmp').value > 0) {
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtcardNoCmp').className = 'grey';
        }
         if (document.getElementById('' + ctrlcom + '_ReceiptControl2_ddcardType').value != 0) {
            document.getElementById('' + ctrlcom + '_ReceiptControl2_ddcardType').className = 'grey';
        }
          if (document.getElementById('' + ctrlcom + '_ReceiptControl2_ddbankName').value != 0) {
            document.getElementById('' + ctrlcom + '_ReceiptControl2_ddbankName').className = 'grey';
        }
        if (document.getElementById('' + ctrlcom + '_ReceiptControl2_txtcardExpiredt').value != '') {
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtcardExpiredt').className = 'grey';
        }
        /* else {
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtcardExpiredt').className = 'red';
        }*/
        if (document.getElementById('' + ctrlcom + '_ReceiptControl2_txtcardAuther').value != '') {
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtcardAuther').className = 'grey';
        }
        else {
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtcardAuther').className = 'red';
        }
    }
}
/*Quick Mode Ends */
/* Advance Mode Starts */

/* binding of multiple discount type dropdown at page load*/

var ddlroprtnew = new Array();
function OnDdldscntype() {
    var ddlreport = '';
    if (ddlroprtnew.length == 0) {
        GetAsync(
            "Private/FrontOffice/OPDBillNew.aspx/Get_Dscnttype",
            {},
            function (Mmodule) {
            Mmodule=JSON.parse(Mmodule.d)
                var _optionsVal2 = '';
                var select = "--Select--";
                _optionsVal2 += "<OPTION selected value='" + 0 + "'>" + select + "</OPTION>";
                if (Mmodule != null) {
                    if (Mmodule.length > 0) {
                        ddlroprtnew = Mmodule;
                        relation1 = Mmodule;
                        for (var i = 0; i < Mmodule.length; i++) {
                            _optionsVal2 += "<OPTION value='" + Mmodule[i].DISCOUNT_TYPE_ID + "'>" + Mmodule[i].DISCOUNT_TYPE_NAME + "</OPTION>";
                        }
                    }
                }
                $('[id$=ddlMultiDiscounttype]').empty().html(_optionsVal2);
            },
            function (jqXHR, textStatus, errorThrown) {
                $(".stoast").toastText("warning", errorThrown, 5, 3);
            });
    }

}
/* discount type percentage calculation of multiple discount grid */
function CalculateMultiDiscPercentage(obj, val) {


    if (document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnDocName').value == 'IPFINAL' || document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnDocName').value == 'REG') {
        CalculateDiscPercentages(obj, val);
    }
    else {
        UpdateGridDiscountSelection1(obj, val);
    }
}
/* discount type amount calculation of multiple discount grid */
function CalculateMultiDiscAmount(obj, val) {
    if (document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnDocName').value == 'IPFINAL' || document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnDocName').value == 'REG') {
        CalculateDiscPercentages(obj, val);
    }
    else {
        UpdateGridDiscountSelection1(obj, val);
    }
}
/* discount type percentage calculation of multiple discount grid in IP Final bill page*/
function CalculateDiscPercentages(obj, val) {
    var amount = 0; var CurrentRowIndex = 0; var perc = 0;
    var CashPerTotal = 0, HealthcardTotal = 0, ManageMentTotal = 0, StaffTotal = 0, EventBasedTotal = 0, RuleBasedTotal = 0;
    var CashPer = 0, HCPer = 0, MngtPer = 0, StaffPer = 0, EbPer = 0, CncsRulePer = 0, PharPer = 0;
    var CashAmt = 0, HCAmt = 0, MngtAmt = 0, StaffAmt = 0, EbAmt = 0, CncsRuleAmt = 0, PharAmt = 0;
    var TotalDiscAmt = 0, TotalDiscPer = 0;

    var _grossamt = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatgross').value;
    var _patdiscPer = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatdis').value;
    var _patdiscAmt = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatgrossamt').value;
    var _patNet = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatNet').value;
    var _patDue = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatdue').value;

    if (obj > 1) {
        CurrentRowIndex = obj;
    }
    else {
        var PerRowIndex = obj.parentElement.parentElement.rowIndex;
        CurrentRowIndex = PerRowIndex;
    }
    if ($('table[id*=gvMultipleConcession] tr').filter(':eq(' + CurrentRowIndex + ')').find("[id*=ddlMultiDiscounttype]").val() == 0 || $('table[id*=gvMultipleConcession] tr').filter(':eq(' + CurrentRowIndex + ')').find("[id*=ddlMultiDiscounttype]").val() == '') {
        $(".stoast").toastText("warning", "Please Select Discount Type", 5, 2);
        $("table[id$=gvMultipleConcession] tr").filter(":eq(" + CurrentRowIndex + ")").find("[id*=txtPersentage]").val(0);
        $("table[id$=gvMultipleConcession] tr").filter(":eq(" + CurrentRowIndex + ")").find("[id*=txtAmount]").val(0);
        $("table[id$=gvMultipleConcession] tr").filter(":eq(" + CurrentRowIndex + ")").find('[id*=ddlModes]')[0].value = 0;
        $("table[id$=gvMultipleConcession] tr").filter(":eq(" + CurrentRowIndex + ")").find('[id*=ddlModes]').val(1);
        return false;
    }
    var _gridamt = $("table[id$=gvMultipleConcession] tr").filter(":eq(" + CurrentRowIndex + ")").find("[id*=txtPersentage]").val();
    if (_gridamt == '' || _gridamt == null || _gridamt == undefined || _gridamt == "NaN") { _gridamt = '0'; }
    if (parseFloat(_gridamt) > 0) {
        $('table[id*=gvMultipleConcession] tr').filter(':eq(' + CurrentRowIndex + ')').find("[id*=ddlMultiDiscounttype]")[0].disabled = true;
    }
    else {
        $('table[id*=gvMultipleConcession] tr').filter(':eq(' + CurrentRowIndex + ')').find("[id*=ddlMultiDiscounttype]")[0].disabled = false;
    }

    $("table[id*=gvMultipleConcession] tr:has(td)").each(function (i, j) {
        CurrentRowIndex = $(this)[0].rowIndex;
        var Amount1 = $(this).closest("tr").find("[id*=txtAmount]")[0].value;
        Amount1 = Amount1 == '' ? 0 : Amount1;
        $(this).closest("tr").find("[id*=txtAmount]").val(Math.round(Amount1));
    });

    if (val == 'Amount') {
        var netamt = 0;
        netamt = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatNet').value;
        if (netamt == '' || netamt == null || netamt == undefined || netamt == "NaN") { netamt = '0'; }
        $("table[id*=gvMultipleConcession] tr:has(td)").each(function (i, j) {
            CurrentRowIndex = $(this)[0].rowIndex;
            var Amount1 = $(this).closest("tr").find("[id*=txtAmount]")[0].value;
            Amount1 = Amount1 == '' ? 0 : Amount1;
            amount = parseFloat(amount) + parseFloat(Amount1);
        });
        if (parseFloat(amount) > parseFloat(_grossamt)) {
            $("table[id$=gvMultipleConcession] tr").filter(":eq(" + CurrentRowIndex + ")").find("[id*=txtAmount]").val(0);
        }
        var MultiDimVal = $('table[id*=gvMultipleConcession] tr').filter(':eq(' + CurrentRowIndex + ')').find("[id*=ddlMultiDiscounttype]").val();
        if (MultiDimVal == 1) {
            CashAmt = $('table[id*=gvMultipleConcession] tr').filter(':eq(' + CurrentRowIndex + ')').find("[id*=txtAmount]").val();
            CashPer = setProperDecimalsCorpPer((parseFloat(CashAmt)) * 100 / parseFloat(_grossamt));
            $('table[id*=gvMultipleConcession] tr').filter(':eq(' + CurrentRowIndex + ')').find("[id*=txtPersentage]").val(CashPer);
        }
        if (MultiDimVal == 2) {
            HCAmt = $('table[id*=gvMultipleConcession] tr').filter(':eq(' + CurrentRowIndex + ')').find("[id*=txtAmount]").val();
            HCPer = setProperDecimalsCorpPer((parseFloat(HCAmt)) * 100 / parseFloat(_grossamt));
            $('table[id*=gvMultipleConcession] tr').filter(':eq(' + CurrentRowIndex + ')').find("[id*=txtPersentage]").val(HCPer);
        }
        if (MultiDimVal == 3) {
            MngtAmt = $('table[id*=gvMultipleConcession] tr').filter(':eq(' + CurrentRowIndex + ')').find("[id*=txtAmount]").val();
            MngtPer = setProperDecimalsCorpPer((parseFloat(MngtAmt)) * 100 / parseFloat(_grossamt));
            $('table[id*=gvMultipleConcession] tr').filter(':eq(' + CurrentRowIndex + ')').find("[id*=txtPersentage]").val(MngtPer);
        }
        if (MultiDimVal == 4) {
            StaffAmt = $('table[id*=gvMultipleConcession] tr').filter(':eq(' + CurrentRowIndex + ')').find("[id*=txtAmount]").val();
            StaffPer = setProperDecimalsCorpPer((parseFloat(StaffAmt)) * 100 / parseFloat(_grossamt));
            $('table[id*=gvMultipleConcession] tr').filter(':eq(' + CurrentRowIndex + ')').find("[id*=txtPersentage]").val(StaffPer);
        }
        if (MultiDimVal == 5) {
            EbAmt = $('table[id*=gvMultipleConcession] tr').filter(':eq(' + CurrentRowIndex + ')').find("[id*=txtAmount]").val();
            EbPer = setProperDecimalsCorpPer((parseFloat(EbAmt) * 100) / parseFloat(_grossamt));
            $('table[id*=gvMultipleConcession] tr').filter(':eq(' + CurrentRowIndex + ')').find("[id*=txtPersentage]").val(EbPer);
        }
        if (MultiDimVal == 6) {
            CncsRuleAmt = $('table[id*=gvMultipleConcession] tr').filter(':eq(' + CurrentRowIndex + ')').find("[id*=txtAmount]").val();
            CncsRulePer = setProperDecimalsCorpPer((parseFloat(CncsRuleAmt)) * 100 / parseFloat(_grossamt));
            $('table[id*=gvMultipleConcession] tr').filter(':eq(' + CurrentRowIndex + ')').find("[id*=txtPersentage]").val(CncsRulePer);
        }
        if (MultiDimVal == 7) {
            PharAmt = $('table[id*=gvMultipleConcession] tr').filter(':eq(' + CurrentRowIndex + ')').find("[id*=txtAmount]").val();
            PharPer = setProperDecimalsCorpPer((parseFloat(PharAmt)) * 100 / parseFloat(_grossamt));
            $('table[id*=gvMultipleConcession] tr').filter(':eq(' + CurrentRowIndex + ')').find("[id*=txtPersentage]").val(PharPer);
        }

    }
    else if (val == 'Perecent') {
        $("table[id*=gvMultipleConcession] tr:has(td)").each(function (i, j) {
            var Current = $(this)[0].rowIndex;
            perc = parseFloat(perc) + parseFloat($(this).closest("tr").find("[id*=txtPersentage]")[0].value);
        });
        if (perc > 100) {
            $(".stoast").toastText("warning", "Sorry System Doesn't Allow  More Than 100%", 5, 2);
            $("table[id$=gvMultipleConcession] tr").filter(":eq(" + CurrentRowIndex + ")").find("[id*=txtPersentage]").val(0);
        }
        var MultiDimVal = $('table[id*=gvMultipleConcession] tr').filter(':eq(' + CurrentRowIndex + ')').find("[id*=ddlMultiDiscounttype]").val();
        if (MultiDimVal == 1) {
            CashPer = $('table[id*=gvMultipleConcession] tr').filter(':eq(' + CurrentRowIndex + ')').find("[id*=txtPersentage]").val();
            if (CashPer == '' || CashPer == undefined || CashPer == null) { CashPer = 0; }
            CashAmt = Math.round(parseFloat(_grossamt) * parseFloat(CashPer) / 100);
            $('table[id*=gvMultipleConcession] tr').filter(':eq(' + CurrentRowIndex + ')').find("[id*=txtAmount]").val(CashAmt);
        }
        if (MultiDimVal == 2) {
            HCPer = $('table[id*=gvMultipleConcession] tr').filter(':eq(' + CurrentRowIndex + ')').find("[id*=txtPersentage]").val();
            if (HCPer == '' || HCPer == undefined || HCPer == null) { HCPer = 0; }
            HCAmt = Math.round(parseFloat(_grossamt) * parseFloat(HCPer) / 100);
            $('table[id*=gvMultipleConcession] tr').filter(':eq(' + CurrentRowIndex + ')').find("[id*=txtAmount]").val(HCAmt);
        }
        if (MultiDimVal == 3) {
            MngtPer = $('table[id*=gvMultipleConcession] tr').filter(':eq(' + CurrentRowIndex + ')').find("[id*=txtPersentage]").val();
            if (MngtPer == '' || MngtPer == undefined || MngtPer == null) { MngtPer = 0; }
            MngtAmt = Math.round(parseFloat(_grossamt) * parseFloat(MngtPer) / 100);
            $('table[id*=gvMultipleConcession] tr').filter(':eq(' + CurrentRowIndex + ')').find("[id*=txtAmount]").val(MngtAmt);
        }
        if (MultiDimVal == 4) {
            StaffPer = $('table[id*=gvMultipleConcession] tr').filter(':eq(' + CurrentRowIndex + ')').find("[id*=txtPersentage]").val();
            if (StaffPer == '' || StaffPer == undefined || StaffPer == null) { StaffPer = 0; }
            StaffAmt = Math.round(parseFloat(_grossamt) * parseFloat(StaffPer) / 100);
            $('table[id*=gvMultipleConcession] tr').filter(':eq(' + CurrentRowIndex + ')').find("[id*=txtAmount]").val(StaffAmt);
        }
        if (MultiDimVal == 5) {
            EbPer = $('table[id*=gvMultipleConcession] tr').filter(':eq(' + CurrentRowIndex + ')').find("[id*=txtPersentage]").val();
            if (EbPer == '' || EbPer == undefined || EbPer == null) { EbPer = 0; }
            EbAmt = Math.round(parseFloat(_grossamt) * parseFloat(EbPer) / 100);
            $('table[id*=gvMultipleConcession] tr').filter(':eq(' + CurrentRowIndex + ')').find("[id*=txtAmount]").val(EbAmt);
        }
        if (MultiDimVal == 6) {
            CncsRulePer = $('table[id*=gvMultipleConcession] tr').filter(':eq(' + CurrentRowIndex + ')').find("[id*=txtPersentage]").val();
            if (CncsRulePer == '' || CncsRulePer == undefined || CncsRulePer == null) { CncsRulePer = 0; }
            CncsRuleAmt = Math.round(parseFloat(_grossamt) * parseFloat(CncsRulePer) / 100);
            $('table[id*=gvMultipleConcession] tr').filter(':eq(' + CurrentRowIndex + ')').find("[id*=txtAmount]").val(CncsRuleAmt);
        }
        if (MultiDimVal == 7) {
            PharPer = $('table[id*=gvMultipleConcession] tr').filter(':eq(' + CurrentRowIndex + ')').find("[id*=txtPersentage]").val();
            if (PharPer == '' || PharPer == undefined || PharPer == null) { PharPer = 0; }
            PharAmt = Math.round(parseFloat(_grossamt) * parseFloat(PharPer) / 100);
            $('table[id*=gvMultipleConcession] tr').filter(':eq(' + CurrentRowIndex + ')').find("[id*=txtAmount]").val(PharAmt);
        }
    }
    AssignDiscValues();
}
/* assign amount in individual Disc per and disc amount textboxes */
function AssignDiscValues() {
    var CashPer = 0, HCPer = 0, MngtPer = 0, StaffPer = 0, EbPer = 0, CncsRulePer = 0, PharPer = 0;
    var CashAmt = 0, HCAmt = 0, MngtAmt = 0, StaffAmt = 0, EbAmt = 0, CncsRuleAmt = 0, PharAmt = 0;
    var TotalDiscAmt = 0, TotalDiscPer = 0;
    $("table[id*=gvMultipleConcession] tr:has(td)").each(function (i, j) {
        var MultiDimVal = $(this).closest('tr').find("[id*=ddlMultiDiscounttype]").val();
        if (MultiDimVal == 1) {
            CashPer = $(this).closest('tr').find("[id*=txtPersentage]").val();
            CashAmt = $(this).closest('tr').find("[id*=txtAmount]").val();
            if (CashPer == '' || CashPer == undefined || CashPer == null || CashPer == NaN) { CashPer = 0; }
            if (CashAmt == '' || CashAmt == undefined || CashAmt == null || CashAmt == NaN) { CashAmt = 0; }
        }
        if (MultiDimVal == 2) {
            HCPer = $(this).closest('tr').find("[id*=txtPersentage]").val();
            HCAmt = $(this).closest('tr').find("[id*=txtAmount]").val();
            if (HCPer == '' || HCPer == undefined || HCPer == null || HCPer == NaN) { HCPer = 0; }
            if (HCAmt == '' || HCAmt == undefined || HCAmt == null || HCAmt == NaN) { HCAmt = 0; }
        }
        if (MultiDimVal == 3) {
            MngtPer = $(this).closest('tr').find("[id*=txtPersentage]").val();
            MngtAmt = $(this).closest('tr').find("[id*=txtAmount]").val();
            if (MngtPer == '' || MngtPer == undefined || MngtPer == null || MngtPer == NaN) { MngtPer = 0; }
            if (MngtAmt == '' || MngtAmt == undefined || MngtAmt == null || MngtAmt == NaN) { MngtAmt = 0; }
        }
        if (MultiDimVal == 4) {
            StaffPer = $(this).closest('tr').find("[id*=txtPersentage]").val();
            StaffAmt = $(this).closest('tr').find("[id*=txtAmount]").val();
            if (StaffPer == '' || StaffPer == undefined || StaffPer == null || StaffPer == NaN) { StaffPer = 0; }
            if (StaffAmt == '' || StaffAmt == undefined || StaffAmt == null || StaffAmt == NaN) { StaffAmt = 0; }
        }
        if (MultiDimVal == 5) {
            EbPer = $(this).closest('tr').find("[id*=txtPersentage]").val();
            EbAmt = $(this).closest('tr').find("[id*=txtAmount]").val();
            if (EbPer == '' || EbPer == undefined || EbPer == null || EbPer == NaN) { EbPer = 0; }
            if (EbAmt == '' || EbAmt == undefined || EbAmt == null || EbAmt == NaN) { EbAmt = 0; }
        }
        if (MultiDimVal == 6) {
            CncsRulePer = $(this).closest('tr').find("[id*=txtPersentage]").val();
            CncsRuleAmt = $(this).closest('tr').find("[id*=txtAmount]").val();
            if (CncsRulePer == '' || CncsRulePer == undefined || CncsRulePer == null || CncsRulePer == NaN) { CncsRulePer = 0; }
            if (CncsRuleAmt == '' || CncsRuleAmt == undefined || CncsRuleAmt == null || CncsRuleAmt == NaN) { CncsRuleAmt = 0; }
        }
        if (MultiDimVal == 7) {
            PharPer = $(this).closest('tr').find("[id*=txtPersentage]").val();
            PharAmt = $(this).closest('tr').find("[id*=txtAmount]").val();
            if (PharPer == '' || PharPer == undefined || PharPer == null || PharPer == NaN) { PharPer = 0; }
            if (PharAmt == '' || PharAmt == undefined || PharAmt == null || PharAmt == NaN) { PharAmt = 0; }
        }
        TotalDiscAmt = parseFloat(CashAmt) + parseFloat(HCAmt) + parseFloat(MngtAmt) + parseFloat(StaffAmt) + parseFloat(EbAmt) + parseFloat(CncsRuleAmt) + parseFloat(PharAmt);
        TotalDiscPer = parseFloat(CashPer) + parseFloat(HCPer) + parseFloat(MngtPer) + parseFloat(StaffPer) + parseFloat(EbPer) + parseFloat(CncsRulePer) + parseFloat(PharPer);

    });
    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatgrossamt').value = setProperDecimalsCorpPer(TotalDiscAmt);
    var grossamt=document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatgross').value;
    var TotalDiscPer= parseFloat(TotalDiscAmt)*100/parseFloat(grossamt);
    TotalDiscPer=TotalDiscPer||0;
    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatdis').value = setProperDecimalsCorpPer(TotalDiscPer);
    CalculateConcession('Cash');
    OnDiscAuthColorCode();
}
/* color changing for textboxs of Discount auth and Due auth. Pat */
function OnDiscAuthColorCode() {
    var distype = document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlDiscountType').value;
    var chkmulti = document.getElementById('' + ctrlcom + '_ReceiptControl2_chkismultiple').checked;
    var dueamt = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatdue').value;
    var _chkValidation = true;
    var _ctrls = new Array();
    if (distype != 0 && chkmulti == false) {
        _ctrls[0] = 'ctl00_ContentPlaceHolder1_ReceiptControl2_ucdueauth_txtSearchControl';
    }
    if (dueamt == '' || dueamt == undefined || dueamt == null) { dueamt = 0; }
    if (dueamt > 0) {
        _ctrls[1] = 'ctl00_ContentPlaceHolder1_ReceiptControl2_Search3_txtSearchControl';
    }
    for (var i = 0; i < _ctrls.length; i++) {
        var ctrl = document.getElementById(_ctrls[i]);
        if (OnNullValue(ctrl) == false) {
            _chkValidation = false;
        }
        else {
            onRedColors();
        }
    }
    return _chkValidation;
}
/* validations for color changing for Discount auth and Due auth. Pat textboxs */
function onRedColors() {
    var dueamt = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatdue').value;
    if (dueamt == '' || dueamt == 'NaN' || dueamt == undefined || dueamt == null) { dueamt = '0'; }
    if (parseFloat(dueamt) == 0) {
        document.getElementById('' + ctrlcom + '_ReceiptControl2_Search3_txtSearchControl').className = 'grey';
    } else {
        document.getElementById('' + ctrlcom + '_ReceiptControl2_Search3_txtSearchControl').disabled = false;
        document.getElementById('lk_btn_ctl00_ContentPlaceHolder1_ReceiptControl2_Search3').disabled = false;
        var form_name = document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnDocName').value;
        var assest = '';
        if (form_name == 'OP') {
            assest = document.getElementById('' + ctrlcom + '_ChkAssesment').checked;
        }
        else if (form_name == 'Cons') {
            assest = document.getElementById('' + ctrlcom + '_ChkAssesment').checked;
        }
        else if (form_name == 'OPQUICK') {
            assest = document.getElementById('' + ctrlcom + '_ChkAssesment').checked;
        }
        else {
            assest = false;
        }
        if (assest == true) {
            document.getElementById('' + ctrlcom + '_ReceiptControl2_Search3_txtSearchControl').className = 'grey';
        }
        else {
            document.getElementById('' + ctrlcom + '_ReceiptControl2_Search3_txtSearchControl').className = 'red';
        }
    }
    var _concesamt = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatgrossamt').value;
    var _concesper = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatdis').value;
    if (parseFloat(_concesamt) > 0) {
        document.getElementById('' + ctrlcom + '_ReceiptControl2_ucdueauth_txtSearchControl').disabled = false;
        document.getElementById('lk_btn_ctl00_ContentPlaceHolder1_ReceiptControl2_ucdueauth').disabled = false;
        if (parseFloat(_concesper) <=100) {
            document.getElementById('' + ctrlcom + '_ReceiptControl2_ucdueauth_txtSearchControl').className = 'red';
        }
        else {
            document.getElementById('' + ctrlcom + '_ReceiptControl2_ucdueauth_txtSearchControl').disabled = true;
            document.getElementById('lk_btn_ctl00_ContentPlaceHolder1_ReceiptControl2_ucdueauth').disabled = true;
            document.getElementById('' + ctrlcom + '_ReceiptControl2_ucdueauth_txtSearchControl').className = 'grey';
        }
    }
    else {
        document.getElementById('' + ctrlcom + '_ReceiptControl2_ucdueauth_txtSearchControl').disabled = true;
        document.getElementById('lk_btn_ctl00_ContentPlaceHolder1_ReceiptControl2_ucdueauth').disabled = true;
        document.getElementById('' + ctrlcom + '_ReceiptControl2_ucdueauth_txtSearchControl').className = 'grey';
    }
}
/* Individual cash discount percentage calculations */
function PatCalculateConcessionTransactionPerCentage(obj, val) {

    if (obj.value == "") { $(obj).val(0); }
    var form_name = document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnDocName').value;
    TestCondition(val, obj);
    var grossamt = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtgrosstotal');
    if (document.getElementById('' + ctrlcom + '_ReceiptControl2_txtgrosstotal').value == "0") {
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatdis').value = 0;
        return false
    }
    var discamt = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatgrossamt');
    var CurDisPer = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatdis');
    if (getParameterByName("MODE") != "VIEW" || getParameterByName("MODE") != "VIEW_OP") {
        CurDisPer.value = typeof CurDisPer.value == "string" ? (CurDisPer.value.trim() == "" ? "" : CurDisPer.value) : (typeof CurDisPer.value == "number" ? CurDisPer.value : "0");
        if (CurDisPer.value > 100) {
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatdis').value = 100;
        }
        else {
            var PatGrossAmt = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatgross').value;
            if (PatGrossAmt == undefined || PatGrossAmt == '' || PatGrossAmt == null || PatGrossAmt == "NaN") { PatGrossAmt = 0; }
            if (document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnDocName').value == 'IPFINAL') {
                var AdvAmount = document.getElementById('' + ctrlcom + '_txtAdvance').value;
                if (AdvAmount == undefined || AdvAmount == '' || AdvAmount == null || AdvAmount == "NaN") { AdvAmount = "0"; }
                PatGrossAmt = setProperDecimalsVal(parseFloat(PatGrossAmt) - parseFloat(AdvAmount));
                if (parseFloat(PatGrossAmt) < 0) {
                    PatGrossAmt = 0;
                }
            }
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatNet').value = Math.round(PatGrossAmt);
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtTotalNet').value = Math.round(PatGrossAmt);
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatdue').value = Math.round(PatGrossAmt);
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtTotalDue').value = Math.round(PatGrossAmt);
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatientReceiptAmt').value = '0';
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtTotalReciptAmt').value = '0';
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtreceiptAmount').value = '0';
            ClearTransactionGrid();
        }
        if (CurDisPer.value > 100 || CurDisPer.value == 100) {
            document.getElementById('' + ctrlcom + '_ReceiptControl2_Search3_txtSearchControl').disabled = true;
        }
        else {
            document.getElementById('' + ctrlcom + '_ReceiptControl2_Search3_txtSearchControl').disabled = false;
        }
        if (val == 'Perecent') {
            CalculateDiscountPerCentage();
        }
        if (form_name == 'REG' || form_name == 'ER') {
            if (val == 'Perecent') {
                CalculateregDiscount();
            }
            else {
                CalculateregDiscountAmount();
            }
        }
        else if (form_name == 'OPQUICK' || form_name == 'Cons' || form_name == 'OP') {
            if (val == 'Perecent') {
                CalculateOPRegConc(val, obj);
            }
            else {
                CalculateAmountConc(obj, val);
            }
        }
        else if (form_name == 'IPFINAL') {
            CalculateConcession('Cash', val);
        }
        else if (form_name == 'SUPPBILL') {
            CalculateSupplementaryConcession('Cash');
        }
        else {
            CalculateAmountConc(obj, val);
        }
        onRedColors();


        /*Comment By Shiva -- Start*/

        /*document.getElementById('' + ctrlcom + '_ReceiptControl2_txtCurrAmt').value = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatdue').value;*/

        /*Comment By Shiva -- End*/


        /*newly added by naresh for any changes come to me*/
        var totalamount = ctl00_ContentPlaceHolder1_ReceiptControl2_txtpatdue.value;
        var exchangerate = ctl00_ContentPlaceHolder1_ReceiptControl2_txtExchangeRate.value;
        var amount = setProperDecimalsCorpPer(parseFloat(totalamount) / parseFloat(exchangerate));
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtreqamtkyd').value = amount;
    }
    if (localStorage.getItem("ED") != null && localStorage.getItem("ED") != undefined && localStorage.getItem("ED") != '') {
        OnExtendAmounts();
    }
}

/* Calculate Discount percentage amounts*/
function CalculateDiscountPerCentage() {
    var _docName = document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnDocName').value;
    var DisPer = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatdis').value;
    var TotalGrossAmt = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatgross').value;
    var ReceiptAmt = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtTotalReciptAmt').value;
    var CmpNetAmt = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtcmpNet').value;
    var CmpConcAmt = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpartygrossamt').value;
    /*var CurDue = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatgrossamt').value;
    var CurCmpDue = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpartygrossamt').value;*/
    if (CmpConcAmt == undefined || CmpConcAmt == '' || CmpConcAmt == null || CmpConcAmt == "NaN") { CmpConcAmt = 0; }
    if (ReceiptAmt == undefined || ReceiptAmt == '' || ReceiptAmt == null || ReceiptAmt == "NaN") { ReceiptAmt = 0; }
    if (CmpNetAmt == undefined || CmpNetAmt == '' || CmpNetAmt == null || CmpNetAmt == "NaN") { CmpNetAmt = 0; }
    if (CmpNetAmt == undefined || CmpNetAmt == '' || CmpNetAmt == null || CmpNetAmt == "NaN") { CmpNetAmt = 0; }
    /*if (CurDue == undefined || CurDue == '' || CurDue == null || CurDue == "NaN") { CurDue = 0; }
    if (CurCmpDue == undefined || CurCmpDue == '' || CurCmpDue == null || CurCmpDue == "NaN") { CurCmpDue = 0; }*/
    if (DisPer == undefined || DisPer == '' || DisPer == null || DisPer.trim() == '.' || DisPer == "NaN") { DisPer = 0; }
    var TotConCamt = Math.round(((parseFloat(TotalGrossAmt) * DisPer) / 100));
    if (document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnDocName').value == 'IPFINAL') { }
    else {
        TotConCamt = TotConCamt, _docName;
    }

    if (DisPer == 0) {
        if (document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatdis').value.trim() == '.')
        { }
        else {
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatdis').value = 0;
        }
        document.getElementById('' + ctrlcom + '_ReceiptControl2_ucdueauth_txtSearchControl').className = 'grey';
    }
    else {
        document.getElementById('' + ctrlcom + '_ReceiptControl2_ucdueauth_txtSearchControl').className = 'red';
    }
    if (parseFloat(DisPer) > 100) {
        $(".stoast").toastText("warning", "System Should Not Allow More Than 100%.", 5, 2);
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatdis').value = 100;
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatdis').value = setProperDecimalsCorpPer(TotalGrossAmt);

    }
    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatgrossamt').value = TotConCamt, _docName;
    var IndConcAmt = parseFloat(TotalGrossAmt) - parseFloat(TotConCamt);
    var TotalConcession = parseFloat(CmpConcAmt) + parseFloat(IndConcAmt);

    var NetAmt = setProperDecimalsCorpPer(IndConcAmt);
    var CurDue = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatgrossamt').value;
    var CurCmpDue = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpartygrossamt').value;
    if (CurDue == undefined || CurDue == '' || CurDue == null || CurDue == "NaN") { CurDue = 0; }
    if (CurCmpDue == undefined || CurCmpDue == '' || CurCmpDue == null || CurCmpDue == "NaN") { CurCmpDue = 0; }

    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatNet').value = setProperDecimalsAll(NetAmt, _docName);
    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtTotalNet').value = setProperDecimalsAll((parseFloat(NetAmt) + parseFloat(CmpNetAmt)), _docName);

    /*document.getElementById('' + ctrlcom + '_ReceiptControl2_txtCurrAmt').value = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatNet').value;*/

    /*New ly Added By naresh for any changes come to me*/
    var totalamount = NetAmt;
    var exchangerate = ctl00_ContentPlaceHolder1_ReceiptControl2_txtExchangeRate.value;
    var amount = setProperDecimalsCorpPer(parseFloat(totalamount) / parseFloat(exchangerate));
    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtreqamtkyd').value = amount;
    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtTotalDue').value = setProperDecimalsAll((parseFloat(NetAmt) + parseFloat(CmpNetAmt)), _docName);
    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatdue').value = setProperDecimalsAll(NetAmt, _docName);
    document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnDueAmt').value = setProperDecimalsAll(NetAmt, _docName);
    document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnNetAmt').value = setProperDecimalsAll(NetAmt, _docName);
    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtgrossamttotal').value = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatgrossamt').value;
    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtgrossamttotal').value = setProperDecimalsAll((parseFloat(CurDue) + parseFloat(CurCmpDue)), _docName);
    if (document.getElementById('' + ctrlcom + '_ReceiptControl2_chkismultiple').checked == false) {
        document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnRegConcAmt').value = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatgrossamt').value;
    }
}

/* Remove multiple discount grid rows*/
function RemoveMultipleDiscounts(obj) {
    var index = 1;
    var Type = '';
    var RowIndex = obj.parentElement.parentElement.rowIndex;
    var grid = document.getElementById('' + ctrlcom + '_ReceiptControl2_gvMultipleConcession');
    var glen = grid.rows.length - 1;
    Type = $('[id$=gvMultipleConcession] tr').filter(':eq(' + RowIndex + ')').find('[id*=ddlMultiDiscounttype]').val();
    CurrentRowIndexNew = RowIndex;
    if (Type == 2) {
        var SELECTED_ID = $('table[id*=gvMultipleConcession] tr').filter(':eq(' + CurrentRowIndexNew + ')').find("input[type=hidden][id*=hdncardid]").val();
    }
    if (Type == 5) {
        var SELECTED_ID = $('table[id*=gvMultipleConcession] tr').filter(':eq(' + CurrentRowIndexNew + ')').find("input[type=hidden][id*=hdneventid]").val();
    }
    if (Type == 6) {
        var SELECTED_ID = $('table[id*=gvMultipleConcession] tr').filter(':eq(' + CurrentRowIndexNew + ')').find("input[type=hidden][id*=hdnRuleid]").val();
    }
    if(Type==1)
    {
     $("table[id*=UCServices_gv_services_header] tr:has(td)").each(function (e) {
        var index=$(this)[0].rowIndex;
 
        $('[id$=UCServices_gv_services_header] tr').filter(':eq(' + index + ')').find('[id*=ddSType]').attr('disabled', false);
        $('[id$=UCServices_gv_services_header] tr').filter(':eq(' + index + ')').find('input[type=text][id*=txtServiceName]').attr('disabled', false);
        $('[id$=UCServices_gv_services_header] tr').filter(':eq(' + index + ')').find('input[type=text][id*=txtServiceCode]').attr('disabled', false);
        $('[id$=UCServices_gv_services_header] tr').filter(':eq(' + index + ')').find('input[type=button][id*=BtnSrvSearch]').attr('disabled', false);
        });
        $("table[id*=gvServices] tr:has(td)").each(function (e) {
        var index=$(this)[0].rowIndex;
        $('[id$=gvServices] tr').filter(':eq(' + index + ')').find('[id*=ddSType]').attr('disabled', false);
         $('.su-star-empty')[0].style.display='block';
        });
        }

    CurrentRowIndexNew = RowIndex;
    if (document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnDocName').value == 'IPFINAL' || document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnDocName').value == 'REG') {
        onDeleteMultiDiscRow(CurrentRowIndexNew, Type, RowIndex, glen);
    }
    else {
        RemoveMultiGrid(obj);
    }
}
/* Removing multiple discount grid row related to IP Final Bill Form */
function onDeleteMultiDiscRow(CurrentRowIndexNew, Type, RowIndex, glen) {
    if (confirm('Do you want to Remove the record?')) {
        $("table[id$=gvMultipleConcession] tr").filter(":eq(" + RowIndex + ")").find('[id*=txtPersentage]').val(0);
        $("table[id$=gvMultipleConcession] tr").filter(":eq(" + RowIndex + ")").find('[id*=txtAmount]').val(0);
        $('[id$=gvMultipleConcession] tr').filter(':eq(' + RowIndex + ')').remove();
    }
    else { return false; }
    if (glen == 1) {
        $('[id$=gvMultipleConcession] tr').filter(':eq(' + RowIndex + ')').remove();
        if (document.getElementById('' + ctrlcom + '_ReceiptControl2_gvMultipleConcession').rows.length == 1) {
            fn_AddRowWithDetais();
            
        }
         if(document.getElementById('' + ctrlcom + '_ReceiptControl2_gvMultipleConcession').rows.length==2)
    { 
    document.getElementById('' + ctrlcom + '_ReceiptControl2_chkismultiple').disabled=false;
    }
    }
    AssignDiscValues();
    AssignSno1(index);
    return false;
}

var CurrentPoperSelectedValue = '';
/* Removing of multiple discount grid row for op (use of services posting user control)*/
function RemoveMultiGrid(obj) {
    var index = 1;
    var Type = '';
    var docname = $('#ctl00_ContentPlaceHolder1_ucReferal_hdndocname').val();
    var RowIndex = obj.parentElement.parentElement.rowIndex;
    var grid = document.getElementById('' + ctrlcom + '_ReceiptControl2_gvMultipleConcession');
    var glen = grid.rows.length - 1;
    Type = $('[id$=gvMultipleConcession] tr').filter(':eq(' + RowIndex + ')').find('[id*=ddlMultiDiscounttype]').val();
    CurrentRowIndexNew = RowIndex;
    if (Type == 2) {
        var SELECTED_ID = $('table[id*=gvMultipleConcession] tr').filter(':eq(' + CurrentRowIndexNew + ')').find("input[type=hidden][id*=hdncardid]").val();
    }
    if (Type == 5) {
        var SELECTED_ID = $('table[id*=gvMultipleConcession] tr').filter(':eq(' + CurrentRowIndexNew + ')').find("input[type=hidden][id*=hdneventid]").val();
    }
    if (Type == 6) {
        var SELECTED_ID = $('table[id*=gvMultipleConcession] tr').filter(':eq(' + CurrentRowIndexNew + ')').find("input[type=hidden][id*=hdnRuleid]").val();
    }
    CurrentRowIndexNew = RowIndex;
    if (confirm('Do you want to Remove the record?')) {
        if (Type == 1 || Type == 3 || Type == 4) {
            if (glen == 1) {

                if (Type == 1) {
                    $("table[id$=gvMultipleConcession] tr").filter(":eq(" + RowIndex + ")").find('[id*=txtPersentage]').val(0);
                    $("table[id$=gvMultipleConcession] tr").filter(":eq(" + RowIndex + ")").find('[id*=txtAmount]').val(0);
                    $("table[id*=gvServices] tr:has(td)").each(function (e) {
                        if ($(this).closest('tr').find("input[type=hidden][id*=hdnServiceID]").val() > 0 && parseFloat($(this).closest('tr').find("[id*=txtAmount]").val()) > 0 && $(this).closest('tr').find("input[type=hidden][id*=hdnClass_Srv_ID]").val() == 0) {
                            $(this).closest("tr").find("[id*=txtDiscP]").attr("disabled", true);
                            $(this).closest("tr").find("[id*=txtDiscAmt]").attr("disabled", true);
                            var txtDiscAmt = $(this).closest("tr").find("[id*=txtPamt]").val();
                            txtDiscAmt = typeof txtDiscAmt == 'string' ? (typeof txtDiscAmt == 'undefined' || txtDiscAmt.trim() == '' ? 0 : parseFloat(txtDiscAmt)) : (typeof txtDiscAmt == 'object' ? 0 : parseFloat(txtDiscAmt));
                            $(this).closest("tr").find("[id*=txtPNAmt]").val(txtDiscAmt);
                            $(this).closest("tr").find("[id*=txtDiscP]").val('0');
                            $(this).closest("tr").find("[id*=txtDiscAmt]").val('0');
                        }
                    });
                    HideDiscountColumns(CurrentRowIndexNew);
                    if ($("table[id$=gvMultipleConcession] tr").filter(":eq(" + RowIndex + ")").find('[id*=txtPersentage]').val() == 0) {
                        if (document.getElementById('' + ctrlcom + '_ReceiptControl2_gvMultipleConcession').rows.length > 2) {
                            $('[id$=gvMultipleConcession] tr').filter(':eq(' + RowIndex + ')').remove();
                        }
                        if (glen == 1) {
                            $('[id$=gvMultipleConcession] tr').filter(':eq(' + RowIndex + ')').remove();
                            if (document.getElementById('' + ctrlcom + '_ReceiptControl2_gvMultipleConcession').rows.length == 1) {
                                fn_AddRowWithDetais();
                            }
                        }
                    }
                    CalculateGridAmt(0);
                }
                if (Type == 3) {
                    $("table[id$=gvMultipleConcession] tr").filter(":eq(" + RowIndex + ")").find('[id*=txtPersentage]').val(0);
                    $("table[id$=gvMultipleConcession] tr").filter(":eq(" + RowIndex + ")").find('[id*=txtAmount]').val(0);
                    $("table[id*=gvServices] tr:has(td)").each(function (e) {
                        if ($(this).closest('tr').find("input[type=hidden][id*=hdnServiceID]").val() > 0 && parseFloat($(this).closest('tr').find("[id*=txtAmount]").val()) > 0 && $(this).closest('tr').find("input[type=hidden][id*=hdnClass_Srv_ID]").val() == 0) {
                            $(this).closest("tr").find("[id*=txtmaPer]")[0].disabled = true;
                            $(this).closest("tr").find("[id*=txtmgAmt]")[0].disabled = true;
                            var txtDiscAmt = $(this).closest("tr").find("[id*=txtmgAmt]").val();
                            txtDiscAmt = typeof txtDiscAmt == 'string' ? (typeof txtDiscAmt == 'undefined' || txtDiscAmt.trim() == '' ? 0 : parseFloat(txtDiscAmt)) : (typeof txtDiscAmt == 'object' ? 0 : parseFloat(txtDiscAmt));
                            //$(this).closest("tr").find("[id*=txtPNAmt]").val(parseFloat($(this).closest("tr").find("[id*=txtPNAmt]").val()) + txtDiscAmt);
                            $(this).closest("tr").find("[id*=txtmaPer]").val('0');
                            $(this).closest("tr").find("[id*=txtmgAmt]").val('0');
                        }
                    });
                    HideDiscountColumns(CurrentRowIndexNew);
                    if ($("table[id$=gvMultipleConcession] tr").filter(":eq(" + RowIndex + ")").find('[id*=txtPersentage]').val() == 0) {
                        if (document.getElementById('' + ctrlcom + '_ReceiptControl2_gvMultipleConcession').rows.length > 2) {
                            $('[id$=gvMultipleConcession] tr').filter(':eq(' + RowIndex + ')').remove();
                        }
                        if (glen == 1) {
                            $('[id$=gvMultipleConcession] tr').filter(':eq(' + RowIndex + ')').remove();
                            if (document.getElementById('' + ctrlcom + '_ReceiptControl2_gvMultipleConcession').rows.length == 1) {
                                fn_AddRowWithDetais();
                            }
                        }
                    }
                    CalculateGridAmt(0);
                }
                if (Type == 4) {
                    $("table[id$=gvMultipleConcession] tr").filter(":eq(" + RowIndex + ")").find('[id*=txtPersentage]').val(0);
                    $("table[id$=gvMultipleConcession] tr").filter(":eq(" + RowIndex + ")").find('[id*=txtAmount]').val(0);
                    $("table[id*=gvServices] tr:has(td)").each(function (e) {
                        if ($(this).closest('tr').find("input[type=hidden][id*=hdnServiceID]").val() > 0 && parseFloat($(this).closest('tr').find("[id*=txtAmount]").val()) > 0 && $(this).closest('tr').find("input[type=hidden][id*=hdnClass_Srv_ID]").val() == 0) {
                            $(this).closest("tr").find("[id*=txtstPer]")[0].disabled = true;
                            $(this).closest("tr").find("[id*=txtstAmt]")[0].disabled = true;
                            var txtDiscAmt = $(this).closest("tr").find("[id*=txtstAmt]").val();
                            txtDiscAmt = typeof txtDiscAmt == 'string' ? (typeof txtDiscAmt == 'undefined' || txtDiscAmt.trim() == '' ? 0 : parseFloat(txtDiscAmt)) : (typeof txtDiscAmt == 'object' ? 0 : parseFloat(txtDiscAmt));
                           // $(this).closest("tr").find("[id*=txtPNAmt]").val(parseFloat($(this).closest("tr").find("[id*=txtPNAmt]").val()) + txtDiscAmt);
                            $(this).closest("tr").find("[id*=txtstPer]").val('0');
                            $(this).closest("tr").find("[id*=txtstAmt]").val('0');
                        }
                    });
                    HideDiscountColumns(CurrentRowIndexNew);
                    if ($("table[id$=gvMultipleConcession] tr").filter(":eq(" + RowIndex + ")").find('[id*=txtPersentage]').val() == 0) {
                        if (document.getElementById('' + ctrlcom + '_ReceiptControl2_gvMultipleConcession').rows.length > 2) {
                            $('[id$=gvMultipleConcession] tr').filter(':eq(' + RowIndex + ')').remove();
                        }
                        if (glen == 1) {
                            $('[id$=gvMultipleConcession] tr').filter(':eq(' + RowIndex + ')').remove();
                            if (document.getElementById('' + ctrlcom + '_ReceiptControl2_gvMultipleConcession').rows.length == 1) {
                                fn_AddRowWithDetais();
                            }
                        }
                    }
                    CalculateGridAmt(0);
                }
                if (RowIndex == 1) {
                    var CurAmt = $('[id$=gvMultipleConcession] tr').filter(':eq(' + RowIndex + ')').find('[id*=txtAmount]').val();
                    CurAmt = typeof CurAmt == 'string' ? (typeof CurAmt == 'undefined' || CurAmt.trim() == '' ? 0 : parseFloat(CurAmt)) : (typeof CurAmt == 'object' ? 0 : parseFloat(CurAmt));
                    if (CurAmt != '0') {
                        $("table[id$=gvMultipleConcession] tr").filter(":eq(" + RowIndex + ")").find('[id*=txtPersentage]').val(0);
                        $("table[id$=gvMultipleConcession] tr").filter(":eq(" + RowIndex + ")").find('[id*=txtAmount]').val(0);
                        $("table[id$=gvMultipleConcession] tr").filter(":eq(" + RowIndex + ")").find('[id*=txtcardno]').val(0);
                        $("table[id$=gvMultipleConcession] tr").filter(":eq(" + RowIndex + ")").find('[id*=txtcardno]')[0].disabled = false;
                        $("table[id$=gvMultipleConcession] tr").filter(":eq(" + RowIndex + ")").find('[id*=BtnSrvSearch]')[0].disabled = false;
                        $("table[id$=gvMultipleConcession] tr").filter(":eq(" + RowIndex + ")").find('[id*=txtAutherizedPersion]')[0].disabled = false;
                        BindData('Delete', Type, SELECTED_ID);
                        if ($("table[id$=gvMultipleConcession] tr").filter(":eq(" + RowIndex + ")").find('[id*=txtPersentage]').val() == 0) {
                            $('[id$=gvMultipleConcession] tr').filter(':eq(' + RowIndex + ')').remove();
                        }
                    }
                }
                else {
                    var val = $('[id$=gvMultipleConcession] tr').filter(':eq(' + RowIndex + ')').find('[id*=ddlMultiDiscounttype]').val();
                    var CurentRowPer = $('[id$=gvMultipleConcession] tr').filter(':eq(' + RowIndex + ')').find('[id*=txtPersentage]').val();
                    var CurentRowAmt = $('[id$=gvMultipleConcession] tr').filter(':eq(' + RowIndex + ')').find('[id*=txtPersentage]').val();
                    CurrentRowIndexNew = RowIndex;
                    CurentRowPer = CurentRowPer == '' ? 0 : CurentRowPer;
                    CurentRowAmt = CurentRowAmt == '' ? 0 : parseFloat(CurentRowAmt);
                    BindData('Delete', Type, SELECTED_ID);
                    $('[id$=gvMultipleConcession] tr').filter(':eq(' + RowIndex + ')').remove();
                }
            }
            else {
                if (Type == 1) {
                    $("table[id$=gvMultipleConcession] tr").filter(":eq(" + RowIndex + ")").find('[id*=txtPersentage]').val(0);
                    $("table[id$=gvMultipleConcession] tr").filter(":eq(" + RowIndex + ")").find('[id*=txtAmount]').val(0);
                    $("table[id*=gvServices] tr:has(td)").each(function (e) {
                        if ($(this).closest('tr').find("input[type=hidden][id*=hdnServiceID]").val() > 0 && parseFloat($(this).closest('tr').find("[id*=txtAmount]").val()) > 0 && $(this).closest('tr').find("input[type=hidden][id*=hdnClass_Srv_ID]").val() == 0) {
                            $(this).closest("tr").find("[id*=txtDiscP]").attr("disabled", true);
                            $(this).closest("tr").find("[id*=txtDiscAmt]").attr("disabled", true);
                            var txtDiscAmt = $(this).closest("tr").find("[id*=txtPamt]").val();
                            txtDiscAmt = typeof txtDiscAmt == 'string' ? (typeof txtDiscAmt == 'undefined' || txtDiscAmt.trim() == '' ? 0 : parseFloat(txtDiscAmt)) : (typeof txtDiscAmt == 'object' ? 0 : parseFloat(txtDiscAmt));
                            $(this).closest("tr").find("[id*=txtPNAmt]").val(txtDiscAmt);
                            $(this).closest("tr").find("[id*=txtDiscP]").val('0');
                            $(this).closest("tr").find("[id*=txtDiscAmt]").val('0');
                        }
                    });
                    if ($("table[id$=gvMultipleConcession] tr").filter(":eq(" + RowIndex + ")").find('[id*=txtPersentage]').val() == 0) {
                        HideDiscountColumns(CurrentRowIndexNew);
                        $('[id$=gvMultipleConcession] tr').filter(':eq(' + RowIndex + ')').remove();
                    }
                    CalculateGridAmt(0);
                }
                if (Type == 3) {
                    $("table[id$=gvMultipleConcession] tr").filter(":eq(" + RowIndex + ")").find('[id*=txtPersentage]').val(0);
                    $("table[id$=gvMultipleConcession] tr").filter(":eq(" + RowIndex + ")").find('[id*=txtAmount]').val(0);
                    $("table[id*=gvServices] tr:has(td)").each(function (e) {
                        if ($(this).closest('tr').find("input[type=hidden][id*=hdnServiceID]").val() > 0 && parseFloat($(this).closest('tr').find("[id*=txtAmount]").val()) > 0 && $(this).closest('tr').find("input[type=hidden][id*=hdnClass_Srv_ID]").val() == 0) {
                            $(this).closest("tr").find("[id*=txtmaPer]")[0].disabled = true;
                            $(this).closest("tr").find("[id*=txtmgAmt]")[0].disabled = true;
                            var txtDiscAmt = $(this).closest("tr").find("[id*=txtmgAmt]").val();
                            txtDiscAmt = typeof txtDiscAmt == 'string' ? (typeof txtDiscAmt == 'undefined' || txtDiscAmt.trim() == '' ? 0 : parseFloat(txtDiscAmt)) : (typeof txtDiscAmt == 'object' ? 0 : parseFloat(txtDiscAmt));
                            //$(this).closest("tr").find("[id*=txtPNAmt]").val(parseFloat($(this).closest("tr").find("[id*=txtPNAmt]").val()) + txtDiscAmt);
                            $(this).closest("tr").find("[id*=txtmaPer]").val('0');
                            $(this).closest("tr").find("[id*=txtmgAmt]").val('0');
                        }
                    });
                    if ($("table[id$=gvMultipleConcession] tr").filter(":eq(" + RowIndex + ")").find('[id*=txtPersentage]').val() == 0) {
                        HideDiscountColumns(CurrentRowIndexNew);
                        $('[id$=gvMultipleConcession] tr').filter(':eq(' + RowIndex + ')').remove();
                    }
                    CalculateGridAmt(0);
                }
                if (Type == 4) {
                    $("table[id$=gvMultipleConcession] tr").filter(":eq(" + RowIndex + ")").find('[id*=txtPersentage]').val(0);
                    $("table[id$=gvMultipleConcession] tr").filter(":eq(" + RowIndex + ")").find('[id*=txtAmount]').val(0);
                    $("table[id*=gvServices] tr:has(td)").each(function (e) {
                        if ($(this).closest('tr').find("input[type=hidden][id*=hdnServiceID]").val() > 0 && parseFloat($(this).closest('tr').find("[id*=txtAmount]").val()) > 0 && $(this).closest('tr').find("input[type=hidden][id*=hdnClass_Srv_ID]").val() == 0) {
                            $(this).closest("tr").find("[id*=txtstPer]")[0].disabled = true;
                            $(this).closest("tr").find("[id*=txtstAmt]")[0].disabled = true;
                            var txtDiscAmt = $(this).closest("tr").find("[id*=txtstAmt]").val();
                            txtDiscAmt = typeof txtDiscAmt == 'string' ? (typeof txtDiscAmt == 'undefined' || txtDiscAmt.trim() == '' ? 0 : parseFloat(txtDiscAmt)) : (typeof txtDiscAmt == 'object' ? 0 : parseFloat(txtDiscAmt));
                            //$(this).closest("tr").find("[id*=txtPNAmt]").val(parseFloat($(this).closest("tr").find("[id*=txtPNAmt]").val()) + txtDiscAmt);
                            $(this).closest("tr").find("[id*=txtstPer]").val('0');
                            $(this).closest("tr").find("[id*=txtstAmt]").val('0');
                        }
                    });

                    if ($("table[id$=gvMultipleConcession] tr").filter(":eq(" + RowIndex + ")").find('[id*=txtPersentage]').val() == 0) {
                        HideDiscountColumns(CurrentRowIndexNew);
                        $('[id$=gvMultipleConcession] tr').filter(':eq(' + RowIndex + ')').remove();
                    }
                    CalculateGridAmt(0);
                }
            }


            $("table[id*=gvMultipleConcession] tr:has(td)").each(function (e) {
                    var DiscountIdValue = $(this).closest('tr').find("[id*=ddlMultiDiscounttype]").val();
                    DiscountIdValue = DiscountIdValue||0;
                    if (DiscountIdValue > 0) {
                    if( DiscountIdValue == 1 || DiscountIdValue == 3 || DiscountIdValue == 4)
                    {
                            $('[id$=UCServices_gv_services_header] tr').filter(':eq(' + 2 + ')').find('[id*=ddSType]').attr('disabled', true);
                            $('[id$=UCServices_gv_services_header] tr').filter(':eq(' + 2 + ')').find('input[type=text][id*=txtServiceName]').attr('disabled', true);
                            $('[id$=UCServices_gv_services_header] tr').filter(':eq(' + 2 + ')').find('input[type=text][id*=txtServiceCode]').attr('disabled', true);
                            $('[id$=UCServices_gv_services_header] tr').filter(':eq(' + 2 + ')').find('input[type=button][id*=BtnSrvSearch]').attr('disabled', true);

                            $("table[id*=gvServices] tr:has(td)").each(function (e) {
                            var index=$(this)[0].rowIndex;
                            $('[id$=gvServices] tr').filter(':eq(' + index + ')').find('[id*=ddSType]').attr('disabled', true);
                            });
                            $('.su-star-empty')[0].style.display='block';
                    }
                    if( DiscountIdValue == 2 || DiscountIdValue == 5 || DiscountIdValue == 6)
                    {
                            $('[id$=UCServices_gv_services_header] tr').filter(':eq(' + 2 + ')').find('[id*=ddSType]').attr('disabled', false);
                            $('[id$=UCServices_gv_services_header] tr').filter(':eq(' + 2 + ')').find('input[type=text][id*=txtServiceName]').attr('disabled', false);
                            $('[id$=UCServices_gv_services_header] tr').filter(':eq(' + 2 + ')').find('input[type=text][id*=txtServiceCode]').attr('disabled', false);
                            $('[id$=UCServices_gv_services_header] tr').filter(':eq(' + 2 + ')').find('input[type=button][id*=BtnSrvSearch]').attr('disabled', false);

                            $("table[id*=gvServices] tr:has(td)").each(function (e) {
                            var index=$(this)[0].rowIndex;
                            $('[id$=gvServices] tr').filter(':eq(' + index + ')').find('[id*=ddSType]').attr('disabled', false);
                            });
                            $('.su-star-empty')[0].style.display='block';
                    }
                    }
                });
        }
        else {
            if (glen == 1) {
                var CurAmt = $('[id$=gvMultipleConcession] tr').filter(':eq(' + RowIndex + ')').find('[id*=txtAmount]').val();
                var CurPerc = $('[id$=gvMultipleConcession] tr').filter(':eq(' + RowIndex + ')').find('[id*=txtPersentage]').val();
                CurAmt = typeof CurAmt == 'string' ? (typeof CurAmt == 'undefined' || CurAmt.trim() == '' ? 0 : parseFloat(CurAmt)) : (typeof CurAmt == 'object' ? 0 : parseFloat(CurAmt));
                if ((CurPerc != '0' || CurPerc != '0') && docname == 'REG') {
                    $("table[id$=gvMultipleConcession] tr").filter(":eq(" + RowIndex + ")").remove();
                    OnMultipleDiscGrid();
                    $('[id*=Div2]').hide()
                }
                else if ((CurAmt != '0' || CurPerc != '0') && docname != 'REG') {
                    BindData('Delete', Type, SELECTED_ID);
                    $("table[id$=gvMultipleConcession] tr").filter(":eq(" + RowIndex + ")").remove();
                }
            }
            else {
                var val = $('[id$=gvMultipleConcession] tr').filter(':eq(' + RowIndex + ')').find('[id*=ddlMultiDiscounttype]').val();
                var CurentRowPer = $('[id$=gvMultipleConcession] tr').filter(':eq(' + RowIndex + ')').find('[id*=txtPersentage]').val();
                var CurentRowAmt = $('[id$=gvMultipleConcession] tr').filter(':eq(' + RowIndex + ')').find('[id*=txtPersentage]').val();
                CurrentRowIndexNew = RowIndex;
                CurentRowPer = CurentRowPer == '' ? 0 : CurentRowPer;
                CurentRowAmt = CurentRowAmt == '' ? 0 : parseFloat(CurentRowAmt);
                BindData('Delete', Type, SELECTED_ID);
                $('[id$=gvMultipleConcession] tr').filter(':eq(' + RowIndex + ')').remove();
            }
        }

        var grimullength=$("table[id*=gvMultipleConcession] tr:has(td)");
        if(grimullength==1)
        {
        $("table[id*=gvMultipleConcession] tr:has(td)").each(function (e) {
                    var DiscountIdValue = $(this).closest('tr').find("[id*=ddlMultiDiscounttype]").val();
                    DiscountIdValue = DiscountIdValue||0;
                    if (DiscountIdValue == 0) {
                   
                  
                            $('[id$=UCServices_gv_services_header] tr').filter(':eq(' + 2 + ')').find('[id*=ddSType]').attr('disabled', false);
                            $('[id$=UCServices_gv_services_header] tr').filter(':eq(' + 2 + ')').find('input[type=text][id*=txtServiceName]').attr('disabled', false);
                            $('[id$=UCServices_gv_services_header] tr').filter(':eq(' + 2 + ')').find('input[type=text][id*=txtServiceCode]').attr('disabled', false);
                            $('[id$=UCServices_gv_services_header] tr').filter(':eq(' + 2 + ')').find('input[type=button][id*=BtnSrvSearch]').attr('disabled', false);

                            $("table[id*=gvServices] tr:has(td)").each(function (e) {
                            var index=$(this)[0].rowIndex;
                            $('[id$=gvServices] tr').filter(':eq(' + index + ')').find('[id*=ddSType]').attr('disabled', false);
                            });
                            $('.su-star-empty')[0].style.display='block';
                    
                    }
                });
         }
    }
    if (document.getElementById('' + ctrlcom + '_ReceiptControl2_gvMultipleConcession').rows.length == 1) {
        fn_AddRowWithDetais();
        
    }
    if(document.getElementById('' + ctrlcom + '_ReceiptControl2_gvMultipleConcession').rows.length==2)
    {
    document.getElementById('' + ctrlcom + '_ReceiptControl2_chkismultiple').disabled=false;
    }
    CreateMultiDiscgirdRow();
    AssignSno1(index);

    return false;
}



function OnItemAuthSelection(sender, eventArgs) {
    var grid = document.getElementById('' + ctrlcom + '_ReceiptControl2_gvMultipleConcession');
    var _index = sender._element.parentElement.parentElement.parentElement.rowIndex;
    if ($('table[id*=gvMultipleConcession] tr').filter(':eq(' + _index + ')').find("[id*=ddlMultiDiscounttype]").val() == 0 || $('table[id*=gvMultipleConcession] tr').filter(':eq(' + _index + ')').find("[id*=ddlMultiDiscounttype]").val() == '') {
        $(".stoast").toastText("warning", "Please Select Discount Type", 5, 2);
        $("table[id*=gvMultipleConcession] tr").filter(":eq(" + _index + ")").find("input[type=text][id*=txtAutherizedPersion]").val('');
        return false;
    }
    var txtPersentage = $('table[id*=gvMultipleConcession] tr').filter(':eq(' + _index + ')').find("[id*=txtPersentage]").val();
    var txtAmount = $('table[id*=gvMultipleConcession] tr').filter(':eq(' + _index + ')').find("[id*=txtAmount]").val();
    if (txtPersentage == 0 || txtPersentage == undefined || txtPersentage == 'NaN' || txtPersentage == null || txtPersentage == '') {
        $(".stoast").toastText("warning", "Please Select Discount Percentage!.", 5, 2);
        $("table[id*=gvMultipleConcession] tr").filter(":eq(" + _index + ")").find("input[type=text][id*=txtAutherizedPersion]").val('');
        $("table[id$=gvMultipleConcession] tr").filter(":eq(" + _index + ")").find('[id*=ddlModes]')[0].value = 0;
        $('table[id*=gvMultipleConcession] tr').filter(':eq(' + _index + ')').find("[id*=txtPersentage]").focus();
        return false;
    }
    if (txtAmount == 0 || txtAmount == undefined || txtAmount == 'NaN' || txtAmount == null || txtAmount == '') {
        $(".stoast").toastText("warning", "Please Select Discount Amount!.", 5, 2);
        $('table[id*=gvMultipleConcession] tr').filter(':eq(' + _index + ')').find("[id*=txtAmount]").focus();
        return false;
    }

    var results = eval('(' + eventArgs.get_value() + ')');
    $("table[id*=gvMultipleConcession] tr").filter(":eq(" + _index + ")").find("input[type=text][id*=txtAutherizedPersion]").val(results.TEXT);
    $('table[id*=gvMultipleConcession] tr').filter(':eq(' + _index + ')').find("input[type=hidden][id*=hdnauthid]").val(results.VALUE);
    var ddldscntype = $("table[id$=gvMultipleConcession] tr").filter(":eq(" + _index + ")").find('[id*=ddlMultiDiscounttype]').val();
    var cardno = $("table[id$=gvMultipleConcession] tr").filter(":eq(" + _index + ")").find('[id*=txtcardno]').val();
    var ddlPer = $("table[id$=gvMultipleConcession] tr").filter(":eq(" + _index + ")").find('[id*=txtPersentage]').val();
    var ddlAmt = $("table[id$=gvMultipleConcession] tr").filter(":eq(" + _index + ")").find('[id*=txtAmount]').val();
    ddlPer = ddlPer = ddlPer == '' ? 0 : ddlPer;
    ddlAmt = ddlAmt = ddlAmt == '' ? 0 : ddlAmt;

    if (ddldscntype == "2" || ddldscntype == "5" || ddldscntype == "6") {
        var aletmesg = '';
        if (ddldscntype == "2") {
            aletmesg = 'Health Card';
        }
        if (ddldscntype == "5") {
            aletmesg = 'Event';
        }
        if (ddldscntype == "6") {
            aletmesg = 'Concession Rule';
        }
        if (cardno == "") {
            $(".stoast").toastText("warning", "Please Select '" + aletmesg + "'", 5, 2);
            return false;
        }
    }
    $("table[id*=gvMultipleConcession] tr:has(td)").each(function (e) {


        var form_name = $('#ctl00_ContentPlaceHolder1_ReceiptControl2_hdnDocName').val();
        var own_bill_auth = '';
        var own_auth_name = '';
        if (form_name == 'OP') {
            own_bill_auth = $('#ctl00_ContentPlaceHolder1_UcOdrPsyn__hiddenID').val();
            own_auth_name = document.getElementById('' + ctrlcom + '_umrPatientDetails_lblrefdoc').innerHTML;
            var name = own_auth_name.split('-');
            own_auth_name = name[0];
        }
        else if (form_name == 'Cons') {
            own_bill_auth = $('#ctl00_ContentPlaceHolder1_uccorporate_hdnarrdocid').val();
            own_auth_name = document.getElementById('' + ctrlcom + '_umrPatientDetails_lblrefdoc').innerHTML;
            var name = own_auth_name.split('-');
            own_auth_name = name[0];
        }

        var auth_pcnt = 0;
        var auth_period = 115;
        var auth_remain_amt = 0;
        var Auth_amount_fr_prd = 0;
        var con_on_his_bills = 'N';
        auth_pcnt = results.ListObjVal[0].AUTH_FOR_CONCESSION_PERCENT;
        auth_period = results.ListObjVal[0].AUTH_FOR_CONCESSION_PERIOD;
        auth_remain_amt = results.ListObjVal[0].Remaining_Auth_Amount;
        Auth_amount_fr_prd = results.ListObjVal[0].AUTH_FOR_CONCESSION_PERIOD_AMOUNT;
        con_on_his_bills = results.ListObjVal[0].IS_CONCESSION_OWN_PATIENTS_ONLY;
        if (con_on_his_bills == '') { con_on_his_bills = 'N'; }
        if (parseFloat(auth_pcnt) > 0) { } else { auth_pcnt = 0; }
        if (parseFloat(auth_remain_amt) > 0) { } else { auth_remain_amt = 0; }
        if (parseFloat(Auth_amount_fr_prd) > 0) { } else { Auth_amount_fr_prd = 0; }
        var dueper = ddlPer;
        var dueamt = ddlAmt;
        if (con_on_his_bills == 'Y') { /* authorization on his bills only  Start*/
            if (results.AUTH_NAME == own_auth_name) {
                if (parseFloat(dueper) <= parseFloat(auth_pcnt) && parseFloat(dueamt) <= parseFloat(auth_remain_amt)) { /* Due Percent and authorized percent checking */
                    $("table[id$=gvMultipleConcession] tr").filter(":eq(" + _index + ")").find('[id*=txtAutherizedPersion]').val(results.TEXT);
                    $('table[id*=gvMultipleConcession] tr').filter(':eq(' + _index + ')').find("input[type=hidden][id*=hdnauthid]").val(results.VALUE);
                }
                else if (parseFloat(dueper) <= parseFloat(auth_pcnt) && parseFloat(dueamt) > parseFloat(auth_remain_amt)) {
                    $(".stoast").toastText("warning", "This Authorized user authorization Concession amount exceeding Concession Limits, So Please Contact Administratior", 5, 3);
                    $("table[id$=gvMultipleConcession] tr").filter(":eq(" + _index + ")").find('[id*=txtAutherizedPersion]').val('');
                    return false;
                }
                else if (parseFloat(dueper) > parseFloat(auth_pcnt)) {
                    $(".stoast").toastText("warning", "This Authorized user  can give maximum " + auth_pcnt + " % on Transaction ", 5, 3);
                    $("table[id$=gvMultipleConcession] tr").filter(":eq(" + _index + ")").find('[id*=txtAutherizedPersion]').val('');
                    return false;
                }
            }
            else {
                $(".stoast").toastText("warning", "Authorization Name Mismatch So, Please Contact Administrator ", 5, 3);
                $("table[id$=gvMultipleConcession] tr").filter(":eq(" + _index + ")").find('[id*=txtAutherizedPersion]').val('');
                return false;
            }
        } /* authorization on his bills only  Ends*/
        else if (con_on_his_bills == 'N') { /* authorization on ANy bills   Starts*/
            if (parseFloat(dueper) <= parseFloat(auth_pcnt) && parseFloat(dueamt) <= parseFloat(auth_remain_amt)) { /* Due Percent and authorized percent checking */
                $("table[id$=gvMultipleConcession] tr").filter(":eq(" + _index + ")").find('[id*=txtAutherizedPersion]').val(results.TEXT);
                $('table[id*=gvMultipleConcession] tr').filter(':eq(' + _index + ')').find("input[type=hidden][id*=hdnauthid]").val(results.VALUE);

            }
            else if (parseFloat(dueper) <= parseFloat(auth_pcnt) && parseFloat(dueamt) > parseFloat(auth_remain_amt)) {
                $(".stoast").toastText("warning", "This Authorized user ahthorization Concession amount exceeding Concession Limits, So Please Contact Administratior", 5, 3);
                $("table[id$=gvMultipleConcession] tr").filter(":eq(" + _index + ")").find('[id*=txtAutherizedPersion]').val('');
                return false;
            }
            else if (parseFloat(dueper) > parseFloat(auth_pcnt)) {
                $(".stoast").toastText("warning", "This Authorized user  can give maximum " + auth_pcnt + " % on Transaction ", 5, 3);
                $("table[id$=gvMultipleConcession] tr").filter(":eq(" + _index + ")").find('[id*=txtAutherizedPersion]').val('');
                return false;
            }
        }


        $("table[id$=gvMultipleConcession] tr").filter(":eq(" + _index + ")").find('[id*=txtPersentage]')[0].disabled = true;
        $("table[id$=gvMultipleConcession] tr").filter(":eq(" + _index + ")").find('[id*=txtAmount]')[0].disabled = true;
        $("table[id$=gvMultipleConcession] tr").filter(":eq(" + _index + ")").find('[id*=txtcardno]')[0].disabled = true;
        $("table[id$=gvMultipleConcession] tr").filter(":eq(" + _index + ")").find('[id*=ddlMultiDiscounttype]')[0].disabled = true;
        $("table[id$=gvMultipleConcession] tr").filter(":eq(" + _index + ")").find('[id*=ddlModes]')[0].disabled = true;
        $("table[id$=gvMultipleConcession] tr").filter(":eq(" + _index + ")").find('[id*=txtAutherizedPersion]').removeClass('red');
    });
    var hdnMultiPercentage = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatdis').value;
    if (hdnMultiPercentage == '' || hdnMultiPercentage == undefined || hdnMultiPercentage == null) { hdnMultiPercentage = '0'; }
    if (parseFloat(hdnMultiPercentage) > 100) {
        $(".stoast").toastText("warning", "100% Concession is over", 5, 2);
        return false;
    }
    else {

        CreateMultiDiscgirdRow();
    }
    onsetDiscAuthThroughMultiDisc();
    OnDiscAuthColorCode();
}
function ClearAllTransactionDetails1() {
    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatgross').value = '0';
    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtparygross').value = '0';
    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtgrosstotal').value = '0';
    document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlDiscountType').value = '0';
    /*Total Due Amount */
    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtdueamt').value = '0';
    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatdue').value = '0';
    document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnDueAmt').value = '0';
    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtcmpDue').value = '0'
    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtTotalDue').value = '0';
    document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlDiscountType').value = '0';
    /*Advanced Disc Types */
    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatdis').value = '0';
    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpartydis').value = '0';
    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatgrossamt').value = '0';
    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpartygrossamt').value = '0';
    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtgrossamttotal').value = '0';
    /*Net Amounts */
    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatNet').value = '0';
    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtcmpNet').value = '0';
    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtTotalNet').value = '0';
    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtCurrAmt').value = '0';
    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtreqamtkyd').value = '0';
    document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnNetAmt').value = '0';
    document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnDueAmt').value = '0';

    $("table[id*=gvMultipleConcession] tr:has(td)").each(function (i, j) {
        if (i > 0) { $(this).remove(); }
        $('[id$=gvMultipleConcession] tr').filter(':eq(' + 1 + ')').find('[id*=ddlMultiDiscounttype]')[0].value = 0;
        $('[id$=gvMultipleConcession] tr').filter(':eq(' + 1 + ')').find('[id*=txtcardno]').val('');
        $('[id$=gvMultipleConcession] tr').filter(':eq(' + 1 + ')').find('[id*=txtAutherizedPersion]').val('');
        $('[id$=gvMultipleConcession] tr').filter(':eq(' + 1 + ')').find('[id*=txtAmount]').val('');
        $('[id$=gvMultipleConcession] tr').filter(':eq(' + 1 + ')').find('[id*=txtPersentage]').val('');
    });
    GlobalMyData = '';
    count = 0;
}

var RowIndex = 0;
function DscntValidation(obj) {

    RowIndex = obj.parentElement.parentElement.rowIndex;
    var dscntype = $('[id$=gvMultipleConcession] tr').filter(':eq(' + RowIndex + ')').find('[id*=ddlMultiDiscounttype]');
    var cardno = $('[id$=gvMultipleConcession] tr').filter(':eq(' + RowIndex + ')').find('[id*=txtcardno]');
    var auth = $('[id$=gvMultipleConcession] tr').filter(':eq(' + RowIndex + ')').find('[id*=txtAutherizedPersion]');
    var ConcesId = $('[id$=gvMultipleConcession] tr').filter(':eq(' + RowIndex + ')').find('[id*=BtnSrvSearch]');
    var DdlMode = $('[id$=gvMultipleConcession] tr').filter(':eq(' + RowIndex + ')').find('[id*=ddlModes]');
    var per = $('[id$=gvMultipleConcession] tr').filter(':eq(' + RowIndex + ')').find('[id*=txtPersentage]');
    var Amount = $('[id$=gvMultipleConcession] tr').filter(':eq(' + RowIndex + ')').find('[id*=txtAmount]');
    var Auth_Remaks = $('[id$=gvMultipleConcession] tr').filter(':eq(' + RowIndex + ')').find('[id*=txtCRemks]');
    $('[id$=gvMultipleConcession] tr').filter(':eq(' + RowIndex + ')').find('[id*=txtPersentage]').val('0');
    $('[id$=gvMultipleConcession] tr').filter(':eq(' + RowIndex + ')').find('[id*=txtAmount]').val('0');

    var Currenttype = 0; var A1 = 0; var B1 = 0; var C1 = 0; var D1 = 0; var E1 = 0; ; var F1 = 0;
    $("table[id*=gvMultipleConcession] tr:has(td)").each(function (e) {
        if ($(this).closest("tr").find("[id*=ddlMultiDiscounttype]").val() == 1) {
            A1++;
        }
        if ($(this).closest("tr").find("[id*=ddlMultiDiscounttype]").val() == 2) {
            B1++;
        }
        if ($(this).closest("tr").find("[id*=ddlMultiDiscounttype]").val() == 3) {
            C1++;
        }
        if ($(this).closest("tr").find("[id*=ddlMultiDiscounttype]").val() == 4) {
            D1++;
        }
        if ($(this).closest("tr").find("[id*=ddlMultiDiscounttype]").val() == 5) {
            E1++;
        }
        if ($(this).closest("tr").find("[id*=ddlMultiDiscounttype]").val() == 6) {
            F1++;
        }

    });
    if (A1 == 2) {
        $(".stoast").toastText("warning", "System Should Not Allow Cash Discount More Than Once", 5, 3);
        /*alert('System Should Not Allow Cash Discount More Than Once');*/
        $('table[id*=gvMultipleConcession] tr').filter(':eq(' + RowIndex + ')').find("[id*=ddlMultiDiscounttype]")[0].value = 0;
        return false;
    }
    if (B1 == 2) {
        $(".stoast").toastText("warning", "System Should Not Allow Health Card Discount More Than Once", 5, 3);
        /*alert('System Should Not Allow Cash Discount More Than Once');*/
        $('table[id*=gvMultipleConcession] tr').filter(':eq(' + RowIndex + ')').find("[id*=ddlMultiDiscounttype]")[0].value = 0;
        return false;
    }
    if (C1 == 2) {
        $(".stoast").toastText("warning", "System Should Not Allow Managent Discount More Than Once", 5, 2);
        $('table[id*=gvMultipleConcession] tr').filter(':eq(' + RowIndex + ')').find("[id*=ddlMultiDiscounttype]")[0].value = 0;
        return false;
    }
    if (D1 == 2) {
        $(".stoast").toastText("warning", "System Should Not Allow Staff Discount More Than Once", 5, 2);
        $('table[id*=gvMultipleConcession] tr').filter(':eq(' + RowIndex + ')').find("[id*=ddlMultiDiscounttype]")[0].value = 0;
        return false;
    }
    if (E1 == 2) {
        $(".stoast").toastText("warning", "Discount System Should Not Allow Event Based Discount More Than Once", 5, 2);
        $('table[id*=gvMultipleConcession] tr').filter(':eq(' + RowIndex + ')').find("[id*=ddlMultiDiscounttype]")[0].value = 0;
        return false;
    }
    if (F1 == 2) {
        $(".stoast").toastText("warning", "Discount System Should Not Allow Concession Rule Discount More Than Once", 5, 2);
        $('table[id*=gvMultipleConcession] tr').filter(':eq(' + RowIndex + ')').find("[id*=ddlMultiDiscounttype]")[0].value = 0;
        return false;
    }
    if (dscntype[0].value == 1 || dscntype[0].value == 3 || dscntype[0].value == 4 || dscntype[0].value == 0) {
        cardno[0].disabled = true;
        ConcesId[0].disabled = true;
        cardno[0].className = 'grey';
        per[0].disabled = false;
        Amount[0].disabled = false;
        DdlMode[0].disabled = false;
        auth[0].className = 'red';
        Auth_Remaks[0].className = 'red';
    }
    if (dscntype[0].value == 2 || dscntype[0].value == 5 || dscntype[0].value == 6) {
        cardno[0].disabled = true;
        ConcesId[0].disabled = false;
        per[0].disabled = true;
        Amount[0].disabled = true;
        cardno[0].className = 'red';
        DdlMode[0].disabled = true;
        auth[0].className = 'red';
        Auth_Remaks[0].className = 'red';
    }
    if (document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnDocName').value == 'IPFINAL') {
        DdlMode[0].disabled = true;
    }
}

/* Binding of Multiple Discount Types to dropdown */
var relation1 = new Array();
function GetDllyears(value) {
    var gvrecdetails = document.getElementById('' + ctrlcom + '_ReceiptControl2_gvMultipleConcession');
    var Pkgindex = gvrecdetails.rows.length;

    var dropdown1;
    dropdown1 = document.createElement('select');
    dropdown1.id = value + 1;
    dropdown1.style.width = '100%';
    dropdown1.className = 'ComboBoxDropDown';

    var _optionsVal = '';
    var _optionsVal1 = '';
    var select = "--Select--";
    _optionsVal += "<OPTION selected value='" + 0 + "'>" + select + "</OPTION>";
    if (relation1 != null) {
        if (relation1.length > 0) {
            for (var i = 0; i < relation1.length; i++) {
                    _optionsVal += "<OPTION  value='" + relation1[i].DISCOUNT_TYPE_ID  + "'>" + relation1[i].DISCOUNT_TYPE_NAME + "</OPTION>";
                }
            }
        
    }
    $(dropdown1).empty().html(_optionsVal);
    return dropdown1;
}

/* dynamic row creation for multiple discounts grid */

var ddldata = new Array();
function GetDllyearsData(value, discCardName, Discounttypeid) {
    var gvrecdetails = document.getElementById('ctl00_ContentPlaceHolder1_ReceiptControl2_gvMultipleConcession');
    var Pkgindex = gvrecdetails.rows.length;
    var dropdown1;
    dropdown1 = document.createElement('select');
    dropdown1.id = value + 1;
    dropdown1.innerHTML = discCardName;
    dropdown1.style.width = '100%';
    dropdown1.className = 'ComboBoxDropDown';
    var _optionsVal = '';

    var select = "--Select--";
    _optionsVal += "<OPTION selected value='" + Discounttypeid + "'>" + discCardName + "</OPTION>";
    $(dropdown1).empty().html(_optionsVal);
    return dropdown1;
}

function fn_AddRowWithDetais(view,Discounttypeid, cardno, ddlmodeid, percentage, amount, authname, remarks, discCardName) {
    var gvrecdetails = document.getElementById('' + ctrlcom + '_ReceiptControl2_gvMultipleConcession');
    var Pkgindex = gvrecdetails.rows.length;
    var newrow = gvrecdetails.insertRow(Pkgindex);

    var newCell = newrow.insertCell(0);
    var span = document.createElement('span');
    var newTextBox = document.createElement('label'); newTextBox.id = 'lblSNo' + Pkgindex; newTextBox.innerHTML = Pkgindex; span.appendChild(newTextBox);
    newCell.align = "left";
    newCell.appendChild(span); ;


    newCell = newrow.insertCell(1);
    var imgBtnDelete = document.createElement('IMG');
    imgBtnDelete.style.cursor = 'pointer';
    imgBtnDelete.CssClass = 'gimg';
    imgBtnDelete.style.padding = '2px';
    imgBtnDelete.style.margin = '0 4px';
    imgBtnDelete.style.float = 'left';
    imgBtnDelete.Style = "vertical-align: middle;";
    imgBtnDelete.id = 'imgBtnDelete' + index;
    newCell.style.width = "5%";
    imgBtnDelete.onclick = function () { return RemoveMultipleDiscounts(this); };
    imgBtnDelete.src = _iniUrl + 'Assets/Grid_Icons/delete.png';
    imgBtnDelete.title = 'Remove?';
    if (getParameterByName("MODE") == "VIEW") {
//        newCell.style.display = 'none';
          imgBtnDelete.style.display = 'none';
    }
    else {
        newCell.style.display = 'table-cell';
    }
    newCell.appendChild(imgBtnDelete);


    var newcell = newrow.insertCell(2);
    var ddltype = document.createElement('select');
    ddltype.id = 'ddlMultiDiscounttype' + '-' + Pkgindex;
    if(getParameterByName("MODE") == "VIEW"){
     ddltype = GetDllyearsData('ddlMultiDiscounttype', discCardName, Discounttypeid);
    }
    else{
        ddltype = GetDllyears('ddlMultiDiscounttype');
        ddltype.className = 'red';
    }
    ddltype.onchange = function () { ShowHideOfGridDiscountSelection(this), DscntValidation(this); return OnNullValue(this); };
    newcell.appendChild(ddltype);


    newcell = newrow.insertCell(3);
    var divcard = document.createElement('div'); divcard.id = 'divcard';
    divcard.className = "btntxt";
    var txtcardno = document.createElement('input');
    txtcardno.type = 'text';
    txtcardno.className = 'SampleReg';
    txtcardno.id = 'txtcardno' + Pkgindex;
    txtcardno.disabled = true;
    txtcardno.onblur = function () { return OnNullValue(this); };
    var divBtnSrc = document.createElement('div');
    divBtnSrc.id = 'divBtnSrc';
    divBtnSrc.className = "txtbtn";
    var BtnSrvSearch = document.createElement('input');
    BtnSrvSearch.type = 'button';
    BtnSrvSearch.className = 'tb_Btn searchbtn';
    BtnSrvSearch.id = 'BtnSrvSearch' + Pkgindex;
    BtnSrvSearch.align = "right";

    BtnSrvSearch.onclick = function () { BindHealthCard(this) };
    divcard.appendChild(txtcardno);
    divcard.appendChild(divBtnSrc);
    divBtnSrc.appendChild(BtnSrvSearch);
    newcell.style.width = "14%";
    newcell.appendChild(divcard);

    var hdncardid = document.createElement('input'); hdncardid.type = 'hidden'; hdncardid.id = 'hdncardid' + '-' + Pkgindex; newcell.appendChild(hdncardid);
    var hdnauthid = document.createElement('input'); hdnauthid.type = 'hidden'; hdnauthid.id = 'hdnauthid' + '-' + Pkgindex; newcell.appendChild(hdnauthid);
    var hdneventid = document.createElement('input'); hdneventid.type = 'hidden'; hdneventid.id = 'hdneventid' + '-' + Pkgindex; newcell.appendChild(hdneventid);
    var hdnRuleid = document.createElement('input'); hdnRuleid.type = 'hidden'; hdnRuleid.id = 'hdnRuleid' + '-' + Pkgindex; newcell.appendChild(hdnRuleid);

    var newCell = newrow.insertCell(4);
    var ddlModes = document.createElement('select');
    ddlModes.onchange = function () { return DisbaleEnableMultiDiscAmtControls(this) };
    ddlModes.id = 'ddlModes' + '-' + Pkgindex;

    var option1 = document.createElement('option');
    option1.value = '1'; option1.innerHTML = 'Overall';
    newCell.style.width = "10%";
    ddlModes.appendChild(option1);
    var option2 = document.createElement('option');
    option2.value = '2'; option2.innerHTML = 'Line';
    if (document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnDocName').value == 'IPFINAL') {
        ddlModes.disabled = true;
    }
    else {
        ddlModes.disabled = false;
    }
    ddlModes.appendChild(option2);
    newCell.appendChild(ddlModes);


    var newCell = newrow.insertCell(5);
    var txtper = GetnameTextBox('txtPersentage');
    txtper.onkeyup = function () { CalculatePerBasedAmount(this, 'Perecent',event); };
    txtper.onfocus = function () { ClearTextboxTest(this); }
    txtper.onkeypress = function () { numeralsOnlyTest(event, this); ReplaceStartWithZero(this); };
    txtper.onblur = function () { AssignZeroTest(this); }
    txtper.maxlength = '10';
    txtper.onpaste = function () { return false; }
    txtper.ondrop = function () { return false; }
    txtper.className = 'Aright';
    newCell.appendChild(txtper);

    var newCell = newrow.insertCell(6);
    var txtamt = GetnameTextBox('txtAmount');
    txtamt.onkeyup = function () { CalculatePerBasedAmount(this, 'Amount',event); };
    txtamt.onfocus = function () { ClearTextboxTest(this); }
    txtamt.onkeypress = function () { numeralsOnlyTest(event, this); ReplaceStartWithZero(this); };
    txtamt.onblur = function () { AssignZeroTest(this); }
    txtamt.ondrop = function () { return false; }
    txtamt.maxlength = '10';
    txtamt.onpaste = function () { return false; }
    txtamt.className = 'Aright';
    newCell.appendChild(txtamt);

    newcell = newrow.insertCell(7);
    var divAuthorized = document.createElement('div'); divAuthorized.id = 'divAuthorized';
    divAuthorized.className = "btntxt";
    var txtAutherizedPersion = document.createElement('input');
    txtAutherizedPersion.type = 'text';
    txtAutherizedPersion.className = 'SampleReg';
    txtAutherizedPersion.id = 'txtAutherizedPersion' + Pkgindex;
    txtAutherizedPersion.onblur = function () { return OnNullValue(this); }
    var divBtnSrc = document.createElement('div');
    divBtnSrc.id = 'divBtnSrc';
    divBtnSrc.className = "txtbtn";
    var BtnSrvSearch = document.createElement('input');
    BtnSrvSearch.type = 'button';
    BtnSrvSearch.className = 'tb_Btn searchbtn';
    BtnSrvSearch.id = 'BtnSrvSearch' + Pkgindex;
    BtnSrvSearch.align = "right";

    BtnSrvSearch.onclick = function () { onauthbind(this); }
    divAuthorized.appendChild(txtAutherizedPersion);
    divAuthorized.appendChild(divBtnSrc);
    divBtnSrc.appendChild(BtnSrvSearch);
    newcell.appendChild(divAuthorized);
     if(getParameterByName("MODE") != "VIEW"){
        Sys.Application.add_init(function () {
            $create(AjaxControlToolkit.AutoCompleteBehavior, { "firstRowSelected": true, "completionListCssClass": "autocomplete_completionListElement",
                "completionListItemCssClass": "autocomplete_listItem", "highlightedItemCssClass": "autocomplete_highlightedListItem",
                "id": "autoComplete1" + Pkgindex, "minimumPrefixLength": 1, "serviceMethod": "GetAutoComp_Authorisation", "servicePath": _iniUrl + "authorization.asmx", "useContextKey": true, "contextKey": "Concession"
            }, { "itemSelected": OnItemAuthSelection }, null, $get(txtAutherizedPersion.id));
        });
    }
    var newCell = newrow.insertCell(8);
    var txtCRemks = GetnameTextBox('txtCRemks');
    if(getParameterByName("MODE") != "VIEW"){
    txtCRemks.style.border = '1px solid rgb(244,120,94)';
    }
    txtCRemks.onblur = function () { return OnNullValue(this); }
    newCell.appendChild(txtCRemks);

   if(view=="MULTICON")
    {
        ddltype.value = Discounttypeid;
        txtcardno.value = cardno;
        ddlModes.value = ddlmodeid;
        txtper.value = percentage;
        txtamt.value = amount;
        txtAutherizedPersion.value = authname;
        txtCRemks.value = remarks;
    }

    Pkgindex++;
}
/* Creation of Serial No's*/
function AssignSno1(rowindex) {
    var gridID = document.getElementById('' + ctrlcom + '_gvMultipleConcession');
    var index = 1;
    $("table[id*=gvMultipleConcession] tr:has(td)").each(function () {
        $(this).closest('tr').find("[id*=lblSNo]").text(index);
        index++;
    });
}
/* Creation of textbox*/
function GetnameTextBox(value) {
    var textBox;
    textBox = document.createElement('input'); textBox.id = value + index; textBox.style.width = '100%'; textBox.type = 'text'; textBox.className = 'formtextbox';
    return textBox;
}
/* Disable or enable Discount Per and Disc amount textboxes on change of mode(overall/line) */
function DisbaleEnableMultiDiscAmtControls(obj) {
    var index = obj.parentElement.parentElement.rowIndex;
    index = index == undefined ? 1 : index;
    var MultiDisTypeIndex = 0;
    MultiDisTypeIndex = $("table[id$=gvMultipleConcession] tr").filter(":eq(" + index + ")").find('[id*=ddlMultiDiscounttype]').val();
    var AllowFrinSrvDscnt = document.getElementById('' + ctrlcom + '_UCServices_hdnAllowOutSideConcs').value;
    var ddlModesModes = $("table[id$=gvMultipleConcession] tr").filter(":eq(" + index + ")").find('[id*=ddlModes]').val();
    if (MultiDisTypeIndex == 0) {
        $(".stoast").toastText("warning", "Please Select Discount Type!.", 5, 2);
        $("table[id$=gvMultipleConcession] tr").filter(":eq(" + index + ")").find('[id*=ddlModes]').val('1');
        return false;
    }
    if (ddlModesModes == 1) {
        $("table[id$=gvMultipleConcession] tr").filter(":eq(" + index + ")").find('[id*=txtPersentage]')[0].disabled = false;
        $("table[id$=gvMultipleConcession] tr").filter(":eq(" + index + ")").find('[id*=txtAmount]')[0].disabled = false;
        $("table[id$=gvMultipleConcession] tr").filter(":eq(" + index + ")").find('[id*=txtPersentage]').val('0');
        $("table[id$=gvMultipleConcession] tr").filter(":eq(" + index + ")").find('[id*=txtAmount]').val('0');
    }
    if (ddlModesModes == 2) {
        $("table[id$=gvMultipleConcession] tr").filter(":eq(" + index + ")").find('[id*=txtPersentage]')[0].disabled = true;
        $("table[id$=gvMultipleConcession] tr").filter(":eq(" + index + ")").find('[id*=txtAmount]')[0].disabled = true;
        $("table[id$=gvMultipleConcession] tr").filter(":eq(" + index + ")").find('[id*=txtPersentage]').val('0');
        $("table[id$=gvMultipleConcession] tr").filter(":eq(" + index + ")").find('[id*=txtAmount]').val('0');
    }
    if (document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnDocName').value == 'IPFINAL') {
        DisbaleEnableMultiDiscPerAmtControls(obj)
    }
    else {
        DisbaleEnableGridControls(obj);
    }
}
/* Related to IP Final Bill Disable or enable Discount Per and Disc amount textboxes on change of mode(overall/line)  */
function DisbaleEnableMultiDiscPerAmtControls(obj) {
}
/* Related to OP Disable or enable Discount Per and Disc amount textboxes on change of mode(overall/line)  */
function DisbaleEnableGridControls(obj) {
    var index = obj.parentElement.parentElement.rowIndex;
    index = index == undefined ? 1 : index;
    var MultiDisTypeIndex = 0;
    MultiDisTypeIndex = $("table[id$=gvMultipleConcession] tr").filter(":eq(" + index + ")").find('[id*=ddlMultiDiscounttype]').val();
    var AllowFrinSrvDscnt = document.getElementById('' + ctrlcom + '_UCServices_hdnAllowOutSideConcs').value;
    /*    var ddlModesModes = $("table[id$=gvMultipleConcession] tr").filter(":eq(" + index + ")").find('[id*=ddlModes]').val();
    if (MultiDisTypeIndex == 0) {
    alert('Please Select Discount Type!.');
    $("table[id$=gvMultipleConcession] tr").filter(":eq(" + index + ")").find('[id*=ddlModes]').val('1');
    return false;
    }
    if (ddlModesModes == 1) {
    $("table[id$=gvMultipleConcession] tr").filter(":eq(" + index + ")").find('[id*=txtPersentage]')[0].disabled = false;
    $("table[id$=gvMultipleConcession] tr").filter(":eq(" + index + ")").find('[id*=txtAmount]')[0].disabled = false;
    $("table[id$=gvMultipleConcession] tr").filter(":eq(" + index + ")").find('[id*=txtPersentage]').val('0');
    $("table[id$=gvMultipleConcession] tr").filter(":eq(" + index + ")").find('[id*=txtAmount]').val('0');
    }
    if (ddlModesModes == 2) {
    $("table[id$=gvMultipleConcession] tr").filter(":eq(" + index + ")").find('[id*=txtPersentage]')[0].disabled = true;
    $("table[id$=gvMultipleConcession] tr").filter(":eq(" + index + ")").find('[id*=txtAmount]')[0].disabled = true;
    $("table[id$=gvMultipleConcession] tr").filter(":eq(" + index + ")").find('[id*=txtPersentage]').val('0');
    $("table[id$=gvMultipleConcession] tr").filter(":eq(" + index + ")").find('[id*=txtAmount]').val('0');
    }*/
    if ($(obj).val() == '1') {
        if (MultiDisTypeIndex == '3') {
            $("table[id*=gvServices] tr:has(td)").each(function (e) {
                if ($(this).closest('tr').find("input[type=hidden][id*=hdnServiceID]").val() > 0 && parseFloat($(this).closest('tr').find("[id*=txtAmount]").val()) > 0) {
                    $(this).closest("tr").find("[id*=txtmaPer]")[0].disabled = true;
                    $(this).closest("tr").find("[id*=txtmgAmt]")[0].disabled = true;
                    var txtmgAmt = $(this).closest("tr").find("[id*=txtmgAmt]").val();
                    txtmgAmt = typeof txtmgAmt == 'string' ? (typeof txtmgAmt == 'undefined' || txtmgAmt.trim() == '' ? 0 : parseFloat(txtmgAmt)) : (typeof txtmgAmt == 'object' ? 0 : parseFloat(txtmgAmt));
                    var _net = $(this).closest("tr").find("[id*=txtPNAmt]").val();
                    if (_net == "" || _net == undefined || _net == null || _net == "NaN") { _net = "0"; }
                    //$(this).closest("tr").find("[id*=txtPNAmt]").val(parseFloat(_net) + txtmgAmt);
                    $(this).closest("tr").find("[id*=txtmaPer]").val('0');
                    $(this).closest("tr").find("[id*=txtmgAmt]").val('0');
                }
            });
        }
        if (MultiDisTypeIndex == '4') {
            $("table[id*=gvServices] tr:has(td)").each(function (e) {
                if ($(this).closest('tr').find("input[type=hidden][id*=hdnServiceID]").val() > 0 && parseFloat($(this).closest('tr').find("[id*=txtAmount]").val()) > 0) {
                    $(this).closest("tr").find("[id*=txtstPer]")[0].disabled = true;
                    $(this).closest("tr").find("[id*=txtstAmt]")[0].disabled = true;
                    var txtstAmt = $(this).closest("tr").find("[id*=txtstAmt]").val();
                    txtstAmt = typeof txtstAmt == 'string' ? (typeof txtstAmt == 'undefined' || txtstAmt.trim() == '' ? 0 : parseFloat(txtstAmt)) : (typeof txtstAmt == 'object' ? 0 : parseFloat(txtstAmt));
                    var _net = $(this).closest("tr").find("[id*=txtPNAmt]").val();
                    if (_net == "" || _net == undefined || _net == null || _net == "NaN") { _net = "0"; }
                    //$(this).closest("tr").find("[id*=txtPNAmt]").val(parseFloat(_net) + txtstAmt);
                    $(this).closest("tr").find("[id*=txtstPer]").val('0');
                    $(this).closest("tr").find("[id*=txtstAmt]").val('0');
                }
            });
        }
        if (MultiDisTypeIndex == '1') {
            $("table[id*=gvServices] tr:has(td)").each(function (e) {
                if ($(this).closest('tr').find("input[type=hidden][id*=hdnServiceID]").val() > 0 && parseFloat($(this).closest('tr').find("[id*=txtAmount]").val()) > 0) {
                    $(this).closest("tr").find("[id*=txtDiscP]").attr("disabled", true);
                    $(this).closest("tr").find("[id*=txtDiscAmt]").attr("disabled", true);
                    var txtDiscAmt = $(this).closest("tr").find("[id*=txtDiscAmt]").val();
                    txtDiscAmt = typeof txtDiscAmt == 'string' ? (typeof txtDiscAmt == 'undefined' || txtDiscAmt.trim() == '' ? 0 : parseFloat(txtDiscAmt)) : (typeof txtDiscAmt == 'object' ? 0 : parseFloat(txtDiscAmt));
                    var _net = $(this).closest("tr").find("[id*=txtPNAmt]").val();
                    if (_net == "" || _net == undefined || _net == null || _net == "NaN") { _net = "0"; }
                    $(this).closest("tr").find("[id*=txtPNAmt]").val(parseFloat(_net) + txtDiscAmt);
                    $(this).closest("tr").find("[id*=txtDiscP]").val('0');
                    $(this).closest("tr").find("[id*=txtDiscAmt]").val('0');
                }
            });
        }
    }
    else {
        $('[id$=gvMultipleConcession] tr').filter(':eq(' + index + ')').find('[id*=txtPersentage]').disabled = true;
        $('[id$=gvMultipleConcession] tr').filter(':eq(' + index + ')').find('[id*=txtAmount]').disabled = true;

        if (MultiDisTypeIndex == '3') {
            $("table[id*=gvServices] tr:has(td)").each(function (e) {
                var is_Frien_Srv = $(this).closest('tr').find('input[type=hidden][id*=hdnIsForeignSrv]').val();
                var class_srv_id = $(this).closest('tr').find('input[type=hidden][id*=hdnClass_Srv_ID]').val();
                if ((is_Frien_Srv == "Y" && AllowFrinSrvDscnt == "False") || parseInt(class_srv_id) > 0) {
                    $(this).closest("tr").find("[id*=txtmaPer]").attr("disabled", true);;
                    $(this).closest("tr").find("[id*=txtmgAmt]").attr("disabled", true);
                    $(this).closest("tr").find("[id*=txtstPer]").attr("disabled", true);
                    $(this).closest("tr").find("[id*=txtstAmt]").attr("disabled", true);
                    $(this).closest("tr").find("[id*=txtDiscP]").attr("disabled", true);
                    $(this).closest("tr").find("[id*=txtDiscAmt]").attr("disabled", true);

                }
                else {
                    $(this).closest("tr").find("[id*=txtmaPer]").attr("disabled", false);
                    $(this).closest("tr").find("[id*=txtmgAmt]").attr("disabled", false);
                   
                }

            });
        }
        if (MultiDisTypeIndex == '4') {
            $("table[id*=gvServices] tr:has(td)").each(function (e) {
                var is_Frien_Srv = $(this).closest('tr').find('input[type=hidden][id*=hdnIsForeignSrv]').val();
                var class_srv_id = $(this).closest('tr').find('input[type=hidden][id*=hdnClass_Srv_ID]').val();
                if ((is_Frien_Srv == "Y" && AllowFrinSrvDscnt == "False") || parseInt(class_srv_id) > 0) {
                    $(this).closest("tr").find("[id*=txtstPer]").attr("disabled", true);
                    $(this).closest("tr").find("[id*=txtstAmt]").attr("disabled", true);
                    $(this).closest("tr").find("[id*=txtDiscP]").attr("disabled", true);
                    $(this).closest("tr").find("[id*=txtDiscAmt]").attr("disabled", true);
                    $(this).closest("tr").find("[id*=txtmaPer]").attr("disabled", true);
                    $(this).closest("tr").find("[id*=txtmgAmt]").attr("disabled", true);
                }
                else {
                  
                    $(this).closest("tr").find("[id*=txtstPer]").attr("disabled", false);
                    $(this).closest("tr").find("[id*=txtstAmt]").attr("disabled", false);
          
                }
                $(this).closest("tr").find("[id*=txtstPer]").val('0');
                $(this).closest("tr").find("[id*=txtstAmt]").val('0');
            });
        }
        if (MultiDisTypeIndex == '1') {
            $("table[id*=gvServices] tr:has(td)").each(function (e) {

                var is_Frien_Srv = $(this).closest('tr').find('input[type=hidden][id*=hdnIsForeignSrv]').val();
                var class_srv_id = $(this).closest('tr').find('input[type=hidden][id*=hdnClass_Srv_ID]').val();
                if ((is_Frien_Srv == "Y" && AllowFrinSrvDscnt == "False") || parseInt(class_srv_id) > 0) {
                    if ($(this).closest('tr').find("input[type=hidden][id*=hdnServiceID]").val() > 0 && parseFloat($(this).closest('tr').find("[id*=txtAmount]").val()) > 0) {
                        $(this).closest("tr").find("[id*=txtDiscP]").attr("disabled", true);
                        $(this).closest("tr").find("[id*=txtDiscAmt]").attr("disabled", true);
                        $(this).closest("tr").find("[id*=txtmaPer]").attr("disabled", true);
                        $(this).closest("tr").find("[id*=txtmgAmt]").attr("disabled", true);
                        $(this).closest("tr").find("[id*=txtstPer]").attr("disabled", true);
                        $(this).closest("tr").find("[id*=txtstAmt]").attr("disabled", true);
                    }
                }
                else {
          
                    $(this).closest("tr").find("[id*=txtDiscP]").attr("disabled", false);
                    $(this).closest("tr").find("[id*=txtDiscAmt]").attr("disabled", false);
                    var txtDiscAmt = $(this).closest("tr").find("[id*=txtDiscAmt]").val();
                    txtDiscAmt = typeof txtDiscAmt == 'string' ? (typeof txtDiscAmt == 'undefined' || txtDiscAmt.trim() == '' ? 0 : parseFloat(txtDiscAmt)) : (typeof txtDiscAmt == 'object' ? 0 : parseFloat(txtDiscAmt));
                    var _net = $(this).closest("tr").find("[id*=txtPNAmt]").val();
                    if (_net == "" || _net == undefined || _net == null || _net == "NaN") { _net = "0"; }
                    $(this).closest("tr").find("[id*=txtPNAmt]").val(parseFloat(_net) + txtDiscAmt);
                    $(this).closest("tr").find("[id*=txtDiscP]").val('0');
                    $(this).closest("tr").find("[id*=txtDiscAmt]").val('0');
                }
            });
        }
    }
    CalculateGridAmt(0);
}
/* selection of Due Auth. Pat Lookup */
function DueAuthSelection(data) {
    var dueiii = document.getElementById('' + ctrlcom + '_ReceiptControl2_Search3_txtSearchControl');
    OnNullValue(dueiii);
    var form_name = $('#ctl00_ContentPlaceHolder1_umrPatientDetails_hdnFormName').val();
    var own_bill_auth = '';
    var own_auth_name = '';
    if (form_name == 'OP') {
        own_bill_auth = $('#ctl00_ContentPlaceHolder1_UcOdrPsyn__hiddenID').val();
        own_auth_name = document.getElementById('' + ctrlcom + '_umrPatientDetails_lblrefdoc').innerHTML;
        var name = own_auth_name.split('-');
        own_auth_name = name[0];
    }
    else if (form_name == 'Cons') {
        own_bill_auth = $('#ctl00_ContentPlaceHolder1_uccorporate_hdnarrdocid').val();
        own_auth_name = document.getElementById('' + ctrlcom + '_umrPatientDetails_lblrefdoc').innerHTML;
        var name = own_auth_name.split('-');
        own_auth_name = name[0];
    }

    var dueamt = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatdue').value;
    var netamt = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatNet').value;
    var taxamt = document.getElementById('' + ctrlcom + '_ReceiptControl2_txttaxamt').value;
    var dueper = (parseFloat(100) * parseFloat(dueamt)) / (parseFloat(netamt) + parseFloat(Math.round(taxamt)));
    if (parseFloat(dueamt) > 0) { } else { dueamt = 0; }
    if (parseFloat(netamt) > 0) { } else { netamt = 0; }
    if (parseFloat(dueper) > 0) { } else { dueper = 0; }
    var auth_pcnt = 0;
    var auth_period = 115;
    var auth_remain_amt = 0;
    var Auth_amount_fr_prd = 0;
    var Due_On_his_Own_bills = 'N';
    if (data.ID == undefined) {
        auth_pcnt = data.AUTH_FOR_DUE_AMOUNT;
        auth_period = data.AUTH_FOR_DUE_PERIOD;
        auth_remain_amt = data.REMAINING_DUE_AMOUNT;
        Auth_amount_fr_prd = data.AUTH_FOR_DUE_PERIOD_AMOUNT;
        Due_On_his_Own_bills = data.IS_DUE_OWN_PATIENTS_ONLY;
    }
    else {
        auth_pcnt = data.RESULT.ListObjVal[0].AUTH_FOR_DUE_AMOUNT;
        auth_period = data.RESULT.ListObjVal[0].AUTH_FOR_DUE_PERIOD;
        auth_remain_amt = data.RESULT.ListObjVal[0].Remaining_due_Amount;
        Auth_amount_fr_prd = data.RESULT.ListObjVal[0].AUTH_FOR_DUE_PERIOD_AMOUNT;
        Due_On_his_Own_bills = data.RESULT.ListObjVal[0].IS_DUE_OWN_PATIENTS_ONLY;
    }
    Due_On_his_Own_bills=Due_On_his_Own_bills||"N";
    if (parseFloat(auth_pcnt) > 0) { } else { auth_pcnt = 0; }
    if (parseFloat(auth_remain_amt) > 0) { } else { auth_remain_amt = 0; }
    if (parseFloat(Auth_amount_fr_prd) > 0) { } else { Auth_amount_fr_prd = 0; }

    if (Due_On_his_Own_bills == 'Y') { /* authorization on his bills only  Start*/
        if (data.AUTH_NAME == own_auth_name) {
            if (parseFloat(dueper) <= parseFloat(auth_pcnt) && parseFloat(dueamt) <= parseFloat(auth_remain_amt)) { /* Due Percent and authorized percent checking */
                document.getElementById('' + ctrlcom + '_ReceiptControl2_Search3_txtSearchControl').value = data._lktext;
                document.getElementById('' + ctrlcom + '_ReceiptControl2_Search3__hiddenText').value = data._lktext;
                if (data.ID == undefined) {
                    document.getElementById('' + ctrlcom + '_ReceiptControl2_Search3__hiddenID').value = data.AUTH_ID;
                }
                else {
                    document.getElementById('' + ctrlcom + '_ReceiptControl2_Search3__hiddenID').value = data.ID;
                }
            }
            else if (parseFloat(dueper) <= parseFloat(auth_pcnt) && parseFloat(dueamt) > parseFloat(auth_remain_amt)) {
                $(".stoast").toastText("warning", "This Authorized user authorization Due amount exceeding Due Limits, So Please Contact Administratior", 5, 3);
                $('#ctl00_ContentPlaceHolder1_ReceiptControl2_Search3_txtSearchControl').val('');
                return false;
            }
            else if (parseFloat(dueper) > parseFloat(auth_pcnt)) {
                $(".stoast").toastText("warning", "This Authorized user  can give maximum " + auth_pcnt + " % on Transaction ", 5, 3);
                $('#ctl00_ContentPlaceHolder1_ReceiptControl2_Search3_txtSearchControl').val('');
                return false;
            }
        }
        else {
            $(".stoast").toastText("warning", "Authorization Name Mismatch So, Please Contact Administrator ", 5, 3);
            $('#ctl00_ContentPlaceHolder1_ReceiptControl2_Search3_txtSearchControl').val('');
            return false;
        }
    } /* authorization on his bills only  Ends*/
    else if (Due_On_his_Own_bills == 'N') { /* authorization on ANy bills   Starts*/
        if (parseFloat(dueper) <= parseFloat(auth_pcnt) && parseFloat(dueamt) <= parseFloat(auth_remain_amt)) { /* Due Percent and authorized percent checking */
            document.getElementById('' + ctrlcom + '_ReceiptControl2_Search3_txtSearchControl').value = data._lktext;
            document.getElementById('' + ctrlcom + '_ReceiptControl2_Search3__hiddenText').value = data._lktext;
            if (data.ID == undefined) {
                document.getElementById('' + ctrlcom + '_ReceiptControl2_Search3__hiddenID').value = data.AUTH_ID;
            }
            else {
                document.getElementById('' + ctrlcom + '_ReceiptControl2_Search3__hiddenID').value = data.ID;
            }
        }
        else if (parseFloat(dueper) <= parseFloat(auth_pcnt) && parseFloat(dueamt) > parseFloat(auth_remain_amt)) {
            $(".stoast").toastText("warning", "This Authorized user authorization Due amount exceeding Due Limits, So Please Contact Administratior", 5, 3);
            $('#ctl00_ContentPlaceHolder1_ReceiptControl2_Search3_txtSearchControl').val('');
            return false;
        }
        else if (parseFloat(dueper) > parseFloat(auth_pcnt)) {
            $(".stoast").toastText("warning", "This Authorized user  can give maxminum " + auth_pcnt + " % on Transaction ", 5, 3);
            $('#ctl00_ContentPlaceHolder1_ReceiptControl2_Search3_txtSearchControl').val('');
            return false;
        }
    }

    var auth_name = $('#ctl00_ContentPlaceHolder1_ReceiptControl2_Search3_txtSearchControl').val();
    if (auth_name == undefined || auth_name == null) { auth_name = ''; }
    if (auth_name != '') {
        document.getElementById('' + ctrlcom + '_ReceiptControl2_Search3_txtSearchControl').className = 'grey';
    }

}
/* on change of discount type cash to select or select to cash*/
function CheckCardDisable(obj, flag) {
   /* var id = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatdis');
    var _txtpatdis = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatdis').value;
    var _txtpatgrossamt = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatgrossamt').value;
    if (_txtpatdis == '' || _txtpatdis == null || _txtpatdis == undefined) { _txtpatdis = 0; }
    if (_txtpatgrossamt == '' || _txtpatgrossamt == null || _txtpatgrossamt == undefined) { _txtpatgrossamt = 0; }
    if (parseFloat(_txtpatgrossamt) > 0 && parseFloat(_txtpatdis) > 0) {
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatdis').value = 0;
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatgrossamt').value = 0;
        PatCalculateConcessionTransactionPerCentage(id, 'Perecent');
    }
    if (document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatgrossamt').value > 0) {

    }
    if ($('[id*=ddlDiscountType]')[0].value == 1) {
        $('[id*=txtpatdis]')[0].disabled = false;
        $('[id*=txtpatgrossamt]')[0].disabled = false;
        $('[id*=txtgrossamttotal]')[0].disabled = true;
        if (flag != 'Dont' && flag != undefined && flag != '') {
            $('[id*=txtpatdis]').val('0');
            $('[id*=txtDiscAmt]').val('0');
            $('[id*=txtPNAmt]').val($('[id*=txtPamt]').val());
        }
    }
    else if ($('[id*=ddlDiscountType]')[0].value == 0) {
        $('[id*=txtpatdis]')[0].disabled = true;
        $('[id*=txtpatgrossamt]')[0].disabled = true;
        if (flag != 'Dont' && flag != undefined && flag != '') {
            $('[id*=txtpatdis]').val('0');
            $('[id*=txtpatgrossamt]').val('0');
        }
        if (flag == 'uncheck') {

            $("table[id*=tbl_SrvGrp] tr:has(td)").each(function (e) {
                $(this).closest("tr").find("input[type=text][id*=txtsrvgrppcnt]").val('0');
            });
            $("table[id*=tbl_srv_type] tr:has(td)").each(function (e) {
                $(this).closest("tr").find("input[type=text][id*=txtsrvTypepcnt]").val('0');
            });

        }
        document.getElementById('' + ctrlcom + '_ReceiptControl2_ucdueauth_txtSearchControl').value = '';
        document.getElementById('' + ctrlcom + '_ReceiptControl2_ucdueauth__hiddenID').value = '';
        document.getElementById('' + ctrlcom + '_ReceiptControl2_ucdueauth__hiddenText').value = '';
        var val = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatgrossamt');
        if (document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnDocName').value == 'IPFINAL') {
            document.getElementById('' + ctrlcom + '_txtConcAmt').value = 0;
            CalculateConcession();
        }
        else if (document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnDocName').value == 'SUPPBILL') {
            CalculateSupplementaryConcession('Cash');
        }
        else {
            PatCalculateConcessionTransaction(val, 'Amount');
        }
    }
    if (document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnDocName').value == 'REG') {
        if (document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnRegconSetting').value == "No") {
            $('#ctl00_ContentPlaceHolder1_ReceiptControl2_txtpatdis')[0].disabled = true;
            $('#ctl00_ContentPlaceHolder1_ReceiptControl2_txtpatgrossamt')[0].disabled = true;
        }
    }
    if (document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnDocName').value == 'OPQUICK') {
        var _reg = 0;
        $("table[id*=gvServices] tr:has(td)").each(function (e) {
            var SrvName = $(this).closest('tr').find('[id*=txtServiceName]').val();
            if (SrvName == 'REGISTRATION') {
                _reg = 1;
            }
        });
        if (document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnRegconSetting').value == "No" && _reg == 1) {
            $('#ctl00_ContentPlaceHolder1_ReceiptControl2_txtpatdis')[0].disabled = true;
            $('#ctl00_ContentPlaceHolder1_ReceiptControl2_txtpatgrossamt')[0].disabled = true;
        }
    }*/
}
function CheckCardDisable2(obj, flag) {
    var id = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatdis');
    var _txtpatdis = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatdis').value;
    var _txtpatgrossamt = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatgrossamt').value;
    if (_txtpatdis == '' || _txtpatdis == null || _txtpatdis == undefined) { _txtpatdis = 0; }
    if (_txtpatgrossamt == '' || _txtpatgrossamt == null || _txtpatgrossamt == undefined) { _txtpatgrossamt = 0; }
    if (parseFloat(_txtpatgrossamt) > 0 && parseFloat(_txtpatdis) > 0) {
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatdis').value = 0;
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatgrossamt').value = 0;
        PatCalculateConcessionTransactionPerCentage(id, 'Perecent');
    }
    if (document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatgrossamt').value > 0) {

    }
    if ($('[id*=ddlDiscountType]')[0].value == 1) {
        $('[id*=txtpatdis]')[0].disabled = false;
        $('[id*=txtpatgrossamt]')[0].disabled = false;
        $('[id*=txtgrossamttotal]')[0].disabled = true;
        if (flag != 'Dont' && flag != undefined && flag != '') {
            $('[id*=txtpatdis]').val('0');
            $('[id*=txtDiscAmt]').val('0');
            $('[id*=txtPNAmt]').val($('[id*=txtPamt]').val());
        }
    }
    else if ($('[id*=ddlDiscountType]')[0].value == 0) {
        $('[id*=txtpatdis]')[0].disabled = true;
        $('[id*=txtpatgrossamt]')[0].disabled = true;
        if (flag != 'Dont' && flag != undefined && flag != '') {
            $('[id*=txtpatdis]').val('0');
            $('[id*=txtpatgrossamt]').val('0');
        }
        if (flag == 'uncheck') {

            $("table[id*=tbl_SrvGrp] tr:has(td)").each(function (e) {
                $(this).closest("tr").find("input[type=text][id*=txtsrvgrppcnt]").val('0');
            });
            $("table[id*=tbl_srv_type] tr:has(td)").each(function (e) {
                $(this).closest("tr").find("input[type=text][id*=txtsrvTypepcnt]").val('0');
            });

        }
        document.getElementById('' + ctrlcom + '_ReceiptControl2_ucdueauth_txtSearchControl').value = '';
        document.getElementById('' + ctrlcom + '_ReceiptControl2_ucdueauth__hiddenID').value = '';
        document.getElementById('' + ctrlcom + '_ReceiptControl2_ucdueauth__hiddenText').value = '';
        var val = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatgrossamt');
        if (document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnDocName').value == 'IPFINAL') {
            document.getElementById('' + ctrlcom + '_txtConcAmt').value = 0;
            CalculateConcession();
        }
        else if (document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnDocName').value == 'SUPPBILL') {
            CalculateSupplementaryConcession('Cash');
        }
        else {
            PatCalculateConcessionTransaction(val, 'Amount');
        }
    }
    if (document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnDocName').value == 'REG') {
        if (document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnRegconSetting').value == "No") {
            $('#ctl00_ContentPlaceHolder1_ReceiptControl2_txtpatdis')[0].disabled = true;
            $('#ctl00_ContentPlaceHolder1_ReceiptControl2_txtpatgrossamt')[0].disabled = true;
        }
    }
    if (document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnDocName').value == 'OPQUICK') {
        var _reg = 0;
        $("table[id*=gvServices] tr:has(td)").each(function (e) {
            var SrvName = $(this).closest('tr').find('[id*=txtServiceName]').val();
            if (SrvName == 'REGISTRATION') {
                _reg = 1;
            }
        });
        if (document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnRegconSetting').value == "No" && _reg == 1) {
            $('#ctl00_ContentPlaceHolder1_ReceiptControl2_txtpatdis')[0].disabled = true;
            $('#ctl00_ContentPlaceHolder1_ReceiptControl2_txtpatgrossamt')[0].disabled = true;
        }
    }
}

function PatCalculateConcessionTransaction(obj, val) {


    TestCondition(val, obj);
    if (getParameterByName("MODE") != "VIEW" && getParameterByName("MODE") != "VIEW_OP") {
        var grossamt = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtgrosstotal');
        var discamt = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatgrossamt');
        var CurDisPer = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatdis');

        CurDisPer.value = typeof CurDisPer.value == "string" ? (CurDisPer.value.trim() == "" ? "" : CurDisPer.value) : (typeof CurDisPer.value == "number" ? CurDisPer.value : "0");
        if (CurDisPer.value >= 100) {
        } else {
            var taxamt = document.getElementById('' + ctrlcom + '_ReceiptControl2_txttaxamt').value;
            if (taxamt == '' || taxamt == undefined || taxamt == null || taxamt == NaN || taxamt == "NaN") { taxamt = 0; }
            var PatGrossAmt = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatgross').value;
            if (PatGrossAmt == undefined || PatGrossAmt == '' || PatGrossAmt == null || PatGrossAmt == "NaN") { PatGrossAmt = 0; }
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatNet').value = PatGrossAmt;
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtTotalNet').value = PatGrossAmt;
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatdue').value = PatGrossAmt;
            if (document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnisallowgst').value.toUpperCase() == "YES" && taxamt > 0) {
                var totaldue = 0;
                totaldue = (parseFloat(PatGrossAmt) + parseFloat(taxamt));
                document.getElementById('' + ctrlcom + '_ReceiptControl2_txtTotalDue').value = totaldue;
            }
            else {
                document.getElementById('' + ctrlcom + '_ReceiptControl2_txtTotalDue').value = PatGrossAmt;
            }
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatientReceiptAmt').value = '0';
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtTotalReciptAmt').value = '0';
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtreceiptAmount').value = '0';
            ClearTransactionGrid();
        }
        if (parseFloat(CurDisPer.value) > 100) {
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatdis').value = 100;
        }
        if (document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnDocName').value == 'REG') {

            if (val == 'Perecent') {
                CalculateregDiscount();
            }
            else {
                CalculateregDiscountAmount();
            }
        }
        else if (document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnDocName').value == 'OPQUICK' || document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnDocName').value == 'OP' || document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnDocName').value == 'Cons') {
            if (val == 'Perecent') {
                CalculateOPRegConc(val, obj);
            }
            else {
                CalculateAmountConc(obj, val);
            }
        }
        else if (document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnDocName').value == 'IPFINAL') {
            CalculateConcession('Cash', val);
        }
        else if (document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnDocName').value == 'SUPPBILL') {
        }
        else {
            CalculateAmountConc(obj, val);
        }
        onRedColors();
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtCurrAmt').value = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatdue').value;
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtreqamtkyd').value = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatdue').value;
    }
}

/* Check/Uncheck mutiple discounts grid hide/show functionality */
function OnMultipleDiscGrid() {

    var chkmultiple = document.getElementById('' + ctrlcom + '_ReceiptControl2_chkismultiple');
    $("table[id*=gvMultipleConcession] tr:has(td)").each(function (i, j) {
        $(this).remove();

    });
    if (document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnDocName').value == 'IPFINAL') {
        $("table[id*=gvMultipleConcession] tr:has(td)").each(function (i, j) {
            $(this).closest('tr').find("[id*=ddlModes]").attr('disabled', true);
        });
    }
    else if (document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnDocName').value == 'OPQUICK' || document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnDocName').value == 'OP') {
        if (document.getElementById('' + ctrlcom + '_UCServices_hdnSrvFormName').value == 'OPQUICK' || document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnDocName').value == 'Cons' || document.getElementById('' + ctrlcom + '_UCServices_hdnSrvFormName').value == 'OP') {
            if (document.getElementById('' + ctrlcom + '_UCServices_gvServices').rows.length > 0) {
            }
            else {
                if (chkmultiple.checked == true) {
                    $(".stoast").toastText("warning", "Please Select Atleast One Service/Consultation to give Multiple Discounts!.", 5, 2);
                    chkmultiple.checked = false;
                    return false;
                }
            }
        }
    }
    if (document.getElementById('' + ctrlcom + '_ReceiptControl2_gvMultipleConcession').rows.length == 1) {
        fn_AddRowWithDetais();
    } 
    if (chkmultiple.checked == true) {
        
        $('#ctl00_ContentPlaceHolder1_ReceiptControl2_Div2')[0].style.display = 'block';
        document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlDiscountType').value = 0;
        document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlDiscountType').disabled = true;
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatdis').disabled = true;
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatgrossamt').disabled = true;
        CheckCardDisable(document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlDiscountType'), 'Dont');
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatdis').value = '0';
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatgrossamt').value = '0';
        var obj = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatdis')
        PatCalculateConcessionTransactionPerCentage(obj, 'Perecent');
        ColorCodesForMultiDiscGrid(1);
    }
    else {
        
        if (document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnDocName').value == 'IPFINAL') { }
        else { ClearAllConcessionControl('Dont'); }
        $('#ctl00_ContentPlaceHolder1_ReceiptControl2_Div2')[0].style.display = 'none';
        if (chkmultiple.checked == true) {
            document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlDiscountType').disabled = true;
        }
        else {
             var con_ruleId = $('#' + ctrlcom + '_UCServices_hdnconruleid').val();
                    if (con_ruleId == undefined || con_ruleId == null || con_ruleId == '') { con_ruleId = 0; }
                        var hccard = document.getElementById('' + ctrlcom + '_umrPatientDetails_HdnHealthcardno').value;
                    if (hccard == "" || hccard == undefined || hccard == null) { hccard = 0; }
                 
                    if (con_ruleId > 0 ||  hccard != 0) {

                    }
                    else {

            document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlDiscountType').disabled = false;
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatdis').disabled = false;
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatgrossamt').disabled = false;
            }
        }
        document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlDiscountType').value = 0;
        CheckCardDisable(document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlDiscountType'), 'uncheck');


    }
    if (document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnDocName').value == 'OP' || document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnDocName').value == 'Cons') {
        if (document.getElementById('' + ctrlcom + '_uccorporate_ddlPaymentBy').value == '2') {
            CalculateCreditLimitAmt();
        }
    }
    if (document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnDocName').value != 'REG') {
    if (chkmultiple.checked == false) {

     $("table[id*=gvServices] tr:has(td)").each(function (e) {
    
          //  $(this).closest("tr").find("[id*=txtDiscP]")[0].disabled = true;

            $(this).closest("tr").find("[id*=txtDiscP]").attr("disabled", true);
            $(this).closest("tr").find("[id*=txtDiscAmt]")[0].disabled = true;
            $(this).closest("tr").find("[id*=txtDiscAmt]").val('');
            $(this).closest("tr").find("[id*=txtDiscP]").val('');
            $(this).closest("tr").find("[id*=txthcPer]")[0].disabled = true;
            $(this).closest("tr").find("[id*=txtHcAmt]")[0].disabled = true;
            $(this).closest("tr").find("[id*=txthcPer]").val('0');
            $(this).closest("tr").find("[id*=txtHcAmt]").val('0');
            $(this).closest("tr").find("[id*=txtmaPer]")[0].disabled = true;
            $(this).closest("tr").find("[id*=txtmgAmt]")[0].disabled = true;
            $(this).closest("tr").find("[id*=txtmaPer]").val('0');
            $(this).closest("tr").find("[id*=txtmgAmt]").val('0');
            $(this).closest("tr").find("[id*=txtstPer]")[0].disabled = true;
            $(this).closest("tr").find("[id*=txtstAmt]")[0].disabled = true;
            $(this).closest("tr").find("[id*=txtstPer]").val('0');
            $(this).closest("tr").find("[id*=txtstAmt]").val('0');
            $(this).closest("tr").find("[id*=txtebPer]")[0].disabled = true;
            $(this).closest("tr").find("[id*=txtebAmt]")[0].disabled = true;
            $(this).closest("tr").find("[id*=txtebPer]").val('0');
            $(this).closest("tr").find("[id*=txtebAmt]").val('0');
        

        
    });
    CalculateGridAmt(0);
    }
    }

}
/* Clearing of data in OP services usercontrol */
function ClearAllConcessionControl(flag) {
    $("table[id*=gvServices] tr:has(td)").each(function (e) {
        if ($(this).closest('tr').find("input[type=hidden][id*=hdnServiceID]").val() > 0 && parseFloat($(this).closest('tr').find("[id*=txtAmount]").val()) > 0) {
            // $(this).closest("tr").find("[id*=txtDiscP]")[0].disabled = false;
            // $(this).closest("tr").find("[id*=txtDiscAmt]")[0].disabled = false;
            if (flag != 'Dont') {
              var con_ruleId = $('#' + ctrlcom + '_UCServices_hdnconruleid').val();
                if (con_ruleId == undefined || con_ruleId == null || con_ruleId == '')
                { con_ruleId = 0; }
                if (con_ruleId>0) { }
            else{
            $(this).closest("tr").find("[id*=txtPNAmt]").val(parseFloat($(this).closest("tr").find("[id*=txtPamt]").val()));
            }
            }
            if (flag != 'Dont') {
                $(this).closest("tr").find("[id*=txtDiscP]").val('0');
                $(this).closest("tr").find("[id*=txtDiscAmt]").val('0');
            }
            $(this).closest("tr").find("[id*=txthcPer]")[0].disabled = true;
            $(this).closest("tr").find("[id*=txtHcAmt]")[0].disabled = true;
            $(this).closest("tr").find("[id*=txthcPer]").val('0');
            $(this).closest("tr").find("[id*=txtHcAmt]").val('0');
            $(this).closest("tr").find("[id*=txtmaPer]")[0].disabled = true;
            $(this).closest("tr").find("[id*=txtmgAmt]")[0].disabled = true;
            $(this).closest("tr").find("[id*=txtmaPer]").val('0');
            $(this).closest("tr").find("[id*=txtmgAmt]").val('0');
            $(this).closest("tr").find("[id*=txtstPer]")[0].disabled = true;
            $(this).closest("tr").find("[id*=txtstAmt]")[0].disabled = true;
            $(this).closest("tr").find("[id*=txtstPer]").val('0');
            $(this).closest("tr").find("[id*=txtstAmt]").val('0');
            $(this).closest("tr").find("[id*=txtebPer]")[0].disabled = true;
            $(this).closest("tr").find("[id*=txtebAmt]")[0].disabled = true;
            $(this).closest("tr").find("[id*=txtebPer]").val('0');
            $(this).closest("tr").find("[id*=txtebAmt]").val('0');
            if (flag != 'Dont') {
                $(this).closest("tr").find("[id*=txtRulePer]")[0].disabled = true;
                $(this).closest("tr").find("[id*=txtcncrlAmt]")[0].disabled = true;
                $(this).closest("tr").find("[id*=txtRulePer]").val('0');
                $(this).closest("tr").find("[id*=txtcncrlAmt]").val('0');
            }

        }
    });
    CalculateGridAmt(0);
}

/* Mandatory fields in multiple discounts grid */
function ColorCodesForMultiDiscGrid(CurrentRowIndexNew) {
    $("table[id*=gvMultipleConcession] tr:has(td)").each(function (e) {
        var cardno = $("table[id$=gvMultipleConcession] tr").filter(":eq(" + CurrentRowIndexNew + ")").find('[id*=txtcardno]').val();
        var authname = $('table[id*=gvMultipleConcession] tr').filter(':eq(' + CurrentRowIndexNew + ')').find("[id*=txtAutherizedPersion]").val();
        var ddldiscid = $('table[id*=gvMultipleConcession] tr').filter(':eq(' + CurrentRowIndexNew + ')').find("[id*=ddlMultiDiscounttype]").val();
        var txtCRemks = $('table[id*=gvMultipleConcession] tr').filter(':eq(' + CurrentRowIndexNew + ')').find("[id*=txtCRemks]").val()
        if (ddldiscid != "0") {
            $('table[id*=gvMultipleConcession] tr').filter(':eq(' + CurrentRowIndexNew + ')').find("[id*=ddlMultiDiscounttype]").removeClass('red');
        }
        else {
            $('table[id*=gvMultipleConcession] tr').filter(':eq(' + CurrentRowIndexNew + ')').find("[id*=ddlMultiDiscounttype]").addClass('red');
        }
        if (cardno != "") {
            $("table[id$=gvMultipleConcession] tr").filter(":eq(" + CurrentRowIndexNew + ")").find('[id*=txtcardno]').removeClass('red');
        }
        else {
            if (ddldiscid == "0") {
                $("table[id$=gvMultipleConcession] tr").filter(":eq(" + CurrentRowIndexNew + ")").find('[id*=txtcardno]').removeClass('red');
            }
            else {
                $("table[id$=gvMultipleConcession] tr").filter(":eq(" + CurrentRowIndexNew + ")").find('[id*=txtcardno]').addClass('red');
            }
        }
        if (authname != "") {
            $('table[id*=gvMultipleConcession] tr').filter(':eq(' + CurrentRowIndexNew + ')').find("[id*=txtAutherizedPersion]").removeClass('red');
        }
        else {
            if (ddldiscid == "0") {
                $('table[id*=gvMultipleConcession] tr').filter(':eq(' + CurrentRowIndexNew + ')').find("[id*=txtAutherizedPersion]").removeClass('red');
            }
            else {
                $('table[id*=gvMultipleConcession] tr').filter(':eq(' + CurrentRowIndexNew + ')').find("[id*=txtAutherizedPersion]").addClass('red');
            }
        }

    });
}
/* assign disc auth pat data whenever discount type cash row is added in multiple dicounts grid */
function onsetDiscAuthThroughMultiDisc() {
    var len = $("table[id$=gvMultipleConcession] tr").find('[id*=ddlMultiDiscounttype]').length;
    if (len > 0) {
        for (var i = 0; i < len; i++) {
            var _ddlValue = $($("table[id$=gvMultipleConcession] tr").find('[id*=ddlMultiDiscounttype]')[i]).val();
            if (_ddlValue == "1") {
                var authid = $($("table[id$=gvMultipleConcession] tr").find('[id*=hdnauthid]')[i]).val();
                var authname = $($("table[id$=gvMultipleConcession] tr").find('[id*=txtAutherizedPersion]')[i]).val();
                if (authid == undefined || authid == null || authid == '') { authid = 0; }
                if (authname == undefined || authname == null || authname == '') { authname = ''; }
                document.getElementById('' + ctrlcom + '_ReceiptControl2_ucdueauth_txtSearchControl').value = authname;
                document.getElementById('' + ctrlcom + '_ReceiptControl2_ucdueauth__hiddenText').value = authname;
                document.getElementById('' + ctrlcom + '_ReceiptControl2_ucdueauth__hiddenID').value = authid;
                document.getElementById('' + ctrlcom + '_ReceiptControl2_ucdueauth_txtSearchControl').className = 'grey';

            }
        }
    }
    OnDiscAuthColorCode();
}
/* creation of multi discounts row */
function CreateMultiDiscgirdRow() {
    var cnt = 0;
    $("table[id*=gvMultipleConcession] tr:has(td)").each(function (e) {
        var cardno = $(this).closest('tr').find('[id*=txtcardno]').val();
        var authname = $(this).closest('tr').find("[id*=txtAutherizedPersion]").val();
        var authid = $(this).closest('tr').find("[id*=hdnauthid]").val();
        var ddldiscid = $(this).closest('tr').find("[id*=ddlMultiDiscounttype]").val();
        if (authid == undefined || authid == null || authid == '') { authid = 0; }
        if (authname == undefined || authname == null || authname == '') { authname = ''; }
        if (ddldiscid == 0) {
            cnt++;
        }
        if (ddldiscid != 0) {
            if (authname == '' || authid == 0) {
                cnt++;
            }
        }
    });
    if (cnt == 0) {
        fn_AddRowWithDetais();
    }
}
/* Discount Authorization Data Binding on selection of lookup click in multiple dicounts grid */

var gridControlAuth;
function onauthbind(obj) {
    var gridid = document.getElementById('' + ctrlcom + '_ReceiptControl2_gvMultipleConcession');
    if (obj > 1) {
        CurrentRowIndex = obj;
    } else {
        var PerRowIndex = obj.parentElement.parentElement.parentElement.parentElement.rowIndex;
        CurrentRowIndex = PerRowIndex;
    }
    if ($('table[id*=gvMultipleConcession] tr').filter(':eq(' + CurrentRowIndex + ')').find("[id*=ddlMultiDiscounttype]").val() == 0 || $('table[id*=gvMultipleConcession] tr').filter(':eq(' + CurrentRowIndex + ')').find("[id*=ddlMultiDiscounttype]").val() == '') {
        $(".stoast").toastText("warning", "Please Select Discount Type", 5, 2);
        return false;
    }
    var txtPersentage = $('table[id*=gvMultipleConcession] tr').filter(':eq(' + CurrentRowIndex + ')').find("[id*=txtPersentage]").val();
    var txtAmount = $('table[id*=gvMultipleConcession] tr').filter(':eq(' + CurrentRowIndex + ')').find("[id*=txtAmount]").val();
    if (txtPersentage == 0 || txtPersentage == undefined || txtPersentage == 'NaN' || txtPersentage == null || txtPersentage == '') {
        $(".stoast").toastText("warning", "Please Select Discount Percentage!.", 5, 2);
        $('table[id*=gvMultipleConcession] tr').filter(':eq(' + CurrentRowIndex + ')').find("[id*=txtPersentage]").focus();
        return false;
    }
    if (txtAmount == 0 || txtAmount == undefined || txtAmount == 'NaN' || txtAmount == null || txtAmount == '') {
        $(".stoast").toastText("warning", "Please Select Discount Amount!.", 5, 2);
        $('table[id*=gvMultipleConcession] tr').filter(':eq(' + CurrentRowIndex + ')').find("[id*=txtAmount]").focus();
        return false;
    }
    var index = gridid.rows.length - 1;
    $('[id*=DivAuth]')[0].style.display = 'block';
    var param1 = param1 || {};
    var cName = 'AUTH_NAME';
    var pText = '';
    param1.dataKey = "AUTH_ID";
    param1.pageSize = 10;
    param1.pageNum = 1;
    var Auth_trans_for = 1;
    param1.defaultWSParams = { _cName: cName, _pText: pText, pageNum: 1, pageSize: 10, _advSrch: '', Auth_trans_for: Auth_trans_for };
    $("table[id*=gvMultipleConcession] tr:has(td)").each(function (e) {
        var type = $("table[id$=gvMultipleConcession] tr").filter(":eq(" + index + ")").find('[id*=ddlMultiDiscounttype]').val();
    });
    param1.wsPath = "Private/FrontOffice/OPDBILLNEW.aspx/BindAuthLookup";
    param1.wsFilterPath = "Private/FrontOffice/OPDBILLNEW.aspx/BindAuthLookup";
    param1.template = ["AUTH_CD*AUTH_CD"
                        , "AUTH_NAME*AUTH_NAME"
                        ];
    param1.header = [{ col: "Auth cd", sort: false, filter: true }
                        , { col: "Auth Name", sort: false, filter: true }
                        ];
    param1.enablePaging = true;
    param1.enableTrace = false;
    param1.enableFilter = true;
    param1.enableCheckbox = false;
    param1.enableSorting = true;
    param1.RowNo = true;
    param1.tableTemplate = true;
    param1.enableDMS = false;
    param1.rowClick = function (key) {
        OnAuthselection(key, CurrentRowIndex);
    };
    gridControlAuth = $("#divauthpopup").jtable(param1);
    return false;
}
/* Selection of auth person, Details should populate */
var Auth_Cncn_Amt = 0; var remain_cncn_amt = 0; var _allow = 0;
function OnAuthselection(jdata, CurrentRowIndex) {


    var gridid = document.getElementById('' + ctrlcom + '_ReceiptControl2_gvMultipleConcession');
    var index = CurrentRowIndex;
    var ddldscntype = $("table[id$=gvMultipleConcession] tr").filter(":eq(" + CurrentRowIndexNew + ")").find('[id*=ddlMultiDiscounttype]').val();
    var cardno = $("table[id$=gvMultipleConcession] tr").filter(":eq(" + CurrentRowIndexNew + ")").find('[id*=txtcardno]').val();
    var ddlPer = $("table[id$=gvMultipleConcession] tr").filter(":eq(" + CurrentRowIndexNew + ")").find('[id*=txtPersentage]').val();
    var ddlAmt = $("table[id$=gvMultipleConcession] tr").filter(":eq(" + CurrentRowIndexNew + ")").find('[id*=txtAmount]').val();
    ddlPer = ddlPer = ddlPer == '' ? 0 : ddlPer;
    ddlAmt = ddlAmt = ddlAmt == '' ? 0 : ddlAmt;

    if (ddlPer == '' || ddlPer == null || ddlPer == undefined) { ddlPer = 0; }

    if (ddlAmt == '' || ddlAmt == null || ddlAmt == undefined) { ddlAmt = 0; }


    if (ddldscntype == "2" || ddldscntype == "5" || ddldscntype == "6") {
        var aletmesg = '';
        if (ddldscntype == "2") {
            aletmesg = 'Health Card';
        }
        if (ddldscntype == "5") {
            aletmesg = 'Event';
        }
        if (ddldscntype == "6") {
            aletmesg = 'Concession Rule';
        }
        if (cardno == "") {
            $(".stoast").toastText("warning", "Please Select '" + aletmesg + "'", 5, 2);
            $('[id*=DivAuth]')[0].style.display = 'none';
            return false;
        }
    }
    var form_name = $('#ctl00_ContentPlaceHolder1_umrPatientDetails_hdnFormName').val();
    var own_bill_auth = '';
    var own_auth_name = '';
    if (form_name == 'OP') {
        own_bill_auth = $('#ctl00_ContentPlaceHolder1_UcOdrPsyn__hiddenID').val();
        own_auth_name = document.getElementById('' + ctrlcom + '_umrPatientDetails_lblrefdoc').innerHTML;
        var name = own_auth_name.split('-');
        own_auth_name = name[0];
    }
    else if (form_name == 'Cons') {
        own_bill_auth = $('#ctl00_ContentPlaceHolder1_uccorporate_hdnarrdocid').val();
        own_auth_name = document.getElementById('' + ctrlcom + '_umrPatientDetails_lblrefdoc').innerHTML;
        var name = own_auth_name.split('-');
        own_auth_name = name[0];
    }
    var auth_pcnt = 0;
    var auth_period = 115;
    var auth_remain_amt = 0;
    var Auth_amount_fr_prd = 0;
    var con_on_his_bills = 'N';

    auth_pcnt = jdata.AUTH_FOR_CONCESSION_PERCENT;
    auth_period = jdata.AUTH_FOR_CONCESSION_PERIOD;
    auth_remain_amt = jdata.REMAINING_AUTH_AMOUNT;
    Auth_amount_fr_prd = jdata.AUTH_FOR_CONCESSION_PERIOD_AMOUNT;
    con_on_his_bills = jdata.IS_CONCESSION_OWN_PATIENTS_ONLY;

    if (con_on_his_bills == '') { con_on_his_bills = 'N'; }

    if (parseFloat(auth_pcnt) > 0) { } else { auth_pcnt = 0; }
    if (parseFloat(auth_remain_amt) > 0) { } else { auth_remain_amt = 0; }
    if (parseFloat(Auth_amount_fr_prd) > 0) { } else { Auth_amount_fr_prd = 0; }
    //   if (_allow == 0) {
    $("table[id*=gvMultipleConcession] tr:has(td)").each(function (e) {

        var dueper = ddlPer;
        var dueamt = ddlAmt;
        if (con_on_his_bills == 'Y') { /* authorization on his bills only  Start*/
            if (jdata.AUTH_NAME == own_auth_name) {
                if (parseFloat(dueper) <= parseFloat(auth_pcnt) && parseFloat(dueamt) <= parseFloat(auth_remain_amt)) { /* Due Percent and authorized percent checking */
                    $("table[id$=gvMultipleConcession] tr").filter(":eq(" + index + ")").find('[id*=txtAutherizedPersion]').val(jdata.AUTH_NAME);
                    $('table[id*=gvMultipleConcession] tr').filter(':eq(' + index + ')').find("input[type=hidden][id*=hdnauthid]").val(jdata.AUTH_ID);
                    $("table[id$=gvMultipleConcession] tr").filter(":eq(" + index + ")").find('[id*=txtAutherizedPersion]').removeClass('red');
                }
                else if (parseFloat(dueper) <= parseFloat(auth_pcnt) && parseFloat(dueamt) > parseFloat(auth_remain_amt)) {
                    $(".stoast").toastText("warning", "This Authorized User Authorization Concession Amount exceeding Concession Limits, So Please Contact Administratior", 5, 3);
                    $("table[id$=gvMultipleConcession] tr").filter(":eq(" + index + ")").find('[id*=txtAutherizedPersion]').val('');
                    return false;
                }
                else if (parseFloat(dueper) > parseFloat(auth_pcnt)) {
                    $(".stoast").toastText("warning", "This Authorized user  can give maximum " + auth_pcnt + " % on Transaction ", 5, 3);
                    $("table[id$=gvMultipleConcession] tr").filter(":eq(" + index + ")").find('[id*=txtAutherizedPersion]').val('');
                    return false;
                }
            }
            else {
                $(".stoast").toastText("warning", "Authorization Name Mismatch So, Please Contact Administrator ", 5, 3);
                $("table[id$=gvMultipleConcession] tr").filter(":eq(" + index + ")").find('[id*=txtAutherizedPersion]').val('');
                return false;
            }
        } /* authorization on his bills only  Ends*/
        else if (con_on_his_bills == 'N') { /* authorization on ANy bills   Starts*/
            if (parseFloat(dueper) <= parseFloat(auth_pcnt) && parseFloat(dueamt) <= parseFloat(auth_remain_amt)) { /* Due Percent and authorized percent checking */
                $("table[id$=gvMultipleConcession] tr").filter(":eq(" + index + ")").find('[id*=txtAutherizedPersion]').val(jdata.AUTH_NAME);
                $('table[id*=gvMultipleConcession] tr').filter(':eq(' + index + ')').find("input[type=hidden][id*=hdnauthid]").val(jdata.AUTH_ID);
                $("table[id$=gvMultipleConcession] tr").filter(":eq(" + index + ")").find('[id*=txtAutherizedPersion]').removeClass('red');
            }
            else if (parseFloat(dueper) <= parseFloat(auth_pcnt) && parseFloat(dueamt) > parseFloat(auth_remain_amt)) {
                $(".stoast").toastText("warning", "This Authorized User Authorization Concession Amount exceeding Concession Limits, So Please Contact Administratior", 5, 3);
                $("table[id$=gvMultipleConcession] tr").filter(":eq(" + index + ")").find('[id*=txtAutherizedPersion]').val('');
                return false;
            }
            else if (parseFloat(dueper) > parseFloat(auth_pcnt)) {
                $(".stoast").toastText("warning", "This Authorized user  can give maximum " + auth_pcnt + " % on Transaction ", 5, 3);
                $("table[id$=gvMultipleConcession] tr").filter(":eq(" + index + ")").find('[id*=txtAutherizedPersion]').val('');
                return false;
            }
        }
        $("table[id$=gvMultipleConcession] tr").filter(":eq(" + index + ")").find('[id*=txtPersentage]')[0].disabled = true;
        $("table[id$=gvMultipleConcession] tr").filter(":eq(" + index + ")").find('[id*=txtAmount]')[0].disabled = true;
        $("table[id$=gvMultipleConcession] tr").filter(":eq(" + index + ")").find('[id*=txtcardno]')[0].disabled = true;
        $("table[id$=gvMultipleConcession] tr").filter(":eq(" + index + ")").find('[id*=ddlMultiDiscounttype]')[0].disabled = true;
        $("table[id$=gvMultipleConcession] tr").filter(":eq(" + index + ")").find('[id*=ddlModes]')[0].disabled = true;
        $("table[id$=gvMultipleConcession] tr").filter(":eq(" + index + ")").find('[id*=txtAutherizedPersion]')[0].disabled = true;
    });
    // }
    $('[id*=DivAuth]')[0].style.display = 'none';
    var hdnMultiPercentage = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatdis').value;
    if (hdnMultiPercentage == '' || hdnMultiPercentage == undefined || hdnMultiPercentage == null) { hdnMultiPercentage = '0'; }
    if (parseFloat(hdnMultiPercentage) > 100) {
        $(".stoast").toastText("warning", "100% Concession is over", 5, 2);
        return false;
    }
    else {
        CreateMultiDiscgirdRow();
    }
    onsetDiscAuthThroughMultiDisc();
    OnDiscAuthColorCode();

}

/* dynamic row creation of multiple payment modes like (cash,credit,debit,cheque,neft etc..,) */
var recindex = 0;
var rowColor = 0;
function fn_AddFilterRow1() {

    var gvnewvisit = document.getElementById('' + ctrlcom + '_ReceiptControl2_gvReceiptDetails');
    var rowIndex = gvnewvisit.rows.length;
    var checkRowIndex = rowIndex - 1;
    var gridindex = 1;

    $("table[id*=gvReceiptDetails] tr:has(td)").each(function (e) {
        if (gridindex == checkRowIndex) {
            if ($(this).closest('tr').find("input[type=text]").val() == '')
                return false;
        }
        gridindex++;
    });
    var newRow = gvnewvisit.insertRow(rowIndex);
    if (rowColor == 0) {
        newRow.className = 'gridAlternaterow'
        rowColor++;
    }
    else {
        newRow.className = 'gridrow'
        rowColor = 0;
    }

    newCell = newRow.insertCell(0);
    var DivButton = document.createElement('div');
    var BtnDeleteSpan = document.createElement('span');
    var imgBtnDelete = document.createElement('IMG');
    imgBtnDelete.id = 'imgBtnDelete' + recindex;
    imgBtnDelete.style.cursor = 'pointer';
    imgBtnDelete.onclick = function () { return RemoveService(this); };
    imgBtnDelete.src = _iniUrl + 'Assets/Grid_Icons/delete.png';
    imgBtnDelete.title = 'Remove?';
    BtnDeleteSpan.appendChild(imgBtnDelete);
    DivButton.appendChild(BtnDeleteSpan);
    newCell.appendChild(DivButton);

    var BtnEditSpan = document.createElement('span');
    var imgBtnEdit = document.createElement('IMG');
    imgBtnEdit.id = 'imgBtnEdit' + recindex;
    imgBtnEdit.style.cursor = 'pointer';
    imgBtnEdit.title = 'Edit';
    imgBtnEdit.onclick = function () { return AssignRowValues1(this); return false; };
    imgBtnEdit.src = _iniUrl + 'Assets/Grid_Icons/edit_icon.gif';

    BtnEditSpan.appendChild(imgBtnEdit);
    DivButton.appendChild(BtnEditSpan);
    DivButton.style.float = 'left';
    if (getParameterByName("MODE") == "VIEW") {
        newCell.style.display = 'none';
    }
    else {
        newCell.style.display = 'table-cell';
    }
    newCell.appendChild(DivButton);


    var newCell = newRow.insertCell(1);
    var hdnrecmodeId = document.createElement('input'); hdnrecmodeId.type = 'hidden'; hdnrecmodeId.id = 'hdnrecmodeId' + recindex; newCell.appendChild(hdnrecmodeId);
    var hdnpaymentcommid = document.createElement('input'); hdnpaymentcommid.type = 'hidden'; hdnpaymentcommid.id = 'hdnpaymentcommid' + recindex; newCell.appendChild(hdnpaymentcommid);
    var hdnpaymentappgroupid = document.createElement('input'); hdnpaymentappgroupid.type = 'hidden'; hdnpaymentappgroupid.id = 'hdnpaymentappgroupid' + recindex; newCell.appendChild(hdnpaymentappgroupid);

    var __RECEIPT_MODE_ID = document.createElement('input'); __RECEIPT_MODE_ID.type = 'hidden'; __RECEIPT_MODE_ID.id = '__RECEIPT_MODE_ID'; newCell.appendChild(__RECEIPT_MODE_ID);
    var hdnbankid = document.createElement('input'); hdnbankid.type = 'hidden'; hdnbankid.id = 'hdnbankid' + recindex; newCell.appendChild(hdnbankid);
    var __BANK_ID = document.createElement('input'); __BANK_ID.type = 'hidden'; __BANK_ID.id = '__BANK_ID' + recindex; ; newCell.appendChild(__BANK_ID);
    var hdncardtypeId = document.createElement('input'); hdncardtypeId.type = 'hidden'; hdncardtypeId.id = 'hdncardtypeId' + recindex; newCell.appendChild(hdncardtypeId);
    var __CARD_TYPE_ID = document.createElement('input'); __CARD_TYPE_ID.type = 'hidden'; __CARD_TYPE_ID.id = '__CARD_TYPE_ID' + recindex; ; newCell.appendChild(__CARD_TYPE_ID);

    var hdnis_adjested_o = document.createElement('input'); hdnis_adjested_o.type = 'hidden'; hdnis_adjested_o.id = 'hdnis_adjested_o' + recindex; ; newCell.appendChild(hdnis_adjested_o);

    var hdncurrId = document.createElement('input'); hdncurrId.type = 'hidden'; hdncurrId.id = 'hdncurrId' + recindex; newCell.appendChild(hdncurrId);
    var lblrecmode = document.createElement('label'); lblrecmode.id = 'lblrecmode' + recindex; newCell.align = "left"; newCell.appendChild(lblrecmode);
    var hdncalamtwithsrvchrg = document.createElement('input'); hdncalamtwithsrvchrg.type = 'hidden'; hdncalamtwithsrvchrg.id = "hdncalamtwithsrvchrg" + recindex; newCell.appendChild(hdncalamtwithsrvchrg);
    var hdnsrvcharg = document.createElement('input'); hdnsrvcharg.type = 'hidden'; hdnsrvcharg.id = "hdnsrvcharg" + recindex; newCell.appendChild(hdnsrvcharg);
    var hdnsrvchargamt = document.createElement('input'); hdnsrvchargamt.type = 'hidden'; hdnsrvchargamt.id = "hdnsrvchargamt" + recindex; newCell.appendChild(hdnsrvchargamt);
    var gridhdnplutusreferenceid = document.createElement('input'); gridhdnplutusreferenceid.type = 'hidden'; gridhdnplutusreferenceid.id = "gridhdnplutusreferenceid" + recindex; newCell.appendChild(gridhdnplutusreferenceid);

    var hdncheck_AuthID = document.createElement('input'); hdncheck_AuthID.type = 'hidden'; hdncheck_AuthID.id = "hdncheck_AuthID" + recindex; newCell.appendChild(hdncheck_AuthID);


    newCell = newRow.insertCell(2);
    var lblAmount = document.createElement('label');
    lblAmount.id = 'lblAmount' + recindex;
    lblAmount.title = 'AMOUNT';
    newCell.align = "right";
    newCell.appendChild(lblAmount);
    lblAmount.align = "right";
    newCell.className = "Amount Aright";

    newCell = newRow.insertCell(3);
    var lblAmtinwords = document.createElement('label');
    lblAmtinwords.id = 'lblAmtinwords' + recindex;
    lblAmtinwords.title = 'Amt In Words';
    newCell.align = "right";
    newCell.appendChild(lblAmtinwords);
    lblAmtinwords.align = "right";
    newCell.className = "Amount Aright";

    newCell = newRow.insertCell(4);
    var lbltendcash = document.createElement('label');
    lbltendcash.id = 'lbltendcash' + recindex;
    newCell.align = "right";
    newCell.appendChild(lbltendcash);
    newCell.className = "TenderedCash Aright";

    newCell = newRow.insertCell(5);
    var lblchange = document.createElement('label');
    lblchange.id = 'lblchange' + recindex;
    newCell.align = "right";
    newCell.appendChild(lblchange);
    newCell.className = "Change Aright";


    newCell = newRow.insertCell(6);
    var lblcurrname = document.createElement('label');
    lblcurrname.id = 'lblcurrname' + recindex;
    newCell.align = "left";
    newCell.appendChild(lblcurrname);
    newCell.className = "CurrencyName";


    newCell = newRow.insertCell(7);
    var lblexchrate = document.createElement('label');
    lblexchrate.id = 'lblexchrate' + recindex;
    newCell.align = "right";
    newCell.appendChild(lblexchrate);
    newCell.className = "ExchangeRate Aright";

    newCell = newRow.insertCell(8);
    var lblconvertedamt = document.createElement('label');
    lblconvertedamt.id = 'lblconvertedamt' + recindex;
    newCell.align = "right";
    newCell.appendChild(lblconvertedamt);
    newCell.className = "ConvertedAmount Aright";

    newCell = newRow.insertCell(9);
    var lblbankname = document.createElement('label');
    lblbankname.id = 'lblbankname' + recindex;
    lblbankname.title = 'BANK_NAME';
    newCell.align = "left";
    newCell.appendChild(lblbankname);
    newCell.className = "Cheque-Card-DD";

    newCell = newRow.insertCell(10);
    var lblcardno = document.createElement('label');
    lblcardno.id = 'lblcardno' + recindex;
    newCell.align = "left";
    newCell.appendChild(lblcardno);
    newCell.className = "Cheque-Card-DD-no";

    newCell = newRow.insertCell(11);
    var lblauthcode = document.createElement('label');
    lblauthcode.id = 'lblauthcode' + recindex;
    newCell.align = "left";
    newCell.appendChild(lblauthcode);
    newCell.className = "AuthorizationName";


    newCell = newRow.insertCell(12);
    var lblcardexpdt = document.createElement('label');
    lblcardexpdt.id = 'lblcardexpdt' + recindex;
    lblcardexpdt.title = 'EXPIRY_DT';
    newCell.align = "left";
    newCell.appendChild(lblcardexpdt);
    newCell.className = "CardExpiryDate";

    newCell = newRow.insertCell(13);
    var lblcardtype = document.createElement('label');
    lblcardtype.id = 'lblcardtype' + recindex;
    newCell.appendChild(lblcardtype);
    var hdnSNo = document.createElement('input');
    hdnSNo.type = 'hidden';
    hdnSNo.id = 'hdnSNo' + recindex;
    hdnSNo.value = rowIndex;
    newCell.align = "left";
    newCell.appendChild(hdnSNo);
    newCell.className = "CardType";

    newCell = newRow.insertCell(14);
    var lblsrvchrgpcnt = document.createElement('label');
    lblsrvchrgpcnt.id = 'lblsrvchrgpcnt' + recindex;
    newCell.align = "right";
    newCell.appendChild(lblsrvchrgpcnt);
    newCell.className = "srvchrgpcnt Aright";

    newCell = newRow.insertCell(15);
    var lblsrvchrgamt = document.createElement('label');
    lblsrvchrgamt.id = 'lblsrvchrgamt' + recindex;
    newCell.align = "right";
    newCell.appendChild(lblsrvchrgamt);
    newCell.className = "srvchrgamt Aright";

    newCell = newRow.insertCell(16);
    var lblchequedt = document.createElement('label');
    lblchequedt.id = 'lblchequedt' + recindex;
    newCell.align = "left";
    newCell.appendChild(lblchequedt);
    newCell.className = "chequedt";

    newCell = newRow.insertCell(17);
    var lblcqreldt = document.createElement('label');
    lblcqreldt.id = 'lblcqreldt' + recindex;
    newCell.align = "left";
    newCell.appendChild(lblcqreldt);
    newCell.className = "cqreldt";

    newCell = newRow.insertCell(18);
    var lblcqissuername = document.createElement('label');
    lblcqissuername.id = 'lblcqissuername' + recindex;
    newCell.align = "left";
    newCell.appendChild(lblcqissuername);
    newCell.className = "cqissuername";

    recindex++;
}

/* data clearing of quick mode controls*/
function RemoveSrvClearAmnts() {
    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtcashAmt').value = '';
    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtCardAmt').value = '';
    document.getElementById('' + ctrlcom + '_ReceiptControl2_ddcardType').selectedIndex = 0;
    document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlcrdtype').selectedIndex = 0;
    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtcardExpiredt').value = '';
    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtcardNoCmp').value = '';
    document.getElementById('' + ctrlcom + '_ReceiptControl2_ddbankName').selectedIndex = 0;
    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtcardAuther').value = '';
    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtCardAmt').disabled = true; ;
    var _removecount = 0;
    $('table[id*=gvReceiptDetails] tr:has(td)').each(function (e) {
        var paymentmodeid = $(this).closest('tr').find("input[type=hidden][id*=hdnrecmodeId]").val();
        if (paymentmodeid == '' || paymentmodeid == null || paymentmodeid == undefined) { paymentmodeid = 0; }
        if (paymentmodeid > 0) {
            $(this).remove();
            _removecount++;
        }
    });
    if (_removecount > 0) {
        fn_AddFilterRow_getdata('', '', '', '', '', '', '', '', '', '', '', '', '');
    }
    $('table[id*=gvMultipleConcession] tr:has(td)').each(function (e) {
        $(this).remove();
    });
    fn_AddRowWithDetais();
}


/*Saving of Receipt Control Data*/



function ForecpayXml(TransactionNo, TransactionDt, _TRANSACTION_TYPE, UmrNO, AdmnNo, PAID_AMOUNT, Emp_Id, Remarks, _curr_id, PAYMENT_TYPE_ID, rec_type_id, _TRN_SOURCE_ID) {
    var _Xml_Recpt_String = "";
    _Xml_Recpt_String += "<FO_RECPAY ";
    _Xml_Recpt_String += " TRANSACTION_ID=$" + "0" + "$";
    _Xml_Recpt_String += " TRANSACTION_NO=$" + TransactionNo + "$";
    _Xml_Recpt_String += " TRANSACTION_DT=$" + TransactionDt + "$";
    _Xml_Recpt_String += " TRANSACTION_TYPE=$" + _TRANSACTION_TYPE + "$";
    _Xml_Recpt_String += " UMR_NO=$" + UmrNO + "$"; ;
    _Xml_Recpt_String += " ADMN_NO=$" + AdmnNo + "$";
    _Xml_Recpt_String += " AMOUNT=$" + PAID_AMOUNT + "$";
    _Xml_Recpt_String += " EMPLOYEE_ID=$" + Emp_Id + "$";
    _Xml_Recpt_String += " APPROVE_BY=$" + 0 + "$";
    _Xml_Recpt_String += " APPROVE_DT=$" + '' + "$";
    _Xml_Recpt_String += " REMARKS=$" + Remarks + "$";
    _Xml_Recpt_String += " CURR_ID=$" + _curr_id + "$";
    _Xml_Recpt_String += " PAYMENT_TYPE_ID=$" + PAYMENT_TYPE_ID + "$";
    _Xml_Recpt_String += " SESSION_ID=$" + document.getElementById('' + ctrlcom + '_ReceiptControl2_HdnSessionID').value + "$";

    _Xml_Recpt_String += " REC_TYPE_ID=$" + rec_type_id + "$";

    _Xml_Recpt_String += " TRN_SOURCE_ID=$" + _TRN_SOURCE_ID + "$"; // 1

    _Xml_Recpt_String += " />";
    return _Xml_Recpt_String;
}
function FoRecpayRefXml(_APPROVE_BY, _APPROVE_DT, _PAID_AMOUNT, _PAYMENT_TYPE_ID, _curr_id, _TRN_SOURCE_ID, _net_advance_amt, _rec_type_id, _NET_GROSS_AMT, _NET_DISCOUNT_AMT, _NET_RECEIPT_AMT, _OUTSTANDING_DUE_AMT, _EXCESS_AMT) {
    var _Xml_Recpt_Ref_String = "";
    _Xml_Recpt_Ref_String += "<FO_RECPAY_REF ";
    _Xml_Recpt_Ref_String += " RECPAY_REF_ID=$" + "0" + "$";
    _Xml_Recpt_Ref_String += " APPROVE_BY=$" + 0 + "$";
    _Xml_Recpt_Ref_String += " APPROVE_DT=$" + '' + "$";
    _Xml_Recpt_Ref_String += " AMOUNT=$" + _PAID_AMOUNT + "$";
    _Xml_Recpt_Ref_String += " PAYMENT_TYPE_ID=$" + _PAYMENT_TYPE_ID + "$";
    _Xml_Recpt_Ref_String += " CURR_ID=$" + _curr_id + "$";
    var ref_type_id = document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnReference_type_id').value;
    if (ref_type_id == undefined || ref_type_id == null) {
        _Xml_Recpt_Ref_String += " REFERENCE_TYPE_ID=$" + 0 + "$";
    }
    else {
        _Xml_Recpt_Ref_String += " REFERENCE_TYPE_ID=$" + ref_type_id + "$";
    }
    _Xml_Recpt_Ref_String += " SESSION_ID=$" + document.getElementById('' + ctrlcom + '_ReceiptControl2_HdnSessionID').value + "$";
    _Xml_Recpt_Ref_String += " TRN_SOURCE_ID=$" + _TRN_SOURCE_ID + "$";
    _Xml_Recpt_Ref_String += " NET_ADVANCE_AMT=$" + _net_advance_amt + "$";
    _Xml_Recpt_Ref_String += " REC_TYPE_ID=$" + _rec_type_id + "$";

    //    _Xml_Recpt_Ref_String += " NET_GROSS_AMT=$" + _NET_GROSS_AMT + "$";
    //    _Xml_Recpt_Ref_String += " NET_DISCOUNT_AMT=$" + _NET_DISCOUNT_AMT + "$";
    //    _Xml_Recpt_Ref_String += " NET_RECEIPT_AMT=$" + _NET_RECEIPT_AMT + "$";
    //    _Xml_Recpt_Ref_String += " OUTSTANDING_DUE_AMT=$" + _OUTSTANDING_DUE_AMT + "$";
    //    _Xml_Recpt_Ref_String += " EXCESS_AMT=$" + _EXCESS_AMT + "$";
    _Xml_Recpt_Ref_String += " />";
    return _Xml_Recpt_Ref_String;
}

function FoRecpayDetXmlQuick(_PAYMENT_MODE_ID, _AMOUNT, _REMARKS, _curr_id, _EX_RATE, _Entered_Amount, _tenderAmt, _changinamt, _PAYMENT_COMM_ID, _rec_type_id, UmrNO, CardNO, hdnbankid,
 CardExperyDt, _CQ_DATE, _CQ_CHEQUE_REALIZATION_DT, QckCardHldrName, auth_cd, BankName, _EDC_MACHINE, CradTypeId, _SERVICE_CHARGE_PERCENT, _SERVICE_CHARGE_AMOUNT, gridhdnplutusreferenceval) {
    var _Xml_Recpt_Det_String = "";
    if (_PAYMENT_MODE_ID == 1) {
        _Xml_Recpt_Det_String += "<FO_RECPAY_DET ";
        _Xml_Recpt_Det_String += " TRANSACTION_DET_ID=$" + "0" + "$";
        _Xml_Recpt_Det_String += " PAYMENT_MODE_ID=$" + _PAYMENT_MODE_ID + "$";
        _Xml_Recpt_Det_String += " AMOUNT=$" + _AMOUNT + "$";
        _Xml_Recpt_Det_String += " REMARKS=$" + _REMARKS + "$";
        _Xml_Recpt_Det_String += " SESSION_ID=$" + document.getElementById('' + ctrlcom + '_ReceiptControl2_HdnSessionID').value + "$";
        _Xml_Recpt_Det_String += " CURR_ID=$" + _curr_id + "$";
        _Xml_Recpt_Det_String += " EX_RATE=$" + _EX_RATE + "$";
        _Xml_Recpt_Det_String += " ENTERED_AMOUNT=$" + _Entered_Amount + "$"; //_Xml_Recpt_Det_String += " ENTERED_AMOUNT=$" + lblAmount + "$";
        _Xml_Recpt_Det_String += " TENDERED_AMOUNT=$" + _tenderAmt + "$";
        _Xml_Recpt_Det_String += " CHANGE_AMOUNT=$" + _changinamt + "$";
        _Xml_Recpt_Det_String += " PAYMENT_COMM_ID=$" + _PAYMENT_COMM_ID + "$";
        _Xml_Recpt_Det_String += " REC_TYPE_ID=$" + _rec_type_id + "$";
        _Xml_Recpt_Det_String += " UMR_NO=$" + UmrNO + "$";


        //        _Xml_Recpt_Det_String += " PLUTUS_REFERENCE_ID=$" + gridhdnplutusreferenceval + "$";

        //        if (_SERVICE_CHARGE_PERCENT > 0)
        //            _Xml_Recpt_Det_String += " SERVICE_CHARGE_PERCENT=$" + _SERVICE_CHARGE_PERCENT + "$";
        //        if (_SERVICE_CHARGE_AMOUNT > 0)
        //            _Xml_Recpt_Det_String += " SERVICE_CHARGE_AMOUNT=$" + _SERVICE_CHARGE_AMOUNT + "$";
        _Xml_Recpt_Det_String += "/>";
    }
    if (_PAYMENT_MODE_ID == '4') { //credit card 

        _Xml_Recpt_Det_String += "<FO_RECPAY_DET ";
        _Xml_Recpt_Det_String += " TRANSACTION_ID=$" + 0 + "$";
        _Xml_Recpt_Det_String += " TRANSACTION_DET_ID=$" + 0 + "$";
        _Xml_Recpt_Det_String += " UMR_NO=$" + UmrNO + "$";
        _Xml_Recpt_Det_String += " PAYMENT_COMM_ID=$" + _PAYMENT_COMM_ID + "$";
        _Xml_Recpt_Det_String += " AMOUNT=$" + _AMOUNT + "$";
        _Xml_Recpt_Det_String += " REMARKS=$" + _REMARKS + "$";
        _Xml_Recpt_Det_String += " REFERENCE_ID=$" + 0 + "$";
        _Xml_Recpt_Det_String += " PAYMENT_MODE_ID=$" + _PAYMENT_MODE_ID + "$";
        _Xml_Recpt_Det_String += " CC_CARD_NO=$" + CardNO + "$";
        _Xml_Recpt_Det_String += " CC_APPROVAL_NO=$" + '0' + "$";
        _Xml_Recpt_Det_String += " CC_CARD_HOLDER_NAME=$" + QckCardHldrName + "$";
        _Xml_Recpt_Det_String += " CC_EDC_MACHINE=$" + '' + "$";
        _Xml_Recpt_Det_String += " CC_CARD_TYPE_ID=$" + CradTypeId + "$";
        _Xml_Recpt_Det_String += " CC_ISSUE_BANK_NAME=$" + BankName + "$";
        _Xml_Recpt_Det_String += " CC_VALID_TO_DT=$" + CardExperyDt + "$";

        _Xml_Recpt_Det_String += " CC_CARD_HOLDER_ADDRESS=$" + 0 + "$";
        _Xml_Recpt_Det_String += " CURR_ID=$" + _curr_id + "$";
        _Xml_Recpt_Det_String += " EX_RATE=$" + _EX_RATE + "$";
        _Xml_Recpt_Det_String += " SESSION_ID=$" + document.getElementById('' + ctrlcom + '_ReceiptControl2_HdnSessionID').value + "$";
        _Xml_Recpt_Det_String += " CC_AUTH_CD=$" + auth_cd + "$";
        _Xml_Recpt_Det_String += " DC_AUTH_CD=$" + "" + "$";

        _Xml_Recpt_Det_String += " CC_ISSUE_BANK_ID=$" + hdnbankid + "$";
        _Xml_Recpt_Det_String += " ENTERED_AMOUNT=$" + _Entered_Amount + "$";
        _Xml_Recpt_Det_String += " TENDERED_AMOUNT=$" + _tenderAmt + "$";
        _Xml_Recpt_Det_String += " PLUTUS_REFERENCE_ID=$" + gridhdnplutusreferenceval + "$";
        _Xml_Recpt_Det_String += " REC_TYPE_ID=$" + _rec_type_id + "$";

        if (_SERVICE_CHARGE_PERCENT > 0)
            _Xml_Recpt_Det_String += " SERVICE_CHARGE_PERCENT=$" + _SERVICE_CHARGE_PERCENT + "$";
        if (_SERVICE_CHARGE_AMOUNT > 0)
            _Xml_Recpt_Det_String += " SERVICE_CHARGE_AMOUNT=$" + _SERVICE_CHARGE_AMOUNT + "$";
        _Xml_Recpt_Det_String += "/>";
    }
    if (_PAYMENT_MODE_ID == '5') {// debit card 
        _Xml_Recpt_Det_String += "<FO_RECPAY_DET ";
        _Xml_Recpt_Det_String += " TRANSACTION_ID=$" + 0 + "$";
        _Xml_Recpt_Det_String += " TRANSACTION_DET_ID=$" + 0 + "$";
        _Xml_Recpt_Det_String += " UMR_NO=$" + UmrNO + "$";
        _Xml_Recpt_Det_String += " PAYMENT_COMM_ID=$" + _PAYMENT_COMM_ID + "$";
        _Xml_Recpt_Det_String += " AMOUNT=$" + _AMOUNT + "$";
        _Xml_Recpt_Det_String += " REMARKS=$" + _REMARKS + "$";
        _Xml_Recpt_Det_String += " REFERENCE_ID=$" + 0 + "$";
        _Xml_Recpt_Det_String += " PAYMENT_MODE_ID=$" + _PAYMENT_MODE_ID + "$";
        _Xml_Recpt_Det_String += " DC_CARD_NO=$" + CardNO + "$";
        _Xml_Recpt_Det_String += " DC_APPROVAL_NO=$" + '0' + "$";
        _Xml_Recpt_Det_String += " DC_CARD_HOLDER_NAME=$" + QckCardHldrName + "$";
        _Xml_Recpt_Det_String += " DC_EDC_MACHINE=$" + '' + "$";
        _Xml_Recpt_Det_String += " DC_CARD_TYPE_ID=$" + CradTypeId + "$";
        _Xml_Recpt_Det_String += " DC_CARD_TYPE_REV_NO=$" + 1 + "$";

        _Xml_Recpt_Det_String += " DC_ISSUE_BANK_NAME=$" + BankName + "$";
        _Xml_Recpt_Det_String += " DC_VALID_TO_DT=$" + CardExperyDt + "$";
        _Xml_Recpt_Det_String += " CURR_ID=$" + _curr_id + "$";
        _Xml_Recpt_Det_String += " EX_RATE=$" + _EX_RATE + "$";
        _Xml_Recpt_Det_String += " DC_CARD_HOLDER_ADDRESS=$" + 0 + "$";
        _Xml_Recpt_Det_String += " SESSION_ID=$" + document.getElementById('' + ctrlcom + '_ReceiptControl2_HdnSessionID').value + "$";
        _Xml_Recpt_Det_String += " CC_AUTH_CD=$" + "" + "$";
        _Xml_Recpt_Det_String += " DC_AUTH_CD=$" + auth_cd + "$";

        _Xml_Recpt_Det_String += " DC_ISSUE_BANK_ID=$" + hdnbankid + "$";
        _Xml_Recpt_Det_String += " ENTERED_AMOUNT=$" + _Entered_Amount + "$";
        _Xml_Recpt_Det_String += " TENDERED_AMOUNT=$" + _tenderAmt + "$";
        _Xml_Recpt_Det_String += " PLUTUS_REFERENCE_ID=$" + gridhdnplutusreferenceval + "$";
        _Xml_Recpt_Det_String += " REC_TYPE_ID=$" + _rec_type_id + "$";

        if (_SERVICE_CHARGE_PERCENT > 0)
            _Xml_Recpt_Det_String += " SERVICE_CHARGE_PERCENT=$" + _SERVICE_CHARGE_PERCENT + "$";
        if (_SERVICE_CHARGE_AMOUNT > 0)
            _Xml_Recpt_Det_String += " SERVICE_CHARGE_AMOUNT=$" + _SERVICE_CHARGE_AMOUNT + "$";
        _Xml_Recpt_Det_String += "/>";
    }

    return _Xml_Recpt_Det_String;
}

function FoRecpayDetXml(_PAYMENT_MODE_ID, _AMOUNT, _REMARKS, _curr_id, _EX_RATE, _Entered_Amount, _tenderAmt, _changinamt, _PAYMENT_COMM_ID, _rec_type_id, UmrNO, CardNO, hdnbankid,
 CardExperyDt, _CQ_DATE, _CQ_CHEQUE_REALIZATION_DT, QckCardHldrName, auth_cd, BankName, _EDC_MACHINE, CradTypeId, _SERVICE_CHARGE_PERCENT, _SERVICE_CHARGE_AMOUNT, gridhdnplutusreferenceval) {
    var _Xml_Recpt_Det_String = "";
    _Xml_Recpt_Det_String += "<FO_RECPAY_DET ";
    _Xml_Recpt_Det_String += " TRANSACTION_DET_ID=$" + "0" + "$";
    _Xml_Recpt_Det_String += " PAYMENT_MODE_ID=$" + _PAYMENT_MODE_ID + "$";
    _Xml_Recpt_Det_String += " AMOUNT=$" + _AMOUNT + "$";
    _Xml_Recpt_Det_String += " REMARKS=$" + _REMARKS + "$";
    _Xml_Recpt_Det_String += " SESSION_ID=$" + document.getElementById('' + ctrlcom + '_ReceiptControl2_HdnSessionID').value + "$";
    _Xml_Recpt_Det_String += " CURR_ID=$" + _curr_id + "$";
    _Xml_Recpt_Det_String += " EX_RATE=$" + _EX_RATE + "$";
    _Xml_Recpt_Det_String += " ENTERED_AMOUNT=$" + _Entered_Amount + "$"; //_Xml_Recpt_Det_String += " ENTERED_AMOUNT=$" + lblAmount + "$";
    _Xml_Recpt_Det_String += " TENDERED_AMOUNT=$" + _tenderAmt + "$";
    _Xml_Recpt_Det_String += " CHANGE_AMOUNT=$" + _changinamt + "$";
    _Xml_Recpt_Det_String += " PAYMENT_COMM_ID=$" + _PAYMENT_COMM_ID + "$";
    _Xml_Recpt_Det_String += " REC_TYPE_ID=$" + _rec_type_id + "$";
    _Xml_Recpt_Det_String += " UMR_NO=$" + UmrNO + "$";

    _Xml_Recpt_Det_String += " CQ_CHEQUE_NO=$" + CardNO + "$";
    _Xml_Recpt_Det_String += " CQ_BANK_ID=$" + hdnbankid + "$";
    _Xml_Recpt_Det_String += " CQ_BANK_REV_NO=$" + '1' + "$";
    _Xml_Recpt_Det_String += " CQ_BRANCH_ID=$" + 0 + "$";
    _Xml_Recpt_Det_String += " CQ_BRANCH_REV_NO=$" + 1 + "$";
    _Xml_Recpt_Det_String += " CQ_VALID_TO_DT=$" + CardExperyDt + "$";
    _Xml_Recpt_Det_String += " CQ_DATE=$" + _CQ_DATE + "$";
    _Xml_Recpt_Det_String += " CQ_CHEQUE_REALIZATION_DT=$" + _CQ_CHEQUE_REALIZATION_DT + "$";
    _Xml_Recpt_Det_String += " CQ_ISSUER_NAME=$" + QckCardHldrName + "$";

    _Xml_Recpt_Det_String += " CC_AUTH_CD=$" + auth_cd + "$";
    _Xml_Recpt_Det_String += " CC_CARD_NO=$" + CardNO + "$";
    _Xml_Recpt_Det_String += " CC_ISSUE_BANK_ID=$" + hdnbankid + "$";
    _Xml_Recpt_Det_String += " CC_VALID_TO_DT=$" + CardExperyDt + "$";
    _Xml_Recpt_Det_String += " CC_ISSUE_BANK_NAME=$" + BankName + "$";
    _Xml_Recpt_Det_String += " CC_CARD_HOLDER_NAME=$" + QckCardHldrName + "$";
    _Xml_Recpt_Det_String += " CC_EDC_MACHINE=$" + _EDC_MACHINE + "$";
    _Xml_Recpt_Det_String += " CC_CARD_TYPE_ID=$" + CradTypeId + "$";

    _Xml_Recpt_Det_String += " DD_NO=$" + CardNO + "$";
    _Xml_Recpt_Det_String += " DD_ISSUE_BANK_ID=$" + hdnbankid + "$";
    _Xml_Recpt_Det_String += " DD_ISSUE_BANK_REV_NO=$1$";
    _Xml_Recpt_Det_String += " DD_ISSUE_BRANCH_ID=$" + 0 + "$";
    _Xml_Recpt_Det_String += " DD_ISSUE_BRANCH_REV_NO=$" + 1 + "$";
    _Xml_Recpt_Det_String += " DD_VALID_TO_DT=$" + CardExperyDt + "$";
    _Xml_Recpt_Det_String += " DD_SERVICE_BANK_ID=$" + 0 + "$";
    _Xml_Recpt_Det_String += " DD_SERVICE_BRANCH_ID=$" + 0 + "$";
    _Xml_Recpt_Det_String += " DD_SERVICE_BANK_REV_NO=$" + 1 + "$";
    _Xml_Recpt_Det_String += " DD_SERVICE_BRANCH_REV_NO=$" + 1 + "$";

    _Xml_Recpt_Det_String += " DC_AUTH_CD=$" + auth_cd + "$";
    _Xml_Recpt_Det_String += " DC_CARD_NO=$" + CardNO + "$";
    _Xml_Recpt_Det_String += " DC_APPROVAL_NO=$" + '' + "$";
    _Xml_Recpt_Det_String += " DC_CARD_HOLDER_NAME=$" + QckCardHldrName + "$";
    _Xml_Recpt_Det_String += " DC_EDC_MACHINE=$" + _EDC_MACHINE + "$";
    _Xml_Recpt_Det_String += " DC_CARD_TYPE_ID=$" + CradTypeId + "$";
    _Xml_Recpt_Det_String += " DC_CARD_TYPE_REV_NO=$" + 1 + "$";
    _Xml_Recpt_Det_String += " DC_ISSUE_BANK_NAME=$" + BankName + "$";
    _Xml_Recpt_Det_String += " DC_VALID_TO_DT=$" + CardExperyDt + "$";
    _Xml_Recpt_Det_String += " DC_CARD_HOLDER_ADDRESS=$" + '' + "$";
    _Xml_Recpt_Det_String += " DC_ISSUE_BANK_ID=$" + hdnbankid + "$";

    _Xml_Recpt_Det_String += " OL_BANK_ID=$" + hdnbankid + "$";
    _Xml_Recpt_Det_String += " OL_ACCOUNT_NO=$" + CardNO + "$";
    _Xml_Recpt_Det_String += " OL_AUTH_CD=$" + auth_cd + "$";
    _Xml_Recpt_Det_String += " OL_BANK_NAME=$" + ReplaceSplCharactor(BankName) + "$";

    if (_PAYMENT_MODE_ID != 1) {
        _Xml_Recpt_Det_String += " PLUTUS_REFERENCE_ID=$" + gridhdnplutusreferenceval + "$";

        if (_SERVICE_CHARGE_PERCENT > 0)
            _Xml_Recpt_Det_String += " SERVICE_CHARGE_PERCENT=$" + _SERVICE_CHARGE_PERCENT + "$";
        if (_SERVICE_CHARGE_AMOUNT > 0)
            _Xml_Recpt_Det_String += " SERVICE_CHARGE_AMOUNT=$" + _SERVICE_CHARGE_AMOUNT + "$";
    }
    _Xml_Recpt_Det_String += "/>";
    return _Xml_Recpt_Det_String;
}
var form_name = $('#ctl00_ContentPlaceHolder1_ReceiptControl2_hdnDocName').val();

/*Saving of Receipt Control Data*/
function TransactionSave() {
    var _Xml_Recpt_String = "";
    var CONCESSION = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatgrossamt').value;
    var COMPANY_CONCESSION_AMOUNT = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpartygrossamt').value;
    var COMPANY_AMOUNT = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtparygross').value;
    var BILL_AMOUNT = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtgrosstotal').value;
    var NET_AMOUNT = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtTotalNet').value;
    var PAID_AMOUNT = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtreceiptAmount').value; //document.getElementById('' + ctrlcom + '_ReceiptControl2_txtTotalReciptAmt').value;
    var DUE_AMOUNT = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtTotalDue').value;
    var TOTAL_DISCOUNT = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtgrossamttotal').value;
    var CMP_OUTSTANDING_DUE = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtTotalDue').value;
    var CMP_NET_AMT = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtTotalNet').value;
    var CMP_PAID_AMT = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtTotalReciptAmt').value;
    var UmrNO = document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnTranUMRNO').value;
    var AdmnNo = document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnTRANADMNNO').value;
    var TransactionNo = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtReceoptNoAdvanced').value;
    var TransactionDt = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtReceiptDtAdvanced').value;
    var Remarks = '';
    var _curr_id = document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnstpcurrid').value;

    if (TransactionDt == null || TransactionDt == undefined || TransactionDt == NaN || TransactionDt == '') {

        TransactionDt = new Date().format('dd-MMM-yyyy');
    }
    else {
        TransactionDt = TransactionDt.split(' ')[0];
        TransactionDt = new Date(TransactionDt).format('dd-MMM-yyyy');

    }
    if (lblquick.className == 'select') { /* Quick Mode */
        var cash_amt = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtcashAmt').value;
        var card_amt = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtCardAmt').value;
        Remarks = $('#ctl00_ContentPlaceHolder1_ReceiptControl2_txtquickremarks').val();
        Remarks = ReplaceSplCharactor(Remarks);
        if (parseInt(cash_amt) > 0) {
        }
        else {
            cash_amt = '0';
        }
        if (parseInt(card_amt) > 0) {
        }
        else {
            card_amt = '0';
        }
        var insrenceAmt = 0;
        $('table[id*=GvIns] tr:has(td)').each(function () {
            var insamt = $(this).closest('tr').find('[id*=lblinsamt]').text();
            if (insamt == undefined || insamt == null || insamt == '') { insamt = 0; }
            insrenceAmt = parseFloat(insrenceAmt) + parseFloat(insamt);
        });
        PAID_AMOUNT = parseFloat(cash_amt) + parseFloat(card_amt);
        if (parseFloat(insrenceAmt) > 0) {
            PAID_AMOUNT = parseFloat(PAID_AMOUNT) + parseFloat(insrenceAmt);
        }

    }
    else {/* Advance Mode */
        PAID_AMOUNT = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtTotalReciptAmt').value;
        Remarks = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtRemarks').value;
        Remarks = ReplaceSplCharactor(Remarks);
    }
    var PAYMENT_TYPE_ID = 0;
    if (lblquick.className == "select") {
        PAYMENT_TYPE_ID = 2;
    } else {
        PAYMENT_TYPE_ID = 1;
    }
    var insrenceAmt = 0;
    $('table[id*=GvIns] tr:has(td)').each(function () {
        var insamt = $(this).closest('tr').find('[id*=lblinsamt]').text();
        if (insamt == undefined || insamt == null || insamt == '') { insamt = 0; }
        insrenceAmt = parseFloat(insrenceAmt) + parseFloat(insamt);
    });

    if (parseFloat(insrenceAmt) > 0) {
        PAYMENT_TYPE_ID = 1;
    }
    var changinamt = document.getElementById('' + ctrlcom + '_ReceiptControl2_lblqickchangeamt').innerHTML;
    if (changinamt == '' || changinamt == undefined || changinamt == null) { changinamt = 0; }
    if (parseFloat(changinamt) > 0) {
        PAID_AMOUNT = parseFloat(PAID_AMOUNT) - parseFloat(changinamt);
    }
    var net_advance_amt = $('[id*=hdnAdjustableAdvAmt]').val();
    if (net_advance_amt == undefined || net_advance_amt == null || net_advance_amt == NaN || net_advance_amt == '' || isNaN(net_advance_amt)) { net_advance_amt = 0; }
    var rec_type_id = 0;
    if (document.getElementById('ctl00_hdnIsMedClg').value == "TRUE") {
        rec_type_id = $('input[id*=radiousertran]:checked').val()
        if (rec_type_id == 0 || rec_type_id == null || rec_type_id == undefined) { rec_type_id = 1; }
    }
    else { rec_type_id = 1; }
    var Emp_Id = '0';
    var exrate = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtExchangeRate').value;

    _Xml_Recpt_String += ForecpayXml(TransactionNo, TransactionDt, "R", UmrNO, AdmnNo, PAID_AMOUNT, Emp_Id, Remarks, _curr_id, PAYMENT_TYPE_ID, rec_type_id, 1);

   
    _Xml_Recpt_String += FoRecpayRefXml(0, '', PAID_AMOUNT, PAYMENT_TYPE_ID, _curr_id, exrate, net_advance_amt, rec_type_id, 0, 0, 0, 0, 0);

    var CashAmt = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtcashAmt').value;
    var CardAmt = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtCardAmt').value;

    var gridhdnplutusreferenceval = document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnPlutusTransactionReferenceID').value;
    gridhdnplutusreferenceval = gridhdnplutusreferenceval == '' || gridhdnplutusreferenceval == 'undefined' || gridhdnplutusreferenceval == undefined ? "" : gridhdnplutusreferenceval;
    CashAmt = CashAmt == '' || CashAmt == 'undefined' ? 0 : CashAmt;
    CardAmt = CardAmt == '' ? 0 : CardAmt;
    var TotalAmt = parseFloat(CashAmt) + parseFloat(CardAmt);
    var CardNO = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtcardNoCmp').value;
    var CradTypeId = document.getElementById('' + ctrlcom + '_ReceiptControl2_ddcardType').value;
    var BankName = $('[id*=ddbankName] option:selected').text();
    if (BankName == '--Select--')
        BankName = "";
    BankName = ReplaceSplCharactor(BankName);
    var hdnbankid = document.getElementById('' + ctrlcom + '_ReceiptControl2_ddbankName').value;
    var CardExperyDt = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtcardExpiredt').value;
    if (CardExperyDt == undefined || CardExperyDt == null || CardExperyDt == NaN || CardExperyDt == '') {
        CardExperyDt = '';
    }
    else {
        CardExperyDt = new Date(CardExperyDt).format('dd-MMM-yyyy');
    }

    var paymentmodeid = document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlcrdtype').value;
    if (paymentmodeid == '' || paymentmodeid == '0' || paymentmodeid == null || paymentmodeid == undefined) { paymentmodeid = "1"; }
    var auth_cd = $('#ctl00_ContentPlaceHolder1_ReceiptControl2_txtcardAuther').val();
    if (auth_cd == undefined || auth_cd == null) { auth_cd = ''; }
    var QckCardHldrName = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtQckCardHldrName').value;

    if (TotalAmt > 0) { /* QUICK MODE */


        if (CashAmt > 0) {
            if (parseFloat(changinamt) > 0) {
                CashAmt = parseFloat(CashAmt) - parseFloat(changinamt);
                if (CashAmt == null || CashAmt == undefined || CashAmt == '' || isNaN(CashAmt)) { CashAmt = "0"; }
            }

            var tenderAmt = CashAmt;
            _Xml_Recpt_String += FoRecpayDetXmlQuick(1, CashAmt, Remarks, _curr_id, 1, tenderAmt, tenderAmt, changinamt, 1, rec_type_id, UmrNO, CardNO, hdnbankid, CardExperyDt, '', '', QckCardHldrName, auth_cd, BankName, '', CradTypeId, 0, 0, gridhdnplutusreferenceval);
        }
   
        if (CardAmt > 0) {
            var tenderAmt = CardAmt;
            _Xml_Recpt_String += FoRecpayDetXmlQuick(paymentmodeid, CardAmt, Remarks, _curr_id, 1, tenderAmt, tenderAmt, changinamt, 1, rec_type_id, UmrNO, CardNO, hdnbankid, CardExperyDt, '', '', QckCardHldrName, auth_cd, BankName, '', CradTypeId, 0, 0, gridhdnplutusreferenceval);

        }

    }
    else {

        _Xml_Recpt_String += FoRecPayDetAdvancedXml();
    }

    var insrenceAmt = 0;
    $('table[id*=GvIns] tr:has(td)').each(function () {
        var insamt = $(this).closest('tr').find('[id*=lblinsamt]').text();
        if (insamt == undefined || insamt == null || insamt == '') { insamt = 0; }
        insrenceAmt = parseFloat(insrenceAmt) + parseFloat(insamt);
    });

    if (insrenceAmt == undefined || insrenceAmt == null || insrenceAmt == '') { insrenceAmt = "0"; }
    if (parseFloat(insrenceAmt) > 0) {
        _Xml_Recpt_String += "<FO_RECPAY_DET ";
        _Xml_Recpt_String += " TRANSACTION_DET_ID=$" + "0" + "$";
        _Xml_Recpt_String += " PAYMENT_MODE_ID=$" + 17 + "$";
        _Xml_Recpt_String += " AMOUNT=$" + insrenceAmt + "$";
        _Xml_Recpt_String += " CQ_CHEQUE_NO=$" + '' + "$";
        _Xml_Recpt_String += " CQ_ISSUER_NAME=$" + '0' + "$";
        _Xml_Recpt_String += " CQ_BANK_ID=$" + 0 + "$";
        _Xml_Recpt_String += " CQ_BANK_REV_NO=$" + '1' + "$";
        _Xml_Recpt_String += " CQ_BRANCH_ID=$" + 0 + "$";
        _Xml_Recpt_String += " CQ_BRANCH_REV_NO=$" + 1 + "$";
        _Xml_Recpt_String += " CQ_VALID_TO_DT=$" + '' + "$";
        _Xml_Recpt_String += " REMARKS=$" + Remarks + "$";
        _Xml_Recpt_String += " SESSION_ID=$" + document.getElementById('' + ctrlcom + '_ReceiptControl2_HdnSessionID').value + "$";
        _Xml_Recpt_String += " CURR_ID=$" + 0 + "$";
        _Xml_Recpt_String += " EX_RATE=$" + 1 + "$";
        _Xml_Recpt_String += " ENTERED_AMOUNT=$" + 0 + "$";
        _Xml_Recpt_String += " TENDERED_AMOUNT=$" + 0 + "$";
        _Xml_Recpt_String += " CHANGE_AMOUNT=$" + 0 + "$";
        _Xml_Recpt_String += " CC_AUTH_CD=$" + '' + "$";
        _Xml_Recpt_String += " DC_AUTH_CD=$" + "" + "$";
        _Xml_Recpt_String += " PAYMENT_COMM_ID=$" + 0 + "$";
        _Xml_Recpt_String += " REC_TYPE_ID=$" + rec_type_id + "$";
        _Xml_Recpt_String += "  />"
    }

    return _Xml_Recpt_String;
}

function FoRecPayDetAdvancedXml() {
    var _Xml_Recpt_String = "";
    var countrep = 0; var newpaymentcommid = 0;
    var rec_type_id = 0;
    if (document.getElementById('ctl00_hdnIsMedClg').value == "TRUE") {
        rec_type_id = $('input[id*=radiousertran]:checked').val()
        if (rec_type_id == 0 || rec_type_id == null || rec_type_id == undefined) { rec_type_id = 1; }
    }
    else { rec_type_id = 1; }
    var UmrNO = document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnTranUMRNO').value;
    $("table[id$=gvReceiptDetails] tr:has(td)").each(function (e) {

        var paymentmodeid = $(this).closest('tr').find("input[type=hidden][id*=hdnrecmodeId]").val();
        var lblAmount = $(this).closest('tr').find("[id*=lblAmount]").text();
        var newpaymentcommid = $(this).closest('tr').find("input[type=hidden][id*=hdnpaymentcommid]").val();
        var lblcurrname = $(this).closest('tr').find("[id*=lblcurrname]").text();
        var lblexchrate = $(this).closest('tr').find("[id*=lblexchrate]").text();
        var lblconvertedamt = $(this).closest('tr').find("[id*=lblconvertedamt]").text();
        var lblbankname = $(this).closest('tr').find("[id*=lblbankname]").text();
        lblbankname = ReplaceSplCharactor(lblbankname);
        var lblcardno = $(this).closest('tr').find("[id*=lblcardno]").text();
        var lblauthcode = $(this).closest('tr').find("[id*=lblauthcode]").text();

        var lblcardexpdt = $(this).closest('tr').find("[id*=lblcardexpdt]").text();
        var lbltendcash = $(this).closest('tr').find("[id*=lbltendcash]").text();
        var lblchange = $(this).closest('tr').find("[id*=lblchange]").text();
        var lblcardtype = $(this).closest('tr').find("[id*=lblcardtype]").text();
        var hdncardtypeId = $(this).closest('tr').find("input[type=hidden][id*=hdncardtypeId]").val();
        var hdncurrId = $(this).closest('tr').find("input[type=hidden][id*=hdncurrId]").val();
        var hdnbankid = $(this).closest('tr').find("input[type=hidden][id*=hdnbankid]").val();
        var hdncheck_AuthID = $(this).closest('tr').find("input[type=hidden][id*=hdncheck_AuthID]").val();
        var AUTH_CD = $(this).closest('tr').find("[id*=lblauthcode]").text();
        var cheque_dt = $(this).closest('tr').find("[id*=lblchequedt]").text();
        var cheque_reql_dt = $(this).closest('tr').find("[id*=lblcqreldt]").text();
        var chq_issue_name = $(this).closest('tr').find("[id*=lblcqissuername]").text();
        var hdnsrvchargpct = $(this).closest('tr').find("input[type=hidden][id*=hdnsrvcharg]").val();
        var hdnsrvchargamt = $(this).closest('tr').find("[id*=lblsrvchrgamt]").text(); // $(this).closest('tr').find("input[type=hidden][id*=hdnsrvchargamt]").val(); 
        var gridhdnplutusreferenceval = $(this).closest('tr').find("[id*=gridhdnplutusreferenceid]").val(); // $(this).closest('tr').find("input[type=hidden][id*=hdnsrvchargamt]").val(); 

        if (cheque_dt == undefined || cheque_dt == null) { cheque_dt = ''; }
        if (cheque_reql_dt == undefined || cheque_reql_dt == null) { cheque_reql_dt = ''; }
        if (chq_issue_name == undefined || chq_issue_name == null) { chq_issue_name = ''; }
        if (lblAmount == undefined || lblAmount == null || lblAmount == '' || isNaN(lblAmount)) { lblAmount = "0"; }
        if (lblcurrname == undefined || lblcurrname == null || lblcurrname == '' || isNaN(lblcurrname)) { lblcurrname = "0"; }
        if (lblexchrate == undefined || lblexchrate == null || lblexchrate == '' || isNaN(lblexchrate)) { lblexchrate = "0"; }
        if (paymentmodeid == undefined || paymentmodeid == null || paymentmodeid == '' || isNaN(paymentmodeid)) { paymentmodeid = "0"; }
        if (lblconvertedamt == undefined || lblconvertedamt == null || lblconvertedamt == '' || isNaN(lblconvertedamt)) { lblconvertedamt = "0"; }
        if (lblbankname == undefined || lblbankname == null || lblbankname == '') { lblbankname = ''; }
        if (lblcardno == undefined || lblcardno == null || lblcardno == '') { lblcardno = "0"; } //|| isNaN(lblcardno)
        if (lblauthcode == undefined || lblauthcode == null || lblauthcode == '') { lblauthcode = "0"; }
        if (hdnbankid == undefined || hdnbankid == null || hdnbankid == '' || isNaN(hdnbankid)) { hdnbankid = "0"; }
        if (gridhdnplutusreferenceval == undefined || gridhdnplutusreferenceval == 'undefined' || gridhdnplutusreferenceval == null || gridhdnplutusreferenceval == 'null' || gridhdnplutusreferenceval == '') { gridhdnplutusreferenceval = ""; }

        if (lblcardexpdt == undefined || lblcardexpdt == null || lblcardexpdt == '' || lblcardexpdt == NaN)
        { lblcardexpdt = new Date().format('dd-MMM-yyyy'); }
        else {
            lblcardexpdt = new Date(lblcardexpdt).format('dd-MMM-yyyy');
        }
        if (lbltendcash == undefined || lbltendcash == null || lbltendcash == '' || isNaN(lbltendcash)) { lbltendcash = "0"; }
        if (lblchange == undefined || lblchange == null || lblchange == '' || isNaN(lblchange)) { lblchange = "0"; }
        if (lblcardtype == undefined || lblcardtype == null || lblcardtype == '' || isNaN(lblcardtype)) { lblcardtype = "0"; }
        if (hdncardtypeId == undefined || hdncardtypeId == null || hdncardtypeId == '' || isNaN(hdncardtypeId)) { hdncardtypeId = "0"; }
        if (hdncurrId == undefined || hdncurrId == null || hdncurrId == '' || isNaN(hdncurrId)) { hdncurrId = "0"; }
        if (AUTH_CD == undefined || AUTH_CD == null || AUTH_CD == NaN) { AUTH_CD = ''; }
        if (hdnsrvchargpct == undefined || hdnsrvchargpct == null || hdnsrvchargpct == '' || isNaN(hdnsrvchargpct)) { hdnsrvchargpct = "0"; }
        if (hdnsrvchargamt == undefined || hdnsrvchargamt == null || hdnsrvchargamt == '' || isNaN(hdnsrvchargamt)) { hdnsrvchargamt = "0"; }
        if (parseFloat(lblchange) > 0) {
            var receiptChange = parseFloat(lblchange) / parseFloat(lblexchrate);
            receiptChange = setProperDecimalsCorpPer(receiptChange);
            if (lblconvertedamt == '' || lblconvertedamt == null || lblconvertedamt == undefined || isNaN(lblconvertedamt)) { lblconvertedamt = "0"; }
        }

        countrep++;
        var amount = parseFloat(lblAmount) > 0 ? lblAmount : lblconvertedamt;
        var convAmt = parseFloat(lblconvertedamt) > 0 ? lblconvertedamt : lblAmount;
        var Remarks = ReplaceSplCharactor(document.getElementById('' + ctrlcom + '_ReceiptControl2_txtRemarks').value);
        _Xml_Recpt_String += FoRecpayDetXml(paymentmodeid, amount, Remarks, hdncurrId, lblexchrate, convAmt, lbltendcash, lblchange, newpaymentcommid, rec_type_id, UmrNO, lblcardno, hdnbankid, lblcardexpdt, cheque_dt, cheque_reql_dt, chq_issue_name, lblauthcode, lblbankname, '', hdncardtypeId, hdnsrvchargpct, hdnsrvchargamt, gridhdnplutusreferenceval);

    });

    if (countrep == 0) {
        _Xml_Recpt_String += "<FO_RECPAY_DET ";
        _Xml_Recpt_String += " TRANSACTION_DET_ID=$" + 0 + "$";
        _Xml_Recpt_String += " PAYMENT_MODE_ID=$" + "1" + "$";
        _Xml_Recpt_String += " AMOUNT=$" + "0" + "$";
        _Xml_Recpt_String += " REMARKS=$" + Remarks + "$";
        _Xml_Recpt_String += " SESSION_ID=$" + document.getElementById('' + ctrlcom + '_ReceiptControl2_HdnSessionID').value + "$";
        _Xml_Recpt_String += " CURR_ID=$" + 0 + "$";
        _Xml_Recpt_String += " EX_RATE=$" + 0 + "$";
        _Xml_Recpt_String += " ENTERED_AMOUNT=$" + 0 + "$";
        _Xml_Recpt_String += " TENDERED_AMOUNT=$" + 0 + "$";
        _Xml_Recpt_String += " CHANGE_AMOUNT=$" + 0 + "$";
        _Xml_Recpt_String += " CC_AUTH_CD=$" + "" + "$";
        _Xml_Recpt_String += " DC_AUTH_CD=$" + "" + "$";
        _Xml_Recpt_String += " PAYMENT_COMM_ID=$" + newpaymentcommid + "$";
        _Xml_Recpt_String += " REC_TYPE_ID=$" + rec_type_id + "$";
        _Xml_Recpt_String += " />"
    }

    return _Xml_Recpt_String;
}

function OnTransactionSelection(data) {
}
function PartyCalculateConcessionTransaction(obj) {

}
function OnConcessionSelection(data) {
}
function OnItemCardSelection(data) {
}
function btnclose12() {
    $('[id*=pnlGridPop]')[0].style.display = 'none';
}


/* insert /update multiple payment modes to grid */
function NewAddTransactionDetails() {
var clientName = $('[id*=hdnclientNameFor]').val();
    var groupid = document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnapppaymentgroupid').value;

    var form_name = document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnDocName').value;
    var selectedindex = document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlPaymentType').value;
    if (document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnDocName').value == 'CorporateCheckEntry') {
        if (selectedindex == 16 || selectedindex == 20) {
            if ($('[id*=ddlrtgsaccno] option:selected').val() == 0) {
            } else {
                $('#ctl00_ContentPlaceHolder1_hdnrtgsid').val($('[id*=ddlrtgsaccno] option:selected').val());
                $('#ctl00_ContentPlaceHolder1_hdnrtgstext').val($('[id*=ddlrtgsaccno] option:selected').text());
            }
        }
    }
    if (form_name == 'PreRefund') {
        var total_ref_amt = $('#ctl00_ContentPlaceHolder1_txtTotPaid').val();
        var total_refunded_amt = $('#ctl00_ContentPlaceHolder1_ReceiptControl2_txtCurrAmt').val();
        var receipt_amt = $('#ctl00_ContentPlaceHolder1_ReceiptControl2_txtreceiptAmount').val()
        if (total_ref_amt == '' || total_ref_amt == null || total_ref_amt == undefined)
        { total_ref_amt = 0; }
        if (total_refunded_amt == '' || total_refunded_amt == null || total_refunded_amt == undefined)
        { total_refunded_amt = 0; }
        if (receipt_amt == '' || receipt_amt == null || receipt_amt == undefined)
        { receipt_amt = 0; }
        if (parseFloat(total_refunded_amt) > (parseFloat(total_ref_amt) - parseFloat(receipt_amt))) {
            $(".stoast").toastText("warning", "Pre Refund Amount Should not Give More Than Total Paid amount", 5, 3);
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtamt').value = '';
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtCurrAmt').value = '';
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtTenderedAmt').value = '';
            return false;
        }
        else {
            if (document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlPaymentType').value == '18') {

                var tAmt = $('#ctl00_ContentPlaceHolder1_ReceiptControl2_txtTenderedAmt').val();
                if (tAmt == '' || tAmt == null || tAmt == undefined) { tAmt = 0; }
                $('[id*=hdnExToAdvAmt]').val(tAmt);
            }
        }
    }
    if (form_name == 'PreRefund') {
        var total_ref_amt = $('#ctl00_ContentPlaceHolder1_txtTotPaid').val();
        var total_refunded_amt = $('#ctl00_ContentPlaceHolder1_ReceiptControl2_txtCurrAmt').val();
        var receipt_amt = $('#ctl00_ContentPlaceHolder1_ReceiptControl2_txtreceiptAmount').val()
        if (total_ref_amt == '' || total_ref_amt == null || total_ref_amt == undefined)
        { total_ref_amt = 0; }
        if (total_refunded_amt == '' || total_refunded_amt == null || total_refunded_amt == undefined)
        { total_refunded_amt = 0; }
        if (receipt_amt == '' || receipt_amt == null || receipt_amt == undefined)
        { receipt_amt = 0; }
        if (parseFloat(total_refunded_amt) > (parseFloat(total_ref_amt) - parseFloat(receipt_amt))) {
            $(".stoast").toastText("warning", "Pre Refund Amount Should not Give More Than Total Paid amount", 5, 3);
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtamt').value = '';
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtCurrAmt').value = '';
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtTenderedAmt').value = '';
            return false;
        }
        else {
            if (document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlPaymentType').value == '18') {

                var tAmt = $('#ctl00_ContentPlaceHolder1_ReceiptControl2_txtTenderedAmt').val();
                if (tAmt == '' || tAmt == null || tAmt == undefined) { tAmt = 0; }
                $('[id*=hdnExToAdvAmt]').val(tAmt);
            }
        }
    }

    if (form_name == 'Refund') {
     var pay_mode = $('#ctl00_ContentPlaceHolder1_ReceiptControl2_ddlPaymentType').val();
        var amount = 0;
        if (pay_mode == 1 || pay_mode == 11 || pay_mode == 12 || pay_mode == 18) {
            amount = $('#ctl00_ContentPlaceHolder1_ReceiptControl2_txtTenderedAmt').val();
        }
        else {
            amount = $('#ctl00_ContentPlaceHolder1_ReceiptControl2_txtamt').val();
        }
        if (amount == '' || amount == null || amount == undefined) { amount = 0; }

        if(preadvflag=='SD')
        {
            if(ctl00_ContentPlaceHolder1_ReceiptControl2_txtreqamtkyd.value!=0 && amount!=ctl00_ContentPlaceHolder1_ReceiptControl2_txtreqamtkyd.value)
            {
            $(".stoast").toastText("warning", "You can Add only Entire Required Amt!.", 5, 3);
                return false;
            }
        }
        else
        {
            var total_ref_amt = $('#ctl00_ContentPlaceHolder1_txtRefundableAmt').val();
            var total_refunded_amt = $('#ctl00_ContentPlaceHolder1_txtRefundAmt').val();
            if (total_ref_amt == '' || total_ref_amt == null || total_ref_amt == undefined)
            { total_ref_amt = 0; }
            if (total_refunded_amt == '' || total_refunded_amt == null || total_refunded_amt == undefined)
            { total_refunded_amt = 0; }
       
            var change = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtChangeKyd').value;
            if (change == '' || change == null || change == undefined || isNaN(change)) { change = 0; }
            var tot_amt = 0;
            if (pay_mode == 1) {
                tot_amt = parseFloat(amount) + parseFloat(total_refunded_amt) - parseFloat(change);
            }
            else {
                tot_amt = parseFloat(amount) + parseFloat(total_refunded_amt);
            }
            if (parseFloat(tot_amt) > parseFloat(total_ref_amt) && preadvflag=='SD') {
                $(".stoast").toastText("warning", "Refund Amount Should not Give More Than Refundable amount", 5, 3);
                return false;
            }
       }
    }
    if (form_name == 'PREADVANCE') {
     if((ctl00_ContentPlaceHolder1_chkSDReg.checked==true||ctl00_ContentPlaceHolder1_chkSDRef.checked==true) &&ctl00_ContentPlaceHolder1_ReceiptControl2_txtreqamtkyd.value==0){
       $(".stoast").toastText("warning", "Please select atleast one Deposit!.", 5, 3);
                return false; 
     }
     else if((ctl00_ContentPlaceHolder1_chkSDReg.checked==true||ctl00_ContentPlaceHolder1_chkSDRef.checked==true) &&ctl00_ContentPlaceHolder1_ReceiptControl2_txtreqamtkyd.value!=0){
            if(ctl00_ContentPlaceHolder1_ReceiptControl2_txtCurrAmt.value!=ctl00_ContentPlaceHolder1_ReceiptControl2_txtreqamtkyd.value){ 
                $(".stoast").toastText("warning", "You can Add only Entire Required Amt!.", 5, 3);
                return false; 
            }
      }
    }
                    
    if (form_name == 'companyRefund') {
        var total_ref_amt = $('#ctl00_ContentPlaceHolder1_txtRefundableAmt').val();
        var total_refunded_amt = $('#ctl00_ContentPlaceHolder1_txtRefundAmt').val();
        if (total_ref_amt == '' || total_ref_amt == null || total_ref_amt == undefined)
        { total_ref_amt = 0; }
        if (total_refunded_amt == '' || total_refunded_amt == null || total_refunded_amt == undefined)
        { total_refunded_amt = 0; }
        var pay_mode = $('#ctl00_ContentPlaceHolder1_ReceiptControl2_ddlPaymentType').val();
        var amount = 0;
        if (groupid == 1) {
            amount = $('#ctl00_ContentPlaceHolder1_ReceiptControl2_txtTenderedAmt').val();
        }
        else {
            amount = $('#ctl00_ContentPlaceHolder1_ReceiptControl2_txtamt').val();
        }
        if (amount == '' || amount == null || amount == undefined) { amount = 0; }
        var change = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtChangeKyd').value;
        if (change == '' || change == null || change == undefined || isNaN(change)) { change = 0; }
        var tot_amt = 0;
        if (pay_mode == 1) {
            tot_amt = parseFloat(amount) - parseFloat(change);
        }
        else {
            tot_amt = parseFloat(amount);
        }
        if (parseFloat(tot_amt) > parseFloat(total_ref_amt)) {
            $(".stoast").toastText("warning", "Refund Amount Should not Give More Than Refundable amount", 5, 3);
            return false;
        }
    }
    if (document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlPaymentType').value == '4') {
        if (form_name == "NewChangeReceipt" || form_name == 'Refund')
        { }
        else {
            var otpreq = $('#ctl00_ContentPlaceHolder1_ReceiptControl2_hdnotprequired').val();
            var page_l_opt_setting = document.getElementById('' + ctrlcom + '_ReceiptControl2_chkotpadvanced').checked;
            if (otpreq == 'True' && page_l_opt_setting == true) {
                var otp = document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnotp').value;
                var entered_otp = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtadjustmentamt').value;
                if (entered_otp == otp)
                { }
                else {
                    $(".stoast").toastText("warning", "Please verify OTP number!", 5, 3);
                    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtadjustmentamt').focus();
                    return false;
                }
            }
        }
    }
    else
    { }

    document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlPaymentType').disabled = false;
    var selectedindex = document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlPaymentType').value;
    if (selectedindex == '' || selectedindex == undefined || selectedindex == null) { selectedindex = 0; }
    if (document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlPaymentType').value == 0) {
        $(".stoast").toastText("Info", "Please select payment type", 5, 3);
        return false;
    }
    var duamt = 0;
    if (document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnDocName').value == 'OUTSTDNGDUE') {
        duamt = document.getElementById('' + ctrlcom + '_txtDueAmount').value;
    }
    else if (document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnDocName').value == 'ASSESOUTSTDNGDUE') {

        $("table[id$=tbl_Prevoius_Settled_Bills_sch] tr [type=checkbox]").attr('disabled', true);
        var assesmentamount = 0;
        $("table[id$=tbl_Prevoius_Settled_Bills_sch] tr [type=checkbox]:checked").each(function (e) {
            var inneramount = $(this).closest('tr').find("[id*=lbl3]").text();
            if (inneramount == undefined || inneramount == "") {
                inneramount = 0;
            }
            assesmentamount += parseFloat(inneramount);
        });
        duamt = assesmentamount;
        if (duamt == '' || duamt == undefined || duamt == null || isNaN(duamt)) { duamt == "0"; }
    }
    else {
        duamt = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatdue').value;
    }
    if (document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnDocName').value == 'NewChangeReceipt') {
        duamt = document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnDueAmt').value;
    }
    if (document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnDocName').value == 'CorporateCheckEntry') {
        duamt = 50000000000;
    }

    if (duamt == "" || isNaN(duamt) || duamt == undefined) {
        duamt = 0;
    }
    var tendoramt = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtTenderedAmt').value;
    var amt = $('#ctl00_ContentPlaceHolder1_ReceiptControl2_txtamt').val();
    if (tendoramt == '.' || tendoramt == '' || tendoramt == undefined || tendoramt == null) { tendoramt = 0; }
    if (amt == '.' || amt == '' || amt == undefined || amt == null) { amt = 0; }
    var _paymentTypeID = document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlPaymentType').value;
    if (form_name == 'IpAdvance' || form_name == 'IPFINAL' || form_name == 'IMRSRVENTRY' || form_name == 'OUTSTDNGDUE') {
        if (_paymentTypeID == 11 || _paymentTypeID == 1) {
            var AdvAmtLimit = $('[id*=hdnAdvAmtLimit]').val();
            var AdvLimitMand = $('[id*=hdnAdvAmtLmtMand]').val();
            if (AdvAmtLimit == '' || AdvAmtLimit == null || AdvAmtLimit == undefined) { AdvAmtLimit = 0; }
            if (AdvLimitMand == '' || AdvLimitMand == null || AdvLimitMand == undefined) { AdvLimitMand = "false"; }
            var PrvCashAmt = $('[id*=hdnAdmnCashAmt]').val();
            if (PrvCashAmt == '' || PrvCashAmt == null || PrvCashAmt == undefined) { PrvCashAmt = 0; }
            var TotCashAmt = parseFloat(tendoramt) + parseFloat(PrvCashAmt);
            if (parseFloat(AdvAmtLimit) > 0) {
                if (parseFloat(AdvAmtLimit) < parseFloat(TotCashAmt)) {
                    $(".stoast").toastText("Info", "Patient cash amount limit has exceed..!", 5, 2);
                    if (_paymentTypeID != 11) {
                        if (AdvLimitMand.trim().toLowerCase() == 'true') {
                            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtTenderedAmt').value = 0;
                            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtamt').value = 0;
                            return false;
                        }
                        else {
                            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtamt').value = 0;
                            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtTenderedAmt').value = 0;
                        }
                    }
                }
            }
        }
    }else if ( form_name=='Cons' || form_name=='OP'|| form_name=='OPQUICK'|| form_name=='PREADVANCE' ){
    
           if (_paymentTypeID == 11 || _paymentTypeID == 1) {
              var AdvAmtLimit = $('[id*=hdncashlmtamt]').val();
            var AdvLimitMand = $('[id*=hdnAdvAmtLmtMand]').val();
            if (AdvAmtLimit == '' || AdvAmtLimit == null || AdvAmtLimit == undefined) { AdvAmtLimit = 0; }
            if (AdvLimitMand == '' || AdvLimitMand == null || AdvLimitMand == undefined) { AdvLimitMand = "false"; }
            var chgCashAmt =$('#ctl00_ContentPlaceHolder1_ReceiptControl2_txtChangeKyd').val()
        if (chgCashAmt == '' || chgCashAmt == null || chgCashAmt == undefined) { chgCashAmt = 0; }
        var TotCashAmt = parseFloat(tendoramt) - parseFloat(chgCashAmt);
             if (parseFloat(AdvAmtLimit) > 0) {
                if (parseFloat(AdvAmtLimit) < parseFloat(TotCashAmt)) {
                    $(".stoast").toastText("Info", "Patient cash amount limit has exceed..!", 5, 2);
                    if (_paymentTypeID != 11) {
                        if (AdvLimitMand.trim().toLowerCase() == 'true') {
                            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtTenderedAmt').value = 0;
                            return false;
                        }
                        else {
                            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtTenderedAmt').value = 0;
                        }
                    }
                }
            }
        }
        }

    if (parseFloat(tendoramt) < 0) {
        $(".stoast").toastText("Info", "System cannot accept the entered amount", 5, 3);
        return false;
    }
    if (parseFloat(amt) < 0) {
        $(".stoast").toastText("Info", "System cannot accept the entered amount", 5, 3);
        return false;
    }
    /* added on 24.08.2016 */
    if (groupid == 11) {
        /* if (document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlPaymentType').style.display = 'block') {*/
        var AdvadjustAmt = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtadjustmentamt').value;
        var TenderedAmt = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtTenderedAmt').value;
        var dueamt = 0;
        if (document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnDocName').value == 'OUTSTDNGDUE') {
            dueamt = document.getElementById('' + ctrlcom + '_txtDueAmount').value;
        }
        else {
            dueamt = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatdue').value;
        }
        if (AdvadjustAmt == "" || isNaN(AdvadjustAmt) || AdvadjustAmt == undefined) {
            AdvadjustAmt = 0;
        }
        if (dueamt == "" || isNaN(dueamt) || dueamt == undefined || dueamt == null) {
            dueamt = 0;
        }
        if (TenderedAmt == "" || isNaN(TenderedAmt) || TenderedAmt == undefined) {
            TenderedAmt = 0;
        }

        if (parseFloat(TenderedAmt) > parseFloat(AdvadjustAmt)) {
            $(".stoast").toastText("Info", "Tendered Amount Should Not Greater than Advance Adjustment Amt.", 5, 3);
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtTenderedAmt').value = '';
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtTenderedAmt').focus();
            return false;
        }
        if (document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnDocName').value == 'IpAdvance') {
            $('[id*=hdnAdvanceAdjst]').val(TenderedAmt);
        }
        $('[id*=hdnAdjustableAdvAmt]').val(parseFloat($('[id*=hdnAdjustableAdvAmt]').val() - TenderedAmt))
        /* }*/
    }
    if (document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnDocName').value == "Refund") {
        var recievemobileno = document.getElementById('' + ctrlcom + '_txtrecmobile_no').value;
        if (pay_mode == 4 && (recievemobileno.length < 10 || recievemobileno == "" || recievemobileno == "0000000000")) {
            $(".stoast").toastText("Info", "Please Enter The Mobile No", 5, 3);
            document.getElementById('' + ctrlcom + '_txtrecmobile_no').focus();
            return false;
        }
    }
    if (document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnDocName').value != "Refund" && document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnDocName').value != "OUTSTDNGDUE" && document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnDocName').value != "ASSESOUTSTDNGDUE") {
        if (document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlPaymentType').value == "12") {
            var tendoramnt = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtTenderedAmt').value;
            var fundamnt = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtorganizationFund').value;
            var DueAmnt = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatdue').value;
            if (tendoramnt == '.' || tendoramnt == '' || tendoramnt == undefined || tendoramnt == null) { tendoramnt = 0; }
            if (fundamnt == '.' || fundamnt == '' || fundamnt == undefined || fundamnt == null) { fundamnt = 0; }
            if (DueAmnt == '.' || DueAmnt == '' || DueAmnt == undefined || DueAmnt == null) { DueAmnt = 0; }
            if (parseFloat(tendoramnt) > parseFloat(DueAmnt)) {
                $(".stoast").toastText("Info", "Paid Amount Can Not Accept More Then Due Amount", 5, 3);
                return false;
            }
            if (parseFloat(tendoramnt) > parseFloat(fundamnt)) {
                $(".stoast").toastText("Info", "Paid Amount Can Not Accept Greter Then Fund Amount", 5, 3);
                return false;
            }
        }
    }

    /* up to here */

    /*Validations starts*/
    var count = 0;
    var cashcount = 0, advcount = 0, fundcount = 0, cardCount = 0, paymastercount = 0, NCBcount = 0,
    sagicount = 0, scotcount = 0, jdfcount = 0, nhfcount = 0, online = 0, vochar = 0, others = 0;
    var total_conv_amt = 0, GvRowscount = 1, count = 0;
    var grid = document.getElementById('' + ctrlcom + '_ReceiptControl2_gvReceiptDetails');
    var _index = 0;
    var _index = grid.rows.length;
    var _CurrencyID = document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlCurrency').value;
    // var _CurrencyID = $('#ctl00_ContentPlaceHolder1_ReceiptControl2_ddlCurrency').find('option:selected').text();
    var _cardNumber = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtCardNo').value;
    if (_CurrencyID == null || _CurrencyID == undefined || _CurrencyID == '') { _CurrencyID = "0"; }
    var chequecount = 0;
    var hdnbankname = '';
    var sel_text = $('#ctl00_ContentPlaceHolder1_ReceiptControl2_ddlPaymentType').find('option:selected').text();
    var totaltext = '';
    $("table[id*=gvReceiptDetails] tr:has(td)").each(function (e) {
        total_conv_amt = 0;
        for (GvRowscount; GvRowscount < _index; GvRowscount++) {
            var currid = $('[id$=gvReceiptDetails] tr').filter(':eq(' + GvRowscount + ')').find('[id*=hdncurrId]').val()
            var cardNo = $('[id$=gvReceiptDetails] tr').filter(':eq(' + GvRowscount + ')').find('[id*=lblcardno]').text()
            var bank_name = $('#ctl00_ContentPlaceHolder1_ReceiptControl2_ddlBankName').find('option:selected').text();
            var hdnpaymentappgroupid1 = $('[id$=gvReceiptDetails] tr').filter(':eq(' + GvRowscount + ')').find('[id*=hdnpaymentappgroupid]').val();

            if (currid == null || currid == undefined || currid == '') { currid = "0"; }

            if ($('[id$=gvReceiptDetails] tr').filter(':eq(' + GvRowscount + ')').find('[id*=lblrecmode]').text() != '') {
                count++;
            }
            if ((parseFloat(hdnpaymentappgroupid1) == '1' || (hdnpaymentappgroupid1) == '11')) {
                if ($('[id$=gvReceiptDetails] tr').filter(':eq(' + GvRowscount + ')').find('[id*=lblrecmode]').text() == $('#ctl00_ContentPlaceHolder1_ReceiptControl2_ddlPaymentType').find('option:selected').text() && currid == _CurrencyID) {
                    if (cashcount == 0) {
                        cashcount = 1;
                        totaltext = $('#ctl00_ContentPlaceHolder1_ReceiptControl2_ddlPaymentType').find('option:selected').text();
                    }
                }
            }
            if ((document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnHospitalPayment').value == 'PAYMENT' && hdnpaymentappgroupid1!=''&& form_name=='UVP')) {
                
                    if (cashcount == 0) {
                        cashcount = 1;
                        totaltext = $('#ctl00_ContentPlaceHolder1_ReceiptControl2_ddlPaymentType').find('option:selected').text();
                
                }
            }
            if (parseFloat(hdnpaymentappgroupid1) == '5') {
                if (currid == _CurrencyID && cardNo == _cardNumber && cardNo != "" && _cardNumber != "") {
                    if (cardCount == 0) {
                        cardCount = 1;
                    }
                }
            }

            var conv_amt = $('[id$=gvReceiptDetails] tr').filter(':eq(' + GvRowscount + ')').find('[id*=lblconvertedamt]').text();
            /* added by rani */
            hdnbankname = $('[id$=gvReceiptDetails] tr').filter(':eq(' + GvRowscount + ')').find('[id*=lblbankname]').text();
            var selectedindex1 = document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlBankName').value;
            if (selectedindex1 == '' || selectedindex1 == null || selectedindex1 == undefined) { selectedindex1 = 0; }
            var cardnum = $('[id$=gvReceiptDetails] tr').filter(':eq(' + GvRowscount + ')').find('[id*=lblcardno]').text();
            var sel_text = $('#ctl00_ContentPlaceHolder1_ReceiptControl2_ddlPaymentType').find('option:selected').text();
            if (hdnbankname == bank_name && sel_text == 'Cheque' && cardnum == _cardNumber) {
                if (chequecount == 0) {
                    chequecount = 1;
                }

            }
            /* up to here */
            if (parseFloat(conv_amt) > 0) { } else { conv_amt = 0; }
            total_conv_amt = setProperDecimalsCorpPer(parseFloat(conv_amt) + parseFloat(total_conv_amt));
        }
    });

    var tend_amt = $('#ctl00_ContentPlaceHolder1_ReceiptControl2_txtTenderedAmt').val();
    var amt_out = $('#ctl00_ContentPlaceHolder1_ReceiptControl2_txtamt').val();
    if (parseFloat(tend_amt) > 0) { } else { tend_amt = 0; }
    if (parseFloat(amt_out) > 0) { } else { amt_out = 0; }
    var ConvAmtTotal = setProperDecimalsCorpPer(parseFloat(tend_amt) + parseFloat(amt_out) + parseFloat(total_conv_amt));
    total_conv_amt = ConvAmtTotal;
    var sel_text = $('#ctl00_ContentPlaceHolder1_ReceiptControl2_ddlPaymentType').find('option:selected').text();
    if(form_name=='UVP' && cashcount != 0){$(".stoast").toastText("Info", "More Than One Payment Mode Entry is Not Allowed.", 5, 3);return false;}
    else {if(cashcount != 0) {
        $(".stoast").toastText("Info", "More than one '" + totaltext + "' entry not allowed.", 5, 3);
        return false;
    }}
       var clientname = $('[id*=hdnclientNameFor]').val();
        clientname = clientname.toUpperCase();
    var alerts;
    if (groupid == 1) {
        if (document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlCurrency').value == 0) {
            document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlCurrency').focus();
            return false;
        }
        if (document.getElementById('' + ctrlcom + '_ReceiptControl2_txtTenderedAmt').value == '' || document.getElementById('' + ctrlcom + '_ReceiptControl2_txtTenderedAmt').value == 0) {
            $(".stoast").toastText("Info", "Please enter the tendered amount.", 5, 3);
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtTenderedAmt').focus();
            return false;
        }
    }
    if (groupid == 2) {
        if (document.getElementById('' + ctrlcom + '_ReceiptControl2_txtamt').value == '' || document.getElementById('' + ctrlcom + '_ReceiptControl2_txtamt').value == 0) {
            $(".stoast").toastText("Info", "please enter the amount.", 5, 3);
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtamt').focus();
            return false;
        }

        if (document.getElementById('' + ctrlcom + '_ReceiptControl2_txtTenderedAmt').value == '' || document.getElementById('' + ctrlcom + '_ReceiptControl2_txtTenderedAmt').value == 0) {
            $(".stoast").toastText("Info", "please enter the Tendered amount.", 5, 3);
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtTenderedAmt').focus();
            return false;
        }


        if (document.getElementById('' + ctrlcom + '_ReceiptControl2_txtCardNo').value == '' && document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnCardNoMand').value=='YES') {
            $(".stoast").toastText("Info", "please enter the card no.", 5, 3);
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtCardNo').focus();
            return false;
        }
        if (clientname != 'TTW' && clientname !='ASRAM') {
            if (document.getElementById('' + ctrlcom + '_ReceiptControl2_txtAuthCode').value == '' && document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnCardRefNoMand').value=='YES') {
                $(".stoast").toastText("Info", "please enter the autherization code.", 5, 3);
                document.getElementById('' + ctrlcom + '_ReceiptControl2_txtAuthCode').focus();
                return false;
            }
        }
    }
    if (groupid == 5) {
     
        if (cardCount != '0') {
            $(".stoast").toastText("Info", "More than one card entry not allowed.", 5, 3);
            return false;
        }
        if (document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlCurrency').value == 0) {
            $(".stoast").toastText("Info", "please select the currecy type.", 5, 3);
            document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlCurrency').focus();
            return false;
        }
        if (document.getElementById('' + ctrlcom + '_ReceiptControl2_txtamt').value == '' || document.getElementById('' + ctrlcom + '_ReceiptControl2_txtamt').value == 0) {
            $(".stoast").toastText("Info", "please enter the amount.", 5, 3);
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtamt').focus();
            return false;
        }
        if (document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlBankName').value == 0) {
            $(".stoast").toastText("Info", "please select the bank name.", 5, 3);
            document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlBankName').focus();
            return false;
        }
        if ($('[id*=hdnExpiredateman]').val() == 'YES') {
            if (document.getElementById('' + ctrlcom + '_ReceiptControl2_txtExpDt').value == '') {
                $(".stoast").toastText("Info", "please select the expire date.", 5, 3);
                document.getElementById('' + ctrlcom + '_ReceiptControl2_txtExpDt').focus();
                return false;
            } 
        }
        if (document.getElementById('' + ctrlcom + '_ReceiptControl2_txtCardNo').value == '' && document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnCardNoMand').value=='YES') {
            $(".stoast").toastText("Info", "please enter the card no.", 5, 3);
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtCardNo').focus();
            return false;
        }
        if (clientname != 'TTW' && clientname !='ASRAM') {
            if (document.getElementById('' + ctrlcom + '_ReceiptControl2_txtAuthCode').value == '' && document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnCardRefNoMand').value=='YES') {
                $(".stoast").toastText("Info", "please enter the autherization code.", 5, 3);
                document.getElementById('' + ctrlcom + '_ReceiptControl2_txtAuthCode').focus();
                return false;
            }
        }
        if (document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlPaymentType').value == 0) {
            $(".stoast").toastText("Info", "please the payment type.", 5, 3);
            document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlPaymentType').focus();
            return false;
        }
        if (document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlCardType').value == 0) {
            $(".stoast").toastText("Info", "please the Card type.", 5, 3);
            document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlCardType').focus();
            return false;
        }

    }
    if (groupid == 8) {
        if (cardCount != '0') {
            /*$(".stoast").toastText("Info", "More than one card entry not allowed.", 5, 3);
            return false;*/
        }
        if (document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlCurrency').value == 0) {
            $(".stoast").toastText("Info", "please select the currecy type.", 5, 3);
            document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlCurrency').focus();
            return false;
        }
        if (document.getElementById('' + ctrlcom + '_ReceiptControl2_txtamt').value == '' || document.getElementById('' + ctrlcom + '_ReceiptControl2_txtamt').value == 0) {
            $(".stoast").toastText("Info", "please enter the amount.", 5, 3);
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtamt').focus();
            return false;
        }
        if (document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlBankName').value == 0) {
            $(".stoast").toastText("Info", "please select the bank name.", 5, 3);
            document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlBankName').focus();
            return false;
        }

        /*if (document.getElementById('' + ctrlcom + '_ReceiptControl2_txtCardNo').value == '') {
        $(".stoast").toastText("Info", "please enter the Refer no.", 5, 3);
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtCardNo').focus();
        return false;
        }*/
        if (document.getElementById('' + ctrlcom + '_ReceiptControl2_txtAuthCode').value == '' && document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnCardRefNoMand').value=='YES') {
            $(".stoast").toastText("Info", "please enter the Refer Trans#.", 5, 3);
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtAuthCode').focus();
            return false;
        }

        if (document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlPaymentType').value == 0) {
            $(".stoast").toastText("Info", "please the payment type.", 5, 3);
            document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlPaymentType').focus();
            return false;
        }

    }
    if(groupid == '6' || (groupid == '12' &&clientName=='MRRCH')) {
            if (document.getElementById('' + ctrlcom + '_ReceiptControl2_txtamt').value == '' || document.getElementById('' + ctrlcom + '_ReceiptControl2_txtamt').value == 0) {
            $(".stoast").toastText("Info", "please enter the text amount.", 5, 3);
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtamt').focus();
            return false;
        }
            if (document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlBankName').value == 0) {
            $(".stoast").toastText("Info", "please select the bank name.", 5, 3);
            document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlBankName').focus();
            return false;
        }
            if (document.getElementById('' + ctrlcom + '_ReceiptControl2_txtCardNo').value == '' && document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnCardNoMand').value=='YES') {
            $(".stoast").toastText("Info", "please enter the card no.", 5, 3);
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtCardNo').focus();
            return false;
        }


    }
    if (groupid == '12' && clientName!='MRRCH') {
        if (document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlCurrency').value == 0) {
            $(".stoast").toastText("Info", "please select the currency type.", 5, 3);
            document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlCurrency').focus();
            return false;
        }
        if (document.getElementById('' + ctrlcom + '_ReceiptControl2_txtamt').value == '' || document.getElementById('' + ctrlcom + '_ReceiptControl2_txtamt').value == 0) {
            $(".stoast").toastText("Info", "please enter the text amount.", 5, 3);
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtamt').focus();
            return false;
        }
        if (document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlBankName').value == 0) {
            $(".stoast").toastText("Info", "please select the bank name.", 5, 3);
            document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlBankName').focus();
            return false;
        }
        /*if (document.getElementById('' + ctrlcom + '_ReceiptControl2_txtExpDt').value == '') {
        $(".stoast").toastText("Info", "please enter the expire date.", 5, 3);
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtExpDt').focus();
        return false;
        }*/
        if (document.getElementById('' + ctrlcom + '_ReceiptControl2_txtCardNo').value == '' && document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnCardNoMand').value=='YES') {
            $(".stoast").toastText("Info", "please enter the card no.", 5, 3);
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtCardNo').focus();
            return false;
        }
        if (document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlPaymentType').value == 0) {
            $(".stoast").toastText("Info", "please enter the payment type.", 5, 3);
            document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlPaymentType').focus();
            return false;
        }
        if (document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlCardType').value == 0) {
            $(".stoast").toastText("Info", "Please select the Card Type!.", 5, 3);
            document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlCardType').focus();
            return false;
        }
        if (document.getElementById('' + ctrlcom + '_ReceiptControl2_txtAuthCode').value == 0 && document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnCardRefNoMand').value=='YES') {
            $(".stoast").toastText("Info", "please enter Authorization CD.", 5, 3);
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtAuthCode').focus();
            return false;
        }

    }
    if (groupid == '7') {
        if (document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlCurrency').value == 0) {
            $(".stoast").toastText("Info", "please select the currency.", 5, 3);
            document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlCurrency').focus();
            return false;
        }
        if (document.getElementById('' + ctrlcom + '_ReceiptControl2_txtamt').value == '' || document.getElementById('' + ctrlcom + '_ReceiptControl2_txtamt').value == 0) {
            $(".stoast").toastText("Info", "please enter the amount.", 5, 3);
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtamt').focus();
            return false;
        }
        /*      if (document.getElementById('' + ctrlcom + '_ReceiptControl2_txtsrvcharges').value == '' || document.getElementById('' + ctrlcom + '_ReceiptControl2_txtsrvcharges').value == 0) {
        $(".stoast").toastText("Info", "please enter the servicecharge.", 5, 3);
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtsrvcharges').focus();
        return false;
        }*/
        if (document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlBankName').value == 0) {
            $(".stoast").toastText("Info", "please select the bankname.", 5, 3);
            document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlBankName').focus();
            return false;
        }
        /*if (sel_text != "Cheque") {
        if (document.getElementById('' + ctrlcom + '_ReceiptControl2_txtExpDt').value == '') {
        $(".stoast").toastText("Info", "please enter the expire date.", 5, 3);
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtExpDt').focus();
        return false;
        }
        }*/
        if (document.getElementById('' + ctrlcom + '_ReceiptControl2_txtCardNo').value == '' && document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnCardNoMand').value=='YES') {
            $(".stoast").toastText("Info", "please enter the card no.", 5, 3);
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtCardNo').focus();
            return false;
        }
        if (sel_text != 'Cheque') {
            /*if (document.getElementById('' + ctrlcom + '_ReceiptControl2_UCchequeAuth_txtSearchControl').value == '') {
            $(".stoast").toastText("Warning", "please select the autherization", 5, 3);
            document.getElementById('' + ctrlcom + '_ReceiptControl2_UCchequeAuth_txtSearchControl').focus();
            return false;
            }*/
            /*if (document.getElementById('' + ctrlcom + '_ReceiptControl2_txtchequedt').value == '') {
            $(".stoast").toastText("Warning", "Please Select the Cheque Date", 5, 3);
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtchequedt').focus();
            return false;
            }*/
            /*if (document.getElementById('' + ctrlcom + '_ReceiptControl2_txtcqissuername').value == '') {
            $(".stoast").toastText("Warning", "Please Enter the Cheque Issuer Name", 5, 3);
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtcqissuername').focus();
            return false;
            }*/
            /*if (document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnDocName').value == 'CorporateCheckEntry') {
            if (document.getElementById('' + ctrlcom + '_ReceiptControl2_txtchequerealizedt').value == '') {
            $(".stoast").toastText("Warning", "Please Enter the Cheque Realization Date", 5, 3)
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtchequerealizedt').focus();
            return false;
            }

            }*/
        }

    }
    if (sel_text == 'Cheque') {
        if (chequecount != 0) {
            $(".stoast").toastText("Info", "More Than One Not Allowed with same Cheque No. and same bank name.", 5, 3);
            return false;
        }
    }
    if (groupid == '11' || groupid == '4') {
        if (document.getElementById('' + ctrlcom + '_ReceiptControl2_txtTenderedAmt').value == '' || document.getElementById('' + ctrlcom + '_ReceiptControl2_txtTenderedAmt').value == 0) {
            $(".stoast").toastText("Info", "Please enter the tendered amount.", 5, 3);
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtTenderedAmt').focus();
            return false;
        }
    }


    var form_name = $('#ctl00_ContentPlaceHolder1_ReceiptControl2_hdnDocName').val();
    var Rest_Amt = 0;

    /*Validations Ends*/
    var cardno_count = 0;
    var selectedindex = document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlPaymentType').value;
    var bankselectedindex = document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlBankName').value;
    var cardselectedindex = document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlCardType').value;
    if (selectedindex == undefined || selectedindex == null || selectedindex == '') { selectedindex = 0; }
    if (bankselectedindex == undefined || bankselectedindex == null || bankselectedindex == '') { bankselectedindex = 0; }
    if (cardselectedindex == undefined || cardselectedindex == null || cardselectedindex == '') { cardselectedindex = 0; }

    var len = document.getElementById('' + ctrlcom + '_ReceiptControl2_gvReceiptDetails').rows.length;
    $("table[id*=gvReceiptDetails] tr:has(td)").each(function (e) {
        for (var i = 0; i < len; i++) {
            var mode = $(this).closest('tr').find('[id*=lblrecmode]').text();
            var bankname = $(this).closest('tr').find('[id*=lblbankname]').text();
            var cardNo = $(this).closest('tr').find('[id*=lblcardno]').text();
            var cardtype = $(this).closest('tr').find('[id*=lblcardtype]').text();
            var cardname = '';
            var txtmode = $('#ctl00_ContentPlaceHolder1_ReceiptControl2_ddlPaymentType').find('option:selected').text();
            var hdnpaymentappgroupid = $(this).closest('tr').find('[id*=hdnpaymentappgroupid]').val();


            if (txtmode == '' || txtmode == null || txtmode == undefined) { txtmode = ''; }
            cardname = txtmode;

            var txtbankname = $('#ctl00_ContentPlaceHolder1_ReceiptControl2_ddlBankName').find('option:selected').text();
            var txtcardno = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtCardNo').value;
            var txtcardtype = $('#ctl00_ContentPlaceHolder1_ReceiptControl2_ddlCardType').find('option:selected').text();
            if (mode == '' || mode == null || mode == undefined) { mode = ''; }
            if (bankname == '' || bankname == null || bankname == undefined) { bankname = ''; }
            if (cardNo == '' || cardNo == null || cardNo == undefined) { cardNo = '0'; }
            if (cardtype == '' || cardtype == null || cardtype == undefined) { cardtype = '0'; }

            if (txtbankname == '' || txtbankname == null || txtbankname == undefined) { txtbankname = ''; }
            if (txtcardno == '' || txtcardno == null || txtcardno == undefined) { txtcardno = '0'; }
            if (txtcardtype == '' || txtcardtype == null || txtcardtype == undefined) { txtcardtype = '0'; }

            if ((hdnpaymentappgroupid == 2) && cardNo == txtcardno) {
                cardno_count = 1;
                document.getElementById('' + ctrlcom + '_ReceiptControl2_txtCardNo').value = '';
                $(".stoast").toastText("Info", "'" + cardname + "' Number Already Exists.", 5, 3);
                return false;
            }


            if (mode != 'Cash') {
                if (mode != 'Cheque' && mode != 'Demand Draft' && mode == txtmode && bankname == txtbankname && cardNo == txtcardno && cardtype == txtcardtype && cardNo != '' && txtcardno != '') {
                    cardno_count = 1;
                    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtCardNo').value = '';
                    $(".stoast").toastText("Info", "'" + cardname + "' Number Already Exists.", 5, 3);
                    return false;
                }
                else if (mode != 'Demand Draft' && mode == txtmode && bankname == txtbankname && cardNo == txtcardno && cardtype == txtcardtype && cardNo != '' && txtcardno != '') {
                    cardno_count = 1;
                    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtCardNo').value = '';
                    $(".stoast").toastText("Info", "'" + cardname + "' Number Already Exists.", 5, 3);
                    return false;
                }
            }
        }

    });
   if (form_name == "NewChangeReceipt" ){
    var cash_count =0;  var total_text='';
        var gvlength = document.getElementById('PrevReceiptDtls').rows.length;

    $("table[id*=PrevReceiptDtls] tr:has(td)").each(function (e) {
         if ($(this).closest('tr').find("input[type=checkbox][id*=check]").is(':checked') == false){

         var currid =  $(this).closest('tr').find('[id*=CURRENCY_ID]').text();
         var hdnpaymentappgroupid1 = $(this).closest('tr').find('[id*=PAYMENT_MODE_ID]').text();
         var PaymentType = $(this).closest('tr').find('[id*=PAYMENT_TYPE_MODE]').text();
         var bank_name = $(this).closest('tr').find('[id*=CQ_BANK_NAME]').text();

         var ddlPaymentType= $('#ctl00_ContentPlaceHolder1_ReceiptControl2_ddlPaymentType').find('option:selected').text();
         var selc_bankname = $('#ctl00_ContentPlaceHolder1_ReceiptControl2_ddlBankName').find('option:selected').text();
         var txtcardno = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtCardNo').value;
         var txtauthcode = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtAuthCode').value;

        var cardNo = 0;
        if(PaymentType == 'Credit Card'||PaymentType == 'UPI' || PaymentType == 'Google Pay' || PaymentType == 'PhonePe' || PaymentType == 'Paytm' || PaymentType == 'Lazypay')
        {
            cardNo= $(this).closest('tr').find('[id*=CC_CARD_NO]').text();     
        }
        else if (PaymentType == 'Debit Card')
        {
            cardNo= $(this).closest('tr').find('[id*=DC_CARD_NO]').text();
        }
        else if (PaymentType == 'Cheque')
        {
            cardNo= $(this).closest('tr').find('[id*=TRAN_NO]').text();
        }
        else if (PaymentType == 'NEFT')
        {
            cardNo= $(this).closest('tr').find('[id*=CC_AUTH_CD]').text();
        }

    if ((parseFloat(hdnpaymentappgroupid1) == '1' || (hdnpaymentappgroupid1) == '11')) {
        if (PaymentType == ddlPaymentType && currid == _CurrencyID) {
            cardno_count = 1;
            $(".stoast").toastText("Info", "More than one '" + ddlPaymentType + "' entry not allowed.", 5, 3);
            return false;
        }
        }
    if (bank_name == selc_bankname && ddlPaymentType == 'Cheque' && cardNo == txtcardno) {
        cardno_count = 1;
        $(".stoast").toastText("Info", "More Than One Not Allowed with same Cheque No. and same bank name.", 5, 3);
        return false;
        }

      if (bank_name == selc_bankname && ddlPaymentType == 'NEFT' && cardNo == txtauthcode) {
        cardno_count = 1;
        $(".stoast").toastText("Info", "More Than One Not Allowed with same NEFT Trans# and same bank name.", 5, 3);
        return false;
        }

    if(ddlPaymentType!='NEFT'){
     if(ddlPaymentType!='Cheque'){
        if ((PaymentType == ddlPaymentType) && cardNo == txtcardno) {
            cardno_count = 1;
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtCardNo').value = '';
            $(".stoast").toastText("Info", "'" + PaymentType + "' Number Already Exists.", 5, 3);
            return false;
        }
      }}
         }

         });
    }

    if (cardno_count == 0) {
        if (document.getElementById('' + ctrlcom + '_ReceiptControl2_Search3_txtSearchControl').value != '' && document.getElementById('' + ctrlcom + '_ReceiptControl2_Search3__hiddenText').value != '' && document.getElementById('' + ctrlcom + '_ReceiptControl2_Search3__hiddenID').value != '')
        { document.getElementById('' + ctrlcom + '_ReceiptControl2_Search3_txtSearchControl').value = ''; document.getElementById('' + ctrlcom + '_ReceiptControl2_Search3__hiddenText').value = ''; document.getElementById('' + ctrlcom + '_ReceiptControl2_Search3__hiddenID').value = ''; }
        if (document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnHospitalPayment').value == 'PAYMENT') {
            HospitalPaymentForms('New', count);
            return false;
        }
        if (duamt > 0) {
            if (parseFloat(tendoramt) > parseFloat(duamt)) {
                document.getElementById('' + ctrlcom + '_ReceiptControl2_txtChangeKyd').value = setProperDecimalsCorpPer(parseFloat(tendoramt) - parseFloat(duamt));
            }
            var netAmount = document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnNetAmt').value;
            var dueamt = document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnDueAmt').value;
            var tenderamount = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtTenderedAmt').value;
            var amount = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtamt').value;
            amount = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtCurrAmt').value;
            if (tenderamount == '' || tenderamount == undefined || tenderamount == null || isNaN(tenderamount)) {
                tenderamount = 0;
            }
            if (tenderamount == '' || tenderamount == undefined || tenderamount == null || isNaN(tenderamount)) {
                tenderamount = 0;
            }
            if (amount == '' || amount == undefined || amount == null || isNaN(amount)) {
                amount = 0;
            }
            if (document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnDocName').value == 'CorporateCheckEntry') {
                amount = 50000000000;
                dueamt = 5000000000000;
            }
            var DDl_pay_type = $('#ctl00_ContentPlaceHolder1_ReceiptControl2_ddlPaymentType').val();
            if (parseInt(dueamt) == 0) {
                $(".stoast").toastText("Info", "Receipt amount should be graeter than zero(0)", 5, 3);
                return false;
            }

            else if (parseFloat(amount) > parseFloat(dueamt) && (DDl_pay_type != '1' && DDl_pay_type != '21' && DDl_pay_type != '22' && DDl_pay_type != '23' && DDl_pay_type != '24' && DDl_pay_type != '25' && DDl_pay_type == '26')) {
                var diff_amt = parseFloat(amount) - parseFloat(dueamt);
                if (0.2 < parseFloat(diff_amt)) {
                    $(".stoast").toastText("Info", "Receipt Amount Should Not Be More Than Payable Amount", 5, 3);
                    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtamt').focus();
                    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtamt').value = '0';
                    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtCurrAmt').value = 0;
                    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtTenderedAmt').value = 0;
                    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtChangeKyd').value = 0;
                    return false;
                }
            }

            var stop = '';
            var grid = document.getElementById('' + ctrlcom + '_ReceiptControl2_gvReceiptDetails');
            var Cardnumber = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtCardNo').value;
            var index = document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlPaymentType').value;
            if (index == '' || index == null || index == undefined) { index = 0; }
            var paymode = $('#ctl00_ContentPlaceHolder1_ReceiptControl2_ddlPaymentType').find('option:selected').text();
            if (stop == 'stop') {
                return false;
            }
            else {
                if (count > 0) {
                    fn_AddFilterRow1();
                }
                if (document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnDocName').value == 'OUTSTDNGDUE') {
                    var count = duegridcrossupd(total_conv_amt);
                    if (count == '149') {
                        return false;
                    }
                }
                if (document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnDocName').value == 'Refund') {
                    var count = refundgridcrossupd(total_conv_amt);
                    if (count == '149') {
                        return false;
                    }
                }
                var ReceiptAmt = 0;
                var sno = 1;
                var totchangeamtforwords=0;
                var totamtforwords   =0;
                $("table[id$=gvReceiptDetails] tr:has(td)").each(function (e) {
                    count++;
                    var sel_text = $('#ctl00_ContentPlaceHolder1_ReceiptControl2_ddlPaymentType').find('option:selected').text();
                    var Changein = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtChangeKyd').value;
                    if (Changein == undefined || Changein == null || Changein == "") { Changein = 0; }
                    var exrate = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtExchangeRate').value;
                    var paindex = document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlPaymentType').value;
                    if (paindex == '' || paindex == null || paindex == undefined) { paindex = 0; }
                    if ($(this).closest('tr').find("[id*=lblrecmode]").text() == '' && $(this).closest('tr').find("[id*=lblAmount]").text() == '') {
                        var pay_mode_txt = sel_text;
                        if (pay_mode_txt == 'Cash' || pay_mode_txt == 'Advance Adjustment' || pay_mode_txt == 'Funds' || pay_mode_txt == 'EXCESS TO ADVANCE' || pay_mode_txt.trim().toLowerCase() == 'online') {
                            var tendAmt = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtTenderedAmt').value;
                            if (tendAmt == '' || tendAmt == null || tendAmt == undefined || isNaN(tendAmt)) { tendAmt = "0"; }
                            if (document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnDocName').value == 'IpAdvance' && pay_mode_txt == 'Advance Adjustment') {
                                $('[id*=hdnAdvanceAdjst]').val(tendAmt);
                            }
                            var amt = tendAmt;
                            amt = amt;
                            tendAmt = tendAmt;
                            var __cashamt = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtamt').value;
                            var __changeamt = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtChangeKyd').value;
                            __cashamt = parseFloat(__cashamt) - parseFloat(__changeamt);
                            if (__cashamt == undefined || __cashamt == null || __cashamt == '' || isNaN(__cashamt)) { __cashamt = "0"; }


                            if (pay_mode_txt == 'Cash') {
                                var balCashAmtLimit = $('[id*=hdncashlmtamt]').val();
                                var AdvLimitMand = $('[id*=hdnAdvAmtLmtMand]').val();
                                if (balCashAmtLimit == '' || balCashAmtLimit == null || balCashAmtLimit == undefined) { balCashAmtLimit = 0; }
                                if (AdvLimitMand == '' || AdvLimitMand == null || AdvLimitMand == undefined) { AdvLimitMand = "false"; }
                                var TotCashAmt = parseFloat(__cashamt);
                                if (parseFloat(balCashAmtLimit) > 0) {
                                    if (AdvLimitMand.trim().toLowerCase() == 'true' && parseFloat(balCashAmtLimit) < parseFloat(TotCashAmt)) {
                                        $(".stoast").toastText("Info", "Patient cash amount limit has exceed..!", 5, 2);
                                        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtTenderedAmt').value = 0;
                                        CalculateAmount(document.getElementById('' + ctrlcom + '_ReceiptControl2_txtcashAmt'), 'Cash');
                                        return false;
                                    }
                                }
                            }
                            if (form_name == "Cons") {
                                if (paindex == "1" || paindex == "2") {
                                    $(this).closest('tr').find("input[type=hidden][id*=hdnpaymentcommid]").val(document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnpaymentcommentid').value);
                                }
                                else {
                                    $(this).closest('tr').find("input[type=hidden][id*=hdnpaymentcommid]").val('0');
                                }
                            }


                            else if (paindex == "3" || paindex == "4") {
                                $(this).closest('tr').find("input[type=hidden][id*=hdnpaymentcommid]").val(document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnpaymentcommentid').value);
                            }
                            else if (paindex == "2" || paindex == "3") {
                                $(this).closest('tr').find("input[type=hidden][id*=hdnpaymentcommid]").val(document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnpaymentcommentid').value);
                            }

                            else {
                                $(this).closest('tr').find("input[type=hidden][id*=hdnpaymentcommid]").val('0');
                            }
                            $(this).closest('tr').find("input[type=hidden][id*=hdnpaymentappgroupid]").val(groupid);



                            $(this).closest('tr').find("[id*=lblAmount]").text(__cashamt);
                            $(this).closest('tr').find("[id*=lbltendcash]").text(tendAmt);
                            var convertamt = parseFloat(tendAmt) * parseFloat(exrate);
                            convertamt = (RoundFloorCeil('', convertamt, ''));
                            $(this).closest('tr').find("[id*=lblconvertedamt]").text(convertamt);
                            $(this).closest('tr').find("[id*=lblchange]").text(Changein);

                            /*Amount=ConvertedAmt-ChangeIn [Different Currency]  @Start@ */
                            var _lblAmt = parseFloat(convertamt) - parseFloat(__changeamt);
                            if (_lblAmt == '' || _lblAmt == undefined || _lblAmt == null) { _lblAmt = 0; }
                            $(this).closest('tr').find("[id*=lblAmount]").text(setProperDecimals(_lblAmt));

                            /* @End@ */



                        }
                        else {
                            var _srvchargeamt = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtsrvcharges').value;
                            var _amt = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtamt').value;

                            if (_srvchargeamt == '' || _srvchargeamt == null || _srvchargeamt == undefined || isNaN(_srvchargeamt)) { _srvchargeamt = "0"; }
                            if (_amt == '' || _amt == null || _amt == undefined || isNaN(_amt)) { _amt = "0"; }
                            var _deductionAmt = 0;
                            if (parseFloat(_srvchargeamt) > 0) {
                                _deductionAmt = parseFloat(_amt) * (parseFloat(_srvchargeamt) / 100);
                                if (_deductionAmt == '' || _deductionAmt == null || _deductionAmt == undefined || isNaN(_deductionAmt)) { _deductionAmt = "0"; }
                            }
                            var lblamount = setProperDecimalsCorpPer(parseFloat(_amt) - parseFloat(_deductionAmt));

                            $(this).closest('tr').find("[id*=lblAmount]").text(parseFloat(lblamount));
                            /* added on 05.08.2016 */
                            $(this).closest('tr').find("input[type=hidden][id*=hdnsrvcharg]").val(document.getElementById('' + ctrlcom + '_ReceiptControl2_txtsrvcharges').value);
                            $(this).closest('tr').find("input[type=hidden][id*=hdnsrvchargamt]").val(document.getElementById('' + ctrlcom + '_ReceiptControl2_txtamt').value);
                            $(this).closest('tr').find("[id*=lblsrvchrgpcnt]").text(_srvchargeamt);
                            $(this).closest('tr').find("[id*=lblsrvchrgamt]").text(_deductionAmt);
                            $(this).closest('tr').find("[id*=lbltendcash]").text(_amt);
                            $(this).closest('tr').find("input[type=hidden][id*=hdnpaymentappgroupid]").val(groupid);

                            document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnamtwithoutsrvchrg').value = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtamt').value;
                            $(this).closest('tr').find("[id*=lblAmount]").text(_amt);
                            var convertamt = parseFloat(_amt) * parseFloat(exrate);
                            convertamt = (RoundFloorCeil('', convertamt, ''));
                            $(this).closest('tr').find("[id*=lblconvertedamt]").text(convertamt);
                            $(this).closest('tr').find("[id*=lblchange]").text(Changein);


                            /*Amount=ConvertedAmt-ChangeIn [Different Currency]  @Start@ */
                            var __changeamt = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtChangeKyd').value;
                            if (__changeamt == '' || __changeamt == null || __changeamt == undefined) { __changeamt = 0; }
                            var _lblAmt = parseFloat(convertamt) - parseFloat(__changeamt);
                            if (_lblAmt == '' || _lblAmt == undefined || _lblAmt == null) { _lblAmt = 0; }
                            $(this).closest('tr').find("[id*=lblAmount]").text(setProperDecimals(_lblAmt));
                            /* @End@ */
                        }
                        $(this).closest('tr').find("input[type=hidden][id*=hdnrecmodeId]").val(paindex);
                        $(this).closest('tr').find("input[type=hidden][id*=_RECEIPT_MODE_ID]").val(paindex);
                        $(this).closest('tr').find("[id*=lblrecmode]").text(sel_text);
                        $(this).closest('tr').find("[id*=lblexchrate]").text(document.getElementById('' + ctrlcom + '_ReceiptControl2_txtExchangeRate').value);
                        var gridhdnplutusreferenceval = document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnPlutusTransactionReferenceID').value;
                        gridhdnplutusreferenceval = gridhdnplutusreferenceval == '' || gridhdnplutusreferenceval == 'undefined' || gridhdnplutusreferenceval == undefined ? "" : gridhdnplutusreferenceval;
                        if (gridhdnplutusreferenceval != "") {
                            $(this).closest('tr').find("[id*=imgBtnDelete]").attr('disabled', true);
                            $(this).closest('tr').find("[id*=imgBtnEdit]").attr('disabled', true);
                        }

                        $(this).closest('tr').find("[id*=gridhdnplutusreferenceid]").val(gridhdnplutusreferenceval);
                        document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnPlutusTransactionReferenceID').value = "";

                        var currindex = document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlCurrency').value;
                        var curr_name = $('#ctl00_ContentPlaceHolder1_ReceiptControl2_ddlCurrency').find('option:selected').text();
                        if (currindex == undefined || currindex == null || currindex == '')
                        { currindex = 0; }
                        if (currindex == 0) {
                            $(this).closest('tr').find("[id*=lblcurrname]").text('');
                        }
                        else {
                            $(this).closest('tr').find("[id*=lblcurrname]").text(curr_name);
                            $(this).closest('tr').find("input[type=hidden][id*=hdncurrId]").val(currindex);
                        }

                        var bankindex = document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlBankName').value;
                        if (bankindex == undefined || bankindex == null || bankindex == '')
                        { bankindex = 0; }
                        if (bankindex == 0) {
                            $(this).closest('tr').find("[id*=lblbankname]").text('');
                        }
                        else {
                            $(this).closest('tr').find("[id*=lblbankname]").text($('#ctl00_ContentPlaceHolder1_ReceiptControl2_ddlBankName').find('option:selected').text());
                            $(this).closest('tr').find("input[type=hidden][id*=hdnbankid]").val(document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlBankName').value);
                            $(this).closest('tr').find("input[type=hidden][id*=_BANK_ID]").val(document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlBankName').value);
                        }
                        $(this).closest('tr').find("[id*=lblcardno]").text(document.getElementById('' + ctrlcom + '_ReceiptControl2_txtCardNo').value);

                        //$(this).closest('tr').find("[id*=lblauthcode]").text(document.getElementById('' + ctrlcom + '_ReceiptControl2_txtAuthCode').value);
                        /* added */
                        var sel_text = $('#ctl00_ContentPlaceHolder1_ReceiptControl2_ddlPaymentType').find('option:selected').text();
                        if (sel_text == 'Cheque') {

                            $(this).closest('tr').find("[id*=hdncheck_AuthID]").val(document.getElementById('' + ctrlcom + '_ReceiptControl2_UCchequeAuth__hiddenID').value);
                            $(this).closest('tr').find("[id*=lblauthcode]").text(document.getElementById('' + ctrlcom + '_ReceiptControl2_UCchequeAuth_txtSearchControl').value);
                            $(this).closest('tr').find("[id*=lblchequedt]").text(document.getElementById('' + ctrlcom + '_ReceiptControl2_txtchequedt').value);
                            $(this).closest('tr').find("[id*=lblcqreldt]").text(document.getElementById('' + ctrlcom + '_ReceiptControl2_txtchequerealizedt').value);
                            $(this).closest('tr').find("[id*=lblcqissuername]").text(document.getElementById('' + ctrlcom + '_ReceiptControl2_txtcqissuername').value);
                        }
                        else {
                            $(this).closest('tr').find("[id*=lblauthcode]").text(document.getElementById('' + ctrlcom + '_ReceiptControl2_txtAuthCode').value);
                            $(this).closest('tr').find("[id*=lblcqissuername]").text(document.getElementById('' + ctrlcom + '_ReceiptControl2_txtAdvCardHldrName').value);
                        }
                        var recdocname = document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnDocName').value;
                        if (recdocname == 'CorporateCheckEntry' || recdocname == 'CorporateCheck') {
                            if (sel_text == 'NEFT' || sel_text == 'RTGS') {
                                $(this).closest('tr').find("[id*=lblchequedt]").text(document.getElementById('' + ctrlcom + '_ReceiptControl2_txtchequedt').value);
                                $(this).closest('tr').find("[id*=lblcqreldt]").text(document.getElementById('' + ctrlcom + '_ReceiptControl2_txtchequerealizedt').value);
                            }
                        }


                        $(this).closest('tr').find("[id*=lblcardexpdt]").text(document.getElementById('' + ctrlcom + '_ReceiptControl2_txtExpDt').value);

                        var typeindex = document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlCardType').value;
                        if (typeindex == '' || typeindex == null || typeindex == undefined) { typeindex = 0; }
                        var card_type = $('#ctl00_ContentPlaceHolder1_ReceiptControl2_ddlCardType').find('option:selected').text();
                        if (typeindex == 0) {
                            $(this).closest('tr').find("[id*=lblcardtype]").text('');
                        }
                        else {
                            $(this).closest('tr').find("[id*=lblcardtype]").text(card_type);
                            $(this).closest('tr').find("input[type=hidden][id*=hdncardtypeId]").val(typeindex);
                            $(this).closest('tr').find("input[type=hidden][id*=_CARD_TYPE_ID]").val(typeindex);
                        }
                        var srvchrgPer = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtsrvcharges').value;
                        if (srvchrgPer == "" || srvchrgPer == null || srvchrgPer == undefined) { srvchrgPer = 0; }
                        $(this).closest('tr').find("input[type=hidden][id*=hdnsrvcharg]").val(srvchrgPer);
                        $(this).closest('tr').find("input[type=hidden][id*=hdnsrvchargamt]").val(document.getElementById('' + ctrlcom + '_ReceiptControl2_txtamt').value);
                    }
                    var receipt = $(this).closest('tr').find("[id*=lblconvertedamt]").text();
                    var chngcashAmt = $(this).closest('tr').find("[id*=lblchange]").text();
                    if (chngcashAmt == '') chngcashAmt = 0;
                    ReceiptAmt = parseFloat(ReceiptAmt) + parseFloat(receipt) - parseFloat(chngcashAmt);

                    document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnamtwithoutsrvchrg').value = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtamt').value;
                    /*var amt = document.getElementById('' + ctrlcom + '_ReceiptControl2_hdncalamtwithsrvchrg').value;*/
                    sno++;

                  
    
                 

                     $(this).closest('tr').find("[id*=lblAmtinwords]").text( convertNumberToWords(parseFloat($(this).closest('tr').find("[id*=lblAmount]").text())).toLowerCase().replace(/(^.|\s+.)/g, m=>m.toUpperCase())) ;   



          if( $(this).closest('tr').find("[id*=lblAmount]").text() !=''|| $(this).closest('tr').find("[id*=lblAmount]").text()!='undefined'|| $(this).closest('tr').find("[id*=lblAmount]").text()!=undefined||$(this).closest('tr').find("[id*=lblAmount]").text()!=null){
        totamtforwords=parseFloat(totamtforwords)+parseFloat($(this).closest('tr').find("[id*=lblAmount]").text());
        
       var chaamtforwors= $(this).closest('tr').find("[id*=lblchange]").text();
         if (chaamtforwors == '' || chaamtforwors == undefined|| chaamtforwors == 'undefined' || chaamtforwors == null || isNaN(chaamtforwors)) { chaamtforwors = "0"; }
        totchangeamtforwords=parseFloat(totchangeamtforwords)+parseFloat(chaamtforwors);
        }

        if($("table[id$=gvReceiptDetails] tr:has(td)").length==parseFloat(e)+1){
      
       document.getElementById('' + ctrlcom + '_ReceiptControl2_txttotamtinwordsadd').innerHTML =  convertNumberToWords(parseFloat(totamtforwords)).toLowerCase().replace(/(^.|\s+.)/g, m=>m.toUpperCase()) ;  
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtchangeamtinwordsadd').innerHTML =  convertNumberToWords(parseFloat(totchangeamtforwords)).toLowerCase().replace(/(^.|\s+.)/g, m=>m.toUpperCase()) ;  
      
        
        }
                });
                document.getElementById('' + ctrlcom + '_ReceiptControl2_txtAdvCardHldrName').value = '';
                document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnHTMLString1').value = grid.innerHTML;
                var dueamt = 0;
                if (document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnDocName').value == 'IPFINAL') {
                    var advance = document.getElementById('' + ctrlcom + '_txtAdvance').value;
                    var ClaimAmt = $('[id*=hdnClaimAdjAmt]').val();
                    if (ClaimAmt == '' || ClaimAmt == null || ClaimAmt == undefined) { ClaimAmt = 0; }
                    var dueamt = document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnDueAmt').value = setProperDecimalsVal(parseFloat(netAmount) - parseFloat(advance) - parseFloat(ReceiptAmt) - parseFloat(ClaimAmt));
                }
                else {
                    document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnDueAmt').value = parseFloat(netAmount) - parseFloat(ReceiptAmt);
                    dueamt = parseFloat(netAmount) - parseFloat(ReceiptAmt);
                }

                var roundtype = document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnroundtype').value;
                var rounddec = document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnroundoffval').value;
                ReceiptAmt = RoundFloorCeil('', ReceiptAmt, '');
                dueamt = RoundFloorCeil('', dueamt, '');
                if (ReceiptAmt == '' || ReceiptAmt == undefined || ReceiptAmt == null || isNaN(ReceiptAmt)) { ReceiptAmt = "0"; }
                if (dueamt == '' || dueamt == undefined || dueamt == null || isNaN(dueamt)) { dueamt = "0"; }
                document.getElementById('' + ctrlcom + '_ReceiptControl2_txtreceiptAmount').value = setProperDecimalsCorpPer(ReceiptAmt);
                document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatientReceiptAmt').value = setProperDecimalsCorpPer(ReceiptAmt);
                //document.getElementById('' + ctrlcom + '_ReceiptControl2_txtTotalReciptAmt').value = setProperDecimalsCorpPer(ReceiptAmt);
                if (document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnDocName').value == 'OP' || document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnDocName').value == 'Cons') {
                    var insrenceAmt = 0;
                    $('table[id*=GvIns] tr:has(td)').each(function () {
                        var insamt = $(this).closest('tr').find('[id*=lblinsamt]').text();
                        if (insamt == undefined || insamt == null || insamt == '') { insamt = 0; }
                        insrenceAmt = parseFloat(insrenceAmt) + parseFloat(insamt);
                    });


                    var CmpPaidAmt = parseFloat(insrenceAmt);
                    if (parseFloat(CmpPaidAmt) > 0) {
                        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtTotalReciptAmt').value = parseFloat(setProperDecimalsCorpPer(ReceiptAmt)) + parseFloat(setProperDecimalsCorpPer(CmpPaidAmt));
                    } else {
                        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtTotalReciptAmt').value = setProperDecimalsCorpPer(ReceiptAmt);
                    }
                }
                else {
                    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtTotalReciptAmt').value = setProperDecimalsCorpPer(ReceiptAmt);
                }
                dueamt = dueamt < 0 ? 0 : dueamt;
                document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatdue').value = setProperDecimalsCorpPer(dueamt);
                var cmpdueamt = parseFloat(document.getElementById('' + ctrlcom + '_ReceiptControl2_txtcmpDue').value);
                cmpdueamt = cmpdueamt == '' ? 0 : cmpdueamt;
                cmpdueamt = cmpdueamt == undefined ? 0 : cmpdueamt;
                cmpdueamt = cmpdueamt.toString() == 'NaN' ? 0 : cmpdueamt;
                cmpdueamt = cmpdueamt < 0 ? 0 : cmpdueamt;
                document.getElementById('' + ctrlcom + '_ReceiptControl2_txtTotalDue').value = setProperDecimalsCorpPer(parseFloat(dueamt) + cmpdueamt);
                if (dueamt == 0 || dueamt == '') {
                    document.getElementById('' + ctrlcom + '_ReceiptControl2_Search3_txtSearchControl').value = '';
                    document.getElementById('' + ctrlcom + '_ReceiptControl2_Search3__hiddenID').value = '';

                    document.getElementById('' + ctrlcom + '_ReceiptControl2_Search3_txtSearchControl').disabled = true;
                    document.getElementById('lk_btn_ctl00_ContentPlaceHolder1_ReceiptControl2_Search3').disabled = true;
                    document.getElementById('' + ctrlcom + '_ReceiptControl2_Search3_txtSearchControl').className = 'grey';
                    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtRemarks').className = 'grey';
                    /*document.getElementById('' + ctrlcom + '_ReceiptControl2_txtRemarks').disabled = true;*/
                }
                else {
                    document.getElementById('' + ctrlcom + '_ReceiptControl2_Search3_txtSearchControl').disabled = false;
                    document.getElementById('lk_btn_ctl00_ContentPlaceHolder1_ReceiptControl2_Search3').disabled = false;
                    var form_name = document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnDocName').value;
                    var assest = '';
                    if (form_name == 'OP') {
                        assest = document.getElementById('' + ctrlcom + '_ChkAssesment').checked;
                    }
                    else if (form_name == 'Cons') {
                        assest = document.getElementById('' + ctrlcom + '_ChkAssesment').checked;
                    }
                    else if (form_name == 'OPQUICK') {
                        assest = document.getElementById('' + ctrlcom + '_ChkAssesment').checked;
                    }
                    else {
                        assest = false;
                    }
                    if (assest == true) {
                        document.getElementById('' + ctrlcom + '_ReceiptControl2_Search3_txtSearchControl').className = 'grey';
                    }
                    else {
                        document.getElementById('' + ctrlcom + '_ReceiptControl2_Search3_txtSearchControl').className = 'red';
                    }
                    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtRemarks').className = 'red';
                    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtRemarks').disabled = false;
                }
            }
            if (document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnDocName').value != 'CorporateCheck') {
                ClearTranctionadd();
            }
            DisableControl();
            $('#ctl00_ContentPlaceHolder1_ReceiptControl2_txtExpDt').addClass('grey');
            $('#ctl00_ContentPlaceHolder1_ReceiptControl2_txtExpDt').removeClass('red');
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtamt').className = 'grey';
            document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlPaymentType').selectedIndex = 0;
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtadjustmentamt').value = 0;
            if (document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnDocName').value != 'NewChangeReceipt') {
                tdadv.style.display = 'none';
                tdadvcell.style.display = 'none';
                document.getElementById('' + ctrlcom + '_ReceiptControl2_txtorganizationFund').value = 0;
                tdfund.style.display = 'none';
                tdfundcell.style.display = 'none';
            }
            document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnHTMLString1').value = grid.innerHTML;
            document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlPaymentType').focus();
            checkpayment();
            checkpayment2();
            if (localStorage.getItem("ED") != null && localStorage.getItem("ED") != undefined && localStorage.getItem("ED") != '') {
                OnExtendAmounts();
            }
            return false;
        }
        else {
            $(".stoast").toastText("Info", "There Is No Due Amount For This Receipt", 5, 3);
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtamt').value = '0';
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtCurrAmt').value = 0;
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtTenderedAmt').value = 0;
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtChangeKyd').value = 0;
            if (localStorage.getItem("ED") != null && localStorage.getItem("ED") != undefined && localStorage.getItem("ED") != '') {
                OnExtendAmounts();
            }
            return false;
        }
    }
    else { return false; }

}
function refundgridcrossupd(total_conv_amt) {
    var Count = 0;
    var Due_Amt = document.getElementById('' + ctrlcom + '_txtRefundableAmt').value;
    if (parseInt(Due_Amt) > 0) { } else { Due_Amt = '0'; }
    if (parseInt(total_conv_amt) > 0) { } else { total_conv_amt = '0'; }
    if (parseFloat(Due_Amt) < parseFloat(total_conv_amt)) {
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtcashAmt').value = '0';
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtCardAmt').value = '0';
        $(".stoast").toastText("warning", "Refundable Amount Cannot Be Greater Than Receipt Amount", 5, 3);
        Count = '149';
    }
    var Rec_Amt = total_conv_amt;
    var GvRowscount = 0;
    var _index = 0;
    var _index = $('#tbl_tbl_OpBillDetails tbody tr').length;
    var bill_count = 0;
    GvRowscount = 0;
    $("table[id$=tbl_tbl_OpBillDetails] tr:has(td)").each(function (e) {
        for (GvRowscount; GvRowscount <= _index - 1; GvRowscount++) {
            var row = $('#tbl_tbl_OpBillDetails tbody').find('tr:eq(' + GvRowscount + ')').find('td:eq(' + 0 + ')').find('input');
            if (row.is(':checked')) {
                var P_Due_Amt = $('#tbl_tbl_OpBillDetails tbody').find('tr:eq(' + GvRowscount + ')').find('td:eq(' + 14 + ')').text();
                var Out_Due_Amt = $('#tbl_tbl_OpBillDetails tbody').find('tr:eq(' + GvRowscount + ')').find('td:eq(' + 12 + ')').text();
                if (parseFloat(P_Due_Amt) > 0) { } else { P_Due_Amt = 0; }
                if (parseFloat(Out_Due_Amt) > 0) { } else { Out_Due_Amt = 0; }
                if (Count == '149') {
                    $('#tbl_tbl_OpBillDetails tbody').find('tr:eq(' + GvRowscount + ')').find('td:eq(' + 14 + ')').text('0');
                }
                else if (parseFloat(Out_Due_Amt) < parseFloat(Rec_Amt)) {

                    $('#tbl_tbl_OpBillDetails tbody').find('tr:eq(' + GvRowscount + ')').find('td:eq(' + 14 + ')').text(Out_Due_Amt);
                    Rec_Amt = parseFloat(Rec_Amt) - parseFloat(Out_Due_Amt);
                }
                else if (parseFloat(Out_Due_Amt) > parseFloat(Rec_Amt)) {
                    $('#tbl_tbl_OpBillDetails tbody').find('tr:eq(' + GvRowscount + ')').find('td:eq(' + 14 + ')').text(Rec_Amt);
                    Rec_Amt = '0';
                }
                else if (parseFloat(Out_Due_Amt) == parseFloat(Rec_Amt)) {
                    $('#tbl_tbl_OpBillDetails tbody').find('tr:eq(' + GvRowscount + ')').find('td:eq(' + 14 + ')').text(Rec_Amt);
                    Rec_Amt = '0';
                }
            }
            else
            { }

        }

    });
    return Count;
}
function duegridcrossupd(total_conv_amt) {

    var Count = 0;
    var Due_Amt = document.getElementById('' + ctrlcom + '_txtDueAmount').value;
    if (parseInt(Due_Amt) > 0) { } else { Due_Amt = '0'; }
    if (parseInt(total_conv_amt) > 0) { } else { total_conv_amt = '0'; }
    if (parseFloat(Due_Amt) < parseFloat(total_conv_amt)) {
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtcashAmt').value = '0';
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtCardAmt').value = '0';
        $(".stoast").toastText("warning", "Due Payment Amount Cannot Be Greater Than Receipt Amount", 5, 3);
        Count = '149';
    }
    var Rec_Amt = total_conv_amt;
    var GvRowscount = 0;
    var _index = 0;
    var _index = $('#tbl_tbl_OpBillDetails tbody tr').length;
    var bill_count = 0;
    GvRowscount = 0;
    $("table[id$=tbl_tbl_OpBillDetails] tr:has(td)").each(function (e) {
        for (GvRowscount; GvRowscount <= _index - 1; GvRowscount++) {
            var row = $('#tbl_tbl_OpBillDetails tbody').find('tr:eq(' + GvRowscount + ')').find('td:eq(' + 0 + ')').find('input');
            if (row.is(':checked')) {
                var P_Due_Amt = $('#tbl_tbl_OpBillDetails tbody').find('tr:eq(' + GvRowscount + ')').find('td:eq(' + 14 + ')').text();
                var Out_Due_Amt = $('#tbl_tbl_OpBillDetails tbody').find('tr:eq(' + GvRowscount + ')').find('td:eq(' + 11 + ')').text();
                if (parseFloat(P_Due_Amt) > 0) { } else { P_Due_Amt = 0; }
                if (parseFloat(Out_Due_Amt) > 0) { } else { Out_Due_Amt = 0; }
                if (Count == '149') {
                    $('#tbl_tbl_OpBillDetails tbody').find('tr:eq(' + GvRowscount + ')').find('td:eq(' + 14 + ')').text('0');
                }
                else if (parseFloat(Out_Due_Amt) < parseFloat(Rec_Amt)) {
                    $('#tbl_tbl_OpBillDetails tbody').find('tr:eq(' + GvRowscount + ')').find('td:eq(' + 14 + ')').text(Out_Due_Amt);
                    Rec_Amt = parseFloat(Rec_Amt) - parseFloat(Out_Due_Amt);
                }
                else if (parseFloat(Out_Due_Amt) > parseFloat(Rec_Amt)) {
                    $('#tbl_tbl_OpBillDetails tbody').find('tr:eq(' + GvRowscount + ')').find('td:eq(' + 14 + ')').text(Rec_Amt);
                    Rec_Amt = '0';
                }
                else if (parseFloat(Out_Due_Amt) == parseFloat(Rec_Amt)) {
                    $('#tbl_tbl_OpBillDetails tbody').find('tr:eq(' + GvRowscount + ')').find('td:eq(' + 14 + ')').text(Rec_Amt);
                    Rec_Amt = '0';
                }
            }
            else
            { }

        }

    });
    return Count;
}
function HospitalPaymentForms(obj, count) {
    count = count;
    var netAmount = document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnNetAmt').value;

    var dueamt = 0;
    if (document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnDocName').value == 'OUTSTDNGDUE') {
        dueamt = document.getElementById('' + ctrlcom + '_txtDueAmount').value;
    }
    else if (document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnDocName').value == 'ASSESOUTSTDNGDUE') {

        var assesmentamount = 0;
        $("table[id$=tbl_Prevoius_Settled_Bills_sch] tr [type=checkbox]:checked").each(function (e) {
            var inneramount = $(this).closest('tr').find("[id*=lbl3]").text();
            if (inneramount == undefined || inneramount == "") {
                inneramount = 0;
            }
            assesmentamount += parseFloat(inneramount);
        });
        dueamt = assesmentamount;
        if (dueamt == '' || dueamt == undefined || dueamt == null || isNaN(dueamt)) { dueamt == "0"; }
    }
    else {
        dueamt = document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnDueAmt').value;
    }
    var mode = $('#ctl00_ContentPlaceHolder1_ReceiptControl2_ddlPaymentType').val();
    var tenderamount = 0;
    var amount = 0;
    if (mode == '1' || mode == '11' || mode == '12' || mode == '6' || mode == '15' || mode == '17') {
        tenderamount = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtTenderedAmt').value;
        amount = 0;
    }
    else {
        tenderamount = 0;
        amount = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtamt').value;
    }


    /*  if (document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlCurrency').value > 1) {
    amount = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtCurrAmt').value;
    }*/
    if (tenderamount == '' || tenderamount == undefined || tenderamount == null || isNaN(tenderamount)) {
        tenderamount = 0;
    }
    if (tenderamount == '' || tenderamount == undefined || tenderamount == null || isNaN(tenderamount)) {
        tenderamount = 0;
    }
    if (amount == '' || amount == undefined || amount == null || isNaN(amount)) {
        amount = 0;
    }
    /*  if (document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlPaymentType').value == 1) {
    amount = tenderamount;
    }*/
    if (document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnDocName').value == 'PreRefund' || document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnDocName').value == 'OUTSTDNGDUE' || document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnDocName').value == 'ASSESOUTSTDNGDUE' || document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnDocName').value == 'Refund' || document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnDocName').value == 'companyRefund') {
        var totpaidamt = 0;
        if (document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnDocName').value == 'PreRefund') {
            totpaidamt = document.getElementById('' + ctrlcom + '_txtTotPaid').value;
        }
        if (document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnDocName').value == 'OUTSTDNGDUE') {
            totpaidamt = document.getElementById('' + ctrlcom + '_txtDueAmount').value;
        }
        if (document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnDocName').value == 'ASSESOUTSTDNGDUE') {
            var assesmentamount = 0;
            $("table[id$=tbl_Prevoius_Settled_Bills_sch] tr [type=checkbox]:checked").each(function (e) {
                var inneramount = $(this).closest('tr').find("[id*=lbl3]").text();
                if (inneramount == undefined || inneramount == "") {
                    inneramount = 0;
                }
                assesmentamount += parseFloat(inneramount);
            });
            totpaidamt = assesmentamount;
        }
        if (document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnDocName').value == 'Refund') {
            totpaidamt = document.getElementById('' + ctrlcom + '_txtRefundableAmt').value;
        }
        if (document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnDocName').value == 'companyRefund') {
            totpaidamt = document.getElementById('' + ctrlcom + '_txtRefundableAmt').value;
            document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlCurrency').disabled = true;
        }

        var reciptamt = 0; /*  document.getElementById('' + ctrlcom + '_ReceiptControl2_txtreceiptAmount').value;*/
        var tenterdamt = 0;
        var txtamt = 0;
        var amt = 0;
        if (reciptamt == undefined || reciptamt == '' || reciptamt == null) { reciptamt = '0'; }
        var form_name = document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnDocName').value;
        if (document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlPaymentType').value == 1) {
            if (document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnDocName').value == 'Refund' && obj == 'Update') {
                reciptamt = 0;
            }
            else {
                /*reciptamt = parseFloat(document.getElementById('' + ctrlcom + '_ReceiptControl2_txtreceiptAmount').value;*/
                reciptamt = parseFloat(document.getElementById('' + ctrlcom + '_ReceiptControl2_txtamt').value) - parseFloat(document.getElementById('' + ctrlcom + '_ReceiptControl2_txtChangeKyd').value);

            }
            // tenterdamt = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtTenderedAmt').value;
            tenterdamt = 0;
            if (reciptamt == undefined || reciptamt == '' || reciptamt == null) { reciptamt = '0'; }
            if (txtamt == undefined || txtamt == '' || txtamt == null) { txtamt = '0'; }
            if (form_name == 'OUTSTDNGDUE' || form_name == 'ASSESOUTSTDNGDUE' || form_name == 'Refund' || form_name == 'PreRefund' || form_name == 'companyRefund') {
                amt = parseFloat(tenterdamt);
            }
            else {
                amt = parseFloat(reciptamt) + parseFloat(tenterdamt);
            }
            if (amt == undefined || amt == '' || amt == null) { amt = '0'; }

        }
        else {
            if (document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnDocName').value == 'Refund' && obj == 'Update') {
                reciptamt = 0;
            }
            else {
                reciptamt = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtreceiptAmount').value;
            }
            txtamt = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtamt').value;
            if (reciptamt == undefined || reciptamt == '' || reciptamt == null) { reciptamt = '0'; }
            if (txtamt == undefined || txtamt == '' || txtamt == null) { txtamt = '0'; }
            if (form_name == 'OUTSTDNGDUE' || form_name == 'Refund' || form_name == 'PreRefund' || form_name == 'companyRefund') {
                /* amt = parseFloat(txtamt);*/
                amt = parseFloat(reciptamt) + parseFloat(txtamt);
            }
            else {
                amt = parseFloat(reciptamt) + parseFloat(txtamt);
            }
            if (amt == undefined || amt == '' || amt == null) { amt = '0'; }
        }
        if ( document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnDocName').value == 'Refund' || document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnDocName').value == 'companyRefund' || document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnDocName').value == "ASSESOUTSTDNGDUE") {
            amt = parseFloat(document.getElementById('' + ctrlcom + '_ReceiptControl2_txtamt').value) - parseFloat(document.getElementById('' + ctrlcom + '_ReceiptControl2_txtChangeKyd').value);
            reciptamt = 0;
        }
        if (amt == undefined || amt == '' || amt == null) { amt = '0'; }
        if (obj == 'Update') {
            var editedDueAmt = $("[id*=hdnEditAmt]").val();
            if (editedDueAmt == undefined || editedDueAmt == '' || editedDueAmt == null) { editedDueAmt = '0'; }
            if (parseFloat(amt) > parseFloat(editedDueAmt)) {
                if (document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnDocName').value == 'PreRefund') {
                    $(".stoast").toastText("Info", "Refund amount should not be greater than paid amount.", 5, 2);
                    return false;
                }
                if (document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnDocName').value == 'OUTSTDNGDUE') {
                    $(".stoast").toastText("Info", "Paid amount should not greater than due amount", 5, 2);
                    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtamt').value = '';
                    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtTenderedAmt').value = '';
                    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtChangeKyd').value = '';
                    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtamt').focus();
                    return false;
                }
                if (document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnDocName').value == 'Refund') {
                    $(".stoast").toastText("Info", "Refund amount should not greater than excess amount", 5, 2);
                    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtamt').value = '';
                    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtTenderedAmt').value = '';
                    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtChangeKyd').value = '';
                    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtamt').focus();
                    return false;
                }
                if (document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnDocName').value == 'companyRefund') {
                    $(".stoast").toastText("Info", "Refund amount should not greater than excess amount", 5, 2);
                    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtamt').value = '';
                    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtTenderedAmt').value = '';
                    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtChangeKyd').value = '';
                    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtamt').focus();
                    document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlCurrency').disabled = true;
                    return false;
                }
            }
        }
        if (parseFloat(amt) > parseFloat(totpaidamt)) {
            if (document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnDocName').value == 'PreRefund') {
                $(".stoast").toastText("Info", "Refund amount should not be greater than paid amount.", 5, 2);
                return false;
            }
            if (document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnDocName').value == 'OUTSTDNGDUE') {
                $(".stoast").toastText("Info", "Paid Amount Should Not Greater Than Due Amount", 5, 2);
                document.getElementById('' + ctrlcom + '_ReceiptControl2_txtamt').value = '';
                document.getElementById('' + ctrlcom + '_ReceiptControl2_txtTenderedAmt').value = '';
                document.getElementById('' + ctrlcom + '_ReceiptControl2_txtChangeKyd').value = '';
                document.getElementById('' + ctrlcom + '_ReceiptControl2_txtamt').focus();
                return false;
            }
            if (document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnDocName').value == 'Refund') {
                $(".stoast").toastText("Info", "Refund Amount Should Not Greater Than Excess Amount", 5, 2);
                document.getElementById('' + ctrlcom + '_ReceiptControl2_txtamt').value = '';
                document.getElementById('' + ctrlcom + '_ReceiptControl2_txtTenderedAmt').value = '';
                document.getElementById('' + ctrlcom + '_ReceiptControl2_txtChangeKyd').value = '';
                document.getElementById('' + ctrlcom + '_ReceiptControl2_txtamt').focus();
                return false;
            }
            if (document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnDocName').value == 'companyRefund') {
                $(".stoast").toastText("Info", "Refund Amount Should Not Greater Than Excess Amount", 5, 2);
                document.getElementById('' + ctrlcom + '_ReceiptControl2_txtamt').value = '';
                document.getElementById('' + ctrlcom + '_ReceiptControl2_txtTenderedAmt').value = '';
                document.getElementById('' + ctrlcom + '_ReceiptControl2_txtChangeKyd').value = '';
                document.getElementById('' + ctrlcom + '_ReceiptControl2_txtamt').focus();
                document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlCurrency').disabled = true;
                return false;
            }
            if (document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlPaymentType').value == 1) {
                document.getElementById('' + ctrlcom + '_ReceiptControl2_txtTenderedAmt').value = '';
                document.getElementById('' + ctrlcom + '_ReceiptControl2_txtTenderedAmt').focus();
                return false;
            }
            else {
                document.getElementById('' + ctrlcom + '_ReceiptControl2_txtamt').value = '';
                document.getElementById('' + ctrlcom + '_ReceiptControl2_txtamt').focus();
                return false;
            }
        }
        var advanceamt = 0;
        if (document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnDocName').value == 'PreRefund') {
            advanceamt = document.getElementById('' + ctrlcom + '_txtTotPaid').value;
        }
        if (document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnDocName').value == 'OUTSTDNGDUE') {
            advanceamt = document.getElementById('' + ctrlcom + '_txtDueAmount').value;
        }
        if (document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnDocName').value == 'ASSESOUTSTDNGDUE') {
            var assesmentamount = 0;
            $("table[id$=tbl_Prevoius_Settled_Bills_sch] tr [type=checkbox]:checked").each(function (e) {
                var inneramount = $(this).closest('tr').find("[id*=lbl3]").text();
                if (inneramount == undefined || inneramount == "") {
                    inneramount = 0;
                }
                assesmentamount += parseFloat(inneramount);
            });
            duamt = assesmentamount;
            if (duamt == '' || duamt == undefined || duamt == null || isNaN(duamt)) { duamt == "0"; }
            advanceamt = duamt;
        }
        if (document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnDocName').value == 'Refund') {
            advanceamt = document.getElementById('' + ctrlcom + '_txtRefundableAmt').value;
        }
        if (document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnDocName').value == 'companyRefund') {
            document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlCurrency').disabled = true;
            advanceamt = document.getElementById('' + ctrlcom + '_txtRefundableAmt').value;
        }
        if (advanceamt == undefined || advanceamt == null || advanceamt == '') { advanceamt = "0"; }
        if (parseFloat(advanceamt) > 0) {
            if (document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnDocName').value == 'PreRefund') {
                if (count > 0 && obj == 'New') {
                    fn_AddFilterRow1();
                }
            }
            else {
                if (document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnDocName').value == 'OUTSTDNGDUE') {
                    if (count > 0 && obj == 'New') {
                        var outamt = parseFloat(amt) ;
                        if (parseFloat(outamt) > parseFloat(advanceamt)) {

                            $(".stoast").toastText("warning", "Due Payment Amount Cannot Be Greater Than Receipt Amount", 5, 3);
                            return false;
                        }
                        else {
                            fn_AddFilterRow1();
                        }
                    }
                }

                else if (count > 0 && obj == 'New') {
                    fn_AddFilterRow1();
                }
            }
            AssignDataTOGrid(obj);
            if (document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnDocName').value == 'OUTSTDNGDUE') {
                OutStandingdueCalculations();
            }
            if (document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnDocName').value == 'ASSESOUTSTDNGDUE') {
                AssesmentOutStandingdueCalculations();
            }
            if (document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnDocName').value == 'Refund') {
                RefundCalculations();
            }
            if (document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnDocName').value == 'companyRefund') {
                document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlCurrency').disabled = true;
            }
        }
    }
    else if (document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnDocName').value == 'IpAdvance' || document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnDocName').value == 'PREADVANCE') {
        if (document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnDocName').value == 'IpAdvance') {
        var advanceamt =0;
        if(document.getElementById('' + ctrlcom + '_txtTotPaid')!=null){
            advanceamt = document.getElementById('' + ctrlcom + '_txtTotPaid').value;}
            if (advanceamt == undefined || advanceamt == null || advanceamt == '') { advanceamt = "0"; }
        }
        if (count > 0 && obj == 'New') {
            fn_AddFilterRow1();
        }
        AssignDataTOGrid(obj);
    }
    else if (document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnDocName').value == 'IMRSRVENTRY') {
        if (count > 0 && obj == 'New') {
            fn_AddFilterRow1();
        }
        AssignDataTOGrid(obj);
        if (document.getElementById('' + ctrlcom + '_ReceiptControl2_txtreqamtkyd').value == 'undefined' || document.getElementById('' + ctrlcom + '_ReceiptControl2_txtreqamtkyd').value == null)
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtreqamtkyd').value = 0;
    }
    else if (document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnDocName').value == 'UVP')/*User Voucher Payment*/ {
        if (count > 0 && obj == 'New') {
            fn_AddFilterRow1();
        }
        AssignDataTOGrid(obj);
        if (document.getElementById('' + ctrlcom + '_ReceiptControl2_txtreqamtkyd').value == 'undefined' || document.getElementById('' + ctrlcom + '_ReceiptControl2_txtreqamtkyd').value == null)
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtreqamtkyd').value = 0;
    }
    if (document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnDocName').value == 'companyRefund') {
        document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlCurrency').disabled = true;
    }
}
function AssignDataTOGrid(obj) {
    var groupid = document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnapppaymentgroupid').value;
    var ErAdvAllow = 'N';
    var WebCfngAllowCash = $('[id*=hdnWebCfngAllowCash]').val();
    if (WebCfngAllowCash == null || WebCfngAllowCash == undefined || WebCfngAllowCash == '' || WebCfngAllowCash == 'undefined') WebCfngAllowCash = 'N';
    if (WebCfngAllowCash == 'Y' || WebCfngAllowCash == 'y') {
        ErAdvAllow = $('[id*=hdnAllowCashTrnd]').val();
        if (ErAdvAllow == null || ErAdvAllow == undefined || ErAdvAllow == '' || ErAdvAllow == 'undefined') ErAdvAllow = 'N';
    }
    var grid = document.getElementById('' + ctrlcom + '_ReceiptControl2_gvReceiptDetails');
    var ReceiptAmt = 0;
    var sno = 1; var rowColor = 0;

    var totamtforwords=0;var totchangeamtforwords=0;
    if (obj == "New") {
        $("table[id*=gvReceiptDetails] tr:has(td)").each(function (e) {

            count++;
            if ($(this).closest('tr').find("[id*=lblrecmode]").text() == '' && $(this).closest('tr').find("[id*=lblAmount]").text() == '') {
                var paindex = document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlPaymentType').value;
                if (paindex == null || paindex == undefined || paindex == '') { paindex = 0; }
                var pay_mode = paindex;
                $(this).closest('tr').find("input[type=hidden][id*=hdnrecmodeId]").val(pay_mode);
                $(this).closest('tr').find("input[type=hidden][id*=hdnpaymentappgroupid]").val(groupid);
                $(this).closest('tr').find("input[type=hidden][id*=_RECEIPT_MODE_ID]").val(pay_mode);
                var form_name = $('#ctl00_ContentPlaceHolder1_ReceiptControl2_hdnDocName').val();
                var Rest_Amt = 0;
                var sel_text = $('#ctl00_ContentPlaceHolder1_ReceiptControl2_ddlPaymentType').find('option:selected').text();
                $(this).closest('tr').find("[id*=lblrecmode]").text(sel_text);
                if (form_name == "OUTSTDNGDUE") {

                    if (paindex == "2" || paindex == "3") {
                        $(this).closest('tr').find("input[type=hidden][id*=hdnpaymentcommid]").val(document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnpaymentcommentid').value);
                    }
                    else {
                        $(this).closest('tr').find("input[type=hidden][id*=hdnpaymentcommid]").val('0');
                    }
                }



                $(this).closest('tr').find("[id*=lblexchrate]").text(document.getElementById('' + ctrlcom + '_ReceiptControl2_txtExchangeRate').value);
                var exrate = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtExchangeRate').value;
                var sel_text = $('#ctl00_ContentPlaceHolder1_ReceiptControl2_ddlPaymentType').find('option:selected').text();


                if (sel_text == 'Cash' || sel_text == 'Advance Adjustment' || sel_text == 'Funds' || sel_text == 'EXCESS TO ADVANCE' || sel_text.trim().toLowerCase() == 'online' || sel_text.trim().toLowerCase() == 'others' || sel_text.trim().toLowerCase() == 'insurance' || sel_text.trim() == "FOREIGN TRANSFER"
               || sel_text == 'PAYMASTER' || sel_text == "NATIONAL COMMERCIAL BANK(NCB)" || sel_text == "SAGICOR BANK" || sel_text == "SCOTIA BANK" || sel_text == "JDF" || sel_text == "NHF" || sel_text == "UPI" || sel_text == "Paytm" || sel_text == "PhonePe" || sel_text == "Google Pay" || sel_text == "Lazypay" || sel_text =="MPESA MANUAL") {

                    var tendAmt = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtTenderedAmt').value;
                    var amt = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtamt').value;
                    if (tendAmt == '' || tendAmt == null || tendAmt == undefined || isNaN(tendAmt)) { tendAmt = "0"; }
                    var exrate = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtExchangeRate').value;
                    var __changeamt = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtChangeKyd').value;
                    if (__changeamt == '' || __changeamt == null || __changeamt == undefined) { __changeamt = 0; }
                    var convertamt = parseFloat(amt) * parseFloat(exrate);
                    convertamt = (RoundFloorCeil('', convertamt, ''));
                    /*Amount=ConvertedAmt-ChangeIn [Different Currency]  @Start@ */
                    if (ErAdvAllow == 'Y') {
                        var _convertamt = parseFloat(tendAmt) * parseFloat(exrate);
                        var _lblAmt = parseFloat(_convertamt) - parseFloat(__changeamt);
                    }
                    else {
                        var _lblAmt = parseFloat(convertamt) - parseFloat(__changeamt);
                    }
                    if (_lblAmt == '' || _lblAmt == undefined || _lblAmt == null) { _lblAmt = 0; }
                    $(this).closest('tr').find("[id*=lblAmount]").text(setProperDecimals(_lblAmt));
                    /* @End@ */
                    //$(this).closest('tr').find("[id*=lblAmount]").text(amt);
                    $(this).closest('tr').find("[id*=lbltendcash]").text(tendAmt);
                    var convertamt = (tendAmt) * parseFloat(exrate);
                    convertamt = (RoundFloorCeil('', convertamt, ''));
                    $(this).closest('tr').find("[id*=lblconvertedamt]").text(convertamt);
                    /*$(this).closest('tr').find("[id*=lblAmount]").text(convertamt);*/
                    $(this).closest('tr').find("[id*=lblchange]").text(document.getElementById('' + ctrlcom + '_ReceiptControl2_txtChangeKyd').value);
                    if (form_name == 'Refund' && pay_mode == '1') {
                        var Rest_Amt = $('#ctl00_ContentPlaceHolder1_BillsGrid_hdncashamt').val();
                        if (Rest_Amt == '' || Rest_Amt == null || Rest_Amt == undefined)
                        { Rest_Amt = 0; }
                        if (parseFloat(tendAmt) > parseFloat(Rest_Amt)) {
                            $('#ctl00_ContentPlaceHolder1_BillsGrid_hdncashamt').val(0);
                        }
                        else {
                            if (parseFloat(Rest_Amt) > parseFloat(tendAmt) && Rest_Amt != 0) {
                                $('#ctl00_ContentPlaceHolder1_BillsGrid_hdncashamt').val(parseFloat(Rest_Amt) - parseFloat(tendAmt));
                            }

                        }

                    }
                }
                else {

                    var _srvchargeamt = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtsrvcharges').value;
                    var _amt = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtamt').value;
                    if (_srvchargeamt == '' || _srvchargeamt == null || _srvchargeamt == undefined || isNaN(_srvchargeamt)) { _srvchargeamt = "0"; }
                    if (_amt == '' || _amt == null || _amt == undefined || isNaN(_amt)) { _amt = "0"; }
                    var _deductionAmt = 0;
                    if (parseFloat(_srvchargeamt) > 0) {
                        _deductionAmt = setProperDecimalsCorpPer(parseFloat(_amt) * (parseFloat(_srvchargeamt) / 100));
                        if (_deductionAmt == '' || _deductionAmt == null || _deductionAmt == undefined || isNaN(_deductionAmt)) { _deductionAmt = "0"; }
                    }
                    var lblamount = parseFloat(_amt) - parseFloat(_deductionAmt);
                    $(this).closest('tr').find("[id*=lblAmount]").text(parseFloat(lblamount));
                    /* added on 05.08.2016 */
                    $(this).closest('tr').find("input[type=hidden][id*=hdnsrvcharg]").val(document.getElementById('' + ctrlcom + '_ReceiptControl2_txtsrvcharges').value);
                    $(this).closest('tr').find("input[type=hidden][id*=hdnsrvchargamt]").val(document.getElementById('' + ctrlcom + '_ReceiptControl2_txtamt').value);
                    $(this).closest('tr').find("[id*=lblsrvchrgpcnt]").text(_srvchargeamt);
                    $(this).closest('tr').find("[id*=lblsrvchrgamt]").text(_deductionAmt);
                    document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnamtwithoutsrvchrg').value = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtamt').value;
                    /*var amt = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtamt').value;*/ /*document.getElementById('' + ctrlcom + '_ReceiptControl2_hdncalamtwithsrvchrg').value;*/
                    var amt = document.getElementById('' + ctrlcom + '_ReceiptControl2_hdncalamtwithsrvchrg').value; /*document.getElementById('' + ctrlcom + '_ReceiptControl2_hdncalamtwithsrvchrg').value;*/
                    if (amt == undefined || amt == '' || amt == null || isNaN(amt)) { amt = '0'; }
                    $(this).closest('tr').find("[id*=lblAmount]").text(amt);
                    $(this).closest('tr').find("[id*=lbltendcash]").text(amt);
                    var convertamt = parseFloat(amt) * parseFloat(exrate);
                    convertamt = RoundFloorCeil('', convertamt, '');
                    if (convertamt == undefined || convertamt == '' || convertamt == null || convertamt == "NaN") { convertamt = '0'; }
                    $(this).closest('tr').find("[id*=lblconvertedamt]").text(convertamt);
                    $(this).closest('tr').find("[id*=lblAmount]").text(convertamt);
                    if (form_name == 'Refund' && pay_mode == '2') {
                        var Rest_Amt = $('#ctl00_ContentPlaceHolder1_BillsGrid_hdncashamt').val();
                        if (Rest_Amt == '' || Rest_Amt == null || Rest_Amt == undefined)
                        { Rest_Amt = 0; }
                        if (parseFloat(_amt) > parseFloat(Rest_Amt)) {
                            $('#ctl00_ContentPlaceHolder1_BillsGrid_hdncashamt').val(0);
                        }
                        else {
                            if (parseFloat(Rest_Amt) > parseFloat(_amt) && Rest_Amt != 0) {
                                $('#ctl00_ContentPlaceHolder1_BillsGrid_hdncashamt').val(parseFloat(Rest_Amt) - parseFloat(_amt));
                            }

                        }

                    }

                }

                var currindex = document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlCurrency').value;
                if (currindex == '' || currindex == null || currindex == undefined) { currindex = 0; }
                var curr_name = $('#ctl00_ContentPlaceHolder1_ReceiptControl2_ddlCurrency').find('option:selected').text();
                if (currindex == 0) {
                    $(this).closest('tr').find("[id*=lblcurrname]").text('');
                }
                else {
                    $(this).closest('tr').find("[id*=lblcurrname]").text(curr_name);
                    $(this).closest('tr').find("input[type=hidden][id*=hdncurrId]").val(currindex);
                }

                var bankindex = document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlBankName').value;
                var bank_name = $('#ctl00_ContentPlaceHolder1_ReceiptControl2_ddlBankName').find('option:selected').text();
                if (bankindex == 0) {
                    $(this).closest('tr').find("[id*=lblbankname]").text('');
                }
                else {
                    $(this).closest('tr').find("[id*=lblbankname]").text(bank_name);
                    $(this).closest('tr').find("input[type=hidden][id*=hdnbankid]").val(bankindex);
                    $(this).closest('tr').find("input[type=hidden][id*=_BANK_ID]").val(bankindex);
                }
                $(this).closest('tr').find("[id*=lblcardno]").text(document.getElementById('' + ctrlcom + '_ReceiptControl2_txtCardNo').value);

                /*$(this).closest('tr').find("[id*=lblauthcode]").text(document.getElementById('' + ctrlcom + '_ReceiptControl2_txtAuthCode').value);*/
                /* added */
                var sel_text = $('#ctl00_ContentPlaceHolder1_ReceiptControl2_ddlPaymentType').find('option:selected').text();
                if (sel_text == 'Cheque') {
                    $(this).closest('tr').find("[id*=hdncheck_AuthID]").val(document.getElementById('' + ctrlcom + '_ReceiptControl2_UCchequeAuth__hiddenID').value);
                    //                    $(this).closest('tr').find("[id*=lblauthcode]").text(document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnauthcd').value);
                    $(this).closest('tr').find("[id*=lblauthcode]").text(document.getElementById('' + ctrlcom + '_ReceiptControl2_UCchequeAuth_txtSearchControl').value);
                }
                else {
                    $(this).closest('tr').find("[id*=lblauthcode]").text(document.getElementById('' + ctrlcom + '_ReceiptControl2_txtAuthCode').value);
                }
                if (sel_text == 'Credit Card' || sel_text == 'Debit Card') {
                    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtcqissuername').value = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtAdvCardHldrName').value;
                }
                /* up to here */
                $(this).closest('tr').find("[id*=lblcardexpdt]").text(document.getElementById('' + ctrlcom + '_ReceiptControl2_txtExpDt').value);

                $(this).closest('tr').find("[id*=lblchequedt]").text(document.getElementById('' + ctrlcom + '_ReceiptControl2_txtchequedt').value);
                $(this).closest('tr').find("[id*=lblcqreldt]").text(document.getElementById('' + ctrlcom + '_ReceiptControl2_txtchequerealizedt').value);
                //changed by Ali on 20180309 starts
                if (form_name == '' || form_name == undefined || form_name == null || form_name == 'undefined') { form_name = ''; }
                if (form_name == 'IpAdvance' && pay_mode == '4' || pay_mode == '5') {
                    var cardholdername = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtAdvCardHldrName').value;
                    if (cardholdername == '' || cardholdername == undefined || cardholdername == null || cardholdername == 'undefined') { cardholdername = ''; }
                    $(this).closest('tr').find("[id*=lblcqissuername]").text(cardholdername);
                }
                else {
                    $(this).closest('tr').find("[id*=lblcqissuername]").text(document.getElementById('' + ctrlcom + '_ReceiptControl2_txtcqissuername').value);
                }
                //changed by Ali on 20180309 ends
                var typeindex = document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlCardType').value;
                if (typeindex == '' || typeindex == null || typeindex == undefined) { typeindex = 0; }
                var card_type = $('#ctl00_ContentPlaceHolder1_ReceiptControl2_ddlCardType').find('option:selected').text();
                if (typeindex == 0) {
                    $(this).closest('tr').find("[id*=lblcardtype]").text('');
                }
                else {
                    $(this).closest('tr').find("[id*=lblcardtype]").text(card_type);
                    $(this).closest('tr').find("input[type=hidden][id*=hdncardtypeId]").val(typeindex);
                    $(this).closest('tr').find("input[type=hidden][id*=_CARD_TYPE_ID]").val(typeindex);
                }
            }
            var receipt = $(this).closest('tr').find("[id*=lblconvertedamt]").text();
            var chngcashAmt = $(this).closest('tr').find("[id*=lblchange]").text();
            if (chngcashAmt == '') chngcashAmt = 0;
            var gridhdnplutusreferenceval = document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnPlutusTransactionReferenceID').value;
            gridhdnplutusreferenceval = gridhdnplutusreferenceval == '' || gridhdnplutusreferenceval == 'undefined' || gridhdnplutusreferenceval == undefined ? "" : gridhdnplutusreferenceval;
            $(this).closest('tr').find("[id*=gridhdnplutusreferenceid]").val(gridhdnplutusreferenceval);
            if (gridhdnplutusreferenceval != "") {
                $(this).closest('tr').find("input[type=img][id*=imgBtnDelete]").attr('disabled', true);
                $(this).closest('tr').find("input[type=img][id*=imgBtnEdit]").attr('disabled', true);
            }
            document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnPlutusTransactionReferenceID').value = "";
            ReceiptAmt = parseFloat(ReceiptAmt) + parseFloat(receipt) - parseFloat(chngcashAmt); ;
            sno++;
            
                     $(this).closest('tr').find("[id*=lblAmtinwords]").text(  convertNumberToWords(parseFloat( $(this).closest('tr').find("[id*=lblAmount]").text())).toLowerCase().replace(/(^.|\s+.)/g, m=>m.toUpperCase())) ;

        if( $(this).closest('tr').find("[id*=lblAmount]").text() !=''|| $(this).closest('tr').find("[id*=lblAmount]").text()!='undefined'|| $(this).closest('tr').find("[id*=lblAmount]").text()!=undefined||$(this).closest('tr').find("[id*=lblAmount]").text()!=null){
        totamtforwords=parseFloat(totamtforwords)+parseFloat($(this).closest('tr').find("[id*=lblAmount]").text());
        
       var chaamtforwors= $(this).closest('tr').find("[id*=lblchange]").text();
         if (chaamtforwors == '' || chaamtforwors == undefined|| chaamtforwors == 'undefined' || chaamtforwors == null || isNaN(chaamtforwors)) { chaamtforwors = "0"; }
        totchangeamtforwords=parseFloat(totchangeamtforwords)+parseFloat(chaamtforwors);
        }

        if($("table[id$=gvReceiptDetails] tr:has(td)").length==parseFloat(e)+1){
      
       document.getElementById('' + ctrlcom + '_ReceiptControl2_txttotamtinwordsadd').innerHTML =  convertNumberToWords(parseFloat(totamtforwords)).toLowerCase().replace(/(^.|\s+.)/g, m=>m.toUpperCase()) ;    
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtchangeamtinwordsadd').innerHTML =   convertNumberToWords(parseFloat(totchangeamtforwords)).toLowerCase().replace(/(^.|\s+.)/g, m=>m.toUpperCase()) ;     
      
        
        }


        });
    }
    else if (obj == "Update") {
        $("table[id*=gvReceiptDetails] tr:has(td)").each(function (e) {
            if (rowColor == 0) {
                document.getElementById('' + ctrlcom + '_ReceiptControl2_gvReceiptDetails').rows[this.rowIndex].style.ClassName = 'gridAlternaterow';
                rowColor++;
            }
            else {
                document.getElementById('' + ctrlcom + '_ReceiptControl2_gvReceiptDetails').rows[this.rowIndex].style.ClassName = 'gridrow';
                rowColor = 0;
            }
            document.getElementById('' + ctrlcom + '_ReceiptControl2_gvReceiptDetails').rows[this.rowIndex].style.backgroundColor = 'White';
            var paindex = document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlPaymentType').value;
            if (paindex == null || paindex == undefined || paindex == '') { paindex = 0; }
            var mode_id = paindex;
            var SNo = document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnRecSNo').value;
            if (SNo == $(this).closest('tr').find("input[type=hidden][id*=hdnSNo]").val()) {
                var paindex = document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlPaymentType').value;
                if (paindex == null || paindex == undefined || paindex == '') { paindex = 0; }
                $(this).closest('tr').find("input[type=hidden][id*=hdnrecmodeId]").val(paindex);
                $(this).closest('tr').find("input[type=hidden][id*=hdnpaymentappgroupid]").val(groupid);
                var sel_text = $('#ctl00_ContentPlaceHolder1_ReceiptControl2_ddlPaymentType').find('option:selected').text();
                $(this).closest('tr').find("[id*=lblrecmode]").text(sel_text);
                $(this).closest('tr').find("[id*=lblexchrate]").text(document.getElementById('' + ctrlcom + '_ReceiptControl2_txtExchangeRate').value);
                var pat_type = sel_text;
                var exrate = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtExchangeRate').value;
                if (groupid == '1' || groupid == '12' || groupid == '4' || groupid == '13') {
                    var tendAmt = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtTenderedAmt').value;
                    if (tendAmt == '' || tendAmt == null || tendAmt == undefined || isNaN(tendAmt)) { tendAmt = "0"; }
                    $(this).closest('tr').find("[id*=lblAmount]").text(tendAmt);
                    $(this).closest('tr').find("[id*=lbltendcash]").text(tendAmt);
                    var convertamt = parseFloat(tendAmt) * parseFloat(exrate);
                    convertamt = RoundFloorCeil('', convertamt, '');
                    $(this).closest('tr').find("[id*=lblconvertedamt]").text(convertamt);
                    $(this).closest('tr').find("[id*=lblchange]").text(document.getElementById('' + ctrlcom + '_ReceiptControl2_txtChangeKyd').value);
                }
                else {
                    var _srvchargeamt = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtsrvcharges').value;
                    var _amt = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtamt').value;
                    if (_srvchargeamt == '' || _srvchargeamt == null || _srvchargeamt == undefined || isNaN(_srvchargeamt)) { _srvchargeamt = "0"; }
                    if (_amt == '' || _amt == null || _amt == undefined || isNaN(_amt)) { _amt = "0"; }
                    var _deductionAmt = 0;
                    if (parseFloat(_srvchargeamt) > 0) {
                        _deductionAmt = setProperDecimalsCorpPer(parseFloat(_amt) * (parseFloat(_srvchargeamt) / 100));
                        if (_deductionAmt == '' || _deductionAmt == null || _deductionAmt == undefined || isNaN(_deductionAmt)) { _deductionAmt = "0"; }
                    }
                    var lblamount = parseFloat(_amt) - parseFloat(_deductionAmt);
                    $(this).closest('tr').find("[id*=lblAmount]").text(lblamount);
                    /** added on 05.08.2016 ****/

                    $(this).closest('tr').find("input[type=hidden][id*=hdnsrvcharg]").val(document.getElementById('' + ctrlcom + '_ReceiptControl2_txtsrvcharges').value);
                    $(this).closest('tr').find("input[type=hidden][id*=hdnsrvchargamt]").val(document.getElementById('' + ctrlcom + '_ReceiptControl2_txtamt').value);
                    $(this).closest('tr').find("[id*=lblsrvchrgpcnt]").text(_srvchargeamt);
                    $(this).closest('tr').find("[id*=lblsrvchrgamt]").text(_deductionAmt);

                    document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnamtwithoutsrvchrg').value = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtamt').value;
                    /*var amt = document.getElementById('' + ctrlcom + '_ReceiptControl2_hdncalamtwithsrvchrg').value;*//*uncommented by pushkar plz let me know uncomment it*/
                    var amt = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtamt').value;
                    if (amt == undefined || amt == '' || amt == null) { amt = '0'; }
                    $(this).closest('tr').find("[id*=lblAmount]").text(amt);
                    $(this).closest('tr').find("[id*=lbltendcash]").text('0');
                    var convertamt = 0;
                    if (parseFloat(amt) > 0) {
                        convertamt = parseFloat(amt) * parseFloat(exrate);
                    }
                    convertamt = RoundFloorCeil('', convertamt, '');
                    $(this).closest('tr').find("[id*=lblconvertedamt]").text(convertamt);
                }
                var currindex = document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlCurrency').value;
                if (currindex == '' || currindex == undefined || currindex == null) { currindex = 0; }
                var curr_name = $('#ctl00_ContentPlaceHolder1_ReceiptControl2_ddlCurrency').find('option:selected').text();
                if (currindex == 0) {
                    $(this).closest('tr').find("[id*=lblcurrname]").text('');
                }
                else {
                    $(this).closest('tr').find("[id*=lblcurrname]").text(curr_name);
                    $(this).closest('tr').find("input[type=hidden][id*=hdncurrId]").val(currindex);
                }
                var bankindex = document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlBankName').value;
                if (bankindex == '' || bankindex == null || bankindex == undefined) { bankindex = 0; }
                var bank_name = $('#ctl00_ContentPlaceHolder1_ReceiptControl2_ddlBankName').find('option:selected').text();
                if (bankindex <= 0) {
                    $(this).closest('tr').find("[id*=lblbankname]").text('');
                }
                else {
                    $(this).closest('tr').find("[id*=lblbankname]").text(bank_name);
                    $(this).closest('tr').find("input[type=hidden][id*=hdnbankid]").val(bankindex);
                }
                $(this).closest('tr').find("[id*=lblcardno]").text(document.getElementById('' + ctrlcom + '_ReceiptControl2_txtCardNo').value);
                /*$(this).closest('tr').find("[id*=lblauthcode]").text(document.getElementById('' + ctrlcom + '_ReceiptControl2_txtAuthCode').value);*/
                /* added */
                var sel_text = $('#ctl00_ContentPlaceHolder1_ReceiptControl2_ddlPaymentType').find('option:selected').text();
                if (sel_text == 'Cheque') {
                    $(this).closest('tr').find("[id*=hdncheck_AuthID]").val(document.getElementById('' + ctrlcom + '_ReceiptControl2_UCchequeAuth__hiddenID').value);
                    $(this).closest('tr').find("[id*=lblauthcode]").text(document.getElementById('' + ctrlcom + '_ReceiptControl2_UCchequeAuth_txtSearchControl').value);
                }
                else {
                    $(this).closest('tr').find("[id*=lblauthcode]").text(document.getElementById('' + ctrlcom + '_ReceiptControl2_txtAuthCode').value);

                }
                /* up to here */
                $(this).closest('tr').find("[id*=lblcardexpdt]").text(document.getElementById('' + ctrlcom + '_ReceiptControl2_txtExpDt').value);
                $(this).closest('tr').find("[id*=lbltendcash]").text(document.getElementById('' + ctrlcom + '_ReceiptControl2_txtTenderedAmt').value);
                $(this).closest('tr').find("[id*=lblchange]").text(document.getElementById('' + ctrlcom + '_ReceiptControl2_txtChangeKyd').value);
                $(this).closest('tr').find("[id*=lblchequedt]").text(document.getElementById('' + ctrlcom + '_ReceiptControl2_txtchequedt').value);
                $(this).closest('tr').find("[id*=lblcqreldt]").text(document.getElementById('' + ctrlcom + '_ReceiptControl2_txtchequerealizedt').value);
                $(this).closest('tr').find("[id*=lblcqissuername]").text(document.getElementById('' + ctrlcom + '_ReceiptControl2_txtcqissuername').value);

                var typeindex = document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlCardType').value;
                if (typeindex == '' || typeindex == null || typeindex == undefined) { typeindex = 0; }
                var card_type = $('#ctl00_ContentPlaceHolder1_ReceiptControl2_ddlCardType').find('option:selected').text();
                if (typeindex <= 0) {
                    $(this).closest('tr').find("[id*=lblcardtype]").text('');
                }
                else {
                    $(this).closest('tr').find("[id*=lblcardtype]").text(card_type);
                    $(this).closest('tr').find("input[type=hidden][id*=hdncardtypeId]").val(typeindex);
                }
            }
            var receipt = $(this).closest('tr').find("[id*=lblconvertedamt]").text();
            if (receipt == '' || receipt == undefined) {
                receipt = 0;
            }
            var chngcashAmt = $(this).closest('tr').find("[id*=lblchange]").text();
            if (chngcashAmt == '') chngcashAmt = 0;
            ReceiptAmt = ((((parseFloat(ReceiptAmt) + parseFloat(receipt)) * Math.pow(10, 2)) / Math.pow(10, 2)) - parseFloat(chngcashAmt));
            sno++;
            
                 

                     $(this).closest('tr').find("[id*=lblAmtinwords]").text( convertNumberToWords(parseFloat( $(this).closest('tr').find("[id*=lblAmount]").text())).toLowerCase().replace(/(^.|\s+.)/g, m=>m.toUpperCase())) ;  



          if( $(this).closest('tr').find("[id*=lblAmount]").text() !=''|| $(this).closest('tr').find("[id*=lblAmount]").text()!='undefined'|| $(this).closest('tr').find("[id*=lblAmount]").text()!=undefined||$(this).closest('tr').find("[id*=lblAmount]").text()!=null){
        totamtforwords=parseFloat(totamtforwords)+parseFloat($(this).closest('tr').find("[id*=lblAmount]").text());
        
       var chaamtforwors= $(this).closest('tr').find("[id*=lblchange]").text();
         if (chaamtforwors == '' || chaamtforwors == undefined|| chaamtforwors == 'undefined' || chaamtforwors == null || isNaN(chaamtforwors)) { chaamtforwors = "0"; }
        totchangeamtforwords=parseFloat(totchangeamtforwords)+parseFloat(chaamtforwors);
        }

        if($("table[id$=gvReceiptDetails] tr:has(td)").length==parseFloat(e)+1){
      
       document.getElementById('' + ctrlcom + '_ReceiptControl2_txttotamtinwordsadd').innerHTML =  convertNumberToWords(parseFloat(totamtforwords)).toLowerCase().replace(/(^.|\s+.)/g, m=>m.toUpperCase()) ;   
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtchangeamtinwordsadd').innerHTML =  convertNumberToWords(parseFloat(totchangeamtforwords)).toLowerCase().replace(/(^.|\s+.)/g, m=>m.toUpperCase()) ;   
      
        
        }
        });
        document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnupdatestatus').value = 'N';
        document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlPaymentType').disabled = false;
    }
    var roundtype = document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnroundtype').value;
    var rounddec = document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnroundoffval').value;
    ReceiptAmt = RoundFloorCeil('', ReceiptAmt, '');
    if (ReceiptAmt == '' || ReceiptAmt == undefined || ReceiptAmt == null || isNaN(ReceiptAmt)) { ReceiptAmt = "0"; }
    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtreceiptAmount').value = ReceiptAmt;
    var form_name = document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnDocName').value;
    if (form_name == 'OUTSTDNGDUE' || form_name == 'Refund' || form_name == "PreRefund") {
        // ctl00_ContentPlaceHolder1_ReceiptControl2_txtreqamtkyd
        var DueorRefRelAmt = 0;
        if (form_name == 'OUTSTDNGDUE') {
            DueorRefRelAmt = $('#ctl00_ContentPlaceHolder1_txtDueAmount').val();
        }
        else if (form_name == 'Refund') {

            DueorRefRelAmt = $('#ctl00_ContentPlaceHolder1_txtRefundableAmt').val();
        }
        else
            DueorRefRelAmt = $('#ctl00_ContentPlaceHolder1_txtTotPaid').val();
        var req_amt = parseFloat(DueorRefRelAmt) - parseFloat(ReceiptAmt);
        RoundFloorCeil('', req_amt, '');
        $('#ctl00_ContentPlaceHolder1_ReceiptControl2_txtreqamtkyd').val(req_amt);
        if (form_name == 'Refund' && preadvflag=='SD' && document.getElementById('' + ctrlcom + '_chkSDRef').checked == true){
            document.getElementById('ctl00_ContentPlaceHolder1_ReceiptControl2_hdnDueAmt').value=req_amt;
            $('#' + ctrlcom + '_txtRefundableAmt').val(req_amt);
        }
        if(preadvflag=='SD')
        document.getElementById('ctl00_ContentPlaceHolder1_ReceiptControl2_txtpatdue').value = req_amt;
    }
    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatdue').value = 0;
    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtTotalDue').value = 0;
    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatdue').value = req_amt;
    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtTotalDue').value = req_amt;
    //$("[id*=hdnEditAmt]").val(req_amt);
    var _editamt = $("[id*=hdnEditAmt]").val();
    if (_editamt == undefined || _editamt == null || _editamt == '' || isNaN(_editamt)) { _editamt = "0"; }
    var baldueamt = parseFloat(_editamt) - parseFloat(ReceiptAmt);
    if (baldueamt == undefined || baldueamt == null || baldueamt == '' || isNaN(baldueamt)) { baldueamt = "0"; }
    if (parseFloat(baldueamt) < 0) { baldueamt = "0"; }
    $("[id*=hdnEditAmt]").val(parseFloat(baldueamt));


    ClearTranctionadd();
    DisableControl();
    $('#ctl00_ContentPlaceHolder1_ReceiptControl2_txtExpDt').addClass('grey');
    $('#ctl00_ContentPlaceHolder1_ReceiptControl2_txtExpDt').removeClass('red');
    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtamt').className = 'grey';
    document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlPaymentType').selectedIndex = 0;
    document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnHTMLString1').value = grid.innerHTML;
    document.getElementById('' + ctrlcom + '_ReceiptControl2_imgbtnadd').style.display = 'block';
    document.getElementById('' + ctrlcom + '_ReceiptControl2_imgbtnupdate').style.display = "none";

    document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlPaymentType').focus();
    checkpayment();
    if (document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnDocName').value == 'IpAdvance') {
    var advanceCollectedamt=0;
    if(document.getElementById('' + ctrlcom + '_txtadvcollamt')!=null){
        advanceCollectedamt = document.getElementById('' + ctrlcom + '_txtadvcollamt').value;}
        var advanceamt = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtreceiptAmount').value;
        if (advanceamt == undefined || advanceamt == null || advanceamt == '') { advanceamt = "0"; }
        if (advanceCollectedamt == undefined || advanceCollectedamt == null || advanceCollectedamt == '') { advanceCollectedamt = "0"; }
        if (parseFloat(advanceamt) < parseFloat(advanceCollectedamt)) {
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtRemarks').className = 'red';
        }
        else {
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtRemarks').className = 'grey';
        }
    }
}
function UpdateTransactionDetails() {

    var ErAdvAllow = 'N';
    var WebCfngAllowCash = $('[id*=hdnWebCfngAllowCash]').val();
    if (WebCfngAllowCash == null || WebCfngAllowCash == undefined || WebCfngAllowCash == '' || WebCfngAllowCash == 'undefined') WebCfngAllowCash = 'N';
    if (WebCfngAllowCash == 'Y' || WebCfngAllowCash == 'y') {
        ErAdvAllow = $('[id*=hdnAllowCashTrnd]').val();
        if (ErAdvAllow == null || ErAdvAllow == undefined || ErAdvAllow == '' || ErAdvAllow == 'undefined') ErAdvAllow = 'N';
    }
    var form_name = document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnDocName').value;
    if (form_name == 'PreRefund') {
        var total_ref_amt = $('#ctl00_ContentPlaceHolder1_txtTotPaid').val();
        var total_refunded_amt = $('#ctl00_ContentPlaceHolder1_ReceiptControl2_txtCurrAmt').val();
        if (total_ref_amt == '' || total_ref_amt == null || total_ref_amt == undefined)
        { total_ref_amt = 0; }
        if (total_refunded_amt == '' || total_refunded_amt == null || total_refunded_amt == undefined)
        { total_refunded_amt = 0; }
        if (parseFloat(total_refunded_amt) > parseFloat(total_ref_amt)) {

            $(".stoast").toastText("warning", "Pre Refund Amount Should not Give More Than Total Paid amount", 5, 3);
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtamt').value = '';
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtCurrAmt').value = '';
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtTenderedAmt').value = '';
            return false;
        }
        else {
            if (document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlPaymentType').value == '18') {

                var tAmt = $('#ctl00_ContentPlaceHolder1_ReceiptControl2_txtTenderedAmt').val();
                if (tAmt == '' || tAmt == null || tAmt == undefined) { tAmt = 0; }
                $('[id*=hdnExToAdvAmt]').val(tAmt);
            }
        }
    }

     if (form_name == 'PREADVANCE') {
      if((ctl00_ContentPlaceHolder1_chkSDReg.checked==true||ctl00_ContentPlaceHolder1_chkSDRef.checked==true) &&ctl00_ContentPlaceHolder1_ReceiptControl2_txtreqamtkyd.value!=0){
            if(ctl00_ContentPlaceHolder1_ReceiptControl2_txtCurrAmt.value!=ctl00_ContentPlaceHolder1_ReceiptControl2_txtreqamtkyd.value){ 
                $(".stoast").toastText("warning", "You can Add only Entire Required Amt!.", 5, 3);
                return false; 
            }
      }
    }
    var tendoramt = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtTenderedAmt').value;
    var amt = $('#ctl00_ContentPlaceHolder1_ReceiptControl2_txtamt').val();
    if (tendoramt == '.' || tendoramt == '' || tendoramt == undefined || tendoramt == null) { tendoramt = 0; }
    if (amt == '.' || amt == '' || amt == undefined || amt == null) { amt = 0; }
    var _paymentTypeID = document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlPaymentType').value;
    var paymnetmodeid = $('#ctl00_ContentPlaceHolder1_ReceiptControl2_ddlPaymentType').find('option:selected').val();
    var _JSONParams = JSON.stringify({ paymnetmodeid: paymnetmodeid });
    var _ServiceURL = _iniUrl + "Private/FrontOffice/OPDBILLNEW.aspx/GetPaymentModdedetails";
    var groupid = 0;
    $.ajax({
        type: "POST",
        url: _ServiceURL,
        dataType: "json",
        data: _JSONParams,
        async: false,
        contentType: "application/json; charset=utf-8",
        error: function (jqXHR, textStatus, errorThrown) {
        },
        success: function (jdata) {
            var jdata = JSON.parse(jdata.d);
            document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnapppaymentgroupid').value = jdata[0].APP_PAYMENT_GROUP_ID;
        }
    });
    groupid = document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnapppaymentgroupid').value;


    if (form_name == 'IpAdvance' || form_name == 'IPFINAL' || form_name == 'IMRSRVENTRY') {
        if (_paymentTypeID == 11 || _paymentTypeID == 1) {
            var AdvAmtLimit = $('[id*=hdnAdvAmtLimit]').val();
            var AdvLimitMand = $('[id*=hdnAdvAmtLmtMand]').val();
            if (AdvAmtLimit == '' || AdvAmtLimit == null || AdvAmtLimit == undefined) { AdvAmtLimit = 0; }
            if (AdvLimitMand == '' || AdvLimitMand == null || AdvLimitMand == undefined) { AdvLimitMand = "false"; }
            var PrvCashAmt = $('[id*=hdnAdmnCashAmt]').val();
            if (PrvCashAmt == '' || PrvCashAmt == null || PrvCashAmt == undefined) { PrvCashAmt = 0; }
            var TotCashAmt = parseFloat(tendoramt) + parseFloat(PrvCashAmt);
            if (parseFloat(AdvAmtLimit) > 0) {
                if (parseFloat(AdvAmtLimit) < parseFloat(TotCashAmt)) {
                    $(".stoast").toastText("Info", "Patient cash amount limit has exceed..!", 5, 2);
                    if (_paymentTypeID != 11) {
                        if (AdvLimitMand.trim().toLowerCase() == 'true') {
                            return false;
                        }
                    }
                }
            }
        }
    }else if ( form_name=='Cons' || form_name=='OP'|| form_name=='OPQUICK'|| form_name=='PREADVANCE' || form_name == 'OUTSTDNGDUE'){
    
           if (_paymentTypeID == 11 || _paymentTypeID == 1) {
              var AdvAmtLimit = $('[id*=hdncashlmtamt]').val();
            var AdvLimitMand = $('[id*=hdnAdvAmtLmtMand]').val();
            if (AdvAmtLimit == '' || AdvAmtLimit == null || AdvAmtLimit == undefined) { AdvAmtLimit = 0; }
            if (AdvLimitMand == '' || AdvLimitMand == null || AdvLimitMand == undefined) { AdvLimitMand = "false"; }
            var chgCashAmt =$('#ctl00_ContentPlaceHolder1_ReceiptControl2_txtChangeKyd').val()
        if (chgCashAmt == '' || chgCashAmt == null || chgCashAmt == undefined) { chgCashAmt = 0; }
        var TotCashAmt = parseFloat(tendoramt) - parseFloat(chgCashAmt);
            if (parseFloat(AdvAmtLimit) > 0) {
                if (parseFloat(AdvAmtLimit) < parseFloat(TotCashAmt)) {
                    $(".stoast").toastText("Info", "Patient cash amount limit has exceed..!", 5, 2);
                    if (_paymentTypeID != 11) {
                        if (AdvLimitMand.trim().toLowerCase() == 'true') {
                            return false;
                        }
                    }
                }
            }
        }
    
    
    }

    if (document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlPaymentType').value == '4') {
        if (form_name == "NewChangeReceipt" || form_name == "Refund")
        { }
        else {
            var otpreq = $('#ctl00_ContentPlaceHolder1_ReceiptControl2_hdnotprequired').val();
            var page_l_otp_setting = document.getElementById('' + ctrlcom + '_ReceiptControl2_chkotpadvanced').checked;
            if (otpreq == 'True' && page_l_otp_setting == true) {
                var otp = document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnotp').value;
                var entered_otp = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtadjustmentamt').value;
                if (entered_otp == otp)
                { }
                else {
                    $(".stoast").toastText("warning", "Please verify OTP number!", 5, 3);
                    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtadjustmentamt').focus();
                    return false;
                }
            }
        }
    }
    else
    { }

    var form_name = $('#ctl00_ContentPlaceHolder1_ReceiptControl2_hdnDocName').val();
    if (form_name == 'Refund') {
        Rest_Amt = $('#ctl00_ContentPlaceHolder1_BillsGrid_hdncashamt').val();
        pay_mode = $('#ctl00_ContentPlaceHolder1_ReceiptControl2_ddlPaymentType').val();
        var total_ref_amt = $('#ctl00_ContentPlaceHolder1_txtRefundableAmt').val();
        var total_refunded_amt = $('#ctl00_ContentPlaceHolder1_txtRefundAmt').val();
        if (total_ref_amt == '' || total_ref_amt == null || total_ref_amt == undefined)
        { total_ref_amt = 0; }
        if (total_refunded_amt == '' || total_refunded_amt == null || total_refunded_amt == undefined)
        { total_refunded_amt = 0; }


        if (pay_mode == '1' || pay_mode == '11' || pay_mode == '12' || pay_mode == '18') {
         //chk_amt = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtTenderedAmt').value;
        }
        else {
            var chk_amt = 0;
            if (pay_mode == '11' || pay_mode == '12') {
                chk_amt = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtTenderedAmt').value;
            }
            else {
                chk_amt = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtamt').value;
            }
            if (chk_amt == '' || chk_amt == null || chk_amt == undefined) {
                chk_amt = 0;
            }
            validate_amt = parseFloat(total_ref_amt) - parseFloat(Rest_Amt);

            if (parseFloat(chk_amt) > parseFloat(validate_amt) && parseFloat(validate_amt) >= 0) {
                $(".stoast").toastText("warning", "Invalid Payment Mode", 5, 3);
                return false;
            }
            else if (parseFloat(validate_amt) < 0) {
                $(".stoast").toastText("warning", "Invalid Payment Mode", 5, 3);
                return false;
            }
        }
    }
    var alerts;
    var selectedindex = document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlPaymentType').value;
    if (selectedindex == undefined || selectedindex == null || selectedindex == '') { selectedindex = 0; }
    var sel_text = $('#ctl00_ContentPlaceHolder1_ReceiptControl2_ddlPaymentType').find('option:selected').text();
    if (document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlPaymentType').value == 0) {
        $(".stoast").toastText("Info", "Please select payment type", 5, 3);
        return false;
    }
    if (groupid == 1) {
        if (document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlCurrency').value == 0) {
            $(".stoast").toastText("Info", "please select currency .", 5, 3);
            document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlCurrency').focus();
            return false;
        }
        if (document.getElementById('' + ctrlcom + '_ReceiptControl2_txtTenderedAmt').value == '' || document.getElementById('' + ctrlcom + '_ReceiptControl2_txtTenderedAmt').value == '0') {
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtTenderedAmt').focus();
            $(".stoast").toastText("Info", "please enter the tendered amount .", 5, 3);
            return false;
        }
    }
    else if (groupid == 5) {
        if (document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlCurrency').value == 0) {
            document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlCurrency').focus();
            return false;
        }
        if (document.getElementById('' + ctrlcom + '_ReceiptControl2_txtamt').value == '') {
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtamt').focus();
            return false;
        }
        if (document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlBankName').value == 0) {
            document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlBankName').focus();
            return false;
        }
        /* if (document.getElementById('' + ctrlcom + '_ReceiptControl2_txtExpDt').value == '') {
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtExpDt').focus();
        return false;
        }*/
        if (document.getElementById('' + ctrlcom + '_ReceiptControl2_txtCardNo').value == '' && document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnCardNoMand').value=='YES') {
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtCardNo').focus();
            return false;
        }
        if (document.getElementById('' + ctrlcom + '_ReceiptControl2_txtAuthCode').value == '' && document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnCardRefNoMand').value=='YES') {
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtAuthCode').focus();
            return false;
        }
        if (document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlPaymentType').value == 0) {
            document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlPaymentType').focus();
            return false;
        }
        if (document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlCardType').value == 0) {
            $(".stoast").toastText("Info", "please the Card type.", 5, 3);
            document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlCardType').focus();
            return false;
        }
    }
    else if (groupid == '12') {
        if (document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlCurrency').value == 0) {
            document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlCurrency').focus();
            return false;
        }
        if (document.getElementById('' + ctrlcom + '_ReceiptControl2_txtamt').value == '') {
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtamt').focus();
            return false;
        }
        if (document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlBankName').value == 0) {
            document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlBankName').focus();
            return false;
        }
        /*if (document.getElementById('' + ctrlcom + '_ReceiptControl2_txtExpDt').value == '') {
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtExpDt').focus();
        return false;
        }*/
        if (document.getElementById('' + ctrlcom + '_ReceiptControl2_txtCardNo').value == '' && document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnCardNoMand').value=='YES') {
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtCardNo').focus();
            return false;
        }
        if (document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlPaymentType').value == 0) {
            document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlPaymentType').focus();
            return false;
        }
    }
    else if (groupid == 6) {

        if (document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlCurrency').value == 0) {
            document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlCurrency').focus();
            return false;
        }

        if (document.getElementById('' + ctrlcom + '_ReceiptControl2_txtamt').value == '' || document.getElementById('' + ctrlcom + '_ReceiptControl2_txtamt').value == 0) {
            $(".stoast").toastText("Info", "please enter the amount.", 5, 3);
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtamt').focus();
            return false;
        }
        if (document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlBankName').value == 0) {
            document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlBankName').focus();
            return false;
        }
        if (document.getElementById('' + ctrlcom + '_ReceiptControl2_txtExpDt').value == '') {
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtExpDt').focus();
            return false;
        }
        if (document.getElementById('' + ctrlcom + '_ReceiptControl2_txtCardNo').value == '' && document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnCardNoMand').value=='YES') {
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtCardNo').focus();
            return false;
        }
        if (sel_text == 'Cheque') {
            var doc_namecheck = document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnDocName').value;
            if (doc_namecheck != "CorporateCheckEntry" && doc_namecheck != "CorporateCheck") {
                /*if (document.getElementById('' + ctrlcom + '_ReceiptControl2_UCchequeAuth_txtSearchControl').value == '' || document.getElementById('' + ctrlcom + '_ReceiptControl2_UCchequeAuth__hiddenID').value == '' || document.getElementById('' + ctrlcom + '_ReceiptControl2_UCchequeAuth__hiddenText').value == '') {
                $(".stoast").toastText("Info", "please select the autherization ", 5, 3);
                document.getElementById('' + ctrlcom + '_ReceiptControl2_UCchequeAuth_txtSearchControl').focus();
                return false;
                }*/
            }
        }
    }
    else if (sel_text == 'Funds') {
        if (document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlCurrency').value == 0) {
            document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlCurrency').focus();
            $(".stoast").toastText("Info", "please select currency .", 5, 3);
            return false;
        }
        if (document.getElementById('' + ctrlcom + '_ReceiptControl2_txtTenderedAmt').value == '' || document.getElementById('' + ctrlcom + '_ReceiptControl2_txtTenderedAmt').value == '0') {
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtTenderedAmt').focus();
            $(".stoast").toastText("Info", "please enter the tendered amount .", 5, 3);
            return false;
        }
    }
    else if (groupid == 8) {
        if (document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlCurrency').value == 0) {
            $(".stoast").toastText("Info", "please select the currecy type.", 5, 3);
            document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlCurrency').focus();
            return false;
        }
        if (document.getElementById('' + ctrlcom + '_ReceiptControl2_txtamt').value == '' || document.getElementById('' + ctrlcom + '_ReceiptControl2_txtamt').value == 0) {
            $(".stoast").toastText("Info", "please enter the amount.", 5, 3);
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtamt').focus();
            return false;
        }
        if (document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlBankName').value == 0) {
            $(".stoast").toastText("Info", "please select the bank name.", 5, 3);
            document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlBankName').focus();
            return false;
        }

        /*if (document.getElementById('' + ctrlcom + '_ReceiptControl2_txtCardNo').value == '') {
        $(".stoast").toastText("Info", "please enter the Refer no.", 5, 3);
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtCardNo').focus();
        return false;
        }*/
        if (document.getElementById('' + ctrlcom + '_ReceiptControl2_txtAuthCode').value == '' && document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnCardRefNoMand').value=='YES') {
            $(".stoast").toastText("Info", "please enter the Refer Trans#.", 5, 3);
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtAuthCode').focus();
            return false;
        }

        if (document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlPaymentType').value == 0) {
            $(".stoast").toastText("Info", "please the payment type.", 5, 3);
            document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlPaymentType').focus();
            return false;
        }

    }
    else { }
    if (form_name != 'IpAdvance' && (form_name != 'PREADVANCE' && ErAdvAllow == 'Y')) {
        if (document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnHospitalPayment').value == 'PAYMENT') {
            HospitalPaymentForms('Update');
            return false;
        }
    }

    if (form_name == 'OUTSTDNGDUE') {

      var AdvadjustAmt = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtadjustmentamt').value;
        var TenderedAmt = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtTenderedAmt').value;
        var dueamt  = document.getElementById('' + ctrlcom + '_txtDueAmount').value;
    
        
        if (AdvadjustAmt == "" || isNaN(AdvadjustAmt) || AdvadjustAmt == undefined) {
            AdvadjustAmt = 0;
        }
        if (dueamt == "" || isNaN(dueamt) || dueamt == undefined || dueamt == null) {
            dueamt = 0;
        }
        if (TenderedAmt == "" || isNaN(TenderedAmt) || TenderedAmt == undefined) {
            TenderedAmt = 0;
        }



            if (groupid == 11) {
        if (parseFloat(TenderedAmt) > parseFloat(AdvadjustAmt)) {
            $(".stoast").toastText("Info", "Tendered Amount Should Not Greater than Advance Adjustment Amt.", 5, 3);
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtTenderedAmt').value = '';
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtTenderedAmt').focus();
            return false;
        }
        }

        if (document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnHospitalPayment').value == 'PAYMENT') {
            HospitalPaymentForms('Update');
            return false;
        }
    }
    var netAmount = document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnNetAmt').value;
    var dueamt = document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnDueAmt').value;
    var tenderamount = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtTenderedAmt').value;
    var amount = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtamt').value;

    if (tenderamount == '' || tenderamount == undefined) {
        tenderamount = 0;
    }
    if (tenderamount == '' || tenderamount == undefined) {
        tenderamount = 0;
    }
    if (document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnDocName').value == 'CorporateCheckEntry') {
        amount = 50000000000;
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtreqamtkyd').value = 500000000000;
    }
    if (amount == '' || amount == undefined) {
        amount = 0;
    }
    /*dueamt = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtreqamtkyd').value;*/

    if (form_name != 'IpAdvance' && form_name != 'PREADVANCE' && form_name != 'IMRSRVENTRY') {
        if (parseFloat(dueamt) == 0 || parseFloat(amount) == 0) {
            $(".stoast").toastText("Info", "Receipt Amount Should Be Graeter Than Zero(0).", 5, 3);
            return false;
        }
        else if (parseFloat(amount) > parseFloat(dueamt)) {

            if (form_name != 'Refund' && sel_text != 'Cash' && sel_text != 'PAYMASTER' && sel_text != "NATIONAL COMMERCIAL BANK(NCB)" && sel_text != "SAGICOR BANK" && sel_text != "SCOTIA BANK" && sel_text != "JDF" && sel_text != "NHF") {
                $(".stoast").toastText("Info", "Receipt Amount Should Not Be More Than Payable Amount", 5, 3);
                document.getElementById('' + ctrlcom + '_ReceiptControl2_txtamt').focus();
                document.getElementById('' + ctrlcom + '_ReceiptControl2_txtamt').value = '0';
                document.getElementById('' + ctrlcom + '_ReceiptControl2_txtCurrAmt').value = 0;
                document.getElementById('' + ctrlcom + '_ReceiptControl2_txtTenderedAmt').value = 0;
                document.getElementById('' + ctrlcom + '_ReceiptControl2_txtChangeKyd').value = 0;
                return false;
            }
        }
    }
    /* added on 24.08.2016 */
    if (groupid == 11) {
        /* if (document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlPaymentType').style.display = 'block') {*/
        var AdvadjustAmt = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtadjustmentamt').value;
        var TenderedAmt = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtTenderedAmt').value;
        var dueamt = 0;
        if (document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnDocName').value == 'OUTSTDNGDUE') {
            dueamt = document.getElementById('' + ctrlcom + '_txtDueAmount').value;
        }
        else {
            dueamt = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatdue').value;
        }
        if (AdvadjustAmt == "" || isNaN(AdvadjustAmt) || AdvadjustAmt == undefined) {
            AdvadjustAmt = 0;
        }
        if (dueamt == "" || isNaN(dueamt) || dueamt == undefined || dueamt == null) {
            dueamt = 0;
        }
        if (TenderedAmt == "" || isNaN(TenderedAmt) || TenderedAmt == undefined) {
            TenderedAmt = 0;
        }



        if (document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnDocName').value == 'IpAdvance') {
            $('[id*=hdnAdvanceAdjst]').val(TenderedAmt);
        }

        if (parseFloat(TenderedAmt) > parseFloat(AdvadjustAmt)) {
            $(".stoast").toastText("Info", "Tendered Amount Should Not Greater than Advance Adjustment Amt.", 5, 3);
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtTenderedAmt').value = '';
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtTenderedAmt').focus();
            return false;
        }
        $('[id*=hdnAdjustableAdvAmt]').val(parseFloat($('[id*=hdnAdjustableAdvAmt]').val() - TenderedAmt))
        /* }*/
    }
    if (document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnDocName').value != "Refund") {
        if (groupid == "4") {
            var tendoramnt = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtTenderedAmt').value;
            var fundamnt = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtorganizationFund').value;
            var DueAmnt = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatdue').value;
            if (tendoramnt == '.' || tendoramnt == '' || tendoramnt == undefined || tendoramnt == null) { tendoramnt = 0; }
            if (fundamnt == '.' || fundamnt == '' || fundamnt == undefined || fundamnt == null) { fundamnt = 0; }
            if (DueAmnt == '.' || DueAmnt == '' || DueAmnt == undefined || DueAmnt == null) { DueAmnt = 0; }
            if (parseFloat(tendoramnt) > parseFloat(DueAmnt)) {
                $(".stoast").toastText("Info", "Paid Amount Can Not Accept More Then Due Amount", 5, 3);
                return false;
            }
            if (parseFloat(tendoramnt) > parseFloat(fundamnt)) {
                $(".stoast").toastText("Info", "Paid Amount Can Not Accept Greter Then Fund Amount", 5, 3);
                return false;
            }
        }
    }


    var cardno_count = 0;
    var selectedindex = document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlPaymentType').value;
    var bankselectedindex = document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlBankName').value;
    var cardselectedindex = document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlCardType').value;
    var sel_text = $('#ctl00_ContentPlaceHolder1_ReceiptControl2_ddlPaymentType').find('option:selected').text();
    var bank_name = $('#ctl00_ContentPlaceHolder1_ReceiptControl2_ddlBankName').find('option:selected').text();
    var card_type = $('#ctl00_ContentPlaceHolder1_ReceiptControl2_ddlCardType').find('option:selected').text();
    if (selectedindex == undefined || selectedindex == null || selectedindex == '' || selectedindex < 0)
    { selectedindex = 0; }
    if (bankselectedindex == undefined || bankselectedindex == null || bankselectedindex == '' || bankselectedindex < 0)
    { bankselectedindex = 0; }
    if (cardselectedindex == undefined || cardselectedindex == null || cardselectedindex == '' || cardselectedindex < 0)
    { cardselectedindex = 0; }


    var len = document.getElementById('' + ctrlcom + '_ReceiptControl2_gvReceiptDetails').rows.length;
    $("table[id*=gvReceiptDetails] tr:has(td)").each(function (e) {
        for (var i = 0; i < len; i++) {
            var row = document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnEditRowId').value;
            //row = row - 1;
            if (i != row) {
                var mode = $('[id$=gvReceiptDetails] tr').filter(':eq(' + i + ')').find('[id*=lblrecmode]').text(); // $(this).closest('tr').find('[id*=lblrecmode]').text();
                var bankname = $('[id$=gvReceiptDetails] tr').filter(':eq(' + i + ')').find('[id*=lblbankname]').text(); // $(this).closest('tr').find('[id*=lblbankname]').text();
                var cardNo = $('[id$=gvReceiptDetails] tr').filter(':eq(' + i + ')').find('[id*=lblcardno]').text(); //$(this).closest('tr').find('[id*=lblcardno]').text();
                var cardtype = $('[id$=gvReceiptDetails] tr').filter(':eq(' + i + ')').find('[id*=lblcardtype]').text(); //$(this).closest('tr').find('[id*=lblcardtype]').text();
                var hdnpaymentappgroupid = $('[id$=gvReceiptDetails] tr').filter(':eq(' + i + ')').find('[id*=hdnpaymentappgroupid]').val(); //$(this).closest('tr').find('[id*=lblcardtype]').text();

                var cardname = '';
                var txtmode = sel_text;

                if (hdnpaymentappgroupid == 5) {
                    cardname = sel_text;
                }
                var txtbankname = bank_name;
                var txtcardno = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtCardNo').value;
                var txtcardtype = card_type;
                if (mode != 'Cash') {
                    if (mode != 'Cheque' && mode != 'Demand Draft' && mode == txtmode && bankname == txtbankname && cardNo == txtcardno && cardtype == txtcardtype && cardNo != '' && txtcardno != '') {
                        cardno_count = 1;
                        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtCardNo').value = '';
                        $(".stoast").toastText("Info", "'" + cardname + "' Number Already Exists.", 5, 3);
                        return false;
                    }
                    else if (mode != 'Demand Draft' && mode == txtmode && bankname == txtbankname && cardNo == txtcardno && cardtype == txtcardtype && cardNo != '' && txtcardno != '') {
                        cardno_count = 1;
                        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtCardNo').value = '';
                        $(".stoast").toastText("Info", "'" + cardname + "' Number Already Exists.", 5, 3);
                        return false;
                    }
                }
            }
        }

    });

    if (cardno_count == 0) {
        var stop = '';

        var grid = document.getElementById('' + ctrlcom + '_ReceiptControl2_gvReceiptDetails');
        var Cardnumber = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtCardNo').value;
        var index = document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlPaymentType').value;
        if (index == undefined || index == null || index == '') { index = 0; }
        var paymode = sel_text;
        var ReceiptAmt = 0;
        var sno = 1;
        var rowColor = 0;
        var totamtforwords=0;
        var totchangeamtforwords=0;
        $("table[id$=gvReceiptDetails] tr:has(td)").each(function (e) {
            if (rowColor == 0) {
                document.getElementById('' + ctrlcom + '_ReceiptControl2_gvReceiptDetails').rows[this.rowIndex].style.ClassName = 'gridAlternaterow';
                rowColor++;
            }
            else {
                document.getElementById('' + ctrlcom + '_ReceiptControl2_gvReceiptDetails').rows[this.rowIndex].style.ClassName = 'gridrow';
                rowColor = 0;
            }
            document.getElementById('' + ctrlcom + '_ReceiptControl2_gvReceiptDetails').rows[this.rowIndex].style.backgroundColor = 'White';
            var paindex = document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlPaymentType').value;
            if (paindex == undefined || paindex == null || paindex == '') { paindex = 0; }
            var mode_id = paindex;
            var SNo = document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnRecSNo').value;
            var ddlPaymentType_update = document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlPaymentType').value;
            /*Newly Added For Updating The Service Chrg Amt	By Naresh Begin If any Error Coming Let Me know*/
            var _srvchargeamt = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtsrvcharges').value;
            if (parseFloat(_srvchargeamt) > 0) {
                $(this).closest('tr').find("input[type=hidden][id*=hdnsrvchargamt]").val(document.getElementById('' + ctrlcom + '_ReceiptControl2_txtamt').value);
                var receiptmodeid = $(this).closest('tr').find("[id*=hdnrecmodeId]").val();
                if (receiptmodeid != 1) {
                    var _srvchargeamt = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtsrvcharges').value;
                    var _amt = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtamt').value;
                    if (_srvchargeamt == '' || _srvchargeamt == null || _srvchargeamt == undefined || isNaN(_srvchargeamt)) { _srvchargeamt = "0"; }
                    if (_amt == '' || _amt == null || _amt == undefined || isNaN(_amt)) { _amt = "0"; }
                    var _deductionAmt = 0;

                    if (parseFloat(_srvchargeamt) > 0) {
                        _deductionAmt = parseFloat(_amt) * (parseFloat(_srvchargeamt) / 100);
                        if (_deductionAmt == '' || _deductionAmt == null || _deductionAmt == undefined || isNaN(_deductionAmt)) { _deductionAmt = "0"; }
                        var lblamount = setProperDecimalsCorpPer(parseFloat(_amt) - parseFloat(_deductionAmt));
                        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtamt').value = lblamount;
                    }
                }
            }
            /*Newly Added For Updating The Service Chrg Amt	By Naresh End If any Error Coming Let Me know*/
            var amt = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtamt').value;
            var tenderamt = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtTenderedAmt').value;

            amt = RoundFloorCeil('', amt, '');
            tenderamt = tenderamt; //RoundFloorCeil('', tenderamt, '');
            var hdnrecmodeId_update = $(this).closest('tr').find("input[type=hidden][id*=hdnrecmodeId]").val();
            var paymentgroupid = $(this).closest('tr').find("input[type=hidden][id*=hdnpaymentappgroupid]").val();

            if (SNo == $(this).closest('tr').find("input[type=hidden][id*=hdnSNo]").val() && ddlPaymentType_update == hdnrecmodeId_update) {
                var paindex = document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlPaymentType').value;
                if (paindex == '' || paindex == undefined || paindex == null) { paindex = 0; }
                var sel_text = $('#ctl00_ContentPlaceHolder1_ReceiptControl2_ddlPaymentType').find('option:selected').text();
                $(this).closest('tr').find("input[type=hidden][id*=hdnrecmodeId]").val(paindex);
                $(this).closest('tr').find("input[type=hidden][id*=hdnpaymentappgroupid]").val(paymentgroupid);
                $(this).closest('tr').find("[id*=lblrecmode]").text(sel_text);
                $(this).closest('tr').find("[id*=lblexchrate]").text(document.getElementById('' + ctrlcom + '_ReceiptControl2_txtExchangeRate').value);
                var exrate = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtExchangeRate').value;
                if (sel_text == 'Cash') {
                    var tendAmt = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtTenderedAmt').value;
                    if (tendAmt == '' || tendAmt == null || tendAmt == undefined || isNaN(tendAmt)) { tendAmt = "0"; }
                    $(this).closest('tr').find("[id*=lblAmount]").text(tendAmt);
                    $(this).closest('tr').find("[id*=lbltendcash]").text(tendAmt);
                    var convertamt = parseFloat(tendAmt) * parseFloat(exrate);
                    if (convertamt == '' || convertamt == null || convertamt == undefined) { convertamt = 0; }
                    convertamt = RoundFloorCeil('', convertamt, '');
                    $(this).closest('tr').find("[id*=lblconvertedamt]").text(convertamt);

                    /*Amount=ConvertedAmt-ChangeIn [Different Currency]  @Start@ */
                    var _changeIn = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtChangeKyd').value;
                    if (_changeIn == '' || _changeIn == undefined || _changeIn == null) { _changeIn = 0; }
                    $(this).closest('tr').find("[id*=lblchange]").text(_changeIn);

                    var ErAdvAllow = 'N';
                    var WebCfngAllowCash = $('[id*=hdnWebCfngAllowCash]').val();
                    if (WebCfngAllowCash == null || WebCfngAllowCash == undefined || WebCfngAllowCash == '' || WebCfngAllowCash == 'undefined') WebCfngAllowCash = 'N';
                    if (WebCfngAllowCash == 'Y' || WebCfngAllowCash == 'y') {
                        ErAdvAllow = $('[id*=hdnAllowCashTrnd]').val();
                        if (ErAdvAllow == null || ErAdvAllow == undefined || ErAdvAllow == '' || ErAdvAllow == 'undefined') ErAdvAllow = 'N';
                    }
                    if (ErAdvAllow == 'Y') {
                        var _convertamt = parseFloat(tendAmt) * parseFloat(exrate);
                        var _lblAmt = parseFloat(_convertamt) - parseFloat(_changeIn);
                        $(this).closest('tr').find("[id*=lblAmount]").text(setProperDecimals(_lblAmt));
                    }
                    else {
                        $(this).closest('tr').find("[id*=lblAmount]").text(setProperDecimals(parseFloat(convertamt) - parseFloat(_changeIn)));
                    }
                    /* @End@ */
                }
                else {
                    $(this).closest('tr').find("[id*=lblAmount]").text(document.getElementById('' + ctrlcom + '_ReceiptControl2_txtamt').value);
                    /** added on 05.08.2016 ****/
                    $(this).closest('tr').find("input[type=hidden][id*=hdnsrvchargamt]").val(document.getElementById('' + ctrlcom + '_ReceiptControl2_txtamt').value);
                    var amt = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtamt').value;
                    if (amt == undefined || amt == '' || amt == null) { amt = '0'; }
                    $(this).closest('tr').find("[id*=lblAmount]").text(amt);
                    $(this).closest('tr').find("[id*=lbltendcash]").text('0');
                    var convertamt = 0;
                    if (parseFloat(amt) > 0) {
                        convertamt = parseFloat(amt) * parseFloat(exrate);
                    }
                    convertamt = RoundFloorCeil('', convertamt, '');
                    $(this).closest('tr').find("[id*=lblconvertedamt]").text(convertamt);

                    /*Amount=ConvertedAmt-ChangeIn [Different Currency]  @Start@ */
                    var _changeIn = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtChangeKyd').value;
                    if (_changeIn == '' || _changeIn == undefined || _changeIn == null) { _changeIn = 0; }
                    $(this).closest('tr').find("[id*=lblchange]").text(_changeIn);

                    $(this).closest('tr').find("[id*=lblAmount]").text(parseFloat(convertamt) - parseFloat(_changeIn));
                    /* @End@ */
                }
                var currindex = document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlCurrency').value;
                if (currindex == undefined || currindex == null || currindex == '') { currindex = 0; }
                var curr_name = $('#ctl00_ContentPlaceHolder1_ReceiptControl2_ddlCurrency').find('option:selected').text();
                if (currindex == 0) {
                    $(this).closest('tr').find("[id*=lblcurrname]").text('');
                }
                else {
                    $(this).closest('tr').find("[id*=lblcurrname]").text(curr_name);
                    $(this).closest('tr').find("input[type=hidden][id*=hdncurrId]").val(currindex);
                }
                var bankindex = document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlBankName').value;
                if (bankindex == undefined || bankindex == null || bankindex == '') { bankindex = 0; }
                var bank_name = $('#ctl00_ContentPlaceHolder1_ReceiptControl2_ddlBankName').find('option:selected').text();
                if (bankindex <= 0) {
                    $(this).closest('tr').find("[id*=lblbankname]").text('');
                }
                else {
                    $(this).closest('tr').find("[id*=lblbankname]").text(bank_name);
                    $(this).closest('tr').find("input[type=hidden][id*=hdnbankid]").val(bankindex);
                }
                $(this).closest('tr').find("[id*=lblcardno]").text(document.getElementById('' + ctrlcom + '_ReceiptControl2_txtCardNo').value);
                /*$(this).closest('tr').find("[id*=lblauthcode]").text(document.getElementById('' + ctrlcom + '_ReceiptControl2_txtAuthCode').value);*/
                /* added */
                if (sel_text == 'Cheque') {
                    $(this).closest('tr').find("[id*=hdncheck_AuthID]").val(document.getElementById('' + ctrlcom + '_ReceiptControl2_UCchequeAuth__hiddenID').value);
                    $(this).closest('tr').find("[id*=lblauthcode]").text(document.getElementById('' + ctrlcom + '_ReceiptControl2_UCchequeAuth_txtSearchControl').value);
                    $(this).closest('tr').find("[id*=lblchequedt]").text(document.getElementById('' + ctrlcom + '_ReceiptControl2_txtchequedt').value);
                    $(this).closest('tr').find("[id*=lblcqreldt]").text(document.getElementById('' + ctrlcom + '_ReceiptControl2_txtchequerealizedt').value);
                    $(this).closest('tr').find("[id*=lblcqissuername]").text(document.getElementById('' + ctrlcom + '_ReceiptControl2_txtcqissuername').value);
                    trchequedt.style.display = 'none';
                }
                else {
                    $(this).closest('tr').find("[id*=lblauthcode]").text(document.getElementById('' + ctrlcom + '_ReceiptControl2_txtAuthCode').value);
                    $(this).closest('tr').find("[id*=lblcqissuername]").text(document.getElementById('' + ctrlcom + '_ReceiptControl2_txtAdvCardHldrName').value);
                }
                /* up to here */
                $(this).closest('tr').find("[id*=lblcardexpdt]").text(document.getElementById('' + ctrlcom + '_ReceiptControl2_txtExpDt').value);
                /*Added By Shiva--Start*/
                if (sel_text == 'Cash' || sel_text == 'Advance Adjustment' || sel_text == 'Funds' || sel_text == 'EXCESS TO ADVANCE' || sel_text.trim().toLowerCase() == 'online') {
                    $(this).closest('tr').find("[id*=lbltendcash]").text(document.getElementById('' + ctrlcom + '_ReceiptControl2_txtTenderedAmt').value);
                }
                else { $(this).closest('tr').find("[id*=lbltendcash]").text(document.getElementById('' + ctrlcom + '_ReceiptControl2_txtamt').value); }
                /*Added By Shiva--End*/

                $(this).closest('tr').find("[id*=lblchange]").text(document.getElementById('' + ctrlcom + '_ReceiptControl2_txtChangeKyd').value);
                var typeindex = document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlCardType').value;
                if (typeindex == undefined || typeindex == null || typeindex == '') { typeindex = 0; }
                var card_type = $('#ctl00_ContentPlaceHolder1_ReceiptControl2_ddlCardType').find('option:selected').text();
                if (typeindex <= 0) {
                    $(this).closest('tr').find("[id*=lblcardtype]").text('');
                }
                else {
                    $(this).closest('tr').find("[id*=lblcardtype]").text(card_type);
                    $(this).closest('tr').find("input[type=hidden][id*=hdncardtypeId]").val(typeindex);
                }
            }
            var receipt = $(this).closest('tr').find("[id*=lblconvertedamt]").text();
            if (receipt == '' || receipt == undefined) {
                receipt = 0;
            }
            var chngcashAmt = $(this).closest('tr').find("[id*=lblchange]").text();
            if (chngcashAmt == '') chngcashAmt = 0;
            ReceiptAmt = ((((parseFloat(ReceiptAmt) + parseFloat(receipt)) * Math.pow(10, 6)) / Math.pow(10, 6)) - parseFloat(chngcashAmt));
            sno++;

 $(this).closest('tr').find("[id*=lblAmtinwords]").text(  convertNumberToWords(parseFloat( $(this).closest('tr').find("[id*=lblAmount]").text())).toLowerCase().replace(/(^.|\s+.)/g, m=>m.toUpperCase())) ;     
        
          if( $(this).closest('tr').find("[id*=lblAmount]").text() !=''|| $(this).closest('tr').find("[id*=lblAmount]").text()!='undefined'|| $(this).closest('tr').find("[id*=lblAmount]").text()!=undefined||$(this).closest('tr').find("[id*=lblAmount]").text()!=null){
        totamtforwords=parseFloat(totamtforwords)+parseFloat($(this).closest('tr').find("[id*=lblAmount]").text());
        
       var chaamtforwors= $(this).closest('tr').find("[id*=lblchange]").text();
         if (chaamtforwors == '' || chaamtforwors == undefined|| chaamtforwors == 'undefined' || chaamtforwors == null || isNaN(chaamtforwors)) { chaamtforwors = "0"; }
        totchangeamtforwords=parseFloat(totchangeamtforwords)+parseFloat(chaamtforwors);
        }

        if($("table[id$=gvReceiptDetails] tr:has(td)").length==parseFloat(e)+1){
      
       document.getElementById('' + ctrlcom + '_ReceiptControl2_txttotamtinwordsadd').innerHTML =   convertNumberToWords(parseFloat(totamtforwords)).toLowerCase().replace(/(^.|\s+.)/g, m=>m.toUpperCase()) ; 
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtchangeamtinwordsadd').innerHTML =  convertNumberToWords(parseFloat(totchangeamtforwords)).toLowerCase().replace(/(^.|\s+.)/g, m=>m.toUpperCase()) ;    
      
        
        }
        
        });
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtAdvCardHldrName').value = '';
        document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnHTMLString1').value = grid.innerHTML;
        var dueamt = 0;
        if (document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnDocName').value == 'IPFINAL') {
            var advance = document.getElementById('' + ctrlcom + '_txtAdvance').value;
            dueamt = document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnDueAmt').value = setProperDecimalsVal(parseFloat(netAmount) - parseFloat(advance) - parseFloat(ReceiptAmt));
        }
        else {
            document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnDueAmt').value = parseFloat(netAmount) - parseFloat(ReceiptAmt);
            if (netAmount > ReceiptAmt) { dueamt = ((parseFloat(netAmount) - parseFloat(ReceiptAmt)) * Math.pow(10, 2)) / Math.pow(10, 2); }
            if (netAmount < ReceiptAmt) { dueamt = ((parseFloat(ReceiptAmt) - parseFloat(netAmount)) * Math.pow(10, 2)) / Math.pow(10, 2); }
            if (dueamt == null || dueamt == "" || dueamt == undefined || dueamt == "NaN" || isNaN(dueamt)) { dueamt = "0"; }
        }

        var roundtype = document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnroundtype').value;
        var rounddec = document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnroundoffval').value;
        ReceiptAmt = RoundFloorCeil('', ReceiptAmt, '');
        dueamt = RoundFloorCeil('', dueamt, '');
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtreceiptAmount').value = ReceiptAmt;
        var txtrefundamt = document.getElementById('' + ctrlcom + '_txtRefundAmt');
        if (txtrefundamt != null) {
            document.getElementById('' + ctrlcom + '_txtRefundAmt').value = ReceiptAmt;
        }

        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatientReceiptAmt').value = ReceiptAmt;
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtTotalReciptAmt').value = ReceiptAmt;
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatdue').value = dueamt;
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtTotalDue').value = parseFloat(dueamt) + parseFloat(document.getElementById('' + ctrlcom + '_ReceiptControl2_txtcmpDue').value);
        if (dueamt == 0 || dueamt == '') {
            document.getElementById('' + ctrlcom + '_ReceiptControl2_Search3_txtSearchControl').value = '';
            document.getElementById('' + ctrlcom + '_ReceiptControl2_Search3__hiddenID').value = 0;
            document.getElementById('' + ctrlcom + '_ReceiptControl2_Search3__hiddenText').value = '';
            document.getElementById('' + ctrlcom + '_ReceiptControl2_Search3_txtSearchControl').disabled = true;
            document.getElementById('lk_btn_ctl00_ContentPlaceHolder1_ReceiptControl2_Search3').disabled = true;
            document.getElementById('' + ctrlcom + '_ReceiptControl2_Search3_txtSearchControl').className = 'grey';
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtRemarks').className = 'grey';
        }
        else {
            document.getElementById('' + ctrlcom + '_ReceiptControl2_Search3_txtSearchControl').disabled = false;
            document.getElementById('lk_btn_ctl00_ContentPlaceHolder1_ReceiptControl2_Search3').disabled = false;
            document.getElementById('' + ctrlcom + '_ReceiptControl2_Search3_txtSearchControl').className = 'red';
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtRemarks').className = 'red';
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtRemarks').disabled = false;
        }
        document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlPaymentType').disabled = false;
        if (document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnDocName').value != 'CorporateCheck') {
            ClearTranctionadd();
        }
        DisableControl();
        colorCodeChanges();
        document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlPaymentType').selectedIndex = 0;
        document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnHTMLString1').value = grid.innerHTML;
        if (document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnDocName').value != 'CorporateCheck') {
            document.getElementById('' + ctrlcom + '_ReceiptControl2_imgbtnadd').style.display = 'block';
        }
        document.getElementById('' + ctrlcom + '_ReceiptControl2_imgbtnupdate').style.display = "none";
        document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlPaymentType').focus();
        document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnupdatestatus').value == 'N';
        BindAdjestumentdata1();
        if (document.getElementById('' + ctrlcom + '_ReceiptControl2_Search3_txtSearchControl').value != '' && document.getElementById('' + ctrlcom + '_ReceiptControl2_Search3__hiddenText').value != '' && document.getElementById('' + ctrlcom + '_ReceiptControl2_Search3__hiddenID').value != '')
        { document.getElementById('' + ctrlcom + '_ReceiptControl2_Search3_txtSearchControl').value = ''; document.getElementById('' + ctrlcom + '_ReceiptControl2_Search3__hiddenText').value = ''; document.getElementById('' + ctrlcom + '_ReceiptControl2_Search3__hiddenID').value = ''; }

        if (localStorage.getItem("ED") != null && localStorage.getItem("ED") != undefined && localStorage.getItem("ED") != '') {
            OnExtendAmounts();
        } 

        
            DisableControl();
            TenderedColorCode();
            nonmandatorys();
            if (sel_text == 'Cash') {
                var ErAdvAllow = 'N';
                var WebCfngAllowCash = $('[id*=hdnWebCfngAllowCash]').val();
                if (WebCfngAllowCash == null || WebCfngAllowCash == undefined || WebCfngAllowCash == '' || WebCfngAllowCash == 'undefined') WebCfngAllowCash = 'N';
                if (WebCfngAllowCash == 'Y' || WebCfngAllowCash == 'y') {
                    ErAdvAllow = $('[id*=hdnAllowCashTrnd]').val();
                    if (ErAdvAllow == null || ErAdvAllow == undefined || ErAdvAllow == '' || ErAdvAllow == 'undefined') ErAdvAllow = 'N';
                }
                if (ErAdvAllow == 'Y') {
                    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtamt').disabled = false;
                }
                else {
                    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtamt').disabled = true;
                }
            }
            else {
                document.getElementById('' + ctrlcom + '_ReceiptControl2_txtamt').disabled = true;
            }
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtamt').value = 0;
            if(getParameterByName("MODE")=='VIEW_OP' || getParameterByName("MODE")=='VIEW' ){
              document.getElementById('' + ctrlcom + '_ReceiptControl2_txtTenderedAmt').disabled = true;
            }else{
              document.getElementById('' + ctrlcom + '_ReceiptControl2_txtTenderedAmt').disabled = false;
              document.getElementById('' + ctrlcom + '_ReceiptControl2_txtTenderedAmt').className = 'red';
            }

        

        return false;
    }
    else

    { return false; }
}

function colorCodeChanges() {
    $('#ctl00_ContentPlaceHolder1_ReceiptControl2_txtExpDt').addClass('grey');
    $('#ctl00_ContentPlaceHolder1_ReceiptControl2_txtExpDt').removeClass('red');
    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtCardNo').className = 'grey';
    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtamt').className = 'grey';
}

/*View Mode starts*/
var recindex = 0;
var rowColor = 0;
function fn_AddFilterRow_getdata(PAYMENT_MODE_ID, PAYMENT_MODE, ENTERED_AMOUNT, RATE, BANKNAME, AMOUNT, DISCNT_AMT, currname, CC_CARD_NO, EXPRY_DT, card, tenderedCash, changeinAmt, MODE, auth_code, cardexpiry, CQ_ISSUER_NAME, cq_date, cq_rel_date, groupid) {
    if (getParameterByName("MODE") == "VIEW" || MODE == "VIEW") {
        $('.gManage').hide();
    }
    var gvnewvisit = document.getElementById('' + ctrlcom + '_ReceiptControl2_gvReceiptDetails');
    var RowIndex = gvnewvisit.rows.length;
    var rowIndex = RowIndex - 1;
    var newRow = gvnewvisit.insertRow(RowIndex);
    if (rowColor == 0) {
        newRow.className = 'gridAlternaterow'
        rowColor++;
    }
    else {
        newRow.className = 'gridrow'
        rowColor = 0;
    }

    var newCell = newRow.insertCell(0);
    var DivButton = document.createElement('div');
    var BtnDeleteSpan = document.createElement('span');
    var imgBtnDelete = document.createElement('IMG');
    imgBtnDelete.id = 'imgBtnDelete' + recindex;
    imgBtnDelete.style.cursor = 'pointer';
    imgBtnDelete.title = 'Remove?';
    imgBtnDelete.onclick = function () { return RemoveService(this); };
    imgBtnDelete.src = _iniUrl + 'Assets/Grid_Icons/delete.png';
    BtnDeleteSpan.appendChild(imgBtnDelete);
    DivButton.appendChild(BtnDeleteSpan);
    newCell.appendChild(DivButton);

    var BtnEditSpan = document.createElement('span');
    var imgBtnEdit = document.createElement('IMG');
    imgBtnEdit.id = 'imgBtnEdit' + recindex;
    imgBtnEdit.style.cursor = 'pointer';
    imgBtnEdit.title = 'Edit';
    imgBtnEdit.onclick = function () { return AssignRowValues1(rowIndex, 'Edit'); return false; };
    imgBtnEdit.src = _iniUrl + 'Assets/Grid_Icons/edit_icon.gif';
    BtnEditSpan.appendChild(imgBtnEdit);
    DivButton.appendChild(BtnEditSpan);
    if (getParameterByName("MODE") == "VIEW" || MODE == "VIEW") {
        newCell.style.display = 'none';
    }
    else {
        newCell.style.display = 'table-cell';
    }
    newCell.appendChild(DivButton);

    var newCell = newRow.insertCell(1);
    var hdnrecmodeId = document.createElement('input'); hdnrecmodeId.type = 'hidden'; hdnrecmodeId.id = 'hdnrecmodeId' + recindex; hdnrecmodeId.value = PAYMENT_MODE_ID; newCell.appendChild(hdnrecmodeId);
    var hdnpaymentappgroupid = document.createElement('input'); hdnpaymentappgroupid.type = 'hidden'; hdnpaymentappgroupid.id = 'hdnpaymentappgroupid' + recindex; hdnpaymentappgroupid.value = groupid; newCell.appendChild(hdnpaymentappgroupid);
    var __RECEIPT_MODE_ID = document.createElement('input'); __RECEIPT_MODE_ID.type = 'hidden'; __RECEIPT_MODE_ID.id = '__RECEIPT_MODE_ID'; __RECEIPT_MODE_ID.value = PAYMENT_MODE_ID; newCell.appendChild(__RECEIPT_MODE_ID);
    var hdnbankid = document.createElement('input'); hdnbankid.type = 'hidden'; hdnbankid.id = 'hdnbankid' + recindex; newCell.appendChild(hdnbankid);
    var hdnbankid1 = document.createElement('input'); hdnbankid1.type = 'hidden'; hdnbankid1.id = '__BANK_ID'; newCell.appendChild(hdnbankid1);
    var hdncardtypeId = document.createElement('input'); hdncardtypeId.type = 'hidden'; hdncardtypeId.id = 'hdncardtypeId' + recindex;
    hdncardtypeId.value = card; newCell.appendChild(hdncardtypeId);
    var hdncardtypeId1 = document.createElement('input'); hdncardtypeId1.type = 'hidden'; hdncardtypeId1.id = '__CARD_TYPE_ID'; hdncardtypeId1.value = card; newCell.appendChild(hdncardtypeId1);
    var hdncurrId = document.createElement('input'); hdncurrId.type = 'hidden'; hdncurrId.id = 'hdncurrId' + recindex; newCell.appendChild(hdncurrId);

    var lblrecmode = document.createElement('label'); lblrecmode.id = 'lblrecmode' + recindex;
    lblrecmode.innerHTML = PAYMENT_MODE; newCell.align = "left"; newCell.appendChild(lblrecmode);

    var newCell = newRow.insertCell(2);
    var lblAmount = document.createElement('label');
    lblAmount.id = 'lblAmount' + recindex;
    lblAmount.title = 'AMOUNT';
    newCell.align = "right";
    lblAmount.innerHTML = ENTERED_AMOUNT;
    newCell.appendChild(lblAmount);
    newCell.className = "Amount Aright";

    //--
       var newCell = newRow.insertCell(3);
    var lblAmtinwords = document.createElement('label');
    lblAmtinwords.id = 'lblAmtinwords' + recindex;
    lblAmtinwords.title = 'AMOUNT';
    newCell.align = "right";
    lblAmtinwords.innerHTML =    convertNumberToWords(parseFloat(ENTERED_AMOUNT)).toLowerCase().replace(/(^.|\s+.)/g, m=>m.toUpperCase()) ; 
    newCell.appendChild(lblAmtinwords);
    newCell.className = "Amount Aright";


    //

    newCell = newRow.insertCell(4);
    var lbltendcash = document.createElement('label');
    lbltendcash.id = 'lbltendcash' + recindex;
    newCell.align = "right";
    lbltendcash.innerHTML = tenderedCash;
    newCell.appendChild(lbltendcash);
    newCell.className = "TenderedCash Aright";

    newCell = newRow.insertCell(5);
    var lblchange = document.createElement('label');
    lblchange.id = 'lblchange' + recindex;
    newCell.align = "right";
    lblchange.innerHTML = changeinAmt;
    newCell.appendChild(lblchange);
    newCell.className = "Change Aright";

    newCell = newRow.insertCell(6);
    var lblcurrname = document.createElement('label');
    lblcurrname.id = 'lblcurrname' + recindex;
    newCell.align = "left";
    lblcurrname.innerHTML = currname;
    newCell.appendChild(lblcurrname);
    newCell.className = "CurrencyName";

    newCell = newRow.insertCell(7);
    var lblexchrate = document.createElement('label');
    lblexchrate.id = 'lblexchrate' + recindex;
    newCell.align = "right";
    lblexchrate.innerHTML = RATE;
    newCell.appendChild(lblexchrate);
    newCell.className = "ExchangeRate Aright";

    newCell = newRow.insertCell(8);
    var lblconvertedamt = document.createElement('label');
    lblconvertedamt.id = 'lblconvertedamt' + recindex;
    newCell.align = "right";
    lblconvertedamt.innerHTML = AMOUNT;
    newCell.appendChild(lblconvertedamt);
    newCell.className = "ConvertedAmount Aright";

    newCell = newRow.insertCell(9);
    var lblbankname = document.createElement('label');
    lblbankname.id = 'lblbankname' + recindex;
    lblbankname.title = 'BANK_NAME';
    newCell.align = "left";
    lblbankname.innerHTML = BANKNAME;
    newCell.appendChild(lblbankname);
    newCell.className = "Cheque-Card-DD";

    newCell = newRow.insertCell(10);
    var lblcardno = document.createElement('label');
    lblcardno.id = 'lblcardno' + recindex;
    newCell.align = "left";
    lblcardno.innerHTML = CC_CARD_NO;
    newCell.appendChild(lblcardno);
    newCell.className = "Cheque-Card-DD-no";

    newCell = newRow.insertCell(11);
    var lblauthcode = document.createElement('label');
    lblauthcode.id = 'lblauthcode' + recindex;
    newCell.align = "left";
    lblauthcode.innerHTML = auth_code;
    newCell.appendChild(lblauthcode);
    newCell.className = "AuthorizationName";

    newCell = newRow.insertCell(12);
    var lblcardexpdt = document.createElement('label');
    lblcardexpdt.id = 'lblcardexpdt' + recindex;
    lblcardexpdt.title = 'EXPIRY_DT';
    newCell.align = "left";
    newCell.style.width = "150px";
    lblcardexpdt.innerHTML = cardexpiry;
    newCell.appendChild(lblcardexpdt);
    newCell.className = "CardExpiryDate";

    newCell = newRow.insertCell(13);
    var lblcardtype = document.createElement('label');
    lblcardtype.id = 'lblcardtype' + recindex;
    var cardname = '';
    if (card == 1) { cardname = 'visa'; } else if (card == 2) { cardname = 'Master'; } else { cardname = card; }
    lblcardtype.innerHTML = cardname;
    newCell.appendChild(lblcardtype);
    newCell.className = "CardType";

    newCell = newRow.insertCell(14);
    var lblsrvchrgpcnt = document.createElement('label');
    lblsrvchrgpcnt.id = 'lblsrvchrgpcnt' + recindex;
    newCell.align = "right";
    lblsrvchrgpcnt.innerHTML = '0';
    newCell.appendChild(lblsrvchrgpcnt);
    newCell.className = "srvchrgpcnt Aright";

    newCell = newRow.insertCell(15);
    var lblsrvchrgamt = document.createElement('label');
    lblsrvchrgamt.id = 'lblsrvchrgamt' + recindex;
    newCell.align = "right";
    lblsrvchrgamt.innerHTML = '0';
    newCell.appendChild(lblsrvchrgamt);
    newCell.className = "srvchrgamt Aright";

    var hdnSNo = document.createElement('input');
    hdnSNo.type = 'hidden';
    hdnSNo.id = 'hdnSNo' + recindex;
    hdnSNo.value = RowIndex;
    newCell.align = "right";
    newCell.appendChild(hdnSNo);

    newCell = newRow.insertCell(16);
    var lblchequedt = document.createElement('label');
    lblchequedt.id = 'lblchequedt' + recindex;
    newCell.align = "left";
    if (cq_date == undefined) { cq_date = ''; }
    lblchequedt.innerHTML = cq_date;
    newCell.appendChild(lblchequedt);
    newCell.className = "chequedt";

    newCell = newRow.insertCell(17);
    var lblcqreldt = document.createElement('label');
    lblcqreldt.id = 'lblcqreldt' + recindex;
    newCell.align = "left";
    if (cq_rel_date == undefined) { cq_rel_date = ''; }
    lblcqreldt.innerHTML = cq_rel_date;
    newCell.appendChild(lblcqreldt);
    newCell.className = "cqreldt";

    newCell = newRow.insertCell(18);
    var lblcqissuername = document.createElement('label');
    lblcqissuername.id = 'lblcqissuername' + recindex;
    newCell.align = "left";
    if (CQ_ISSUER_NAME == undefined) { CQ_ISSUER_NAME = ''; }
    lblcqissuername.innerHTML = CQ_ISSUER_NAME;
    newCell.appendChild(lblcqissuername);
    newCell.className = "cqissuername";

    recindex++;
    document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnupdatestatus').value == 'N';
}
/* View Mode Ends */

function AssesmentOutStandingdueCalculations() {
    var assesmentamount = 0;
    $("table[id$=tbl_Prevoius_Settled_Bills_sch] tr [type=checkbox]:checked").each(function (e) {
        var inneramount = $(this).closest('tr').find("[id*=lbl3]").text();
        if (inneramount == undefined || inneramount == "") {
            inneramount = 0;
        }
        assesmentamount += parseFloat(inneramount);
    });
    if (duamt == '' || duamt == undefined || duamt == null || isNaN(duamt)) { duamt == "0"; }
    var Due_Amt = assesmentamount;
    var amnt = 0;
    var recmode = '';
    var exchange = 0;
    var cnvrtamnt = 0;
    var grid = document.getElementById('' + ctrlcom + '_ReceiptControl2_gvReceiptDetails');
    $("table[id*=gvReceiptDetails] tr:has(td)").each(function (e) {
        for (var i = 0; i < grid.rows.length - 1; i++) {
            recmode = $(this).filter(':eq(' + i + ')').find("[id*=lblrecmode]").text();
            exchange = $(this).filter(':eq(' + i + ')').find("[id*=lblexchrate]").text();
            cnvrtamnt = $(this).filter(':eq(' + i + ')').find("[id*=lblconvertedamt]").text();
            if (cnvrtamnt == '') { cnvrtamnt = 0; }
            if (amnt == '') { amnt = 0; }
            amnt = parseFloat(amnt) + parseFloat(cnvrtamnt);
        }
    });
    if (parseInt(Due_Amt) > 0)
    { }
    else
    { Due_Amt = '0'; }
    if (parseInt(amnt) > 0)
    { }
    else
    { amnt = '0'; }

    var Rec_Amt = (parseFloat(amnt));
    var Count = '0';
    if (parseFloat(Due_Amt) < parseFloat(Rec_Amt) && recmode != 'Cash' && mode != 'A') {
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtcashAmt').value = '0';
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtCardAmt').value = '0';
        $(".stoast").toastText("warning", "Due Payment Amount Cannot Be Greater Than Receipt Amount", 5, 3);
        Count = '149';
    }
    var balanceamt = assesmentamount;
    var dueamtbalance = parseFloat(balanceamt) - parseFloat(amnt);

    if (dueamtbalance == '' || dueamtbalance == undefined || dueamtbalance == null || isNaN(dueamtbalance)) { dueamtbalance == "0"; }
    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtreqamtkyd').value = dueamtbalance;
   //  document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatdue').value = dueamtbalance;
    return Count;
}

/* Out Standing Due Form related code*/
function OutStandingdueCalculations() {
    var Due_Amt = document.getElementById('' + ctrlcom + '_txtDueAmount').value;
    /*    var cash_amt = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtcashAmt').value;
    var Card_Amt = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtCardAmt').value;*/
    var amnt = 0;
    var recmode = '';
    var exchange = 0;
    var cnvrtamnt = 0;
    var grid = document.getElementById('' + ctrlcom + '_ReceiptControl2_gvReceiptDetails');

    $("table[id*=gvReceiptDetails] tr:has(td)").each(function (e) {
        for (var i = 0; i < grid.rows.length - 1; i++) {
            recmode = $(this).filter(':eq(' + i + ')').find("[id*=lblrecmode]").text();
            exchange = $(this).filter(':eq(' + i + ')').find("[id*=lblexchrate]").text();
            cnvrtamnt = $(this).filter(':eq(' + i + ')').find("[id*=lblconvertedamt]").text();
            if (cnvrtamnt == '') { cnvrtamnt = 0; }
            if (amnt == '') { amnt = 0; }
            amnt = parseFloat(amnt) + parseFloat(cnvrtamnt);
        }
    });

    if (parseFloat(Due_Amt) > 0)
    { }
    else
    { Due_Amt = '0'; }
    if (parseFloat(amnt) > 0)
    { }
    else
    { amnt = '0'; }

    var Rec_Amt = (parseFloat(amnt));
    var Count = '0';
    if (parseFloat(Due_Amt) < parseFloat(Rec_Amt) && recmode != 'Cash' && mode != 'A') {
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtcashAmt').value = '0';
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtCardAmt').value = '0';
        $(".stoast").toastText("warning", "Due Payment Amount Cannot Be Greater Than Receipt Amount", 5, 3);
        Count = '149';
    }

    var GvRowscount = 0;
    var _index = 0;
    var _index = $('#tbl_tbl_OpBillDetails tbody tr').length;
    var bill_count = 0;
    GvRowscount = 0;
    $("table[id$=tbl_tbl_OpBillDetails] tr:has(td)").each(function (e) {
        for (GvRowscount; GvRowscount <= _index - 1; GvRowscount++) {
            var row = $('#tbl_tbl_OpBillDetails tbody').find('tr:eq(' + GvRowscount + ')').find('td:eq(' + 0 + ')').find('input');
            if (row.is(':checked')) {
                var P_Due_Amt = $('#tbl_tbl_OpBillDetails tbody').find('tr:eq(' + GvRowscount + ')').find('td:eq(' + 14 + ')').text();
                var Out_Due_Amt = $('#tbl_tbl_OpBillDetails tbody').find('tr:eq(' + GvRowscount + ')').find('td:eq(' + 11 + ')').text();
                if (parseFloat(P_Due_Amt) > 0) { } else { P_Due_Amt = 0; }
                if (parseFloat(Out_Due_Amt) > 0) { } else { Out_Due_Amt = 0; }
                if (Count == '149') {
                    $('#tbl_tbl_OpBillDetails tbody').find('tr:eq(' + GvRowscount + ')').find('td:eq(' + 14 + ')').text('0');
                }
                else if (parseFloat(Out_Due_Amt) < parseFloat(Rec_Amt)) {
                    $('#tbl_tbl_OpBillDetails tbody').find('tr:eq(' + GvRowscount + ')').find('td:eq(' + 14 + ')').text(Out_Due_Amt);
                    Rec_Amt = parseFloat(Rec_Amt) - parseFloat(Out_Due_Amt);
                }
                else if (parseFloat(Out_Due_Amt) > parseFloat(Rec_Amt)) {
                    $('#tbl_tbl_OpBillDetails tbody').find('tr:eq(' + GvRowscount + ')').find('td:eq(' + 14 + ')').text(Rec_Amt);
                    Rec_Amt = '0';
                }
                else if (parseFloat(Out_Due_Amt) == parseFloat(Rec_Amt)) {
                    $('#tbl_tbl_OpBillDetails tbody').find('tr:eq(' + GvRowscount + ')').find('td:eq(' + 14 + ')').text(Rec_Amt);
                    Rec_Amt = '0';
                }
            }
            else
            { }
        }
    });
    if (Count == '149') {
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatdue').value = '';
        document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnDueAmt').value = '';
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtTotalDue').value = '';
        document.getElementById('' + ctrlcom + '_ReceiptControl2_Search3_txtSearchControl').value = '';
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtcashAmt').value = '';
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtCardAmt').value = '';
        document.getElementById('' + ctrlcom + '_ReceiptControl2_ddcardType').selectedIndex = 0;
        document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlcrdtype').selectedIndex = 0;
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtcardExpiredt').value = '';
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtcardNoCmp').value = '';
        document.getElementById('' + ctrlcom + '_ReceiptControl2_ddbankName').selectedIndex = 0;
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtcardAuther').value = '';
        document.getElementById('' + ctrlcom + '_ReceiptControl2_ddcardType').className = 'grey';
        document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlcrdtype').className = 'grey';
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtcardNoCmp').className = 'grey';
        document.getElementById('' + ctrlcom + '_ReceiptControl2_ddbankName').className = 'grey';
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtcardAuther').className = 'grey';
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtcardExpiredt').className = 'grey';
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtCardAmt').disabled = true;
        return false;
    }
    return Count;
}
var preadvflag = "";
/* Refund Form Calculation fuctionality*/
function RefundCalculations() {
    var normal = 'Y';
    if (document.getElementById('' + ctrlcom + '_chkAdvRefund').checked == true) {
        normal = 'N';
    }
    if(preadvflag=='SD' && document.getElementById('' + ctrlcom + '_chkSDRef').checked == true)
     normal = 'N';
    var refund_amt = document.getElementById('' + ctrlcom + '_txtRefundableAmt').value;
    if (normal == 'Y') /* Refund Normal Starts */
    {
        /*    var cash_amt = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtcashAmt').value;
        var Card_Amt = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtCardAmt').value;*/
        var refunableAmt = document.getElementById('' + ctrlcom + '_txtRefundableAmt').value;
        if (refunableAmt == '' || refunableAmt == undefined || refunableAmt == null || isNaN(refunableAmt)) { refunableAmt = "0"; }
        var amnt = 0;
        var recmode = '';
        var exchange = 0;
        var cnvrtamnt = 0;
        var grid = document.getElementById('' + ctrlcom + '_ReceiptControl2_gvReceiptDetails');

        $("table[id*=gvReceiptDetails] tr:has(td)").each(function (e) {
            for (var i = 0; i < grid.rows.length - 1; i++) {
                recmode = $(this).filter(':eq(' + i + ')').find("[id*=lblrecmode]").text();
                exchange = $(this).filter(':eq(' + i + ')').find("[id*=lblexchrate]").text();
                cnvrtamnt = $(this).filter(':eq(' + i + ')').find("[id*=lblconvertedamt]").text();
                change = $(this).filter(':eq(' + i + ')').find("[id*=lblchange]").text();
                if (change == '' || change == undefined || change == null || isNaN(change)) { change = "0"; }
                if (cnvrtamnt == '' || cnvrtamnt == undefined || cnvrtamnt == null || isNaN(cnvrtamnt)) { cnvrtamnt = "0"; }
                if (exchange == '' || exchange == undefined || exchange == null || isNaN(exchange)) { exchange = "0"; }
                if (recmode == '' || recmode == undefined || recmode == null || isNaN(recmode)) { recmode = "0"; }
                if (amnt == '' || recmode == amnt || amnt == null || isNaN(amnt)) { amnt = "0"; }
                if (parseFloat(change) > 0) {
                    cnvrtamnt = parseFloat(cnvrtamnt) - parseFloat(change);
                    if (cnvrtamnt == '' || cnvrtamnt == undefined || cnvrtamnt == null || isNaN(cnvrtamnt)) { cnvrtamnt = "0"; }
                    if (parseFloat(cnvrtamnt) < 0) {
                        cnvrtamnt = 0;
                    }
                }
                amnt = parseFloat(amnt) + parseFloat(cnvrtamnt);
            }
        });
        if (parseInt(refund_amt) > 0) { } else { refund_amt = '0'; }
        if (parseInt(amnt) > 0) { } else { amnt = '0'; }
        var Rec_Amt = (parseFloat(amnt));
        var Count = '0';
        if (getParameterByName("MOD") != "N") {
            if (parseFloat(refund_amt) < parseFloat(Rec_Amt) && recmode != 'Cash') {
                document.getElementById('' + ctrlcom + '_ReceiptControl2_txtcashAmt').value = '0';
                document.getElementById('' + ctrlcom + '_ReceiptControl2_txtCardAmt').value = '0';
                $(".stoast").toastText("warning", "Refund  Amount Cannot Be Greater Than Receipt Amount", 5, 3);
                Count = '149';
            }
        }
        document.getElementById('' + ctrlcom + '_txtRefundAmt').value = Rec_Amt;
        document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnNetAmt').value = parseFloat(refunableAmt);
        document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnDueAmt').value = parseFloat(refunableAmt) - parseFloat(Rec_Amt);
        var GvRowscount = 0;
        var _index = $('#tbl_tbl_OpBillDetails tbody tr').length;
        var bill_count = 0;
        $("table[id$=tbl_tbl_OpBillDetails] tr:has(td)").each(function (e) {
            for (GvRowscount; GvRowscount <= _index - 1; GvRowscount++) {
                var row = $('#tbl_tbl_OpBillDetails tbody').find('tr:eq(' + GvRowscount + ')').find('td:eq(' + 0 + ')').find('input');
                if (row.is(':checked')) {
                    var P_Ref_Amt = $('#tbl_tbl_OpBillDetails tbody').find('tr:eq(' + GvRowscount + ')').find('td:eq(' + 14 + ')').text();
                    var G_Excss_amnt = $('#tbl_tbl_OpBillDetails tbody').find('tr:eq(' + GvRowscount + ')').find('td:eq(' + 12 + ')').text();
                    if (parseFloat(P_Ref_Amt) > 0) { } else { P_Ref_Amt = 0; }
                    if (parseFloat(G_Excss_amnt) > 0) { } else { G_Excss_amnt = 0; }
                    if (Count == '149') {
                        $('#tbl_tbl_OpBillDetails tbody').find('tr:eq(' + GvRowscount + ')').find('td:eq(' + 14 + ')').text('0');
                    }
                    else if (parseFloat(G_Excss_amnt) < parseFloat(Rec_Amt)) {
                        $('#tbl_tbl_OpBillDetails tbody').find('tr:eq(' + GvRowscount + ')').find('td:eq(' + 14 + ')').text(G_Excss_amnt);
                        Rec_Amt = parseFloat(Rec_Amt) - parseFloat(G_Excss_amnt);
                    }
                    else if (parseFloat(G_Excss_amnt) > parseFloat(Rec_Amt)) {
                        $('#tbl_tbl_OpBillDetails tbody').find('tr:eq(' + GvRowscount + ')').find('td:eq(' + 14 + ')').text(Rec_Amt);
                        Rec_Amt = '0';
                    }
                    else if (parseFloat(G_Excss_amnt) == parseFloat(Rec_Amt)) {
                        $('#tbl_tbl_OpBillDetails tbody').find('tr:eq(' + GvRowscount + ')').find('td:eq(' + 14 + ')').text(Rec_Amt);
                        Rec_Amt = '0';
                    }
                }
            }
        });
        if (Count == '149') {
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatdue').value = '';
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtTotalDue').value = '';
            document.getElementById('' + ctrlcom + '_ReceiptControl2_Search3_txtSearchControl').value = '';
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtcashAmt').value = '';
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtCardAmt').value = '';
            document.getElementById('' + ctrlcom + '_ReceiptControl2_ddcardType').selectedIndex = 0;
            document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlcrdtype').selectedIndex = 0;
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtcardExpiredt').value = '';
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtcardNoCmp').value = '';
            document.getElementById('' + ctrlcom + '_ReceiptControl2_ddbankName').selectedIndex = 0;
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtcardAuther').value = '';
            document.getElementById('' + ctrlcom + '_txtRefundAmt').value = '';
            document.getElementById('' + ctrlcom + '_ReceiptControl2_ddcardType').className = 'grey';
            document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlcrdtype').className = 'grey';
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtcardNoCmp').className = 'grey';
            document.getElementById('' + ctrlcom + '_ReceiptControl2_ddbankName').className = 'grey';
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtcardAuther').className = 'grey';
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtcardExpiredt').className = 'grey';
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtcardAuther').className = 'grey';
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtCardAmt').disabled = true;
            return false;
        }
    }
    else/* Advance Refund  Starts */
    {
        var amnt = 0;
        var recmode = '';
        var exchange = 0;
        var cnvrtamnt = 0;
        var grid = document.getElementById('' + ctrlcom + '_ReceiptControl2_gvReceiptDetails');
        $("table[id*=gvReceiptDetails] tr:has(td)").each(function (e) {
            for (var i = 0; i < grid.rows.length - 1; i++) {
                recmode = $(this).filter(':eq(' + i + ')').find("[id*=lblrecmode]").text();
                exchange = $(this).filter(':eq(' + i + ')').find("[id*=lblexchrate]").text();
                cnvrtamnt = $(this).filter(':eq(' + i + ')').find("[id*=lblconvertedamt]").text();
                change = $(this).filter(':eq(' + i + ')').find("[id*=lblchange]").text();
                if (change == '' || change == undefined || change == null || isNaN(change)) { change = "0"; }
                if (cnvrtamnt == '' || cnvrtamnt == undefined || cnvrtamnt == null || isNaN(cnvrtamnt)) { cnvrtamnt = "0"; }
                if (exchange == '' || exchange == undefined || exchange == null || isNaN(exchange)) { exchange = "0"; }
                if (recmode == '' || recmode == undefined || recmode == null || isNaN(recmode)) { recmode = "0"; }
                if (amnt == '' || recmode == amnt || amnt == null || isNaN(amnt)) { amnt = "0"; }
                if (parseFloat(change) > 0) {
                    cnvrtamnt = parseFloat(cnvrtamnt) - parseFloat(change);
                    if (cnvrtamnt == '' || cnvrtamnt == undefined || cnvrtamnt == null || isNaN(cnvrtamnt)) { cnvrtamnt = "0"; }
                    if (parseFloat(cnvrtamnt) < 0) {
                        cnvrtamnt = 0;
                    }
                }
                amnt = parseFloat(amnt) + parseFloat(cnvrtamnt);
            }
        });

        if (parseFloat(amnt) > parseFloat(refund_amt) && mode != 'A') {
            $('#ctl00_ContentPlaceHolder1_txtRefundAmt').val(0);
            $(".stoast").toastText("warning", "Refund Amount Cannot Be More than Advance Amount", 5, 3);
            return false;
        }
        if (parseFloat(amnt) <= parseFloat(refund_amt)) {
            $('#ctl00_ContentPlaceHolder1_txtRefundAmt').val(amnt);
        }
    }
    return Count;
}
function disablecontrolsadvandprerfnd() {
    document.getElementById('' + ctrlcom + '_AdmnPatientDetails_ucAdmission_txtSearchControl').disabled = true;
    document.getElementById('' + ctrlcom + '_AdmnPatientDetails_ucUmrNo_txtSearchControl').disabled = true;
    document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlPaymentType').disabled = true;
    document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlCurrency').disabled = true;
    document.getElementById('' + ctrlcom + '_ReceiptControl2_UcTransactionNo_txtSearchControl').disabled = true;
    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtTenderedAmt').disabled = true;
    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtRemarks').disabled = true;
    document.getElementById('lk_btn_ctl00_ContentPlaceHolder1_AdmnPatientDetails_ucAdmission').disabled = true;
    document.getElementById('lk_btn_ctl00_ContentPlaceHolder1_AdmnPatientDetails_ucUmrNo').disabled = true;
    document.getElementById('' + ctrlcom + '_ReceiptControl2_imgbtnadd').disabled = true;
    document.getElementById('lk_btn_ctl00_ContentPlaceHolder1_ReceiptControl2_UcTransactionNo').disabled = true;
}
function OnItemRemarksSelection(sender, eventArgs) {
    var results = eval('(' + eventArgs.get_value() + ')');
    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtRemarks').value = results.Text;
}
function chequeauthrization() {
var clientname = $('[id*=hdnclientNameFor]').val();
    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtAuthCode').value = '';
    document.getElementById('' + ctrlcom + '_ReceiptControl2_UCchequeAuth_txtSearchControl').value = '';
    document.getElementById('' + ctrlcom + '_ReceiptControl2_UCchequeAuth__hiddenID').value = '';
    document.getElementById('' + ctrlcom + '_ReceiptControl2_UCchequeAuth__hiddenText').value = '';
    var index = document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlPaymentType').value;
    if (index == '' || index == undefined || index == null) { index = 0; }
    var _selectedText = $('#ctl00_ContentPlaceHolder1_ReceiptControl2_ddlPaymentType').find('option:selected').text();
    if (_selectedText == 'Cheque'||(_selectedText == "Demand Draft" && clientname=='MRRCH')) {
        document.getElementById('divauthcd').style.display = "none";
        document.getElementById('divchequeauth').style.display = "block";
        document.getElementById('' + ctrlcom + '_ReceiptControl2_lblcardtranNo').innerHTML = "Cheque Auth.";
        document.getElementById('' + ctrlcom + '_ReceiptControl2_UCchequeAuth_txtSearchControl').className = 'grey';
    }
    /*Commented by Shiva*/
    /*else {
    document.getElementById('divauthcd').style.display = "block";
    document.getElementById('divchequeauth').style.display = "none";
    document.getElementById('' + ctrlcom + '_ReceiptControl2_lblcardtranNo').innerHTML = "Card Trans#.";
    }
    */
}
function CheckCardNo(obj) {
    /*changed if condition on 28092017 by john ali */
    /* not required commented by pushkar */
    /*  var __selectedText = $('#ctl00_ContentPlaceHolder1_ReceiptControl2_ddlPaymentType').find('option:selected').text();
    if (__selectedText != "Cheque" && __selectedText != "Cash") {
    if (obj != '' && obj != null && obj != undefined) {
    if (obj.value == '' || obj.value == undefined || obj.value == null) { obj.value = 0; }
    var length = obj.value.length;
    if (length == '' || length == null || length == undefined) { length = 0; }
    if (length < 16 && length <= 4) { 
    $(".stoast").toastText("warning", "Please enter 16 digits of card number ", 5, 3);
    obj.focus();
    return false;
    }
    }
    }  */
}
function setProperDecimalsAll(ActualVal, Doc) {
    if (ActualVal == undefined || ActualVal == null || ActualVal == '') { ActualVal = 0; }
    var v = $('[id*=hdnFBMaxDcml]').val();
    if (v == '' || v == null || v == undefined) { v = 0; }
    if (Doc == 'IPFINAL') { }
    else { v = 0; }
    v = parseInt(v);
    var power = Math.pow(10, v || 0);
    var ActualVal = String(Math.round(ActualVal * power) / power);
    if ((ActualVal.indexOf('.') + 1) == 0) {
        ActualVal = ActualVal;
    }
    return ActualVal;
}
var totalamount = 0;
var CashAmt = 0;
var CardAmt = 0;
var amnt = 0;
function CalculateAmountPinelabCardPayment(value) {
    var count = 0;
    var GrosssAmt = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatgross').value;
    var ConceAmt = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatgrossamt').value;
    var PatreceiptAmt = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatientReceiptAmt');
    var CmpreceiptAmt = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtCompanyReciptAmt');
    var TotalreceiptAmt = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtTotalReciptAmt');
    var advanceAmt = 0;
    GrosssAmt = GrosssAmt == '' ? 0 : GrosssAmt;
    ConceAmt = ConceAmt == '' ? 0 : ConceAmt;
    var _paymentTypeID = document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlPaymentType').value;

    if (document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnDocName').value == 'IPFINAL') {
        advanceAmt = document.getElementById('' + ctrlcom + '_txtTotAdvance').value;
        var ClaimAmt = $('[id*=hdnClaimAdjAmt]').val();
        if (ClaimAmt == '' || ClaimAmt == null || ClaimAmt == undefined) { ClaimAmt = 0; }
        if (advanceAmt == undefined || advanceAmt == null || advanceAmt == '') { advanceAmt = "0"; }
        advanceAmt = parseFloat(advanceAmt) + parseFloat(ClaimAmt);
        CashAmt = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtcashAmt').value;
        if (CashAmt == '.' || CashAmt == '' || CashAmt == undefined || CashAmt == null) { CashAmt = 0; }
        var PrvCashAmt = $('[id*=hdnAdmnCashAmt]').val();
        if (PrvCashAmt == '' || PrvCashAmt == null || PrvCashAmt == undefined) { PrvCashAmt = 0; }
        var AdvAmtLimit = $('[id*=hdnAdvAmtLimit]').val();
        var AdvLimitMand = $('[id*=hdnAdvAmtLmtMand]').val();
        if (AdvAmtLimit == '' || AdvAmtLimit == null || AdvAmtLimit == undefined) { AdvAmtLimit = 0; }
        if (AdvLimitMand == '' || AdvLimitMand == null || AdvLimitMand == undefined) { AdvLimitMand = "false"; }
        var PrvCashAmt = $('[id*=hdnAdmnCashAmt]').val();
        if (PrvCashAmt == '' || PrvCashAmt == null || PrvCashAmt == undefined) { PrvCashAmt = 0; }
        var TotCashAmt = parseFloat(CashAmt) + parseFloat(PrvCashAmt);
        if (parseFloat(AdvAmtLimit) > 0) {
            if (parseFloat(AdvAmtLimit) < parseFloat(TotCashAmt)) {
                $(".stoast").toastText("Info", "Patient cash amount limit has exceed..!", 5, 2);
                if (_paymentTypeID != 11) {
                    if (AdvLimitMand.trim().toLowerCase() == 'true') {
                        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtcashAmt').value = 0;
                        CalculateAmount(document.getElementById('' + ctrlcom + '_ReceiptControl2_txtcashAmt'), 'Cash');
                        return false;
                    }
                    else {
                        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtcashAmt').value = 0;
                    }
                }
            }

        }
    }

    if (parseFloat(GrosssAmt) > 0) {
        if (parseFloat(GrosssAmt) > parseFloat(advanceAmt)) {
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatNet').value = parseFloat(GrosssAmt) - parseFloat(ConceAmt);
        }
        else {
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatNet').value = parseFloat(GrosssAmt) - parseFloat(ConceAmt);

        }
    }
    else {
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatNet').value = 0;
    }

    CashAmt = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtcashAmt').value;
    CardAmt = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtCardAmt').value;
    if (CashAmt == '.' || CashAmt == '' || CashAmt == undefined || CashAmt == null) { CashAmt = 0; }
    if (CardAmt == '.' || CardAmt == '' || CardAmt == undefined || CardAmt == null) { CardAmt = 0; }
    var NetAmt = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatNet').value;
    var DueAmt = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatdue').value;
    if (NetAmt == '.' || NetAmt == '' || NetAmt == undefined || NetAmt == null) { NetAmt = 0; }
    if (DueAmt == '.' || DueAmt == '' || DueAmt == undefined || DueAmt == null) { DueAmt = 0; }
    totalamount = parseFloat(CardAmt) + parseFloat(CashAmt);
    if (document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnDocName').value == 'IpAdvance' || document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnDocName').value == 'PreAdvance') {
        CashAmt = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtcashAmt').value;
    }
    else if (document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnDocName').value == 'PreRefund') {
        CashAmt = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtcashAmt').value;
        Totpaidamnt = document.getElementById('' + ctrlcom + '_txtTotPaid').value;
        if (parseFloat(CashAmt) > parseFloat(Totpaidamnt)) {
            RemoveLastIndx($('[id*=_txtcashAmt]')[0].id);
            PatreceiptAmt.value = $('[id*=_txtcashAmt]').val();
            CashAmt = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtcashAmt').value;
        }
    }
    else {
        if (document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnDocName').value == 'NewChangeReceipt') {
        }
        else {
            if (parseFloat(GrosssAmt) > 0) {
                var taxamt = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatTotTax').value;
                if (taxamt == undefined || taxamt == null || taxamt == '') { taxamt = "0"; }

                if (parseFloat(CashAmt) > parseFloat(GrosssAmt) + Math.round(parseFloat(taxamt))) {
                    if (document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnDocName').value == 'IPFINAL') {
                        var _totadvnccash = 0;
                        if (parseFloat(CashAmt) > 0) {
                            _totadvnccash = setProperDecimalsVal(parseFloat(advanceAmt) + parseFloat(CashAmt));
                        }
                        else {
                            _totadvnccash = 0;
                        }
                        if (_totadvnccash == '' || _totadvnccash == undefined || _totadvnccash == null) { _totadvnccash = 0; }
                        var _totAmt = parseFloat(CardAmt) + parseFloat(_totadvnccash);
                        if (_totAmt == '' || _totAmt == undefined || _totAmt == null) { _totAmt = 0; }
                        if (parseFloat(_totAmt) > parseFloat(GrosssAmt)) {
                            var Chnageinamt = 0;
                            if (parseFloat(_totAmt) > 0) {
                                Chnageinamt = setProperDecimalsVal((parseFloat(CashAmt) + parseFloat(advanceAmt) + parseFloat(CardAmt)) - parseFloat(GrosssAmt));
                            }
                            else { Chnageinamt = 0; }

                            Chnageinamt = Chnageinamt == ('' || undefined || isNaN || NaN) ? 0 : Chnageinamt;

                            ctl00_ContentPlaceHolder1_ReceiptControl2_lblqickchangeamt.innerHTML = setProperDecimalsCorpPer(Chnageinamt);
                            PatreceiptAmt.value = $('[id*=_txtcashAmt]').val();
                            CashAmt = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtcashAmt').value;
                        }
                        else {
                            ctl00_ContentPlaceHolder1_ReceiptControl2_lblqickchangeamt.innerHTML = 0;
                        }
                    }
                    else {

                        var Chnageinamt = parseFloat(CashAmt) - (parseFloat(GrosssAmt) + Math.round(parseFloat(taxamt)));

                        Chnageinamt = Chnageinamt == ('' || undefined || isNaN || NaN) ? 0 : Chnageinamt;
                        ctl00_ContentPlaceHolder1_ReceiptControl2_lblqickchangeamt.innerHTML = setProperDecimalsCorpPer(Chnageinamt);
                        PatreceiptAmt.value = $('[id*=_txtcashAmt]').val();
                        CashAmt = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtcashAmt').value;
                    }
                }
                else if (document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnDocName').value == 'IPFINAL') {
                    var _totadvnccash = 0;
                    if (parseFloat(CashAmt) > 0) {
                        _totadvnccash = setProperDecimalsVal(parseFloat(advanceAmt) + parseFloat(CashAmt));
                    }
                    else { _totadvnccash = 0; }
                    if (_totadvnccash == '' || _totadvnccash == undefined || _totadvnccash == null) { _totadvnccash = 0; }
                    var _totAmt = parseFloat(CardAmt) + parseFloat(_totadvnccash);
                    if (_totAmt == '' || _totAmt == undefined || _totAmt == null) { _totAmt = 0; }
                    if (parseFloat(_totAmt) > parseFloat(GrosssAmt)) {
                        var Chnageinamt = 0;
                        if (parseFloat(_totAmt) > 0) {
                            Chnageinamt = setProperDecimalsVal((parseFloat(CashAmt) + parseFloat(advanceAmt) + parseFloat(CardAmt)) - parseFloat(GrosssAmt));
                        }
                        else { Chnageinamt = 0; }

                        Chnageinamt = Chnageinamt == ('' || undefined || isNaN || NaN) ? 0 : Chnageinamt;
                        if ($('#lblquick').prop('class') == 'select')
                            ctl00_ContentPlaceHolder1_ReceiptControl2_lblqickchangeamt.innerHTML = setProperDecimalsVal(Chnageinamt);

                        PatreceiptAmt.value = $('[id*=_txtcashAmt]').val();
                        CashAmt = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtcashAmt').value;
                    }
                    else {
                        ctl00_ContentPlaceHolder1_ReceiptControl2_lblqickchangeamt.innerHTML = 0;
                    }
                }
                else {
                    ctl00_ContentPlaceHolder1_ReceiptControl2_lblqickchangeamt.innerHTML = 0;
                }
            }
        }
    }
    if (CardAmt > 0) {
        if (document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnDocName').value == 'IpAdvance' || document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnDocName').value == 'PreAdvance') {
            CardAmt = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtCardAmt').value;
        }
        else if (document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnDocName').value == 'PreRefund') {
            CardAmt = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtCardAmt').value;
            Totpaidamnt = document.getElementById('' + ctrlcom + '_txtTotPaid').value;
        }
        if (document.getElementById('' + ctrlcom + '_ReceiptControl2_ddcardType').value == '0') {
            document.getElementById('' + ctrlcom + '_ReceiptControl2_ddcardType').className = 'red';
        }
        if (document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlcrdtype').value == '0') {
            document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlcrdtype').className = 'red';
        }
        if (document.getElementById('' + ctrlcom + '_ReceiptControl2_txtcardNoCmp').value == '') {
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtcardNoCmp').className = 'red';
        }

        if (document.getElementById('' + ctrlcom + '_ReceiptControl2_ddbankName').value == '0') {
            document.getElementById('' + ctrlcom + '_ReceiptControl2_ddbankName').className = 'red';
        }
        if (document.getElementById('' + ctrlcom + '_ReceiptControl2_txtcardAuther').value == '') {
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtcardAuther').className = 'red';
        }
        /*if (document.getElementById('' + ctrlcom + '_ReceiptControl2_txtcardExpiredt').value == '') {
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtcardExpiredt').className = 'red';
        }*/
    }
    else {
        document.getElementById('' + ctrlcom + '_ReceiptControl2_ddcardType').className = 'grey';
        document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlcrdtype').className = 'grey';
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtcardNoCmp').className = 'grey';
        document.getElementById('' + ctrlcom + '_ReceiptControl2_ddbankName').className = 'grey';
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtcardExpiredt').className = 'grey';
    }
    if (CashAmt == '.' || CashAmt == '' || CashAmt == undefined || CashAmt == null) { CashAmt = 0; }
    if (CardAmt == '.' || CardAmt == '' || CardAmt == undefined || CardAmt == null) { CardAmt = 0; }
    if (NetAmt == '.' || NetAmt == '' || NetAmt == undefined || NetAmt == null) { NetAmt = 0; }
    if (DueAmt == '.' || DueAmt == '' || DueAmt == undefined || DueAmt == null) { DueAmt = 0; }
    if (document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnDocName').value == 'IPFINAL') {
        var ClaimAmt = $('[id*=hdnClaimAdjAmt]').val();
        if (ClaimAmt == '' || ClaimAmt == null || ClaimAmt == undefined) { ClaimAmt = 0; }
        if (parseFloat(GrosssAmt) > parseFloat(advanceAmt)) {
            DueAmt = setProperDecimalsVal(parseFloat(NetAmt) - (parseFloat(advanceAmt) + parseFloat(CashAmt) + parseFloat(CardAmt)));
            if (DueAmt == '' || DueAmt == null || DueAmt == undefined || parseFloat(DueAmt) < 0) { DueAmt = 0; }
        }
        else {
            DueAmt = "0";
        }
    }
    else {
        if (document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnisallowgst').value.toUpperCase() == "YES") {
            var tnet = 0;
            var taxamt = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatTotTax').value;
            if (taxamt == '' || taxamt == undefined || taxamt == null) { taxamt = 0; }
            tnet = Math.round(parseFloat(NetAmt) + parseFloat(taxamt));
            DueAmt = (tnet - (parseFloat(CashAmt) + parseFloat(CardAmt)));
        }
        else {
            DueAmt = NetAmt - (parseFloat(CashAmt) + parseFloat(CardAmt));
        }
    }
    if (DueAmt == '.' || DueAmt == '' || DueAmt == undefined || DueAmt == null) { DueAmt = 0; }
    if (value == 'Cash') {
        var CashAmt = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtcashAmt').value;
        var GrosAmt = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatgross').value;
        var CardAmt = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtCardAmt').value;
        if (CashAmt == '.' || CashAmt == '' || CashAmt == undefined || CashAmt == null) { CashAmt = 0; }
        if (CardAmt == '.' || CardAmt == '' || CardAmt == undefined || CardAmt == null) { CardAmt = 0; }
        if (GrosAmt == '.' || GrosAmt == '' || GrosAmt == undefined || GrosAmt == null) { GrosAmt = 0; }
        var taxamt = document.getElementById('' + ctrlcom + '_ReceiptControl2_txttaxamt').value;
        if (taxamt == '.' || taxamt == '' || taxamt == undefined || taxamt == null) { taxamt = 0; }
        var TotalPayAmt = parseFloat(CashAmt) + parseFloat(CardAmt);
        if (DueAmt < 0 && CardAmt > 0) {
            var Chnageinamt = (parseFloat(CashAmt) + parseFloat(CardAmt)) - parseFloat(parseFloat(GrosAmt) + Math.round(parseFloat(taxamt)));
            Chnageinamt = Chnageinamt == ('' || undefined || isNaN || NaN) ? 0 : Chnageinamt;
            ctl00_ContentPlaceHolder1_ReceiptControl2_lblqickchangeamt.innerHTML = setProperDecimalsCorpPer(Chnageinamt);
            CashAmt = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtcashAmt').value;
            DueAmt = NetAmt - (parseFloat(CashAmt) + parseFloat(CardAmt));
        }
    }
    if (value == 'Card') {
        var CashAmt = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtcashAmt').value;
        var GrosAmt = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatgross').value;
        var CardAmt = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtCardAmt').value;
        var taxamt = document.getElementById('' + ctrlcom + '_ReceiptControl2_txttaxamt').value;
        CardAmt = typeof CardAmt == "string" ? (CardAmt.trim() == "" ? "0" : CardAmt) : (typeof CardAmt == "number" ? CardAmt : "0");
        GrosAmt = typeof GrosAmt == "string" ? (GrosAmt.trim() == "" ? "0" : GrosAmt) : (typeof GrosAmt == "number" ? GrosAmt : "0");
        CashAmt = typeof CashAmt == "string" ? (CashAmt.trim() == "" ? "0" : CashAmt) : (typeof CashAmt == "number" ? CashAmt : "0");
        taxamt = typeof taxamt == "string" ? (taxamt.trim() == "" ? "0" : taxamt) : (typeof taxamt == "number" ? taxamt : "0");
        var TotalPayAmt = parseFloat(CashAmt) + parseFloat(CardAmt);
        if (document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnisallowgst').value.toUpperCase() == "YES") {
            GrosAmt = (parseFloat(GrosAmt) + Math.round(parseFloat(taxamt)));
        }
        if (TotalPayAmt > GrosAmt) {
            $(".stoast").toastText("Info", "Payment amount cannot be more than the amount due!", 5, 2);
            var cashamt = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtcashAmt').value;
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtCardAmt').value = 0;
            var newdueamt=parseFloat(GrosAmt) - (parseFloat(cashamt)) - (parseFloat(advanceAmt))
            if (newdueamt == '' || newdueamt == null || newdueamt == undefined || newdueamt == NaN || newdueamt < 0) { newdueamt = 0; }
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatdue').value = newdueamt;
            document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnDueAmt').value = newdueamt;
            var CompAmtDue = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtcmpDue').value;
            document.getElementById('' + ctrlcom + '_ReceiptControl2_Search3_txtSearchControl').disabled = false;
            document.getElementById('' + ctrlcom + '_ReceiptControl2_Search3_txtSearchControl').className = 'grey';
            CompAmtDue = typeof CompAmtDue == "string" ? (CompAmtDue.trim() == "" ? "0" : CompAmtDue) : (typeof CompAmtDue == "number" ? CompAmtDue : "0");
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtTotalDue').value = parseFloat(newdueamt) + parseFloat(CompAmtDue);
            return false;
        }

        if (DueAmt < 0 && CardAmt > 0) {
            RemoveLastIndx($('[id*=_txtCardAmt]')[0].id);
            CardAmt = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtCardAmt').value;
            if (document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnDocName').value == 'IPFINAL') {
                DueAmt = setProperDecimalsVal(parseFloat(NetAmt) - (parseFloat(advanceAmt) + parseFloat(CashAmt) + parseFloat(CardAmt)));
                if (DueAmt == '' || DueAmt == null || DueAmt == undefined || parseFloat(DueAmt) < 0) { DueAmt = 0; }
            }
            else {
                DueAmt = NetAmt - (parseFloat(CashAmt) + parseFloat(CardAmt));
            }
        }
    }


    DueAmt = DueAmt > 0 ? DueAmt : 0;
    PatreceiptAmt.value = (parseFloat(CashAmt) + parseFloat(CardAmt));
    PatreceiptAmt.value = PatreceiptAmt.value == '' ? 0 : parseFloat(PatreceiptAmt.value);
    CmpreceiptAmt.value = CmpreceiptAmt.value == '' ? 0 : parseFloat(CmpreceiptAmt.value);
    var changeamt = ctl00_ContentPlaceHolder1_ReceiptControl2_lblqickchangeamt.innerHTML;
    if (changeamt == "" || changeamt == undefined) {
        changeamt = 0;
    }

    TotalreceiptAmt.value = ((parseFloat(PatreceiptAmt.value) + parseFloat(CmpreceiptAmt.value)) - parseFloat(changeamt));
    if ((document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnDocName').value == 'OP'|| document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnDocName').value == 'Cons'||document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnDocName').value == 'OPQUICK' ||document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnDocName').value == 'OUTSTDNGDUE' ||document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnDocName').value == 'PREADVANCE')  && value == 'Cash') {
        CashAmt = TotalreceiptAmt.value;
        if (CashAmt == '.' || CashAmt == '' || CashAmt == undefined || CashAmt == null) { CashAmt = 0; }
        var balCashAmtLimit = $('[id*=hdncashlmtamt]').val();
        var AdvLimitMand = $('[id*=hdnAdvAmtLmtMand]').val();
        if (balCashAmtLimit == '' || balCashAmtLimit == null || balCashAmtLimit == undefined) { balCashAmtLimit = 0; }
        if (AdvLimitMand == '' || AdvLimitMand == null || AdvLimitMand == undefined) { AdvLimitMand = "false"; }
        if (parseFloat(balCashAmtLimit) > 0) {
            if (AdvLimitMand.trim().toLowerCase() == 'true' && parseFloat(balCashAmtLimit) < parseFloat(CashAmt)) {
                $(".stoast").toastText("Info", "Patient cash amount limit has exceed..!", 5, 2);
                document.getElementById('' + ctrlcom + '_ReceiptControl2_txtcashAmt').value = 0;
                CalculateAmount(document.getElementById('' + ctrlcom + '_ReceiptControl2_txtcashAmt'), 'Cash');
                return false;
            }
        }
    }
    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatdue').value = DueAmt;
    var cmpdue = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtcmpDue').value;
    if (cmpdue == "") {
        cmpdue = 0;
    }
    var totdue = parseFloat(cmpdue) + parseFloat(DueAmt);
    if (totdue == undefined || totdue == null || totdue == "" || totdue == "NaN") { totdue = "0" }
    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtTotalDue').value = parseFloat(totdue);

    var due_amt = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatdue').value;
    if (due_amt == 0 || due_amt == "") {
        document.getElementById('' + ctrlcom + '_ReceiptControl2_Search3_txtSearchControl').disabled = true;
        document.getElementById('' + ctrlcom + '_ReceiptControl2_Search3_txtSearchControl').value = '';
        document.getElementById('' + ctrlcom + '_ReceiptControl2_Search3__hiddenID').value = '0';
        document.getElementById('lk_btn_ctl00_ContentPlaceHolder1_ReceiptControl2_Search3').disabled = true;
        document.getElementById('' + ctrlcom + '_ReceiptControl2_Search3_txtSearchControl').className = 'grey';
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtquickremarks').className = 'grey';
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtRemarks').className = 'grey';
    }
    else {
        document.getElementById('' + ctrlcom + '_ReceiptControl2_Search3_txtSearchControl').disabled = false;
        document.getElementById('lk_btn_ctl00_ContentPlaceHolder1_ReceiptControl2_Search3').disabled = false;
        var form_name = document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnDocName').value;
        var assest = '';
        if (form_name == 'OP') {
            assest = document.getElementById('' + ctrlcom + '_ChkAssesment').checked;
        }
        else if (form_name == 'Cons') {
            assest = document.getElementById('' + ctrlcom + '_ChkAssesment').checked;
        }
        else if (form_name == 'OPQUICK') {
            assest = document.getElementById('' + ctrlcom + '_ChkAssesment').checked;
        }
        else {
            assest = false;
        }
        if (assest == true) {
            document.getElementById('' + ctrlcom + '_ReceiptControl2_Search3_txtSearchControl').className = 'grey';
        }
        else {
            document.getElementById('' + ctrlcom + '_ReceiptControl2_Search3_txtSearchControl').className = 'red';
        }
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtquickremarks').className = 'red';
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtRemarks').className = 'red';
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtquickremarks').disabled = false;
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtRemarks').disabled = false;
    }
    if (localStorage.getItem("ED") != null && localStorage.getItem("ED") != undefined && localStorage.getItem("ED") != '') {
        OnExtendAmounts();
    }
    if (document.getElementById('' + ctrlcom + '_ReceiptControl2_Search3_txtSearchControl').value != '' && document.getElementById('' + ctrlcom + '_ReceiptControl2_Search3__hiddenText').value != '' && document.getElementById('' + ctrlcom + '_ReceiptControl2_Search3__hiddenID').value != '')
    { document.getElementById('' + ctrlcom + '_ReceiptControl2_Search3_txtSearchControl').value = ''; document.getElementById('' + ctrlcom + '_ReceiptControl2_Search3__hiddenText').value = ''; document.getElementById('' + ctrlcom + '_ReceiptControl2_Search3__hiddenID').value = ''; }

}

 function CalculatePerBasedAmount(obj, per,objnew) {
 if (objnew.key != 'Tab' && objnew.key != 'Shift' && objnew.key != 'ArrowDown' && objnew.key != 'ArrowUp' && objnew.key != undefined && objnew.key != 'ArrowRight' && objnew.key != 'ArrowLeft') {
  if (document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnDocName').value == 'IPFINAL' || document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnDocName').value == 'REG') {
        CalculateMultiDiscPercentage(obj, per)
    }else
    {
    var PerRowIndex = obj.parentElement.parentElement.rowIndex;
    CurrentRowIndex = PerRowIndex;
    var discounttypeid = $('table[id*=gvMultipleConcession] tr').filter(':eq(' + CurrentRowIndex + ')').find("[id*=ddlMultiDiscounttype]").val();
    if (discounttypeid == 0 || discounttypeid == '') {
        $(".toast").toastText("Info", "Please Select Discount Type", 5, 2);
        $("table[id$=gvMultipleConcession] tr").filter(":eq(" + CurrentRowIndex + ")").find("[id*=txtPersentage]").val(0);
        $("table[id$=gvMultipleConcession] tr").filter(":eq(" + CurrentRowIndex + ")").find("[id*=txtAmount]").val(0);
        $("table[id$=gvMultipleConcession] tr").filter(":eq(" + CurrentRowIndex + ")").find('[id*=ddlModes]')[0].selectedIndex = 0;
        $("table[id$=gvMultipleConcession] tr").filter(":eq(" + CurrentRowIndex + ")").find('[id*=ddlModes]').val(1);

       
        return false;
    }
    var patgrossamttotal = 0;
    var patgrossamttotal = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatgross').value;
    var decimalvalPuls = 0;
    var multidispcr = $("table[id$=gvMultipleConcession] tr").filter(":eq(" + CurrentRowIndex + ")").find("[id*=txtPersentage]").val();
    var curamount = $("table[id$=gvMultipleConcession] tr").filter(":eq(" + CurrentRowIndex + ")").find("[id*=txtAmount]").val();
    curamount=curamount||0;

    var totalbalenaceenter=0;
        $("table[id*=gvMultipleConcession] tr:has(td)").each(function (e) {
            var MulRowIndex = $(this)[0].rowIndex;
            
                var CCurPer = $("table[id$=gvMultipleConcession] tr").filter(":eq(" + MulRowIndex + ")").find('[id*=txtPersentage]').val();
                var CCurAmt = $("table[id$=gvMultipleConcession] tr").filter(":eq(" + MulRowIndex + ")").find('[id*=txtAmount]').val();
                CCurAmt = typeof CCurAmt == 'string' ? (typeof CCurAmt == 'undefined' || CCurAmt.trim() == '' ? 0 : parseFloat(CCurAmt)) : (typeof CCurAmt == 'object' ? 0 : parseFloat(CCurAmt));
                CCurPer = typeof CCurPer == 'string' ? (typeof CCurPer == 'undefined' || CCurPer.trim() == '' ? 0 : parseFloat(CCurPer)) : (typeof CCurPer == 'object' ? 0 : parseFloat(CCurPer));
                totalbalenaceenter+=parseFloat(CCurAmt);
            
        });
       var eligiblebalance= parseFloat(patgrossamttotal)-parseFloat(totalbalenaceenter);
    if(parseFloat(eligiblebalance) < 0)
    {
      curamount=parseFloat(curamount)- parseFloat(-1 * parseFloat(eligiblebalance));
      curamount=curamount||0;
      $("table[id$=gvMultipleConcession] tr").filter(":eq(" + CurrentRowIndex + ")").find("[id*=txtAmount]").val(curamount);
    }
    if(parseFloat(multidispcr) > 100)
    {
    multidispcr = 100;
    $("table[id$=gvMultipleConcession] tr").filter(":eq(" + CurrentRowIndex + ")").find("[id*=txtPersentage]").val(100);  
    }

    if (multidispcr == '' || multidispcr == 'undefined' || multidispcr == undefined || multidispcr == null) { multidispcr = 0 }
      multidispcr= multidispcr || 0;
      
     

    if (curamount == '' || curamount == 'undefined' || curamount == undefined || curamount == null) { curamount = 0 }
    if (per == 'Amount') {
        curamount = $("table[id$=gvMultipleConcession] tr").filter(":eq(" + CurrentRowIndex + ")").find("[id*=txtAmount]").val();
        curamount=curamount||0;
        var per1 = setProperDecimalsCorpPer(parseFloat(curamount) * 100 / parseFloat(patgrossamttotal));
        per1=per1||0;
        $("table[id$=gvMultipleConcession] tr").filter(":eq(" + CurrentRowIndex + ")").find("[id*=txtPersentage]").val(per1);
    }
    else {
        curamount = Math.round(parseFloat(multidispcr) * parseFloat(patgrossamttotal) / 100);
        curamount=curamount||0;
    }
    if (curamount == '' || curamount == 'undefined' || curamount == undefined || curamount == null) { curamount = 0 }
    multidispcr=setProperDecimalsCorpPer(multidispcr);
    var totalsumMuDisc = 0;
    var recordlength = $("table[id*=gvServices] tr:has(td)").length;
    $("table[id*=gvServices] tr:has(td)").each(function (e) {
        var ChaildRowIndex = $(this)[0].rowIndex;
        servicename = $(this).closest('tr').find("input[type=text][id*=txtServiceName]").val();
        if ($(this).closest('tr').find("input[type=hidden][id*=hdnServiceID]").val() > 0 && servicename != '' && servicename != '--Enter Service Name Here--' && $(this).closest('tr').find("input[type=hidden][id*=hdnClass_Srv_ID]").val() == 0) {
            var PatAmt = $(this).closest("tr").find("[id*=txtPamt]").val();
            var DicAmtLine = $(this).closest("tr").find("[id*=txtDiscAmt]").val();
            var CashAmt = $(this).closest('tr').find("input[type=text][id*=txtDiscAmt]").val();
            var HealthcardAmt = $(this).closest('tr').find("input[type=text][id*=txtHcAmt]").val();
            var ManagementAmt = $(this).closest('tr').find("input[type=text][id*=txtmgAmt]").val();
            var StaffAmt = $(this).closest('tr').find("input[type=text][id*=txtstAmt]").val();
            var EventBasedAmt = $(this).closest('tr').find("input[type=text][id*=txtebAmt]").val();
            var RuleBasedAmt = $(this).closest('tr').find("input[type=text][id*=txtcncrlAmt]").val();
            var totaldiscamt = 0;
            var totaldiscamtcashexcept = 0;
            var DiscAmt = 0;
            var multidispcr1 = 0;
            if (per == 'Amount') {
                DiscAmt = parseFloat(curamount) * parseFloat(PatAmt) / patgrossamttotal;
                multidispcr = setProperDecimalsCorpPer(parseFloat(curamount) * parseFloat(100) / patgrossamttotal);
            }
            else {
                DiscAmt = parseFloat(multidispcr) * parseFloat(PatAmt) / 100;
            }
            
             

            var DiscAmtRound = parseFloat(DiscAmt) - parseFloat(Math.floor(DiscAmt));
            var totaldiscDecimal = parseFloat(DiscAmt) - parseFloat(DiscAmtRound);
            totaldiscDecimal = totaldiscDecimal || 0;
            decimalvalPuls += parseFloat(DiscAmtRound);
            decimalvalPuls = decimalvalPuls || 0;
            var lastindex = parseFloat(recordlength) - parseFloat(1);

            var discbalance= parseFloat(PatAmt)- parseFloat(totaldiscDecimal);


            

            if (discounttypeid == 1) {
                totaldiscamt = parseFloat(HealthcardAmt) + parseFloat(ManagementAmt) + parseFloat(StaffAmt) + parseFloat(EventBasedAmt) + parseFloat(RuleBasedAmt);
                totaldiscamtcashexcept = parseFloat(DiscAmt) + parseFloat(HealthcardAmt) + parseFloat(ManagementAmt) + parseFloat(StaffAmt) + parseFloat(EventBasedAmt) + parseFloat(RuleBasedAmt);
            }
            if (discounttypeid == 3) {
                totaldiscamt = parseFloat(HealthcardAmt) + parseFloat(StaffAmt) + parseFloat(EventBasedAmt) + parseFloat(RuleBasedAmt) + parseFloat(DicAmtLine);
                totaldiscamtcashexcept = parseFloat(DiscAmt) + parseFloat(HealthcardAmt) + parseFloat(StaffAmt) + parseFloat(EventBasedAmt) + parseFloat(RuleBasedAmt) + parseFloat(DicAmtLine);
            }
            if (discounttypeid == 4) {
                totaldiscamt = parseFloat(HealthcardAmt) + parseFloat(ManagementAmt) + parseFloat(EventBasedAmt) + parseFloat(RuleBasedAmt) + parseFloat(DicAmtLine);
                totaldiscamtcashexcept = parseFloat(DiscAmt) + parseFloat(HealthcardAmt) + parseFloat(ManagementAmt) + parseFloat(EventBasedAmt) + parseFloat(RuleBasedAmt) + parseFloat(DicAmtLine);
            }
            

            if (parseFloat(totaldiscamtcashexcept) > parseFloat(PatAmt)) {
                if (parseFloat(totaldiscamt) > parseFloat(DiscAmt)) {
                    DiscAmt = parseFloat(PatAmt) - parseFloat(totaldiscamt);
                    totaldiscDecimal = DiscAmt;

                    multidispcr1 = setProperDecimalsCorpPer(parseFloat(totaldiscDecimal) * parseFloat(100) / PatAmt);
                    
                } else {

                    totaldiscDecimal = parseFloat(DiscAmt) - parseFloat(totaldiscamt);
                    multidispcr1 = setProperDecimalsCorpPer(parseFloat(totaldiscDecimal) * parseFloat(100) / PatAmt);
                    
                }
            }
            
            if (discounttypeid == 1 ){
                    totaldiscDecimal=Math.round(totaldiscDecimal);
                    $(this).closest("tr").find("[id*=txtDiscAmt]").val(totaldiscDecimal);
                    var netamt = parseFloat(PatAmt) - parseFloat(totaldiscDecimal);
                    netamt = netamt || 0;
                    $(this).closest("tr").find("[id*=txtPNAmt]").val(netamt);
                    if (parseFloat(multidispcr1) > 0) {
                        $(this).closest("tr").find("[id*=txtDiscP]").val(multidispcr1);
                    } else {
                    
                 
                        $(this).closest("tr").find("[id*=txtDiscP]").val(multidispcr);
                    }

                    totalsumMuDisc += parseFloat(totaldiscDecimal);
                

            }
          

              if (discounttypeid == 3 ){
              
                    $(this).closest("tr").find("[id*=txtmgAmt]").val(totaldiscDecimal);
                    var netamt = parseFloat(PatAmt) - parseFloat(totaldiscDecimal);
                    netamt = netamt || 0;
                    
                    if (parseFloat(multidispcr1) > 0) {
                        $(this).closest("tr").find("[id*=txtmaPer]").val(multidispcr1);
                    } else {
                    
                 
                        $(this).closest("tr").find("[id*=txtmaPer]").val(multidispcr);
                    }

                    totalsumMuDisc += parseFloat(totaldiscDecimal);
              

            }
            if (discounttypeid == 4 ){
               
                    $(this).closest("tr").find("[id*=txtstAmt]").val(totaldiscDecimal);
                    var netamt = parseFloat(PatAmt) - parseFloat(totaldiscDecimal);
                    netamt = netamt || 0;
                    
                    if (parseFloat(multidispcr1) > 0) {
                        $(this).closest("tr").find("[id*=txtstPer]").val(multidispcr1);
                    } else {
                    
                 
                        $(this).closest("tr").find("[id*=txtstPer]").val(multidispcr);
                    }
                    totalsumMuDisc += parseFloat(totaldiscDecimal);
            }
        }
    });
    decimalvalPuls=decimalvalPuls;
    var updted = false;
    $("table[id*=gvServices] tr:has(td)").each(function (e) {
        var ChaildRowIndex1 = $(this)[0].rowIndex;
        var CashAmt2 = $(this).closest('tr').find("input[type=text][id*=txtDiscAmt]").val();
        var HealthcardAmt2 = $(this).closest('tr').find("input[type=text][id*=txtHcAmt]").val();
        var ManagementAmt2 = $(this).closest('tr').find("input[type=text][id*=txtmgAmt]").val();
        var StaffAmt2 = $(this).closest('tr').find("input[type=text][id*=txtstAmt]").val();
        var EventBasedAmt2 = $(this).closest('tr').find("input[type=text][id*=txtebAmt]").val();
        var RuleBasedAmt2 = $(this).closest('tr').find("input[type=text][id*=txtcncrlAmt]").val();
        var PatAmt1 = $(this).closest("tr").find("[id*=txtPamt]").val();
        CashAmt2 = CashAmt2 || 0;
        HealthcardAmt2 = HealthcardAmt2 || 0;
        ManagementAmt2 = ManagementAmt2 || 0;
        StaffAmt2 = StaffAmt2 || 0;
        EventBasedAmt2 = EventBasedAmt2 || 0;
        RuleBasedAmt2 = RuleBasedAmt2 || 0;
        PatAmt1= PatAmt1 || 0;
        var totalsumofline = parseFloat(CashAmt2) + parseFloat(HealthcardAmt2) + parseFloat(ManagementAmt2) + parseFloat(StaffAmt2) + parseFloat(EventBasedAmt2) + parseFloat(RuleBasedAmt2);
        var linetotgros = $('table[id$=gvServices] tr').filter(':eq(' + ChaildRowIndex1 + ')').find('[id*=txtAmount]').val();
        if (totalsumofline != linetotgros) {
            if (updted == false) {
             if (discounttypeid == 1)
             {
                var discamtline = $('table[id$=gvServices] tr').filter(':eq(' + ChaildRowIndex1 + ')').find('[id*=txtDiscAmt]').val();
                discamtline = discamtline || 0;
                updted = true;
               var totdisc= parseFloat(decimalvalPuls) + parseFloat(discamtline);
               totdisc=totdisc||0;
                var lastdiscamt = Math.round(totdisc);
                $('table[id$=gvServices] tr').filter(':eq(' + ChaildRowIndex1 + ')').find('[id*=txtDiscAmt]').val(lastdiscamt);
                var netamt = parseFloat(PatAmt1) - parseFloat(lastdiscamt);
                netamt = netamt || 0;
                $('table[id$=gvServices] tr').filter(':eq(' + ChaildRowIndex1 + ')').find('[id*=txtPNAmt]').val(netamt);
              }
              if (discounttypeid == 3)
             {
                var discamtline = $('table[id$=gvServices] tr').filter(':eq(' + ChaildRowIndex1 + ')').find('[id*=txtmgAmt]').val();
                discamtline = discamtline || 0;
                updted = true;
               var totdisc= parseFloat(decimalvalPuls) + parseFloat(discamtline);
               totdisc=totdisc||0;
                var lastdiscamt = Math.round(totdisc);
                $('table[id$=gvServices] tr').filter(':eq(' + ChaildRowIndex1 + ')').find('[id*=txtmgAmt]').val(lastdiscamt);
                
              }
              if (discounttypeid == 4)
             {
                var discamtline = $('table[id$=gvServices] tr').filter(':eq(' + ChaildRowIndex1 + ')').find('[id*=txtstAmt]').val();
                discamtline = discamtline || 0;
                updted = true;
                var totdisc= parseFloat(decimalvalPuls) + parseFloat(discamtline);
               totdisc=totdisc||0;
                var lastdiscamt = Math.round(totdisc);
                
                $('table[id$=gvServices] tr').filter(':eq(' + ChaildRowIndex1 + ')').find('[id*=txtstAmt]').val(lastdiscamt);
                
              }
            }
        }
    });
    updted=false;
    var totalsumMuDisc1 = 0;
    var CashAmt1 = 0;
    var ManagementAmt1 = 0;
    var StaffAmt1 = 0;
    $("table[id*=gvServices] tr:has(td)").each(function (e) {
        var ChaildRowIndex = $(this)[0].rowIndex;
        servicename = $(this).closest('tr').find("input[type=text][id*=txtServiceName]").val();
        if ($(this).closest('tr').find("input[type=hidden][id*=hdnServiceID]").val() > 0 && servicename != '' && servicename != '--Enter Service Name Here--' && $(this).closest('tr').find("input[type=hidden][id*=hdnClass_Srv_ID]").val() == 0) {
            if (discounttypeid == 1) {
                CashAmt1 += parseFloat($(this).closest('tr').find("input[type=text][id*=txtDiscAmt]").val());
            }
            if (discounttypeid == 3) {
                ManagementAmt1 += parseFloat($(this).closest('tr').find("input[type=text][id*=txtmgAmt]").val());
            }
            if (discounttypeid == 4) {
                StaffAmt1 += parseFloat($(this).closest('tr').find("input[type=text][id*=txtstAmt]").val());
            }
        }
    });
    totalsumMuDisc1 += parseFloat(CashAmt1) + parseFloat(ManagementAmt1) + parseFloat(StaffAmt1);

    if (per != 'Amount') {
    totalsumMuDisc1=Math.round(totalsumMuDisc1);
        $("table[id$=gvMultipleConcession] tr").filter(":eq(" + CurrentRowIndex + ")").find("[id*=txtAmount]").val(parseFloat(totalsumMuDisc1));
    }
    var SrvCashPerTotal = 0, SrvHealthcardTotal = 0, SrvManageMentTotal = 0, SrvStaffTotal = 0, SrvEventBasedTotal = 0; SrvRulBasedTotal = 0;
    var SrvCashAmtTotal = 0, SrvHealthcardAmtTotal = 0, SrvManageMentAmtTotal = 0, SrvStaffAmtTotal = 0, SrvEventBasedAmtTotal = 0, SrvAmtBasedAmtTotal = 0;
    var TotalSrvPer = 0;
    var TotalSrvAmt = 0;
    var disabledqyrate=false;
    $("table[id*=gvServices] tr:has(td)").each(function (e) {
        if ($(this).closest('tr').find("input[type=text][id*=txtDiscP]").val() != '' && $(this).closest('tr').find("input[type=hidden][id*=hdnClass_Srv_ID]").val() == 0 && $(this).closest('tr').find("input[type=text][id*=txtDiscP]").val() != undefined) {
            var CashPer = $(this).closest('tr').find("input[type=text][id*=txtDiscP]").val();
            var CashAmt = $(this).closest('tr').find("input[type=text][id*=txtDiscAmt]").val();
            CashPer = CashPer == '' ? 0 : CashPer;
            CashAmt = CashAmt == '' ? 0 : CashAmt;
            SrvCashPerTotal += parseFloat(CashPer);
            SrvCashAmtTotal += parseFloat(CashAmt);
        }
        if ($(this).closest('tr').find("input[type=text][id*=txthcPer]").val() != '' && $(this).closest('tr').find("input[type=hidden][id*=hdnClass_Srv_ID]").val() == 0 && $(this).closest('tr').find("input[type=text][id*=txthcPer]").val() != undefined) {
            var Healthcard = $(this).closest('tr').find("input[type=text][id*=txthcPer]").val();
            var HealthcardAmt = $(this).closest('tr').find("input[type=text][id*=txtHcAmt]").val();
            Healthcard = Healthcard == '' ? 0 : Healthcard;
            HealthcardAmt = HealthcardAmt == '' ? 0 : HealthcardAmt;
            SrvHealthcardAmtTotal += parseFloat(HealthcardAmt);
        }
        if ($(this).closest('tr').find("input[type=text][id*=txtmaPer]").val() != '' && $(this).closest('tr').find("input[type=hidden][id*=hdnClass_Srv_ID]").val() == 0 && $(this).closest('tr').find("input[type=text][id*=txtmaPer]").val() != undefined) {
            var Management = $(this).closest('tr').find("input[type=text][id*=txtmaPer]").val();
            var ManagementAmt = $(this).closest('tr').find("input[type=text][id*=txtmgAmt]").val();
            Management = Management == '' ? 0 : Management;
            ManagementAmt = ManagementAmt == '' ? 0 : ManagementAmt;
            SrvManageMentTotal += parseFloat(Management);
            SrvManageMentAmtTotal += parseFloat(ManagementAmt);
        }
        if ($(this).closest('tr').find("input[type=text][id*=txtstPer]").val() != '' && $(this).closest('tr').find("input[type=hidden][id*=hdnClass_Srv_ID]").val() == 0 && $(this).closest('tr').find("input[type=text][id*=txtstPer]").val() != undefined) {
            var Staff = $(this).closest('tr').find("input[type=text][id*=txtstPer]").val();
            var StaffAmt = $(this).closest('tr').find("input[type=text][id*=txtstAmt]").val();
            Staff = Staff == '' ? 0 : Staff;
            StaffAmt = StaffAmt == '' ? 0 : StaffAmt;
            SrvStaffTotal += parseFloat(Staff);
            SrvStaffAmtTotal += parseFloat(StaffAmt);
        }
        if ($(this).closest('tr').find("input[type=text][id*=txtebPer]").val() != '' && $(this).closest('tr').find("input[type=hidden][id*=hdnClass_Srv_ID]").val() == 0 && $(this).closest('tr').find("input[type=text][id*=txtebPer]").val() != undefined) {
            var EventBased = $(this).closest('tr').find("input[type=text][id*=txtebPer]").val();
            var EventBasedAmt = $(this).closest('tr').find("input[type=text][id*=txtebAmt]").val();
            EventBased = EventBased == '' ? 0 : EventBased;
            EventBasedAmt = EventBasedAmt == '' ? 0 : EventBasedAmt;
            SrvEventBasedTotal += parseFloat(EventBased);
            SrvEventBasedAmtTotal += parseFloat(EventBasedAmt);
        }
        if ($(this).closest('tr').find("input[type=text][id*=txtRulePer]").val() != '' && $(this).closest('tr').find("input[type=hidden][id*=hdnClass_Srv_ID]").val() == 0 && $(this).closest('tr').find("input[type=text][id*=txtRulePer]").val() != undefined) {
            var RuleBased = $(this).closest('tr').find("input[type=text][id*=txtRulePer]").val();
            var RuleBasedAmt = $(this).closest('tr').find("input[type=text][id*=txtcncrlAmt]").val();
            RuleBased = RuleBased == '' ? 0 : RuleBased;
            RuleBasedAmt = RuleBasedAmt == '' ? 0 : RuleBasedAmt;
            SrvRulBasedTotal += parseFloat(RuleBased);
            SrvAmtBasedAmtTotal += parseFloat(RuleBasedAmt);
        }

    });
    var TotalSrvAmt =parseFloat(SrvCashAmtTotal) + parseFloat(SrvHealthcardAmtTotal) + parseFloat(SrvManageMentAmtTotal) + parseFloat(SrvStaffAmtTotal) + parseFloat(SrvEventBasedAmtTotal) + parseFloat(SrvAmtBasedAmtTotal);
    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatdis').value = setProperDecimalsCorpPer(TotalSrvPer);
    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatgrossamt').value = Math.round(TotalSrvAmt);
    CalculateGridAmtCount();
    
       if (multidispcr == '' || multidispcr == 'undefined' || multidispcr == undefined || multidispcr == null) { multidispcr = 0 }
      multidispcr= multidispcr || 0;

        var CurDue = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatgrossamt').value;
        var CurCmpDue = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpartygrossamt').value;
        CurDue = typeof CurDue == 'string' ? (typeof CurDue == 'undefined' || CurDue.trim() == '' ? 0 : parseFloat(CurDue)) : (typeof CurDue == 'object' ? 0 : parseFloat(CurDue));
        CurCmpDue = typeof CurCmpDue == 'string' ? (typeof CurCmpDue == 'undefined' || CurCmpDue.trim() == '' ? 0 : parseFloat(CurCmpDue)) : (typeof CurCmpDue == 'object' ? 0 : parseFloat(CurCmpDue));
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtgrossamttotal').value = Math.round(CurDue + CurCmpDue);

      if(multidispcr==0)
      {
       $("table[id*=UCServices_gv_services_header] tr:has(td)").each(function (e) {
        var index=$(this)[0].rowIndex;
 
        $('[id$=UCServices_gv_services_header] tr').filter(':eq(' + index + ')').find('[id*=ddSType]').attr('disabled', false);
        $('[id$=UCServices_gv_services_header] tr').filter(':eq(' + index + ')').find('input[type=text][id*=txtServiceName]').attr('disabled', false);
        $('[id$=UCServices_gv_services_header] tr').filter(':eq(' + index + ')').find('input[type=text][id*=txtServiceCode]').attr('disabled', false);
        $('[id$=UCServices_gv_services_header] tr').filter(':eq(' + index + ')').find('input[type=button][id*=BtnSrvSearch]').attr('disabled', false);
        });
        $("table[id*=gvServices] tr:has(td)").each(function (e) {
        var index=$(this)[0].rowIndex;
        $('[id$=gvServices] tr').filter(':eq(' + index + ')').find('[id*=ddSType]').attr('disabled', false);
//        $('[id$=gvServices] tr').filter(':eq(' + index + ')').find('input[type=text][id*=txtQty]').attr('disabled', false);
//        $('[id$=gvServices] tr').filter(':eq(' + index + ')').find('input[type=text][id*=txtRate]').attr('disabled', false);
$('.su-star-empty')[0].style.display='block';
        });
    
    }
    else
    {
              Disableservicegridmauldiscgtzero(); 
               
    }
    }
    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtreqamtkyd').value = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatdue').value;
    }
 }
 function Disableservicegridmauldiscgtzero()
 {
//  $("table[id*=UCServices_gv_services_header] tr:has(td)").each(function (e) {
//                var index=$(this)[0].rowIndex;
//                $('[id$=UCServices_gv_services_header] tr').filter(':eq(' + index + ')').find('[id*=ddSType]').attr('disabled', true);
//                $('[id$=UCServices_gv_services_header] tr').filter(':eq(' + index + ')').find('input[type=text][id*=txtServiceName]').attr('disabled', true);
//                $('[id$=UCServices_gv_services_header] tr').filter(':eq(' + index + ')').find('input[type=text][id*=txtServiceCode]').attr('disabled', true);
//                $('[id$=UCServices_gv_services_header] tr').filter(':eq(' + index + ')').find('input[type=button][id*=BtnSrvSearch]').attr('disabled', true);
//                });
                $("table[id*=gvServices] tr:has(td)").each(function (e) {
                var index=$(this)[0].rowIndex;
                $('[id$=gvServices] tr').filter(':eq(' + index + ')').find('[id*=ddSType]').attr('disabled', true);
                $('[id$=gvServices] tr').filter(':eq(' + index + ')').find('input[type=text][id*=txtServiceName]').attr('disabled', true);
                $('[id$=gvServices] tr').filter(':eq(' + index + ')').find('input[type=text][id*=txtServiceCode]').attr('disabled', true);
                $('[id$=gvServices] tr').filter(':eq(' + index + ')').find('input[type=button][id*=BtnSrvSearch]').attr('disabled', true);
                $('[id$=gvServices] tr').filter(':eq(' + index + ')').find('input[type=text][id*=txtQty]').attr('disabled', true);
                $('[id$=gvServices] tr').filter(':eq(' + index + ')').find('input[type=text][id*=txtRate]').attr('disabled', true);
                 $('.su-star-empty')[0].style.display='none';
                });
 
 }

 function setProperDecimalsCorpPer(ActualVal) {
        if (ActualVal == undefined || ActualVal == null || ActualVal == '') { ActualVal = 0; }
        var power = Math.pow(10, 2 || 0);
        var ActualVal = String(Math.round(ActualVal * power) / power);
        if ((ActualVal.indexOf('.') + 1) == 0) {
            ActualVal = ActualVal;
        }
        return ActualVal;
    }

    function EnabledValueBasedControls()
    {
    var amount=document.getElementById('' + ctrlcom + '_ReceiptControl2_txtamt').value;
    var expirydate=document.getElementById('' + ctrlcom + '_ReceiptControl2_txtExpDt').value;
    var cardno=document.getElementById('' + ctrlcom + '_ReceiptControl2_txtCardNo').value;
    var authcode=document.getElementById('' + ctrlcom + '_ReceiptControl2_txtAuthCode').value;
    var cardtype=document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlCardType').value;
    var ddlbankname=document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlBankName').value;
    var tenderamount=document.getElementById('' + ctrlcom + '_ReceiptControl2_txtTenderedAmt').value;
    var _paymentTypeID = document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlPaymentType').value;
    if(cardtype=="0"|| cardtype==0)
    {
    cardtype='';
    }
    if(ddlbankname=="0"|| ddlbankname==0)
    {
    ddlbankname='';
    }
    if(_paymentTypeID == "4" || _paymentTypeID=="5")
    {
        tenderamount='';
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtTenderedAmt').value='';
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtTenderedAmt').removeClass = 'red';
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtTenderedAmt').className = "ReadOnlyTextBox";
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtTenderedAmt').disabled=true;
    }
    if(parseFloat(amount)>0)
    {
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtamt').disabled = false;
       document.getElementById('' + ctrlcom + '_ReceiptControl2_txtamt').className = 'red';
    }
    if(expirydate!='')
    {
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtExpDt').disabled = false;
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtExpDt').className = 'red';
    }
    if(cardno!='')
    {
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtCardNo').disabled = false;
        if(document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnCardNoMand').value=='YES')
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtCardNo').className = 'red';
        else
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtCardNo').className = 'grey';
    }
    if(authcode!='' && document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnCardRefNoMand').value=='YES')
    {
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtAuthCode').disabled = false;
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtAuthCode').className = 'red';
    }
     if(cardtype!='')
    {
        document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlCardType').disabled = false;
        document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlCardType').className = 'red';
    }
     if(ddlbankname!='')
    {
        document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlBankName').disabled = false;
        document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlBankName').className = 'red';
    }
   if(tenderamount!='' && (_paymentTypeID !=4 || _paymentTypeID!=5 ))
   {
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtTenderedAmt').disabled = false;
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtTenderedAmt').className = 'red';
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtamt').disabled = true;
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtamt').className = '';
   }

    if(tenderamount!='' && (_paymentTypeID==4 || _paymentTypeID==5 ))
   {
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtTenderedAmt').disabled = true;
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtTenderedAmt').removeClass = 'red';
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtTenderedAmt').value='';
   }

    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtCurrAmt').disabled = true;
    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtreqamtkyd').disabled = true;
    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtCurrency').disabled = true;
    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtChangeKyd').disabled = true;
   
    
    }