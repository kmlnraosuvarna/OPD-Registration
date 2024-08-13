


(function ($) {
    $.fn.lookupControl = function (cfunction, options) {
        var _self = $(this);
        var _b_close = _self.find(".cbutton");
        var _b_advsearch = _self.find(".lk_header1 .lk_adv_search");
        var _b_findsearch = _self.find(".lk_body .btn_find_search");
        var _b_search = _self.find(".lk_body .sbtn");
        var _d_pagesize = _self.find(".lk_footer .pg_page_size");
        var _b_pagenumber = _self.find(".lk_footer .pg_page_number");
        var _totalpages = _self.find(".lk_footer .span_total_pages");
        var _totalrecords = _self.find('.lk_footer .span_total_records');
        var _d_columns = _self.find(".dpl_colmns");
        var _first = _self.find(".lk_footer .pg_first");
        var _prev = _self.find(".lk_footer .pg_prev");
        var _next = _self.find(".lk_footer .pg_next");
        var _last = _self.find(".lk_footer .pg_last");
        var _autolk = _self.find(".lk_txt_search");
        var _autolkoptions = _self.find(".lk_search .lk_autooptions");
        var _optionslist = options.lookupoptions;
        var _optionselectposition = 0;
        var defaultcount = 0; /* by default lookup should bind or not based on this*/
        var count = 0;
        var _timeout;

        var _options = options;
        var _AJAXData = null;
        var _auto_lk_txt = _options.lookuptextboxid;
        var _auto_lk_options = $(_options.lookuptextboxoptions);
        var lk_val = _options.lookupval;
        var lk_Text = _options.lookupText;
        /* Bind Dropdown List Control with dlist */
        var _dplsource = eval(_self.data("dlist"));
        var _dplColl = options.dataKey.split(',');
        var status = true;

        //        _self.find(".lk_tbl_body thead tr").append("<th></th>")
        for (var arrItem in _dplsource) {

            for (var objItem in _dplsource[arrItem]) {
                var objItemcol = _dplsource[arrItem][objItem].indexOf('-') != '-1' ? _dplsource[arrItem][objItem].split('-')[0] : _dplsource[arrItem][objItem];
                var datatype = _dplsource[arrItem][objItem].indexOf('-') != '-1' ? _dplsource[arrItem][objItem].split('-')[1] : '';
                _self.find(".lk_tbl_body thead tr").append("<th>" + objItemcol + "</th>")
                _d_columns.append($('<option></option>').val(objItem + '$' + datatype).html(objItemcol));

                _self.find(".dpl_sortcolmns").append($('<option></option>').val(objItem + '$' + datatype).html(objItemcol));

                if (datatype == "I" && objItem == "MOBILE_NO")
                    _self.find(".lk_header1 table tbody tr td .last").before('<div><span title=' + objItemcol + '>' + objItemcol + '</span><input name=' + objItem + ' id=' + objItem + ' type="text" class="rSearch" data-dtype="' + datatype + '" onkeypress = "return numeralsOnly(event);" maxLength = "10" placeholder="' + objItemcol + '" /></div>');
                else if (datatype == "I")
                    _self.find(".lk_header1 table tbody tr td .last").before('<div><span title=' + objItemcol + '>' + objItemcol + '</span><input name=' + objItem + ' id=' + objItem + ' type="text" class="rSearch" data-dtype="' + datatype + '" onkeypress = "return numeralsOnly(event);" maxLength = "30" placeholder="' + objItemcol + '" /></div>');
                else if (datatype == "A")
                    _self.find(".lk_header1 table tbody tr td .last").before('<div><span title=' + objItemcol + '>' + objItemcol + '</span><input name=' + objItem + ' id=' + objItem + ' type="text" class="rSearch" data-dtype="' + datatype + '" onkeypress="return NumCharsSpaceWithHiphen(event);"  maxLength = "30" placeholder="' + objItemcol + '" /></div>');
                else if (datatype == "S")
                    _self.find(".lk_header1 table tbody tr td .last").before('<div><span title=' + objItemcol + '>' + objItemcol + '</span><input name=' + objItem + ' id=' + objItem + ' type="text" class="rSearch" data-dtype="' + datatype + '" onkeypress=" return OnlyCharecters(event);"  maxLength = "30" placeholder="' + objItemcol + '" /></div>');
                else if (datatype == "D")
                    _self.find(".lk_header1 table tbody tr td .last").before('<div><span title=' + objItemcol + '>' + objItemcol + '</span><input name=' + objItem + ' id=' + objItem + ' type="text" class="rSearch" data-dtype="' + datatype + '" placeholder="YYYY-MM-DD" maxLength = "11" /></div>');
                else if (objItem == "DOB")
                    _self.find(".lk_header1 table tbody tr td .last").before('<div><span title=' + objItemcol + '>' + objItemcol + '</span><input name=' + objItem + ' id=' + objItem + ' type="text" class="rSearch" data-dtype="' + datatype + '" placeholder="DD-MMM-YYYY" maxLength = "11" /></div>');
                else
                    _self.find(".lk_header1 table tbody tr td .last").before('<div><span title=' + objItemcol + '>' + objItemcol + '</span><input name=' + objItem + ' id=' + objItem + ' type="text" class="rSearch" data-dtype="' + datatype + '" maxLength = "30" placeholder="' + objItemcol + '" /></div>');


                _d_columns.change(function () {
                    _self.find(".lk_txt_search").val('');
                    _self.find(".lk_Text").val('');
                    if ($(this).val().indexOf('$') != -1) {
                        if ($(this).parent().parent() != undefined) {
                            var _ftext = $(this).parent().parent().find('input[type=text]');
                            if ($(this).val().split('$')[1] == 'I') {
                                _ftext.attr('onkeypress', "return numeralsOnly(event);");

                                if ($(this).val().split('$')[0] == "MOBILE_NO") {
                                    _ftext.attr('maxlength', "10");
                                }
                                else {
                                    _ftext.attr('maxlength', "30");
                                }
                                _ftext.attr('placeholder', "Numerics")
                            }
                            else if ($(this).val().split('$')[1] == "A") {
                                _ftext.attr('onkeypress', "return NumCharsSpaceWithHiphen(event);");
                                _ftext.attr('maxlength', "30");
                                _ftext.attr('placeholder', $(this).find('option:selected').text());
                            }
                            else if ($(this).val().split('$')[1] == "S") {
                                _ftext.attr('onkeypress', "return OnlyCharecters(event);");
                                _ftext.attr('maxlength', "30");
                                _ftext.attr('placeholder', $(this).find('option:selected').text());
                            }
                            else if ($(this).val().split('$')[1] == "D") {
                                _ftext.attr('onkeypress', "");
                                _ftext.attr('placeholder', "YYYY-MM-DD");
                                _ftext.attr('maxlength', "11");
                            }
                            else {
                                /*_ftext.attr('onkeypress', "return NumCharsSpaceWithHiphen(event);");*/
                                _ftext.attr('maxlength', "30");
                                _ftext.attr('placeholder', $(this).find('option:selected').text());
                            }
                        }
                    }
                });
            }
        }
        function resetEvents() {
        }



        var ____height = 0;
        var ____checkAJAXTimer;
        _auto_lk_txt.blur(function () {
            if (_options.onBlurReqired == "True") {
                ____checkAJAXTimer = setTimeout(function () {
                    if (lk_Text.val() == "") { _auto_lk_txt.val(''); }
                    if (document.activeElement.className !== "ajaxoptions" && _auto_lk_txt.val() !== "" && lk_Text.val() !== _auto_lk_txt.val()) {
                        $(".stoast").toastText("warning", "Invalid Entry,Please select value properly", 5, 2);
                        _auto_lk_txt.val("");
                        lk_Text.val("");
                        lk_val.val("");
                    }
                }, 100);
            }
        });
        _auto_lk_txt.focus(function () {
            clearTimeout(____checkAJAXTimer);
        });



        _auto_lk_txt.keydown(function (event) {


            if (event.keyCode === 113)
                $(this).removeClass("autohightlight");

            if (event.keyCode === 9) {
                $(".lk_auto_options").hide();
                _auto_lk_options.hide();
                LookUpValidation(_auto_lk_txt, lk_val);
            }

            var _licount = _auto_lk_options.find("ul li").size();
            var _displayData;
            var _cobj;

            if (event.keyCode === 13) {
                ____height = 0; $(".lookup-loader").hide();
                _auto_lk_options.find("ul li").each(function (i, j) {
                    if ($(this).attr('class') === "autohightlight") {

                        _displayData = $(this).find("a").html();
                        var tb = $.parseJSON(eval($.trim($(this).find('span').html())));
                        _auto_lk_txt.val(_displayData);
                        lk_Text.val(_displayData);
                        lk_val.val(tb.Value);
                        var _cobj = {};
                        _cobj._lktext = _displayData;
                        _cobj.ID = tb.Value;
                        _cobj.RESULT = tb;
                        cfunction(_cobj);
                        $(".lookup-loader").hide();
                    }
                });
                _auto_lk_options.hide();
                return false;
            }

            if (event.keyCode === 40) {
                $(this).removeClass("autohightlight");

                if (_optionselectposition < _licount - 1) {
                    _optionselectposition++;
                }
                var Scroll = false;
                _auto_lk_options.find("ul li").each(function (i, j) {
                    $(this).removeClass("autohightlight");
                    var _auto_lk_options_div = $(this).parent().parent();
                    if (_optionselectposition === 0 && i === 0) {
                        ____height = 0;
                    }
                    if (_optionselectposition > _licount) {
                        Scroll = false;
                    }
                    if (_optionselectposition == i) {
                        ____height += $(this).height();
                        if (_auto_lk_options_div.height() <= ____height)
                            Scroll = true;
                        $(this).addClass("autohightlight");
                    }
                });
                if (_optionselectposition > 1)
                    _auto_lk_options.scrollTop(_auto_lk_options.scrollTop() + 20);
                if (_displayData == undefined) { $(this).val(_auto_lk_txt.val()); } else {
                    $(this).val(_displayData);
                }
            }
            else if (event.keyCode === 38) {
                if (_optionselectposition <= _licount && _optionselectposition >= 0) {
                    _optionselectposition--;
                }
                if (_optionselectposition != -1 && _optionselectposition <= _licount) {
                    _auto_lk_options.find("ul li").each(function (i, j) {
                        $(this).removeClass("autohightlight");
                        var _auto_lk_options_div = $(this).parent().parent();
                        if (_optionselectposition > _licount) {
                            Scroll = false;
                        }
                        if (_optionselectposition == i) {
                            ____height -= $(this).height();

                            if ((_auto_lk_options_div.height()) >= (____height - 50))
                                Scroll = true;
                            $(this).addClass("autohightlight");
                        }
                    });
                    _auto_lk_options.scrollTop(_auto_lk_options.scrollTop() - 20);
                    if (_displayData == undefined) { $(this).val(_auto_lk_txt.val()); } else {
                        $(this).val(_displayData);
                    }
                }
            }
        });
        _auto_lk_txt.keypress(function (event) {
            lk_Text.val('');
        });
        var __event = '';
        _auto_lk_txt.keyup(function (event) {
            __event = event.currentTarget.id;
            if (event.keyCode === 13 || event.keyCode === 40 || event.keyCode === 38 || event.keyCode === 37 || event.keyCode === 39) {
                return false;
            }
            clearTimeout(_timeout);
            if (event.keyCode === 113) {
                $("#Lcmask").height($(document).height());
                $("body").append(_self)
                _self.show();
                _d_columns.trigger('change');
                var __opt = _d_columns.find("option");
                var __hdnCnameVal = $('[id$=hdnDashBoardcName]');
                for (var i = 0; i < __opt.length; i++) {
                    if (__opt[i].value.toUpperCase() === __hdnCnameVal.val().toUpperCase()) {
                        __opt[i].selected = true;
                        _self.find(".lk_body input").each(function (i, j) {
                            $(j).attr('disabled', 'true');
                        });
                    }
                }
                _self.trigger("LoadAJAXData");
            }
            var prefixlength;
            if (_options.IsPrefixLenReqired == "True")
                prefixlength = $('[id$=hdnprefixlength]').val();
            else
                prefixlength = 2;
            if ($(this).val().length > prefixlength) {
                _timeout = setTimeout(function () {
                    var _prams = new Object();
                    _prams.prefixText = '%' + _auto_lk_txt.val();
                    _prams.contextKey = _options.contextKey;
                    $.ajax({
                        type: "POST",
                        url: _options.autoSuggest,
                        dataType: "json",
                        data: JSON.stringify(_prams),
                        contentType: "application/json; charset=utf-8",
                        error: function (jqXHR, textStatus, errorThrown) {
                        },
                        success: function (jdata) {
                            if (jdata.d.length > 0) {
                                _optionselectposition = -1;
                                var _ul = "<ul>";
                                $(jdata.d).each(function (i, j) {
                                    _ul += "<li><a href='#' class='ajaxoptions'>" + $.parseJSON(j).First + "</a><span style=display:none;>'" + $.parseJSON(j).Second + "'</span></li>";
                                });
                                _ul += "</ul>";
                                _auto_lk_options.empty().html(_ul).css({ "top": _auto_lk_txt.outerHeight() + "px", "min-width": _auto_lk_txt.outerWidth() + "px" }).show();
                                LookUpset(__event);
                                _auto_lk_options.find("ul li").click(function (event) {
                                    $(".lookup-loader").hide();
                                    var tb = $.parseJSON(eval($.trim($(this).find('a').next("span").html())));
                                    _auto_lk_txt.val($(this).find('a').html());
                                    lk_Text.val($(this).find('a').html());
                                    lk_val.val(tb.Value);
                                    _auto_lk_options.hide();
                                    var _cobj = {};
                                    _cobj._lktext = $(this).find('a').html();
                                    _cobj.ID = tb.Value;
                                    _cobj.RESULT = tb;
                                    LookUpValidation(_auto_lk_txt, lk_val);
                                    cfunction(_cobj);
                                    $(".lookup-loader").hide();
                                    return false;
                                });
                                _auto_lk_options.find("ul li a").click(function (event) {
                                    $(".lookup-loader").hide();
                                    var tb = $.parseJSON(eval($.trim($(this).next("span").html())));
                                    _auto_lk_txt.val($(this).html());
                                    lk_Text.val($(this).html());
                                    lk_val.val(tb.Value);
                                    _auto_lk_options.hide();
                                    var _cobj = {};
                                    _cobj._lktext = $(this).html();
                                    _cobj.ID = tb.Value;
                                    _cobj.RESULT = tb;
                                    LookUpValidation(_auto_lk_txt, lk_val);
                                    cfunction(_cobj);
                                    $(".lookup-loader").hide();
                                    return false;
                                });
                            }
                            else
                                $(".lk_auto_options").hide();
                        }
                    });
                }, 100);
            }
        });
        _auto_lk_options.click(function (event) {
            event.stopPropagation();
        });
        if (window.htmlClick == undefined) {
            $("html").click(function (event) {
                $(".lk_autooptions").hide();
            });
            window.htmlClick = true;
        }
        $("html").click(function (e) {
            _auto_lk_options.hide();
        });
        _b_close.click(function () {
            _self.hide();
        });
        _autolk.keydown(function (e) {
            clearTimeout(_timeout);
            if (e.keyCode === 13) {
                _self.find(".lk_search").trigger("click");
                status = false; count++; defaultcount++;
                return false;
            }
            //            if ($(this).val().length > 2 && e.keyCode === 13 & status == true) {
            //                _self.find(".lk_search").trigger("click");
            //                status = false; count++;
            //                return false;
            //            }
            //            else if (e.altKey) {

            //                if (e.keyCode === 39) {//right arrow

            //                    if (parseInt(_b_pagenumber.val()) < parseInt(_totalpages.html())) {
            //                        _b_pagenumber.val(parseInt(_b_pagenumber.val()) + 1);
            //                        _self.trigger("LoadAJAXData");
            //                        e.stopPropagation();
            //                    }
            //                }
            //                if (e.keyCode === 37) {//left arrow
            //                    
            //                    if (parseInt(_b_pagenumber.val()) > 1) {
            //                        _b_pagenumber.val(parseInt(_b_pagenumber.val()) - 1);
            //                        _self.trigger("LoadAJAXData");
            //                        e.stopPropagation();
            //                    }
            //                }
            //            }
        });
        _autolkoptions.click(function (event) {
            event.stopPropagation();
        });

        $(document).ready(function () {
            $('.lk_header1 table tbody tr td input[type=text]').val('');
            $("#Lcmask").height($(document).height());
            _self.show();
            _d_columns.trigger('change');
            var __opt = _d_columns.find("option");
            var __hdnCnameVal = $('[id$=hdnDashBoardcName]');
            for (var i = 0; i < __opt.length; i++) {
                if (__opt[i].value.toUpperCase() === __hdnCnameVal.val().toUpperCase()) {
                    __opt[i].selected = true;
                    _self.find(".lk_body input").each(function (i, j) {
                        $(j).attr('disabled', 'true');
                    });
                }
            }
            _self.trigger("LoadAJAXData");
        });
        var tbox_state = "";
        _self.find(".rSearch").focus(function () {
            tbox_state = $(this).val();
        });
        _self.find(".rSearch").blur(function () {
            if (tbox_state != $(this).val()) {
                _self.find(".resetSearch").val("1");
            }
        });

        _self.find(".rSearch").keydown(function (e) {
            if (e.keyCode === 13) {
                _b_pagenumber.val('1'); defaultcount++;
                _self.trigger("LoadAJAXData");
            }
        });

        _next.click(function () {
            _b_pagenumber.val(parseInt(_b_pagenumber.val()) + 1); defaultcount++;
            _self.trigger("LoadAJAXData");
        });

        _prev.click(function () {
            _b_pagenumber.val(parseInt(_b_pagenumber.val()) - 1 < 1 ? 1 : parseInt(_b_pagenumber.val()) - 1); defaultcount++;
            _self.trigger("LoadAJAXData");
        });

        _first.click(function () {
            _b_pagenumber.val('1'); defaultcount++;
            _self.trigger("LoadAJAXData");
        });

        _last.click(function () {
            _b_pagenumber.val(_totalpages.html()); defaultcount++;
            _self.trigger("LoadAJAXData");
        });

        _self.find(".lk_adv_search").click(function () {
            _b_pagenumber.val('1'); defaultcount++;
            _self.trigger("LoadAJAXData");
        });
        _self.find(".lk_search").click(function (e) {
            if ($(this).attr("type") != "text") {
                _b_pagenumber.val('1'); defaultcount++;
                _self.trigger("LoadAJAXData");
            }
        });

        _b_search.click(function () {
            _b_pagenumber.val('1');
            _self.find(".lk_search").val($(this).val()); defaultcount++;
            _self.trigger("LoadAJAXData");
        });

        _d_pagesize.change(function () {
            _b_pagenumber.val('1'); defaultcount++;
            _self.trigger("LoadAJAXData");
        });
        _b_pagenumber.blur(function () {
            if (_b_pagenumber.val() == '' || _b_pagenumber.val() == '0') { _b_pagenumber.val('1'); } defaultcount++;
            _self.trigger("LoadAJAXData");
        });
        _b_pagenumber.keypress(function (e) {
            if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {/*display error message*//*$("#errmsg").html("*").show().fadeOut("slow");*/
                return false;
            }
        });

        _self.on("LoadAJAXData", function () {
            _autolk.focus(); status = true;
            var ObjParams = {};
            var _advobj = "";
            var _advCount = 0, _advChar = '';            
            _self.find(".lk_header1 input[type=text]").each(function (i, j) {
                if ($(_self.find(".lk_table_find input[type=radio]")[1]).is(':checked')) {
                    _advChar = "(";
                }
                if ($(j).val() != 'Adv Search' && $(j).val() != "" && $(j).val() != undefined && $(j).val() != null) {
                    if (_advCount == 0) {
                        if ($(_self.find(".lk_table_find input[type=radio]")[0]).is(':checked')) {
                            if ($(j).attr("id") == "DOB") {
                                _advobj += _advChar + $(j).attr("id") + " = CAST('" + ($(j).val() == 'Adv Search' ? " " : $(j).val()) + "' AS DATE)";
                            }
                            else if ($(j).attr("id") == "Gender") {
                                _advobj += _advChar + $(j).attr("id") + " LIKE '%" + ($(j).val() == 'Adv Search' ? " " : $(j).val()) + "' ";
                            }
                            else {
                                _advobj += _advChar + $(j).attr("id") + " LIKE '%" + ($(j).val() == 'Adv Search' ? " " : $(j).val()) + "%' ";
                            }
                        }
                        else if ($(_self.find(".lk_table_find input[type=radio]")[2]).is(':checked')) {
                            _advobj += _advChar + $(j).attr("id") + " LIKE '" + ($(j).val() == 'Adv Search' ? " " : $(j).val()) + "%' ";
                        }
                        else if ($(_self.find(".lk_table_find input[type=radio]")[3]).is(':checked')) {
                            _advobj += _advChar + $(j).attr("id") + " LIKE '%" + ($(j).val() == 'Adv Search' ? " " : $(j).val()) + "%' ";
                        }
                        else {
                            _advobj += _advChar + $(j).attr("id") + " LIKE '" + ($(j).val() == 'Adv Search' ? " " : $(j).val()) + "' ";
                        }
                        if ($(_self.find(".lk_table_find input[type=radio]")[1]).is(':checked')) {
                            _advobj += ' OR SOUNDEX(' + $(j).attr("id") + ')' + " LIKE " + ($(j).val() == 'Adv Search' ? " " : "SOUNDEX('" + $(j).val()) + "'))";
                        }
                    }
                    else {
                        if ($(_self.find(".lk_table_find input[type=radio]")[0]).is(':checked')) {
                            _advobj += " AND " + _advChar + $(j).attr("id") + " LIKE '%" + ($(j).val() == 'Adv Search' ? " " : $(j).val()) + "%' ";
                        }
                        else if ($(_self.find(".lk_table_find input[type=radio]")[2]).is(':checked')) {
                            _advobj += " AND " + _advChar + $(j).attr("id") + " LIKE '" + ($(j).val() == 'Adv Search' ? " " : $(j).val()) + "%' ";
                        }
                        else if ($(_self.find(".lk_table_find input[type=radio]")[3]).is(':checked')) {
                            _advobj += " AND " + _advChar + $(j).attr("id") + " LIKE '%" + ($(j).val() == 'Adv Search' ? " " : $(j).val()) + "' ";
                        }
                        else {
                            _advobj += " AND " + _advChar + $(j).attr("id") + " LIKE '" + ($(j).val() == 'Adv Search' ? " " : $(j).val()) + "' ";
                        }
                        if ($(_self.find(".lk_table_find input[type=radio]")[1]).is(':checked')) {

                            _advobj += ' OR SOUNDEX(' + $(j).attr("id") + ')' + " LIKE " + ($(j).val() == 'Adv Search' ? " " : "SOUNDEX('" + $(j).val()) + "'))";
                        }
                    }
                    _advCount++;
                }
            });

            var _prefixobj = "";
            var _prefixCount = 0, _advChar = '';
            _self.find(".lk_table_find input[type=text]").each(function (i, j) {
                if ($(_self.find(".lk_table_find input[type=radio]")[1]).is(':checked')) {
                    _advChar = "(";
                }
                if ($(j).val() != 'Adv Search' && $(j).val() != "" && $(j).val() != undefined && $(j).val() != null) {
                    var _ddlvalue = _d_columns.find("option:selected").val();
                    if (_ddlvalue.indexOf('$') != -1) {
                        _ddlvalue = _ddlvalue.split('$')[0];
                    }
                    if (_prefixCount == 0) {
                        if ($(j).val() == "All") $(j).val("");
                        if ($(_self.find(".lk_table_find input[type=radio]")[0]).is(':checked')) {
                            _prefixobj += _advChar + _ddlvalue + " LIKE '%" + ($(j).val() == 'Adv Search' ? " " : $(j).val()) + "%' ";
                        }
                        else if ($(_self.find(".lk_table_find input[type=radio]")[2]).is(':checked')) {
                            _prefixobj += _advChar + _ddlvalue + " LIKE '" + ($(j).val() == 'Adv Search' ? " " : $(j).val()) + "%' ";
                        }
                        else if ($(_self.find(".lk_table_find input[type=radio]")[3]).is(':checked')) {
                            _prefixobj += _advChar + _ddlvalue + " LIKE '%" + ($(j).val() == 'Adv Search' ? " " : $(j).val()) + "' ";
                        }
                        else {
                            _prefixobj += _advChar + _ddlvalue + " LIKE '" + ($(j).val() == 'Adv Search' ? " " : $(j).val()) + "' ";
                        }
                        if ($(_self.find(".lk_table_find input[type=radio]")[1]).is(':checked')) {

                            _prefixobj += ' OR SOUNDEX(' + _ddlvalue + ')' + " LIKE " + ($(j).val() == 'Adv Search' ? " " : "SOUNDEX('" + $(j).val()) + "'))";
                        }
                    }
                    else {
                        if ($(j).val() == "All") $(j).val("");
                        if ($(_self.find(".lk_table_find input[type=radio]")[0]).is(':checked')) {
                            _prefixobj += " AND " + _advChar + _ddlvalue + " LIKE '%" + ($(j).val() == 'Adv Search' ? " " : $(j).val()) + "%' ";
                        }
                        else if ($(_self.find(".lk_table_find input[type=radio]")[2]).is(':checked')) {
                            _prefixobj += " AND " + _advChar + _ddlvalue + " LIKE '" + ($(j).val() == 'Adv Search' ? " " : $(j).val()) + "%' ";
                        }
                        else if ($(_self.find(".lk_table_find input[type=radio]")[3]).is(':checked')) {
                            _prefixobj += " AND " + _advChar + _ddlvalue + " LIKE '%" + ($(j).val() == 'Adv Search' ? " " : $(j).val()) + "' ";
                        }
                        else {
                            _prefixobj += " AND " + _advChar + _ddlvalue + " LIKE '" + ($(j).val() == 'Adv Search' ? " " : $(j).val()) + "' ";
                        }
                        if ($(_self.find(".lk_table_find input[type=radio]")[1]).is(':checked')) {

                            _prefixobj += ' OR SOUNDEX(' + _ddlvalue + ')' + " LIKE " + ($(j).val() == 'Adv Search' ? " " : "SOUNDEX('" + $(j).val()) + "'))";
                        }
                    }
                    _prefixCount++;
                }
            });

            if (_advCount == 0) {
                _advobj = '';
                _advobj = _prefixobj;
            }
            ObjParams.lookupName = _self.find(".lookupName").text();
            ObjParams.cName = ""; // _d_columns.find("option:selected").val();
            ObjParams.preFix = ""; // (_self.find(".lk_search").val() == "") ? " " : _d_columns.find("option:selected").val() == "DOB" ? new Date(_self.find(".lk_search").val()).format('dd-MMM-yyyy') : _self.find(".lk_search").val();

            if (ObjParams.preFix == 'All') { ObjParams.preFix = ''; _self.find(".lk_search").val('') }
            ObjParams.advSearch = _advobj;
            ObjParams.PreCondition = _options.flag;
            ObjParams.pNumber = _self.find(".lk_footer .pg_page_number").val();
            ObjParams.pSize = _d_pagesize.find("option:selected").val();
            ObjParams.defaultLoad = defaultcount == 0 ? "N" : "Y";
            ObjParams.sortOrder = _self.find(".dpl_sortcolmns").find("option:selected").val().split('$')[0] + " " + _self.find(".lk_sortorder").find("option:selected").val();

            $.ajax({
                type: "POST",
                url: _options.dataURL,
                dataType: "json",
                data: JSON.stringify(ObjParams),
                contentType: "application/json; charset=utf-8",
                error: function (jqXHR, textStatus, errorThrown) {
                    var err = textStatus + ', ' + errorThrown;
                    $(".lookup-loader").hide();
                },
                success: function (jData) {
                    if (jData != null) {
                        _totalrecords.html(jData.d[1]);
                        var _total_records = parseInt(jData.d[1]);
                        var _pSize = parseInt(ObjParams.pSize);
                        var _tpages = _total_records % _pSize > 0 ? (parseInt(_total_records / _pSize) + 1) : (_total_records / _pSize);
                        var _cPage = parseInt(ObjParams.pNumber);
                        _totalpages.html(_tpages); _self.find('.lk_footer .span_current_page').html(_cPage);
                        _first.prop('disabled', _cPage == 1);
                        _prev.prop('disabled', _cPage <= 1);
                        _next.prop('disabled', _cPage >= _tpages);
                        _last.prop('disabled', _cPage == _tpages);
                        var _row = ""; var _tbl = '';
                        if (jData.d[0] != null) {
                            var _data = jData.d[0][0];
                            _AJAXData = _data;
                            var kc = _options.dataKey;
                            var _head = "<tr class='callBackRow' data-kcname=\"" + kc.split(',')[0] + "\" data-kcid=\"\">";
                            for (var _kc = 0; _kc < kc.split(',').length; _kc++) {
                                var val = kc.split(',')[_kc];
                                if (!val.toString().toLowerCase().match(/id/)) {
                                    _head += "<th>" + [val.toUpperCase()] + "</th>";
                                }
                            }
                            _head += "</tr>";
                            _self.find(".lk_tbl_body thead").empty().append(_head);
                            for (var data in _data) {
                                var kc = _options.dataKey;
                                var _array = new Array();
                                for (var _kc = 0; _kc < kc.split(',').length; _kc++) {
                                    _array[kc.split(',')[_kc]] = _data[data]['' + kc.split(',')[_kc] + ''];
                                }

                                _row += "<tr class='callBackRow' data-kcname=\"" + kc.split(',')[0] + "\" data-kcid=\"" + _array[kc.split(',')[0]] + "\">"; //<td><input type=\"button\" class=\"ajaxlevel_1_click\" data-key=\"" + _array[kc.split(',')[0]] + "\" value=\"+\"><span style=\"display:none !important;\" class=\"hidespan\"></span></td>
                                var hdnDateFormat = $('[id*=hdnDateFormat]').val().trim();
                                if (hdnDateFormat == undefined || hdnDateFormat == null || hdnDateFormat == "") { hdnDateFormat = "YYYY-MM-DD"; }
                                var hdnTimeFormat = $('[id*=hdnTimeFormat]').val().trim();
                                if (hdnTimeFormat == undefined || hdnTimeFormat == null || hdnTimeFormat == "") { hdnTimeFormat = "HH:mm:ss"; }

                                for (var _kc = 0; _kc < kc.split(',').length; _kc++) {
                                    var val = kc.split(',')[_kc];

                                    if (!val.toString().toLowerCase().match(/id/)) {
                                        if (_data[data][val.toUpperCase()] == "null" || _data[data][val.toUpperCase()] == undefined) { _data[data][val.toUpperCase()] = ''; }
                                        if (val == "MANAGE") {
                                            _row += "<td><div style=\"width:130px;\"><i class=\"icon-eye umrsearchico\" title=\"View\" onclick=\"return ViewPatData('" + _array[kc.split(',')[0]] + "');\">" + _data[data][val.toUpperCase()] + "</i>";
                                            _row += "<i class=\"icon-print-1 umrsearchico\" title=\"Print\" onclick=\"return ViewPatPrint('" + _array[kc.split(',')[0]] + "','" + _array[kc.split(',')[6]] + "','" + _array[kc.split(',')[7]] + "','" + _array[kc.split(',')[3]] + "','" + _array[kc.split(',')[2]] + "');\">" + _data[data][val.toUpperCase()] + "</i>";
                                            _row += "<i class=\"icon-location umrsearchico\" title=\"Address Info\" onclick=\"return showPatAddress('" + _array[kc.split(',')[0]] + "','" + _array["DISPLAY_NAME"] + "');\">" + _data[data][val.toUpperCase()] + "</i>";
                                            _row += "<i class=\"icon-edit umrsearchico\" title=\"Change Reg Details\" onclick=\"return ChangRegDetails('" + _array[kc.split(',')[0]] + "','" + _array["UMR_NO"] + "');\">" + _data[data][val.toUpperCase()] + "</i>";
                                            if (_array[kc.split(',')[29]].trim().toLowerCase() == "v" || _array[kc.split(',')[29]].trim().toLowerCase() == "vv") {
                                                _row += "<i class=\"ivip gico1 umrsearchico\" title=\"VIP\" \"></i>";
                                            }
                                            if (_array[kc.split(',')[47]] == "Corporate") {
                                                _row += "<i class=\"icorp gico1 umrsearchico\" title=\"Corporate\" \"></i>";
                                            }
                                            _row += "</div></td>";
                                        }
                                        else if (!val.toString().toLowerCase().match(/dt/)) {
                                            if (val.toUpperCase() == "DOB") {
                                                var dateFrmt = hdnDateFormat;
                                                _row += "<td>" + new Date(_data[data][val.toUpperCase()]).format(dateFrmt) + "</td>";
                                            }
                                            else {
                                                if (_data[data][val.toUpperCase()].length > 25) {
                                                    var _title = "title=\"" + _data[data][val.toUpperCase()] + "\"";
                                                    _row += "<td class='tdsize'><label  class='ellipsisd' " + _title + "><span  class='ellipsis'>" + _data[data][val.toUpperCase()] + "</span></label></td>";
                                                }
                                                else {
                                                    _row += "<td>" + _data[data][val.toUpperCase()] + "</td>";
                                                }
                                            }
                                        }
                                        else {

                                            if (_data[data][val.toUpperCase()] == undefined || _data[data][val.toUpperCase()] == null) { _data[data][val.toUpperCase()] = ''; }
                                            if (_data[data][val.toUpperCase()] != '') {
                                                var dateFrmt = hdnDateFormat + " " + hdnTimeFormat;
                                                _row += "<td>" + new Date(_data[data][val.toUpperCase()]).format(dateFrmt) + "</td>";
                                            }
                                            else {
                                                if (_data[data][val.toUpperCase()].length > 25) {
                                                    var _title = "title=\"" + _data[data][val.toUpperCase()] + "\"";
                                                    _row += "<td class='tdsize'><label  class='ellipsisd' " + _title + "><span  class='ellipsis'>" + _data[data][val.toUpperCase()] + "</span></label></td>";
                                                }
                                                else {
                                                    _row += "<td>" + _data[data][val.toUpperCase()] + "</td>";
                                                }
                                            }
                                        }
                                    }
                                }
                                _row += "</tr>";
                            }
                        }
                        _self.find(".lk_tbl_body tbody").empty().append(_row);
                        resetEvents();
                        _self.find(".lk_tbl_body tbody").css('cursor', 'pointer');
                        _self.find(".resetSearch").val("0");
                        SetTabletdFreeze("opsearchlook");
                        /* ............ Bhupathi ........... */
                        var clamp = function (num, min, max) {
                            return num < min ? min : (num > max ? max : num);
                        };
                        var selfid = _self[0].id;
                        var rows = $("div[id*=" + _self[0].id + "] table.lk_tbl_body tr");
                        // initial load add the selected class to the first non header row
                        if (status == false)
                            $(rows[index]).addClass('selected');
                        var index = 1;
                        $('#' + selfid).on('keydown', function (e) {
                            e.stopPropagation();
                            // clear the selected class off of the row
                            $(rows[index]).removeClass('selected');
                            // increment/decrement the index
                            switch (e.keyCode) {
                                case 40: // down
                                    index = clamp(index + 1, 1, rows.length - 1);
                                    break;
                                case 38: // up
                                    index = clamp(index - 1, 1, rows.length - 1);
                                    break;
                            }
                            if (count > 0)
                                $(rows[index]).addClass('selected');

                            if (e.keyCode == 32 && e.ctrlKey) {
                                $(".callBackRow.selected").click();
                            }
                            else if (e.keyCode == 40) {
                            }
                        });
                        var inf = 0;
                        function rowClick(datarow) {
                            var _kcid = datarow.data("kcid");
                            var _kcname = datarow.data("kcname");
                            var _cobj = {};
                            var _me = datarow;
                            $(_AJAXData).each(function (i, j) {
                                if (j[_kcname] == _kcid) {
                                    $(_options.dataKey.split(',')).each(function (i, col) {
                                        _cobj[col] = j[col];
                                    });
                                    _cobj._lktext = _me.find("td:first-child").html();
                                    cfunction(_cobj);
                                    $('.callBackRow').remove();
                                }
                            });
                            $('.fade').hide(); _autolk.val('');
                            return false;
                        };
                        /* ............ Bhupathi end ........... */
                    }
                    $(".lookup-loader").hide();
                }
            });
        });
        /* _self.trigger("LoadAJAXData"); */
    };
} (jQuery));


 