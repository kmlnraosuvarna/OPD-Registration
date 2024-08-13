
var _curSessionID = '';
$(document).keydown(function (event) {
    var devTool = $('#ctl00_hdndevtool').val();
    if (devTool == '' || devTool == null || devTool == undefined) devTool = 'N';
    if (devTool == 'N' || devTool == 'n') {
        if (event.keyCode == 123)
            return false;
        else if (event.ctrlKey && event.shiftKey && event.keyCode == 73)
            return false;
    }
});
window.onload = function () {
    var devTool = $('#ctl00_hdndevtool').val();
    if (devTool == '' || devTool == null || devTool == undefined) devTool = 'N';
    if (devTool == 'N' || devTool == 'n') {
        document.oncontextmenu = new Function("return false");
    }
}
$.fn.scustommessageboxThumb = function (_Type, headerText, bodyText, yesCallBack, callBackParamList, noCallBack, ThumbCallBack) {
    if ($(this).length > 0)
        $(this).remove();

    var _ybtnText; var _nbtnText = ""; var _ThumbKeyUse = "";
    if (_Type == 1) {
        _ybtnText = "Ok";
        _nbtnText = "Cancel";
    }
    else if (_Type == 9) {
        _ybtnText = "Yes";
        _nbtnText = "No";
        _ThumbKeyUse = "Thumb";
    }
    else {
        _ybtnText = "Yes";
        _nbtnText = "No";
    }
    var _html = "";
    if (_Type == 9) {
        _html = '<div class="smessagebox"><div class="promptmask"></div><div class="prompt" ><h1></h1><div><i class="icon-check-1"></i><h2></h2></div><button id="syesbutton">' + _ybtnText + '</button><button id="snobutton">' + _nbtnText + '</button><button id="sThumbbutton">' + _ThumbKeyUse + '</button></div></div>';
    }
    else {
        _html = '<div class="smessagebox"><div class="promptmask"></div><div class="prompt" ><h1></h1><div><i class="icon-check-1"></i><h2></h2></div><button id="syesbutton">' + _ybtnText + '</button><button id="snobutton">' + _nbtnText + '</button></div></div>';
    }

    $("body").append(_html);
    $(".smessagebox h1").html(headerText);
    $(".smessagebox h2").html(bodyText);
    $(".smessagebox #syesbutton").bind("click", function () {
        if (callBackParamList != '')
            yesCallBack(callBackParamList);
        else
            yesCallBack();
        $(".smessagebox *").unbind(); $(".smessagebox").hide(); $(".smessagebox").remove();
    });
    $(".smessagebox #sThumbbutton").bind("click", function () {
        if (callBackParamList != '')
            ThumbCallBack(callBackParamList);
        else
            ThumbCallBack();
        $(".smessagebox *").unbind(); $(".smessagebox").hide(); $(".smessagebox").remove();
    });
    if (typeof noCallBack == "function") {
        $(".smessagebox #snobutton").bind("click", function () {
            noCallBack(); $(".smessagebox *").unbind();
            $(".smessagebox").hide();
            $(".smessagebox").remove();
        });
    }
    else {
        $(".smessagebox #snobutton").hide();
    }

};
$(window).on('focus', function (e) {
    var desc = document.title;
    if ($('[id*=hdnSessionDocId]').val() != '' && $('[id*=hdnSessionDocId]').val() != '0'
            && $('[id*=hdnSessionSubModId]').val() != '' && $('[id*=hdnSessionSubModId]').val() != '0'
            && $('[id*=hdnSessionModId]').val() != '' && $('[id*=hdnSessionModId]').val() != '0') {
        var docid = $('[id*=hdnSessionDocId]').val();
        var submodid = $('[id*=hdnSessionSubModId]').val();
        var modid = $('[id*=hdnSessionModId]').val();
        ManageSessions(docid, submodid, modid);
    }
    else {

    }
    MySessionCheck();
});
function ManageSessions(docid, submodid, modid) {
    $.ajax({
        type: "POST",
        url: _iniUrl + 'Private/FrontOffice/Registrations.aspx/SessionManage',
        data: "{'docid': '" + docid + "','submodid': '" + submodid + "','modid': '" + modid + "'}",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        error: function (jqXHR, textStatus, errorThrown) { },
        success: function (res) {

        }
    });
}
function ButtonsDisplay(Buttons) {

    $.each(Buttons[0].childNodes, function (k, l) {
        if (l.title.toUpperCase().indexOf('EDIT') != -1 || l.title.toUpperCase().indexOf('APPROVE') != -1 || l.title.toUpperCase().indexOf('CANCEL') != -1 || l.title.toUpperCase().indexOf('DELETE') != -1) {
            l.style.display = 'none';
        }
    });



}
var _pFix = '#ctl00_ContentPlaceHolder1_';
var _commonCph = "ctl00_ContentPlaceHolder1_";
var _sessionID = 0;
function ConfirmationRequiredFor_message(obj, param, message) {
    var SaveAlert = document.getElementById(obj);
    $(".smessagebox").scustommessagebox(1, "", message, OnsuccesssaveConfirmation_message, param);
}
function OnsuccesssaveConfirmation_message() {
    var origin = window.location.origin;
    var _url = window.location.pathname.split('/')[1];
    window.location = origin + '/' + _url + '/Default.aspx';
    return false;
}
function MySessionCheck() {
//    GetNonAsync("Private/FrontOffice/Registrations.aspx/LocalStorageSession",
//            { ID: 1 },
//            function (jdata) {

//                if (jdata != '' && jdata != null && jdata != undefined) {
//                    if (jdata.d == '' || jdata.d == null || jdata.d == undefined) { jdata.d = 0; }
//                    if (localStorage.hmodule == '' || localStorage.hmodule == null || localStorage.hmodule == undefined) { localStorage.hmodule = ''; }
//                    if (localStorage.hdocument == '' || localStorage.hdocument == null || localStorage.hdocument == undefined) { localStorage.hdocument = ''; }
//                    _curSessionID = jdata.d;
//                    if (_sessionID == 0) {
//                        _sessionID = _curSessionID;
//                    }
//                    if (_sessionID != jdata.d) {
//                        $("#MySessionExpired").show();
//                        ClearBrowserHistory();
//                        __doPostBack('ctl00$lnkLogout', '');
//                        return false;
//                    }
//                    else {
//                        if (localStorage.hmodule == '' && localStorage.hdocument == '' && parseInt(jdata.d) == 0) {
//                            $("#MySessionExpired").show();
//                            ClearBrowserHistory();
//                            __doPostBack('ctl00$lnkLogout', '');
//                            return false;
//                        }
//                    }
//                }
//            },
//            function () {
//            });
}

$(window).on("storage", function (e) {
    if (_curSessionID != "0") {
        MySessionCheck();
    }
});
function UpdateSessionDoc() {
    document.getElementById('ctl00_hdndocsessionid').value = sessionStorage.docc_id;
    document.getElementById('ctl00_hdnmodulesessionid').value = sessionStorage.modulesession_id;
    document.getElementById('ctl00_hdnsubmodulesessionid').value = sessionStorage.submodulesession_id;
    var doc_id = document.getElementById('ctl00_hdndocsessionid').value;
    var modulesession_id = document.getElementById('ctl00_hdnmodulesessionid').value;
    var submodulesession_id = document.getElementById('ctl00_hdnsubmodulesessionid').value;
    GetNonAsync(
                    "Private/Corporate/Changes/CorpRegandRefLetterList.aspx/UpdateSessionDocId",
                    { docid: doc_id, modulesession_id: modulesession_id, submodulesession_id: submodulesession_id },
                    function (jdata) {
                    },
                    function () {
                    });
}
function ClickNavigation(link) {
    window.open(link);
}
function onDocsucess(result) {
    var gridService = document.getElementById('ctl00_gridDocsAvilability');
    $("table[id$=gridDocsAvilability] tr:has(td)").each(function () {
        $(this).closest('tr').remove();
    });
    if (result != null) {

        for (var i = 0; i < result.length; i++) {
            if (i == 0 && gridService.rows.length - 1 == 1) {
                $('table[id$=gridDocsAvilability] tr:has(td)').each(function (e) {
                    $(this).closest('tr').find('[id*=DoctorName]').text(result[i].DOCTOR_NAME);
                    $(this).closest('tr').find('[id*=lblshift1]').text(result[i].SHIFT1);
                    $(this).closest('tr').find('[id*=lblShift2]').text(result[i].SHIFT2);
                    $(this).closest('tr').find('[id*=lblShift3]').text(resultd[i].SHIFT3);
                    return false;
                });
            }
            else {
                var sno = i + 1;
                fn_Add_Grid_Row(result[i].DOCTOR_NAME, result[i].SHIFT1, result[i].SHIFT2, result[i].SHIFT3);
            }

        }

    }
    return false;
}


function OnDocFailure(ex) { }
function DoctorShedule() {
    $find('ctl00_mdldiscreq').show();
    var date = document.getElementById('ctl00_hdnDate').value;
    var argument = document.getElementById('ctl00_hdnDate').value;
    CallBillsServer(argument);
}
function DoctorShed() {
    $('[id*=DivDoctors]').show();
    var _date = document.getElementById('ctl00_hdnDate').value;
    var argument = document.getElementById('ctl00_hdnDate').value;

    var param = param || {};
    param.dataKey = "";
    param.pageSize = 10;
    param.pageNum = 1;
    param.defaultWSParams = { date: _date };

    param.wsPath = "Private/dasboard.aspx/GetDocAvailability";
    param.wsFilterPath = "Private/module.aspx/GetDocAvailability";
    param.template = ["DOCTOR_NAME*DOCTOR_NAME"
                    , "SHIFT1*SHIFT1"
                    , "SHIFT2*SHIFT2"
                    , "SHIFT3*SHIFT3"];
    param.header = [{ col: "Doctor Name", sort: true, filter: true }
                    , { col: "Shift 1", sort: true, filter: true }
                    , { col: "shift 2", sort: true, filter: true }
                    , { col: "Shift 3", sort: true, filter: true}];

    param.enablePaging = false;
    param.enableTrace = false;
    param.enableFilter = false;
    param.enableCheckbox = false;
    param.enableSorting = true;
    param.RowNo = true;
    gridControl = $("#divAvailabilityDoctors").jtable(param);
}
function ClosingDoctorsPopup() {
    $('[id*=DivDoctors]').hide();
    return false;
}
function BillResponseHandler(result, context) {

    document.getElementById('ctl00_gridDocsAvilability').innerHTML = result;
}

var index = 0;
var compose_id = 0;

function fn_Add_Grid_Row(DOCTOR_NAMES, SHIFT1, SHIFT2, SHIFT3) {
    var rowIndex = 0;
    var rowColor = 0;
    var newCell = 0;
    var gvService = document.getElementById('ctl00_gridDocsAvilability');

    var rowIndex = gvService.rows.length;
    var newRow = gvService.insertRow(rowIndex);
    if (rowColor == 0) {
        newRow.className = 'gridAlternaterow'
        rowColor++;
    }
    else {
        newRow.className = 'gridrow'
        rowColor = 0;
    }

    newCell = newRow.insertCell(0);
    var DoctorName = document.createElement('label'); DoctorName.id = 'DoctorName' + index; DoctorName.innerHTML = DOCTOR_NAMES;
    newCell.appendChild(DoctorName);

    newCell = newRow.insertCell(1);
    var lblshift1 = document.createElement('label'); newCell.align = 'left'; lblshift1.id = 'lblshift1' + index; lblshift1.innerHTML = SHIFT1;
    newCell.appendChild(lblshift1);

    newCell = newRow.insertCell(2);
    var lblShift2 = document.createElement('label'); newCell.align = 'left'; lblShift2.id = 'lblShift2' + index; lblShift2.innerHTML = SHIFT2;
    newCell.appendChild(lblShift2);

    newCell = newRow.insertCell(3);
    var lblShift3 = document.createElement('label'); newCell.align = 'left'; lblShift3.id = 'lblShift3' + index; lblShift3.innerHTML = SHIFT3;
    newCell.appendChild(lblShift3);
    index++;
}
function OnLocationSelection() {

}
function countDown() {
}

function OnsucessMail(result) {

    if (result != null && result != '') {
        AlertRequest(result);
    }
}
function Onfail1(result) {
    if (result != null && result != '') {
        AlertRequest(result);
    }
}
function AlertRequest(Result) {
    $('#printpopup').show();
    if (Result[0].ADMN_NO == '') {
        document.getElementById('dispoptext').innerHTML = "You Got <b class='count'>&nbsp;1&nbsp;</b> New Message : " + "<br><b class='title'>Subject :-</b><br>" + Result[0].SUBJECT + " ";
    }
    else {
        document.getElementById('dispoptext').innerHTML = "You Got <b  class='count'>&nbsp;1&nbsp;</b>New Message : " + "<br><b class='title'>Subject :-</b><br>" + Result[0].SUBJECT + "  " + "For Admission No:-" + Result[0].ADMN_NO;
    }

    compose_id = Result[0].COMPOSE_ID;
}
function closemsgbox() {
    var MsgId = compose_id;
    if (MsgId != null && MsgId != undefined && MsgId != '') { MsgId = parseInt(MsgId); } else { MsgId = parseInt("0"); }
    GetAsync(
                    "DrugIndentService.asmx/UpdateDischargeFlagRaisingAlert",
                    { MessageId: MsgId },
                    function (jdata) {
                        OnsucessMail1(jdata.d);
                    },
                    function () {
                        Onfail11(data);
                    });
    $('#printpopup').hide();
    return false;
}

function OnsucessMail1(result) {
    if (result != null && result != '') {
        AlertRequest1(result);
    }
}
function AlertRequest1(Result) {
    $('#printpopup').hide();
}
function Onfail11(result) {
    $('#printpopup').hide();
    return false;
}

function PendingBTRCount() {
}
function Onsucess(result) {
    if (result != null && result != '') {
        if (result[0].COUNT != 0) {
            AlertReq(result);
        }
    }
}
function Onfail2(result) {
}
function AlertReq(Result) {
    $('#PendingCount').show();
    document.getElementById('dispoppendingcount').innerHTML = "Pending Bed Trnsf.Req Count :" + " " + Result[0].COUNT + " ";
}
function closePencntmsgbox() {
    $('#PendingCount').hide();
}

function RedirectBTRA() {

    $('#PendingCount').hide();
    window.location.replace(_iniUrl + 'Private/NurseStation/BedTransferRequestApproval.aspx');
    return false;

}

function OkMsgBox() {
    var _Url = window.location.host;
    var hostname = '/' + window.location.pathname.split('/')[1] + '/';
    var MainUrl = 'http://' + _Url + hostname + 'Private/MessageStation/MessagesView.aspx?id=' + compose_id;
    window.open(MainUrl);
}