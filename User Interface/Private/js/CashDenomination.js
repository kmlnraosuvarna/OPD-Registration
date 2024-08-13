  function numeralsOnly(evt) {
    evt = (evt) ? evt : event;
    var charCode = (evt.charCode) ? evt.charCode : ((evt.keyCode) ? evt.keyCode : ((evt.which) ? evt.which : 0));
    if (charCode > 31 && (charCode < 48 || charCode > 57))
        return false;
    return true;
}

function ModifyEnterKeyPressAsTab() {
    if (window.event && window.event.keyCode == 13) {
        window.event.keyCode = 9;
    }
}

function CashDenom(txtCurrent, _txtGrandAmtID, _hdnTotalAmtID) { 
    var i = 0;
    var count = 0;
    var Cash = 0;
    var Total = 0;
    var GradTotal = 0;
    var grid = document.getElementById(txtCurrent.parentNode.parentNode.parentNode.parentNode.id);
    for (i = 1; i <= grid.rows.length - 1; i++) {
        count = grid.rows[i].cells[0].childNodes[0].value;
        if (count != "" && count != NaN) {
            Cash = grid.rows[i].cells[2].childNodes[0].innerText;
            Total = parseInt(count) * parseInt(Cash);
            grid.rows[i].cells[4].childNodes[0].innerText = Total;
            GradTotal = GradTotal + Total;
        }
        else
            grid.rows[i].cells[4].childNodes[0].innerText = 0;
    }
    document.getElementById(_txtGrandAmtID).value = GradTotal;
    document.getElementById(_hdnTotalAmtID).value = GradTotal;

}

function ClickEvent() {
    var DiscountIdValueFlag = false;
    $("#lblrupee").click(function () {  
        $("#lblpound,#lbldinar,#lblpound,#lbldoller,#lblusd").removeClass("select");
        $("#lblrupee").addClass("select");
        $('[id*=divrupee]').css('display', 'block');
        $('[id*=divdinar]').css('display', 'none');
        $('[id*=divpound]').css('display', 'none');
        $('[id*=divdoller]').css('display', 'none');
        $('[id*=divusd]').css('display', 'none');
        $('[id*=divrupee]').css('width', '100%')
    });
    $("#lbldinar").click(function () {
        $("#lblrupee,#lblpound,#lbldoller,#lblusd").removeClass("select");
        $("#lbldinar").addClass("select");
        $('[id*=divdinar]').css('display', 'block');
        $('[id*=divrupee]').css('display', 'none');
        $('[id*=divdoller]').css('display', 'none');
        $('[id*=divpound]').css('display', 'none');
        $('[id*=divusd]').css('display', 'none');
        $('[id*=divdinar]').css('width', '100%');
    });

    $("#lblpound").click(function () {
        $("#lblrupee,#lbldinar,#lbldoller,#lblusd").removeClass("select");
        $("#lblpound").addClass("select");
        $('[id*=divpound]').css('display', 'block');
        $('[id*=divrupee]').css('display', 'none');
        $('[id*=divdinar]').css('display', 'none');
        $('[id*=divdoller]').css('display', 'none');
        $('[id*=divusd]').css('display', 'none');
        $('[id*=divpound]').css('width', '100%');
    });
    $("#lbldoller").click(function () {    
        $("#lblrupee,#lblpound,#lbldinar,#lblusd").removeClass("select");
        $("#lbldoller").addClass("select");
        $('[id*=divdoller]').css('display', 'block');
        $('[id*=divrupee]').css('display', 'none');
        $('[id*=divdinar]').css('display', 'none');
        $('[id*=divpound]').css('display', 'none');
        $('[id*=divusd]').css('display', 'none');
        $('[id*=divdoller]').css('width', '100%');
    });
    $("#lblusd").click(function () {
        $("#lblrupee,#lbldinar,#lblpound,#lbldoller").removeClass("select");
        $("#lblusd").addClass("select");
        $('[id*=divusd]').css('display', 'block');
        $('[id*=divrupee]').css('display', 'none');
        $('[id*=divdinar]').css('display', 'none');
        $('[id*=divdoller]').css('display', 'none');
        $('[id*=divpound]').css('display', 'none');
        $('[id*=divusd]').css('width', '100%');

    });
}
function CalAmount(cashdenCount, cashdenAmt, txtTot) {   
    var sum = 0;
    var Total = 0;
    var count = 0, amt = 0;
    $("table[id*=gvCashDenom] tr:has(td)").each(function (e) {
        count = $(this).closest('tr').find("input[type=text][id*=txtCount]").val();
        amt = $(this).closest('tr').find("[id*=lblAmount]").text();
        if (count != "" && count != NaN) {
            $(this).closest('tr').find("input[type=text][id*=txttotal]").val(parseInt(count) * parseInt(amt));
            sum = sum + parseInt(count) * parseInt(amt);
        }
        else
            $(this).closest('tr').find("input[type=text][id*=txttotal]").val(0);
    });  
    document.getElementById('ctl00_ContentPlaceHolder1_UcCashDenom_hdrupee').value = sum;
    document.getElementById('ctl00_ContentPlaceHolder1_UcCashDenom_hdhold').value = sum;
     document.getElementById('ctl00_ContentPlaceHolder1_UcCashDenom_hdcurrid').value = 1;
    Exchange(1);

}

function CalAmount_dinar(cashdenCount, cashdenAmt, txtTot) {
    var sum = 0;
    var Total = 0;
    var count = 0, amt = 0;
    $("table[id*=grddinar] tr:has(td)").each(function (e) {
        count = $(this).closest('tr').find("input[type=text][id*=txtCount]").val();
        amt = $(this).closest('tr').find("[id*=lblAmount]").text();
        if (count != "" && count != NaN) {
            $(this).closest('tr').find("input[type=text][id*=txttotal]").val(parseInt(count) * parseInt(amt));
            sum = sum + parseInt(count) * parseInt(amt);
        }
        else
            $(this).closest('tr').find("input[type=text][id*=txttotal]").val(0);
    });  
    document.getElementById('ctl00_ContentPlaceHolder1_UcCashDenom_hddinar').value = sum;
    document.getElementById('ctl00_ContentPlaceHolder1_UcCashDenom_hdhold').value = sum;
    document.getElementById('ctl00_ContentPlaceHolder1_UcCashDenom_hdcurrid').value = 2;
    Exchange(2); 
}

function CalAmount_pound(cashdenCount, cashdenAmt, txtTot) {
    var sum = 0;
    var Total = 0;
    var count = 0, amt = 0;
    $("table[id*=grdpound] tr:has(td)").each(function (e) {
        count = $(this).closest('tr').find("input[type=text][id*=txtCount]").val();
        amt = $(this).closest('tr').find("[id*=lblAmount]").text();
        if (count != "" && count != NaN) {
            $(this).closest('tr').find("input[type=text][id*=txttotal]").val(parseInt(count) * parseInt(amt));
            sum = sum + parseInt(count) * parseInt(amt);
        }
        else
            $(this).closest('tr').find("input[type=text][id*=txttotal]").val(0);
    });
    document.getElementById('ctl00_ContentPlaceHolder1_UcCashDenom_hdpound').value = sum;
    document.getElementById('ctl00_ContentPlaceHolder1_UcCashDenom_hdhold').value = sum;
     document.getElementById('ctl00_ContentPlaceHolder1_UcCashDenom_hdcurrid').value = 240;
    Exchange(240);
}
function CalAmount_doller(cashdenCount, cashdenAmt, txtTot) {
    var sum = 0;
    var Total = 0;
    var count = 0, amt = 0;
    $("table[id*=grddoller] tr:has(td)").each(function (e) {
        count = $(this).closest('tr').find("input[type=text][id*=txtCount]").val();
        amt = $(this).closest('tr').find("[id*=lblAmount]").text();
        if (count != "" && count != NaN) {
            $(this).closest('tr').find("input[type=text][id*=txttotal]").val(parseInt(count) * parseInt(amt));
            sum = sum + parseInt(count) * parseInt(amt);
        }
        else
            $(this).closest('tr').find("input[type=text][id*=txttotal]").val(0);
    });


    document.getElementById('ctl00_ContentPlaceHolder1_UcCashDenom_txtdoller').value = sum;
    document.getElementById('ctl00_ContentPlaceHolder1_UcCashDenom_hdhold').value = sum;
     document.getElementById('ctl00_ContentPlaceHolder1_UcCashDenom_hdcurrid').value = 244;
    Exchange(244);  
}
function CalAmount_usd(cashdenCount, cashdenAmt, txtTot) {
    var sum = 0;
    var Total = 0;
    var count = 0, amt = 0;
    $("table[id*=grdusd] tr:has(td)").each(function (e) {
        count = $(this).closest('tr').find("input[type=text][id*=txtCount]").val();
        amt = $(this).closest('tr').find("[id*=lblAmount]").text();
        if (count != "" && count != NaN) {
            $(this).closest('tr').find("input[type=text][id*=txttotal]").val(parseInt(count) * parseInt(amt));
            sum = sum + parseInt(count) * parseInt(amt);
        }
        else
            $(this).closest('tr').find("input[type=text][id*=txttotal]").val(0);
    });

    document.getElementById('ctl00_ContentPlaceHolder1_UcCashDenom_txtusd').value = sum;
    document.getElementById('ctl00_ContentPlaceHolder1_UcCashDenom_hdhold').value = sum;
     document.getElementById('ctl00_ContentPlaceHolder1_UcCashDenom_hdcurrid').value = 248;
    Exchange(248,sum);
}

function Calculate() {   
debugger
    var SubTotal = parseInt(document.getElementById('ctl00_ContentPlaceHolder1_UcCashDenom_txtrupee').value) + parseInt(document.getElementById('ctl00_ContentPlaceHolder1_UcCashDenom_txtdinar').value) + parseInt(document.getElementById('ctl00_ContentPlaceHolder1_UcCashDenom_txtpound').value) + parseInt(document.getElementById('ctl00_ContentPlaceHolder1_UcCashDenom_txtdoller').value) + parseInt(document.getElementById('ctl00_ContentPlaceHolder1_UcCashDenom_txtusd').value);
    document.getElementById('ctl00_ContentPlaceHolder1_txtSubAmt').value = SubTotal;
    document.getElementById('ctl00_ContentPlaceHolder1_hdnAdvAmt').value = SubTotal;

}

function Calculate1() {
    var SubTotal = parseInt(document.getElementById('ctl00_ContentPlaceHolder1_UcCashDenom_txtrupee').value) + parseInt(document.getElementById('ctl00_ContentPlaceHolder1_UcCashDenom_txtdinar').value) + parseInt(document.getElementById('ctl00_ContentPlaceHolder1_UcCashDenom_txtpound').value) + parseInt(document.getElementById('ctl00_ContentPlaceHolder1_UcCashDenom_txtdoller').value) + parseInt(document.getElementById('ctl00_ContentPlaceHolder1_UcCashDenom_txtusd').value);
    document.getElementById('ctl00_ContentPlaceHolder1_txtSubAmt').value = SubTotal;
    document.getElementById('ctl00_ContentPlaceHolder1_hdnAdvAmt').value = SubTotal;

}

//Cash Denomination
function CalAmount_rupee(cashdenCount) { 
    if (document.getElementById('ctl00_ContentPlaceHolder1_txtfromdt').value == '' || document.getElementById('ctl00_ContentPlaceHolder1_ucShiftLog_txtSearchControl').value == '') {      
        $(".stoast").toastText("warning", "Please Select Shift", 2, 3);   
        cashdenCount.value = '';
        return false;
    }
    else {   
        document.getElementById('ctl00_ContentPlaceHolder1_UcCashDenom_hduser').value = "Y";
        var sum = 0;
        var count = 0, amt = 0;
        $("table[id*=gvCashDenom] tr:has(td)").each(function (e) {
            count = $(this).closest('tr').find("input[type=text][id*=txtCount]").val();
            amt = $(this).closest('tr').find("[id*=lblAmount]").text();
            if (count != "" && count != NaN) {
                $(this).closest('tr').find("input[type=text][id*=txttotal]").val(parseInt(count) * parseInt(amt));
                sum = sum + parseInt(count) * parseInt(amt);
            }
            else
                $(this).closest('tr').find("input[type=text][id*=txttotal]").val(0);
        });

        document.getElementById('ctl00_ContentPlaceHolder1_UcCashDenom_txtrupee').value = sum;
        document.getElementById('ctl00_ContentPlaceHolder1_UcCashDenom_hdhold').value = sum;
        document.getElementById('ctl00_ContentPlaceHolder1_UcCashDenom_hdcurrid').value = 1;
        Exchange(1);
       // document.getElementById('ctl00_ContentPlaceHolder1_UcCashDenom_txtrupee').value = sum;
      //  Calc();

    }
}


function CalAmount_dinar1(cashdenCount) {
    if (document.getElementById('ctl00_ContentPlaceHolder1_txtfromdt').value == '' || document.getElementById('ctl00_ContentPlaceHolder1_ucShiftLog_txtSearchControl').value == '') {
        $(".stoast").toastText("warning", "Please Select Shift", 2, 3); cashdenCount.value = '';
        return false;
    }
    else {
        document.getElementById('ctl00_ContentPlaceHolder1_UcCashDenom_hduser').value = "Y";
        var sum = 0;
        var count = 0, amt = 0;
        $("table[id*=grddinar] tr:has(td)").each(function (e) {
            count = $(this).closest('tr').find("input[type=text][id*=txtCount]").val();
            amt = $(this).closest('tr').find("[id*=lblAmount]").text();
            if (count != "" && count != NaN) {
                $(this).closest('tr').find("input[type=text][id*=txttotal]").val(parseInt(count) * parseInt(amt));
                sum = sum + parseInt(count) * parseInt(amt);
            }
            else
                $(this).closest('tr').find("input[type=text][id*=txttotal]").val(0);
        });

        document.getElementById('ctl00_ContentPlaceHolder1_UcCashDenom_txtdinar').value = sum;  
        document.getElementById('ctl00_ContentPlaceHolder1_UcCashDenom_hdhold').value = sum;
        document.getElementById('ctl00_ContentPlaceHolder1_UcCashDenom_hdcurrid').value = 2;
        Exchange(2, sum);

    }
}

function CalAmount_pound1(cashdenCount) {
    if (document.getElementById('ctl00_ContentPlaceHolder1_txtfromdt').value == '' || document.getElementById('ctl00_ContentPlaceHolder1_ucShiftLog_txtSearchControl').value == '') {
        $(".stoast").toastText("warning", "Please Select Shift", 2, 3); cashdenCount.value = '';
        return false;
    }
    else {
        var sum = 0;
        var count = 0, amt = 0;
        document.getElementById('ctl00_ContentPlaceHolder1_UcCashDenom_hduser').value = "Y";
        $("table[id*=grdpound] tr:has(td)").each(function (e) {
            count = $(this).closest('tr').find("input[type=text][id*=txtCount]").val();
            amt = $(this).closest('tr').find("[id*=lblAmount]").text();
            if (count != "" && count != NaN) {
                $(this).closest('tr').find("input[type=text][id*=txttotal]").val(parseInt(count) * parseInt(amt));
                sum = sum + parseInt(count) * parseInt(amt);
            }
            else
                $(this).closest('tr').find("input[type=text][id*=txttotal]").val(0);
        });
        document.getElementById('ctl00_ContentPlaceHolder1_UcCashDenom_txtpound').value = sum;
        document.getElementById('ctl00_ContentPlaceHolder1_UcCashDenom_hdhold').value = sum;
        document.getElementById('ctl00_ContentPlaceHolder1_UcCashDenom_hdcurrid').value = 240;
        Exchange(240, sum);
    }
}


function CalAmount_doller1(cashdenCount) {
    if (document.getElementById('ctl00_ContentPlaceHolder1_txtfromdt').value == '' || document.getElementById('ctl00_ContentPlaceHolder1_ucShiftLog_txtSearchControl').value == '') {
        $(".stoast").toastText("warning", "Please Select Shift", 2, 3); cashdenCount.value = '';
        return false;
    }
    else {
        document.getElementById('ctl00_ContentPlaceHolder1_UcCashDenom_hduser').value = "Y";
        var sum = 0;
        var count = 0, amt = 0;
        $("table[id*=grddoller] tr:has(td)").each(function (e) {
            count = $(this).closest('tr').find("input[type=text][id*=txtCount]").val();
            amt = $(this).closest('tr').find("[id*=lblAmount]").text();
            if (count != "" && count != NaN) {
                $(this).closest('tr').find("input[type=text][id*=txttotal]").val(parseInt(count) * parseInt(amt));
                sum = sum + parseInt(count) * parseInt(amt);
            }
            else
                $(this).closest('tr').find("input[type=text][id*=txttotal]").val(0);
        });
        document.getElementById('ctl00_ContentPlaceHolder1_UcCashDenom_txtdoller').value = sum;
        document.getElementById('ctl00_ContentPlaceHolder1_UcCashDenom_hdhold').value = sum;
        document.getElementById('ctl00_ContentPlaceHolder1_UcCashDenom_hdcurrid').value = 244;
        Exchange(244, sum);

    }
}
function CalAmount_usd1(cashdenCount) {
    if (document.getElementById('ctl00_ContentPlaceHolder1_txtfromdt').value == '' || document.getElementById('ctl00_ContentPlaceHolder1_ucShiftLog_txtSearchControl').value == '') {
        $(".stoast").toastText("warning", "Please Select Shift", 2, 3); cashdenCount.value = '';
        return false;
    }
    else {
        var sum = 0;
        var count = 0, amt = 0;
        document.getElementById('ctl00_ContentPlaceHolder1_UcCashDenom_hduser').value = "Y";
        $("table[id*=grdusd] tr:has(td)").each(function (e) {
            count = $(this).closest('tr').find("input[type=text][id*=txtCount]").val();
            amt = $(this).closest('tr').find("[id*=lblAmount]").text();
            if (count != "" && count != NaN) {
                $(this).closest('tr').find("input[type=text][id*=txttotal]").val(parseInt(count) * parseInt(amt));
                sum = sum + parseInt(count) * parseInt(amt);
            }
            else
                $(this).closest('tr').find("input[type=text][id*=txttotal]").val(0);
        });
        document.getElementById('ctl00_ContentPlaceHolder1_UcCashDenom_txtusd').value = sum;
        document.getElementById('ctl00_ContentPlaceHolder1_UcCashDenom_hdhold').value = sum;
        document.getElementById('ctl00_ContentPlaceHolder1_UcCashDenom_hdcurrid').value = 248;
        Exchange(248, sum);
    }
}
function Calc() {
    var sum = 0;
   var SubTotal = parseInt(document.getElementById('ctl00_ContentPlaceHolder1_UcCashDenom_txtrupee').value) + parseInt(document.getElementById('ctl00_ContentPlaceHolder1_UcCashDenom_txtdinar').value) + parseInt(document.getElementById('ctl00_ContentPlaceHolder1_UcCashDenom_txtpound').value) + parseInt(document.getElementById('ctl00_ContentPlaceHolder1_UcCashDenom_txtdoller').value) + parseInt(document.getElementById('ctl00_ContentPlaceHolder1_UcCashDenom_txtusd').value);  
    document.getElementById('ctl00_ContentPlaceHolder1_txtCashAmt').value = SubTotal;
    document.getElementById('ctl00_ContentPlaceHolder1_hdnAdvAmt').value = SubTotal;
    var cashamount = document.getElementById('ctl00_ContentPlaceHolder1_txtCashAmt').value;
    var CardAmount = document.getElementById('ctl00_ContentPlaceHolder1_txtCardAmt').value;
    var ChequeAmt = document.getElementById('ctl00_ContentPlaceHolder1_txtChequeAmt').value;
    if (CardAmount == '')
        CardAmount = 0;
    if (ChequeAmt == '')
        ChequeAmt = 0;
    if (cashamount == '' || cashamount == 'NAN')
        cashamount = 0;

    sum = parseInt(cashamount) + parseInt(CardAmount) + parseInt(ChequeAmt);
    document.getElementById('ctl00_ContentPlaceHolder1_txtTotal').value = sum;
    document.getElementById('ctl00_ContentPlaceHolder1_hdTotalAmt').value = sum;
}
//Exchange
function Exchange(toid) {
    CurrencySettingsWebService.GetExchangeRate(document.getElementById('ctl00_ContentPlaceHolder1_UcCashDenom_hdnstpcurrid').value, toid, OnSuccess, FailureCallBack);
}
function OnSuccess(result) {  
    if (result.length > 0) {

        if (result != null && result.length > 0) {
            var str = result[0];
            if (str == undefined) {
                $(".stoast").toastText("warning", "Exchange Rate For this Currency not Set in Currency Settigns", 5, 3);
            }
            else {

                SetCurrencyAmtFields(document.getElementById('ctl00_ContentPlaceHolder1_UcCashDenom_hdhold').value, result[0].EX_RATE); 
            }
        }
    }
    else {

        SetCurrencyAmtFields(document.getElementById('ctl00_ContentPlaceHolder1_UcCashDenom_hdhold').value, 1);
     
    }
}

function Calc() {
    var sum = 0;
    var SubTotal = parseInt(document.getElementById('ctl00_ContentPlaceHolder1_UcCashDenom_txtrupee').value) + parseInt(document.getElementById('ctl00_ContentPlaceHolder1_UcCashDenom_txtdinar').value) + parseInt(document.getElementById('ctl00_ContentPlaceHolder1_UcCashDenom_txtpound').value) + parseInt(document.getElementById('ctl00_ContentPlaceHolder1_UcCashDenom_txtdoller').value) + parseInt(document.getElementById('ctl00_ContentPlaceHolder1_UcCashDenom_txtusd').value);
    document.getElementById('ctl00_ContentPlaceHolder1_txtCashAmt').value = SubTotal;
    document.getElementById('ctl00_ContentPlaceHolder1_hdnAdvAmt').value = SubTotal;
    var cashamount = document.getElementById('ctl00_ContentPlaceHolder1_txtCashAmt').value;
    var CardAmount = document.getElementById('ctl00_ContentPlaceHolder1_txtCardAmt').value;
    var ChequeAmt = document.getElementById('ctl00_ContentPlaceHolder1_txtChequeAmt').value;
    if (CardAmount == '')
        CardAmount = 0;
    if (ChequeAmt == '')
        ChequeAmt = 0;
    if (cashamount == '' || cashamount == 'NAN')
        cashamount = 0;

    sum = parseInt(cashamount) + parseInt(CardAmount) + parseInt(ChequeAmt);
    document.getElementById('ctl00_ContentPlaceHolder1_txtTotal').value = sum;
    document.getElementById('ctl00_ContentPlaceHolder1_hdTotalAmt').value = sum;
}

function SetCurrencyAmtFields(netamt, exchngrt) {  
        var roundamt = Math.round(parseFloat(netamt) / parseFloat(exchngrt) * Math.pow(10, 2)) / Math.pow(10, 2);
        if (parseFloat(roundamt) > 0) {
            if (document.getElementById('ctl00_ContentPlaceHolder1_UcCashDenom_hdcurrid').value == 1) {
                document.getElementById('ctl00_ContentPlaceHolder1_UcCashDenom_hdrupee_Exchange').value = exchngrt;
                document.getElementById('ctl00_ContentPlaceHolder1_UcCashDenom_txtrupee').value = roundamt;
            }

            if (document.getElementById('ctl00_ContentPlaceHolder1_UcCashDenom_hdcurrid').value == 2) {
                document.getElementById('ctl00_ContentPlaceHolder1_UcCashDenom_hddinar_Exchange').value = exchngrt;
                document.getElementById('ctl00_ContentPlaceHolder1_UcCashDenom_txtdinar').value = roundamt;
            }

            if (document.getElementById('ctl00_ContentPlaceHolder1_UcCashDenom_hdcurrid').value == 240) {
                document.getElementById('ctl00_ContentPlaceHolder1_UcCashDenom_hdpound_Exchange').value = exchngrt;
                document.getElementById('ctl00_ContentPlaceHolder1_UcCashDenom_txtpound').value = roundamt
            }

            if (document.getElementById('ctl00_ContentPlaceHolder1_UcCashDenom_hdcurrid').value == 244) {
                document.getElementById('ctl00_ContentPlaceHolder1_UcCashDenom_hddoller_Exchange').value = exchngrt;
                document.getElementById('ctl00_ContentPlaceHolder1_UcCashDenom_txtdoller').value = roundamt
            }

            if (document.getElementById('ctl00_ContentPlaceHolder1_UcCashDenom_hdcurrid').value == 248) {
                document.getElementById('ctl00_ContentPlaceHolder1_UcCashDenom_hdusd_Exchange').value = exchngrt;
                document.getElementById('ctl00_ContentPlaceHolder1_UcCashDenom_txtusd').value = roundamt
            }

            if (document.getElementById('ctl00_ContentPlaceHolder1_UcCashDenom_hduser').value != "Y") {

                var SubTotal = parseInt(document.getElementById('ctl00_ContentPlaceHolder1_UcCashDenom_txtrupee').value) + parseInt(document.getElementById('ctl00_ContentPlaceHolder1_UcCashDenom_txtdinar').value) + parseInt(document.getElementById('ctl00_ContentPlaceHolder1_UcCashDenom_txtpound').value) + parseInt(document.getElementById('ctl00_ContentPlaceHolder1_UcCashDenom_txtdoller').value) + parseInt(document.getElementById('ctl00_ContentPlaceHolder1_UcCashDenom_txtusd').value);
                document.getElementById('ctl00_ContentPlaceHolder1_txtSubAmt').value = SubTotal;
                document.getElementById('ctl00_ContentPlaceHolder1_hdnAdvAmt').value = SubTotal;
            }
            else {

                var sum = 0;
                var SubTotal = parseInt(document.getElementById('ctl00_ContentPlaceHolder1_UcCashDenom_txtrupee').value) + parseInt(document.getElementById('ctl00_ContentPlaceHolder1_UcCashDenom_txtdinar').value) + parseInt(document.getElementById('ctl00_ContentPlaceHolder1_UcCashDenom_txtpound').value) + parseInt(document.getElementById('ctl00_ContentPlaceHolder1_UcCashDenom_txtdoller').value) + parseInt(document.getElementById('ctl00_ContentPlaceHolder1_UcCashDenom_txtusd').value);
                document.getElementById('ctl00_ContentPlaceHolder1_txtCashAmt').value = SubTotal;
                document.getElementById('ctl00_ContentPlaceHolder1_hdnAdvAmt').value = SubTotal;
                var cashamount = document.getElementById('ctl00_ContentPlaceHolder1_txtCashAmt').value;
                var CardAmount = document.getElementById('ctl00_ContentPlaceHolder1_txtCardAmt').value;
                var ChequeAmt = document.getElementById('ctl00_ContentPlaceHolder1_txtChequeAmt').value;
                if (CardAmount == '')
                    CardAmount = 0;
                if (ChequeAmt == '')
                    ChequeAmt = 0;
                if (cashamount == '' || cashamount == 'NAN')
                    cashamount = 0;

                sum = parseInt(cashamount) + parseInt(CardAmount) + parseInt(ChequeAmt);
                document.getElementById('ctl00_ContentPlaceHolder1_txtTotal').value = sum;
                document.getElementById('ctl00_ContentPlaceHolder1_hdTotalAmt').value = sum;
            
            }
        }
        else {

        }  

}

function FailureCallBack(result) {
    alert('failed');
}


function hidetabs() {
   
    if (document.getElementById('ctl00_ContentPlaceHolder1_UcCashDenom_hdnstpcurrid').value == "1") {
        $("#lblrupee").css('display', 'block');
        $('[id*=divrupee]').css('display', 'block')
        $("#lbldinar,#lblpound,#lbldoller,#lblusd").removeClass("select");
        $("#lblrupee").addClass("select");
    }
    else {
        $("#lblrupee").css('display', 'none');
        $('[id*=divrupee]').css('display', 'none')
    }
    if (document.getElementById('ctl00_ContentPlaceHolder1_UcCashDenom_hdnstpcurrid').value == "2") {
        $("#lbldinar").css('display', 'block');
        $('[id*=divdinar]').css('display', 'block')
        $("#lblrupee,#lblpound,#lbldoller,#lblusd").removeClass("select");
        $("#lbldinar").addClass("select");
    }
    else {
        $("#lbldinar").css('display', 'none');
        $('[id*=divdinar]').css('display', 'none')
    }
    if (document.getElementById('ctl00_ContentPlaceHolder1_UcCashDenom_hdnstpcurrid').value == "240") {
        $('[id*=divpound]').css('display', 'block')
        $("#lblpound").css('display: block;width: 10px;margin-top: -22px;margin-right: -351px');
        $("#lblrupee,#lbldinar,#lbldoller,#lblusd").removeClass("select");
        $("#lblpound").addClass("select");

    }
    else {
        $("#lblpound").css('display', 'none');
        $('[id*=divpound]').css('display', 'none')
    }
    if (document.getElementById('ctl00_ContentPlaceHolder1_UcCashDenom_hdnstpcurrid').value == "244") {
        $("#lbldoller").css('display', 'block');
        $('[id*=divdoller]').css('display', 'block')
        $("#lblrupee,#lbldinar,#lblpound,#lblusd").removeClass("select");
        $("#lbldoller").addClass("select");
    }
    else {
        $("#lbldoller").css('display', 'none');
        $('[id*=divdoller]').css('display', 'none')
    }
    if (document.getElementById('ctl00_ContentPlaceHolder1_UcCashDenom_hdnstpcurrid').value == "248") {
        $("#lblusd").css('display', 'block');
        $('[id*=divusd]').css('display', 'block')
        $("#lblrupee,#lbldinar,#lblpound,#lbldoller").removeClass("select");
        $("#lblusd").addClass("select");
    }
    else {
        $("#lblusd").css('display', 'none');
        $('[id*=divusd]').css('display', 'none')
    }


}

function tabshow() {
    if (document.getElementById('ctl00_ContentPlaceHolder1_UcCashDenom_hdcount').value == "0")
     {
        if (document.getElementById('ctl00_ContentPlaceHolder1_UcCashDenom_gvCashDenom') == null) {
            $("#lblrupee").css('display', 'none');
        }
        else {
            $("#lblrupee").css('display', 'block');    
            $('[id*=divrupee]').css('display', 'block')
            $("#lbldinar,#lblpound,#lbldoller,#lblusd").removeClass("select");
            $("#divpound,#divdinar,#divdoller,#divusd").css('display', 'none');
            $("#lblrupee").addClass("select");
        }
        if (document.getElementById('ctl00_ContentPlaceHolder1_UcCashDenom_grddinar') == null)
            $("#lbldinar").css('display', 'none');
        else
            $("#lbldinar").css('display', 'block');
        if (document.getElementById('ctl00_ContentPlaceHolder1_UcCashDenom_grdpound') == null)
            $("#lblpound").css('display', 'none');
        else
            $("#lblpound").css('display', 'block');
        if (document.getElementById('ctl00_ContentPlaceHolder1_UcCashDenom_grddoller') == null)
            $('[id*=lbldoller]').css('display', 'none');
        else
            $("#lbldoller").css('display', 'block');
        if (document.getElementById('ctl00_ContentPlaceHolder1_UcCashDenom_grdusd') == null)
            $("#lblusd").css('display', 'none');
        else
            $("#lblusd").css('display', 'block');
        document.getElementById('ctl00_ContentPlaceHolder1_UcCashDenom_hdcount').value = "1";
    
    }
    else {
        document.getElementById('ctl00_ContentPlaceHolder1_UcCashDenom_hdcount').value = "0";
        hidetabs();
    }
    return false;
}

////Dynamic Grid


