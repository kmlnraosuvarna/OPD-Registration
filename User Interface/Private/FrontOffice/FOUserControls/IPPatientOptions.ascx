<%@ Control Language="C#" AutoEventWireup="true" CodeFile="IPPatientOptions.ascx.cs" Inherits="Private_FrontOffice_FOUserControls_IPPatientOptions" %>

<script type="text/javascript">

    var TempData = [];
    $(document).ready(function () {
        document.getElementById('<%=hdnoptSessionID.ClientID %>').value = '<%=SessionHandler.DBSESSION_ID %>';
        var IP_OP = document.getElementById('<%=HDN_IP_OP.ClientID %>').value;

        var form_name = "";
        if (document.getElementById('ctl00_ContentPlaceHolder1_umrPatientDetails_hdnDocName') != null) {
            form_name = document.getElementById('ctl00_ContentPlaceHolder1_umrPatientDetails_hdnDocName').value;
        }
        else {
            form_name = $('[id*=hdnDocName]').val();
        }
        if (form_name == "ADMN") {
            $('[id$=regfacesheetrpt]').attr('title', 'Case Sheet Report');
        }

        var a = $('.icons li').each(function () {
            TempData.push($(this)[0].title);
        });
        IconsVisibleValidation(TempData);
    });
    function setProperDecimalsVal(ActualVal) {
        if (ActualVal == undefined || ActualVal == null || ActualVal == '') { ActualVal = 0; }
        var v = $('[id*=hdnFBMaxDcml]').val();
        if (v == '' || v == null || v == undefined) { v = 0; }
        v = parseInt(v);
        var power = Math.pow(10, v || 0);
        var ActualVal = String(Math.round(ActualVal * power) / power);
        if ((ActualVal.indexOf('.') + 1) == 0) {
            ActualVal = ActualVal;
        }
        return ActualVal;
    }
</script>
<asp:ScriptManagerProxy ID="smp" runat="server">
    <Scripts>
        <asp:ScriptReference Path="~/Assets/js/Suvarnatable.js" />
        <asp:ScriptReference Path="~/JSScript/FrontOfficeScripts/Changes/IPPatientOptions.js" />
    </Scripts>
</asp:ScriptManagerProxy>
<style type="text/css">
    .DynamceTable
    {
        background: -webkit-linear-gradient(top,#eee 0,#ccc 100%);
        background-image: -webkit-linear-gradient(top, rgb(238, 238, 238) 0px, rgb(204, 204, 204) 100%);
        background-color: rgb(214, 214, 214);
        background: -o-linear-gradient(top,#eee 0,#ccc 100%);
        background: -ms-linear-gradient(top,#eee 0,#ccc 100%);
        font-style: italic;
        font-weight: bold;
    }
</style>
<legend class="icons">
    <ul>
        <li id="cmpchecklists" style="display: none" title="CheckLists" class="tooltip"><i
            class=" icon-check" onclick="return showchecklists();"></i></li>
        <li title="Previous Admissions" id="prevadts" runat="server" style="display: none;"
            class="tooltip"><i class="icon-user" onclick="return prvdetails();"></i></li>
        <li id="lipattag" title="Patient Tag" class="tooltip"><i class="icon-tags" onclick="return Patienttaginfo();">
        </i></li>
        <li id="lipataddressIP" title="Address" class="tooltip"><i class="icon-location" onclick="return showPatAddressIP();">
        </i></li>
        <li id="lipatallergiesIP" title="Allergies" class="tooltip"><i class="icon-stethoscope"
            onclick="return ShowPatAllergiesIP();"></i></li>
        <li id="lipathistoryIP" title="History" class="tooltip"><i class=" icon-history" onclick="return ShowPatHistoryIP();">
        </i></li>
        <li title="Emergency Details" id="adtemergencydet" runat="server" style="display: none;"
            class="tooltip"><i class="icon-lightbulb" onclick="return ShowPatEmergencyDetails();">
            </i></li>
        <li id="liupload" title="Upload Documents" class="tooltip"><i class="icon-upload-1"
            onclick="return OnFileUpload('Banner');"></i></li>
        <li id="liview" title="View Documents" class="tooltip"><i class="icon-eye" onclick="return onFileView('Banner');">
        </i></li>
        <li id="lidownload" title="Download Documents" class="tooltip"><i class="icon-download-1"
            onclick="return onFileDowload('Banner');"></i></li>
        <li id="lipatnotificationIP" title="Notifications" class="tooltip"><i class="icon-bell"
            onclick="return ShowPatNotificationsIP();"></i></li>
        <li title="Patient Clinical Flags" id="clinicalflagsIP" runat="server" class="tooltip">
            <i class="icon-user-3" onclick="return ClinicalFlagsIP(this);"></i></li>
        <li title="Change Reg Details" id="chgregiconIP" runat="server" class="tooltip"><i
            class="icon-edit" onclick="return changregdetIP();"></i></li>
        <li title="FaceSheet Report" id="regfacesheetrpt" runat="server" class="tooltip"><i
            class="icon-print" onclick="return ShowRegFaceSheetReport();"></i></li>
        <li title="Card Report" id="regcardrpt" runat="server" class="tooltip"><i class=" icon-print-1"
            onclick="return ShowRegCardReport();"></i></li>
    </ul>
</legend>
<div class="masking" id="IPPatHistoryGrid">
    <div class="cmask">
    </div>
    <div class="clientpopup" style="width: 750px; height: 450px; margin-left: -375px;
        margin-top: -225px;">
        <div class="pop-header">
            <h1>
                <asp:Label ID="lblIPPat_headName" runat="server"></asp:Label>
            </h1>
            <asp:Button buttonaction="cancelButton" ID="Button3" runat="server" CssClass="cbutton"
                Text="&times;" OnClientClick="return hidePatHistoryIP();" />
        </div>
        <div class="pop-body grd" style="overflow: hidden; height: 410px;">
            <div id="IPtbl_PreConsultation" class="divscroll" style="height: 374px !important;
                overflow: auto;">
            </div>
        </div>
    </div>
</div>
<div class="masking" id="patAddressPopupIP">
    <div class="cmask">
    </div>
    <div class="clientpopup" style="width: 700px; height: 400px; margin-left: -350px;
        margin-top: -200px;">
        <div class="pop-header">
            <h1>
                <asp:Label ID="lblPat_addressIP" runat="server"></asp:Label>
            </h1>
            <asp:Button buttonaction="cancelButton" ID="img4" runat="server" CssClass="cbutton"
                Text="&times;" OnClientClick="return HidePatAddressIP();" />
        </div>
        <div class="pop-body grd divscroll" style="height: 360px;">
            <div id="div_addressIP">
            </div>
            <table cellpadding="2" cellspacing="2" border="0" width="100%" class="FormsCtrl"
                style="display: none;">
                <tr>
                    <td align="left" width="130px">
                        <b>Address</b>
                    </td>
                    <td align="center" width="20px">
                        <b>:</b>
                    </td>
                    <td align="left">
                        <asp:Label ID="lbladdress" runat="server"></asp:Label>
                    </td>
                </tr>
                <tr>
                    <td align="left">
                        <b>Area</b>
                    </td>
                    <td align="center">
                        <b>:</b>
                    </td>
                    <td align="left">
                        <asp:Label ID="lblArea" runat="server"></asp:Label>
                    </td>
                </tr>
                <tr>
                    <td align="left">
                        <b>City</b>
                    </td>
                    <td align="center">
                        <b>:</b>
                    </td>
                    <td align="left">
                        <asp:Label ID="lblCity" runat="server"></asp:Label>
                    </td>
                </tr>
                <tr>
                    <td align="left">
                        <b>State</b>
                    </td>
                    <td align="center">
                        <b>:</b>
                    </td>
                    <td align="left">
                        <asp:Label ID="lblState" runat="server"></asp:Label>
                    </td>
                </tr>
                <tr>
                    <td align="left">
                        <b>Country</b>
                    </td>
                    <td align="center">
                        <b>:</b>
                    </td>
                    <td align="left">
                        <asp:Label ID="lblCountry" runat="server"></asp:Label>
                    </td>
                </tr>
                <tr>
                    <td align="left">
                        <b>Pin Code</b>
                    </td>
                    <td align="center">
                        <b>:</b>
                    </td>
                    <td align="left">
                        <asp:Label ID="lblCode" runat="server"></asp:Label>
                    </td>
                </tr>
                <tr>
                    <td align="left">
                        <b>Fax</b>
                    </td>
                    <td align="center">
                        <b>:</b>
                    </td>
                    <td align="left">
                        <asp:Label ID="lblfax" runat="server"></asp:Label>
                    </td>
                </tr>
                <tr>
                    <td align="left">
                        <b>Telephone No</b>
                    </td>
                    <td align="center">
                        <b>:</b>
                    </td>
                    <td align="left">
                        <asp:Label ID="lblTelNo" runat="server"></asp:Label>
                    </td>
                </tr>
                <tr>
                    <td align="left">
                        <b>Mobile No:</b>
                    </td>
                    <td align="center">
                        <b>:</b>
                    </td>
                    <td align="left">
                        <asp:Label ID="lblMobNo" runat="server"></asp:Label>
                    </td>
                </tr>
                <tr>
                    <td align="left">
                        <b>E-Mail</b>
                    </td>
                    <td align="center">
                        <b>:</b>
                    </td>
                    <td align="left">
                        <asp:Label ID="lblEmail" runat="server"></asp:Label>
                    </td>
                </tr>
            </table>
        </div>
    </div>
</div>
<div class="masking" id="PatientClicinalFlagsIP">
    <div class="cmask">
    </div>
    <div class="clientpopup" style="width: 500px; height: 206px; margin-left: -250px;
        margin-top: -160px;">
        <div class="pop-header">
            <h1>
                Patient Clinical Flags
            </h1>
            <asp:Button buttonaction="cancelButton" ID="Button2" runat="server" CssClass="cbutton"
                Text="&times;" OnClientClick="return HidePatientClicinalFlagsIP();" />
        </div>
        <div class="pop-body" style="padding: 10px;">
            <table cellpadding="2" cellspacing="2" border="0" width="100%" class="FormsCtrl">
                <div id="divAcu">
                    <tr>
                        <td align="left" width="130px">
                            <b>Acuity Status</b>
                        </td>
                        <td align="center" width="20px">
                            <b>:</b>
                        </td>
                        <td align="left">
                            <asp:Label ID="lblacuity" runat="server"></asp:Label>
                        </td>
                    </tr>
                </div>
                <div id="divNBM">
                    <tr>
                        <td align="left">
                            <b>NBM</b>
                        </td>
                        <td align="center">
                            <b>:</b>
                        </td>
                        <td align="left">
                            <asp:Label ID="lblstart" runat="server"></asp:Label>
                        </td>
                    </tr>
                </div>
                <div id="divInf">
                    <tr>
                        <td align="left">
                            <b>Infectuas</b>
                        </td>
                        <td align="center">
                            <b>:</b>
                        </td>
                        <td align="left">
                            <asp:Label ID="lblInfectuas" runat="server"></asp:Label>
                        </td>
                    </tr>
                </div>
                <div id="divmon">
                    <tr>
                        <td align="left">
                            <b>monitoring</b>
                        </td>
                        <td align="center">
                            <b>:</b>
                        </td>
                        <td align="left">
                            <asp:Label ID="lblCentralinemonitoring" runat="server"></asp:Label>
                        </td>
                    </tr>
                </div>
                <div id="divdrian">
                    <tr>
                        <td align="left">
                            <b>Drains</b>
                        </td>
                        <td align="center">
                            <b>:</b>
                        </td>
                        <td align="left">
                            <asp:Label ID="lblDrains" runat="server"></asp:Label>
                        </td>
                    </tr>
                </div>
            </table>
        </div>
    </div>
</div>
<div class="masking" id="divPatAllergiesIP">
    <div class="cmask">
    </div>
    <div class="clientpopup" style="width: 750px; height: 450px; margin-left: -375px;
        margin-top: -225px;">
        <div class="pop-header">
            <h1>
                Patient Allergies
            </h1>
            <asp:Button buttonaction="cancelButton" ID="Button1" runat="server" CssClass="cbutton"
                Text="&times;" OnClientClick="return hidePatAllergiesIP();" />
        </div>
        <div class="pop-body grd" style="overflow: hidden; height: 410px;">
            <div id="tbl_PatAllergiesIP" class="divscroll" style="height: 390px !important; overflow: auto;">
            </div>
        </div>
    </div>
</div>
<div class="masking" id="EmergancyDetailsIP">
    <div class="cmask">
    </div>
    <div class="clientpopup" style="width: 531px; height: 150px; margin-left: -275px;
        margin-top: -158px;">
        <div class="pop-header">
            <h1>
                Emergency Details
            </h1>
            <input type="button" id="btnHideEmergencyDetails" class="button" value="&times;"
                onclick="return HideEmergencyDetails();" />
        </div>
        <div class="pop-body grd" style="height: 150px; overflow: auto;">
            <div id="tbl_EmergencyDetails" style="height: 145px; overflow: auto;">
            </div>
        </div>
    </div>
</div>
<div class="masking" id="divimages">
    <div class="cmask">
    </div>
    <div class="clientpopup" style="width: 750px; height: 437px; margin-left: -387px;
        margin-top: -225px; overflow: auto;">
        <div class="pop-header">
            <h1>
                Image View
            </h1>
            <asp:Button buttonaction="cancelButton" ID="Button6" runat="server" CssClass="cbutton"
                Text="&times;" OnClientClick="return closefiles();" />
        </div>
        <div class="pop-body grd">
            <div>
                <table width="100%" cellpadding="0" cellspacing="0" border="0">
                    <tr>
                        <td align="left" width="4%">
                            <div id="gallery">
                            </div>
                            <div id="gallery1">
                            </div>
                        </td>
                        <td align="left" width="82%">
                            <div class="image_popup" id="divimage" style="margin-top: -330px;">
                            </div>
                        </td>
                    </tr>
                </table>
            </div>
        </div>
    </div>
</div>
<div class="masking" id="divPrevAdmnDet">
    <div class="cmask">
    </div>
    <div class="clientpopup" style="width: 750px; height: 450px; margin-left: -375px;
        margin-top: -225px;">
        <div class="pop-header">
            <h1>
                <asp:Label ID="lblPrevAdmns" runat="server" Text="Previous Admissions"></asp:Label>
            </h1>
            <input type="button" id="btnPrevAdmns" class="button" value="&times;" onclick="return PrevAdmnsClose();" />
        </div>
        <div style="height: 413px; overflow: hidden;" class="panel-body grd">
            <div id="tbl_PreAdmisions" class="divscroll" style="height: 380px !important; overflow: auto;">
            </div>
        </div>
    </div>
</div>
<div>
    <asp:HiddenField ID="hdnOptPatientid" runat="server" />
    <asp:HiddenField ID="hdnOptRegID" runat="server" />
    <asp:HiddenField ID="hdnOptUmrNo" runat="server" />
    <asp:HiddenField ID="hdnOptDocName" runat="server" />
    <asp:HiddenField ID="hdnOptBillid" runat="server" />
    <asp:HiddenField ID="hdnOptAdmnID" runat="server" />
    <asp:HiddenField ID="hdnOptAdmnNo" runat="server" />
    <asp:HiddenField ID="hdnsrcname" runat="server" />
    <asp:HiddenField ID="hdnrecord_status" runat="server" />
    <asp:HiddenField ID="hdnpatient_expiry" runat="server" />
    <asp:HiddenField ID="hdnis_blocked" runat="server" />
    <asp:HiddenField ID="hdnonbed_status" runat="server" />
    <asp:HiddenField ID="hdnis_merge" runat="server" />
    <asp:HiddenField ID="hdnis_reg_expiry" runat="server" />
    <asp:HiddenField ID="hdnis_senior_citizen" runat="server" />
    <asp:HiddenField ID="hdnis_vip" runat="server" />
    <asp:HiddenField ID="hdnoutstanding_due" runat="server" />
    <asp:HiddenField ID="hdnrefund" runat="server" />
    <asp:HiddenField ID="hdnmerge_umr_no" runat="server" />
    <asp:HiddenField ID="hdnCntrlType" runat="server" />
    <asp:HiddenField ID="hdnudocname" runat="server" />
    <asp:HiddenField ID="HDN_IP_OP" runat="server" />
    <asp:HiddenField ID="hdnISOSP" runat="server" />
    <asp:HiddenField ID="hdnpreadvance" runat="server" />
    <asp:HiddenField ID="hdnismlc" runat="server" />
    <asp:HiddenField ID="hdnfundexpamt" runat="server" />
    <asp:HiddenField ID="hdnfundexpdays" runat="server" />
    <asp:HiddenField ID="hdnpatientclass" runat="server" />
    <asp:HiddenField ID="hdncorpupload" runat="server" />
    <asp:HiddenField ID="hdncorpdownload" runat="server" />
    <asp:HiddenField ID="hdncorpviewdownload" runat="server" />
    <asp:HiddenField ID="hdnoptSessionID" runat="server" />
    <asp:HiddenField ID="hdnoptAddDisableAttr" runat="server" />
    <asp:HiddenField ID="hdnoptauth_user" runat="server" />
    <asp:HiddenField ID="hdnChnRegDocID" runat="server" />
    <asp:HiddenField ID="hdnSrcDocFormCd" runat="server" />

    
</div>
<script type="text/javascript">
    $(document).ready(function () {
        AccessOPTIONSAddDisableAttributes();
        if ($('[id*=imgDmsUpload]').css('display') == 'inline-block' || $('[id*=imgDmsUpload]').css('display') == 'block' || $('[id*=imgDmsUpload]').css('display') == undefined) {
            $('[id*=liupload]').show();
        }
        else {
            $('[id*=liupload]').hide();
        }
        if ($('[id*=imgDmsView]').css('display') == 'inline-block' || $('[id*=imgDmsView]').css('display') == 'block' || $('[id*=imgDmsView]').css('display') == undefined) {
            $('[id*=liview]').show();
        }
        else {
            $('[id*=liview]').hide();
        }
        if ($('[id*=imgDmsDownload]').css('display') == 'inline-block' || $('[id*=imgDmsDownload]').css('display') == 'block' || $('[id*=imgDmsDownload]').css('display') == undefined) {
            $('[id*=lidownload]').show();
        }
        else {
            $('[id*=lidownload]').hide();
        }
    });
</script>
<div id="pnlCheckLists" width="600px" style="display: none" runat="server" class="masking">
    <div class="cmask">
    </div>
    <div class="clientpopup" style="width: 820px; height: 500px; margin-left: -375px;
        margin-top: -250px;">
        <div class="pop-header">
            <h1>
                Company Check Lists
            </h1>
            <div style="float: left; margin-top: 6px;">
                <div style="float: left; line-height: 25px; margin-right: 5px;">
                    <div style="background: #AED75B; height: 10px; width: 10px; float: left; margin-top: 8px;
                        margin-right: 3px;">
                    </div>
                    <asp:Label Text="System Defined" ID="lblpri1" runat="server"></asp:Label>
                </div>
                <div style="float: left; line-height: 25px; margin-right: 5px;">
                    <div style="background: #FFDAB9; height: 10px; width: 10px; float: left; margin-top: 8px;
                        margin-right: 3px;">
                    </div>
                    <asp:Label Text="Mandatory" ID="lblpri2" runat="server"></asp:Label>
                </div>
                <div style="float: left; line-height: 25px; margin-right: 5px;">
                    <div style="background: #FFC0CB; height: 10px; width: 10px; float: left; margin-top: 8px;
                        margin-right: 3px;">
                    </div>
                    <asp:Label ID="lblpri3" Text="Optional" runat="server"></asp:Label>
                </div>
                <div style="float: left; line-height: 25px; margin-right: 5px;">
                    <div style="background-color: #c0ffdc; height: 10px; width: 10px; float: left; margin-top: 8px;
                        margin-right: 3px;">
                    </div>
                    <asp:Label ID="lblpri4" Text="Completed" runat="server"></asp:Label>
                </div>
                <div style="float: left; line-height: 25px; margin-right: 5px;">
                    <div style="background-color: #f84463; height: 10px; width: 10px; float: left; margin-top: 8px;
                        margin-right: 3px;">
                    </div>
                    <asp:Label ID="lblpri5" Text="SD+MD" runat="server"></asp:Label>
                </div>
                <div style="float: left; line-height: 25px; margin-right: 5px;">
                    <div style="background-color: #a3b9c7; height: 10px; width: 10px; float: left; margin-top: 8px;
                        margin-right: 3px;">
                    </div>
                    <asp:Label ID="lblpri6" Text="SD+OPT" runat="server"></asp:Label>
                </div>
                <div style="float: left; line-height: 25px; margin-right: 5px;">
                    <div style="background-color: rgb(195, 12, 12); height: 10px; width: 10px; float: left;
                        margin-top: 8px; margin-right: 3px;">
                    </div>
                    <asp:Label ID="lblpri7" Text="Upload" runat="server"></asp:Label>
                </div>
            </div>
            <input type="button" id="btncancel" class="button" value="&times;" onclick="return btncloseletype();" />
            <div style="float: right;">
                <i class="tb_Btn icon-upload-1" id="lettypeupload" onclick="return OnLoadUploadPhoto(this,'L');"
                    title="Upload Document" style="margin-left: 2px; line-height: 100%; font-size: 16px;
                    float: left; padding-top: 2px;"></i><i class="tb_Btn icon-download" id="lettypedownload"
                        onclick="return OnLoadDownloadPhoto(this);" title="Download Document" style="margin-left: 9px;
                        line-height: 100%; font-size: 16px; padding-top: 2px; float: left;"></i>
            </div>
        </div>
        <div class="pop-body grd" style="height: 425px; border-bottom: 1px solid #cacaca;">
            <div id="divchecklist" class="CompanyCheckLists" style="height: 100%; float: left;
                overflow: auto; width: 200px; border-right: 1px solid #caccac;">
                <ul id="ul_chk_list1">
                </ul>
            </div>
            <div style="overflow: auto; height: 100%; width: 550px;">
                <table id="gvchklistdtls" class="grid CompanyCheckListsgrid" cellpadding="0" cellspacing="0"
                    width="100%">
                    <thead>
                        <tr>
                            <th>
                                S.No
                            </th>
                            <th>
                                Admn No
                            </th>
                            <th>
                                Doc Name
                            </th>
                            <th>
                                Check List Name
                            </th>
                            <th>
                                Create By
                            </th>
                            <th>
                                Create Dt
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                    </tbody>
                </table>
            </div>
        </div>
        <div align="center" style="padding: 8px 5px">
            <input type="button" onclick="MaintainChkListId();" class="button" value="Ok" />
        </div>
    </div>
</div>
<div class="masking" id="divimagescmp">
    <div class="cmask">
    </div>
    <div class="clientpopup" style="width: 800px; height: 492px; margin-left: -400px;
        margin-top: -246px;">
        <div class="pop-header">
            <h1>
                Image View
            </h1>
            <asp:Button buttonaction="cancelButton" ID="Button4" runat="server" CssClass="cbutton"
                Text="&times;" OnClientClick="return closefilescmp();" />
        </div>
        <div class="pop-body grd" style="height: 455px;">
            <div id="gallery" class="divscroll">
            </div>
            <div class="divscroll" id="divimagecmp">
            </div>
            <div class="clr">
            </div>
        </div>
    </div>
</div>
<div>
    <asp:HiddenField ID="hdnFBMaxDcml" runat="server" />
</div>
