 <%@ Control Language="C#" AutoEventWireup="true" CodeFile="OPDGuarenterControl.ascx.cs" Inherits="Private_FrontOffice_FOUserControls_OPDGuarenterControl" %>
<%@ Register Src="~/Private/UserControls/LookUp.ascx" TagName="GenericGrid" TagPrefix="uc4" %>
<%@ Register Assembly="AjaxControlToolkit" Namespace="AjaxControlToolkit" TagPrefix="ajaxToolkit" %>
<%--<script src="../../../JSScript/Validation.js" type="text/javascript"></script>--%>
<script type="text/javascript" language="javascript">

    $(document).ready(function (e) {
        if (document.getElementById('<%=hdnGDocName.ClientID %>').value == '') {
            // document.getElementById('<%=chkECopyAddress.ClientID %>').style.display = 'none';
            //document.getElementById('<%=lblSameAsAddress.ClientID %>').style.display = 'none';
        }
        else {
            document.getElementById('<%=chkECopyAddress.ClientID %>').style.display = 'block';
            document.getElementById('<%=lblSameAsAddress.ClientID %>').style.display = 'block';
        }

    });


    function AllTitleCase(ev) {
        if (ev.value != '' && ev.value != null && ev.value != undefined) {
            var uppercase = ev.value.toUpperCase();
            document.getElementById(ev.id).value = uppercase
            return uppercase;
        }

    }

    function OnAreaSelection(input) {

        document.getElementById('<%= ucArea.FindControl("txtSearchControl").ClientID %>').value = input._lktext;
        if (input._lktext == input.COUNTRY_NAME) {
            AssignAddressDetails(input.AREA_ID, input.AREA_NAME, input.CITY_ID, input.CITY_NAME, input.STATE_ID, input.STATE_NAME, input.COUNTRY_ID, input.COUNTRY_NAME, input.PIN_CODE, input.DISTRICT_NAME, input.DISTRICT_ID, input.ISD_CODE);
        }
        else {
            if (input.RESULT == undefined)
                AssignAddressDetails(input.AREA_ID, input.AREA_NAME, input.CITY_ID, input.CITY_NAME, input.STATE_ID, input.STATE_NAME, input.COUNTRY_ID, input.COUNTRY_NAME, input.PIN_CODE, input.DISTRICT_NAME, input.DISTRICT_ID, input.ISD_CODE);
            else
                AssignAddressDetails(input.RESULT.AREA_ID, input.RESULT.AREA_NAME, input.RESULT.CITY_ID, input.RESULT.CITY_NAME, input.RESULT.STATE_ID, input.RESULT.STATE_NAME, input.RESULT.COUNTRY_ID, input.RESULT.COUNTRY_NAME, input.RESULT.PIN_CODE, input.RESULT.DISTRICT_NAME, input.RESULT.DISTRICT_ID, input.RESULT.ISD_CODE);
        }
    }
    function OnGcAreaSelection(input) {

        document.getElementById('<%= ucGArea.FindControl("txtSearchControl").ClientID %>').value = input._lktext;
        if (input._lktext == input.COUNTRY_NAME) {
            GcAssignAddressDetails(input.AREA_ID, input.AREA_NAME, input.CITY_ID, input.CITY_NAME, input.STATE_ID, input.STATE_NAME, input.COUNTRY_ID, input.COUNTRY_NAME, input.PIN_CODE, input.DISTRICT_NAME, input.DISTRICT_ID, input.ISD_CODE);
        }
        else {
            if (input.RESULT == undefined)
                GcAssignAddressDetails(input.AREA_ID, input.AREA_NAME, input.CITY_ID, input.CITY_NAME, input.STATE_ID, input.STATE_NAME, input.COUNTRY_ID, input.COUNTRY_NAME, input.PIN_CODE, input.DISTRICT_NAME, input.DISTRICT_ID, input.ISD_CODE);
            else
                GcAssignAddressDetails(input.RESULT.AREA_ID, input.RESULT.AREA_NAME, input.RESULT.CITY_ID, input.RESULT.CITY_NAME, input.RESULT.STATE_ID, input.RESULT.STATE_NAME, input.RESULT.COUNTRY_ID, input.RESULT.COUNTRY_NAME, input.RESULT.PIN_CODE, input.RESULT.DISTRICT_NAME, input.RESULT.DISTRICT_ID, input.RESULT.ISD_CODE);
        }
    }
    function AssignAddressDetails(area_id, area_name, city_id, city_name, state_id, state_name, country_id, country_name, pin_code, districtName, districtId, isd_code) {
        document.getElementById('<%= ucArea.FindControl("txtSearchControl").ClientID %>').value = area_name;
        document.getElementById('<%=hdnEAreaId.ClientID %>').value = area_id;
        document.getElementById('<%=ucArea.FindControl("_hiddenID").ClientID%>').value = area_id;
        document.getElementById('<%= ucCity.ClientID %>').value = city_name;
        document.getElementById('<%=hdncityid.ClientID %>').value = city_id;
        document.getElementById('<%=ucState.ClientID %>').value = state_name;
        document.getElementById('<%=hdnstateid.ClientID %>').value = state_id;
        document.getElementById('<%=ucCountry.ClientID %>').value = country_name;
        document.getElementById('<%=hdncountryid.ClientID %>').value = country_id;
        document.getElementById('<%=txtPin.ClientID %>').value = pin_code;
        document.getElementById('<%=hdnpincode.ClientID %>').value = pin_code;
        document.getElementById('<%=hdndistrictid.ClientID %>').value = districtId;
        document.getElementById('<%=DistricUserControl1.ClientID %>').value = districtName;
        $('#isdcodemobile5').text(isd_code);
    }
    function GcAssignAddressDetails(area_id, area_name, city_id, city_name, state_id, state_name, country_id, country_name, pin_code, districtName, districtId, isd_code) {
        document.getElementById('<%= ucGArea.FindControl("txtSearchControl").ClientID %>').value = area_name;
        document.getElementById('<%=hdnGAreaId.ClientID %>').value = area_id;
        document.getElementById('<%=ucGArea.FindControl("_hiddenID").ClientID%>').value = area_id;
        document.getElementById('<%= ucGCity.ClientID %>').value = city_name;
        document.getElementById('<%=hdnGcityid.ClientID %>').value = city_id;
        document.getElementById('<%=ucGState.ClientID %>').value = state_name;
        document.getElementById('<%=hdnGstateid.ClientID %>').value = state_id;
        document.getElementById('<%=ucGCountry.ClientID %>').value = country_name;
        document.getElementById('<%=hdnGcountryid.ClientID %>').value = country_id;
        document.getElementById('<%=txtGPin.ClientID %>').value = pin_code;
        document.getElementById('<%=hdnGpincode.ClientID %>').value = pin_code;
        document.getElementById('<%=hdnGdistId.ClientID %>').value = districtId;
        document.getElementById('<%=txtGdistrict.ClientID %>').value = districtName;
        $('#isdcodemobile4').text(isd_code);
    }
    function Onpincodeselection2(sender, eventArgs) {
        var results = eval('(' + eventArgs.get_value() + ')');
        document.getElementById('<%=hdnpincode.ClientID %>').value = results.PIN_CODE;
        document.getElementById('<%=txtPin.ClientID %>').value = results.PIN_CODE;
        document.getElementById('<%=ucArea.FindControl("txtSearchControl").ClientID%>').value = results.AREA_NAME;
        document.getElementById('<%=ucArea.FindControl("txtSearchControl").ClientID%>').className = 'grey';
        document.getElementById('<%=ucArea.FindControl("_hiddenID").ClientID%>').value = results.AREA_ID;
        document.getElementById('<%=ucCity.ClientID %>').value = results.CITY_NAME;
        document.getElementById('<%=hdncityid.ClientID %>').value = results.CITY_ID;
        document.getElementById('<%=ucState.ClientID %>').value = results.STATE_NAME;
        document.getElementById('<%=hdnstateid.ClientID %>').value = results.STATE_ID;
        document.getElementById('<%=ucCountry.ClientID%>').value = results.COUNTRY_NAME;
        document.getElementById('<%=hdncountryid.ClientID %>').value = results.COUNTRY_ID;

        name = document.getElementById('<%=txtEName.ClientID %>').value;
        relation = document.getElementById('<%=ddlERelation.ClientID %>').value;
        mobileno = document.getElementById('<%=txtmobileno.ClientID %>').value;
        txtPhone = document.getElementById('<%=txtPhone.ClientID %>').value;

    }
    function OnGpincodeselection(sender, eventArgs) {
        var results = eval('(' + eventArgs.get_value() + ')');
        document.getElementById('<%=hdnGpincode.ClientID %>').value = results.PIN_CODE;
        document.getElementById('<%=txtGPin.ClientID %>').value = results.PIN_CODE;
        document.getElementById('<%=ucGArea.FindControl("txtSearchControl").ClientID%>').value = results.AREA_NAME;
        document.getElementById('<%=ucGArea.FindControl("txtSearchControl").ClientID%>').className = 'grey';
        document.getElementById('<%=ucGArea.FindControl("_hiddenID").ClientID%>').value = results.AREA_ID;
        document.getElementById('<%=ucGCity.ClientID %>').value = results.CITY_NAME;
        document.getElementById('<%=hdnGcityid.ClientID %>').value = results.CITY_ID;
        document.getElementById('<%=ucGState.ClientID %>').value = results.STATE_NAME;
        document.getElementById('<%=hdnGstateid.ClientID %>').value = results.STATE_ID;
        document.getElementById('<%=ucGCountry.ClientID%>').value = results.COUNTRY_NAME;
        document.getElementById('<%=hdnGcountryid.ClientID %>').value = results.COUNTRY_ID;

        name = document.getElementById('<%=txtGEName.ClientID %>').value;
        relation = document.getElementById('<%=ddlGERelation.ClientID %>').value;
        mobileno = document.getElementById('<%=txtGmobileno.ClientID %>').value;
        txtPhone = document.getElementById('<%=txtGPhone.ClientID %>').value;

    }
    var _address = '';
    function Copyaddress(ev) {
        _address = 'Emr';
        if (document.getElementById('<%=hdnGDocName.ClientID %>').value == '') {
            if (document.getElementById('<%=chkECopyAddress.ClientID %>').checked) {
                if ($('#ctl00_ContentPlaceHolder1_Address1_AreaUserControl1_txtSearchControl').val() != '') {
                    document.getElementById('<%= ucArea.FindControl("txtSearchControl").ClientID %>').value = $('#ctl00_ContentPlaceHolder1_Address1_AreaUserControl1_txtSearchControl').val();
                    document.getElementById('<%=hdnEAreaId.ClientID %>').value = $('#ctl00_ContentPlaceHolder1_Address1_AreaUserControl1__hiddenID').val();
                    document.getElementById('<%=ucArea.FindControl("_hiddenID").ClientID%>').value = $('#ctl00_ContentPlaceHolder1_Address1_AreaUserControl1__hiddenID').val();
                    document.getElementById('<%= ucCity.ClientID %>').value = $('#ctl00_ContentPlaceHolder1_Address1_CityUserControl1').val();
                    document.getElementById('<%=hdncityid.ClientID %>').value = $('#ctl00_ContentPlaceHolder1_Address1_hdncityid').val();
                    document.getElementById('<%=ucState.ClientID %>').value = $('#ctl00_ContentPlaceHolder1_Address1_StateUserControl1').val();
                    document.getElementById('<%=hdnstateid.ClientID %>').value = $('#ctl00_ContentPlaceHolder1_Address1_hdnstateid').val();
                    document.getElementById('<%=ucCountry.ClientID %>').value = $('#ctl00_ContentPlaceHolder1_Address1_CountryUserControl1').val();
                    document.getElementById('<%=hdncountryid.ClientID %>').value = $('#ctl00_ContentPlaceHolder1_Address1_hdncountryid').val();
                    document.getElementById('<%=txtPin.ClientID %>').value = $('#ctl00_ContentPlaceHolder1_Address1_txtPin').val();
                    document.getElementById('<%=hdnpincode.ClientID %>').value = $('#ctl00_ContentPlaceHolder1_Address1_txtPin').val();
                    document.getElementById('<%=hdndistrictid.ClientID %>').value = document.getElementById('ctl00_ContentPlaceHolder1_Address1_hdndistrictid').value;
                    document.getElementById('<%=DistricUserControl1.ClientID %>').value = document.getElementById('ctl00_ContentPlaceHolder1_Address1_DistricUserControl1').value;

                    $('#isdcodemobile5').text($('#isdcodemobile1').text());
                    document.getElementById('<%= ucArea.FindControl("txtSearchControl").ClientID %>').disabled = true;

                    document.getElementById('lk_btn_ctl00_ContentPlaceHolder1_Address1_UcGuarantor_ucArea').disabled = true;
                    document.getElementById('<%= ucCity.ClientID %>').disabled = true;

                    document.getElementById('<%=ucState.ClientID %>').disabled = true;

                    document.getElementById('<%=ucCountry.ClientID %>').disabled = true;

                    document.getElementById('<%=txtPin.ClientID %>').disabled = true;

                }
                else {
                    document.getElementById('<%=chkECopyAddress.ClientID %>').checked = false;
                    $(".stoast").toastText("Info", "Please Select Present Address", 5, 2);
                    return false;
                }
            }
            else {
                document.getElementById('<%= ucArea.FindControl("txtSearchControl").ClientID %>').disabled = false;

                document.getElementById('lk_btn_ctl00_ContentPlaceHolder1_Address1_UcGuarantor_ucArea').disabled = false;
                document.getElementById('<%= ucCity.ClientID %>').disabled = false;

                document.getElementById('<%=ucState.ClientID %>').disabled = false;

                document.getElementById('<%=ucCountry.ClientID %>').disabled = false;

                document.getElementById('<%=txtPin.ClientID %>').disabled = false;
            }
        }
        else if (document.getElementById('<%=hdnGDocName.ClientID %>').value == 'OpBillAssesment') {

            var patID = document.getElementById('ctl00_ContentPlaceHolder1_umrPatientDetails_Umrlookup__hiddenID').value;
            //EzHms.Services.PatientRegistration.Get_Patient_Addresses(patID, myResults, OnCallError);
            GetAsync(
                    "PatientRegistration.asmx/Get_Patient_Address_Dtls",
                    { _patID: parseInt(patID) },
                    function (jdata) {
                        var _data = jdata.d[0];
                        document.getElementById('ctl00_ContentPlaceHolder1_UcGuarantor_txtAddress1').value = _data.Address1;
                        document.getElementById('ctl00_ContentPlaceHolder1_UcGuarantor_txtAddress2').value = _data.Address2;
                        document.getElementById('ctl00_ContentPlaceHolder1_UcGuarantor_hdnEAreaId').value = _data.AREA_ID;
                        document.getElementById('ctl00_ContentPlaceHolder1_UcGuarantor_ucArea_txtSearchControl').value = _data.AREA_NAME;
                        document.getElementById('ctl00_ContentPlaceHolder1_UcGuarantor_hdncityid').value = _data.CITY_ID;
                        document.getElementById('ctl00_ContentPlaceHolder1_UcGuarantor_ucCity').value = _data.CITY_NAME
                        document.getElementById('ctl00_ContentPlaceHolder1_UcGuarantor_hdnstateid').value = _data.STATE_ID;
                        document.getElementById('ctl00_ContentPlaceHolder1_UcGuarantor_ucState').value = _data.STATE_NAME;
                        document.getElementById('ctl00_ContentPlaceHolder1_UcGuarantor_hdncountryid').value = _data.COUNTRY_ID;
                        document.getElementById('ctl00_ContentPlaceHolder1_UcGuarantor_ucCountry').value = _data.COUNTRY_NAME;
                        document.getElementById('ctl00_ContentPlaceHolder1_UcGuarantor_txtPhone').value = _data.MOBILE_PHONE;


                        document.getElementById('ctl00_ContentPlaceHolder1_UcGuarantor_txtPin').value = _data.ZipCode;

                    },
                    function (jqXHR, textStatus, errorThrown) {
                        $(".stoast").toastText("warning", errorThrown, 5, 3);
                    });

        }



        else { document.getElementById('<%=chkECopyAddress.ClientID %>').checked = false; }
    }
    function CopyGaddress(ev) {
        debugger;
        _address = 'Grntr';
        if (document.getElementById('<%=hdnGDocName.ClientID %>').value == '') {
            if (document.getElementById('<%=chkGCopyAddress.ClientID %>').checked) {
                if (document.getElementById('<%= ucArea.FindControl("txtSearchControl").ClientID %>').value != '') {
                    document.getElementById('<%= ucGArea.FindControl("txtSearchControl").ClientID %>').value = document.getElementById('<%= ucArea.FindControl("txtSearchControl").ClientID %>').value
                    document.getElementById('<%=hdnGAreaId.ClientID %>').value = document.getElementById('<%=hdnEAreaId.ClientID %>').value
                    document.getElementById('<%=ucGArea.FindControl("_hiddenID").ClientID%>').value = document.getElementById('<%=ucArea.FindControl("_hiddenID").ClientID%>').value
                    document.getElementById('<%= ucGCity.ClientID %>').value = document.getElementById('<%= ucCity.ClientID %>').value
                    document.getElementById('<%=hdnGcityid.ClientID %>').value = document.getElementById('<%=hdncityid.ClientID %>').value
                    document.getElementById('<%=ucGState.ClientID %>').value = document.getElementById('<%=ucState.ClientID %>').value
                    document.getElementById('<%=hdnGstateid.ClientID %>').value = document.getElementById('<%=hdnstateid.ClientID %>').value
                    document.getElementById('<%=ucGCountry.ClientID %>').value = document.getElementById('<%=ucCountry.ClientID %>').value
                    document.getElementById('<%=hdnGcountryid.ClientID %>').value = document.getElementById('<%=hdncountryid.ClientID %>').value
                    document.getElementById('<%=txtGPin.ClientID %>').value = document.getElementById('<%=txtPin.ClientID %>').value
                    document.getElementById('<%=hdnGpincode.ClientID %>').value = document.getElementById('<%=hdnpincode.ClientID %>').value

                    document.getElementById('<%=txtGEName.ClientID %>').value = document.getElementById('<%=txtEName.ClientID %>').value
                    document.getElementById('<%=ddlGERelation.ClientID %>').value = document.getElementById('<%=ddlERelation.ClientID %>').value
                    document.getElementById('<%=txtGmobileno.ClientID %>').value = document.getElementById('<%=txtmobileno.ClientID %>').value
                    document.getElementById('<%=txtGAddress1.ClientID %>').value = document.getElementById('<%=txtAddress1.ClientID %>').value
                    document.getElementById('<%=txtGAddress2.ClientID %>').value = document.getElementById('<%=txtAddress2.ClientID %>').value
                    document.getElementById('<%=hdnGdistId.ClientID %>').value = document.getElementById('<%=hdndistrictid.ClientID %>').value;
                    document.getElementById('<%=txtGdistrict.ClientID %>').value = document.getElementById('<%=DistricUserControl1.ClientID %>').value;
                    $('#isdcodemobile4').text($('#isdcodemobile5').text());
                    document.getElementById('<%= ucGArea.FindControl("txtSearchControl").ClientID %>').disabled = true;

                    document.getElementById('lk_btn_ctl00_ContentPlaceHolder1_Address1_UcGuarantor_ucGArea').disabled = true;
                    document.getElementById('<%= ucGCity.ClientID %>').disabled = true;

                    document.getElementById('<%=ucGState.ClientID %>').disabled = true;

                    document.getElementById('<%=ucGCountry.ClientID %>').disabled = true;

                    document.getElementById('<%=txtGPin.ClientID %>').disabled = true;

                }
                else {
                    document.getElementById('<%=chkGCopyAddress.ClientID %>').checked = false;
                    $(".stoast").toastText("Info", "Please Select Emergency Address", 5, 2);
                    return false;
                }
            }
            else {
                document.getElementById('<%= ucGArea.FindControl("txtSearchControl").ClientID %>').disabled = false;

                document.getElementById('lk_btn_ctl00_ContentPlaceHolder1_Address1_UcGuarantor_ucGArea').disabled = false;

                document.getElementById('<%=txtGPin.ClientID %>').disabled = false;
            }
        }


        else if (document.getElementById('<%=hdnGDocName.ClientID %>').value == 'OpBillAssesment') {

            var patID = document.getElementById('ctl00_ContentPlaceHolder1_umrPatientDetails_Umrlookup__hiddenID').value;
            //EzHms.Services.PatientRegistration.Get_Patient_Addresses(patID, myResults, OnCallError);
            GetAsync(
                    "PatientRegistration.asmx/Get_Patient_Address_Dtls",
                    { _patID: parseInt(patID) },
                    function (jdata) {
                        var _data = jdata.d[0];
                        document.getElementById('ctl00_ContentPlaceHolder1_UcGuarantor_txtGAddress1').value = _data["Address1"];
                        document.getElementById('ctl00_ContentPlaceHolder1_UcGuarantor_txtGAddress2').value = _data["Address2"];
                        document.getElementById('ctl00_ContentPlaceHolder1_UcGuarantor_hdnGAreaId').value = _data["AREA_ID"];
                        document.getElementById('ctl00_ContentPlaceHolder1_UcGuarantor_ucGArea_txtSearchControl').value = _data["AREA_NAME"];
                        document.getElementById('ctl00_ContentPlaceHolder1_UcGuarantor_hdnGcityid').value = _data["CITY_ID"];
                        document.getElementById('ctl00_ContentPlaceHolder1_UcGuarantor_ucGCity').value = _data["CITY_NAME"];
                        document.getElementById('ctl00_ContentPlaceHolder1_UcGuarantor_hdnGstateid').value = _data["STATE_ID"];
                        document.getElementById('ctl00_ContentPlaceHolder1_UcGuarantor_ucGState').value = _data["STATE_NAME"];
                        document.getElementById('ctl00_ContentPlaceHolder1_UcGuarantor_hdnGcountryid').value = _data["COUNTRY_ID"];
                        document.getElementById('ctl00_ContentPlaceHolder1_UcGuarantor_ucGCountry').value = _data["COUNTRY_NAME"];
                        document.getElementById('ctl00_ContentPlaceHolder1_UcGuarantor_txtGPhone').value = _data["MOBILE_PHONE"];


                        document.getElementById('ctl00_ContentPlaceHolder1_UcGuarantor_txtGPin').value = _data["ZipCode"];
                    },
                    function (jqXHR, textStatus, errorThrown) {
                        $(".stoast").toastText("warning", errorThrown, 5, 3);
                    });

        }

        else { document.getElementById('<%=chkECopyAddress.ClientID %>').checked = false; }
    }


    function selectRelation(obj) {
        if (obj == 'G') {
            if (document.getElementById('<%= ddlGERelation.ClientID%>').value == "14") {
                document.getElementById('<%= txtGEName.ClientID %>').value = document.getElementById('<%=hdnGDocName.ClientID %>').value == 'REG' ? document.getElementById('ctl00_ContentPlaceHolder1_txtDisplayname').value : '';
                document.getElementById('<%= txtGEName.ClientID %>').disabled = document.getElementById('ctl00_ContentPlaceHolder1_txtDisplayname').value != "" ? false : false;
            } else {
                document.getElementById('<%= txtGEName.ClientID %>').value = '';
                document.getElementById('<%= txtGEName.ClientID %>').disabled = false;
            }
        }
        else {
            if ($("[id*=ddlERelation]").find("option:selected").text().toLowerCase() == $("[id*=ddlResPerson]").find("option:selected").text().toLowerCase()) {
                document.getElementById('<%= txtEName.ClientID %>').value = document.getElementById('ctl00_ContentPlaceHolder1_txtResPerson').value != "" ? document.getElementById('ctl00_ContentPlaceHolder1_txtResPerson').value : '';
                document.getElementById('<%= txtEName.ClientID %>').disabled = document.getElementById('ctl00_ContentPlaceHolder1_txtDisplayname').value != "" ? false : false;
            } else {
                document.getElementById('<%= txtEName.ClientID %>').value = '';
                document.getElementById('<%= txtEName.ClientID %>').disabled = false;
            }
        }
    }
</script>
<div class="emergency" id="divUcEmr" style="display: block">
    <table border="0" cellpadding="0" cellspacing="0" align="center" width="100%" class="FormsCtrl">
        <tr id="trSameAsAddress">
        <td colspan="4">
            <asp:CheckBox ID="chkECopyAddress" runat="server" onclick="return Copyaddress(this)" />
            <asp:Label ID="lblSameAsAddress" Text="Same as Present" runat="server"></asp:Label>
            </td>
        </tr>
        <tr>
            <td align="left" class="re_lbl">
                Relation
            </td>
            <td>
                <div class="has-float-label">
                    <asp:DropDownList ID="ddlERelation" runat="server" Width="100%" onchange="selectRelation('N');"
                        onblur="return OnNullValue(this);">
                    </asp:DropDownList>
                    <label class="pre-floating">
                        Relation</label></div>
            </td>
             <td align="left" id="trMobileNoDisp" runat="server" class="re_lbl">
                <asp:Label ID="lblmobileno" runat="server" Text="MobileNo"></asp:Label>
            </td>
            <td align="left" id="trMobileNoDisp1" runat="server">
                <div class="has-float-label">
                    <div class="mobile">
                        <span class="isdcode" id="isdcodemobile5"></span>
                        <asp:TextBox ID="txtmobileno" runat="server" Width="100%" autocomplete="off" class="mobilenumber"
                            MaxLength="10" onblur="return OnNullValue(this);CheckMblNo(this);" onkeypress="return CheckNumericphno(event);"></asp:TextBox>
                    </div>
                    <label class="pre-floating">
                        MobileNo</label></div>
            </td>
       
            <td align="left" class="re_lbl">
                Name
            </td>
            <td colspan="3">
                <div class="has-float-label">
                    <asp:TextBox ID="txtEName" onfocus="" runat="server" MaxLength="25" onkeypress="NumCharsSpaceWithHiphen(event);return OnlyCharecters(event);"
                        onblur="AllTitleCase(this);return OnNullValue(this);" autocomplete="off"></asp:TextBox>
                    <label class="pre-floating">
                        Name</label></div>
            </td>
             </tr>
        <tr>
            <td align="left" class="re_lbl">
                Address1
            </td>
            <td colspan="3" class="removecolspan2">
                <div class="has-float-label">
                    <asp:HiddenField ID="hdnaddress_id" runat="server" />
                    <asp:HiddenField ID="hdnadrs_rev_no" runat="server" />
                    <asp:TextBox ID="txtAddress1" Width="100%" runat="server" onkeypress="return NumCharsSpaceWithHiphen(event);"
                        onblur="AllTitleCase(this);return OnNullValue(this);" MaxLength="64" autocomplete="off"></asp:TextBox>
                    <label class="pre-floating">
                        Address1</label></div>
            </td>
       
            <td align="left" class="re_lbl" class="removecolspan2">
                Address2
            </td>
            <td colspan="3">
                <div class="has-float-label">
                    <asp:TextBox ID="txtAddress2" Width="100%" runat="server" MaxLength="64" autocomplete="off"
                        onkeypress="return NumCharsSpaceWithHiphen(event);" onblur="AllTitleCase(this);return OnNullValue(this);"></asp:TextBox>
                    <label class="pre-floating">
                        Address2</label></div>
            </td>
             </tr>
        <tr>
            <td align="left" class="re_lbl">
                Pin/Zip
            </td>
            <td>
                <div class="has-float-label">
                    <%--<asp:TextBox ID="txtPin" runat="server" onblur="return Validatephinzipnumber();"
                    MaxLength="8" onkeypress="return chkNumeric(event);" autocomplete="off"></asp:TextBox>--%>
                    <asp:TextBox ID="txtPin" runat="server" onkeypress="return chkNumeric(event);" MaxLength="8"
                        autocomplete="off" onblur="return OnNullValue(this);"></asp:TextBox>
                    <asp:HiddenField ID="hdnpincode" runat="server" />
                    <ajaxToolkit:AutoCompleteExtender ID="AutoCompleteExtender2" ServiceMethod="GetAutoComp_Pincode"
                        MinimumPrefixLength="3" ServicePath="~/PatientRegistration.asmx" CompletionInterval="100"
                        UseContextKey="true" EnableCaching="false" CompletionSetCount="10" CompletionListItemCssClass="autocomplete_listItem"
                        CompletionListCssClass="autocomplete_completionListElement" CompletionListHighlightedItemCssClass="autocomplete_highlightedListItem"
                        TargetControlID="txtPin" ContextKey="PIN_CODE" OnClientItemSelected="Onpincodeselection2"
                        runat="server" FirstRowSelected="false">
                    </ajaxToolkit:AutoCompleteExtender>
                    <label class="pre-floating">
                        Pin/Zip</label></div>
            </td>
            <td align="left" class="re_lbl">
                Area
            </td>
            <td>
                <div class="has-float-label">
                    <uc4:GenericGrid ID="ucArea" runat="server" CallbackFn="OnAreaSelection" onblur="return OnNullValue(this);" />
                    <label class="pre-floating">
                        Area</label></div>
            </td>
           
       
            <td align="left" class="re_lbl">
                City
            </td>
            <td>
                <div class="has-float-label">
                    <asp:TextBox ID="ucCity" runat="server" MaxLength="64" onfocus="return OnLostFoucs(this);"
                        Enabled="false" onblur="return OnNullValue(this);"></asp:TextBox>
                    <asp:HiddenField ID="hdncityid" runat="server" />
                    <label class="pre-floating">
                        City</label></div>
            </td>
            <td align="left" name="label" class="re_lbl">
                District
            </td>
            <td>
                <div class="has-float-label">
                    <asp:TextBox ID="DistricUserControl1" runat="server" Enabled="false"></asp:TextBox>
                    <asp:HiddenField ID="hdndistrictid" runat="server" />
                    <label class="pre-floating">
                        District</label></div>
            </td>
            </tr>
        <tr>
            <td align="left" class="re_lbl">
                State
            </td>
            <td>
                <div class="has-float-label">
                    <asp:TextBox ID="ucState" runat="server" MaxLength="64" onfocus="return OnLostFoucs(this);"
                        Enabled="false" onblur="return OnNullValue(this);"></asp:TextBox>
                    <asp:HiddenField ID="hdnstateid" runat="server" />
                    <label class="pre-floating">
                        State</label></div>
            </td>
            <td align="left" class="re_lbl">
                Country
            </td>
            <td>
                <div class="has-float-label">
                    <asp:TextBox ID="ucCountry" runat="server" MaxLength="64" onfocus="return OnLostFoucs(this);"
                        Enabled="false" onblur="return OnNullValue(this);"></asp:TextBox>
                    <asp:HiddenField ID="hdncountryid" runat="server" />
                    <label class="pre-floating">
                        Country</label></div>
            </td>
        </tr>
        <tr style="display: none;">
            <td align="left" class="re_lbl">
                Phone#
            </td>
            <td>
                <div class="has-float-label">
                    <asp:TextBox ID="txtPhone" runat="server" AutoCompleteType="Disabled" MaxLength="10"
                        onblur="return OnNullValue(this); Validatephonenumber();" onkeypress="return CheckNumericphno(event);"></asp:TextBox>
                    <label class="pre-floating">
                        Phone#</label></div>
            </td>
        </tr>
    </table>
    <asp:HiddenField ID="hdnPatid" runat="server" />
    <asp:HiddenField ID="hdnRelid" runat="server" />
    <asp:HiddenField ID="hdnEAreaId" runat="server" />
    <asp:HiddenField ID="hdnadtecid" runat="server" />
    <asp:HiddenField ID="hdnEDocName" runat="server" />
</div>
<div class="Guarantor" id="divUcGc" style="display: none">
    <table border="0" cellpadding="0" cellspacing="0" align="center" width="100%" class="FormsCtrl">
        <tr> <td colspan="4">
            <asp:CheckBox ID="chkGCopyAddress" runat="server" onclick="return CopyGaddress(this)" />
            Copy from Emergency Address
            </td>
        </tr>
        <tr>
            <td align="left" class="re_lbl">
                Relation
            </td>
            <td>
                <div class="has-float-label">
                    <asp:DropDownList ID="ddlGERelation" runat="server" Width="100%" onchange="selectRelation('G');"
                        onblur="return OnNullValue(this);">
                    </asp:DropDownList>
                    <label class="pre-floating">
                        Relation</label></div>
            </td>
            <td align="left" id="trGMobileNoDisp" runat="server" class="re_lbl">
                <asp:Label ID="lblGmobileno" runat="server" Text="MobileNo"></asp:Label>
            </td>
            <td align="left" id="trGMobileNoDisp1" runat="server">
                <div class="has-float-label">
                    <div class="mobile">
                        <span class="isdcode" id="isdcodemobile4"></span>
                        <asp:TextBox ID="txtGmobileno" runat="server" Width="100%" autocomplete="off" class="mobilenumber"
                            MaxLength="10" onblur="return OnNullValue(this);CheckMblNo(this);" onkeypress="return CheckNumericphno(event);"></asp:TextBox>
                    </div>
                    <label class="pre-floating">
                        MobileNo</label></div>
            </td>
            <td align="left" class="re_lbl">
                Name
            </td>
            <td colspan="3">
                <div class="has-float-label">
                    <asp:TextBox ID="txtGEName" onfocus="" runat="server" MaxLength="25" onkeypress="return OnlyCharecters(event);"
                        autocomplete="off" onblur="AllTitleCase(this);return OnNullValue(this);"></asp:TextBox>
                    <label class="pre-floating">
                        Name</label></div>
            </td>
                </tr>
        <tr>
            <td align="left" class="re_lbl">
                Address1
            </td>
                 <td colspan="3" class="removecolspan2">
                <div class="has-float-label">
                    <asp:HiddenField ID="hdnGaddress_id" runat="server" />
                    <asp:HiddenField ID="hdnGadrs_rev_no" runat="server" />
                    <asp:TextBox ID="txtGAddress1" Width="100%" runat="server" onkeypress="return NumCharsSpaceWithHiphen(event);"
                        onblur="AllTitleCase(this);return OnNullValue(this);" MaxLength="64" autocomplete="off"></asp:TextBox>
                    <label class="pre-floating">
                        Address1</label></div>
            </td>
       
            <td align="left" class="re_lbl">
                Address2
            </td>
               <td colspan="3" class="removecolspan2">
                <div class="has-float-label">
                    <asp:TextBox ID="txtGAddress2" Width="100%" runat="server" onkeypress="return NumCharsSpaceWithHiphen(event);"
                        MaxLength="64" autocomplete="off" onblur="AllTitleCase(this);return OnNullValue(this);"></asp:TextBox>
                    <label class="pre-floating">
                        Address2</label></div>
            </td>
             </tr>
        <tr>
        <td align="left" class="re_lbl">
                Pin/Zip
            </td>
            <td>
                <div class="has-float-label">
                    <%--<asp:TextBox ID="txtPin" runat="server" onblur="return Validatephinzipnumber();"
                    MaxLength="8" onkeypress="return chkNumeric(event);" autocomplete="off"></asp:TextBox>--%>
                    <asp:TextBox ID="txtGPin" runat="server" onkeypress="return chkNumeric(event);" MaxLength="8"
                        onblur="return OnNullValue(this); Validatephinzipnumber();" autocomplete="off"></asp:TextBox>
                    <asp:HiddenField ID="hdnGpincode" runat="server" />
                    <ajaxToolkit:AutoCompleteExtender ID="AutoGCompleteExtender2" ServiceMethod="GetAutoComp_Pincode"
                        MinimumPrefixLength="3" ServicePath="~/PatientRegistration.asmx" CompletionInterval="100"
                        UseContextKey="true" EnableCaching="false" CompletionSetCount="10" CompletionListItemCssClass="autocomplete_listItem"
                        CompletionListCssClass="autocomplete_completionListElement" CompletionListHighlightedItemCssClass="autocomplete_highlightedListItem"
                        TargetControlID="txtGPin" ContextKey="PIN_CODE" OnClientItemSelected="OnGpincodeselection"
                        runat="server" FirstRowSelected="false">
                    </ajaxToolkit:AutoCompleteExtender>
                    <label class="pre-floating">
                        Pin/Zip</label></div>
            </td>
            <td align="left" class="re_lbl">
                Area
            </td>
            <td>
                <div class="has-float-label">
                    <uc4:GenericGrid ID="ucGArea" runat="server" CallbackFn="OnGcAreaSelection" onblur="return OnNullValue(this);" />
                    <label class="pre-floating">
                        Area</label></div>
            </td>
            
      
            <td align="left" class="re_lbl">
                City
            </td>
            <td>
                <div class="has-float-label">
                    <asp:TextBox ID="ucGCity" runat="server" MaxLength="64" onfocus="return OnLostFoucs(this);"
                        onblur="return OnNullValue(this);" Enabled="false"></asp:TextBox>
                    <asp:HiddenField ID="hdnGcityid" runat="server" />
                    <label class="pre-floating">
                        City</label></div>
            </td>
            <td align="left" name="label" class="re_lbl">
                District
            </td>
            <td>
                <div class="has-float-label">
                    <asp:TextBox ID="txtGdistrict" runat="server" Enabled="false"></asp:TextBox>
                    <asp:HiddenField ID="hdnGdistId" runat="server" />
                    <label class="pre-floating">
                        District</label></div>
            </td>
              </tr>
        <tr>
            <td align="left" class="re_lbl">
                State
            </td>
            <td>
                <div class="has-float-label">
                    <asp:TextBox ID="ucGState" runat="server" MaxLength="64" onfocus="return OnLostFoucs(this);"
                        Enabled="false" onblur="return OnNullValue(this);"></asp:TextBox>
                    <asp:HiddenField ID="hdnGstateid" runat="server" />
                    <label class="pre-floating">
                        State</label></div>
            </td>
            <td align="left" class="re_lbl">
                Country
            </td>
            <td>
                <div class="has-float-label">
                    <asp:TextBox ID="ucGCountry" runat="server" MaxLength="64" onfocus="return OnLostFoucs(this);"
                        Enabled="false" onblur="return OnNullValue(this);"></asp:TextBox>
                    <asp:HiddenField ID="hdnGcountryid" runat="server" />
                    <label class="pre-floating">
                        Country</label></div>
            </td>
        </tr>
        <tr style="display: none;">
            <td align="left" class="re_lbl">
                Phone#
            </td>
            <td>
                <div class="has-float-label">
                    <asp:TextBox ID="txtGPhone" runat="server" AutoCompleteType="Disabled" MaxLength="10"
                        onblur="return OnNullValue(this);Validatephonenumber();" onkeypress="return CheckNumericphno(event);"></asp:TextBox>
                    <label class="pre-floating">
                        Phone#</label></div>
            </td>
        </tr>
    </table>
    <asp:HiddenField ID="hdnGPatid" runat="server" />
    <asp:HiddenField ID="hdnGRelid" runat="server" />
    <asp:HiddenField ID="hdnGAreaId" runat="server" />
    <asp:HiddenField ID="hdnGadtecid" runat="server" />
    <asp:HiddenField ID="hdnGDocName" runat="server" />
</div>
