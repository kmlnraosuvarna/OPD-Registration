<%@ Control Language="C#" AutoEventWireup="true" CodeFile="GuaranteeAddressUserControl.ascx.cs"
    Inherits="Private_UserControls_GuaranteeAddressUserControl" %>
<%@ Register Src="~/Private/UserControls/LookUp.ascx" TagName="GenericGrid" TagPrefix="uc4" %>
<%@ Register Assembly="AjaxControlToolkit" Namespace="AjaxControlToolkit" TagPrefix="ajaxToolkit" %>
<%--<script src="../../JSScript/Validation.js" type="text/javascript"></script>--%>
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
            AssignAddressDetails(input.AREA_ID, input.AREA_NAME, input.CITY_ID, input.CITY_NAME, input.STATE_ID, input.STATE_NAME, input.COUNTRY_ID, input.COUNTRY_NAME, input.PIN_CODE, input.DISTRICT_NAME, input.DISTRICT_ID);
        }
        else {
            if (input.RESULT == undefined)
                AssignAddressDetails(input.AREA_ID, input.AREA_NAME, input.CITY_ID, input.CITY_NAME, input.STATE_ID, input.STATE_NAME, input.COUNTRY_ID, input.COUNTRY_NAME, input.PIN_CODE, input.DISTRICT_NAME, input.DISTRICT_ID);
            else
                AssignAddressDetails(input.RESULT.AREA_ID, input.RESULT.AREA_NAME, input.RESULT.CITY_ID, input.RESULT.CITY_NAME, input.RESULT.STATE_ID, input.RESULT.STATE_NAME, input.RESULT.COUNTRY_ID, input.RESULT.COUNTRY_NAME, input.RESULT.PIN_CODE, input.RESULT.DISTRICT_NAME, input.RESULT.DISTRICT_ID);
        }
    }
    function OnGcAreaSelection(input) {

        document.getElementById('<%= ucGArea.FindControl("txtSearchControl").ClientID %>').value = input._lktext;
        if (input._lktext == input.COUNTRY_NAME) {
            GcAssignAddressDetails(input.AREA_ID, input.AREA_NAME, input.CITY_ID, input.CITY_NAME, input.STATE_ID, input.STATE_NAME, input.COUNTRY_ID, input.COUNTRY_NAME, input.PIN_CODE, input.DISTRICT_NAME, input.DISTRICT_ID);
        }
        else {
            if (input.RESULT == undefined)
                GcAssignAddressDetails(input.AREA_ID, input.AREA_NAME, input.CITY_ID, input.CITY_NAME, input.STATE_ID, input.STATE_NAME, input.COUNTRY_ID, input.COUNTRY_NAME, input.PIN_CODE, input.DISTRICT_NAME, input.DISTRICT_ID);
            else
                GcAssignAddressDetails(input.RESULT.AREA_ID, input.RESULT.AREA_NAME, input.RESULT.CITY_ID, input.RESULT.CITY_NAME, input.RESULT.STATE_ID, input.RESULT.STATE_NAME, input.RESULT.COUNTRY_ID, input.RESULT.COUNTRY_NAME, input.RESULT.PIN_CODE, input.RESULT.DISTRICT_NAME, input.RESULT.DISTRICT_ID);
        }
    }
    function AssignAddressDetails(area_id, area_name, city_id, city_name, state_id, state_name, country_id, country_name, pin_code, districtName, districtId) {
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
    }
    function GcAssignAddressDetails(area_id, area_name, city_id, city_name, state_id, state_name, country_id, country_name, pin_code, districtName, districtId) {
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

    }
    function Onpincodeselection2(sender, eventArgs) {
        var results = eval('(' + eventArgs.get_value() + ')');
        document.getElementById('<%=hdnpincode.ClientID %>').value = results.PIN_CODE;
        document.getElementById('<%=txtPin.ClientID %>').value = results.PIN_CODE;
        document.getElementById('<%=ucArea.FindControl("txtSearchControl").ClientID%>').value = results.AREA_NAME;
        document.getElementById('<%=ucArea.FindControl("txtSearchControl").ClientID%>').style.border = '1px solid rgb(190,190,190)';
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
        document.getElementById('<%=ucGArea.FindControl("txtSearchControl").ClientID%>').style.border = '1px solid rgb(190,190,190)';
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
    var patID = '';
    function Copyaddress(ev) {
        var select_nation = document.getElementById('ctl00_ContentPlaceHolder1_ddlNationality').value
        var defalt_nation = $('#ctl00_ContentPlaceHolder1_hdnDefNation').val();
        _address = 'Emr';
        if (document.getElementById('<%=hdnGDocName.ClientID %>').value == '') {
            if (document.getElementById('<%=chkECopyAddress.ClientID %>').checked) {
                if (myMultiAddress1 != '') {
                    if (myMultiAddress1[0]["AREA_ID"] != '') {

                        document.getElementById('ctl00_ContentPlaceHolder1_Address1_UcGuarantor_txtAddress1').value = myMultiAddress1[0]["Address1"];
                        document.getElementById('ctl00_ContentPlaceHolder1_Address1_UcGuarantor_txtAddress2').value = myMultiAddress1[0]["Address2"];
                        document.getElementById('<%= ucArea.FindControl("txtSearchControl").ClientID %>').value = myMultiAddress1[0]["area_name"];
                        document.getElementById('<%=hdnEAreaId.ClientID %>').value = myMultiAddress1[0]["Area"];
                        document.getElementById('<%=ucArea.FindControl("_hiddenID").ClientID%>').value = myMultiAddress1[0]["Area"];
                        document.getElementById('<%= ucCity.ClientID %>').value = myMultiAddress1[0]["city_name"];
                        document.getElementById('<%=hdncityid.ClientID %>').value = myMultiAddress1[0]["City"];
                        document.getElementById('<%=ucState.ClientID %>').value = myMultiAddress1[0]["state_name"];
                        document.getElementById('<%=hdnstateid.ClientID %>').value = myMultiAddress1[0]["State"];
                        document.getElementById('<%=ucCountry.ClientID %>').value = myMultiAddress1[0]["country_name"];
                        document.getElementById('<%=hdncountryid.ClientID %>').value = myMultiAddress1[0]["Country"];
                        document.getElementById('<%=txtPin.ClientID %>').value = myMultiAddress1[0]["PinZip"];
                        document.getElementById('<%=hdnpincode.ClientID %>').value = myMultiAddress1[0]["PinZip"];
                        document.getElementById('<%=hdndistrictid.ClientID %>').value = myMultiAddress1[0]["District"];
                        document.getElementById('<%=DistricUserControl1.ClientID %>').value = myMultiAddress1[0]["District_name"];

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
                if ((myMultiAddress1 == '') && (select_nation != defalt_nation)) {
                    if (myMultiAddress3[0]["AREA_ID"] != '') {
//                        document.getElementById('ctl00_ContentPlaceHolder1_Address1_UcGuarantor_txtAddress1').value = ReplaceSplCharactor(myMultiAddress3[0]["Address1"]);
//                        document.getElementById('ctl00_ContentPlaceHolder1_Address1_UcGuarantor_txtAddress2').value = ReplaceSplCharactor(myMultiAddress3[0]["Address2"]);


                        document.getElementById('ctl00_ContentPlaceHolder1_Address1_UcGuarantor_txtAddress1').value = (myMultiAddress3[0]["Address1"]);
                        document.getElementById('ctl00_ContentPlaceHolder1_Address1_UcGuarantor_txtAddress2').value = (myMultiAddress3[0]["Address2"]);
                        document.getElementById('<%= ucArea.FindControl("txtSearchControl").ClientID %>').value = myMultiAddress3[0]["area_name"];
                        document.getElementById('<%=hdnEAreaId.ClientID %>').value = myMultiAddress3[0]["Area"];
                        document.getElementById('<%=ucArea.FindControl("_hiddenID").ClientID%>').value = myMultiAddress3[0]["Area"];
                        document.getElementById('<%= ucCity.ClientID %>').value = myMultiAddress3[0]["city_name"];
                        document.getElementById('<%=hdncityid.ClientID %>').value = myMultiAddress3[0]["City"];
                        document.getElementById('<%=ucState.ClientID %>').value = myMultiAddress3[0]["state_name"];
                        document.getElementById('<%=hdnstateid.ClientID %>').value = myMultiAddress3[0]["State"];
                        document.getElementById('<%=ucCountry.ClientID %>').value = myMultiAddress3[0]["country_name"];
                        document.getElementById('<%=hdncountryid.ClientID %>').value = myMultiAddress3[0]["Country"];
                        document.getElementById('<%=txtPin.ClientID %>').value = myMultiAddress3[0]["PinZip"];
                        document.getElementById('<%=hdnpincode.ClientID %>').value = myMultiAddress3[0]["PinZip"];
                        document.getElementById('<%=hdndistrictid.ClientID %>').value = myMultiAddress3[0]["District"];
                        document.getElementById('<%=DistricUserControl1.ClientID %>').value = myMultiAddress3[0]["District_name"];
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
                /*if ($('#ctl00_ContentPlaceHolder1_Address1_AreaUserControl1_txtSearchControl').val() != '') {

                document.getElementById('ctl00_ContentPlaceHolder1_Address1_UcGuarantor_txtAddress1').value =  ReplaceSplCharactor(myMultiAddress1[0]["Address1"]);
                document.getElementById('ctl00_ContentPlaceHolder1_Address1_UcGuarantor_txtAddress2').value = ReplaceSplCharactor(myMultiAddress1[0]["Address2"]);
                document.getElementById('<%= ucArea.FindControl("txtSearchControl").ClientID %>').value = myMultiAddress1[0]["area_name"];
                document.getElementById('<%=hdnEAreaId.ClientID %>').value = $('#ctl00_ContentPlaceHolder1_Address1_AreaUserControl1__hiddenID').val();
                document.getElementById('<%=ucArea.FindControl("_hiddenID").ClientID%>').value = myMultiAddress1[0]["Area"];
                document.getElementById('<%= ucCity.ClientID %>').value = myMultiAddress1[0]["city_name"] ;
                document.getElementById('<%=hdncityid.ClientID %>').value =  myMultiAddress1[0]["City"];
                document.getElementById('<%=ucState.ClientID %>').value = $('#ctl00_ContentPlaceHolder1_Address1_StateUserControl1').val();
                document.getElementById('<%=hdnstateid.ClientID %>').value = $('#ctl00_ContentPlaceHolder1_Address1_hdnstateid').val();
                document.getElementById('<%=ucCountry.ClientID %>').value = $('#ctl00_ContentPlaceHolder1_Address1_CountryUserControl1').val();
                document.getElementById('<%=hdncountryid.ClientID %>').value = $('#ctl00_ContentPlaceHolder1_Address1_hdncountryid').val();
                document.getElementById('<%=txtPin.ClientID %>').value = $('#ctl00_ContentPlaceHolder1_Address1_txtPin').val();
                document.getElementById('<%=hdnpincode.ClientID %>').value = $('#ctl00_ContentPlaceHolder1_Address1_txtPin').val();
                document.getElementById('<%=hdndistrictid.ClientID %>').value = document.getElementById('ctl00_ContentPlaceHolder1_Address1_hdndistrictid').value;
                document.getElementById('<%=DistricUserControl1.ClientID %>').value = document.getElementById('ctl00_ContentPlaceHolder1_Address1_DistricUserControl1').value;

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
                }*/
            }
            else {

                document.getElementById('ctl00_ContentPlaceHolder1_Address1_UcGuarantor_txtAddress1').value = "";
                document.getElementById('ctl00_ContentPlaceHolder1_Address1_UcGuarantor_txtAddress2').value = "";
                document.getElementById('<%= ucArea.FindControl("txtSearchControl").ClientID %>').value = "";
                document.getElementById('<%=hdnEAreaId.ClientID %>').value = "";
                document.getElementById('<%=ucArea.FindControl("_hiddenID").ClientID%>').value = "";
                document.getElementById('<%= ucCity.ClientID %>').value = "";
                document.getElementById('<%=hdncityid.ClientID %>').value = "";
                document.getElementById('<%=ucState.ClientID %>').value = "";
                document.getElementById('<%=hdnstateid.ClientID %>').value = "";
                document.getElementById('<%=ucCountry.ClientID %>').value = "";
                document.getElementById('<%=hdncountryid.ClientID %>').value = "";
                document.getElementById('<%=txtPin.ClientID %>').value = "";
                document.getElementById('<%=hdnpincode.ClientID %>').value = "";
                document.getElementById('<%=hdndistrictid.ClientID %>').value = "";
                document.getElementById('<%=DistricUserControl1.ClientID %>').value = "";

                document.getElementById('<%= ucArea.FindControl("txtSearchControl").ClientID %>').disabled = false;

                document.getElementById('lk_btn_ctl00_ContentPlaceHolder1_Address1_UcGuarantor_ucArea').disabled = false;
                document.getElementById('<%= ucCity.ClientID %>').disabled = false;

                document.getElementById('<%=ucState.ClientID %>').disabled = false;

                document.getElementById('<%=ucCountry.ClientID %>').disabled = false;

                document.getElementById('<%=txtPin.ClientID %>').disabled = false;
            }
        }
        else if (document.getElementById('<%=hdnGDocName.ClientID %>').value == 'OpBillAssesment') {
            if (document.getElementById('<%=chkECopyAddress.ClientID %>').checked) {
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
                else {

                    document.getElementById('ctl00_ContentPlaceHolder1_UcGuarantor_txtAddress1').value = '';
                    document.getElementById('ctl00_ContentPlaceHolder1_UcGuarantor_txtAddress2').value = '';
                    document.getElementById('ctl00_ContentPlaceHolder1_UcGuarantor_hdnEAreaId').value = 0;
                    document.getElementById('ctl00_ContentPlaceHolder1_UcGuarantor_ucArea_txtSearchControl').value = '';
                    document.getElementById('ctl00_ContentPlaceHolder1_UcGuarantor_hdncityid').value = 0;
                    document.getElementById('ctl00_ContentPlaceHolder1_UcGuarantor_ucCity').value = '';
                    document.getElementById('ctl00_ContentPlaceHolder1_UcGuarantor_hdnstateid').value = 0;
                    document.getElementById('ctl00_ContentPlaceHolder1_UcGuarantor_ucState').value = '';
                    document.getElementById('ctl00_ContentPlaceHolder1_UcGuarantor_hdncountryid').value = 0;
                    document.getElementById('ctl00_ContentPlaceHolder1_UcGuarantor_ucCountry').value = '';
                    document.getElementById('ctl00_ContentPlaceHolder1_UcGuarantor_txtPhone').value = '';
                    $('#ctl00_ContentPlaceHolder1_UcGuarantor_ddlERelation').val('0');
                    $('#ctl00_ContentPlaceHolder1_UcGuarantor_txtmobileno').val('');
                    $('#ctl00_ContentPlaceHolder1_UcGuarantor_txtEName').val('');

            }

        }
        else if (document.getElementById('<%=hdnGDocName.ClientID %>').value == 'ESTBILL') {
            if (document.getElementById('<%=chkECopyAddress.ClientID %>').checked) {
                if (document.getElementById('<%=hdnPreAdmn.ClientID %>').value == "true") {
                    patID = document.getElementById('ctl00_ContentPlaceHolder1_umrPatientDetails_Umrlookup__hiddenID').value;

                }
                if (document.getElementById('<%=hdnAdmn.ClientID %>').value == "true") {
                    patID = document.getElementById('ctl00_ContentPlaceHolder1_AdmnPatientDetails_ucAdmission__hiddenID').value;
                }
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
            else {

                document.getElementById('<%=chkECopyAddress.ClientID %>').checked = false;

                document.getElementById('ctl00_ContentPlaceHolder1_UcGuarantor_txtAddress1').value = '';
                document.getElementById('ctl00_ContentPlaceHolder1_UcGuarantor_txtAddress2').value = '';
                document.getElementById('ctl00_ContentPlaceHolder1_UcGuarantor_hdnEAreaId').value = 0;
                document.getElementById('ctl00_ContentPlaceHolder1_UcGuarantor_ucArea_txtSearchControl').value = '';
                document.getElementById('ctl00_ContentPlaceHolder1_UcGuarantor_hdncityid').value = 0;
                document.getElementById('ctl00_ContentPlaceHolder1_UcGuarantor_ucCity').value = '';
                document.getElementById('ctl00_ContentPlaceHolder1_UcGuarantor_hdnstateid').value = 0;
                document.getElementById('ctl00_ContentPlaceHolder1_UcGuarantor_ucState').value = '';
                document.getElementById('ctl00_ContentPlaceHolder1_UcGuarantor_hdncountryid').value = 0;
                document.getElementById('ctl00_ContentPlaceHolder1_UcGuarantor_ucCountry').value = '';
                document.getElementById('ctl00_ContentPlaceHolder1_UcGuarantor_txtPhone').value = '';

            }
        }
    }
    function CopyGaddress(ev) {
        _address = 'Grntr';
        if (document.getElementById('<%=hdnGDocName.ClientID %>').value == '') {
            var select_nation = document.getElementById('ctl00_ContentPlaceHolder1_ddlNationality').value
            var defalt_nation = $('#ctl00_ContentPlaceHolder1_hdnDefNation').val();
            if (document.getElementById('<%=chkGCopyAddress.ClientID %>').checked) {
                if (myMultiAddress1 != '') {
                    if (myMultiAddress1[0]["AREA_ID"] != '') {
                        document.getElementById('<%= ucGArea.FindControl("txtSearchControl").ClientID %>').value = myMultiAddress1[0]["area_name"];
                        document.getElementById('<%=hdnGAreaId.ClientID %>').value = myMultiAddress1[0]["Area"];
                        document.getElementById('<%=ucGArea.FindControl("_hiddenID").ClientID%>').value = myMultiAddress1[0]["Area"];
                        document.getElementById('<%= ucGCity.ClientID %>').value = myMultiAddress1[0]["city_name"];
                        document.getElementById('<%=hdnGcityid.ClientID %>').value = myMultiAddress1[0]["City"];
                        document.getElementById('<%=ucGState.ClientID %>').value = myMultiAddress1[0]["state_name"];
                        document.getElementById('<%=hdnGstateid.ClientID %>').value = myMultiAddress1[0]["State"];
                        document.getElementById('<%=ucGCountry.ClientID %>').value = myMultiAddress1[0]["country_name"];
                        document.getElementById('<%=hdnGcountryid.ClientID %>').value = myMultiAddress1[0]["Country"];
                        document.getElementById('<%=txtGPin.ClientID %>').value = myMultiAddress1[0]["PinZip"];
                        document.getElementById('<%=hdnGpincode.ClientID %>').value = myMultiAddress1[0]["PinZip"];
                        document.getElementById('<%=txtGmobileno.ClientID %>').value = document.getElementById('ctl00_ContentPlaceHolder1_txtMobile1').value;
                        document.getElementById('<%=txtGAddress1.ClientID %>').value = myMultiAddress1[0]["Address1"];
                        document.getElementById('<%=txtGAddress2.ClientID %>').value = myMultiAddress1[0]["Address2"];
                        document.getElementById('<%=hdnGdistId.ClientID %>').value = myMultiAddress1[0]["District"];
                        document.getElementById('<%=txtGdistrict.ClientID %>').value = myMultiAddress1[0]["District_name"];
                    }
                }
                if ((myMultiAddress1 == '') && (select_nation != defalt_nation)) {
                    if (myMultiAddress3[0]["Area"] != '0') {
                        document.getElementById('<%= ucGArea.FindControl("txtSearchControl").ClientID %>').value = myMultiAddress3[0]["area_name"];
                        document.getElementById('<%=hdnGAreaId.ClientID %>').value = myMultiAddress3[0]["Area"];
                        document.getElementById('<%=ucGArea.FindControl("_hiddenID").ClientID%>').value = myMultiAddress3[0]["Area"];
                        document.getElementById('<%= ucGCity.ClientID %>').value = myMultiAddress3[0]["city_name"];
                        document.getElementById('<%=hdnGcityid.ClientID %>').value = myMultiAddress3[0]["City"];
                        document.getElementById('<%=ucGState.ClientID %>').value = myMultiAddress3[0]["state_name"];
                        document.getElementById('<%=hdnGstateid.ClientID %>').value = myMultiAddress3[0]["State"];
                        document.getElementById('<%=ucGCountry.ClientID %>').value = myMultiAddress3[0]["country_name"];
                        document.getElementById('<%=hdnGcountryid.ClientID %>').value = myMultiAddress3[0]["Country"];
                        document.getElementById('<%=txtGPin.ClientID %>').value = myMultiAddress3[0]["PinZip"];
                        document.getElementById('<%=hdnGpincode.ClientID %>').value = myMultiAddress3[0]["PinZip"];
                        document.getElementById('<%=txtGmobileno.ClientID %>').value = document.getElementById('ctl00_ContentPlaceHolder1_txtMobile1').value;
                        document.getElementById('<%=txtGAddress1.ClientID %>').value = myMultiAddress3[0]["Address1"];
                        document.getElementById('<%=txtGAddress2.ClientID %>').value = myMultiAddress3[0]["Address2"];
                        document.getElementById('<%=hdnGdistId.ClientID %>').value = myMultiAddress3[0]["District"];
                        document.getElementById('<%=txtGdistrict.ClientID %>').value = myMultiAddress3[0]["District_name"];
                    }
                    else {
                        document.getElementById('<%=chkGCopyAddress.ClientID %>').checked = false;
                        $(".stoast").toastText("Info", "Please Select Present Address", 5, 2);
                        return false;
                    }
                }
            }
            else {
                document.getElementById('<%= ucGArea.FindControl("txtSearchControl").ClientID %>').disabled = false;
                document.getElementById('lk_btn_ctl00_ContentPlaceHolder1_Address1_UcGuarantor_ucGArea').disabled = false;
                document.getElementById('<%=txtGPin.ClientID %>').disabled = false;
                document.getElementById('<%= ucGArea.FindControl("txtSearchControl").ClientID %>').value = ''
                document.getElementById('<%=hdnGAreaId.ClientID %>').value = 0;
                document.getElementById('<%=ucGArea.FindControl("_hiddenID").ClientID%>').value = 0;
                document.getElementById('<%= ucGCity.ClientID %>').value = '';
                document.getElementById('<%=hdnGcityid.ClientID %>').value = 0;
                document.getElementById('<%=ucGState.ClientID %>').value = ''
                document.getElementById('<%=hdnGstateid.ClientID %>').value = 0;
                document.getElementById('<%=ucGCountry.ClientID %>').value = '';
                document.getElementById('<%=hdnGcountryid.ClientID %>').value = 0;
                document.getElementById('<%=txtGPin.ClientID %>').value = '';
                document.getElementById('<%=hdnGpincode.ClientID %>').value = 0;
                /*document.getElementById('<%=txtGEName.ClientID %>').value = '';
                document.getElementById('<%=ddlGERelation.ClientID %>').value = 0;*/
                document.getElementById('<%=txtGmobileno.ClientID %>').value = '';
                document.getElementById('<%=txtGAddress1.ClientID %>').value = '';
                document.getElementById('<%=txtGAddress2.ClientID %>').value = '';
                document.getElementById('<%=hdnGdistId.ClientID %>').value = 0;
                document.getElementById('<%=txtGdistrict.ClientID %>').value = '';
            }
        }
        else if (document.getElementById('<%=hdnGDocName.ClientID %>').value == 'ADMN' || document.getElementById('<%=hdnGDocName.ClientID %>').value == 'PREADMN') {
            if (document.getElementById('<%=chkGCopyAddress.ClientID %>').checked) {
                var patID = document.getElementById('ctl00_ContentPlaceHolder1_umrPatientDetails_hdnPatientid').value
                GetNonAsync(
                    "PatientRegistration.asmx/Get_Patient_Address_Dtls",
                    { _patID: parseInt(patID) },
                    function (jdata) {
                        var _data = jdata.d[0];
                        document.getElementById('ctl00_ContentPlaceHolder1_EmergencyContactDetails1_UcGuarantor_txtGAddress1').value = _data["Address1"];
                        document.getElementById('ctl00_ContentPlaceHolder1_EmergencyContactDetails1_UcGuarantor_txtGAddress2').value = _data["Address2"];
                        document.getElementById('ctl00_ContentPlaceHolder1_EmergencyContactDetails1_UcGuarantor_ucGArea_txtSearchControl').value = _data["AREA_NAME"];
                        document.getElementById('ctl00_ContentPlaceHolder1_EmergencyContactDetails1_UcGuarantor_hdnGAreaId').value = _data["AREA_ID"];
                        document.getElementById('ctl00_ContentPlaceHolder1_EmergencyContactDetails1_UcGuarantor_ucGArea__hiddenID').value = _data["AREA_ID"];
                        document.getElementById('ctl00_ContentPlaceHolder1_EmergencyContactDetails1_UcGuarantor_ucGCity').value = _data["CITY_NAME"];
                        document.getElementById('ctl00_ContentPlaceHolder1_EmergencyContactDetails1_UcGuarantor_hdnGcityid').value = _data["CITY_ID"];
                        document.getElementById('ctl00_ContentPlaceHolder1_EmergencyContactDetails1_UcGuarantor_hdncityid').value = _data["CITY_ID"];
                        document.getElementById('ctl00_ContentPlaceHolder1_EmergencyContactDetails1_UcGuarantor_ucGState').value = _data["STATE_NAME"];
                        document.getElementById('ctl00_ContentPlaceHolder1_EmergencyContactDetails1_UcGuarantor_hdnstateid').value = _data["STATE_ID"];
                        document.getElementById('ctl00_ContentPlaceHolder1_EmergencyContactDetails1_UcGuarantor_hdnGstateid').value = _data["STATE_ID"];
                        document.getElementById('ctl00_ContentPlaceHolder1_EmergencyContactDetails1_UcGuarantor_ucGCountry').value = _data["COUNTRY_NAME"];
                        document.getElementById('ctl00_ContentPlaceHolder1_EmergencyContactDetails1_UcGuarantor_hdnGcountryid').value = _data["COUNTRY_ID"];
                        document.getElementById('ctl00_ContentPlaceHolder1_EmergencyContactDetails1_UcGuarantor_hdncountryid').value = _data["COUNTRY_ID"];
                        document.getElementById('ctl00_ContentPlaceHolder1_EmergencyContactDetails1_UcGuarantor_txtGPin').value = _data["ZipCode"];
                        document.getElementById('ctl00_ContentPlaceHolder1_EmergencyContactDetails1_UcGuarantor_hdnpincode').value = _data["ZipCode"];
                        document.getElementById('ctl00_ContentPlaceHolder1_EmergencyContactDetails1_UcGuarantor_txtGPhone').value = _data["MOBILE_PHONE"];
                        document.getElementById('ctl00_ContentPlaceHolder1_EmergencyContactDetails1_UcGuarantor_hdndistrictid').value = _data["DISTRICT_ID"];
                        document.getElementById('ctl00_ContentPlaceHolder1_EmergencyContactDetails1_UcGuarantor_txtGdistrict').value = _data["DISTRICT_NAME"];
                    },
                    function (jqXHR, textStatus, errorThrown) {
                        $(".stoast").toastText("warning", errorThrown, 5, 3);
                    });
            }
            else {
                document.getElementById('ctl00_ContentPlaceHolder1_EmergencyContactDetails1_UcGuarantor_txtGAddress1').value = "";
                document.getElementById('ctl00_ContentPlaceHolder1_EmergencyContactDetails1_UcGuarantor_txtGAddress2').value = "";
                document.getElementById('ctl00_ContentPlaceHolder1_EmergencyContactDetails1_UcGuarantor_ucGArea_txtSearchControl').value = "";
                document.getElementById('ctl00_ContentPlaceHolder1_EmergencyContactDetails1_UcGuarantor_ucGArea_txtSearchControl').value = "";
                document.getElementById('ctl00_ContentPlaceHolder1_EmergencyContactDetails1_UcGuarantor_hdnGAreaId').value = "";
                document.getElementById('ctl00_ContentPlaceHolder1_EmergencyContactDetails1_UcGuarantor_ucGArea__hiddenID').value = "";
                document.getElementById('ctl00_ContentPlaceHolder1_EmergencyContactDetails1_UcGuarantor_ucGCity').value = "";
                document.getElementById('ctl00_ContentPlaceHolder1_EmergencyContactDetails1_UcGuarantor_hdncityid').value = "";
                document.getElementById('ctl00_ContentPlaceHolder1_EmergencyContactDetails1_UcGuarantor_ucGState').value = "";
                document.getElementById('ctl00_ContentPlaceHolder1_EmergencyContactDetails1_UcGuarantor_hdnstateid').value = "";
                document.getElementById('ctl00_ContentPlaceHolder1_EmergencyContactDetails1_UcGuarantor_ucGCountry').value = "";
                document.getElementById('ctl00_ContentPlaceHolder1_EmergencyContactDetails1_UcGuarantor_hdncountryid').value = "";
                document.getElementById('ctl00_ContentPlaceHolder1_EmergencyContactDetails1_UcGuarantor_txtGPin').value = "";
                document.getElementById('ctl00_ContentPlaceHolder1_EmergencyContactDetails1_UcGuarantor_hdnpincode').value = "";
                document.getElementById('ctl00_ContentPlaceHolder1_EmergencyContactDetails1_UcGuarantor_hdndistrictid').value = "";
                document.getElementById('ctl00_ContentPlaceHolder1_EmergencyContactDetails1_UcGuarantor_txtGdistrict').value = "";
            }
        }
        else if (document.getElementById('<%=hdnGDocName.ClientID %>').value == 'OpBillAssesment' || document.getElementById('<%=hdnGDocName.ClientID %>').value == 'ESTBILL') {
            if (document.getElementById('<%=chkGCopyAddress.ClientID %>').checked) {
                if (document.getElementById('<%=hdnPreAdmn.ClientID %>').value == "true") {
                    var patID = document.getElementById('ctl00_ContentPlaceHolder1_umrPatientDetails_Umrlookup__hiddenID').value;
                }
                if (document.getElementById('<%=hdnAdmn.ClientID %>').value == "true") {
                    var patID = document.getElementById('ctl00_ContentPlaceHolder1_AdmnPatientDetails_ucAdmission__hiddenID').value;
                }
                else {
                    var patID = document.getElementById('ctl00_ContentPlaceHolder1_umrPatientDetails_Umrlookup__hiddenID').value;
                }
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
            else {
                document.getElementById('<%=chkECopyAddress.ClientID %>').checked = false;
                document.getElementById('ctl00_ContentPlaceHolder1_UcGuarantor_txtGAddress1').value = '';
                document.getElementById('ctl00_ContentPlaceHolder1_UcGuarantor_txtGAddress2').value = "";
                document.getElementById('ctl00_ContentPlaceHolder1_UcGuarantor_ucGArea_txtSearchControl').value = "";
                document.getElementById('ctl00_ContentPlaceHolder1_UcGuarantor_ucGArea__hiddenID').value = "";
                document.getElementById('ctl00_ContentPlaceHolder1_UcGuarantor_txtGPin').value = "";
                document.getElementById('ctl00_ContentPlaceHolder1_UcGuarantor_ucGCity').value = "";
                document.getElementById('ctl00_ContentPlaceHolder1_UcGuarantor_ucGState').value = "";
                document.getElementById('ctl00_ContentPlaceHolder1_UcGuarantor_txtGdistrict').value = "";
                document.getElementById('ctl00_ContentPlaceHolder1_UcGuarantor_ucGCountry').value = "";
                $('#ctl00_ContentPlaceHolder1_UcGuarantor_ddlGERelation').val('0');
                $('#ctl00_ContentPlaceHolder1_UcGuarantor_txtGEName').val('');
                $('#ctl00_ContentPlaceHolder1_UcGuarantor_txtGmobileno').val('');

            }
        }
    }
    function selectRelation(obj) {
        if (obj == 'G') {
            if (document.getElementById('<%= ddlGERelation.ClientID%>').value == "14") {
                if (document.getElementById('<%=hdnGDocName.ClientID %>').value != 'OpBillAssesment') {
                    document.getElementById('<%= txtGEName.ClientID %>').value = document.getElementById('<%=hdnGDocName.ClientID %>').value == 'REG' ? document.getElementById('ctl00_ContentPlaceHolder1_txtDisplayname').value : document.getElementById('<%=hdnGDocName.ClientID %>').value == 'ADMN' ? document.getElementById('ctl00_ContentPlaceHolder1_umrPatientDetails_lblPatName').innerHTML : '';
                    document.getElementById('<%=txtGmobileno.ClientID %>').value = document.getElementById('<%=hdnGDocName.ClientID %>').value == 'ADMN' ? document.getElementById('ctl00_ContentPlaceHolder1_umrPatientDetails_lblMobileNo').innerHTML : '';

                    document.getElementById('<%= txtGEName.ClientID %>').disabled = document.getElementById('<%=hdnGDocName.ClientID %>').value == 'REG' && document.getElementById('ctl00_ContentPlaceHolder1_txtDisplayname').value != "" ? false : false;
                    Myself(obj);
                }
                else {
                    Myself(obj);
                }
            } else {
                document.getElementById('<%= txtGEName.ClientID %>').disabled = false;
                document.getElementById('<%= txtGEName.ClientID %>').value = '';
                document.getElementById('<%= txtGmobileno.ClientID %>').value = '';
                document.getElementById('<%= txtGmobileno.ClientID %>').disabled = false;

            }
        }
        else {
            if (document.getElementById('<%= ddlERelation.ClientID%>').value == "14") {
                if (document.getElementById('<%=hdnGDocName.ClientID %>').value != 'OpBillAssesment') {
                    document.getElementById('<%= txtEName.ClientID %>').value = document.getElementById('<%=hdnGDocName.ClientID %>').value == 'REG' ? document.getElementById('ctl00_ContentPlaceHolder1_txtDisplayname').value : '';
                    document.getElementById('<%=txtmobileno.ClientID %>').value = document.getElementById('<%=hdnGDocName.ClientID %>').value == 'ESTBILL' ? document.getElementById('ctl00_ContentPlaceHolder1_umrPatientDetails_lblMobileNo').innerHTML : '';
                    document.getElementById('<%=txtEName.ClientID %>').value = document.getElementById('<%=hdnGDocName.ClientID %>').value == 'ESTBILL' ? document.getElementById('ctl00_ContentPlaceHolder1_umrPatientDetails_lblPatName').innerHTML : '';
                    document.getElementById('<%= txtEName.ClientID %>').disabled = document.getElementById('ctl00_ContentPlaceHolder1_txtDisplayname').value != "" ? false : false;
                    Myself(obj);
                }
                else {
                    Myself(obj);
                }
            } else {
                document.getElementById('<%= txtEName.ClientID %>').disabled = false;
                document.getElementById('<%= txtEName.ClientID %>').value = '';
                document.getElementById('<%= txtmobileno.ClientID %>').value = '';
                document.getElementById('<%= txtmobileno.ClientID %>').disabled = false;
            }
        }
    }

    function selectRelationAddess() {
        document.getElementById('<%= hdnRelid.ClientID%>').value = $('[id*=UcGuarantor_ddlERelation]').val();
        if (document.getElementById('<%= hdnRelid.ClientID%>').value == "14") {
            document.getElementById('ctl00_ContentPlaceHolder1_Address1_UcGuarantor_txtEName').value = document.getElementById('ctl00_ContentPlaceHolder1_txtDisplayname').value;
            document.getElementById('ctl00_ContentPlaceHolder1_Address1_UcGuarantor_txtmobileno').value = document.getElementById('ctl00_ContentPlaceHolder1_txtMobile1').value;
            document.getElementById('ctl00_ContentPlaceHolder1_Address1_UcGuarantor_txtEName').disabled = true;
            

        } else {
            document.getElementById('ctl00_ContentPlaceHolder1_Address1_UcGuarantor_txtEName').value = '';
            document.getElementById('ctl00_ContentPlaceHolder1_Address1_UcGuarantor_txtEName').disabled = false;
            document.getElementById('ctl00_ContentPlaceHolder1_Address1_UcGuarantor_txtmobileno').value = '';

        }
    }
    /*
    function CheckMblNoadmng() {
    var mobile_no = document.getElementById('ctl00_ContentPlaceHolder1_EmergencyContactDetails1_UcGuarantor_txtGmobileno').value;
        
    if (mobile_no == '0000000000') {
    document.getElementById('ctl00_ContentPlaceHolder1_EmergencyContactDetails1_UcGuarantor_txtGmobileno').value = '';
    $(".stoast").toastText("warning", "The mobile number should not be all zeros!", 2, 3);
    document.getElementById('ctl00_ContentPlaceHolder1_EmergencyContactDetails1_UcGuarantor_txtGmobileno').focus();
    return false;

    }
    var maxmobilenodigits = $('[id*=hdnMobileMaxDigits]').val();
    var minmobilenodigits = $('[id*=hdnMobileMinDigits]').val();
    if ($('[id*=hdnMobileMadatory]').val() == 'True') {
    if (mobile_no.length < minmobilenodigits) {
    $(".stoast").toastText("warning", "Enter Minimum of " + minmobilenodigits + " Digits Mobile Number", 5, 3);
    document.getElementById('ctl00_ContentPlaceHolder1_EmergencyContactDetails1_UcGuarantor_txtGmobileno').focus();
    return false;
    }
    }
    else {
    if (mobile_no.length > 0 && mobile_no.length < 10) {
    $(".stoast").toastText("warning", "Mobile number should be 10 digits!.", 5, 2);
    document.getElementById('ctl00_ContentPlaceHolder1_EmergencyContactDetails1_UcGuarantor_txtGmobileno').focus();
    return false;
    }
    }

    }*/




    /*if (myMultiAddress1 != '') {
    if (myMultiAddress1[0]["AREA_ID"] != '') {
    document.getElementById('ctl00_ContentPlaceHolder1_EmergencyContactDetails1_UcGuarantor_ddlGERelation').value = myMultiAddress1[0]["relation"];
    document.getElementById('ctl00_ContentPlaceHolder1_EmergencyContactDetails1_UcGuarantor_txtGmobileno').value = myMultiAddress1[0]["mobileno"];
    document.getElementById('ctl00_ContentPlaceHolder1_EmergencyContactDetails1_UcGuarantor_txtGEName').value = myMultiAddress1[0]["name"];
    document.getElementById('ctl00_ContentPlaceHolder1_EmergencyContactDetails1_UcGuarantor_txtGAddress1').value = myMultiAddress1[0]["Address1"];
    document.getElementById('ctl00_ContentPlaceHolder1_EmergencyContactDetails1_UcGuarantor_txtGAddress2').value = myMultiAddress1[0]["Address2"];
    document.getElementById('ctl00_ContentPlaceHolder1_EmergencyContactDetails1_UcGuarantor_ucGArea_txtSearchControl').value = myMultiAddress1[0]["area_name"];
    document.getElementById('ctl00_ContentPlaceHolder1_EmergencyContactDetails1_UcGuarantor_ucGArea_txtSearchControl').value = myMultiAddress1[0]["area_name"];
    document.getElementById('ctl00_ContentPlaceHolder1_EmergencyContactDetails1_UcGuarantor_hdnGAreaId').value = myMultiAddress1[0]["Area"];
    document.getElementById('ctl00_ContentPlaceHolder1_EmergencyContactDetails1_UcGuarantor_ucGArea__hiddenID').value = myMultiAddress1[0]["Area"];
    document.getElementById('ctl00_ContentPlaceHolder1_EmergencyContactDetails1_UcGuarantor_ucGCity').value = myMultiAddress1[0]["city_name"];
    document.getElementById('ctl00_ContentPlaceHolder1_EmergencyContactDetails1_UcGuarantor_hdncityid').value = myMultiAddress1[0]["City"];
    document.getElementById('ctl00_ContentPlaceHolder1_EmergencyContactDetails1_UcGuarantor_ucGState').value = myMultiAddress1[0]["state_name"];
    document.getElementById('ctl00_ContentPlaceHolder1_EmergencyContactDetails1_UcGuarantor_hdnstateid').value = myMultiAddress1[0]["State"];
    document.getElementById('ctl00_ContentPlaceHolder1_EmergencyContactDetails1_UcGuarantor_hdnGstateid').value = myMultiAddress1[0]["State"];
    document.getElementById('ctl00_ContentPlaceHolder1_EmergencyContactDetails1_UcGuarantor_ucGCountry').value = myMultiAddress1[0]["country_name"];
    document.getElementById('ctl00_ContentPlaceHolder1_EmergencyContactDetails1_UcGuarantor_hdnGcountryid').value = myMultiAddress1[0]["Country"];
    document.getElementById('ctl00_ContentPlaceHolder1_EmergencyContactDetails1_UcGuarantor_hdncountryid').value = myMultiAddress1[0]["Country"];
    document.getElementById('ctl00_ContentPlaceHolder1_EmergencyContactDetails1_UcGuarantor_txtGPin').value = myMultiAddress1[0]["PinZip"];
    document.getElementById('ctl00_ContentPlaceHolder1_EmergencyContactDetails1_UcGuarantor_hdnpincode').value = myMultiAddress1[0]["PinZip"];
    document.getElementById('ctl00_ContentPlaceHolder1_EmergencyContactDetails1_UcGuarantor_txtGPin').value = myMultiAddress1[0]["PinZip"];
    document.getElementById('ctl00_ContentPlaceHolder1_EmergencyContactDetails1_UcGuarantor_txtGPhone').value = myMultiAddress1[0]["txtPhone"];
    document.getElementById('ctl00_ContentPlaceHolder1_EmergencyContactDetails1_UcGuarantor_hdndistrictid').value = myMultiAddress1[0]["adtecid"];
    document.getElementById('ctl00_ContentPlaceHolder1_EmergencyContactDetails1_UcGuarantor_txtGdistrict').value = myMultiAddress1[0]["city_name"];
    }
    else {
    document.getElementById('<%=chkGCopyAddress.ClientID %>').checked = false;
    $(".stoast").toastText("Info", "Please Select Present Address", 5, 2);
    return false;
    }
    }*/
    //EzHms.Services.PatientRegistration.Get_Patient_Addresses(patID, myResults, OnCallError);


    /*if (document.getElementById('<%= ucArea.FindControl("txtSearchControl").ClientID %>').value != '') {
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
    }*/
</script>

<asp:ScriptManagerProxy ID="smp" runat="server">
    <Scripts>
        <asp:ScriptReference Path="~/JSScript/Validation.js" />
    </Scripts>
</asp:ScriptManagerProxy>
<div class="emergency" id="divUcEmr" style="display: block">

     <table border="0" cellpadding="0" cellspacing="0" align="center" width="100%" class="FormsCtrl address_type"style="margin: 0px !important">
            <tr>
            <td>
             <div class="formflex flex-column ">
                 <div class="formelements ">
                   
                                    <div class="formelementstxt" id="trSameAsAddress">
                                    <asp:CheckBox ID="chkECopyAddress" runat="server" onclick="return Copyaddress(this)" />
            <asp:Label ID="lblSameAsAddress" Text="Copy From Patient Address" runat="server"></asp:Label>
                                    </div>
                                    </div>

                                     <div class="formelements flex-col-50">
                                    <div class="formelementslbl" >
                           Relation
                                    </div>
                                    <div class="formelementstxt" >
                                           <asp:DropDownList ID="ddlERelation" runat="server" Width="100%" onchange="selectRelation('N');selectRelationAddess()">
                                    </asp:DropDownList>
                                    </div>
                                    </div>
                                     <div class="formelements flex-col-50">
                                    <div class="formelementslbl col-1" id="trMobileNoDisp" runat="server">
                            <asp:Label ID="lblmobileno" runat="server" Text="Mobile"></asp:Label>
                                    </div>
                                    <div class="formelementstxt"  id="trMobileNoDisp1" runat="server">
                                     <asp:TextBox ID="txtmobileno" runat="server" Width="100%" autocomplete="off" onkeyup="return OnNullValue(this);"
                    onblur="CheckMblNo(this);return MobileNoSettingSavevalidate('ctl00_ContentPlaceHolder1_Address1_UcGuarantor_txtmobileno','H');"
                    onkeypress="return CheckNumericphno(event);" MaxLength="16"></asp:TextBox>
                                    </div>
                                    </div>
                                     <div class="formelements flex-col-100">
                                    <div class="formelementslbl" >
                             Name
                                    </div>
                                    <div class="formelementstxt" >
                                    <asp:TextBox ID="txtEName" Width="100%" onfocus="" runat="server"  onkeypress="return NumCharsSpaceWithHiphen1(event);"
                    onblur="AllTitleCase(this);" autocomplete="off"></asp:TextBox>
                                    </div>
                                    </div>
                                     <div class="formelements flex-col-100">
                                    <div class="formelementslbl" >
                            Address 1
                                    </div>
                                    <div class="formelementstxt" >
                                     <asp:HiddenField ID="hdnaddress_id" runat="server" />
                <asp:HiddenField ID="hdnadrs_rev_no" runat="server" />
                <asp:TextBox ID="txtAddress1" Width="100%" runat="server" onblur="AllTitleCase(this);"
                    MaxLength="64" autocomplete="off"></asp:TextBox>
                                    </div>
                                    </div>
                                     <div class="formelements flex-col-100">
                                    <div class="formelementslbl" >
                            Address2
                                    </div>
                                    <div class="formelementstxt" >
                                     <asp:TextBox ID="txtAddress2" Width="100%" runat="server" MaxLength="64" autocomplete="off"
                    onblur="AllTitleCase(this);"></asp:TextBox>
                                    </div>
                                    </div>
                                     <div class="formelements flex-col-50">
                                    <div class="formelementslbl" >
                             Area
                                    </div>
                                    <div class="formelementstxt " >
                                     <uc4:GenericGrid ID="ucArea" runat="server" CallbackFn="OnAreaSelection" onblur="return OnNullValue(this);" />
                                    </div>
                                    </div>
                                     <div class="formelements flex-col-50">
                                    <div class="formelementslbl col-1" >
                            Pin/Zip
                                    </div>
                                    <div class="formelementstxt" >
                                       <%--<asp:TextBox ID="txtPin" runat="server" onblur="return Validatephinzipnumber();"
                    MaxLength="8" onkeypress="return chkNumeric(event);" autocomplete="off"></asp:TextBox>--%>
                <asp:TextBox ID="txtPin" runat="server" onkeypress="return chkNumeric(event);" MaxLength="8" Width="100%"
                    autocomplete="off" onblur="return OnNullValue(this);"></asp:TextBox>
                <asp:HiddenField ID="hdnpincode" runat="server" />
                <ajaxToolkit:AutoCompleteExtender ID="AutoCompleteExtender2" ServiceMethod="GetAutoComp_Pincode"
                    MinimumPrefixLength="3" ServicePath="~/PatientRegistration.asmx" CompletionInterval="100"
                    UseContextKey="true" EnableCaching="false" CompletionSetCount="10" CompletionListItemCssClass="autocomplete_listItem"
                    CompletionListCssClass="autocomplete_completionListElement" CompletionListHighlightedItemCssClass="autocomplete_highlightedListItem"
                    TargetControlID="txtPin" ContextKey="PIN_CODE" OnClientItemSelected="Onpincodeselection2"
                    runat="server" FirstRowSelected="false">
                </ajaxToolkit:AutoCompleteExtender>
                                    </div>
                                    </div>
                                      <div class="formelements flex-col-50">
                                    <div class="formelementslbl" >
                            City
                                    </div>
                                    <div class="formelementstxt" >
                                    <asp:TextBox ID="ucCity" runat="server" MaxLength="64" Width="100%" onfocus="return OnLostFoucs(this);"
                    Enabled="false" onblur="return OnNullValue(this);"></asp:TextBox>
                <asp:HiddenField ID="hdncityid" runat="server" />
                                    </div>
                                    </div>
                                      <div class="formelements flex-col-50">
                                    <div class="formelementslbl col-1" >
                           District
                                    </div>
                                    <div class="formelementstxt" >
                                     <asp:TextBox ID="DistricUserControl1" Width="100%" runat="server" Enabled="false"></asp:TextBox>
                <asp:HiddenField ID="hdndistrictid" runat="server" />
                                    </div>
                                    </div>
                                      <div class="formelements flex-col-50">
                                    <div class="formelementslbl" >
                           State
                                    </div>
                                    <div class="formelementstxt" >
                                     <asp:TextBox ID="ucState" runat="server" Width="100%" MaxLength="64" onfocus="return OnLostFoucs(this);"
                    Enabled="false" onblur="return OnNullValue(this);"></asp:TextBox>
                <asp:HiddenField ID="hdnstateid" runat="server" />
                                    </div>
                                    </div>
                                      <div class="formelements flex-col-50">
                                    <div class="formelementslbl col-1" >
                            Country
                                    </div>
                                    <div class="formelementstxt" >
                                    <asp:TextBox ID="ucCountry" runat="server" Width="100%" MaxLength="64" onfocus="return OnLostFoucs(this);"
                    Enabled="false" onblur="return OnNullValue(this);"></asp:TextBox>
                <asp:HiddenField ID="hdncountryid" runat="server" />
                                    </div>
                                    </div>
                                      <div class="formelements flex-col-50"  style="display: none;">
                                    <div class="formelementslbl" >
                            Phone#
                                    </div>
                                    <div class="formelementstxt" >
                                    <asp:TextBox ID="txtPhone" runat="server" Width="100%" AutoCompleteType="Disabled" MaxLength="10"
                    onblur="return OnNullValue(this); Validatephonenumber();" onkeypress="return CheckNumericphno(event);"></asp:TextBox>
                                    </div>
                                    </div>
                                    <div class="formelements ">
                                    <div class="formelementslbl" >
                           
                                    </div>
                                    <div class="formelementstxt" >
                                    
                                    </div>
                                    </div>
                                
             </div>
             </td>
             </tr>
             </table>

    <asp:HiddenField ID="hdnPatid" runat="server" />
    <asp:HiddenField ID="hdnRelid" runat="server" />
    <asp:HiddenField ID="hdnEAreaId" runat="server" />
    <asp:HiddenField ID="hdnadtecid" runat="server" />
    <asp:HiddenField ID="hdnEDocName" runat="server" />
    <asp:HiddenField ID="hdnreg_ec_id" runat="server" />
    <asp:HiddenField ID="hdnreg_ec_rev_no" runat="server" />
</div>
<div class="Guarantor" id="divUcGc" style="display: none">
 <table border="0" cellpadding="0" cellspacing="0" align="center" width="100%" class="FormsCtrl">
            <tr>
            <td>
             <div class="formflex flex-column ">
                 <div class="formelements ">
                             
                                    <div class="formelementstxt" >
                                      <%-- <asp:CheckBox ID="chkGCopyAddress" runat="server" onclick="return CopyGaddress(this)"
                Text="Copy From Patient Address" />--%>
            <asp:CheckBox ID="chkGCopyAddress" runat="server" onclick="return CopyGaddress(this)" />
            <asp:Label ID="lblGCopyPatAddres" Text="Copy From Patient Address" runat="server"></asp:Label>
                                    </div>
                                    </div>
                                        <div class="formelements flex-col-50">
                                    <div class="formelementslbl" >
                            Relation
                                    </div>
                                    <div class="formelementstxt" >
                                       <asp:DropDownList ID="ddlGERelation" runat="server" Width="100%" onchange="selectRelation('G');">
                </asp:DropDownList>
                                    </div>
                                    </div>
                                        <div class="formelements flex-col-50">
                                    <div class="formelementslbl col-1" id="trGMobileNoDisp" runat="server">
                            <asp:Label ID="lblGmobileno" runat="server" Text="Mobile"></asp:Label>
                                    </div>
                                    <div class="formelementstxt" id="trGMobileNoDisp1" runat="server">
                                                    <asp:TextBox ID="txtGmobileno" runat="server" Width="100%" autocomplete="off" onkeyup="return OnNullValue(this);"
                    onblur="CheckMblNo(this);return MobileNoSettingSavevalidate('ctl00_ContentPlaceHolder1_Address1_UcGuarantor_txtGmobileno','H');"
                    onkeypress="return CheckNumericphno(event);" MaxLength="16"></asp:TextBox><%--after discussion with siva T is changes has H by srinivas--%>
                                    </div>
                                    </div>
                                        <div class="formelements flex-col-100">
                                    <div class="formelementslbl" >
                             Name
                                    </div>
                                    <div class="formelementstxt" >
                                      <asp:TextBox ID="txtGEName" Width="100%" onfocus="" runat="server"  onkeypress="return NumCharsSpaceWithHiphen1(event);"
                    autocomplete="off" onblur="AllTitleCase(this);"></asp:TextBox>
                                    </div>
                                    </div>
                                        <div class="formelements flex-col-100">
                                    <div class="formelementslbl" >
                            Address1
                                    </div>
                                    <div class="formelementstxt" >
                                      <asp:HiddenField ID="hdnGaddress_id"  runat="server" />
                <asp:HiddenField ID="hdnGadrs_rev_no" runat="server" />
                <asp:TextBox ID="txtGAddress1" Width="100%" runat="server" onblur="AllTitleCase(this);"
                    MaxLength="64" autocomplete="off"></asp:TextBox>
                                    </div>
                                    </div>
                                       <div class="formelements flex-col-100">
                                    <div class="formelementslbl" >
                            Address2
                                    </div>
                                    <div class="formelementstxt" >
                                     <asp:TextBox ID="txtGAddress2" Width="100%" runat="server" MaxLength="64" autocomplete="off"
                    onblur="AllTitleCase(this);"></asp:TextBox>
                                    </div>
                                    </div>
                                       <div class="formelements flex-col-50">
                                    <div class="formelementslbl" >
                            Area
                                    </div>
                                    <div class="formelementstxt flex-col-50" >
                                    <uc4:GenericGrid ID="ucGArea" Width="100%" runat="server" CallbackFn="OnGcAreaSelection" onblur="return OnNullValue(this);" />
                                    </div>
                                    </div>
                                       <div class="formelements flex-col-50">
                                    <div class="formelementslbl col-1" >
                            Pin/Zip
                                    </div>
                                    <div class="formelementstxt" >
                                               <%--<asp:TextBox ID="txtPin" runat="server" onblur="return Validatephinzipnumber();"
                    MaxLength="8" onkeypress="return chkNumeric(event);" autocomplete="off"></asp:TextBox>--%>
                <asp:TextBox ID="txtGPin" runat="server" onkeypress="return chkNumeric(event);" MaxLength="8" Width="100%"
                    onblur="return OnNullValue(this); Validatephinzipnumber();" autocomplete="off"></asp:TextBox>
                <asp:HiddenField ID="hdnGpincode" runat="server" />
                <ajaxToolkit:AutoCompleteExtender ID="AutoGCompleteExtender2" ServiceMethod="GetAutoComp_Pincode"
                    MinimumPrefixLength="3" ServicePath="~/PatientRegistration.asmx" CompletionInterval="100"
                    UseContextKey="true" EnableCaching="false" CompletionSetCount="10" CompletionListItemCssClass="autocomplete_listItem"
                    CompletionListCssClass="autocomplete_completionListElement" CompletionListHighlightedItemCssClass="autocomplete_highlightedListItem"
                    TargetControlID="txtGPin" ContextKey="PIN_CODE" OnClientItemSelected="OnGpincodeselection"
                    runat="server" FirstRowSelected="false">
                </ajaxToolkit:AutoCompleteExtender>
                                    </div>
                                    </div>
                                       <div class="formelements flex-col-50">
                                    <div class="formelementslbl" >
                            City
                                    </div>
                                    <div class="formelementstxt" >
                                    <asp:TextBox ID="ucGCity" runat="server" Width="100%" MaxLength="64" onfocus="return OnLostFoucs(this);"
                    onblur="return OnNullValue(this);" Enabled="false"></asp:TextBox>
                <asp:HiddenField ID="hdnGcityid" runat="server" />
                                    </div>
                                    </div>
                                     <div class="formelements flex-col-50">
                                    <div class="formelementslbl col-1" >
                     District
                                    </div>
                                    <div class="formelementstxt" >
                                     <asp:TextBox ID="txtGdistrict" Width="100%" runat="server" Enabled="false"></asp:TextBox>
                    <asp:HiddenField ID="hdnGdistId" runat="server" />
                                    </div>
                                    </div>
                                     <div class="formelements flex-col-50">
                                    <div class="formelementslbl" >
                      State
                                    </div>
                                    <div class="formelementstxt" >
                                     <asp:TextBox ID="ucGState" Width="100%" runat="server" MaxLength="64" onfocus="return OnLostFoucs(this);"
                    Enabled="false" onblur="return OnNullValue(this);"></asp:TextBox>
                <asp:HiddenField ID="hdnGstateid" runat="server" />
                                    </div>
                                    </div>
                                    <div class="formelements flex-col-50">
                                    <div class="formelementslbl col-1" >
                     Country
                                    </div>
                                    <div class="formelementstxt" >
                                     <asp:TextBox ID="ucGCountry" Width="100%" runat="server" MaxLength="64" onfocus="return OnLostFoucs(this);"
                    Enabled="false" onblur="return OnNullValue(this);"></asp:TextBox>
                <asp:HiddenField ID="hdnGcountryid" runat="server" />
                                    </div>
                                    </div>
                                    <div class="formelements flex-col-50" style="display: none;">
                                    <div class="formelementslbl" >
                       Phone#
                                    </div>
                                    <div class="formelementstxt" >
                                     <asp:TextBox ID="txtGPhone" Width="100%" runat="server" AutoCompleteType="Disabled" MaxLength="10"
                    onblur="return OnNullValue(this);Validatephonenumber();" onkeypress="return CheckNumericphno(event);"></asp:TextBox>
                                    </div>
                                    </div>
                                   
             </div>
             </td>
             </tr>
             </table>


    <asp:HiddenField ID="hdnGPatid" runat="server" />
    <asp:HiddenField ID="hdnGRelid" runat="server" />
    <asp:HiddenField ID="hdnGAreaId" runat="server" />
    <asp:HiddenField ID="hdnGadtecid" runat="server" />
    <asp:HiddenField ID="hdnGDocName" runat="server" />
    <asp:HiddenField ID="hdnreg_grntr_id" runat="server" />
    <asp:HiddenField ID="hdnreg_grntr_rev_no" runat="server" />
    <asp:HiddenField ID="hdnPreAdmn" runat="server" />
    <asp:HiddenField ID="hdnAdmn" runat="server" />
    <asp:HiddenField ID="hdndefaultstate" runat="server" />
</div>
