<%@ Control Language="C#" AutoEventWireup="true" CodeFile="CompanyDetails.ascx.cs"
    Inherits="Private_UserControls_CompanyDetails" %>
<script type="text/javascript">
    function cmpinfodtls() {
        var cname = document.getElementById('ctl00_ContentPlaceHolder1_uccorporate_CmpLookup_txtSearchControl').value;
        var cid = document.getElementById('ctl00_ContentPlaceHolder1_uccorporate_CmpLookup__hiddenID').value;
        if (cname == null || cname == "" || cname == undefined) { cname = document.getElementById('ctl00_ContentPlaceHolder1_uccorporate_allcmplookup_txtSearchControl').value; }
        if (cid == null || cid == "" || cid == undefined || cid == '0') { cid = document.getElementById('ctl00_ContentPlaceHolder1_uccorporate_allcmplookup__hiddenID').value; }
        if (cname == "" || cname == undefined || cname == null) { cname = ''; }
        if (cid == "" || cid == undefined || cid == null || cid == "0") { cid = ''; }

        if (cname != '' && cname != undefined && cname != null && cid != '' && cid != null && cid !== undefined) {
            var form_name = document.getElementById('ctl00_ContentPlaceHolder1_umrPatientDetails_hdnDocName').value;
            var umr_no = ''; var cmpid = '';
            if (form_name == 'OP' || form_name == 'Cons' || form_name == 'OPQUICK' || form_name == 'ADMN') {
                umr_no = document.getElementById('ctl00_ContentPlaceHolder1_umrPatientDetails_Umrlookup__hiddenText').value;
                cmpid = document.getElementById('ctl00_ContentPlaceHolder1_uccorporate_CmpLookup__hiddenID').value;
                if (cmpid == null || cmpid == "" || cmpid == undefined || cmpid == '0') { cmpid = document.getElementById('ctl00_ContentPlaceHolder1_uccorporate_allcmplookup__hiddenID').value; }
                if (cmpid == "" || cmpid == undefined || cmpid == null || cmpid == "0") { cmpid = '0'; }
            }
            else {
                umr_no = document.getElementById('ctl00_ContentPlaceHolder1_IPPatientDtls1_ucAdmission__hiddenText').value;
                cmpid = document.getElementById('ctl00_ContentPlaceHolder1_IPPatientDtls1_hdnCompID').value;
                if (cmpid == null || cmpid == "" || cmpid == undefined || cmpid == '0') { cmpid = document.getElementById('ctl00_ContentPlaceHolder1_uccorporate_allcmplookup__hiddenID').value; }
                if (cmpid == "" || cmpid == undefined || cmpid == null || cmpid == "0") { cmpid = '0'; }
            }
            var admn_id = 0;
            GetAsync(
        "Private/FrontOffice/OpBilling/OPBillClientSide.aspx/Get_Company_Dtls", //D:\ProjectWorkFiles\SHIMS\User Interface\Private\FrontOffice\OpBilling\OPBillClientSide.aspx.cs
        {cmpid: cmpid, umr_no: umr_no },
        function (jdata) {
            var data = jdata.d.split('@');
            var cmpdtls = jQuery.parseJSON(jdata.d.split('@')[0]);
            var reftls = jQuery.parseJSON(jdata.d.split('@')[1]);
            var prtyttls = jQuery.parseJSON(jdata.d.split('@')[2]);
            var srvtypdtls = jQuery.parseJSON(jdata.d.split('@')[3]);
            var srvgrpdtls = jQuery.parseJSON(jdata.d.split('@')[4]);
            $('#cmpinfoblock').show();
            for (i = 0; i < cmpdtls.length; i++) {
                if (cmpdtls[i].PATIENT_TYPE == "OP") {
                    document.getElementById('ctl00_ContentPlaceHolder1_uccorporate_uccompany_lblcmppercop').innerHTML = cmpdtls[i].COMPANY_FOR_OP;
                    document.getElementById('ctl00_ContentPlaceHolder1_uccorporate_uccompany_lblemppercop').innerHTML = cmpdtls[i].EMP_FOR_OP;
                }
                if (cmpdtls[i].PATIENT_TYPE == "IP") {
                    document.getElementById('ctl00_ContentPlaceHolder1_uccorporate_uccompany_lblcmppercip').innerHTML = cmpdtls[i].COMPANY_FOR_IP;
                    document.getElementById('ctl00_ContentPlaceHolder1_uccorporate_uccompany_lblemppercip').innerHTML = cmpdtls[i].EMP_FOR_IP;
                }
            }
            document.getElementById('ctl00_ContentPlaceHolder1_uccorporate_uccompany_lblcmpcode').innerHTML = cmpdtls[0].CMP_CD.trim();
            document.getElementById('ctl00_ContentPlaceHolder1_uccorporate_uccompany_lblcmpname').innerHTML = cmpdtls[0].CMP_NAME;
            document.getElementById('ctl00_ContentPlaceHolder1_uccorporate_uccompany_lblHPatName').innerHTML = cmpdtls[0].CMP_NAME;
            //document.getElementById('ctl00_ContentPlaceHolder1_uccompany_lblcontariff').innerHTML =jdata.d[0].COMANY_CD;
            document.getElementById('ctl00_ContentPlaceHolder1_uccorporate_uccompany_lblletreqforop').innerHTML = cmpdtls[0].LETTER_REQUIRED_FOR_OP;
            document.getElementById('ctl00_ContentPlaceHolder1_uccorporate_uccompany_lblcondays').innerHTML = cmpdtls[0].NO_OF_CONSULTATIONS;
            document.getElementById('ctl00_ContentPlaceHolder1_uccorporate_uccompany_lblcontariff').innerHTML = cmpdtls[0].CONSUL_DEF_TARIFF;
            document.getElementById('ctl00_ContentPlaceHolder1_uccorporate_uccompany_lblcmppercip').innerHTML = cmpdtls[0].COMPANY_FOR_IP;
            document.getElementById('ctl00_ContentPlaceHolder1_uccorporate_uccompany_lblletreqforop').innerHTML = cmpdtls[0].LETTER_REQUIRED_FOR_OP;
            document.getElementById('ctl00_ContentPlaceHolder1_uccorporate_uccompany_lblcondays').innerHTML = cmpdtls[0].NO_OF_CONSULTATIONS;
            document.getElementById('ctl00_ContentPlaceHolder1_uccorporate_uccompany_lbldays').innerHTML = cmpdtls[0].NO_OF_DAYS;
            document.getElementById('ctl00_ContentPlaceHolder1_uccorporate_uccompany_lblregfee').innerHTML = cmpdtls[0].REGISTRATION_FEE;
            document.getElementById('ctl00_ContentPlaceHolder1_uccorporate_uccompany_lblcrlimit').innerHTML = cmpdtls[0].CREDIT_LIMIT_AMOUNT;
            document.getElementById('ctl00_ContentPlaceHolder1_uccorporate_uccompany_lblphardisc').innerHTML = cmpdtls[0].PHARMACY_DISC_AMOUNT;
            if (prtyttls[0].IS_CONSELIGIBLE_WARD == "N") { document.getElementById('ctl00_ContentPlaceHolder1_uccorporate_uccompany_lbleligibleward').innerHTML = "No"; }
            else { document.getElementById('ctl00_ContentPlaceHolder1_uccorporate_uccompany_lbleligibleward').innerHTML = "Yes"; }
            var length = prtyttls.length;
            for (var i = 0; i < length; i++) {
                if (prtyttls[i].PATIENT_CLASS_ID == 1) {
                    var Tariff = prtyttls[i].TARIFF_PRIORITY_COMPARISION;
                    if (prtyttls[i].PRIORITY == 1) {
                        document.getElementById('ctl00_ContentPlaceHolder1_uccorporate_uccompany_lblprior1ip').innerHTML = Tariff;
                        document.getElementById('ctl00_ContentPlaceHolder1_uccorporate_uccompany_lbldisc1ip').innerHTML = prtyttls[i].DISCOUNT_PERCENT;
                        document.getElementById('ctl00_ContentPlaceHolder1_uccorporate_uccompany_lblIpPkg1').innerHTML = prtyttls[i].PKG_NAMES;
                    }
                    if (prtyttls[i].PRIORITY == 2) {
                        document.getElementById('ctl00_ContentPlaceHolder1_uccorporate_uccompany_lblprior2ip').innerHTML = Tariff;
                        document.getElementById('ctl00_ContentPlaceHolder1_uccorporate_uccompany_lbldisc2ip').innerHTML = prtyttls[i].DISCOUNT_PERCENT;
                        document.getElementById('ctl00_ContentPlaceHolder1_uccorporate_uccompany_lblIpPkg2').innerHTML = prtyttls[i].PKG_NAMES;

                    } if (prtyttls[i].PRIORITY == 3) {
                        document.getElementById('ctl00_ContentPlaceHolder1_uccorporate_uccompany_lblprior3ip').innerHTML = Tariff;
                        document.getElementById('ctl00_ContentPlaceHolder1_uccorporate_uccompany_lbldisc3ip').innerHTML = prtyttls[i].DISCOUNT_PERCENT;
                        document.getElementById('ctl00_ContentPlaceHolder1_uccorporate_uccompany_lblIpPkg3').innerHTML = prtyttls[i].PKG_NAMES;
                    } if (prtyttls[i].PRIORITY == 4) {
                        document.getElementById('ctl00_ContentPlaceHolder1_uccorporate_uccompany_lbldeftariffip').innerHTML = Tariff;
                        document.getElementById('ctl00_ContentPlaceHolder1_uccorporate_uccompany_lbldefdiscip').innerHTML = prtyttls[i].DISCOUNT_PERCENT;
                        document.getElementById('ctl00_ContentPlaceHolder1_uccorporate_uccompany_lblIpPkgD').innerHTML = prtyttls[i].PKG_NAMES;
                    }
                }
                if (prtyttls[i].PATIENT_CLASS_ID == 2) {
                    var Tariff = prtyttls[i].TARIFF_PRIORITY_COMPARISION;
                    if (prtyttls[i].PRIORITY == 1) {
                        document.getElementById('ctl00_ContentPlaceHolder1_uccorporate_uccompany_lbldisc1op').innerHTML = prtyttls[i].DISCOUNT_PERCENT;
                        document.getElementById('ctl00_ContentPlaceHolder1_uccorporate_uccompany_lblprior1op').innerHTML = Tariff;
                        document.getElementById('ctl00_ContentPlaceHolder1_uccorporate_uccompany_lblPkg1').innerHTML = prtyttls[i].PKG_NAMES;
                    }
                    if (prtyttls[i].PRIORITY == 2) {
                        document.getElementById('ctl00_ContentPlaceHolder1_uccorporate_uccompany_lbldisc1op').innerHTML = prtyttls[i].DISCOUNT_PERCENT;
                        document.getElementById('ctl00_ContentPlaceHolder1_uccorporate_uccompany_lblprior2op').innerHTML = Tariff;
                        document.getElementById('ctl00_ContentPlaceHolder1_uccorporate_uccompany_lblPkg2').innerHTML = prtyttls[i].PKG_NAMES;
                    }
                    if (prtyttls[i].PRIORITY == 3) {
                        document.getElementById('ctl00_ContentPlaceHolder1_uccorporate_uccompany_lbldisc3op').innerHTML = prtyttls[i].DISCOUNT_PERCENT;
                        document.getElementById('ctl00_ContentPlaceHolder1_uccorporate_uccompany_lblprior3op').innerHTML = Tariff;
                        document.getElementById('ctl00_ContentPlaceHolder1_uccorporate_uccompany_lblPkg3').innerHTML = prtyttls[i].PKG_NAMES;
                    }
                    if (prtyttls[i].PRIORITY == 4) {

                        document.getElementById('ctl00_ContentPlaceHolder1_uccorporate_uccompany_lbldefdiscop').innerHTML = prtyttls[i].DISCOUNT_PERCENT;
                        document.getElementById('ctl00_ContentPlaceHolder1_uccorporate_uccompany_lbldeftariffop').innerHTML = Tariff;
                        document.getElementById('ctl00_ContentPlaceHolder1_uccorporate_uccompany_lblPkgD').innerHTML = prtyttls[i].PKG_NAMES;
                    }

                }
            }

        },

        function (jqXHR, textStatus, errorThrown) {
        });

        }
    }
    function closebtn() {
        $('#cmpinfoblock').hide();
        return false;
    }
</script>

<i  class="icon-bank lookupico tooltip" title="Company Details" id="btncmpdtls" onclick="return cmpinfodtls();"></i>
<%--<input type="button" class="button" value="Company Details" id="btncmpdtls" onclick="return cmpinfodtls();" />--%>
<%--<span  class="tb_Btn icon-bank"  id="Span1" style="padding: 4px; float:left;" title="Company Details" onclick="return cmpinfodtls();"></span>--%>
<%--<i class="pharmacy13 icon-bank" id="btncmpdtls" onclick="return cmpinfodtls();" title="Company Details"></i>--%>

<div id="cmpinfoblock"  class="masking">
    <div class="cmask">
    </div>
<div class="clientpopup"  style="width: 90%; height: 500px; margin-left: -45%;
    margin-top: -250px; ">
    <div class="pop-header">
        <h1>
            Company Details For :
            <asp:Label ID="lblHPatName" runat="server" Style="color: Maroon;"></asp:Label>
        </h1>
        <asp:Button buttonaction="cancelButton" ID="btncancel" runat="server" CssClass="cbutton"
            Text="&times;" OnClientClick="return closebtn()" />
    </div>
    <div class="pop-body" style="height: 460px; background:#fff;">
        <div id="tbl_cmpdetails" style="overflow: auto; padding:5px; height: 410px" class="divscroll">
            <table id="trcmpdetails" cellpadding="0" cellspacing="0" border="0" class="viewtable">
                <tr>
                    <td align="left" class="lbl-name"  width="10%">
                        Company Code
                    </td>
                    <td align="center" class="lbl-col"  width="2%">
                        :
                    </td>
                    <td align="left" class="lbl-val"  width="13%">
                        <asp:Label ID="lblcmpcode" runat="server"> </asp:Label>
                    </td>
                    <td align="left" class="lbl-name"  width="10%">
                        Company Name
                    </td>
                    <td align="center" class="lbl-col"  width="2%">
                        :
                    </td>
                    <td align="left" class="lbl-val" colspan="4">
                        <asp:Label ID="lblcmpname" runat="server"> </asp:Label>
                    </td>
                    <td align="left" class="lbl-name" width="10%">
                        Consul Def Tariff
                    </td>
                    <td align="center" class="lbl-col"  width="2%">
                        :
                    </td>
                    <td align="left" class="lbl-val"  width="13%">
                        <asp:Label ID="lblcontariff" runat="server"> </asp:Label>
                    </td>
                  
                </tr>
                <tr>
                  <td align="left" class="lbl-name">
                        Letter Required For OP
                    </td>
                    <td align="center" class="lbl-col">
                        :
                    </td>
                    <td align="left" class="lbl-val">
                        <asp:Label ID="lblletreqforop" runat="server"> </asp:Label>
                    </td>
                    <td align="left" class="lbl-name">
                        Company % for OP
                    </td>
                    <td align="center" class="lbl-col">
                        :
                    </td>
                    <td align="left" class="lbl-val">
                        <asp:Label ID="lblcmppercop" runat="server"> </asp:Label>
                    </td>
                    <td align="left" class="lbl-name" width="10%">
                        Emp % for OP
                    </td>
                    <td align="center" class="lbl-col" width="2%">
                        :
                    </td>
                    <td align="left" class="lbl-val" width="13%">
                        <asp:Label ID="lblemppercop" runat="server"> </asp:Label>
                    </td>
                    <td align="left" class="lbl-name">
                        Company % for IP
                    </td>
                    <td align="center" class="lbl-col">
                        :
                    </td>
                    <td align="left" class="lbl-val">
                        <asp:Label ID="lblcmppercip" runat="server"> </asp:Label>
                    </td>
                 
                </tr>
                <tr>
                   <td align="left" class="lbl-name">
                        Emp % for IP
                    </td>
                    <td align="center" class="lbl-col">
                        :
                    </td>
                    <td align="left" class="lbl-val">
                        <asp:Label ID="lblemppercip" runat="server"> </asp:Label>
                    </td>
                    <td align="left" class="lbl-name">
                        No of Consultations
                    </td>
                    <td align="center" class="lbl-col">
                        :
                    </td>
                    <td align="left" class="lbl-val">
                        <asp:Label ID="lblcondays" runat="server"> </asp:Label>
                    </td>
                    <td align="left" class="lbl-name">
                        Ref. Letter Valid Days
                    </td>
                    <td align="center" class="lbl-col">
                        :
                    </td>
                    <td align="left" class="lbl-val">
                        <asp:Label ID="lbldays" runat="server"> </asp:Label>
                    </td>
                    <td align="left" class="lbl-name">
                        Registration Fee
                    </td>
                    <td align="center" class="lbl-col">
                        :
                    </td>
                    <td align="left" class="lbl-val">
                        <asp:Label ID="lblregfee" runat="server"> </asp:Label>
                    </td>
                  
                </tr>
                <tr>
                  <td align="left" class="lbl-name">
                        Credit Limit Amount
                    </td>
                    <td align="center" class="lbl-col">
                        :
                    </td>
                    <td align="left" class="lbl-val">
                        <asp:Label ID="lblcrlimit" runat="server"> </asp:Label>
                    </td>
                    <td align="left" class="lbl-name">
                        Pharmacy Disc Amount
                    </td>
                    <td align="center" class="lbl-col">
                        :
                    </td>
                    <td align="left" class="lbl-val">
                        <asp:Label ID="lblphardisc" runat="server"> </asp:Label>
                    </td>
                    <td align="left" class="lbl-name">
                        Consider Eligibility Ward
                    </td>
                    <td align="center" class="lbl-col">
                        :
                    </td>
                    <td align="left" class="lbl-val">
                        <asp:Label ID="lbleligibleward" runat="server"> </asp:Label>
                    </td>
                </tr>
                <tr style="display: none">
                    <td align="left" class="lbl-name">
                        Referral Letter Details
                    </td>
                </tr>
                <tr style="display: none">
                    <td align="left" class="lbl-name">
                        Referral Letter No
                    </td>
                    <td align="center" class="lbl-col">
                        :
                    </td>
                    <td align="left" class="lbl-val">
                        <asp:Label ID="lblrefletterno" runat="server"> </asp:Label>
                    </td>
                    <td align="left" class="lbl-name">
                        Referral Letter Issue Date
                    </td>
                    <td align="center" class="lbl-col">
                        :
                    </td>
                    <td align="left" class="lbl-val">
                        <asp:Label ID="lblrefissuedt" runat="server"> </asp:Label>
                    </td>
                    <td align="left" class="lbl-name">
                        Referral Letter Expiry Date
                    </td>
                    <td align="center" class="lbl-col">
                        :
                    </td>
                    <td align="left" class="lbl-val">
                        <asp:Label ID="lblrefexpirydt" runat="server"> </asp:Label>
                    </td>
                    <td align="left" class="lbl-name">
                        Letter Issued by
                    </td>
                    <td align="center" class="lbl-col">
                        :
                    </td>
                    <td align="left" class="lbl-val">
                        <asp:Label ID="lblrefissuedby" runat="server"> </asp:Label>
                    </td>
                </tr>
                <tr style="background:#eee;">
                    <td align="left" class="lbl-val" colspan="12">
                        <h3>
                            Tariff Details</h3>
                    </td>
                </tr>
                <tr>
                    <td align="left" class="lbl-val">
                        Tariff Selection for IP
                    </td>
                </tr>
                <tr>
                    <td align="left" class="lbl-name">
                        Priority 1
                    </td>
                    <td align="center" class="lbl-col">
                        :
                    </td>
                    <td align="left" class="lbl-val">
                        <asp:Label ID="lblprior1ip" runat="server"> </asp:Label>
                    </td>
                    <td align="left" class="lbl-name">
                        Discount (%)
                    </td>
                    <td align="center" class="lbl-col">
                        :
                    </td>
                    <td align="left" class="lbl-val">
                        <asp:Label ID="lbldisc1ip" runat="server"> </asp:Label>
                    </td>
                    <td align="left" class="lbl-name" style="display:none">
                        Packages
                    </td>
                    <td align="center" class="lbl-col" style="display:none">
                        :
                    </td>
                    <td align="left" class="lbl-val" colspan="4" style="display:none">
                        <asp:Label ID="lblIpPkg1" runat="server"> </asp:Label>
                    </td>
                </tr>
                <tr>
                    <td align="left" class="lbl-name">
                        Priority 2
                    </td>
                    <td align="center" class="lbl-col">
                        :
                    </td>
                    <td align="left" class="lbl-val">
                        <asp:Label ID="lblprior2ip" runat="server"> </asp:Label>
                    </td>
                    <td align="left" class="lbl-name">
                        Discount (%)
                    </td>
                    <td align="center" class="lbl-col">
                        :
                    </td>
                    <td align="left" class="lbl-val">
                        <asp:Label ID="lbldisc2ip" runat="server"> </asp:Label>
                    </td>
                    <td align="left" class="lbl-name" style="display:none">
                        Packages
                    </td>
                    <td align="center" class="lbl-col" style="display:none">
                        :
                    </td>
                    <td align="left" class="lbl-val" colspan="4" style="display:none">
                        <asp:Label ID="lblIpPkg2" runat="server"> </asp:Label>
                    </td>
                </tr>
                <tr>
                    <td align="left" class="lbl-name">
                        Priority 3
                    </td>
                    <td align="center" class="lbl-col">
                        :
                    </td>
                    <td align="left" class="lbl-val">
                        <asp:Label ID="lblprior3ip" runat="server"> </asp:Label>
                    </td>
                    <td align="left" class="lbl-name">
                        Discount (%)
                    </td>
                    <td align="center" class="lbl-col">
                        :
                    </td>
                    <td align="left" class="lbl-val">
                        <asp:Label ID="lbldisc3ip" runat="server"> </asp:Label>
                    </td>
                    <td align="left" class="lbl-name" style="display:none">
                        Packages
                    </td>
                    <td align="center" class="lbl-col" style="display:none">
                        :
                    </td>
                    <td align="left" class="lbl-val" colspan="4" style="display:none">
                        <asp:Label ID="lblIpPkg3" runat="server"> </asp:Label>
                    </td>
                </tr>
                <tr>
                    <td align="left" class="lbl-name">
                        Default Tariff
                    </td>
                    <td align="center" class="lbl-col">
                        :
                    </td>
                    <td align="left" class="lbl-val">
                        <asp:Label ID="lbldeftariffip" runat="server"> </asp:Label>
                    </td>
                    <td align="left" class="lbl-name">
                        Discount (%)
                    </td>
                    <td align="center" class="lbl-col">
                        :
                    </td>
                    <td align="left" class="lbl-val">
                        <asp:Label ID="lbldefdiscip" runat="server"> </asp:Label>
                    </td>
                    <td align="left" class="lbl-name" style="display:none">
                        Packages
                    </td>
                    <td align="center" class="lbl-col" style="display:none">
                        :
                    </td>
                    <td align="left" class="lbl-val" colspan="4" style="display:none">
                        <asp:Label ID="lblIpPkgD" runat="server"> </asp:Label>
                    </td>
                </tr>
                <tr style="background:#eee;">
                    <td align="left" class="lbl-val" colspan="12">
                        Tariff Selection for OP
                    </td>
                </tr>
                <tr>
                    <td align="left" class="lbl-name">
                        Priority 1
                    </td>
                    <td align="center" class="lbl-col">
                        :
                    </td>
                    <td align="left" class="lbl-val">
                        <asp:Label ID="lblprior1op" runat="server"> </asp:Label>
                    </td>
                    <td align="left" class="lbl-name">
                        Discount (%)
                    </td>
                    <td align="center" class="lbl-col">
                        :
                    </td>
                    <td align="left" class="lbl-val">
                        <asp:Label ID="lbldisc1op" runat="server"> </asp:Label>
                    </td>
                    <td align="left" class="lbl-name" style="display:none">
                        Packages
                    </td>
                    <td align="center" class="lbl-col" style="display:none">
                        :
                    </td>
                    <td align="left" class="lbl-val" colspan="4" style="display:none">
                        <asp:Label ID="lblPkg1" runat="server"> </asp:Label>
                    </td>
                </tr>
                <tr>
                    <td align="left" class="lbl-name">
                        Priority 2
                    </td>
                    <td align="center" class="lbl-col">
                        :
                    </td>
                    <td align="left" class="lbl-val">
                        <asp:Label ID="lblprior2op" runat="server"> </asp:Label>
                    </td>
                    <td align="left" class="lbl-name">
                        Discount (%)
                    </td>
                    <td align="center" class="lbl-col">
                        :
                    </td>
                    <td align="left" class="lbl-val">
                        <asp:Label ID="lbldisc2op" runat="server"> </asp:Label>
                    </td>
                    <td align="left" class="lbl-name" style="display:none">
                        Packages
                    </td>
                    <td align="center" class="lbl-col" style="display:none">
                        :
                    </td>
                    <td align="left" class="lbl-val" colspan="4" style="display:none">
                        <asp:Label ID="lblPkg2" runat="server"> </asp:Label>
                    </td>
                </tr>
                <tr>
                    <td align="left" class="lbl-name">
                        Priority 3
                    </td>
                    <td align="center" class="lbl-col">
                        :
                    </td>
                    <td align="left" class="lbl-val">
                        <asp:Label ID="lblprior3op" runat="server"> </asp:Label>
                    </td>
                    <td align="left" class="lbl-name">
                        Discount (%)
                    </td>
                    <td align="center" class="lbl-col">
                        :
                    </td>
                    <td align="left" class="lbl-val">
                        <asp:Label ID="lbldisc3op" runat="server"> </asp:Label>
                    </td>
                    <td align="left" class="lbl-name" style="display:none">
                        Packages
                    </td>
                    <td align="center" class="lbl-col" style="display:none">
                        :
                    </td>
                    <td align="left" class="lbl-val" colspan="4" style="display:none">
                        <asp:Label ID="lblPkg3" runat="server"> </asp:Label>
                    </td>
                </tr>
                <tr>
                    <td align="left" class="lbl-name">
                        Default Tariff
                    </td>
                    <td align="center" class="lbl-col">
                        :
                    </td>
                    <td align="left" class="lbl-val">
                        <asp:Label ID="lbldeftariffop" runat="server"> </asp:Label>
                    </td>
                    <td align="left" class="lbl-name">
                        Discount (%)
                    </td>
                    <td align="center" class="lbl-col">
                        :
                    </td>
                    <td align="left" class="lbl-val">
                        <asp:Label ID="lbldefdiscop" runat="server"> </asp:Label>
                    </td>
                    <td align="left" class="lbl-name" style="display:none">
                        Packages
                    </td>
                    <td align="center" class="lbl-col" style="display:none">
                        :
                    </td>
                    <td align="left" class="lbl-val"  colspan="4" style="display:none">
                        <asp:Label ID="lblPkgD" runat="server"> </asp:Label>
                    </td>
                </tr>
                <tr style="display: none">
                    <td align="left" class="lbl-name">
                        Tariff Priority Comparision
                    </td>
                    <td align="center" class="lbl-col">
                        :
                    </td>
                    <td align="left" class="lbl-val">
                        <asp:Label ID="lbltariffcomparision" runat="server"> </asp:Label>
                    </td>
                </tr>
            </table>
        </div>
    </div>
</div>
</div>
