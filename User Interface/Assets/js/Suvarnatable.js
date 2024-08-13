(function ($) {
    $.fn.hasScrollBar = function () {
        if (this.get(0) != undefined)
            return this.get(0).scrollHeight > this.height();
    };
})(jQuery);



(function ($) {
    $.fn.jMtable = function (opt) {
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
        var _level = opt.level || 1;
        var _treeCallBack = opt.treeCallBack || null;
        var _rowClick = opt.rowClick || {};
        var _RowDataBinding = opt.RowDataBinding || {};
        opt.defaultWSParams.pageSize = opt.pageSize || 10;
        opt.defaultWSParams.pageNum = opt.pageNum || 1;
        var _advSrch = opt.advSrch || '';
        /* added by rama, to differentiate whether the very first time DB hit or not (on 04-06-2018)*/
        var _PrevadvSrch = '';
        var _eventFlag = 1;
        var __jsonPrevDataCount = 0;
        /*  up to here by rama (on 04-06-2018)*/
        var _RowNo = opt.RowNo || false;
        var _sno = opt.sno || 1;
        var _tableTemplate = opt.tableTemplate || false;
        var _onUnload = null;
        if (typeof opt.onUnload === "function") {
            _onUnload = opt.onUnload;
        }
        if (opt.enableFooterRows == undefined) { opt.enableFooterRows = true; }
        var _enableFooterRows = opt.enableFooterRows || false;
        var FootrRow = '';
        var _enableDMS = opt.enableDMS || false;
        if (opt.enableDMS == false) {
            _enableDMS = false;
        }
        var _likeLookup = opt.likeLookup || false;
        if (_enableDMS != false) {
            if ($('[id*=hdnDMSPermissions]').val() != '[]' && $('[id*=hdnDMSPermissions]').val() != undefined && $('[id*=hdnDMSPermissions]').val() != null && $('[id*=hdnDMSPermissions]').val() != '' && _tableTemplate == false) {
                _enableDMS = true;
            }
        }
        /* data object details*/
        /* private scope variable */
        var __eventsSetup = false;
        var __buildheaderfooter = false;
        var __availPages = 0;
        var __size, __tpages;
        var __jsonData = [];
        var __jsonDataCount = 0;
        var __AJAX = true;
        var _isElipse = (opt.isElipse == undefined ? true : opt.isElipse ? true : false) || false;
        var _elipseLength = opt.elipseLength || 1;

        if (_wsPath != "") {
            _self.html("<table id=\"tbl_" + _selfid + "\" border=\"0\" cellpadding=\"0\" class=\"jtblgrid\" cellspacing=\"0\"></table>");
            _table = _self.find("table");
            if (_tableTemplate == false) {
                if (__buildheaderfooter == true || $('[id*=hdnDateChanged]').val() == "Y") {
                    getAJAXTableData();
                }
                else {
                    buildHeaderFooter();
                    $("#tbl_" + _selfid).find('.tabelfoot').css('display', 'none');
                }
            }
            else {
                getAJAXTableData();
            }
            _tableID = $("#tbl_" + _selfid);
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
            //I Ashok Naidu
            _ExportParams.IP_PAGENUM = _defaultWSParams["pageNum"];
            _ExportParams.IP_PAGESIZE = _defaultWSParams["pageSize"];
            _ExportParams.IP_ADVANCE_SEARCH = _defaultWSParams["_advSrch"];
            /* added by rama, to differentiate whether the very first time DB hit or not (on 04-06-2018)*/
            if (_PrevadvSrch == _advSrch + "#" + _defaultWSParams["_fDt"] + "#" + _defaultWSParams["_tDt"])
                _eventFlag = 0;
            else
                _eventFlag = 1;

            _defaultWSParams["_eventFlag"] = _eventFlag;
            _PrevadvSrch = _advSrch + "#" + _defaultWSParams["_fDt"] + "#" + _defaultWSParams["_tDt"];
            /*  up to here by rama (on 04-06-2018)*/
            var ParentParams = '';
            var Path = '';
            // if(Object.keys(_ExportParams).length>3)
            if (_ExportParams["PROC"] != undefined) {
                ExportParams(_ExportParams, _header, _template);
                ParentParams = { Params: $('[id*=hdnExportParams]').val() };
                Path = 'GridService.asmx/BindGetAllGrid';

            }
            else {
                ParentParams = _defaultWSParams;
                Path = _wsPath;
                ExportParams(ParentParams, _header, _template);
            }
            $('[id*=hdnWSPath]').val(Path);
            $('[id*=hdnWSParams]').val(JSON.stringify(ParentParams));

            //I Ashok Naidu End
            GetAsync(
                     Path
                    , ParentParams
                    , function (JData) {

                        trace("AJAX Return Data", JData);
                        if (JData.d != null) {
                            /* added by rama, to differentiate whether the very first time DB hit or not (on 04-06-2018)*/
                            if (JData.d[1] == -1)
                                __jsonDataCount = __jsonPrevDataCount;
                            else
                                __jsonDataCount = JData.d[1];

                            __jsonPrevDataCount = __jsonDataCount;

                            /*  up to here by rama (on 04-06-2018)*/


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
                                if (!__buildheaderfooter)
                                    buildHeaderFooter();
                                _sno = ((parseInt(opt.defaultWSParams.pageNum) - 1) * opt.defaultWSParams.pageSize) + 1;
                                buildBody();
                                scrolltbl();
                                updateFooter();
                                if (_enableCheckbox) {
                                    addEventtoCheckbox();
                                }
                                if (typeof _treeCallBack === "function") {
                                    _self.find(".ajaxlevel_1_click").bind("click", function () {
                                        e.stopImmediatePropagation();
                                        _treeCallBack(this);

                                        if ($(this).val() == "+")
                                            $(this).val("-");
                                        else
                                            $(this).val("+");
                                    });
                                }
                                bindEvents();
                            }
                            else {
                                _table.find("tbody").remove();
                                if (!__buildheaderfooter) {
                                    buildHeaderFooter();
                                    $("#tbl_" + _selfid).find('.tabelfoot').css('display', 'none');
                                }
                                var _TRTD = "<tbody><tr class=\"norecord\"><td style=text-align:left;><h2 class=\"error\"><i class=\" icon-pencil-1\"></i>" + _noData + "</h2></td></tr></tbody>";
                                _table.append(_TRTD);
                                /*$(_table).addClass("nodata1");*/
                            }
                        }
                        else {
                            _table.find("tbody").remove();
                            if (!__buildheaderfooter) {
                                buildHeaderFooter();
                                $("#tbl_" + _selfid).find('.tabelfoot').css('display', 'none');
                            }
                            var _TRTD = "<tbody><tr class=\"norecord\"><td style=text-align:left;><h2 class=\"error\"><i class=\" icon-pencil-1\"></i>" + _noData + "</h2></td></tr></tbody>";
                            _table.append(_TRTD);
                            $(_table).addClass("nodata");
                        }
                    }
                    , function (jqXHR, textStatus, errorThrown) {
                        try { console.log(errorThrown); } catch (e) { }
                    }
               );
        }
        function getAJAXFilterData() {
            try {
                _advSrch = '';
                if (_defaultWSParams["_advSrch"] != null)
                    _defaultWSParams["_advSrch"] = _advSrch;
                /*Added by Ravi Kumar*/
                if (Page_Name == "OrderVerification") {
                    _advSrch = ischecked;
                }
                /*Added by Ravi Kumar*/
            } catch (e) { }
            $("#_" + _selfid + "_FreezeHeader").find(".filtertext").each(function (i, j) {
                if ($(this).val() != '') {
                    if (_advSrch == '')
                        if ($(this).data("col").split('$')[1] == 'EXACT') {
                            _advSrch += $(this).data("col").split('$')[0] + " LIKE '" + $(this).val() + "'";
                        }
                        else {
                            _advSrch += $(this).data("col").split('$')[0] + " LIKE '%" + $(this).val() + "%'";
                        }
                    else {
                        if ($(this).data("col").split('$')[1] == 'EXACT') {
                            _advSrch += " AND " + $(this).data("col").split('$')[0] + " LIKE '" + $(this).val() + "'";
                        }
                        else {
                            _advSrch += " AND " + $(this).data("col").split('$')[0] + " LIKE '%" + $(this).val() + "%'";
                        }
                    }
                }
            });



            try {
                if (_defaultWSParams["_advSrch"] != null)
                    _defaultWSParams["_advSrch"] = _advSrch;
            } catch (e) { }
            trace("Filter Webserivce parameters shown Below", _defaultWSParams);
            _defaultWSParams.pageNum = 1;
            _sno = 1;
            /*added by Swetha Reddy if u want to remove plz let me know */
            if (_defaultWSParams["_advSrch"] != '' && _defaultWSParams["_advSrch"] != null && _defaultWSParams["_advSrch"] != undefined) {
                /*added by Rama for filtering based on date range */
                if ($('[id*=hdnisalldtchecked]').val() == "Y") {
                    _defaultWSParams["_fDt"] = '';
                    _defaultWSParams["_tDt"] = '';
                }
                else {
                    /* added by Rama for filtering data when enter is pressed insteadof immediate date selection */
                    if (_defaultWSParams["_fDt"] != undefined && _defaultWSParams["_fDt"] != null)  /*Added by naveen.a*/
                    /*&&_defaultWSParams["_fDt"]!= '' this condition is removed by srinivas*/
                        _defaultWSParams["_fDt"] = GetDates('FROM_DT', $(".ui-rangepicker-input").val());
                    if (_defaultWSParams["_tDt"] != undefined && _defaultWSParams["_tDt"] != null)  /*Added by naveen.a*/
                        _defaultWSParams["_tDt"] = GetDates('TO_DT', $(".ui-rangepicker-input").val());
                    /*  added by Rama  end*/
                }
            }
            else {
                /*added by Nitesh for Checkbox is select, all data to get*/
                if ($('[id*=hdnisalldtchecked]').val() == "Y") {
                    _defaultWSParams["_fDt"] = '';
                    _defaultWSParams["_tDt"] = '';
                }
                else {
                    /* added by Rama for filtering data when enter is pressed insteadof immediate date selection */
                    if (_defaultWSParams["_fDt"] != undefined && _defaultWSParams["_fDt"] != null)  /*Added by naveen.a*/
                        _defaultWSParams["_fDt"] = GetDates('FROM_DT', $(".ui-rangepicker-input").val());
                    if (_defaultWSParams["_tDt"] != undefined && _defaultWSParams["_tDt"] != null)   /*Added by naveen.a*/
                        _defaultWSParams["_tDt"] = GetDates('TO_DT', $(".ui-rangepicker-input").val());
                    /*  added by Rama  end*/
                }
            }
            /*I Ashok Naidu*/
            _ExportParams.IP_PAGENUM = _defaultWSParams["pageNum"];
            _ExportParams.IP_PAGESIZE = _defaultWSParams["pageSize"];
            _ExportParams.IP_ADVANCE_SEARCH = _defaultWSParams["_advSrch"];

            /* added by rama, to differentiate whether the very first time DB hit or not (on 04-06-2018)*/
            if (_PrevadvSrch == _advSrch + "#" + _defaultWSParams["_fDt"] + "#" + _defaultWSParams["_tDt"])
                _eventFlag = 0;
            else
                _eventFlag = 1;

            _defaultWSParams["_eventFlag"] = _eventFlag;
            _PrevadvSrch = _advSrch + "#" + _defaultWSParams["_fDt"] + "#" + _defaultWSParams["_tDt"];
            /*  up to here by rama (on 04-06-2018)*/
            var doc_id = $('[id*=hdndocsessionid]').val(); var user_id = $('[id*=hdnUserId]').val();
            var action_iptext = "GRID-SEARCH=FROM_DT:" + _defaultWSParams._fDt + "&TO_DT:" + _defaultWSParams._tDt
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
            if (Object.keys(_ExportParams).length > 3) {
                /* added by Rama for filtering data when enter is pressed insteadof immediate date selection */
                if (_defaultWSParams["_fDt"] != undefined)
                    _ExportParams.IP_FROM_DT = _defaultWSParams["_fDt"];
                if (_defaultWSParams["_tDt"] != undefined)
                    _ExportParams.IP_TO_DT = _defaultWSParams["_tDt"];
                /*  added by Rama  end*/
                ExportParams(_ExportParams, _header, _template);
                ParentParams = { Params: $('[id*=hdnExportParams]').val() };
                Path = 'GridService.asmx/BindGetAllGrid';
            }
            else {
                ParentParams = _defaultWSParams;
                Path = _wsPath;
                ExportParams(ParentParams, _header, _template);
            }
            $('[id*=hdnWSPath]').val(Path);
            $('[id*=hdnWSParams]').val(JSON.stringify(ParentParams));
            /*I Ashok Naidu End*/
            GetAsync(
                     Path
                    , ParentParams
                    , function (JData) {

                        if (JData.d != null) {
                            trace("Filter Data shown Below", JData);
                            /* added by rama, to differentiate whether the very first time DB hit or not (on 04-06-2018)*/
                            if (JData.d[1] == -1)
                                __jsonDataCount = __jsonPrevDataCount;
                            else
                                __jsonDataCount = JData.d[1];
                            __jsonPrevDataCount = __jsonDataCount;
                            /*  up to here by rama (on 04-06-2018)*/
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
                                var _TRTD = "<tbody><tr class=\"norecord\"><td style=text-align:left;><h2 class=\"error\"><i class=\" icon-pencil-1\"></i>" + _noData + "</h2></td></tr></tbody>";
                                _table.append(_TRTD);
                                $(_table).addClass("nodata");
                                updateFooter();
                            }
                        }
                        else {
                            _table.find("tbody").remove();
                            if (!__buildheaderfooter) {
                                buildHeaderFooter();
                                $("#tbl_" + _selfid).find('.tabelfoot').css('display', 'none');
                            }
                            var _TRTD = "<tbody><tr class=\"norecord\"><td style=text-align:left;><h2 class=\"error\"><i class=\" icon-pencil-1\"></i>" + _noData + "</h2></td></tr></tbody>";
                            _table.append(_TRTD);
                            $(_table).addClass("nodata");
                            updateFooter();
                        }
                        opt.defaultWSParams.pageNum = 1;
                        //updateFooter();
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
                    __filterRow = "<td ></td>"
                    _TRTH += "<th>S.No.</th>";
                }

                _TRTH += "<th></th>"; __filterRow += "<td>&nbsp;</td>";
                if (_enableCheckbox) {
                    _TRTH += "<th><input type='checkbox' class='ajaxTablecheckboxall" + _selfid + "' /></th>";
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
                                __filterRow += "<td><div class=\"jtblfilterdiv\"><i class=\"icon-search\"></i><input type=\"text\" value=\"\" onpaste=\"return false;\" onkeypress=\"return chkNumeric(event);\" id=\"txt_" + _selfid + "_" + _hcol[0] + "\" class=\"filtertext\" data-col=\"" + _hcol[1] + "\" placeholder=\"" + fn_ToTitleCase(_header[i].col) + "\" autocomplete=\"off\" /></td></div>"; /*placeholder=\"Search in"*/
                            }
                            else {
                                if (_hcol[2] === undefined) {
                                    __filterRow += "<td><div class=\"jtblfilterdiv\"><i class=\"icon-search\"></i><input type=\"text\" value=\"\" onpaste=\"return false;\" onkeypress=\"return chkNumeric(event);\" id=\"txt_" + _selfid + "_" + _hcol[0] + "\" class=\"filtertext\" data-col=\"" + _hcol[1] + "\" placeholder=\"" + fn_ToTitleCase(_header[i].col) + "\" autocomplete=\"off\" /></td></div>";
                                }
                                else {
                                    __filterRow += "<td><div class=\"jtblfilterdiv\"><i class=\"icon-search\"></i><input type=\"text\" value=\"\" onpaste=\"return false;\" onkeypress=\"return chkNumeric(event);\" id=\"txt_" + _selfid + "_" + _hcol[0] + "\" class=\"filtertext\" data-col=\"" + _hcol[1] + "$" + _hcol[2] + "\" placeholder=\"" + fn_ToTitleCase(_header[i].col) + "\" autocomplete=\"off\" /></td></div>";
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
                        _TRTH += "<th " + __width + " data-col=\"" + _hcol[1] + "\"><span class=\"" + ((_header[i].sort) ? 'ajaxTablesort' : '') + "\"  data-dir=\"asc\">" + fn_ToTitleCase(_header[i].col) + "<span class=\"" + ((_header[i].sort) ? 'jtablesort' : '') + "\"></span></span>" + __filter + "</th>";
                    }
                    else {
                        _TRTH += "<th " + __width + ">" + fn_ToTitleCase(_header[i]) + __filter + "</th>";
                    }
                    __width = "";
                    __filter = "";
                }
                if (_enableDMS) {
                    if ($('[id*=hdnDMSPermissions]').val() != undefined && $('[id*=hdnDMSPermissions]').val() != null && $('[id*=hdnDMSPermissions]').val() != '') {
                        _TRTH += "<th>Manipulate</th>";
                        __filterRow += "<td>&nbsp;</td>";
                    }
                }
                __filterRow += "</tr>";

                _TRTH += "</tr>";
                if (_enableFilter) {
                    _TRTH += __filterRow;
                }
                _TRTH += "</thead>";
                _table.append(_TRTH);
                $("#_" + _selfid + "_FreezeHeader").remove();
                _self.append("<div id=\"_" + _selfid + "_FreezeHeader\" style=\"position:absolute;z-index:2;width:100% !important;top:0px;overflow:hidden;\"><div class=\"babu\"><table border=\"0\" cellpadding=\"0\" class=\"jtblgrid\" cellspacing=\"0\" >" + _TRTH + "</table></div></div>")

                TableWidth();
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
                        if (e.keyCode != 13 &&  e.keyCode !=undefined) {

                            $(this).css("background", "");
                            return true;
                        }
                        else {
                            //$("#btnfirst").trigger("click");
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

            if (defpagesize == "" || defpagesize == 0) {
                defpagesize = 10;
                var defpagesize1 = 25;
                var defpagesize2 = 50;
                var defpagesize3 = 100;
                var defpagesize4 = 'All';
            } else {
                defpagesize = defpagesize == "" || defpagesize == 0 ? 10 : defpagesize;
                var defpagesize1 = defpagesize;
                defpagesize1 = parseFloat(defpagesize1) + parseFloat(defpagesize);
                var defpagesize2 = defpagesize1;
                defpagesize2 = parseFloat(defpagesize2) + parseFloat(defpagesize1);
                var defpagesize3 = defpagesize2;
                defpagesize3 = parseFloat(defpagesize3) + parseFloat(defpagesize2);
                var defpagesize4 = 'All';
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
            _table.append("<tfoot class=\"tabelfoot\">"
                             + "<tr class=\"jtablepaging\"><td  class=\"tabelfoottd\" colspan=\"" + _template.length + "\">"
                             + "<div style=\"padding:5px;\" class=\"jtablecpage footLdata\"><span class=\"jtablepage footLdata\">{}</span> <span class=\"footLdata\">&nbsp;to&nbsp;</span><span class=\"jtablecpagecount footLdata\">{}</span> <span class=\"footLdata\">&nbsp;from&nbsp;</span> <span class=\"jtablerecordcount footLdata\">{}</span>  <span class=\"footLdata\">&nbsp;Records</span></div>"
                             + "<div  style=\"float:right; width:auto; padding:5px;\" class=\"jtablecpage\">"
                             + FootrRow
                             + "&nbsp;Page&nbsp;"
                             + "<input type=\"text\" id=\"txt_" + _selfid + "\" value=\"" + opt.defaultWSParams.pageNum + "\" style=\"width:35px;\" />"
                             + "&nbsp;of&nbsp;<span class=\"jtabletpages\">{}</span> "
                             + "<input type=\"button\" id=\"btnfirst\" class=\"pg_first\" value=\"&lt;&lt;\" />"
                             + "<input type=\"button\" id=\"btnprev\" class=\"pg_prev\" value=\"&lt;\" />"
                             + "<input type=\"button\" id=\"btnnext\" class=\"pg_next\" value=\"&gt;\" />"
                             + "<input type=\"button\" id=\"btnlast\" class=\"pg_last\" value=\"&gt;&gt;\" />"
                             + "</div>"
            //                              + "</div>"
                             + "</td></tr></tfoot>");
            if (_enablePaging) {
                $("#tbl_" + _selfid).find(".jtablepaging").css('display', 'block');
            }
            else {
                $("#tbl_" + _selfid).find(".jtablepaging").css('display', 'none');
            }
            $("#dpl_" + _selfid).change(function () {
                opt.defaultWSParams.pageSize = this.value == 'All' ? '' : this.value;
                opt.defaultWSParams.pageNum = 1;
                /*                if (_RowNo) {
                _sno = ((parseInt(opt.defaultWSParams.pageNum) - 1) * opt.defaultWSParams.pageSize) + 1;
                }  */
                /* commented by rama when keep pressing enter in search fields Sno is not in order. so insteadof here, kept this condition before buildbody()  */

                getAJAXTableData();
                $(".ajaxTablecheckboxall" + _selfid).prop("checked", false);
            });
            _self.find("#btnfirst").click(function () {
                opt.defaultWSParams.pageNum = 1;
                /*   if (_RowNo) {
                _sno = ((parseInt(opt.defaultWSParams.pageNum) - 1) * opt.defaultWSParams.pageSize) + 1;
                }*/
                getAJAXTableData();
                $(".ajaxTablecheckboxall" + _selfid).prop("checked", false);
            });
            _self.find("#btnprev").click(function () {
                opt.defaultWSParams.pageNum = parseInt(opt.defaultWSParams.pageNum) - 1;
                /*   if (_RowNo) {
                _sno = ((parseInt(opt.defaultWSParams.pageNum) - 1) * opt.defaultWSParams.pageSize) + 1;
                }*/
                getAJAXTableData();
                $(".ajaxTablecheckboxall" + _selfid).prop("checked", false);
            });
            _self.find("#btnnext").click(function () {
                opt.defaultWSParams.pageNum = parseInt(opt.defaultWSParams.pageNum) + 1;
                /*   if (_RowNo) {
                _sno = ((parseInt(opt.defaultWSParams.pageNum) - 1) * opt.defaultWSParams.pageSize) + 1;
                }*/
                getAJAXTableData();
                $(".ajaxTablecheckboxall" + _selfid).prop("checked", false);
            });
            _self.find("#btnlast").click(function () {
                opt.defaultWSParams.pageNum = parseInt(__tpages);
                /*   if (_RowNo) {
                _sno = ((parseInt(opt.defaultWSParams.pageNum) - 1) * opt.defaultWSParams.pageSize) + 1;
                }*/
                getAJAXTableData();
                $(".ajaxTablecheckboxall" + _selfid).prop("checked", false);
            });

            $("#txt_" + _selfid).blur(function () {
                if (__tpages >= parseInt(this.value)) {
                    opt.defaultWSParams.pageNum = this.value;
                    /*   if (_RowNo) {
                    _sno = ((parseInt(opt.defaultWSParams.pageNum) - 1) * opt.defaultWSParams.pageSize) + 1;
                    }*/
                    getAJAXTableData();
                    $(".ajaxTablecheckboxall" + _selfid).prop("checked", false);
                }
                else {
                    alert("selected page number does not exists");
                }
            });

            __buildheaderfooter = true;
            if (_enableFilter) {
                $("#tbl_" + _selfid).find(".filtertext").keypress(function (e) {
                    console.log('1' + $(this).val());
                    if (e.keyCode != 13) {
                        $(this).css("background", "");
                        return true;
                    }
                    else {
                        //  $("#btnfirst").trigger("click");
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
        var upper_req=false;
        if(val.toLowerCase().includes('umr'))
        {upper_req=true;}
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
            if(upper_req){res=res.toUpperCase();}
            return res;
            //alert(res);
        }

        function buildBody() {
            /* _sno = 1; */ /*dont uncomment which will effect in series of s.No. when we filter added by Swetha Reddy*/
           $(_table).removeClass("nodata");
            _table.find("tbody").remove();
            if (_template.length > 0) {
                var _TRTD = "<tbody>";
                for (var i in __jsonData) {

                    var _dataRow = __jsonData[i];
                    var RowCreation = "<tr data-key=" + __jsonData[i][_dataKey] + " class=\"rowclickevent\" ";
                    if (typeof _rowDataBound === "function") {
                        if (_rowDataBound(RowCreation, __jsonData[i]) == undefined)
                            RowCreation = RowCreation + ">";
                        else
                            RowCreation = _rowDataBound(RowCreation, __jsonData[i]) + ">";
                    }
                    else
                        RowCreation += RowCreation + ">";
                    if (_RowNo) {
                        RowCreation += "<td>" + (parseInt(_sno)) + "</td>";
                        _sno++;
                    }

                    for (var j in _template) {
                        if (typeof _treeCallBack === "function" && j == 0) {
                            RowCreation += "<td><input type=\"button\" class='ajaxlevel_1_click'  data-key='" + __jsonData[i][_dataKey] + "' value=\"+\" /><span style='display:none !important;' class='hidespan'>" + JSON.stringify(_dataRow) + "</span></td>";
                            if (_enableCheckbox)
                                RowCreation += " <td><input type='checkbox' class='ajaxTablecheckbox" + _selfid + "'  data-key='" + __jsonData[i][_dataKey] + "'/><span style='display:none !important;' class='hidespan'>" + JSON.stringify(_dataRow) + "</span></td>";

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
                                ___val = _template[j].col.toString().split("*")[0];
                                __strlen = _dataRow[_template[j].col.toString().split("*")[0]] == undefined ? 0 : _dataRow[_template[j].col.toString().split("*")[0]].length;
                                if (__strlen > 80)
                                    ___cls = "class='tdsize'";
                            }
                        }

                        var datacol = ___val;
                        if (!datacol.toString().toLowerCase().match(/amnt/) && !datacol.toString().toLowerCase().match(/extra_col/) && !datacol.toString().toLowerCase().match(/discount/) && !datacol.toString().toLowerCase().match(/concession/) && !datacol.toString().toLowerCase().match(/rate/) && !datacol.toString().toLowerCase().match(/price/) && !datacol.toString().toLowerCase().match(/reg_fee/) && !datacol.toString().toLowerCase().match(/amt/) && !datacol.toString().toLowerCase().match(/amount/)) {
                            RowCreation += "<td style=\"text-align:left;\" data-col='" + ___val + "' " + ___cls + ">";
                        }
                        else {
                            RowCreation += "<td style=\"text-align:right;\" data-col='" + ___val + "' " + ___cls + ">";
                            _dataRow[_template[j].toString().split("*")[0]] = _dataRow[_template[j].toString().split("*")[0]] != '' && typeof _dataRow[_template[j].toString().split("*")[0]] === "number" ? parseFloat(_dataRow[_template[j].toString().split("*")[0]]) : _dataRow[_template[j].toString().split("*")[0]];
                        }



                        if (typeof _template[j] === "string") {
                            if (_dataRow[_template[j].toString().split("*")[0]] == "null" || _dataRow[_template[j].toString().split("*")[0]] == null || _dataRow[_template[j].toString().split("*")[0]] == undefined || _dataRow[_template[j].toString().split("*")[0]] == "NaN") {
                                _dataRow[_template[j].toString().split("*")[0]] = '';
                            }
                            if (_dataRow[_template[j].toString().split("*")[0]] != null) {
//                                if (__strlen > 25)
//                                    RowCreation += "<label  class='ellipsisd' title='" + _dataRow[_template[j].toString().split("*")[0]] + "'><span  class='ellipsis'>" + _dataRow[_template[j].toString().split("*")[0]] + "</span></label>";
//                                else
//                                    RowCreation += _dataRow[_template[j].toString().split("*")[0]];
                               if(_isElipse)
                               {
                                   if(_elipseLength>1 && __strlen >= _elipseLength)
                                        RowCreation += "<label  class='ellipsisd' title='" + _dataRow[_template[j].toString().split("*")[0]] + "'><span  class='ellipsis'>" + _dataRow[_template[j].toString().split("*")[0]] + "</span></label>";
                                    else if(_elipseLength==1 && __strlen > 25)
                                        RowCreation += "<label  class='ellipsisd' title='" + _dataRow[_template[j].toString().split("*")[0]] + "'><span  class='ellipsis'>" + _dataRow[_template[j].toString().split("*")[0]] + "</span></label>";
                                    else
                                        RowCreation += _dataRow[_template[j].toString().split("*")[0]];
                                }     
                                else 
                                    RowCreation += _dataRow[_template[j].toString().split("*")[0]];
                            }
                            else
                                RowCreation += '';
                        }
                        else {
                            if (_template[j].length) {
                            RowCreation += "<div style='display:flex;'>";
                                for (var k in _template[j]) {
                                    if (_template[j][k].icon != "") {
                                        /*Below Attributes (title,class) Added by Satyananda. title is for tooltip msg,class is for Icon Manage */
                                        RowCreation += "<a id=\"aimg" + k + "\" href=\"#\" title=\" " + (_template[j][k].alt) + "\" class=\"gico g" + (_template[j][k].alt).replace(/\s+/g, '') + "\" onClick=\"" + _template[j][k].click + "('" + __jsonData[i][_dataKey] + "')\"><img src=\"" + _template[j][k].icon + "\"/></a>";
                                        // _TRTD += "<a href=\"#\" onClick=\"" + _template[j][k].click + "('" + __jsonData[i][_dataKey] + "')\"><img src=\"" + _template[j][k].icon + "\"/></a>";

                                    }
                                }
                                RowCreation += "</div>";
                            }
                            else {
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
                                        /*RowCreation += "<a href=\"#\" title=\" " + (arr[j][d].alt) + "\" class=\"gico g" + (arr[j][d].alt).replace(/\s+/g, '') + "\"  onClick=\"" + arr[j][d].click + "('" + __jsonData[i][_dataKey] + "')\"><img " + tooltip + "  src=\"" + arr[j][d].icon + "\"/></a>";*//*comm by rani */
                                        /* added by rani */
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
                                        /* up to here*/
                                    }
                                }
                            }
                        }
                    }
                    _TRTD += "</tr>";
                    RowCreation += "</tr>";

                    if (typeof _RowDataBinding === "function") {

                        RowCreation = _RowDataBinding(RowCreation, __jsonData[i]) || RowCreation;
                    }
                    RowCreation = suvarnaTablerowAutoAdjustment(RowCreation);
                    _TRTD += RowCreation;
                }
                _TRTD += "</tbody>";
                _table.append(_TRTD);

                _self.find(".ajaxlevel_1_click").click(function (e) {
                    e.stopImmediatePropagation();
                    _treeCallBack(this);
                    if ($(this).val() == "+")
                        $(this).val("-");
                    else
                        $(this).val("+");
                    // setFreezeHeader();

                });
            }
            setFreezeHeader();
        }
        function suvarnaTablerowAutoAdjustment(RowCreation) {
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
            }
            else {
                $("#_" + _selfid + "_FreezeHeader").width($("#" + _selfid).width()).show();
            }
            var _inc = 0;
            $("#tbl_" + _selfid + " thead tr th").each(function (i, j) {
                _inc += $(this).outerWidth() + 0;
                $("#_" + _selfid + "_FreezeHeader table thead tr th:nth-child(" + (i + 1) + ")").css({ "width": ($(this).outerWidth() + 0) + "px" });
            });
            $(".babu").css({ width: _inc });
            $("#_" + _selfid + "_FreezeHeader table").css({ "width": "auto" });
        }

        setTimeout(function () {
            setFreezeHeader();
        }, 300);
        $(window).resize(function () {
            setFreezeHeader();
        });


        function TableAdjustmentWidth() {
            console.log('TableAdjustmentWidth');
            $("#tbl_" + _selfid + " thead").hide();
        }



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
            $(".pg_first").prop('disabled', opt.defaultWSParams.pageNum == 1);
            $(".pg_prev").prop('disabled', opt.defaultWSParams.pageNum <= 1);
            $(".pg_next").prop('disabled', opt.defaultWSParams.pageNum >= __tpages);
            $(".pg_last").prop('disabled', opt.defaultWSParams.pageNum == __tpages);

        }

        function bindEvents() {
            $("#_" + _selfid + "_FreezeHeader table").find(".ajaxTablesort").click(function () {
                $("#_" + _selfid + "_FreezeHeader table").find("thead tr th").each(function () {
                    $(this).removeClass();
                    $(this).find("span.ajaxTablesort span").removeClass().addClass("jtablesort");
                    if (_RowNo) {
                        _sno = ((parseInt(opt.defaultWSParams.pageNum) - 1) * opt.defaultWSParams.pageSize) + 1;
                    }
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






        /*auto adjustment for all columns start*/
        function ChildGridAlignments() {
            $('.childtbl tr:has(td)').each(function (i, j) {
                console.log('swehta');
                var dcol = $(this).find('data-col');
                if (dcol != "" && dcol != undefined && dcol != null) {
                    if (!datacol.toString().toLowerCase().match(/count/) && !datacol.toString().toLowerCase().match(/quantity/) && !datacol.toString().toLowerCase().match(/qty/) && !datacol.toString().toLowerCase().match(/rate/) && !datacol.toString().toLowerCase().match(/price/) && !datacol.toString().toLowerCase().match(/fee/) && !datacol.toString().toLowerCase().match(/amt/) && !datacol.toString().toLowerCase().match(/amount/)) {
                        $(this).css('text-align', 'right');
                    }
                    else {
                        $(this).css('text-align', 'left');
                    }
                }
            });
        }
        function AutoAdjustmentWidth() {
            var maxtaglen = 0;
            $("#tbl_" + _selfid + " tbody tr td").each(function () {
                var tagLen = 0, cowidth = 0; //maxtaglen=0;
                var strindex = $(this).index();
                var str = '', state = ''; var datacol = '';
                if ($(this).find('a').length != 0) {
                    str = $(this);
                    datacol = $(this).attr("data-col");
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
                //  $("#tbl_" + _selfid).css("width","100%");
                $("#tbl_" + _selfid + " > tbody > tr > td:last-child()").css({ "min-width": (parenttblWidth - tblWidth) + cellWidth });
                $("#tbl_" + _selfid + " > thead > tr > th:last-child()").css({ "min-width": (parenttblWidth - tblWidth) + cellHWidth });
            }
        }
        function SizeAdjustment(strindex, maxtaglen, state, datacol) {
            var colwidth = widthAdjGlobal(maxtaglen, state);
            if (datacol != "" && datacol != undefined && datacol != null) {
                if (!datacol.toString().toLowerCase().match(/date/) && !datacol.toString().toLowerCase().match(/dt/)) {

                }
                else {
                    $("#tbl_" + _selfid + " tr td:nth-child(" + (strindex + 1) + ")").each(function () {
                        var str = $(this).text().trim();
                        if (str != '' && str != undefined && str != null) {
                            //                        str=$(this).text().trim().replace('AM','');
                            //                        str = $(this).text().trim().replace('PM','');
                            //                        var dtfrmt = $('[id*=hdnDateFormat]').val();
                            //                        var timefrmt = $('[id*=hdnTimeFormat]').val();
                            //                        if(dtfrmt == '' || dtfrmt == null || dtfrmt == undefined){ dtfrmt ="dd-MMM-yyyy";}
                            //                        if(timefrmt == '' || timefrmt == null || timefrmt == undefined){ timefrmt ="HH:mm:ss tt";}
                            //                        var dat= $(this).text().split(' ')[0];var tim= $(this).text().split(' ')[1];
                            //                        var txt = new Date(str).format(dtfrmt) + " " + new Date(str).format(timefrmt);
                            //                        $(this).text(txt);
                        }
                    });
                }
                if (!datacol.toString().toLowerCase().match(/rate/) && !datacol.toString().toLowerCase().match(/price/) && !datacol.toString().toLowerCase().match(/fee/) && !datacol.toString().toLowerCase().match(/amt/) && !datacol.toString().toLowerCase().match(/amount/)) {
                    $("#tbl_" + _selfid + " tr td:nth-child(" + (strindex + 1) + "), #tbl_" + _selfid + " tr th:nth-child(" + (strindex + 1) + ")").css('text-align', 'left');
                }
                else {
                    $("#tbl_" + _selfid + " tr td:nth-child(" + (strindex + 1) + "), #tbl_" + _selfid + " tr th:nth-child(" + (strindex + 1) + ")").css('text-align', 'right');
                }
            }
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
        /*auto adjustment for all columns end*/



    }
} (jQuery));

//function getScrollBarWidth() {
//    var inner = document.createElement("p");
//    //outer.style.visibility = "hidden";
//    inner.style.width = "100%";
//    inner.style.height = "200px";
//    //alert(getScrollBarWidth());
//    var outer = document.createElement('div');
//    outer.className = "gridheght";
//    outer.style.position = "absolute";
//    outer.style.top = "0px";
//    outer.style.left = "0px";
//    outer.style.visibility = "hidden";

//    outer.style.width = "200px";
//    outer.style.height = "150px";
//    outer.style.overflow = "hidden";
//    outer.appendChild(inner);

//    document.body.appendChild(outer);

//    var w1 = inner.offsetWidth;
//    outer.style.overflow = 'scroll';
//    var w2 = inner.offsetWidth;
//    if (w1 == w2) w2 = outer.clientWidth;
//    document.body.removeChild(outer);
//    return (w1 - w2);
//}


function chkNumeric(evt) {
    evt = (evt) ? evt : window.event
    var charCode = (evt.which) ? evt.which : evt.keyCode
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        status = "This field only accepts numbers!"
        return false
    }
    status = "";
    return true;
}
//function ExportParams(Params)
//{
//var TotParams='';
//$.each(Object.keys(Params),function(i,j)
//{
//if(TotParams=='')
//{
//TotParams+=j+':'+Params[j];
//}
//else
//{
//TotParams+='&'+j+':'+Params[j];
//}
//});
//$('[id*=hdnExportParams]').val(TotParams);
//}