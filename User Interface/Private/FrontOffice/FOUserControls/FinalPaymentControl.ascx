<%@ Control Language="C#" AutoEventWireup="true" CodeFile="FinalPaymentControl.ascx.cs"
    Inherits="Private_FrontOffice_FOUserControls_FinalPaymentControl" %>
<%@ Register Assembly="AjaxControlToolkit" Namespace="AjaxControlToolkit" TagPrefix="ajaxToolkit" %>
<%@ Register Src="~/Private/UserControls/LookUp.ascx" TagName="Search" TagPrefix="Lookup1" %>
<script type="text/javascript">


    $(document).keydown(function (event) {
        if (event.altKey == true) {
            $('[id*=globalSearch]').focus();
        }
    });

    var ctrlcom = 'ctl00_ContentPlaceHolder1';

    function checkfromdt1(obj) {


        var dt = new Date(obj);
        dt.setDate(dt.getDate());
        $('#' + ctrlcom + '_ReceiptControl2_pendingtodt').datepicker("option", "minDate", dt);
        $('#' + ctrlcom + '_ReceiptControl2_pendingtodt').val(new Date().format('dd-MMM-yyyy'));
    }
    function checkfromdt(obj) {

        var dt = new Date(obj);
        dt.setDate(dt.getDate());
        $('#' + ctrlcom + '_ReceiptControl2_txtpainlabTOtdt').datepicker("option", "minDate", dt);
        $('#' + ctrlcom + '_ReceiptControl2_txtpainlabTOtdt').val(new Date().format('dd-MMM-yyyy'));
    }
    $(document).ready(function () {
        $('#' + ctrlcom + '_ReceiptControl2_txtpainlabFromdt').datepicker({
            changeMonth: true,
            changeYear: true,
            dateFormat: "dd-MMM-yyyy",
            maxDate: new Date(),

            onSelect: function (selected) {
                checkfromdt(selected);


            }
        });
        $('#' + ctrlcom + '_ReceiptControl2_txtpainlabTOtdt').datepicker({
            changeMonth: true,
            changeYear: true,
            dateFormat: "dd-MMM-yyyy",
            minDate: new Date($('#' + ctrlcom + '_ReceiptControl2_txtpainlabFromdt').text()),
            maxDate: new Date()
        });



        $('#' + ctrlcom + '_ReceiptControl2_pendingfromdt').datepicker({
            changeMonth: true,
            changeYear: true,
            dateFormat: "dd-MMM-yyyy",
            maxDate: new Date(),
            onSelect: function (selected) {
                checkfromdt1(selected);


            }
        });
        $('#' + ctrlcom + '_ReceiptControl2_pendingtodt').datepicker({
            changeMonth: true,
            changeYear: true,
            dateFormat: "dd-MMM-yyyy",
            minDate: new Date($('#' + ctrlcom + '_ReceiptControl2_pendingfromdt').text()),
            maxDate: new Date()
        });
    });


    function applyapproveStatments(obj) {
        var doc_form_cd_machine = getParameterByName("DOC_FORM_CD");
        $('[id*=divpendingmissionpayment]')[0].style.display = 'none';
        var Jdata = $(obj).parent().parent().find('[id*=lblorgdata]').text().trim();
        var flag = $(obj).parent().parent().find('[id*=lblprocess]').text().trim();
        var procamount = $(obj).parent().parent().find('[id*=lblamount]').text().trim();
        var mobileno = $(obj).parent().parent().find('[id*=lblmobileno]').text().trim();
        var paymentmodeid = 0;
        paymentmodeid = $(obj).parent().parent().find('[id*=hdnpaymentmodeid]').val();
        var amount = 0;

        var Pinelabreq = document.getElementById('<%= hdnpinelabintgreq.ClientID %>').value;
        var EnableEmpasa = document.getElementById('<%= hdnempasaintgreq.ClientID %>').value;
        var hdnecitigen = document.getElementById('ctl00_hdnecitigen').value;

        if (Pinelabreq == 'YES') {
            if (flag == 'P') {
                if (JSON.parse(Jdata).ResponseCode == "0") {
                    IP_REQUEST_STRING = Jdata;
                    dataarray.push(JSON.parse(Jdata));
                    document.getElementById('<%= hdnPlutusTransactionReferenceID.ClientID %>').value = dataarray[0].PlutusTransactionReferenceID;
                    IP_AMOUNT = parseFloat(procamount) * 100;
                    $('[id*=ddlPaymentType]').val(paymentmodeid);
                    if (mode == "Q") {
                        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtCardAmt').value = procamount;
                        $('[id*=ddlcrdtype]').val(paymentmodeid);
                    }
                    else if (mode == "A") {
                        if (paymentmodeid == '4' || paymentmodeid == '5') {
                            $('[id*=ddlPaymentType]').val(paymentmodeid);
                            checkpayment();
                            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtamt').value = procamount;

                            NewCalculateTendorAmt(cardtype, ctl00_ContentPlaceHolder1_ReceiptControl2_txtamt);
                            srvchrgamount(ctl00_ContentPlaceHolder1_ReceiptControl2_txtamt, amount);

                        }
                        else {
                            $('[id*=ddlPaymentType]').val(paymentmodeid);
                            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtTenderedAmt').value = procamount;
                            $('#' + ctrlcom + '_ReceiptControl2_txtamt').val(amount)
                        }
                    }
                    $('[id*=btnpineclick]')[0].style.display = 'none';
                    $('[id*=btnpineapproveclick]')[0].style.display = 'block';
                    $('[id*=btnCancelpineclick]')[0].style.display = 'block';
                    return false;
                }
            }
            else {
                if (JSON.parse(Jdata).ResponseCode == "0") {


                    var cardnumber = '';
                    var authno = '';
                    var cardtype = ''
                    var bankname = ''
                    var Trantype = '';
                    var Tid = 0

                    dataarray1 = [];
                    if (doc_form_cd_machine == "FO_PREREFUND" || doc_form_cd_machine == "FO_REFUND") {
                        dataarray1.push(JSON.parse(Jdata));
                        $('[id*=btnpineclick]')[0].style.display = 'block';
                        $('[id*=btnpineapproveclick]')[0].style.display = 'none';
                        $('[id*=btnCancelpineclick]')[0].style.display = 'none';



                        authno = dataarray1[0].TransactionData[1].Value;
                        cardnumber = document.getElementById("<%= hdnbanCC_CARD_NO.ClientID %>").value;
                        bankname = document.getElementById("<%= hdnbanCC_ISSUE_BANK_ID.ClientID %>").value;
                        amount = document.getElementById("<%= hdnbanCC_amount.ClientID %>").value;
                        Trantype = 'CARD';
                        var cardtype_id = document.getElementById("<%= hdnbanCC_CARD_TYPE_ID.ClientID %>").value;
                        $('[id*=ddlCardType]').val(cardtype_id);
                        cardtype = $('[id*=ddlCardType] option:selected').text();

                        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtExpDt').value = new Date().format('dd-MMM-yyyy');
                        checkpayment();
                        document.getElementById('<%= hdnPlutusTransactionReferenceID.ClientID %>').value = dataarray1[0].PlutusTransactionReferenceID;
                        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtCardNo').value = cardnumber;
                        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtamt').value = amount;
                        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtAuthCode').value = authno;
                        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtExpDt').value = new Date().format('dd-MMM-yyyy');
                        var cardtype_id = document.getElementById("<%= hdnbanCC_CARD_TYPE_ID.ClientID %>").value;
                        $('[id*=ddlCardType]').val(cardtype_id);
                        cardtype = $('[id*=ddlCardType] option:selected').text();


                        $('[id*=ddlBankName] option:contains(' + bankname + ')').attr('selected', true);
                        $('[id*=ddlCardType] option:contains(' + cardtype + ')').attr('selected', true);




                        NewCalculateTendorAmt(cardtype, ctl00_ContentPlaceHolder1_ReceiptControl2_txtamt);
                        srvchrgamount(ctl00_ContentPlaceHolder1_ReceiptControl2_txtamt, amount);
                    } else {
                        dataarray1.push(JSON.parse(Jdata));
                        $('[id*=btnpineclick]')[0].style.display = 'block';
                        $('[id*=btnpineapproveclick]')[0].style.display = 'none';
                        $('[id*=btnCancelpineclick]')[0].style.display = 'none';

                        if (dataarray1[0].TransactionData[2].Value.toUpperCase() == 'CARD') {
                            amount = dataarray1[0].TransactionData[3].Value;
                            Tid = dataarray1[0].TransactionData[0].Value;
                            cardnumber = dataarray1[0].TransactionData[8].Value;
                            authno = dataarray1[0].TransactionData[19].Value;
                            Trantype = dataarray1[0].TransactionData[2].Value;
                            cardtype = dataarray1[0].TransactionData[10].Value;
                            bankname = dataarray1[0].TransactionData[12].Value;
                            document.getElementById('<%= hdnPlutusTransactionReferenceID.ClientID %>').value = dataarray1[0].PlutusTransactionReferenceID;
                        } else {
                            amount = dataarray1[0].TransactionData[3].Value;
                            Tid = dataarray1[0].TransactionData[0].Value;
                            cardnumber = dataarray1[0].TransactionData[8].Value;
                            authno = dataarray1[0].TransactionData[16].Value;
                            Trantype = dataarray1[0].TransactionData[2].Value;
                            cardtype = dataarray1[0].TransactionData[10].Value;
                            bankname = cardtype;
                            document.getElementById('<%= hdnPlutusTransactionReferenceID.ClientID %>').value = dataarray1[0].PlutusTransactionReferenceID;

                        }
                        paymentmodeid = $(obj).parent().parent().find('[id*=hdnpaymentmodeid]').val();
                    }
                    if (mode == "Q") {
                        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtcardNoCmp').value = cardnumber;
                        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtCardAmt').value = amount;
                        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtcardAuther').value = authno;
                        $('[id*=ddbankName] option:contains(' + bankname + ')').attr('selected', true);
                        $('[id*=ddlcrdtype]').val(paymentmodeid);
                        $('[id*=ddcardType] option:contains(' + cardtype + ')').attr('selected', true);
                        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtcardNoCmp').disabled = true;
                        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtCardAmt').disabled = true;
                        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtcardAuther').disabled = true;
                        $('[id*=ddbankName] option:contains(' + bankname + ')').attr('disabled', true);
                        $('[id*=ddcardType] option:contains(' + cardtype + ')').attr('disabled', true);
                        $('[id*=ddlcrdtype]').attr('disabled', true);
                        $('#' + ctrlcom + '_ReceiptControl2_txtcashAmt').val(0);
                        var _card = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtCardAmt');
                        CalculateAmount(_card, 'Card');
                        CalculateAmountPinelabCardPayment('Card')
                    }
                    else if (mode == "A") {
                        if (Trantype.toUpperCase() == 'CARD') {
                            $('[id*=ddlPaymentType]').val(paymentmodeid);
                            checkpayment();
                            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtCardNo').value = cardnumber;
                            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtamt').value = amount;
                            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtAuthCode').value = authno;
                            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtExpDt').value = new Date().format('dd-MMM-yyyy');
                            $('[id*=ddlBankName] option:contains(' + bankname + ')').attr('selected', true);
                            $('[id*=ddlCardType] option:contains(' + cardtype + ')').attr('selected', true);

                            $('[id*=ddlPaymentType]').attr('disabled', true);
                        }
                        else {
                            $('[id*=ddlPaymentType]').val(paymentmodeid);
                            checkpayment();
                            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtCardNo').value = Tid;
                            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtAuthCode').value = authno;
                            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtTenderedAmt').value = amount;
                            $('#' + ctrlcom + '_ReceiptControl2_txtamt').val(amount)
                        }
                        if (doc_form_cd_machine == 'FO_OUTSTANDING' || doc_form_cd_machine == 'FOIPADV' || doc_form_cd_machine == 'FO_REFUND' || doc_form_cd_machine == 'Rk9PUEFEVg==' || doc_form_cd_machine == 'FOOPADV') {
                            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtChangeKyd').value = 0;
                            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtCurrAmt').value = amount;

                        }
                        if (doc_form_cd_machine == 'FO_OUTSTANDING' || doc_form_cd_machine == 'FOIPADV' || doc_form_cd_machine == 'FO_REFUND' || doc_form_cd_machine == 'Rk9PUEFEVg==' || doc_form_cd_machine == 'FOOPADV') {
                            srvchrgamount(ctl00_ContentPlaceHolder1_ReceiptControl2_txtamt, amount);
                        }


                        NewAddTransactionDetails();
                    }
                    var doc_form_cd_machine = getParameterByName("DOC_FORM_CD");
                    if (doc_form_cd_machine == 'REG-EXPIRY') {

                    }
                    else if (doc_form_cd_machine == 'HISOPBILLFRNT' || doc_form_cd_machine == 'FO_OPCONSULT') {
                        $('[id*=gvServices] tr:has(td) input[type=text]').attr('disabled', 'true');
                        $('[id*=gvServices] tr:has(td) input[type=button]').attr('disabled', 'true');
                        $('[id*=gvServices] tr:has(td) select').attr('disabled', 'true');
                    }
                    else if (doc_form_cd_machine == 'OPDREGBILL') {
                        $('[id*=gvServices] tr:has(td) input[type=text]').attr('disabled', 'true');
                        $('[id*=gvServices] tr:has(td) input[type=button]').attr('disabled', 'true');
                        $('[id*=gvServices] tr:has(td) select').attr('disabled', 'true');
                    }
                }
            }
        }
        if (EnableEmpasa == 'YES') {
            if (JSON.parse(Jdata).ResponseCode == "0") {
                dataarrayEmpasaMob = [];
                dataarrayEmpasaMob.push(JSON.parse(Jdata));
                if (dataarrayEmpasaMob[0].ResultCode == '1032' && dataarrayEmpasaMob[0].ResultDesc == 'Request cancelled by user') {
                    $(".toast").toastText("Info", "Request cancelled by user", 5, 2);
                    return false;

                }
                else if (dataarrayEmpasaMob[0].ResultCode == '1032' && dataarrayEmpasaMob[0].ResultDesc == 'The service request is processed successfully.') {
                    Callmobileintiate(url, PassKey, BusinessShortCode, CheckoutRequestID, Access_Token, IP_COMUNICATION_ID);
                    return false;
                }

                else if (dataarrayEmpasaMob[0].ResultCode == '1037' || dataarrayEmpasaMob[0].ResultCode == '2006') {
                    $(".toast").toastText("Info", "" + dataarrayEmpasaMob[0].ResultDesc + "", 5, 2);
                    return false;
                }
                else if (dataarrayEmpasaMob[0].ResultCode == '0' && dataarrayEmpasaMob[0].ResultDesc == 'The service request is processed successfully.') {
                    var amount = 0;
                    var cardnumber = '';
                    var authno = '';
                    var cardtype = ''
                    var bankname = ''
                    var Trantype = '';
                    var Tid = 0;
                    dataarray1 = [];
                    $('[id*=btnpineclick]')[0].style.display = 'block';
                    $('[id*=btnpineapproveclick]')[0].style.display = 'none';
                    $('[id*=btnCancelpineclick]')[0].style.display = 'none';
                    document.getElementById('<%= hdnPlutusTransactionReferenceID.ClientID %>').value = dataarrayEmpasaMob[0].CheckoutRequestID;
                    amount = procamount;

                    paymentmodeid = $(obj).parent().parent().find('[id*=hdnpaymentmodeid]').val();
                    $('[id*=ddlPaymentType]').val(paymentmodeid);
                    checkpayment();
                    $('#' + ctrlcom + '_ReceiptControl2_txtamt').val(amount);

                    Tid = dataarrayEmpasaMob[0].CheckoutRequestID;
                    cardnumber = dataarrayEmpasaMob[0].MerchantRequestID;

                    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtCardNo').value = mobileno;
                    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtAuthCode').value = cardnumber;
                    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtTenderedAmt').value = amount;
                    //srvchrgamount(ctl00_ContentPlaceHolder1_ReceiptControl2_txtamt, amount);
                    NewAddTransactionDetails();
                }
            }
        }
        if (hdnecitigen.toUpperCase() == "Y") {
            invoicenumber = $(obj).parent().parent().find('[id*=txtrequestno]').text().trim();
            $('[id*=btnpineclick]')[0].style.display = 'none';
            $('[id*=btnpineapproveclick]')[0].style.display = 'block';
            return false;
        }
    }
    function Bindapprovependingnew() {
        if (getParameterByName('MODE') == "VIEW")
            return false;
        else {
            $('[id*=divpendingmissionpayment]')[0].style.display = 'block';
            document.getElementById('' + ctrlcom + '_ReceiptControl2_pendingfromdt').value = new Date().format('dd-MMM-yyyy');
            document.getElementById('' + ctrlcom + '_ReceiptControl2_pendingtodt').value = new Date().format('dd-MMM-yyyy');
            Bindapprovepending();
        }
    }

    function Bindapprovepending() {
        var terminalid = $('[id*=Ddlpinelab] option:selected').val();
        if (terminalid == undefined || terminalid == "" || terminalid == 'undefined' || terminalid == null || terminalid == 'null') {
            terminalid = 0;
        }
        var _fDt = document.getElementById('' + ctrlcom + '_ReceiptControl2_pendingfromdt').value;
        var _tDt = document.getElementById('' + ctrlcom + '_ReceiptControl2_pendingtodt').value;

        GetNonAsync(
                 "Private/FrontOffice/OpBilling/OPBillClientSide.aspx/BindMessionpendingProcesseddata",
                 { billid: terminalid, fromtdt: _fDt, todate: _tDt },
                 function (JData) {
                     $('table[id$=gvStatementpeningBills]').find("tr:gt(0)").remove();
                     var data = JData;
                     if (data.d[0] != null && data.d[0] != "" && data.d[0] != undefined) {
                         renderUIStatmentGridpending(data.d[0]);
                         $('[id*=divpendingmissionpayment]')[0].style.display = 'block';
                         return false;
                     }
                 },
                 function (jqXHR, textStatus, errorThrown) {
                 });
    }
    function btnclose16() {
        $('[id*=divGridTerminalPop]')[0].style.display = 'none';
    }
    function btnclose14() {
        $('[id*=DivAuth]')[0].style.display = 'none';
    }
    function BindChequeListnew() {
        if (getParameterByName('MODE') == "VIEW")
            return false;
        else {
            $('[id*=divGridTerminalPop]')[0].style.display = 'block';
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpainlabFromdt').value = new Date().format('dd-MMM-yyyy');
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpainlabTOtdt').value = new Date().format('dd-MMM-yyyy');

            BindChequeList();
        }
    }

    function BindChequeList() {





        var cName = ''; var pText = '';
        var param = param || {};
        param.dataKey = "CMPNY_CHEQUE_ID";
        param.pageSize = 10;
        param.pageNum = 1;
        var _fDt = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpainlabFromdt').value;
        var _tDt = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpainlabTOtdt').value;
        param.defaultWSParams = { _cName: cName, _pText: pText, _advSrch: '', fromtdt: _fDt, todate: _tDt };
        param.wsPath = "Private/FrontOffice/OpBilling/OPBillClientSide.aspx/Terminalmachaindata";
        param.wsFilterPath = "Private/FrontOffice/OpBilling/OPBillClientSide.aspx/Terminalmachaindata";
        param.template = ["MAP_TERMINAL_NAME*MAP_TERMINAL_NAME"
                              , "DEVICE_NO*DEVICE_NO"
                              , "SECURITY_TOKEN*SECURITY_TOKEN"
                              , "IMEI*IMEI"
                              , "MERCHANT_STORE_POS_CODE*MERCHANT_STORE_POS_CODE"
                              , "AUTO_CANCEL_DURATION_MINUTES*AUTO_CANCEL_DURATION_MINUTES"
                              , "MAP_LOC_NAME*MAP_LOC_NAME"
                              , "CREATE_BY_NAME*CREATE_BY_NAME"
                              , "CREATE_DT*CREATE_DT"
                              , "RECORD_STATUS*RECORD_STATUS"
                             ];
        param.header = [{ col: "Terminal name", sort: true, filter: true }
            , { col: "Device #", sort: true, filter: true }
            , { col: "Security token#", sort: true, filter: true }
            , { col: "Imei #", sort: true, filter: true }
            , { col: "Murchant store pos code", sort: true, filter: true }
            , { col: "Auto cancel duration minutes", sort: true, filter: true }
            , { col: "Map location name", sort: true, filter: true }
            , { col: "Created by", sort: true, filter: true }
            , { col: "Created dt", sort: true, filter: true }
            , { col: "Status", sort: true, filter: true }
            ];
        param.enablePaging = true;
        param.enableTrace = true;
        param.enableFilter = true;
        param.enableCheckbox = false;
        param.enableDMS = false;
        param.enableSorting = false; param.tableTemplate = true;
        param.rowClick = function (key) {
            BindCheckBalanceAmt(key);
        };
        gridControl = $("#divchequedata").jtable(param);
        return false;
    }

    $(document).ready(function (e) {
        var Pinelabreq = document.getElementById('<%= hdnpinelabintgreq.ClientID %>').value;
        var EnableEmpasa = document.getElementById('<%= hdnempasaintgreq.ClientID %>').value;
        var EnableEcitizen = document.getElementById('ctl00_hdnecitigen').value;
        var Paytm = document.getElementById('<%= hdnpaytmint.ClientID %>').value;

        if (Pinelabreq == 'YES' || EnableEmpasa == 'YES') {
            $('[id*=divpinelabintg]')[0].style.display = 'block';
            BindPinelabDropdowndata();
            var CONFIG_ID = getCookie("CONFIG_ID");
            if (CONFIG_ID != "") {
                $('[id*=hdnmachinepinelabDeviceNo]').val(CONFIG_ID);
                $('[id$=ctl00_ContentPlaceHolder1_ReceiptControl2_Ddlpinelab]').val(CONFIG_ID);
                for (var i = 0; i < michainmasterdata[0].length; i++) {
                    var posid = CONFIG_ID;
                    if (posid == michainmasterdata[0][i].CONFIG_ID) {
                        SECURITY_TOKEN = michainmasterdata[0][i].SECURITY_TOKEN;
                        MERCHANT_STORE_POS_CODE = michainmasterdata[0][i].MERCHANT_STORE_POS_CODE;
                        IMEI = michainmasterdata[0][i].IMEI;
                        AUTO_CANCEL_DURATION_MINUTES = michainmasterdata[0][i].AUTO_CANCEL_DURATION_MINUTES;
                        MERCHANTID = michainmasterdata[0][i].MERCHANTID;
                    }
                }
            }
        }
        else if (EnableEcitizen == "Y") {
            $('[id*=divpinelabintg]')[0].style.display = 'block';
            BindEcitigenbDropdowndata();
        }
        else if (Paytm == "YES") {
            $('[id*=divpinelabintg]')[0].style.display = 'block';
            BindPaytmDropdowndata();
            var CONFIG_ID = getCookie("CONFIG_ID");
            if (CONFIG_ID != "") {
                $('[id*=hdnmachinepinelabDeviceNo]').val(CONFIG_ID);
                $('[id$=ctl00_ContentPlaceHolder1_ReceiptControl2_Ddlpinelab]').val(CONFIG_ID);
                for (var i = 0; i < michainmasterdata[0].length; i++) {
                    var posid = CONFIG_ID;
                    if (posid == michainmasterdata[0][i].CONFIG_ID) {
                        SECURITY_TOKEN = michainmasterdata[0][i].CLIENTIDNUMBER;
                        MERCHANT_STORE_POS_CODE = michainmasterdata[0][i].CLIENTEMAIL;
                        IMEI = michainmasterdata[0][i].SECRET;
                        AUTO_CANCEL_DURATION_MINUTES = michainmasterdata[0][i].KEY_VALUE;

                    }
                }
            }
        }
        else {
            $('[id*=divpinelabintg]')[0].style.display = 'none';

        }
    });
    var michainmasterdata = new Array();
    function BindPinelabDropdowndata() {
        var UrlVal = ReturnIniUrl();
        var UIpath = UrlVal + 'Private/FrontOffice/OpBilling/OPBillClientSide.aspx/BindMessionDataDropdown';
        var _JSONParams = "";
        $.ajax({
            type: "POST",
            url: UIpath,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            data: _JSONParams,
            async: false,
            error: function (jqXHR, textStatus, errorThrown) {
                $(".stoast").toastText("Info", "'" + errorThrown + "'", 7, 2);
                return false;
            },
            success: function (jdata) {
                var data = jdata;
                var _optionsVal1 = '';
                michainmasterdata.push(data.d[0]);
                if (data.d[0] != null && data.d[0] != "" && data.d[0] != undefined) {
                    _optionsVal1 += "<OPTION value='" + 0 + "'>" + '-Select-' + "</OPTION>";
                    for (i = 0; i < data.d[0].length; i++) {
                        _optionsVal1 += "<OPTION id=" + data.d[0][i].CONFIG_ID + " value='" + data.d[0][i].CONFIG_ID + "'>" + data.d[0][i].MAP_TERMINAL_NAME + " </OPTION> ";
                    }
                    $('[id$=ctl00_ContentPlaceHolder1_ReceiptControl2_Ddlpinelab]').empty().html(_optionsVal1);
                }
            }
        });
    }

    function BindEcitigenbDropdowndata() {
        var UrlVal = ReturnIniUrl();
        var UIpath = UrlVal + 'Private/FrontOffice/OpBilling/OPBillClientSide.aspx/BindMessionDataDropdown';
        var _JSONParams = "";
        $.ajax({
            type: "POST",
            url: UIpath,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            data: _JSONParams,
            async: false,
            error: function (jqXHR, textStatus, errorThrown) {
                $(".stoast").toastText("Info", "'" + errorThrown + "'", 7, 2);
                return false;
            },
            success: function (jdata) {
                var data = jdata;
                var _optionsVal1 = '';
                michainmasterdata.push(data.d[0]);
                if (data.d[0] != null && data.d[0] != "" && data.d[0] != undefined) {
                    _optionsVal1 += "<OPTION value='" + 0 + "'>" + '-Select-' + "</OPTION>";
                    for (i = 0; i < data.d[0].length; i++) {
                        _optionsVal1 += "<OPTION id=" + data.d[0][i].ECITIGEN_DEVICE_ID + " value='" + data.d[0][i].ECITIGEN_DEVICE_ID + "'>" + data.d[0][i].MAP_TERIMAL_NAME + " </OPTION> ";
                    }
                    $('[id$=ctl00_ContentPlaceHolder1_ReceiptControl2_Ddlpinelab]').empty().html(_optionsVal1);
                }
            }
        });

    }
    function BindPaytmDropdowndata() {
        var UrlVal = ReturnIniUrl();
        var UIpath = UrlVal + 'Private/FrontOffice/OpBilling/OPBillClientSide.aspx/BindMessionDataDropdown';
        var _JSONParams = "";
        $.ajax({
            type: "POST",
            url: UIpath,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            data: _JSONParams,
            async: false,
            error: function (jqXHR, textStatus, errorThrown) {
                $(".stoast").toastText("Info", "'" + errorThrown + "'", 7, 2);
                return false;
            },
            success: function (jdata) {
                var data = jdata;
                var _optionsVal1 = '';
                michainmasterdata.push(data.d[0]);
                if (data.d[0] != null && data.d[0] != "" && data.d[0] != undefined) {
                    _optionsVal1 += "<OPTION value='" + 0 + "'>" + '-Select-' + "</OPTION>";
                    for (i = 0; i < data.d[0].length; i++) {
                        _optionsVal1 += "<OPTION id=" + data.d[0][i].ECITIGEN_DEVICE_ID + " value='" + data.d[0][i].ECITIGEN_DEVICE_ID + "'>" + data.d[0][i].MAP_TERIMAL_NAME + " </OPTION> ";
                    }
                    $('[id$=ctl00_ContentPlaceHolder1_ReceiptControl2_Ddlpinelab]').empty().html(_optionsVal1);
                }
            }
        });

    }
    var SECURITY_TOKEN = '', MERCHANT_STORE_POS_CODE = '', IMEI = '', AUTO_CANCEL_DURATION_MINUTES = '', MERCHANTID = '';
    function machinepinelabDeviceSelection(obj) {
        var hdnecitigen = document.getElementById('ctl00_hdnecitigen').value;

        if (hdnecitigen.toUpperCase() != "Y") {
            var _machinepinelabDeviceNo = $(obj).val();
            var CONFIG_ID = getCookie("CONFIG_ID");
            if (CONFIG_ID != _machinepinelabDeviceNo) {
                document.cookie = "CONFIG_ID" + "=" + _machinepinelabDeviceNo + ";path=/";
                $('[id*=hdnmachinepinelabDeviceNo]').val(_machinepinelabDeviceNo);
            } else {
                document.cookie = "CONFIG_ID" + "=" + CONFIG_ID + ";path=/";
                $('[id*=hdnmachinepinelabDeviceNo]').val(CONFIG_ID);
            }
            for (var i = 0; i < michainmasterdata[0].length; i++) {
                var posid = $('[id*=hdnmachinepinelabDeviceNo]').val();


                if (posid == michainmasterdata[0][i].CONFIG_ID) {
                    /*Paytm Mid	: KEY_VALUE
                    Key        : CLIENTIDNUMBER
                    Paytm Tid	: CLIENTEMAIL   
                    Channel Id	: SECRET*/
                    var Paytm = document.getElementById('<%= hdnpaytmint.ClientID %>').value;
                    if (Paytm == 'YES') {
                        SECURITY_TOKEN = michainmasterdata[0][i].CLIENTIDNUMBER;
                        MERCHANT_STORE_POS_CODE = michainmasterdata[0][i].CLIENTEMAIL;
                        IMEI = michainmasterdata[0][i].SECRET;
                        AUTO_CANCEL_DURATION_MINUTES = michainmasterdata[0][i].KEY_VALUE;
                    } else {
                        SECURITY_TOKEN = michainmasterdata[0][i].SECURITY_TOKEN;
                        MERCHANT_STORE_POS_CODE = michainmasterdata[0][i].MERCHANT_STORE_POS_CODE;
                        IMEI = michainmasterdata[0][i].IMEI;
                        AUTO_CANCEL_DURATION_MINUTES = michainmasterdata[0][i].AUTO_CANCEL_DURATION_MINUTES;
                        MERCHANTID = michainmasterdata[0][i].MERCHANTID;
                    }
                }
            }

        }
    }
    function renderUIStatmentGridpending(jData) {
        var _html = "";
        var _billingTemplate = _.template($("#tbodyapproveStatment").html());
        _dataSourcependingStmtGrid = jData;
        $("#" + ctrlcom + "_gvStatementpeningBills tbody").append(_billingTemplate(_dataSourcependingStmtGrid));
        console.log('rendering Completed');
        console.log(new Date());
    }
    /*1. Upload Transation Pinelabdata*/
    function renderUIStatmentGrid(jData) {
        var _html = "";
        var _billingTemplate = _.template($("#tbodyStatment").html());
        _dataSourceStmtGrid = jData;
        $("#" + ctrlcom + "_gvStatementBills tbody").append(_billingTemplate(_dataSourceStmtGrid));
        console.log('rendering Completed');
        console.log(new Date());
    }
    function btnclose25() {
        $('[id*=divmissionpayment]')[0].style.display = 'none';
    }
    function btnclose26() {
        $('[id*=divpendingmissionpayment]')[0].style.display = 'none';
    }
    function applydataassign(obj) {
        //$(obj)

        var paymentmodeid = $(obj).parent().parent().find('[id*=hdnpaymentmodeid]').val();
        var amount = $(obj).parent().parent().find('[id*=lblamount]').text().trim();
        var plutusreferenceid = $(obj).parent().parent().find('[id*=hdnplutusreferenceidid]').val();
        var paymodename = $(obj).parent().parent().find('[id*=lblpaymentmode]').text().trim();
        var communicationo = $(obj).parent().parent().find('[id*=lblcomunicationo]').text().trim();
        var cardno = $(obj).parent().parent().find('[id*=lblmiccardno]').text().trim();
        var bankid = $(obj).parent().parent().find('[id*=hdnplutusbankid]').val();
        var cardtypeid = $(obj).parent().parent().find('[id*=hdnCCbanktypeidid]').val();
        var admnno1 = $(obj).parent().parent().find('[id*=lblplutusadmnno]').text().trim();
        if (getParameterByName("DOC_FORM_CD") == "FO_REFUND") {
        }
        if (getParameterByName("DOC_FORM_CD") == "FO_PREREFUND") {
            var admnno = ctl00_ContentPlaceHolder1_AdmnPatientDetails_ucUmrNo_txtSearchControl.value.trim();
            if (admnno == '' || admnno == undefined || admnno == 'undefined' || admnno == null || admnno == 'null') {
                admnno = 0;
            }
            if (admnno == 0) {

            } else {
                if (admnno1 != admnno) {
                    $(".toast").toastText("Info", "Please select proper admn#..!", 5, 2);
                    return false;
                }
            }
        }

        document.getElementById("<%= hdnbanPAYMENT_MODE_ID.ClientID %>").value = paymentmodeid;
        document.getElementById("<%= hdnbanCC_amount.ClientID %>").value = amount;
        document.getElementById("<%= hdnbanCC_CARD_NO.ClientID %>").value = cardno;
        document.getElementById("<%= hdnbanCC_ISSUE_BANK_ID.ClientID %>").value = bankid;
        document.getElementById("<%= ddlPaymentType.ClientID %>").value = paymentmodeid;
        document.getElementById("<%= txtamt.ClientID %>").value = amount;
        document.getElementById("<%= hdnrefundplutusreferenceid.ClientID %>").value = plutusreferenceid;
        document.getElementById("<%= hdncommunicationno.ClientID %>").value = communicationo;
        document.getElementById("<%= hdnbanCC_CARD_TYPE_ID.ClientID %>").value = cardtypeid;



        $('[id*=divmissionpayment]')[0].style.display = 'none';
        NewCalculateTendorAmt(paymodename, ctl00_ContentPlaceHolder1_ReceiptControl2_txtamt);
        return false;

    }

    var dataarray = new Array();
    var IP_REQUEST_STRING = '', IP_COMUNICATION_ID = 0, IP_AMOUNT = 0, FLAG = 'P', REQ_TYPE = 'I', DEVICEID = 0, TERMINAL_NAME = '',
    PLUTUS_REFERENCE_ID = '', DEVICE_PAYMENT_VALUE = 0, paymentmodeid = 0, UMR_NO = '', ADMN_NO = '', MOBILE_NO = '', PATIENT_ID = 0, PATIENT_NAME = '',
    COMMUNICATION_REFERENCE_CODE = 0, CARD_TYPE = '', ACQUIRER_NAME = '', CARD_NO = '', CARD_AMOUNT = '0', CARD_AUTH_NO = '', CARD_RRN_NO = '', CARD_TRANSACTION_LOGID = 0, CARD_TID = 0, TRANSACTIONNO = '', successresponse = 'N', CheckoutRequestID = '';

    function Pinelabdata1() {

        var Advconvamt = document.getElementById('<%= txtCurrAmt.ClientID %>').value;
        var AdvPatnet = document.getElementById('<%= txtpatNet.ClientID %>').value;

        var quickconvamt = document.getElementById('<%= txtCardAmt.ClientID %>').value;
        var QuickDueamt = document.getElementById('<%= txtpatdue.ClientID %>').value;
        var AdvConcamt = document.getElementById('<%= txtpatgrossamt.ClientID %>').value;

        var DueAthNamequick = document.getElementById('<%= Search3.ClientID %>_txtSearchControl').value;

        var ConcAuthNameAdavanced = document.getElementById('<%= ucdueauth.ClientID %>_txtSearchControl').value;


        var totaldueamt = 0;
        if (mode == "Q") {
            totaldueamt = parseFloat(QuickDueamt) - parseFloat(quickconvamt);
        }
        if (mode == "A") {
            totaldueamt = parseFloat(AdvPatnet) - parseFloat(Advconvamt);
        }

        if (ConcAuthNameAdavanced == '' || ConcAuthNameAdavanced == undefined || ConcAuthNameAdavanced == 'undefined' || ConcAuthNameAdavanced == '0' || ConcAuthNameAdavanced == 0 || ConcAuthNameAdavanced == null || ConcAuthNameAdavanced == 'null') {
            ConcAuthNameAdavanced = 0;
        }
        if (DueAthNamequick == '' || DueAthNamequick == undefined || DueAthNamequick == 'undefined' || DueAthNamequick == '0' || DueAthNamequick == 0 || DueAthNamequick == null || DueAthNamequick == 'null') {
            DueAthNamequick = 0;
        }
        if (AdvConcamt == '' || AdvConcamt == undefined || AdvConcamt == 'undefined' || AdvConcamt == '0' || AdvConcamt == 0 || AdvConcamt == null || AdvConcamt == 'null') {
            AdvConcamt = 0;
        }

        if (totaldueamt == '' || totaldueamt == undefined || totaldueamt == 'undefined' || totaldueamt == '0' || totaldueamt == 0 || totaldueamt == null || totaldueamt == 'null') {
            totaldueamt = 0;
        }
        if (Advconvamt == '' || Advconvamt == undefined || Advconvamt == 'undefined' || Advconvamt == '0' || Advconvamt == 0 || Advconvamt == null || Advconvamt == 'null') {
            Advconvamt = 0;
        }
        if (quickconvamt == '' || quickconvamt == undefined || quickconvamt == 'undefined' || quickconvamt == '0' || quickconvamt == 0 || quickconvamt == null || quickconvamt == 'null') {
            quickconvamt = 0;
        }
        if (QuickDueamt == '' || QuickDueamt == undefined || QuickDueamt == 'undefined' || QuickDueamt == '0' || QuickDueamt == 0 || QuickDueamt == null || QuickDueamt == 'null') {
            QuickDueamt = 0;
        }
        if (AdvPatnet == '' || AdvPatnet == undefined || AdvPatnet == 'undefined' || AdvPatnet == '0' || AdvPatnet == 0 || AdvPatnet == null || AdvPatnet == 'null') {
            AdvPatnet = 0;
        }

        var doc_form_cd_machine = getParameterByName("DOC_FORM_CD");
        if (doc_form_cd_machine == 'HISOPBILLFRNT' || doc_form_cd_machine == 'FO_OPCONSULT' || doc_form_cd_machine == 'OPDREGBILL' || doc_form_cd_machine == 'REG-EXPIRY') {//OP BILL SAVE
            if (mode == "Q") {
                if (parseFloat(QuickDueamt) > 0 && DueAthNamequick == 0) {
                    $(".toast").toastText("Info", "Please select due authorization...!", 5, 2);
                    return false;
                }
            }
            if (mode == "A") {
                if (parseFloat(totaldueamt) > 0 && DueAthNamequick == 0) {
                    $(".toast").toastText("Info", "Please select due authorization...!", 5, 2);
                    return false;
                }
                if (parseFloat(AdvConcamt) > 0 && ConcAuthNameAdavanced == 0) {
                    $(".toast").toastText("Info", "Please select Concession authorization...!", 5, 2);
                    return false;
                }
            }


        }






        dataarray = [];
        $('[id*=btnpineclick]')[0].style.display = 'none';

        dataarray.push(JSON.parse('{"ResponseCode":0,"ResponseMessage":"APPROVED","PlutusTransactionReferenceID":164849416,"AdditionalInfo":null}'));
        document.getElementById('<%= hdnPlutusTransactionReferenceID.ClientID %>').value = dataarray[0].PlutusTransactionReferenceID;

        document.getElementById('<%= hdnPlutusTransactionReferenceID.ClientID %>').value
        $('[id*=Lblterminalip]')[0].innerHTML = 'Terminal Name (Ref#' + document.getElementById('<%= hdnPlutusTransactionReferenceID.ClientID %>').value + ')';
        $(".toast").toastText("Info", "Transaction uploded successfully with the reference no" + document.getElementById('<%= hdnPlutusTransactionReferenceID.ClientID %>').value + "   and make the payment in the machine", 5, 2);
        $('[id*=btnpineclick]')[0].style.display = 'none';
        $('[id*=btnpineapproveclick]')[0].style.display = 'block';
        $('[id*=btnCancelpineclick]')[0].style.display = 'block';


    }
    var dataarray1 = new Array();
    var dataarrayresponse = new Array();
    function PinelabapprovedataApprove1() {
        var DOC_ID = document.getElementById('ctl00_hdndocsessionid').value;
        if (DOC_ID == '' || DOC_ID == undefined || DOC_ID == 'undefined' || DOC_ID == '0' || DOC_ID == 0) {
            DOC_ID = 0;
        }
        var PlutusTransactionReferenceID = document.getElementById('<%= hdnPlutusTransactionReferenceID.ClientID %>').value;
        if (PlutusTransactionReferenceID == '' || PlutusTransactionReferenceID == undefined | PlutusTransactionReferenceID == 'undefined') {
            PlutusTransactionReferenceID = 0;
        }
        var EnableEmpasa = document.getElementById('<%= hdnempasaintgreq.ClientID %>').value;

        if (PlutusTransactionReferenceID != 0) {



            var jdata = '{"ResponseCode":0,"ResponseMessage":"TXN APPROVED","PlutusTransactionReferenceID":164592066,"TransactionData":[{"Tag":"TID","Value":"00090747"},{"Tag":"MID","Value":"470000099249401"},{"Tag":"PaymentMode","Value":"CARD"},{"Tag":"Amount","Value":"250.00"},{"Tag":"BatchNumber","Value":"35"},{"Tag":"RRN","Value":"000000000199"},{"Tag":"ApprovalCode","Value":"802839"},{"Tag":"Invoice Number","Value":"148"},{"Tag":"Card Number","Value":"************9004"},{"Tag":"Expiry Date","Value":"XXXX"},{"Tag":"Card Type","Value":"VISA"},{"Tag":"Acquirer Id","Value":"02"},{"Tag":"Acquirer Name","Value":"ICICI"},{"Tag":"Transaction Date","Value":"11092023"},{"Tag":"Transaction Time","Value":"134453"},{"Tag":"AmountInPaisa","Value":"250"},{"Tag":"OriginalAmount","Value":"250"},{"Tag":"FinalAmount","Value":"250"},{"Tag":"IsPartialPayByPointsTxn","Value":"False"},{"Tag":"TransactionLogId","Value":"5202946846"},{"Tag":"Currency Type","Value":"INR"}]}';
            dataarrayresponse.push(JSON.parse(jdata));
            CARD_TYPE = dataarrayresponse[0].TransactionData[10].Value;
            ACQUIRER_NAME = dataarrayresponse[0].TransactionData[12].Value;
            CARD_NO = dataarrayresponse[0].TransactionData[8].Value;
            CARD_AMOUNT = dataarrayresponse[0].TransactionData[3].Value;
            CARD_AUTH_NO = dataarrayresponse[0].TransactionData[7].Value;
            CARD_RRN_NO = dataarrayresponse[0].TransactionData[5].Value;
            CARD_TRANSACTION_LOGID = dataarrayresponse[0].TransactionData[19].Value;
            CARD_TID = dataarrayresponse[0].TransactionData[0].Value;


            dataarrayresponse = [];



            var amount = 0;
            var cardnumber = '';
            var authno = '';
            var cardtype = '';
            var bankname = '';
            var Trantype = '';
            var Tid = 0;
            dataarray1 = [];

            var doc_form_cd_machine = getParameterByName("DOC_FORM_CD");
            if (doc_form_cd_machine == 'REG-EXPIRY') {

            }
            else if (doc_form_cd_machine == 'HISOPBILLFRNT') {
                $('[id*=gvServices] tr:has(td) input[type=text]').attr('disabled', 'true');
                $('[id*=gvServices] tr:has(td) input[type=button]').attr('disabled', 'true');
                $('[id*=gvServices] tr:has(td) select').attr('disabled', 'true');
            }
            else if (doc_form_cd_machine == 'HISOPBILLFRNT' || doc_form_cd_machine == 'FO_OPCONSULT') {
                $('[id*=gvServices] tr:has(td) input[type=text]').attr('disabled', 'true');
                $('[id*=gvServices] tr:has(td) input[type=button]').attr('disabled', 'true');
                $('[id*=gvServices] tr:has(td) select').attr('disabled', 'true');
            }
            else if (doc_form_cd_machine == 'HISOPBILLFRNT' || doc_form_cd_machine == 'FO_OPCONSULT') {
                $('[id*=gvServices] tr:has(td) input[type=text]').attr('disabled', 'true');
                $('[id*=gvServices] tr:has(td) input[type=button]').attr('disabled', 'true');
                $('[id*=gvServices] tr:has(td) select').attr('disabled', 'true');
            }
            else if (doc_form_cd_machine == 'OPDREGBILL') {
                $('[id*=gvServices] tr:has(td) input[type=text]').attr('disabled', 'true');
                $('[id*=gvServices] tr:has(td) input[type=button]').attr('disabled', 'true');
                $('[id*=gvServices] tr:has(td) select').attr('disabled', 'true');
            }
            else if (doc_form_cd_machine == 'FOIPADV' || doc_form_cd_machine == 'IPFINALBILL' || doc_form_cd_machine == 'FOERADV') {
                MOBILE_NO = ctl00_ContentPlaceHolder1_AdmnPatientDetails_LblMobile.innerHTML;
                PATIENT_NAME = ctl00_ContentPlaceHolder1_AdmnPatientDetails_lblPatName.innerHTML;
                PATIENT_ID = document.getElementById('' + ctrlcom + '_AdmnPatientDetails_ucUmrNo__hiddenID').value;
                ADMN_NO = document.getElementById('' + ctrlcom + '_AdmnPatientDetails_hdnAdmnNo').value;
                UMR_NO = document.getElementById('' + ctrlcom + '_AdmnPatientDetails_hdnUmrNo').value;
            }
            else if (doc_form_cd_machine == 'FOERFBILL' || doc_form_cd_machine == 'IPFINALBILLPAY') {
                MOBILE_NO = ctl00_ContentPlaceHolder1_IPPatientDtls1_LblMobile.innerHTML;
                PATIENT_NAME = ctl00_ContentPlaceHolder1_IPPatientDtls1_lblPatName.innerHTML;
                PATIENT_ID = document.getElementById('' + ctrlcom + '_IPPatientDtls1_ucUmrNo__hiddenID').value;
                ADMN_NO = document.getElementById('' + ctrlcom + '_IPPatientDtls1_hdnAdmnNo').value;
                UMR_NO = document.getElementById('' + ctrlcom + '_IPPatientDtls1_hdnUmrNo').value;
            }
            else if (doc_form_cd_machine == 'FO_REFUND' || doc_form_cd_machine == 'FO_OUTSTANDING' || doc_form_cd_machine == 'Rk9PUEFEVg==' || doc_form_cd_machine == 'FOOPADV') {
                MOBILE_NO = ctl00_ContentPlaceHolder1_umrPatientDetails_lblMobileNo.innerHTML;
                PATIENT_NAME = ctl00_ContentPlaceHolder1_umrPatientDetails_lblPatName.innerHTML;
                PATIENT_ID = document.getElementById('' + ctrlcom + '_umrPatientDetails_hdnPatientid').value;
                ADMN_NO = document.getElementById('' + ctrlcom + '_umrPatientDetails_hdnadmnno').value;
                UMR_NO = document.getElementById('' + ctrlcom + '_umrPatientDetails_hdnUmrNo').value;
            }
            else if (doc_form_cd_machine == 'FO_PREREFUND') {
                MOBILE_NO = ctl00_ContentPlaceHolder1_umrPatientDetails_lblMobileNo.innerHTML;
                PATIENT_NAME = ctl00_ContentPlaceHolder1_umrPatientDetails_lblPatName.innerHTML;
                PATIENT_ID = document.getElementById('' + ctrlcom + '_umrPatientDetails_hdnPatientid').value;
                ADMN_NO = '';
                UMR_NO = document.getElementById('' + ctrlcom + '_umrPatientDetails_hdnUmrNo').value;
            }
            dataarray1.push(JSON.parse('{"ResponseCode":0,"ResponseMessage":"TXN APPROVED","PlutusTransactionReferenceID":164592066,"TransactionData":[{"Tag":"TID","Value":"00090747"},{"Tag":"MID","Value":"470000099249401"},{"Tag":"PaymentMode","Value":"CARD"},{"Tag":"Amount","Value":"250.00"},{"Tag":"BatchNumber","Value":"35"},{"Tag":"RRN","Value":"000000000199"},{"Tag":"ApprovalCode","Value":"802839"},{"Tag":"Invoice Number","Value":"148"},{"Tag":"Card Number","Value":"************9004"},{"Tag":"Expiry Date","Value":"XXXX"},{"Tag":"Card Type","Value":"VISA"},{"Tag":"Acquirer Id","Value":"02"},{"Tag":"Acquirer Name","Value":"ICICI"},{"Tag":"Transaction Date","Value":"11092023"},{"Tag":"Transaction Time","Value":"134453"},{"Tag":"AmountInPaisa","Value":"250"},{"Tag":"OriginalAmount","Value":"250"},{"Tag":"FinalAmount","Value":"250"},{"Tag":"IsPartialPayByPointsTxn","Value":"False"},{"Tag":"TransactionLogId","Value":"5202946846"},{"Tag":"Currency Type","Value":"INR"}]}'));
            $('[id*=btnpineclick]')[0].style.display = 'block';
            $('[id*=btnpineapproveclick]')[0].style.display = 'none';
            $('[id*=btnCancelpineclick]')[0].style.display = 'none';

            if (dataarray1[0].TransactionData[2].Value.toUpperCase() == 'CARD') {
                amount = dataarray1[0].TransactionData[3].Value;
                Tid = dataarray1[0].TransactionData[0].Value;
                cardnumber = dataarray1[0].TransactionData[8].Value;
                authno = dataarray1[0].TransactionData[19].Value;
                Trantype = dataarray1[0].TransactionData[2].Value;
                cardtype = dataarray1[0].TransactionData[10].Value;
                bankname = 'Pine Labs';
            } else {
                amount = dataarray1[0].TransactionData[3].Value;
                Tid = dataarray1[0].TransactionData[0].Value;
                cardnumber = dataarray1[0].TransactionData[8].Value;
                authno = dataarray1[0].TransactionData[16].Value;
                Trantype = dataarray1[0].TransactionData[2].Value;
                cardtype = dataarray1[0].TransactionData[10].Value;
                bankname = cardtype;

            }



            var dueamount = $('#' + ctrlcom + '_ReceiptControl2_txtpatdue').val();
            if (parseFloat(amount) != parseFloat(dueamount)) {

            }

            if (doc_form_cd_machine == 'FO_OUTSTANDING' || doc_form_cd_machine == 'FOIPADV' || doc_form_cd_machine == 'FO_REFUND' || doc_form_cd_machine == 'Rk9PUEFEVg==' || doc_form_cd_machine == 'FOOPADV') {
                mode = "A";
            }

            if (mode == "Q") {
                document.getElementById('' + ctrlcom + '_ReceiptControl2_txtcardNoCmp').value = cardnumber;
                document.getElementById('' + ctrlcom + '_ReceiptControl2_txtCardAmt').value = amount;
                document.getElementById('' + ctrlcom + '_ReceiptControl2_txtcardAuther').value = authno;
                $('[id*=ddbankName] option:contains(' + bankname + ')').attr('selected', true);
                $('[id*=ddcardType] option:contains(' + cardtype + ')').attr('selected', true);
                document.getElementById('' + ctrlcom + '_ReceiptControl2_txtcardNoCmp').disabled = true;
                document.getElementById('' + ctrlcom + '_ReceiptControl2_txtCardAmt').disabled = true;
                document.getElementById('' + ctrlcom + '_ReceiptControl2_txtcardAuther').disabled = true;
                $('[id*=ddbankName] option:contains(' + bankname + ')').attr('disabled', true);
                $('[id*=ddcardType] option:contains(' + cardtype + ')').attr('disabled', true);

                CalculateAmountPinelabCardPayment('Card')
            }
            else if (mode == "A") {
                if (Trantype.toUpperCase() == 'CARD') {
                    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtCardNo').value = cardnumber;
                    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtamt').value = amount;
                    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtAuthCode').value = authno;
                    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtExpDt').value = new Date().format('dd-MMM-yyyy');
                    $('[id*=ddlBankName] option:contains(' + bankname + ')').attr('selected', true);
                    $('[id*=ddlCardType] option:contains(' + cardtype + ')').attr('selected', true);
                }
                else {
                    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtCardNo').value = Tid;
                    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtAuthCode').value = authno;
                    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtTenderedAmt').value = amount;
                }
                if (doc_form_cd_machine == 'FO_OUTSTANDING' || doc_form_cd_machine == 'FOIPADV' || doc_form_cd_machine == 'FO_REFUND' || doc_form_cd_machine == 'Rk9PUEFEVg==' || doc_form_cd_machine == 'FOOPADV') {
                    srvchrgamount(ctl00_ContentPlaceHolder1_ReceiptControl2_txtamt, amount);
                }

                NewAddTransactionDetails();



                var autosaveval = document.getElementById('<%= hdnpinelabautosave.ClientID %>').value;
                if (autosaveval == "Y") {
                    var doc_form_cd_machine = getParameterByName("DOC_FORM_CD");
                    if (doc_form_cd_machine == 'HISOPBILLFRNT') {//OP BILL SAVE
                        OnsuccesssaveConfirmation();
                    }
                    else if (doc_form_cd_machine == 'FO_OPCONSULT') {//OP CONSULTAION SAVE
                        SaveConsultation1();
                    }
                    else if (doc_form_cd_machine == 'OPDREGBILL') {//OPD SAVE
                        OnSuccessContinue('OPD');
                    }
                    else if (doc_form_cd_machine == 'REG-EXPIRY') {//REG SAVE
                        OnsuccesssaveConfirmation();
                    }

                }
            }
            return false;
        }
    }
    var servicechargeamount = 0;
    var invoicenumber = '';
    function Ecitigen() {
        var totalsrvgrpname = '';
        if ($("table[id$=tbl_SrvGrp] tr:has(td)") > 0) {
            $("table[id$=tbl_SrvGrp] tr:has(td)").each(function (e) {
                var srvgrpname = $('[id$=tbl_SrvGrp] tr').filter(':eq(' + e + ')').find('[id*=lblsrvgrpname]').text();
                if (srvgrpname != undefined && srvgrpname != 'undefined' && srvgrpname != null && srvgrpname != 'null') {
                    totalsrvgrpname += srvgrpname + ',';
                } else {
                    totalsrvgrpname += 'consultation Fee' + ',';
                }
            });
        }
        if (totalsrvgrpname == "") {
            totalsrvgrpname = "None";
        }

        var paymentmodeid = document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlPaymentType').value;

        var _selectedText = $('#ctl00_ContentPlaceHolder1_ReceiptControl2_ddlPaymentType').find('option:selected').text();
        if (_selectedText == 'M-PESA') {

            var DOC_ID = document.getElementById('ctl00_hdndocsessionid').value;
            if (DOC_ID == '' || DOC_ID == undefined || DOC_ID == 'undefined' || DOC_ID == '0' || DOC_ID == 0) {
                DOC_ID = 0;
            }
            var doc_form_cd_machine = getParameterByName("DOC_FORM_CD");
            if (doc_form_cd_machine == 'REG-EXPIRY') {
                MOBILE_NO = ctl00_ContentPlaceHolder1_txtMobile1.value;
                PATIENT_NAME = document.getElementById('' + ctrlcom + '_txtDisplayname').value;
                PATIENT_ID = 0;
                ADMN_NO = '';
                UMR_NO = '';
            }
            else if (doc_form_cd_machine == 'HISOPBILLFRNT') {
                MOBILE_NO = ctl00_ContentPlaceHolder1_umrPatientDetails_lblMobileNo.innerHTML;
                PATIENT_NAME = ctl00_ContentPlaceHolder1_umrPatientDetails_lblPatName.innerHTML;
                PATIENT_ID = document.getElementById('' + ctrlcom + '_umrPatientDetails_hdnPatientid').value;
                ADMN_NO = '';
                UMR_NO = document.getElementById('' + ctrlcom + '_umrPatientDetails_hdnUmrNo').value;
            }
            else if (doc_form_cd_machine == 'HISOPBILLFRNT' || doc_form_cd_machine == 'FO_OPCONSULT') {
                MOBILE_NO = ctl00_ContentPlaceHolder1_umrPatientDetails_lblMobileNo.innerHTML;
                PATIENT_NAME = ctl00_ContentPlaceHolder1_umrPatientDetails_lblPatName.innerHTML;
                PATIENT_ID = document.getElementById('' + ctrlcom + '_umrPatientDetails_hdnPatientid').value;
                ADMN_NO = '';
                UMR_NO = document.getElementById('' + ctrlcom + '_umrPatientDetails_hdnUmrNo').value;
            }
            else if (doc_form_cd_machine == 'HISOPBILLFRNT' || doc_form_cd_machine == 'FO_OPCONSULT') {
                MOBILE_NO = ctl00_ContentPlaceHolder1_umrPatientDetails_lblMobileNo.innerHTML;
                PATIENT_NAME = ctl00_ContentPlaceHolder1_umrPatientDetails_lblPatName.innerHTML;
                PATIENT_ID = document.getElementById('' + ctrlcom + '_umrPatientDetails_hdnPatientid').value;
                ADMN_NO = '';
                UMR_NO = document.getElementById('' + ctrlcom + '_umrPatientDetails_hdnUmrNo').value;
            }
            else if (doc_form_cd_machine == 'OPDREGBILL') {
                if (ctl00_ContentPlaceHolder1_chk_old.checked == false) {
                    MOBILE_NO = ctl00_ContentPlaceHolder1_Address1_txtMobile1.value;
                    PATIENT_NAME = document.getElementById('' + ctrlcom + '_txtDisplayname').innerHTML;
                    PATIENT_ID = 0;
                    ADMN_NO = '';
                    UMR_NO = '';
                } else {
                    MOBILE_NO = ctl00_ContentPlaceHolder1_umrPatientDetails_lblMobileNo.innerHTML;
                    PATIENT_NAME = ctl00_ContentPlaceHolder1_umrPatientDetails_lblPatName.innerHTML;
                    PATIENT_ID = document.getElementById('' + ctrlcom + '_umrPatientDetails_hdnPatientid').value;
                    ADMN_NO = '';
                    UMR_NO = document.getElementById('' + ctrlcom + '_umrPatientDetails_hdnUmrNo').value;
                }
            }
            else if (doc_form_cd_machine == 'FOIPADV' || doc_form_cd_machine == 'IPFINALBILL' || doc_form_cd_machine == 'FOERADV') {
                MOBILE_NO = ctl00_ContentPlaceHolder1_AdmnPatientDetails_LblMobile.innerHTML;
                PATIENT_NAME = ctl00_ContentPlaceHolder1_AdmnPatientDetails_lblPatName.innerHTML;
                PATIENT_ID = document.getElementById('' + ctrlcom + '_AdmnPatientDetails_ucUmrNo__hiddenID').value;
                ADMN_NO = document.getElementById('' + ctrlcom + '_AdmnPatientDetails_hdnAdmnNo').value;
                UMR_NO = document.getElementById('' + ctrlcom + '_AdmnPatientDetails_hdnUmrNo').value;
            }
            else if (doc_form_cd_machine == 'FOERFBILL' || doc_form_cd_machine == 'IPFINALBILLPAY') {
                MOBILE_NO = ctl00_ContentPlaceHolder1_IPPatientDtls1_LblMobile.innerHTML;
                PATIENT_NAME = ctl00_ContentPlaceHolder1_IPPatientDtls1_lblPatName.innerHTML;
                PATIENT_ID = document.getElementById('' + ctrlcom + '_IPPatientDtls1_ucUmrNo__hiddenID').value;
                ADMN_NO = document.getElementById('' + ctrlcom + '_IPPatientDtls1_hdnAdmnNo').value;
                UMR_NO = document.getElementById('' + ctrlcom + '_IPPatientDtls1_hdnUmrNo').value;
            }
            else if (doc_form_cd_machine == 'FO_REFUND' || doc_form_cd_machine == 'FO_OUTSTANDING' || doc_form_cd_machine == 'Rk9PUEFEVg==' || doc_form_cd_machine == 'FOOPADV') {
                MOBILE_NO = ctl00_ContentPlaceHolder1_umrPatientDetails_lblMobileNo.innerHTML;
                PATIENT_NAME = ctl00_ContentPlaceHolder1_umrPatientDetails_lblPatName.innerHTML;
                PATIENT_ID = document.getElementById('' + ctrlcom + '_umrPatientDetails_hdnPatientid').value;
                ADMN_NO = document.getElementById('' + ctrlcom + '_umrPatientDetails_hdnadmnno').value;
                UMR_NO = document.getElementById('' + ctrlcom + '_umrPatientDetails_hdnUmrNo').value;
            }
            else if (doc_form_cd_machine == 'FO_PREREFUND') {
                MOBILE_NO = ctl00_ContentPlaceHolder1_AdmnPatientDetails_LblMobile.innerHTML
                PATIENT_NAME = ctl00_ContentPlaceHolder1_AdmnPatientDetails_lblPatName.innerHTML;
                PATIENT_ID = document.getElementById('' + ctrlcom + '_umrPatientDetails_hdnPatientid').value;
                ADMN_NO = '';
                UMR_NO = document.getElementById('' + ctrlcom + '_umrPatientDetails_hdnUmrNo').value;
            }
            var DOC_FORM_CD = 'HISOPBILLFRNT';
            if (DOC_FORM_CD == 'HISOPBILLFRNT' || DOC_FORM_CD == 'FO_OPCONSULT' || DOC_FORM_CD == 'OPDREGBILL' || DOC_FORM_CD == 'FOIPADV' || DOC_FORM_CD == 'HSFOADV' || DOC_FORM_CD == 'IPFINALBILLPAY' || DOC_FORM_CD == 'REG - EXPIRY' || DOC_FORM_CD == 'FOERADV' || DOC_FORM_CD == 'FOERFBILL' || DOC_FORM_CD == 'FO_OUTSTANDING' || DOC_FORM_CD == 'HISASSPUSER') {
                var UrlVal = ReturnIniUrl();
                var _MissionServiceURL = document.getElementById('<%= hdnecitizenip.ClientID %>').value;
                var UIpath = UrlVal + 'Private/FrontOffice/OpBilling/OPBillClientSide.aspx/GenrateAccessToken';
                var _JSONParams = '';
                DEVICEID = $('[id*=Ddlpinelab] option:selected').val();
                var checkdivid = DEVICEID;
                if (checkdivid == '' || checkdivid == undefined || checkdivid == 'undefined' || checkdivid == '' || checkdivid == '0' || checkdivid == 0) {
                    checkdivid = 0;
                }
                TERMINAL_NAME = $('[id*=Ddlpinelab] option:selected').text().trim();
                if (checkdivid != 0) {
                    paymentmodeid = document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlcrdtype').value;
                    if (mode == "Q") {
                        paymentmodeid = paymentmodeid;
                        if (paymentmodeid == 0) {
                            paymentmodeid = document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlPaymentType').value;
                        }
                    } else {
                        paymentmodeid = document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlPaymentType').value;
                    }
                    var paymentdeviceid = getCookie("CONFIG_ID");


                    IP_AMOUNT = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtamt').value;
                    if (parseFloat(IP_AMOUNT) < 1) {
                        $(".toast").toastText("Info", "Below one rupee transactions we are not allowing!", 5, 2);
                        return false;
                    }
                    IP_AMOUNT = parseFloat(IP_AMOUNT);


                    if (parseFloat(IP_AMOUNT) > 0) {

                    } else {
                        $(".toast").toastText("Info", "Please enter the amount for selected payment mode..!", 5, 2);
                        return false;
                    }
                    if (parseFloat(IP_AMOUNT) > 0) {
                        IP_AMOUNT = parseFloat(IP_AMOUNT) + parseFloat(servicechargeamount);

                        var dataarray = '';
                        var apiClientID = "", serviceID = "", billDesc = totalsrvgrpname, currency = "",
                            billRefNumber = "", clientMSISDN = "", clientName = "",
                            clientIDNumber = "", clientEmail = "",
                            callBackURLOnSuccess = "", amountExpected = IP_AMOUNT,
                            notificationURL = "",
                            format = "json", sendSTK = "true",
                            pictureURL = "",
                            secureHash = "", amount = IP_AMOUNT, secret = "", EcitigenApiurl = "";

                        clientMSISDN = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtCardNo').value;
                        currency = 'KES';
                        billRefNumber = 'None';
                        callBackURLOnSuccess = document.getElementById('<%= hdnecitizenip.ClientID %>').value;
                        notificationURL = document.getElementById('<%= hdnecitizennotificationurl.ClientID %>').value;
                        pictureURL = document.getElementById('<%= hdnecitizenpictureurl.ClientID %>').value;
                        EcitigenApiurl = document.getElementById('<%= hdnecitizenapiurl.ClientID %>').value;


                        for (var i = 0; i < michainmasterdata[0].length; i++) {
                            var posid = $('[id*=Ddlpinelab] option:selected').val();
                            if (posid == michainmasterdata[0][i].ECITIGEN_DEVICE_ID) {
                                apiClientID = michainmasterdata[0][i].APICLIENTID;
                                serviceID = michainmasterdata[0][i].SERVICEID;
                                clientName = michainmasterdata[0][i].CLIENTNAME;
                                clientIDNumber = michainmasterdata[0][i].CLIENTIDNUMBER;
                                clientEmail = michainmasterdata[0][i].CLIENTEMAIL;
                                secret = michainmasterdata[0][i].SECRET;
                                key = michainmasterdata[0][i].KEY_VALUE;
                            }
                        }


                        _JSONParams = "{'apiClientID': '" + apiClientID + "','serviceID': '" + serviceID + "','billDesc': '" + billDesc + "','currency': '" + currency + "','billRefNumber': '" + billRefNumber + "','clientMSISDN': '" + clientMSISDN + "','clientName': '" + clientName + "','clientIDNumber': '" + clientIDNumber + "','clientEmail': '" + clientEmail + "','callBackURLOnSuccess': '" + callBackURLOnSuccess + "','amountExpected': '" + amountExpected + "','notificationURL': '" + notificationURL + "','format': '" + format + "','sendSTK': '" + sendSTK + "','pictureURL': '" + pictureURL + "','secureHash': '" + secureHash + "','amount': '" + amount + "','secret': '" + secret + "','key': '" + key + "','url': '" + EcitigenApiurl + "'}";
                        UIpath = "OPBillClientSide.aspx/CreateToken";

                        try {
                            var IP_REQUEST_STRING = '', IP_COMUNICATION_ID = 0, FLAG = 'P';
                            IP_REQUEST_STRING = _JSONParams;
                            IP_COMUNICATION_ID = 0;
                            var EcitigenApiurl = document.getElementById('<%= hdnecitizenapiurl.ClientID %>').value;
                            var _iniUrl2 = window.location.protocol + EcitigenApiurl;
                            GetNonAsync(
                 "Private/FrontOffice/OpBilling/OPBillClientSide.aspx/SaveMahindata",
                 { IP_REQUEST_STRING: IP_REQUEST_STRING, IP_COMUNICATION_ID: IP_COMUNICATION_ID, IP_AMOUNT: IP_AMOUNT, FLAG: "P", REQ_TYPE: 'ECH', DEVICEID: DEVICEID, TERMINAL_NAME: TERMINAL_NAME, PLUTUS_REFERENCE_ID: '', paymentmodeid: paymentmodeid, UMR_NO: UMR_NO, ADMN_NO: ADMN_NO, MOBILE_NO: MOBILE_NO, PATIENT_ID: PATIENT_ID, PATIENT_NAME: PATIENT_NAME, DOC_ID: DOC_ID, COMMUNICATION_REFERENCE_CODE: COMMUNICATION_REFERENCE_CODE, CARD_TYPE: CARD_TYPE, ACQUIRER_NAME: ACQUIRER_NAME, CARD_NO: CARD_NO, CARD_AMOUNT: CARD_AMOUNT, CARD_AUTH_NO: CARD_AUTH_NO, CARD_RRN_NO: CARD_RRN_NO, CARD_TRANSACTION_LOGID: CARD_TRANSACTION_LOGID, CARD_TID: CARD_TID },
                 function (JData) {
                     var inserteddata = JData.d.split('@');
                     if (inserteddata[0] == 'true') {
                         billRefNumber = inserteddata[2];
                         IP_COMUNICATION_ID = inserteddata[1];

                         _JSONParams = "{'apiClientID': '" + apiClientID + "','serviceID': '" + serviceID + "','billDesc': '" + billDesc + "','currency': '" + currency + "','billRefNumber': '" + billRefNumber + "','clientMSISDN': '" + clientMSISDN + "','clientName': '" + clientName + "','clientIDNumber': '" + clientIDNumber + "','clientEmail': '" + clientEmail + "','callBackURLOnSuccess': '" + callBackURLOnSuccess + "','amountExpected': '" + amountExpected + "','notificationURL': '" + notificationURL + "','format': '" + format + "','sendSTK': '" + sendSTK + "','pictureURL': '" + pictureURL + "','secureHash': '" + secureHash + "','amount': '" + amount + "','secret': '" + secret + "','key': '" + key + "','url': '" + EcitigenApiurl + "'}";

                         $.ajax({
                             type: "POST",
                             //url: UIpath,
                             url: _iniUrl2 + "/webform1.aspx/CreateToken",
                             contentType: "application/json; charset=utf-8",
                             dataType: "json",
                             data: _JSONParams,
                             async: false,
                             error: function (jqXHR, textStatus, errorThrown) {
                                 $(".stoast").toastText("Info", "'" + errorThrown + "'", 7, 2);
                                 return false;
                             },
                             success: function (jdata1) {
                                 IP_REQUEST_STRING = jdata1.d;
                                 GetNonAsync(
                 "Private/FrontOffice/OpBilling/OPBillClientSide.aspx/SaveMahindata",
                 { IP_REQUEST_STRING: IP_REQUEST_STRING, IP_COMUNICATION_ID: IP_COMUNICATION_ID, IP_AMOUNT: IP_AMOUNT, FLAG: "P", REQ_TYPE: 'ECHIU', DEVICEID: DEVICEID, TERMINAL_NAME: TERMINAL_NAME, PLUTUS_REFERENCE_ID: '', paymentmodeid: paymentmodeid, UMR_NO: UMR_NO, ADMN_NO: ADMN_NO, MOBILE_NO: MOBILE_NO, PATIENT_ID: PATIENT_ID, PATIENT_NAME: PATIENT_NAME, DOC_ID: DOC_ID, COMMUNICATION_REFERENCE_CODE: COMMUNICATION_REFERENCE_CODE, CARD_TYPE: CARD_TYPE, ACQUIRER_NAME: ACQUIRER_NAME, CARD_NO: CARD_NO, CARD_AMOUNT: CARD_AMOUNT, CARD_AUTH_NO: CARD_AUTH_NO, CARD_RRN_NO: CARD_RRN_NO, CARD_TRANSACTION_LOGID: CARD_TRANSACTION_LOGID, CARD_TID: CARD_TID },
                 function (JData2) {
                     dataarray = JSON.parse(jdata1.d).invoice_number;
                     invoicenumber = JSON.parse(jdata1.d).invoice_number;
                     window.open(JSON.parse(jdata1.d).invoice_link, "popup", "_blank", "toolbar=1,scrollbars=1,resizable=1,width=1013,height=80");
                     $('[id*=btnpineclick]')[0].style.display = 'none';
                     $('[id*=btnpineapproveclick]')[0].style.display = 'block';



                 },
                 function (jqXHR, textStatus, errorThrown) {
                 });

                             }
                         });

                     }
                 });
                        }
                        catch (e) {

                        }
                    }
                }
            }





            //        var dataarray = '';
            //        var apiClientID = "50", serviceID = "193875", billDesc = "None", currency = "KES",
            //  billRefNumber = "INV-00061793423", clientMSISDN = "254718101532", clientName = "Naresh1",
            //  clientIDNumber = "30000658", clientEmail = "abc@example.com",
            //  callBackURLOnSuccess = "http://20.120.96.92:83/", amountExpected = "1",
            //  notificationURL = "http://123.253.163.252:806//knh/AbhaQrcode/api/testing",
            //  format = "json", sendSTK = "true",
            //  pictureURL = "https://pixabay.com/photos/motorcycle-street-outdoors-wheels-8192323/",
            //  secureHash = "", amount = "1", secret = "Vg96ZfFcfOviNIqW1ey77zD359/hx18p";
            //        $.ajax({
            //            type: "POST",
            //            url: 'OPBillClientSide.aspx/CreateToken',
            //            async: false,
            //            data: "{'apiClientID': '" + apiClientID + "','serviceID': '" + serviceID + "','billDesc': '" + billDesc + "','currency': '" + currency + "','billRefNumber': '" + billRefNumber + "','clientMSISDN': '" + clientMSISDN + "','clientName': '" + clientName + "','clientIDNumber': '" + clientIDNumber + "','clientEmail': '" + clientEmail + "','callBackURLOnSuccess': '" + callBackURLOnSuccess + "','amountExpected': '" + amountExpected + "','notificationURL': '" + notificationURL + "','format': '" + format + "','sendSTK': '" + sendSTK + "','pictureURL': '" + pictureURL + "','secureHash': '" + secureHash + "','amount': '" + amount + "','secret': '" + secret + "'}",
            //            contentType: "application/json; charset=utf-8",
            //            dataType: "json",
            //            error: function (jqXHR, textStatus, errorThrown) { },
            //            success: function (res) {
            //                dataarray = JSON.parse(res.d).invoice_number;
            //                window.open(JSON.parse(res.d).invoice_link, "popup", "_blank", "toolbar=1,scrollbars=1,resizable=1,width=1013,height=80");
            //                return false;
            //            }
            //        });
        }
    }
    var dataarrayEcitizen = '';
    function CheckEctitgendata() {
        invoicenumber = invoicenumber;
        var UIpath3 = _iniUrl + "Private/FrontOffice/OpBilling/OPBillClientSide.aspx/GetEcitigenDetails";
        $.ajax({
            type: "POST",
            url: UIpath3,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            data: "{'id': '" + invoicenumber + "'}",
            async: false,
            error: function (jqXHR, textStatus, errorThrown) {
                $(".stoast").toastText("Info", "'" + errorThrown + "'", 7, 2);
                return false;
            },
            success: function (jdata1) {
                if (invoicenumber == jdata1.d[0][0].REFERENCE_NO) {
                    dataarrayEcitizen = JSON.parse(jdata1.d[0][0].RESPONSE);
                    IP_REQUEST_STRING = JSON.stringify(jdata1.d[0][0].RESPONSE);
                    PlutusTransactionReferenceID = invoicenumber;
                    var paymentmodeid = document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlPaymentType').value;
                    GetNonAsync(
                 "Private/FrontOffice/OpBilling/OPBillClientSide.aspx/SaveMahindata",
                 { IP_REQUEST_STRING: IP_REQUEST_STRING, IP_COMUNICATION_ID: 0, IP_AMOUNT: IP_AMOUNT, FLAG: 'A', REQ_TYPE: 'ECII', DEVICEID: DEVICEID, TERMINAL_NAME: TERMINAL_NAME, PLUTUS_REFERENCE_ID: invoicenumber, paymentmodeid: paymentmodeid, UMR_NO: UMR_NO, ADMN_NO: ADMN_NO, MOBILE_NO: MOBILE_NO, PATIENT_ID: PATIENT_ID, PATIENT_NAME: PATIENT_NAME, DOC_ID: 0, COMMUNICATION_REFERENCE_CODE: 0, CARD_TYPE: CARD_TYPE, ACQUIRER_NAME: ACQUIRER_NAME, CARD_NO: CARD_NO, CARD_AMOUNT: CARD_AMOUNT, CARD_AUTH_NO: CARD_AUTH_NO, CARD_RRN_NO: CARD_RRN_NO, CARD_TRANSACTION_LOGID: CARD_TRANSACTION_LOGID, CARD_TID: CARD_TID },
                 function (JData) {
                     var inserteddata = JData.d.split('@');
                     if (inserteddata[0] == 'true') {
                         IP_REQUEST_STRING = IP_REQUEST_STRING;
                         IP_COMUNICATION_ID = inserteddata[1];
                         IP_AMOUNT = IP_AMOUNT;
                         var amount = 0;
                         var cardnumber = '';
                         var authno = '';
                         var cardtype = ''
                         var bankname = ''
                         var Trantype = '';
                         var Tid = 0;
                         dataarray1 = [];
                         if (dataarrayEcitizen.status == "settled") {
                             $('[id*=btnpineclick]')[0].style.display = 'block';
                             $('[id*=btnpineapproveclick]')[0].style.display = 'none';
                             $('[id*=btnCancelpineclick]')[0].style.display = 'none';
                             document.getElementById('<%= hdnPlutusTransactionReferenceID.ClientID %>').value = invoicenumber;
                             amount = parseFloat(dataarrayEcitizen.payment_reference[0].amount) - parseFloat(servicechargeamount);
                             Tid = dataarrayEcitizen.payment_reference[0].payment_reference;
                             cardnumber = invoicenumber;
                             document.getElementById('' + ctrlcom + '_ReceiptControl2_txtAuthCode').value = cardnumber;
                             document.getElementById('' + ctrlcom + '_ReceiptControl2_txtTenderedAmt').value = amount;
                             srvchrgamount(ctl00_ContentPlaceHolder1_ReceiptControl2_txtamt, amount);
                             NewAddTransactionDetails();
                             return false;
                         }

                     }
                 });

                }


            }
        });

        /*$.ajax({

        async: false,

        success: function (res) {
        for (var i = 0; i <= JSON.parse(res).Data1.length; i++) {
        if (invoicenumber == JSON.parse(res).Data1[i].invoice_number) {
        dataarrayEcitizen = JSON.parse(res).Data1[i];
        IP_REQUEST_STRING = JSON.stringify(JSON.parse(res).Data1[i]);
        PlutusTransactionReferenceID = invoicenumber;
        var paymentmodeid = document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlPaymentType').value;
        GetNonAsync(
        "Private/FrontOffice/OpBilling/OPBillClientSide.aspx/SaveMahindata",
        { IP_REQUEST_STRING: IP_REQUEST_STRING, IP_COMUNICATION_ID: 0, IP_AMOUNT: IP_AMOUNT, FLAG: 'A', REQ_TYPE: 'ECII', DEVICEID: DEVICEID, TERMINAL_NAME: TERMINAL_NAME, PLUTUS_REFERENCE_ID: PlutusTransactionReferenceID, paymentmodeid: paymentmodeid, UMR_NO: UMR_NO, ADMN_NO: ADMN_NO, MOBILE_NO: MOBILE_NO, PATIENT_ID: PATIENT_ID, PATIENT_NAME: PATIENT_NAME, DOC_ID: 0, COMMUNICATION_REFERENCE_CODE: COMMUNICATION_REFERENCE_CODE, CARD_TYPE: CARD_TYPE, ACQUIRER_NAME: ACQUIRER_NAME, CARD_NO: CARD_NO, CARD_AMOUNT: CARD_AMOUNT, CARD_AUTH_NO: CARD_AUTH_NO, CARD_RRN_NO: CARD_RRN_NO, CARD_TRANSACTION_LOGID: CARD_TRANSACTION_LOGID, CARD_TID: CARD_TID },
        function (JData) {
        var inserteddata = JData.d.split('@');
        if (inserteddata[0] == 'true') {
        IP_REQUEST_STRING = IP_REQUEST_STRING;
        IP_COMUNICATION_ID = inserteddata[1];
        IP_AMOUNT = IP_AMOUNT;


        var amount = 0;
        var cardnumber = '';
        var authno = '';
        var cardtype = ''
        var bankname = ''
        var Trantype = '';
        var Tid = 0;
        dataarray1 = [];
        if (dataarrayEcitizen.status == "settled") {
        $('[id*=btnpineclick]')[0].style.display = 'block';
        $('[id*=btnpineapproveclick]')[0].style.display = 'none';
        $('[id*=btnCancelpineclick]')[0].style.display = 'none';

        document.getElementById('<%= hdnPlutusTransactionReferenceID.ClientID %>').value = dataarrayEcitizen.payment_reference[0].payment_reference;
        amount = dataarrayEcitizen.payment_reference[0].amount;
        Tid = dataarrayEcitizen.payment_reference[0].payment_reference;
        cardnumber = dataarrayEcitizen.invoice_number;


        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtAuthCode').value = cardnumber;
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtTenderedAmt').value = amount;
        srvchrgamount(ctl00_ContentPlaceHolder1_ReceiptControl2_txtamt, amount);
        NewAddTransactionDetails();
        return false;
        }

        }
        });

        }
        }
        },
        error: function (jqXHR, textStatus, errorThrown) {
        return false;
        }
        });*/
    }
    var dataarrayresponse = [];
    function PaytmApprove() {
        var DOC_ID = document.getElementById('ctl00_hdndocsessionid').value;
        if (DOC_ID == '' || DOC_ID == undefined || DOC_ID == 'undefined' || DOC_ID == '0' || DOC_ID == 0) {
            DOC_ID = 0;
        }
        var PlutusTransactionReferenceID = document.getElementById('<%= hdnPlutusTransactionReferenceID.ClientID %>').value;
        if (PlutusTransactionReferenceID == '' || PlutusTransactionReferenceID == undefined | PlutusTransactionReferenceID == 'undefined') {
            PlutusTransactionReferenceID = 0;
        }
        //var paytmMid = 'Suvarn86533439793523';
        //var paytmTid = '70001251';
        //var merchantTransactionId = '567890987679163';

        //var key = "7VuyVcrF#wnoPDWg";
        //var URL = 'https://securegw-stage.paytm.in/ecr/V2/payment/status';



        var paytmMid = AUTO_CANCEL_DURATION_MINUTES;
        var paytmTid = MERCHANT_STORE_POS_CODE;
        var merchantTransactionId = PlutusTransactionReferenceID;

        var key = SECURITY_TOKEN;
        var URL = document.getElementById('<%= hdnpinelabapproveurl.ClientID %>').value;

        if (PlutusTransactionReferenceID != 0) {
            var UrlVal = ReturnIniUrl();
            var _MissionServiceURL = URL; // document.getElementById('<%= hdnpinelabapproveurl.ClientID %>').value
            var UIpath = UrlVal + 'Private/FrontOffice/OpBilling/OPBillClientSide.aspx/BindMessionData';
            _JSONParams = "{'paytmMid': '" + paytmMid + "','paytmTid': '" + paytmTid + "','merchantTransactionId': '" + merchantTransactionId + "','key': '" + key + "','URL': '" + URL + "'}";
            IP_REQUEST_STRING = _JSONParams;
            GetNonAsync(
                "Private/FrontOffice/OpBilling/OPBillClientSide.aspx/SaveMahindata",
                { IP_REQUEST_STRING: IP_REQUEST_STRING, IP_COMUNICATION_ID: 0, IP_AMOUNT: IP_AMOUNT, FLAG: 'A', REQ_TYPE: 'I', DEVICEID: DEVICEID, TERMINAL_NAME: TERMINAL_NAME, PLUTUS_REFERENCE_ID: PlutusTransactionReferenceID, paymentmodeid: paymentmodeid, UMR_NO: UMR_NO, ADMN_NO: ADMN_NO, MOBILE_NO: MOBILE_NO, PATIENT_ID: PATIENT_ID, PATIENT_NAME: PATIENT_NAME, DOC_ID: DOC_ID, COMMUNICATION_REFERENCE_CODE: COMMUNICATION_REFERENCE_CODE, CARD_TYPE: CARD_TYPE, ACQUIRER_NAME: ACQUIRER_NAME, CARD_NO: CARD_NO, CARD_AMOUNT: CARD_AMOUNT, CARD_AUTH_NO: CARD_AUTH_NO, CARD_RRN_NO: CARD_RRN_NO, CARD_TRANSACTION_LOGID: CARD_TRANSACTION_LOGID, CARD_TID: CARD_TID },
                function (JData) {
                    var inserteddata = JData.d.split('@');
                    if (inserteddata[0] == 'true') {
                        var UIpath = window.location.origin + '/PAYTMAPI/getPaytmresponse';

                        IP_REQUEST_STRING = _JSONParams;
                        IP_COMUNICATION_ID = inserteddata[1];
                        IP_AMOUNT = IP_AMOUNT;
                        $.ajax({
                            type: "POST",
                            url: UIpath,
                            contentType: "application/json; charset=utf-8",
                            dataType: "json",
                            data: _JSONParams,
                            async: false,
                            error: function (jqXHR, textStatus, errorThrown) {
                                return false;
                            },
                            success: function (jdata) {
                                IP_REQUEST_STRING = jdata.Data;
                                IP_COMUNICATION_ID = inserteddata[1];
                                dataarrayresponse = JSON.parse(jdata.Data).body;

                                if (getParameterByName("DOC_FORM_CD") == "FO_PREREFUND" || getParameterByName("DOC_FORM_CD") == "FO_REFUND") {
                                } else {

                                    if (dataarrayresponse.payMethod == 'CREDIT_CARD' || dataarrayresponse.payMethod == 'DEBIT_CARD') {
                                        CARD_TYPE = dataarrayresponse.cardScheme;
                                        ACQUIRER_NAME = dataarrayresponse.issuingBankName;
                                        CARD_NO = dataarrayresponse.issuerMaskCardNo;
                                        CARD_AMOUNT = dataarrayresponse.transactionAmount;
                                        CARD_AUTH_NO = dataarrayresponse.authCode;
                                        CARD_RRN_NO = dataarrayresponse.authCode;
                                        CARD_TRANSACTION_LOGID = dataarrayresponse.merchantTransactionId;
                                        CARD_TID = dataarrayresponse.retrievalReferenceNo;
                                    }
                                    else if (dataarrayresponse.payMethod == 'UPI') {
                                        CARD_TYPE = '';
                                        ACQUIRER_NAME = dataarrayresponse.issuingBankName;
                                        CARD_NO = dataarrayresponse.merchantTransactionId;
                                        CARD_AMOUNT = dataarrayresponse.transactionAmount;
                                        CARD_AUTH_NO = dataarrayresponse.bankMid;
                                        CARD_RRN_NO = dataarrayresponse.bankMid;
                                        CARD_TRANSACTION_LOGID = dataarrayresponse.merchantTransactionId;
                                        CARD_TID = dataarrayresponse.retrievalReferenceNo;
                                    }
                                    else {
                                        CARD_TYPE = dataarrayresponse.cardScheme;
                                        ACQUIRER_NAME = dataarrayresponse.issuingBankName;
                                        CARD_NO = dataarrayresponse.issuerMaskCardNo;
                                        CARD_AMOUNT = dataarrayresponse.transactionAmount;
                                        CARD_AUTH_NO = dataarrayresponse.authCode;
                                        CARD_RRN_NO = dataarrayresponse.authCode;
                                        CARD_TRANSACTION_LOGID = dataarrayresponse.merchantTransactionId;
                                        CARD_TID = dataarrayresponse.retrievalReferenceNo;

                                    }

                                }

                                GetNonAsync(
                                    "Private/FrontOffice/OpBilling/OPBillClientSide.aspx/SaveMahindata",
                                    { IP_REQUEST_STRING: IP_REQUEST_STRING, IP_COMUNICATION_ID: IP_COMUNICATION_ID, IP_AMOUNT: IP_AMOUNT, FLAG: 'A', REQ_TYPE: 'UR', DEVICEID: DEVICEID, TERMINAL_NAME: TERMINAL_NAME, PLUTUS_REFERENCE_ID: PlutusTransactionReferenceID, paymentmodeid: paymentmodeid, UMR_NO: UMR_NO, ADMN_NO: ADMN_NO, MOBILE_NO: MOBILE_NO, PATIENT_ID: PATIENT_ID, PATIENT_NAME: PATIENT_NAME, DOC_ID: DOC_ID, COMMUNICATION_REFERENCE_CODE: IP_COMUNICATION_ID, CARD_TYPE: CARD_TYPE, ACQUIRER_NAME: ACQUIRER_NAME, CARD_NO: CARD_NO, CARD_AMOUNT: CARD_AMOUNT, CARD_AUTH_NO: CARD_AUTH_NO, CARD_RRN_NO: CARD_RRN_NO, CARD_TRANSACTION_LOGID: CARD_TRANSACTION_LOGID, CARD_TID: CARD_TID },
                                    function (JData) {

                                    },
                                    function (jqXHR, textStatus, errorThrown) {
                                    });

                                if (JSON.parse(jdata.Data).body.resultInfo.resultCode == "S") {

                                    var amount = 0;
                                    var cardnumber = '';
                                    var authno = '';
                                    var cardtype = '';
                                    var bankname = '';
                                    var Trantype = '';
                                    var Tid = 0;
                                    dataarray1 = [];

                                    var doc_form_cd_machine = getParameterByName("DOC_FORM_CD");
                                    if (doc_form_cd_machine == 'REG-EXPIRY') {

                                    }
                                    else if (doc_form_cd_machine == 'FOIPADV' || doc_form_cd_machine == 'IPFINALBILL' || doc_form_cd_machine == 'FOERADV') {
                                        MOBILE_NO = ctl00_ContentPlaceHolder1_AdmnPatientDetails_LblMobile.innerHTML;
                                        PATIENT_NAME = ctl00_ContentPlaceHolder1_AdmnPatientDetails_lblPatName.innerHTML;
                                        PATIENT_ID = document.getElementById('' + ctrlcom + '_AdmnPatientDetails_ucUmrNo__hiddenID').value;
                                        ADMN_NO = document.getElementById('' + ctrlcom + '_AdmnPatientDetails_hdnAdmnNo').value;
                                        UMR_NO = document.getElementById('' + ctrlcom + '_AdmnPatientDetails_hdnUmrNo').value;
                                    }
                                    else if (doc_form_cd_machine == 'FOERFBILL' || doc_form_cd_machine == 'IPFINALBILLPAY') {
                                        MOBILE_NO = ctl00_ContentPlaceHolder1_IPPatientDtls1_LblMobile.innerHTML;
                                        PATIENT_NAME = ctl00_ContentPlaceHolder1_IPPatientDtls1_lblPatName.innerHTML;
                                        PATIENT_ID = document.getElementById('' + ctrlcom + '_IPPatientDtls1_ucUmrNo__hiddenID').value;
                                        ADMN_NO = document.getElementById('' + ctrlcom + '_IPPatientDtls1_hdnAdmnNo').value;
                                        UMR_NO = document.getElementById('' + ctrlcom + '_IPPatientDtls1_hdnUmrNo').value;
                                    }
                                    else if (doc_form_cd_machine == 'FO_REFUND' || doc_form_cd_machine == 'FO_OUTSTANDING' || doc_form_cd_machine == 'Rk9PUEFEVg==' || doc_form_cd_machine == 'FOOPADV') {
                                        MOBILE_NO = ctl00_ContentPlaceHolder1_umrPatientDetails_lblMobileNo.innerHTML;
                                        PATIENT_NAME = ctl00_ContentPlaceHolder1_umrPatientDetails_lblPatName.innerHTML;
                                        PATIENT_ID = document.getElementById('' + ctrlcom + '_umrPatientDetails_hdnPatientid').value;
                                        ADMN_NO = document.getElementById('' + ctrlcom + '_umrPatientDetails_hdnadmnno').value;
                                        UMR_NO = document.getElementById('' + ctrlcom + '_umrPatientDetails_hdnUmrNo').value;
                                    }
                                    else if (doc_form_cd_machine == 'FO_PREREFUND') {
                                        MOBILE_NO = ctl00_ContentPlaceHolder1_umrPatientDetails_lblMobileNo.innerHTML;
                                        PATIENT_NAME = ctl00_ContentPlaceHolder1_umrPatientDetails_lblPatName.innerHTML;
                                        PATIENT_ID = document.getElementById('' + ctrlcom + '_umrPatientDetails_hdnPatientid').value;
                                        ADMN_NO = '';
                                        UMR_NO = document.getElementById('' + ctrlcom + '_umrPatientDetails_hdnUmrNo').value;
                                    }



                                    if (getParameterByName("DOC_FORM_CD") == "FO_PREREFUND" || getParameterByName("DOC_FORM_CD") == "FO_REFUND") {
                                        dataarray1.push(JSON.parse(jdata.d));
                                        $('[id*=btnpineclick]')[0].style.display = 'block';
                                        $('[id*=btnpineapproveclick]')[0].style.display = 'none';
                                        $('[id*=btnCancelpineclick]')[0].style.display = 'none';
                                        authno = dataarray1[0].TransactionData[1].Value;
                                        cardnumber = document.getElementById("<%= hdnbanCC_CARD_NO.ClientID %>").value;
                                        bankname = document.getElementById("<%= hdnbanCC_ISSUE_BANK_ID.ClientID %>").value;
                                        amount = document.getElementById("<%= hdnbanCC_amount.ClientID %>").value;
                                        Trantype = 'CARD';
                                        var cardtype_id = document.getElementById("<%= hdnbanCC_CARD_TYPE_ID.ClientID %>").value;
                                        $('[id*=ddlCardType]').val(cardtype_id);
                                        cardtype = $('[id*=ddlCardType] option:selected').text();

                                        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtExpDt').value = new Date().format('dd-MMM-yyyy');
                                        checkpayment();

                                        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtCardNo').value = cardnumber;
                                        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtamt').value = amount;
                                        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtAuthCode').value = authno;
                                        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtExpDt').value = new Date().format('dd-MMM-yyyy');
                                        var cardtype_id = document.getElementById("<%= hdnbanCC_CARD_TYPE_ID.ClientID %>").value;
                                        $('[id*=ddlCardType]').val(cardtype_id);
                                        cardtype = $('[id*=ddlCardType] option:selected').text();


                                        $('[id*=ddlBankName] option:contains(' + bankname + ')').attr('selected', true);
                                        $('[id*=ddlCardType] option:contains(' + cardtype + ')').attr('selected', true);

                                        NewCalculateTendorAmt(cardtype, ctl00_ContentPlaceHolder1_ReceiptControl2_txtamt);
                                        if (doc_form_cd_machine == 'FO_OUTSTANDING' || doc_form_cd_machine == 'FOIPADV' || doc_form_cd_machine == 'FO_REFUND' || doc_form_cd_machine == 'Rk9PUEFEVg==' || doc_form_cd_machine == 'FOOPADV') {
                                            srvchrgamount(ctl00_ContentPlaceHolder1_ReceiptControl2_txtamt, amount);
                                        }

                                    } else {


                                        $('[id*=btnpineclick]')[0].style.display = 'block';
                                        $('[id*=btnpineapproveclick]')[0].style.display = 'none';
                                        $('[id*=btnCancelpineclick]')[0].style.display = 'none';
                                        if (dataarrayresponse.payMethod == 'CREDIT_CARD' || dataarrayresponse.payMethod == 'DEBIT_CARD') {
                                            amount = parseFloat(dataarrayresponse.transactionAmount / 100);
                                            Tid = CARD_TID
                                            cardnumber = CARD_NO;
                                            authno = CARD_AUTH_NO;
                                            Trantype = CARD_TRANSACTION_LOGID;
                                            cardtype = dataarrayresponse.cardScheme;
                                            if (dataarrayresponse.issuingBankName == 'HDFC Bank') {
                                                dataarrayresponse.issuingBankName = 'HDFC';
                                            }
                                            bankname = dataarrayresponse.issuingBankName;
                                        } else {
                                            amount = parseFloat(dataarrayresponse.transactionAmount / 100);
                                            Tid = CARD_TID
                                            cardnumber = CARD_NO;
                                            authno = CARD_AUTH_NO;
                                            Trantype = CARD_TRANSACTION_LOGID;
                                            cardtype = dataarrayresponse.cardScheme;
                                            if (dataarrayresponse.issuingBankName == 'HDFC Bank') {
                                                dataarrayresponse.issuingBankName = 'HDFC';
                                            }
                                            bankname = dataarrayresponse.issuingBankName;
                                        }
                                    }

                                    var dueamount = $('#' + ctrlcom + '_ReceiptControl2_txtpatdue').val();
                                    if (parseFloat(amount) != parseFloat(dueamount)) {
                                        //                                         $(".stoast").toastText("Info", "", 5, 3);
                                        //                                         return false;


                                    }

                                    if (doc_form_cd_machine == 'FO_OUTSTANDING' || doc_form_cd_machine == 'FOIPADV' || doc_form_cd_machine == 'FO_REFUND' || doc_form_cd_machine == 'Rk9PUEFEVg==' || doc_form_cd_machine == 'FOOPADV') {
                                        mode = "A";
                                    }

                                    if (mode == "Q") {
                                        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtcardNoCmp').value = cardnumber;
                                        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtCardAmt').value = amount;
                                        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtcardAuther').value = authno;
                                        $('[id*=ddbankName] option:contains(' + bankname + ')').attr('selected', true);
                                        $('[id*=ddcardType] option:contains(' + cardtype + ')').attr('selected', true);
                                        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtcardNoCmp').disabled = true;
                                        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtCardAmt').disabled = true;
                                        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtcardAuther').disabled = true;
                                        $('[id*=ddbankName] option:contains(' + bankname + ')').attr('disabled', true);
                                        $('[id*=ddcardType] option:contains(' + cardtype + ')').attr('disabled', true);

                                        CalculateAmountPinelabCardPayment('Card')
                                    }
                                    else if (mode == "A") {
                                        if (dataarrayresponse.payMethod == 'CREDIT_CARD' || dataarrayresponse.payMethod == 'DEBIT_CARD') {
                                            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtCardNo').value = cardnumber;
                                            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtamt').value = amount;
                                            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtAuthCode').value = authno;
                                            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtExpDt').value = new Date().format('dd-MMM-yyyy');
                                            $('[id*=ddlBankName] option:contains(' + bankname + ')').attr('selected', true);
                                            $('[id*=ddlCardType] option:contains(' + cardtype + ')').attr('selected', true);
                                        }
                                        else {
                                            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtCardNo').value = Tid;
                                            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtAuthCode').value = authno;
                                            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtTenderedAmt').value = amount;
                                        }
                                        if (doc_form_cd_machine == 'FO_OUTSTANDING' || doc_form_cd_machine == 'FOIPADV' || doc_form_cd_machine == 'FO_REFUND' || doc_form_cd_machine == 'Rk9PUEFEVg==' || doc_form_cd_machine == 'FOOPADV') {
                                            srvchrgamount(ctl00_ContentPlaceHolder1_ReceiptControl2_txtamt, amount);
                                        }
                                        dataarrayresponse = [];
                                        NewAddTransactionDetails();
                                        /*if (Trantype.toUpperCase() == 'CARD') {
                                        $('[id*=ddlBankName] option:contains(' + bankname + ')').removeAttr('selected', true);
                                        $('[id*=ddlCardType] option:contains(' + cardtype + ')').removeAttr('selected', true);
                                        }*/
                                    }
                                } else {
                                    $(".toast").toastText("Info", "Please make the payment in machine", 5, 2);
                                    return false;
                                }
                                return false;
                            }
                        });
                    } else {
                        $(".stoast").toastText("Info", "PLEASE APPROVE OPEN TXN FIRST", 5, 3);
                        return false;
                    }



                },
                function (jqXHR, textStatus, errorThrown) {
                });


        } else {
            $(".stoast").toastText("Info", "PLEASE APPROVE OPEN TXN FIRST", 5, 3);
            return false;
        }

    }
    function PaytmProcess() {
        var Pinelabreq = document.getElementById('<%= hdnpinelabintgreq.ClientID %>').value;
        var EnableEmpasa = document.getElementById('<%= hdnempasaintgreq.ClientID %>').value;
        var hdnprocesscheck = document.getElementById('<%= hdnprocesscheck.ClientID %>').value;
        var hdnecitigen = document.getElementById('ctl00_hdnecitigen').value;
        var Paytm = document.getElementById('<%= hdnpaytmint.ClientID %>').value;

        if (hdnprocesscheck == 'N') {
            var Advconvamt = document.getElementById('<%= txtCurrAmt.ClientID %>').value;
            var AdvPatnet = document.getElementById('<%= txtpatNet.ClientID %>').value;
            var quickconvamt = document.getElementById('<%= txtCardAmt.ClientID %>').value;
            var QuickDueamt = document.getElementById('<%= txtpatdue.ClientID %>').value;
            var AdvConcamt = document.getElementById('<%= txtpatgrossamt.ClientID %>').value;
            var DueAthNamequick = document.getElementById('<%= Search3.ClientID %>_txtSearchControl').value;
            var ConcAuthNameAdavanced = document.getElementById('<%= ucdueauth.ClientID %>_txtSearchControl').value;


            var totaldueamt = 0;
            if (mode == "Q") {
                totaldueamt = parseFloat(QuickDueamt) - parseFloat(quickconvamt);
            }
            if (mode == "A") {
                totaldueamt = parseFloat(AdvPatnet) - parseFloat(Advconvamt);
            }

            if (ConcAuthNameAdavanced == '' || ConcAuthNameAdavanced == undefined || ConcAuthNameAdavanced == 'undefined' || ConcAuthNameAdavanced == '0' || ConcAuthNameAdavanced == 0 || ConcAuthNameAdavanced == null || ConcAuthNameAdavanced == 'null') {
                ConcAuthNameAdavanced = 0;
            }
            if (DueAthNamequick == '' || DueAthNamequick == undefined || DueAthNamequick == 'undefined' || DueAthNamequick == '0' || DueAthNamequick == 0 || DueAthNamequick == null || DueAthNamequick == 'null') {
                DueAthNamequick = 0;
            }
            if (AdvConcamt == '' || AdvConcamt == undefined || AdvConcamt == 'undefined' || AdvConcamt == '0' || AdvConcamt == 0 || AdvConcamt == null || AdvConcamt == 'null') {
                AdvConcamt = 0;
            }

            if (totaldueamt == '' || totaldueamt == undefined || totaldueamt == 'undefined' || totaldueamt == '0' || totaldueamt == 0 || totaldueamt == null || totaldueamt == 'null') {
                totaldueamt = 0;
            }
            if (Advconvamt == '' || Advconvamt == undefined || Advconvamt == 'undefined' || Advconvamt == '0' || Advconvamt == 0 || Advconvamt == null || Advconvamt == 'null') {
                Advconvamt = 0;
            }
            if (quickconvamt == '' || quickconvamt == undefined || quickconvamt == 'undefined' || quickconvamt == '0' || quickconvamt == 0 || quickconvamt == null || quickconvamt == 'null') {
                quickconvamt = 0;
            }
            if (QuickDueamt == '' || QuickDueamt == undefined || QuickDueamt == 'undefined' || QuickDueamt == '0' || QuickDueamt == 0 || QuickDueamt == null || QuickDueamt == 'null') {
                QuickDueamt = 0;
            }
            if (AdvPatnet == '' || AdvPatnet == undefined || AdvPatnet == 'undefined' || AdvPatnet == '0' || AdvPatnet == 0 || AdvPatnet == null || AdvPatnet == 'null') {
                AdvPatnet = 0;
            }

            var doc_form_cd_machine = getParameterByName("DOC_FORM_CD");


            var DOC_ID = document.getElementById('ctl00_hdndocsessionid').value;
            if (DOC_ID == '' || DOC_ID == undefined || DOC_ID == 'undefined' || DOC_ID == '0' || DOC_ID == 0) {
                DOC_ID = 0;
            }
            var doc_form_cd_machine = getParameterByName("DOC_FORM_CD");
            if (doc_form_cd_machine == 'REG-EXPIRY') {
                MOBILE_NO = ctl00_ContentPlaceHolder1_txtMobile1.value;
                PATIENT_NAME = document.getElementById('' + ctrlcom + '_txtDisplayname').value;
                PATIENT_ID = 0;
                ADMN_NO = '';
                UMR_NO = '';
            }
            else if (doc_form_cd_machine == 'HISOPBILLFRNT') {
                MOBILE_NO = ctl00_ContentPlaceHolder1_umrPatientDetails_lblMobileNo.innerHTML;
                PATIENT_NAME = ctl00_ContentPlaceHolder1_umrPatientDetails_lblPatName.innerHTML;
                PATIENT_ID = document.getElementById('' + ctrlcom + '_umrPatientDetails_hdnPatientid').value;
                ADMN_NO = '';
                UMR_NO = document.getElementById('' + ctrlcom + '_umrPatientDetails_hdnUmrNo').value;
            }
            else if (doc_form_cd_machine == 'HISOPBILLFRNT' || doc_form_cd_machine == 'FO_OPCONSULT') {
                MOBILE_NO = ctl00_ContentPlaceHolder1_umrPatientDetails_lblMobileNo.innerHTML;
                PATIENT_NAME = ctl00_ContentPlaceHolder1_umrPatientDetails_lblPatName.innerHTML;
                PATIENT_ID = document.getElementById('' + ctrlcom + '_umrPatientDetails_hdnPatientid').value;
                ADMN_NO = '';
                UMR_NO = document.getElementById('' + ctrlcom + '_umrPatientDetails_hdnUmrNo').value;
            }
            else if (doc_form_cd_machine == 'HISOPBILLFRNT' || doc_form_cd_machine == 'FO_OPCONSULT') {
                MOBILE_NO = ctl00_ContentPlaceHolder1_umrPatientDetails_lblMobileNo.innerHTML;
                PATIENT_NAME = ctl00_ContentPlaceHolder1_umrPatientDetails_lblPatName.innerHTML;
                PATIENT_ID = document.getElementById('' + ctrlcom + '_umrPatientDetails_hdnPatientid').value;
                ADMN_NO = '';
                UMR_NO = document.getElementById('' + ctrlcom + '_umrPatientDetails_hdnUmrNo').value;
            }
            else if (doc_form_cd_machine == 'OPDREGBILL') {
                if (ctl00_ContentPlaceHolder1_chk_old.checked == false) {
                    MOBILE_NO = ctl00_ContentPlaceHolder1_Address1_txtMobile1.value;
                    PATIENT_NAME = document.getElementById('' + ctrlcom + '_txtDisplayname').innerHTML;
                    PATIENT_ID = 0;
                    ADMN_NO = '';
                    UMR_NO = '';
                } else {
                    MOBILE_NO = ctl00_ContentPlaceHolder1_umrPatientDetails_lblMobileNo.innerHTML;
                    PATIENT_NAME = ctl00_ContentPlaceHolder1_umrPatientDetails_lblPatName.innerHTML;
                    PATIENT_ID = document.getElementById('' + ctrlcom + '_umrPatientDetails_hdnPatientid').value;
                    ADMN_NO = '';
                    UMR_NO = document.getElementById('' + ctrlcom + '_umrPatientDetails_hdnUmrNo').value;
                }
            }
            else if (doc_form_cd_machine == 'FOIPADV' || doc_form_cd_machine == 'IPFINALBILL' || doc_form_cd_machine == 'FOERADV') {
                MOBILE_NO = ctl00_ContentPlaceHolder1_AdmnPatientDetails_LblMobile.innerHTML;
                PATIENT_NAME = ctl00_ContentPlaceHolder1_AdmnPatientDetails_lblPatName.innerHTML;
                PATIENT_ID = document.getElementById('' + ctrlcom + '_AdmnPatientDetails_ucUmrNo__hiddenID').value;
                ADMN_NO = document.getElementById('' + ctrlcom + '_AdmnPatientDetails_hdnAdmnNo').value;
                UMR_NO = document.getElementById('' + ctrlcom + '_AdmnPatientDetails_hdnUmrNo').value;
            }
            else if (doc_form_cd_machine == 'FOERFBILL' || doc_form_cd_machine == 'IPFINALBILLPAY') {
                MOBILE_NO = ctl00_ContentPlaceHolder1_IPPatientDtls1_LblMobile.innerHTML;
                PATIENT_NAME = ctl00_ContentPlaceHolder1_IPPatientDtls1_lblPatName.innerHTML;
                PATIENT_ID = document.getElementById('' + ctrlcom + '_IPPatientDtls1_ucUmrNo__hiddenID').value;
                ADMN_NO = document.getElementById('' + ctrlcom + '_IPPatientDtls1_hdnAdmnNo').value;
                UMR_NO = document.getElementById('' + ctrlcom + '_IPPatientDtls1_hdnUmrNo').value;
            }
            else if (doc_form_cd_machine == 'FO_REFUND' || doc_form_cd_machine == 'FO_OUTSTANDING' || doc_form_cd_machine == 'Rk9PUEFEVg==' || doc_form_cd_machine == 'FOOPADV') {
                MOBILE_NO = ctl00_ContentPlaceHolder1_umrPatientDetails_lblMobileNo.innerHTML;
                PATIENT_NAME = ctl00_ContentPlaceHolder1_umrPatientDetails_lblPatName.innerHTML;
                PATIENT_ID = document.getElementById('' + ctrlcom + '_umrPatientDetails_hdnPatientid').value;
                ADMN_NO = document.getElementById('' + ctrlcom + '_umrPatientDetails_hdnadmnno').value;
                UMR_NO = document.getElementById('' + ctrlcom + '_umrPatientDetails_hdnUmrNo').value;
            }
            else if (doc_form_cd_machine == 'FO_PREREFUND') {
                MOBILE_NO = ctl00_ContentPlaceHolder1_AdmnPatientDetails_LblMobile.innerHTML
                PATIENT_NAME = ctl00_ContentPlaceHolder1_AdmnPatientDetails_lblPatName.innerHTML;
                PATIENT_ID = document.getElementById('' + ctrlcom + '_umrPatientDetails_hdnPatientid').value;
                ADMN_NO = '';
                UMR_NO = document.getElementById('' + ctrlcom + '_umrPatientDetails_hdnUmrNo').value;
            }


            var pinelabid = 0;


            var DOC_FORM_CD = 'HISOPBILLFRNT'; //'<%=SessionHandler.DOC_FORM_CD%>';
            if (DOC_FORM_CD == 'HISOPBILLFRNT' || DOC_FORM_CD == 'FO_OPCONSULT' || DOC_FORM_CD == 'OPDREGBILL' || DOC_FORM_CD == 'FOIPADV' || DOC_FORM_CD == 'HSFOADV' || DOC_FORM_CD == 'IPFINALBILLPAY' || DOC_FORM_CD == 'REG - EXPIRY' || DOC_FORM_CD == 'FOERADV' || DOC_FORM_CD == 'FOERFBILL' || DOC_FORM_CD == 'FO_OUTSTANDING' || DOC_FORM_CD == 'HISASSPUSER') {
                var UrlVal = ReturnIniUrl();
                var _MissionServiceURL = document.getElementById('<%= hdnpinelabuploadurl.ClientID %>').value;
                var UIpath = UrlVal + 'Private/FrontOffice/OpBilling/OPBillClientSide.aspx/BindMessionData';
                var _JSONParams = '';
                DEVICEID = $('[id*=Ddlpinelab] option:selected').val();
                var checkdivid = DEVICEID;
                if (checkdivid == '' || checkdivid == undefined || checkdivid == 'undefined' || checkdivid == '' || checkdivid == '0' || checkdivid == 0) {
                    checkdivid = 0;
                }
                TERMINAL_NAME = $('[id*=Ddlpinelab] option:selected').text().trim();
                if (checkdivid != 0) {
                    paymentmodeid = document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlcrdtype').value;
                    if (mode == "Q") {
                        paymentmodeid = paymentmodeid;
                        if (paymentmodeid == 0) {
                            paymentmodeid = document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlPaymentType').value;
                        }
                    } else {
                        paymentmodeid = document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlPaymentType').value;
                    }
                    var paymentdeviceid = getCookie("CONFIG_ID");

                    if (mode == "Q") {

                        IP_AMOUNT = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtCardAmt').value;
                        if (IP_AMOUNT == undefined || IP_AMOUNT == "" || IP_AMOUNT == '' || IP_AMOUNT == 'undefined' || IP_AMOUNT == null || IP_AMOUNT == 'null' || IP_AMOUNT == '0' || IP_AMOUNT == 0) {
                            IP_AMOUNT = 0;
                        }
                        if (parseFloat(IP_AMOUNT) < 1) {
                            $(".toast").toastText("Info", "Below one rupee transactions we are not allowing!", 5, 2);
                            return false;
                        }
                        IP_AMOUNT = parseFloat(IP_AMOUNT) * 100;
                        if (IP_AMOUNT == 0) {
                            IP_AMOUNT = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtamt').value;
                            IP_AMOUNT = parseFloat(IP_AMOUNT) * 100;
                        }
                    }
                    if (mode == "A") {
                        IP_AMOUNT = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtamt').value;
                        if (parseFloat(IP_AMOUNT) < 1) {
                            $(".toast").toastText("Info", "Below one rupee transactions we are not allowing!", 5, 2);
                            return false;
                        }
                        IP_AMOUNT = parseFloat(IP_AMOUNT) * 100;
                    }

                    if (parseFloat(IP_AMOUNT) > 0) {

                    } else {
                        $(".toast").toastText("Info", "Please enter the amount for selected payment mode..!", 5, 2);
                        return false;
                    }


                    if (parseFloat(IP_AMOUNT) > 0) {
                        IP_REQUEST_STRING = '', IP_COMUNICATION_ID = 0, FLAG = 'P';
                        IP_REQUEST_STRING = _JSONParams;
                        IP_COMUNICATION_ID = 0;
                        GetNonAsync(
                 "Private/FrontOffice/OpBilling/OPBillClientSide.aspx/SaveMahindata",
                 { IP_REQUEST_STRING: IP_REQUEST_STRING, IP_COMUNICATION_ID: IP_COMUNICATION_ID, IP_AMOUNT: IP_AMOUNT, FLAG: FLAG, REQ_TYPE: 'I', DEVICEID: DEVICEID, TERMINAL_NAME: TERMINAL_NAME, PLUTUS_REFERENCE_ID: '', paymentmodeid: paymentmodeid, UMR_NO: UMR_NO, ADMN_NO: ADMN_NO, MOBILE_NO: MOBILE_NO, PATIENT_ID: PATIENT_ID, PATIENT_NAME: PATIENT_NAME, DOC_ID: DOC_ID, COMMUNICATION_REFERENCE_CODE: COMMUNICATION_REFERENCE_CODE, CARD_TYPE: CARD_TYPE, ACQUIRER_NAME: ACQUIRER_NAME, CARD_NO: CARD_NO, CARD_AMOUNT: CARD_AMOUNT, CARD_AUTH_NO: CARD_AUTH_NO, CARD_RRN_NO: CARD_RRN_NO, CARD_TRANSACTION_LOGID: CARD_TRANSACTION_LOGID, CARD_TID: CARD_TID },
                 function (JData) {
                     var inserteddata = JData.d.split('@');
                     if (inserteddata[0] == 'true') {
                         //OriginalPlutusTransactionReferenceID
                         var _JSONParams = '';
                         var Hissendno = PATIENT_NAME + '-' + UMR_NO;
                         IP_COMUNICATION_ID = inserteddata[1];
                         var paytmMid = AUTO_CANCEL_DURATION_MINUTES;
                         var paytmTid = MERCHANT_STORE_POS_CODE;
                         var merchantTransactionId = IP_COMUNICATION_ID;
                         var transactionAmount = IP_AMOUNT;
                         var key = SECURITY_TOKEN
                         var URL = _MissionServiceURL;
                         //_JSONParams = JSON.stringify({ MIssionparameters: '{"merchantTransactionId":"' + inserteddata[2] + '","PaytmMid":"' + AUTO_CANCEL_DURATION_MINUTES + '","Key":"' + SECURITY_TOKEN + '","PaytmTid":"' + MERCHANT_STORE_POS_CODE + '","ChannelId":"' + IMEI + '" }', MIssionPAth: _MissionServiceURL });
                         _JSONParams = "{'paytmMid': '" + paytmMid + "','paytmTid': '" + paytmTid + "','merchantTransactionId': '" + merchantTransactionId + "','transactionAmount': '" + transactionAmount + "','key': '" + key + "','URL': '" + URL + "'}";

                         IP_REQUEST_STRING = _JSONParams;
                         IP_COMUNICATION_ID = inserteddata[1];
                         IP_AMOUNT = IP_AMOUNT;
                         GetNonAsync(
                 "Private/FrontOffice/OpBilling/OPBillClientSide.aspx/SaveMahindata",
                 { IP_REQUEST_STRING: IP_REQUEST_STRING, IP_COMUNICATION_ID: IP_COMUNICATION_ID, IP_AMOUNT: IP_AMOUNT, FLAG: 'P', REQ_TYPE: 'IU', DEVICEID: DEVICEID, TERMINAL_NAME: TERMINAL_NAME, PLUTUS_REFERENCE_ID: '', paymentmodeid: paymentmodeid, UMR_NO: UMR_NO, ADMN_NO: ADMN_NO, MOBILE_NO: MOBILE_NO, PATIENT_ID: PATIENT_ID, PATIENT_NAME: PATIENT_NAME, DOC_ID: DOC_ID, COMMUNICATION_REFERENCE_CODE: COMMUNICATION_REFERENCE_CODE, CARD_TYPE: CARD_TYPE, ACQUIRER_NAME: ACQUIRER_NAME, CARD_NO: CARD_NO, CARD_AMOUNT: CARD_AMOUNT, CARD_AUTH_NO: CARD_AUTH_NO, CARD_RRN_NO: CARD_RRN_NO, CARD_TRANSACTION_LOGID: CARD_TRANSACTION_LOGID, CARD_TID: CARD_TID },
                 function (JData) {

                     var UIpath = window.location.origin + '/PAYTMAPI/getPaytmrequest';
                     $.ajax({
                         type: "POST",
                         url: UIpath,
                         contentType: "application/json; charset=utf-8",
                         dataType: "json",
                         data: _JSONParams,
                         async: false,
                         error: function (jqXHR, textStatus, errorThrown) {
                             $(".stoast").toastText("Info", "'" + errorThrown + "'", 7, 2);
                             return false;
                         },
                         success: function (jdata1) {
                             IP_REQUEST_STRING = jdata1;
                             if (JSON.parse(jdata1.Data).body.resultInfo.resultStatus == 'ACCEPTED_SUCCESS') {
                                 hdnprocesscheck = 'Y';
                                 dataarray = [];
                                 $('[id*=btnpineclick]')[0].style.display = 'none';
                                 IP_REQUEST_STRING = jdata1.Data;
                                 dataarray.push(JSON.parse(jdata1.Data).body);
                                 document.getElementById('<%= hdnPlutusTransactionReferenceID.ClientID %>').value = IP_COMUNICATION_ID;
                                 GetNonAsync(
                                     "Private/FrontOffice/OpBilling/OPBillClientSide.aspx/SaveMahindata",
                                     { IP_REQUEST_STRING: IP_REQUEST_STRING, IP_COMUNICATION_ID: IP_COMUNICATION_ID, IP_AMOUNT: IP_AMOUNT, FLAG: 'P', REQ_TYPE: 'IUR', DEVICEID: DEVICEID, TERMINAL_NAME: TERMINAL_NAME, PLUTUS_REFERENCE_ID: IP_COMUNICATION_ID, paymentmodeid: paymentmodeid, UMR_NO: UMR_NO, ADMN_NO: ADMN_NO, MOBILE_NO: MOBILE_NO, PATIENT_ID: PATIENT_ID, PATIENT_NAME: PATIENT_NAME, DOC_ID: DOC_ID, COMMUNICATION_REFERENCE_CODE: IP_COMUNICATION_ID, CARD_TYPE: CARD_TYPE, ACQUIRER_NAME: ACQUIRER_NAME, CARD_NO: CARD_NO, CARD_AMOUNT: CARD_AMOUNT, CARD_AUTH_NO: CARD_AUTH_NO, CARD_RRN_NO: CARD_RRN_NO, CARD_TRANSACTION_LOGID: CARD_TRANSACTION_LOGID, CARD_TID: CARD_TID },
                                     function (JData) {
                                     },
                                     function (jqXHR, textStatus, errorThrown) {
                                         return false;
                                     });
                                 if (jdata1.Data != undefined) {

                                     if (JSON.parse(jdata1.Data).body.resultInfo.resultCode == 'A') {
                                         $(".toast").toastText("Info", "Transaction uploded successfully with the reference no" + document.getElementById('<%= hdnPlutusTransactionReferenceID.ClientID %>').value + "   and make the payment in the machine", 5, 2);
                                         $('[id*=btnpineclick]')[0].style.display = 'none';
                                         $('[id*=btnpineapproveclick]')[0].style.display = 'block';
                                         $('[id*=btnCancelpineclick]')[0].style.display = 'block';
                                     }
                                 }

                             } else {
                                 IP_REQUEST_STRING = jdata1.Data;
                                 GetNonAsync(
                                     "Private/FrontOffice/OpBilling/OPBillClientSide.aspx/SaveMahindata",
                                     { IP_REQUEST_STRING: IP_REQUEST_STRING, IP_COMUNICATION_ID: IP_COMUNICATION_ID, IP_AMOUNT: IP_AMOUNT, FLAG: 'P', REQ_TYPE: 'IUR', DEVICEID: DEVICEID, TERMINAL_NAME: TERMINAL_NAME, PLUTUS_REFERENCE_ID: IP_COMUNICATION_ID, paymentmodeid: paymentmodeid, UMR_NO: UMR_NO, ADMN_NO: ADMN_NO, MOBILE_NO: MOBILE_NO, PATIENT_ID: PATIENT_ID, PATIENT_NAME: PATIENT_NAME, DOC_ID: DOC_ID, COMMUNICATION_REFERENCE_CODE: IP_COMUNICATION_ID, CARD_TYPE: CARD_TYPE, ACQUIRER_NAME: ACQUIRER_NAME, CARD_NO: CARD_NO, CARD_AMOUNT: CARD_AMOUNT, CARD_AUTH_NO: CARD_AUTH_NO, CARD_RRN_NO: CARD_RRN_NO, CARD_TRANSACTION_LOGID: CARD_TRANSACTION_LOGID, CARD_TID: CARD_TID },
                                     function (JData) {
                                     },
                                     function (jqXHR, textStatus, errorThrown) {
                                         return false;
                                     });

                                 var warningmesg = JSON.parse(jdata1.Data).body.resultInfo.resultMsg;
                                 $('[id*=btnpineclick]')[0].style.display = 'block';
                                 $(".toast").toastText("Info", warningmesg, 5, 2);
                                 return false;

                             }
                         }
                     });
                 },
                 function (jqXHR, textStatus, errorThrown) {
                 });
                     }
                 },
                 function (jqXHR, textStatus, errorThrown) {
                 });
                    }



                    else {
                        $('[id*=btnpineclick]')[0].style.display = 'block';
                        $(".toast").toastText("Info", "Please enter the amount ..!", 5, 2);
                        return false;
                    }
                } else {
                    $(".toast").toastText("Info", "Please select terminal ..!", 5, 2);
                    return false;
                }
            } else {
                $(".toast").toastText("Info", "Mission Integration not done for this doccument ..!", 5, 2);
                return false;
            }
            return false;
        } else {
            $(".toast").toastText("Info", "Please complete the open transaction#'" + document.getElementById('<%= hdnPlutusTransactionReferenceID.ClientID %>').value + "'", 5, 2);
        }
    }
    function Pinelabdata() {
        var Pinelabreq = document.getElementById('<%= hdnpinelabintgreq.ClientID %>').value;
        var EnableEmpasa = document.getElementById('<%= hdnempasaintgreq.ClientID %>').value;
        var hdnprocesscheck = document.getElementById('<%= hdnprocesscheck.ClientID %>').value;
        var hdnecitigen = document.getElementById('ctl00_hdnecitigen').value;
        var Paytm = document.getElementById('<%= hdnpaytmint.ClientID %>').value;

        if (hdnecitigen.toUpperCase() == "Y") {
            Ecitigen();
            return false;
        }
        if (Paytm.toUpperCase() == "YES") {
            PaytmProcess();
            return false;
        }

        if (Pinelabreq == 'YES') {
            if (hdnprocesscheck == 'N') {
                var Advconvamt = document.getElementById('<%= txtCurrAmt.ClientID %>').value;
                var AdvPatnet = document.getElementById('<%= txtpatNet.ClientID %>').value;
                var quickconvamt = document.getElementById('<%= txtCardAmt.ClientID %>').value;
                var QuickDueamt = document.getElementById('<%= txtpatdue.ClientID %>').value;
                var AdvConcamt = document.getElementById('<%= txtpatgrossamt.ClientID %>').value;

                var DueAthNamequick = document.getElementById('<%= Search3.ClientID %>_txtSearchControl').value;

                var ConcAuthNameAdavanced = document.getElementById('<%= ucdueauth.ClientID %>_txtSearchControl').value;


                var totaldueamt = 0;
                if (mode == "Q") {
                    totaldueamt = parseFloat(QuickDueamt) - parseFloat(quickconvamt);
                }
                if (mode == "A") {
                    totaldueamt = parseFloat(AdvPatnet) - parseFloat(Advconvamt);
                }

                if (ConcAuthNameAdavanced == '' || ConcAuthNameAdavanced == undefined || ConcAuthNameAdavanced == 'undefined' || ConcAuthNameAdavanced == '0' || ConcAuthNameAdavanced == 0 || ConcAuthNameAdavanced == null || ConcAuthNameAdavanced == 'null') {
                    ConcAuthNameAdavanced = 0;
                }
                if (DueAthNamequick == '' || DueAthNamequick == undefined || DueAthNamequick == 'undefined' || DueAthNamequick == '0' || DueAthNamequick == 0 || DueAthNamequick == null || DueAthNamequick == 'null') {
                    DueAthNamequick = 0;
                }
                if (AdvConcamt == '' || AdvConcamt == undefined || AdvConcamt == 'undefined' || AdvConcamt == '0' || AdvConcamt == 0 || AdvConcamt == null || AdvConcamt == 'null') {
                    AdvConcamt = 0;
                }

                if (totaldueamt == '' || totaldueamt == undefined || totaldueamt == 'undefined' || totaldueamt == '0' || totaldueamt == 0 || totaldueamt == null || totaldueamt == 'null') {
                    totaldueamt = 0;
                }
                if (Advconvamt == '' || Advconvamt == undefined || Advconvamt == 'undefined' || Advconvamt == '0' || Advconvamt == 0 || Advconvamt == null || Advconvamt == 'null') {
                    Advconvamt = 0;
                }
                if (quickconvamt == '' || quickconvamt == undefined || quickconvamt == 'undefined' || quickconvamt == '0' || quickconvamt == 0 || quickconvamt == null || quickconvamt == 'null') {
                    quickconvamt = 0;
                }
                if (QuickDueamt == '' || QuickDueamt == undefined || QuickDueamt == 'undefined' || QuickDueamt == '0' || QuickDueamt == 0 || QuickDueamt == null || QuickDueamt == 'null') {
                    QuickDueamt = 0;
                }
                if (AdvPatnet == '' || AdvPatnet == undefined || AdvPatnet == 'undefined' || AdvPatnet == '0' || AdvPatnet == 0 || AdvPatnet == null || AdvPatnet == 'null') {
                    AdvPatnet = 0;
                }

                var doc_form_cd_machine = getParameterByName("DOC_FORM_CD");
                if (doc_form_cd_machine == 'HISOPBILLFRNT' || doc_form_cd_machine == 'FO_OPCONSULT' || doc_form_cd_machine == 'OPDREGBILL' || doc_form_cd_machine == 'REG-EXPIRY') {//OP BILL SAVE
                    if (mode == "Q") {
                        if (parseFloat(QuickDueamt) > 0 && DueAthNamequick == 0) {
                            $(".toast").toastText("Info", "Please select due authorization...!", 5, 2);
                            return false;
                        }
                    }
                    if (mode == "A") {
                        if (parseFloat(totaldueamt) > 0 && DueAthNamequick == 0) {
                            $(".toast").toastText("Info", "Please select due authorization...!", 5, 2);
                            return false;
                        }
                        if (parseFloat(AdvConcamt) > 0 && ConcAuthNameAdavanced == 0) {
                            $(".toast").toastText("Info", "Please select Concession authorization...!", 5, 2);
                            return false;
                        }
                    }


                }


                var DOC_ID = document.getElementById('ctl00_hdndocsessionid').value;
                if (DOC_ID == '' || DOC_ID == undefined || DOC_ID == 'undefined' || DOC_ID == '0' || DOC_ID == 0) {
                    DOC_ID = 0;
                }
                var doc_form_cd_machine = getParameterByName("DOC_FORM_CD");
                if (doc_form_cd_machine == 'REG-EXPIRY') {
                    MOBILE_NO = ctl00_ContentPlaceHolder1_txtMobile1.value;
                    PATIENT_NAME = document.getElementById('' + ctrlcom + '_txtDisplayname').value;
                    PATIENT_ID = 0;
                    ADMN_NO = '';
                    UMR_NO = '';
                }
                else if (doc_form_cd_machine == 'HISOPBILLFRNT') {
                    MOBILE_NO = ctl00_ContentPlaceHolder1_umrPatientDetails_lblMobileNo.innerHTML;
                    PATIENT_NAME = ctl00_ContentPlaceHolder1_umrPatientDetails_lblPatName.innerHTML;
                    PATIENT_ID = document.getElementById('' + ctrlcom + '_umrPatientDetails_hdnPatientid').value;
                    ADMN_NO = '';
                    UMR_NO = document.getElementById('' + ctrlcom + '_umrPatientDetails_hdnUmrNo').value;
                }
                else if (doc_form_cd_machine == 'HISOPBILLFRNT' || doc_form_cd_machine == 'FO_OPCONSULT') {
                    MOBILE_NO = ctl00_ContentPlaceHolder1_umrPatientDetails_lblMobileNo.innerHTML;
                    PATIENT_NAME = ctl00_ContentPlaceHolder1_umrPatientDetails_lblPatName.innerHTML;
                    PATIENT_ID = document.getElementById('' + ctrlcom + '_umrPatientDetails_hdnPatientid').value;
                    ADMN_NO = '';
                    UMR_NO = document.getElementById('' + ctrlcom + '_umrPatientDetails_hdnUmrNo').value;
                }
                else if (doc_form_cd_machine == 'HISOPBILLFRNT' || doc_form_cd_machine == 'FO_OPCONSULT') {
                    MOBILE_NO = ctl00_ContentPlaceHolder1_umrPatientDetails_lblMobileNo.innerHTML;
                    PATIENT_NAME = ctl00_ContentPlaceHolder1_umrPatientDetails_lblPatName.innerHTML;
                    PATIENT_ID = document.getElementById('' + ctrlcom + '_umrPatientDetails_hdnPatientid').value;
                    ADMN_NO = '';
                    UMR_NO = document.getElementById('' + ctrlcom + '_umrPatientDetails_hdnUmrNo').value;
                }
                else if (doc_form_cd_machine == 'OPDREGBILL') {
                    if (ctl00_ContentPlaceHolder1_chk_old.checked == false) {
                        MOBILE_NO = ctl00_ContentPlaceHolder1_Address1_txtMobile1.value;
                        PATIENT_NAME = document.getElementById('' + ctrlcom + '_txtDisplayname').innerHTML;
                        PATIENT_ID = 0;
                        ADMN_NO = '';
                        UMR_NO = '';
                    } else {
                        MOBILE_NO = ctl00_ContentPlaceHolder1_umrPatientDetails_lblMobileNo.innerHTML;
                        PATIENT_NAME = ctl00_ContentPlaceHolder1_umrPatientDetails_lblPatName.innerHTML;
                        PATIENT_ID = document.getElementById('' + ctrlcom + '_umrPatientDetails_hdnPatientid').value;
                        ADMN_NO = '';
                        UMR_NO = document.getElementById('' + ctrlcom + '_umrPatientDetails_hdnUmrNo').value;
                    }
                }
                else if (doc_form_cd_machine == 'FOIPADV' || doc_form_cd_machine == 'IPFINALBILL' || doc_form_cd_machine == 'FOERADV') {
                    MOBILE_NO = ctl00_ContentPlaceHolder1_AdmnPatientDetails_LblMobile.innerHTML;
                    PATIENT_NAME = ctl00_ContentPlaceHolder1_AdmnPatientDetails_lblPatName.innerHTML;
                    PATIENT_ID = document.getElementById('' + ctrlcom + '_AdmnPatientDetails_ucUmrNo__hiddenID').value;
                    ADMN_NO = document.getElementById('' + ctrlcom + '_AdmnPatientDetails_hdnAdmnNo').value;
                    UMR_NO = document.getElementById('' + ctrlcom + '_AdmnPatientDetails_hdnUmrNo').value;
                }
                else if (doc_form_cd_machine == 'FOERFBILL' || doc_form_cd_machine == 'IPFINALBILLPAY') {
                    MOBILE_NO = ctl00_ContentPlaceHolder1_IPPatientDtls1_LblMobile.innerHTML;
                    PATIENT_NAME = ctl00_ContentPlaceHolder1_IPPatientDtls1_lblPatName.innerHTML;
                    PATIENT_ID = document.getElementById('' + ctrlcom + '_IPPatientDtls1_ucUmrNo__hiddenID').value;
                    ADMN_NO = document.getElementById('' + ctrlcom + '_IPPatientDtls1_hdnAdmnNo').value;
                    UMR_NO = document.getElementById('' + ctrlcom + '_IPPatientDtls1_hdnUmrNo').value;
                }
                else if (doc_form_cd_machine == 'FO_REFUND' || doc_form_cd_machine == 'FO_OUTSTANDING' || doc_form_cd_machine == 'Rk9PUEFEVg==' || doc_form_cd_machine == 'FOOPADV') {
                    MOBILE_NO = ctl00_ContentPlaceHolder1_umrPatientDetails_lblMobileNo.innerHTML;
                    PATIENT_NAME = ctl00_ContentPlaceHolder1_umrPatientDetails_lblPatName.innerHTML;
                    PATIENT_ID = document.getElementById('' + ctrlcom + '_umrPatientDetails_hdnPatientid').value;
                    ADMN_NO = document.getElementById('' + ctrlcom + '_umrPatientDetails_hdnadmnno').value;
                    UMR_NO = document.getElementById('' + ctrlcom + '_umrPatientDetails_hdnUmrNo').value;
                }
                else if (doc_form_cd_machine == 'FO_PREREFUND') {
                    MOBILE_NO = ctl00_ContentPlaceHolder1_AdmnPatientDetails_LblMobile.innerHTML
                    PATIENT_NAME = ctl00_ContentPlaceHolder1_AdmnPatientDetails_lblPatName.innerHTML;
                    PATIENT_ID = document.getElementById('' + ctrlcom + '_umrPatientDetails_hdnPatientid').value;
                    ADMN_NO = '';
                    UMR_NO = document.getElementById('' + ctrlcom + '_umrPatientDetails_hdnUmrNo').value;
                }


                var pinelabid = 0;
                if (document.getElementById('' + ctrlcom + '_ReceiptControl2_hbnallowpinlabserviceforrefund').value.toUpperCase() == "YES") {
                    if (getParameterByName("DOC_FORM_CD") == "FO_PREREFUND" || getParameterByName("DOC_FORM_CD") == "FO_REFUND") {
                        var bill_id = 0;
                        pinelabid = document.getElementById("<%= hdnrefundplutusreferenceid.ClientID %>").value;
                        if (pinelabid == 0) {
                            if (getParameterByName("DOC_FORM_CD") == "FO_REFUND") {
                                if (ctl00_ContentPlaceHolder1_chkAdvRefund.checked == false) {
                                    var _index = $('#tbl_tbl_OpBillDetails tbody tr').length;
                                    GvRowscount = 0; var reference_type_id = '';

                                    $("table[id$=tbl_tbl_OpBillDetails] tr:has(td)").each(function (e) {
                                        for (GvRowscount; GvRowscount <= _index - 1; GvRowscount++) {
                                            if ($('#tbl_tbl_OpBillDetails tbody').find('tr:eq(' + GvRowscount + ')').find('input[type=checkbox]').is(':checked')) {
                                                ODkey = $('#tbl_tbl_OpBillDetails tbody').find('tr:eq(' + GvRowscount + ')').attr("data-key");
                                                bill_id = ODkey;
                                                GetNonAsync(
                 "Private/FrontOffice/OpBilling/OPBillClientSide.aspx/BindMessionProcesseddata",
                 { billid: bill_id },
                 function (JData) {
                     $('table[id$=gvStatementBills]').find("tr:gt(0)").remove();
                     var data = JData;
                     if (data.d[0] != null && data.d[0] != "" && data.d[0] != undefined) {
                         renderUIStatmentGrid(data.d[0]);
                         $('[id*=divmissionpayment]')[0].style.display = 'block';
                         return false;
                     }
                 },
                 function (jqXHR, textStatus, errorThrown) {
                 });
                                            }
                                        }
                                    });
                                }
                                else {

                                    var umrno = ctl00_ContentPlaceHolder1_umrPatientDetails_Umrlookup_txtSearchControl.value;
                                    GetNonAsync(
                 "Private/FrontOffice/OpBilling/OPBillClientSide.aspx/BindMessionProcesseddataprerefund",
                 { umrno: umrno },
                 function (JData) {
                     $('table[id$=gvStatementBills]').find("tr:gt(0)").remove();
                     var data = JData;
                     if (data.d[0] != null && data.d[0] != "" && data.d[0] != undefined) {
                         renderUIStatmentGrid(data.d[0]);
                         $('[id*=divmissionpayment]')[0].style.display = 'block';
                         return false;
                     }
                 },
                 function (jqXHR, textStatus, errorThrown) {
                 });
                                    return false;
                                }
                            }

                            if (getParameterByName("DOC_FORM_CD") == "FO_PREREFUND") {
                                var umrno = ctl00_ContentPlaceHolder1_AdmnPatientDetails_ucAdmission_txtSearchControl.value;
                                GetNonAsync(
                 "Private/FrontOffice/OpBilling/OPBillClientSide.aspx/BindMessionProcesseddataprerefund",
                 { umrno: umrno },
                 function (JData) {
                     $('table[id$=gvStatementBills]').find("tr:gt(0)").remove();
                     var data = JData;
                     if (data.d[0] != null && data.d[0] != "" && data.d[0] != undefined) {
                         renderUIStatmentGrid(data.d[0]);
                         $('[id*=divmissionpayment]')[0].style.display = 'block';
                         return false;
                     }
                 },
                 function (jqXHR, textStatus, errorThrown) {
                 });

                            }
                            return false;
                        }
                    }
                }
                else {

                    $(".toast").toastText("Info", "Please Contact to Administrater...!", 5, 2);

                }
                var DOC_FORM_CD = 'HISOPBILLFRNT'; //'<%=SessionHandler.DOC_FORM_CD%>';
                if (DOC_FORM_CD == 'HISOPBILLFRNT' || DOC_FORM_CD == 'FO_OPCONSULT' || DOC_FORM_CD == 'OPDREGBILL' || DOC_FORM_CD == 'FOIPADV' || DOC_FORM_CD == 'HSFOADV' || DOC_FORM_CD == 'IPFINALBILLPAY' || DOC_FORM_CD == 'REG - EXPIRY' || DOC_FORM_CD == 'FOERADV' || DOC_FORM_CD == 'FOERFBILL' || DOC_FORM_CD == 'FO_OUTSTANDING' || DOC_FORM_CD == 'HISASSPUSER') {
                    var UrlVal = ReturnIniUrl();
                    var _MissionServiceURL = document.getElementById('<%= hdnpinelabuploadurl.ClientID %>').value;
                    var UIpath = UrlVal + 'Private/FrontOffice/OpBilling/OPBillClientSide.aspx/BindMessionData';
                    var _JSONParams = '';
                    DEVICEID = $('[id*=Ddlpinelab] option:selected').val();
                    var checkdivid = DEVICEID;
                    if (checkdivid == '' || checkdivid == undefined || checkdivid == 'undefined' || checkdivid == '' || checkdivid == '0' || checkdivid == 0) {
                        checkdivid = 0;
                    }
                    TERMINAL_NAME = $('[id*=Ddlpinelab] option:selected').text().trim();
                    if (checkdivid != 0) {
                        paymentmodeid = document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlcrdtype').value;
                        if (mode == "Q") {
                            paymentmodeid = paymentmodeid;
                            if (paymentmodeid == 0) {
                                paymentmodeid = document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlPaymentType').value;
                            }
                        } else {
                            paymentmodeid = document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlPaymentType').value;
                        }
                        var paymentdeviceid = getCookie("CONFIG_ID");
                        GetNonAsync(
                 "Private/FrontOffice/OpBilling/OPBillClientSide.aspx/BindMessionDataPAYMENTMODE",
                 { paymentmodeid: paymentmodeid, paymentdeviceid: paymentdeviceid },
                 function (JData) {
                     var data = JData;
                     if (data.d[0] != null && data.d[0] != "" && data.d[0] != undefined) {
                         DEVICE_PAYMENT_VALUE = data.d[0][0].DEVICE_ALLOWE_PAYMENT_MODE_VALUE;
                     }

                 },
                 function (jqXHR, textStatus, errorThrown) {
                 });

                        if (mode == "Q") {

                            IP_AMOUNT = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtCardAmt').value;
                            if (IP_AMOUNT == undefined || IP_AMOUNT == "" || IP_AMOUNT == '' || IP_AMOUNT == 'undefined' || IP_AMOUNT == null || IP_AMOUNT == 'null' || IP_AMOUNT == '0' || IP_AMOUNT == 0) {
                                IP_AMOUNT = 0;
                            }
                            if (parseFloat(IP_AMOUNT) < 1) {
                                $(".toast").toastText("Info", "Below one rupee transactions we are not allowing!", 5, 2);
                                return false;
                            }
                            IP_AMOUNT = parseFloat(IP_AMOUNT) * 100;
                            if (IP_AMOUNT == 0) {
                                IP_AMOUNT = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtamt').value;
                                IP_AMOUNT = parseFloat(IP_AMOUNT) * 100;
                            }
                        }
                        if (mode == "A") {
                            IP_AMOUNT = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtamt').value;
                            if (parseFloat(IP_AMOUNT) < 1) {
                                $(".toast").toastText("Info", "Below one rupee transactions we are not allowing!", 5, 2);
                                return false;
                            }
                            IP_AMOUNT = parseFloat(IP_AMOUNT) * 100;
                        }

                        if (parseFloat(IP_AMOUNT) > 0) {

                        } else {
                            $(".toast").toastText("Info", "Please enter the amount for selected payment mode..!", 5, 2);
                            return false;
                        }

                        if (DEVICE_PAYMENT_VALUE > 0) {

                        }
                        else {
                            $(".toast").toastText("Info", "Please map  the integrated value for selected payment mode..!", 5, 2);
                            return false;
                        }
                        if (parseFloat(IP_AMOUNT) > 0) {
                            IP_REQUEST_STRING = '', IP_COMUNICATION_ID = 0, FLAG = 'P';
                            IP_REQUEST_STRING = _JSONParams;
                            IP_COMUNICATION_ID = 0;
                            GetNonAsync(
                 "Private/FrontOffice/OpBilling/OPBillClientSide.aspx/SaveMahindata",
                 { IP_REQUEST_STRING: IP_REQUEST_STRING, IP_COMUNICATION_ID: IP_COMUNICATION_ID, IP_AMOUNT: IP_AMOUNT, FLAG: FLAG, REQ_TYPE: 'I', DEVICEID: DEVICEID, TERMINAL_NAME: TERMINAL_NAME, PLUTUS_REFERENCE_ID: '', paymentmodeid: paymentmodeid, UMR_NO: UMR_NO, ADMN_NO: ADMN_NO, MOBILE_NO: MOBILE_NO, PATIENT_ID: PATIENT_ID, PATIENT_NAME: PATIENT_NAME, DOC_ID: DOC_ID, COMMUNICATION_REFERENCE_CODE: COMMUNICATION_REFERENCE_CODE, CARD_TYPE: CARD_TYPE, ACQUIRER_NAME: ACQUIRER_NAME, CARD_NO: CARD_NO, CARD_AMOUNT: CARD_AMOUNT, CARD_AUTH_NO: CARD_AUTH_NO, CARD_RRN_NO: CARD_RRN_NO, CARD_TRANSACTION_LOGID: CARD_TRANSACTION_LOGID, CARD_TID: CARD_TID },
                 function (JData) {
                     var inserteddata = JData.d.split('@');
                     if (inserteddata[0] == 'true') {
                         //OriginalPlutusTransactionReferenceID
                         var _JSONParams = '';
                         var Hissendno = PATIENT_NAME + '-' + UMR_NO;
                         if (getParameterByName("DOC_FORM_CD") == "FO_PREREFUND" || getParameterByName("DOC_FORM_CD") == "FO_REFUND") {
                             var TxnType = 1;
                             var comunicationo = document.getElementById("<%= hdncommunicationno.ClientID %>").value;
                             IP_AMOUNT = document.getElementById("<%= txtamt.ClientID %>").value;
                             IP_AMOUNT = parseFloat(IP_AMOUNT) * 100;
                             hdnprocesscheck = 'Y';
                             var OriginalPlutusTransactionReferenceID = document.getElementById("<%= hdnrefundplutusreferenceid.ClientID %>").value;

                             if (OriginalPlutusTransactionReferenceID == undefined || OriginalPlutusTransactionReferenceID == "" || OriginalPlutusTransactionReferenceID == null || OriginalPlutusTransactionReferenceID == 'null' || OriginalPlutusTransactionReferenceID == 'undefined') {
                                 OriginalPlutusTransactionReferenceID = 0;
                             }
                             if (OriginalPlutusTransactionReferenceID == 0) {
                                 $(".toast").toastText("Info", "refund form u should not make the payment ..!", 5, 2);
                                 return false;
                             }
                             _JSONParams = JSON.stringify({ MIssionparameters: '{"TransactionNumber":"' + comunicationo + '","SequenceNumber":1,"AllowedPaymentMode":"' + 1 + '","Amount":"' + IP_AMOUNT + '","MerchantID":"' + MERCHANTID + '","SecurityToken":"' + SECURITY_TOKEN + '","IMEI":"' + IMEI + '","MerchantStorePosCode":"' + MERCHANT_STORE_POS_CODE + '","InvoiceNumber":"' + Hissendno + '","autocanceldurationinminutes":"' + AUTO_CANCEL_DURATION_MINUTES + '","TxnType":"' + TxnType + '","OriginalPlutusTransactionReferenceID":"' + OriginalPlutusTransactionReferenceID + '"}', MIssionPAth: _MissionServiceURL });
                         }
                         else {
                             _JSONParams = JSON.stringify({ MIssionparameters: '{"TransactionNumber":"' + inserteddata[2] + '","SequenceNumber":1,"AllowedPaymentMode":"' + DEVICE_PAYMENT_VALUE + '","Amount":"' + IP_AMOUNT + '","MerchantID":"' + MERCHANTID + '","SecurityToken":"' + SECURITY_TOKEN + '","IMEI":"' + IMEI + '","MerchantStorePosCode":"' + MERCHANT_STORE_POS_CODE + '","InvoiceNumber":"' + Hissendno + '","autocanceldurationinminutes":"' + AUTO_CANCEL_DURATION_MINUTES + '"}', MIssionPAth: _MissionServiceURL });
                         }
                         IP_REQUEST_STRING = _JSONParams;
                         IP_COMUNICATION_ID = inserteddata[1];
                         IP_AMOUNT = IP_AMOUNT;
                         GetNonAsync(
                 "Private/FrontOffice/OpBilling/OPBillClientSide.aspx/SaveMahindata",
                 { IP_REQUEST_STRING: IP_REQUEST_STRING, IP_COMUNICATION_ID: IP_COMUNICATION_ID, IP_AMOUNT: IP_AMOUNT, FLAG: 'P', REQ_TYPE: 'IU', DEVICEID: DEVICEID, TERMINAL_NAME: TERMINAL_NAME, PLUTUS_REFERENCE_ID: '', paymentmodeid: paymentmodeid, UMR_NO: UMR_NO, ADMN_NO: ADMN_NO, MOBILE_NO: MOBILE_NO, PATIENT_ID: PATIENT_ID, PATIENT_NAME: PATIENT_NAME, DOC_ID: DOC_ID, COMMUNICATION_REFERENCE_CODE: COMMUNICATION_REFERENCE_CODE, CARD_TYPE: CARD_TYPE, ACQUIRER_NAME: ACQUIRER_NAME, CARD_NO: CARD_NO, CARD_AMOUNT: CARD_AMOUNT, CARD_AUTH_NO: CARD_AUTH_NO, CARD_RRN_NO: CARD_RRN_NO, CARD_TRANSACTION_LOGID: CARD_TRANSACTION_LOGID, CARD_TID: CARD_TID },
                 function (JData) {
                     $.ajax({
                         type: "POST",
                         url: UIpath,
                         contentType: "application/json; charset=utf-8",
                         dataType: "json",
                         data: _JSONParams,
                         async: false,
                         error: function (jqXHR, textStatus, errorThrown) {
                             $(".stoast").toastText("Info", "'" + errorThrown + "'", 7, 2);
                             return false;
                         },
                         success: function (jdata1) {
                             hdnprocesscheck = 'Y';
                             dataarray = [];
                             $('[id*=btnpineclick]')[0].style.display = 'none';
                             IP_REQUEST_STRING = jdata1.d;
                             dataarray.push(JSON.parse(jdata1.d));
                             document.getElementById('<%= hdnPlutusTransactionReferenceID.ClientID %>').value = dataarray[0].PlutusTransactionReferenceID;
                             GetNonAsync(
                                "Private/FrontOffice/OpBilling/OPBillClientSide.aspx/SaveMahindata",
                                    { IP_REQUEST_STRING: IP_REQUEST_STRING, IP_COMUNICATION_ID: IP_COMUNICATION_ID, IP_AMOUNT: IP_AMOUNT, FLAG: 'P', REQ_TYPE: 'IUR', DEVICEID: DEVICEID, TERMINAL_NAME: TERMINAL_NAME, PLUTUS_REFERENCE_ID: dataarray[0].PlutusTransactionReferenceID, paymentmodeid: paymentmodeid, UMR_NO: UMR_NO, ADMN_NO: ADMN_NO, MOBILE_NO: MOBILE_NO, PATIENT_ID: PATIENT_ID, PATIENT_NAME: PATIENT_NAME, DOC_ID: DOC_ID, COMMUNICATION_REFERENCE_CODE: dataarray[0].ResponseCode, CARD_TYPE: CARD_TYPE, ACQUIRER_NAME: ACQUIRER_NAME, CARD_NO: CARD_NO, CARD_AMOUNT: CARD_AMOUNT, CARD_AUTH_NO: CARD_AUTH_NO, CARD_RRN_NO: CARD_RRN_NO, CARD_TRANSACTION_LOGID: CARD_TRANSACTION_LOGID, CARD_TID: CARD_TID },
                            function (JData) {
                            },
                            function (jqXHR, textStatus, errorThrown) {
                                return false;
                            });
                             if (jdata1.d != undefined) {
                                 if (dataarray[0].ResponseCode == 1) {
                                     $(".stoast").toastText("warning", "" + dataarray[0].ResponseMessage + "", 2, 3);
                                     $('[id*=btnpineclick]')[0].style.display = 'block';
                                     $('[id*=btnpineapproveclick]')[0].style.display = 'none';
                                     $('[id*=btnCancelpineclick]')[0].style.display = 'none';
                                 } else {

                                     document.getElementById('<%= hdnPlutusTransactionReferenceID.ClientID %>').value
                                     $('[id*=Lblterminalip]')[0].innerHTML = 'Terminal Name (Ref#' + document.getElementById('<%= hdnPlutusTransactionReferenceID.ClientID %>').value + ')';
                                     $(".toast").toastText("Info", "Transaction uploded successfully with the reference no" + document.getElementById('<%= hdnPlutusTransactionReferenceID.ClientID %>').value + "   and make the payment in the machine", 5, 2);
                                     $('[id*=btnpineclick]')[0].style.display = 'none';
                                     $('[id*=btnpineapproveclick]')[0].style.display = 'block';
                                     $('[id*=btnCancelpineclick]')[0].style.display = 'block';
                                 }
                             }

                         }
                     });
                 },
                 function (jqXHR, textStatus, errorThrown) {
                 });
                     }
                 },
                 function (jqXHR, textStatus, errorThrown) {
                 });
                        }



                        else {
                            $('[id*=btnpineclick]')[0].style.display = 'block';
                            $(".toast").toastText("Info", "Please enter the amount ..!", 5, 2);
                            return false;
                        }
                    } else {
                        $(".toast").toastText("Info", "Please select terminal ..!", 5, 2);
                        return false;
                    }
                } else {
                    $(".toast").toastText("Info", "Mission Integration not done for this doccument ..!", 5, 2);
                    return false;
                }
                return false;
            } else {
                $(".toast").toastText("Info", "Please complete the open transaction#'" + document.getElementById('<%= hdnPlutusTransactionReferenceID.ClientID %>').value + "'", 5, 2);
            }
        }
        if (EnableEmpasa == 'YES') {
            paymentmodeid = document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlcrdtype').value;
            if (mode == "Q") {
                paymentmodeid = paymentmodeid;
                if (paymentmodeid == 0) {
                    paymentmodeid = document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlPaymentType').value;
                }
            } else {
                paymentmodeid = document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlPaymentType').value;
            }
            var _selectedText = $('#ctl00_ContentPlaceHolder1_ReceiptControl2_ddlPaymentType').find('option:selected').text();
            if (_selectedText == 'M-PESA') {

                var DOC_ID = document.getElementById('ctl00_hdndocsessionid').value;
                if (DOC_ID == '' || DOC_ID == undefined || DOC_ID == 'undefined' || DOC_ID == '0' || DOC_ID == 0) {
                    DOC_ID = 0;
                }
                var doc_form_cd_machine = getParameterByName("DOC_FORM_CD");
                if (doc_form_cd_machine == 'REG-EXPIRY') {
                    MOBILE_NO = ctl00_ContentPlaceHolder1_txtMobile1.value;
                    PATIENT_NAME = document.getElementById('' + ctrlcom + '_txtDisplayname').value;
                    PATIENT_ID = 0;
                    ADMN_NO = '';
                    UMR_NO = '';
                }
                else if (doc_form_cd_machine == 'HISOPBILLFRNT') {
                    MOBILE_NO = ctl00_ContentPlaceHolder1_umrPatientDetails_lblMobileNo.innerHTML;
                    PATIENT_NAME = ctl00_ContentPlaceHolder1_umrPatientDetails_lblPatName.innerHTML;
                    PATIENT_ID = document.getElementById('' + ctrlcom + '_umrPatientDetails_hdnPatientid').value;
                    ADMN_NO = '';
                    UMR_NO = document.getElementById('' + ctrlcom + '_umrPatientDetails_hdnUmrNo').value;
                }
                else if (doc_form_cd_machine == 'HISOPBILLFRNT' || doc_form_cd_machine == 'FO_OPCONSULT') {
                    MOBILE_NO = ctl00_ContentPlaceHolder1_umrPatientDetails_lblMobileNo.innerHTML;
                    PATIENT_NAME = ctl00_ContentPlaceHolder1_umrPatientDetails_lblPatName.innerHTML;
                    PATIENT_ID = document.getElementById('' + ctrlcom + '_umrPatientDetails_hdnPatientid').value;
                    ADMN_NO = '';
                    UMR_NO = document.getElementById('' + ctrlcom + '_umrPatientDetails_hdnUmrNo').value;
                }
                else if (doc_form_cd_machine == 'HISOPBILLFRNT' || doc_form_cd_machine == 'FO_OPCONSULT') {
                    MOBILE_NO = ctl00_ContentPlaceHolder1_umrPatientDetails_lblMobileNo.innerHTML;
                    PATIENT_NAME = ctl00_ContentPlaceHolder1_umrPatientDetails_lblPatName.innerHTML;
                    PATIENT_ID = document.getElementById('' + ctrlcom + '_umrPatientDetails_hdnPatientid').value;
                    ADMN_NO = '';
                    UMR_NO = document.getElementById('' + ctrlcom + '_umrPatientDetails_hdnUmrNo').value;
                }
                else if (doc_form_cd_machine == 'OPDREGBILL') {
                    if (ctl00_ContentPlaceHolder1_chk_old.checked == false) {
                        MOBILE_NO = ctl00_ContentPlaceHolder1_Address1_txtMobile1.value;
                        PATIENT_NAME = document.getElementById('' + ctrlcom + '_txtDisplayname').innerHTML;
                        PATIENT_ID = 0;
                        ADMN_NO = '';
                        UMR_NO = '';
                    } else {
                        MOBILE_NO = ctl00_ContentPlaceHolder1_umrPatientDetails_lblMobileNo.innerHTML;
                        PATIENT_NAME = ctl00_ContentPlaceHolder1_umrPatientDetails_lblPatName.innerHTML;
                        PATIENT_ID = document.getElementById('' + ctrlcom + '_umrPatientDetails_hdnPatientid').value;
                        ADMN_NO = '';
                        UMR_NO = document.getElementById('' + ctrlcom + '_umrPatientDetails_hdnUmrNo').value;
                    }
                }
                else if (doc_form_cd_machine == 'FOIPADV' || doc_form_cd_machine == 'IPFINALBILL' || doc_form_cd_machine == 'FOERADV') {
                    MOBILE_NO = ctl00_ContentPlaceHolder1_AdmnPatientDetails_LblMobile.innerHTML;
                    PATIENT_NAME = ctl00_ContentPlaceHolder1_AdmnPatientDetails_lblPatName.innerHTML;
                    PATIENT_ID = document.getElementById('' + ctrlcom + '_AdmnPatientDetails_ucUmrNo__hiddenID').value;
                    ADMN_NO = document.getElementById('' + ctrlcom + '_AdmnPatientDetails_hdnAdmnNo').value;
                    UMR_NO = document.getElementById('' + ctrlcom + '_AdmnPatientDetails_hdnUmrNo').value;
                }
                else if (doc_form_cd_machine == 'FOERFBILL' || doc_form_cd_machine == 'IPFINALBILLPAY') {
                    MOBILE_NO = ctl00_ContentPlaceHolder1_IPPatientDtls1_LblMobile.innerHTML;
                    PATIENT_NAME = ctl00_ContentPlaceHolder1_IPPatientDtls1_lblPatName.innerHTML;
                    PATIENT_ID = document.getElementById('' + ctrlcom + '_IPPatientDtls1_ucUmrNo__hiddenID').value;
                    ADMN_NO = document.getElementById('' + ctrlcom + '_IPPatientDtls1_hdnAdmnNo').value;
                    UMR_NO = document.getElementById('' + ctrlcom + '_IPPatientDtls1_hdnUmrNo').value;
                }
                else if (doc_form_cd_machine == 'FO_REFUND' || doc_form_cd_machine == 'FO_OUTSTANDING' || doc_form_cd_machine == 'Rk9PUEFEVg==' || doc_form_cd_machine == 'FOOPADV') {
                    MOBILE_NO = ctl00_ContentPlaceHolder1_umrPatientDetails_lblMobileNo.innerHTML;
                    PATIENT_NAME = ctl00_ContentPlaceHolder1_umrPatientDetails_lblPatName.innerHTML;
                    PATIENT_ID = document.getElementById('' + ctrlcom + '_umrPatientDetails_hdnPatientid').value;
                    ADMN_NO = document.getElementById('' + ctrlcom + '_umrPatientDetails_hdnadmnno').value;
                    UMR_NO = document.getElementById('' + ctrlcom + '_umrPatientDetails_hdnUmrNo').value;
                }
                else if (doc_form_cd_machine == 'FO_PREREFUND') {
                    MOBILE_NO = ctl00_ContentPlaceHolder1_AdmnPatientDetails_LblMobile.innerHTML
                    PATIENT_NAME = ctl00_ContentPlaceHolder1_AdmnPatientDetails_lblPatName.innerHTML;
                    PATIENT_ID = document.getElementById('' + ctrlcom + '_umrPatientDetails_hdnPatientid').value;
                    ADMN_NO = '';
                    UMR_NO = document.getElementById('' + ctrlcom + '_umrPatientDetails_hdnUmrNo').value;
                }
                var DOC_FORM_CD = 'HISOPBILLFRNT'; //'<%=SessionHandler.DOC_FORM_CD%>';
                if (DOC_FORM_CD == 'HISOPBILLFRNT' || DOC_FORM_CD == 'FO_OPCONSULT' || DOC_FORM_CD == 'OPDREGBILL' || DOC_FORM_CD == 'FOIPADV' || DOC_FORM_CD == 'HSFOADV' || DOC_FORM_CD == 'IPFINALBILLPAY' || DOC_FORM_CD == 'REG - EXPIRY' || DOC_FORM_CD == 'FOERADV' || DOC_FORM_CD == 'FOERFBILL' || DOC_FORM_CD == 'FO_OUTSTANDING' || DOC_FORM_CD == 'HISASSPUSER') {
                    var UrlVal = ReturnIniUrl();
                    var _MissionServiceURL = document.getElementById('<%= hdnempesaauthorzationurl.ClientID %>').value;
                    var UIpath = UrlVal + 'Private/FrontOffice/OpBilling/OPBillClientSide.aspx/GenrateAccessToken';
                    var _JSONParams = '';
                    DEVICEID = $('[id*=Ddlpinelab] option:selected').val();
                    var checkdivid = DEVICEID;
                    if (checkdivid == '' || checkdivid == undefined || checkdivid == 'undefined' || checkdivid == '' || checkdivid == '0' || checkdivid == 0) {
                        checkdivid = 0;
                    }
                    TERMINAL_NAME = $('[id*=Ddlpinelab] option:selected').text().trim();
                    if (checkdivid != 0) {
                        paymentmodeid = document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlcrdtype').value;
                        if (mode == "Q") {
                            paymentmodeid = paymentmodeid;
                            if (paymentmodeid == 0) {
                                paymentmodeid = document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlPaymentType').value;
                            }
                        } else {
                            paymentmodeid = document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlPaymentType').value;
                        }
                        var paymentdeviceid = getCookie("CONFIG_ID");

                        if (mode == "Q") {
                            IP_AMOUNT = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtCardAmt').value;
                            if (IP_AMOUNT == undefined || IP_AMOUNT == "" || IP_AMOUNT == '' || IP_AMOUNT == 'undefined' || IP_AMOUNT == null || IP_AMOUNT == 'null' || IP_AMOUNT == '0' || IP_AMOUNT == 0) {
                                IP_AMOUNT = 0;
                            }
                            if (parseFloat(IP_AMOUNT) < 1) {
                                $(".toast").toastText("Info", "Below one rupee transactions we are not allowing!", 5, 2);
                                return false;
                            }
                            IP_AMOUNT = parseFloat(IP_AMOUNT);
                            if (IP_AMOUNT == 0) {
                                IP_AMOUNT = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtamt').value;
                                IP_AMOUNT = parseFloat(IP_AMOUNT);
                            }
                        }
                        if (mode == "A") {
                            IP_AMOUNT = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtamt').value;
                            if (parseFloat(IP_AMOUNT) < 1) {
                                $(".toast").toastText("Info", "Below one rupee transactions we are not allowing!", 5, 2);
                                return false;
                            }
                            IP_AMOUNT = parseFloat(IP_AMOUNT);
                        }

                        if (parseFloat(IP_AMOUNT) > 0) {

                        } else {
                            $(".toast").toastText("Info", "Please enter the amount for selected payment mode..!", 5, 2);
                            return false;
                        }
                        if (parseFloat(IP_AMOUNT) > 0) {

                            var _MissionServiceURL = document.getElementById('<%= hdnempesaauthorzationurl.ClientID %>').value;

                            var tokenno = '';
                            authorization = IMEI;
                            _JSONParams = JSON.stringify({ url1: _MissionServiceURL, Authorization: authorization });

                            try {
                                $.post("/EmpasaV2WebService/HisService.asmx/GetToken", { url: _MissionServiceURL, username: authorization, password: MERCHANTID }, function (data) {
                                    tokenno = data.access_token;
                                    url = document.getElementById('<%= hdnempesasimulationurl.ClientID %>').value;
                                    Amount = IP_AMOUNT;
                                    PartyA = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtCardNo').value;
                                    PartyA = PartyA.replaceAll(' ', '');
                                    PartyB = SECURITY_TOKEN;
                                    CallBackURL = 'https://mydomain.com/path';
                                    AccountReference = TRANSACTIONNO;
                                    TransactionDesc = TRANSACTIONNO;
                                    var authorization = document.getElementById('<%= hdnempesaAuthKeyvalue.ClientID %>').value;
                                    var PassKey = MERCHANT_STORE_POS_CODE; //document.getElementById('<%= hdnempasapasskey.ClientID %>').value;
                                    var _JSONParams = JSON.stringify({ MIssionparameters: '{"PassKey":"' + PassKey + '","url":"' + url + '","Amount":"' + Amount + '","PartyA":"' + PartyA + '","PartyB":"' + PartyB + '","CallBackURL":"' + CallBackURL + '","AccountReference":"' + AccountReference + '","TransactionDesc":"' + TransactionDesc + '","Access_Token":"' + tokenno + '"}', MIssionPAth: _MissionServiceURL });
                                    IP_REQUEST_STRING = _JSONParams;
                                    $.post("/EmpasaV2WebService/HisService.asmx/requetoken", { url: url, token: tokenno, PassKey: PassKey, BusinessShortCode: PartyB, TransactionType: 'CustomerPayBillOnline', Amount: Amount, PartyA: PartyA, PartyB: PartyB, PhoneNumber: PartyA, CallBackURL: CallBackURL, AccountReference: "CompanyXLTD", TransactionDesc: "Payment of X" }, function (data) {

                                        var url = '', PassKey = '', BusinessShortCode = '', CheckoutRequestID = '', Access_Token = '';
                                        var inserteddata = data;
                                        dataarray = [];
                                        dataarray.push(inserteddata);
                                        CheckoutRequestID = dataarray[0].CheckoutRequestID;
                                        CARD_TID = dataarray[0].MerchantRequestID.split('-')[1];
                                        MOBILE_NO = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtCardNo').value;
                                        GetNonAsync(
                 "Private/FrontOffice/OpBilling/OPBillClientSide.aspx/SaveMahindata",
                 { IP_REQUEST_STRING: IP_REQUEST_STRING, IP_COMUNICATION_ID: IP_COMUNICATION_ID, IP_AMOUNT: IP_AMOUNT, FLAG: 'A', REQ_TYPE: 'I',
                     DEVICEID: DEVICEID, TERMINAL_NAME: TERMINAL_NAME, PLUTUS_REFERENCE_ID: CheckoutRequestID, paymentmodeid: paymentmodeid,
                     UMR_NO: UMR_NO, ADMN_NO: ADMN_NO, MOBILE_NO: MOBILE_NO, PATIENT_ID: PATIENT_ID, PATIENT_NAME: PATIENT_NAME, DOC_ID: DOC_ID,
                     COMMUNICATION_REFERENCE_CODE: COMMUNICATION_REFERENCE_CODE, CARD_TYPE: CARD_TYPE, ACQUIRER_NAME: ACQUIRER_NAME, CARD_NO: CARD_NO,
                     CARD_AMOUNT: CARD_AMOUNT, CARD_AUTH_NO: CARD_AUTH_NO, CARD_RRN_NO: CARD_RRN_NO, CARD_TRANSACTION_LOGID: CARD_TRANSACTION_LOGID, CARD_TID: CARD_TID
                 },
                 function (JData) {
                     var inserteddata1 = JData.d.split('@');
                     TRANSACTIONNO = inserteddata1[2];
                     if (inserteddata1[0] == 'true') {
                         IP_COMUNICATION_ID = inserteddata1[1];
                     }
                 },
                 function (jqXHR, textStatus, errorThrown) {
                 });
                                        document.getElementById("<%= hdnrefundplutusreferenceid.ClientID %>").value = dataarray[0].CheckoutRequestID;
                                        url = document.getElementById('<%= hdnempesaqueryurl.ClientID %>').value;
                                        PassKey = MERCHANT_STORE_POS_CODE; //document.getElementById('<%= hdnempasapasskey.ClientID %>').value;
                                        BusinessShortCode = SECURITY_TOKEN;
                                        Access_Token = tokenno;
                                        CheckoutRequestID = document.getElementById("ctl00_ContentPlaceHolder1_ReceiptControl2_hdnrefundplutusreferenceid").value;
                                        $('[id*=btnpineclick]')[0].style.display = 'none';
                                        $('[id*=btnpineapproveclick]')[0].style.display = 'block';
                                        datareponseempasa = [];
                                        datareponseempasa.push({ url: url, PassKey: PassKey, BusinessShortCode: BusinessShortCode, CheckoutRequestID: CheckoutRequestID, Access_Token: Access_Token, IP_COMUNICATION_ID: IP_COMUNICATION_ID })

                                        //Callmobileintiate(url, PassKey, BusinessShortCode, CheckoutRequestID, Access_Token, IP_COMUNICATION_ID);
                                    });
                                });

                                console.log('naresh');
                            } catch (e)
{ console.log(e) };

                        }
                        else {
                            $('[id*=btnpineclick]')[0].style.display = 'block';
                            $(".toast").toastText("Info", "Please enter the amount ..!", 5, 2);
                            return false;
                        }
                    } else {
                        $(".toast").toastText("Info", "Please select terminal ..!", 5, 2);
                        return false;
                    }
                }
            } else {
                $(".toast").toastText("Info", "Please select empasa payment mode", 5, 2);
                return false;
            }
        }
    }
    var datareponseempasa = new Array();
    var dataarrayEmpasaMob = new Array();
    function Callmobileintiate(url, PassKey, BusinessShortCode, CheckoutRequestID, Access_Token, IP_COMUNICATION_ID) {
        var DOC_ID = document.getElementById('ctl00_hdndocsessionid').value;
        ACQUIRER_NAME = 'E-MPASA'
        IP_COMUNICATION_ID = IP_COMUNICATION_ID;
        COMMUNICATION_REFERENCE_CODE = '';
        PLUTUS_REFERENCE_ID = CheckoutRequestID;
        dataarrayEmpasaMob = [];
        try {
            $.post("/EmpasaV2WebService/HisService.asmx/EmpasaPaymentChequeoutreq", { url: url, PassKey: PassKey, BusinessShortCode: BusinessShortCode, CheckoutRequestID: CheckoutRequestID, Access_Token: Access_Token }, function (data) {
                IP_REQUEST_STRING = JSON.stringify(data);
                dataarrayEmpasaMob.push(data);
                CARD_NO = dataarrayEmpasaMob[0].MerchantRequestID;
                GetNonAsync(
                 "Private/FrontOffice/OpBilling/OPBillClientSide.aspx/SaveMahindata",
                 { IP_REQUEST_STRING: IP_REQUEST_STRING, IP_COMUNICATION_ID: IP_COMUNICATION_ID, IP_AMOUNT: IP_AMOUNT, FLAG: 'A', REQ_TYPE: 'UR',
                     DEVICEID: DEVICEID, TERMINAL_NAME: TERMINAL_NAME, PLUTUS_REFERENCE_ID: '', paymentmodeid: paymentmodeid,
                     UMR_NO: UMR_NO, ADMN_NO: ADMN_NO, MOBILE_NO: MOBILE_NO, PATIENT_ID: PATIENT_ID, PATIENT_NAME: PATIENT_NAME, DOC_ID: DOC_ID,
                     COMMUNICATION_REFERENCE_CODE: COMMUNICATION_REFERENCE_CODE, CARD_TYPE: CARD_TYPE, ACQUIRER_NAME: ACQUIRER_NAME, CARD_NO: CARD_NO,
                     CARD_AMOUNT: CARD_AMOUNT, CARD_AUTH_NO: CARD_AUTH_NO, CARD_RRN_NO: CARD_RRN_NO, CARD_TRANSACTION_LOGID: CARD_TRANSACTION_LOGID, CARD_TID: CARD_TID
                 },
                 function (JData) {
                 },
                 function (jqXHR, textStatus, errorThrown) {
                 });

                if (dataarrayEmpasaMob[0].ResultCode == '1032' && dataarrayEmpasaMob[0].ResultDesc == 'Request cancelled by user') {
                    $(".toast").toastText("Info", "Request cancelled by user", 5, 2);
                    return false;

                }
                else if (dataarrayEmpasaMob[0].ResultCode == '1032' && dataarrayEmpasaMob[0].ResultDesc == 'The service request is processed successfully.') {
                    Callmobileintiate(url, PassKey, BusinessShortCode, CheckoutRequestID, Access_Token, IP_COMUNICATION_ID);
                    return false;
                }

                else if (dataarrayEmpasaMob[0].ResultCode == '1037' || dataarrayEmpasaMob[0].ResultCode == '2006') {
                    $(".toast").toastText("Info", "" + dataarrayEmpasaMob[0].ResultDesc + "", 5, 2);
                    return false;
                }
                else if (dataarrayEmpasaMob[0].ResultCode == '2001') {
                    $(".toast").toastText("Info", "" + dataarrayEmpasaMob[0].ResultDesc + "", 5, 2);
                    return false;
                }
                else if (dataarrayEmpasaMob[0].ResultCode == '0' && (dataarrayEmpasaMob[0].ResultDesc == 'The service request is processed successfully.')) {
                    var amount = 0;
                    var cardnumber = '';
                    var authno = '';
                    var cardtype = ''
                    var bankname = ''
                    var Trantype = '';
                    var Tid = 0;
                    dataarray1 = [];
                    $('[id*=btnpineclick]')[0].style.display = 'block';
                    $('[id*=btnpineapproveclick]')[0].style.display = 'none';
                    $('[id*=btnCancelpineclick]')[0].style.display = 'none';
                    document.getElementById('<%= hdnPlutusTransactionReferenceID.ClientID %>').value = dataarrayEmpasaMob[0].CheckoutRequestID;
                    amount = IP_AMOUNT;
                    Tid = dataarrayEmpasaMob[0].CheckoutRequestID;
                    cardnumber = dataarrayEmpasaMob[0].MerchantRequestID;

                    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtAuthCode').value = cardnumber;
                    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtTenderedAmt').value = amount;
                    srvchrgamount(ctl00_ContentPlaceHolder1_ReceiptControl2_txtamt, amount);
                    NewAddTransactionDetails();
                }
                else {
                    Callmobileintiate(url, PassKey, BusinessShortCode, CheckoutRequestID, Access_Token, IP_COMUNICATION_ID);
                }


            })
        } catch (ex) {
            console.log(ex);
        }


    }
    /*2. Get status api..*/
    var dataarray1 = new Array();
    var dataarrayresponse = new Array();
    function PinelabapprovedataApprove() {
        var hdnecitigen = document.getElementById('ctl00_hdnecitigen').value;
        var Paytm = document.getElementById('<%= hdnpaytmint.ClientID %>').value;

        if (hdnecitigen.toUpperCase() == "Y") {
            CheckEctitgendata();
            return false;
        }
        if (Paytm.toUpperCase() == "YES") {
            PaytmApprove();
            return false;
        }


        var DOC_ID = document.getElementById('ctl00_hdndocsessionid').value;
        if (DOC_ID == '' || DOC_ID == undefined || DOC_ID == 'undefined' || DOC_ID == '0' || DOC_ID == 0) {
            DOC_ID = 0;
        }
        var PlutusTransactionReferenceID = document.getElementById('<%= hdnPlutusTransactionReferenceID.ClientID %>').value;
        if (PlutusTransactionReferenceID == '' || PlutusTransactionReferenceID == undefined | PlutusTransactionReferenceID == 'undefined') {
            PlutusTransactionReferenceID = 0;
        }
        var EnableEmpasa = document.getElementById('<%= hdnempasaintgreq.ClientID %>').value;
        if (EnableEmpasa == 'YES') {
            Callmobileintiate(datareponseempasa[0].url, datareponseempasa[0].PassKey, datareponseempasa[0].BusinessShortCode, datareponseempasa[0].CheckoutRequestID, datareponseempasa[0].Access_Token, datareponseempasa[0].IP_COMUNICATION_ID);
            //datareponseempasa=[];
            $('[id*=btnpineclick]')[0].style.display = 'block';
            $('[id*=btnpineapproveclick]')[0].style.display = 'none';
            return false;
        }
        if (PlutusTransactionReferenceID != 0) {
            var UrlVal = ReturnIniUrl();
            var _MissionServiceURL = document.getElementById('<%= hdnpinelabapproveurl.ClientID %>').value
            var UIpath = UrlVal + 'Private/FrontOffice/OpBilling/OPBillClientSide.aspx/BindMessionData';
            var _JSONParams = JSON.stringify({ MIssionparameters: '{"MerchantID":"' + MERCHANTID + '","SecurityToken":"' + SECURITY_TOKEN + '","IMEI":"' + IMEI + '","MerchantStorePosCode":"' + MERCHANT_STORE_POS_CODE + '","PlutusTransactionReferenceID":' + PlutusTransactionReferenceID + '}', MIssionPAth: _MissionServiceURL });
            IP_REQUEST_STRING = _JSONParams;
            GetNonAsync(
                 "Private/FrontOffice/OpBilling/OPBillClientSide.aspx/SaveMahindata",
                 { IP_REQUEST_STRING: IP_REQUEST_STRING, IP_COMUNICATION_ID: 0, IP_AMOUNT: IP_AMOUNT, FLAG: 'A', REQ_TYPE: 'I', DEVICEID: DEVICEID, TERMINAL_NAME: TERMINAL_NAME, PLUTUS_REFERENCE_ID: PlutusTransactionReferenceID, paymentmodeid: paymentmodeid, UMR_NO: UMR_NO, ADMN_NO: ADMN_NO, MOBILE_NO: MOBILE_NO, PATIENT_ID: PATIENT_ID, PATIENT_NAME: PATIENT_NAME, DOC_ID: DOC_ID, COMMUNICATION_REFERENCE_CODE: COMMUNICATION_REFERENCE_CODE, CARD_TYPE: CARD_TYPE, ACQUIRER_NAME: ACQUIRER_NAME, CARD_NO: CARD_NO, CARD_AMOUNT: CARD_AMOUNT, CARD_AUTH_NO: CARD_AUTH_NO, CARD_RRN_NO: CARD_RRN_NO, CARD_TRANSACTION_LOGID: CARD_TRANSACTION_LOGID, CARD_TID: CARD_TID },
                 function (JData) {
                     var inserteddata = JData.d.split('@');
                     if (inserteddata[0] == 'true') {


                         IP_REQUEST_STRING = _JSONParams;
                         IP_COMUNICATION_ID = inserteddata[1];
                         IP_AMOUNT = IP_AMOUNT;
                         $.ajax({
                             type: "POST",
                             url: UIpath,
                             contentType: "application/json; charset=utf-8",
                             dataType: "json",
                             data: _JSONParams,
                             async: false,
                             error: function (jqXHR, textStatus, errorThrown) {
                                 return false;
                             },
                             success: function (jdata) {
                                 IP_REQUEST_STRING = jdata.d;
                                 IP_COMUNICATION_ID = inserteddata[1];


                                 if (getParameterByName("DOC_FORM_CD") == "FO_PREREFUND" || getParameterByName("DOC_FORM_CD") == "FO_REFUND") {
                                 } else {
                                     if (JSON.parse(jdata.d).ResponseCode == "0") {
                                         dataarrayresponse.push(JSON.parse(jdata.d));
                                         if (dataarrayresponse[0].TransactionData[2].Value.toUpperCase() == 'CARD') {
                                             CARD_TYPE = dataarrayresponse[0].TransactionData[10].Value;
                                             ACQUIRER_NAME = dataarrayresponse[0].TransactionData[12].Value;
                                             CARD_NO = dataarrayresponse[0].TransactionData[8].Value;
                                             CARD_AMOUNT = dataarrayresponse[0].TransactionData[3].Value;
                                             CARD_AUTH_NO = dataarrayresponse[0].TransactionData[7].Value;
                                             CARD_RRN_NO = dataarrayresponse[0].TransactionData[5].Value;
                                             CARD_TRANSACTION_LOGID = dataarrayresponse[0].TransactionData[19].Value;
                                             CARD_TID = dataarrayresponse[0].TransactionData[0].Value;
                                         } else {
                                             CARD_TYPE = dataarrayresponse[0].TransactionData[2].Value;
                                             ACQUIRER_NAME = dataarrayresponse[0].TransactionData[10].Value;
                                             CARD_NO = dataarrayresponse[0].TransactionData[8].Value;
                                             CARD_AMOUNT = dataarrayresponse[0].TransactionData[3].Value;
                                             CARD_AUTH_NO = dataarrayresponse[0].TransactionData[7].Value;
                                             CARD_RRN_NO = dataarrayresponse[0].TransactionData[5].Value;
                                             CARD_TRANSACTION_LOGID = dataarrayresponse[0].TransactionData[16].Value;
                                             CARD_TID = dataarrayresponse[0].TransactionData[0].Value;

                                         }
                                     }
                                 }
                                 dataarrayresponse = [];
                                 GetNonAsync(
                                     "Private/FrontOffice/OpBilling/OPBillClientSide.aspx/SaveMahindata",
                                     { IP_REQUEST_STRING: IP_REQUEST_STRING, IP_COMUNICATION_ID: IP_COMUNICATION_ID, IP_AMOUNT: IP_AMOUNT, FLAG: 'A', REQ_TYPE: 'UR', DEVICEID: DEVICEID, TERMINAL_NAME: TERMINAL_NAME, PLUTUS_REFERENCE_ID: PlutusTransactionReferenceID, paymentmodeid: paymentmodeid, UMR_NO: UMR_NO, ADMN_NO: ADMN_NO, MOBILE_NO: MOBILE_NO, PATIENT_ID: PATIENT_ID, PATIENT_NAME: PATIENT_NAME, DOC_ID: DOC_ID, COMMUNICATION_REFERENCE_CODE: JSON.parse(jdata.d).ResponseCode, CARD_TYPE: CARD_TYPE, ACQUIRER_NAME: ACQUIRER_NAME, CARD_NO: CARD_NO, CARD_AMOUNT: CARD_AMOUNT, CARD_AUTH_NO: CARD_AUTH_NO, CARD_RRN_NO: CARD_RRN_NO, CARD_TRANSACTION_LOGID: CARD_TRANSACTION_LOGID, CARD_TID: CARD_TID },
                                     function (JData) {

                                     },
                                     function (jqXHR, textStatus, errorThrown) {
                                     });

                                 if (JSON.parse(jdata.d).ResponseCode == "0") {

                                     var amount = 0;
                                     var cardnumber = '';
                                     var authno = '';
                                     var cardtype = '';
                                     var bankname = '';
                                     var Trantype = '';
                                     var Tid = 0;
                                     dataarray1 = [];

                                     var doc_form_cd_machine = getParameterByName("DOC_FORM_CD");
                                     if (doc_form_cd_machine == 'REG-EXPIRY') {

                                     }
                                     else if (doc_form_cd_machine == 'FOIPADV' || doc_form_cd_machine == 'IPFINALBILL' || doc_form_cd_machine == 'FOERADV') {
                                         MOBILE_NO = ctl00_ContentPlaceHolder1_AdmnPatientDetails_LblMobile.innerHTML;
                                         PATIENT_NAME = ctl00_ContentPlaceHolder1_AdmnPatientDetails_lblPatName.innerHTML;
                                         PATIENT_ID = document.getElementById('' + ctrlcom + '_AdmnPatientDetails_ucUmrNo__hiddenID').value;
                                         ADMN_NO = document.getElementById('' + ctrlcom + '_AdmnPatientDetails_hdnAdmnNo').value;
                                         UMR_NO = document.getElementById('' + ctrlcom + '_AdmnPatientDetails_hdnUmrNo').value;
                                     }
                                     else if (doc_form_cd_machine == 'FOERFBILL' || doc_form_cd_machine == 'IPFINALBILLPAY') {
                                         MOBILE_NO = ctl00_ContentPlaceHolder1_IPPatientDtls1_LblMobile.innerHTML;
                                         PATIENT_NAME = ctl00_ContentPlaceHolder1_IPPatientDtls1_lblPatName.innerHTML;
                                         PATIENT_ID = document.getElementById('' + ctrlcom + '_IPPatientDtls1_ucUmrNo__hiddenID').value;
                                         ADMN_NO = document.getElementById('' + ctrlcom + '_IPPatientDtls1_hdnAdmnNo').value;
                                         UMR_NO = document.getElementById('' + ctrlcom + '_IPPatientDtls1_hdnUmrNo').value;
                                     }
                                     else if (doc_form_cd_machine == 'FO_REFUND' || doc_form_cd_machine == 'FO_OUTSTANDING' || doc_form_cd_machine == 'Rk9PUEFEVg==' || doc_form_cd_machine == 'FOOPADV') {
                                         MOBILE_NO = ctl00_ContentPlaceHolder1_umrPatientDetails_lblMobileNo.innerHTML;
                                         PATIENT_NAME = ctl00_ContentPlaceHolder1_umrPatientDetails_lblPatName.innerHTML;
                                         PATIENT_ID = document.getElementById('' + ctrlcom + '_umrPatientDetails_hdnPatientid').value;
                                         ADMN_NO = document.getElementById('' + ctrlcom + '_umrPatientDetails_hdnadmnno').value;
                                         UMR_NO = document.getElementById('' + ctrlcom + '_umrPatientDetails_hdnUmrNo').value;
                                     }
                                     else if (doc_form_cd_machine == 'FO_PREREFUND') {
                                         MOBILE_NO = ctl00_ContentPlaceHolder1_umrPatientDetails_lblMobileNo.innerHTML;
                                         PATIENT_NAME = ctl00_ContentPlaceHolder1_umrPatientDetails_lblPatName.innerHTML;
                                         PATIENT_ID = document.getElementById('' + ctrlcom + '_umrPatientDetails_hdnPatientid').value;
                                         ADMN_NO = '';
                                         UMR_NO = document.getElementById('' + ctrlcom + '_umrPatientDetails_hdnUmrNo').value;
                                     }



                                     if (getParameterByName("DOC_FORM_CD") == "FO_PREREFUND" || getParameterByName("DOC_FORM_CD") == "FO_REFUND") {
                                         dataarray1.push(JSON.parse(jdata.d));
                                         $('[id*=btnpineclick]')[0].style.display = 'block';
                                         $('[id*=btnpineapproveclick]')[0].style.display = 'none';
                                         $('[id*=btnCancelpineclick]')[0].style.display = 'none';
                                         authno = dataarray1[0].TransactionData[1].Value;
                                         cardnumber = document.getElementById("<%= hdnbanCC_CARD_NO.ClientID %>").value;
                                         bankname = document.getElementById("<%= hdnbanCC_ISSUE_BANK_ID.ClientID %>").value;
                                         amount = document.getElementById("<%= hdnbanCC_amount.ClientID %>").value;
                                         Trantype = 'CARD';
                                         var cardtype_id = document.getElementById("<%= hdnbanCC_CARD_TYPE_ID.ClientID %>").value;
                                         $('[id*=ddlCardType]').val(cardtype_id);
                                         cardtype = $('[id*=ddlCardType] option:selected').text();

                                         document.getElementById('' + ctrlcom + '_ReceiptControl2_txtExpDt').value = new Date().format('dd-MMM-yyyy');
                                         checkpayment();

                                         document.getElementById('' + ctrlcom + '_ReceiptControl2_txtCardNo').value = cardnumber;
                                         document.getElementById('' + ctrlcom + '_ReceiptControl2_txtamt').value = amount;
                                         document.getElementById('' + ctrlcom + '_ReceiptControl2_txtAuthCode').value = authno;
                                         document.getElementById('' + ctrlcom + '_ReceiptControl2_txtExpDt').value = new Date().format('dd-MMM-yyyy');
                                         var cardtype_id = document.getElementById("<%= hdnbanCC_CARD_TYPE_ID.ClientID %>").value;
                                         $('[id*=ddlCardType]').val(cardtype_id);
                                         cardtype = $('[id*=ddlCardType] option:selected').text();


                                         $('[id*=ddlBankName] option:contains(' + bankname + ')').attr('selected', true);
                                         $('[id*=ddlCardType] option:contains(' + cardtype + ')').attr('selected', true);

                                         NewCalculateTendorAmt(cardtype, ctl00_ContentPlaceHolder1_ReceiptControl2_txtamt);
                                         if (doc_form_cd_machine == 'FO_OUTSTANDING' || doc_form_cd_machine == 'FOIPADV' || doc_form_cd_machine == 'FO_REFUND' || doc_form_cd_machine == 'Rk9PUEFEVg==' || doc_form_cd_machine == 'FOOPADV') {
                                             srvchrgamount(ctl00_ContentPlaceHolder1_ReceiptControl2_txtamt, amount);
                                         }

                                     } else {

                                         dataarray1.push(JSON.parse(jdata.d));
                                         $('[id*=btnpineclick]')[0].style.display = 'block';
                                         $('[id*=btnpineapproveclick]')[0].style.display = 'none';
                                         $('[id*=btnCancelpineclick]')[0].style.display = 'none';

                                         if (dataarray1[0].TransactionData[2].Value.toUpperCase() == 'CARD') {
                                             amount = dataarray1[0].TransactionData[3].Value;
                                             Tid = dataarray1[0].TransactionData[0].Value;
                                             cardnumber = dataarray1[0].TransactionData[8].Value;
                                             authno = dataarray1[0].TransactionData[19].Value;
                                             Trantype = dataarray1[0].TransactionData[2].Value;
                                             cardtype = dataarray1[0].TransactionData[10].Value;
                                             bankname = 'Pine Labs';
                                         } else {
                                             amount = dataarray1[0].TransactionData[3].Value;
                                             Tid = dataarray1[0].TransactionData[0].Value;
                                             cardnumber = dataarray1[0].TransactionData[8].Value;
                                             authno = dataarray1[0].TransactionData[16].Value;
                                             Trantype = dataarray1[0].TransactionData[2].Value;
                                             cardtype = dataarray1[0].TransactionData[10].Value;
                                             bankname = cardtype;

                                         }

                                     }

                                     var dueamount = $('#' + ctrlcom + '_ReceiptControl2_txtpatdue').val();
                                     if (parseFloat(amount) != parseFloat(dueamount)) {
                                         //                                         $(".stoast").toastText("Info", "", 5, 3);
                                         //                                         return false;


                                     }

                                     if (doc_form_cd_machine == 'FO_OUTSTANDING' || doc_form_cd_machine == 'FOIPADV' || doc_form_cd_machine == 'FO_REFUND' || doc_form_cd_machine == 'Rk9PUEFEVg==' || doc_form_cd_machine == 'FOOPADV') {
                                         mode = "A";
                                     }

                                     if (mode == "Q") {
                                         document.getElementById('' + ctrlcom + '_ReceiptControl2_txtcardNoCmp').value = cardnumber;
                                         document.getElementById('' + ctrlcom + '_ReceiptControl2_txtCardAmt').value = amount;
                                         document.getElementById('' + ctrlcom + '_ReceiptControl2_txtcardAuther').value = authno;
                                         $('[id*=ddbankName] option:contains(' + bankname + ')').attr('selected', true);
                                         $('[id*=ddcardType] option:contains(' + cardtype + ')').attr('selected', true);
                                         document.getElementById('' + ctrlcom + '_ReceiptControl2_txtcardNoCmp').disabled = true;
                                         document.getElementById('' + ctrlcom + '_ReceiptControl2_txtCardAmt').disabled = true;
                                         document.getElementById('' + ctrlcom + '_ReceiptControl2_txtcardAuther').disabled = true;
                                         $('[id*=ddbankName] option:contains(' + bankname + ')').attr('disabled', true);
                                         $('[id*=ddcardType] option:contains(' + cardtype + ')').attr('disabled', true);

                                         CalculateAmountPinelabCardPayment('Card')
                                     }
                                     else if (mode == "A") {
                                         if (Trantype.toUpperCase() == 'CARD') {
                                             document.getElementById('' + ctrlcom + '_ReceiptControl2_txtCardNo').value = cardnumber;
                                             document.getElementById('' + ctrlcom + '_ReceiptControl2_txtamt').value = amount;
                                             document.getElementById('' + ctrlcom + '_ReceiptControl2_txtAuthCode').value = authno;
                                             document.getElementById('' + ctrlcom + '_ReceiptControl2_txtExpDt').value = new Date().format('dd-MMM-yyyy');
                                             $('[id*=ddlBankName] option:contains(' + bankname + ')').attr('selected', true);
                                             $('[id*=ddlCardType] option:contains(' + cardtype + ')').attr('selected', true);
                                         }
                                         else {
                                             document.getElementById('' + ctrlcom + '_ReceiptControl2_txtCardNo').value = Tid;
                                             document.getElementById('' + ctrlcom + '_ReceiptControl2_txtAuthCode').value = authno;
                                             document.getElementById('' + ctrlcom + '_ReceiptControl2_txtTenderedAmt').value = amount;
                                         }
                                         if (doc_form_cd_machine == 'FO_OUTSTANDING' || doc_form_cd_machine == 'FOIPADV' || doc_form_cd_machine == 'FO_REFUND' || doc_form_cd_machine == 'Rk9PUEFEVg==' || doc_form_cd_machine == 'FOOPADV') {
                                             srvchrgamount(ctl00_ContentPlaceHolder1_ReceiptControl2_txtamt, amount);
                                         }

                                         NewAddTransactionDetails();
                                         /*if (Trantype.toUpperCase() == 'CARD') {
                                         $('[id*=ddlBankName] option:contains(' + bankname + ')').removeAttr('selected', true);
                                         $('[id*=ddlCardType] option:contains(' + cardtype + ')').removeAttr('selected', true);
                                         }*/
                                     }
                                 } else {
                                     $(".toast").toastText("Info", "Please make the payment in machine", 5, 2);
                                     return false;
                                 }
                                 return false;
                             }
                         });
                     } else {
                         $(".stoast").toastText("Info", "PLEASE APPROVE OPEN TXN FIRST", 5, 3);
                         return false;
                     }



                 },
                 function (jqXHR, textStatus, errorThrown) {
                 });


        } else {
            $(".stoast").toastText("Info", "PLEASE APPROVE OPEN TXN FIRST", 5, 3);
            return false;
        }
    }
    var dataarray2 = new Array();
    function PinecancellabdataCancel() {
        var DOC_ID = document.getElementById('ctl00_hdndocsessionid').value;
        if (DOC_ID == '' || DOC_ID == undefined || DOC_ID == 'undefined' || DOC_ID == '0' || DOC_ID == 0) {
            DOC_ID = 0;
        }
        var PlutusTransactionReferenceID = document.getElementById('<%= hdnPlutusTransactionReferenceID.ClientID %>').value;
        if (PlutusTransactionReferenceID == '' || PlutusTransactionReferenceID == undefined | PlutusTransactionReferenceID == 'undefined') {
            PlutusTransactionReferenceID = 0;
        }
        if (PlutusTransactionReferenceID != 0) {
            GetNonAsync(
                "Private/FrontOffice/OpBilling/OPBillClientSide.aspx/SaveMahindata",
                { IP_REQUEST_STRING: '', IP_COMUNICATION_ID: 0, IP_AMOUNT: IP_AMOUNT, FLAG: 'C', REQ_TYPE: 'I', DEVICEID: DEVICEID, TERMINAL_NAME: TERMINAL_NAME, PLUTUS_REFERENCE_ID: PlutusTransactionReferenceID, paymentmodeid: paymentmodeid, UMR_NO: UMR_NO, ADMN_NO: ADMN_NO, MOBILE_NO: MOBILE_NO, PATIENT_ID: PATIENT_ID, PATIENT_NAME: PATIENT_NAME, DOC_ID: DOC_ID, COMMUNICATION_REFERENCE_CODE: COMMUNICATION_REFERENCE_CODE, CARD_TYPE: CARD_TYPE, ACQUIRER_NAME: ACQUIRER_NAME, CARD_NO: CARD_NO, CARD_AMOUNT: CARD_AMOUNT, CARD_AUTH_NO: CARD_AUTH_NO, CARD_RRN_NO: CARD_RRN_NO, CARD_TRANSACTION_LOGID: CARD_TRANSACTION_LOGID, CARD_TID: CARD_TID },
                function (JData) {
                    var inserteddata = JData.d.split('@');
                    if (inserteddata[0] == 'true') {
                        IP_REQUEST_STRING = _JSONParams;
                        IP_COMUNICATION_ID = inserteddata[1];
                    } else {
                        return false;
                    }
                    var UrlVal = ReturnIniUrl();
                    var _MissionServiceURL = document.getElementById('<%= hdnpinelabcancelurl.ClientID %>').value;
                    var UIpath = UrlVal + 'Private/FrontOffice/OpBilling/OPBillClientSide.aspx/BindMessionData';
                    var _JSONParams = JSON.stringify({ MIssionparameters: '{"MerchantID":"' + MERCHANTID + '","SecurityToken":"' + SECURITY_TOKEN + '","IMEI":"' + IMEI + '","MerchantStorePosCode":"' + MERCHANT_STORE_POS_CODE + '","PlutusTransactionReferenceID":' + PlutusTransactionReferenceID + ',"Amount":"' + IP_AMOUNT + '"}', MIssionPAth: _MissionServiceURL });
                    IP_REQUEST_STRING = _JSONParams;
                    GetNonAsync(
                                     "Private/FrontOffice/OpBilling/OPBillClientSide.aspx/SaveMahindata",
                                     { IP_REQUEST_STRING: IP_REQUEST_STRING, IP_COMUNICATION_ID: IP_COMUNICATION_ID, IP_AMOUNT: IP_AMOUNT, FLAG: 'C', REQ_TYPE: 'U', DEVICEID: DEVICEID, TERMINAL_NAME: TERMINAL_NAME, PLUTUS_REFERENCE_ID: PlutusTransactionReferenceID, paymentmodeid: paymentmodeid, UMR_NO: UMR_NO, ADMN_NO: ADMN_NO, MOBILE_NO: MOBILE_NO, PATIENT_ID: PATIENT_ID, PATIENT_NAME: PATIENT_NAME, DOC_ID: DOC_ID, COMMUNICATION_REFERENCE_CODE: COMMUNICATION_REFERENCE_CODE, CARD_TYPE: CARD_TYPE, ACQUIRER_NAME: ACQUIRER_NAME, CARD_NO: CARD_NO, CARD_AMOUNT: CARD_AMOUNT, CARD_AUTH_NO: CARD_AUTH_NO, CARD_RRN_NO: CARD_RRN_NO, CARD_TRANSACTION_LOGID: CARD_TRANSACTION_LOGID, CARD_TID: CARD_TID },
                                     function (JData) {

                                         var UrlVal = ReturnIniUrl();
                                         var _MissionServiceURL = document.getElementById('<%= hdnpinelabcancelurl.ClientID %>').value;
                                         var UIpath = UrlVal + 'Private/FrontOffice/OpBilling/OPBillClientSide.aspx/BindMessionData';
                                         var _JSONParams = JSON.stringify({ MIssionparameters: '{"MerchantID":"' + MERCHANTID + '","SecurityToken":"' + SECURITY_TOKEN + '","IMEI":"' + IMEI + '","MerchantStorePosCode":"' + MERCHANT_STORE_POS_CODE + '","PlutusTransactionReferenceID":' + PlutusTransactionReferenceID + ',"Amount":"' + IP_AMOUNT + '"}', MIssionPAth: _MissionServiceURL });
                                         $.ajax({
                                             type: "POST",
                                             url: UIpath,
                                             contentType: "application/json; charset=utf-8",
                                             dataType: "json",
                                             data: _JSONParams,
                                             async: false,
                                             error: function (jqXHR, textStatus, errorThrown) {
                                                 return false;
                                             },
                                             success: function (jdata) {
                                                 dataarray2 = [];
                                                 dataarray2.push(JSON.parse(jdata.d));

                                                 if (dataarray2[0].ResponseCode == 1) {
                                                     $('[id*=btnpineapproveclick]')[0].style.display = 'block';
                                                     $('[id*=btnpineclick]')[0].style.display = 'none';
                                                 }
                                                 IP_REQUEST_STRING = jdata.d;
                                                 GetNonAsync(
                                        "Private/FrontOffice/OpBilling/OPBillClientSide.aspx/SaveMahindata",
                                        { IP_REQUEST_STRING: IP_REQUEST_STRING, IP_COMUNICATION_ID: IP_COMUNICATION_ID, IP_AMOUNT: IP_AMOUNT, FLAG: 'C', REQ_TYPE: 'UR', DEVICEID: DEVICEID, TERMINAL_NAME: TERMINAL_NAME, PLUTUS_REFERENCE_ID: PlutusTransactionReferenceID, paymentmodeid: paymentmodeid, UMR_NO: UMR_NO, ADMN_NO: ADMN_NO, MOBILE_NO: MOBILE_NO, PATIENT_ID: PATIENT_ID, PATIENT_NAME: PATIENT_NAME, DOC_ID: DOC_ID, COMMUNICATION_REFERENCE_CODE: dataarray2[0].ResponseCode, CARD_TYPE: CARD_TYPE, ACQUIRER_NAME: ACQUIRER_NAME, CARD_NO: CARD_NO, CARD_AMOUNT: CARD_AMOUNT, CARD_AUTH_NO: CARD_AUTH_NO, CARD_RRN_NO: CARD_RRN_NO, CARD_TRANSACTION_LOGID: CARD_TRANSACTION_LOGID, CARD_TID: CARD_TID },
                                        function (JData) {
                                            if (dataarray2[0].ResponseCode == 0) {
                                                $('[id*=btnpineclick]')[0].style.display = 'block';
                                                $('[id*=btnpineapproveclick]')[0].style.display = 'none';
                                                $('[id*=btnCancelpineclick]')[0].style.display = 'none';
                                                console.log(jdata);
                                                return false;
                                            }
                                            if (dataarray2[0].ResponseCode == 1) {
                                                $('[id*=btnpineapproveclick]')[0].style.display = 'block';
                                                $(".stoast").toastText("warning", "" + dataarray2[0].ResponseMessage + "", 2, 3);
                                                $('[id*=btnpineclick]')[0].style.display = 'none';
                                                return false;
                                            }
                                            return false;

                                        },
                                        function (jqXHR, textStatus, errorThrown) {
                                        });

                                             }
                                         })

                                     },
        function (jqXHR, textStatus, errorThrown) {
        });
                },
                 function (jqXHR, textStatus, errorThrown) {
                 });






        } else {
            $(".stoast").toastText("Info", "error", 5, 3);
            return false;
        }
    }


</script>
<script type="text/javascript">
    var TransactionID = "", ISManualEntry = "", CardNumber = "", ExpDateinMM = "", ExpDateinYY = "", CardIssuerName = "", SchemeType = "", CardHolderName = "", EMIIssuerName = "", AcquirerName = "", Tenure = "", SelectAcqID = "",
    SelectedAcqName = "", Status = "", TerminalId = "", MarchentID = "", MerchantName = "", Address = "", City = "", InvoiceNo = "", BatchNo = "", StatusAcqName = "", unipayTerminalID = "",
    Amount = "", TransactionTime = "", TransactionType = "", ResponseStatus = "";
    function SwipeCard() {


        if ($('#ctl00_ContentPlaceHolder1_ReceiptControl2_hdnbanknamemandateswipe').val().toLowerCase() == 'Yes') {
            if (lblquick.className == 'select') { /* Quick Mode */
                ddlbankid = document.getElementById('' + ctrlcom + '_ReceiptControl2_ddbankName').value;
                if (ddlbankid == '' || ddlbankid == undefined || ddlbankid == 'undefined' || ddlbankid == '0' || ddlbankid == 0) {
                    ddlbankid = 0;
                }
                if (ddlbankid == 0) {
                    $(".stoast").toastText("Info", "Please Select Swipe Bank Name....", 5, 3);
                    return false;

                }
            }
            else if (lbladvanced.className == 'select') {
                ddlbankid = document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlBankName').value;
                if (ddlbankid == '' || ddlbankid == undefined || ddlbankid == 'undefined' || ddlbankid == '0' || ddlbankid == 0) {
                    ddlbankid = 0;
                }
                if (ddlbankid == 0) {
                    $(".stoast").toastText("Info", "Please Select Swipe Bank Name....", 5, 3);
                    return false;

                }
            }
        }





        var amt = "0";
        if (mode == "Q") {
            var amt = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatdue').value;
            if (amt != "" || amt != undefined)
                amt = parseInt(amt) * 100;
            else
                amt = '0';
            if (isNaN(amt) || amt == "")
                amt = "0";
        }

        else if (mode == "A") {
            amt = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatdue').value;
            if (amt != "" || amt != undefined)
                amt = parseInt(amt) * 100;
            else
                amt = '0';
            if (isNaN(amt) || amt == "")
                amt = "0";
        }
        InsSwipeReq("0", "0", "12121212121", "1234567890", "06", amt);
        GetAsyncc(
        PGatewayUrl + "/" + "InputsToSwipe",
        { trantype: "0", tranmode: "0", cardno: "12121212121", datetime: "1234567890", invoiceno: "06", amount: amt },
        function (JData) {
            var parser, XMDoc;
            parser = new DOMParser();
            var mydata = ""; //"<?xml version='1.0'?><hub-response><Transaction ID='ID000001'><Card><IsManualEntry>true</IsManualEntry><CardNumber>418157xxxxxx5714</CardNumber><ExpirationDate><MM>xx</MM><YY>xx</YY></ExpirationDate><IssuerName></IssuerName><SchemeType>VISA PIN@POS</SchemeType><CardHolderName>MAHALAXMI N RAO KADAMI   </CardHolderName></Card><EMI><IssuerName></IssuerName><AcquirerName>HDFC BANK</AcquirerName><Tenure> </Tenure></EMI><State><SelectedAcquirer><ID>07</ID><Name>HDFC BANK</Name><DiscounstRate> </DiscounstRate><Status>Approved</Status></SelectedAcquirer><TerminalID>80030001</TerminalID><Merchant><ID>837022008900009</ID><Name>Yashoda</Name><Address>Hyderabad</Address><City>Hyderabad</City></Merchant><InvoiceNumber>000098</InvoiceNumber><BatchNumber>000006</BatchNumber><AcquirerName>HDFC BANK</AcquirerName><unipayTerminalId>80030001</unipayTerminalId><Amount>1.00</Amount><TransactionTime>2017-02-06T21:11:34</TransactionTime><PREB> </PREB><POSB> </POSB><TransactionType>SALE</TransactionType><HostResponse><ResponseCode>00</ResponseCode><ResponseMessage>APPROVED</ResponseMessage><ApprovalCode>007081</ApprovalCode><RetrievalRefrenceNumber>148639569446</RetrievalRefrenceNumber></HostResponse><StatusCode>00</StatusCode><StatusMessage>APPROVED</StatusMessage><TrackingNumber>000</TrackingNumber></State><ChargeslipData printerWidth='40'><Receipt isCustomerCopy='false' lineCount='22'><Printline isBold='true' isCentered='true' lineNumber='1'>HDFC BANK</Printline><Printline isCentered='true' lineNumber='2'>Yashoda</Printline><Printline isCentered='true' lineNumber='3'>Hyderabad</Printline><Printline isCentered='true' lineNumber='4'>Hyderabad</Printline><Printline lineNumber='5'></Printline><Printline lineNumber='6'>DATE 2017-02-06T TIME 21:11:34</Printline><Printline lineNumber='7'>TID: 80030001 MID: 837022008900009</Printline><Printline lineNumber='8'>BATCH NO.: 000006 INVOICE NO.: 000098</Printline><Printline isCentered='true' lineNumber='9'>SALE</Printline><Printline isCentered='true' lineNumber='10'> CARD: 418157xxxxxx5714</Printline><Printline lineNumber='11'>EXP DATE: xx/xx CARD TYPE: VISA PIN@POS</Printline><Printline lineNumber='12'>APPR CODE: 007081 RRN: 148639569446</Printline><Printline lineNumber='13'> AMOUNT: Rs 1.00</Printline><Printline lineNumber='14'/><Printline lineNumber='15'> SIGN:__________________</Printline><Printline lineNumber='16'/><Printline isCentered='true' lineNumber='17'>MAHALAXMI N RAO KADAMI   </Printline><Printline lineNumber='18'/><Printline isCentered='true' lineNumber='19'> I AGREE TO PAY AS PER   CARD ISSUER AGREEMENT   Innoviti uniPAY (ver3.0)</Printline><Printline isCentered='true' lineNumber='20'>*** MERCHANT COPY ****</Printline><Printline lineNumber='21'/><Printline isCentered='true' lineNumber='22'>THANK YOU!</Printline></Receipt><Receipt isCustomerCopy='true' lineCount='22'><Printline isBold='true' isCentered='true' lineNumber='1'>HDFC BANK</Printline><Printline isCentered='true' lineNumber='2'>Yashoda</Printline><Printline isCentered='true' lineNumber='3'>Hyderabad</Printline><Printline isCentered='true' lineNumber='4'>Hyderabad</Printline><Printline lineNumber='5'></Printline><Printline lineNumber='6'>DATE 2017-02-06T TIME 21:11:34</Printline><Printline lineNumber='7'>TID: 80030001 MID: 837022008900009</Printline><Printline lineNumber='8'>BATCH NO.: 000006 INVOICE NO.: 000098</Printline><Printline isCentered='true' lineNumber='9'>SALE</Printline><Printline isCentered='true' lineNumber='10'>CARD: 418157xxxxxx5714</Printline><Printline lineNumber='11'>EXP DATE: xx/xx CARD TYPE: VISA PIN@POS</Printline><Printline lineNumber='12'>APPR CODE: 007081 RRN: 148639569446</Printline><Printline lineNumber='13'> AMOUNT: Rs 1.00</Printline><Printline lineNumber='14'/><Printline lineNumber='15'> SIGN:__________________</Printline><Printline lineNumber='16'/><Printline isCentered='true' lineNumber='17'>MAHALAXMI N RAO KADAMI   </Printline><Printline lineNumber='18'/><Printline isCentered='true' lineNumber='19'> I AGREE TO PAY AS PER   CARD ISSUER AGREEMENT   Innoviti uniPAY (ver3.0)</Printline><Printline isCentered='true' lineNumber='20'>**** CUSTOMER COPY ****</Printline><Printline lineNumber='21'/><Printline isCentered='true' lineNumber='22'>THANK YOU!</Printline></Receipt></ChargeslipData></Transaction></hub-response>";
            mydata = JData.d;
            XMDoc = parser.parseFromString(mydata, "text/xml");
            if ($(XMDoc).find('Transaction') != undefined) {
                TransactionID = $(XMDoc).find('Transaction').attr('ID');
                ISManualEntry = $(XMDoc).find('Transaction').find('Card').find('IsManualEntry').text();
                CardNumber = $(XMDoc).find('Transaction').find('Card').find('CardNumber').text();
                ExpDateinMM = $(XMDoc).find('Transaction').find('Card').find('ExpirationDate').find('MM').text();
                ExpDateinYY = $(XMDoc).find('Transaction').find('Card').find('ExpirationDate').find('YY').text();
                CardIssuerName = $(XMDoc).find('Transaction').find('Card').find('IssuerName').text();
                SchemeType = $(XMDoc).find('Transaction').find('Card').find('SchemeType').text();
                CardHolderName = $(XMDoc).find('Transaction').find('Card').find('CardHolderName').text();
                EMIIssuerName = $(XMDoc).find('Transaction').find('EMI').find('IssuerName').text();
                AcquirerName = $(XMDoc).find('Transaction').find('EMI').find('AcquirerName').text();
                Tenure = $(XMDoc).find('Transaction').find('EMI').find('Tenure').text();
                SelectAcqID = $(XMDoc).find('Transaction').find('State').find('SelectedAcquirer').find('ID').text();
                SelectedAcqName = $(XMDoc).find('Transaction').find('State').find('SelectedAcquirer').find('DiscounstRate').text();
                Status = $(XMDoc).find('Transaction').find('State').find('SelectedAcquirer').find('Status').text();
                TerminalId = $(XMDoc).find('Transaction').find('State').find('TerminalID').text();
                MarchentID = $(XMDoc).find('Transaction').find('State').find('Merchant').find('ID').text();
                MerchantName = $(XMDoc).find('Transaction').find('State').find('Merchant').find('Name').text();
                Address = $(XMDoc).find('Transaction').find('State').find('Merchant').find('Address').text();
                City = $(XMDoc).find('Transaction').find('State').find('Merchant').find('City').text();
                InvoiceNo = $(XMDoc).find('Transaction').find('State').find('InvoiceNumber').text();
                BatchNo = $(XMDoc).find('Transaction').find('State').find('BatchNumber').text();
                StatusAcqName = $(XMDoc).find('Transaction').find('State').find('AcquirerName').text();
                unipayTerminalID = $(XMDoc).find('Transaction').find('State').find('unipayTerminalId').text();
                Amount = $(XMDoc).find('Transaction').find('State').find('Amount').text();
                TransactionTime = $(XMDoc).find('Transaction').find('State').find('TransactionTime').text();
                TransactionType = $(XMDoc).find('Transaction').find('State').find('TransactionType').text();
                ResponseStatus = $(XMDoc).find('Transaction').find('State').find('HostResponse').find('ResponseMessage').text();
                if (ResponseStatus == "APPROVED") {
                    SaveSwipeDetails();
                    AssignResponse();
                    if (AcquirerName != "")
                        GetBankDet(AcquirerName);
                }
                else {
                    $(".stoast").toastText("warning", "" + ResponseStatus + "", 2, 3);
                }
            }
        },
        function (jqXHR, textStatus, errorThrown) {
            alert(errorThrown);
        });
        return false;

    }
    var Paymentcommid = 0;
    var _xmlStr;
    var billid = "", billdt = "", transactiondetid = "", umrno = "", admnno = "", outbound = "", inbound = "", commstatus = "", transid = "",
       expirationdt = "", issuername = "", schmetype = "", cardholdername = "", AcquirerName = "", TerminalId = "", merchantid = "",
        MerchantName = "", MerchantAddress = "", ResponseStatus = "", RetrievalrefNumber = "", trackingnumber = "", BatchNo = "",
        isreversal = "", date = new Date().format('dd-MMM-yyyy'), issettled = '', Paymentcommtypeid = '', RefPaymentcommid = ''
    function InsSwipeReq(trantype, tranmode, cardno, datetime, invoiceno, amount) {
        _xmlStr = "<root>";
        _xmlStr += " <FO_BILL_PAYMENT_COMM";
        _xmlStr += " PAYMENT_COMM_ID=$" + 0 + "$";
        _xmlStr += " PAYMENT_COMM_DT=$" + date + "$";
        _xmlStr += " TRANSACTION_MODE=$" + tranmode + "$";
        _xmlStr += " BILL_ID =$" + billid + "$";
        _xmlStr += " BILL_DT=$" + billdt + "$";
        _xmlStr += " TRANSACTION_DET_ID=$" + transactiondetid + "$";
        _xmlStr += " UMR_NO=$" + umrno + "$";
        _xmlStr += " ADMN_NO=$" + admnno + "$";
        _xmlStr += " OUTBOUND=$" + outbound + "$";
        _xmlStr += " INBOUND =$" + inbound + "$";
        _xmlStr += " COMM_STATUS=$" + commstatus + "$";
        _xmlStr += " TRANSACTION_ID=$" + transid + "$";
        _xmlStr += " CARD_NUMBER=$" + cardno + "$";
        _xmlStr += " EXPIRATION_DATE=$" + expirationdt + "$";
        _xmlStr += " ISSUER_NAME=$" + issuername + "$";
        _xmlStr += " SCHEME_TYPE =$" + schmetype + "$";
        _xmlStr += " CARDHOLDER_NAME=$" + cardholdername + "$";
        _xmlStr += " ACQUIRER_NAME=$" + AcquirerName + "$";
        _xmlStr += " TERMINAL_ID=$" + TerminalId + "$";
        _xmlStr += " MERCHANT_ID=$" + merchantid + "$";
        _xmlStr += " MERCHANT_NAME=$" + MerchantName + "$";
        _xmlStr += " MERCHANT_ADDRESS =$" + MerchantAddress + "$";
        _xmlStr += " TRANSACTION_TYPE=$" + trantype + "$";
        _xmlStr += " RESPONSE_MESSAGE=$" + ResponseStatus + "$";
        _xmlStr += " RETRIEVAL_REFRENCE_NUMBER=$" + RetrievalrefNumber + "$";
        _xmlStr += " TRACKING_NUMBER=$" + trackingnumber + "$";
        _xmlStr += " BATCH_NO=$" + BatchNo + "$";
        _xmlStr += " INVOICE_NO =$" + invoiceno + "$";
        _xmlStr += " AMOUNT=$" + amount + "$";
        _xmlStr += " IS_REVERSAL=$" + isreversal + "$";
        _xmlStr += " IS_SETTLED=$" + issettled + "$";
        _xmlStr += " PAYMENT_COMM_TYPE_ID =$" + Paymentcommtypeid + "$";
        _xmlStr += " REF_PAYMENT_COMM_ID=$" + RefPaymentcommid + "$";
        _xmlStr += " />"
        _xmlStr += "</root>";

        GetAsync(
                "Private/FrontOffice/OpBilling/OPBillClientSide.aspx/InsSwipeReq",
                { xmlstr: _xmlStr },
                 function (JData) {

                     if (JData.d != null) {

                         Paymentcommid = JData.d;
                         document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnpaymentcommentid').value = Paymentcommid;
                         /*     if (ResponseStatus == "APPROVED") {
                         SaveSwipeDetails();
                         AssignResponse();
                         if (AcquirerName != "")
                         GetBankDet(AcquirerName);
                         }
                         else {
                         $(".stoast").toastText("warning", "" + ResponseStatus + "", 2, 3);
                         }*/
                     }

                 },
        function (jqXHR, textStatus, errorThrown) {
            $(".stoast").toastText("Warning", "Error", 2, 3);
        });
    }

    function SaveSwipeDetails() {

        var tranmode = "0";
        var payment_comm_rev_no = 1;
        isreversal = "N";
        issettled = "N"
        var docname = document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnDocName').value;
        if (docname == "REG") { var umrno = ""; }
        else
            var umrno = document.getElementById('' + ctrlcom + '_umrPatientDetails_Umrlookup_txtSearchControl').value;
        _xmlStr = "<root>";
        _xmlStr += " <FO_BILL_PAYMENT_COMM";
        _xmlStr += " PAYMENT_COMM_ID=$" + Paymentcommid + "$";
        _xmlStr += " PAYMENT_COMM_REV_NO=$" + payment_comm_rev_no + "$";
        _xmlStr += " PAYMENT_COMM_DT=$" + date + "$";
        _xmlStr += " TRANSACTION_MODE=$" + tranmode + "$";
        _xmlStr += " BILL_ID =$" + billid + "$";
        _xmlStr += " BILL_DT=$" + billdt + "$";
        _xmlStr += " TRANSACTION_DET_ID=$" + transactiondetid + "$";
        _xmlStr += " UMR_NO=$" + umrno + "$";
        _xmlStr += " ADMN_NO=$" + admnno + "$";
        _xmlStr += " OUTBOUND=$" + outbound + "$";
        _xmlStr += " INBOUND =$" + inbound + "$";
        _xmlStr += " COMM_STATUS=$" + ResponseStatus + "$";
        _xmlStr += " TRANSACTION_ID=$" + TransactionID + "$";
        _xmlStr += " CARD_NUMBER=$" + CardNumber + "$";
        //        _xmlStr += " EXPIRATION_DATE=$" + ExpDateinYY + "-" + ExpDateinMM + "$";
        _xmlStr += " EXPIRATION_DATE=$" + date + "$";
        _xmlStr += " ISSUER_NAME=$" + CardIssuerName + "$";
        _xmlStr += " SCHEME_TYPE =$" + SchemeType + "$";

        _xmlStr += " CARDHOLDER_NAME=$" + CardHolderName + "$";
        _xmlStr += " ACQUIRER_NAME=$" + AcquirerName + "$";
        _xmlStr += " TERMINAL_ID=$" + TerminalId + "$";
        _xmlStr += " MERCHANT_ID=$" + MarchentID + "$";
        _xmlStr += " MERCHANT_NAME=$" + MerchantName + "$";
        _xmlStr += " MERCHANT_ADDRESS =$" + MerchantAddress + "$";
        _xmlStr += " TRANSACTION_TYPE=$" + TransactionType + "$";
        _xmlStr += " RESPONSE_MESSAGE=$" + ResponseStatus + "$";
        _xmlStr += " RETRIEVAL_REFRENCE_NUMBER=$" + RetrievalrefNumber + "$";
        _xmlStr += " TRACKING_NUMBER=$" + trackingnumber + "$";
        _xmlStr += " BATCH_NO=$" + BatchNo + "$";
        _xmlStr += " INVOICE_NO =$" + InvoiceNo + "$";
        _xmlStr += " AMOUNT=$" + Amount + "$";
        _xmlStr += " IS_REVERSAL=$" + isreversal + "$";
        _xmlStr += " IS_SETTLED=$" + issettled + "$";
        _xmlStr += " PAYMENT_COMM_TYPE_ID =$" + Paymentcommtypeid + "$";
        _xmlStr += " REF_PAYMENT_COMM_ID=$" + RefPaymentcommid + "$";
        _xmlStr += " />"
        _xmlStr += "</root>";

        GetAsync(
                "Private/FrontOffice/OpBilling/OPBillClientSide.aspx/InsSwipeReq",
                { xmlstr: _xmlStr },
                 function (JData) {

                     if (JData.d != null) {

                     }

                 },
        function (jqXHR, textStatus, errorThrown) {
            $(".stoast").toastText("Warning", "Error", 2, 3);
        });
    }

    function AssignResponse() {

        /*Quick*/
        if (mode == "Q") {
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtcardNoCmp').value = CardNumber;
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtCardAmt').value = Amount;
            $('[id*=ddcardType] option:contains(' + SchemeType + ')').attr('selected', true);
            $('[id*=ddbankName] option:contains(' + AcquirerName + ')').attr('selected', true);
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtQckCardHldrName').value = CardHolderName;
            //document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlcrdtype').value = "4";
            document.getElementById('' + ctrlcom + '_ReceiptControl2_ddbankName').disabled = true;
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtcardNoCmp').disabled = true;
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtCardAmt').disabled = true;
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtCardAmt').disabled = true;
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtcardExpiredt').value = new Date().format('dd-MMM-yyyy'); //ExpDateinMM + "/" + ExpDateinYY;
            document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlcrdtype').disabled = true;
            if (TransactionID != "")
                document.getElementById('' + ctrlcom + '_ReceiptControl2_txtquickremarks').value = "The Transaction was  Successful With Transaction ID ('" + TransactionID + "'), Batch Number ('" + BatchNo + "') and Invoice Number ('" + InvoiceNo + "') ";
            else
                document.getElementById('' + ctrlcom + '_ReceiptControl2_txtquickremarks').value = "";

            var amt = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtcashAmt').value;
            if (amt != "" || amt != undefined)
                amt = parseInt(amt) * 100;
            else
                amt = '0';

        }
        /*Advanced*/
        if (mode == "A") {

            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtamt').value = Amount;
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtExpDt').value = date = new Date().format('dd-MMM-yyyy'); //ExpDateinMM + "/" + ExpDateinYY;
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtCardNo').value = CardNumber;
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtAuthCode').value = TransactionID;

            var amt = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtamt').value;
            if (amt != "" || amt != undefined)
                amt = parseInt(amt) * 100;
            else
                amt = '0';
        }
    }

    function GetBankDet(bankname) {
        var ID = "";
        GetAsync(
"Private/FrontOffice/OpBilling/OPBillClientSide.aspx/GetBankDet",
{ BankName: bankname },
 function (JData) {

     if (JData.d[1] != "" || JData.d[1] != undefined) {
         ID = JData.d[1];
         if (mode == "Q") {
             document.getElementById('' + ctrlcom + '_ReceiptControl2_ddbankName').value = ID;
         }
         else if (mode == "A") {
             document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlBankName').value = ID;
             $('#' + ctrlcom + '_ReceiptControl2_imgbtnadd').click();
         }
     }
     else
         ID = "0";
 },
 function (jqXHR, textStatus, errorThrown) {
     ID = "0";
     //alert(errorThrown);
 });
        return ID;
    }
    function VisibleSwipe() {

        var servicename;
        var docpermision = document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnswipe').value;
        var docname = document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnDocName').value;
        var paindex = document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlPaymentType').selectedIndex;
        var type = $('#' + ctrlcom + '_ReceiptControl2_ddlPaymentType').find('option:selected').text();
        var pmtgroupid = document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnapppaymentgroupid').value;
        if (docpermision == "Y") {
            if (docname == "REG" || docname == "OUTSTDNGDUE") {
                if (mode == "Q") {

                    $('#' + ctrlcom + '_ReceiptControl2_btnswipe').show();
                    $('#' + ctrlcom + '_ReceiptControl2_btnswp').show();
                    $('#' + ctrlcom + '_ReceiptControl2_btnsettled').show();
                    $('#' + ctrlcom + '_ReceiptControl2_btnsettle').show();
                }
                else if (mode == "A") {
                    //var type = document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlPaymentType').value;
                    // if (type == 'Credit Card' || type == 'Debit Card') {
                    if (pmtgroupid == 5) {
                        $('#' + ctrlcom + '_ReceiptControl2_btnswipe').show();
                        $('#' + ctrlcom + '_ReceiptControl2_btnswp').show();
                        $('#' + ctrlcom + '_ReceiptControl2_btnsettled').show();
                        $('#' + ctrlcom + '_ReceiptControl2_btnsettle').show();

                    }
                    else {
                        $('#' + ctrlcom + '_ReceiptControl2_btnswipe').hide();
                        $('#' + ctrlcom + '_ReceiptControl2_btnswp').hide();
                        $('#' + ctrlcom + '_ReceiptControl2_btnsettled').hide();
                        $('#' + ctrlcom + '_ReceiptControl2_btnsettle').hide();
                    }
                }
                else {
                    $('#' + ctrlcom + '_ReceiptControl2_btnswipe').hide();
                    $('#' + ctrlcom + '_ReceiptControl2_btnswp').hide();
                    $('#' + ctrlcom + '_ReceiptControl2_btnsettled').hide();
                    $('#' + ctrlcom + '_ReceiptControl2_btnsettle').hide();
                }
            }


            else if (docname == "OP" || docname == "Cons" || docname == "OPQUICK") {
                var gvnewvisit = document.getElementById('' + ctrlcom + '_UCServices_gvServices');
                var rowIndex = gvnewvisit.rows.length;
                if ($("table[id$=UCServices_gvServices]").length > 0) {
                    if (mode == "Q") {
                        $('#' + ctrlcom + '_ReceiptControl2_btnswipe').show();
                        $('#' + ctrlcom + '_ReceiptControl2_btnswp').show();
                        $('#' + ctrlcom + '_ReceiptControl2_btnsettled').show();
                        $('#' + ctrlcom + '_ReceiptControl2_btnsettle').show();
                    }
                    else if (mode == "A") {
                        //                    if (docname == "OP") {
                        //if (type == 'Credit Card' || type == 'Debit Card') {
                        if (pmtgroupid == 5) {
                            $('#' + ctrlcom + '_ReceiptControl2_btnswipe').show();
                            $('#' + ctrlcom + '_ReceiptControl2_btnswp').show();
                            $('#' + ctrlcom + '_ReceiptControl2_btnsettled').show();
                            $('#' + ctrlcom + '_ReceiptControl2_btnsettle').show();
                        }
                        //                    }
                        //                    else if (docname == "Cons") {
                        //                        if (type == 4 || type == 5) {
                        //                            $('#' + ctrlcom + '_ReceiptControl2_btnswipe').show();
                        //                            $('#' + ctrlcom + '_ReceiptControl2_btnswp').show();
                        //                            $('#' + ctrlcom + '_ReceiptControl2_btnsettled').show();
                        //                            $('#' + ctrlcom + '_ReceiptControl2_btnsettle').show();

                        //                        }
                        //                    }
                        else {
                            $('#' + ctrlcom + '_ReceiptControl2_btnswipe').hide();
                            $('#' + ctrlcom + '_ReceiptControl2_btnswp').hide();
                            $('#' + ctrlcom + '_ReceiptControl2_btnsettled').hide();
                            $('#' + ctrlcom + '_ReceiptControl2_btnsettle').hide();
                        }
                    }
                    $("table[id$=UCServices_gvServices] tr:has(td)").each(function (e) {
                        var servicename = $(this).closest('tr').find("input[type=text][id*=txtServiceName]").val();
                        if (docpermision == "Y" && rowIndex > 0 && servicename != "" && servicename != undefined && servicename != null) {
                            if (docname == "OP" || docname == "Cons") {
                                if (mode == "Q") {
                                    $('#' + ctrlcom + '_ReceiptControl2_btnswipe').show();
                                    $('#' + ctrlcom + '_ReceiptControl2_btnswp').show();
                                    $('#' + ctrlcom + '_ReceiptControl2_btnsettled').show();
                                    $('#' + ctrlcom + '_ReceiptControl2_btnsettle').show();
                                }
                                else if (mode == "A") {
                                    //
                                    // var type = document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlPaymentType').selectedIndex;
                                    //                               if (docname == "OP") {
                                    //if (type == 'Credit Card' || type == 'Debit Card') {
                                    if (pmtgroupid == 5) {
                                        $('#' + ctrlcom + '_ReceiptControl2_btnswipe').show();
                                        $('#' + ctrlcom + '_ReceiptControl2_btnswp').show();
                                        $('#' + ctrlcom + '_ReceiptControl2_btnsettled').show();
                                        $('#' + ctrlcom + '_ReceiptControl2_btnsettle').show();
                                    }
                                    //                               }
                                    //                               else if (docname == "Cons") {
                                    //                                   if (type == 4 || type == 5) {
                                    //                                       $('#' + ctrlcom + '_ReceiptControl2_btnswipe').show();
                                    //                                       $('#' + ctrlcom + '_ReceiptControl2_btnswp').show();
                                    //                                       $('#' + ctrlcom + '_ReceiptControl2_btnsettled').show();
                                    //                                       $('#' + ctrlcom + '_ReceiptControl2_btnsettle').show();
                                    //                                   }
                                    //                               }

                                    else {
                                        $('#' + ctrlcom + '_ReceiptControl2_btnswipe').hide();
                                        $('#' + ctrlcom + '_ReceiptControl2_btnswp').hide();
                                        $('#' + ctrlcom + '_ReceiptControl2_btnsettled').hide();
                                        $('#' + ctrlcom + '_ReceiptControl2_btnsettle').hide();
                                    }
                                }
                            }
                        }
                    });
                }
            }
        }

        else {
            $('#' + ctrlcom + '_ReceiptControl2_btnswipe').hide();
            $('#' + ctrlcom + '_ReceiptControl2_btnswp').hide();
            $('#' + ctrlcom + '_ReceiptControl2_btnsettled').hide();
            $('#' + ctrlcom + '_ReceiptControl2_btnsettle').hide();
        }
    }

    var WgridControl;
    function SettledSwipe() {

        //var cName = ''; var pText = '';
        var umrno = ''; //document.getElementById('' + ctrlcom + '_umrPatientDetails_Umrlookup_txtSearchControl').value;
        var param = param || {};
        param.dataKey = "PAYMENT_COMM_ID";
        param.pageSize = 10;
        param.pageNum = 1;
        param.defaultWSParams = { UMRNO: umrno };
        param.wsPath = "Private/FrontOffice/OpBilling/OPBillClientSide.aspx/SettledSwipeDetails";
        param.wsFilterPath = "Private/FrontOffice/OpBilling/OPBillClientSide.aspx/SettledSwipeDetails";
        param.template = ["UMR_NO*UMR_NO"
                        , "CARD_NUMBER*CARD_NUMBER"
                        , "InvoiceNo*InvoiceNo"
                        , "TRANSACTION_ID*TRANSACTION_ID"
                        , "CARDHOLDER_NAME*CARDHOLDER_NAME"
                        , "BATCH_NO*BATCH_NO"
                        , "RESPONSE_MESSAGE*RESPONSE_MESSAGE"
                        , "TRANSACTION_TYPE*TRANSACTION_TYPE"
                        , "MERCHANT_NAME*MERCHANT_NAME"
                        , "ACQUIRER_NAME*ACQUIRER_NAME"
                        , "SCHEME_TYPE*SCHEME_TYPE"
                       ];
        param.header = [{ col: "Umrno", sort: true, width: '15%', filter: true }
                    , { col: "Card Number", sort: true, width: '25%', filter: true }
                    , { col: "Invoice No", sort: true, width: '25%', filter: true }
                    , { col: "Transaction Id", sort: true, width: '25%', filter: true }
                    , { col: "Cardholder Name", sort: true, width: '25%', filter: true }
                    , { col: "Batch No", sort: true, width: '25%', filter: true }
                    , { col: "Response Message", sort: true, width: '25%', filter: true }
                    , { col: "Transaction Type", sort: true, width: '25%', filter: true }
                    , { col: "Merchant Name", sort: true, width: '25%', filter: true }
                    , { col: "Acquirer Name", sort: true, width: '25%', filter: true }
                    , { col: "Scheme Type", sort: true, width: '25%', filter: true}];
        param.enablePaging = true;
        param.enableTrace = true;
        param.enableFilter = true;
        param.enableCheckbox = false;
        param.enableSorting = false;
        param.enableDMS = false;
        param.RowNo = false; param.tableTemplate = true;
        param.rowClick = function (key) {

            /* 
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtamt').value = key["AMOUNT"];
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtCardNo').value = key["CARD_NUMBER"];
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtExpDt').value = key["EXPIRATION_DATE"];
            document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlBankName').value =  key["ACQUIRER_NAME"];
            
            document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlCardType').value = key["SCHEME_TYPE"];
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtAuthCode').value = key["TRANSACTION_ID"];*/
            if (mode == "Q") {
                document.getElementById('' + ctrlcom + '_ReceiptControl2_txtcardNoCmp').value = key["CARD_NUMBER"];
                document.getElementById('' + ctrlcom + '_ReceiptControl2_txtCardAmt').value = key["AMOUNT"];
                //document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlcrdtype').value = "4";
                document.getElementById('' + ctrlcom + '_ReceiptControl2_ddbankName').disabled = true;
                document.getElementById('' + ctrlcom + '_ReceiptControl2_txtcardNoCmp').disabled = true;
                document.getElementById('' + ctrlcom + '_ReceiptControl2_txtCardAmt').disabled = true;
                document.getElementById('' + ctrlcom + '_ReceiptControl2_txtCardAmt').disabled = true;
                document.getElementById('' + ctrlcom + '_ReceiptControl2_txtcardExpiredt').value = key["EXPIRATION_DATE"];
                document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlcrdtype').disabled = true;
                if (TransactionID != "")
                    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtquickremarks').value = "The Transaction was  Successful With Transaction ID ('" + TransactionID + "'), Batch Number ('" + BatchNo + "') and Invoice Number ('" + InvoiceNo + "') ";
                else
                    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtquickremarks').value = "";

                var amt = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtcashAmt').value;
                if (amt != "" || amt != undefined)
                    amt = parseInt(amt) * 100;
                else
                    amt = '0';

            }
            /*Advanced*/
            if (mode == "A") {

                document.getElementById('' + ctrlcom + '_ReceiptControl2_txtamt').value = key["AMOUNT"];
                document.getElementById('' + ctrlcom + '_ReceiptControl2_txtExpDt').value = date = new Date().format('dd-MMM-yyyy'); //ExpDateinMM + "/" + ExpDateinYY;
                document.getElementById('' + ctrlcom + '_ReceiptControl2_txtCardNo').value = key["CARD_NUMBER"];
                document.getElementById('' + ctrlcom + '_ReceiptControl2_txtAuthCode').value = key["TRANSACTION_ID"];

                var amt = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtamt').value;
                if (amt != "" || amt != undefined)
                    amt = parseInt(amt) * 100;
                else
                    amt = '0';

            }
            if (key["ACQUIRER_NAME"] != "")
                GetBankDet(key["ACQUIRER_NAME"]);
            $('#' + ctrlcom + '_ReceiptControl2_DivSettledSwipe').hide();

        };
        WgridControl = $("#tbl_SettledSwipe").jtable(param);
        $("[id*=DivSettledSwipe]").show();
        return false;
    }
    function CloseSettledSwipePopUp() {

        $('#' + ctrlcom + '_ReceiptControl2_DivSettledSwipe').hide();
        return false;
    }

</script>
<script type="text/javascript">

    var mode = "";
    /*display amounts on extended monitor*/
    function OnchkSrvCharge() {
        var groupid = document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnapppaymentgroupid').value;
        if (document.getElementById('' + ctrlcom + '_ReceiptControl2_chkSrvCharge').checked) {
            // var ddlpaymnt = document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlPaymentType').value;
            //  if (ddlpaymnt == '2' || ddlpaymnt == '3' || ddlpaymnt == '4' || ddlpaymnt == '5') {
            if (groupid == 6 || groupid == 5) {
                document.getElementById('' + ctrlcom + '_ReceiptControl2_txtsrvcharges').value = document.getElementById('<%= hdnSrvChrg.ClientID %>').value;
                document.getElementById('' + ctrlcom + '_ReceiptControl2_txtsrvcharges').disabled = true;
            }
        }
        else {
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtsrvcharges').value = '0';
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtsrvcharges').disabled = false;
        }
    }

    function OnExtendAmounts() {
        var _gross = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatgross').value;
        var _concession = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatgrossamt').value;
        var _net = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatNet').value;
        var _paid = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatientReceiptAmt').value;
        var _due = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatdue').value;
        if (_gross == null || _gross == '' || _gross == undefined || isNaN(_gross)) { _gross = "0"; }
        if (_concession == null || _concession == '' || _concession == undefined || isNaN(_concession)) { _concession = "0"; }
        if (_net == null || _net == '' || _net == undefined || isNaN(_net)) { _net = "0"; }
        if (_paid == null || _paid == '' || _paid == undefined || isNaN(_paid)) { _paid = "0"; }
        if (_due == null || _due == '' || _due == undefined || isNaN(_due)) { _due = "0"; }
        if (localStorage.getItem("ED") != null && localStorage.getItem("ED") != undefined && localStorage.getItem("ED") != '') {
            if (localStorage.getItem("ED") == "OPBillClientSide.aspx") {
                extendedDisplay.setData(5, 'SERVICES', $("#dvGrid").html());
                extendedDisplay.setData(6, 'Transactions', "<table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" width=\"100%\"><tr><td>Gross Amount :</td><td>" + _gross + "</td></tr><tr><td>Concession Amount :</td><td>" + _concession + "</td></tr><tr><td>Net Amount :</td><td>" + _net + "</td></tr><tr><td>Paid Amount :</td><td>" + _paid + "</td></tr><tr><td>Due Amount :</td><td>" + _due + "</td></tr></table>");
            }
            else if (localStorage.getItem("ED") == "OPConsultation1.aspx") {
                extendedDisplay.setData(5, 'CONSULTATIONS', $("#dvGrid").html());
                extendedDisplay.setData(6, 'Transactions', "<table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" width=\"100%\"><tr><td>Gross Amount :</td><td>" + _gross + "</td></tr><tr><td>Concession Amount :</td><td>" + _concession + "</td></tr><tr><td>Net Amount :</td><td>" + _net + "</td></tr><tr><td>Paid Amount :</td><td>" + _paid + "</td></tr><tr><td>Due Amount :</td><td>" + _due + "</td></tr></table>");
            }
            else if (localStorage.getItem("ED") == "OP_QUICK.aspx") {
                extendedDisplay.setData(10, 'SERVICES', $("#dvGrid").html());
                extendedDisplay.setData(11, 'Transactions', "<table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" width=\"100%\"><tr><td>Gross Amount :</td><td>" + _gross + "</td></tr><tr><td>Concession Amount :</td><td>" + _concession + "</td></tr><tr><td>Net Amount :</td><td>" + _net + "</td></tr><tr><td>Paid Amount :</td><td>" + _paid + "</td></tr><tr><td>Due Amount :</td><td>" + _due + "</td></tr></table>");
            }
            else if (localStorage.getItem("ED") == "OPDBill.aspx") {
                extendedDisplay.setData(10, 'SERVICES', $("#dvGrid").html());
                extendedDisplay.setData(11, 'Transactions', "<table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" width=\"100%\"><tr><td>Gross Amount :</td><td>" + _gross + "</td></tr><tr><td>Concession Amount :</td><td>" + _concession + "</td></tr><tr><td>Net Amount :</td><td>" + _net + "</td></tr><tr><td>Paid Amount :</td><td>" + _paid + "</td></tr><tr><td>Due Amount :</td><td>" + _due + "</td></tr></table>");
            }
        }
    }
    function PaymentModeDisplay() {
        $('[id*=lblquick]').css('display', 'none');
        $('[id*=lblpasCard]').css('display', 'none');
        /* added onn03.10.2016 */
        $('[id*=divchequeauth]').css('display', 'none');
        /*up to here */
        $('[id*=lbladvanced]').trigger('click');
        $('[id*=divquickleft]').css('width', '100%');
        var docname = document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnDocName').value;
        if (docname == "IpAdvance" || docname == "Refund") {
            document.getElementById('' + ctrlcom + '_ReceiptControl2_lblamtname').innerHTML = "Amt/Charges(%)";
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtamt').style.width = '74%';
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtsrvcharges').style.width = '19%';
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtsrvcharges').style.display = '';
            if (getParameterByName("MODE") == "VIEW") {
                document.getElementById('' + ctrlcom + '_ReceiptControl2_txtTenderedAmt').disabled = true;
                document.getElementById('' + ctrlcom + '_ReceiptControl2_txtTenderedAmt').className = 'grey';
            }
        }
        if (docname == 'OP' || docname == "Cons") {
            if (document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnPasIntgrtnReq').value == "True") {
                $("#lblpasCard").show(); $("#divpasbutton").show();
            }
            else {
                $("#lblpasCard").hide(); $("#divpasbutton").hide();
            }
        }
        else {
            $("#lblpasCard").hide(); $("#divpasbutton").hide();
        }
    }
    var cnt = 0;
    function onexpiryDateCalender() {
        if (cnt == 0) {
            $('[id*=ui-datepicker-div]').show();
            cnt = 1;
        }
        else {
            $('[id*=ui-datepicker-div]').hide();
            cnt = 0;
        }
    }
    var PGatewayUrl = "";
    $(document).ready(function (e) {
        var dateformat = document.getElementById('<%= hdndateformat.ClientID %>').value;
        var split = dateformat.split(' ');
        var current_format = split[0];
        PGatewayUrl = document.getElementById('<%= hdnpmtgatewayurl.ClientID %>').value;
        mode = "Q";
        var doc_form_cd_machine = getParameterByName("DOC_FORM_CD");
        if (doc_form_cd_machine == 'FO_OUTSTANDING' || doc_form_cd_machine == 'FOIPADV' || doc_form_cd_machine == 'FO_REFUND' || doc_form_cd_machine == 'Rk9PUEFEVg==' || doc_form_cd_machine == 'FOOPADV') {
            mode = "A";
        }
        var key = (e.keyCode ? e.keyCode : e.charCode);
        $('[id*=txtcardExpiredt]').datepicker({
            changeMonth: true,
            changeYear: true,
            dateFormat: current_format,
            minDate: new Date,
            onSelect: function () {
                $('[id*=ui-datepicker-div]').hide(); cnt = 0;
                OnNullValue(this)
            }
        });
        $('[id*=txtExpDt]').datepicker({
            changeMonth: true,
            changeYear: true,
            dateFormat: current_format,
            minDate: new Date,
            onSelect: function () {
                $('[id*=ui-datepicker-div]').hide(); cnt = 0;
                OnNullValue(this)
            }
        });
        $('[id*=txtchequedt]').datepicker({
            changeMonth: true,
            changeYear: true,
            dateFormat: current_format,
            onSelect: function () {
                $('[id*=ui-datepicker-div]').hide(); cnt = 0;
                OnNullValue(this)
                onexpiryvalidation(this)
            }
        });
        $('[id*=txtchequerealizedt]').datepicker({
            changeMonth: true,
            changeYear: true,
            dateFormat: current_format,
            onSelect: function () {
                $('[id*=ui-datepicker-div]').hide(); cnt = 0;
                OnNullValue(this)
            }
        });
        var insrenceAmt = 0;
        $('table[id*=GvIns] tr:has(td)').each(function () {
            var insamt = $(this).closest('tr').find('[id*=lblinsamt]').text();
            if (insamt == undefined || insamt == null || insamt == '') { insamt = 0; }
            insrenceAmt = parseFloat(insrenceAmt) + parseFloat(insamt);
        });
        if (insrenceAmt == undefined || insrenceAmt == null || insrenceAmt == '') { insrenceAmt = "0"; }

        if (getParameterByName("MODE") == "VIEW" || getParameterByName("MODE") == "VIEW_OP") {/*added by sitaram*/
            if (parseFloat(insrenceAmt) > 0) {
                //ClickEventOfReceipt();
            }
        }
        else if (getParameterByName("MODE") != "VIEW" && getParameterByName("MODE") != "VIEW_OP") {
            ClickEventOfReceipt();
        }
        else { ClickEventOfReceipt(); }

        //      document.getElementById('' + ctrlcom + '_ReceiptControl2_ucdueauth_txtSearchControl').disabled = true;
        //     document.getElementById('lk_btn_ctl00_ContentPlaceHolder1_ReceiptControl2_ucdueauth').disabled = true;
        document.getElementById('' + ctrlcom + '_ReceiptControl2_ucdueauth_txtSearchControl').className = 'grey';
        document.getElementById('' + ctrlcom + '_ReceiptControl2_ddcardType').disabled = true;
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtcardExpiredt').disabled = true;
        document.getElementById('' + ctrlcom + '_ReceiptControl2_ddbankName').disabled = true;
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtcardNoCmp').disabled = true;
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtcardAuther').disabled = true;
        var form_name = $('#' + ctrlcom + '_ReceiptControl2_hdnDocName').val();
        if (form_name == "Refund" || form_name == "Refund Centralized" || form_name == "Refunds") {
            document.getElementById('' + ctrlcom + '_ReceiptControl2_lbltenderamount').innerHTML = "Refunded Amount";
        } else {
            document.getElementById('' + ctrlcom + '_ReceiptControl2_lbltenderamount').innerHTML = "Tendered Amt";
        }
        if (form_name == 'OP' || form_name == 'Cons') {
            if (document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnPasIntgrtnReq').value == "True") {
                $("#lblpasCard").show(); $("#divpasbutton").show();
            }
            else {
                $("#lblpasCard").hide(); $("#divpasbutton").hide();
            }
            if (getParameterByName("MODE") == "VIEW" || getParameterByName("MODE") == "view" || getParameterByName("MODE") == "V" || getParameterByName("MODE") == "VIEW_OP") {
                $("#divpasbutton").hide();
            }
        }
        else {
            $("#lblpasCard").hide(); $("#divpasbutton").hide();
        }
        if (document.getElementById('<%= hdnMapcurrency.ClientID %>').value == 'Yes') {
            document.getElementById('<%= ddlCurrency.ClientID %>').selectedIndex = 0;
        }
    });
    $(function () {
        $(document).keyup(function (e) {
            var key = (e.keyCode ? e.keyCode : e.charCode);
            if (key == 119) {
                if (document.getElementById('<%= hdnupdatestatus.ClientID %>').value == 'Y') {
                    UpdateTransactionDetails();
                }
                else {
                    NewAddTransactionDetails();
                }
            }
        });
    });
    function ClickEventOfReceipt() {
        var DiscountIdValueFlag = false;
        $("#lblquick").click(function () {
            mode = "Q";
            var form_name = $('#' + ctrlcom + '_ReceiptControl2_hdnDocName').val();
            if (form_name == 'NewChangeReceipt') {/* added by pushkar let me know before uncomment it */
                return false;
            }
            if (getParameterByName("MODE") == "" || getParameterByName("MODE") == null || getParameterByName("MODE") == undefined) {
                DiscountIdValueFlag = false;

                var cmpdiscpercorporate = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpartydis').value;
                if (cmpdiscpercorporate == undefined || cmpdiscpercorporate == null || cmpdiscpercorporate == '') { cmpdiscpercorporate = "0"; }
                if (parseFloat(cmpdiscpercorporate) > 0) {
                    DiscountIdValueFlag = true;
                }
                $("table[id*=gvMultipleConcession] tr:has(td)").each(function (e) {
                    var DiscountIdValue = $(this).closest('tr').find("[id*=ddlMultiDiscounttype]").val();
                    DiscountIdValue = DiscountIdValue == undefined ? 0 : DiscountIdValue;
                    if (DiscountIdValue > 0) {
                        DiscountIdValueFlag = true;
                    }
                    /**swipe func for quickmode**/
                    VisibleSwipe();
                });
                if (DiscountIdValueFlag == false) {
                    ClearTransactioncontrols('Quick');
                    LblQuiCk();
                }
                onRedColors();
            }
            else if (getParameterByName("MODE") == "VIEW" || getParameterByName("MODE") == "VIEW_OP") {

            }
            else {
                LblQuiCk();
            }
            if (localStorage.getItem("ED") != null && localStorage.getItem("ED") != undefined && localStorage.getItem("ED") != '') {
                OnExtendAmounts();
            }
        });
        $("#lbladvanced").click(function () {
            mode = "A";
            var form_name = $('#' + ctrlcom + '_ReceiptControl2_hdnDocName').val();
            if (form_name == 'NewChangeReceipt') {/* added by pushkar let me know before uncomment it */
                return false;
            }
            if (getParameterByName("MODE") == "" || getParameterByName("MODE") == null || getParameterByName("MODE") == undefined) {
                /*ClearTransactionGrid();  comm on 27.07.2016*/
                ClearTransactioncontrols('Advanced');
                if (form_name == "IPFINAL") {
                    LblAdvancedFinalBill();
                } else {
                    LblAdvanced();
                }
                /***swipe func for advance mode*/
                if (document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnDocName').value != 'CorporateCheckEntry') {

                    VisibleSwipe();
                }
                DisplayMultiDiscount();
                onRedColors();
                if (document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnDocName').value == 'Cons' || document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnDocName').value == 'OP') {
                    if (parseFloat(document.getElementById('<%= txtcmpDue.ClientID %>').value) > 0) {
                        document.getElementById('<%= txtDuePartyAuthname.ClientID %>').value = document.getElementById('' + ctrlcom + '_uccorporate_CmpLookup_txtSearchControl').value; //$('#' + ctrlcom + '_CmpLookup_txtSearchControl').val();
                    }
                }
                else if (document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnDocName').value == 'OPQUICK') {
                    if (parseFloat(document.getElementById('<%= txtcmpDue.ClientID %>').value) > 0) {
                        document.getElementById('<%= txtDuePartyAuthname.ClientID %>').value = $('#' + ctrlcom + '_EmployerInfo1_EmployerControl1_txtSearchControl').val();
                    }
                }
                if (document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnDocName').value == 'Cons' || document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnDocName').value == 'OP') {
                    if (parseFloat(document.getElementById('<%= txtpartydis.ClientID %>').value) > 0) {
                        document.getElementById('<%= txtDiscAuthPartyName.ClientID %>').value = document.getElementById('' + ctrlcom + '_uccorporate_CmpLookup_txtSearchControl').value; //$('#' + ctrlcom + '_CmpLookup_txtSearchControl').val();
                    }
                }
            }
            else if (getParameterByName("MODE") == "VIEW" || getParameterByName("MODE") == "VIEW_OP") {

            }
            else {
                LblAdvanced();
            }
            if (getParameterByName("MODE") == "VIEW") {
                if (document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnHospitalPayment').value == 'PAYMENT') {
                    $('[id*=quick_info]').css('display', 'none');
                }
            }
            if (localStorage.getItem("ED") != null && localStorage.getItem("ED") != undefined && localStorage.getItem("ED") != '') {
                OnExtendAmounts();
            }
        });

        $("#lblpasCard").click(function () {
            $(".col-hide > tbody > tr:nth-child(3),.col-hide > tbody > tr:nth-child(4),.col-hide > tbody > tr:nth-child(5),.col-hide > tbody > tr:nth-child(6),.col-hide > tbody > tr:nth-child(7),.col-hide > tbody > tr:nth-child(8),.col-hide > tbody > tr:nth-child(9),.col-hide > tbody > tr:nth-child(12),.col-hide > tbody > tr:nth-child(13)").show();
            $("#payitem2,._quick-div").hide();
            $("._mdisc").css('width', '75%');
            $("#payitem1,#payitem3").hide();
            $("#divpasCard").show();
            $('[id*=ConcessionAmt]')[0].style.display = 'none';
            $("#lblpasCard").addClass("select"); $("#lbladvanced,#lblmdis,#lblquick").removeClass("select");
            if (getParameterByName("MODE") != "VIEW") {
                PASTotlAmts();
            }
        });
    }
    function PASTotlAmts() {
        var grossamt = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtgrosstotal').value;
        var insgrossamt = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtparygross').value;
        var concessionamt = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatgrossamt').value;
        var netamt = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatNet').value;
        var partyamt = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtparygross').value;
        if (partyamt == undefined || partyamt == null || partyamt == '' || isNaN(partyamt)) { partyamt = "0"; }
        if (grossamt == undefined || grossamt == null || grossamt == '' || isNaN(grossamt)) { grossamt = "0"; }
        if (concessionamt == undefined || concessionamt == null || concessionamt == '' || isNaN(concessionamt)) { concessionamt = "0"; }
        if (netamt == undefined || netamt == null || netamt == '' || isNaN(netamt)) { netamt = "0"; }
        document.getElementById('' + ctrlcom + '_ReceiptControl2_lblGrossAmt').value = grossamt;
        document.getElementById('' + ctrlcom + '_ReceiptControl2_lblConcAmt').value = concessionamt;
        document.getElementById('' + ctrlcom + '_ReceiptControl2_lblNetAmt').value = parseFloat(grossamt) - parseFloat(concessionamt); //  netamt;
        document.getElementById('' + ctrlcom + '_ReceiptControl2_lblInsuranceAmt').value = insgrossamt;
        document.getElementById('' + ctrlcom + '_ReceiptControl2_lblcopayamt').value = parseFloat(netamt); //  grossamt;
    }
    function DisplayMultiDiscount() {
        var DisCountShowFlag = false;
        var ChkmultiVal = $('#' + ctrlcom + '_ReceiptControl2_chkismultiple')[0].checked;
        $("table[id*=gvMultipleConcession] tr:has(td)").each(function (e) {
            if (DisCountShowFlag == false) {
                DisCountShowFlag = false;  /* added on 27.08.2016 */
                var DiscountId = $(this).closest('tr').find("[id*=ddlMultiDiscounttype]").val();
                if (DiscountId > 0) {
                    DisCountShowFlag = true;
                    ChkmultiVal = true;
                    $('#' + ctrlcom + '_ReceiptControl2_chkismultiple')[0].checked = true;
                }
            }
        });
        if (DisCountShowFlag == true) {
            $('#' + ctrlcom + '_ReceiptControl2_Div2')[0].style.display = 'block';
        } else {
            $('#' + ctrlcom + '_ReceiptControl2_Div2')[0].style.display = 'none';
        }
        if (ChkmultiVal == true) {
            $('#' + ctrlcom + '_ReceiptControl2_Div2')[0].style.display = 'block';
        }
        else {
            $('#' + ctrlcom + '_ReceiptControl2_Div2')[0].style.display = 'none';
        }
    }


    function LblAdvanced() {
        if (getParameterByName('MODE') != 'VIEW') {
            if (document.getElementById('<%= hdnbaseCurrency.ClientID %>').value == "" || document.getElementById('<%= hdnbaseCurrency.ClientID %>').value == undefined || document.getElementById('<%= hdnbaseCurrency.ClientID %>').value == null) {
                document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlCurrency').value = 1;
            }
            else {
                GetExchangeRate();
            }
        }
        lblAdvanceFormat();
        if (document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnDocName').value == 'REG' || document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnDocName').value == 'OP' || document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnDocName').value == 'OPQUICK' || document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnDocName').value == 'Cons') {
            var NetAmt = $('#' + ctrlcom + '_ReceiptControl2_txtpatNet').val();
            var CmpNetAmt = $('#' + ctrlcom + '_ReceiptControl2_txtcmpNet').val();
            /*Naresh Changed*/
            var insrenceAmt = 0;
            $('table[id*=GvIns] tr:has(td)').each(function () {
                var insamt = $(this).closest('tr').find('[id*=lblinsamt]').text();
                if (insamt == undefined || insamt == null || insamt == '') { insamt = 0; }
                insrenceAmt = parseFloat(insrenceAmt) + parseFloat(insamt);
            });

            var CmpPaidAmt = parseFloat(insrenceAmt);
            CmpPaidAmt = typeof CmpPaidAmt == 'string' ? (typeof CmpPaidAmt == 'undefined' || CmpPaidAmt.trim() == '' ? 0 : parseFloat(CmpPaidAmt)) : (typeof CmpPaidAmt == 'object' ? 0 : parseFloat(CmpPaidAmt));
            NetAmt = typeof NetAmt == 'string' ? (typeof NetAmt == 'undefined' || NetAmt.trim() == '' ? 0 : parseFloat(NetAmt)) : (typeof NetAmt == 'object' ? 0 : parseFloat(NetAmt));
            CmpNetAmt = typeof CmpNetAmt == 'string' ? (typeof CmpNetAmt == 'undefined' || CmpNetAmt.trim() == '' ? 0 : parseFloat(CmpNetAmt)) : (typeof CmpNetAmt == 'object' ? 0 : parseFloat(CmpNetAmt));
            var cmppaidamt = parseFloat(CmpPaidAmt);
            if (getParameterByName('MODE') != 'VIEW' && getParameterByName('MODE') != 'VIEW_OP') {

                var pattax = $('#' + ctrlcom + '_ReceiptControl2_txtpatTotTax').val();
                if (pattax == undefined || pattax == null || pattax == "" || isNaN(pattax)) { pattax = "0"; }
                var cmptax = $('#' + ctrlcom + '_ReceiptControl2_txtcmpTotTax').val();
                if (cmptax == undefined || cmptax == null || cmptax == "" || isNaN(cmptax)) { cmptax = "0"; }
                if (parseFloat(pattax) == 0 && parseFloat(cmptax) == 0) {
                    var pattax = document.getElementById('' + ctrlcom + '_ReceiptControl2_txttaxamt').value;
                    cmptax = 0;
                }
                if (pattax == undefined || pattax == null || pattax == "" || isNaN(pattax)) { pattax = "0"; }
                $('#' + ctrlcom + '_ReceiptControl2_txtpatientReceiptAmt').val(0);
                //$('#' + ctrlcom + '_ReceiptControl2_txtTotalReciptAmt').val(0);
                if (document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnisallowgst').value.toUpperCase() == "YES") {
                    $('#' + ctrlcom + '_ReceiptControl2_txtpatdue').val(Math.round(parseFloat(NetAmt) + parseFloat(pattax)));
                    document.getElementById('<%= hdnDueAmt.ClientID %>').value = Math.round(parseFloat(NetAmt) + parseFloat(pattax));
                } else {
                    $('#' + ctrlcom + '_ReceiptControl2_txtpatdue').val(NetAmt);
                    document.getElementById('<%= hdnDueAmt.ClientID %>').value = NetAmt;
                }
                //$('#' + ctrlcom + '_ReceiptControl2_txtTotalDue').val(NetAmt + CmpNetAmt);
                if (parseFloat(cmppaidamt) > 0) {
                    $('#' + ctrlcom + '_ReceiptControl2_txtTotalDue').val(parseFloat(NetAmt));
                }
                else {
                    if (document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnisallowgst').value.toUpperCase() == "YES") {

                        $('#' + ctrlcom + '_ReceiptControl2_txtTotalDue').val(Math.round(parseFloat(NetAmt) + parseFloat(CmpNetAmt) + parseFloat(pattax) + parseFloat(cmptax)));
                        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtCurrAmt').value = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatdue').value;
                        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtreqamtkyd').value = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatdue').value;

                    }
                    else {
                        $('#' + ctrlcom + '_ReceiptControl2_txtTotalDue').val(parseFloat(NetAmt) + parseFloat(CmpNetAmt));
                        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtCurrAmt').value = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatNet').value;
                        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtreqamtkyd').value = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatNet').value;
                    }
                }
                $('#' + ctrlcom + '_ReceiptControl2_txtTotalNet').val(NetAmt + CmpNetAmt);


                $('#' + ctrlcom + '_ReceiptControl2_txtreceiptAmount').val('0');
                if (document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnDocName').value != 'REG') {
                    if (document.getElementById('' + ctrlcom + '_UCServices_ddlPatientType').value == '2') {
                        CalculateCreditLimitAmt();
                    }
                }
            }
        }
    }
    function lblQuickFormat() {
        $(".col-hide > tbody > tr:nth-child(3),.col-hide > tbody > tr:nth-child(4),.col-hide > tbody > tr:nth-child(5),.col-hide > tbody > tr:nth-child(6),.col-hide > tbody > tr:nth-child(7),.col-hide > tbody > tr:nth-child(8),.col-hide > tbody > tr:nth-child(9),.col-hide > tbody > tr:nth-child(12),.col-hide > tbody > tr:nth-child(13)").show();
        $("#payitem2,._quick-div").show();
        $("._mdisc").css('width', '75%');
        $("#payitem1,#payitem3,#divpasCard").hide();
        $('[id*=ConcessionAmt]')[0].style.display = 'none';
        $("#lblquick").addClass("select"); $("#lbladvanced,#lblmdis,#lblpasCard").removeClass("select");

    }

    function LblQuiCk() {

        if (document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnDocName') != null) {
            if (document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnDocName').value != 'Cons') {
                var _discPer = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatdis').value;
                var _discamt = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatgrossamt').value;
                if ((parseFloat(_discPer) > 0 && parseFloat(_discamt) > 0) || (parseFloat(_discamt) > 0)) {
                    //lblQuickFormat(); /* If you want to uncomment this plz inform to Shiva */
                }
                else if (document.getElementById('' + ctrlcom + '_ReceiptControl2_chkismultiple').checked == true) {
                    /*lblQuickFormat();*//* coom on 27.08.2016 */
                    /* added on 27.08.2016 */
                    CalCulatelblquickAmt();
                    $('#' + ctrlcom + '_ReceiptControl2_txtcashAmt').val(0);
                    $('#' + ctrlcom + '_ReceiptControl2_txtCardAmt').val(0);
                    /* up to here */
                }
                else {
                    CalCulatelblquickAmt();
                    $('#' + ctrlcom + '_ReceiptControl2_txtcashAmt').val(0);
                    $('#' + ctrlcom + '_ReceiptControl2_txtCardAmt').val(0);
                }
            }
            else {
                var _discPer = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatdis').value;
                var _discamt = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatgrossamt').value;
                if (parseFloat(_discPer) > 0 && parseFloat(_discamt) > 0) {
                    //lblQuickFormat(); /* If you want to uncomment this plz inform to Shiva */
                }
                else {
                    CalCulatelblquickAmtEmployeCheck();
                    $('#' + ctrlcom + '_ReceiptControl2_txtcashAmt').val(0);
                    $('#' + ctrlcom + '_ReceiptControl2_txtCardAmt').val(0);
                }
            }
        }
        else {
            var _discPer = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatdis').value;
            var _discamt = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatgrossamt').value;
            if (parseFloat(_discPer) > 0 && parseFloat(_discamt) > 0) {
                lblQuickFormat();
            }
            else {
                CalCulatelblquickAmt();
                $('#' + ctrlcom + '_ReceiptControl2_txtcashAmt').val(0);
                $('#' + ctrlcom + '_ReceiptControl2_txtCardAmt').val(0);
                if (document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnDocName').value != 'IPFINAL') {
                    CalculateGridAmtCount();
                }
            }
        }
    }

    function CalCulatelblquickAmt() {
        if (document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnDocName').value == 'OP' || document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnDocName').value == 'Cons') {
            var insrenceAmt = 0;
            $('table[id*=GvIns] tr:has(td)').each(function () {
                var insamt = $(this).closest('tr').find('[id*=lblinsamt]').text();
                if (insamt == undefined || insamt == null || insamt == '') { insamt = 0; }
                insrenceAmt = parseFloat(insrenceAmt) + parseFloat(insamt);
            });
            if (insrenceAmt == undefined || insrenceAmt == null || insrenceAmt == '') { insrenceAmt = "0"; }
            var cmpdiscpercorporate = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpartydis').value;
            if (cmpdiscpercorporate == undefined || cmpdiscpercorporate == null || cmpdiscpercorporate == '') { cmpdiscpercorporate = "0"; }


            if (parseFloat(insrenceAmt) > 0) {

            }
            else if (parseFloat(cmpdiscpercorporate) > 0) {

            }
            else {

                ClearTransactionGrid();
            }
        } else {
            ClearTransactionGrid();
        }
        $(".col-hide > tbody > tr:nth-child(3),.col-hide > tbody > tr:nth-child(4),.col-hide > tbody > tr:nth-child(5),.col-hide > tbody > tr:nth-child(6),.col-hide > tbody > tr:nth-child(7),.col-hide > tbody > tr:nth-child(8),.col-hide > tbody > tr:nth-child(10),.col-hide > tbody > tr:nth-child(13),.col-hide > tbody > tr:nth-child(14),.col-hide > tbody > tr:nth-child(14)").hide();
        $("#payitem1,._quick-div").show();
        $("._mdisc").css('width', '75%');
        $("#payitem2,#payitem3,#divpasCard").hide();
        $("#lblquick").addClass("select");
        $("#lbladvanced,#lblmdis,#lblpasCard").removeClass("select");
        if (getParameterByName("MODE") != "VIEW" && getParameterByName("MODE") != "VIEW_OP") {

            if (document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnisallowgst').value.toUpperCase() == "YES") {
                document.getElementById('<%= txtpatgross.ClientID %>').value = document.getElementById('<%= txtpatgross.ClientID %>').value;
            }
            else {
                document.getElementById('<%= txtpatgross.ClientID %>').value = document.getElementById('<%= hdnPayAmt.ClientID %>').value;
            }
            var patgross = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatgross').value;
            var parygross = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtparygross').value;
            if (patgross == '' || patgross == null || patgross == undefined || patgross == 'NaN') { patgross = 0; }
            if (parygross == '' || parygross == null || parygross == undefined || parygross == 'NaN') { parygross = 0; }
            var cmpnyGross = parseFloat(patgross) + parseFloat(parygross);
            if (parseFloat(cmpnyGross) > 0) { } else { cmpnyGross = 0; }
            document.getElementById('<%= txtgrosstotal.ClientID %>').value = parseFloat(cmpnyGross);
            $('#' + ctrlcom + '_txtconamt').val('0');
            document.getElementById('<%= txtnetamt.ClientID %>').value = document.getElementById('<%= hdnPayAmt.ClientID %>').value;
            document.getElementById('<%= txtpatNet.ClientID %>').value = document.getElementById('<%= hdnPayAmt.ClientID %>').value;
            document.getElementById('<%= txtTotalNet.ClientID %>').value = document.getElementById('<%= hdnPayAmt.ClientID %>').value;
            document.getElementById('<%= hdnNetAmt.ClientID %>').value = document.getElementById('<%= hdnPayAmt.ClientID %>').value;
            if (document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnDocName').value == 'IPFINAL') {
                var AdvAmount = document.getElementById('' + ctrlcom + '_txtAdvance').value;
                var ClaimAmt = $('[id*=hdnClaimAdjAmt]').val();
                if (ClaimAmt == '' || ClaimAmt == null || ClaimAmt == undefined) { ClaimAmt = 0; }
                var AdvAmount = parseFloat(AdvAmount) + parseFloat(ClaimAmt);
                var netAmt = document.getElementById('<%= hdnPayAmt.ClientID %>').value;
                var dueamt = setProperDecimalsVal(parseFloat(netAmt) - parseFloat(AdvAmount));
                if (parseFloat(dueamt) > 0) {
                    document.getElementById('<%= txtpatdue.ClientID %>').value = dueamt;
                    document.getElementById('<%= txtTotalDue.ClientID %>').value = dueamt;
                    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtDueamount').value = dueamt;
                    document.getElementById('<%= txtdueamt.ClientID %>').value = dueamt;
                    document.getElementById('<%= hdnDueAmt.ClientID %>').value = dueamt;
                }
                else {
                    document.getElementById('<%= txtpatdue.ClientID %>').value = 0;
                    document.getElementById('<%= txtTotalDue.ClientID %>').value = 0;
                    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtDueamount').value = 0;
                    document.getElementById('<%= txtdueamt.ClientID %>').value = 0;
                    document.getElementById('<%= hdnDueAmt.ClientID %>').value = 0;
                }
            }
            else {
                //                document.getElementById('<%= txtpatdue.ClientID %>').value = document.getElementById('<%= hdnPayAmt.ClientID %>').value;
                //                document.getElementById('<%= txtdueamt.ClientID %>').value = document.getElementById('<%= hdnPayAmt.ClientID %>').value;
                //                document.getElementById('<%= hdnDueAmt.ClientID %>').value = document.getElementById('<%= hdnPayAmt.ClientID %>').value;
                $('#' + ctrlcom + '_txtcardNoCmp').val('');
                var txtpatdue = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatdue').value;
                var txtcmpdue = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtcmpDue').value;
                if (txtpatdue == '' || txtpatdue == null || txtpatdue == undefined || txtpatdue == 'NaN') { txtpatdue = 0; }
                if (txtcmpdue == '' || txtcmpdue == null || txtcmpdue == undefined || txtcmpdue == 'NaN') { txtcmpdue = 0; }
                var cmpnyDue = parseFloat(txtpatdue) + parseFloat(txtcmpdue);
                if (parseFloat(cmpnyDue) > 0) { } else { cmpnyDue = 0; }
                // document.getElementById('<%= txtTotalDue.ClientID %>').value = parseFloat(cmpnyDue);   /*document.getElementById('<%= hdnPayAmt.ClientID %>').value;*/
            }
        }
    }
    function CalCulatelblquickAmtEmployeCheck() {
        if (document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnDocName').value == 'OP' || document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnDocName').value == 'Cons') {
            var insrenceAmt = 0;
            $('table[id*=GvIns] tr:has(td)').each(function () {
                var insamt = $(this).closest('tr').find('[id*=lblinsamt]').text();
                if (insamt == undefined || insamt == null || insamt == '') { insamt = 0; }
                insrenceAmt = parseFloat(insrenceAmt) + parseFloat(insamt);
            });
            if (insrenceAmt == undefined || insrenceAmt == null || insrenceAmt == '') { insrenceAmt = "0"; }
            if (parseFloat(insrenceAmt) > 0) {

            } else {

                ClearTransactionGrid();
            }
        } else {
            ClearTransactionGrid();
        }
        $(".col-hide > tbody > tr:nth-child(3),.col-hide > tbody > tr:nth-child(4),.col-hide > tbody > tr:nth-child(5),.col-hide > tbody > tr:nth-child(6),.col-hide > tbody > tr:nth-child(7),.col-hide > tbody > tr:nth-child(8),.col-hide > tbody > tr:nth-child(10),.col-hide > tbody > tr:nth-child(13),.col-hide > tbody > tr:nth-child(14),.col-hide > tbody > tr:nth-child(15)").hide();
        $("#payitem1,._quick-div").show();
        $("._mdisc").css('width', '75%');
        $("#payitem2,#payitem3,#divpasCard").hide();
        $("#lblquick").addClass("select");
        $("#lbladvanced,#lblmdis,#lblpasCard").removeClass("select");
        if (getParameterByName("MODE") != "VIEW") {
            var PartyGrossAmt = document.getElementById('<%= txtparygross.ClientID %>').value;
            var partyNetamt = document.getElementById('<%= txtcmpNet.ClientID %>').value;
            var PartyDueAmt = document.getElementById('<%= txtcmpDue.ClientID %>').value;
            PartyGrossAmt = typeof PartyGrossAmt == 'string' ? (typeof PartyGrossAmt == 'undefined' || PartyGrossAmt.trim() == '' ? 0 : parseFloat(PartyGrossAmt)) : (typeof PartyGrossAmt == 'object' ? 0 : parseFloat(PartyGrossAmt));
            partyNetamt = typeof partyNetamt == 'string' ? (typeof partyNetamt == 'undefined' || partyNetamt.trim() == '' ? 0 : parseFloat(partyNetamt)) : (typeof partyNetamt == 'object' ? 0 : parseFloat(partyNetamt));
            PartyDueAmt = typeof PartyDueAmt == 'string' ? (typeof PartyDueAmt == 'undefined' || PartyDueAmt.trim() == '' ? 0 : parseFloat(PartyDueAmt)) : (typeof PartyDueAmt == 'object' ? 0 : parseFloat(PartyDueAmt));
            document.getElementById('<%= txtpatgross.ClientID %>').value = document.getElementById('<%= hdnPayAmt.ClientID %>').value;
            $('#' + ctrlcom + '_txtconamt').val('0');
            document.getElementById('<%= txtnetamt.ClientID %>').value = document.getElementById('<%= hdnPayAmt.ClientID %>').value;
            document.getElementById('<%= txtpatNet.ClientID %>').value = document.getElementById('<%= hdnPayAmt.ClientID %>').value;
            document.getElementById('<%= txtTotalNet.ClientID %>').value = document.getElementById('<%= hdnPayAmt.ClientID %>').value;
            document.getElementById('<%= txtpatdue.ClientID %>').value = document.getElementById('<%= hdnPayAmt.ClientID %>').value;
            document.getElementById('<%= txtgrosstotal.ClientID %>').value = parseFloat(document.getElementById('<%= hdnPayAmt.ClientID %>').value) + PartyGrossAmt;

            document.getElementById('<%= hdnNetAmt.ClientID %>').value = document.getElementById('<%= hdnPayAmt.ClientID %>').value;
            document.getElementById('<%= txtdueamt.ClientID %>').value = document.getElementById('<%= hdnPayAmt.ClientID %>').value;
            document.getElementById('<%= hdnDueAmt.ClientID %>').value = document.getElementById('<%= hdnPayAmt.ClientID %>').value;
            $('#' + ctrlcom + '_txtcardNoCmp').val('');
            document.getElementById('<%= txtTotalDue.ClientID %>').value = parseFloat(document.getElementById('<%= hdnPayAmt.ClientID %>').value) + PartyDueAmt;
        }
    }

    function lblAdvanceFormat() {

        $(".col-hide > tbody > tr:nth-child(3),.col-hide > tbody > tr:nth-child(4),.col-hide > tbody > tr:nth-child(5),.col-hide > tbody > tr:nth-child(6),.col-hide > tbody > tr:nth-child(7),.col-hide > tbody > tr:nth-child(8),.col-hide > tbody > tr:nth-child(9),.col-hide > tbody > tr:nth-child(12),.col-hide > tbody > tr:nth-child(13)").show();
        $("#payitem2,._quick-div").show();
        $("._mdisc").css('width', '75%');
        $("#payitem1,#payitem3,#divpasCard").hide();
        $("#lbladvanced").addClass("select");
        $('[id*=ConcessionAmt]')[0].style.display = 'none';
        $("#lblquick,#lblmdis,#lblpasCard").removeClass("select");
        if (getParameterByName("MODE") != "VIEW") {
            if (document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnHospitalPayment').value == 'PAYMENT') {
                $('[id*=quick_info]').css('display', 'none');
                $('[id*=divquickleft]').css('width', '100%');
            }
        }
        if (document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnDocName').value == 'SUPPBILL') {
            $('#' + ctrlcom + '_ReceiptControl2_ddlDiscountType').parent().parent().hide();
            $('#' + ctrlcom + '_ReceiptControl2_txtpatdis').parent().parent().hide();
            $('#' + ctrlcom + '_ReceiptControl2_txtpatgrossamt').parent().parent().hide();
            $('#' + ctrlcom + '_ReceiptControl2_ucdueauth_txtSearchControl').parent().parent().parent().hide();
            $('#' + ctrlcom + '_ReceiptControl2_txtDiscAuthPartyName').parent().parent().hide();
        }

        if (document.getElementById('' + ctrlcom + '_umrPatientDetails_HdnHealthcardno') != null) {
            var hccard = document.getElementById('' + ctrlcom + '_umrPatientDetails_HdnHealthcardno').value;
            var ruleid = $('#' + ctrlcom + '_UCServices_hdnconruleid').val();
            if (ruleid == "" || ruleid == undefined || ruleid == null || ruleid == "undefined") { ruleid = 0; }
            if (hccard == "" || hccard == undefined || hccard == null) { hccard = 0; }
            if (hccard != 0 || ruleid != 0) {
                document.getElementById('ctl00_ContentPlaceHolder1_ReceiptControl2_ddlDiscountType').disabled = true;
            }
        }
    }

    var ChackflagMul = false;
    function CalCulatelblmdisAmt() {
        var name = document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnDocName').value;
        if (name == "REG") {
            $("#lbladvanced,#lblmdis").removeClass("select");
        } else {
            $("table[id*=gvServices] tr:has(td)").each(function (e) {
                if ($(this).closest("tr").find("input[type=hidden][id*=hdnServiceID]").val() > 0) {
                    ChackflagMul = true;
                }
            });
            if (ChackflagMul == true) {
                $(".col-hide > tbody > tr:nth-child(3),.col-hide > tbody > tr:nth-child(4),.col-hide > tbody > tr:nth-child(5),.col-hide > tbody > tr:nth-child(6),.col-hide > tbody > tr:nth-child(7),.col-hide > tbody > tr:nth-child(8),.col-hide > tbody > tr:nth-child(9),.col-hide > tbody > tr:nth-child(12),.col-hide > tbody > tr:nth-child(13)").hide();
                /*$("#payitem3").show();*/
                $("#payitem1,#payitem2,._quick-div,#divpasCard").hide();
                $("#lblmdis").addClass("select");
                $("#lblquick,#lbladvanced,#lblpasCard").removeClass("select");
                $("._mdisc").css('width', '100%');
            }
        }
    }
    function ClearTransactioncontrols(obj) {
        /*Quick mode controls*/
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtcashAmt').value = '0';
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtCardAmt').value = '0';
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtsrvcharges').value = '0';
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtcardNoCmp').value = '';
        document.getElementById('' + ctrlcom + '_ReceiptControl2_ddcardType').value = 0;
        document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlcrdtype').value = 0;
        document.getElementById('' + ctrlcom + '_ReceiptControl2_ddbankName').value = 0;
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtcardExpiredt').value = '';
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtcardAuther').value = '';
        document.getElementById('' + ctrlcom + '_ReceiptControl2_chkotpreq').checked = false;
        document.getElementById('' + ctrlcom + '_ReceiptControl2_chkotpadvanced').checked = false;
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtadjustmentamt').value = '';
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtotp').value = '';
        tdquickotp.style.display = 'none';
        tdquickotpreq.style.display = 'none';
        tdchkotpadvanced.style.display = 'none';
        document.getElementById('tdadv').style.display = 'none';
        document.getElementById('tdadvcell').style.display = 'none';
        /*document.getElementById('' + ctrlcom + '_ReceiptControl2_uccardAuther_txtSearchControl').value = '';
        document.getElementById('' + ctrlcom + '_ReceiptControl2_uccardAuther__hiddenID').value = '';
        document.getElementById('' + ctrlcom + '_ReceiptControl2_uccardAuther__hiddenText').value = '';*/
        //  $('#' + ctrlcom + '_ReceiptControl2_txtpatgrossamt').val('');
        //$('#' + ctrlcom + '_ReceiptControl2_txtgrossamttotal').val('');
        /*Advance mode controls*/
        if (document.getElementById('<%= ddlPaymentType.ClientID %>').value != 1) {
            document.getElementById("<%= ddlPaymentType.ClientID %>").value = 1;
            document.getElementById("<%= ddlPaymentType.ClientID %>").text = "Cash";
            if (document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnDocName').value != 'CorporateCheckEntry') {
                checkpayment();
            }
        }
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtreqamtkyd').value = '0';
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtreceiptAmount').value = '0';
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatientReceiptAmt').value = '0';
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtTotalReciptAmt').value = '0';
        document.getElementById('' + ctrlcom + '_ReceiptControl2_lblqickchangeamt').innerHTML = '0';
        if (obj == 'Advanced') {
            var _cash = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtcashAmt');
            CalculateAmount(_cash, 'Cash');
            var _card = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtCardAmt');
            CalculateAmount(_card, 'Card');
            document.getElementById('' + ctrlcom + '_ReceiptControl2_chkismultiple').checked = false;
        }
    }
    function OnDueAuthSelection(input) {

        document.getElementById('' + ctrlcom + '_ReceiptControl2_uccardAuther_txtSearchControl').value = input._lktext;
        document.getElementById('' + ctrlcom + '_ReceiptControl2_uccardAuther__hiddenText').value = input._lktext;
        if (input.ID == undefined) {
            document.getElementById('' + ctrlcom + '_ReceiptControl2_uccardAuther__hiddenID').value = input.AUTH_ID;
        }
        else {
            document.getElementById('' + ctrlcom + '_ReceiptControl2_uccardAuther__hiddenID').value = input.ID;
        }
    }
    function OnDueAuthSelection1(data) {

        var form_name = $('#' + ctrlcom + '_umrPatientDetails_hdnFormName').val();
        var own_bill_auth = '';
        var own_auth_name = '';
        if (form_name == 'OP') {
            own_bill_auth = $('#' + ctrlcom + '_UcOdrPsyn__hiddenID').val();
            own_auth_name = document.getElementById('' + ctrlcom + '_umrPatientDetails_lblrefdoc').innerHTML;
            var name = own_auth_name.split('-');
            own_auth_name = name[0];
        }
        else if (form_name == 'Cons') {
            own_bill_auth = $('#' + ctrlcom + '_uccorporate_hdnarrdocid').val();
            own_auth_name = document.getElementById('' + ctrlcom + '_umrPatientDetails_lblrefdoc').innerHTML;
            var name = own_auth_name.split('-');
            own_auth_name = name[0];
        }

        var dueamt = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatgrossamt').value;
        var netamt = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatgross').value;
        var dueper = (parseFloat(100) * parseFloat(dueamt)) / parseFloat(netamt);
        if (parseFloat(dueamt) > 0) { } else { dueamt = 0; }
        if (parseFloat(netamt) > 0) { } else { netamt = 0; }
        if (parseFloat(dueper) > 0) { } else { dueper = 0; }
        var auth_pcnt = 0;
        var auth_period = 115;
        var auth_remain_amt = 0;
        var Auth_amount_fr_prd = 0;
        var con_on_his_bills = 'N';
        if (data.ID == undefined) { /* lookup selection */
            auth_pcnt = data.AUTH_FOR_CONCESSION_PERCENT;
            auth_period = data.AUTH_FOR_CONCESSION_PERIOD;
            auth_remain_amt = data.REMAINING_AUTH_AMOUNT;
            Auth_amount_fr_prd = data.AUTH_FOR_CONCESSION_PERIOD_AMOUNT;
            con_on_his_bills = data.IS_CONCESSION_OWN_PATIENTS_ONLY;
        }
        else { /* auto completion selection */
            auth_pcnt = data.RESULT.ListObjVal[0].AUTH_FOR_CONCESSION_PERCENT;
            auth_period = data.RESULT.ListObjVal[0].AUTH_FOR_CONCESSION_PERIOD;
            auth_remain_amt = data.RESULT.ListObjVal[0].Remaining_Auth_Amount;
            Auth_amount_fr_prd = data.RESULT.ListObjVal[0].AUTH_FOR_CONCESSION_PERIOD_AMOUNT;
            con_on_his_bills = data.RESULT.ListObjVal[0].IS_CONCESSION_OWN_PATIENTS_ONLY;
        }
        var con_on_his_bills = 'N';
        if (con_on_his_bills == '') { con_on_his_bills = 'N'; }

        if (parseFloat(auth_pcnt) > 0) { } else { auth_pcnt = 0; }
        if (parseFloat(auth_remain_amt) > 0) { } else { auth_remain_amt = 0; }
        if (parseFloat(Auth_amount_fr_prd) > 0) { } else { Auth_amount_fr_prd = 0; }
        if (con_on_his_bills == 'Y') { /* authorization on his bills only  Start*/
            if (data.AUTH_NAME == own_auth_name) {
                if (parseFloat(dueper) <= parseFloat(auth_pcnt) && parseFloat(dueamt) <= parseFloat(auth_remain_amt)) { /* Due Percent and authorized percent checking */
                    document.getElementById('<%= ucdueauth.FindControl("txtSearchControl").ClientID %>').value = data._lktext;
                    document.getElementById('<%= ucdueauth.FindControl("_hiddenText").ClientID  %>').value = data._lktext;
                    if (data.ID == undefined) { /* lookup selection */
                        document.getElementById('<%=ucdueauth.FindControl("_hiddenID").ClientID %>').value = data.AUTH_ID;
                    }
                    else { /* auto completion selection */
                        document.getElementById('<%=ucdueauth.FindControl("_hiddenID").ClientID %>').value = data.ID;
                    }
                    document.getElementById('<%= ucdueauth.FindControl("txtSearchControl").ClientID %>').className = 'grey';
                }
                else if (parseFloat(dueper) <= parseFloat(auth_pcnt) && parseFloat(dueamt) > parseFloat(auth_remain_amt)) {
                    $(".stoast").toastText("warning", "THis Authirized user ahthorization Concession amount exceeding Concession Limits, So Please Contact Administratior", 5, 3);
                    $('#' + ctrlcom + '_ReceiptControl2_ucdueauth_txtSearchControl').val('');
                    return false;
                }
                else if (parseFloat(dueper) > parseFloat(auth_pcnt)) {
                    $(".stoast").toastText("warning", "THis Authirized user  can give maxminum " + auth_pcnt + " % on Transaction ", 5, 3);
                    $('#' + ctrlcom + '_ReceiptControl2_ucdueauth_txtSearchControl').val('');
                    return false;
                }
            }
            else {
                $(".stoast").toastText("warning", "Authorization Name Mismatch So, Please Contact Administrator ", 5, 3);
                $('#' + ctrlcom + '_ReceiptControl2_ucdueauth_txtSearchControl').val('');
                return false;
            }
        } /* authorization on his bills only  Ends*/
        else if (con_on_his_bills == 'N') { /* authorization on ANy bills   Starts*/
            if (parseFloat(dueper) <= parseFloat(auth_pcnt) && parseFloat(dueamt) <= parseFloat(auth_remain_amt)) { /* Due Percent and authorized percent checking */
                document.getElementById('<%= ucdueauth.FindControl("txtSearchControl").ClientID %>').value = data._lktext;
                document.getElementById('<%= ucdueauth.FindControl("_hiddenText").ClientID  %>').value = data._lktext;
                if (data.ID == undefined) {
                    document.getElementById('<%=ucdueauth.FindControl("_hiddenID").ClientID %>').value = data.AUTH_ID;
                }
                else {
                    document.getElementById('<%=ucdueauth.FindControl("_hiddenID").ClientID %>').value = data.ID;
                }
                document.getElementById('<%= ucdueauth.FindControl("txtSearchControl").ClientID %>').className = 'grey';
            }
            else if (parseFloat(dueper) <= parseFloat(auth_pcnt) && parseFloat(dueamt) > parseFloat(auth_remain_amt)) {
                $(".stoast").toastText("warning", "THis Authirized user ahthorization Concession amount exceeding Concession Limits, So Please Contact Administratior", 5, 3);
                $('#' + ctrlcom + '_ReceiptControl2_ucdueauth_txtSearchControl').val('');
                return false;
            }
            else if (parseFloat(dueper) > parseFloat(auth_pcnt)) {
                $(".stoast").toastText("warning", "THis Authirized user  can give maxminum " + auth_pcnt + " % on Transaction ", 5, 3);
                $('#' + ctrlcom + '_ReceiptControl2_ucdueauth_txtSearchControl').val('');
                return false;
            }
        }

        var auth_name = $('#' + ctrlcom + '_ReceiptControl2_ucdueauth_txtSearchControl').val();
        if (auth_name == undefined || auth_name == null) { auth_name = ''; }
        if (auth_name != '') {
            document.getElementById('' + ctrlcom + '_ReceiptControl2_ucdueauth_txtSearchControl').className = 'grey';
        }

    }
    /** added on 05.08.2016 ***/
    function srvchrgamount(obj, val) {
        //WithClickCheckFunctionality();
        TestCondition(val, obj);
        var srvchrgamt = 0;
        var chargamt = 0;
        var calamt = 0;
        var corrcalamt = 0;
        if (document.getElementById('' + ctrlcom + '_ReceiptControl2_txtsrvcharges').value > 100) {
            $(".toast").toastText("Info", "service charge below 100   ", 5, 2)
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtsrvcharges').focus();
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtsrvcharges').value = 100;

        }
        srvchrgamt = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtsrvcharges').value;
        chargamt = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtamt').value;
        document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnamtwithoutsrvchrg').value = parseFloat(chargamt);
        calamt = parseFloat(chargamt) * (srvchrgamt / 100);
        corrcalamt = parseFloat(chargamt) - parseFloat(calamt);
        document.getElementById('' + ctrlcom + '_ReceiptControl2_hdncalamtwithsrvchrg').value = corrcalamt;
    }
    function WithClickCheckFunctionality() {
        var duamt = 0;
        var form_name = document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnDocName').value;
        if (document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnDocName').value == 'OUTSTDNGDUE') {
            duamt = document.getElementById('' + ctrlcom + '_txtDueAmount').value;
        }
        else {
            duamt = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatdue').value;
        }
        if (document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnDocName').value == 'CorporateCheck') {
            duamt = 50000000000;
        }

        if (duamt == "" || isNaN(duamt) || duamt == undefined) {
            duamt = 0;
        }
        var groupid = document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnapppaymentgroupid').value;
        //if (document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlPaymentType').value == 11) {
        if (groupid == 11) {
            /* if (document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlPaymentType').style.display = 'block') {*/
            var AdvadjustAmt = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtadjustmentamt').value;
            var TenderedAmt = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtTenderedAmt').value;
            var dueamt = 0;
            if (document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnDocName').value == 'OUTSTDNGDUE') {
                dueamt = document.getElementById('' + ctrlcom + '_txtDueAmount').value;
            }
            else {
                dueamt = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatdue').value;
            }
            if (AdvadjustAmt == "" || isNaN(AdvadjustAmt) || AdvadjustAmt == undefined) {
                AdvadjustAmt = 0;
            }
            if (dueamt == "" || isNaN(dueamt) || dueamt == undefined || dueamt == null) {
                dueamt = 0;
            }
            if (TenderedAmt == "" || isNaN(TenderedAmt) || TenderedAmt == undefined) {
                TenderedAmt = 0;
            }
            if (parseFloat(TenderedAmt) > parseFloat(AdvadjustAmt)) {
                $(".stoast").toastText("Info", "Tendered Amount Should Not Greater than Advance Adjustment Amt.", 5, 3);
                document.getElementById('' + ctrlcom + '_ReceiptControl2_txtTenderedAmt').value = '';
                document.getElementById('' + ctrlcom + '_ReceiptControl2_txtTenderedAmt').focus();
                return false;
            }

            /* }*/
        }
        var tendoramt = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtTenderedAmt').value;
        if (parseFloat(tendoramt) > parseFloat(duamt)) {
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtChangeKyd').value = parseFloat(tendoramt) - parseFloat(duamt);
        }
        var netAmount = document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnNetAmt').value;
        var dueamt = document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnDueAmt').value;
        var tenderamount = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtTenderedAmt').value;
        var amount = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtamt').value;
        amount = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtCurrAmt').value;
        if (tenderamount == '' || tenderamount == undefined || tenderamount == null || isNaN(tenderamount)) {
            tenderamount = 0;
        }
        if (tenderamount == '' || tenderamount == undefined || tenderamount == null || isNaN(tenderamount)) {
            tenderamount = 0;
        }
        if (amount == '' || amount == undefined || amount == null || isNaN(amount)) {
            amount = 0;
        }
        if (document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnDocName').value == 'CorporateCheck') {
            amount = 50000000000;
            dueamt = 5000000000000;
        }
        var DDl_pay_type = $('#' + ctrlcom + '_ReceiptControl2_ddlPaymentType').val();
        if (parseInt(dueamt) == 0 && form_name != 'PREADVANCE') {
            $(".stoast").toastText("Info", "Receipt amount should be graeter than zero(0)", 5, 3);
            return false;
        }
        else if (parseFloat(amount) > parseFloat(dueamt) && DDl_pay_type != '1') {

            $(".stoast").toastText("Info", "Receipt Amount Should Not Be More Than Payable Amount", 5, 3);
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtamt').focus();
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtamt').value = '0';
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtCurrAmt').value = 0;
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtTenderedAmt').value = 0;
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtChangeKyd').value = 0;
            return false;
        }
    }
</script>
<script type="text/javascript">
    function savemultidscntxml() {
        var _xmlStr_concession = '';
        if (document.getElementById('' + ctrlcom + '_ReceiptControl2_chkismultiple').checked == true) {
            $("table[id*=gvMultipleConcession] tr:has(td)").each(function (e) {
                var cncsntypeid = $(this).closest('tr').find("[id*=ddlMultiDiscounttype]").val();
                var Amount = $(this).closest('tr').find("input[type=text][id*=txtAmount]").val();
                var authid = $(this).closest('tr').find("input[type=hidden][id*=hdnauthid]").val();
                var healthcarddetid = document.getElementById('ctl00_ContentPlaceHolder1_umrPatientDetails_hdnhealthdepencyid').value;
                var healthcardid = document.getElementById('ctl00_ContentPlaceHolder1_umrPatientDetails_hdnhealthcard_id').value;
                if (healthcarddetid == undefined || healthcarddetid == null || healthcarddetid == '') { healthcarddetid = "0"; }
                if (healthcardid == undefined || healthcardid == null || healthcardid == '') { healthcardid = "0"; }
                var cardid = 0;
                if (cncsntypeid == 2) {
                    //cardid = $(this).closest('tr').find("input[type=hidden][id*=hdncardid]").val();
                    cardid = document.getElementById('ctl00_ContentPlaceHolder1_umrPatientDetails_hdncncsn_rule_id').value;
                } else if (cncsntypeid == 5) {
                    cardid = $(this).closest('tr').find("input[type=hidden][id*=hdneventid]").val();
                } else if (cncsntypeid == 6) {
                    cardid = $(this).closest('tr').find("input[type=hidden][id*=hdnRuleid]").val();
                } else {
                    cardid = 0;
                }

                _xmlStr_concession += "<FO_BILL_CNCSN";
                _xmlStr_concession += " BILL_CNCSN_ID=$" + 0 + "$";
                _xmlStr_concession += " BILL_CNCSN_REV_NO=$" + 1 + "$";
                _xmlStr_concession += " BILL_ID=$" + "0" + "$";
                _xmlStr_concession += " CONCESSION_TYPE_ID=$" + cncsntypeid + "$";
                _xmlStr_concession += " CONCESSION_AMOUNT=$" + Amount + "$";
                _xmlStr_concession += " RECORD_STATUS=$" + "A" + "$";
                _xmlStr_concession += " CNCSN_RULE_ID=$" + cardid + "$";
                _xmlStr_concession += " CNCSN_AUTH_ID=$" + authid + "$";
                _xmlStr_concession += " CNCSN_REF_NO=$" + 0 + "$";
                _xmlStr_concession += " HEALTH_CARD_DET_ID=$" + healthcarddetid + "$";
                _xmlStr_concession += " HEALTH_CARD_ID=$" + healthcardid + "$";
                _xmlStr_concession += "/>";
            });
            $("table[id$=gvServices] tr:has(td)").each(function (e) {
                var hdnServiceID = $(this).closest('tr').find("input[type=hidden][id*=hdnServiceID]").val();
                var hdnDoctorID = $(this).closest('tr').find("input[type=hidden][id*=hdnDoctorID]").val();
                var staffConAmt = $(this).closest('tr').find('input[type=text][id*=txtstAmt]').val();
                var staffConper = $(this).closest('tr').find('input[type=text][id*=txtstPer]').val();
                var mngmtConper = $(this).closest('tr').find('input[type=text][id*=txtmaPer]').val();
                var MngmtConAmt = $(this).closest('tr').find('input[type=text][id*=txtmgAmt]').val();
                var ebConper = $(this).closest('tr').find('input[type=text][id*=txtebPer]').val();
                var ebConAmt = $(this).closest('tr').find('input[type=text][id*=txtebAmt]').val();
                var ConRuleConper = $(this).closest('tr').find('input[type=text][id*=txtRulePer]').val();
                var ConRuleConAmt = $(this).closest('tr').find('input[type=text][id*=txtcncrlAmt]').val();
                var HCConper = $(this).closest('tr').find('input[type=text][id*=txthcPer]').val();
                var HCConAmt = $(this).closest('tr').find('input[type=text][id*=txtHcAmt]').val();
                var CashConper = $(this).closest('tr').find('input[type=text][id*=txtDiscP]').val();
                var CashConAmt = $(this).closest('tr').find('input[type=text][id*=txtDiscAmt]').val();
                if (staffConper == '' || staffConper == undefined || staffConper == null) { staffConper = 0; }
                if (staffConAmt == '' || staffConAmt == undefined || staffConAmt == null) { staffConAmt = 0; }
                if (mngmtConper == '' || mngmtConper == undefined || mngmtConper == null) { mngmtConper = 0; }
                if (MngmtConAmt == '' || MngmtConAmt == undefined || MngmtConAmt == null) { MngmtConAmt = 0; }
                if (ebConper == '' || ebConper == undefined || ebConper == null) { ebConper = 0; }
                if (ebConAmt == '' || ebConAmt == undefined || ebConAmt == null) { ebConAmt = 0; }
                if (ConRuleConper == '' || ConRuleConper == undefined || ConRuleConper == null) { ConRuleConper = 0; }
                if (ConRuleConAmt == '' || ConRuleConAmt == undefined || ConRuleConAmt == null) { ConRuleConAmt = 0; }
                if (HCConper == '' || HCConper == undefined || HCConper == null) { HCConper = 0; }
                if (HCConAmt == '' || HCConAmt == undefined || HCConAmt == null) { HCConAmt = 0; }
                if (CashConper == '' || CashConper == undefined || CashConper == null) { CashConper = 0; }
                if (CashConAmt == '' || CashConAmt == undefined || CashConAmt == null) { CashConAmt = 0; }
                if (hdnServiceID == '' || hdnServiceID == undefined || hdnServiceID == null) { hdnServiceID = 0; }
                if (hdnDoctorID == '' || hdnDoctorID == undefined || hdnDoctorID == null) { hdnDoctorID = 0; }
                var _cncl_type_id = 0;
                if (parseFloat(CashConAmt) > 0) {
                    _cncl_type_id = 1;
                }
                else if (parseFloat(HCConAmt) > 0) {
                    _cncl_type_id = 2;
                }
                else if (parseFloat(MngmtConAmt) > 0) {
                    _cncl_type_id = 3;
                }
                else if (parseFloat(staffConAmt) > 0) {
                    _cncl_type_id = 4;
                }
                else if (parseFloat(ebConAmt) > 0) {
                    _cncl_type_id = 5;
                }
                else if (parseFloat(ConRuleConAmt) > 0) {
                    _cncl_type_id = 6;
                }


                _xmlStr_concession += "<FO_BILL_SRV_CNCSN";
                _xmlStr_concession += " BILL_SRV_CNCSN_ID=$" + 0 + "$";
                _xmlStr_concession += " BILL_SRV_ID=$" + 0 + "$";
                _xmlStr_concession += " BILL_CNCSN_ID=$" + 0 + "$";
                _xmlStr_concession += " CONCESSION_TYPE_ID=$" + 0 + "$";
                _xmlStr_concession += " CONCESSION_AMOUNT=$" + 0 + "$";
                _xmlStr_concession += " PAT_CONC_PER=$" + CashConper + "$";
                _xmlStr_concession += " PAT_CONC_AMT=$" + CashConAmt + "$";
                _xmlStr_concession += " HC_PERC=$" + HCConper + "$";
                _xmlStr_concession += " HC_AMT=$" + HCConAmt + "$";
                _xmlStr_concession += " MG_PERC=$" + mngmtConper + "$";
                _xmlStr_concession += " MG_AMT=$" + MngmtConAmt + "$";
                _xmlStr_concession += " STAFF_PERC=$" + staffConper + "$";
                _xmlStr_concession += " STAFF_AMT=$" + staffConAmt + "$";
                _xmlStr_concession += " EB_PERC=$" + ebConper + "$";
                _xmlStr_concession += " EB_AMT=$" + ebConAmt + "$";
                _xmlStr_concession += " CNCSNRULEPERC=$" + ConRuleConper + "$";
                _xmlStr_concession += " CNCSNRULEAMT=$" + ConRuleConAmt + "$";
                _xmlStr_concession += " RECORD_STATUS=$" + 'A' + "$";
                _xmlStr_concession += " SERVICE_id=$" + hdnServiceID + "$";
                _xmlStr_concession += " DOCTOR_id=$" + hdnDoctorID + "$";
                _xmlStr_concession += " />";
            });
        }
        return _xmlStr_concession;
    }
    /*  function CheckEmployeDue(obj) {
    if (obj.checked == true) {
    var Grossamt = 0, NetAmt = 0, DueAmt = 0, cncAmt = 0;
    var TotalPatN = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtTotalNet').value;
    var TotalPatD = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtTotalDue').value;
    var TotalPatG = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtgrosstotal').value;


    TotalPatN = typeof TotalPatN == 'string' ? (typeof TotalPatN == 'undefined' || TotalPatN.trim() == '' ? 0 : parseFloat(TotalPatN)) : (typeof TotalPatN == 'object' ? 0 : parseFloat(TotalPatN));
    TotalPatD = typeof TotalPatD == 'string' ? (typeof TotalPatD == 'undefined' || TotalPatD.trim() == '' ? 0 : parseFloat(TotalPatD)) : (typeof TotalPatD == 'object' ? 0 : parseFloat(TotalPatD));
    TotalPatG = typeof TotalPatG == 'string' ? (typeof TotalPatG == 'undefined' || TotalPatG.trim() == '' ? 0 : parseFloat(TotalPatG)) : (typeof TotalPatG == 'object' ? 0 : parseFloat(TotalPatG));
    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatgross').value = TotalPatG;

    document.getElementById('' + ctrlcom + '_txtEmpPayAmt').value = TotalPatG;
    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatNet').value = TotalPatG;
    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatdue').value = TotalPatG;
    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtTotalNet').value = TotalPatG;
    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtTotalDue').value = TotalPatG;

    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtcmpNet').value = 0;
    document.getElementById('' + ctrlcom + '_txtCorpDueAmt').value = 0;
    document.getElementById('' + ctrlcom + '_txtCorpPayAmt').value = 0;
    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtcmpDue').value = 0;
    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtTotalReciptAmt').value = 0;
    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatientReceiptAmt').value = 0;
    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtparygross').value = 0;
    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatdis').value = 0;
    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatgrossamt').value = 0;
    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtgrossamttotal').value = 0;
    document.getElementById('' + ctrlcom + '_ReceiptControl2_ucdueauth_txtSearchControl').className='grey';
    }
    else {
    CalculateGridAmt(1);
    }
    }*/
    function ClearAllTransactionDetails() {
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txttotalamtinwordsquick').innerHTML = '';
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtcashamtinwordsquick').innerHTML = '';
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtcardamtinwordsquick').innerHTML = '';
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtchangeamtinwordsquick').innerHTML = '';
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtcashAmt').value = '0';
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatgross').value = '0';
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtparygross').value = '0';
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtgrosstotal').value = '0';
        document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlDiscountType').value = '0';
        /*Total Due Amount */
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtdueamt').value = '0';
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatdue').value = '0';
        document.getElementById('<%= hdnDueAmt.ClientID %>').value = '0';
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtcmpDue').value = '0'
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtTotalDue').value = '0';
        document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlDiscountType').value = '0';
        /* Advanced Disc Types */
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatdis').value = '0';
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpartydis').value = '0';
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatgrossamt').value = '0';
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpartygrossamt').value = '0';
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtgrossamttotal').value = '0';
        /* Net Amounts */
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatNet').value = '0';
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtcmpNet').value = '0';
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtTotalNet').value = '0';
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtCurrAmt').value = '0';
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtreqamtkyd').value = '0';
        document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnNetAmt').value = '0';
        document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnDueAmt').value = '0';
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtCardAmt').value = '0';
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtcardNoCmp').value = '';
        document.getElementById('' + ctrlcom + '_ReceiptControl2_ddcardType').selectedIndex = 0;
        document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlcrdtype').selectedIndex = 0;
        document.getElementById('' + ctrlcom + '_ReceiptControl2_ddbankName').selectedIndex = 0;
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtcardAuther').value = '';
        /*document.getElementById('' + ctrlcom + '_ReceiptControl2_uccardAuther_txtSearchControl').value = '';
        document.getElementById('' + ctrlcom + '_ReceiptControl2_uccardAuther__hiddenID').value = 0;*/
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtcardExpiredt').value = '';
        document.getElementById('' + ctrlcom + '_ReceiptControl2_ddcardType').className = 'grey';
        document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlcrdtype').className = 'grey';
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtcardNoCmp').className = 'grey';
        document.getElementById('' + ctrlcom + '_ReceiptControl2_ddbankName').className = 'grey';
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtcardAuther').className = 'grey';
        //        document.getElementById('' + ctrlcom + '_ReceiptControl2_uccardAuther_txtSearchControl').className='grey';
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtcardExpiredt').className = 'grey';
        $("table[id*=gvMultipleConcession] tr:has(td)").each(function (i, j) {
            if (i > 0) { $(this).remove(); }
            $('[id$=gvMultipleConcession] tr').filter(':eq(' + 1 + ')').find('[id*=ddlMultiDiscounttype]')[0].selectedIndex = 0;
            $('[id$=gvMultipleConcession] tr').filter(':eq(' + 1 + ')').find('[id*=txtcardno]').val('');
            $('[id$=gvMultipleConcession] tr').filter(':eq(' + 1 + ')').find('[id*=txtAutherizedPersion]').val('');
            $('[id$=gvMultipleConcession] tr').filter(':eq(' + 1 + ')').find('[id*=txtAmount]').val('');
            $('[id$=gvMultipleConcession] tr').filter(':eq(' + 1 + ')').find('[id*=txtPersentage]').val('');
        });
        GlobalMyData = '';
    }

    /*
    function OnHealthCardSelection(obj) {

    }
    function OnConAuth(data)
    { }*/
</script>
<script type="text/javascript">
    function CalculateConcessionPersentagesAmount(obj, Value) {
    }
    function AssignRowValues1(Row, Val) {

        Row = Row.parentElement.parentElement.parentElement.parentElement.rowIndex;
        if (Row == undefined || Row == null || Row == '') { Row = 1; }
        document.getElementById('<%= hdnEditRowId.ClientID %>').value = Row;
        var roundtype = document.getElementById('<%= hdnroundtype.ClientID %>').value;
        var rounddec = document.getElementById('<%= hdnroundoffval.ClientID %>').value;
        var stop = '';
        var pluturefid = $('[id$=gvReceiptDetails] tr').filter(':eq(' + Row + ')').find("input[type=hidden][id*=gridhdnplutusreferenceid]").val();
        if (pluturefid == '' || pluturefid == 'undefined' || pluturefid == undefined || pluturefid == null || pluturefid == 'null') {
            pluturefid = "";
        }
        if (pluturefid != "" ) {
            $(".stoast").toastText("warning", "u can't edit this record.", 5, 3);
            return false;
        }
        $("table[id*=gvReceiptDetails] tr:has(td)").each(function (e) {
            if ($("table[id*=gvReceiptDetails] tr:has(td)").length == 1) {
                var recmode = $(this).closest('tr').find("[id*=lblrecmode]").text();
                if (recmode == "") {
                    stop = 'stop';
                }
            }
        });
        if (stop == 'stop') {
            $(".toast").toastText("Info", "No Items To Update.", 5, 2)
            return false;
        }
        else {
            document.getElementById('<%= ddlPaymentType.ClientID %>').disabled = true;
            document.getElementById('<%= imgbtnadd.ClientID %>').style.display = 'none';
            document.getElementById('<%= imgbtnupdate.ClientID %>').style.display = "block";
            var grid = document.getElementById('<%= gvReceiptDetails.ClientID %>');
            var index = 0;
            var rowColor = 0;
            var editamt = 0;
            var recamt = 0;
            var reqamt1 = 0;
            var exrate1 = 0;

            var ErAdvAllow = 'N';
            var WebCfngAllowCash = $('[id*=hdnWebCfngAllowCash]').val();
            if (WebCfngAllowCash == null || WebCfngAllowCash == undefined || WebCfngAllowCash == '' || WebCfngAllowCash == 'undefined') WebCfngAllowCash = 'N';
            if (WebCfngAllowCash == 'Y' || WebCfngAllowCash == 'y') {
                ErAdvAllow = $('[id*=hdnAllowCashTrnd]').val();
                if (ErAdvAllow == null || ErAdvAllow == undefined || ErAdvAllow == '' || ErAdvAllow == 'undefined') ErAdvAllow = 'N';
            }

            ctl00_ContentPlaceHolder1_ReceiptControl2_ddlCurrency.disabled = true;
            $("table[id*=gvReceiptDetails] tr:has(td)").each(function (e) {
                var change = $(this).closest('tr').find("[id*=lblchange]").text();
                if (rowColor == 0) {
                    document.getElementById('<%= gvReceiptDetails.ClientID %>').rows[this.rowIndex].style.backgroundColor = 'White';
                    rowColor++;
                }
                else {
                    document.getElementById('<%= gvReceiptDetails.ClientID %>').rows[this.rowIndex].style.backgroundColor = '#E5E5E5';
                    rowColor = 0;
                }
                //var receipt = $(this).closest('tr').find("[id*=lblconvertedamt]").text();
                var receipt = $(this).closest('tr').find("[id*=lblAmount]").text();

                if (parseFloat(receipt) > 0) { } else { receipt = 0; }
                if (parseFloat(recamt) > 0) { } else { recamt = 0; }
                $('#' + ctrlcom + '_ReceiptControl2_txtreceiptAmount').val(recamt);
                var txtrefundamt = document.getElementById('' + ctrlcom + '_txtRefundAmt');
                if (txtrefundamt != null) {
                    $('#' + ctrlcom + '_txtRefundAmt').val(recamt);
                }
                recamt = parseFloat(recamt) + parseFloat(receipt);

                if (parseInt(Row) == this.rowIndex) {
                    document.getElementById('<%= gvReceiptDetails.ClientID %>').rows[Row].style.backgroundColor = 'lightblue';
                    document.getElementById('<%= hdnRecSNo.ClientID %>').value = $(this).closest('tr').find("input[type=hidden][id*=hdnSNo]").val();
                    var i = $(this).closest('tr').find("input[type=hidden][id*=hdnrecmodeId]").val();
                    document.getElementById("<%= ddlPaymentType.ClientID %>").value = i;
                    var j = $(this).closest('tr').find("input[type=hidden][id*=hdncurrId]").val();
                    if (j == '' || j == undefined || j == null) {
                        j = 1;
                    }
                    document.getElementById("<%= ddlCurrency.ClientID %>").value = j;

                    document.getElementById('<%= txtExchangeRate.ClientID %>').value = $(this).closest('tr').find("[id*=lblexchrate]").text();
                    var reqamt = $(this).closest('tr').find("[id*=lblconvertedamt]").text();
                    var dueamt = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatdue').value;
                    if (dueamt == undefined || dueamt == null || dueamt == '' || isNaN(dueamt)) { dueamt = "0"; }
                    var doc_name = $('#' + ctrlcom + '_ReceiptControl2_hdnDocName').val();
                    if (doc_name == 'OUTSTDNGDUE') {
                        dueamt = $('#' + ctrlcom + '_txtDueAmount').val();
                        reqamt = parseFloat(dueamt);
                    }
                    if (document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnDocName').value == 'ASSESOUTSTDNGDUE') {
                        var assesmentamount = 0;
                        $("table[id$=tbl_Prevoius_Settled_Bills_sch] tr [type=checkbox]:checked").each(function (e) {
                            var inneramount = $(this).closest('tr').find("[id*=lbl3]").text();
                            if (inneramount == undefined || inneramount == "") {
                                inneramount = 0;
                            }
                            assesmentamount += parseFloat(inneramount);
                        });
                        dueamt = assesmentamount;
                        reqamt = parseFloat(assesmentamount);
                    }

                    /** Added on 27.12.2015 by rani */
                    /*if (doc_name == 'OPQUICK' || doc_name == 'REG' || doc_name == 'OP' || doc_name == 'Cons') {
                    dueamt = $('#' + ctrlcom + '_ReceiptControl2_txtpatdue').val();
                    var change = $(this).closest('tr').find("[id*=lblchange]").text();
                    reqamt = parseFloat(reqamt) - parseFloat(change) + parseFloat(dueamt);
                    }*/
                    /** up to here */
                    else {
                        if (doc_name == 'OUTSTDNGDUE') {
                            // reqamt = parseFloat(reqamt) - parseFloat(change) + parseFloat(dueamt);
                        } else {
                            reqamt = parseFloat(reqamt) + parseFloat(dueamt);
                        }
                    }
                    if (doc_name == 'CorporateCheck') {
                        reqamt = 1;
                        dueamt = 0;
                    }
                    if (reqamt == undefined || reqamt == null || reqamt == '' || isNaN(reqamt)) { reqamt = "0"; }
                    document.getElementById('<%= txtreqamtkyd.ClientID %>').value = parseFloat(reqamt);

                    /*document.getElementById('<%= txtamt.ClientID %>').value = $(this).closest('tr').find("[id*=lblAmount]").text(); */// $(this).closest('tr').find("input[type=hidden][id*=hdnsrvchargamt]").val();
                    var srvamt = 0;
                    var paymentModeID = document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlPaymentType').value; var docName = document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnDocName').value;

                    if (document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnHospitalPayment').value != 'PAYMENT' && document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnDocName').value != 'CorporateCheck') {

                        srvamt = $(this).closest('tr').find("[id*=lblAmount]").text();
                        var srvchrgamt = $(this).closest('tr').find("input[type=hidden][id*=hdnsrvchargamt]").val();
                        if (parseFloat(srvchrgamt) == null || parseFloat(srvchrgamt) != undefined || parseFloat(srvchrgamt) == "" && srvamt != parseFloat(srvchrgamt)) {
                            srvamt = $(this).closest('tr').find("[id*=lblAmount]").text(); //$(this).closest('tr').find("input[type=hidden][id*=hdnsrvchargamt]").val();
                        }
                        else {
                            srvamt = $(this).closest('tr').find("[id*=lblAmount]").text();
                        }
                        var exRate = $(this).closest('tr').find("[id*=lblexchrate]").text();
                        if (exRate == '' || exRate == undefined || exRate == null) { exRate = 0; }
                        if (exRate > 0) {
                            srvamt = parseFloat(srvamt) / parseFloat(exRate);
                        }
                    }
                    else if (ErAdvAllow == 'Y') {
                        srvamt = $(this).closest('tr').find("[id*=lblAmount]").text();
                        var srvchrgamt = $(this).closest('tr').find("input[type=hidden][id*=hdnsrvchargamt]").val();
                        if (parseFloat(srvchrgamt) == null || parseFloat(srvchrgamt) != undefined || parseFloat(srvchrgamt) == "" && srvamt != parseFloat(srvchrgamt)) {
                            srvamt = $(this).closest('tr').find("[id*=lblAmount]").text(); //$(this).closest('tr').find("input[type=hidden][id*=hdnsrvchargamt]").val();
                        }
                        else {
                            srvamt = $(this).closest('tr').find("[id*=lblAmount]").text();
                        }
                        var exRate = $(this).closest('tr').find("[id*=lblexchrate]").text();
                        if (exRate == '' || exRate == undefined || exRate == null) { exRate = 0; }
                        if (exRate > 0) {
                            srvamt = parseFloat(srvamt) / parseFloat(exRate);
                        }
                    }
                    else if (document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnHospitalPayment').value == 'PAYMENT' && ((docName == 'IpAdvance' && paymentModeID != 1 && paymentModeID != 11))) {
                        srvamt = $(this).closest('tr').find("input[type=hidden][id*=hdnsrvchargamt]").val();
                        document.getElementById('<%= txtreqamtkyd.ClientID %>').value = "0";
                    }
                    else {
                        srvamt = $(this).closest('tr').find("[id*=lblAmount]").text();
                    }
                    if (srvamt == undefined || srvamt == null || srvamt == '' || isNaN(srvamt)) { srvamt = "0"; }
                    document.getElementById('<%= txtamt.ClientID %>').value = srvamt; // $(this).closest('tr').find("[id*=lblAmount]").text();
                    document.getElementById('<%= txtsrvcharges.ClientID %>').value = $(this).closest('tr').find("input[type=hidden][id*=hdnsrvcharg]").val();

                    //document.getElementById('<%= hdneditamount.ClientID %>').value = $(this).closest('tr').find("[id*=lblconvertedamt]").text();
                    document.getElementById('<%= hdneditamount.ClientID %>').value = $(this).closest('tr').find("[id*=lblAmount]").text();
                    editamt = $(this).closest('tr').find("[id*=lblAmount]").text();
                    document.getElementById('<%= txtCurrency.ClientID %>').value = document.getElementById('<%= hdnstpcurrname.ClientID %>').value;

                    document.getElementById('<%= txtCurrAmt.ClientID %>').value = ($(this).closest('tr').find("[id*=lblconvertedamt]").text());
                    var k = $(this).closest('tr').find("input[type=hidden][id*=hdnbankid]").val();
                    document.getElementById('<%= ddlBankName.ClientID %>').value = k;
                    var cardtypeid = $(this).closest('tr').find("input[type=hidden][id*=hdncardtypeId]").val();
                    document.getElementById('<%= ddlCardType.ClientID %>').value = cardtypeid;
                    if (i == 2) {
                        document.getElementById('divchequeauth').style.display = 'block';
                        document.getElementById('divauthcd').style.display = 'none';
                        document.getElementById('' + ctrlcom + '_ReceiptControl2_lblcardtranNo').innerHTML = 'Cheque Auth.';
                        document.getElementById('' + ctrlcom + '_ReceiptControl2_UCchequeAuth_txtSearchControl').value = $(this).closest('tr').find("[id*=lblauthcode]").text();
                        document.getElementById('' + ctrlcom + '_ReceiptControl2_UCchequeAuth__hiddenID').value = $(this).closest('tr').find("[id*=hdncheck_AuthID]").val();
                        document.getElementById('' + ctrlcom + '_ReceiptControl2_UCchequeAuth__hiddenText').value = $(this).closest('tr').find("[id*=lblauthcode]").text();
                    }
                    else {
                        document.getElementById('divchequeauth').style.display = 'none';
                        document.getElementById('divauthcd').style.display = 'block';
                        document.getElementById('' + ctrlcom + '_ReceiptControl2_lblcardtranNo').innerHTML = 'Card Trans#';
                        document.getElementById('<%= txtAuthCode.ClientID %>').value = $(this).closest('tr').find("[id*=lblauthcode]").text();
                    }


                    document.getElementById('<%= txtExpDt.ClientID %>').value = $(this).closest('tr').find("[id*=lblcardexpdt]").text();
                    document.getElementById('<%= txtTenderedAmt.ClientID %>').value = $(this).closest('tr').find("[id*=lbltendcash]").text();
                    if (paymentModeID == "1") {
                        if (ErAdvAllow == 'Y') {
                            document.getElementById('<%= txtamt.ClientID %>').value = srvamt;
                        }
                        else {
                            document.getElementById('<%= txtamt.ClientID %>').value = $(this).closest('tr').find("[id*=lbltendcash]").text();
                        }
                    }
                    document.getElementById('<%= txtChangeKyd.ClientID %>').value = $(this).closest('tr').find("[id*=lblchange]").text();
                    document.getElementById('<%= txtCardNo.ClientID %>').value = $(this).closest('tr').find("[id*=lblcardno]").text();
                    document.getElementById('<%= txtchequedt.ClientID %>').value = $(this).closest('tr').find("[id*=lblchequedt]").text();
                    document.getElementById('<%= txtchequerealizedt.ClientID %>').value = $(this).closest('tr').find("[id*=lblcqreldt]").text();
                    document.getElementById('<%= txtcqissuername.ClientID %>').value = $(this).closest('tr').find("[id*=lblcqissuername]").text();
                    document.getElementById('<%= txtAdvCardHldrName.ClientID %>').value = $(this).closest('tr').find("[id*=lblcqissuername]").text();
                    Editpayment();
                    var recdocname = document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnDocName').value;
                    if ((recdocname == 'CorporateCheckEntry' || recdocname == 'CorporateCheck') && document.getElementById("<%= ddlPaymentType.ClientID %>").value == 8) {
                        trchequedt.style.display = "table-row";
                        document.getElementById('<%= txtAuthCode.ClientID %>').value = $(this).closest('tr').find("[id*=lblcardno]").text();
                    }

                    reqamt1 = $(this).closest('tr').find("[id*=lblAmount]").text();
                    exrate1 = document.getElementById('<%= txtExchangeRate.ClientID %>').value;
                    //SetCurrencyAmtFields(reqamt1, exrate1);
                    if (doc_name == 'CorporateCheck') {
                        document.getElementById('<%= txtamt.ClientID %>').value = $(this).closest('tr').find("[id*=lbltendcash]").text();
                    }
                }
                index++;
            });
            var reqamt = document.getElementById('<%= txtreqamtkyd.ClientID %>').value;
            var exrate = document.getElementById('<%= txtExchangeRate.ClientID %>').value;
            if (reqamt == undefined || reqamt == null || reqamt == '' || isNaN(reqamt)) { reqamt = "0"; }
            if (exrate == undefined || exrate == null || exrate == '' || isNaN(exrate)) { exrate = "1"; }
            if (document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnHospitalPayment').value == 'PAYMENT' && (document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnDocName').value == 'IpAdvance' || document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnDocName').value == 'Refund')) {

            }
            else {
                //SetCurrencyAmtFields(reqamt1, exrate1);
                SetCurrencyAmtFields(reqamt, exrate);
            }
            var netAmount = document.getElementById('<%= hdnNetAmt.ClientID %>').value;
            var dueamt = 0;
            if (document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnDocName').value == 'IPFINAL') {
                var advance = document.getElementById('' + ctrlcom + '_txtAdvance').value;
                dueamt = parseFloat(netAmount) - parseFloat(advance) - parseFloat(recamt) + parseFloat(editamt);
            }
            else if (document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnDocName').value == 'Refund') {
                dueamt = parseFloat(editamt);
            }
            else {
                //                if (document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnisallowgst').value.toUpperCase() == "YES") {
                //                    var pattax = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatTotTax').value;
                //                    dueamt = ((parseFloat(netAmount) ) - parseFloat(recamt) + parseFloat(editamt));
                //                }
                //                else {
                dueamt = parseFloat(netAmount) - parseFloat(recamt) + parseFloat(editamt)
                //                }
            }
            recamt = RoundFloorCeil('', recamt, '');
            dueamt = RoundFloorCeil('', dueamt, '');
            document.getElementById('<%= hdnDueAmt.ClientID %>').value = dueamt;
            document.getElementById('<%= hdnupdatestatus.ClientID %>').value = 'Y';

            $("[id*=hdnEditAmt]").val(parseFloat(dueamt));
        

             var paymnetmodeid = $('#ctl00_ContentPlaceHolder1_ReceiptControl2_ddlPaymentType').find('option:selected').val();
    var _JSONParams = JSON.stringify({ paymnetmodeid: paymnetmodeid });
    var _ServiceURL = _iniUrl + "Private/FrontOffice/OPDBILLNEW.aspx/GetPaymentModdedetails";
    var groupid = 0;
    $.ajax({
        type: "POST",
        url: _ServiceURL,
        dataType: "json",
        data: _JSONParams,
        async: false,
        contentType: "application/json; charset=utf-8",
        error: function (jqXHR, textStatus, errorThrown) {
        },
        success: function (jdata) {
            var jdata = JSON.parse(jdata.d);
            document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnapppaymentgroupid').value = jdata[0].APP_PAYMENT_GROUP_ID;
        }
    });
        var grpid = document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnapppaymentgroupid').value;
            if (grpid == '5') {
                var otpreq = $('#' + ctrlcom + '_ReceiptControl2_hdnotprequired').val();
                if (otpreq == 'True') {
                    document.getElementById('tdadv').style.display = 'block';
                    document.getElementById('tdadvcell').style.display = 'block';
                    document.getElementById('tdchkotpadvanced').style.display = 'table-cell';
                    document.getElementById('' + ctrlcom + '_ReceiptControl2_lbladjorotp').innerHTML = 'OTP';
                     document.getElementById('' + ctrlcom + '_ReceiptControl2_lbladjorotp1').innerHTML = 'OTP';
                    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtadjustmentamt').disabled = false;
                }
            }
            else if (grpid == '11') {
                document.getElementById('tdadv').style.display = 'block';
                document.getElementById('tdadvcell').style.display = 'block';
                document.getElementById('tdchkotpadvanced').style.display = 'table-cell';
                document.getElementById('' + ctrlcom + '_ReceiptControl2_lbladjorotp').innerHTML = 'Available Bal';
                document.getElementById('' + ctrlcom + '_ReceiptControl2_lbladjorotp1').innerHTML = 'Available Bal';
                document.getElementById('' + ctrlcom + '_ReceiptControl2_txtadjustmentamt').disabled = true;
            }
            else {
                document.getElementById('tdadv').style.display = 'none';
                document.getElementById('tdadvcell').style.display = 'none';
                document.getElementById('tdchkotpadvanced').style.display = 'none';
                document.getElementById('' + ctrlcom + '_ReceiptControl2_lbladjorotp').innerHTML = 'Available Bal';
                document.getElementById('' + ctrlcom + '_ReceiptControl2_lbladjorotp1').innerHTML = 'Available Bal';
                document.getElementById('' + ctrlcom + '_ReceiptControl2_txtadjustmentamt').disabled = true;
            }
            //var paymentTypeID = document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlPaymentType').value;
            if (grpid == '5') {
                $('[id*=tdCardHldr]').css('display', 'table-cell');
                $('[id*=tdTxtCardHldr]').css('display', 'block');
            }
            else {
                $('[id*=tdCardHldr]').css('display', 'none');
                $('[id*=tdTxtCardHldr]').css('display', 'table-cell');
            }
            EnabledValueBasedControls();
            return false;
        }
        
        return false;
    }

    function getDueAmount() {
        var ReceiptAmt = 0;
        var index = '';
        var netAmount = document.getElementById('<%= hdnNetAmt.ClientID %>').value;
        $("table[id$=gvReceiptDetails] tr:has(td)").each(function (e) {
            var receipt = $(this).closest('tr').find("[id*=lblconvertedamt]").text(); /*changed lblconverted into lblamount by sitaram*/
            var mode = $(this).closest('tr').find("[id*=lblrecmode]").text()
            var change = $(this).closest('tr').find("[id*=lblchange]").text();
            if (change == "" || change == undefined) { change = 0; }
            if (mode == 'Cash') {
                index = this.rowIndex;
            }
            if (receipt == '' || receipt == undefined) { receipt = 0; }
            if (parseFloat(receipt) <= parseFloat(netAmount)) {
                ReceiptAmt = parseFloat(ReceiptAmt) + parseFloat(receipt) - parseFloat(change);
            } else {
                ReceiptAmt = netAmount;
            }

        });
        if (index == undefined || index == null || index == '') { index = 0; }
        if (parseFloat(ReceiptAmt) < parseFloat(netAmount)) {
            $('[id$=gvReceiptDetails] tr').filter(':eq(' + index + ')').find('[id*=lblchange]').text(0);
        }
        else {
            //$('[id$=gvReceiptDetails] tr').filter(':eq(' + index + ')').find('[id*=lblAmount]').text(ReceiptAmt);
            $('[id$=gvReceiptDetails] tr').filter(':eq(' + index + ')').find('[id*=lblchange]').text($('[id$=gvReceiptDetails] tr').filter(':eq(' + index + ')').find('[id*=lblconvertedamt]').text() - $('[id$=gvReceiptDetails] tr').filter(':eq(' + index + ')').find('[id*=lblAmount]').text());
        }
        document.getElementById('<%= txtreceiptAmount.ClientID %>').value = ReceiptAmt;
        document.getElementById('<%= hdneditamount.ClientID %>').value = 0;
        if (document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnDocName').value == 'IPFINAL') {
            var advamt = document.getElementById('' + ctrlcom + '_txtTotAdvance').value;
            var ClaimAmt = $('[id*=hdnClaimAdjAmt]').val();
            if (ClaimAmt == '' || ClaimAmt == null || ClaimAmt == undefined) { ClaimAmt = 0; }
            var discamt = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatgrossamt').value;
            if ((parseFloat(advamt) + parseFloat(ReceiptAmt) + parseFloat(ClaimAmt)) > parseFloat(netAmount))
                document.getElementById('<%= hdnDueAmt.ClientID %>').value = 0;
            else
                document.getElementById('<%= hdnDueAmt.ClientID %>').value = parseFloat(netAmount) - parseFloat(advamt) - parseFloat(ReceiptAmt) - parseFloat(ClaimAmt);
        }
        else {
            document.getElementById('<%= hdnDueAmt.ClientID %>').value = parseFloat(netAmount) - parseFloat(ReceiptAmt);
        }
        document.getElementById('<%= txtpatdue.ClientID %>').value = document.getElementById('<%= hdnDueAmt.ClientID %>').value;
        var cmpdueamt = parseFloat(document.getElementById('<%= txtcmpDue.ClientID %>').value);
        cmpdueamt = cmpdueamt == '' ? 0 : cmpdueamt;
        cmpdueamt = cmpdueamt == undefined ? 0 : cmpdueamt;
        cmpdueamt = cmpdueamt.toString() == 'NaN' ? 0 : cmpdueamt;
        document.getElementById('<%= txtTotalDue.ClientID %>').value = parseFloat(document.getElementById('<%= hdnDueAmt.ClientID %>').value) + cmpdueamt;
        document.getElementById('<%= txtpatientReceiptAmt.ClientID %>').value = ReceiptAmt;
        document.getElementById('<%= txtTotalReciptAmt.ClientID %>').value = ReceiptAmt;
         document.getElementById('' + ctrlcom + '_ReceiptControl2_txtreqamtkyd').value = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatdue').value;
    }

    function BindAdjestumentdata1() {

        var umrno = '', patientid = 0;
        var flags = 0; var _osp = false;
        var form_name = document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnDocName').value;
        if (form_name == 'OPQUICK') {
            if (document.getElementById('' + ctrlcom + '_hdnPatientid').value != null) {
                /*patientid = document.getElementById('' + ctrlcom + '_hdnPatientid').value;*/
                patientid = document.getElementById('' + ctrlcom + '_umrPatientDetails_hdnPatientid').value
                if (document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnOPDState').value == 'Y') {
                    umrno = document.getElementById('' + ctrlcom + '_umrPatientDetails_Umrlookup_txtSearchControl').value;
                }
                else {

                    /*umrno = document.getElementById('' + ctrlcom + '_Umrlookup_txtSearchControl').value;*/
                    umrno = document.getElementById('' + ctrlcom + '_umrPatientDetails_Umrlookup_txtSearchControl').value;
                }
            }
            var _strval = document.getElementById('' + ctrlcom + '_pre_regi').value;
            if (_strval == 5) {
                _osp = true;
            }
        }
        else if (form_name == 'OP' || form_name == 'Cons' || form_name == 'OUTSTDNGDUE') {
            if(document.getElementById('' + ctrlcom + '_umrPatientDetails_hdnPatientid')!=null)
            {
                patientid = document.getElementById('' + ctrlcom + '_umrPatientDetails_hdnPatientid').value;
                umrno = document.getElementById('' + ctrlcom + '_umrPatientDetails_Umrlookup_txtSearchControl').value;
                if (form_name == 'OP') {
                    _osp = document.getElementById('' + ctrlcom + '_chkIsOsp').checked;
                }
            }
        }
        else if (document.getElementById('<%= hdnDocName.ClientID %>').value == 'NewChangeReceipt') {
            patientid = document.getElementById('' + ctrlcom + '_hdnPatid').value;
            umrno = $('#' + ctrlcom + '_IPPatientDtls1_ucAdmission_txtSearchControl').val();
        }
        else if (document.getElementById('<%= hdnDocName.ClientID %>').value == 'IPFINAL') {
            patientid = document.getElementById('' + ctrlcom + '_IPPatientDtls1_hdnPatID').value;
            umrno = $('#' + ctrlcom + '_IPPatientDtls1_ucAdmission_txtSearchControl').val();
        }
        else if (document.getElementById('<%= hdnDocName.ClientID %>').value == 'IpAdvance') {
            patientid = $('[id*=hdnPatID]').val();
            umrno = $('#' + ctrlcom + '_AdmnPatientDetails_ucAdmission_txtSearchControl').val();
        }
        else {
            if (document.getElementById('' + ctrlcom + '_hdnPatientid') != null) {
                patientid = document.getElementById('' + ctrlcom + '_hdnPatientid').value;
                if (document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnOPDState').value == 'Y') {
                    umrno = document.getElementById('' + ctrlcom + '_umrPatientDetails_Umrlookup_txtSearchControl').value;
                }
                else {
                    umrno = document.getElementById('' + ctrlcom + '_Umrlookup_txtSearchControl').value;
                }
            }
        }
        if (umrno == '' || umrno == undefined || umrno == null || umrno == "NaN") { umrno = ''; }
        if (patientid == '' || patientid == undefined || patientid == null || patientid == "NaN") { patientid = '0'; }
        if (_osp == true) {
            if (document.getElementById('<%= ddlPaymentType.ClientID %>').value == 11) {
                $(".toast").toastText("Info", "System does not allow the advance adjustment for osp patients.", 5, 2);
                document.getElementById('<%= ddlPaymentType.ClientID %>').value = 1;
                return false;
            }
            else if (document.getElementById('<%= ddlPaymentType.ClientID %>').value == 12) {
                $(".toast").toastText("Info", "System does not allow the Funds adjustment for osp patients.", 5, 2);
                document.getElementById('<%= ddlPaymentType.ClientID %>').value = 1;
                return false;
            }
        }
        if (umrno != '' && patientid != '0') {
            if (document.getElementById('<%= ddlPaymentType.ClientID %>').value == 11) {
                flags = 11;
                var type = "OP";
                var admn_id = "0";
                var UrlVal = ReturnIniUrl();
                $.ajax({
                    type: "POST",
                    url: UrlVal + "ServiceMasterWebService.asmx/BindAdjestumentdataAmount",
                    data: "{'umrno': '" + umrno + "','patientid': '" + patientid + "','flag': '" + flags + "','type':'" + type + "','admn_id':'" + admn_id + "'}",
                    contentType: "application/json; charset=utf-8",
                    dataType: "json",
                    async: false,
                    error: function (jqXHR, textStatus, errorThrown) {
                        $(".toast").toastText("Info", errorThrown, 5, 3);
                    },
                    success: function (JData) {
                        if (JData.d != null) {
                            if (JData.d.length > 0) {
                                if (JData.d[0].RECORD_STATUS == 'N') {
                                    $(".stoast").toastText("warning", "This umr# against balance amount is in refund not approval state", 5, 3);
                                    return false;
                                }
                                document.getElementById('<%=txtadjustmentamt.ClientID%>').value = JData.d[0].AMOUNT;
                                document.getElementById('<%=hdnAdjustableAdvAmt.ClientID%>').value = JData.d[0].AMOUNT;
                                tdadv.style.display = 'block';
                                tdadvcell.style.display = 'block';
                                document.getElementById('<%=txtorganizationFund.ClientID%>').value = 0;
                                tdfund.style.display = 'none';
                                tdfundcell.style.display = 'none';
                            }
                        }
                    }
                });
            }
            else if (document.getElementById('<%= ddlPaymentType.ClientID %>').value == 12) {
                flags = 12;
                var UrlVal = ReturnIniUrl();
                var type = "OP";
                var admn_id = "0";
                $.ajax({
                    type: "POST",
                    url: UrlVal + "ServiceMasterWebService.asmx/BindAdjestumentdataAmount",
                    data: "{'umrno': '" + umrno + "','patientid': '" + patientid + "','flag': '" + flags + "','type':'" + type + "','admn_id':'" + admn_id + "'}",
                    contentType: "application/json; charset=utf-8",
                    dataType: "json",
                    async: false,
                    error: function (jqXHR, textStatus, errorThrown) {
                        $(".toast").toastText("Info", errorThrown, 5, 2)
                    },
                    success: function (JData) {
                        if (JData.d != null) {
                            if (JData.d.length > 0) {
                                fund_amt = 0;
                                for (var i = 0; i < JData.d.length; i++) {
                                    fund_amt = parseFloat(fund_amt) + parseFloat(JData.d[i].AMOUNT);
                                    document.getElementById('<%=txtorganizationFund.ClientID%>').value = fund_amt;
                                    document.getElementById('<%=txtorganizationFund.ClientID%>').value = JData.d[0].AMOUNT;
                                    tdfund.style.display = 'block';
                                    tdfundcell.style.display = 'block';
                                    document.getElementById('<%=txtadjustmentamt.ClientID%>').value = 0;
                                    tdadv.style.display = 'none';
                                    tdadvcell.style.display = 'none';
                                }
                            }
                        }
                    }
                });
            }
            else {
                document.getElementById('<%=txtadjustmentamt.ClientID%>').value = 0;

                if (document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnDocName').value == "NewChangeReceipt") {
                    // tdadv[0].style.display = 'none';
                    // tdadvcell[0].style.display = 'none';
                    //  tdadvcell[1].style.display = 'none';
                }
                else {
                    tdadv.style.display = 'none';
                    tdadvcell.style.display = 'none';
                }
                document.getElementById('<%=txtorganizationFund.ClientID%>').value = 0;
                if (document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnDocName').value == "NewChangeReceipt") {
                    //tdfund[0].style.display = 'none';
                    //  tdfundcell[0].style.display = 'none';
                    //tdfund[1].style.display = 'none';
                    // tdfundcell[1].style.display = 'none';
                }
                else {
                    tdfund.style.display = 'none';
                    tdfundcell.style.display = 'none';
                }
            }

        }
    }



    function convertAmt() {
        var amt = document.getElementById('<%= txtamt.ClientID %>').value;
        var exrate = document.getElementById('<%= txtExchangeRate.ClientID %>').value;
        var amtcurr = parseFloat(amt) * parseFloat(exrate);
        if (amtcurr == '' || amtcurr == undefined || isNaN(amtcurr)) {
            amtcurr = 0;
        }
        document.getElementById('<%= txtCurrAmt.ClientID %>').value = amtcurr;
    }

    function GetExchangeRate() {

        if (document.getElementById('<%= hdncurridadmn.ClientID %>') != null || document.getElementById('<%= hdncurridadmn.ClientID %>') != undefined) {
            if (document.getElementById('<%= hdncurridadmn.ClientID %>').value == document.getElementById('<%= ddlCurrency.ClientID %>').value) {
                document.getElementById('<%= txtExchangeRate.ClientID %>').value = document.getElementById('<%= hdncurridadmnval.ClientID %>').value;

                var exchangerate = document.getElementById('<%= txtExchangeRate.ClientID %>').value;
                var dueAmt = 0;
                var doc_name = document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnDocName').value;
                if (doc_name == 'OUTSTDNGDUE') {
                    var receiptamt = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtreceiptAmount').value;
                    var currdueamt = document.getElementById('' + ctrlcom + '_txtDueAmount').value;
                    if (currdueamt == undefined || currdueamt == "" || isNaN(currdueamt)) {
                        currdueamt = 0;
                    }
                    if (receiptamt == undefined || receiptamt == "" || isNaN(receiptamt)) {
                        receiptamt = 0;
                    }
                    dueAmt = parseFloat(currdueamt) - parseFloat(receiptamt);
                    document.getElementById('<%= hdnDueAmt.ClientID %>').value = dueAmt;
                }
                else {
                    dueAmt = document.getElementById('<%=txtpatdue.ClientID %>').value;
                }
                if (dueAmt == undefined || dueAmt == "" || isNaN(dueAmt)) {
                    dueAmt = 0;
                }
                if (parseFloat(dueAmt) > 0) {
                    document.getElementById('<%= txtreqamtkyd.ClientID %>').value = setProperDecimalsCorp(parseFloat(dueAmt) / parseFloat(exchangerate));
                } else {
                    if (doc_name == 'IpAdvance') {
                        var type = getParameterByName('Type'); var hdnstpCurrExRate = $('[id*=hdnstpCurrExRate]').val();
                        if (hdnstpCurrExRate == '' || hdnstpCurrExRate == null || hdnstpCurrExRate == undefined) { hdnstpCurrExRate = 1; }
                        if(document.getElementById('' + ctrlcom + '_txtadvcollamt')!=null){
                        var advAmt = document.getElementById('' + ctrlcom + '_txtadvcollamt').value;}
                        else{var advAmt =0;}
                        
                        var recAmt = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtreceiptAmount').value;
                        if (advAmt == '' || advAmt == null || advAmt == undefined) { advAmt = 0; }
                        if (recAmt == '' || recAmt == null || recAmt == undefined) { recAmt = 0; }
                        recAmt = parseFloat(recAmt) / parseFloat(hdnstpCurrExRate);
                        advAmt = parseFloat(advAmt) - parseFloat(recAmt);
                        if ((type == 'admnadv' && parseFloat(advAmt) > 0) || (type != 'admnadv' && parseFloat(advAmt) > 0)) {
                            var exchangerate = document.getElementById('<%= txtExchangeRate.ClientID %>').value;
                            if (exchangerate == '' || exchangerate == undefined || exchangerate == null) { exchangerate = 1; }

                            if (parseFloat(exchangerate) == parseFloat(hdnstpCurrExRate)) {
                                document.getElementById('<%= txtreqamtkyd.ClientID %>').value = setProperDecimalsCorp(advAmt);
                            }
                            else {
                                var _advAmt = (parseFloat(advAmt) * parseFloat(hdnstpCurrExRate));
                                if (_advAmt == '' || _advAmt == null || _advAmt == undefined) { _advAmt = 0; }
                                document.getElementById('<%= txtreqamtkyd.ClientID %>').value = setProperDecimalsCorp(_advAmt / exchangerate)
                            }
                        }
                        else { document.getElementById('<%= txtreqamtkyd.ClientID %>').value = 0; }
                    }
                    /*  else {/*cmmented by sitaram
                    document.getElementById('<%= txtreqamtkyd.ClientID %>').value = 0;
                    }*/
                }
                var currindex = document.getElementById('<%= ddlCurrency.ClientID %>').selectedIndex;
                var currcd = document.getElementById('<%= ddlCurrency.ClientID %>')[currindex].text;
                document.getElementById('<%= lblcurrcd.ClientID %>').innerHTML = currcd;
                return false;

            }
        }
        if (document.getElementById('<%= ddlCurrency.ClientID %>').selectedIndex == 0) {
            document.getElementById('<%= ddlCurrency.ClientID %>').className = 'red';
            document.getElementById('<%= lblcurrcd.ClientID %>').innerHTML = $('[id$=ddlCurrency]').find('option:selected').text() == "--Select--" ? "" : $('[id$=ddlCurrency]').find('option:selected').text();
        }
        else {
            document.getElementById('<%= txtTenderedAmt.ClientID %>').value = '';
            document.getElementById('<%= ddlCurrency.ClientID %>').className = 'grey';
            var currid = document.getElementById('<%= hdnstpcurrid.ClientID %>').value;
            var toid = document.getElementById('<%= ddlCurrency.ClientID %>').value;
            var dueAmt = document.getElementById('<%= hdnDueAmt.ClientID %>').value;
            if (currid != toid) {
                if (currid == undefined || currid == null || currid == "") { currid = "0"; }
                if (toid == undefined || toid == null || toid == "") { toid = "0"; }
                var _tocurid = parseInt(toid);
                var _fromcurid = parseInt(currid);
                var form_name = document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnDocName').value;
                if (form_name == "CorporateCheckEntry" || form_name == "CorporateCheck") {
                    var flag = 'I';
                    GetAsync(
                        "Gridservice.asmx/GetExchangeRateNew",
                        { fromcurid: _tocurid, tocurid: _fromcurid, flag: flag },
                        function (jdata) {
                            OnSuccess(jdata.d);
                        },
                        function (jqXHR, textStatus, errorThrown) {
                            $(".toast").toastText("Info", errorThrown, 5, 2);
                        });
                }
                else {
                    GetAsync(
                        "Gridservice.asmx/GetExchangeRate",
                        { fromcurid: _tocurid, tocurid: _fromcurid },
                        function (jdata) {
                            OnSuccess(jdata.d);
                        },
                        function (jqXHR, textStatus, errorThrown) {
                            $(".toast").toastText("Info", errorThrown, 5, 2);
                        });
                }
                document.getElementById('<%= txtExchangeRate.ClientID %>').value = '1';
                document.getElementById('<%= txtreqamtkyd.ClientID %>').value = setProperDecimalsCorp(dueAmt);
            }
            else {
                var currindex = document.getElementById('<%= ddlCurrency.ClientID %>').selectedIndex;
                var currcd = document.getElementById('<%= ddlCurrency.ClientID %>')[currindex].text;
                document.getElementById('<%= lblcurrcd.ClientID %>').innerHTML = currcd;
                document.getElementById('<%= txtExchangeRate.ClientID %>').value = '1';
                var form_name = document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnDocName').value;
                if (form_name == 'OUTSTDNGDUE' || form_name == 'Refund') {
                    if (form_name == 'OUTSTDNGDUE') {
                        var receiptamt = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtreceiptAmount').value;
                        var currdueamt = document.getElementById('' + ctrlcom + '_txtDueAmount').value;
                        if (currdueamt == undefined || currdueamt == "" || isNaN(currdueamt)) {
                            currdueamt = 0;
                        }
                        if (receiptamt == undefined || receiptamt == "" || isNaN(receiptamt)) {
                            receiptamt = 0;
                        }
                        dueAmt = parseFloat(currdueamt) - parseFloat(receiptamt);
                        document.getElementById('<%= hdnDueAmt.ClientID %>').value = dueAmt;
                    }
                    else if (form_name == 'Refund') {
                        dueAmt = $('#' + ctrlcom + '_txtRefundableAmt').val();
                    }
                    var receipt_amtnt = $('#' + ctrlcom + '_ReceiptControl2_txtreceiptAmount').val();
                    if (parseFloat(receipt_amtnt) > 0)
                    { }
                    else
                    { receipt_amtnt = 0; }
                    document.getElementById('<%= txtreqamtkyd.ClientID %>').value = setProperDecimalsCorp(parseFloat(dueAmt) - parseFloat(receipt_amtnt));
                }
                else if(form_name == 'PREADVANCE' && preadvflag=='SD')
                {
                    dueAmt = ctl00_ContentPlaceHolder1_ReceiptControl2_txtreqamtkyd.value;
                }
                else {
                    if (form_name == 'IpAdvance') {
                        var type = getParameterByName('Type'); var hdnstpCurrExRate = $('[id*=hdnstpCurrExRate]').val();
                        if (hdnstpCurrExRate == '' || hdnstpCurrExRate == null || hdnstpCurrExRate == undefined) { hdnstpCurrExRate = 1; }
                           if(document.getElementById('' + ctrlcom + '_txtadvcollamt')!=null){
                        var advAmt = document.getElementById('' + ctrlcom + '_txtadvcollamt').value;}
                        else{var advAmt =0;}
                        var recAmt = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtreceiptAmount').value;
                        if (advAmt == '' || advAmt == null || advAmt == undefined) { advAmt = 0; }
                        if (recAmt == '' || recAmt == null || recAmt == undefined) { recAmt = 0; }
                        recAmt = parseFloat(recAmt) / parseFloat(hdnstpCurrExRate);
                        advAmt = parseFloat(advAmt) - parseFloat(recAmt);
                        if ((type == 'admnadv' && parseFloat(advAmt) > 0) || (type != 'admnadv' && parseFloat(advAmt) > 0)) {
                            var exchangerate = document.getElementById('<%= txtExchangeRate.ClientID %>').value;
                            if (exchangerate == '' || exchangerate == undefined || exchangerate == null) { exchangerate = 1; }

                            if (parseFloat(exchangerate) == parseFloat(hdnstpCurrExRate)) {
                                document.getElementById('<%= txtreqamtkyd.ClientID %>').value = setProperDecimalsCorp(advAmt);
                            }
                            else {
                                var _advAmt = (parseFloat(advAmt) * parseFloat(hdnstpCurrExRate));
                                if (_advAmt == '' || _advAmt == null || _advAmt == undefined) { _advAmt = 0; }
                                document.getElementById('<%= txtreqamtkyd.ClientID %>').value = setProperDecimalsCorp(_advAmt / exchangerate)
                            }
                        }
                        else { document.getElementById('<%= txtreqamtkyd.ClientID %>').value = 0; }
                    }
                    else {
                       if (form_name != 'IMRSRVENTRY') {
                        document.getElementById('<%= txtreqamtkyd.ClientID %>').value = setProperDecimalsCorp(dueAmt);
                        }
                    }
                }
                if (document.getElementById('<%= chkotpadvanced.ClientID %>').checked == false) {
                    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtCurrAmt').value = "0";
                    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtamt').value = "0";
                    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtChangeKyd').value = "0";
                }
                if (dueAmt == '' || dueAmt == null || dueAmt == undefined|| dueAmt == 'undefined') { dueAmt = 0; }
                SetCurrencyAmtFields(dueAmt, '1');
            }
        }
    }
    function OnSuccess(result) {
        if (result.length > 0) {
            document.getElementById('<%= imgbtnadd.ClientID %>').disabled = false;
            var exrate = 0;
            var dueAmt = document.getElementById('<%= hdnDueAmt.ClientID %>').value;
            var roundtype = document.getElementById('<%=hdnroundtype.ClientID %>').value;
            var rounddec = document.getElementById('<%=hdnroundoffval.ClientID %>').value;
            if (result != null && result.length > 0) {
                var str = result[0];
                if (str == undefined) {
                    $(".toast").toastText("Info", "Exchange Rate For this Currency not Set in Currency Settigns", 5, 2);
                    document.getElementById('<%= txtExchangeRate.ClientID %>').value = '1';
                    document.getElementById('<%= txtreqamtkyd.ClientID %>').value = setProperDecimalsCorp(dueAmt);
                }
                else {
                    var paymnttype = document.getElementById('<%= ddlPaymentType.ClientID %>').value;
                    var exrate = '';
                    if (paymnttype == 1)
                        exrate = result[0].EX_RATE;
                    else if (paymnttype == 2)
                        exrate = result[0].EXCHANGE_RATE_CHAQUE;
                    else if (paymnttype == 4 || paymnttype == 5)
                        exrate = result[0].EXCHANGE_RATE_CARD;
                    else if (paymnttype == 3)
                        exrate = result[0].EXCHANGE_RATE_DD;
                    else
                        exrate = result[0].EXCHANGE_RATE_OTHERS;
                    var currindex = document.getElementById('<%= ddlCurrency.ClientID %>').selectedIndex;
                    var currcd = document.getElementById('<%= ddlCurrency.ClientID %>')[currindex].text;
                    document.getElementById('<%= txtExchangeRate.ClientID %>').value = setProperDecimalsCorp(exrate);
                    document.getElementById('<%= lblcurrcd.ClientID %>').innerHTML = currcd;
                    SetCurrencyAmtFields(dueAmt, exrate);
                }
            }
        }
        else {
            //            document.getElementById('<%= imgbtnadd.ClientID %>').disabled = true;
            $(".stoast").toastText("Info", "No Configuration ForThis Currency , Please Contact Administrator", 5, 2);
            document.getElementById('<%= ddlCurrency.ClientID %>').value = 0;
        }
    }
    function setProperDecimalsCorp(ActualVal) {
        if (ActualVal == undefined || ActualVal == null || ActualVal == '') { ActualVal = 0; }
        var power = Math.pow(10, 6 || 0);
        var ActualVal = String(Math.round(ActualVal * power) / power);
        if ((ActualVal.indexOf('.') + 1) == 0) {
            ActualVal = ActualVal;
        }
        return ActualVal;
    }
    function SetCurrencyAmtFields(netamt, exchngrt) {
        var form_name = document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnDocName').value;
        if (form_name == "PreRefund") { netamt = document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnNetAmt').value; }
        var roundamt = (parseFloat(netamt) / parseFloat(exchngrt) * Math.pow(10, 6)) / Math.pow(10, 6);
        if (parseFloat(roundamt) > 0) {
            var rec_amt_chng = 0;
            if (form_name == 'OUTSTDNGDUE' || form_name == 'Refund' || form_name == "PreRefund") {
                rec_amt_chng = $('#' + ctrlcom + '_ReceiptControl2_txtreceiptAmount').val();
                if (rec_amt_chng == null || rec_amt_chng == "") { rec_amt_chng = 0; }
                var req_amt_new = parseFloat(roundamt) - parseFloat(rec_amt_chng);
                if (parseFloat(req_amt_new) > 0)
                { }
                else
                { req_amt_new = roundamt; }
                document.getElementById('<%= txtreqamtkyd.ClientID %>').value = setProperDecimalsCorp(req_amt_new);
            }
            else if (form_name == 'ASSESOUTSTDNGDUE') {
                rec_amt_chng = $('#' + ctrlcom + '_ReceiptControl2_txtreceiptAmount').val();
                var req_amt_new = parseFloat(roundamt) - parseFloat(rec_amt_chng);
                if (parseFloat(req_amt_new) > 0)
                { }
                else
                { req_amt_new = roundamt; }
                document.getElementById('<%= txtreqamtkyd.ClientID %>').value = setProperDecimalsCorp(req_amt_new);
            }
            else {
                if (doc_name == 'IpAdvance') {
                    var type = getParameterByName('Type'); var hdnstpCurrExRate = $('[id*=hdnstpCurrExRate]').val();
                    if (hdnstpCurrExRate == '' || hdnstpCurrExRate == null || hdnstpCurrExRate == undefined) { hdnstpCurrExRate = 1; }
                       if(document.getElementById('' + ctrlcom + '_txtadvcollamt')!=null){
                        var advAmt = document.getElementById('' + ctrlcom + '_txtadvcollamt').value;}
                        else{var advAmt =0;}
                    var recAmt = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtreceiptAmount').value;
                    if (advAmt == '' || advAmt == null || advAmt == undefined) { advAmt = 0; }
                    if (recAmt == '' || recAmt == null || recAmt == undefined) { recAmt = 0; }
                    recAmt = parseFloat(recAmt) / parseFloat(hdnstpCurrExRate);
                    advAmt = parseFloat(advAmt) - parseFloat(recAmt);
                    if ((type == 'admnadv' && parseFloat(advAmt) > 0) || (type != 'admnadv' && parseFloat(advAmt) > 0)) {
                        var exchangerate = document.getElementById('<%= txtExchangeRate.ClientID %>').value;
                        if (exchangerate == '' || exchangerate == undefined || exchangerate == null) { exchangerate = 1; }

                        if (parseFloat(exchangerate) == parseFloat(hdnstpCurrExRate)) {
                            document.getElementById('<%= txtreqamtkyd.ClientID %>').value = setProperDecimalsCorp(advAmt);
                        }
                        else {
                            var _advAmt = (parseFloat(advAmt) * parseFloat(hdnstpCurrExRate));
                            if (_advAmt == '' || _advAmt == null || _advAmt == undefined) { _advAmt = 0; }
                            document.getElementById('<%= txtreqamtkyd.ClientID %>').value = setProperDecimalsCorp(_advAmt / exchangerate)
                        }
                    }
                    else { document.getElementById('<%= txtreqamtkyd.ClientID %>').value = 0; }
                }
                else {
                    //                    if (document.getElementById('' + ctrlcom + '_UCServices_hdnisallowgst').value.toUpperCase() == "YES") {
                    //                        var dueamount = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatdue').value;
                    //                        if (dueamount == '' || dueamount == null || dueamount == undefined) { dueamount = 0; }
                    //                        document.getElementById('<%= txtreqamtkyd.ClientID %>').value = setProperDecimalsCorp(parseFloat(roundamt) + parseFloat(dueamount));
                    ////                    }
                    //                    else{
                    document.getElementById('<%= txtreqamtkyd.ClientID %>').value = setProperDecimalsCorp(roundamt);
                    //                    }
                }
            }
            var _tenderedamt = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtTenderedAmt').value;
            var _exchangeRate = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtExchangeRate').value;
            var _amt = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtamt').value;
            if (_amt == null || _amt == undefined || _amt == "" || _amt == "NaN") { _amt = 0; }
            if (_tenderedamt == null || _tenderedamt == undefined || _tenderedamt == "" || _tenderedamt == "NaN") { _tenderedamt = 0; }
            if (_exchangeRate == null || _exchangeRate == undefined || _exchangeRate == "" || _exchangeRate == "NaN") { _exchangeRate = 0; }
            var amtin = 0;
            if (document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlPaymentType').value == 1) {
                amtin = setProperDecimalsCorp(parseFloat(_tenderedamt) * parseFloat(_exchangeRate));
            }
            else {
                amtin = setProperDecimalsCorp(parseFloat(_amt) * parseFloat(_exchangeRate));
            }
            if (document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlPaymentType').value == 1) {
                document.getElementById('' + ctrlcom + '_ReceiptControl2_txtCurrAmt').value = amtin;
                document.getElementById('<%= lblcurrcd.ClientID %>').innerHTML = $('[id$=ddlCurrency]').find('option:selected').text();
            }
            else {
                document.getElementById('' + ctrlcom + '_ReceiptControl2_txtCurrAmt').value = amtin;
            }
        }
        else {
            var doc_name = $('#' + ctrlcom + '_ReceiptControl2_hdnDocName').val();
            if (doc_name == 'OUTSTDNGDUE') {
                var due_amt = $('#' + ctrlcom + '_txtDueAmount').val();
                rec_amt_chng = $('#' + ctrlcom + '_ReceiptControl2_txtreceiptAmount').val();
                var req_amt_new = parseFloat(due_amt) - parseFloat(rec_amt_chng);
                if (parseFloat(req_amt_new) > 0)
                { }
                else
                { req_amt_new = 0; }
                document.getElementById('<%= txtreqamtkyd.ClientID %>').value = setProperDecimalsCorp(req_amt_new);

                document.getElementById('' + ctrlcom + '_ReceiptControl2_txtCurrAmt').value = 0;
                document.getElementById('' + ctrlcom + '_ReceiptControl2_txtamt').value = 0;
            }
            else {
                if (document.getElementById('<%= chkotpadvanced.ClientID %>').checked == false) {
                    if (doc_name == 'IpAdvance') {
                        var type = getParameterByName('Type'); var hdnstpCurrExRate = $('[id*=hdnstpCurrExRate]').val();
                        if (hdnstpCurrExRate == '' || hdnstpCurrExRate == null || hdnstpCurrExRate == undefined) { hdnstpCurrExRate = 1; }
                           if(document.getElementById('' + ctrlcom + '_txtadvcollamt')!=null){
                        var advAmt = document.getElementById('' + ctrlcom + '_txtadvcollamt').value;}
                        else{var advAmt =0;}
                        var recAmt = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtreceiptAmount').value;
                        if (advAmt == '' || advAmt == null || advAmt == undefined) { advAmt = 0; }
                        if (recAmt == '' || recAmt == null || recAmt == undefined) { recAmt = 0; }
                        recAmt = parseFloat(recAmt) / parseFloat(hdnstpCurrExRate);
                        advAmt = parseFloat(advAmt) - parseFloat(recAmt);
                        if ((type == 'admnadv' && parseFloat(advAmt) > 0) || (type != 'admnadv' && parseFloat(advAmt) > 0)) {
                            var exchangerate = document.getElementById('<%= txtExchangeRate.ClientID %>').value;
                            if (exchangerate == '' || exchangerate == undefined || exchangerate == null) { exchangerate = 1; }

                            if (parseFloat(exchangerate) == parseFloat(hdnstpCurrExRate)) {
                                document.getElementById('<%= txtreqamtkyd.ClientID %>').value = setProperDecimalsCorp(advAmt);
                            }
                            else {
                                var _advAmt = (parseFloat(advAmt) * parseFloat(hdnstpCurrExRate));
                                if (_advAmt == '' || _advAmt == null || _advAmt == undefined) { _advAmt = 0; }
                                document.getElementById('<%= txtreqamtkyd.ClientID %>').value = setProperDecimalsCorp(_advAmt / exchangerate)
                            }
                        }
                        else { document.getElementById('<%= txtreqamtkyd.ClientID %>').value = 0; }
                    }
                    else {
                    if(doc_name!='IMRSRVENTRY')
                        document.getElementById('<%= txtreqamtkyd.ClientID %>').value = 0;

                    }

                    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtCurrAmt').value = 0;
                    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtamt').value = 0;
                }
            }
        }
    }
    function FailureCallBack(result) {
        $(".toast").toastText("Info", "Failed", 5, 3)
    }

    function remove() {
        var ReceiptAmt = 0;
        var grid = document.getElementById('<%= gvReceiptDetails.ClientID %>')
        var totchangeamtforwords=0;
        var chaamtforwors=0; var totamtforwords=0;
        $("table[id*=gvReceiptDetails] tr:has(td)").each(function (e) {
            var convertedamt = $(this).closest('tr').find("[id*=lblconvertedamt]").text(); /* changed lblcnverted into lblamunt by sitaram*/
            if (convertedamt == '' || convertedamt == undefined || isNaN(convertedamt)) {
                convertedamt = 0;
            }
            ReceiptAmt = parseFloat(ReceiptAmt) + parseFloat(convertedamt);

            
          if( $(this).closest('tr').find("[id*=lblAmount]").text() !=''|| $(this).closest('tr').find("[id*=lblAmount]").text()!='undefined'|| $(this).closest('tr').find("[id*=lblAmount]").text()!=undefined||$(this).closest('tr').find("[id*=lblAmount]").text()!=null){
        totamtforwords=parseFloat(totamtforwords)+parseFloat($(this).closest('tr').find("[id*=lblAmount]").text());
        
         if (totamtforwords == '' || totamtforwords == undefined|| totamtforwords == 'undefined' || totamtforwords == null || isNaN(totamtforwords)) { totamtforwords = "0"; }
       var chaamtforwords= $(this).closest('tr').find("[id*=lblchange]").text();
         if (chaamtforwords == '' || chaamtforwords == undefined|| chaamtforwords == 'undefined' || chaamtforwords == null || isNaN(chaamtforwords)) { chaamtforwords = "0"; }
        totchangeamtforwords=parseFloat(totchangeamtforwords)+parseFloat(chaamtforwords);
         if (totchangeamtforwords == '' || totchangeamtforwords == undefined|| totchangeamtforwords == 'undefined' || totchangeamtforwords == null || isNaN(totchangeamtforwords)) { totchangeamtforwords = "0"; }
        }

        if($("table[id$=gvReceiptDetails] tr:has(td)").length==parseFloat(e)+1){
      
       document.getElementById('' + ctrlcom + '_ReceiptControl2_txttotamtinwordsadd').innerHTML =  convertNumberToWords(parseFloat(totamtforwords)).toLowerCase().replace(/(^.|\s+.)/g, m=>m.toUpperCase());
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtchangeamtinwordsadd').innerHTML =convertNumberToWords(parseFloat(totchangeamtforwords)).toLowerCase().replace(/(^.|\s+.)/g, m=>m.toUpperCase()); 
      
        
        }

        });
        var netAmount = document.getElementById('<%= hdnNetAmt.ClientID %>').value;

        document.getElementById('<%= hdnHTMLString1.ClientID %>').value = grid.innerHTML;
        document.getElementById('<%= txtreceiptAmount.ClientID %>').value = ReceiptAmt;
        var dueamt = parseFloat(netAmount) - parseFloat(ReceiptAmt);

        if (dueamt == '' || dueamt == undefined || isNaN(dueamt)) {
            dueamt = 0;
        }
        var roundtype = document.getElementById('<%=hdnroundtype.ClientID %>').value;
        var rounddec = document.getElementById('<%=hdnroundoffval.ClientID %>').value;
        dueamt = RoundFloorCeil(roundtype, dueamt, rounddec);
        document.getElementById('<%= hdnDueAmt.ClientID %>').value = dueamt;
    }
    /* Newly Added By Naresh Begin*/
    var CurrentRowIndexNew = 0;
    function ShowHideOfGridDiscountSelection(obj) {
    if(document.getElementById('' + ctrlcom + '_UCServices_hdnisadditinal')!=null){
    if (document.getElementById('' + ctrlcom + '_UCServices_hdnisadditinal').value == 'Y')
    {document.getElementById('' + ctrlcom + '_UCServices_hdnisadditinal').value='N';}
    }
        var is_pas_enabled = $('#<%=hdnPasIntgrtnReq.ClientID %>').val();
        var doc_name = document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnDocName').value;
        if (obj.value == '2') {
            obj.value = 0;
            $(".toast").toastText("Info", "Health Card Discount Will Automatecally Apply No Need To Select", 5, 3)
            return false;
        }
        var grid = document.getElementById('' + ctrlcom + '_ReceiptControl2_gvMultipleConcession');
        if (document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnDocName').value == 'IPFINAL' || document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnDocName').value =='REG') {
        }
        else {
            var Srv_grid = document.getElementById('' + ctrlcom + '_UCServices_gvServices');
            var _index = 0;
            var _index = grid.rows.length;
            var Srv_index = 0;
            Srv_index = Srv_grid.rows.length;
            var GvRowscount = 1;
            var Srv_GvRowscount = 1;
            var Sel_Disc_Type_ids = '';
            var Disc_Count = 0;
            $("table[id$=ReceiptControl2_gvMultipleConcession] tr:has(td)").each(function (e) {
                for (GvRowscount; GvRowscount < _index; GvRowscount++) {
                    var Type = $('[id$=ReceiptControl2_gvMultipleConcession] tr').filter(':eq(' + GvRowscount + ')').find('[id*=ddlMultiDiscounttype]').val();
                    if (Type == '0') {
                    }
                    if (Type == '1')
                    { }
                    else if (Type == '2') {
                        $('.HCAMT').show();
                        $('.HCPER').show();
                        document.getElementById('' + ctrlcom + '_UCServices_gv_services_header_ctl02_h_dsc_1').style.display = "table-cell";
                        Disc_Count = parseInt(Disc_Count) + parseInt(1);
                        document.getElementById('' + ctrlcom + '_UCServices_gv_services_header_ctl02_h_dsc_1').innerHTML = "Health Card Disc.";
                        var Pat_cmp = 1;
                        if (doc_name == 'OP' || doc_name == 'Cons') {
                            Pat_cmp = $('#' + ctrlcom + '_uccorporate_ddlPaymentBy').val();
                        }
                        else if (doc_name == 'OPQUICK') {
                            var reg_type = $('#' + ctrlcom + '_ddlPatientType').val();
                            if (reg_type == 2 || reg_type == 6 || reg_type == 8 || reg_type == 9)
                            { Pat_cmp = 2; }
                            else
                            { Pat_cmp = 1; }
                        }
                        else { Pat_cmp = 1; }
                        if ((Pat_cmp == '2' || is_pas_enabled == 'True') && document.getElementById('' + ctrlcom + '_UCServices_hdnPrePrintedBarcodeReq').value == 'Yes')/* cmp with barcd*/
                        {
                            //document.getElementById('' + ctrlcom + '_UCServices_gv_services_header').className = 'grid gvServices-bdis' + Disc_Count;
                            //document.getElementById('' + ctrlcom + '_UCServices_gvServices').className = 'grid gvServices-bdis' + Disc_Count;
                        }
                        else if ((Pat_cmp == '2' || is_pas_enabled == 'True') && document.getElementById('' + ctrlcom + '_UCServices_hdnPrePrintedBarcodeReq').value != 'Yes') /* cmp without barcd*/
                        {
                            //document.getElementById('' + ctrlcom + '_UCServices_gv_services_header').className = 'grid gvServices-dis' + Disc_Count;
                            //document.getElementById('' + ctrlcom + '_UCServices_gvServices').className = 'grid gvServices-dis' + Disc_Count;
                        }
                        else if (Pat_cmp != '2' && document.getElementById('' + ctrlcom + '_UCServices_hdnPrePrintedBarcodeReq').value == 'Yes') /*pat with bartcd */
                        {
                            //document.getElementById('' + ctrlcom + '_UCServices_gv_services_header').className = 'grid gvServices-cbdis' + Disc_Count;
                            //document.getElementById('' + ctrlcom + '_UCServices_gvServices').className = 'grid gvServices-cbdis' + Disc_Count;
                        }
                        else if (Pat_cmp != '2' && document.getElementById('' + ctrlcom + '_UCServices_hdnPrePrintedBarcodeReq').value != 'Yes') /* pat without barcd */
                        {
                            //document.getElementById('' + ctrlcom + '_UCServices_gv_services_header').className = 'grid gvServices-cdis' + Disc_Count;
                            //document.getElementById('' + ctrlcom + '_UCServices_gvServices').className = 'grid gvServices-cdis' + Disc_Count;
                        }

                        $("table[id*=UCServices_gv_services_header] tr:has(td)").each(function (e) {
                            var ev = this.rowIndex;
                            $(this).closest('tr').find("input[type=text][id*=txthcPer]").css("display", "table-cell");
                            $(this).closest('tr').find("input[type=text][id*=txtHcAmt]").css("display", "table-cell");
                        });

                        $("table[id*=UCServices_gvServices] tr:has(td)").each(function (e) {
                            var ev = this.rowIndex;
                            $(this).closest('tr').find("input[type=text][id*=txthcPer]").css("display", "table-cell");
                            $(this).closest('tr').find("input[type=text][id*=txtHcAmt]").css("display", "table-cell");
                        });
                    }
                    else if (Type == '3') {
                        $('.MGAMT').show();
                        $('.MGPER').show();
                        document.getElementById('' + ctrlcom + '_UCServices_gv_services_header_ctl02_h_dsc_2').style.display = "table-cell";
                        Disc_Count = parseInt(Disc_Count) + parseInt(1);
                        document.getElementById('' + ctrlcom + '_UCServices_gv_services_header_ctl02_h_dsc_2').innerHTML = "Management Disc.";
                        var Pat_cmp = 1;
                        if (doc_name == 'OP' || doc_name == 'Cons') {
                            Pat_cmp = $('#' + ctrlcom + '_uccorporate_ddlPaymentBy').val();
                        }
                        else if (doc_name == 'OPQUICK') {
                            var reg_type = $('#' + ctrlcom + '_ddlPatientType').val();
                            if (reg_type == 2 || reg_type == 6 || reg_type == 8 || reg_type == 9)
                            { Pat_cmp = 2; }
                            else
                            { Pat_cmp = 1; }
                        }
                        else { Pat_cmp = 1; }
                        if ((Pat_cmp == '2' || is_pas_enabled == 'True') && document.getElementById('' + ctrlcom + '_UCServices_hdnPrePrintedBarcodeReq').value == 'Yes')/* cmp with barcd*/
                        {
                            //document.getElementById('' + ctrlcom + '_UCServices_gv_services_header').className = 'grid gvServices-bdis' + Disc_Count;
                            // document.getElementById('' + ctrlcom + '_UCServices_gvServices').className = 'grid gvServices-bdis' + Disc_Count;
                        }
                        else if ((Pat_cmp == '2' || is_pas_enabled == 'True') && document.getElementById('' + ctrlcom + '_UCServices_hdnPrePrintedBarcodeReq').value != 'Yes') /* cmp without barcd*/
                        {
                            //document.getElementById('' + ctrlcom + '_UCServices_gv_services_header').className = 'grid gvServices-dis' + Disc_Count;
                            //document.getElementById('' + ctrlcom + '_UCServices_gvServices').className = 'grid gvServices-dis' + Disc_Count;
                        }
                        else if (Pat_cmp != '2' && document.getElementById('' + ctrlcom + '_UCServices_hdnPrePrintedBarcodeReq').value == 'Yes') /*pat with bartcd */
                        {
                            //document.getElementById('' + ctrlcom + '_UCServices_gv_services_header').className = 'grid gvServices-cbdis' + Disc_Count;
                            //document.getElementById('' + ctrlcom + '_UCServices_gvServices').className = 'grid gvServices-cbdis' + Disc_Count;
                        }
                        else if (Pat_cmp != '2' && document.getElementById('' + ctrlcom + '_UCServices_hdnPrePrintedBarcodeReq').value != 'Yes') /* pat without barcd */
                        {
                            //document.getElementById('' + ctrlcom + '_UCServices_gv_services_header').className = 'grid gvServices-cdis' + Disc_Count;
                            //document.getElementById('' + ctrlcom + '_UCServices_gvServices').className = 'grid gvServices-cdis' + Disc_Count;
                        }

                        $("table[id*=UCServices_gv_services_header] tr:has(td)").each(function (e) {
                            var ev = this.rowIndex;
                            $(this).closest('tr').find("input[type=text][id*=txtmaPer]").css("display", "table-cell");
                            $(this).closest('tr').find("input[type=text][id*=txtmgAmt]").css("display", "table-cell");
                        });

                        $("table[id*=UCServices_gvServices] tr:has(td)").each(function (e) {
                            var ev = this.rowIndex;
                            $(this).closest('tr').find("input[type=text][id*=txtmaPer]").css("display", "table-cell");
                            $(this).closest('tr').find("input[type=text][id*=txtmgAmt]").css("display", "table-cell");
                        });
                    }
                    else if (Type == '4') {
                        $('.STAFPER').show();
                        $('.STAMT').show();
                        document.getElementById('' + ctrlcom + '_UCServices_gv_services_header_ctl02_h_dsc_3').style.display = "table-cell";
                        Disc_Count = parseInt(Disc_Count) + parseInt(1);
                        document.getElementById('' + ctrlcom + '_UCServices_gv_services_header_ctl02_h_dsc_3').innerHTML = "Staff Disc.";
                        var Pat_cmp = 1;
                        if (doc_name == 'OP' || doc_name == 'Cons') {
                            Pat_cmp = $('#' + ctrlcom + '_uccorporate_ddlPaymentBy').val();
                        }
                        else if (doc_name == 'OPQUICK') {
                            var reg_type = $('#' + ctrlcom + '_ddlPatientType').val();
                            if (reg_type == 2 || reg_type == 6 || reg_type == 8 || reg_type == 9)
                            { Pat_cmp = 2; }
                            else
                            { Pat_cmp = 1; }
                        }
                        else { Pat_cmp = 1; }
                        if ((Pat_cmp == '2' || is_pas_enabled == 'True') && document.getElementById('' + ctrlcom + '_UCServices_hdnPrePrintedBarcodeReq').value == 'Yes')/* cmp with barcd*/
                        {
                            // document.getElementById('' + ctrlcom + '_UCServices_gv_services_header').className = 'grid gvServices-bdis' + Disc_Count;
                            //document.getElementById('' + ctrlcom + '_UCServices_gvServices').className = 'grid gvServices-bdis' + Disc_Count;
                        }
                        else if ((Pat_cmp == '2' || is_pas_enabled == 'True') && document.getElementById('' + ctrlcom + '_UCServices_hdnPrePrintedBarcodeReq').value != 'Yes') /* cmp without barcd*/
                        {
                            //document.getElementById('' + ctrlcom + '_UCServices_gv_services_header').className = 'grid gvServices-dis' + Disc_Count;
                            // document.getElementById('' + ctrlcom + '_UCServices_gvServices').className = 'grid gvServices-dis' + Disc_Count;
                        }
                        else if (Pat_cmp != '2' && document.getElementById('' + ctrlcom + '_UCServices_hdnPrePrintedBarcodeReq').value == 'Yes') /*pat with bartcd */
                        {
                            //document.getElementById('' + ctrlcom + '_UCServices_gv_services_header').className = 'grid gvServices-cbdis' + Disc_Count;
                            //document.getElementById('' + ctrlcom + '_UCServices_gvServices').className = 'grid gvServices-cbdis' + Disc_Count;
                        }
                        else if (Pat_cmp != '2' && document.getElementById('' + ctrlcom + '_UCServices_hdnPrePrintedBarcodeReq').value != 'Yes') /* pat without barcd */
                        {
                            //document.getElementById('' + ctrlcom + '_UCServices_gv_services_header').className = 'grid gvServices-cdis' + Disc_Count;
                            //document.getElementById('' + ctrlcom + '_UCServices_gvServices').className = 'grid gvServices-cdis' + Disc_Count;
                        }
                        $("table[id*=UCServices_gv_services_header] tr:has(td)").each(function (e) {
                            var ev = this.rowIndex;
                            $(this).closest('tr').find("input[type=text][id*=txtstPer]").css("display", "table-cell");
                            $(this).closest('tr').find("input[type=text][id*=txtstAmt]").css("display", "table-cell");
                        });

                        $("table[id*=UCServices_gvServices] tr:has(td)").each(function (e) {
                            var ev = this.rowIndex;
                            $(this).closest('tr').find("input[type=text][id*=txtstPer]").css("display", "table-cell");
                            $(this).closest('tr').find("input[type=text][id*=txtstAmt]").css("display", "table-cell");
                        });
                    }
                    else if (Type == '5') {
                        $('.EBPER').show();
                        $('.EBAMT').show();
                        document.getElementById('' + ctrlcom + '_UCServices_gv_services_header_ctl02_h_dsc_4').style.display = "table-cell";
                        Disc_Count = parseInt(Disc_Count) + parseInt(1);
                        document.getElementById('' + ctrlcom + '_UCServices_gv_services_header_ctl02_h_dsc_4').innerHTML = "Event Based Disc.";
                        var Pat_cmp = 1;
                        if (doc_name == 'OP' || doc_name == 'Cons') {
                            Pat_cmp = $('#' + ctrlcom + '_uccorporate_ddlPaymentBy').val();
                        }
                        else if (doc_name == 'OPQUICK') {
                            var reg_type = $('#' + ctrlcom + '_ddlPatientType').val();
                            if (reg_type == 2 || reg_type == 6 || reg_type == 8 || reg_type == 9)
                            { Pat_cmp = 2; }
                            else
                            { Pat_cmp = 1; }
                        }
                        else { Pat_cmp = 1; }
                        if ((Pat_cmp == '2' || is_pas_enabled == 'True') && document.getElementById('' + ctrlcom + '_UCServices_hdnPrePrintedBarcodeReq').value == 'Yes')/* cmp with barcd*/
                        {
                            // document.getElementById('' + ctrlcom + '_UCServices_gv_services_header').className = 'grid gvServices-bdis' + Disc_Count;
                            //document.getElementById('' + ctrlcom + '_UCServices_gvServices').className = 'grid gvServices-bdis' + Disc_Count;
                        }
                        else if ((Pat_cmp == '2' || is_pas_enabled == 'True') && document.getElementById('' + ctrlcom + '_UCServices_hdnPrePrintedBarcodeReq').value != 'Yes') /* cmp without barcd*/
                        {
                            //document.getElementById('' + ctrlcom + '_UCServices_gv_services_header').className = 'grid gvServices-dis' + Disc_Count;
                            //document.getElementById('' + ctrlcom + '_UCServices_gvServices').className = 'grid gvServices-dis' + Disc_Count;
                        }
                        else if (Pat_cmp != '2' && document.getElementById('' + ctrlcom + '_UCServices_hdnPrePrintedBarcodeReq').value == 'Yes') /*pat with bartcd */
                        {
                            //document.getElementById('' + ctrlcom + '_UCServices_gv_services_header').className = 'grid gvServices-cbdis' + Disc_Count;
                            //document.getElementById('' + ctrlcom + '_UCServices_gvServices').className = 'grid gvServices-cbdis' + Disc_Count;
                        }
                        else if (Pat_cmp != '2' && document.getElementById('' + ctrlcom + '_UCServices_hdnPrePrintedBarcodeReq').value != 'Yes') /* pat without barcd */
                        {
                            // document.getElementById('' + ctrlcom + '_UCServices_gv_services_header').className = 'grid gvServices-cdis' + Disc_Count;
                            // document.getElementById('' + ctrlcom + '_UCServices_gvServices').className = 'grid gvServices-cdis' + Disc_Count;
                        }
                        $("table[id*=UCServices_gv_services_header] tr:has(td)").each(function (e) {
                            var ev = this.rowIndex;
                            $(this).closest('tr').find("input[type=text][id*=txtebPer]").css("display", "table-cell");
                            $(this).closest('tr').find("input[type=text][id*=txtebAmt]").css("display", "table-cell");
                        });

                        $("table[id*=UCServices_gvServices] tr:has(td)").each(function (e) {
                            var ev = this.rowIndex;
                            $(this).closest('tr').find("input[type=text][id*=txtebPer]").css("display", "table-cell");
                            $(this).closest('tr').find("input[type=text][id*=txtebAmt]").css("display", "table-cell");
                        });
                    }
                    else if (Type == '6') {
                        $('.CNCRLPER').show();
                        $('.CNCRLAMT').show();
                        document.getElementById('' + ctrlcom + '_UCServices_gv_services_header_ctl02_h_dsc_5').style.display = "table-cell";
                        Disc_Count = parseInt(Disc_Count) + parseInt(1);
                        document.getElementById('' + ctrlcom + '_UCServices_gv_services_header_ctl02_h_dsc_5').innerHTML = "Concession Rule Disc.";
                        var Pat_cmp = 1;
                        if (doc_name == 'OP' || doc_name == 'Cons') {
                            Pat_cmp = $('#' + ctrlcom + '_uccorporate_ddlPaymentBy').val();
                        }
                        else if (doc_name == 'OPQUICK') {
                            var reg_type = $('#' + ctrlcom + '_ddlPatientType').val();
                            if (reg_type == 2 || reg_type == 6 || reg_type == 8 || reg_type == 9)
                            { Pat_cmp = 2; }
                            else
                            { Pat_cmp = 1; }
                        }
                        else { Pat_cmp = 1; }
                        if ((Pat_cmp == '2' || is_pas_enabled == 'True') && document.getElementById('' + ctrlcom + '_UCServices_hdnPrePrintedBarcodeReq').value == 'Yes')/* cmp with barcd*/
                        {
                            // document.getElementById('' + ctrlcom + '_UCServices_gv_services_header').className = 'grid gvServices-bdis' + Disc_Count;
                            //document.getElementById('' + ctrlcom + '_UCServices_gvServices').className = 'grid gvServices-bdis' + Disc_Count;
                        }
                        else if ((Pat_cmp == '2' || is_pas_enabled == 'True') && document.getElementById('' + ctrlcom + '_UCServices_hdnPrePrintedBarcodeReq').value != 'Yes') /* cmp without barcd*/
                        {
                            // document.getElementById('' + ctrlcom + '_UCServices_gv_services_header').className = 'grid gvServices-dis' + Disc_Count;
                            // document.getElementById('' + ctrlcom + '_UCServices_gvServices').className = 'grid gvServices-dis' + Disc_Count;
                        }
                        else if (Pat_cmp != '2' && document.getElementById('' + ctrlcom + '_UCServices_hdnPrePrintedBarcodeReq').value == 'Yes') /*pat with bartcd */
                        {
                            // document.getElementById('' + ctrlcom + '_UCServices_gv_services_header').className = 'grid gvServices-cbdis' + Disc_Count;
                            // document.getElementById('' + ctrlcom + '_UCServices_gvServices').className = 'grid gvServices-cbdis' + Disc_Count;
                        }
                        else if (Pat_cmp != '2' && document.getElementById('' + ctrlcom + '_UCServices_hdnPrePrintedBarcodeReq').value != 'Yes') /* pat without barcd */
                        {
                            // document.getElementById('' + ctrlcom + '_UCServices_gv_services_header').className = 'grid gvServices-cdis' + Disc_Count;
                            // document.getElementById('' + ctrlcom + '_UCServices_gvServices').className = 'grid gvServices-cdis' + Disc_Count;
                        }
                        $("table[id*=UCServices_gv_services_header] tr:has(td)").each(function (e) {
                            var ev = this.rowIndex;
                            $(this).closest('tr').find("input[type=text][id*=txtRulePer]").css("display", "table-cell");
                            $(this).closest('tr').find("input[type=text][id*=txtcncrlAmt]").css("display", "table-cell");
                        });

                        $("table[id*=UCServices_gvServices] tr:has(td)").each(function (e) {
                            var ev = this.rowIndex;
                            $(this).closest('tr').find("input[type=text][id*=txtRulePer]").css("display", "table-cell");
                            $(this).closest('tr').find("input[type=text][id*=txtcncrlAmt]").css("display", "table-cell");
                        });
                    }
                    if (Type != '0') {
                        Sel_Disc_Type_ids = Sel_Disc_Type_ids + ',' + Type;
                    }
                }
            });
            var Val = $('table[id*=<%=gvMultipleConcession.ClientID %>] tr').filter(':eq(' + obj.parentElement.parentElement.rowIndex + ')').find('[id*=ddlMultiDiscounttype]').val();
            $('table[id*=<%=gvMultipleConcession.ClientID %>] tr').filter(':eq(' + obj.parentElement.parentElement.rowIndex + ')').find('[id*=ddlModes]').val(1);
            CurrentRowIndexNew = obj.parentElement.parentElement.rowIndex;
            hideSelectionColumn(obj, Val, Sel_Disc_Type_ids);
        }
    }

    function HideDiscountColumns(CurrentRowIndexNew) {
        var hccount = 0, mngcount = 0, stfcount = 0, ebcount = 0, crcount = 0;
        var doc_name = document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnDocName').value;
        var DisTypeId = $('[id$=gvMultipleConcession] tr').filter(':eq(' + CurrentRowIndexNew + ')').find('[id*=ddlMultiDiscounttype]').val();
        $("table[id*=gvServices] tr:has(td)").each(function (e) {
            var hcamt = $(this).closest('tr').find('input[type=text][id*=txtHcAmt]').val();
            var Mngamt = $(this).closest('tr').find('input[type=text][id*=txtHcAmt]').val();
            var staffamt = $(this).closest('tr').find('input[type=text][id*=txtHcAmt]').val();
            var ebamt = $(this).closest('tr').find('input[type=text][id*=txtHcAmt]').val();
            var cramt = $(this).closest('tr').find('input[type=text][id*=txtHcAmt]').val();
            if (hcamt == "" || hcamt == null || hcamt == undefined) { hcamt = "0"; }
            if (Mngamt == "" || Mngamt == null || Mngamt == undefined) { Mngamt = "0"; }
            if (staffamt == "" || staffamt == null || staffamt == undefined) { staffamt = "0"; }
            if (ebamt == "" || ebamt == null || ebamt == undefined) { ebamt = "0"; }
            if (cramt == "" || cramt == null || cramt == undefined) { cramt = "0"; }
            if (parseFloat(hcamt) > 0) { hccount++; }
            if (parseFloat(Mngamt) > 0) { mngcount++; }
            if (parseFloat(staffamt) > 0) { stfcount++; }
            if (parseFloat(ebamt) > 0) { ebcount++; }
            if (parseFloat(cramt) > 0) { crcount++; }
        });
        var Disc_Count = 0;
        $("table[id$=ReceiptControl2_gvMultipleConcession] tr:has(td)").each(function (e) {
            var Type = $(this).closest('tr').find('[id*=ddlMultiDiscounttype]').val();
            if (Type == '0') {
            }
            if (Type == '1')
            { }
            else if (Type == '2') {
                if (hccount == 0 && DisTypeId == Type) {
                    $('.HCAMT').hide();
                    $('.HCPER').hide();
                    document.getElementById('' + ctrlcom + '_UCServices_gv_services_header_ctl02_h_dsc_1').style.display = "none";
                    document.getElementById('' + ctrlcom + '_UCServices_gv_services_header_ctl02_h_dsc_1').innerHTML = "";
                    var Pat_cmp = 1;
                    if (doc_name == 'OP' || doc_name == 'Cons') {
                        Pat_cmp = $('#' + ctrlcom + '_uccorporate_ddlPaymentBy').val();
                    }
                    else if (doc_name == 'OPQUICK') {
                        var reg_type = $('#' + ctrlcom + '_ddlPatientType').val();
                        if (reg_type == 2 || reg_type == 6 || reg_type == 8 || reg_type == 9)
                        { Pat_cmp = 2; }
                        else
                        { Pat_cmp = 1; }
                    }
                    //                    else { Pat_cmp = 1; }
                    //                    if (Pat_cmp == '2' && document.getElementById('' + ctrlcom + '_UCServices_hdnPrePrintedBarcodeReq').value == 'Yes')/* cmp with barcd*/
                    //                    {
                    //                        document.getElementById('' + ctrlcom + '_UCServices_gv_services_header').className = 'grid gvServices-bdis' + Disc_Count;
                    //                        document.getElementById('' + ctrlcom + '_UCServices_gvServices').className = 'grid gvServices-bdis' + Disc_Count;
                    //                    }
                    //                    else if (Pat_cmp == '2' && document.getElementById('' + ctrlcom + '_UCServices_hdnPrePrintedBarcodeReq').value != 'Yes') /* cmp without barcd*/
                    //                    {
                    //                        document.getElementById('' + ctrlcom + '_UCServices_gv_services_header').className = 'grid gvServices-dis' + Disc_Count;
                    //                        document.getElementById('' + ctrlcom + '_UCServices_gvServices').className = 'grid gvServices-dis' + Disc_Count;
                    //                    }
                    //                    else if (Pat_cmp != '2' && document.getElementById('' + ctrlcom + '_UCServices_hdnPrePrintedBarcodeReq').value == 'Yes') /*pat with bartcd */
                    //                    {
                    //                        document.getElementById('' + ctrlcom + '_UCServices_gv_services_header').className = 'grid gvServices-cbdis' + Disc_Count;
                    //                        document.getElementById('' + ctrlcom + '_UCServices_gvServices').className = 'grid gvServices-cbdis' + Disc_Count;
                    //                    }
                    //                    else if (Pat_cmp != '2' && document.getElementById('' + ctrlcom + '_UCServices_hdnPrePrintedBarcodeReq').value != 'Yes') /* pat without barcd */
                    //                    {
                    //                        document.getElementById('' + ctrlcom + '_UCServices_gv_services_header').className = 'grid gvServices-cdis' + Disc_Count;
                    //                        document.getElementById('' + ctrlcom + '_UCServices_gvServices').className = 'grid gvServices-cdis' + Disc_Count;
                    //                    }
                    $("table[id*=UCServices_gv_services_header] tr:has(td)").each(function (e) {
                        $(this).closest('tr').find("input[type=text][id*=txthcPer]").css("display", "none");
                        $(this).closest('tr').find("input[type=text][id*=txtHcAmt]").css("display", "none");
                    });

                    $("table[id*=UCServices_gvServices] tr:has(td)").each(function (e) {
                        $(this).closest('tr').find("input[type=text][id*=txthcPer]").css("display", "none");
                        $(this).closest('tr').find("input[type=text][id*=txtHcAmt]").css("display", "none");
                    });
                }
            }
            else if (Type == '3') {
                if (mngcount == 0 && DisTypeId == Type) {
                    $('.MGAMT').hide();
                    $('.MGPER').hide();
                    document.getElementById('' + ctrlcom + '_UCServices_gv_services_header_ctl02_h_dsc_2').style.display = "none";
                    document.getElementById('' + ctrlcom + '_UCServices_gv_services_header_ctl02_h_dsc_2').innerHTML = "";
                    var Pat_cmp = 1;
                    if (doc_name == 'OP' || doc_name == 'Cons') {
                        Pat_cmp = $('#' + ctrlcom + '_uccorporate_ddlPaymentBy').val();
                    }
                    else if (doc_name == 'OPQUICK') {
                        var reg_type = $('#' + ctrlcom + '_ddlPatientType').val();
                        if (reg_type == 2 || reg_type == 6 || reg_type == 8 || reg_type == 9)
                        { Pat_cmp = 2; }
                        else
                        { Pat_cmp = 1; }
                    }
                    //                    else { Pat_cmp = 1; }
                    //                    if (Pat_cmp == '2' && document.getElementById('' + ctrlcom + '_UCServices_hdnPrePrintedBarcodeReq').value == 'Yes')/* cmp with barcd*/
                    //                    {
                    //                        document.getElementById('' + ctrlcom + '_UCServices_gv_services_header').className = 'grid gvServices-bdis' + Disc_Count;
                    //                        document.getElementById('' + ctrlcom + '_UCServices_gvServices').className = 'grid gvServices-bdis' + Disc_Count;
                    //                    }
                    //                    else if (Pat_cmp == '2' && document.getElementById('' + ctrlcom + '_UCServices_hdnPrePrintedBarcodeReq').value != 'Yes') /* cmp without barcd*/
                    //                    {
                    //                        document.getElementById('' + ctrlcom + '_UCServices_gv_services_header').className = 'grid gvServices-dis' + Disc_Count;
                    //                        document.getElementById('' + ctrlcom + '_UCServices_gvServices').className = 'grid gvServices-dis' + Disc_Count;
                    //                    }
                    //                    else if (Pat_cmp != '2' && document.getElementById('' + ctrlcom + '_UCServices_hdnPrePrintedBarcodeReq').value == 'Yes') /*pat with bartcd */
                    //                    {
                    //                        document.getElementById('' + ctrlcom + '_UCServices_gv_services_header').className = 'grid gvServices-cbdis' + Disc_Count;
                    //                        document.getElementById('' + ctrlcom + '_UCServices_gvServices').className = 'grid gvServices-cbdis' + Disc_Count;
                    //                    }
                    //                    else if (Pat_cmp != '2' && document.getElementById('' + ctrlcom + '_UCServices_hdnPrePrintedBarcodeReq').value != 'Yes') /* pat without barcd */
                    //                    {
                    //                        document.getElementById('' + ctrlcom + '_UCServices_gv_services_header').className = 'grid gvServices-cdis' + Disc_Count;
                    //                        document.getElementById('' + ctrlcom + '_UCServices_gvServices').className = 'grid gvServices-cdis' + Disc_Count;
                    //                    }
                    $("table[id*=UCServices_gv_services_header] tr:has(td)").each(function (e) {
                        $(this).closest('tr').find("input[type=text][id*=txtmaPer]").css("display", "none");
                        $(this).closest('tr').find("input[type=text][id*=txtmgAmt]").css("display", "none");
                    });

                    $("table[id*=UCServices_gvServices] tr:has(td)").each(function (e) {
                        $(this).closest('tr').find("input[type=text][id*=txtmaPer]").css("display", "none");
                        $(this).closest('tr').find("input[type=text][id*=txtmgAmt]").css("display", "none");
                    });
                }
            }
            else if (Type == '4') {
                if (stfcount == 0 && DisTypeId == Type) {
                    $('.STAFPER').hide();
                    $('.STAMT').hide();
                    document.getElementById('' + ctrlcom + '_UCServices_gv_services_header_ctl02_h_dsc_3').style.display = "none";
                    document.getElementById('' + ctrlcom + '_UCServices_gv_services_header_ctl02_h_dsc_3').innerHTML = "";
                    var Pat_cmp = 1;
                    if (doc_name == 'OP' || doc_name == 'Cons') {
                        Pat_cmp = $('#' + ctrlcom + '_uccorporate_ddlPaymentBy').val();
                    }
                    else if (doc_name == 'OPQUICK') {
                        var reg_type = $('#' + ctrlcom + '_ddlPatientType').val();
                        if (reg_type == 2 || reg_type == 6 || reg_type == 8 || reg_type == 9)
                        { Pat_cmp = 2; }
                        else
                        { Pat_cmp = 1; }
                    }
                    else { Pat_cmp = 1; }
                    //                    if (Pat_cmp == '2' && document.getElementById('' + ctrlcom + '_UCServices_hdnPrePrintedBarcodeReq').value == 'Yes')/* cmp with barcd*/
                    //                    {
                    //                        document.getElementById('' + ctrlcom + '_UCServices_gv_services_header').className = 'grid gvServices-bdis' + Disc_Count;
                    //                        document.getElementById('' + ctrlcom + '_UCServices_gvServices').className = 'grid gvServices-bdis' + Disc_Count;
                    //                    }
                    //                    else if (Pat_cmp == '2' && document.getElementById('' + ctrlcom + '_UCServices_hdnPrePrintedBarcodeReq').value != 'Yes') /* cmp without barcd*/
                    //                    {
                    //                        document.getElementById('' + ctrlcom + '_UCServices_gv_services_header').className = 'grid gvServices-dis' + Disc_Count;
                    //                        document.getElementById('' + ctrlcom + '_UCServices_gvServices').className = 'grid gvServices-dis' + Disc_Count;
                    //                    }
                    //                    else if (Pat_cmp != '2' && document.getElementById('' + ctrlcom + '_UCServices_hdnPrePrintedBarcodeReq').value == 'Yes') /*pat with bartcd */
                    //                    {
                    //                        document.getElementById('' + ctrlcom + '_UCServices_gv_services_header').className = 'grid gvServices-cbdis' + Disc_Count;
                    //                        document.getElementById('' + ctrlcom + '_UCServices_gvServices').className = 'grid gvServices-cbdis' + Disc_Count;
                    //                    }
                    //                    else if (Pat_cmp != '2' && document.getElementById('' + ctrlcom + '_UCServices_hdnPrePrintedBarcodeReq').value != 'Yes') /* pat without barcd */
                    //                    {
                    //                        document.getElementById('' + ctrlcom + '_UCServices_gv_services_header').className = 'grid gvServices-cdis' + Disc_Count;
                    //                        document.getElementById('' + ctrlcom + '_UCServices_gvServices').className = 'grid gvServices-cdis' + Disc_Count;
                    //                    }

                    $("table[id*=UCServices_gv_services_header] tr:has(td)").each(function (e) {
                        $(this).closest('tr').find("input[type=text][id*=txtstPer]").css("display", "none");
                        $(this).closest('tr').find("input[type=text][id*=txtstAmt]").css("display", "none");
                    });

                    $("table[id*=UCServices_gvServices] tr:has(td)").each(function (e) {
                        $(this).closest('tr').find("input[type=text][id*=txtstPer]").css("display", "none");
                        $(this).closest('tr').find("input[type=text][id*=txtstAmt]").css("display", "none");
                    });
                }
            }
            else if (Type == '5') {
                if (ebcount == 0 && DisTypeId == Type) {
                    $('.EBPER').hide();
                    $('.EBAMT').hide();
                    document.getElementById('' + ctrlcom + '_UCServices_gv_services_header_ctl02_h_dsc_4').style.display = "none";
                    document.getElementById('' + ctrlcom + '_UCServices_gv_services_header_ctl02_h_dsc_4').innerHTML = "";

                    var Pat_cmp = 1;
                    if (doc_name == 'OP' || doc_name == 'Cons') {
                        Pat_cmp = $('#' + ctrlcom + '_uccorporate_ddlPaymentBy').val();
                    }
                    else if (doc_name == 'OPQUICK') {
                        var reg_type = $('#' + ctrlcom + '_ddlPatientType').val();
                        if (reg_type == 2 || reg_type == 6 || reg_type == 8 || reg_type == 9)
                        { Pat_cmp = 2; }
                        else
                        { Pat_cmp = 1; }
                    }
                    //                    else { Pat_cmp = 1; }
                    //                    if (Pat_cmp == '2' && document.getElementById('' + ctrlcom + '_UCServices_hdnPrePrintedBarcodeReq').value == 'Yes')/* cmp with barcd*/
                    //                    {
                    //                        document.getElementById('' + ctrlcom + '_UCServices_gv_services_header').className = 'grid gvServices-bdis' + Disc_Count;
                    //                        document.getElementById('' + ctrlcom + '_UCServices_gvServices').className = 'grid gvServices-bdis' + Disc_Count;
                    //                    }
                    //                    else if (Pat_cmp == '2' && document.getElementById('' + ctrlcom + '_UCServices_hdnPrePrintedBarcodeReq').value != 'Yes') /* cmp without barcd*/
                    //                    {
                    //                        document.getElementById('' + ctrlcom + '_UCServices_gv_services_header').className = 'grid gvServices-dis' + Disc_Count;
                    //                        document.getElementById('' + ctrlcom + '_UCServices_gvServices').className = 'grid gvServices-dis' + Disc_Count;
                    //                    }
                    //                    else if (Pat_cmp != '2' && document.getElementById('' + ctrlcom + '_UCServices_hdnPrePrintedBarcodeReq').value == 'Yes') /*pat with bartcd */
                    //                    {
                    //                        document.getElementById('' + ctrlcom + '_UCServices_gv_services_header').className = 'grid gvServices-cbdis' + Disc_Count;
                    //                        document.getElementById('' + ctrlcom + '_UCServices_gvServices').className = 'grid gvServices-cbdis' + Disc_Count;
                    //                    }
                    //                    else if (Pat_cmp != '2' && document.getElementById('' + ctrlcom + '_UCServices_hdnPrePrintedBarcodeReq').value != 'Yes') /* pat without barcd */
                    //                    {
                    //                        document.getElementById('' + ctrlcom + '_UCServices_gv_services_header').className = 'grid gvServices-cdis' + Disc_Count;
                    //                        document.getElementById('' + ctrlcom + '_UCServices_gvServices').className = 'grid gvServices-cdis' + Disc_Count;
                    //                    }
                    $("table[id*=UCServices_gv_services_header] tr:has(td)").each(function (e) {
                        $(this).closest('tr').find("input[type=text][id*=txtebPer]").css("display", "none");
                        $(this).closest('tr').find("input[type=text][id*=txtebAmt]").css("display", "none");
                    });

                    $("table[id*=UCServices_gvServices] tr:has(td)").each(function (e) {
                        $(this).closest('tr').find("input[type=text][id*=txtebPer]").css("display", "none");
                        $(this).closest('tr').find("input[type=text][id*=txtebAmt]").css("display", "none");
                    });
                }
            }
            else if (Type == '6') {
                if (crcount == 0 && DisTypeId == Type) {
                    $('.CNCRLPER').hide();
                    $('.CNCRLAMT').hide();
                    document.getElementById('' + ctrlcom + '_UCServices_gv_services_header_ctl02_h_dsc_5').style.display = "none";
                    document.getElementById('' + ctrlcom + '_UCServices_gv_services_header_ctl02_h_dsc_5').innerHTML = "";
                    var Pat_cmp = 1;
                    if (doc_name == 'OP' || doc_name == 'Cons') {
                        Pat_cmp = $('#' + ctrlcom + '_uccorporate_ddlPaymentBy').val();
                    }
                    else if (doc_name == 'OPQUICK') {
                        var reg_type = $('#' + ctrlcom + '_ddlPatientType').val();
                        if (reg_type == 2 || reg_type == 6 || reg_type == 8 || reg_type == 9)
                        { Pat_cmp = 2; }
                        else
                        { Pat_cmp = 1; }
                    }
                    //                    else { Pat_cmp = 1; }
                    //                    if (Pat_cmp == '2' && document.getElementById('' + ctrlcom + '_UCServices_hdnPrePrintedBarcodeReq').value == 'Yes')/* cmp with barcd*/
                    //                    {
                    //                        document.getElementById('' + ctrlcom + '_UCServices_gv_services_header').className = 'grid gvServices-bdis' + Disc_Count;
                    //                        document.getElementById('' + ctrlcom + '_UCServices_gvServices').className = 'grid gvServices-bdis' + Disc_Count;
                    //                    }
                    //                    else if (Pat_cmp == '2' && document.getElementById('' + ctrlcom + '_UCServices_hdnPrePrintedBarcodeReq').value != 'Yes') /* cmp without barcd*/
                    //                    {
                    //                        document.getElementById('' + ctrlcom + '_UCServices_gv_services_header').className = 'grid gvServices-dis' + Disc_Count;
                    //                        document.getElementById('' + ctrlcom + '_UCServices_gvServices').className = 'grid gvServices-dis' + Disc_Count;
                    //                    }
                    //                    else if (Pat_cmp != '2' && document.getElementById('' + ctrlcom + '_UCServices_hdnPrePrintedBarcodeReq').value == 'Yes') /*pat with bartcd */
                    //                    {
                    //                        document.getElementById('' + ctrlcom + '_UCServices_gv_services_header').className = 'grid gvServices-cbdis' + Disc_Count;
                    //                        document.getElementById('' + ctrlcom + '_UCServices_gvServices').className = 'grid gvServices-cbdis' + Disc_Count;
                    //                    }
                    //                    else if (Pat_cmp != '2' && document.getElementById('' + ctrlcom + '_UCServices_hdnPrePrintedBarcodeReq').value != 'Yes') /* pat without barcd */
                    //                    {
                    //                        document.getElementById('' + ctrlcom + '_UCServices_gv_services_header').className = 'grid gvServices-cdis' + Disc_Count;
                    //                        document.getElementById('' + ctrlcom + '_UCServices_gvServices').className = 'grid gvServices-cdis' + Disc_Count;
                    //                    }
                    $("table[id*=UCServices_gv_services_header] tr:has(td)").each(function (e) {
                        $(this).closest('tr').find("input[type=text][id*=txtRulePer]").css("display", "none");
                        $(this).closest('tr').find("input[type=text][id*=txtcncrlAmt]").css("display", "none");
                    });

                    $("table[id*=UCServices_gvServices] tr:has(td)").each(function (e) {
                        $(this).closest('tr').find("input[type=text][id*=txtRulePer]").css("display", "none");
                        $(this).closest('tr').find("input[type=text][id*=txtcncrlAmt]").css("display", "none");
                    });
                }
            }
        });

    }

    var SelectionStatusVal = '';
    var CurrentRowValueMultiDim = 0;
    /* discount type percentage calculation of multiple discount grid in OP related page*/
    function calculatetotaldisc() {
        var totaldisc = 0;
        $("table[id$=gvMultipleConcession] tr:has(td)").each(function (e) {
            $(this).closest('tr').find('input[type=text][id*=txtAmount]').val();
        });
    }


    //    /* Newly Added By Naresh End*/

    function UpdateGridDiscountSelection(obj, val) {
        var PerRowIndex = 0;
        TestCondition(val, obj);
        var AllowOveralFrinSrvDscnt = document.getElementById('' + ctrlcom + '_UCServices_hdnAllowOutSideConcs').value;
        if (obj > 1) {
            CurrentRowIndex = obj;
            PerRowIndex = obj;
        } else {
            PerRowIndex = obj.parentElement.parentElement.rowIndex;
            CurrentRowIndex = PerRowIndex;
        }
        if ($('table[id*=gvMultipleConcession] tr').filter(':eq(' + CurrentRowIndex + ')').find("[id*=ddlMultiDiscounttype]").val() == 0 || $('table[id*=gvMultipleConcession] tr').filter(':eq(' + CurrentRowIndex + ')').find("[id*=ddlMultiDiscounttype]").val() == '') {
            $(".toast").toastText("Info", "Please Select Discount Type", 5, 2);
            $("table[id$=gvMultipleConcession] tr").filter(":eq(" + CurrentRowIndex + ")").find("[id*=txtPersentage]").val(0);
            $("table[id$=gvMultipleConcession] tr").filter(":eq(" + CurrentRowIndex + ")").find("[id*=txtAmount]").val(0);
            $("table[id$=gvMultipleConcession] tr").filter(":eq(" + CurrentRowIndex + ")").find('[id*=ddlModes]')[0].selectedIndex = 0;
            $("table[id$=gvMultipleConcession] tr").filter(":eq(" + CurrentRowIndex + ")").find('[id*=ddlModes]').val(1);
            return false;
        }
        var _gridamt = $("table[id$=gvMultipleConcession] tr").filter(":eq(" + CurrentRowIndex + ")").find("[id*=txtPersentage]").val();
        if (_gridamt == '' || _gridamt == null || _gridamt == undefined || _gridamt == "NaN") { _gridamt = '0'; }
        if (parseFloat(_gridamt) > 0) {
            $('table[id*=gvMultipleConcession] tr').filter(':eq(' + CurrentRowIndex + ')').find("[id*=ddlMultiDiscounttype]")[0].disabled = true;
        }
        else {
            $('table[id*=gvMultipleConcession] tr').filter(':eq(' + CurrentRowIndex + ')').find("[id*=ddlMultiDiscounttype]")[0].disabled = false;
        }
        var amount = 0; var CurrentRowIndex = 0; var perc = 0; var totdisc = 0;
        $("table[id*=gvMultipleConcession] tr:has(td)").each(function (i, j) {
            CurrentRowIndex = $(this)[0].rowIndex;
            var Amount1 = $(this).closest("tr").find("[id*=txtAmount]")[0].value;
            if (Amount1 == '' || Amount1.trim() == '.' || Amount1 == undefined || Amount1 == null) { Amount1 = 0 }
            $(this).closest("tr").find("[id*=txtAmount]").val(Amount1);
        });
        if (val != 'Amount') {
            $("table[id*=gvMultipleConcession] tr:has(td)").each(function (i, j) {
                var Current = $(this)[0].rowIndex;
                perc = parseFloat(perc) + parseFloat($(this).closest("tr").find("[id*=txtPersentage]")[0].value);

            });
            if (perc > 100) {
                $(".toast").toastText("Info", "Sorry System Doesn't Allow  More Than 100%", 5, 2);
                $("table[id$=gvMultipleConcession] tr").filter(":eq(" + CurrentRowIndex + ")").find("[id*=txtPersentage]").val(0);
            }
            if (perc == 100) {
                document.getElementById('' + ctrlcom + '_ReceiptControl2_Search3_txtSearchControl').disabled = true;
                document.getElementById('' + ctrlcom + '_ReceiptControl2_Search3_txtSearchControl').className = 'grey';
                document.getElementById('lk_btn_ctl00_ContentPlaceHolder1_ReceiptControl2_Search3').disabled = true;

            }
            else if (perc < 100) {
                document.getElementById('' + ctrlcom + '_ReceiptControl2_Search3_txtSearchControl').disabled = false;

                var form_name = document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnDocName').value;
                var assest = '';
                if (form_name == 'OP') {
                    assest = document.getElementById('' + ctrlcom + '_ChkAssesment').checked;
                }
                else if (form_name == 'Cons') {
                    assest = document.getElementById('' + ctrlcom + '_ChkAssesment').checked;
                }
                else if (form_name == 'OPQUICK') {
                    assest = document.getElementById('' + ctrlcom + '_ChkAssesment').checked;
                }
                else {
                    assest = false;
                }
                if (assest == true) {
                    document.getElementById('' + ctrlcom + '_ReceiptControl2_Search3_txtSearchControl').className = 'grey';
                }
                else {
                    document.getElementById('' + ctrlcom + '_ReceiptControl2_Search3_txtSearchControl').className = 'red';
                }
                document.getElementById('lk_btn_ctl00_ContentPlaceHolder1_ReceiptControl2_Search3').disabled = false;

            }
        }

        if (val == 'Amount') {
            var netamt = 0;
            $("table[id*=gvServices] tr:has(td)").each(function (e) {
                CurrentRowIndex = $(this)[0].rowIndex; if (isNaN(netamt)) { netamt = 0; }
                if ($(this).closest('tr').find("input[type=hidden][id*=hdnServiceID]").val() > 0 && $(this).closest('tr').find("input[type=hidden][id*=hdnClass_Srv_ID]").val() == 0) {
                    var PatAmt = $(this).closest("tr").find("[id*=txtPamt]").val();
                    PatAmt = PatAmt == '' ? 0 : PatAmt;
                    netamt = parseFloat(netamt) + parseFloat(PatAmt);
                }
            });
            var ActAmt = 0;
            var TotalActAmt = 0;
            $("table[id*=gvServices] tr:has(td)").each(function (e) {
                servicename = $(this).closest('tr').find("input[type=text][id*=txtServiceName]").val();
                Rate = $(this).closest('tr').find("input[type=text][id*=txtAmount]").val();
                var is_Frien_Srv = $(this).closest('tr').find('input[type=hidden][id*=hdnIsForeignSrv]').val();
                if (AllowOveralFrinSrvDscnt == "False" && is_Frien_Srv == "Y") {
                }
                else {
                    if (Rate != '' && $(this).closest('tr').find("input[type=hidden][id*=hdnServiceID]").val() > 0 && servicename != '' && servicename != '--Enter Service Name Here--' && $(this).closest('tr').find("input[type=hidden][id*=hdnClass_Srv_ID]").val() == 0) {
                        ActAmt = ($(this).closest('tr').find("input[type=text][id*=txtAmount]").val());
                        TotalActAmt = parseFloat(TotalActAmt) + parseFloat(ActAmt);
                    }
                }
            });
            var CashPerTotal = 0, HealthcardTotal = 0, ManageMentTotal = 0, StaffTotal = 0, EventBasedTotal = 0, RuleBasedTotal = 0;
            var testTotAmt = 0;
            // if (parseInt(TotalActAmt) > 0) {
            $("table[id*=<%=gvMultipleConcession.ClientID %>] tr").each(function (e) {
                CurrentRowValueMultiDim = $(this)[0].rowIndex;
                var TotAmt = $("table[id$=gvMultipleConcession] tr").filter(":eq(" + PerRowIndex + ")").find("[id*=txtAmount]").val();
                var testperActual = 0;
                if (parseInt(TotalActAmt) > 0) {
                    testperActual = (parseFloat(TotAmt) * 100) / parseFloat(TotalActAmt);
                }
                else {
                    testperActual = 0;
                }
                testperActual = setProperDecimalsCorp(testperActual);
                $("table[id$=gvMultipleConcession] tr").filter(":eq(" + PerRowIndex + ")").find('[id*=txtPersentage]').val(setProperDecimalsCorp(testperActual));

                if ($(this).closest('tr').find("[id*=ddlMultiDiscounttype]").val() == '1') {
                    var CashPer = $(this).closest('tr').find("input[type=text][id*=txtPersentage]").val();
                    CashPer = CashPer == '' ? 0 : CashPer;
                    CashPerTotal += parseFloat(CashPer);
                }
                if ($(this).closest('tr').find("[id*=ddlMultiDiscounttype]").val() == '2') {
                    var Healthcard = $(this).closest('tr').find("input[type=text][id*=txtPersentage]").val();
                    Healthcard = Healthcard == '' ? 0 : Healthcard;
                    HealthcardTotal += parseFloat(Healthcard);
                }
                if ($(this).closest('tr').find("[id*=ddlMultiDiscounttype]").val() == '3') {
                    var Management = $(this).closest('tr').find("input[type=text][id*=txtPersentage]").val();
                    Management = Management == '' ? 0 : Management;
                    ManageMentTotal += parseFloat(Management);
                }
                if ($(this).closest('tr').find("[id*=ddlMultiDiscounttype]").val() == '4') {
                    var Staff = $(this).closest('tr').find("input[type=text][id*=txtPersentage]").val();
                    Staff = Staff == '' ? 0 : Staff;
                    StaffTotal += parseFloat(Staff);
                }
                if ($(this).closest('tr').find("[id*=ddlMultiDiscounttype]").val() == '5') {
                    var EventBased = $(this).closest('tr').find("input[type=text][id*=txtPersentage]").val();
                    EventBased = EventBased == '' ? 0 : EventBased;
                    EventBasedTotal += parseFloat(EventBased);
                }
                if ($(this).closest('tr').find("[id*=ddlMultiDiscounttype]").val() == '6') {
                    var rulebased = $(this).closest('tr').find("input[type=text][id*=txtPersentage]").val();
                    rulebased = rulebased == '' ? 0 : rulebased;
                    RuleBasedTotal += parseFloat(rulebased);
                }
                testTotAmt = parseFloat(CashPerTotal) + parseFloat(HealthcardTotal) + parseFloat(ManageMentTotal) + parseFloat(StaffTotal) + parseFloat(EventBasedTotal) + parseFloat(RuleBasedTotal);
                if (parseFloat(testTotAmt) > 100) {
                    $(".toast").toastText("Info", "Sorry System Doesn't Allow  More Than 100%", 5, 2);
                    $("table[id$=gvMultipleConcession] tr").filter(":eq(" + PerRowIndex + ")").find('[id*=txtAmount]').val(0);
                    $("table[id$=gvMultipleConcession] tr").filter(":eq(" + PerRowIndex + ")").find('[id*=txtPersentage]').val(0);
                    //                    CalculateGridAmt(0);
                }
            });
            //  }
            var netamt = netamt;
            $("table[id*=gvMultipleConcession] tr:has(td)").each(function (i, j) {
                CurrentRowIndex = $(this)[0].rowIndex;
                var Amount1 = $(this).closest("tr").find("[id*=txtAmount]")[0].value;
                if (Amount1 == '' || Amount1.trim() == '.' || Amount1 == undefined || Amount1 == null) { Amount1 = 0 }
                Amount1 = Amount1 == '' ? 0 : Amount1;
                amount = parseFloat(amount) + parseFloat(Amount1);
            });
            if (parseFloat(amount) > netamt) {
                $("table[id$=gvMultipleConcession] tr").filter(":eq(" + CurrentRowIndex + ")").find("[id*=txtAmount]").val(0);
            }
        }
        if (val != 'Amount') {/* Percentage */
            var CashPerTotal = 0, HealthcardTotal = 0, ManageMentTotal = 0, StaffTotal = 0, EventBasedTotal = 0, RuleBasedTotal = 0;
            var MultiDimVal = $('table[id*=gvMultipleConcession] tr').filter(':eq(' + CurrentRowIndex + ')').find("[id*=ddlMultiDiscounttype]").val();
            if (MultiDimVal == 1) {
                if (MultiDimVal == 1) {
                    var CashPer = $('table[id*=gvMultipleConcession] tr').filter(':eq(' + CurrentRowIndex + ')').find("[id*=txtPersentage]").val();
                    CashPer = CashPer == undefined ? 0 : CashPer;
                    CashPer = typeof CashPer == 'string' ? (typeof CashPer == 'undefined' || CashPer.trim() == '' ? 0 : parseFloat(CashPer)) : (typeof CashPer == 'object' ? 0 : parseFloat(CashPer));
                    CashPer = CashPer == '' ? 0 : CashPer;
                    CashPer = CashPer == NaN ? 0 : CashPer;
                    CashPerTotal += parseFloat(CashPer);
                    CashPerTotal = typeof CashPerTotal == 'string' ? (typeof CashPerTotal == 'undefined' || CashPerTotal.trim() == '' ? 0 : parseFloat(CashPerTotal)) : (typeof CashPerTotal == 'object' ? 0 : parseFloat(CashPerTotal));
                }
                $("table[id*=gvServices] tr:has(td)").each(function (e) {
                    servicename = $(this).closest('tr').find("input[type=text][id*=txtServiceName]").val();
                    var is_Frien_Srv = $(this).closest('tr').find('input[type=hidden][id*=hdnIsForeignSrv]').val();
                    var a = 0;
                    if ($(this).closest('tr').find("input[type=hidden][id*=hdnServiceID]").val() > 0 && $(this).closest('tr').find("input[type=hidden][id*=hdnClass_Srv_ID]").val() == 0) {
                        if (AllowOveralFrinSrvDscnt == "False" && is_Frien_Srv == "Y") {
                            $(this).closest('tr').find("input[type=text][id*=txtDiscP]").val();
                            $(this).closest('tr').find("input[type=text][id*=txtDiscAmt]").val();
                        }
                        else {
                            var Amount = $(this).closest('tr').find("input[type=text][id*=txtPamt]").val();
                            var TotalAmt = $(this).closest('tr').find("input[type=text][id*=txtPamt]").val();
                            var tax_pct = $(this).closest('tr').find("input[type=text][id*=txttaxper]").val();
                            a = setProperDecimalsCorp((parseFloat(CashPerTotal) / 100) * parseFloat(Amount));
                            pat_tax = Math.round(parseFloat(CashPerTotal) * parseFloat(tax_pct / 100));
                            if (pat_tax == '' || pat_tax == undefined || pat_tax == null || pat_tax == "NaN") { pat_tax = '0'; }
                            if (Amount == '' || Amount == undefined || Amount == null || Amount == "NaN") { Amount = '0'; }
                            var ManageMentPer = $(this).closest('tr').find("input[type=text][id*=txtmaPer]").val();
                            var ManageMentamt = $(this).closest('tr').find("input[type=text][id*=txtmgAmt]").val();
                            ManageMentPer = typeof ManageMentPer == 'string' ? (typeof ManageMentPer == 'undefined' || ManageMentPer.trim() == '' ? 0 : parseFloat(ManageMentPer)) : (typeof ManageMentPer == 'object' ? 0 : parseFloat(ManageMentPer));
                            ManageMentamt = typeof ManageMentamt == 'string' ? (typeof ManageMentamt == 'undefined' || ManageMentamt.trim() == '' ? 0 : parseFloat(ManageMentamt)) : (typeof ManageMentamt == 'object' ? 0 : parseFloat(ManageMentamt));

                            var StafPer = $(this).closest('tr').find("input[type=text][id*=txtstPer]").val();
                            var StafAmt = $(this).closest('tr').find("input[type=text][id*=txtstAmt]").val();
                            StafPer = typeof StafPer == 'string' ? (typeof StafPer == 'undefined' || StafPer.trim() == '' ? 0 : parseFloat(StafPer)) : (typeof StafPer == 'object' ? 0 : parseFloat(StafPer));
                            StafAmt = typeof StafAmt == 'string' ? (typeof StafAmt == 'undefined' || StafAmt.trim() == '' ? 0 : parseFloat(StafAmt)) : (typeof StafAmt == 'object' ? 0 : parseFloat(StafAmt));


                            var HcPer = $(this).closest('tr').find("input[type=text][id*=txthcPer]").val();
                            var HcAmt = $(this).closest('tr').find("input[type=text][id*=txtHcAmt]").val();
                            HcPer = typeof HcPer == 'string' ? (typeof HcPer == 'undefined' || HcPer.trim() == '' ? 0 : parseFloat(HcPer)) : (typeof HcPer == 'object' ? 0 : parseFloat(HcPer));
                            HcAmt = typeof HcAmt == 'string' ? (typeof HcAmt == 'undefined' || HcAmt.trim() == '' ? 0 : parseFloat(HcAmt)) : (typeof HcAmt == 'object' ? 0 : parseFloat(HcAmt));


                            var EbPer = $(this).closest('tr').find("input[type=text][id*=txtebPer]").val();
                            var EbAmt = $(this).closest('tr').find("input[type=text][id*=txtebAmt]").val();

                            EbPer = typeof EbPer == 'string' ? (typeof EbPer == 'undefined' || EbPer.trim() == '' ? 0 : parseFloat(EbPer)) : (typeof EbPer == 'object' ? 0 : parseFloat(EbPer));
                            EbAmt = typeof EbAmt == 'string' ? (typeof EbAmt == 'undefined' || EbAmt.trim() == '' ? 0 : parseFloat(EbAmt)) : (typeof EbAmt == 'object' ? 0 : parseFloat(EbAmt));


                            var RulePer = $(this).closest('tr').find("input[type=text][id*=txtRulePer]").val();
                            var RuleAmt = $(this).closest('tr').find("input[type=text][id*=txtcncrlAmt]").val();
                            RulePer = typeof RulePer == 'string' ? (typeof RulePer == 'undefined' || RulePer.trim() == '' ? 0 : parseFloat(RulePer)) : (typeof RulePer == 'object' ? 0 : parseFloat(RulePer));
                            RuleAmt = typeof RuleAmt == 'string' ? (typeof RuleAmt == 'undefined' || RuleAmt.trim() == '' ? 0 : parseFloat(RuleAmt)) : (typeof RuleAmt == 'object' ? 0 : parseFloat(RuleAmt));

                            TotalconceAmt = Math.round(a);
                            TotalNetAmtInerServiceAmt = parseFloat(TotalAmt) - (parseFloat(TotalconceAmt) + parseFloat(ManageMentamt) + parseFloat(StafAmt) + parseFloat(HcAmt) + parseFloat(EbAmt) + parseFloat(RuleAmt));
                            //  console.log(TotalNetAmtInerServiceAmt);

                            TotalNetAmtInerServiceAmt = setProperDecimalsCorp(TotalNetAmtInerServiceAmt);
                            pat_tax = Math.round(parseFloat(TotalNetAmtInerServiceAmt) * parseFloat(tax_pct / 100));
                            if (pat_tax == '' || pat_tax == undefined || pat_tax == null || pat_tax == "NaN") { pat_tax = '0'; }
                            if (parseFloat(TotalNetAmtInerServiceAmt) >= 0) {
                                $(this).closest('tr').find("input[type=text][id*=txtPNAmt]").val(TotalNetAmtInerServiceAmt);
                                $(this).closest('tr').find("input[type=text][id*=txtptax]").val(pat_tax);
                                if (parseFloat(Amount) > 0) {
                                    $(this).closest('tr').find("input[type=text][id*=txtDiscP]").val(CashPerTotal);
                                }
                                else {
                                    $(this).closest('tr').find("input[type=text][id*=txtDiscP]").val('0');
                                }
                                $(this).closest('tr').find("input[type=text][id*=txtDiscAmt]").val(Math.round(a));
                            }

                            else {
                                $(this).closest('tr').find("input[type=text][id*=txtPNAmt]").val(0);
                                $(this).closest('tr').find("input[type=text][id*=txtDiscAmt]").val(0);
                                $(this).closest('tr').find("input[type=text][id*=txtDiscP]").val('0');
                            }

                        }
                    }
                });
            }
            if (MultiDimVal == 3) {
                if (MultiDimVal == 3) {
                    var Management = $('table[id*=gvMultipleConcession] tr').filter(':eq(' + CurrentRowIndex + ')').find("[id*=txtPersentage]").val();
                    Management = typeof Management == 'string' ? (typeof Management == 'undefined' || Management.trim() == '' ? 0 : parseFloat(Management)) : (typeof Management == 'object' ? 0 : parseFloat(Management));
                    Management = Management == undefined ? 0 : Management;
                    Management = Management == '' ? 0 : Management;
                    Management = Management == NaN ? 0 : Management;
                    ManageMentTotal += parseFloat(Management);
                    ManageMentTotal = typeof ManageMentTotal == 'string' ? (typeof ManageMentTotal == 'undefined' || ManageMentTotal.trim() == '' ? 0 : parseFloat(ManageMentTotal)) : (typeof ManageMentTotal == 'object' ? 0 : parseFloat(ManageMentTotal));
                }

                $("table[id*=gvServices] tr:has(td)").each(function (e) {
                    servicename = $(this).closest('tr').find("input[type=text][id*=txtServiceName]").val();
                    var is_Frien_Srv = $(this).closest('tr').find('input[type=hidden][id*=hdnIsForeignSrv]').val();
                    var c = 0;
                    if ($(this).closest('tr').find("input[type=hidden][id*=hdnServiceID]").val() > 0 && $(this).closest('tr').find("input[type=hidden][id*=hdnClass_Srv_ID]").val() == 0) {
                        if (AllowOveralFrinSrvDscnt == "False" && is_Frien_Srv == "Y") {
                            $(this).closest('tr').find("input[type=text][id*=txtmaPer]").val();
                            $(this).closest('tr').find("input[type=text][id*=txtmgAmt]").val();
                        }
                        else {
                            var Amount = $(this).closest('tr').find("input[type=text][id*=txtPamt]").val();
                            var TotalAmt = $(this).closest('tr').find("input[type=text][id*=txtPamt]").val();
                            var tax_pct = $(this).closest('tr').find("input[type=text][id*=txttaxper]").val();
                            c = setProperDecimalsCorp((parseFloat(ManageMentTotal) / 100) * parseFloat(Amount));
                            TotalCncPer = parseFloat(ManageMentTotal);
                            if (Amount == '' || Amount == undefined || Amount == null || Amount == "NaN") { Amount = '0'; }
                            TotalconceAmt = Math.round(c);

                            var CashPer = $(this).closest('tr').find("input[type=text][id*=txtDiscP]").val();
                            var Cashamt = $(this).closest('tr').find("input[type=text][id*=txtDiscAmt]").val();
                            CashPer = typeof CashPer == 'string' ? (typeof CashPer == 'undefined' || CashPer.trim() == '' ? 0 : parseFloat(CashPer)) : (typeof CashPer == 'object' ? 0 : parseFloat(CashPer));
                            Cashamt = typeof Cashamt == 'string' ? (typeof Cashamt == 'undefined' || Cashamt.trim() == '' ? 0 : parseFloat(Cashamt)) : (typeof Cashamt == 'object' ? 0 : parseFloat(Cashamt));
                            var StafPer = $(this).closest('tr').find("input[type=text][id*=txtstPer]").val();
                            var StafAmt = $(this).closest('tr').find("input[type=text][id*=txtstAmt]").val();
                            StafPer = typeof StafPer == 'string' ? (typeof StafPer == 'undefined' || StafPer.trim() == '' ? 0 : parseFloat(StafPer)) : (typeof StafPer == 'object' ? 0 : parseFloat(StafPer));
                            StafAmt = typeof StafAmt == 'string' ? (typeof StafAmt == 'undefined' || StafAmt.trim() == '' ? 0 : parseFloat(StafAmt)) : (typeof StafAmt == 'object' ? 0 : parseFloat(StafAmt));


                            var HcPer = $(this).closest('tr').find("input[type=text][id*=txthcPer]").val();
                            var HcAmt = $(this).closest('tr').find("input[type=text][id*=txtHcAmt]").val();
                            HcPer = typeof HcPer == 'string' ? (typeof HcPer == 'undefined' || HcPer.trim() == '' ? 0 : parseFloat(HcPer)) : (typeof HcPer == 'object' ? 0 : parseFloat(HcPer));
                            HcAmt = typeof HcAmt == 'string' ? (typeof HcAmt == 'undefined' || HcAmt.trim() == '' ? 0 : parseFloat(HcAmt)) : (typeof HcAmt == 'object' ? 0 : parseFloat(HcAmt));


                            var EbPer = $(this).closest('tr').find("input[type=text][id*=txtebPer]").val();
                            var EbAmt = $(this).closest('tr').find("input[type=text][id*=txtebAmt]").val();

                            EbPer = typeof EbPer == 'string' ? (typeof EbPer == 'undefined' || EbPer.trim() == '' ? 0 : parseFloat(EbPer)) : (typeof EbPer == 'object' ? 0 : parseFloat(EbPer));
                            EbAmt = typeof EbAmt == 'string' ? (typeof EbAmt == 'undefined' || EbAmt.trim() == '' ? 0 : parseFloat(EbAmt)) : (typeof EbAmt == 'object' ? 0 : parseFloat(EbAmt));

                            var RulePer = $(this).closest('tr').find("input[type=text][id*=txtRulePer]").val();
                            var RuleAmt = $(this).closest('tr').find("input[type=text][id*=txtcncrlAmt]").val();
                            RulePer = typeof RulePer == 'string' ? (typeof RulePer == 'undefined' || RulePer.trim() == '' ? 0 : parseFloat(RulePer)) : (typeof RulePer == 'object' ? 0 : parseFloat(RulePer));
                            RuleAmt = typeof RuleAmt == 'string' ? (typeof RuleAmt == 'undefined' || RuleAmt.trim() == '' ? 0 : parseFloat(RuleAmt)) : (typeof RuleAmt == 'object' ? 0 : parseFloat(RuleAmt));

                            TotalNetAmtInerServiceAmt = parseFloat(TotalAmt) - (parseFloat(TotalconceAmt) + parseFloat(StafAmt) + parseFloat(HcAmt) + parseFloat(EbAmt) + parseFloat(RuleAmt) + parseFloat(Cashamt));
                            TotalNetAmtInerServiceAmt = setProperDecimalsCorp(TotalNetAmtInerServiceAmt);

                            pat_tax = Math.round(parseFloat(TotalNetAmtInerServiceAmt) * parseFloat(tax_pct / 100));
                            if (pat_tax == '' || pat_tax == undefined || pat_tax == null || pat_tax == "NaN") { pat_tax = '0'; }

                            if (parseFloat(TotalNetAmtInerServiceAmt) >= 0) {
                                $(this).closest('tr').find("input[type=text][id*=txtPNAmt]").val(TotalNetAmtInerServiceAmt);
                                $(this).closest('tr').find("input[type=text][id*=txtptax]").val(pat_tax);
                                if (parseFloat(Amount) > 0) {
                                    $(this).closest('tr').find("input[type=text][id*=txtmaPer]").val(ManageMentTotal);
                                }
                                else {
                                    $(this).closest('tr').find("input[type=text][id*=txtmaPer]").val(0);
                                }
                                $(this).closest('tr').find("input[type=text][id*=txtmgAmt]").val(Math.round(c));
                            }
                            else {
                                $(this).closest('tr').find("input[type=text][id*=txtPNAmt]").val(0);
                                $(this).closest('tr').find("input[type=text][id*=txtmgAmt]").val(0);
                                $(this).closest('tr').find("input[type=text][id*=txtmaPer]").val(0);
                            }

                        }
                    }
                });
            }
            if (MultiDimVal == 4) {
                if (MultiDimVal == 4) {
                    var Staff = $('table[id*=gvMultipleConcession] tr').filter(':eq(' + CurrentRowIndex + ')').find("[id*=txtPersentage]").val();
                    Staff = Staff == undefined ? 0 : Staff;
                    Staff = Staff == '' ? 0 : Staff;
                    Staff = typeof Staff == 'string' ? (typeof Staff == 'undefined' || Staff.trim() == '' ? 0 : parseFloat(Staff)) : (typeof Staff == 'object' ? 0 : parseFloat(Staff));
                    StaffTotal += parseFloat(Staff);
                }
                $("table[id*=gvServices] tr:has(td)").each(function (e) {
                    servicename = $(this).closest('tr').find("input[type=text][id*=txtServiceName]").val();
                    var is_Frien_Srv = $(this).closest('tr').find('input[type=hidden][id*=hdnIsForeignSrv]').val();

                    var d = 0;
                    if ($(this).closest('tr').find("input[type=hidden][id*=hdnServiceID]").val() > 0 && $(this).closest('tr').find("input[type=hidden][id*=hdnClass_Srv_ID]").val() == 0) {
                        if (AllowOveralFrinSrvDscnt == "False" && is_Frien_Srv == "Y") {
                            $(this).closest('tr').find("input[type=text][id*=txtstPer]").val();
                            $(this).closest('tr').find("input[type=text][id*=txtstAmt]").val();
                        }
                        else {
                            var Amount = $(this).closest('tr').find("input[type=text][id*=txtPamt]").val();
                            var TotalAmt = $(this).closest('tr').find("input[type=text][id*=txtPamt]").val();
                            var tax_pct = $(this).closest('tr').find("input[type=text][id*=txttaxper]").val();
                            var pNetAmount = $(this).closest('tr').find("input[type=text][id*=txtPNAmt]").val();
                            d = setProperDecimalsCorp((parseFloat(StaffTotal) / 100) * parseFloat(Amount));
                            TotalCncPer = parseFloat(StaffTotal);
                            if (Amount == '' || Amount == undefined || Amount == null || Amount == "NaN") { Amount = '0'; }
                            TotalconceAmt = Math.round(d);

                            var CashPer = $(this).closest('tr').find("input[type=text][id*=txtDiscP]").val();
                            var Cashamt = $(this).closest('tr').find("input[type=text][id*=txtDiscAmt]").val();
                            CashPer = typeof CashPer == 'string' ? (typeof CashPer == 'undefined' || CashPer.trim() == '' ? 0 : parseFloat(CashPer)) : (typeof CashPer == 'object' ? 0 : parseFloat(CashPer));
                            Cashamt = typeof Cashamt == 'string' ? (typeof Cashamt == 'undefined' || Cashamt.trim() == '' ? 0 : parseFloat(Cashamt)) : (typeof Cashamt == 'object' ? 0 : parseFloat(Cashamt));

                            var ManagePer = $(this).closest('tr').find("input[type=text][id*=txtmaPer]").val();
                            var ManageAmt = $(this).closest('tr').find("input[type=text][id*=txtmgAmt]").val();

                            ManagePer = typeof ManagePer == 'string' ? (typeof ManagePer == 'undefined' || ManagePer.trim() == '' ? 0 : parseFloat(ManagePer)) : (typeof ManagePer == 'object' ? 0 : parseFloat(ManagePer));
                            ManageAmt = typeof ManageAmt == 'string' ? (typeof ManageAmt == 'undefined' || ManageAmt.trim() == '' ? 0 : parseFloat(ManageAmt)) : (typeof ManageAmt == 'object' ? 0 : parseFloat(ManageAmt));


                            var HcPer = $(this).closest('tr').find("input[type=text][id*=txthcPer]").val();
                            var HcAmt = $(this).closest('tr').find("input[type=text][id*=txtHcAmt]").val();
                            HcPer = typeof HcPer == 'string' ? (typeof HcPer == 'undefined' || HcPer.trim() == '' ? 0 : parseFloat(HcPer)) : (typeof HcPer == 'object' ? 0 : parseFloat(HcPer));
                            HcAmt = typeof HcAmt == 'string' ? (typeof HcAmt == 'undefined' || HcAmt.trim() == '' ? 0 : parseFloat(HcAmt)) : (typeof HcAmt == 'object' ? 0 : parseFloat(HcAmt));


                            var EbPer = $(this).closest('tr').find("input[type=text][id*=txtebPer]").val();
                            var EbAmt = $(this).closest('tr').find("input[type=text][id*=txtebAmt]").val();

                            EbPer = typeof EbPer == 'string' ? (typeof EbPer == 'undefined' || EbPer.trim() == '' ? 0 : parseFloat(EbPer)) : (typeof EbPer == 'object' ? 0 : parseFloat(EbPer));
                            EbAmt = typeof EbAmt == 'string' ? (typeof EbAmt == 'undefined' || EbAmt.trim() == '' ? 0 : parseFloat(EbAmt)) : (typeof EbAmt == 'object' ? 0 : parseFloat(EbAmt));
                            var RulePer = $(this).closest('tr').find("input[type=text][id*=txtRulePer]").val();
                            var RuleAmt = $(this).closest('tr').find("input[type=text][id*=txtcncrlAmt]").val();
                            RulePer = typeof RulePer == 'string' ? (typeof RulePer == 'undefined' || RulePer.trim() == '' ? 0 : parseFloat(RulePer)) : (typeof RulePer == 'object' ? 0 : parseFloat(RulePer));
                            RuleAmt = typeof RuleAmt == 'string' ? (typeof RuleAmt == 'undefined' || RuleAmt.trim() == '' ? 0 : parseFloat(RuleAmt)) : (typeof RuleAmt == 'object' ? 0 : parseFloat(RuleAmt));
                            TotalNetAmtInerServiceAmt = parseFloat(TotalAmt) - (parseFloat(TotalconceAmt) + parseFloat(HcAmt) + parseFloat(EbAmt) + parseFloat(RuleAmt) + parseFloat(Cashamt) + parseFloat(ManageAmt));
                            TotalNetAmtInerServiceAmt = setProperDecimalsCorp(TotalNetAmtInerServiceAmt);
                            pat_tax = Math.round(parseFloat(TotalNetAmtInerServiceAmt) * parseFloat(tax_pct / 100));
                            if (pat_tax == '' || pat_tax == undefined || pat_tax == null || pat_tax == "NaN") { pat_tax = '0'; }
                            if (parseFloat(TotalNetAmtInerServiceAmt) >= 0) {
                                $(this).closest('tr').find("input[type=text][id*=txtPNAmt]").val(TotalNetAmtInerServiceAmt);
                                $(this).closest('tr').find("input[type=text][id*=txtptax]").val(pat_tax);
                                if (parseFloat(Amount) > 0) {
                                    $(this).closest('tr').find("input[type=text][id*=txtstPer]").val(StaffTotal);
                                }
                                else {
                                    $(this).closest('tr').find("input[type=text][id*=txtstPer]").val('0');
                                }
                                $(this).closest('tr').find("input[type=text][id*=txtstAmt]").val(Math.round(d));
                            }
                            else {
                                $(this).closest('tr').find("input[type=text][id*=txtPNAmt]").val(0);
                                $(this).closest('tr').find("input[type=text][id*=txtstPer]").val(0);
                                $(this).closest('tr').find("input[type=text][id*=txtstAmt]").val(0);
                            }

                        }
                    }
                });
            }
            var TotalconceAmt = 0;
            var TotalCncPer = 0;
            var TotalNetAmtInerServiceAmt = 0;
            var SrvCashPerTotal = 0, SrvHealthcardTotal = 0, SrvManageMentTotal = 0, SrvStaffTotal = 0, SrvEventBasedTotal = 0, SrvRuleBasedPerTotal = 0;
            var SrvCashAmtTotal = 0, SrvHealthcardAmtTotal = 0, SrvManageMentAmtTotal = 0, SrvStaffAmtTotal = 0, SrvEventBasedAmtTotal = 0, SrvRuleBasedAmtTotal = 0;
            var TotalSrvPer = 0;
            var TotalSrvAmt = 0;
            $("table[id*=gvServices] tr:has(td)").each(function (e) {
                if ($(this).closest('tr').find("input[type=text][id*=txthcPer]").val() != '' && $(this).closest('tr').find("input[type=hidden][id*=hdnClass_Srv_ID]").val() == 0 && $(this).closest('tr').find("input[type=text][id*=txthcPer]").val() != undefined) {
                    var Healthcard = $(this).closest('tr').find("input[type=text][id*=txthcPer]").val();
                    var HealthcardAmt = $(this).closest('tr').find("input[type=text][id*=txtHcAmt]").val();
                    Healthcard = Healthcard == '' ? 0 : Healthcard;
                    HealthcardAmt = HealthcardAmt == '' ? 0 : HealthcardAmt;
                    SrvHealthcardAmtTotal += parseFloat(HealthcardAmt);
                }
                if ($(this).closest('tr').find("input[type=text][id*=txtDiscP]").val() != '' && $(this).closest('tr').find("input[type=hidden][id*=hdnClass_Srv_ID]").val() == 0 && $(this).closest('tr').find("input[type=text][id*=txtDiscP]").val() != undefined) {
                    var cashper = $(this).closest('tr').find("input[type=text][id*=txtDiscP]").val();
                    var cashAmt = $(this).closest('tr').find("input[type=text][id*=txtDiscAmt]").val();
                    cashper = cashper == '' ? 0 : cashper;
                    cashAmt = cashAmt == '' ? 0 : cashAmt;
                    SrvCashPerTotal += parseFloat(cashper);
                    SrvCashAmtTotal += parseFloat(cashAmt);
                }
                if ($(this).closest('tr').find("input[type=text][id*=txtmaPer]").val() != '' && $(this).closest('tr').find("input[type=hidden][id*=hdnClass_Srv_ID]").val() == 0 && $(this).closest('tr').find("input[type=text][id*=txtmaPer]").val() != undefined) {
                    var Management = $(this).closest('tr').find("input[type=text][id*=txtmaPer]").val();
                    var ManagementAmt = $(this).closest('tr').find("input[type=text][id*=txtmgAmt]").val();
                    Management = Management == '' ? 0 : Management;
                    ManagementAmt = ManagementAmt == '' ? 0 : ManagementAmt;
                    SrvManageMentTotal += parseFloat(Management);
                    SrvManageMentAmtTotal += parseFloat(ManagementAmt);
                }
                if ($(this).closest('tr').find("input[type=text][id*=txtstPer]").val() != '' && $(this).closest('tr').find("input[type=hidden][id*=hdnClass_Srv_ID]").val() == 0 && $(this).closest('tr').find("input[type=text][id*=txtstPer]").val() != undefined) {
                    var Staff = $(this).closest('tr').find("input[type=text][id*=txtstPer]").val();
                    var StaffAmt = $(this).closest('tr').find("input[type=text][id*=txtstAmt]").val();
                    Staff = Staff == '' ? 0 : Staff;
                    StaffAmt = StaffAmt == '' ? 0 : StaffAmt;
                    SrvStaffTotal += parseFloat(Staff);
                    SrvStaffAmtTotal += parseFloat(StaffAmt);
                }
                if ($(this).closest('tr').find("input[type=text][id*=txtebPer]").val() != '' && $(this).closest('tr').find("input[type=hidden][id*=hdnClass_Srv_ID]").val() == 0 && $(this).closest('tr').find("input[type=text][id*=txtebPer]").val() != undefined) {
                    var EventBased = $(this).closest('tr').find("input[type=text][id*=txtebPer]").val();
                    var EventBasedAmt = $(this).closest('tr').find("input[type=text][id*=txtebAmt]").val();
                    EventBased = EventBased == '' ? 0 : EventBased;
                    EventBasedAmt = EventBasedAmt == '' ? 0 : EventBasedAmt;
                    SrvEventBasedTotal += parseFloat(EventBased);
                    SrvEventBasedAmtTotal += parseFloat(EventBasedAmt);

                }
                if ($(this).closest('tr').find("input[type=text][id*=txtRulePer]").val() != '' && $(this).closest('tr').find("input[type=hidden][id*=hdnClass_Srv_ID]").val() == 0 && $(this).closest('tr').find("input[type=text][id*=txtRulePer]").val() != undefined) {
                    var RuleBased = $(this).closest('tr').find("input[type=text][id*=txtRulePer]").val();
                    var RuleBasedAmt = $(this).closest('tr').find("input[type=text][id*=txtcncrlAmt]").val();
                    RuleBased = RuleBased == '' ? 0 : RuleBased;
                    RuleBasedAmt = RuleBasedAmt == '' ? 0 : RuleBasedAmt;
                    SrvRuleBasedPerTotal += parseFloat(RuleBased);
                    SrvRuleBasedAmtTotal += parseFloat(RuleBasedAmt);

                }
            });
            TotalSrvPer = SrvCashPerTotal + SrvHealthcardTotal + SrvManageMentTotal + SrvStaffTotal + SrvEventBasedTotal + SrvRuleBasedPerTotal;
            TotalSrvAmt = SrvCashAmtTotal + SrvHealthcardAmtTotal + SrvManageMentAmtTotal + SrvStaffAmtTotal + SrvEventBasedAmtTotal + SrvRuleBasedAmtTotal;
            TotalSrvPer = setProperDecimalsCorp(TotalSrvPer);
            TotalSrvAmt = setProperDecimalsCorp(TotalSrvAmt);
            if (MultiDimVal == 3) {
                $("table[id$=gvMultipleConcession] tr").filter(":eq(" + CurrentRowIndex + ")").find('[id*=txtAmount]').val(setProperDecimalsCorp(SrvManageMentAmtTotal));
                if (parseInt(SrvManageMentAmtTotal) == '0') {
                    $("table[id$=gvMultipleConcession] tr").filter(":eq(" + CurrentRowIndex + ")").find('[id*=txtPersentage]').val(0);
                }
            }
            if (MultiDimVal == 4) {
                $("table[id$=gvMultipleConcession] tr").filter(":eq(" + CurrentRowIndex + ")").find('[id*=txtAmount]').val(setProperDecimalsCorp(SrvStaffAmtTotal));
                if (parseInt(SrvStaffAmtTotal) == '0') {
                    $("table[id$=gvMultipleConcession] tr").filter(":eq(" + CurrentRowIndex + ")").find('[id*=txtPersentage]').val(0);
                }
            }
            if (MultiDimVal == 1) {
                $("table[id$=gvMultipleConcession] tr").filter(":eq(" + CurrentRowIndex + ")").find('[id*=txtAmount]').val(setProperDecimalsCorp(SrvCashAmtTotal));
                if (parseInt(SrvCashAmtTotal) == '0') {
                    $("table[id$=gvMultipleConcession] tr").filter(":eq(" + CurrentRowIndex + ")").find('[id*=txtPersentage]').val(0);
                }
            }
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatdis').value = setProperDecimalsCorp(TotalSrvPer);
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatgrossamt').value = setProperDecimalsCorp(TotalSrvAmt);

            CalculateGridAmtCount();
        }
        else {/* Discount Amount Entry */
            var ActualAmt = 0;
            var TotalActualAmt = 0;
            $("table[id*=gvServices] tr:has(td)").each(function (e) {
                servicename = $(this).closest('tr').find("input[type=text][id*=txtServiceName]").val();
                Rate = $(this).closest('tr').find("input[type=text][id*=txtAmount]").val();
                var is_Frien_Srv = $(this).closest('tr').find('input[type=hidden][id*=hdnIsForeignSrv]').val();
                if (AllowOveralFrinSrvDscnt == "False" && is_Frien_Srv == "Y") {
                }
                else {
                    if (Rate != '' && $(this).closest('tr').find("input[type=hidden][id*=hdnServiceID]").val() > 0 && servicename != '' && servicename != '--Enter Service Name Here--' && $(this).closest('tr').find("input[type=hidden][id*=hdnClass_Srv_ID]").val() == 0) {
                        ActualAmt = ($(this).closest('tr').find("input[type=text][id*=txtAmount]").val());
                        TotalActualAmt = parseFloat(TotalActualAmt) + parseFloat(ActualAmt);
                    }
                }
            });

            var CashPerTotal = 0, HealthcardTotal = 0, ManageMentTotal = 0, StaffTotal = 0, EventBasedTotal = 0, RuleBasedTotal = 0;
            var testTotAmt = 0;
            //  if (parseInt(TotalActualAmt) > 0) {
            $("table[id*=<%=gvMultipleConcession.ClientID %>] tr").each(function (e) {
                CurrentRowValueMultiDim = $(this)[0].rowIndex;
                var TotAmt = $("table[id$=gvMultipleConcession] tr").filter(":eq(" + CurrentRowIndex + ")").find('[id*=txtAmount]').val();
                var perActual = 0;
                if (parseInt(TotalActualAmt) > 0) {
                    perActual = (parseFloat(TotAmt) * 100) / parseFloat(TotalActualAmt);
                }
                else {
                    perActual = 0;
                }
                perActual = setProperDecimalsCorp(perActual);
                if (perActual == 0)
                { TotAmt = 0; }
                $("table[id$=gvMultipleConcession] tr").filter(":eq(" + CurrentRowIndex + ")").find('[id*=txtAmount]').val(setProperDecimalsCorp(TotAmt));
                $("table[id$=gvMultipleConcession] tr").filter(":eq(" + CurrentRowIndex + ")").find('[id*=txtPersentage]').val(setProperDecimalsCorp(perActual));

                if ($(this).closest('tr').find("[id*=ddlMultiDiscounttype]").val() == '1') {
                    var CashPer = $(this).closest('tr').find("input[type=text][id*=txtPersentage]").val();
                    CashPer = CashPer == '' ? 0 : CashPer;
                    CashPerTotal += parseFloat(CashPer);
                }
                if ($(this).closest('tr').find("[id*=ddlMultiDiscounttype]").val() == '2') {
                    var Healthcard = $(this).closest('tr').find("input[type=text][id*=txtPersentage]").val();
                    Healthcard = Healthcard == '' ? 0 : Healthcard;
                    HealthcardTotal += parseFloat(Healthcard);
                }
                if ($(this).closest('tr').find("[id*=ddlMultiDiscounttype]").val() == '3') {
                    var Management = $(this).closest('tr').find("input[type=text][id*=txtPersentage]").val();
                    Management = Management == '' ? 0 : Management;
                    ManageMentTotal += parseFloat(Management);
                }
                if ($(this).closest('tr').find("[id*=ddlMultiDiscounttype]").val() == '4') {
                    var Staff = $(this).closest('tr').find("input[type=text][id*=txtPersentage]").val();
                    Staff = Staff == '' ? 0 : Staff;
                    StaffTotal += parseFloat(Staff);
                }
                if ($(this).closest('tr').find("[id*=ddlMultiDiscounttype]").val() == '5') {
                    var EventBased = $(this).closest('tr').find("input[type=text][id*=txtPersentage]").val();
                    EventBased = EventBased == '' ? 0 : EventBased;
                    EventBasedTotal += parseFloat(EventBased);
                }
                if ($(this).closest('tr').find("[id*=ddlMultiDiscounttype]").val() == '6') {
                    var rulebased = $(this).closest('tr').find("input[type=text][id*=txtPersentage]").val();
                    rulebased = rulebased == '' ? 0 : rulebased;
                    RuleBasedTotal += parseFloat(rulebased);
                }
                testTotAmt = parseFloat(CashPerTotal) + parseFloat(HealthcardTotal) + parseFloat(ManageMentTotal) + parseFloat(StaffTotal) + parseFloat(EventBasedTotal) + parseFloat(RuleBasedTotal);
                if (parseFloat(testTotAmt) > 100) {
                    $(".toast").toastText("Info", "Sorry System Doesn't Allow  More Than 100%", 5, 2);
                    $("table[id$=gvMultipleConcession] tr").filter(":eq(" + CurrentRowIndex + ")").find('[id*=txtAmount]').val(0);
                    $("table[id$=gvMultipleConcession] tr").filter(":eq(" + CurrentRowIndex + ")").find('[id*=txtPersentage]').val(0);
                }
            });
            //  }
            var TotalconceAmt = 0;
            var TotalCncPer = 0;
            var TotalNetAmtInerServiceAmt = 0;
            $("table[id*=gvServices] tr:has(td)").each(function (e) {
                servicename = $(this).closest('tr').find("input[type=text][id*=txtServiceName]").val();
                var is_Frien_Srv = $(this).closest('tr').find('input[type=hidden][id*=hdnIsForeignSrv]').val();
                var class_srv_id = $(this).closest('tr').find('input[type=hidden][id*=hdnClass_Srv_ID]').val();
                var a = 0, b = 0, c = 0, d = 0, e = 0, f = 0;
                if ($(this).closest('tr').find("input[type=hidden][id*=hdnServiceID]").val() > 0 && $(this).closest('tr').find("input[type=hidden][id*=hdnClass_Srv_ID]").val() == 0) {
                    if (AllowOveralFrinSrvDscnt == "False" && is_Frien_Srv == "Y") { /* Outsource services concession Based On Company policy setting */
                    }
                    else {
                        var Amount = $(this).closest('tr').find("input[type=text][id*=txtPamt]").val();
                        var TotalAmt = $(this).closest('tr').find("input[type=text][id*=txtPamt]").val();
                        var tax_pct = $(this).closest('tr').find("input[type=text][id*=txttaxper]").val();

                        if (parseFloat(TotalAmt) > 0) {
                            a = setProperDecimalsCorp((parseFloat(CashPerTotal) / 100) * parseFloat(Amount));

                            c = setProperDecimalsCorp((parseFloat(ManageMentTotal) / 100) * parseFloat(Amount));
                            d = setProperDecimalsCorp((parseFloat(StaffTotal) / 100) * parseFloat(Amount));


                            if (parseFloat(a) < 0) { a = 0; }
                            $(this).closest('tr').find("input[type=text][id*=txtDiscP]").val(setProperDecimalsCorp(CashPerTotal));
                            $(this).closest('tr').find("input[type=text][id*=txtDiscAmt]").val(Math.round(a));



                            if (parseFloat(c) > 0) {
                                $(this).closest('tr').find("input[type=text][id*=txtmaPer]").val(setProperDecimalsCorp(ManageMentTotal));
                                $(this).closest('tr').find("input[type=text][id*=txtmgAmt]").val(Math.round(c));
                            }
                            if (parseFloat(d) > 0) {
                                $(this).closest('tr').find("input[type=text][id*=txtstPer]").val(setProperDecimalsCorp(StaffTotal));
                                $(this).closest('tr').find("input[type=text][id*=txtstAmt]").val(Math.round(d));
                            }


                            b = $(this).closest('tr').find("input[type=text][id*=txtHcAmt]").val();
                            e = $(this).closest('tr').find("input[type=text][id*=txtebAmt]").val();
                            f = $(this).closest('tr').find("input[type=text][id*=txtcncrlAmt]").val();

                            TotalconceAmt = parseFloat(Math.round(a)) + parseFloat(Math.round(b)) + parseFloat(Math.round(c)) + parseFloat(Math.round(d)) + parseFloat(Math.round(e)) + parseFloat(Math.round(f));
                            TotalNetAmtInerServiceAmt = parseFloat(TotalAmt) - parseFloat(TotalconceAmt);
                            pat_tax = Math.round(parseFloat(TotalNetAmtInerServiceAmt) * parseFloat(tax_pct) / 100);
                            if (pat_tax == undefined || pat_tax == null || pat_tax == '' || pat_tax == NaN) { pat_tax = "0"; }

                            if (parseFloat(TotalNetAmtInerServiceAmt) < 0) { TotalNetAmtInerServiceAmt = 0; }
                            $(this).closest('tr').find("input[type=text][id*=txtPNAmt]").val(setProperDecimalsCorp(TotalNetAmtInerServiceAmt));
                            $(this).closest('tr').find("input[type=text][id*=txtptax]").val(setProperDecimalsCorp(pat_tax));

                        }
                    }
                }
            });

            var SrvCashPerTotal = 0, SrvHealthcardTotal = 0, SrvManageMentTotal = 0, SrvStaffTotal = 0, SrvEventBasedTotal = 0; SrvRulBasedTotal = 0;
            var SrvCashAmtTotal = 0, SrvHealthcardAmtTotal = 0, SrvManageMentAmtTotal = 0, SrvStaffAmtTotal = 0, SrvEventBasedAmtTotal = 0, SrvAmtBasedAmtTotal = 0;

            var TotalSrvPer = 0;
            var TotalSrvAmt = 0;
            $("table[id*=gvServices] tr:has(td)").each(function (e) {
                if ($(this).closest('tr').find("input[type=text][id*=txtDiscP]").val() != '' && $(this).closest('tr').find("input[type=hidden][id*=hdnClass_Srv_ID]").val() == 0 && $(this).closest('tr').find("input[type=text][id*=txtDiscP]").val() != undefined) {
                    var CashPer = $(this).closest('tr').find("input[type=text][id*=txtDiscP]").val();
                    var CashAmt = $(this).closest('tr').find("input[type=text][id*=txtDiscAmt]").val();
                    CashPer = CashPer == '' ? 0 : CashPer;
                    CashAmt = CashAmt == '' ? 0 : CashAmt;
                    SrvCashPerTotal += parseFloat(CashPer);
                    SrvCashAmtTotal += parseFloat(CashAmt);
                }
                if ($(this).closest('tr').find("input[type=text][id*=txthcPer]").val() != '' && $(this).closest('tr').find("input[type=hidden][id*=hdnClass_Srv_ID]").val() == 0 && $(this).closest('tr').find("input[type=text][id*=txthcPer]").val() != undefined) {
                    var Healthcard = $(this).closest('tr').find("input[type=text][id*=txthcPer]").val();
                    var HealthcardAmt = $(this).closest('tr').find("input[type=text][id*=txtHcAmt]").val();
                    Healthcard = Healthcard == '' ? 0 : Healthcard;
                    HealthcardAmt = HealthcardAmt == '' ? 0 : HealthcardAmt;
                    SrvHealthcardAmtTotal += parseFloat(HealthcardAmt);
                }
                if ($(this).closest('tr').find("input[type=text][id*=txtmaPer]").val() != '' && $(this).closest('tr').find("input[type=hidden][id*=hdnClass_Srv_ID]").val() == 0 && $(this).closest('tr').find("input[type=text][id*=txtmaPer]").val() != undefined) {
                    var Management = $(this).closest('tr').find("input[type=text][id*=txtmaPer]").val();
                    var ManagementAmt = $(this).closest('tr').find("input[type=text][id*=txtmgAmt]").val();
                    Management = Management == '' ? 0 : Management;
                    ManagementAmt = ManagementAmt == '' ? 0 : ManagementAmt;
                    SrvManageMentTotal += parseFloat(Management);
                    SrvManageMentAmtTotal += parseFloat(ManagementAmt);
                }
                if ($(this).closest('tr').find("input[type=text][id*=txtstPer]").val() != '' && $(this).closest('tr').find("input[type=hidden][id*=hdnClass_Srv_ID]").val() == 0 && $(this).closest('tr').find("input[type=text][id*=txtstPer]").val() != undefined) {
                    var Staff = $(this).closest('tr').find("input[type=text][id*=txtstPer]").val();
                    var StaffAmt = $(this).closest('tr').find("input[type=text][id*=txtstAmt]").val();
                    Staff = Staff == '' ? 0 : Staff;
                    StaffAmt = StaffAmt == '' ? 0 : StaffAmt;
                    SrvStaffTotal += parseFloat(Staff);
                    SrvStaffAmtTotal += parseFloat(StaffAmt);
                }
                if ($(this).closest('tr').find("input[type=text][id*=txtebPer]").val() != '' && $(this).closest('tr').find("input[type=hidden][id*=hdnClass_Srv_ID]").val() == 0 && $(this).closest('tr').find("input[type=text][id*=txtebPer]").val() != undefined) {
                    var EventBased = $(this).closest('tr').find("input[type=text][id*=txtebPer]").val();
                    var EventBasedAmt = $(this).closest('tr').find("input[type=text][id*=txtebAmt]").val();
                    EventBased = EventBased == '' ? 0 : EventBased;
                    EventBasedAmt = EventBasedAmt == '' ? 0 : EventBasedAmt;
                    SrvEventBasedTotal += parseFloat(EventBased);
                    SrvEventBasedAmtTotal += parseFloat(EventBasedAmt);
                }
                if ($(this).closest('tr').find("input[type=text][id*=txtRulePer]").val() != '' && $(this).closest('tr').find("input[type=hidden][id*=hdnClass_Srv_ID]").val() == 0 && $(this).closest('tr').find("input[type=text][id*=txtRulePer]").val() != undefined) {
                    var RuleBased = $(this).closest('tr').find("input[type=text][id*=txtRulePer]").val();
                    var RuleBasedAmt = $(this).closest('tr').find("input[type=text][id*=txtcncrlAmt]").val();
                    RuleBased = RuleBased == '' ? 0 : RuleBased;
                    RuleBasedAmt = RuleBasedAmt == '' ? 0 : RuleBasedAmt;
                    SrvRulBasedTotal += parseFloat(RuleBased);
                    SrvAmtBasedAmtTotal += parseFloat(RuleBasedAmt);
                }

            });
            TotalSrvPer = SrvCashPerTotal + SrvHealthcardTotal + SrvManageMentTotal + SrvStaffTotal + SrvEventBasedTotal + SrvRulBasedTotal;
            TotalSrvAmt = SrvCashAmtTotal + SrvHealthcardAmtTotal + SrvManageMentAmtTotal + SrvStaffAmtTotal + SrvEventBasedAmtTotal + SrvAmtBasedAmtTotal;
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatdis').value = setProperDecimalsCorp(TotalSrvPer);
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatgrossamt').value = Math.round(TotalSrvAmt);

            CalculateGridAmtCount();
        }
    }

    function UpdateGridDiscountSelection1(obj, val) {

        var PerRowIndex = 0;
        TestCondition(val, obj);
      //  var AllowOveralFrinSrvDscnt = document.getElementById('' + ctrlcom + '_UCServices_hdnAllowOutSideConcs').value;
        if (obj > 1) {
            CurrentRowIndex = obj;
            PerRowIndex = obj;
        } else {
            PerRowIndex = obj.parentElement.parentElement.rowIndex;
            CurrentRowIndex = PerRowIndex;
        }
        var discounttypeid = $('table[id*=gvMultipleConcession] tr').filter(':eq(' + CurrentRowIndex + ')').find("[id*=ddlMultiDiscounttype]").val();

        if (discounttypeid == 0 || discounttypeid == '') {
            $(".toast").toastText("Info", "Please Select Discount Type", 5, 2);
            $("table[id$=gvMultipleConcession] tr").filter(":eq(" + CurrentRowIndex + ")").find("[id*=txtPersentage]").val(0);
            $("table[id$=gvMultipleConcession] tr").filter(":eq(" + CurrentRowIndex + ")").find("[id*=txtAmount]").val(0);
            $("table[id$=gvMultipleConcession] tr").filter(":eq(" + CurrentRowIndex + ")").find('[id*=ddlModes]')[0].selectedIndex = 0;
            $("table[id$=gvMultipleConcession] tr").filter(":eq(" + CurrentRowIndex + ")").find('[id*=ddlModes]').val(1);
            return false;
        }
        var _gridamt = $("table[id$=gvMultipleConcession] tr").filter(":eq(" + CurrentRowIndex + ")").find("[id*=txtPersentage]").val();
        if (_gridamt == '' || _gridamt == null || _gridamt == undefined || _gridamt == "NaN") { _gridamt = '0'; }
        if (parseFloat(_gridamt) > 0) {
            $('table[id*=gvMultipleConcession] tr').filter(':eq(' + CurrentRowIndex + ')').find("[id*=ddlMultiDiscounttype]")[0].disabled = true;
        }
        else {
            $('table[id*=gvMultipleConcession] tr').filter(':eq(' + CurrentRowIndex + ')').find("[id*=ddlMultiDiscounttype]")[0].disabled = false;
        }

        var curper = $("table[id$=gvMultipleConcession] tr").filter(":eq(" + CurrentRowIndex + ")").find("[id*=txtPersentage]").val();
        var curamount = $("table[id$=gvMultipleConcession] tr").filter(":eq(" + CurrentRowIndex + ")").find("[id*=txtAmount]").val();



        if (curper == '' || curper == null || curper == undefined || curper == 'undefined' || isNaN(curper)) { curper = '0'; }
        if (curamount == '' || curamount == null || curamount == undefined || curamount == 'undefined' || isNaN(curamount)) { curamount = '0'; }

        if (parseFloat(curper) > 100) {
            $("table[id$=gvMultipleConcession] tr").filter(":eq(" + CurrentRowIndex + ")").find("[id*=txtPersentage]").val(0);
        }
        
        var amount = 0; var CurrentRowIndex = 0; var perc = 0; var totdisc = 0;
        $("table[id*=gvMultipleConcession] tr:has(td)").each(function (i, j) {
            CurrentRowIndex = $(this)[0].rowIndex;
            var Amount1 = $(this).closest("tr").find("[id*=txtAmount]")[0].value;
            if (Amount1 == '' || Amount1.trim() == '.' || Amount1 == undefined || Amount1 == null) { Amount1 = 0 }
            $(this).closest("tr").find("[id*=txtAmount]").val(Amount1);
        });
        var chaildsum=0; 
       $("table[id*=gvMultipleConcession] tr:has(td)").each(function (i, j) {
	         
            	   	 
                	var chaildCurrentRowIndex = $(this)[0].rowIndex;
			if(CurrentRowIndex != chaildCurrentRowIndex)
        	 	{
	           		 var Amount1 = $(this).closest("tr").find("[id*=txtAmount]")[0].value;
	           		 if (Amount1 == '' || Amount1.trim() == '.' || Amount1 == undefined || Amount1 == null) { Amount1 = 0 }
        	   		 $(this).closest("tr").find("[id*=txtAmount]").val(Amount1);
        	    		chaildsum +=parseFloat(Amount1); 
	           	}
       });
       var patgrossamttotal = 0;
       
        patgrossamttotal = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatgross').value ;
       
         

        if (val != 'Amount') {
            $("table[id*=gvMultipleConcession] tr:has(td)").each(function (i, j) {
                var Current = $(this)[0].rowIndex;
                perc = parseFloat(perc) + parseFloat($(this).closest("tr").find("[id*=txtPersentage]")[0].value);

            });
             
           if (perc > 100) {
                $(".toast").toastText("Info", "Sorry System Doesn't Allow  More Than 100%", 5, 2);
                $("table[id$=gvMultipleConcession] tr").filter(":eq(" + CurrentRowIndex + ")").find("[id*=txtPersentage]").val(0);
            }
            
            var multidispcr = $("table[id$=gvMultipleConcession] tr").filter(":eq(" + CurrentRowIndex + ")").find("[id*=txtPersentage]").val();
            if (multidispcr == '' || multidispcr == 'undefined' || multidispcr == undefined || multidispcr == null) { multidispcr = 0 }
            curamount = Math.round(parseFloat(multidispcr) * parseFloat(patgrossamttotal) / 100);
            if (curamount == '' || curamount == 'undefined' || curamount == undefined || curamount == null) { curamount = 0 }
            $("table[id$=gvMultipleConcession] tr").filter(":eq(" + CurrentRowIndex + ")").find("[id*=txtAmount]").val(parseFloat(curamount));
            if (perc == 100) {
                document.getElementById('' + ctrlcom + '_ReceiptControl2_Search3_txtSearchControl').disabled = true;
                document.getElementById('' + ctrlcom + '_ReceiptControl2_Search3_txtSearchControl').className = 'grey';
                document.getElementById('lk_btn_ctl00_ContentPlaceHolder1_ReceiptControl2_Search3').disabled = true;

            }

            else if (perc < 100) {
                document.getElementById('' + ctrlcom + '_ReceiptControl2_Search3_txtSearchControl').disabled = false;

                var form_name = document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnDocName').value;
                var assest = '';
                if (form_name == 'OP') {
                    assest = document.getElementById('' + ctrlcom + '_ChkAssesment').checked;
                }
                else if (form_name == 'Cons') {
                    assest = document.getElementById('' + ctrlcom + '_ChkAssesment').checked;
                }
                else if (form_name == 'OPQUICK') {
                    assest = document.getElementById('' + ctrlcom + '_ChkAssesment').checked;
                }
                else {
                    assest = false;
                }
                if (assest == true) {
                    document.getElementById('' + ctrlcom + '_ReceiptControl2_Search3_txtSearchControl').className = 'grey';
                }
                else {
                    document.getElementById('' + ctrlcom + '_ReceiptControl2_Search3_txtSearchControl').className = 'red';
                }
                document.getElementById('lk_btn_ctl00_ContentPlaceHolder1_ReceiptControl2_Search3').disabled = false;

            }
        }
        if (val == 'Amount') {
            var netamt = 0;
            var ActAmt = 0;
            var TotalActAmt = 0;
              var AllowOveralFrinSrvDscnt = document.getElementById('' + ctrlcom + '_UCServices_hdnAllowOutSideConcs').value;
            $("table[id*=gvServices] tr:has(td)").each(function (e) {
                CurrentRowIndex = $(this)[0].rowIndex; if (isNaN(netamt)) { netamt = 0; }
                servicename = $(this).closest('tr').find("input[type=text][id*=txtServiceName]").val();
                Rate = $(this).closest('tr').find("input[type=text][id*=txtAmount]").val();
                var is_Frien_Srv = $(this).closest('tr').find('input[type=hidden][id*=hdnIsForeignSrv]').val();
                if (AllowOveralFrinSrvDscnt == "False" && is_Frien_Srv == "Y") {
                }
                 else {
                     if ($(this).closest('tr').find("input[type=hidden][id*=hdnServiceID]").val() > 0 && servicename != '' && servicename != '--Enter Service Name Here--' && $(this).closest('tr').find("input[type=hidden][id*=hdnClass_Srv_ID]").val() == 0) {
                        var PatAmt = $(this).closest("tr").find("[id*=txtPamt]").val();
                        PatAmt = PatAmt == '' ? 0 : PatAmt;
                        netamt = parseFloat(netamt) + parseFloat(PatAmt);

                        ActAmt = ($(this).closest('tr').find("input[type=text][id*=txtAmount]").val());
                        TotalActAmt = parseFloat(TotalActAmt) + parseFloat(ActAmt);
                    }
                }
            });

//            var ActAmt = 0;
//            var TotalActAmt = 0;
//            $("table[id*=gvServices] tr:has(td)").each(function (e) {
//                servicename = $(this).closest('tr').find("input[type=text][id*=txtServiceName]").val();
//                Rate = $(this).closest('tr').find("input[type=text][id*=txtAmount]").val();
//                var is_Frien_Srv = $(this).closest('tr').find('input[type=hidden][id*=hdnIsForeignSrv]').val();
//                if (AllowOveralFrinSrvDscnt == "False" && is_Frien_Srv == "Y") {
//                }
//                else {
//                    if (Rate != '' && $(this).closest('tr').find("input[type=hidden][id*=hdnServiceID]").val() > 0 && servicename != '' && servicename != '--Enter Service Name Here--' && $(this).closest('tr').find("input[type=hidden][id*=hdnClass_Srv_ID]").val() == 0) {
//                        ActAmt = ($(this).closest('tr').find("input[type=text][id*=txtAmount]").val());
//                        TotalActAmt = parseFloat(TotalActAmt) + parseFloat(ActAmt);
//                    }
//                }
//            });
            var CashPerTotal = 0, HealthcardTotal = 0, ManageMentTotal = 0, StaffTotal = 0, EventBasedTotal = 0, RuleBasedTotal = 0;
            var testTotAmt = 0;
          
            $("table[id*=<%=gvMultipleConcession.ClientID %>] tr").each(function (e) {
                CurrentRowValueMultiDim = $(this)[0].rowIndex;
                var TotAmt = $("table[id$=gvMultipleConcession] tr").filter(":eq(" + PerRowIndex + ")").find("[id*=txtAmount]").val();
                var testperActual = 0;
                if (parseInt(TotalActAmt) > 0) {
                    testperActual = (parseFloat(TotAmt) * 100) / parseFloat(TotalActAmt);
                }
                else {
                    testperActual = 0;
                }
                testperActual = setProperDecimalsCorp(testperActual);
    
                $("table[id$=gvMultipleConcession] tr").filter(":eq(" + PerRowIndex + ")").find('[id*=txtPersentage]').val((setProperDecimalsCorp(parseFloat(testperActual).toFixed(4))));

                if ($(this).closest('tr').find("[id*=ddlMultiDiscounttype]").val() == '1') {
                    var CashPer = $(this).closest('tr').find("input[type=text][id*=txtPersentage]").val();
                    CashPer = CashPer == '' ? 0 : CashPer;
                    CashPerTotal += parseFloat(CashPer);
                }
                if ($(this).closest('tr').find("[id*=ddlMultiDiscounttype]").val() == '2') {
                    var Healthcard = $(this).closest('tr').find("input[type=text][id*=txtPersentage]").val();
                    Healthcard = Healthcard == '' ? 0 : Healthcard;
                    HealthcardTotal += parseFloat(Healthcard);
                }
                if ($(this).closest('tr').find("[id*=ddlMultiDiscounttype]").val() == '3') {
                    var Management = $(this).closest('tr').find("input[type=text][id*=txtPersentage]").val();
                    Management = Management == '' ? 0 : Management;
                    ManageMentTotal += parseFloat(Management);
                }
                if ($(this).closest('tr').find("[id*=ddlMultiDiscounttype]").val() == '4') {
                    var Staff = $(this).closest('tr').find("input[type=text][id*=txtPersentage]").val();
                    Staff = Staff == '' ? 0 : Staff;
                    StaffTotal += parseFloat(Staff);
                }
                if ($(this).closest('tr').find("[id*=ddlMultiDiscounttype]").val() == '5') {
                    var EventBased = $(this).closest('tr').find("input[type=text][id*=txtPersentage]").val();
                    EventBased = EventBased == '' ? 0 : EventBased;
                    EventBasedTotal += parseFloat(EventBased);
                }
                if ($(this).closest('tr').find("[id*=ddlMultiDiscounttype]").val() == '6') {
                    var rulebased = $(this).closest('tr').find("input[type=text][id*=txtPersentage]").val();
                    rulebased = rulebased == '' ? 0 : rulebased;
                    RuleBasedTotal += parseFloat(rulebased);
                }
                testTotAmt = parseFloat(CashPerTotal) + parseFloat(HealthcardTotal) + parseFloat(ManageMentTotal) + parseFloat(StaffTotal) + parseFloat(EventBasedTotal) + parseFloat(RuleBasedTotal);
                testTotAmt = Math.round(testTotAmt);
                if (parseFloat(testTotAmt) > 100) {
                    $(".toast").toastText("Info", "Sorry System Doesn't Allow  More Than 100%", 5, 2);
                    $("table[id$=gvMultipleConcession] tr").filter(":eq(" + PerRowIndex + ")").find('[id*=txtAmount]').val(0);
                    $("table[id$=gvMultipleConcession] tr").filter(":eq(" + PerRowIndex + ")").find('[id*=txtPersentage]').val(0);
                    curamount = 0;
                }
            });
    
            var netamt = netamt;
            $("table[id*=gvMultipleConcession] tr:has(td)").each(function (i, j) {
                CurrentRowIndex = $(this)[0].rowIndex;
                var Amount1 = $(this).closest("tr").find("[id*=txtAmount]")[0].value;
                if (Amount1 == '' || Amount1.trim() == '.' || Amount1 == undefined || Amount1 == null) { Amount1 = 0 }
                Amount1 = Amount1 == '' ? 0 : Amount1;
                amount = parseFloat(amount) + parseFloat(Amount1);
            });
            if (parseFloat(amount) > netamt) {
                $("table[id$=gvMultipleConcession] tr").filter(":eq(" + CurrentRowIndex + ")").find("[id*=txtAmount]").val(0);
                $("table[id$=gvMultipleConcession] tr").filter(":eq(" + PerRowIndex + ")").find('[id*=txtPersentage]').val(0);
                curamount = 0;
            }
        }



        var decval = 0;
        var Finalnetamout = 0;
        var totmanamt=0;
        var totstaffamt=0;
        var totcashamt=0;
        $("table[id*=gvServices] tr:has(td)").each(function (e) {

            if (e == 0) {
                $("table[id*=gvServices] tr:has(td)").each(function (e) {
                    if ($(this).closest('tr').find("input[type=hidden][id*=hdnClass_Srv_ID]").val() == 0) {
                     

                        var pamt = $(this).closest("tr").find("[id*=txtPamt]").val();
                        var healthdisamt = $(this).closest('tr').find("input[type=text][id*=txtHcAmt]").val();
                        var eventdisamt = $(this).closest('tr').find("input[type=text][id*=txtebAmt]").val();
                        var ruleamt = $(this).closest('tr').find("input[type=text][id*=txtcncrlAmt]").val();
                        var mangentdisamt = $(this).closest('tr').find("input[type=text][id*=txtmgAmt]").val();
                        var staffdisamt = $(this).closest('tr').find("input[type=text][id*=txtstAmt]").val();
                        var cashdisamt = $(this).closest('tr').find("input[type=text][id*=txtDiscAmt]").val();
                        Finalnetamout = parseFloat(Finalnetamout) + parseFloat(parseFloat(pamt) - parseFloat(healthdisamt) - parseFloat(eventdisamt) - parseFloat(ruleamt) - parseFloat(mangentdisamt) - parseFloat(staffdisamt) - parseFloat(cashdisamt));
                        if(parseFloat(Finalnetamout)<0)
                        {
                        Finalnetamout=0;
                        }

                    }
                });
            }

            CurrentRowIndex = $(this)[0].rowIndex;
            if ($(this).closest('tr').find("input[type=hidden][id*=hdnServiceID]").val() > 0 && $(this).closest('tr').find("input[type=hidden][id*=hdnClass_Srv_ID]").val() == 0) {

                var PatnetAmt = $(this).closest("tr").find("[id*=txtPamt]").val();
                if (PatnetAmt == '' || PatnetAmt == null || PatnetAmt == undefined || PatnetAmt == 'undefined' || isNaN(PatnetAmt)) { PatnetAmt = '0'; }
                if (patgrossamttotal == '' || patgrossamttotal == null || patgrossamttotal == undefined || patgrossamttotal == 'undefined' || isNaN(patgrossamttotal)) { patgrossamttotal = '0'; }

                var gridlength = $("table[id*=gvServices] tr:has(td)").length - 1;
                var netamount = $(this).closest("tr").find("[id*=txtPamt]").val();
                if (netamount == '' || netamount == null || netamount == undefined || netamount == 'undefined' || isNaN(netamount)) { netamount = '0'; }
                if (Finalnetamout == '' || Finalnetamout == null || Finalnetamout == undefined || Finalnetamout == 'undefined' || isNaN(Finalnetamout)) { Finalnetamout = '0'; }
                if (Math.sign(Finalnetamout) == -1) { Finalnetamout = 0 }
                if (Finalnetamout == 0 || Math.round($(this).closest('tr').find("[id*=hdncursamountold]").val()) == Math.floor(multidispcr)) {
                    if (discounttypeid == 1) {
                        var healthdisamt = $(this).closest('tr').find("input[type=text][id*=txtHcAmt]").val();
                        var eventdisamt = $(this).closest('tr').find("input[type=text][id*=txtebAmt]").val();
                        var ruleamt = $(this).closest('tr').find("input[type=text][id*=txtcncrlAmt]").val();
                        var mangentdisamt = $(this).closest('tr').find("[id*=hdnmanagementoldamt]").val();
                        var staffdisamt = $(this).closest('tr').find("[id*=hdnstaffoldamt]").val();
                        var cashdisamt = $(this).closest('tr').find("[id*=hdncasholdamt]").val();
                        var curfinalnetamt = $(this).closest('tr').find("[id*=hdnnetamountold]").val();
                        if (healthdisamt == '' || healthdisamt == null || healthdisamt == undefined || healthdisamt == 'undefined' || isNaN(healthdisamt)) { healthdisamt = '0'; }
                        if (eventdisamt == '' || eventdisamt == null || eventdisamt == undefined || eventdisamt == 'undefined' || isNaN(eventdisamt)) { eventdisamt = '0'; }
                        if (ruleamt == '' || ruleamt == null || ruleamt == undefined || ruleamt == 'undefined' || isNaN(ruleamt)) { ruleamt = '0'; }
                        if (mangentdisamt == '' || mangentdisamt == null || mangentdisamt == undefined || mangentdisamt == 'undefined' || isNaN(mangentdisamt)) { mangentdisamt = '0'; }
                        if (staffdisamt == '' || staffdisamt == null || staffdisamt == undefined || staffdisamt == 'undefined' || isNaN(staffdisamt)) { staffdisamt = '0'; }
                        if (cashdisamt == '' || cashdisamt == null || cashdisamt == undefined || cashdisamt == 'undefined' || isNaN(cashdisamt)) { cashdisamt = '0'; }
                        if (curfinalnetamt == '' || curfinalnetamt == null || curfinalnetamt == undefined || curfinalnetamt == 'undefined' || isNaN(curfinalnetamt)) { curfinalnetamt = '0'; }

                        var linewisediscamt = parseFloat(parseFloat(parseFloat(PatnetAmt) - parseFloat(healthdisamt) - parseFloat(eventdisamt) - parseFloat(ruleamt) - parseFloat(mangentdisamt) - parseFloat(staffdisamt) - parseFloat(cashdisamt)) * parseFloat(curamount) / parseFloat(curfinalnetamt));
                        if (linewisediscamt == '' || linewisediscamt == null || linewisediscamt == undefined || linewisediscamt == 'undefined' || isNaN(linewisediscamt)) { linewisediscamt = '0'; }
                        var PatAmt = $(this).closest("tr").find("[id*=txtPamt]").val();
                        PatAmt = PatAmt == '' ? 0 : PatAmt;
                        if(PatAmt==0){
                        linewisediscamt=0;
                        }
                        $(this).closest("tr").find("[id*=txtDiscAmt]").val(Math.round(parseFloat(linewisediscamt).toFixed(1)));
                        decval += Math.round(parseFloat(linewisediscamt).toFixed(1)) - (parseFloat(linewisediscamt));
                        var cashdisamt = $(this).closest('tr').find("input[type=text][id*=txtDiscAmt]").val();
                        $(this).closest("tr").find("[id*=txtPNAmt]").val(parseFloat(PatnetAmt) - parseFloat(cashdisamt) - parseFloat(healthdisamt) - parseFloat(eventdisamt) - parseFloat(ruleamt) - parseFloat(mangentdisamt) - parseFloat(staffdisamt));
                        if ($(this).closest("tr").find("[id*=txtPNAmt]").val() < 0) {

                            decval += parseFloat(Math.abs($(this).closest("tr").find("[id*=txtPNAmt]").val()));
                            $(this).closest('tr').find("input[type=text][id*=txtDiscAmt]").val(parseFloat($(this).closest('tr').find("input[type=text][id*=txtDiscAmt]").val()) - parseFloat(Math.abs($(this).closest("tr").find("[id*=txtPNAmt]").val())));
                            $(this).closest("tr").find("[id*=txtPNAmt]").val(0);
                        }
                        var patdicpern=Math.round(100 * parseFloat($(this).closest("tr").find("[id*=txtDiscAmt]").val()) / parseFloat(PatnetAmt));
                                if (patdicpern == '' || patdicpern == null || patdicpern == undefined || patdicpern == 'undefined' || isNaN(patdicpern) ||  patdicpern==Infinity) { patdicpern = '0'; }
                                $(this).closest("tr").find("[id*=txtDiscP]").val(patdicpern);
                        


                        if (CurrentRowIndex == gridlength) {

                            totcashamt = 0;
                            $("table[id*=gvServices] tr:has(td)").each(function (e) {
                                if (e != gridlength) {
                                    var cashtdisamt = $(this).closest('tr').find("input[type=text][id*=txtDiscAmt]").val();
                                }
                                if (cashtdisamt == '' || cashtdisamt == null || cashtdisamt == undefined || cashtdisamt == 'undefined' || isNaN(cashtdisamt)) { cashtdisamt = '0'; }
                                totcashamt = parseFloat(totcashamt) + parseFloat(cashtdisamt);
                            });
                            if (totcashamt == '' || totcashamt == null || totcashamt == undefined || totcashamt == 'undefined' || isNaN(totcashamt)) { totcashamt = '0'; }
                            var finalcon = parseFloat(parseFloat(curamount) - parseFloat(totcashamt));
                            if (Math.sign(parseFloat(finalcon)) == -1) { finalcon = 0; }
                            var PatAmt = $(this).closest("tr").find("[id*=txtPamt]").val();
                        PatAmt = PatAmt == '' ? 0 : PatAmt;
                        if(PatAmt==0){
                        finalcon=0;
                        }
                            $(this).closest("tr").find("[id*=txtDiscAmt]").val(parseFloat(finalcon));

                            var cashdisamt = $(this).closest('tr').find("input[type=text][id*=txtDiscAmt]").val();
                            $(this).closest("tr").find("[id*=txtPNAmt]").val(parseFloat(PatnetAmt) - parseFloat(Math.round(parseFloat(cashdisamt)) + parseFloat(healthdisamt) + parseFloat(eventdisamt) + parseFloat(ruleamt) + parseFloat(mangentdisamt) + parseFloat(staffdisamt)));
                            if ($(this).closest("tr").find("[id*=txtPNAmt]").val() < 0) {


                                $(this).closest("tr").find("[id*=txtPNAmt]").val(0);
                            }
                            var patdicpern=Math.round(100 * parseFloat($(this).closest("tr").find("[id*=txtDiscAmt]").val()) / parseFloat(PatnetAmt));
                                if (patdicpern == '' || patdicpern == null || patdicpern == undefined || patdicpern == 'undefined' || isNaN(patdicpern) ||  patdicpern==Infinity) { patdicpern = '0'; }
                                $(this).closest("tr").find("[id*=txtDiscP]").val(patdicpern);
                            var tax_pct = $(this).closest('tr').find("input[type=text][id*=txttaxper]").val();
                            var pat_tax = Math.round(parseFloat($(this).closest("tr").find("[id*=txtPNAmt]").val()) * parseFloat(tax_pct / 100));
                            if (pat_tax == '' || pat_tax == undefined || pat_tax == null || pat_tax == "NaN") { pat_tax = '0'; }
                            $(this).closest('tr').find("input[type=text][id*=txtptax]").val(pat_tax);
                            if (parseFloat(parseFloat($(this).closest("tr").find("[id*=txtPamt]").val()) - Math.round(parseFloat($(this).closest("tr").find("[id*=txtDiscAmt]").val())) - parseFloat($(this).closest('tr').find("input[type=text][id*=txtHcAmt]").val()) - parseFloat($(this).closest('tr').find("input[type=text][id*=txtebAmt]").val()) - parseFloat($(this).closest('tr').find("input[type=text][id*=txtcncrlAmt]").val()) - parseFloat($(this).closest("tr").find("[id*=txtmgAmt]").val()) - parseFloat($(this).closest('tr').find("input[type=text][id*=txtstAmt]").val())) < 0) {
                                var erroramt = parseFloat(parseFloat($(this).closest("tr").find("[id*=txtPamt]").val()) - Math.round(parseFloat($(this).closest("tr").find("[id*=txtDiscAmt]").val())) - parseFloat($(this).closest('tr').find("input[type=text][id*=txtHcAmt]").val()) - parseFloat($(this).closest('tr').find("input[type=text][id*=txtebAmt]").val()) - parseFloat($(this).closest('tr').find("input[type=text][id*=txtcncrlAmt]").val()) - parseFloat($(this).closest("tr").find("[id*=txtmgAmt]").val()) - parseFloat($(this).closest('tr').find("input[type=text][id*=txtstAmt]").val()));
                                erroramt = Math.abs(erroramt);
                                var finalerroremt = Math.abs(erroramt);
                                $("table[id*=gvServices] tr:has(td)").each(function (e) {
                                    if (e != gridlength) {
                                        if ($(this).closest("tr").find("input[type=hidden][id*=hdnClass_Srv_ID]").val() == 0) {
                                            if ($(this).closest("tr").find("[id*=txtPNAmt]").val() > 0) {
                                                var manerornetamt = $(this).closest("tr").find("[id*=txtPNAmt]").val();
                                                $(this).closest('tr').find("input[type=text][id*=txtDiscAmt]").val(parseFloat($(this).closest('tr').find("input[type=text][id*=txtDiscAmt]").val()) + parseFloat(manerornetamt));
                                                //var mangentdisamt = $(this).closest('tr').find("input[type=text][id*=txtDiscAmt]").val();
                                                $(this).closest("tr").find("[id*=txtPNAmt]").val(parseFloat($(this).closest("tr").find("[id*=txtPamt]").val()) - parseFloat(Math.round(parseFloat($(this).closest('tr').find("input[type=text][id*=txtDiscAmt]").val())) + parseFloat($(this).closest('tr').find("input[type=text][id*=txtHcAmt]").val()) + parseFloat($(this).closest('tr').find("input[type=text][id*=txtebAmt]").val()) + parseFloat($(this).closest('tr').find("input[type=text][id*=txtcncrlAmt]").val()) + parseFloat($(this).closest('tr').find("input[type=text][id*=txtmgAmt]").val()) + parseFloat($(this).closest('tr').find("input[type=text][id*=txtstAmt]").val())));
                                                if ($(this).closest("tr").find("[id*=txtPNAmt]").val() < 0) {


                                                    $(this).closest("tr").find("[id*=txtPNAmt]").val(0);
                                                }
                                                $(this).closest("tr").find("[id*=txtDiscP]").val(Math.round(100 * parseFloat($(this).closest("tr").find("[id*=txtDiscAmt]").val()) / parseFloat($(this).closest("tr").find("[id*=txtPamt]").val())));
                                                var tax_pct = $(this).closest('tr').find("input[type=text][id*=txttaxper]").val();
                                                var pat_tax = Math.round(parseFloat($(this).closest("tr").find("[id*=txtPNAmt]").val()) * parseFloat(tax_pct / 100));
                                                if (pat_tax == '' || pat_tax == undefined || pat_tax == null || pat_tax == "NaN") { pat_tax = '0'; }
                                                erroramt = parseFloat(erroramt) - parseFloat(manerornetamt);
                                            }

                                            else {
                                                if (erroramt == 0) {
                                                    $(this).closest('tr').find("input[type=text][id*=txtDiscAmt]").val(parseFloat($(this).closest('tr').find("input[type=text][id*=txtDiscAmt]").val()) - parseFloat(finalerroremt));
                                                }
                                                else {
                                                    $(this).closest('tr').find("input[type=text][id*=txtDiscAmt]").val(parseFloat($(this).closest('tr').find("input[type=text][id*=txtDiscAmt]").val()) - parseFloat(finalerroremt) - Math.abs(parseFloat(erroramt)));
                                                }
                                                //var mangentdisamt = $(this).closest('tr').find("input[type=text][id*=txtDiscAmt]").val();
                                                $(this).closest("tr").find("[id*=txtPNAmt]").val(parseFloat($(this).closest("tr").find("[id*=txtPamt]").val()) - parseFloat(Math.round(parseFloat($(this).closest('tr').find("input[type=text][id*=txtDiscAmt]").val())) + parseFloat($(this).closest('tr').find("input[type=text][id*=txtHcAmt]").val()) + parseFloat($(this).closest('tr').find("input[type=text][id*=txtebAmt]").val()) + parseFloat($(this).closest('tr').find("input[type=text][id*=txtcncrlAmt]").val()) + parseFloat($(this).closest('tr').find("input[type=text][id*=txtmgAmt]").val()) + parseFloat($(this).closest('tr').find("input[type=text][id*=txtstAmt]").val())));
                                                if ($(this).closest("tr").find("[id*=txtPNAmt]").val() < 0) {


                                                    $(this).closest("tr").find("[id*=txtPNAmt]").val(0);
                                                }
                                                $(this).closest("tr").find("[id*=txtmaPer]").val(Math.round(100 * parseFloat($(this).closest("tr").find("[id*=txtDiscAmt]").val()) / parseFloat($(this).closest("tr").find("[id*=txtPamt]").val())));
                                                var tax_pct = $(this).closest('tr').find("input[type=text][id*=txttaxper]").val();
                                                var pat_tax = Math.round(parseFloat($(this).closest("tr").find("[id*=txtPNAmt]").val()) * parseFloat(tax_pct / 100));
                                                if (pat_tax == '' || pat_tax == undefined || pat_tax == null || pat_tax == "NaN") { pat_tax = '0'; }
                                            }
                                        }
                                    }
                                });
                            }

                        }


                    }
                    if (discounttypeid == 3) {
                        var healthdisamt = $(this).closest('tr').find("input[type=text][id*=txtHcAmt]").val();
                        var eventdisamt = $(this).closest('tr').find("input[type=text][id*=txtebAmt]").val();
                        var ruleamt = $(this).closest('tr').find("input[type=text][id*=txtcncrlAmt]").val();
                        var mangentdisamt = $(this).closest('tr').find("[id*=hdnmanagementoldamt]").val();
                        var staffdisamt = $(this).closest('tr').find("[id*=hdnstaffoldamt]").val();
                        var cashdisamt = $(this).closest('tr').find("[id*=hdncasholdamt]").val();
                        var curfinalnetamt = $(this).closest('tr').find("[id*=hdnnetamountold]").val();
                        if (healthdisamt == '' || healthdisamt == null || healthdisamt == undefined || healthdisamt == 'undefined' || isNaN(healthdisamt)) { healthdisamt = '0'; }
                        if (eventdisamt == '' || eventdisamt == null || eventdisamt == undefined || eventdisamt == 'undefined' || isNaN(eventdisamt)) { eventdisamt = '0'; }
                        if (ruleamt == '' || ruleamt == null || ruleamt == undefined || ruleamt == 'undefined' || isNaN(ruleamt)) { ruleamt = '0'; }
                        if (mangentdisamt == '' || mangentdisamt == null || mangentdisamt == undefined || mangentdisamt == 'undefined' || isNaN(mangentdisamt)) { mangentdisamt = '0'; }
                        if (staffdisamt == '' || staffdisamt == null || staffdisamt == undefined || staffdisamt == 'undefined' || isNaN(staffdisamt)) { staffdisamt = '0'; }
                        if (cashdisamt == '' || cashdisamt == null || cashdisamt == undefined || cashdisamt == 'undefined' || isNaN(cashdisamt)) { cashdisamt = '0'; }
                        if (curfinalnetamt == '' || curfinalnetamt == null || curfinalnetamt == undefined || curfinalnetamt == 'undefined' || isNaN(curfinalnetamt)) { curfinalnetamt = '0'; }

                        var linewisediscamt = parseFloat(parseFloat(parseFloat(PatnetAmt) - parseFloat(healthdisamt) - parseFloat(eventdisamt) - parseFloat(ruleamt) - parseFloat(mangentdisamt) - parseFloat(staffdisamt) - parseFloat(cashdisamt)) * parseFloat(curamount) / parseFloat(curfinalnetamt));
                        if (linewisediscamt == '' || linewisediscamt == null || linewisediscamt == undefined || linewisediscamt == 'undefined' || isNaN(linewisediscamt)) { linewisediscamt = '0'; }

                        $(this).closest("tr").find("[id*=txtmgAmt]").val(Math.round(parseFloat(linewisediscamt).toFixed(1)));
                        decval += Math.round(parseFloat(linewisediscamt).toFixed(1)) - (parseFloat(linewisediscamt));


                        var mangentdisamt = $(this).closest('tr').find("input[type=text][id*=txtmgAmt]").val();
                        $(this).closest("tr").find("[id*=txtPNAmt]").val(parseFloat(PatnetAmt) - parseFloat(cashdisamt) - parseFloat(healthdisamt) - parseFloat(eventdisamt) - parseFloat(ruleamt) - parseFloat(mangentdisamt) - parseFloat(staffdisamt));
                        if ($(this).closest("tr").find("[id*=txtPNAmt]").val() < 0) {

                            decval += parseFloat(Math.abs($(this).closest("tr").find("[id*=txtPNAmt]").val()));
                            $(this).closest('tr').find("input[type=text][id*=txtmgAmt]").val(parseFloat($(this).closest('tr').find("input[type=text][id*=txtmgAmt]").val()) - parseFloat(Math.abs($(this).closest("tr").find("[id*=txtPNAmt]").val())));
                            $(this).closest("tr").find("[id*=txtPNAmt]").val(0);
                        }
                        $(this).closest("tr").find("[id*=txtmaPer]").val(Math.round(100 * parseFloat($(this).closest("tr").find("[id*=txtmgAmt]").val()) / parseFloat(PatnetAmt)));

                        if (CurrentRowIndex == gridlength) {
                            totmanamt = 0;
                            $("table[id*=gvServices] tr:has(td)").each(function (e) {
                                if (e != gridlength) {
                                    var mantdisamt = $(this).closest('tr').find("input[type=text][id*=txtmgAmt]").val();
                                }
                                if (mantdisamt == '' || mantdisamt == null || mantdisamt == undefined || mantdisamt == 'undefined' || isNaN(mantdisamt)) { mantdisamt = '0'; }
                                totmanamt = parseFloat(totmanamt) + parseFloat(mantdisamt);
                            });
                            if (totmanamt == '' || totmanamt == null || totmanamt == undefined || totmanamt == 'undefined' || isNaN(totmanamt)) { totmanamt = '0'; }
                            var finalcon = parseFloat(parseFloat(curamount) - parseFloat(totmanamt));
                            if (Math.sign(parseFloat(finalcon)) == -1) { finalcon = 0; }

                            $(this).closest("tr").find("[id*=txtmgAmt]").val(parseFloat(finalcon));

                            var mangentdisamt = $(this).closest('tr').find("input[type=text][id*=txtmgAmt]").val();
                            $(this).closest("tr").find("[id*=txtPNAmt]").val(parseFloat(PatnetAmt) - parseFloat(Math.round(parseFloat(cashdisamt)) + parseFloat(healthdisamt) + parseFloat(eventdisamt) + parseFloat(ruleamt) + parseFloat(mangentdisamt) + parseFloat(staffdisamt)));
                            if ($(this).closest("tr").find("[id*=txtPNAmt]").val() < 0) {


                                $(this).closest("tr").find("[id*=txtPNAmt]").val(0);
                            }
                            $(this).closest("tr").find("[id*=txtmaPer]").val(Math.round(100 * parseFloat($(this).closest("tr").find("[id*=txtmgAmt]").val()) / parseFloat(PatnetAmt)));
                            var tax_pct = $(this).closest('tr').find("input[type=text][id*=txttaxper]").val();
                            var pat_tax = Math.round(parseFloat($(this).closest("tr").find("[id*=txtPNAmt]").val()) * parseFloat(tax_pct / 100));
                            if (pat_tax == '' || pat_tax == undefined || pat_tax == null || pat_tax == "NaN") { pat_tax = '0'; }
                            $(this).closest('tr').find("input[type=text][id*=txtptax]").val(pat_tax);
                            if (parseFloat(parseFloat($(this).closest("tr").find("[id*=txtPamt]").val()) - Math.round(parseFloat($(this).closest('tr').find("input[type=text][id*=txtDiscAmt]").val())) - parseFloat($(this).closest('tr').find("input[type=text][id*=txtHcAmt]").val()) - parseFloat($(this).closest('tr').find("input[type=text][id*=txtebAmt]").val()) - parseFloat($(this).closest('tr').find("input[type=text][id*=txtcncrlAmt]").val()) - parseFloat($(this).closest("tr").find("[id*=txtmgAmt]").val()) - parseFloat($(this).closest('tr').find("input[type=text][id*=txtstAmt]").val())) < 0) {
                                var erroramt = parseFloat(parseFloat($(this).closest("tr").find("[id*=txtPamt]").val()) - Math.round(parseFloat($(this).closest('tr').find("input[type=text][id*=txtDiscAmt]").val())) - parseFloat($(this).closest('tr').find("input[type=text][id*=txtHcAmt]").val()) - parseFloat($(this).closest('tr').find("input[type=text][id*=txtebAmt]").val()) - parseFloat($(this).closest('tr').find("input[type=text][id*=txtcncrlAmt]").val()) - parseFloat($(this).closest("tr").find("[id*=txtmgAmt]").val()) - parseFloat($(this).closest('tr').find("input[type=text][id*=txtstAmt]").val()));
                                erroramt = Math.abs(erroramt);
                                var finalerroremt = Math.abs(erroramt);
                                $("table[id*=gvServices] tr:has(td)").each(function (e) {
                                    if (e != gridlength) {
                                        if ($(this).closest("tr").find("input[type=hidden][id*=hdnClass_Srv_ID]").val() == 0) {
                                            if ($(this).closest("tr").find("[id*=txtPNAmt]").val() > 0) {
                                                var manerornetamt = $(this).closest("tr").find("[id*=txtPNAmt]").val();
                                                $(this).closest('tr').find("input[type=text][id*=txtmgAmt]").val(parseFloat($(this).closest('tr').find("input[type=text][id*=txtmgAmt]").val()) + parseFloat(manerornetamt));
                                                // var mangentdisamt = $(this).closest('tr').find("input[type=text][id*=txtmgAmt]").val();
                                                $(this).closest("tr").find("[id*=txtPNAmt]").val(parseFloat($(this).closest("tr").find("[id*=txtPamt]").val()) - parseFloat(Math.round(parseFloat($(this).closest('tr').find("input[type=text][id*=txtDiscAmt]").val())) + parseFloat($(this).closest('tr').find("input[type=text][id*=txtHcAmt]").val()) + parseFloat($(this).closest('tr').find("input[type=text][id*=txtebAmt]").val()) + parseFloat($(this).closest('tr').find("input[type=text][id*=txtcncrlAmt]").val()) + parseFloat($(this).closest('tr').find("input[type=text][id*=txtmgAmt]").val()) + parseFloat($(this).closest('tr').find("input[type=text][id*=txtstAmt]").val())));
                                                if ($(this).closest("tr").find("[id*=txtPNAmt]").val() < 0) {


                                                    $(this).closest("tr").find("[id*=txtPNAmt]").val(0);
                                                }
                                                $(this).closest("tr").find("[id*=txtmaPer]").val(Math.round(100 * parseFloat($(this).closest("tr").find("[id*=txtmgAmt]").val()) / parseFloat($(this).closest("tr").find("[id*=txtPamt]").val())));
                                                var tax_pct = $(this).closest('tr').find("input[type=text][id*=txttaxper]").val();
                                                var pat_tax = Math.round(parseFloat($(this).closest("tr").find("[id*=txtPNAmt]").val()) * parseFloat(tax_pct / 100));
                                                if (pat_tax == '' || pat_tax == undefined || pat_tax == null || pat_tax == "NaN") { pat_tax = '0'; }
                                                erroramt = parseFloat(erroramt) - parseFloat(manerornetamt);
                                            }

                                            else {
                                                if (erroramt == 0) {
                                                    $(this).closest('tr').find("input[type=text][id*=txtmgAmt]").val(parseFloat($(this).closest('tr').find("input[type=text][id*=txtmgAmt]").val()) - parseFloat(finalerroremt));
                                                }
                                                else {
                                                    $(this).closest('tr').find("input[type=text][id*=txtmgAmt]").val(parseFloat($(this).closest('tr').find("input[type=text][id*=txtmgAmt]").val()) - parseFloat(finalerroremt) - Math.abs(parseFloat(erroramt)));
                                                }
                                                // var mangentdisamt = $(this).closest('tr').find("input[type=text][id*=txtmgAmt]").val();
                                                $(this).closest("tr").find("[id*=txtPNAmt]").val(parseFloat($(this).closest("tr").find("[id*=txtPamt]").val()) - parseFloat(Math.round(parseFloat($(this).closest('tr').find("input[type=text][id*=txtDiscAmt]").val())) + parseFloat($(this).closest('tr').find("input[type=text][id*=txtHcAmt]").val()) + parseFloat($(this).closest('tr').find("input[type=text][id*=txtebAmt]").val()) + parseFloat($(this).closest('tr').find("input[type=text][id*=txtcncrlAmt]").val()) + parseFloat($(this).closest('tr').find("input[type=text][id*=txtmgAmt]").val()) + parseFloat($(this).closest('tr').find("input[type=text][id*=txtstAmt]").val())));
                                                if ($(this).closest("tr").find("[id*=txtPNAmt]").val() < 0) {


                                                    $(this).closest("tr").find("[id*=txtPNAmt]").val(0);
                                                }
                                                $(this).closest("tr").find("[id*=txtmaPer]").val(Math.round(100 * parseFloat($(this).closest("tr").find("[id*=txtmgAmt]").val()) / parseFloat($(this).closest("tr").find("[id*=txtPamt]").val())));
                                                var tax_pct = $(this).closest('tr').find("input[type=text][id*=txttaxper]").val();
                                                var pat_tax = Math.round(parseFloat($(this).closest("tr").find("[id*=txtPNAmt]").val()) * parseFloat(tax_pct / 100));
                                                if (pat_tax == '' || pat_tax == undefined || pat_tax == null || pat_tax == "NaN") { pat_tax = '0'; }
                                            }
                                        }
                                    }
                                });
                            }

                        }

                    }
                    if (discounttypeid == 4) {
                        var healthdisamt = $(this).closest('tr').find("input[type=text][id*=txtHcAmt]").val();
                        var eventdisamt = $(this).closest('tr').find("input[type=text][id*=txtebAmt]").val();
                        var ruleamt = $(this).closest('tr').find("input[type=text][id*=txtcncrlAmt]").val();
                        var mangentdisamt = $(this).closest('tr').find("[id*=hdnmanagementoldamt]").val();
                        var staffdisamt = $(this).closest('tr').find("[id*=hdnstaffoldamt]").val();
                        var cashdisamt = $(this).closest('tr').find("[id*=hdncasholdamt]").val();
                        var curfinalnetamt = $(this).closest('tr').find("[id*=hdnnetamountold]").val();
                        if (healthdisamt == '' || healthdisamt == null || healthdisamt == undefined || healthdisamt == 'undefined' || isNaN(healthdisamt)) { healthdisamt = '0'; }
                        if (eventdisamt == '' || eventdisamt == null || eventdisamt == undefined || eventdisamt == 'undefined' || isNaN(eventdisamt)) { eventdisamt = '0'; }
                        if (ruleamt == '' || ruleamt == null || ruleamt == undefined || ruleamt == 'undefined' || isNaN(ruleamt)) { ruleamt = '0'; }
                        if (mangentdisamt == '' || mangentdisamt == null || mangentdisamt == undefined || mangentdisamt == 'undefined' || isNaN(mangentdisamt)) { mangentdisamt = '0'; }
                        if (staffdisamt == '' || staffdisamt == null || staffdisamt == undefined || staffdisamt == 'undefined' || isNaN(staffdisamt)) { staffdisamt = '0'; }
                        if (cashdisamt == '' || cashdisamt == null || cashdisamt == undefined || cashdisamt == 'undefined' || isNaN(cashdisamt)) { cashdisamt = '0'; }
                        if (curfinalnetamt == '' || curfinalnetamt == null || curfinalnetamt == undefined || curfinalnetamt == 'undefined' || isNaN(curfinalnetamt)) { curfinalnetamt = '0'; }

                        var linewisediscamt = parseFloat(parseFloat(parseFloat(PatnetAmt) - parseFloat(healthdisamt) - parseFloat(eventdisamt) - parseFloat(ruleamt) - parseFloat(mangentdisamt) - parseFloat(staffdisamt) - parseFloat(cashdisamt)) * parseFloat(curamount) / parseFloat(curfinalnetamt));
                        if (linewisediscamt == '' || linewisediscamt == null || linewisediscamt == undefined || linewisediscamt == 'undefined' || isNaN(linewisediscamt)) { linewisediscamt = '0'; }

                        $(this).closest("tr").find("[id*=txtstAmt]").val(Math.round(parseFloat(linewisediscamt)));
                        decval += Math.round(linewisediscamt) - (parseFloat(linewisediscamt));

                        var staffdisamt = $(this).closest('tr').find("input[type=text][id*=txtstAmt]").val();
                        $(this).closest("tr").find("[id*=txtPNAmt]").val(parseFloat(PatnetAmt) - parseFloat(cashdisamt) - parseFloat(healthdisamt) - parseFloat(eventdisamt) - parseFloat(ruleamt) - parseFloat(mangentdisamt) - parseFloat(staffdisamt));
                        if ($(this).closest("tr").find("[id*=txtPNAmt]").val() < 0) {

                            decval += parseFloat(Math.abs($(this).closest("tr").find("[id*=txtPNAmt]").val()));
                            $(this).closest('tr').find("input[type=text][id*=txtstAmt]").val(parseFloat($(this).closest('tr').find("input[type=text][id*=txtstAmt]").val()) - parseFloat(Math.abs($(this).closest("tr").find("[id*=txtPNAmt]").val())));
                            $(this).closest("tr").find("[id*=txtPNAmt]").val(0);
                        }
                        $(this).closest("tr").find("[id*=txtstPer]").val(Math.round(100 * parseFloat($(this).closest("tr").find("[id*=txtstAmt]").val()) / parseFloat(PatnetAmt)));

                        if (CurrentRowIndex == gridlength) {

                            totstaffamt = 0;
                            $("table[id*=gvServices] tr:has(td)").each(function (e) {
                                if (e != gridlength) {
                                    var stafftdisamt = $(this).closest('tr').find("input[type=text][id*=txtstAmt]").val();
                                }
                                if (stafftdisamt == '' || stafftdisamt == null || stafftdisamt == undefined || stafftdisamt == 'undefined' || isNaN(stafftdisamt)) { stafftdisamt = '0'; }
                                totstaffamt = parseFloat(totstaffamt) + parseFloat(stafftdisamt);
                            });
                            if (totstaffamt == '' || totstaffamt == null || totstaffamt == undefined || totstaffamt == 'undefined' || isNaN(totstaffamt)) { totstaffamt = '0'; }
                            var finalcon = parseFloat(parseFloat(curamount) - parseFloat(totstaffamt));
                            if (Math.sign(parseFloat(finalcon)) == -1) { finalcon = 0; }

                            $(this).closest("tr").find("[id*=txtstAmt]").val(parseFloat(finalcon));

                            var staffdisamt = $(this).closest('tr').find("input[type=text][id*=txtstAmt]").val();
                            $(this).closest("tr").find("[id*=txtPNAmt]").val(parseFloat(PatnetAmt) - parseFloat(Math.round(parseFloat(cashdisamt)) + parseFloat(healthdisamt) + parseFloat(eventdisamt) + parseFloat(ruleamt) + parseFloat(mangentdisamt) + parseFloat(staffdisamt)));
                            if ($(this).closest("tr").find("[id*=txtPNAmt]").val() < 0) {


                                $(this).closest("tr").find("[id*=txtPNAmt]").val(0);
                            }
                            $(this).closest("tr").find("[id*=txtstPer]").val(Math.round(100 * parseFloat($(this).closest("tr").find("[id*=txtstAmt]").val()) / parseFloat(PatnetAmt)));
                            var tax_pct = $(this).closest('tr').find("input[type=text][id*=txttaxper]").val();
                            var pat_tax = Math.round(parseFloat($(this).closest("tr").find("[id*=txtPNAmt]").val()) * parseFloat(tax_pct / 100));
                            if (pat_tax == '' || pat_tax == undefined || pat_tax == null || pat_tax == "NaN") { pat_tax = '0'; }
                            $(this).closest('tr').find("input[type=text][id*=txtptax]").val(pat_tax);
                            if (parseFloat(parseFloat($(this).closest("tr").find("[id*=txtPamt]").val()) - Math.round(parseFloat($(this).closest("tr").find("[id*=txtDiscAmt]").val())) - parseFloat($(this).closest('tr').find("input[type=text][id*=txtHcAmt]").val()) - parseFloat($(this).closest('tr').find("input[type=text][id*=txtebAmt]").val()) - parseFloat($(this).closest('tr').find("input[type=text][id*=txtcncrlAmt]").val()) - parseFloat($(this).closest("tr").find("[id*=txtmgAmt]").val()) - parseFloat($(this).closest('tr').find("input[type=text][id*=txtstAmt]").val())) < 0) {
                                var erroramt = parseFloat(parseFloat($(this).closest("tr").find("[id*=txtPamt]").val()) - Math.round(parseFloat($(this).closest("tr").find("[id*=txtDiscAmt]").val())) - parseFloat($(this).closest('tr').find("input[type=text][id*=txtHcAmt]").val()) - parseFloat($(this).closest('tr').find("input[type=text][id*=txtebAmt]").val()) - parseFloat($(this).closest('tr').find("input[type=text][id*=txtcncrlAmt]").val()) - parseFloat($(this).closest("tr").find("[id*=txtmgAmt]").val()) - parseFloat($(this).closest('tr').find("input[type=text][id*=txtstAmt]").val()));
                                erroramt = Math.abs(erroramt);
                                var finalerroremt = Math.abs(erroramt);
                                $("table[id*=gvServices] tr:has(td)").each(function (e) {
                                    if (e != gridlength) {
                                        if ($(this).closest("tr").find("input[type=hidden][id*=hdnClass_Srv_ID]").val() == 0) {
                                            if ($(this).closest("tr").find("[id*=txtPNAmt]").val() > 0) {
                                                var manerornetamt = $(this).closest("tr").find("[id*=txtPNAmt]").val();
                                                $(this).closest('tr').find("input[type=text][id*=txtstAmt]").val(parseFloat($(this).closest('tr').find("input[type=text][id*=txtstAmt]").val()) + parseFloat(manerornetamt));

                                                $(this).closest("tr").find("[id*=txtPNAmt]").val(parseFloat($(this).closest("tr").find("[id*=txtPamt]").val()) - parseFloat(Math.round(parseFloat($(this).closest('tr').find("input[type=text][id*=txtDiscAmt]").val())) + parseFloat($(this).closest('tr').find("input[type=text][id*=txtHcAmt]").val()) + parseFloat($(this).closest('tr').find("input[type=text][id*=txtebAmt]").val()) + parseFloat($(this).closest('tr').find("input[type=text][id*=txtcncrlAmt]").val()) + parseFloat($(this).closest('tr').find("input[type=text][id*=txtmgAmt]").val()) + parseFloat($(this).closest('tr').find("input[type=text][id*=txtstAmt]").val())));
                                                if ($(this).closest("tr").find("[id*=txtPNAmt]").val() < 0) {


                                                    $(this).closest("tr").find("[id*=txtPNAmt]").val(0);
                                                }
                                                $(this).closest("tr").find("[id*=txtstPer]").val(Math.round(100 * parseFloat($(this).closest("tr").find("[id*=txtstAmt]").val()) / parseFloat($(this).closest("tr").find("[id*=txtPamt]").val())));
                                                var tax_pct = $(this).closest('tr').find("input[type=text][id*=txttaxper]").val();
                                                var pat_tax = Math.round(parseFloat($(this).closest("tr").find("[id*=txtPNAmt]").val()) * parseFloat(tax_pct / 100));
                                                if (pat_tax == '' || pat_tax == undefined || pat_tax == null || pat_tax == "NaN") { pat_tax = '0'; }
                                                erroramt = parseFloat(erroramt) - parseFloat(manerornetamt);
                                            }

                                            else {
                                                if (erroramt == 0) {
                                                    $(this).closest('tr').find("input[type=text][id*=txtstAmt]").val(parseFloat($(this).closest('tr').find("input[type=text][id*=txtstAmt]").val()) - parseFloat(finalerroremt));
                                                }
                                                else {
                                                    $(this).closest('tr').find("input[type=text][id*=txtstAmt]").val(parseFloat($(this).closest('tr').find("input[type=text][id*=txtstAmt]").val()) - parseFloat(finalerroremt) - Math.abs(parseFloat(erroramt)));
                                                }

                                                $(this).closest("tr").find("[id*=txtPNAmt]").val(parseFloat($(this).closest("tr").find("[id*=txtPamt]").val()) - parseFloat(Math.round(parseFloat($(this).closest('tr').find("input[type=text][id*=txtDiscAmt]").val())) + parseFloat($(this).closest('tr').find("input[type=text][id*=txtHcAmt]").val()) + parseFloat($(this).closest('tr').find("input[type=text][id*=txtebAmt]").val()) + parseFloat($(this).closest('tr').find("input[type=text][id*=txtcncrlAmt]").val()) + parseFloat($(this).closest('tr').find("input[type=text][id*=txtmgAmt]").val()) + parseFloat($(this).closest('tr').find("input[type=text][id*=txtstAmt]").val())));
                                                if ($(this).closest("tr").find("[id*=txtPNAmt]").val() < 0) {


                                                    $(this).closest("tr").find("[id*=txtPNAmt]").val(0);
                                                }
                                                $(this).closest("tr").find("[id*=txtstPer]").val(Math.round(100 * parseFloat($(this).closest("tr").find("[id*=txtstAmt]").val()) / parseFloat($(this).closest("tr").find("[id*=txtPamt]").val())));
                                                var tax_pct = $(this).closest('tr').find("input[type=text][id*=txttaxper]").val();
                                                var pat_tax = Math.round(parseFloat($(this).closest("tr").find("[id*=txtPNAmt]").val()) * parseFloat(tax_pct / 100));
                                                if (pat_tax == '' || pat_tax == undefined || pat_tax == null || pat_tax == "NaN") { pat_tax = '0'; }
                                            }
                                        }
                                    }
                                });
                            }

                        }

                    }

                }
                else {
                    if (netamount > 0) {

                        if (discounttypeid == 1) {
                            var healthdisamt = $(this).closest('tr').find("input[type=text][id*=txtHcAmt]").val();
                            var eventdisamt = $(this).closest('tr').find("input[type=text][id*=txtebAmt]").val();
                            var ruleamt = $(this).closest('tr').find("input[type=text][id*=txtcncrlAmt]").val();
                            var mangentdisamt = $(this).closest('tr').find("input[type=text][id*=txtmgAmt]").val();
                            var staffdisamt = $(this).closest('tr').find("input[type=text][id*=txtstAmt]").val();
                            var cashdisamt = $(this).closest('tr').find("input[type=text][id*=txtDiscAmt]").val();
                            $(this).closest('tr').find("[id*=hdnnetamountold]").val(parseFloat(Finalnetamout));
                            $(this).closest('tr').find("[id*=hdncursamountold]").val(parseFloat(multidispcr));
                            if (healthdisamt == '' || healthdisamt == null || healthdisamt == undefined || healthdisamt == 'undefined' || isNaN(healthdisamt)) { healthdisamt = '0'; }
                            if (eventdisamt == '' || eventdisamt == null || eventdisamt == undefined || eventdisamt == 'undefined' || isNaN(eventdisamt)) { eventdisamt = '0'; }
                            if (ruleamt == '' || ruleamt == null || ruleamt == undefined || ruleamt == 'undefined' || isNaN(ruleamt)) { ruleamt = '0'; }
                            if (mangentdisamt == '' || mangentdisamt == null || mangentdisamt == undefined || mangentdisamt == 'undefined' || isNaN(mangentdisamt)) { mangentdisamt = '0'; }
                            if (staffdisamt == '' || staffdisamt == null || staffdisamt == undefined || staffdisamt == 'undefined' || isNaN(staffdisamt)) { staffdisamt = '0'; }
                            if (cashdisamt == '' || cashdisamt == null || cashdisamt == undefined || cashdisamt == 'undefined' || isNaN(cashdisamt)) { cashdisamt = '0'; }

                            $(this).closest('tr').find("[id*=hdnmanagementoldamt]").val(parseFloat(mangentdisamt));

                            $(this).closest('tr').find("[id*=hdnstaffoldamt]").val(parseFloat(staffdisamt));
                            $(this).closest('tr').find("[id*=hdncasholdamt]").val(parseFloat(cashdisamt));

                            var linewisediscamt = parseFloat(parseFloat(PatnetAmt) - parseFloat(healthdisamt) - parseFloat(eventdisamt) - parseFloat(ruleamt) - parseFloat(mangentdisamt) - parseFloat(staffdisamt) - parseFloat(cashdisamt)) * parseFloat(curamount) / parseFloat(Finalnetamout);
                            if (linewisediscamt == '' || linewisediscamt == null || linewisediscamt == undefined || linewisediscamt == 'undefined' || isNaN(linewisediscamt)) { linewisediscamt = '0'; }
                        


                            $(this).closest("tr").find("[id*=txtDiscAmt]").val(Math.round(parseFloat(linewisediscamt).toFixed(1)));
                            decval += Math.round(parseFloat(linewisediscamt).toFixed(1)) - (parseFloat(linewisediscamt));
                            var cashdisamt = $(this).closest('tr').find("input[type=text][id*=txtDiscAmt]").val();
                            $(this).closest("tr").find("[id*=txtPNAmt]").val(parseFloat(PatnetAmt) - parseFloat(cashdisamt) - parseFloat(healthdisamt) - parseFloat(eventdisamt) - parseFloat(ruleamt) - parseFloat(mangentdisamt) - parseFloat(staffdisamt));
                            if ($(this).closest("tr").find("[id*=txtPNAmt]").val() < 0) {

                                decval += parseFloat(Math.abs($(this).closest("tr").find("[id*=txtPNAmt]").val()));
                                $(this).closest('tr').find("input[type=text][id*=txtDiscAmt]").val(parseFloat($(this).closest('tr').find("input[type=text][id*=txtDiscAmt]").val()) - parseFloat(Math.abs($(this).closest("tr").find("[id*=txtPNAmt]").val())));
                                $(this).closest("tr").find("[id*=txtPNAmt]").val(0);
                            }
                            var patdicpern=Math.round(100 * parseFloat($(this).closest("tr").find("[id*=txtDiscAmt]").val()) / parseFloat(PatnetAmt));
                                if (patdicpern == '' || patdicpern == null || patdicpern == undefined || patdicpern == 'undefined' || isNaN(patdicpern) ||  patdicpern==Infinity) { patdicpern = '0'; }
                                $(this).closest("tr").find("[id*=txtDiscP]").val(patdicpern);
                            

                            if (CurrentRowIndex == gridlength) {
                                totcashamt = 0;
                                $("table[id*=gvServices] tr:has(td)").each(function (e) {
                                    if (e != gridlength) {
                                        var cashtdisamt = $(this).closest('tr').find("input[type=text][id*=txtDiscAmt]").val();
                                    }
                                    if (cashtdisamt == '' || cashtdisamt == null || cashtdisamt == undefined || cashtdisamt == 'undefined' || isNaN(cashtdisamt)) { cashtdisamt = '0'; }
                                    totcashamt = parseFloat(totcashamt) + parseFloat(cashtdisamt);
                                });
                                if (totcashamt == '' || totcashamt == null || totcashamt == undefined || totcashamt == 'undefined' || isNaN(totcashamt)) { totcashamt = '0'; }
                                var finalcon = parseFloat(parseFloat(curamount) - parseFloat(totcashamt));
                                if (Math.sign(parseFloat(finalcon)) == -1) { finalcon = 0; }

                                $(this).closest("tr").find("[id*=txtDiscAmt]").val(parseFloat(finalcon));

                                var cashdisamt = $(this).closest('tr').find("input[type=text][id*=txtDiscAmt]").val();
                                $(this).closest("tr").find("[id*=txtPNAmt]").val(parseFloat(PatnetAmt) - parseFloat(Math.round(parseFloat(cashdisamt)) + parseFloat(healthdisamt) + parseFloat(eventdisamt) + parseFloat(ruleamt) + parseFloat(mangentdisamt) + parseFloat(staffdisamt)));
                                if ($(this).closest("tr").find("[id*=txtPNAmt]").val() < 0) {


                                    $(this).closest("tr").find("[id*=txtPNAmt]").val(0);
                                }
                                var patdicpern=Math.round(100 * parseFloat($(this).closest("tr").find("[id*=txtDiscAmt]").val()) / parseFloat(PatnetAmt));
                                if (patdicpern == '' || patdicpern == null || patdicpern == undefined || patdicpern == 'undefined' || isNaN(patdicpern) ||  patdicpern==Infinity) { patdicpern = '0'; }
                                $(this).closest("tr").find("[id*=txtDiscP]").val(patdicpern);
                                var tax_pct = $(this).closest('tr').find("input[type=text][id*=txttaxper]").val();
                                var pat_tax = Math.round(parseFloat($(this).closest("tr").find("[id*=txtPNAmt]").val()) * parseFloat(tax_pct / 100));
                                if (pat_tax == '' || pat_tax == undefined || pat_tax == null || pat_tax == "NaN") { pat_tax = '0'; }
                                $(this).closest('tr').find("input[type=text][id*=txtptax]").val(pat_tax);
                                if (parseFloat(parseFloat($(this).closest("tr").find("[id*=txtPamt]").val()) - Math.round(parseFloat($(this).closest("tr").find("[id*=txtDiscAmt]").val())) - parseFloat($(this).closest('tr').find("input[type=text][id*=txtHcAmt]").val()) - parseFloat($(this).closest('tr').find("input[type=text][id*=txtebAmt]").val()) - parseFloat($(this).closest('tr').find("input[type=text][id*=txtcncrlAmt]").val()) - parseFloat($(this).closest("tr").find("[id*=txtmgAmt]").val()) - parseFloat($(this).closest('tr').find("input[type=text][id*=txtstAmt]").val())) < 0) {
                                    var erroramt = parseFloat(parseFloat($(this).closest("tr").find("[id*=txtPamt]").val()) - Math.round(parseFloat($(this).closest("tr").find("[id*=txtDiscAmt]").val())) - parseFloat($(this).closest('tr').find("input[type=text][id*=txtHcAmt]").val()) - parseFloat($(this).closest('tr').find("input[type=text][id*=txtebAmt]").val()) - parseFloat($(this).closest('tr').find("input[type=text][id*=txtcncrlAmt]").val()) - parseFloat($(this).closest("tr").find("[id*=txtmgAmt]").val()) - parseFloat($(this).closest('tr').find("input[type=text][id*=txtstAmt]").val()));
                                    erroramt = Math.abs(erroramt);
                                    var finalerroremt = Math.abs(erroramt);
                                    $("table[id*=gvServices] tr:has(td)").each(function (e) {
                                        if (e != gridlength) {
                                            if ($(this).closest("tr").find("input[type=hidden][id*=hdnClass_Srv_ID]").val() == 0) {
                                                if ($(this).closest("tr").find("[id*=txtPNAmt]").val() > 0) {
                                                    var manerornetamt = $(this).closest("tr").find("[id*=txtPNAmt]").val();
                                                    $(this).closest('tr').find("input[type=text][id*=txtDiscAmt]").val(parseFloat($(this).closest('tr').find("input[type=text][id*=txtDiscAmt]").val()) + parseFloat(manerornetamt));
                                                    //var mangentdisamt = $(this).closest('tr').find("input[type=text][id*=txtDiscAmt]").val();
                                                    $(this).closest("tr").find("[id*=txtPNAmt]").val(parseFloat($(this).closest("tr").find("[id*=txtPamt]").val()) - parseFloat(Math.round(parseFloat($(this).closest('tr').find("input[type=text][id*=txtDiscAmt]").val())) + parseFloat($(this).closest('tr').find("input[type=text][id*=txtHcAmt]").val()) + parseFloat($(this).closest('tr').find("input[type=text][id*=txtebAmt]").val()) + parseFloat($(this).closest('tr').find("input[type=text][id*=txtcncrlAmt]").val()) + parseFloat($(this).closest('tr').find("input[type=text][id*=txtmgAmt]").val()) + parseFloat($(this).closest('tr').find("input[type=text][id*=txtstAmt]").val())));
                                                    if ($(this).closest("tr").find("[id*=txtPNAmt]").val() < 0) {


                                                        $(this).closest("tr").find("[id*=txtPNAmt]").val(0);
                                                    }
                                                    $(this).closest("tr").find("[id*=txtDiscP]").val(Math.round(100 * parseFloat($(this).closest("tr").find("[id*=txtDiscAmt]").val()) / parseFloat($(this).closest("tr").find("[id*=txtPamt]").val())));
                                                    var tax_pct = $(this).closest('tr').find("input[type=text][id*=txttaxper]").val();
                                                    var pat_tax = Math.round(parseFloat($(this).closest("tr").find("[id*=txtPNAmt]").val()) * parseFloat(tax_pct / 100));
                                                    if (pat_tax == '' || pat_tax == undefined || pat_tax == null || pat_tax == "NaN") { pat_tax = '0'; }
                                                    erroramt = parseFloat(erroramt) - parseFloat(manerornetamt);
                                                }

                                                else {
                                                    if (erroramt == 0) {
                                                        $(this).closest('tr').find("input[type=text][id*=txtDiscAmt]").val(parseFloat($(this).closest('tr').find("input[type=text][id*=txtDiscAmt]").val()) - parseFloat(finalerroremt));
                                                    }
                                                    else {
                                                        $(this).closest('tr').find("input[type=text][id*=txtDiscAmt]").val(parseFloat($(this).closest('tr').find("input[type=text][id*=txtDiscAmt]").val()) - parseFloat(finalerroremt) - Math.abs(parseFloat(erroramt)));
                                                    }
                                                    //var mangentdisamt = $(this).closest('tr').find("input[type=text][id*=txtDiscAmt]").val();
                                                    $(this).closest("tr").find("[id*=txtPNAmt]").val(parseFloat($(this).closest("tr").find("[id*=txtPamt]").val()) - parseFloat(Math.round(parseFloat($(this).closest('tr').find("input[type=text][id*=txtDiscAmt]").val())) + parseFloat($(this).closest('tr').find("input[type=text][id*=txtHcAmt]").val()) + parseFloat($(this).closest('tr').find("input[type=text][id*=txtebAmt]").val()) + parseFloat($(this).closest('tr').find("input[type=text][id*=txtcncrlAmt]").val()) + parseFloat($(this).closest('tr').find("input[type=text][id*=txtmgAmt]").val()) + parseFloat($(this).closest('tr').find("input[type=text][id*=txtstAmt]").val())));
                                                    if ($(this).closest("tr").find("[id*=txtPNAmt]").val() < 0) {


                                                        $(this).closest("tr").find("[id*=txtPNAmt]").val(0);
                                                    }
                                                    $(this).closest("tr").find("[id*=txtmaPer]").val(Math.round(100 * parseFloat($(this).closest("tr").find("[id*=txtDiscAmt]").val()) / parseFloat($(this).closest("tr").find("[id*=txtPamt]").val())));
                                                    var tax_pct = $(this).closest('tr').find("input[type=text][id*=txttaxper]").val();
                                                    var pat_tax = Math.round(parseFloat($(this).closest("tr").find("[id*=txtPNAmt]").val()) * parseFloat(tax_pct / 100));
                                                    if (pat_tax == '' || pat_tax == undefined || pat_tax == null || pat_tax == "NaN") { pat_tax = '0'; }
                                                }
                                            }
                                        }
                                    });
                                }
                            }


                        }
                        if (discounttypeid == 3) {
                            var healthdisamt = $(this).closest('tr').find("input[type=text][id*=txtHcAmt]").val();
                            var eventdisamt = $(this).closest('tr').find("input[type=text][id*=txtebAmt]").val();
                            var ruleamt = $(this).closest('tr').find("input[type=text][id*=txtcncrlAmt]").val();
                            var mangentdisamt = $(this).closest('tr').find("input[type=text][id*=txtmgAmt]").val();
                            var staffdisamt = $(this).closest('tr').find("input[type=text][id*=txtstAmt]").val();
                            var cashdisamt = $(this).closest('tr').find("input[type=text][id*=txtDiscAmt]").val();
                            $(this).closest('tr').find("[id*=hdnnetamountold]").val(parseFloat(Finalnetamout));
                            $(this).closest('tr').find("[id*=hdncursamountold]").val(parseFloat(multidispcr));
                            if (healthdisamt == '' || healthdisamt == null || healthdisamt == undefined || healthdisamt == 'undefined' || isNaN(healthdisamt)) { healthdisamt = '0'; }
                            if (eventdisamt == '' || eventdisamt == null || eventdisamt == undefined || eventdisamt == 'undefined' || isNaN(eventdisamt)) { eventdisamt = '0'; }
                            if (ruleamt == '' || ruleamt == null || ruleamt == undefined || ruleamt == 'undefined' || isNaN(ruleamt)) { ruleamt = '0'; }
                            if (mangentdisamt == '' || mangentdisamt == null || mangentdisamt == undefined || mangentdisamt == 'undefined' || isNaN(mangentdisamt)) { mangentdisamt = '0'; }
                            if (staffdisamt == '' || staffdisamt == null || staffdisamt == undefined || staffdisamt == 'undefined' || isNaN(staffdisamt)) { staffdisamt = '0'; }
                            if (cashdisamt == '' || cashdisamt == null || cashdisamt == undefined || cashdisamt == 'undefined' || isNaN(cashdisamt)) { cashdisamt = '0'; }
                            // totmanamt = parseFloat(totmanamt) + parseFloat(mangentdisamt);
                            $(this).closest('tr').find("[id*=hdnmanagementoldamt]").val(parseFloat(mangentdisamt));
                            $(this).closest('tr').find("[id*=hdnstaffoldamt]").val(parseFloat(staffdisamt));
                            $(this).closest('tr').find("[id*=hdncasholdamt]").val(parseFloat(cashdisamt));
                            var linewisediscamt = parseFloat(parseFloat(PatnetAmt) - parseFloat(healthdisamt) - parseFloat(eventdisamt) - parseFloat(ruleamt) - parseFloat(mangentdisamt) - parseFloat(staffdisamt) - parseFloat(cashdisamt)) * parseFloat(curamount) / parseFloat(Finalnetamout);
                            if (linewisediscamt == '' || linewisediscamt == null || linewisediscamt == undefined || linewisediscamt == 'undefined' || isNaN(linewisediscamt)) { linewisediscamt = '0'; }


                            $(this).closest("tr").find("[id*=txtmgAmt]").val(Math.round(parseFloat(linewisediscamt).toFixed(1)));

                            decval += Math.round(parseFloat(linewisediscamt).toFixed(1)) - (parseFloat(linewisediscamt));
                            var mangentdisamt = $(this).closest('tr').find("input[type=text][id*=txtmgAmt]").val();
                            $(this).closest("tr").find("[id*=txtPNAmt]").val(parseFloat(PatnetAmt) - parseFloat(cashdisamt) - parseFloat(healthdisamt) - parseFloat(eventdisamt) - parseFloat(ruleamt) - parseFloat(mangentdisamt) - parseFloat(staffdisamt));

                            if ($(this).closest("tr").find("[id*=txtPNAmt]").val() < 0) {

                                decval += parseFloat(Math.abs($(this).closest("tr").find("[id*=txtPNAmt]").val()));
                                $(this).closest('tr').find("input[type=text][id*=txtmgAmt]").val(parseFloat($(this).closest('tr').find("input[type=text][id*=txtmgAmt]").val()) - parseFloat(Math.abs($(this).closest("tr").find("[id*=txtPNAmt]").val())));
                                $(this).closest("tr").find("[id*=txtPNAmt]").val(0);
                            }
                            $(this).closest("tr").find("[id*=txtmaPer]").val(Math.round(100 * parseFloat($(this).closest("tr").find("[id*=txtmgAmt]").val()) / parseFloat(PatnetAmt)));
                            var tax_pct = $(this).closest('tr').find("input[type=text][id*=txttaxper]").val();
                            var pat_tax = Math.round(parseFloat($(this).closest("tr").find("[id*=txtPNAmt]").val()) * parseFloat(tax_pct / 100));
                            if (pat_tax == '' || pat_tax == undefined || pat_tax == null || pat_tax == "NaN") { pat_tax = '0'; }
                            $(this).closest('tr').find("input[type=text][id*=txtptax]").val(pat_tax);
                            if (CurrentRowIndex == gridlength) {
                                totmanamt = 0;
                                $("table[id*=gvServices] tr:has(td)").each(function (e) {
                                    if (e != gridlength) {
                                        var mantdisamt = $(this).closest('tr').find("input[type=text][id*=txtmgAmt]").val();
                                    }
                                    if (mantdisamt == '' || mantdisamt == null || mantdisamt == undefined || mantdisamt == 'undefined' || isNaN(mantdisamt)) { mantdisamt = '0'; }
                                    totmanamt = parseFloat(totmanamt) + parseFloat(mantdisamt);
                                });
                                if (totmanamt == '' || totmanamt == null || totmanamt == undefined || totmanamt == 'undefined' || isNaN(totmanamt)) { totmanamt = '0'; }
                                var finalcon = parseFloat(parseFloat(curamount) - parseFloat(totmanamt));
                                if (Math.sign(parseFloat(finalcon)) == -1) { finalcon = 0; }

                                $(this).closest("tr").find("[id*=txtmgAmt]").val(parseFloat(finalcon));

                                var mangentdisamt = $(this).closest('tr').find("input[type=text][id*=txtmgAmt]").val();
                                $(this).closest("tr").find("[id*=txtPNAmt]").val(parseFloat(PatnetAmt) - parseFloat(Math.round(parseFloat(cashdisamt)) + parseFloat(healthdisamt) + parseFloat(eventdisamt) + parseFloat(ruleamt) + parseFloat(mangentdisamt) + parseFloat(staffdisamt)));
                                if ($(this).closest("tr").find("[id*=txtPNAmt]").val() < 0) {


                                    $(this).closest("tr").find("[id*=txtPNAmt]").val(0);
                                }
                                $(this).closest("tr").find("[id*=txtmaPer]").val(Math.round(100 * parseFloat($(this).closest("tr").find("[id*=txtmgAmt]").val()) / parseFloat(PatnetAmt)));
                                var tax_pct = $(this).closest('tr').find("input[type=text][id*=txttaxper]").val();
                                var pat_tax = Math.round(parseFloat($(this).closest("tr").find("[id*=txtPNAmt]").val()) * parseFloat(tax_pct / 100));
                                if (pat_tax == '' || pat_tax == undefined || pat_tax == null || pat_tax == "NaN") { pat_tax = '0'; }
                                $(this).closest('tr').find("input[type=text][id*=txtptax]").val(pat_tax);
                                if (parseFloat(parseFloat($(this).closest("tr").find("[id*=txtPamt]").val()) - Math.round(parseFloat($(this).closest('tr').find("input[type=text][id*=txtDiscAmt]").val())) - parseFloat($(this).closest('tr').find("input[type=text][id*=txtHcAmt]").val()) - parseFloat($(this).closest('tr').find("input[type=text][id*=txtebAmt]").val()) - parseFloat($(this).closest('tr').find("input[type=text][id*=txtcncrlAmt]").val()) - parseFloat($(this).closest("tr").find("[id*=txtmgAmt]").val()) - parseFloat($(this).closest('tr').find("input[type=text][id*=txtstAmt]").val())) < 0) {
                                    var erroramt = parseFloat(parseFloat($(this).closest("tr").find("[id*=txtPamt]").val()) - Math.round(parseFloat($(this).closest('tr').find("input[type=text][id*=txtDiscAmt]").val())) - parseFloat($(this).closest('tr').find("input[type=text][id*=txtHcAmt]").val()) - parseFloat($(this).closest('tr').find("input[type=text][id*=txtebAmt]").val()) - parseFloat($(this).closest('tr').find("input[type=text][id*=txtcncrlAmt]").val()) - parseFloat($(this).closest("tr").find("[id*=txtmgAmt]").val()) - parseFloat($(this).closest('tr').find("input[type=text][id*=txtstAmt]").val()));
                                    erroramt = Math.abs(erroramt);
                                    var finalerroremt = Math.abs(erroramt);
                                    $("table[id*=gvServices] tr:has(td)").each(function (e) {
                                        if (e != gridlength) {
                                            if ($(this).closest("tr").find("input[type=hidden][id*=hdnClass_Srv_ID]").val() == 0) {
                                                if ($(this).closest("tr").find("[id*=txtPNAmt]").val() > 0) {
                                                    var manerornetamt = $(this).closest("tr").find("[id*=txtPNAmt]").val();
                                                    $(this).closest('tr').find("input[type=text][id*=txtmgAmt]").val(parseFloat($(this).closest('tr').find("input[type=text][id*=txtmgAmt]").val()) + parseFloat(manerornetamt));
                                                    // var mangentdisamt = $(this).closest('tr').find("input[type=text][id*=txtmgAmt]").val();
                                                    $(this).closest("tr").find("[id*=txtPNAmt]").val(parseFloat($(this).closest("tr").find("[id*=txtPamt]").val()) - parseFloat(Math.round(parseFloat($(this).closest('tr').find("input[type=text][id*=txtDiscAmt]").val())) + parseFloat($(this).closest('tr').find("input[type=text][id*=txtHcAmt]").val()) + parseFloat($(this).closest('tr').find("input[type=text][id*=txtebAmt]").val()) + parseFloat($(this).closest('tr').find("input[type=text][id*=txtcncrlAmt]").val()) + parseFloat($(this).closest('tr').find("input[type=text][id*=txtmgAmt]").val()) + parseFloat($(this).closest('tr').find("input[type=text][id*=txtstAmt]").val())));
                                                    if ($(this).closest("tr").find("[id*=txtPNAmt]").val() < 0) {


                                                        $(this).closest("tr").find("[id*=txtPNAmt]").val(0);
                                                    }
                                                    $(this).closest("tr").find("[id*=txtmaPer]").val(Math.round(100 * parseFloat($(this).closest("tr").find("[id*=txtmgAmt]").val()) / parseFloat($(this).closest("tr").find("[id*=txtPamt]").val())));
                                                    var tax_pct = $(this).closest('tr').find("input[type=text][id*=txttaxper]").val();
                                                    var pat_tax = Math.round(parseFloat($(this).closest("tr").find("[id*=txtPNAmt]").val()) * parseFloat(tax_pct / 100));
                                                    if (pat_tax == '' || pat_tax == undefined || pat_tax == null || pat_tax == "NaN") { pat_tax = '0'; }
                                                    erroramt = parseFloat(erroramt) - parseFloat(manerornetamt);
                                                }

                                                else {
                                                    if (erroramt == 0) {
                                                        $(this).closest('tr').find("input[type=text][id*=txtmgAmt]").val(parseFloat($(this).closest('tr').find("input[type=text][id*=txtmgAmt]").val()) - parseFloat(finalerroremt));
                                                    }
                                                    else {
                                                        $(this).closest('tr').find("input[type=text][id*=txtmgAmt]").val(parseFloat($(this).closest('tr').find("input[type=text][id*=txtmgAmt]").val()) - parseFloat(finalerroremt) - Math.abs(parseFloat(erroramt)));
                                                    }
                                                    // var mangentdisamt = $(this).closest('tr').find("input[type=text][id*=txtmgAmt]").val();
                                                    $(this).closest("tr").find("[id*=txtPNAmt]").val(parseFloat($(this).closest("tr").find("[id*=txtPamt]").val()) - parseFloat(Math.round(parseFloat($(this).closest('tr').find("input[type=text][id*=txtDiscAmt]").val())) + parseFloat($(this).closest('tr').find("input[type=text][id*=txtHcAmt]").val()) + parseFloat($(this).closest('tr').find("input[type=text][id*=txtebAmt]").val()) + parseFloat($(this).closest('tr').find("input[type=text][id*=txtcncrlAmt]").val()) + parseFloat($(this).closest('tr').find("input[type=text][id*=txtmgAmt]").val()) + parseFloat($(this).closest('tr').find("input[type=text][id*=txtstAmt]").val())));
                                                    if ($(this).closest("tr").find("[id*=txtPNAmt]").val() < 0) {


                                                        $(this).closest("tr").find("[id*=txtPNAmt]").val(0);
                                                    }
                                                    $(this).closest("tr").find("[id*=txtmaPer]").val(Math.round(100 * parseFloat($(this).closest("tr").find("[id*=txtmgAmt]").val()) / parseFloat($(this).closest("tr").find("[id*=txtPamt]").val())));
                                                    var tax_pct = $(this).closest('tr').find("input[type=text][id*=txttaxper]").val();
                                                    var pat_tax = Math.round(parseFloat($(this).closest("tr").find("[id*=txtPNAmt]").val()) * parseFloat(tax_pct / 100));
                                                    if (pat_tax == '' || pat_tax == undefined || pat_tax == null || pat_tax == "NaN") { pat_tax = '0'; }
                                                }
                                            }
                                        }
                                    });
                                }
                                //                                else if (parseFloat(parseFloat($(this).closest("tr").find("[id*=txtPamt]").val()) - Math.round(parseFloat(cashdisamt)) - parseFloat(healthdisamt) - parseFloat(eventdisamt) - parseFloat(ruleamt) - parseFloat($(this).closest("tr").find("[id*=txtmgAmt]").val()) - parseFloat(staffdisamt)) >0) {

                                //                             

                                //                                    var erroramt = parseFloat(parseFloat($(this).closest("tr").find("[id*=txtPamt]").val()) - Math.round(parseFloat($(this).closest('tr').find("input[type=text][id*=txtDiscAmt]").val())) - parseFloat($(this).closest('tr').find("input[type=text][id*=txtHcAmt]").val()) - parseFloat($(this).closest('tr').find("input[type=text][id*=txtebAmt]").val()) - parseFloat( $(this).closest('tr').find("input[type=text][id*=txtcncrlAmt]").val()) - parseFloat($(this).closest("tr").find("[id*=txtmgAmt]").val()) - parseFloat($(this).closest('tr').find("input[type=text][id*=txtstAmt]").val()));
                                //                                    erroramt = Math.abs(erroramt);
                                //                                    var finalerroremt = Math.abs(erroramt);
                                //                                    $("table[id*=gvServices] tr:has(td)").each(function (e) {
                                //                                        if (e != gridlength) {
                                //                                            if (parseFloat(parseFloat($(this).closest("tr").find("[id*=txtPamt]").val()) - Math.round(parseFloat(cashdisamt)) - parseFloat(healthdisamt) - parseFloat(eventdisamt) - parseFloat(ruleamt) - parseFloat($(this).closest("tr").find("[id*=txtmgAmt]").val()) - parseFloat(staffdisamt)) <0) {
                                //                                                var manerornetamt = parseFloat(parseFloat($(this).closest("tr").find("[id*=txtPamt]").val()) - Math.round(parseFloat(cashdisamt)) - parseFloat(healthdisamt) - parseFloat(eventdisamt) - parseFloat(ruleamt) - parseFloat($(this).closest("tr").find("[id*=txtmgAmt]").val()) - parseFloat(staffdisamt));
                                //                                                $(this).closest('tr').find("input[type=text][id*=txtmgAmt]").val(parseFloat($(this).closest('tr').find("input[type=text][id*=txtmgAmt]").val()) + parseFloat(manerornetamt));
                                //                                                var mangentdisamt = $(this).closest('tr').find("input[type=text][id*=txtmgAmt]").val();
                                //                                                $(this).closest("tr").find("[id*=txtPNAmt]").val(parseFloat($(this).closest("tr").find("[id*=txtPamt]").val()) - parseFloat(Math.round(parseFloat($(this).closest('tr').find("input[type=text][id*=txtDiscAmt]").val())) + parseFloat($(this).closest('tr').find("input[type=text][id*=txtHcAmt]").val()) + parseFloat($(this).closest('tr').find("input[type=text][id*=txtebAmt]").val()) + parseFloat($(this).closest('tr').find("input[type=text][id*=txtcncrlAmt]").val()) + parseFloat($(this).closest('tr').find("input[type=text][id*=txtmgAmt]").val()) + parseFloat($(this).closest('tr').find("input[type=text][id*=txtstAmt]").val())));
                                //                                                if ($(this).closest("tr").find("[id*=txtPNAmt]").val() < 0) {


                                //                                                    $(this).closest("tr").find("[id*=txtPNAmt]").val(0);
                                //                                                }
                                //                                                $(this).closest("tr").find("[id*=txtmaPer]").val(Math.round(100 * parseFloat($(this).closest("tr").find("[id*=txtmgAmt]").val()) / parseFloat($(this).closest("tr").find("[id*=txtPamt]").val())));
                                //                                                var tax_pct = $(this).closest('tr').find("input[type=text][id*=txttaxper]").val();
                                //                                                var pat_tax = Math.round(parseFloat($(this).closest("tr").find("[id*=txtPNAmt]").val()) * parseFloat(tax_pct / 100));
                                //                                                if (pat_tax == '' || pat_tax == undefined || pat_tax == null || pat_tax == "NaN") { pat_tax = '0'; }
                                //                                                erroramt = parseFloat(erroramt) - parseFloat(manerornetamt);
                                //}
                                //                                        }
                                //                                        else {
                                //                                            if (erroramt == 0) {
                                //                                                $(this).closest('tr').find("input[type=text][id*=txtmgAmt]").val(parseFloat($(this).closest('tr').find("input[type=text][id*=txtmgAmt]").val()) - parseFloat(finalerroremt));
                                //                                            }
                                //                                            else {
                                //                                                $(this).closest('tr').find("input[type=text][id*=txtmgAmt]").val(parseFloat($(this).closest('tr').find("input[type=text][id*=txtmgAmt]").val()) - parseFloat(finalerroremt) - parseFloat(erroramt));
                                //                                            }
                                //                                            var mangentdisamt = $(this).closest('tr').find("input[type=text][id*=txtmgAmt]").val();
                                //                                            $(this).closest("tr").find("[id*=txtPNAmt]").val(parseFloat($(this).closest("tr").find("[id*=txtPamt]").val()) - parseFloat(Math.round(parseFloat($(this).closest('tr').find("input[type=text][id*=txtDiscAmt]").val())) + parseFloat($(this).closest('tr').find("input[type=text][id*=txtHcAmt]").val()) + parseFloat($(this).closest('tr').find("input[type=text][id*=txtebAmt]").val()) + parseFloat($(this).closest('tr').find("input[type=text][id*=txtcncrlAmt]").val()) + parseFloat($(this).closest('tr').find("input[type=text][id*=txtmgAmt]").val()) + parseFloat($(this).closest('tr').find("input[type=text][id*=txtstAmt]").val())));
                                //                                            if ($(this).closest("tr").find("[id*=txtPNAmt]").val() < 0) {


                                //                                                $(this).closest("tr").find("[id*=txtPNAmt]").val(0);
                                //                                            }
                                //                                            $(this).closest("tr").find("[id*=txtmaPer]").val(Math.round(100 * parseFloat($(this).closest("tr").find("[id*=txtmgAmt]").val()) / parseFloat($(this).closest("tr").find("[id*=txtPamt]").val())));
                                //                                            var tax_pct = $(this).closest('tr').find("input[type=text][id*=txttaxper]").val();
                                //                                            var pat_tax = Math.round(parseFloat($(this).closest("tr").find("[id*=txtPNAmt]").val()) * parseFloat(tax_pct / 100));
                                //                                            if (pat_tax == '' || pat_tax == undefined || pat_tax == null || pat_tax == "NaN") { pat_tax = '0'; }
                                //                                        }
                                //                                    });
                                //                                
                                //                                }


                            }

                        }
                        if (discounttypeid == 4) {
                            var healthdisamt = $(this).closest('tr').find("input[type=text][id*=txtHcAmt]").val();
                            var eventdisamt = $(this).closest('tr').find("input[type=text][id*=txtebAmt]").val();
                            var ruleamt = $(this).closest('tr').find("input[type=text][id*=txtcncrlAmt]").val();
                            var mangentdisamt = $(this).closest('tr').find("input[type=text][id*=txtmgAmt]").val();
                            var staffdisamt = $(this).closest('tr').find("input[type=text][id*=txtstAmt]").val();
                            var cashdisamt = $(this).closest('tr').find("input[type=text][id*=txtDiscAmt]").val();
                            $(this).closest('tr').find("[id*=hdnnetamountold]").val(parseFloat(Finalnetamout));
                            $(this).closest('tr').find("[id*=hdncursamountold]").val(parseFloat(multidispcr));

                            if (healthdisamt == '' || healthdisamt == null || healthdisamt == undefined || healthdisamt == 'undefined' || isNaN(healthdisamt)) { healthdisamt = '0'; }
                            if (eventdisamt == '' || eventdisamt == null || eventdisamt == undefined || eventdisamt == 'undefined' || isNaN(eventdisamt)) { eventdisamt = '0'; }
                            if (ruleamt == '' || ruleamt == null || ruleamt == undefined || ruleamt == 'undefined' || isNaN(ruleamt)) { ruleamt = '0'; }
                            if (mangentdisamt == '' || mangentdisamt == null || mangentdisamt == undefined || mangentdisamt == 'undefined' || isNaN(mangentdisamt)) { mangentdisamt = '0'; }
                            if (staffdisamt == '' || staffdisamt == null || staffdisamt == undefined || staffdisamt == 'undefined' || isNaN(staffdisamt)) { staffdisamt = '0'; }
                            if (cashdisamt == '' || cashdisamt == null || cashdisamt == undefined || cashdisamt == 'undefined' || isNaN(cashdisamt)) { cashdisamt = '0'; }

                            $(this).closest('tr').find("[id*=hdnmanagementoldamt]").val(parseFloat(mangentdisamt));
                            $(this).closest('tr').find("[id*=hdnstaffoldamt]").val(parseFloat(staffdisamt));
                            $(this).closest('tr').find("[id*=hdncasholdamt]").val(parseFloat(cashdisamt));
                            var linewisediscamt = parseFloat(parseFloat(PatnetAmt) - parseFloat(healthdisamt) - parseFloat(eventdisamt) - parseFloat(ruleamt) - parseFloat(mangentdisamt) - parseFloat(staffdisamt) - parseFloat(cashdisamt)) * parseFloat(curamount) / parseFloat(Finalnetamout);
                            if (linewisediscamt == '' || linewisediscamt == null || linewisediscamt == undefined || linewisediscamt == 'undefined' || isNaN(linewisediscamt)) { linewisediscamt = '0'; }



                            $(this).closest("tr").find("[id*=txtstAmt]").val(Math.round(parseFloat(linewisediscamt).toFixed(1)));
                            decval += Math.round(parseFloat(linewisediscamt).toFixed(1)) - (parseFloat(linewisediscamt));
                            var staffdisamt = $(this).closest('tr').find("input[type=text][id*=txtstAmt]").val();
                            $(this).closest("tr").find("[id*=txtPNAmt]").val(parseFloat(PatnetAmt) - parseFloat(cashdisamt) - parseFloat(healthdisamt) - parseFloat(eventdisamt) - parseFloat(ruleamt) - parseFloat(mangentdisamt) - parseFloat(staffdisamt));
                            $(this).closest("tr").find("[id*=txtPNAmt]").val(parseFloat(PatnetAmt) - parseFloat(cashdisamt) - parseFloat(healthdisamt) - parseFloat(eventdisamt) - parseFloat(ruleamt) - parseFloat(mangentdisamt) - parseFloat(staffdisamt));
                            if ($(this).closest("tr").find("[id*=txtPNAmt]").val() < 0) {

                                decval += parseFloat(Math.abs($(this).closest("tr").find("[id*=txtPNAmt]").val()));
                                $(this).closest('tr').find("input[type=text][id*=txtstAmt]").val(parseFloat($(this).closest('tr').find("input[type=text][id*=txtstAmt]").val()) - parseFloat(Math.abs($(this).closest("tr").find("[id*=txtPNAmt]").val())));
                                $(this).closest("tr").find("[id*=txtPNAmt]").val(0);
                            }
                            $(this).closest("tr").find("[id*=txtstPer]").val(Math.round(100 * parseFloat($(this).closest("tr").find("[id*=txtstAmt]").val()) / parseFloat(PatnetAmt)));

                            if (CurrentRowIndex == gridlength) {
                                totstaffamt = 0;
                                $("table[id*=gvServices] tr:has(td)").each(function (e) {
                                    if (e != gridlength) {
                                        var stafftdisamt = $(this).closest('tr').find("input[type=text][id*=txtstAmt]").val();
                                    }
                                    if (stafftdisamt == '' || stafftdisamt == null || stafftdisamt == undefined || stafftdisamt == 'undefined' || isNaN(stafftdisamt)) { stafftdisamt = '0'; }
                                    totstaffamt = parseFloat(totstaffamt) + parseFloat(stafftdisamt);
                                });
                                if (totstaffamt == '' || totstaffamt == null || totstaffamt == undefined || totstaffamt == 'undefined' || isNaN(totstaffamt)) { totstaffamt = '0'; }
                                var finalcon = parseFloat(parseFloat(curamount) - parseFloat(totstaffamt));
                                if (Math.sign(parseFloat(finalcon)) == -1) { finalcon = 0; }

                                $(this).closest("tr").find("[id*=txtstAmt]").val(parseFloat(finalcon));

                                var staffdisamt = $(this).closest('tr').find("input[type=text][id*=txtstAmt]").val();
                                $(this).closest("tr").find("[id*=txtPNAmt]").val(parseFloat(PatnetAmt) - parseFloat(Math.round(parseFloat(cashdisamt)) + parseFloat(healthdisamt) + parseFloat(eventdisamt) + parseFloat(ruleamt) + parseFloat(mangentdisamt) + parseFloat(staffdisamt)));
                                if ($(this).closest("tr").find("[id*=txtPNAmt]").val() < 0) {


                                    $(this).closest("tr").find("[id*=txtPNAmt]").val(0);
                                }
                                $(this).closest("tr").find("[id*=txtstPer]").val(Math.round(100 * parseFloat($(this).closest("tr").find("[id*=txtstAmt]").val()) / parseFloat(PatnetAmt)));
                                var tax_pct = $(this).closest('tr').find("input[type=text][id*=txttaxper]").val();
                                var pat_tax = Math.round(parseFloat($(this).closest("tr").find("[id*=txtPNAmt]").val()) * parseFloat(tax_pct / 100));
                                if (pat_tax == '' || pat_tax == undefined || pat_tax == null || pat_tax == "NaN") { pat_tax = '0'; }
                                $(this).closest('tr').find("input[type=text][id*=txtptax]").val(pat_tax);
                                if (parseFloat(parseFloat($(this).closest("tr").find("[id*=txtPamt]").val()) - Math.round(parseFloat($(this).closest("tr").find("[id*=txtDiscAmt]").val())) - parseFloat($(this).closest('tr').find("input[type=text][id*=txtHcAmt]").val()) - parseFloat($(this).closest('tr').find("input[type=text][id*=txtebAmt]").val()) - parseFloat($(this).closest('tr').find("input[type=text][id*=txtcncrlAmt]").val()) - parseFloat($(this).closest("tr").find("[id*=txtmgAmt]").val()) - parseFloat($(this).closest('tr').find("input[type=text][id*=txtstAmt]").val())) < 0) {
                                    var erroramt = parseFloat(parseFloat($(this).closest("tr").find("[id*=txtPamt]").val()) - Math.round(parseFloat($(this).closest("tr").find("[id*=txtDiscAmt]").val())) - parseFloat($(this).closest('tr').find("input[type=text][id*=txtHcAmt]").val()) - parseFloat($(this).closest('tr').find("input[type=text][id*=txtebAmt]").val()) - parseFloat($(this).closest('tr').find("input[type=text][id*=txtcncrlAmt]").val()) - parseFloat($(this).closest("tr").find("[id*=txtmgAmt]").val()) - parseFloat($(this).closest('tr').find("input[type=text][id*=txtstAmt]").val()));
                                    erroramt = Math.abs(erroramt);
                                    var finalerroremt = Math.abs(erroramt);
                                    $("table[id*=gvServices] tr:has(td)").each(function (e) {
                                        if (e != gridlength) {
                                            if ($(this).closest("tr").find("input[type=hidden][id*=hdnClass_Srv_ID]").val() == 0) {
                                                if ($(this).closest("tr").find("[id*=txtPNAmt]").val() > 0) {
                                                    var manerornetamt = $(this).closest("tr").find("[id*=txtPNAmt]").val();
                                                    $(this).closest('tr').find("input[type=text][id*=txtstAmt]").val(parseFloat($(this).closest('tr').find("input[type=text][id*=txtstAmt]").val()) + parseFloat(manerornetamt));

                                                    $(this).closest("tr").find("[id*=txtPNAmt]").val(parseFloat($(this).closest("tr").find("[id*=txtPamt]").val()) - parseFloat(Math.round(parseFloat($(this).closest('tr').find("input[type=text][id*=txtDiscAmt]").val())) + parseFloat($(this).closest('tr').find("input[type=text][id*=txtHcAmt]").val()) + parseFloat($(this).closest('tr').find("input[type=text][id*=txtebAmt]").val()) + parseFloat($(this).closest('tr').find("input[type=text][id*=txtcncrlAmt]").val()) + parseFloat($(this).closest('tr').find("input[type=text][id*=txtmgAmt]").val()) + parseFloat($(this).closest('tr').find("input[type=text][id*=txtstAmt]").val())));
                                                    if ($(this).closest("tr").find("[id*=txtPNAmt]").val() < 0) {


                                                        $(this).closest("tr").find("[id*=txtPNAmt]").val(0);
                                                    }
                                                    $(this).closest("tr").find("[id*=txtstPer]").val(Math.round(100 * parseFloat($(this).closest("tr").find("[id*=txtstAmt]").val()) / parseFloat($(this).closest("tr").find("[id*=txtPamt]").val())));
                                                    var tax_pct = $(this).closest('tr').find("input[type=text][id*=txttaxper]").val();
                                                    var pat_tax = Math.round(parseFloat($(this).closest("tr").find("[id*=txtPNAmt]").val()) * parseFloat(tax_pct / 100));
                                                    if (pat_tax == '' || pat_tax == undefined || pat_tax == null || pat_tax == "NaN") { pat_tax = '0'; }
                                                    erroramt = parseFloat(erroramt) - parseFloat(manerornetamt);
                                                }

                                                else {
                                                    if (erroramt == 0) {
                                                        $(this).closest('tr').find("input[type=text][id*=txtstAmt]").val(parseFloat($(this).closest('tr').find("input[type=text][id*=txtstAmt]").val()) - parseFloat(finalerroremt));
                                                    }
                                                    else {
                                                        $(this).closest('tr').find("input[type=text][id*=txtstAmt]").val(parseFloat($(this).closest('tr').find("input[type=text][id*=txtstAmt]").val()) - parseFloat(finalerroremt) - Math.abs(parseFloat(erroramt)));
                                                    }

                                                    $(this).closest("tr").find("[id*=txtPNAmt]").val(parseFloat($(this).closest("tr").find("[id*=txtPamt]").val()) - parseFloat(Math.round(parseFloat($(this).closest('tr').find("input[type=text][id*=txtDiscAmt]").val())) + parseFloat($(this).closest('tr').find("input[type=text][id*=txtHcAmt]").val()) + parseFloat($(this).closest('tr').find("input[type=text][id*=txtebAmt]").val()) + parseFloat($(this).closest('tr').find("input[type=text][id*=txtcncrlAmt]").val()) + parseFloat($(this).closest('tr').find("input[type=text][id*=txtmgAmt]").val()) + parseFloat($(this).closest('tr').find("input[type=text][id*=txtstAmt]").val())));
                                                    if ($(this).closest("tr").find("[id*=txtPNAmt]").val() < 0) {


                                                        $(this).closest("tr").find("[id*=txtPNAmt]").val(0);
                                                    }
                                                    $(this).closest("tr").find("[id*=txtstPer]").val(Math.round(100 * parseFloat($(this).closest("tr").find("[id*=txtstAmt]").val()) / parseFloat($(this).closest("tr").find("[id*=txtPamt]").val())));
                                                    var tax_pct = $(this).closest('tr').find("input[type=text][id*=txttaxper]").val();
                                                    var pat_tax = Math.round(parseFloat($(this).closest("tr").find("[id*=txtPNAmt]").val()) * parseFloat(tax_pct / 100));
                                                    if (pat_tax == '' || pat_tax == undefined || pat_tax == null || pat_tax == "NaN") { pat_tax = '0'; }
                                                }
                                            }
                                        }
                                    });
                                }
                            }

                        }

                    }
                }
            }
            //}


        });



        var SrvCashPerTotal = 0, SrvHealthcardTotal = 0, SrvManageMentTotal = 0, SrvStaffTotal = 0, SrvEventBasedTotal = 0; SrvRulBasedTotal = 0;
        var SrvCashAmtTotal = 0, SrvHealthcardAmtTotal = 0, SrvManageMentAmtTotal = 0, SrvStaffAmtTotal = 0, SrvEventBasedAmtTotal = 0, SrvAmtBasedAmtTotal = 0;

        var TotalSrvPer = 0;
        var TotalSrvAmt = 0;
        $("table[id*=gvServices] tr:has(td)").each(function (e) {
            if ($(this).closest('tr').find("input[type=text][id*=txtDiscP]").val() != '' && $(this).closest('tr').find("input[type=hidden][id*=hdnClass_Srv_ID]").val() == 0 && $(this).closest('tr').find("input[type=text][id*=txtDiscP]").val() != undefined) {
                var CashPer = $(this).closest('tr').find("input[type=text][id*=txtDiscP]").val();
                var CashAmt = $(this).closest('tr').find("input[type=text][id*=txtDiscAmt]").val();
                CashPer = CashPer == '' ? 0 : CashPer;
                CashAmt = CashAmt == '' ? 0 : CashAmt;
                SrvCashPerTotal += parseFloat(CashPer);
                SrvCashAmtTotal += parseFloat(CashAmt);
            }
            if ($(this).closest('tr').find("input[type=text][id*=txthcPer]").val() != '' && $(this).closest('tr').find("input[type=hidden][id*=hdnClass_Srv_ID]").val() == 0 && $(this).closest('tr').find("input[type=text][id*=txthcPer]").val() != undefined) {
                var Healthcard = $(this).closest('tr').find("input[type=text][id*=txthcPer]").val();
                var HealthcardAmt = $(this).closest('tr').find("input[type=text][id*=txtHcAmt]").val();
                Healthcard = Healthcard == '' ? 0 : Healthcard;
                HealthcardAmt = HealthcardAmt == '' ? 0 : HealthcardAmt;
                SrvHealthcardAmtTotal += parseFloat(HealthcardAmt);
            }
            if ($(this).closest('tr').find("input[type=text][id*=txtmaPer]").val() != '' && $(this).closest('tr').find("input[type=hidden][id*=hdnClass_Srv_ID]").val() == 0 && $(this).closest('tr').find("input[type=text][id*=txtmaPer]").val() != undefined) {
                var Management = $(this).closest('tr').find("input[type=text][id*=txtmaPer]").val();
                var ManagementAmt = $(this).closest('tr').find("input[type=text][id*=txtmgAmt]").val();
                Management = Management == '' ? 0 : Management;
                ManagementAmt = ManagementAmt == '' ? 0 : ManagementAmt;
                SrvManageMentTotal += parseFloat(Management);
                SrvManageMentAmtTotal += parseFloat(ManagementAmt);
            }
            if ($(this).closest('tr').find("input[type=text][id*=txtstPer]").val() != '' && $(this).closest('tr').find("input[type=hidden][id*=hdnClass_Srv_ID]").val() == 0 && $(this).closest('tr').find("input[type=text][id*=txtstPer]").val() != undefined) {
                var Staff = $(this).closest('tr').find("input[type=text][id*=txtstPer]").val();
                var StaffAmt = $(this).closest('tr').find("input[type=text][id*=txtstAmt]").val();
                Staff = Staff == '' ? 0 : Staff;
                StaffAmt = StaffAmt == '' ? 0 : StaffAmt;
                SrvStaffTotal += parseFloat(Staff);
                SrvStaffAmtTotal += parseFloat(StaffAmt);
            }
            if ($(this).closest('tr').find("input[type=text][id*=txtebPer]").val() != '' && $(this).closest('tr').find("input[type=hidden][id*=hdnClass_Srv_ID]").val() == 0 && $(this).closest('tr').find("input[type=text][id*=txtebPer]").val() != undefined) {
                var EventBased = $(this).closest('tr').find("input[type=text][id*=txtebPer]").val();
                var EventBasedAmt = $(this).closest('tr').find("input[type=text][id*=txtebAmt]").val();
                EventBased = EventBased == '' ? 0 : EventBased;
                EventBasedAmt = EventBasedAmt == '' ? 0 : EventBasedAmt;
                SrvEventBasedTotal += parseFloat(EventBased);
                SrvEventBasedAmtTotal += parseFloat(EventBasedAmt);
            }
            if ($(this).closest('tr').find("input[type=text][id*=txtRulePer]").val() != '' && $(this).closest('tr').find("input[type=hidden][id*=hdnClass_Srv_ID]").val() == 0 && $(this).closest('tr').find("input[type=text][id*=txtRulePer]").val() != undefined) {
                var RuleBased = $(this).closest('tr').find("input[type=text][id*=txtRulePer]").val();
                var RuleBasedAmt = $(this).closest('tr').find("input[type=text][id*=txtcncrlAmt]").val();
                RuleBased = RuleBased == '' ? 0 : RuleBased;
                RuleBasedAmt = RuleBasedAmt == '' ? 0 : RuleBasedAmt;
                SrvRulBasedTotal += parseFloat(RuleBased);
                SrvAmtBasedAmtTotal += parseFloat(RuleBasedAmt);
            }

        });
        TotalSrvPer = SrvCashPerTotal + SrvHealthcardTotal + SrvManageMentTotal + SrvStaffTotal + SrvEventBasedTotal + SrvRulBasedTotal;
        TotalSrvAmt = SrvCashAmtTotal + SrvHealthcardAmtTotal + SrvManageMentAmtTotal + SrvStaffAmtTotal + SrvEventBasedAmtTotal + SrvAmtBasedAmtTotal;
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatdis').value = Math.round(setProperDecimalsCorp(TotalSrvPer));
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatgrossamt').value = Math.round(TotalSrvAmt);
        if (Math.floor(TotalSrvPer) == 100) {
            document.getElementById('' + ctrlcom + '_ReceiptControl2_Search3_txtSearchControl').disabled = true;
            document.getElementById('' + ctrlcom + '_ReceiptControl2_Search3_txtSearchControl').className = 'grey';
            document.getElementById('lk_btn_ctl00_ContentPlaceHolder1_ReceiptControl2_Search3').disabled = true;

        }
        else {
            document.getElementById('' + ctrlcom + '_ReceiptControl2_Search3_txtSearchControl').disabled = false;
            document.getElementById('' + ctrlcom + '_ReceiptControl2_Search3_txtSearchControl').className = 'red';
            document.getElementById('lk_btn_ctl00_ContentPlaceHolder1_ReceiptControl2_Search3').disabled = false;
        }

        CalculateGridAmtCount();

    }

    function CalculateGridAmtCountMultiple() {
        var Perconces = 0, concession = 0, txtPayAmt = 0, dec = 2;
        var sGrid = document.getElementById('' + ctrlcom + '_UCServices_gvServices');
        var TAmount = 0, GAmount = 0, Amount = 0, NetAmount = 0, Qty = 0, Rate = 0, IndivConcession = 0, InitialAmount = 0, TotConcession = 0;
        var IndividualSumAmt = 0;
        var CmpcGross = 0; cmpcDPent = 0; cmpcDFlat = 0, CmpcNAmt = 0;
        var TotalDisPer = 0;
        var TotalDiscAmt = 0;

        try {
            $("table[id*=gvServices] tr:has(td)").each(function (e) {
                var ev = this.rowIndex;
                if (ev != undefined && ev != '' && ev != null) { ev = ev; } else { ev = 1; }
                if ($(this).closest('tr').find("input[type=hidden][id*=hdnServiceID]").val() > 0 && $(this).closest('tr').find("input[type=hidden][id*=hdnClass_Srv_ID]").val() == 0) {
                    var patbAmt = $(this).closest('tr').find("input[type=text][id*=txtPamt]").val();
                    var patDPercent = $(this).closest('tr').find("input[type=text][id*=txtDiscP]").val();
                    var patDFlat = $(this).closest('tr').find("input[type=text][id*=txtDiscAmt]").val();
                    var HcpatDPercent = $(this).closest('tr').find("input[type=text][id*=txthcPer]").val();
                    var HcpatDFlat = $(this).closest('tr').find("input[type=text][id*=txtHcAmt]").val();
                    var mapatDPercent = $(this).closest('tr').find("input[type=text][id*=txtmaPer]").val();
                    var mapatDFlat = $(this).closest('tr').find("input[type=text][id*=txtmgAmt]").val();
                    var stpatDPercent = $(this).closest('tr').find("input[type=text][id*=txtstPer]").val();
                    var stpatDFlat = $(this).closest('tr').find("input[type=text][id*=txtstAmt]").val();
                    var ebpatDPercent = $(this).closest('tr').find("input[type=text][id*=txtebPer]").val();
                    var ebpatDFlat = $(this).closest('tr').find("input[type=text][id*=txtebAmt]").val();
                    var rolepatDPercent = $(this).closest('tr').find("input[type=text][id*=txtRulePer]").val();
                    var rolepatDFlat = $(this).closest('tr').find("input[type=text][id*=txtcncrlAmt]").val();
                    var PatNAmt = $(this).closest('tr').find("input[type=text][id*=txtPNAmt]").val();
                    var CmpBAmt = $(this).closest('tr').find("input[type=text][id*=txtCamt]").val();
                    var CmpDPercent = $(this).closest('tr').find("input[type=text][id*=txtCDiscP]").val();
                    var CmpDFlat = $(this).closest('tr').find("input[type=text][id*=txtCDiscAmt]").val();
                    var CmpNAmt = $(this).closest('tr').find("input[type=text][id*=txtCNetAmt]").val();
                    if (rolepatDFlat == '' || rolepatDFlat == undefined || isNaN(rolepatDFlat)) { rolepatDFlat = '0'; }
                    if (patbAmt == '' || patbAmt == undefined || isNaN(patbAmt)) { patbAmt = '0'; }
                    if (CmpBAmt == '' || CmpBAmt == undefined || isNaN(CmpBAmt)) { CmpBAmt = '0'; }
                    if (patDFlat == '' || patDFlat == undefined || isNaN(patDFlat)) { patDFlat = '0'; }
                    if (HcpatDFlat == '' || HcpatDFlat == undefined || isNaN(HcpatDFlat)) { HcpatDFlat = '0'; }
                    if (mapatDFlat == '' || mapatDFlat == undefined || isNaN(mapatDFlat)) { mapatDFlat = '0'; }
                    if (stpatDFlat == '' || stpatDFlat == undefined || isNaN(stpatDFlat)) { stpatDFlat = '0'; }
                    if (ebpatDFlat == '' || ebpatDFlat == undefined || isNaN(ebpatDFlat)) { ebpatDFlat = '0'; }

                    GAmount = parseFloat(GAmount) + parseFloat(patbAmt); /*Patient Bill Amount */
                    CmpcGross = parseFloat(CmpcGross) + parseFloat(CmpBAmt); /*Patient Bill Amount */
                    CmpcNAmt = parseFloat(CmpcNAmt) + parseFloat(CmpNAmt);
                    var TotalFlatPer = parseFloat(patDFlat) + parseFloat(HcpatDFlat) + parseFloat(mapatDFlat) + parseFloat(stpatDFlat) + parseFloat(ebpatDFlat) + parseFloat(rolepatDFlat);
                    if (!isNaN(patDFlat) && patDFlat != "") {
                        patDFlat = patDFlat = "" ? 0 : patDFlat;
                        IndivConcession = IndivConcession = "" ? 0 : IndivConcession;
                        TotConcession = parseFloat(TotalFlatPer) + parseFloat(IndivConcession); /* caluculating total concession*/
                        IndividualSumAmt = parseFloat(TotConcession) + parseFloat(IndividualSumAmt);
                    }
                }
            });
        }
        catch (e) {
        }
        if (document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnDocName').value == 'OPQUICK') {
            var regFee = 0;
            if (document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnRegconSetting').value == "Yes") {
            }
            else {
            }
            regFee = regFee == '' ? 0 : regFee;
            regFee = regFee == undefined ? 0 : regFee;
            GAmount = parseFloat(GAmount);
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtparygross').value = parseFloat(CmpcGross);
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatdue').value = parseFloat(GAmount);
            document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnDueAmt').value = parseFloat(GAmount);
            document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnNetAmt').value = parseFloat(GAmount);
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtcmpDue').value = parseFloat(CmpcNAmt);
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtTotalDue').value = parseFloat(GAmount) + parseFloat(CmpcNAmt);
            document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnPayAmt').value = parseFloat(GAmount) + parseFloat(CmpcNAmt);
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtTotalDue').value = parseFloat(GAmount - IndividualSumAmt) + parseFloat(CmpcGross);
            /*Quick End */
            /* Advanced Start */
            var CurentNetyamount = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatgrossamt').value;
            CurentNetyamount = CurentNetyamount == '' ? 0 : CurentNetyamount;
            CurentNetyamount = CurentNetyamount == undefined ? 0 : CurentNetyamount;
            var concPer = setProperDecimalsCorp(parseFloat(CurentNetyamount) * 100 / (parseFloat(GAmount) + parseFloat(regFee)));
            var Concess = setProperDecimalsCorp((parseFloat(concPer) / 100) * parseFloat(regFee));
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatdis').value = setProperDecimalsCorp(concPer);
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatgross').value = parseFloat(GAmount) + parseFloat(regFee);
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtparygross').value = parseFloat(CmpcGross);
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtgrosstotal').value = parseFloat(GAmount) + parseFloat(CmpcGross) + parseFloat(regFee);
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatNet').value = parseFloat(GAmount - (IndividualSumAmt + Concess)) + parseFloat(regFee);
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtcmpNet').value = parseFloat(CmpcGross);
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtTotalNet').value = parseFloat(GAmount - (IndividualSumAmt + Concess)) + parseFloat(CmpcGross) + parseFloat(regFee);
            if (document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnisallowgst').value.toUpperCase() == "YES") {
                document.getElementById('' + ctrlcom + '_ReceiptControl2_txtCurrAmt').value = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatdue').value;
                document.getElementById('' + ctrlcom + '_ReceiptControl2_txtreqamtkyd').value = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatdue').value;
            }
            else {
                document.getElementById('' + ctrlcom + '_ReceiptControl2_txtCurrAmt').value = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatNet').value;
                document.getElementById('' + ctrlcom + '_ReceiptControl2_txtreqamtkyd').value = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatNet').value;
            }
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatdue').value = parseFloat(GAmount - (IndividualSumAmt + Concess)) + parseFloat(regFee);
            document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnDueAmt').value = parseFloat(GAmount - (IndividualSumAmt + Concess)) + parseFloat(regFee);
            document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnNetAmt').value = parseFloat(GAmount - (IndividualSumAmt + Concess)) + parseFloat(regFee);
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtcmpDue').value = parseFloat(CmpcNAmt);
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtTotalDue').value = parseFloat(GAmount - (IndividualSumAmt + Concess)) + parseFloat(CmpcNAmt) + parseFloat(regFee);
            document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnNetAmt').value = parseFloat(GAmount - (IndividualSumAmt + Concess)) + parseFloat(CmpcNAmt) + parseFloat(regFee);
            var CurDue = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatgrossamt').value;
            var CurCmpDue = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpartygrossamt').value;
            CurDue = typeof CurDue == 'string' ? (typeof CurDue == 'undefined' || CurDue.trim() == '' ? 0 : parseFloat(CurDue)) : (typeof CurDue == 'object' ? 0 : parseFloat(CurDue));
            CurCmpDue = typeof CurCmpDue == 'string' ? (typeof CurCmpDue == 'undefined' || CurCmpDue.trim() == '' ? 0 : parseFloat(CurCmpDue)) : (typeof CurCmpDue == 'object' ? 0 : parseFloat(CurCmpDue));
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtgrossamttotal').value = CurDue + CurCmpDue;
            regFee = 0;
            Concess = 0;
            IndividualSumAmt = 0;
        }
        else {
            /*Quick Start*/
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatgross').value = parseFloat(GAmount);
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtparygross').value = parseFloat(CmpcGross);
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtgrosstotal').value = parseFloat(GAmount) + parseFloat(CmpcGross);
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatdue').value = parseFloat(GAmount);
            document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnDueAmt').value = parseFloat(GAmount);
            document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnNetAmt').value = parseFloat(GAmount);
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtcmpDue').value = parseFloat(CmpcNAmt);
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtTotalDue').value = parseFloat(GAmount) + parseFloat(CmpcNAmt);
            document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnPayAmt').value = parseFloat(GAmount) + parseFloat(CmpcNAmt);
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtTotalDue').value = parseFloat(GAmount - IndividualSumAmt) + parseFloat(CmpcNAmt);
            /*Quick End */
            /* Advanced Start */
            var CurentNetyamount = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatgrossamt').value;
            CurentNetyamount = CurentNetyamount == '' ? 0 : CurentNetyamount;
            CurentNetyamount = CurentNetyamount == undefined ? 0 : CurentNetyamount;
            var concPer = setProperDecimalsCorp(parseFloat(CurentNetyamount) * 100 / parseFloat(GAmount));
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatgross').value = parseFloat(GAmount);
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtparygross').value = parseFloat(CmpcGross);
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtgrosstotal').value = parseFloat(GAmount) + parseFloat(CmpcGross);
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatNet').value = parseFloat(GAmount - IndividualSumAmt);
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtcmpNet').value = parseFloat(CmpcGross);
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtTotalNet').value = parseFloat(GAmount - IndividualSumAmt) + parseFloat(CmpcGross);
            if (document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnisallowgst').value.toUpperCase() == "YES") {
                document.getElementById('' + ctrlcom + '_ReceiptControl2_txtCurrAmt').value = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatdue').value;
                document.getElementById('' + ctrlcom + '_ReceiptControl2_txtreqamtkyd').value = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatdue').value;
            }
            else {
                document.getElementById('' + ctrlcom + '_ReceiptControl2_txtCurrAmt').value = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatNet').value;
                document.getElementById('' + ctrlcom + '_ReceiptControl2_txtreqamtkyd').value = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatNet').value;
            }
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatdue').value = parseFloat(GAmount - IndividualSumAmt);
            document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnDueAmt').value = parseFloat(GAmount - IndividualSumAmt);
            document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnNetAmt').value = parseFloat(GAmount - IndividualSumAmt);
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtcmpDue').value = parseFloat(CmpcNAmt);
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtTotalDue').value = parseFloat(GAmount - IndividualSumAmt) + parseFloat(CmpcNAmt);
            document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnNetAmt').value = parseFloat(GAmount - IndividualSumAmt) + parseFloat(CmpcNAmt);

            var CurDue = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatgrossamt').value;
            var CurCmpDue = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpartygrossamt').value;
            CurDue = typeof CurDue == 'string' ? (typeof CurDue == 'undefined' || CurDue.trim() == '' ? 0 : parseFloat(CurDue)) : (typeof CurDue == 'object' ? 0 : parseFloat(CurDue));
            CurCmpDue = typeof CurCmpDue == 'string' ? (typeof CurCmpDue == 'undefined' || CurCmpDue.trim() == '' ? 0 : parseFloat(CurCmpDue)) : (typeof CurCmpDue == 'object' ? 0 : parseFloat(CurCmpDue));
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtgrossamttotal').value = CurDue + CurCmpDue;
        }
        /* Advanced End */
    }


</script>
<script type="text/javascript">
    var mode = getParameterByName('MODE');

    function CalculateOPRegConc(val, obj) {
        var Srv_grid = document.getElementById('' + ctrlcom + '_UCServices_gvServices');
        var Srv_index = 0;
        Srv_index = Srv_grid.rows.length;
        var FlagGridExist = false;
        $("table[id*=gvServices] tr:has(td)").each(function (e) {
            if ($(this).closest('tr').find("input[type=hidden][id*=hdnServiceID]").val() > '0') {
                FlagGridExist = true;
            }
        });
        //FlagGridExist = false; --- commented by Swetha Reddy, if u want to uncomment let me know 
        if (FlagGridExist == false && val == 'Perecent') {
            CalculateregDiscount();
        }
        else if (FlagGridExist == false && val != 'Perecent') {
            CalculateregDiscountAmount();
        }
        else {
            CalculateAmountConc(obj, val);
        }
    }
    function CalculateregDiscountAmount() {
        var CurAmt = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatgrossamt').value;
        var TotalGrossAmt = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtgrosstotal').value;
        CurAmt = typeof CurAmt == "string" ? (CurAmt.trim() == "" ? "0" : CurAmt) : (typeof CurAmt == "number" ? CurAmt : "0");
        TotalGrossAmt = typeof TotalGrossAmt == "string" ? (TotalGrossAmt.trim() == "" ? "0" : TotalGrossAmt) : (typeof TotalGrossAmt == "number" ? TotalGrossAmt : "0");
        if (CurAmt == 0) {
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatgrossamt').value = 0;
            document.getElementById('' + ctrlcom + '_ReceiptControl2_ucdueauth_txtSearchControl').className = 'grey';
        }
        else {
            document.getElementById('' + ctrlcom + '_ReceiptControl2_ucdueauth_txtSearchControl').className = 'red';
        }
        if (parseFloat(CurAmt) > parseFloat(TotalGrossAmt)) {
            $(".toast").toastText("Info", "System Should Not Allow More Than Gross Amount.", 5, 2);
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatdis').value = 100;
            TotConPer = 100;
            CurAmt = TotalGrossAmt;
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatgrossamt').value = TotalGrossAmt;

        }
        var TotConPer = 0;
        if (parseFloat(CurAmt) > 0 && parseFloat(TotalGrossAmt) > 0) {
            TotConPer = ((parseFloat(CurAmt) * 100) / parseFloat(TotalGrossAmt));
        }

        TotConPer = TotConPer;
        TotConPer = setProperDecimalsCorp(TotConPer);
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatdis').value = setProperDecimalsCorp(TotConPer);
        var IndConcAmt = TotalGrossAmt - CurAmt;
        var NetAmt = IndConcAmt;
        if (parseFloat(NetAmt) < 0) { NetAmt = 0; }
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatNet').value = NetAmt;
        var CmpNetAmt = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtcmpNet').value;
        CmpNetAmt = typeof CmpNetAmt == 'string' ? (typeof CmpNetAmt == 'undefined' || CmpNetAmt.trim() == '' ? 0 : parseFloat(CmpNetAmt)) : (typeof CmpNetAmt == 'object' ? 0 : parseFloat(CmpNetAmt));
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtTotalNet').value = Math.round(parseFloat(NetAmt) + parseFloat(CmpNetAmt));
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtCurrAmt').value = Math.round(document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatNet').value);
        /*newly added by naresh for any changes come to me*/

        var totalamount = ctl00_ContentPlaceHolder1_ReceiptControl2_txtpatNet.value;
        var exchangerate = ctl00_ContentPlaceHolder1_ReceiptControl2_txtExchangeRate.value;
        var amount = setProperDecimalsCorp(parseFloat(totalamount) / parseFloat(exchangerate));
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtreqamtkyd').value = amount;
        //        if (document.getElementById('' + ctrlcom + '_UCServices_hdnisallowgst').value.toUpperCase() == "YES") {
        //            var sGrid = document.getElementById('' + ctrlcom + '_UCServices_gvServices');
        //            $("table[id*=gvServices] tr:has(td)").each(function (e) {
        //                var taxamt = 0, ptaxamt = 0, ctaxamt = 0;
        //                var tax_pct = $(this).closest('tr').find("[id*=hdntaxpct]").val();
        //                var tax_amt = $(this).closest('tr').find("[id*=hdntaxamount]").val();
        //                var exec_gst_amt = $(this).closest('tr').find("[id*=hdnrateexcgst]").val();
        //                var taxamount = document.getElementById('' + ctrlcom + '_ReceiptControl2_txttaxamt').value;
        //                var srvdisamount = $(this).closest('tr').find("input[type=text][id*=txtDiscAmt]").val();
        //                var cmp_amt = $(this).closest('tr').find("input[type=text][id*=txtCNetAmt]").val();
        //                if (cmp_amt == undefined || cmp_amt == null || cmp_amt == '') { cmp_amt = "0"; }
        //                var seramount = $(this).closest('tr').find('input[type=text][id*=txtPamt]').val();
        //                var mFcnt = $(this).closest('tr').find('input[type=text][id*=txtmgAmt]').val();
        //                var sFcnt = $(this).closest('tr').find('input[type=text][id*=txtstAmt]').val();
        //                var patDiscamt = $(this).closest('tr').find('input[type=text][id*=txtDiscAmt]').val();
        //                if (sFcnt == undefined || sFcnt == null || sFcnt == '') { sFcnt = "0"; }
        //                if (mFcnt == undefined || mFcnt == null || mFcnt == '') { mFcnt = "0"; }
        //                if (patDiscamt == undefined || patDiscamt == null || patDiscamt == '') { patDiscamt = "0"; }

        //                amts = [];
        //                var values = gstCalculation(tax_pct, tax_amt, exec_gst_amt, sFcnt, patDiscamt, mFcnt, seramount, cmp_amt, e, amts);

        //                //            $(this).closest('tr').find("input[type=text][id*=txtPamt]").val((amts[0]));
        //                //            $(this).closest('tr').find('[id*=txtRate]').val((amts[0]));
        //                //            $(this).closest('tr').find('[id*=txtAmount]').val(Math.round(amts[0]));
        //                taxamt = (parseFloat(taxamt) + Math.round(parseFloat(amts[2])));
        //                ptaxamt = (parseFloat(ptaxamt) + parseFloat(amts[3]));
        //                ctaxamt = (parseFloat(ctaxamt) + parseFloat(amts[4]));
        //                //            taxamount = taxamount - taxamt1;
        //                $('#' + ctrlcom + '_ReceiptControl2_txttaxamt').val(Math.round(taxamt));
        //                $('#' + ctrlcom + '_ReceiptControl2_hbnpattax').val(Math.round(ptaxamt));
        //                $('#' + ctrlcom + '_ReceiptControl2_hbncmptax').val(Math.round(ctaxamt));

        //            });
        //        var taxamount = document.getElementById('' + ctrlcom + '_ReceiptControl2_txttaxamt').value;
        //        if (taxamount == undefined || taxamount == null || taxamount == '') { taxamount = "0"; }
        //        //document.getElementById('' + ctrlcom + '_ReceiptControl2_txtreqamtkyd').value = Math.round(document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatNet').value);

        //        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtTotalDue').value = Math.round(parseFloat(NetAmt) + parseFloat(CmpNetAmt) + parseFloat(taxamount));
        //        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatdue').value = Math.round(parseFloat(NetAmt)+parseFloat(taxamount));
        //        document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnDueAmt').value = Math.round(parseFloat(NetAmt)+parseFloat(taxamount));
        //        document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnNetAmt').value = Math.round(parseFloat(NetAmt) + parseFloat(taxamount));
        //        }
        //        else{
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtTotalDue').value = Math.round(parseFloat(NetAmt) + parseFloat(CmpNetAmt));
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatdue').value = Math.round(parseFloat(NetAmt));
        document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnDueAmt').value = Math.round(parseFloat(NetAmt));
        document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnNetAmt').value = Math.round(parseFloat(NetAmt));
        //        }
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtgrossamttotal').value = Math.round(document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatgrossamt').value);
        var CurDue = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatgrossamt').value;
        var CurCmpDue = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpartygrossamt').value;
        CurDue = typeof CurDue == 'string' ? (typeof CurDue == 'undefined' || CurDue.trim() == '' ? 0 : parseFloat(CurDue)) : (typeof CurDue == 'object' ? 0 : parseFloat(CurDue));
        CurCmpDue = typeof CurCmpDue == 'string' ? (typeof CurCmpDue == 'undefined' || CurCmpDue.trim() == '' ? 0 : parseFloat(CurCmpDue)) : (typeof CurCmpDue == 'object' ? 0 : parseFloat(CurCmpDue));
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtgrossamttotal').value = Math.round(setProperDecimalsCorp(CurDue)) + parseFloat(setProperDecimalsCorp(CurCmpDue));
        if (document.getElementById('' + ctrlcom + '_ReceiptControl2_chkismultiple').checked == false) {
            document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnRegConcAmt').value = Math.round(document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatgrossamt').value);
        }
    }

    function CalculateregDiscount() {
        var DisPer = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatdis').value;
        if (DisPer == undefined || DisPer == '' || DisPer == null || DisPer.trim() == '.' || DisPer == "NaN") { DisPer = 0; }
        var TotalGrossAmt = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatgross').value;
        var TotConCamt = Math.round(((parseFloat(TotalGrossAmt) * DisPer) / 100));
        TotConCamt = TotConCamt;

        if (DisPer == 0) {
            if (document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatdis').value.trim() == '.')
            { }
            else {
                document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatdis').value = 0;
            }
            document.getElementById('' + ctrlcom + '_ReceiptControl2_ucdueauth_txtSearchControl').className = 'grey';
        }
        else {
            document.getElementById('' + ctrlcom + '_ReceiptControl2_ucdueauth_txtSearchControl').className = 'red';
        }
        if (parseFloat(DisPer) > 100) {
            $(".toast").toastText("Info", "System Should Not Allow More Than 100%.", 5, 2);
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatdis').value = 100;
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatdis').value = setProperDecimalsCorp(TotalGrossAmt);

        }
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatgrossamt').value = Math.round(TotConCamt);
        var IndConcAmt = TotalGrossAmt - TotConCamt;
        var CmpConcAmt = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpartygrossamt').value;
        CmpConcAmt = CmpConcAmt == '' ? 0 : CmpConcAmt;
        var TotalConcession = parseFloat(CmpConcAmt) + parseFloat(IndConcAmt);
        var NetAmt = parseFloat(TotalGrossAmt) - parseFloat(TotConCamt);
        NetAmt = setProperDecimalsCorp(NetAmt); /* Math.pow(10, 4)) / Math.pow(10, 4);*/

        var ReceiptAmt = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtTotalReciptAmt').value;
        ReceiptAmt = typeof ReceiptAmt == 'string' ? (typeof ReceiptAmt == 'undefined' || ReceiptAmt.trim() == '' ? 0 : parseFloat(ReceiptAmt)) : (typeof ReceiptAmt == 'object' ? 0 : parseFloat(ReceiptAmt));
        var CmpNetAmt = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtcmpNet').value;
        CmpNetAmt = typeof CmpNetAmt == 'string' ? (typeof CmpNetAmt == 'undefined' || CmpNetAmt.trim() == '' ? 0 : parseFloat(CmpNetAmt)) : (typeof CmpNetAmt == 'object' ? 0 : parseFloat(CmpNetAmt));

        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatNet').value = Math.round(NetAmt);
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtTotalNet').value = Math.round(parseFloat(NetAmt) + parseFloat(CmpNetAmt));
        if (document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnisallowgst').value.toUpperCase() == "YES") {
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtCurrAmt').value = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatdue').value;
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtreqamtkyd').value = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatdue').value;
        }
        else {
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtCurrAmt').value = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatNet').value;
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtreqamtkyd').value = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatNet').value;
        }
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtTotalDue').value = Math.round(parseFloat(NetAmt) + parseFloat(CmpNetAmt));
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatdue').value = Math.round(NetAmt);
        document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnDueAmt').value = Math.round(NetAmt);
        document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnNetAmt').value = Math.round(NetAmt);

        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtgrossamttotal').value = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatgrossamt').value;
        var CurDue = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatgrossamt').value;
        var CurCmpDue = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpartygrossamt').value;
        CurDue = typeof CurDue == 'string' ? (typeof CurDue == 'undefined' || CurDue.trim() == '' ? 0 : parseFloat(CurDue)) : (typeof CurDue == 'object' ? 0 : parseFloat(CurDue));
        CurCmpDue = typeof CurCmpDue == 'string' ? (typeof CurCmpDue == 'undefined' || CurCmpDue.trim() == '' ? 0 : parseFloat(CurCmpDue)) : (typeof CurCmpDue == 'object' ? 0 : parseFloat(CurCmpDue));
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtgrossamttotal').value = Math.round(parseFloat(CurDue) + parseFloat(CurCmpDue));
        if (document.getElementById('' + ctrlcom + '_ReceiptControl2_chkismultiple').checked == false) {
            document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnRegConcAmt').value = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatgrossamt').value;
        }
    }   
</script>
<script type="text/javascript">
    function NewCalculateTendorAmt(obj, evt) {
        var tenderamt = $('#' + ctrlcom + '_ReceiptControl2_txtTenderedAmt').val();
        tdramt = parseFloat(tenderamt);
        if (tenderamt == "." || tdramt == 0) {
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtTenderedAmt').value = '';
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtTenderedAmt').focus();
            return false;
        }
        var receiptamt = $('#' + ctrlcom + '_ReceiptControl2_txtamt').val();
        reptamt = parseFloat(receiptamt);
        if (receiptamt == ".") {
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtamt').value = '';
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtamt').focus();
            return false;
        }

        var paymentmode = $('#' + ctrlcom + '_ReceiptControl2_ddlPaymentType').find('option:selected').text();
        if (paymentmode == 'PAYMASTER' || paymentmode == "NATIONAL COMMERCIAL BANK(NCB)" || paymentmode == "SAGICOR BANK" || paymentmode == "SCOTIA BANK" || paymentmode == "JDF" || paymentmode == "NHF") { obj = 'Cash' }
        var form_name = $('#' + ctrlcom + '_ReceiptControl2_hdnDocName').val();
        var ErAdvAllow = 'N';
        var WebCfngAllowCash = $('[id*=hdnWebCfngAllowCash]').val();
        if (WebCfngAllowCash == null || WebCfngAllowCash == undefined || WebCfngAllowCash == '' || WebCfngAllowCash == 'undefined') WebCfngAllowCash = 'N';
        if (WebCfngAllowCash == 'Y' || WebCfngAllowCash == 'y') {
            ErAdvAllow = $('[id*=hdnAllowCashTrnd]').val();
            if (ErAdvAllow == null || ErAdvAllow == undefined || ErAdvAllow == '' || ErAdvAllow == 'undefined') ErAdvAllow = 'N';
        }
        if (form_name == 'ASSESOUTSTDNGDUE') {
            var flagexists = false;
            $("table[id$=tbl_Prevoius_Settled_Bills_sch] tr [type=checkbox]:checked").each(function (e) {
                flagexists = true;
            });
            if (flagexists == false) {
                $(".toast").toastText("Warning", "Please Select Atleast One Assessment Schedule", 5, 3);
                ctl00_ContentPlaceHolder1_ReceiptControl2_txtTenderedAmt.value = 0;
                return false;
            }

        }
        var present_payment_mode = $("table[id*=gvReceiptDetails] tr:has(td)").filter(':eq(' + 0 + ')').find('[id*=lblrecmode]').text()
        //        if (ctl00_ContentPlaceHolder1_ReceiptControl2_imgbtnupdate.style.display != "block") {
        //            if (paymentmode == "Advance Adjustment" && present_payment_mode != "") {
        //                if ($("table[id*=gvReceiptDetails] tr:has(td)").length > 0) {
        //                    $(".stoast").toastText("Info", "Adjustment and other payment combinations are not allowed", 5, 3);
        //                    evt.value = 0;
        //                    return false;
        //                }
        //            }
        //            if (present_payment_mode == "Advance Adjustment") {
        //                $(".stoast").toastText("Info", "Adjustment and other payment combinations are not allowed", 5, 3);
        //                evt.value = 0;
        //                return false;
        //            }
        //        }
        if (ctl00_ContentPlaceHolder1_ReceiptControl2_imgbtnupdate.style.display != "block") {
            if (paymentmode == "EXCESS TO ADVANCE" && present_payment_mode != "") {
                if ($("table[id*=gvReceiptDetails] tr:has(td)").length > 0) {
                    $(".stoast").toastText("Info", "Excess to Advance and other payment combinations are not allowed", 5, 3);
                    evt.value = 0;
                    return false;
                }
            }
            if (present_payment_mode == "EXCESS TO ADVANCE") {
                $(".stoast").toastText("Info", "Excess to Advance and other payment combinations are not allowed", 5, 3);
                evt.value = 0;
                return false;
            }
        }
        if (form_name == 'OUTSTDNGDUE' || form_name == 'Refund') {
            var count = 0;
            var normal = 'Y';
            if (form_name == 'Refund') {
                if (document.getElementById('' + ctrlcom + '_chkAdvRefund').checked == true) {
                    normal = 'N';
                }
            }
            if (normal == 'Y') { /* Outstanding Due And Normal Refund */
                $('table[id$=tbl_tbl_OpBillDetails] tr:has(td)').each(function (e) {

                    if ($(this).find('[id*=checkboxid]').is(':checked'))
                    { count++; }
                });
            }
            //            else { /* Advance Refund */
            //                $('table[id$=DivMainAdvance] tr:has(td)').each(function (e) {

            //                    if ($(this).find('[id*=checkboxid]').is(':checked'))
            //                    { count++; }
            //                });
            //            }
            //            if (count == 0) {
            //                $('#<%=txtTenderedAmt.ClientID %>').val('');
            //                $('#<%=txtTenderedAmt.ClientID %>').focus();
            //                $(".toast").toastText("Warning", "Please Select Atleast One Bill Before Payment", 5, 3);
            //                return false;
            //            }
        }
        var countcompanyrefund = 0;
        if (form_name == 'companyRefund') {
            $('table[id$=tblclaimdetails] tr:has(td)').each(function (e) {
                if ($(this).find('[id*=chkbody]').is(':checked'))
                { countcompanyrefund++; }
            });
        }
        if (form_name == 'companyRefund') {
            if (countcompanyrefund == 0) {
                $('#<%=txtTenderedAmt.ClientID %>').val('');
                $('#<%=txtTenderedAmt.ClientID %>').focus();
                $(".toast").toastText("Warning", "Please Select Atleast One Bill Before Payment", 5, 3);
                return false;
            }
        }
        TestCondition('', evt);
        var selectedval = document.getElementById('<%= ddlPaymentType.ClientID %>').value;
        var selectedindex = document.getElementById('<%= ddlPaymentType.ClientID %>').selectedIndex;  //selectedindex - 1;
        var roundtype = document.getElementById('<%=hdnroundtype.ClientID %>').value;
        var rounddec = document.getElementById('<%=hdnroundoffval.ClientID %>').value;
        var tendoramt = 0;
        if (obj == "Cash" || obj == "Advance Adjustment" || obj == "Funds") {
            tendoramt = document.getElementById('<%= txtTenderedAmt.ClientID %>').value;
            document.getElementById('<%= txtamt.ClientID %>').value = document.getElementById('<%= txtTenderedAmt.ClientID %>').value;
        }
        else if (obj == '' && ErAdvAllow == 'Y' && selectedval == 1) {
            tendoramt = document.getElementById('<%= txtamt.ClientID %>').value;
            var __tendoramt = document.getElementById('<%= txtamt.ClientID %>').value;
            var _tendoramt = document.getElementById('<%= txtTenderedAmt.ClientID %>').value;

            if (__tendoramt == '' || __tendoramt == null || __tendoramt == undefined || isNaN(__tendoramt)) { __tendoramt = 0; }
            if (_tendoramt == '' || _tendoramt == null || _tendoramt == undefined || isNaN(_tendoramt)) { _tendoramt = 0; }
            if (parseFloat(_tendoramt) == 0 && parseFloat(__tendoramt) > 0) {
                $(".toast").toastText("Info", "Please first enter amount in Tendered Amount", 5, 2);
                document.getElementById('<%= txtamt.ClientID %>').value = '';
                document.getElementById('<%= txtTenderedAmt.ClientID %>').focus()
                return false;
            }
            else if (parseFloat(__tendoramt) > parseFloat(_tendoramt)) {
                $(".toast").toastText("Info", "Amount should not be greater than the Tendered Amount", 5, 2);
                document.getElementById('<%= txtamt.ClientID %>').value = _tendoramt;
                return false;
            }

            else if (parseFloat(__tendoramt) == 0) {
                document.getElementById('<%= txtamt.ClientID %>').value = document.getElementById('<%= txtTenderedAmt.ClientID %>').value;
                tendoramt = document.getElementById('<%= txtamt.ClientID %>').value;
            }
        }
        else {
            tendoramt = document.getElementById('<%= txtamt.ClientID %>').value;
        }
        var NetAmt = document.getElementById('<%= hdnNetAmt.ClientID %>').value;
        var ReceiptAmt = document.getElementById('<%= txtreceiptAmount.ClientID %>').value;
        if (form_name == 'OUTSTDNGDUE' || form_name == 'Refund') {
            var editamount = 0;
        }
        else {
            var editamount = document.getElementById('<%= hdneditamount.ClientID %>').value;
        }
        var adjAdvanceAmt = 0;
        if (selectedindex == '11') {
            adjAdvanceAmt = document.getElementById('<%= txtadjustmentamt.ClientID %>').value;
        }
        else {
            adjAdvanceAmt = 0;
        }
        adjAdvanceAmt = typeof adjAdvanceAmt == 'string' ? (typeof adjAdvanceAmt == 'undefined' || adjAdvanceAmt.trim() == '' ? 0 : parseFloat(adjAdvanceAmt)) : (typeof adjAdvanceAmt == 'object' ? 0 : parseFloat(adjAdvanceAmt));
        if (NetAmt == '' || NetAmt == undefined || isNaN(NetAmt)) {
            NetAmt = 0;
        }
        if (ReceiptAmt == '' || ReceiptAmt == undefined || isNaN(ReceiptAmt)) {
            ReceiptAmt = 0;
        }
        if (editamount == '' || editamount == undefined || isNaN(editamount)) {
            editamount = 0;
        }
        if (tendoramt == '' || tendoramt == undefined || isNaN(tendoramt)) {
            tendoramt = 0;
        }
        var DueAmt = 0;
        if (document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnDocName').value == 'IPFINAL') {
            var advamt = document.getElementById('' + ctrlcom + '_txtTotAdvance').value;
            var discamt = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatgrossamt').value;
            DueAmt = (parseFloat(NetAmt) - parseFloat(discamt) - parseFloat(advamt) - parseFloat(ReceiptAmt)) + parseFloat(editamount);
        }
        else if (document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnDocName').value == 'PreRefund') {
            DueAmt = document.getElementById('' + ctrlcom + '_txtTotPaid').value;
        }
        else if (document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnDocName').value == 'companyRefund') {
            DueAmt = document.getElementById('' + ctrlcom + '_txtRefundableAmt').value;
        }
        else if (document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnDocName').value == 'OUTSTDNGDUE') {


            if (document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnupdatestatus').value == 'Y') {
                DueAmt = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtreqamtkyd').value;
            }
            else {
                DueAmt = document.getElementById('' + ctrlcom + '_txtDueAmount').value;
            }

            if (DueAmt == '' || DueAmt == undefined || DueAmt == null || isNaN(DueAmt)) { DueAmt == "0"; }
        }
        else if (document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnDocName').value == 'PREADVANCE' && preadvflag == 'SD') {
            DueAmt = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtreqamtkyd').value;
        }
        else if (document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnDocName').value == 'ASSESOUTSTDNGDUE') {
            var assesmentamount = 0;
            $("table[id$=tbl_Prevoius_Settled_Bills_sch] tr [type=checkbox]:checked").each(function (e) {
                var inneramount = $(this).closest('tr').find("[id*=lbl3]").text();
                if (inneramount == undefined || inneramount == "") {
                    inneramount = 0;
                }
                assesmentamount += parseFloat(inneramount);
            });
            DueAmt = assesmentamount;
            if (DueAmt == '' || DueAmt == undefined || DueAmt == null || isNaN(DueAmt)) { DueAmt == "0"; }
        }
        else {
            DueAmt = parseFloat(NetAmt) - (parseFloat(ReceiptAmt));
        }
        if (DueAmt == '' || DueAmt == undefined || DueAmt == null || isNaN(DueAmt) || DueAmt < 0) { DueAmt = "0"; }
        var exchangerate = document.getElementById('<%= txtExchangeRate.ClientID %>').value;
        var changedrate = 0;
        var stpcurr = document.getElementById('<%= txtCurrency.ClientID %>').value;
        var currindex = document.getElementById('<%= ddlCurrency.ClientID %>').selectedIndex;
        var customercurr = document.getElementById('<%= ddlCurrency.ClientID %>')[currindex].text;
        var reqamt = DueAmt;
        /*if (stpcurr == customercurr) {
        if (parseFloat(tendoramt) <= parseFloat(DueAmt)) {
        changedrate = parseFloat(tendoramt) * parseFloat(exchangerate);
        changedrate = RoundFloorCeil(roundtype, changedrate, rounddec);

        document.getElementById('<%=txtCurrAmt.ClientID %>').value = changedrate;
        document.getElementById('<%= txtamt.ClientID %>').value = parseFloat(tendoramt);
        if (obj == "Cash") {
        document.getElementById('<%= txtTenderedAmt.ClientID %>').value = tendoramt;

        }
        document.getElementById('<%= txtChangeKyd.ClientID %>').value = 0;
        }
        else {
        var change = parseFloat(tendoramt) - parseFloat(DueAmt);
        var amount = parseFloat(DueAmt) / parseFloat(exchangerate);
        if (amount == '' || amount == undefined || isNaN(amount)) {
        amount = 0;
        }
        change = RoundFloorCeil('', change, rounddec);
        reqamt = RoundFloorCeil('', reqamt, rounddec);
        changedrate = parseFloat(tendoramt) * parseFloat(exchangerate);
        changedrate = RoundFloorCeil(roundtype, changedrate, rounddec);
        document.getElementById('<%=txtCurrAmt.ClientID %>').value = changedrate;
        document.getElementById('<%= txtamt.ClientID %>').value = parseFloat(tendoramt);
        if (document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnDocName').value == 'IpAdvance' || document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnDocName').value == 'PREADVANCE') {
        document.getElementById('<%=txtChangeKyd.ClientID %>').value = 0;
        }
        if (document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnDocName').value == 'Refund') {

        document.getElementById('<%=txtChangeKyd.ClientID %>').value = 0;
        }
        else {
        document.getElementById('<%=txtChangeKyd.ClientID %>').value = change;
        /*document.getElementById('<%= txtamt.ClientID %>').value = reqamt;
        }
        if (document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnDocName').value == 'OUTSTDNGDUE') {
        var changeVal = document.getElementById('<%=txtChangeKyd.ClientID %>').value;
        document.getElementById('<%= txtamt.ClientID %>').value = parseFloat(tendoramt) - parseFloat(changeVal);
        document.getElementById('<%=txtCurrAmt.ClientID %>').value = document.getElementById('<%= txtamt.ClientID %>').value;
        }
        if (document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnDocName').value == 'ASSESOUTSTDNGDUE') {
        var changeVal = document.getElementById('<%=txtChangeKyd.ClientID %>').value;
        document.getElementById('<%= txtamt.ClientID %>').value = parseFloat(tendoramt) - parseFloat(changeVal);
        document.getElementById('<%=txtCurrAmt.ClientID %>').value = document.getElementById('<%= txtamt.ClientID %>').value;
        }
        }
        }*/
        // else {
        var validAmt = (parseFloat(tendoramt) * parseFloat(exchangerate));
        validAmt = (validAmt);
        var dueAmt = '0';
        if ($('#' + ctrlcom + '_ReceiptControl2_imgbtnupdate').css("display") == 'block') {
            dueAmt = document.getElementById('<%=hdnDueAmt.ClientID %>').value;
        } else {
            dueAmt = document.getElementById('<%=hdnDueAmt.ClientID %>').value;
        }
        if (document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnDocName').value == 'NewChangeReceipt' || (document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnDocName').value == 'PREADVANCE' && preadvflag == 'SD')) {
            dueAmt = DueAmt;
            document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnDueAmt').value = dueAmt;
        }
        var balAmt = 0;
        if (document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnDocName').value == 'OUTSTDNGDUE') {
            var totaldue = document.getElementById('' + ctrlcom + '_txtDueAmount').value;
            if (totaldue == '' || totaldue == undefined || totaldue == null || isNaN(totaldue)) { totaldue == "0"; }
            dueAmt = parseFloat(totaldue) - parseFloat(ReceiptAmt);

        }
        if (document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnDocName').value == 'ASSESOUTSTDNGDUE') {
            var assesmentamount = 0;
            $("table[id$=tbl_Prevoius_Settled_Bills_sch] tr [type=checkbox]:checked").each(function (e) {
                var inneramount = $(this).closest('tr').find("[id*=lbl3]").text();
                if (inneramount == undefined || inneramount == "") {
                    inneramount = 0;
                }
                assesmentamount += parseFloat(inneramount);
            });
            DueAmt = assesmentamount;
            if (DueAmt == '' || DueAmt == undefined || DueAmt == null || isNaN(DueAmt)) { DueAmt == "0"; }
        }
        /* added by rama on 30-10-2018 FOr ER Advance show change if payment mode is cash*/
        //            var eradv = document.getElementById('' + ctrlcom + '_hdnmodfrmname').value;
        //            if (document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnDocName').value == 'IpAdvance' && eradv == 'Y' && document.getElementById('' + ctrlcom + '_chkeradv').checked == false) {
        //                document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnDueAmt').value = document.getElementById('' + ctrlcom + '_txtAppBillAmt').value;
        //                dueAmt = document.getElementById('' + ctrlcom + '_txtAppBillAmt').value;
        //            }
        if (editamount == '' || editamount == undefined || isNaN(editamount)) {
            editamount = 0;
        }
        var _editamount = editamount;
        if (dueAmt == '' || dueAmt == undefined || isNaN(dueAmt)) dueAmt = 0;
        var select_test = document.getElementById('<%=ddlPaymentType.ClientID %>')[selectedindex].text;
        if (select_test == 'Cash' || select_test == 'PAYMASTER' || select_test == "NATIONAL COMMERCIAL BANK(NCB)" || select_test == "SAGICOR BANK" || select_test == "SCOTIA BANK" || select_test == "JDF" || select_test == "NHF") {
            if (parseFloat(validAmt) > (parseFloat(dueAmt) + parseFloat(_editamount))) {
                //               if (document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnDocName').value == 'OUTSTDNGDUE') {
                //                balAmt = setProperDecimalsCorp(parseFloat(validAmt) - (parseFloat(dueAmt)));
                //                if (balAmt >= 0) {
                //                $(".toast").toastText("Info", "Payment Amount should not be greater than the Recipt Amount", 5, 2);
                //                return false;
                //                }
                //                }
                if (document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnDocName').value == 'ASSESOUTSTDNGDUE') {
                    balAmt = setProperDecimalsCorp(parseFloat(validAmt) - (parseFloat(dueAmt)));
                    if (balAmt >= 0) {
                        $(".toast").toastText("Info", "Payment Amount should not be greater than the Receipt Amount", 5, 2);
                        return false;
                    }
                }
                else {
                    balAmt = setProperDecimalsCorp(parseFloat(validAmt) - (parseFloat(dueAmt) + parseFloat(_editamount)));
                }
                if ((document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnDocName').value == 'IpAdvance' || document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnDocName').value == 'PREADVANCE') && ErAdvAllow != 'Y') {
                    if (document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnDocName').value == 'PREADVANCE' && preadvflag == 'SD') {

                        //                        document.getElementById('<%=txtChangeKyd.ClientID %>').value = 0;
                        document.getElementById('<%=txtCurrAmt.ClientID %>').value = (parseFloat(validAmt));
                    }
                    else {
                        document.getElementById('<%=txtChangeKyd.ClientID %>').value = 0;
                        document.getElementById('<%=txtCurrAmt.ClientID %>').value = (parseFloat(validAmt));
                    }
                }
                else if (document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnDocName').value == 'PreRefund') {
                    var tenderedamt = document.getElementById('<%= txtTenderedAmt.ClientID %>').value;
                    var advanceamt = document.getElementById('' + ctrlcom + '_txtTotPaid').value;
                    if (tenderedamt == null || tenderedamt == undefined || tenderedamt == '') { tenderedamt = '0'; }
                    if (advanceamt == null || advanceamt == undefined || advanceamt == '') { advanceamt = '0'; }
                    var _balAmt = setProperDecimalsCorp(parseFloat(tenderedamt) - parseFloat(advanceamt));
                    if (parseFloat(_balAmt) < 0) { _balAmt = 0; }
                    document.getElementById('<%=txtChangeKyd.ClientID %>').value = _balAmt;
                    document.getElementById('<%=txtCurrAmt.ClientID %>').value = (parseFloat(validAmt));
                }
                else if (obj == '' && ErAdvAllow == 'Y') {
                    var __tendoramt = document.getElementById('<%= txtamt.ClientID %>').value;
                    var _tendoramt = document.getElementById('<%= txtTenderedAmt.ClientID %>').value;
                    if (__tendoramt == '' || __tendoramt == null || __tendoramt == undefined || isNaN(__tendoramt)) { __tendoramt = 0; }
                    if (_tendoramt == '' || _tendoramt == null || _tendoramt == undefined || isNaN(_tendoramt)) { _tendoramt = 0; }
                    __tendoramt = (parseFloat(__tendoramt) * parseFloat(exchangerate));
                    _tendoramt = (parseFloat(_tendoramt) * parseFloat(exchangerate));
                    var _balAmt = parseFloat(_tendoramt) - parseFloat(__tendoramt);
                    if (_balAmt == '' || _balAmt == undefined || _balAmt == null) { _balAmt = 0; }
                    if (parseFloat(_balAmt) < 0) { _balAmt = 0; }
                    document.getElementById('<%=txtChangeKyd.ClientID %>').value = _balAmt;
                    tendoramt = parseFloat(_tendoramt) - parseFloat(_balAmt);
                }
                else {
                    document.getElementById('<%=txtCurrAmt.ClientID %>').value = setProperDecimals((parseFloat(validAmt)));
                    document.getElementById('<%= txtamt.ClientID %>').value = tendoramt;
                    var curramtexc = 0;
                    var dueamtexc = 0;
                    if (parseFloat(document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnDueAmt').value) > 0) {
                        curramtexc = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtCurrAmt').value;
                        dueamtexc = document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnDueAmt').value;
                    }
                    if (tendoramt > dueAmt && document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnDocName').value == 'OUTSTDNGDUE') {
                        curramtexc = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtCurrAmt').value;
                        dueamtexc = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtreqamtkyd').value;
                    }
                    var cchangeamt = 0;
                    if (parseFloat(curramtexc) > parseFloat(dueamtexc)) {
                        cchangeamt = parseFloat(curramtexc) - parseFloat(dueamtexc);
                    } else {
                        cchangeamt = 0;
                    }
                    if (cchangeamt == undefined || cchangeamt == null || cchangeamt == "" || parseFloat(cchangeamt) < 0) { cchangeamt = 0; }
                    if (form_name == 'Refund') { document.getElementById('<%=txtChangeKyd.ClientID %>').value = 0; }

                    else { document.getElementById('<%=txtChangeKyd.ClientID %>').value = cchangeamt; }
                }
            }
            else {
                if (balAmt == undefined || balAmt == null || balAmt == "" || parseFloat(balAmt) < 0) { balAmt = 0; }

                document.getElementById('<%=txtCurrAmt.ClientID %>').value = validAmt;
                document.getElementById('<%= txtamt.ClientID %>').value = tendoramt;
                var curramtexc = 0;
                var reqamount = 0
                var dueamtexc = 0;
                if (parseFloat(document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnDueAmt').value) > 0) {
                    curramtexc = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtCurrAmt').value;
                    dueamtexc = document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnDueAmt').value;
                }
                var cchangeamt = 0;
                if (parseFloat(curramtexc) > parseFloat(dueamtexc)) {
                    cchangeamt = parseFloat(curramtexc) - parseFloat(dueamtexc);
                } else {
                    cchangeamt = 0;
                }


                if (document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnDocName').value == 'OUTSTDNGDUE') {
                    curramtexc = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtCurrAmt').value;
                    reqamount = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtreqamtkyd').value;
                    if (parseFloat(curramtexc) > parseFloat(reqamount)) {
                        cchangeamt = parseFloat(curramtexc) - parseFloat(reqamount)

                    }
                }



                if (cchangeamt == undefined || cchangeamt == null || cchangeamt == "" || parseFloat(cchangeamt) < 0) { cchangeamt = 0; }

                if (balAmt == undefined || balAmt == null || balAmt == "") { balAmt = 0; }
                if (document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnDocName').value == 'PREADVANCE') {
                    document.getElementById('<%=txtChangeKyd.ClientID %>').value = 0;
                }
                else if (obj == '' && ErAdvAllow == 'Y') {
                    var __tendoramt = document.getElementById('<%= txtamt.ClientID %>').value;
                    var _tendoramt = document.getElementById('<%= txtTenderedAmt.ClientID %>').value;

                    if (__tendoramt == '' || __tendoramt == null || __tendoramt == undefined || isNaN(__tendoramt)) { __tendoramt = 0; }
                    if (_tendoramt == '' || _tendoramt == null || _tendoramt == undefined || isNaN(_tendoramt)) { _tendoramt = 0; }
                    var __Tendoramt = (parseFloat(__tendoramt) * parseFloat(exchangerate));
                    var _Tendoramt = (parseFloat(_tendoramt) * parseFloat(exchangerate));

                    var _balAmt = parseFloat(_Tendoramt) - parseFloat(__Tendoramt);
                    if (parseFloat(_balAmt) < 0) { _balAmt = 0; }

                    document.getElementById('<%=txtChangeKyd.ClientID %>').value = _balAmt;
                    var __balAmt = parseFloat(_tendoramt) - parseFloat(__tendoramt);
                    //                        tendoramt = parseFloat(_tendoramt) - parseFloat(__balAmt);

                }
                else {
                    document.getElementById('<%=txtChangeKyd.ClientID %>').value = cchangeamt;
                }
            }
        }
        else {
            if (parseFloat(validAmt) > (parseFloat(dueAmt) + parseFloat(editamount))) {
                var balAmt = setProperDecimalsCorp(parseFloat(validAmt) - (parseFloat(dueAmt) + parseFloat(editamount)));
                if (document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnDocName').value == 'IpAdvance') {
                    document.getElementById('<%=txtChangeKyd.ClientID %>').value = 0;
                    document.getElementById('<%=txtCurrAmt.ClientID %>').value = validAmt;
                }
                else if (document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnDocName').value == 'PREADVANCE' && preadvflag != 'SD') {
                    document.getElementById('<%=txtCurrAmt.ClientID %>').value = parseFloat(tendoramt) * parseFloat(exchangerate);
                    document.getElementById('<%=txtChangeKyd.ClientID %>').value = '0';
                    return false;
                }
                else if (document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnDocName').value == 'PreRefund') {
                    document.getElementById('<%=txtChangeKyd.ClientID %>').value = '0';
                    document.getElementById('<%=txtCurrAmt.ClientID %>').value = validAmt;
                }
                //                else if ((document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnDocName').value == 'Refund' && preadvflag != 'SD') || document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnDocName').value == "companyRefund") {
                //                    document.getElementById('<%=txtChangeKyd.ClientID %>').value = '0';
                //                }
                else if (document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnDocName').value == "companyRefund") {
                    document.getElementById('<%=txtChangeKyd.ClientID %>').value = '0';
                }
                else if (document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnDocName').value == 'OUTSTDNGDUE') {
                    var receipt_Amt = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtreceiptAmount').value;
                    if (receipt_Amt == '' || receipt_Amt == null || receipt_Amt == undefined || isNaN(receipt_Amt)) { receipt_Amt = 0; }
                    if (parseFloat(validAmt) > (parseFloat(dueAmt) - parseFloat(receipt_Amt))) {
                        $(".toast").toastText("Info", "Payment Amount should not be greater than the Receipt Amount", 5, 2);
                        document.getElementById('<%=txtamt.ClientID %>').value = '';
                        document.getElementById('<%=txtCurrAmt.ClientID %>').value = '0';
                        document.getElementById('<%=txtChangeKyd.ClientID %>').value = '0';
                        document.getElementById('<%=txtTenderedAmt.ClientID %>').value = '';
                        return false;
                    }
                    //                    else {
                    //                        document.getElementById('<%=txtChangeKyd.ClientID %>').value = '0';
                    //                        document.getElementById('<%=txtTenderedAmt.ClientID %>').value = '';
                    //                    }
                }
                else {
                    document.getElementById('<%=txtCurrAmt.ClientID %>').value = validAmt;
                    document.getElementById('<%= txtamt.ClientID %>').value = tendoramt;
                    if (balAmt == undefined || balAmt == null || balAmt == "") { balAmt = 0; }
                    var balAmt = setProperDecimalsCorp(parseFloat(validAmt) - (parseFloat(dueAmt) + parseFloat(editamount)));
                    if (balAmt == undefined || balAmt == null || balAmt == "" || parseFloat(balAmt) < 0) { balAmt = 0; }
                    //document.getElementById('<%=txtChangeKyd.ClientID %>').value = balAmt;
                    var curramtexc = 0;
                    var dueamtexc = 0;

                    if (parseFloat(document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnDueAmt').value) > 0) {
                        curramtexc = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtCurrAmt').value;
                        dueamtexc = document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnDueAmt').value;
                    }


                    var cchangeamt = 0;
                    if (parseFloat(curramtexc) > parseFloat(dueamtexc)) {
                        cchangeamt = parseFloat(curramtexc) - parseFloat(dueamtexc);
                    } else {
                        cchangeamt = 0;
                    }


                    if (cchangeamt == undefined || cchangeamt == null || cchangeamt == "" || parseFloat(cchangeamt) < 0) { cchangeamt = 0; }

                    if (balAmt == undefined || balAmt == null || balAmt == "") { balAmt = 0; }
                    document.getElementById('<%=txtChangeKyd.ClientID %>').value = cchangeamt;

                }
                if (form_name != "CorporateCheckEntry" && form_name != "CorporateCheck" && form_name != "PreRefund" && form_name != "IpAdvance" && form_name != "companyRefund" && form_name != "IMRSRVENTRY") {
                    if (parseFloat(curramtexc) > parseFloat(dueamtexc)) {
                        $(".toast").toastText("Info", "Payment Amount should not be greater than the Receipt Amount", 5, 2);
                        // RemoveLastIndx($('[id*=txtTenderedAmt]')[0].id);
                        $('[id*=txtTenderedAmt]').val('');
                        document.getElementById('<%=txtamt.ClientID %>').value = '0';
                        document.getElementById('<%=txtCurrAmt.ClientID %>').value = '0';
                        document.getElementById('<%=txtamt.ClientID %>').focus();
                        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtChangeKyd').value = '0';
                        return false;
                    }
                }
            }
            else {
                //                if (form_name == 'OUTSTDNGDUE') {
                //                    var receipt_Amt = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtreceiptAmount').value;
                //                    if (parseFloat(validAmt) > (parseFloat(dueAmt) - parseFloat(receipt_Amt))) {
                //                        $(".toast").toastText("Info", "Payment Amount should not be greater than the Receipt Amount", 5, 2);
                //                        document.getElementById('<%=txtamt.ClientID %>').value = '';
                //                        document.getElementById('<%=txtCurrAmt.ClientID %>').value = '0';
                //                        return false;
                //                    }
                //                }

                document.getElementById('<%=txtCurrAmt.ClientID %>').value = parseFloat(tendoramt) * parseFloat(exchangerate);
                document.getElementById('<%=txtChangeKyd.ClientID %>').value = '0';
            }
        }
        // }

        if (adjAdvanceAmt > 0) {
            if (tendoramt > adjAdvanceAmt) {
                $(".toast").toastText("Info", "You Can Not Adjust Advance MoreThan DueAmount", 5, 2)
            }
        }
    }
    /* added on 03.10.2016 */
    function OnAuthorization(input) {
        if (input._lktext == input.AUTH_NAME) {
            $('#' + ctrlcom + '_ReceiptControl2_UCchequeAuth_txtSearchControl').val(input["_lktext"]);
            $('#' + ctrlcom + '_ReceiptControl2_UCchequeAuth__hiddenText').val(input["_lktext"]);
            $('#' + ctrlcom + '_ReceiptControl2_hdncheckAuthID').val(input.AUTH_ID);
            document.getElementById('' + ctrlcom + '_ReceiptControl2_UCchequeAuth__hiddenID').value = input.AUTH_ID;
            document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnauthcd').value = input.AUTH_CD;
            document.getElementById('' + ctrlcom + '_ReceiptControl2_UCchequeAuth_txtSearchControl').className = 'grey';
        }
        else {
            $('#' + ctrlcom + '_ReceiptControl2_UCchequeAuth_txtSearchControl').val(input["_lktext"]);
            $('#' + ctrlcom + '_ReceiptControl2_UCchequeAuth__hiddenText').val(input["_lktext"]);
            $('#' + ctrlcom + '_ReceiptControl2_hdncheckAuthID').val(input.ID);
            document.getElementById('' + ctrlcom + '_ReceiptControl2_UCchequeAuth__hiddenID').value = input.ID;
            document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnauthcd').value = input.RESULT.ListObjVal[0].AUTH_CD;
        }

    }
    /*up to here */

</script>
<script>
    // var pagemode = '';
    $(document).ready(function () {
        // pagemode = getParameterByName("MODE");
        var form_name = document.getElementById('<%=hdnDocName.ClientID %>').value;
        if (form_name == 'OP' || form_name == 'Cons') {
            $('.tooltip').tooltipster({
                trigger: 'hover',
                theme: 'tooltipster-shadow',
                animation: 'grow',
                delay: 200
            });
        }
        if (form_name != 'IpAdvance' && form_name != 'PreAdvance') {// We ARE calling this function from page level i.e, ip advance and pre advance
            checkpayment();
        }
    });
    /* Animation Effect : fade , grow, swing, slide, fall*/
    /* Theme : Light; Borderless; Punk; Noir; Shadow */
    function cnvtToUpperRemrk(id) {
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtquickremarks').value = id.value.toUpperCase();
    }
    function cnvtToUpperRemarks(id) {

        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtRemarks').value = id.value.toUpperCase();
    }
    function changetTenderaxamt(obj) {
        var form_name = $('#' + ctrlcom + '_ReceiptControl2_hdnDocName').val();
        if (form_name == 'Refund') {
            var RefundedAmount = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtTenderedAmt').value;
            var RefundableAmt = document.getElementById('' + ctrlcom + '_txtRefundableAmt').value;
            var AmtCurr = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtCurrAmt').value;
            if (RefundableAmt == '' || RefundableAmt == undefined || isNaN(RefundableAmt)) { RefundableAmt = 0; }
            if (RefundedAmount == '' || RefundedAmount == undefined || isNaN(RefundedAmount)) { RefundedAmount = 0; }

            if (RefundableAmt == 0 && preadvflag == 'SD') {
                $(".stoast").toastText("warning", "Please Select Required Transaction!.", 5, 3);
                return false;
            }
            if (parseFloat(RefundableAmt) < parseFloat(RefundedAmount) || (parseFloat(RefundableAmt) < parseFloat(AmtCurr))) {
                $(".stoast").toastText("Info", "Please enter the amount less than or equal to refundable amount !!!!!!!", 5, 3);
                $('#' + ctrlcom + '_ReceiptControl2_txtChangeKyd').val(0);
                $('#' + ctrlcom + '_ReceiptControl2_txtCurrAmt').val(0);
                $('#' + ctrlcom + '_ReceiptControl2_txtamt').val(0);
                document.getElementById('' + ctrlcom + '_ReceiptControl2_txtTenderedAmt').value = '';
                document.getElementById('' + ctrlcom + '_ReceiptControl2_txtTenderedAmt').focus();
                $(obj).val('');
                return false;
            }
        }
    }
    function RoundFloorCeil(rtype, amount, roundingval) {


        if (amount == undefined || amount == null || amount == '') { amount = 0; }
        var amount = Math.round(amount * 100) / 100;
        return amount;

    }
    var currencies = new Array();
    currencies.push('INR,rupee, paisa');
    currencies.push('USD,dollar,cent');
    currencies.push('EUR,euro, cent');
    currencies.push('AUD,dollar, cent');
    currencies.push('CAD,dollar, cent');
    currencies.push('JPY,yen,sen');
    currencies.push('CNY,yuan,fen');
    currencies.push('JMD,dollar,cent');
    currencies.push('KSh,shillings, cent');
    function convertNumberToWords(number) {

        var currency = '';
        var fractionalUnit = '';
        for (var i = 0; i < currencies.length; i++) {
            if (document.getElementById('' + ctrlcom + '_ReceiptControl2_hdncurrenydesc').value == currencies[i].split(',')[0]) {
                currency = currencies[i].split(',')[1];
                fractionalUnit = currencies[i].split(',')[2];

            }

        }

        if (number === 0) {
            return "zero " + currency;
        }

        var word = '';
        var currencyWord = '';
        var fractionalUnitWord = '';
        var i = 0;
        if (Math.floor(number) > 0) {

            if (Math.floor(number).toString().length > 1) {
                currencyWord = NumToWordsInt(Math.floor(number)) + " " + currency + "'" + "s";
            } else {
                currencyWord = NumToWordsInt(Math.floor(number)) + " " + currency;

            }

        }
        if (number - Math.floor(number) > 0) {

            fractionalUnitWord = NumToWordsIntdec(number) + " " + fractionalUnit;
        }
        if (fractionalUnitWord == '') {
            return currencyWord
        } else {
            return currencyWord + " and " + fractionalUnitWord;
        }

    }
    function dueamtdisabled() {
        var dueamtdis = $('#' + ctrlcom + '_ReceiptControl2_txtpatdue').val();
        if (dueamtdis == '0') {
            $('#' + ctrlcom + '_ReceiptControl2_Search3_txtSearchControl').disabled = true;
            $('#' + ctrlcom + '_ReceiptControl2_Search3_txtSearchControl').removeClass('red');
        }
        else {
            $('#' + ctrlcom + '_ReceiptControl2_Search3_txtSearchControl').disabled = true;
            $('#' + ctrlcom + '_ReceiptControl2_Search3_txtSearchControl').addClass('red');
        }

    }

    function NumToWordsIntdec(number) {
        var units = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
        var teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
        var tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
        var fractionalAmount = Math.round((number - Math.floor(number)) * 100);
        var n = fractionalAmount;
        var fractionalUnitWord = '';
        while (n > 0) {
            var m = n % 100;
            if (m !== 0) {
                var w = '';
                if (m < 10) {
                    w = units[m];
                } else if (m < 20) {
                    w = teens[m - 10];
                } else {
                    var t = Math.floor(m / 10);
                    var u = m % 10;
                    w = tens[t] + ' ' + units[u];
                }
                fractionalUnitWord = w + ' ' + fractionalUnitWord;
            }
            n = Math.floor(n / 100);
            //i++;
        }

        return fractionalUnitWord.trim();
    }
    function NumToWordsInt(NumIn) {

        if (NumIn == 0) return "Zero";
        var Ones = ["", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"],
      Tens = ["", "", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"],
      Scale = ["", "Thousand", "Million", "Billion", "Trillion", "Quadrillion", "Quintillion", "Sextillion", "Septillion", "Octillion", "Nonillion", "Decillion"],
      N1, N2, Sep, j, i, h, Trplt, tns = "", NumAll = "";
        NumIn += "";

        NumIn = "0".repeat(NumIn.length * 2 % 3) + NumIn;
        j = 0;
        for (i = NumIn.length / 3 - 1; i >= 0; i--) {
            Trplt = NumIn.substring(j, j + 3);
            if (Trplt != "000") {
                Sep = Trplt[2] != "0" ? "-" : " ";
                N1 = Number(Trplt[0]);
                N2 = Number(Trplt.substr(1));
                tns = N2 > 19 ? Tens[Number(Trplt[1])] + Sep + Ones[Number(Trplt[2])] : Ones[N2];
                NumAll += ((h = N1 > 0 ? Ones[N1] + " Hundred" : "") + " " + tns).trim() + " " + Scale[i] + " ";
            }
            j += 3;
        }

        return NumAll.trim();
    }
</script>
<asp:ScriptManagerProxy ID="smp" runat="server">
    <Scripts>
        <asp:ScriptReference Path="~/JSScript/FrontOfficeScripts/Changes/ReceiptControl.js" />
        <asp:ScriptReference Path="~/JSScript/Validation.js" />
        <asp:ScriptReference Path="~/JSScript/jquery.ui.core.min.js" />
        <asp:ScriptReference Path="~/JSScript/CorporateScripts/jquery.ui.datepicker.js" />
        <asp:ScriptReference Path="../Scripts/PinelabPendingTransactionssearch.js" />
    </Scripts>
</asp:ScriptManagerProxy>
<style type="text/css">
    .col-hide > tbody > tr > td:nth-child(3)
    {
        display: table-cell;
    }
    .col-hide > tbody > tr > td:nth-child(4)
    {
        display: table-cell;
    }
    .paygrid
    {
        min-width: 100%;
        width: auto;
    }
    .paygrid tbody tr th, .paygrid tbody tr td
    {
        white-space: nowrap;
    }
    .gManage
    {
        min-width: 70px;
        text-align: left;
    }
    .gManage > div
    {
        display: flex;
    }
    .ReceiptMode
    {
        text-align: left;
    }
    .Amount
    {
        text-align: right;
    }
    .Per
    {
        text-align: left;
    }
    .ExchangeRate
    {
        text-align: right;
    }
    .ConvertedAmount
    {
        text-align: right;
    }
    .Cheque-Card-DD
    {
        text-align: left;
    }
    .Cheque-Card-DD-no
    {
        text-align: left;
    }
    .AuthorizationName
    {
        text-align: left;
    }
    .CardExpiryDate
    {
        text-align: left;
    }
    .TenderedCash
    {
        width: 120px !important;
        text-align: right;
    }
    .Change
    {
        text-align: right;
    }
    .CardType
    {
        text-align: left;
    }
    .srvchrgpcnt
    {
        text-align: left;
    }
    .srvchrgamt
    {
        text-align: left;
    }
    
    .ComboBoxDropDown
    {
    }
</style>
<div class="panel-heading tabs">
    <h3 class="panel-title tab_title">
        Payment Info</h3>
    <div class="tabed-div">
        <div id="Div1" class="tabed-panel ptabc" style="float: left; margin-left: 20px;">
            <ul>
                <li id="lblquick" class="select">Quick </li>
                <li id="lbladvanced">Advanced</li>
                <li id="lblpasCard">Card</li>
            </ul>
        </div>
        <h5 class="panel-title" id="titleSrvCharges" style="float: left; padding: 5px 0;
            color: #076780; display: none; margin-left: 20px;">
            Service Charge
        </h5>
        <div id="DivSrvCharges" style="float: left; display: none; margin-left: 20px;">
            <asp:CheckBox ID="chkSrvCharge" runat="server" onclick="return OnchkSrvCharge();" />
        </div>
    </div>
    <div id="divpinelabintg" style="float: right; margin-right: 10px; margin-top: -1px;">
        <table>
            <tr>
                <td>
                    <i id="i1" onclick="return Bindapprovependingnew();" class="su-clippy tooltip" title="After Approval Pending Transactions">
                    </i>
                </td>
                <td>
                    <i id="icndelete" onclick="return BindChequeListnew();" class="su-clippy tooltip"
                        title="Terminal Info"></i>
                </td>
                <td>
                    <label id="Lblterminalip" class="ellip">
                        Terminal Name</label>
                </td>
                <td>
                    <asp:DropDownList ID="Ddlpinelab" Width="100px" onchange="machinepinelabDeviceSelection(this);"
                        runat="server">
                    </asp:DropDownList>
                </td>
                <td>
                    <div style="display: inline-flex;">
                        <input type="button" style="margin-right: 5px;" id="btnpineclick" accesskey="Q" value="Process(Alt+Q)"
                            class="button" onclick="return Pinelabdata(this);" />
                        <input type="button" style="margin-right: 5px; display: none;" accesskey="R" id="btnpineapproveclick"
                            value="Approve(Alt+R)" class="button" onclick="PinelabapprovedataApprove(this);" />
                        <input type="button" id="btnCancelpineclick" style="display: none" value="Cancel"
                            class="button" onclick="PinecancellabdataCancel(this);" />
                    </div>
                </td>
            </tr>
        </table>
    </div>
    <div class="pasico" id="divpasbutton">
        <label id="btnPasQuote" class="su-credit-cards tooltip" title="PAS Quote" onclick="return SaveCliam('Q');">
        </label>
        <label id="btnquotedtls" class="su-comment-quotes tooltip" title="Quote Details"
            onclick="return OnQuoteDtls();" disabled="disabled">
        </label>
        <label id="btnClaimsub" class="su-document-text-accept tooltip" title="Claim" onclick="return SaveCliam('C');">
        </label>
    </div>
    <div style="display: none" class="pasico" id="div1passwipeafter">
        <label id="Label3" class="su-credit-cards tooltip" title="PAS Quote">
        </label>
        <label id="Label4" class="su-comment-quotes tooltip" title="Quote Details" disabled="disabled">
        </label>
        <label id="Label5" class="su-document-text-accept tooltip" title="Claim">
        </label>
    </div>
    <div class="clr">
    </div>
</div>
<div class="panel-body" style="display: flex; padding: 0 0px 0px 0px; width: 100%">
    <div class="_quick-div" id="quick_info">
        <table border="0" cellpadding="0" cellspacing="0" class="FormsCtrl col-hide" width="100%">
            <tr id="trBillInfo">
                <th align="left">
                    <label class="ellip">
                        Bill Info</label>
                </th>
                <th align="center">
                    <label class="ellip">
                        Patient</label>
                </th>
                <th align="center">
                    <label class="ellip">
                        Party</label>
                </th>
                <th align="center">
                    <label class="ellip">
                        Total</label>
                </th>
            </tr>
            <tr id="trGross">
                <td align="left">
                    <label class="ellip">
                        Gross</label>
                </td>
                <td align="left">
                    <asp:TextBox ID="txtpatgross" Style="text-align: right" CssClass="ReadOnlyTextBox"
                        Enabled="false" runat="server" MaxLength="8" Text="0"> </asp:TextBox>
                </td>
                <td align="left">
                    <asp:TextBox ID="txtparygross" Style="text-align: right" CssClass="ReadOnlyTextBox"
                        Enabled="false" runat="server">
                    </asp:TextBox>
                </td>
                <td align="left">
                    <asp:TextBox ID="txtgrosstotal" Style="text-align: right" CssClass="ReadOnlyTextBox"
                        Enabled="false" runat="server"> </asp:TextBox>
                </td>
            </tr>
            <tr>
                <td align="left">
                    <label class="ellip">
                        Discount Type</label>
                </td>
                <td align="left" colspan="3">
                    <asp:DropDownList ID="ddlDiscountType" onchange="CheckCardDisable2(this);" runat="server">
                        <asp:ListItem Text="--Select--" Value="0"></asp:ListItem>
                        <asp:ListItem Text="Cash" Value="1"></asp:ListItem>
                    </asp:DropDownList>
                </td>
            </tr>
            <tr>
                <td align="left">
                    <label class="ellip">
                        Disc(%)</label>
                </td>
                <td align="left">
                    <asp:TextBox ID="txtpatdis" Enabled="false" onKeyup="PatCalculateConcessionTransactionPerCentage(this,'Perecent');"
                        MaxLength="5" onpaste="return false;" onclick="return ClearTextboxTest(this);"
                        onkeypress="return numeralsOnlyTest(event,this);" runat="server" CssClass="Aright"
                        autocomplete="Off">
                    </asp:TextBox>
                </td>
                <td align="left">
                    <asp:TextBox ID="txtpartydis" Enabled="false" onclick="return ClearTextboxTest(this);"
                        onkeypress="return numeralsOnlyTest(event,this);" onblur="PartyCalculateConcessionTransaction(this,'Amount');"
                        runat="server" CssClass="Aright">
                    </asp:TextBox>
                </td>
                <td>
                    <asp:CheckBox ID="chkismultiple" runat="server" Text="Multiple" onclick="return OnMultipleDiscGrid();" />
                </td>
            </tr>
            <tr>
                <td align="left">
                    <label class="ellip">
                        Disc. Amt</label>
                </td>
                <td align="left">
                    <asp:TextBox ID="txtpatgrossamt" onkeyup=" return PatCalculateConcessionTransactionPerCentage(this,'Amount');"
                        MaxLength="10" onclick="return ClearTextboxTest(this);" Enabled="false" runat="server"
                        CssClass="Aright" onkeypress="return numeralsOnlyTest(event,this);" onpaste="return false;"
                        autocomplete="Off"></asp:TextBox>
                </td>
                <td align="left">
                    <asp:TextBox ID="txtpartygrossamt" Enabled="false" runat="server" CssClass="Aright"></asp:TextBox>
                </td>
                <td align="left">
                    <asp:TextBox ID="txtgrossamttotal" Enabled="false" runat="server" CssClass="Aright"></asp:TextBox>
                </td>
            </tr>
            <tr>
                <td align="left">
                    <label class="ellip">
                        Disc. Auth. Pat</label>
                </td>
                <td align="left" colspan="3">
                    <Lookup1:Search ID="ucdueauth" runat="server" OnBlurRequired="true" CallbackFn="OnDueAuthSelection1"
                        Enabled="false" />
                </td>
            </tr>
            <tr>
                <td align="left">
                    <label class="ellip">
                        Disc. Auth. Party</label>
                </td>
                <td align="left" colspan="3">
                    <asp:TextBox ID="txtDiscAuthPartyName" runat="server" Enabled="false"></asp:TextBox>
                    <asp:HiddenField ID="hdnPartyDiscAuthId" runat="server" />
                </td>
            </tr>
            <tr>
                <td align="left">
                    <label class="ellip">
                        Net</label>
                </td>
                <td align="left">
                    <asp:TextBox ID="txtpatNet" runat="server" Style="text-align: right" CssClass="ReadOnlyTextBox"
                        Enabled="false"></asp:TextBox>
                </td>
                <td align="left">
                    <asp:TextBox ID="txtcmpNet" runat="server" Style="text-align: right" CssClass="ReadOnlyTextBox"
                        Enabled="false"></asp:TextBox>
                </td>
                <td align="left">
                    <asp:TextBox ID="txtTotalNet" runat="server" Style="text-align: right" CssClass="ReadOnlyTextBox"
                        Enabled="false"></asp:TextBox>
                </td>
            </tr>
            <tr>
                <td align="left">
                    <label class="ellip">
                        Tax</label>
                </td>
                <td align="left">
                    <asp:TextBox ID="txtpatTotTax" runat="server" Style="text-align: right" CssClass="ReadOnlyTextBox"
                        Enabled="false"></asp:TextBox>
                </td>
                <td align="left">
                    <asp:TextBox ID="txtcmpTotTax" runat="server" Style="text-align: right" CssClass="ReadOnlyTextBox"
                        Enabled="false"></asp:TextBox>
                </td>
                <td align="left">
                    <asp:TextBox ID="txttaxamt" runat="server" Style="text-align: right" Enabled="false"></asp:TextBox>
                    <asp:HiddenField ID="hdnTotalSgstAmount" runat="server" />
                    <asp:HiddenField ID="hdnTotalCgstAmount" runat="server" />
                </td>
            </tr>
            <tr>
                <td align="left">
                    <label class="ellip">
                        Receipt</label>
                </td>
                <td align="left">
                    <asp:TextBox ID="txtpatientReceiptAmt" Style="text-align: right" CssClass="ReadOnlyTextBox"
                        Enabled="false" runat="server"></asp:TextBox>
                </td>
                <td align="left">
                    <asp:TextBox ID="txtCompanyReciptAmt" Style="text-align: right" CssClass="ReadOnlyTextBox"
                        Enabled="false" runat="server"></asp:TextBox>
                </td>
                <td align="left">
                    <asp:TextBox ID="txtTotalReciptAmt" Style="text-align: right" CssClass="ReadOnlyTextBox"
                        Enabled="false" runat="server"></asp:TextBox>
                </td>
            </tr>
            <tr id="trdue">
                <td align="left">
                    <label class="ellip">
                        Due</label>
                </td>
                <td align="left">
                    <asp:TextBox ID="txtpatdue" onblur="dueamtdisabled();" Style="text-align: right"
                        CssClass="ReadOnlyTextBox" Enabled="false" runat="server"></asp:TextBox>
                </td>
                <td align="left">
                    <asp:TextBox ID="txtcmpDue" Style="text-align: right" CssClass="ReadOnlyTextBox"
                        Enabled="false" runat="server"></asp:TextBox>
                </td>
                <td align="left">
                    <asp:TextBox ID="txtTotalDue" Style="text-align: right" CssClass="ReadOnlyTextBox"
                        Enabled="false" runat="server"></asp:TextBox>
                </td>
            </tr>
            <tr id="trdueauth">
                <td align="left" id="tdDueAuthPat">
                    <label class="ellip">
                        Due Auth. Pat
                    </label>
                </td>
                <td align="left" colspan="3">
                    <Lookup1:Search ID="Search3" runat="server" OnBlurRequired="true" CallbackFn="DueAuthSelection" />
                </td>
            </tr>
            <tr>
                <td align="left">
                    <label class="ellip">
                        Due Auth. Party</label>
                </td>
                <td align="left" colspan="3">
                    <asp:TextBox ID="txtDuePartyAuthname" runat="server" Enabled="false"></asp:TextBox>
                    <asp:HiddenField ID="hdnPartyDueAuthId" runat="server" />
                </td>
            </tr>
            <tr id="ConcessionAmt" style="display: none;">
                <td align="left">
                    <label class="ellip">
                        Concession Amt</label>
                </td>
                <td align="left">
                    <asp:TextBox ID="txtconamt" runat="server" CssClass="Aright" onkeypress="CalculateConcessionAmt();"></asp:TextBox>
                </td>
            </tr>
            <tr style="display: none;">
                <td align="left">
                    <label class="ellip">
                        Conc Auth.</label>
                </td>
                <td align="left">
                    <Lookup1:Search ID="ucconauth" runat="server" CallbackFn="OnConcessionSelection" />
                </td>
            </tr>
            <tr style="display: none;">
                <td align="left">
                    <label class="ellip">
                        Net Amt</label>
                </td>
                <td align="left">
                    <asp:TextBox ID="txtnetamt" runat="server" CssClass="Aright"></asp:TextBox>
                </td>
            </tr>
            <tr style="display: none;">
                <td align="left">
                    <label class="ellip">
                        Due Amt</label>
                </td>
                <td align="left">
                    <asp:TextBox ID="txtdueamt" runat="server" CssClass="Aright"></asp:TextBox>
                </td>
            </tr>
        </table>
    </div>
    <div class="_mdisc" id="divquickleft">
        <div id="payitem1" style="display: block; padding: 0 0px 0px 0px;">
            <div class="quick_left">
                <table border="0" cellpadding="0" cellspacing="0" class="FormsCtrl" width="100%">
                    <tr>
                        <th colspan="2" align="left" style="padding: 0 5px 5px 5px;">
                            <label class="ellip">
                                Receipt Info</label>
                        </th>
                    </tr>
                    <tr>
                        <td align="left" width="3%" class="re_lbl">
                            <label class="ellip">
                                Receipt #</label>
                        </td>
                        <td>
                            <div class="has-float-label">
                                <asp:TextBox ID="txtreceiptNoQuick" disabled="disabled" title="Receipt No" class="formtextbox"
                                    runat="server"></asp:TextBox>
                                <label for="ctl00_ContentPlaceHolder1_txtMiddleName" class="pre-floating">
                                    Receipt #</label></div>
                        </td>
                    </tr>
                    <tr>
                        <td align="left" width="3%" class="re_lbl">
                            <label class="ellip">
                                Receipt Dt</label>
                        </td>
                        <td>
                            <div class="has-float-label">
                                <asp:TextBox ID="txtreceiptDtQuick" disabled="disabled" title="Receipt Dt" class="formtextbox"
                                    runat="server"></asp:TextBox>
                                <label for="ctl00_ContentPlaceHolder1_txtMiddleName" class="pre-floating">
                                    Receipt Dt</label></div>
                        </td>
                    </tr>
                    <tr>
                        <td align="left" width="3%" class="re_lbl">
                            <label class="ellip">
                                Cash Amt</label>
                        </td>
                        <td>
                            <div class="has-float-label">
                                <asp:TextBox ID="txtcashAmt" onkeyup="return CalculateAmount(this,'Cash');OnNullValue(this);"
                                    onkeypress="return  numeralsOnlyTest(event,this);" runat="server" onclick="return ClearTextbox(this);"
                                    MaxLength="10" onblur="return CalculateAmount(this,'Cash');IsEmptyReplaceWithZero(this);"
                                    AutoComplete="off" ondrop="return false;" onpaste="return false;" Style="text-align: right;"></asp:TextBox>
                                <label for="ctl00_ContentPlaceHolder1_txtMiddleName" class="pre-floating">
                                    Cash Amt</label></div>
                        </td>
                    </tr>
                </table>
            </div>
            <div class="quick_right">
                <table border="0" cellpadding="0" cellspacing="0" class="FormsCtrl" width="100%">
                    <tr>
                        <td align="left" width="3%" class="re_lbl">
                            <label class="ellip">
                                Card Type</label>
                        </td>
                        <td>
                            <div class="has-float-label">
                                <asp:DropDownList ID="ddlcrdtype" ToolTip="Select Card Type" runat="server" CssClass="ComboBoxDropDown"
                                    Width="50%" onchange="return ChangeCardTypeName();otprequired();OnNullValue(this);">
                                </asp:DropDownList>
                                <asp:DropDownList ID="ddcardType" ToolTip="Select Card Type" onchange="return OnNullValue(this);"
                                    onblur="return OnNullValue(this);" runat="server" CssClass="ComboBoxDropDown"
                                    Width="47%">
                                </asp:DropDownList>
                                <label for="ctl00_ContentPlaceHolder1_txtMiddleName" class="pre-floating">
                                    Card Type</label></div>
                        </td>
                        <td align="left" width="3%" class="re_lbl">
                            <label class="ellip">
                                Bank Name</label>
                        </td>
                        <td>
                            <div class="has-float-label">
                                <asp:DropDownList ID="ddbankName" ToolTip="Select Bank Name" onkeyup="return OnNullValue(this);"
                                    onblur="return IsEmptyReplaceWithZero(this);" runat="server" onchange="return OnNullValue(this);"
                                    CssClass="ComboBoxDropDown">
                                </asp:DropDownList>
                                <label for="ctl00_ContentPlaceHolder1_txtMiddleName" class="pre-floating">
                                    Bank Name</label></div>
                        </td>
                        <td align="left">
                            <asp:Label ID="lblchangeamttext" runat="server" CssClass="cu-type-amt" Style="font-weight: bold;
                                float: left;"></asp:Label>
                            <asp:Label ID="lblqickchangeamt" runat="server" CssClass="cu-type-amt" Style="font-weight: bold;"></asp:Label>
                        </td>
                    </tr>
                    <tr>
                        <td align="left" class="re_lbl">
                            <label class="ellip">
                                Card #</label>
                        </td>
                        <td>
                            <div class="has-float-label">
                                <asp:TextBox ID="txtcardNoCmp" runat="server" onclick="return ClearTextbox(this);"
                                    onkeypress="return numeralsOnly(event);" onblur="CheckCardNo(this);return IsEmptyReplaceWithZero(this);return OnNullValue(this);"
                                    AutoComplete="off" onpaste="return false;" MaxLength="16"></asp:TextBox>
                                <label for="ctl00_ContentPlaceHolder1_txtMiddleName" class="pre-floating">
                                    Card #</label></div>
                        </td>
                        <td align="left" class="re_lbl">
                            <label class="ellip">
                                Card Expire Dt</label>
                        </td>
                        <td>
                            <div class="has-float-label">
                                <asp:TextBox ID="txtcardExpiredt" ToolTip="Expiry Date" onkeyup="return OnNullValue(this);"
                                    runat="server" CssClass="ReadOnlyTextBox" ReadOnly="true" onchange="return Changecolour(this);"
                                    onblur="return Changecolour(this);">
                                </asp:TextBox>
                                <label for="ctl00_ContentPlaceHolder1_txtMiddleName" class="pre-floating">
                                    Card Expire Dt</label></div>
                        </td>
                        <td>
                            <div style="padding-left: 50px; position: relative; display: block" id="tdquickotp">
                                <asp:TextBox ID="txtotp" onblur="return OnNullValue(this);" runat="server"></asp:TextBox>
                                <span style="position: absolute; left: 0px; top: 2px;">OTP</span>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td align="left" class="re_lbl">
                            <label class="ellip">
                                Card Amt</label>
                        </td>
                        <td>
                            <div class="has-float-label">
                                <asp:TextBox ID="txtCardAmt" onkeyup="return CalculateAmount(this,'Card');OnNullValue(this);"
                                    runat="server" Style="text-align: right;" onclick="return ClearTextbox(this);"
                                    MaxLength="10" onkeypress="return numeralsOnlyTest(event,this);" onblur="CalculateAmount(this,'Card');IsEmptyReplaceWithZero(this);return OnNullValue(this);"
                                    AutoComplete="off" onpaste="return false;"></asp:TextBox>
                                <label for="ctl00_ContentPlaceHolder1_txtMiddleName" class="pre-floating">
                                    Card Amt</label></div>
                        </td>
                        <td align="left" class="re_lbl">
                            <label class="ellip">
                                Card Holder Name</label>
                        </td>
                        <td>
                            <div class="has-float-label">
                                <asp:TextBox ID="txtQckCardHldrName" runat="server" Text="" Enabled="false" onkeyup="return OnNullValue(this);"></asp:TextBox>
                                <label for="ctl00_ContentPlaceHolder1_txtMiddleName" class="pre-floating">
                                    Card Holder Name</label></div>
                        </td>
                        <td align="left">
                            <asp:Button ID="btnswipe" runat="server" Text="Swipe" OnClientClick="return SwipeCard();"
                                Style="display: none;" />
                            <asp:Button ID="btnsettled" runat="server" Text="Settled" OnClientClick="return SettledSwipe();"
                                Style="display: none;" />
                            <div id="tdquickotpreq" style="display: none;">
                                <asp:CheckBox ID="chkotpreq" runat="server" Text="Is OTP Required" onchange="return ChangeCardTypeName();" />
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td align="left" class="re_lbl">
                            <label class="ellip">
                                Auth.#</label>
                        </td>
                        <td>
                            <div class="has-float-label">
                                <asp:TextBox ID="txtcardAuther" runat="server" Text="" onkeyup="return OnNullValue(this);"></asp:TextBox>
                                <label for="ctl00_ContentPlaceHolder1_txtMiddleName" class="pre-floating">
                                    Auth.#</label></div>
                        </td>
                        <td align="left" class="re_lbl">
                            <label class="ellip">
                                <asp:Label ID="lblQuickRemarks" runat="server" Text="Remarks"></asp:Label></label>
                        </td>
                        <td>
                            <div class="has-float-label">
                                <div style="position: relative;">
                                    <asp:TextBox ID="txtquickremarks" ToolTip="Remarks" TextMode="MultiLine" runat="server"
                                        Enabled="true" CssClass="textA" onkeyup="return OnNullValue(this);" onblur="return cnvtToUpperRemrk(this)"
                                        Width="99.6%"></asp:TextBox>
                                    <ajaxToolkit:AutoCompleteExtender runat="server" ID="autocompleterQuickRemarks" TargetControlID="txtquickremarks"
                                        ServiceMethod="GetRemarkAllAuto" UseContextKey="true" ServicePath="~/RemarksService.asmx"
                                        CompletionSetCount="5" MinimumPrefixLength="2" CompletionInterval="5" EnableCaching="false"
                                        OnClientItemSelected="OnItemRemarksSelection" FirstRowSelected="true" CompletionListCssClass="autocomplete_completionListElement"
                                        CompletionListItemCssClass="autocomplete_listItem" CompletionListHighlightedItemCssClass="autocomplete_highlightedListItem" />
                                </div>
                                <label for="ctl00_ContentPlaceHolder1_txtMiddleName" class="pre-floating">
                                    Remarks</label></div>
                        </td>
                    </tr>
                </table>
            </div>
            <div class="quick_right" style="width: 100%">
                <table border="0" cellpadding="0" cellspacing="0" class="FormsCtrl" width="100%">
                    <tr>
                        <td align="left" width="3%">
                            <label class="ellip">
                                Total Receipt Amt in word's :</label>
                        </td>
                        <td width="47%">
                            <asp:Label ID="txttotalamtinwordsquick" runat="server" CssClass="cu-type-amt" Style="font-weight: bold;
                                float: left;"></asp:Label>
                        </td>
                        <td align="left" width="3%">
                            <label class="ellip">
                                Change Amt in word's :</label>
                        </td>
                        <td width="47%">
                            <asp:Label ID="txtchangeamtinwordsquick" runat="server" CssClass="cu-type-amt" Style="font-weight: bold;
                                float: left;"></asp:Label>
                        </td>
                    </tr>
                    <tr>
                        <td align="left" width="3%">
                            <label class="ellip">
                                Cash Amt in word's :</label>
                        </td>
                        <td>
                            <asp:Label ID="txtcashamtinwordsquick" runat="server" CssClass="cu-type-amt" Style="font-weight: bold;
                                float: left;"></asp:Label>
                        </td>
                        <td align="left" width="3%">
                            <label class="ellip">
                                Card Amt in word's :</label>
                        </td>
                        <td>
                            <asp:Label ID="txtcardamtinwordsquick" runat="server" CssClass="cu-type-amt" Style="font-weight: bold;
                                float: left;"></asp:Label>
                        </td>
                    </tr>
                </table>
            </div>
            <div class="clr">
            </div>
        </div>
        <div id="payitem2" style="display: none; padding: 0 0px 5px 0px">
            <div id="Div2" runat="server" class="multiple_dis" style="padding: 0px 0px 5px 5px;
                display: none;">
                <asp:GridView ID="gvMultipleConcession" runat="server" AllowSorting="True" AutoGenerateColumns="False"
                    BorderWidth="0px" CellPadding="0" CssClass="jtblgrid" GridLines="None" EmptyDataText="No Data Found"
                    EmptyDataRowStyle-Font-Bold="true" EmptyDataRowStyle-ForeColor="Red" Width="100%">
                    <RowStyle CssClass="gridrow" />
                    <AlternatingRowStyle CssClass="gridAlternaterow" />
                    <Columns>
                        <asp:TemplateField HeaderText="S.No" HeaderStyle-HorizontalAlign="Left" ItemStyle-HorizontalAlign="Left"
                            HeaderStyle-Width="30px" ItemStyle-Width="30px">
                            <ItemTemplate>
                                <asp:Label ID="lblSNo" runat="server" Text='<%# Container.DataItemIndex+1 %>' />
                            </ItemTemplate>
                        </asp:TemplateField>
                        <asp:TemplateField HeaderStyle-HorizontalAlign="Left" ItemStyle-HorizontalAlign="Left"
                            HeaderStyle-Width="60px" ItemStyle-Width="60px" HeaderText="Delete">
                            <ItemTemplate>
                                <asp:ImageButton ID="imgBtnDelete" CommandName="sDelete" CssClass="gimg" runat="server"
                                    Style="vertical-align: Middle;" ImageUrl="~/Assets/Grid_Icons/delete.png" OnClientClick="return RemoveMultipleDiscounts(this);"
                                    ToolTip="Remove" />
                            </ItemTemplate>
                        </asp:TemplateField>
                        <asp:TemplateField HeaderText="Type" HeaderStyle-HorizontalAlign="Left" ItemStyle-HorizontalAlign="Left"
                            HeaderStyle-Width="130px" ItemStyle-Width="130px">
                            <ItemTemplate>
                                <asp:HiddenField ID="hdncardid" runat="server" Value='<%# Eval("HEALTH_CARD_TYPE_ID") %>' />
                                <asp:HiddenField ID="hdnauthid" runat="server" Value='<%# Eval("AUTH_ID") %>' />
                                <asp:HiddenField ID="hdnRuleid" runat="server" Value='<%# Eval("CNCSN_RULE_ID") %>' />
                                <asp:HiddenField ID="hdneventid" runat="server" Value='<%# Eval("EVENT_ID") %>' />
                                <asp:DropDownList ID="ddlMultiDiscounttype" onchange="ShowHideOfGridDiscountSelection(this);DscntValidation(this);"
                                    runat="server" CssClass="ComboBoxDropDown">
                                </asp:DropDownList>
                            </ItemTemplate>
                        </asp:TemplateField>
                        <asp:TemplateField HeaderText="Card #" HeaderStyle-HorizontalAlign="Left" ItemStyle-HorizontalAlign="Left"
                            HeaderStyle-Width="200px" ItemStyle-Width="200px">
                            <ItemTemplate>
                                <div id="divcard" class="btntxt">
                                    <asp:TextBox ID="txtcardno" Text='<%#Eval("CARD_NO") %>' runat="server" onblur="return OnNullValue(this);"
                                        CssClass="SampleReg"></asp:TextBox>
                                    <%--   <ajaxToolkit:AutoCompleteExtender runat="server" ID="autoComplete2" TargetControlID="txtcardno"
                                        ServiceMethod="GetAutoComp_Authorisation" UseContextKey="true" ServicePath="~/authorization.asmx"
                                        CompletionSetCount="5" MinimumPrefixLength="2" CompletionInterval="5" EnableCaching="false"
                                        OnClientItemSelected="OnItemCardSelection" FirstRowSelected="true" CompletionListCssClass="autocomplete_completionListElement"
                                        CompletionListItemCssClass="autocomplete_listItem" CompletionListHighlightedItemCssClass="autocomplete_highlightedListItem" />--%>
                                    <div id="divBtnSrc" class="txt_btn">
                                        <input type="button" id="BtnSrvSearch" value="&nbsp;" class="tb_Btn searchbtn" onclick="return BindHealthCard(this);" />
                                    </div>
                                </div>
                            </ItemTemplate>
                        </asp:TemplateField>
                        <asp:TemplateField HeaderText="Mode" HeaderStyle-HorizontalAlign="Left" ItemStyle-HorizontalAlign="Left"
                            HeaderStyle-Width="80px" ItemStyle-Width="80px">
                            <ItemTemplate>
                                <asp:DropDownList ID="ddlModes" onchange="DisbaleEnableMultiDiscAmtControls(this);"
                                    runat="server" CssClass="ComboBoxDropDown">
                                    <asp:ListItem Value="1" Selected="True" Text="Overall"></asp:ListItem>
                                    <asp:ListItem Value="2" Text="Line"></asp:ListItem>
                                </asp:DropDownList>
                            </ItemTemplate>
                        </asp:TemplateField>
                        <asp:TemplateField HeaderText="Per%" HeaderStyle-HorizontalAlign="Left" ItemStyle-HorizontalAlign="Left"
                            HeaderStyle-Width="70px" ItemStyle-Width="70px">
                            <ItemTemplate>
                                <asp:TextBox ID="txtPersentage" onkeyup="CalculatePerBasedAmount(this,'Perecent',event);"
                                    onblur="return AssignZeroTest(this);" CssClass="Aright" runat="server" onfocus="return ClearTextbox(this);"
                                    onkeypress="return numeralsOnlyTest(event,this);" MaxLength="3"></asp:TextBox>
                            </ItemTemplate>
                        </asp:TemplateField>
                        <asp:TemplateField HeaderText="Amount" HeaderStyle-HorizontalAlign="Left" ItemStyle-HorizontalAlign="Left"
                            HeaderStyle-Width="80px" ItemStyle-Width="80px">
                            <ItemTemplate>
                                <asp:TextBox ID="txtAmount" onkeyup="CalculatePerBasedAmount(this,'Amount',event);"
                                    onblur="return AssignZeroTest(this);" MaxLength="8" runat="server" Text='<%# Eval("AMOUNT")%>'
                                    CssClass="Aright" onfocus="return ClearTextbox(this);" onkeypress="return numeralsOnlyTest(event,this);"></asp:TextBox>
                            </ItemTemplate>
                        </asp:TemplateField>
                        <asp:TemplateField HeaderText="Authorized" HeaderStyle-HorizontalAlign="Left" ItemStyle-HorizontalAlign="Left"
                            HeaderStyle-Width="200px" ItemStyle-Width="200px">
                            <ItemTemplate>
                                <div id="divAuthorized" class="btntxt">
                                    <asp:TextBox ID="txtAutherizedPersion" Text='<%# Eval("SERVICE_NAME") %>' runat="server"
                                        onblur="return OnNullValue(this);" CssClass="SampleReg"></asp:TextBox>
                                    <ajaxToolkit:AutoCompleteExtender runat="server" ID="autoComplete1" TargetControlID="txtAutherizedPersion"
                                        ServiceMethod="GetAutoComp_Authorisation" UseContextKey="true" ServicePath="~/authorization.asmx"
                                        CompletionSetCount="5" MinimumPrefixLength="2" CompletionInterval="5" EnableCaching="false"
                                        OnClientItemSelected="OnItemAuthSelection" FirstRowSelected="true" CompletionListCssClass="autocomplete_completionListElement"
                                        CompletionListItemCssClass="autocomplete_listItem" CompletionListHighlightedItemCssClass="autocomplete_highlightedListItem" />
                                    <ajaxToolkit:TextBoxWatermarkExtender ID="txtWaterMarker" runat="server" TargetControlID="txtAutherizedPersion"
                                        WatermarkText="--Enter Authorization Name Here--">
                                    </ajaxToolkit:TextBoxWatermarkExtender>
                                    <div id="divBtnSrc" class="txtbtn">
                                        <input type="button" id="BtnSrvSearch" value="&nbsp;" class="tb_Btn searchbtn" onclick="return onauthbind(this);" />
                                    </div>
                                </div>
                            </ItemTemplate>
                        </asp:TemplateField>
                        <asp:TemplateField HeaderText="Remarks" HeaderStyle-HorizontalAlign="Left" ItemStyle-HorizontalAlign="Left"
                            HeaderStyle-Width="80px" ItemStyle-Width="80px">
                            <ItemTemplate>
                                <asp:TextBox ID="txtCRemks" runat="server" Text='<%# Eval("REMARKS")%>' onblur="return OnNullValue(this);"></asp:TextBox>
                            </ItemTemplate>
                        </asp:TemplateField>
                    </Columns>
                </asp:GridView>
            </div>
            <div id="divpaymentinfo" style="border-bottom: 1px solid #cacaca;">
                <div class="adv_pay">
                    <table width="100%" border="0" cellpadding="0" cellspacing="0" class="FormsCtrl mobileforms">
                        <tr class="mrow-1">
                            <td align="left" width="3%" class="re_lbl">
                                <label class="ellip">
                                    Payment Type</label>
                            </td>
                            <td width="16%" class="rcol-1">
                                <div class="has-float-label">
                                    <asp:DropDownList ID="ddlPaymentType" ToolTip="Select Payment Type" Width="95%" runat="server"
                                        CssClass="ComboBoxDropDown" AutoPostBack="false" onchange="return checkpayment();">
                                    </asp:DropDownList>
                                    <label class="pre-floating">
                                        Payment Type</label></div>
                            </td>
                            <td align="left" width="3%" class="re_lbl">
                                <label class="ellip">
                                    Curr/Exch Rate</label>
                            </td>
                            <td width="16%" class="rcol-2">
                                <div class="has-float-label">
                                    <asp:DropDownList ID="ddlCurrency" ToolTip="Select Currency" Width="46.5%" runat="server"
                                        CssClass="ComboBoxDropDown" onkeyup="return OnNullValue(this);" onchange="return GetExchangeRate();">
                                    </asp:DropDownList>
                                    <asp:TextBox ID="txtExchangeRate" ToolTip="Exchange Rate" onkeyup="return OnNullValue(this);"
                                        runat="server" Enabled="false" CssClass="ReadOnlyTextBox" Style="text-align: right"
                                        Width="46.5%"></asp:TextBox>
                                    <label class="pre-floating">
                                        Curr/Exch Rate</label></div>
                            </td>
                            <td align="left" colspan="2" class="removecolspan rcol-3">
                                <div class="btntxt amtintxt has-float-label" style="padding-left: 130px; padding-right: 0;">
                                    <asp:TextBox ID="txtreqamtkyd" ToolTip="Required Amt In" runat="server" onkeyup="return OnNullValue(this);"
                                        Enabled="true" CssClass="ReadOnlyTextBox " Style="text-align: right"></asp:TextBox>
                                    <div class="txtbtn amtinlbl floating-label1" style="right: initial; left: 0 !important;">
                                        Required Amt in
                                        <asp:Label ID="lblcurrcd" runat="server"></asp:Label>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td align="left" width="3%" class="re_lbl">
                                <asp:Label CssClass="ellip" ID="lblamtname" runat="server" Text="Amt"></asp:Label>
                            </td>
                            <td width="16%" class=" rcol-4">
                                <div class="has-float-label">
                                    <asp:TextBox ID="txtamt" ToolTip="Amount" runat="server" Style="text-align: right;
                                        width: 95%;" MaxLength="10" Enabled="true" onkeypress="return numeralsOnlyTest(event,this);"
                                        onfocus="return ClearTextbox(this);" onpaste="return false;" CssClass="ReadOnlyTextBox"
                                        onkeyup="NewCalculateTendorAmt('',this);return OnNullValue(this);" onblur="srvchrgamount(this,'');"></asp:TextBox>
                                    <asp:TextBox ID="txtsrvcharges" runat="server" Text="0" Enabled="false" CssClass="ReadOnlyTextBox"
                                        Style="text-align: right; display: none; width: 19%;" onkeyup="srvchrgamount(this,'');"
                                        MaxLength="4" onclick="return ClearPointArray(this);" onkeypress="return numeralsOnlyTest(event,this);"></asp:TextBox>
                                    <label class="pre-floating">
                                        Amt</label></div>
                            </td>
                            <td align="left" width="3%" class="re_lbl">
                                <label class="ellip">
                                    Converted Amt</label>
                            </td>
                            <td width="16%" class=" rcol-5">
                                <div class="has-float-label">
                                    <asp:TextBox ID="txtCurrency" ToolTip="Currency" runat="server" onkeyup="return OnNullValue(this);"
                                        Enabled="false" CssClass="ReadOnlyTextBox" Width="46.5%"></asp:TextBox>
                                    <asp:TextBox ID="txtCurrAmt" ToolTip="Converted Amt" runat="server" onkeyup="return OnNullValue(this);"
                                        Enabled="false" CssClass="ReadOnlyTextBox" Style="text-align: right" Width="46.5%"></asp:TextBox>
                                    <label class="pre-floating">
                                        Converted Amt</label></div>
                            </td>
                            <td align="left" width="3%" class="re_lbl">
                                <label class="ellip">
                                    Card Type</label>
                            </td>
                            <td width="16%" class=" rcol-6">
                                <div class="has-float-label" style="padding-right: 0;">
                                    <asp:DropDownList ID="ddlCardType" ToolTip="Select Card Type" onchange="return OnNullValue(this);"
                                        onkeyup="return OnNullValue(this);" runat="server" CssClass="ComboBoxDropDown">
                                    </asp:DropDownList>
                                    <label class="pre-floating">
                                        Card Type</label></div>
                            </td>
                        </tr>
                        <tr>
                            <td align="left" class="re_lbl">
                                <label class="ellip">
                                    Swipe Bank</label>
                            </td>
                            <td width="16%" class=" rcol-1">
                                <div class="has-float-label">
                                    <asp:DropDownList ID="ddlBankName" ToolTip="Select Bank Name" onkeyup="return OnNullValue(this);"
                                        Width="95%" runat="server" onchange="return OnNullValue(this);" CssClass="ComboBoxDropDown">
                                    </asp:DropDownList>
                                    <label class="pre-floating">
                                        Swipe Bank</label></div>
                            </td>
                            <td align="left" width="14%" colspan="2" class="removecolspan  rcol-2">
                                <div class="btntxt amtintxt has-float-label" style="padding-left: 105px; padding-right: 0;">
                                    <asp:TextBox ID="txtCardNo" ToolTip="Card No" onkeyup="return OnNullValue(this);"
                                        runat="server" Enabled="true" CssClass="ReadOnlyTextBox" Width="96%" MaxLength="16"
                                        onkeypress="return numeralsOnlyTest(event,this);" onblur="CheckCardNo(this);"></asp:TextBox>
                                    <div class="txtbtn amtinlbl floating-label1" style="right: initial; left: 0 !important;">
                                        <asp:Label ID="lblcarsNo" runat="server" Text="Card No"></asp:Label>
                                    </div>
                                </div>
                            </td>
                            <td align="left" colspan="2" class="removecolspan  rcol-3">
                                <div class="btntxt amtintxt has-float-label" style="padding-left: 87px; padding-right: 0;">
                                    <div id="divauthcd">
                                        <asp:TextBox ID="txtAuthCode" ToolTip="Authorization Cd" onkeyup="return OnNullValue(this);"
                                            runat="server" Enabled="true" CssClass="ReadOnlyTextBox" MaxLength="30" onkeypress="return numeralsOnlypcontrol(event);"></asp:TextBox>
                                    </div>
                                    <div id="divchequeauth" style="display: none;">
                                        <Lookup1:Search ID="UCchequeAuth" runat="server" CallbackFn="OnAuthorization" />
                                        <asp:HiddenField ID="hdncheckAuthID" runat="server" />
                                        <asp:HiddenField ID="hdnauthcd" runat="server" />
                                    </div>
                                    <div class="txtbtn amtinlbl floating-label1" style="right: initial; left: 0;">
                                        <asp:Label ID="lblcardtranNo" CssClass="ellip" runat="server">Card Trans#.</asp:Label>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td align="left" class="re_lbl">
                                <label class="ellip">
                                    Expiry Date</label>
                            </td>
                            <td width="16%" class=" rcol-4">
                                <div class="has-float-label">
                                    <asp:TextBox ID="txtExpDt" ToolTip="Expiry Date" Width="95%" onblur="return Changecolour(this);"
                                        onclick="return onexpiryDateCalender();" onkeyup="return OnNullValue(this);"
                                        runat="server" onchange="return Changecolour(this);" CssClass="ReadOnlyTextBox"
                                        ReadOnly="true"> </asp:TextBox>
                                    <label class="pre-floating">
                                        Expiry Date</label></div>
                            </td>
                            <td align="left" colspan="2" class="removecolspan  rcol-5">
                                <div class="btntxt amtintxt has-float-label" style="padding-left: 105px; padding-right: 0;">
                                    <asp:TextBox ID="txtTenderedAmt" ToolTip="Tendered" onkeyup="NewCalculateTendorAmt('Cash',this);return changetTenderaxamt(this);return OnNullValue(this);"
                                        onblur="NewCalculateTendorAmt('Cash',this);return changetTenderaxamt(this);return OnNullValue(this);"
                                        onfocus="return ClearTextbox(this);" runat="server" Style="text-align: right"
                                        ondrop="return false;" onkeypress="return numeralsOnlyTest(event,this);" onclick="return ClearPointArray(this);"
                                        Enabled="true" CssClass="formtextbox" Width="96%" MaxLength="15" onpaste="return false;"></asp:TextBox>
                                    <div class="txtbtn amtinlbl floating-label1" style="right: initial; left: 0 !important;">
                                        <asp:Label ID="lbltenderamount" runat="server"></asp:Label>
                                    </div>
                                </div>
                            </td>
                            <td align="left" colspan="2" class="removecolspan  rcol-6">
                                <div class="btntxt amtintxt has-float-label" style="padding-left: 87px; padding-right: 0;">
                                    <asp:TextBox ID="txtChangeKyd" ToolTip="Change In" runat="server" onkeyup="return OnNullValue(this);"
                                        Enabled="false" Style="text-align: right" CssClass="ReadOnlyTextBox" MaxLength="8"></asp:TextBox>
                                    <div class="txtbtn amtinlbl floating-label1" style="right: initial; left: 0 !important;">
                                        Change in
                                        <asp:Label ID="lblChcurr" runat="server"></asp:Label>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr id="trchequedt" style="display: none" class="mrow-2">
                            <td align="left" class="re_lbl">
                                <label class="ellip">
                                    Cheque Dt</label>
                            </td>
                            <td width="16%" class=" mrow-2col-1">
                                <div class="has-float-label">
                                    <asp:TextBox ID="txtchequedt" ReadOnly="true" onblur="return OnNullValue(this);"
                                        onchange="return onexpiryvalidation(this);" runat="server"></asp:TextBox>
                                    <label class="pre-floating">
                                        Cheque Dt</label></div>
                            </td>
                            <td align="left" class="re_lbl">
                                <label class="ellip">
                                    Cheque Realization Dt</label>
                            </td>
                            <td width="16%" class=" mrow-2col-2">
                                <div class="has-float-label">
                                    <asp:TextBox ID="txtchequerealizedt" ReadOnly="true" runat="server"></asp:TextBox>
                                    <label class="pre-floating">
                                        Realization Dt</label></div>
                            </td>
                            <td align="left" class="re_lbl">
                                <label class="ellip">
                                    Cheque Issuer Name</label>
                            </td>
                            <td width="16%" class=" mrow-2col-3">
                                <div class="has-float-label">
                                    <asp:TextBox ID="txtcqissuername" runat="server"></asp:TextBox>
                                    <label class="pre-floating">
                                        Issuer Name</label></div>
                            </td>
                        </tr>
                        <tr class="fullrow">
                            <td id="tdCardHldr" align="left" style="display: none" class="re_lbl">
                                <label class="ellip">
                                    Card Holder Name
                                </label>
                            </td>
                            <td id="tdTxtCardHldr" align="left" style="display: none" class="_2col">
                                <div class="has-float-label">
                                    <asp:TextBox ID="txtAdvCardHldrName" ToolTip="Card Holder Name" runat="server" onkeyup="return OnNullValue(this);"
                                        CssClass="ReadOnlyTextBox"></asp:TextBox>
                                    <label class="pre-floating">
                                        Card Holder Name</label></div>
                            </td>
                            <td colspan="2" id="tdchkotpadvanced" style="display: none;" class="_2col1">
                                <asp:CheckBox ID="chkotpadvanced" runat="server" Text="Is OTP Required" onchange="return checkpayment();" />
                            </td>
                            <td align="left" id="tdadv" style="display: none;" class="re_lbl">
                                <asp:Label ID="lbladjorotp" Text="Available Bal" runat="server"></asp:Label>
                            </td>
                            <td align="left" id="tdfund" style="display: none" class="re_lbl">
                                <label class="ellip">
                                    Org Fund Amt</label>
                            </td>
                            <td align="left" class="_2col2">
                                <div id="tdadvcell" class="has-float-label" style="display: none;">
                                    <asp:TextBox ID="txtadjustmentamt" Enabled="false" runat="server" Style="text-align: right"
                                        CssClass="formtextbox" onblur="chkotp(this);"></asp:TextBox>
                                    <asp:Label ID="lbladjorotp1" Text="Available Bal" CssClass="pre-floating" runat="server"></asp:Label>
                                </div>
                                <div id="tdfundcell" style="display: none" class="has-float-label">
                                    <asp:TextBox ID="txtorganizationFund" Enabled="false" runat="server" Style="text-align: right"
                                        CssClass="formtextbox"></asp:TextBox>
                                    <label class="pre-floating">
                                        Org Fund Amt</label></div>
                            </td>
                        </tr>
                        <tr>
                            <td align="left" class="colbtns" colspan="2">
                                <asp:Button ID="imgbtnadd" ToolTip="Add" runat="server" Text="Add" OnClientClick="return NewAddTransactionDetails();"
                                    Style="margin-right: 3px; float: left;" />
                                <asp:Button ID="imgbtnupdate" ToolTip="Update" OnClientClick="return UpdateTransactionDetails();"
                                    runat="server" Style="display: none;" Text="Update" />
                                <asp:Button ID="btnswp" Text="Swipe" Style="display: none;" runat="server" OnClientClick="return SwipeCard();" />
                                <asp:Button ID="btnsettle" runat="server" Text="Settled" OnClientClick="return SettledSwipe();"
                                    Style="display: none;" />
                            </td>
                            <td align="left" style="display: none;">
                                <label class="ellip">
                                    Transaction #</label>
                            </td>
                            <td style="display: none;" align="left">
                                <div style="width: 96%;">
                                    <Lookup1:Search ID="UcTransactionNo" runat="server" CallbackFn="OnTransactionSelection" />
                                </div>
                            </td>
                        </tr>
                    </table>
                    <table width="100%" border="0" cellpadding="0" cellspacing="0" class="FormsCtrl">
                        <tr>
                            <td width="5%">
                                <label class="ellip">
                                    Total Receipt Amt in word's
                                </label>
                            </td>
                            <td width="1%">
                                :
                            </td>
                            <td colspan="2">
                                <asp:Label ID="txttotamtinwordsadd" runat="server" CssClass="cu-type-amt" Style="font-weight: bold;
                                    float: left;"></asp:Label>
                            </td>
                            <td width="5%">
                                <label class="ellip">
                                    Change Amt in word's
                                </label>
                            </td>
                            <td width="1%">
                                :
                            </td>
                            <td colspan="2">
                                <asp:Label ID="txtchangeamtinwordsadd" runat="server" CssClass="cu-type-amt" Style="font-weight: bold;
                                    float: left;"></asp:Label>
                            </td>
                        </tr>
                    </table>
                </div>
                <div class="reciept_info">
                    <table width="100%" border="0" cellpadding="0" cellspacing="0" align="left" class="FormsCtrl">
                        <tr>
                            <td align="left" colspan="2" class="removecolspan ">
                                <div class="btntxt amtintxt has-float-label" style="padding-left: 101px; padding-right: 0;">
                                    <asp:TextBox ID="txtReceoptNoAdvanced" ToolTip="Receipt No" Enabled="false" runat="server"
                                        CssClass="formtextbox"></asp:TextBox>
                                    <div class="txtbtn amtinlbl floating-label1" style="right: initial; left: 0 !important;">
                                        <asp:Label ID="lbladvrecno" runat="server">Receipt No</asp:Label>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td align="left" class="re_lbl" width="1%">
                                <label class="ellip">
                                    Receipt Date</label>
                            </td>
                            <td width="12%">
                                <div class="has-float-label" style="padding-left: 18px; padding-right: 0;">
                                    <asp:TextBox ID="txtReceiptDtAdvanced" ToolTip="Receipt Date" Enabled="false" runat="server"
                                        CssClass="formtextbox"></asp:TextBox>
                                    <label class="pre-floating">
                                        Receipt Date</label></div>
                            </td>
                        </tr>
                        <tr>
                            <td align="left" class="re_lbl">
                                <label class="ellip">
                                    Receipt Amt</label>
                            </td>
                            <td width="12%">
                                <div class="has-float-label" style="padding-left: 18px; padding-right: 0;">
                                    <asp:TextBox ID="txtreceiptAmount" ToolTip="Receipt Amt" Enabled="false" runat="server"
                                        Style="text-align: right" CssClass="formtextbox"></asp:TextBox>
                                    <label class="pre-floating">
                                        Receipt Amt</label></div>
                            </td>
                        </tr>
                        <tr style="display: none;">
                            <td align="left">
                                <label class="ellip">
                                    Due Amt</label>
                            </td>
                            <td align="left">
                                <asp:TextBox ID="txtDueamount" ToolTip="Due Amt" Enabled="false" runat="server" Style="text-align: right"
                                    CssClass="formtextbox"></asp:TextBox>
                            </td>
                        </tr>
                        <tr>
                            <td align="left" style="display: none;">
                                <asp:Label ID="lblRemarks" runat="server" Text="Remarks"></asp:Label>
                            </td>
                            <td align="left" valign="top" colspan="2">
                                <asp:TextBox ID="txtRemarks" ToolTip="Remarks" TextMode="MultiLine" runat="server"
                                    placeholder="Enter Remarks" Enabled="true" CssClass="FormTextAreaBox" Height="40px"
                                    onkeyup="return OnNullValue(this);" onblur="return cnvtToUpperRemarks(this);"></asp:TextBox>
                                <ajaxToolkit:AutoCompleteExtender runat="server" ID="autoCompleteRemarks" TargetControlID="txtRemarks"
                                    ServiceMethod="GetRemarkAllAuto" UseContextKey="true" ServicePath="~/RemarksService.asmx"
                                    CompletionSetCount="5" MinimumPrefixLength="2" CompletionInterval="5" EnableCaching="false"
                                    OnClientItemSelected="OnItemRemarksSelection" FirstRowSelected="true" CompletionListCssClass="autocomplete_completionListElement"
                                    CompletionListItemCssClass="autocomplete_listItem" CompletionListHighlightedItemCssClass="autocomplete_highlightedListItem" />
                            </td>
                        </tr>
                    </table>
                </div>
                <div class="clr">
                </div>
            </div>
            <div id="divreceipts" style="width: 100%;">
                <div style="padding: 5px 5px 0 5px;">
                    <h3>
                        Receipt Details</h3>
                </div>
                <div id="pnlGrid" runat="server" class="divscroll" style="height: 120px; width: 100%;
                    border-top: 1px solid #cacaca;">
                    <asp:GridView ID="gvReceiptDetails" runat="server" AllowSorting="True" AutoGenerateColumns="False"
                        BorderWidth="0px" CellPadding="0" CssClass="jtblgrid paygrid" GridLines="None"
                        EmptyDataText="No Data Found" EmptyDataRowStyle-Font-Bold="true" EmptyDataRowStyle-ForeColor="Red">
                        <RowStyle CssClass="gridrow" />
                        <AlternatingRowStyle CssClass="gridAlternaterow" />
                        <Columns>
                            <asp:TemplateField>
                                <HeaderStyle CssClass="gManage manage1" />
                                <ItemStyle CssClass="gManage manage1" />
                                <HeaderTemplate>
                                    Manage
                                </HeaderTemplate>
                                <ItemTemplate>
                                    <div style="float: left;">
                                        <asp:ImageButton ID="imgBtnDelete" CommandName="Delete" runat="server" Style="vertical-align: middle;"
                                            ImageUrl="~/Images/Grid_Icons/delete.png" OnClientClick="return RemoveService(this);" />
                                        <asp:ImageButton ID="imgBtnEdit" CommandName="edit" runat="server" Style="vertical-align: middle;"
                                            OnClientClick="return AssignRowValues1(this,'Edit');" ImageUrl="~/Images/Grid_Icons/edit_icon.gif" />
                                    </div>
                                </ItemTemplate>
                            </asp:TemplateField>
                            <asp:TemplateField HeaderText="ReceiptMode" HeaderStyle-HorizontalAlign="Left" ItemStyle-HorizontalAlign="Left">
                                <ItemTemplate>
                                    <asp:HiddenField ID="hdnrecmodeId" runat="server" />
                                    <asp:HiddenField ID="_RECEIPT_MODE_ID" runat="server" />
                                    <asp:HiddenField ID="hdnpaymentcommid" runat="server" />
                                    <asp:HiddenField ID="hdnpaymentappgroupid" runat="server" />
                                    <asp:HiddenField ID="hdnbankid" runat="server" />
                                    <asp:HiddenField ID="_BANK_ID" runat="server" />
                                    <asp:HiddenField ID="hdncardtypeId" runat="server" />
                                    <asp:HiddenField ID="hdncurrId" runat="server" />
                                    <asp:HiddenField ID="hdnSNo" runat="server" Value='<%# Container.DataItemIndex+1 %>' />
                                    <asp:HiddenField ID="hdnis_adjested_o" runat="server" />
                                    <asp:HiddenField ID="hdnsrvcharg" runat="server" />
                                    <asp:HiddenField ID="hdnsrvchargamt" runat="server" />
                                    <asp:HiddenField ID="gridhdnplutusreferenceid" runat="server" />
                                    <asp:Label ID="lblrecmode" runat="server" Text='<%#Eval("PAYMENT_TYPE") %>'></asp:Label>
                                </ItemTemplate>
                                <HeaderStyle CssClass="ReceiptMode" />
                                <ItemStyle CssClass="ReceiptMode" />
                            </asp:TemplateField>
                            <asp:TemplateField HeaderText="Amt" HeaderStyle-HorizontalAlign="Right" ItemStyle-HorizontalAlign="Right">
                                <ItemTemplate>
                                    <asp:Label ID="lblAmount" runat="server" ToolTip="AMOUNT" Text='<%#Eval("AMOUNT")%>'
                                        Style="text-align: right;"></asp:Label>
                                </ItemTemplate>
                                <HeaderStyle CssClass="Amount Aright" />
                                <ItemStyle CssClass="Amount Aright" />
                            </asp:TemplateField>
                            <asp:TemplateField HeaderText="Amt In Words" HeaderStyle-HorizontalAlign="Right"
                                ItemStyle-HorizontalAlign="Right">
                                <ItemTemplate>
                                    <asp:Label ID="lblAmtinwords" runat="server" Style="text-align: right;"></asp:Label>
                                </ItemTemplate>
                                <HeaderStyle CssClass="lblAmountinwords Aright" />
                                <ItemStyle CssClass="lblAmountinwords Aright" />
                            </asp:TemplateField>
                            <asp:TemplateField HeaderText="Tendered Cash" HeaderStyle-HorizontalAlign="Right"
                                ItemStyle-HorizontalAlign="Right">
                                <ItemTemplate>
                                    <asp:Label ID="lbltendcash" runat="server" Text='<%#Eval("AMOUNT")%>' Style="text-align: right;"></asp:Label>
                                </ItemTemplate>
                                <HeaderStyle CssClass="TenderedCash Aright" />
                                <ItemStyle CssClass="TenderedCash Aright" />
                            </asp:TemplateField>
                            <asp:TemplateField HeaderText="Change" HeaderStyle-HorizontalAlign="Right" ItemStyle-HorizontalAlign="Right">
                                <ItemTemplate>
                                    <asp:Label ID="lblchange" runat="server" Style="text-align: right;"></asp:Label>
                                </ItemTemplate>
                                <HeaderStyle CssClass="Change Aright" />
                                <ItemStyle CssClass="Change Aright" />
                            </asp:TemplateField>
                            <asp:TemplateField HeaderText="Curr Name" HeaderStyle-HorizontalAlign="Left" ItemStyle-HorizontalAlign="Left">
                                <ItemTemplate>
                                    <asp:Label ID="lblcurrname" runat="server"></asp:Label>
                                </ItemTemplate>
                                <HeaderStyle CssClass="CurrencyName" />
                                <ItemStyle CssClass="CurrencyName" />
                            </asp:TemplateField>
                            <asp:TemplateField HeaderText="Exch Rate" HeaderStyle-HorizontalAlign="Right" ItemStyle-HorizontalAlign="Right">
                                <ItemTemplate>
                                    <asp:Label ID="lblexchrate" runat="server"></asp:Label>
                                </ItemTemplate>
                                <HeaderStyle CssClass="ExchangeRate Aright" />
                                <ItemStyle CssClass="ExchangeRate Aright" />
                            </asp:TemplateField>
                            <asp:TemplateField HeaderText="Converted Amt" HeaderStyle-HorizontalAlign="Right"
                                ItemStyle-HorizontalAlign="Right">
                                <ItemTemplate>
                                    <asp:Label ID="lblconvertedamt" runat="server" Style="text-align: right;"></asp:Label>
                                </ItemTemplate>
                                <HeaderStyle CssClass="ConvertedAmount Aright" />
                                <ItemStyle CssClass="ConvertedAmount Aright" />
                            </asp:TemplateField>
                            <asp:TemplateField HeaderText="Cheque/Card/DD Bank" HeaderStyle-HorizontalAlign="Left"
                                ItemStyle-HorizontalAlign="Left">
                                <ItemTemplate>
                                    <asp:Label ID="lblbankname" runat="server" ToolTip="BANK_NAME" Text='<%#Eval("CC_ISSUE_BANK_NAME") %>'></asp:Label>
                                </ItemTemplate>
                                <HeaderStyle CssClass="Cheque-Card-DD" />
                                <ItemStyle CssClass="Cheque-Card-DD" />
                            </asp:TemplateField>
                            <asp:TemplateField HeaderText="Cheque/Card/DD #" HeaderStyle-HorizontalAlign="Left"
                                ItemStyle-HorizontalAlign="Left">
                                <ItemTemplate>
                                    <asp:Label ID="lblcardno" runat="server" ToolTip="CARD_NO" Text='<%#Eval("CC_CARD_NO") %>'></asp:Label>
                                </ItemTemplate>
                                <HeaderStyle CssClass="Cheque-Card-DD-no" />
                                <ItemStyle CssClass="Cheque-Card-DD-no" />
                            </asp:TemplateField>
                            <asp:TemplateField HeaderText="Authorization CD" HeaderStyle-HorizontalAlign="Left"
                                ItemStyle-HorizontalAlign="Left">
                                <ItemTemplate>
                                    <asp:HiddenField ID="hdncheck_AuthID" runat="server" />
                                    <asp:Label ID="lblauthcode" runat="server" ToolTip="AUTH_CODE" Text='<%#Eval("AUTH_CODE") %>'
                                        Style="text-align: right;"></asp:Label>
                                </ItemTemplate>
                                <HeaderStyle CssClass="AuthorizationName" />
                                <ItemStyle CssClass="AuthorizationName" />
                            </asp:TemplateField>
                            <asp:TemplateField HeaderText="Card Exp.Dt" HeaderStyle-HorizontalAlign="Left" ItemStyle-HorizontalAlign="Left">
                                <ItemTemplate>
                                    <asp:Label ID="lblcardexpdt" runat="server" ToolTip="EXPIRY_DT" Text='<%#Eval("CC_VALID_TO_DT") %>'></asp:Label>
                                </ItemTemplate>
                                <HeaderStyle CssClass="CardExpiryDate" />
                                <ItemStyle CssClass="CardExpiryDate" />
                            </asp:TemplateField>
                            <asp:TemplateField HeaderText="Payment Type" HeaderStyle-HorizontalAlign="Left" ItemStyle-HorizontalAlign="Left">
                                <ItemTemplate>
                                    <asp:Label ID="lblcardtype" runat="server"></asp:Label>
                                </ItemTemplate>
                                <HeaderStyle CssClass="CardType" />
                                <ItemStyle CssClass="CardType" />
                            </asp:TemplateField>
                            <asp:TemplateField HeaderText="Service Chrg(%)" HeaderStyle-HorizontalAlign="Right"
                                ItemStyle-HorizontalAlign="Right">
                                <ItemTemplate>
                                    <asp:Label ID="lblsrvchrgpcnt" runat="server" Style="text-align: right;" ToolTip="SERVICE_CHARGE_PERCENT"></asp:Label>
                                </ItemTemplate>
                                <HeaderStyle CssClass="srvchrgpcnt Aright" />
                                <ItemStyle CssClass="srvchrgpcntAright" />
                            </asp:TemplateField>
                            <asp:TemplateField HeaderText="Service Chrg Amt" HeaderStyle-HorizontalAlign="Right"
                                ItemStyle-HorizontalAlign="Right">
                                <ItemTemplate>
                                    <asp:Label ID="lblsrvchrgamt" runat="server" Style="text-align: right;" ToolTip="SERVICE_CHARGE_AMOUNT"></asp:Label>
                                </ItemTemplate>
                                <HeaderStyle CssClass="srvchrgamt Aright" />
                                <ItemStyle CssClass="srvchrgamtAright" />
                            </asp:TemplateField>
                            <asp:TemplateField HeaderText="Cheque Dt" HeaderStyle-HorizontalAlign="Left" ItemStyle-HorizontalAlign="Left">
                                <ItemTemplate>
                                    <asp:Label ID="lblchequedt" runat="server" ToolTip="CHEQUE_DT"></asp:Label>
                                </ItemTemplate>
                                <HeaderStyle CssClass="chequedt" />
                                <ItemStyle CssClass="chequedt" />
                            </asp:TemplateField>
                            <asp:TemplateField HeaderText="ChequeRel Dt" HeaderStyle-HorizontalAlign="Left" ItemStyle-HorizontalAlign="Left">
                                <ItemTemplate>
                                    <asp:Label ID="lblcqreldt" runat="server" ToolTip="CHEQUE_REL_DT"></asp:Label>
                                </ItemTemplate>
                                <HeaderStyle CssClass="cqreldt" />
                                <ItemStyle CssClass="cqreldt" />
                            </asp:TemplateField>
                            <asp:TemplateField HeaderText="Cheque Issuer/Card Holder Name" HeaderStyle-HorizontalAlign="Left"
                                ItemStyle-HorizontalAlign="Left">
                                <ItemTemplate>
                                    <asp:Label ID="lblcqissuername" runat="server" ToolTip="CHEQUE_ISSUER_NAME"></asp:Label>
                                </ItemTemplate>
                                <HeaderStyle CssClass="cqissuername" />
                                <ItemStyle CssClass="cqissuername" />
                            </asp:TemplateField>
                        </Columns>
                    </asp:GridView>
                </div>
            </div>
            <div class="clr">
            </div>
        </div>
    </div>
</div>
<div class="panel-body grd vrow-2">
    <div id="divpasCard" style="height: 50%; padding: 5px; display: none;" class="divscroll">
        <div>
            <table width="100%" border="0" cellpadding="0" cellspacing="0" align="left" class="FormsCtrl">
                <tr>
                    <td width="3%">
                        <label class="ellip">
                            Gross Amt</label>
                    </td>
                    <td>
                        <asp:TextBox ID="lblGrossAmt" runat="server" Text="0" ReadOnly="true" CssClass="Aright"></asp:TextBox>
                    </td>
                    <td width="3%">
                        <label class="ellip">
                            Concession Amt</label>
                    </td>
                    <td>
                        <asp:TextBox ID="lblConcAmt" runat="server" Text="0" ReadOnly="true" CssClass="Aright"></asp:TextBox>
                    </td>
                    <td width="3%">
                        <label class="ellip">
                            Net Amt</label>
                    </td>
                    <td>
                        <asp:TextBox ID="lblNetAmt" runat="server" Text="0" ReadOnly="true" CssClass="Aright"></asp:TextBox>
                    </td>
                    <td width="3%">
                        <label class="ellip">
                            Ins Amt</label>
                    </td>
                    <td>
                        <asp:TextBox ID="lblInsuranceAmt" runat="server" Text="0" ReadOnly="true" CssClass="Aright"></asp:TextBox>
                    </td>
                    <td width="3%">
                        <label class="ellip">
                            Co-Pay Amt</label>
                    </td>
                    <td>
                        <asp:TextBox ID="lblcopayamt" runat="server" Text="0" ReadOnly="true" CssClass="Aright"></asp:TextBox>
                    </td>
                </tr>
            </table>
        </div>
        <div class="panel-body" style="height: 138px; width: 99.9%">
            <div class="divscroll" style="overflow: auto; height: 100%; border: 1px solid #cacaca;
                float: left; width: 100%; margin-right: 0.5%;">
                <asp:GridView ID="GvCardDetails" runat="server" AllowSorting="True" AutoGenerateColumns="False"
                    BorderWidth="0px" CellPadding="4" CssClass="jtblgrid" GridLines="None" Width="1328px"
                    EmptyDataText="No Bills Found" EmptyDataRowStyle-Font-Bold="true" EmptyDataRowStyle-ForeColor="Red">
                    <RowStyle CssClass="gridrow" />
                    <AlternatingRowStyle CssClass="gridAlternaterow" />
                    <Columns>
                        <asp:TemplateField HeaderText="Card" HeaderStyle-Width="50px" ItemStyle-Width="50px"
                            HeaderStyle-HorizontalAlign="Right" ItemStyle-HorizontalAlign="Right">
                            <ItemTemplate>
                                <asp:HiddenField ID="hdnbinno" runat="server" Value='<%#Eval("BIN") %>' />
                                <asp:HiddenField ID="_BIN" runat="server" Value='<%#Eval("BIN") %>' />
                                <asp:HiddenField ID="lblfname" runat="server" Value='<%#Eval("PATIENT_FIRST_NAME") %>' />
                                <asp:HiddenField ID="_PATIENT_FIRST_NAME" runat="server" Value='<%#Eval("PATIENT_FIRST_NAME") %>' />
                                <asp:HiddenField ID="lbllname" runat="server" Value='<%#Eval("PATIENT_LAST_NAME") %>' />
                                <asp:HiddenField ID="_PATIENT_LAST_NAME" runat="server" Value='<%#Eval("PATIENT_LAST_NAME") %>' />
                                <asp:HiddenField ID="hdntrack1" runat="server" Value='<%#Eval("TRACK1") %>' />
                                <asp:HiddenField ID="_TRACK1" runat="server" Value='<%#Eval("TRACK1") %>' />
                                <asp:HiddenField ID="hdntrack2" runat="server" Value='<%#Eval("TRACK2")%>' />
                                <asp:HiddenField ID="_TRACK2" runat="server" Value='<%#Eval("TRACK2") %>' />
                                <i id="icndelete" onclick="return RemoveCards1();" class="square1 su-delete-garbage-streamline"
                                    title="Remove"></i>
                                <asp:Label ID="lblSNo" ToolTip="SNO" runat="server" Text='<%#Container.DataItemIndex+1 %>' />
                            </ItemTemplate>
                        </asp:TemplateField>
                        <asp:TemplateField HeaderText="Name" HeaderStyle-Width="100px" ItemStyle-Width="100px"
                            HeaderStyle-HorizontalAlign="Left" ItemStyle-HorizontalAlign="Left">
                            <ItemTemplate>
                                <asp:Label ID="lblname" runat="server" Text='<%#Eval("PATIENT_FIRST_NAME") %>'></asp:Label>
                            </ItemTemplate>
                        </asp:TemplateField>
                        <asp:TemplateField HeaderText="DOB" HeaderStyle-Width="100px" ItemStyle-Width="100px"
                            HeaderStyle-HorizontalAlign="Left" ItemStyle-HorizontalAlign="Left">
                            <ItemTemplate>
                                <asp:Label ID="lbldob" ToolTip="DOB" runat="server" Text='<%#Eval("DOB")%>'></asp:Label>
                            </ItemTemplate>
                        </asp:TemplateField>
                        <asp:TemplateField HeaderText="Group#" HeaderStyle-HorizontalAlign="Left" ItemStyle-HorizontalAlign="Left"
                            HeaderStyle-Width="80px" ItemStyle-Width="80px">
                            <ItemTemplate>
                                <asp:Label ID="lblgroupno" ToolTip="GROUP_NO" runat="server" Text='<%#Eval("GROUP_NO")%>'></asp:Label>
                            </ItemTemplate>
                        </asp:TemplateField>
                        <asp:TemplateField HeaderText="Member Id" HeaderStyle-HorizontalAlign="Left" ItemStyle-HorizontalAlign="Left"
                            HeaderStyle-Width="100px" ItemStyle-Width="100px">
                            <ItemTemplate>
                                <asp:Label ID="lblmemberid" ToolTip="SUBSRIBER_NO" runat="server" Text='<%#Eval("SUBSRIBER_NO")%>'></asp:Label>
                            </ItemTemplate>
                        </asp:TemplateField>
                        <asp:TemplateField HeaderText="Person Cd" HeaderStyle-HorizontalAlign="Left" ItemStyle-HorizontalAlign="Left"
                            HeaderStyle-Width="100px" ItemStyle-Width="100px">
                            <ItemTemplate>
                                <asp:Label ID="lblpersioncd" runat="server" ToolTip="PERSON_CODE" Text='<%#Eval("PERSON_CODE")%>'></asp:Label>
                            </ItemTemplate>
                        </asp:TemplateField>
                        <asp:TemplateField HeaderText="Relation" HeaderStyle-Width="80px" ItemStyle-Width="80px"
                            HeaderStyle-HorizontalAlign="Left" ItemStyle-HorizontalAlign="Left">
                            <ItemTemplate>
                                <asp:Label ID="lblrelation" ToolTip="RELATION" runat="server" Text='<%#Eval("RELATION")%>'></asp:Label>
                            </ItemTemplate>
                        </asp:TemplateField>
                        <asp:TemplateField HeaderText="Gender" HeaderStyle-Width="80px" ItemStyle-Width="80px"
                            HeaderStyle-HorizontalAlign="Left" ItemStyle-HorizontalAlign="Left">
                            <ItemTemplate>
                                <asp:Label ID="lblgender" ToolTip="GENDER" runat="server" Text='<%#Eval("GENDER")%>'></asp:Label>
                            </ItemTemplate>
                        </asp:TemplateField>
                        <asp:TemplateField HeaderText="Effective From" HeaderStyle-Width="140px" ItemStyle-Width="140px"
                            HeaderStyle-HorizontalAlign="Left" ItemStyle-HorizontalAlign="Left">
                            <ItemTemplate>
                                <asp:Label ID="lblefffrom" runat="server" Text='<%#Eval("GENDER")%>'></asp:Label>
                            </ItemTemplate>
                        </asp:TemplateField>
                        <asp:TemplateField HeaderText="Expiry Date" HeaderStyle-Width="140px" ItemStyle-Width="140px"
                            HeaderStyle-HorizontalAlign="Left" ItemStyle-HorizontalAlign="Left">
                            <ItemTemplate>
                                <asp:Label ID="lblexpdt" runat="server" Text='<%#Eval("GENDER")%>'></asp:Label>
                            </ItemTemplate>
                        </asp:TemplateField>
                        <asp:TemplateField HeaderText="Card Id" HeaderStyle-Width="100px" ItemStyle-Width="100px"
                            HeaderStyle-HorizontalAlign="Left" ItemStyle-HorizontalAlign="Left">
                            <ItemTemplate>
                                <asp:Label ID="lblcardid" ToolTip="PROVIDER_NO" runat="server" Text='<%#Eval("PROVIDER_NO")%>'></asp:Label>
                            </ItemTemplate>
                        </asp:TemplateField>
                        <asp:TemplateField HeaderText="Version No." HeaderStyle-Width="100px" ItemStyle-Width="100px"
                            HeaderStyle-HorizontalAlign="Left" ItemStyle-HorizontalAlign="Left">
                            <ItemTemplate>
                                <asp:Label ID="lblversionno" ToolTip="CARD_VERSION_NO" runat="server" Text='<%#Eval("CARD_VERSION_NO")%>'></asp:Label>
                            </ItemTemplate>
                        </asp:TemplateField>
                    </Columns>
                </asp:GridView>
            </div>
        </div>
        <div class="ii-amount-main-div ii-row7 divscroll" style="overflow: auto; height: 100%;
            border: 1px solid #cacaca; width: 100%;">
            <asp:GridView ID="GvIns" runat="server" AllowSorting="True" AutoGenerateColumns="False"
                BorderWidth="0px" CellPadding="4" CssClass="jtblgrid" GridLines="None" Width="100%"
                EmptyDataText="No Bills Found" EmptyDataRowStyle-Font-Bold="true" EmptyDataRowStyle-ForeColor="Red">
                <RowStyle CssClass="gridrow" />
                <AlternatingRowStyle CssClass="gridAlternaterow" />
                <Columns>
                    <asp:TemplateField HeaderText="S&nbsp;No" HeaderStyle-Width="30px" ItemStyle-Width="30px"
                        HeaderStyle-HorizontalAlign="Left" ItemStyle-HorizontalAlign="Left">
                        <ItemTemplate>
                            <asp:HiddenField ID="hdnitemid" runat="server" Value='<%#Eval("ITEM_ID") %>' />
                            <asp:HiddenField ID="_ITEM_ID" runat="server" Value='<%#Eval("ITEM_ID") %>' />
                            <asp:HiddenField ID="hdncarrierid" runat="server" Value='<%#Eval("CARRIER_ID") %>' />
                            <asp:HiddenField ID="_CARRIER_ID" runat="server" Value='<%#Eval("CARRIER_ID") %>' />
                            <asp:HiddenField ID="hdnplanid" runat="server" Value='<%#Eval("PLAN_ID") %>' />
                            <asp:HiddenField ID="_PLAN_ID" runat="server" Value='<%#Eval("PLAN_ID") %>' />
                            <asp:HiddenField ID="hdnrxitemid" runat="server" />
                            <asp:HiddenField ID="_RX_ITEM_ID" runat="server" />
                            <asp:HiddenField ID="hdnusbtranckone" runat="server" Value='<%#Eval("USB_TRACK_1") %>' />
                            <asp:HiddenField ID="_USB_TRACK_1" runat="server" Value='<%#Eval("USB_TRACK_1") %>' />
                            <asp:HiddenField ID="hdnusbtrancktwo" runat="server" Value='<%#Eval("USB_TRACK_2") %>' />
                            <asp:HiddenField ID="_USB_TRACK_2" runat="server" Value='<%#Eval("USB_TRACK_2") %>' />
                            <asp:Label ID="lblSNo" runat="server" Text='<%# Container.DataItemIndex+1 %>' />
                        </ItemTemplate>
                    </asp:TemplateField>
                    <asp:TemplateField HeaderText="Prescription#" HeaderStyle-Width="100px" ItemStyle-Width="100px"
                        HeaderStyle-HorizontalAlign="Left" ItemStyle-HorizontalAlign="Left">
                        <ItemTemplate>
                            <asp:HiddenField ID="hdnpascardID" runat="server" Value='<%#Eval("INS_PAS_CARD_ID")%>' />
                            <asp:HiddenField ID="hdnpassrvID" runat="server" Value='<%#Eval("PAS_SRV_ID")%>' />
                            <asp:Label ID="lblrxitmno" ToolTip="PRESCRIPTION_NO" runat="server" Text='<%#Eval("PRESCRIPTION_NO")%>'></asp:Label>
                        </ItemTemplate>
                    </asp:TemplateField>
                    <asp:TemplateField HeaderText="Service&nbsp;Name" HeaderStyle-Width="200px" ItemStyle-Width="200px"
                        HeaderStyle-HorizontalAlign="Left" ItemStyle-HorizontalAlign="Left">
                        <ItemTemplate>
                            <asp:Label ID="lblitemname" ToolTip="SERVICE_NAME" runat="server" Text='<%#Eval("ITEM_NAME")%>'></asp:Label>
                        </ItemTemplate>
                    </asp:TemplateField>
                    <asp:TemplateField HeaderText="Ins&nbsp;Name" HeaderStyle-HorizontalAlign="Left"
                        ItemStyle-HorizontalAlign="Left" HeaderStyle-Width="80px" ItemStyle-Width="80px">
                        <ItemTemplate>
                            <asp:Label ID="lblinsname" ToolTip="CARRIER_NAME" runat="server" Text='<%#Eval("CARRIER_NAME")%>'></asp:Label>
                        </ItemTemplate>
                    </asp:TemplateField>
                    <asp:TemplateField HeaderText="Auth&nbsp;No" HeaderStyle-HorizontalAlign="Left" ItemStyle-HorizontalAlign="Left"
                        HeaderStyle-Width="80px" ItemStyle-Width="80px">
                        <ItemTemplate>
                            <asp:Label ID="lblauthno" ToolTip="AUTH_NO" runat="server" Text='<%#Eval("AUTH_NO")%>'></asp:Label>
                        </ItemTemplate>
                    </asp:TemplateField>
                    <asp:TemplateField HeaderText="Message" HeaderStyle-Width="200px" ItemStyle-Width="200px"
                        HeaderStyle-HorizontalAlign="Left" ItemStyle-HorizontalAlign="Left">
                        <ItemTemplate>
                            <asp:Label ID="lblrejectdesc" ToolTip="REJECT_DESC" runat="server" Text='<%#Eval("REJECT_DESC")%>'></asp:Label>
                        </ItemTemplate>
                    </asp:TemplateField>
                    <asp:TemplateField HeaderText="Request&nbsp;Amt" HeaderStyle-Width="80px" ItemStyle-Width="80px"
                        HeaderStyle-HorizontalAlign="Right" ItemStyle-HorizontalAlign="Right">
                        <ItemTemplate>
                            <asp:Label ID="lblreqamt" ToolTip="Request Amt" runat="server" Text='<%#Eval("RECEIPT_AMT")%>'></asp:Label>
                        </ItemTemplate>
                    </asp:TemplateField>
                    <asp:TemplateField HeaderText="Ins&nbsp;Amt" HeaderStyle-Width="80px" ItemStyle-Width="80px"
                        HeaderStyle-HorizontalAlign="Right" ItemStyle-HorizontalAlign="Right">
                        <ItemTemplate>
                            <asp:Label ID="lblinsamt" ToolTip="InsAmt" runat="server" Text='<%#Eval("RECEIPT_AMT")%>'></asp:Label>
                        </ItemTemplate>
                    </asp:TemplateField>
                    <asp:TemplateField HeaderText="Co-Pay&nbsp;Amt" HeaderStyle-Width="80px" ItemStyle-Width="80px"
                        HeaderStyle-HorizontalAlign="Right" ItemStyle-HorizontalAlign="Right">
                        <ItemTemplate>
                            <asp:Label ID="lblcopayamt" ToolTip="CoPay Amt" runat="server" Text='<%#Eval("RECEIPT_AMT")%>'></asp:Label>
                        </ItemTemplate>
                    </asp:TemplateField>
                    <asp:TemplateField HeaderText="Service Type" HeaderStyle-Width="80px" ItemStyle-Width="80px"
                        HeaderStyle-HorizontalAlign="Right" ItemStyle-HorizontalAlign="Right">
                        <ItemTemplate>
                            <asp:Label ID="lblpasServiceType" ToolTip="Service Type" runat="server"></asp:Label>
                        </ItemTemplate>
                    </asp:TemplateField>
                    <asp:TemplateField HeaderText="Cpt Code" HeaderStyle-Width="80px" ItemStyle-Width="80px"
                        HeaderStyle-HorizontalAlign="Right" ItemStyle-HorizontalAlign="Right">
                        <ItemTemplate>
                            <asp:Label ID="lblcptcode" ToolTip="Cpt Code" runat="server"></asp:Label>
                        </ItemTemplate>
                    </asp:TemplateField>
                </Columns>
            </asp:GridView>
        </div>
    </div>
</div>
<div id="divGridTerminalPop" width="600px" style="display: none" runat="server" class="masking">
    <div class="cmask">
    </div>
    <div class="clientpopup" style="width: 1213px; height: 403px; margin-left: -600px;
        margin-top: -205px;">
        <div class="pop-header">
            <h1>
                Terminal Details
            </h1>
            <div class="datesearch">
                <table>
                    <tr>
                        <td>
                            From Dt
                        </td>
                        <td>
                            <asp:TextBox ID="txtpainlabFromdt" runat="server"></asp:TextBox>
                        </td>
                        <td>
                            To Dt
                        </td>
                        <td>
                            <asp:TextBox ID="txtpainlabTOtdt" runat="server"></asp:TextBox>
                        </td>
                    </tr>
                </table>
            </div>
            <input type="button" id="Button2" class="button" value="&times;" onclick="return btnclose16();" />
            <input type="button" id="Button6" class="button" value="Apply DateFilter" onclick="return BindChequeList();"
                style="float: left;" />
        </div>
        <div class="pop-body grd" style="height: 366px;">
            <div id="divchequedata" style="height: 330px; overflow: auto;">
            </div>
        </div>
    </div>
</div>
<div id="divmissionpayment" width="600px" style="display: none" runat="server" class="masking">
    <div class="cmask">
    </div>
    <div class="clientpopup" style="width: 541px; height: 380px; margin-left: -274px;
        margin-top: -163px;">
        <div class="pop-header">
            <h1>
                Payment Details
            </h1>
            <input type="button" id="Button3" class="button" value="&times;" onclick="return btnclose25();" />
        </div>
        <div class="pop-body grd divscroll">
            <div id="div4" style="height: 330px; overflow: auto;">
                <table id="ctl00_ContentPlaceHolder1_gvStatementBills" border="0px" cellpadding="0px"
                    cellspacing="0px" class="jtblgrid">
                    <thead>
                        <tr>
                            <th>
                                S.no
                            </th>
                            <th class="BillNo">
                                Payment Mode
                            </th>
                            <th class="BillNo">
                                Amount
                            </th>
                            <th class="BillNo">
                                Card#
                            </th>
                            <th class="BillNo">
                                Communication#
                            </th>
                            <th class="BillNo">
                                Admn#
                            </th>
                            <th class="BillNo">
                                Select
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div>
<div id="divpendingmissionpayment" width="600px" style="display: none" runat="server"
    class="masking">
    <div class="cmask">
    </div>
    <div class="clientpopup" style="width: 1000px; height: 369px; margin-left: -466px;
        margin-top: -200px;">
        <div class="pop-header">
            <h1 style="font-size: 15px;">
                Pending Transactions After Payment Settlement Done
            </h1>
            <div class="datesearch">
                <table>
                    <tr>
                        <td>
                            From Dt
                        </td>
                        <td>
                            <asp:TextBox ID="pendingfromdt" runat="server"></asp:TextBox>
                        </td>
                        <td>
                            To Dt
                        </td>
                        <td>
                            <asp:TextBox ID="pendingtodt" runat="server"></asp:TextBox>
                        </td>
                    </tr>
                </table>
            </div>
            <input type="button" id="Button5" class="button" value="&times;" onclick="return btnclose26();" />
            <input type="button" id="okapproval" class="button" value="Apply DateFilter" onclick="return Bindapprovepending();" />
        </div>
        <div class="pop-body grd" style="height: 100px;">
            <div id="div5" style="height: 330px; overflow: auto;">
                <table id="ctl00_ContentPlaceHolder1_gvStatementpeningBills" border="0px" cellpadding="0px"
                    cellspacing="0px" class="jtblgrid">
                    <thead>
                        <tr>
                            <th>
                                S.no
                            </th>
                            <th class="BillNo">
                                Communication#
                                <div style="float: left; width: 100%;">
                                    <input id="Alpha*text-lblcommunication" class="formtextbox  search_textbox" type="text"
                                        onkeyup="SearchData(this);"></div>
                            </th>
                            <th class="BillNo">
                                Request#
                                <div style="float: left; width: 100%;">
                                    <input id="txtrequestno" class="formtextbox  search_textbox" type="text" onkeyup="SearchData(this);"></div>
                            </th>
                            <th class="BillNo">
                                Umr No
                                <div style="float: left; width: 100%;">
                                    <input id="Alpha*text-lblumrno" class="formtextbox  search_textbox" type="text" onkeyup="SearchData(this);"></div>
                            </th>
                            <th class="BillNo">
                                Admn No
                                <div style="float: left; width: 100%;">
                                    <input id="Alpha*text-lbladmnno" class="formtextbox  search_textbox" type="text"
                                        onkeyup="SearchData(this);"></div>
                            </th>
                            <th class="BillNo">
                                Bill No
                                <div style="float: left; width: 100%;">
                                    <input id="Alpha*text-lblbillno" class="formtextbox  search_textbox" type="text"
                                        onkeyup="SearchData(this);"></div>
                            </th>
                            <th class="BillNo">
                                Display Name
                                <div style="float: left; width: 100%;">
                                    <input id="Alpha*text-lbldisplayname" class="formtextbox  search_textbox" type="text"
                                        onkeyup="SearchData(this);"></div>
                            </th>
                            <th class="BillNo">
                                Transaction No
                                <div style="float: left; width: 100%;">
                                    <input id="Alpha*text-lbltransactionno" class="formtextbox  search_textbox" type="text"
                                        onkeyup="SearchData(this);"></div>
                            </th>
                            <th class="BillNo">
                                Terminal Name
                                <div style="float: left; width: 100%;">
                                    <input id="Alpha*text-lbltereminal" class="formtextbox  search_textbox" type="text"
                                        onkeyup="SearchData(this);"></div>
                            </th>
                            <th class="BillNo">
                                Payment Mode
                                <div style="float: left; width: 100%;">
                                    <input id="Alpha*text-lblpaymentmode" class="formtextbox  search_textbox" type="text"
                                        onkeyup="SearchData(this);"></div>
                            </th>
                            <th class="BillNo">
                                Amount
                            </th>
                            <th class="BillNo">
                                Mobile NO
                                <div style="float: left; width: 100%;">
                                    <input id="Alpha*text-lblmobileno" class="formtextbox  search_textbox" type="text"
                                        onkeyup="SearchData(this);"></div>
                            </th>
                            <th class="BillNo">
                                Click
                            </th>
                            <th style="display: none" class="BillNo">
                                Data
                            </th>
                            <th style="display: none" class="BillNo">
                                Status
                            </th>
                            <th class="BillNo">
                                Flag
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div>
<div id="divpasQuote" style="display: none;" runat="server" class="masking">
    <div class="cmask">
    </div>
    <div class="clientpopup" style="width: 600px; height: 403px; margin-left: -300px;
        margin-top: -200px;">
        <div class="pop-header">
            <h1>
                <asp:Label ID="Label2" runat="server" Text="PAS Quote Details"></asp:Label>
            </h1>
            <input type="button" id="Button4" class="button" value="&times;" onclick="return OnQuoteDtlsClose();" />
        </div>
        <div class="pop-body grd" style="height: 366px;">
            <div id="divquote" style="height: 330px; overflow: auto;">
                <asp:GridView ID="GvQuote" runat="server" AllowSorting="True" AutoGenerateColumns="False"
                    BorderWidth="0px" CellPadding="4" CssClass="jtblgrid" GridLines="None" Width="100%"
                    EmptyDataText="No Bills Found" EmptyDataRowStyle-Font-Bold="true" EmptyDataRowStyle-ForeColor="Red">
                    <RowStyle CssClass="gridrow" />
                    <AlternatingRowStyle CssClass="gridAlternaterow" />
                    <Columns>
                        <asp:TemplateField HeaderText="S&nbsp;No" HeaderStyle-Width="30px" ItemStyle-Width="30px"
                            HeaderStyle-HorizontalAlign="Left" ItemStyle-HorizontalAlign="Left">
                            <ItemTemplate>
                                <asp:HiddenField ID="hdnitemid" runat="server" Value='<%#Eval("ITEM_ID")%>' />
                                <asp:HiddenField ID="_ITEM_ID" runat="server" Value='<%#Eval("ITEM_ID") %>' />
                                <asp:HiddenField ID="hdncarrierid" runat="server" Value='<%#Eval("CARRIER_ID")%>' />
                                <asp:HiddenField ID="_CARRIER_ID" runat="server" Value='<%#Eval("CARRIER_ID")%>' />
                                <asp:HiddenField ID="hdnplanid" runat="server" Value='<%#Eval("PLAN_ID")%>' />
                                <asp:HiddenField ID="_PLAN_ID" runat="server" Value='<%#Eval("PLAN_ID") %>' />
                                <asp:HiddenField ID="hdnrxitemid" runat="server" />
                                <asp:HiddenField ID="_RX_ITEM_ID" runat="server" />
                                <asp:HiddenField ID="hdnusbtranckone" runat="server" Value='<%#Eval("USB_TRACK_1")%>' />
                                <asp:HiddenField ID="_USB_TRACK_1" runat="server" Value='<%#Eval("USB_TRACK_1")%>' />
                                <asp:HiddenField ID="hdnusbtrancktwo" runat="server" Value='<%#Eval("USB_TRACK_2")%>' />
                                <asp:HiddenField ID="_USB_TRACK_2" runat="server" Value='<%#Eval("USB_TRACK_2")%>' />
                                <asp:Label ID="lblSNo" runat="server" Text='<%# Container.DataItemIndex+1%>' />
                            </ItemTemplate>
                        </asp:TemplateField>
                        <asp:TemplateField HeaderText="Prescription#" HeaderStyle-Width="100px" ItemStyle-Width="100px"
                            HeaderStyle-HorizontalAlign="Left" ItemStyle-HorizontalAlign="Left">
                            <ItemTemplate>
                                <asp:HiddenField ID="hdnpascardID" runat="server" Value='<%#Eval("INS_PAS_CARD_ID") %>' />
                                <asp:HiddenField ID="hdnpassrvID" runat="server" Value='<%#Eval("PAS_SRV_ID") %>' />
                                <asp:Label ID="lblrxitmno" ToolTip="PRESCRIPTION_NO" runat="server" Text='<%#Eval("PRESCRIPTION_NO") %>'></asp:Label>
                            </ItemTemplate>
                        </asp:TemplateField>
                        <asp:TemplateField HeaderText="Service&nbsp;Name" HeaderStyle-Width="200px" ItemStyle-Width="200px"
                            HeaderStyle-HorizontalAlign="Left" ItemStyle-HorizontalAlign="Left">
                            <ItemTemplate>
                                <asp:Label ID="lblitemname" ToolTip="SERVICE_NAME" runat="server" Text='<%#Eval("ITEM_NAME")%>'></asp:Label>
                            </ItemTemplate>
                        </asp:TemplateField>
                        <asp:TemplateField HeaderText="Ins&nbsp;Name" HeaderStyle-HorizontalAlign="Left"
                            ItemStyle-HorizontalAlign="Left" HeaderStyle-Width="80px" ItemStyle-Width="80px">
                            <ItemTemplate>
                                <asp:Label ID="lblinsname" ToolTip="CARRIER_NAME" runat="server" Text='<%#Eval("CARRIER_NAME")%>'></asp:Label>
                            </ItemTemplate>
                        </asp:TemplateField>
                        <asp:TemplateField HeaderText="Auth&nbsp;No" HeaderStyle-HorizontalAlign="Left" ItemStyle-HorizontalAlign="Left"
                            HeaderStyle-Width="80px" ItemStyle-Width="80px">
                            <ItemTemplate>
                                <asp:Label ID="lblauthno" ToolTip="AUTH_NO" runat="server" Text='<%#Eval("AUTH_NO")%>'></asp:Label>
                            </ItemTemplate>
                        </asp:TemplateField>
                        <asp:TemplateField HeaderText="Message" HeaderStyle-Width="200px" ItemStyle-Width="200px"
                            HeaderStyle-HorizontalAlign="Left" ItemStyle-HorizontalAlign="Left">
                            <ItemTemplate>
                                <asp:Label ID="lblrejectdesc" ToolTip="REJECT_DESC" runat="server" Text='<%#Eval("REJECT_DESC")%>'></asp:Label>
                            </ItemTemplate>
                        </asp:TemplateField>
                        <asp:TemplateField HeaderText="Request&nbsp;Amt" HeaderStyle-Width="80px" ItemStyle-Width="80px"
                            HeaderStyle-HorizontalAlign="Right" ItemStyle-HorizontalAlign="Right">
                            <ItemTemplate>
                                <asp:Label ID="lblreqamt" ToolTip="Request Amt" runat="server" Text='<%#Eval("RECEIPT_AMT")%>'></asp:Label>
                            </ItemTemplate>
                        </asp:TemplateField>
                        <asp:TemplateField HeaderText="Ins&nbsp;Amt" HeaderStyle-Width="80px" ItemStyle-Width="80px"
                            HeaderStyle-HorizontalAlign="Right" ItemStyle-HorizontalAlign="Right">
                            <ItemTemplate>
                                <asp:Label ID="lblinsamt" ToolTip="InsAmt" runat="server" Text='<%#Eval("RECEIPT_AMT")%>'></asp:Label>
                            </ItemTemplate>
                        </asp:TemplateField>
                        <asp:TemplateField HeaderText="Co-Pay&nbsp;Amt" HeaderStyle-Width="80px" ItemStyle-Width="80px"
                            HeaderStyle-HorizontalAlign="Right" ItemStyle-HorizontalAlign="Right">
                            <ItemTemplate>
                                <asp:Label ID="lblcopayamt" ToolTip="CoPay Amt" runat="server" Text='<%#Eval("RECEIPT_AMT")%>'></asp:Label>
                            </ItemTemplate>
                        </asp:TemplateField>
                    </Columns>
                </asp:GridView>
            </div>
        </div>
    </div>
</div>
<div id="pnlGridPop_Helthcard" width="600px" style="display: none" runat="server"
    class="masking">
    <div class="cmask">
    </div>
    <div class="clientpopup" style="width: 600px; height: 403px; margin-left: -300px;
        margin-top: -200px;">
        <div class="pop-header">
            <h1>
                <asp:Label ID="lblSrvsN" runat="server" Text=""></asp:Label>
            </h1>
            <input type="button" id="btncancel" class="button" value="&times;" onclick="return btnclose12();" />
        </div>
        <div class="pop-body grd" style="height: 366px;">
            <div id="divhealthcard" style="height: 330px; overflow: auto;">
            </div>
        </div>
    </div>
</div>
<div id="DivAuth" style="display: none" runat="server" class="masking">
    <div class="cmask">
    </div>
    <div class="clientpopup" style="width: 600px; height: 403px; margin-left: -300px;
        margin-top: -200px;">
        <div class="pop-header">
            <h1>
                <asp:Label ID="Label1" runat="server" Text="Authorisation Details"></asp:Label>
            </h1>
            <input type="button" id="btncancelbutton" class="button" value="&times;" onclick="return btnclose14();" />
        </div>
        <div class="pop-body grd" style="height: 366px;">
            <div id="divauthpopup" style="height: 330px; overflow: auto;">
            </div>
        </div>
    </div>
</div>
<div id="DivSettledSwipe" style="display: none" runat="server" class="masking">
    <div class="cmask">
    </div>
    <div class="clientpopup" style="width: 635px; height: 404px; margin-left: -300px;
        margin-top: -200px;">
        <div class="pop-header">
            <h1>
                Settle Pending Transactions
            </h1>
            <asp:Button ID="Button1" runat="server" CssClass="cbutton" Text="&times;" OnClientClick="return CloseSettledSwipePopUp();" />
        </div>
        <div class="pop-body grd" style="height: 368px;">
            <div id="tbl_SettledSwipe" class=" divscroll" style="height: 375px; overflow: auto;">
            </div>
        </div>
    </div>
</div>
<div style="display: none;">
    <asp:HiddenField ID="hdnstpcurrname" runat="server" />
    <asp:HiddenField ID="hdnstpcurrid" runat="server" />
    <asp:HiddenField ID="hdnstpCurrExRate" runat="server" />
    <asp:HiddenField ID="hdnHTMLString1" runat="server" />
    <asp:HiddenField ID="hdnDueAmt" runat="server" />
    <asp:HiddenField ID="hdnNetAmt" runat="server" />
    <asp:HiddenField ID="hdnroundoffval" runat="server" />
    <asp:HiddenField ID="hdnroundtype" runat="server" />
    <asp:HiddenField ID="hdneditamount" runat="server" />
    <asp:HiddenField ID="hdnTranUMRNO" runat="server" />
    <asp:HiddenField ID="hdnTRANADMNNO" runat="server" />
    <asp:HiddenField ID="hdnRecSNo" runat="server" />
    <asp:HiddenField ID="hdnupdatestatus" runat="server" />
    <asp:HiddenField ID="hdnPayAmt" runat="server" />
    <asp:HiddenField ID="hdnCmpnyAmnt" runat="server" />
    <asp:HiddenField ID="hdnReference_type_id" runat="server" />
    <asp:HiddenField ID="hdncardid" runat="server" />
    <asp:HiddenField ID="hdnDocName" runat="server" />
    <asp:HiddenField ID="hdnPatientName" runat="server" />
    <asp:HiddenField ID="hdnRegConcAmt" runat="server" />
    <asp:HiddenField ID="hdnBillingConcAmt" runat="server" />
    <asp:HiddenField ID="hdnMultiPercentage" runat="server" />
    <asp:HiddenField ID="HdnHealthcardid" runat="server" />
    <asp:HiddenField ID="HdnHealthcardno" runat="server" />
    <asp:HiddenField ID="hdnRegconSetting" runat="server" />
    <asp:HiddenField ID="hdnISOSP" runat="server" />
    <asp:HiddenField ID="hdnUserCrdLmt" runat="server" />
    <asp:HiddenField ID="hdnOpConPcnt" runat="server" />
    <asp:HiddenField ID="hdnOpDuePcnt" runat="server" />
    <asp:HiddenField ID="hdnREGConPcnt" runat="server" />
    <asp:HiddenField ID="hdnREGDUEPcnt" runat="server" />
    <asp:HiddenField ID="hdnCONConPcnt" runat="server" />
    <asp:HiddenField ID="hdnCONDUEPcnt" runat="server" />
    <asp:HiddenField ID="hdnIPConPcnt" runat="server" />
    <asp:HiddenField ID="hdnIPDUEPcnt" runat="server" />
    <asp:HiddenField ID="hdnis_active" runat="server" />
    <asp:HiddenField ID="hdnopd_con" runat="server" />
    <asp:HiddenField ID="hdnopd_due" runat="server" />
    <asp:HiddenField ID="hdnmax_ref_amt" runat="server" />
    <asp:HiddenField ID="hdnCompany_ID" runat="server" />
    <asp:HiddenField ID="HdnSessionID" runat="server" />
    <asp:HiddenField ID="hdnHospitalPayment" runat="server" />
    <asp:HiddenField ID="hdncalamtwithsrvchrg" runat="server" />
    <asp:HiddenField ID="hdnamtwithoutsrvchrg" runat="server" />
    <asp:HiddenField ID="hdnConcPercent" runat="server" />
    <asp:HiddenField ID="hdnDuePercent" runat="server" />
    <asp:HiddenField ID="hdnIsAllowUserwiseConc" runat="server" />
    <asp:HiddenField ID="hdnbaseCurrency" runat="server" />
    <asp:HiddenField ID="hdnSrvchargValSetting" runat="server" />
    <asp:HiddenField ID="ddlPatientType" runat="server" />
    <asp:HiddenField ID="hdnEditAmt" runat="server" />
    <asp:HiddenField ID="hdnOPDState" runat="server" />
    <asp:HiddenField ID="hdnotp" runat="server" />
    <asp:HiddenField ID="hdnotprequired" runat="server" />
    <asp:HiddenField ID="hdndateformat" runat="server" />
    <asp:HiddenField ID="hdnEditRowId" runat="server" />
    <asp:HiddenField ID="hdnSrvChrg" runat="server" />
    <asp:HiddenField ID="hdnpmtgatewayurl" runat="server" />
    <asp:HiddenField ID="hdnswipe" runat="server" />
    <asp:HiddenField ID="hdnpaymentcommentid" runat="server" />
    <asp:HiddenField ID="hdnsettle" runat="server" />
    <asp:HiddenField ID="hdnPasIntgrtnReq" runat="server" />
    <asp:HiddenField ID="hdnerdocname" runat="server" />
    <asp:HiddenField ID="hdnPaSEnabled" runat="server" />
    <asp:HiddenField ID="hdnAutoFill_tran" runat="server" />
    <asp:HiddenField ID="hdncurridadmn" runat="server" />
    <asp:HiddenField ID="hdncurridadmnval" runat="server" />
    <asp:HiddenField ID="hdnAdvAmtLimit" runat="server" />
    <asp:HiddenField ID="hdnAdvAmtLmtMand" runat="server" />
    <asp:HiddenField ID="hdnAdmnCashAmt" runat="server" />
    <asp:HiddenField ID="hdnWebCfngAllowCash" Value="N" runat="server" />
    <asp:HiddenField ID="hdnAllowCashTrnd" Value="N" runat="server" />
    <asp:HiddenField ID="hdnMapcurrency" runat="server" />
    <asp:HiddenField ID="hdnAdjustableAdvAmt" runat="server" />
    <asp:HiddenField ID="hdnisallowgst" runat="server" />
    <asp:HiddenField ID="hdnapppaymentgroupid" runat="server" />
    <asp:HiddenField ID="hdnPlutusTransactionReferenceID" runat="server" />
    <asp:HiddenField ID="hdnmachinepinelabDeviceNo" runat="server" />
    <asp:HiddenField ID="hdnpinelabuploadurl" runat="server" />
    <asp:HiddenField ID="hdnpinelabapproveurl" runat="server" />
    <asp:HiddenField ID="hdnpinelabcancelurl" runat="server" />
    <asp:HiddenField ID="hdnpinelabintgreq" runat="server" />
    <asp:HiddenField ID="hdnpaytmint" runat="server" />
    <asp:HiddenField ID="hdnempasaintgreq" runat="server" />
    <asp:HiddenField ID="hdnrefundplutusreferenceid" runat="server" />
    <asp:HiddenField ID="hdncommunicationno" runat="server" />
    <asp:HiddenField ID="hdnbanCC_CARD_NO" runat="server" />
    <asp:HiddenField ID="hdnbanCC_ISSUE_BANK_ID" runat="server" />
    <asp:HiddenField ID="hdnbanCC_amount" runat="server" />
    <asp:HiddenField ID="hdnbanCC_CARD_TYPE_ID" runat="server" />
    <asp:HiddenField ID="hdnbanPAYMENT_MODE_ID" runat="server" />
    <asp:HiddenField ID="hbnallowpinlabserviceforrefund" runat="server" />
    <asp:HiddenField ID="hdnempesaauthorzationurl" runat="server" />
    <asp:HiddenField ID="hdnempesasimulationurl" runat="server" />
    <asp:HiddenField ID="hdnempesaqueryurl" runat="server" />
    <asp:HiddenField ID="hdnempesaAuthKeyvalue" runat="server" />
    <asp:HiddenField ID="hdnempasapasskey" runat="server" />
    <asp:HiddenField ID="hdnprocesscheck" Value="N" runat="server" />
    <asp:HiddenField ID="hdnExpiredateman" Value="N" runat="server" />
    <asp:HiddenField ID="hdncurrenydesc" runat="server" />
    <asp:HiddenField ID="hdnbanknamemandateswipe" runat="server" />
    <asp:HiddenField ID="hdnpinelabautosave" runat="server" />
    <asp:HiddenField ID="hdnecitizenip" runat="server" />
    <asp:HiddenField ID="hdnecitizennotificationurl" runat="server" />
    <asp:HiddenField ID="hdnecitizenpictureurl" runat="server" />
    <asp:HiddenField ID="hdnecitizenapiurl" runat="server" />
    <asp:HiddenField ID="hdnCardNoMand" runat="server" />
    <asp:HiddenField ID="hdnCardRefNoMand" runat="server" />
</div>
<script type="text/javascript">

    function ClearTranctionadd() {
        document.getElementById('<%= txtamt.ClientID %>').value = '';
        document.getElementById('<%= txtExpDt.ClientID %>').value = '';
        document.getElementById('<%= txtCurrAmt.ClientID %>').value = '';
        document.getElementById('<%= txtreqamtkyd.ClientID %>').value = '';
        document.getElementById('<%= txtCardNo.ClientID %>').value = '';
        document.getElementById('<%= txtAuthCode.ClientID %>').value = '';
        document.getElementById('<%= txtAuthCode.ClientID %>').value = '';
        document.getElementById('' + ctrlcom + '_ReceiptControl2_UCchequeAuth_txtSearchControl').value = '';
        document.getElementById('' + ctrlcom + '_ReceiptControl2_hdncheckAuthID').value = '';
        document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnauthcd').value = '';
        document.getElementById('<%= txtChangeKyd.ClientID %>').value = '';
        document.getElementById('<%= ddlCardType.ClientID %>').selectedIndex = 0;
        document.getElementById('<%= ddlBankName.ClientID %>').selectedIndex = 0;
        document.getElementById('<%= txtsrvcharges.ClientID %>').value = '';
        var currid = document.getElementById('<%= hdnstpcurrid.ClientID %>').value;
        var currcd = document.getElementById('<%= hdnstpcurrname.ClientID %>').value;
        /*        document.getElementById('<%= ddlCurrency.ClientID %>').selectedValue = currid;
        var currindex = document.getElementById('<%= ddlCurrency.ClientID %>').selectedIndex;
        document.getElementById('<%= ddlCurrency.ClientID %>')[currindex].text = currcd;*/
        var currexrate = document.getElementById('<%= hdnstpCurrExRate.ClientID %>').value;
        if (currexrate == '' || currexrate == null || currexrate == undefined) { currexrate = 1; }
        document.getElementById('<%= ddlCurrency.ClientID %>').value = currid;
        document.getElementById('<%= lblcurrcd.ClientID %>').value = currcd;
        document.getElementById('<%= lblChcurr.ClientID %>').value = currcd;
        document.getElementById('<%= txtTenderedAmt.ClientID %>').value = '';
        document.getElementById('<%= txtExchangeRate.ClientID %>').value = parseFloat(currexrate);
        TenderedColorCode();
        document.getElementById('<%= hdnupdatestatus.ClientID %>').value == 'N';
        var form_name = document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnDocName').value;
        if (form_name == 'OUTSTDNGDUE' || form_name == 'IpAdvance' || form_name == 'PREADVANCE') { // || form_name == 'Refund' 
        }
        else {
            document.getElementById('<%= txtreqamtkyd.ClientID %>').value = document.getElementById('<%= txtpatdue.ClientID %>').value;
        }
    }
    function TenderedColorCode() {
        var _due = document.getElementById('<%= txtpatdue.ClientID  %>').value;
        if (_due == null || _due == undefined || _due == "" || _due == "NaN" || isNaN(_due)) { _due = '0'; }
        if (parseFloat(_due) > 0) {
            document.getElementById('<%= txtTenderedAmt.ClientID %>').className = 'red';
        }
        else {
            document.getElementById('<%= txtTenderedAmt.ClientID %>').className = 'grey';
        }
    }
    function DisableControl1() {
        EnableControls();
        ClearTranctions();
    }
    //    function checkauthdisplaymode() {
    //        
    //        if (document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlPaymentType').value == 2) {
    //            $('[id*=divchequeauth]').css('display', 'block');
    //            $('[id*=divauthcd]').css('display', 'none');
    //        }
    //        else {
    //            $('[id*=divchequeauth]').css('display', 'none');
    //            $('[id*=divauthcd]').css('display', 'block');
    //        }

    //    }
    function DisableControl() {
        document.getElementById('<%= txtExpDt.ClientID %>').disabled = true;
        document.getElementById('<%= txtCurrAmt.ClientID %>').className = "ReadOnlyTextBox";
        document.getElementById('<%= txtreqamtkyd.ClientID %>').disabled = true;
        document.getElementById('<%= txtreqamtkyd.ClientID %>').className = "ReadOnlyTextBox";
        document.getElementById('<%= txtCardNo.ClientID %>').disabled = true;
        document.getElementById('<%= txtCardNo.ClientID %>').className = "ReadOnlyTextBox";
        document.getElementById('<%= txtCurrency.ClientID %>').disabled = true;
        document.getElementById('<%= txtCurrency.ClientID %>').className = "ReadOnlyTextBox";
        document.getElementById('<%= txtAuthCode.ClientID %>').disabled = true;
        document.getElementById('<%= txtAuthCode.ClientID %>').className = "ReadOnlyTextBox";
        document.getElementById('<%= txtChangeKyd.ClientID %>').disabled = true;
        document.getElementById('<%= txtChangeKyd.ClientID %>').className = "ReadOnlyTextBox";
        document.getElementById('<%= ddlCardType.ClientID %>').disabled = true;
        document.getElementById('<%= ddlBankName.ClientID %>').disabled = true;
        document.getElementById('<%= ddlCurrency.ClientID %>').disabled = true;
        //  document.getElementById('<%= txtTenderedAmt.ClientID %>').disabled = true;
        //   document.getElementById('<%= txtTenderedAmt.ClientID %>').className = "formtextbox";

        ClearTranctions();
    }
    function ClearTranctions() {
        document.getElementById('<%= txtamt.ClientID %>').value = '';
        document.getElementById('<%= txtExpDt.ClientID %>').value = '';
        document.getElementById('<%= txtCurrAmt.ClientID %>').value = '';
        document.getElementById('<%= txtsrvcharges.ClientID %>').value = '';
        document.getElementById('<%= txtCardNo.ClientID %>').value = '';
        document.getElementById('<%= txtAuthCode.ClientID %>').value = '';
        document.getElementById('<%= txtChangeKyd.ClientID %>').value = '';
        document.getElementById('<%= ddlCardType.ClientID %>').selectedIndex = 0;
        document.getElementById('<%= ddlBankName.ClientID %>').selectedIndex = 0;
        document.getElementById('<%= txtTenderedAmt.ClientID %>').value = '';
        document.getElementById('<%= txtchequedt.ClientID %>').value = '';
        document.getElementById('<%= txtchequerealizedt.ClientID %>').value = '';
        document.getElementById('<%= txtcqissuername.ClientID %>').value = '';
        TenderedColorCode();
        document.getElementById('<%= hdnupdatestatus.ClientID %>').value == 'N';
        document.getElementById('<%= txtAdvCardHldrName.ClientID %>').value = '';
    }
    function ChangeCardType() {
        if (document.getElementById('<%= ddlCardType.ClientID %>').selectedIndex == 0) {
            document.getElementById('<%= ddlCardType.ClientID %>').className = 'red';
        }
        else {
            document.getElementById('<%= ddlCardType.ClientID %>').className = 'grey';
        }
    }
    function ChangeBankName() {
        if (document.getElementById('<%= ddlBankName.ClientID %>').selectedIndex == 0) {
            document.getElementById('<%= ddlBankName.ClientID %>').className = 'red';
        }
        else {
            document.getElementById('<%= ddlBankName.ClientID %>').className = 'grey';
        }
    }


    function ClearTextboxTest(ev) {
        var CurrentRowIndex = 0;
        if (ev.value == 0 || ev.value == '') {
            arr = [];
        }
        if (ev.value == 0 || ev.value == '0' || ev.value == "NaN" || ev.value == undefined || ev.value == null) {
            ev.value = '';
        }
    }
    function ClearPointArray(obj) {
        arr = [];
    }
    function TestCondition(evt, obj) {
        var _val = '';
        if (evt == "Perecent" || evt == "Amount") {
            _val = obj.value;
        }
        else {
            _val = document.getElementById(obj.id).value;
        }

        if (_val == '' || _val == 0) {
            arr = [];
        }
        if (_val.indexOf('.') == -1) {
            arr = [];
        }
    }

</script>
<script type="text/javascript">
    _.templateSettings = {
        evaluate: /\{\{(.+?)\}\}/g,
        interpolate: /\{\{=(.+?)\}\}/g,
        escape: /\{\{-(.+?)\}\}/g
    };
    
</script>
<script type="text/html" id="tbodyapproveStatment">
{{ _.each(_dataSourcependingStmtGrid,function(item,key,list){  }}
<tr  data-row="{{=key+1}}" class="{{=(key%2==0?'gridAlternaterow':'gridrow')}}" onpaste="return false;"  style="{{=(parseFloat(item.AMOUNT)>'0') ? 'background-color: rgba(96, 150, 135, 0.37);':""}}">
<td>
<LABEL id="lblSNo-{{=key}}"> {{=key+1}}</LABEL>
<INPUT id="hdnpaymentmodeid-{{=key}}"   data-value="{{=item.PAYMENT_MODE_ID}}" value="{{=item.PAYMENT_MODE_ID}}"  type="hidden"/>  
<INPUT id="hdnplutusreferenceidid-{{=key}}"   data-value="{{=item.PLUTUS_REFERENCE_ID}}" value="{{=item.PLUTUS_REFERENCE_ID}}"  type="hidden"/>  
<INPUT id="hdnplutusval-{{=key}}"   data-value="{{=item.RESPONSE_JSON}}" value="{{=item.RESPONSE_JSON}}"  type="hidden"/> 
<INPUT id="hdntransactionid-{{=key}}"   data-value="{{=item.TRANSACTION_ID}}" value="{{=item.TRANSACTION_ID}}"  type="hidden"/> 
</td>

<td>
<LABEL id="lblcommunication-{{=key}}" > {{=item.COMMUNICATION_NO}}</LABEL>
</td>
<td>
<LABEL id="txtrequestno-{{=key}}" > {{=item.PLUTUS_REFERENCE_ID}}</LABEL>
</td>
<td>
<LABEL id="lblumrno-{{=key}}" > {{=item.UMR_NO}}</LABEL>
</td>
<td>
<LABEL id="lbladmnno-{{=key}}" > {{=item.ADMN_NO}}</LABEL>
</td>
<td>
<LABEL id="lblbillno-{{=key}}" > {{=item.BILL_NO}}</LABEL>
</td>
<td>
<LABEL id="lbldisplayname-{{=key}}" > {{=item.DISPLAY_NAME}}</LABEL>
</td>
<td>
<LABEL id="lbltransactionno-{{=key}}" > {{=item.TRANSACTION_NO}}</LABEL>
</td>

<td>
<LABEL id="lbltereminal-{{=key}}" > {{=item.MAP_TERMINAL_NAME}}</LABEL>
</td>
<td>
<LABEL id="lblpaymentmode-{{=key}}" > {{=item.PAYMENT_MODE_NAME}}</LABEL>
</td>
<td class="Aright">
<LABEL id="lblamount-{{=key}}">{{=item.AMOUNT}}</LABEL>
</td>
<td>
<LABEL id="lblmobileno-{{=key}}" > {{=item.MOBILE_NO1}}</LABEL>
</td>

<td>
<INPUT id="APPLY-{{=key}}"  type="button" value="Apply" onclick="return applyapproveStatments(this);"/>  
</td>
<td style='display:none'>
<LABEL id="lblorgdata-{{=key}}" >{{=item.RESPONSE_JSON}}</LABEL>
</td>
<td>
<LABEL id="lblprocess-{{=key}}" > {{=item.FLAG}}</LABEL>
</td>

</tr>
{{ }) }}

</script>
<script type="text/html" id="tbodyStatment">
{{ _.each(_dataSourceStmtGrid,function(item,key,list){  }}
<tr  data-row="{{=key+1}}" class="{{=(key%2==0?'gridAlternaterow':'gridrow')}}" onpaste="return false;"  style="{{=(parseFloat(item.AMOUNT)>'0') ? 'background-color: rgba(96, 150, 135, 0.37);':""}}">
<td>
<LABEL id="lblSNo-{{=key}}"> {{=key+1}}</LABEL>
<INPUT id="hdnpaymentmodeid-{{=key}}"   data-value="{{=item.PAYMENT_MODE_ID}}" value="{{=item.PAYMENT_MODE_ID}}"  type="hidden"/>  
<INPUT id="hdnplutusreferenceidid-{{=key}}"   data-value="{{=item.PLUTUS_REFERENCE_ID}}" value="{{=item.PLUTUS_REFERENCE_ID}}"  type="hidden"/>  
<INPUT id="hdnplutusbankid-{{=key}}"   data-value="{{=item.CC_ISSUE_BANK_NAME}}" value="{{=item.CC_ISSUE_BANK_NAME}}"  type="hidden"/>  
<INPUT id="hdnCCbanktypeidid-{{=key}}"   data-value="{{=item.CC_CARD_TYPE_ID}}" value="{{=item.CC_CARD_TYPE_ID}}"  type="hidden"/>  
</td>
<td>
<LABEL id="lblpaymentmode-{{=key}}" > {{=item.PAYMENT_MODE_NAME}}</LABEL>
</td>
<td class="Aright">
<LABEL id="lblamount-{{=key}}">{{=item.AMOUNT}}</LABEL>
</td>
<td class="Aright">
<LABEL id="lblmiccardno-{{=key}}">{{=item.CC_CARD_NO}}</LABEL>
</td>
<td class="Aright">
<LABEL id="lblcomunicationo-{{=key}}">{{=item.COMMUNICATION_NO}}</LABEL>
</td>
<td class="Aright">
<LABEL id="lblplutusadmnno-{{=key}}">{{=item.ADMN_NO}}</LABEL>
</td>
<td>
<INPUT id="APPLY-{{=key}}"  type="button" value="Apply" onclick="return applydataassign(this);"/>  
</td>
</tr>
{{ }) }}

</script>
