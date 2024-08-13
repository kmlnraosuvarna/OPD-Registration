

var _optionselectposition = 0;
var global_cobj = {}; var _lk_Text = ''
function AutoArrowSelection(options) {
    var _makeAutoTxtBxId = options.txtBoxID || "";
    var _makeTxtBx = options.txtBx || "";
    var _makeAutoTxtBxOptionsId = options.OptionsDivID || "";
    var Name = options.Name || "";
    var ____height = 0;

    _makeAutoTxtBxId.blur(function () {
        ____checkAJAXTimer = setTimeout(function () {
            if (!$(_makeAutoTxtBxId).attr('onkeypress').match(/Area/)) {
                if (_lk_Text == "") { _makeAutoTxtBxId.val(''); _makeAutoTxtBxId.css('border', '1px solid rgb(244,120,94)'); }
                if (_makeAutoTxtBxId.val() !== "" && _lk_Text !== _makeAutoTxtBxId.val()) {
                    $(".stoast").toastText("warning", "Invalid Entry,Please Select Value Property", 5, 3);
                    _makeAutoTxtBxId.val("");
                    _makeAutoTxtBxId.css('border', '1px solid rgb(244,120,94)');
                    _makeAutoTxtBxId.focus();
                    _lk_Text = "";
                }
            }
        }, 100);
    });


    _makeAutoTxtBxId.keydown(function (event) {
        var _licount = _makeAutoTxtBxOptionsId.find("ul li").size();
        var _displayData;
        var _cobj;
        /*Code for Ristrict Enter Key*/
        if (event.keyCode === 13) {
            ____height = 0;
            _makeAutoTxtBxOptionsId.empty();
            _makeAutoTxtBxOptionsId.hide();
            ReturnPreviousObj(global_cobj.RESULT, _makeTxtBx);
            _optionselectposition = 0;
            event.stopImmediatePropagation();
            return false;
        }
        /*Code for KeyDown Arrow Press */
        if (event.keyCode === 40) {
            event.stopImmediatePropagation();
            $(this).removeAttr("style");
            if (_optionselectposition < _licount) {
                _optionselectposition++;
            }
            var Scroll = false;
            _makeAutoTxtBxOptionsId.find("ul li").each(function (i, j) {
                $(this).removeAttr("style");
                var _makeAutoTxtBxOptionsId_div = $(this).parent().parent();
                if (_optionselectposition === 0 && i === 0) {
                    ____height = 0;
                }
                if (_optionselectposition > _licount) {
                    Scroll = false;
                }
                if (_optionselectposition == i + 1 && _optionselectposition <= _licount) {
                    if (((_licount) * 25) > ____height && _licount > 0)
                        ____height += $(this).height();
                    if (_makeAutoTxtBxOptionsId_div.height() <= ____height)
                        Scroll = true;
                    _displayData = $(this).find("a").html();
                    var tb = $.parseJSON(eval($.trim($(this).find('span').html())));
                    $(this).css({ "background": "#14b2db" });
                    var _cobj = {};
                    _cobj._lktext = _displayData;
                    _cobj.ID = tb.Value;
                    _cobj.RESULT = tb;
                    global_cobj = _cobj;
                }
            });
            if (Scroll) {
                _makeAutoTxtBxOptionsId.scrollTop(____height);
            }
            $(this).val(_displayData);
            _lk_Text = _displayData;
        }
        else if (event.keyCode === 38) {
            event.stopImmediatePropagation();
            if (_optionselectposition <= _licount && _optionselectposition >= 0) {
                _optionselectposition--;
            }
            if (_optionselectposition > 0 && _optionselectposition <= _licount) {
                _makeAutoTxtBxOptionsId.find("ul li").each(function (i, j) {
                    $(this).next().removeAttr("style");
                    var _makeAutoTxtBxOptionsId_div = $(this).parent().parent();
                    if (_optionselectposition > _licount) {
                        Scroll = false;
                    }
                    if (_optionselectposition == (i + 1) && _optionselectposition >= 0) {
                        if (____height > 0)
                            ____height -= $(this).height();
                        if ((_makeAutoTxtBxOptionsId_div.height() - 100) >= (____height - 100))
                            Scroll = true;

                        _displayData = $(this).find("a").html();
                        var tb = $.parseJSON(eval($.trim($(this).find('span').html())));
                        $(this).css({ "background": "#14b2db" });
                        var _cobj = {};
                        _cobj._lktext = _displayData;
                        _cobj.ID = tb.Value;
                        _cobj.RESULT = tb;
                        global_cobj = _cobj;
                    }
                });
                if (Scroll) {
                    _makeAutoTxtBxOptionsId.scrollTop(____height - 100);
                }
                $(this).val(_displayData);
                _lk_Text = _displayData;
                /*End For _optionselectposition!=-1 && _optionselectposition<=_licount*/
            }
            else {
                $(this).val('');
            }
        }
    });
}

function makeTxtBxAuto(obj, Name) {
    ACName = Name;
    RetCount = 0;
    var _Url = '';
    var UrlVal = ReturnIniUrl();
    var ArrowFlag = false;
    switch (Name) {
        case "Referal": _Url = UrlVal + "Private/FrontOffice/NewPatientRegistration.aspx/SearchReferals";
            break;
        case "Referalval": _Url = UrlVal + "Private/FrontOffice/OpBilling/OPRegConBilling.aspx/SearchReferals";
            break;
        case "Services": _Url = UrlVal + "ServiceMasterWebService.asmx/GetAutoCompleteSErviceInfo"; set_contextKey = null;
            break;
        case "State": _Url = UrlVal + "AddressMasterService.asmx/GetAutoComp_state";
            break;
        case "District": _Url = UrlVal + "AddressMasterService.asmx/GetAutoComp_District";
            break;
        case "City": _Url = UrlVal + "AddressMasterService.asmx/GetAutoComp_City";
            break;
        case "Area": _Url = UrlVal + "AddressMasterService.asmx/GetAutoComp_area";
            break;
        case "Employee": _Url = UrlVal + "Private/FrontOffice/NewPatient.aspx/Searchpatienttype";
            break;
        case "IssueAt": _Url = UrlVal + "AutoCompleteService.asmx/GetAutoComp_Area";
            break;
        case "PPIssueAt": _Url = UrlVal + "AddressMasterService.asmx/GetAutoComp_City2";
            break;
        case "DSCHRGIPNO": _Url = UrlVal + "Private/FrontOffice/IPBilling/AllIpDischarge.aspx/GetDischrgeAdmnNoAutoComp";
            break;
        default: _Url = "";
            break;

    }
    var _timeout = 100;
    var _auto_lk_txt = $(obj);
    var _auto_lk_options = $(obj).parent().find('div');
    clearTimeout(_timeout);



    if (obj.keyCode === 13 || obj.keyCode === 40 || obj.keyCode === 38 || obj.keyCode === 37 || obj.keyCode === 39) {
        return false;
    }
    if ($(obj).val().length > -1) {
        ArrowFlag = true;
        _timeout = setTimeout(function () {
            var _prams = new Object();
            _prams.prefixText = _auto_lk_txt.val();
            _prams.count = parseInt("0");
            _prams.contextKey = set_contextKey;
            $.ajax({
                type: "POST",
                url: _Url,
                dataType: "json",
                data: JSON.stringify(_prams),
                contentType: "application/json; charset=utf-8",
                error: function (jqXHR, textStatus, errorThrown) {

                },
                success: function (jdata) {
                    if (jdata.d != null) {
                        if (jdata.d.length > 0)
                            ArrowFlag = true;
                        else
                            ArrowFlag = false;
                    }

                    var _ul = "<ul>";
                    $(jdata.d).each(function (i, j) {
                        _ul += "<li><a href='#' class='ajaxoptions'>" + $.parseJSON(j).First + "</a><span style=display:none;>'" + $.parseJSON(j).Second + "'</span></li>";
                    });
                    _ul += "</ul>";
                    _auto_lk_options.empty().html(_ul).css({ "top": _auto_lk_txt.outerHeight() + "px", "min-width": _auto_lk_txt.outerWidth() + "px" }).show();
                    _auto_lk_options.find("ul li a").click(function (event) {
                        var tb = $.parseJSON(eval($.trim($(this).next("span").html())));
                        _auto_lk_txt.val($(this).html());
                        _lk_Text = $(this).html();
                        _auto_lk_options.hide();
                        DataHidding = true;
                        switch (Name) {
                            case "Referal": _optionselectposition = 0; _lk_Text = ''; OnItemReferal(tb, this);
                                break;
                            case "Referalval": _optionselectposition = 0; _lk_Text = ''; OnItemReferal(tb, this);
                                break;
                            case "Services": _optionselectposition = -1; _lk_Text = ''; OnItemSelection(tb, obj);
                                break;
                            case "State": _optionselectposition = 0; _lk_Text = ''; OnStateSelection(tb, this); console.log($(this).html());
                                break;
                            case "District": _optionselectposition = 0; _lk_Text = ''; OnDistricSelection(tb, this);
                                break;
                            case "City": _optionselectposition = 0; _lk_Text = ''; OncitySelection(tb, this);
                                break;
                            case "Area": _optionselectposition = 0; _lk_Text = ''; Onareaselection(tb, this);
                                break;
                            case "Employee": _optionselectposition = 0; _lk_Text = ''; OnItempatienttypeSelected(tb, this);
                                break;
                            case "IssueAt": _optionselectposition = 0; _lk_Text = ''; Onissuedatselection(tb, this);
                                break;
                            case "PPIssueAt": _optionselectposition = 0; _lk_Text = ''; Onissuedatselection1(tb, this);
                                break;
                            case "DSCHRGIPNO": _optionselectposition = 0; _lk_Text = ''; OnDischargeIPNOAutoCompeteSuccess(tb, this);
                                break;
                            default: "";
                                break;
                        }
                        $(this).next().hide();
                    });
                    if (jdata.d != null) {
                        if (jdata.d.length == 0) {
                            ArrowFlag = false;
                            _auto_lk_options.empty();
                            _auto_lk_options.removeClass("autohightlight");

                            _auto_lk_options.hide();
                            switch (Name) {
                                case "Referal":
                                    setTimeout(function () {
                                        if ($(obj).val() !== "" && $(obj).val() != $('#ctl00_ContentPlaceHolder1_hdnReferalName').val()) {

                                            $(obj).val(''); return false;

                                        }
                                    }, 1000);
                                    break;
                                default: "";
                                    break;
                            }
                        }
                    }
                }
            });

        }, 100);
    }
    if (ArrowFlag) {
        var AutoArrowOpitions = {};
        AutoArrowOpitions.txtBoxID = $(obj);
        AutoArrowOpitions.txtBx = obj;
        AutoArrowOpitions.OptionsDivID = $(obj).parent().find('div');
        AutoArrowOpitions.Name = Name.trim();
        return AutoArrowSelection(AutoArrowOpitions);
    }

}
function FocusHideAutoCompletion(obj) {
    $(obj).parent().find('div').hide();
}
function HideAutoCompletion(obj) {
   document.getElementById(obj.id).value=document.getElementById(obj.id).value.toUpperCase();
}
function ReturnPreviousObj(objval, obj) {
    var Name = ACName;
    if (RetCount == 0) {
        RetCount++;
        switch (Name) {
            case "Referal": _optionselectposition = 0; OnItemReferal(objval, obj);
                break;
            case "Referalval": _optionselectposition = 0; OnItemReferal(objval, obj);
                break;
            case "Services": _optionselectposition = -1; OnItemSelection(objval, obj);
                break;
            case "State": _optionselectposition = 0; OnStateSelection(objval, this);
                break;
            case "District": _optionselectposition = 0; OnDistricSelection(objval, this);
                break;
            case "City": _optionselectposition = 0; OncitySelection(objval, this);
                break;
            case "Area": _optionselectposition = 0; Onareaselection(objval, this);
                break;
            case "Employee": _optionselectposition = 0; OnItempatienttypeSelected(objval, this);
                break;
            case "IssueAt": _optionselectposition = 0; Onissuedatselection(objval, this);
                break;
            case "PPIssueAt": _optionselectposition = 0; Onissuedatselection1(objval, this);
                break;
            case "DSCHRGIPNO": _optionselectposition = 0, OnDischargeIPNOAutoCompeteSuccess(objval, this);
                break;
            default: "";
                break;
        }
    }
}