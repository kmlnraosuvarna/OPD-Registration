/*On Consultent Or Order Physician Selection */
var ctrlcom = 'ctl00_ContentPlaceHolder1';
function OnOrderPhysicianSelection(data) {

    if (data.RESULT != undefined) { /* Auto Completion */
        $('#'+ ctrlcom + '_UcOdrPsyn_txtSearchControl').val(data._lktext);
        $('#'+ ctrlcom + '_UcOdrPsyn__hiddenText').val(data._lktext);
        $('#'+ ctrlcom + '_UcOdrPsyn__hiddenID').val(data.ID);
    }
    else { /* Lookup Selection */
        $('#'+ ctrlcom + '_UcOdrPsyn_txtSearchControl').val(data._lktext + '-' + data.DEPARTMENT_DESC);
        $('#'+ ctrlcom + '_UcOdrPsyn__hiddenText').val(data._lktext);
        $('#'+ ctrlcom + '_UcOdrPsyn__hiddenID').val(data.ID);
    }
    if (document.getElementById('' + ctrlcom + '_UcOdrPsyn_txtSearchControl').value != '') {
        $('#'+ ctrlcom + '_UcOdrPsyn_txtSearchControl').removeClass('red');
    }
    return false;
}
/* Clearing Indents And Order Investigations */
function ClearingOrderInvestigations() {
    // $("table[id$=tbl_PatRequisitions]").each(function (i, j) { $(this).remove(); });
    $('#'+ ctrlcom + '_UcOdrPsyn_txtSearchControl').val('');
    $('#'+ ctrlcom + '_UcOdrPsyn__hiddenID').val('0');
    $('#'+ ctrlcom + '_UcOdrPsyn__hiddenText').val('');
    var gridID = document.getElementById('' + ctrlcom + '_gv_Ind_Services');
    $("table[id$=gv_Ind_Services] tr:has(td)").each(function () {
        var rowIndex = gridID.rows.length;
        var checkRowIndex = rowIndex - 1;
        if (checkRowIndex != 1) {
            $('[id$=gv_Ind_Services] tr').filter(':eq(' + checkRowIndex + ')').remove();
        }
        if (checkRowIndex == 1) {
            document.getElementById('' + ctrlcom + '_gv_Ind_Services_ctl02_lblOrdId').innerHTML = '';
            document.getElementById('' + ctrlcom + '_gv_Ind_Services_ctl02_lblOrddt').innerHTML = '';
            // document.getElementById('' + ctrlcom + '_gv_Ind_Services_ctl02_lblpatname').innerHTML = '';
            document.getElementById('' + ctrlcom + '_gv_Ind_Services_ctl02_lblordtyp').innerHTML = '';
            document.getElementById('' + ctrlcom + '_gv_Ind_Services_ctl02_lbldocname').innerHTML = '';
            document.getElementById('' + ctrlcom + '_gv_Ind_Services_ctl02_lblvisDt').innerHTML = '';
            document.getElementById('' + ctrlcom + '_gv_Ind_Services_ctl02_hdn_Ind_pat_id').value = '0';
            document.getElementById('' + ctrlcom + '_gv_Ind_Services_ctl02_hdn_ind_doc_id').value = '0';
            document.getElementById('' + ctrlcom + '_gv_Ind_Services_ctl02_hdn_ind_Umr_no').value = '';

        }

    });
}
/* Requesions Binding In Umr Patient Selection */
function BindBillingRequisitions() {
    onExtendedDisplayValues();


    var PatientID = document.getElementById('' + ctrlcom + '_umrPatientDetails_hdnPatientid').value;
    var umrno = document.getElementById('' + ctrlcom + '_umrPatientDetails_Umrlookup_txtSearchControl').value;
    var fromdate = 'NULL';
    var todate = 'NULL';
    var consultID = '0';
    var cName = ''; var pText = '';
    GetAsync(
        "GridService.asmx/GetIndentsServices",
    { Consultant_ID: consultID, Patient_ID: PatientID, _fDt: fromdate, _tDt: todate, _cName: cName, _pText: pText, _advSrch: '' },
    function (data) {

        if (data.d != null) {
            assignindentsGrid(data.d);
        }
    },
    function (jqXHR, textStatus, errorThrown) {
    });
}
function assignindentsGrid(data) {
    var hdnDateFormat = document.getElementById('' + ctrlcom + '_headerControl1_hdnDateFormat').value;
    if (hdnDateFormat == "" || hdnDateFormat == undefined || hdnDateFormat == null) { hdnDateFormat = "dd-MMM-yyyy"; }
    if (data != null) {
        if (data.length == '0') {
            return false;
        }
        else {
            var gridService = document.getElementById('' + ctrlcom + '_gv_Ind_Services');
            var grid_length = gridService.rows.length;
            for (var i = 0; i < data.length; i++) {
                /*for company policy date format */

                var createstformat = data[i].CREATE_DT;
                if (createstformat != undefined && createstformat != null && createstformat != "" && createstformat != "null")
                    if (hdnDateFormat == "dd-MMM-yyyy HH:MM:ss tt") {
                        createstformat = new Date(createstformat).format(hdnDateFormat);
                    }
                    else {
                        if (data[0].ORDERTYPE.trim() == 'Daignostic Service') {
                            createstformat = new Date(createstformat).format("dd-MMM-yyyy HH:MM:ss tt");
                        }
                        else {
                            createstformat = new Date(createstformat).format(hdnDateFormat);
                        }
                    }
                var orderdtformat = data[i].ORDER_DT;
                if (orderdtformat != undefined && orderdtformat != null && orderdtformat != "" && orderdtformat != "null")
                    if (hdnDateFormat == "dd-MMM-yyyy HH:MM:ss tt") {
                        orderdtformat = new Date(orderdtformat).format(hdnDateFormat);
                    }
                    else {
                        if (data[0].ORDERTYPE.trim() == 'Daignostic Service') {
                            orderdtformat = new Date(orderdtformat).format("dd-MMM-yyyy HH:MM:ss tt");
                        }
                        else {
                            orderdtformat = new Date(orderdtformat).format(hdnDateFormat);
                        }
                    }
                if (i == 0) {
                    document.getElementById('' + ctrlcom + '_gv_Ind_Services_ctl02_lblOrdId').innerHTML = data[0].ORDER_ID;
                    document.getElementById('' + ctrlcom + '_gv_Ind_Services_ctl02_lblOrddt').innerHTML = orderdtformat;
                    //document.getElementById('' + ctrlcom + '_gv_Ind_Services_ctl02_lblpatname').innerHTML = data[0].PATIENT_NAME;
                    document.getElementById('' + ctrlcom + '_gv_Ind_Services_ctl02_lblordtyp').innerHTML = data[0].ORDERTYPE;
                    document.getElementById('' + ctrlcom + '_gv_Ind_Services_ctl02_lbldocname').innerHTML = data[0].DOCTOR_NAME;

                    document.getElementById('' + ctrlcom + '_gv_Ind_Services_ctl02_lblvisDt').innerHTML = createstformat;
                    document.getElementById('' + ctrlcom + '_gv_Ind_Services_ctl02_lblBookedMode').innerHTML = data[0].BOOKING_MODE;
                    document.getElementById('' + ctrlcom + '_gv_Ind_Services_ctl02_hdn_Ind_pat_id').value = data[0].PATIENT_ID;
                    document.getElementById('' + ctrlcom + '_gv_Ind_Services_ctl02_hdn_ind_doc_id').value = data[0].DOCTOR_ID;
                    document.getElementById('' + ctrlcom + '_gv_Ind_Services_ctl02_hdn_ind_Umr_no').value = data[0].UMR_NO;
                    document.getElementById('' + ctrlcom + '_gv_Ind_Services_ctl02_lblcreateby').value = data[0].CREATE_BY_NAME;
                }
                else {
                    var sno = i + 1;

                    fn_Add_Ind_Grid_Row(data[i].ORDER_ID, orderdtformat, data[i].PATIENT_NAME, data[i].ORDERTYPE, data[i].DOCTOR_NAME, createstformat, data[i].PATIENT_ID, data[i].DOCTOR_ID, data[i].UMR_NO, data[i].BOOKING_MODE, data[i].CREATE_BY_NAME);
                }
            }
        }
    }
}
var index = 0;
var rowColor = 0;
function fn_Add_Ind_Grid_Row(ord_id, ord_dt, pat_name, ord_type, doc_name, vis_dt, pat_id, doc_id, umr_no, booked_mode, create_by_name) {

    var gvServices = document.getElementById('' + ctrlcom + '_gv_Ind_Services');
    var rowIndex = gvServices.rows.length;
    var checkRowIndex = rowIndex - 1;
    var gridindex = 1;
    var newRow = gvServices.insertRow(rowIndex);
    if (rowColor == 0) {
        newRow.className = 'gridAlternaterow'
        rowColor++;
    }
    else {
        newRow.className = 'gridrow'
        rowColor = 0;
    }

    newCell = newRow.insertCell(0);
    var cbindent = document.createElement('input'); cbindent.type = 'checkbox'; cbindent.id = 'cbindent' + index;
    cbindent.onclick = function () { CheckIndChk(this); };
    if (document.getElementById('' + ctrlcom + '_hdnView').value == 'VIEW_OP') {
        cbindent.disabled = true;
    }
    else {
        cbindent.disabled = false;
    }
    newCell.appendChild(cbindent);

    newCell = newRow.insertCell(1);
    var lblOrdId = document.createElement('label'); lblOrdId.id = 'lblOrdId' + index; lblOrdId.innerHTML = ord_id;
    newCell.appendChild(lblOrdId);

    newCell = newRow.insertCell(2);
    var lblOrddt = document.createElement('label'); lblOrddt.id = 'lblOrddt' + index; lblOrddt.innerHTML = ord_dt;
    newCell.appendChild(lblOrddt);

    /*  newCell = newRow.insertCell(3);
    var lblpatname = document.createElement('label'); lblpatname.id = 'lblpatname' + index; lblpatname.innerHTML = pat_name;
    newCell.appendChild(lblpatname); */

    newCell = newRow.insertCell(3);
    var lblordtyp = document.createElement('label'); lblordtyp.id = 'lblordtyp' + index; lblordtyp.innerHTML = ord_type;
    newCell.appendChild(lblordtyp);

    newCell = newRow.insertCell(4);
    var lbldocname = document.createElement('label'); lbldocname.id = 'lbldocname' + index; lbldocname.innerHTML = doc_name;
    newCell.appendChild(lbldocname);

    newCell = newRow.insertCell(5);
    var lblvisDt = document.createElement('label'); lblvisDt.id = 'lblvisDt' + index; lblvisDt.innerHTML = vis_dt;
    newCell.appendChild(lblvisDt);

    newCell = newRow.insertCell(6);
    var lblcreateby = document.createElement('label'); lblcreateby.id = 'lblcreateby' + index; lblcreateby.innerHTML = create_by_name;
    newCell.appendChild(lblcreateby);

    newCell = newRow.insertCell(7);
    var lblBookedMode = document.createElement('label'); lblBookedMode.id = 'lblBookedMode' + index; lblBookedMode.innerHTML = booked_mode;
    newCell.appendChild(lblBookedMode);

    var hdn_Ind_pat_id = document.createElement('input'); hdn_Ind_pat_id.type = 'hidden'; hdn_Ind_pat_id.id = 'hdn_Ind_pat_id' + index; hdn_Ind_pat_id.value = pat_id;
    newCell.appendChild(hdn_Ind_pat_id);

    var hdn_ind_doc_id = document.createElement('input'); hdn_ind_doc_id.type = 'hidden'; hdn_ind_doc_id.id = 'hdn_ind_doc_id' + index; hdn_ind_doc_id.value = doc_id;
    newCell.appendChild(hdn_ind_doc_id);

    var hdn_ind_Umr_no = document.createElement('input'); hdn_ind_Umr_no.type = 'hidden'; hdn_ind_Umr_no.id = 'hdn_ind_Umr_no' + index; hdn_ind_Umr_no.value = umr_no;
    newCell.appendChild(hdn_ind_Umr_no);

    index++;

}
function OnsuccesssaveConfirmationwithParam_message_services_array_lat(param) {

    for (var i = 0; i < param.length - 1; i++) {

        var gridid = document.getElementById('' + ctrlcom + '_UCServices_gvServices');
        var l = gridid.rows.length - 1;
        var sno = l + 1;
        var order_ID = param[param.length - 1]
        fn_AddFilterRow_pkgbillSelection('I', param[i].IS_FOREIGN_SERVICE, param[i].CONCERN_FORM_REQ, param[i].IS_CLINICAL_HIST_REQ, param[i].HISTORY_TYPE, param[i].IS_POST, sno, param[i].VALUE, param[i].TEXT, param[i].Service_cd, param[i].Service_group, param[i].Price, param[i].CONCESSION, param[i].Price, param[i].SPECIMEN_NAME, param[i].DOSAGE_QTY, param[i].VACCUTAINER_NAME, param[i].Service_Class_Id, param[i].Service_group_id, param[i].Service_type_id, param[i].DOCTOR_ID, param[i].Tariff_Id, param[i].IS_CLINICAL_HIST_REQ, param[i].IS_FOREIGN_SERVICE, param[i].REPORT_DISPATCH_TIME, param[i].SPECIMEN_NAME, param[i].SPECIMEN_ID, param[i].HISTORY_TYPE, param[i].PKG_SRV_IDS, param[i].HISTORY_TYPE_ID, param[i].EMERGENCY_PRICE, param[i].MIN_PRICE, param[i].MAX_PRICE, param[i].NO_NEED_SRV, param[i].CONCERN_FORM_REQ, param[i].PRIV_SRV_POSTED_DT, param[i].NO_NEED_DAYS, param[i].QYT_EDIT, param[i].RATE_EDIT, param[i].START_DT, param[i].END_DT, param[i].Department_id, param[i].SRV_GENDER_ID, order_ID, param[i].ORDER_DET_ID, param[i].FROM_DAYS, param[i].TO_DAYS, 0, 0, 0, 0, 0, 0, param[i].EQUI_SERVICE_NAME, param[i].EQUI_SERVICE_CD, 'N', param[i].IS_ADDITIONAL, param[i].DISCOUNT_PERCENT);
    }
    return false;
}
function OnCancelConfirmation_services_array_lat()
{ return false; }
var order_ID = '';
function CheckIndChk(ev) {
    var form_name = $('#' + ctrlcom + '_UCServices_hdnSrvFormName').val();
    if (form_name == 'OP' || form_name == 'Cons') {
        var umr_no = $('#' + ctrlcom + '_umrPatientDetails_Umrlookup_txtSearchControl').val();
        if (umr_no == '') {
            $(".stoast").toastText("warning", "Please select UMR#!.", 5, 3);
            return false;
        }

        if ($('#' + ctrlcom + '_uccorporate_ddlPaymentBy').val() == '0' || $('#' + ctrlcom + '_uccorporate_ddlPaymentBy').val() == '' || $('#' + ctrlcom + '_uccorporate_ddlPaymentBy').val() == null) {
            $('#' + ctrlcom + '_uccorporate_ddlPaymentBy').addClass('red');
            $(".stoast").toastText("warning", "Please Select Payment Type", 5, 3);
            return false;
        }
        if ($('#' + ctrlcom + '_uccorporate_ddlPaymentBy').val() == '2') {
            if ($('#' + ctrlcom + '_uccorporate_CmpLookup_txtSearchControl').val() == '') {
                $(".stoast").toastText("warning", "Please Select Company/TPA", 5, 3);
                return false;
            }
        }
    }
    if (form_name == 'OPQUICK') {
        if (document.getElementById('' + ctrlcom + '_chk_old').checked == true) {
            var umr_no = $('#' + ctrlcom + '_umrPatientDetails_Umrlookup_txtSearchControl').val();
            if (umr_no == '') {
                $(".stoast").toastText("warning", "Please select UMR#!.", 5, 3);
                return false;
            }
            if ($('#' + ctrlcom + '_uccorporate_ddlPaymentBy').val() == '0' || $('#' + ctrlcom + '_uccorporate_ddlPaymentBy').val() == '' || $('#' + ctrlcom + '_uccorporate_ddlPaymentBy').val() == null) {
                $(".stoast").toastText("warning", "Please Select Payment Type", 5, 3);
                $('#' + ctrlcom + '_uccorporate_ddlPaymentBy').addClass('red');
                return false;
            }
            if ($('#' + ctrlcom + '_uccorporate_ddlPaymentBy').val() == '2') {
                if ($('#' + ctrlcom + '_uccorporate_CmpLookup_txtSearchControl').val() == '') {
                    $(".stoast").toastText("warning", "Please Select Company/TPA", 5, 3);
                    return false;
                }
            }
        }
        else {
            var pat_type = $('#' + ctrlcom + '_ddlPatientType').val();
            if (pat_type == 2 || pat_type == 5 || pat_type == 7 || pat_type == 10) {
                if ($('#' + ctrlcom + '_EmployerInfo1_uctpa_txtSearchControl').val() == '') {
                    $(".stoast").toastText("warning", "Please Select Company/TPA", 5, 3);
                    return false;
                }

            }

        }
    }

    var hdnallowtariffslcn = $('[id*=hdnallowtariffslcn]').val().toLowerCase();
    if (hdnallowtariffslcn == 'true') {

        var pat_type = '';
        if (form_name == 'OP' || form_name == 'Cons') {
            pat_type = document.getElementById('' + ctrlcom + '_uccorporate_ddlPaymentBy').value;
        }
        else if (form_name == 'OPQUICK') {
            if (document.getElementById('' + ctrlcom + '_chk_old').checked == true) {
                pat_type = document.getElementById('' + ctrlcom + '_uccorporate_ddlPaymentBy').value;
            }
            else {
                pat_type = document.getElementById('' + ctrlcom + '_ddlPatientType').value;
            }
        }
        if (pat_type == 1) {
            var PatientCategory = document.getElementById('' + ctrlcom + '_UCServices_ddlpatcat').value;
            if (PatientCategory == undefined || PatientCategory == null || PatientCategory == '' || PatientCategory == '--select--' || PatientCategory == '0') {
                $(".stoast").toastText("warning", "Please Select Patient Category", 5, 3);
                return false;

            }
            var taiff_id = document.getElementById('' + ctrlcom + '_UCServices_ddltariff').value;
            if (taiff_id == undefined || taiff_id == null || taiff_id == '' || taiff_id == '--select--' || taiff_id == '0') {
                $(".stoast").toastText("warning", "Please Select Tariff", 5, 3);
                $(".stoast").toastText("warning", "Sorry  No Tariff Mapped To This Patient Category", 5, 2);
                return false;
            }
        }
    }


    CurrentRowIndex = typeof (ev.parentElement.parentElement.rowIndex) == 'number' ? ev.parentElement.parentElement.rowIndex : 0;
    CurrentRowIndex = CurrentRowIndex == undefined ? 0 : CurrentRowIndex;
    var patientID = $('[id$=gv_Ind_Services] tr').filter(':eq(' + CurrentRowIndex + ')').find('input[type=hidden][id*=hdn_Ind_pat_id]').val();
    var doc_id = $('[id$=gv_Ind_Services] tr').filter(':eq(' + CurrentRowIndex + ')').find('input[type=hidden][id*=hdn_ind_doc_id]').val();
    order_ID = $('[id$=gv_Ind_Services] tr').filter(':eq(' + CurrentRowIndex + ')').find('[id*=lblOrdId]').text();
    var order_type = $('[id$=gv_Ind_Services] tr').filter(':eq(' + CurrentRowIndex + ')').find('[id*=lblordtyp]').text();
//    document.getElementById('' + ctrlcom + '_hdnordertype').value = order_type;
    var flag = "ORD";
    if (order_type.trim() == 'HEALTH CHECKUP' || order_type.trim() == 'Daignostic Service') {
        flag = "HC";
    }
    var Doc_name = $('[id$=gv_Ind_Services] tr').filter(':eq(' + CurrentRowIndex + ')').find('[id*=lbldocname]').text();
    var session = document.getElementById('' + ctrlcom + '_hdnSession_id').value;
    var loc_id = 1; var ind_test = 0;
    // var cmp_id = document.getElementById('' + ctrlcom + '_uccorporate_CmpLookup__hiddenID').value;
    // if (cmp_id == undefined || cmp_id == null || cmp_id == '') {
    // cmp_id = 0;
    //}

    $("table[id*=gvServices] tr:has(td)").each(function (e) {
        var hdn_ord_id = $(this).closest("tr").find("input[type=hidden][id*=hdn_ord_id]").val();
        var hdn_ind_doc_id = $(this).closest("tr").find("input[type=hidden][id*=hdn_ind_doc_id]").val();
        if (hdn_ord_id > 0 && hdn_ind_doc_id > 0 && doc_id != hdn_ind_doc_id) {
            ind_test = 1;
        }
    });
    if (ind_test == 1) {
        $('[id$=gv_Ind_Services] tr').filter(':eq(' + CurrentRowIndex + ')').find('input[type=checkbox]').prop('checked', false);
        $(".stoast").toastText("Warning", "This indent ordered by different physician!", 5, 3);
        return false;
    }
    else {
        if (ev.checked == true) {
            if (order_type.trim() == 'HEALTH CHECKUP' || order_type.trim() == 'Daignostic Service') {
                $('#' + ctrlcom + '_hdnhckpkg').val('Y');
            }
            else {
                $('#' + ctrlcom + '_hdnhckpkg').val('N');
            }
            if (parseInt(patientID) > 0) {
                var CurrentRowIndex = 0;
                if (Doc_name != '') {
                    if (Doc_name != '' && Doc_name != undefined && Doc_name != null) {
                        document.getElementById('' + ctrlcom + '_UcOdrPsyn_txtSearchControl').value = Doc_name;
                        document.getElementById('' + ctrlcom + '_UcOdrPsyn__hiddenID').value = doc_id;
                        document.getElementById('' + ctrlcom + '_UcOdrPsyn__hiddenText').value = Doc_name;
                    }
                }

                var typeid = '1';
                if (typeid == '' || typeid == null || typeid == undefined)
                    typeid = '1';
                var hdnallowtariffslcn = $('[id*=hdnallowtariffslcn]').val().toLowerCase();
                var PAT_CATEGORY_ID = $('#' + ctrlcom + '_UCServices_ddlpatcat').val();
                if (PAT_CATEGORY_ID == undefined || PAT_CATEGORY_ID == null || PAT_CATEGORY_ID == '' || PAT_CATEGORY_ID == '--select--') { PAT_CATEGORY_ID = 0; }
                var pat_tariff_id = $('#' + ctrlcom + '_UCServices_ddltariff').val();
                if (pat_tariff_id == undefined || pat_tariff_id == null || pat_tariff_id == '' || pat_tariff_id == '--select--') { pat_tariff_id = 0; }
                var pat_type = $('#' + ctrlcom + '_uccorporate_ddlPaymentBy').val();
                if (pat_type == undefined || pat_type == null || pat_type == '' || pat_type == '--select--' || pat_type == '0' || pat_type == 0) { pat_type = 1; }
                var cmp_id = 0;
                if (document.getElementById('' + ctrlcom + '_UCServices_hdnSrvFormName').value == 'OP' && (document.getElementById('' + ctrlcom + '_uccorporate_ddlPaymentBy').value == '2' || document.getElementById('' + ctrlcom + '_uccorporate_ddlPaymentBy').value == '5' || document.getElementById('' + ctrlcom + '_uccorporate_ddlPaymentBy').value == '8' || document.getElementById('' + ctrlcom + '_uccorporate_ddlPaymentBy').value == '9' || document.getElementById('' + ctrlcom + '_uccorporate_ddlPaymentBy').value == '10')) {
                    cmp_id = document.getElementById('' + ctrlcom + '_uccorporate_CmpLookup__hiddenID').value;
                    if (document.getElementById('' + ctrlcom + '_uccorporate_ucRefLetterNo__hiddenID') != null || document.getElementById('' + ctrlcom + '_uccorporate_ucRefLetterNo__hiddenID') != undefined) {
                        referal_letter_id = document.getElementById('' + ctrlcom + '_uccorporate_ucRefLetterNo__hiddenID').value;
                    } else {
                        referal_letter_id = 0;
                    }
                }
                else if (document.getElementById('' + ctrlcom + '_UCServices_hdnSrvFormName').value == 'OPQUICK' && (document.getElementById('' + ctrlcom + '_ddlPatientType').value == '2' || document.getElementById('' + ctrlcom + '_ddlPatientType').value == '5' || document.getElementById('' + ctrlcom + '_ddlPatientType').value == '8' || document.getElementById('' + ctrlcom + '_ddlPatientType').value == '9' || document.getElementById('' + ctrlcom + '_ddlPatientType').value == '10')) {
                    var ref_leterID = document.getElementById('' + ctrlcom + '_uccorporate_ucRefLetterNo__hiddenID').value;
                    if (ref_leterID != null && ref_leterID != undefined && ref_leterID != "")
                        referal_letter_id = document.getElementById('' + ctrlcom + '_uccorporate_ucRefLetterNo__hiddenID').value;
                    else
                        referal_letter_id = 0;
                    cmp_id = document.getElementById('' + ctrlcom + '_EmployerInfo1_uctpa__hiddenID').value;
                }
                else if (document.getElementById('' + ctrlcom + '_UCServices_hdnSrvFormName').value == 'Cons' && (document.getElementById('' + ctrlcom + '_uccorporate_ddlPaymentBy').value == '2' || document.getElementById('' + ctrlcom + '_uccorporate_ddlPaymentBy').value == '5' || document.getElementById('' + ctrlcom + '_uccorporate_ddlPaymentBy').value == '8' || document.getElementById('' + ctrlcom + '_uccorporate_ddlPaymentBy').value == '9' || document.getElementById('' + ctrlcom + '_uccorporate_ddlPaymentBy').value == '10')) {
                    if (document.getElementById('' + ctrlcom + '_uccorporate_ucRefLetterNo__hiddenID') != null || document.getElementById('' + ctrlcom + '_uccorporate_ucRefLetterNo__hiddenID') != undefined) {
                        referal_letter_id = document.getElementById('' + ctrlcom + '_uccorporate_ucRefLetterNo__hiddenID').value;
                    } else {
                        referal_letter_id = 0;
                    }
                    //cmp_id = document.getElementById('' + ctrlcom + '_EmployerInfo1_uctpa__hiddenID').value;
                    cmp_id = document.getElementById('' + ctrlcom + '_uccorporate_EmployerInfo1_uctpa__hiddenID').value;
                }
                if (cmp_id == undefined || cmp_id == null || cmp_id == '') { cmp_id = "0"; }
                var tariff_id = 1;
                if (hdnallowtariffslcn == 'true' && parseInt(PAT_CATEGORY_ID) > 0 && parseInt(pat_tariff_id) > 0 && parseInt(pat_type) == 1) {
                    tariff_id = pat_tariff_id;
                }

                tariff_id = tariff_id == undefined ? 1 : tariff_id;
                if (document.getElementById('' + ctrlcom + '_hdnIndOrderId').value == '') {
                    document.getElementById('' + ctrlcom + '_hdnIndOrderId').value = order_ID;
                } else {

                document.getElementById('' + ctrlcom + '_hdnIndOrderId').value = document.getElementById('' + ctrlcom + '_hdnIndOrderId').value + ',' + order_ID;
                }
                GetAsync(
            "GridService.asmx/GetIndentDrugData",
            { patient_id: patientID, order_id: order_ID, Referal_id: doc_id, loc_id: loc_id, cmp_id: cmp_id, flag: flag, PAT_CATEGORY_ID: PAT_CATEGORY_ID, tariff_id: tariff_id },
            function (JData) {

                if (JData.d != null) {

                    var pkg = 'I';
                    var SRV_NAMES = '';
                    var array_ind = [];
                    var j = 0;
                    var is_assign = 'N';
                    for (var i = 0; i < JData.d.length; i++) {
                        var gridid = document.getElementById('' + ctrlcom + '_UCServices_gvServices');
                        var l = gridid.rows.length - 1;
                        var sno = l + 1;

                        if (JData.d[i].IS_POST == 'Y') {
                            array_ind[j] = JData.d[i];

                            if ($.inArray(parseInt(array_ind[j].VALUE), arrServiceIds) == -1) {
                                SRV_NAMES = SRV_NAMES + ',' + JData.d[i].TEXT;
                                is_assign = 'Y';

                            }
                            else {
                                $(".stoast").toastText("warning", "Service '" + array_ind.d[i].TEXT + "' Is already exists.", 5, 3);
                                // return false;
                            }
                            j++;
                        }
                        else {
                            if (JData.d[i].INSTRUCTIONS == '' || JData.d[i].INSTRUCTIONS == null || JData.d[i].INSTRUCTIONS == undefined) { JData.d[i].INSTRUCTIONS = ''; }
                            var rmks = JData.d[i].INSTRUCTIONS;
                            var stat = JData.d[i].STAT;
                            if ($.inArray(parseInt(JData.d[i].VALUE), arrServiceIds) == -1) {
                                if (JData.d[i].Price == "0" && JData.d[i].Service_type_id != '1' && JData.d[i].Service_type_id != '5' && document.getElementById('' + ctrlcom + '_UCServices_hdnallowtestforbill').value.toLowerCase() != 'yes') {
                                    $(".stoast").toastText("Info", "Zero Price Services are not allowing for Billing..!", 5, 3);
                                } else {

                                    fn_AddFilterRow_pkgbillSelection(pkg, JData.d[i].IS_FOREIGN_SERVICE, JData.d[i].CONCERN_FORM_REQ, JData.d[i].IS_CLINICAL_HIST_REQ, JData.d[i].HISTORY_TYPE, JData.d[i].IS_POST, sno, JData.d[i].VALUE, JData.d[i].TEXT, JData.d[i].Service_cd, JData.d[i].Service_group, JData.d[i].Price, JData.d[i].CONCESSION, JData.d[i].Price, JData.d[i].SPECIMEN_NAME, JData.d[i].DOSAGE_QTY, JData.d[i].VACCUTAINER_NAME, JData.d[i].Service_Class_Id, JData.d[i].Service_group_id, JData.d[i].Service_type_id, JData.d[i].DOCTOR_ID, JData.d[i].Tariff_Id, JData.d[i].IS_CLINICAL_HIST_REQ, JData.d[i].IS_FOREIGN_SERVICE, JData.d[i].REPORT_DISPATCH_TIME, JData.d[i].SPECIMEN_NAME, JData.d[i].SPECIMEN_ID, JData.d[i].HISTORY_TYPE, JData.d[i].PKG_SRV_IDS, JData.d[i].HISTORY_TYPE_ID, JData.d[i].EMERGENCY_PRICE, JData.d[i].MIN_PRICE, JData.d[i].MAX_PRICE, JData.d[i].NO_NEED_SRV, JData.d[i].CONCERN_FORM_REQ, JData.d[i].PRIV_SRV_POSTED_DT, JData.d[i].NO_NEED_DAYS, JData.d[i].QYT_EDIT, JData.d[i].RATE_EDIT, JData.d[i].START_DT, JData.d[i].END_DT, JData.d[i].Department_id, JData.d[i].SRV_GENDER_ID, order_ID, JData.d[i].ORDER_DET_ID, JData.d[i].FROM_DAYS, JData.d[i].TO_DAYS, 0, 0, 0, 0, 0, 0, JData.d[i].EQUI_SERVICE_NAME, JData.d[i].EQUI_SERVICE_CD, '', JData.d[i].IS_ADDITIONAL, JData.d[i].DISCOUNT_PERCENT, '', '', '', '', '', '', '', JData.d[i].STATUS, '', '', '', JData.d[i].TAX_PCT, '', '', JData.d[i].SGST_TAX_PCT, JData.d[i].CGST_TAX_PCT, JData.d[i].SAC_CD, JData.d[i].CONC_RULE_PCT, JData.d[i].CONC_RULE_ID, JData.d[i].CONC_RULE_NAME, '0', JData.d[i].DOCTOR_PCT, '0', JData.d[i].ORG_PCT, JData.d[i].SERVICE_PRICE_ID, JData.d[i].CONC_RULE_AUTH_ID, JData.d[i].CONC_RULE_AUTH_NAME, JData.d[i].CMP_DISC_PCNT);
                                    /* Service Group Wise Concession Row Creation Starts*/
                                    var GvRowscount_grp = 0;
                                    var count_grp = 0;
                                    var grid_grp = document.getElementById('tbl_SrvGrp');
                                    var _index_grp = 0;
                                    var _index_grp = grid_grp.rows.length;
                                    var grp_add_cnt = 0;
                                    var first_count = 0;
                                    var srv_grp_pcnt = 0;
                                    var Grop_exist = 'N';
                                    $("table[id$=tbl_SrvGrp] tr:has(td)").each(function (e) {
                                        if (count_grp == 0) {
                                            for (GvRowscount_grp = 0; GvRowscount_grp <= _index_grp; GvRowscount_grp++) {
                                                var srv_grp_nam = $('[id$=tbl_SrvGrp] tr').filter(':eq(' + GvRowscount_grp + ')').find('[id*=lblsrvgrpname]').text();
                                                if (srv_grp_nam == JData.d[i].Service_group) {
                                                    srv_grp_pcnt = $('[id$=tbl_SrvGrp] tr').filter(':eq(' + GvRowscount_grp + ')').find('input[type=text][id*=txtsrvgrppcnt]').val();
                                                    grp_add_cnt++;
                                                    Grop_exist = 'Y';
                                                }
                                            }
                                            count_grp++;
                                            if (grp_add_cnt == 0) {
                                                fn_Add_SrvGrp_Disc(JData.d[i].Service_group, 0);
                                            }
                                        }
                                        first_count++;
                                    });
                                    if (first_count == 0) {
                                        fn_Add_SrvGrp_Disc(JData.d[i].Service_group, 0);
                                    }
                                    /* Service Group Wise Concession Row Creation Ends */
                                    /* Service Type Wise Concession Row Creation Starts */
                                    var GvRowscount_type = 0;
                                    var count_type = 0;
                                    var grid_type = document.getElementById('tbl_srv_type');
                                    var _index_type = 0;
                                    var _index_type = grid_type.rows.length;
                                    var type_add_cnt = 0;
                                    var first_count = 0;
                                    var srv_type_pcnt = 0;
                                    var type_exist = 'N';
                                    $("table[id$=tbl_srv_type] tr:has(td)").each(function (e) {
                                        if (count_type == 0) {
                                            for (GvRowscount_type = 0; GvRowscount_type <= _index_type; GvRowscount_type++) {
                                                var srv_type_nam = $('[id$=tbl_srv_type] tr').filter(':eq(' + GvRowscount_type + ')').find('[id*=lblsrvtypename]').text();
                                                if (srv_type_nam == JData.d[i].Service_type_name) {
                                                    srv_type_pcnt = $('[id$=tbl_srv_type] tr').filter(':eq(' + GvRowscount_type + ')').find('input[type=text][id*=txtsrvTypepcnt]').val();
                                                    type_add_cnt++;
                                                    type_exist = 'Y';
                                                }
                                            }
                                            count_type++;
                                            if (type_add_cnt == 0) {
                                                fn_Add_SrvType_Disc(JData.d[i].Service_type_name, 0);
                                            }
                                        }
                                        first_count++;
                                    });
                                    if (first_count == 0) {
                                        fn_Add_SrvType_Disc(JData.d[i].Service_type_name, 0);
                                    }
                                    /* Service Type wise Concession Ends */
                                }

                              
                                var gridID = document.getElementById('' + ctrlcom + '_UCServices_gvServices');
                                var l = gridID.rows.length - 1;
                                $('[id$=gvServices] tr').filter(':eq(' + l + ')').find('[id*=txtremks]').val(rmks);
                                if (stat == 'Y') {
                                    $('[id$=gvServices] tr').filter(':eq(' + l + ')').find('[id*=chkstat]').attr('checked', true);
                                }
                            }
                            else {
                                $(".stoast").toastText("warning", "Service '" + JData.d[i].TEXT + "' Is already exists.", 5, 3);
                                //  return false;
                            }




                        }
                        $("table[id*=gvServices] tr:has(td)").each(function (e) {
                            var hdn_ord_id = $(this).closest("tr").find("input[type=hidden][id*=hdn_ord_id]").val();
                            if (hdn_ord_id != undefined && hdn_ord_id == order_ID) {
                                $(this).closest("tr").find("input[type=hidden][id*=hdn_ind_doc_id]").val(JData.d[i].Doctor_id);
                            }

                        });

                    }

                    if (is_assign == 'Y') {
                        var param = array_ind;
                        param[param.length] = order_ID;
                        var obj = 'Repeat';
                        ConfirmationRequiredForSaveWithParam_message_services_array_lat(obj, param, 'This Services ' + SRV_NAMES + ' is Already Posted Today. Do You Want To Continue..');

                    }
                }
            },
            function (jqXHR, textStatus, errorThrown) {
            });
            }
            else {
                $(".stoast").toastText("Warning", "Indents Not Available for this patient", 5, 3);
                return false;
            }

        }

        else {


            var GvRowscount = 0;
            var count = 0;
            var grid = document.getElementById('' + ctrlcom + '_UCServices_gvServices');
            var _index = 0;
            var _index = grid.rows.length;
            GvRowscount = _index;
            $("table[id$=UCServices_gvServices] tr:has(td)").each(function (e) {
                for (var i = 0; i < GvRowscount; i++) {
                    var Gv_Ord_Id = $('[id$=gvServices] tr').closest('tr').filter(':eq(' + i + ')').find('input[type=hidden][id*=hdn_ord_id]').val();
                    if (Gv_Ord_Id == order_ID) {
                        var serviceid = $('[id$=gvServices] tr').closest('tr').filter(':eq(' + i + ')').find('input[type=hidden][id*=hdnServiceID]').val();
                        arrServiceIds = $.grep(arrServiceIds, function (value) {
                            return value != serviceid;
                        });
                        $('[id$=UCServices_gvServices] tr').filter(':eq(' + i + ')').remove();
                        CalculateGridAmt(GvRowscount);
                        document.getElementById('' + ctrlcom + '_UcOdrPsyn_txtSearchControl').value = '';
                        document.getElementById('' + ctrlcom + '_UcOdrPsyn__hiddenID').value = '';
                        document.getElementById('' + ctrlcom + '_UcOdrPsyn__hiddenText').value = '';
                        document.getElementById('' + ctrlcom + '_UcOdrPsyn_txtSearchControl').value = document.getElementById('' + ctrlcom + '_umrPatientDetails_lblrefdoc').innerHTML;
                        document.getElementById('' + ctrlcom + '_UcOdrPsyn__hiddenID').value = document.getElementById('' + ctrlcom + '_umrPatientDetails_hdnconsultentdoctorid').value;
                        document.getElementById('' + ctrlcom + '_UcOdrPsyn__hiddenText').value = document.getElementById('' + ctrlcom + '_umrPatientDetails_lblrefdoc').innerHTML;
                    }
                }
                BindDataPatientconsutionrule(0, '');
            });
        }
    }
  
}
function OnSelectIndent(key) {

    var patientID = key.PATIENT_ID;
    document.getElementById('' + ctrlcom + '_hdnIndOrderId').value = key.ORDER_ID;
    var order_ID = key.ORDER_ID;
    var doc_id = key.DOCTOR_ID;
    var loc_id = 1;
    document.getElementById('' + ctrlcom + '_UcOdrPsyn_txtSearchControl').value = key.DOCTOR_NAME;
    document.getElementById('' + ctrlcom + '_UcOdrPsyn__hiddenID').value = key.DOCTOR_ID;
    document.getElementById('' + ctrlcom + '_UcOdrPsyn__hiddenText').value = key.DOCTOR_NAME;
    var typeid = '1';
    if (typeid == '' || typeid == null || typeid == undefined)
        typeid = '1';
    //  EzHms.Services.ReceiptWebService.GetIndentDrugData(patientID, order_ID, doc_id, loc_id, OnIndentSucess, OnIndentFailure);
    GetAsync(
    "GridService.asmx/GetIndentDrugData",
    { patient_id: patientID, order_id: order_ID, Referal_id: doc_id, loc_id: loc_id },
    function (JData) {

        if (JData.d != null) {

            var pkg = 'I';
            for (var i = 0; i < JData.d.length; i++) {
                var sno = i + 1;
                fn_AddFilterRow_pkgbillSelection(pkg, JData.d[i].IS_FOREIGN_SERVICE, JData.d[i].CONCERN_FORM_REQ, JData.d[i].IS_CLINICAL_HIST_REQ, JData.d[i].HISTORY_TYPE, JData.d[i].IS_POST, sno, JData.d[i].VALUE, JData.d[i].TEXT, JData.d[i].Service_cd, JData.d[i].Service_group, JData.d[i].Price, JData.d[i].CONCESSION, JData.d[i].Price, JData.d[i].SPECIMEN_NAME, JData.d[i].DOSAGE_QTY, JData.d[i].VACCUTAINER_NAME, JData.d[i].Service_Class_Id, JData.d[i].Service_group_id, JData.d[i].Service_type_id, JData.d[i].DOCTOR_ID, JData.d[i].Tariff_Id, JData.d[i].IS_CLINICAL_HIST_REQ, JData.d[i].IS_FOREIGN_SERVICE, JData.d[i].REPORT_DISPATCH_TIME, JData.d[i].SPECIMEN_NAME, JData.d[i].SPECIMEN_ID, JData.d[i].HISTORY_TYPE, JData.d[i].PKG_SRV_IDS, JData.d[i].HISTORY_TYPE_ID, JData.d[i].EMERGENCY_PRICE, JData.d[i].MIN_PRICE, JData.d[i].MAX_PRICE, JData.d[i].NO_NEED_SRV, JData.d[i].CONCERN_FORM_REQ, JData.d[i].PRIV_SRV_POSTED_DT, JData.d[i].NO_NEED_DAYS, JData.d[i].QYT_EDIT, JData.d[i].RATE_EDIT, JData.d[i].START_DT, JData.d[i].END_DT, JData.d[i].Department_id, JData.d[i].SRV_GENDER_ID);
            }
        }
    },
    function (jqXHR, textStatus, errorThrown) {
    });
}


function chkpriregvalidation() {
    var regtyprereg = document.getElementById('ctl00_ContentPlaceHolder1_UCprereg_txtSearchControl').value;
    var regtypre = document.getElementById('ctl00_ContentPlaceHolder1_pre_regi').value;
    if (regtypre == "2" || regtypre == "1") {
        if (regtyprereg == "" || regtyprereg == undefined || regtyprereg == null) {
            $(".stoast").toastText("warning", "Please select Pre registration!.", 5, 3);
            document.getElementById('ctl00_ContentPlaceHolder1_UCprereg_txtSearchControl').focus();
            document.getElementById('ctl00_ContentPlaceHolder1_txtFirstName').value = '';
            return false;
        }    
    
    }
}