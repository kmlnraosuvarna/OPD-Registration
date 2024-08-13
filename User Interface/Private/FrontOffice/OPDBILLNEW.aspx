<%@ Page Title="" Language="C#" MasterPageFile="~/Private/Masters/Universal.master"
    AutoEventWireup="true" CodeFile="OPDBILLNEW.aspx.cs" Inherits="Private_FrontOffice_OPDBILLNEW" %>

<%@ Register Src="~/Private/UserControls/LookUp.ascx" TagName="Search" TagPrefix="Lookup" %>
<%@ Register Src="~/Private/FrontOffice/FOUserControls/OPDAddressUserControlNEW.ascx"
    TagName="AddressDetails" TagPrefix="uc2" %>
<%-- <%@ Register Src="~/Private/UserControls/AddressDetails_new.ascx" TagName="AddressDetails"
    TagPrefix="uc2" %>--%>
<%@ Register Src="~/Private/UserControls/EmployerInfo.ascx" TagName="EmployerInfo"
    TagPrefix="ucE" %>
<%@ Register Src="~/Private/UserControls/DateofBirth_new2.ascx" TagName="NewAgeCalUsercontrol2"
    TagPrefix="ucnew" %>
<%@ Register Src="~/Private/UserControls/DateofBirth_new.ascx" TagName="NewAgeCalUsercontrol"
    TagPrefix="ucnew" %>
<%@ Register Src="~/Private/UserControls/PageHeaderControlT.ascx" TagName="PageHeaderControl"
    TagPrefix="HeaderControl" %>
<%@ Register Src="~/Private/FrontOffice/FOUserControls/FinalPaymentControl.ascx"
    TagName="ReceiptControl" TagPrefix="uc6" %>
<%@ Register Src="~/Private/UserControls/New_ReferalUserControl.ascx" TagName="ReferalUserControl"
    TagPrefix="uc11" %>
<%@ Register Src="~/Private/FrontOffice/FOUserControls/PatientBannerControl.ascx"
    TagName="PatientControl" TagPrefix="uc4" %>
<%@ Register Src="~/Private/UserControls/OPCorporateControl.ascx" TagName="OPCorporate"
    TagPrefix="uc7" %>
<%@ Register Src="~/Private/FrontOffice/FOUserControls/ServicesPostingIn_BillingUc.ascx"
    TagName="Services" TagPrefix="Op" %>
<%@ Register Assembly="AjaxControlToolkit" Namespace="AjaxControlToolkit" TagPrefix="ajaxToolkit" %>
<%@ Register Src="~/Private/UserControls/PhotouploadControl.ascx" TagName="ImageUploadControl"
    TagPrefix="uc9" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="Server">
    <script type="text/javascript" src="../../Assets/js/jquery-ui.min.js"></script>
    <script type="text/javascript" src="../../JSScript/DashBoardScripts/TextBoxAutoCompletion.js"></script>
    <link href="../../JSScript/View/select2.mim.css" rel="stylesheet" type="text/css" />
    <script type="text/javascript">
    var ctrlcom = 'ctl00_ContentPlaceHolder1';
function IDProofTextValidations(ev) {
    var _val = document.getElementById(ev.id).value;
    if (_val == '3') {
        $('[id$=txtSSN]').attr("onkeypress", "return NumCharsWithSpace1(event);");
        $('[id$=txtSSN]').attr("maxlength", "24");
    }
    else if (_val == '8' || _val == '7' || _val == '5') {
        $('[id$=txtSSN]').attr("onkeypress", "");
        $('[id$=txtSSN]').attr("maxlength", "10");
    }
    else if (_val == '4' || _val == '6') {
        $('[id$=txtSSN]').attr("onkeypress", "");
        $('[id$=txtSSN]').attr("maxlength", "16");
    }
    else if (_val == '1') {
        if(document.getElementById('ctl00_ContentPlaceHolder1_hdnClientName').value.toLowerCase() == 'asram')
        {
            $('[id$=txtSSN]').attr("onkeypress", "");
            $('[id$=txtSSN]').attr("maxlength", "14");
        }
        else{
            $('[id$=txtSSN]').attr("onkeypress", "");
            $('[id$=txtSSN]').attr("maxlength", "9");
        }
    }
    else if (_val == '2') {
        $('[id$=txtSSN]').attr("onkeypress", "");
        $('[id$=txtSSN]').attr("maxlength", "12");
    }
}
    function Validproof() {
    var ssnvalue = document.getElementById('ctl00_ContentPlaceHolder1_txtSSN').value;
    var _proofid = document.getElementById('ctl00_ContentPlaceHolder1_ddlproofid').value;

    if (_proofid != "0") {
        if (ssnvalue != "") {
            document.getElementById('ctl00_ContentPlaceHolder1_txtSSN').className = 'grey';
        } else {
            document.getElementById('ctl00_ContentPlaceHolder1_txtSSN').className = 'red';
        }
    }
    if (_proofid == 2) {
        if (ssnvalue.length < 12) {
            $(".stoast").toastText("warning", "Plese Enter 12 Digit Number", 5, 3);
        }
    }
}
function NumCharsWithSpace1(evt) {
    if (document.getElementById('ctl00_ContentPlaceHolder1_ddlproofid').value != 8 && document.getElementById('ctl00_ContentPlaceHolder1_ddlproofid').value != 4) {
        evt = (evt) ? evt : event;
        var charCode = (evt.charCode) ? evt.charCode : ((evt.keyCode) ? evt.keyCode : ((evt.which) ? evt.which : 0));
        if ((charCode == 8 || charCode == 9 || charCode == 32 || charCode == 37 || charCode == 39 || charCode == 46) || (charCode > 64 && charCode < 91) || (charCode > 47 && charCode < 58 && evt.shiftKey == false) || (charCode > 97 && charCode < 106)) {
            return true;
        }
        return false;
    }
}function CheckProofIDStatus(obj) {

    var ProofID = $('[id*=ddlproofid]').val();
    var ProofName = $('[id*=txtSSN]').val();
    if (ProofID == '' || ProofID == null || ProofID == undefined) { ProofID = 0; }
    if (ProofName == '' || ProofName == null || ProofName == undefined) { ProofName = ''; }
    if (obj == '' || obj == null || obj == undefined) { obj = ''; }
    if (document.getElementById('ctl00_ContentPlaceHolder1_hdnClientName').value.toLowerCase() == 'ssbgmc') {
        if (obj == 'REG') {
            if (ProofID == 3) { ProofID = 0; }
        }
    }
    if (parseInt(ProofID) > 0 && ProofName != '') {

        if (obj == 'PRE') { /* Pre Registration Condition Starts */
            GetAsync(
                    "Private/FrontOffice/OPDBILLNEW.aspx/CheckIdProofStatus",
                    { ProofID: ProofID, ProofName: ProofName, obj: '' },
                    function (jdata) {

                        if (jdata != null) {
                            if (jdata.d != null) {
                                if (jdata.d[0].STATUS == 'Y') {
                                    document.getElementById('' + ctrlcom + '_txtSSN').value = '';
                                    $(".stoast").toastText("Info", "This Card number is already Registered !", 5, 3);
                                    return false;
                                }
                                else { /* Pre Registration Starts */
                                    GetAsync(
                                                        "Private/FrontOffice/OPDBILLNEW.aspx/CheckIdProofStatus",
                                                        { ProofID: ProofID, ProofName: ProofName, obj: obj },
                                                        function (jdata) {

                                                            if (jdata != null) {
                                                                if (jdata.d != null) {
                                                                    if (jdata.d[0].STATUS == 'Y') {
                                                                        if ($('[id*=hdnAdharNo]').val() != $('[id*=txtSSN]').val()) {
                                                                            document.getElementById('' + ctrlcom + '_txtSSN').value = '';
                                                                            $(".stoast").toastText("Info", "This Card number is already exists.!", 5, 3);
                                                                            return false;
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        },
                                                        function (jqXHR, textStatus, errorThrown) {
                                                            $(".stoast").toastText("Warning", errorThrown, 5, 3);
                                                        });

                                } /* Pre Registration Ends */
                            }
                        }
                    },
                    function (jqXHR, textStatus, errorThrown) {
                        $(".stoast").toastText("Warning", errorThrown, 5, 3);
                    });

        } /* Pre Registration Condition Ends */
                else { /* Reg Condition Starts */
    
            GetAsync(
                    "Private/FrontOffice/OPDBILLNEW.aspx/CheckIdProofStatus",
                    { ProofID: ProofID, ProofName: ProofName, obj: obj },
                    function (jdata) {

                        if (jdata != null) {
                            if (jdata.d != null) { /* reg condition starts */
                                if (jdata.d[0].STATUS == 'Y') {
                                    document.getElementById('' + ctrlcom + '_txtSSN').value = '';
                                    $(".stoast").toastText("Info", "This Card number is already exists.!", 5, 3);
                                    return false;
                                } /* Reg Condition Ends */
                                else {/* Pre Reg Ends */
                                    GetAsync(
                                                        "Private/FrontOffice/OPDBILLNEW.aspx/CheckIdProofStatus",
                                                        { ProofID: ProofID, ProofName: ProofName, obj: 'PRE' },
                                                        function (jdata) {

                                                            if (jdata != null) {
                                                                if (jdata.d != null) {
                                                                    if (jdata.d[0].STATUS == 'Y') {
                                                                        if (obj == 'REG') {
                                                                            var pre_reg_no = $('#'+ ctrlcom + '_UCprereg_txtSearchControl').val();
                                                                            if (pre_reg_no == undefined || pre_reg_no == null || pre_reg_no == '') { pre_reg_no = ''; }
                                                                            if (pre_reg_no == '') {
                                                                                document.getElementById('' + ctrlcom + '_txtSSN').value = '';
                                                                                $(".stoast").toastText("Info", "This Card number is already exists In Pre Registration ,Please Select Through Pre-Registration !", 5, 3);
                                                                                return false;
                                                                            }
                                                                        }
                                                                        else {
                                                                            document.getElementById('' + ctrlcom + '_txtSSN').value = '';
                                                                            $(".stoast").toastText("Info", "This Card number is already exists In Pre Registration ,Please Select Through Pre-Registration !", 5, 3);
                                                                            return false;
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        },
                                                        function (jqXHR, textStatus, errorThrown) {
                                                            $(".stoast").toastText("Warning", errorThrown, 5, 3);
                                                        });
                                } /* Pre Reg Ends */
                            }
                        }
                    },
                    function (jqXHR, textStatus, errorThrown) {
                        $(".stoast").toastText("Warning", errorThrown, 5, 3);
                    });
        } /* Reg Condition Ends */
    }
}
function Idprofflength(ev) {

    var ssnvalue = document.getElementById('ctl00_ContentPlaceHolder1_txtSSN');
    var ssnvalue1 = document.getElementById('ctl00_ContentPlaceHolder1_txtSSN').value;
    var _proofid = document.getElementById('ctl00_ContentPlaceHolder1_ddlproofid').value;
    if (_proofid == 2) {
        if (ssnvalue1.length > 12) {
            RemoveLastIndx1(ssnvalue);
        }
    }
    if (_proofid == 4) {
        if (ssnvalue1.length > 16) {
            RemoveLastIndx1(ssnvalue);
        }
    }
    if (_proofid == 5) {
        if (ssnvalue1.length > 10) {
            RemoveLastIndx1(ssnvalue);
        }
    }
    if (_proofid == 6) {
        if (ssnvalue1.length > 8) {
            RemoveLastIndx1(ssnvalue);
        }
    }
    if (_proofid == 7) {
        if (ssnvalue1.length > 15) {
            RemoveLastIndx1(ssnvalue);
        }
    }
    if (_proofid == 8) {
        if (ssnvalue1.length > 10) {
            RemoveLastIndx1(ssnvalue);
        }
    }
    else {
        return true;
    }
}
    function visacolourchange() {

    if (document.getElementById('ctl00_ContentPlaceHolder1_ddlVisatype').value != "0") {
        document.getElementById('ctl00_ContentPlaceHolder1_ddlVisatype').className = 'grey';
    }
    if (document.getElementById('ctl00_ContentPlaceHolder1_txtVisaControlNo').value != "") {
        document.getElementById('ctl00_ContentPlaceHolder1_txtVisaControlNo').className = 'grey';
    }
    /* if (document.getElementById('ctl00_ContentPlaceHolder1_txtVisaIssuedBy').value != "") {
    document.getElementById('ctl00_ContentPlaceHolder1_txtVisaIssuedBy').style.border = '';
    }*/
    if (document.getElementById('ctl00_ContentPlaceHolder1_txtVisaIssueDt').value != "") {
        document.getElementById('ctl00_ContentPlaceHolder1_txtVisaIssueDt').className = 'grey';
    }
    if (document.getElementById('ctl00_ContentPlaceHolder1_txtVisaExpDt').value != "") {
        document.getElementById('ctl00_ContentPlaceHolder1_txtVisaExpDt').className = 'grey';
    }
    else {
        return false;
    }
}
    function onissuedatsel(sender, eventArgs) {
    var results = eval('(' + eventArgs.get_value() + ')');
      document.getElementById('ctl00_ContentPlaceHolder1_HiddenField4').value = '';
    document.getElementById('ctl00_ContentPlaceHolder1_HiddenField4').value =results.CITY_ID;
}
    function healthcardnewfileds(sel_val){
    
      document.getElementById('ctl00_ContentPlaceHolder1_umrPatientDetails_hdncncsn_rule_id').value=sel_val.split(',')[1];
  document.getElementById('ctl00_ContentPlaceHolder1_umrPatientDetails_hdnhealthcardeligibleamt').value=sel_val.split(',')[4]
    document.getElementById('ctl00_ContentPlaceHolder1_umrPatientDetails_hdnhealthdepencyid').value=sel_val.split(',')[0];
    }
      function Assignisdcode() {
          
            var isdcode = document.getElementById('ctl00_ContentPlaceHolder1_Address1_hdnISDCode').value;
              if (isdcode == undefined || isdcode == null || isdcode == "NaN--NaN" || isdcode == '' || isdcode == NaN) {
        isdcode = '';
    }
            $('#isdcodemobile1').text(isdcode);
            $('#isdcodemobile3').text(isdcode);
            

            CheckCombinationValidations();   /* patient validation purpose don't remove . if u want to remove contact to G raju  */

                 if (document.getElementById('ctl00_ContentPlaceHolder1_hdnClientName').value.toLowerCase() == 'ssbgmc') {
                ddlregtype = document.getElementById('ctl00_ContentPlaceHolder1_ddlRegType');
                ddlregtypeIndex = document.getElementById('ctl00_ContentPlaceHolder1_ddlRegType').selectedIndex;
                var val = ddlregtypeIndex;
                if (document.getElementById('ctl00_ContentPlaceHolder1_Address1_rdbtndefstate_1').checked) {
                    
                    var mytext = 'NON GOANS';
                    $('#ctl00_ContentPlaceHolder1_UCServices_ddlpatcat option').map(function () {

                        if ($(this).text() == mytext) return this;


                    }).prop('selected', 'selected');

                    if (ddlregtype[val].innerHTML.toLowerCase() == 'foreign') {
                        document.getElementById('ctl00_ContentPlaceHolder1_UCServices_ddlpatcat').disabled = true;
                    } else {
                        document.getElementById('ctl00_ContentPlaceHolder1_UCServices_ddlpatcat').disabled = false;

                    }
                    var setpatcat = $('[id*=hdnpatcatpolicy]').val(); //company policis
                    var _ispatcat = $('[id*=hdnallowtariffslcn]').val().toLowerCase();
                    if (setpatcat == '' || setpatcat == null || setpatcat == undefined || setpatcat == 'undefined') setpatcat = 0;
                    var newpatcat = $("#ctl00_ContentPlaceHolder1_UCServices_ddlpatcat").val();
                    if (newpatcat == '' || newpatcat == null || newpatcat == undefined || newpatcat == 'undefined') newpatcat = '';
                    if (_ispatcat == 'true' && newpatcat == '') {

                        $("#ctl00_ContentPlaceHolder1_UCServices_ddlpatcat").val(setpatcat);
                        document.getElementById('ctl00_ContentPlaceHolder1_UCServices_ddlpatcat').disabled = false;
                    }
                     ChangeTarifByPatcat();
                } else {

                    if (ddlregtype[val].innerHTML.toLowerCase() == 'foreign') {
                        var mytext = 'NON GOANS';
                        $('#ctl00_ContentPlaceHolder1_UCServices_ddlpatcat option').map(function () {

                            if ($(this).text() == mytext) return this;


                        }).prop('selected', 'selected');
                        document.getElementById('ctl00_ContentPlaceHolder1_UCServices_ddlpatcat').disabled = true;
                    } else {
                    if ($('#A1')[0].className == 'root1 select'){
                         if ($('#ctl00_ContentPlaceHolder1_Address1_StateUserControl1').val().toLowerCase() == 'goa') { var mytext = 'GOANS' } else { var mytext = 'NON GOANS'; }
                         }else {
                        
                        var mytext = 'NON GOANS'; 
                        
                        }

                

                        $('#ctl00_ContentPlaceHolder1_UCServices_ddlpatcat option').map(function () {

                            if ($(this).text() == mytext) return this;


                        }).prop('selected', 'selected');
                        document.getElementById('ctl00_ContentPlaceHolder1_UCServices_ddlpatcat').disabled = false;

                    }
                    var setpatcat = $('[id*=hdnpatcatpolicy]').val(); //company policis
                    var _ispatcat = $('[id*=hdnallowtariffslcn]').val().toLowerCase();
                    if (setpatcat == '' || setpatcat == null || setpatcat == undefined || setpatcat == 'undefined') setpatcat = 0;
                    var newpatcat = $("#ctl00_ContentPlaceHolder1_UCServices_ddlpatcat").val();
                    if (newpatcat == '' || newpatcat == null || newpatcat == undefined || newpatcat == 'undefined') newpatcat = '';

                    if (_ispatcat == 'true' && newpatcat == '') {

                        $("#ctl00_ContentPlaceHolder1_UCServices_ddlpatcat").val(setpatcat);
                        document.getElementById('ctl00_ContentPlaceHolder1_UCServices_ddlpatcat').disabled = false;
                    }
                 ChangeTarifByPatcat();
                
                }
            }


         }
          function Clearisdcode() {
            $('#isdcodemobile1').text('');
            $('#isdcodemobile3').text('');
            
            
               if (document.getElementById('ctl00_ContentPlaceHolder1_hdnClientName').value.toLowerCase() == 'ssbgmc') {
                 $("#A3").removeClass("select");
                $("#A2").removeClass("select");
                $("#A1").addClass("select");
                $('#divAddressType')[0].style.display = "none";
            
                GlobalMyAddress2 = '';
                GlobalMyAddress3 = '';              
               $('#ctl00_ContentPlaceHolder1_Address1_AreaUserControl1_txtSearchControl').addClass('red');
               $('#ctl00_ContentPlaceHolder1_Address1_AreaUserControl1_txtSearchControl').removeClass('red');

                document.getElementById('' + ctrlcom + '_Address1_hdnnationaladdr').value = "N";
            }


        }
    function Calculateempperpatper(obj) {
            var totPatConPer = 0;
            var PatTotalgrossamt = 0;
            var cmpTotalGrossAmt = 0;
            var PatNetAmt = 0;
            var cmpNetAmt = 0;
            var PatCNCAmt = 0;
            var cmpCNCAmt = 0;
            var cmpper = $(obj).val();
            var Totpattaxamt = 0;
            var Totcmptaxamt = 0;
            var credit_limit = $('#' + ctrlcom + '_uccorporate_txtcreditlimitamt').val();
            if (credit_limit == '' || credit_limit == undefined || credit_limit == null || isNaN(credit_limit)) { credit_limit = "0"; }
            var cmp_t_net_amt=0;

            if (cmpper == '' || cmpper == undefined || cmpper == null || isNaN(cmpper)) { cmpper = "0"; }
            if (parseFloat(cmpper) > 100) {
                cmpper = 100;
                document.getElementById('' + ctrlcom + '_txtCorpPercentage').value = cmpper;
            }
            document.getElementById('' + ctrlcom + '_hdnOrgPer').value = cmpper;
            var empper = 100 - parseFloat(cmpper);
            document.getElementById('' + ctrlcom + '_txtEmpPercentage').value = empper;
            document.getElementById('' + ctrlcom + '_hdnEmpPer').value = empper;
            $("table[id*=UCServices_gvServices] tr:has(td)").each(function () {
                var RowIndexForGrid = $(this)[0].rowIndex;
                
                var Amount = $('[id$=UCServices_gvServices] tr').filter(':eq(' + RowIndexForGrid + ')').find('[id*=txtAmount]').val();
                var discper = $('[id$=UCServices_gvServices] tr').filter(':eq(' + RowIndexForGrid + ')').find('[id*=hdnCmpDiscPcnt]').val();
                var discperpat = $('[id$=UCServices_gvServices] tr').filter(':eq(' + RowIndexForGrid + ')').find('input[type=text][id*=txtDiscP]').val();
                var discpercmp = $('[id$=UCServices_gvServices] tr').filter(':eq(' + RowIndexForGrid + ')').find('input[type=text][id*=txtCDiscP]').val();
                var TAX_PCT = $('[id$=UCServices_gvServices] tr').filter(':eq(' + RowIndexForGrid + ')').find('[id*=hdntaxpct]').val();
                if (TAX_PCT == '' || TAX_PCT == undefined || TAX_PCT == null || isNaN(TAX_PCT)) { TAX_PCT = "0"; }

                var patamtgrossline = 0;
                var cmpamtgrossline = 0;

                if (Amount == '' || Amount == undefined || Amount == null || isNaN(Amount)) { Amount = "0"; }
                if (discper == '' || discper == undefined || discper == null || isNaN(discper)) { discper = "0"; }
                if (discperpat == '' || discperpat == undefined || discperpat == null || isNaN(discperpat)) { discperpat = "0"; }
                if (discpercmp == '' || discpercmp == undefined || discpercmp == null || isNaN(discpercmp)) { discpercmp = "0"; }
                 if($('[id$=UCServices_gvServices] tr').filter(':eq(' + RowIndexForGrid + ')').find('input[type=text][id*=txtServiceName]').val() == "REGISTRATION")
                {
                  cmpper=0;
                }else{
                    cmpper=document.getElementById('' + ctrlcom + '_hdnOrgPer').value;
                     empper=document.getElementById('' + ctrlcom + '_hdnEmpPer').value;

                }
                cmpamtgrossline = Math.round((parseFloat(Amount) * parseFloat(cmpper)) / 100);
                patamtgrossline = parseFloat(Amount) - parseFloat(cmpamtgrossline);
               
                PatTotalgrossamt = parseFloat(PatTotalgrossamt) + parseFloat(patamtgrossline);
                cmpTotalGrossAmt = parseFloat(cmpTotalGrossAmt) + parseFloat(cmpamtgrossline);
                if (cmpamtgrossline == '' || cmpamtgrossline == undefined || cmpamtgrossline == null || isNaN(cmpamtgrossline)) { cmpamtgrossline = "0"; }
                if (patamtgrossline == '' || patamtgrossline == undefined || patamtgrossline == null || isNaN(patamtgrossline)) { patamtgrossline = "0"; }
                if (PatTotalgrossamt == '' || PatTotalgrossamt == undefined || PatTotalgrossamt == null || isNaN(PatTotalgrossamt)) { PatTotalgrossamt = "0"; }
                if (cmpTotalGrossAmt == '' || cmpTotalGrossAmt == undefined || cmpTotalGrossAmt == null || isNaN(cmpTotalGrossAmt)) { cmpTotalGrossAmt = "0"; }

               
                var patcncamtline = 0;
                var cmpcncamtline = 0;
                patcncamtline =  Math.round((parseFloat(patamtgrossline) * parseFloat(discperpat)) / 100);
                cmpcncamtline =  Math.round((parseFloat(cmpamtgrossline) * parseFloat(discpercmp)) / 100);

                 var tpamt = ((parseFloat(patamtgrossline) * (parseFloat(discperpat))) / parseFloat(100));
                var tcamt = ((parseFloat(cmpamtgrossline) * (parseFloat(discpercmp))) / parseFloat(100));
                var tamt = Math.round(parseFloat(tpamt) + parseFloat(tcamt));
                var tecamt = parseFloat(patcncamtline) + parseFloat(cmpcncamtline);
                if (tamt != tecamt) {
                    if (parseFloat(tamt) > tecamt) {
                        var dispamt = parseFloat(tamt) - parseFloat(tecamt);

                        patcncamtline = parseFloat(patcncamtline) + parseFloat(dispamt);
                    }
                    else if (tecamt > tamt) {
                        var dispamt = parseFloat(tecamt) - parseFloat(tamt);

                        patcncamtline = parseFloat(patcncamtline) - parseFloat(dispamt);

                    }


                }
                PatCNCAmt = parseFloat(PatCNCAmt) + parseFloat(patcncamtline);
                cmpCNCAmt = parseFloat(cmpCNCAmt) + parseFloat(cmpcncamtline);
                if (patcncamtline == '' || patcncamtline == undefined || patcncamtline == null || isNaN(patcncamtline)) { patcncamtline = "0"; }
                if (cmpcncamtline == '' || cmpcncamtline == undefined || cmpcncamtline == null || isNaN(cmpcncamtline)) { cmpcncamtline = "0"; }
                if (PatCNCAmt == '' || PatCNCAmt == undefined || PatCNCAmt == null || isNaN(PatCNCAmt)) { PatCNCAmt = "0"; }
                if (cmpCNCAmt == '' || cmpCNCAmt == undefined || cmpCNCAmt == null || isNaN(cmpCNCAmt)) { cmpCNCAmt = "0"; }

                var patnetamtline = 0;
                var cmpnetamtline = 0;
                patnetamtline = patamtgrossline - patcncamtline;
                cmpnetamtline = cmpamtgrossline - cmpcncamtline;
                PatNetAmt = parseFloat(PatNetAmt) + parseFloat(patnetamtline);
                cmpNetAmt = parseFloat(cmpNetAmt) + parseFloat(cmpnetamtline);

                var pattaxamt = ((parseFloat(PatNetAmt) * parseFloat(TAX_PCT)) / 100);
                var cmptaxamt = ((parseFloat(cmpNetAmt) * parseFloat(TAX_PCT)) / 100);

                if (cmptaxamt == '' || cmptaxamt == undefined || cmptaxamt == null || isNaN(cmptaxamt)) { cmptaxamt = "0"; }
                if (pattaxamt == '' || pattaxamt == undefined || pattaxamt == null || isNaN(pattaxamt)) { pattaxamt = "0"; }

                if (patnetamtline == '' || patnetamtline == undefined || patnetamtline == null || isNaN(patnetamtline)) { patnetamtline = "0"; }
                if (cmpnetamtline == '' || cmpnetamtline == undefined || cmpnetamtline == null || isNaN(cmpnetamtline)) { cmpnetamtline = "0"; }
                if (PatNetAmt == '' || PatNetAmt == undefined || PatNetAmt == null || isNaN(PatNetAmt)) { PatNetAmt = "0"; }
                if (cmpNetAmt == '' || cmpNetAmt == undefined || cmpNetAmt == null || isNaN(cmpNetAmt)) { cmpNetAmt = "0"; }
                cmp_t_net_amt+=parseFloat(cmpnetamtline);
                var letterreq=$('#' + ctrlcom + '_uccorporate_hdnrefletterreq').val();
                var form_name = $('#' + ctrlcom + '_ReceiptControl2_hdnDocName').val();
                var letterChecked ='';
                if (form_name == 'OPQUICK') {
                    letterChecked = document.getElementById('' + ctrlcom + '_EmployerInfo1_txtrefletter').value;
                }
                if(letterChecked!=''){
                    if(cmp_t_net_amt > parseFloat(credit_limit))
                        {
                                $(".stoast").toastText("warning", "Company Pay Amount Exceeding Credit Limit Amount.", 5, 2);
                                $(obj).val(0);
                                Calculateempperpatper(obj);
                                return false;
                        }
                }
                $('[id$=UCServices_gvServices] tr').filter(':eq(' + RowIndexForGrid + ')').find('input[type=text][id*=txtPamt]').val(patamtgrossline);
                $('[id$=UCServices_gvServices] tr').filter(':eq(' + RowIndexForGrid + ')').find('input[type=text][id*=txtCamt]').val(cmpamtgrossline);
                $('[id$=UCServices_gvServices] tr').filter(':eq(' + RowIndexForGrid + ')').find('input[type=text][id*=txtDiscAmt]').val(patcncamtline);
                $('[id$=UCServices_gvServices] tr').filter(':eq(' + RowIndexForGrid + ')').find('input[type=text][id*=txtCDiscAmt]').val(cmpcncamtline);
                $('[id$=UCServices_gvServices] tr').filter(':eq(' + RowIndexForGrid + ')').find('input[type=text][id*=txtPNAmt]').val(patnetamtline);
                $('[id$=UCServices_gvServices] tr').filter(':eq(' + RowIndexForGrid + ')').find('input[type=text][id*=txtCNetAmt]').val(cmpnetamtline);
                pattaxamt = parseFloat(pattaxamt);
                cmptaxamt = parseFloat(cmptaxamt);
                pattaxamt = pattaxamt.toFixed(2);
                cmptaxamt = cmptaxamt.toFixed(2);
                Totpattaxamt = parseFloat(Totpattaxamt) + parseFloat(pattaxamt);
                Totcmptaxamt = parseFloat(Totcmptaxamt) + parseFloat(cmptaxamt);
                $('[id$=UCServices_gvServices] tr').filter(':eq(' + RowIndexForGrid + ')').find('input[type=text][id*=txtptax]').val(pattaxamt);
                $('[id$=UCServices_gvServices] tr').filter(':eq(' + RowIndexForGrid + ')').find('input[type=text][id*=txtcmptax]').val(cmptaxamt);
                
            });

            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtreceiptAmount').value = '0';
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatientReceiptAmt').value = '0';
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtTotalReciptAmt').value = '0';


            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtcashAmt').value = '';
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtCardAmt').value = '';
            document.getElementById('' + ctrlcom + '_ReceiptControl2_ddcardType').selectedIndex = 0;
            document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlcrdtype').selectedIndex = 0;
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtcardExpiredt').value = '';
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtcardNoCmp').value = '';
            document.getElementById('' + ctrlcom + '_ReceiptControl2_ddbankName').selectedIndex = 0;
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtcardAuther').value = '';
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtquickremarks').value = '';


            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatgross').value = parseFloat(PatTotalgrossamt);
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtparygross').value = parseFloat(cmpTotalGrossAmt);
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtgrosstotal').value = parseFloat(PatTotalgrossamt) + parseFloat(cmpTotalGrossAmt);
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatdue').value = parseFloat(PatTotalgrossamt);
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtcmpDue').value = parseFloat(cmpTotalGrossAmt);
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtTotalDue').value = Math.round(parseFloat(PatTotalgrossamt) + parseFloat(cmpTotalGrossAmt));
        
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatgross').value = parseFloat(PatTotalgrossamt);
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtparygross').value = parseFloat(cmpTotalGrossAmt);
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtgrosstotal').value = parseFloat(PatTotalgrossamt) + parseFloat(cmpTotalGrossAmt);
        
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatgrossamt').value = Math.round(PatCNCAmt);
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpartygrossamt').value = Math.round(cmpCNCAmt);
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtgrossamttotal').value = Math.round(parseFloat(cmpCNCAmt) + parseFloat(PatCNCAmt));
            
            var cmpDiscPcnt = (parseFloat(100) * parseFloat(cmpCNCAmt)) / parseFloat(cmpTotalGrossAmt);
            if (cmpDiscPcnt == '' || cmpDiscPcnt == undefined || cmpDiscPcnt == null || isNaN(cmpDiscPcnt)) { cmpDiscPcnt = "0"; }
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpartydis').value = setProperDecimals(cmpDiscPcnt);

            var patDiscPcnt = (parseFloat(100) * parseFloat(PatCNCAmt)) / parseFloat(PatTotalgrossamt);
            if (patDiscPcnt == '' || patDiscPcnt == undefined || patDiscPcnt == null || isNaN(patDiscPcnt)) { patDiscPcnt = "0"; }
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatdis').value = setProperDecimals(patDiscPcnt);

            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatNet').value = Math.round(PatNetAmt);
            document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnNetAmt').value = Math.round(PatNetAmt);
            document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnDueAmt').value = Math.round(parseFloat(PatNetAmt) + parseFloat(Totpattaxamt));
         
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtcmpTotTax').value = parseFloat(Totcmptaxamt);
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatTotTax').value = parseFloat(Totpattaxamt);
            var taxamt = (parseFloat(Totcmptaxamt) + parseFloat(Totpattaxamt));
            if (taxamt == '' || taxamt == undefined || taxamt == null || isNaN(taxamt)) { taxamt = "0"; }
            taxamt = parseFloat(taxamt);
            taxamt = taxamt.toFixed(2);
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txttaxamt').value = taxamt;

            $('#ctl00_ContentPlaceHolder1_ReceiptControl2_hdnPayAmt').val(Math.round(parseFloat(PatNetAmt) + parseFloat(Totpattaxamt)));
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtcmpNet').value = Math.round(cmpNetAmt);
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtdueamt').value = Math.round(parseFloat(PatNetAmt) + parseFloat(Totpattaxamt));
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatdue').value = Math.round(parseFloat(PatNetAmt) + parseFloat(Totpattaxamt));
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtTotalNet').value = Math.round(parseFloat(PatNetAmt) + parseFloat(cmpNetAmt));
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatdue').value = Math.round(parseFloat(PatNetAmt) + parseFloat(Totpattaxamt));
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtcmpDue').value = Math.round(parseFloat(cmpNetAmt) + parseFloat(Totcmptaxamt));
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtTotalDue').value = Math.round(parseFloat(PatNetAmt) + parseFloat(cmpNetAmt) + parseFloat(Totcmptaxamt) + parseFloat(Totpattaxamt));

            if (parseFloat(document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatdue').value) > 0) {
                if ($('#ctl00_ContentPlaceHolder1_hdnDefaultDueAuthID').val() != "" && form_name == 'OP') {
                    document.getElementById('' + ctrlcom + '_ReceiptControl2_Search3_txtSearchControl').value = $('#ctl00_ContentPlaceHolder1_hdnDefaultDueAuthName').val();
                    document.getElementById('' + ctrlcom + '_ReceiptControl2_Search3__hiddenText').value = $('#ctl00_ContentPlaceHolder1_hdnDefaultDueAuthName').val();
                    document.getElementById('' + ctrlcom + '_ReceiptControl2_Search3__hiddenID').value = $('#ctl00_ContentPlaceHolder1_hdnDefaultDueAuthID').val();
                    document.getElementById('' + ctrlcom + '_ReceiptControl2_Search3_txtSearchControl').disabled = false;
                    document.getElementById('lk_btn_ctl00_ContentPlaceHolder1_ReceiptControl2_Search3').disabled = false;
                    document.getElementById('' + ctrlcom + '_ReceiptControl2_Search3_txtSearchControl').className = 'grey';
                } else {
                    document.getElementById('' + ctrlcom + '_ReceiptControl2_Search3_txtSearchControl').className = 'grey';
                    document.getElementById('' + ctrlcom + '_ReceiptControl2_Search3_txtSearchControl').disabled = false;
                    document.getElementById('lk_btn_ctl00_ContentPlaceHolder1_ReceiptControl2_Search3').disabled = false;
                }
            }
            if (parseFloat(document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatdue').value) > 0) {

                document.getElementById('' + ctrlcom + '_ReceiptControl2_Search3_txtSearchControl').className = 'grey';
                document.getElementById('' + ctrlcom + '_ReceiptControl2_Search3_txtSearchControl').disabled = false;
                document.getElementById('lk_btn_ctl00_ContentPlaceHolder1_ReceiptControl2_Search3').disabled = false;
            }
            else {
                document.getElementById('' + ctrlcom + '_ReceiptControl2_Search3_txtSearchControl').className = 'grey';
                document.getElementById('' + ctrlcom + '_ReceiptControl2_Search3_txtSearchControl').disabled = true;
                document.getElementById('lk_btn_ctl00_ContentPlaceHolder1_ReceiptControl2_Search3').disabled = true;
            }


            $('#ctl00_ContentPlaceHolder1_txtCorpPayAmt').val(Math.round(parseFloat(cmpNetAmt) + parseFloat(Totcmptaxamt)));
            $('#ctl00_ContentPlaceHolder1_txtCorpDueAmt').val(Math.round(parseFloat(cmpNetAmt) + parseFloat(Totcmptaxamt)));
            $('#ctl00_ContentPlaceHolder1_txtEmpPayAmt').val(parseFloat(PatNetAmt) + parseFloat(Totpattaxamt));
            $('#ctl00_ContentPlaceHolder1_txtEmpTaxAmt').val(parseFloat(Totpattaxamt));
            $('#ctl00_ContentPlaceHolder1_txtOrgTaxAmt').val(Math.round(Totcmptaxamt));

            var dueAmt = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtTotalDue').value;
            var exrate = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtExchangeRate').value;
            var totaldue = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtTotalDue').value;
            GetExchangeRate();
            if (document.getElementById('' + ctrlcom + '_UCServices_hdnRegFeeAutoFill').value == 'True' && $('#lblquick').attr('Class') == 'select' && document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlcrdtype').value == 0 && document.getElementById('' + ctrlcom + '_ReceiptControl2_txtCardAmt').value == 0) {
                document.getElementById('' + ctrlcom + '_ReceiptControl2_txtcashAmt').value = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatdue').value;
                document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatdue').value = 0;
                document.getElementById('' + ctrlcom + '_ReceiptControl2_txtTotalDue').value = Math.round(parseFloat(totaldue) - parseFloat(document.getElementById('' + ctrlcom + '_ReceiptControl2_txtcashAmt').value));
                CalculateAmount(document.getElementById('' + ctrlcom + '_ReceiptControl2_txtcashAmt'), 'Cash');
                IsEmptyReplaceWithZero(document.getElementById('' + ctrlcom + '_ReceiptControl2_txtcashAmt'));
            }
            $('table[id$=gvReceiptDetails]').find("tr:eq(1)").find('input[type=hidden][id*=hdnrecmodeId]').val('0');
            $('table[id$=gvReceiptDetails]').find("tr:eq(1)").find('input[type=hidden][id*=_RECEIPT_MODE_ID]').val('0');
            $('table[id$=gvReceiptDetails]').find("tr:eq(1)").find('[id*=lblrecmode]').text('');
            $('table[id$=gvReceiptDetails]').find("tr:eq(1)").find('[id*=lblAmount]').text('');
            $('table[id$=gvReceiptDetails]').find("tr:eq(1)").find('[id*=lblcurrname]').text('');
            $('table[id$=gvReceiptDetails]').find("tr:eq(1)").find('[id*=lblexchrate]').text('0');
            $('table[id$=gvReceiptDetails]').find("tr:eq(1)").find('[id*=lblconvertedamt]').text('');
            $('table[id$=gvReceiptDetails]').find("tr:eq(1)").find('[id*=lblbankname]').text('');
            $('table[id$=gvReceiptDetails]').find("tr:eq(1)").find('[id*=lblcardno]').text('');
            $('table[id$=gvReceiptDetails]').find("tr:eq(1)").find('[id*=lblauthcode]').text('');
            $('table[id$=gvReceiptDetails]').find("tr:eq(1)").find('[id*=lblcardexpdt]').text('');
            $('table[id$=gvReceiptDetails]').find("tr:eq(1)").find('[id*=lbltendcash]').text('');
            $('table[id$=gvReceiptDetails]').find("tr:eq(1)").find('[id*=lblchange]').text('');
            $('table[id$=gvReceiptDetails]').find("tr:eq(1)").find('[id*=hdnbankid]').val('0');
            $('table[id$=gvReceiptDetails]').find("tr:eq(1)").find('[id*=_BANK_ID]').val('0');
            $('table[id$=gvReceiptDetails]').find("tr:eq(1)").find('[id*=hdncardtypeId]').val('0');
            $('table[id$=gvReceiptDetails]').find("tr:eq(1)").find('[id*=hdncurrId]').val('0');
            $('table[id$=gvReceiptDetails]').find("tr:eq(1)").find('[id*=hdnSNo]').val('1');
            $("table[id$=gvReceiptDetails] tr:gt(1)").each(function (i, j) {
                $(this).remove();
            });



            $('table[id*=gvMultipleConcession] tr:has(td)').each(function (e) {
                $(this).remove();
            });
            fn_AddRowWithDetais();
             CalculateGridAmt(0);
              var company_id = 0;
    if (document.getElementById('' + ctrlcom + '_UCServices_hdnSrvFormName').value == 'OP' && (document.getElementById('' + ctrlcom + '_uccorporate_ddlPaymentBy').value == '2' || document.getElementById('' + ctrlcom + '_uccorporate_ddlPaymentBy').value == '5' || document.getElementById('' + ctrlcom + '_uccorporate_ddlPaymentBy').value == '8' || document.getElementById('' + ctrlcom + '_uccorporate_ddlPaymentBy').value == '9' || document.getElementById('' + ctrlcom + '_uccorporate_ddlPaymentBy').value == '10')) {
        company_id = document.getElementById('' + ctrlcom + '_uccorporate_CmpLookup__hiddenID').value;
        if (document.getElementById('' + ctrlcom + '_uccorporate_ucRefLetterNo__hiddenID') != null || document.getElementById('' + ctrlcom + '_uccorporate_ucRefLetterNo__hiddenID') != undefined) {
            referal_letter_id = document.getElementById('' + ctrlcom + '_uccorporate_ucRefLetterNo__hiddenID').value;
        } else {
            referal_letter_id = 0;
        }
    }
    else if (document.getElementById('' + ctrlcom + '_UCServices_hdnSrvFormName').value == 'OPQUICK' && (document.getElementById('' + ctrlcom + '_ddlPatientType').value == '2' || document.getElementById('' + ctrlcom + '_ddlPatientType').value == '5' || document.getElementById('' + ctrlcom + '_ddlPatientType').value == '8' || document.getElementById('' + ctrlcom + '_ddlPatientType').value == '9' || document.getElementById('' + ctrlcom + '_ddlPatientType').value == '10')) {
        var ref_leterID = document.getElementById('' + ctrlcom + '_uccorporate_ucRefLetterNo__hiddenID').value;
        if (ref_leterID != null && ref_leterID != undefined && ref_leterID != "")
            referal_letter_id = document.getElementById('' + ctrlcom + '_uccorporate_ucRefLetterNo__hiddenID').value;
        else
            referal_letter_id = 0;
        company_id = document.getElementById('' + ctrlcom + '_EmployerInfo1_uctpa__hiddenID').value;
    }
    else if (document.getElementById('' + ctrlcom + '_UCServices_hdnSrvFormName').value == 'Cons' && (document.getElementById('' + ctrlcom + '_uccorporate_ddlPaymentBy').value == '2' || document.getElementById('' + ctrlcom + '_uccorporate_ddlPaymentBy').value == '5' || document.getElementById('' + ctrlcom + '_uccorporate_ddlPaymentBy').value == '8' || document.getElementById('' + ctrlcom + '_uccorporate_ddlPaymentBy').value == '9' || document.getElementById('' + ctrlcom + '_uccorporate_ddlPaymentBy').value == '10')) {
        if (document.getElementById('' + ctrlcom + '_uccorporate_ucRefLetterNo__hiddenID') != null || document.getElementById('' + ctrlcom + '_uccorporate_ucRefLetterNo__hiddenID') != undefined) {
            referal_letter_id = document.getElementById('' + ctrlcom + '_uccorporate_ucRefLetterNo__hiddenID').value;
        } else {
            referal_letter_id = 0;
        }
        //company_id = document.getElementById('' + ctrlcom + '_EmployerInfo1_uctpa__hiddenID').value;
        company_id = document.getElementById('' + ctrlcom + '_uccorporate_EmployerInfo1_uctpa__hiddenID').value;
    }
    company_id = company_id || 0;

     if (parseFloat(company_id) > 0) {
                $("table[id*=UCServices_gvServices] tr:has(td)").each(function () {
                    var RowIndexForGrid = $(this)[0].rowIndex;
                    AddGridPatmuldisc(RowIndexForGrid);
                });
                Disableservicegridmauldiscgtzero();
            }
        }
    function OnNullValue(controlId) {
    if (controlId == null)
        return false;
    if (controlId.tagName == 'INPUT') {
        if (controlId.value.trim() == '') {
             $('#'+controlId.id).addClass('red');
            return false;
        }
        else if (controlId.value.trim() == '__-__-____') {
             $('#' + controlId.id).addClass('red');
            return false;
        }
    }
    else if (controlId.tagName == 'SELECT') {
        if (controlId[0] != undefined) {
            if ((controlId[0].innerHTML == '--select--' || controlId[0].value == "0") && controlId[0].selected == true) {
                 $('#' + controlId.id).addClass('red');
                return false;
            }
        }
    }
    else if (controlId.tagName == 'TEXTAREA') {
        if (controlId.value.trim() == '') {
             $('#' + controlId.id).addClass('red');
            return false;
        }
    }
    else if (controlId.tagName == 'DIV') {
    }
    if (controlId.tagName == 'DIV') {
        $('#' + controlId.id).removeClass('red');
    }
    else {
        $('#' + controlId.id).removeClass('red');
    }
}

    $(document).ready(function(){
     $('[id*=txtSSN]').on('keypress change', function (e) {
        //if (document.getElementById('ctl00_ContentPlaceHolder1_ddlproofid').value != 8 && document.getElementById('ctl00_ContentPlaceHolder1_ddlproofid').value != 4) 
        if (document.getElementById('ctl00_ContentPlaceHolder1_ddlproofid').value == 2) 
        {
            numeralsOnlyTest(event);
        }
    });
     $('[id*=txtDob]').on('blur', function (e) { CheckCombinationValidations(); });
        $('#ctl00_ContentPlaceHolder1_UCServices_ucbillno_txtSearchControl').removeClass('red');  
         if (document.getElementById('' + ctrlcom + '_hdnClientName').value != "YASHODA") {
                $("#hgc").css("display", "none");
                $("#hemr").css("display", "none");
                }
    });
     function CompareCoportaAmt(obj) {
        if (document.getElementById('' + ctrlcom + '_uccorporate_hdnDocName').value == "BillConvertion") {
            GetEmpDueAmounts(obj);
        } else {
            if ($(obj)[0].checked == true) {
                document.getElementById('' + ctrlcom + '_txtCorpPercentage').value = 0;
                document.getElementById('' + ctrlcom + '_txtEmpPercentage').value = 0;
                $("table[id*=UCServices_gvServices] tr:has(td)").each(function () {
                    if ($(this).closest('tr').find("[id*=txtServiceCode]").val() != "" && $(this).closest('tr').find("input[type=hidden][id*=hdnClass_Srv_ID]").val() == 0) {
                        $(this).closest('tr').find("[id*=txtCamt]").val(0);
                        $(this).closest('tr').find("[id*=txtCDiscP]").val(0);
                        $(this).closest('tr').find("[id*=txtCDiscAmt]").val(0);
                        $(this).closest('tr').find("[id*=txtCNetAmt]").val(0);
                        var rowindexgrid = $(this)[0].rowIndex;
                        CalculateGridAmtLimits(rowindexgrid);
                    }
                });
            } else {
                document.getElementById('' + ctrlcom + '_txtCorpPercentage').value = document.getElementById('' + ctrlcom + '_hdnOrgPer').value;
                document.getElementById('' + ctrlcom + '_txtEmpPercentage').value = document.getElementById('' + ctrlcom + '_hdnEmpPer').value;
                $("table[id*=UCServices_gvServices] tr:has(td)").each(function () {
                    var qty = $(this).closest('tr').find("[id*=txtQty]").val();
                    if ($(this).closest('tr').find("[id*=txtServiceCode]").val() != "" && $(this).closest('tr').find("input[type=hidden][id*=hdnClass_Srv_ID]").val() == 0) {
                        $(this).closest('tr').find("[id*=txtCDiscP]").val($(this).closest('tr').find("[id*=hdnCmpDiscPcnt]").val());
                        var rowindexgrid = $(this)[0].rowIndex;
                        if (qty == 1) { CalculateGridAmt(rowindexgrid); } else { CalculateGridAmtLimits(rowindexgrid); }
                    }
                });
            }
            if (document.getElementById('' + ctrlcom + '_ReceiptControl2_chkismultiple').checked) {
                document.getElementById('' + ctrlcom + '_ReceiptControl2_chkismultiple').checked = false;
                OnMultipleDiscGrid();
                document.getElementById('' + ctrlcom + '_ReceiptControl2_chkismultiple').checked = true;
                $('#ctl00_ContentPlaceHolder1_ReceiptControl2_Div2')[0].style.display = 'block';
            }
        }
    }
    function changeaddr() {
    

    var default_nation= $('#ctl00_ContentPlaceHolder1_hdnddlNationality').val();
          /*  if (document.getElementById('' + ctrlcom + '_ddlNationality').value != default_nation) {
                ClearAddrDtls(); 
                $("#A3").addClass("select");
                $("#A2").removeClass("select");
                $("#A1").removeClass("select");
                $('#divAddressType')[0].style.display = "block";
                              
                $('#ctl00_ContentPlaceHolder1_Address1_AreaUserControl1_txtSearchControl').removeClass('red');
                $('#ctl00_ContentPlaceHolder1_Address1_AreaUserControl1_txtSearchControl').removeClass('red');
                document.getElementById('' + ctrlcom + '_Address1_hdnnationaladdr').value = "Y";
            } else {
                $("#A3").removeClass("select");
                $("#A2").removeClass("select");
                $("#A1").addClass("select");
                $('#divAddressType')[0].style.display = "none";
         
                GlobalMyAddress2 = '';
                GlobalMyAddress3 = '';              
               $('#ctl00_ContentPlaceHolder1_Address1_AreaUserControl1_txtSearchControl').addClass('red');
               $('#ctl00_ContentPlaceHolder1_Address1_AreaUserControl1_txtSearchControl').removeClass('red');

                document.getElementById('' + ctrlcom + '_Address1_hdnnationaladdr').value = "N";
            }*/
        }
    function OTPCheck(ev) {
            var otpreq = $('#ctl00_ContentPlaceHolder1_ReceiptControl2_hdnotprequired').val();
            var ddlpymtn = document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlPaymentType').value;
            if (otpreq == 'True' && ddlpymtn == '4' && document.getElementById('' + ctrlcom + '_Address1_txtMobile1').value!='') {
                checkpayment();
            }
        }
      function printConsultnts(_path,foodnbev,bill_id,r_typ,MLC,patid,umrno) {
      
        var reg_type=r_typ;
            if (reg_type == undefined || reg_type == null || reg_type == '') { reg_type = 0; }
    if (foodnbev != '') {
        var sub_food = foodnbev.split(';');
        var item_names_nclude = '';
        for (var j = 1; j < sub_food.length; j++) {
            var items_sub = sub_food[j].split(',');
            var item_id = items_sub[0];
            var item_group = items_sub[1];
            var item_qty = items_sub[2];
            var item_name = items_sub[3];
        
                item_names_nclude = item_names_nclude + '*'+item_name+'-' + item_id+'-'+bill_id;
     
        }
         window.open(document.getElementById('' + ctrlcom + '_hdnbarcodepath').value  +  item_names_nclude);
    }

    for (var i = 0; i < _path.split(',').length - 1; i++) {
        if (_path.split(',')[i] != '')
            window.open(_path.split(',')[i]);
    }
    
   
            $('#ctl00_ContentPlaceHolder1_ddlRegType').val(reg_type);
            if(MLC=="Y")
            {
            window.location.href = _iniUrl + "Private/FrontOffice/DayCare/MLC.aspx?UMR_NO=" + umrno + "&PatID=" + patid + "&DOC_FORM_CD=FOMLC";
          }
        else
         {
         window.location.href = "OPDBillnew.aspx?reg_type="+reg_type;
         }
    return false;
    }
      function ConsolatedPrint(_path,r_typ,MLC,patid,umrno) {
      
       var reg_type=r_typ;
        if(reg_type==undefined || reg_type==null || reg_type==''){reg_type=0;}
        if(_path!=''){
         for (var i = 0; i < _path.split(',').length - 1; i++) {
          if (_path.split(',')[i] != '')
            window.open(_path.split(',')[i]);

         }
        }
      if(MLC=="Y")
            {
            window.location.href = _iniUrl + "Private/FrontOffice/DayCare/MLC.aspx?UMR_NO=" + umrno + "&PatID=" + patid + "&DOC_FORM_CD=FOMLC";
          }
         else
         {
          AllClearPopUp();
            $('[id*=divPrints]')[0].style.display = 'none';
         }
    }
    function removeconsultant()
    {
     var _doctor_id = document.getElementById('' + ctrlcom + '_hdnDoctor_ID').value; //data.ID;
     if(document.getElementById('' + ctrlcom + '_ucConsultant_txtSearchControl').value=='')
     {
    $("table[id$=UCServices_gvServices] tr:has(td)").each(function (e) {
      var txtserviceName = $(this).closest('tr').find("input[type=text][id*=txtServiceName]").val();
           var hdnServiceID = $(this).closest('tr').find("input[type=hidden][id*=hdnServiceID]").val();
        if (txtserviceName != "REGISTRATION" && hdnServiceID == '2' ){
        var docid = $(this).closest('tr').find('input[type=hidden][id*=hdnDoctorID]').val();
        if (_doctor_id == docid) {
            $(this).closest('tr').remove();
          
        }
        }
    });
    }
    AssignSno(0);
    }
     function gridpage1() {
            window.location =  _iniUrl + 'Private/FrontOffice/OP_Quick_Grid_new.aspx?OPDNew=Y';
        }
     $(document).ready(function (e) {
      $("#DivGrid_Body").addClass('sergridH_opd');
     if (getParameterByName('MODE') != 'VIEW') {
        document.getElementById('' + ctrlcom + '_HDNSESSIONID').value=<%=SessionHandler.DBSESSION_ID %>;
        $('#ctl00_ContentPlaceHolder1_EmployerInfo1_txtEmpCardValidity').val(new Date().format('dd-MMM-yyyy'));
            $('#ctl00_ContentPlaceHolder1_EmployerInfo1_txtlettervalidity').val(new Date().format('dd-MMM-yyyy'));
            $('#ctl00_ContentPlaceHolder1_EmployerInfo1_txtrefissuedt').val(new Date().format('dd-MMM-yyyy'));
             CmpGridColumnsShowHide();
             document.getElementById('lnkBtnHistory').style.display = 'none';
             }
    });
 
  
        function SrvGender(ev)
        {
        document.getElementById('' + ctrlcom + '_UCServices_hdnGender_ID').value = document.getElementById('' + ctrlcom + '_ddlGender').value;
      
         var Length = $('table[id*=gvServices] tr:has(td)').length;       
         $("table[id*=gvServices] tr:has(td)").each(function (e) {
        var srv_name = $(this).closest('tr').find('input[type=text][id*=txtServiceName]').val();
     var _srvId = $(this).closest('tr').find("input[type=hidden][id*=hdnServiceID]").val();
        var _doctor_id = $(this).closest('tr').find("input[type=hidden][id*=hdnDoctorID]").val();
         var _srv_class_id = $(this).closest('tr').find('input[type=hidden][id*=hdnServiceClass]').val();
         var cls_srv_id=$(this).closest('tr').find('input[type=hidden][id*=hdnClass_Srv_ID]').val();

         var con_srv_id=0;
           if (document.getElementById('' + ctrlcom + '_UCServices_hdnallowconsservice').value.toUpperCase() == "TRUE") {
           con_srv_id=document.getElementById('' + ctrlcom + '_UCServices_hdnconssrvID').value;
           }

              if (con_srv_id == null || con_srv_id == undefined || con_srv_id == ''||  con_srv_id == "undefined" ) { con_srv_id = 0; }
        if(srv_name!="REGISTRATION" && (_srvId!=2 && cls_srv_id==0) )
        {

        if(con_srv_id !=_srvId){
         RemoveGridViewService(this, 'I');
         }
         
        }
        
        });
        SeniorCitizenValidation();
        
        
        }
        $(function () {
            var tIndex = 0; $(".HFormsCtrl tr").each(function () { if ($(this).find("input select textarea img").attr("id") != undefined) { $(this).find("input select textarea img").removeAttr("tabindex").prop("tabindex", tIndex++); } });
        });
         function SeniorCitizenValidation() {
         
            var patagent = document.getElementById('' + ctrlcom + '_newAgeUc_txtYear').value;
            var gendid = document.getElementById('' + ctrlcom + '_ddlGender').value;
            if (gendid == '2') {
                if (parseInt(patagent) >= 65) {
                    document.getElementById('' + ctrlcom + '_chkIsSenior').checked = true;
                }
                else {
                    document.getElementById('' + ctrlcom + '_chkIsSenior').checked = false;
                }
            }
            else {
                if (parseInt(patagent) >= 65) {
                    document.getElementById('' + ctrlcom + '_chkIsSenior').checked = true;
                }
                else {
                    document.getElementById('' + ctrlcom + '_chkIsSenior').checked = false;
                }
            }
        }
        function VIPviewmode(){
        document.getElementById('' + ctrlcom + '_dd_reg_source').disabled=true;
        document.getElementById('' + ctrlcom + '_source_remarks').disabled=true;
        document.getElementById('' + ctrlcom + '_dd_reg_source').style.border="";
        document.getElementById('' + ctrlcom + '_source_remarks').style.border="";
        }

        function VisitTypeviewmode(strPat)
        {
        PatRes = jQuery.parseJSON(strPat);
        if(PatRes[0].IS_OSP=='Y'){
         document.getElementById('' + ctrlcom + '_pre_regi').value=5;
        }
        else{
         document.getElementById('' + ctrlcom + '_pre_regi').value=PatRes[0].REG_TYPE_ID;
         }
         document.getElementById('' + ctrlcom + '_UCprereg_txtSearchControl').value=PatRes[0].PRE_REG_NO;
         document.getElementById('divprereg').style.display = "block";
       
        }
         function AddNewClick() {
              window.location = _iniUrl + 'Private/FrontOffice/OPDBillnew.aspx';
         }
       
    </script>
    <script src="../../JSScript/AgeCalScript_new.js" type="text/javascript" language="javascript"></script>
    <script type="text/javascript" src="../../JSScript/date.js"></script>
    <script type="text/javascript" language="javascript">


       

    </script>
    <style type="text/css">
        .doblbl
        {
            display: none;
        }
        
        .pay-save, #ctl00_ContentPlaceHolder1_TransactionUserControl1_imgBtnSave
        {
            display: none;
        }
        
        #tbl_divEmpRelation
        {
            width: 100% !important;
        }
        #tbl_divMobileValidate
        {
            width: 100% !important;
        }
        
        .gv_Ind_Services-Width
        {
            min-width: 820px !important;
            width: 100%;
        }
        .chk
        {
            width: 30px !important;
            text-align: left !important;
        }
        .ordId
        {
            width: 70px !important;
            text-align: left !important;
        }
        .orddt
        {
            width: 100px !important;
            text-align: left !important;
        }
        .patname
        {
            min-width: 180px !important;
            width: auto !important;
            text-align: left !important;
        }
        .ordtype
        {
            width: 120px !important;
            text-align: left !important;
        }
        .Docname
        {
            width: 200px !important;
            text-align: left !important;
        }
        .visDt
        {
            width: 120px !important;
            text-align: left !important;
        }
        .opdregi_photo
        {
            z-index: 9999;
        }
        
        .opdregi_photo . sign
        {
            height: 66px;
            background: #fff;
        }
        .opdregi_photo .photo
        {
            height: 33px;
            width: 47px;
        }
        
        
        .opdregi_photo .photo .img
        {
            height: 32px;
            width: 45px;
            right: 1px;
        }
        .opdregi_photo .sign
        {
            margin-top: 0px;
            height: 28px;
            margin-left: 0;
            float: left;
            border-left: 0px;
        }
        .opdregi_photo .sign i
        {
            padding: 1px 4px 1px 4px;
            font-size: 11px;
            color: #20A5E1;
            cursor: pointer;
            float: left;
            height: 15px;
            line-height: 12px;
        }
        .opdregi_photo .sign i:hover
        {
            border-radius: 3px;
            background: #20A5E1;
            color: #fff;
        }
        
        .res_1000 .opdate
        {
            padding-right: 65px !important;
        }
        .res_1000 .dtgender
        {
            width: 65px !important;
        }
        .res_1000 ._opdquick .dobtxt
        {
            width: 56.5%;
            padding: 0px 0px 4px 5px;
        }
        .res_1000 ._opdquick .uc-yrs
        {
            width: 43.4%;
            float: left;
            padding: 0px 0px 4px 0px;
        }
        .res_1000 .txt-yy, .res_1000 .txt-mm, .res_1000 .txt-dd
        {
            width: 30% !important;
        }
        
        .mobile
        {
            border-radius: 4px;
            border: 1px solid;
            border-right-width: 0 !important;
            border-top-width: 0 !important;
            border-bottom-width: 0 !important;
            position: relative;
            display: flex;
        }
        .isdcode
        {
            background: rgb(255,255,255);
            font-size: 13px;
            font-weight: 400;
            font-family: quicksand,Arial,sans-serif;
            padding: 0px 0px 0px 5px;
            -webkit-box-align: center;
            flex-shrink: 0;
            margin-top: 0px;
            padding-top: 2px;
            border-top: 1px solid #cacaca;
            border-bottom: 1px solid #cacaca;
        }
        .mobilenumber
        {
            background: rgb(255,255,255) !important;
            width: 100% !important;
            border: none;
            border-left-width: 0 !important;
            outline: 0px !important;
            font-size: 13px !important;
            font-weight: 400;
            font-family: quicksand,Arial,sans-serif;
            padding: 3px 5px 0px 10px !important;
            padding-left: 2px !important;
            border-radius: 0px 4px 4px 0px !important;
        }
        
        .lege-div > div.colorchart
        {
            display: none;
            position: absolute;
            top: 34px;
            right: 135px;
            width: 260px;
        }
        div.colorchart:before
        {
            content: "";
            top: -14px;
            position: absolute;
            border: 7px solid transparent;
            border-bottom-color: #cacaca;
            width: 0;
            height: 0;
            right: 70px;
        }
        .datesearch
        {
            float: left;
            padding-top: 0px;
            margin-left: 15px;
            font-weight: normal !important;
        }
    </style>
    <style>
        .has-float-label
        {
            position: relative;
            font-size: 12px;
        }
        
        .has-float-label .pre-floating
        {
            position: absolute;
            opacity: 1;
            transition: all .2s;
            top: -1px;
            left: 0px;
            z-index: 3;
            line-height: 1;
            padding: 0px 1px;
            font-weight: normal;
        }
        
        .form_input
        {
            outline: none;
        }
        input[type="text"]:focus, select:focus, textarea:focus
        {
            box-shadow: none !important;
        }
        .has-float-label .pre-floating::after
        {
            content: "";
            display: block;
            position: absolute;
            height: 1px;
            top: 50%;
            left: -.2em;
            right: -.2em;
            z-index: -1;
        }
        
        .has-float-label .form_input:placeholder-shown:not(:focus)::-webkit-input-placeholder
        {
            opacity: 0;
        }
        
        .has-float-label .form_input:placeholder-shown:not(:focus) + .pre-floating
        {
            font-size: 90%;
            opacity: .5;
            top: 7px;
        }
        .FormsCtrl td .has-float-label select, .HFormsCtrl td .has-float-label select, .formselect
        {
            margin: 0px !important;
            padding: 1px 3px 1px 7px !important;
            font-size: 11px;
        }
        .FormsCtrl td .has-float-label input[type="text"], .formtext
        {
            padding: 1px 3px 1px 5px !important;
        }
        .red:focus
        {
            box-shadow: none !important;
        }
        
        
        
        .header-chk
        {
            margin: 0;
            margin-bottom: 14px;
            float: left;
        }
        
        .regi_field
        {
            padding: 0px !important;
            margin: 0px 10px 0px 0px;
            border: 1px solid #bcbcbc;
            border-radius: 5px;
            float: left;
            height: 25px;
            background: #fff;
        }
        
        
        
        .guarantor p
        {
            display: none;
        }
        
        .ucAddress-body .FormsCtrl td
        {
            padding: 12px 2px 0px 2px;
        }
        .reg-contact-body .FormsCtrl td
        {
            padding: 12px 2px 0px 2px;
        }
        .quick_left .FormsCtrl td
        {
            padding: 12px 2px 0px 2px;
        }
        .quick_right .FormsCtrl td
        {
            padding: 12px 2px 0px 2px;
        }
        
        
        ._opdquick .FormsCtrl td
        {
            padding: 0px 5px 3px 5px;
        }
        
        #Divdocuint
        {
            float: left;
        }
        
        
        /*.mobileforms .payment_ctrlbl{    display: block;float: left;    width: 128px;}
    .mobileforms tr{ display: block;width: 100%;}*/
        ._opdquick .reff-panelH .reff-moreD
        {
            height: 100% !important;
        }
        
        .uc-hh-mm
        {
            width: 44% !important;
        }
        .allchkboxes
        {
            width: 100%;
            float: left;
            border-bottom: 1px solid #cacaca;
            margin-bottom: 7px;
            background: #f3efef;
        }
        .allchkboxes > div
        {
            float: left;
            padding: 2px 10px;
            border-right: 1px solid #cacaca;
        }
        .regi_photo .photosign
        {
            position: initial;
        }
        ._opdquick .dobtxt
        {
            width: 47% !important;
            padding: 0px 0px 0px 0px;
        }
        ._opdquick .uc-yrs
        {
            width: 52.5% !important;
            float: left;
            padding: 0px 0px 0px 2px;
        }
        .txt-yy, .txt-mm, .txt-dd
        {
            width: 30% !important;
        }
        .regi_photo
        {
            position: relative;
            padding: 10px;
        }
        .regi_photo .photosign
        {
            position: initial;
            left: inherit;
            top: initial;
            height: 168px;
            width: 100%;
            display: flex;
            flex-direction: column;
            border: 0;
        }
        .regi_photo .photo
        {
            width: 100%;
            height: 180px;
        }
        .photo:hover .img
        {
            background: #fff;
            border: 0px solid #cacaca;
            height: 100%;
            width: 100%;
        }
        .regi_photo .sign
        {
            margin-left: 0;
            border-left: 0px;
            height: 32px;
            display: flex;
            justify-content: center;
            margin-top: 5px;
        }
        .regi_photo .sign i
        {
            padding: 6px 6px 6px 9px;
            font-size: 20px;
            border-radius: 4px;
        }
        
        .CompanyInfo
        {
            width: 33.2% !important;
        }
        .formflex
        {
            display: flex;
            flex-wrap: wrap;
        }
        .formelements
        {
            width: 20%;
            display: flex;
            padding: 0 10px 5px 0;
        }
        .formelementslbl
        {
            margin-right: 5px;
            vertical-align: middle;
        }
        .formelementstxt
        {
            flex: 1;
        }
        
        .uc_formflex
        {
            display: flex;
            flex-wrap: wrap;
        }
        .uc_formelements
        {
            width: 50%;
            display: flex;
            padding: 0 10px 5px 0;
        }
        .uc_formelementslbl
        {
            margin-right: 5px;
            vertical-align: middle;
        }
        .uc_formelementstxt
        {
            flex: 1;
        }
        
        
        .opd_uc_formflex
        {
            display: flex;
            flex-wrap: wrap;
        }
        .opd_uc_formelements
        {
            width: 100%;
            display: flex;
            padding: 0 10px 5px 0;
        }
        .opd_uc_formelementslbl
        {
            margin-right: 5px;
            vertical-align: middle;
        }
        .opd_uc_formelementstxt
        {
            flex: 1;
        }
        td.PAddress1, td.PAddress3
        {
            width: 10%;
        }
        td.PAddress2, td.PAddress4
        {
            width: 40%;
        }
        .re_lbl
        {
            display: table-cell !important;
        }
        .formelementslbl
        {
            display: block !important;
        }
        .pre-floating
        {
            display: none !important;
        }
        .formflex
        {
            display: flex;
            flex-wrap: wrap;
        }
        .formelements
        {
            padding: 0 10px 5px 0;
        }
        .formelementslbl
        {
            margin-right: 5px;
            vertical-align: middle;
        }
        .formelementstxt
        {
            flex: 1;
        }
        .has-float-label
        {
            font-weight: 500;
            font-size: 12px;
            padding: 0px 0px 0px 0px;
        }
        .formflex > .formelements:nth-child(1) .formelementslbl, .formflex > .formelements:nth-child(6) .formelementslbl, .formflex > .formelements:nth-child(11) .formelementslbl, .formflex > .formelements:nth-child(16) .formelementslbl, .formflex > .formelements:nth-child(20) .formelementslbl
        {
            width: 41%;
        }
        .formelements:nth-child(19) .formelementslbl
        {
            width: 50%;
        }
        .formflex > .formelements:nth-child(1), .formflex > .formelements:nth-child(6), .formflex > .formelements:nth-child(11), .formflex > .formelements:nth-child(16), .formflex > .formelements:nth-child(20)
        {
            width: 16%;
        }
        .formflex > .formelements:nth-child(2), .formflex > .formelements:nth-child(7), .formflex > .formelements:nth-child(12), .formflex > .formelements:nth-child(17), .formflex > .formelements:nth-child(21)
        {
            width: 21%;
        }
        .formflex > .formelements:nth-child(3), .formflex > .formelements:nth-child(8), .formflex > .formelements:nth-child(13), .formflex > .formelements:nth-child(18), .formflex > .formelements:nth-child(22)
        {
            width: 21%;
        }
        .formflex > .formelements:nth-child(4), .formflex > .formelements:nth-child(9), .formflex > .formelements:nth-child(14), .formflex > .formelements:nth-child(23), .formflex > .formelements:nth-child(26)
        {
            width: 20%;
        }
        .formflex > .formelements:nth-child(5), .formflex > .formelements:nth-child(10), .formflex > .formelements:nth-child(15), .formflex > .formelements:nth-child(24), .formflex > .formelements:nth-child(27)
        {
            width: 20%;
        }
        .formflex > .formelements:nth-child(19)
        {
            width: 40%;
        }
        .formflex > .formelements:nth-child(23)
        {
            width: 40%;
        }
        .formflex > .formelements:nth-child(24)
        {
            width: 18%;
        }
        .formflex > .formelements:nth-child(25)
        {
            width: 42%;
        }
        .uc_formelements
        {
            padding: 0 10px 5px 0;
        }
        .uc_formflex > .uc_formelements:nth-child(1)
        {
            width: 100%;
        }
        .uc_formflex > .uc_formelements:nth-child(2)
        {
            width: 100%;
        }
        .uc_formflex > .uc_formelements:nth-child(3)
        {
            width: 100%;
        }
        .uc_formflex > .uc_formelements:nth-child(4)
        {
            width: 100%;
        }
        .uc_formflex > .uc_formelements:nth-child(5)
        {
            width: 100%;
        }
        .uc_formflex > .uc_formelements:nth-child(6), .uc_formflex > .uc_formelements:nth-child(7), .uc_formflex > .uc_formelements:nth-child(8), .uc_formflex > .uc_formelements:nth-child(9), .uc_formflex > .uc_formelements:nth-child(10), .uc_formflex > .uc_formelements:nth-child(11)
        {
            width: 50%;
        }
        .uc_formflex > .uc_formelements > .uc_formelementslbl
        {
            width: 77px;
        }
        .opd_uc_formelements
        {
            padding: 0 10px 5px 0;
        }
        .opd_uc_formflex > .opd_uc_formelements:nth-child(1)
        {
            width: 100%;
        }
        .opd_uc_formflex > .opd_uc_formelements:nth-child(2)
        {
            width: 100%;
        }
        .opd_uc_formflex > .opd_uc_formelements:nth-child(3)
        {
            width: 100%;
        }
        .opd_uc_formflex > .opd_uc_formelements:nth-child(4)
        {
            width: 100%;
        }
        .opd_uc_formflex > .opd_uc_formelements:nth-child(5)
        {
            width: 100%;
        }
        .opd_uc_formflex > .opd_uc_formelements:nth-child(6)
        {
            width: 100%;
        }
        .opd_uc_formflex > .opd_uc_formelements > .opd_uc_formelementslbl
        {
            width: 70px;
        }
        .besidechk
        {
            display: flex;
        }
        .besidechk > .mobile
        {
            flex: 1;
        }
        .besidechk > span
        {
            width: 60px;
        }
        .flex-col-100
        {
            width: 100%;
        }
        .flex-col-90
        {
            width: 90%;
        }
        .flex-col-80
        {
            width: 80%;
        }
        .flex-col-70
        {
            width: 70%;
        }
        .flex-col-60
        {
            width: 60%;
        }
        .flex-col-50
        {
            width: 50%;
        }
        .flex-col-40
        {
            width: 40%;
        }
        .flex-col-30
        {
            width: 30%;
        }
        .flex-col-20
        {
            width: 20%;
        }
        .flex-col-10
        {
            width: 10%;
        }
        .flex-col-1
        {
            width: 1%;
        }
        .div1 table
        {
            white-space: nowrap;
            padding-top: 2px;
            padding-left: 10px;
        }
        .div1
        {
           
           
            margin: 0 !important;
        }
        ._opdquick .reff-panelH
        {
            height: 200px !important;
        }
    </style>
    <%--<script type="text/javascript" language="javascript">
    var besidelbl = "<style type='text/css'>td.PAddress1,td.PAddress3{width:10%} td.PAddress2,td.PAddress4{width:40%}.re_lbl{display: table-cell !important;}.formelementslbl{display: block !important;}.pre-floating{display: none !important;}.formflex{display: flex;flex-wrap: wrap;}.formelements{padding: 0 10px 5px 0;}.formelementslbl{margin-right: 5px;vertical-align: middle;}.formelementstxt{flex: 1;}.has-float-label{font-weight: 500;font-size: 12px;padding: 0px 0px 0px 0px;}.formflex >.formelements:nth-child(1) .formelementslbl,.formflex >.formelements:nth-child(6) .formelementslbl,.formflex >.formelements:nth-child(11) .formelementslbl,.formflex >.formelements:nth-child(16) .formelementslbl,.formflex >.formelements:nth-child(20) .formelementslbl,.formflex >.formelements:nth-child(26) .formelementslbl{width:41%}.formelements:nth-child(19) .formelementslbl{width:50%}.formflex >.formelements:nth-child(1),.formflex >.formelements:nth-child(6),.formflex >.formelements:nth-child(11),.formflex >.formelements:nth-child(16),.formflex >.formelements:nth-child(20),.formflex >.formelements:nth-child(26){width:18%}.formflex >.formelements:nth-child(2),.formflex >.formelements:nth-child(7),.formflex >.formelements:nth-child(12),.formflex >.formelements:nth-child(17),.formflex >.formelements:nth-child(21){width:21%}.formflex >.formelements:nth-child(3),.formflex >.formelements:nth-child(8),.formflex >.formelements:nth-child(13),.formflex >.formelements:nth-child(18),.formflex >.formelements:nth-child(22){width:21%}.formflex >.formelements:nth-child(4),.formflex >.formelements:nth-child(9),.formflex >.formelements:nth-child(14),.formflex >.formelements:nth-child(23){width:20%}.formflex >.formelements:nth-child(5),.formflex >.formelements:nth-child(10),.formflex >.formelements:nth-child(15),.formflex >.formelements:nth-child(24){width:20%}.formflex >.formelements:nth-child(19){width:40%}.formflex >.formelements:nth-child(23){width:40%}.formflex >.formelements:nth-child(24){width:18%}.formflex >.formelements:nth-child(25){width:82%}.uc_formelements{padding: 0 10px 5px 0;}.uc_formflex >.uc_formelements:nth-child(1){width:100%}.uc_formflex >.uc_formelements:nth-child(2){width:100%} .uc_formflex >.uc_formelements:nth-child(3){width:100%} .uc_formflex >.uc_formelements:nth-child(4){width:100%} .uc_formflex >.uc_formelements:nth-child(5){width:100%} .uc_formflex >.uc_formelements:nth-child(6),.uc_formflex >.uc_formelements:nth-child(7),.uc_formflex >.uc_formelements:nth-child(8),.uc_formflex >.uc_formelements:nth-child(9),.uc_formflex >.uc_formelements:nth-child(10),.uc_formflex >.uc_formelements:nth-child(11){width:50%} .uc_formflex >.uc_formelements > .uc_formelementslbl{width:77px}.opd_uc_formelements{padding: 0 10px 5px 0;}.opd_uc_formflex >.opd_uc_formelements:nth-child(1){width:100%}.opd_uc_formflex >.opd_uc_formelements:nth-child(2){width:100%} .opd_uc_formflex >.opd_uc_formelements:nth-child(3){width:100%} .opd_uc_formflex >.opd_uc_formelements:nth-child(4){width:100%} .opd_uc_formflex >.opd_uc_formelements:nth-child(5){width:100%} .opd_uc_formflex >.opd_uc_formelements:nth-child(6){width:100%} .opd_uc_formflex >.opd_uc_formelements > .opd_uc_formelementslbl{width:70px}.besidechk{display: flex;}.besidechk>.mobile{flex: 1;}.besidechk>span{width:60px;}</style>";
    var toplbl = "<style type='text/css'>.re_lbl{display: none !important;}.floating-label, .pre-floating {display: block !important;}.has-float-label {font-weight: 500;font-size: 12px;padding: 12px 0px 3px 0px;}.mtop{margin-top:17px}.btntxt.amtintxt.has-float-label{padding-left: 0 !important;padding-right: 0 !important;}.txtbtn.amtinlbl.floating-label1{right: initial !important;top: -4px !important;left: 0 !important;}formflex{display: flex;flex-wrap: wrap;}.formelements{flex-direction: column;padding: 0 10px 0px 0;}.formelementslbl{margin-right: 5px;vertical-align: middle;}.formelementstxt{flex: 1;}.formflex >.formelements:nth-child(1),.formflex >.formelements:nth-child(7),.formflex >.formelements:nth-child(14),.formflex >.formelements:nth-child(21){width:10%}.formflex >.formelements:nth-child(2),.formflex >.formelements:nth-child(8),.formflex >.formelements:nth-child(22){width:18%}.formflex >.formelements:nth-child(3),.formflex >.formelements:nth-child(9),.formflex >.formelements:nth-child(17),.formflex >.formelements:nth-child(23){width:18%}.formflex >.formelements:nth-child(4),.formflex >.formelements:nth-child(10),.formflex >.formelements:nth-child(18),.formflex >.formelements:nth-child(24){width:18%}.formflex >.formelements:nth-child(5),.formflex >.formelements:nth-child(11),.formflex >.formelements:nth-child(19){width:22%}.formflex >.formelements:nth-child(6),.formflex >.formelements:nth-child(13),.formflex >.formelements:nth-child(20){width:14%}.formflex >.formelements:nth-child(25){width:36%}.formflex >.formelements:nth-child(11),.formflex >.formelements:nth-child(12){width:11%}.formflex >.formelements:nth-child(15),.formflex >.formelements:nth-child(16){width:9%}.mobileforms{display: flex;}.mobileforms > tbody{flex: 1;display: flex;flex-wrap: wrap;}.mobileforms > tbody > tr{width: 50%;}.mobileforms > tbody > tr > td{width: 33.33%;}.mobileforms > tbody > tr > td:nth-child(2){}.mobileforms > tbody > tr > td:nth-child(4){}.mobileforms > tbody > tr > td:nth-child(6){}.mobileforms > tbody > tr > td.rcol-1{width: 30.33%;}.mobileforms > tbody > tr > td.rcol-2{width: 42.33%;}.mobileforms > tbody > tr > td.rcol-3{width: 30.33%;}.mobileforms > tbody > tr > td.rcol-4{width: 33.33%;}.mobileforms > tbody > tr > td.rcol-5{width: 33.33%;}.mobileforms > tbody > tr > td.rcol-6{width: 30.33%;}        .mobileforms > tbody > tr.mrow-2{width: 67%;}.mobileforms > tbody > tr.mrow-2 > td.mrow-2col-1{width: 21.9%;}.mobileforms > tbody > tr.mrow-2 > td.mrow-2col-2{width: 32.2%;}.mobileforms > tbody > tr.mrow-2 > td.mrow-2col-3{width: auto;}        .mobileforms > tbody > tr.fullrow{width: 100%;}.mobileforms > tbody > tr.fullrow > td._2col{width: 33%;}.mobileforms > tbody > tr.fullrow > td._2col1{width: 17%;}.mobileforms > tbody > tr.fullrow > td._2col2{width: 16%;}.mobileforms > tbody > tr.fullrow > td.colbtns{}.halfrow{widh: 30%;}.uc_formelements{flex-direction: column;padding: 0 10px 1px 0;}.uc_formflex >.uc_formelements:nth-child(1){width:100%}.uc_formflex >.uc_formelements:nth-child(2){width:100%} .uc_formflex >.uc_formelements:nth-child(3){width:100%} .uc_formflex >.uc_formelements:nth-child(4){width:50%} .uc_formflex >.uc_formelements:nth-child(5){width:50%} .uc_formflex >.uc_formelements:nth-child(6),.uc_formflex >.uc_formelements:nth-child(7),.uc_formflex >.uc_formelements:nth-child(8),.uc_formflex >.uc_formelements:nth-child(9),.uc_formflex >.uc_formelements:nth-child(10),.uc_formflex >.uc_formelements:nth-child(11){width:50%}.opd_uc_formelements{flex-direction: column;padding: 0 10px 1px 0;}.opd_uc_formflex >.opd_uc_formelements:nth-child(1),.opd_uc_formflex >.opd_uc_formelements:nth-child(2), .opd_uc_formflex >.opd_uc_formelements:nth-child(3),.opd_uc_formflex >.opd_uc_formelements:nth-child(4),.opd_uc_formflex >.opd_uc_formelements:nth-child(5), .opd_uc_formflex >.opd_uc_formelements:nth-child(6){width:50%}.besidechk{position: relative;} .besidechk > span{position: absolute;top: -19px;right: 1px;display: block;} </style>"

    $(document).ready(function () {
        if ($("#isoldclick").hasClass("main-form-div1")) {
            $(".removecolspan1").attr("colspan", "3");
            $(".removecolspan").attr("colspan", "2");
            $("#ctl00_Head1").append(besidelbl);




        }
        else {
            $("#ctl00_Head1").append(toplbl);
            $(".removecolspan1").attr("colspan", "2");
            $(".removecolspan").attr("colspan", "1");

        }
    });
    </script>--%>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="Server">
    <asp:ScriptManagerProxy ID="ScriptManagerProxy1" runat="server">
        <CompositeScript>
            <Scripts>
                <asp:ScriptReference Path="~/JSScript/FrontOfficeScripts/ServicesGridnew.js" />
                <asp:ScriptReference Path="~/JSScript/FrontOfficeScripts/Changes/OPDQUICKBillNEW.js" />
                <asp:ScriptReference Path="~/JSScript/FrontOfficeScripts/OP_QUICK_VALIDATIONS.js" />
                <asp:ScriptReference Path="~/JSScript/FrontOfficeScripts/Changes/OPDBillNEW.js" />
                <asp:ScriptReference Path="~/JSScript/FrontOfficeScripts/Changes/OPDBillSaveNEW.js" />
                <asp:ScriptReference Path="~/JSScript/FrontOfficeScripts/Changes/OPDConsultation.js" />
                <asp:ScriptReference Path="~/JSScript/FrontOfficeScripts/Changes/OPDOPBill.js" />
            </Scripts>
        </CompositeScript>
    </asp:ScriptManagerProxy>
    <asp:ScriptManagerProxy ID="scmgr" runat="server" CompositeScript-ScriptMode="Release">
        <CompositeScript>
            <Scripts>
                <asp:ScriptReference Name="MicrosoftAjax.js" />
                <asp:ScriptReference Name="MicrosoftAjaxWebForms.js" />
                <asp:ScriptReference Name="AjaxControlToolkit.Compat.Timer.Timer.js" Assembly="AjaxControlToolkit, Version=3.0.30512.20315, Culture=neutral, PublicKeyToken=28f01b0e84b6d53e" />
                <asp:ScriptReference Name="AjaxControlToolkit.Common.Common.js" Assembly="AjaxControlToolkit, Version=3.0.30512.20315, Culture=neutral, PublicKeyToken=28f01b0e84b6d53e" />
                <asp:ScriptReference Name="AjaxControlToolkit.Animation.Animations.js" Assembly="AjaxControlToolkit, Version=3.0.30512.20315, Culture=neutral, PublicKeyToken=28f01b0e84b6d53e" />
                <asp:ScriptReference Name="AjaxControlToolkit.ExtenderBase.BaseScripts.js" Assembly="AjaxControlToolkit, Version=3.0.30512.20315, Culture=neutral, PublicKeyToken=28f01b0e84b6d53e" />
                <asp:ScriptReference Name="AjaxControlToolkit.Accordion.AccordionBehavior.js" Assembly="AjaxControlToolkit, Version=3.0.30512.20315, Culture=neutral, PublicKeyToken=28f01b0e84b6d53e" />
                <asp:ScriptReference Name="AjaxControlToolkit.RoundedCorners.RoundedCornersBehavior.js"
                    Assembly="AjaxControlToolkit, Version=3.0.30512.20315, Culture=neutral, PublicKeyToken=28f01b0e84b6d53e" />
            </Scripts>
        </CompositeScript>
    </asp:ScriptManagerProxy>
    <asp:ScriptManagerProxy ID="scmgr23746" runat="server" CompositeScript-ScriptMode="Release">
        <CompositeScript>
            <Scripts>
                <asp:ScriptReference Name="AjaxControlToolkit.DropShadow.DropShadowBehavior.js" Assembly="AjaxControlToolkit, Version=3.0.30512.20315, Culture=neutral, PublicKeyToken=28f01b0e84b6d53e" />
                <asp:ScriptReference Name="AjaxControlToolkit.DynamicPopulate.DynamicPopulateBehavior.js"
                    Assembly="AjaxControlToolkit, Version=3.0.30512.20315, Culture=neutral, PublicKeyToken=28f01b0e84b6d53e" />
                <asp:ScriptReference Name="AjaxControlToolkit.Compat.DragDrop.DragDropScripts.js"
                    Assembly="AjaxControlToolkit, Version=3.0.30512.20315, Culture=neutral, PublicKeyToken=28f01b0e84b6d53e" />
                <asp:ScriptReference Name="AjaxControlToolkit.PopupExtender.PopupBehavior.js" Assembly="AjaxControlToolkit, Version=3.0.30512.20315, Culture=neutral, PublicKeyToken=28f01b0e84b6d53e" />
                <asp:ScriptReference Name="AjaxControlToolkit.AutoComplete.AutoCompleteBehavior.js"
                    Assembly="AjaxControlToolkit, Version=3.0.30512.20315, Culture=neutral, PublicKeyToken=28f01b0e84b6d53e" />
            </Scripts>
        </CompositeScript>
    </asp:ScriptManagerProxy>
    <asp:ScriptManagerProxy ID="p3" runat="server">
        <CompositeScript>
            <Scripts>
                <asp:ScriptReference Name="AjaxControlToolkit.Common.DateTime.js" Assembly="AjaxControlToolkit, Version=3.0.30512.20315, Culture=neutral, PublicKeyToken=28f01b0e84b6d53e" />
                <asp:ScriptReference Name="AjaxControlToolkit.Common.Threading.js" Assembly="AjaxControlToolkit, Version=3.0.30512.20315, Culture=neutral, PublicKeyToken=28f01b0e84b6d53e" />
                <asp:ScriptReference Name="AjaxControlToolkit.Calendar.CalendarBehavior.js" Assembly="AjaxControlToolkit, Version=3.0.30512.20315, Culture=neutral, PublicKeyToken=28f01b0e84b6d53e" />
                <asp:ScriptReference Name="AjaxControlToolkit.Tabs.Tabs.js" Assembly="AjaxControlToolkit, Version=3.0.30512.20315, Culture=neutral, PublicKeyToken=28f01b0e84b6d53e" />
                <asp:ScriptReference Name="AjaxControlToolkit.Slider.SliderBehavior.js" Assembly="AjaxControlToolkit, Version=3.0.30512.20315, Culture=neutral, PublicKeyToken=28f01b0e84b6d53e" />
                <asp:ScriptReference Name="AjaxControlToolkit.MaskedEdit.MaskedEditBehavior.js" Assembly="AjaxControlToolkit, Version=3.0.30512.20315, Culture=neutral, PublicKeyToken=28f01b0e84b6d53e" />
                <asp:ScriptReference Name="AjaxControlToolkit.HoverMenu.HoverMenuBehavior.js" Assembly="AjaxControlToolkit, Version=3.0.30512.20315, Culture=neutral, PublicKeyToken=28f01b0e84b6d53e" />
                <asp:ScriptReference Name="AjaxControlToolkit.DragPanel.FloatingBehavior.js" Assembly="AjaxControlToolkit, Version=3.0.30512.20315, Culture=neutral, PublicKeyToken=28f01b0e84b6d53e" />
                <asp:ScriptReference Name="AjaxControlToolkit.ModalPopup.ModalPopupBehavior.js" Assembly="AjaxControlToolkit, Version=3.0.30512.20315, Culture=neutral, PublicKeyToken=28f01b0e84b6d53e" />
                <asp:ScriptReference Name="AjaxControlToolkit.Animation.AnimationBehavior.js" Assembly="AjaxControlToolkit, Version=3.0.30512.20315, Culture=neutral, PublicKeyToken=28f01b0e84b6d53e" />
            </Scripts>
        </CompositeScript>
    </asp:ScriptManagerProxy>
    <div class="panel-heading1">
        <div class="pageheader">
            <h1>
                <asp:Label ID="lblPatientType" runat="server" Text="OPD Registration and Billing"> </asp:Label></h1>
            <HeaderControl:PageHeaderControl ID="headerControl1" runat="server" OnAddClientClick="return AddNewClick();"
                OnCancelClientClick="return gridpage1();" OnClearClientClick="Clearpopup();selectRegType();" />
            <div style="float: left; margin: 6px 0 0 8px;">
                <div class="pull-left">
                    <asp:CheckBox ID="chk_old" runat="server" Text="Is Registered" onclick="return onGetPatientBanner();"
                        CssClass="chk-list1" />
                </div>
                <div id="divAssements" style="display: none; float: left; margin-left: 10px;">
                    <asp:CheckBox ID="ChkAssesment" CssClass="chk-list1" runat="server" Text="Assesment Required"
                        onclick="return assesmentclick();" />
                </div>
            </div>
        </div>
    </div>
    <div id="isoldclick" class="main-form-div _registration _opdquick divscroll">
        <div class="panel-div1" id="divRegOne">
            <div class="panel-body grd" style="display: flex;">
                <div style="flex: 1; border-right: 1px solid #cacaca;">
                    <div>
                        <div class="allchkboxes" style="">
                            <div id="divRegNotReq" style="display: none;">
                                <asp:CheckBox CssClass="chk-list" ID="chkIsRegNotReq" runat="server" Text="Diagnostics"
                                    onchange="return OnRegNotReq('Diagnostics');" /></div>
                            <div>
                                <asp:CheckBox ID="ChkMlcStatus" Text=" MLC" runat="server" CssClass="chk-list1" />
                            </div>
                            <div>
                                <asp:CheckBox ID="chkIsSenior" runat="server" onclick="return checksrStatus();" Text="Sr Citizen"
                                    CssClass="chk-list1" />
                            </div>
                            <div>
                                <asp:CheckBox ID="chkhccrd" runat="server" Text="Health Card" onchange="return hcckhhccrd();"
                                    CssClass="chk-list1" />
                            </div>
                            <div>
                                <asp:CheckBox ID="ChkNBorn" Text="NewBorn" CssClass="chk-list1" runat="server" onclick="return onchangeNeBorn();" />
                            </div>
                            <div>
                                <table border="0" cellpadding="0" cellspacing="0" class="FormsCtrl" style="margin-top: 0px">
                                    <tr>
                                        <td align="left" class="re_lbl">
                                            <asp:Label ID="lblFamilyRef1" Text="Family Reff.#" runat="server"></asp:Label>
                                        </td>
                                        <td>
                                            <div class="has-float-label" style="width: 100px;">
                                                <Lookup:Search ID="UcFamilyReff" runat="server" CallbackFn="OnFamilyReff2" />
                                                <label class="pre-floating" style="right: 0;">
                                                    <asp:Label ID="lblFamilyRef" Text="Family Reff.#" CssClass="pull-left" runat="server"></asp:Label>
                                                </label>
                                            </div>
                                        </td>
                                        <td align="left" class="re_lbl">
                                            <label class="ellip">
                                                UMR#</label>
                                        </td>
                                        <td>
                                            <div class="has-float-label" style="width: 100px;">
                                                <div id="tdtxtUmr" runat="server">
                                                    <asp:TextBox ID="txtumrno" runat="server" ReadOnly="true"></asp:TextBox>
                                                </div>
                                                <div id="tdUmr" runat="server" style="display: none;">
                                                    <Lookup:Search ID="ucUMRno" runat="server" SET_CONTEXT_KEY="REG_EXP" CallbackFn="OnUMR" />
                                                </div>
                                                <div style="display: none;" id="divumr" runat="server">
                                                    <Lookup:Search ID="Umrlookup" runat="server" CallbackFn="OnUmrData" />
                                                </div>
                                                <label class="pre-floating" style="right: 0">
                                                    <span style="float: left;">UMR No </span>
                                                </label>
                                            </div>
                                        </td>
                                        <td>
                                            <asp:CheckBox ID="chkisold" runat="server" Text="Renewal" CssClass="chk-list1" onClick="ShowUmrNos(this);" />
                                        </td>
                                        <td align="left" class="re_lbl">
                                            <label class="ellip">
                                                Reg Type</label>
                                        </td>
                                        <td>
                                            <div class="has-float-label">
                                                <asp:DropDownList ID="ddlRegType" runat="server" ToolTip="Select RegType" onchange="return selectRegType(this)">
                                                </asp:DropDownList>
                                                <label class="pre-floating">
                                                    Reg Type</label></div>
                                        </td>
                                        <td>
                                            <asp:CheckBox ID="chkIsOsp" CssClass="chk-list1" runat="server" Text="OSP" Style="display: none" />
                                            <asp:Label ID="lblhcNo" runat="server" Text="HC No:" Style="display: none; padding: 3px 5px 0 20px;
                                                float: left;" Font-Bold="true"></asp:Label>
                                            <asp:Label ID="lblhcnon" runat="server" Style="display: none; float: left; padding: 3px 5px 0 5px;"
                                                Font-Bold="true"></asp:Label>
                                        </td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div>
                        <table border="0" cellpadding="0" cellspacing="0" width="100%" class="FormsCtrl"
                            style="margin: 0px;">
                            <tr>
                                <td>
                                    <div class="formflex flex-column">
                                        <div class="formelements">
                                            <div class="formelementslbl">
                                                Title/Name
                                            </div>
                                            <div class="formelementstxt">
                                                <asp:DropDownList ID="ddlTitle" runat="server" ToolTip="select title" onchange="return SelectGender1(this);"
                                                    onblur="return OnNullValue(this);">
                                                </asp:DropDownList>
                                            </div>
                                        </div>
                                        <div class="formelements">
                                            <div class="formelementslbl">
                                                First
                                            </div>
                                            <div class="formelementstxt">
                                                <asp:TextBox ID="txtFirstName" runat="server" autocomplete="off" MaxLength="64" placeholder=" "
                                                    ToolTip="Enter First name" onkeyup="return SetDisplayName1(this);" onkeypress="return NumCharsSpaceWithHiphen1(event); OnNullValue(this);"
                                                    onblur="this.value=TitleCase(this);CheckCombinationValidations();" onkeydown="return validateTextBox(event, this);"
                                                    onpaste="return false;"></asp:TextBox>
                                            </div>
                                        </div>
                                        <div class="formelements">
                                            <div class="formelementslbl">
                                                Middle
                                            </div>
                                            <div class="formelementstxt">
                                                <asp:TextBox ID="txtMiddleName" runat="server" MaxLength="64" autocomplete="off"
                                                    onkeyup="return SetDisplayName1(this);" placeholder=" " ToolTip="Enter Middle Name"
                                                    onkeypress="return NumCharsSpaceWithHiphen1(event);" onblur="this.value=TitleCase(this);CheckCombinationValidations();"
                                                    onpaste="return false;"></asp:TextBox>
                                            </div>
                                        </div>
                                        <div class="formelements">
                                            <div class="formelementslbl">
                                                Last
                                            </div>
                                            <div class="formelementstxt">
                                                <asp:TextBox ID="txtLastName" runat="server" autocomplete="off" MaxLength="64" placeholder="Last Name"
                                                    ToolTip="Enter Last Name" onkeyup="return SetDisplayName1(this);" onkeypress="return NumCharsSpaceWithHiphen2(event); OnNullValue(this);"
                                                    onblur="this.value=TitleCase(this);CheckCombinationValidations();" onpaste="return false;"></asp:TextBox>
                                            </div>
                                        </div>
                                        <div class="formelements">
                                            <div class="formelementslbl">
                                                DOB
                                            </div>
                                            <div class="formelementstxt cal">
                                                <div class="opdate">
                                                    <div id="divnewage2" runat="server">
                                                        <div class="clr">
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="formelements">
                                            <div class="formelementslbl">
                                                Gender
                                            </div>
                                            <div class="formelementstxt">
                                                <asp:DropDownList ID="ddlGender" runat="server" ToolTip="select gender" onchange="return SrvGender(this);"
                                                    Enabled="true" onkeyup="return OnNullValue(this);" CssClass="dtgender">
                                                </asp:DropDownList>
                                            </div>
                                        </div>
                                        <div class="formelements">
                                            <div class="formelementslbl">
                                                KIN Name
                                            </div>
                                            <div class="formelementstxt ">
                                                <asp:DropDownList ID="ddlResPerson" runat="server" onchange="ddlResPersonChng(this);"
                                                    onblur="return OnNullValue(this);" ToolTip="select Responsible person">
                                                </asp:DropDownList>
                                            </div>
                                        </div>
                                        <div class="formelements">
                                            <div class="formelementstxt mtop">
                                                <asp:TextBox ID="txtResPerson" runat="server" ToolTip="Enter Responsible Person"
                                                    onkeyup="OnResPonsiblePerson(); mothername();return OnNullValue(this);" onblur="ChkSpouse(this);this.value=TitleCase(this);"
                                                    onkeypress="return OnlyCharecters(event);"></asp:TextBox>
                                            </div>
                                        </div>
                                        <div class="formelements">
                                            <div class="formelementslbl">
                                                Father
                                            </div>
                                            <div class="formelementstxt">
                                                <asp:TextBox ID="txtfathername" runat="server" MaxLength="64" autocomplete="off"
                                                    ToolTip="Enter mother's Father name" onkeypress="return OnlyCharecters(event);"
                                                    onkeyup="return mothername1(this);" onblur="this.value=TitleCase(this);"></asp:TextBox>
                                            </div>
                                        </div>
                                        <div class="formelements">
                                            <div class="formelementslbl">
                                                Mother
                                            </div>
                                            <div class="formelementstxt">
                                                <asp:TextBox ID="txtMotherMName" runat="server" MaxLength="64" autocomplete="off"
                                                    ToolTip="Enter mother's Maiden name" onkeypress="return OnlyCharecters(event);"
                                                    onkeyup="return mothername1(this);" onblur="this.value=TitleCase(this);"></asp:TextBox>
                                            </div>
                                        </div>
                                        <div class="formelements">
                                            <div class="formelementslbl">
                                                Marital Status
                                            </div>
                                            <div class="formelementstxt">
                                                <asp:DropDownList ID="ddlMaritalStatus" runat="server" onchange="return TitileGenderMapping(this);"
                                                    ToolTip="Select Marital Status">
                                                </asp:DropDownList>
                                            </div>
                                        </div>
                                        <div class="formelements">
                                            <div class="formelementslbl">
                                                Nationality
                                            </div>
                                            <div class="formelementstxt">
                                                <asp:DropDownList ID="ddlNationality" runat="server" onchange="ddlNationlityChange();changeaddr();return OnNullValue(this);">
                                                </asp:DropDownList>
                                            </div>
                                        </div>
                                        <div class="formelements">
                                            <div class="formelementslbl">
                                                Occupation
                                            </div>
                                            <div class="formelementstxt">
                                                <asp:DropDownList ID="ddlOccupation" runat="server" ToolTip="select occupation">
                                                </asp:DropDownList>
                                            </div>
                                        </div>
                                        <div class="formelements">
                                            <div class="formelementslbl">
                                                Religion
                                            </div>
                                            <div class="formelementstxt">
                                                <asp:DropDownList ID="ddlReligion" runat="server" ToolTip="Select Religion" onchange="OnNullValue(this);">
                                                </asp:DropDownList>
                                            </div>
                                        </div>
                                        <div class="formelements">
                                            <div class="formelementslbl">
                                                Race/Ethnicity
                                            </div>
                                            <div class="formelementstxt">
                                                <asp:DropDownList ID="ddlEthnicity" runat="server" ToolTip="select Ethnicity">
                                                    <asp:ListItem Value="0">-Select-</asp:ListItem>
                                                    <asp:ListItem Value="1">Black</asp:ListItem>
                                                    <asp:ListItem Value="2">White</asp:ListItem>
                                                </asp:DropDownList>
                                            </div>
                                        </div>
                                        <div class="formelements">
                                            <div class="formelementslbl">
                                                ID Proof
                                            </div>
                                            <div class="formelementstxt">
                                                <asp:DropDownList ID="ddlproofid" runat="server" onchange="proofvalidation();CheckProofIDStatus('REG'); OnddlProofChnages();">
                                                </asp:DropDownList>
                                            </div>
                                        </div>
                                        <div class="formelements">
                                            <div class="formelementstxt mtop">
                                                <asp:TextBox ID="txtSSN" runat="server" onkeypress="return NumCharsWithSpace1(event);"
                                                    onkeyup="return  Idprofflength(this);" ToolTip="Enter Social Security Number"
                                                    MaxLength="64" onblur="this.value=TitleCase(this);Validproof(this);CheckProofIDStatus('REG')"
                                                    Enabled="false" placeholder="ID No"></asp:TextBox>
                                            </div>
                                        </div>
                                        <div class="formelements">
                                            <div class="formelementslbl">
                                                Consultant
                                            </div>
                                            <div class="formelementstxt">
                                                <Lookup:Search ID="ucConsultant" OnBlurRequired="true" runat="server" CallbackFn="OnDoctors" />
                                                <asp:HiddenField ID="hdnConsultant" runat="server" />
                                            </div>
                                        </div>
                                        <div class="formelements">
                                            <div class="formelementslbl">
                                                How did you know our hospital
                                            </div>
                                            <div class="formelementstxt">
                                                <asp:DropDownList ID="ddlquestionary" runat="server">
                                                </asp:DropDownList>
                                            </div>
                                        </div>
                                        <div class="formelements" id="tdddlPatType" runat="server">
                                            <div class="formelementslbl">
                                                Patient Type
                                            </div>
                                            <div class="formelementstxt">
                                                <asp:DropDownList ID="ddlPatientType" onchange="return ddlpatienttypeChange(this);"
                                                    runat="server" onblur="return OnNullValue(this);">
                                                </asp:DropDownList>
                                            </div>
                                        </div>
                                        <div class="formelements">
                                            <div class="formelementslbl">
                                                Visit Type
                                            </div>
                                            <div class="formelementstxt ">
                                                <asp:DropDownList ID="pre_regi" runat="server" onchange="return Apnmt_PreReg();">
                                                    <asp:ListItem Selected="True" Value="0">Walk-in</asp:ListItem>
                                                    <asp:ListItem Value="1">Appointment#</asp:ListItem>
                                                    <asp:ListItem Value="2">Pre Registration #</asp:ListItem>
                                                    <asp:ListItem Value="5">OSP Bill</asp:ListItem>
                                                </asp:DropDownList>
                                            </div>
                                        </div>
                                        <div class="formelements" id="divaptpre">
                                            <div class="formelementstxt mtop">
                                                <div id="divapmnt">
                                                    <Lookup:Search ID="UcAppointmentNo" runat="server" SET_CONTEXT_KEY="RCN" CallbackFn="OnAppointment"
                                                        OnBlurRequired="true" />
                                                    <asp:HiddenField ID="hdnapmntReg" runat="server" />
                                                </div>
                                                <div style="display: none;" id="divprereg">
                                                    <Lookup:Search ID="UCprereg" runat="server" CallbackFn="OnPreRegistration" OnBlurRequired="true" />
                                                    <asp:HiddenField ID="HiddenField1" runat="server" />
                                                </div>
                                                <div id="divOSP" style="display: none;">
                                                    <asp:TextBox ID="TxtOspNO" runat="server" Enabled="false" Width="49%" onfocus="OnLostFoucs(this)"></asp:TextBox>
                                                    <asp:TextBox ID="TxtOspBillDt" runat="server" Enabled="false" Width="49%" onfocus="OnLostFoucs(this)"></asp:TextBox>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="formelements">
                                            <div class="formelementstxt mtop">
                                                <asp:RadioButtonList ID="rbt_pat_type" runat="server" RepeatDirection="Horizontal"
                                                    RepeatLayout="Flow" CssClass="chk-list1" onchange="VIPColorChanges();return PatientTypeChange();">
                                                    <asp:ListItem Selected="True" Value="0">Routine</asp:ListItem>
                                                    <asp:ListItem Value="1">VIP</asp:ListItem>
                                                    <asp:ListItem Value="2">VVIP</asp:ListItem>
                                                </asp:RadioButtonList>
                                            </div>
                                        </div>
                                        <div class="formelements offVipDetails">
                                            <div class="formelementslbl">
                                                VIP Source
                                            </div>
                                            <div class="formelementstxt">
                                                <asp:DropDownList ID="dd_reg_source" runat="server" Enabled="false" onchange="return OnNullValue(this);">
                                                </asp:DropDownList>
                                            </div>
                                        </div>
                                        <div class="formelements offVipDetails">
                                            <div class="formelementslbl">
                                                Remarks
                                            </div>
                                            <div class="formelementstxt">
                                                <asp:TextBox ID="source_remarks" onblur="this.value=TitleCase(this);" Enabled="false"
                                                    onkeyup="OnNullValue(this);" runat="server"></asp:TextBox>
                                            </div>
                                        </div>
                                        <div class="formelements trstaff" runat="server" style="display: none;">
                                            <div class="formelementslbl">
                                                <asp:Label ID="lbltypeName" runat="server" Text="Staff Name"></asp:Label>
                                            </div>
                                            <div class="formelementstxt">
                                                <div id="divHC" style="display: none;">
                                                    <asp:DropDownList ID="ddlhctype" runat="server">
                                                    </asp:DropDownList>
                                                </div>
                                                <div id="divStaff" style="display: none;">
                                                    <Lookup:Search ID="UcStaffName" runat="server" CallbackFn="OnStaffselection" />
                                                </div>
                                            </div>
                                        </div>
                                        <div class="formelements trstaff" title="" runat="server" style="display: none;">
                                            <div class="formelementslbl">
                                                <asp:Label ID="lbltypeRelation" runat="server" Text="Staff Relation"></asp:Label>
                                            </div>
                                            <div class="formelementstxt">
                                                <asp:DropDownList ID="StaffRelation" runat="server" onchange="return BindEmpData();">
                                                </asp:DropDownList>
                                            </div>
                                        </div>
                                    </div>
                                    <%--   <div id="trstaff" style="     display: flex !important;  width: 36%;">
                                    

                                        </div>--%>
                                </td>
                            </tr>
                        </table>
                    </div>
                </div>
                <div style="width: 160px; background: #FAFAFA;" id="divRegTwo">
                    <div class="regi_photo">
                        <uc9:ImageUploadControl ID="ImageUploadControl1" runat="server" IsShowSignature="false"
                            IsShowLoad="false" IsShowRecord="false" />
                    </div>
                    <div style="display: none;">
                        <table border="0" cellpadding="0" cellspacing="0" width="100%" class="FormsCtrl"
                            style="margin-top: 0px">
                        </table>
                    </div>
                </div>
            </div>
        </div>
        <div style="display: none;">
            <div class="regi_pd-1">
            </div>
            <div class="regi_pd-2">
            </div>
            <table>
                <tr style="display: none;">
                    <td align="left" name="label">
                        UMR#
                        <asp:CheckBox ID="CheckBox1" runat="server" Text="" onclick="return OnGetUmrLookup();"
                            Style="display: none;" />
                    </td>
                    <td align="left">
                    </td>
                    <td align="left" name="label">
                        Reg.#
                    </td>
                    <td align="left">
                        <asp:TextBox ID="txtRegistration" runat="server" MaxLength="20" onfocus="OnLostFoucs(this)"
                            ReadOnly="true" Width="98%"></asp:TextBox>
                        <asp:HiddenField ID="hdnregno" runat="server" />
                    </td>
                </tr>
                <tr style="display: none;">
                    <td colspan="2">
                        <div id="divSeniorCitizen" style="float: left; height: 27px; line-height: 27px; margin-right: 10px;
                            display: none;">
                            <div style="float: left; width: 12px; height: 12px; margin: 7px 5px 0 0; background-color: Red;
                                border-radius: 50%; border: 1px solid white;">
                            </div>
                            Senior Citizen <i class="senior"></i>
                    </td>
                </tr>
                <tr>
                    <td>
                        Reg Fee
                    </td>
                    <td>
                        <asp:TextBox ID="txtregfee" runat="server" MaxLength="6" onfocus="OnLostFoucs(this)"
                            Width="27%" ReadOnly="true"></asp:TextBox>
                        <asp:HiddenField ID="hdnregfee" runat="server" />
                    </td>
                    <td align="left" name="label" width="10%">
                        Reg Dt
                    </td>
                    <td align="left" width="15%">
                        <asp:TextBox ID="txtRegDateTime" runat="server" MaxLength="25" onfocus="OnLostFoucs(this)"
                            ReadOnly="true"></asp:TextBox>
                        <asp:HiddenField ID="hdnRegDateTime" runat="server" />
                        <asp:HiddenField ID="hdnregdt" runat="server" />
                    </td>
                    <td align="left" name="label" width="10%">
                        Reg. Validity
                    </td>
                    <td align="left" width="15%" name="last">
                        <asp:TextBox ID="txtregValidity" runat="server" MaxLength="25" onfocus="OnLostFoucs(this)"
                            ReadOnly="true"></asp:TextBox>
                        <asp:HiddenField ID="hdnregvaliddt" runat="server" />
                    </td>
                    <td align="left" name="label">
                        Address2
                    </td>
                    <td align="left" colspan="3">
                        <asp:TextBox ID="txtAddress2" runat="server" MaxLength="120" autocomplete="off" ToolTip="Enter Address2"
                            CssClass="tbwidth" onblur="Address2values();return UpperCase(this);" onkeyup="return onExtendedAddress();"></asp:TextBox>
                    </td>
                </tr>
                <tr>
                    <td align="left" name="label" style="display: none;">
                        Display Name
                    </td>
                    <td align="left" colspan="3" name="last" style="display: none;">
                        <div style="overflow: hidden; width: 100%; height: 25px; border: 1px solid #cacaca;">
                            <div style="text-overflow: ellipsis; overflow: hidden; width: 90%; height: 25px;
                                line-height: 25px;">
                                <asp:Label ID="txtDisplayname" runat="server" readonly="True" autocomplete="off"
                                    MaxLength="64"></asp:Label>
                            </div>
                        </div>
                    </td>
                    <td id="tdcorporate" runat="server" align="left" name="label" style="display: none;">
                        <asp:Label ID="lblcorp" runat="server" Text="Employee"></asp:Label>
                    </td>
                    <td id="tdcorporatetxt" runat="server" align="left" name="last" style="display: none;">
                        <div style="position: relative;">
                            <asp:HiddenField ID="hidenpattypeval" runat="server" />
                            <asp:TextBox ID="txtcorporte" runat="server" MaxLength="64" onblur="HideAutoCompletion(this);"
                                onkeypress="makeTxtBxAuto(this,'Employee');" placeholder="" autocomplete="off"></asp:TextBox>
                            <div id="AutoEmployeeDiv" class="lk_auto_options">
                            </div>
                        </div>
                    </td>
                    <td align="left" style="display: none;">
                        <asp:DropDownList ID="ddlDisplayName" runat="server" ToolTip="Select Display name"
                            onchange="return SetDisplayName1(this);" Enabled="false">
                        </asp:DropDownList>
                    </td>
                </tr>
                <tr>
                    <td align="left" name="label" width="12%">
                        Mother Name
                    </td>
                    <td align="left" colspan="3">
                        <asp:TextBox ID="txtMotherMNam" runat="server" MaxLength="64" autocomplete="off"
                            ToolTip="Enter mother's Maiden name" onkeypress="return OnlyCharecters(event);"
                            onblur="this.value=TitleCase(this);"></asp:TextBox>
                    </td>
                    <td align="left" name="label" width="11%">
                        KIN Name
                    </td>
                    <td align="left" width="15.4%">
                        <asp:DropDownList ID="ddlResPerso" runat="server" onchange="ddlResPersonChng(this);"
                            onblur="return OnNullValue(this);" ToolTip="select Responsible person">
                        </asp:DropDownList>
                    </td>
                    <td align="left" colspan="2" name="last">
                        <asp:TextBox ID="txtResPerso" runat="server" ToolTip="Enter Responsible Person" onkeyup="OnResPonsiblePerson();return OnNullValue(this);"
                            onblur="ChkSpouse(this);this.value=TitleCase(this);" onkeypress="return OnlyCharecters(event);"></asp:TextBox>
                    </td>
                </tr>
                <tr>
                    <td align="left" name="label">
                        Marital Status
                    </td>
                    <%-- <td align="left">
                        <asp:DropDownList ID="ddlMaritalStatus" runat="server" onchange="return TitileGenderMapping(this);"
                            ToolTip="select marital status">
                        </asp:DropDownList>--%>
                    <%--   </td>--%>
                    <td align="left" name="label">
                        Blood Group
                    </td>
                    <td align="left" style="width: 16%;">
                        <asp:DropDownList ID="ddlBloodGroup" runat="server" ToolTip="select blood group">
                        </asp:DropDownList>
                    </td>
                    <td align="left" name="label" width="11%">
                        Religion
                    </td>
                    <%--  <td align="left" name="last">
                        <asp:DropDownList ID="ddlReligion" runat="server" ToolTip="select religion">
                        </asp:DropDownList>
                    </td>--%>
                </tr>
            </table>
            <asp:CheckBox ID="chkVIP" Text=" VIP" runat="server" Visible="false" />
            <%--           <asp:CheckBox ID="ChkNBorn" Text="NewBorn" runat="server" onclick="return onchangeNeBorn();" />--%>
        </div>
        <div id="divBanner" style="width: 99.9%; display: none;">
            <uc4:PatientControl ID="umrPatientDetails" runat="server" />
        </div>
        <div style="width: 29.2%;" class="panel-div ucReferal-div referral_flex">
            <uc11:ReferalUserControl ID="ucReferal" runat="server" />
        </div>
        <div id="divAddress" style="width: 70%; border: 0px; margin: 0;" class="panel-div opd-address">
            <uc2:AddressDetails ID="Address1" runat="server" savevisible="false" />
        </div>
        <div id="divRegCorporate" style="display: none; width: 33.2%" class="panel-div grd CompanyInfo Corporate_flex">
            <uc7:OPCorporate ID="uccorporate" runat="server" />
        </div>
        <div id="divContactDtls" style="width: 27.2%; display: none;" class="panel-div pull-right reg-contact-div">
            <div class="panel-heading smallheading">
                <h3 class="panel-title">
                    Contact details
                </h3>
                <div class="righttxt1">
                    <asp:CheckBox ID="CheckBox3" runat="server" onclick="return checksrStatus();" Text="Senior Citizen"
                        CssClass="chk-list" />
                    <asp:CheckBox ID="chkstopalert" runat="server" Text="DND" CssClass="chk-list" />
                    <asp:CheckBox ID="chkMLC" runat="server" Text="MLC" CssClass="chk-list" />
                </div>
            </div>
            <div style="height: 149px;" class="panel-body reg-contact-body">
                <table border="0" cellpadding="0" cellspacing="0" align="center" class="FormsCtrl"
                    width="100%">
                    <tr>
                        <td width="35%" name="label">
                            Mobile# 1
                        </td>
                        <td width="65%">
                            <div class="mobile">
                                <span class="isdcode" id="isdcodemobile1"></span>
                                <asp:TextBox ID="txtMobile1" autocomplete="off" runat="server" ToolTip="Enter Mobile Number1"
                                    class="mobilenumber" onpaste="return false;" onblur=" CheckCombinationValidations();OTPCheck(this);CheckApptMblNo(); return OnNullValue(this);"
                                    ondrop="return false;" MaxLength="10" onkeypress="return chkNumeric(event);"
                                    onkeyup="extendedDisplay.setData(4, 'Mobile# :', this.value);"></asp:TextBox>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td width="28%" name="label">
                            Mobile# 2
                        </td>
                        <td width="70%">
                            <div class="mobile">
                                <span class="isdcode" id="isdcodemobile3"></span>
                                <asp:TextBox ID="txtMobile3" autocomplete="off" runat="server" ToolTip="Enter Alternate Mobile Number2"
                                    class="mobilenumber" onpaste="return false;" MaxLength="10" onkeypress="return chkNumeric(event);"></asp:TextBox>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td width="28%" name="label">
                            Telephone #
                        </td>
                        <td width="70%">
                            <asp:TextBox ID="txtMobile2" runat="server" autocomplete="off" MaxLength="14" ToolTip="Enter Std Number"
                                onpaste="return false;" onblur="return ValidateValidateLandNumber(this);" onkeypress="return chkNumeric(event);"></asp:TextBox>
                        </td>
                    </tr>
                    <tr>
                        <td align="left" name="label">
                            Email
                        </td>
                        <td>
                            <asp:TextBox ID="txtemail" autocomplete="off" runat="server" ToolTip="Enter EmailID"
                                onchange="return EmailIdValidation(this);" onkeyup="extendedDisplay.setData(5, 'Email :', this.value);">
                            </asp:TextBox>
                        </td>
                    </tr>
                </table>
            </div>
        </div>
        <div class="panel-div pull-right order-invest" style="width: 35.2%; display: none;"
            id="divreq">
            <div class="panel-heading smallheading">
                <h3 class="panel-title">
                    <asp:Label ID="lblreqtext" runat="server" Text="Consultation Requisitions"></asp:Label>
                </h3>
            </div>
            <div class="panel-body grd" style="height: 127px; display: none; clear: both;" id="divRequisitions">
                <div id="tbl_PatRequisitions" class="divscroll" style="height: 127px;">
                </div>
            </div>
            <div class="panel-body grd divscroll order-invest1" style="height: 127px; clear: both;
                 display: none;" id="divOrderInvestigations">
                <asp:GridView ID="gv_Ind_Services" runat="server" Width="100%" CssClass="grid gv_Ind_Services-Width"
                    GridLines="None" BorderWidth="0" CellPadding="0" CellSpacing="0" ShowHeaderWhenEmpty="True"
                    AutoGenerateColumns="false">
                    <RowStyle CssClass="gridrow" />
                    <AlternatingRowStyle CssClass="gridAlternaterow" />
                    <Columns>
                        <asp:TemplateField>
                            <HeaderStyle CssClass="chk" />
                            <ItemStyle CssClass="chk" />
                            <ItemTemplate>
                                <asp:CheckBox ID="cbindent" runat="server" onclick="return CheckIndChk(this);" />
                            </ItemTemplate>
                        </asp:TemplateField>
                        <asp:TemplateField HeaderText="Order Id">
                            <HeaderStyle CssClass="ordId" />
                            <ItemStyle CssClass="ordId" />
                            <ItemTemplate>
                                <asp:Label ID="lblOrdId" runat="server" Text='<%#Eval("ORDER_ID")%>'></asp:Label>
                            </ItemTemplate>
                        </asp:TemplateField>
                        <asp:TemplateField HeaderText="Order Dt">
                            <HeaderStyle CssClass="orddt" />
                            <ItemStyle CssClass="orddt" />
                            <ItemTemplate>
                                <asp:Label ID="lblOrddt" runat="server" Text='<%#Eval("ORDER_DT")%>'></asp:Label>
                            </ItemTemplate>
                        </asp:TemplateField>
                        <asp:TemplateField HeaderText="Order Type">
                            <HeaderStyle CssClass="ordtype" />
                            <ItemStyle CssClass="ordtype" />
                            <ItemTemplate>
                                <asp:Label ID="lblordtyp" runat="server" Text='<%#Eval("ORDER_TYPE")%>'></asp:Label>
                            </ItemTemplate>
                        </asp:TemplateField>
                        <asp:TemplateField HeaderText="Doctor Name">
                            <HeaderStyle CssClass="Docname" />
                            <ItemStyle CssClass="Docname" />
                            <ItemTemplate>
                                <asp:Label ID="lbldocname" runat="server" Text='<%#Eval("DOCTOR_NAME")%>'></asp:Label>
                            </ItemTemplate>
                        </asp:TemplateField>
                        <asp:TemplateField HeaderText="Created Date">
                            <HeaderStyle CssClass="visDt" />
                            <ItemStyle CssClass="visDt" />
                            <ItemTemplate>
                                <asp:Label ID="lblvisDt" runat="server" Text='<%#Eval("VISIT_DT")%>'></asp:Label>
                                <asp:HiddenField ID="hdn_Ind_pat_id" runat="server" />
                                <asp:HiddenField ID="hdn_ind_doc_id" runat="server" />
                                <asp:HiddenField ID="hdn_ind_Umr_no" runat="server" />
                            </ItemTemplate>
                        </asp:TemplateField>
                        <asp:TemplateField HeaderText="Created By">
                            <HeaderStyle CssClass="visDt" />
                            <ItemStyle CssClass="visDt" />
                            <ItemTemplate>
                                <asp:Label ID="lblcreateby" runat="server" Text='<%#Eval("CREATE_BY_NAME")%>'></asp:Label>
                            </ItemTemplate>
                        </asp:TemplateField>
                        <asp:TemplateField HeaderText="Boking Mode">
                            <HeaderStyle CssClass="visDt" />
                            <ItemStyle CssClass="visDt" />
                            <ItemTemplate>
                                <asp:Label ID="lblBookedMode" runat="server"></asp:Label>
                            </ItemTemplate>
                        </asp:TemplateField>
                    </Columns>
                </asp:GridView>
            </div>
            <div class="panel-body" style="display: block;border-top: 1px solid #cacaca;">
                <table border="0" cellpadding="0" cellspacing="0" width="100%" class="FormsCtrl order-tbl"
                    style="margin-top: 3px;">
                    <tr>
                        <td align="left">
                            Ordering Physician
                        </td>
                        <td align="left">
                            <Lookup:Search ID="UcOdrPsyn" runat="server" CallbackFn="OnOrderPhysicianSelection" />
                        </td>
                    </tr>
                     <tr>
                            <td align="left" style="width: 3%;">
                            <label class="ellip">
                                Diagnosis</label>
                            </td>
                            <td align="left" style="width: 69%;">
                                <asp:HiddenField ID="hdnDiagnosis_Cd" runat="server" />
                                <Lookup:Search ID="UcDiagnosis" runat="server" CallbackFn="onDiagnosis" autocomplete="off" />
                            </td>
                        </tr>
                </table>
            </div>
        </div>
        <div id="emppnl" runat="server" onfocus="return OnCheckFocus();" class="panel-divW pull-left"
            style="display: none;">
            <div class="panel-heading smallheading">
                <h3 class="panel-title">
                    Company Info
                </h3>
                <div id="opdimgdiv" style="position: absolute; right: 0px; top: 0px; background: #fff;
                    padding: 1px 6px; display: none">
                    <asp:Image ID="Image2" runat="server" Height="23px" />
                </div>
                <div id="tdchkempdue" style="float: right; margin-top: -3px;">
                    <asp:CheckBox ID="chkEmpDue" runat="server" Text="Emp Due" Enabled="false" onclick="CompareCoportaAmt(this);"
                        CssClass="chk-list" /></div>
            </div>
            <div class="panel-body ucEmployerInfo">
                <ucE:EmployerInfo ID="EmployerInfo1" runat="server" />
            </div>
        </div>
        <Op:Services ID="UCServices" runat="server" />
        <div id="DivCorporate" class="panel-div" style="width: 99.2%; display: none;">
            <div class="panel-body">
                <table border="0" cellpadding="0" cellspacing="0" align="left" width="100%" class="FormsCtrl">
                    <tr id="tr2" runat="server">
                        <td align="left" width="10%">
                            Corp. Pay Amount
                        </td>
                        <td align="left" width="15%">
                            <asp:TextBox ID="txtCorpPayAmt" Enabled="false" onfocus="OnLostFoucs(this)" runat="server"
                                CssClass="Aright"></asp:TextBox>
                            <asp:HiddenField ID="hdnOrgGrossAmt" runat="server" />
                            <asp:HiddenField ID="hdnOrgCncnAmt" runat="server" />
                        </td>
                        <td align="left" width="10%">
                            Corp. Due Amount
                        </td>
                        <td align="left" width="15%">
                            <asp:TextBox ID="txtCorpDueAmt" Enabled="false" CssClass="Aright" onfocus="OnLostFoucs(this)"
                                runat="server"></asp:TextBox>
                        </td>
                        <td align="left">
                            Emp Pay Amount
                        </td>
                        <td align="left">
                            <asp:TextBox ID="txtEmpPayAmt" Enabled="false" CssClass="Aright" onfocus="OnLostFoucs(this)"
                                runat="server"></asp:TextBox>
                            <asp:HiddenField ID="hdnEmpGrossAmt" runat="server" />
                            <asp:HiddenField ID="hdnEmpCncnAmt" runat="server" />
                        </td>
                    </tr>
                    <tr id="tr3" runat="server">
                        <td align="left" width="10%">
                            Corp %
                        </td>
                        <td align="left" width="15%">
                            <asp:TextBox ID="txtCorpPercentage" CssClass="Aright" onkeypress="return numeralsOnly(event);"
                                onpaste="return false;" onkeyup="Calculateempperpatper(this); " runat="server"></asp:TextBox>
                        </td>
                        <td align="left" width="10%">
                            Emp %
                        </td>
                        <td align="left" width="15%">
                            <asp:TextBox ID="txtEmpPercentage" Enabled="false" CssClass="Aright" onfocus="OnLostFoucs(this)"
                                runat="server"></asp:TextBox>
                        </td>
                        <td align="left" width="10%">
                            Org Tax Amt
                        </td>
                        <td align="left" width="15%">
                            <asp:TextBox ID="txtOrgTaxAmt" Enabled="false" onfocus="OnLostFoucs(this)" runat="server"
                                CssClass="Aright"></asp:TextBox>
                        </td>
                        <td align="left" width="10%">
                            Emp Tax Amt
                        </td>
                        <td align="left" width="15%">
                            <asp:TextBox ID="txtEmpTaxAmt" Enabled="false" onfocus="OnLostFoucs(this)" runat="server"
                                CssClass="Aright"></asp:TextBox>
                        </td>
                    </tr>
                </table>
            </div>
        </div>
        <div class="panel-divW">
            <uc6:ReceiptControl ID="ReceiptControl2" runat="server" />
        </div>
        <div class="panel-div" style="width: 69.2%; display: none;" id="visadtlsdiv">
            <div class="panel-heading smallheading">
                <h3 class="panel-title">
                    Passport and Visa Details</h3>
            </div>
            <div class="panel-body">
                <table border="0" cellpadding="0" cellspacing="0" align="center" width="100%" class="FormsCtrl">
                    <tr>
                        <td align="left" width="10%" class="re_lbl">
                            Passport #
                        </td>
                        <td align="left" width="15%">
                            <div class="has-float-label">
                                <asp:TextBox ID="txtPassprotno" runat="server" MaxLength="20" ToolTip="Enter Passport Number"
                                    onkeypress="return AlphaNumaric(event);" onkeyup="OnPassportNullValue(this);return OnNullValue(this);"
                                    onblur="this.value=TitleCase(this);" Enabled="false"></asp:TextBox>
                                <label class="pre-floating">
                                    Passport #</label></div>
                        </td>
                        <td align="left" width="10%" class="re_lbl">
                            Passport Issue Dt
                        </td>
                        <td align="left" class="cal" width="15%">
                            <div class="has-float-label">
                                <asp:TextBox ID="txtIssueDt" runat="server" MaxLength="20" onchange="return ValidateDate1(this);"
                                    onkeypress="return false;" ToolTip="Enter Passport Issued Date" placeholder="Select Date"
                                    Enabled="false" onblur="return OnNullValue(this);"></asp:TextBox>
                                <label class="pre-floating">
                                    Passport Issue Dt</label></div>
                        </td>
                        <td align="left" width="10%" class="re_lbl">
                            Passport Expiry Dt
                        </td>
                        <td align="left" class="cal" width="15%">
                            <div class="has-float-label">
                                <asp:TextBox ID="txtExpiryDt" runat="server" MaxLength="20" ToolTip="Enter Passport Expiry Date"
                                    onkeypress="return false;" onchange="return ValidateDate1(this);" placeholder="Select Date"
                                    Enabled="false" onblur="return OnNullValue(this);"></asp:TextBox>
                                <label class="pre-floating">
                                    Passport Expiry Dt</label></div>
                        </td>
                        <td align="left" width="10%" class="re_lbl">
                            Passport Expiry Dt
                        </td>
                        <td align="left" class="cal" width="15%" name="last">
                            <div class="has-float-label">
                                <div style="position: relative;">
                                    <asp:HiddenField ID="HiddenField4" runat="server" />
                                    <asp:TextBox ID="txtissuedat" runat="server" onfocus="OnIssueSetContextkey();" MaxLength="64"
                                        onblur="HideAutoCompletion(this);" onkeyup="return OnNullValue(this);" autocomplete="off"
                                        Enabled="false"></asp:TextBox>
                                    <ajaxToolkit:AutoCompleteExtender ID="AutoCompleteExtender1" runat="server" TargetControlID="txtissuedat"
                                        UseContextKey="true" ServiceMethod="GetAutoComp_City2" ServicePath="~/AddressMasterService.asmx"
                                        OnClientItemSelected="onissuedatsel" EnableCaching="false" CompletionSetCount="10"
                                        MinimumPrefixLength="1" CompletionInterval="5" CompletionListCssClass="autocomplete_completionListElement"
                                        CompletionListItemCssClass="autocomplete_listItem" ContextKey="DEPARTMENT" CompletionListHighlightedItemCssClass="autocomplete_highlightedListItem">
                                    </ajaxToolkit:AutoCompleteExtender>
                                </div>
                                <label class="pre-floating">
                                    Passport Expiry Dt</label></div>
                        </td>
                    </tr>
                    <tr>
                        <td align="left" class="re_lbl">
                            Visa Issued At
                        </td>
                        <td align="left">
                            <div class="has-float-label">
                                <Lookup:Search ID="ucIssuedAt" runat="server" CallbackFn="OnVisaIssueAt" />
                                <label class="pre-floating">
                                    Visa Issued At</label></div>
                        </td>
                        <td align="left" class="re_lbl">
                            Visa Control#
                        </td>
                        <td align="left">
                            <div class="has-float-label">
                                <asp:TextBox ID="txtVisaControlNo" runat="server" MaxLength="20" onkeypress="visacolourchange();"></asp:TextBox>
                                <label class="pre-floating">
                                    Visa Control#</label></div>
                        </td>
                        <td align="left" class="re_lbl">
                            Visa Type /Class
                        </td>
                        <td align="left">
                            <div class="has-float-label">
                                <asp:DropDownList ID="ddlVisatype" runat="server" onChange="visacolourchange();">
                                </asp:DropDownList>
                                <label class="pre-floating">
                                    Visa Type /Class</label></div>
                        </td>
                        <td align="left" class="re_lbl">
                            Visa Issue Dt
                        </td>
                        <td align="left">
                            <div class="has-float-label">
                                <asp:TextBox ID="txtVisaIssueDt" runat="server" MaxLength="20" onchange="visacolourchange(); ValidateDate(this);"
                                    ReadOnly="true"></asp:TextBox>
                                <label class="pre-floating">
                                    Visa Issued At</label></div>
                        </td>
                    </tr>
                    <tr>
                        <td align="left" class="re_lbl">
                            Visa Expiry Dt
                        </td>
                        <td align="left">
                            <div class="has-float-label">
                                <asp:TextBox ID="txtVisaExpDt" runat="server" MaxLength="20" onchange="visacolourchange(); ValidateDate(this);"
                                    ReadOnly="true"></asp:TextBox>
                                <label class="pre-floating">
                                    Visa Expiry Dt</label></div>
                            <%-- </td>
                        <td align="left" width="15%">
                            Issued By
                        </td>
                        <td align="left" width="35%">
                            <asp:TextBox ID="txtVisaIssuedBy" runat="server" MaxLength="64"></asp:TextBox>
                        </td>--%>
                    </tr>
                </table>
            </div>
        </div>
        <div class="panel-div" style="width: 29.2%; display: none;" id="notesdiv">
            <div class="panel-heading smallheading">
                <h3 class="panel-title">
                    Notes
                </h3>
            </div>
            <div class="panel-body">
                <asp:TextBox ID="txtNotes" runat="server" TextMode="MultiLine" Height="85px" ToolTip="Enter Notes"
                    Width="100%" onblur="document.getElementById('' + ctrlcom + '_headerControl1_imgbtnSave').focus();"></asp:TextBox>
            </div>
        </div>
    </div>
    <div id="MsgDiv" class="alertbox">
    </div>
    <div class="panel-divW" style="display: none;">
        <div class="panel-body">
            <table border="0" cellpadding="0" cellspacing="0" align="center" width="100%" class="FormsCtrl">
                <tr>
                    <td align="left">
                        OP Gross Amount
                    </td>
                    <td align="left">
                        <asp:TextBox ID="txtOPBillGrossAmt" runat="server" ReadOnly="true" Text="0" CssClass="Aright"></asp:TextBox>
                    </td>
                    <td align="left">
                        OP Conc. Amount
                    </td>
                    <td align="left">
                        <asp:TextBox ID="txtOPBillConcessionAmt" runat="server" ReadOnly="true" Text="0"
                            CssClass="Aright"></asp:TextBox>
                    </td>
                    <td align="left">
                        OP Net Amount
                    </td>
                    <td align="left">
                        <asp:TextBox ID="txtOPBillNetAmt" runat="server" ReadOnly="true" Text="0" CssClass="Aright"></asp:TextBox>
                    </td>
                    <td align="left">
                        Con Gross Amount
                    </td>
                    <td align="left">
                        <asp:TextBox ID="txtConGross" runat="server" ReadOnly="true" Text="0" CssClass="Aright"></asp:TextBox>
                    </td>
                    <td align="left">
                        Con Conc. Amount
                    </td>
                    <td align="left">
                        <asp:TextBox ID="txtConDisc" runat="server" ReadOnly="true" Text="0" CssClass="Aright"></asp:TextBox>
                    </td>
                    <td align="left">
                        Con Net Amount
                    </td>
                    <td align="left">
                        <asp:TextBox ID="txtConNet" runat="server" ReadOnly="true" Text="0" CssClass="Aright"></asp:TextBox>
                    </td>
                </tr>
            </table>
        </div>
    </div>
    <div id="DivIndent" runat="server" class="masking">
        <div class="cmask">
        </div>
        <div class="clientpopup" style="margin-left: -346px; margin-top: -225px; width: 662px;">
            <div class="pop-header">
                <h1>
                    <asp:Label ID="lblOthers" runat="server" Text="Indents"></asp:Label>
                </h1>
                <asp:Button buttonaction="cancelButton" ID="Button2" runat="server" OnClientClick="return ClosingIndentPopup();"
                    CssClass="cbutton" Text="&times;" />
            </div>
            <div class="pop-body " style="height: 400px; overflow: auto;">
                <div id="divIndents" style="min-height: 300px; overflow: auto;" class="pop-body grd">
                </div>
            </div>
        </div>
    </div>
    <div class="masking" id="divPrints" runat="server">
        <div class="cmask">
        </div>
        <div class="clientpopup" style="width: 281px; height: 250px; margin-left: -188px;
            margin-top: -158px;">
            <div class="pop-header">
                <h1>
                    <asp:Label ID="lblPDetails" runat="server" Text="Print Details"></asp:Label>
                </h1>
                <div style="text-align: right; padding: 3px;">
                    <input type="button" id="Button4" value="close" onclick="return ClosingprintPopup();" />
                </div>
            </div>
            <div class="pop-body" style="padding: 10px
    5px 10px 5px;">
                <table cellpadding="0" cellspacing="0" border="0" width="100%">
                    <tr>
                        <td>
                            <asp:RadioButtonList ID="rbtnPrintOptions" runat="server" RepeatDirection="Horizontal"
                                onchange="return SetPrintChanges();">
                                <asp:ListItem Value="1" Text="Consolidate
    Print" Selected="True"></asp:ListItem>
                                <asp:ListItem Value="2" Text="Individual
    Prints"></asp:ListItem>
                            </asp:RadioButtonList>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <asp:CheckBoxList ID="chkPrints" runat="server" onchange="return checkall(this);">
                                <asp:ListItem Value="1">Registration
    Print</asp:ListItem>
                                <asp:ListItem Value="2">Registration Card Print</asp:ListItem>
                                <asp:ListItem Value="3">Consultaion Print</asp:ListItem>
                                <asp:ListItem Value="4">Prescription
    Print</asp:ListItem>
                                <asp:ListItem Value="5">Bill Print</asp:ListItem>
                                <asp:ListItem Value="7">Registration Label Print</asp:ListItem>
                                <asp:ListItem Value="6">All</asp:ListItem>
                            </asp:CheckBoxList>
                        </td>
                    </tr>
                    <tr>
                        <td align="center" colspan="2" style="padding-top: 3px">
                            <input type="button" id="btnOk" value="OK" runat="server" onclick="return PrintSelection();" />
                        </td>
                    </tr>
                </table>
                <asp:HiddenField ID="hdnPrintPatID" runat="server" />
                <asp:HiddenField ID="hdnPrintTranid" runat="server" />
                <asp:HiddenField ID="hdnPrintRegBillNo" runat="server" />
                <asp:HiddenField ID="hdnPrintConBillId" runat="server" />
                <asp:HiddenField ID="hdnPrintOPBillId" runat="server" />
                <asp:HiddenField ID="hdnDND" runat="server" />
                <asp:HiddenField ID="hdnRegFeeAutoFill" runat="server" />
                <asp:HiddenField ID="hdnFmlyConRef" runat="server" />
                <asp:HiddenField ID="hdnbarcodepath" runat="server" />
            </div>
        </div>
    </div>
    <div id="pnlEmpGridPop" width="600px" style="display: none" runat="server" class="masking">
        <div class="cmask">
        </div>
        <div class="clientpopup" style="width: 600px; height: 200px; margin-left: -300px;
            margin-top: -200px;">
            <div class="pop-header">
                <h1>
                    <asp:Label ID="lblEmpRelation" runat="server" Text="Staff Relations"></asp:Label>
                </h1>
                <input type="button" id="btncancel" class="button" value="&times;" onclick="return
    btnclose();" />
            </div>
            <div class="pop-body grd" style="height: 366px;">
                <div id="divEmpRelation" class=" divscroll" style="height: 330px; overflow: auto;">
                </div>
            </div>
        </div>
    </div>
    <div id="divValidate" width="600px" style="display: none" runat="server" class="masking">
        <div class="cmask">
        </div>
        <div class="clientpopup" style="width: 600px; height: 200px; margin-left: -300px;
            margin-top: -200px;">
            <div class="pop-header">
                <h1>
                    <asp:Label ID="Label1" runat="server" Text="Umr#"></asp:Label>
                </h1>
                <input type="button" id="Button5" class="button" value="&times;" onclick="return btnvalidateclose();" />
            </div>
            <div class="pop-body grd" style="height: 366px;">
                <div id="divMobileValidate" class=" divscroll" style="height: 330px; overflow: auto;">
                </div>
            </div>
        </div>
    </div>
    <div id="dvGrid" style="display: none">
        <table id="ctl00_ContentPlaceHolder1_gvExtendedDisplay" border="0px solid " cellpadding="0px"
            cellspacing="0px" width="100%">
            <thead>
                <tr>
                    <th>
                        S.No
                    </th>
                    <th>
                        Service Name
                    </th>
                    <th>
                        Amount
                    </th>
                </tr>
            </thead>
            <tbody>
            </tbody>
        </table>
    </div>
    <div id="corptranprogress" style="display: none; z-index: 999999; top: 0; left: 0;
        height: 100%; width: 100%; position: absolute;" class="modalBackground">
        <div style="z-index: 999999; top: 50%; left: 50%; position: absolute;">
            <img id="ctl00_ContentPlaceHolder1_UCtransaction_imgpro" src="../../Assets/img/preloader.gif"
                style="border-width: 0px;" />
        </div>
    </div>
    <script type="text/javascript">
        _.templateSettings = {
            evaluate: /\{\{(.+?)\}\}/g,
            interpolate: /\{\{=(.+?)\}\}/g,
            escape: /\{\{-(.+?)\}\}/g
        };
    
    </script>
    <script type="text/javascript">
        suvUtils.setStorage("ED", "OPDBillnew.aspx");
        extendedDisplay.setStructure([
            { label: "Patient Name :", value: "" },
            { label: "DOB / Age(Y/M/D) :", value: "" },
            { label: "Gender :", value: "" },
            { label: "Nationality :", value: $('[id*=ddlNationality]').val() },
            { label: "Mobile# :", value: $('[id*=txtMobile1]').val() },
            { label: "Email :", value: $('[id*=txtemail]').val() },
            { label: "Registration Fee :", value: '' },
            { label: "Patient Type", value: "General" },
            { label: "Consultant :", value: "" },
            { label: "Address :", value: "" },
            { label: "SERVICES", value: $("#dvGrid").html() },
            { label: "Transactions", value: "" },
       ]);

        $("#_stateOpBilling").show();
    </script>
    <script type="text/html" id="tbody">
                {{ _.each(_dataSource,function(item,key,list){  }}
                    <tr>
                        <td>
                           <LABEL id="lblServiceNo-{{=key}}" >{{=item.sno}} </LABEL>
                         </td>
                        <td >
                           <LABEL id="lblServiceName-{{=key}}" >{{=item.name}} </LABEL>
                         </td>

                         <td>
                            <LABEL id="lblAmount-{{=key}}"  >{{=item.amount}}</LABEL>
                          </td>
                    </tr>
                {{ }) }}
    </script>
    <script type="text/javascript">
        function umr() {
            if (document.getElementById('' + ctrlcom + '_hdnRqstrType').value == "OSP") {
                var UMR = document.getElementById('' + ctrlcom + '_umrPatientDetails_ucUMRno_txtSearchControl').value;
                extendedDisplay.setData(0, 'Umr No :', UMR);
            }
        }
        function btnclose() {
            $('[id*=pnlEmpGridPop]')[0].style.display = 'none';
        }
        function ddlNationlityChange() {
            var Def_Nation = $('#ctl00_ContentPlaceHolder1_hdnddlNationality').val();
            var Sel_Nation = document.getElementById('' + ctrlcom + '_ddlNationality').value;
            document.getElementById('' + ctrlcom + '_hdnNCountryID').value = document.getElementById('' + ctrlcom + '_ddlNationality').value;
            if (Sel_Nation != Def_Nation) {
                document.getElementById('' + ctrlcom + '_ddlproofid').value = '6';
                document.getElementById('' + ctrlcom + '_txtSSN').value = '';
                OnddlProofChnages();
                $('#ctl00_ContentPlaceHolder1_Address1_txtMobile1').removeClass('red');
            }
            else if (Sel_Nation == Def_Nation) {
                document.getElementById('' + ctrlcom + '_ddlproofid').value = '0';
                document.getElementById('' + ctrlcom + '_txtSSN').value = '';
                OnddlProofChnages();
            }
            if (Def_Nation != Sel_Nation) {

                visadtlsdiv.style.display = 'block';
                notesdiv.style.display = 'block';
                notesdiv.style.width = "29.2%";
            } else {
                visadtlsdiv.style.display = 'none';
                notesdiv.style.display = 'none';
            }
            if (document.getElementById('' + ctrlcom + '_ddlNationality').value > 1) {
                VisaMandatoryValidation();
            }
            else {
                clearVisaControls();
                $('#' + ctrlcom + '_ucIssuedAt_txtSearchControl').removeClass('red');
                $('#' + ctrlcom + '_txtVisaControlNo').removeClass('red');
                $('#' + ctrlcom + '_ddlVisatype').removeClass('red');
                $('#' + ctrlcom + '_txtVisaIssueDt').removeClass('red');
                $('#' + ctrlcom + '_txtVisaExpDt').removeClass('red');
                $('#' + ctrlcom + '_txtVisaIssuedBy').removeClass('red');
            }
            document.getElementById('ctl00_ContentPlaceHolder1_ucIssuedAt_hdn_preCond').value = Sel_Nation;
        }
    </script>
    <script type="text/javascript">
        function CorporateValidation() {
            var _ctrls = new Array(); var _chkValidation = true;
            var chkCorp = document.getElementById('' + ctrlcom + '_chkCorporate');
            _ctrls[0] = 'ctl00_ContentPlaceHolder1_EmployerInfo2_EmployerControl1_txtSearchControl';
            _ctrls[1] = 'ctl00_ContentPlaceHolder1_EmployerInfo2_txtEmploeeID';
            _ctrls[2] = 'ctl00_ContentPlaceHolder1_EmployerInfo2_txtEmployeeName';
            _ctrls[3] = 'ctl00_ContentPlaceHolder1_EmployerInfo2_txtEmpMRNo';
            _ctrls[4] = 'ctl00_ContentPlaceHolder1_EmployerInfo2_txtEmpCardValidity';
            _ctrls[5] = 'ctl00_ContentPlaceHolder1_EmployerInfo2_ddlrelation';

            for (var i = 0; i < _ctrls.length; i++) {
                var ctrl = document.getElementById(_ctrls[i]);
                if (OnNullValue(ctrl) == false) {
                    _chkValidation = false;
                }
                else {

                    $('#' + _ctrls[i]).removeClass('red');
                }
            }
            return _chkValidation;
        }
        var Emp2 = ''; var cmpopupid = "N";

        function hideCompPopup() {
            Emp2 = 'N';
            $("#divCmpPopup").hide();
            cmpopupid = "N";
            cmp_pre_condition();
            return false;
        }


        function ProofChanges() {
            var _proofid = document.getElementById('' + ctrlcom + '_ddlproofid').value;
            if (_proofid == "0") {
                $('#ctl00_ContentPlaceHolder1_txtSSN').removeClass('red');
            }
        }
        function VIPColorChanges() {
            if (document.getElementById('' + ctrlcom + '_rbt_pat_type_1').checked || document.getElementById('' + ctrlcom + '_rbt_pat_type_2').checked) {
                var _chkValidation = true;
                var ctrls = new Array();
                ctrls[0] = 'ctl00_ContentPlaceHolder1_dd_reg_source';
                ctrls[1] = 'ctl00_ContentPlaceHolder1_source_remarks';
                for (var i = 0; i < ctrls.length; i++) {
                    var ctrl = document.getElementById(ctrls[i]);
                    if (OnNullValue(ctrl) == false) {
                        _chkValidation = false;
                    }
                }
                return _chkValidation;
            }
            else {
                $('#ctl00_ContentPlaceHolder1_dd_reg_source').removeClass('red');
                $('#ctl00_ContentPlaceHolder1_source_remarks').removeClass('red');
            }
        }  
    </script>
    <div class="masking" id="pnlBarCode2" runat="server">
        <div class="cmask">
        </div>
        <div class="clientpopup" style="width: 482px; height: 122px; margin-left: -329px;
            margin-top: -120px;">
            <div class="pop-header">
                <h1>
                    <asp:Label ID="Label2" runat="server" Text="Print Details"></asp:Label>
                </h1>
                <div style="text-align: right; padding: 3px;">
                    <img runat="server" style="display: none;" id="img2" src="~/Images/close.gif" />
                    <input type="button" id="Button3" value="close" onclick="return ClosingprintPopup1();" />
                </div>
            </div>
            <div class="pop-body" style="padding: 10px 5px 10px 5px;">
                <table cellpadding="0" cellspacing="0" border="0" width="100%">
                    <tr>
                        <td>
                            <asp:RadioButtonList ID="RadioButtonList1" runat="server">
                                <asp:ListItem Value="3" Text="Consolidate Print" Selected="True"></asp:ListItem>
                                <asp:ListItem Value="1" Text="Prescription Normal" Selected="True"></asp:ListItem>
                                <asp:ListItem Value="2" Text="Prescription FollowUp"></asp:ListItem>
                            </asp:RadioButtonList>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <asp:CheckBoxList ID="chkReglbl" runat="server" onchange="return checkall(this);">
                                <asp:ListItem Value="7">Registration Label Print</asp:ListItem>
                            </asp:CheckBoxList>
                        </td>
                    </tr>
                    <tr>
                        <td align="center" colspan="2" style="padding-top: 3px">
                            <input type="button" id="btnokPrescription" value="OK" onclick="return Prescription();" />
                        </td>
                    </tr>
                </table>
            </div>
        </div>
    </div>
    <div style="display: none;">
        <asp:HiddenField ID="hdnPkgSrvs" runat="server" />
        <asp:HiddenField ID="hdnRowIndex" runat="server" />
        <asp:HiddenField ID="hdnRefReq" runat="server" />
        <asp:HiddenField ID="hdnDisplayNameSetting" runat="server" />
        <asp:HiddenField ID="hdnHTMLstring" runat="server" />
        <asp:HiddenField ID="hdnVisitTypeID" runat="server" />
        <asp:HiddenField ID="HDNSESSIONID" runat="server" />
        <asp:HiddenField ID="hdnQstrType" runat="server" />
        <asp:HiddenField ID="hdnQstrID" runat="server" />
        <asp:HiddenField ID="hdnDocName" runat="server" />
        <asp:HiddenField ID="hdnPatientid" runat="server" />
        <asp:HiddenField ID="hdnRegID" runat="server" />
        <asp:HiddenField ID="hdnUmrNo" runat="server" />
        <asp:HiddenField ID="hdnReg_id" runat="server" />
        <asp:HiddenField ID="hdnIsRegDtlsReq" runat="server" />
        <asp:HiddenField ID="hdnRegRefDays" runat="server" />
        <asp:HiddenField ID="hdnRegDoctorRequired" runat="server" />
        <asp:HiddenField ID="hdnApptpaymentModeid" runat="server" />
        <asp:HiddenField ID="HdnApptonlineAmt" runat="server" />
        <asp:HiddenField ID="hdnRegShowDocDays" runat="server" />
        <asp:HiddenField ID="hdnNoConsLimts" runat="server" />
        <asp:HiddenField ID="hdnDueRemainder" runat="server" />
        <asp:HiddenField ID="hdnBothPrintSetting" runat="server" />
        <asp:HiddenField ID="hdnPkgConsSetting" runat="server" />
        <asp:HiddenField ID="hdnConsCharge" runat="server" />
        <asp:HiddenField ID="hdnDoctor_ID" runat="server" />
        <asp:HiddenField ID="hdnDoctorName" runat="server" />
        <asp:HiddenField ID="hdnDoctorCd" runat="server" />
        <asp:HiddenField ID="hdnDeptId" runat="server" />
        <asp:HiddenField ID="hdnDeptName" runat="server" />
        <asp:HiddenField ID="hdnSrvTaxRequired" runat="server" />
        <asp:HiddenField ID="hdnOpConsulTax" runat="server" />
        <asp:HiddenField ID="hdnOpCons" runat="server" />
        <asp:HiddenField ID="hdnOpConsPayAmt" runat="server" />
        <asp:HiddenField ID="hdnCompnyName" runat="server" />
        <asp:HiddenField ID="hdnCompnyId" runat="server" />
        <asp:HiddenField ID="hdnEmplyId" runat="server" />
        <asp:HiddenField ID="hdnEmplyName" runat="server" />
        <asp:HiddenField ID="hdnRefLetterDt" runat="server" />
        <asp:HiddenField ID="hdnCorpRegFee" runat="server" />
        <asp:HiddenField ID="hdnServiceID" runat="server" />
        <asp:HiddenField ID="hdnCompanyID" runat="server" />
        <asp:HiddenField ID="hdnRegRevCorpId" runat="server" />
        <asp:HiddenField ID="hdnRegCorpId" runat="server" />
        <asp:HiddenField ID="hdnEmpId" runat="server" />
        <asp:HiddenField ID="hdnConsTariffID" runat="server" />
        <asp:HiddenField ID="hdnisletReq" runat="server" />
        <asp:HiddenField ID="hdnNoOfConsValidDays" runat="server" />
        <asp:HiddenField ID="hdnNoOfValidConsults" runat="server" />
        <asp:HiddenField ID="hdnOrgPer" runat="server" />
        <asp:HiddenField ID="hdnEmpPer" runat="server" />
        <asp:HiddenField ID="hdnCmpColor" runat="server" />
        <asp:HiddenField ID="hdnCmpConsTariffId" runat="server" />
        <asp:HiddenField ID="hdncmpnoofcon" runat="server" />
        <asp:HiddenField ID="hdnPkgAmt" runat="server" />
        <asp:HiddenField ID="hdnPkgActualAmt" runat="server" />
        <asp:HiddenField ID="hdnPkgID" runat="server" />
        <asp:HiddenField ID="hdnBillId" runat="server" />
        <asp:HiddenField ID="hdnPkgConDeptName" runat="server" />
        <asp:HiddenField ID="hdnPkgConDeptID" runat="server" />
        <asp:HiddenField ID="hdnPkgConDoctorID" runat="server" />
        <asp:HiddenField ID="hdnOSPNo" runat="server" />
        <asp:HiddenField ID="hdnOSPMbl" runat="server" />
        <asp:HiddenField ID="hdnadd1" runat="server" />
        <asp:HiddenField ID="hdnadd2" runat="server" />
        <asp:HiddenField ID="hdnadd3" runat="server" />
        <asp:HiddenField ID="hdnref1" runat="server" />
        <asp:HiddenField ID="hdnref2" runat="server" />
        <asp:HiddenField ID="hdnref3" runat="server" />
        <asp:HiddenField ID="hdnref4" runat="server" />
        <asp:HiddenField ID="hdnaddrev1" runat="server" />
        <asp:HiddenField ID="hdnaddrev2" runat="server" />
        <asp:HiddenField ID="hdnaddrev3" runat="server" />
        <asp:HiddenField ID="hdnrefrev1" runat="server" />
        <asp:HiddenField ID="hdnrefrev2" runat="server" />
        <asp:HiddenField ID="hdnrefrev3" runat="server" />
        <asp:HiddenField ID="hdnrefrev4" runat="server" />
        <asp:HiddenField ID="hdnIndOrderId" runat="server" />
        <asp:HiddenField ID="hdnConsultantID" runat="server" />
        <asp:HiddenField ID="hdnCasulity" runat="server" />
        <asp:HiddenField ID="hdnIndentPopUpCount" runat="server" />
        <asp:HiddenField ID="hdnpatrevno" runat="server" />
        <asp:HiddenField ID="hdnCrpRegId" runat="server" />
        <asp:HiddenField ID="hdnNewOldUmrNo" runat="server" />
        <asp:HiddenField ID="hdnAPTID" runat="server" />
        <asp:HiddenField ID="ApptPatientId" runat="server" />
        <asp:HiddenField ID="hdnApptDocID" runat="server" />
        <asp:HiddenField ID="hdnDID" runat="server" />
        <asp:HiddenField ID="hdnDNAME" runat="server" />
        <asp:HiddenField ID="hiddenID" runat="server" />
        <asp:HiddenField ID="hiddenText" runat="server" />
        <asp:HiddenField ID="hdnrefletterreq" runat="server" />
        <asp:HiddenField ID="hdnCasulityDocID" runat="server" />
        <asp:HiddenField ID="hdnpre_regi" runat="server" />
        <asp:HiddenField ID="hdnPaidAmnt" runat="server" />
        <asp:HiddenField ID="hdnddlNationality" runat="server" />
        <asp:HiddenField ID="hdnddlVIP" runat="server" />
        <asp:HiddenField ID="hdnVIPNotes" runat="server" />
        <asp:HiddenField ID="hdnrefvaliddays" runat="server" />
        <asp:HiddenField ID="hdnsamepatflag" runat="server" />
        <asp:HiddenField ID="hdnViewDue" runat="server" />
        <asp:HiddenField ID="hdnViewCncsn" runat="server" />
        <asp:HiddenField ID="hdnNCountryID" runat="server" />
        <asp:HiddenField ID="hdnSelection" runat="server" />
        <asp:HiddenField ID="hdnSaveAlert" runat="server" />
        <asp:HiddenField ID="hdnRUmrNo" runat="server" />
        <asp:HiddenField ID="hdnRPatID" runat="server" />
        <asp:HiddenField ID="hdnRType" runat="server" />
        <asp:HiddenField ID="hdnRpane" runat="server" />
        <asp:HiddenField ID="hdndateformat" runat="server" />
        <asp:HiddenField ID="hdnPriv_Res_name" runat="server" />
        <asp:HiddenField ID="hdnareaquick" runat="server" />
        <asp:HiddenField ID="hdnviewnewborn" runat="server" />
        <asp:HiddenField ID="hdnTest" runat="server" />
        <asp:HiddenField ID="hdndueamount" runat="server" />
        <asp:HiddenField ID="hdnpreregid" runat="server" />
        <asp:HiddenField ID="hdndueamt" runat="server" />
        <asp:HiddenField ID="hdnpat_id" runat="server" />
        <asp:HiddenField ID="hdnPreAdvanceAmt" runat="server" />
        <asp:HiddenField ID="hdnDoctorID" runat="server" />
        <asp:HiddenField ID="hdnvisittypes" runat="server" />
        <asp:HiddenField ID="hdnLetterReq" runat="server" />
        <asp:HiddenField ID="hdnRefLetterNo" runat="server" />
        <asp:HiddenField ID="hdnDateFmt" runat="server" />
        <asp:HiddenField ID="hdnPatientIdForCons" runat="server" />
        <asp:HiddenField ID="hdnNetAmt" runat="server" />
        <asp:HiddenField ID="hdncentralizedornot" runat="server" />
        <asp:HiddenField ID="hdBillId" runat="server" />
        <asp:HiddenField ID="hdnRefTypeId" runat="server" />
        <asp:HiddenField ID="hdnRefDocName" runat="server" />
        <asp:HiddenField ID="hdnRefSrcId" runat="server" />
        <asp:HiddenField ID="hdnForEdit" runat="server" />
        <asp:HiddenField ID="hdnEditTranNO" runat="server" />
        <asp:HiddenField ID="hdnEditPayment" runat="server" />
        <asp:HiddenField ID="hdnEditDue" runat="server" />
        <asp:HiddenField ID="hdnEditConcessAuthId" runat="server" />
        <asp:HiddenField ID="hdnEditConcessAuthName" runat="server" />
        <asp:HiddenField ID="hdnEditDueAuthId" runat="server" />
        <asp:HiddenField ID="hdnEditDueAuthName" runat="server" />
        <asp:HiddenField ID="hdnAptFName" runat="server" />
        <asp:HiddenField ID="hdnAptLName" runat="server" />
        <asp:HiddenField ID="PATIENT_NAME" runat="server" />
        <asp:HiddenField ID="hdnAptTitile" runat="server" />
        <asp:HiddenField ID="hdnAptGender" runat="server" />
        <asp:HiddenField ID="hdnAptMartial" runat="server" />
        <asp:HiddenField ID="hdnAptMobile" runat="server" />
        <asp:HiddenField ID="hdnAptArea" runat="server" />
        <asp:HiddenField ID="hdnAptCountry" runat="server" />
        <asp:HiddenField ID="hdnAptState" runat="server" />
        <asp:HiddenField ID="hdnAptCity" runat="server" />
        <asp:HiddenField ID="hdnAptEmail" runat="server" />
        <asp:HiddenField ID="hdnAptDOB" runat="server" />
        <asp:HiddenField ID="hdnAptAGE" runat="server" />
        <asp:HiddenField ID="hdnAptApmntstatus" runat="server" />
        <asp:HiddenField ID="hdnAptADDRESS1" runat="server" />
        <asp:HiddenField ID="hdnAptSecurityCd" runat="server" />
        <asp:HiddenField ID="hdnShowPopUp" runat="server" />
        <asp:HiddenField ID="hdnrqStr" runat="server" />
        <asp:HiddenField ID="hdnMode" runat="server" />
        <asp:HiddenField ID="hdnIsAllowCncn" runat="server" />
        <asp:HiddenField ID="hdnCncnPercent" runat="server" />
        <asp:HiddenField ID="hdnDueLmt" runat="server" />
        <asp:HiddenField ID="hdnDocID" runat="server" />
        <asp:HiddenField ID="hdnApptid" runat="server" />
        <asp:HiddenField ID="hdnpatid" runat="server" />
        <asp:HiddenField ID="hdnslottype" runat="server" />
        <asp:HiddenField ID="hdnstateid" runat="server" />
        <asp:HiddenField ID="hdncityid" runat="server" />
        <asp:HiddenField ID="hdncountryid" runat="server" />
        <asp:HiddenField ID="hdnhealthcardtypeid" runat="server" />
        <asp:HiddenField ID="hdnauthid" runat="server" />
        <asp:HiddenField ID="hdnEmerFlagTime" Value="N" runat="server" />
        <asp:HiddenField ID="hdncmpPercentage" runat="server" />
        <asp:HiddenField ID="hdnEmpPersentage" runat="server" />
        <asp:HiddenField ID="hdnCmpPersentage" runat="server" />
        <asp:HiddenField ID="hdnPatPercentage" runat="server" />
        <asp:HiddenField ID="hdnEffectfromDt" runat="server" />
        <asp:HiddenField ID="hdnEffectToDt" runat="server" />
        <asp:HiddenField ID="hdnconsreqdocid" runat="server" />
        <asp:HiddenField ID="hdnreqtype" runat="server" />
        <asp:HiddenField ID="hdnconsamt" runat="server" />
        <asp:HiddenField ID="hdngrpbillno" runat="server" />
        <asp:HiddenField ID="hdntranid" runat="server" />
        <asp:HiddenField ID="hdnrefquick" runat="server" />
        <asp:HiddenField ID="hdncmpquick" runat="server" />
        <asp:HiddenField ID="hdnempquick" runat="server" />
        <asp:HiddenField ID="hdndocquick" runat="server" />
        <asp:HiddenField ID="hdnconsultentdoctorid" runat="server" />
        <asp:HiddenField ID="hdnView" runat="server" />
        <asp:HiddenField ID="hdnBill_Dt" runat="server" />
        <asp:HiddenField ID="hdnOspBillNo" runat="server" />
        <asp:HiddenField ID="hdnSession_id" runat="server" />
        <asp:HiddenField ID="hdnPostConsstring" runat="server" />
        <asp:HiddenField ID="hdnAdmn_Pat_Op" runat="server" />
        <asp:HiddenField ID="hdnBill_ID" runat="server" />
        <asp:HiddenField ID="hdnbill_typeID" runat="server" />
        <asp:HiddenField ID="hdndontclrgrid" runat="server" />
        <asp:HiddenField ID="hdnAppointMentPatId" runat="server" />
        <asp:HiddenField ID="hdnAppointMentDocId" runat="server" />
        <asp:HiddenField ID="hdncmpexpalert" runat="server" />
        <asp:HiddenField ID="hdnstfname" runat="server" />
        <asp:HiddenField ID="hdnstfrelt" runat="server" />
        <asp:HiddenField ID="hdnispatientbaneer" runat="server" />
        <asp:HiddenField ID="hdnpatienttype" runat="server" />
        <asp:HiddenField ID="hdnViewPatTypId" runat="server" />
        <asp:HiddenField ID="hdnViewStfName" runat="server" />
        <asp:HiddenField ID="hdnViewRltn" runat="server" />
        <asp:HiddenField ID="hdn_pkg_param_opd" runat="server" />
        <asp:HiddenField ID="hdnNoOfCopies" runat="server" />
        <asp:HiddenField ID="hdnAddDisableAttr" runat="server" />
        <asp:HiddenField ID="hdnauth_user" runat="server" />
        <asp:HiddenField ID="hdn_out_reg_no" runat="server" />
        <asp:HiddenField ID="hdnout_reg_bill_id" runat="server" />
        <asp:HiddenField ID="hdnappttype" runat="server" />
        <asp:HiddenField ID="hdnprescreportname" runat="server" />
        <asp:HiddenField ID="hdnisapptslotreq" runat="server" />
        <asp:HiddenField ID="hdnutilizamt" runat="server" />
        <asp:HiddenField ID="hdnAssesmnt" runat="server" />
        <asp:HiddenField ID="hdn_out_grp_bill_no" runat="server" />
        <asp:HiddenField ID="hdnEmpDepID" runat="server" />
        <asp:HiddenField ID="hdnallowdueopd" runat="server" />
        <asp:HiddenField ID="hdnIsDoctorSlotsReq" runat="server" />
        <asp:HiddenField ID="hdnClientName" runat="server" />
        <asp:HiddenField ID="hdnIsHealthCardReq" runat="server" />
        <asp:HiddenField ID="hdnospRequired" runat="server" />
        <asp:HiddenField ID="hdnbarcodeprintrequired" runat="server" />
        <asp:HiddenField ID="hdnConsPrintSetting" runat="server" />
        <asp:HiddenField ID="hdnOpPermission" runat="server" />
        <asp:HiddenField ID="hdnConsPermission" runat="server" />
        <asp:HiddenField ID="hdnisassestreq" runat="server" />
        <asp:HiddenField ID="hdntrans_id" runat="server" />
        <asp:HiddenField ID="hdnbill_no" runat="server" />
        <asp:HiddenField ID="hdnregtypemain" runat="server" />
        <asp:HiddenField ID="hdnAppsync" runat="server" />
        <asp:HiddenField ID="hdnEmergencySlot" runat="server" />
        <asp:HiddenField ID="hdnpatcatpolicy" runat="server" />
        <asp:HiddenField ID="hdntitle" runat="server" />
        <asp:HiddenField ID="hdnautowalkin" runat="server" />
        <asp:HiddenField ID="hdnmotherrequired" runat="server" />
        <asp:HiddenField ID="hdnfatherrequired" runat="server" />
        <asp:HiddenField ID="hdndobformat" runat="server" />
        <asp:HiddenField ID="hdnrptbill_id" runat="server" />
        <asp:HiddenField ID="hdnsvaeclickvalue" Value="1" runat="server" />
        <asp:HiddenField ID="hdnisalowzeroprice" Value="1" runat="server" />
        <asp:HiddenField ID="hbnqureystringregid" Value="1" runat="server" />
        <asp:HiddenField ID="hdnApptHosting" runat="server" />
        <asp:HiddenField ID="hdndefaultconsultation" runat="server" />
        <asp:HiddenField ID="hdnFirstMiddleLastName" runat="server" />
        <asp:HiddenField ID="hdnFirstLastName" runat="server" />
        <asp:HiddenField ID="hdnApptUrl" runat="server" />
        <asp:HiddenField ID="hdnMegID" runat="server" />
        <asp:HiddenField ID="hdnslotcall" runat="server" />
        <asp:HiddenField ID="hdnKineNameMandatary" runat="server" />
        <asp:HiddenField ID="hdnonlymobilenumbermandate" runat="server" />
        <asp:HiddenField ID="hdndtrmandatary" runat="server" />
        <asp:HiddenField ID="hdnordertype" runat="server" />
        <asp:HiddenField ID="HiddenField2" runat="server" />
        <asp:HiddenField ID="hdnconsultation_count_in_day" runat="server" />
        <asp:HiddenField ID="hdnumrgeneration" runat="server" />
        <asp:HiddenField ID="hdnalwsameconsameday" runat="server" />
        <asp:HiddenField ID="hdnmailmandatary" runat="server" />
    </div>
</asp:Content>
