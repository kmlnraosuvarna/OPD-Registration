/*

    Common functionality for master page.

*/


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
    param.wsPath = "Private/module.aspx/GetDocAvailability";
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
    var str = "1";
    DrugIndentService.GetDischargeFlagRaisingAlert(str, OnsucessMail, Onfail1);
    SD = window.setTimeout("countDown();", 3000000);
    PendingBTRCount();
}

function OnsucessMail(result) {

    if (result != null && result != '') {
        AlertRequest(result);
    }
}
function Onfail1(result) {
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
    DrugIndentService.UpdateDischargeFlagRaisingAlert(MsgId, OnsucessMail1, Onfail11);
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
    DrugIndentService.GetPendingBTRCountAlert(Onsucess, Onfail2);
    SD = window.setTimeout("PendingBTRCount();", 300000);
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
    window.location.replace('../Private/NurseStation/BedTransferRequestApproval.aspx');
}

function OkMsgBox() {
    var _Url = window.location.host;
    var hostname = '/' + window.location.pathname.split('/')[1] + '/';
    var MainUrl = 'http://' + _Url + hostname + 'Private/MessageStation/MessagesView.aspx?id=' + compose_id;
    window.open(MainUrl);
}



function aspFreezeHeader(_grids) {
    try {
        if (_grids.length > 0) {
            _.each(_grids, function (i, j) {
                var _headerControlHTML = $("#" + i + " tbody>tr:nth-child(1)").html();
                if (_headerControlHTML) {
                    console.log("read");
                    var tblclass = $("#" + i).attr("class");
                    console.log(tblclass);
                    var _GTRTH = "<div class='fixedheader' id='fixed_" + i + "' style='position: absolute; top: 0px; left: 0px; width: 100%; overflow: hidden;'><table class='" + tblclass + "' cellspacing='0' cellpadding='0' border='0'><tbody><tr>" + _headerControlHTML + "</tr></tbody></table></div>"
                    $("#" + i).wrap("<div id=\"kasina_" + i + "\" style=\"height: 100%; width: 100%; overflow: auto;\" class=\"divscroll\"></div>");
                    $("#kasina_" + i).parent().css({ height: "100%" });
                    $(_GTRTH).insertBefore("#kasina_" + i);
                 
                    $("#kasina_" + i).scroll(function () {
                        $("#fixed_" + i).scrollLeft($(this).scrollLeft());
                    });
                    var scrollwidth = $('.scwidth').width();
                    /* div -1 id is */var dydiv1 = $("#kasina_" + i).height();
                    /* table -1 id is */var dytbl1 = $("#" + i).height();
                    /* div -2 id is*/var dydiv2 = $("#fixed_" + i).width();
                    if (dydiv1 >= dytbl1) /* condition-1 */
                    {
                        $("#fixed_" + i).width(dydiv2);
                    }
                    else if (dydiv1 < dytbl1) /* condition -2 */
                    {
                        $("#fixed_" + i).width(dydiv2 - scrollwidth);
                    }

                }

            });
        }
    }
    catch (e) {
      
    }
}

Page.Init(appConfig.MASTER.session);
var sessionTimeoutWarning = document.getElementById('ctl00_hdnSessionWarning').value;
var sessionTimeout = appConfig.MASTER.sessionTimeOut;
var timeOnPageLoad = new Date();
var sessionWarningTimer = null;
var redirectToWelcomePageTimer = null;
var sessionWarningTimer = setTimeout('SessionWarning()', parseInt(sessionTimeoutWarning) * 60 * 1000);
var redirectToWelcomePageTimer = setTimeout('RedirectToWelcomePage()', parseInt(sessionTimeout) * 60 * 1000);
function SessionWarning() {
    var minutesForExpiry = (parseInt(sessionTimeout) - parseInt(sessionTimeoutWarning));
    var message = "Your session will expire in another " + minutesForExpiry + " mins. Do you want to extend the session?";
    answer = alert(message);
    if (answer) {
        var img = new Image(1, 1);
        var url = document.location.href;
        img.src = url + '&date=' + escape(new Date());
        if (redirectToWelcomePageTimer != null) {
            clearTimeout(redirectToWelcomePageTimer);
        }
        timeOnPageLoad = new Date();
        sessionWarningTimer = setTimeout('SessionWarning()', parseInt(sessionTimeoutWarning) * 60 * 1000);
        redirectToWelcomePageTimer = setTimeout('RedirectToWelcomePage()', parseInt(sessionTimeout) * 60 * 1000);
    }
}
function RedirectToWelcomePage() {
    alert("Session expired. You will be redirected to home page");
    window.location = "../Default.aspx";
}

var fcount = 0;
function createIframe(url, _id) {
    alert(fcount);
    $("body").append("<div id=\"div_iframe\"+" + fcount + " class=\"divIframe\"><iframe id=" + _id + " src=\"" + url + "\" frameborder=\"0\" width=\"100%\"  /></div>");
    fcount++;
    //$(".divIframe").css({height:($(window).height()-90)+"px"});
    $(".divIframe iframe").css({ height: ($(".divIframe").height()) + "px" });
}

function showIframe(id) {
    alert(id);
    if (id == 'div_iframe')
        $("#div_iframe0").show();
    else if (id == 'div_1')
        $("#div_iframe1").show();
    else if (id == 'div_2')
        $("#div_iframe2").show();
}

function hideAllIframes() {
    $(".divIframe").hide();
}

function ManageSes(_ID, _MID, _DID, _MNAME, _URL, _istoken) {
    localStorage.setItem("ISTOKEN", _istoken); onSetTokenKey();
    GetAsync(
            "Private/dasboard.aspx/ManageSessions",
            { ID: _ID, MID: _MID, DID: _DID, MNAME: _MNAME, URL: _URL },
            function (JData) {
                //window.location.assign(_URL);
            },
            function (jqXHR, textStatus, errorThrown) {
            });
}

function ManageModuleSes(_ID) {
    GetAsync(
            "Private/dasboard.aspx/Managemids",
            { ID: _ID },
            function (JData) {
                //window.location.assign(_URL);
            },
            function (jqXHR, textStatus, errorThrown) {
            });
}

function Managedocid(_DID) {
    GetAsync(
            "Private/dasboard.aspx/Managedocumentid",
            { DID: _DID },
            function (JData) {
                //window.location.assign(_URL);
            },
            function (jqXHR, textStatus, errorThrown) {
            });
}

$(document).on("keydown", ".stayonenter", function (e) {
    if (e.keyCode == 13) {
        e.preventDefault();
        return false;
    }
});

function Onchangeloacation(objs) {
    ClearBrowserHistory();
    var _ID = $(".ComboBoxDropDown").val();
    var _LOC = document.getElementById("ctl00_ddlLocation")[selectedIndex].text;
    document.getElementById("ctl00_hdnlocname").value = _LOC;
    GetAsync(
         "Private/dasboard.aspx/ManageLocationId",
            { locID: _ID, loc: _LOC },
            function (JData) {
            },
            function (jqXHR, textStatus, errorThrown) {
            });
}

function AutoTexts(obj) {
    var USArrowFlag = false;
    var ctrl = $(obj);
    var _timeout = 100;
    var _auto_lk_txt = $(obj);
    var _auto_lk_options = $(obj).parent().find('div');
    clearTimeout(_timeout);
    if ($(obj).val().length > 1) {
        USArrowFlag = true;
        _timeout = setTimeout(function () {
            var _prams = new Object();
            var _prefixText = _auto_lk_txt.val();
            var _contextKey = 'FACILITY_DESC'; //_options.contextKey;

            GetAsync(
             "UserValidationCredentialService.asmx/GetLocationsauto",
               { prefixText: _prefixText, contextKey: _contextKey },

                         function (jdata) {

                             if (jdata.d.length > 0)
                                 USArrowFlag = true;
                             else
                                 USArrowFlag = false;

                             var _ul = "<ul>";
                             $(jdata.d).each(function (i, j) {

                                 _ul += "<li><a href='#'>" + $.parseJSON(j).First + "</a><span style=display:none;>'" + $.parseJSON(j).Second + "'</span></li>";
                             });
                             _ul += "</ul>";
                             _auto_lk_options.empty().html(_ul).css({ "top": ctrl.outerHeight() + "px", "min-width": ctrl.outerWidth() + "px" }).show();
                             _auto_lk_options.find("ul li a").click(function (event) {

                                 var tb = eval($.trim($(this).next("span").html()));
                                 ctrl.val($(this).html());
                                 Location($(this).html(), $.parseJSON(tb).Value);
                                 _auto_lk_options.hide();
                             });

                             if (jdata.d.length == 0) {
                                 USArrowFlag = false;
                                 _auto_lk_options.empty();
                                 _auto_lk_options.removeAttr('style');
                             }

                         }
                             );
        }, 100);
    }
    if (USArrowFlag) {
        var USAutoArrowOpitions = {};
        USAutoArrowOpitions.txtBoxID = $(obj);
        USAutoArrowOpitions.OptionsDivID = $(obj).parent().find('div');
        return UniverseAutoArrowSelection(USAutoArrowOpitions);
    }
}
function UniverseReturnPreviousObj(objval, obj) {
    var url = "";
    var results = objval;

    if (results.Value != '' && parseFloat(results.Value.trim()) > 0) {
        document.getElementById('ctl00_hidnlocid').value = results.Value;
        document.getElementById('ctl00_txtlocation').value = ViceVersaReplaceSplChar(results.Text);
        var _ID = results.Value;
        var _LOC = results.Text;
        GetNonAsync(
         "Private/dasboard.aspx/ManageLocationId",
            { locID: _ID, loc: _LOC },
            function (JData) {
                if (JData.d[0] == "N" && JData.d[1] == "N" && JData.d[2] == "N" && JData.d[3] == "N" && JData.d[4] == "N" && JData.d[5] == "N" && JData.d[6] == "N" && JData.d[7] == "N")
                    url = "module.aspx";
            },
            function (jqXHR, textStatus, errorThrown) {
            });

    }
    if (url == "") {
        url = window.location.href;
        window.location = url;
    }
    else {
        var _location = getRootWebSitePath();
        window.location = _location + "/Private/module.aspx";
    }
    return false;
}

function getRootWebSitePath() {
    //
    var _location = document.location.toString();
    var applicationNameIndex = _location.indexOf('/', _location.indexOf('://') + 3);
    var applicationName = _location.substring(0, applicationNameIndex) + '/';
    var webFolderIndex = _location.indexOf('/', _location.indexOf(applicationName) + applicationName.length);
    var webFolderFullPath = _location.substring(0, webFolderIndex);

    return webFolderFullPath;
}

function Location(tb, val) {

    var _LOC = tb; //document.getElementById('ctl00_ContentPlaceHolder1_txtlocation').value;
    var _ID = val; //document.getElementById('ctl00_ContentPlaceHolder1_hidnlocid').value;
    document.getElementById("ctl00_hdnlocname").value = _LOC;
    GetAsync(
         "Private/dasboard.aspx/ManageLocationId",
            { locID: _ID, loc: _LOC },
            function (JData) {

            },
            function (jqXHR, textStatus, errorThrown) {
            });
    var url = window.location.href;
    window.location.href = url;
    return false;
}
function ViceVersaReplaceSplChar(value) {
    value = value.replace('&gt;', '>');
    value = value.replace('&lt;', '<');
    value = value.replace('&amp;', '&');
    value = value.replace('&amp;', '&&');
    value = value.replace('&apos;', "'");
    value = value.replace('&#37;', '%');
    value = value.replace('&quot;', '"');
    value = value.replace("&#39;", "'");
    return value;
}

var UrlVal = ReturnIniUrl();
var count = 0;
$("#txtlocation").AutoCompletion({
    autoSuggest: UrlVal + 'UserValidationCredentialService.asmx/GetLocationsauto',
    contextKey: '',
    AutoComptextboxid: $('#<%=txtlocation.ClientID%>'),
    AutoComptextboxoptions: '#div_Auto_txt_option',
    hdnLocIDValue: $('#<%= hdnLocationId.ClientID %>')
});
function HideAutoLookup() {
    setTimeout(function () {
        $('.lk_auto_options').hide();
        document.getElementById('ctl00_txtlocation').value = '';
        document.getElementById('ctl00_txtlocation').value = document.getElementById('ctl00_hdnlocationname').value;
    }, 1000);
}

$(function () { $('.menuscroll').slimscroll({ width: '100%', height: '100%' }); });

function DisplayExtendedMonitor() {
    if (document.getElementById(appConfig.MASTER.externalDisplay).value == 'W') {
        window.open(_iniUrl + "Private/FrontOffice/ExtendedDisplay.aspx", "myWindow", "width=10000,height=10000");
    }
    else {
        window.open(_iniUrl + "Private/FrontOffice/ExtendedDisplay.aspx");
    }
    return false;
}

function ClearBrowserHistory() {
    localStorage.clear();
    sessionStorage.clear();
    if ($('[ID*=divTokenStatus]').css('display') == "block") {
        if ($('[id$=ddlCounter]').val() == 0 || $('[id$=ddlCounter]').find('option:selected').text() == "--Select--" || $('[id$=ddlCounter]').val() == null) {
            return true;
        }
        else {
            alert('Please Logout Counter First');
            $('[id*=divCounterCall]').css('display', 'block');
            return false;
        }
    } 
}
function OnCloseCallTokens() {
    $('[id*=divCounterCall]').css('display', 'none');
    return false;
}
function ViewTokenRow(InputData, Status) {
}
function OnReCallTokenClick() {
    if ($('[id$=ddlCounter]').val() == 0 && $('[id$=ddlCounter]').find('option:selected').text() == "--Select--") {
        $('[id*=divCounterCall]').css('display', 'block');
        alert('Please Select counter');
        return false;
    }
    else if ($('[id*=ddlToken]').find('option:selected').text() == '') {
        alert('Please Select Token');
        return false;
    }
    else {
        var _tokenno = $('[id*=ddlToken]').find('option:selected').text(); var _flag = 'R';
        GetAsync("Private/module.aspx/OnGetRecallToken",
                { TokenNo: _tokenno, Flag: _flag },
                function (jdata) {
                     
                },
                function () {
                });
    }
    return false;
}
function UpdateRecallTokenStatus(TokenNo, _Status) {
    GetAsync("Private/module.aspx/UpdateRecallTokenStatus",
                { TOKENNO: TokenNo, Status: _Status },
                function (jdata) {
                    if (_Status == 'S') {
                        $('[id*=ddlToken]').find('option:selected').text('');
                    }
                },
                function () {
                });
            }

            /* Set Mechine Name To  Cookie */

            function getCookie(cname) {
                var name = cname + "=";
                var ca = document.cookie.split(';');
                for (var i = 0; i < ca.length; i++) {
                    var c = ca[i];
                    while (c.charAt(0) == ' ') {
                        c = c.substring(1);
                    }
                    if (c.indexOf(name) == 0) {
                        return c.substring(name.length, c.length);
                    }
                }
                return "";
            }

            function getAllCookies(cname) {

                var machinename = getCookie('machinename');
                //  $('[id$=hdnClientMechineName]').val(machinename);
            }

            /* To bind the counter based on terminal name */
            $(document).ready(function () {
                getAllCookies();
                //onSetTokenKey();

                if ($('[id*=hdnIstokencall]').val() == "True" && $('[id*=hdnDocTokenPer]').val() == "Y" && $('[id*=hdnTokenSys]').val() == "AddNew") {
                    GetCounterByMechineName();
                    $('[id*=divTokenStatus]').css('display', 'block');
                    $('[id*=pnlTokenSys]').css('display', 'block');
                }
                else {
                    $('[id*=divTokenStatus]').css('display', 'none');
                }
            });
            //        function onSetTokenKey() {
            //            if (localStorage.getItem("ISTOKEN") == "Y" && $('[id*=hdnTokenSys]').val() == "AddNew" && $('[id*=hdnDocTokenPer]').val() == "Y") {
            //                if (document.getElementById('ctl00_hdnPageMode').value != 'View') {
            //                    $('[id*=pnlTokenSys]').css('display', 'block');
            //                }
            //            }
            //            else {
            //                $('[id*=pnlTokenSys]').css('display', 'none');
            //            }
            //            $('[id*=txtTokenScan]').val('');
            //        }
            function onSetTokenKey() {
                if ($('[id*=hdnTokenSys]').val() == "AddNew" && $('[id*=hdnDocTokenPer]').val() == "Y") {
                    if (document.getElementById('ctl00_hdnPageMode').value != 'View') {
                        $('[id*=pnlTokenSys]').css('display', 'block');
                    }
                }
                else {
                    $('[id*=pnlTokenSys]').css('display', 'none');
                }
                $('[id*=txtTokenScan]').val('');
            }

            function ongridurlKey(gridurl) {
                var _gridpath = gridurl;
                if (_gridpath != undefined) {
                    if (_gridpath == "#") {
                        _gridpath = _gridpath;
                    }
                    else {
                        _gridpath = _gridpath.replace("~/", $("#_abspath").val());
                    }
                }
                localStorage.setItem("GRID", _gridpath);
            }

            function ClosingTokenPopup() {
                var path = localStorage.getItem("GRID");
                window.location.assign(path);
            }
            function onstatusValidation() {
                if ($('[id*=txtTokenScan]') != null) {
                    if ($('[id*=txtTokenScan]').val() == '' || $('[id*=txtTokenScan]').val() == null || $('[id*=txtTokenScan]').val() == undefined) {
                        document.getElementById('txtTokenScan').focus();
                    }
                }
            }
            /* To Get The Mechine Mapping Counter */
            function GetCounterByMechineName(status) {
                var MechineName = $('[id$=hdnClientMechineName]').val();
                GetAsync(
            "Private/module.aspx/Get_Counter_by_Mechin_Name",
                //"Private/module.aspx/Get_Counter_by_Mechin_Name",
                {Mechine_Name: MechineName },
                function (jdata) {
                    var _optionsVal = '';
                    $('[id*=ddlCounter]').empty();
                    var _data = jQuery.parseJSON(jdata.d);
                    if (_data != '' && _data != null) {
                        if (_data[0]["IS_TOKEN_REQUIRED"] == 'N') {
                            $('[id*=divTokenStatus]').css('display', 'none');
                            $('[id*=pnlTokenSys]').css('display', 'none');
                            return false;
                        }
                    }
                    if (_data.length > 0) {
                        if (_data[0]["COUNTER_STATUS"] == 'L') {
                            $("[id*=ddlCounter]").append($('<option selected="true"></option>').val(_data[0]["COUNTER_ID"]).html(_data[0]["COUNTER_NAME"]));
                            $('[id$=ddlCounter]').attr('disabled', true);
                        }
                        else if (_data[0]["COUNTER_STATUS"] == 'O') {
                            $("[id*=ddlCounter]").append($('<option selected="true"></option>').val("0").html('--Select--'));
                            $("[id*=ddlCounter]").append($('<option ></option>').val(_data[0]["COUNTER_ID"]).html(_data[0]["COUNTER_NAME"]));
                            $('[id$=ddlCounter]').attr('disabled', false);
                            $('[id*=divCounterCall]').css('display', 'block');
                            if (status != 'LogOut') {/*For LogOut Mode We Don't Get This Alert Message*/
                                alert('Please Log In Counter');
                            }
                            return false;
                        }
                    }
                });
            }
            /* To Show The Token System Detailed PopuP  window on that To Show the Pending,Skipped and Served Tokens*/
            function OnCallTokens(_state) {
                if ($('[id$=ddlCounter]').val() == 0 && $('[id$=ddlCounter]').find('option:selected').text() == "--Select--") {
                    $('[id*=divCounterCall]').css('display', 'block');
                    return false;
                }
                else {
                    var CounterID = $('[id$=ddlCounter]').val();
                    GetAsync("Private/module.aspx/GetPendingSkippedServedTokenCount",
                    { CounterID: CounterID },
                    function (jdata) {
                        var input = jQuery.parseJSON(jdata.d);
                        $('[id*=lblPendingtkns]').text(input[0].PENDING);
                        $('[id*=lblskiptkns]').text(input[0].SKIP);
                        $('[id*=lblservedtkns]').text(input[0].FINISH);
                        $('[id*=lblretfinishtkns]').text(input[0].FINISH);
                        OnTokensList('PENDING'); /*By Default Pending Tokens will be displayed when we click on token settings button*/
                    },
                    function () {
                    });
                }
                $('[id*=divCounterCall]').css('display', 'block');
                return false;
            }


            /*  Counter LogIn */
            function OnCounterLogIn() {
                var CounterID = $('[id$=ddlCounter]').val();
                var TerminalName = $('[id$=hdnClientMechineName]').val(); ;
                var Status = 'L'; /* L-For LogIn ,
                                 O-For Logout*/
                GetNonAsync("Private/module.aspx/OnCounterLogIn",
                { CounterID: CounterID, TerminalName: TerminalName, Status: Status },
                function (jdata) {
                    $('[id$=ddlCounter] option:selected').text(); //$("[id*=ddlCounter]").append($('<option Selected="True"></option>').val(CounterID).html("A"));
                    $('[id$=ddlCounter]').attr('disabled', true);
                    OnTokensList('PENDING');
                    OnCallTokens('cnt');
                },
                function () {
                });
                return false;

            }
            /* Counter LogOut */
            function OnCounterLogOut() {
                if ($('[id$=ddlCounter]').val() == "0") {
                    alert('Counter Already Loged Out');
                    return false;
                }
                if ($('[id*=ddlToken]').find('option:selected').text() != '') {
                    alert('Finish or Skip  The Current Token');
                    return false;
                }
                var CounterID = $('[id$=ddlCounter]').val();
                var TerminalName = $('[id$=hdnClientMechineName]').val(); ;
                var Status = 'O'; /* L-For LogIn ,
                                 O-For Logout*/
                GetNonAsync("Private/module.aspx/OnCounterLogIn",
                { CounterID: CounterID, TerminalName: TerminalName, Status: Status },
                function (jdata) {
                    alert('Counter LogOut Successfully');
                    GetCounterByMechineName('LogOut');
                    var griddiv = document.getElementById('divTokens');
                    griddiv.innerHTML = '';
                    document.getElementById('lblPendingtkns').innerHTML = '0';
                    document.getElementById('lblskiptkns').innerHTML = '0';
                    document.getElementById('lblservedtkns').innerHTML = '0';

                },
                function () {
                });
                return false;
            }
            /* To Generate the New Token(This Is We Consider As A VIP Token*/
            function OngenerateNewToken() {
                if ($('[id$=ddlCounter]').val() == null) {
                    alert('Presently There Is No Counter Mapped To This Terminal');
                    return false;
                }
                if ($('[id*=ddlToken]').find('option:selected').text() != '') {
                    alert('Finish The Current Token');
                    return false;
                }
                if ($('[id$=ddlCounter]').val() == 0 && $('[id$=ddlCounter]').find('option:selected').text() == "--Select--") {
                    $('[id*=divCounterCall]').css('display', 'block');
                    alert('Please LogIn Counter');
                    return false;
                }
                var counter_Id = $('[id$=ddlCounter]').val();
                var serviceTypeId = $('[id$=hdnTokenType]').val();
                var NewTokenStatus = 'C'; /*For VIP Tokens We Will Save The Token Status As 'C'*/
                GetAsync("Private/module.aspx/GenerateNewToken",
                { counter_Id: counter_Id, serviceTypeId: serviceTypeId, NewTokenStatus: NewTokenStatus },
                function (jdata) {
                    $('[id*=ddlToken]').find('option:selected').text(jdata.d);
                    $('[id*=divEnquiryRefund]').css('display', 'block');
                    return false;
                },
                function () {
                    alert('Fail');
                });
                return false;
            }
            /* Getting Pending,Skipped,Served Tokens*/
            var _state = '';
            function OnTokensList(Flag) {/*Flags-Pending,Skip,Finish*/
                var counter_Id = $('[id$=ddlCounter]').val();
                var serviceTypeId = $('[id$=hdnTokenType]').val();
                var Counter_name = $('[id$=ddlCounter]').find('option:selected').text();
                var param = param || {};
                param.dataKey = "TOKEN_NO";
                param.pageSize = 10;
                param.pageNum = 1;
                param.defaultWSParams = { counter_Id: counter_Id, serviceTypeId: serviceTypeId, Flag: Flag };
                param.wsPath = "Private/module.aspx/GetPendingSkipServedTokens";
                param.wsFilterPath = "Private/module.aspx/GetPendingSkipServedTokens";
                if (Flag == "FINISH") {
                    param.template = ["TOKEN_NO*TOKEN_NO"
                    , "SERVICE_NAME*SERVICE_NAME"
                     , "CREATE_DT*CREATE_DT"
                     , "AVG_TIME*AVG_TIME"
                     , "USERNAME*USERID"];
                }
                else if (Flag == "SKIP") {
                    param.template = [[{ icon: _iniUrl + 'Assets/Grid_Icons/viewprofile.png', click: 'OnSkipTokenClick', alt: 'View Record'}]
                     , "TOKEN_NO*TOKEN_NO"
                    , "SERVICE_NAME*SERVICE_NAME"
                    , "CREATE_DT*CREATE_DT"
                    , "AVG_TIME*AVG_TIME"
                    , "USERNAME*USERID"];
                }
                else {/* Served Tokens*/
                    param.template = ["TOKEN_NO*TOKEN_NO"
                    , "SERVICE_NAME*SERVICE_NAME"
                    , "CREATE_DT*CREATE_DT"
                    , "AVG_TIME*AVG_TIME"
                    ];
                }
                if (Flag == "FINISH") {
                    param.header = [
                     { col: "Token No", sort: false, filter: true, width: '12%' }
                    , { col: "Service Name", sort: false, filter: true, width: '22%' }
                    , { col: "Create Dt", sort: false, filter: true, width: '25%' }
                    , { col: "Avg Waiting Time(min)", sort: false, filter: true, width: '18%' }
                    , { col: "User Name", sort: false, filter: true}];
                }
                else if (Flag == "SKIP") {
                    param.header = ["Call"
                    , { col: "Token No", sort: false, filter: true, width: '12%' }
                    , { col: "Service Name", sort: false, filter: true, width: '22%' }
                    , { col: "Create Dt", sort: false, filter: true, width: '25%' }
                    , { col: "Skipped Time", sort: false, filter: true, width: '25%' }
                    , { col: "User Name", sort: false, filter: true}];
                }
                else {/* Served Tokens*/
                    param.header = [{ col: "Token No", sort: false, filter: true, width: '12%' }
                    , { col: "Service Name", sort: false, filter: true, width: '22%' }
                    , { col: "Create Dt", sort: false, filter: true, width: '25%' }
                    , { col: "Avg Waiting Time(min)", sort: false, filter: true, width: '18%' }
                    ];
                }
                param.enablePaging = false;
                param.enableTrace = false;
                param.enableFilter = false;
                param.enableCheckbox = false;
                param.enableSorting = false;
                param.RowNo = true;
                gridControl = $("#divTokens").jtable(param);
                if (Flag == "FINISH") {
                    document.getElementById('ctl00_lblcounterCalling').innerHTML = 'Served Tokens';
                }
                else if (Flag == "SKIP") {
                    document.getElementById('ctl00_lblcounterCalling').innerHTML = 'Skipped Tokens';
                }
                else {/* Served Tokens*/
                    document.getElementById('ctl00_lblcounterCalling').innerHTML = 'Pending Tokens';
                }
            }
            /*To get the counter current tokens*/
            function getcurrentToken(Counter_Id, ServiceTypeId, Mechine_Name) {
                var counter_Id = Counter_Id;
                var serviceTypeId = ServiceTypeId
                var MechineName = Mechine_Name;
                //var MechineName = $('[id$=hdnClientMechineName]').val();
                GetAsync("Private/module.aspx/GetCurrentTokenByCounter",
                  { MechineName: MechineName },
                  function (jdata) {
                      var _data = jQuery.parseJSON(jdata.d);
                      if (_data.length > 0) {
                          $('[id*=ddlToken]').find('option:selected').text(_data[0]["TOKEN_NO"]);
                          $('[id$=ddlToken]').attr('disabled', true);
                      }
                  });
            }
            /* Map The Current  Token To Billing Transaction*/
            $('[id*=txtTokenScan]').keydown(function (e) {
                if (e.keyCode == 13) {
                    var serviceTypeId = $('[id$=hdnTokenType]').val();
                    var _tokenno = $('[id$=txtTokenScan]').val();
                    var currentToken = $('[id$=ddlToken]').val();
                    if (_tokenno.toUpperCase() == currentToken.toUpperCase()) {
                        $('[id*=pnlTokenSys]').css('display', 'none');
                        e.preventDefault();
                    }
                    else {
                        alert("Please Scan Proper Token No");
                        $('[id*=pnlTokenSys]').css('display', 'block');
                        $('[id*=txtTokenScan]').val('');
                        e.preventDefault();
                    }
                }
            });

            /*To Get The Next OR Skip Token*/
            var Count = 0;
            function OnNextTokenClick(Flag) {
                if ($('[id$=ddlCounter]').val() == null) {
                    alert('Presently There Is No Counter Mapped To This Terminal');
                    return false;
                }
                if ($('[id$=ddlCounter]').val() == 0 && $('[id$=ddlCounter]').find('option:selected').text() == "--Select--") {
                    $('[id*=divCounterCall]').css('display', 'block');
                    alert('Please Select counter');
                    return false;
                }

                else {
                    if (Flag == 'SKIP') {
                        if ($('[id*=ddlToken]').find('option:selected').text() == '') {
                            alert('Please Select Token');
                            return false;
                        }
                    }
                    var Service_Type_Id = $('[id$=hdnTokenType]').val();
                    var PreviousToken = $('[id*=ddlToken]').find('option:selected').text();
                    var Counter_Id = $('[id$=ddlCounter]').val();
                    GetAsync(
                    "Private/module.aspx/GetNextToken",
                { Service_Type_Id: Service_Type_Id, PreviousToken: PreviousToken, Counter_Id: Counter_Id, Flag: Flag },
                function (jdata) {
                    if (jdata.d != null && jdata.d != '' && jdata.d != undefined) {
                        if (Flag == 'NEXT') {
                            $('[id*=ddlToken]').find('option:selected').text(jdata.d);
                            $('[id*=pnlTokenSys]').css('display', 'block');
                            $('[id*=txtTokenScan]').val('');
                        }
                        else if (Flag == 'SKIP') {
                            $('[id*=ddlToken]').find('option:selected').text('');
                        }
                        OnCallTokens('A');
                        $('[id*=divCounterCall]').css('display', 'none');
                        return false;
                    }
                    else {
                        alert('Currently There Are No Tokens');
                        $('[id*=ddlToken]').find('option:selected').text('');
                        return false;
                    }
                },
                function () {
                });
                }
                return false;
            }

            /* Convert the skip token as current token */
            var Count = 0;
            function OnSkipTokenClick(InputData, Status) {
                if ($('[id$=ddlCounter]').val() == 0 && $('[id$=ddlCounter]').find('option:selected').text() == "--Select--") {
                    $('[id*=divCounterCall]').css('display', 'block');
                    alert('Please Select counter');
                    return false;
                }
                else if ($('[id*=ddlToken]').find('option:selected').text() != '') {
                    alert('Finish The Current Token');
                    return false;
                }
                else {
                    var _data = gridControl.getDataRow(InputData);
                    var TOKEN_NO = _data["TOKEN_NO"];
                    var Service_Type_Id = $('[id$=hdnTokenType]').val();
                    var TokenNo = _data["TOKEN_NO"];
                    var Counter_Id = $('[id$=ddlCounter]').val();
                    GetAsync("Private/module.aspx/OnConvertSkipToCurrentToken",
                { Service_Type_Id: Service_Type_Id, TokenNo: TokenNo, Counter_Id: Counter_Id },
                function (jdata) {
                    var str = jdata.d;
                    var counterdet = str.split(',');
                    if (counterdet[0] == Counter_Id) {
                        $('[id*=ddlToken]').find('option:selected').text(TOKEN_NO);
                        OnTokensList('SKIP');
                        OnCallTokens('cnt');
                        $('[id*=pnlTokenSys]').css('display', 'block');
                        $('[id*=divCounterCall]').css('display', 'none');
                        return false;
                    }
                    else {
                        alert('This Token Has Selected In Counter (' + counterdet[1] + ')');
                        OnTokensList('SKIP');
                        OnCallTokens('cnt');
                        return false;
                    }

                },
                function () {
                });
                }
                return false;
            }
            /*
            document.getElementById('ctl00_hdnTokenType').value = '5';
            var Counter_Id = $('[id$=ddlCounter]').val();
            var  ServiceTypeId='5';
            var Mechine_Name = document.getElementById('ctl00_hdnClientMechineName').value;
            getcurrentToken(Counter_Id, ServiceTypeId, Mechine_Name);
            */
            function AssignCokie() {
                window.open('../../../SetCookie.aspx');
                return false;
            }

            var NAV = {};
            NAV.RWD = {
                body: document.getElementsByTagName('body')[0],
                head: document.getElementsByTagName('head')[0],
                deviceWidth: null,
                roundedWidth: null,
                init: function () {

                    NAV.RWD.deviceWidth = document.documentElement.clientWidth;
                    NAV.RWD.roundedWidth = NAV.RWD.roundWidth(NAV.RWD.deviceWidth);
                    NAV.RWD.setupClient(NAV.RWD.deviceWidth);
                    window.onresize = function (a) {
                        NAV.RWD.deviceWidth = document.documentElement.clientWidth;
                        NAV.RWD.roundedWidth = NAV.RWD.roundWidth(NAV.RWD.deviceWidth);
                        NAV.RWD.setupClient(NAV.RWD.deviceWidth)
                    }

                },
                deviceBucketer: function (a) {
                    var b = "large";
                    if (a < 831) {
                        if (a < 661) {
                            b = "small"
                        } else {
                            b = "medium"
                        }
                    } else {
                        b = "large"
                    }
                    return b
                },
                roundWidth: function (a) {
                    var b = 0;
                    a % 100 > 50 ? b = 50 : 0;
                    return Math.min(Math.floor(a / 100) * 100) + b
                },
                capitalize: function (a) {
                    return a.charAt(0).toUpperCase() + a.slice(1).toLowerCase()
                },
                setupClient: function (a) {
                    NAV.RWD.body.className = NAV.RWD.body.className.replace(/\bres_.*?\b/g, '');
                    NAV.RWD.body.className += " res_" + NAV.RWD.roundedWidth;
                }
            };


            NAV.RWD.init();


            var _browser = (navigator.userAgent).toUpperCase();
            if (_browser.indexOf("CHROME") != -1) {
                _browser = "chrome";
            }
            else if (_browser.indexOf("MSIE 10.0") != -1) {
                alert(navigator.appVersion);

                var ver = parseInt(navigator.appVersion);

                _browser = "ie9";
            }
            else if (_browser.indexOf("FIREFOX") != -1) {
                _browser = "firefox";
            }
            else if (_browser.indexOf("SAFARI") != -1) {
                _browser = "safari";
            }
            //alert(_browser);
            $("body").addClass(_browser);

            var msgid = 0;

            (function ($) {

                $.fn.scustommessagebox = function (_Type, headerText, bodyText, yesCallBack, callBackParamList, noCallBack) {
                    if ($(this).length > 0)
                        $(this).remove();

                    var _ybtnText; var _nbtnText = "";
                    if (_Type == 1) {
                        _ybtnText = "Ok";
                        _nbtnText = "Cancel";
                    }
                    else {
                        _ybtnText = "Yes";
                        _nbtnText = "No";
                    }

                    var _html = '<div class="smessagebox"><div class="promptmask"></div><div class="prompt" ><h1></h1><div><i class="icon-check-1"></i><h2></h2></div><button id="syesbutton">' + _ybtnText + '</button><button id="snobutton">' + _nbtnText + '</button></div></div>';

                    $("body").append(_html);
                    $(".smessagebox h1").html(headerText);
                    $(".smessagebox h2").html(bodyText);
                    $(".smessagebox #syesbutton").focus();
                    $(".smessagebox #syesbutton").bind("click", function () {


                        if (callBackParamList != '')

                            yesCallBack(callBackParamList);
                        else
                            yesCallBack();
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

                $.fn.toastText = function (title, text, wait, cid) {
                    wait = 20;

                    var cid = cid || 1;
                    var t_class = [];
                    t_class[0] = "";
                    t_class[1] = "sucess";
                    t_class[2] = "info";
                    t_class[3] = "warning";
                    t_class[4] = "danger";

                    var t_icon = [];
                    t_icon[0] = "";
                    t_icon[1] = "icon-check-1";
                    t_icon[2] = "icon-info-1";
                    t_icon[3] = "icon-cancel-alt";
                    t_icon[4] = "icon-erase";


                    if ($(this).length > 0)
                        $(this).remove();

                    $(".toastdiv").append("<div class=\"alertprompt " + t_class[cid] + "\" ><span class=\"title\"><i class=" + t_icon[cid] + "></i>" + title + "</span> <span class=\"message\">" + text + "</span> <button class=\"alertclose\">X</button></div>");

                    $(".alertprompt").fadeIn(300, function () {
                        setTimeout(function () {
                            $(".alertprompt").animate({ 'margin-right': '-500px' }).fadeOut(1000, function () {
                                $(".alertprompt").remove();
                            });
                        }, wait * 1000);
                    }).animate({ 'margin-top': '10px' });

                    $(".alertprompt button").bind("click", function () {

                        $(this).parent().remove();

                    });
                };

                //$.fn.scustomconfirmbox =
                $.fn.scustomconfirmbox = function (_Type, headerText, bodyText) {
                    if ($(this).length > 0)
                        $(this).remove();

                    var _ybtnText; var _nbtnText = "";
                    if (_Type == 1) {
                        _ybtnText = "Ok";
                        _nbtnText = "Cancel";
                    }
                    else {
                        _ybtnText = "Yes";
                        _nbtnText = "No";
                    }

                    var _html = '<div class="smessagebox"><div class="promptmask"></div><div class="prompt" ><h1></h1><div><i class="icon-check-1"></i><h2></h2></div><button id="syesbutton">' + _ybtnText + '</button><button id="snobutton">' + _nbtnText + '</button></div></div>';

                    $("body").append(_html);
                    $(".smessagebox h1").html(headerText);
                    $(".smessagebox h2").html(bodyText);
                    $(".smessagebox #syesbutton").focus();
                    $(".smessagebox #syesbutton").bind("click", function () {
                        $(".smessagebox *").unbind(); $(".smessagebox").hide(); $(".smessagebox").remove();
                        return true;
                    });
                    $(".smessagebox #snobutton").bind("click", function () {
                        $(".smessagebox *").unbind();
                        $(".smessagebox").hide();
                        $(".smessagebox").remove(); return false;
                    });

                };

            } (jQuery));