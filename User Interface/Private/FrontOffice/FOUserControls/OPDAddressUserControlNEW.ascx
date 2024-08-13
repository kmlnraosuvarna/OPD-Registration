<%@ Control Language="C#" AutoEventWireup="true" CodeFile="OPDAddressUserControlNEW.ascx.cs"
    Inherits="Private_FrontOffice_FOUserControls_OPDAddressUserControlNEW" %>
<%@ Register Src="~/Private/UserControls/LookUp.ascx" TagName="Search" TagPrefix="Lookup" %>
<%@ Register Assembly="AjaxControlToolkit" Namespace="AjaxControlToolkit" TagPrefix="ajaxToolkit" %>
<%@ Register Src="~/Private/FrontOffice/FOUserControls/OPDGuarenterControl.ascx"
    TagName="Guarantee" TagPrefix="ucGuarantee" %>
<%@ Register Src="~/Private/FrontOffice/FOUserControls/DDLMultiSelection.ascx" TagName="DDLMultiSelection"
    TagPrefix="uc7" %>
<script type="text/javascript">
    var ctrlcom = 'ctl00_ContentPlaceHolder1';
    function set_appt_pre_cond(mobile) {
        document.getElementById('ctl00_ContentPlaceHolder1_UcAppointmentNo_hdn_preCond').value = "R^" + mobile;
        //        GetNonAsync(
        //            "PatientRegistration.asmx/AddPreContion_appt",
        //            { mobile: mobile },
        //            function (JData) {
        //            },
        //            function (jqXHR, textStatus, errorThrown) {
        //            });
    }

    function CheckMblNo_valid(ev) {
        if (document.getElementById('' + ctrlcom + '_Address1_txtMobile1').value == '0000000000') {
            document.getElementById('' + ctrlcom + '_Address1_txtMobile1').value = '';
            $(".stoast").toastText("warning", "The mobile number should not be all zeros!", 2, 3);
            return false;
        }
        if (document.getElementById('' + ctrlcom + '_txtMobile3').value == '0000000000') {
            document.getElementById('' + ctrlcom + '_txtMobile3').value = '';
            $(".stoast").toastText("warning", "Mobile Number Should not be all zeros!.", 2, 3);
            return false;
        }
        var mobile_no = document.getElementById('' + ctrlcom + '_Address1_txtMobile1').value;
        var mobil_no2 = document.getElementById('' + ctrlcom + '_Address1_txtMobile2').value;
        var area_name = document.getElementById('<%=AreaUserControl1.FindControl("txtSearchControl").ClientID%>').value;
        var area_id = document.getElementById('<%=hdnAreaId.ClientID%>').value;
        var city_name = document.getElementById('<%=CityUserControl1.ClientID %>').value;
        var city_id = document.getElementById('<%=hdncityid.ClientID %>').value;
        var state_name = document.getElementById('<%=StateUserControl1.ClientID %>').value;
        var state_id = document.getElementById('<%=hdnstateid.ClientID %>').value;
        var country_name = document.getElementById('<%=CountryUserControl1.ClientID%>').value;
        var country_id = document.getElementById('<%=hdncountryid.ClientID %>').value;
        var pincode = document.getElementById('<%=txtPin.ClientID %>').value;
        var District = document.getElementById('<%=hdndistrictid.ClientID %>').value;
        var District_name = document.getElementById('<%=DistricUserControl1.ClientID%>').value
        OnAssignAddressDetails(area_id, area_name, city_id, city_name, state_id, state_name, country_id, country_name, pincode, District, District_name, mobile_no, mobil_no2)

        if (mobile_no.length == 10) {
            GetNonAsync(
            "PatientRegistration.asmx/Check_mobileno",
            { mobile_no: mobile_no },
            function (jdata) {
                var input = jQuery.parseJSON(jdata.d);
                if (input != "") {
                    if (jQuery.parseJSON(jdata.d)[0].MOBILE_NO == mobile_no) {
                        set_appt_pre_cond(mobile_no);
                        $(".toast").toastText("Info", "This Mobile no is already having an Appointment", 5, 2);
                        document.getElementById('' + ctrlcom + '_pre_regi').value = '1';
                        document.getElementById('divapmnt').style.display = 'block';
                        document.getElementById('divprereg').style.display = 'none';
                        //document.getElementById('' + ctrlcom + '_PkgLooupDiv').style.display = 'none';
                        //document.getElementById('' + ctrlcom + '_tdDrIndent').style.display = 'none';
                        document.getElementById('divOSP').style.display = 'none';
                        document.getElementById('' + ctrlcom + '_chk_old').checked = false;
                        document.getElementById('' + ctrlcom + '_chk_old').disabled = true;
                        $('#lk_btn_ctl00_ContentPlaceHolder1_UcAppointmentNo').trigger('click');
                    }
                }
            },
            function () {
            });

            //            GetNonAsync(
            //            "PatientRegistration.asmx/AddPreContion_appt_revert",
            //            {},
            //            function (JData) {
            //            },
            //            function (jqXHR, textStatus, errorThrown) {
            //            });

        }
    }

    function hcckhhccrd() {
        if (document.getElementById('' + ctrlcom + '_chkhccrd').checked == true) {
            $('[id*=ctl00_ContentPlaceHolder1_Address1_DivHcCard]')[0].style.display = 'block';
            $('#' + ctrlcom + '_Address1_ddhcpatnames').empty().html('');
            document.getElementById('' + ctrlcom + '_Address1_ucHc_crd_no_txtSearchControl').disabled = false;
        }
        else {
            document.getElementById('' + ctrlcom + '_Address1_uchccrdtype_txtSearchControl').value = '';
            document.getElementById('' + ctrlcom + '_Address1_uchccrdtype__hiddenText').value = '';
            document.getElementById('' + ctrlcom + '_Address1_uchccrdtype__hiddenID').value = '';
            document.getElementById('' + ctrlcom + '_Address1_ucHc_crd_no_txtSearchControl').value = '';
            document.getElementById('' + ctrlcom + '_Address1_ucHc_crd_no__hiddenText').value = '';
            document.getElementById('' + ctrlcom + '_Address1_ucHc_crd_no__hiddenID').value = '';
            document.getElementById('' + ctrlcom + '_Address1_ddhcpatnames').value = 0;
            $('#' + ctrlcom + '_Address1_hdnhcdetid').val('0');
            $('#' + ctrlcom + '_hdnutilizamt').val('0');
            ctl00_ContentPlaceHolder1_lblhcNo.style.display = 'none';
            ctl00_ContentPlaceHolder1_lblhcnon.style.display = 'none';
        }
        return false;
    }
    function onHCCrdTypeselection(data) {
        $('#' + ctrlcom + '_Address1_ddhcpatnames').empty().html('');
        document.getElementById('' + ctrlcom + '_Address1_ucHc_crd_no_txtSearchControl').disabled = false;
        ctl00_ContentPlaceHolder1_Address1_ucHc_crd_no_txtSearchControl.value = "";
        ctl00_ContentPlaceHolder1_Address1_ucHc_crd_no__hiddenID.value = 0;
        ctl00_ContentPlaceHolder1_Address1_ucHc_crd_no__hiddenText.value = "";
        var hc_type_id = 0;
        if (data.RESULT == undefined) {
            $('#' + ctrlcom + '_Address1_uchccrdtype_txtSearchControl').val(data.HEALTH_CARD_TYPE_NAME);
            $('#' + ctrlcom + '_Address1_uchccrdtype__hiddenText').val(data.HEALTH_CARD_TYPE_NAME);
            $('#' + ctrlcom + '_Address1_uchccrdtype__hiddenID').val(data.HEALTH_CARD_TYPE_ID);
            hc_type_id = data.HEALTH_CARD_TYPE_ID;
        }
        else {
            $('#' + ctrlcom + '_Address1_uchccrdtype_txtSearchControl').val(data.RESULT.HEALTH_CARD_TYPE_NAME);
            $('#' + ctrlcom + '_Address1_uchccrdtype__hiddenText').val(data.RESULT.HEALTH_CARD_TYPE_NAME);
            $('#' + ctrlcom + '_Address1_uchccrdtype__hiddenID').val(data.RESULT.HEALTH_CARD_TYPE_ID);
            hc_type_id = data.RESULT.HEALTH_CARD_TYPE_ID;
        }
        Add_Precond();
    }
    function Add_Precond() {
        var hc_tye_id = $('#' + ctrlcom + '_Address1_uchccrdtype__hiddenID').val();
        document.getElementById('ctl00_ContentPlaceHolder1_Address1_ucHc_crd_no_hdn_preCond').value = hc_tye_id;
        //        GetAsync(
        //            "Private/FrontOffice/YRegistration.aspx/AddPrecondition_cond",
        //            { hc_tye_id: hc_tye_id },
        //            function (jData) {
        //            },
        //            function (jqXHR, textStatus, errorThrown) {
        //            }
        //        );
    }
    function onhccrd_selection(data) {
        var hc_id = 0;
        if (data.RESULT == undefined) {
            $('#' + ctrlcom + '_Address1_ucHc_crd_no_txtSearchControl').val(data.HEALTH_CARD_NO);
            $('#' + ctrlcom + '_Address1_ucHc_crd_no__hiddenText').val(data.HEALTH_CARD_NO);
            $("#" + ctrlcom + "_Address1_ucHc_crd_no__hiddenID").val(data.HEALTH_CARD_ID);
            document.getElementById('' + ctrlcom + '_lblhcnon').innerHTML = data.HEALTH_CARD_NO;
            ctl00_ContentPlaceHolder1_lblhcNo.style.display = 'table-cell';
            ctl00_ContentPlaceHolder1_lblhcnon.style.display = 'table-cell';
            hc_id = data.HEALTH_CARD_ID;
            $('#' + ctrlcom + '_Address1_uchccrdtype__hiddenID').val(data.HEALTH_CARD_TYPE_ID);
            $('#' + ctrlcom + '_Address1_uchccrdtype_txtSearchControl').val(data.HEALTH_CARD_TYPE_NAME);
            $('#' + ctrlcom + '_Address1_uchccrdtype__hiddenText').val(data.HEALTH_CARD_TYPE_NAME);
            $('#' + ctrlcom + '_Address1_ddhcpatnames').empty().html(data.DISPLAY_NAME);
            document.getElementById('' + ctrlcom + '_Address1_ucHc_crd_no_txtSearchControl').disabled = true;
            document.getElementById('ctl00_ContentPlaceHolder1_headerControl1_hdnhealth_car_det_id').value = data.HEALTH_CARD_DET_ID;
            
        }
        else {
            document.getElementById('' + ctrlcom + '_Address1_ucHc_crd_no_txtSearchControl').disabled = false;
        }






        $.ajax({
            type: "POST",
            url: _iniUrl + "GridService.asmx/HCUnRegisterEdPatDtls",

            data: "{'hc_id':'" + hc_id + "'}",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            async: false,
            error: function (jqXHR, textStatus, errorThrown) {
            },
            success: function (JData) {
                var _SlotVal = '';
                if (JData.d != null) {
                    for (var i = 0; i < JData.d.length; i++) {
                        if (i == 0) {
                          //  _SlotVal += "<OPTION selected value='" + 0 + "'>" + 'Select' + "</OPTION>";
                        }
                        var f_name = JData.d[i].FIRST_NAME;
                        var m_name = JData.d[i].MIDDLENAME;
                        var l_name = JData.d[i].LAST_NAME;
                        if (f_name == undefined || f_name == null || f_name == NaN) { f_name = ''; }
                        if (m_name == undefined || m_name == null || m_name == NaN) { m_name = ''; }
                        if (l_name == undefined || l_name == null || l_name == NaN) { l_name = ''; }
                        _SlotVal += "<OPTION  value='" + JData.d[i].HEALTH_CARD_DET_ID + "," + JData.d[i].CNCSN_RULE_ID + "," + JData.d[i].AGE + "," + JData.d[i].GENDER + "," + JData.d[i].ELIGIBILITY_AMOUNT + "," + JData.d[i].HEALTH_CARD_NO + "'>" + f_name + " " + m_name + " " + l_name + "</OPTION>";
                    }
                    $('#' + ctrlcom + '_Address1_ddhcpatnames').empty().html(_SlotVal)
                   // $('#' + ctrlcom + '_Address1_ddhcpatnames')[0].selectedIndex = 0;
                }
            }
        });
    }
    function HcPatientDetailsChng() {
    }

    function btnHcclose() {
        $('[id*=ctl00_ContentPlaceHolder1_Address1_DivHcCard]')[0].style.display = 'none';
        document.getElementById('' + ctrlcom + '_chkhccrd').checked = false;
        ctl00_ContentPlaceHolder1_Address1_ucHc_crd_no_txtSearchControl.value = "";
        ctl00_ContentPlaceHolder1_Address1_ucHc_crd_no__hiddenID.value = 0;
        ctl00_ContentPlaceHolder1_Address1_ucHc_crd_no__hiddenText.value = "";
        $('#' + ctrlcom + '_Address1_uchccrdtype_txtSearchControl').val('');
        $('#' + ctrlcom + '_Address1_uchccrdtype__hiddenText').val('');
        $('#' + ctrlcom + '_Address1_uchccrdtype__hiddenID').val('0');
        document.getElementById('' + ctrlcom + '_Address1_hdnhcdetid').value = 0;
        document.getElementById('' + ctrlcom + '_hdnutilizamt').value = 0;
        ctl00_ContentPlaceHolder1_lblhcNo.style.display = 'none';
        ctl00_ContentPlaceHolder1_lblhcnon.style.display = 'none';
        document.getElementById('' + ctrlcom + '_lblhcnon').innerHTML = '';
        return false;
    }
    function hcokclick() {
        var sel_text = $('#' + ctrlcom + '_Address1_ddhcpatnames').find('option:selected').text();
        var sel_val = $('#' + ctrlcom + '_Address1_ddhcpatnames').val();
        $('#' + ctrlcom + '_Address1_hdnhcdetid').val(sel_val.split(',')[0]);
        $('#' + ctrlcom + '_newAgeUc_txtYear').val(sel_val.split(',')[2]);
        $('#' + ctrlcom + '_ddlGender').val(sel_val.split(',')[3]);
        var split_sel_text = sel_text.split(' ');
        $('#' + ctrlcom + '_txtFirstName').val(split_sel_text[0]);
        $('#' + ctrlcom + '_txtMiddleName').val(split_sel_text[1]);
        $('#' + ctrlcom + '_txtLastName').val(split_sel_text[2]);
        $('[id*=ctl00_ContentPlaceHolder1_Address1_DivHcCard]')[0].style.display = 'none';
        var inputsrc = 'Y';
        CalAge(inputsrc);
        var id = document.getElementById('' + ctrlcom + '_txtFirstName');
        SetDisplayName1(id);
        hcid = $('#' + ctrlcom + '_Address1_uchccrdtype__hiddenID').val();
        hcNo = $('#' + ctrlcom + '_Address1_ucHc_crd_no__hiddenText').val();

        healthcardnewfileds(sel_val);


        hcid = hcid == '' ? 0 : hcid;
        hcNo = hcNo == '' ? 0 : hcNo;
        if (hcid > 0) {
            BindPatientHealthCrad(hcid, hcNo);
        }
        return false;
    }
    function BindPatientHealthCrad(id, carno) {
        if (id == '' || id == null || id == undefined) { id = 0; }
        if (parseInt(id) > 0) {
            BindPatientHealthCrad(id, carno);

        }
    }
    function hccancelclick() {
        $('#' + ctrlcom + '_Address1_uchccrdtype_txtSearchControl').val('');
        $('#' + ctrlcom + '_Address1_uchccrdtype__hiddenText').val('');
        $('#' + ctrlcom + '_Address1_uchccrdtype__hiddenID').val(0);
        $('#' + ctrlcom + '_Address1_ddhccrdno').empty();
        $('#' + ctrlcom + '_Address1_txthcvaldty').val('');
        $('#' + ctrlcom + '_Address1_txthcbalamt').val('');
        $('#' + ctrlcom + '_Address1_ddhcpatnames').empty();
        $('[id*=ctl00_ContentPlaceHolder1_Address1_DivHcCard]')[0].style.display = 'none';
        ctl00_ContentPlaceHolder1_lblhcNo.style.display = 'none';
        ctl00_ContentPlaceHolder1_lblhcnon.style.display = 'none';
        document.getElementById('' + ctrlcom + '_lblhcnon').immerHTML = '';
        $('#' + ctrlcom + '_Address1_hdnhcdetid').val('0');
        $('#' + ctrlcom + '_hdnutilizamt').val('0');
        document.getElementById('ctl00_ContentPlaceHolder1_chkhccrd').checked = false;
        return false;
    }
    function UpperCase(Name) {
        Name.value = Name.value.trim();
        Name.value = Name.value.toUpperCase();
        return Name.value;
    }

    function OTPCheck(ev) {
        var otpreq = $('#' + ctrlcom + '_ReceiptControl2_hdnotprequired').val();
        var ddlpymtn = '0';
        if ($('#lblquick').prop('class') == 'select') {
            ddlpymtn = document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlcrdtype').value;
            if (otpreq == 'True' && ddlpymtn == '4' && document.getElementById('<%=txtMobile1.ClientID %>').value != '') {
                ChangeCardTypeName();
            }
        }
        else if ($('#lbladvanced').prop('class') == 'select') {
            ddlpymtn = document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlPaymentType').value;
            if (otpreq == 'True' && ddlpymtn == '4' && document.getElementById('<%=txtMobile1.ClientID %>').value != '') {
                checkpayment();
            }
        }
    }

    function checkarea() {
        var areahiddentext = document.getElementById('<%=AreaUserControl1.FindControl("_hiddenText").ClientID%>').value;
        var areaname = document.getElementById('<%=AreaUserControl1.FindControl("txtSearchControl").ClientID%>').value;
        var area = document.getElementById('<%=AreaUserControl1.FindControl("_hiddenID").ClientID%>').value;
        if (document.getElementById('<%=AreaUserControl1.FindControl("txtSearchControl").ClientID%>').value == '' || areahiddentext != areaname) {
            document.getElementById('<%=AreaUserControl1.FindControl("_hiddenID").ClientID%>').value = 0;
            document.getElementById('<%=hdnAreaId.ClientID %>').value = 0;
        }
        if (area == 0 || document.getElementById('<%=hdnAreaId.ClientID %>').value == 0) {
            if (DivAdressRowIndex == 1) {
                GlobalMyAddress1 = '';
                clearpartdetails();
            }
            if (DivAdressRowIndex == 2) {
                GlobalMyAddress2 = '';
                clearpartdetails();
            }
            if (DivAdressRowIndex == 3) {
                GlobalMyAddress3 = '';
                clearpartdetails();
            }
        }
    }
    function OnDistricSelection(objValue, obj) {
        var results = objValue;
        document.getElementById('' + ctrlcom + '_Address1_hdndistrictid').value = '';
        document.getElementById('' + ctrlcom + '_Address1_hdndistrictid').value = results;
        document.getElementById('' + ctrlcom + '_Address1_txtcityauto').disabled = false;
        document.getElementById('<%=hdnQDstId.ClientID %>').value = results;
        Con_key_ch = results;
        set_contextKey = Con_key_ch;
        document.getElementById('<%=hidncityid.ClientID %>').value = '';
        document.getElementById('' + ctrlcom + '_Address1_txtArea').value = '';
        document.getElementById('' + ctrlcom + '_Address1_txtcityauto').value = '';
        document.getElementById('' + ctrlcom + '_Address1_txtPinCode').value = '';
        document.getElementById('' + ctrlcom + '_Address1_txtstdcode').value = '';
        document.getElementById('' + ctrlcom + '_Address1_txtcityauto').className = 'red';
        document.getElementById('' + ctrlcom + '_Address1_txtArea').className = 'red';
        document.getElementById('' + ctrlcom + '_Address1_txtPinCode').className = 'red';
    }

    function checkvalidpin() {
        var pin = document.getElementById('<%=txtPin.ClientID %>').value;
        if (pin != document.getElementById('<%=hdnpincode.ClientID %>').value) {
            if (DivAdressRowIndex == 1) {
                GlobalMyAddress1 = '';
                clearpartdetails();
            }
            if (DivAdressRowIndex == 2) {
                GlobalMyAddress2 = '';
                clearpartdetails();
            }
            if (DivAdressRowIndex == 3) {
                GlobalMyAddress3 = '';
                clearpartdetails();
            }
        }
        var form_name = document.getElementById('' + ctrlcom + '_Address1_hdndocname').value;
        if (form_name == "OP" || form_name == "REG") {
            ValidationEmergency();
        }
        if (document.getElementById('<%=AreaUserControl1.FindControl("_hiddenID").ClientID%>').value == '' || document.getElementById('<%=AreaUserControl1.FindControl("_hiddenID").ClientID%>').value == '0') {
            document.getElementById('<%=txtPin.ClientID%>').className = 'red';
            document.getElementById('<%=AreaUserControl1.FindControl("txtSearchControl").ClientID%>').className = 'red';
        }
        else {
            document.getElementById('<%=txtPin.ClientID%>').className = 'grey';
        }
        if (document.getElementById('' + ctrlcom + '_ddlNationality').value != $('#' + ctrlcom + '_hdnddlNationality').val()) {
            document.getElementById('<%=AreaUserControl1.FindControl("txtSearchControl").ClientID%>').className = 'grey';
            document.getElementById('<%=txtPin.ClientID %>').className = 'grey';
        }
    }
    function clearpartdetails() {
        document.getElementById('<%=AreaUserControl1.FindControl("txtSearchControl").ClientID%>').value = '';
        document.getElementById('<%=AreaUserControl1.FindControl("_hiddenID").ClientID%>').value = 0;
        document.getElementById('<%=AreaUserControl1.FindControl("_hiddenText").ClientID%>').value = '';
        document.getElementById('<%=hdnAreaId.ClientID %>').value = 0;
        document.getElementById('<%=CityUserControl1.ClientID %>').value = '';
        document.getElementById('<%=hdncityid.ClientID %>').value = 0;
        document.getElementById('<%=StateUserControl1.ClientID %>').value = '';
        document.getElementById('<%=hdnstateid.ClientID %>').value = 0;
        document.getElementById('<%=CountryUserControl1.ClientID%>').value = '';
        document.getElementById('<%=hdncountryid.ClientID %>').value = 0;
        document.getElementById('<%=DistricUserControl1.ClientID%>').value = '';
        document.getElementById('<%=hdndistrictid.ClientID %>').value = 0;
        document.getElementById('<%=txtPin.ClientID %>').value = '';
    }
    function Onpincodeselection(sender, eventArgs) {
        var results = eval('(' + eventArgs.get_value() + ')');
        document.getElementById('<%=hdnpincode.ClientID %>').value = results.PIN_CODE;
        document.getElementById('<%=txtPin.ClientID %>').value = results.PIN_CODE;
        document.getElementById('<%=AreaUserControl1.FindControl("txtSearchControl").ClientID%>').value = results.AREA_NAME;
        document.getElementById('<%=AreaUserControl1.FindControl("_hiddenID").ClientID%>').value = results.AREA_ID;
        document.getElementById('<%=hdnAreaId.ClientID %>').value = results.AREA_ID;
        document.getElementById('<%=AreaUserControl1.FindControl("txtSearchControl").ClientID%>').className = 'grey';
        document.getElementById('<%=AreaUserControl1.FindControl("_hiddenText").ClientID%>').value = results.AREA_NAME;
        document.getElementById('<%=CityUserControl1.ClientID %>').value = results.CITY_NAME;
        document.getElementById('<%=hdncityid.ClientID %>').value = results.CITY_ID;
        document.getElementById('<%=StateUserControl1.ClientID %>').value = results.STATE_NAME;
        document.getElementById('<%=hdnstateid.ClientID %>').value = results.STATE_ID;
        document.getElementById('<%=CountryUserControl1.ClientID%>').value = results.COUNTRY_NAME;
        document.getElementById('<%=hdncountryid.ClientID %>').value = results.COUNTRY_ID;
        document.getElementById('<%=hdndistrictid.ClientID %>').value = results.DISTRICT_ID;
        document.getElementById('<%=DistricUserControl1.ClientID%>').value = results.DISTRICT_NAME;
        var SameasPresentAddress, CopyFromPresentAddress, Address1, Address2, Area, PinZip, City, District, State, Country, city_name, state_name, area_name, District_name, country_name, Adres_id, Adrs_rev_no, MobileNo1, MobileNo2;
        SameasPresentAddress = false;
        CopyFromPresentAddress = false;
        Address1 = document.getElementById('<%=txtAddress1.ClientID %>').value;
        Address2 = document.getElementById('<%=txtAddress2.ClientID %>').value;
        Area = results.AREA_ID;
        PinZip = results.PIN_CODE;
        City = results.CITY_ID;
        District_name = results.DISTRICT_NAME;
        State = results.STATE_ID;
        Country = results.COUNTRY_ID;
        city_name = results.CITY_NAME;
        state_name = results.STATE_NAME;
        area_name = results.AREA_NAME;
        country_name = results.COUNTRY_NAME;
        Adres_id = document.getElementById('<%=hdnaddress_id.ClientID %>').value;
        Adrs_rev_no = document.getElementById('<%=hdnadrs_rev_no.ClientID %>').value;
        District = results.DISTRICT_ID;

        var stdcode = document.getElementById('' + ctrlcom + '_Address1_hdnSTDCode').value;
        var isdcode = document.getElementById('' + ctrlcom + '_Address1_hdnISDCode').value;
        if (stdcode == '' || stdcode == null || stdcode == undefined) { stdcode = ''; }
        if (isdcode == '' || isdcode == null || isdcode == undefined) { isdcode = ''; }
        MobileNo1 = stdcode +   document.getElementById('<%=txtMobile1.ClientID %>').value;
        MobileNo2 = isdcode + document.getElementById('<%=txtMobile2.ClientID %>').value; ;
        MobileNo3 = document.getElementById('<%=txtMobile3.ClientID %>').value;

        if (MobileNo1 == '' || MobileNo1 == null || MobileNo1 == undefined) { MobileNo1 = ''; }
        if (MobileNo2 == '' || MobileNo2 == null || MobileNo2 == undefined) { MobileNo2 = ''; }
        if (MobileNo3 == '' || MobileNo3 == null || MobileNo3 == undefined) { MobileNo3 = ''; }

        if (DivAdressRowIndex == 1) {
            multiDimAddress1(DivAdressRowIndex, SameasPresentAddress, CopyFromPresentAddress, Address1, Address2, Area, PinZip, City, District, State,
        Country, city_name, state_name, area_name, District_name, country_name, Adres_id, Adrs_rev_no, MobileNo1, MobileNo2, MobileNo3);
        }
        if (DivAdressRowIndex == 2) {
            multiDimAddress2(DivAdressRowIndex, SameasPresentAddress, CopyFromPresentAddress, Address1, Address2, Area, PinZip, City, District, State,
             Country, city_name, state_name, area_name, District_name, country_name, Adres_id, Adrs_rev_no, MobileNo1, MobileNo2, MobileNo3);
        }
        if (DivAdressRowIndex == 3) {
            multiDimAddress3(DivAdressRowIndex, SameasPresentAddress, CopyFromPresentAddress, Address1, Address2, Area, PinZip, City, District, State,
            Country, city_name, state_name, area_name, District_name, country_name, Adres_id, Adrs_rev_no, MobileNo1, MobileNo2, MobileNo3);
        }
    }
    function OnAssignAddressDetails(area_id, area_name, city_id, city_name, state_id, state_name, country_id, country_name, pincode, District, District_name, MobileNo1, MobileNo2, MobileNo3) {
        if (DivAdressRowIndex == 1) {
            if ($('#<%=chkSameasPresentAddress.ClientID %>')[0].checked == true && GlobalMyAddress2 != '') {
                GlobalMyAddress2 = '';
                $('#<%=chkSameasPresentAddress.ClientID %>')[0].checked = false;
                document.getElementById('<%=txtAddress1.ClientID %>').disabled = false;
                document.getElementById('<%=txtAddress2.ClientID %>').disabled = false;
                document.getElementById('<%=AreaUserControl1.FindControl("txtSearchControl").ClientID%>').disabled = false;
                document.getElementById('<%=txtPin.ClientID %>').disabled = false;
                document.getElementById('lk_btn_ctl00_ContentPlaceHolder1_Address1_AreaUserControl1').disabled = false;
                document.getElementById('<%=AreaUserControl1.FindControl("txtSearchControl").ClientID%>').value = '';
                document.getElementById('<%=AreaUserControl1.FindControl("_hiddenID").ClientID%>').value = 0;
                document.getElementById('<%=AreaUserControl1.FindControl("_hiddenText").ClientID%>').value = '';
                document.getElementById('<%=hdnAreaId.ClientID %>').value = 0;
                document.getElementById('<%=CityUserControl1.ClientID %>').value = '';
                document.getElementById('<%=hdncityid.ClientID %>').value = 0;
                document.getElementById('<%=StateUserControl1.ClientID %>').value = '';
                document.getElementById('<%=hdnstateid.ClientID %>').value = 0;
                document.getElementById('<%=CountryUserControl1.ClientID%>').value = '';
                document.getElementById('<%=hdncountryid.ClientID %>').value = 0;
                document.getElementById('<%=txtPin.ClientID %>').value = '';
                document.getElementById('<%=hdndistrictid.ClientID %>').value = 0;
                document.getElementById('<%=DistricUserControl1.ClientID%>').value = '';

            }
            if ($('#<%=chkCopyFromPresentAddress.ClientID %>')[0].checked == true && GlobalMyAddress3 != '') {
                GlobalMyAddress3 = '';
                $('#<%=chkCopyFromPresentAddress.ClientID%>')[0].checked = false
                document.getElementById('<%=txtAddress1.ClientID %>').disabled = false;
                document.getElementById('<%=txtAddress2.ClientID %>').disabled = false;
                document.getElementById('<%=AreaUserControl1.FindControl("txtSearchControl").ClientID%>').disabled = false;
                document.getElementById('<%=txtPin.ClientID %>').disabled = false;
                document.getElementById('lk_btn_ctl00_ContentPlaceHolder1_Address1_AreaUserControl1').disabled = false;
                document.getElementById('<%=AreaUserControl1.FindControl("txtSearchControl").ClientID%>').value = '';
                document.getElementById('<%=AreaUserControl1.FindControl("_hiddenID").ClientID%>').value = 0;
                document.getElementById('<%=AreaUserControl1.FindControl("_hiddenText").ClientID%>').value = '';
                document.getElementById('<%=hdnAreaId.ClientID %>').value = 0;
                document.getElementById('<%=CityUserControl1.ClientID %>').value = '';
                document.getElementById('<%=hdncityid.ClientID %>').value = 0;
                document.getElementById('<%=StateUserControl1.ClientID %>').value = '';
                document.getElementById('<%=hdnstateid.ClientID %>').value = 0;
                document.getElementById('<%=CountryUserControl1.ClientID%>').value = '';
                document.getElementById('<%=hdncountryid.ClientID %>').value = 0;
                document.getElementById('<%=txtPin.ClientID %>').value = '';
                document.getElementById('<%=hdndistrictid.ClientID %>').value = 0;
                document.getElementById('<%=DistricUserControl1.ClientID%>').value = '';

            }
        }
        if (area_name != undefined && area_name != '') {
            document.getElementById('<%=AreaUserControl1.FindControl("txtSearchControl").ClientID%>').value = area_name;
            document.getElementById('<%=AreaUserControl1.FindControl("_hiddenID").ClientID%>').value = area_id;
            document.getElementById('<%=AreaUserControl1.FindControl("_hiddenText").ClientID%>').value = area_name;
            $('#' + ctrlcom + '_Address1_AreaUserControl1_txtSearchControl').removeClass('red');
            document.getElementById('<%=txtPin.ClientID%>').className = 'grey';
            document.getElementById('<%=hdnAreaId.ClientID%>').value = area_id;
            document.getElementById('<%=CityUserControl1.ClientID %>').value = city_name;
            document.getElementById('<%=hdncityid.ClientID %>').value = city_id;
            document.getElementById('<%=StateUserControl1.ClientID %>').value = state_name;
            document.getElementById('<%=hdnstateid.ClientID %>').value = state_id;
            document.getElementById('<%=CountryUserControl1.ClientID%>').value = country_name;
            document.getElementById('<%=hdncountryid.ClientID %>').value = country_id;
            document.getElementById('<%=txtPin.ClientID %>').value = pincode;
            document.getElementById('<%=hdnpincode.ClientID %>').value = pincode;
            document.getElementById('<%=hdndistrictid.ClientID %>').value = District;
            document.getElementById('<%=DistricUserControl1.ClientID%>').value = District_name;
            if (localStorage.getItem("ED") != "" && localStorage.getItem("ED") != undefined && localStorage.getItem("ED") != null) {
                if (localStorage.getItem("ED") == "YRegistration.aspx") {
                    onExtendedAddress();
                }
            }
        }
        var SameasPresentAddress, CopyFromPresentAddress, Address1, Address2, Area, PinZip, City, District, State, Country, city_name, state_name, area_name, District_name, country_name, Adres_id, Adrs_rev_no, MobileNo1, MobileNo2, MobileNo3;
        SameasPresentAddress = false;
        CopyFromPresentAddress = false;
        Address1 = document.getElementById('<%=txtAddress1.ClientID %>').value;
        Address2 = document.getElementById('<%=txtAddress2.ClientID %>').value;
        Area = area_id;
        PinZip = pincode;
        City = city_id;
        State = state_id;
        Country = country_id;
        city_name = city_name;
        state_name = state_name;
        area_name = area_name;
        District_name = District_name;
        country_name = country_name;
        Adres_id = document.getElementById('<%=hdnaddress_id.ClientID %>').value;
        Adrs_rev_no = document.getElementById('<%=hdnadrs_rev_no.ClientID %>').value;
        var stdcode = document.getElementById('' + ctrlcom + '_Address1_hdnSTDCode').value;
        var isdcode = document.getElementById('' + ctrlcom + '_Address1_hdnISDCode').value;
        if (stdcode == '' || stdcode == null || stdcode == undefined) { stdcode = ''; }
        if (isdcode == '' || isdcode == null || isdcode == undefined) { isdcode = ''; }
        MobileNo1 = stdcode + document.getElementById('<%=txtMobile1.ClientID %>').value;
        MobileNo2 = isdcode + document.getElementById('<%=txtMobile2.ClientID %>').value;
        MobileNo3 = document.getElementById('<%=txtMobile3.ClientID %>').value;
        District = District;
        if (DivAdressRowIndex == 1) {
            multiDimAddress1(DivAdressRowIndex, SameasPresentAddress, CopyFromPresentAddress, Address1, Address2, Area, PinZip, City, District, State,
        Country, city_name, state_name, area_name, District_name, country_name, Adres_id, Adrs_rev_no, MobileNo1, MobileNo2, MobileNo3);
        }
        if (DivAdressRowIndex == 2) {
            multiDimAddress2(DivAdressRowIndex, SameasPresentAddress, CopyFromPresentAddress, Address1, Address2, Area, PinZip, City, District, State,
             Country, city_name, state_name, area_name, District_name, country_name, Adres_id, Adrs_rev_no, MobileNo1, MobileNo2, MobileNo3);
        }
        if (DivAdressRowIndex == 3) {
            multiDimAddress3(DivAdressRowIndex, SameasPresentAddress, CopyFromPresentAddress, Address1, Address2, Area, PinZip, City, District, State,
            Country, city_name, state_name, area_name, District_name, country_name, Adres_id, Adrs_rev_no, MobileNo1, MobileNo2, MobileNo3);
        }

    }
    function Address1values() {

        var SameasPresentAddress, CopyFromPresentAddress, Address1, Address2, Area, PinZip, City, District, State, Country, city_name, state_name, area_name, District_name, country_name, Adres_id, Adrs_rev_no, MobileNo1, MobileNo2;
        SameasPresentAddress = false;
        CopyFromPresentAddress = false;
        Address1 = document.getElementById('<%=txtAddress1.ClientID %>').value;
        Address2 = document.getElementById('<%=txtAddress2.ClientID %>').value;
        Area = document.getElementById('<%=AreaUserControl1.FindControl("_hiddenID").ClientID%>').value;
        PinZip = document.getElementById('<%=txtPin.ClientID %>').value;
        PinZip = document.getElementById('<%=hdnpincode.ClientID %>').value;
        City = document.getElementById('<%=hdncityid.ClientID %>').value;
        State = document.getElementById('<%=hdnstateid.ClientID %>').value;
        Country = document.getElementById('<%=hdncountryid.ClientID %>').value;
        city_name = document.getElementById('<%=CityUserControl1.ClientID %>').value;
        state_name = document.getElementById('<%=StateUserControl1.ClientID %>').value;
        area_name = document.getElementById('<%=AreaUserControl1.FindControl("_hiddenText").ClientID%>').value;
        District_name = document.getElementById('<%=DistricUserControl1.ClientID%>').value;
        country_name = document.getElementById('<%=CountryUserControl1.ClientID%>').value;
        Adres_id = document.getElementById('<%=hdnaddress_id.ClientID %>').value;
        Adrs_rev_no = document.getElementById('<%=hdnadrs_rev_no.ClientID %>').value;
        District = document.getElementById('<%=hdndistrictid.ClientID %>').value;
        var stdcode = document.getElementById('' + ctrlcom + '_Address1_hdnSTDCode').value;
        var isdcode = document.getElementById('' + ctrlcom + '_Address1_hdnISDCode').value;
        if (stdcode == '' || stdcode == null || stdcode == undefined) { stdcode = ''; }
        if (isdcode == '' || isdcode == null || isdcode == undefined) { isdcode = ''; }
        MobileNo1 = stdcode + document.getElementById('<%=txtMobile1.ClientID %>').value;
        MobileNo2 = isdcode + document.getElementById('<%=txtMobile2.ClientID %>').value;
        MobileNo3 = document.getElementById('<%=txtMobile3.ClientID %>').value;
        if (DivAdressRowIndex == 1) {
            if (Area > 0 || Address1 != '' || Address2 != '') {
                multiDimAddress1(DivAdressRowIndex, SameasPresentAddress, CopyFromPresentAddress, Address1, Address2, Area, PinZip, City, District, State,
        Country, city_name, state_name, area_name, District_name, country_name, Adres_id, Adrs_rev_no, MobileNo1, MobileNo2, MobileNo3);
            }
        }
        if (DivAdressRowIndex == 2) {
            if (Area > 0 || Address1 != '' || Address2 != '') {
                multiDimAddress2(DivAdressRowIndex, SameasPresentAddress, CopyFromPresentAddress, Address1, Address2, Area, PinZip, City, District, State,
             Country, city_name, state_name, area_name, District_name, country_name, Adres_id, Adrs_rev_no, MobileNo1, MobileNo2, MobileNo3);
            }
        }
        if (DivAdressRowIndex == 3) {
            multiDimAddress3(DivAdressRowIndex, SameasPresentAddress, CopyFromPresentAddress, Address1, Address2, Area, PinZip, City, District, State,
            Country, city_name, state_name, area_name, District_name, country_name, Adres_id, Adrs_rev_no, MobileNo1, MobileNo2, MobileNo3);
        }
    }
    function Address2values() {
        var SameasPresentAddress, CopyFromPresentAddress, Address1, Address2, Area, PinZip, City, District, State, Country, city_name, state_name, area_name, District_name, country_name, Adres_id, Adrs_rev_no, MobileNo1, MobileNo2;
        SameasPresentAddress = false;
        CopyFromPresentAddress = false;
        Address1 = document.getElementById('<%=txtAddress1.ClientID %>').value;
        Address2 = document.getElementById('<%=txtAddress2.ClientID %>').value;
        Area = document.getElementById('<%=AreaUserControl1.FindControl("_hiddenID").ClientID%>').value;
        PinZip = document.getElementById('<%=txtPin.ClientID %>').value;
        PinZip = document.getElementById('<%=hdnpincode.ClientID %>').value;
        City = document.getElementById('<%=hdncityid.ClientID %>').value;
        State = document.getElementById('<%=hdnstateid.ClientID %>').value;
        Country = document.getElementById('<%=hdncountryid.ClientID %>').value;
        city_name = document.getElementById('<%=CityUserControl1.ClientID %>').value;
        state_name = document.getElementById('<%=StateUserControl1.ClientID %>').value;
        area_name = document.getElementById('<%=AreaUserControl1.FindControl("_hiddenText").ClientID%>').value;
        District_name = document.getElementById('<%=DistricUserControl1.ClientID%>').value;
        country_name = document.getElementById('<%=CountryUserControl1.ClientID%>').value;
        Adres_id = document.getElementById('<%=hdnaddress_id.ClientID %>').value;
        Adrs_rev_no = document.getElementById('<%=hdnadrs_rev_no.ClientID %>').value;
        District = document.getElementById('<%=hdndistrictid.ClientID %>').value;
        var stdcode = document.getElementById('' + ctrlcom + '_Address1_hdnSTDCode').value;
        var isdcode = document.getElementById('' + ctrlcom + '_Address1_hdnISDCode').value;
        if (stdcode == '' || stdcode == null || stdcode == undefined) { stdcode = ''; }
        if (isdcode == '' || isdcode == null || isdcode == undefined) { isdcode = ''; }

        MobileNo1 = isdcode + document.getElementById('<%=txtMobile1.ClientID %>').value;
        MobileNo2 = isdcode + document.getElementById('<%=txtMobile2.ClientID %>').value;
        MobileNo3 = document.getElementById('<%=txtMobile3.ClientID %>').value;

        if (DivAdressRowIndex == 1) {
            if (Area > 0) {
                multiDimAddress1(DivAdressRowIndex, SameasPresentAddress, CopyFromPresentAddress, Address1, Address2, Area, PinZip, City, District, State,
        Country, city_name, state_name, area_name, District_name, country_name, Adres_id, Adrs_rev_no, Adrs_rev_no, MobileNo1, MobileNo2, MobileNo3);
            }
        }
        if (DivAdressRowIndex == 2) {
            if (Address1 != '' || Address2 != '') {
                multiDimAddress2(DivAdressRowIndex, SameasPresentAddress, CopyFromPresentAddress, Address1, Address2, Area, PinZip, City, District, State,
             Country, city_name, state_name, area_name, District_name, country_name, Adres_id, Adrs_rev_no, MobileNo1, MobileNo2, MobileNo3);
            }
        }
        if (DivAdressRowIndex == 3) {
            multiDimAddress3(DivAdressRowIndex, SameasPresentAddress, CopyFromPresentAddress, Address1, Address2, Area, PinZip, City, District, State,
            Country, city_name, state_name, area_name, District_name, country_name, Adres_id, Adrs_rev_no, MobileNo1, MobileNo2, MobileNo3);
        }
    }
    var DivAdressRowIndex = 1;
    $(document).ready(function (e) {
        if (document.getElementById('' + ctrlcom + '_hdnClientName').value != "UHWI") {
            if (document.getElementById('<%=hdnIsAssesment.ClientID %>').value == 'False') {
                $("#hgc").css("display", "none");
                $("#hemr").css("display", "none");
            }
            else if (document.getElementById('<%=hdnIsAssesment.ClientID %>').value == 'True') {
                $("#hgc").css("display", "block");
                $("#hemr").css("display", "block");
            }
        }

        $('#ddivAddress').css('display', 'block');
        $("#hgc").on("click", function () {
            $("#A1").removeClass("select");
            $("#A2").removeClass("select");
            $("#A3").removeClass("select");
            $("#hemr").removeClass("select");
            $("#hgc").addClass("select");
            $('#ddivAddress').css('display', 'none');
            $('#divUcEmr').css('display', 'none');
            $('#divEcGc').css('display', 'block');
            $('#divUcGc').css('display', 'block');
            $(".ucAddress-body").css("height", "200px");
            $("._registration .reff-panelH,.reg-contact-body").css("height", "176px");
        });
        $("#hemr").on("click", function () {
            $("#A1").removeClass("select");
            $("#A2").removeClass("select");
            $("#A3").removeClass("select");
            $("#hemr").addClass("select");
            $("#hgc").removeClass("select");
            $('#ddivAddress').css('display', 'none');
            $('#divUcEmr').css('display', 'block');
            $('#divEcGc').css('display', 'block');
            $('#divUcGc').css('display', 'none');
            $(".ucAddress-body").css("height", "200px");
            $("._registration .reff-panelH,.reg-contact-body").css("height", "176px");
        });

        $("#DivAdressadditem li").on("click", function () {


            $('#ddivAddress').css('display', 'block');
            $('#divEcGc').css('display', 'none');
            $('#divUcGc').css('display', 'none');
            $('#divUcEmr').css('display', 'none');
            $(".ucAddress-body").css("height", "149px");
            $("._registration .reff-panelH,.reg-contact-body").css("height", "162px");

            $("#hemr").removeClass("select");
            $("#hgc").removeClass("select");

            if (document.getElementById('' + ctrlcom + '_Address1_hdnnationaladdr').value != "Y") {
                var RowIndex = 0;
                var CurrentTar = $(this).data("tar");
                DivAdressRowIndex = $(this).data("tar").substring(9, 7);
                DivAdressRowIndex = DivAdressRowIndex == 0 ? 1 : DivAdressRowIndex;
                if (DivAdressRowIndex == 1) {
                    $('#divchkCopyFromPresentAddress')[0].style.display = "none";
                    $('#divchkSameasPresentAddress')[0].style.display = "none";
                    $('#divAddressType')[0].style.display = "none";
                    $('#divAddressType1')[0].style.display = "none";
                    if (GlobalMyAddress1 != '') {
                        $.each(GlobalMyAddress1, function (ArrIndex, ChngRowIndex) {
                            if (ChngRowIndex.rowIndex == DivAdressRowIndex) {
                                document.getElementById('<%=txtAddress1.ClientID %>').value = ChngRowIndex.Address1;
                                document.getElementById('<%=txtAddress2.ClientID %>').value = ChngRowIndex.Address2;
                                document.getElementById('<%=AreaUserControl1.FindControl("txtSearchControl").ClientID%>').value = ChngRowIndex.area_name;
                                document.getElementById('<%=AreaUserControl1.FindControl("_hiddenID").ClientID%>').value = ChngRowIndex.Area;
                                document.getElementById('<%=AreaUserControl1.FindControl("_hiddenText").ClientID%>').value = ChngRowIndex.area_name;
                                document.getElementById('<%=hdnAreaId.ClientID %>').value = ChngRowIndex.Area;
                                document.getElementById('<%=CityUserControl1.ClientID %>').value = ChngRowIndex.city_name;
                                document.getElementById('<%=hdncityid.ClientID %>').value = ChngRowIndex.City;
                                document.getElementById('<%=StateUserControl1.ClientID %>').value = ChngRowIndex.state_name;
                                document.getElementById('<%=hdnstateid.ClientID %>').value = ChngRowIndex.State;
                                document.getElementById('<%=CountryUserControl1.ClientID%>').value = ChngRowIndex.country_name;
                                document.getElementById('<%=hdncountryid.ClientID %>').value = ChngRowIndex.Country;
                                document.getElementById('<%=DistricUserControl1.ClientID%>').value = ChngRowIndex.District_name;
                                document.getElementById('<%=hdndistrictid.ClientID %>').value = ChngRowIndex.District;
                                document.getElementById('<%=txtPin.ClientID %>').value = ChngRowIndex.PinZip;
                                document.getElementById('<%=hdnpincode.ClientID %>').value = ChngRowIndex.PinZip;
                                document.getElementById('<%=hdnaddress_id.ClientID %>').value = ChngRowIndex.Adres_id;
                                document.getElementById('<%=hdnadrs_rev_no.ClientID %>').value = ChngRowIndex.Adrs_rev_no;
                                document.getElementById('<%=txtAddress1.ClientID %>').disabled = false;
                                document.getElementById('<%=txtAddress2.ClientID %>').disabled = false;
                                document.getElementById('<%=AreaUserControl1.FindControl("txtSearchControl").ClientID%>').disabled = false;
                                document.getElementById('<%=txtPin.ClientID %>').disabled = false;
                                document.getElementById('lk_btn_ctl00_ContentPlaceHolder1_Address1_AreaUserControl1').disabled = false;
                            }
                            else {
                                document.getElementById('<%=txtAddress1.ClientID %>').value = ChngRowIndex.Address1;
                                document.getElementById('<%=txtAddress2.ClientID %>').value = ChngRowIndex.Address2;
                                document.getElementById('<%=AreaUserControl1.FindControl("txtSearchControl").ClientID%>').value = ChngRowIndex.area_name;
                                document.getElementById('<%=AreaUserControl1.FindControl("_hiddenID").ClientID%>').value = ChngRowIndex.Area;
                                document.getElementById('<%=AreaUserControl1.FindControl("_hiddenText").ClientID%>').value = ChngRowIndex.area_name;
                                document.getElementById('<%=hdnAreaId.ClientID %>').value = ChngRowIndex.Area;
                                document.getElementById('<%=CityUserControl1.ClientID %>').value = ChngRowIndex.city_name;
                                document.getElementById('<%=hdncityid.ClientID %>').value = ChngRowIndex.City;
                                document.getElementById('<%=StateUserControl1.ClientID %>').value = ChngRowIndex.state_name;
                                document.getElementById('<%=hdnstateid.ClientID %>').value = ChngRowIndex.State;
                                document.getElementById('<%=CountryUserControl1.ClientID%>').value = ChngRowIndex.country_name;
                                document.getElementById('<%=hdncountryid.ClientID %>').value = ChngRowIndex.Country;
                                document.getElementById('<%=DistricUserControl1.ClientID%>').value = ChngRowIndex.District_name;
                                document.getElementById('<%=hdndistrictid.ClientID %>').value = ChngRowIndex.District;
                                document.getElementById('<%=txtPin.ClientID %>').value = ChngRowIndex.PinZip;
                                document.getElementById('<%=hdnpincode.ClientID %>').value = ChngRowIndex.PinZip;
                                document.getElementById('<%=hdnaddress_id.ClientID %>').value = ChngRowIndex.Adres_id;
                                document.getElementById('<%=hdnadrs_rev_no.ClientID %>').value = ChngRowIndex.Adrs_rev_no;
                                document.getElementById('<%=txtAddress1.ClientID %>').disabled = false;
                                document.getElementById('<%=txtAddress2.ClientID %>').disabled = false;
                                document.getElementById('<%=AreaUserControl1.FindControl("txtSearchControl").ClientID%>').disabled = false;
                                document.getElementById('<%=txtPin.ClientID %>').disabled = false;
                                document.getElementById('lk_btn_ctl00_ContentPlaceHolder1_Address1_AreaUserControl1').disabled = false;
                            }
                        });
                        var form_name = document.getElementById('' + ctrlcom + '_Address1_hdndocname').value;
                        if (form_name == 'REG') {
                            if ((getParameterByName("MODE") == "VIEW" || document.getElementById('chkold').checked == true)) {
                                document.getElementById('<%=txtAddress1.ClientID %>').disabled = true;
                                document.getElementById('<%=txtAddress2.ClientID %>').disabled = true;
                                document.getElementById('<%=AreaUserControl1.FindControl("txtSearchControl").ClientID%>').disabled = true;
                                document.getElementById('<%=txtPin.ClientID %>').disabled = true;
                                document.getElementById('lk_btn_ctl00_ContentPlaceHolder1_Address1_AreaUserControl1').disabled = true;
                            }
                        }
                    }
                    else {
                        document.getElementById('<%=txtAddress1.ClientID %>').disabled = false;
                        document.getElementById('<%=txtAddress2.ClientID %>').disabled = false;
                        document.getElementById('<%=AreaUserControl1.FindControl("txtSearchControl").ClientID%>').disabled = false;
                        document.getElementById('<%=txtPin.ClientID %>').disabled = false;
                        document.getElementById('lk_btn_ctl00_ContentPlaceHolder1_Address1_AreaUserControl1').disabled = false;
                        document.getElementById('<%=txtAddress1.ClientID %>').value = ''; ;
                        document.getElementById('<%=txtAddress2.ClientID %>').value = '';
                        document.getElementById('<%=AreaUserControl1.FindControl("txtSearchControl").ClientID%>').value = '';
                        document.getElementById('<%=AreaUserControl1.FindControl("_hiddenID").ClientID%>').value = 0;
                        document.getElementById('<%=AreaUserControl1.FindControl("_hiddenText").ClientID%>').value = '';
                        document.getElementById('<%=hdnAreaId.ClientID %>').value = 0;
                        document.getElementById('<%=CityUserControl1.ClientID %>').value = '';
                        document.getElementById('<%=hdncityid.ClientID %>').value = 0;
                        document.getElementById('<%=StateUserControl1.ClientID %>').value = '';
                        document.getElementById('<%=hdnstateid.ClientID %>').value = 0;
                        document.getElementById('<%=CountryUserControl1.ClientID%>').value = '';
                        document.getElementById('<%=hdncountryid.ClientID %>').value = 0;
                        document.getElementById('<%=DistricUserControl1.ClientID%>').value = '';
                        document.getElementById('<%=hdndistrictid.ClientID %>').value = 0;
                        document.getElementById('<%=txtPin.ClientID %>').value = '';
                        document.getElementById('<%=hdnaddress_id.ClientID %>').value = 0;
                        document.getElementById('<%=hdnadrs_rev_no.ClientID %>').value = 0;
                    }
                }

                if (DivAdressRowIndex == 1) {
                    if (GlobalMyAddress1 == '') {
                        DivAdressRowIndex = 1;
                        $("#A1").addClass("select");
                        $("#A2").removeClass("select");
                        $("#A3").removeClass("select");
                    }
                    else {
                        DivAdressRowIndex = 1;
                        $("#A1").addClass("select");
                        $("#A2").removeClass("select");
                        $("#A3").removeClass("select");
                    }
                }
                if (getParameterByName("MODE") == "VIEW") {
                    document.getElementById('' + ctrlcom + '_Address1_txtAddress1').disabled = true;
                    document.getElementById('' + ctrlcom + '_Address1_AreaUserControl1_txtSearchControl').disabled = true;
                    document.getElementById('lk_btn_ctl00_ContentPlaceHolder1_Address1_AreaUserControl1').disabled = true;
                    document.getElementById('' + ctrlcom + '_Address1_txtPin').disabled = true;
                }
                else {
                    document.getElementById('' + ctrlcom + '_Address1_txtAddress1').disabled = false;
                    document.getElementById('' + ctrlcom + '_Address1_AreaUserControl1_txtSearchControl').disabled = false;
                    document.getElementById('lk_btn_ctl00_ContentPlaceHolder1_Address1_AreaUserControl1').disabled = false;
                    document.getElementById('' + ctrlcom + '_Address1_txtPin').disabled = false;
                }

                if (DivAdressRowIndex == 2) {
                    if (GlobalMyAddress1 == '') {
                        DivAdressRowIndex = 1;
                        $("#A1").addClass("select");
                        $("#A2").removeClass("select");
                        $("#A3").removeClass("select");
                    }
                    else {
                        DivAdressRowIndex = 2;
                        $("#A1").removeClass("select");
                        $("#A2").addClass("select");
                        $("#A3").removeClass("select");
                    }
                }
                if (DivAdressRowIndex == 3) {
                    if (GlobalMyAddress1 == '') {
                        DivAdressRowIndex = 1;
                        $("#A1").addClass("select");
                        $("#A2").removeClass("select");
                        $("#A3").removeClass("select");
                    }
                    else if (GlobalMyAddress2 == '') {
                        DivAdressRowIndex = 2;
                        $("#A2").addClass("select");
                        $("#A1").removeClass("select");
                        $("#A3").removeClass("select");
                    }
                    else {
                        $("#A3").addClass("select");
                        $("#A2").removeClass("select");
                        $("#A1").removeClass("select");
                    }
                }


                if (DivAdressRowIndex == 2) {
                    $('#divchkSameasPresentAddress')[0].style.display = "table-cell";
                    $('._opdquick .reff-panelH,.reg-contact-body').css("height", "183px");
                    $('#divchkCopyFromPresentAddress')[0].style.display = "none";
                    $('#divAddressType')[0].style.display = "none";
                    $('#divAddressType1')[0].style.display = "none";
                    if ($('#<%=chkSameasPresentAddress.ClientID %>')[0].checked == false) {
                        document.getElementById('<%=txtAddress1.ClientID %>').disabled = false;
                        document.getElementById('<%=txtAddress2.ClientID %>').disabled = false;

                        document.getElementById('<%=AreaUserControl1.FindControl("txtSearchControl").ClientID%>').disabled = false;
                        document.getElementById('lk_btn_ctl00_ContentPlaceHolder1_Address1_AreaUserControl1').disabled = false;
                        document.getElementById('<%=txtPin.ClientID %>').disabled = false;
                    }
                    else {

                        document.getElementById('<%=txtAddress1.ClientID %>').disabled = true;
                        document.getElementById('<%=txtAddress2.ClientID %>').disabled = true;
                        document.getElementById('<%=AreaUserControl1.FindControl("txtSearchControl").ClientID%>').disabled = true;
                        document.getElementById('lk_btn_ctl00_ContentPlaceHolder1_Address1_AreaUserControl1').disabled = true;
                        document.getElementById('<%=txtPin.ClientID %>').disabled = true;

                    }
                    if (getParameterByName("MODE") == "VIEW") {

                        document.getElementById('' + ctrlcom + '_Address1_txtAddress1').disabled = true;
                        document.getElementById('' + ctrlcom + '_Address1_AreaUserControl1_txtSearchControl').disabled = true;
                        document.getElementById('lk_btn_ctl00_ContentPlaceHolder1_Address1_AreaUserControl1').disabled = true;
                        document.getElementById('' + ctrlcom + '_Address1_txtPin').disabled = true;

                    }
                    else {

                        document.getElementById('' + ctrlcom + '_Address1_txtAddress1').disabled = false;
                        document.getElementById('' + ctrlcom + '_Address1_AreaUserControl1_txtSearchControl').disabled = false;
                        document.getElementById('lk_btn_ctl00_ContentPlaceHolder1_Address1_AreaUserControl1').disabled = false;
                        document.getElementById('' + ctrlcom + '_Address1_txtPin').disabled = false;

                    }

                    var form_name = document.getElementById('' + ctrlcom + '_Address1_hdndocname').value;
                    if (form_name == 'REG') {
                        if ((getParameterByName("MODE") == "VIEW" || document.getElementById('chkold').checked == true)) {
                            document.getElementById('<%=txtAddress1.ClientID %>').disabled = true;
                            document.getElementById('<%=txtAddress2.ClientID %>').disabled = true;
                            document.getElementById('<%=AreaUserControl1.FindControl("txtSearchControl").ClientID%>').disabled = true;
                            document.getElementById('lk_btn_ctl00_ContentPlaceHolder1_Address1_AreaUserControl1').disabled = true;
                            document.getElementById('<%=txtPin.ClientID %>').disabled = true;
                        }
                    }

                    if (GlobalMyAddress2 != '') {
                        $.each(GlobalMyAddress2, function (ArrIndex, ChngRowIndex) {

                            if (ChngRowIndex.rowIndex == DivAdressRowIndex) {
                                document.getElementById('<%=txtAddress1.ClientID %>').value = ChngRowIndex.Address1;
                                document.getElementById('<%=txtAddress2.ClientID %>').value = ChngRowIndex.Address2;
                                document.getElementById('<%=AreaUserControl1.FindControl("txtSearchControl").ClientID%>').value = ChngRowIndex.area_name;
                                document.getElementById('<%=AreaUserControl1.FindControl("_hiddenID").ClientID%>').value = ChngRowIndex.Area;
                                document.getElementById('<%=AreaUserControl1.FindControl("_hiddenText").ClientID%>').value = ChngRowIndex.area_name;
                                document.getElementById('<%=hdnAreaId.ClientID %>').value = ChngRowIndex.Area;
                                document.getElementById('<%=CityUserControl1.ClientID %>').value = ChngRowIndex.city_name;
                                document.getElementById('<%=hdncityid.ClientID %>').value = ChngRowIndex.City;
                                document.getElementById('<%=StateUserControl1.ClientID %>').value = ChngRowIndex.state_name;
                                document.getElementById('<%=hdnstateid.ClientID %>').value = ChngRowIndex.State;
                                document.getElementById('<%=CountryUserControl1.ClientID%>').value = ChngRowIndex.country_name;
                                document.getElementById('<%=hdncountryid.ClientID %>').value = ChngRowIndex.Country;
                                document.getElementById('<%=DistricUserControl1.ClientID%>').value = ChngRowIndex.District_name;
                                document.getElementById('<%=hdndistrictid.ClientID %>').value = ChngRowIndex.District;
                                document.getElementById('<%=txtPin.ClientID %>').value = ChngRowIndex.PinZip;
                                document.getElementById('<%=hdnpincode.ClientID %>').value = ChngRowIndex.PinZip;
                                document.getElementById('<%=hdnaddress_id.ClientID %>').value = ChngRowIndex.Adres_id;
                                document.getElementById('<%=hdnadrs_rev_no.ClientID %>').value = ChngRowIndex.Adrs_rev_no;
                            }
                            else {
                                document.getElementById('<%=txtAddress1.ClientID %>').value = ChngRowIndex.Address1;
                                document.getElementById('<%=txtAddress2.ClientID %>').value = ChngRowIndex.Address2;
                                document.getElementById('<%=AreaUserControl1.FindControl("txtSearchControl").ClientID%>').value = ChngRowIndex.area_name;
                                document.getElementById('<%=AreaUserControl1.FindControl("_hiddenID").ClientID%>').value = ChngRowIndex.Area;
                                document.getElementById('<%=AreaUserControl1.FindControl("_hiddenText").ClientID%>').value = ChngRowIndex.area_name;
                                document.getElementById('<%=hdnAreaId.ClientID %>').value = ChngRowIndex.Area;
                                document.getElementById('<%=CityUserControl1.ClientID %>').value = ChngRowIndex.city_name;
                                document.getElementById('<%=hdncityid.ClientID %>').value = ChngRowIndex.City;
                                document.getElementById('<%=StateUserControl1.ClientID %>').value = ChngRowIndex.state_name;
                                document.getElementById('<%=hdnstateid.ClientID %>').value = ChngRowIndex.State;
                                document.getElementById('<%=CountryUserControl1.ClientID%>').value = ChngRowIndex.country_name;
                                document.getElementById('<%=hdncountryid.ClientID %>').value = ChngRowIndex.Country;
                                document.getElementById('<%=DistricUserControl1.ClientID%>').value = ChngRowIndex.District_name;
                                document.getElementById('<%=hdndistrictid.ClientID %>').value = ChngRowIndex.District;
                                document.getElementById('<%=txtPin.ClientID %>').value = ChngRowIndex.PinZip;
                                document.getElementById('<%=hdnpincode.ClientID %>').value = ChngRowIndex.PinZip;
                                document.getElementById('<%=hdnaddress_id.ClientID %>').value = ChngRowIndex.Adres_id;
                                document.getElementById('<%=hdnadrs_rev_no.ClientID %>').value = ChngRowIndex.Adrs_rev_no;
                            }
                        });

                    }
                    else {
                        document.getElementById('<%=txtAddress1.ClientID %>').value = ''; ;
                        document.getElementById('<%=txtAddress2.ClientID %>').value = '';
                        document.getElementById('<%=AreaUserControl1.FindControl("txtSearchControl").ClientID%>').value = '';
                        document.getElementById('<%=AreaUserControl1.FindControl("_hiddenID").ClientID%>').value = 0;
                        document.getElementById('<%=AreaUserControl1.FindControl("_hiddenText").ClientID%>').value = '';
                        document.getElementById('<%=hdnAreaId.ClientID %>').value = 0;
                        document.getElementById('<%=CityUserControl1.ClientID %>').value = '';
                        document.getElementById('<%=hdncityid.ClientID %>').value = 0;
                        document.getElementById('<%=StateUserControl1.ClientID %>').value = '';
                        document.getElementById('<%=hdnstateid.ClientID %>').value = 0;
                        document.getElementById('<%=CountryUserControl1.ClientID%>').value = '';
                        document.getElementById('<%=hdncountryid.ClientID %>').value = 0;
                        document.getElementById('<%=DistricUserControl1.ClientID%>').value = '';
                        document.getElementById('<%=hdndistrictid.ClientID %>').value = 0;
                        document.getElementById('<%=txtPin.ClientID %>').value = '';
                        document.getElementById('<%=hdnaddress_id.ClientID %>').value = 0;
                        document.getElementById('<%=hdnadrs_rev_no.ClientID %>').value = 0;
                    }
                }
                if (DivAdressRowIndex == 3) {
                    $('#divchkCopyFromPresentAddress')[0].style.display = "none";
                    $('#divchkSameasPresentAddress')[0].style.display = "none";
                    $('#divAddressType')[0].style.display = "flex";
                    $('#divAddressType1')[0].style.display = "flex";
                    $('._opdquick .reff-panelH,.reg-contact-body').css("height", "165px");
                    if ($('#<%=chkCopyFromPresentAddress.ClientID%>')[0].checked == false) {
                        document.getElementById('<%=txtAddress1.ClientID %>').disabled = false;
                        document.getElementById('<%=txtAddress2.ClientID %>').disabled = false;
                        document.getElementById('<%=AreaUserControl1.FindControl("txtSearchControl").ClientID%>').disabled = false;
                        document.getElementById('lk_btn_ctl00_ContentPlaceHolder1_Address1_AreaUserControl1').disabled = false;
                        document.getElementById('<%=txtPin.ClientID %>').disabled = false;
                    } else {

                        document.getElementById('<%=txtAddress1.ClientID %>').disabled = true;
                        document.getElementById('<%=txtAddress2.ClientID %>').disabled = true;
                        document.getElementById('<%=AreaUserControl1.FindControl("txtSearchControl").ClientID%>').disabled = true;
                        document.getElementById('lk_btn_ctl00_ContentPlaceHolder1_Address1_AreaUserControl1').disabled = true;
                        document.getElementById('<%=txtPin.ClientID %>').disabled = true;
                    }
                    var form_name = document.getElementById('' + ctrlcom + '_Address1_hdndocname').value;
                    if (form_name == 'REG') {
                        if ((getParameterByName("MODE") == "VIEW" || document.getElementById('chkold').checked == true)) {
                            document.getElementById('<%=txtAddress1.ClientID %>').disabled = true;
                            document.getElementById('<%=txtAddress2.ClientID %>').disabled = true;
                            document.getElementById('<%=AreaUserControl1.FindControl("txtSearchControl").ClientID%>').disabled = true;
                            document.getElementById('lk_btn_ctl00_ContentPlaceHolder1_Address1_AreaUserControl1').disabled = true;
                            document.getElementById('<%=txtPin.ClientID %>').disabled = true;
                        }
                    }
                    if (getParameterByName("MODE") == "VIEW") {

                        document.getElementById('' + ctrlcom + '_Address1_txtAddress1').disabled = true;
                        document.getElementById('' + ctrlcom + '_Address1_AreaUserControl1_txtSearchControl').disabled = true;
                        document.getElementById('lk_btn_ctl00_ContentPlaceHolder1_Address1_AreaUserControl1').disabled = true;
                        document.getElementById('' + ctrlcom + '_Address1_txtPin').disabled = true;

                    }
                    else {

                        document.getElementById('' + ctrlcom + '_Address1_txtAddress1').disabled = false;
                        document.getElementById('' + ctrlcom + '_Address1_AreaUserControl1_txtSearchControl').disabled = false;
                        document.getElementById('lk_btn_ctl00_ContentPlaceHolder1_Address1_AreaUserControl1').disabled = false;
                        document.getElementById('' + ctrlcom + '_Address1_txtPin').disabled = false;
                    }
                    if (GlobalMyAddress3 != '') {
                        $.each(GlobalMyAddress3, function (ArrIndex, ChngRowIndex) {

                            if (ChngRowIndex.rowIndex == DivAdressRowIndex) {
                                document.getElementById('<%=txtAddress1.ClientID %>').value = ChngRowIndex.Address1;
                                document.getElementById('<%=txtAddress2.ClientID %>').value = ChngRowIndex.Address2;
                                document.getElementById('<%=AreaUserControl1.FindControl("txtSearchControl").ClientID%>').value = ChngRowIndex.area_name;
                                document.getElementById('<%=AreaUserControl1.FindControl("_hiddenID").ClientID%>').value = ChngRowIndex.Area;
                                document.getElementById('<%=AreaUserControl1.FindControl("_hiddenText").ClientID%>').value = ChngRowIndex.area_name;
                                document.getElementById('<%=hdnAreaId.ClientID %>').value = ChngRowIndex.Area;
                                document.getElementById('<%=CityUserControl1.ClientID %>').value = ChngRowIndex.city_name;
                                document.getElementById('<%=hdncityid.ClientID %>').value = ChngRowIndex.City;
                                document.getElementById('<%=StateUserControl1.ClientID %>').value = ChngRowIndex.state_name;
                                document.getElementById('<%=hdnstateid.ClientID %>').value = ChngRowIndex.State;
                                document.getElementById('<%=CountryUserControl1.ClientID%>').value = ChngRowIndex.country_name;
                                document.getElementById('<%=hdncountryid.ClientID %>').value = ChngRowIndex.Country;
                                document.getElementById('<%=DistricUserControl1.ClientID%>').value = ChngRowIndex.District_name;
                                document.getElementById('<%=hdndistrictid.ClientID %>').value = ChngRowIndex.District;
                                document.getElementById('<%=txtPin.ClientID %>').value = ChngRowIndex.PinZip;
                                document.getElementById('<%=hdnpincode.ClientID %>').value = ChngRowIndex.PinZip;
                                document.getElementById('<%=hdnaddress_id.ClientID %>').value = ChngRowIndex.Adres_id;
                                document.getElementById('<%=hdnadrs_rev_no.ClientID %>').value = ChngRowIndex.Adrs_rev_no;
                            }
                            else {
                                document.getElementById('<%=txtAddress1.ClientID %>').value = ChngRowIndex.Address1;
                                document.getElementById('<%=txtAddress2.ClientID %>').value = ChngRowIndex.Address2;
                                document.getElementById('<%=AreaUserControl1.FindControl("txtSearchControl").ClientID%>').value = ChngRowIndex.area_name;
                                document.getElementById('<%=AreaUserControl1.FindControl("_hiddenID").ClientID%>').value = ChngRowIndex.Area;
                                document.getElementById('<%=AreaUserControl1.FindControl("_hiddenText").ClientID%>').value = ChngRowIndex.area_name;
                                document.getElementById('<%=hdnAreaId.ClientID %>').value = ChngRowIndex.Area;
                                document.getElementById('<%=CityUserControl1.ClientID %>').value = ChngRowIndex.city_name;
                                document.getElementById('<%=hdncityid.ClientID %>').value = ChngRowIndex.City;
                                document.getElementById('<%=StateUserControl1.ClientID %>').value = ChngRowIndex.state_name;
                                document.getElementById('<%=hdnstateid.ClientID %>').value = ChngRowIndex.State;
                                document.getElementById('<%=CountryUserControl1.ClientID%>').value = ChngRowIndex.country_name;
                                document.getElementById('<%=hdncountryid.ClientID %>').value = ChngRowIndex.Country;
                                document.getElementById('<%=DistricUserControl1.ClientID%>').value = ChngRowIndex.District_name;
                                document.getElementById('<%=hdndistrictid.ClientID %>').value = ChngRowIndex.District;
                                document.getElementById('<%=txtPin.ClientID %>').value = ChngRowIndex.PinZip;
                                document.getElementById('<%=hdnpincode.ClientID %>').value = ChngRowIndex.PinZip;
                                document.getElementById('<%=hdnaddress_id.ClientID %>').value = ChngRowIndex.Adres_id;
                                document.getElementById('<%=hdnadrs_rev_no.ClientID %>').value = ChngRowIndex.Adrs_rev_no;
                            }
                        });
                    }
                    else {
                        document.getElementById('<%=txtAddress1.ClientID %>').value = ''; ;
                        document.getElementById('<%=txtAddress2.ClientID %>').value = '';
                        document.getElementById('<%=AreaUserControl1.FindControl("txtSearchControl").ClientID%>').value = '';
                        document.getElementById('<%=AreaUserControl1.FindControl("_hiddenID").ClientID%>').value = 0;
                        document.getElementById('<%=AreaUserControl1.FindControl("_hiddenText").ClientID%>').value = '';
                        document.getElementById('<%=hdnAreaId.ClientID %>').value = 0;
                        document.getElementById('<%=CityUserControl1.ClientID %>').value = '';
                        document.getElementById('<%=hdncityid.ClientID %>').value = 0;
                        document.getElementById('<%=StateUserControl1.ClientID %>').value = '';
                        document.getElementById('<%=hdnstateid.ClientID %>').value = 0;
                        document.getElementById('<%=CountryUserControl1.ClientID%>').value = '';
                        document.getElementById('<%=hdncountryid.ClientID %>').value = 0;
                        document.getElementById('<%=DistricUserControl1.ClientID%>').value = '';
                        document.getElementById('<%=hdndistrictid.ClientID %>').value = 0;
                        document.getElementById('<%=txtPin.ClientID %>').value = '';
                        document.getElementById('<%=hdnaddress_id.ClientID %>').value = 0;
                        document.getElementById('<%=hdnadrs_rev_no.ClientID %>').value = 0;
                    }
                }
            }
        });
    });

    var GlobalMyAddress1 = new Array();
    var myMultiAddress1 = new Array();
    var multiDimAddress11 = 0;
    function multiDimAddress1(rowIndex, SameasPresentAddress, CopyFromPresentAddress, Address1, Address2, Area, PinZip, City,
     District, State, Country, city_name, state_name, area_name, District_name, country_name, Adres_id, Adrs_rev_no, MobileNo1, MobileNo2, MobileNo3) {

        var c = multiDimAddress11;
        myMultiAddress1[c] = new Array(6);
        myMultiAddress1[c]["SameasPresentAddress"] = SameasPresentAddress;
        myMultiAddress1[c]["rowIndex"] = rowIndex;
        myMultiAddress1[c]["CopyFromPresentAddress"] = CopyFromPresentAddress;
        myMultiAddress1[c]["Address1"] = Address1;
        myMultiAddress1[c]["Address2"] = Address2;
        myMultiAddress1[c]["Area"] = Area;
        myMultiAddress1[c]["PinZip"] = PinZip;
        myMultiAddress1[c]["City"] = City;
        myMultiAddress1[c]["District"] = District;
        myMultiAddress1[c]["State"] = State;
        myMultiAddress1[c]["Country"] = Country;
        myMultiAddress1[c]["country_name"] = country_name;
        myMultiAddress1[c]["city_name"] = city_name;
        myMultiAddress1[c]["state_name"] = state_name;
        myMultiAddress1[c]["area_name"] = area_name;
        myMultiAddress1[c]["District_name"] = District_name;
        myMultiAddress1[c]["Adres_id"] = Adres_id;
        myMultiAddress1[c]["Adrs_rev_no"] = Adrs_rev_no;
        myMultiAddress1[c]["Mobile_No1"] = MobileNo1;
        myMultiAddress1[c]["Mobile_No2"] = MobileNo2;
        myMultiAddress1[c]["Mobile_No3"] = MobileNo3;
        GlobalMyAddress1 = myMultiAddress1;
    }

    var GlobalMyAddress2 = new Array();
    var myMultiAddress2 = new Array();
    var multiDimAddress22 = 0;

    function multiDimAddress2(rowIndex, SameasPresentAddress, CopyFromPresentAddress, Address1, Address2, Area, PinZip, City, District,
     State, Country, city_name, state_name, area_name, District_name, country_name, Adres_id, Adrs_rev_no, MobileNo1, MobileNo2, MobileNo3) {

        var c = multiDimAddress22;
        myMultiAddress2[c] = new Array(6);
        myMultiAddress2[c]["SameasPresentAddress"] = SameasPresentAddress;
        myMultiAddress2[c]["rowIndex"] = rowIndex;
        myMultiAddress2[c]["CopyFromPresentAddress"] = CopyFromPresentAddress;
        myMultiAddress2[c]["Address1"] = Address1;
        myMultiAddress2[c]["Address2"] = Address2;
        myMultiAddress2[c]["Area"] = Area;
        myMultiAddress2[c]["PinZip"] = PinZip;
        myMultiAddress2[c]["City"] = City;
        myMultiAddress2[c]["District"] = District;
        myMultiAddress2[c]["State"] = State;
        myMultiAddress2[c]["Country"] = Country;
        myMultiAddress2[c]["country_name"] = country_name;
        myMultiAddress2[c]["city_name"] = city_name;
        myMultiAddress2[c]["state_name"] = state_name;
        myMultiAddress2[c]["area_name"] = area_name;
        myMultiAddress2[c]["District_name"] = District_name;
        myMultiAddress2[c]["Adres_id"] = Adres_id;
        myMultiAddress2[c]["Adrs_rev_no"] = Adrs_rev_no;
        myMultiAddress2[c]["Mobile_No1"] = MobileNo1;
        myMultiAddress2[c]["Mobile_No2"] = MobileNo2;
        myMultiAddress2[c]["Mobile_No3"] = MobileNo3;
        GlobalMyAddress2 = myMultiAddress2;
    }



    var GlobalMyAddress3 = new Array();
    var myMultiAddress3 = new Array();
    var multiDimAddress33 = 0;

    function multiDimAddress3(rowIndex, SameasPresentAddress, CopyFromPresentAddress, Address1, Address2,
     Area, PinZip, City, District, State, Country, city_name, state_name, area_name, District_name, country_name, Adres_id, Adrs_rev_no, MobileNo1, MobileNo2, MobileNo3) {

        var c = multiDimAddress33;
        myMultiAddress3[c] = new Array(6);
        myMultiAddress3[c]["SameasPresentAddress"] = SameasPresentAddress;
        myMultiAddress3[c]["rowIndex"] = rowIndex;
        myMultiAddress3[c]["CopyFromPresentAddress"] = CopyFromPresentAddress;
        myMultiAddress3[c]["Address1"] = Address1;
        myMultiAddress3[c]["Address2"] = Address2;
        myMultiAddress3[c]["Area"] = Area;
        myMultiAddress3[c]["PinZip"] = PinZip;
        myMultiAddress3[c]["City"] = City;
        myMultiAddress3[c]["District"] = District;
        myMultiAddress3[c]["State"] = State;
        myMultiAddress3[c]["Country"] = Country;
        myMultiAddress3[c]["country_name"] = country_name;
        myMultiAddress3[c]["city_name"] = city_name;
        myMultiAddress3[c]["state_name"] = state_name;
        myMultiAddress3[c]["area_name"] = area_name;
        myMultiAddress3[c]["District_name"] = District_name;
        myMultiAddress3[c]["Adres_id"] = Adres_id;
        myMultiAddress3[c]["Adrs_rev_no"] = Adrs_rev_no;
        myMultiAddress3[c]["Mobile_No1"] = MobileNo1;
        myMultiAddress3[c]["Mobile_No2"] = MobileNo2;
        myMultiAddress3[c]["Mobile_No3"] = MobileNo3;
        GlobalMyAddress3 = myMultiAddress3;
    }

    function samepresent() {
        if ($('#<%=chkSameasPresentAddress.ClientID %>')[0].checked == true) {
            if (DivAdressRowIndex == 2) {
                document.getElementById('<%=txtAddress1.ClientID %>').disabled = true;
                document.getElementById('<%=txtAddress2.ClientID %>').disabled = true;
                document.getElementById('<%=AreaUserControl1.FindControl("txtSearchControl").ClientID%>').disabled = true;
                document.getElementById('<%=txtPin.ClientID %>').disabled = true;
                document.getElementById('lk_btn_ctl00_ContentPlaceHolder1_Address1_AreaUserControl1').disabled = true;
            }
            $.each(GlobalMyAddress1, function (ArrIndex, ChngRowIndex) {
                document.getElementById('<%=txtAddress1.ClientID %>').value = ChngRowIndex.Address1;
                document.getElementById('<%=txtAddress2.ClientID %>').value = ChngRowIndex.Address2;
                document.getElementById('<%=AreaUserControl1.FindControl("txtSearchControl").ClientID%>').value = ChngRowIndex.area_name;
                document.getElementById('<%=AreaUserControl1.FindControl("_hiddenID").ClientID%>').value = ChngRowIndex.Area;
                document.getElementById('<%=AreaUserControl1.FindControl("_hiddenText").ClientID%>').value = ChngRowIndex.area_name;
                document.getElementById('<%=hdnAreaId.ClientID %>').value = ChngRowIndex.Area;
                document.getElementById('<%=CityUserControl1.ClientID %>').value = ChngRowIndex.city_name;
                document.getElementById('<%=hdncityid.ClientID %>').value = ChngRowIndex.City;
                document.getElementById('<%=StateUserControl1.ClientID %>').value = ChngRowIndex.state_name;
                document.getElementById('<%=hdnstateid.ClientID %>').value = ChngRowIndex.State;
                document.getElementById('<%=CountryUserControl1.ClientID%>').value = ChngRowIndex.country_name;
                document.getElementById('<%=hdncountryid.ClientID %>').value = ChngRowIndex.Country;
                document.getElementById('<%=DistricUserControl1.ClientID%>').value = ChngRowIndex.District_name;
                document.getElementById('<%=hdndistrictid.ClientID %>').value = ChngRowIndex.District;
                document.getElementById('<%=txtPin.ClientID %>').value = ChngRowIndex.PinZip;
                document.getElementById('<%=hdnpincode.ClientID %>').value = ChngRowIndex.PinZip;
                document.getElementById('<%=hdnaddress_id.ClientID %>').value = ChngRowIndex.Adres_id;
                document.getElementById('<%=hdnadrs_rev_no.ClientID %>').value = ChngRowIndex.Adrs_rev_no;
            });

            DivAdressRowIndex = 2;
            var CopyFromPresentAddress = '';
            var SameasPresentAddress = $('#<%=chkSameasPresentAddress.ClientID %>')[0].checked;
            var Address1 = document.getElementById('<%=txtAddress1.ClientID %>').value;
            var Address2 = document.getElementById('<%=txtAddress2.ClientID %>').value;
            var area_name = document.getElementById('<%=AreaUserControl1.FindControl("txtSearchControl").ClientID%>').value;

            var Area = document.getElementById('<%=AreaUserControl1.FindControl("_hiddenID").ClientID%>').value;
            var area_name = document.getElementById('<%=AreaUserControl1.FindControl("_hiddenText").ClientID%>').value;
            var area_id = document.getElementById('<%=hdnAreaId.ClientID %>').value;
            var city_name = document.getElementById('<%=CityUserControl1.ClientID %>').value;
            var City = document.getElementById('<%=hdncityid.ClientID %>').value;
            var state_name = document.getElementById('<%=StateUserControl1.ClientID %>').value;
            var State = document.getElementById('<%=hdnstateid.ClientID %>').value;
            var country_name = document.getElementById('<%=CountryUserControl1.ClientID%>').value;
            var Country = document.getElementById('<%=hdncountryid.ClientID %>').value;
            var District_name = document.getElementById('<%=DistricUserControl1.ClientID%>').value;
            var District = document.getElementById('<%=hdndistrictid.ClientID %>').value;
            var PinZip = document.getElementById('<%=txtPin.ClientID %>').value;
            var PinZip = document.getElementById('<%=hdnpincode.ClientID %>').value;
            var Adres_id = document.getElementById('<%=hdnaddress_id.ClientID %>').value;
            var Adrs_rev_no = document.getElementById('<%=hdnadrs_rev_no.ClientID %>').value;
            var stdcode = document.getElementById('' + ctrlcom + '_Address1_hdnSTDCode').value;
            var isdcode = document.getElementById('' + ctrlcom + '_Address1_hdnISDCode').value;
            if (stdcode == '' || stdcode == null || stdcode == undefined) { stdcode = ''; }
            if (isdcode == '' || isdcode == null || isdcode == undefined) { isdcode = ''; }
            var stdcode = document.getElementById('' + ctrlcom + '_Address1_hdnSTDCode').value;
            var isdcode = document.getElementById('' + ctrlcom + '_Address1_hdnISDCode').value;
            if (stdcode == '' || stdcode == null || stdcode == undefined) { stdcode = ''; }
            if (isdcode == '' || isdcode == null || isdcode == undefined) { isdcode = ''; }
            MobileNo1 = stdcode + document.getElementById('<%=txtMobile1.ClientID %>').value;
            MobileNo2 = isdcode + document.getElementById('<%=txtMobile2.ClientID %>').value;
            MobileNo3 = document.getElementById('<%=txtMobile3.ClientID %>').value;
            multiDimAddress2(DivAdressRowIndex, SameasPresentAddress, CopyFromPresentAddress, Address1, Address2, Area, PinZip, City, District, State, Country, city_name, state_name, area_name, District_name, country_name, Adres_id, Adrs_rev_no, MobileNo1, MobileNo2, MobileNo3);
        }
        else {
            GlobalMyAddress2 = '';
            document.getElementById('<%=txtAddress1.ClientID %>').disabled = false;
            document.getElementById('<%=txtAddress2.ClientID %>').disabled = false;
            document.getElementById('<%=AreaUserControl1.FindControl("txtSearchControl").ClientID%>').disabled = false;
            document.getElementById('<%=txtPin.ClientID %>').disabled = false;
            document.getElementById('lk_btn_ctl00_ContentPlaceHolder1_Address1_AreaUserControl1').disabled = false;
            document.getElementById('<%=txtAddress1.ClientID %>').value = '';
            document.getElementById('<%=txtAddress2.ClientID %>').value = '';
            document.getElementById('<%=AreaUserControl1.FindControl("txtSearchControl").ClientID%>').value = '';
            document.getElementById('<%=AreaUserControl1.FindControl("_hiddenID").ClientID%>').value = 0;
            document.getElementById('<%=AreaUserControl1.FindControl("_hiddenText").ClientID%>').value = '';
            document.getElementById('<%=hdnAreaId.ClientID %>').value = 0;
            document.getElementById('<%=CityUserControl1.ClientID %>').value = '';
            document.getElementById('<%=hdncityid.ClientID %>').value = 0;
            document.getElementById('<%=StateUserControl1.ClientID %>').value = '';
            document.getElementById('<%=hdnstateid.ClientID %>').value = 0;
            document.getElementById('<%=CountryUserControl1.ClientID%>').value = '';
            document.getElementById('<%=hdncountryid.ClientID %>').value = 0;
            document.getElementById('<%=DistricUserControl1.ClientID%>').value = '';
            document.getElementById('<%=hdndistrictid.ClientID %>').value = 0;
            document.getElementById('<%=txtPin.ClientID %>').value = '';
            document.getElementById('<%=hdnaddress_id.ClientID %>').value = 0;
            document.getElementById('<%=hdnadrs_rev_no.ClientID %>').value = 0;
        }
    }

    function copypresent() {
        if ($('#<%=chkCopyFromPresentAddress.ClientID%>')[0].checked == true) {
            document.getElementById('<%=txtAddress1.ClientID %>').disabled = true;
            document.getElementById('<%=txtAddress2.ClientID %>').disabled = true;
            document.getElementById('<%=AreaUserControl1.FindControl("txtSearchControl").ClientID%>').disabled = true;
            document.getElementById('<%=txtPin.ClientID %>').disabled = true;
            document.getElementById('lk_btn_ctl00_ContentPlaceHolder1_Address1_AreaUserControl1').disabled = true;
            $.each(GlobalMyAddress1, function (ArrIndex, ChngRowIndex) {
                document.getElementById('<%=txtAddress1.ClientID %>').value = ChngRowIndex.Address1;
                document.getElementById('<%=txtAddress2.ClientID %>').value = ChngRowIndex.Address2;
                document.getElementById('<%=AreaUserControl1.FindControl("txtSearchControl").ClientID%>').value = ChngRowIndex.area_name;
                document.getElementById('<%=AreaUserControl1.FindControl("_hiddenID").ClientID%>').value = ChngRowIndex.Area;
                document.getElementById('<%=AreaUserControl1.FindControl("_hiddenText").ClientID%>').value = ChngRowIndex.area_name;
                document.getElementById('<%=hdnAreaId.ClientID %>').value = ChngRowIndex.Area;
                document.getElementById('<%=CityUserControl1.ClientID %>').value = ChngRowIndex.city_name;
                document.getElementById('<%=hdncityid.ClientID %>').value = ChngRowIndex.City;
                document.getElementById('<%=StateUserControl1.ClientID %>').value = ChngRowIndex.state_name;
                document.getElementById('<%=hdnstateid.ClientID %>').value = ChngRowIndex.State;
                document.getElementById('<%=CountryUserControl1.ClientID%>').value = ChngRowIndex.country_name;
                document.getElementById('<%=hdncountryid.ClientID %>').value = ChngRowIndex.Country;
                document.getElementById('<%=DistricUserControl1.ClientID%>').value = ChngRowIndex.District_name;
                document.getElementById('<%=hdndistrictid.ClientID %>').value = ChngRowIndex.District;
                document.getElementById('<%=txtPin.ClientID %>').value = ChngRowIndex.PinZip;
                document.getElementById('<%=hdnpincode.ClientID %>').value = ChngRowIndex.PinZip;
                document.getElementById('<%=hdnaddress_id.ClientID %>').value = ChngRowIndex.Adres_id;
                document.getElementById('<%=hdnadrs_rev_no.ClientID %>').value = ChngRowIndex.Adrs_rev_no;

            });
            DivAdressRowIndex = 3;
            var CopyFromPresentAddress = '';
            var SameasPresentAddress = $('#<%=chkSameasPresentAddress.ClientID %>')[0].checked;
            var Address1 = document.getElementById('<%=txtAddress1.ClientID %>').value;
            var Address2 = document.getElementById('<%=txtAddress2.ClientID %>').value;
            var area_name = document.getElementById('<%=AreaUserControl1.FindControl("txtSearchControl").ClientID%>').value;
            var Area = document.getElementById('<%=AreaUserControl1.FindControl("_hiddenID").ClientID%>').value;
            var area_name = document.getElementById('<%=AreaUserControl1.FindControl("_hiddenText").ClientID%>').value;
            var area_id = document.getElementById('<%=hdnAreaId.ClientID %>').value;
            var city_name = document.getElementById('<%=CityUserControl1.ClientID %>').value;
            var City = document.getElementById('<%=hdncityid.ClientID %>').value;
            var state_name = document.getElementById('<%=StateUserControl1.ClientID %>').value;
            var State = document.getElementById('<%=hdnstateid.ClientID %>').value;
            var country_name = document.getElementById('<%=CountryUserControl1.ClientID%>').value;
            var Country = document.getElementById('<%=hdncountryid.ClientID %>').value;
            var District_name = document.getElementById('<%=DistricUserControl1.ClientID%>').value;
            var District = document.getElementById('<%=hdndistrictid.ClientID %>').value;
            var PinZip = document.getElementById('<%=txtPin.ClientID %>').value;
            var PinZip = document.getElementById('<%=hdnpincode.ClientID %>').value;
            var Adres_id = document.getElementById('<%=hdnaddress_id.ClientID %>').value;
            var Adrs_rev_no = document.getElementById('<%=hdnadrs_rev_no.ClientID %>').value;
            multiDimAddress3(DivAdressRowIndex, SameasPresentAddress, CopyFromPresentAddress, Address1, Address2, Area, PinZip, City, District, State, Country, city_name, state_name, area_name, District_name, country_name, Adres_id, Adrs_rev_no, MobileNo1, MobileNo2, MobileNo3);
        }
        else {
            GlobalMyAddress3 = '';
            document.getElementById('<%=txtAddress1.ClientID %>').disabled = false;
            document.getElementById('<%=txtAddress2.ClientID %>').disabled = false;
            document.getElementById('<%=AreaUserControl1.FindControl("txtSearchControl").ClientID%>').disabled = false;
            document.getElementById('<%=txtPin.ClientID %>').disabled = false;
            document.getElementById('lk_btn_ctl00_ContentPlaceHolder1_Address1_AreaUserControl1').disabled = false;
            document.getElementById('<%=txtAddress1.ClientID %>').value = '';
            document.getElementById('<%=txtAddress2.ClientID %>').value = '';
            document.getElementById('<%=AreaUserControl1.FindControl("txtSearchControl").ClientID%>').value = '';
            document.getElementById('<%=AreaUserControl1.FindControl("_hiddenID").ClientID%>').value = 0;
            document.getElementById('<%=AreaUserControl1.FindControl("_hiddenText").ClientID%>').value = '';
            document.getElementById('<%=hdnAreaId.ClientID %>').value = 0;
            document.getElementById('<%=CityUserControl1.ClientID %>').value = '';
            document.getElementById('<%=hdncityid.ClientID %>').value = 0;
            document.getElementById('<%=StateUserControl1.ClientID %>').value = '';
            document.getElementById('<%=hdnstateid.ClientID %>').value = 0;
            document.getElementById('<%=CountryUserControl1.ClientID%>').value = '';
            document.getElementById('<%=hdncountryid.ClientID %>').value = 0;
            document.getElementById('<%=DistricUserControl1.ClientID%>').value = '';
            document.getElementById('<%=hdndistrictid.ClientID %>').value = 0;
            document.getElementById('<%=txtPin.ClientID %>').value = '';
            document.getElementById('<%=hdnaddress_id.ClientID %>').value = 0;
            document.getElementById('<%=hdnadrs_rev_no.ClientID %>').value = 0;
        }
    }
    function OnStateSelection(objValue, obj) {
        var results = objValue;
        document.getElementById('<%=hdnstateid.ClientID %>').value = '';
        document.getElementById('<%=hdnstateid.ClientID %>').value = results;
        document.getElementById('<%=txtcityauto.ClientID %>').disabled = false;
        document.getElementById('<%=hdnQStateId.ClientID %>').value = results;
        Con_key_ch = results;
        set_contextKey = Con_key_ch;
        document.getElementById('' + ctrlcom + '_Address1_hdndistrictid').value = '';
        document.getElementById('' + ctrlcom + '_Address1_txtDistrictAuto').value = '';
        document.getElementById('<%=hidncityid.ClientID %>').value = '';
        document.getElementById('' + ctrlcom + '_Address1_txtArea').value = '';
        document.getElementById('' + ctrlcom + '_Address1_txtcityauto').value = '';
        document.getElementById('' + ctrlcom + '_Address1_txtPinCode').value = '';
        document.getElementById('' + ctrlcom + '_Address1_txtstdcode').value = '';
        document.getElementById('' + ctrlcom + '_Address1_txtDistrictAuto').className = 'red';
        document.getElementById('' + ctrlcom + '_Address1_txtcityauto').className = 'red';
        document.getElementById('' + ctrlcom + '_Address1_txtArea').className = 'red';
        document.getElementById('' + ctrlcom + '_Address1_txtPinCode').className = 'red';
    }
    function OncitySelection(objValue, obj) {
        var results = objValue;
        document.getElementById('<%=hidncityid.ClientID %>').value = '';
        document.getElementById('<%=hidncityid.ClientID %>').value = results;
        document.getElementById('<%=txtArea.ClientID %>').disabled = false;
        document.getElementById('<%=hdnQCityId.ClientID %>').value = results;
        document.getElementById('' + ctrlcom + '_Address1_txtArea').value = '';
        document.getElementById('' + ctrlcom + '_Address1_txtPinCode').value = '';
        document.getElementById('' + ctrlcom + '_Address1_txtstdcode').value = '';
        document.getElementById('' + ctrlcom + '_Address1_txtArea').className = 'red';
        document.getElementById('' + ctrlcom + '_Address1_txtPinCode').className = 'red';
    }
    /*Quick Address Add Saving Start*/
    function addcouvali() {
        if (document.getElementById('<%=ddlcountry.ClientID %>').value == 0) {
            $(".stoast").toastText("warning", "Plz Select Country Name", 5, 3);
            document.getElementById('<%=ddlcountry.ClientID %>').focus();
            return false;
        }
        if (document.getElementById('<%=txtStateAuto.ClientID %>').value == '') {
            $(".stoast").toastText("warning", "Enter State Name", 5, 3);
            document.getElementById('<%=txtStateAuto.ClientID %>').focus();
            return false;
        }
        if (document.getElementById('' + ctrlcom + '_Address1_txtDistrictAuto').value == '') {
            $(".stoast").toastText("warning", "Enter District Name", 5, 3);
            document.getElementById('' + ctrlcom + '_Address1_txtDistrictAuto').focus();
            return false;
        }
        if (document.getElementById('<%=txtcityauto.ClientID %>').value == '') {
            $(".stoast").toastText("warning", "Enter City Name", 5, 3);
            document.getElementById('<%=txtcityauto.ClientID %>').focus();
            return false;
        }
        if (document.getElementById('<%=txtArea.ClientID %>').value == '') {
            $(".stoast").toastText("warning", "Enter Area Name", 5, 3);
            document.getElementById('<%=txtArea.ClientID %>').focus();
            return false;
        }
        if (document.getElementById('<%=txtPinCode.ClientID %>').value == '') {
            $(".stoast").toastText("warning", "Enter Pin Code", 5, 3);
            document.getElementById('<%=txtPinCode.ClientID %>').focus();
            return false;
        }
        if (document.getElementById('' + ctrlcom + '_Address1_txtStateAuto').value != '') {
            if (document.getElementById('' + ctrlcom + '_Address1_hdnstateid').value == 0 || document.getElementById('' + ctrlcom + '_Address1_hdnstateid').value == undefined || document.getElementById('' + ctrlcom + '_Address1_hdnstateid').value == '') {
                document.getElementById('' + ctrlcom + '_Address1_txtStateAuto').value = '';
                $(".stoast").toastText("warning", "Plz Select State Name", 5, 3);
                document.getElementById('' + ctrlcom + '_Address1_txtStateAuto').focus();
                return false;
            }
        }
        if (document.getElementById('' + ctrlcom + '_Address1_txtDistrictAuto').value != '') {
            if (document.getElementById('' + ctrlcom + '_Address1_hdndistrictid').value == 0 || document.getElementById('' + ctrlcom + '_Address1_hdndistrictid').value == undefined || document.getElementById('' + ctrlcom + '_Address1_hdndistrictid').value == '') {
                document.getElementById('' + ctrlcom + '_Address1_txtDistrictAuto').value = '';
                $(".stoast").toastText("warning", "Plz Select District Name", 5, 3);
                document.getElementById('' + ctrlcom + '_Address1_txtDistrictAuto').focus();
                return false;
            }
        }
        if (document.getElementById('' + ctrlcom + '_Address1_txtcityauto').value != '') {
            if (document.getElementById('' + ctrlcom + '_Address1_hidncityid').value == 0 || document.getElementById('' + ctrlcom + '_Address1_hidncityid').value == undefined || document.getElementById('' + ctrlcom + '_Address1_hidncityid').value == '') {
                $(".stoast").toastText("warning", "Plz Select City Name", 5, 3);
                document.getElementById('' + ctrlcom + '_Address1_txtcityauto').value = '';
                document.getElementById('' + ctrlcom + '_Address1_txtcityauto').focus();
                return false;
            }
        }
        var countryid = document.getElementById('<%=ddlcountry.ClientID %>').value;
        var name = document.getElementById('<%=ddlcountry.ClientID %>').selectedIndex;
        if (name > -1) {
            var countryName = document.getElementById('<%=ddlcountry.ClientID %>')[name].text;
        }
        var stateid = document.getElementById('<%=hdnstateid.ClientID %>').value;
        var cityid = document.getElementById('<%=hidncityid.ClientID %>').value;
        var areaid = document.getElementById('<%=hdnAreaId.ClientID %>').value;
        areaid = areaid == 0 ? "" : areaid;
        var statename = document.getElementById('<%=txtStateAuto.ClientID %>').value;
        var cityname = document.getElementById('<%=txtcityauto.ClientID %>').value;
        var areaname = document.getElementById('<%=txtArea.ClientID %>').value;
        var _districtid = document.getElementById('' + ctrlcom + '_Address1_hdndistrictid').value;
        var districtname = document.getElementById('' + ctrlcom + '_Address1_txtDistrictAuto').value;
        var PinCode = document.getElementById('' + ctrlcom + '_Address1_txtPinCode').value;
        var stdcode = document.getElementById('' + ctrlcom + '_Address1_txtstdcode').value;
        if (stdcode == "" || stdcode == null || stdcode == undefined) { stdcode = 0; }
        GetAsync(
        "Private/FrontOffice/IPRegistrationChangeDetails.aspx/saveaddress",
        { countryid: countryid, stateid: stateid, cityid: cityid, areaid: areaid, statename: statename, cityname: cityname, areaname: areaname, districtid: _districtid, PinCode: PinCode, stdcode: stdcode },
        function (JData) {
            var s = JData.d.split(',');
            var aid = s[0];
            var cid = s[1];
            if (aid != 0 || cid != 0 || aid == 0 || cid == 0) {
                document.getElementById('' + ctrlcom + '_Address1_ddlcountry').value = '1'; ;
                document.getElementById('' + ctrlcom + '_Address1_txtStateAuto').value = '';
                document.getElementById('' + ctrlcom + '_Address1_txtcityauto').value = '';
                document.getElementById('' + ctrlcom + '_Address1_txtArea').value = '';
                document.getElementById('' + ctrlcom + '_Address1_txtDistrictAuto').value = '';
                document.getElementById('' + ctrlcom + '_Address1_txtstdcode').value = '';
                document.getElementById('' + ctrlcom + '_Address1_txtPinCode').value = '';
                document.getElementById('' + ctrlcom + '_Address1_hdnAreaId').value = aid;
                document.getElementById('' + ctrlcom + '_Address1_AreaUserControl1_txtSearchControl').value = areaname;
                document.getElementById('' + ctrlcom + '_Address1_AreaUserControl1__hiddenID').value = aid;
                document.getElementById('' + ctrlcom + '_Address1_AreaUserControl1__hiddenText').value = areaname;
                document.getElementById('' + ctrlcom + '_Address1_StateUserControl1').value = statename;
                document.getElementById('' + ctrlcom + '_Address1_CityUserControl1').value = cityname;
                document.getElementById('' + ctrlcom + '_Address1_hdncityid').value = cityid;
                document.getElementById('' + ctrlcom + '_Address1_hdnstateid').value = stateid;
                document.getElementById('' + ctrlcom + '_Address1_hdncountryid').value = countryid;
                document.getElementById('' + ctrlcom + '_Address1_CountryUserControl1').value = countryName;
                document.getElementById('' + ctrlcom + '_Address1_DistricUserControl1').value = districtname;
                document.getElementById('' + ctrlcom + '_Address1_hdndistrictid').value = _districtid;
                document.getElementById('' + ctrlcom + '_Address1_txtPin').value = PinCode;
                document.getElementById('' + ctrlcom + '_Address1_hdnpincode').value = PinCode;
                $('#' + ctrlcom + '_DivAddress').hide();
                sucess(aid, cid);
                $("#DivAdressadditem li").on("click", function () {
                    var RowIndex = 0;
                    var CurrentTar = $(this).data("tar");
                    DivAdressRowIndex = $(this).data("tar").substring(9, 7);
                    DivAdressRowIndex = DivAdressRowIndex == 0 ? 1 : DivAdressRowIndex;
                });
                var CopyFromPresentAddress = '';
                var SameasPresentAddress = $('#' + ctrlcom + '_Address1_chkSameasPresentAddress')[0].checked;
                var Address1 = document.getElementById('' + ctrlcom + '_Address1_txtAddress1').value;
                var Address2 = document.getElementById('' + ctrlcom + '_Address1_txtAddress2').value;
                var area_name = document.getElementById('' + ctrlcom + '_Address1_AreaUserControl1_txtSearchControl').value;
                var Area = document.getElementById('' + ctrlcom + '_Address1_AreaUserControl1__hiddenID').value;
                var area_name = document.getElementById('' + ctrlcom + '_Address1_AreaUserControl1__hiddenText').value;
                var area_id = document.getElementById('' + ctrlcom + '_Address1_hdnAreaId').value;
                var city_name = document.getElementById('' + ctrlcom + '_Address1_CityUserControl1').value;
                var City = document.getElementById('' + ctrlcom + '_Address1_hdncityid').value;
                var state_name = document.getElementById('' + ctrlcom + '_Address1_StateUserControl1').value;
                var State = document.getElementById('' + ctrlcom + '_Address1_hdnstateid').value;
                var country_name = document.getElementById('' + ctrlcom + '_Address1_CountryUserControl1').value;
                var Country = document.getElementById('' + ctrlcom + '_Address1_hdncountryid').value;
                var PinZip = document.getElementById('' + ctrlcom + '_Address1_txtPin').value;
                var District_name = document.getElementById('' + ctrlcom + '_Address1_DistricUserControl1').value;
                var District = document.getElementById('' + ctrlcom + '_Address1_hdndistrictid').value;
                if (DivAdressRowIndex == 1) {
                    multiDimAddress1(DivAdressRowIndex, SameasPresentAddress, CopyFromPresentAddress, Address1, Address2, Area, PinZip, City, District, State, Country, city_name, state_name, area_name, District_name, country_name, MobileNo1, MobileNo2, MobileNo3);
                }
                if (DivAdressRowIndex == 2) {
                    multiDimAddress2(DivAdressRowIndex, SameasPresentAddress, CopyFromPresentAddress, Address1, Address2, Area, PinZip, City, District, State, Country, city_name, state_name, area_name, District_name, country_name, MobileNo1, MobileNo2, MobileNo3);
                }
                if (DivAdressRowIndex == 3) {
                    multiDimAddress3(DivAdressRowIndex, SameasPresentAddress, CopyFromPresentAddress, Address1, Address2, Area, PinZip, City, District, State, Country, city_name, state_name, area_name, District_name, country_name, MobileNo1, MobileNo2, MobileNo3);
                }
                return false;
            }
            else {
                sucess(aid, cid);
                return false;
            }
        },
        function (jqXHR, textStatus, errorThrown) {
            $(".stoast").toastText("warning", errorThrown, 5, 3);
        });
        return false;
    }
    function sucess(aid, cid) {
        if (aid != 0 || cid != 0 || aid != "" || cid != "") {
            $(".stoast").toastText("Success", "Address Saved Sucessfully", 5, 1);
            $('[id*=DivAddress]')[0].style.display = 'none';
        }
        else {
            if (aid == "" || cid == "") {
                $(".stoast").toastText("warning", "Already Exists Address", 5, 3);
            }
            else {
                $(".stoast").toastText("warning", "Fail to Save Address", 5, 3);
            }
        }
        document.getElementById('<%=txtStateAuto.ClientID %>').value = '';
        document.getElementById('<%=txtcityauto.ClientID %>').value = '';
        document.getElementById('<%=txtArea.ClientID %>').value = '';
        document.getElementById('<%=txtDistrictAuto.ClientID %>').value = '';
        document.getElementById('<%=ddlcountry.ClientID %>').value = 1;
        set_contextKey = 1;
    }
    function setstatecontextkey(obj) {
        set_contextKey = document.getElementById('<%=ddlcountry.ClientID %>').value;
    }
    function setdistrictcontextkey() {
        set_contextKey = document.getElementById('<%=hdnstateid.ClientID %>').value;
    }
    function setcitycontextkey() {
        set_contextKey = document.getElementById('<%=hdndistrictid.ClientID %>').value;
    }
    function OnAddressDet(results) {
        if (myMultiDatar1 != "") {
            CheckRefAddress(results);
        } else {
            OnSuccessRef(results);
        }
    }
    function CheckRefAddress(results) {
        var area_id = "0"; var Refarea_id = "0";
        Refarea_id = myMultiDatar1[0]["RefArea_Id"];
        if (results.AREA_ID == undefined) { area_id = results.RESULT.AREA_ID; } else { area_id = results.AREA_ID; }
        if (Refarea_id > "0") {
            if (Refarea_id != area_id) {
                $(".smessagebox").scustommessagebox(1, "Info", "Referral Address is not matching with Patient Address.Do you want to continue..?", OnSuccessRef, results, OnReject);
            } else {
                OnSuccessRef(results);
            }
        } else {
            OnSuccessRef(results);
        }
    }
    function OnSuccessRef(results) {

        if (results.RESULT != null && results.RESULT != undefined) {
            OnAssignAddressDetails(results.RESULT.AREA_ID, results.RESULT.AREA_NAME, results.RESULT.CITY_ID, results.RESULT.CITY_NAME, results.RESULT.STATE_ID, results.RESULT.STATE_NAME, results.RESULT.COUNTRY_ID, results.RESULT.COUNTRY_NAME, results.RESULT.PIN_CODE, results.RESULT.DISTRICT_ID, results.RESULT.DISTRICT_NAME);
            document.getElementById('' + ctrlcom + '_Address1_hdnSTDCode').value = results.RESULT.STD_CODE;
            document.getElementById('' + ctrlcom + '_Address1_hdnISDCode').value = results.RESULT.ISD_CODE;
            var form_name = $('#' + ctrlcom + '_ReceiptControl2_hdnDocName').val();
            if (form_name == "REG" || form_name == "PRE-REG") {
                AssignTelephn();
            }
            else if (form_name == 'OPQUICK')
            { Assignisdcode(); }
            else { }

        }
        else {
            $("#" + ctrlcom + "_Address1_AreaUserControl1_txtSearchControl").val(results["_lktext"]);
            OnAssignAddressDetails(results.AREA_ID, results.AREA_NAME, results.CITY_ID, results.CITY_NAME, results.STATE_ID, results.STATE_NAME, results.COUNTRY_ID, results.COUNTRY_NAME, results.PIN_CODE, results.DISTRICT_ID, results.DISTRICT_NAME);
            document.getElementById('' + ctrlcom + '_Address1_hdnSTDCode').value = results.STD_CODE;
            document.getElementById('' + ctrlcom + '_Address1_hdnISDCode').value = results.ISD_CODE;
            var form_name = $('#' + ctrlcom + '_ReceiptControl2_hdnDocName').val();
            var docname = $('#' + ctrlcom + '_Address1_hdndocname').val();
            if (form_name == "REG" || form_name == "PRE-REG") {
                AssignTelephn();
            }
            else if (docname == 'CHANGE-REG') {
                document.getElementById('' + ctrlcom + '_txtMobile2').value = results.STD_CODE;
            }
            else if (form_name == 'OPQUICK')
            { Assignisdcode(); }
            else { }
        }
    }
    function OnReject() {
        ClearAddrDtls();
        return false;
    }
    function remove(ctrl) {
        var txt = document.getElementById(ctrl.id);
        var val = txt.value;
        for (i = 0; i < val.length; i++) {
            var code = val.charCodeAt(i);
            if (!(code >= 48 && code <= 57)) {
                txt.value = ""; txt.focus();
                return false;
            }
        }
    }

    function onchangeCounrty() {
        var countryid2 = document.getElementById('<%=ddlcountry.ClientID %>').value;
        document.getElementById('<%=hdnstateid.ClientID %>').value = countryid2;
        document.getElementById('<%=hdnQCountryId.ClientID %>').value = countryid2;
        var autoComplete = $find('ctl00_ContentPlaceHolder1_AutoCompleteExtender3');
        set_contextKey = countryid2;
    }

    function ClosingAddressPopup() {
        $('[id*=DivAddress]')[0].style.display = 'none';
        return false;
    }
    function OnAddressDetails() {
        if (document.getElementById('<%=hdnareaquick.ClientID%>').value == 'Y') {
            set_contextKey = "1";
            document.getElementById('<%=txtStateAuto.ClientID %>').value = '';
            document.getElementById('<%=txtcityauto.ClientID %>').value = '';
            document.getElementById('<%=txtArea.ClientID %>').value = '';
            document.getElementById('<%=txtDistrictAuto.ClientID %>').value = '';
            document.getElementById('<%=ddlcountry.ClientID %>').value = 1;
            set_contextKey = 1;
            document.getElementById('' + ctrlcom + '_Address1_txtStateAuto').className = 'red';
            document.getElementById('' + ctrlcom + '_Address1_txtDistrictAuto').className = 'red';
            document.getElementById('' + ctrlcom + '_Address1_txtcityauto').className = 'red';
            document.getElementById('' + ctrlcom + '_Address1_txtArea').className = 'red';
            document.getElementById('' + ctrlcom + '_Address1_txtPinCode').className = 'red';
            $('[id*=DivAddress]')[0].style.display = 'block';
        }
        else {
            $(".stoast").toastText("warning", "You dont have permission to Quick Add", 5, 3);
            return false;
        }
        return false;
    }
    function ClearAddrDtls() {
        GlobalMyAddress1 = '';
        GlobalMyAddress2 = '';
        GlobalMyAddress3 = '';
        $('#<%=chkSameasPresentAddress.ClientID %>')[0].checked = false;
        $('#<%=chkCopyFromPresentAddress.ClientID %>')[0].checked = false;
        document.getElementById('<%=txtAddress1.ClientID %>').value = '';
        document.getElementById('<%=txtAddress2.ClientID %>').value = '';
        document.getElementById('<%=AreaUserControl1.FindControl("txtSearchControl").ClientID%>').value = '';
        document.getElementById('<%=AreaUserControl1.FindControl("_hiddenID").ClientID%>').value = '0';
        document.getElementById('<%=AreaUserControl1.FindControl("_hiddenText").ClientID%>').value = '';
        document.getElementById('<%=hdnAreaId.ClientID %>').value = '0';
        document.getElementById('<%=CityUserControl1.ClientID %>').value = '';
        document.getElementById('<%=hdncityid.ClientID %>').value = '0';
        document.getElementById('<%=StateUserControl1.ClientID %>').value = '';
        document.getElementById('<%=hdnstateid.ClientID %>').value = '0';
        document.getElementById('<%=CountryUserControl1.ClientID%>').value = '';
        document.getElementById('<%=hdncountryid.ClientID %>').value = '0';
        document.getElementById('<%=DistricUserControl1.ClientID%>').value = '';
        document.getElementById('<%=hdndistrictid.ClientID %>').value = 0;
        document.getElementById('<%=txtPin.ClientID %>').value = '';
        document.getElementById('<%=txtAddress1.ClientID %>').disabled = false;
        document.getElementById('<%=txtAddress2.ClientID %>').disabled = false;
        document.getElementById('<%=AreaUserControl1.FindControl("txtSearchControl").ClientID%>').disabled = false;
        document.getElementById('<%=txtPin.ClientID %>').disabled = false;
        document.getElementById('<%=hdnaddress_id.ClientID %>').value = 0;
        document.getElementById('<%=hdnadrs_rev_no.ClientID %>').value = 0;
        document.getElementById('lk_btn_ctl00_ContentPlaceHolder1_Address1_AreaUserControl1').disabled = false;
        document.getElementById('<%=ddrelationaddr.ClientID %>').value = 0;
    }

    function OnStateChange(obj) {
        var statechk = $("#<%= rdbtndefstate.ClientID %> input:checked").val();
        var defstateid = document.getElementById('<%=hdndefaultstate.ClientID %>').value;
        if (statechk == "A")
            defstateid = 0;
        document.getElementById('' + ctrlcom + '_Address1_AreaUserControl1_hdn_preCond').value = "0^" + defstateid;
        //        GetAsync(
        //            "Private/FrontOffice/OPDBill.aspx/AddStatePrecondition",
        //            { Def_State_Id: defstateid },
        //            function (jData) {
        //            },
        //            function (jqXHR, textStatus, errorThrown) {
        //            }
        //        );
    }

    
</script>
<div class="panel-div opd-address" style="width: 64.2%">
    <div class="panel-heading tabs stabs stabs">
        <h3 class="panel-title tab_title">
            Address</h3>
        <div class="tabed-div tabline">
            <div id="DivAdressadditem" class="tabed-panel">
                <ul>
                    <li id="A1" class="root1 select" data-tar="additem1">Present </li>
                    <li id="A2" class="root1" data-tar="additem2">Permanent</li>
                    <li id="A3" class="root1" data-tar="additem3">Others</li>
                </ul>
            </div>
        </div>
        <h3 id="hemr" class="panel-title tab_title subtabs ">
            Next Of KIN</h3>
        <h3 id="hgc" class="panel-title tab_title subtabs tpleft">
            Guarantor</h3>
        <label id="New Clearid" onclick="NewClearcontactdetails();" class="su-refresh-1 pheadico tooltip"
            title="Clear" tooltip="Clear">
        </label>
        <div style="float: right; margin-right: 10px;">
            <asp:RadioButtonList ID="rdbtndefstate" runat="server" RepeatDirection="Horizontal"
                CssClass="chk-list1 pnlrbt" RepeatLayout="Flow" onchange="OnStateChange(this);">
                <asp:ListItem Value="D" Text="Default" Selected="True"></asp:ListItem>
                <asp:ListItem Value="A" Text="All"></asp:ListItem>
            </asp:RadioButtonList>
        </div>
        <div class="clr">
        </div>
        <div class="addnew" style="display:none">
            <asp:ImageButton ID="imgBtnQuickAddr" runat="server" ImageUrl="~/Assets/img/gray-sprite.png"
                CssClass="flagclip QuickICO" OnClientClick="return OnAddressDetails();" />
        </div>
    </div>
    <div id="ddivAddress" class="panel-hide">
        <div class="panel-body" style="height:163px;">
            <table border="0" cellpadding="0" cellspacing="0" align="center" width="100%" class="uc_formsCtrl opd_address_tbl">
                <tr>
                    <td>
                        <div class="uc_formflex">
                            <div class="uc_formelements" id="divAddressType" style="display: none;">
                                <div class="uc_formelementslbl">
                                    Address Type
                                </div>
                                <div class="uc_formelementstxt" id="divAddressType1">
                               
                                    <asp:DropDownList ID="ddrelationaddr" runat="server" onchange="OnNullValue(this);">
                                    </asp:DropDownList>
                                </div>
                            </div>
                            <div class="uc_formelements" id="divchkSameasPresentAddress" style="display: none;">
                                <div class="uc_formelementstxt">
                                    <asp:CheckBox ID="chkSameasPresentAddress" runat="server" onclick="samepresent(this);"
                                        Text="Same as Present" CssClass="chk-list1" />
                                </div>
                            </div>
                            <div class="uc_formelements" id="divchkCopyFromPresentAddress" style="display: none;">
                                <div class="uc_formelementstxt">
                                    <asp:CheckBox ID="chkCopyFromPresentAddress" runat="server" onclick="copypresent(this);"
                                        Text="Same as Present" CssClass="chk-list1" />
                                </div>
                            </div>
                            <div class="uc_formelements">
                                <div class="uc_formelementslbl">
                                    Address1
                                </div>
                                <div class="uc_formelementstxt">
                                    <asp:HiddenField ID="hdnaddress_id" runat="server" />
                                    <asp:HiddenField ID="hdnadrs_rev_no" runat="server" />
                                    <asp:TextBox ID="txtAddress1" runat="server" MaxLength="64" autocomplete="off" CssClass="tbwidth"
                                        onkeydown="OnNullValue(this);return onExtendedAddress();" onblur="Address1values();UpperCase(this);"
                                        onkeypress="return onExtendedAddress();" ToolTip="Enter Address1"></asp:TextBox>
                                </div>
                            </div>
                            <div class="uc_formelements">
                                <div class="uc_formelementslbl">
                                    Address2
                                </div>
                                <div class="uc_formelementstxt">
                                    <asp:TextBox ID="txtAddress2" runat="server" MaxLength="64" autocomplete="off" ToolTip="Enter Address2"
                                        CssClass="tbwidth" onblur="Address2values();UpperCase(this);" onkeyup="return onExtendedAddress();"></asp:TextBox>
                                </div>
                            </div>
                            <div class="uc_formelements">
                                <div class="uc_formelementslbl">
                                    Pin/Zip
                                </div>
                                <div class="uc_formelementstxt">
                                    <asp:TextBox ID="txtPin" runat="server" onkeyup="OnNullValue(this);" onkeypress="return chkNumeric(event);"
                                        onblur="checkvalidpin();" autocomplete="off" MaxLength="6"></asp:TextBox>
                                    <asp:HiddenField ID="hdnpincode" runat="server" />
                                    <ajaxToolkit:AutoCompleteExtender ID="AutoCompleteExtender2" ServiceMethod="GetAutoComp_Pincode"
                                        MinimumPrefixLength="3" ServicePath="~/PatientRegistration.asmx" CompletionInterval="100"
                                        UseContextKey="true" EnableCaching="false" CompletionSetCount="10" CompletionListItemCssClass="autocomplete_listItem"
                                        CompletionListCssClass="autocomplete_completionListElement" CompletionListHighlightedItemCssClass="autocomplete_highlightedListItem"
                                        TargetControlID="txtPin" ContextKey="PIN_CODE" OnClientItemSelected="Onpincodeselection"
                                        runat="server" FirstRowSelected="false">
                                    </ajaxToolkit:AutoCompleteExtender>
                                </div>
                            </div>
                            <div class="uc_formelements">
                                <div class="uc_formelementslbl">
                                    Area
                                </div>
                                <div class="uc_formelementstxt">
                                    <Lookup:Search ID="AreaUserControl1" runat="server" CallbackFn="OnAddressDet" />
                                    <asp:HiddenField ID="hdnAreaId" runat="server" />
                                </div>
                            </div>
                            <div class="uc_formelements">
                                <div class="uc_formelementslbl">
                                    City
                                </div>
                                <div class="uc_formelementstxt">
                                    <asp:TextBox ID="CityUserControl1" runat="server" MaxLength="120" Enabled="false"></asp:TextBox>
                                    <asp:HiddenField ID="hdncityid" runat="server" />
                                </div>
                            </div>
                            <div class="uc_formelements">
                                <div class="uc_formelementslbl">
                                    District
                                </div>
                                <div class="uc_formelementstxt">
                                    <asp:TextBox ID="DistricUserControl1" runat="server" MaxLength="120" Enabled="false"></asp:TextBox>
                                    <asp:HiddenField ID="hdndistrictid" runat="server" />
                                </div>
                            </div>
                            <div class="uc_formelements">
                                <div class="uc_formelementslbl">
                                    State
                                </div>
                                <div class="uc_formelementstxt">
                                    <asp:TextBox ID="StateUserControl1" runat="server" MaxLength="120" Enabled="false"></asp:TextBox>
                                    <asp:HiddenField ID="hdnstateid" runat="server" />
                                </div>
                            </div>
                            <div class="uc_formelements">
                                <div class="uc_formelementslbl">
                                    Country
                                </div>
                                <div class="uc_formelementstxt">
                                    <asp:TextBox ID="CountryUserControl1" runat="server" MaxLength="120" Enabled="false"></asp:TextBox>
                                    <asp:HiddenField ID="hdncountryid" runat="server" />
                                </div>
                            </div>
                        </div>
                    </td>
                </tr>
            </table>
        </div>
    </div>
    <div id="divEcGc" style="display: none;height:158px;" class="panel-hide">
        <ucGuarantee:Guarantee ID="UcGuarantor" runat="server" />
    </div>
</div>
<div style="width: 34.2%;" class="panel-div pull-right reg-contact-div">
    <div class="panel-heading smallheading">
        <h3 class="panel-title">
            Contact details
        </h3>
        <div class="righttxt1">
            <label id="clearcontactdet" onclick="NewClearcontactdetails();" class="su-refresh-1 pheadico tooltip"
                title="Clear" tooltip="Clear" style="margin-right: 0px;">
            </label>
        </div>
    </div>
    <div style="height: 163px;" class="panel-body reg-contact-body ">
        <table border="0" cellpadding="0" cellspacing="0" align="center" class="FormsCtrl"
            width="100%">
            <tr>
                
                <td>
                  <div class="opd_uc_formflex">
                    <div class="opd_uc_formelements">
                        <div class="opd_uc_formelementslbl">
                            Mobile# 1
                        </div>
                        <div class="opd_uc_formelementstxt">
                            <div class="besidechk">
                                <div class="mobile">
                                    <span class="isdcode" id="isdcodemobile1"></span>
                                    <asp:TextBox ID="txtMobile1" autocomplete="off" MaxLength="10" runat="server" ToolTip="Enter Mobile Number1"
                                        class="mobilenumber" onkeyup="OnNullValue(this);return OnExtendedMobile();" onkeypress="return chkNumeric(event);"
                                        onblur="CheckMblNo_valid(this);CheckCombinationValidations();OTPCheck(this);"
                                        onpaste="return false;"></asp:TextBox>
                                    <asp:HiddenField ID="hdnMobile1" runat="server" />
                                </div>
                                <asp:CheckBox ID="chkDND" Text=" DND" runat="server" CssClass="pull-right" />
                            </div>
                        </div>
                    </div>
              
                    <div class="opd_uc_formelements">
                        <div class="opd_uc_formelementslbl">
                            Mobile# 2
                        </div>
                        <div class="opd_uc_formelementstxt">
                            <div class="mobile">
                                <span class="isdcode" id="isdcodemobile3"></span>
                                <asp:TextBox ID="txtMobile2" MaxLength="10" autocomplete="off" runat="server" ToolTip="Enter Mobile Number2"
                                    class="mobilenumber" onkeypress="return chkNumeric(event);" onblur="CheckMblNo_valid(this);CheckCombinationValidations();"
                                    onpaste="return false;"></asp:TextBox>
                                <asp:HiddenField ID="HiddenField1" runat="server" />
                            </div>
                        </div>
                    </div>
       
                    <div class="opd_uc_formelements">
                        <div class="opd_uc_formelementslbl">
                            Telephone
                        </div>
                        <div class="opd_uc_formelementstxt">
                            <asp:TextBox ID="txtMobile3" MaxLength="10" autocomplete="off" runat="server" ToolTip="Enter Mobile Number2"
                                onkeypress="return chkNumeric(event);" onblur="CheckMblNo_valid(this);CheckCombinationValidations();"
                                onpaste="return false;"></asp:TextBox>
                            <asp:HiddenField ID="hdnMobile2" runat="server" />
                        </div>
                    </div>
          
                    <div class="opd_uc_formelements">
                        <div class="opd_uc_formelementslbl">
                            Email
                        </div>
                        <div class="opd_uc_formelementstxt">
                            <asp:TextBox ID="txtemail" runat="server" onchange="return EmailIdValidation(this);"
                                title="Enter EmailID" autocomplete="off" onkeyup="return onExtendedEmail();"></asp:TextBox>
                        </div>
                    </div>
             
                    <div class="opd_uc_formelements">
                        <div class="opd_uc_formelementslbl" id="lblmode">
                            Contact Via
                        </div>
                        <div class="opd_uc_formelementstxt">
                            <uc7:DDLMultiSelection ID="chkmodeComm" runat="server" />
                        </div>
                    </div>
               
                    <div class="opd_uc_formelements">
                        <div class="opd_uc_formelementslbl">
                            Nearest PS
                        </div>
                        <div class="opd_uc_formelementstxt">
                            <asp:TextBox ID="txtNearestPS" runat="server" onblur="this.value=TitleCase(this);"></asp:TextBox>
                        </div>
                    </div>
                    </div>
                </td>
            </tr>
        </table>
    </div>
</div>
<div id="DivAddress" runat="server" class="masking">
    <div class="cmask">
    </div>
    <div class="clientpopup" style="margin-left: -200px; margin-top: -150px; width: 350px;">
        <div class="pop-header">
            <h1>
                Quick Address Add
            </h1>
            <asp:Button buttonaction="cancelButton" ID="Button1" runat="server" OnClientClick="return ClosingAddressPopup();"
                CssClass="cbutton" Text="&times;" />
        </div>
        <div class="pop-body" style="padding: 10px 5px 10px 5px; overflow: auto; height: 200px;">
            <table width="100%" border="0" cellpadding="0" cellspacing="0" class="FormsCtrl">
                <tr>
                    <td align="left" width="30%">
                        Country
                    </td>
                    <td align="left" width="70%">
                        <asp:DropDownList ID="ddlcountry" runat="server" onchange="return onchangeCounrty(this);">
                        </asp:DropDownList>
                    </td>
                </tr>
                <tr>
                    <td align="left">
                        State
                    </td>
                    <td align="left">
                        <div style="position: relative;">
                            <asp:TextBox ID="txtStateAuto" onblur="HideAutoCompletion(this);" autocomplete="off"
                                onkeyup="return setstatecontextkey(this);" onkeypress="makeTxtBxAuto(this,'State');return OnlyCharecters(event);"
                                placeholder="Enter State Name" runat="server"></asp:TextBox>
                            <div id="AutoStateDiv" class="lk_auto_options">
                            </div>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td align="left">
                        District
                    </td>
                    <td align="left">
                        <div style="position: relative;">
                            <asp:TextBox ID="txtDistrictAuto" onblur="HideAutoCompletion(this);" autocomplete="off"
                                onkeyup="setdistrictcontextkey();" onkeypress="makeTxtBxAuto(this,'District');return OnlyCharecters(event);"
                                placeholder="Enter District Name" runat="server"></asp:TextBox>
                            <div id="AutoDistrictDiv" class="lk_auto_options">
                            </div>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td align="left">
                        City
                    </td>
                    <td align="left">
                        <div style="position: relative;">
                            <asp:TextBox ID="txtcityauto" onblur="HideAutoCompletion(this);" autocomplete="off"
                                onkeyup="setcitycontextkey();" onkeypress="makeTxtBxAuto(this,'City');return OnlyCharecters(event);"
                                placeholder="Enter City Name" runat="server"></asp:TextBox>
                            <div id="AtuoCityDiv" class="lk_auto_options">
                            </div>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td align="left">
                        Area
                    </td>
                    <td align="left">
                        <div style="position: relative;">
                            <asp:TextBox ID="txtArea" autocomplete="off" runat="server" onkeyup="return OnNullValue(this);"
                                onblur="this.value=TitleCase(this);" onkeypress="return OnlyCharecters(event);"></asp:TextBox>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td align="left">
                        Pin Code
                    </td>
                    <td align="left">
                        <div style="position: relative;">
                            <asp:TextBox ID="txtPinCode" autocomplete="off" onkeypress="return chkNumeric(event);"
                                MaxLength="6" placeholder="Enter Pin Code" onkeyup="return OnNullValue(this);"
                                runat="server"></asp:TextBox>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td align="left">
                        Std Code
                    </td>
                    <td align="left">
                        <div style="position: relative;">
                            <asp:TextBox ID="txtstdcode" autocomplete="off" onkeypress="return chkNumeric(event);"
                                MaxLength="6" placeholder="Enter Std Code" runat="server"></asp:TextBox>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td align="center" colspan="2">
                        <asp:Button Text="Save and Close" ID="imgBtnSaveQuickAddr" OnClientClick="return addcouvali(this);"
                            runat="server" />
                    </td>
                </tr>
            </table>
        </div>
    </div>
</div>
<div id="DivHcCard" width="600px" style="display: none" runat="server" class="masking">
    <div class="cmask">
    </div>
    <div class="clientpopup" style="width: 450px; height: 230px; margin-left: -225px;
        margin-top: -115px;">
        <div class="pop-header">
            <h1>
                <asp:Label ID="lblHcName" runat="server" Text="Health Card Details"></asp:Label>
            </h1>
            <input type="button" id="btnhcclose" class="button" value="&times;" onclick="return btnHcclose();" />
        </div>
        <div class="pop-body ">
            <table cellpadding="5" cellspacing="5" border="0" class="FormsCtrl" width="100%">
                <tr>
                    <td width="120px">
                        <asp:Label ID="Label1" Text="Health Card Type" runat="server"></asp:Label>
                    </td>
                    <td>
                        <Lookup:Search ID="uchccrdtype" runat="server" SET_CONTEXT_KEY="HC_CARD_TYPE" CallbackFn="onHCCrdTypeselection" />
                    </td>
                </tr>
                <tr>
                    <td>
                        <asp:Label ID="Label2" Text="Card No" runat="server"></asp:Label>
                    </td>
                    <td>
                        <Lookup:Search ID="ucHc_crd_no" runat="server" CallbackFn="onhccrd_selection" />
                    </td>
                </tr>
                <tr style="display: none;">
                    <td>
                        <asp:Label ID="Label3" Text="Validity" runat="server"></asp:Label>
                    </td>
                    <td>
                        <asp:TextBox ID="txthcvaldty" runat="server"></asp:TextBox>
                    </td>
                </tr>
                <tr style="display: none;">
                    <td>
                        <asp:Label ID="Label4" Text="Balance Amount" runat="server"></asp:Label>
                    </td>
                    <td>
                        <asp:TextBox ID="txthcbalamt" runat="server"></asp:TextBox>
                    </td>
                </tr>
                <tr>
                    <td>
                        <asp:Label ID="Label5" Text="Patient Name" runat="server"></asp:Label>
                    </td>
                    <td>
                        <asp:DropDownList ID="ddhcpatnames" runat="server" enabled="false">
                        </asp:DropDownList>
                    </td>
                </tr>
                <tr>
                    <td colspan="2" align="center">
                        <asp:Button ID="btnhcok" runat="server" Text="OK" OnClientClick="return hcokclick();" />
                        <asp:Button ID="btnhccncl" runat="server" Text="Cancel" OnClientClick="return hccancelclick();" />
                    </td>
                </tr>
            </table>
        </div>
    </div>
</div>
<asp:HiddenField ID="hidncityid" runat="server" />
<asp:HiddenField ID="hidEmpID" runat="server" />
<asp:HiddenField ID="hdnState" runat="server" />
<asp:HiddenField ID="hdnformid" runat="server" />
<asp:HiddenField ID="hdnareaquick" runat="server" />
<asp:HiddenField ID="hdnSTDCode" runat="server" />
<asp:HiddenField ID="hdnISDCode" runat="server" />
<asp:HiddenField ID="hdndocname" runat="server" />
<asp:HiddenField ID="hdnQCountryId" runat="server" />
<asp:HiddenField ID="hdnQStateId" runat="server" />
<asp:HiddenField ID="hdnQDstId" runat="server" />
<asp:HiddenField ID="hdnQCityId" runat="server" />
<asp:HiddenField ID="hdnnationaladdr" Value="N" runat="server" />
<asp:HiddenField ID="hdnhcdetid" runat="server" />
<asp:HiddenField ID="hdnIsAssesment" runat="server" />
<asp:HiddenField ID="hdndefaultstate" runat="server" />
