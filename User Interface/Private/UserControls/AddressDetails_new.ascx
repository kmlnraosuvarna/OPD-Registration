<%@ Control Language="C#" AutoEventWireup="true" CodeFile="AddressDetails_new.ascx.cs"
    Inherits="HIMS.NET.Private_UserControls_AddressDetails" %>
<%@ Register Src="~/Private/UserControls/Lookup.ascx" TagName="GenericGrid" TagPrefix="GenericSearch" %>
<%@ Register Assembly="AjaxControlToolkit" Namespace="AjaxControlToolkit" TagPrefix="ajaxToolkit" %>
<%@ Register Src="~/Private/UserControls/GuaranteeAddressUserControl.ascx" TagName="Guarantee"
    TagPrefix="ucGuarantee" %>
<script type="text/javascript">

    function OnStateChange(obj) {
        var statechk = $("#<%= rdbtndefstate.ClientID %> input:checked").val();
        var defstateid = document.getElementById('<%=hdndefaultstate.ClientID %>').value;
        if (statechk == "A")
            defstateid = 0;
        document.getElementById('ctl00_ContentPlaceHolder1_Address1_AreaUserControl1_hdn_preCond').value = "0^" + defstateid;
//        GetAsync(
//            "Private/FrontOffice/OPDBill.aspx/AddStatePrecondition",
//            { Def_State_Id: defstateid },
//            function (jData) {
//            },
//            function (jqXHR, textStatus, errorThrown) {
//            }
//        );
    }    
    function UpperCase(Name) {
        Name.value = Name.value.trim();
        Name.value = Name.value.toUpperCase();
        return Name.value;
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
        $('#ctl00_ContentPlaceHolder1_Address1_AreaUserControl1_txtSearchControl').removeClass('red')
    }

    function OnAdmnNullValue(ctrl) {
        /*  commented by pushkar modepalli please let him know before uncomment it */
        /*  if (document.getElementById('ctl00_ContentPlaceHolder1_hdnAdmType').value != 'Pre')
        return OnNullValue(ctrl)
        else
        return true;
        */
        return false;
    }
    function OnDistricSelection(objValue, obj) {
        var autoComplete = $find('ctl00_ContentPlaceHolder1_AutoCompleteExtender3');
        var Con_key_ch = '1';
        var results = objValue; // eval('(' + eventArgs.get_value() + ')');
        document.getElementById('ctl00_ContentPlaceHolder1_Address1_hdndistrictid').value = '';
        document.getElementById('ctl00_ContentPlaceHolder1_Address1_hdndistrictid').value = results;
        document.getElementById('ctl00_ContentPlaceHolder1_Address1_txtcityauto').disabled = false;
        document.getElementById('<%=hdnQDstId.ClientID %>').value = results;
        Con_key_ch = results;
        set_contextKey = Con_key_ch;
        document.getElementById('<%=hidncityid.ClientID %>').value = '';
        document.getElementById('ctl00_ContentPlaceHolder1_Address1_txtArea').value = '';
        document.getElementById('ctl00_ContentPlaceHolder1_Address1_txtcityauto').value = '';
        document.getElementById('ctl00_ContentPlaceHolder1_Address1_txtPinCode').value = '';
        document.getElementById('ctl00_ContentPlaceHolder1_Address1_txtstdcode').value = '';
        document.getElementById('ctl00_ContentPlaceHolder1_Address1_txtcityauto').className = 'red';
        document.getElementById('ctl00_ContentPlaceHolder1_Address1_txtArea').className = 'red';
        //document.getElementById('ctl00_ContentPlaceHolder1_Address1_txtPinCode').style.border = '1px solid rgb(244,122,94)';
    }
    function Onareaselection(objValue, obj) {
        var results = objValue;
        document.getElementById('ctl00_ContentPlaceHolder1_Address1_txtArea').value = results;
        var area = document.getElementById('ctl00_ContentPlaceHolder1_Address1_txtArea').value;
        if (area == results) {
            $(".stoast").toastText("warning", "Already Exists Address", 5, 3);
            document.getElementById('ctl00_ContentPlaceHolder1_Address1_txtArea').value = "";
            document.getElementById('ctl00_ContentPlaceHolder1_Address1_txtArea').focus();
            return false;
        }
        OnNullValue(ctl00_ContentPlaceHolder1_Address1_AreaUserControl1_txtSearchControl);
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
        if (document.getElementById('<%=AreaUserControl1.FindControl("_hiddenID").ClientID%>').value != '' && document.getElementById('ctl00_ContentPlaceHolder1_Address1_AreaUserControl1__hiddenID').value != '0') {
            document.getElementById('<%=txtPin.ClientID%>').className = 'grey';
        }
        else {
            if ($('[id*=A3]')[0].className != "root1 select") {
                document.getElementById('<%=txtPin.ClientID%>').className = 'red';
                document.getElementById('<%=AreaUserControl1.FindControl("txtSearchControl").ClientID%>').className = 'red';
            }
        }
        if (document.getElementById('ctl00_ContentPlaceHolder1_Address1_hdndocname').value != "EditProfile") {
            if (document.getElementById('ctl00_ContentPlaceHolder1_ddlNationality').value != document.getElementById('<%=hdnNatlId.ClientID %>').value) {
                document.getElementById('<%=AreaUserControl1.FindControl("txtSearchControl").ClientID%>').className = 'grey';
                document.getElementById('<%=txtPin.ClientID %>').className = 'grey';
            }
        }
    }
    function ClearAddressDetails() {
        myMultiAddress1 = []; myMultiAddress2 = []; myMultiAddress3 = [];
        ClearAddrDtls(); DivAdressRowIndex = 1;
        $('.divchkSameasPresentAddress')[0].style.display = "none";
        $('#divchkCopyFromPresentAddress')[0].style.display = "none";
        $("#A1").addClass("select"); $("#A2").removeClass("select"); $("#A3").removeClass("select");
        $('#tdaddrddrelation')[0].style.display = "none"; $('#tdaddrrelation')[0].style.display = "none";
        OnNullValue(document.getElementById('<%=AreaUserControl1.FindControl("txtSearchControl").ClientID%>'));
        var HdnDocName = document.getElementById('ctl00_ContentPlaceHolder1_Address1_hdndocname').value;
        if (HdnDocName == 'PRE-REG' || HdnDocName == 'REG' || HdnDocName == 'CHANGE-REG') {
          /*  if (document.getElementById(' ').value != document.getElementById('<%=hdnNatlId.ClientID %>').value) {
                $("#A3").addClass("select");
                $("#A2").removeClass("select");
                $("#A1").removeClass("select");
                $('#tdaddrrelation')[0].style.display = "table-cell";
                $('#tdaddrddrelation')[0].style.display = "table-cell";
                document.getElementById('ctl00_ContentPlaceHolder1_Address1_AreaUserControl1_txtSearchControl').className = 'grey';
                document.getElementById('ctl00_ContentPlaceHolder1_Address1_txtPin').className = 'grey';
                document.getElementById('ctl00_ContentPlaceHolder1_Address1_hdnnationaladdr').value = "Y";
                Clearisdcode();
            }
            else {
                $("#A3").removeClass("select");
                $("#A2").removeClass("select");
                $("#A1").addClass("select");
                $('#tdaddrrelation')[0].style.display = "none";
                $('#tdaddrddrelation')[0].style.display = "none";
                GlobalMyAddress2 = '';
                GlobalMyAddress3 = '';
                document.getElementById('ctl00_ContentPlaceHolder1_Address1_AreaUserControl1_txtSearchControl').className = 'red';
                document.getElementById('ctl00_ContentPlaceHolder1_Address1_txtPin').className = 'red';
                document.getElementById('ctl00_ContentPlaceHolder1_Address1_hdnnationaladdr').value = "N";
                Clearisdcode();
            }*/
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
        focus = 'N';
        var results = eval('(' + eventArgs.get_value() + ')');
        if (document.getElementById('ctl00_ContentPlaceHolder1_Address1_hdndocname').value == "EMP") {
            OnSuccessRefPin(results);
        }
        else if (document.getElementById('ctl00_ContentPlaceHolder1_Address1_hdndocname').value == "CMP") {
            OnSuccessRefPin(results);
        }
        else if (document.getElementById('ctl00_ContentPlaceHolder1_Address1_hdndocname').value == "EditProfile") {
            OnSuccessRefPin(results);
        }
        else {
            if (document.getElementById('ctl00_ContentPlaceHolder1_Address1_hdndocname').value == "REG" && myMultiDatar1 != "") {
                CheckRefAddrPin(results);
            } else {
                OnSuccessRefPin(results);
            }
        }
        OnNullValue(ctl00_ContentPlaceHolder1_Address1_AreaUserControl1_txtSearchControl)
    }
    var focus = 'N';
    function CheckRefAddrPin(results) {
        var area_id = results.AREA_ID; var Refarea_id = "0"; focus = 'N';
        Refarea_id = myMultiDatar1[0]["RefArea_Id"];
        if (Refarea_id > "0") {
            if (Refarea_id != area_id) {
                focus = 'Y';
                $(".smessagebox").scustommessagebox(1, "Info", "The patient address is not in the same region as the referrer's address.  Do you want to continue?", OnSuccessRefPin, results, OnRejectRefPin);
            } else {
                OnSuccessRefPin(results);
            }
        } else {
            OnSuccessRefPin(results);
        }
    }
    function OnSuccessRefPin(results) {
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
        var form_name = $('#ctl00_ContentPlaceHolder1_ReceiptControl2_hdnDocName').val();
        if (form_name == 'REG' || form_name == 'PRE-REG' || form_name == 'CHANGE-REG') {
            document.getElementById('ctl00_ContentPlaceHolder1_txtMobile2').value = results.STD_CODE + '-';

            Assignisdcode();
        
        }

        var SameasPresentAddress, CopyFromPresentAddress, Address1, Address2, Area, PinZip, City, District, State, Country, city_name, state_name, area_name, District_name, country_name, Adres_id, Adrs_rev_no;
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

        if (DivAdressRowIndex == 1) {
            multiDimAddress1(DivAdressRowIndex, SameasPresentAddress, CopyFromPresentAddress, Address1, Address2, Area, PinZip, City, District, State,
        Country, city_name, state_name, area_name, District_name, country_name, Adres_id, Adrs_rev_no);
        }
        if (DivAdressRowIndex == 2) {
            multiDimAddress2(DivAdressRowIndex, SameasPresentAddress, CopyFromPresentAddress, Address1, Address2, Area, PinZip, City, District, State,
             Country, city_name, state_name, area_name, District_name, country_name, Adres_id, Adrs_rev_no);
        }
        if (DivAdressRowIndex == 3) {
            multiDimAddress3(DivAdressRowIndex, SameasPresentAddress, CopyFromPresentAddress, Address1, Address2, Area, PinZip, City, District, State,
            Country, city_name, state_name, area_name, District_name, country_name, Adres_id, Adrs_rev_no);
        }
        if (focus == 'Y') {
            if (document.getElementById('ctl00_ContentPlaceHolder1_Address1_hdndocname').value == "REG") { document.getElementById('ctl00_ContentPlaceHolder1_Address1_txtPin').focus(); }
        }
    }
    function OnRejectRefPin() {
        ClearAddrDtls();
        return false;
    }
    function OnAssignAddressDetails(area_id, area_name, city_id, city_name, state_id, state_name, country_id, country_name, pincode, District, District_name) {
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
        if (area_name != undefined) {
            document.getElementById('<%=AreaUserControl1.FindControl("txtSearchControl").ClientID%>').value = area_name;
            document.getElementById('<%=AreaUserControl1.FindControl("_hiddenID").ClientID%>').value = area_id;
            document.getElementById('<%=AreaUserControl1.FindControl("_hiddenText").ClientID%>').value = area_name;
            document.getElementById('<%=AreaUserControl1.FindControl("txtSearchControl").ClientID%>').className = 'grey';
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
        var SameasPresentAddress, CopyFromPresentAddress, Address1, Address2, Area, PinZip, City, District, State, Country, city_name, state_name, area_name, District_name, country_name, Adres_id, Adrs_rev_no;
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
        District = District;
        if (DivAdressRowIndex == 1) {
            multiDimAddress1(DivAdressRowIndex, SameasPresentAddress, CopyFromPresentAddress, Address1, Address2, Area, PinZip, City, District, State,
        Country, city_name, state_name, area_name, District_name, country_name, Adres_id, Adrs_rev_no);
        }
        if (DivAdressRowIndex == 2) {
            multiDimAddress2(DivAdressRowIndex, SameasPresentAddress, CopyFromPresentAddress, Address1, Address2, Area, PinZip, City, District, State,
             Country, city_name, state_name, area_name, District_name, country_name, Adres_id, Adrs_rev_no);
        }
        if (DivAdressRowIndex == 3) {
            multiDimAddress3(DivAdressRowIndex, SameasPresentAddress, CopyFromPresentAddress, Address1, Address2, Area, PinZip, City, District, State,
            Country, city_name, state_name, area_name, District_name, country_name, Adres_id, Adrs_rev_no);
        }

    }
    function Address1values() {
        if ($('#A1')[0].className == 'root1 select')
            DivAdressRowIndex = 1;
        if ($('#A2')[0].className == 'root1 select')
            DivAdressRowIndex = 2;
        if ($('#A3')[0].className == 'root1 select')
            DivAdressRowIndex = 3;
        var form_name = $('#ctl00_ContentPlaceHolder1_Address1_hdndocname').val();

        var SameasPresentAddress, CopyFromPresentAddress, Address1, Address2, Area, PinZip, City, District, State, Country, city_name, state_name, area_name, District_name, country_name, Adres_id, Adrs_rev_no;
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
        var reg_type = 0;
        if (form_name == 'REG') {
            reg_type = $('#ctl00_ContentPlaceHolder1_ddlRegType').val();
        }
        if (DivAdressRowIndex == 1) {
            if (Area > 0 || reg_type == '5') {
                multiDimAddress1(DivAdressRowIndex, SameasPresentAddress, CopyFromPresentAddress, Address1, Address2, Area, PinZip, City, District, State,
        Country, city_name, state_name, area_name, District_name, country_name, Adres_id, Adrs_rev_no);
            }
        }
        if (DivAdressRowIndex == 2) {
            if (Address1 != '' || Address2 != '' || Area > 0) {
                multiDimAddress2(DivAdressRowIndex, SameasPresentAddress, CopyFromPresentAddress, Address1, Address2, Area, PinZip, City, District, State,
             Country, city_name, state_name, area_name, District_name, country_name, Adres_id, Adrs_rev_no);
            }
        }
        if (DivAdressRowIndex == 3) {
            multiDimAddress3(DivAdressRowIndex, SameasPresentAddress, CopyFromPresentAddress, Address1, Address2, Area, PinZip, City, District, State,
            Country, city_name, state_name, area_name, District_name, country_name, Adres_id, Adrs_rev_no);
        }
    }
    function Address2values() {
        var SameasPresentAddress, CopyFromPresentAddress, Address1, Address2, Area, PinZip, City, District, State, Country, city_name, state_name, area_name, District_name, country_name, Adres_id, Adrs_rev_no;
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
        if (DivAdressRowIndex == 1) {
            if (Area > 0) {
                multiDimAddress1(DivAdressRowIndex, SameasPresentAddress, CopyFromPresentAddress, Address1, Address2, Area, PinZip, City, District, State,
        Country, city_name, state_name, area_name, District_name, country_name, Adres_id, Adrs_rev_no, Adrs_rev_no);
            }
        }
        if (DivAdressRowIndex == 2) {
            if (Address1 != '' || Address2 != '') {
                multiDimAddress2(DivAdressRowIndex, SameasPresentAddress, CopyFromPresentAddress, Address1, Address2, Area, PinZip, City, District, State,
             Country, city_name, state_name, area_name, District_name, country_name, Adres_id, Adrs_rev_no);
            }
        }
        if (DivAdressRowIndex == 3) {
            multiDimAddress3(DivAdressRowIndex, SameasPresentAddress, CopyFromPresentAddress, Address1, Address2, Area, PinZip, City, District, State,
            Country, city_name, state_name, area_name, District_name, country_name, Adres_id, Adrs_rev_no);
        }
    }
    var DivAdressRowIndex = 1;
    $(document).ready(function (e) {


        if (document.getElementById('ctl00_ContentPlaceHolder1_Address1_hdndocname').value == 'REG' || 'CHANGE - REG') {
            if (document.getElementById('<%=hdnIsAssesment.ClientID %>').value == 'False') {
                $("#hgc").css("display", "none");
                $("#hemr").css("display", "none");
            }
            else if (document.getElementById('<%=hdnIsAssesment.ClientID %>').value == 'True') {
                $("#hgc").css("display", "block");
                $("#hemr").css("display", "block");
            }
        }
        else {

            $("#hgc").css("display", "none");
            $("#hemr").css("display", "none");
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
            $("._registration .reff-panelH,.reg-contact-body").css("height", "200px");
        });

        //h1clear
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
            $("._registration .reff-panelH,.reg-contact-body").css("height", "200px");
        });
        $("#DivAdressadditem li").on("click", function () {
            $('#ddivAddress').css('display', 'block');
            $('#divEcGc').css('display', 'none');
            $('#divUcGc').css('display', 'none');
            $('#divUcEmr').css('display', 'none');
            $(".ucAddress-body").css("height", "160px");
            $("._registration .reff-panelH,.reg-contact-body").css("height", "160px");

            $("#hemr").removeClass("select");
            $("#hgc").removeClass("select");
            if (document.getElementById('ctl00_ContentPlaceHolder1_Address1_hdnnationaladdr').value != "Y") {
                var RowIndex = 0;
                var CurrentTar = $(this).data("tar");
                DivAdressRowIndex = $(this).data("tar").substring(9, 7);
                DivAdressRowIndex = DivAdressRowIndex == 0 ? 1 : DivAdressRowIndex;
                if (DivAdressRowIndex == 1) {
                    $('#divchkCopyFromPresentAddress')[0].style.display = "none";
                    $('.divchkSameasPresentAddress')[0].style.display = "none";
                    $('#tdaddrrelation')[0].style.display = "none";
                    $('#tdaddrddrelation')[0].style.display = "none";
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
                        var form_name = document.getElementById('ctl00_ContentPlaceHolder1_Address1_hdndocname').value;
                        if (form_name == 'REG') {

                            if ((getParameterByName("MODE") == "VIEW" || document.getElementById('chkold').checked == true)) {
                                document.getElementById('<%=txtAddress1.ClientID %>').disabled = true;
                                document.getElementById('<%=txtAddress2.ClientID %>').disabled = true;
                                document.getElementById('<%=AreaUserControl1.FindControl("txtSearchControl").ClientID%>').disabled = true;
                                document.getElementById('<%=txtPin.ClientID %>').disabled = true;
                                document.getElementById('lk_btn_ctl00_ContentPlaceHolder1_Address1_AreaUserControl1').disabled = true;
                            }
                        }
                        if (form_name == 'CHANGE-REG') {

                            if ((getParameterByName("MODE") == "VIEW")) {
                                document.getElementById('<%=txtAddress1.ClientID %>').disabled = true;
                                document.getElementById('<%=txtAddress2.ClientID %>').disabled = true;
                                document.getElementById('<%=AreaUserControl1.FindControl("txtSearchControl").ClientID%>').disabled = true;
                                document.getElementById('<%=txtPin.ClientID %>').disabled = true;
                                document.getElementById('lk_btn_ctl00_ContentPlaceHolder1_Address1_AreaUserControl1').disabled = true;
                            }
                        }
                        if (form_name == 'CHANGE-REG') {

                            if ((getParameterByName("MODE") != "VIEW")) {
                                document.getElementById('<%=txtAddress1.ClientID %>').disabled = false;
                                document.getElementById('<%=txtAddress2.ClientID %>').disabled = false;
                                document.getElementById('<%=AreaUserControl1.FindControl("txtSearchControl").ClientID%>').disabled = false;
                                document.getElementById('<%=txtPin.ClientID %>').disabled = false;
                                document.getElementById('lk_btn_ctl00_ContentPlaceHolder1_Address1_AreaUserControl1').disabled = false;
                            }
                        }
                    }
                    else {
                        document.getElementById('<%=txtAddress1.ClientID %>').disabled = false;
                        document.getElementById('<%=txtAddress2.ClientID %>').disabled = false;
                        document.getElementById('<%=AreaUserControl1.FindControl("txtSearchControl").ClientID%>').disabled = false;
                        document.getElementById('<%=txtPin.ClientID %>').disabled = false;
                        document.getElementById('lk_btn_ctl00_ContentPlaceHolder1_Address1_AreaUserControl1').disabled = false;
                        if (document.getElementById('<%=txtAddress1.ClientID %>').value == "") {
                            document.getElementById('<%=txtAddress1.ClientID %>').value = ''; ;
                        }
                        if (document.getElementById('<%=txtAddress2.ClientID %>').value == "") {
                            document.getElementById('<%=txtAddress2.ClientID %>').value = '';
                        }
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
                        document.getElementById('<%=hdnpincode.ClientID %>').value = '';
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
                    $('.divchkSameasPresentAddress')[0].style.display = "table-cell";
                    $('#divchkCopyFromPresentAddress')[0].style.display = "none";
                    $('#tdaddrrelation')[0].style.display = "none";
                    $('#tdaddrddrelation')[0].style.display = "none";
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
                    var form_name = document.getElementById('ctl00_ContentPlaceHolder1_Address1_hdndocname').value;
                    if (form_name == 'REG') {


                        /* bEFORE  Changeing this condition inform pushkar */
                        if ((getParameterByName("MODE") == "VIEW" || document.getElementById('chkold').checked == true)) {
                            document.getElementById('<%=txtAddress1.ClientID %>').disabled = true;
                            document.getElementById('<%=txtAddress2.ClientID %>').disabled = true;
                            document.getElementById('<%=AreaUserControl1.FindControl("txtSearchControl").ClientID%>').disabled = true;
                            document.getElementById('lk_btn_ctl00_ContentPlaceHolder1_Address1_AreaUserControl1').disabled = true;
                            document.getElementById('<%=txtPin.ClientID %>').disabled = true;
                        }
                    }
                    if (form_name == 'CHANGE-REG') {

                        if (getParameterByName("MODE") == "VIEW") {
                            document.getElementById('<%=txtAddress1.ClientID %>').disabled = true;
                            document.getElementById('<%=txtAddress2.ClientID %>').disabled = true;
                            document.getElementById('<%=AreaUserControl1.FindControl("txtSearchControl").ClientID%>').disabled = true;
                            document.getElementById('<%=txtPin.ClientID %>').disabled = true;
                            document.getElementById('lk_btn_ctl00_ContentPlaceHolder1_Address1_AreaUserControl1').disabled = true;
                        }
                    }
                    if (form_name == 'CHANGE-REG') {


                        /* bEFORE  Changeing this condition inform pushkar */
                        if ((getParameterByName("MODE") != "VIEW")) {
                            document.getElementById('<%=txtAddress1.ClientID %>').disabled = false;
                            document.getElementById('<%=txtAddress2.ClientID %>').disabled = false;
                            document.getElementById('<%=AreaUserControl1.FindControl("txtSearchControl").ClientID%>').disabled = false;
                            document.getElementById('lk_btn_ctl00_ContentPlaceHolder1_Address1_AreaUserControl1').disabled = false;
                            document.getElementById('<%=txtPin.ClientID %>').disabled = false;
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
                                //$('#chkSameasPresentAddress')[0].checked = ChngRowIndex.SameasPresentAddress;
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
                        document.getElementById('<%=hdnpincode.ClientID %>').value = '';
                        document.getElementById('<%=hdnaddress_id.ClientID %>').value = 0;
                        document.getElementById('<%=hdnadrs_rev_no.ClientID %>').value = 0;

                    }
                }
                if (DivAdressRowIndex == 3) {
                    $('#divchkCopyFromPresentAddress')[0].style.display = "block";
                    $('.divchkSameasPresentAddress')[0].style.display = "none";
                    $('#tdaddrrelation')[0].style.display = "table-cell";
                    $('#tdaddrddrelation')[0].style.display = "table-cell";

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
                    var form_name = document.getElementById('ctl00_ContentPlaceHolder1_Address1_hdndocname').value;
                    if (form_name == 'REG') {

                        /* bEFORE  Changeing this condition inform pushkar */
                        if ((getParameterByName("MODE") == "VIEW" || document.getElementById('chkold').checked == true)) {
                            document.getElementById('<%=txtAddress1.ClientID %>').disabled = true;
                            document.getElementById('<%=txtAddress2.ClientID %>').disabled = true;
                            document.getElementById('<%=AreaUserControl1.FindControl("txtSearchControl").ClientID%>').disabled = true;
                            document.getElementById('lk_btn_ctl00_ContentPlaceHolder1_Address1_AreaUserControl1').disabled = true;
                            document.getElementById('<%=txtPin.ClientID %>').disabled = true;
                        }
                    }
                    if (form_name == 'CHANGE-REG') {

                        /* bEFORE  Changeing this condition inform pushkar */
                        if (getParameterByName("MODE") == "VIEW") {
                            document.getElementById('<%=txtAddress1.ClientID %>').disabled = true;
                            document.getElementById('<%=txtAddress2.ClientID %>').disabled = true;
                            document.getElementById('<%=AreaUserControl1.FindControl("txtSearchControl").ClientID%>').disabled = true;
                            document.getElementById('lk_btn_ctl00_ContentPlaceHolder1_Address1_AreaUserControl1').disabled = true;
                            document.getElementById('<%=txtPin.ClientID %>').disabled = true;
                        }
                    }
                    if (form_name == 'CHANGE-REG') {

                        /* bEFORE  Changeing this condition inform pushkar */
                        if ((getParameterByName("MODE") != "VIEW")) {
                            document.getElementById('<%=txtAddress1.ClientID %>').disabled = false;
                            document.getElementById('<%=txtAddress2.ClientID %>').disabled = false;
                            document.getElementById('<%=AreaUserControl1.FindControl("txtSearchControl").ClientID%>').disabled = false;
                            document.getElementById('lk_btn_ctl00_ContentPlaceHolder1_Address1_AreaUserControl1').disabled = false;
                            document.getElementById('<%=txtPin.ClientID %>').disabled = false;
                        }
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
                                //$('#chkCopyFromPresentAddress')[0].checked = ChngRowIndex.CopyFromPresentAddress;
                                //$('#chkSameasPresentAddress')[0].checked = ChngRowIndex.SameasPresentAddress;

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
                                // $('#chkCopyFromPresentAddress')[0].checked = ChngRowIndex.CopyFromPresentAddress;
                                //$('#chkSameasPresentAddress')[0].checked = ChngRowIndex.SameasPresentAddress;
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
                        document.getElementById('<%=hdnpincode.ClientID %>').value = '';
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
District, State, Country, city_name, state_name, area_name, District_name, country_name, Adres_id, Adrs_rev_no) {

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
        GlobalMyAddress1 = myMultiAddress1;
    }

    var GlobalMyAddress2 = new Array();
    var myMultiAddress2 = new Array();
    var multiDimAddress22 = 0;

    function multiDimAddress2(rowIndex, SameasPresentAddress, CopyFromPresentAddress, Address1, Address2, Area, PinZip, City, District,
     State, Country, city_name, state_name, area_name, District_name, country_name, Adres_id, Adrs_rev_no) {

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
        GlobalMyAddress2 = myMultiAddress2;
    }



    var GlobalMyAddress3 = new Array();
    var myMultiAddress3 = new Array();
    var multiDimAddress33 = 0;

    function multiDimAddress3(rowIndex, SameasPresentAddress, CopyFromPresentAddress, Address1, Address2,
     Area, PinZip, City, District, State, Country, city_name, state_name, area_name, District_name, country_name, Adres_id, Adrs_rev_no) {

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
            //multiDimAddress1 = '';
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
            multiDimAddress2(DivAdressRowIndex, SameasPresentAddress, CopyFromPresentAddress, Address1, Address2, Area, PinZip, City, District, State, Country, city_name, state_name, area_name, District_name, country_name, Adres_id, Adrs_rev_no);
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
            document.getElementById('<%=hdnpincode.ClientID %>').value = '';
            document.getElementById('<%=hdnaddress_id.ClientID %>').value = 0;
            document.getElementById('<%=hdnadrs_rev_no.ClientID %>').value = 0;
        }
        OnPageValidation();
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
            multiDimAddress3(DivAdressRowIndex, SameasPresentAddress, CopyFromPresentAddress, Address1, Address2, Area, PinZip, City, District, State, Country, city_name, state_name, area_name, District_name, country_name, Adres_id), Adrs_rev_no;
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
            document.getElementById('<%=hdnpincode.ClientID %>').value = '';
            document.getElementById('<%=hdnaddress_id.ClientID %>').value = 0;
            document.getElementById('<%=hdnadrs_rev_no.ClientID %>').value = 0;
        }
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
    function OnStateSelection(objValue, obj) {
        var autoComplete = $find('ctl00_ContentPlaceHolder1_AutoCompleteExtender3');
        var Con_key_ch = '1';
        var results = objValue; // eval('(' + eventArgs.get_value() + ')');
        document.getElementById('<%=hdnstateid.ClientID %>').value = '';
        document.getElementById('<%=hdnstateid.ClientID %>').value = results;
        document.getElementById('<%=txtcityauto.ClientID %>').disabled = false;
        document.getElementById('<%=hdnQStateId.ClientID %>').value = results;
        Con_key_ch = results;
        set_contextKey = Con_key_ch;
        document.getElementById('ctl00_ContentPlaceHolder1_Address1_hdndistrictid').value = '';
        document.getElementById('ctl00_ContentPlaceHolder1_Address1_txtDistrictAuto').value = '';
        document.getElementById('<%=hidncityid.ClientID %>').value = '';
        document.getElementById('ctl00_ContentPlaceHolder1_Address1_txtArea').value = '';
        document.getElementById('ctl00_ContentPlaceHolder1_Address1_txtcityauto').value = '';
        document.getElementById('ctl00_ContentPlaceHolder1_Address1_txtPinCode').value = '';
        document.getElementById('ctl00_ContentPlaceHolder1_Address1_txtstdcode').value = '';
        document.getElementById('ctl00_ContentPlaceHolder1_Address1_txtDistrictAuto').className = 'red';
        document.getElementById('ctl00_ContentPlaceHolder1_Address1_txtcityauto').className = 'red';
        document.getElementById('ctl00_ContentPlaceHolder1_Address1_txtArea').className = 'red';
        //document.getElementById('ctl00_ContentPlaceHolder1_Address1_txtPinCode').style.border = '1px solid rgb(244,122,94)';
    }
    function OncitySelection(objValue, obj) {
        var results = objValue; // eval('(' + eventArgs.get_value() + ')');
        document.getElementById('<%=hidncityid.ClientID %>').value = '';
        document.getElementById('<%=hidncityid.ClientID %>').value = results;
        set_contextKey = document.getElementById('<%=hdnQDstId.ClientID %>').value;
        document.getElementById('<%=txtArea.ClientID %>').disabled = false;
        document.getElementById('ctl00_ContentPlaceHolder1_Address1_txtArea').value = '';
        document.getElementById('ctl00_ContentPlaceHolder1_Address1_txtPinCode').value = '';
        document.getElementById('ctl00_ContentPlaceHolder1_Address1_txtstdcode').value = '';
        document.getElementById('ctl00_ContentPlaceHolder1_Address1_txtArea').className = 'red';
        //document.getElementById('ctl00_ContentPlaceHolder1_Address1_txtPinCode').style.border = '1px solid rgb(244,122,94)';
    }
    //Quick Address Add Saving Start
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
        if (document.getElementById('ctl00_ContentPlaceHolder1_Address1_txtDistrictAuto').value == '') {
            $(".stoast").toastText("warning", "Enter District Name", 5, 3);
            document.getElementById('ctl00_ContentPlaceHolder1_Address1_txtDistrictAuto').focus();
            return false;
        }
        if (document.getElementById('<%=txtcityauto.ClientID %>').value == '') {
            $(".stoast").toastText("warning", "Enter City Name", 5, 3);
            document.getElementById('<%=txtcityauto.ClientID %>').focus();
            return false;
        }
        if (document.getElementById('<%=txtArea.ClientID %>').value == '') {
            $(".stoast").toastText("warning", "Enter Area Name", 5, 3);
            /*alert('Enter Area Name');*/
            document.getElementById('<%=txtArea.ClientID %>').focus();
            return false;
        }
        var mandatory = 0;
//        if (document.getElementById('<%=hdndocname.ClientID %>').value == 'REG') {
//            if (document.getElementById('ctl00_ContentPlaceHolder1_hdnassesment').value == "True") {
//                mandatory = 1;
//            }
        //        }
        
        var clientName = $('[id*=hdnclientNameFor]').val();
        if (clientName == '' || clientName == null || clientName == undefined) { clientName = ''; }
        clientName = clientName.toLowerCase();
        if (clientName != "omega") {
            if (mandatory == 0) {
                if (document.getElementById('<%=txtPinCode.ClientID %>').value == '') {
                    $(".stoast").toastText("warning", "Enter Pin Code", 5, 3);
                    /*alert('Enter Area Name');*/
                    document.getElementById('<%=txtPinCode.ClientID %>').focus();
                    return false;
                }
            }

        }
        if (document.getElementById('ctl00_ContentPlaceHolder1_Address1_txtStateAuto').value != '') {
            if (document.getElementById('ctl00_ContentPlaceHolder1_Address1_hdnstateid').value == 0 || document.getElementById('ctl00_ContentPlaceHolder1_Address1_hdnstateid').value == undefined || document.getElementById('ctl00_ContentPlaceHolder1_Address1_hdnstateid').value == '') {
                document.getElementById('ctl00_ContentPlaceHolder1_Address1_txtStateAuto').value = '';
                $(".stoast").toastText("warning", "Plz Select State Name", 5, 3);
                document.getElementById('ctl00_ContentPlaceHolder1_Address1_txtStateAuto').focus();
                return false;
            }
        }
        if (document.getElementById('ctl00_ContentPlaceHolder1_Address1_txtDistrictAuto').value != '') {
            if (document.getElementById('ctl00_ContentPlaceHolder1_Address1_hdndistrictid').value == 0 || document.getElementById('ctl00_ContentPlaceHolder1_Address1_hdndistrictid').value == undefined || document.getElementById('ctl00_ContentPlaceHolder1_Address1_hdndistrictid').value == '') {
                document.getElementById('ctl00_ContentPlaceHolder1_Address1_txtDistrictAuto').value = '';
                $(".stoast").toastText("warning", "Plz Select District Name", 5, 3);
                document.getElementById('ctl00_ContentPlaceHolder1_Address1_txtDistrictAuto').focus();
                return false;
            }
        }
        if (document.getElementById('ctl00_ContentPlaceHolder1_Address1_txtcityauto').value != '') {
            if (document.getElementById('ctl00_ContentPlaceHolder1_Address1_hidncityid').value == 0 || document.getElementById('ctl00_ContentPlaceHolder1_Address1_hidncityid').value == undefined || document.getElementById('ctl00_ContentPlaceHolder1_Address1_hidncityid').value == '') {
                $(".stoast").toastText("warning", "Plz Select City Name", 5, 3);
                document.getElementById('ctl00_ContentPlaceHolder1_Address1_txtcityauto').value = '';
                document.getElementById('ctl00_ContentPlaceHolder1_Address1_txtcityauto').focus();
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
        var _districtid = document.getElementById('ctl00_ContentPlaceHolder1_Address1_hdndistrictid').value;
        var districtname = document.getElementById('ctl00_ContentPlaceHolder1_Address1_txtDistrictAuto').value;
        var PinCode = document.getElementById('ctl00_ContentPlaceHolder1_Address1_txtPinCode').value;
        var stdcode = document.getElementById('ctl00_ContentPlaceHolder1_Address1_txtstdcode').value;
        if (stdcode == "" || stdcode == null || stdcode == undefined) { stdcode = 0; }
        if (PinCode == "" || PinCode == null || PinCode == undefined) { PinCode = 0; }
        GetAsync(
        "Private/FrontOffice/YRegistration.aspx/saveaddress",
        { countryid: countryid, stateid: stateid, cityid: cityid, areaid: areaid, statename: statename, cityname: cityname, areaname: areaname, districtid: _districtid, PinCode: PinCode, stdcode: stdcode },
        function (JData) {
            var s = JData.d.split(',');
            var aid = s[0];
            var cid = s[1];
            if (aid != 0 || cid != 0 || aid == 0 || cid == 0) {
                document.getElementById('ctl00_ContentPlaceHolder1_Address1_ddlcountry').value = '1'; ;
                document.getElementById('ctl00_ContentPlaceHolder1_Address1_txtStateAuto').value = '';
                document.getElementById('ctl00_ContentPlaceHolder1_Address1_txtcityauto').value = '';
                document.getElementById('ctl00_ContentPlaceHolder1_Address1_txtArea').value = '';
                document.getElementById('ctl00_ContentPlaceHolder1_Address1_txtDistrictAuto').value = '';
                document.getElementById('ctl00_ContentPlaceHolder1_Address1_txtstdcode').value = '';
                document.getElementById('ctl00_ContentPlaceHolder1_Address1_txtPinCode').value = '';
                document.getElementById('ctl00_ContentPlaceHolder1_Address1_hdnAreaId').value = aid;
                document.getElementById('ctl00_ContentPlaceHolder1_Address1_AreaUserControl1_txtSearchControl').value = areaname;
                document.getElementById('ctl00_ContentPlaceHolder1_Address1_AreaUserControl1__hiddenID').value = aid;
                document.getElementById('ctl00_ContentPlaceHolder1_Address1_AreaUserControl1__hiddenText').value = areaname;
                document.getElementById('ctl00_ContentPlaceHolder1_Address1_StateUserControl1').value = statename;
                document.getElementById('ctl00_ContentPlaceHolder1_Address1_CityUserControl1').value = cityname;
                document.getElementById('ctl00_ContentPlaceHolder1_Address1_hdncityid').value = cityid;
                document.getElementById('ctl00_ContentPlaceHolder1_Address1_hdnstateid').value = stateid;
                document.getElementById('ctl00_ContentPlaceHolder1_Address1_hdncountryid').value = countryid;
                document.getElementById('ctl00_ContentPlaceHolder1_Address1_CountryUserControl1').value = countryName;
                document.getElementById('ctl00_ContentPlaceHolder1_Address1_DistricUserControl1').value = districtname;
                document.getElementById('ctl00_ContentPlaceHolder1_Address1_hdndistrictid').value = _districtid;
                if (PinCode == 0) { PinCode = ''; }
                document.getElementById('ctl00_ContentPlaceHolder1_Address1_txtPin').value = PinCode;
                document.getElementById('ctl00_ContentPlaceHolder1_Address1_hdnpincode').value = PinCode;
                $('#ctl00_ContentPlaceHolder1_DivAddress').hide();
                sucess(aid, cid);
                $("#DivAdressadditem li").on("click", function () {
                    var RowIndex = 0;
                    var CurrentTar = $(this).data("tar");
                    DivAdressRowIndex = $(this).data("tar").substring(9, 7);
                    DivAdressRowIndex = DivAdressRowIndex == 0 ? 1 : DivAdressRowIndex;
                });
                var CopyFromPresentAddress = '';
                var SameasPresentAddress = $('#ctl00_ContentPlaceHolder1_Address1_chkSameasPresentAddress')[0].checked;
                var Address1 = document.getElementById('ctl00_ContentPlaceHolder1_Address1_txtAddress1').value;
                var Address2 = document.getElementById('ctl00_ContentPlaceHolder1_Address1_txtAddress2').value;
                var area_name = document.getElementById('ctl00_ContentPlaceHolder1_Address1_AreaUserControl1_txtSearchControl').value;
                var Area = document.getElementById('ctl00_ContentPlaceHolder1_Address1_AreaUserControl1__hiddenID').value;
                var area_name = document.getElementById('ctl00_ContentPlaceHolder1_Address1_AreaUserControl1__hiddenText').value;
                var area_id = document.getElementById('ctl00_ContentPlaceHolder1_Address1_hdnAreaId').value;
                var city_name = document.getElementById('ctl00_ContentPlaceHolder1_Address1_CityUserControl1').value;
                var City = document.getElementById('ctl00_ContentPlaceHolder1_Address1_hdncityid').value;
                var state_name = document.getElementById('ctl00_ContentPlaceHolder1_Address1_StateUserControl1').value;
                var State = document.getElementById('ctl00_ContentPlaceHolder1_Address1_hdnstateid').value;
                var country_name = document.getElementById('ctl00_ContentPlaceHolder1_Address1_CountryUserControl1').value;
                var Country = document.getElementById('ctl00_ContentPlaceHolder1_Address1_hdncountryid').value;
                var PinZip = document.getElementById('ctl00_ContentPlaceHolder1_Address1_txtPin').value;
                var District_name = document.getElementById('ctl00_ContentPlaceHolder1_Address1_DistricUserControl1').value;
                var District = document.getElementById('ctl00_ContentPlaceHolder1_Address1_hdndistrictid').value;
                if (DivAdressRowIndex == 1) {
                    multiDimAddress1(DivAdressRowIndex, SameasPresentAddress, CopyFromPresentAddress, Address1, Address2, Area, PinZip, City, District, State, Country, city_name, state_name, area_name, District_name, country_name);
                }
                if (DivAdressRowIndex == 2) {
                    multiDimAddress2(DivAdressRowIndex, SameasPresentAddress, CopyFromPresentAddress, Address1, Address2, Area, PinZip, City, District, State, Country, city_name, state_name, area_name, District_name, country_name);
                }
                if (DivAdressRowIndex == 3) {
                    multiDimAddress3(DivAdressRowIndex, SameasPresentAddress, CopyFromPresentAddress, Address1, Address2, Area, PinZip, City, District, State, Country, city_name, state_name, area_name, District_name, country_name);
                }
            }
            else {
                sucess(aid, cid);
            }
        },
        function (jqXHR, textStatus, errorThrown) {
            $(".stoast").toastText("warning", errorThrown, 5, 3);
        });
        return false;
    }
    function sucess(aid, cid) {

        if (aid != 0 || cid != "") {
            $(".stoast").toastText("Success", "Address Saved Sucessfully", 5, 1);
            $('[id*=DivAddress]')[0].style.display = 'none';
        }
        else {
            if (aid == "0" || cid == "") {
                $(".stoast").toastText("warning", "Already Exists Address", 5, 3);
                document.getElementById('ctl00_ContentPlaceHolder1_Address1_AreaUserControl1_txtSearchControl').value = "";
                document.getElementById('ctl00_ContentPlaceHolder1_Address1_txtPin').value = "";
                document.getElementById('ctl00_ContentPlaceHolder1_Address1_CityUserControl1').value = "";
                document.getElementById('ctl00_ContentPlaceHolder1_Address1_DistricUserControl1').value = "";
                document.getElementById('ctl00_ContentPlaceHolder1_Address1_StateUserControl1').value = "";
                document.getElementById('ctl00_ContentPlaceHolder1_Address1_CountryUserControl1').value = "";
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

    function OnAddressDet(results) {

        focus = 'N';
        if ($('#<%=hdndocname.ClientID %>').val() == "EMP") {
            OnSuccessRef(results);
        }
        else if ($('#<%=hdndocname.ClientID %>').val() == "CMP") {
            OnSuccessRef(results);
        }
        else if ($('#<%=hdndocname.ClientID %>').val() == "PRE-REG") {
            OnSuccessRef(results);
        }
        else if (document.getElementById('ctl00_ContentPlaceHolder1_Address1_hdndocname').value == "EditProfile") {
            if (results.RESULT == undefined) {
                OnSuccessRefPin(results);
            }
            else {
                OnSuccessRefPin(results.RESULT);
            }
        }
        else {
            if (document.getElementById('ctl00_ContentPlaceHolder1_Address1_hdndocname').value == "REG" && myMultiDatar1 != "") {
                CheckRefAddress(results);
            } else {
                OnSuccessRef(results);
            }
        }
        OnNullValue(ctl00_ContentPlaceHolder1_Address1_AreaUserControl1_txtSearchControl)
    }
    function CheckRefAddress(results) {
        var area_id = "0"; var Refarea_id = "0"; focus = 'N';
        Refarea_id = myMultiDatar1[0]["RefArea_Id"];
        if (results.AREA_ID == undefined) { area_id = results.RESULT.AREA_ID; } else { area_id = results.AREA_ID; }
        if (Refarea_id > "0") {
            if (Refarea_id != area_id) {
                focus = 'Y';
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
            document.getElementById('ctl00_ContentPlaceHolder1_Address1_hdnSTDCode').value = results.RESULT.STD_CODE;
            document.getElementById('ctl00_ContentPlaceHolder1_Address1_hdnISDCode').value = results.RESULT.ISD_CODE;
            document.getElementById('ctl00_ContentPlaceHolder1_Address1_AreaUserControl1_txtSearchControl').className = 'grey';
            var form_name = $('#ctl00_ContentPlaceHolder1_ReceiptControl2_hdnDocName').val();
            var docname = $('#ctl00_ContentPlaceHolder1_Address1_hdndocname').val();
            if (form_name == "REG" || docname == "PRE-REG") {
                AssignTelephn();
                Assignisdcode();
            }
            else if (docname == 'CHANGE-REG') {
                Assignisdcode()
                document.getElementById('ctl00_ContentPlaceHolder1_txtMobile2').value = results.RESULT.STD_CODE;
            }
            else
            { }

        }
        else {
            $("#ctl00_ContentPlaceHolder1_Address1_AreaUserControl1_txtSearchControl").val(results["_lktext"]);
            OnAssignAddressDetails(results.AREA_ID, results.AREA_NAME, results.CITY_ID, results.CITY_NAME, results.STATE_ID, results.STATE_NAME, results.COUNTRY_ID, results.COUNTRY_NAME, results.PIN_CODE, results.DISTRICT_ID, results.DISTRICT_NAME);
            document.getElementById('ctl00_ContentPlaceHolder1_Address1_hdnSTDCode').value = results.STD_CODE;
            document.getElementById('ctl00_ContentPlaceHolder1_Address1_hdnISDCode').value = results.ISD_CODE;
            document.getElementById('ctl00_ContentPlaceHolder1_Address1_AreaUserControl1_txtSearchControl').className = 'grey';
            var form_name = $('#ctl00_ContentPlaceHolder1_ReceiptControl2_hdnDocName').val();
            var docname = $('#ctl00_ContentPlaceHolder1_Address1_hdndocname').val();
            if (form_name == "REG" || docname == "PRE-REG") {
                AssignTelephn();
                Assignisdcode();
            }
            else if (docname == 'CHANGE-REG') {
                Assignisdcode()
                document.getElementById('ctl00_ContentPlaceHolder1_txtMobile2').value = results.STD_CODE;
            }
            else
            { }
        }
        if (focus == 'Y') {
            if (document.getElementById('ctl00_ContentPlaceHolder1_Address1_hdndocname').value == "REG") { document.getElementById('ctl00_ContentPlaceHolder1_Address1_txtPin').focus(); }
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
            document.getElementById('<%=ddlcountry.ClientID %>').value = 0;
            set_contextKey = 1;
            document.getElementById('<%=txtPinCode.ClientID %>').value = '';
            document.getElementById('ctl00_ContentPlaceHolder1_Address1_txtStateAuto').className = 'red';
            document.getElementById('ctl00_ContentPlaceHolder1_Address1_txtDistrictAuto').className = 'red';
            document.getElementById('ctl00_ContentPlaceHolder1_Address1_txtcityauto').className = 'red';
            document.getElementById('ctl00_ContentPlaceHolder1_Address1_txtArea').className = 'red';
            var mandatory = 0;
            if (document.getElementById('<%=hdndocname.ClientID %>').value == 'REG') {
                if (document.getElementById('ctl00_ContentPlaceHolder1_hdnassesment').value == "True") {
                    mandatory = 1;
                }
            }
            if (mandatory == 0) {
                //document.getElementById('ctl00_ContentPlaceHolder1_Address1_txtPinCode').style.border = '1px solid rgb(244,122,94)';
            }
            $('[id*=DivAddress]')[0].style.display = 'block';
        }
        else {
            $(".stoast").toastText("warning", "You dont have permission to Quick Add", 5, 3);
            /*alert('You dont have permission to Quick Add');*/
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
        document.getElementById('<%=ddrelationaddr.ClientID %>').value = '0';
        document.getElementById('<%=UcGuarantor.FindControl("chkECopyAddress").ClientID %>').checked = false;
        document.getElementById('<%=UcGuarantor.FindControl("txtEName").ClientID %>').value = '';
        document.getElementById('<%=UcGuarantor.FindControl("ddlERelation").ClientID %>').value = 0;
        document.getElementById('<%=UcGuarantor.FindControl("txtmobileno").ClientID %>').value = '';
        document.getElementById('<%=UcGuarantor.FindControl("txtAddress1").ClientID %>').value = '';
        document.getElementById('<%=UcGuarantor.FindControl("txtAddress2").ClientID %>').value = '';
        document.getElementById('<%=UcGuarantor.FindControl("ucArea").FindControl("txtSearchControl").ClientID %>').value = '';
        document.getElementById('<%=UcGuarantor.FindControl("ucArea").FindControl("_hiddenID").ClientID %>').value = 0;
        document.getElementById('<%=UcGuarantor.FindControl("ucArea").FindControl("_hiddenText").ClientID %>').value = '';
        document.getElementById('<%=UcGuarantor.FindControl("txtPin").ClientID %>').value = '';
        document.getElementById('<%=UcGuarantor.FindControl("hdnpincode").ClientID %>').value = 0;
        document.getElementById('<%=UcGuarantor.FindControl("ucCity").ClientID %>').value = '';
        document.getElementById('<%=UcGuarantor.FindControl("hdncityid").ClientID %>').value = 0;
        document.getElementById('<%=UcGuarantor.FindControl("DistricUserControl1").ClientID %>').value = '';
        document.getElementById('<%=UcGuarantor.FindControl("hdndistrictid").ClientID %>').value = 0;
        document.getElementById('<%=UcGuarantor.FindControl("ucState").ClientID %>').value = '';
        document.getElementById('<%=UcGuarantor.FindControl("hdnstateid").ClientID %>').value = 0;
        document.getElementById('<%=UcGuarantor.FindControl("ucCountry").ClientID %>').value = '';
        document.getElementById('<%=UcGuarantor.FindControl("hdncountryid").ClientID %>').value = '';
        document.getElementById('<%=UcGuarantor.FindControl("chkGCopyAddress").ClientID %>').checked = false;
        document.getElementById('<%=UcGuarantor.FindControl("txtGEName").ClientID %>').value = '';
        document.getElementById('<%=UcGuarantor.FindControl("ddlGERelation").ClientID %>').value = 0;
        document.getElementById('<%=UcGuarantor.FindControl("txtGmobileno").ClientID %>').value = '';
        document.getElementById('<%=UcGuarantor.FindControl("txtGAddress1").ClientID %>').value = '';
        document.getElementById('<%=UcGuarantor.FindControl("txtGAddress2").ClientID %>').value = '';
        document.getElementById('<%=UcGuarantor.FindControl("ucGArea").FindControl("txtSearchControl").ClientID %>').value = '';
        document.getElementById('<%=UcGuarantor.FindControl("ucGArea").FindControl("_hiddenID").ClientID %>').value = 0;
        document.getElementById('<%=UcGuarantor.FindControl("ucGArea").FindControl("_hiddenText").ClientID %>').value = '';
        document.getElementById('<%=UcGuarantor.FindControl("txtGPin").ClientID %>').value = '';
        document.getElementById('<%=UcGuarantor.FindControl("hdnGpincode").ClientID %>').value = 0;
        document.getElementById('<%=UcGuarantor.FindControl("ucGCity").ClientID %>').value = '';
        document.getElementById('<%=UcGuarantor.FindControl("hdnGcityid").ClientID %>').value = 0;
        document.getElementById('<%=UcGuarantor.FindControl("txtGdistrict").ClientID %>').value = '';
        document.getElementById('<%=UcGuarantor.FindControl("hdnGdistId").ClientID %>').value = 0;
        document.getElementById('<%=UcGuarantor.FindControl("ucGState").ClientID %>').value = '';
        document.getElementById('<%=UcGuarantor.FindControl("hdnGstateid").ClientID %>').value = 0;
        document.getElementById('<%=UcGuarantor.FindControl("ucGCountry").ClientID %>').value = '';
    }
</script>
<style>
.kin_name{display:none;}

</style>
<div class="panel-heading tabs">
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
        Emergency</h3>
    <h3 id="hgc" class="panel-title tab_title subtabs tpleft guarantor">
    <p style="    margin: 0px;">
       Guarantor</p>
       <span class="kin_name">KIN Name</span>
       </h3>
    <asp:RadioButtonList ID="rdbtndefstate" runat="server" RepeatDirection="Horizontal"
        CssClass="chk-list1" onchange="OnStateChange(this);">
        <asp:ListItem Value="D" Text="Default" Selected="True"></asp:ListItem>
        <asp:ListItem Value="A" Text="All"></asp:ListItem>
    </asp:RadioButtonList>
    <label id="h1clear" onclick="ClearAddressDetails();" class="su-refresh-1 pheadico tooltip"
        title="Clear" tooltip="Clear">
    </label>
    <div class="clr">
    </div>
    <div class="addnew">
        <asp:ImageButton ID="imgBtnQuickAddr" runat="server" ImageUrl="~/Assets/img/gray-sprite.png"
            CssClass="flagclip QuickICO" OnClientClick="return OnAddressDetails();" />
    </div>
</div>
<div  style="height: 160px;" class=" divscroll panel-body ucAddress-body">
    <div id="ddivAddress" >

       <table border="0" cellpadding="0" cellspacing="0" align="center" width="100%" class="FormsCtrl address_type"style="margin: 0px !important">
            <tr>
            <td>
             <div class="formflex flex-column ">
             <div class="formelements  divchkSameasPresentAddress" style="display: none; margin-left: -4PX;">
                         
                                    <div class="formelementstxt">
                                     <asp:CheckBox ID="chkSameasPresentAddress" runat="server" CssClass="chk-list" onclick="samepresent(this);"
                            Text="Copy From Patient Address" />
                                    </div>
                                    </div>

                                         <div class="formelements  divchkSameasPresentAddress" style="display: none; margin-left: -4PX;">
                                    <div class="formelementstxt" id="divchkCopyFromPresentAddress" style="display: none; margin-left: -4PX;">
                        <asp:CheckBox ID="chkCopyFromPresentAddress" Style="display: none; margin-left: -4PX;"
                            runat="server" CssClass="chk-list" onclick="copypresent(this);" Text="Copy From Patient Address" />
                                    </div>
                                    </div>

                                         <div class="formelements ">
                                    <div class="formelementslbl" id="tdaddrrelation" style="display: none">
                                       <asp:Label ID="lblrelation" runat="server" Text="Addr Type"></asp:Label>
                                    </div>
                                    <div class="formelementstxt"  id="tdaddrddrelation" style="display: none">
                         <asp:DropDownList ID="ddrelationaddr" runat="server">
                    </asp:DropDownList>

                                    </div>
                                    </div>

                                         <div class="formelements ">
                                    <div class="formelementslbl" id="tdAdrs1">
                                     Address1
                                    </div>
                                    <div class="formelementstxt" >
                                      <asp:HiddenField ID="hdnaddress_id" runat="server" />
                    <asp:HiddenField ID="hdnadrs_rev_no" runat="server" />
                    <asp:TextBox ID="txtAddress1" runat="server" placeholder=" " Width="100%" MaxLength="64" autocomplete="off" CssClass="tbwidth"
                        onkeydown="OnNullValue(this);return validateTextBox(event, this); return onExtendedAddress();"
                        onblur="Address1values();UpperCase(this); return OnAdmnNullValue(this);" onkeypress="return onExtendedAddress();"
                        ToolTip="Enter Address1"></asp:TextBox>
                                    </div>
                                    </div>

                                         <div class="formelements ">
                                    <div class="formelementslbl" id="tdAdrs2">
                                     Address2
                                    </div>
                                    <div class="formelementstxt" >
                                       <asp:TextBox ID="txtAddress2" Width="100%" placeholder=" " runat="server" MaxLength="64" autocomplete="off" ToolTip="Enter Address2"
                        CssClass="tbwidth" onblur="Address2values();UpperCase(this);" onkeyup="return onExtendedAddress();"></asp:TextBox>
                                    </div>
                                    </div>

                                         <div class="formelements 1col-lbl flex-col-50">
                                    <div class="formelementslbl" >
                                      Area
                                    </div>
                                    <div class="formelementstxt" >
                                      <GenericSearch:GenericGrid ID="AreaUserControl1" width="100%" runat="server"  placeholder=" " CallbackFn="OnAddressDet" />
                    <asp:HiddenField ID="hdnAreaId" runat="server" />
                                    </div>
                                    </div>

                                         <div class="formelements 2col-lbl flex-col-50">
                                    <div class="formelementslbl col-1" >
                                     <asp:Label ID="lblpin" runat="server" Text="Pin/Zip"></asp:Label>
                                    </div>
                                    <div class="formelementstxt" >
                                      <asp:TextBox ID="txtPin" width="100%" runat="server" placeholder=" "  onkeypress="return chkNumeric(event);" onblur="checkvalidpin();"
                        autocomplete="off"></asp:TextBox>
                    <asp:HiddenField ID="hdnpincode" runat="server" />
                    <ajaxToolkit:AutoCompleteExtender ID="AutoCompleteExtender2"  ServiceMethod="GetAutoComp_Pincode"
                        MinimumPrefixLength="3" ServicePath="~/PatientRegistration.asmx" CompletionInterval="100"
                        UseContextKey="true" EnableCaching="false" CompletionSetCount="10" CompletionListItemCssClass="autocomplete_listItem"
                        CompletionListCssClass="autocomplete_completionListElement" CompletionListHighlightedItemCssClass="autocomplete_highlightedListItem"
                        TargetControlID="txtPin" ContextKey="PIN_CODE" OnClientItemSelected="Onpincodeselection"
                        runat="server" FirstRowSelected="false">
                    </ajaxToolkit:AutoCompleteExtender>
                                    </div>
                                    </div>
                                         <div class="formelements flex-col-50">
                                    <div class="formelementslbl" >
                                    City
                                    </div>
                                    <div class="formelementstxt" >
                                          <asp:TextBox ID="CityUserControl1" placeholder=" " Width="100%"  runat="server" Enabled="false"></asp:TextBox>
                    <asp:HiddenField ID="hdncityid" runat="server" />
                                    </div>
                                    </div>
                                      <div class="formelements  2col-lbl  flex-col-50">
                                    <div class="formelementslbl " >
                                    District
                                    </div>
                                    <div class="formelementstxt" >
                                          <asp:TextBox  ID="DistricUserControl1" Width="100%" placeholder=" " runat="server" Enabled="false"></asp:TextBox>
                    <asp:HiddenField ID="hdndistrictid" runat="server" />
                                    </div>
                                    </div>
                                      <div class="formelements flex-col-50">
                                    <div class="formelementslbl" >
                                     State
                                    </div>
                                    <div class="formelementstxt" >
                                        <asp:TextBox ID="StateUserControl1" Width="100%" runat="server" placeholder=" "  Enabled="false"></asp:TextBox>
                    <asp:HiddenField ID="hdnstateid" runat="server" />
                                    </div>
                                    </div>
                                      <div class="formelements  2col-lbl flex-col-50">
                                    <div class="formelementslbl " >
                                    Country
                                    </div>
                                    <div class="formelementstxt" >
                                         <asp:TextBox ID="CountryUserControl1" Width="100%" placeholder=" "  runat="server" Enabled="false"></asp:TextBox>
                    <asp:HiddenField ID="hdncountryid" runat="server" />
                                    </div>
                                    </div>

                                

                                    </div>
                                    </td>
                                    </tr>
                                    </table>

    
    </div>
    <div id="divEcGc" style="display: none">
        <ucGuarantee:Guarantee ID="UcGuarantor" runat="server" />
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
                        <asp:DropDownList ID="ddlcountry" AutoPostBack="false" runat="server" onchange="return onchangeCounrty(this);">
                        </asp:DropDownList>
                    </td>
                </tr>
                <tr>
                    <td align="left">
                        State
                    </td>
                    <td align="left">
                        <div style="position: relative;">
                            <asp:TextBox ID="txtStateAuto" autocomplete="off" onkeypress="makeTxtBxAuto(this,'State');return OnlyCharecters(event);"
                                onkeyup="return setstatecontextkey(this);" placeholder="Enter State Name" runat="server"></asp:TextBox>
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
                            <asp:TextBox ID="txtDistrictAuto" autocomplete="off" onkeyup="setdistrictcontextkey();"
                                onkeypress="makeTxtBxAuto(this,'District');return OnlyCharecters(event);" placeholder="Enter District Name"
                                runat="server"></asp:TextBox>
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
                            <asp:TextBox ID="txtcityauto" autocomplete="off" onkeypress="makeTxtBxAuto(this,'City');return OnlyCharecters(event);"
                                onkeyup="setcitycontextkey();" placeholder="Enter City Name" runat="server"></asp:TextBox>
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
                            <asp:TextBox ID="txtArea" autocomplete="off" placeholder="Enter Area Name" runat="server"
                                onkeypress="return OnlyCharecters(event);" onblur="HideAutoCompletion(this);"></asp:TextBox>
                            <div id="AutoAreaDiv" class="lk_auto_options">
                            </div>
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
                        STD Code
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
<asp:HiddenField ID="hdnempflag" runat="server" />
<asp:HiddenField ID="hdnnationaladdr" Value="N" runat="server" />
<asp:HiddenField ID="hdnNatlId" runat="server" />
<asp:HiddenField ID="hdnIsAssesment" runat="server" />
<asp:HiddenField ID="hdnDefNation" runat="server" />
<asp:HiddenField ID="hdnflag" runat="server" />
<asp:HiddenField ID="hdndefaultstate" runat="server" />