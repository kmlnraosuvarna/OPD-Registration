function numeralsOnly(evt) {

    var intKey = (window.Event) ? evt.which : evt.keyCode;
    if (intKey == undefined)
    {
        var charcode = evt.keyCode;
        if (charcode > 31 && (charcode < 48 || charcode > 57) && charcode != 46) {
            evt.returnValue = false;
            return false;
        }
        return true;
    }
    else
    {
        if (intKey > 31 && (intKey < 48 || intKey > 57) && intKey != 46) {
            evt.returnValue = false;
            return false;
        }

        return true;
    }
}

function isNumericEntryOnly(evt) {
    var intKey = (window.Event) ? evt.which : evt.keyCode;
    if (intKey == undefined) {
        intKey = evt.keyCode;
    }
    var resval = evt.currentTarget.value;
    var spliteval = resval.split('.');
    if (intKey != 13) {
        if (spliteval.length > 1) {
            if (spliteval[1] > 9) {
                return false;
            }
        }
    }
    if (intKey == undefined)//for InternetExplorer(IE) 
    {
        var charcode = evt.keyCode;
        if (event.keyCode == 13) {
            evt.stopImmediatePropagation();
            evt.stopPropagation();
            return false;
        }
        else if (event.keyCode == 45 || event.keyCode == 13 || event.keyCode == 46 || event.keyCode == 32 || event.keyCode == 37 || event.keyCode == 38 || event.keyCode == 39 || event.keyCode == 40 || event.keyCode >= 48 && event.keyCode <= 57) {
            evt.returnValue = true;
            return true;
        }
        else {
            evt.returnValue = false;
            return false;
        }
    }
    else//for Mozilla
    {
        if (intKey == 13) {
            evt.stopImmediatePropagation();
            evt.stopPropagation();
            return false;

        }
        else if (event.keyCode == 45 || intKey == 13 || intKey == 46 || intKey == 32 || intKey == 37 || intKey == 38 || intKey == 9 || intKey == 39 || intKey == 40 || intKey >= 48 && intKey <= 57) {
            evt.returnValue = true;
            return true;
        }
        else {
            evt.returnValue = false;
            return false;
        }
    }

}

function CheckPercentageValue(obj) {
    var perse = parseFloat(obj.value);
    if (perse > 100) {
        $(".stoast").toastText("warning", "You Should Not Enter More than Hundred% Concession", 5, 3);
        obj.value = '';
        obj.value = document.getElementById("ctl00_ContentPlaceHolder1_HdnSameValue").value;
    }
}

function ReturnSameTextBoxVal(obj) {
    var TxtVal = obj.value;
    document.getElementById("ctl00_ContentPlaceHolder1_HdnSameValue").value = TxtVal;
}

function DisplayDateToday(sender, args) {
    if (sender._selectedDate == null) {
        sender._selectedDate = new Date();
    }
}
function ClearControl() {
    document.getElementById("ctl00_ContentPlaceHolder1_ucCompanyCode_txtSearchControl").value = ''; 
    document.getElementById("ctl00_ContentPlaceHolder1_txtContractNo").value = '';
    document.getElementById("ctl00_ContentPlaceHolder1_txtStDt").value = '';
    document.getElementById("ctl00_ContentPlaceHolder1_txtEfectFrom").value = '';
    document.getElementById("ctl00_ContentPlaceHolder1_txtEfectTo").value = '';
    document.getElementById("ctl00_ContentPlaceHolder1_txtContactPerson").value = '';
    document.getElementById("ctl00_ContentPlaceHolder1_txtAuthorizedperson").value = '';
    document.getElementById("ctl00_ContentPlaceHolder1_txtRegFee").value = '';
    document.getElementById("ctl00_ContentPlaceHolder1_txtOrgpercent_OP").value = '';
    document.getElementById("ctl00_ContentPlaceHolder1_txtEmppercent_OP").value = '';
    document.getElementById("ctl00_ContentPlaceHolder1_txtOrgpercent_IP").value = '';
    document.getElementById("ctl00_ContentPlaceHolder1_txtEmppercent_IP").value = '';
    document.getElementById("ctl00_ContentPlaceHolder1_txtConsNOs").value = '';
    document.getElementById("ctl00_ContentPlaceHolder1_txtConsDAYs").value = '';
    document.getElementById("ctl00_ContentPlaceHolder1_txtDiscount").value = '';
    document.getElementById("ctl00_ContentPlaceHolder1_txtColor").value = '';
    document.getElementById("ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtTarifDis1_IP").value = '';
    document.getElementById("ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtTarifDis2_IP").value = '';
    document.getElementById("ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtTarifDis3_IP").value = '';
    document.getElementById("ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtTarifDis4_IP").value = '';
    document.getElementById("ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtTarifDis1_OP").value = '';
    document.getElementById("ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtTarifDis2_OP").value = '';
    document.getElementById("ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtTarifDis3_OP").value = '';
    document.getElementById("ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtTarifDis4_OP").value = '';
    clearpreviousdata();
    return false;
}
function clearpreviousdata() {
    document.getElementById('ctl00_ContentPlaceHolder1_chksaleaspurcrate').checked = false;
    document.getElementById('ctl00_ContentPlaceHolder1_chkpharservicetax').checked = false;
    document.getElementById('ctl00_ContentPlaceHolder1_chkfreeconsultation').checked = false;
    document.getElementById('ctl00_ContentPlaceHolder1_chksmsrequired').checked = false;
    document.getElementById('ctl00_ContentPlaceHolder1_chkisnotreqward').checked = false;
    document.getElementById('ctl00_ContentPlaceHolder1_chkisargsry').checked = false;
    document.getElementById('ctl00_ContentPlaceHolder1_chkdischmedictaion').checked = false;
    document.getElementById('ctl00_ContentPlaceHolder1_chksaleaspurcrate').checked = false;
    document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_chkLeterRequired').checked = false;
    document.getElementById('ctl00_ContentPlaceHolder1_chkduemateqappramt').checked = false;
    document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel21_chkbx_0').checked = false;
    document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel21_chkbx_1').checked = false;
    document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel21_chkbx_2').checked = false;
    document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel8_chkRemoveSevices').checked = false;
    document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel8_chkQuantity').checked = false;
    document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel8_chkNewServiceInsert').checked = false;
    document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel8_chkServiceName').checked = false;
    document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel8_chkposteddate').checked = false;
    document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel8_chkServiceCd').checked = false;
    document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel8_chkRate').checked = false;
    document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel8_chkbillinhead').checked = false;
    document.getElementById("ctl00_ContentPlaceHolder1_TabContainer1_TabPanel21_txtCorpBilDone").value = 0;
    document.getElementById("ctl00_ContentPlaceHolder1_TabContainer1_TabPanel21_txtsubmitMktg").value = 0;
    document.getElementById("ctl00_ContentPlaceHolder1_TabContainer1_TabPanel21_txtsubmittoOrg").value = 0;
    document.getElementById("ctl00_ContentPlaceHolder1_TabContainer1_TabPanel21_txtBilCleardays").value = 0;
    document.getElementById("ctl00_ContentPlaceHolder1_TabContainer1_TabPanel21_txtdschrgbills").value = 0;
    $('#ctl00_ContentPlaceHolder1_ddlservices').val('0');
    document.getElementById("Ucitemlevel1").value = '';
    document.getElementById("SELECTINTWO").value = ''; 
    document.getElementById("itemleveldisc").value = '';
    document.getElementById("ctl00_ContentPlaceHolder1_txtCmpName").value = '';
    document.getElementById("ctl00_ContentPlaceHolder1_TabContainer1_TabPanel11_txtMedicationValue").value = '';
    document.getElementById("ctl00_ContentPlaceHolder1_TabContainer1_TabPanel3_txtgradeName").value = '';
    document.getElementById("ctl00_ContentPlaceHolder1_TabContainer1_TabPanel3_txtgradefromamt").value = '';
    document.getElementById("ctl00_ContentPlaceHolder1_TabContainer1_TabPanel3_txtgradetoamt").value = '';
    $('#ctl00_ContentPlaceHolder1_TabContainer1_TabPanel4_ddlcmplevel').val('0');
    $('#ctl00_ContentPlaceHolder1_TabContainer1_TabPanel5_ddlgender').val('0');
    $('#ctl00_ContentPlaceHolder1_TabContainer1_TabPanel5_ddlrelation').val('0');
    $('#ctl00_ContentPlaceHolder1_TabContainer1_TabPanel5_ddlMaritalStatus').val('0');
    document.getElementById("ctl00_ContentPlaceHolder1_TabContainer1_TabPanel5_txtfromage").value = '';
    document.getElementById("ctl00_ContentPlaceHolder1_TabContainer1_TabPanel5_txttoage").value = '';
    document.getElementById("ctl00_ContentPlaceHolder1_TabContainer1_TabPanel4_txtdivname").value = '';
    document.getElementById("ctl00_ContentPlaceHolder1_TabContainer1_TabPanel4_txtdivaddress").value = '';
    document.getElementById("ctl00_ContentPlaceHolder1_TabContainer1_TabPanel4_txtdivdesc").value = '';
    document.getElementById("ctl00_ContentPlaceHolder1_ucTariff_txtSearchControl").value = '';
    document.getElementById("ctl00_ContentPlaceHolder1_txtPharmacyValidity").value = 0;
    document.getElementById("ctl00_ContentPlaceHolder1_txtnumberofprints").value = 0;
    document.getElementById("ctl00_ContentPlaceHolder1_txtservicetxper").value = 0;
    document.getElementById("ctl00_ContentPlaceHolder1_txtfreeconsultationdays").value = 0;
    document.getElementById("ctl00_ContentPlaceHolder1_txttdsper").value = 0;
    document.getElementById("ctl00_ContentPlaceHolder1_txtconsultationdiscper").value = 0;
    document.getElementById("ctl00_ContentPlaceHolder1_txtphardiscper").value = 0;
    $("table[id$=gvservicegroup] tr:has(td)").find('input[type=text][id*=txtpririty]').val(0);
    $("table[id$=gvservicegroup] tr:has(td)").find('input[type=text][id*=txtAddpririty]').val('');
    $("table[id$=gvServicesType] tr:has(td)").find('input[type=text][id*=txtpririty]').val(0);
    $("table[id$=gvServicesType] tr:has(td)").find('input[type=text][id*=txtAddpririty]').val('');
    ClearOPTarriffSelection();
    ClearIPTarriffSelection();
    ClearERTarriffSelection();
    ClearDCTarriffSelection();
    cleargrids();
}
function cleargrids() {

    $('table[id$=tbl_Division] tr:has(td)').each(function (e) {
        $(this).remove();
    });
    $('table[id$=tbl_Grade] tr:has(td)').each(function (e) {
        $(this).remove();
    });
    $('table[id$=tbl_Eligibility] tr:has(td)').each(function (e) {
        $(this).remove();

    });
    $('table[id*=tblitemlevelwisediscount] tr:has(td)').each(function (e) {
        $(this).remove();
    });

    $('table[id*=tblrestricitemlvel] tr:has(td)').each(function (e) {
        $(this).remove();
    });

    $('table[id*=tblrestitemwise] tr:has(td)').each(function (e) {
        $(this).remove();
    });
    return false;
}
/* Get radio button list value*/
function GetRadioButtonValue() {
    var radioPriority = document.getElementById('ctl00_ContentPlaceHolder1_rbTariffPrio');
    if (document.getElementById('ctl00_ContentPlaceHolder1_rbTariffPrio' + '_0').checked == true) {
        EnableSerType();
        document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_trOP').style.display = 'none';
        document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_trIP').style.display = 'block';
        if (document.getElementById('ctl00_ContentPlaceHolder1_txtEmppercent_IP').value == '')
            document.getElementById('ctl00_ContentPlaceHolder1_txtEmppercent_IP').style.border = "1px solid #f4785e";
        if (document.getElementById('ctl00_ContentPlaceHolder1_txtOrgpercent_IP').value == '')
            document.getElementById('ctl00_ContentPlaceHolder1_txtOrgpercent_IP').style.border = "1px solid #f4785e";

        document.getElementById('ctl00_ContentPlaceHolder1_txtOrgpercent_OP').style.border = "1px solid #bebebe";
        document.getElementById('ctl00_ContentPlaceHolder1_txtEmppercent_OP').style.border = "1px solid #bebebe";
    }
    if (document.getElementById('ctl00_ContentPlaceHolder1_rbTariffPrio' + '_1').checked == true) {
        DisableSerType();
        document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_trIP').style.display = 'none';
        document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_trOP').style.display = 'block';
        if (document.getElementById('ctl00_ContentPlaceHolder1_txtOrgpercent_OP').value == '')
            document.getElementById('ctl00_ContentPlaceHolder1_txtOrgpercent_OP').style.border = "1px solid #f4785e";
        if (document.getElementById('ctl00_ContentPlaceHolder1_txtEmppercent_OP').value == '')
            document.getElementById('ctl00_ContentPlaceHolder1_txtEmppercent_OP').style.border = "1px solid #f4785e";

        document.getElementById('ctl00_ContentPlaceHolder1_txtEmppercent_IP').style.border = "1px solid #bebebe";
        document.getElementById('ctl00_ContentPlaceHolder1_txtOrgpercent_IP').style.border = "1px solid #bebebe";
    }
    if (document.getElementById('ctl00_ContentPlaceHolder1_rbTariffPrio' + '_2').checked == true) {
        EnableSerType();
        document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_trOP').style.display = 'block';
        document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_trIP').style.display = 'block';
        if (document.getElementById('ctl00_ContentPlaceHolder1_txtOrgpercent_OP').value == '')
            document.getElementById('ctl00_ContentPlaceHolder1_txtOrgpercent_OP').style.border = "1px solid #f4785e";
        if (document.getElementById('ctl00_ContentPlaceHolder1_txtEmppercent_OP').value == '')
            document.getElementById('ctl00_ContentPlaceHolder1_txtEmppercent_OP').style.border = "1px solid #f4785e";
        if (document.getElementById('ctl00_ContentPlaceHolder1_txtEmppercent_IP').value == '')
            document.getElementById('ctl00_ContentPlaceHolder1_txtEmppercent_IP').style.border = "1px solid #f4785e";
        if (document.getElementById('ctl00_ContentPlaceHolder1_txtOrgpercent_IP').value == '')
            document.getElementById('ctl00_ContentPlaceHolder1_txtOrgpercent_IP').style.border = "1px solid #f4785e";
  }

}
function ChkDiscontExeed(obj1) {

    var obj = obj1.id;
    var elem1 = document.getElementById(obj);
    if (elem1 != null) {
        var val = parseFloat(elem1.value);
        if (val == undefined || isNaN(val))
            val = 0;
        if (val > 100) {
            RemoveLastdigit(obj1);
            ChkDiscontExeed(obj1);
        }

    }
}
function RemoveLastdigit(SentObj) {
    var target = '';
    target = document.getElementById(SentObj.id);
    var removeTxt = target.value.length - 1;
    var orgText = target.value;
    target.value = orgText.substr(0, parseInt(removeTxt));
}

function ChangeTariffSelection() {

}
/*Calculate Org & Emp %*/
function Calorgempperc(obj) {
    if (obj == "OP") {
        var txtOrgpercent_OP = document.getElementById("ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtoporgper").value;
        var txtEmppercent_OP = document.getElementById("ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtopempper").value;

        if ((txtOrgpercent_OP != '' || txtOrgpercent_OP != undefined || txtOrgpercent_OP != NaN) && (parseFloat(txtOrgpercent_OP) <= 100)) {
            document.getElementById("ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtopempper").value = 100 - parseInt(txtOrgpercent_OP);
            document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtopempper').style.border = "1px solid #bebebe";
            return false;
        }
        else {
            document.getElementById("ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtoporgper").value = '0';
            document.getElementById("ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtopempper").value = '0';

        }
    }
    if (obj == "IP") {
        var txtOrgpercent_OP = document.getElementById("ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtiporgper").value;
        var txtEmppercent_OP = document.getElementById("ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtipempper").value;

        if ((txtOrgpercent_OP != '' || txtOrgpercent_OP != undefined || txtOrgpercent_OP != NaN) && (parseFloat(txtOrgpercent_OP) <= 100)) {
            document.getElementById("ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtipempper").value = 100 - parseInt(txtOrgpercent_OP);
            document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtipempper').style.border = "1px solid #bebebe";
            return false;
        }
        else {
            document.getElementById("ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtiporgper").value = '0';
            document.getElementById("ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtipempper").value = '0';

        }
    }
    if (obj == "ER") {
        var txtOrgpercent_OP = document.getElementById("ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txterorgper").value;
        var txtEmppercent_OP = document.getElementById("ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txterempper").value;

        if ((txtOrgpercent_OP != '' || txtOrgpercent_OP != undefined || txtOrgpercent_OP != NaN) && (parseFloat(txtOrgpercent_OP) <= 100)) {
            document.getElementById("ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txterempper").value = 100 - parseInt(txtOrgpercent_OP);
            document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txterempper').style.border = "1px solid #bebebe";
            return false;
        }
        else {
            document.getElementById("ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txterorgper").value = '0';
            document.getElementById("ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txterempper").value = '0';

        }
    }
    if (obj == "DC") {
        var txtOrgpercent_OP = document.getElementById("ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtdcorgper").value;
        var txtEmppercent_OP = document.getElementById("ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtdcempper").value;

        if ((txtOrgpercent_OP != '' || txtOrgpercent_OP != undefined || txtOrgpercent_OP != NaN) && (parseFloat(txtOrgpercent_OP) <= 100)) {
            document.getElementById("ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtdcempper").value = 100 - parseInt(txtOrgpercent_OP);
            document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtdcempper').style.border = "1px solid #bebebe";
            return false;
        }
        else {
            document.getElementById("ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtdcorgper").value = '0';
            document.getElementById("ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtdcempper").value = '0';

        }
    }
}
function CalIp() {
    var txtOrgpercent_IP = document.getElementById("ctl00_ContentPlaceHolder1_txtOrgpercent_IP").value;
    var txtEmppercent_IP = document.getElementById("ctl00_ContentPlaceHolder1_txtEmppercent_IP").value;
    if ((txtOrgpercent_IP != '' || txtOrgpercent_IP != NaN || txtOrgpercent_IP != undefined) && (parseFloat(txtOrgpercent_IP) <= 100)) {
        document.getElementById("ctl00_ContentPlaceHolder1_txtEmppercent_IP").value = 100 - parseInt(txtOrgpercent_IP);
        document.getElementById('ctl00_ContentPlaceHolder1_txtEmppercent_IP').style.border = "1px solid #bebebe";
        return false;
    }
    else {
        document.getElementById("ctl00_ContentPlaceHolder1_txtOrgpercent_IP").value = '0';
        document.getElementById("ctl00_ContentPlaceHolder1_txtEmppercent_IP").value = '0';
    }

}

function CheckValidation() {
    var ContractNo = document.getElementById('ctl00_ContentPlaceHolder1_txtContractNo');
    var ContactPerson = document.getElementById('ctl00_ContentPlaceHolder1_txtContactPerson');
    var AuthPerson = document.getElementById('ctl00_ContentPlaceHolder1_txtAuthorizedperson');
    var RegFee = document.getElementById('ctl00_ContentPlaceHolder1_txtRegFee');
    var Noofdays = document.getElementById('ctl00_ContentPlaceHolder1_txtConsDAYs');
    var DefTariffOP = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtOPTrf4_txtSearchControl');
    var DefTariffIP = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtIPTrf4_txtSearchControl');
    var DefTariffER = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtERTrf4_txtSearchControl');
    var DefTariffDC = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtDCTrf4_txtSearchControl');
    var Prior1OP = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtOPTrf1_txtSearchControl');
    var Prior1IP = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtIPTrf1_txtSearchControl');
    var Prior1ER = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtERTrf1_txtSearchControl');
    var Prior1DC = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtDCTrf1_txtSearchControl');
    var OrgPercOP = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtoporgper');
    var EmpPercOP = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtopempper');
    var OrgPercIP = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtiporgper');
    var EmpPercIP = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtipempper');
    var OrgPercER = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txterorgper');
    var EmpPercER = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txterempper');
    var OrgPercDC = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtdcorgper');
    var EmpPercDC = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtdcempper');
    var ContractDate = document.getElementById('ctl00_ContentPlaceHolder1_txtStDt');
    var EffectFrom = document.getElementById('ctl00_ContentPlaceHolder1_txtEfectFrom');
    var EffectTo = document.getElementById('ctl00_ContentPlaceHolder1_txtEfectTo');
    var DoctorNos = document.getElementById('ctl00_ContentPlaceHolder1_txtConsNOs');
    

    if (EmpPercER == "" || EmpPercER == '0') {
        EmpPercER = "";
    }
    var oppriority2 = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtOPTrf2_txtSearchControl');
    var oppriority3 = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtOPTrf3_txtSearchControl');
    var oppriority4 = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtOPTrf4_txtSearchControl');


    var ippriority2 = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtIPTrf2_txtSearchControl');
    var ippriority3 = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtIPTrf3_txtSearchControl');
    var ippriority4 = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtIPTrf4_txtSearchControl');

    var ConsultatentNo = document.getElementById('ctl00_ContentPlaceHolder1_txtConsNOs');
    var ConsultatentDays = document.getElementById('ctl00_ContentPlaceHolder1_txtConsDAYs');

    if (Prior1IP.value == '' && ippriority2.value == '' && ippriority3.value == '' && ippriority4.value == '') {
        $('#ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtrulenameip').val('');
        $('#ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtrulenameip').val('');
        document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_hdncmpruleidip').value = 0;

    }
    if (Prior1OP.value == '' && oppriority2.value == '' && oppriority3.value == '' && oppriority4.value == '') {
        $('#ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_hdncmpruleidop').val('');
        $('#ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtrulenameop').val('');
    }

    var Prior1OP = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtOPTrf1_txtSearchControl');
    var Prior1IP = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtIPTrf1_txtSearchControl');
    var Prior1ER = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtERTrf1_txtSearchControl');
    var Prior1DC = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtDCTrf1_txtSearchControl');

    if (OrgPercOP.value == "" || OrgPercOP.value == null || OrgPercOP.value == undefined) { OrgPercOP.value = "0"; }
    if (OrgPercER.value == "" || OrgPercER.value == null || OrgPercER.value == undefined) { OrgPercER.value = "0"; }
    if (OrgPercIP.value == "" || OrgPercIP.value == null || OrgPercIP.value == undefined) { OrgPercIP.value = "0"; }
    if (OrgPercDC.value == "" || OrgPercDC.value == null || OrgPercDC.value == undefined) { OrgPercDC.value = "0"; }

    if (EmpPercOP.value == "" || EmpPercOP.value == null || EmpPercOP.value == undefined) { EmpPercOP.value = "0"; }
    if (EmpPercIP.value == "" || EmpPercIP.value == null || EmpPercIP.value == undefined) { EmpPercIP.value = "0"; }
    if (EmpPercER.value == "" || EmpPercER.value == null || EmpPercER.value == undefined) { EmpPercER.value = "0"; }
    if (EmpPercDC.value == "" || EmpPercDC.value == null || EmpPercDC.value == undefined) { EmpPercDC.value = "0"; }

    if (ContractNo.value == '') {
        $(".stoast").toastText("warning", "Please Enter Contract No!", 5, 3);
        ContractNo.focus();
        return false;
    }
    if (ContractDate.value == '') {
        $(".stoast").toastText("warning", "Please Enter Contract Date!", 5, 3);
        ContractDate.focus();
        return false;
    }
    if (EffectFrom.value == '') {
        $(".stoast").toastText("warning", "Please Enter Effect From!", 5, 3);
        EffectFrom.focus();
        return false;
    }
    if (EffectTo.value == '') {
        $(".stoast").toastText("warning", "Please Enter EffectTo!", 5, 3);
        EffectTo.focus();
        return false;
    }
    if (AuthPerson.value == '') {
        $(".stoast").toastText("warning", "Please Enter Authorized Person!", 5, 3);
        AuthPerson.focus();
        return false;
    }
    if (RegFee.value == '') {
        $(".stoast").toastText("warning", "Please Enter Registration Fee!", 5, 3);
        RegFee.focus();
        return false;
    }
    if (DoctorNos.value == '') {
        $(".stoast").toastText("warning", "Please Enter No.s!", 5, 3);
        DoctorNos.focus();
        return false; 
    }
    if (Noofdays.value == '') {
        $(".stoast").toastText("warning", "Please Enter No of days!", 5, 3);
        Noofdays.focus();
        return false;
    }
   
    var DefTrfOP = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtOPTrf4__hiddenID');
    var DefTrfIP = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtIPTrf4__hiddenID');
    var DefTrfER = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtERTrf4__hiddenID');
    var DefTrfDC = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtDCTrf4__hiddenID');

    if (DefTrfOP.value == "" || DefTrfOP.value == null || DefTrfOP.value == undefined) { DefTrfOP.value = "0"; }
    if (DefTrfIP.value == "" || DefTrfIP.value == null || DefTrfIP.value == undefined) { DefTrfIP.value = "0"; }
    if (DefTrfER.value == "" || DefTrfER.value == null || DefTrfER.value == undefined) { DefTrfER.value = "0"; }
    if (DefTrfDC.value == "" || DefTrfDC.value == null || DefTrfDC.value == undefined) { DefTrfDC.value = "0"; }

    if (OrgPercOP.value > 0 || EmpPercOP.value > 0) {
        if (DefTariffOP.value == '') {
            $(".stoast").toastText("warning", "Please Select Default Tariff for OP!", 5, 3);
            DefTariffOP.focus();
            return false;
        }
        if (Prior1OP.value == '') {
            $(".stoast").toastText("warning", "Please Select Priority 1 for OP!", 5, 3);
            Prior1OP.focus();
            return false;
        }
    }
    if (OrgPercIP.value > 0 || EmpPercIP.value > 0) {
        if (DefTariffIP.value == '') {
            $(".stoast").toastText("warning", "Please Select Default Tariff for IP!", 5, 3);
            DefTariffIP.focus();
            return false;
        }
        if (Prior1IP.value == '') {
            $(".stoast").toastText("warning", "Please Select Priority 1 for IP!", 5, 3);
            Prior1IP.focus();
            return false;
        }
    }
    if (OrgPercER.value > 0 || EmpPercER.value > 0) {
        if (DefTariffER.value == '') {
            $(".stoast").toastText("warning", "Please Select Default Tariff for ER!", 5, 3);
            DefTariffER.focus();
            return false;
        }
        if (Prior1ER.value == '') {
            $(".stoast").toastText("warning", "Please Select Priority 1 for ER!", 5, 3);
            Prior1ER.focus();
            return false;
        }
    }
    if (OrgPercDC.value > 0 || EmpPercDC.value > 0) {
        if (DefTariffDC.value == '') {
            $(".stoast").toastText("warning", "Please Select Default Tariff for DC!", 5, 3);
            DefTariffDC.focus();
            return false;
        }
        if (Prior1DC.value == '') {
            $(".stoast").toastText("warning", "Please Select Priority 1 for DC!", 5, 3);
            Prior1DC.focus();
            return false;
        }
    }

    if (document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtOPTrf1__hiddenID').value > 0 || document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtOPTrf4__hiddenID').value > 0) {
        if (Prior1OP != "") {
            if (DefTariffOP == "") {
                $(".stoast").toastText("warning", "Please Select Default Priority ", 5, 3);
                return false;
            }
        }

        if (DefTariffOP != "") {
            if (Prior1OP == "") {
                $(".stoast").toastText("warning", "Please Select Priority1 for OP", 5, 3);
                return false;
            }
        }
        if (parseFloat(OrgPercOP.value) == "0" && parseFloat(EmpPercOP.value) == "0") {
            $(".stoast").toastText("warning", "Please Enter Org(%) for OP", 5, 3);
            return false;
        }
    }
    if (document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtIPTrf1__hiddenID').value > 0 || document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtIPTrf4__hiddenID').value > 0) {
        if (Prior1IP != "") {
            if (DefTariffIP == "") {
                $(".stoast").toastText("warning", "Please Select Default Priority ", 5, 3);
                return false;
            }
        }

        if (DefTariffIP != "") {
            if (Prior1IP == "") {
                $(".stoast").toastText("warning", "Please Select Priority1 for IP", 5, 3);
                return false;
            }
        }
        if (parseFloat(OrgPercIP.value) == "0" && parseFloat(EmpPercIP.value) == "0") {
            $(".stoast").toastText("warning", "Please Enter Org(%) for IP", 5, 3);
            return false;
        }
    }
    if (document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtERTrf1__hiddenID').value > 0 || document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtERTrf4__hiddenID').value > 0) {
        if (Prior1ER != "") {
            if (DefTariffER == "") {
                $(".stoast").toastText("warning", "Please Select Default Priority ", 5, 3);
                return false;
            }
        }

        if (DefTariffER != "") {
            if (Prior1ER == "") {
                $(".stoast").toastText("warning", "Please Select Priority1 for ER", 5, 3);
                return false;
            }
        }
        if (parseFloat(OrgPercER.value) == "0" && parseFloat(EmpPercER) == "0") {
            $(".stoast").toastText("warning", "Please Enter Org(%) for ER", 5, 3);
            return false;
        }
    }
    if (document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtDCTrf1__hiddenID').value > 0 || document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtDCTrf4__hiddenID').value > 0) {
        if (Prior1DC != "") {
            if (DefTariffDC == "") {
                $(".stoast").toastText("warning", "Please Select Default Priority ", 5, 3);
                return false;
            }
        }

        if (DefTariffDC != "") {
            if (Prior1DC == "") {
                $(".stoast").toastText("warning", "Please Select Priority1 for DC", 5, 3);
                return false;
            }
        }
        if (parseFloat(OrgPercDC.value) == "0" && EmpPercDC == "0") {
            $(".stoast").toastText("warning", "Please Enter Org(%) for DC", 5, 3);
            return false;
        }
    }
    if (ConsultatentNo.value == '0') {
        $(".stoast").toastText("warning", "Please Enter Consultation No!", 5, 3);
        ConsultatentNo.focus();
        return false;
    }
    if (ConsultatentDays.value == '0' || ConsultatentDays.value == '') {
        $(".stoast").toastText("warning", "Please Enter Consultation Days!", 5, 3);
        ConsultatentDays.focus();
        return false;
    }
    var addvalid = false;
    $('table[id*=tbl_Division] tbody tr').each(function () {
        var divname = $(this).closest('tr').find('[id*=txtdivname]').val();
        var divaddr = $(this).closest('tr').find('[id*=txtdivaddr]').val();
        var hdnempid = $(this).closest('tr').find('[id*=hdmempids]').val();
        if (hdnempid == "" || hdnempid == null || hdnempid == undefined) { hdnempid = "0"; }
        if (divname.trim() == "" && divaddr.trim() != "") {
            $(".stoast").toastText("warning", "Please Enter Name for Division", 5, 3);
            addvalid = true;
            return false;
        }
        if (divname.trim() != '' && divaddr.trim() == "") {
            $(".stoast").toastText("warning", "Please Enter Address for Division", 5, 3);
            addvalid = true;
            return false;
        }
        if (hdnempid == "0") {
            $(".stoast").toastText("warning", "Please Select Marketing Executive", 5, 3);
            addvalid = true;
            return false;
        }
    });
    if (addvalid == true) {
        return false;
    }
    if (DefTrfOP.value == 0 && DefTrfIP.value == 0 && DefTrfER.value == 0 && DefTrfDC.value == 0) {
        $(".stoast").toastText("warning", "Please Select any one Tariff Priorities!", 5, 3);
        return false;
    }
    var Object = 'ctl00_ContentPlaceHolder1_hdnSaveAlert';
    SavecompanyTariffconfig();
    saveGrade();
        var DivGridLen = document.getElementById('tbl_Eligibility').rows.length;
        if (DivGridLen > 1) {
            saveEligibilty();
        }

    ConfirmationRequiredForSave(Object);
    return false;
}
function OnsuccesssaveConfirmation() {
    SaveServiceType();
    saveservicegroup();
    saveDivision();
    savedepartment();
    savechecklist();
    Savevisittype();
    saveitemlevel();
    saveitemlevelresrtict();
    saveitemlevelresrtictITEM();
    __doPostBack($('[id*=imgbtnSave]').attr("name"), "");
}
function savedmsg(state) {
    if (state == "True") {
        $(".smessagebox").scustommessagebox(1, "Company Tariff settings", "Saved Successfully", successmsg);
    } else {
        $(".stoast").toastText("warning", "Error Found...!", 5, 3);
    }
}
function successmsg() {
    window.location.href = _iniUrl + "Private/CompanyMaster/CompanyTariffConfigurationnEW.aspx";
}
function saveservicegroup() {
    var CompanyId = document.getElementById('ctl00_ContentPlaceHolder1_ucCompanyCode__hiddenID').value;
    document.getElementById('ctl00_ContentPlaceHolder1_HdnGridGroupxmlData').value = '';
    var _child1 = "";
    _child1 += "<root>";
    $('table[id$=gvservicegroup] tr:has(td)').each(function (e) {
        _child1 += " <COMPANY_SERVICE_TYPE_CONCESSION ";
        var CMP_SRV_TYPE_ID = $(this).closest('tr').find('[id*=hdnautoid]').val();
        var SERVICE_TYPE_REV_NO = $(this).closest('tr').find('[id*=hdnrevno]').val();
        var SERVICE_TYPE_ID = $(this).closest('tr').find('[id*=hdnGroupID]').val();
        var SERVICE_TYPE_NAME = $(this).closest('tr').find('[id*=lblServicetype]').text();
        var COMPANY_SERVICE_TYPE_PRIORITY1 = $(this).closest('tr').find('input[type=text][id*=txtpririty1]').val();
        var COMPANY_SERVICE_TYPE_PRIORITY2 = $(this).closest('tr').find('input[type=text][id*=txtpririty2]').val();
        var COMPANY_SERVICE_TYPE_PRIORITY3 = $(this).closest('tr').find('input[type=text][id*=txtpririty3]').val();
        var COMPANY_SERVICE_TYPE_DEFAULT = $(this).closest('tr').find('input[type=text][id*=txtpririty4]').val();
        var COMPANY_SERVICE_TYPE_ADD_PRCNTGE1 = $(this).closest('tr').find('input[type=text][id*=txtAddpririty1]').val();
        var COMPANY_SERVICE_TYPE_ADD_PRCNTGE2 = $(this).closest('tr').find('input[type=text][id*=txtAddpririty2]').val();
        var COMPANY_SERVICE_TYPE_ADD_PRCNTGE3 = $(this).closest('tr').find('input[type=text][id*=txtAddpririty3]').val();
        var COMPANY_SERVICE_TYPE_ADD_PRCNTGE4 = $(this).closest('tr').find('input[type=text][id*=txtAddpririty4]').val();
        CMP_SRV_TYPE_ID = CMP_SRV_TYPE_ID;
        SERVICE_TYPE_REV_NO = SERVICE_TYPE_REV_NO;
        SERVICE_TYPE_ID = SERVICE_TYPE_ID;
        SERVICE_TYPE_NAME = typeof SERVICE_TYPE_NAME == "string" ? (SERVICE_TYPE_NAME.trim() == "" ? "" : SERVICE_TYPE_NAME) : (typeof SERVICE_TYPE_NAME == "number" ? SERVICE_TYPE_NAME : "");
        COMPANY_SERVICE_TYPE_PRIORITY1 = typeof COMPANY_SERVICE_TYPE_PRIORITY1 == "string" ? (COMPANY_SERVICE_TYPE_PRIORITY1.trim() == "0" ? "0" : COMPANY_SERVICE_TYPE_PRIORITY1) : (typeof COMPANY_SERVICE_TYPE_PRIORITY1 == "number" ? COMPANY_SERVICE_TYPE_PRIORITY1 : "0");
        COMPANY_SERVICE_TYPE_PRIORITY2 = typeof COMPANY_SERVICE_TYPE_PRIORITY2 == "string" ? (COMPANY_SERVICE_TYPE_PRIORITY2.trim() == "0" ? "0" : COMPANY_SERVICE_TYPE_PRIORITY2) : (typeof COMPANY_SERVICE_TYPE_PRIORITY2 == "number" ? COMPANY_SERVICE_TYPE_PRIORITY2 : "0");
        COMPANY_SERVICE_TYPE_PRIORITY3 = typeof COMPANY_SERVICE_TYPE_PRIORITY3 == "string" ? (COMPANY_SERVICE_TYPE_PRIORITY3.trim() == "0" ? "0" : COMPANY_SERVICE_TYPE_PRIORITY3) : (typeof COMPANY_SERVICE_TYPE_PRIORITY2 == "number" ? COMPANY_SERVICE_TYPE_PRIORITY3 : "0");
        COMPANY_SERVICE_TYPE_DEFAULT = typeof COMPANY_SERVICE_TYPE_DEFAULT == "string" ? (COMPANY_SERVICE_TYPE_DEFAULT.trim() == "" ? "" : COMPANY_SERVICE_TYPE_DEFAULT) : (typeof COMPANY_SERVICE_TYPE_DEFAULT == "number" ? COMPANY_SERVICE_TYPE_DEFAULT : "");
        COMPANY_SERVICE_TYPE_ADD_PRCNTGE1 = COMPANY_SERVICE_TYPE_ADD_PRCNTGE1 == "" ? "0" : COMPANY_SERVICE_TYPE_ADD_PRCNTGE1;
        COMPANY_SERVICE_TYPE_ADD_PRCNTGE2 = COMPANY_SERVICE_TYPE_ADD_PRCNTGE2 == "" ? "0" : COMPANY_SERVICE_TYPE_ADD_PRCNTGE2;
        COMPANY_SERVICE_TYPE_ADD_PRCNTGE3 = COMPANY_SERVICE_TYPE_ADD_PRCNTGE3 == "" ? "0" : COMPANY_SERVICE_TYPE_ADD_PRCNTGE3;
        COMPANY_SERVICE_TYPE_ADD_PRCNTGE4 = COMPANY_SERVICE_TYPE_ADD_PRCNTGE4 == "" ? "0" : COMPANY_SERVICE_TYPE_ADD_PRCNTGE4;
        _child1 += " CMP_SRV_TYPE_ID=!" + CMP_SRV_TYPE_ID + "!";
        _child1 += " SERVICE_TYPE_REV_NO=!" + SERVICE_TYPE_REV_NO + "!";
        _child1 += " SERVICE_TYPE_NAME=!" + ReplaceSplCharactor(SERVICE_TYPE_NAME) + "!";
        _child1 += " SERVICE_TYPE_ID=!" + 0 + "!";
        _child1 += " COMPANY_SERVICE_TYPE_PRIORITY1=!" + COMPANY_SERVICE_TYPE_PRIORITY1 + "!";
        _child1 += " COMPANY_SERVICE_TYPE_PRIORITY2=!" + COMPANY_SERVICE_TYPE_PRIORITY2 + "!";
        _child1 += " COMPANY_SERVICE_TYPE_PRIORITY3=!" + COMPANY_SERVICE_TYPE_PRIORITY3 + "!";
        _child1 += " COMPANY_SERVICE_TYPE_DEFAULT=!" + COMPANY_SERVICE_TYPE_DEFAULT + "!";
        _child1 += " CONCESSION_LEVEL=!" + 2 + "!";
        _child1 += " SERVICE_GROUP_ID=!" + SERVICE_TYPE_ID + "!";
        _child1 += " COMPANY_ID=!" + CompanyId + "!";

        _child1 += " RISE_PECENT1=!" + COMPANY_SERVICE_TYPE_ADD_PRCNTGE1 + "!";
        _child1 += " RISE_PECENT2=!" + COMPANY_SERVICE_TYPE_ADD_PRCNTGE2 + "!";
        _child1 += " RISE_PECENT3=!" + COMPANY_SERVICE_TYPE_ADD_PRCNTGE3 + "!";
        _child1 += " RISE_PERCENT=!" + COMPANY_SERVICE_TYPE_ADD_PRCNTGE4 + "!";
        _child1 += "/>";
    });
    _child1 += "</root>";
    document.getElementById('ctl00_ContentPlaceHolder1_HdnGridGroupxmlData').value = _child1;
}
function ReplaceSplCharactor(value) {
    value = value.replace(/>/g, '&gt;');
    value = value.replace(/</g, '&lt;');
    value = value.replace(/&/g, '&amp;');
    value = value.replace(/'/g, '&apos;');
    value = value.replace(/%/g, '&#37;');
    value = value.replace(/\"/g, '&quot;');
    value = value.replace(/\'/g, "&#39;");
    return value;
}

function SaveServiceType() {
    var CompanyId = document.getElementById('ctl00_ContentPlaceHolder1_ucCompanyCode__hiddenID').value;
    document.getElementById('ctl00_ContentPlaceHolder1_HdnGridXmlData').value = '';
    var _child = "";
    _child += "<root>";
    $('table[id$=gvServicesType] tr:has(td)').each(function (e) {
        _child += " <COMPANY_SERVICE_TYPE_CONCESSION ";
        var CMP_SRV_TYPE_ID = $(this).closest('tr').find('[id*=hdnautoid]').val();
        var SERVICE_TYPE_REV_NO = $(this).closest('tr').find('[id*=hdnrevno]').val();
        var SERVICE_TYPE_ID = $(this).closest('tr').find('[id*=hdnServiceTypID]').val();
        var SERVICE_TYPE_NAME = $(this).closest('tr').find('[id*=lblServicetype]').text();
        var COMPANY_SERVICE_TYPE_PRIORITY1 = $(this).closest('tr').find('input[type=text][id*=txtpririty1]').val();
        var COMPANY_SERVICE_TYPE_PRIORITY2 = $(this).closest('tr').find('input[type=text][id*=txtpririty2]').val();
        var COMPANY_SERVICE_TYPE_PRIORITY3 = $(this).closest('tr').find('input[type=text][id*=txtpririty3]').val();
        var COMPANY_SERVICE_TYPE_DEFAULT = $(this).closest('tr').find('input[type=text][id*=txtpririty4]').val();
        var COMPANY_SERVICE_TYPE_ADD_PRCNTGE1 = $(this).closest('tr').find('input[type=text][id*=txtAddpririty1]').val();
        var COMPANY_SERVICE_TYPE_ADD_PRCNTGE2 = $(this).closest('tr').find('input[type=text][id*=txtAddpririty2]').val();
        var COMPANY_SERVICE_TYPE_ADD_PRCNTGE3 = $(this).closest('tr').find('input[type=text][id*=txtAddpririty3]').val();
        var COMPANY_SERVICE_TYPE_ADD_PRCNTGE4 = $(this).closest('tr').find('input[type=text][id*=txtAddpririty4]').val();
        CMP_SRV_TYPE_ID = CMP_SRV_TYPE_ID;
        SERVICE_TYPE_REV_NO = SERVICE_TYPE_REV_NO;
        SERVICE_TYPE_ID = SERVICE_TYPE_ID;
        SERVICE_TYPE_NAME = typeof SERVICE_TYPE_NAME == "string" ? (SERVICE_TYPE_NAME.trim() == "" ? "" : SERVICE_TYPE_NAME) : (typeof SERVICE_TYPE_NAME == "number" ? SERVICE_TYPE_NAME : "");
        COMPANY_SERVICE_TYPE_PRIORITY1 = typeof COMPANY_SERVICE_TYPE_PRIORITY1 == "string" ? (COMPANY_SERVICE_TYPE_PRIORITY1.trim() == "0" ? "0" : COMPANY_SERVICE_TYPE_PRIORITY1) : (typeof COMPANY_SERVICE_TYPE_PRIORITY1 == "number" ? COMPANY_SERVICE_TYPE_PRIORITY1 : "0");
        COMPANY_SERVICE_TYPE_PRIORITY2 = typeof COMPANY_SERVICE_TYPE_PRIORITY2 == "string" ? (COMPANY_SERVICE_TYPE_PRIORITY2.trim() == "0" ? "0" : COMPANY_SERVICE_TYPE_PRIORITY2) : (typeof COMPANY_SERVICE_TYPE_PRIORITY2 == "number" ? COMPANY_SERVICE_TYPE_PRIORITY2 : "0");
        COMPANY_SERVICE_TYPE_PRIORITY3 = typeof COMPANY_SERVICE_TYPE_PRIORITY3 == "string" ? (COMPANY_SERVICE_TYPE_PRIORITY3.trim() == "0" ? "0" : COMPANY_SERVICE_TYPE_PRIORITY3) : (typeof COMPANY_SERVICE_TYPE_PRIORITY2 == "number" ? COMPANY_SERVICE_TYPE_PRIORITY3 : "0");
        COMPANY_SERVICE_TYPE_DEFAULT = typeof COMPANY_SERVICE_TYPE_DEFAULT == "string" ? (COMPANY_SERVICE_TYPE_DEFAULT.trim() == "" ? "" : COMPANY_SERVICE_TYPE_DEFAULT) : (typeof COMPANY_SERVICE_TYPE_DEFAULT == "number" ? COMPANY_SERVICE_TYPE_DEFAULT : "");
        COMPANY_SERVICE_TYPE_ADD_PRCNTGE1 = COMPANY_SERVICE_TYPE_ADD_PRCNTGE1 == "" ? "0" : COMPANY_SERVICE_TYPE_ADD_PRCNTGE1;
        COMPANY_SERVICE_TYPE_ADD_PRCNTGE2 = COMPANY_SERVICE_TYPE_ADD_PRCNTGE2 == "" ? "0" : COMPANY_SERVICE_TYPE_ADD_PRCNTGE2;
        COMPANY_SERVICE_TYPE_ADD_PRCNTGE3 = COMPANY_SERVICE_TYPE_ADD_PRCNTGE3 == "" ? "0" : COMPANY_SERVICE_TYPE_ADD_PRCNTGE3;
        COMPANY_SERVICE_TYPE_ADD_PRCNTGE4 = COMPANY_SERVICE_TYPE_ADD_PRCNTGE4 == "" ? "0" : COMPANY_SERVICE_TYPE_ADD_PRCNTGE4;
        _child += " CMP_SRV_TYPE_ID=!" + CMP_SRV_TYPE_ID + "!";
        _child += " SERVICE_TYPE_REV_NO=!" + SERVICE_TYPE_REV_NO + "!";
        _child += " SERVICE_TYPE_NAME=!" + ReplaceSplCharactor(SERVICE_TYPE_NAME) + "!";
        _child += " SERVICE_TYPE_ID=!" + SERVICE_TYPE_ID + "!";
        _child += " COMPANY_SERVICE_TYPE_PRIORITY1=!" + COMPANY_SERVICE_TYPE_PRIORITY1 + "!";
        _child += " COMPANY_SERVICE_TYPE_PRIORITY2=!" + COMPANY_SERVICE_TYPE_PRIORITY2 + "!";
        _child += " COMPANY_SERVICE_TYPE_PRIORITY3=!" + COMPANY_SERVICE_TYPE_PRIORITY3 + "!";
        _child += " COMPANY_SERVICE_TYPE_DEFAULT=!" + COMPANY_SERVICE_TYPE_DEFAULT + "!";
        _child += " CONCESSION_LEVEL=!" + 1 + "!";
        _child += " SERVICE_GROUP_ID=!" + 0 + "!";
        _child += " COMPANY_ID=!" + CompanyId + "!";

        _child += " RISE_PECENT1=!" + COMPANY_SERVICE_TYPE_ADD_PRCNTGE1 + "!";
        _child += " RISE_PECENT2=!" + COMPANY_SERVICE_TYPE_ADD_PRCNTGE2 + "!";
        _child += " RISE_PECENT3=!" + COMPANY_SERVICE_TYPE_ADD_PRCNTGE3 + "!";
        _child += " RISE_PERCENT=!" + COMPANY_SERVICE_TYPE_ADD_PRCNTGE4 + "!";
        _child += "/>";
    });

    _child += "</root>";
    document.getElementById('ctl00_ContentPlaceHolder1_HdnGridXmlData').value = _child;
}
var _controls = null;
var _chkValidation = true;
function OnPageValidation() {
    var ClientName = $('#ctl00_ContentPlaceHolder1_hdnClientName').val();
    _chkValidation = true;
    _controls = new Array();
    _controls[0] = 'ctl00_ContentPlaceHolder1_ucCompanyCode_txtSearchControl';
    var b = document.getElementById('ctl00_ContentPlaceHolder1_hdnShowIPoptions').value;
    if (b == 'True') {
    }
    if ($('[id$=rbTariffPrio_0]').prop('checked')) {
    }
    else
        if ($('[id$=rbTariffPrio_1]').prop('checked')) {
        }
        else
            if ($('[id$=rbTariffPrio_1]').prop('checked')) {

                return OnValidation();
            }
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


function OnItemSelection(sender, eventArgs) {
    var flag = false;
    var result = eval('(' + eventArgs.get_value() + ')');
    if (result != '') {
        var txtSerchTextBox = sender._id.split('_')[0] + '_' + sender._id.split('_')[1] + '_' + sender._id.split('_')[2] + '_' + sender._id.split('_')[3] + '_' + sender._id.split('_')[4] + '_' + sender._id.split('_')[5] + '_txtSearchControl';
        var hdnid = sender._id.split('_')[0] + '_' + sender._id.split('_')[1] + '_' + sender._id.split('_')[2] + '_' + sender._id.split('_')[3] + '_' + sender._id.split('_')[4] + '_' + sender._id.split('_')[5] + '__hiddenID';
        var tarifcode = sender._id.split('_')[0] + '_' + sender._id.split('_')[1] + '_' + sender._id.split('_')[2] + '_' + sender._id.split('_')[3] + '_' + sender._id.split('_')[4] + '_txtTariffName';

        document.getElementById(hdnid).value = result.Value;
        document.getElementById(txtSerchTextBox).value = result.Text;
        document.getElementById(tarifcode).value = result.TARIFF_CD;

        if (document.getElementById(txtSerchTextBox) == document.getElementById("ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_ucTariff1_ucTarriff_txtSearchControl"))
            flag = IPpriority1();
        else if (document.getElementById(txtSerchTextBox) == document.getElementById("ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_ucTariff2_ucTarriff_txtSearchControl"))
            flag = IPpriority2();
        else if (document.getElementById(txtSerchTextBox) == document.getElementById("ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_ucTariff3_ucTarriff_txtSearchControl"))
            flag = IPpriority_T3();
        else if (document.getElementById(txtSerchTextBox) == document.getElementById("ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_ucTariffDefault_ucTarriff_txtSearchControl"))
            flag = IPDefautPriority();

        else if (document.getElementById(txtSerchTextBox) == document.getElementById("ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_GenericGrid1_ucTarriff_txtSearchControl"))
            flag = OP_Priority1();
        else if (document.getElementById(txtSerchTextBox) == document.getElementById("ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_GenericGrid2_ucTarriff_txtSearchControl"))
            flag = OP_Priority2();
        else if (document.getElementById(txtSerchTextBox) == document.getElementById("ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_GenericGrid3_ucTarriff_txtSearchControl"))
            flag = OP_Priority3();
        else if (document.getElementById(txtSerchTextBox) == document.getElementById("ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_GenericGrid4_ucTarriff_txtSearchControl"))
            flag = OP_DefaultPriority();
    }
    return flag;


}

function popupShow(ctype, p) {
    document.getElementById('ctl00_ContentPlaceHolder1_hdnPriory').value = p;
    document.getElementById('ctl00_ContentPlaceHolder1_htnOporIP').value = ctype;
    $find('ctl00_ContentPlaceHolder1__popup').show();
    return false;
}

function AssignValues(_tariff_cd, _tariff_name, _tariff_id) {
    var priority = document.getElementById('ctl00_ContentPlaceHolder1_hdnPriory').value;
    var converageFor = document.getElementById('ctl00_ContentPlaceHolder1_htnOporIP').value;
    switch (priority) {
        case "1":
            if (converageFor == 'IP') {
                document.getElementById("ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtIPTariff1_txtSearchControl").value = _tariff_name;
                document.getElementById("ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtIPtariff1_Cd1").value = _tariff_cd;
                document.getElementById("ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtIPTariff1__hiddenID").value = _tariff_id;
                IP_Existingpriority();
            }
            else
                if (converageFor == 'OP') {
                    document.getElementById("ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtOP_tarif1_txtSearchControl").value = _tariff_name;
                    document.getElementById("ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtTarif1_OPCD1").value = _tariff_cd;
                    document.getElementById("ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtOP_tarif1__hiddenID").value = _tariff_id;
                    OPExistingpriority();
                }
            break;

        case "2":
            if (converageFor == 'IP') {
                document.getElementById("ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtIPTariff2_txtSearchControl").value = _tariff_name;
                document.getElementById("ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtIPtariff2_Cd2").value = _tariff_cd;
                document.getElementById("ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtIPTariff2__hiddenID").value = _tariff_id;
                IP_Existingpriority();
            }
            else
                if (converageFor == 'OP') {
                    document.getElementById("ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtOP_tarif2_txtSearchControl").value = _tariff_name;
                    document.getElementById("ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtTarif2_OPCD2").value = _tariff_cd;
                    document.getElementById("ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtOP_tarif2__hiddenID").value = _tariff_id;
                    OPExistingpriority();
                }
            break;

        case "3":
            if (converageFor == 'IP') {
                document.getElementById("ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtIPTariff3_txtSearchControl").value = _tariff_name;
                document.getElementById("ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtIPtariff3_Cd3").value = _tariff_cd;
                document.getElementById("ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtIPTariff3__hiddenID").value = _tariff_id;
                IP_Existingpriority();
            }
            else
                if (converageFor == 'OP') {
                    document.getElementById("ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtOP_tarif3_txtSearchControl").value = _tariff_name;
                    document.getElementById("ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtTarif3_OPCD3").value = _tariff_cd;
                    document.getElementById("ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtOP_tarif3__hiddenID").value = _tariff_id;
                    OPExistingpriority();

                }
            break;

        case "4":
            if (converageFor == 'IP') {
                document.getElementById("ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtIPTariff4_txtSearchControl").value = _tariff_name;
                document.getElementById("ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtIPtariff4_Cd4").value = _tariff_cd;
                document.getElementById("ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtIPTariff4__hiddenID").value = _tariff_id;
                // IP_Existingpriority();
            }
            else
                if (converageFor == 'OP') {
                    document.getElementById("ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtOP_tarif4_txtSearchControl").value = _tariff_name;
                    document.getElementById("ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtTarif4_OPCD4").value = _tariff_cd;
                    document.getElementById("ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtOP_tarif4__hiddenID").value = _tariff_id;
                    //OPExistingpriority();
                }
            break;


    }

    $find('ctl00_ContentPlaceHolder1__popup').hide();
    return false;

}


function IP_Existingpriority() {

    var IPTariff1 = document.getElementById("ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtIPTariff1__hiddenID");
    var IPTariff2 = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtIPTariff2__hiddenID');
    var IPTariff3 = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtIPTariff3__hiddenID');
    var IPDefaultTarif = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtIPTariff4__hiddenID');

    var Tariffs = document.getElementById('ctl00_ContentPlaceHolder1_hdnPriory');
    var Type = document.getElementById('ctl00_ContentPlaceHolder1_htnOporIP');

    if ((Tariffs.value == '1') && (Type.value == 'IP')) {
        if (IPTariff1.value != '') {
            if ((IPTariff1.value == IPTariff2.value) || (IPTariff1.value == IPTariff3.value)) {
                $(".stoast").toastText("warning", "Tariff Name already exist", 5, 3);
                document.getElementById("ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtIPTariff1_txtSearchControl").value = '';
                document.getElementById("ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtIPtariff1_Cd1").value = '';
                document.getElementById("ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtIPTariff1__hiddenID").value = '';
                return false;
            }
        }
    }
    else if ((Tariffs.value == '2') && (Type.value == 'IP')) {
        if (IPTariff2.value != '') {
            if ((IPTariff2.value == IPTariff1.value) || (IPTariff2.value == IPTariff3.value) || (IPTariff2.value == IPDefaultTarif.value)) {
                $(".stoast").toastText("warning", "Tariff Name already exist", 5, 3);
                document.getElementById("ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtIPTariff2_txtSearchControl").value = '';
                document.getElementById("ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtIPtariff2_Cd2").value = '';
                document.getElementById("ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtIPTariff2__hiddenID").value = '';
                return false;

            }
        }
    }
    else if ((Tariffs.value == '3') && (Type.value == 'IP')) {
        if (IPTariff3.value != '') {
            if ((IPTariff3.value == IPTariff1.value) || (IPTariff3.value == IPTariff2.value) || (IPTariff3.value == IPDefaultTarif.value)) {
                $(".stoast").toastText("warning", "Tariff Name already exist", 5, 3);
                document.getElementById("ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtIPTariff3_txtSearchControl").value = '';
                document.getElementById("ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtIPtariff3_Cd3").value = '';
                document.getElementById("ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtIPTariff3__hiddenID").value = '';
                return false;
            }
        }
    }
    else if ((Tariffs.value == '4') && (Type.value == 'IP')) {
        if (IPDefaultTarif.value != '') {
            if ((IPDefaultTarif.value == IPTariff1.value) || (IPDefaultTarif.value == IPTariff2.value) || (IPDefaultTarif.value == IPTariff3.value)) {
                $(".stoast").toastText("warning", "Tariff Name already exist", 5, 3);
                document.getElementById("ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtIPTariff4_txtSearchControl").value = '';
                document.getElementById("ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtIPtariff4_Cd4").value = '';
                document.getElementById("ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtIPTariff4__hiddenID").value = '';
                return false;
            }
        }
    }


} //end function


function OPExistingpriority() {
    var OPTariff1 = document.getElementById("ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtOP_tarif1__hiddenID");
    var OPTariff2 = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtOP_tarif2__hiddenID');
    var OPTariff3 = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtOP_tarif3__hiddenID');
    var OPDefaultTarif = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtOP_tarif4__hiddenID');
    var Tariffs = document.getElementById('ctl00_ContentPlaceHolder1_hdnPriory');
    var Type = document.getElementById('ctl00_ContentPlaceHolder1_htnOporIP');

    if ((Tariffs.value == '1') && (Type.value == 'OP')) {
        if (OPTariff1.value != '') {
            if ((OPTariff1.value == OPTariff2.value) || (OPTariff1.value == OPTariff3.value)) {
                $(".stoast").toastText("warning", "Tariff Name already exist", 5, 3);
                document.getElementById("ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtOP_tarif1_txtSearchControl").value = '';
                document.getElementById("ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtTarif1_OPCD1").value = '';
                document.getElementById("ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtOP_tarif1__hiddenID").value = '';
                return false;
            }
        }
    }
    else if ((Tariffs.value == '2') && (Type.value == 'OP')) {
        if (OPTariff2.value != '') {
            if ((OPTariff2.value == OPTariff1.value) || (OPTariff2.value == OPTariff3.value) || (OPTariff2.value == OPDefaultTarif.value)) {
                $(".stoast").toastText("warning", "Tariff Name already exist", 5, 3);
                document.getElementById("ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtOP_tarif2_txtSearchControl").value = '';
                document.getElementById("ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtTarif2_OPCD2").value = '';
                document.getElementById("ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtOP_tarif2__hiddenID").value = '';
                return false;
            }
        }
    }
    else if ((Tariffs.value == '3') && (Type.value == 'OP')) {
        if (OPTariff3.value != '') {
            if ((OPTariff3.value == OPTariff1.value) || (OPTariff3.value == OPTariff2.value) || (OPTariff3.value == OPDefaultTarif.value)) {
                $(".stoast").toastText("warning", "Tariff Name already exist", 5, 3);
                document.getElementById("ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtOP_tarif3_txtSearchControl").value = '';
                document.getElementById("ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtTarif3_OPCD3").value = '';
                document.getElementById("ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtOP_tarif3__hiddenID").value = '';
                return false;
            }
        }
    }
    else if ((Tariffs.value == '4') && (Type.value == 'OP')) {
        if (OPDefaultTarif.value != '') {
            if ((OPDefaultTarif.value == OPTariff1.value) || (OPDefaultTarif.value == OPTariff2.value) || (OPDefaultTarif.value == OPTariff3.value)) {
                $(".stoast").toastText("warning", "Tariff Name already exist", 5, 3);
                document.getElementById("ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtOP_tarif4_txtSearchControl").value = '';
                document.getElementById("ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtTarif4_OPCD4").value = '';
                document.getElementById("ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtOP_tarif4__hiddenID").value = '';
                return false;
            }
        }
    }


} //end function

function UpdateSerType() {
    if (parseFloat($('#ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtTarifDis1_IP').val()) != "0") {
        return false;
    }
    if (parseFloat($('#ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtTarifDis2_IP').val()) != "0") {
        return false;
    }
    if (parseFloat($('#ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtTarifDis3_IP').val()) != "0") {
        return false;
    }
    if (parseFloat($('#ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtTarifDis4_IP').val()) != "0") {
        return false;
    }
    var hd4 = $('#ctl00_ContentPlaceHolder1_hp4').val();
    hd4 = hd4.split(',');
    var hd5 = $('#ctl00_ContentPlaceHolder1_hp5').val();
    hd5 = hd5.split(',');
    var hd6 = $('#ctl00_ContentPlaceHolder1_hp6').val();
    hd6 = hd6.split(',');

    var hd7 = $('#ctl00_ContentPlaceHolder1_hp7').val();
    hd7 = hd7.split(',');

    var hd8 = $('#ctl00_ContentPlaceHolder1_hp8').val();
    hd8 = hd8.split(',');

    var hd9 = $('#ctl00_ContentPlaceHolder1_hp9').val();
    hd9 = hd9.split(',');

    var hd10 = $('#ctl00_ContentPlaceHolder1_hp10').val();
    hd10 = hd10.split(',');

    $('#ctl00_ContentPlaceHolder1_TabContainer1_TabPane22_gvServicesType_ctl02_txtpririty4').val($('#ctl00_ContentPlaceHolder1_hp1').val());
    $('#ctl00_ContentPlaceHolder1_TabContainer1_TabPane22_gvServicesType_ctl05_txtpririty4').val($('#ctl00_ContentPlaceHolder1_hp2').val());
    $('#ctl00_ContentPlaceHolder1_TabContainer1_TabPane22_gvServicesType_ctl11_txtpririty4').val($('#ctl00_ContentPlaceHolder1_hp3').val());


    $('#ctl00_ContentPlaceHolder1_TabContainer1_TabPane22_gvServicesType_ctl03_txtpririty1').val(hd4[0]);
    $('#ctl00_ContentPlaceHolder1_TabContainer1_TabPane22_gvServicesType_ctl03_txtpririty2').val(hd4[1]);
    $('#ctl00_ContentPlaceHolder1_TabContainer1_TabPane22_gvServicesType_ctl03_txtpririty3').val(hd4[2]);
    $('#ctl00_ContentPlaceHolder1_TabContainer1_TabPane22_gvServicesType_ctl03_txtpririty4').val(hd4[3]);


    $('#ctl00_ContentPlaceHolder1_TabContainer1_TabPane22_gvServicesType_ctl04_txtpririty1').val(hd5[0]);
    $('#ctl00_ContentPlaceHolder1_TabContainer1_TabPane22_gvServicesType_ctl04_txtpririty2').val(hd5[1]);
    $('#ctl00_ContentPlaceHolder1_TabContainer1_TabPane22_gvServicesType_ctl04_txtpririty3').val(hd5[2]);
    $('#ctl00_ContentPlaceHolder1_TabContainer1_TabPane22_gvServicesType_ctl04_txtpririty4').val(hd5[3]);


    $('#ctl00_ContentPlaceHolder1_TabContainer1_TabPane22_gvServicesType_ctl06_txtpririty1').val(hd6[0]);
    $('#ctl00_ContentPlaceHolder1_TabContainer1_TabPane22_gvServicesType_ctl06_txtpririty2').val(hd6[1]);
    $('#ctl00_ContentPlaceHolder1_TabContainer1_TabPane22_gvServicesType_ctl06_txtpririty3').val(hd6[2]);
    $('#ctl00_ContentPlaceHolder1_TabContainer1_TabPane22_gvServicesType_ctl06_txtpririty4').val(hd6[3]);


    $('#ctl00_ContentPlaceHolder1_TabContainer1_TabPane22_gvServicesType_ctl07_txtpririty1').val(hd7[0]);
    $('#ctl00_ContentPlaceHolder1_TabContainer1_TabPane22_gvServicesType_ctl07_txtpririty2').val(hd7[1]);
    $('#ctl00_ContentPlaceHolder1_TabContainer1_TabPane22_gvServicesType_ctl07_txtpririty3').val(hd7[2]);
    $('#ctl00_ContentPlaceHolder1_TabContainer1_TabPane22_gvServicesType_ctl07_txtpririty4').val(hd7[3]);

    $('#ctl00_ContentPlaceHolder1_TabContainer1_TabPane22_gvServicesType_ctl08_txtpririty1').val(hd8[0]);
    $('#ctl00_ContentPlaceHolder1_TabContainer1_TabPane22_gvServicesType_ctl08_txtpririty2').val(hd8[1]);
    $('#ctl00_ContentPlaceHolder1_TabContainer1_TabPane22_gvServicesType_ctl08_txtpririty3').val(hd8[2]);
    $('#ctl00_ContentPlaceHolder1_TabContainer1_TabPane22_gvServicesType_ctl08_txtpririty4').val(hd8[3]);

    $('#ctl00_ContentPlaceHolder1_TabContainer1_TabPane22_gvServicesType_ctl09_txtpririty1').val(hd9[0]);
    $('#ctl00_ContentPlaceHolder1_TabContainer1_TabPane22_gvServicesType_ctl09_txtpririty2').val(hd9[1]);
    $('#ctl00_ContentPlaceHolder1_TabContainer1_TabPane22_gvServicesType_ctl09_txtpririty3').val(hd9[2]);
    $('#ctl00_ContentPlaceHolder1_TabContainer1_TabPane22_gvServicesType_ctl09_txtpririty4').val(hd9[3]);

    $('#ctl00_ContentPlaceHolder1_TabContainer1_TabPane22_gvServicesType_ctl10_txtpririty1').val(hd10[0]);
    $('#ctl00_ContentPlaceHolder1_TabContainer1_TabPane22_gvServicesType_ctl10_txtpririty2').val(hd10[1]);
    $('#ctl00_ContentPlaceHolder1_TabContainer1_TabPane22_gvServicesType_ctl10_txtpririty3').val(hd10[2]);
    $('#ctl00_ContentPlaceHolder1_TabContainer1_TabPane22_gvServicesType_ctl10_txtpririty4').val(hd10[3]);
}
function cleartxtbox() {
    $('#ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtTarifDis1_IP').val('0');
    $('#ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtTarifDis2_IP').val('0');
    $('#ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtTarifDis3_IP').val('0');
    $('#ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtTarifDis4_IP').val('0');
}

function chkprice(obj) {
    $('#ctl00_ContentPlaceHolder1_hpt1').val($('#ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtTarifDis1_IP').val() + ',' + $('#ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtTarifDis2_IP').val() + ',' + $('#ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtTarifDis3_IP').val() + ',' + $('#ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtTarifDis4_IP').val());
    UpdateSerType();
}

function cleartxtpriority(obj) {
    if ($(obj).val() != "0") {
        cleartxtbox();
    }
}

function DisableSerType() {
    $("table[id$=gvServicesType] tr:has(td)").each(function (e) {
        var hdnsrvtypeid = $(this).closest('tr').find("input[type=hidden][id*=hdnServiceTypID]").val();
    });
    HoldValues();
}
function HoldValues() {
    if (document.getElementById('ctl00_ContentPlaceHolder1_rbTariffPrio' + '_0').checked == true || document.getElementById('ctl00_ContentPlaceHolder1_rbTariffPrio' + '_2').checked == true) {
        $('#ctl00_ContentPlaceHolder1_TabContainer1_TabPane22_gvServicesType_ctl02_txtpririty4').val() == '' ? 0 : $('#ctl00_ContentPlaceHolder1_TabContainer1_TabPane22_gvServicesType_ctl02_txtpririty4').val();

        $('#ctl00_ContentPlaceHolder1_TabContainer1_TabPane22_gvServicesType_ctl03_txtpririty1').val() == '' ? 0 : $('#ctl00_ContentPlaceHolder1_TabContainer1_TabPane22_gvServicesType_ctl03_txtpririty1').val();
        $('#ctl00_ContentPlaceHolder1_TabContainer1_TabPane22_gvServicesType_ctl03_txtpririty2').val() == '' ? 0 : $('#ctl00_ContentPlaceHolder1_TabContainer1_TabPane22_gvServicesType_ctl03_txtpririty2').val();
        $('#ctl00_ContentPlaceHolder1_TabContainer1_TabPane22_gvServicesType_ctl03_txtpririty3').val() == '' ? 0 : $('#ctl00_ContentPlaceHolder1_TabContainer1_TabPane22_gvServicesType_ctl03_txtpririty3').val();
        $('#ctl00_ContentPlaceHolder1_TabContainer1_TabPane22_gvServicesType_ctl03_txtpririty4').val() == '' ? 0 : $('#ctl00_ContentPlaceHolder1_TabContainer1_TabPane22_gvServicesType_ctl03_txtpririty4').val();

        $('#ctl00_ContentPlaceHolder1_TabContainer1_TabPane22_gvServicesType_ctl04_txtpririty1').val() == '' ? 0 : $('#ctl00_ContentPlaceHolder1_TabContainer1_TabPane22_gvServicesType_ctl04_txtpririty1').val();
        $('#ctl00_ContentPlaceHolder1_TabContainer1_TabPane22_gvServicesType_ctl04_txtpririty2').val() == '' ? 0 : $('#ctl00_ContentPlaceHolder1_TabContainer1_TabPane22_gvServicesType_ctl04_txtpririty2').val();
        $('#ctl00_ContentPlaceHolder1_TabContainer1_TabPane22_gvServicesType_ctl04_txtpririty3').val() == '' ? 0 : $('#ctl00_ContentPlaceHolder1_TabContainer1_TabPane22_gvServicesType_ctl04_txtpririty3').val();
        $('#ctl00_ContentPlaceHolder1_TabContainer1_TabPane22_gvServicesType_ctl04_txtpririty4').val() == '' ? 0 : $('#ctl00_ContentPlaceHolder1_TabContainer1_TabPane22_gvServicesType_ctl04_txtpririty4').val();

        $('#ctl00_ContentPlaceHolder1_TabContainer1_TabPane22_gvServicesType_ctl05_txtpririty4').val() == '' ? 0 : $('#ctl00_ContentPlaceHolder1_TabContainer1_TabPane22_gvServicesType_ctl05_txtpririty4').val();

        $('#ctl00_ContentPlaceHolder1_TabContainer1_TabPane22_gvServicesType_ctl06_txtpririty1').val() == '' ? 0 : $('#ctl00_ContentPlaceHolder1_TabContainer1_TabPane22_gvServicesType_ctl06_txtpririty1').val();
        $('#ctl00_ContentPlaceHolder1_TabContainer1_TabPane22_gvServicesType_ctl06_txtpririty2').val() == '' ? 0 : $('#ctl00_ContentPlaceHolder1_TabContainer1_TabPane22_gvServicesType_ctl06_txtpririty2').val();
        $('#ctl00_ContentPlaceHolder1_TabContainer1_TabPane22_gvServicesType_ctl06_txtpririty3').val() == '' ? 0 : $('#ctl00_ContentPlaceHolder1_TabContainer1_TabPane22_gvServicesType_ctl06_txtpririty3').val();
        $('#ctl00_ContentPlaceHolder1_TabContainer1_TabPane22_gvServicesType_ctl06_txtpririty4').val() == '' ? 0 : $('#ctl00_ContentPlaceHolder1_TabContainer1_TabPane22_gvServicesType_ctl06_txtpririty4').val();

        $('#ctl00_ContentPlaceHolder1_TabContainer1_TabPane22_gvServicesType_ctl07_txtpririty1').val() == '' ? 0 : $('#ctl00_ContentPlaceHolder1_TabContainer1_TabPane22_gvServicesType_ctl07_txtpririty1').val();
        $('#ctl00_ContentPlaceHolder1_TabContainer1_TabPane22_gvServicesType_ctl07_txtpririty2').val() == '' ? 0 : $('#ctl00_ContentPlaceHolder1_TabContainer1_TabPane22_gvServicesType_ctl07_txtpririty2').val();
        $('#ctl00_ContentPlaceHolder1_TabContainer1_TabPane22_gvServicesType_ctl07_txtpririty3').val() == '' ? 0 : $('#ctl00_ContentPlaceHolder1_TabContainer1_TabPane22_gvServicesType_ctl07_txtpririty3').val();
        $('#ctl00_ContentPlaceHolder1_TabContainer1_TabPane22_gvServicesType_ctl07_txtpririty4').val() == '' ? 0 : $('#ctl00_ContentPlaceHolder1_TabContainer1_TabPane22_gvServicesType_ctl07_txtpririty4').val();

        $('#ctl00_ContentPlaceHolder1_TabContainer1_TabPane22_gvServicesType_ctl08_txtpririty1').val() == '' ? 0 : $('#ctl00_ContentPlaceHolder1_TabContainer1_TabPane22_gvServicesType_ctl08_txtpririty1').val();
        $('#ctl00_ContentPlaceHolder1_TabContainer1_TabPane22_gvServicesType_ctl08_txtpririty2').val() == '' ? 0 : $('#ctl00_ContentPlaceHolder1_TabContainer1_TabPane22_gvServicesType_ctl08_txtpririty2').val();
        $('#ctl00_ContentPlaceHolder1_TabContainer1_TabPane22_gvServicesType_ctl08_txtpririty3').val() == '' ? 0 : $('#ctl00_ContentPlaceHolder1_TabContainer1_TabPane22_gvServicesType_ctl08_txtpririty3').val();
        $('#ctl00_ContentPlaceHolder1_TabContainer1_TabPane22_gvServicesType_ctl08_txtpririty4').val() == '' ? 0 : $('#ctl00_ContentPlaceHolder1_TabContainer1_TabPane22_gvServicesType_ctl08_txtpririty4').val();

        $('#ctl00_ContentPlaceHolder1_TabContainer1_TabPane22_gvServicesType_ctl09_txtpririty1').val() == '' ? 0 : $('#ctl00_ContentPlaceHolder1_TabContainer1_TabPane22_gvServicesType_ctl09_txtpririty1').val();
        $('#ctl00_ContentPlaceHolder1_TabContainer1_TabPane22_gvServicesType_ctl09_txtpririty2').val() == '' ? 0 : $('#ctl00_ContentPlaceHolder1_TabContainer1_TabPane22_gvServicesType_ctl09_txtpririty2').val();
        $('#ctl00_ContentPlaceHolder1_TabContainer1_TabPane22_gvServicesType_ctl09_txtpririty3').val() == '' ? 0 : $('#ctl00_ContentPlaceHolder1_TabContainer1_TabPane22_gvServicesType_ctl09_txtpririty3').val();
        $('#ctl00_ContentPlaceHolder1_TabContainer1_TabPane22_gvServicesType_ctl09_txtpririty4').val() == '' ? 0 : $('#ctl00_ContentPlaceHolder1_TabContainer1_TabPane22_gvServicesType_ctl09_txtpririty4').val();

        $('#ctl00_ContentPlaceHolder1_TabContainer1_TabPane22_gvServicesType_ctl10_txtpririty1').val() == '' ? 0 : $('#ctl00_ContentPlaceHolder1_TabContainer1_TabPane22_gvServicesType_ctl10_txtpririty1').val();
        $('#ctl00_ContentPlaceHolder1_TabContainer1_TabPane22_gvServicesType_ctl10_txtpririty2').val() == '' ? 0 : $('#ctl00_ContentPlaceHolder1_TabContainer1_TabPane22_gvServicesType_ctl10_txtpririty2').val();
        $('#ctl00_ContentPlaceHolder1_TabContainer1_TabPane22_gvServicesType_ctl10_txtpririty3').val() == '' ? 0 : $('#ctl00_ContentPlaceHolder1_TabContainer1_TabPane22_gvServicesType_ctl10_txtpririty3').val();
        $('#ctl00_ContentPlaceHolder1_TabContainer1_TabPane22_gvServicesType_ctl10_txtpririty4').val() == '' ? 0 : $('#ctl00_ContentPlaceHolder1_TabContainer1_TabPane22_gvServicesType_ctl10_txtpririty4').val();

        $('#ctl00_ContentPlaceHolder1_TabContainer1_TabPane22_gvServicesType_ctl11_txtpririty4').val() == '' ? 0 : $('#ctl00_ContentPlaceHolder1_TabContainer1_TabPane22_gvServicesType_ctl11_txtpririty4').val();


        $('#ctl00_ContentPlaceHolder1_hpt1').val($('#ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtTarifDis1_IP').val() + ',' + $('#ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtTarifDis2_IP').val() + ',' + $('#ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtTarifDis3_IP').val() + ',' + $('#ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtTarifDis4_IP').val());


        if (hdnsrvtypeid = '1') {
            $('#ctl00_ContentPlaceHolder1_hp1').val($('#ctl00_ContentPlaceHolder1_TabContainer1_TabPane22_gvServicesType_ctl02_txtpririty4').val());
        }
        if (hdnsrvtypeid = '4') {
            $('#ctl00_ContentPlaceHolder1_hp2').val($('#ctl00_ContentPlaceHolder1_TabContainer1_TabPane22_gvServicesType_ctl05_txtpririty4').val());
        }
        if (hdnsrvtypeid = '12') {
            $('#ctl00_ContentPlaceHolder1_hp3').val($('#ctl00_ContentPlaceHolder1_TabContainer1_TabPane22_gvServicesType_ctl11_txtpririty4').val());
        }
        if (hdnsrvtypeid = '2') {
            $('#ctl00_ContentPlaceHolder1_hp4').val($('#ctl00_ContentPlaceHolder1_TabContainer1_TabPane22_gvServicesType_ctl03_txtpririty1').val() + ',' + $('#ctl00_ContentPlaceHolder1_TabContainer1_TabPane22_gvServicesType_ctl03_txtpririty2').val() + ',' + $('#ctl00_ContentPlaceHolder1_TabContainer1_TabPane22_gvServicesType_ctl03_txtpririty3').val() + ',' + $('#ctl00_ContentPlaceHolder1_TabContainer1_TabPane22_gvServicesType_ctl03_txtpririty4').val());
        }
        if (hdnsrvtypeid = '3') {
            $('#ctl00_ContentPlaceHolder1_hp5').val($('#ctl00_ContentPlaceHolder1_TabContainer1_TabPane22_gvServicesType_ctl04_txtpririty1').val() + ',' + $('#ctl00_ContentPlaceHolder1_TabContainer1_TabPane22_gvServicesType_ctl04_txtpririty2').val() + ',' + $('#ctl00_ContentPlaceHolder1_TabContainer1_TabPane22_gvServicesType_ctl04_txtpririty3').val() + ',' + $('#ctl00_ContentPlaceHolder1_TabContainer1_TabPane22_gvServicesType_ctl04_txtpririty4').val());
        }
        if (hdnsrvtypeid = '7') {
            $('#ctl00_ContentPlaceHolder1_hp6').val($('#ctl00_ContentPlaceHolder1_TabContainer1_TabPane22_gvServicesType_ctl06_txtpririty1').val() + ',' + $('#ctl00_ContentPlaceHolder1_TabContainer1_TabPane22_gvServicesType_ctl06_txtpririty2').val() + ',' + $('#ctl00_ContentPlaceHolder1_TabContainer1_TabPane22_gvServicesType_ctl06_txtpririty3').val() + ',' + $('#ctl00_ContentPlaceHolder1_TabContainer1_TabPane22_gvServicesType_ctl06_txtpririty4').val());
        }
        if (hdnsrvtypeid = '8') {
            $('#ctl00_ContentPlaceHolder1_hp7').val($('#ctl00_ContentPlaceHolder1_TabContainer1_TabPane22_gvServicesType_ctl07_txtpririty1').val() + ',' + $('#ctl00_ContentPlaceHolder1_TabContainer1_TabPane22_gvServicesType_ctl07_txtpririty2').val() + ',' + $('#ctl00_ContentPlaceHolder1_TabContainer1_TabPane22_gvServicesType_ctl07_txtpririty3').val() + ',' + $('#ctl00_ContentPlaceHolder1_TabContainer1_TabPane22_gvServicesType_ctl07_txtpririty4').val());
        }
        if (hdnsrvtypeid = '10') {
            $('#ctl00_ContentPlaceHolder1_hp8').val($('#ctl00_ContentPlaceHolder1_TabContainer1_TabPane22_gvServicesType_ctl08_txtpririty1').val() + ',' + $('#ctl00_ContentPlaceHolder1_TabContainer1_TabPane22_gvServicesType_ctl08_txtpririty2').val() + ',' + $('#ctl00_ContentPlaceHolder1_TabContainer1_TabPane22_gvServicesType_ctl08_txtpririty3').val() + ',' + $('#ctl00_ContentPlaceHolder1_TabContainer1_TabPane22_gvServicesType_ctl08_txtpririty4').val());
        }
        if (hdnsrvtypeid = '11') {
            $('#ctl00_ContentPlaceHolder1_hp9').val($('#ctl00_ContentPlaceHolder1_TabContainer1_TabPane22_gvServicesType_ctl09_txtpririty1').val() + ',' + $('#ctl00_ContentPlaceHolder1_TabContainer1_TabPane22_gvServicesType_ctl09_txtpririty2').val() + ',' + $('#ctl00_ContentPlaceHolder1_TabContainer1_TabPane22_gvServicesType_ctl09_txtpririty3').val() + ',' + $('#ctl00_ContentPlaceHolder1_TabContainer1_TabPane22_gvServicesType_ctl09_txtpririty4').val());
        }
        if (hdnsrvtypeid = '13') {
            $('#ctl00_ContentPlaceHolder1_hp10').val($('#ctl00_ContentPlaceHolder1_TabContainer1_TabPane22_gvServicesType_ctl10_txtpririty1').val() + ',' + $('#ctl00_ContentPlaceHolder1_TabContainer1_TabPane22_gvServicesType_ctl10_txtpririty2').val() + ',' + $('#ctl00_ContentPlaceHolder1_TabContainer1_TabPane22_gvServicesType_ctl10_txtpririty3').val() + ',' + $('#ctl00_ContentPlaceHolder1_TabContainer1_TabPane22_gvServicesType_ctl10_txtpririty4').val());
        }

    }
}

function EnableSerType() {
    $("table[id$=gvServicesType] tr:has(td)").each(function (e) {
        $(this).closest('tr').find('[id*=txtpririty1]')[0].disabled = false;
        $(this).closest('tr').find('[id*=txtpririty2]')[0].disabled = false;
        $(this).closest('tr').find('[id*=txtpririty3]')[0].disabled = false;
        $(this).closest('tr').find('[id*=txtpririty4]')[0].disabled = false;
    });
    DisableSerType();
}

function AssignServiceTypereload(obj) {



    var FlagCheckTariff = 'N';


    if (hdnsrvtypeid = '1') {
        $('#ctl00_ContentPlaceHolder1_hp1').val($('#ctl00_ContentPlaceHolder1_TabContainer1_TabPane22_gvServicesType_ctl02_txtpririty4').val());
    }
    if (hdnsrvtypeid = '4') {
        $('#ctl00_ContentPlaceHolder1_hp2').val($('#ctl00_ContentPlaceHolder1_TabContainer1_TabPane22_gvServicesType_ctl05_txtpririty4').val());
    }
    if (hdnsrvtypeid = '12') {
        $('#ctl00_ContentPlaceHolder1_hp3').val($('#ctl00_ContentPlaceHolder1_TabContainer1_TabPane22_gvServicesType_ctl11_txtpririty4').val());
    }
    if (hdnsrvtypeid = '2') {
        $('#ctl00_ContentPlaceHolder1_hp4').val($('#ctl00_ContentPlaceHolder1_TabContainer1_TabPane22_gvServicesType_ctl03_txtpririty1').val() + ',' + $('#ctl00_ContentPlaceHolder1_TabContainer1_TabPane22_gvServicesType_ctl03_txtpririty2').val() + ',' + $('#ctl00_ContentPlaceHolder1_TabContainer1_TabPane22_gvServicesType_ctl03_txtpririty3').val() + ',' + $('#ctl00_ContentPlaceHolder1_TabContainer1_TabPane22_gvServicesType_ctl03_txtpririty4').val());
    }
    if (hdnsrvtypeid = '3') {
        $('#ctl00_ContentPlaceHolder1_hp5').val($('#ctl00_ContentPlaceHolder1_TabContainer1_TabPane22_gvServicesType_ctl04_txtpririty1').val() + ',' + $('#ctl00_ContentPlaceHolder1_TabContainer1_TabPane22_gvServicesType_ctl04_txtpririty2').val() + ',' + $('#ctl00_ContentPlaceHolder1_TabContainer1_TabPane22_gvServicesType_ctl04_txtpririty3').val() + ',' + $('#ctl00_ContentPlaceHolder1_TabContainer1_TabPane22_gvServicesType_ctl04_txtpririty4').val());
    }
    if (hdnsrvtypeid = '7') {
        $('#ctl00_ContentPlaceHolder1_hp6').val($('#ctl00_ContentPlaceHolder1_TabContainer1_TabPane22_gvServicesType_ctl06_txtpririty1').val() + ',' + $('#ctl00_ContentPlaceHolder1_TabContainer1_TabPane22_gvServicesType_ctl06_txtpririty2').val() + ',' + $('#ctl00_ContentPlaceHolder1_TabContainer1_TabPane22_gvServicesType_ctl06_txtpririty3').val() + ',' + $('#ctl00_ContentPlaceHolder1_TabContainer1_TabPane22_gvServicesType_ctl06_txtpririty4').val());
    }
    if (hdnsrvtypeid = '8') {
        $('#ctl00_ContentPlaceHolder1_hp7').val($('#ctl00_ContentPlaceHolder1_TabContainer1_TabPane22_gvServicesType_ctl07_txtpririty1').val() + ',' + $('#ctl00_ContentPlaceHolder1_TabContainer1_TabPane22_gvServicesType_ctl07_txtpririty2').val() + ',' + $('#ctl00_ContentPlaceHolder1_TabContainer1_TabPane22_gvServicesType_ctl07_txtpririty3').val() + ',' + $('#ctl00_ContentPlaceHolder1_TabContainer1_TabPane22_gvServicesType_ctl07_txtpririty4').val());
    }
    if (hdnsrvtypeid = '10') {
        $('#ctl00_ContentPlaceHolder1_hp8').val($('#ctl00_ContentPlaceHolder1_TabContainer1_TabPane22_gvServicesType_ctl08_txtpririty1').val() + ',' + $('#ctl00_ContentPlaceHolder1_TabContainer1_TabPane22_gvServicesType_ctl08_txtpririty2').val() + ',' + $('#ctl00_ContentPlaceHolder1_TabContainer1_TabPane22_gvServicesType_ctl08_txtpririty3').val() + ',' + $('#ctl00_ContentPlaceHolder1_TabContainer1_TabPane22_gvServicesType_ctl08_txtpririty4').val());
    }
    if (hdnsrvtypeid = '11') {
        $('#ctl00_ContentPlaceHolder1_hp9').val($('#ctl00_ContentPlaceHolder1_TabContainer1_TabPane22_gvServicesType_ctl09_txtpririty1').val() + ',' + $('#ctl00_ContentPlaceHolder1_TabContainer1_TabPane22_gvServicesType_ctl09_txtpririty2').val() + ',' + $('#ctl00_ContentPlaceHolder1_TabContainer1_TabPane22_gvServicesType_ctl09_txtpririty3').val() + ',' + $('#ctl00_ContentPlaceHolder1_TabContainer1_TabPane22_gvServicesType_ctl09_txtpririty4').val());
    }
    if (hdnsrvtypeid = '13') {
        $('#ctl00_ContentPlaceHolder1_hp10').val($('#ctl00_ContentPlaceHolder1_TabContainer1_TabPane22_gvServicesType_ctl10_txtpririty1').val() + ',' + $('#ctl00_ContentPlaceHolder1_TabContainer1_TabPane22_gvServicesType_ctl10_txtpririty2').val() + ',' + $('#ctl00_ContentPlaceHolder1_TabContainer1_TabPane22_gvServicesType_ctl10_txtpririty3').val() + ',' + $('#ctl00_ContentPlaceHolder1_TabContainer1_TabPane22_gvServicesType_ctl10_txtpririty4').val());
    }

    var hpt1 = $('#ctl00_ContentPlaceHolder1_hpt1').val();
    hpt1 = hpt1.split(',');



    $("table[id*=gvServicesType] tr:has(td)").each(function (e) {

        if ($(this).closest('tr').find("[id*=txtpririty1]").val() != '' && $(this).closest('tr').find("[id*=txtpririty1]").val() != '0') {
            FlagCheckTariff = 'Y';
        }
        if ($(this).closest('tr').find("[id*=txtpririty2]").val() != '' && $(this).closest('tr').find("[id*=txtpririty2]").val() != '0') {
            FlagCheckTariff = 'Y';
        }
        if ($(this).closest('tr').find("[id*=txtpririty3]").val() != '' && $(this).closest('tr').find("[id*=txtpririty3]").val() != '0') {
            FlagCheckTariff = 'Y';
        }
        if ($(this).closest('tr').find("[id*=txtpririty4]").val() != '' && $(this).closest('tr').find("[id*=txtpririty4]").val() != '0') {
            FlagCheckTariff = 'Y';
        }
    });
    if (FlagCheckTariff == 'Y') {
        $('#ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtTarifDis1_IP').val(0);
        $('#ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtTarifDis2_IP').val(0);
        $('#ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtTarifDis3_IP').val(0);
        $('#ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtTarifDis4_IP').val(0);
    }
    else {
        $('#ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtTarifDis1_IP').val(hpt1[0]);
        $('#ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtTarifDis2_IP').val(hpt1[1]);
        $('#ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtTarifDis3_IP').val(hpt1[2]);
        $('#ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtTarifDis4_IP').val(hpt1[3]);
    }
}

/*OP Start Here*/
var tariff_name = "";
var tariff_id = "";
function ontxtOPTrf1selection(input) {

    if (input["TARIFF_ID"] == undefined) {
        tariff_id = input.ID;
        tariff_name = input._lktext;
    }
    else {
        tariff_id = input.TARIFF_ID;
        tariff_name = input.TARIFF_NAME;
    }
    if ((document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtOPTrf2__hiddenID').value == tariff_id)
    || (document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtOPTrf3__hiddenID').value == tariff_id)) {
        $(".stoast").toastText("Info", "Tariff already Exists in OP Tariff Priority's!", 7, 2);
        document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtOPTrf1_txtSearchControl').value = "";
        document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtOPTrf1__hiddenID').value = 0;
        document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtOPTrf1__hiddenText').value = "";
        return false;
    }
    document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtOPTrf1_txtSearchControl').value = tariff_name;
    document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtOPTrf1__hiddenID').value = tariff_id;
    document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtOPTrf1__hiddenText').value = tariff_name;
}
function ontxtOPTrf2selection(input) {

    if (input["TARIFF_ID"] == undefined) {
        tariff_id = input.ID;
        tariff_name = input._lktext;
    }
    else {
        tariff_id = input.TARIFF_ID;
        tariff_name = input.TARIFF_NAME;
    }
    if ((document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtOPTrf3__hiddenID').value == tariff_id)
    || (document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtOPTrf4__hiddenID').value == tariff_id)
    || (document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtOPTrf1__hiddenID').value == tariff_id)) {
        $(".stoast").toastText("Info", "Tariff already Exists in OP Tariff Priority's!", 7, 2);
        document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtOPTrf2_txtSearchControl').value = "";
        document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtOPTrf2__hiddenID').value = 0;
        document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtOPTrf2__hiddenText').value = "";
        return false;
    }
    document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtOPTrf2_txtSearchControl').value = tariff_name;
    document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtOPTrf2__hiddenID').value = tariff_id;
    document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtOPTrf2__hiddenText').value = tariff_name;
}
function ontxtOPTrf3selection(input) {
    if (input["TARIFF_ID"] == undefined) { tariff_id = input.ID; tariff_name = input._lktext; }
    else { tariff_id = input.TARIFF_ID; tariff_name = input.TARIFF_NAME; }
    if ((document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtOPTrf2__hiddenID').value == tariff_id)
    || (document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtOPTrf4__hiddenID').value == tariff_id)
    || (document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtOPTrf1__hiddenID').value == tariff_id)) {
        $(".stoast").toastText("Info", "Tariff already Exists in OP Tariff Priority's!", 7, 2);
        document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtOPTrf3_txtSearchControl').value = "";
        document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtOPTrf3__hiddenID').value = 0;
        document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtOPTrf3__hiddenText').value = "";
        return false;
    }
    document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtOPTrf3_txtSearchControl').value = tariff_name;
    document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtOPTrf3__hiddenID').value = tariff_id;
    document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtOPTrf3__hiddenText').value = tariff_name;
}
function ontxtOPTrf4selection(input) {
    if (input["TARIFF_ID"] == undefined) {
        tariff_id = input.ID;
        tariff_name = input._lktext;
    }
    else {
        tariff_id = input.TARIFF_ID;
        tariff_name = input.TARIFF_NAME;
    }
    if ((document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtOPTrf2__hiddenID').value == tariff_id)
    || (document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtOPTrf3__hiddenID').value == tariff_id)) {
        $(".stoast").toastText("Info", "Tariff already Exists in OP Tariff Priority's!", 7, 2);
        document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtOPTrf4_txtSearchControl').value = "";
        document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtOPTrf4__hiddenID').value = 0;
        document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtOPTrf4__hiddenText').value = "";
        return false;
    }
    document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtOPTrf4_txtSearchControl').value = tariff_name;
    document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtOPTrf4__hiddenID').value = tariff_id;
    document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtOPTrf4__hiddenText').value = tariff_name;
}

/*OP Ends*/
/*IP starts*/
function ontxtIPTrf1selection(input) {

    if (input["TARIFF_ID"] == undefined) {
        tariff_id = input.ID;
        tariff_name = input._lktext;
    }
    else {
        tariff_id = input.TARIFF_ID;
        tariff_name = input.TARIFF_NAME;
    }
    if ((document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtIPTrf2__hiddenID').value == tariff_id)
    || (document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtIPTrf3__hiddenID').value == tariff_id)) {
        $(".stoast").toastText("Info", "Tariff already Exists in IP Tariff Priority's!", 7, 2);
        document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtIPTrf1_txtSearchControl').value = "";
        document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtIPTrf1__hiddenID').value = 0;
        document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtIPTrf1__hiddenText').value = "";
        return false;
    }
    document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtIPTrf1_txtSearchControl').value = tariff_name;
    document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtIPTrf1__hiddenID').value = tariff_id;
    document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtIPTrf1__hiddenText').value = tariff_name;
}
function ontxtIPTrf2selection(input) {
    if (input["TARIFF_ID"] == undefined) {
        tariff_id = input.ID;
        tariff_name = input._lktext;
    }
    else {
        tariff_id = input.TARIFF_ID;
        tariff_name = input.TARIFF_NAME;
    }
    if ((document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtIPTrf1__hiddenID').value == tariff_id)
    || (document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtIPTrf3__hiddenID').value == tariff_id)
    || (document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtIPTrf4__hiddenID').value == tariff_id)) {
        $(".stoast").toastText("Info", "Tariff already Exists in IP Tariff Priority's!", 7, 2);
        document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtIPTrf2_txtSearchControl').value = "";
        document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtIPTrf2__hiddenID').value = 0;
        document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtIPTrf2__hiddenText').value = "";
        return false;
    }
    document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtIPTrf2_txtSearchControl').value = tariff_name;
    document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtIPTrf2__hiddenID').value = tariff_id;
    document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtIPTrf2__hiddenText').value = tariff_name;
}
function ontxtIPTrf3selection(input) {
    if (input["TARIFF_ID"] == undefined) {
        tariff_id = input.ID;
        tariff_name = input._lktext;
    }
    else {
        tariff_id = input.TARIFF_ID;
        tariff_name = input.TARIFF_NAME;
    }
    if ((document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtIPTrf1__hiddenID').value == tariff_id)
    || (document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtIPTrf2__hiddenID').value == tariff_id)
    || (document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtIPTrf4__hiddenID').value == tariff_id)) {
        $(".stoast").toastText("Info", "Tariff already Exists in IP Tariff Priority's!", 7, 2);
        document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtIPTrf3_txtSearchControl').value = "";
        document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtIPTrf3__hiddenID').value = 0;
        document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtIPTrf3__hiddenText').value = "";
        return false;
    }
    document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtIPTrf3_txtSearchControl').value = tariff_name;
    document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtIPTrf3__hiddenID').value = tariff_id;
    document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtIPTrf3__hiddenText').value = tariff_name;
}
function ontxtIPTrf4selection(input) {
    if (input["TARIFF_ID"] == undefined) {
        tariff_id = input.ID;
        tariff_name = input._lktext;
    }
    else {
        tariff_id = input.TARIFF_ID;
        tariff_name = input.TARIFF_NAME;
    }
    if ((document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtIPTrf2__hiddenID').value == tariff_id)
    || (document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtIPTrf3__hiddenID').value == tariff_id)) {
        $(".stoast").toastText("Info", "Tariff already Exists in IP Tariff Priority's!", 7, 2);
        document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtIPTrf4_txtSearchControl').value = "";
        document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtIPTrf4__hiddenID').value = 0;
        document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtIPTrf4__hiddenText').value = "";
        return false;
    }
    document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtIPTrf4_txtSearchControl').value = tariff_name;
    document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtIPTrf4__hiddenID').value = tariff_id;
    document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtIPTrf4__hiddenText').value = tariff_name;
}
/*IP ends*/
/*ER starts*/
function ontxtERTrf1selection(input) {
    if (input["TARIFF_ID"] == undefined) {
        tariff_id = input.ID;
        tariff_name = input._lktext;
    }
    else {
        tariff_id = input.TARIFF_ID;
        tariff_name = input.TARIFF_NAME;
    }
    if ((document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtERTrf2__hiddenID').value == tariff_id)
    || (document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtERTrf3__hiddenID').value == tariff_id)) {
        $(".stoast").toastText("Info", "Tariff already Exists in ER Tariff Priority's!", 7, 2);
        document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtERTrf1_txtSearchControl').value = "";
        document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtERTrf1__hiddenID').value = 0;
        document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtERTrf1__hiddenText').value = "";
        return false;
    }
    document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtERTrf1_txtSearchControl').value = tariff_name;
    document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtERTrf1__hiddenID').value = tariff_id;
    document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtERTrf1__hiddenText').value = tariff_name;
}
function ontxtERTrf2selection(input) {
    if (input["TARIFF_ID"] == undefined) {
        tariff_id = input.ID;
        tariff_name = input._lktext;
    }
    else {
        tariff_id = input.TARIFF_ID;
        tariff_name = input.TARIFF_NAME;
    }
    if ((document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtERTrf1__hiddenID').value == tariff_id)
    || (document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtERTrf3__hiddenID').value == tariff_id)
    || (document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtERTrf4__hiddenID').value == tariff_id)) {
        $(".stoast").toastText("Info", "Tariff already Exists in ER Tariff Priority's!", 7, 2);
        document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtERTrf2_txtSearchControl').value = "";
        document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtERTrf2__hiddenID').value = 0;
        document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtERTrf2__hiddenText').value = "";
        return false;
    }
    document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtERTrf2_txtSearchControl').value = tariff_name;
    document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtERTrf2__hiddenID').value = tariff_id;
    document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtERTrf2__hiddenText').value = tariff_name;
}
function ontxtERTrf3selection(input) {
    if (input["TARIFF_ID"] == undefined) {
        tariff_id = input.ID;
        tariff_name = input._lktext;
    }
    else {
        tariff_id = input.TARIFF_ID;
        tariff_name = input.TARIFF_NAME;
    }
    if ((document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtERTrf1__hiddenID').value == tariff_id)
    || (document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtERTrf2__hiddenID').value == tariff_id)
    || (document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtERTrf4__hiddenID').value == tariff_id)) {
        $(".stoast").toastText("Info", "Tariff already Exists in ER Tariff Priority's!", 7, 2);
        document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtERTrf3_txtSearchControl').value = "";
        document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtERTrf3__hiddenID').value = 0;
        document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtERTrf3__hiddenText').value = "";
        return false;
    }
    document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtERTrf3_txtSearchControl').value = tariff_name;
    document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtERTrf3__hiddenID').value = tariff_id;
    document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtERTrf3__hiddenText').value = tariff_name;
}
function ontxtERTrf4selection(input) {
    if (input["TARIFF_ID"] == undefined) {
        tariff_id = input.ID;
        tariff_name = input._lktext;
    }
    else {
        tariff_id = input.TARIFF_ID;
        tariff_name = input.TARIFF_NAME;
    }
    if ((document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtERTrf2__hiddenID').value == tariff_id)
    || (document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtERTrf3__hiddenID').value == tariff_id)) {
        $(".stoast").toastText("Info", "Tariff already Exists in ER Tariff Priority's!", 7, 2);
        document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtERTrf4_txtSearchControl').value = "";
        document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtERTrf4__hiddenID').value = 0;
        document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtERTrf4__hiddenText').value = "";
        return false;
    }
    document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtERTrf4_txtSearchControl').value = tariff_name;
    document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtERTrf4__hiddenID').value = tariff_id;
    document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtERTrf4__hiddenText').value = tariff_name;
}
function ontxtDCTrf1selection(input) {
    if (input["TARIFF_ID"] == undefined) {
        tariff_id = input.ID;
        tariff_name = input._lktext;
    }
    else {
        tariff_id = input.TARIFF_ID;
        tariff_name = input.TARIFF_NAME;
    }
    if ((document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtDCTrf2__hiddenID').value == tariff_id)
    || (document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtDCTrf3__hiddenID').value == tariff_id)) {
        $(".stoast").toastText("Info", "Tariff already Exists in DC Tariff Priority's!", 7, 2);
        document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtDCTrf1_txtSearchControl').value = "";
        document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtDCTrf1__hiddenID').value = 0;
        document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtDCTrf1__hiddenText').value = "";
        return false;
    }
    document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtDCTrf1_txtSearchControl').value = tariff_name;
    document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtDCTrf1__hiddenID').value = tariff_id;
    document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtDCTrf1__hiddenText').value = tariff_name;
}
function ontxtDCTrf2selection(input) {
    if (input["TARIFF_ID"] == undefined) {
        tariff_id = input.ID;
        tariff_name = input._lktext;
    }
    else {
        tariff_id = input.TARIFF_ID;
        tariff_name = input.TARIFF_NAME;
    }
    if ((document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtDCTrf1__hiddenID').value == tariff_id)
    || (document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtDCTrf3__hiddenID').value == tariff_id)
    || (document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtDCTrf4__hiddenID').value == tariff_id)) {
        $(".stoast").toastText("Info", "Tariff already Exists in DC Tariff Priority's!", 7, 2);
        document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtDCTrf2_txtSearchControl').value = "";
        document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtDCTrf2__hiddenID').value = 0;
        document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtDCTrf2__hiddenText').value = "";
        return false;
    }
    document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtDCTrf2_txtSearchControl').value = tariff_name;
    document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtDCTrf2__hiddenID').value = tariff_id;
    document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtDCTrf2__hiddenText').value = tariff_name;
}
function ontxtDCTrf3selection(input) {
    if (input["TARIFF_ID"] == undefined) {
        tariff_id = input.ID;
        tariff_name = input._lktext;
    }
    else {
        tariff_id = input.TARIFF_ID;
        tariff_name = input.TARIFF_NAME;
    }
    if ((document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtDCTrf1__hiddenID').value == tariff_id)
    || (document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtDCTrf2__hiddenID').value == tariff_id)
    || (document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtDCTrf4__hiddenID').value == tariff_id)) {
        $(".stoast").toastText("Info", "Tariff already Exists in DC Tariff Priority's!", 7, 2);
        document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtDCTrf3_txtSearchControl').value = "";
        document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtDCTrf3__hiddenID').value = 0;
        document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtDCTrf3__hiddenText').value = "";
        return false;
    }
    document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtDCTrf3_txtSearchControl').value = tariff_name;
    document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtDCTrf3__hiddenID').value = tariff_id;
    document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtDCTrf3__hiddenText').value = tariff_name;
}
function ontxtDCTrf4selection(input) {
    if (input["TARIFF_ID"] == undefined) {
        tariff_id = input.ID;
        tariff_name = input._lktext;
    }
    else {
        tariff_id = input.TARIFF_ID;
        tariff_name = input.TARIFF_NAME;
    }
    if ((document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtDCTrf2__hiddenID').value == tariff_id)
    || (document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtDCTrf3__hiddenID').value == tariff_id)) {
        $(".stoast").toastText("Info", "Tariff already Exists in DC Tariff Priority's!", 7, 2);
        document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtDCTrf4_txtSearchControl').value = "";
        document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtDCTrf4__hiddenID').value = 0;
        document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtDCTrf4__hiddenText').value = "";
        return false;
    }
    document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtDCTrf4_txtSearchControl').value = tariff_name;
    document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtDCTrf4__hiddenID').value = tariff_id;
    document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtDCTrf4__hiddenText').value = tariff_name;
}
/*DC Ends*/
function checkkNumeric(evt) {
    evt = (evt) ? evt : window.event
    var charCode = (evt.which) ? evt.which : evt.keyCode
    if (charCode == 45) {
        return true;
    }
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        status = "This field accepts numbers only."
        return false
    }
    status = "";
    return true;
}

function saveGrade() {
    var _xmlStr = ""; var Gname = ""; var Gfrmamt = ""; var Gtoamt = "";
    var editid = document.getElementById('ctl00_ContentPlaceHolder1_ucCompanyCode__hiddenID').value;
    var cmpid = document.getElementById('ctl00_ContentPlaceHolder1_hdncmpnyid').value;
    _xmlStr = "<root>";
    var GradeGridLen = document.getElementById('tbl_Grade').rows.length;
    if (GradeGridLen > 1) {
        $('table[id$=tbl_Grade] tr:has(td)').each(function (e) {
            var Gname = $(this).closest('tr').find('[id*=txtgradeName]').val();
            var Gfrmamt = $(this).closest('tr').find('[id*=txtgradefromamt]').val();
            var Gtoamt = $(this).closest('tr').find('[id*=txtgradetoamt]').val();
            var COMP_GRADE_ID = $(this).closest('tr').find('[id*=COMP_GRADE_ID]').val();
            var COMP_GRADE_REV_NO = $(this).closest('tr').find('[id*=COMP_GRADE_REV_NO]').val();
            Gname = typeof Gname == "string" ? (Gname.trim() == "0" ? "0" : Gname) : (typeof Gname == "number" ? Gname : "0");
            Gfrmamt = typeof Gfrmamt == "string" ? (Gfrmamt.trim() == "0" ? "0" : Gfrmamt) : (typeof Gfrmamt == "number" ? Gfrmamt : "0");
            Gtoamt = typeof Gtoamt == "string" ? (Gtoamt.trim() == "0" ? "0" : Gtoamt) : (typeof Gtoamt == "number" ? Gtoamt : "0");

            _xmlStr += "<COMPANY_GRADE";
            if (COMP_GRADE_ID != "" || COMP_GRADE_ID != undefined)
                _xmlStr += " COMP_GRADE_ID=^" + COMP_GRADE_ID + "^";
            else
                _xmlStr += " COMP_GRADE_ID=^" + "0" + "^";
            _xmlStr += " COMP_GRADE_REV_NO=^" + COMP_GRADE_REV_NO + "^";
            _xmlStr += " COMP_GRADE_CD=^" + "" + "^";
            _xmlStr += " COMP_GRADE_NAME=^" + Gname + "^";
            _xmlStr += " COMP_GRADE_DESC=^" + Gname + "^";
            _xmlStr += " FROM_SAL=^" + Gfrmamt + "^";
            _xmlStr += " TO_SAL=^" + Gtoamt + "^";
            _xmlStr += " COMPANY_ID=^" + cmpid + "^";
            _xmlStr += " ELIGIBLE_WARD_ID=^" + "" + "^";
            _xmlStr += " />";
        });
    } else {
        _xmlStr += "<COMPANY_GRADE";
        _xmlStr += " COMPANY_ID=^" + cmpid + "^";
        _xmlStr += " />";
    }
    _xmlStr += "</root>";
    document.getElementById('ctl00_ContentPlaceHolder1_hdngradexml').value = _xmlStr;
}

function GetGrades(id) {
    var _JSONParams = JSON.stringify({ Companyid: id });
    var _ServiceURL = "CompanyTariffConfiguration.aspx/BindGrades";
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

            if (jdata != null) {
                var i = 0;
                $(jdata.d).each(function (i, dataval) {
                    i++;
                    var Grade = '', Frmamt = '', Toamt = '', COMP_GRADE_ID = 0, Sno = 0;
                    Grade = dataval.GRADE_NAME;
                    Frmamt = dataval.START_SALARY;
                    Toamt = dataval.END_SALARY;
                    COMP_GRADE_ID = dataval.GRADE_ID;
                    COMP_GRADE_REV_NO = dataval.COMP_GRADE_REV_NO;
                    var jDatavalGrid = GetGradeinfo(Grade, Frmamt, Toamt, COMP_GRADE_ID, COMP_GRADE_REV_NO, i);
                    renderGrades(jDatavalGrid);
                });
            }
        },
        fail: function (e) {
        }
    });
}

function saveDivision() {
    var _xmlStr = ""; var Dname = ""; var Ddesc = "";
    var cmpid = document.getElementById('ctl00_ContentPlaceHolder1_hdncmpnyid').value;
    var DivGridLen = document.getElementById('tbl_Division').rows.length;
    if (DivGridLen > 1) {
        _xmlStr += "<root>";
        $('table[id$=tbl_Division] tr:has(td)').each(function (e) {
            var Divname = $(this).closest('tr').find('[id*=txtdivname]').val();
            var Divaddr = $(this).closest('tr').find('[id*=txtdivaddr]').val();
            var Desc = $(this).closest('tr').find('[id*=txtdivdesc]').val();
            var cmplevelid = $(this).closest('tr').find('[id*=ddlcmplevel]').val();
            var COMP_DIVISION_ID = $(this).closest('tr').find('[id*=COMP_DIVISION_ID]').val();
            var COMP_DIVISION_REV_NO = $(this).closest('tr').find('[id*=COMP_DIVISION_REV_NO ]').val();
            var COMP_EXECUTIVE_ID = $(this).closest('tr').find('[id*=COMP_EXECUTIVE_ID]').val();
            var COMP_EXECUTIVE_REV_NO = $(this).closest('tr').find('[id*=COMP_EXECUTIVE_REV_NO ]').val();
            Divname = typeof Divname == "string" ? (Divname.trim() == "0" ? "0" : Divname) : (typeof Divname == "number" ? Gname : "0");
            Desc = typeof Desc == "string" ? (Desc.trim() == "0" ? "0" : Desc) : (typeof Desc == "number" ? Desc : "0");
            if (COMP_EXECUTIVE_ID == "" || COMP_EXECUTIVE_ID == undefined || COMP_EXECUTIVE_ID == null) { COMP_EXECUTIVE_ID = "0"; }
            if (COMP_EXECUTIVE_REV_NO == "" || COMP_EXECUTIVE_REV_NO == undefined || COMP_EXECUTIVE_REV_NO == null) { COMP_EXECUTIVE_REV_NO = "0"; }
            if (cmplevelid == "" || cmplevelid == undefined || cmplevelid == null) { cmplevelid = "1"; }
            if (COMP_DIVISION_ID == "" || COMP_DIVISION_ID == undefined || COMP_DIVISION_ID == null) { COMP_DIVISION_ID = '0'; }
            _xmlStr += "<COMPANY_DIVISION";
            _xmlStr += " COMP_DIVISION_ID=^" + COMP_DIVISION_ID + "^";
            _xmlStr += " COMP_DIVISION_REV_NO=^" + COMP_DIVISION_REV_NO + "^";
            _xmlStr += " COMP_DIVISION_CD=^" + "" + "^";
            _xmlStr += " COMP_DIVISION_NAME=^" + ReplaceSplCharactor(Divname) + "^";
            _xmlStr += " COMP_DIVISION_DESC=^" + ReplaceSplCharactor(Desc) + "^";
            _xmlStr += " ADDRESS1=^" + ReplaceSplCharactor(Divaddr) + "^";
            _xmlStr += " COMPANY_ID=^" + cmpid + "^";
            _xmlStr += " />";
            var empids = $(this).closest('tr').find('[type=hidden][id*=hdmempids]').val();
            if (empids == "" || empids == undefined || empids == null) { empids = "0"; }
            for (i = 0; i < empids.split(',').length; i++) {
                _xmlStr += "<COMPANY_EXECUTIVE";
                _xmlStr += " COMP_EXECUTIVE_ID=^" + COMP_EXECUTIVE_ID.split(',')[i] + "^";
                _xmlStr += " COMP_EXECUTIVE_REV_NO=^" + COMP_EXECUTIVE_REV_NO.split(',')[i] + "^";
                _xmlStr += " LEVEL_ID=^" + cmplevelid + "^";
                _xmlStr += " COMPANY_CATEGORY_ID=^" + 0 + "^";
                _xmlStr += " COMPANY_DIVISION_ID=^" + COMP_DIVISION_ID + "^";
                _xmlStr += " COMPANY_ID=^" + cmpid + "^";
                _xmlStr += " EMPLOYEE_ID=^" + empids.split(',')[i] + "^";
                _xmlStr += " />";
            }
        });
        _xmlStr += "</root>";
    } else {
        _xmlStr = "<root>";
        _xmlStr += "<COMPANY_DIVISION";
        _xmlStr += " COMPANY_ID=^" + cmpid + "^";
        _xmlStr += " />";
        _xmlStr += "</root>";
    }
    GetNonAsync(
        "Private/CompanyMaster/CompanyTariffConfiguration.aspx/SaveDivision",
        { xmlString: _xmlStr },
        function (JData) {
        },
    function (jqXHR, textStatus, errorThrown) {
    });
    document.getElementById('ctl00_ContentPlaceHolder1_hdnDivxml').value = _xmlStr;
}
function saveEligibilty() {
    var _xmlStr = "";
    var cmpid = document.getElementById('ctl00_ContentPlaceHolder1_hdncmpnyid').value;
    _xmlStr = "<root>";
    var DivGridLen = document.getElementById('tbl_Eligibility').rows.length;
    if (DivGridLen > 1) {
        $('table[id$=tbl_Eligibility] tr:has(td)').each(function (e) {
            var frmage = $(this).closest('tr').find('[id*=txtfromage]').val();
            var toage = $(this).closest('tr').find('[id*=txttoage]').val();
            var dlgender = $(this).closest('tr').find('[id*=hdngender]').val();
            var dlmaritialstatus = $(this).closest('tr').find('[id*=hdnMaritial]').val();
            var relationid = $(this).closest('tr').find('[id*=hdnrelation]').val();
            var COMPANY_ID = $(this).closest('tr').find('[id*=COMPANY_ID]').val();
            var COMPANY_REV_NO = $(this).closest('tr').find('[id*=COMPANY_REV_NO ]').val();
            var DEPDNT_RULE_ID = $(this).closest('tr').find('[id*=DEPDNT_RULE_ID ]').val();
            if (DEPDNT_RULE_ID == "" || DEPDNT_RULE_ID == null || DEPDNT_RULE_ID == undefined) { DEPDNT_RULE_ID = 0; }
            if (relationid == "" || relationid == null || relationid == undefined) { relationid = "0"; }
            _xmlStr += "<COMPANY_PATIENT_DEPDNT_RULE";
            if (COMPANY_ID != "" || COMPANY_ID != undefined)
                _xmlStr += " COMPANY_ID=^" + cmpid + "^";
            else
                _xmlStr += " COMPANY_ID=^" + cmpid + "^";
            _xmlStr += " DEPDNT_RULE_ID=^" + DEPDNT_RULE_ID + "^";
            _xmlStr += " COMPANY_REV_NO=^" + COMPANY_REV_NO + "^";
            _xmlStr += " FROM_AGE=^" + frmage + "^";
            _xmlStr += " TO_AGE=^" + toage + "^";
            _xmlStr += " GENDER_ID=^" + dlgender + "^";
            _xmlStr += " MARITAL_STATUS_ID=^" + dlmaritialstatus + "^";
            _xmlStr += " RELATION_ID=^" + relationid + "^";
            _xmlStr += " />";
        });
    }
    else {
        _xmlStr += "<COMPANY_PATIENT_DEPDNT_RULE";
        _xmlStr += " COMPANY_ID=^" + cmpid + "^";
        _xmlStr += " />";
    }
    _xmlStr += "</root>";
    document.getElementById('ctl00_ContentPlaceHolder1_hdnEligibilty').value = _xmlStr;
}
function GetGradeandDivision(id) {
    GetGrades(id);
    GetDivisions(id);
    GetEligibility(id);
    return false;
}

function GetDivisions(id) {
    var _JSONParams = JSON.stringify({ Companyid: id }); var leveldata = [];
    var _ServiceURL = "CompanyTariffConfiguration.aspx/BindDivisionsDset";
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
            var divdata = jQuery.parseJSON(jdata.d[0]);
            leveldata = jQuery.parseJSON(jdata.d[1]);
            if (divdata != null) {
                var i = 0;
                $(divdata).each(function (i, dataval) {
                    i++;
                    var Division = '', Desc = '', COMP_DIVISION_ID = 0, DivAddr = '', Sno = 0, COMP_EXECUTIVE_ID = 0, COMP_EXECUTIVE_REV_NO = 0;
                    Division = dataval.COMP_DIVISION_NAME;
                    Desc = dataval.COMP_DIVISION_DESC;
                    COMP_DIVISION_ID = dataval.COMP_DIVISION_ID;
                    COMP_DIVISION_REV_NO = dataval.COMP_DIVISION_REV_NO;
                    DivAddr = dataval.ADDRESS1;
                    COMP_EXECUTIVE_ID = dataval.COMP_EXECUTIVE_ID;
                    COMP_EXECUTIVE_REV_NO = dataval.COMP_EXECUTIVE_REV_NO;
                    var jDatavalGrid = GetDivisioninfo(Division, DivAddr, Desc, COMP_DIVISION_ID, COMP_DIVISION_REV_NO, i);
                    renderDivisions(jDatavalGrid);
                    DropdownBind(globalddldata);
                });
            }
        },
        fail: function (e) {
            //$('#progress').hide();
        }
    });
    $('#tbl_Division tr:has(td)').each(function () {
        var div_name = $(this).closest('tr').find('[id*=txtdivname]').val();
        for (i = 0; i < leveldata.length; i++) {
            if (leveldata[i].COMP_DIVISION_NAME == div_name.trim()) {
                $(this).closest('tr').find('[id*=ddlcmplevel]').val(leveldata[i].LEVEL_ID);
                var cmp_ex_id = $(this).closest('tr').find('[type=hidden][id*=COMP_EXECUTIVE_ID]').val();
                var cmp_ex_rev_no = $(this).closest('tr').find('[type=hidden][id*=COMP_EXECUTIVE_REV_NO]').val();
                var empids = $(this).closest('tr').find('[id*=hdmempids]').val();
                var empname = $(this).closest('tr').find('[id*=lblusers]').text();
                if (empids.trim() != '' && empids.trim() != null && empids.trim() != undefined) {
                    $(this).closest('tr').find('[id*=lblusers]').text(empname + ',' + leveldata[i].EMPLOYEE_NAME);
                    $(this).closest('tr').find('[type=hidden][id*=hdmempids]').val(empids + ',' + leveldata[i].EMPLOYEE_ID);
                    $(this).closest('tr').find('[type=hidden][id*=COMP_EXECUTIVE_ID]').val(cmp_ex_id + ',' + leveldata[i].COMP_EXECUTIVE_ID);
                    $(this).closest('tr').find('[type=hidden][id*=COMP_EXECUTIVE_REV_NO]').val(cmp_ex_rev_no + ',' + leveldata[i].COMP_EXECUTIVE_REV_NO);
                } else {
                    if (leveldata[i].EMPLOYEE_ID != "" && leveldata[i].EMPLOYEE_ID != null && leveldata[i].EMPLOYEE_ID != undefined) {
                        $(this).closest('tr').find('[id*=lblusers]').text(leveldata[i].EMPLOYEE_NAME);
                        $(this).closest('tr').find('[type=hidden][id*=hdmempids]').val(leveldata[i].EMPLOYEE_ID);
                    }
                    $(this).closest('tr').find('[type=hidden][id*=COMP_EXECUTIVE_ID]').val(leveldata[i].COMP_EXECUTIVE_ID);
                    $(this).closest('tr').find('[type=hidden][id*=COMP_EXECUTIVE_REV_NO]').val(leveldata[i].COMP_EXECUTIVE_REV_NO);
                }
            }
        }
    });

}

function GetEligibility(id) {
    var _JSONParams = JSON.stringify({ Companyid: id });
    var _ServiceURL = "CompanyTariffConfiguration.aspx/BindEligibility";
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
            if (jdata != null) {
                var i = 0;
                $(jdata.d).each(function (i, dataval) {
                    i++;
                    var frmage = '', toage = '', COMPANY_ID = 0, gender = '', maritialstatus = '', gendertext = '', maritialstatustext = '', COMPANY_REV_NO = 0, Sno, DEPDNT_RULE_ID = 0;
                    frmage = dataval.FROM_AGE;
                    toage = dataval.TO_AGE;
                    gender = dataval.GENDER_ID;
                    Relation = dataval.RELATION_ID;
                    Relationtext = dataval.EMP_RALATION_NAME;
                    maritialstatus = dataval.MARITAL_STATUS_ID;
                    gendertext = dataval.GENDER;
                    maritialstatustext = dataval.MARITAL_STATUS_NAME;
                    COMPANY_ID = dataval.COMPANY_ID;
                    DEPDNT_RULE_ID = dataval.DEPDNT_RULE_ID;
                    COMPANY_REV_NO = dataval.COMPANY_REV_NO;
                    var jDatavalGrid = GetEligibiltyinfo(frmage, toage, gender, gendertext, Relation, Relationtext, maritialstatus, maritialstatustext, COMPANY_ID, COMPANY_REV_NO, i, DEPDNT_RULE_ID);
                    renderEligibility(jDatavalGrid);
                });
            }
        },
        fail: function (e) {
            //$('#progress').hide();
        }
    });

}
function Companycopay(compcopayid, cmpid, patclsid, Effect_from_dt, Effect_to_Dt, Orgpercentage, Emppercentage, Company_copay_rev_no) {
    if (compcopayid == "")
        compcopayid = "0";
    if (Company_copay_rev_no == "")
        Company_copay_rev_no = "0";
    _xmlStr += "<COMPANY_COPAY";
    _xmlStr += " COMPANY_COPAY_ID=^" + compcopayid + "^";
    _xmlStr += " COMPANY_COPAY_REV_NO=^" + Company_copay_rev_no + "^";
    _xmlStr += " COMPANY_ID=^" + cmpid + "^";
    _xmlStr += " COMPANY_REV_NO=^" + "1" + "^";
    _xmlStr += " PATIENT_CLASS_ID=^" + patclsid + "^";
    _xmlStr += " PATIENT_CLASS_REV_NO=^" + 0 + "^";
    _xmlStr += " EFFECT_FROM_DT=^" + Effect_from_dt + "^";
    _xmlStr += " EFFECT_TO_DT=^" + Effect_to_Dt + "^";
    _xmlStr += " ORG_PERCENT=^" + Orgpercentage + "^";
    _xmlStr += " EMP_PERCENT=^" + Emppercentage + "^";
    _xmlStr += " />";

}
function CompanyTariffPrioroties(comptrfid, compid, patclass, trfid, priority, is_default, discount, effectfrmdt, effecttodt, color_cd, company_tariff_rev_no, trfname, addprcntge) {
    if (comptrfid == "")
        comptrfid = "0";
    if (company_tariff_rev_no == "")
        company_tariff_rev_no = "0";
    if (trfname == "")
        trfid = "0";
    _xmlStr += "<COMPANY_TARIFF";
    _xmlStr += " COMPANY_TARIFF_ID=^" + comptrfid + "^";
    _xmlStr += " COMPANY_TARIFF_REV_NO=^" + company_tariff_rev_no + "^";
    _xmlStr += " COMPANY_ID=^" + compid + "^";
    _xmlStr += " COMPANY_REV_NO=^" + "1" + "^";
    _xmlStr += " PATIENT_CLASS_ID=^" + patclass + "^";
    _xmlStr += " PATIENT_CLASS_REV_NO=^" + "0" + "^";
    _xmlStr += " TARIFF_ID=^" + trfid + "^";
    _xmlStr += " TARIFF_REV_NO=^" + "1" + "^";
    _xmlStr += " PRIORITY=^" + priority + "^";
    _xmlStr += " IS_DEFAULT=^" + is_default + "^";
    _xmlStr += " DISCOUNT_PERCENT=^" + discount + "^";
    _xmlStr += " EFFECT_FROM_DT=^" + effectfrmdt + "^";
    _xmlStr += " EFFECT_TO_DT=^" + effecttodt + "^";
    _xmlStr += " COLOR_CD=^" + color_cd + "^";
    _xmlStr += " COMPANY_SERVICE_TYPE_ID=^" + "0" + "^";
    _xmlStr += " RISE_PERCENT=^" + addprcntge + "^";
    _xmlStr += " />";

}

function Cmpnylimit(CmpLimitID, CmpLimitRevNO, compid, patclsid, vldnruleid, CmpCreditlimtamnt, flowid) {
    if (CmpLimitID == '' || CmpLimitID == undefined || CmpLimitID == null) { CmpLimitID = "0"; } else { CmpLimitID = CmpLimitID; }
    if (CmpLimitRevNO == '' || CmpLimitRevNO == undefined || CmpLimitRevNO == null) { CmpLimitRevNO = "0"; } else { CmpLimitRevNO = CmpLimitRevNO; }
    if (flowid == "" || flowid == null || flowid == undefined) { flowid = "0"; }
    if (vldnruleid == "" || vldnruleid == null || vldnruleid == undefined || vldnruleid == "undefined") { vldnruleid = "0"; }
    if (CmpCreditlimtamnt > 0 || vldnruleid > 0 || CmpLimitID > 0) {
        _xmlStr += "<COMPANY_LIMITS";
        _xmlStr += " COMPANY_LIMIT_ID=^" + CmpLimitID + "^";
        _xmlStr += " COMPANY_LIMIT_REV_NO=^" + CmpLimitRevNO + "^";
        _xmlStr += " COMPANY_ID=^" + compid + "^";
        _xmlStr += " VALIDATION_RULE_ID=^" + vldnruleid + "^";
        _xmlStr += " CREDIT_LIMIT_AMT =^" + CmpCreditlimtamnt + "^";
        _xmlStr += " PATIENT_CLASS_ID=^" + patclsid + "^";
        _xmlStr += " BILL_WF_ID=^" + flowid + "^";
        _xmlStr += " />";
    }
}
function companycoverage(compid, coverageid, compcvrgid, compcvrgrevno) {
    if (compcvrgid == "")
        compcvrgid = "0";
    if (compcvrgrevno == "")
        compcvrgrevno = "0";
    _xmlStr += "<COMPANY_COVERAG";
    _xmlStr += " COMPANY_COVERAGE_ID=^" + compcvrgid + "^";
    _xmlStr += " COMPANY_COVERAGE_REV_NO=^" + compcvrgrevno + "^";
    _xmlStr += " COMPANY_ID=^" + compid + "^";
    _xmlStr += " COVERAGE_ID=^" + coverageid + "^";
    _xmlStr += " />";
}
var _xmlStr = "";
function SavecompanyTariffconfig() {
    var priorityids = '';
    var prioritycolorids = '';
    var prioritytaeriffids = '';
    document.getElementById('ctl00_ContentPlaceHolder1_hdnsavexml').value = "";
    var opcount = 0; ipcount = 0; ercount = 0; dccount = 0;
    var cmpid = document.getElementById('ctl00_ContentPlaceHolder1_hdncmpnyid').value;
    var Phar_Disc_Perc = document.getElementById('ctl00_ContentPlaceHolder1_txtDiscount').value;
    var Contract_Notes = document.getElementById('ctl00_ContentPlaceHolder1_txtNotes').value;
    var Concession_Priority = document.getElementById('ctl00_ContentPlaceHolder1_ddlservices').value;
    if (Concession_Priority == "--select--")
        Concession_Priority = "0";
    var Is_Letter_Req = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_chkLeterRequired').checked ? "Y" : "N";
    var NOOf_Cons = document.getElementById('ctl00_ContentPlaceHolder1_txtConsNOs').value;
    var NOOf_cons_Days = document.getElementById('ctl00_ContentPlaceHolder1_txtConsDAYs').value;
    var Op_Cons_Payment = document.getElementById('ctl00_ContentPlaceHolder1_rbCorpConsultation_0').checked ? "C" : "R";
    var Credit_Limt_Amt = document.getElementById('ctl00_ContentPlaceHolder1_txtCreditLimitAmt').value;
    var Color = document.getElementById('ctl00_ContentPlaceHolder1_txtColor').value;
    var Effect_from_dt = document.getElementById('ctl00_ContentPlaceHolder1_txtEfectFrom').value;
    var Effect_to_Dt = document.getElementById('ctl00_ContentPlaceHolder1_txtEfectTo').value;
    var Contact_Person_Name = document.getElementById('ctl00_ContentPlaceHolder1_txtContactPerson').value;
    var hdncntact_revNO = document.getElementById('ctl00_ContentPlaceHolder1_hdncmpnycntactrevno').value;
    var Contract_No = document.getElementById('ctl00_ContentPlaceHolder1_txtContractNo').value;
    var Contract_Dt = document.getElementById('ctl00_ContentPlaceHolder1_txtStDt').value;
    var Company_Fee = document.getElementById('ctl00_ContentPlaceHolder1_txtRegFee').value;
    var Rateincreq = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel21_chkbx_0').checked ? "Y" : "N";
    var RefElgward = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel21_chkbx_1').checked ? "Y" : "N";
    var Rptfrmtreq = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel21_chkbx_2').checked ? "Y" : "N";
    var SrvReqFlag = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel21_chkbx_3').checked ? "Y" : "N";
    var Billdonedays = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel21_txtCorpBilDone').value;
    var submittomktg = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel21_txtsubmitMktg').value;
    var submittoorg = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel21_txtsubmittoOrg').value;
    var Billclrdays = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel21_txtBilCleardays').value;

    var Def_Tariffid = document.getElementById('ctl00_ContentPlaceHolder1_ucTariff__hiddenID').value;
    if (document.getElementById('ctl00_ContentPlaceHolder1_ucTariff_txtSearchControl').value == "" || document.getElementById('ctl00_ContentPlaceHolder1_ucTariff_txtSearchControl').value == undefined) {
        Def_Tariffid = 0;
    }
    if (document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel21_rblCompare_0').checked == true)
        var Tariff_Rule_Id = "1";
    else if (document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel21_rblCompare_1').checked == true)
        Tariff_Rule_Id = "2";
    else if (document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel21_rblCompare_2').checked == true)
        Tariff_Rule_Id = "3";
    else
        Tariff_Rule_Id = "0";
    var Auth_person = document.getElementById('ctl00_ContentPlaceHolder1_txtAuthorizedperson').value;
    var Orgopperce = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtoporgper').value;
    var Empopperce = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtopempper').value;
    var Orgipperce = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtiporgper').value;
    var Empipperce = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtipempper').value;
    var Orgerperce = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txterorgper').value;
    var Emperperce = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txterempper').value;
    var Orgdcperce = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtdcorgper').value;
    var Empdcperce = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtdcempper').value;

    /*OP*/
    var OPtrf1id = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtOPTrf1__hiddenID').value;
    var OPtrf2id = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtOPTrf2__hiddenID').value;
    var OPtrf3id = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtOPTrf3__hiddenID').value;
    var OPtrf4id = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtOPTrf4__hiddenID').value;
    var OPtrf5id = 0;
    var OPtrf1name = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtOPTrf1_txtSearchControl').value;
    var OPtrf2name = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtOPTrf2_txtSearchControl').value;
    var OPtrf3name = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtOPTrf3_txtSearchControl').value;
    var OPtrf4name = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtOPTrf4_txtSearchControl').value;
    var OPtrf5name = '';
    var OPdiscount1 = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtOPdsc1').value;
    var OPdiscount2 = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtOPdsc2').value;
    var OPdiscount3 = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtOPdsc3').value;
    var OPdiscount4 = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtOPdsc4').value;
    var OPdiscount5 = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtOPdsc5').value;
    var op1trfrevno = document.getElementById('ctl00_ContentPlaceHolder1_hdnop1trfrev').value;
    var op2trfrevno = document.getElementById('ctl00_ContentPlaceHolder1_hdnop2trfrev').value;
    var op3trfrevno = document.getElementById('ctl00_ContentPlaceHolder1_hdnop3trfrev').value;
    var op4trfrevno = document.getElementById('ctl00_ContentPlaceHolder1_hdnop4trfrev').value;
    var op5trfrevno = document.getElementById('ctl00_ContentPlaceHolder1_hdnop5trfrev').value;
    var opcopayrevno = document.getElementById('ctl00_ContentPlaceHolder1_hdnopcopayrevno').value;
    var opcopayid = document.getElementById('ctl00_ContentPlaceHolder1_hdnopcopayid').value;
    var op1comptrfid = document.getElementById('ctl00_ContentPlaceHolder1_hdnop1comptrfid').value;
    var op2comptrfid = document.getElementById('ctl00_ContentPlaceHolder1_hdnop2comptrfid').value;
    var op3comptrfid = document.getElementById('ctl00_ContentPlaceHolder1_hdnop3comptrfid').value;
    var op4comptrfid = document.getElementById('ctl00_ContentPlaceHolder1_hdnop4comptrfid').value;
    var op5comptrfid = document.getElementById('ctl00_ContentPlaceHolder1_hdnop5comptrfid').value;
    var opcvrgrevno = document.getElementById('ctl00_ContentPlaceHolder1_hdnopcvrgrevno').value;
    var opcvrgid = document.getElementById('ctl00_ContentPlaceHolder1_hdnopcoverageid').value;

    priorityids = op1comptrfid + ',' + op2comptrfid + ',' + op3comptrfid + ',' + op4comptrfid;
    prioritytaeriffids = OPtrf1name + ',' + OPtrf2name + ',' + OPtrf3name + ',' + OPtrf4name;


    OPdiscount1 = OPdiscount1 == "" ? "0" : OPdiscount1;
    OPdiscount2 = OPdiscount2 == "" ? "0" : OPdiscount2;
    OPdiscount3 = OPdiscount3 == "" ? "0" : OPdiscount3;
    OPdiscount4 = OPdiscount4 == "" ? "0" : OPdiscount4;
    OPdiscount5 = OPdiscount5 == "" ? "0" : OPdiscount5;
    Credit_Limt_Amt = Credit_Limt_Amt == "" ? "0" : Credit_Limt_Amt;
    Phar_Disc_Perc = Phar_Disc_Perc == "" ? "0" : Phar_Disc_Perc;
    /*ADD PERCENTAGE For OP*/
    var opaddprcntge1 = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtOPaddPrcntge1').value;
    var opaddprcntge2 = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtOPaddPrcntge2').value;
    var opaddprcntge3 = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtOPaddPrcntge3').value;
    var opaddprcntge4 = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtOPaddPrcntge4').value;
    var opaddprcntge5 = "";
    opaddprcntge1 = opaddprcntge1 == "" ? "0" : opaddprcntge1;
    opaddprcntge2 = opaddprcntge2 == "" ? "0" : opaddprcntge2;
    opaddprcntge3 = opaddprcntge3 == "" ? "0" : opaddprcntge3;
    opaddprcntge4 = opaddprcntge4 == "" ? "0" : opaddprcntge4;

    var CmpCreditlimtOP = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtopapprlimit').value;
    CmpCreditlimtOP = CmpCreditlimtOP == ("") ? "0" : CmpCreditlimtOP;

    var vldnruleidOPname = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtrulenameop').value;
    vldnruleidOPname = vldnruleidOPname == ("") ? "0" : vldnruleidOPname;

    if (vldnruleidOPname == '0' || vldnruleidOPname == "0") {
        document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_hdncmpruleidop').value = 0;
    }
    var vldnruleidOP = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_hdncmpruleidop').value;
    vldnruleidOP = vldnruleidOP == ("") ? "0" : vldnruleidOP;

    var cmplimitidop = document.getElementById('ctl00_ContentPlaceHolder1_hdncmplimitIDOP').value;
    cmplimitidop = cmplimitidop == ("") ? "0" : cmplimitidop;

    var cmplimitrevnoop = document.getElementById('ctl00_ContentPlaceHolder1_hdncmplimitRevnoOP').value;
    cmplimitrevnoop = cmplimitrevnoop == ("") ? "0" : cmplimitrevnoop;

    /*IP*/
    var IPtrf1id = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtIPTrf1__hiddenID').value;
    var IPtrf2id = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtIPTrf2__hiddenID').value;
    var IPtrf3id = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtIPTrf3__hiddenID').value;
    var IPtrf4id = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtIPTrf4__hiddenID').value;
    var IPtrf5id = 0;
    var IPtrf1name = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtIPTrf1_txtSearchControl').value;
    var IPtrf2name = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtIPTrf2_txtSearchControl').value;
    var IPtrf3name = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtIPTrf3_txtSearchControl').value;
    var IPtrf4name = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtIPTrf4_txtSearchControl').value;
    var IPtrf5name = '';
    var IPdiscount1 = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtIPdsc1').value;
    var IPdiscount2 = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtIPdsc2').value;
    var IPdiscount3 = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtIPdsc3').value;
    var IPdiscount4 = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtIPdsc4').value;
    var IPdiscount5 = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtIPdsc5').value;
    var ip1trfrevno = document.getElementById('ctl00_ContentPlaceHolder1_hdnip1trfrev').value;
    var ip2trfrevno = document.getElementById('ctl00_ContentPlaceHolder1_hdnip2trfrev').value;
    var ip3trfrevno = document.getElementById('ctl00_ContentPlaceHolder1_hdnip3trfrev').value;
    var ip4trfrevno = document.getElementById('ctl00_ContentPlaceHolder1_hdnip4trfrev').value;
    var ip5trfrevno = document.getElementById('ctl00_ContentPlaceHolder1_hdnip5trfrev').value;
    var ipcopayrevno = document.getElementById('ctl00_ContentPlaceHolder1_hdnipcopayrevno').value;
    var ipcopayid = document.getElementById('ctl00_ContentPlaceHolder1_hdnipcopayid').value;
    var ip1comptrfid = document.getElementById('ctl00_ContentPlaceHolder1_hdnip1comptrfid').value;
    var ip2comptrfid = document.getElementById('ctl00_ContentPlaceHolder1_hdnip2comptrfid').value;
    var ip3comptrfid = document.getElementById('ctl00_ContentPlaceHolder1_hdnip3comptrfid').value;
    var ip4comptrfid = document.getElementById('ctl00_ContentPlaceHolder1_hdnip4comptrfid').value;
    var ip5comptrfid = document.getElementById('ctl00_ContentPlaceHolder1_hdnip5comptrfid').value;
    var ipcvrgrevno = document.getElementById('ctl00_ContentPlaceHolder1_hdnipcvrgrevno').value;
    var ipcvrgid = document.getElementById('ctl00_ContentPlaceHolder1_hdnipcoverageid').value;
    IPdiscount1 = IPdiscount1 == "" ? "0" : IPdiscount1;
    IPdiscount2 = IPdiscount2 == "" ? "0" : IPdiscount2;
    IPdiscount3 = IPdiscount3 == "" ? "0" : IPdiscount3;
    IPdiscount4 = IPdiscount4 == "" ? "0" : IPdiscount4;
    IPdiscount5 = IPdiscount5 == "" ? "0" : IPdiscount5;
    /*ADD PERCENTAGE For IP*/
    var ipaddprcntge1 = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtIPaddPrcntge1').value;
    var ipaddprcntge2 = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtIPaddPrcntge2').value;
    var ipaddprcntge3 = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtIPaddPrcntge3').value;
    var ipaddprcntge4 = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtIPaddPrcntge4').value;
    var ipaddprcntge5 = "";
    ipaddprcntge1 = ipaddprcntge1 == "" ? "0" : ipaddprcntge1;
    ipaddprcntge2 = ipaddprcntge2 == "" ? "0" : ipaddprcntge2;
    ipaddprcntge3 = ipaddprcntge3 == "" ? "0" : ipaddprcntge3;
    ipaddprcntge4 = ipaddprcntge4 == "" ? "0" : ipaddprcntge4;
    var CmpCreditlimtIP = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtipapprlimit').value;
    CmpCreditlimtIP = CmpCreditlimtIP == ("") ? "0" : CmpCreditlimtIP;

    var vldnruleidIPname = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtrulenameop').value;
    vldnruleidIPname = vldnruleidIPname == ("") ? "0" : vldnruleidIPname;

    if (vldnruleidIPname == '0' || vldnruleidIPname == "0") {
        document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_hdncmpruleidip').value = 0;
    }

    var vldnruleidIP = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_hdncmpruleidip').value;
    vldnruleidIP = vldnruleidIP == ("") ? "0" : vldnruleidIP;
    var cmplimitidip = document.getElementById('ctl00_ContentPlaceHolder1_hdncmplimitIDIP').value;
    cmplimitidip = cmplimitidip == ("") ? "0" : cmplimitidip;
    var cmplimitrevnoip = document.getElementById('ctl00_ContentPlaceHolder1_hdncmplimitRevnoIP').value;
    cmplimitrevnoip = cmplimitrevnoip == ("") ? "0" : cmplimitrevnoip;
    /*EMR*/
    var ERtrf1id = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtERTrf1__hiddenID').value;
    var ERtrf2id = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtERTrf2__hiddenID').value;
    var ERtrf3id = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtERTrf3__hiddenID').value;
    var ERtrf4id = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtERTrf4__hiddenID').value;
    var ERtrf5id = 0;
    // document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtERTrf5__hiddenID').value;
    var ERtrf1name = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtERTrf1_txtSearchControl').value;
    var ERtrf2name = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtERTrf2_txtSearchControl').value;
    var ERtrf3name = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtERTrf3_txtSearchControl').value;
    var ERtrf4name = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtERTrf4_txtSearchControl').value;
    var ERtrf5name = '';
    // document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtERTrf5_txtSearchControl').value;
    var ERdiscount1 = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtERdsc1').value;
    var ERdiscount2 = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtERdsc2').value;
    var ERdiscount3 = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtERdsc3').value;
    var ERdiscount4 = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtERdsc4').value;
    var ERdiscount5 = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtERdsc5').value;
    var er1trfrevno = document.getElementById('ctl00_ContentPlaceHolder1_hdner1trfrev').value;
    var er2trfrevno = document.getElementById('ctl00_ContentPlaceHolder1_hdner2trfrev').value;
    var er3trfrevno = document.getElementById('ctl00_ContentPlaceHolder1_hdner3trfrev').value;
    var er4trfrevno = document.getElementById('ctl00_ContentPlaceHolder1_hdner4trfrev').value;
    var er5trfrevno = document.getElementById('ctl00_ContentPlaceHolder1_hdner5trfrev').value;
    var ercopayrevno = document.getElementById('ctl00_ContentPlaceHolder1_hdnercopayrevno').value;
    var ercopayid = document.getElementById('ctl00_ContentPlaceHolder1_hdnercopayid').value;
    var er1comptrfid = document.getElementById('ctl00_ContentPlaceHolder1_hdner1comptrfid').value;
    var er2comptrfid = document.getElementById('ctl00_ContentPlaceHolder1_hdner2comptrfid').value;
    var er3comptrfid = document.getElementById('ctl00_ContentPlaceHolder1_hdner3comptrfid').value;
    var er4comptrfid = document.getElementById('ctl00_ContentPlaceHolder1_hdner4comptrfid').value;
    var er5comptrfid = document.getElementById('ctl00_ContentPlaceHolder1_hdner5comptrfid').value;
    var ercvrgrevno = document.getElementById('ctl00_ContentPlaceHolder1_hdnercvrgrevno').value;
    var ercvrgid = document.getElementById('ctl00_ContentPlaceHolder1_hdnercoverageid').value;
    ERdiscount1 = ERdiscount1 == "" ? "0" : ERdiscount1;
    ERdiscount2 = ERdiscount2 == "" ? "0" : ERdiscount2;
    ERdiscount3 = ERdiscount3 == "" ? "0" : ERdiscount3;
    ERdiscount4 = ERdiscount4 == "" ? "0" : ERdiscount4;
    ERdiscount5 = ERdiscount5 == "" ? "0" : ERdiscount5;
    /*ADD PERCENTAGE For ER*/
    var eraddprcntge1 = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtERaddPrcntge1').value;
    var eraddprcntge2 = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtERaddPrcntge2').value;
    var eraddprcntge3 = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtERaddPrcntge3').value;
    var eraddprcntge4 = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtERaddPrcntge4').value;
    var eraddprcntge5 = "";
    eraddprcntge1 = eraddprcntge1 == "" ? "0" : eraddprcntge1;
    eraddprcntge2 = eraddprcntge2 == "" ? "0" : eraddprcntge2;
    eraddprcntge3 = eraddprcntge3 == "" ? "0" : eraddprcntge3;
    eraddprcntge4 = eraddprcntge4 == "" ? "0" : eraddprcntge4;
    var CmpCreditlimtER = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txterapprlimit').value;
    CmpCreditlimtER = CmpCreditlimtER == ("") ? "0" : CmpCreditlimtER;
    var vldnruleidER = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_hdncmpruleider').value;
    vldnruleidER = vldnruleidER == ("") ? "0" : vldnruleidER;
    var cmplimitider = document.getElementById('ctl00_ContentPlaceHolder1_hdncmplimitIDER').value;
    cmplimitider = cmplimitider == ("") ? "0" : cmplimitider;
    var cmplimitrevnoer = document.getElementById('ctl00_ContentPlaceHolder1_hdncmplimitRevnoER').value;
    cmplimitrevnoer = cmplimitrevnoer == ("") ? "0" : cmplimitrevnoer;
    /*DC*/
    var DCtrf1id = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtDCTrf1__hiddenID').value;
    var DCtrf2id = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtDCTrf2__hiddenID').value;
    var DCtrf3id = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtDCTrf3__hiddenID').value;
    var DCtrf4id = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtDCTrf4__hiddenID').value;
    var DCtrf5id = 0;
    var DCtrf1name = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtDCTrf1_txtSearchControl').value;
    var DCtrf2name = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtDCTrf2_txtSearchControl').value;
    var DCtrf3name = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtDCTrf3_txtSearchControl').value;
    var DCtrf4name = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtDCTrf4_txtSearchControl').value;
    var DCtrf5name = '';
    var DCdiscount1 = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtDCdsc1').value;
    var DCdiscount2 = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtDCdsc2').value;
    var DCdiscount3 = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtDCdsc3').value;
    var DCdiscount4 = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtDCdsc4').value;
    var DCdiscount5 = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtDCdsc5').value;
    var dc1trfrevno = document.getElementById('ctl00_ContentPlaceHolder1_hdndc1trfrev').value;
    var dc2trfrevno = document.getElementById('ctl00_ContentPlaceHolder1_hdndc2trfrev').value;
    var dc3trfrevno = document.getElementById('ctl00_ContentPlaceHolder1_hdndc3trfrev').value;
    var dc4trfrevno = document.getElementById('ctl00_ContentPlaceHolder1_hdndc4trfrev').value;
    var dc5trfrevno = document.getElementById('ctl00_ContentPlaceHolder1_hdndc5trfrev').value;
    var dccopayrevno = document.getElementById('ctl00_ContentPlaceHolder1_hdndccopayrevno').value;
    var dccopayid = document.getElementById('ctl00_ContentPlaceHolder1_hdndccopayid').value;
    var dc1comptrfid = document.getElementById('ctl00_ContentPlaceHolder1_hdndc1comptrfid').value;
    var dc2comptrfid = document.getElementById('ctl00_ContentPlaceHolder1_hdndc2comptrfid').value;
    var dc3comptrfid = document.getElementById('ctl00_ContentPlaceHolder1_hdndc3comptrfid').value;
    var dc4comptrfid = document.getElementById('ctl00_ContentPlaceHolder1_hdndc4comptrfid').value;
    var dc5comptrfid = document.getElementById('ctl00_ContentPlaceHolder1_hdndc5comptrfid').value;
    var dccvrgrevno = document.getElementById('ctl00_ContentPlaceHolder1_hdndccvrgrevno').value;
    var dccvrgid = document.getElementById('ctl00_ContentPlaceHolder1_hdndccoverageid').value;
    var hdntrfrulerevno = document.getElementById('ctl00_ContentPlaceHolder1_hdntrfrulerevno').value;
    var hdncmptrfruleid = document.getElementById('ctl00_ContentPlaceHolder1_hdncmptrfruleid').value;
    var contact_rev_no = document.getElementById('ctl00_ContentPlaceHolder1_hdncontactrevno').value;
    var contract_rev_no = document.getElementById('ctl00_ContentPlaceHolder1_hdncontractRevNo').value;
    var contactid = document.getElementById('ctl00_ContentPlaceHolder1_hdncontactid').value;
    var contractid = document.getElementById('ctl00_ContentPlaceHolder1_hdncontractid').value;
    DCdiscount1 = DCdiscount1 == "" ? "0" : DCdiscount1;
    DCdiscount2 = DCdiscount2 == "" ? "0" : DCdiscount2;
    DCdiscount3 = DCdiscount3 == "" ? "0" : DCdiscount3;
    DCdiscount4 = DCdiscount4 == "" ? "0" : DCdiscount4;
    DCdiscount5 = DCdiscount5 == "" ? "0" : DCdiscount5;
    /*ADD PERCENTAGE For DC*/
    var dcaddprcntge1 = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtDCaddPrcntge1').value;
    var dcaddprcntge2 = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtDCaddPrcntge2').value;
    var dcaddprcntge3 = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtDCaddPrcntge3').value;
    var dcaddprcntge4 = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtDCaddPrcntge4').value;

    /* Work Flow */
    var flowidop = document.getElementById('ctl00_ContentPlaceHolder1_hdnflowidop').value;
    var flowidip = document.getElementById('ctl00_ContentPlaceHolder1_hdnflowidip').value;
    var flowider = document.getElementById('ctl00_ContentPlaceHolder1_hdnflowider').value;
    var flowiddc = document.getElementById('ctl00_ContentPlaceHolder1_hdnflowiddc').value;

    var dcaddprcntge5 = "";
    dcaddprcntge1 = dcaddprcntge1 == "" ? "0" : dcaddprcntge1;
    dcaddprcntge2 = dcaddprcntge2 == "" ? "0" : dcaddprcntge2;
    dcaddprcntge3 = dcaddprcntge3 == "" ? "0" : dcaddprcntge3;
    dcaddprcntge4 = dcaddprcntge4 == "" ? "0" : dcaddprcntge4;
    var CmpCreditlimtDC = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtdcapprlimit').value;
    CmpCreditlimtDC = CmpCreditlimtDC == ("") ? "0" : CmpCreditlimtDC;
    var vldnruleidDC = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_hdncmpruleiddc').value;
    vldnruleidDC = vldnruleidDC == ("") ? "0" : vldnruleidDC;
    var cmplimitiddc = document.getElementById('ctl00_ContentPlaceHolder1_hdncmplimitIDDC').value;
    cmplimitiddc = cmplimitiddc == ("") ? "0" : cmplimitiddc;
    var cmplimitrevnodc = document.getElementById('ctl00_ContentPlaceHolder1_hdncmplimitRevnoDC').value;
    cmplimitrevnodc = cmplimitrevnodc == ("") ? "0" : cmplimitrevnodc;
    var Dname = ""; var Ddesc = "";
    _xmlStr = "<root>";
    var cmprevno = document.getElementById('ctl00_ContentPlaceHolder1_hdncomprevno').value;
    var cmpid = document.getElementById('ctl00_ContentPlaceHolder1_hdncmpnyid').value;
    var ip_app_req_min_amt = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtipapprlimit').value;
    var op_app_req_min_amt = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtopapprlimit').value;


    var app_req_min_amt = document.getElementById('ctl00_ContentPlaceHolder1_txtapprovallimitamt').value;
    var tds_per = document.getElementById('ctl00_ContentPlaceHolder1_txttdsper').value;

    if (app_req_min_amt == null || app_req_min_amt == "" || app_req_min_amt == undefined) { app_req_min_amt = "0"; }
    if (tds_per == null || tds_per == "" || tds_per == undefined) { tds_per = "0"; }

    var dschrgbill = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel21_txtdschrgbills').value;
    if (dschrgbill == null || dschrgbill == "" || dschrgbill == undefined) { dschrgbill = "0"; }
    ip_app_req_min_amt = ip_app_req_min_amt == "" ? "0" : ip_app_req_min_amt;
    op_app_req_min_amt = op_app_req_min_amt == "" ? "0" : op_app_req_min_amt;
    var CONSULTATION_DISC_PER = 0, IS_FREE_CONSULTATION = 'N', FREE_CONSULTATION_DAYS = '0',
    FREE_CONSULTATION_TYPE_ID = 0, PHARMACY_CASH_CREDIT_ID = 0,
    PHARMACY_CASH_CREDIT_DISC_PER = 0,
    IS_PHARMACY_SERVICE_TAX = 'N', PHARMACY_SERVICE_TAX_PER = 0, PHARMACY_NUMBER_OF_PRINTS = 0, PHARMACY_VALIDITY_DAYS = 0, CORP_CONSULTATION_TYPE_ID = 0,
    FORMATE_PRIORITY_FOR_STATEMENTS = 0, IS_WARD_NAME_REQUIRED_IN_REPORT = 'N', IS_AAROGYASRI = 'N', IS_DISCHARGE_MEDICATION = 'N', IS_REQUIRED_DUE_AMT_EQ_TO_AP_AMT = 'N'
    IS_SALE_AS_PRC_RATE = 'N', IS_SMS_REQ = 'N', IS_BILLING_HEAD_EDIT = 'N', IS_RATE_EDIT = 'N', IS_SERVICE_CD_EDIT = 'N', IS_SERVICE_NAME_EDIT = 'N', IS_QTY_EDIT = 'N',
    IS_POSTED_DATE_EDIT = 'N', IS_NEW_SERVICE_INSERT = 'N', IS_REMOVE_SERVICE = 'N', DISC_MEDIC_LIMIT_PER = 0;

    CONSULTATION_DISC_PER = document.getElementById('ctl00_ContentPlaceHolder1_txtconsultationdiscper').value;
    if (CONSULTATION_DISC_PER == undefined || CONSULTATION_DISC_PER == '') {
        CONSULTATION_DISC_PER = 0;
    }
    IS_FREE_CONSULTATION = document.getElementById('ctl00_ContentPlaceHolder1_chkfreeconsultation').checked;
    if (IS_FREE_CONSULTATION == true) {
        IS_FREE_CONSULTATION = 'Y';
    } else {
        IS_FREE_CONSULTATION = 'N';
    }
    FREE_CONSULTATION_DAYS = document.getElementById('ctl00_ContentPlaceHolder1_txtfreeconsultationdays').value;
    if (FREE_CONSULTATION_DAYS == '' || FREE_CONSULTATION_DAYS == undefined) {
        FREE_CONSULTATION_DAYS = 0;
    }
    if (document.getElementById('ctl00_ContentPlaceHolder1_rbtnfreconsselection_0').checked == true) {
        FREE_CONSULTATION_TYPE_ID = 1;
    } else {
        FREE_CONSULTATION_TYPE_ID = 2;
    }
    if (document.getElementById('ctl00_ContentPlaceHolder1_RadioButtonList1_0').checked == true) {
        PHARMACY_CASH_CREDIT_ID = 1;
    }
    else if (document.getElementById('ctl00_ContentPlaceHolder1_RadioButtonList1_1').checked == true) {
        PHARMACY_CASH_CREDIT_ID = 2;
    } else {
        PHARMACY_CASH_CREDIT_ID = 0;
    }
    PHARMACY_CASH_CREDIT_DISC_PER = document.getElementById('ctl00_ContentPlaceHolder1_txtphardiscper').value;
    if (PHARMACY_CASH_CREDIT_DISC_PER == '' || PHARMACY_CASH_CREDIT_DISC_PER == undefined) {
        PHARMACY_CASH_CREDIT_DISC_PER = 0;
    }
    if (document.getElementById('ctl00_ContentPlaceHolder1_chkpharservicetax').checked == true) {
        IS_PHARMACY_SERVICE_TAX = 'Y';
    } else {
        IS_PHARMACY_SERVICE_TAX = 'N';
    }
    PHARMACY_SERVICE_TAX_PER = document.getElementById('ctl00_ContentPlaceHolder1_txtservicetxper').value;
    if (PHARMACY_SERVICE_TAX_PER == '' || PHARMACY_SERVICE_TAX_PER == undefined) {
        PHARMACY_SERVICE_TAX_PER = 0;
    }
    PHARMACY_NUMBER_OF_PRINTS = document.getElementById('ctl00_ContentPlaceHolder1_txtnumberofprints').value;
    if (PHARMACY_NUMBER_OF_PRINTS == '' || PHARMACY_NUMBER_OF_PRINTS == undefined) {
        PHARMACY_NUMBER_OF_PRINTS = 0;
    }
    PHARMACY_VALIDITY_DAYS = document.getElementById('ctl00_ContentPlaceHolder1_txtPharmacyValidity').value;
    if (PHARMACY_VALIDITY_DAYS == '' || PHARMACY_VALIDITY_DAYS == undefined) {
        PHARMACY_VALIDITY_DAYS = 0;
    }
    if (document.getElementById('ctl00_ContentPlaceHolder1_rbtncorpconsultations_0').checked == true) {
        CORP_CONSULTATION_TYPE_ID = 1;
    }
    else if (document.getElementById('ctl00_ContentPlaceHolder1_rbtncorpconsultations_1').checked == true) {
        CORP_CONSULTATION_TYPE_ID = 2;
    } else {
        CORP_CONSULTATION_TYPE_ID = 3;
    }

    if (document.getElementById('ctl00_ContentPlaceHolder1_rbtnformatepriority_0').checked == true) {
        FORMATE_PRIORITY_FOR_STATEMENTS = 1;
    }
    else if (document.getElementById('ctl00_ContentPlaceHolder1_rbtnformatepriority_1').checked == true) {
        FORMATE_PRIORITY_FOR_STATEMENTS = 2;
    }
    else if (document.getElementById('ctl00_ContentPlaceHolder1_rbtnformatepriority_2').checked == true) {
        FORMATE_PRIORITY_FOR_STATEMENTS = 3;
    } else {
        FORMATE_PRIORITY_FOR_STATEMENTS = 4;
    }
    if (document.getElementById('ctl00_ContentPlaceHolder1_chkisnotreqward').checked == true) {
        IS_WARD_NAME_REQUIRED_IN_REPORT = 'Y';
    }
    else {
        IS_WARD_NAME_REQUIRED_IN_REPORT = 'N';
    }
    if (document.getElementById('ctl00_ContentPlaceHolder1_chkisargsry').checked == true) {
        IS_AAROGYASRI = 'Y';
    }
    else {
        IS_AAROGYASRI = 'N';
    }
    if (document.getElementById('ctl00_ContentPlaceHolder1_chkdischmedictaion').checked == true) {
        IS_DISCHARGE_MEDICATION = 'Y';
    }
    else {
        IS_DISCHARGE_MEDICATION = 'N';
    }
    if (document.getElementById('ctl00_ContentPlaceHolder1_chkduemateqappramt').checked == true) {
        IS_REQUIRED_DUE_AMT_EQ_TO_AP_AMT = 'Y';
    }
    else {
        IS_REQUIRED_DUE_AMT_EQ_TO_AP_AMT = 'N';
    }
    if (document.getElementById('ctl00_ContentPlaceHolder1_chksaleaspurcrate').checked == true) {
        IS_SALE_AS_PRC_RATE = 'Y';
    }
    else {
        IS_SALE_AS_PRC_RATE = 'N';
    }
    if (document.getElementById('ctl00_ContentPlaceHolder1_chksmsrequired').checked == true) {
        IS_SMS_REQ = 'Y';
    }
    else {
        IS_SMS_REQ = 'N';
    }
    if (document.getElementById("ctl00_ContentPlaceHolder1_TabContainer1_TabPanel8_chkbillinhead").checked == true) {
        IS_BILLING_HEAD_EDIT = 'Y';
    }
    else {
        IS_BILLING_HEAD_EDIT = 'N';
    }
    if (document.getElementById("ctl00_ContentPlaceHolder1_TabContainer1_TabPanel8_chkRate").checked == true) {
        IS_RATE_EDIT = 'Y';
    }
    else {
        IS_RATE_EDIT = 'N';
    }
    if (document.getElementById("ctl00_ContentPlaceHolder1_TabContainer1_TabPanel8_chkServiceCd").checked == true) {
        IS_SERVICE_CD_EDIT = 'Y';
    }
    else {
        IS_SERVICE_CD_EDIT = 'N';
    }
    if (document.getElementById("ctl00_ContentPlaceHolder1_TabContainer1_TabPanel8_chkServiceName").checked == true) {
        IS_SERVICE_NAME_EDIT = 'Y';
    }
    else {
        IS_SERVICE_NAME_EDIT = 'N';
    }
    if (document.getElementById("ctl00_ContentPlaceHolder1_TabContainer1_TabPanel8_chkQuantity").checked == true) {
        IS_QTY_EDIT = 'Y';
    }
    else {
        IS_QTY_EDIT = 'N';
    }
    if (document.getElementById("ctl00_ContentPlaceHolder1_TabContainer1_TabPanel8_chkposteddate").checked == true) {
        IS_POSTED_DATE_EDIT = 'Y';
    }
    else {
        IS_POSTED_DATE_EDIT = 'N';
    }
    if (document.getElementById("ctl00_ContentPlaceHolder1_TabContainer1_TabPanel8_chkNewServiceInsert").checked == true) {
        IS_NEW_SERVICE_INSERT = 'Y';
    }
    else {
        IS_NEW_SERVICE_INSERT = 'N';
    }
    if (document.getElementById("ctl00_ContentPlaceHolder1_TabContainer1_TabPanel8_chkRemoveSevices").checked == true) {
        IS_REMOVE_SERVICE = 'Y';
    }
    else {
        IS_REMOVE_SERVICE = 'N';
    }
    DISC_MEDIC_LIMIT_PER = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel11_txtMedicationValue').value;
    if (DISC_MEDIC_LIMIT_PER == '' || DISC_MEDIC_LIMIT_PER == undefined) {
        DISC_MEDIC_LIMIT_PER = 0;
    }

    _xmlStr += "<COMPANY";
    _xmlStr += " COMPANY_ID=^" + cmpid + "^";
    _xmlStr += " COMPANY_REV_NO=^" + cmprevno + "^";
    _xmlStr += " COMPANY_FEE=^" + Company_Fee + "^";
    _xmlStr += " VAL_NO_OF_CONSULTATIONS=^" + NOOf_Cons + "^";
    _xmlStr += " VAL_NO_OF_DAYS=^" + NOOf_cons_Days + "^";
    _xmlStr += " IS_LETTER_REQUIRED=^" + Is_Letter_Req + "^";
    _xmlStr += " OP_CONS_PAYMENT=^" + Op_Cons_Payment + "^";
    _xmlStr += " IS_CONSELIGIBLE_WARD=^" + RefElgward + "^";
    _xmlStr += " IS_RATE_INC=^" + Rateincreq + "^";
    _xmlStr += " OP_PRIORITY_TARIFFS=^" + prioritytaeriffids + "^";
    _xmlStr += " OP_PRIORITY=^" + priorityids + "^";
    _xmlStr += " SRV_APPROVAL_REQ_FLAG=^" + SrvReqFlag + "^";
    _xmlStr += " REQ_REPORT_FORMAT=^" + Rptfrmtreq + "^";
    _xmlStr += " CORP_BILLDONE_DAYS=^" + Billdonedays + "^";
    _xmlStr += " SUBMIT_TO_MKTG=^" + submittomktg + "^";
    _xmlStr += " SUBMIT_TO_ORG=^" + submittoorg + "^";
    _xmlStr += " BILL_CLEARENCE_DAYS    =^" + Billclrdays + "^";
    _xmlStr += " CONS_TARIFF_ID =^" + Def_Tariffid + "^";
    _xmlStr += " AUTH_PERSION =^" + Auth_person + "^";
    _xmlStr += " CREDIT_LIMIT_AMT =^" + op_app_req_min_amt + "^";
    _xmlStr += " PHAR_DISC_PERC =^" + Phar_Disc_Perc + "^";
    _xmlStr += " IP_APPROVAL_REQ_MIN_AMT =^" + ip_app_req_min_amt + "^";
    _xmlStr += " OP_APPROVAL_REQ_MIN_AMT =^" + op_app_req_min_amt + "^";
    _xmlStr += " TDS_PER =^" + tds_per + "^";
    _xmlStr += " APPROVAL_LIMIT_AMT =^" + app_req_min_amt + "^";
    _xmlStr += " CONCESSION_PRIORITY =^" + document.getElementById('ctl00_ContentPlaceHolder1_ddlservices').value + "^";
    _xmlStr += " SUBMIT_TO_MKTG_DISCHRG=^" + dschrgbill + "^";
    _xmlStr += " COLOUR_ID=^" + Color + "^";
    /*NEWLY ADDED PARAMETERS*/
    _xmlStr += " CONSULTATION_DISC_PER=^" + CONSULTATION_DISC_PER + "^";
    _xmlStr += " IS_FREE_CONSULTATION=^" + IS_FREE_CONSULTATION + "^";
    _xmlStr += " FREE_CONSULTATION_DAYS=^" + FREE_CONSULTATION_DAYS + "^";
    _xmlStr += " FREE_CONSULTATION_TYPE_ID=^" + FREE_CONSULTATION_TYPE_ID + "^";
    _xmlStr += " PHARMACY_CASH_CREDIT_ID=^" + PHARMACY_CASH_CREDIT_ID + "^";
    _xmlStr += " PHARMACY_CASH_CREDIT_DISC_PER=^" + PHARMACY_CASH_CREDIT_DISC_PER + "^";
    _xmlStr += " IS_PHARMACY_SERVICE_TAX=^" + IS_PHARMACY_SERVICE_TAX + "^";
    _xmlStr += " PHARMACY_SERVICE_TAX_PER=^" + PHARMACY_SERVICE_TAX_PER + "^";
    _xmlStr += " PHARMACY_NUMBER_OF_PRINTS=^" + PHARMACY_NUMBER_OF_PRINTS + "^";
    _xmlStr += " PHARMACY_VALIDITY_DAYS=^" + PHARMACY_VALIDITY_DAYS + "^";
    _xmlStr += " CORP_CONSULTATION_TYPE_ID=^" + CORP_CONSULTATION_TYPE_ID + "^";
    _xmlStr += " FORMATE_PRIORITY_FOR_STATEMENTS=^" + FORMATE_PRIORITY_FOR_STATEMENTS + "^";
    _xmlStr += " IS_WARD_NAME_REQUIRED_IN_REPORT=^" + IS_WARD_NAME_REQUIRED_IN_REPORT + "^";
    _xmlStr += " IS_AAROGYASRI=^" + IS_AAROGYASRI + "^";
    _xmlStr += " IS_DISCHARGE_MEDICATION=^" + IS_DISCHARGE_MEDICATION + "^";
    _xmlStr += " IS_REQUIRED_DUE_AMT_EQ_TO_AP_AMT=^" + IS_REQUIRED_DUE_AMT_EQ_TO_AP_AMT + "^";
    _xmlStr += " IS_SALE_AS_PRC_RATE=^" + IS_SALE_AS_PRC_RATE + "^";
    _xmlStr += " IS_SMS_REQ=^" + IS_SMS_REQ + "^";
    _xmlStr += " IS_BILLING_HEAD_EDIT=^" + IS_BILLING_HEAD_EDIT + "^";
    _xmlStr += " IS_RATE_EDIT=^" + IS_RATE_EDIT + "^";
    _xmlStr += " IS_SERVICE_CD_EDIT=^" + IS_SERVICE_CD_EDIT + "^";
    _xmlStr += " IS_SERVICE_NAME_EDIT=^" + IS_SERVICE_NAME_EDIT + "^";
    _xmlStr += " IS_QTY_EDIT=^" + IS_QTY_EDIT + "^";
    _xmlStr += " IS_POSTED_DATE_EDIT=^" + IS_POSTED_DATE_EDIT + "^";
    _xmlStr += " IS_NEW_SERVICE_INSERT=^" + IS_NEW_SERVICE_INSERT + "^";
    _xmlStr += " IS_REMOVE_SERVICE=^" + IS_REMOVE_SERVICE + "^";
    _xmlStr += " DISC_MEDIC_LIMIT_PER=^" + DISC_MEDIC_LIMIT_PER + "^";
    _xmlStr += " />";

    if (Orgopperce != "" && Orgopperce != undefined) {
        Companycopay(opcopayid, cmpid, "2", Effect_from_dt, Effect_to_Dt, Orgopperce, Empopperce, opcopayrevno);
    }
    if (Orgipperce != "" && Orgipperce != undefined) {
        Companycopay(ipcopayid, cmpid, "1", Effect_from_dt, Effect_to_Dt, Orgipperce, Empipperce, ipcopayrevno);
    }
    if (Orgerperce != "" && Orgerperce != undefined) {
        Companycopay(ercopayid, cmpid, "4", Effect_from_dt, Effect_to_Dt, Orgerperce, Emperperce, ercopayrevno);
    }
    if (Orgdcperce != "" && Orgdcperce != undefined) {
        Companycopay(dccopayid, cmpid, "5", Effect_from_dt, Effect_to_Dt, Orgdcperce, Empdcperce, dccopayrevno);
    }
    if (OPtrf1id != "" && OPtrf1id != undefined && OPtrf1id != null && OPtrf1id != "0") {
        CompanyTariffPrioroties(op1comptrfid, cmpid, "2", OPtrf1id, "1", "N", OPdiscount1, Effect_from_dt, Effect_to_Dt, '#FFC0CB', op1trfrevno, OPtrf1name, opaddprcntge1);
        opcount++;
    }
    if (OPtrf2id != "" && OPtrf2id != undefined && OPtrf2id != null && OPtrf2id != "0") {
        CompanyTariffPrioroties(op2comptrfid, cmpid, "2", OPtrf2id, "2", "N", OPdiscount2, Effect_from_dt, Effect_to_Dt, '#FFDAB9', op2trfrevno, OPtrf2name, opaddprcntge2);
        opcount++;
    }
    if (OPtrf3id != "" && OPtrf3id != undefined && OPtrf3id != null && OPtrf3id != "0") {
        CompanyTariffPrioroties(op3comptrfid, cmpid, "2", OPtrf3id, "3", "N", OPdiscount3, Effect_from_dt, Effect_to_Dt, '#AED75B', op3trfrevno, OPtrf3name, opaddprcntge3);
        opcount++;
    }
    if (OPtrf4id != "" && OPtrf4id != undefined && OPtrf4id != null && OPtrf4id != "0") {
        CompanyTariffPrioroties(op4comptrfid, cmpid, "2", OPtrf4id, "4", "Y", OPdiscount4, Effect_from_dt, Effect_to_Dt, '#FFFFFF', op4trfrevno, OPtrf4name, opaddprcntge4);
        opcount++;
    }
    if (OPtrf5id != "" && OPtrf5id != undefined && OPtrf5id != null && OPtrf5id != "0") {
        CompanyTariffPrioroties(op5comptrfid, cmpid, "2", OPtrf5id, "5", "N", OPdiscount5, Effect_from_dt, Effect_to_Dt, '#FFFFFF', op5trfrevno, OPtrf5name, opaddprcntge5);
        opcount++;
    }

    if (IPtrf1id != "" && IPtrf1id != undefined && IPtrf1id != null && IPtrf1id != "0") {
        CompanyTariffPrioroties(ip1comptrfid, cmpid, "1", IPtrf1id, "1", "N", IPdiscount1, Effect_from_dt, Effect_to_Dt, '#FFC0CB', ip1trfrevno, IPtrf1name, ipaddprcntge1);
        ipcount++;
    }
    if (IPtrf2id != "" && IPtrf2id != undefined && IPtrf2id != null && IPtrf2id != "0") {
        CompanyTariffPrioroties(ip2comptrfid, cmpid, "1", IPtrf2id, "2", "N", IPdiscount2, Effect_from_dt, Effect_to_Dt, '#FFDAB9', ip2trfrevno, IPtrf2name, ipaddprcntge2);
        ipcount++;
    }
    if (IPtrf3id != "" && IPtrf3id != undefined && IPtrf3id != null && IPtrf3id != "0") {
        CompanyTariffPrioroties(ip3comptrfid, cmpid, "1", IPtrf3id, "3", "N", IPdiscount3, Effect_from_dt, Effect_to_Dt, '#AED75B', ip3trfrevno, IPtrf3name, ipaddprcntge3);
        ipcount++;
    }
    if (IPtrf4id != "" && IPtrf4id != undefined && IPtrf4id != null && IPtrf4id != "0") {
        CompanyTariffPrioroties(ip4comptrfid, cmpid, "1", IPtrf4id, "4", "Y", IPdiscount4, Effect_from_dt, Effect_to_Dt, '#FFFFFF', ip4trfrevno, IPtrf4name, ipaddprcntge4);
        ipcount++;
    }
    if (IPtrf5id != "" && IPtrf5id != undefined && IPtrf5id != null && IPtrf5id != "0") {
        CompanyTariffPrioroties(ip5comptrfid, cmpid, "1", IPtrf5id, "5", "N", IPdiscount5, Effect_from_dt, Effect_to_Dt, '#FFFFFF', ip5trfrevno, IPtrf5name, ipaddprcntge5);
        ipcount++;
    }
    if (ERtrf1id != "" && ERtrf1id != undefined && ERtrf1id != null && ERtrf1id != "0") {
        CompanyTariffPrioroties(er1comptrfid, cmpid, "4", ERtrf1id, "1", "N", ERdiscount1, Effect_from_dt, Effect_to_Dt, '#FFC0CB', er1trfrevno, ERtrf1name, eraddprcntge1);
        ercount++;
    }
    if (ERtrf2id != "" && ERtrf2id != undefined && ERtrf2id != null && ERtrf2id != "0") {
        CompanyTariffPrioroties(er2comptrfid, cmpid, "4", ERtrf2id, "2", "N", ERdiscount2, Effect_from_dt, Effect_to_Dt, '#FFDAB9', er2trfrevno, ERtrf2name, eraddprcntge2);
        ercount++;
    }
    if (ERtrf3id != "" && ERtrf3id != undefined && ERtrf3id != null && ERtrf3id != "0") {
        CompanyTariffPrioroties(er3comptrfid, cmpid, "4", ERtrf3id, "3", "N", ERdiscount3, Effect_from_dt, Effect_to_Dt, '#AED75B', er3trfrevno, ERtrf3name, eraddprcntge3);
        ercount++;
    }
    if (ERtrf4id != "" && ERtrf4id != undefined && ERtrf4id != null && ERtrf4id != "0") {
        CompanyTariffPrioroties(er4comptrfid, cmpid, "4", ERtrf4id, "4", "Y", ERdiscount4, Effect_from_dt, Effect_to_Dt, '#FFFFFF', er4trfrevno, ERtrf4name, eraddprcntge4);
        ercount++;
    }
    if (ERtrf5id != "" && ERtrf5id != undefined && ERtrf5id != null && ERtrf5id != "0") {
        CompanyTariffPrioroties(er5comptrfid, cmpid, "4", ERtrf5id, "5", "N", ERdiscount5, Effect_from_dt, Effect_to_Dt, '#FFFFFF', er5trfrevno, ERtrf5name, eraddprcntge5);
        ercount++;
    }

    if (DCtrf1id != "" && DCtrf1id != undefined && DCtrf1id != null && DCtrf1id != "0") {
        CompanyTariffPrioroties(dc1comptrfid, cmpid, "5", DCtrf1id, "1", "N", DCdiscount1, Effect_from_dt, Effect_to_Dt, '#FFC0CB', dc1trfrevno, DCtrf1name, dcaddprcntge1);
        dccount++;
    }
    if (DCtrf2id != "" && DCtrf2id != undefined && DCtrf2id != null && DCtrf2id != "0") {
        CompanyTariffPrioroties(dc2comptrfid, cmpid, "5", DCtrf2id, "2", "N", DCdiscount2, Effect_from_dt, Effect_to_Dt, '#FFDAB9', dc2trfrevno, DCtrf2name, dcaddprcntge2);
        dccount++;
    }
    if (DCtrf3id != "" && DCtrf3id != undefined && DCtrf3id != null && DCtrf3id != "0") {
        CompanyTariffPrioroties(dc3comptrfid, cmpid, "5", DCtrf3id, "3", "N", DCdiscount3, Effect_from_dt, Effect_to_Dt, '#AED75B', dc3trfrevno, DCtrf3name, dcaddprcntge3);
        dccount++;
    }
    if (DCtrf4id != "" && DCtrf4id != undefined && DCtrf4id != null && DCtrf4id != "0") {
        CompanyTariffPrioroties(dc4comptrfid, cmpid, "5", DCtrf4id, "4", "Y", DCdiscount4, Effect_from_dt, Effect_to_Dt, '#FFFFFF', dc4trfrevno, DCtrf4name, dcaddprcntge4);
        dccount++;
    }
    if (DCtrf5id != "" && DCtrf5id != undefined && DCtrf5id != null && DCtrf5id != "0") {
        CompanyTariffPrioroties(dc5comptrfid, cmpid, "5", DCtrf5id, "5", "N", DCdiscount5, Effect_from_dt, Effect_to_Dt, '#FFFFFF', dc5trfrevno, DCtrf5name, dcaddprcntge5);
        dccount++;
    }
    if (contactid == "")
        contactid = "0";
    _xmlStr += "<COMPANY_CONTACT";
    _xmlStr += " COMPANY_CONTACT_ID=^" + contactid + "^";
    _xmlStr += " COMPANY_ID=^" + cmpid + "^";
    _xmlStr += " COMPANY_REV_NO=^" + "1" + "^";
    _xmlStr += " CONTACT_PERSON_NAME=^" + Contact_Person_Name + "^";
    _xmlStr += " COMPANY_CONTACT_REV_NO=^" + hdncntact_revNO + "^";
    _xmlStr += " />";

    if (contractid == "")
        contractid = "0";
    _xmlStr += "<COMPANY_CONTRACT";
    _xmlStr += " COMPANY_CONTRACT_ID=^" + contractid + "^";
    _xmlStr += " COMPANY_CONTRACT_REV_NO=^" + contract_rev_no + "^";
    _xmlStr += " COMPANY_ID=^" + cmpid + "^";
    _xmlStr += " CONTRACT_NO=^" + Contract_No + "^";
    _xmlStr += " CONTRACT_DT=^" + Contract_Dt + "^";
    _xmlStr += " CONTRACT_NOTES=^" + Contract_Notes + "^";
    _xmlStr += " EFFECT_FROM_DT=^" + Effect_from_dt + "^";
    _xmlStr += " EFFECT_TO_DT=^" + Effect_to_Dt + "^";
    _xmlStr += " />";

    if (hdntrfrulerevno == "")
        hdntrfrulerevno = "0";
    if (hdncmptrfruleid == "")
        hdncmptrfruleid = "0";
    _xmlStr += "<COMPANY_TARIFF_RULE";
    _xmlStr += " COMPANY_TARIFF_RULE_ID=^" + hdncmptrfruleid + "^";
    _xmlStr += " COMPANY_TARIFF_RULE_REV_NO=^" + hdntrfrulerevno + "^";
    _xmlStr += " COMPANY_ID=^" + cmpid + "^";
    _xmlStr += " TARIFF_RULE_ID=^" + Tariff_Rule_Id + "^";
    _xmlStr += " TARIFF_RULE_REV_NO=^" + "1" + "^";
    _xmlStr += " EFFECT_FROM_DT=^" + Effect_from_dt + "^";
    _xmlStr += " EFFECT_TO_DT=^" + Effect_to_Dt + "^";
    _xmlStr += " />";

    if (opcount > 0 || ipcount > 0 || ercount > 0 || dccount > 0) {
        if (opcount > 0)
            Cmpnylimit(cmplimitidop, cmplimitrevnoop, cmpid, '2', vldnruleidOP, CmpCreditlimtOP, flowidop);
        if (ipcount > 0)
            Cmpnylimit(cmplimitidip, cmplimitrevnoip, cmpid, '1', vldnruleidIP, CmpCreditlimtIP, flowidip);
        if (ercount > 0)
            Cmpnylimit(cmplimitider, cmplimitrevnoer, cmpid, '4', vldnruleidER, CmpCreditlimtER, flowider);
        if (dccount > 0)
            Cmpnylimit(cmplimitiddc, cmplimitrevnodc, cmpid, '5', vldnruleidDC, CmpCreditlimtDC, flowiddc);
    }
    if (opcount > 0 || ipcount > 0 || ercount > 0 || dccount > 0) {
        if (opcount > 0)
            companycoverage(cmpid, '2', opcvrgid, opcvrgrevno);
        if (ipcount > 0)
            companycoverage(cmpid, '1', ipcvrgid, ipcvrgrevno);
        if (ercount > 0)
            companycoverage(cmpid, '4', ercvrgid, ercvrgrevno);
        if (dccount > 0)
            companycoverage(cmpid, '5', dccvrgid, dccvrgrevno);
    }
    _xmlStr += "</root>";
    document.getElementById('ctl00_ContentPlaceHolder1_hdnsavexml').value = _xmlStr;
}
/*Rule Name Start*/
function OnRuleSelectionOP(sender, eventArgs) {
    var results = eval('(' + eventArgs.get_value() + ')');
    document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_hdncmpruleidop').value = results.ListObjVal[0].VLDATN_RULE_ID;
    document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtrulenameop').value = results.ListObjVal[0].VLDATN_RULE_NAME;
}
function OnRuleSelectionIP(sender, eventArgs) {
    var results = eval('(' + eventArgs.get_value() + ')');
    document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_hdncmpruleidip').value = results.ListObjVal[0].VLDATN_RULE_ID;
    document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtrulenameip').value = results.ListObjVal[0].VLDATN_RULE_NAME;
}
function OnRuleSelectionER(sender, eventArgs) {
    var results = eval('(' + eventArgs.get_value() + ')');
    document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_hdncmpruleider').value = results.ListObjVal[0].VLDATN_RULE_ID;
    document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtrulenameer').value = results.ListObjVal[0].VLDATN_RULE_NAME;
}
function OnRuleSelectionDC(sender, eventArgs) {
    var results = eval('(' + eventArgs.get_value() + ')');
    document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_hdncmpruleiddc').value = results.ListObjVal[0].VLDATN_RULE_ID;
    document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtrulenamedc').value = results.ListObjVal[0].VLDATN_RULE_NAME;
}
function BindRuleList(obj) {
    $('[id*=divRule]')[0].style.display = 'block';
    var cName = ''; var pText = '';
    var param = param || {};
    param.dataKey = "VLDATN_RULE_ID";
    param.pageSize = 10;
    param.pageNum = 1;
    param.defaultWSParams = { _cName: cName, _pText: pText, _advSrch: '', ProcName: "PR_GETALL_VALIDATION_RULE", _fDt: '', _tDt: '', flag: '' };
    param.wsPath = "CreditOrgService.asmx/BindGetAllGrid";
    param.wsFilterPath = "CreditOrgService.asmx/BindGetAllGrid";
    param.template = ["VLDATN_RULE_CD*VLDATN_RULE_CD"
                              , "VLDATN_RULE_NAME*VLDATN_RULE_NAME"
                              , "VLDATN_AUTH_NAME*VLDATN_AUTH_NAME"
                              , "VLDATN_DEFINE_BY_NAME*VLDATN_DEFINE_BY_NAME"];
    param.header = [{ col: "Rule Code", sort: true, filter: true }
            , { col: "Rule Name", sort: true, filter: true }
            , { col: "Authorization By", sort: true, filter: true }
            , { col: "Rule Defined by", sort: true, filter: true}];
    param.enablePaging = true;
    param.enableTrace = true;
    param.enableFilter = true;
    param.enableCheckbox = false;
    param.enableSorting = false; param.tableTemplate = true;
    param.rowClick = function (key) {
        OnCmpRuleSelection(key, obj);
    };
    gridControl = $("#divhealthcard").jtable(param);
    return false;
}
function btnclose12() {
    $('[id*=divRule]')[0].style.display = 'none';
}
function OnCmpRuleSelection(data, obj) {
    if (obj == 'OP') {
        document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_hdncmpruleidop').value = data.VLDATN_RULE_ID;
        document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtrulenameop').value = data.VLDATN_RULE_NAME;
    }
    if (obj == 'IP') {
        document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_hdncmpruleidip').value = data.VLDATN_RULE_ID;
        document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtrulenameip').value = data.VLDATN_RULE_NAME;
    }
    if (obj == 'ER') {
        document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_hdncmpruleider').value = data.VLDATN_RULE_ID;
        document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtrulenameer').value = data.VLDATN_RULE_NAME;
    }
    if (obj == 'DC') {
        document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_hdncmpruleiddc').value = data.VLDATN_RULE_ID;
        document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtrulenamedc').value = data.VLDATN_RULE_NAME;
    }
    $('[id*=divRule]')[0].style.display = 'none';
}
/*Rule Name Map End*/
var copycheck = false;
function copyfromall(obj, type) {
    copycheck = false;
    if (type == 'OP') {
        assigncopyop(obj.value);
        if (obj.value == 'ALL') {
            optoer();
            optoip();
            optodc();
        }
        if (obj.value == "Select") {
            ClearOPTarriffSelection()
        }
    }

    if (type == 'IP') {
        assigncopyip(obj);
        if (obj.value == 'ALL') {
            iptoop();
            iptoer();
            iptodc();
        }
        if (obj.value == "Select") {
            ClearIPTarriffSelection()
        }
    }
    if (type == 'ER') {
        assigncopyer(obj);
        if (obj.value == 'ALL') {
            ertoop();
            ertoip();
            ertodc();
        }
        if (obj.value == "Select") {
            ClearERTarriffSelection()
        }
    }
    if (type == 'DC') {
        assigncopydc(obj);
        if (obj.value == 'ALL') {
            dctoop();
            dctoip();
            dctoer();
        }
        if (obj.value == "Select") {
            ClearDCTarriffSelection()
        }
    }
}
function assigncopyop(obj) {
    if (obj == 'IP') {
        iptoop();
    }
    if (obj == 'ER') {
        ertoop();
    }
    if (obj == 'DC') {
        dctoop();
    }
}
function assigncopyip(obj) {
    if (obj.value == 'OP') {
        optoip();
    }
    if (obj.value == 'ER') {
        ertoip();
    }
    if (obj.value == 'DC') {
        dctoip();
    }
}
function assigncopyer(obj) {
    if (obj.value == 'IP') {
        iptoer();
    }
    if (obj.value == 'OP') {
        optoer();
    }
    if (obj.value == 'DC') {
        dctoer();
    }
}
function assigncopydc(obj) {
    if (obj.value == 'IP') {
        iptodc();
    }
    if (obj.value == 'ER') {
        ertodc();
    }
    if (obj.value == 'OP') {
        optodc();
    }
}
function disableop(val) {
    document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtOPTrf1_txtSearchControl').disabled = val;
    document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtOPTrf2_txtSearchControl').disabled = val;
    document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtOPTrf3_txtSearchControl').disabled = val;
    document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtOPTrf4_txtSearchControl').disabled = val;
    document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtrulenameop').disabled = val;
    document.getElementById('lk_btn_ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtOPTrf1').disabled = val;
    document.getElementById('lk_btn_ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtOPTrf2').disabled = val;
    document.getElementById('lk_btn_ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtOPTrf3').disabled = val;
    document.getElementById('lk_btn_ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtOPTrf4').disabled = val;
    document.getElementById('BtnSrvSearchop').disabled = val;
    document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtOPdsc1').disabled = val;
    document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtOPdsc2').disabled = val;
    document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtOPdsc3').disabled = val;
    document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtOPdsc4').disabled = val;
    document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtOPdsc5').disabled = val;
    document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtoporgper').disabled = val;
    document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtopempper').disabled = val;
    document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtopapprlimit').disabled = val;

    document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtOPaddPrcntge1').value = val;
    document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtOPaddPrcntge2').value = val;
    document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtOPaddPrcntge3').value = val;
    document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtOPaddPrcntge4').value = val;

}
function disableip(val) {
    document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtIPTrf1_txtSearchControl').disabled = val;
    document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtIPTrf2_txtSearchControl').disabled = val;
    document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtIPTrf3_txtSearchControl').disabled = val;
    document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtIPTrf4_txtSearchControl').disabled = val;
    document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtrulenameip').disabled = val;
    document.getElementById('lk_btn_ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtIPTrf1').disabled = val;
    document.getElementById('lk_btn_ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtIPTrf2').disabled = val;
    document.getElementById('lk_btn_ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtIPTrf3').disabled = val;
    document.getElementById('lk_btn_ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtIPTrf4').disabled = val;
    document.getElementById('BtnSrvSearchip').disabled = val;
    document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtIPdsc1').disabled = val;
    document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtIPdsc2').disabled = val;
    document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtIPdsc3').disabled = val;
    document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtIPdsc4').disabled = val;
    document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtIPdsc5').disabled = val;
    document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtiporgper').disabled = val;
    document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtipempper').disabled = val;
    document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtipapprlimit').disabled = val;

    document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtIPaddPrcntge1').value = val;
    document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtIPaddPrcntge2').value = val;
    document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtIPaddPrcntge3').value = val;
    document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtIPaddPrcntge4').value = val;

}
function disableer(val) {
    document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtERTrf1_txtSearchControl').disabled = val;
    document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtERTrf2_txtSearchControl').disabled = val;
    document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtERTrf3_txtSearchControl').disabled = val;
    document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtERTrf4_txtSearchControl').disabled = val;
    document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtrulenameer').disabled = val;
    document.getElementById('lk_btn_ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtERTrf1').disabled = val;
    document.getElementById('lk_btn_ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtERTrf2').disabled = val;
    document.getElementById('lk_btn_ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtERTrf3').disabled = val;
    document.getElementById('lk_btn_ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtERTrf4').disabled = val;
    document.getElementById('BtnSrvSearcher').disabled = val;
    document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtERdsc1').disabled = val;
    document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtERdsc2').disabled = val;
    document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtERdsc3').disabled = val;
    document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtERdsc4').disabled = val;
    document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtERdsc5').disabled = val;
    document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txterorgper').disabled = val;
    document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txterempper').disabled = val;
    document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txterapprlimit').disabled = val;
    document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtERaddPrcntge1').value = val;
    document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtERaddPrcntge2').value = val;
    document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtERaddPrcntge3').value = val;
    document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtERaddPrcntge4').value = val;


}
function disabledc(val) {
    document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtDCTrf1_txtSearchControl').disabled = val;
    document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtDCTrf2_txtSearchControl').disabled = val;
    document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtDCTrf3_txtSearchControl').disabled = val;
    document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtDCTrf4_txtSearchControl').disabled = val;
    document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtrulenamedc').disabled = val;
    document.getElementById('lk_btn_ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtDCTrf1').disabled = val;
    document.getElementById('lk_btn_ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtDCTrf2').disabled = val;
    document.getElementById('lk_btn_ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtDCTrf3').disabled = val;
    document.getElementById('lk_btn_ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtDCTrf4').disabled = val;
    document.getElementById('BtnSrvSearchdc').disabled = val;
    document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtDCdsc1').disabled = val;
    document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtDCdsc2').disabled = val;
    document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtDCdsc3').disabled = val;
    document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtDCdsc4').disabled = val;
    document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtDCdsc5').disabled = val;
    document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtdcorgper').disabled = val;
    document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtdcempper').disabled = val;
    document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtdcapprlimit').disabled = val;
    document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtDCaddPrcntge1').value = val;
    document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtDCaddPrcntge2').value = val;
    document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtDCaddPrcntge3').value = val;
    document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtDCaddPrcntge4').value = val;

}
function iptoop() {
    if (document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtIPTrf1__hiddenID').value <= 0 &&
    document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtIPTrf2__hiddenID').value <= 0 &&
    document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtIPTrf3__hiddenID').value <= 0 &&
    document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtIPTrf4__hiddenID').value <= 0) {
        copycheck = true;
        $(".stoast").toastText("warning", "Please Select At least one tarriff....!", 2, 3);
        return false;
    }
    else {
        document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtOPTrf1_txtSearchControl').value = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtIPTrf1_txtSearchControl').value;
        document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtOPTrf2_txtSearchControl').value = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtIPTrf2_txtSearchControl').value;
        document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtOPTrf3_txtSearchControl').value = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtIPTrf3_txtSearchControl').value;
        document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtOPTrf4_txtSearchControl').value = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtIPTrf4_txtSearchControl').value;
        document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtOPTrf1__hiddenID').value = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtIPTrf1__hiddenID').value;
        document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtOPTrf2__hiddenID').value = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtIPTrf2__hiddenID').value;
        document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtOPTrf3__hiddenID').value = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtIPTrf3__hiddenID').value;
        document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtOPTrf4__hiddenID').value = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtIPTrf4__hiddenID').value;
        document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtOPdsc1').value = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtIPdsc1').value;
        document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtOPdsc2').value = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtIPdsc2').value;
        document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtOPdsc3').value = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtIPdsc3').value;
        document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtOPdsc4').value = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtIPdsc4').value;
        document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtrulenameop').value = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtrulenameip').value;

        document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_hdncmpruleidop').value = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_hdncmpruleidip').value;
        document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtOPdsc5').value = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtIPdsc5').value;
        document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtoporgper').value = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtiporgper').value;
        document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtopempper').value = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtipempper').value;
        document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtopapprlimit').value = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtipapprlimit').value;

        document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtOPaddPrcntge1').value = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtIPaddPrcntge1').value;
        document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtOPaddPrcntge2').value = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtIPaddPrcntge2').value;
        document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtOPaddPrcntge3').value = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtIPaddPrcntge3').value;
        document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtOPaddPrcntge4').value = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtIPaddPrcntge4').value
    }
}

function ertoop() {
    if (document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtERTrf1__hiddenID').value <= 0 && document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtERTrf2__hiddenID').value <= 0 &&
    document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtERTrf3__hiddenID').value <= 0 && document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtERTrf4__hiddenID').value <= 0) {
        copycheck = true;
        $(".stoast").toastText("warning", "Please Select At least one tarriff....!", 2, 3);
        return false;
    }
    else {
        document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtOPTrf1_txtSearchControl').value = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtERTrf1_txtSearchControl').value;
        document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtOPTrf2_txtSearchControl').value = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtERTrf2_txtSearchControl').value;
        document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtOPTrf3_txtSearchControl').value = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtERTrf3_txtSearchControl').value;
        document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtOPTrf4_txtSearchControl').value = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtERTrf4_txtSearchControl').value;
        document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtOPTrf1__hiddenID').value = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtERTrf1__hiddenID').value;
        document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtOPTrf2__hiddenID').value = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtERTrf2__hiddenID').value;
        document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtOPTrf3__hiddenID').value = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtERTrf3__hiddenID').value;
        document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtOPTrf4__hiddenID').value = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtERTrf4__hiddenID').value;
        document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtOPdsc1').value = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtERdsc1').value;
        document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtOPdsc2').value = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtERdsc2').value;
        document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtOPdsc3').value = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtERdsc3').value;
        document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtOPdsc4').value = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtERdsc4').value;
        document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtrulenameop').value = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtrulenameer').value;

        document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_hdncmpruleidop').value = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_hdncmpruleider').value;
        document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtOPdsc5').value = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtERdsc5').value;
        document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtoporgper').value = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txterorgper').value;
        document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtopempper').value = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txterempper').value;
        document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtopapprlimit').value = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txterapprlimit').value;

        document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtOPaddPrcntge1').value = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtERaddPrcntge1').value;
        document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtOPaddPrcntge2').value = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtERaddPrcntge2').value;
        document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtOPaddPrcntge3').value = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtERaddPrcntge3').value;
        document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtOPaddPrcntge4').value = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtERaddPrcntge4').value

    }
}
function dctoop() {
    if (document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtDCTrf1__hiddenID').value <= 0 &&
    document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtDCTrf2__hiddenID').value <= 0 &&
    document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtDCTrf3__hiddenID').value <= 0 &&
    document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtDCTrf4__hiddenID').value <= 0) {
        copycheck = true;
        $(".stoast").toastText("warning", "Please Select At least one tarriff....!", 2, 3);
        return false;
    }
    else {
        document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtOPTrf1_txtSearchControl').value = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtDCTrf1_txtSearchControl').value;
        document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtOPTrf2_txtSearchControl').value = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtDCTrf2_txtSearchControl').value;
        document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtOPTrf3_txtSearchControl').value = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtDCTrf3_txtSearchControl').value;
        document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtOPTrf4_txtSearchControl').value = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtDCTrf4_txtSearchControl').value;
        document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtOPTrf1__hiddenID').value = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtDCTrf1__hiddenID').value;
        document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtOPTrf2__hiddenID').value = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtDCTrf2__hiddenID').value;
        document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtOPTrf3__hiddenID').value = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtDCTrf3__hiddenID').value;
        document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtOPTrf4__hiddenID').value = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtDCTrf4__hiddenID').value;
        document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtOPdsc1').value = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtDCdsc1').value;
        document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtOPdsc2').value = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtDCdsc2').value;
        document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtOPdsc3').value = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtDCdsc3').value;
        document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtOPdsc4').value = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtDCdsc4').value;
        document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtrulenameop').value = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtrulenamedc').value;

        document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_hdncmpruleidop').value == document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_hdncmpruleiddc').value;
        document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtOPdsc5').value = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtDCdsc5').value;
        document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtoporgper').value = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtdcorgper').value;
        document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtopempper').value = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtdcempper').value;
        document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtopapprlimit').value = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtdcapprlimit').value;

        document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtOPaddPrcntge1').value = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtDCaddPrcntge1').value;
        document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtOPaddPrcntge2').value = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtDCaddPrcntge2').value;
        document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtOPaddPrcntge3').value = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtDCaddPrcntge3').value;
        document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtOPaddPrcntge4').value = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtDCaddPrcntge4').value

    }
}
function optoip() {
    if (document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtOPTrf1__hiddenID').value <= 0 &&
    document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtOPTrf2__hiddenID').value <= 0 &&
    document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtOPTrf3__hiddenID').value <= 0 &&
    document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtOPTrf4__hiddenID').value <= 0) {
        if (copycheck != true) {
            $(".stoast").toastText("warning", "Please Select At least one tarriff....!", 2, 3);
            return false;
        }
    }
    else {
        document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtIPTrf1_txtSearchControl').value = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtOPTrf1_txtSearchControl').value;
        document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtIPTrf2_txtSearchControl').value = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtOPTrf2_txtSearchControl').value;
        document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtIPTrf3_txtSearchControl').value = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtOPTrf3_txtSearchControl').value;
        document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtIPTrf4_txtSearchControl').value = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtOPTrf4_txtSearchControl').value;
        document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtIPTrf1__hiddenID').value = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtOPTrf1__hiddenID').value;
        document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtIPTrf2__hiddenID').value = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtOPTrf2__hiddenID').value;
        document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtIPTrf3__hiddenID').value = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtOPTrf3__hiddenID').value;
        document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtIPTrf4__hiddenID').value = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtOPTrf4__hiddenID').value;
        document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtIPdsc1').value = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtOPdsc1').value;
        document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtIPdsc2').value = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtOPdsc2').value;
        document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtIPdsc3').value = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtOPdsc3').value;
        document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtIPdsc4').value = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtOPdsc4').value;
        document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtrulenameip').value = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtrulenameop').value;

        document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_hdncmpruleidip').value = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_hdncmpruleidop').value;
        document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtIPdsc5').value = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtOPdsc5').value;
        document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtiporgper').value = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtoporgper').value;
        document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtipempper').value = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtopempper').value;
        document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtipapprlimit').value = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtopapprlimit').value;

        document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtIPaddPrcntge1').value = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtOPaddPrcntge1').value;
        document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtIPaddPrcntge2').value = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtOPaddPrcntge2').value;
        document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtIPaddPrcntge3').value = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtOPaddPrcntge3').value;
        document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtIPaddPrcntge4').value = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtOPaddPrcntge4').value

    }
}
function ertoip() {
    if (document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtERTrf1__hiddenID').value <= 0 &&
    document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtERTrf2__hiddenID').value <= 0 &&
    document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtERTrf3__hiddenID').value <= 0 &&
    document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtERTrf4__hiddenID').value <= 0) {
        if (copycheck != true) {
            $(".stoast").toastText("warning", "Please Select At least one tarriff....!", 2, 3);
            return false;
        }
    }
    else {
        document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtIPTrf1_txtSearchControl').value = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtERTrf1_txtSearchControl').value;
        document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtIPTrf2_txtSearchControl').value = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtERTrf2_txtSearchControl').value;
        document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtIPTrf3_txtSearchControl').value = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtERTrf3_txtSearchControl').value;
        document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtIPTrf4_txtSearchControl').value = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtERTrf4_txtSearchControl').value;
        document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtIPTrf1__hiddenID').value = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtERTrf1__hiddenID').value;
        document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtIPTrf2__hiddenID').value = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtERTrf2__hiddenID').value;
        document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtIPTrf3__hiddenID').value = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtERTrf3__hiddenID').value;
        document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtIPTrf4__hiddenID').value = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtERTrf4__hiddenID').value;
        document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtIPdsc1').value = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtERdsc1').value;
        document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtIPdsc2').value = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtERdsc2').value;
        document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtIPdsc3').value = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtERdsc3').value;
        document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtIPdsc4').value = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtERdsc4').value;
        document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtrulenameip').value = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtrulenameer').value;

        document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_hdncmpruleidip').value = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_hdncmpruleider').value;
        document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtIPdsc5').value = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtERdsc5').value;
        document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtiporgper').value = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txterorgper').value;
        document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtipempper').value = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txterempper').value;
        document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtipapprlimit').value = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txterapprlimit').value;



        document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtIPaddPrcntge1').value = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtERaddPrcntge1').value;
        document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtIPaddPrcntge2').value = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtERaddPrcntge2').value;
        document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtIPaddPrcntge3').value = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtERaddPrcntge3').value;
        document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtIPaddPrcntge4').value = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtERaddPrcntge4').value
    }
}
function dctoip() {
    if (document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtDCTrf1__hiddenID').value <= 0 &&
    document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtDCTrf2__hiddenID').value <= 0 &&
    document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtDCTrf3__hiddenID').value <= 0 &&
    document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtDCTrf4__hiddenID').value <= 0) {
        if (copycheck != true) {
            $(".stoast").toastText("warning", "Please Select At least one tarriff....!", 2, 3);
            return false;
        }
    }
    else {
        document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtIPTrf1_txtSearchControl').value = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtDCTrf1_txtSearchControl').value;
        document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtIPTrf2_txtSearchControl').value = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtDCTrf2_txtSearchControl').value;
        document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtIPTrf3_txtSearchControl').value = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtDCTrf3_txtSearchControl').value;
        document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtIPTrf4_txtSearchControl').value = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtDCTrf4_txtSearchControl').value;
        document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtIPTrf1__hiddenID').value = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtDCTrf1__hiddenID').value;
        document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtIPTrf2__hiddenID').value = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtDCTrf2__hiddenID').value;
        document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtIPTrf3__hiddenID').value = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtDCTrf3__hiddenID').value;
        document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtIPTrf4__hiddenID').value = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtDCTrf4__hiddenID').value;
        document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtIPdsc1').value = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtDCdsc1').value;
        document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtIPdsc2').value = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtDCdsc2').value;
        document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtIPdsc3').value = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtDCdsc3').value;
        document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtIPdsc4').value = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtDCdsc4').value;
        document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtrulenameip').value = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtrulenamedc').value;

        document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_hdncmpruleidip').value = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_hdncmpruleiddc').value;
        document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtIPdsc5').value = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtDCdsc5').value;
        document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtiporgper').value = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtdcorgper').value;
        document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtipempper').value = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtdcempper').value;
        document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtipapprlimit').value = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtdcapprlimit').value;

        document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtIPaddPrcntge1').value = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtDCaddPrcntge1').value;
        document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtIPaddPrcntge2').value = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtDCaddPrcntge2').value;
        document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtIPaddPrcntge3').value = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtDCaddPrcntge3').value;
        document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtIPaddPrcntge4').value = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtDCaddPrcntge4').value
    }
}

function optoer() {
    if (document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtOPTrf1__hiddenID').value <= 0 &&
    document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtOPTrf2__hiddenID').value <= 0 &&
    document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtOPTrf3__hiddenID').value <= 0 &&
    document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtOPTrf4__hiddenID').value <= 0) {
        $(".stoast").toastText("warning", "Please Select At least one tarriff....!", 2, 3);
        copycheck = true;
        return false;
    }
    else {
        document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtERTrf1_txtSearchControl').value = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtOPTrf1_txtSearchControl').value;
        document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtERTrf2_txtSearchControl').value = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtOPTrf2_txtSearchControl').value;
        document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtERTrf3_txtSearchControl').value = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtOPTrf3_txtSearchControl').value;
        document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtERTrf4_txtSearchControl').value = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtOPTrf4_txtSearchControl').value;
        document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtERTrf1__hiddenID').value = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtOPTrf1__hiddenID').value;
        document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtERTrf2__hiddenID').value = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtOPTrf2__hiddenID').value;
        document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtERTrf3__hiddenID').value = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtOPTrf3__hiddenID').value;
        document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtERTrf4__hiddenID').value = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtOPTrf4__hiddenID').value;
        document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtERdsc1').value = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtOPdsc1').value;
        document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtERdsc2').value = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtOPdsc2').value;
        document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtERdsc3').value = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtOPdsc3').value;
        document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtERdsc4').value = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtOPdsc4').value;
        document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtrulenameer').value = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtrulenameop').value;

        document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_hdncmpruleider').value = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_hdncmpruleidop').value;
        document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtERdsc5').value = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtOPdsc5').value;
        document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txterorgper').value = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtoporgper').value;
        document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txterempper').value = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtopempper').value;
        document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txterapprlimit').value = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtopapprlimit').value;

        document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtERaddPrcntge1').value = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtOPaddPrcntge1').value;
        document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtERaddPrcntge2').value = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtOPaddPrcntge2').value;
        document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtERaddPrcntge3').value = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtOPaddPrcntge3').value;
        document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtERaddPrcntge4').value = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtOPaddPrcntge4').value
    }
}
function iptoer() {
    if (document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtIPTrf1__hiddenID').value <= 0 &&
    document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtIPTrf2__hiddenID').value <= 0 &&
    document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtIPTrf3__hiddenID').value <= 0 &&
    document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtIPTrf4__hiddenID').value <= 0) {
        if (copycheck != true) {
            $(".stoast").toastText("warning", "Please Select At least one tarriff....!", 2, 3);
            return false;
        }
    }
    else {
        document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtERTrf1_txtSearchControl').value = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtIPTrf1_txtSearchControl').value;
        document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtERTrf2_txtSearchControl').value = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtIPTrf2_txtSearchControl').value;
        document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtERTrf3_txtSearchControl').value = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtIPTrf3_txtSearchControl').value;
        document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtERTrf4_txtSearchControl').value = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtIPTrf4_txtSearchControl').value;
        document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtERTrf1__hiddenID').value = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtIPTrf1__hiddenID').value;
        document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtERTrf2__hiddenID').value = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtIPTrf2__hiddenID').value;
        document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtERTrf3__hiddenID').value = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtIPTrf3__hiddenID').value;
        document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtERTrf4__hiddenID').value = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtIPTrf4__hiddenID').value;
        document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtERdsc1').value = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtIPdsc1').value;
        document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtERdsc2').value = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtIPdsc2').value;
        document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtERdsc3').value = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtIPdsc3').value;
        document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtERdsc4').value = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtIPdsc4').value;
        document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtrulenameer').value = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtrulenameip').value;

        document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_hdncmpruleider').value = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_hdncmpruleidip').value;
        document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtERdsc5').value = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtIPdsc5').value;
        document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txterorgper').value = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtiporgper').value;
        document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txterempper').value = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtipempper').value;
        document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txterapprlimit').value = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtipapprlimit').value;

        document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtERaddPrcntge1').value = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtIPaddPrcntge1').value;
        document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtERaddPrcntge2').value = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtIPaddPrcntge2').value;
        document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtERaddPrcntge3').value = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtIPaddPrcntge3').value;
        document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtERaddPrcntge4').value = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtIPaddPrcntge4').value
    }
}
function dctoer() {
    if (document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtDCTrf1__hiddenID').value <= 0 &&
    document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtDCTrf2__hiddenID').value <= 0 &&
    document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtDCTrf3__hiddenID').value <= 0 &&
    document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtDCTrf4__hiddenID').value <= 0) {
        if (copycheck != true) {
            $(".stoast").toastText("warning", "Please Select At least one tarriff....!", 2, 3);
            return false;
        }
    }
    else {
        document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtERTrf1_txtSearchControl').value = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtDCTrf1_txtSearchControl').value;
        document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtERTrf2_txtSearchControl').value = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtDCTrf2_txtSearchControl').value;
        document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtERTrf3_txtSearchControl').value = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtDCTrf3_txtSearchControl').value;
        document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtERTrf4_txtSearchControl').value = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtDCTrf4_txtSearchControl').value;
        document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtERTrf1__hiddenID').value = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtDCTrf1__hiddenID').value;
        document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtERTrf2__hiddenID').value = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtDCTrf2__hiddenID').value;
        document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtERTrf3__hiddenID').value = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtDCTrf3__hiddenID').value;
        document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtERTrf4__hiddenID').value = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtDCTrf4__hiddenID').value;
        document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtERdsc1').value = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtDCdsc1').value;
        document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtERdsc2').value = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtDCdsc2').value;
        document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtERdsc3').value = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtDCdsc3').value;
        document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtERdsc4').value = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtDCdsc4').value;
        document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtrulenameer').value = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtrulenamedc').value;

        document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_hdncmpruleider').value = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_hdncmpruleiddc').value;
        document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtERdsc5').value = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtDCdsc5').value;
        document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txterorgper').value = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtdcorgper').value;
        document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txterempper').value = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtdcempper').value;
        document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txterapprlimit').value = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtdcapprlimit').value;


        document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtERaddPrcntge1').value = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtDCaddPrcntge1').value;
        document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtERaddPrcntge2').value = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtDCaddPrcntge2').value;
        document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtERaddPrcntge3').value = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtDCaddPrcntge3').value;
        document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtERaddPrcntge4').value = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtDCaddPrcntge4').value
    }
}
function optodc() {
    if (document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtOPTrf1__hiddenID').value <= 0 &&
    document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtOPTrf2__hiddenID').value <= 0 &&
    document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtOPTrf3__hiddenID').value <= 0 &&
    document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtOPTrf4__hiddenID').value <= 0) {
        if (copycheck != true) {
            $(".stoast").toastText("warning", "Please Select At least one tarriff....!", 2, 3);
            return false;
        }
    }
    else {
        document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtDCTrf1_txtSearchControl').value = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtOPTrf1_txtSearchControl').value;
        document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtDCTrf2_txtSearchControl').value = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtOPTrf2_txtSearchControl').value;
        document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtDCTrf3_txtSearchControl').value = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtOPTrf3_txtSearchControl').value;
        document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtDCTrf4_txtSearchControl').value = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtOPTrf4_txtSearchControl').value;
        document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtDCTrf1__hiddenID').value = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtOPTrf1__hiddenID').value;
        document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtDCTrf2__hiddenID').value = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtOPTrf2__hiddenID').value;
        document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtDCTrf3__hiddenID').value = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtOPTrf3__hiddenID').value;
        document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtDCTrf4__hiddenID').value = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtOPTrf4__hiddenID').value;
        document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtDCdsc1').value = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtOPdsc1').value;
        document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtDCdsc2').value = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtOPdsc2').value;
        document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtDCdsc3').value = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtOPdsc3').value;
        document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtDCdsc4').value = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtOPdsc4').value;
        document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtrulenamedc').value = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtrulenameop').value;

        document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_hdncmpruleiddc').value == document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_hdncmpruleidop').value;
        document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtDCdsc5').value = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtOPdsc5').value;
        document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtdcorgper').value = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtoporgper').value;
        document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtdcempper').value = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtopempper').value;
        document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtdcapprlimit').value = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtopapprlimit').value;

        document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtDCaddPrcntge1').value = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtOPaddPrcntge1').value;
        document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtDCaddPrcntge2').value = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtOPaddPrcntge2').value;
        document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtDCaddPrcntge3').value = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtOPaddPrcntge3').value;
        document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtDCaddPrcntge4').value = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtOPaddPrcntge4').value
    }
}
function iptodc() {

    if (document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtIPTrf1__hiddenID').value <= 0 &&
    document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtIPTrf2__hiddenID').value <= 0 &&
    document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtIPTrf3__hiddenID').value <= 0 &&
    document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtIPTrf4__hiddenID').value <= 0) {
        if (copycheck != true) {
            $(".stoast").toastText("warning", "Please Select At least one tarriff....!", 2, 3);
            return false;
        }
    }
    else {
        document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtDCTrf1_txtSearchControl').value = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtIPTrf1_txtSearchControl').value;
        document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtDCTrf2_txtSearchControl').value = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtIPTrf2_txtSearchControl').value;
        document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtDCTrf3_txtSearchControl').value = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtIPTrf3_txtSearchControl').value;
        document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtDCTrf4_txtSearchControl').value = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtIPTrf4_txtSearchControl').value;
        document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtDCTrf1__hiddenID').value = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtIPTrf1__hiddenID').value;
        document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtDCTrf2__hiddenID').value = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtIPTrf2__hiddenID').value;
        document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtDCTrf3__hiddenID').value = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtIPTrf3__hiddenID').value;
        document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtDCTrf4__hiddenID').value = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtIPTrf4__hiddenID').value;
        document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtDCdsc1').value = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtIPdsc1').value;
        document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtDCdsc2').value = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtIPdsc2').value;
        document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtDCdsc3').value = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtIPdsc3').value;
        document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtDCdsc4').value = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtIPdsc4').value;
        document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtrulenamedc').value = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtrulenameip').value;
        document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_hdncmpruleiddc').value = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_hdncmpruleidip').value;
        document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtDCdsc5').value = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtIPdsc5').value;
        document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtdcorgper').value = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtiporgper').value;
        document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtdcempper').value = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtipempper').value;
        document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtdcapprlimit').value = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtipapprlimit').value;

        document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtDCaddPrcntge1').value = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtIPaddPrcntge1').value;
        document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtDCaddPrcntge2').value = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtIPaddPrcntge2').value;
        document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtDCaddPrcntge3').value = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtIPaddPrcntge3').value;
        document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtDCaddPrcntge4').value = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtIPaddPrcntge4').value
    }
}

function ertodc() {
    if (document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtERTrf1__hiddenID').value <= 0 &&
    document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtERTrf2__hiddenID').value <= 0 &&
    document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtERTrf3__hiddenID').value <= 0 &&
    document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtERTrf4__hiddenID').value <= 0) {
        if (copycheck != true) {
            $(".stoast").toastText("warning", "Please Select At least one tarriff....!", 2, 3);
            return false;
        }
    }
    else {
        document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtDCTrf1_txtSearchControl').value = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtERTrf1_txtSearchControl').value;
        document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtDCTrf2_txtSearchControl').value = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtERTrf2_txtSearchControl').value;
        document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtDCTrf3_txtSearchControl').value = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtERTrf3_txtSearchControl').value;
        document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtDCTrf4_txtSearchControl').value = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtERTrf4_txtSearchControl').value;
        document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtDCTrf1__hiddenID').value = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtERTrf1__hiddenID').value;
        document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtDCTrf2__hiddenID').value = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtERTrf2__hiddenID').value;
        document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtDCTrf3__hiddenID').value = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtERTrf3__hiddenID').value;
        document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtDCTrf4__hiddenID').value = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtERTrf4__hiddenID').value;
        document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtDCdsc1').value = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtERdsc1').value;
        document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtDCdsc2').value = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtERdsc2').value;
        document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtDCdsc3').value = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtERdsc3').value;
        document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtDCdsc4').value = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtERdsc4').value;
        document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtrulenamedc').value = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtrulenameer').value;
        document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_hdncmpruleiddc').value = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_hdncmpruleider').value;
        document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtDCdsc5').value = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtERdsc5').value;
        document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtdcorgper').value = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txterorgper').value;
        document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtdcempper').value = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txterempper').value;
        document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtdcapprlimit').value = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txterapprlimit').value;
        document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtDCaddPrcntge1').value = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtERaddPrcntge1').value;
        document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtDCaddPrcntge2').value = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtERaddPrcntge2').value;
        document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtDCaddPrcntge3').value = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtERaddPrcntge3').value;
        document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtDCaddPrcntge4').value = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtERaddPrcntge4').value
    }
}

function ClearIPTarriffSelection() {
    document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtIPTrf1_txtSearchControl').value = '';
    document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtIPTrf2_txtSearchControl').value = '';
    document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtIPTrf3_txtSearchControl').value = '';
    document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtIPTrf4_txtSearchControl').value = '';
    document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtIPTrf1__hiddenID').value = 0;
    document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtIPTrf2__hiddenID').value = 0;
    document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtIPTrf3__hiddenID').value = 0;
    document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtIPTrf4__hiddenID').value = 0;
    document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtIPdsc1').value = '';
    document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtIPdsc2').value = '';
    document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtIPdsc3').value = '';
    document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtIPdsc4').value = '';
    document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtrulenameip').value = '';
    document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtIPdsc5').value = '';
    document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtiporgper').value = '';
    document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtipempper').value = '';
    document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtipapprlimit').value = '';
    document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtIPaddPrcntge1').value = '';
    document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtIPaddPrcntge2').value = '';
    document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtIPaddPrcntge3').value = '';
    document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtIPaddPrcntge4').value = '';
}
function ClearOPTarriffSelection() {
    document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtOPTrf1_txtSearchControl').value = '';
    document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtOPTrf2_txtSearchControl').value = '';
    document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtOPTrf3_txtSearchControl').value = '';
    document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtOPTrf4_txtSearchControl').value = '';
    document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtOPTrf1__hiddenID').value = 0;
    document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtOPTrf2__hiddenID').value = 0;
    document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtOPTrf3__hiddenID').value = 0;
    document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtOPTrf4__hiddenID').value = 0;
    document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtOPdsc1').value = '';
    document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtOPdsc2').value = '';
    document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtOPdsc3').value = '';
    document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtOPdsc4').value = '';
    document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtrulenameop').value = '';
    document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtOPdsc5').value = '';
    document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtoporgper').value = '';
    document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtopempper').value = '';
    document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtopapprlimit').value = '';

    document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtOPaddPrcntge1').value = '';
    document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtOPaddPrcntge2').value = '';
    document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtOPaddPrcntge3').value = '';
    document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtOPaddPrcntge4').value = '';
}
function ClearDCTarriffSelection() {
    document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtDCTrf1_txtSearchControl').value = '';
    document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtDCTrf2_txtSearchControl').value = '';
    document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtDCTrf3_txtSearchControl').value = '';
    document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtDCTrf4_txtSearchControl').value = '';
    document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtDCTrf1__hiddenID').value = 0;
    document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtDCTrf2__hiddenID').value = 0;
    document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtDCTrf3__hiddenID').value = 0;
    document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtDCTrf4__hiddenID').value = 0;
    document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtDCdsc1').value = '';
    document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtDCdsc2').value = '';
    document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtDCdsc3').value = '';
    document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtDCdsc4').value = '';
    document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtrulenamedc').value = '';
    document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtDCdsc5').value = '';
    document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtdcorgper').value = '';
    document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtdcempper').value = '';
    document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtdcapprlimit').value = '';

    document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtDCaddPrcntge1').value = '';
    document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtDCaddPrcntge2').value = '';
    document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtDCaddPrcntge3').value = '';
    document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtDCaddPrcntge4').value = '';


}
function ClearERTarriffSelection() {
    document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtERTrf1_txtSearchControl').value = '';
    document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtERTrf2_txtSearchControl').value = '';
    document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtERTrf3_txtSearchControl').value = '';
    document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtERTrf4_txtSearchControl').value = '';
    document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtERTrf1__hiddenID').value = 0;
    document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtERTrf2__hiddenID').value = 0;
    document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtERTrf3__hiddenID').value = 0;
    document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtERTrf4__hiddenID').value = 0;
    document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtERdsc1').value = '';
    document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtERdsc2').value = '';
    document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtERdsc3').value = '';
    document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtERdsc4').value = '';
    document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtrulenameer').value = '';
    document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtERdsc5').value = '';
    document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txterorgper').value = '';
    document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txterempper').value = '';
    document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txterapprlimit').value = '';
    document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtERaddPrcntge1').value = '';
    document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtERaddPrcntge2').value = '';
    document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtERaddPrcntge3').value = '';
    document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtERaddPrcntge4').value = '';
}
function onflownameselectionop(sender, eventArgs) {
    var results = eval('(' + eventArgs.get_value() + ')');
    document.getElementById('ctl00_ContentPlaceHolder1_hdnflowidop').value = results.Value;
}
function onflownameselectionip(sender, eventArgs) {
    var results = eval('(' + eventArgs.get_value() + ')');
    document.getElementById('ctl00_ContentPlaceHolder1_hdnflowidip').value = results.Value;
}
function onflownameselectioner(sender, eventArgs) {
    var results = eval('(' + eventArgs.get_value() + ')');
    document.getElementById('ctl00_ContentPlaceHolder1_hdnflowider').value = results.Value;
}
function onflownameselectiondc(sender, eventArgs) {
    var results = eval('(' + eventArgs.get_value() + ')');
    document.getElementById('ctl00_ContentPlaceHolder1_hdnflowiddc').value = results.Value;
}
function BindWorkFlowList(obj) {
    ctl00_ContentPlaceHolder1_divGridPop.style.display = 'block'
    var cName = ''; var pText = '';
    var param = param || {};
    param.dataKey = "WF_ID";
    param.pageSize = 10;
    param.pageNum = 1;
    param.defaultWSParams = { _cName: cName, _pText: pText, _advSrch: '' };
    param.wsPath = "Private/Corporate/Changes/WorkFlowMasterList.aspx/FlowListBind";
    param.wsFilterPath = "Private/Corporate/Changes/WorkFlowMasterList.aspx/FlowListBind";
    param.template = ["WF_CD*WF_CD"
                              , "WF_NAME*WF_NAME"
                              , "WF_DESC*WF_DESC"];
    param.header = [{ col: "Work Flow Code", sort: true, filter: true }
            , { col: "Work Flow Name", sort: true, filter: true }
            , { col: "Work Flow Desc", sort: true, filter: true}];
    param.enablePaging = true;
    param.enableTrace = true;
    param.enableFilter = true;
    param.enableCheckbox = false;
    param.enableSorting = false; param.tableTemplate = true;
    param.rowClick = function (key) {
        Onrowflowselection(key, obj);
    };
    gridControl = $("#divflowata").jtable(param);
}
function btncloseflow() {
    ctl00_ContentPlaceHolder1_divGridPop.style.display = 'none'
}
function Onrowflowselection(data, type) {
    ctl00_ContentPlaceHolder1_divGridPop.style.display = 'none'
}
function chkcmprulename(type) {
    var rulename = '';
    if (type == 'OP') {
        rulename = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtrulenameop').value;
        if (rulename == "" || rulename == null || rulename == undefined) {
            document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_hdncmpruleidop').value = 0;
        }
    }
    else if (type == 'IP') {
        rulename = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtrulenameip').value;
        if (rulename == "" || rulename == null || rulename == undefined) {
            document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_hdncmpruleidip').value = 0;
        }
    }
    else if (type == 'ER') {
        rulename = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtrulenameer').value;
        if (rulename == "" || rulename == null || rulename == undefined) {
            document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_hdncmpruleider').value = 0;
        }
    }
    else {
        rulename = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtrulenamedc').value;
        if (rulename == "" || rulename == null || rulename == undefined) {
            document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_hdncmpruleiddc').value = 0;
        }
    }

}
function showusers(obj) {
    ctl00_ContentPlaceHolder1_divempdata.style.display = 'block'
    var index = obj.parentElement.parentElement.rowIndex - 1;
    var cName = ''; var pText = '';
    var param = param || {};
    param.dataKey = "ID";
    param.pageSize = 10;
    param.pageNum = 1;
    param.defaultWSParams = { _cName: cName, _fDt: '', _pText: pText, _tDt: '', _advSrch: '', flag: 'AB', ProcName: "PR_GETALL_EMPLOYEE" };
    param.wsPath = "CreditOrgService.asmx/BindGetAllGrid";
    param.wsFilterPath = "CreditOrgService.asmx/BindGetAllGrid";
    param.template = ["CODE*CODE"
                            , "NAME*NAME"
                            , "DEPARTMENT*DEPARTMENT"];
    param.header = [{ col: "Code", sort: true, filter: true }
                            , { col: "Name", sort: true, filter: true }
                            , { col: "Department Name", sort: true, filter: true }
                           ];
    param.rowClick = function (key) {
        Onrowempselection(key, index);
    };

    param.enablePaging = true;
    param.enableTrace = false;
    param.enableSorting = true;
    param.enableFilter = true;
    param.enableCheckbox = false;
    param.tableTemplate = true;
    param.enableDMS = false;
    gridControl = $("#divEmpdataColl").jtable(param);
}
function Onrowempselection(data, index) {
    var emp_name = data.NAME; var emp_id = data.ID; var exsist = false;
    var cmp_executive_new_id = 0; var cmp_executive_new_rev_no = 0;
    var empdata = $('#tbl_Division tr:has(td)').filter(':eq(' + index + ')').find('[id*=lblusers]').text();
    var empid = $('#tbl_Division tr:has(td)').filter(':eq(' + index + ')').find('[type=hidden][id*=hdmempids]').val();
    var cmp_executive_id = $('#tbl_Division tr:has(td)').filter(':eq(' + index + ')').find('[type=hidden][id*=COMP_EXECUTIVE_ID]').val();
    var cmp_executive_rev_no = $('#tbl_Division tr:has(td)').filter(':eq(' + index + ')').find('[type=hidden][id*=COMP_EXECUTIVE_REV_NO]').val();
    for (i = 0; i < empid.split(',').length; i++) {
        var iddddss = empid.split(',')[i];
        if (emp_id == iddddss) { exsist = true; }
    }
    if (exsist == true) {
        $(".stoast").toastText("warning", "Already Exist For This Executive:" + emp_name.trim() + "", 5, 3);
        return false;
    }
    if (empdata.trim() != '') {
        $('#tbl_Division tr:has(td)').filter(':eq(' + index + ')').find('[id*=lblusers]').text(empdata + ',' + emp_name);
        $('#tbl_Division tr:has(td)').filter(':eq(' + index + ')').find('[type=hidden][id*=hdmempids]').val(empid + ',' + emp_id);
        if (cmp_executive_id != null && cmp_executive_id != undefined && cmp_executive_id != "" && cmp_executive_id != "0") {
            $('#tbl_Division tr:has(td)').filter(':eq(' + index + ')').find('[type=hidden][id*=COMP_EXECUTIVE_ID]').val(cmp_executive_id + ',' + cmp_executive_new_id);
            $('#tbl_Division tr:has(td)').filter(':eq(' + index + ')').find('[type=hidden][id*=COMP_EXECUTIVE_REV_NO]').val(cmp_executive_rev_no + ',' + cmp_executive_new_rev_no);
        } else {
            $('#tbl_Division tr:has(td)').filter(':eq(' + index + ')').find('[type=hidden][id*=COMP_EXECUTIVE_ID]').val(cmp_executive_id + ',' + cmp_executive_id);
            $('#tbl_Division tr:has(td)').filter(':eq(' + index + ')').find('[type=hidden][id*=COMP_EXECUTIVE_REV_NO]').val(cmp_executive_rev_no + ',' + cmp_executive_rev_no);
        }
    } else {
        $('#tbl_Division tr:has(td)').filter(':eq(' + index + ')').find('[id*=lblusers]').text(emp_name);
        $('#tbl_Division tr:has(td)').filter(':eq(' + index + ')').find('[type=hidden][id*=hdmempids]').val(emp_id);
        $('#tbl_Division tr:has(td)').filter(':eq(' + index + ')').find('[type=hidden][id*=COMP_EXECUTIVE_ID]').val(cmp_executive_id);
        $('#tbl_Division tr:has(td)').filter(':eq(' + index + ')').find('[type=hidden][id*=COMP_EXECUTIVE_REV_NO]').val(cmp_executive_rev_no);
    }
    ctl00_ContentPlaceHolder1_divempdata.style.display = 'none';
}
function btncloseemp() {
    ctl00_ContentPlaceHolder1_divempdata.style.display = 'none'
}
var globalddldata = [];
function BindCmpLevelData(data) {
    globalddldata = [];
    var JData = JSON.parse(data);
    globalddldata = JData;
}
function binddataddl() {
    DropdownBind(globalddldata);
}
function DropdownBind(response) {
    var cmpcategory = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel4_ddlcmplevel').value;
    var len = $('#tbl_Division tr').length; var index = len - 2;
    var dropdown = $('#tbl_Division tr:has(td)').filter(':eq(' + index + ')').find('[id*=ddlcmplevel]');
    var select = "--Select--"; _optionsVal = '';
    _optionsVal += "<OPTION selected value='" + 0 + "'>" + select + "</OPTION>";
    for (i = 0; i < response.length; i++) {
        _optionsVal += "<OPTION selected value='" + response[i].COMPANY_LEVEL_ID + "'>" + response[i].COMPANY_LEVEL_NAME + "</OPTION>";
    }
    dropdown.empty().html(_optionsVal);
    $('#tbl_Division tr:has(td)').filter(':eq(' + index + ')').find('[id*=ddlcmplevel]').val(cmpcategory);
}
function TabIndexforallFields() {
    ctl00_ContentPlaceHolder1_txtContractNo.tabIndex = 1;
    ctl00_ContentPlaceHolder1_txtStDt.tabIndex = 2;
    ctl00_ContentPlaceHolder1_txtContactPerson.tabIndex = 3;
    ctl00_ContentPlaceHolder1_txtAuthorizedperson.tabIndex = 4;
    ctl00_ContentPlaceHolder1_txtColor.tabIndex = 5;
    ctl00_ContentPlaceHolder1_txtConsNOs.tabIndex = 6;
    ctl00_ContentPlaceHolder1_txtConsDAYs.tabIndex = 7;
    ctl00_ContentPlaceHolder1_txtRegFee.tabIndex = 8;
    ctl00_ContentPlaceHolder1_ucTariff_txtSearchControl.tabIndex = 9;
    ctl00_ContentPlaceHolder1_ddlservices.tabIndex = 10;
    ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtOPTrf1_txtSearchControl.tabIndex = 11;
    ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtOPdsc1.tabIndex = 12;
    ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtOPaddPrcntge1.tabIndex = 13;
    ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtOPTrf2_txtSearchControl.tabIndex = 14;
    ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtOPdsc2.tabIndex = 15;
    ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtOPaddPrcntge2.tabIndex = 16;
    ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtOPTrf3_txtSearchControl.tabIndex = 17;
    ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtOPdsc3.tabIndex = 18;
    ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtOPaddPrcntge3.tabIndex = 19;
    ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtOPTrf4_txtSearchControl.tabIndex = 20;
    ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtOPdsc4.tabIndex = 21;
    ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtOPaddPrcntge4.tabIndex = 22;
    ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtrulenameop.tabIndex = 23;
    ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtOPdsc5.tabIndex = 24;
    ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtoporgper.tabIndex = 25;
    ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtopempper.tabIndex = 26;
    ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtopapprlimit.tabIndex = 27;
    ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_ddlcopyop.tabIndex = 28;
    ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtIPTrf1_txtSearchControl.tabIndex = 29;
    ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtIPdsc1.tabIndex = 30;
    ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtIPaddPrcntge1.tabIndex = 31;
    ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtIPTrf2_txtSearchControl.tabIndex = 32;
    ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtIPdsc2.tabIndex = 33;
    ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtIPaddPrcntge2.tabIndex = 34;
    ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtIPTrf3_txtSearchControl.tabIndex = 35;
    ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtIPdsc3.tabIndex = 36;
    ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtIPaddPrcntge3.tabIndex = 37;
    ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtIPTrf4_txtSearchControl.tabIndex = 38;
    ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtIPdsc4.tabIndex = 39;
    ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtIPaddPrcntge4.tabIndex = 40;
    ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtrulenameip.tabIndex = 41;
    ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtIPdsc5.tabIndex = 42;
    ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtiporgper.tabIndex = 43;
    ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtipempper.tabIndex = 44;
    ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtipapprlimit.tabIndex = 45;
    ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_ddlcopyip.tabIndex = 46;
    ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_ddlcopyip.tabIndex = 47;
    ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtERTrf1_txtSearchControl.tabIndex = 48;
    ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtERdsc1.tabIndex = 49;
    ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtERaddPrcntge1.tabIndex = 50;
    ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtERTrf2_txtSearchControl.tabIndex = 51;
    ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtERdsc2.tabIndex = 52;
    ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtERaddPrcntge2.tabIndex = 53;
    ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtERTrf3_txtSearchControl.tabIndex = 54;
    ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtERdsc3.tabIndex = 55;
    ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtERaddPrcntge3.tabIndex = 56;
    ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtERTrf4_txtSearchControl.tabIndex = 57;
    ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtERdsc4.tabIndex = 58;
    ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtERaddPrcntge4.tabIndex = 59;
    ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtrulenameer.tabIndex = 60;
    ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtERdsc5.tabIndex = 61;
    ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txterorgper.tabIndex = 62;
    ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txterempper.tabIndex = 63;
    ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txterapprlimit.tabIndex = 64;
    ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_ddlcopyer.tabIndex = 65;
    ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtDCTrf1_txtSearchControl.tabIndex = 66;
    ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtDCdsc1.tabIndex = 67;
    ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtDCaddPrcntge1.tabIndex = 68;
    ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtDCTrf2_txtSearchControl.tabIndex = 69;
    ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtDCdsc2.tabIndex = 70;
    ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtDCaddPrcntge2.tabIndex = 71;
    ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtDCTrf3_txtSearchControl.tabIndex = 72;
    ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtDCdsc3.tabIndex = 73;
    ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtDCaddPrcntge3.tabIndex = 74;
    ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtDCTrf4_txtSearchControl.tabIndex = 75;
    ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtDCdsc4.tabIndex = 76;
    ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtDCaddPrcntge4.tabIndex = 77;
    ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtrulenamedc.tabIndex = 78;
    ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtDCdsc5.tabIndex = 79;
    ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtdcorgper.tabIndex = 80;
    ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtdcempper.tabIndex = 81;
    ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtdcapprlimit.tabIndex = 82;
    ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_ddlcopyerdc.tabIndex = 83;

}
function ClearLookupValue(obj) {
    var currentvalue = obj.value; var currentid = obj.id.split('_')[4];
    if (currentvalue == "" || currentvalue == null || currentvalue == undefined) {
        document.getElementById("ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_" + currentid + "_txtSearchControl").value = '';
        document.getElementById("ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_" + currentid + "__hiddenID").value = '';
        document.getElementById("ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_" + currentid + "__hiddenText").value = '';
    }
}
function CloseEmpPopup() {
    $('#DivMarkExe').hide();
    return false;
}
var Rindex = 0;
function DelShowUsers(obj) {
    Rindex = obj.parentElement.parentElement.rowIndex - 1;
    var EmpUsers = $('table[id$=tbl_Division] tr:has(td)').eq(Rindex).find('[id*=lblusers]').text();
    var Empexeids = $('table[id$=tbl_Division] tr:has(td)').eq(Rindex).find('[id*=hdmempids]').val();
    $('[id*=tblbindmarkexe] tbody tr').remove();
    $('#DivMarkExe').show(); var builder = '';
    for (i = 0; i < EmpUsers.split(',').length; i++) {
        var updateEmpexeids = Empexeids.split(',')[i];
        builder += "<tr><td> <img title=\"Remove\" onclick=\"return btnremovexe(this);\" id=\"btnremove1" + (i) + "\" src=\"../../Assets/Grid_Icons/delete.png\" class=\"btndel\"></td><td><label id=\"lblbindexe_" + (i - 1) + "\">" + EmpUsers.split(',')[i] + "</label><input type=\"hidden\" id=\"hdnupdateexeid" + i + "\" value=\"" + updateEmpexeids + "\"/></td></tr>";
    }
    $('[id*=tblbindmarkexe] tbody').append(builder);
}
function btnremovexe(obj) {
    var Index = obj.parentElement.parentElement.rowIndex;
    $('table[id$=tblbindmarkexe] tr:has(td)').eq(Index).remove();
}
function btnupdatexe(obj) {
    var data_assigntext = ''; var data_assignids = '';
    var markexelength = $('table[id$=tblbindmarkexe] tr').length;
    if (markexelength > 0) {
        $('table[id$=tblbindmarkexe] tr:has(td)').each(function () {
            data_assigntext += $(this).closest('tr').find('[id*=lblbindexe]').text() + ',';
            data_assignids += $(this).closest('tr').find('[id*=hdnupdateexeid]').val() + ',';
        });
        if (data_assigntext == null || data_assigntext == undefined) { data_assigntext = ""; }
        if (data_assignids == null || data_assignids == undefined) { data_assignids = ""; }
        if (data_assigntext != '') {
            data_assigntext = data_assigntext.substring(0, data_assigntext.length - 1);
            $('table[id*=tbl_Division] tbody tr').eq(Rindex).find('[id*=lblusers]').text(data_assigntext);
        }
        if (data_assignids != '') {
            data_assignids = data_assignids.substring(0, data_assignids.length - 1);
            $('table[id$=tbl_Division] tr:has(td)').eq(Rindex).find('[id*=hdmempids]').val(data_assignids);
        }
    } else {
        $('table[id*=tbl_Division] tbody tr').eq(Rindex).find('[id*=lblusers]').text('');
        $('table[id$=tbl_Division] tr:has(td)').eq(Rindex).find('[id*=hdmempids]').val(0);
    }
    $('#DivMarkExe').hide();
}
function BindDepartment() {
    $('table[id$=tbldepartments] tr:has(td)').remove();
    var cmpid = document.getElementById('ctl00_ContentPlaceHolder1_hdncmpnyid').value;
    var _JSONParams = JSON.stringify({ Companyid: cmpid });
    var _ServiceURL = "CompanyTariffConfiguration.aspx/BindGetDepartmentset";
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
            if (jdata != null) {
                var i = 0;
                var divdata = jQuery.parseJSON(jdata.d[0]);
                $(divdata).each(function (i, dataval) {
                    i++;
                    var DEPTID = '0', DEPTCD = '', DEPTNAME = '', COMP_DEPARTMENT_ID = 0;
                    DEPTID = dataval.DEPARTMENT_ID;
                    DEPTCD = dataval.DEPARTMENT_CD;
                    DEPTNAME = dataval.DEPARTMENT_NAME;
                    COMP_DEPARTMENT_ID = dataval.COMP_DEPARTMENT_ID;
                    var datatruvalue = dataval.COMP_DEPARTMENT_ID;
                    var checkflag = 'N';
                    if (datatruvalue = '' || datatruvalue == undefined || datatruvalue == 0) {
                        checkflag = 'N';
                    } else {
                        checkflag = 'Y';
                    }
                    var jDatavalGrid = GetDepartmentinfo(DEPTCD, DEPTNAME, DEPTID, COMP_DEPARTMENT_ID, i, checkflag);
                    renderddepatments(jDatavalGrid);
                });
            }
        },
        fail: function (e) {
        }
    });
}
function renderddepatments(jData) {
    var _html = "";
    var _billingTemplate = _.template($("#tbodydepartments").html());
    _dataSourceDis = jData;
    $("#tbldepartments tbody").append(_billingTemplate(_dataSourceDis));
}
function GetDepartmentinfo(DEPTCD, DEPTNAME, DEPTID, COMP_DEPARTMENT_ID, Sno, checkflag) {
    var _params = [];
    var _param = {
        sno: typeof Sno == "number" || typeof Sno == "string" ? Sno : '0',
        COMP_DEPARTMENT_ID: COMP_DEPARTMENT_ID,
        DEPTCD: DEPTCD,
        DEPTNAME: DEPTNAME,
        DEPTID: DEPTID,
        checkflag: checkflag
    };
    _params.push(_param);
    return _params;
}



function savedepartment() {
    var _xmlStr = ""; var Dname = ""; var Ddesc = "";
    var cmpid = document.getElementById('ctl00_ContentPlaceHolder1_hdncmpnyid').value;
    var Divdepartment = document.getElementById('tbldepartments').rows.length;
    _xmlStr = "<root>";
    if (Divdepartment > 1) {
        $('table[id$=tbldepartments] tr:has(td)').each(function (e) {
            var chkdeptselect = $(this).closest('tr').find('[id*=chkdeptselect]')[0].checked;
            if (chkdeptselect == true) {
                var Divname = $(this).closest('tr').find('[id*=txtdepartmentname]').val();
                var Desc = $(this).closest('tr').find('[id*=txtdepartmentcd]').val();
                var DEPTID = $(this).closest('tr').find('[id*=hdnid]').val();
                var COMP_EXECUTIVE_ID = $(this).closest('tr').find('[id*=hdnautoid]').val();
                Divname = typeof Divname == "string" ? (Divname.trim() == "0" ? "0" : Divname) : (typeof Divname == "number" ? Gname : "0");
                Desc = typeof Desc == "string" ? (Desc.trim() == "0" ? "0" : Desc) : (typeof Desc == "number" ? Desc : "0");
                if (COMP_EXECUTIVE_ID == "" || COMP_EXECUTIVE_ID == undefined || COMP_EXECUTIVE_ID == null) { COMP_EXECUTIVE_ID = "0"; }
                _xmlStr += "<COMPANY_FREE_CONSULTATION_DEPARTMENT";
                if (COMP_EXECUTIVE_ID != "" || COMP_EXECUTIVE_ID != undefined)
                    _xmlStr += " COMPANY_FREE_CONSULTATION_DEPARTMENT_ID=^" + COMP_EXECUTIVE_ID + "^";
                else
                    _xmlStr += " COMPANY_FREE_CONSULTATION_DEPARTMENT_ID=^" + "0" + "^";
                _xmlStr += " CONSULTATION_DEPARTMENT_ID=^" + DEPTID + "^";
                _xmlStr += " CONSULTATION_DEPARTMENT_NAME=^" + ReplaceSplCharactor(Divname) + "^";
                _xmlStr += " CONSULTATION_DEPARTMENT_CD=^" + ReplaceSplCharactor(Desc) + "^";
                _xmlStr += " COMPANY_ID=^" + cmpid + "^";
                _xmlStr += " />";
            }
        });
        _xmlStr += "</root>";
    }

    GetNonAsync(
        "Private/CompanyMaster/CompanyTariffConfiguration.aspx/Savecmpdept",
        { xmlString: _xmlStr },
        function (JData) {
        },
    function (jqXHR, textStatus, errorThrown) {
    });

}
/*Check list Binding*/
function BindPatientClass() {
    GetNonAsync(
                                  "Private/CompanyMaster/CompanyTariffConfiguration.aspx/GetPatientClass",
                                  { sessionid: 1 },
                                  function (msg) {
                                      var builder = '';
                                      builder = "";
                                      for (var i = 1; i <= msg.d.length; i++) {
                                          builder += "<li><input type=\"checkbox\" style=\"margin-right:10px\"  class=\"filled-in\" onclick=\"chkbindchecklists(this);\" id=\"chkpatclass_" + (i - 1) + "\"   value=\"" + msg.d[i - 1].PATIENT_CLASS_ID + "\" /><label for=\"chkpatclass_" + (i - 1) + "\">" + msg.d[i - 1].PATIENT_CLASS_NAME + "</label></li>";
                                      }
                                      $('[id*=divpatclass] ul[id*=ulpatclass]').append(builder);

                                  },
                                  function (jqXHR, textStatus, errorThrown) {
                                  });

}
function BindChecklistdata(obj) {
    GetAsync(
                                  "Private/CompanyMaster/CompanyTariffConfiguration.aspx/Getchecklist",
                                  { sessionid: 1 },
                                  function (msg) {
                                      var builder = '';
                                      builder = "";
                                      for (var i = 0; i <= msg.d.length - 1; i++) {
                                          if (msg.d[i]["RECORD_STATUS"] != "I") {
                                              fn_addfilterrow(msg.d[i]["CHECKLIST_ID"], msg.d[i]["CHECKLIST_DESC"]);
                                          }
                                      }

                                      if (document.getElementById('ctl00_ContentPlaceHolder1_hdnFormType').value == 'er') {
                                          chkemergencylist();
                                      }
                                  },
                                  function (jqXHR, textStatus, errorThrown) {
                                  });

}

var Globalstr = ""; var header = '';
function Bindcompanyprio(obj) {
    Globalstr = jQuery.parseJSON(obj);
    header += '<th>Entity Name</th>';
    for (var i in Globalstr) {
        $('#gvlettertype tbody tr:has(th)').append('<th style="width:130px">' + Globalstr[i].ENTITY_VALUE_NAME + '</th>');
        i++;
    }
}

function fn_addfilterrow(Chklst_id, chklst_desc) {
    var gvlettertypegrid = document.getElementById('gvlettertype');
    var rowIndex = gvlettertypegrid.rows.length;
    var gridindex = 1;
    var newRow = gvlettertypegrid.insertRow(rowIndex);
    $('table[id*=gvlettertypegrid] tbody').append(newRow);

    var newCell = newRow.insertCell(0);
    var lblSNo = document.createElement('label');
    lblSNo.id = 'lblSNo' + index;
    lblSNo.innerHTML = rowIndex;
    newCell.appendChild(lblSNo);
    newCell.className = "sno";

    newCell = newRow.insertCell(1);
    var chklettertype = document.createElement('input');
    var chklabeltype = document.createElement('label');   //
    chklettertype.type = 'checkbox';
    chklettertype.id = 'chklettertype' + index;
    chklettertype.value = Chklst_id;
    chklettertype.className = 'filled-in';
    chklabeltype.innerHTML = "&nbsp;"//
    chklabeltype.setAttribute('for', 'chklettertype' + index); //
    chklettertype.onclick = function () { Chkentitychecked(this); };
    newCell.appendChild(chklettertype);
    newCell.appendChild(chklabeltype); //

    newCell = newRow.insertCell(2);
    var lbllettertype = document.createElement('label');
    lbllettertype.id = 'lblworkflow' + index;
    lbllettertype.innerHTML = chklst_desc;
    newCell.appendChild(lbllettertype);
    var len = 3;
    for (i = 0; i < Globalstr.length; i++) {
        newCell = newRow.insertCell(len);
        var chkentity = document.createElement('input');
        var chkentitylabel = document.createElement('label');
        chkentity.type = 'checkbox';
        chkentity.id = 'chkentity' + len + index;
        chkentity.className = 'filled-in';
        chkentity.value = Globalstr[i].ENTITY_VALUE_ID;
        chkentitylabel.innerHTML = "&nbsp;"//
        chkentitylabel.setAttribute('for', 'chkentity' + len + index);
        chkentity.onclick = function () { ChkValidationchk(this); };
        newCell.appendChild(chkentity);
        newCell.appendChild(chkentitylabel);
        len++;
    }
    index++;
}
function Chkentitychecked(obj) {
    var index = obj.parentElement.parentElement.rowIndex - 1;
    if ($('#gvlettertype tbody tr:has(td)').filter(':eq(' + index + ')').find('[id*=chklettertype]')[0].checked == false) {
        $('#gvlettertype tbody tr:has(td)').filter(':eq(' + index + ')').find('[id*=chkentity]').prop('checked', false);
    }
}
function ChkValidationchk(obj) {
    var index = obj.parentElement.parentElement.rowIndex - 1;
    if ($('#gvlettertype tbody tr:has(td)').filter(':eq(' + index + ')').find('[id*=chklettertype]')[0].checked == false) {
        obj.checked = false;
        $(".toast").toastText("warning", "Please Select Check List", 5, 3);
        return false;
    }
    if (obj.checked == true) {
        if ($('#gvlettertype tbody tr:has(td)').filter(':eq(' + index + ')').find('[id*=chkentity]')[5].id == obj.id) {
            $('#gvlettertype tbody tr:has(td)').filter(':eq(' + index + ')').find('[id*=chkentity]')[5].checked = true;
        } else {
            if ($('#gvlettertype tbody tr:has(td)').filter(':eq(' + index + ')').find('[id*=chkentity]')[5].checked == false) {
                $('#gvlettertype tbody tr:has(td)').filter(':eq(' + index + ')').find('[id*=chkentity]').prop('checked', false);
            } else {
                $('#gvlettertype tbody tr:has(td)').filter(':eq(' + index + ')').find('[id*=chkentity]').prop('checked', false);
                $('#gvlettertype tbody tr:has(td)').filter(':eq(' + index + ')').find('[id*=chkentity]')[5].checked = true;
            }
            obj.checked = true;
        }
    }
}






function clearpatclasschk(obj) {
    $('table[id*=gvlettertype] tr:not(:has(th))').find('input[id*=chklettertype]').prop('checked', false);
    $('table[id*=gvlettertype] tr:not(:has(th))').find('input[id*=chkentity]').prop('checked', false);
    if (obj.id == "chkpatclass_0") {
        $('[id*=divpatclass] ul li').find('[id*=chkpatclass_1]')[0].checked = false;
    }
    if (obj.id == "chkpatclass_1") {
        $('[id*=divpatclass] ul li').find('[id*=chkpatclass_0]')[0].checked = false;
    }
    if (obj.id == "chkpatclass_3") {
        $('[id*=divpatclass] ul li').find('[id*=chkpatclass_0]')[0].checked = false;
        $('[id*=divpatclass] ul li').find('[id*=chkpatclass_1]')[0].checked = false;
    }
    if (obj.id == "chkpatclass_4") {
        $('[id*=divpatclass] ul li').find('[id*=chkpatclass_0]')[0].checked = false;
        $('[id*=divpatclass] ul li').find('[id*=chkpatclass_1]')[0].checked = false;
    }
}
function chkemergencylist() {

    GetAsync(
                     "Private/CompanyMaster/CompanyTariffConfiguration.aspx/chkemerlistassigner",
                       {},
                       function (data) {

                           if (data.d != undefined && data.d != null && data.d != "") {
                               chklistchecked(data);
                           }
                       });
}
function chkbindchecklists(obj) {
    clearpatclasschk(obj);
    var chkip = $('[id*=divpatclass] ul li').find('[id*=chkpatclass_0]')[0].checked;
    var chkop = $('[id*=divpatclass] ul li').find('[id*=chkpatclass_1]')[0].checked;
    var chker = '';
    var chkdc = '';
    var cmp_id = $("#ctl00_ContentPlaceHolder1_hdncmpnyid").val();
    if (cmp_id > 0 && (chkip == true || chkop == true || chker == true || chkdc == true)) {
        GetAsync(
                     "Private/CompanyMaster/CompanyTariffConfiguration.aspx/CheckListAssign",
                       { _cmpnyId: cmp_id },
                       function (data) {


                           if (data.d != undefined && data.d != null && data.d != "") {
                               for (i = 0; i < data.d.length; i++) {
                                   if (chkip == true) {
                                       if (data.d[i].PATIENT_CLASS_ID == 1) {
                                           chklistchecked(data);
                                       }
                                   }
                                   if (chkop == true) {
                                       if (data.d[i].PATIENT_CLASS_ID == 2) {
                                           chklistchecked(data);
                                       }
                                   }
                                   if (chker == true) {
                                       if (data.d[i].PATIENT_CLASS_ID == 4) {
                                           chklistchecked(data);
                                       }
                                   }
                                   if (chkdc == true) {
                                       if (data.d[i].PATIENT_CLASS_ID == 5) {
                                           chklistchecked(data);
                                       }
                                   }
                               }
                           }
                       });
    }
}
function chklistchecked(data) {

    $('table[id*=gvlettertype] tr:has(td)').each(function () {

        var lt_id = $(this).closest('tr').find('[id*=chklettertype]').val();
        var chklsttypeid = "";
        /* emergency patients */
        if (document.getElementById('ctl00_ContentPlaceHolder1_hdnFormType').value == 'er') {
            var data_length = data.d.length;
            for (var j = 0; j < data_length; j++) {
                if (lt_id == data.d[j].CHECKLIST_ID) {
                    $(this).closest('tr').find('[id*=chklettertype]')[0].checked = true;
                    if (data.d[j].CHECKLIST_TYPE_ID > 0) {
                        var chklsttypeid = data.d[j].CHECKLIST_TYPE_ID - 1;
                        $(this).closest('tr').find('[id*=chkentity]')[chklsttypeid].checked = true;
                    }

                }
            }
        }
        else { /* company patients */
            if (lt_id == data.d[i].CHECKLIST_ID) {
                $(this).closest('tr').find('[id*=chklettertype]')[0].checked = true;
                if (data.d[i].CHECKLIST_TYPE_ID > 0) {
                    var chklsttypeid = data.d[i].CHECKLIST_TYPE_ID - 1;
                    $(this).closest('tr').find('[id*=chkentity]')[chklsttypeid].checked = true;
                }

            }
        }
    });
}
var grpchklistid = [];
function savechecklist() {
    grpchklistid = []; var pat_class_id = 0;
    var chkip = $('[id*=divpatclass] ul li').find('[id*=chkpatclass_0]')[0].checked;
    var chkop = $('[id*=divpatclass] ul li').find('[id*=chkpatclass_1]')[0].checked;
    var chker = '';
    var chkdc = '';
    if (chkip == true) { pat_class_id = $('[id*=divpatclass] ul li').find('[id*=chkpatclass_0]').val(); }
    else if (chkop == true) { pat_class_id = $('[id*=divpatclass] ul li').find('[id*=chkpatclass_1]').val(); }
    else if (chker == true) { pat_class_id = $('[id*=divpatclass] ul li').find('[id*=chkpatclass_3]').val(); }
    else if (chkdc == true) { pat_class_id = $('[id*=divpatclass] ul li').find('[id*=chkpatclass_4]').val(); }
    $('#divchecklist ul li').each(function () {
        if ($(this).find('input[type=checkbox][id*=chkbxlst]')[0].checked == true) {
            var chklistid = $(this).find('input[type=checkbox][id*=chkbxlst]')[0].value;
            grpchklistid += chklistid + ',';
        }
    });
    if (grpchklistid.length == 0) { grpchklistid = 0; } else {
        grpchklistid = grpchklistid.substring(0, grpchklistid.length - 1);
    }
    document.getElementById('ctl00_ContentPlaceHolder1_hdnchklistids').value = grpchklistid;
    var cmp_id = $("#ctl00_ContentPlaceHolder1_hdncmpnyid").val();
    var _xmlstr = "<root>";
    $('table[id*=gvlettertype] tr:has(td)').each(function () {
        var entity = '';
        var chklettype = $(this).closest('tr').find('[id*=chklettertype]')[0].checked;
        var lettype_id = $(this).closest('tr').find('[id*=chklettertype]').val();
        for (var i = 0; i < 6; i++) {
            if ($(this).find('input[type=checkbox][id*=chkentity]')[i].checked == true) {
                entity += $(this).closest('tr').find('[id*=chkentity]')[i].value + ',';
            }
        }
        entity = entity.substring(0, entity.length - 1);
        if (chklettype == true) {
            for (k = 0; k < entity.split(',').length; k++) {
                _xmlstr += "<COMPANY_CHECKLIST";
                _xmlstr += " CMP_CHECKLIST_ID=!" + 0 + "!";
                _xmlstr += " CMP_CHECKLIST_REV_NO=!" + "1" + "!";
                _xmlstr += " CHECKLIST_ID=!" + lettype_id + "!";
                var page_type = document.getElementById('ctl00_ContentPlaceHolder1_hdnFormType').value;

                if (page_type == 'er') {
                    _xmlstr += " COMPANY_ID=!" + "0" + "!";
                    _xmlstr += " PATIENT_CLASS_ID=!" + "2" + "!";
                    _xmlstr += " CHECKLIST_TYPE_ID=!" + entity.split(',')[k] + "!";
                    _xmlstr += " CHECKLIST_CATEGORY_ID=!" + "2" + "!";
                }
                else {
                    _xmlstr += " COMPANY_ID=!" + cmp_id + "!";
                    _xmlstr += " PATIENT_CLASS_ID=!" + pat_class_id + "!";
                    _xmlstr += " CHECKLIST_TYPE_ID=!" + entity.split(',')[k] + "!";
                    _xmlstr += " CHECKLIST_CATEGORY_ID=!" + "1" + "!";
                }
                _xmlstr += "/>";
            }
        }
    });
    _xmlstr += "</root>";
    GetNonAsync(
        "Private/CompanyMaster/CompanyTariffConfiguration.aspx/Savechecklist",
        { xmlString: _xmlstr },
        function (JData) {
        },
    function (jqXHR, textStatus, errorThrown) {
    });

}
/*bind ward group vists*/
function onwardgroupAsignSucess(data) {
    var wardgrpID = '';
    var WardGroupPer = '';
    for (var i = 0; i < data.length; i++) {
        wardgrpID += data[i].ENTITY_VALUE_ID + "#" + data[i].ENTITY_VALUE_DESC + "#" + data[i].IS_REFERENCE + ",";
        WardGroupPer += data[i].WARD_GROUP_PER + ",";
    }
    document.getElementById('ctl00_ContentPlaceHolder1_hdnwardgriID').value = wardgrpID;
    document.getElementById('ctl00_ContentPlaceHolder1_hdnwardgriPer').value = WardGroupPer;
    EzHms.Services.ConsultationTypeWebService.GetConsTypesBasedOnCoverageID('2,3', OnConsltTypeSucess, OnConsltTypeFailure);
}
function OnConsltTypeSucess(data) {
    var index = 0;
    var WrdGrps = document.getElementById('ctl00_ContentPlaceHolder1_hdnwardgriID').value;
    WrdGrps = WrdGrps.split(',');
    var wardgrpprer = document.getElementById('ctl00_ContentPlaceHolder1_hdnwardgriPer').value;
    wardgrpprer = wardgrpprer.split(',');

    for (var i = 0; i < WrdGrps.length; i++) {
        if (WrdGrps[i].split('#')[0] != '' && WrdGrps[i].split('#')[0] != undefined) {
            if (i == 0) {
                var cellindex = 0;
                var WardTable = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel10_tblIPConsChr');
                var rowIndex = 0;
                var newCell = 0;
                var rowIndex = WardTable.rows.length;
                var newRow = WardTable.insertRow(rowIndex);
                var index = 0;
                newCell = newRow.insertCell(cellindex++);
                var lblWardGroup = document.createElement('label'); lblWardGroup.id = 'lblWardGroup' + index; newCell.align = 'left'; lblWardGroup.innerHTML = " Ward Group&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
                lblWardGroup.style.width = '50px';
                newCell.appendChild(lblWardGroup);

                newCell = newRow.insertCell(cellindex++);
                var lblNormal = document.createElement('label'); lblNormal.id = 'lblNormal' + index; newCell.align = 'left'; lblNormal.innerHTML = "Normal &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
                lblNormal.style.width = '50px';
                lblNormal.CssClass = "Aright";
                newCell.appendChild(lblNormal);

                newCell = newRow.insertCell(cellindex++);
                var lblEmergency = document.createElement('label'); lblEmergency.id = 'lblEmergency' + index; newCell.align = 'left'; lblEmergency.innerHTML = "Emergency&nbsp;&nbsp;&nbsp;";
                lblEmergency.style.width = '50px';
                lblEmergency.CssClass = "Aright";
                newCell.appendChild(lblEmergency);
            }
            var WardTable = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel10_tblIPConsChr');
            var rowIndex = 0;
            var newCell = 0;
            var rowIndex = WardTable.rows.length;
            var newRow = WardTable.insertRow(rowIndex);
            var index = 0;
            var cellindex = 0;
            newCell = newRow.insertCell(cellindex++);
            var lblType = document.createElement('label'); lblType.id = 'lblType' + index; newCell.align = 'left'; lblType.innerHTML = WrdGrps[i].split('#')[1];
            var hdnwardper = document.createElement('input'); hdnwardper.type = 'hidden'; hdnwardper.value = wardgrpprer[i]; hdnwardper.id = 'hdnwardper' + index;
            var hdnWardGrpId = document.createElement('input'); hdnWardGrpId.type = 'hidden'; hdnWardGrpId.value = WrdGrps[i].split('#')[0]; hdnWardGrpId.id = 'hdnWardGrpId' + index;
            var hdnIsWardRef = document.createElement('input'); hdnIsWardRef.type = 'hidden'; hdnIsWardRef.value = WrdGrps[i].split('#')[2]; hdnIsWardRef.id = 'hdnIsWardRef' + index;
            newCell.appendChild(lblType);
            newCell.appendChild(hdnwardper);
            newCell.appendChild(hdnWardGrpId);
            newCell.appendChild(hdnIsWardRef);


            newCell = newRow.insertCell(cellindex++);
            newCell.style.width = '68px';
            var hdnN = document.createElement('input'); hdnN.type = 'hidden'; hdnN.id = 'hdnN' + data[0].ConsultationType_ID + WrdGrps[i].split('#')[0]; hdnN.value = '';
            var hdnNSrvPriceid = document.createElement('input'); hdnNSrvPriceid.type = 'hidden'; hdnNSrvPriceid.id = 'hdnNSrvPriceid' + data[0].ConsultationType_ID + WrdGrps[i].split('#')[0]; hdnNSrvPriceid.value = '';
            var hdnNSrvPriceRevNo = document.createElement('input'); hdnNSrvPriceRevNo.type = 'hidden'; hdnNSrvPriceRevNo.id = 'hdnNSrvPriceRevNo' + data[0].ConsultationType_ID + WrdGrps[i].split('#')[0]; hdnNSrvPriceRevNo.value = '';
            var txtN = document.createElement('input'); newCell.align = 'left'; txtN.type = 'text';
            txtN.onblur = function () { CheckAllpricesSholdSame(this) };
            txtN.id = 'txtN' + data[0].ConsultationType_ID + WrdGrps[i].split('#')[0];

            txtN.style.width = '60px';
            txtN.className = "Aright";
            newCell.appendChild(txtN);
            newCell.appendChild(hdnN);
            newCell.appendChild(hdnNSrvPriceid);
            newCell.appendChild(hdnNSrvPriceRevNo);
            newCell = newRow.insertCell(cellindex++);
            newCell.style.width = '68px';
            var hdnE = document.createElement('input'); hdnE.type = 'hidden'; hdnE.id = 'hdnE' + data[0].ConsultationType_ID + WrdGrps[i].split('#')[0]; hdnN.value = '';
            var hdnESrvPriceid = document.createElement('input'); hdnESrvPriceid.type = 'hidden'; hdnESrvPriceid.id = 'hdnESrvPriceid' + data[0].ConsultationType_ID + WrdGrps[i].split('#')[0]; hdnESrvPriceid.value = '';
            var hdnESrvPriceRevNo = document.createElement('input'); hdnESrvPriceRevNo.type = 'hidden'; hdnESrvPriceRevNo.id = 'hdnESrvPriceRevNo' + data[0].ConsultationType_ID + WrdGrps[i].split('#')[0]; hdnESrvPriceRevNo.value = '';
            var txtEmrg = document.createElement('input'); newCell.align = 'left'; txtEmrg.type = 'text';
            txtEmrg.id = 'txtEmrg' + data[0].ConsultationType_ID + WrdGrps[i].split('#')[0];
            txtEmrg.className = "Aright";
            txtEmrg.onblur = function () { CheckAllpricesSholdSame3(this) };
            newCell.appendChild(txtEmrg);
            newCell.appendChild(hdnE);
            newCell.appendChild(hdnESrvPriceid);
            newCell.appendChild(hdnESrvPriceRevNo);
        }
    }
    checkwardgroupexistsBind();
}
function OnConsltTypeFailure(ex) { }
function onwardgroupfailure(ex) { }
function Savevisittype() {
    var tariffid = 1;
    var patientclassid = 1;
    var _xmlMainStr = "<root>";
    var sessionID = 1;
    var cmpid = document.getElementById('ctl00_ContentPlaceHolder1_hdncmpnyid').value;
    $("table[id$=TabPanel10_tblIPConsChr] tr:has(td):gt(0)").each(function () {
        var _xmlNStr = ""; var _xmlStr = "";
        var _xmlEmrStr = "";
        var wardgrpid = $(this).find('input[type=hidden][id*=hdnWardGrpId]').val();
        var nsrvpriceid = $(this).find('input[type=hidden][id*=hdnNSrvPriceid]').val();
        var esrvpriceid = $(this).find('input[type=hidden][id*=hdnESrvPriceid]').val();
        var esrvpricerevno = $(this).find('input[type=hidden][id*=hdnESrvPriceRevNo]').val();
        var nconsultationtypeid = 1;
        var econsultationtypeid = 2;
        if (nsrvpriceid == undefined || nsrvpriceid == null || nsrvpriceid == '') nsrvpriceid = 0;
        if (wardgrpid == undefined || wardgrpid == null || wardgrpid == '') wardgrpid = 0;
        if (esrvpriceid == undefined || esrvpriceid == null || esrvpriceid == '') esrvpriceid = 0;
        var nprice = $(this).find('input[type=text][id*=txtN]').val();
        var emrgprice = $(this).find('input[type=text][id*=txtEmrg]').val();
        var ndocprice = 0;
        var emrgdocprice = 0;
        if (nprice == undefined || nprice == null || nprice == '') nprice = 0;
        if (emrgprice == undefined || emrgprice == null || emrgprice == '') emrgprice = 0;
        if (wardgrpid > 0) {
            _xmlStr += "<COMPANY_VISITS ";
            _xmlStr += " NO_OF_VISITS=$" + nprice + "$";
            _xmlStr += " WARD_GROUP_ID=$" + wardgrpid + "$";
            _xmlStr += " PATIENT_CLASS_ID=$" + 1 + "$";
            _xmlStr += " CONSULTATION_TYPE_ID=$" + 1 + "$";
            _xmlStr += " COMPANY_ID=$" + cmpid + "$";
            _xmlStr += " COMPANY_VISITS_ID=$" + nsrvpriceid + "$";
            _xmlStr += " />";
            _xmlEmrStr += _xmlStr;
            _xmlEmrStr += "<COMPANY_VISITS ";
            _xmlEmrStr += " NO_OF_VISITS=$" + emrgprice + "$";
            _xmlEmrStr += " WARD_GROUP_ID=$" + wardgrpid + "$";
            _xmlEmrStr += " PATIENT_CLASS_ID=$" + 1 + "$";
            _xmlEmrStr += " CONSULTATION_TYPE_ID=$" + 2 + "$";
            _xmlEmrStr += " COMPANY_ID=$" + cmpid + "$";
            _xmlEmrStr += " COMPANY_VISITS_ID=$" + esrvpriceid + "$";
            _xmlEmrStr += " />";
            _xmlMainStr += _xmlNStr + _xmlEmrStr;
        }
    });
    _xmlMainStr += "</root>";
    GetNonAsync(
        "Private/CompanyMaster/CompanyTariffConfiguration.aspx/Savevisits",
        { xmlString: _xmlMainStr },
        function (JData) {
        },
    function (jqXHR, textStatus, errorThrown) {
    });

}
function CheckAllpricesSholdSame3(obj) {

}
function CheckAllpricesSholdSame()
{ }
function checkwardgroupexistsBind() {
    //$('table[id$=TabPanel10_tblIPConsChr] tr:has(td)').remove();
    var cmpid = document.getElementById('ctl00_ContentPlaceHolder1_hdncmpnyid').value;
    var _JSONParams = JSON.stringify({ Companyid: cmpid });
    var _ServiceURL = "CompanyTariffConfiguration.aspx/Bindwardgroupexists";
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
            if (jdata != null) {
                var i = 0;
                var data = jQuery.parseJSON(jdata.d[0]);
                $(data).each(function (i, dataval) {
                    var pricegrpid = data[i].WARD_GROUP_ID;
                    var constyeid = data[i].CONSULTATION_TYPE_ID;
                    var srvpriceid = data[i].COMPANY_VISITS_ID;
                    var txtserviceprice = data[i].NO_OF_VISITS;
                    if (txtserviceprice == '') txtserviceprice = 0;

                    if (srvpriceid == null || srvpriceid == '') srvpriceid = 0;
                    if (srvpriceid > 0)
                        $("table[id$=TabPanel10_tblIPConsChr] tr:has(td)").each(function () {
                            var wardgrpid = $(this).find('input[type=hidden][id*=hdnWardGrpId]').val();
                            if (pricegrpid == wardgrpid) {
                                if (constyeid == 1) {
                                    $(this).find('input[type=hidden][id*=hdnNSrvPriceid]').val(srvpriceid);
                                    $(this).find('input[type=text][id*=txtN1]').val(txtserviceprice);
                                }
                                else if (constyeid == 2) {
                                    $(this).find('input[type=hidden][id*=hdnESrvPriceid]').val(srvpriceid);
                                    $(this).find('input[type=text][id*=txtEmrg]').val(txtserviceprice);
                                }
                            }
                        });

                });
            }
        },
        fail: function (e) {
        }
    });
}

function OnItem1(_Val) {
    if (_Val["ID"] == '' || _Val["ID"] != null) {

    }
    else {

    }
}
function adddetailspharlevel() {
    debugger;
    var flag = false;
    var gridID = document.getElementById('tblitemlevelwisediscount');
    var Sno = gridID.rows.length;
    debugger;
    var PatientTypeID = MultiSelectDropdown.GetSelectedList('Ucitemlevel1');

    var ITEMNAME = '', ITEMCD = '', ITEMID = '', autoid = 0;
    var datalebgth = PatientTypeID.split(',').length;
    for (var _index = 0; _index < datalebgth; _index++) {
        debugger;
        var innerdatitem = PatientTypeID.split(',')[_index].split('-');
        ITEMNAME = innerdatitem[1];
        ITEMCD = innerdatitem[3]; ;
        ITEMID = innerdatitem[0];
        var COMP_GRADE_ID = "0";
        var COMP_GRADE_REV_NO = "0";
        var flagExist = "";
        if (ITEMCD == '' || ITEMCD == undefined || ITEMCD == 'undefined') {
            ITEMCD = '';
        }
        if (ITEMNAME == "") {
            $(".stoast").toastText("warning", "Please Select item level", 5, 3);

            return false;
        }
        $('table[id*=TabPanel6_tblitemlevelwisediscount] tbody tr:gt(0)').each(function () {
            var gardename = $(this).closest('tr').find('[id*=txtlevelName]').val();
            gardename = gardename == ('' || undefined) ? 0 : gardename;

            if (gardename.trim() == ITEMNAME.trim()) {
                $(".stoast").toastText("Info", "Item level Name alreday exists!", 7, 2);
                flag = true;
                return false;
            }
        });
        if (flag == false) {
            var jDataval = Getlevlitem(ITEMNAME, ITEMCD, ITEMID, autoid, Sno, 0);
            renderGetlevlitem(jDataval);
        }
    }
    MultiSelectDropdown.EnableMe('Ucitemlevel1');
    return false;
}

function Getlevlitemresrtrict(ITEMNAME, ITEMCD, ITEMID, autoid, Sno) {

    var _params = [];
    var _param = {
        autoid: autoid,
        sno: typeof Sno == "number" || typeof Sno == "string" ? Sno : '0',
        ITEMNAME: typeof ITEMNAME == "number" || typeof ITEMNAME == "string" ? ITEMNAME : '0',
        ITEMID: typeof ITEMID == "number" || typeof ITEMID == "string" ? ITEMID : '0',
        ITEMCD: typeof ITEMCD == "number" || typeof ITEMCD == "string" ? ITEMCD : '0'
    };
    _params.push(_param);
    return _params;
}
function Getlevlitem(ITEMNAME, ITEMCD, ITEMID, autoid, Sno, DISC_PER) {

    var _params = [];
    var _param = {
        autoid: autoid,
        sno: typeof Sno == "number" || typeof Sno == "string" ? Sno : '0',
        ITEMNAME: typeof ITEMNAME == "number" || typeof ITEMNAME == "string" ? ITEMNAME : '0',
        ITEMID: typeof ITEMID == "number" || typeof ITEMID == "string" ? ITEMID : '0',
        DISC_PER: typeof DISC_PER == "number" || typeof DISC_PER == "string" ? DISC_PER : '0',
        ITEMCD: typeof ITEMCD == "number" || typeof ITEMCD == "string" ? ITEMCD : '0'
    };
    _params.push(_param);
    return _params;
}
function renderGetlevlitemresrtrict(jData) {
    var _html = "";
    var _billingTemplate = _.template($("#resthtmlitem").html());
    _dataSourceDis2 = jData;
    $("#tblrestitemwise tbody").append(_billingTemplate(_dataSourceDis2));
}
function renderGetlevlitem(jData) {
    var _html = "";
    var _billingTemplate = _.template($("#tblitemlevelgrid").html());
    _dataSourceDis = jData;
    $("#tblitemlevelwisediscount tbody").append(_billingTemplate(_dataSourceDis));
}
function Removedetailsoflevel(ev) {
    var CurrentRowIndex = ev.parentElement.parentElement.rowIndex;
    if (CurrentRowIndex == 0) {
        $(".stoast").toastText("warning", "No Item To Delete", 5, 3);
        return false;
    }
    else {
        $('[id$=tblitemlevelwisediscount] tr').filter(':eq(' + CurrentRowIndex + ')').remove();
    }
    AssignSnolevel(CurrentRowIndex);
    return false;
}
function AssignSnolevel(rowindex) {
    var index = 1;
    $("table[id*=tblitemlevelwisediscount] tr:has(td)").each(function () {
        $(this).closest('tr').find("[id*=lblSNo]").text(index);
        index++;
    });
}
function saveitemlevel() {
    var _xmlStr = ""; var Dname = ""; var Ddesc = "";
    var cmpid = document.getElementById('ctl00_ContentPlaceHolder1_hdncmpnyid').value;
    var Divdepartment = document.getElementById('tblitemlevelwisediscount').rows.length;
    _xmlStr = "<root>";
    if (Divdepartment > 1) {
        $('table[id$=tblitemlevelwisediscount] tr:has(td)').each(function (e) {
            var DEPTID = $(this).closest('tr').find('[id*=itemlevelid]').val();
            var COMP_EXECUTIVE_ID = $(this).closest('tr').find('[id*=autoidlevel]').val();
            var PER = $(this).closest('tr').find('[id*=txtlevelper]').val();
            Divname = typeof Divname == "string" ? (Divname.trim() == "0" ? "0" : Divname) : (typeof Divname == "number" ? Gname : "0");
            Desc = typeof Desc == "string" ? (Desc.trim() == "0" ? "0" : Desc) : (typeof Desc == "number" ? Desc : "0");
            if (COMP_EXECUTIVE_ID == "" || COMP_EXECUTIVE_ID == undefined || COMP_EXECUTIVE_ID == null) { COMP_EXECUTIVE_ID = "0"; }
            if (PER == "" || PER == undefined || PER == null) { PER = "0"; }

            _xmlStr += "<COMPANY_LEVEL_WISE_PHARMACY_DISCOUNT";
            if (COMP_EXECUTIVE_ID != "" || COMP_EXECUTIVE_ID != undefined)
                _xmlStr += " LEVEL_WISE_PHARMACY_DISCOUNT_ID=^" + COMP_EXECUTIVE_ID + "^";
            else
                _xmlStr += " LEVEL_WISE_PHARMACY_DISCOUNT_ID=^" + "0" + "^";
            _xmlStr += " ITEM_ID=^" + DEPTID + "^";
            _xmlStr += " DISC_PER=^" + PER + "^";
            _xmlStr += " COMPANY_ID=^" + cmpid + "^";
            _xmlStr += " />";
        });
        _xmlStr += "</root>";
    }

    GetNonAsync(
        "Private/CompanyMaster/CompanyTariffConfiguration.aspx/Saveitemlevel1",
        { xmlString: _xmlStr },
        function (JData) {
        },
    function (jqXHR, textStatus, errorThrown) {
    });

}


function Binditemlevel() {
    $('table[id$=tblitemlevelwisediscount] tr:has(td)').remove();
    var cmpid = document.getElementById('ctl00_ContentPlaceHolder1_hdncmpnyid').value;
    var _JSONParams = JSON.stringify({ Companyid: cmpid });
    var _ServiceURL = "CompanyTariffConfiguration.aspx/BindGetitemLevel";
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
            if (jdata != null) {
                var i = 0;
                var divdata = jQuery.parseJSON(jdata.d[0]);
                $(divdata).each(function (i, dataval) {
                    i++;
                    var ITEMNAME = '0', ITEMCD = '', ITEMID = '', autoid = 0;
                    ITEMNAME = dataval.ITEMNAME;
                    ITEMID = dataval.ITEMID;
                    ITEMCD = dataval.ITEMCD;
                    autoid = dataval.autoid;
                    DISC_PER = dataval.DISC_PER;
                    Sno = i;
                    var jDataval = Getlevlitem(ITEMNAME, ITEMCD, ITEMID, autoid, Sno, DISC_PER);
                    renderGetlevlitem(jDataval);
                });
            }
        },
        fail: function (e) {
        }
    });
}

/*Pasted item*/
function OnItem2(_Val) {
    if (_Val["ID"] == '' || _Val["ID"] != null) {
        document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel11_itemleveldisc_txtSearchControl').value = _Val["_lktext"];
        $('#ctl00_ContentPlaceHolder1_TabContainer1_TabPanel11_itemleveldisc__hiddenText').val(_Val["_lktext"]);
        document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel11_itemleveldisc__hiddenID').value = _Val["ID"];
    }
    else {
        document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel11_itemleveldisc_txtSearchControl').value = _Val["_lktext"];
        $('#ctl00_ContentPlaceHolder1_TabContainer1_TabPanel11_itemleveldisc_hiddenText').val(_Val["_lktext"]);
        document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel11_itemleveldisc__hiddenID').value = _Val["IL1_ID"];
    }
}

function adddetailspharitemwiselevelresrtrict() {
    var flag = false;
    var gridID = document.getElementById('tblrestitemwise');
    var Sno = gridID.rows.length;
    var PatientTypeID = MultiSelectDropdown.GetSelectedList('SELECTINTWO');
    var datalebgth = PatientTypeID.split(',').length;
    for (var _index = 0; _index < datalebgth; _index++) {
        debugger;
        var innerdatitem = PatientTypeID.split(',')[_index].split('-');
        ITEMNAME = innerdatitem[1];
        ITEMCD = innerdatitem[2]; ;
        ITEMID = innerdatitem[0];
        var COMP_GRADE_ID = "0";
        var autoid = 0;
        var COMP_GRADE_REV_NO = "0";
        var flagExist = "";
        if (ITEMCD == '' || ITEMCD == undefined || ITEMCD == 'undefined') {
            ITEMCD = '';
        }
        if (ITEMNAME == "") {
            $(".stoast").toastText("warning", "Please Select item level", 5, 3);

            return false;
        }

        $('table[id*=TabPanel11_tblrestitemwise] tbody tr:gt(0)').each(function () {
            var gardename = $(this).closest('tr').find('[id*=txtlevelName]').val();
            gardename = gardename == ('' || undefined) ? 0 : gardename;

            if (gardename.trim() == ITEMNAME.trim()) {
                $(".stoast").toastText("Info", "Item Name alreday exists!", 7, 2);
                flag = true;
                return false;
            }
        });
        if (flag == false) {
            var jDataval = Getlevlitemresrtrict(ITEMNAME, ITEMCD, ITEMID, autoid, Sno, 0);
            renderGetlevlitemresrtrict(jDataval);
        }
    }
    MultiSelectDropdown.EnableMe('SELECTINTWO');
    return false;
}
function adddetailspharlevelresrtrict() {
    var flag = false;
    var gridID = document.getElementById('tblrestricitemlvel');
    var Sno = gridID.rows.length;

    var ITEMNAME = '', ITEMCD = '', ITEMID = '', autoid = 0;
    debugger;
    var PatientTypeID = MultiSelectDropdown.GetSelectedList('itemleveldisc');
    var datalebgth = PatientTypeID.split(',').length;
    for (var _index = 0; _index < datalebgth; _index++) {
        var innerdatitem = PatientTypeID.split(',')[_index].split('-');
        ITEMNAME = innerdatitem[1];
        ITEMCD = innerdatitem[2];
        ITEMID = innerdatitem[0];
        var COMP_GRADE_ID = "0";
        var COMP_GRADE_REV_NO = "0";
        var flagExist = "";
        if (ITEMCD == '' || ITEMCD == undefined || ITEMCD == 'undefined') {
            ITEMCD = '';
        }
        if (ITEMNAME == "") {
            $(".stoast").toastText("warning", "Please Select item level", 5, 3);
            document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel11_itemleveldisc_txtSearchControl').focus();
            return false;
        }
        $('table[id*=TabPanel11_tblrestricitemlvel] tbody tr:gt(0)').each(function () {
            var gardename = $(this).closest('tr').find('[id*=restricttxtlevelName]').val();
            gardename = gardename == ('' || undefined) ? 0 : gardename;

            if (gardename.trim() == ITEMNAME.trim()) {
                $(".stoast").toastText("Info", "Item level Name alreday exists!", 7, 2);
                flag = true;
                return false;
            }
        });
        if (flag == false) {
            var jDataval = Getlevlitemrestrict(ITEMNAME, ITEMCD, ITEMID, autoid, Sno, 0);
            renderGetlevlitemresrtict(jDataval);
        }
    }
    MultiSelectDropdown.EnableMe('itemleveldisc');
    return false;
}

function Getlevlitemrestrict(ITEMNAME, ITEMCD, ITEMID, autoid, Sno) {

    var _params = [];
    var _param = {
        autoid: autoid,
        sno: typeof Sno == "number" || typeof Sno == "string" ? Sno : '0',
        ITEMNAME: typeof ITEMNAME == "number" || typeof ITEMNAME == "string" ? ITEMNAME : '0',
        ITEMID: typeof ITEMID == "number" || typeof ITEMID == "string" ? ITEMID : '0',
        ITEMCD: typeof ITEMCD == "number" || typeof ITEMCD == "string" ? ITEMCD : '0'
    };
    _params.push(_param);
    return _params;
}
function renderGetlevlitemresrtict(jData) {
    var _html = "";
    var _billingTemplate = _.template($("#restrichtmlgrid").html());
    _dataSourceDis1 = jData;
    $("#tblrestricitemlvel tbody").append(_billingTemplate(_dataSourceDis1));
}
function Removedetailsoflevelrestrict(ev) {
    var CurrentRowIndex = ev.parentElement.parentElement.rowIndex;
    if (CurrentRowIndex == 0) {
        $(".stoast").toastText("warning", "No Item To Delete", 5, 3);
        return false;
    }
    else {
        $('[id$=tblrestricitemlvel] tr').filter(':eq(' + CurrentRowIndex + ')').remove();
    }
    AssignSnolevelrestrict(CurrentRowIndex);
    return false;
}
function Removedetailsoflevelrestrict1(ev) {
    var CurrentRowIndex = ev.parentElement.parentElement.rowIndex;
    if (CurrentRowIndex == 0) {
        $(".stoast").toastText("warning", "No Item To Delete", 5, 3);
        return false;
    }
    else {
        $('[id$=tblrestitemwise] tr').filter(':eq(' + CurrentRowIndex + ')').remove();
    }
    AssignSnolevelrestrict1(CurrentRowIndex);
    return false;
}
function AssignSnolevelrestrict1(rowindex) {
    var index = 1;
    $("table[id*=tblrestitemwise] tr:has(td)").each(function () {
        $(this).closest('tr').find("[id*=lblSNo]").text(index);
        index++;
    });
}
function AssignSnolevelrestrict(rowindex) {
    var index = 1;
    $("table[id*=tblrestricitemlvel] tr:has(td)").each(function () {
        $(this).closest('tr').find("[id*=lblSNo]").text(index);
        index++;
    });
}
function saveitemlevelresrtict() {
    debugger;
    var _xmlStr = ""; var Dname = ""; var Ddesc = "";
    var cmpid = document.getElementById('ctl00_ContentPlaceHolder1_hdncmpnyid').value;
    var Divdepartment = document.getElementById('tblrestricitemlvel').rows.length;
    _xmlStr = "<root>";
    if (Divdepartment > 1) {
        $('table[id$=tblrestricitemlvel] tr:has(td)').each(function (e) {
            debugger;
            var DEPTID = $(this).closest('tr').find('[id*=restrictitemlevelid]').val();
            var COMP_EXECUTIVE_ID = $(this).closest('tr').find('[id*=restrictautoidlevel]').val();
            Divname = typeof Divname == "string" ? (Divname.trim() == "0" ? "0" : Divname) : (typeof Divname == "number" ? Gname : "0");
            Desc = typeof Desc == "string" ? (Desc.trim() == "0" ? "0" : Desc) : (typeof Desc == "number" ? Desc : "0");
            if (COMP_EXECUTIVE_ID == "" || COMP_EXECUTIVE_ID == undefined || COMP_EXECUTIVE_ID == null) { COMP_EXECUTIVE_ID = "0"; }
            _xmlStr += "<COMPANY_RESTRICT_ITEM_LEVEL_DISC_MEDIC";
            if (COMP_EXECUTIVE_ID != "" || COMP_EXECUTIVE_ID != undefined)
                _xmlStr += " RESTRICT_ITEM_LEVEL_DISC_MEDIC_ID=^" + COMP_EXECUTIVE_ID + "^";
            else
                _xmlStr += " RESTRICT_ITEM_LEVEL_DISC_MEDIC_ID=^" + "0" + "^";
            _xmlStr += " ITEM_LEVEL_ID=^" + DEPTID + "^";
            _xmlStr += " COMPANY_ID=^" + cmpid + "^";
            _xmlStr += " />";
        });
        _xmlStr += "</root>";
    }

    GetNonAsync(
        "Private/CompanyMaster/CompanyTariffConfiguration.aspx/resrtrictSaveitemlevel1",
        { xmlString: _xmlStr },
        function (JData) {
        },
    function (jqXHR, textStatus, errorThrown) {
    });

}


function BinditemlevelResrtrict() {
    $('table[id$=tblrestricitemlvel] tr:has(td)').remove();
    var cmpid = document.getElementById('ctl00_ContentPlaceHolder1_hdncmpnyid').value;
    var _JSONParams = JSON.stringify({ Companyid: cmpid });
    var _ServiceURL = "CompanyTariffConfiguration.aspx/ResrtrictBindGetitemLevel";
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
            if (jdata != null) {
                var i = 0;
                var divdata = jQuery.parseJSON(jdata.d[0]);
                $(divdata).each(function (i, dataval) {
                    i++;
                    var ITEMNAME = '0', ITEMCD = '', ITEMID = '', autoid = 0;
                    ITEMNAME = dataval.ITEMNAME;
                    ITEMID = dataval.ITEMID;
                    ITEMCD = dataval.ITEMCD;
                    autoid = dataval.autoid;
                    Sno = i;
                    var jDataval = Getlevlitemrestrict(ITEMNAME, ITEMCD, ITEMID, autoid, Sno);
                    renderGetlevlitemresrtict(jDataval);
                });
            }
        },
        fail: function (e) {
        }
    });
}
/*pasted item end*/





function saveitemlevelresrtictITEM() {
    debugger;
    var _xmlStr = ""; var Dname = ""; var Ddesc = "";
    var cmpid = document.getElementById('ctl00_ContentPlaceHolder1_hdncmpnyid').value;
    var Divdepartment = document.getElementById('tblrestitemwise').rows.length;
    _xmlStr = "<root>";
    if (Divdepartment > 1) {
        $('table[id$=tblrestitemwise] tr:has(td)').each(function (e) {
            debugger;
            var DEPTID = $(this).closest('tr').find('[id*=restrictitemlevelid1]').val();
            var COMP_EXECUTIVE_ID = $(this).closest('tr').find('[id*=restrictautoidlevel1]').val();
            Divname = typeof Divname == "string" ? (Divname.trim() == "0" ? "0" : Divname) : (typeof Divname == "number" ? Gname : "0");
            Desc = typeof Desc == "string" ? (Desc.trim() == "0" ? "0" : Desc) : (typeof Desc == "number" ? Desc : "0");
            if (COMP_EXECUTIVE_ID == "" || COMP_EXECUTIVE_ID == undefined || COMP_EXECUTIVE_ID == null) { COMP_EXECUTIVE_ID = "0"; }
            _xmlStr += "<COMPANY_RESTRICT_ITEM_WISE_DISC_MEDIC";
            if (COMP_EXECUTIVE_ID != "" || COMP_EXECUTIVE_ID != undefined)
                _xmlStr += " RESTRICT_ITEM_WISE_DISC_MEDIC_ID=^" + COMP_EXECUTIVE_ID + "^";
            else
                _xmlStr += " RESTRICT_ITEM_WISE_DISC_MEDIC_ID=^" + "0" + "^";
            _xmlStr += " ITEM_ID=^" + DEPTID + "^";
            _xmlStr += " COMPANY_ID=^" + cmpid + "^";
            _xmlStr += " />";
        });
        _xmlStr += "</root>";
    }

    GetNonAsync(
        "Private/CompanyMaster/CompanyTariffConfiguration.aspx/resrtrictSaveitemlevel2",
        { xmlString: _xmlStr },
        function (JData) {
        },
    function (jqXHR, textStatus, errorThrown) {
    });
}

function BinditemlevelResrtrict1() {
    $('table[id$=tblrestitemwise] tr:has(td)').remove();
    var cmpid = document.getElementById('ctl00_ContentPlaceHolder1_hdncmpnyid').value;
    var _JSONParams = JSON.stringify({ Companyid: cmpid });
    var _ServiceURL = "CompanyTariffConfiguration.aspx/ResrtrictBindGetitemLevel1";
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
            if (jdata != null) {
                var i = 0;
                var divdata = jQuery.parseJSON(jdata.d[0]);
                $(divdata).each(function (i, dataval) {
                    i++;
                    var ITEMNAME = '0', ITEMCD = '', ITEMID = '', autoid = 0;
                    ITEMNAME = dataval.ITEMNAME;
                    ITEMID = dataval.ITEMID;
                    ITEMCD = dataval.ITEMCD;
                    autoid = dataval.autoid;
                    Sno = i;
                    var jDataval = Getlevlitemresrtrict(ITEMNAME, ITEMCD, ITEMID, autoid, Sno, 0);
                    renderGetlevlitemresrtrict(jDataval);
                });
            }
        },
        fail: function (e) {
        }
    });
}