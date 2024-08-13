function pageLoad() {
    document.getElementById('ctl00_ContentPlaceHolder1_UcCashDenom_hdntype').value = "shifthandover";
    document.getElementById('ctl00_ContentPlaceHolder1_hdndocname').value = "shifthandover";
    document.getElementById('ctl00_ContentPlaceHolder1_UcCashDenom_hdndocname').value = "H";
    document.getElementById('ctl00_ContentPlaceHolder1_ucShiftLog_txtSearchControl').style.display = 'none';
    if (document.getElementById('ctl00_ContentPlaceHolder1_hdnview').value == "VIEW" && document.getElementById('ctl00_ContentPlaceHolder1_UcCashDenom_hdntype').value == "shifthandover") {
        document.getElementById('ctl00_ContentPlaceHolder1_UcCashDenom_ImageButton1').style.display = "none";
        denominationsView();
        document.getElementById('ctl00_ContentPlaceHolder1_ucUser_txtSearchControl').disabled = true;
        document.getElementById('lk_btn_ctl00_ContentPlaceHolder1_ucUser').disabled = true;
        document.getElementById('ctl00_ContentPlaceHolder1_txttodate').disabled = true;
        document.getElementById('lk_btn_ctl00_ContentPlaceHolder1_ucShiftLog').disabled = true;
        document.getElementById('ctl00_ContentPlaceHolder1_txtRemarks').disabled = true;
    }
    else {
        AddPrecondition();
       // LoadPaymentGroups();
//        ShowCashDenomination();
        onPageValidation();
    }
    if (getParameterByName("MODE") == "ShiftLog") {
        OnShiftDetails();
    }
}
function LoadPaymentGroups() {
    GetNonAsync(
            "Private/ShiftLog/CashDenomination.aspx/GetPaymentgroups",
            {},
            function (JData) {
                var data = jQuery.parseJSON(JData.d);
                var _uipaygrpTemplate = _.template($("#view_cpaygrp").html());
                _bindpaygrpArray = data;
                $("#trviewpaygrp").append(_uipaygrpTemplate(_bindpaygrpArray));
            },
            function (jqXHR, textStatus, errorThrown) {
                AJAXInitiated = false;
            });

}

function onPageValidation() {
    var _chkValidation = true;
    var _ctrls = new Array();
    _ctrls[0] = 'ctl00_ContentPlaceHolder1_ucUser_txtSearchControl';
    _ctrls[1] = 'ctl00_ContentPlaceHolder1_txttodate';
    _ctrls[2] = 'ctl00_ContentPlaceHolder1_txtSubAmt';
    for (var i = 0; i < _ctrls.length; i++) {
        var ctrl = document.getElementById(_ctrls[i]);
        if (OnNullValue(ctrl) == false) {
            _chkValidation = false;
        }
        else {
            ctrl.style.border = '1px solid rgb(190,190,190)';
        }
    }
    return _chkValidation;
}

function OnUsers(input) {
    document.getElementById('ctl00_ContentPlaceHolder1_ucUser_txtSearchControl').value = input["_lktext"];
    if (input.USER_ID == undefined) {
        document.getElementById('ctl00_ContentPlaceHolder1__hiddenID').value = input.RESULT.USER_ID;
        document.getElementById('ctl00_ContentPlaceHolder1_ucUser__hiddenID').value = input.RESULT.USER_ID;

    }
    else {
        document.getElementById('ctl00_ContentPlaceHolder1__hiddenID').value = input.USER_ID;
        document.getElementById('ctl00_ContentPlaceHolder1_ucUser__hiddenID').value = input.USER_ID;
    }
    // PreConditions();
    OnNullValue(document.getElementById('ctl00_ContentPlaceHolder1_ucUser_txtSearchControl'));
    onPageValidation();
}
//function PreConditions() {

//    var _userid = document.getElementById('ctl00_ContentPlaceHolder1_hdnloginuser').value;
//    var _chkbxdt = '';
//    GetAsync(
//            "Private/ShiftLog/ShiftHandOver.aspx/AddPreContion",
//            { userid: _userid, chkbxdt: _chkbxdt },
//            function (JData) {
//            },
//            function (jqXHR, textStatus, errorThrown) {
//                alert(errorThrown);
//            });
//}

function OnChkAdvanceClick(ev) {
    var advAmt = document.getElementById('ctl00_ContentPlaceHolder1_txtadvamt').value;
    if (advAmt == undefined || advAmt == null || advAmt == '') { advAmt = "0"; }
    if (parseFloat(advAmt) <= 0) {
        document.getElementById('ctl00_ContentPlaceHolder1_chkISAdvHandover').checked = false;
    }
}

function OnShiftTiming(input) {
    ClearHandoveramts();
    if (input.IS_HAND_NOT_ALLOWED == "Y" && input.TYPE == "A") {
        $(".stoast").toastText("warning", "System doesn't allow this shift until the handovered shift submits...", 5, 3);
        ClearHandoveramts();
        return false;
    }
    if (input._lktext == undefined) {
        document.getElementById('ctl00_ContentPlaceHolder1_txtshiftNo').value = input.SHIFT_LOG_NO;
    }
    else {
        document.getElementById('ctl00_ContentPlaceHolder1_txtshiftNo').value = input["_lktext"];
    }
    
    var dtformat = document.getElementById('ctl00_ContentPlaceHolder1_dateformate').value;
    var timeformat = document.getElementById('ctl00_ContentPlaceHolder1_hdnTimeFormat').value;
    document.getElementById('ctl00_ContentPlaceHolder1_ucShiftLog_txtSearchControl').value = input["TO_TIME"];
    document.getElementById('ctl00_ContentPlaceHolder1_txtfromdate').value = new Date(input["FROM_TIME"]).format(dtformat) + " " + new Date(input["FROM_TIME"]).format(timeformat);
    document.getElementById('ctl00_ContentPlaceHolder1_txttodate').value = new Date(input["TO_TIME"]).format(dtformat) + " " + new Date(input["TO_TIME"]).format(timeformat);
    document.getElementById('ctl00_ContentPlaceHolder1_hdnisaudit').value = input["IS_AUDITED"];
    document.getElementById('ctl00_ContentPlaceHolder1_hdnfromdt').value = input["FROM_TIME"];
    document.getElementById('ctl00_ContentPlaceHolder1_hdntodt').value = input["TO_TIME"];
    document.getElementById('ctl00_ContentPlaceHolder1_txtRemarks').value = input["REMARKS"];
    var _fromdate = document.getElementById('ctl00_ContentPlaceHolder1_txtfromdate').value;
    var _todate = document.getElementById('ctl00_ContentPlaceHolder1_txttodate').value;
    var _Isaudit = document.getElementById('ctl00_ContentPlaceHolder1_hdnisaudit').value;
    var _userid = document.getElementById('ctl00_ContentPlaceHolder1_hdnloginuser').value;
    var _username = document.getElementById('ctl00_ContentPlaceHolder1_txtloginuser').value;
    if (input.ID == undefined) {
        document.getElementById('ctl00_ContentPlaceHolder1_ucShiftLog__hiddenID').value = input["SHIFT_LOG_ID"];
        var shiftlogid = document.getElementById('ctl00_ContentPlaceHolder1_ucShiftLog__hiddenID').value;
    }
    else {
        document.getElementById('ctl00_ContentPlaceHolder1_ucShiftLog__hiddenID').value = input["ID"];
    }
    document.getElementById('ctl00_ContentPlaceHolder1_txtSubAmt').disabled = false;
    if (document.getElementById('ctl00_ContentPlaceHolder1_txtadvamt').value != "")
        document.getElementById('ctl00_ContentPlaceHolder1_chkISAdvHandover').disabled = false;
    else
        document.getElementById('ctl00_ContentPlaceHolder1_chkISAdvHandover').disabled = true;

    var _id = input["USER_ID"];
    if (input.TYPE == "H") {
        _id = input["TO_USER_ID"];
    }
    var shiftcolsubmitid = input["SHIFT_COL_SUBMIT_ID"];
    if (shiftcolsubmitid != null && shiftcolsubmitid != undefined && shiftcolsubmitid != '' && shiftcolsubmitid != "0") {
        document.getElementById('ctl00_ContentPlaceHolder1_UcCashDenom_hdntype').value = "shifthandover";
        document.getElementById('ctl00_ContentPlaceHolder1_UcCashDenom_hdntransid').value = input["SHIFT_COL_SUBMIT_ID"];
        document.getElementById('ctl00_ContentPlaceHolder1_UcCashDenom_hdnFlag').value = 'S';
        document.getElementById('ctl00_ContentPlaceHolder1_UcCashDenom_ImageButton1').style.display = "none";
        denominationsView();
    }
    else {
        if (_id == null || _id == undefined || _id == '') { _id = "0"; }
        GetShiftCollection(input["SHIFT_LOG_ID"], _id);
    }
    onPageValidation();
     
}

//function GetShiftCollection(shiftlogid, userid) {
//    GetAsync(
//                          "Private/ShiftLog/CashDenomination.aspx/GetShiftCurrencies",
//                          { ShiftLogid: shiftlogid, Userid: userid },
//                          function (JData) {
//                              if (JData.d != null) {
//                                  BindShiftPaymentDenominations(JData.d, shiftlogid, userid);
//                                  status = "S";
//                              }
//                          },
//                          function (jqXHR, textStatus, errorThrown) {
//                              AJAXInitiated = false;
//                          });


//}

//function BindShiftPaymentDenominations(curlist, shiftlogid, userid) {
//    
//    for (i = 0; i < curlist[0].length; i++) {
//        activecurrId = curlist[0][i].CURRENCY_ID;
//        setTimeout(LoadShiftDenominations(curlist[0][i].CURRENCY_ID, curlist[0][i].CURRENCY_NAME, false, shiftlogid, userid), 2000);
//    }
//}

//function LoadShiftDenominations(currid, currname, _formatSelector, shiftlogid, userid) {
//    selectedcurrcount++;
//    controlArray.push(activecurrId);
//    $("#addtab").append('<span id="td_' + activecurrId + '" ><a href="#" class="showTab"  data-currid="' + activecurrId + '"  data-currname="' + currname + '">' + currname + '</a></span>');

//    var Transid = document.getElementById('ctl00_ContentPlaceHolder1_UcCashDenom_hdntransid').value;
//    var Flg = document.getElementById('ctl00_ContentPlaceHolder1_UcCashDenom_hdnFlag').value;
//    GetAsync(
//                   "Private/ShiftLog/CashDenomination.aspx/GetShiftCollectionByUser",
//                  { ShiftLogid: shiftlogid, Userid: userid, Currencyid: activecurrId },
//                  function (JData) {
//                      if (JData.d != null) {
//                          if (document.getElementById('ctl00_ContentPlaceHolder1_UcCashDenom_hdnstpcurrid').value != currid) {
//                              if (JData.d[0][0].EXCHANGE_RATE == "" || JData.d[0][0].EXCHANGE_RATE == null || JData.d[0][0].EXCHANGE_RATE == undefined) {
//                                  $(".stoast").toastText("warning", "System doesn't allow with out exchange rate configuration so, please contact administrator. ", 5, 3);
//                                  chk.checked = false;
//                                  onGetFilterData(currid, 'none');
//                                  return false;
//                              }
//                          }
//                          var data = JData;
//                          var _uicurrTemplate = _.template($("#view_cur").html());
//                          data.d[1] = currid;
//                          data.d[2] = currname;

//                          if (currid == document.getElementById('ctl00_ContentPlaceHolder1_UcCashDenom_hdnstpcurrid').value)
//                              document.getElementById('ctl00_ContentPlaceHolder1_UcCashDenom_hdexrate').value = 1;
//                          else {
//                              var exrate = JData.d[0][0].EXCHANGE_RATE != '' || JData.d[0][0].EXCHANGE_RATE != undefined ? JData.d[0][0].EXCHANGE_RATE : 1;
//                              document.getElementById('ctl00_ContentPlaceHolder1_UcCashDenom_hdexrate').value = parseFloat(exrate);
//                          }

//                          data.d[3] = document.getElementById('ctl00_ContentPlaceHolder1_UcCashDenom_hdexrate').value;
//                          _bindcurrArray = JData;

//                          if (_formatSelector) {
//                              $("#div_" + currid).html("");
//                              $("#div_" + currid).html(_uicurrTemplate(_bindcurrArray));
//                          }
//                          else {
//                              var _div = '<div id="div_header_' + currid + '" style="width: 43.2%;" class="panel-div ucAddress-div">'
//                              _div += '<div class="panel-heading"><h3>' + currname + '</h3><i id="btn_' + currid + '" onclick="return OnBtnClose(this);" class="icon-cancel-circled cancelcol"></i></div>'
//                              $("#trviewcurr").append(_div + '<div class="currtab" id="div_' + currid + '">' + _uicurrTemplate(_bindcurrArray) + '</div></div>');
//                          }

//                          $(".showTab").removeAttr("style");
//                          $("#td_" + activecurrId + " a.showTab").css({ "background": "#01a2d8", "color": "white" });

//                          //$(".currtab").hide();
//                          $("#div_" + currid).show();


//                          $(".showTab").on("click", function (e) {
//                              e.stopPropagation();
//                              $(".currtab").hide();
//                              $(".showTab").css({ "background": "white", "color": "black" });
//                              $(this).css({ "background": "#01a2d8", "color": "white" });
//                              $("#div_" + $(this).data("currid")).show();
//                              activecurrId = $(this).data("currid");
//                              document.getElementById('ctl00_ContentPlaceHolder1_UcCashDenom_lblCurrName').innerHTML = $(this).data("currname");

//                          });

//                          CalculateShiftAmount(currid);
//                      }

//                  },
//                  function (jqXHR, textStatus, errorThrown) {
//                      AJAXInitiated = false;
//                  });
//    $("#div_" + activecurrId).show();
//}


function Mandatoryfields(obj) {
    if (document.getElementById('ctl00_ContentPlaceHolder1_ucUser_txtSearchControl').value == "") {
        $(".stoast").toastText("warning", "Please select Handover From!.", 5, 3);
        document.getElementById('ctl00_ContentPlaceHolder1_ucUser_txtSearchControl').focus();
        return false;
    }
    if (document.getElementById('ctl00_ContentPlaceHolder1_txttodate').value == '') {
        $(".stoast").toastText("warning", "Please select shift!.", 5, 3);
        document.getElementById('ctl00_ContentPlaceHolder1_txttodate').focus();
        return false;
    }
    return ConfirmationToasterForSave(obj, '', "Shift Handover");
}

function OnSuccessContinue() {
    saveshifthandover();
    __doPostBack($('[id*=imgbtnSave]').attr("name"), "");
}
function OnFailureContinue() {
    return false;
}
function OnSuccessMessage() {
    $(".smessagebox").scustommessagebox(1, "Shift Handover", "Shift Handover Saved Successfully", OnSuccessMsg);
}
function Titlealert(id, Status, reportpath) {
    if (Status == 'True' || Status == true) {
        $(".smessagebox").scustommessagebox(1, "Shift Handover", "Saved Sucessfully. Click Ok to get Report", Reportokalert, id + ',' + reportpath, ReportNoalert);
    }
}
function Reportokalert(params) {
    var reportpath = params.split(',')[1];
    window.open(_iniUrl + "Private/Reports/HIMSReportViewer.aspx?rptPath=" + reportpath + "&tid=" + params.split(',')[0]);
    window.location.replace(_iniUrl + 'Private/ShiftLog/ShiftHandOver.aspx');
}
function ReportNoalert() {
    window.location.replace(_iniUrl + 'Private/ShiftLog/ShiftHandOver.aspx');
    return false;
}
function OnSuccessMsg() {
    window.location.replace(_iniUrl + 'Private/ShiftLog/ShiftHandOver.aspx');
}
function OnFialMsg() {
    window.location.replace(_iniUrl + 'Private/ShiftLog/ShiftHandOver.aspx');
}

function OnUpdateMessage() {
    $(".smessagebox").scustommessagebox(1, "Shift Handover", "Shift Handover Updated Successfully!", OnSuccessMsg);
}
function OnFail() {
    $(".stoast").toastText("Info", "Failed to save", 5, 3);
}
function ChkNumbersOnly(evt) {

    evt = (evt) ? evt : window.event;
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57) && (charCode < 96 || charCode > 105)) {
        return false;
    }
    return true;
}



function OnTranInfoClick(ev) {
    var shiftLogId = document.getElementById('ctl00_ContentPlaceHolder1_ucShiftLog__hiddenID').value;
    if (shiftLogId != '' && shiftLogId != undefined && shiftLogId != null) {
    ShowTranInfo(shiftLogId);
    }
}
