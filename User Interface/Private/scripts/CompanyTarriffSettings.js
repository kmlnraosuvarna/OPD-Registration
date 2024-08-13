function numeralsOnly(evt) {

    var intKey = (window.Event) ? evt.which : evt.keyCode;
    if (intKey == undefined)//for InternetExplorer(IE) 
    {
        var charcode = evt.keyCode;
        //EDITMODCODE
        // if (charcode > 31 && (charcode < 48 || charcode > 57))
        if (charcode > 31 && (charcode < 48 || charcode > 57) && charcode != 46) {
            evt.returnValue = false;
            return false;
        }
        return true;
    }
    else//for Mozilla
    {
        //EDITMODCODE
        // if (intKey > 31 && (intKey < 48 || intKey > 57))
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
    //document.getElementById("ctl00_ContentPlaceHolder1_chkPharmaServTax
    document.getElementById("ctl00_ContentPlaceHolder1_txtDiscount").value = '';
    document.getElementById("ctl00_ContentPlaceHolder1_txtColor").value = '';


    //    document.getElementById("ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_ucTariff1_ucTarriff_txtSearchControl").value = '';
    //    document.getElementById("ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_ucTariff2_ucTarriff_txtSearchControl").value = '';
    //    document.getElementById("ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_ucTariff3_ucTarriff_txtSearchControl").value = '';
    //    document.getElementById("ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_ucTariffDefault_ucTarriff_txtSearchControl").value = '';
    //    document.getElementById("ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_GenericGrid1_ucTarriff_txtSearchControl").value = '';
    //    document.getElementById("ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_GenericGrid2_ucTarriff_txtSearchControl").value = '';
    //    document.getElementById("ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_GenericGrid3_ucTarriff_txtSearchControl").value = '';
    //    document.getElementById("ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_GenericGrid4_ucTarriff_txtSearchControl").value = '';

    document.getElementById("ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtTarifDis1_IP").value = '';
    document.getElementById("ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtTarifDis2_IP").value = '';
    document.getElementById("ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtTarifDis3_IP").value = '';
    document.getElementById("ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtTarifDis4_IP").value = '';
    document.getElementById("ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtTarifDis1_OP").value = '';
    document.getElementById("ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtTarifDis2_OP").value = '';
    document.getElementById("ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtTarifDis3_OP").value = '';
    document.getElementById("ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtTarifDis4_OP").value = '';

    //    document.getElementById("ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_ucTariff1_txtTariffName").value = '';
    //    document.getElementById("ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_ucTariff2_txtTariffName").value = '';
    //    document.getElementById("ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_ucTariff3_txtTariffName").value = '';
    //    document.getElementById("ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_ucTariffDefault_txtTariffName").value='';
    //    document.getElementById("ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_GenericGrid1_txtTariffName").value = '';
    //    document.getElementById("ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_GenericGrid2_txtTariffName").value = '';
    //    document.getElementById("ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_GenericGrid3_txtTariffName").value = '';
    //    document.getElementById("ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_GenericGrid4_txtTariffName").value = '';
    //    
    return false;
}
// Get radio button list value
function GetRadioButtonValue() {
    var radioPriority = document.getElementById('ctl00_ContentPlaceHolder1_rbTariffPrio');
    if (document.getElementById('ctl00_ContentPlaceHolder1_rbTariffPrio' + '_0').checked == true) {
        EnableSerType();
        document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_trOP').style.display = 'none';
        document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_trIP').style.display = 'block';
        //        document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_trBo').style.display = 'none';
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
        //        document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_trBo').style.display = 'none';
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
        //        document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_trBo').style.display = 'block';

        if (document.getElementById('ctl00_ContentPlaceHolder1_txtOrgpercent_OP').value == '')
            document.getElementById('ctl00_ContentPlaceHolder1_txtOrgpercent_OP').style.border = "1px solid #f4785e";
        if (document.getElementById('ctl00_ContentPlaceHolder1_txtEmppercent_OP').value == '')
            document.getElementById('ctl00_ContentPlaceHolder1_txtEmppercent_OP').style.border = "1px solid #f4785e";
        if (document.getElementById('ctl00_ContentPlaceHolder1_txtEmppercent_IP').value == '')
            document.getElementById('ctl00_ContentPlaceHolder1_txtEmppercent_IP').style.border = "1px solid #f4785e";
        if (document.getElementById('ctl00_ContentPlaceHolder1_txtOrgpercent_IP').value == '')
            document.getElementById('ctl00_ContentPlaceHolder1_txtOrgpercent_IP').style.border = "1px solid #f4785e";

        //        document.getElementById('ctl00_ContentPlaceHolder1_txtEmppercent_IP').style.border = "1px solid #f4785e";
        //         document.getElementById('ctl00_ContentPlaceHolder1_txtOrgpercent_IP').style.border = "1px solid #f4785e";
        //          document.getElementById('ctl00_ContentPlaceHolder1_txtOrgpercent_OP').style.border = "1px solid #f4785e";
        //         document.getElementById('ctl00_ContentPlaceHolder1_txtEmppercent_OP').style.border = "1px solid #f4785e";

    }
    if (document.getElementById('ctl00_ContentPlaceHolder1_rbTariffPrio' + '_3').checked == true) {
        DisableSerType();
    }
    if (document.getElementById('ctl00_ContentPlaceHolder1_rbTariffPrio' + '_4').checked == true) {
        DisableSerType();
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
            // val=document.getElementById(obj1).value;
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
function CalOpIp() {

    var txtOrgpercent_OP = document.getElementById("ctl00_ContentPlaceHolder1_txtOrgpercent_OP").value;
    var txtEmppercent_OP = document.getElementById("ctl00_ContentPlaceHolder1_txtEmppercent_OP").value;

    if ((txtOrgpercent_OP != '' || txtOrgpercent_OP != undefined || txtOrgpercent_OP != NaN) && (parseFloat(txtOrgpercent_OP) <= 100)) {
        document.getElementById("ctl00_ContentPlaceHolder1_txtEmppercent_OP").value = 100 - parseInt(txtOrgpercent_OP);
        document.getElementById('ctl00_ContentPlaceHolder1_txtEmppercent_OP').style.border = "1px solid #bebebe";
        return false;
    }
    else {
        document.getElementById("ctl00_ContentPlaceHolder1_txtOrgpercent_OP").value = '0';
        document.getElementById("ctl00_ContentPlaceHolder1_txtEmppercent_OP").value = '0';

    }
    // }
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

function CheckText(obj1) {
    var obj = obj1.id;
    var elem1 = document.getElementById(obj);
    if (elem1 != null) {
        if (elem1.value.length == 0)
            elem1.style.border = 'solid 1px #fecccd';
        else
            elem1.style.border = 'solid 1px #d8d8d8';
    }
}

function CheckValidation() {
    var txtSearchCmp = document.getElementById("ctl00_ContentPlaceHolder1_ucCompanyCode_txtSearchControl").value;
    var txtCotractNo = document.getElementById("ctl00_ContentPlaceHolder1_txtContractNo").value;
    var txtCotractdt = document.getElementById("ctl00_ContentPlaceHolder1_txtStDt").value;
    var txtCotractEfectfrm = document.getElementById("ctl00_ContentPlaceHolder1_txtEfectFrom").value;
    var txtCotractEfectTo = document.getElementById("ctl00_ContentPlaceHolder1_txtEfectTo").value;
    var txtContactPerson = document.getElementById("ctl00_ContentPlaceHolder1_txtContactPerson").value;
    var txtAuthorizedperson = document.getElementById("ctl00_ContentPlaceHolder1_txtAuthorizedperson").value;
    var txtRegFee = document.getElementById("ctl00_ContentPlaceHolder1_txtRegFee").value;
    var txtOrgpercent_OP = document.getElementById("ctl00_ContentPlaceHolder1_txtOrgpercent_OP").value;
    var txtEmppercent_OP = document.getElementById("ctl00_ContentPlaceHolder1_txtEmppercent_OP").value;
    var txtOrgpercent_IP = document.getElementById("ctl00_ContentPlaceHolder1_txtOrgpercent_IP").value;
    var txtEmppercent_IP = document.getElementById("ctl00_ContentPlaceHolder1_txtEmppercent_IP").value;
    var txtConsNOs = document.getElementById("ctl00_ContentPlaceHolder1_txtConsNOs").value;
    var txtConsDAYs = document.getElementById("ctl00_ContentPlaceHolder1_txtConsDAYs").value;
    var txtTarifDis_IP = document.getElementById("ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtTarifDis4_IP").value;
    var txtTarifDis_OP = document.getElementById("ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtTarifDis4_OP").value;
    var ucTariff = document.getElementById('ctl00_ContentPlaceHolder1_ucTariff_txtSearchControl');
    var txtContactPersion = document.getElementById('ctl00_ContentPlaceHolder1_txtContactPerson');
    var txtAuthPersion = document.getElementById('ctl00_ContentPlaceHolder1_txtAuthorizedperson');
    var txtCreditLimit = document.getElementById('ctl00_ContentPlaceHolder1_txtCreditLimitAmt');
    var Priority1ManIP = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtIPTariff1');
    var Priority1ManOP = document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtOP_tarif1');
    var c = document.getElementById('ctl00_ContentPlaceHolder1_hdnShowIPoptions').value;
    if (c == "True") {
        if ($('[id$=rbTariffPrio_0]').prop('checked')) {
            if (Priority1ManIP.value == '') {
                $(".stoast").toastText("warning", "Please Select Priority1 For IP", 5, 3);
                document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtIPTariff1').focus();
                return false;
            }
        }
    }
    if ($('[id$=rbTariffPrio_1]').prop('checked')) {
        if (Priority1ManOP.value == '') {
            $(".stoast").toastText("warning", "Please Select Priority1 For OP", 5, 3);
            document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtOP_tarif1').focus();
            return false;
        }
    }
    if ($('[id$=rbTariffPrio_2]').prop('checked')) {
        if (Priority1ManOP.value == '' || Priority1ManIP.value == '') {
            if (Priority1ManIP.value == '') {
                $(".stoast").toastText("warning", "Please Select Priority1 For IP", 5, 3);
                document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtIPTariff1').focus();
            }
            if (Priority1ManOP.value == '') {
                $(".stoast").toastText("warning", "Please Select Priority1 For OP", 5, 3);
                document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtOP_tarif1').focus();
            }
            return false;
        }
    }

    if (txtSearchCmp == '') {
        $(".stoast").toastText("warning", "Please Select Company", 5, 3);
        document.getElementById("ctl00_ContentPlaceHolder1_ucCompanyCode_txtSearchControl").focus();
        // document.getElementById("ctl00_ContentPlaceHolder1_ucCompanyCode_txtSearchControl").focus();
        return false;
    }
    else
        if (txtCotractNo == '') {
            $(".stoast").toastText("warning", "Please Select Contract Number", 5, 3);
            document.getElementById("ctl00_ContentPlaceHolder1_txtContractNo").focus();
            return false;
        }
        else
            if (txtCotractdt == '') {
                $(".stoast").toastText("warning", "Please Select Contract Date", 5, 3);
                document.getElementById("ctl00_ContentPlaceHolder1_txtStDt").focus();
                return false;
            }
            else
                if (txtCotractEfectfrm == '') {
                    $(".stoast").toastText("warning", "Please Select Efective From Date", 5, 3);
                    document.getElementById("ctl00_ContentPlaceHolder1_txtEfectFrom").focus();
                    return false;
                }
                else
                    if (txtCotractEfectTo == '') {
                        $(".stoast").toastText("warning", "Please Select Efective To Date", 5, 3);
                        document.getElementById("ctl00_ContentPlaceHolder1_txtEfectTo").focus();
                        return false;
                    }
                    else
                        if (txtContactPersion.value == '') {
                            $(".stoast").toastText("warning", "Please enter Contact Person!", 5, 3);
                            txtContactPersion.focus();
                            return false;
                        }
                        else
                            if (txtAuthPersion.value == '') {
                                $(".stoast").toastText("warning", "Please enter Authorised Persion!", 5, 3);
                                txtAuthPersion.focus();
                                return false;
                            }

    if ($('[id$=rbTariffPrio_1]').prop('checked')) {
    } else {
        if (ucTariff.value == '') {
            $(".stoast").toastText("warning", "Please Select Default Consultant Tariff!", 5, 3);
            ucTariff.style.border = "1px solid #f4785e";
            ucTariff.focus();
            return false;
        }
        else {
            ucTariff.style.border = "1px solid #bebebe";
        }
    }


    // For IP

    if ($('[id$=rbTariffPrio_0]').prop('checked')) {

        if (txtOrgpercent_IP == '') {
            $(".stoast").toastText("warning", "Please Select Organization IP Percent!", 5, 3);
            document.getElementById("ctl00_ContentPlaceHolder1_txtOrgpercent_IP").focus();
            return false;
        }
        if (txtEmppercent_IP == '') {
            $(".stoast").toastText("warning", "Please Select Employee IP Percent!", 5, 3);
            document.getElementById("ctl00_ContentPlaceHolder1_txtEmppercent_IP").focus();
            return false;
        }

    }

    //For Op
    if ($('[id$=rbTariffPrio_1]').prop('checked')) {
        if (txtOrgpercent_OP == '') {
            $(".stoast").toastText("warning", "Please Select Organization OP Percent!", 5, 3);
            document.getElementById("ctl00_ContentPlaceHolder1_txtOrgpercent_OP").focus();
            return false;
        }
        if (txtEmppercent_OP == '') {
            $(".stoast").toastText("warning", "Please Select Employee OP Percent!", 5, 3);
            document.getElementById("ctl00_ContentPlaceHolder1_txtEmppercent_OP").focus();
            return false;
        }

    }

    //For Both
    if ($('[id$=rbTariffPrio_2]').prop('checked')) {
        if (txtOrgpercent_OP == '') {
            $(".stoast").toastText("warning", "Please Select Organization OP Percent!", 5, 3);
            document.getElementById("ctl00_ContentPlaceHolder1_txtOrgpercent_OP").focus();
            return false;
        }
        if (txtEmppercent_OP == '') {
            $(".stoast").toastText("warning", "Please Select Employee OP Percent!", 5, 3);
            document.getElementById("ctl00_ContentPlaceHolder1_txtEmppercent_OP").focus();
            return false;
        }
        if (txtOrgpercent_IP == '') {
            $(".stoast").toastText("warning", "Please Select Organization IP Percent!", 5, 3);
            document.getElementById("ctl00_ContentPlaceHolder1_txtOrgpercent_IP").focus();
            return false;
        }
        if (txtEmppercent_IP == '') {
            $(".stoast").toastText("warning", "Please Select Employee IP Percent!", 5, 3);
            document.getElementById("ctl00_ContentPlaceHolder1_txtEmppercent_IP").focus();
            return false;
        }
    }

    var b = document.getElementById('ctl00_ContentPlaceHolder1_hdnShowIPoptions').value;
    if (b == 'True') {
        if (txtConsNOs == '' || txtConsNOs == '0') {
            $(".stoast").toastText("warning", "Please Enter Nos of Consultation!", 5, 3);
            document.getElementById("ctl00_ContentPlaceHolder1_txtConsNOs").focus();
            return false;
        }
        if (txtConsDAYs == '' || txtConsDAYs == '0') {
            $(".stoast").toastText("warning", "Please Enter Nos of Referal Letter Days", 5, 3);
            document.getElementById("ctl00_ContentPlaceHolder1_txtConsDAYs").focus();
            return false;
        }
        if (txtRegFee == '') {
            $(".stoast").toastText("warning", "Please Select Registration Fee", 5, 3);
            document.getElementById("ctl00_ContentPlaceHolder1_txtRegFee").focus();
            return false;
        }
    }
    //Ip Tariff Priority
    if ($('[id$=rbTariffPrio_0]').prop('checked')) {
        if (document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtIPTariff4_txtSearchControl').value == '') {
            $(".stoast").toastText("warning", "Please Select Default Tarrif  for IP", 5, 3);
            document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtIPTariff4_txtSearchControl').style.border = "1px solid #f4785e";
            document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtIPTariff4_txtSearchControl').focus();
            return false;
        }
        else
            document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtIPTariff4_txtSearchControl').style.border = "1px solid #bebebe";
    }

    // Op Tariff Priority
    if ($('[id$=rbTariffPrio_1]').prop('checked')) {
        if (document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtOP_tarif1_txtSearchControl').value == '') {
            $(".stoast").toastText("warning", "Please select Default Tariff for OP", 5, 3);
            document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtOP_tarif1_txtSearchControl').style.border = "1px solid #f4785e";
            document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtOP_tarif1_txtSearchControl').focus();
            return false;
        }
        else
            document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtOP_tarif4_txtSearchControl').style.border = "1px solid #bebebe"
    }

    // Both
    if ($('[id$=rbTariffPrio_2]').prop('checked')) {
        if (document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtIPTariff4_txtSearchControl').value == '') {
            $(".stoast").toastText("warning", "Please Select Default Tarrif  for IP", 5, 3);
            document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtIPTariff4_txtSearchControl').style.border = "1px solid #f4785e";
            document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtIPTariff4_txtSearchControl').focus();
            return false;
        }
        else
            document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtIPTariff4_txtSearchControl').style.border = "1px solid #bebebe";

        if (document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtOP_tarif4').value == '') {
            $(".stoast").toastText("warning", "Please select Default Tariff for OP", 5, 3);
            document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtOP_tarif4').style.border = "1px solid #f4785e";
            document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtOP_tarif4').focus();
            return false;
        }
        else
            document.getElementById('ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtOP_tarif4').style.border = "1px solid #bebebe"
    }
    var Object = 'ctl00_ContentPlaceHolder1_hdnSaveAlert';
    ConfirmationRequiredForSave(Object);
    return false;

}
function OnsuccesssaveConfirmation() {
    SaveServiceType();
    saveservicegroup();
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
    window.location.replace('AllCompanyList.aspx');
}
function saveservicegroup() {
    var CompanyId = getParameterByName('TariffEdit');
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
        CMP_SRV_TYPE_ID = CMP_SRV_TYPE_ID;
        SERVICE_TYPE_REV_NO = SERVICE_TYPE_REV_NO;
        SERVICE_TYPE_ID = SERVICE_TYPE_ID;
        SERVICE_TYPE_NAME = typeof SERVICE_TYPE_NAME == "string" ? (SERVICE_TYPE_NAME.trim() == "" ? "" : SERVICE_TYPE_NAME) : (typeof SERVICE_TYPE_NAME == "number" ? SERVICE_TYPE_NAME : "");
        COMPANY_SERVICE_TYPE_PRIORITY1 = typeof COMPANY_SERVICE_TYPE_PRIORITY1 == "string" ? (COMPANY_SERVICE_TYPE_PRIORITY1.trim() == "0" ? "0" : COMPANY_SERVICE_TYPE_PRIORITY1) : (typeof COMPANY_SERVICE_TYPE_PRIORITY1 == "number" ? COMPANY_SERVICE_TYPE_PRIORITY1 : "0");
        COMPANY_SERVICE_TYPE_PRIORITY2 = typeof COMPANY_SERVICE_TYPE_PRIORITY2 == "string" ? (COMPANY_SERVICE_TYPE_PRIORITY2.trim() == "0" ? "0" : COMPANY_SERVICE_TYPE_PRIORITY2) : (typeof COMPANY_SERVICE_TYPE_PRIORITY2 == "number" ? COMPANY_SERVICE_TYPE_PRIORITY2 : "0");
        COMPANY_SERVICE_TYPE_PRIORITY3 = typeof COMPANY_SERVICE_TYPE_PRIORITY3 == "string" ? (COMPANY_SERVICE_TYPE_PRIORITY3.trim() == "0" ? "0" : COMPANY_SERVICE_TYPE_PRIORITY3) : (typeof COMPANY_SERVICE_TYPE_PRIORITY2 == "number" ? COMPANY_SERVICE_TYPE_PRIORITY3 : "0");
        COMPANY_SERVICE_TYPE_DEFAULT = typeof COMPANY_SERVICE_TYPE_DEFAULT == "string" ? (COMPANY_SERVICE_TYPE_DEFAULT.trim() == "" ? "" : COMPANY_SERVICE_TYPE_DEFAULT) : (typeof COMPANY_SERVICE_TYPE_DEFAULT == "number" ? COMPANY_SERVICE_TYPE_DEFAULT : "");
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
    var CompanyId = getParameterByName('TariffEdit');
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
        CMP_SRV_TYPE_ID = CMP_SRV_TYPE_ID;
        SERVICE_TYPE_REV_NO = SERVICE_TYPE_REV_NO;
        SERVICE_TYPE_ID = SERVICE_TYPE_ID;
        SERVICE_TYPE_NAME = typeof SERVICE_TYPE_NAME == "string" ? (SERVICE_TYPE_NAME.trim() == "" ? "" : SERVICE_TYPE_NAME) : (typeof SERVICE_TYPE_NAME == "number" ? SERVICE_TYPE_NAME : "");
        COMPANY_SERVICE_TYPE_PRIORITY1 = typeof COMPANY_SERVICE_TYPE_PRIORITY1 == "string" ? (COMPANY_SERVICE_TYPE_PRIORITY1.trim() == "0" ? "0" : COMPANY_SERVICE_TYPE_PRIORITY1) : (typeof COMPANY_SERVICE_TYPE_PRIORITY1 == "number" ? COMPANY_SERVICE_TYPE_PRIORITY1 : "0");
        COMPANY_SERVICE_TYPE_PRIORITY2 = typeof COMPANY_SERVICE_TYPE_PRIORITY2 == "string" ? (COMPANY_SERVICE_TYPE_PRIORITY2.trim() == "0" ? "0" : COMPANY_SERVICE_TYPE_PRIORITY2) : (typeof COMPANY_SERVICE_TYPE_PRIORITY2 == "number" ? COMPANY_SERVICE_TYPE_PRIORITY2 : "0");
        COMPANY_SERVICE_TYPE_PRIORITY3 = typeof COMPANY_SERVICE_TYPE_PRIORITY3 == "string" ? (COMPANY_SERVICE_TYPE_PRIORITY3.trim() == "0" ? "0" : COMPANY_SERVICE_TYPE_PRIORITY3) : (typeof COMPANY_SERVICE_TYPE_PRIORITY2 == "number" ? COMPANY_SERVICE_TYPE_PRIORITY3 : "0");
        COMPANY_SERVICE_TYPE_DEFAULT = typeof COMPANY_SERVICE_TYPE_DEFAULT == "string" ? (COMPANY_SERVICE_TYPE_DEFAULT.trim() == "" ? "" : COMPANY_SERVICE_TYPE_DEFAULT) : (typeof COMPANY_SERVICE_TYPE_DEFAULT == "number" ? COMPANY_SERVICE_TYPE_DEFAULT : "");
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
        _child += "/>";
    });

    _child += "</root>";
    document.getElementById('ctl00_ContentPlaceHolder1_HdnGridXmlData').value = _child;
}
var _controls = null;
var _chkValidation = true;
/*function pageLoad() {
document.getElementById('ctl00_ContentPlaceHolder1_ucCompanyCode_txtSearchControl').disabled=true;
document.getElementById('ctl00_ContentPlaceHolder1_ucCompanyCode_imgbtnSearch').disabled=true;
document.getElementById('ctl00_ContentPlaceHolder1_txtCmpName').disabled=true;
OnPageValidation();
GetRadioButtonValue();
document.getElementById('ctl00_ContentPlaceHolder1_uPnl').className = 'UpDt';
}*/
function OnPageValidation() {
    var ClientName = $('#ctl00_ContentPlaceHolder1_hdnClientName').val();
    _chkValidation = true;
    _controls = new Array();
    _controls[0] = 'ctl00_ContentPlaceHolder1_ucCompanyCode_txtSearchControl';
    _controls[1] = 'ctl00_ContentPlaceHolder1_txtContractNo';
    _controls[2] = 'ctl00_ContentPlaceHolder1_txtStDt';
    _controls[3] = 'ctl00_ContentPlaceHolder1_txtEfectFrom';
    _controls[4] = 'ctl00_ContentPlaceHolder1_txtEfectTo';
    _controls[5] = 'ctl00_ContentPlaceHolder1_txtContactPerson';
    _controls[6] = 'ctl00_ContentPlaceHolder1_txtAuthorizedperson';

    var b = document.getElementById('ctl00_ContentPlaceHolder1_hdnShowIPoptions').value;
    if (b == 'True') {
        _controls[7] = 'ctl00_ContentPlaceHolder1_txtRegFee';
    }
    if ($('[id$=rbTariffPrio_0]').prop('checked')) {
        _controls[8] = 'ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtIPTariff4_txtSearchControl';
    }
    else
        if ($('[id$=rbTariffPrio_1]').prop('checked')) {
            _controls[8] = 'ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtOPTariff4_txtSearchControl';
        }
        else
            if ($('[id$=rbTariffPrio_1]').prop('checked')) {
                _controls[8] = 'ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtIPTariff4_txtSearchControl';
                _controls[9] = 'ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtOPTariff4_txtSearchControl';
            }

    _controls[12] = 'ctl00_ContentPlaceHolder1_txtConsNOs';
    _controls[13] = 'ctl00_ContentPlaceHolder1_txtConsDAYs';
    _controls[14] = 'ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_ucTariffDefault_ucTarriff_txtSearchControl';
    _controls[15] = 'ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_GenericGrid4_ucTarriff_txtSearchControl';
    // _controls[16] = 'ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtTarifDis4_IP';

    _controls[16] = 'ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_TariffUserControl4_ucTarriff_txtSearchControl';
    // _controls[18] = 'ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtTarifDis4_IPOP';

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
function ClearServiceTypeGrid() {
    $("table[id$=gvServicesType] tr:has(td)").each(function () {
        $(this).closest('tr').find('input[type=text]').val('0');
    });

}
function cleartxtbox() {
    $('#ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtTarifDis1_IP').val('0');
    $('#ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtTarifDis2_IP').val('0');
    $('#ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtTarifDis3_IP').val('0');
    $('#ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtTarifDis4_IP').val('0');
}

function chkprice(obj) {
    if (parseFloat($(obj).val()) != "0") {
        ClearServiceTypeGrid();
    }
    else if (parseFloat($('#ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtTarifDis1_IP').val()) != "0") {
        ClearServiceTypeGrid();
    }
    else if (parseFloat($('#ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtTarifDis2_IP').val()) != "0") {
        ClearServiceTypeGrid();
    }
    else if (parseFloat($('#ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtTarifDis3_IP').val()) != "0") {
        ClearServiceTypeGrid();
    }
    else if (parseFloat($('#ctl00_ContentPlaceHolder1_TabContainer1_TabPanel2_txtTarifDis4_IP').val()) != "0") {
        ClearServiceTypeGrid();
    }
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
        if (hdnsrvtypeid == '1' || hdnsrvtypeid == '4' || hdnsrvtypeid == '12')//consultations,Miscellaneous,Pharmacy
        {
            $(this).closest('tr').find('[id*=txtpririty1]')[0].disabled = true;
            $(this).closest('tr').find('[id*=txtpririty2]')[0].disabled = true;
            $(this).closest('tr').find('[id*=txtpririty3]')[0].disabled = true;
        }
        if ($('#ctl00_ContentPlaceHolder1_rbTariffPrio_1')[0].checked || $('#ctl00_ContentPlaceHolder1_rbTariffPrio_3')[0].checked || $('#ctl00_ContentPlaceHolder1_rbTariffPrio_4')[0].checked) {
            $(this).closest('tr').find('[id*=txtpririty1]')[0].disabled = true;
            $(this).closest('tr').find('[id*=txtpririty2]')[0].disabled = true;
            $(this).closest('tr').find('[id*=txtpririty3]')[0].disabled = true;
            $(this).closest('tr').find('[id*=txtpririty4]')[0].disabled = true;
        }
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


