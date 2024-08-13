(function ($) {
    $.fn.AutoCompletion = function (options) {
        var _optionselectposition = 0;
        var _timeout;
        var _options = options;
        var __txt_auto = _options.AutoComptextboxid;
        var __hdnLocID = _options.hdnLocIDValue;
        var _txt_auto_options = $(_options.AutoComptextboxoptions);
        var ____checkAJAXTimer;

        __txt_auto.keyup(function (event) {
            if (event.keyCode === 13 || event.keyCode === 40 || event.keyCode === 38 || event.keyCode === 37 || event.keyCode === 39) {

                return false;
            }
            clearTimeout(_timeout);

            _timeout = setTimeout(function () {
                var _prams = new Object();
                _prams.prefixText = __txt_auto.val();
                if (_options.count != undefined && _options.count != null) {
                    _prams.count = _options.count;
                }
                if (_options._extraKey != undefined) {
                    if (_options._fdt != undefined && _options._tdt != undefined && _options.SerparationKey != undefined)
                        _prams.contextKey = $(_options._fdt).val() + _options.SerparationKey + $(_options._tdt).val() + _options._extraKey + $(_options.contextKey).val();
                    else
                        _prams.contextKey = _options._extraKey + $(_options.contextKey).val();
                }
                else {
                    if ($(_options.contextKey).val() != undefined) {
                        _prams.contextKey = $(_options.contextKey).val();
                    }
                    else
                        _prams.contextKey = "";
                }

                $.ajax({
                    type: "POST",
                    url: _options.autoSuggest,
                    dataType: "json",
                    data: JSON.stringify(_prams),
                    contentType: "application/json; charset=utf-8",
                    error: function (jqXHR, textStatus, errorThrown) {
                    },
                    success: function (jdata) {
                        _optionselectposition = -1;
                        var _ul = "<ul>";
                        $(jdata.d).each(function (i, j) {
                            _ul += "<li><a href='#' class='ajaxoptions'>" + $.parseJSON(j).First + "</a><span style=display:none;>'" + $.parseJSON(j).Second + "'</span></li>";
                        });
                        _ul += "</ul>";
                        _txt_auto_options.empty().html(_ul).css({ "top": __txt_auto.outerHeight() + "px", "min-width": __txt_auto.outerWidth() + "px" }).show();
                        _txt_auto_options.find("ul li a").click(function (event) {
                            var tb = $.parseJSON(eval($.trim($(this).next("span").html())));
                            __txt_auto.val($(this).html());
                            __hdnLocID.val(tb.Value);
                            _txt_auto_options.hide();
                            UniverseReturnPreviousObj(tb, __hdnLocID.val());
                        });
                    }
                });

            }, 100);
        });

        __txt_auto.keydown(function (event) {
            if (event.keyCode === 9) {
                $(".lk_auto_options").hide();
                _txt_auto_options.hide();
            }
            var _licount = _txt_auto_options.find("ul li").size();
            var _displayData;
            var _cobj;

            if (event.keyCode === 13) {

                _height = 0;
                //                var tb = {};
                //                tb.Value = __hdnLocID.val();
                //                tb.Text = __txt_auto.val();
                //                UniverseReturnPreviousObj(tb, __hdnLocID.val());
                var tbl = ''; var textCase = '';
                _txt_auto_options.find("ul li a").each(function (e) {
                    if ($(this).html().toUpperCase().trim() == __txt_auto.val().toUpperCase().trim()) {
                        textCase = '1';
                        tbl = $.parseJSON(eval($.trim($(this).next("span").html())));
                        __txt_auto.val($(this).html());
                        __hdnLocID.val(tbl.Value);
                    }
                });

                if (textCase == '') {
                    tbl = $.parseJSON(eval($.trim(_txt_auto_options.find("ul li a").next("span").html())));
                    __txt_auto.val(_txt_auto_options.find("ul li a").html());
                    __hdnLocID.val(tbl.Value);
                }
                _txt_auto_options.hide();
                UniverseReturnPreviousObj(tbl, __hdnLocID.val());

                _txt_auto_options.hide();
                return false;
            }

            if (event.keyCode === 40) {
                $(this).removeClass("autohightlight");
                if (_optionselectposition < _licount - 1) {
                    _optionselectposition++;
                }
                var Scroll = false;
                _txt_auto_options.find("ul li").each(function (i, j) {
                    $(this).removeClass("autohightlight");
                    var _txt_auto_options_div = $(this).parent().parent();
                    if (_optionselectposition === 0 && i === 0) {
                        _height = 0;
                    }
                    if (_optionselectposition > _licount) {
                        Scroll = false;
                    }
                    if (_optionselectposition == i) {
                        _height += $(this).height();
                        if (_txt_auto_options_div.height() <= _height)
                            Scroll = true;

                        _displayData = $(this).find("a").html();
                        var tb = $.parseJSON(eval($.trim($(this).find('span').html())));
                        $(this).addClass("autohightlight");
                        __txt_auto.val(_displayData);
                        __hdnLocID.val(tb.Value);

                    }
                });
                if (_optionselectposition > 1)
                    _txt_auto_options.scrollTop(_txt_auto_options.scrollTop() + 20);
                $(this).val(_displayData);
            }
            else if (event.keyCode === 38) {
                if (_optionselectposition <= _licount && _optionselectposition >= 0) {
                    _optionselectposition--;
                }
                if (_optionselectposition != -1 && _optionselectposition <= _licount) {
                    _txt_auto_options.find("ul li").each(function (i, j) {
                        $(this).removeClass("autohightlight");

                        var _txt_auto_options_div = $(this).parent().parent();
                        if (_optionselectposition > _licount) {
                            Scroll = false;
                        }
                        if (_optionselectposition == i) {
                            _height -= $(this).height();

                            if ((_txt_auto_options_div.height()) >= (_height - 50))
                                Scroll = true;

                            _displayData = $(this).find("a").html();
                            var tb = $.parseJSON(eval($.trim($(this).find('span').html())));
                            $(this).addClass("autohightlight");
                            __txt_auto.val(_displayData);
                            __hdnLocID.val(tb.Value);

                        }
                    });

                    _txt_auto_options.scrollTop(_txt_auto_options.scrollTop() - 20);

                    $(this).val(_displayData);
                }
            }
        });



    };

} (jQuery));