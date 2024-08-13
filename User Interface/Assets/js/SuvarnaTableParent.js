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
        var _enableSorting = opt.enableSorting || false;
        var _enablePaging = opt.enablePaging || true;
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
        var _rowDataBound = opt.rowDataBound || {};
        var _RowDataBinding = opt.RowDataBinding || {};
        opt.defaultWSParams.pageSize = opt.pageSize || 10;
        opt.defaultWSParams.pageNum = opt.pageNum || 1;
        var _advSrch = opt.advSrch || '';
        var _RowNo = opt.RowNo || false;
        var _sno = opt.sno || 1;
        var _tableTemplate = opt.tableTemplate || false;
        var _enableDMS = opt.enableDMS || false;
        
        if ($('[id*=hdnDMSPermissions]').val() != '[]' && $('[id*=hdnDMSPermissions]').val() != undefined && $('[id*=hdnDMSPermissions]').val() != null && $('[id*=hdnDMSPermissions]').val() != '' && _tableTemplate == false) {
            _enableDMS = true;
        }
        //var _enablePaging    = opt.enablePaging || false; 
        /* data object details*/
        /* private scope variable */
        var __eventsSetup = false;
        var __buildheaderfooter = false;
        var __availPages = 0;
        var __size, __tpages;
        var __jsonData = [];
        var __jsonDataCount = 0;
        var __AJAX = true;

        if (_wsPath != "") {
            _self.html("<table id=\"tbl_" + _selfid + "\" border=\"0\" cellpadding=\"0\" class=\"grid\" cellspacing=\"0\" width=\"100%\"></table>");
            _table = _self.find("table");
            getAJAXTableData();
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
            GetAsync(
                     _wsPath
                    , _defaultWSParams
                    , function (JData) {
                        
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
                            }

                        }
                        else {
                            _table.find("tbody").remove();
                            var _TRTD = "<tbody><tr class=\"norecord\"><td style=text-align:left;><h2 class=\"error\">" + _noData + "</h2></td></tr></tbody>";
                            _table.append(_TRTD);
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
            } catch (e) { }
            $(".filtertext").each(function (i, j) {
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
            _defaultWSParams.pageNum = 1;
            _sno = 1;

            GetAsync(
                     _wsFilterPath
                    , _defaultWSParams
                    , function (JData) {
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
                    _selectedRows.push($(this).data("key")); //$(this).data("key")
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
                    opt.checkboxClick(getObject($(this).data("key")));
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
                    __filterRow = "<td style=\"width:30px\"></td>"
                    _TRTH += "<th name='Sno' style=\"width:30px\">S.No.</th>";
                }

              //  _TRTH += "<th  name='check' style=\"width:5%\"></th>"; __filterRow += "<td>&nbsp;</td>";
                if (_enableCheckbox) {
                    _TRTH += "<th name='check1' style=\"width:5%\"><input type='checkbox' class='ajaxTablecheckboxall" + _selfid + "' /></th>";
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
                        _TRTH += "<th  name='cols" + i + "' " + __width + " data-col=\"" + _hcol[1] + "\"><span class=\"" + ((_header[i].sort) ? 'ajaxTablesort' : '') + "\"  data-dir=\"asc\">" + _header[i].col + "<span class=\"" + ((_header[i].sort) ? 'jtablesort' : '') + "\"></span></span>" + __filter + "</th>";
                    }
                    else {
                        _TRTH += "<th  name='cols" + i + "' " + __width + ">" + _header[i] + __filter + "</th>";
                    }
                    __width = "";
                    __filter = "";
                }
                if (_enableDMS) {
                    
                    if ($('[id*=hdnDMSPermissions]').val() != undefined && $('[id*=hdnDMSPermissions]').val() != null && $('[id*=hdnDMSPermissions]').val() != '') {
                        _TRTH += "<th name='dms0' class='dmscol'>Manipulate</th>";
                        __filterRow += "<td>&nbsp;</td>";
                    }
                }
                __filterRow += "</tr>";

                _TRTH += "</tr>";
                _TRTH += __filterRow + "</thead>";
                _table.append(_TRTH);
                //  _self.append("<div id=\"_" + _selfid + "_FreezeHeader\" style=\"position:absolute;z-index:2;top:0px;width:100%;display:none;\"><table border=\"0\" cellpadding=\"0\" class=\"grid\" cellspacing=\"0\" >" + _TRTH + "</table></div>")

            }

            _table.append("<tfoot class=\"tabelfoot\">"
                             + "<tr class=\"jtablepaging\"><td  class=\"tabelfoottd\" colspan=\"" + _template.length + "\">"
            //                              + "<div class=\"tabelfoot\">"
                             + "<div style=\"padding:5px;\" class=\"jtablecpage footLdata\"><span class=\"jtablepage footLdata\">{}</span> <span class=\"footLdata\">&nbsp;to&nbsp;</span><span class=\"jtablecpagecount footLdata\">{}</span> <span class=\"footLdata\">&nbsp;from&nbsp;</span> <span class=\"jtablerecordcount footLdata\">{}</span>  <span class=\"footLdata\">&nbsp;Records</span></div>"
                             + "<div  style=\"float:right; width:auto; padding:5px;\" class=\"jtablecpage\">Show Rows&nbsp;"
                             + "<select id=\"dpl_" + _selfid + "\" style=\"width:56px;\">"
                             + "<option value=\"10\">10</option>"
                             + "<option value=\"25\">25</option>"
                             + "<option value=\"50\">50</option>"
                             + "<option value=\"100\">100</option>"
                             + "</select>"
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

            $("#dpl_" + _selfid).change(function () {
                opt.defaultWSParams.pageSize = this.value;
                opt.defaultWSParams.pageNum = 1;
                if (_RowNo) {
                    _sno = ((parseInt(opt.defaultWSParams.pageNum) - 1) * opt.defaultWSParams.pageSize) + 1;
                }
                getAJAXTableData();
                $(".ajaxTablecheckboxall" + _selfid).prop("checked", false);
            });
            _self.find("#btnfirst").click(function () {
                opt.defaultWSParams.pageNum = 1;
                if (_RowNo) {
                    _sno = ((parseInt(opt.defaultWSParams.pageNum) - 1) * opt.defaultWSParams.pageSize) + 1;
                }
                getAJAXTableData();
                $(".ajaxTablecheckboxall" + _selfid).prop("checked", false);
            });
            _self.find("#btnprev").click(function () {
                opt.defaultWSParams.pageNum = parseInt(opt.defaultWSParams.pageNum) - 1;
                if (_RowNo) {
                    _sno = ((parseInt(opt.defaultWSParams.pageNum) - 1) * opt.defaultWSParams.pageSize) + 1;
                }
                getAJAXTableData();
                $(".ajaxTablecheckboxall" + _selfid).prop("checked", false);
            });
            _self.find("#btnnext").click(function () {
                opt.defaultWSParams.pageNum = parseInt(opt.defaultWSParams.pageNum) + 1;
                if (_RowNo) {
                    _sno = ((parseInt(opt.defaultWSParams.pageNum) - 1) * opt.defaultWSParams.pageSize) + 1;
                }
                getAJAXTableData();
                $(".ajaxTablecheckboxall" + _selfid).prop("checked", false);
            });
            _self.find("#btnlast").click(function () {
                opt.defaultWSParams.pageNum = parseInt(__tpages);
                if (_RowNo) {
                    _sno = ((parseInt(opt.defaultWSParams.pageNum) - 1) * opt.defaultWSParams.pageSize) + 1;
                }
                getAJAXTableData();
                $(".ajaxTablecheckboxall" + _selfid).prop("checked", false);
            });

            $("#txt_" + _selfid).blur(function () {
                if (__tpages >= parseInt(this.value)) {
                    opt.defaultWSParams.pageNum = this.value;
                    if (_RowNo) {
                        _sno = ((parseInt(opt.defaultWSParams.pageNum) - 1) * opt.defaultWSParams.pageSize) + 1;
                    }
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
        }


        function buildBody() {

            _table.find("tbody").remove();
            if (_template.length > 0) {
                var _TRTD = "<tbody>";
                for (var i in __jsonData) {

                    var _dataRow = __jsonData[i];
                    //_TRTD += "<tr data-key=" + __jsonData[i][_dataKey] + ">";
                    // var RowCreation = "<tr data-key=" + __jsonData[i][_dataKey] + ">";
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
                        RowCreation += "<td name='sno'>" + (parseInt(_sno)) + "</td>";
                        _sno++;
                    }

                    for (var j in _template) {
                        if (typeof _treeCallBack === "function" && j == 0) {
                            //                            RowCreation += "<td name='check'><input type=\"button\" class='ajaxlevel_1_click'  data-key='" + __jsonData[i][_dataKey] + "' value=\"+\" /></td>";



                            RowCreation += "<td name='check'><input type=\"button\" class='ajaxlevel_1_click'  data-key='" + __jsonData[i][_dataKey] + "' value=\"+\" /><span style='display:none;'>" + JSON.stringify(_dataRow) + "</span></td>";
                            if (_enableCheckbox)
                                RowCreation += " <td name='check1'><input type='checkbox' class='ajaxTablecheckbox" + _selfid + "'  data-key='" + __jsonData[i][_dataKey] + "'/><span style='display:none;'>" + JSON.stringify(_dataRow) + "</span></td>";
                        }
                        //_TRTD += "<td name='cols" + j + "'>";

                        RowCreation += "<td name='cols" + j + "'>";
                        if (typeof _template[j] === "string") {
                            if (_dataRow[_template[j].toString().split("*")[0]] != null)
                            // _TRTD += _dataRow[_template[j].toString().split("*")[0]];
                                RowCreation += _dataRow[_template[j].toString().split("*")[0]];
                            else
                            //  _TRTD += '';
                                RowCreation += '';
                        }
                        else {
                            if (_template[j].length) {
                                for (var k in _template[j]) {
                                    if (_template[j][k].icon != "") {
                                        /*Below Attributes (title,class) Added by Satyananda. title is for tooltip msg,class is for Icon Manage */
                                        RowCreation += "<a id=\"aimg" + k + "\" href=\"#\" title=\" " + (_template[j][k].alt) + "\" class=\"gico g" + (_template[j][k].alt).replace(/\s+/g, '') + "\" onClick=\"" + _template[j][k].click + "('" + __jsonData[i][_dataKey] + "')\"><img src=\"" + _template[j][k].icon + "\"/></a>";
                                        // _TRTD += "<a href=\"#\" onClick=\"" + _template[j][k].click + "('" + __jsonData[i][_dataKey] + "')\"><img src=\"" + _template[j][k].icon + "\"/></a>";

                                    }
                                }
                            }
                            else {
                                if (_dataRow[_template[j].col.toString().split("*")[0]] == "null" || _dataRow[_template[j].col.toString().split("*")[0]] == "undefined") {
                                    _dataRow[_template[j].col.toString().split("*")[0]] = '';
                                }
                                var _title = (_template[j].title) ? "title=\"" + _dataRow[_template[j].col.toString().split("*")[0]] + "\"" : "";
                                RowCreation += "<label  class='ellipsisd' " + _title + "><span  class='ellipsis'>" + _dataRow[_template[j].col.toString().split("*")[0]] + "</span></label>";
                            }
                        }
                        // _TRTD += "</td>";
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
                                        RowCreation += "<a href=\"#\" title=\" " + (arr[j][d].alt) + "\" class=\"gico g" + (arr[j][d].alt).replace(/\s+/g, '') + "\"  onClick=\"" + arr[j][d].click + "('" + __jsonData[i][_dataKey] + "')\"><img " + tooltip + "  src=\"" + arr[j][d].icon + "\"/></a>";
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
                });



            }


            setFreezeHeader();
        }





        function setFreezeHeader() {
            $("#tbl_" + _selfid + " thead tr th").each(function (i, j) {
                /*$("#_"+_selfid+"_FreezeHeader th:eq("+i+")").css("width",Math.ceil(100*$(this).width()/$("#tbl_"+_selfid).width())+"%");                   */
                $("#_" + _selfid + "_FreezeHeader th:eq(" + i + ")").css("width", $(this).width() + "px");
            });
            $("#_" + _selfid + "_FreezeHeader").width($("#tbl_" + _selfid).width()).show();
            $("#_" + _selfid + "_FreezeHeader table").width($("#tbl_" + _selfid).width()).show();
        }

        $(window).resize(function () {
            setFreezeHeader();
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
                buildBody();

                $(this).data("dir", (_dir == "asc") ? "desc" : "asc");
                $(this).find("span").removeClass().addClass("jtablesort" + _dir);

            });
            if (typeof _rowClick === "function") {
                $(".rowclickevent").click(function () {
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
    }
} (jQuery));

