var _GlobalDocList = '';
globaldatetime = '';
(function ($) {
    $.fn.hasScrollBar = function () {
        return this.get(0).scrollHeight > this.height();
    };
})(jQuery);


var _iniUrl = "/" + window.location.pathname.split('/')[1] + "/";
var _parent_mid = '';
var Page = (function () {
    var HMmodule = [];
    var HMSmodule = [];
    var HMDocument = [];
    var LStorage = false;
    var SelectedModuleId;
    var SelectedModuleFmCd;
    var getJSONData = function () {
//        if (sessionStorage.getItem("ModuleDataDB") == null || sessionStorage.getItem("ModuleDataDB") == "" || sessionStorage.getItem("ModuleDataDB") == undefined) {
//            GetNonAsync(
//         "Private/Admin/View/ModuleView.aspx/GetDocumentsByUser",
//        {},
//        function (JData) {
//            sessionStorage.setItem('ModuleDataDB', JData.d);
//            DataSort(jQuery.parseJSON(JData.d));
//            _GlobalDocList = jQuery.parseJSON(JData.d);
//        },
//        function (jqXHR, textStatus, errorThrown) {

//        });
//        } else {
//            DataSort(jQuery.parseJSON(sessionStorage.getItem("ModuleDataDB")));
//        }
    };
    var DataSort = function (input) {
        for (var i in input) {
            if (input[i]["PARENT_DOC_ID"] == null) {
                HMmodule.push({ mid: input[i]["DOC_ID"], module: input[i]["DOC_DESC"], sorder: input[i]["DISPLAY_ORDER"], modformcd: input[i]["MODULE_FORM_CD"] });
            }
            else {
                if (input[i]["DOC_FROM"] == 'H') {
                    if (input[i]["DOC_DESC"] == "Admin DashBoard") {
                        document.getElementById('ctl00__Document_ID').value = input[i]["DOC_ID"];
                    }

                    HMDocument.push({ smid: input[i]["DOC_ID"], smodule: input[i]["DOC_DESC"], parentid: input[i]["PARENT_DOC_ID"], pageurl: input[i]["PAGE_URL"], dtype: input[i]["DOC_TYPE"], pdType: input[i]["DOC_ID_TYPE"], pmid: input[i]["PARENT_MODULE_ID"], istokensys: input[i].IS_TOKENSYSTEM, girdpageurl: input[i].GRID_PAGE_URL, smodname: input[i]["PARENT_DOC_DESC"], sorder: input[i]["DISPLAY_ORDER"], access_add: input[i]["ACCESS_ADD"], access_mod: input[i]["ACCESS_MOD"], docformcd: input[i]["DOC_FORM_CD"], parentdocformcd: input[i]["PAR_DOC_FORM_CD"], project: input[i]["PROJECT_CD"] });
                }
            }
        }
        if (LStorage) {
            localStorage.removeItem('hmodule');
            localStorage.removeItem('hdocument');

            localStorage.setItem('hmodule', JSON.stringify(HMmodule));
            localStorage.setItem('hdocument', JSON.stringify(HMDocument));

            LStorage = false;
        }
        BuildMenu();
    };
    var BuildMenu = function () {
        if ($('[id*=hdnextendedVal]').val() != null && $('[id*=hdnextendedVal]').val() != undefined) {
            if ($('[id*=hdnextendedVal]').val().toLowerCase() == "true") {
                if (!window.location.toString().toLowerCase().match(/extendeddisplay.aspx/)) {
                    if (localStorage.getItem("EXTNDDSPLY") != "1") {
                        if (localStorage.getItem("ED") != undefined && localStorage.getItem("ED") != null && localStorage.getItem("ED") != "") {
                            window.open(_iniUrl + "Private/FrontOffice/ExtendedDisplay.aspx", "myWindow", "width=10000,height=10000");
                            localStorage.setItem('EXTNDDSPLY', "1");
                        }
                    }
                }
                else {
                    if (localStorage.getItem("ED") != undefined && localStorage.getItem("ED") != null && localStorage.getItem("ED") != "") {
                        window.reload(_iniUrl + "Private/FrontOffice/ExtendedDisplay.aspx");
                    }
                }
            }
        }

        if ($("#dpl_modules option").length == 0) {
            for (var i in HMmodule) {
                if (SelectedModuleFmCd == 'DIAG' || SelectedModuleFmCd == 'STR' || SelectedModuleFmCd == 'DD' || SelectedModuleFmCd == 'ACCNTS' || SelectedModuleFmCd == 'EMISDB') {
                    SelectedModuleId = HMmodule[i]["mid"];
                    SelectedModuleFmCd = HMmodule[i]["modformcd"];
                }
                if ((i == 0) && SelectedModuleId == undefined) {
                    SelectedModuleId = HMmodule[i]["mid"];
                    SelectedModuleFmCd = HMmodule[i]["modformcd"];
                }
                if (SelectedModuleId == HMmodule[i]["mid"])
                    $("#dpl_modules").append($('<option selected="selected"></option>').val(HMmodule[i]["mid"] + '-' + HMmodule[i]["modformcd"]).html(HMmodule[i]["module"]));
                else
                    $("#dpl_modules").append($('<option></option>').val(HMmodule[i]["mid"] + '-' + HMmodule[i]["modformcd"]).html(HMmodule[i]["module"]));
            }
        }
        var smitem = "<ul>"; var sditem = "<ul>", docs = 0;
        for (var i in HMDocument) {
            if (HMDocument[i].parentid == SelectedModuleId && HMDocument[i].pdType == 'M') {
                var docname = HMDocument[i].smodule;
                if (HMDocument[i].pageurl == null || HMDocument[i].pageurl == '') { HMDocument[i].pageurl = "#"; }
                if ($("#dpl_modules").val() == '72') {
                    sditem += "<li><a onclick=\"fn_InboxClick()\" href='#' title='Open in a New Tab'  name='newtab'>&nbsp;</a><a onclick=\"ClickNewNavigation('" + HMDocument[i].pageurl.replace("~/", $("#_abspath").val()) + "','" + dtype + "' ,'" + docname + "')\" href='#' data-desc=\"" + HMDocument[i].smodule + "\"  data-type=\"" + HMDocument[i].dtype + "\" data-docformcd=\"" + HMDocument[i].docformcd + "\"  data-mid=\"" + HMDocument[i].parentid + "\"  data-id=\"" + HMDocument[i].smid + "\" data-tab=\"0\" data-istoken=\"" + HMDocument[i].istokensys + "\" data-gridurl=\"" + HMDocument[i].girdpageurl + "\">" + HMDocument[i].smodule + "</a></li>";
                }
                else {
                    var pageurl = HMDocument[i].pageurl + "?DOC_FORM_CD=" + HMDocument[i].docformcd;
                    smitem += "<li><a href='" + pageurl + "' data-mid=\"" + HMDocument[i].parentid + "\"  data-id=\"" + HMDocument[i].smid + "\" data_moduleid=\"" + HMDocument[i].pmid + "\" data_modulefrmcd=\"" + HMDocument[i].modformcd + "\">" + HMDocument[i].smodule + "<i></i></a></li>";
                }
            }
            else if (HMDocument[i].parentid == SelectedModuleId && HMDocument[i].pdType != 'M') {
                docs++;
                var did = $(this).data("id");
                var mid = $(this).data("mid");
                var dtype = $("#dpl_modules").val().split('-')[0] + '$' + HMDocument[i].parentid + '$' + HMDocument[i].smid + '$' + HMDocument[i].docformcd;
                var docname = HMDocument[i].smodule;

                if ($("#dpl_modules").val() == '72') {
                    sditem += "<li><a onclick=\"fn_InboxClick()\" data-tab=\"1\"  href='#' title='Open in a New Tab'  name='newtab'>&nbsp;</a><a onclick=\"fn_InboxClick()\" data-tab=\"0\"  href='#'>" + HMDocument[i].smodule + "</a></li>";
                }
                else {
                    sditem += "<li><a onclick=\"ClickNewWindowNavigation('" + HMDocument[i].pageurl.replace("~/", $("#_abspath").val()) + "','" + dtype + "')\" href='#' data-tab=\"1\" data-desc=\"" + HMDocument[i].smodule + "\" data-type=\"" + HMDocument[i].dtype + "\" data-docformcd=\"" + HMDocument[i].docformcd + "\" title='Open in a New Tab'  name='newtab' data-mid=\"" + HMDocument[i].parentid + "\"  data-id=\"" + HMDocument[i].smid + "\" data-istoken=\"" + HMDocument[i].istokensys + "\" data-gridurl=\"" + HMDocument[i].girdpageurl + "\" >&nbsp;</a><a onclick=\"ClickNewNavigation('" + HMDocument[i].pageurl.replace("~/", $("#_abspath").val()) + "','" + dtype + "','" + docname + "')\" href='#' data-desc=\"" + HMDocument[i].smodule + "\"  data-type=\"" + HMDocument[i].dtype + "\" data-docformcd=\"" + HMDocument[i].docformcd + "\"  data-mid=\"" + HMDocument[i].parentid + "\"  data-id=\"" + HMDocument[i].smid + "\" data-tab=\"0\" data-istoken=\"" + HMDocument[i].istokensys + "\" data-gridurl=\"" + HMDocument[i].girdpageurl + "\">" + HMDocument[i].smodule + "</a></li>";
                }
            }
        }

        smitem += "</ul>";
        $("#menudata").html(smitem);
        if (docs > 0) {
            sditem += "</ul>";
            $("#menudatasmall").html(sditem);
        }
        $("#menudata a").click(function () {
            _parent_mid = $(this).data("mid");
            HMDocument = HMDocument.sort(function (a, b) { return a.sorder - b.sorder });
            var docid = $(this).data("id");
            var doc = "<ul>";
            for (var i in HMDocument) {
                if (HMDocument[i].parentid == docid) {
                    if ($('[id*=hdnphymid]').val() == null || $('[id*=hdnphymid]').val() == undefined || $('[id*=hdnphymid]').val() == '') { $('[id*=hdnphymid]').val('0'); }
                    if (_parent_mid == $('[id*=hdnphymid]').val()) {
                        if (HMDocument[i].pageurl.indexOf('Type=Phy') == -1)
                            HMDocument[i].pageurl = HMDocument[i].pageurl + "?Type=Phy";

                        if (HMDocument[i].pageurl.indexOf('?') > 0)
                            doc += "<li><a href='" + HMDocument[i].pageurl.replace("~/", $("#_abspath").val()) + "&DOC_FORM_CD=" + HMDocument[i].docformcd + "' data-tab=\"1\" data-desc=\"" + HMDocument[i].smodule + "\" data-type=\"" + HMDocument[i].dtype + "\" data-docformcd=\"" + HMDocument[i].docformcd + "\" title='Open in a New Tab' name='newtab' data-mid=\"" + HMDocument[i].parentid + "\"  data-id=\"" + HMDocument[i].smid + "\" data-istoken=\"" + HMDocument[i].istokensys + "\" data-gridurl=\"" + HMDocument[i].girdpageurl + "\">&nbsp;</a><a href='" + HMDocument[i].pageurl.replace("~/", $("#_abspath").val()) + "&DOC_FORM_CD=" + HMDocument[i].docformcd + "' data-desc=\"" + HMDocument[i].smodule + "\"  data-type=\"" + HMDocument[i].dtype + "\" data-docformcd=\"" + HMDocument[i].docformcd + "\"  data-mid=\"" + HMDocument[i].parentid + "\"  data-id=\"" + HMDocument[i].smid + "\" data-tab=\"0\" data-istoken=\"" + HMDocument[i].istokensys + "\" data-gridurl=\"" + HMDocument[i].girdpageurl + "\">" + HMDocument[i].smodule + "</a></li>";
                        else
                            doc += "<li><a href='" + HMDocument[i].pageurl.replace("~/", $("#_abspath").val()) + "?DOC_FORM_CD=" + HMDocument[i].docformcd + "' data-tab=\"1\" data-desc=\"" + HMDocument[i].smodule + "\" data-type=\"" + HMDocument[i].dtype + "\" data-docformcd=\"" + HMDocument[i].docformcd + "\" title='Open in a New Tab' name='newtab' data-mid=\"" + HMDocument[i].parentid + "\"  data-id=\"" + HMDocument[i].smid + "\" data-istoken=\"" + HMDocument[i].istokensys + "\" data-gridurl=\"" + HMDocument[i].girdpageurl + "\">&nbsp;</a><a href='" + HMDocument[i].pageurl.replace("~/", $("#_abspath").val()) + "?DOC_FORM_CD=" + HMDocument[i].docformcd + "' data-desc=\"" + HMDocument[i].smodule + "\"  data-type=\"" + HMDocument[i].dtype + "\" data-docformcd=\"" + HMDocument[i].docformcd + "\"  data-mid=\"" + HMDocument[i].parentid + "\"  data-id=\"" + HMDocument[i].smid + "\" data-tab=\"0\" data-istoken=\"" + HMDocument[i].istokensys + "\" data-gridurl=\"" + HMDocument[i].girdpageurl + "\">" + HMDocument[i].smodule + "</a></li>";
                    }
                    else {
                        if (HMDocument[i].pageurl.indexOf('?') > 0)
                            doc += "<li><a href='" + HMDocument[i].pageurl.replace("~/", $("#_abspath").val()) + "&DOC_FORM_CD=" + HMDocument[i].docformcd + "' data-tab=\"1\" data-desc=\"" + HMDocument[i].smodule + "\" data-type=\"" + HMDocument[i].dtype + "\" data-docformcd=\"" + HMDocument[i].docformcd + "\" title='Open in a New Tab' name='newtab' data-mid=\"" + HMDocument[i].parentid + "\"  data-id=\"" + HMDocument[i].smid + "\" data-istoken=\"" + HMDocument[i].istokensys + "\" data-gridurl=\"" + HMDocument[i].girdpageurl + "\">&nbsp;</a><a href='" + HMDocument[i].pageurl.replace("~/", $("#_abspath").val()) + "&DOC_FORM_CD=" + HMDocument[i].docformcd + "' data-desc=\"" + HMDocument[i].smodule + "\"  data-type=\"" + HMDocument[i].dtype + "\" data-docformcd=\"" + HMDocument[i].docformcd + "\"  data-mid=\"" + HMDocument[i].parentid + "\"  data-id=\"" + HMDocument[i].smid + "\" data-tab=\"0\" data-istoken=\"" + HMDocument[i].istokensys + "\" data-gridurl=\"" + HMDocument[i].girdpageurl + "\">" + HMDocument[i].smodule + "</a></li>";
                        else
                            doc += "<li><a href='" + HMDocument[i].pageurl.replace("~/", $("#_abspath").val()) + "?DOC_FORM_CD=" + HMDocument[i].docformcd + "' data-tab=\"1\" data-desc=\"" + HMDocument[i].smodule + "\" data-type=\"" + HMDocument[i].dtype + "\" data-docformcd=\"" + HMDocument[i].docformcd + "\" title='Open in a New Tab' name='newtab' data-mid=\"" + HMDocument[i].parentid + "\"  data-id=\"" + HMDocument[i].smid + "\" data-istoken=\"" + HMDocument[i].istokensys + "\" data-gridurl=\"" + HMDocument[i].girdpageurl + "\">&nbsp;</a><a href='" + HMDocument[i].pageurl.replace("~/", $("#_abspath").val()) + "?DOC_FORM_CD=" + HMDocument[i].docformcd + "' data-desc=\"" + HMDocument[i].smodule + "\"  data-type=\"" + HMDocument[i].dtype + "\" data-docformcd=\"" + HMDocument[i].docformcd + "\"  data-mid=\"" + HMDocument[i].parentid + "\"  data-id=\"" + HMDocument[i].smid + "\" data-tab=\"0\" data-istoken=\"" + HMDocument[i].istokensys + "\" data-gridurl=\"" + HMDocument[i].girdpageurl + "\">" + HMDocument[i].smodule + "</a></li>";
                    }
                }
            }

            doc += "</ul>";
            $("#menudatasmall").html(doc);
            $("#menudata a").click(function (e) {
                e.preventDefault();
                var href = $(this).attr("href");
                var desc = $(this).data("desc");
                var dtype = $(this).data("type");
                var did = $(this).data("id");
                var mid = $(this).data("mid");
                var dtab = $(this).data("tab");
                var _istoken = $(this).data("istoken");
                var docfrmcd = $(this).data("docformcd");
                ongridurlKey($(this).data("gridurl"));
                if (/\?/i.test(href)) {
                    href += "&ID=" + desc + "&DOC_ID=" + did + "&DOC_TYPE=" + dtype + "&DOC_FORM_CD=" + docfrmcd;
                }
                else {
                    href += "?ID=" + desc + "&DOC_ID=" + did + "&DOC_TYPE=" + dtype + "&DOC_FORM_CD=" + docfrmcd;
                }
                if (desc != undefined && _istoken != undefined && mid != undefined && did != undefined) {

                    ManageSes($("#dpl_modules").val(), mid, did, desc, '', _istoken, docfrmcd);
                }
                if (parseInt(dtab) == 1) {
                    GetAsync(
                    "Private/dasboard.aspx/ManageSessions",
                    { ID: $("#dpl_modules").val(), MID: mid, DID: did, MNAME: '', URL: '', MFRMCD: '', DOCFORMCD: docfrmcd },
                    function (JData) {
                        window.open(href);
                    },
                    function (jqXHR, textStatus, errorThrown) {
                        e.preventDefault();
                    });
                }
                else {
                    GetAsync(
                    "Private/dasboard.aspx/ManageSessions",
                    { ID: $("#dpl_modules").val(), MID: mid, DID: did, MNAME: '', URL: '', MFRMCD: '', DOCFORMCD: docfrmcd },
                    function (JData) {
                        window.location = href;
                    },
                    function (jqXHR, textStatus, errorThrown) {
                        e.preventDefault();
                    });
                }
            });



            $("#menudatasmall ul li a").click(function (e) {
                e.preventDefault();
                var href = $(this).attr("href");
                var desc = $(this).data("desc");
                var dtype = $(this).data("type");
                var did = $(this).data("id");
                var mid = $(this).data("mid");
                var dtab = $(this).data("tab");
                var _istoken = $(this).data("istoken");
                var docfrmcd = $(this).data("docformcd");

                if (/\?/i.test(href)) {
                    href += "&ID=" + desc + "&DOC_ID=" + did + "&DOC_TYPE=" + dtype + "&DOC_FORM_CD=" + docfrmcd;
                }
                else {
                    href += "?ID=" + desc + "&DOC_ID=" + did + "&DOC_TYPE=" + dtype + "&DOC_FORM_CD=" + docfrmcd;
                }


                ongridurlKey($(this).data("gridurl"));
                if (desc != undefined && _istoken != undefined && mid != undefined && did != undefined) {
                    ManageSes($("#dpl_modules").val(), mid, did, desc, '', _istoken, docfrmcd);
                }
                if (parseInt(dtab) == 1) {
                    GetAsync(
                    "Private/dasboard.aspx/ManageSessions",
                    { ID: $("#dpl_modules").val().split('-')[0], MID: mid, DID: did, MNAME: '', URL: '', MFRMCD: $("#dpl_modules").val().split('-')[1], DOCFORMCD: docfrmcd },
                    function (JData) {
                        window.open(href);
                    },
                    function (jqXHR, textStatus, errorThrown) {
                        e.preventDefault();
                    });
                    ManageSes($("#dpl_modules").val(), mid, did, desc, '', _istoken);
                }
                else {
                    GetAsync(
                    "Private/dasboard.aspx/ManageSessions",
                    { ID: $("#dpl_modules").val().split('-')[0], MID: mid, DID: did, MNAME: '', URL: '', MFRMCD: $("#dpl_modules").val().split('-')[1], DOCFORMCD: docfrmcd },
                    function (JData) {
                        window.location = href;
                    },
                    function (jqXHR, textStatus, errorThrown) {
                        e.preventDefault();
                    });
                }
            });
        });
    };

    var NavigateURL;
    var BindMenu = function () {
        $("#dpl_modules").change(function () {
            SelectedModuleId = $(this).val().split('-')[0];
            SelectedModuleFmCd = $(this).val().split('-')[1];
            var host = $(location).attr('host');
            var MFRMCD = SelectedModuleFmCd;
            if (SelectedModuleFmCd == 'NST') {
                var pageurl = '~/Private/NurseStation/Nursemanagements.aspx';
                var Doc_Id = 5016;
                var _URL = pageurl.replace("~/", $("#_abspath").val());
                GetAsync(
                "Private/dasboard.aspx/ManageSessions",
                { ID: 0, MID: SelectedModuleId, DID: Doc_Id, MNAME: 'M', URL: pageurl.replace("~/", $("#_abspath").val()), MFRMCD: SelectedModuleFmCd, DOCFORMCD: '' },
                function (JData) {
                    if (/\?/i.test(_URL)) {
                        _URL += "&ID=" + 0 + "&DOC_ID=" + Doc_Id + "&DOC_TYPE=M";
                    }
                    else
                        _URL += "?ID=" + 0 + "&DOC_ID=" + Doc_Id + "&DOC_TYPE=M";

                    window.location.assign(_URL);
                },
                function (jqXHR, textStatus, errorThrown) {
                });

            }
            else if (SelectedModuleFmCd == 'ER') {
                var pageurl = '~/Private/FrontOffice/ER/ERList.aspx';
                var _URL = pageurl.replace("~/", $("#_abspath").val());
                GetAsync(
                "Private/dasboard.aspx/ManageSessions",
                { ID: 0, MID: SelectedModuleId, DID: SelectedModuleId, MNAME: 'M', URL: pageurl.replace("~/", $("#_abspath").val()), MFRMCD: SelectedModuleFmCd, DOCFORMCD: '' },
                function (JData) {
                    if (/\?/i.test(_URL)) {
                        _URL += "&ID=" + 0 + "&DOC_ID=" + SelectedModuleId + "&DOC_TYPE=M";
                    }
                    else
                        _URL += "?ID=" + 0 + "&DOC_ID=" + SelectedModuleId + "&DOC_TYPE=M";
                    window.location.assign(_URL);
                },
                function (jqXHR, textStatus, errorThrown) {
                });


            }
            else if (SelectedModuleFmCd == 'DIA') {
                var pageurl = '~/Private/Dialosys/DialysisDashboard.aspx';
                var _URL = pageurl.replace("~/", $("#_abspath").val());
                GetAsync(
                "Private/dasboard.aspx/ManageSessions",
                { ID: 0, MID: SelectedModuleId, DID: SelectedModuleId, MNAME: 'M', URL: pageurl.replace("~/", $("#_abspath").val()), MFRMCD: SelectedModuleFmCd, DOCFORMCD: '' },
                function (JData) {
                    if (/\?/i.test(_URL)) {
                        _URL += "&ID=" + 0 + "&DOC_ID=" + SelectedModuleId + "&DOC_TYPE=M";
                    }
                    else
                        _URL += "?ID=" + 0 + "&DOC_ID=" + SelectedModuleId + "&DOC_TYPE=M";
                    window.location.assign(_URL);
                },
                function (jqXHR, textStatus, errorThrown) {
                });


            }

            else if (MFRMCD == 'DD' || MFRMCD == 'STR' || MFRMCD == 'CHSS' || MFRMCD == 'HK' || MFRMCD == 'TRNS' || MFRMCD == 'CSSD' || MFRMCD == 'ASTMGMNT' || MFRMCD == 'ACCNTS' || MFRMCD == 'BB' || MFRMCD == 'OT' || MFRMCD == 'DT' || MFRMCD == 'MSG' || MFRMCD == 'TLY' || MFRMCD == 'EMISDB') {
                GetAsync(
                "Private/dasboard.aspx/ManageSessionIds",
                { Type: SelectedModuleFmCd },
                function (result) {
                    href = "http://" + host + result.d;
                    window.location = href;
                });
            }
            else if (MFRMCD == "DIAG") {
                var _NavigateURL = host + document.getElementById('ctl00_ContentPlaceHolder1_hdnLaboratoryUrl').value;
                href = "http://" + _NavigateURL + 'USER_ID=' + user_id + '&SESSION_ID=' + session_id + '&LOC_ID=' + Loc_Id + '&LOC_NAME=' + Loc_name + '&MODULE_FORM_CD=' + MFRMCD;
                window.location = href;
            }
            else {
                var doc = "<ul></ul>";
                $("#menudatasmall").html(doc);
                BuildMenu();
            }

        });
        if (window.localStorage) {
            LStorage = true;
            var othermodule = '';
            if (localStorage["hmodule"] == undefined || localStorage["hmodule"] == null || localStorage["hmodule"] == "") { localStorage["hmodule"] = ""; }
            if (localStorage["hmodule"] != "") {
                othermodule = JSON.parse(localStorage["hmodule"])[0]["modformcd"];
            }
            if (localStorage["hmodule"] != "" && othermodule != 'DIAG' && othermodule != 'ER' && othermodule != 'STR' && othermodule != 'DD' && othermodule != 'ACCNTS' && othermodule != 'HK' && othermodule != 'TRNS' && othermodule != 'CSSD' && othermodule != 'ASTMGMNT' && othermodule != 'RIS' && othermodule != 'TLY' && othermodule != 'OT' && othermodule != 'DT' && othermodule != 'BB' && othermodule != 'APPTS' && othermodule != 'EMISDB') {
                HMmodule = jQuery.parseJSON(localStorage.getItem("hmodule"));
                HMDocument = jQuery.parseJSON(localStorage.getItem("hdocument"));
                BuildMenu();
            }
            else {
                getJSONData();
            }
        }
        else {
            getJSONData();
        }
    };
    var QuickSearchURL = "";
    var modulename = "";
    var _pageurl2 = ""; var qheight = 0;
    var QuickSearch = function () {
        $(".quicksearch").keyup(function (e) {
            var _val = $(this).val();
            var $current = $("#qsoptions ul li.highlight");
            if (e.keyCode != 40 && e.keyCode != 38) {
                qheight = 0;
                $("#qsoptions ul").empty();
                var cnt = 0;
                var re = new RegExp(_val, "ig");
                for (var i in HMDocument) {

                    var _smodule = HMDocument[i].smodule;
                    if ((_smodule.match(re) && cnt < 20 || _smodule.toLowerCase().indexOf(re.source) > 0 && cnt < 20) && HMDocument[i].pdType != 'M' && HMDocument[i].project != 'TALLY') {
                        var _pageurl = HMDocument[i].pageurl.replace("~/", $("#_abspath").val());
                        if (/\?/i.test(_pageurl)) {
                            _pageurl += "&ID=" + HMDocument[i].smodule + "&DOC_ID=" + HMDocument[i].smid + "&DOC_TYPE=" + HMDocument[i].dtype + "&DOC_FORM_CD=" + HMDocument[i].docformcd + '^' + HMDocument[i].pmid + '$' + HMDocument[i].parentid + '$' + HMDocument[i].smid + '$' + HMDocument[i].docformcd;
                        }
                        else {
                            _pageurl += "?ID=" + HMDocument[i].smodule + "&DOC_ID=" + HMDocument[i].smid + "&DOC_TYPE=" + HMDocument[i].dtype + "&DOC_FORM_CD=" + HMDocument[i].docformcd + '^' + HMDocument[i].pmid + '$' + HMDocument[i].parentid + '$' + HMDocument[i].smid + '$' + HMDocument[i].docformcd;
                        }
                        if (cnt == 0) {
                            $("#qsoptions ul").append("<li class=\"highlight\"  data-url=\"" + _pageurl + "\" title=\"" + _smodule + "(" + HMDocument[i].smodname + ")" + "\" class='gs' data-istoken=\"" + HMDocument[i].istokensys + "\" data-gridurl=\"" + HMDocument[i].girdpageurl + "\">" + _smodule + "(" + HMDocument[i].smodname + ")" + "</li>");
                        }
                        else
                            $("#qsoptions ul").append("<li data-url=\"" + _pageurl + "\" title=\"" + _smodule + "(" + HMDocument[i].smodname + ")" + "\" class='gs' data-istoken=\"" + HMDocument[i].istokensys + "\" data-gridurl=\"" + HMDocument[i].girdpageurl + "\">" + _smodule + "(" + HMDocument[i].smodname + ")" + "</li>");
                        cnt++;
                       // $('[id*=hdngdocformcd]').val(HMDocument[i].docformcd);
                    }
                }
                $("#qsoptions").show();
                $("#qsoptions ul li").on("click", function () {
                    $(".quicksearch").val($(this).text());
                    var istoken = $(this).data("istoken");
                    localStorage.setItem("ISTOKEN", istoken);
                    ongridurlKey($(this).data("gridurl"));
                    QuickSearchURL = $(this).data("url");
                    $("#qsoptions").hide();
                });
            }
            else if (e.keyCode == 40) {
                $("#qsoptions ul li").each(function (i, j) {
                    $(this).removeClass();
                });
                if ($current.next("li").length != 0)
                    $current.next("li").addClass("highlight");
                else
                    $current.addClass("highlight");

                qheight = qheight + $("#qsoptions ul li.highlight").height();
                if (qheight > $("#qsoptions").height())
                    $("#qsoptions").scrollTop($("#qsoptions").scrollTop() + $current.height());

                $(this).val($("#qsoptions ul li.highlight").text());
                var istoken = $("#qsoptions ul li.highlight").data("istoken");
                localStorage.setItem("ISTOKEN", istoken);
                ongridurlKey($("#qsoptions ul li.highlight").data("gridurl"));
                QuickSearchURL = $("#qsoptions ul li.highlight").data("url");
            }
            else if (e.keyCode == 38) {
                $("#qsoptions ul li").each(function (i, j) {
                    $(this).removeClass();
                });
                if ($current.prev("li").length != 0) {
                    $current.prev("li").addClass("highlight");
                    $("#qsoptions").scrollTop($("#qsoptions").scrollTop() - $current.height());
                }
                else
                    $current.addClass("highlight");


                $(this).val($("#qsoptions ul li.highlight").text());
                var istoken = $("#qsoptions ul li.highlight").data("istoken");
                localStorage.setItem("ISTOKEN", istoken);
                ongridurlKey($("#qsoptions ul li.highlight").data("gridurl"));
                QuickSearchURL = $("#qsoptions ul li.highlight").data("url");
            }
        });
        $(".quicksearch").keydown(function (e) {
            if (e.keyCode == 13) {
                var Ids = QuickSearchURL.split('^')[1];
                if (Ids != undefined && Ids != null && Ids != '') {
                    GetAsync(
                            "Private/dasboard.aspx/ManageSessions",
                            { ID: Ids.split('$')[0], MID: Ids.split('$')[1], DID: Ids.split('$')[2], MNAME: '', URL: '', MFRMCD: '', DOCFORMCD: Ids.split('$')[3] },
                            function (JData) {
                                e.preventDefault();
                                window.location.assign(QuickSearchURL.split('^')[0]);
                            },
                            function (jqXHR, textStatus, errorThrown) {
                            });
                }
            }
            if (e.keyCode == 9) {
                $("#qsoptions").hide();
            }
        });
        $(".dnavigate").click(function (e) {
            e.preventDefault();
            var Ids = QuickSearchURL.split('^')[1];
            if (Ids != undefined && Ids != null && Ids != '') {
                GetAsync(
                        "Private/dasboard.aspx/ManageSessions",
                        { ID: Ids.split('$')[0], MID: Ids.split('$')[1], DID: Ids.split('$')[2], MNAME: '', URL: '', MFRMCD: '', DOCFORMCD: Ids.split('$')[3] },
                        function (JData) {
                            e.preventDefault();
                            if (Ids.split('$')[0] == '371')
                                window.location.assign(QuickSearchURL.split('^')[0] + "&Type=Phy");
                            else
                                window.location.assign(QuickSearchURL.split('^')[0]);
                        },
                        function (jqXHR, textStatus, errorThrown) {
                        });
            }
        });
        $(".newtab").click(function (e) {
            var Ids = QuickSearchURL.split('^')[1];
            if (Ids != undefined && Ids != null && Ids != '') {
                GetAsync(
                        "Private/dasboard.aspx/ManageSessions",
                        { ID: Ids.split('$')[0], MID: Ids.split('$')[1], DID: Ids.split('$')[2], MNAME: '', URL: '', MFRMCD: '', DOCFORMCD: Ids.split('$')[3] },
                        function (JData) {
                            if (Ids.split('$')[0] == '371')
                                window.open(QuickSearchURL.split('^')[0] + "&Type=Phy");
                            else
                                window.open(QuickSearchURL.split('^')[0]);
                            e.preventDefault();
                        },
                        function (jqXHR, textStatus, errorThrown) {
                            e.preventDefault();
                        });
            }
            e.preventDefault();
        });
        $(".quicksearch").blur(function () {
        });
        $(".quicksearch").focus(function () {
            if ($("#qsoptions ul li").length > 1) {
                $("#qsoptions").show();
            }
            $("#qsoptions").css({ top: ($("#gsearch input[type='text']").outerHeight() - 2) + "px", 'min-width': ($("#gsearch input[type='text']").outerWidth() - 1) + "px", 'left': '1px' });
        });

        $(document).click(function (e) {
            if (e.target.className !== "gs") {

                $("#qsoptions").hide();
            }
        });
        $("#bookmarkico").click(function (e) {
            GetSavedDocs();
        });


        $(".quicksearch_bkmrks").keyup(function (e) {
            var _val = $(this).val();
            var $current = $("#qsoptions_bookmarks ul li.highlight");
            if (e.keyCode != 40 && e.keyCode != 38) {
                $("#qsoptions_bookmarks ul").empty();
                var cnt = 0;
                var re = new RegExp(_val, "ig");
                for (var i in HMDocument) {
                    var _smodule = HMDocument[i].smodule;
                    if ((_smodule.match(re) && cnt < 20 || _smodule.toLowerCase().indexOf(re.source) > 0 && cnt < 20) && HMDocument[i].pdType != 'M') {
                        var _pageurl = HMDocument[i].pageurl.replace("~/", $("#_abspath").val());
                        if (/\?/i.test(_pageurl)) {
                            _pageurl += "&ID=" + HMDocument[i].smodule + "&DOC_ID=" + HMDocument[i].smid + "&DOC_TYPE=" + HMDocument[i].dtype + '^' + HMDocument[i].pmid + '$' + HMDocument[i].parentid + '$' + HMDocument[i].smid + '$' + HMDocument[i].docformcd;
                        }
                        else {
                            _pageurl += "?ID=" + HMDocument[i].smodule + "&DOC_ID=" + HMDocument[i].smid + "&DOC_TYPE=" + HMDocument[i].dtype + '^' + HMDocument[i].pmid + '$' + HMDocument[i].parentid + '$' + HMDocument[i].smid + '$' + HMDocument[i].docformcd;
                        }
                        if (cnt == 0) {
                            $("#qsoptions_bookmarks ul").append("<li class=\"highlight\"  data-url=\"" + _pageurl + "\" class='gs_bkmrks' data-istoken=\"" + HMDocument[i].istokensys + "\" data-gridurl=\"" + HMDocument[i].girdpageurl + "\">" + _smodule + "</li>");
                        }
                        else
                            $("#qsoptions_bookmarks ul").append("<li data-url=\"" + _pageurl + "\" class='gs_bkmrks' data-istoken=\"" + HMDocument[i].istokensys + "\" data-gridurl=\"" + HMDocument[i].girdpageurl + "\">" + _smodule + "</li>");
                        cnt++;
                    }

                }
                $("#qsoptions_bookmarks").show();
                $("#qsoptions_bookmarks ul li").on("click", function () {
                    $(".quicksearch_bkmrks").val($(this).html());
                    var istoken = $(this).data("istoken");
                    localStorage.setItem("ISTOKEN", istoken);
                    QuickSearchURL = $(this).data("url");
                    QuickSearchGridURL = $(this).data("gridurl");
                    $("#qsoptions_bookmarks").hide();
                });
            }
            else if (e.keyCode == 40) {
                $("#qsoptions_bookmarks ul li").each(function (i, j) {
                    $(this).removeClass();
                });
                if ($current.next("li").length != 0)
                    $current.next("li").addClass("highlight");
                else
                    $current.addClass("highlight");
                $(this).val($("#qsoptions_bookmarks ul li.highlight").text());
                var istoken = $("#qsoptions_bookmarks ul li.highlight").data("istoken");
                localStorage.setItem("ISTOKEN", istoken);
                QuickSearchURL = $("#qsoptions_bookmarks ul li.highlight").data("url");
                QuickSearchGridURL = $('#qsoptions_bookmarks ul li.highlight').data("gridurl");
            }
            else if (e.keyCode == 38) {
                $("#qsoptions_bookmarks ul li").each(function (i, j) {
                    $(this).removeClass();
                });
                if ($current.prev("li").length != 0)
                    $current.prev("li").addClass("highlight");
                else
                    $current.addClass("highlight");
                $(this).val($("#qsoptions_bookmarks ul li.highlight").text());
                var istoken = $("#qsoptions_bookmarks ul li.highlight").data("istoken");
                localStorage.setItem("ISTOKEN", istoken);
                QuickSearchURL = $("#qsoptions_bookmarks ul li.highlight").data("url");
                QuickSearchGridURL = $('#qsoptions_bookmarks ul li.highlight').data("gridurl");
            }
        });
        $(".quicksearch").keydown(function (e) {
            if (e.keyCode == 13) {
                var Ids = QuickSearchURL.split('^')[1];
                GetAsync(
            "Private/dasboard.aspx/ManageSessions",
            { ID: Ids.split('$')[0], MID: Ids.split('$')[1], DID: Ids.split('$')[2], MNAME: '', URL: '', MFRMCD: '', DOCFORMCD: Ids.split('$')[3] },
            function (JData) {
                e.preventDefault();
                window.location.assign(QuickSearchURL.split('^')[0]);
            },
            function (jqXHR, textStatus, errorThrown) {
            });
            }
        });
        $(".dnavigate").click(function (e) {
            e.preventDefault();
            var Ids = QuickSearchURL.split('^')[1];
            if (Ids != undefined && Ids != null && Ids != '') {
                GetAsync(
            "Private/dasboard.aspx/ManageSessions",
            { ID: Ids.split('$')[0], MID: Ids.split('$')[1], DID: Ids.split('$')[2], MNAME: '', URL: '', MFRMCD: '', DOCFORMCD: Ids.split('$')[3] },
            function (JData) {
                e.preventDefault();
                window.location.assign(QuickSearchURL.split('^')[0]);
            },
            function (jqXHR, textStatus, errorThrown) {
            });
            }
        });
        /*    $(".icon-plus-1").click(function (e) {

        var Ids = QuickSearchURL.split('^')[1];
        var GridUrl = QuickSearchGridURL;
        GetAsync(
        "Private/dasboard.aspx/ManageSessions",
        { ID: Ids.split('$')[0], MID: Ids.split('$')[1], DID: Ids.split('$')[2], MNAME: '', URL: '', MFRMCD: '', DOCFORMCD: Ids.split('$')[3] },
        function (JData) {
        SaveBookmark(QuickSearchURL, GridUrl);
        },
        function (jqXHR, textStatus, errorThrown) {
        e.preventDefault();
        });
        e.preventDefault();
        });*/
        $(".quicksearch_bkmrks").blur(function () {
        });
        $(".quicksearch_bkmrks").focus(function () {
            if ($("#qsoptions_bookmarks ul li").length > 1) {
                $("#qsoptions_bookmarks").show();
            }
            $("#qsoptions_bookmarks").css({ top: ($("#gsearch input[type='text']").outerHeight() - 0) + "28px", 'min-width': ($("#gsearch input[type='text']").outerWidth() - 1) + "px", 'left': '0px', 'position': 'absolute', 'z-index': '999' });
        });
        $(".quicksearch_bkmrks").focus(function () {

            if ($("#qsoptions_bookmarks ul li").length > 1) {
                $("#qsoptions_bookmarks").show();
            }
            $("#qsoptions_bookmarks").css({ top: ($("#gsearch_bkmrks input[type='text']").outerHeight() - 0) + "28px", 'min-width': ($("#gsearch_bkmrks input[type='text']").outerWidth() - 1) + "px", 'left': '0px', 'position': 'absolute', 'z-index': '999' });
        });
        $(document).click(function (e) {

            if (e.target.className !== "gs") {
                $("#qsoptions_bookmarks").hide();
            }
        });
    }
    return {
        Init: function (sessionID) {
            if (sessionID != undefined)
                SelectedModuleId = sessionID;
            BindMenu();
            QuickSearch();
        },
        getURL: function () {
            return QuickSearchURL;
        }
    }
} ());
function ClickNewWindowNavigation(link, dtype) {
    GetAsync(
        "Private/dasboard.aspx/ManageSessions",
        { ID: dtype.split('$')[0], MID: dtype.split('$')[1], DID: dtype.split('$')[2], MNAME: '', URL: '', MFRMCD: '', DOCFORMCD: dtype.split('$')[3] },
        function (JData) {
            window.open(link);
        },
        function (jqXHR, textStatus, errorThrown) {
            e.preventDefault();
        });
}
function ClickNewNavigation(link, dtype, docname) {
    GetAsync(
        "Private/dasboard.aspx/ManageSessions",
        { ID: dtype.split('$')[0], MID: dtype.split('$')[1], DID: dtype.split('$')[2], MNAME: '', URL: '', MFRMCD: '', DOCFORMCD: dtype.split('$')[3] },
        function (JData) {
            window.location = link;
        },
        function (jqXHR, textStatus, errorThrown) {
            e.preventDefault();
        });
}
function GetAsync(_url, params, csuccess, cfail) {
    $.ajax({
        type: "POST",
        url: _iniUrl + _url,
        dataType: "json",
        data: JSON.stringify(params),
        contentType: "application/json; charset=utf-8",
        error: function (jqXHR, textStatus, errorThrown) {
            cfail(jqXHR, textStatus, errorThrown);
        },
        success: function (JData) {
            csuccess(JData);
        }
    });
};
function GetAsyncc(_url, params, csuccess, cfail) {
    $.ajax({
        type: "POST",
        url: _url,
        crossDomain: true,
        dataType: "json",
        data: JSON.stringify(params),
        contentType: "application/json; charset=utf-8",
        error: function (jqXHR, textStatus, errorThrown) {
            cfail(jqXHR, textStatus, errorThrown);
        },
        success: function (JData) {
            csuccess(JData);
        }
    });
};

function GetNonAsync(_url, params, csuccess, cfail) {
    $.ajax({
        type: "POST",
        url: _iniUrl + _url,
        dataType: "json",
        async: false,
        data: JSON.stringify(params),
        contentType: "application/json; charset=utf-8",
        error: function (jqXHR, textStatus, errorThrown) {
            cfail(jqXHR, textStatus, errorThrown);
        },
        success: function (JData) {
            csuccess(JData);
        }
    });
};
function ReturnAsync(_url, params, csuccess, cfail) {
    $.ajax({
        type: "POST"
            , url: _iniUrl + _url
            , dataType: "json"
            , data: JSON.stringify(params)
            , contentType: "application/json; charset=utf-8"
            , success: function (JData) {
                csuccess(JData);
            }
            , error: function (jqXHR, textStatus, errorThrown) {
                cfail(jqXHR, textStatus, errorThrown);
            }
    });
};
function ReturnIniUrl() {
    return _iniUrl;
};


function sortByKey(array, key, dir) {
    return array.sort(function (a, b) {
        var x = a[key].toLowerCase();
        var y = b[key].toLowerCase();
        if (dir === "asc")
            return ((x < y) ? -1 : ((x > y) ? 1 : 0));
        else
            return ((x > y) ? -1 : ((x < y) ? 1 : 0));
    });
}
function sortByKey(array, key, dir, ctype) {
    ctype = ctype == null ? 's' : ctype;
    return array.sort(function (a, b) {
        var x, y;
        if (ctype == 's' && a[key] != null) {
            x = a[key].toLowerCase();
            y = b[key].toLowerCase();
        }
        else if (ctype == 'i' && a[key] != null) {
            x = a[key];
            y = b[key];
        }
        else if (ctype == 'd' && a[key] != null) {
            x = new Date(a[key]);
            y = new Date(b[key]);
        }
        if (dir === "asc")
            return ((x < y) ? -1 : ((x > y) ? 1 : 0));
        else
            return ((x > y) ? -1 : ((x < y) ? 1 : 0));
    });
}
function GetDates(_type, _dt) {
    var fDt = new Date().format('dd-MMM-yyyy'); var tDt = fDt;
    if (_dt != null) {
        if (_dt.length == 11) {
            fDt = _dt; tDt = _dt;
        }
        else {
            var a = _dt.split(' - ')
            if (a.length > 1) {
                fDt = _dt.split(' - ')[0]; tDt = _dt.split(' - ')[1];
            }
            else {
                fDt = _dt; tDt = _dt;
            }
        }
    }
    if (_type == 'FROM_DT') {
        return fDt;
    }
    else {
        return tDt;
    }
}
function GetModDocId() {
    try {
        var _mDocId = 0; _docName = window.location.pathname.split('.')[0].split('/');
        _docName = _docName[_docName.length - 1];
        var _docs = jQuery.parseJSON(localStorage.getItem("document"));
        for (var _dm in _docs) {
            var _pg = _docs[_dm].girdpageurl.split('.')[0].split('/');
            var _npg = _docs[_dm].pageurl.split('.')[0].split('/');
            if (_npg[_npg.length - 1].toLowerCase().toString() == _docName.toLowerCase().toString() || _pg[_pg.length - 1].toLowerCase().toString() == _docName.toLowerCase().toString()) {
                return _docs[_dm].pmid + '@' + _docs[_dm].smid;
            }
        }
    } catch (e) { return '0@0'; }
}
function SaveBookmark(QuickSearchURL, GridUrl) {

    var Ids = QuickSearchURL.split('^')[1].split('$');
    var doc_name = QuickSearchURL.split('&')[0].split('=')[1]
    var doc_id = Ids[2]; var moduleid = Ids[0]; var submoduleid = Ids[1];
    var Grid_Url = GridUrl;
    GetAsync(
      "Private/dasboard.aspx/SaveBookMarks",
      { doc_id: doc_id, doc_name: doc_name, moduleid: moduleid, modulename: '', submoduleid: submoduleid, new_page_url: QuickSearchURL, page_url: Grid_Url },
      function (data) {
          $(".stoast").toastText("Warning", "saved successfully", 5, 1);
          document.getElementById('Text2').value = '';
          GetSavedDocs();
      },
      function (jqXHR, textStatus, errorThrown) {
      });
}
function GetSavedDocs() {
    GetAsync(
    "Private/dasboard.aspx/GetDocMarks",
    {},
    function (data) {
        $('[id*=next]').html('');
        var data = data.d[0];
        var tr = ''; var doc_name = ''; var page_url = '';
        var Grid_url = '';
        for (i = 0; i < data.length; i++) {
            tr = ''; doc_name = data[i].DOC_NAME; page_url = data[i].NEW_PAGE_URL;
            Grid_Url = data[i].PAGE_URL;
            tr += '<div class="drag-doc-panel"><div class="iconlist"><i title="Add New" id="Add_' + data[i].DOCUMENT_BOOKMARK_ID + '^' + page_url + '" class="tooltip icon-plus-2" New_page_url=' + page_url + ' onclick="AddPage(this)"></i><i title="Grid View" id="Grid_' + data[i].DOCUMENT_BOOKMARK_ID + '^' + Grid_Url + '"   onclick="return OnClickGrid(this);" class="tooltip icon-th-large-outline"></i><i title="Remove" id="Rmv_' + data[i].DOCUMENT_BOOKMARK_ID + '" onclick="return OnClose(this);" class="tooltip icon-cancel-1"></i></div><div class="drag-doc-body"> <div class="doc-name"><h2>' + doc_name + '</h2></div><div class="doc-submodule"><h2><i class="lab-testtube-5"></i><label>' + doc_name + '</label></h2></div></div>';
            $('[id*=next]').append(tr);
        }

    }, function (jqXHR, textStatus, errorThrown) {
    });
}
function AddPage(url) {

    var New_Url = url.id.split('^')[1] + url.id.split('^')[2]
    window.open(New_Url, '_blank');
}
function OnClose(obj) {
    var doc_bkmrk_id = obj.id.split('_')[1];
    var doc_name = '';
    GetAsync(
      "Private/dasboard.aspx/RemoveBookMarks",
      { _doc_bkmrk_id: doc_bkmrk_id, _doc_name: doc_name, _flag: 'D' },
      function (data) {
          $(".stoast").toastText("Warning", "Removed successfully", 5, 3);
          GetSavedDocs();
      },
      function (jqXHR, textStatus, errorThrown) {
      });
    return false;
}


function OnClickGrid(obj) {

    var Grid_Url = obj.id.split('^')[1];
    Grid_Url = Grid_Url.split('~')[1];
    Grid_Url = "/User Interface" + Grid_Url;
    window.open(Grid_Url, '_blank');
    return false;
}
(function ($) {
    $.fn.jtable = function (opt) {
        if (opt.IsClientGrid == "Y") {
            BindSuvarnaGrid(opt, $(this).attr("id"));
        }
        else {
            var _self = $(this);
            var _selfid = $(this).attr("id");
            var _tableID = "";
            var _template = opt.template || [];
            var _header = opt.header || "";
            var _wsPath = opt.wsPath || "";
            var _wsFilterPath = opt.wsFilterPath || "";
            var _noData = opt.noData || "No Record(s) Found";
            var _defaultWSParams = opt.defaultWSParams || {};
            var _defaultWSFilterParams = opt.defaultWSFilterParams || {};
            var _ExportParams = opt.ExportParams || {};
            var _enableSorting = opt.enableSorting || false;
            var _enablePaging = opt.enablePaging || false;
            var _enableFilter = opt.enableFilter || false;
            var _enableCheckbox = opt.enableCheckbox || false;
            var _selectedRows = [];
            var _enableDateFilter = opt.enableDateFilter || false;
            var _table = null;
            var _enableTrace = opt.enableTrace || false;
            var _dataKey = opt.dataKey || "";
            var _callService = opt.callService || false;
            var _rowClick = opt.rowClick || {};
            var _rowDataBound = opt.rowDataBound || {};
            var _onUnload = null;
            var _dataReady = opt.onDataReady || null;
            if (typeof opt.onUnload === "function") {
                _onUnload = opt.onUnload;
            }


            var _likeLookup = opt.likeLookup || false;
            var _isElipse = (opt.isElipse == undefined ? true : opt.isElipse ? true : false) || false;
            var _elipseLength = opt.elipseLength || 1;
            var _RowDataBinding = opt.RowDataBinding || {};
            opt.defaultWSParams.pageNum = opt.pageNum || 1;
            opt.defaultWSParams.pageSize = opt.pageSize || 10;

            var _advSrch = opt.advSrch || '';
            var _PrevadvSrch = '';
            var _eventFlag = 1;
            var __jsonPrevDataCount = 0;
            var _RowNo = opt.RowNo || false;
            var _sno = opt.sno || 1;
            var _tableTemplate = opt.tableTemplate || false;
            if (opt.enableFooterRows == undefined) { opt.enableFooterRows = true; }
            var _enableFooterRows = opt.enableFooterRows || false;
            var _enableFocus = opt.enableFocus || false;
            var FootrRow = '';
            var _enableDMS = opt.enableDMS || false;
            if (opt.enableDMS == false) {
                _enableDMS = false;
            }
            if (_enableDMS != false) {
                if ($('[id*=hdnDMSPermissions]').val() != '[]' && $('[id*=hdnDMSPermissions]').val() != undefined && $('[id*=hdnDMSPermissions]').val() != null && $('[id*=hdnDMSPermissions]').val() != '' && _tableTemplate == false) {
                    _enableDMS = true;
                }
            }
            var __eventsSetup = false;
            var __buildheaderfooter = false;
            var __availPages = 0;
            var __size, __tpages;
            var __jsonData = [];
            var __jsonDataCount = 0;
            var __AJAX = true;
            if (_wsPath != "") {
                _self.html("<table id=\"tbl_" + _selfid + "\" border=\"0\" cellpadding=\"0\" class=\"jtblgrid\" cellspacing=\"0\"></table>");
                _table = _self.find("table");
                _tableID = $("#tbl_" + _selfid);
                if (_tableTemplate == false) {
                    if (__buildheaderfooter == true) {
                        getAJAXTableData();
                    }
                    else {
                        buildHeaderFooter();
                        if (localStorage.getItem("advSrch") != null && localStorage.getItem("advSrch") != "" && localStorage.getItem("advSrch") != undefined) {
                            _sno = ((parseInt(opt.defaultWSParams.pageNum) - 1) * opt.defaultWSParams.pageSize) + 1;
                            buildBody();
                        }

                        $("#tbl_" + _selfid).find('.tabelfoot').css('display', 'none');
                    }
                }
                else {
                    getAJAXTableData();
                }
            }
            else {
                trace("Webservice Path not provided.");
            }


            function trace(a, b) {
                try {
                    if (_enableTrace) {
                    }
                } catch (e) { }
            }

            function getAJAXTableData() {
                trace("Webserivce parameters shown Below", _defaultWSParams);
                try {
                    if (_defaultWSParams["_advSrch"] != null) {
                        _defaultWSParams["_advSrch"] = _advSrch;
                    }
                } catch (e) { }

                _ExportParams.IP_PAGENUM = _defaultWSParams["pageNum"];
                _ExportParams.IP_PAGESIZE = _defaultWSParams["pageSize"];
                _ExportParams.IP_ADVANCE_SEARCH = _defaultWSParams["_advSrch"];
                if (_PrevadvSrch == _advSrch + "#" + _defaultWSParams["_fDt"] + "#" + _defaultWSParams["_tDt"])
                    _eventFlag = 0;
                else
                    _eventFlag = 1;

                _defaultWSParams["_eventFlag"] = _eventFlag;
                _PrevadvSrch = _advSrch + "#" + _defaultWSParams["_fDt"] + "#" + _defaultWSParams["_tDt"];
                var ParentParams = '';
                var Path = '';
                if (_ExportParams["PROC"] != undefined) {
                    if (_defaultWSParams["_fDt"] != undefined)
                        _ExportParams.IP_FROM_DT = _defaultWSParams["_fDt"];
                    if (_defaultWSParams["_tDt"] != undefined)
                        _ExportParams.IP_TO_DT = _defaultWSParams["_tDt"];
                    ExportParams(_ExportParams, _header, _template);
                    ParentParams = { Params: $('[id*=hdnExportParams]').val() };
                    Path = 'GridService.asmx/BindGetAllGrid';
                    $('[id*=hdnWSPath]').val(Path);
                    $('[id*=hdnWSParams]').val(JSON.stringify(ParentParams));
                }
                else {
                    ParentParams = _defaultWSParams;
                    Path = _wsPath;
                    $('[id*=hdnWSPath]').val(Path);
                    $('[id*=hdnWSParams]').val(JSON.stringify(ParentParams));
                    ExportParams(ParentParams, _header, _template);
                }
                if ($('#progress')[0] != null || $('#progress')[0] != undefined) {
                    if ($('#progress')[0].style.display == 'block') { $("#progressshow").show(); }
                }
                else {
                    $("#progressshow").show();
                }
                GetNonAsync(
                     Path
                    , ParentParams
                    , function (JData) {

                        trace("AJAX Return Data", JData);
                        if (JData.d != null) {
                            if (JData.d[1] == -1)
                                __jsonDataCount = __jsonPrevDataCount;
                            else
                                __jsonDataCount = JData.d[1];
                            __jsonPrevDataCount = __jsonDataCount;
                            if (__jsonDataCount > 0) {
                                if (JData.d[0].length > 0) {
                                    if (JData.d[0][0][0] != undefined && JData.d[0][0][0] != null && JData.d[0][0][0] != '') {
                                        __jsonData = JData.d[0][0];
                                    }
                                    else {
                                        __jsonData = JData.d[0];
                                    }
                                }
                            }
                            else {
                                __jsonData = JData.d[0];
                            }
                            if (__jsonDataCount > 0) {
                                if (!__buildheaderfooter)
                                    buildHeaderFooter();
                                _sno = ((parseInt(opt.defaultWSParams.pageNum) - 1) * opt.defaultWSParams.pageSize) + 1;
                                buildBody();
                                scrolltbl();
                                updateFooter();
                                if (_enableCheckbox) {
                                    addEventtoCheckbox();
                                }
                                bindEvents();
                            }
                            else {
                                _table.find("tbody").remove();
                                if (!__buildheaderfooter) {
                                    buildHeaderFooter();
                                    $("#tbl_" + _selfid).find('.tabelfoot').css('display', 'none');
                                    $("#_" + _selfid + "_FreezeHeader").css('display', 'none');
                                }
                                var _TRTD = "<tbody><tr class=\"norecord\"><td style=\"text-align:left;\" colspan=\"" + _template.length + "\"><h2 class=\"error\"><i class=\" icon-pencil-1\"></i>" + _noData + "</h2></td></tr></tbody>";
                                _table.append(_TRTD);

                                $(_table).addClass("nodata");
                            }
                        }
                        else {
                            _table.find("tbody").remove();
                            if (!__buildheaderfooter) {
                                buildHeaderFooter();
                                $("#tbl_" + _selfid).find('.tabelfoot').css('display', 'none');
                                $("#_" + _selfid + "_FreezeHeader").css('display', 'none');
                            }
                            var _TRTD = "<tbody><tr class=\"norecord\"><td style=\"text-align:left;\" colspan=\"" + _template.length + "\"><h2 class=\"error\"><i class=\" icon-pencil-1\"></i>" + _noData + "</h2></td></tr></tbody>";
                            _table.append(_TRTD);
                            $(_table).addClass("nodata");
                        }
                        $("#progressshow").hide();
                    }
                    , function (jqXHR, textStatus, errorThrown) {
                        $("#progressshow").hide();
                        if (JSON.parse(jqXHR.responseText).Message.indexOf("Index was out of range") >= 0) {
                            $(".stoast").toastText("Warning", "Error while generating report", 5, 3);
                        }
                        else {
                            $(".stoast").toastText("Warning", "Error while generating report", 5, 3);
                        }
                        try { console.log(errorThrown); } catch (e) { }
                    }
               );
            }
            var Export_To_Dt = '';
            var Export_From_Dt = '';
            function getAJAXFilterData() {
                opt.pageNum = 1;
                try {
                    _advSrch = '';
                    if (_defaultWSParams["_advSrch"] != null) {
                        _defaultWSParams["_advSrch"] = _advSrch;
                    }
                } catch (e) { }
                $("#_" + _selfid + "_FreezeHeader").find(".filtertext").each(function (i, j) {
                    if ($(this).val() != '') {
                        if (_advSrch == '')
                            if ($(this).data("col").split('$')[1] == 'EXACT') {
                                _advSrch += $(this).data("col").split('$')[0] + " LIKE '" + $(this).val() + "'";
                            }
                            else if (!$(this).data("col").split('$')[0].toString().toLowerCase().match(/dt/)) {
                                _advSrch += $(this).data("col").split('$')[0] + " LIKE '%" + $(this).val() + "%'";
                            }
                            else {
                                _advSrch += $(this).data("col").split('$')[0] + " =  CAST('" + $(this).val() + "' AS DATE)";
                            }
                        else {
                            if ($(this).data("col").split('$')[1] == 'EXACT') {
                                _advSrch += " AND " + $(this).data("col").split('$')[0] + " LIKE '" + $(this).val() + "'";
                            }
                            else if (!$(this).data("col").split('$')[0].toString().toLowerCase().match(/dt/)) {
                                _advSrch += " AND " + $(this).data("col").split('$')[0] + " LIKE '%" + $(this).val() + "%'";
                            }
                            else {
                                _advSrch += " AND " + $(this).data("col").split('$')[0] + " =  CAST('" + $(this).val() + "' AS DATE)";
                            }
                        }
                    }
                });
                try {
                    if (_defaultWSParams["_advSrch"] != null) {
                        _defaultWSParams["_advSrch"] = _advSrch;
                    }
                } catch (e) { }
                trace("Filter Webserivce parameters shown Below", _defaultWSParams);
                _defaultWSParams.pageNum = 1;
                localStorage.setItem('advSrch', _defaultWSParams["_advSrch"]);
                if ($('[id*=hdnisalldtchecked]').val() == "Y") {
                    _defaultWSParams["_fDt"] = '';
                    _defaultWSParams["_tDt"] = '';
                }
                else {
                    if (_defaultWSParams["_fDt"] != undefined && _defaultWSParams["_fDt"] != null) {
                        if ($(".ui-rangepicker-input").val() != undefined) {
                            _defaultWSParams["_fDt"] = GetDates('FROM_DT', $(".ui-rangepicker-input").val());
                        }
                    }
                    if (_defaultWSParams["_tDt"] != undefined && _defaultWSParams["_tDt"] != null) {
                        if ($(".ui-rangepicker-input").val() != undefined) {
                            _defaultWSParams["_tDt"] = GetDates('TO_DT', $(".ui-rangepicker-input").val());
                        }
                    }
                }
                if (_PrevadvSrch == _advSrch + "#" + _defaultWSParams["_fDt"] + "#" + _defaultWSParams["_tDt"])
                    _eventFlag = 0;
                else
                    _eventFlag = 1;

                _defaultWSParams["_eventFlag"] = _eventFlag;
                _PrevadvSrch = _advSrch + "#" + _defaultWSParams["_fDt"] + "#" + _defaultWSParams["_tDt"];
                var log_from_dt = _defaultWSParams._fDt; var log_to_dt = _defaultWSParams._tDt;
                if (log_from_dt == null || log_from_dt == undefined) { log_from_dt = ''; }
                if (log_to_dt == null || log_to_dt == undefined) { log_to_dt = ''; }
                var doc_id = $('[id*=hdndocsessionid]').val(); var user_id = $('[id*=hdnUserId]').val();
                var action_iptext = "GRID-SEARCH=FROM_DT:" + log_from_dt + "&TO_DT:" + log_to_dt
                                            + "&advSrch=" + _defaultWSParams._advSrch;
                GetNonAsync(
                    "Private/FrontOffice/Registrations.aspx/GetLogData",
                    { doc_id: doc_id, user_id: user_id, action_Id: "4", tran_id: '', tran_no: '', action_iptext: action_iptext, action_optext: '' },
                function () {
                },
                function (jqXHR, textStatus, errorThrown) {
                });
                var ParentParams = '';
                var Path = '';

                if (_ExportParams["PROC"] != undefined) {
                    _ExportParams.IP_PAGENUM = _defaultWSParams["pageNum"];
                    _ExportParams.IP_PAGESIZE = _defaultWSParams["pageSize"];
                    _ExportParams.IP_ADVANCE_SEARCH = _defaultWSParams["_advSrch"];
                    if (_defaultWSParams["_fDt"] != undefined)
                        _ExportParams.IP_FROM_DT = _defaultWSParams["_fDt"];
                    if (_defaultWSParams["_tDt"] != undefined)
                        _ExportParams.IP_TO_DT = _defaultWSParams["_tDt"];
                    ExportParams(_ExportParams, _header, _template);
                    ParentParams = { Params: $('[id*=hdnExportParams]').val() };
                    Path = 'GridService.asmx/BindGetAllGrid';
                    $('[id*=hdnWSPath]').val(Path);
                    $('[id*=hdnWSParams]').val(JSON.stringify(ParentParams));
                }
                else {
                    ParentParams = _defaultWSParams;
                    Path = _wsPath;
                    $('[id*=hdnWSPath]').val(Path);
                    $('[id*=hdnWSParams]').val(JSON.stringify(ParentParams));
                    ExportParams(ParentParams, _header, _template);
                }
                GetAsync(
                     Path
                    , ParentParams
                    , function (JData) {
                        if (JData.d != null) {
                            trace("Filter Data shown Below", JData);
                            if (JData.d[1] == -1)
                                __jsonDataCount = __jsonPrevDataCount;
                            else
                                __jsonDataCount = JData.d[1];
                            __jsonPrevDataCount = __jsonDataCount;
                            if (__jsonDataCount > 0) {
                                if (JData.d[0][0][0] != undefined && JData.d[0][0][0] != null && JData.d[0][0][0] != '') {
                                    __jsonData = JData.d[0][0];
                                }
                                else {
                                    __jsonData = JData.d[0];
                                }
                            }
                            else {
                                __jsonData = JData.d[0];
                            }
                            if (__jsonDataCount > 0) {
                                if (!__buildheaderfooter) {
                                    buildHeaderFooter();
                                }
                                else {
                                    $("#tbl_" + _selfid).find('.tabelfoot').css('display', 'block');
                                }
                                _sno = ((parseInt(opt.defaultWSParams.pageNum) - 1) * opt.defaultWSParams.pageSize) + 1;
                                buildBody();
                                scrolltbl();
                                updateFooter();
                                if (_enableCheckbox) {
                                    addEventtoCheckbox();
                                }
                                bindEvents();
                            }
                            else {
                                _table.find("tbody").remove();
                                if (!__buildheaderfooter) {
                                    buildHeaderFooter();
                                    $("#tbl_" + _selfid).find('.tabelfoot').css('display', 'none');
                                }
                                var _TRTD = "<tbody><tr class=\"norecord\"><td style=\"text-align:left;\" colspan=\"" + _template.length + "\"><h2 class=\"error\"><i class=\" icon-pencil-1\"></i>" + _noData + "</h2></td></tr></tbody>";
                                _table.append(_TRTD);
                                $(_table).addClass("nodata");
                            }
                        }
                        else {
                            _table.find("tbody").remove();
                            if (!__buildheaderfooter) {
                                buildHeaderFooter();
                                $("#tbl_" + _selfid).find('.tabelfoot').css('display', 'none');
                            }
                            var _TRTD = "<tbody><tr class=\"norecord\"><td style=\"text-align:left;\" colspan=\"" + _template.length + "\"><h2 class=\"error\"><i class=\" icon-pencil-1\"></i>" + _noData + "</h2></td></tr></tbody>";
                            _table.append(_TRTD);
                            $(_table).addClass("nodata");
                        }
                        opt.defaultWSParams.pageNum = 1;
                        updateFooter();
                    }
                    , function (jqXHR, textStatus, errorThrown) {
                        try { console.log(errorThrown); } catch (e) { }
                    }
               );
            }

            function ensureAllChecked() {
                _selectedRows = [];
                var _checkboxstate = true;
                $(".ajaxTablecheckbox" + _selfid).each(function (i, j) {
                    if (!$(this).prop("checked")) {
                        _checkboxstate = false;
                    }
                    else {
                        if ($(this).attr("style") == undefined)
                            _selectedRows.push($(this).data("key"));
                    }
                });
                return _checkboxstate;
            }

            function addEventtoCheckbox() {
                $(".ajaxTablecheckboxall" + _selfid).click(function () {
                    if ($(this).prop("checked")) {
                        $(".ajaxTablecheckbox" + _selfid).prop("checked", true);
                    }
                    else {
                        $(".ajaxTablecheckbox" + _selfid).prop("checked", false);
                        _selectedRows.push($(this).data("key"));
                    }
                    ensureAllChecked();
                    if (typeof opt.checkboxClick === "function" && $(this).prop("checked")) {
                        opt.checkboxClick(getObject());
                    }
                    else if (typeof opt.checkboxClick === "function") {
                        opt.checkboxClick(getObject());
                    }
                });
                $(".ajaxTablecheckbox" + _selfid).click(function () {
                    if ($(this).prop("checked") && ensureAllChecked()) {
                        $(".ajaxTablecheckboxall" + _selfid).prop("checked", true);
                    }
                    else {
                        $(".ajaxTablecheckboxall" + _selfid).prop("checked", false);
                    }
                    ensureAllChecked();

                    if (typeof opt.checkboxClick === "function" && $(this).prop("checked")) {
                        opt.checkboxClick(getObject($(this).data("key")), $(this));
                    }
                    else if (typeof opt.checkboxClick === "function") {
                        opt.checkboxClick(getObject($(this).data("key")), $(this));
                    }
                });
            }


            function buildHeaderFooter() {
                if (typeof _header !== "string" && _header.length > 0 && _template.length > 0) {
                    var _TRTH = "<thead><tr>";
                    var __width = "";
                    var __filter = "";
                    var __filterRow = "<tr id=\"_TRF_" + _selfid + "\">";
                    if (_RowNo) {
                        __filterRow = "<td></td>"
                        _TRTH += "<th name='Sno'>S.No.</th>";
                    }
                    if (_enableCheckbox) {
                        _TRTH += "<th  name='check'><input type='checkbox' class='ajaxTablecheckboxall" + _selfid + "' /></th>";
                        __filterRow += "<td>&nbsp;</td>";
                    }
                    for (i in _header) {
                        var _hcol = _template[i].toString().split("*");
                        if (_header[i].width)
                            __width = " style=\"width:" + _header[i].width + "\"";
                        if (_header[i].filter) {
                            __filter = "<div class=\"jtablefilter\"><div class=\"filterdiv\"><i></i>&nbsp;</div></div></td>";
                            if (_hcol[1] === undefined) {
                                if (_template[i].col != undefined)
                                    _hcol = _template[i].col.toString().split("*");
                            }
                            if (_hcol[1] == "MOBILE_NO" || _hcol[1] == "MOBILE_NUMBER" || _hcol[1] == "REG_FEE" || _hcol[1] == "MOBILE_NO1" || _hcol[1] == "RECEIPT_AMOUNT" || _hcol[1] == "AMOUNT") {
                                if (_hcol[2] === undefined) {
                                    __filterRow += "<td><div class=\"jtblfilterdiv\"><i class=\"icon-search\"></i><input type=\"text\" value=\"\" onpaste=\"return false;\" onkeypress=\"return chkNumeric(event);\" id=\"txt_" + _selfid + "_" + _hcol[0] + "\" class=\"filtertext\" data-col=\"" + _hcol[1] + "\" placeholder=\"" + fn_ToTitleCase(_header[i].col) + "\" autocomplete=\"off\" /></div></td>";
                                }
                                else {
                                    if (_hcol[2] === undefined) {
                                        __filterRow += "<td><div class=\"jtblfilterdiv\"><i class=\"icon-search\"></i><input type=\"text\" value=\"\" onpaste=\"return false;\" onkeypress=\"return chkNumeric(event);\" id=\"txt_" + _selfid + "_" + _hcol[0] + "\" class=\"filtertext\" data-col=\"" + _hcol[1] + "\" placeholder=\"" + fn_ToTitleCase(_header[i].col) + "\" autocomplete=\"off\" /></div></td>";
                                    }
                                    else {
                                        __filterRow += "<td><div class=\"jtblfilterdiv\"><i class=\"icon-search\"></i><input type=\"text\" value=\"\" onpaste=\"return false;\" onkeypress=\"return chkNumeric(event);\" id=\"txt_" + _selfid + "_" + _hcol[0] + "\" class=\"filtertext\" data-col=\"" + _hcol[1] + "$" + _hcol[2] + "\" placeholder=\"" + fn_ToTitleCase(_header[i].col) + "\" autocomplete=\"off\" /></div></td>";
                                    }
                                }
                            }
                            else {
                                if (_hcol[2] === undefined) {
                                    __filterRow += "<td><div class=\"jtblfilterdiv\"><i class=\"icon-search\"></i><input type=\"text\" value=\"\" id=\"txt_" + _selfid + "_" + _hcol[0] + "\" class=\"filtertext\" data-col=\"" + _hcol[1] + "\" placeholder=\"" + fn_ToTitleCase(_header[i].col) + "\" autocomplete=\"off\" /></td></div>";
                                }
                                else {
                                    __filterRow += "<td><div class=\"jtblfilterdiv\"><i class=\"icon-search\"></i><input type=\"text\" value=\"\" id=\"txt_" + _selfid + "_" + _hcol[0] + "\" class=\"filtertext\" data-col=\"" + _hcol[1] + "$" + _hcol[2] + "\" placeholder=\"" + fn_ToTitleCase(_header[i].col) + "\" autocomplete=\"off\" /></td></div>";
                                }
                            }
                        }
                        else {
                            __filterRow += "<td>&nbsp;</td>";
                        }


                        if (typeof _header[i] === "object") {
                            if (_header[i].TitleUpperCase) {
                                _TRTH += "<th   " + __width + " data-col=\"" + _hcol[1] + "\"><span class=\"" + ((_header[i].sort) ? 'ajaxTablesort' : '') + "\"  data-dir=\"asc\">" + (_header[i].col).toUpperCase() + "<span class=\"" + ((_header[i].sort) ? 'jtablesort' : '') + "\"></span>&</span>" + __filter + "</th>";
                            }
                            else {
                                if (_header[i].col == 'UMR #' || (_header[i].col).toUpperCase() == 'IP' || (_header[i].col).toUpperCase() == 'OP' || (_header[i].col).toUpperCase() == 'IMR' || (_header[i].col).toUpperCase() == 'CANCEL#' || (_header[i].col).toUpperCase() == 'ADMN#' || (_header[i].col).toUpperCase() == 'ADVANCE#' || (_header[i].col).toUpperCase() == 'BILL') {
                                    if ((_header[i].col).toUpperCase() == 'BILL') {
                                        _header[i].col = 'BILL#';
                                    }
                                    _TRTH += "<th   " + __width + " data-col=\"" + _hcol[1] + "\"><span class=\"" + ((_header[i].sort) ? 'ajaxTablesort' : '') + "\"  data-dir=\"asc\">" + (_header[i].col).toUpperCase() + "<span class=\"" + ((_header[i].sort) ? 'jtablesort' : '') + "\"></span></span>" + __filter + "</th>";
                                }
                                else {
                                    _TRTH += "<th   " + __width + " data-col=\"" + _hcol[1] + "\"><span class=\"" + ((_header[i].sort) ? 'ajaxTablesort' : '') + "\"  data-dir=\"asc\">" + fn_ToTitleCase(_header[i].col) + "<span class=\"" + ((_header[i].sort) ? 'jtablesort' : '') + "\"></span></span>" + __filter + "</th>";
                                }
                            }
                        }
                        else {
                            if (_header[i] == 'Umr#' || (_header[i]).toUpperCase() == 'IP' || (_header[i]).toUpperCase() == 'OP' || (_header[i]).toUpperCase() == 'IMR') {
                                _TRTH += "<th  " + __width + ">" + (_header[i]).toUpperCase() + __filter + "</th>";
                            }
                            else {
                                _TRTH += "<th  " + __width + ">" + fn_ToTitleCase(_header[i]) + __filter + "</th>";
                            }
                        }
                        __width = "";
                        __filter = "";
                    }
                    if (_enableDMS) {
                        if ($('[id*=hdnDMSPermissions]').val() != undefined && $('[id*=hdnDMSPermissions]').val() != null && $('[id*=hdnDMSPermissions]').val() != '') {
                            _TRTH += "<th >Manipulate</th>";
                            __filterRow += "<td>&nbsp;</td>";
                        }
                    }
                    __filterRow += "</tr>";
                    _TRTH += "</tr>";
                    if (_enableFilter) {
                        _TRTH += __filterRow + "</thead>";

                        $("#tbl_" + _selfid).find(".filtertext").keypress(function (e) {

                            if (e.keyCode != 13 && e.keyCode != 'undefined' && e.keyCode != undefined) {
                                $(this).css("background", "");
                                return true;
                            }
                        });
                    }
                    else {
                        _TRTH += "</thead>";
                    }

                    _table.append(_TRTH);
                    _self.find("#_" + _selfid + "_FreezeHeader").remove();
                    _self.append("<div id=\"_" + _selfid + "_FreezeHeader\" style=\"position:absolute;z-index:2;width:100% !important;top:0px;overflow:hidden;\"><div class=\"babu\"><table border=\"0\" cellpadding=\"0\" class=\"jtblgrid\" cellspacing=\"0\" >" + _TRTH + "</table></div></div>")

                    if (_enableFocus) {
                        $("[id*=txt_" + _selfid + "_ITEM_NAME]").focus();
                    }

                    if (_enableFilter) {
                        $("#_" + _selfid + "_FreezeHeader").find(".filtertext").keyup(function (e) {
                            var tst = $(this);
                            $("#tbl_" + _selfid).find(".filtertext").each(function (i, j) {
                                if ($(this).attr('id') == tst.attr('id')) {
                                    $(this).val(tst.val());
                                }
                            });
                        });
                        $("#_" + _selfid + "_FreezeHeader").find(".filtertext").keypress(function (e) {

                            if (e.keyCode != 13 && e.keyCode != 'undefined' && e.keyCode != undefined) {
                                $(this).css("background", "");
                                return true;
                            }
                            else {
                                getAJAXFilterData();
                                return false;
                            }

                        });
                        $("#tbl_" + _selfid).find(".jtablefilter").click(function () {
                            $("#_TRF_" + _selfid).hide("slow");
                            $("#_TRF_" + _selfid).show("slow");

                        });
                    }
                }

                var defpagesize = $('[id*=hdninitialgridpagecount]').val();

                if (defpagesize == "" || defpagesize == 0 || defpagesize == undefined) {
                    defpagesize = 10;
                    var defpagesize1 = 25;
                    var defpagesize2 = 50;
                    var defpagesize3 = 100;
                } else {
                    defpagesize = defpagesize == "" || defpagesize == 0 ? 10 : defpagesize;
                    var defpagesize1 = defpagesize;
                    defpagesize1 = parseFloat(defpagesize1) + parseFloat(defpagesize);
                    var defpagesize2 = defpagesize1;
                    defpagesize2 = parseFloat(defpagesize2) + parseFloat(defpagesize1);
                    var defpagesize3 = defpagesize2;
                    defpagesize3 = parseFloat(defpagesize3) + parseFloat(defpagesize2);
                }
                if (_enableFooterRows) {
                    FootrRow = "<span id=\"spanrowid\">Show Rows&nbsp;</span>"
                             + "<select id=\"dpl_" + _selfid + "\" style=\"width:56px;\" class=\"hide\">"
                             + "<option value=\"" + defpagesize + "\">" + defpagesize + "</option>"
                             + "<option value=\"" + defpagesize1 + "\">" + defpagesize1 + "</option>"
                             + "<option value=\"" + defpagesize2 + "\">" + defpagesize2 + "</option>"
                             + "<option value=\"" + defpagesize3 + "\">" + defpagesize3 + "</option>"
                             + "</select>";
                }

                _table.append("<tfoot>"
                             + "<tr class=\"jtablepaging\"><td colspan=\"" + _template.length + "\">"
                             + "<div class=\"tabelfoot\">"
                             + "<div style=\"padding:5px;\" class=\"jtablecpage footLdata\"><span class=\"jtablepage footLdata\">{}</span> <span class=\"footLdata\">&nbsp;to&nbsp;</span>  <span class=\"jtablecpagecount footLdata\">{}</span> <span class=\"footLdata\">&nbsp; from&nbsp; </span><span class=\"jtablerecordcount footLdata\">{}</span>  <span class=\"footLdata\">&nbsp; Records </span></div>"
                             + "<div  style=\"float:right; width:auto; padding:5px;\" class=\"jtablecpage\">"
                             + FootrRow
                             + "<span class=\"hide\">&nbsp;Page &nbsp;</span>"
                             + "<input type=\"text\" id=\"txt_" + _selfid + "\" value=\"" + opt.defaultWSParams.pageNum + "\" style=\"width:35px;\" />"
                             + "<span class=\"hide\">&nbsp;of </span><span class=\"jtabletpages hide\">{}</span> "
                             + "<input type=\"button\" id=\"btnfirst\" class=\"pg_first\" value=\"&lt;&lt;\" />"
                             + "<input type=\"button\" id=\"btnprev\" class=\"pg_prev\" value=\"&lt;\" />"
                             + "<input type=\"button\" id=\"btnnext\" class=\"pg_next\" value=\"&gt;\" />"
                             + "<input type=\"button\" id=\"btnlast\" class=\"pg_last\" value=\"&gt;&gt;\" />"
                             + "</div>"
                             + "</div>"
                             + "</td></tr></tfoot>");
                if (_enablePaging) {
                    $("#tbl_" + _selfid).find(".jtablepaging").css('display', 'block');
                }
                else {
                    $("#tbl_" + _selfid).find(".jtablepaging").css('display', 'none');
                }
                _self.find("#dpl_" + _selfid).change(function () {
                    opt.defaultWSParams.pageSize = this.value == 'All' ? 0 : this.value;
                    opt.defaultWSParams.pageNum = 1;
                    getAJAXTableData();
                });
                _self.find("#btnfirst").click(function () {
                    opt.defaultWSParams.pageNum = 1;
                    getAJAXTableData();
                });
                _self.find("#btnprev").click(function () {
                    opt.defaultWSParams.pageNum = parseInt(opt.defaultWSParams.pageNum) - 1;
                    getAJAXTableData();
                });
                _self.find("#btnnext").click(function () {
                    opt.defaultWSParams.pageNum = parseInt(opt.defaultWSParams.pageNum) + 1;
                    getAJAXTableData();
                });
                _self.find("#btnlast").click(function () {
                    opt.defaultWSParams.pageNum = parseInt(__tpages);
                    getAJAXTableData();
                });

                _self.find("#txt_" + _selfid).blur(function () {
                    if (__tpages >= parseInt(this.value)) {
                        opt.defaultWSParams.pageNum = this.value;
                        getAJAXTableData();
                    }
                    else {
                        alert("selected page number does not exists");
                    }
                });

                __buildheaderfooter = true;
                if (_enableFilter) {
                    $("#tbl_" + _selfid).find(".filtertext").keypress(function (e) {
                        if (e.keyCode != 13 && e.keyCode != 'undefined' && e.keyCode != undefined) {
                            $(this).css("background", "");
                            return true;
                        }
                        else {
                            getAJAXFilterData();
                            return false;

                        }

                    });
                    $("#tbl_" + _selfid).find(".jtablefilter").click(function () {
                        $("#_TRF_" + _selfid).hide("slow");
                        $("#_TRF_" + _selfid).show("slow");
                    });
                }

                if (_onUnload) {
                    if (__size) {
                        _onUnload([(__size > __jsonDataCount) ? __jsonDataCount : __size]);
                    }
                    else {
                        _onUnload([__jsonDataCount]);
                    }
                }
                scrolltbl();
            }

            function fn_ToTitleCase(val) {
                if (val.indexOf(" ") < 0) {
                    var split = val.match(/[A-Z][a-z]+/g);
                    if (split != null && split.length > 0) {
                        var temp = "";
                        for (var i = 0; i < split.length; i++) {
                            temp += split[i] + (i == split.length - 1 ? "" : " ");
                        }

                        var index = val.toLowerCase().indexOf(temp.replace(/\ /g, "").toLowerCase());
                        val = (index > 0 ? val.substring(0, index) + " " + temp : temp);
                    }
                }
                var val = val.toLowerCase();
                var res = val.replace(/(?:^|\s)\w/g, function (match) { return match.toUpperCase() });
                return res;
            }

            function buildBody() {
                $(_table).removeClass("nodata");
                _table.find("tbody").remove();
                if (_template.length > 0) {
                    var _TRTD = "<tbody>";
                    for (var i in __jsonData) {
                        var _dataRow = __jsonData[i];

                        var RowCreation = "<tr data-key=\"" + ((_dataKey !== "") ? __jsonData[i][_dataKey] : "") + "\" class=\"rowclickevent\" ";
                        if (typeof _rowDataBound === "function") {
                            RowCreation = _rowDataBound(RowCreation, __jsonData[i]) || RowCreation;
                        }
                        RowCreation += ">";

                        if (_RowNo) {
                            RowCreation += "<td>" + (parseInt(_sno)) + "</td>";
                            _sno++;
                        }
                        for (var j in _template) {

                            if (_enableCheckbox && j == 0) {
                                RowCreation += "<td><input type='checkbox' id='checkboxid' class='ajaxTablecheckbox" + _selfid + "'  data-key='" + __jsonData[i][_dataKey] + "' /></td>";
                            }
                            var ___val = _template[j].toString().split("*")[0];
                            var ___cls = "", __strlen = 0;
                            if (typeof _template[j] === "string") {
                                ___val = _template[j].toString().split("*")[0];
                                __strlen = _dataRow[_template[j].toString().split("*")[0]] == undefined ? 0 : _dataRow[_template[j].toString().split("*")[0]].length;
                                if (__strlen > 20)
                                    ___cls = "class='tdsize'";
                            }
                            else {
                                if (_template[j].length) {
                                    ___val = '';
                                }
                                else {
                                    if (___val != "") {
                                        ___val = _template[j].col.toString().split("*")[0];
                                        __strlen = _dataRow[_template[j].col.toString().split("*")[0]] == undefined ? 0 : _dataRow[_template[j].col.toString().split("*")[0]].length;
                                        if (__strlen > 80)
                                            ___cls = "class='tdsize'";
                                    }
                                }
                            }

                            var datacol = ___val;
                            if (!datacol.toString().toLowerCase().match(/amnt/) && !datacol.toString().toLowerCase().match(/extra_col/) && !datacol.toString().toLowerCase().match(/concession/) && !datacol.toString().toLowerCase().match(/rate/) && !datacol.toString().toLowerCase().match(/price/) && !datacol.toString().toLowerCase().match(/reg_fee/) && !datacol.toString().toLowerCase().match(/amt/) && !datacol.toString().toLowerCase().match(/amount/) && !datacol.toString().toLowerCase().match(/discount/)) {
                                RowCreation += "<td style=\"text-align:left;\" data-col='" + ___val + "' " + ___cls + ">";
                            }
                            else {
                                RowCreation += "<td style=\"text-align:right;\" data-col='" + ___val + "' " + ___cls + ">";
                                _dataRow[_template[j].toString().split("*")[0]] = _dataRow[_template[j].toString().split("*")[0]] != '' ? parseFloat(_dataRow[_template[j].toString().split("*")[0]]) : _dataRow[_template[j].toString().split("*")[0]];
                            }
                            if (typeof _template[j] === "string") {

                                if (_dataRow[_template[j].toString().split("*")[0]] == "null" || _dataRow[_template[j].toString().split("*")[0]] == null || _dataRow[_template[j].toString().split("*")[0]] == undefined || _dataRow[_template[j].toString().split("*")[0]] == "NaN") {
                                    _dataRow[_template[j].toString().split("*")[0]] = '';
                                }

                                if (_isElipse) {
                                    if (_elipseLength > 1 && __strlen >= _elipseLength)
                                        RowCreation += "<label  class='ellipsisd' title='" + _dataRow[_template[j].toString().split("*")[0]] + "'><span  class='ellipsis'>" + _dataRow[_template[j].toString().split("*")[0]] + "</span></label>";
                                    else if (_elipseLength == 1 && __strlen > 25)
                                        RowCreation += "<label  class='ellipsisd' title='" + _dataRow[_template[j].toString().split("*")[0]] + "'><span  class='ellipsis'>" + _dataRow[_template[j].toString().split("*")[0]] + "</span></label>";
                                    else
                                        RowCreation += _dataRow[_template[j].toString().split("*")[0]];
                                }
                                else
                                    RowCreation += _dataRow[_template[j].toString().split("*")[0]];


                            }
                            else {
                                if (_template[j].length) {
                                 RowCreation += "<div style='display:flex;'>";
                                    for (var k in _template[j]) {
                                        if (_template[j][k].icon != "") {
                                            if (_template[j][k].printdocid != "")
                                                RowCreation += "<a id=\"aimg" + k + "\" href=\"#\" title=\" " + (_template[j][k].alt) + "\" class=\"gico g" + (_template[j][k].alt).replace(/\s+/g, '') + "\" onClick=\"" + _template[j][k].click + "('" + __jsonData[i][_dataKey] + "','" + _template[j][k].printdocid + "')\"><img src=\"" + _template[j][k].icon + "\"/></a>";
                                            else
                                                RowCreation += "<a id=\"aimg" + k + "\" href=\"#\" title=\" " + (_template[j][k].alt) + "\" class=\"gico g" + (_template[j][k].alt).replace(/\s+/g, '') + "\" onClick=\"" + _template[j][k].click + "('" + __jsonData[i][_dataKey] + "','')\"><img src=\"" + _template[j][k].icon + "\"/></a>";
                                        }
                                    }
                                       RowCreation += "</div>";
                                }
                                else {
                                    if (___val != "") {
                                        if (_dataRow[_template[j].col.toString().split("*")[0]] == "null" || _dataRow[_template[j].col.toString().split("*")[0]] == "undefined") {
                                            _dataRow[_template[j].col.toString().split("*")[0]] = '';
                                        }
                                        if (__strlen > 25) {
                                            var _title = (_template[j].title) ? "title=\"" + _dataRow[_template[j].col.toString().split("*")[0]] + "\"" : "";
                                            RowCreation += "<label  class='ellipsisd' " + _title + "><span  class='ellipsis'>" + _dataRow[_template[j].col.toString().split("*")[0]] + "</span></label>";
                                        }
                                        else {
                                            RowCreation += _dataRow[_template[j].col.toString().split("*")[0]];
                                        }
                                    }
                                }
                            }
                            RowCreation += "</td>";
                        }
                        if (_enableDMS) {
                            if ($('[id*=hdnDMSPermissions]').val() != undefined && $('[id*=hdnDMSPermissions]').val() != null && $('[id*=hdnDMSPermissions]').val() != '') {
                                var arr = (new Function("return [" + $('[id*=hdnDMSPermissions]').val() + "];")());
                                for (var j in arr) {
                                    RowCreation += "<td  name='dms" + j + "' class='dmscol'>";
                                    for (var d in arr[j]) {
                                        if (arr[j][d].icon != "") {
                                            var tooltip = (arr[j][d].ToolTip != "" && arr[j][d].ToolTip != undefined) ? ("title=\"" + arr[j][d].ToolTip) + "\"" : "";
                                            if (arr[j][d].alt != "Upload Document") {
                                                if (_dataRow['DMS_UPLOAD'] != 'Y') {
                                                    RowCreation += "<a style=\"display:none\" href=\"#\" title=\" " + (arr[j][d].alt) + "\" class=\"gico g" + (arr[j][d].alt).replace(/\s+/g, '') + "\"  onClick=\"" + arr[j][d].click + "('" + __jsonData[i][_dataKey] + "')\"><img " + tooltip + "  src=\"" + arr[j][d].icon + "\"/></a>";
                                                }
                                                else {
                                                    RowCreation += "<a href=\"#\" title=\" " + (arr[j][d].alt) + "\" class=\"gico g" + (arr[j][d].alt).replace(/\s+/g, '') + "\"  onClick=\"" + arr[j][d].click + "('" + __jsonData[i][_dataKey] + "')\"><img " + tooltip + "  src=\"" + arr[j][d].icon + "\"/></a>";
                                                }
                                            }
                                            else {
                                                RowCreation += "<a href=\"#\" title=\" " + (arr[j][d].alt) + "\" class=\"gico g" + (arr[j][d].alt).replace(/\s+/g, '') + "\"  onClick=\"" + arr[j][d].click + "('" + __jsonData[i][_dataKey] + "')\"><img " + tooltip + "  src=\"" + arr[j][d].icon + "\"/></a>";
                                            }
                                        }
                                    }
                                }
                            }
                        }
                        RowCreation += "</tr>";
                        if (typeof _RowDataBinding === "function") {
                            RowCreation = _RowDataBinding(RowCreation, __jsonData[i]) || RowCreation;
                        }
                        RowCreation = TablerowAutoAdjustment(RowCreation);
                        _TRTD += RowCreation;
                    }
                    _TRTD += "</tbody>";
                    _table.append(_TRTD);
                    $(_table).removeClass("nodata");


                    if (_likeLookup == true) {
                        var clamp = function (num, min, max) {
                            return num < min ? min : (num > max ? max : num);
                        };
                        var index = 3;
                        var selfid = _self[0].id;
                        var rows = $("#tbl_" + selfid + ".jtblgrid tr");
                        $(rows[index]).addClass('selected');
                        $("#_" + selfid + "_FreezeHeader table thead input")[0].focus();
                        $('#' + selfid).on('keydown', function (e) {
                            e.stopPropagation();
                            $(rows[index]).removeClass('selected');
                            switch (e.keyCode) {
                                case 40:
                                    index = clamp(index + 1, 1, rows.length - 1);
                                    break;
                                case 38:
                                    index = clamp(index - 1, 1, rows.length - 1);
                                    break;
                            }
                            $(rows[index]).addClass('selected');
                            if (e.keyCode == 32 && e.ctrlKey) {
                                $(".rowclickevent.selected").trigger("click"); index = 3;
                            }
                        });

                    }
                    TableWidth();
                }

                if (typeof _dataReady === "function") {
                    _dataReady();
                }
                setFreezeHeader();
                console.timeEnd("test1");
            }
            function TablerowAutoAdjustment(RowCreation) {
                var maxlength = 0;
                var obj = $(RowCreation);
                $(obj).find('td').each(function () {
                    var tagLen = 0; maxlength = 0;
                    $(this).find('a').each(function () {
                        var tag1 = $(this).css('display');
                        if (tag1 == '' || tag1 == "block" || tag1 == "table-cell" || tag1 == "inline") { tagLen++; }
                        if (maxlength < tagLen) {
                            maxlength = tagLen;
                        }
                    });
                    if (tagLen > 0)
                        $(this).css('min-width', maxlength * 33 + "px");
                });
                return obj[0].outerHTML;
            }
            function testing() {
                if (localStorage.getItem("_advSrch") != null && localStorage.getItem("_advSrch") != "" && localStorage.getItem("_advSrch") != undefined) {
                    var _searchText = localStorage.getItem("_advSrch");
                    var len = _searchText.split('AND');
                    for (var i = 0; i < len.length; i++) {
                        var a = len[i];
                        var b = a.split('LIKE');
                        for (var j = 0; j < b.length; j++) {
                            var c = b[j].trim();
                            var g = b[1].trim().substr(0, b[1].length - 3);
                            var d = g.substr(2, b[1].length);
                            $(".filtertext").each(function (i, j) {
                                if ($(this).data("col") == c) {
                                    $(this).val(d);
                                }
                            });
                        }
                    }
                    getAJAXFilterData();
                    localStorage.setItem("advSrch", "");
                    localStorage.setItem("_advSrch", "");
                }
            }
            function scrolltbl() {
                $("#" + _selfid).scroll(function () {
                    $("#_" + _selfid + "_FreezeHeader").scrollLeft($(this).scrollLeft());
                });

                $("#_" + _selfid + "_FreezeHeader").scroll(function () {
                    $("#" + _selfid).scrollLeft($(this).scrollLeft());
                });
            }
            function setFreezeHeader() {
                if ($("#" + _selfid).hasScrollBar()) {
                    $("#_" + _selfid + "_FreezeHeader").width($("#" + _selfid).width() - $(".scwidth").width()).show();
                    if (_likeLookup == true)
                        $($("#_" + _selfid + "_FreezeHeader table thead input")[0]).focus();
                }
                else {
                    $("#_" + _selfid + "_FreezeHeader").width($("#" + _selfid).width()).show();
                    if (_likeLookup == true)
                        $($("#_" + _selfid + "_FreezeHeader table thead input")[0]).focus();
                }

                var _inc = 0;
                $("#tbl_" + _selfid + " thead tr th").each(function (i, j) {
                    _inc += $(this).outerWidth() + 0;
                    $("#_" + _selfid + "_FreezeHeader table thead tr th:nth-child(" + (i + 1) + ")").css({ "width": ($(this).outerWidth() + 0) + "px" });
                });
                $("#_" + _selfid + "_FreezeHeader .babu").css({ width: _inc });
                $("#_" + _selfid + "_FreezeHeader table").css({ "width": "auto" });
            }

            $(window).resize(function () {
                setFreezeHeader();
            });
            function updateFooter() {
                if (opt.defaultWSParams.pageSize == 0) {
                    __size = __jsonDataCount;
                    __tpages = 1;
                }
                else {
                    __size = opt.defaultWSParams.pageNum * opt.defaultWSParams.pageSize;
                    __tpages = __jsonDataCount % opt.defaultWSParams.pageSize > 0 ? (parseInt(__jsonDataCount / opt.defaultWSParams.pageSize) + 1) : (__jsonDataCount / opt.defaultWSParams.pageSize);
                }
                $("#txt_" + _selfid).val(opt.defaultWSParams.pageNum);
                _tableID.find("span.jtablepage").html(((parseInt($("#txt_" + _selfid).val()) - 1) * opt.defaultWSParams.pageSize) + 1);
                _tableID.find("span.jtablerecordcount").html(__jsonDataCount);
                _tableID.find("span.jtablecpagecount").html((__size > __jsonDataCount) ? __jsonDataCount : __size);
                _tableID.find("span.jtabletpages").html(__tpages);
                _tableID.find(".pg_first").prop('disabled', opt.defaultWSParams.pageNum == 1);
                _tableID.find(".pg_prev").prop('disabled', opt.defaultWSParams.pageNum <= 1);
                _tableID.find(".pg_next").prop('disabled', opt.defaultWSParams.pageNum >= __tpages);
                _tableID.find(".pg_last").prop('disabled', opt.defaultWSParams.pageNum == __tpages);
            }

            function bindEvents() {
                $("table#tbl_" + _selfid + " .ajaxTablesort").click(function () {
                    $("table#tbl_" + _selfid + " thead th").each(function () {
                        $(this).removeClass();
                        $(this).find("span.ajaxTablesort span").removeClass().addClass("jtablesort");
                    });

                    $(this).parent().addClass("ajaxsorted");
                    var _col = $(this).parent().data("col");
                    var _dir = $(this).data("dir");
                    __jsonData = sortByKey(__jsonData, _col, _dir);
                    _sno = ((parseInt(opt.defaultWSParams.pageNum) - 1) * opt.defaultWSParams.pageSize) + 1;
                    buildBody();
                    scrolltbl();
                    $(this).data("dir", (_dir == "asc") ? "desc" : "asc");
                    $(this).find("span").removeClass().addClass("jtablesort" + _dir);

                });

                $("#_" + _selfid + "_FreezeHeader table" + " .ajaxTablesort").click(function () {
                    $("#_" + _selfid + "_FreezeHeader table" + " thead th").each(function () {
                        $(this).removeClass();
                        $(this).find("span.ajaxTablesort span").removeClass().addClass("jtablesort");
                    });

                    $(this).parent().addClass("ajaxsorted");
                    var _col = $(this).parent().data("col");
                    var _dir = $(this).data("dir");
                    __jsonData = sortByKey(__jsonData, _col, _dir);
                    _sno = ((parseInt(opt.defaultWSParams.pageNum) - 1) * opt.defaultWSParams.pageSize) + 1;
                    buildBody();
                    scrolltbl();
                    $(this).data("dir", (_dir == "asc") ? "desc" : "asc");
                    $(this).find("span").removeClass().addClass("jtablesort" + _dir);

                });
                $(".rowclickevent").click(function () {
                    $("#tbl_" + _selfid + " tbody tr").css('background', 'rgb(255, 255, 255)');
                    $("tr[data-key=" + $(this).data("key") + "]").css("background", "#78c9e7");
                });

                if (typeof _rowClick === "function") {
                    $(".rowclickevent").click(function () {
                        _rowClick(getObject($(this).data("key")));
                    });
                }
            }
            function getObject(key) {
                var _row = __jsonData;
                if (key !== undefined) {
                    _row = {};
                    for (var i in __jsonData) {
                        if (__jsonData[i][_dataKey] == key) {
                            _row = __jsonData[i];
                            break;
                        }
                    }
                }
                return _row;
            }
            return {

                getDataRow: function (key) {
                    var _row = {};
                    for (var i in __jsonData) {
                        if (__jsonData[i][_dataKey] == key) {
                            _row = __jsonData[i];
                            break;
                        }
                    }
                    return _row;
                },
                reBind: function (param) {
                    _defaultWSParams = param;
                    getAJAXTableData();
                },
                getSelectedRows: function () {
                    return _selectedRows;
                }
            }
            function GlobalAutoAdjustmentWidth() {
                var maxtaglen = 0;
                $("#tbl_" + _selfid + " tbody tr td").each(function () {
                    var tagLen = 0, cowidth = 0;
                    var strindex = $(this).index();
                    var str = '', state = ''; var datacol = '';
                    if ($(this).find('a').length != 0) {
                        str = $(this);
                        datacol = $(this).attr("data-col");
                        if ($(this).find('input[type=checkbox]').length == 1) {
                            tagLen = 1;
                        }
                        $(str).find('a.gico').each(function () {
                            var tag1 = $(this).css('display');
                            if (tag1 == "block" || tag1 == "table-cell") { tagLen++; }
                            if (maxtaglen == 0) { maxtaglen = tagLen; }
                            else if (parseFloat(maxtaglen) < parseFloat(tagLen)) { maxtaglen = tagLen; }
                            else { maxtaglen = maxtaglen; }
                        });
                        state = 'Anc';
                    }
                    else {
                        str = $(this);
                        datacol = $(this).attr("data-col");
                        state = 'Tag';
                    }
                    SizeAdjustment(strindex, maxtaglen, state, datacol);
                });
            }
            function TableWidth() {
                var parenttblWidth = $("#tbl_" + _selfid).parent().parent() == undefined ? "0" : $("#tbl_" + _selfid).parent().parent().width();
                var tblWidth = $("#tbl_" + _selfid).width();
                if (parenttblWidth > tblWidth) {
                    var cellWidth = $("#tbl_" + _selfid + " > tbody > tr > td:last-child()").width();
                    var cellHWidth = $("#tbl_" + _selfid + " > thead > tr > th:last-child()").width();
                    $("#tbl_" + _selfid + " > tbody > tr > td:last-child()").css({ "min-width": (parenttblWidth - tblWidth) + cellWidth });
                    $("#tbl_" + _selfid + " > thead > tr > th:last-child()").css({ "min-width": (parenttblWidth - tblWidth) + cellHWidth });
                }
            }
            function SizeAdjustment(strindex, maxtaglen, state, datacol) {
                var colwidth = widthAdjGlobal(maxtaglen, state);
                if (state == "Tag") {
                    TableWidth();
                }
                else {
                    $("#tbl_" + _selfid + " tr td:nth-child(" + (strindex + 1) + "), #tbl_" + _selfid + " tr th:nth-child(" + (strindex + 1) + ")").css('min-width', colwidth);
                }


            }

            function widthAdjGlobal(maxtaglen, obj) {
                var iconwidth = 8; var colwidth = 0;
                var tdlen = 1;
                if (maxtaglen <= 25) {
                    tdlen = 1;
                }
                else if (maxtaglen > 15 && maxtaglen <= 35) {
                    tdlen = 2;
                }
                else {
                    tdlen = 3;
                }

                if (obj == 'Anc') {
                    iconwidth = 33;
                    tdlen = 1;
                }
                switch (tdlen) {
                    case 1:
                        colwidth = iconwidth * maxtaglen;
                        break;
                    case 2:
                        colwidth = 250;
                        break;
                    case 3:
                        colwidth = 200;
                        break;
                    default:
                        colwidth = 200;
                        break;
                }
                colwidth = colwidth + "px";
                return colwidth;
            }
        }
    }





} (jQuery));


function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    var a = results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
    var s = null;
    if (a != "" && a != undefined && a != null) {
        GetNonAsync(
            "Private/FrontOffice/OPDBILLNEW.aspx/Decrypting",
            { target: a },
            function (JData) {
                s = JData.d;
            },
            function (jqXHR, textStatus, errorThrown) {
                alert(errorThrown);
            });
    }

    return s;

}

function Ismkrchkr(createdby, usrnm) {
    if (createdby == usrnm) {
        alert('Maker should not be the approver');
        return false;
    }
    else
        return 'Y';
}

function Clinicalfindings(Umrno, admnno, patclsid) {
    if ((Umrno != "" && Umrno != undefined) && (admnno != "" && admnno != undefined) && (patclsid != "" && patclsid != undefined)) {
        var path = window.location.origin + '/' + window.location.pathname.split('/')[1] + '/' + 'VisitDetails.aspx?Refno=' + Umrno + '&Refid=' + admnno + '&Patclsid=' + patclsid;
        window.open(path);
    }
    else {
        $(".stoast").toastText("Info", 'Provide Umr no,Ref No & patient class for Clinical Summary Details', 3, 2);
        return false;
    }
    return false;
}
function ExportParams(Params, Header, Template) {

    var TotParams = '';
    $.each(Object.keys(Params), function (i, j) {
        if (TotParams == '') {
            TotParams += j + ':' + Params[j];
        }
        else {
            TotParams += '&' + j + ':' + Params[j];
        }
    });
    $('[id*=hdnExportParams]').val(TotParams);

    var TotCols = '';
    $.each(Header, function (i, j) {
        if (TotCols == '') {
            if (typeof (Template[i]) == 'object') {
                if (Template[i].length == undefined) {
                    TotCols += j.col + ':' + Template[i].col.split('*')[0];
                }
            }
            else if (typeof (Template[i]) == 'string') {
                TotCols += j.col + ':' + Template[i].split('*')[0];
            }
        }
        else {
            if (typeof (Template[i]) == 'object') {
                if (Template[i].length == undefined) {
                    TotCols += '&' + j.col + ':' + Template[i].col.split('*')[0];
                }
            }
            else if (typeof (Template[i]) == 'string') {
                TotCols += '&' + j.col + ':' + Template[i].split('*')[0];
            }
        }
    });
    $('[id*=hdnExportColumns]').val(TotCols);
}
function Post(ProcName, Params, csuc, cfl) {
    GetAsync(
                     'GridService.asmx/Post'
                    , { ProcName: ProcName, Params: Params }
                    , function (JData) {
                        csuc(JData.d);

                    }
                        , function (JData) {
                            cfl(JData.d);

                        }
                        );

}
function Get(ProcName, Params, csuc, cfl) {
    GetAsync(
                     'GridService.asmx/Get'
                    , { ProcName: ProcName, Params: Params }
                    , function (JData) {
                        csuc(JData.d);

                    }
                        , function (JData) {
                            cfl(JData.d);

                        }
                        );

}
function BindSuvarnaGrid(opt, divID) {
    SuvarnaGrid.divID = divID;
    SuvarnaGrid.dateFormat = opt.dateFormat;
    SuvarnaGrid.timeFormat = opt.timeFormat;
    SuvarnaGrid.wsPath = opt.wsPath;
    SuvarnaGrid.params = opt.defaultWSParams;
    SuvarnaGrid.selectColumn = opt.selectColumn;
    SuvarnaGrid.checkAllDateID = opt.DateCheckAllID;
    SuvarnaGrid.advSearch = opt.advSearch;
    var gridColumns = [];
    var gridHeader = opt.header;
    var gridTemplate = opt.template;

    for (var iRow = 0; iRow < gridHeader.length; iRow++) {
        var colDef = { DBField: "", Caption: "", Width: "100px", Sortable: false, Searchable: false, BgColor: "", TextColor: "", TextAlign: "", DataType: "",
            EditType: "", EditOptions: "", ManageValue: "", FreezeCol: false, IconOptions: []
        };
        var colName = ((typeof (gridHeader[iRow]) == "object") ? gridHeader[iRow].col : gridHeader[iRow]);
        if (colName.toUpperCase() == 'MANAGE' || colName.toUpperCase() == 'MANIPULATE') {
            colDef.Caption = colName;
            colDef.DataType = (colName.toUpperCase() == 'MANAGE' || colName.toUpperCase() == 'MANIPULATE' ? 'Manage' : "text");
            colDef.ManageValue = (colName.toUpperCase() == 'MANAGE' || colName.toUpperCase() == 'MANIPULATE' ? gridTemplate[iRow] : []);
            colDef.Width = (colName.toUpperCase() == 'MANAGE' || colName.toUpperCase() == 'MANIPULATE' ? (gridTemplate[iRow].length * 28).toString() + 'px' : '100px');
            if (gridHeader[iRow].iconoptions != undefined && gridHeader[iRow].iconoptions != null && gridHeader[iRow].iconoptions != '') {
                var iconOptions = gridHeader[iRow].iconoptions.split('|');
                iconOptions.forEach(function (tRow, tItem) {
                    colDef.IconOptions.push(tRow);
                });
            }
        }
        else if (typeof (gridHeader[iRow]) == "object") {
            colDef.DBField = (typeof (gridTemplate[iRow]) == 'object' ? gridTemplate[iRow].col.split('*')[0] : gridTemplate[iRow].split('*')[0]);
            colDef.Caption = gridHeader[iRow].col;
            colDef.Width = (gridHeader[iRow].width == undefined || gridHeader[iRow].width == '' ? "100px" : gridHeader[iRow].width);
            colDef.Sortable = (gridHeader[iRow].sort == undefined ? false : gridHeader[iRow].sort);
            colDef.Searchable = (gridHeader[iRow].filter == undefined ? false : gridHeader[iRow].filter);
            colDef.BgColor = (gridHeader[iRow].bgcolor == undefined || gridHeader[iRow].bgcolor == '' ? "" : gridHeader[iRow].bgcolor);
            colDef.TextColor = (gridHeader[iRow].textcolor == undefined || gridHeader[iRow].textcolor == '' ? "" : gridHeader[iRow].textcolor);
            colDef.TextAlign = (gridHeader[iRow].textalign == undefined || gridHeader[iRow].textalign == '' ? "" : gridHeader[iRow].textalign);
            colDef.DataType = (gridHeader[iRow].datatype == undefined || gridHeader[iRow].datatype == '' ? "text" : gridHeader[iRow].datatype);
            colDef.EditType = (gridHeader[iRow].edittype == undefined || gridHeader[iRow].edittype == '' ? "" : gridHeader[iRow].edittype);
            colDef.EditOptions = (gridHeader[iRow].editoptions == undefined || gridHeader[iRow].editoptions == '' ? [] : gridHeader[iRow].editoptions);
            colDef.ManageValue = (gridHeader[iRow].managevalue == undefined || gridHeader[iRow].managevalue == '' ? "" : gridHeader[iRow].managevalue);
            colDef.FreezeCol = (gridHeader[iRow].freezcol == undefined ? false : gridHeader[iRow].freezcol);
        }
        gridColumns.push(colDef);
    }
    SuvarnaGrid.gridCols = gridColumns;
    SuvarnaGrid.unlockDivID = divID;
    SuvarnaGrid.BindGrid(true);
}

var gridCols = [];
var searchCols = [];
var searchElements = [];
var gridColGroups = [];
var reload = true;
var _iniUrl = "/" + window.location.pathname.split('/')[1] + "/";
var iKeyUp = 0;
var prevCheckAll = true;
var refreshFlag = false;
var lastSearchIds = [];
var bFilter = false;
var SuvarnaGrid = {
    wsPath: "",
    divID: "",
    unlockDivID: "",
    pageSize: 1000,
    pageNum: 1,
    params: {},
    dateFormat: "",
    timeFormat: "",
    rowFormat: [],
    gridCols: [],
    selectColumn: false,
    FileName: "Download",
    gridSummary: [],
    filterHeader: true,
    checkAllDateID: '',
    showSearch: true,
    showColumns: true,
    advSearch: false,
    showExpand: false,
    showHeader: true,
    fromDate: '',
    toDate: '',
    footerItems: [],
    BindGrid: function (isPageLoad) {
        $('[id*=hdnWSPath]').val(this.wsPath);
        $('[id*=hdnWSParams]').val(JSON.stringify(this.params));
        SuvarnaGrid.params.pageNum = 1;
        SuvarnaGrid.params.pageSize = 10000;
        SuvarnaGrid.params._eventFlag = 1;

        if (isPageLoad) {
            populateGird([]);
        }
        else {
            var lockDiv = (SuvarnaGrid.unlockDivID != undefined && SuvarnaGrid.unlockDivID != "" ? SuvarnaGrid.unlockDivID : SuvarnaGrid.divID);
            if (lockDiv != undefined && lockDiv != "")
                w2utils.lock($('#' + lockDiv), "Please Wait", true);
            $.ajax({
                type: "POST",
                url: _iniUrl + SuvarnaGrid.wsPath,
                dataType: "json",
                async: false,
                data: JSON.stringify(SuvarnaGrid.params),
                contentType: "application/json; charset=utf-8",
                success: function (JData) {
                    populateGird(JData.d[0]);
                },
                error: function (jqXHR, textStatus, errorThrown) {
                    var error = 0;
                }
            });
        }
    }
}

function populateGird(data) {
    SuvarnaGrid.dateFormat = $('#ctl00_hdnMstDateFormat').val();
    SuvarnaGrid.timeFormat = $('#ctl00_hdnMstTimeFormat').val();

    var reportCols = '';
    gridCols = [];
    gridColGroups = [];
    colWidths = [];
    data.forEach(function (rowItem, rowIndex) {
        rowItem.recid = rowIndex + 1;
        var iCol = 0;
        $.each(rowItem, function (key, value) {
            if (rowIndex == 0) {
                colWidths.push({ ColName: key, ColWidth: (value == null ? "" : value).toString().length });
            }
            else {
                if (parseInt((value == null ? "" : value).toString().length) > parseInt(colWidths[iCol].ColWidth)) {
                    colWidths[iCol].ColWidth = (value == null ? "" : value).toString().length;
                }
            }
            iCol += 1;
        });

        var rowBgColor = "";
        SuvarnaGrid.rowFormat.forEach(function (hRow, hIndex) {
            var checkField = hRow.CheckField, checkVal = hRow.CheckVal;
            $.each(rowItem, function (key, value) {
                if (key.toLowerCase() == checkField.toLowerCase() && value.toLowerCase() == checkVal.toLowerCase()) { rowBgColor = hRow.BGColor; };
            });
        });
        if (rowBgColor != "") rowItem.w2ui = { "style": "background-color: " + rowBgColor };
    });
    searchElements = [];
    SuvarnaGrid.gridCols.forEach(function (rowItem, rowIndex) {
        var bgColor = (rowItem.BgColor == undefined || rowItem.BgColor == null ? "" : "background-color: " + rowItem.BgColor);
        var textColor = (rowItem.TextColor == undefined || rowItem.TextColor == null ? "" : "color: " + rowItem.TextColor);
        var textAlign = (rowItem.TextAlign == undefined || rowItem.TextAlign == null ? "" : "text-align: " + rowItem.TextAlign);
        var editOptions = { type: "", items: [], showAll: true };

        var derivedWidth = "0";
        if (rowItem.DataType == 'Manage') {
            var iconWidth = (rowItem.ManageValue != undefined ? rowItem.ManageValue.length : 0) * 23;
            if (iconWidth > derivedWidth) derivedWidth = iconWidth;
        }
        else {
            var filterList = $.grep(colWidths, function (objFilter, index) {
                if (objFilter.ColName == rowItem.DBField)
                    return objFilter;
            });

            if (filterList.length > 0) derivedWidth = filterList[0].ColWidth;
            if (rowItem.Caption.length > derivedWidth) derivedWidth = rowItem.Caption.length
            if (rowItem.DataType == 'datetime') {
                derivedWidth = 22;
            }
            derivedWidth = (parseInt(derivedWidth) * 8).toString();
        }
        if (parseInt(derivedWidth) < 100) derivedWidth = '100';

        var colSchema = { field: rowItem.DBField,
            caption: '<div style="text-align:center;font-weight:bold">' + rowItem.Caption + '</div>',
            size: derivedWidth + "px",
            sortable: (rowItem.Sortable == undefined || rowItem.Sortable == null ? true : rowItem.Sortable),
            resizable: true,
            searchable: (rowItem.Searchable == undefined || rowItem.Searchable == null ? true : rowItem.Searchable),
            style: "",
            frozen: (rowItem.FreezeCol == undefined || rowItem.FreezeCol == null ? false : rowItem.FreezeCol),
            render: null
        }
        colSchema.searchable = (SuvarnaGrid.showSearch == false ? false : colSchema.searchable);
        if (rowItem.DataType == undefined || rowItem.DataType == null) rowItem.DataType = 'text';
        if (rowItem.Searchable == undefined || rowItem.Searchable == null) rowItem.Searchable = 'text';
        switch (rowItem.DataType.toUpperCase()) {
            case 'MANAGE':
            case 'MANIPULATE':
                colSchema.render = function (record, index, column_index) {
                    var objManage = rowItem.ManageValue;
                    var divManage = '&nbsp;&nbsp;';
                    objManage.forEach(function (mngItem, mngIndex) {
                        var displayStyle = '';
                        if (rowItem.IconOptions.length > 0) {
                            $.each(record, function (key, value) {
                                for (var dRow = 0; dRow < rowItem.IconOptions.length; dRow++) {
                                    var thisRow = rowItem.IconOptions[dRow];
                                    var colShow = thisRow.split(':')[2], colHide = thisRow.split(':')[3];
                                    if (key.toUpperCase() == thisRow.split(':')[0].toUpperCase() && value.toUpperCase() == thisRow.split(':')[1].toUpperCase() && colHide.split('-')[1] == mngIndex) {
                                        displayStyle = " style='display:none' ";
                                        break;
                                    }
                                }
                            });
                        }
                        var clickOption = { ClickFn: mngItem.click, RecId: "##recid##" };
                        divManage += "<a " + displayStyle + "href='#' title='" + mngItem.alt + "' onclick='ManageClick(" + JSON.stringify(clickOption) + ")'><img src='" + mngItem.icon + "'></a>" + (displayStyle == '' ? "&nbsp;&nbsp;" : '');
                    });

                    var html = '<div>' + divManage.replace(/\##recid##/g, record.recid) + '</div>';
                    return html;
                }
                break;
            case "INT":
                if (textAlign == "") textAlign = "text-align: right";
                break;
            case "FLOAT":
                if (textAlign == "") textAlign = "text-align: right";
                colSchema.precision = "2";
                break;
            case "DATE":
                colSchema.render = function (record, index, column_index) {
                    if (record.summary == true) return "";
                    var tempDate = this.getCellValue(index, column_index);
                    if (tempDate.indexOf('Date') > 0) tempDate = TojavascriptDate(tempDate);
                    return (tempDate != "" ? new Date(tempDate).format(SuvarnaGrid.dateFormat) : "");
                }
                break;
            case "DATETIME":
                colSchema.render = function (record, index, column_index) {
                    if (record.summary == true) return "";
                    var tempDate = this.getCellValue(index, column_index);
                    if (tempDate.indexOf('Date') > 0) tempDate = TojavascriptDate(tempDate);
                    return (tempDate != "" ? new Date(tempDate).format(SuvarnaGrid.dateFormat) + " " + new Date(tempDate).format(SuvarnaGrid.timeFormat) : "");
                }
                break;
            default:
                colSchema.render = function (record, index, column_index) {
                    if (record.summary == true) return "";
                    var tempDate = this.getCellValue(index, column_index);
                    var pStyle = "";
                    if (isNaN(tempDate) == false) pStyle += 'float: right;'
                    tempDate = "<span style='" + pStyle + "'>" + tempDate + "</span>";
                    return tempDate;
                }
                break;
        }
        if (rowItem.EditType != undefined && rowItem.EditType != null && rowItem.EditType != '') {
            editOptions.type = rowItem.EditType.toLowerCase();
            if (editOptions.type.toUpperCase() == 'SELECT' || editOptions.type.toUpperCase() == 'LIST') editOptions.items = rowItem.EditOptions;
            colSchema.editable = editOptions;
        }

        colSchema.style = (bgColor != "" ? bgColor + "; " : "") + (textColor != "" ? textColor + "; " : "") + (textAlign != "" ? textAlign + "; " : "")
        gridCols.push(colSchema);
        if (SuvarnaGrid.filterHeader == true) {
            var sGroup = '';
            if (rowIndex == 0) gridColGroups.push({ caption: sGroup });
            if (rowItem.Searchable != undefined && rowItem.Searchable != null && rowItem.Searchable != '' && rowItem.DataType != 'Manage') {
                sGroup = "<div class='jtblfilterdiv'><i class='icon-search' style='margin-top:0px;'></i><input type='text' class='filtertext' style='width:100%;height:20px;padding-left:17px;' id='" + rowItem.DBField + "' placeholder='" + rowItem.Caption + "' onKeyUp='return fn_KeyUp(event,this.id)' onKeyDown='return (event.keyCode != 13);' /></div>"
                searchElements.push({ searchID: rowItem.DBField, searchVal: '' });
            }
            gridColGroups.push({ caption: sGroup });
        }

        if (rowItem.DBField != undefined && rowItem.DBField != null && rowItem.DBField != '') {
            reportCols += rowItem.Caption + ':' + rowItem.DBField + '&';
        }
    });

    gridCols.unshift({ field: 'recid', caption: '<b>Sl. No.</b>', size: '55px', sortable: true });
    $('#' + SuvarnaGrid.divID).w2destroy('grid');
    var config = {
        grid: {
            name: 'grid',
            show: {
                footer: true,
                toolbar: true,
                refresh: false,
                fixedBody: false,
                toolbarReload: false,
                selectColumn: SuvarnaGrid.selectColumn,
                toolbarColumns: SuvarnaGrid.showColumns,
                toolbarSearch: SuvarnaGrid.showSearch,
                expandColumn: false
            },
            resizable: true,
            multiSearch: true,
            columns: gridCols,
            records: data,
            columnGroups: gridColGroups,
            summary: SuvarnaGrid.gridSummary,
            toolbar: {
                items: [
                    { type: 'button', id: 'btnClearFilter', text: 'Clear Filters', style: 'background-color:#01a2d8;color:#ffffff;height:25px;width:100px;text-align:center;font-weight:bold;margin-right:10px;' },
                    { type: 'spacer' },
                    { type: 'html', id: 'item5',
                        html: function (item) {
                            var html = '';

                            if ($('[id*=hdnShowExport]').val() == 'Y' || $('[id*=hdnShowExportRep]').val() == "Y") {
                                html = '<div style="padding: 3px 10px;">' +
                                       'Export To <input id="listExport">' +
                                       '</div>' +
                                       '<script>' +
                                       'var exportOptions = ["Select One", "Excel(.xls)","Excel Binary","Excel(.xlsx)", "Word", "CSV"];' +
                                       '$("input[id=listExport]").w2field("list", { items: exportOptions });' +
                                       '$("#listExport").w2field().setIndex(0)' +
                                       '</script>';
                            }
                            return html;
                        }
                    },
                    { type: 'button', id: 'btnExport', text: 'Export', style: 'background-color:#01a2d8;color:#ffffff;height:25px;width:60px;text-align:center;font-weight:bold;margin-right:10px;display:' + ($('[id*=hdnShowExport]').val() == 'Y' || $('[id*=hdnShowExportRep]').val() == "Y" ? "" : "none") + ';' }
                ],
                onClick: function (event) {
                    if (event.target.toUpperCase() == 'BTNEXPORT') {
                        if ($('#listExport').w2field().get().id.toUpperCase() == "SELECT ONE") {
                            $(".stoast").toastText("Info", "Please select Export Option", 5, 2);
                        }
                        else {
                            lastSearchIds = JSON.parse(JSON.stringify(w2ui.grid.last.searchIds));
                            bFilter = (lastSearchIds.length == w2ui['grid'].records.length || lastSearchIds.length == 0 ? false : true);

                            if (bFilter == true) {
                                $(".smessagebox").scustommessagebox(1, "Export Data", "Filtered data is exporting to EXCEL, click OK to export", fn_Export, "", ExportNoalert);
                            }
                            else {
                                fn_Export(bFilter, lastSearchIds);
                            }
                        }
                    }
                    else if (event.target.toUpperCase() == 'BTNCLEARFILTER') {
                        w2ui['grid'].searchReset();
                    }
                    event.done(function () {

                    });
                }
            },
            onRender: function (event) {
                event.done(function () {
                    if ($('#gridBody') != undefined)
                        $('#' + SuvarnaGrid.divID).height($('#gridBody').height());
                    var lockDiv = (SuvarnaGrid.unlockDivID != undefined && SuvarnaGrid.unlockDivID != "" ? SuvarnaGrid.unlockDivID : SuvarnaGrid.divID);
                    if (lockDiv != undefined && lockDiv != "")
                        w2utils.unlock($('#' + lockDiv));
                    $('#tb_grid_toolbar_item_w2ui-search').css("display", (SuvarnaGrid.showSearch == false ? 'none' : 'block'));
                });
            }
        }
    };

    if (SuvarnaGrid.showExpand == true) {
        config.grid.onExpand = function (event) {
            var filterData = $.grep(w2ui['grid'].records, function (objFilter, index) {
                if (objFilter.recid == event.recid)
                    return objFilter;
            });
            var mailDesc = filterData[0].MSG_DESC;
            $('#' + event.box_id).html("<div style='height:300px;overflow-y:auto;padding:3px;' class='divscroll'><div>" + mailDesc + "</div><br></div>");
        }
    }
    $().w2grid(config.grid);
    $('#' + SuvarnaGrid.divID).w2render('grid');
    w2ui['grid'].refresh();
    w2ui.grid.on('search', function (event) {
        var searchCriteria = event.searchData;
        searchCriteria.forEach(function (searchRow, searchIndex) {
            var searchCol = searchRow.field;
            var searchVal = searchRow.value;

            searchElements.forEach(function (rowItem, rowIndex) {
                if (searchCol == rowItem.searchID) {
                    rowItem.searchVal = searchVal;
                }
            });
        });
        if (searchCriteria.length == 0) {
            searchElements.forEach(function (rowItem, rowIndex) {
                rowItem.searchVal = "";
            });
        }
        event.done(function () {
            searchElements.forEach(function (rowItem, rowIndex) {
                $('#' + rowItem.searchID).val(rowItem.searchVal);
            });
        });
    });
    w2ui.grid.on('reload', function (event) {
        if (reload) {
            event.preventDefault();
            w2ui['grid'].searchReset();
            SuvarnaGrid.BindGrid(false);
            reload = false;
        }
        event.done(function () {
            reload = true;
        });
    });
    if (reportCols.lenght > 0) reportCols = reportCols.substring(1, reportCols.length - 1);
    $('[id*=hdnExportColumns]').val(reportCols);
}

function ExportNoalert() { }

function fn_Export() {
    $("#progressshow").show();
    setTimeout(function () {
        var sExtension = "";
        switch ($('#listExport').w2field().get().id.toUpperCase()) {
            case "EXCEL(.XLS)": sExtension = '.xls'; break;
            case "EXCEL BINARY": sExtension = '.xlsb'; break;
            case "EXCEL(.XLSX)": sExtension = '.xlsx'; break;
            case "WORD": sExtension = '.doc'; break;
            case "CSV": sExtension = '.csv'; break;
        }

        var curTime = new Date();
        var formatTime = curTime.getDate().toString() + (curTime.getMonth() + 1).toString() + curTime.getFullYear().toString() +
                     curTime.getHours().toString() + curTime.getMinutes().toString() + curTime.getSeconds().toString();
        var dRowIndex = 0, objOrgDet;


        var excelData = w2ui['grid'].records;
        var gridHtml = "<table border='1'>";

        if (SuvarnaGrid.showHeader == true) {

            GetNonAsync(
                    "Private/dasboard.aspx/GetOrgDet",
                    {},
                    function (JData) {
                        objOrgDet = JData.d[0][0][0];

                        //                        var xlFile = SuvarnaGrid.FileName.replace(/\>/g, '_').replace(/\ /g, '') + "_" + formatTime + '.' + sExtension;
                        //                        alasql('SELECT * INTO XLSX("' + xlFile + '",{headers:true}) FROM ?', [excelData]);
                        $('#progressshow').hide()
                    },
                    function (jqXHR, textStatus, errorThrown) {
                    }
            );

            //            if (objOrgDet != undefined) {
            //                gridHtml += "<tr>" + "<td style='align:left' rowspan='4' colspan='2'><IMG SRC='" + objOrgDet.IMAGE_PATH + "' STYLE='WIDTH:100PX !IMPORTANT;HEIGHT:100PX !IMPORTANT;></td>" +
            //                                         "<td style='align:left' colspan='" + (w2ui['grid'].columns.length - 2).toString() + "'><SPAN STYLE='FONT-SIZE:15PT;FONT-WEIGHT:BOLD'>" + objOrgDet.ORG_NAME + "</SPAN></td>" + "</tr>";
            //                gridHtml += "<tr>" + "<td style='align:left' colspan='" + (w2ui['grid'].columns.length - 2).toString() + "'><SPAN STYLE='FONT-WEIGHT:BOLD'>" + objOrgDet.ADDRESS1 + ", " + objOrgDet.ADDRESS2 + "</SPAN></td>" + "</tr>";
            //                gridHtml += "<tr>" + "<td style='align:left' colspan='" + (w2ui['grid'].columns.length - 2).toString() + "'><SPAN STYLE='FONT-WEIGHT:BOLD'>Phone: " + objOrgDet.OFFICE_PHONE + "</SPAN></td>" + "</tr>";
            //                gridHtml += "<tr>" + "<td style='align:left' colspan='" + (w2ui['grid'].columns.length - 2).toString() + "'><SPAN STYLE='FONT-WEIGHT:BOLD'>Report: " + (SuvarnaGrid.FileName == "" ? $(document).find('title').text() : SuvarnaGrid.FileName) + "</SPAN></td>" + "</tr>";
            //                gridHtml += "<tr>" + "<td style='align:left' colspan='" + (w2ui['grid'].columns.length).toString() + "'></td>" + "</tr>";
            //            }
        }

        gridHtml += "<tr style='position:absolute;'>";
        SuvarnaGrid.gridCols.forEach(function (col, index) {
            //gridHtml += "<td style='background-color:#d6d5d7'><b>" + col.Caption + "</b></td>";
            gridHtml += "<td><b>" + col.Caption + "</b></td>";
        });
        gridHtml += "</tr>";

        // var xlData = JSON.stringify(excelData);

        excelData.forEach(function (row, rowIndex) {
            if (bFilter == false) {
                var bgColor = (dRowIndex % 2 != 0 ? "#f7f7f7" : "#ffffff");
                gridHtml += "<tr>";
                SuvarnaGrid.gridCols.forEach(function (col, colIndex) {
                    //gridHtml += "<td style='background-color:" + bgColor + "'>" + (row[col.DBField] == null ? "" : row[col.DBField]) + "</td>";
                    gridHtml += "<td>" + (row[col.DBField] == null ? "" : row[col.DBField]) + "</td>";
                });
                gridHtml += "</tr>";
                dRowIndex += 1;
            }
            else {
                if (lastSearchIds.length > 0) {
                    var bFound = false, rowFound = -1;
                    for (var iRow = 0; iRow < lastSearchIds.length; iRow++) {
                        if (lastSearchIds[iRow] == row.recid - 1) {
                            bFound = true;
                            rowFound = iRow;
                            break;
                        }
                    }

                    if (bFound == true) {
                        var bgColor = (dRowIndex % 2 != 0 ? "#f7f7f7" : "#ffffff");
                        gridHtml += "<tr>";
                        SuvarnaGrid.gridCols.forEach(function (col, colIndex) {
                            //gridHtml += "<td style='background-color:" + bgColor + "'>" + (row[col.DBField] == null ? "" : row[col.DBField]) + "</td>";
                            gridHtml += "<td>" + (row[col.DBField] == null ? "" : row[col.DBField]) + "</td>";
                        });
                        gridHtml += "</tr>";
                        dRowIndex += 1;
                        lastSearchIds.splice(rowFound, 1);
                    }
                }
            }
        });
        gridHtml += "</table>";

        //        gridHtml += "<br><br><table border='1'>";
        //        gridHtml += "<tr>" + "<td style='align:left' colspan='2'><b>From Date</b></td>" + "<td style='align:left' colspan='" + (w2ui['grid'].columns.length - 2).toString() + "'>'" + SuvarnaGrid.fromDate + "</td>" + "</tr>";
        //        gridHtml += "<tr>" + "<td style='align:left' colspan='2'><b>To Date</b></td>" + "<td style='align:left' colspan='" + (w2ui['grid'].columns.length - 2).toString() + "'>'" + SuvarnaGrid.toDate + "</td>" + "</tr>";
        //        if (SuvarnaGrid.footerItems.length > 0) {
        //            SuvarnaGrid.footerItems.forEach(function (row, index) {
        //                gridHtml += "<tr>" +
        //                "<td style='align:left' colspan='2'><b>" + row.KEY + "</b></td>" +
        //                "<td style='align:left' colspan='" + (w2ui['grid'].columns.length - 2).toString() + "'>'" + (row.VALUE == '' ? '[ALL]' : row.VALUE) + "</td>" +
        //                "</tr>";
        //            });
        //        }
        //        gridHtml += "</table>";

        //        var sFilter = "";
        //        gridCols.forEach(function (row, index) {
        //            if ($('#' + row.field).val() != undefined && $('#' + row.field).val() != null && $('#' + row.field).val() != '') {
        //                sFilter += "<span style='color:blue'>" + $('#' + row.field).attr('placeholder') + "</span> CONTAINS <span style='color:green'>" + $('#' + row.field).val().toUpperCase() + '</span>, ';
        //            }
        //        });

        //        if (sFilter != "") {
        //            sFilter = sFilter.substring(0, sFilter.length - 2);
        //            gridHtml += "<br><br><table border='1'>";
        //            gridHtml += "<tr>" + "<td style='align:left' colspan='2'><b>Filtered On</b></td>" + "<td style='align:left' colspan='" + (w2ui['grid'].columns.length - 2).toString() + "'>'" + sFilter + "</td>" + "</tr>";
        //            gridHtml += "</table>";
        //        }

        var data = new Blob([gridHtml], {
            type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=utf-8"
        });
        var sFileName = ((SuvarnaGrid.FileName == "" ? $(document).find('title').text() : SuvarnaGrid.FileName) + '_' + SuvarnaGrid.fromDate + "_" + SuvarnaGrid.toDate + "_" + formatTime).replace(/\ /g, '_') + sExtension;
        saveAs(data, sFileName);
        $("#progressshow").hide();
    }, 1000);
}

$('#grid_grid_search_all').keydown = function (event) {
    return (event.keyCode != 13);
}

$('#grid_grid_search_all').keypress = function (event) {
    return (event.keyCode != 13);
}

function fn_KeyUp(e, thisID) {
    if (e.keyCode == 13) {
        var dateChanged = $('[id*=hdnDateChanged]').val();
        var searchData = w2ui.grid.searchData
        if (SuvarnaGrid.checkAllDateID != '' && document.getElementById(SuvarnaGrid.checkAllDateID) != null) {
            if (prevCheckAll != document.getElementById(SuvarnaGrid.checkAllDateID).checked) {
                prevCheckAll = document.getElementById(SuvarnaGrid.checkAllDateID).checked;
                dateChanged = 'Y';
            }
        }
        if (SuvarnaGrid.advSearch == true) {
            dateChanged = 'Y';
        }
        else {
            dateChanged = undefined;
        }

        if (($('[id*=hdnDateChanged]').val() == "" && iKeyUp == 0) || $('[id*=hdnDateChanged]').val() == "Y")
            dateChanged = 'Y';

        if (SuvarnaGrid.advSearch == true && dateChanged != undefined && (dateChanged == 'Y' || iKeyUp == 0)) {
            fn_BindGrid();
        }
        else {
            fn_Search();
            var firterRecCnt = w2ui['grid'].total;
            $('#' + thisID).focus();
        }
    }
}

function fn_BindGrid() {
    var _advSearch = "", searchItems = [];
    if (SuvarnaGrid.advSearch == true) {
        searchElements.forEach(function (rowItem, rowIndex) {
            var searchID = rowItem.searchID, searchVal = $('#' + searchID).val();
            if (searchVal != '') {
                _advSearch += searchID + " LIKE '%" + searchVal + "%' AND ";
                if (searchVal.indexOf("'") == -1)
                    searchVal = searchVal.replace("'", "''''");
                searchItems.push(searchID + '@@' + searchVal);
            }
        });
    }
    if (_advSearch.length > 0) {
        _advSearch = _advSearch.substring(0, _advSearch.length - 5);
    }

    populateGird([]);
    var fDt = ''; var tDt = '';
    if (SuvarnaGrid.checkAllDateID != '' && document.getElementById(SuvarnaGrid.checkAllDateID) != null && document.getElementById(SuvarnaGrid.checkAllDateID).checked) {
        fDt = ''; tDt = '';
    }
    else {
        var _dt = $('[id*=txtDate]').val();
        fDt = GetDates('FROM_DT', _dt); tDt = GetDates('TO_DT', _dt);
    }

    SuvarnaGrid.params._fDt = fDt;
    SuvarnaGrid.params._tDt = tDt;
    SuvarnaGrid.params._advSrch = _advSearch;
    SuvarnaGrid.BindGrid(false);
    w2ui['grid'].searchReset();
    $('[id*=hdnDateChanged]').val("");

    searchItems.forEach(function (rowItem, rowIndex) {
        var txtID = rowItem.split('@@')[0];
        var txtVal = rowItem.split('@@')[1];
        $('#' + txtID).val(txtVal);
    });

    iKeyUp += 1;
}

function fn_Search() {
    var searchOn = [];
    searchElements.forEach(function (rowItem, rowIndex) {
        rowItem.searchVal = $('#' + rowItem.searchID).val();
        if (rowItem.searchVal != '') searchOn.push({ field: rowItem.searchID, value: rowItem.searchVal, operator: 'contains' });
    });

    if (searchOn.length > 0) {
        w2ui['grid'].search(searchOn, 'AND');
        searchElements.forEach(function (rowItem, rowIndex) {
            $('#' + rowItem.searchID).val(rowItem.searchVal);
        });
    }
    else {
        w2ui['grid'].searchReset();
    }
}

function ManageClick(clickOption) {
    var fnName = clickOption.ClickFn;
    var recId = clickOption.RecId;
    var rowData = w2ui['grid'].get(recId);

    var callbackFunction = eval(fnName);
    callbackFunction(rowData);
}

function TojavascriptDate(value) {
    var pattern = /Date\(([^)]+)\)/;
    var res = pattern.exec(value);
    var dt = new Date(parseFloat(res[1]));
    return dt;
}
function GetWebConfigSettingsCall(key) {
    var _d = '';
    GetNonAsync(
                "Private/FrontOffice/Registrations.aspx/GetWebConfigSetting",
                { key: key },
                function (JData) {
                    _d = JData.d;
                },
                function (jqXHR, textStatus, errorThrown) {
                    $(".stoast").toastText("Info", errorThrown, 5, 3);
                });
    return _d;
}
function GetDocIDFiltersByServer(DocID) {
    var _d = '';
    GetNonAsync(
                "Private/FrontOffice/Registrations.aspx/GetDocIDFilters",
                { DocID: DocID },
                function (JData) {
                    if (JData.d != '' && JData.d != undefined && JData.d != null) {
                        if (JData.d.length > 2) {
                            _d = jQuery.parseJSON(JData.d);
                        }
                    }
                },
                function (jqXHR, textStatus, errorThrown) {
                    $(".stoast").toastText("Info", errorThrown, 5, 3);
                });
    return _d;
}
function GetDocIDFiltersByClient(d, val) {
    return d.filter(function (i) {
        return Object.keys(val).every(function (j) {
            return i[j] == val[j];
        });
    });
}


function fn_GetValidationsStatus(_Admnno) {
    var _d = '';
    var _data = '';
    GetNonAsync(
                "Private/FrontOffice/Registrations.aspx/GetValidationsStatus",
                { Admn_no: _Admnno },
                function (JData) {
                    if (JData.d != '' && JData.d != undefined && JData.d != null) {
                        if (JData.d.length > 2) {
                            _d = jQuery.parseJSON(JData.d);
                            _data = _d[0];
                            fn_ValidationsMsgs(_data, _Admnno);
                        }
                    }
                },
                function (jqXHR, textStatus, errorThrown) {
                    $(".stoast").toastText("Info", errorThrown, 5, 3);
                });
    return _ValidationMsg;
}

var _ValidationMsg = '';
function fn_ValidationsMsgs(_data, _Admnno) {
    var _DschrgStatus = _data.DSCHRG_STATUS;
    var _FinalBill = _data.FINAL_BILL_STATUS;
    var _SeviceCall = _data.SERVICE_CALL_OFF;
    var _DschrgProcstatus = _data.DISCHARGE_PROCESS_STATUS;
    var _AckName = _data.ACK_BY_NAME;
    var _AckDt = _data.ACK_DT;
    var _BedStatus = _data.BED_STATUS;

    if (_DschrgStatus == 'D' || _DschrgStatus == 'W') {
        _ValidationMsg = 'Sorry ' + _Admnno + ' Patient was Discharged';
    }
    else if (_FinalBill.toUpperCase().trim() == 'BILL DONE') {
        _ValidationMsg = 'Sorry ' + _Admnno + ' Patient was Final Bill Done';
    }
    else if (_SeviceCall.toUpperCase().trim() == 'YES') {
        _ValidationMsg = 'Sorry service called off For ' + _Admnno + ' Patient';
    }
    else if (_BedStatus.toUpperCase().trim() == 'ASSIGNED' && (_AckName == '' || _AckName == null || _AckName == undefined)) {
        _ValidationMsg = 'System does not allow to post services until bed acknowledgment done!.Please contact Nurse administrator';
    }
    else {
        _ValidationMsg = '';
    }
    if (_ValidationMsg != "") {
        $(".smessagebox").scustommessagebox(1, "Info", _ValidationMsg, fn_ConfmVldMsg);
    }
    return _ValidationMsg;
}
function fn_ConfmVldMsg() { return false; }
function fn_GetStatusofIndent(_IndentId, _srvIDS) {
    var _d = '';
    var _data = '';
    GetNonAsync(
                "Private/FrontOffice/Registrations.aspx/GetValidationsStatusIndent",
                { IndentId: _IndentId, srvIDS: _srvIDS },
                function (JData) {
                    if (JData.d != '' && JData.d != undefined && JData.d != null) {
                        if (JData.d.length > 2) {

                            _d = jQuery.parseJSON(JData.d);
                            _data = _d;
                            fn_IndentValidationsMsgs(_data);
                        }
                    }
                },
                function (jqXHR, textStatus, errorThrown) {
                    $(".stoast").toastText("Info", errorThrown, 5, 3);
                });
    return _IndentValidationMsg;
}


var _IndentValidationMsg = '';
function fn_IndentValidationsMsgs(_data) {
    for (var i = 0; i < _data.length; i++) {
        var _AcceptBy = _data[i].ACCEPT_REJECTED_BY;
        var _AcceptDt = _data[i].ACCEPT_REJECTED_DT;
        var _SeviceStatus = _data[i].SERVICE_STATUS;
        var _RecordStatus = _data[i].RECORD_STATUS;
        var _Servicename = _data[i].SERVICE_NAME;
        var _ServiceRecordStatus = _data[i].SERVICE_RECORD_STATUS;
        if (_ServiceRecordStatus != 'A') {
            _IndentValidationMsg = 'Sorry ' + _Servicename + ' Not a Active Service';
        }

        else if (_RecordStatus == 'C') {
            _IndentValidationMsg = 'Sorry ' + _Servicename + ' Already cancelled';
        }
        else if (_SeviceStatus == 'R' && _AcceptBy != "" && _AcceptBy != undefined && _AcceptBy != null && _AcceptDt != "" && _AcceptDt != undefined && _AcceptDt != null) {
            _IndentValidationMsg = 'Sorry ' + _Servicename + ' Already Rejected';
        }
        else if (_SeviceStatus == 'I' && _AcceptBy != "" && _AcceptBy != undefined && _AcceptBy != null && _AcceptDt != "" && _AcceptDt != undefined && _AcceptDt != null) {
            _IndentValidationMsg = 'Sorry ' + _Servicename + ' Already Approved';
        }

        else {
            _IndentValidationMsg = '';
        }

        if (_IndentValidationMsg != "") {
            $(".stoast").toastText("Warning", _IndentValidationMsg, 10, 3);
            return _IndentValidationMsg;
        }

    }
    return _IndentValidationMsg;
}
function fn_IndentConfmVldMsg() { return false; }
document.addEventListener('drop', function (e) {
    e.preventDefault();
    e.stopPropagation();
}, false);
document.addEventListener('dragover', function (e) {
    e.preventDefault();
    e.stopPropagation();
}, false);
$(document).ready(function () {
    $('.PHClear').click(function () {
        globaldatetime = '';
        for (var i = 0; i < $('.lookupcontrol').find('input[type=text]').length; i++) {
            var obj = $('.lookupcontrol').find('input[type=text]')[i].id;
            var ID = obj.substring(0, obj.length - 16);
            var HiddenID = ID + '_hiddenID1';
            if (document.getElementById(HiddenID) != null) {
                if (document.getElementById(HiddenID).value != "") {
                    $('[id*=' + obj + ']').prop('disabled', false);
                }
            }
        }
    });
    //    $('.PHSave').click(function () {
    //        for (var i = 0; i < $('.lookupcontrol').find('input[type=text]').length; i++) {
    //            var obj = $('.lookupcontrol').find('input[type=text]')[i].id;
    //            var ID = obj.substring(0, obj.length - 16);
    //            var HiddenID = ID + '_hiddenID1';
    //            if (document.getElementById(HiddenID) != null) {
    //                if (document.getElementById(HiddenID).value != "") {
    //                    $('[id*=' + obj + ']').prop('disabled', false);
    //                }
    //            }
    //        }
    //    });
    //    $('.PHSave').click(function () {
    //        for (var i = 0; i < $('.lookupcontrol').find('input[type=text]').length; i++) {
    //            var obj = $('.lookupcontrol').find('input[type=text]')[i].id;
    //            var ID = obj.substring(0, obj.length - 16);
    //            var HiddenID = ID + '_hiddenID';
    //            var HdntxtSerchName = ID + '_hiddenText';
    //            if (document.getElementById(obj).value != document.getElementById(HdntxtSerchName).value) {
    //                document.getElementById(obj).value = document.getElementById(HdntxtSerchName).value;
    //                $('.smessagebox').hide();
    //                document.getElementById(obj).focus();
    //                return false;
    //            }
    //        }
    //    });
});
function enablelookup() {
    for (var i = 0; i < $('.lookupcontrol').find('input[type=text]').length; i++) {
        var obj = $('.lookupcontrol').find('input[type=text]')[i].id;
        var ID = obj.substring(0, obj.length - 16);
        var HiddenID = ID + '_hiddenID1';
        if (document.getElementById(HiddenID) != null) {
            if (document.getElementById(HiddenID).value != "") {
                $('[id*=' + obj + ']').prop('disabled', false);
            }
        }
    } 
} 

