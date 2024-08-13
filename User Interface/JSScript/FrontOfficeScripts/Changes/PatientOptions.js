/*! PatientOptions v1.0.1 | (c) 2017 Suvarna.org/license */
/* Copy Rights: Suvarna TechnoSoft Pvt Ltd.,Author: Swetha Reddy.P*/
var ctrlcom = 'ctl00_ContentPlaceHolder1';
function btncloseletype() {
    $('[id*=pnlCheckLists]')[0].style.display = 'none'
}
function ShowPatHistory() {
    var umrno, pat_name, _admnno = '';
    var IP_OP = $('[id*=HDN_IP_OP]').val();
    if (IP_OP == 'IP') {
        var id = $('[id*=tdUmrLookup] .lookuptextbox').attr('id');
        var admnattrid = $('[id*=tdAdmnLookup] .lookuptextbox').attr('id');
        if (document.getElementById(id) != null) {
            if (document.getElementById(id).value == '') {
                $(".stoast").toastText("warning", "Please select admission number!.", 5, 3);
                document.getElementById(id).focus();
                return false;
            }
            _admnno = document.getElementById(admnattrid).value;
            umrno = document.getElementById(id).value;
            pat_name = $('[id*=lblPatName]').text();
        }
    }
    else if (IP_OP == 'CHANGE-REG') {
        if (document.getElementById('' + ctrlcom + '_ucRegUMRno_txtSearchControl').value == '') {
            $(".stoast").toastText("warning", "Please select UMR#!.", 5, 3);
            document.getElementById('' + ctrlcom + '_ucRegUMRno_txtSearchControl').focus();
            return false;
        }
        umrno = document.getElementById('' + ctrlcom + '_ucRegUMRno_txtSearchControl').value;
        pat_name = document.getElementById('' + ctrlcom + '_txtFirstName').value;
    }
    else {
        if (document.getElementById('' + ctrlcom + '_umrPatientDetails_Umrlookup_txtSearchControl').value == '') {
            $(".stoast").toastText("warning", "Please select UMR#!.", 5, 3);
            document.getElementById('' + ctrlcom + '_umrPatientDetails_Umrlookup_txtSearchControl').focus();
            return false;
        }
        umrno = document.getElementById('' + ctrlcom + '_umrPatientDetails_Umrlookup_txtSearchControl').value;
        pat_name = document.getElementById('' + ctrlcom + '_umrPatientDetails_lblPatName').innerHTML;
    }
    var PatientID = $('[id*=hdnOptPatientid]').val();
    $("#trPatHistoryGrid").show();
    if (pat_name == undefined || pat_name == null) { pat_name = ""; }
    $('[id*=lblpat_head_name]').text('Patient History Of: ' + pat_name);

    var hdnDateFormat = $('[id$=hdnDateFormat]').val();
    if (hdnDateFormat == undefined || hdnDateFormat == null || hdnDateFormat == "") { hdnDateFormat = "dd-MMM-yyyy"; }
    var hdnTimeFormat = $('[id$=hdnTimeFormat]').val();
    if (hdnTimeFormat == undefined || hdnTimeFormat == null || hdnTimeFormat == "") { hdnTimeFormat = "HH:mm:ss"; }
    var param = param || {};
    param.dataKey = "BILL_ID";
    param.pageSize = 10;
    param.pageNum = 1;
    param.defaultWSParams = { umrno: umrno, admnno: _admnno, _advSrch: '' };
    param.wsPath = "Private/FrontOffice/DayCare/AddNewAdmission.aspx/BindPatHistory";
    param.wsFilterPath = "Private/FrontOffice/DayCare/AddNewAdmission.aspx/BindPatHistory";
    param.template = ["BILL_NO*BILL_NO"
                            , "ADMN_NO*ADMN_NO"
                            , "BILL_TYPE_NAME*BILL_TYPE_NAME"
                            , "PATIENT_CLASS_NAME*PATIENT_CLASS_NAME"
                            , "DOCTOR_NAME*DOCTOR_NAME"
                            , "ADMN_DT*ADMN_DT"
                            , "BED_DTLS*BED_DTLS"
                            , "ADMN_TYPE*ADMN_TYPE"
                            , "DISCHR_DT*DISCHR_DT"
                            , "GROSS_AMOUNT*GROSS_AMOUNT"
                            , "NET_AMOUNT*NET_AMOUNT"
                            , "PAID_AMOUNT*PAID_AMOUNT"
                            , "CONCESSION_AMOUNT*CONCESSION_AMOUNT"
                            , "DUE_AMOUNT*DUE_AMOUNT"
                            , "OUTSTANDING_DUE*OUTSTANDING_DUE"
                            , "POST_DISCOUNT*POST_DISCOUNT"
                            , "REFUND_AMOUNT*REFUND_AMOUNT"
                            , "INSU_AMOUNT*INSURANCE_AMT"
                            , "ADVANCE_AMOUNT*ADVANCE_AMOUNT"
                            , "EXCESS_AMOUNT*EXCESS_AMOUNT"
                            , "CREATE_BY_NAME*CREATE_BY_NAME"
                            , "CREATE_DT*CREATE_DT"
                            , "MODIFY_BY_NAME*MODIFY_BY_NAME"
                            , "MODIFY_DT*MODIFY_DT"
                            , "REFERAL_DTLS*REFERAL_DTLS"
                            , "DIAGNOSIS * DIAGNOSIS"
                            , "TOKEN_NO * TOKEN_NO"
                            ];
    param.header = [{ col: "Bill#", sort: false, filter: true }
                            , { col: "Admn#", sort: false, filter: true }
                            , { col: "Bill Type", sort: false, filter: true }
                            , { col: "Patient Class", sort: false, filter: true }
                            , { col: "Doctor Name", sort: false, filter: true }
                            , { col: "Admission Dt", sort: false, filter: true }
                            , { col: "Bed /Room /Ward ", sort: false, filter: true }
                            , { col: "Admission Type", sort: false, filter: true }
                            , { col: "Discharge Dt", sort: false, filter: true }
                            , { col: "Gross Amt", sort: false, filter: true }
                            , { col: "Net Amt", sort: false, filter: true }
                            , { col: "Paid Amt", sort: false, filter: true }
                            , { col: "Concession Amt", sort: false, filter: true }
                            , { col: "Due Amt", sort: false, filter: true }
                            , { col: "Outstanding Due", sort: false, filter: true }
                            , { col: "Post Discount", sort: false, filter: true }
                            , { col: "Refund Amt", sort: false, filter: true }
                            , { col: "Ins Amt", sort: false, filter: true }
                            , { col: "Advance Amt", sort: false, filter: true }
                            , { col: "Excess Amt", sort: false, filter: true }
                            , { col: "Created By", sort: false, filter: true }
                            , { col: "Created Dt", sort: false, filter: true }
                            , { col: "Modify By", sort: false, filter: true }
                            , { col: "Modify Dt", sort: false, filter: true }
                            , { col: "Referal Details", sort: false, filter: true }
                              , { col: "Diagnosis", sort: false, filter: true }
                              , { col: "Token#", sort: false, filter: true }
                            ];
    param.enablePaging = false;
    param.enableTrace = false;
    param.enableFilter = true;
    param.enableCheckbox = false;
    param.enableSorting = false;
    param.tableTemplate = true;
    param.RowNo = true;
    param.enableDMS = false;
    param.treeCallBack = function (me) {
        var _pk = JSON.parse($(me).next().html()).BILL_ID;
        bill_id = _pk;
        bill_id_glob = _pk;
        _umrNO = JSON.parse($(me).next().html()).UMR_NO;
        _patID = JSON.parse($(me).next().html()).PATIENT_ID;
        _patcls = JSON.parse($(me).next().html()).PATIENT_CLASS_NAME;
        var _tr = $(me);
        var _ajax = "Private/FrontOffice/OpBilling/Receipts.aspx/GetFirstChild";

        BuildHistoryChildTree({ id: _pk }, _tr, "SERVICE_ID", "SERVICE_ID", _ajax, { SERVICE_TYPE_NAME: "Service Type Name",
            SERVICE_GROUP_NAME: "Service Group Name",
            SERVICE_NAME: "Service Name",
            ORDER_NO: "Indent No",
            RECORD_STATUS: "Status",
            AMOUNT: "Amount",
            PROCESS:"Process"
        }, 1, false);
    };
    param.RowDataBinding = function (rowitem, _data) {
        var obj = $(rowitem);
        obj.find("td").each(function (i, j) {
            var split = hdnDateFormat.split(' ');
            var current_format = split[0];
            if (i == 7) {
                if (_data.ADMN_DT != undefined && _data.ADMN_DT != null && _data.ADMN_DT != "" && _data.ADMN_DT != "null")
                    $(this).text(new Date(_data.ADMN_DT).format(current_format) + " " + new Date(_data.ADMN_DT).format(hdnTimeFormat));
            }
            if (i == 10) {
                if (_data.DISCHR_DT != undefined && _data.DISCHR_DT != null && _data.DISCHR_DT != "" && _data.DISCHR_DT != "null")
                    $(this).text(new Date(_data.DISCHR_DT).format(current_format) + " " + new Date(_data.DISCHR_DT).format(hdnTimeFormat));
            }
            if (i == 23) {
                if (_data.CREATE_DT != undefined && _data.CREATE_DT != null && _data.CREATE_DT != "" && _data.CREATE_DT != "null")
                    $(this).text(new Date(_data.CREATE_DT).format(current_format) + " " + new Date(_data.CREATE_DT).format(hdnTimeFormat));
            }
            if (i == 25) {
                if (_data.MODIFY_DT != undefined && _data.MODIFY_DT != null && _data.MODIFY_DT != "" && _data.MODIFY_DT != "null")
                    $(this).text(new Date(_data.MODIFY_DT).format(current_format) + " " + new Date(_data.MODIFY_DT).format(hdnTimeFormat));
            }
        });
        return obj[0].outerHTML;
    };
    gridControl = $("#tbl_PreConsultation").jMtable(param);

}

function hidePatHistory() {
    $("#trPatHistoryGrid").hide();
    return false;
}

function BuildHistoryChildTree(dataKey, eventObject, targetID, targetID1, AJAXURL, bindColumns, level, Child, callBack) {
    var _tr = "";
    var __dataKey = dataKey;
    var _colcount = eventObject.parent().parent().find("td").length - 1;
    var _pk = eventObject.data("key");
    if (document.getElementById("tr_" + level + "_" + _pk) != null) {
        $("#tr_" + level + "_" + _pk).slideToggle();
    }
    else {
        ReturnAsync(
                 AJAXURL
                , dataKey
                , function (JData) {
                    var i = 0;
                    _tr += "<tr id=\"tr_" + level + "_" + _pk + "\"><td>&nbsp;</td><td colspan=\"" + _colcount + "\"><table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" class=\"childtbl\" width=\"100%\"><thead><tr>";
                    _tr += "<th>S.No.</th>";
                    if (Child)
                        _tr += "<th>&nbsp;</th>";
                    for (var _j in bindColumns) {
                        if (typeof bindColumns[_j] === "object") {
                            _tr += "<th data-col='" + _j + "'>Manage</th>";
                        } else {
                            _tr += "<th data-col='" + _j + "'>" + bindColumns[_j] + "</th>";
                        }
                    }
                    _tr += "</tr></thead><tbody>";
                    if (JData.d != null) {
                        _JData = JData.d[0];
                        $(JData.d[0]).each(function (i, j) {
                            _tr += "<tr><td>" + (parseInt(i) + 1) + "</td>";
                            var ln = _JData.length;
                            if (Child && parseInt(j.SERVICE_CLASS_ID) === 3)
                                _tr += "<td><input type=\"button\" class='ajaxlevel_" + (level + 1) + "_click'  data-key='" + j[targetID] + "' data-key1='" + j[targetID1] + "' value=\"+\" /></td>";
                            for (var _j in bindColumns) {
                                var _tr_td = '';
                                var _dtls = gridControl.getDataRow(_pk);
                                if (typeof bindColumns[_j] === "object") {
                                    for (var k in bindColumns[_j]) {
                                        var tooltip = (bindColumns[_j][k].alt != "" && bindColumns[_j][k].alt != undefined) ? ("title=\"" + bindColumns[_j][k].alt) + "\"" : "";
                                        var billsetprint = "";
                                        billsetprint = bindColumns[_j][k].alt;

                                        if (ln > i && level == 1) {
                                            if (_JData[i].IS_CONSENT_FORM == '' || _JData[i].IS_CONSENT_FORM == null || _JData[i].IS_CONSENT_FORM == undefined) { _JData[i].IS_CONSENT_FORM = 'N'; }
                                            if (_JData[i].IS_SRV_GUIDELINES_REQUIRED == '' || _JData[i].IS_SRV_GUIDELINES_REQUIRED == null || _JData[i].IS_SRV_GUIDELINES_REQUIRED == undefined) { _JData[i].IS_SRV_GUIDELINES_REQUIRED = 'N'; }
                                            if (_JData[i].IS_SRV_CHECKLIST_REQUIRED == '' || _JData[i].IS_SRV_CHECKLIST_REQUIRED == null || _JData[i].IS_SRV_CHECKLIST_REQUIRED == undefined) { _JData[i].IS_SRV_CHECKLIST_REQUIRED = 'N'; }
                                            if (_JData[i].QUANTITY == '' || _JData[i].QUANTITY == null || _JData[i].QUANTITY == undefined)
                                            { _JData[i].QUANTITY = 1; }

                                            if (_JData[i].IS_SRV_GUIDELINES_REQUIRED == 'Y' && k == 0) {
                                                _tr_td += "<a style=\"display: " + "\" href=\"#\" title=\" " + (billsetprint) + "\" class=\"gico g" + (bindColumns[_j][k].alt).replace(/\s+/g, '') + "\"  onClick=\"" + bindColumns[_j][k].click + "('" + j[targetID] + "')\"><img " + tooltip + "  src=\"" + bindColumns[_j][k].icon + "\"/></a>";
                                            }
                                            if (_JData[i].IS_CONSENT_FORM == 'Y' && k == 1) {
                                                _tr_td += "<a style=\"display: " + "\" href=\"#\" title=\" " + (billsetprint) + "\" class=\"gico g" + (bindColumns[_j][k].alt).replace(/\s+/g, '') + "\"  onClick=\"" + bindColumns[_j][k].click + "('" + j[targetID] + "')\"><img " + tooltip + "  src=\"" + bindColumns[_j][k].icon + "\"/></a>";
                                            }
                                            if (_JData[i].QUANTITY > 1 && k == 2) {
                                                _tr_td += "<a style=\"display: " + "\" href=\"#\" title=\" " + (billsetprint) + "\" class=\"gico g" + (bindColumns[_j][k].alt).replace(/\s+/g, '') + "\"  onClick=\"" + bindColumns[_j][k].click + "('" + j[targetID] + "')\"><img " + tooltip + "  src=\"" + bindColumns[_j][k].icon + "\"/></a>";
                                            }
                                            if (_JData[i].IS_SRV_CHECKLIST_REQUIRED == "Y" && k == 3) {
                                                _tr_td += "<a style=\"display: " + "\" href=\"#\" title=\" " + (billsetprint) + "\" class=\"gico g" + (bindColumns[_j][k].alt).replace(/\s+/g, '') + "\"  onClick=\"" + bindColumns[_j][k].click + "('" + j[targetID] + "')\"><img " + tooltip + "  src=\"" + bindColumns[_j][k].icon + "\"/></a>";
                                            }
                                        }
                                        else if (level == 2 && k == 0) {
                                            _tr_td += "<a style=\"display: " + "\" href=\"#\" title=\" " + (billsetprint) + "\" class=\"gico g" + (bindColumns[_j][k].alt).replace(/\s+/g, '') + "\"  onClick=\"" + bindColumns[_j][k].click + "('" + j[targetID] + "')\"><img " + tooltip + "  src=\"" + bindColumns[_j][k].icon + "\"/></a>";

                                        }
                                    }
                                    _tr += "<td data-col='" + _j + "'>" + _tr_td + "</td>";
                                    i++;
                                }
                                else {
                                    _tr += "<td data-col='" + _j + "'>" + j[_j] + "</td>";
                                }
                            }
                            _tr += "</tr>";
                        });
                    }
                    eventObject.parent().parent().after(_tr);
                    if (typeof callBack === "function") {
                        callBack();
                    }
                }
                , function (jqXHR, textStatus, errorThrown) {
                    console.log("Check the Functionality");
                });
    }
}

function Patienttaginfo() {
    var admnNo = '';
    var IP_OP = $('[id*=HDN_IP_OP]').val();
    if (IP_OP == "IP") {
        var id = $('[id*=tdUmrLookup] .lookuptextbox').attr('id');
        var admnattrid = $('[id*=tdAdmnLookup] .lookuptextbox').attr('id');
        if (document.getElementById(id) != null) {
            if (document.getElementById(id).value == '') {
                $(".stoast").toastText("warning", "Please select admission number!", 5, 3);
                document.getElementById(id).focus();
                return false;
            }
        }
        admnNo = document.getElementById(admnattrid).value;
    }
    else {
        admnNo = document.getElementById('' + ctrlcom + '_umrPatientDetails_ucPatOptions_hdnOptUmrNo').value
    }

    var barcode = 'barcode://' + admnNo;
    window.open(barcode);
}
function ShowRegFaceSheetReport() {
    var IP_OP = $('[id*=HDN_IP_OP]').val();
    var doc_id = document.getElementById('ctl00_hdndocsessionid').value;

    if (IP_OP == 'IP') {
        var id = $('[id*=tdUmrLookup] .lookuptextbox').attr('id');
        var admnattrid = $('[id*=tdAdmnLookup] .lookuptextbox').attr('id');
        if (document.getElementById(id) != null) {
            if (document.getElementById(id).value == '') {
                $(".stoast").toastText("warning", "Please select admission number!", 5, 3);
                document.getElementById(id).focus();
                return false;
            }
        }
    }
    else if (IP_OP != 'CHANGE-REG') {
        if (document.getElementById('' + ctrlcom + '_umrPatientDetails_Umrlookup_txtSearchControl').value == '') {
            $(".stoast").toastText("warning", "Please select UMR#!.", 5, 3);
            document.getElementById('' + ctrlcom + '_umrPatientDetails_Umrlookup_txtSearchControl').focus();
            return false;
        }
    }
    else if (IP_OP == 'CHANGE-REG') {
        if (document.getElementById('' + ctrlcom + '_ucRegUMRno_txtSearchControl').value == '') {
            $(".stoast").toastText("warning", "Please select UMR#!.", 5, 3);
            document.getElementById('' + ctrlcom + '_ucRegUMRno_txtSearchControl').focus();
            return false;
        }
    }
    if (IP_OP == 'CHANGE-REG') {
        var clientname = $('[id*=hdnclientNameFor]').val();
        var _patient_id = document.getElementById('' + ctrlcom + '_ucUMRno__hiddenID').value;
        var _umr_no = document.getElementById('' + ctrlcom + '_ucUMRno__hiddenText').value;
        var _reg_no = document.getElementById('ctl00_hdnDMSAdmnNo').value;
        var _receipt_no = document.getElementById('' + ctrlcom + '_txtRegistration').value;
        var _bill_id = document.getElementById('' + ctrlcom + '_hdnBill_ID').value;
    }
    else {
        var clientname = $('[id*=hdnclientNameFor]').val();
        var _patient_id = document.getElementById('' + ctrlcom + '_umrPatientDetails_Umrlookup__hiddenID').value;
        var _umr_no = document.getElementById('ctl00_hdnDMSUmrNo').value;
        var _reg_no = document.getElementById('ctl00_hdnDMSAdmnNo').value;
        var _receipt_no = document.getElementById('' + ctrlcom + '_umrPatientDetails_hdnBillNo').value;
        var _bill_id = document.getElementById('' + ctrlcom + '_umrPatientDetails_hdnbillid').value;
    }
    var type = "REG";
    var authorized_user = '';
    if (authorized_user == undefined || authorized_user == null || authorized_user == '') { authorized_user = 'N'; }
    var RDFFormat = "dd-MMM-yyyy HH:mm:ss";
    var PrintDocID = "8830";
    GetAsync(
                "Private/FrontOffice/Registrations.aspx/CallFaceSheet",
              
                { Patient_ID: _patient_id, Umr_NO: _umr_no, Reg_NO: _reg_no, ReqType: type, Receipt_NO: _receipt_no, authorized_user: authorized_user, _bill_id: _bill_id, docid: "64", RDFFormat: RDFFormat, PrintDocID: PrintDocID },
                function (_path) {
                    _path = _path.d.split('&')[0] + '&' + _path.d.split('&')[1] + '&' + _path.d.split('&')[2] + '&' + _path.d.split('&')[3];
                    if (_path != "1") {
                        $(".smessagebox").scustommessagebox(1, "Success", "Click OK to get Report", ReportOkalertFaceSheet, _path, ReportNoalertFaceSheet);
                    }
                    else {
                        $(".stoast").toastText("warning", "You have exceeded the maximum number of reprints! Please contact administrator!", 5, 3);
                        return false;
                    }
                },
                function (jqXHR, textStatus, errorThrown) {
                });
    return false;
}

function ShowRegCardReport() {
    var IP_OP = $('[id*=HDN_IP_OP]').val();
    var clientname = $('[id*=hdnclientNameFor]').val();
    if (IP_OP == 'IP') {
        var id = $('[id*=tdUmrLookup] .lookuptextbox').attr('id');
        var admnattrid = $('[id*=tdAdmnLookup] .lookuptextbox').attr('id');
        if (document.getElementById(id) != null) {
            if (document.getElementById(id).value == '') {
                $(".stoast").toastText("warning", "Please select admission number!", 5, 3);
                document.getElementById(id).focus();
                return false;
            }
        }
    }
    else if (IP_OP != 'CHANGE-REG') {
        if (document.getElementById('' + ctrlcom + '_umrPatientDetails_Umrlookup_txtSearchControl').value == '') {
            $(".stoast").toastText("warning", "Please select UMR#!.", 5, 3);
            document.getElementById('' + ctrlcom + '_umrPatientDetails_Umrlookup_txtSearchControl').focus();
            return false;
        }

    }
    else if (IP_OP == 'CHANGE-REG') {
        if (document.getElementById('' + ctrlcom + '_ucRegUMRno_txtSearchControl').value == '') {
            $(".stoast").toastText("warning", "Please select UMR#!.", 5, 3);
            document.getElementById('' + ctrlcom + '_ucRegUMRno_txtSearchControl').focus();
            return false;
        }
    }
    if (IP_OP == 'CHANGE-REG') {
        var clientname = $('[id*=hdnclientNameFor]').val();
        var _bill_no = document.getElementById('' + ctrlcom + '_txtRegistration').value;
        var _photo = '';
        var _bill_id = document.getElementById('' + ctrlcom + '_hdnBill_ID').value;
        var _umr_no = document.getElementById('' + ctrlcom + '_umrPatientDetails_hdnUmrNo').value;
    }
    else {
        var clientname = $('[id*=hdnclientNameFor]').val();
        var _bill_no = document.getElementById('' + ctrlcom + '_umrPatientDetails_hdnBillNo').value;
        var _photo = '';
        var _bill_id = document.getElementById('' + ctrlcom + '_umrPatientDetails_hdnbillid').value;
        var _umr_no = document.getElementById('ctl00_hdnDMSUmrNo').value;
    }
    if (clientname == "UHWI" || clientname == "KNH") {
        GetAsync(
                "Private/FrontOffice/Registrations.aspx/Print_Card",
                { Bill_NO: _bill_no, Photo: _photo, _bill_id: _bill_id, clientname: clientname, documentid: "64" },
                function (_path) {
                    _path = _path.d;
                    $(".smessagebox").scustommessagebox(1, "Success", "Click OK to get Report", ReportOkalertFaceSheet, _path, ReportNoalertFaceSheet);
                },
                function (jqXHR, textStatus, errorThrown) {
                });
        return false;
    }
    else {
        var _dispatch = $('[id*=hdnRegID]').val();
        var billid = $('[id*=hdnOptUmrNo]').val();
        var patclsid; var pattype;
        Pattype = "False";
        if (Pattype == "False")
            patclsid = 2;
        else
            patclsid = 2;
        GetAsync(
                "Private/FrontOffice/Registrations.aspx/RegCardPrint",
                { _billid: _umr_no, Dispatch: _dispatch, _patclsid: patclsid },
                function (_path) {
                    _path = _path.d;
                    window.open(_path);
                    return false;
                },
                function (jqXHR, textStatus, errorThrown) {
                });
    }
    return false;
}
function BarcodePrint() {
    var IP_OP = $('[id*=HDN_IP_OP]').val();
    var clientname = $('[id*=hdnclientNameFor]').val();
    if (IP_OP == 'IP') {
        var id = $('[id*=tdUmrLookup] .lookuptextbox').attr('id');
        var admnattrid = $('[id*=tdAdmnLookup] .lookuptextbox').attr('id');
        if (document.getElementById(id) != null) {
            if (document.getElementById(id).value == '') {
                $(".stoast").toastText("warning", "Please select admission number!", 5, 3);
                document.getElementById(id).focus();
                return false;
            }
        }
    }
    else if (IP_OP != 'CHANGE-REG') {
        if (document.getElementById('' + ctrlcom + '_umrPatientDetails_Umrlookup_txtSearchControl').value == '') {
            $(".stoast").toastText("warning", "Please select UMR#!.", 5, 3);
            document.getElementById('' + ctrlcom + '_umrPatientDetails_Umrlookup_txtSearchControl').focus();
            return false;
        }

    }
    else if (IP_OP == 'CHANGE-REG') {
        if (document.getElementById('' + ctrlcom + '_ucRegUMRno_txtSearchControl').value == '') {
            $(".stoast").toastText("warning", "Please select UMR#!.", 5, 3);
            document.getElementById('' + ctrlcom + '_ucRegUMRno_txtSearchControl').focus();
            return false;
        }
    }
    if (IP_OP == 'CHANGE-REG') {
        var clientname = $('[id*=hdnclientNameFor]').val();
        var _bill_no = document.getElementById('' + ctrlcom + '_txtRegistration').value;
        var _photo = '';
        var _bill_id = document.getElementById('' + ctrlcom + '_hdnBill_ID').value;
        var _umr_no = document.getElementById('' + ctrlcom + '_umrPatientDetails_hdnUmrNo').value;
    }
    else {
        var clientname = $('[id*=hdnclientNameFor]').val();
        var _bill_no = document.getElementById('' + ctrlcom + '_umrPatientDetails_hdnBillNo').value;
        var _photo = '';
        var _bill_id = document.getElementById('' + ctrlcom + '_umrPatientDetails_hdnbillid').value;
        var _umr_no = document.getElementById('ctl00_hdnDMSUmrNo').value;
    }
    if (_umr_no != '') {
        window.open('barcode://' + 'R-' + _umr_no);
    } else {
        $(".stoast").toastText("warning", "Please select UMR#!.", 5, 3);
        return false; }
    return false;
}
function ReportOkalertFaceSheet(value) {
    var Rpath = value.split(',')[0];
    window.open(_iniUrl + Rpath);
}
function ReportNoalertFaceSheet() {
    return false;
}

function showPatAddress() {
    var pat_name = '';
    var IP_OP = $('[id*=HDN_IP_OP]').val();
    if (IP_OP == 'IP') {
        var id = $('[id*=tdUmrLookup] .lookuptextbox').attr('id');
        var admnattrid = $('[id*=tdAdmnLookup] .lookuptextbox').attr('id');
        if (document.getElementById(id) != null) {
            if (document.getElementById(id).value == '') {
                $(".stoast").toastText("warning", "Please select admission number!", 5, 3);
                document.getElementById(id).focus();
                return false;
            }
        }
        pat_name = $('[id*=lblPatName]').text();
    }
    else {
        if (document.getElementById('' + ctrlcom + '_umrPatientDetails_Umrlookup_txtSearchControl').value == '') {
            $(".stoast").toastText("warning", "Please select UMR#!.", 5, 3);
            document.getElementById('' + ctrlcom + '_umrPatientDetails_Umrlookup_txtSearchControl').focus();
            return false;
        }
        pat_name = document.getElementById('' + ctrlcom + '_umrPatientDetails_lblPatName').innerHTML;
    }

    if (pat_name == undefined || pat_name == null) { pat_name = ""; }
    $('[id*=lblPat_address_dtls]').text('Address Details of: ' + pat_name);
    AssignBannerAddressDetails1(IP_OP);
    $("#patAddressPopup").show();

    return false;
}
function HidePatAddress() {
    $("#patAddressPopup").hide();
    return false;
}
function AssignBannerAddressDetails1(obj) {
    var PatientID = $('[id*=hdnOptPatientid]').val();
    if (PatientID == undefined || PatientID == null || PatientID == '') { PatientID = "0"; }

    $('#div__address').empty();
    var _table = "<br /><div><fieldset class=\"aifborder\"><legend style=\"background: #21B9CD; color: #FFFFFF; padding: 1px 3px; border-radius: 3px;\">Patient Address Details</legend><div>";
    _table += '<table border="0" class="jtblgrid divscroll" cellpadding="0" cellspacing="0" width="100%"><tbody><tr class=""><th></th><th align="left">Present</th><th align="left">Permanent</th><th align="left">Other</th><th align="left">Emergency</th><th align="left">Guarantor</th></tr>'
    GetNonAsync(
            "PatientRegistration.asmx/Get_Patient_Address_Details",
            { patientid: parseInt(PatientID) },
            function (jdata) {
                var result = jdata.d;
                var _childtbl = '';
                if (result != null) {
                    if (result.length != 0) {
                        var address1_1 = result[0] != undefined ? result[0]["Address1"] : ''; var address1_2 = result[1] != undefined ? result[1]["Address1"] : ''; var address1_3 = result[2] != undefined ? result[2]["Address1"] : ''; var address1_4 = result[4] != undefined ? result[4]["Address1"] : ''; var address1_5 = result[3] != undefined ? result[3]["Address1"] : '';
                        var address2_1 = result[0] != undefined ? result[0]["Address2"] : ''; var address2_2 = result[1] != undefined ? result[1]["Address2"] : ''; var address2_3 = result[2] != undefined ? result[2]["Address2"] : ''; var address2_4 = result[4] != undefined ? result[4]["Address2"] : ''; var address2_5 = result[3] != undefined ? result[3]["Address2"] : '';
                        var area_1 = result[0] != undefined ? result[0]["AREA_NAME"] : ''; var area_2 = result[1] != undefined ? result[1]["AREA_NAME"] : ''; var area_3 = result[2] != undefined ? result[2]["AREA_NAME"] : ''; var area_4 = result[4] != undefined ? result[4]["AREA_NAME"] : ''; var area_5 = result[3] != undefined ? result[3]["AREA_NAME"] : '';
                        var city_1 = result[0] != undefined ? result[0]["CITY_NAME"] : ''; var city_2 = result[1] != undefined ? result[1]["CITY_NAME"] : ''; var city_3 = result[2] != undefined ? result[2]["CITY_NAME"] : ''; var city_4 = result[4] != undefined ? result[4]["CITY_NAME"] : ''; var city_5 = result[3] != undefined ? result[3]["CITY_NAME"] : '';
                        var state_1 = result[0] != undefined ? result[0]["STATE_NAME"] : ''; var state_2 = result[1] != undefined ? result[1]["STATE_NAME"] : ''; var state_3 = result[2] != undefined ? result[2]["STATE_NAME"] : ''; var state_4 = result[4] != undefined ? result[4]["STATE_NAME"] : ''; var state_5 = result[3] != undefined ? result[3]["STATE_NAME"] : '';
                        var country_1 = result[0] != undefined ? result[0]["COUNTRY_NAME"] : ''; var country_2 = result[1] != undefined ? result[1]["COUNTRY_NAME"] : ''; var country_3 = result[2] != undefined ? result[2]["COUNTRY_NAME"] : ''; var country_4 = result[4] != undefined ? result[4]["COUNTRY_NAME"] : ''; var country_5 = result[3] != undefined ? result[3]["COUNTRY_NAME"] : '';
                        var pincode_1 = result[0] != undefined ? result[0]["ZipCode"] : ''; var pincode_2 = result[1] != undefined ? result[1]["ZipCode"] : ''; var pincode_3 = result[2] != undefined ? result[2]["ZipCode"] : ''; var pincode_4 = result[4] != undefined ? result[4]["ZipCode"] : ''; var pincode_5 = result[3] != undefined ? result[3]["ZipCode"] : '';
                        var fax_1 = result[0] != undefined ? result[0]["FAX_NUMBER"] : ''; var fax_2 = result[1] != undefined ? result[1]["FAX_NUMBER"] : ''; var fax_3 = result[2] != undefined ? result[2]["FAX_NUMBER"] : ''; var fax_4 = result[4] != undefined ? result[4]["FAX_NUMBER"] : ''; var fax_5 = result[3] != undefined ? result[3]["FAX_NUMBER"] : '';
                        var telephone_1 = result[0] != undefined ? result[0]["MOBILE_PHONE1"] : ''; var telephone_2 = result[1] != undefined ? result[1]["MOBILE_PHONE1"] : ''; var telephone_3 = result[2] != undefined ? result[2]["MOBILE_PHONE1"] : ''; var telephone_4 = result[4] != undefined ? result[4]["MOBILE_PHONE1"] : ''; var telephone_5 = result[3] != undefined ? result[3]["MOBILE_PHONE1"] : '';
                        var mobile_1 = result[0] != undefined ? result[0]["MOBILE_PHONE"] : ''; var mobile_2 = result[1] != undefined ? result[1]["MOBILE_PHONE"] : ''; var mobile_3 = result[2] != undefined ? result[2]["MOBILE_PHONE"] : ''; var mobile_4 = result[4] != undefined ? result[4]["MOBILE_PHONE"] : ''; var mobile_5 = result[3] != undefined ? result[3]["MOBILE_PHONE"] : '';
                        var email_1 = result[0] != undefined ? result[0]["Email_ID"] : ''; var email_2 = result[1] != undefined ? result[1]["Email_ID"] : ''; var email_3 = result[2] != undefined ? result[2]["Email_ID"] : ''; var email_4 = result[4] != undefined ? result[4]["Email_ID"] : ''; var email_5 = result[3] != undefined ? result[3]["Email_ID"] : '';

                        _childtbl += "<tr><td width='100px'><b>Address1</b></td><td width='200px'>" + address1_1 + "</td><td width='200px'>" + address1_2 + "</td><td width='200px'>" + address1_3 + "</td><td width='200px'>" + address1_4 + "</td><td width='200px'>" + address1_5 + "</td>";
                        _childtbl += "<tr><td><b>Address2</b></td><td>" + address2_1 + "</td><td>" + address2_2 + "</td><td>" + address2_3 + "</td><td>" + address2_4 + "</td><td>" + address2_5 + "</td>";
                        _childtbl += "<tr><td><b>Area</b></td><td>" + area_1 + "</td><td>" + area_2 + "</td><td>" + area_3 + "</td><td>" + area_4 + "</td><td>" + area_5 + "</td>";
                        _childtbl += "<tr><td><b>City</b></td><td>" + city_1 + "</td><td>" + city_2 + "</td><td>" + city_3 + "</td><td>" + city_4 + "</td><td>" + city_5 + "</td>";
                        _childtbl += "<tr><td><b>State</b></td><td>" + state_1 + "</td><td>" + state_2 + "</td><td>" + state_3 + "</td><td>" + state_4 + "</td><td>" + state_5 + "</td>";
                        _childtbl += "<tr><td><b>Country</b></td><td>" + country_1 + "</td><td>" + country_2 + "</td><td>" + country_3 + "</td><td>" + country_4 + "</td><td>" + country_5 + "</td>";
                        _childtbl += "<tr><td><b>PinCode</b></td><td>" + pincode_1 + "</td><td>" + pincode_2 + "</td><td>" + pincode_3 + "</td><td>" + pincode_4 + "</td><td>" + pincode_5 + "</td>";
                        _childtbl += "<tr><td><b>Fax</b></td><td>" + fax_1 + "</td><td>" + fax_2 + "</td><td>" + fax_3 + "</td><td>" + fax_4 + "</td><td>" + fax_5 + "</td>";
                        _childtbl += "<tr><td><b>Telephone No</b></td><td>" + telephone_1 + "</td><td>" + telephone_2 + "</td><td>" + telephone_3 + "</td><td>" + telephone_4 + "</td><td>" + telephone_5 + "</td>";
                        _childtbl += "<tr><td><b>Mobile No</b></td><td>" + mobile_1 + "</td><td>" + mobile_2 + "</td><td>" + mobile_3 + "</td><td>" + mobile_4 + "</td><td>" + mobile_5 + "</td>";
                        _childtbl += "<tr><td><b>Email</b></td><td>" + email_1 + "</td><td>" + email_2 + "</td><td>" + email_3 + "</td><td>" + email_4 + "</td><td>" + email_5 + "</td>";
                    }
                }
                _table += _childtbl;
            },
            function (jqXHR, textStatus, errorThrown) {
                $(".stoast").toastText("warning", errorThrown, 5, 3);
            });
    _table += "</tbody></table></div></fieldset></div><br />";
    if ($('[id*=hdnCntrlType]').val() == "IPBAN") {
        _table += AssignAdmnEmergancyDetails('IP');
    }
    _table += "</div>";
    $('#div__address').append(_table);
    return false;

}

function AssignAdmnEmergancyDetails(obj) {
    var _table = "<div><fieldset class=\"aifborder\"><legend style=\"background: #21B9CD; color: #FFFFFF; padding: 1px 3px; border-radius: 3px;\">Emergency Contacts Details</legend><div>";
    _table += '<table border="0" class="jtblgrid divscroll" cellpadding="0" cellspacing="0" width="100%"><tbody><tr class=""><th></th><th align="left">EC-1</th><th align="left">EC-2</th><th align="left">EC-3</th><th align="left">Guarantor</th></tr>'
    var adminID = 0;
    if (obj == 'IP') {
        /* For Op Patients always alert comming so cvommented by pushkar */
        /*   if ($('[id*=hdnOptAdmnID]').val() == '' || $('[id*=hdnOptAdmnID]').val() == undefined || $('[id*=hdnOptAdmnID]').val() == null) {
        $(".stoast").toastText("warning", "Admn# Shouldn't Be Empty", 5, 3);
        return false;
        } */
        adminID = $('[id*=hdnOptAdmnID]').val();
        if (adminID == null || adminID == undefined || adminID == '') { adminID = 0; }
    }
    else if (obj == 'OP') {
        if ($('[id*=hdnOptPatientid]').val() == '' || $('[id*=hdnOptPatientid]').val() == undefined || $('[id*=hdnOptPatientid]').val() == null) {
            $(".stoast").toastText("warning", "Admin# Shouldn't Be Empty", 5, 3);
            return false;
        }
        adminID = $('[id*=hdnOptPatientid]').val();
        if (adminID == null || adminID == undefined || adminID == '') { adminID = 0; }
    }
    var sessionID = $('[id*=hdnoptSessionID]').val();
    GetNonAsync(
    "PatientRegistration.asmx/GetPatAttandantDetails",
    { admnId: parseInt(adminID), sessionId: parseInt(sessionID) },
    function (jdata) {
        var result = jdata.d;
        var _childtbl = '';
        if (result != null) {
            if (result.length != 0) {
                result = result[0];
                var address1_1 = result[0] != undefined ? result[0]["ADDRESS1"] : ''; var address1_2 = result[1] != undefined ? result[1]["ADDRESS1"] : ''; var address1_3 = result[2] != undefined ? result[2]["ADDRESS1"] : ''; var address1_4 = result[3] != undefined ? result[3]["ADDRESS1"] : '';
                var address2_1 = result[0] != undefined ? result[0]["ADDRESS2"] : ''; var address2_2 = result[1] != undefined ? result[1]["ADDRESS2"] : ''; var address2_3 = result[2] != undefined ? result[2]["ADDRESS2"] : ''; var address2_4 = result[3] != undefined ? result[3]["ADDRESS2"] : '';
                var area_1 = result[0] != undefined ? result[0]["AREA_NAME"] : ''; var area_2 = result[1] != undefined ? result[1]["AREA_NAME"] : ''; var area_3 = result[2] != undefined ? result[2]["AREA_NAME"] : ''; var area_4 = result[3] != undefined ? result[3]["AREA_NAME"] : '';
                var city_1 = result[0] != undefined ? result[0]["CITY_NAME"] : ''; var city_2 = result[1] != undefined ? result[1]["CITY_NAME"] : ''; var city_3 = result[2] != undefined ? result[2]["CITY_NAME"] : ''; var city_4 = result[3] != undefined ? result[3]["CITY_NAME"] : '';
                var state_1 = result[0] != undefined ? result[0]["STATE_NAME"] : ''; var state_2 = result[1] != undefined ? result[1]["STATE_NAME"] : ''; var state_3 = result[2] != undefined ? result[2]["STATE_NAME"] : ''; var state_4 = result[3] != undefined ? result[3]["STATE_NAME"] : '';
                var country_1 = result[0] != undefined ? result[0]["COUNTRY_NAME"] : ''; var country_2 = result[1] != undefined ? result[1]["COUNTRY_NAME"] : ''; var country_3 = result[2] != undefined ? result[2]["COUNTRY_NAME"] : ''; var country_4 = result[3] != undefined ? result[3]["COUNTRY_NAME"] : '';
                var pincode_1 = result[0] != undefined ? result[0]["ZipCode"] : ''; var pincode_2 = result[1] != undefined ? result[1]["ZipCode"] : ''; var pincode_3 = result[2] != undefined ? result[2]["ZipCode"] : ''; var pincode_4 = result[3] != undefined ? result[3]["ZipCode"] : '';
                var fax_1 = result[0] != undefined ? result[0]["FAX_NUMBER"] : ''; var fax_2 = result[1] != undefined ? result[1]["FAX_NUMBER"] : ''; var fax_3 = result[2] != undefined ? result[2]["FAX_NUMBER"] : ''; var fax_4 = result[3] != undefined ? result[3]["FAX_NUMBER"] : '';
                var telephone_1 = result[0] != undefined ? result[0]["HOME_PHONE"] : ''; var telephone_2 = result[1] != undefined ? result[1]["HOME_PHONE"] : ''; var telephone_3 = result[2] != undefined ? result[2]["HOME_PHONE"] : ''; var telephone_4 = result[3] != undefined ? result[3]["HOME_PHONE"] : '';
                var mobile_1 = result[0] != undefined ? result[0]["MOBILE_PHONE"] : ''; var mobile_2 = result[1] != undefined ? result[1]["MOBILE_PHONE"] : ''; var mobile_3 = result[2] != undefined ? result[2]["MOBILE_PHONE"] : ''; var mobile_4 = result[3] != undefined ? result[3]["MOBILE_PHONE"] : '';
                var email_1 = result[0] != undefined ? result[0]["EMAIL_ID"] : ''; var email_2 = result[1] != undefined ? result[1]["EMAIL_ID"] : ''; var email_3 = result[2] != undefined ? result[2]["EMAIL_ID"] : ''; var email_4 = result[3] != undefined ? result[3]["EMAIL_ID"] : '';

                _childtbl += "<tr><td><b>Address1</b></td><td>" + address1_1 + "</td><td>" + address1_2 + "</td><td>" + address1_3 + "</td><td>" + address1_4 + "</td>";
                _childtbl += "<tr><td><b>Address2</b></td><td>" + address2_1 + "</td><td>" + address2_2 + "</td><td>" + address2_3 + "</td><td>" + address2_4 + "</td>";
                _childtbl += "<tr><td><b>Area</b></td><td>" + area_1 + "</td><td>" + area_2 + "</td><td>" + area_3 + "</td><td>" + area_4 + "</td>";
                _childtbl += "<tr><td><b>City</b></td><td>" + city_1 + "</td><td>" + city_2 + "</td><td>" + city_3 + "</td><td>" + city_4 + "</td>";
                _childtbl += "<tr><td><b>State</b></td><td>" + state_1 + "</td><td>" + state_2 + "</td><td>" + state_3 + "</td><td>" + state_4 + "</td>";
                _childtbl += "<tr><td><b>Country</b></td><td>" + country_1 + "</td><td>" + country_2 + "</td><td>" + country_3 + "</td><td>" + country_4 + "</td>";
                _childtbl += "<tr><td><b>PinCode</b></td><td>" + pincode_1 + "</td><td>" + pincode_2 + "</td><td>" + pincode_3 + "</td><td>" + pincode_4 + "</td>";
                _childtbl += "<tr><td><b>Fax</b></td><td>" + fax_1 + "</td><td>" + fax_2 + "</td><td>" + fax_3 + "</td><td>" + fax_4 + "</td>";
                _childtbl += "<tr><td><b>Telephone No</b></td><td>" + telephone_1 + "</td><td>" + telephone_2 + "</td><td>" + telephone_3 + "</td><td>" + telephone_4 + "</td>";
                _childtbl += "<tr><td><b>Mobile No</b></td><td>" + mobile_1 + "</td><td>" + mobile_2 + "</td><td>" + mobile_3 + "</td><td>" + mobile_4 + "</td>";
                _childtbl += "<tr><td><b>Email</b></td><td>" + email_1 + "</td><td>" + email_2 + "</td><td>" + email_3 + "</td><td>" + email_4 + "</td>";
            }
        }
        _table += _childtbl;
    },
    function (jqXHR, textStatus, errorThrown) {
        alert(errorThrown);
    });
    _table += "</tbody></table></div></fieldset></div><br />";
    return _table;
}


function changregdet() {
    var patid = $('[id*=hdnOptPatientid]').val();
    var umrno = document.getElementById('' + ctrlcom + '_umrPatientDetails_Umrlookup_txtSearchControl').value;
    var admnid = $('[id*=hdnOptAdmnID]').val();


    var DocID = $('[id*=hdnChnRegDocID]').val();

    if (DocID == '' || DocID == null || DocID == undefined) { DocID = ''; }
    var Str = '';
    if (DocID != '') {
        var _DocID = DocID.split(',')[0];
        var _ModID = DocID.split(',')[0];
        Str = "&DOC_ID=" + _DocID;

    }

    var srcdocformcd = $('[id*=hdnSrcDocFormCd]').val();
    if ($('[id*=hdnCntrlType]').val() == "IPBAN") {
        var patid = $('[id*=hdnPatID]').val();
    }
    else {
        if (document.getElementById('' + ctrlcom + '_umrPatientDetails_ucPatOptions_hdnOptUmrNo').value == '' || document.getElementById('' + ctrlcom + '_umrPatientDetails_ucPatOptions_hdnOptUmrNo').value == null || document.getElementById('' + ctrlcom + '_umrPatientDetails_ucPatOptions_hdnOptUmrNo').value == undefined) {
            $(".stoast").toastText("Alert", "Please select the UMR number!", 3, 2);
            return false;
        }
    }
    if ($('[id*=hdnISOSP]').value == "Y") {
        window.location = _iniUrl + 'Private/FrontOffice/OpBilling/OPChanges/New_Change_PatientDetails.aspx?PAT_ID=' + patid + "&UMR_NO=" + umrno + "&pageurl=" + window.location.origin + window.location.pathname + Str;
    }
    else if ($('[id*=hdnQryType]').val() == "Pre") {
        window.location = _iniUrl + 'Private/FrontOffice/OpBilling/OPChanges/New_IPRegistrationChengesDetails.aspx?PAT_ID=' + patid + "&UMR_NO=" + umrno + "&Type=" + "Pre" + "&pageurl=" + window.location.origin + window.location.pathname + Str + "&DOC_FORM_CD=CHANGE-REG&SRC_DOC_FORM_CD=" + srcdocformcd;
    }
    else if ($('[id*=hdnQryType]').val() == "changeAdmID") {
        window.location = _iniUrl + 'Private/FrontOffice/OpBilling/OPChanges/New_IPRegistrationChengesDetails.aspx?PAT_ID=' + patid + "&UMR_NO=" + umrno + "&Type=" + "changeAdmID" + "&AdmissionID=" + admnid + "&pageurl=" + window.location.origin + window.location.pathname + Str + "&DOC_FORM_CD=CHANGE-REG&SRC_DOC_FORM_CD=" + srcdocformcd;
    }
    else {
        window.location = _iniUrl + 'Private/FrontOffice/OpBilling/OPChanges/New_IPRegistrationChengesDetails.aspx?PAT_ID=' + patid + "&UMR_NO=" + umrno + "&pageurl=" + window.location.origin + window.location.pathname + Str + "&DOC_FORM_CD=CHANGE-REG&SRC_DOC_FORM_CD=" + srcdocformcd;
    }
}

function ShowPatNotifications() {
    var IP_OP = $('[id*=HDN_IP_OP]').val();
    if (IP_OP == 'IP') {
        if (document.getElementById('' + ctrlcom + '_IPPatientDtls1_ucUmrNo_txtSearchControl').value == '') {
            $(".stoast").toastText("warning", "Please select admission number!", 5, 3);
            document.getElementById('' + ctrlcom + '_IPPatientDtls1_ucUmrNo_txtSearchControl').focus();
            return false;
        }
    }
    else {
        if (document.getElementById('' + ctrlcom + '_umrPatientDetails_Umrlookup_txtSearchControl').value == '') {
            $(".stoast").toastText("warning", "Please select UMR#!.", 5, 3);
            document.getElementById('' + ctrlcom + '_umrPatientDetails_Umrlookup_txtSearchControl').focus();
            return false;
        }
    }
    if ($('[id*=hdnrecord_status]').val() != '' && $('[id*=hdnrecord_status]').val() != 'A') {
        $(".stoast").toastText("Info", "This Medical Record has been deactivated!", 5, 2);
    }
    if ($('[id*=hdnpatient_expiry]').val() == 'Y') {
        $(".stoast").toastText("Info", "This Patient Is Expired", 5, 2);
    }
    if ($('[id*=hdnis_blocked]').val() == 'Y') {
        $(".stoast").toastText("Info", "This UMR_NO is BLOCKED", 5, 2);
    }
    if ($('[id*=hdnonbed_status]').val() == 'Y') {
        $(".stoast").toastText("Info", "This patient is ADMITED", 5, 2);
    }
    if ($('[id*=hdnis_merge]').val() == 'Y') {
        $(".stoast").toastText("Info", 'This UMR_NO is MERGED to ' + $('[id*=hdnmerge_umr_no]').val() + ' Do You Want To Continue With merged umr#' + $('[id*=hdnmerge_umr_no]').val(), 5, 2);
    }
    if ($('[id*=hdnis_reg_expiry]').val() == 'Y') {
        $(".stoast").toastText("Info", "This UMR_NO registration expired ", 5, 2);
    }
    if ($('[id*=hdnis_senior_citizen]').val() == 'Y') {
        $(".stoast").toastText("Info", "SENIOR CITIZEN patient", 5, 2);
    }
    if ($('[id*=hdnis_vip]').val() == 'V' || $('[id*=hdnis_vip]').val() == 'VV') {
        $(".stoast").toastText("Info", "VIP patient", 5, 2);
    }
    if (parseFloat($('[id*=hdnoutstanding_due]').val()) > 0) {
        if (document.getElementById('' + ctrlcom + '_umrPatientDetails_hdnbasecurrancy').value == "INDIAN RUPEE" || document.getElementById('' + ctrlcom + '_umrPatientDetails_hdnbasecurrancy').value == "INR")
            $(".stoast").toastText("Info", 'This UMR_NO ' + document.getElementById('' + ctrlcom + '_umrPatientDetails_Umrlookup_txtSearchControl').value + ' having due of <i class="icon-rupee"></i>' + $('[id*=hdnoutstanding_due]').val(), 5, 2);
        else
            $(".stoast").toastText("Info", 'This UMR_NO ' + document.getElementById('' + ctrlcom + '_umrPatientDetails_Umrlookup_txtSearchControl').value + ' having due of <i class="icon-dollar"></i>' + $('[id*=hdnoutstanding_due]').val(), 5, 2);
    }
    if (parseFloat($('[id*=hdnrefund]').val()) > 0) {
        if (document.getElementById('' + ctrlcom + '_umrPatientDetails_hdnbasecurrancy').value == "INDIAN RUPEE" || document.getElementById('' + ctrlcom + '_umrPatientDetails_hdnbasecurrancy').value == "INR")
            $(".stoast").toastText("Info", 'This UMR_NO ' + document.getElementById('' + ctrlcom + '_umrPatientDetails_Umrlookup_txtSearchControl').value + ' having Refundable amount of <i class="icon-rupee"></i>' + $('[id*=hdnrefund]').val(), 5, 2);
        else
            $(".stoast").toastText("Info", 'This UMR_NO ' + document.getElementById('' + ctrlcom + '_umrPatientDetails_Umrlookup_txtSearchControl').value + ' having Refundable amount of <i class="icon-dollar"></i>' + $('[id*=hdnrefund]').val(), 5, 2);
    }
    if (parseFloat($('[id*=hdnpreadvance]').val()) > 0) {
        if (document.getElementById('' + ctrlcom + '_umrPatientDetails_hdnbasecurrancy').value == "INDIAN RUPEE" || document.getElementById('' + ctrlcom + '_umrPatientDetails_hdnbasecurrancy').value == "INR")
            $(".stoast").toastText("Info", 'This UMR_NO ' + document.getElementById('' + ctrlcom + '_umrPatientDetails_Umrlookup_txtSearchControl').value + ' having Pre Advance amount <i class="icon-rupee"></i>' + $('[id*=hdnpreadvance]').val(), 5, 2);
        else
            $(".stoast").toastText("Info", 'This UMR_NO ' + document.getElementById('' + ctrlcom + '_umrPatientDetails_Umrlookup_txtSearchControl').value + ' having Pre Advance amount <i class="icon-dollar"></i>' + $('[id*=hdnpreadvance]').val(), 5, 2);
    }
    if ($('[id*=hdnismlc]').val() == "Y") {
        $(".stoast").toastText("Info", 'This patient is MLC', 5, 2);
    }
    if (parseFloat($('[id*=hdnfundexpamt]').val()) > 0) {
        if (document.getElementById('' + ctrlcom + '_umrPatientDetails_hdnbasecurrancy').value == "INDIAN RUPEE" || document.getElementById('' + ctrlcom + '_umrPatientDetails_hdnbasecurrancy').value == "INR")
            $(".stoast").toastText("Info", 'This UMR_NO ' + document.getElementById('' + ctrlcom + '_umrPatientDetails_Umrlookup_txtSearchControl').value + ' having Fund amount of ' + $('[id*=hdnfundexpamt]').val() + '<i class="icon-rupee"></i>  Expire within ' + $('[id*=hdnfundexpdays]').val(), 5, 2);
        else
            $(".stoast").toastText("Info", 'This UMR_NO ' + document.getElementById('' + ctrlcom + '_umrPatientDetails_Umrlookup_txtSearchControl').value + ' having Fund amount of ' + $('[id*=hdnfundexpamt]').val() + '<i class="icon-dollar"></i>  Expire within ' + $('[id*=hdnfundexpdays]').val(), 5, 2);
    }
    if (parseFloat($('[id*=hdnrefund]').val()) > 0) {
        $(".stoast").toastText("Info", 'This UMR_NO ' + document.getElementById('' + ctrlcom + '_umrPatientDetails_Umrlookup_txtSearchControl').value + ' having Refundable amount of ' + $('[id*=hdnrefund]').val(), 5, 2);
    }
    return false;
}

function ShowPatAllergies() {
    var gridControl_allergies;
    var IP_OP = $('[id*=HDN_IP_OP]').val();
    var umr_no = '';
    var hdnTimeFormat = $('[id*=hdnTimeFormat]').val();
    var hdnDateFormat = $('[id*=hdnDateFormat]').val();
    if (hdnDateFormat == undefined || hdnDateFormat == "" || hdnDateFormat == null) { hdnDateFormat = "dd-MMM-yyyy"; }
    if (hdnTimeFormat == undefined || hdnTimeFormat == "" || hdnTimeFormat == null) { hdnTimeFormat = "hh:mm:ss"; }
    if (IP_OP == 'IP') {
        umr_no = $('[id*=ucAdmission_txtSearchControl]').val(); 
        if (umr_no == '') {
            $(".stoast").toastText("warning", "Please select admission number!", 5, 3);
            $('[id*=ucUmrNo_txtSearchControl]').val(); 
            return false;
        }
    }
    else {
        umr_no = document.getElementById('' + ctrlcom + '_umrPatientDetails_Umrlookup_txtSearchControl').value;
        if (umr_no == '') {
            $(".stoast").toastText("warning", "Please select UMR#!.", 5, 3);
            document.getElementById('' + ctrlcom + '_umrPatientDetails_Umrlookup_txtSearchControl').focus();
            return false;
        }
    }
    var PatientID = $('[id*=hdnOptPatientid]').val();
    var param_allergies = param_allergies || {};
    param_allergies.dataKey = "ALLERGY_ID";
    param_allergies.pageSize = 10;
    param_allergies.pageNum = 1;
    param_allergies.defaultWSParams = { umr_no: umr_no };
    param_allergies.wsPath = "PatientRegistration.asmx/Get_Patient_Allergies_new";
    param_allergies.wsFilterPath = "PatientRegistration.asmx/Get_Patient_Allergies_new";
    param_allergies.template = ["Allergy_Name*ALLERGY_NAME"
    , "NOTES*NOTES"
    , "CREATED_BY*CREATE_BY"
    , "CREATE_DT*CREATE_DT"
    ];
    param_allergies.header = [{ col: "Allergy Name", sort: true, filter: true }
    , { col: "Notes", sort: true, filter: true }
    , { col: "Create By", sort: true, filter: true }
    , { col: "Create Dt", sort: true, filter: true }
    ];
    param_allergies.enablePaging = false;
    param_allergies.enableTrace = false;
    param_allergies.enableFilter = false;
    param_allergies.enableCheckbox = false;
    param_allergies.enableSorting = false;
    param_allergies.RowNo = true;
    param_allergies.tableTemplate = true;
    param_allergies.enableDMS = false;
    param_allergies.RowDataBinding = function (rowitem, _data) {
        var obj = $(rowitem);
        obj.find("td").each(function (i, j) {
            if (i == 4) {
                if (_data.CREATE_DT != undefined && _data.CREATE_DT != null && _data.CREATE_DT != "" && _data.CREATE_DT != "null")
                    $(this).text(new Date(_data.CREATE_DT).format(hdnDateFormat) + " " + new Date(_data.CREATE_DT).format(hdnTimeFormat));
            }
        });
        return obj[0].outerHTML;
    };
    gridControl_allergies = $("#tbl_PatAllergies").jtable(param_allergies);
    $("#divPatAllergies").show();
}

function hidePatAllergies() {
    $("#divPatAllergies").hide();
    return false;
}

function ClinicalFlags(ev) {
    AssignBannerClinicalFlags(ev);
    return false;
}
function AssignBannerClinicalFlags(ev) {
    $('#PatientClicinalFlags table tr td').find('[id*=lblacuity]').text('');
    $('#PatientClicinalFlags table tr td').find('[id*=lblstart]').text('');
    $('#PatientClicinalFlags table tr td').find('[id*=lblInfectuas]').text('');
    $('#PatientClicinalFlags table tr td').find('[id*=lblCentralinemonitoring]').text('');
    $('#PatientClicinalFlags table tr td').find('[id*=lblDrains]').text('');
    var patId = $('[id*=hdnOptPatientid]').val();
    var admnId = $('[id*=hdnOptAdmnID]').val();
    if (patId != "" && admnId != "") {
        GetAsync(
                    "PatientRegistration.asmx/Get_Patient_Clinical_Details",
                    { patId: patId, admnId: admnId },
                    function (jdata) {
                        var result = jdata.d;
                        if (jdata.d.length > 0) {
                            if (jdata.d[0]["Acuity"] == null && jdata.d[0]["NBM"] == null && jdata.d[0]["Infectuas"] == null && jdata.d[0]["Centralinemonitoring"] == null && jdata.d[0]["Centralinemonitoring"] == null) {
                                $(".stoast").toastText("Info", "No Clinical Flags Found!", 5, 2);
                                $("#PatientClicinalFlags").hide();
                            }
                            else {
                                $("#PatientClicinalFlags").show();
                                $('#PatientClicinalFlags table tr td').find('[id*=lblacuity]').text(jdata.d[0]["Acuity"] != null ? jdata.d[0]["Acuity"] : 'NO');
                                $('#PatientClicinalFlags table tr td').find('[id*=lblstart]').text(jdata.d[0]["NBM"] != null ? jdata.d[0]["NBM"] : 'NO');
                                $('#PatientClicinalFlags table tr td').find('[id*=lblInfectuas]').text(jdata.d[0]["Infectuas"] != null ? jdata.d[0]["Infectuas"] : 'NO');
                                $('#PatientClicinalFlags table tr td').find('[id*=lblCentralinemonitoring]').text(jdata.d[0]["Centralinemonitoring"] != null ? jdata.d[0]["Centralinemonitoring"] : 'NO');
                                $('#PatientClicinalFlags table tr td').find('[id*=lblDrains]').text(jdata.d[0]["Drains"] != null ? jdata.d[0]["Drains"] : 'NO');
                            }
                        }
                        else {
                            return false;
                        }
                    },
                    function (jqXHR, textStatus, errorThrown) {
                        $(".stoast").toastText("warning", errorThrown, 5, 3);
                    });
        return false;
    }
    else {
        if (admnId == '') {
            $(".stoast").toastText("warning", "This Patient Don't have Clinical Flags", 5, 3);
            return false;
        }
        if (patId == '') {
            $(".stoast").toastText("warning", "Please select UMR#!.", 5, 3);
            return false;
        }
    }
}
function HidePatientClicinalFlags() {
    $("#PatientClicinalFlags").hide();
    return false;
}

function PatOptionControl(admnid, patid, umrno) {
    $('[id*=hdnOptPatientid]').val(patid);
    $('[id*=hdnOptAdmnID]').val(admnid);
    $('[id*=hdnOptUmrNo]').val(umrno);
}

function OnLoadUploadPhoto(obj, type) {
    if (getParameterByName("MODE") != "VIEW" && getParameterByName("MODE") != "VIEW_OP") {
        var tdumr = $('[id*=tdUmrLookup] .lookuptextbox').attr('id'); var tdadmn_no = $('[id*=tdAdmnLookup] .lookuptextbox').attr('id');
        var UmrNo = document.getElementById(tdumr).value; var admn_no = document.getElementById(tdadmn_no).value;
        var cmp_id = $('[id*=hdnCompID]').val();
        var patype = 2;
        if (getParameterByName('VIEW') == 'Y') {
            obj.disabled = true;
        } else {
            if (UmrNo == "" || UmrNo == null || UmrNo == undefined) {
                $(".stoast").toastText("Alert", "Please select the UMR number!", 3, 2);
                return false;
            }
            if (type == 'L') {
                var flag = false;
                $('#divchecklist ul li').each(function () {
                    var checklist = $(this).closest('li').find('[id*=chklst]')[0].checked;
                    if (checklist == true) {
                        flag = true;
                        return false;
                    }
                });
                if (flag == false) {
                    $(".stoast").toastText("Alert", "Please Select atleast one CheckList", 3, 2);
                    return false;
                }
            }
            if (type == 'R') {
                GetAsync("Private/FrontOffice/OpBilling/OpConsultation1.aspx/setimgprecondition", { cmp_id: cmp_id, chklistid: 0 }, function () { }, function (jqXHR, textStatus, errorThrown) { });
            }
            window.open(_iniUrl + 'Private/FrontOffice/MultiFileupload/Upload.aspx?UmrNo=' + UmrNo + "&AdtNo=" + admn_no + '' + '', '' + '' + '', '' + 'fullscreen=no,maximize=1,top=0,left=0,right=0,bottom=0,toolbar=no,status=no,location=no,menubar=no,addressbar=no,address=no,scrollbar=no,width=500,height=650');
            return false;
        }
    }
}
function showchecklists() {
    CheckUploadPermissions();
    var cmp_id = $('[id*=hdnCompID]').val(); var getchklst = "";
    var tdumr = $('[id*=tdUmrLookup] .lookuptextbox').attr('id'); var tdadmn_no = $('[id*=tdAdmnLookup] .lookuptextbox').attr('id');
    var umr_no = document.getElementById(tdumr).value; var admn_no = document.getElementById(tdadmn_no).value;
    var pat_class_id = 1; var trn_src_id = $('[id*=hdntrnsourceid]').val();
    $('#gvchklistdtls tbody tr').remove();
    if (cmp_id > 0 || trn_src_id == '2') {
        $('[id*=divchecklist] ul li').remove(); chk_listID = [];
        GetOrgCheckLIsts(cmp_id, umr_no, pat_class_id, admn_no);
        $('[id*=divchecklist] ul li').each(function () {
            var chktypeid = $(this).find('[type=hidden][id*=hdnchklistypeid]').val();
            var chklistid = $(this).find('[id*=chklst]')[0].value;
            var chklstchecked = $(this).closest('li').find('input[id*=chklst]')[0].checked;
            var chklstdisabled = $(this).closest('li').find('input[id*=chklst]')[0].disabled;
            if (chklstchecked == true && chklstdisabled == true) { getchklst += chklistid + ','; }
            if (chktypeid == 1) {
                $(this).find('[id*=lblcolor]').attr('style', 'background-color:#AED75B');
            }
            if (chktypeid == 2) {
                $(this).find('[id*=lblcolor]').attr('style', 'background-color:#FFDAB9');
            }
            if (chktypeid == 3) {
                $(this).find('[id*=lblcolor]').attr('style', 'background-color:#FFC0CB');
            }
            if (chktypeid == 4) {
                $(this).find('[id*=lblcolor]').attr('style', 'background-color:#f84463');
            }
            if (chktypeid == 5) {
                $(this).find('[id*=lblcolor]').attr('style', 'background-color:#a3b9c7');
            }
            if (chktypeid == 6) {
                $(this).find('[id*=lblcolor]').attr('style', 'background-color:rgb(195, 12, 12)');
            }
            if ($(this).closest('li').find('input[id*=chklsthidden]').val() == 'Y') {
                $(this).find('[id*=lblcolor]').attr('style', 'background-color:#c0ffdc');
            }
        });
        if (getchklst != "") { getchklst = getchklst.substring(0, getchklst.length - 1); }
        showuploadchklsts(umr_no, admn_no, getchklst, cmp_id, "");
    }
}
function GetOrgCheckLIsts(cmp_id, umr_no, pat_class_id, admn_no) {
    if (parseInt(cmp_id) > 0) /* Company Patients Starts*/
    {
        GetNonAsync(
                    "PatientRegistration.asmx/Get_CheckList_Details",
                    { cmp_id: cmp_id, umr_no: umr_no, pat_class_id: pat_class_id, admn_no: admn_no },
                    function (res) {
                        var builder = '';
                        if (res.d == '' || res.d == "null") {
                            $(".stoast").toastText("warning", "Sorry No Letter Types mapped to this Company/TPA", 5, 3);
                            return false;
                        }
                        else {
                            $('[id*=pnlCheckLists]')[0].style.display = 'block'
                            for (var i = 1; i <= res.d.length; i++) {
                                if (res.d[i - 1].CHECKLIST_TYPE_ID == "6" && res.d[i - 1].UPLOAD_STATUS == "Y") {
                                    builder += "<li class=\"select\"><input type=\"checkbox\"  id=\"chklst_" + (i - 1) + "\" onclick=\"Chksrvtype(this)\" name=\"chklst_" + (i - 1) + "\"  value=\"" + res.d[i - 1].LTYPE_ID + "\" /><input type=\"hidden\"  id=\"chklsthidden_" + (i - 1) + "\"  value=\"" + res.d[i - 1].CHK_LIST_STATUS + "\"/><input type=\"hidden\"  id=\"chklistcolor_" + (i - 1) + "\"  value=\"" + res.d[i - 1].STATUS_REASON + "\"/><input type=\"hidden\"  id=\"bill_chk_list_id_" + (i - 1) + "\" name=\"bill_chk_list_id_" + (i - 1) + "\" value=\"" + res.d[i - 1].BILL_CMP_CHECKLIST_ID + "\"/>&nbsp;<span id=\"lblcolor_" + (i - 1) + "\">" + res.d[i - 1].LTYPE_NAME + "</span><input type=\"hidden\"  id=\"hdnchklistypeid_" + (i - 1) + "\"  value=\"" + "6" + "\"/><span><input type=\"text\" placeholder='Remarks'  id=\"txtremarks_" + (i - 1) + "\" value=\"" + res.d[i - 1].REMARKS + "\"/></span><input type=\"hidden\"  id=\"hdnremarks_" + (i - 1) + "\"  value=\"" + res.d[i - 1].REMARKS + "\"/></li>";
                                }
                                if (res.d[i - 1].CHECKLIST_TYPE_ID != "6" && res.d[i - 1].UPLOAD_STATUS == "N") {
                                    builder += "<li class=\"select\"><input type=\"checkbox\"  id=\"chklst_" + (i - 1) + "\" onclick=\"Chksrvtype(this)\" name=\"chklst_" + (i - 1) + "\"  value=\"" + res.d[i - 1].LTYPE_ID + "\" /><input type=\"hidden\"  id=\"chklsthidden_" + (i - 1) + "\"  value=\"" + res.d[i - 1].CHK_LIST_STATUS + "\"/><input type=\"hidden\"  id=\"chklistcolor_" + (i - 1) + "\"  value=\"" + res.d[i - 1].STATUS_REASON + "\"/><input type=\"hidden\"  id=\"bill_chk_list_id_" + (i - 1) + "\" name=\"bill_chk_list_id_" + (i - 1) + "\" value=\"" + res.d[i - 1].BILL_CMP_CHECKLIST_ID + "\"/>&nbsp;<span id=\"lblcolor_" + (i - 1) + "\">" + res.d[i - 1].LTYPE_NAME + "</span><input type=\"hidden\"  id=\"hdnchklistypeid_" + (i - 1) + "\"  value=\"" + res.d[i - 1].CHECKLIST_TYPE_ID + "\"/><span><input type=\"text\" placeholder='Remarks'  id=\"txtremarks_" + (i - 1) + "\" value=\"" + res.d[i - 1].REMARKS + "\"/></span><input type=\"hidden\"  id=\"hdnremarks_" + (i - 1) + "\"  value=\"" + res.d[i - 1].REMARKS + "\"/></li>";
                                }
                            }
                        }
                        $('[id*=divchecklist] ul[id*=ul_chk_list1]').append(builder);
                        MaintainChklistChecked();
                    },
                function (jqXHR, textStatus, errorThrown) {
                    $(".stoast").toastText("warning", "Failed To Get List Details", 5, 3);
                });
    } /* Company Patients Ends*/
    else/* Emergency Patients Starts*/
    {
        GetNonAsync(
                    "PatientRegistration.asmx/Get_Er_Checklist_Details",
                    {},
                    function (res) {
                        var builder = '';
                        if (res.d == '' || res.d == "null") {
                            $(".stoast").toastText("warning", "Sorry No Letter Types mapped to this Company/TPA", 5, 3);
                            return false;
                        }
                        else {
                            $('[id*=pnlCheckLists]')[0].style.display = 'block'
                            for (var i = 1; i <= res.d.length; i++) {
                                builder += "<li class=\"select\" onclick=\"Chksrvtype(this)\"><input type=\"checkbox\"  id=\"chklst_" + (i - 1) + "\" name=\"chklst_" + (i - 1) + "\"  value=\"" + res.d[i - 1].LTYPE_ID + "\" /><input type=\"hidden\"  id=\"hdnchklistypeid_" + (i - 1) + "\"  value=\"" + res.d[i - 1].CHECKLIST_TYPE_ID + "\"/><input type=\"hidden\"  id=\"chklsthidden_" + (i - 1) + "\"  value=\"" + res.d[i - 1].CHK_LIST_STATUS + "\"/><input type=\"hidden\"  id=\"chklistcolor_" + (i - 1) + "\"  value=\"" + res.d[i - 1].STATUS_REASON + "\"/><input type=\"hidden\"  id=\"bill_chk_list_id_" + (i - 1) + "\" name=\"bill_chk_list_id_" + (i - 1) + "\" value=\"" + res.d[i - 1].BILL_CMP_CHECKLIST_ID + "\"/>&nbsp;<span id=\"lblcolor_" + (i - 1) + "\">" + res.d[i - 1].LTYPE_NAME + "</span><span><input type=\"text\" placeholder='Remarks'  id=\"txtremarks_" + (i - 1) + "\" /></span><input type=\"hidden\"  id=\"hdnremarks_" + (i - 1) + "\"  value=\"" + res.d[i - 1].REMARKS + "\"/></li>";
                            }
                        }
                        $('[id*=divchecklist] ul[id*=ul_chk_list1]').append(builder);
                        MaintainChklistChecked();
                    },
                function (jqXHR, textStatus, errorThrown) {
                    $(".stoast").toastText("warning", "Failed To Get List Details", 5, 3);
                });

    } /* Emergency Patients Ends*/
}
var chk_listID = [];
function MaintainChklistChecked() {
    $('[id*=divchecklist] ul[id*=ul_chk_list1] li').each(function () {
        if ($(this).closest('li').find('input[id*=chklsthidden]').val() == 'Y') {
            $(this).closest('li').find('input[id*=chklst]')[0].checked = true;
            chk_listID += $(this).closest('li').find('input[id*=bill_chk_list_id]')[0].value + ',';
            $(this).closest('li').find('input[id*=chklst]').prop('disabled', 'true');
            $(this).closest('li').find('input[id*=txtremarks]').attr('disabled', true);
        }
    });
    if (chk_listID.length > 0) { chk_listID = chk_listID.substring(0, chk_listID.length - 1); }
}
function Chksrvtype(obj) {
    var cmp_id = $('[id*=hdnCompID]').val(); var remarks = '';
    var tdumr = $('[id*=tdUmrLookup] .lookuptextbox').attr('id'); var tdadmn_no = $('[id*=tdAdmnLookup] .lookuptextbox').attr('id');
    var Umr_No = document.getElementById(tdumr).value; ; var admn_no = document.getElementById(tdadmn_no).value;
    $('#gvchklistdtls tbody tr').remove(); var chklistid = "";
    var chklst = $(obj)[0].checked;
    $('[id*=divchecklist] ul[id*=ul_chk_list1] li').each(function () {
        var chkval = $(this).find('[id*=chklst]').val();
        if ($(this).find('[id*=chklst]')[0].checked == true) {
            chklistid += chkval + ',';
        }
        if ($(this).find('[id*=chklst]')[0].disabled == false)
            $(this).find('[id*=chklst]')[0].checked = false;
    });
    chklistid = chklistid.substring(0, chklistid.length - 1);
    if (chklst == true) { $(obj)[0].checked = true; } else { $(obj)[0].checked = false; }
    var sessionchklst = $(obj)[0].value;
    GetAsync("Private/FrontOffice/OpBilling/OpConsultation1.aspx/setimgprecondition", { cmp_id: cmp_id, chklistid: sessionchklst }, function () { }, function (jqXHR, textStatus, errorThrown) { });
    showuploadchklsts(Umr_No, admn_no, chklistid, cmp_id, remarks);
}
function showuploadchklsts(Umr_No, admn_no, chklistid, cmp_id, remarks) {
    GetAsync(
                "Private/Corporate/NewCorporateStatements.aspx/ViewDownLoadDocument",
                { Umr_No: Umr_No, Admn_No: admn_no, chklistid: chklistid, cmp_id: cmp_id },
                function (data) {
                    var objdata = jQuery.parseJSON(data.d[1]);
                    for (i = 0; i < objdata.length; i++) {
                        var createdt = new Date(objdata[i].CREATE_DT).format('dd-MMM-yyyy');
                        fn_AddFilterRowCheckList(admn_no, objdata[i].IMAGE_URL, objdata[i].CHECKLIST_NAME, objdata[i].CREATE_BY, createdt);
                    }
                },
                function (jqXHR, textStatus, errorThrown) {
                });
}
function fn_AddFilterRowCheckList(admn_no, doc_name, chklst_name, createby, createdt) {
    var gvchklistdtls = document.getElementById('gvchklistdtls');
    var rowIndex = gvchklistdtls.rows.length;
    var gridindex = 1;
    var newRow = gvchklistdtls.insertRow(rowIndex);
    $('table[id*=gvchklistdtls] tbody').append(newRow);
    if (rowColor == 0) {
        newRow.className = 'gridAlternaterow'
        rowColor++;
    }
    else {
        newRow.className = 'gridrow'
        rowColor = 0;
    }

    var newCell = newRow.insertCell(0);
    var lblSNo = document.createElement('label');
    lblSNo.id = 'lblSNo' + index;
    lblSNo.innerHTML = rowIndex;
    newCell.appendChild(lblSNo);

    newCell = newRow.insertCell(1);
    var lbladmnno = document.createElement('span');
    lbladmnno.id = 'lbladmnno' + index;
    lbladmnno.innerHTML = admn_no;
    newCell.appendChild(lbladmnno);

    newCell = newRow.insertCell(2);
    var lbldocname = document.createElement('span');
    lbldocname.id = 'lbldocname' + index;
    lbldocname.innerHTML = doc_name;
    newCell.appendChild(lbldocname);

    newCell = newRow.insertCell(3);
    var chklstname = document.createElement('span');
    chklstname.id = 'chklstname ' + index;
    chklstname.innerHTML = chklst_name;
    newCell.appendChild(chklstname);

    newCell = newRow.insertCell(4);
    var lblcreateby = document.createElement('span');
    lblcreateby.id = 'lblcreateby' + index;
    lblcreateby.innerHTML = createby;
    newCell.appendChild(lblcreateby);

    newCell = newRow.insertCell(5);
    var lblcreatedt = document.createElement('span');
    lblcreatedt.id = 'lblcreatedt' + index;
    lblcreatedt.innerHTML = createdt;
    newCell.appendChild(lblcreatedt);

    index++;
}
var chkvalue = []; var remarks = '';
function MaintainChkListId() {
    remarks = '';
    var _xmlRoot = ''; var tdumr = $('[id*=tdUmrLookup] .lookuptextbox').attr('id');
    var umrno = document.getElementById(tdumr).value;
    var admn_id = $('[id*=hdnAdmnid]').val();
    var Tran_src_id = $('[id*=hdntrnsourceid]').val();
    if (Tran_src_id == '2') {
        _xmlRoot += "<root>";
        $('[id*=divchecklist] ul[id*=ul_chk_list1] li').each(function () {
            if ($(this).closest('li').find('input[id*=chklst]')[0].checked == true) {
                chkvalue += $(this).closest('li').find('input[id*=chklst]')[0].value + ',';
                remarks += $(this).closest('li').find('input[id*=txtremarks]').val() + ',';
                var chktypeid = $(this).find('[type=hidden][id*=hdnchklistypeid]').val();
                if (remarks_type != '') {
                    _xmlRoot += "<FO_BILL_CMP_CHECKLIST ";
                    _xmlRoot += " BILL_CMP_CHECKLIST_ID=$" + 0 + "$";
                    _xmlRoot += " BILL_CMP_CHECKLIST_REV_NO=$" + "1" + "$";
                    _xmlRoot += " CHECKLIST_ID=$" + chkvalue + "$";
                    _xmlRoot += " SUBMITTED_FLAG=$" + "E" + "$";
                    _xmlRoot += " ADMN_ID=$" + admn_id + "$";
                    _xmlRoot += " BILL_ID=$" + "0" + "$";
                    _xmlRoot += " UMR_NO=$" + umrno + "$";
                    _xmlRoot += " CHECKLIST_TYPE_ID=$" + chktypeid + "$";
                    _xmlRoot += " REMARKS=$" + remarks + "$";
                    _xmlRoot += " />";
                }
            }
        });
        _xmlRoot += "</root>";
        GetAsync(
                    "PatientRegistration.asmx/Remarks_upload",
                    { _xml: _xmlRoot },
                    function (JData) {
                    },
                    function (jqXHR, textStatus, errorThrown) {
                        $(".smessagebox").scustommessagebox(1, "Success", "Failed To Save Remarks", ReportNoalertFaceSheet, '');
                    });

    }
    SaveCmpChecklists();
    $('[id*=pnlCheckLists]')[0].style.display = 'none'
}
function SaveCmpChecklists() {
    var tdumr = $('[id*=tdUmrLookup] .lookuptextbox').attr('id'); var umr_no = document.getElementById(tdumr).value;
    var _xmlStr = "<root>";
    $('[id*=divchecklist] ul li').each(function () {
        var chklstchecked = $(this).closest('li').find('input[id*=chklst]')[0].checked;
        var chklstdisabled = $(this).closest('li').find('input[id*=chklst]')[0].disabled;
        var admn_id = $('[id*=hdnAdmnid]').val();
        if (chklstchecked == true && chklstdisabled == false) {
            var chklistid = $(this).closest('li').find('input[id*=chklst]')[0].value;
            var remarks = ReplaceSplCharactor($(this).closest('li').find('input[id*=txtremarks]').val());
            var chktypeid = $(this).find('[type=hidden][id*=hdnchklistypeid]').val();
            _xmlStr += "<FO_BILL_CMP_CHECKLIST ";
            _xmlStr += " BILL_CMP_CHECKLIST_ID=$" + 0 + "$";
            _xmlStr += " BILL_CMP_CHECKLIST_REV_NO=$" + "1" + "$";
            _xmlStr += " CHECKLIST_ID=$" + chklistid + "$";
            _xmlStr += " ADMN_ID=$" + admn_id + "$";
            _xmlStr += " BILL_ID=$" + "0" + "$";
            _xmlStr += " UMR_NO=$" + umr_no + "$";
            _xmlStr += " CHECKLIST_TYPE_ID=$" + chktypeid + "$";
            _xmlStr += " REMARKS=$" + remarks + "$";
            _xmlStr += " />";
        }
    });
    _xmlStr += "</root>";
    GetNonAsync(
        "CreditOrgService.asmx/SaveCmpCheckLists",
        { xml: _xmlStr },
        function (data) {
            if (data.d != "" && data.d != null && data.d != undefined)
                $(".stoast").toastText("Info", "Check Lists Saved Successfully", 3, 1);
        },
        function (jqXHR, textStatus, errorThrown) {
            $(".stoast").toastText("warning", "Failed to Save.Please Contact Administrator!", 5, 3);
        });
}
function CheckUploadPermissions() {
    if ($('[id*=hdncorpupload]').val() == "Y" && $('[id*=hdncorpdownload').val() == "Y") {
        $('[id*=pnlCheckLists]').find('[id*=lettypeupload]').css('display', 'block');
        $('[id*=pnlCheckLists]').find('[id*=lettypedownload]').css('display', 'block');
    } else if ($('[id*=hdncorpupload]').val() == "Y" && $('[id*=hdncorpdownload').val() == "N") {
        $('[id*=pnlCheckLists]').find('[id*=lettypeupload]').css('display', 'block');
        $('[id*=pnlCheckLists]').find('[id*=lettypedownload]').css('display', 'none');
    } else if ($('[id*=hdncorpupload]').val() == "N" && $('[id*=hdncorpdownload').val() == "Y") {
        $('[id*=pnlCheckLists]').find('[id*=lettypeupload]').css('display', 'none');
        $('[id*=pnlCheckLists]').find('[id*=lettypedownload]').css('display', 'block');
    } else {
        $('[id*=pnlCheckLists]').find('[id*=lettypeupload]').css('display', 'none');
        $('[id*=pnlCheckLists]').find('[id*=lettypedownload]').css('display', 'none');
    }
}
function IconsVisibleValidation(TempData) {
    GetAsync(
                "Private/FrontOffice/OPDBILLNEW.aspx/IconsVisibleValidation",
                { _TempData: 's' },
                function (Data) {
                    if (Data.d != null) {
                        if (Data.d != null && Data.d != undefined && Data.d != "" && Data.d != "[]") {
                            DataBind(Data.d);
                            return false;
                        }
                    }
                });
}
function DataBind(data) {
    var res = jQuery.parseJSON(data);
    var colldata = [];
    if (res[0].ACCESS_ADD_DISABLE_LOGICAL_CD != null && res[0].ACCESS_ADD_DISABLE_LOGICAL_CD != '' && res[0].ACCESS_ADD_DISABLE_LOGICAL_CD != undefined) {
        for (var i = 0; i < TempData.length; i++) {
            colldata = res[0].ACCESS_ADD_DISABLE_LOGICAL_CD.split(",")
            for (var j = 0; j < colldata.length; j++) {
                if (TempData[i] == colldata[j].trim()) {
                    if ($('.icons li')[i] != undefined) {
                        $('.icons li')[i].style.display = "none";
                        break;
                    }
                    else
                        break;
                }
                else {
                    if ($('.icons li')[i] != undefined) {
                        $('.icons li')[i].style.display = "block";
                    }
                    else
                        break;
                }
            }
        }
    }
}

function OnLoadDownloadPhoto() {
    var id = $('[id*=tdUmrLookup] .lookuptextbox').attr('id'); var admnattrid = $('[id*=tdAdmnLookup] .lookuptextbox').attr('id');
    var Umr_No = document.getElementById(id).value; var admn_no = document.getElementById(admnattrid).value;
    var cmp_id = $('[id*=hdnCompID]').val();
    GetAsync(
                "Private/FrontOffice/IPBilling/Changes/NewCorporateIPFinalBilling.aspx/ViewDownLoadDocument",
                { Umr_No: Umr_No, Admn_No: admn_no, chklistid: "", cmp_id: cmp_id },
                function (data) {
                    ViewMyWindowCompany(data, Umr_No, admn_no);
                },
                function (jqXHR, textStatus, errorThrown) {
                });
    $('[id*=pnlCheckLists]')[0].style.display = 'none'
    return false;
}
function ViewMyWindowCompany(data, umrno, admn_no) {
    var gdata = jQuery.parseJSON(data.d[1]);
    $('#divimagescmp').show(); var b = '';
    var _dat = '<ul>';
    var _dat1 = '<ul>';
    if (data.d != null) {
        if (data.d.length > 0) {
            if (data.d[0] != '') {
                for (var i = 0; i < data.d[0].length; i++) {
                    var pathname = data.d[0][i].replace(/\\/g, "/");
                    pathname = pathname.split('/')[pathname.split('/').length - 1];
                    var ext = pathname.split('.')[1];
                    var filename = '';
                    if (admn_no != '') {
                        b = window.location.origin + "/" + window.location.pathname.split('/')[1] + "/" + "Private/FrontOffice/ImageViewer/material/original/" + admn_no + "/" + pathname;
                    } else {
                        b = window.location.origin + "/" + window.location.pathname.split('/')[1] + "/" + "Private/FrontOffice/ImageViewer/material/original/" + umrno + "/" + pathname;
                    }
                    if (pathname.length > 13)
                        filename = pathname.substring(0, 13) + '...';
                    else
                        filename = b.substring(b.lastIndexOf('/') + 1);

                    var path = b;
                    var src = path;
                    var createdt = new Date(jQuery.parseJSON(gdata[i].CREATE_DT.split('(')[1].split(')')[0])).format('dd-MMM-yyyy');
                    _dat += '<li><img id="imgview" onClick="Imageview(src);"  src="' + path + '" /><div class="right"><span>"' + createdt + "/" + gdata[i].CREATE_BY + '"</span><label>' + filename + '</label></div><div class="clr"></div></li>';

                }
                $('#divimagescmp').find('[id*=gallery]').html(_dat);
                $('#gallery1').html(_dat1);

            }
        }
    }
    return false;
}
function Imageview(obj) {
    var img = obj;
    var _data = '<ul>';
    _data += '<P><li><img id="imgview1" onClick="imgDownload(src);" style=\"height:380px;width:550px;\" src="' + img + '"' + '</li></P>';
    _data += '</ul>';
    $('#divimagecmp').html(_data);
}
function imgDownload(obj) {
    var href = obj;
    window.open(href);

}
function closefiles() {
    $('#divimages').hide();
    return false;
}
function closefilescmp() {
    $('#divimagescmp').hide();
    return false;
}


function AccessOPTIONSAddDisableAttributes() {

    var count = 0;
    var hdnAddDisableAttr = $('[id$=hdnoptAddDisableAttr]').val();
    if (hdnAddDisableAttr != "" && hdnAddDisableAttr != undefined && hdnAddDisableAttr != null) {
        var regDoc = hdnAddDisableAttr.split(',');
        for (var i = 0; i < regDoc.length; i++) {
            var docIds = regDoc[i].toUpperCase().trim();
            switch (docIds) {
                case "LIPATALLERGIES":
                    $('[id$=lipatallergies]').hide();
                    break;
                case "LIPATADDRESS":
                    $('[id$=lipataddress]').hide();
                    break;
                case "LIPATTAG":
                    $('[id$=lipattag]').hide();
                    break;
                case "LIPATHISTORY":
                    $('[id$=lipathistory]').hide();
                    break;
                case "LIPATNOTIFICATION":
                    $('[id$=lipatnotification]').hide();
                    break;
                case "CLINICALFLAGS":
                    $('[id$=clinicalflags]').hide();
                    break;
                case "REGFACESHEETRPT":
                    $('[id$=regfacesheetrpt]').hide();
                    break;
                case "REGCARDRPT":
                    $('[id$=regcardrpt]').hide();
                    break;
                case "LIUPLOAD":
                    $('[id$=liupload]').hide();
                    break;
                case "LIVIEW":
                    $('[id$=liview]').hide();
                    break;
                case "LIDOWNLOAD":
                    $('[id$=lidownload]').hide();
                    break;
                default:
                    break;
            }
        }
    }
}
