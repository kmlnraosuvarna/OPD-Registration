
var set_contextKey = '';
var ReferalSelectionType = 0;
var SelectedRowIndex = 0;
$(document).ready(function (e) {
    $("#ReferalDiv li").on("click", function () {
        var RowIndex = 0;
        var CurrentTar = $(this).data("tar");
        SelectedRowIndex = $(this).data("tar").substring(4, 5);
        SelectedRowIndex = SelectedRowIndex == 0 ? 1 : SelectedRowIndex;
        if (SelectedRowIndex == 1) {
            if (GlobalMyData1 != '') {
                $.each(GlobalMyData1, function (ArrIndex, ChngRowIndex) {

                    if (ChngRowIndex.rowIndex == SelectedRowIndex) {
                        document.getElementById('ctl00_ContentPlaceHolder1_ucReferal_ddlreferral').value = ChngRowIndex.Source;
                        document.getElementById('ctl00_ContentPlaceHolder1_ucReferal_txtReferal').value = ChngRowIndex.Name;
                        document.getElementById('ctl00_ContentPlaceHolder1_ucReferal_txtReferralClass').value = ChngRowIndex.ReferalClass;
                        document.getElementById('ctl00_ContentPlaceHolder1_ucReferal_txtrefaddr').value = ChngRowIndex.Address;
                        document.getElementById('ctl00_ContentPlaceHolder1_ucReferal_txtRefPhone').value = ChngRowIndex.Phone;
                        document.getElementById('ctl00_ContentPlaceHolder1_ucReferal__hdnID').value = ChngRowIndex.id;
                    }
                    else {
                        document.getElementById('ctl00_ContentPlaceHolder1_ucReferal_ddlreferral').value = ChngRowIndex.Source;
                        document.getElementById('ctl00_ContentPlaceHolder1_ucReferal_txtReferal').value = ChngRowIndex.Name;
                        document.getElementById('ctl00_ContentPlaceHolder1_ucReferal_txtReferralClass').value = ChngRowIndex.ReferalClass;
                        document.getElementById('ctl00_ContentPlaceHolder1_ucReferal_txtrefaddr').value = ChngRowIndex.Address;
                        document.getElementById('ctl00_ContentPlaceHolder1_ucReferal_txtRefPhone').value = ChngRowIndex.Phone;
                        document.getElementById('ctl00_ContentPlaceHolder1_ucReferal__hdnID').value = ChngRowIndex.id;
                    }
                });
            }
            else {
                document.getElementById('ctl00_ContentPlaceHolder1_ucReferal_ddlreferral').value = 0;
                document.getElementById('ctl00_ContentPlaceHolder1_ucReferal_txtReferal').value = '';
                document.getElementById('ctl00_ContentPlaceHolder1_ucReferal_txtReferralClass').value = '';
                document.getElementById('ctl00_ContentPlaceHolder1_ucReferal_txtrefaddr').value = '';
                document.getElementById('ctl00_ContentPlaceHolder1_ucReferal_txtRefPhone').value = '';
                document.getElementById('ctl00_ContentPlaceHolder1_ucReferal__hdnID').value = 0;
            }
        }
        if (SelectedRowIndex == 2) {
            if (GlobalMyData2 != '') {
                $.each(GlobalMyData2, function (ArrIndex, ChngRowIndex) {
                    if (ChngRowIndex.rowIndex == SelectedRowIndex) {
                        document.getElementById('ctl00_ContentPlaceHolder1_ucReferal_ddlreferral').value = ChngRowIndex.Source;
                        document.getElementById('ctl00_ContentPlaceHolder1_ucReferal_txtReferal').value = ChngRowIndex.Name;
                        document.getElementById('ctl00_ContentPlaceHolder1_ucReferal_txtReferralClass').value = ChngRowIndex.ReferalClass;
                        document.getElementById('ctl00_ContentPlaceHolder1_ucReferal_txtrefaddr').value = ChngRowIndex.Address;
                        document.getElementById('ctl00_ContentPlaceHolder1_ucReferal_txtRefPhone').value = ChngRowIndex.Phone;
                        document.getElementById('ctl00_ContentPlaceHolder1_ucReferal__hdnID').value = ChngRowIndex.id;
                    }
                    else {
                        document.getElementById('ctl00_ContentPlaceHolder1_ucReferal_ddlreferral').value = ChngRowIndex.Source;
                        document.getElementById('ctl00_ContentPlaceHolder1_ucReferal_txtReferal').value = ChngRowIndex.Name;
                        document.getElementById('ctl00_ContentPlaceHolder1_ucReferal_txtReferralClass').value = ChngRowIndex.ReferalClass;
                        document.getElementById('ctl00_ContentPlaceHolder1_ucReferal_txtrefaddr').value = ChngRowIndex.Address;
                        document.getElementById('ctl00_ContentPlaceHolder1_ucReferal_txtRefPhone').value = ChngRowIndex.Phone;
                        document.getElementById('ctl00_ContentPlaceHolder1_ucReferal__hdnID').value = ChngRowIndex.id;

                    }
                });
            }
            else {
                document.getElementById('ctl00_ContentPlaceHolder1_ucReferal_ddlreferral').value = 0;
                document.getElementById('ctl00_ContentPlaceHolder1_ucReferal_txtReferal').value = '';
                document.getElementById('ctl00_ContentPlaceHolder1_ucReferal_txtReferralClass').value = '';
                document.getElementById('ctl00_ContentPlaceHolder1_ucReferal_txtrefaddr').value = '';
                document.getElementById('ctl00_ContentPlaceHolder1_ucReferal_txtRefPhone').value = '';
                document.getElementById('ctl00_ContentPlaceHolder1_ucReferal__hdnID').value = 0;
            }

        }
        if (SelectedRowIndex == 3) {
            if (GlobalMyData3 != '') {
                $.each(GlobalMyData3, function (ArrIndex, ChngRowIndex) {
                    if (ChngRowIndex.rowIndex == SelectedRowIndex) {
                        document.getElementById('ctl00_ContentPlaceHolder1_ucReferal_ddlreferral').value = ChngRowIndex.Source;
                        document.getElementById('ctl00_ContentPlaceHolder1_ucReferal_txtReferal').value = ChngRowIndex.Name;
                        document.getElementById('ctl00_ContentPlaceHolder1_ucReferal_txtReferralClass').value = ChngRowIndex.ReferalClass;
                        document.getElementById('ctl00_ContentPlaceHolder1_ucReferal_txtrefaddr').value = ChngRowIndex.Address;
                        document.getElementById('ctl00_ContentPlaceHolder1_ucReferal_txtRefPhone').value = ChngRowIndex.Phone;
                        document.getElementById('ctl00_ContentPlaceHolder1_ucReferal__hdnID').value = ChngRowIndex.id;
                    }
                    else {
                        document.getElementById('ctl00_ContentPlaceHolder1_ucReferal_ddlreferral').value = ChngRowIndex.Source;
                        document.getElementById('ctl00_ContentPlaceHolder1_ucReferal_txtReferal').value = ChngRowIndex.Name;
                        document.getElementById('ctl00_ContentPlaceHolder1_ucReferal_txtReferralClass').value = ChngRowIndex.ReferalClass;
                        document.getElementById('ctl00_ContentPlaceHolder1_ucReferal_txtrefaddr').value = ChngRowIndex.Address;
                        document.getElementById('ctl00_ContentPlaceHolder1_ucReferal_txtRefPhone').value = ChngRowIndex.Phone;
                        document.getElementById('ctl00_ContentPlaceHolder1_ucReferal__hdnID').value = ChngRowIndex.id;

                    }
                });
            }
            else {
                document.getElementById('ctl00_ContentPlaceHolder1_ucReferal_ddlreferral').value = 0;
                document.getElementById('ctl00_ContentPlaceHolder1_ucReferal_txtReferal').value = '';
                document.getElementById('ctl00_ContentPlaceHolder1_ucReferal_txtReferralClass').value = '';
                document.getElementById('ctl00_ContentPlaceHolder1_ucReferal_txtrefaddr').value = '';
                document.getElementById('ctl00_ContentPlaceHolder1_ucReferal_txtRefPhone').value = '';
                document.getElementById('ctl00_ContentPlaceHolder1_ucReferal__hdnID').value = 0;
            }

        }
        if (SelectedRowIndex == 4) {
            if (GlobalMyData4 != '') {
                $.each(GlobalMyData4, function (ArrIndex, ChngRowIndex) {
                    if (ChngRowIndex.rowIndex == SelectedRowIndex) {
                        document.getElementById('ctl00_ContentPlaceHolder1_ucReferal_ddlreferral').value = ChngRowIndex.Source;
                        document.getElementById('ctl00_ContentPlaceHolder1_ucReferal_txtReferal').value = ChngRowIndex.Name;
                        document.getElementById('ctl00_ContentPlaceHolder1_ucReferal_txtReferralClass').value = ChngRowIndex.ReferalClass;
                        document.getElementById('ctl00_ContentPlaceHolder1_ucReferal_txtrefaddr').value = ChngRowIndex.Address;
                        document.getElementById('ctl00_ContentPlaceHolder1_ucReferal_txtRefPhone').value = ChngRowIndex.Phone;
                        document.getElementById('ctl00_ContentPlaceHolder1_ucReferal__hdnID').value = ChngRowIndex.id;
                    }
                    else {
                        document.getElementById('ctl00_ContentPlaceHolder1_ucReferal_ddlreferral').value = ChngRowIndex.Source;
                        document.getElementById('ctl00_ContentPlaceHolder1_ucReferal_txtReferal').value = ChngRowIndex.Name;
                        document.getElementById('ctl00_ContentPlaceHolder1_ucReferal_txtReferralClass').value = ChngRowIndex.ReferalClass;
                        document.getElementById('ctl00_ContentPlaceHolder1_ucReferal_txtrefaddr').value = ChngRowIndex.Address;
                        document.getElementById('ctl00_ContentPlaceHolder1_ucReferal_txtRefPhone').value = ChngRowIndex.Phone;
                        document.getElementById('ctl00_ContentPlaceHolder1_ucReferal__hdnID').value = ChngRowIndex.id;

                    }
                });
            }
            else {
                document.getElementById('ctl00_ContentPlaceHolder1_ucReferal_ddlreferral').value = 0;
                document.getElementById('ctl00_ContentPlaceHolder1_ucReferal_txtReferal').value = '';
                document.getElementById('ctl00_ContentPlaceHolder1_ucReferal_txtReferralClass').value = '';
                document.getElementById('ctl00_ContentPlaceHolder1_ucReferal_txtrefaddr').value = '';
                document.getElementById('ctl00_ContentPlaceHolder1_ucReferal_txtRefPhone').value = '';
                document.getElementById('ctl00_ContentPlaceHolder1_ucReferal__hdnID').value = 0;
            }
        }

    });
});

var GlobalMyData1 = new Array();
var myMultiDatar1 = new Array();
var multiDimArrayr1 = 0;

function multiDimArrayR1(RowIndex, Source, Name, ReferalClass, Address, Phone, id) {
    var c = multiDimArrayr1;
    myMultiDatar1[c] = new Array(6);
    myMultiDatar1[c]["rowIndex"] = RowIndex;
    myMultiDatar1[c]["Source"] = Source;
    myMultiDatar1[c]["Name"] = Name;
    myMultiDatar1[c]["ReferalClass"] = ReferalClass;
    myMultiDatar1[c]["Address"] = Address;
    myMultiDatar1[c]["Phone"] = Phone;
    myMultiDatar1[c]["id"] = id;
    GlobalMyData1 = myMultiDatar1;
}
var GlobalMyData2 = new Array();
var myMultiDatar2 = new Array();
var multiDimArrayr2 = 0;

function multiDimArrayR2(RowIndex, Source, Name, ReferalClass, Address, Phone, id) {
    var c = multiDimArrayr2;
    myMultiDatar2[c] = new Array(6);
    myMultiDatar2[c]["rowIndex"] = RowIndex;
    myMultiDatar2[c]["Source"] = Source;
    myMultiDatar2[c]["Name"] = Name;
    myMultiDatar2[c]["ReferalClass"] = ReferalClass;
    myMultiDatar2[c]["Address"] = Address;
    myMultiDatar2[c]["Phone"] = Phone;
    myMultiDatar2[c]["id"] = id;
    GlobalMyData2 = myMultiDatar2;
}

var GlobalMyData3 = new Array();
var myMultiDatar3 = new Array();
var multiDimArrayr3 = 0;

function multiDimArrayR3(RowIndex, Source, Name, ReferalClass, Address, Phone, id) {
    var c = multiDimArrayr3;
    myMultiDatar3[c] = new Array(6);
    myMultiDatar3[c]["rowIndex"] = RowIndex;
    myMultiDatar3[c]["Source"] = Source;
    myMultiDatar3[c]["Name"] = Name;
    myMultiDatar3[c]["ReferalClass"] = ReferalClass;
    myMultiDatar3[c]["Address"] = Address;
    myMultiDatar3[c]["Phone"] = Phone;
    myMultiDatar3[c]["id"] = id;
    GlobalMyData3 = myMultiDatar3;
}

var GlobalMyData4 = new Array();
var myMultiDatar4 = new Array();
var multiDimArrayr4 = 0;

function multiDimArrayR4(RowIndex, Source, Name, ReferalClass, Address, Phone, id) {
    var c = multiDimArrayr4;
    myMultiDatar4[c] = new Array(6);
    myMultiDatar4[c]["rowIndex"] = RowIndex;
    myMultiDatar4[c]["Source"] = Source;
    myMultiDatar4[c]["Name"] = Name;
    myMultiDatar4[c]["ReferalClass"] = ReferalClass;
    myMultiDatar4[c]["Address"] = Address;
    myMultiDatar4[c]["Phone"] = Phone;
    myMultiDatar4[c]["id"] = id;
    GlobalMyData4 = myMultiDatar4;
}
function SetReferalContextKey(ddl) {
    document.getElementById('ctl00_ContentPlaceHolder1_ucReferal_txtReferal').value = '';
    document.getElementById('ctl00_ContentPlaceHolder1_ucReferal_txtrefaddr').value = '';
    document.getElementById('ctl00_ContentPlaceHolder1_ucReferal_txtRefPhone').value = '';
    document.getElementById('ctl00_ContentPlaceHolder1_ucReferal__hdnRefAddr').value = '';
    document.getElementById('ctl00_ContentPlaceHolder1_ucReferal__hdnRefPhone').value = '';

    if (ddl.value == '1') {
        document.getElementById('ctl00_ContentPlaceHolder1_ucReferal_txtReferal').disabled = true;
        document.getElementById('ctl00_ContentPlaceHolder1_ucReferal_txtrefaddr').disabled = true;
        document.getElementById('ctl00_ContentPlaceHolder1_ucReferal_txtRefPhone').disabled = true;
        document.getElementById('ctl00_ContentPlaceHolder1_ucReferal_btnQkAdd').disabled = false;
    }
    else {
        document.getElementById('ctl00_ContentPlaceHolder1_ucReferal_txtReferal').disabled = false;
        document.getElementById('ctl00_ContentPlaceHolder1_ucReferal_txtrefaddr').disabled = true;
        document.getElementById('ctl00_ContentPlaceHolder1_ucReferal_txtRefPhone').disabled = true;
        document.getElementById('ctl00_ContentPlaceHolder1_ucReferal_btnQkAdd').disabled = false;
    }

    var Source = $('#ctl00_ContentPlaceHolder1_ucReferal_ddlreferral').val();
    var Name = $('#ctl00_ContentPlaceHolder1_ucReferal_txtReferal').val();
    var ReferalClass = $('#ctl00_ContentPlaceHolder1_ucReferal_txtReferralClass').val();
    var Address = $('#ctl00_ContentPlaceHolder1_ucReferal_txtrefaddr').val();
    var Phone = $('#ctl00_ContentPlaceHolder1_ucReferal_txtRefPhone').val();
    var id = $('#ctl00_ContentPlaceHolder1_ucReferal__hdnID').val();

    SelectedRowIndex = SelectedRowIndex == 0 ? 1 : SelectedRowIndex;

    if (SelectedRowIndex == 1) {
        GlobalMyData1 = new Array();
        multiDimArrayR1(SelectedRowIndex, Source, Name, ReferalClass, Address, Phone, id);
    }
    if (SelectedRowIndex == 2) {
        GlobalMyData2 = new Array();
        multiDimArrayR2(SelectedRowIndex, Source, Name, ReferalClass, Address, Phone, id);
    }
    if (SelectedRowIndex == 3) {
        GlobalMyData3 = new Array();
        multiDimArrayR3(SelectedRowIndex, Source, Name, ReferalClass, Address, Phone, id);
    }
    if (SelectedRowIndex == 4) {
        GlobalMyData4 = new Array();
        multiDimArrayR4(SelectedRowIndex, Source, Name, ReferalClass, Address, Phone, id);
    }



    if (ddl.value == '2')
        set_contextKey = 'DOCTOR';
    else if (ddl.value == '3')
        set_contextKey = 'STAFF';
    else if (ddl.value == '4')
        set_contextKey = 'ORGANIZATION';
    else
        set_contextKey = ddl.value;
    return;
}

function SetReferralClass(Obj) {

    var Source = $('#ctl00_ContentPlaceHolder1_ucReferal_ddlreferral').val();
    var Name = $('#ctl00_ContentPlaceHolder1_ucReferal_txtReferal').val();
    var ReferalClass = $('#ctl00_ContentPlaceHolder1_ucReferal_txtReferralClass').val();
    var Address = $('#ctl00_ContentPlaceHolder1_ucReferal_txtrefaddr').val();
    var Phone = $('#ctl00_ContentPlaceHolder1_ucReferal_txtRefPhone').val();
    var id = $('#ctl00_ContentPlaceHolder1_ucReferal__hdnID').val();

    SelectedRowIndex = SelectedRowIndex == 0 ? 1 : SelectedRowIndex;

    if (SelectedRowIndex == 1) {
        GlobalMyData1 = '';
        multiDimArrayR1(SelectedRowIndex, Source, Name, ReferalClass, Address, Phone, id);
    }
    if (SelectedRowIndex == 2) {
        GlobalMyData2 = '';
        multiDimArrayR2(SelectedRowIndex, Source, Name, ReferalClass, Address, Phone, id);
    }
    if (SelectedRowIndex == 3) {
        GlobalMyData3 = '';
        multiDimArrayR3(SelectedRowIndex, Source, Name, ReferalClass, Address, Phone, id);
    }
    if (SelectedRowIndex == 4) {
        GlobalMyData4 = '';
        multiDimArrayR4(SelectedRowIndex, Source, Name, ReferalClass, Address, Phone, id);
    }

}


function OnItemReferal(objVal, obj) {
    var CurrentRowIndex = 1;
    var results = objVal;
    document.getElementById('ctl00_ContentPlaceHolder1_ucReferal__hdnID').value = results.Value;
    if (!results.Text.toString().toLowerCase().match(/Dr./)) {
        document.getElementById('ctl00_ContentPlaceHolder1_ucReferal_hdnReferalName').value = 'Dr.' + results.Text;
        document.getElementById('ctl00_ContentPlaceHolder1_ucReferal__hdnRefText').value = 'Dr.' + results.Text;
        document.getElementById('ctl00_ContentPlaceHolder1_ucReferal__hdnID').value = results.Value;
    }
    else {
        document.getElementById('ctl00_ContentPlaceHolder1_ucReferal_hdnReferalName').value = results.Text;
        document.getElementById('ctl00_ContentPlaceHolder1_ucReferal__hdnRefText').value = results.Text;
        document.getElementById('ctl00_ContentPlaceHolder1_ucReferal__hdnID').value = results.Value;
    }
    if (results.AddtionalVal == undefined || results.AddtionalVal == '') { results.AddtionalVal = ''; }
    document.getElementById('ctl00_ContentPlaceHolder1_ucReferal_txtRefPhone').value = results.AddtionalVal;
    if (results.RefAddress == undefined || results.RefAddress == '') { results.RefAddress = ''; }
    document.getElementById('ctl00_ContentPlaceHolder1_ucReferal_txtrefaddr').value = results.RefAddress;
    document.getElementById('ctl00_ContentPlaceHolder1_ucReferal__hdnRefAddr').value = results.RefAddress;
    document.getElementById('ctl00_ContentPlaceHolder1_ucReferal__hdnRefPhone').value = results.AddtionalVal;

    var Source = $('#ctl00_ContentPlaceHolder1_ucReferal_ddlreferral').val();
    var Name = $('#ctl00_ContentPlaceHolder1_ucReferal_txtReferal').val();
    var ReferalClass = $('#ctl00_ContentPlaceHolder1_ucReferal_txtReferralClass').val();
    var Address = $('#ctl00_ContentPlaceHolder1_ucReferal_txtrefaddr').val();
    var Phone = $('#ctl00_ContentPlaceHolder1_ucReferal_txtRefPhone').val();
    var id = $('#ctl00_ContentPlaceHolder1_ucReferal__hdnID').val();

    SelectedRowIndex = SelectedRowIndex == 0 ? 1 : SelectedRowIndex;

    if (SelectedRowIndex == 1) {
        GlobalMyData1 = '';
        multiDimArrayR1(SelectedRowIndex, Source, Name, ReferalClass, Address, Phone, id);
    }
    if (SelectedRowIndex == 2) {
        GlobalMyData2 = '';
        multiDimArrayR2(SelectedRowIndex, Source, Name, ReferalClass, Address, Phone, id);
    }
    if (SelectedRowIndex == 3) {
        GlobalMyData3 = '';
        multiDimArrayR3(SelectedRowIndex, Source, Name, ReferalClass, Address, Phone, id);
    }
    if (SelectedRowIndex == 4) {
        GlobalMyData4 = '';
        multiDimArrayR4(SelectedRowIndex, Source, Name, ReferalClass, Address, Phone, id);
    }

}
//Referral Info Add Saving Start
function QuickREfValidate() {

    var x = document.getElementById('ctl00_ContentPlaceHolder1_ucReferal_txtRefMobile').value;
    var areaid = document.getElementById('ctl00_ContentPlaceHolder1_ucReferal_Lookuparea__hiddenID').value;
    if (document.getElementById('ctl00_ContentPlaceHolder1_ucReferal_ddlRefSourceType').value == '0') {
        alert("Please select the source of referral!");
        document.getElementById('ctl00_ContentPlaceHolder1_ucReferal_ddlRefSourceType').focus();
        return false;
    }
    else if (document.getElementById('ctl00_ContentPlaceHolder1_ucReferal_txtRefName').value == '') {
        alert("Please Enter Referal Name");
        document.getElementById('ctl00_ContentPlaceHolder1_ucReferal_txtRefName').focus();
        return false;
    }

    else if (document.getElementById('ctl00_ContentPlaceHolder1_ucReferal_txtRefMobile').value == '') {
        alert("Please Enter Referal Mobile No.");
        document.getElementById('ctl00_ContentPlaceHolder1_ucReferal_txtRefMobile').focus();
        return false;
    }
    else if (x.length < 10) {
        alert("Mobile number should be 10 digits or more!");
        document.getElementById('ctl00_ContentPlaceHolder1_ucReferal_txtRefMobile').focus();
        return false;
    }

    else if (document.getElementById('ctl00_ContentPlaceHolder1_ucReferal_Lookuparea_txtSearchControl').value == '' || areaid == '' || areaid == 0 || areaid == null || areaid == undefined) {
        alert("Please select area!.");
        document.getElementById('lk_btn_ctl00_ContentPlaceHolder1_Lookuparea').focus();
        return false;
    }

    else {
        var refname = document.getElementById('ctl00_ContentPlaceHolder1_ucReferal_txtRefName').value;
        var refphno = document.getElementById('ctl00_ContentPlaceHolder1_ucReferal_txtRefMobile').value;
        var refsrc = document.getElementById('ctl00_ContentPlaceHolder1_ucReferal_ddlRefSourceType').value;
        var refregno = document.getElementById('ctl00_ContentPlaceHolder1_ucReferal_txtRefRegistNo').value;
        var area = document.getElementById('ctl00_ContentPlaceHolder1_ucReferal_Lookuparea__hiddenID').value;
        var country = document.getElementById('ctl00_ContentPlaceHolder1_Address1_hdncountryid').value;
        var state = document.getElementById('ctl00_ContentPlaceHolder1_Address1_hdnstateid').value;
        var city = document.getElementById('ctl00_ContentPlaceHolder1_Address1_hdncityid').value;
        var address = document.getElementById('ctl00_ContentPlaceHolder1_ucReferal_txtaddressref').value;
        if (area == '' || area == null || area == undefined) { area = "0"; }
        if (country == '' || country == null || country == undefined) { country = "0"; }
        if (state == '' || state == null || state == undefined) { state = "0"; }
        if (city == '' || city == null || city == undefined) { city = "0"; }

        if (refsrc != 3) {
            GetAsync(
                "Private/FrontOffice/NewPatient.aspx/ReferralSave",
                { Ref_Name: refname, Ref_phNo: refphno, Ref_Src: refsrc, Ref_RegNo: refregno, area: area, country: country, state: state, city: city, address: address },
                function (JData) {
                    if (JData != 0) {
                        document.getElementById('ctl00_ContentPlaceHolder1_ucReferal_txtReferal').value = refname;
                        document.getElementById('ctl00_ContentPlaceHolder1_ucReferal_ddlreferral').value = refsrc;
                        document.getElementById('ctl00_ContentPlaceHolder1_ucReferal_txtRefPhone').value = refphno;
                        document.getElementById('ctl00_ContentPlaceHolder1_ucReferal_txtrefaddr').value = address;
                        document.getElementById('ctl00_ContentPlaceHolder1_ucReferal__hdnRefAddr').value = address;
                        document.getElementById('ctl00_ContentPlaceHolder1_ucReferal__hdnRefPhone').value = refphno;
                        document.getElementById('ctl00_ContentPlaceHolder1_ucReferal__hdnID').value = JData.d;
                        document.getElementById('ctl00_ContentPlaceHolder1_ucReferal_txtRefName').value = '';
                        document.getElementById('ctl00_ContentPlaceHolder1_ucReferal_txtRefMobile').value = '';
                        document.getElementById('ctl00_ContentPlaceHolder1_ucReferal_ddlRefSourceType').value = '--select--';
                        document.getElementById('ctl00_ContentPlaceHolder1_ucReferal_txtRefRegistNo').value = '';
                        document.getElementById('ctl00_ContentPlaceHolder1_ucReferal_Lookuparea__hiddenID').value = '';
                        document.getElementById('ctl00_ContentPlaceHolder1_Address1_hdncountryid').value = '';
                        document.getElementById('ctl00_ContentPlaceHolder1_Address1_hdnstateid').value = ''
                        document.getElementById('ctl00_ContentPlaceHolder1_Address1_hdncityid').value = '';
                        document.getElementById('ctl00_ContentPlaceHolder1_ucReferal_txtaddressref').value = '';
                        document.getElementById('ctl00_ContentPlaceHolder1_ucReferal_Lookuparea_txtSearchControl').value = '';
                        document.getElementById('ctl00_ContentPlaceHolder1_ucReferal_txtcountry').value = '';
                        document.getElementById('ctl00_ContentPlaceHolder1_ucReferal_txtstate').value = '';
                        document.getElementById('ctl00_ContentPlaceHolder1_ucReferal_txtcity').value = '';
                        //$find('ctl00_ContentPlaceHolder1_QckReferalPopup').hide();
                        var Source = $('#ctl00_ContentPlaceHolder1_ucReferal_ddlreferral').val();
                        var Name = $('#ctl00_ContentPlaceHolder1_ucReferal_txtReferal').val();
                        var ReferalClass = $('#ctl00_ContentPlaceHolder1_ucReferal_txtReferralClass').val();
                        var Address = $('#ctl00_ContentPlaceHolder1_ucReferal_txtrefaddr').val();
                        var Phone = $('#ctl00_ContentPlaceHolder1_ucReferal_txtRefPhone').val();
                        var id = $('#ctl00_ContentPlaceHolder1_ucReferal__hdnID').val();
                        $('[id*=DivReferal]')[0].style.display = 'none';
                        if (SelectedRowIndex == 1) {
                            multiDimArrayR1(SelectedRowIndex, Source, Name, ReferalClass, Address, Phone, id);
                        }
                        if (SelectedRowIndex == 2) {
                            multiDimArrayR2(SelectedRowIndex, Source, Name, ReferalClass, Address, Phone, id);
                        }
                        if (SelectedRowIndex == 3) {
                            multiDimArrayR3(SelectedRowIndex, Source, Name, ReferalClass, Address, Phone, id);
                        }
                    }
                    else {
                        alert('Failed To Add Referral');
                    }
                },
                function (jqXHR, textStatus, errorThrown) {
                    alert(errorThrown);
                });
        }
        else {
            GetAsync(
                "Private/FrontOffice/NewPatient.aspx/ReferralSaveStaff",
                { Ref_Name: refname, Ref_phNo: refphno, Ref_Src: refsrc, Ref_RegNo: refregno, area: area, country: country, state: state, city: city, address: address },
                function (JData) {
                    if (JData != 0) {
                        document.getElementById('ctl00_ContentPlaceHolder1_ucReferal_txtReferal').value = refname;
                        document.getElementById('ctl00_ContentPlaceHolder1_ucReferal_ddlreferral').value = refsrc;
                        document.getElementById('ctl00_ContentPlaceHolder1_ucReferal_txtRefPhone').value = refphno;
                        document.getElementById('ctl00_ContentPlaceHolder1_ucReferal_txtrefaddr').value = address;

                        document.getElementById('ctl00_ContentPlaceHolder1_ucReferal__hdnRefAddr').value = address;
                        document.getElementById('ctl00_ContentPlaceHolder1_ucReferal__hdnRefPhone').value = refphno;

                        document.getElementById('ctl00_ContentPlaceHolder1_ucReferal__hdnID').value = JData.d;
                        document.getElementById('ctl00_ContentPlaceHolder1_ucReferal_txtRefName').value = '';
                        document.getElementById('ctl00_ContentPlaceHolder1_ucReferal_txtRefMobile').value = '';
                        document.getElementById('ctl00_ContentPlaceHolder1_ucReferal_ddlRefSourceType').value = '--select--';
                        document.getElementById('ctl00_ContentPlaceHolder1_ucReferal_txtRefRegistNo').value = '';
                        document.getElementById('ctl00_ContentPlaceHolder1_ucReferal_Lookuparea__hiddenID').value = '';
                        document.getElementById('ctl00_ContentPlaceHolder1_Address1_hdncountryid').value = '';
                        document.getElementById('ctl00_ContentPlaceHolder1_Address1_hdnstateid').value = ''
                        document.getElementById('ctl00_ContentPlaceHolder1_Address1_hdncityid').value = '';
                        document.getElementById('ctl00_ContentPlaceHolder1_ucReferal_txtaddressref').value = '';
                        document.getElementById('ctl00_ContentPlaceHolder1_ucReferal_Lookuparea_txtSearchControl').value = '';
                        document.getElementById('ctl00_ContentPlaceHolder1_ucReferal_txtcountry').value = '';
                        document.getElementById('ctl00_ContentPlaceHolder1_ucReferal_txtstate').value = '';
                        document.getElementById('ctl00_ContentPlaceHolder1_ucReferal_txtcity').value = '';
                        //$find('ctl00_ContentPlaceHolder1_QckReferalPopup').hide();
                        $('[id*=DivReferal]')[0].style.display = 'none';
                    }
                    else {
                        alert('Failed To Add Referral');
                    }
                },
                function (jqXHR, textStatus, errorThrown) {
                    alert(errorThrown);
                });
        }
    }
}
//Referral Info Add Saving End
function ClosingReferalPopup() {
    $('[id*=DivReferal]')[0].style.display = 'none';
    return false;
}

function lookupareasselection(text) {
    
    if (text.ID == undefined) {
        document.getElementById('ctl00_ContentPlaceHolder1_ucReferal_Lookuparea_txtSearchControl').value = text._lktext;
        document.getElementById('ctl00_ContentPlaceHolder1_ucReferal_Lookuparea__hiddenID').value = text.AREA_ID;
        document.getElementById('ctl00_ContentPlaceHolder1_ucReferal_Lookuparea__hiddenText').value = text._lktext;
        document.getElementById('ctl00_ContentPlaceHolder1_ucReferal_txtcountry').value = text.COUNTRY_NAME;
        document.getElementById('ctl00_ContentPlaceHolder1_ucReferal_txtstate').value = text.STATE_NAME;
        document.getElementById('ctl00_ContentPlaceHolder1_ucReferal_txtcity').value = text.CITY_NAME;
        document.getElementById('ctl00_ContentPlaceHolder1_Address1_hdncityid').value = text.CITY_ID;
        document.getElementById('ctl00_ContentPlaceHolder1_Address1_hdncountryid').value = text.COUNTRY_ID;
        document.getElementById('ctl00_ContentPlaceHolder1_Address1_hdnstateid').value = text.STATE_ID;
    }
    else {
        document.getElementById('ctl00_ContentPlaceHolder1_ucReferal_Lookuparea_txtSearchControl').value = text._lktext;
        document.getElementById('ctl00_ContentPlaceHolder1_ucReferal_Lookuparea__hiddenID').value = text.ID;
        document.getElementById('ctl00_ContentPlaceHolder1_ucReferal_Lookuparea__hiddenText').value = text._lktext;
        document.getElementById('ctl00_ContentPlaceHolder1_ucReferal_txtcountry').value = text.RESULT.COUNTRY_NAME;
        document.getElementById('ctl00_ContentPlaceHolder1_ucReferal_txtstate').value = text.RESULT.STATE_NAME;
        document.getElementById('ctl00_ContentPlaceHolder1_ucReferal_txtcity').value = text.RESULT.CITY_NAME;
        document.getElementById('ctl00_ContentPlaceHolder1_Address1_hdncityid').value = text.RESULT.CITY_ID;
        document.getElementById('ctl00_ContentPlaceHolder1_Address1_hdncountryid').value = text.RESULT.COUNTRY_ID;
        document.getElementById('ctl00_ContentPlaceHolder1_Address1_hdnstateid').value = text.RESULT.STATE_ID;
    }
    return false;
}

function clearpopupcontrols() {
    document.getElementById('ctl00_ContentPlaceHolder1_ucReferal_txtRefName').value = '';
    document.getElementById('ctl00_ContentPlaceHolder1_ucReferal_txtRefMobile').value = '';
    document.getElementById('ctl00_ContentPlaceHolder1_ucReferal_txtRefRegistNo').value = '';
    document.getElementById('ctl00_ContentPlaceHolder1_ucReferal_Lookuparea__hiddenID').value = '';
    document.getElementById('ctl00_ContentPlaceHolder1_Address1_hdncountryid').value = '';
    document.getElementById('ctl00_ContentPlaceHolder1_Address1_hdnstateid').value = ''
    document.getElementById('ctl00_ContentPlaceHolder1_Address1_hdncityid').value = '';
    document.getElementById('ctl00_ContentPlaceHolder1_ucReferal_txtaddressref').value = '';
    document.getElementById('ctl00_ContentPlaceHolder1_ucReferal_Lookuparea_txtSearchControl').value = '';
    document.getElementById('ctl00_ContentPlaceHolder1_ucReferal_txtcountry').value = '';
    document.getElementById('ctl00_ContentPlaceHolder1_ucReferal_txtstate').value = '';
    document.getElementById('ctl00_ContentPlaceHolder1_ucReferal_txtcity').value = '';
    var referalsource = document.getElementById('ctl00_ContentPlaceHolder1_ucReferal_ddlreferral').value;
    document.getElementById('ctl00_ContentPlaceHolder1_ucReferal_ddlRefSourceType').value = referalsource;
    $('[id*=DivReferal]')[0].style.display = 'block';
    return false;
}
function SaveReferal() {
    if (myMultiDatar1 != '') {
        if (myMultiDatar1[0]["Source"] > 0) {
            _xmlStr += "<PAT_REFRL_DTLS";
            _xmlStr += " PAT_RFRL_DTL_REV_NO=$" + "" + "$";
            _xmlStr += " UMR_NO=$" + UmrNO + "$";
            _xmlStr += " ADMN_NO=$" + '' + "$";
            _xmlStr += " REFERENCE_ID=$" + myMultiDatar1[0]["id"] + "$";
            _xmlStr += " REFERENCE_TYPE_ID=$" + myMultiDatar1[0]["Source"] + "$";
            _xmlStr += " REFERAL_CLASS=$" + myMultiDatar1[0]["ReferalClass"] + "$";
            _xmlStr += " REFERAL_SOURCE_ID=$" + myMultiDatar1[0]["Source"] + "$";
            _xmlStr += " REFERL_ID=$" + myMultiDatar1[0]["id"] + "$";
            _xmlStr += " REFERL_NAME=$" + myMultiDatar1[0]["Name"] + "$";
            _xmlStr += " RECORD_STATUS=$" + "A" + "$";
            _xmlStr += "/>";
        }
    }
    if (myMultiDatar2 != '') {
        if (myMultiDatar2[0]["Source"] > 0) {
            _xmlStr += "<PAT_REFRL_DTLS";
            _xmlStr += " PAT_RFRL_DTL_REV_NO=$" + "" + "$";
            _xmlStr += " UMR_NO=$" + UmrNO + "$";
            _xmlStr += " ADMN_NO=$" + '' + "$";
            _xmlStr += " REFERENCE_ID=$" + myMultiDatar2[0]["id"] + "$";
            _xmlStr += " REFERENCE_TYPE_ID=$" + myMultiDatar2[0]["Source"] + "$";
            _xmlStr += " REFERAL_CLASS=$" + myMultiDatar2[0]["ReferalClass"] + "$";
            _xmlStr += " REFERAL_SOURCE_ID=$" + myMultiDatar2[0]["Source"] + "$";
            _xmlStr += " REFERL_ID=$" + myMultiDatar2[0]["id"] + "$";
            _xmlStr += " REFERL_NAME=$" + myMultiDatar2[0]["Name"] + "$";
            _xmlStr += " RECORD_STATUS=$" + "A" + "$";
            _xmlStr += "/>";
        }
    }
    if (myMultiDatar3 != '') {
        if (myMultiDatar3[0]["Source"] > 0) {
            _xmlStr += "<PAT_REFRL_DTLS";
            _xmlStr += " PAT_RFRL_DTL_REV_NO=$" + "" + "$";
            _xmlStr += " UMR_NO=$" + UmrNO + "$";
            _xmlStr += " ADMN_NO=$" + '' + "$";
            _xmlStr += " REFERENCE_ID=$" + myMultiDatar3[0]["id"] + "$";
            _xmlStr += " REFERENCE_TYPE_ID=$" + myMultiDatar3[0]["Source"] + "$";
            _xmlStr += " REFERAL_CLASS=$" + myMultiDatar3[0]["ReferalClass"] + "$";
            _xmlStr += " REFERAL_SOURCE_ID=$" + myMultiDatar3[0]["Source"] + "$";
            _xmlStr += " REFERL_ID=$" + myMultiDatar3[0]["id"] + "$";
            _xmlStr += " REFERL_NAME=$" + myMultiDatar3[0]["Name"] + "$";
            _xmlStr += " RECORD_STATUS=$" + "A" + "$";
            _xmlStr += "/>";
        }
    }
    if (myMultiDatar4 != '') {
        if (myMultiDatar4[0]["Source"] > 0) {
            _xmlStr += "<PAT_REFRL_DTLS";
            _xmlStr += " PAT_RFRL_DTL_REV_NO=$" + "" + "$";
            _xmlStr += " UMR_NO=$" + UmrNO + "$";
            _xmlStr += " ADMN_NO=$" + '' + "$";
            _xmlStr += " REFERENCE_ID=$" + myMultiDatar4[0]["id"] + "$";
            _xmlStr += " REFERENCE_TYPE_ID=$" + myMultiDatar4[0]["Source"] + "$";
            _xmlStr += " REFERAL_CLASS=$" + myMultiDatar4[0]["ReferalClass"] + "$";
            _xmlStr += " REFERAL_SOURCE_ID=$" + myMultiDatar4[0]["Source"] + "$";
            _xmlStr += " REFERL_ID=$" + myMultiDatar4[0]["id"] + "$";
            _xmlStr += " REFERL_NAME=$" + myMultiDatar4[0]["Name"] + "$";
            _xmlStr += " RECORD_STATUS=$" + "A" + "$";
            _xmlStr += "/>";
        }
    }
}