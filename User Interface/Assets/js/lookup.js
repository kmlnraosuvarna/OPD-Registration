(function ($) {
    $.fn.lookupControl = function (cfunction, options) {
        var _self = $(this);
        var _b_close = _self.find(".cbutton");
        var _b_advsearch = _self.find(".lk_header .lk_adv_search");
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
      
        var count = 0;
        var filtercreteria = options.filtercreteria;
         var precondition = options.flag;
        var _timeout;
        var _noData = "No Record(s) Found";
        var _options = options;
        var _AJAXData = null;
        var _auto_lk_txt = _options.lookuptextboxid;
        var _auto_lk_options = $(_options.lookuptextboxoptions);
        var lk_val = _options.lookupval;
        var lk_Text = _options.lookupText;
        /* Bind Dropdown List Control with dlist */
        var _dplsource = eval(_self.data("dlist"));
        var status = true;

        /* added by rama, to differentiate whether the very first time DB hit is happening or not (on 04-06-2018)*/
        var _eventFlagCount = 0;
        var _prvSrch = '';
        var _Prevtotalrecords = 0;
        /*  up to here by rama (on 04-06-2018)*/

        var sortorder = options.SortOrder;   /* added by rama on 06-08-2018, Sorting Order varry from lookup to lookup*/
        var _prefixLength = options.prefixLength;   /* added by rama on 25-08-2022, prefix lenth of the lookup to start autocompletion*/
        var _isDefaultLoad = options.isDefaultLoad;   /* added by rama on 25-08-2022, By default lookup should load the data or not*/
        var defaultcount = 0; /* by default lookup should bind or not based on this*/
        if(_isDefaultLoad=='Y')
            defaultcount=1;
        else
            defaultcount=0;
        for (var arrItem in _dplsource) {
            for (var objItem in _dplsource[arrItem]) {
                var Maxlength = $('[id*=hdnMobileMaxDigits]').val(); /*add by srinivas for min and max length of mobile number based on company policy setting(on 31-may-2018)*/
                var objItemcol = _dplsource[arrItem][objItem].indexOf('-') != '-1' ? _dplsource[arrItem][objItem].split('-')[0] : _dplsource[arrItem][objItem];
                var datatype = _dplsource[arrItem][objItem].indexOf('-') != '-1' ? _dplsource[arrItem][objItem].split('-')[1] : '';
                if (objItemcol == 'Umr#' || (objItemcol).toUpperCase() == 'IP' || (objItemcol).toUpperCase() == 'OP' || (objItemcol).toUpperCase() == 'IMR' || (objItemcol).toUpperCase() == 'ADMN#' || (objItemcol).toUpperCase() == 'ADMN') {
                    objItemcol = objItemcol.toUpperCase();
                }
                _self.find(".lk_tbl_body thead tr").append("<th>" + objItemcol + "</th>")
                _d_columns.append($('<option></option>').val(objItem + '$' + datatype).html(objItemcol));

//                _self.find(".dpl_sortcolmns").append($('<option></option>').val(objItem + '$' + datatype).html(objItemcol));

                if (datatype == "I" && objItem == "MOBILE_NO")
                    _self.find(".lk_header table tbody tr td .last").before('<input name=' + objItem + ' id=' + objItem + ' type="text" class="rSearch" data-dtype="' + datatype + '" onkeypress = "return numeralsOnly(event);" maxLength = "' + Maxlength + '" placeholder="' + objItemcol + '" />');
                else if (datatype == "I")
                    _self.find(".lk_header table tbody tr td .last").before('<input name=' + objItem + ' id=' + objItem + ' type="text" class="rSearch" data-dtype="' + datatype + '" onkeypress = "return numeralsOnly(event);" maxLength = "30" placeholder="' + objItemcol + '" />');
                else if (datatype == "A")
                    _self.find(".lk_header table tbody tr td .last").before('<input name=' + objItem + ' id=' + objItem + ' type="text" class="rSearch" data-dtype="' + datatype + '" onkeypress="return NumCharsSpaceWithHiphen(event);"  maxLength = "30" placeholder="' + objItemcol + '" />');
                else if (datatype == "S")
                    _self.find(".lk_header table tbody tr td .last").before('<input name=' + objItem + ' id=' + objItem + ' type="text" class="rSearch" data-dtype="' + datatype + '" onkeypress=" return OnlyCharecters(event);"  maxLength = "30" placeholder="' + objItemcol + '" />');
                else if (datatype == "D")
                    _self.find(".lk_header table tbody tr td .last").before('<input name=' + objItem + ' id=' + objItem + ' type="text" class="rSearch" data-dtype="' + datatype + '" placeholder="01-Jan-1999" maxLength = "11" />');
                else
                    _self.find(".lk_header table tbody tr td .last").before('<input name=' + objItem + ' id=' + objItem + ' type="text" class="rSearch" data-dtype="' + datatype + '" maxLength = "30" placeholder="' + objItemcol + '" />');


                _d_columns.change(function () {

                    _self.find(".lk_txt_search").val('');
                    _self.find(".lk_Text").val('');

                    if ($(this).val().indexOf('-') != -1) {
                        if ($(this).parent().parent() != undefined) {
                            var _ftext = $(this).parent().parent().find('input[type=text]');
               
                            if ($(this).val().split('-')[1] == 'I') {
                                _ftext.attr('onkeypress', "return numeralsOnly(event);");
                                if ($(this).val().split('-')[0] == "MOBILE_NO") {
                                    _ftext.attr('maxlength', "10");
                                }
                                else {
                                    _ftext.attr('maxlength', "30");
                                }
                                _ftext.attr('placeholder', "Numerics")
                            }
                            else if ($(this).val().split('-')[1] == "A") {
                                _ftext.attr('onkeypress', "return NumCharsSpaceWithHiphen(event);");
                                _ftext.attr('maxlength', "30");
                                _ftext.attr('placeholder', $(this).find('option:selected').text());
                            }
                            else if ($(this).val().split('-')[1] == "S") {
                                _ftext.attr('onkeypress', "return OnlyCharecters(event);");
                                _ftext.attr('maxlength', "30");
                                _ftext.attr('placeholder', $(this).find('option:selected').text());
                            }
                            else if ($(this).val().split('-')[1] == "D") {
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

            $("tr.callBackRow").unbind();
            $("tr.callBackRow").bind("click", function () {
               defaultcount = _options.isDefaultLoad=="N" ?0:1;
                _eventFlagCount = 0;
                var _kcid = $(this).data("kcid");
                var _kcname = $(this).data("kcname");
                var _cobj = {};
                var _me = $(this);

                $(_AJAXData).each(function (i, j) {
                    if (j[_kcname] == _kcid) {
                        $(_options.dataKey.split(',')).each(function (i, col) {
                            _cobj[col] = j[col];
                        });
                        _cobj._lktext = _me.find("td:first-child").html().replace(/&amp;/g, '&')

                        cfunction(_cobj);
                          var obj=_auto_lk_txt[0].id;
                                     $('[id*='+obj+']').prop('disabled',true);
                                      var ID = obj.substring(0, obj.length - 16);
                                        var HiddenID = ID + '_hiddenID1';
                                        document.getElementById(HiddenID).value=1;
                        /*$("#Lcmask").hide();*/
                        _self.hide();
                    }
                });

                /* added by rama on 06-08-2018, if row is selected with other column after that restoring the default column */
                var __opt = _d_columns.find("option");
                var __defaultddlval = _self.find(".lk_header table tbody tr td .rSearch:first-child")[0].name;
                for (var i = 0; i < __opt.length; i++) {
                    if (__opt[i].value.split('$')[0].toUpperCase() === __defaultddlval.toUpperCase()) {
                        __opt[i].selected = true;
                    }
                }

                /* added by rama on 06-08-2018 ------------ END --------------*/

                $('.fade').hide(); _autolk.val('');
                $(".callBackRow").unbind().remove();
            });
        }

        var ____height = 0;
        var ____checkAJAXTimer;
        _auto_lk_txt.blur(function () {
            if (_options.onBlurReqired == "True") {
                ____checkAJAXTimer = setTimeout(function () {
                    if (lk_Text.val() == "") { _auto_lk_txt.val(''); /*_auto_lk_txt.css('border', '1px solid rgb(244,120,94)');*/ }
                    if (document.activeElement.className !== "ajaxoptions" && _auto_lk_txt.val() !== "" && lk_Text.val() !== _auto_lk_txt.val()) {
                        //                        alert("Invalid Entry,Please Select Value Property");
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
                    if ($(this).attr('class') === "ajaxoptions clearfix autoselect autohightlight") {
                        _displayData = $(this).find('span').html().replace(/\<\/b>/g, '').replace(/\<b>/g,'');
                        /*var tb = $.parseJSON(eval($.trim($(this).find('span').html()))); */
                        //var tb = _options.IsExtraColsReqinAuto == 'True' ? $.parseJSON(eval($(this).next("span").html().replace(/\<\/b>/g, '').replace(/\<b>/g,''))) : $.parseJSON(eval($.trim($(this).next("span").html())));
                        var tb = $.parseJSON(eval($.trim($(this).next("span").html().replace(/\<\/b>/g, '').replace(/\<b>/g,''))));
                        _auto_lk_txt.val(_displayData);
                        lk_Text.val(_displayData);
                        lk_val.val(tb.Value);
                        _auto_lk_options.hide();
                        var _cobj = {};
                        _cobj._lktext = _displayData;
                        _cobj.ID = tb.Value;
                        _cobj.RESULT = tb;
                        cfunction(_cobj);
                        $(".lookup-loader").hide();
                    }
                    else  if ($(this).attr('class') === "autohightlight") {
                        _displayData = $(this).next("span").html()==undefined?$(this).find('a').html().replace(/\<\/b>/g, '').replace(/\<b>/g,''): $(this).find('span').html().replace(/\<\/b>/g, '').replace(/\<b>/g,'');
                        /*var tb = $.parseJSON(eval($.trim($(this).find('span').html()))); */
                        /*var tb = _options.IsExtraColsReqinAuto == 'True' ? $.parseJSON(eval($(this).next("span").html().replace(/\<\/b>/g, '').replace(/\<b>/g,''))) : $.parseJSON(eval($.trim($(this).next("span").html())));*/
                        var tb = $.parseJSON(eval($.trim($(this).find('span').html())));
                        _auto_lk_txt.val(_displayData);
                        lk_Text.val(_displayData);
                        lk_val.val(tb.Value);
                        _auto_lk_options.hide();
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
            //lk_Text.val('');
            __event = event.currentTarget.id;
            if (event.keyCode === 13 || event.keyCode === 40 || event.keyCode === 38 || event.keyCode === 37 || event.keyCode === 39) {
                return false;
            }
            clearTimeout(_timeout);
            if (event.keyCode === 113) {

                $("#Lcmask").height($(document).height());
                /*.show();*/
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
            //var prefixlength;
            //if (_options.IsPrefixLenReqired == "True")
            if(_prefixLength != null && _prefixLength != undefined && _prefixLength != '')
                prefixlength = _prefixLength;//$('[id$=hdnprefixlength]').val();
            else
                prefixlength = 2;
            if ($(this).val().length > prefixlength) {
                _timeout = setTimeout(function () {
                    var _prams = new Object();
                    _prams.prefixText = '%' + _auto_lk_txt.val();
                    _prams.contextKey = _options.contextKey;
                    _prams.precondition = _self.find('[id$=hdn_preCond]')[0].value;
                    _prams.lookupName = _self.find(".lookupName").text();
                     
                    if(_options.autoSuggest.split('/')[2].toUpperCase() == 'DEPARTMENTWEBSERVICE.ASMX'){
                    _prams.filtercreteria = _options.filtercreteria;
                    }
                    if (_options.autoSuggest.split('/')[2] == 'LookupAutoService.Asmx') {
                        _prams.filtercreteria = _options.filtercreteria;
                        _prams.lookupName = _self.find(".lookupName").text();
                        _prams.precondition = _self.find('[id$=hdn_preCond]')[0].value;//_options.flag;
                    }
                    $.ajax({
                        type: "POST",
                        url: _options.autoSuggest,
                        dataType: "json",
                        async:false,
                        data: JSON.stringify(_prams),
                        contentType: "application/json; charset=utf-8",
                        error: function (jqXHR, textStatus, errorThrown) {
                        },
                        success: function (jdata) {
                        if (_options.IsAutoCompleteJson == 'SERVICE_NAME') {
                        jdata = JSON.parse(jdata.d);
                        }
                        else{
                        jdata=jdata.d;
                        }
                         if (jdata.length > 0) {
                                _optionselectposition = -1;
                                var prtxt = _auto_lk_txt.val();
                                if (_options.IsExtraColsReqinAuto == 'True') {
                                    var _autoextracols = _options.AutoExtraCols;
                                    var _ul = "<div class='multi-items divscroll'><ul >";
                                    $(jdata).each(function (i, j) {
                                        var txt = String($.parseJSON(j).First).replace(new RegExp(prtxt, "gi"), "<b>$&</b>");
                                        _ul += "<li href='#' class='ajaxoptions clearfix autoselect'><span>" + txt + "</span>";
                                        for (ai = 0; ai < _autoextracols.split(',').length; ai++) {
                                            var parsesecond = $.parseJSON($.parseJSON(j).Second);
                                            if (_autoextracols.split(',')[ai].length > 0) {
                                                if (_autoextracols.split(',')[ai].split('-')[1] == 'D')
                                                    _ul += "<span>" + new Date(parsesecond[_autoextracols.split(',')[ai].split('-')[0]]).format($('[id*=hdnDateFormat]').val().trim()) + "</span>";
                                                else
                                                    _ul += "<span>" + parsesecond[_autoextracols.split(',')[ai]] + "</span>";
                                            }
                                            else
                                                _ul += "<span>" + parsesecond[_autoextracols.split(',')[ai]] + "</span>";
                                        }
                                        _ul += "</li><span style=display:none;>'" + $.parseJSON(j).Second + "'</span>";
                                    });
                                }
                                else {

                                var _ul = '';
                                if (_options.IsAutoCompleteJson == 'SERVICE_NAME') {
                                _ul += "<div  class='single-items divscroll'><ul >";
                                    $(jdata).each(function (i, j) {
                                        var txt = String(jdata[i].SERVICE_NAME).replace(new RegExp(prtxt, "gi"), "<b>$&</b>");
                                        _ul += "<li><a href='#' class='ajaxoptions'>" + txt + "</a><span style=display:none;>'" + JSON.stringify(jdata[i])+ "'</span></li>";
                                    });
                                }else{
                                    _ul += "<div  class='single-items divscroll'><ul >";

                                    $(jdata).each(function (i, j) {
                                        var txt = String($.parseJSON(j).First).replace(new RegExp(prtxt, "gi"), "<b>$&</b>");
                                        _ul += "<li><a href='#' class='ajaxoptions'>" + txt + "</a><span style=display:none;>'" + $.parseJSON(j).Second + "'</span></li>";
                                    });
                                    }
                                    }
                                _ul += "</ul></div>";
                                _auto_lk_options.empty().html(_ul).css({ "top": _auto_lk_txt.outerHeight() + "px", "min-width": _auto_lk_txt.outerWidth() + "px" }).show();
                                LookUpset(__event);
                                _auto_lk_options.find("ul li").click(function (event) {
                                    $(".lookup-loader").hide();
                                    var tb = $.parseJSON(eval($.trim($(this).next("span").html())));
                                    _auto_lk_txt.val($(this).find('span').html().replace(/\<\/b>/g, '').replace(/\<b>/g,''));
                                    lk_Text.val($(this).find('span').html().replace(/\<\/b>/g, '').replace(/\<b>/g,''));
                                    lk_val.val(tb.Value);
                                    _auto_lk_options.hide();
                                    var _cobj = {};
                                    _cobj._lktext = $(this).find('span').html().replace(/\<\/b>/g, '').replace(/\<b>/g,'');
                                    _cobj.ID = tb.Value;
                                    _cobj.RESULT = tb;
                                    LookUpValidation(_auto_lk_txt, lk_val);
                                    cfunction(_cobj);
                                        var obj=_auto_lk_txt[0].id;
                                     $('[id*='+obj+']').prop('disabled',true);
                                      var ID = obj.substring(0, obj.length - 16);
                                        var HiddenID = ID + '_hiddenID1';
                                        document.getElementById(HiddenID).value=1;
                                    $(".lookup-loader").hide();
                                    return false;
                                });
                                _auto_lk_options.find("ul li a").click(function (event) {
                                    $(".lookup-loader").hide();
                                    var tb = $.parseJSON(eval($.trim($(this).next("span").html())));
                                    _auto_lk_txt.val($(this).html().replace('</b>', '').replace('<b>', ''));
                                    lk_Text.val($(this).html().replace('</b>', '').replace('<b>', ''));
                                    lk_val.val(tb.Value);
                                    _auto_lk_options.hide();
                                    var _cobj = {};
                                    _cobj._lktext = $(this).html().replace('</b>', '').replace('<b>', '');
                                    _cobj.ID = tb.Value;
                                    _cobj.RESULT = tb;
                                    LookUpValidation(_auto_lk_txt, lk_val);
                                    cfunction(_cobj);
                                    var obj=_auto_lk_txt[0].id;
                                     $('[id*='+obj+']').prop('disabled',true);
                                      var ID = obj.substring(0, obj.length - 16);
                                        var HiddenID = ID + '_hiddenID1';
                                        document.getElementById(HiddenID).value=1;
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
        $("html").keyup(function (e) {
            if (e.keyCode == 27) {
                /*$("#Lcmask").hide();*/
                _self.hide();
            }
        });

        _b_close.click(function () {
            /*$("#Lcmask").hide();*/
            _self.hide();
        });

        //        _autolk.keypress(function (e) {
        //            
        //        });
        _autolk.keydown(function (e) {
            clearTimeout(_timeout);
            if (e.keyCode === 13) {
                if (_autolk.val() == "") {
                    $('.lk_tbl_body').find('tr.lookup-row-select').click();
                }
                _self.find(".lk_search").trigger("click");
                status = false; count++; defaultcount++;
                _eventFlagCount++;
                return false;
            }
            /*NEWLY ADDED BY NARESH BEGIN*/
            if (e.keyCode === 39) {
                if (_autolk.val() == "") {
                    if (parseInt(_b_pagenumber.val()) < parseInt(_totalpages.html())) {
                        _b_pagenumber.val(parseInt(_b_pagenumber.val()) + 1);
                        _self.trigger("LoadAJAXData");
                        e.stopPropagation();
                    }
                }
            }
            if (e.keyCode === 37) {
                if (_autolk.val() == "") {
                    if (parseInt(_b_pagenumber.val()) > 1) {
                        _b_pagenumber.val(parseInt(_b_pagenumber.val()) - 1);
                        _self.trigger("LoadAJAXData");
                        e.stopPropagation();
                    }
                }
            }
            /*NEWLY ADDED BY NARESH END*/
        });


        _autolkoptions.click(function (event) {
            event.stopPropagation();
        });

        $(_options.lookupbuttonid).click(function () {
            $('.lk_header table tbody tr td input[type=text]').val('');
            $("#Lcmask").height($(document).height());
            /*.show();*/
            /*  $("body").append(_self) Commented by Naresh*/

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
                _b_pagenumber.val('1'); defaultcount++; _eventFlagCount++;
                _self.trigger("LoadAJAXData");
            }
        });


        _self.find(".icon-up").click(function () {
            $(".icon-up").addClass("select");
            $(".icon-down").removeClass("select");
            _self.find(".lk_sortorder").find("option:selected").val('ASC');
            _b_pagenumber.val('1'); defaultcount++; _eventFlagCount++;
            sortorder = "A";
            _self.trigger("LoadAJAXData");
        });
        _self.find(".icon-down").click(function () {
            $(".icon-up").removeClass("select");
            $(".icon-down").addClass("select");
            _self.find(".lk_sortorder").find("option:selected").val('DESC');
            _b_pagenumber.val('1'); defaultcount++; _eventFlagCount++;
            sortorder = "D";
            _self.trigger("LoadAJAXData");
        });
        _next.click(function () {
            _b_pagenumber.val(parseInt(_b_pagenumber.val()) + 1); defaultcount++; _eventFlagCount++;
            _self.trigger("LoadAJAXData");
        });

        _prev.click(function () {

            _b_pagenumber.val(parseInt(_b_pagenumber.val()) - 1 < 1 ? 1 : parseInt(_b_pagenumber.val()) - 1); defaultcount++; _eventFlagCount++;

            _self.trigger("LoadAJAXData");
        });

        _first.click(function () {
            _b_pagenumber.val('1'); defaultcount++; _eventFlagCount++;
            _self.trigger("LoadAJAXData");
        });

        _last.click(function () {
            _b_pagenumber.val(_totalpages.html()); defaultcount++; _eventFlagCount++;
            _self.trigger("LoadAJAXData");
        });

        _self.find(".lk_adv_search").click(function () {
            _b_pagenumber.val('1'); defaultcount++; _eventFlagCount++;
            _self.trigger("LoadAJAXData");
        });
        _self.find(".lk_search").click(function (e) {
            if ($(this).attr("type") != "text") {
                _b_pagenumber.val('1'); defaultcount++; _eventFlagCount++;
                _self.trigger("LoadAJAXData");
            }
        });

        _b_search.click(function () {
            _b_pagenumber.val('1');
            _self.find(".lk_search").val($(this).val()); defaultcount++; _eventFlagCount++;
            _self.trigger("LoadAJAXData");
        });




        _d_pagesize.change(function () {
            _b_pagenumber.val('1'); defaultcount++; _eventFlagCount++;
            _self.trigger("LoadAJAXData");
        });
        _b_pagenumber.blur(function () {
            if (_b_pagenumber.val() == '' || _b_pagenumber.val() == '0') { _b_pagenumber.val('1'); } defaultcount++; _eventFlagCount++;
            _self.trigger("LoadAJAXData");
        });
        _b_pagenumber.keypress(function (e) {
            if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {/*display error message*//*$("#errmsg").html("*").show().fadeOut("slow");*/
                return false;
            }
        });
        var _prefixCount = 0;
        _self.on("LoadAJAXData", function () {
            _autolk.focus();
            status = true;
            var ObjParams = {};
            var _advobj = "";
            var _advCount = 0, _advChar = '';
            _self.find(".lk_header input[type=text]").each(function (i, j) {
                if ($(_self.find(".lk_table_find input[type=radio]")[1]).is(':checked')) {
                    _advChar = "(";
                }

                if ($(j).val() != 'Adv Search' && $(j).val() != "" && $(j).val() != undefined && $(j).val() != null) {
                    if (_advCount == 0) {
                        if ($(_self.find(".lk_table_find input[type=radio]")[0]).is(':checked')) {
                            _advobj += _advChar + $(j).attr("id") + " LIKE '%" + ($(j).val() == 'Adv Search' ? " " : $(j).val()) + "%' ";
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
                        if (_prvSrch != _advobj) _eventFlagCount = 0; _prvSrch = _advobj;  /* added by rama, to differentiate whether the very first time DB hit is happening or not (on 04-06-2018)*/
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
            var _advChar = '';
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
                        _eventFlagCount = 0; _prvSrch = _prefixobj; /* added by rama, to differentiate whether the very first time DB hit is happening or not (on 04-06-2018)*/
                    }
                    else {
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
                        if (_prvSrch != _prefixobj) _eventFlagCount = 0; _prvSrch = _prefixobj; /* added by rama, to differentiate whether the very first time DB hit is happening or not (on 04-06-2018)*/
                    }
                    _prefixCount++;


                }
            });
            var _eventFlag = 1;
            if (_advCount == 0) {
                _advobj = '';
                _advobj = _prefixobj;

                if (_advobj != _prvSrch) {
                    _eventFlagCount = 0; _prvSrch = _advobj;
                }
            }

            ObjParams.lookupName = _self.find(".lookupName").text();
            ObjParams.cName = ""; // _d_columns.find("option:selected").val();
            ObjParams.preFix = ""; // (_self.find(".lk_search").val() == "") ? " " : _d_columns.find("option:selected").val() == "DOB" ? new Date(_self.find(".lk_search").val()).format('dd-MMM-yyyy') : _self.find(".lk_search").val();

            if (ObjParams.preFix == 'All') { ObjParams.preFix = ''; _self.find(".lk_search").val('') }
            ObjParams.advSearch = _advobj;
            ObjParams.PreCondition =_self.find('[id$=hdn_preCond]')[0].value;//_options.flag;
            ObjParams.pNumber = _self.find(".lk_footer .pg_page_number").val();
            ObjParams.pSize = _d_pagesize.find("option:selected").val();
            ObjParams.defaultLoad = defaultcount == 0 ? "N" : "Y";
            /* added by rama on 06-08-2018, Sorting Order varry from lookup to lookup*/
            if (sortorder == 'A') {
                $(".icon-up").addClass("select");
                $(".icon-down").removeClass("select");
                _self.find(".lk_sortorder").find("option:selected").val('ASC');
            }
            else {
                $(".icon-up").removeClass("select");
                $(".icon-down").addClass("select");
                _self.find(".lk_sortorder").find("option:selected").val('DESC');
            }
            /* ------------------ END------------------ added by rama on 06-08-2018, Sorting Order varry from lookup to lookup*/
          //  if (_self.find(".dpl_sortcolmns").find("option:selected").val() != undefined) {
             if (_d_columns.find("option:selected").val() != undefined) {
                 //ObjParams.sortOrder = _self.find(".dpl_sortcolmns").find("option:selected").val().split('$')[0] + " " + _self.find(".lk_sortorder").find("option:selected").val();
                 ObjParams.sortOrder = _d_columns.find("option:selected").val().split('$')[0] + " " + _self.find(".lk_sortorder").find("option:selected").val();
            }
            else {
                ObjParams.sortOrder = "";
            }
            ObjParams.eventFlag = _eventFlagCount == 0 ? 1 : 0; /* added by rama, to differentiate whether the very first time DB hit is happening or not (on 04-06-2018)*/
            ObjParams.filtercreteria = filtercreteria; // $('[id*=hdnfiltercreteria]').val();
            $.ajax({
                type: "POST",
                url: _options.dataURL,
                dataType: "json",
                data: JSON.stringify(ObjParams),
                contentType: "application/json; charset=utf-8",
                error: function (jqXHR, textStatus, errorThrown) {
                    var err = textStatus + ', ' + errorThrown;
                 _self.find(".lk_tbl_body tbody").empty().append("<tbody><tr class=\"norecord\"><td style=\"text-align:left;\"><h2 class=\"error\"></h2></td></tr></tbody>");
                    $(".lookup-loader").hide();
                },
                success: function (jData) {
                    if (jData != null && jData.d !=null && jData.d[0] != null && jData.d[0].length > 0) {
                        var _total_records = "";
                        /* added by rama, to differentiate whether the very first time DB hit is happening or not (on 04-06-2018)*/
                        if (jData.d[1] == -1) {
                            _totalrecords.html(_Prevtotalrecords);
                            _total_records = _Prevtotalrecords;
                        }
                        else {
                            _totalrecords.html(jData.d[1]);
                            _total_records = parseInt(jData.d[1]);
                        }
                        _Prevtotalrecords = _total_records;
                        /*  up to here by rama (on 04-06-2018)*/
                        var _pSize = parseInt(ObjParams.pSize);
                        var _tpages = _total_records % _pSize > 0 ? (parseInt(_total_records / _pSize) + 1) : (_total_records / _pSize);
                        var _cPage = parseInt(ObjParams.pNumber);
                        _totalpages.html(_tpages); _self.find('.lk_footer .span_current_page').html(_cPage);
                        _first.prop('disabled', _cPage == 1);
                        _prev.prop('disabled', _cPage <= 1);
                        _next.prop('disabled', _cPage >= _tpages);
                        _last.prop('disabled', _cPage == _tpages);

                        var _data = jData.d[0];
                        _AJAXData = _data;
                        var _row = "";
                        for (var data in _data) {
                            /*Start key columns*/
                            var kc = _options.dataKey;
                            var _array = new Array();
                            for (var _kc = 0; _kc < kc.split(',').length; _kc++) {
                                _array[kc.split(',')[_kc]] = _data[data]['' + kc.split(',')[_kc] + ''];
                            }
                            /*End key columns*/
                            _row += "<tr class='callBackRow' data-kcname=\"" + kc.split(',')[0] + "\" data-kcid=\"" + _array[kc.split(',')[0]] + "\">";
                            _d_columns.find("option").each(function (i) {
                                var ddlVal = $(this).val();
                                var dtype = "";
                                if (ddlVal.indexOf('$') != -1) {
                                    ddlVal = ddlVal.split('$')[0];
                                    dtype = $(this).val().split('$')[1];
                                }

                                if (dtype != "" && dtype == "D") {
                                    if ($('[id*=hdnDateFormat]').val() != undefined) {
                                        var hdnDateFormat = $('[id*=hdnDateFormat]').val().trim();
                                    }
                                    if (hdnDateFormat == undefined || hdnDateFormat == null || hdnDateFormat == "") { hdnDateFormat = "YYYY-MM-DD"; }
                                    if ($('[id*=hdnTimeFormat]').val() != undefined) {
                                        var hdnTimeFormat = $('[id*=hdnTimeFormat]').val().trim();
                                    }
                                    if (hdnTimeFormat == undefined || hdnTimeFormat == null || hdnTimeFormat == "") { hdnTimeFormat = "HH:mm:ss"; }
                                    if (ddlVal.toUpperCase() == "DOB")
                                        hdnTimeFormat = "";
                                    if (hdnTimeFormat.trim() == "12 Hours") {
                                        hdnTimeFormat = "hh:mm:ss tt";
                                    }
                                    else if (hdnTimeFormat.trim() == "24 Hours") {
                                        hdnTimeFormat = "HH:mm:ss";
                                    }
                                    var dateFrmt = hdnDateFormat + " " + hdnTimeFormat;
                                    if (_data[data][ddlVal.toUpperCase()] != "") {
                                        //if (new Date(_data[data][ddlVal.toUpperCase()]).format(dateFrmt).trim() != "NaN--NaN" && new Date(_data[data][ddlVal.toUpperCase()]).format(dateFrmt).trim() != "NaN--NaN NaN:NaN:NaN") {
                                        _row += "<td>" + new Date(_data[data][ddlVal.toUpperCase()]).format(dateFrmt) + "</td>";
                                    } else {
                                        _row += "<td></td>";
                                    }
                                }
                                else {
                                    /* I Ashok With Time*/
                                    if (ddlVal.toUpperCase().indexOf('PC_REQ_DT') != -1
                                    || ddlVal.toUpperCase().indexOf('DUE_DT') != -1) {
                                        if (_data[data][ddlVal.toUpperCase()].toUpperCase().indexOf('AM') != -1) {

                                            if (new Date(_data[data][ddlVal.toUpperCase()].toUpperCase().replace('AM', '')) != "Invalid Date") {
                                                _row += "<td>" + new Date(_data[data][ddlVal.toUpperCase()].toUpperCase().replace('AM', '')).format($('[id*=hdnDateFormat]').val().trim() + ' ' + $('[id*=hdnTimeFormat]').val().trim()) + "</td>";
                                            }
                                            else {
                                                _row += "<td>" + _data[data][ddlVal.toUpperCase()] + "</td>";
                                            }
                                        }
                                        else if (_data[data][ddlVal.toUpperCase()].toUpperCase().indexOf('PM') != -1) {
                                            if (new Date(_data[data][ddlVal.toUpperCase()].toUpperCase().replace('PM', '')) != "Invalid Date") {
                                                _row += "<td>" + new Date(_data[data][ddlVal.toUpperCase()].toUpperCase().replace('PM', '')).format($('[id*=hdnDateFormat]').val().trim() + ' ' + $('[id*=hdnTimeFormat]').val().trim()) + "</td>";
                                            }
                                            else {
                                                _row += "<td>" + _data[data][ddlVal.toUpperCase()] + "</td>";
                                            }
                                        }
                                        else {
                                            if (new Date(_data[data][ddlVal.toUpperCase()]) != "Invalid Date") {
                                                _row += "<td>" + new Date(_data[data][ddlVal.toUpperCase()]).format($('[id*=hdnDateFormat]').val().trim() + ' ' + $('[id*=hdnTimeFormat]').val().trim()) + "</td>";
                                            }
                                            else {
                                                _row += "<td>" + _data[data][ddlVal.toUpperCase()] + "</td>";
                                            }
                                        }
                                    }
                                    /*End I Ashok With Time End*/
                                    /* I Ashok With Out Time*/
                                    else if ($(this).val().toUpperCase().indexOf('ACTIVITY_SCH_DT') != -1) {
                                        if (_data[data][ddlVal.toUpperCase()].toUpperCase().indexOf('AM') != -1) {
                                            if (new Date(_data[data][ddlVal.toUpperCase()].toUpperCase().replace('AM', '')) != "Invalid Date") {
                                                _row += "<td>" + new Date(_data[data][ddlVal.toUpperCase()].toUpperCase().replace('AM', '')).format($('[id*=hdnDateFormat]').val().trim()) + "</td>";
                                            }
                                            else {
                                                _row += "<td>" + _data[data][ddlVal.toUpperCase()] + "</td>";
                                            }
                                        }
                                        else if (_data[data][ddlVal.toUpperCase()].toUpperCase().indexOf('PM') != -1) {
                                            if (new Date(_data[data][ddlVal.toUpperCase()].toUpperCase().replace('PM', '')) != "Invalid Date") {
                                                _row += "<td>" + new Date(_data[data][ddlVal.toUpperCase()].toUpperCase().replace('PM', '')).format($('[id*=hdnDateFormat]').val().trim()) + "</td>";
                                            }
                                            else {
                                                _row += "<td>" + _data[data][ddlVal.toUpperCase()] + "</td>";
                                            }
                                        }
                                        else {
                                            if (new Date(_data[data][ddlVal.toUpperCase()]) != "Invalid Date") {
                                                _row += "<td>" + new Date(_data[data][ddlVal.toUpperCase()]).format($('[id*=hdnDateFormat]').val().trim()) + "</td>";
                                            }
                                            else {
                                                _row += "<td>" + _data[data][ddlVal.toUpperCase()] + "</td>";
                                            }
                                        }
                                    }
                                    /*End I Ashok With Out Time End*/
                                    else {
                                        _row += "<td>" + _data[data][ddlVal.toUpperCase()] + "</td>";
                                    }
                                }
                                //                                }
                            });
                            _row += "</tr>";
                        }

                        _self.find(".lk_tbl_body tbody").empty().append(_row);

                        resetEvents();

                        _self.find(".lk_tbl_body tbody").css('cursor', 'pointer');
                        _self.find(".resetSearch").val("0");

                        /* ............ Bhupathi ........... */


                        var clamp = function (num, min, max) {

                            return num < min ? min : (num > max ? max : num);
                        };



                        var selfid = _self[0].id;
                        var rows = $("div[id*=" + _self[0].id + "] table.lk_tbl_body tr");
                        //$(rows[1]).addClass('lookup-row-select');
                        // initial load add the selected class to the first non header row

                        if (status == false)
                            $(rows[index]).addClass('lookup-row-select');

                        var index = 0;
                        $('#' + selfid).on('keydown', function (e) {
                            e.stopPropagation();
                            // clear the selected class off of the row
                            $(rows[index]).removeClass('lookup-row-select');
                            // increment/decrement the index
                            switch (e.keyCode) {
                                case 40: // down
                                    index = clamp(index + 1, 1, rows.length - 1);
                                    break;
                                case 38: // up
                                    index = clamp(index - 1, 1, rows.length - 1);
                                    break;
                                /*
                                case 13:   // enter
                                $(rows[index]).click(rowClick($(rows[index])));
                                break;*/ 
                            }
                            // adds the "selected" class to all tds in the row
                            //if (count > 0)
                            $(rows[index]).addClass('lookup-row-select');
                            if (e.keyCode == 32 && e.ctrlKey) {
                                $(".callBackRow.lookup-row-select").click();
                            }
                            else if (e.keyCode == 40) {
                            }
                            //$(".callBackRow:nth-child("+index+")").click()
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
                                    /*$("#Lcmask").hide();*/

                                    _self.hide();
                                    $('.callBackRow').remove();
                                }
                            });

                            $('.fade').hide(); _autolk.val('');

                            return false;
                        };

                        /* ............ Bhupathi end ........... */

                    }
                    /* added by rama on 11-02-2019 to display No records found if the serached data is not there */
                    else {
                                     if (jData.d.length >= 0) {
                                      if (jData.d[1] == '0') {
                                     var _TRTD = "<tbody><tr class=\"norecord\"><td style=\"text-align:left;\"><h2 class=\"error\"><i class=\" icon-pencil-1\"></i>" + _noData + "</h2></td></tr></tbody>";
                            _self.find(".lk_tbl_body tbody").empty().append(_TRTD);
                            }
                            }
                       else if (defaultcount > 0) {
                            var _TRTD = "<tbody><tr class=\"norecord\"><td style=\"text-align:left;\"><h2 class=\"error\"><i class=\" icon-pencil-1\"></i>" + _noData + "</h2></td></tr></tbody>";
                            _self.find(".lk_tbl_body tbody").empty().append(_TRTD);
                        }
                        else{
                            var _TRTD = "<tbody><tr class=\"norecord\"><td style=\"text-align:left;\"><h2 class=\"error\"><i class=\" icon-pencil-1\"></i>" + _noData + "</h2></td></tr></tbody>";
                            _self.find(".lk_tbl_body tbody").empty().append(_TRTD);
                        }

                    }
                    /*   end  Rama */
                    $(".lookup-loader").hide();
                }
            });

            /* ............Lookup Dynamic Height   Written Bhupathi  start........... */

            var lookid = _self[0].id;
            var lrow1 = $("#" + lookid + " .lrow-1").outerHeight();
            var lrow12 = $("#" + lookid + " .lrow-12").outerHeight();
            var lrow13 = $("#" + lookid + " .lrow-13").outerHeight();
            var lrow14 = $("#" + lookid + " .lrow-14").outerHeight();
            var lrow15 = $("#" + lookid + " .lrow-15").outerHeight();
            var allrowH = lrow1 + lrow12 + lrow13 + lrow14 + lrow15;
            $("#" + lookid + " .lrow-2").css({ height: ($(".mainlookup").height() - allrowH) + "px" });
            $(window).resize(function () { $("#" + lookid + " .lrow-2").css({ height: ($(".mainlookup").height() - allrowH) + "px" }); });

            /* ............ Lookup Dynamic Height   Written Bhupathi end ........... */

        });

        /* _self.trigger("LoadAJAXData"); */
    };

} (jQuery));


function LookUpset() {
}

