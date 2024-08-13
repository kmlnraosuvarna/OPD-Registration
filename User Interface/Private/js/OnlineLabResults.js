




function getPatientDetails(patient_id) {
    var PATIENT_ID = patient_id;
    $.ajax({
        type: "POST",
        url: "OnlineLabResults_New.aspx/PatientDetails",
        data: "{'PATIENT_ID':'" + PATIENT_ID + "'}",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        Error: function (jqXHR, textStatus, errorThrown) { },
        success: function (Jdata) {
            var data = Jdata.d;
            $('#ctl00_ContentPlaceHolder1_lblpatient').text(Jdata.d[0][0].TITLEDESC + ' ' + Jdata.d[0][0].PATIENTNAME);
            $('#ctl00_ContentPlaceHolder1_lblwlm').text(Jdata.d[0][0].TITLEDESC + ' ' + Jdata.d[0][0].PATIENTNAME);
            $('#ctl00_ContentPlaceHolder1_lblumrno').text(Jdata.d[0][0].UMR_NO);
            $('#ctl00_ContentPlaceHolder1_lblage').text(Jdata.d[0][0].DISPLAY_AGE);
            $('#ctl00_ContentPlaceHolder1_lblgndr').text(Jdata.d[0][0].GENDERNAME);
            $('#ctl00_ContentPlaceHolder1_txtsid').text(Jdata.d[0][0].UMR_NO);
            $('#ctl00_lblwlm').text(Jdata.d[0][0].TITLEDESC + ' ' + Jdata.d[0][0].PATIENTNAME);
            $('#ctl00_logintime').text();
            Getbills();

        }
    });
}
function Getbills() {
    var _PATIENT_ID = getParameterByName('PatID');
    var _DOCTR_ID = $('#ctl00_ContentPlaceHolder1_hidenrfid').val();
    if (_PATIENT_ID == null || _PATIENT_ID == '') {
        _PATIENT_ID = _DOCTR_ID;
    }
    if (_DOCTR_ID == null || _DOCTR_ID == '') {
        _DOCTR_ID = 0;
    }
    var _Pagesize = 20000;
    var _Currentpage = 1;
    var _tr = '';
    var _FLAG = 'B', _PATCLSID = '';
    if ($('#rdBtnBill')[0].checked == true) {
        _FLAG = 'B'
    }
    if ($('#rdbtsrv')[0].checked == true) {
        _FLAG = 'S'
    }
    if ($('#rdbtnip')[0].checked == true) {

        _PATCLSID = 1;
    }
    if ($('#rdbtnop')[0].checked == true) {
        _PATCLSID = 2;
    }
    if ($('#ctl00_ContentPlaceHolder1_chkboth').prop('checked') == true) {
        _PATCLSID = 0;

    }
    $.ajax({

        type: "POST",
        url: "OnlineLabResults_New.aspx/Getbills",
        data: "{'PATIENT_ID':'" + _PATIENT_ID + "','DOCTR_ID':'" + 0 + "','Pagesize':'" + _Pagesize + "','Currentpage':'" + _Currentpage + "','FLAG':'" + _FLAG + " ','PATCLSID':'" + _PATCLSID + "'}",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        Error: function (jqXHR, textStatus, errorThrown) { },
        success: function (Jdata) {

            var data = Jdata.d;
            for (i = 0; i < data[0].length; i++) {
                if (_FLAG == 'B') {

                    _tr = '<tr><td>' + data[0][i].BILL_NO + '</td> <td>' + new Date(data[0][i].BILL_DT).format('dd-MMM-yyyy hh:ss tt') + '</td><td><input   type="button" id="btnTotal' + i + '" ' + ' data-patcls=' + '' + data[0][i].PATIENT_CLASS_ID + '' + ' data-bill_id=' + data[0][i].BILL_ID + ' data-Stat=' + "T" + '  onclick="GetServices(this)"  class="button" Value=' + data[0][i].COUNT + '></td> <td><input  type="button" id="btnCompleted' + i + '" ' + ' data-patcls=' + '' + data[0][i].PATIENT_CLASS_ID + '' + ' data-bill_id=' + data[0][i].BILL_ID + ' data-Stat=' + "C" + '  class="button" onclick="GetServices(this)"  Value=' + data[0][i].COMPLETED + ' ></td><td><input  type="button" id="btnPending' + i + '" ' + ' data-patcls=' + '' + data[0][i].PATIENT_CLASS_ID + '' + ' data-bill_id=' + data[0][i].BILL_ID + ' data-Stat=' + "P" + '  class="button" onclick="GetServices(this)" Value=' + data[0][i].PENDING + '><input type="hidden" id="hdngender" value=' + data[0][i].GENDER_ID + '><input type="hidden" id="hdnage" value=' + data[0][i].AGE + '><input type="hidden" id="hdnpatclsid" value=' + data[0][i].PATIENT_CLASS_ID + '><input type="hidden" id="hdndueamt" value=' + data[0][i].OUTSTANDING_DUE + '></td><td></td></tr>';
                    $('#Tblbills > tbody').append(_tr);
                }
                else {
                    _tr = '<tr> <td><input id="chksrv' + i + '"' + '  data-serviceid=' + data[0][i].SERVICE_ID + '  data-umrno=' + data[0][i].UMR_NO + '  data-bill_id=' + data[0][i].BILL_ID + '  data-patclsid=' + data[0][i].PATIENT_CLASS_ID + '   class="printparamdtls"   type="checkbox" ></td><td>' + data[0][i].SERVICE_NAME + '</td> <td>' + data[0][i].COUNT_DUMMY + '</td></tr>';
                    $('#tblGridsrv > tbody').append(_tr);


                }
            }
        }
    });
    gridviewScroll();
}



function GetServices(obj) {

    var _billid = obj.dataset.bill_id;
    var _patclsid = obj.dataset.patcls;
    var _flag = obj.dataset.stat;
    var _tr = '';
    $('#tblservice tr:has(td)').remove();
    $('#ctl00_ContentPlaceHolder1_colright').show();
    $.ajax({
        type: "POST",
        url: "OnlineLabResults_New.aspx/Getservicess",
        data: "{'billid':'" + _billid + "','patclsid':'" + _patclsid + "','flag':'" + _flag + "'}",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        Error: function (jqXHR, textStatus, errorThrown) { },
        success: function (Jdata) {
            var data = Jdata.d;
            for (i = 0; i < data[0].length; i++) {
                debugger;

                document.getElementById('ctl00_ContentPlaceHolder1_hdnbillid').value = data[0][0].BILL_ID;
                document.getElementById('ctl00_ContentPlaceHolder1_hdnadmnid').value = data[0][0].ADMN_ID;
                document.getElementById('ctl00_ContentPlaceHolder1_hdnresultid').value = data[0][0].RESULT_ID;
                document.getElementById('ctl00_ContentPlaceHolder1_hdnUMRNo').value = data[0][0].UMR_NO;
                document.getElementById('ctl00_ContentPlaceHolder1_hdnGenderId').value = data[0][0].GENDER_ID;
                document.getElementById('ctl00_ContentPlaceHolder1_hdnAge').value = data[0][0].AGE;
                debugger;
                document.getElementById('ctl00_ContentPlaceHolder1_hdnptclsid').value = data[0][0].PATIENT_CLASS_ID;
                document.getElementById('ctl00_ContentPlaceHolder1_hdnbillno').value = data[0][0].BILL_NO;

                _tr = '<tr> <td><input id="chksrv' + i + '" ' + 'data-Service_id=' + data[0][i].SERVICE_ID + '' + ' data-ishtml=' + data[0][i].IS_HTML + '  data-bill_id=' + data[0][i].BILL_ID + '' + ' data-srv_status=' + data[0][i].SERVICE_STATUS + '  data-result_no=' + data[0][i].RESULT_NO + '  data-umr_no=' + data[0][i].UMR_NO + '  data-gender_id=' + data[0][i].GENDER_ID + '  data-age=' + data[0][i].AGE + '  data-patclsid=' + data[0][i].PATIENT_CLASS_ID + '  data-resltid=' + data[0][i].RESULT_NO + '  data-admn_id=' + data[0][i].ADMN_ID + '  type="checkbox" class="printsrvcheckall" ><label for="chksrv' + i + '"></label></td><td>' + data[0][i].SERVICE_NAME + '</td> <td>' + data[0][i].SERVICE_STATUS_NAME + '</td> <td>' + data[0][i].MAX_REPORT_TIME + '</td></tr>';
                $('#tblservice > tbody').append(_tr);
            }
            gridviewScroll();

        }
    });

}


function EnableDisableControls(obj) {
    if (obj.value == "1") {
        $('#rdbtnop')[0].checked = false;
    }
    if (obj.value == "2") {
        $('#rdbtnip')[0].checked = false;
    }
    $('#Tblbills tr:has(td)').remove();
    $('#tblGridsrv tr:has(td)').remove();
    $('#ctl00_ContentPlaceHolder1_colright').hide();
    Getbills();
}

function Enabled(ev) {
    if (ev.checked == true) {
        $('#rdbtnop')[0].checked = false;
        $('#rdbtnip')[0].checked = false;
    }
    else {
        $('#rdbtnop')[0].checked = true;
    }
    $('#Tblbills tr:has(td)').remove();
    $('#tblGridsrv tr:has(td)').remove();
    $('#ctl00_ContentPlaceHolder1_colright').hide();
    Getbills();

}

function getbillsonflag(obj) {
    if (obj.value =="S") {
        $('#rdBtnBill')[0].checked = false;
        $('#div_Tblbills').css('display', 'none');
        $('#div_tblGridsrv').css('display', 'block');
        $('#ctl00_ContentPlaceHolder1_colright').hide();

    }

    if (obj.value =="B") {
        $('#rdbtsrv')[0].checked = false;
        $('#div_Tblbills').css('display', 'block');
        $('#div_tblGridsrv').css('display', 'none');
        $('#ctl00_ContentPlaceHolder1_colright').hide();
    }

    $('#Tblbills tr:has(td)').remove();
    $('#tblGridsrv tr:has(td)').remove();
    Getbills();
    return false;
}




function ClientCheck() {
    var IsShowSrvNmeHdr = 'Y';
    _srvids = '';
    _srvhtmlids = '';
    _culturesrvids = '';
    res_id = '';
    myresno = '';
    _radiology_servicessIds = '';
    _radiology_servicess_Html_Ids = '';
    if ($('#tblservice').find('input[type=checkbox][class=printsrvcheckall]:checked').length == 0) {
        alert("Select Atlest One Service");
        return false;
    }
    var _srvids = '';
    var _resultid,
        _referenceid,
        _umrno,
        _genderid,
        _age,
        pattype,
        _grouping,
        _lab_gtt,
        _ismethodvisible,
        _speciminvisible,
        _compcritval,
        _critval,
        _pckge_incldng_srvs = '';
    _srvhtmlids = '';
    _headvalue = '',
        _culturesrvids = '',
        _radiology_srv_ids = '',
        _radiology_srv_html_ids = '';
    var res_id = '';
    var admnid = '';
    var patclsid; var pattype;
    var _tid = '';
    $('#tblservice').find(".printsrvcheckall").each(function () {

        if ($(this)[0].checked) {
            if ($(this).data("ishtml").split(',')[0] == 'Y') {
                if ($(this).data("ishtml").split(',')[0] == 'Y') {
                    _radiology_srv_html_ids += $(this).data("service_id") + ",";
                }
                else {
                    _srvhtmlids += $(this).data("service_id") + ",";
                }
            }
            else if ($(this).data("ishtml").split(',')[1] == 'Y') {
                _culturesrvids += $(this).data("service_id") + ",";
            }
            else if ($(this).data("ishtml").split(',')[2] == 'Y') {
                _radiology_srv_ids += $(this).data("service_id") + ",";
            }
            else {
                if ($(this).data("service_id") != "")
                    _srvids += $(this).data("service_id") + ",";
                else
                    _srvids = "";
            }
            res_id += $(this).data("resltid") + ",";
            myresno += $(this).data("result_no") + ",";
        }

    });
    pattype = document.getElementById('ctl00_ContentPlaceHolder1_hdnptclsid').value;
    _resultid = document.getElementById('ctl00_ContentPlaceHolder1_hdnresultid').value;
    if (pattype == 1) {
        _referenceid = document.getElementById('ctl00_ContentPlaceHolder1_hdnadmnid').value;
        _tid = document.getElementById('ctl00_ContentPlaceHolder1_hdnimrid').value;
    }
    else {
        _referenceid = document.getElementById('ctl00_ContentPlaceHolder1_hdnbillid').value;
        _tid = document.getElementById('ctl00_ContentPlaceHolder1_hdnbillid').value;
    }
    _umrno = document.getElementById('ctl00_ContentPlaceHolder1_hdnUMRNo').value;
    var _resno = myresno;
    _genderid = document.getElementById('ctl00_ContentPlaceHolder1_hdnGenderId').value;
    _age = document.getElementById('ctl00_ContentPlaceHolder1_hdnAge').value;

    var BillNo = document.getElementById('ctl00_ContentPlaceHolder1_hdnbillno').value;
    var _dispatch = document.getElementById('ctl00_ContentPlaceHolder1_hdndispatch').value;
    var _docsign = document.getElementById('ctl00_ContentPlaceHolder1_hdndocsign').value;
    var srv = document.getElementById('ctl00_ContentPlaceHolder1_rdbDis_0');
    var grp = document.getElementById('ctl00_ContentPlaceHolder1_rdbDis_1');
    var all = document.getElementById('ctl00_ContentPlaceHolder1_rdbDis_2');
    if (srv.checked == true) {
        _grouping = srv.value;
    }
    else if (grp.checked == true) {
        _grouping = grp.value;
    }
    else {
        _grouping = all.value;
    }
    _lab_gtt = document.getElementById('ctl00_ContentPlaceHolder1_hdnLAB_GTT').value;
    _ismethodvisible = document.getElementById('ctl00_ContentPlaceHolder1_hdnWithoutmethod').value;
    _speciminvisible = document.getElementById('ctl00_ContentPlaceHolder1_hdnspeciminvisible').value;
    if (document.getElementById('ctl00_ContentPlaceHolder1_hdncritval').value == "True")
        _compcritval = "Y";
    else
        _compcritval = "N";

    if (document.getElementById('ctl00_ContentPlaceHolder1_hdncrit').value == "Y")
        _critval = "Y";
    else
        _critval = "N";
    var _todechosrvs = document.getElementById('ctl00_ContentPlaceHolder1_hdn2dechosrvs').value;
    var _culturesrvs = _culturesrvids;
    var ishead = document.getElementById('ctl00_ContentPlaceHolder1_rdbHeadDis_0');
    var isnothead = document.getElementById('ctl00_ContentPlaceHolder1_rdbHeadDis_1');
    var originel = 'N'; //document.getElementById('ctl00_ContentPlaceHolder1_hdnoriginel').value;
    var duplicate = 'N'; //document.getElementById('ctl00_ContentPlaceHolder1_hdnduplicate').value;
    var flag = '';
    if (originel == 'Y' && duplicate == 'Y') {
        if (document.getElementById('ctl00_ContentPlaceHolder1_rdodispatchreporttype_0').checked == true)
            flag = 'Y';
        else
            flag = 'N';
    }
    else {
        flag = '';
    }
    _headvalue = ishead.checked ? "Y" : "N";
    var host = window.location.origin;
    var _ui = window.location.href.split('/')[3]
    var _url = host + '/' + _ui + '/' + 'Private' + '/' + 'Laboratory' + '/' + 'RDR.Aspx?';

    if (_srvids != "" || _culturesrvids != "" || _radiology_srv_ids != "") {
        GetAsync(
                "Private/Patient/OnlineLabResults_New.aspx/CallingReport",
                { srvids: _srvids, resultid: res_id, referenceid: _referenceid, umrno: _umrno, genderid: _genderid, age: 0, pattype: pattype, grouping: _grouping, lab_gtt: _lab_gtt, ismethodvisible: _ismethodvisible, speciminvisible: _speciminvisible, compcritval: _compcritval, critval: _critval, resno: _resno, todechosrvs: _todechosrvs, culturesrvs: _culturesrvs, headvalue: _headvalue, Dispatch: _dispatch, Docsign: _docsign, billno: document.getElementById('ctl00_ContentPlaceHolder1_hdnbillno').value, _printflag: flag, tid: _tid, Radiology_Service_Ids: _radiology_srv_ids, pckge_incldng_srvs: _pckge_incldng_srvs },
                function (_path) {

                    if (_path.d == '1') {

                        $(".stoast").toastText("Warning", "Exceeded Maximum prints.Please Contact Administrator", 2, 3);
                        if (_srvhtmlids != "") {
                            for (var i = 0; i < _srvhtmlids.split(',').length; i++) {
                                if (_srvhtmlids.split(',')[i] != '') {
                                    window.open("RadiologyDispatchReport.aspx?UmrNo=" + _umrno + "&BillId=" + _referenceid + "&ResultId=" + 0 + "&ServiceIds=" + _srvhtmlids.split(',')[i] + "&GenderId=" + _genderid + "&Age=" + 0 + "&header=" + _headvalue + "&patid=" + pattype);
                                }
                            }
                        }
                        if (_radiology_srv_html_ids != "") {
                            for (var i = 0; i < _radiology_srv_html_ids.split(',').length; i++) {
                                if (_radiology_srv_html_ids.split(',')[i] != '') {
                                    if (document.getElementById('ctl00_ContentPlaceHolder1_hdnclientname').value.toUpperCase() == 'VIJAYA') {
                                        if (document.getElementById('ctl00_ContentPlaceHolder1_hdnqrcd').value == "Yes") {

                                            window.open("RDR_VIJAYA.Aspx?UmrNo=" + _umrno + "&BillId=" + _referenceid + "&ResultId=" + res_id + "&ServiceIds=" + _radiology_srv_html_ids.split(',')[i] + "&GenderId=" + _genderid + "&Age=" + 0 + "&header=" + _headvalue + "&patid=" + pattype + "&IS_SHOW_SRV_HDR=" + IsShowSrvNmeHdr + "&IS_RADIOLOGY=" + "Y" + "&IS_PRINT_TYPE=" + flag + "&BillNo=" + BillNo + "&Imr_id=" + _tid + "&service_status=" + "D");
                                        }

                                        else {
                                            window.open("RDR_VIJAYA.Aspx?UmrNo=" + _umrno + "&BillId=" + _referenceid + "&ResultId=" + res_id + "&ServiceIds=" + _radiology_srv_html_ids.split(',')[i] + "&GenderId=" + _genderid + "&Age=" + 0 + "&header=" + _headvalue + "&patid=" + pattype + "&IS_SHOW_SRV_HDR=" + IsShowSrvNmeHdr + "&IS_RADIOLOGY=" + "Y" + "&IS_PRINT_TYPE=" + flag + "&Imr_id=" + _tid + "&service_status=" + "D");
                                        }
                                    }
                                    else if (document.getElementById('ctl00_ContentPlaceHolder1_hdnclientname').value.toUpperCase() == 'MRRCH') {
                                        if (document.getElementById('ctl00_ContentPlaceHolder1_hdnqrcd').value == "Yes") {

                                            window.open("RDR_MRRCH.Aspx?UmrNo=" + _umrno + "&BillId=" + _referenceid + "&ResultId=" + res_id + "&ServiceIds=" + _radiology_srv_html_ids.split(',')[i] + "&GenderId=" + _genderid + "&Age=" + 0 + "&header=" + _headvalue + "&patid=" + pattype + "&IS_SHOW_SRV_HDR=" + IsShowSrvNmeHdr + "&IS_RADIOLOGY=" + "Y" + "&IS_PRINT_TYPE=" + flag + "&BillNo=" + BillNo + "&Imr_id=" + _tid + "&service_status=" + "D");
                                        }

                                        else {
                                            window.open("RDR_MRRCH.Aspx?UmrNo=" + _umrno + "&BillId=" + _referenceid + "&ResultId=" + res_id + "&ServiceIds=" + _radiology_srv_html_ids.split(',')[i] + "&GenderId=" + _genderid + "&Age=" + 0 + "&header=" + _headvalue + "&patid=" + pattype + "&IS_SHOW_SRV_HDR=" + IsShowSrvNmeHdr + "&IS_RADIOLOGY=" + "Y" + "&IS_PRINT_TYPE=" + flag + "&Imr_id=" + _tid + "&service_status=" + "D");
                                        }
                                    }
                                    else {

                                        if (document.getElementById('ctl00_ContentPlaceHolder1_hdnqrcd').value == "Yes") {

                                            window.open("RDR.Aspx?UmrNo=" + _umrno + "&BillId=" + _referenceid + "&ResultId=" + res_id + "&ServiceIds=" + _radiology_srv_html_ids.split(',')[i] + "&GenderId=" + _genderid + "&Age=" + 0 + "&header=" + _headvalue + "&patid=" + pattype + "&IS_SHOW_SRV_HDR=" + IsShowSrvNmeHdr + "&IS_RADIOLOGY=" + "Y" + "&IS_PRINT_TYPE=" + flag + "&BillNo=" + BillNo + "&Imr_id=" + _tid + "&service_status=" + "D");
                                        }

                                        else {
                                            window.open("RDR.Aspx?UmrNo=" + _umrno + "&BillId=" + _referenceid + "&ResultId=" + res_id + "&ServiceIds=" + _radiology_srv_html_ids.split(',')[i] + "&GenderId=" + _genderid + "&Age=" + 0 + "&header=" + _headvalue + "&patid=" + pattype + "&IS_SHOW_SRV_HDR=" + IsShowSrvNmeHdr + "&IS_RADIOLOGY=" + "Y" + "&IS_PRINT_TYPE=" + flag + "&Imr_id=" + _tid + "&service_status=" + "D");
                                        }

                                    }
                                }
                            }
                        }
                        return false;
                    }
                    else {
                        _path = _path.d;
                        for (var i = 0; i < _path.split(',').length; i++) {
                            if (_path.split(',')[i] != '') {
                                window.open(_path.split(',')[i]);

                            }
                        }
                        if (_srvhtmlids != "") {
                            for (var i = 0; i < _srvhtmlids.split(',').length; i++) {
                                if (_srvhtmlids.split(',')[i] != '') {

                                    window.open("RadiologyDispatchReport.aspx?UmrNo=" + _umrno + "&BillId=" + _referenceid + "&ResultId=" + 0 + "&ServiceIds=" + _srvhtmlids.split(',')[i] + "&GenderId=" + _genderid + "&Age=" + 0 + "&header=" + _headvalue + "&patid=" + pattype);
                                }
                            }
                        }
                        if (_radiology_srv_html_ids != "") {
                            for (var i = 0; i < _radiology_srv_html_ids.split(',').length; i++) {
                                if (_radiology_srv_html_ids.split(',')[i] != '') {

                                    if (document.getElementById('ctl00_ContentPlaceHolder1_hdnclientname').value.toUpperCase() == 'VIJAYA') {
                                        if (document.getElementById('ctl00_ContentPlaceHolder1_hdnqrcd').value == "Yes") {

                                            window.open("RDR_VIJAYA.Aspx?UmrNo=" + _umrno + "&BillId=" + _referenceid + "&ResultId=" + res_id + "&ServiceIds=" + _radiology_srv_html_ids.split(',')[i] + "&GenderId=" + _genderid + "&Age=" + 0 + "&header=" + _headvalue + "&patid=" + pattype + "&IS_SHOW_SRV_HDR=" + IsShowSrvNmeHdr + "&IS_RADIOLOGY=" + "Y" + "&IS_PRINT_TYPE=" + flag + "&BillNo=" + BillNo + "&Imr_id=" + _tid + "&service_status=" + "D");
                                        }

                                        else {
                                            window.open("RDR_VIJAYA.Aspx?UmrNo=" + _umrno + "&BillId=" + _referenceid + "&ResultId=" + res_id + "&ServiceIds=" + _radiology_srv_html_ids.split(',')[i] + "&GenderId=" + _genderid + "&Age=" + 0 + "&header=" + _headvalue + "&patid=" + pattype + "&IS_SHOW_SRV_HDR=" + IsShowSrvNmeHdr + "&IS_RADIOLOGY=" + "Y" + "&IS_PRINT_TYPE=" + flag + "&Imr_id=" + _tid + "&service_status=" + "D");
                                        }
                                    }
                                    else if (document.getElementById('ctl00_ContentPlaceHolder1_hdnclientname').value.toUpperCase() == 'MRRCH') {
                                        if (document.getElementById('ctl00_ContentPlaceHolder1_hdnqrcd').value == "Yes") {

                                            window.open("RDR_MRRCH.Aspx?UmrNo=" + _umrno + "&BillId=" + _referenceid + "&ResultId=" + res_id + "&ServiceIds=" + _radiology_srv_html_ids.split(',')[i] + "&GenderId=" + _genderid + "&Age=" + 0 + "&header=" + _headvalue + "&patid=" + pattype + "&IS_SHOW_SRV_HDR=" + IsShowSrvNmeHdr + "&IS_RADIOLOGY=" + "Y" + "&IS_PRINT_TYPE=" + flag + "&BillNo=" + BillNo + "&Imr_id=" + _tid + "&service_status=" + "D");
                                        }

                                        else {
                                            window.open("RDR_MRRCH.Aspx?UmrNo=" + _umrno + "&BillId=" + _referenceid + "&ResultId=" + res_id + "&ServiceIds=" + _radiology_srv_html_ids.split(',')[i] + "&GenderId=" + _genderid + "&Age=" + 0 + "&header=" + _headvalue + "&patid=" + pattype + "&IS_SHOW_SRV_HDR=" + IsShowSrvNmeHdr + "&IS_RADIOLOGY=" + "Y" + "&IS_PRINT_TYPE=" + flag + "&Imr_id=" + _tid + "&service_status=" + "D");
                                        }
                                    }
                                    else {

                                        if (document.getElementById('ctl00_ContentPlaceHolder1_hdnqrcd').value == "Yes") {

                                            window.open(_url + "UmrNo=" + _umrno + "&BillId=" + _referenceid + "&ResultId=" + res_id + "&ServiceIds=" + _radiology_srv_html_ids.split(',')[i] + "&GenderId=" + _genderid + "&Age=" + 0 + "&header=" + _headvalue + "&patid=" + pattype + "&IS_SHOW_SRV_HDR=" + IsShowSrvNmeHdr + "&IS_RADIOLOGY=" + "Y" + "&IS_PRINT_TYPE=" + flag + "&BillNo=" + BillNo + "&Imr_id=" + _tid + "&service_status=" + "D");
                                        }

                                        else {
                                            window.open(_url + "UmrNo=" + _umrno + "&BillId=" + _referenceid + "&ResultId=" + res_id + "&ServiceIds=" + _radiology_srv_html_ids.split(',')[i] + "&GenderId=" + _genderid + "&Age=" + 0 + "&header=" + _headvalue + "&patid=" + pattype + "&IS_SHOW_SRV_HDR=" + IsShowSrvNmeHdr + "&IS_RADIOLOGY=" + "Y" + "&IS_PRINT_TYPE=" + flag + "&Imr_id=" + _tid + "&service_status=" + "D");
                                        }

                                    }
                                }
                            }
                        }
                        return false;
                    }


                    if (_srvhtmlids != "") {
                        for (var i = 0; i < _srvhtmlids.split(',').length; i++) {
                            if (_srvhtmlids.split(',')[i] != '') {
                                window.open("RadiologyDispatchReport.aspx?UmrNo=" + _umrno + "&BillId=" + _referenceid + "&ResultId=" + 0 + "&ServiceIds=" + _srvhtmlids.split(',')[i] + "&GenderId=" + _genderid + "&Age=" + 0 + "&header=" + _headvalue + "&patid=" + pattype);
                            }
                        }
                    }
                    if (_radiology_srv_html_ids != "") {
                        for (var i = 0; i < _radiology_srv_html_ids.split(',').length; i++) {
                            if (_radiology_srv_html_ids.split(',')[i] != '') {

                                if (document.getElementById('ctl00_ContentPlaceHolder1_hdnclientname').value.toUpperCase() == 'VIJAYA') {
                                    if (document.getElementById('ctl00_ContentPlaceHolder1_hdnqrcd').value == "Yes") {

                                        window.open("RDR_VIJAYA.Aspx?UmrNo=" + _umrno + "&BillId=" + _referenceid + "&ResultId=" + res_id + "&ServiceIds=" + _radiology_srv_html_ids.split(',')[i] + "&GenderId=" + _genderid + "&Age=" + 0 + "&header=" + _headvalue + "&patid=" + pattype + "&IS_SHOW_SRV_HDR=" + IsShowSrvNmeHdr + "&IS_RADIOLOGY=" + "Y" + "&IS_PRINT_TYPE=" + flag + "&BillNo=" + BillNo + "&Imr_id=" + _tid + "&service_status=" + "D");
                                    }

                                    else {
                                        window.open("RDR_VIJAYA.Aspx?UmrNo=" + _umrno + "&BillId=" + _referenceid + "&ResultId=" + res_id + "&ServiceIds=" + _radiology_srv_html_ids.split(',')[i] + "&GenderId=" + _genderid + "&Age=" + 0 + "&header=" + _headvalue + "&patid=" + pattype + "&IS_SHOW_SRV_HDR=" + IsShowSrvNmeHdr + "&IS_RADIOLOGY=" + "Y" + "&IS_PRINT_TYPE=" + flag + "&Imr_id=" + _tid + "&service_status=" + "D");
                                    }
                                }
                                else if (document.getElementById('ctl00_ContentPlaceHolder1_hdnclientname').value.toUpperCase() == 'MRRCH') {
                                    if (document.getElementById('ctl00_ContentPlaceHolder1_hdnqrcd').value == "Yes") {

                                        window.open("RDR_MRRCH.Aspx?UmrNo=" + _umrno + "&BillId=" + _referenceid + "&ResultId=" + res_id + "&ServiceIds=" + _radiology_srv_html_ids.split(',')[i] + "&GenderId=" + _genderid + "&Age=" + 0 + "&header=" + _headvalue + "&patid=" + pattype + "&IS_SHOW_SRV_HDR=" + IsShowSrvNmeHdr + "&IS_RADIOLOGY=" + "Y" + "&IS_PRINT_TYPE=" + flag + "&BillNo=" + BillNo + "&Imr_id=" + _tid + "&service_status=" + "D");
                                    }

                                    else {
                                        window.open("RDR_MRRCH.Aspx?UmrNo=" + _umrno + "&BillId=" + _referenceid + "&ResultId=" + res_id + "&ServiceIds=" + _radiology_srv_html_ids.split(',')[i] + "&GenderId=" + _genderid + "&Age=" + 0 + "&header=" + _headvalue + "&patid=" + pattype + "&IS_SHOW_SRV_HDR=" + IsShowSrvNmeHdr + "&IS_RADIOLOGY=" + "Y" + "&IS_PRINT_TYPE=" + flag + "&Imr_id=" + _tid + "&service_status=" + "D");
                                    }
                                }
                                else {

                                    if (document.getElementById('ctl00_ContentPlaceHolder1_hdnqrcd').value == "Yes") {

                                        window.open("RDR.Aspx?UmrNo=" + _umrno + "&BillId=" + _referenceid + "&ResultId=" + res_id + "&ServiceIds=" + _radiology_srv_html_ids.split(',')[i] + "&GenderId=" + _genderid + "&Age=" + 0 + "&header=" + _headvalue + "&patid=" + pattype + "&IS_SHOW_SRV_HDR=" + IsShowSrvNmeHdr + "&IS_RADIOLOGY=" + "Y" + "&IS_PRINT_TYPE=" + flag + "&BillNo=" + BillNo + "&Imr_id=" + _tid + "&service_status=" + "D");
                                    }

                                    else {
                                        window.open("RDR.Aspx?UmrNo=" + _umrno + "&BillId=" + _referenceid + "&ResultId=" + res_id + "&ServiceIds=" + _radiology_srv_html_ids.split(',')[i] + "&GenderId=" + _genderid + "&Age=" + 0 + "&header=" + _headvalue + "&patid=" + pattype + "&IS_SHOW_SRV_HDR=" + IsShowSrvNmeHdr + "&IS_RADIOLOGY=" + "Y" + "&IS_PRINT_TYPE=" + flag + "&Imr_id=" + _tid + "&service_status=" + "D");
                                    }

                                }
                            }
                        }
                    }

                    return false;

                },
                function (jqXHR, textStatus, errorThrown) {
                });
    }
    else {
        if (_srvhtmlids != "") {
            for (var i = 0; i < _srvhtmlids.split(',').length; i++) {
                if (_srvhtmlids.split(',')[i] != '') {

                    window.open("RadiologyDispatchReport.aspx?UmrNo=" + _umrno + "&BillId=" + _referenceid + "&ResultId=" + 0 + "&ServiceIds=" + _srvhtmlids.split(',')[i] + "&GenderId=" + _genderid + "&Age=" + 0 + "&header=" + _headvalue + "&patid=" + pattype);
                }
            }
        }
        if (_radiology_srv_html_ids != "") {
            for (var i = 0; i < _radiology_srv_html_ids.split(',').length; i++) {
                if (_radiology_srv_html_ids.split(',')[i] != '') {

                    if (document.getElementById('ctl00_ContentPlaceHolder1_hdnclientname').value.toUpperCase() == 'VIJAYA') {
                        if (document.getElementById('ctl00_ContentPlaceHolder1_hdnqrcd').value == "Yes") {

                            window.open("RDR_VIJAYA.Aspx?UmrNo=" + _umrno + "&BillId=" + _referenceid + "&ResultId=" + res_id + "&ServiceIds=" + _radiology_srv_html_ids.split(',')[i] + "&GenderId=" + _genderid + "&Age=" + 0 + "&header=" + _headvalue + "&patid=" + pattype + "&IS_SHOW_SRV_HDR=" + IsShowSrvNmeHdr + "&IS_RADIOLOGY=" + "Y" + "&IS_PRINT_TYPE=" + flag + "&BillNo=" + BillNo + "&Imr_id=" + _tid + "&service_status=" + "D");
                        }

                        else {
                            window.open("RDR_VIJAYA.Aspx?UmrNo=" + _umrno + "&BillId=" + _referenceid + "&ResultId=" + res_id + "&ServiceIds=" + _radiology_srv_html_ids.split(',')[i] + "&GenderId=" + _genderid + "&Age=" + 0 + "&header=" + _headvalue + "&patid=" + pattype + "&IS_SHOW_SRV_HDR=" + IsShowSrvNmeHdr + "&IS_RADIOLOGY=" + "Y" + "&IS_PRINT_TYPE=" + flag + "&Imr_id=" + _tid + "&service_status=" + "D");
                        }
                    }
                    else if (document.getElementById('ctl00_ContentPlaceHolder1_hdnclientname').value.toUpperCase() == 'MRRCH') {
                        if (document.getElementById('ctl00_ContentPlaceHolder1_hdnqrcd').value == "Yes") {

                            window.open("RDR_MRRCH.Aspx?UmrNo=" + _umrno + "&BillId=" + _referenceid + "&ResultId=" + res_id + "&ServiceIds=" + _radiology_srv_html_ids.split(',')[i] + "&GenderId=" + _genderid + "&Age=" + 0 + "&header=" + _headvalue + "&patid=" + pattype + "&IS_SHOW_SRV_HDR=" + IsShowSrvNmeHdr + "&IS_RADIOLOGY=" + "Y" + "&IS_PRINT_TYPE=" + flag + "&BillNo=" + BillNo + "&Imr_id=" + _tid + "&service_status=" + "D");
                        }

                        else {
                            window.open("RDR_MRRCH.Aspx?UmrNo=" + _umrno + "&BillId=" + _referenceid + "&ResultId=" + res_id + "&ServiceIds=" + _radiology_srv_html_ids.split(',')[i] + "&GenderId=" + _genderid + "&Age=" + 0 + "&header=" + _headvalue + "&patid=" + pattype + "&IS_SHOW_SRV_HDR=" + IsShowSrvNmeHdr + "&IS_RADIOLOGY=" + "Y" + "&IS_PRINT_TYPE=" + flag + "&Imr_id=" + _tid + "&service_status=" + "D");
                        }
                    }
                    else {

                        if (document.getElementById('ctl00_ContentPlaceHolder1_hdnqrcd').value == "Yes") {

                            window.open(_url + "UmrNo=" + _umrno + "&BillId=" + _referenceid + "&ResultId=" + res_id + "&ServiceIds=" + _radiology_srv_html_ids.split(',')[i] + "&GenderId=" + _genderid + "&Age=" + 0 + "&header=" + _headvalue + "&patid=" + pattype + "&IS_SHOW_SRV_HDR=" + IsShowSrvNmeHdr + "&IS_RADIOLOGY=" + "Y" + "&IS_PRINT_TYPE=" + flag + "&BillNo=" + BillNo + "&Imr_id=" + _tid + "&service_status=" + "D");
                        }

                        else {

                            window.open(_url + "UmrNo=" + _umrno + "&BillId=" + _referenceid + "&ResultId=" + res_id + "&ServiceIds=" + _radiology_srv_html_ids.split(',')[i] + "&GenderId=" + _genderid + "&Age=" + 0 + "&header=" + _headvalue + "&patid=" + pattype + "&IS_SHOW_SRV_HDR=" + IsShowSrvNmeHdr + "&IS_RADIOLOGY=" + "Y" + "&IS_PRINT_TYPE=" + flag + "&Imr_id=" + _tid + "&service_status=" + "D");
                        }

                    }
                }
            }
        }
        return false;
    }

    return false;
}





function ClientCheck2() {
    var _service_ids = '';
    var _umr_no = '';
    var _bill_id = '';
    var patient_clss_id = '';
    document.getElementById('ctl00_ContentPlaceHolder1_hdnsrvids').value = '';

    if ($('#tblGridsrv').find('input[type=checkbox][class=printparamdtls]:checked').length == 0) {
        alert("Select Atlest One Service");
        return false;
    }
    else {


        _umr_no = $('#tblGridsrv').find('input[type=checkbox][class=printparamdtls]:checked')[0].dataset.umrno;
        document.getElementById('ctl00_ContentPlaceHolder1_hdnUMRNo').value = _umr_no;

        _bill_id = $('#tblGridsrv').find('input[type=checkbox][class=printparamdtls]:checked')[0].dataset.bill_id;

        patient_clss_id = $('#tblGridsrv').find('input[type=checkbox][class=printparamdtls]:checked')[0].dataset.patclsid;

        $('#tblGridsrv').find(".printparamdtls").each(function () {

            if ($(this)[0].checked) {
                if ($(this).data("serviceid") != "") {
                    document.getElementById('ctl00_ContentPlaceHolder1_hdnsrvids').value += $(this).data("serviceid") + ",";

                }
                else {
                    document.getElementById('ctl00_ContentPlaceHolder1_hdnsrvids').value = "";
                }

            }
        });


        //getparamdetails(_service_ids, _umr_no, _bill_id, patient_clss_id);

    }

}



function getparamdetails(_service_ids, _umr_no, _bill_id, patient_clss_id) {

    $.ajax({
        type: "POST",
        url: "OnlineLabResults_New.aspx/getparamdetails",
        data: "{'srv_id':'" + _service_ids + "','umr_no':'" + _umr_no + "','bill_id':'" + _bill_id + "','patcls_id':'" + patient_clss_id + "'}",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        Error: function (jqXHR, textStatus, errorThrown) { },
        success: function (Jdata) {
            var data = Jdata.d;
            debugger;
            localStorage.setItem('GetReport', data[0]);
            //            localStorage.setItem('ChartUmr', _umr_no.ToString());
            //            localStorage.setItem('SRVID', _service_ids.ToString());
            window.open("GetReport.aspx?SRV_ID=" + _service_ids + "umr_no=" + _umr_no + "patient_clss_id=" + patient_clss_id)
        }
    });

}




        