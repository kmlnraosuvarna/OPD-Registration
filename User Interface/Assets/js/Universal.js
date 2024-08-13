Page.Init('<%=SessionHandler.MODULE_ID %>');
var sessionTimeoutWarning = document.getElementById('ctl00_hdnSessionWarning').value;

function getPosition(str, m, i) { return str.split(m, i).join(m).length; }
var timeinsecaftersessionout = document.getElementById('ctl00_hdnSessionWarning').value;
var secondTick = 0;
function ResetThisSession() {
    secondTick = 0;
}
var tick = setTimeout("StartThisSessionTimer();", 1000);
function StartThisSessionTimer() {
    secondTick++;
    if (secondTick > parseInt(timeinsecaftersessionout) * 60) {
        clearTimeout(tick);
        ClearBrowserHistory();
        __doPostBack('ctl00$lnkLogout', '');
        return;
    }
    tick = setTimeout("StartThisSessionTimer();", 1000);
}
$(function () {
    $("body").on('click keypress', function () { ResetThisSession(); });
});

        var fcount = 0;
        function createIframe(url, _id) {
            alert(fcount);
            $("body").append("<div id=\"div_iframe\"+" + fcount + " class=\"divIframe\"><iframe id=" + _id + " src=\"" + url + "\" frameborder=\"0\" width=\"100%\"  /></div>");
            fcount++;
            $(".divIframe iframe").css({ height: ($(".divIframe").height()) + "px" });
        }
        

        function hideAllIframes() {
            $(".divIframe").hide();
        }

        function ManageSes(_ID, _MID, _DID, _MNAME, _URL, _istoken, docfrmcd) {
            localStorage.setItem("ISTOKEN", _istoken); onSetTokenKey();
            GetAsync(
            "Private/dasboard.aspx/ManageSessions",
            { ID: _ID.split('-')[0], MID: _MID, DID: _DID, MNAME: _MNAME, URL: _URL, MFRMCD: _ID.split('-')[1], DOCFORMCD: docfrmcd },
            function (JData) {
            },
            function (jqXHR, textStatus, errorThrown) {
            });
        }
        function ManageModuleSes(_ID) {
            GetAsync(
            "Private/dasboard.aspx/Managemids",
            { ID: _ID },
            function (JData) {
            },
            function (jqXHR, textStatus, errorThrown) {
            });
        }
        function Managedocid(_DID) {
            GetAsync(
            "Private/dasboard.aspx/Managedocumentid",
            { DID: _DID },
            function (JData) {
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
            var _ID = document.getElementById("ctl00_ddlLocation").options[document.getElementById("ctl00_ddlLocation").selectedIndex].value;
            var _LOC = document.getElementById("ctl00_ddlLocation").options[document.getElementById("ctl00_ddlLocation").selectedIndex].text;
            document.getElementById("ctl00_hdnlocname").value = _LOC;
            GetAsync(
         "Private/dasboard.aspx/ManageLocationId",
            { locID: _ID, loc: _LOC },
            function (JData) {
                var origin = window.location.origin;
                var _url = window.location.pathname.split('/')[1];
                ClearBrowserHistory();
                window.location = origin + '/' + _url + '/Private/module.aspx';
            },
            function (jqXHR, textStatus, errorThrown) {
            });
        }
        function ChangePrintType() {

            var _printtype = "";
            if (document.getElementById('ctl00_chkComDirectPrint').checked == true)
                _printtype = "Y";
            else
                _printtype = "N";
            GetAsync(
         "Private/dasboard.aspx/AssignChangedPrintType",
            { PrintType: _printtype },
            function (JData) {

            },
            function (jqXHR, textStatus, errorThrown) {
            });
        }

        function ChangeHeaderType() {
            var _headervisibletype = "";
            if (document.getElementById('ctl00_chkComWithHead').checked == true)
                _headervisibletype = "Y";
            else
                _headervisibletype = "N";
            GetAsync(
         "Private/dasboard.aspx/AssignChangedHeaderVisibleType",
            { HeaderVisibleType: _headervisibletype },
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
                    var _contextKey = 'FACILITY_DESC';

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
            var _location = document.location.toString();
            var applicationNameIndex = _location.indexOf('/', _location.indexOf('://') + 3);
            var applicationName = _location.substring(0, applicationNameIndex) + '/';
            var webFolderIndex = _location.indexOf('/', _location.indexOf(applicationName) + applicationName.length);
            var webFolderFullPath = _location.substring(0, webFolderIndex);

            return webFolderFullPath;
        }

        function Location(tb, val) {

            var _LOC = tb;
            var _ID = val;
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

        function HideAutoLookup() {
            setTimeout(function () {
                $('.lk_auto_options').hide();
            }, 1000);
        }

        function DisplayExtendedMonitor() {
            if (document.getElementById('<%= hdnextendedWindow.ClientID %>').value == 'W') {
                window.open(_iniUrl + "Private/FrontOffice/ExtendedDisplay.aspx", "myWindow", "width=10000,height=10000,left = 490,top=300");
            }
            else {
                window.open(_iniUrl + "Private/FrontOffice/ExtendedDisplay.aspx");
            }
            return false;
        }

        function ClearBrowserHistory() {
            sessionStorage.clear();
            localStorage.removeItem('ModuleDataDB');
            localStorage.removeItem('hmodule');
            localStorage.removeItem('hdocument');
            $('[id*=ddlExportData]').val('Select One');
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
                    console.log('swetha', jdata);
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
        }
        $(document).ready(function () {
            var _thisURL = window.location.href;
            if (_thisURL.toUpperCase().indexOf("MODULE.ASPX") >= 0) {
                if (_thisURL.indexOf('?') >= 0) {
                    var _qParams = _thisURL.split('?')[1].split('&');
                    for (var iParam = 0; iParam < _qParams.length; iParam++) {
                        if (_qParams[iParam].toUpperCase().indexOf("LOGOUT") >= 0) {
                            var _index = _qParams[iParam].indexOf('=');
                            var _paramVal = _qParams[iParam].substring(_index + 1, _qParams[iParam].length);
                            try {
                                _paramVal = atob(_paramVal);
                            }
                            catch (er) {
                                _paramVal = _qParams[iParam].substring(_index + 1, _qParams[iParam].length);
                            }
                            if (_paramVal == 'Y') {
                                ClearBrowserHistory();
                                __doPostBack('ctl00$lnkLogout', '');
                                break;
                            }
                        }
                    }
                }
            }
            var clientLogoName = $('[id*=hdnclientLogoName]').val();
            if (clientLogoName == '' || clientLogoName == undefined || clientLogoName == null) clientLogoName = '';
            $('[id*=clntlogoname]').text(clientLogoName);
            getAllCookies();
            var _path = window.location.pathname.split('/')[1]
            var _url = _path + '/'
            var _pathname = window.location.pathname.replace(_url, '~')
            _pathname = _pathname.split('~')[1];
            _pathname = '/' + _pathname;
            if ($('[id*=hdndocprnpermission]').val() == 'Y') {
                document.getElementById('directprintli').style.display = "block";
                document.getElementById('withheadli').style.display = "block";
            }
            else {
                document.getElementById('directprintli').style.display = "none";
                document.getElementById('withheadli').style.display = "none";
            }

            if ($('[id*=hdnIstokencall]').val() == "True" && $('[id*=hdnDocTokenPer]').val() == "Y" && $('[id*=hdnTokenSys]').val() == "AddNew") {

                GetCounterByMechineName();
                $('[id*=divTokenStatus]').css('display', 'block');
                $('[id*=pnlTokenSys]').css('display', 'block');
                $('.train,.ipaddr').hide();
            }
            else {
                $('[id*=divTokenStatus]').css('display', 'none');
                $('.train,.ipaddr').show();
            }

            var doc_id = document.getElementById('ctl00_hdndocsessionid').value;
            var modulesession_id = document.getElementById('ctl00_hdnmodulesessionid').value;
            var submodulesession_id = document.getElementById('ctl00_hdnsubmodulesessionid').value;
            if (doc_id == "" || doc_id == null || doc_id == undefined) { doc_id = "0"; }
            if (modulesession_id == "" || modulesession_id == null || modulesession_id == undefined) { modulesession_id = "0"; }
            if (submodulesession_id == "" || submodulesession_id == null || submodulesession_id == undefined) { submodulesession_id = "0"; }
            sessionStorage.setItem("docc_id", doc_id); sessionStorage.setItem("modulesession_id", modulesession_id);
            sessionStorage.setItem("submodulesession_id", submodulesession_id);
            var username = '<%=SessionHandler.UserName%>';
            _sessionID = '<%=SessionHandler.DBSESSION_ID%>';
            _curSessionID = _sessionID;
            sessionStorage.setItem("UserName", "");
            sessionStorage.setItem("UserName", username);

            setInterval(function () {
                MySessionCheck();
            }, 60000);

            setInterval(function () {
                fn_ChechForceClose();
            }, 5000000);

            function fn_ChechForceClose() {
                GetNonAsync(
                            "Private/dasboard.aspx/CheckForceClose",
                            {},
                            function (JData) {
                                var sForceClose = JData.d;
                                if (sForceClose == "Y") {
                                    __doPostBack('<%=lnkForseClose.UniqueID %>', '')
                                }
                            },
                            function (jqXHR, textStatus, errorThrown) {
                            }
                );
            }
        });
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
        function GetCounterByMechineName(status) {
            var MechineName = $('[id$=hdnClientMechineName]').val();
            GetNonAsync(
            "Private/module.aspx/Get_Counter_by_Mechin_Name",
                { Mechine_Name: MechineName },
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
                            if (status != 'LogOut') {
                                alert('Please Log In Counter');
                            }
                            return false;
                        }
                    }
                });
        }
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
                        OnTokensList('PENDING');
                    },
                    function () {
                    });
            }
            $('[id*=divCounterCall]').css('display', 'block');
            return false;
        }
        function OnCounterLogIn() {
            var CounterID = $('[id$=ddlCounter]').val();
            var TerminalName = $('[id$=hdnClientMechineName]').val(); ;
            var Status = 'L';
            GetNonAsync("Private/module.aspx/OnCounterLogIn",
                { CounterID: CounterID, TerminalName: TerminalName, Status: Status },
                function (jdata) {
                    $('[id$=ddlCounter] option:selected').text();
                    $('[id$=ddlCounter]').attr('disabled', true);
                    OnTokensList('PENDING');
                    OnCallTokens('cnt');
                },
                function () {
                });
            return false;

        }
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
            var Status = 'O';
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
        function QuickSearchGridURL() {

        }
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
            var serviceTypeId = 3;
            var NewTokenStatus = 'C';
            GetNonAsync("Private/module.aspx/GenerateNewToken",
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
        var _state = '';
        function OnTokensList(Flag) {
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
            else {
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
            else {
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
            param.tableTemplate = true;
            param.RowNo = true;
            gridControl = $("#divTokens").jtable(param);
            if (Flag == "FINISH") {
                document.getElementById('ctl00_lblcounterCalling').innerHTML = 'Served Tokens';
            }
            else if (Flag == "SKIP") {
                document.getElementById('ctl00_lblcounterCalling').innerHTML = 'Skipped Tokens';
            }
            else {
                document.getElementById('ctl00_lblcounterCalling').innerHTML = 'Pending Tokens';
            }
        }
        function getcurrentToken(Counter_Id, ServiceTypeId, Mechine_Name) {
            var counter_Id = Counter_Id;
            var serviceTypeId = ServiceTypeId
            var MechineName = Mechine_Name;
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
                else if (_Type == 7) {
                    _ybtnText = "Print";
                    _nbtnText = "Don't Print";
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
                wait = 10;

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

        function fn_InboxClick() {
            var host = window.location.origin
            var _labUrl = host + document.getElementById('ctl00_hdninboxurl').value;
            var MID = '72';
            var userid = '<%=SessionHandler.UserID %>';
            var sessionid = '<%=SessionHandler.DBSESSION_ID %>';
            window.location.assign(_labUrl + 'USER_ID=' + userid + '&SESSION_ID=' + sessionid + '&MODULE_ID=' + MID);
        }

        function fn_DashboardClick() {
            var host = window.location.origin
            var _dbUrl = host + document.getElementById('ctl00_ContentPlaceHolder1_hdnDashboardURL').value;
            window.location.assign(_dbUrl);
            return false;
        }

        var DashBoardBinding = function () {

            var _Module_ID = $('[id$=hdnDashBoardModuleID]').val();
            var _User_ID = $('[id$=hdnUserId]').val();
            var row2 = localStorage.getItem('hdashboarddoc');
            if (row2 == '' || row2 == undefined || row2 == 'undefined') {
                GetAsync(
            "Private/dasboard.aspx/GetDashBoardBinding",
            { User_ID: _User_ID, Module_ID: _Module_ID },
            function (Data) {
                var row1 = JSON.parse(Data.d);
                localStorage.setItem('hdashboarddoc', Data.d);
                var row2 = localStorage.getItem('hdashboarddoc');
                var row = JSON.parse(row2);
                if (row != "" && row != null && row != undefined) {
                    var opt = "";
                    for (var i = 0; i < row.length; i++) {
                        var docName = row[i]["DOC_NAME"].toString();
                        var Url = row[i]["NEW_PAGE_URL"].toString();
                        opt += "<li id=\"" + Url + "\" onclick=\"listclick(this);\" title='" + docName + "' >" + docName + "</li>";
                    }
                    $("#list_itm ul").append(opt);
                }
            },
            function (jqXHR, textStatus, errorThrown) {
            });
            } else {
                var row2 = localStorage.getItem('hdashboarddoc');
                var row = JSON.parse(row2);
                if (row != "" && row != null && row != undefined) {
                    var opt = "";
                    for (var i = 0; i < row.length; i++) {
                        var docName = row[i]["DOC_NAME"].toString();
                        var Url = row[i]["NEW_PAGE_URL"].toString();
                        opt += "<li id=\"" + Url + "\" onclick=\"listclick(this);\" title='" + docName + "' >" + docName + "</li>";
                    }
                    $("#list_itm ul").append(opt);
                }
            }
        }
        function listclick(url) {

            var origin = window.location.origin;
            var _url = window.location.pathname.split('/')[1];
            if (url.id.indexOf('~') == 0) {
                url.id = url.id.substring(1, url.id.length);
            }
            window.location = origin + "/" + _url + url.id;
            return false;
        }
  
        $(document).ready(function () {
            $('.tooltip').tooltipster({
                theme: 'Light',
                animation: 'grow',
                delay: 200,
                side: 'top'
            });

            //DashBoardBinding();

        });
        $(document).ready(function () {
            var docid = document.getElementById('ctl00_hdndocsessionid').value;
            var ttt = jQuery.parseJSON(localStorage.getItem("hdocument"));
            if (ttt != null && ttt != undefined && document.title != 'Module View' && document.title != 'Admin Dashboard' && document.title != 'Inventory DashBoard' && document.title != 'Revenue Dashboard' && document.title != 'Statistics Dashboard' && document.title != 'Lab Admin. Dashboard' && document.title != 'Lab Service Status Dashboard') {
                for (var i = 0; i < ttt.length; i++) {
                    if (ttt[i].smid == docid && ttt[i].pdType != 'M') {
                        $('.pageheader>h1').show().text(ttt[i].smodule)
                        document.title = ttt[i].smodule;
                    } else {
                        $('.pageheader>h1').show();
                    }
                }
            }
            else {
                $('.pageheader>h1').show();
            }
        });
 