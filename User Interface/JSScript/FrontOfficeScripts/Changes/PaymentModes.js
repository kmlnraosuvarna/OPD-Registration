function checkpayment() {

    var __selectedText = $('#ctl00_ContentPlaceHolder1_ReceiptControl2_ddlPaymentType').find('option:selected').text();
 
    paymode();

    if (document.getElementById('ctl00_ContentPlaceHolder1_ReceiptControl2_chkotpadvanced').checked) {
        var _docName = document.getElementById('ctl00_ContentPlaceHolder1_ReceiptControl2_hdnDocName').value;
        if (_docName == 'OP') {
            var _opCount = 0;
            $("table[id*=gvServices] tr:has(td)").each(function (e) {
                var hdnServiceID = $(this).closest('tr').find('input[type=hidden][id*=hdnServiceID]').val();
                if (hdnServiceID == '' | hdnServiceID == null || hdnServiceID == undefined) { hdnServiceID = 0; }
                if (hdnServiceID > 0) {
                    _opCount = 1;
                }
            });
            if (_opCount == 0) {
                document.getElementById('ctl00_ContentPlaceHolder1_ReceiptControl2_chkotpreq').checked = false;
                $(".stoast").toastText("warning", "Please post at least one service!", 5, 3);
                return false;
            }
        }
    }

    tdchkotpadvanced.style.display = 'none';
    document.getElementById('tdadv').style.display = 'none';
    document.getElementById('tdadvcell').style.display = 'none';

    document.getElementById('ctl00_ContentPlaceHolder1_ReceiptControl2_ddlCurrency').disabled = false;
    document.getElementById('ctl00_ContentPlaceHolder1_ReceiptControl2_txtsrvcharges').disabled = true;
    document.getElementById('ctl00_ContentPlaceHolder1_ReceiptControl2_txtsrvcharges').value = 0;
    document.getElementById('ctl00_ContentPlaceHolder1_ReceiptControl2_txtsrvcharges').className = "formtextbox";
    var index = document.getElementById('ctl00_ContentPlaceHolder1_ReceiptControl2_ddlPaymentType').value;
    if (index == '' || index == undefined || index == null) { index = 0; }
    if (document.getElementById('ctl00_ContentPlaceHolder1_ReceiptControl2_hdnDocName').value == 'CorporateCheckEntry') {
        if (index == 16 || index == 20) {//googlepay,rtgs
            tdrtgsacheader.style.display = 'table-cell';
            tdrtgsacdetail.style.display = 'table-cell';
        } else {
            tdrtgsacheader.style.display = 'none';
            tdrtgsacdetail.style.display = 'none';
        }
    }
    if (index == 2) {//cheque
        $('[id*=divchequeauth]').css('display', 'block');
        $('[id*=divauthcd]').css('display', 'none');
        document.getElementById('ctl00_ContentPlaceHolder1_ReceiptControl2_lblcardtranNo').innerHTML = 'Cheque Auth.';
    }
    else {
        $('[id*=divchequeauth]').css('display', 'none');
        $('[id*=divauthcd]').css('display', 'block');
        document.getElementById('ctl00_ContentPlaceHolder1_ReceiptControl2_lblcardtranNo').innerHTML = 'Card Trans#.';
    }
    var docName = document.getElementById('ctl00_ContentPlaceHolder1_ReceiptControl2_hdnDocName').value;
    var otpadvance = document.getElementById('ctl00_ContentPlaceHolder1_ReceiptControl2_chkotpadvanced').checked;

    if (docName == 'Refund' && (__selectedText == "Credit Card" || __selectedText == "Debit Card" || __selectedText == "Cheque" || __selectedText == "Demand Draft")) {
        document.getElementById('titleSrvCharges').style.display = 'block';
        document.getElementById('DivSrvCharges').style.display = 'block';
    }
    else {
        document.getElementById('titleSrvCharges').style.display = 'none';
        document.getElementById('DivSrvCharges').style.display = 'none';
    }


    if (__selectedText == "Credit Card" || __selectedText == "Debit Card") {

        /**add for swipe functionality**/
        VisibleSwipe();
        $('[id*=tdCardHldr]').css('display', 'table-cell');
        $('[id*=tdTxtCardHldr]').css('display', 'table-cell');
    }
    else {

        document.getElementById('ctl00_ContentPlaceHolder1_ReceiptControl2_btnsettle').style.display = 'none';
        document.getElementById('ctl00_ContentPlaceHolder1_ReceiptControl2_btnswp').style.display = 'none';
        $('[id*=tdCardHldr]').css('display', 'none');
        $('[id*=tdTxtCardHldr]').css('display', 'none');
    }

    if (docName == "IMRSRVENTRY" || docName == "IMR ORDER LOOKUP") {
        //   var _selectedText = $('#ctl00_ContentPlaceHolder1_ReceiptControl2_ddlPaymentType').find('option:selected').text()
        if (_selectedText == "Cash" || _selectedText == "Credit Card" || _selectedText == "Debit Card" || _selectedText == "Cheque" || _selectedText == "Funds" || _selectedText.toLocaleLowerCase() == "excess to advance") {
        }
        else {
            $(".stoast").toastText("Info", "System doesn't allow payment through " + _selectedText, 5, 2);
            document.getElementById('ctl00_ContentPlaceHolder1_ReceiptControl2_ddlPaymentType').value = 1;
            index = document.getElementById('ctl00_ContentPlaceHolder1_ReceiptControl2_ddlPaymentType').value;
            if (index == '' || index == undefined || index == null) { index = 0; }
        }
    }
    //var sel_text = $('#ctl00_ContentPlaceHolder1_ReceiptControl2_ddlPaymentType').find('option:selected').text();
    var sel_val_id = $('#ctl00_ContentPlaceHolder1_ReceiptControl2_ddlPaymentType').val();
    var _pagemode = '';
    if (docName == 'IPFINAL') {
        _pagemode = getParameterByName("MODE");

    }
    if (_pagemode == '' || _pagemode == null || _pagemode == undefined) { _pagemode = ''; }
    if (_pagemode == 'VIEW') {
        document.getElementById('ctl00_ContentPlaceHolder1_ReceiptControl2_ddlCurrency').disabled = true;
    }
    if (_pagemode != 'VIEW') {
        if (__selectedText == 'Credit Card') {
            document.getElementById('tdadv').style.display = 'table-cell';
            document.getElementById('tdadvcell').style.display = 'table-cell';
            document.getElementById('ctl00_ContentPlaceHolder1_ReceiptControl2_lbladjorotp').innerHTML = 'OTP';
            document.getElementById('ctl00_ContentPlaceHolder1_ReceiptControl2_txtadjustmentamt').disabled = false;
            if (docName == 'Refund') {
                tdchkotpadvanced.style.display = 'block';
                var mobile_no = '';

                mobile_no = document.getElementById('ctl00_ContentPlaceHolder1_txtrecmobile_no').value;
                if (mobile_no == '') {
                    $(".stoast").toastText("warning", "Please enter a minimum of 10 digits for the mobile number!", 5, 3);
                    document.getElementById('ctl00_ContentPlaceHolder1_txtrecmobile_no').focus();
                    document.getElementById('ctl00_ContentPlaceHolder1_ReceiptControl2_chkotpadvanced').checked = false;
                }
                else if (mobile_no.length >= 10) {
                    $(".stoast").toastText("warning", "Please enter a minimum of 10 digits for the mobile number!", 5, 3);
                    document.getElementById('ctl00_ContentPlaceHolder1_txtrecmobile_no').focus();
                    document.getElementById('ctl00_ContentPlaceHolder1_txtrecmobile_no').value = '';
                    document.getElementById('ctl00_ContentPlaceHolder1_ReceiptControl2_chkotpadvanced').checked = false;
                }
                else if ((sel_val_id != '' && otpadvance == true)) {
                    GetOTPSms(mobile_no);
                    return false;
                }
            }
        }
        else if ((__selectedText == 'Advance Adjustment' || sel_val_id == 18) && docName != "PreRefund" && docName != "Refund") {//18 Excess to advance
            document.getElementById('tdadv').style.display = 'table-cell';
            document.getElementById('tdadvcell').style.display = 'table-cell';
            document.getElementById('ctl00_ContentPlaceHolder1_ReceiptControl2_lbladjorotp').innerHTML = 'Available Balance';
            document.getElementById('ctl00_ContentPlaceHolder1_ReceiptControl2_txtadjustmentamt').disabled = true;
            document.getElementById('ctl00_ContentPlaceHolder1_ReceiptControl2_ddlCurrency').disabled = true;
            document.getElementById('ctl00_ContentPlaceHolder1_ReceiptControl2_ddlCurrency').value = document.getElementById('ctl00_ContentPlaceHolder1_ReceiptControl2_hdnbaseCurrency').value
        }
        else {
            if (docName != 'Refund') {
                document.getElementById('tdadv').style.display = 'none';
                document.getElementById('tdadvcell').style.display = 'none';
                document.getElementById('ctl00_ContentPlaceHolder1_ReceiptControl2_lbladjorotp').innerHTML = 'Available Balance';
                document.getElementById('ctl00_ContentPlaceHolder1_ReceiptControl2_txtadjustmentamt').disabled = true;
            }
         }
        BindAdjestumentdata1();
        GetExchangeRate();
        //var sel_text = $('#ctl00_ContentPlaceHolder1_ReceiptControl2_ddlPaymentType').find('option:selected').text();
        if (__selectedText == 'Cash' || __selectedText == 'PAYMASTER' || __selectedText == "NATIONAL COMMERCIAL BANK(NCB)" || __selectedText == "SAGICOR BANK" || __selectedText == "SCOTIA BANK" || __selectedText == "JDF" || __selectedText == "NHF"
            || __selectedText == "EXCESS TO ADVANCE" || __selectedText == "Online" || __selectedText == "OTHERS" || __selectedText == "FOREIGN TRANSFER" || __selectedText == "INSURANCE") {
            DisableControl();
            TenderedColorCode();
            nonmandatorys();
            if (__selectedText == 'Cash') {
                var ErAdvAllow = 'N';
                var WebCfngAllowCash = $('[id*=hdnWebCfngAllowCash]').val();
                if (WebCfngAllowCash == null || WebCfngAllowCash == undefined || WebCfngAllowCash == '' || WebCfngAllowCash == 'undefined') WebCfngAllowCash = 'N';
                if (WebCfngAllowCash == 'Y' || WebCfngAllowCash == 'y') {
                    ErAdvAllow = $('[id*=hdnAllowCashTrnd]').val();
                    if (ErAdvAllow == null || ErAdvAllow == undefined || ErAdvAllow == '' || ErAdvAllow == 'undefined') ErAdvAllow = 'N';
                }
                if (ErAdvAllow == 'Y') {
                    document.getElementById('ctl00_ContentPlaceHolder1_ReceiptControl2_txtamt').disabled = true;
                }
                else {
                    document.getElementById('ctl00_ContentPlaceHolder1_ReceiptControl2_txtamt').disabled = true;
                }
            }
            else {
                document.getElementById('ctl00_ContentPlaceHolder1_ReceiptControl2_txtamt').disabled = true;
            }
            document.getElementById('ctl00_ContentPlaceHolder1_ReceiptControl2_txtamt').value = 0;
            document.getElementById('ctl00_ContentPlaceHolder1_ReceiptControl2_txtTenderedAmt').className = 'red';
        }
        if (__selectedText == "UPI" || __selectedText == "Google Pay" || __selectedText == "PhonePe" || __selectedText == 'Paytm' || __selectedText == "Lazypay" || __selectedText == "Paymode2" || __selectedText == "Paymode1" || __selectedText == "Paymode3") {
            document.getElementById('ctl00_ContentPlaceHolder1_ReceiptControl2_txtamt').disabled = true;
            document.getElementById('ctl00_ContentPlaceHolder1_ReceiptControl2_txtamt').className = "formtextbox";
            document.getElementById('ctl00_ContentPlaceHolder1_ReceiptControl2_txtsrvcharges').disabled = false;
            document.getElementById('ctl00_ContentPlaceHolder1_ReceiptControl2_txtsrvcharges').className = "formtextbox";
            document.getElementById('ctl00_ContentPlaceHolder1_ReceiptControl2_txtExpDt').disabled = true;
            document.getElementById('ctl00_ContentPlaceHolder1_ReceiptControl2_txtamt').className = 'grey';
            document.getElementById('ctl00_ContentPlaceHolder1_ReceiptControl2_txtTenderedAmt').disabled = false;
            document.getElementById('ctl00_ContentPlaceHolder1_ReceiptControl2_ddlBankName').className = 'grey';
            document.getElementById('ctl00_ContentPlaceHolder1_ReceiptControl2_ddlCardType').className = 'grey';
            document.getElementById('ctl00_ContentPlaceHolder1_ReceiptControl2_txtExpDt').className = 'grey';
            document.getElementById('ctl00_ContentPlaceHolder1_ReceiptControl2_txtTenderedAmt').value = 0;
            document.getElementById('ctl00_ContentPlaceHolder1_ReceiptControl2_ddlBankName').disabled = true;
            document.getElementById('ctl00_ContentPlaceHolder1_ReceiptControl2_ddlBankName').value = 0;
            document.getElementById('ctl00_ContentPlaceHolder1_ReceiptControl2_ddlCardType').disabled = true;
            document.getElementById('ctl00_ContentPlaceHolder1_ReceiptControl2_ddlCardType').value = 0;
            document.getElementById('ctl00_ContentPlaceHolder1_ReceiptControl2_txtCurrAmt').disabled = true;
            document.getElementById('ctl00_ContentPlaceHolder1_ReceiptControl2_txtCurrAmt').className = "ReadOnlyTextBox";
            document.getElementById('ctl00_ContentPlaceHolder1_ReceiptControl2_txtreqamtkyd').disabled = true;
            document.getElementById('ctl00_ContentPlaceHolder1_ReceiptControl2_txtreqamtkyd').className = "ReadOnlyTextBox";
            document.getElementById('ctl00_ContentPlaceHolder1_ReceiptControl2_txtCardNo').disabled = false;
            document.getElementById('ctl00_ContentPlaceHolder1_ReceiptControl2_txtCardNo').className = "formtextbox";
            document.getElementById('ctl00_ContentPlaceHolder1_ReceiptControl2_txtCurrency').disabled = true;
            document.getElementById('ctl00_ContentPlaceHolder1_ReceiptControl2_txtCurrency').className = "ReadOnlyTextBox";
            document.getElementById('ctl00_ContentPlaceHolder1_ReceiptControl2_txtAuthCode').disabled = false;
            document.getElementById('ctl00_ContentPlaceHolder1_ReceiptControl2_txtAuthCode').className = "formtextbox";
            document.getElementById('ctl00_ContentPlaceHolder1_ReceiptControl2_txtChangeKyd').disabled = true;
            document.getElementById('ctl00_ContentPlaceHolder1_ReceiptControl2_txtChangeKyd').className = "ReadOnlyTextBox";
            document.getElementById('ctl00_ContentPlaceHolder1_ReceiptControl2_ddlCurrency').disabled = false;
            document.getElementById('ctl00_ContentPlaceHolder1_ReceiptControl2_txtTenderedAmt').className = "ReadOnlyTextBox";
            document.getElementById('ctl00_ContentPlaceHolder1_ReceiptControl2_txtAuthCode').className = 'red';
            document.getElementById('ctl00_ContentPlaceHolder1_ReceiptControl2_UCchequeAuth_txtSearchControl').className = 'red';
            document.getElementById('ctl00_ContentPlaceHolder1_ReceiptControl2_txtTenderedAmt').className = 'red';
            document.getElementById('ctl00_ContentPlaceHolder1_ReceiptControl2_txtCardNo').className = 'red';
        }
        if (__selectedText == 'Health Card') {
            DisableControl();
            TenderedColorCode();
            nonmandatorys();
            document.getElementById('ctl00_ContentPlaceHolder1_ReceiptControl2_txtamt').value = 0;
            document.getElementById('ctl00_ContentPlaceHolder1_ReceiptControl2_txtTenderedAmt').className = 'grey';
            document.getElementById('ctl00_ContentPlaceHolder1_ReceiptControl2_txtamt').className = 'red';
        }

        if (__selectedText == 'Funds') {
            DisableControl();
            TenderedColorCode();
            nonmandatorys();
            document.getElementById('ctl00_ContentPlaceHolder1_ReceiptControl2_txtamt').disabled = true;
            document.getElementById('ctl00_ContentPlaceHolder1_ReceiptControl2_txtamt').value = 0;
            document.getElementById('ctl00_ContentPlaceHolder1_ReceiptControl2_txtTenderedAmt').className = 'red';
        }
        if (__selectedText == 'Demand Draft' || __selectedText == 'Credit Card' || __selectedText == 'Debit Card') {
            EnableControls();
            mandatorys();
            document.getElementById('ctl00_ContentPlaceHolder1_ReceiptControl2_lblcarsNo').innerHTML = 'Card No';
            document.getElementById('ctl00_ContentPlaceHolder1_ReceiptControl2_txtTenderedAmt').className = 'grey';
            document.getElementById('ctl00_ContentPlaceHolder1_ReceiptControl2_txtTenderedAmt').className = 'ReadOnlyTextBox';
            if (document.getElementById('ctl00_ContentPlaceHolder1_ReceiptControl2_ddlPaymentType').value == '4') {
                var docName = document.getElementById('ctl00_ContentPlaceHolder1_ReceiptControl2_hdnDocName').value;
                if (docName != "") {
                    tdchkotpadvanced.style.display = 'block';
                    var otpreq = $('#ctl00_ContentPlaceHolder1_ReceiptControl2_hdnotprequired').val();
                    var mobile_no = '';
                    if (otpreq == 'True') {
                        document.getElementById('ctl00_ContentPlaceHolder1_ReceiptControl2_hdnotp').value = '';
                        if (otpadvance == false) {
                            chequeauthrization();
                        }

                        document.getElementById('tdadv').style.display = 'table-cell';
                        document.getElementById('tdadvcell').style.display = 'table-cell';
                        document.getElementById('ctl00_ContentPlaceHolder1_ReceiptControl2_lbladjorotp').innerHTML = 'OTP';
                        document.getElementById('ctl00_ContentPlaceHolder1_ReceiptControl2_txtadjustmentamt').disabled = false;
                        var otp_chk = document.getElementById('ctl00_ContentPlaceHolder1_ReceiptControl2_hdnotp').value;
                        if (otp_chk == null || otp_chk == undefined || otp_chk == '') {
                            if (docName == 'OP' || docName == 'Cons' || docName == 'OUTSTDNGDUE' || docName == 'PREADVANCE') {
                                if (docName == 'OP') {
                                    if (document.getElementById('ctl00_ContentPlaceHolder1_chkIsOsp').checked == true) {
                                        mobile_no = document.getElementById('ctl00_ContentPlaceHolder1_TxtMobile').value;
                                    }
                                    else {
                                        if (document.getElementById('ctl00_ContentPlaceHolder1_umrPatientDetails_lblMobileNo') != null)
                                            mobile_no = document.getElementById('ctl00_ContentPlaceHolder1_umrPatientDetails_lblMobileNo').innerHTML;
                                    }
                                }

                                else {
                                    if (document.getElementById('ctl00_ContentPlaceHolder1_umrPatientDetails_lblMobileNo') != null)
                                        mobile_no = document.getElementById('ctl00_ContentPlaceHolder1_umrPatientDetails_lblMobileNo').innerHTML;
                                }

                            }
                            else if (docName == 'OPQUICK') {
                                mobile_no = document.getElementById('ctl00_ContentPlaceHolder1_Address1_txtMobile1').value;
                                if (mobile_no == '') {

                                    $(".stoast").toastText("warning", "Please Please enter mobile number!", 5, 3);
                                    document.getElementById('ctl00_ContentPlaceHolder1_ReceiptControl2_chkotpadvanced').checked = false;
                                }
                                else if (mobile_no.length < 10) {
                                    $(".stoast").toastText("warning", "Please enter a minimum of 10 digits for the mobile number!", 5, 3);
                                    document.getElementById('ctl00_ContentPlaceHolder1_Address1_txtMobile1').focus();
                                    document.getElementById('ctl00_ContentPlaceHolder1_Address1_txtMobile1').value = '';
                                    document.getElementById('ctl00_ContentPlaceHolder1_ReceiptControl2_chkotpadvanced').checked = false;
                                }
                            }
                            else if (docName == 'Refund') {

                                mobile_no = document.getElementById('ctl00_ContentPlaceHolder1_txtrecmobile_no').value;

                            }
                            else if (docName == 'IPFINAL') {
                                mobile_no = document.getElementById('ctl00_ContentPlaceHolder1_IPPatientDtls1_LblMobile').innerHTML;

                            }

                            else if (docName == 'REG') {
                                mobile_no = document.getElementById('ctl00_ContentPlaceHolder1_txtMobile1').value;
                                if (mobile_no == '') {
                                    $(".stoast").toastText("warning", "Please Please enter mobile number!", 5, 3);
                                    document.getElementById('ctl00_ContentPlaceHolder1_ReceiptControl2_chkotpadvanced').checked = false;
                                }
                                else if (mobile_no.length < 10) {
                                    $(".stoast").toastText("warning", "Please enter a minimum of 10 digits for the mobile number!", 5, 3);
                                    document.getElementById('ctl00_ContentPlaceHolder1_txtMobile1').focus();
                                    document.getElementById('ctl00_ContentPlaceHolder1_txtMobile1').value = '';
                                    document.getElementById('ctl00_ContentPlaceHolder1_ReceiptControl2_chkotpadvanced').checked = false;
                                }
                            }
                            else if (docName == 'DONATEEDETAILS') {
                                mobile_no = '';
                            }
                            else {
                                if (document.getElementById('ctl00_ContentPlaceHolder1_umrPatientDetails_lblMobileNo') != null)
                                    mobile_no = document.getElementById('ctl00_ContentPlaceHolder1_umrPatientDetails_lblMobileNo').innerHTML;

                                if (docName == 'IMRSRVENTRY' && $('[id*=LblMobile]')[0] != undefined) {
                                    mobile_no = $('[id*=LblMobile]')[0].innerHTML;
                                }
                            }
                            if (mobile_no == '' || mobile_no == undefined || mobile_no == null || mobile_no == NaN) {
                                if (docName == 'REG' || docName == 'OPQUICK' || docName == 'IpAdvance' || docName == 'ER') {
                                    $(".stoast").toastText("warning", "Please Enter Mobile No .", 5, 3);
                                    return false;
                                }
                                else {
                                    return false;
                                }
                            }
                            if (otpadvance == true) {
                                GetOTPSms(mobile_no);
                                return false;
                            }
                        }

                        var otp = document.getElementById('ctl00_ContentPlaceHolder1_ReceiptControl2_hdnotp').value;
                        var entered_otp = document.getElementById('ctl00_ContentPlaceHolder1_ReceiptControl2_txtadjustmentamt').value;
                        var page_l_otp_setting = document.getElementById('ctl00_ContentPlaceHolder1_ReceiptControl2_chkotpadvanced').checked;
                        if (entered_otp == otp && page_l_otp_setting == true)
                        { }
                        else if (page_l_otp_setting == true) {
                            $(".stoast").toastText("warning", "Please verify OTP number!", 5, 3);
                            document.getElementById('ctl00_ContentPlaceHolder1_ReceiptControl2_txtadjustmentamt').focus();
                            return false;
                        }
                    }
                }
            }
            else
            { }
        }
      //  var sel_text = $('#ctl00_ContentPlaceHolder1_ReceiptControl2_ddlPaymentType').find('option:selected').text();
        if (__selectedText == 'Cheque' || __selectedText == 'Bill Express') {
            ClearTranctions();
            document.getElementById('ctl00_ContentPlaceHolder1_ReceiptControl2_txtsrvcharges').disabled = false;
            document.getElementById('ctl00_ContentPlaceHolder1_ReceiptControl2_lblcarsNo').innerHTML = 'Cheque No';
            document.getElementById('ctl00_ContentPlaceHolder1_ReceiptControl2_txtAuthCode').disabled = false;
            document.getElementById('ctl00_ContentPlaceHolder1_ReceiptControl2_txtAuthCode').className = "ReadOnlyTextBox";
            document.getElementById('ctl00_ContentPlaceHolder1_ReceiptControl2_ddlCardType').disabled = true;
            document.getElementById('ctl00_ContentPlaceHolder1_ReceiptControl2_txtTenderedAmt').disabled = true;
            document.getElementById('ctl00_ContentPlaceHolder1_ReceiptControl2_txtTenderedAmt').className = "ReadOnlyTextBox";
            document.getElementById('ctl00_ContentPlaceHolder1_ReceiptControl2_txtamt').disabled = false;
            document.getElementById('ctl00_ContentPlaceHolder1_ReceiptControl2_txtamt').className = "formtextbox";
            document.getElementById('ctl00_ContentPlaceHolder1_ReceiptControl2_txtExpDt').disabled = false;
            document.getElementById('ctl00_ContentPlaceHolder1_ReceiptControl2_txtCurrAmt').disabled = true;
            document.getElementById('ctl00_ContentPlaceHolder1_ReceiptControl2_txtCurrAmt').className = "ReadOnlyTextBox";
            document.getElementById('ctl00_ContentPlaceHolder1_ReceiptControl2_txtreqamtkyd').disabled = true;
            document.getElementById('ctl00_ContentPlaceHolder1_ReceiptControl2_txtreqamtkyd').className = "ReadOnlyTextBox";
            document.getElementById('ctl00_ContentPlaceHolder1_ReceiptControl2_txtCardNo').disabled = false;
            document.getElementById('ctl00_ContentPlaceHolder1_ReceiptControl2_txtCardNo').className = "formtextbox";
            document.getElementById('ctl00_ContentPlaceHolder1_ReceiptControl2_txtCurrency').disabled = true;
            document.getElementById('ctl00_ContentPlaceHolder1_ReceiptControl2_txtCurrency').className = "ReadOnlyTextBox";
            document.getElementById('ctl00_ContentPlaceHolder1_ReceiptControl2_txtChangeKyd').disabled = true;
            document.getElementById('ctl00_ContentPlaceHolder1_ReceiptControl2_txtChangeKyd').className = "ReadOnlyTextBox";
            document.getElementById('ctl00_ContentPlaceHolder1_ReceiptControl2_ddlCardType').disabled = true;
            document.getElementById('ctl00_ContentPlaceHolder1_ReceiptControl2_ddlBankName').disabled = false;
            document.getElementById('ctl00_ContentPlaceHolder1_ReceiptControl2_ddlCurrency').disabled = false;
            document.getElementById('ctl00_ContentPlaceHolder1_ReceiptControl2_txtamt').className = 'red';
            document.getElementById('ctl00_ContentPlaceHolder1_ReceiptControl2_txtCardNo').className = 'red';
            document.getElementById('ctl00_ContentPlaceHolder1_ReceiptControl2_txtTenderedAmt').className = 'grey';

            document.getElementById('ctl00_ContentPlaceHolder1_ReceiptControl2_ddlBankName').className = 'red';
            document.getElementById('ctl00_ContentPlaceHolder1_ReceiptControl2_ddlCardType').className = 'grey';
            document.getElementById('ctl00_ContentPlaceHolder1_ReceiptControl2_UCchequeAuth_txtSearchControl').className = 'red';
            date = new Date();
            checkexpdate = new Date(date.getTime() + (90 * 24 * 60 * 60 * 1000)).format("dd-MMM-yyyy");
            document.getElementById('ctl00_ContentPlaceHolder1_ReceiptControl2_txtExpDt').value = checkexpdate;
            var dateaddexp = document.getElementById('ctl00_ContentPlaceHolder1_ReceiptControl2_txtExpDt').value;
            if (dateaddexp == '' || dateaddexp == undefined || dateaddexp == 'undefined') {
                dateaddexp = 'N';
            }
            if (dateaddexp !== 'N') {
                $('#ctl00_ContentPlaceHolder1_ReceiptControl2_txtExpDt').addClass('grey');
                $('#ctl00_ContentPlaceHolder1_ReceiptControl2_txtExpDt').removeClass('red');
            }

            trchequedt.style.display = "table-row";
        }
        else if (__selectedText == 'Voucher') {
            document.getElementById('ctl00_ContentPlaceHolder1_ReceiptControl2_lblcarsNo').innerHTML = 'Voucher No';
            ClearTranctions();
            document.getElementById('ctl00_ContentPlaceHolder1_ReceiptControl2_lblcarsNo').innerHTML = 'Cheque No';
            document.getElementById('ctl00_ContentPlaceHolder1_ReceiptControl2_txtAuthCode').disabled = true;
            document.getElementById('ctl00_ContentPlaceHolder1_ReceiptControl2_txtAuthCode').className = "ReadOnlyTextBox";
            document.getElementById('ctl00_ContentPlaceHolder1_ReceiptControl2_ddlCardType').disabled = true;
            document.getElementById('ctl00_ContentPlaceHolder1_ReceiptControl2_txtTenderedAmt').disabled = true;
            document.getElementById('ctl00_ContentPlaceHolder1_ReceiptControl2_txtTenderedAmt').className = "ReadOnlyTextBox";
            document.getElementById('ctl00_ContentPlaceHolder1_ReceiptControl2_txtamt').disabled = false;
            document.getElementById('ctl00_ContentPlaceHolder1_ReceiptControl2_txtamt').className = "formtextbox";
            document.getElementById('ctl00_ContentPlaceHolder1_ReceiptControl2_txtExpDt').disabled = false;
            document.getElementById('ctl00_ContentPlaceHolder1_ReceiptControl2_txtCurrAmt').disabled = true;
            document.getElementById('ctl00_ContentPlaceHolder1_ReceiptControl2_txtCurrAmt').className = "ReadOnlyTextBox";
            document.getElementById('ctl00_ContentPlaceHolder1_ReceiptControl2_txtreqamtkyd').disabled = true;
            document.getElementById('ctl00_ContentPlaceHolder1_ReceiptControl2_txtreqamtkyd').className = "ReadOnlyTextBox";
            document.getElementById('ctl00_ContentPlaceHolder1_ReceiptControl2_txtCardNo').disabled = false;
            document.getElementById('ctl00_ContentPlaceHolder1_ReceiptControl2_txtCardNo').className = "formtextbox";
            document.getElementById('ctl00_ContentPlaceHolder1_ReceiptControl2_txtCurrency').disabled = true;
            document.getElementById('ctl00_ContentPlaceHolder1_ReceiptControl2_txtCurrency').className = "ReadOnlyTextBox";
            document.getElementById('ctl00_ContentPlaceHolder1_ReceiptControl2_txtChangeKyd').disabled = true;
            document.getElementById('ctl00_ContentPlaceHolder1_ReceiptControl2_txtChangeKyd').className = "ReadOnlyTextBox";
            document.getElementById('ctl00_ContentPlaceHolder1_ReceiptControl2_ddlCardType').disabled = true;
            document.getElementById('ctl00_ContentPlaceHolder1_ReceiptControl2_ddlBankName').disabled = false;
            document.getElementById('ctl00_ContentPlaceHolder1_ReceiptControl2_ddlCurrency').disabled = false;
            document.getElementById('ctl00_ContentPlaceHolder1_ReceiptControl2_txtamt').className = 'red';
            $('#ctl00_ContentPlaceHolder1_ReceiptControl2_txtExpDt').addClass('red');
            $('#ctl00_ContentPlaceHolder1_ReceiptControl2_txtExpDt').removeClass('grey');
            document.getElementById('ctl00_ContentPlaceHolder1_ReceiptControl2_txtCardNo').className = 'red';
            document.getElementById('ctl00_ContentPlaceHolder1_ReceiptControl2_txtTenderedAmt').className = 'grey';
            document.getElementById('ctl00_ContentPlaceHolder1_ReceiptControl2_txtAuthCode').className = 'grey';
            trchequedt.style.display = "none";
        }
        else if (__selectedText == 'NEFT' || __selectedText == 'RTGS' || __selectedText == 'RGFT' || __selectedText == 'IMPS') {
            var recdocname = document.getElementById('ctl00_ContentPlaceHolder1_ReceiptControl2_hdnDocName').value;
            if (recdocname == 'CorporateCheckEntry' || recdocname == 'CorporateCheck') {
                ClearTranctions();
                $('#trchequedt').find('td').filter(":eq(" + 0 + ")").text('Neft Dt');
                $('#trchequedt').find('td').filter(":eq(" + 2 + ")").text('Neft Realization Dt')
                document.getElementById('ctl00_ContentPlaceHolder1_ReceiptControl2_txtamt').disabled = false;
                document.getElementById('ctl00_ContentPlaceHolder1_ReceiptControl2_txtamt').value = 0;
                document.getElementById('ctl00_ContentPlaceHolder1_ReceiptControl2_txtamt').className = "formtextbox";
                document.getElementById('ctl00_ContentPlaceHolder1_ReceiptControl2_txtamt').className = 'grey';
                document.getElementById('ctl00_ContentPlaceHolder1_ReceiptControl2_txtamt').disabled = false;
                document.getElementById('ctl00_ContentPlaceHolder1_ReceiptControl2_txtamt').className = 'red';
                document.getElementById('ctl00_ContentPlaceHolder1_ReceiptControl2_txtTenderedAmt').className = 'grey';
                document.getElementById('ctl00_ContentPlaceHolder1_ReceiptControl2_txtTenderedAmt').disabled = true;
                document.getElementById('ctl00_ContentPlaceHolder1_ReceiptControl2_ddlCardType').disabled = true;
                document.getElementById('ctl00_ContentPlaceHolder1_ReceiptControl2_txtTenderedAmt').value = 0;
                document.getElementById('ctl00_ContentPlaceHolder1_ReceiptControl2_ddlBankName').disabled = false;
                document.getElementById('ctl00_ContentPlaceHolder1_ReceiptControl2_ddlBankName').value = 0;
                document.getElementById('ctl00_ContentPlaceHolder1_ReceiptControl2_txtExpDt').value = '';
                document.getElementById('ctl00_ContentPlaceHolder1_ReceiptControl2_txtCardNo').value = '';
                document.getElementById('ctl00_ContentPlaceHolder1_ReceiptControl2_txtCardNo').disabled = false;
                document.getElementById('ctl00_ContentPlaceHolder1_ReceiptControl2_txtAuthCode').disabled = false;
                document.getElementById('ctl00_ContentPlaceHolder1_ReceiptControl2_ddlCardType').value = 0;
                document.getElementById('ctl00_ContentPlaceHolder1_ReceiptControl2_ddlBankName').className = 'red';
                document.getElementById('ctl00_ContentPlaceHolder1_ReceiptControl2_txtCardNo').className = 'grey';
                document.getElementById('ctl00_ContentPlaceHolder1_ReceiptControl2_txtAuthCode').className = 'red';
                document.getElementById('ctl00_ContentPlaceHolder1_ReceiptControl2_lblcarsNo').innerHTML = 'Refer No';
                document.getElementById('ctl00_ContentPlaceHolder1_ReceiptControl2_lblcardtranNo').innerHTML = 'Refer Trans#.';
                date = new Date();
                checkexpdate = new Date(date.getTime() + (90 * 24 * 60 * 60 * 1000)).format("dd-MMM-yyyy");
                document.getElementById('ctl00_ContentPlaceHolder1_ReceiptControl2_txtExpDt').value = checkexpdate;
                var dateaddexp = document.getElementById('ctl00_ContentPlaceHolder1_ReceiptControl2_txtExpDt').value;
                if (dateaddexp == '' || dateaddexp == undefined || dateaddexp == 'undefined') {
                    dateaddexp = 'N';
                }
                if (dateaddexp !== 'N') {
                    $('#ctl00_ContentPlaceHolder1_ReceiptControl2_txtExpDt').addClass('grey');
                    $('#ctl00_ContentPlaceHolder1_ReceiptControl2_txtExpDt').removeClass('red');
                }
                trchequedt.style.display = "table-row";
            }
            else {
                document.getElementById('ctl00_ContentPlaceHolder1_ReceiptControl2_txtamt').disabled = false;
                document.getElementById('ctl00_ContentPlaceHolder1_ReceiptControl2_txtamt').value = 0;
                document.getElementById('ctl00_ContentPlaceHolder1_ReceiptControl2_txtamt').className = "formtextbox";
                document.getElementById('ctl00_ContentPlaceHolder1_ReceiptControl2_txtamt').className = 'grey';
                document.getElementById('ctl00_ContentPlaceHolder1_ReceiptControl2_txtamt').disabled = false;
                document.getElementById('ctl00_ContentPlaceHolder1_ReceiptControl2_txtamt').className = 'red';
                document.getElementById('ctl00_ContentPlaceHolder1_ReceiptControl2_txtTenderedAmt').className = 'grey';
                document.getElementById('ctl00_ContentPlaceHolder1_ReceiptControl2_txtTenderedAmt').disabled = true;
                document.getElementById('ctl00_ContentPlaceHolder1_ReceiptControl2_ddlCardType').disabled = true;
                document.getElementById('ctl00_ContentPlaceHolder1_ReceiptControl2_txtTenderedAmt').value = 0;
                document.getElementById('ctl00_ContentPlaceHolder1_ReceiptControl2_ddlBankName').disabled = false;
                document.getElementById('ctl00_ContentPlaceHolder1_ReceiptControl2_ddlBankName').value = 0;
                document.getElementById('ctl00_ContentPlaceHolder1_ReceiptControl2_txtExpDt').value = '';
                document.getElementById('ctl00_ContentPlaceHolder1_ReceiptControl2_txtCardNo').value = '';
                document.getElementById('ctl00_ContentPlaceHolder1_ReceiptControl2_txtCardNo').disabled = false;
                document.getElementById('ctl00_ContentPlaceHolder1_ReceiptControl2_txtAuthCode').disabled = false;
                document.getElementById('ctl00_ContentPlaceHolder1_ReceiptControl2_ddlCardType').value = 0;
                document.getElementById('ctl00_ContentPlaceHolder1_ReceiptControl2_ddlBankName').className = 'red';
                document.getElementById('ctl00_ContentPlaceHolder1_ReceiptControl2_txtCardNo').className = 'grey';
                document.getElementById('ctl00_ContentPlaceHolder1_ReceiptControl2_txtAuthCode').className = 'red';
                document.getElementById('ctl00_ContentPlaceHolder1_ReceiptControl2_lblcarsNo').innerHTML = 'Refer No';
                document.getElementById('ctl00_ContentPlaceHolder1_ReceiptControl2_lblcardtranNo').innerHTML = 'Refer Trans#.';
                trchequedt.style.display = "none";
            }
        }
        else if (__selectedText == 'Wire Transfer') {
            document.getElementById('ctl00_ContentPlaceHolder1_ReceiptControl2_txtamt').disabled = false;
            document.getElementById('ctl00_ContentPlaceHolder1_ReceiptControl2_txtamt').value = 0;
            document.getElementById('ctl00_ContentPlaceHolder1_ReceiptControl2_txtamt').className = "formtextbox";
            document.getElementById('ctl00_ContentPlaceHolder1_ReceiptControl2_txtamt').className = 'grey';
            document.getElementById('ctl00_ContentPlaceHolder1_ReceiptControl2_txtamt').disabled = false;
            document.getElementById('ctl00_ContentPlaceHolder1_ReceiptControl2_txtamt').className = 'red';
            document.getElementById('ctl00_ContentPlaceHolder1_ReceiptControl2_txtTenderedAmt').className = 'grey';
            document.getElementById('ctl00_ContentPlaceHolder1_ReceiptControl2_txtTenderedAmt').disabled = true;
            document.getElementById('ctl00_ContentPlaceHolder1_ReceiptControl2_ddlCardType').disabled = true;
            document.getElementById('ctl00_ContentPlaceHolder1_ReceiptControl2_txtTenderedAmt').value = 0;
            document.getElementById('ctl00_ContentPlaceHolder1_ReceiptControl2_ddlBankName').disabled = false;
            document.getElementById('ctl00_ContentPlaceHolder1_ReceiptControl2_ddlBankName').value = 0;
            document.getElementById('ctl00_ContentPlaceHolder1_ReceiptControl2_txtExpDt').value = '';
            document.getElementById('ctl00_ContentPlaceHolder1_ReceiptControl2_txtCardNo').value = '';
            document.getElementById('ctl00_ContentPlaceHolder1_ReceiptControl2_txtCardNo').disabled = false;
            document.getElementById('ctl00_ContentPlaceHolder1_ReceiptControl2_txtAuthCode').disabled = false;
            document.getElementById('ctl00_ContentPlaceHolder1_ReceiptControl2_ddlCardType').value = 0;
            document.getElementById('ctl00_ContentPlaceHolder1_ReceiptControl2_ddlBankName').className = 'red';
            document.getElementById('ctl00_ContentPlaceHolder1_ReceiptControl2_txtCardNo').className = 'grey';
            document.getElementById('ctl00_ContentPlaceHolder1_ReceiptControl2_txtAuthCode').className = 'red';
            document.getElementById('ctl00_ContentPlaceHolder1_ReceiptControl2_lblcarsNo').innerHTML = 'Reference#';
            document.getElementById('ctl00_ContentPlaceHolder1_ReceiptControl2_lblcardtranNo').innerHTML = 'Reference#';
            trchequedt.style.display = "none";
        }
        else if (__selectedText == 'My Card') {
            document.getElementById('ctl00_ContentPlaceHolder1_ReceiptControl2_txtCardNo').className = 'red';
            $('#ctl00_ContentPlaceHolder1_ReceiptControl2_txtExpDt').addClass('grey');
            $('#ctl00_ContentPlaceHolder1_ReceiptControl2_txtExpDt').removeClass('red');
            document.getElementById('ctl00_ContentPlaceHolder1_ReceiptControl2_txtExpDt').disabled = false;
            document.getElementById('ctl00_ContentPlaceHolder1_ReceiptControl2_ddlBankName').className = 'grey';
            document.getElementById('ctl00_ContentPlaceHolder1_ReceiptControl2_ddlBankName').value = 0;
            document.getElementById('ctl00_ContentPlaceHolder1_ReceiptControl2_ddlCardType').className = 'grey';
            document.getElementById('ctl00_ContentPlaceHolder1_ReceiptControl2_txtAuthCode').className = 'grey';
            document.getElementById('ctl00_ContentPlaceHolder1_ReceiptControl2_ddlCardType').value = 0;
            document.getElementById('ctl00_ContentPlaceHolder1_ReceiptControl2_txtamt').disabled = false;
            document.getElementById('ctl00_ContentPlaceHolder1_ReceiptControl2_txtamt').value = 0;
            document.getElementById('ctl00_ContentPlaceHolder1_ReceiptControl2_txtamt').className = "formtextbox";
            document.getElementById('ctl00_ContentPlaceHolder1_ReceiptControl2_txtamt').className = 'grey';
            document.getElementById('ctl00_ContentPlaceHolder1_ReceiptControl2_txtCardNo').className = 'grey';
            document.getElementById('ctl00_ContentPlaceHolder1_ReceiptControl2_txtamt').disabled = false;
            document.getElementById('ctl00_ContentPlaceHolder1_ReceiptControl2_txtamt').className = 'red';
            document.getElementById('ctl00_ContentPlaceHolder1_ReceiptControl2_txtTenderedAmt').disabled = true;
            document.getElementById('ctl00_ContentPlaceHolder1_ReceiptControl2_txtTenderedAmt').value = 0;
            document.getElementById('ctl00_ContentPlaceHolder1_ReceiptControl2_ddlBankName').disabled = true;
            document.getElementById('ctl00_ContentPlaceHolder1_ReceiptControl2_ddlBankName').value = 0;
            document.getElementById('ctl00_ContentPlaceHolder1_ReceiptControl2_txtExpDt').value = '';
            document.getElementById('ctl00_ContentPlaceHolder1_ReceiptControl2_txtCardNo').value = '';
            document.getElementById('ctl00_ContentPlaceHolder1_ReceiptControl2_txtCardNo').disabled = false;
            document.getElementById('ctl00_ContentPlaceHolder1_ReceiptControl2_ddlCardType').value = 0;
            trchequedt.style.display = "none";
        }
        else if (__selectedText == 'Advance Adjustment') {
            DisableControl();
            TenderedColorCode();
            nonmandatorys();
            document.getElementById('ctl00_ContentPlaceHolder1_ReceiptControl2_txtamt').disabled = true;
            document.getElementById('ctl00_ContentPlaceHolder1_ReceiptControl2_txtamt').value = 0;
            document.getElementById('ctl00_ContentPlaceHolder1_ReceiptControl2_txtTenderedAmt').className = 'red';
            document.getElementById('ctl00_ContentPlaceHolder1_ReceiptControl2_ddlCurrency').value = document.getElementById('ctl00_ContentPlaceHolder1_ReceiptControl2_hdnbaseCurrency').value
            document.getElementById('ctl00_ContentPlaceHolder1_ReceiptControl2_ddlCurrency').disabled = true;
            trchequedt.style.display = "none";
        }
        else {
            document.getElementById('ctl00_ContentPlaceHolder1_ReceiptControl2_lblcarsNo').innerHTML = 'Card No';
            var form_name = $('#ctl00_ContentPlaceHolder1_ReceiptControl2_hdnDocName').val();
            if (form_name == undefined || form_name == null) { form_name = ''; }
            if (form_name != '') {
                trchequedt.style.display = "none";
            }
        }
       // var docname = document.getElementById('ctl00_ContentPlaceHolder1_ReceiptControl2_hdnDocName').value;
        var curvalue = 0;
        if (docName == "IpAdvance") {
            if (__selectedText == 'Credit Card' || __selectedText == 'Debit Card' || __selectedText == 'Cheque') {
                curvalue = document.getElementById('ctl00_ContentPlaceHolder1_ReceiptControl2_hdnSrvchargValSetting').value;
                if (curvalue == undefined || curvalue == "" || curvalue == null) { curvalue = 0; }
                document.getElementById('ctl00_ContentPlaceHolder1_ReceiptControl2_txtsrvcharges').value = curvalue;
            }
            else
                document.getElementById('ctl00_ContentPlaceHolder1_ReceiptControl2_txtsrvcharges').value = 0;
        }
        else
            document.getElementById('ctl00_ContentPlaceHolder1_ReceiptControl2_txtsrvcharges').value = 0;
        chequeauthrization(); /* added on 03.10.2016 */

    }
}

