/* below script for page layout*/
/* above script for page layout end*/
var _iniUrl = "/" + window.location.pathname.split('/')[1] + "/";
var Page = (function() {
    var HMmodule = [];
    var HMSmodule = [];
    var HMDocument = [];
    var LStorage = false;
    var SelectedModuleId;

    var getJSONData = function() {
//        GetAsync(
//        //"DynamicOperationService.asmx/GetDocumentsByUser2",
//         "Private/Admin/View/ModuleView.aspx/GetDocumentsByUser",
//        {},
//        function(JData) {
//            DataSort(jQuery.parseJSON(JData.d));
//        },
//        function(jqXHR, textStatus, errorThrown) {
//            //alert(errorThrown);
//        });
    };

    var DataSort = function(input) {
        for (var i in input) {
            if (input[i]["PARENT_DOC_ID"] == null) {
                HMmodule.push({ mid: input[i]["DOC_ID"], module: input[i]["DOC_DESC"], sorder: input[i]["DISPLAY_ORDER"] });
            }
            else {
                if (input[i]["DOC_FROM"] == 'H') {
                    if (input[i]["DOC_DESC"] == "Admin DashBoard") {
                        document.getElementById('ctl00__Document_ID').value = input[i]["DOC_ID"];
                    }
                    HMDocument.push({ smid: input[i]["DOC_ID"], smodule: input[i]["DOC_DESC"], parentid: input[i]["PARENT_DOC_ID"], pageurl: input[i]["PAGE_URL"], dtype: input[i]["DOC_TYPE"], pdType: input[i]["DOC_ID_TYPE"], pmid: input[i]["PARENT_MODULE_ID"], istokensys: input[i].IS_TOKENSYSTEM, girdpageurl: input[i].GRID_PAGE_URL });
                }
            }
        }
        if (LStorage) {
            localStorage.clear();
            localStorage.setItem('hmodule', JSON.stringify(HMmodule));
            localStorage.setItem('hdocument', JSON.stringify(HMDocument));
            LStorage = false;
        }
        BuildMenu();
    };
    var BuildMenu = function() {
        if ($('[id*=hdnextendedVal]').val() != null && $('[id*=hdnextendedVal]').val() != undefined) {
            if ($('[id*=hdnextendedVal]').val().toLowerCase() == "true") {
                if (!window.location.toString().toLowerCase().match(/extendeddisplay.aspx/)) {
                    if (localStorage.getItem("EXTNDDSPLY") != "1") {
                        window.open(_iniUrl + "Private/FrontOffice/ExtendedDisplay.aspx", "myWindow", "width=10000,height=10000");
                        localStorage.setItem('EXTNDDSPLY', "1");
                    }
                }
                else {
                    window.reload(_iniUrl + "Private/FrontOffice/ExtendedDisplay.aspx");
                }
            }
        }
        if ($("#dpl_modules option").length == 0) {
            for (var i in HMmodule) {
                if (SelectedModuleId == 11 || SelectedModuleId == 157 || SelectedModuleId == 121 || SelectedModuleId == 254) {     
                    SelectedModuleId = HMmodule[i]["mid"];
                }
                if ((i == 0) && SelectedModuleId == undefined) {
                    SelectedModuleId = HMmodule[i]["mid"];
                }
                if (SelectedModuleId == HMmodule[i]["mid"])
                    $("#dpl_modules").append($('<option selected="selected"></option>').val(HMmodule[i]["mid"]).html(HMmodule[i]["module"]));
                else
                    $("#dpl_modules").append($('<option></option>').val(HMmodule[i]["mid"]).html(HMmodule[i]["module"]));
            }
        }
        var smitem = "<ul>"; var sditem = "<ul>", docs = 0;
        for (var i in HMDocument) {
            if (HMDocument[i].parentid == SelectedModuleId && HMDocument[i].pdType == 'M') {
                if (HMDocument[i].pageurl == null || HMDocument[i].pageurl == '') { HMDocument[i].pageurl = "#"; }
                smitem += "<li><a href='" + HMDocument[i].pageurl + "' data-mid=\"" + HMDocument[i].parentid + "\"  data-id=\"" + HMDocument[i].smid + "\" data_moduleid=\"" + HMDocument[i].pmid + "\">" + HMDocument[i].smodule + "<i></i></a></li>";
            }
            else if (HMDocument[i].parentid == SelectedModuleId && HMDocument[i].pdType != 'M') {
                docs++;
                sditem += "<li><a href='" + HMDocument[i].pageurl.replace("~/", $("#_abspath").val()) + "' data-tab=\"1\" data-desc=\"" + HMDocument[i].smodule + "\" data-type=\"" + HMDocument[i].dtype + "\" title='Open in a New Tab'  name='newtab' data-mid=\"" + HMDocument[i].parentid + "\"  data-id=\"" + HMDocument[i].smid + "\" data_moduleid=\"" + HMDocument[i].pmid + "\" data-istoken=\"" + HMDocument[i].istokensys + "\" data-gridurl=\"" + HMDocument[i].girdpageurl + "\" >&nbsp;</a><a href='" + HMDocument[i].pageurl.replace("~/", $("#_abspath").val()) + "' data-desc=\"" + HMDocument[i].smodule + "\"  data-type=\"" + HMDocument[i].dtype + "\"  data-mid=\"" + HMDocument[i].parentid + "\"  data-id=\"" + HMDocument[i].smid + "\" data_moduleid=\"" + HMDocument[i].pmid + "\" data-tab=\"0\" data-istoken=\"" + HMDocument[i].istokensys + "\" data-gridurl=\"" + HMDocument[i].girdpageurl + "\">" + HMDocument[i].smodule + "</a></li>";
            }
        }
        smitem += "<ul>";
        $("#menudata").html(smitem);
        if (docs > 0) {
            sditem += "<ul>";
            $("#menudatasmall").html(sditem);
        }
        $("#menudata a").click(function() {
            console.log(SelectedModuleId);
            var docid = $(this).data("id");
            var doc = "<ul>";
            for (var i in HMDocument) {
                if (HMDocument[i].parentid == docid)
                    doc += "<li><a href='" + HMDocument[i].pageurl.replace("~/", $("#_abspath").val()) + "' data-tab=\"1\" data-desc=\"" + HMDocument[i].smodule + "\" data-type=\"" + HMDocument[i].dtype + "\" title='Open in a New Tab' name='newtab' data-mid=\"" + HMDocument[i].parentid + "\"  data-id=\"" + HMDocument[i].smid + "\" data-istoken=\"" + HMDocument[i].istokensys + "\" data-gridurl=\"" + HMDocument[i].girdpageurl + "\">&nbsp;</a><a href='" + HMDocument[i].pageurl.replace("~/", $("#_abspath").val()) + "' data-desc=\"" + HMDocument[i].smodule + "\"  data-type=\"" + HMDocument[i].dtype + "\"  data-mid=\"" + HMDocument[i].parentid + "\"  data-id=\"" + HMDocument[i].smid + "\" data-tab=\"0\" data-istoken=\"" + HMDocument[i].istokensys + "\" data-gridurl=\"" + HMDocument[i].girdpageurl + "\">" + HMDocument[i].smodule + "</a></li>";
            }

            doc += "<ul>";
            $("#menudatasmall").html(doc);

            $("#menudata a").click(function(e) {
                e.preventDefault();
                /*callAJAX(); for session refresh*/
                var href = $(this).attr("href");
                var desc = $(this).data("desc");
                var dtype = $(this).data("type");
                var did = $(this).data("id");
                var mid = $(this).data("mid");
                var dtab = $(this).data("tab");
                var _istoken = $(this).data("istoken");
                //                var _gridpath = $(this).data("gridurl");
                //                console.log(_gridpath);
                //                if (_gridpath != undefined) {
                //                    if (_gridpath == "#") {
                //                        _gridpath = _gridpath;
                //                    }
                //                    else {
                //                        _gridpath = _gridpath.replace("~/", $("#_abspath").val());
                //                    }
                //                }
                ongridurlKey($(this).data("gridurl"));
                if (/\?/i.test(href)) {
                    href += "&ID=" + desc + "&DOC_ID=" + did + "&DOC_TYPE=" + dtype; /*+"&iframe=true";*/
                }
                else {
                    href += "?ID=" + desc + "&DOC_ID=" + did + "&DOC_TYPE=" + dtype; /*+"&iframe=true";*/
                }
                ManageSes($("#dpl_modules").val(), mid, did, desc, '', _istoken);

                if (parseInt(dtab) == 1) {
                    window.open(href);
                    /*createIframe(href,did);*/
                }
                else {
                    window.location = href;
                }
            });

            $("#menudatasmall a").click(function(e) {
                e.preventDefault();
                /*callAJAX(); for session refresh*/
                var href = $(this).attr("href");
                var desc = $(this).data("desc");
                var dtype = $(this).data("type");
                var did = $(this).data("id");
                var mid = $(this).data("mid");
                var dtab = $(this).data("tab");
                var _istoken = $(this).data("istoken");
                if (/\?/i.test(href)) {
                    href += "&ID=" + desc + "&DOC_ID=" + did + "&DOC_TYPE=" + dtype; /*+"&iframe=true";*/
                }
                else {
                    href += "?ID=" + desc + "&DOC_ID=" + did + "&DOC_TYPE=" + dtype; /*+"&iframe=true";*/
                }

                ongridurlKey($(this).data("gridurl"));
                ManageSes($("#dpl_modules").val(), mid, did, desc, '', _istoken);

                if (parseInt(dtab) == 1) {
                    window.open(href);
                    /*createIframe(href,did);*/
                }
                else {
                    window.location = href;
                }
            });
        });
    };
    var NavigateURL;

    var BindMenu = function() {
        $("#dpl_modules").change(function() {
            SelectedModuleId = $(this).val();
            //            if (parseInt(SelectedModuleId) == 146) {
            //                var pageurl = '~/Private/NurseStation/Nursemanagements.aspx';
            //                href = pageurl.replace("~/", $("#_abspath").val());
            //                window.location = href;
            //            }
            //            else 
            if (parseInt(SelectedModuleId) == 11) {
                GetAsync(
                "Private/dasboard.aspx/ManageSessionIds",
                { Type: 'L' },
                function(result) {
                    href = result.d;
                    window.location = href;
                });
            }
            else if (parseInt(SelectedModuleId) == 157) {
                GetAsync(
                "Private/dasboard.aspx/ManageSessionIds",
                { Type: 'S' },
                function(result) {
                    href = result.d;
                    window.location = href;
                });
            }
            else if (parseInt(SelectedModuleId) == 121) {
                GetAsync(
                "Private/dasboard.aspx/ManageSessionIds",
                { Type: 'D' },
                function(result) {
                    href = result.d;
                    window.location = href;
                });
            }
            else if (parseInt(SelectedModuleId) == 254) {    
                GetAsync(
                "Private/dasboard.aspx/ManageSessionIds",
                { Type: 'A' },
                function(result) {
                    href = result.d;
                    window.location = href;
                });
            }
            else {
                var doc = "<ul></ul>";
                $("#menudatasmall").html(doc);
                BuildMenu();
            }
        });
        //alert(SelectedModuleId);
        if (window.localStorage) {
            LStorage = true;
            if (localStorage["hmodule"] != undefined) {
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
    var _pageurl2 = "";
    var QuickSearch = function() {
        $(".quicksearch").keyup(function(e) {
            var _val = $(this).val();
            var $current = $("#qsoptions ul li.highlight");
            if (e.keyCode != 40 && e.keyCode != 38) {
                $("#qsoptions ul").empty();
                var cnt = 0;
                var re = new RegExp(_val, "ig");
                for (var i in HMDocument) {
                    var _smodule = HMDocument[i].smodule;
                    /*if (_smodule.match(re) && cnt < 5) {*/
                    if (_smodule.match(re) && cnt < 5 || _smodule.toLowerCase().indexOf(re.source) > 0 && cnt < 5) {
                        var _pageurl = HMDocument[i].pageurl.replace("~/", $("#_abspath").val());
                        if (/\?/i.test(_pageurl)) {
                            _pageurl += "&ID=" + HMDocument[i].smodule + "&DOC_ID=" + HMDocument[i].smid + "&DOC_TYPE=" + HMDocument[i].dtype + '^' + HMDocument[i].pmid + '$' + HMDocument[i].parentid + '$' + HMDocument[i].smid;
                        }
                        else {
                            _pageurl += "?ID=" + HMDocument[i].smodule + "&DOC_ID=" + HMDocument[i].smid + "&DOC_TYPE=" + HMDocument[i].dtype + '^' + HMDocument[i].pmid + '$' + HMDocument[i].parentid + '$' + HMDocument[i].smid;
                        }
                        if (cnt == 0) {
                            $("#qsoptions ul").append("<li class=\"highlight\"  data-url=\"" + _pageurl + "\" class='gs' data-istoken=\"" + HMDocument[i].istokensys + "\" data-gridurl=\"" + HMDocument[i].girdpageurl + "\">" + _smodule + "</li>");
                        }
                        else
                            $("#qsoptions ul").append("<li data-url=\"" + _pageurl + "\" class='gs' data-istoken=\"" + HMDocument[i].istokensys + "\" data-gridurl=\"" + HMDocument[i].girdpageurl + "\">" + _smodule + "</li>");
                        cnt++;
                    }
                }
                $("#qsoptions").show();
                $("#qsoptions ul li").on("click", function() {
                    $(".quicksearch").val($(this).html());
                    var istoken = $(this).data("istoken");
                    localStorage.setItem("ISTOKEN", istoken);
                    ongridurlKey($(this).data("gridurl"));
                    QuickSearchURL = $(this).data("url");
                    $("#qsoptions").hide();
                });
            }
            else if (e.keyCode == 40) {
                $("#qsoptions ul li").each(function(i, j) {
                    $(this).removeClass();
                });
                if ($current.next("li").length != 0)
                    $current.next("li").addClass("highlight");
                else
                    $current.addClass("highlight");
                $(this).val($("#qsoptions ul li.highlight").text());
                var istoken = $("#qsoptions ul li.highlight").data("istoken");
                //console.log("swe", $("#qsoptions ul li.highlight").data("istoken"));
                localStorage.setItem("ISTOKEN", istoken);
                ongridurlKey($("#qsoptions ul li.highlight").data("gridurl"));
                QuickSearchURL = $("#qsoptions ul li.highlight").data("url");
            }
            else if (e.keyCode == 38) {
                $("#qsoptions ul li").each(function(i, j) {
                    $(this).removeClass();
                });
                if ($current.prev("li").length != 0)
                    $current.prev("li").addClass("highlight");
                else
                    $current.addClass("highlight");
                $(this).val($("#qsoptions ul li.highlight").text());
                //console.log("swetha", $("#qsoptions ul li.highlight").data("istoken"));
                var istoken = $("#qsoptions ul li.highlight").data("istoken");
                localStorage.setItem("ISTOKEN", istoken);
                ongridurlKey($("#qsoptions ul li.highlight").data("gridurl"));
                QuickSearchURL = $("#qsoptions ul li.highlight").data("url");
            }
        });
        $(".quicksearch").keydown(function(e) {
            if (e.keyCode == 13) {
                var Ids = QuickSearchURL.split('^')[1];
                GetAsync(
            "Private/dasboard.aspx/ManageSessions",
            { ID: Ids.split('$')[0], MID: Ids.split('$')[1], DID: Ids.split('$')[2], MNAME: '', URL: '',MFRMCD: '' ,DOCFORMCD:  '' },
            function(JData) {
                e.preventDefault();
                window.location.assign(QuickSearchURL.split('^')[0]);
                // window.open(QuickSearchURL);
            },
            function(jqXHR, textStatus, errorThrown) {
            });
            }
        });
        $(".dnavigate").click(function(e) {
            e.preventDefault();
            var Ids = QuickSearchURL.split('^')[1];
            GetAsync(
            "Private/dasboard.aspx/ManageSessions",
            { ID: Ids.split('$')[0], MID: Ids.split('$')[1], DID: Ids.split('$')[2], MNAME: '', URL: '', MFRMCD: '', DOCFORMCD: '' },
            function(JData) {
                e.preventDefault();
                window.location.assign(QuickSearchURL.split('^')[0]);
                // window.open(QuickSearchURL);
            },
            function(jqXHR, textStatus, errorThrown) {
            });
        });
        $(".newtab").click(function(e) {
            //alert(QuickSearchURL.split('^')[1]);
            var Ids = QuickSearchURL.split('^')[1];
            // ManageSesids(moduleid, submoduleid, documentid, modulename, '');
            GetAsync(
            "Private/dasboard.aspx/ManageSessions",
            { ID: Ids.split('$')[0], MID: Ids.split('$')[1], DID: Ids.split('$')[2], MNAME: '', URL: '', MFRMCD: '', DOCFORMCD: '' },
            function(JData) {
                window.open(QuickSearchURL.split('^')[0]);
                e.preventDefault();
            },
            function(jqXHR, textStatus, errorThrown) {
                e.preventDefault();
            });
            e.preventDefault();
        });
        $(".quicksearch").blur(function() {
            /*$("#qsoptions").hide();*/
        });
        $(".quicksearch").focus(function() {
            if ($("#qsoptions ul li").length > 1) {
                $("#qsoptions").show();
            }
            $("#qsoptions").css({ top: ($("#gsearch input[type='text']").outerHeight() - 2) + "px", 'min-width': ($("#gsearch input[type='text']").outerWidth() - 1) + "px", 'left': '1px' });
        });

        $(document).click(function(e) {

            if (e.target.className !== "gs") {
                $("#qsoptions").hide();
            }

        });


    }
    return {
        Init: function(sessionID) {
            if (sessionID != undefined)
                SelectedModuleId = sessionID;
            BindMenu();
            QuickSearch();
        },
        getURL: function() {
            return QuickSearchURL;
        }
    }
} ());

function GetAsync(_url, params, csuccess, cfail) {
    $.ajax({
        type: "POST",
        url: _iniUrl + _url,
        dataType: "json",
        data: JSON.stringify(params),
        contentType: "application/json; charset=utf-8",
        error: function(jqXHR, textStatus, errorThrown) {
            cfail(jqXHR, textStatus, errorThrown);
        },
        success: function(JData) {
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
        error: function(jqXHR, textStatus, errorThrown) {
            cfail(jqXHR, textStatus, errorThrown);
        },
        success: function(JData) {
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
            , success: function(JData) {
                csuccess(JData);
            }
            , error: function(jqXHR, textStatus, errorThrown) {
                cfail(jqXHR, textStatus, errorThrown);
            }
    });
};
function ReturnIniUrl() {
    return _iniUrl;
};

/*
GetAsync(
"URLGOES",
"{}",
function(JData){
},
function(jqXHR, textStatus, errorThrown){
});
*/
function sortByKey(array, key, dir) {
    return array.sort(function(a, b) {
        var x = a[key].toLowerCase();
        var y = b[key].toLowerCase();
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

(function($) {

    $.fn.jDBtable = function(opt) {
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
        var _enableSorting = opt.enableSorting || false;
        var _enablePaging = opt.enablePaging || false;
        var _enableFilter = opt.enableFilter || false;
        var _enableCheckbox = opt.enableCheckbox || false;
        var _enableProgressBar = opt.enableProgressBar || false;
        var _selectedRows = [];
        var _enableDateFilter = opt.enableDateFilter || false;
        var _table = null;
        var _enableTrace = opt.enableTrace || false;
        var _dataKey = opt.dataKey || "";
        var _callService = opt.callService || false;
        var _rowClick = opt.rowClick || {};
        var _rowDataBound = opt.rowDataBound || {};
        var _onUnload = null;
        if (typeof opt.onUnload === "function") {
            _onUnload = opt.onUnload;
        }




        var _RowDataBinding = opt.RowDataBinding || {};
        opt.defaultWSParams.pageNum = opt.pageNum || 1;
        opt.defaultWSParams.pageSize = opt.pageSize || 10;
        var _advSrch = opt.advSrch || '';
        var _sno = opt.sno || 1;

        //var _enablePaging    = opt.enablePaging || false; 
        /* data object details*/
        /* private scope variable */

        //_TRF_div_Registrations


        var __eventsSetup = false;
        var __buildheaderfooter = false;
        var __availPages = 0;
        var __size, __tpages;
        var __jsonData = [];
        var __jsonDataCount = 0;
        var __AJAX = true;
        if (_wsPath != "") {
            _self.html("<table id=\"tbl_" + _selfid + "\" border=\"0\" cellpadding=\"0\" class=\"dashgrid\" cellspacing=\"0\"></table>");
            _table = _self.find("table");
            _tableID = $("#tbl_" + _selfid);
            getAJAXTableData();
        }
        else {
            trace("Webservice Path not provided.");
        }


        function trace(a, b) {
            try {
                if (_enableTrace) {
                    if (a != undefined)
                        console.log(a + " :: >");
                    if (b != undefined)
                        console.log(b);
                }
            } catch (e) { }
        }

        function getAJAXTableData() {
            trace("Webserivce parameters shown Below", _defaultWSParams);
            try {
                if (_defaultWSParams["_advSrch"] != null)
                    _defaultWSParams["_advSrch"] = _advSrch;
            } catch (e) { }
            GetNonAsync(
                     _wsPath
                    , _defaultWSParams
                    , function(JData) {
                        trace("AJAX Return Data", JData);
                        if (JData.d != null) {
                            __jsonDataCount = JData.d[1];
                            __jsonData = JData.d[0];
                            if (__jsonDataCount > 0) {
                                if (!__buildheaderfooter)
                                    buildHeaderFooter();
                                buildBody();
                                updateFooter();
                                if (_enableCheckbox) {
                                    addEventtoCheckbox();
                                }
                                bindEvents();
                            }
                            else {
                                _table.find("tbody").remove();
                                var _TRTD = "<tbody><tr class=\"norecord\"><td style=text-align:left;><h2 class=\"error\">" + _noData + "</h2></td></tr></tbody>";
                                _table.append(_TRTD);
                            }
                        }
                        else {
                            _table.find("tbody").remove();
                            var _TRTD = "<tbody><tr class=\"norecord\"><td style=text-align:left;><h2 class=\"error\">" + _noData + "</h2></td></tr></tbody>";
                            _table.append(_TRTD);
                        }
                    }
                    , function(jqXHR, textStatus, errorThrown) {
                        try { console.log(errorThrown); } catch (e) { }
                    }
               );
        }

        function getAJAXFilterData() {
            opt.pageNum = 1;
            try {
                _advSrch = '';
                if (_defaultWSParams["_advSrch"] != null)
                    _defaultWSParams["_advSrch"] = _advSrch;
            } catch (e) { }
            $(".filtertext").each(function(i, j) {
                /* _defaultWSFilterParams[$(this).data("col")] = $(this).val();*/
                if ($(this).val() != '') {
                    if (_advSrch == '')
                        _advSrch += $(this).data("col") + " LIKE '" + $(this).val() + "%'";
                    else
                        _advSrch += " AND " + $(this).data("col") + " LIKE '" + $(this).val() + "%'";
                }
            });
            try {
                if (_defaultWSParams["_advSrch"] != null)
                    _defaultWSParams["_advSrch"] = _advSrch;
            } catch (e) { }
            trace("Filter Webserivce parameters shown Below", _defaultWSParams);
            _sno = 1;
            GetAsync(
                     _wsFilterPath
                    , _defaultWSParams
                    , function(JData) {
                        if (JData.d != null) {
                            trace("Filter Data shown Below", JData);
                            __jsonDataCount = JData.d[1];
                            __jsonData = JData.d[0];
                            if (__jsonDataCount > 0) {
                                if (!__buildheaderfooter)
                                    buildHeaderFooter();
                                buildBody();
                                updateFooter();
                                if (_enableCheckbox) {
                                    addEventtoCheckbox();
                                }
                                bindEvents();
                            }
                            else {
                                _table.find("tbody").remove();
                                var _TRTD = "<tbody><tr class=\"norecord\"><td style=text-align:left;><h2 class=\"error\">" + _noData + "</h2></td></tr></tbody>";
                                _table.append(_TRTD);
                            }
                        }
                        else {
                            _table.find("tbody").remove();
                            var _TRTD = "<tbody><tr class=\"norecord\"><td style=text-align:left;><h2 class=\"error\">" + _noData + "</h2></td></tr></tbody>";
                            _table.append(_TRTD);
                        }
                    }
                    , function(jqXHR, textStatus, errorThrown) {
                        try { console.log(errorThrown); } catch (e) { }
                    }
               );
        }

        function ensureAllChecked() {
            _selectedRows = [];
            var _checkboxstate = true;
            $(".ajaxTablecheckbox" + _selfid).each(function(i, j) {
                if (!$(this).prop("checked")) {
                    _checkboxstate = false;
                }
                else {
                    _selectedRows.push($(this).data("key"));
                }
            });
            return _checkboxstate;
        }

        function addEventtoCheckbox() {
            $(".ajaxTablecheckboxall" + _selfid).click(function() {
                if ($(this).prop("checked")) {
                    $(".ajaxTablecheckbox" + _selfid).prop("checked", true);
                }
                else {
                    $(".ajaxTablecheckbox" + _selfid).prop("checked", false);
                }
                ensureAllChecked();
                if (typeof opt.checkboxClick === "function" && $(this).prop("checked")) {
                    opt.checkboxClick($(this), getObject());
                }
                else {
                    opt.checkboxClick($(this), getObject());
                }
            });
            $(".ajaxTablecheckbox" + _selfid).click(function() {
                if ($(this).prop("checked") && ensureAllChecked()) {
                    $(".ajaxTablecheckboxall" + _selfid).prop("checked", true);
                }
                else {
                    $(".ajaxTablecheckboxall" + _selfid).prop("checked", false);
                }
                ensureAllChecked();

                if (typeof opt.checkboxClick === "function" && $(this).prop("checked")) {
                    opt.checkboxClick($(this), getObject($(this).data("key")));
                }
                else {
                    opt.checkboxClick($(this), getObject($(this).data("key")));
                }
            });
        }


        function buildHeaderFooter() {

            if (typeof _header !== "string" && _header.length > 0 && _template.length > 0) {
                var _TRTH = "<thead><tr>";
                var __width = "";
                var __filter = "";
                var __filterRow = "<tr id=\"_TRF_" + _selfid + "\"><td style=\"width:30px\"></td>";
                _TRTH += "<th name='Sno' style=\"width:30px\">S.No.</th>";
                if (_enableCheckbox) {
                    _TRTH += "<th  name='check' style=\"width:5%\"><input type='checkbox' class='ajaxTablecheckboxall" + _selfid + "' /></th>";
                    __filterRow += "<td>&nbsp;</td>";
                }

                for (i in _header) {
                    var _hcol = _template[i].toString().split("*");
                    if (_header[i].width)
                        __width = " style=\"width:" + _header[i].width + "\"";

                    if (_header[i].filter) {
                        __filter = "<div class=\"jtablefilter\"><div class=\"filterdiv\"><i></i>&nbsp;</div></div></td>";
                        __filterRow += "<td><input type=\"text\" value=\"\" id=\"txt_" + _selfid + "_" + _hcol[0] + "\" class=\"filtertext\" data-col=\"" + _hcol[1] + "\" placeholder=\"Search in " + _header[i].col + "\" autocomplete=\"off\" /></td>";
                    }
                    else {
                        __filterRow += "<td>&nbsp;</td>";
                    }

                    if (typeof _header[i] === "object") {
                        _TRTH += "<th  name='cols" + i + "' " + __width + " data-col=\"" + _hcol[1] + "\"><span class=\"" + ((_header[i].sort) ? 'ajaxTablesort' : '') + "\"  data-dir=\"asc\">" + _header[i].col + "<span class=\"" + ((_header[i].sort) ? 'jtablesort' : '') + "\">&nbsp;&nbsp;&nbsp;&nbsp;</span></span>" + __filter + "</th>";
                    }
                    else {
                        _TRTH += "<th name='cols" + i + "' " + __width + ">" + _header[i] + __filter + "</th>";
                    }
                    __width = "";
                    __filter = "";
                }
                if (_enableProgressBar) {
                    _TRTH += "<th name=\"div1" + "\" style=\"width:30%\"></th>";
                }
                __filterRow += "</tr>";
                _TRTH += "</tr>";

                if (typeof _rowDataBound === "function") {
                    _TRTH = _rowDataBound(_TRTH, _selfid) || _TRTH;
                }

                if (_enableFilter) {
                    _TRTH += __filterRow + "</thead>";

                    $("#tbl_" + _selfid).find(".filtertext").keypress(function(e) {
                        if (e.keyCode != 13) {
                            $(this).css("background", "");
                            return true;
                        }
                        //                        else {
                        //                        $("#btnfirst").trigger("click");
                        //                            getAJAXFilterData();
                        //                            return false;
                        //                        }

                    });
                }
                else {
                    _TRTH += "</thead>";
                }

                _table.append(_TRTH);
                //_self.append("<div id=\"_" + _selfid + "_FreezeHeader\" style=\"position:absolute;z-index:2;width:100%;top:0px;display:none;\"><table border=\"0\" cellpadding=\"0\" class=\"grid\" cellspacing=\"0\" >" + _TRTH + "</table></div>")
            }

            _table.append("<tfoot>"
                             + "<tr class=\"jtablepaging\"><td colspan=\"" + _template.length + "\">"
                             + "<div class=\"tabelfoot\">"
                             + "<div style=\"padding:5px;\" class=\"jtablecpage footLdata\"><span class=\"jtablepage footLdata\">{}</span> <span class=\"footLdata\">&nbsp;to&nbsp;</span>  <span class=\"jtablecpagecount footLdata\">{}</span> <span class=\"footLdata\">&nbsp; from&nbsp; </span><span class=\"jtablerecordcount footLdata\">{}</span>  <span class=\"footLdata\">&nbsp; Records </span></div>"
                             + "<div  style=\"float:right; width:auto; padding:5px;\" class=\"jtablecpage\">Show Rows&nbsp;"
                             + "<select id=\"dpl_" + _selfid + "\" style=\"width:56px;\">"
                             + "<option value=\"10\">10</option>"
                             + "<option value=\"25\">25</option>"
                             + "<option value=\"50\">50</option>"
                             + "<option value=\"100\">100</option>"
                             + "</select>"
                             + "&nbsp;Page &nbsp;"
                             + "<input type=\"text\" id=\"txt_" + _selfid + "\" value=\"" + opt.defaultWSParams.pageNum + "\" style=\"width:35px;\" />"
                             + "&nbsp;of <span class=\"jtabletpages\">{}</span> "
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
            _self.find("#dpl_" + _selfid).change(function() {
                opt.defaultWSParams.pageSize = this.value;
                opt.defaultWSParams.pageNum = 1;
                _sno = ((parseInt(opt.defaultWSParams.pageNum) - 1) * opt.defaultWSParams.pageSize) + 1;
                getAJAXTableData();

            });
            _self.find("#btnfirst").click(function() {
                opt.defaultWSParams.pageNum = 1;
                _sno = ((parseInt(opt.defaultWSParams.pageNum) - 1) * opt.defaultWSParams.pageSize) + 1;
                getAJAXTableData();
            });
            _self.find("#btnprev").click(function() {
                opt.defaultWSParams.pageNum = parseInt(opt.defaultWSParams.pageNum) - 1;
                _sno = ((parseInt(opt.defaultWSParams.pageNum) - 1) * opt.defaultWSParams.pageSize) + 1;
                getAJAXTableData();
            });
            //
            _self.find("#btnnext").click(function() {
                opt.defaultWSParams.pageNum = parseInt(opt.defaultWSParams.pageNum) + 1;
                _sno = ((parseInt(opt.defaultWSParams.pageNum) - 1) * opt.defaultWSParams.pageSize) + 1;
                getAJAXTableData();
            });
            _self.find("#btnlast").click(function() {
                opt.defaultWSParams.pageNum = parseInt(__tpages);
                _sno = ((parseInt(opt.defaultWSParams.pageNum) - 1) * opt.defaultWSParams.pageSize) + 1;
                getAJAXTableData();
            });

            _self.find("#txt_" + _selfid).blur(function() {
                if (__tpages >= parseInt(this.value)) {
                    opt.defaultWSParams.pageNum = this.value;
                    _sno = ((parseInt(opt.defaultWSParams.pageNum) - 1) * opt.defaultWSParams.pageSize) + 1;
                    getAJAXTableData();
                }
                else {
                    alert("selected page number does not exists");
                }
            });

            __buildheaderfooter = true;
            if (_enableFilter) {
                $("#tbl_" + _selfid).find(".filtertext").keypress(function(e) {
                    if (e.keyCode != 13) {
                        $(this).css("background", "");
                        return true;
                    }
                    else {
                        $("#btnfirst").trigger("click");
                        getAJAXFilterData();
                        return false;
                    }

                });
                //                $("#_TRF_" + _selfid + " .filtertext").keydown(function(e) {
                //                    if (e.keyCode === 13) {
                //                        getAJAXFilterData();
                //                        return false;
                //                    }
                //                });
                $("#tbl_" + _selfid).find(".jtablefilter").click(function() {
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





        }

        //        function buildBody() {
        //            _table.find("tbody").remove();
        //            if (_template.length > 0) {
        //                var _TRTD = "<tbody>";
        //                for (var i in __jsonData) {
        //                    var _dataRow = __jsonData[i];
        //                    var _rowItem = "<tr data-key=" + __jsonData[i][_dataKey] + " class=\"rowclickevent\" ";

        //                    if (typeof _rowDataBound === "function") {
        //                        _rowItem = _rowDataBound(_rowItem, __jsonData[i]) || _rowItem;
        //                    }

        //                    _TRTD += _rowItem + ">";

        //                    for (var j in _template) {

        //                        if (_enableCheckbox && j == 0) {
        //                            _TRTD += "<td name='check'><input type='checkbox' class='ajaxTablecheckbox" + _selfid + "'  data-key='" + __jsonData[i][_dataKey] + "' /></td>";
        //                        }

        //                        _TRTD += "<td name='cols" + j + "'>";
        //                        if (typeof _template[j] === "string") {
        //                            if (_dataRow[_template[j].toString().split("*")[0]] != null)
        //                                _TRTD += _dataRow[_template[j].toString().split("*")[0]];
        //                            else
        //                                _TRTD += '';
        //                        }
        //                        else {
        //                            for (var k in _template[j]) {
        //                                if (_template[j][k].icon != "")
        //                                    _TRTD += "<a href=\"#\"  class=\"gico\" onClick=\"" + _template[j][k].click + "('" + __jsonData[i][_dataKey] + "')\"><img src=\"" + _template[j][k].icon + "\"/></a>";
        //                            }
        //                        }
        //                        _TRTD += "</td>";
        //                    }
        //                    _TRTD += "</tr>";
        //                }
        //                _TRTD += "</tbody>";
        //                _table.append(_TRTD);

        //            }
        //            //setFreezeHeader();
        //        }
        function buildBody() {
            _table.find("tbody").remove();
            if (_template.length > 0) {
                var _TRTD = "<tbody>";
                for (var i in __jsonData) {
                    var _dataRow = __jsonData[i];

                    var RowCreation = "<tr data-key=\"" + ((_dataKey !== "") ? __jsonData[i][_dataKey] : "") + "\" class=\"rowclickevent\" ";
                    //   var _rowItem = "<tr data-key=" + __jsonData[i][_dataKey] + " class=\"rowclickevent\" ";

                    //                    if (typeof _rowDataBound === "function") {
                    //                        //  
                    //                        //  _rowItem = _rowDataBound(_rowItem, __jsonData[i]) || _rowItem;
                    //                        RowCreation = _rowDataBound(RowCreation, __jsonData[i]) || RowCreation;
                    //                        //    
                    //                    }
                    RowCreation += ">";
                    // _TRTD += _rowItem + ">";
                    RowCreation += "<td name='sno'>" + (parseInt(_sno)) + "</td>";
                    _sno++;
                    for (var j in _template) {

                        if (_enableCheckbox && j == 0) {
                            // _TRTD += "<td name='check'><input type='checkbox' class='ajaxTablecheckbox" + _selfid + "'  data-key='" + __jsonData[i][_dataKey] + "' /></td>";
                            RowCreation += "<td name='check'><input type='checkbox' class='ajaxTablecheckbox" + _selfid + "'  data-key='" + __jsonData[i][_dataKey] + "' /></td>";

                        }

                        //_TRTD += "<td name='cols" + j + "'>";
                        RowCreation += "<td name='cols" + j + "'>";
                        if (typeof _template[j] === "string") {
                            RowCreation += _dataRow[_template[j].toString().split("*")[0]];
                            // _TRTD += _dataRow[_template[j].toString().split("*")[0]];
                        }
                        else {
                            for (var k in _template[j]) {
                                if (_template[j][k].icon != "") {
                                    /*Below Attributes (title,class) Added by Satyananda. title is for tooltip msg,class is for Icon Manage */
                                    RowCreation += "<a href=\"#\" title=\" " + (_template[j][k].alt) + "\" class=\"gico g" + (_template[j][k].alt).replace(/\s+/g, '') + "\" onClick=\"" + _template[j][k].click + "('" + __jsonData[i][_dataKey] + "')\"><img src=\"" + _template[j][k].icon + "\"/></a>";
                                    // _TRTD += "<a href=\"#\" onClick=\"" + _template[j][k].click + "('" + __jsonData[i][_dataKey] + "')\"><img src=\"" + _template[j][k].icon + "\"/></a>";

                                }
                            }
                        }
                        RowCreation += "</td>";

                        // _TRTD += "</td>";
                    }
                    if (_enableProgressBar) {
                        RowCreation += "<td name='div" + j + "'>";
                        RowCreation += "<div class=\"progress_wrap" + "\" ><div class=\"tip_north progress_bar" + "\"><div></div></div></div>";
                        RowCreation += "</tr>";
                        // _TRTD += "</tr>";

                    }
                    _TRTD += RowCreation;

                }

                _TRTD += "</tbody>";
                if (typeof _RowDataBinding === "function") {
                    _TRTD = _RowDataBinding(_TRTD, __jsonData) || RowCreation;
                }
                _table.append(_TRTD);

            }
            //setFreezeHeader();
        }

        function setFreezeHeader() {
            $("#tbl_" + _selfid + " thead tr th").each(function(i, j) {
                //$("#_"+_selfid+"_FreezeHeader th:eq("+i+")").css("width",Math.ceil(100*$(this).width()/$("#tbl_"+_selfid).width())+"%");                   
                $("#_" + _selfid + "_FreezeHeader th:eq(" + i + ")").css("width", $(this).width() + "px");
            });
            $("#_" + _selfid + "_FreezeHeader").width($("#tbl_" + _selfid).width()).show();
            $("#_" + _selfid + "_FreezeHeader table").width($("#tbl_" + _selfid).width()).show();
        }

        $(window).resize(function() {
            //setFreezeHeader();
        });
        function updateFooter() {
            __size = opt.defaultWSParams.pageNum * opt.defaultWSParams.pageSize;
            $("#txt_" + _selfid).val(opt.defaultWSParams.pageNum);
            __tpages = __jsonDataCount % opt.defaultWSParams.pageSize > 0 ? (parseInt(__jsonDataCount / opt.defaultWSParams.pageSize) + 1) : (__jsonDataCount / opt.defaultWSParams.pageSize);
            _tableID.find("span.jtablepage").html(((parseInt($("#txt_" + _selfid).val()) - 1) * opt.defaultWSParams.pageSize) + 1);
            _tableID.find("span.jtablerecordcount").html(__jsonDataCount);
            _tableID.find("span.jtablecpagecount").html((__size > __jsonDataCount) ? __jsonDataCount : __size);
            _tableID.find("span.jtabletpages").html(__tpages);
            $(".pg_first").prop('disabled', opt.defaultWSParams.pageNum == 1);
            $(".pg_prev").prop('disabled', opt.defaultWSParams.pageNum <= 1);
            $(".pg_next").prop('disabled', opt.defaultWSParams.pageNum >= __tpages);
            $(".pg_last").prop('disabled', opt.defaultWSParams.pageNum == __tpages);
        }

        function bindEvents() {

            $("table#tbl_" + _selfid + " .ajaxTablesort").click(function() {
                $("table#tbl_" + _selfid + " thead th").each(function() {
                    $(this).removeClass();
                    $(this).find("span.ajaxTablesort span").removeClass().addClass("jtablesort");
                });

                $(this).parent().addClass("ajaxsorted");
                var _col = $(this).parent().data("col");
                var _dir = $(this).data("dir");
                _sno = 1;
                __jsonData = sortByKey(__jsonData, _col, _dir);
                buildBody();

                $(this).data("dir", (_dir == "asc") ? "desc" : "asc");
                $(this).find("span").removeClass().addClass("jtablesort" + _dir);

            });


            if (typeof _rowClick === "function") {
                $(".rowclickevent").click(function() {
                    _rowClick(getObject($(this).data("key")));
                });
            }

            /*
            _table.find(".jtablefilter").click(function(){
            $('.filterdiv').css({width:$(".grid thead tr th").width()+"px",top:($(".grid thead tr th").height()+3)+"px"}).show();
            });*/
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
            getDataRow: function(key) {
                var _row = {};
                for (var i in __jsonData) {
                    if (__jsonData[i][_dataKey] == key) {
                        _row = __jsonData[i];
                        break;
                    }
                }
                return _row;
            },
            reBind: function(param) {
                _defaultWSParams = param;
                getAJAXTableData();
            },
            getSelectedRows: function() {
                return _selectedRows;
            }
        }


    }
} (jQuery));

/*  <script type="text/javascript" language="javascript">
    
function editItem(objs){
//console.log(gridControl.getRow(objs));
}
function deleteRow(objs){
alert(objs);
}
function getRow(me){
//console.log($(me).parent().parent().children(0));
}
var gridControl;
$(document).ready(function(){
var param = param||{};
param.dataKey = "BILL_ID";
param.defaultWSParams = {
actionType:""
,actionValue:""};
param.wsPath="/UI/RegService.asmx/GetRegistrations";        
param.wsFilterPath="/UI/RegService.asmx/GetRegistrations";      
param.template = ["REG_NO*REGISTRATION_NO"
,"DISPLAY_NAME*DISPLAY_NAME"
,"RES_PERSON_NAME*REFERAL_NAME"
,[{icon:'../../Assets/Grid_Icons/edit1.gif',click:'editItem',alt:'Text goes here...'},{icon:'../../Assets/Grid_Icons/delete_icon.gif',click:'deleteRow',alt:'Text goes here...'}]];
        
param.header = [ {col:"Reg No",sort:true,width:'30%',filter:true}
,{col:"Display Name",sort:false,width:'40%'}
,{col:"Responsible Person",sort:true,width:'20%',filter:true}
,"Manage"];
param.enablePaging = true;
param.enableTrace = true;
param.enableFilter =true;
param.enableCheckbox = true;
//Event for row click
param.rowClick = function(key){
console.log(key);
};
param.rowDataBound = function(row,jrow){
return row += " style='background:red'";
};
    
//Event for checkbox list selection on gridview
param.checkboxClick = getSelectedCheckbox;
          
gridControl = $("#tbl_reg").jtable(param);       
});
    
//This is for checkbox list selection on gridview
function getSelectedCheckbox(obj) {
console.log(obj);
}
function getRowData() {
console.log(gridControl.getSelectedRows());
}
</script>*/
/*

var hideStatus = true;



$(document).ready(function(){



$(".nav-menu-drop select").focus(function(){

hideStatus = false;
$(".nav-menu-drop,.mask").show();
});


$(".mnav").mouseover(function(){
    
$(".nav-menu-drop,.mask").show();
hideStatus = false;
//alert('hi');

},function(){
    
hideStatus = true;
setTimeout(function(){
if(hideStatus){
$(".nav-menu-drop,.mask").hide();
hideStatus = true;
//alert('hi1');
}
},1000);
    
});
 




});
*/

