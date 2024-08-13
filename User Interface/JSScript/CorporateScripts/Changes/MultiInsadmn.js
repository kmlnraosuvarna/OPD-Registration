
function OnInsName(_d) {
    if (_d.ID > 0) {
        if (_d.RESULT.ListObjVal[0].TARIFF_CONFIGURATION_IP == "N") {
            $(".stoast").toastText("warning", "This Company/TPA has no Tariff Configuration.Please Contact Administrator!", 5, 3);
            $('[id$=ucinsname_txtSearchControl]').val('');
            $('[id$=ucinsname__hiddenText]').val('');
            $('[id$=ucinsname__hiddenID]').val(0);
            return false;
        }
        if (_d.RESULT.ListObjVal[0].CMP_EXP_STS == "Y") {
            $('[id$=ucinsname_txtSearchControl]').val('');
            $('[id$=ucinsname__hiddenText]').val('');
            $('[id$=ucinsname__hiddenID]').val(0);
            $(".stoast").toastText("warning", "This Company/TPA is Expired.Please Contact Administrator!", 5, 3);
            return false;
        }
        $('[id*=ucinsname_txtSearchControl]').val(_d.RESULT.ListObjVal[0].COMPANY_NAME);
        $('[id*=ucinsname__hiddenText]').val(_d.RESULT.ListObjVal[0].COMPANY_NAME);
        $('[id*=ucinsname__hiddenID]').val(_d.RESULT.ListObjVal[0].COMPANY_ID);
        $('[id*=txtinsper]').val(_d.RESULT.ListObjVal[0].ip_org_percent);
        $('[id*=txtpatper]').val(_d.RESULT.ListObjVal[0].ip_emp_percent);
    } else {
        if (_d.TARIFF_CONFIGURATION_IP == "N") {
            $(".stoast").toastText("warning", "This Company/TPA has no Tariff Configuration.Please Contact Administrator!", 5, 3);
            $('[id$=ucinsname_txtSearchControl]').val('');
            $('[id$=ucinsname__hiddenText]').val('');
            $('[id$=ucinsname__hiddenID]').val(0);
            return false;
        }
        if (_d.CMP_EXP_STS == "Y") {
            $('[id$=ucinsname_txtSearchControl]').val('');
            $('[id$=ucinsname__hiddenText]').val('');
            $('[id$=ucinsname__hiddenID]').val(0);
            $(".stoast").toastText("warning", "This Company/TPA is Expired.Please Contact Administrator!", 5, 3);
            return false;
        }
        $('[id*=ucinsname_txtSearchControl]').val(_d["COMPANY_NAME"]);
        $('[id*=ucinsname__hiddenText]').val(_d.COMPANY_NAME);
        $('[id*=ucinsname__hiddenID]').val(_d["COMPANY_ID"]);
        $('[id*=txtinsper]').val(_d.IP_ORG_PERCENT);
        $('[id*=txtpatper]').val(_d.IP_EMP_PERCENT);
    }
    OnNullValue($('[id*=ucinsname_txtSearchControl]')[0])
}
function OnAreaSelection1(_Val) {
    if (_Val.AREA_ID == undefined) { _Val = _Val.RESULT; }
    $('[id*=uccorporate_ucArea_txtSearchControl]').val(_Val.AREA_NAME);
    $('[id*=uccorporate_ucArea__hiddenText]').val(_Val.AREA_NAME);
    $('[id*=uccorporate_ucArea__hiddenID]').val(_Val.AREA_ID);
    $('[id*=uccorporate_txtPin]').val(_Val["PIN_CODE"]); $('[id*=uccorporate_ucCity]').val(_Val["CITY_NAME"]);
    $('[id*=uccorporate_ucState]').val(_Val["STATE_NAME"]); $('[id*=uccorporate_ucCountry]').val(_Val["COUNTRY_NAME"]);
    $('[id*=uccorporate_txtdistrict]').val(_Val["DISTRICT_NAME"]); $('[id*=hdndistrictid]').val(_Val["DISTRICT_ID"]);
    $('[id*=uccorporate_hdncityid]').val(_Val["CITY_ID"]); $('[id*=uccorporate_hdnstateid]').val(_Val["STATE_ID"]);
    $('[id*=uccorporate_hdncountryid]').val(_Val["COUNTRY_ID"]);
}
function btnclose12() {
    $('[id*=divGridPop]').css('display', 'none');
}
var _dataSourceDis;
function AddInsuranceData() {
    var cmp_id = $('[id*=ucinsname__hiddenID]').val();
    var FirstName = $('[id*=txtinsfname]').val();
    var LastName = $('[id*=txtinslname]').val();
    var InslevelId = $('[id*=ddlinslevel] option:selected').val();
    var Inslevel = $('[id*=ddlinslevel] option:selected').text();
    var UpdateIndex = $('[id*=hdnupdateindex]').val();
    if (UpdateIndex == '' || UpdateIndex == null || UpdateIndex == undefined) { UpdateIndex = 0; }
    if (cmp_id == '' || cmp_id == null || cmp_id == undefined) { cmp_id = "0"; }
    if (FirstName == null || FirstName == undefined) { FirstName = ''; }
    if (LastName == null || LastName == undefined) { LastName = ''; }
    if (cmp_id == "0") {
        $(".stoast").toastText("Info", 'Please Select Company/TPA', 5, 2);
        $('[id*=ucinsname_txtSearchControl]').focus();
        return false;
    }
    if (FirstName == '') {
        $(".stoast").toastText("Info", 'Please Enter Ins First Name	', 5, 2);
        $('[id*=txtinsfname]').focus();
        return false;
    }
    if (LastName == '') {
        $(".stoast").toastText("Info", 'Please Enter Ins Last Name	', 5, 2);
        $('[id*=txtinslname]').focus();
        return false;
    }
    if ($('[id*=txtplociyno]').val() == "") {
        $(".stoast").toastText("Info", 'Please Enter Policy#', 5, 2);
        $('[id*=txtplociyno]').focus();
        return false;
    }
    if (InslevelId == '0') {
        $(".stoast").toastText("Info", 'Please Select Insurance Level', 5, 2);
        $('[id*=ddlinslevel]').focus();
        return false;
    }
    if ($('[id*=uccorporate_ddlproofid]').val() != '0' && $('[id*=uccorporate_txtpholssnno]').val() == '') {
        var idprooftype = $('[id*=uccorporate_ddlproofid] option:selected').text();
        $(".stoast").toastText("Info", 'Please Enter' + idprooftype + '  Details', 5, 2);
        $('[id*=uccorporate_txtpholssnno]').focus();
        return false;
    }
    if (UpdateIndex == 0) {
        var Insflag = false;
        $('table[id*=tblmultiins] tr:has(td)').each(function () {
            var InnerInslevel = $(this).closest('tr').find('[id*=lblinslevel]').text();
            if (InnerInslevel == Inslevel) {
                $(".stoast").toastText("Info", 'Same Insurance Level cannot be added', 5, 2);
                Insflag = true;
                return false;
            }
        });
        if (Insflag == true) { return false; }
    }
    if ($('table[id*=tblmultiins] tr:has(td)').length == 0) {
        if (InslevelId != 1) {
            $(".stoast").toastText("Info", 'Please Follow Ins Level Order', 5, 2);
            return false;
        }
    }
    if ($('table[id*=tblmultiins] tr:has(td)').length == 1) {
        if (InslevelId != 2 && UpdateIndex != 1) {
            $(".stoast").toastText("Info", 'Please Follow Ins Level Order', 5, 2);
            return false;
        }
    }
    var cmp_name = $('[id*=ucinsname_txtSearchControl]').val();
    var PlanName = $('[id*=txtplanname]').val();
    var InsPerc = $('[id*=txtinsper]').val();
    var PatPerc = $('[id*=txtpatper]').val();
    var PolicyHolder = $('[id*=txtpholssnno]').val();
    var Policyno = $('[id*=txtplociyno]').val();
    var Memberid = $('[id*=txtmemid]').val();
    var GroupId = $('[id*=txtgrpid]').val();
    var Relation = $('[id*=ddlinsrelations] option:selected').text();
    var RelationId = $('[id*=ddlinsrelations] option:selected').val();
    var ExpDt = $('[id*=txtinsexpdt]').val();
    var MiddleName = $('[id*=txtinsmname]').val();
    var Gender = $('[id*=uccorporate_ddlGender] option:selected').text();
    var GenderId = $('[id*=uccorporate_ddlGender] option:selected').val();
    var DOB = $('[id*=txtinsdob]').val();
    var AName = $('[id*=txtEName]').val();
    var Address1 = $('[id*=txtAddress1]').val();
    var Address2 = $('[id*=txtAddress2]').val();
    var Town = $('[id*=ucArea_txtSearchControl]').val();
    var TownId = $('[id*=ucArea__hiddenID]').val();
    var City = $('[id*=ucCity]').val();
    var State = $('[id*=ucState]').val();
    var Country = $('[id*=ucCountry]').val();
    var City_id = $('[id*=hdncityid]').val();
    var State_id = $('[id*=hdnstateid]').val();
    var Country_id = $('[id*=hdncountryid]').val();
    var ZIP = $('[id*=txtPin]').val();
    var District_name = $('[id*=uccorporate_txtdistrict]').val();
    var Phoneno = $('[id*=txtPhone]').val();
    var Mobileno = $('[id*=txtmobileno]').val();
    var EmpName = $('[id*=txtinsempname]').val();
    var EmpLocation = $('[id*=txtinsemploc]').val();
    var Sno = $('[id$=tblmultiins] tbody')[0].rows.length + 1;
    var ins_name = $('[id*=txtinsname]').val();
    var districtid = $('[id*= hdndistrictid]').val();
    var PRE_AUTH_AMOUNT = 0; var APRVL_AMOUNT = 0;
    var Referenceno = $('[id*=txtReferenceno]').val();
    var idprof = $('[id*=uccorporate_ddlproofid] option:selected').text();
    if (idprof == "--ID Proof--") {
        idprof = "";
    }
    var idprof = $('[id*=uccorporate_ddlproofid] option:selected').text();
    var ID_PROOF_ID = $('[id*=uccorporate_ddlproofid] option:selected').val();
    if (ID_PROOF_ID == "0") { idprof = ""; }
    var patinsid = $('[id*=hdninspatidsingle]').val();
    if (patinsid == null || patinsid == '' || patinsid == undefined) { patinsid = '0'; }
    if (Relation == "--select--") { Relation = ''; } if (Gender == "--select--") { Gender = ''; }
    if (UpdateIndex > 0) {
        UpdateInsDetails(cmp_name, ins_name, cmp_id, Inslevel, InslevelId, PlanName, InsPerc, PatPerc, PolicyHolder, Policyno, Memberid, GroupId, Relation, RelationId, ExpDt,
                    FirstName, MiddleName, LastName, Gender, GenderId, DOB, AName, Address1, Address2, Town, TownId, ZIP, Phoneno, Mobileno, EmpName, EmpLocation, City_id, State_id,
                    Country_id, City, State, Country, PRE_AUTH_AMOUNT, APRVL_AMOUNT, idprof, ID_PROOF_ID, District_name, districtid, patinsid, Referenceno);
    } else {
        var jDataval = AddUpdateInscmp(Sno, cmp_name, ins_name, cmp_id, Inslevel, InslevelId, PlanName, InsPerc, PatPerc, PolicyHolder, Policyno, Memberid, GroupId, Relation, RelationId, ExpDt,
                    FirstName, MiddleName, LastName, Gender, GenderId, DOB, AName, Address1, Address2, Town, TownId, ZIP, Phoneno, Mobileno, EmpName, EmpLocation, City_id, State_id, Country_id,
                    City, State, Country, PRE_AUTH_AMOUNT, APRVL_AMOUNT, idprof, ID_PROOF_ID, District_name, districtid, patinsid, Referenceno);
        renderUIDis(jDataval);
    }
    $('[id*=hdnupdateindex]').val(0);
    $('[id*=hdninspatidsingle]').val(0);
    $('[id*=imgbtnAdd]').css('display', 'block'); $('[id*=imgBtnUpdate]').css('display', 'none');
    ClearInsDetails(); oncorpmultinsurance();
    $('[id*=uccorporate_TextBox1]').attr('disabled', false);
    $('[id*=uccorporate_TextBox2]').attr('disabled', false);
    $('[id*=uccorporate_txtPhone]').attr('disabled', false);
    $('[id*=uccorporate_txtPin]').attr('disabled', false);
    $('[id*=uccorporate_txtmobileno]').attr('disabled', false);
    $('[id*=uccorporate_ucArea_txtSearchControl]').attr('disabled', false);
    lk_btn_ctl00_ContentPlaceHolder1_uccorporate_ucArea.disabled = false;
    $('[id*=uccorporate_txtAddress1]').attr('disabled', false);
    $('[id*=uccorporate_txtAddress2]').attr('disabled', false);
    $('[id*=txtinsfname]').attr('disabled', false);
    $('[id*=txtinslname]').attr('disabled', false);
    $('[id*=txtinsmname]').attr('disabled', false);
    $('[id*=ddlGender]').attr('disabled', false);
    $('[id*=txtinsdob]').attr('disabled', false);
    $('[id*=uccorporate_chkPerAsPres]').attr('disabled', false);
    return false;
}
function ClearInsDetails() {
    $('[id*=uccorporate_ucArea_txtSearchControl]').val('');
    $('[id*=uccorporate_ucArea__hiddenText]').val('');
    $('[id*=uccorporate_ucArea__hiddenID]').val(0);
    $('[id*=uccorporate_txtPin]').val(''); $('[id*=uccorporate_ucCity]').val('');
    $('[id*=uccorporate_ucState]').val(''); $('[id*=uccorporate_ucCountry]').val('');
    $('[id*=uccorporate_hdncityid]').val(0); $('[id*=uccorporate_hdnstateid]').val(0);
    $('[id*=uccorporate_hdncountryid]').val(0); $('[id*=uccorporate_txtAddress1]').val('');
    $('[id*=uccorporate_txtmobileno]').val(''); $('[id*=uccorporate_txtPhone]').val('');
    $('[id*=uccorporate_txtAddress2]').val(''); $('[id*=uccorporate_txtEName]').val('');
    $('[id*=ucinsname_txtSearchControl]').val(''); $('[id*=uccorporate_txtdistrict]').val('');
    $('[id*=uccorporate_TextBox1]').val('');
    $('[id*=ucinsname__hiddenText]').val('');
    $('[id*=ucinsname__hiddenID]').val('0');
    $('[id*=txtplanname]').val('');
    $('[id*=txtinsper]').val('');
    $('[id*=txtpatper]').val('');
    $('[id*=txtplociyno]').val('');
    $('[id*=txtReferenceno]').val('');
    $('[id*=txtinsexpdt]').val('');
    $('[id*=txtpholssnno]').val('');
    $('[id*=txtmemid]').val('');
    $('[id*=txtgrpid]').val('');
    $('[id*=uccorporate_ddlinsrelations]').val('0');
    $('[id*=txtinsfname]').val('');
    $('[id*=txtinslname]').val('');
    $('[id*=txtinsmname]').val('');
    $('[id*=txtinsdob]').val('');
    $('[id*=txtinsempname]').val('');
    $('[id*=ddlGender]').val('0');
    $('[id*=txtinsemploc]').val('');
    $('[id*=uccorporate_chkPerAsPres]').attr('checked', false);
    $('[id*=ddlinslevel]').val(0);
    $('[id*=txtinsname]').val('');
    $('[id*=uccorporate_ddlproofid]').val('0');
}
function ClearContactControl() {
    $('[id*=uccorporate_ucArea_txtSearchControl]').val('');
    $('[id*=uccorporate_ucArea__hiddenText]').val('');
    $('[id*=uccorporate_ucArea__hiddenID]').val(0);
    $('[id*=uccorporate_txtPin]').val(''); $('[id*=uccorporate_ucCity]').val('');
    $('[id*=uccorporate_ucState]').val(''); $('[id*=uccorporate_ucCountry]').val('');
    $('[id*=uccorporate_hdncityid]').val(0); $('[id*=uccorporate_hdnstateid]').val(0);
    $('[id*=uccorporate_hdncountryid]').val(0); $('[id*=uccorporate_txtAddress1]').val('');
    $('[id*=uccorporate_txtmobileno]').val(''); $('[id*=uccorporate_txtPhone]').val('');
    $('[id*=uccorporate_txtAddress2]').val(''); $('[id*=uccorporate_txtEName]').val('');
    $('[id*= uccorporate_txtdistrict]').val('');
}
function UpdateInsDetails(cmp_name, ins_name, cmp_id, Inslevel, InslevelId, PlanName, InsPerc, PatPerc, PolicyHolder, Policyno, Memberid, GroupId, Relation, RelationId, ExpDt,
                    FirstName, MiddleName, LastName, Gender, GenderId, DOB, AName, Address1, Address2, Town, TownId, ZIP, Phoneno, Mobileno, EmpName, EmpLocation, City_id, State_id,
                    Country_id, City, State, Country, PRE_AUTH_AMOUNT, APRVL_AMOUNT, idprof, ID_PROOF_ID, District_name, districtid, patinsid, Referenceno) {
    var Index = $('[id*=hdnupdateindex]').val();
    $('table[id*=tblmultiins] tr').eq(Index).find('[id*=hdninspatid]').val(patinsid);
    $('table[id*=tblmultiins] tr').eq(Index).find('[id*=lblinslevel]').text(Inslevel);
    $('table[id*=tblmultiins] tr').eq(Index).find('[id*=hdninslevelid]').val(InslevelId);
    $('table[id*=tblmultiins] tr').eq(Index).find('[id*=lblsponsername]').text(cmp_name);
    $('table[id*=tblmultiins] tr').eq(Index).find('[id*=hdncmpid]').val(cmp_id);
    $('table[id*=tblmultiins] tr').eq(Index).find('[id*=lblplanname]').text(PlanName);
    $('table[id*=tblmultiins] tr').eq(Index).find('[id*=lblinsperc]').text(InsPerc);
    $('table[id*=tblmultiins] tr').eq(Index).find('[id*=lblpatperc]').text(PatPerc);
    $('table[id*=tblmultiins] tr').eq(Index).find('[id*=lblpolicyholder]').text(PolicyHolder);
    $('table[id*=tblmultiins] tr').eq(Index).find('[id*=lblpolicyno]').text(Policyno);
    $('table[id*=tblmultiins] tr').eq(Index).find('[id*=lblmemberid]').text(Memberid);
    $('table[id*=tblmultiins] tr').eq(Index).find('[id*=lblgroupid]').text(GroupId);
    $('table[id*=tblmultiins] tr').eq(Index).find('[id*=lblrelation]').text(Relation);
    $('table[id*=tblmultiins] tr').eq(Index).find('[id*=hdnrelationid]').val(RelationId);
    $('table[id*=tblmultiins] tr').eq(Index).find('[id*=lblexpdt]').text(ExpDt);
    $('table[id*=tblmultiins] tr').eq(Index).find('[id*=lblfirstname]').text(FirstName);
    $('table[id*=tblmultiins] tr').eq(Index).find('[id*=lblmidname]').text(MiddleName);
    $('table[id*=tblmultiins] tr').eq(Index).find('[id*=lbllastname]').text(LastName);
    $('table[id*=tblmultiins] tr').eq(Index).find('[id*=lblgender]').text(Gender);
    $('table[id*=tblmultiins] tr').eq(Index).find('[id*=hdngenderid]').val(GenderId);
    $('table[id*=tblmultiins] tr').eq(Index).find('[id*=lbldob]').text(DOB);
    $('table[id*=tblmultiins] tr').eq(Index).find('[id*=lblaname]').text(AName);
    $('table[id*=tblmultiins] tr').eq(Index).find('[id*=lbladdress1]').text(Address1);
    $('table[id*=tblmultiins] tr').eq(Index).find('[id*=lbladdress2]').text(Address2);
    $('table[id*=tblmultiins] tr').eq(Index).find('[id*=lbltown]').text(Town);
    $('table[id*=tblmultiins] tr').eq(Index).find('[id*=lblcity]').text(City);
    $('table[id*=tblmultiins] tr').eq(Index).find('[id*=lblstate]').text(State);
    $('table[id*=tblmultiins] tr').eq(Index).find('[id*=lblcountry]').text(Country);
    $('table[id*=tblmultiins] tr').eq(Index).find('[id*=hdntownid]').val(TownId);
    $('table[id*=tblmultiins] tr').eq(Index).find('[id*=lblzip]').text(ZIP);
    $('table[id*=tblmultiins] tr').eq(Index).find('[id*=lblphoneno]').text(Phoneno);
    $('table[id*=tblmultiins] tr').eq(Index).find('[id*=lblmobileno]').text(Mobileno);
    $('table[id*=tblmultiins] tr').eq(Index).find('[id*=lblempname]').text(EmpName);
    $('table[id*=tblmultiins] tr').eq(Index).find('[id*=lblemploc]').text(EmpLocation);
    $('table[id*=tblmultiins] tr').eq(Index).find('[id*=hdncityid]').val(City_id);
    $('table[id*=tblmultiins] tr').eq(Index).find('[id*=hdnstateid]').val(State_id);
    $('table[id*=tblmultiins] tr').eq(Index).find('[id*=hdncountryid]').val(Country_id);
    $('table[id*=tblmultiins] tr').eq(Index).find('[id*=lblinsname]').text(ins_name);
    /*$('table[id*=tblmultiins] tr').eq(Index).find('[id*=lblpreauthamt]').text(PRE_AUTH_AMOUNT);*/
    //$('table[id*=tblmultiins] tr').eq(Index).find('[id*=lblsanctionamt]').text(APRVL_AMOUNT);
    $('table[id*=tblmultiins] tr').eq(Index).find('[id*=lblidProf]').text(idprof);
    $('table[id*=tblmultiins] tr').eq(Index).find('[id*=hdnID_PROOF_ID]').val(ID_PROOF_ID);
    $('table[id*=tblmultiins] tr').eq(Index).find('[id*=lbldistrict]').val(District_name);
    $('table[id*=tblmultiins] tr').eq(Index).find('[id*=hdndistrictid]').val(districtid);
    $('table[id*=tblmultiins] tr').eq(Index).find('[id*=lblReferenceno]').text(Referenceno);
    $('[id*=ddlinslevel]')[0].disabled = false;
}
function AddUpdateInscmp(Sno, cmp_name, ins_name, cmp_id, Inslevel, InslevelId, PlanName, InsPerc, PatPerc, PolicyHolder, Policyno, Memberid, GroupId, Relation, RelationId, ExpDt,
                    FirstName, MiddleName, LastName, Gender, GenderId, DOB, AName, Address1, Address2, Town, TownId, ZIP, Phoneno, Mobileno, EmpName, EmpLocation, City_id, State_id, Country_id,
                    City, State, Country, PRE_AUTH_AMOUNT, APRVL_AMOUNT, idprof, ID_PROOF_ID, District_name, districtid, patinsid, Referenceno) {
    var _params = [];
    var _param = {
        Sno: Sno, cmp_name: cmp_name, ins_name: ins_name, cmp_id: cmp_id, Inslevel: Inslevel, InslevelId: InslevelId, PlanName: PlanName, InsPerc: InsPerc, PatPerc: PatPerc, PolicyHolder: PolicyHolder,
        Policyno: Policyno, Memberid: Memberid, GroupId: GroupId, Relation: Relation, RelationId: RelationId, ExpDt: ExpDt, FirstName: FirstName, MiddleName: MiddleName,
        LastName: LastName, Gender: Gender, GenderId: GenderId, DOB: DOB, AName: AName, Address1: Address1, Address2: Address2, Town: Town, TownId: TownId, ZIP: ZIP, Phoneno: Phoneno, Mobileno: Mobileno,
        EmpName: EmpName, EmpLocation: EmpLocation, City_id: City_id, State_id: State_id, Country_id: Country_id, City: City, State: State, Country: Country, PRE_AUTH_AMOUNT: PRE_AUTH_AMOUNT, APRVL_AMOUNT: APRVL_AMOUNT,
        idprof: idprof, ID_PROOF_ID: ID_PROOF_ID, District_name: District_name, District_id: districtid, PATIENT_INS_ID: patinsid, Referenceno: Referenceno
    };
    _params.push(_param);
    return _params;
}
function renderUIDis(jData) {
    var _billingTemplate = _.template($("#tbodyins").html());
    _dataSourceDis = jData;
    $("#tblmultiins tbody").append(_billingTemplate(_dataSourceDis));
}
function EditClick(obj) {
    var Index = obj.parentElement.parentElement.rowIndex;
    $('[id*=hdnupdateindex]').val(Index);
    var Inslevel = $('table[id*=tblmultiins] tr').eq(Index).find('[id*=lblinslevel]').text();
    var InsLevelid = $('table[id*=tblmultiins] tr').eq(Index).find('[id*=hdninslevelid]').val();
    var InsName = $('table[id*=tblmultiins] tr').eq(Index).find('[id*=lblsponsername]').text();
    var InsId = $('table[id*=tblmultiins] tr').eq(Index).find('[id*=hdncmpid]').val();
    var PlanName = $('table[id*=tblmultiins] tr').eq(Index).find('[id*=lblplanname]').text();
    var Insperc = $('table[id*=tblmultiins] tr').eq(Index).find('[id*=lblinsperc]').text();
    var OrgPerc = $('table[id*=tblmultiins] tr').eq(Index).find('[id*=lblpatperc]').text();
    var PolicySSN = $('table[id*=tblmultiins] tr').eq(Index).find('[id*=lblpolicyholder]').text();
    var Policyno = $('table[id*=tblmultiins] tr').eq(Index).find('[id*=lblpolicyno]').text();
    var Referenceno = $('table[id*=tblmultiins] tr').eq(Index).find('[id*=lblReferenceno]').text();
    var Memberid = $('table[id*=tblmultiins] tr').eq(Index).find('[id*=lblmemberid]').text();
    var Groupid = $('table[id*=tblmultiins] tr').eq(Index).find('[id*=lblgroupid]').text();
    var Relation = $('table[id*=tblmultiins] tr').eq(Index).find('[id*=lblrelation]').text();
    var RelationId = $('table[id*=tblmultiins] tr').eq(Index).find('[id*=hdnrelationid]').val();
    var ExpDt = $('table[id*=tblmultiins] tr').eq(Index).find('[id*=lblexpdt]').text();
    var FirstName = $('table[id*=tblmultiins] tr').eq(Index).find('[id*=lblfirstname]').text();
    var MidName = $('table[id*=tblmultiins] tr').eq(Index).find('[id*=lblmidname]').text();
    var LastName = $('table[id*=tblmultiins] tr').eq(Index).find('[id*=lbllastname]').text();
    var Gender = $('table[id*=tblmultiins] tr').eq(Index).find('[id*=lblgender]').text();
    var Genderid = $('table[id*=tblmultiins] tr').eq(Index).find('[id*=hdngenderid]').val();
    var AName = $('table[id*=tblmultiins] tr').eq(Index).find('[id*=lblaname]').text();
    var dob = $('table[id*=tblmultiins] tr').eq(Index).find('[id*=lbldob]').text();
    var addr1 = $('table[id*=tblmultiins] tr').eq(Index).find('[id*=lbladdress1]').text();
    var addr2 = $('table[id*=tblmultiins] tr').eq(Index).find('[id*=lbladdress2]').text();
    var town = $('table[id*=tblmultiins] tr').eq(Index).find('[id*=lbltown]').text();
    var city = $('table[id*=tblmultiins] tr').eq(Index).find('[id*=lblcity]').text();
    var state = $('table[id*=tblmultiins] tr').eq(Index).find('[id*=lblstate]').text();
    var country = $('table[id*=tblmultiins] tr').eq(Index).find('[id*=lblcountry]').text();
    var townId = $('table[id*=tblmultiins] tr').eq(Index).find('[id*=hdntownid]').val();
    var zip = $('table[id*=tblmultiins] tr').eq(Index).find('[id*=lblzip]').text();
    var phoneno = $('table[id*=tblmultiins] tr').eq(Index).find('[id*=lblphoneno]').text();
    var mobileno = $('table[id*=tblmultiins] tr').eq(Index).find('[id*=lblmobileno]').text();
    var email = $('table[id*=tblmultiins] tr').eq(Index).find('[id*=lblemail]').text();
    var empname = $('table[id*=tblmultiins] tr').eq(Index).find('[id*=lblempname]').text();
    var City_id = $('table[id*=tblmultiins] tr').eq(Index).find('[id*=hdncityid]').val();
    var State_id = $('table[id*=tblmultiins] tr').eq(Index).find('[id*=hdnstateid]').val();
    var Country_id = $('table[id*=tblmultiins] tr').eq(Index).find('[id*=hdncountryid]').val();
    var emploc = $('table[id*=tblmultiins] tr').eq(Index).find('[id*=lblemploc]').text();
    var ins_name = $('table[id*=tblmultiins] tr').eq(Index).find('[id*=lblinsname]').text();
    var idproofid = $('table[id*=tblmultiins] tr').eq(Index).find('[id*=hdnID_PROOF_ID]').val();
    var district = $('table[id*=tblmultiins] tr').eq(Index).find('[id*=lbldistrict]').text();
    var districtid = $('table[id*=tblmultiins] tr').eq(Index).find('[id*=hdndistrictid]').val();
    var hdninspatid = $('table[id*=tblmultiins] tr').eq(Index).find('[id*=hdninspatid]').val();
    $('[id*=hdninspatidsingle]').val(hdninspatid);
    $('[id*=ddlinslevel]').val(InsLevelid);
    $('[id*=ucinsname_txtSearchControl]').val(InsName);
    $('[id*=ucinsname__hiddenText]').val(InsName);
    $('[id*=ucinsname__hiddenID]').val(InsId);
    $('[id*=txtplanname]').val(PlanName); $('[id*=txtinsper]').val(Insperc);
    $('[id*=txtpatper]').val(OrgPerc); $('[id*=txtplociyno]').val(Policyno);
    $('[id*=txtinsexpdt]').val(ExpDt); $('[id*=txtpholssnno]').val(PolicySSN);
    $('[id*=txtmemid]').val(Memberid); $('[id*=txtgrpid]').val(Groupid);
    $('[id*=uccorporate_ddlinsrelations]').val(RelationId);
    $('[id*=txtReferenceno]').val(Referenceno);
    if (RelationId == 14) {
        $('[id*=uccorporate_chkPerAsPres]').prop('checked', true);
        $('[id*=uccorporate_chkPerAsPres]').attr('disabled', true);
    }
    else {
        $('[id*=uccorporate_chkPerAsPres]').prop('checked', false);
        $('[id*=uccorporate_chkPerAsPres]').attr('disabled', false);
    }
    $('[id*=ddlinslevel]')[0].disabled = true;
    /*Card Holder Details*/
    $('[id*=txtinsfname]').val(FirstName); $('[id*=txtinslname]').val(LastName); $('[id*=txtinsmname]').val(MidName); /*first last mid name*/
    var display_name = FirstName + ' ' + MidName + ' ' + LastName;
    if (display_name != "") { $('[id*=uccorporate_TextBox1]').attr('disabled', true); }
    $('[id*=uccorporate_TextBox1]').val(display_name);
    $('[id*=txtinsdob]').val(dob); $('[id*=txtinsempname]').val(empname);
    $('[id*=ddlGender]').val(Genderid); $('[id*=txtinsemploc]').val(emploc);
    $('[id*=txtinsname]').val(ins_name);
    $('[id*=uccorporate_ddlproofid]').val(idproofid);
    /*address block*/
    $('[id*=uccorporate_txtAddress1]').val(addr1); $('[id*=uccorporate_txtAddress2]').val(addr2); /*addr1 addr2*/
    $('[id*=uccorporate_ucArea_txtSearchControl]').val(town); $('[id*=uccorporate_ucArea__hiddenText]').val(town); $('[id*=uccorporate_ucArea__hiddenID]').val(townId);
    $('[id*=uccorporate_txtdistrict]').val(district); $('[id*=uccorporate_hdndistrictid]').val(districtid); /*districtid*/
    $('[id*=uccorporate_ucCountry]').val(country); $('[id*=uccorporate_hdncountryid]').val(Country_id); /*Country*/
    $('[id*=uccorporate_ucCity]').val(city); $('[id*=uccorporate_hdncityid]').val(City_id); /*city*/
    $('[id*=uccorporate_ucState]').val(state); $('[id*=uccorporate_hdnstateid]').val(State_id); /*State*/
    $('[id*=uccorporate_txtPin]').val(zip); /*zip*/
    $('[id*=uccorporate_txtmobileno]').val(mobileno); $('[id*=_uccorporate_txtPhone]').val(phoneno); /*mobileno*/
    $('[id*=uccorporate_txtEName]').val(AName);
    $('[id*=imgBtnUpdate]').css('display', 'table-cell'); $('[id*=imgbtnAdd]').css('display', 'none');
    if (RelationId == "14") {
        $('[id*=txtinsfname]').attr('disabled', true); $('[id*=txtinslname]').attr('disabled', true); $('[id*=txtinsmname]').attr('disabled', true);
        $('[id*=uccorporate_TextBox1]').attr('disabled', true); $('[id*=uccorporate_TextBox2]').attr('disabled', true);
        $('[id*=uccorporate_txtPhone]').attr('disabled', true); $('[id*=uccorporate_txtPin]').attr('disabled', true);
        $('[id*=txtinsfname]').removeClass('red'); $('[id*=txtinslname]').removeClass('red'); $('[id*=txtinsmname]').removeClass('red');
        $('[id*=uccorporate_ucArea_txtSearchControl]').attr('disabled', true);
        lk_btn_ctl00_ContentPlaceHolder1_uccorporate_ucArea.disabled = true;
        $('[id*=uccorporate_txtAddress1]').attr('disabled', true);
        $('[id*=uccorporate_txtAddress2]').attr('disabled', true);
        $('[id*=uccorporate_txtmobileno]').attr('disabled', true);
        $('[id*=ddlGender]').attr('disabled', true);
        $('[id*=txtinsdob]').attr('disabled', true);
    }
    else {
        $('[id*=txtinsfname]').attr('disabled', false); $('[id*=txtinslname]').attr('disabled', false); $('[id*=txtinsmname]').attr('disabled', false);
        $('[id*=uccorporate_TextBox1]').attr('disabled', false); $('[id*=uccorporate_TextBox2]').attr('disabled', false);
        $('[id*=uccorporate_txtPhone]').attr('disabled', false); $('[id*=uccorporate_txtPin]').attr('disabled', false);
        $('[id*=uccorporate_ucArea_txtSearchControl]').attr('disabled', false);
        lk_btn_ctl00_ContentPlaceHolder1_uccorporate_ucArea.disabled = false;
        $('[id*=uccorporate_txtAddress1]').attr('disabled', false);
        $('[id*=uccorporate_txtAddress2]').attr('disabled', false);
        $('[id*=uccorporate_txtmobileno]').attr('disabled', false);
        $('[id*=ddlGender]').attr('disabled', false);
        $('[id*=txtinsdob]').attr('disabled', false);
    }
    selectlevel();
}
function SetDisplayName() {
    var displayname = $('[id*=uccorporate_TextBox1]').val();
    var txtFirstName = $('[id*=txtinsfname]').val();
    var txtMiddleName = $('[id*=txtinsmname]').val();
    var txtLastName = $('[id*=txtinslname]').val();
    var relname = $('[id*=uccorporate_ddlinsrelations]').val();
    var fname = '', mname = '', lname = '';
    if (relname == "14" && displayname == "") {
        fname = txtFirstName;
        mname = txtMiddleName;
        lname = txtLastName;
        if (fname == null || fname == '' || fname == undefined) { fname = fname; } else { fname = fname.trim(); }
        if (mname == null || mname == '' || mname == undefined) { mname = mname; } else { mname = mname.trim(); }
        if (lname == null || lname == '' || lname == undefined) { lname = lname; } else { lname = lname.trim(); }
        lblDisplayName = fname + ' ' + mname + ' ' + lname;
        $('[id*=uccorporate_TextBox1]').val(lblDisplayName);
    }
    else {
        fname = txtFirstName;
        mname = txtMiddleName;
        lname = txtLastName;
        if (fname == null || fname == '' || fname == undefined) { fname = fname; } else { fname = fname.trim(); }
        if (mname == null || mname == '' || mname == undefined) { mname = mname; } else { mname = mname.trim(); }
        if (lname == null || lname == '' || lname == undefined) { lname = lname; } else { lname = lname.trim(); }
        lblDisplayName = fname + ' ' + mname + ' ' + lname;
        TitleCase1($('[id*=uccorporate_TextBox1]').val(lblDisplayName));
    }
}
function Delete(obj) {
    if (getParameterByName("MODE") != "VIEW") {
        var updaterecord = $('[id*=imgBtnUpdate]')[0].style.display == "table-cell";
        if (updaterecord == true) {
            $(".stoast").toastText("Info", 'Please Update The Record', 5, 2);
            return false;
        }
        var rowindex = obj.parentElement.parentElement.rowIndex;
        $('table[id*=tblmultiins] tr').filter(':eq(' + rowindex + ')').remove();
    }
}
function Onchangeclearfields() {
    $('[id*=uccorporate_txtpholssnno]').val('');
    $('[id*=uccorporate_txtpholssnno]').removeClass('red');
    if ($('[id*=uccorporate_ddlproofid]').val() == "0") {
        $('[id*=uccorporate_txtpholssnno]').removeClass('red');
    }
    else {
        $('[id*=uccorporate_txtpholssnno]').addClass('red');
    }
}
function TitleCase1(oField) {
    var myValue = document.getElementById(oField.id).value;
    var name = '';
    if (myValue != '' && myValue != undefined && myValue != null) {
        var testval = myValue.split(' ');
        for (var i = 0; i < testval.length; i++) {
            if (testval[i] != '') {
                name = name + " " + testval[i];
            }
        }
        myValue = name;
    }
    myValue = myValue.toUpperCase().trim();
    return myValue;
}
function PatientInfoChecked(obj) {
    var patId = $('[id*=umrPatientDetails_hdnPatientid]').val();
    if (patId == '') {
        $(".stoast").toastText("Info", 'Please select a patient', 5, 2);
        return false;
    }
    if (obj.checked == true) {
        PageMethods.Get_Patient_Addresses(patId, GetSuccessAddr, GetFailaddr);
    }
    else {
        $('[id*=uccorporate_TextBox1]').attr('disabled', false);
        ClearContactControl();
    }
}
function GetFailaddr(error) {
}
function GetSuccessAddr(result) {
    var t = $(result);
    var trObject = t.find('tr');
    var tdObject = trObject.find('td');
    if (tdObject != '' && tdObject != null && tdObject != undefined) {
        $('[id*= uccorporate_txtPhone]').val(tdObject[3].innerHTML);
        $('[id*= uccorporate_txtPin]').val(tdObject[7].innerHTML); /*ZIP Code*/
        $('[id*= uccorporate_ucArea__hiddenID]').val(tdObject[13].innerHTML); /*Ameerpetid*/
        $('[id*= hdnAreaId]').val(tdObject[13].innerHTML); /*Ameerpetid*/
        $('[id*= uccorporate_ucArea__hiddenText]').val(tdObject[14].innerHTML); /*Ameerpet*/
        $('[id*= uccorporate_ucArea_txtSearchControl]').val(tdObject[14].innerHTML); /*Ameerpet*/
        $('[id*= uccorporate_txtAddress1]').val(tdObject[19].innerText); /*address1*/
        $('[id*= uccorporate_txtAddress2]').val(tdObject[20].innerText); /*address2*/
        $('[id*= hdncityid]').val(tdObject[21].innerHTML); /*Hyderabadid*/
        $('[id*= hdncityid]').val(tdObject[21].innerHTML); /*Hyderabadid*/
        $('[id*= uccorporate_ucCity]').val(tdObject[22].innerHTML); /*Hyderabad*/
        $('[id*= hdncountryid]').val(tdObject[23].innerHTML);
        $('[id*= uccorporate_ucCountry]').val(tdObject[24].innerHTML); /*India*/
        $('[id*= hdnstateid]').val(tdObject[25].innerHTML); /*(Andhra Pradesh)*/
        $('[id*= uccorporate_ucState]').val(tdObject[26].innerHTML); /*(Andhra Pradesh)*/
        $('[id*= uccorporate_txtdistrict]').val(tdObject[29].innerHTML); /*District*/
        $('[id*= hdndistrictid]').val(tdObject[30].innerHTML); /*DistrictID*/
        var ddlrelationid = $('[id*=uccorporate_ddlinsrelations]').val();
        if (ddlrelationid == "14") {
            $('[id*=txtinsfname]').val(tdObject[31].innerHTML);
            $('[id*=txtinslname]').val(tdObject[33].innerHTML);
            $('[id*=txtinsmname]').val(tdObject[32].innerHTML);
        }
    }
}
function selectRelationinsurance() {
    var gender = $('[id*=umrPatientDetails_lblgender]').text();
    ddlrelationid = $('[id*=uccorporate_ddlinsrelations]').val();
    if (ddlrelationid == "14") {
        $('[id*=uccorporate_chkPerAsPres]').prop('checked', true);
        $('[id*=uccorporate_chkPerAsPres]').attr('disabled', true);
        $(document).on('click', PatientInfoChecked(ctl00_ContentPlaceHolder1_uccorporate_chkPerAsPres));
        lblPatName = $('[id*=umrPatientDetails_lblPatName]').text();
        $('[id*=uccorporate_TextBox1]').val(lblPatName);
        var patdob = $('[id*=umrPatientDetails_lblagedob]').text().split('/');
        $('[id*=txtinsdob]').val(patdob[1]);
        var genderid = $('[id*=umrPatientDetails_hdnGenderID]').val();
        if (genderid == null || genderid == undefined || genderid == "" || genderid == NaN) {
            if ($('[id*=umrPatientDetails_lblgender]').text() == "Male") { genderid = 1; }
            if ($('[id*=umrPatientDetails_lblgender]').text() == "Female") { genderid = 2; }
        }
        $('[id*=uccorporate_ddlGender]').val(genderid);
        var patientname = $('[id*=umrPatientDetails_lblPatName]').text();
        var objepat = patientname.split(' ');
        //        if (objepat.length == 3) {
        //            $('[id*=txtinsfname]').val(objepat[0]);
        //            $('[id*=txtinslname]').val(objepat[2]);
        //            $('[id*=txtinsmname]').val(objepat[1]);
        //        } else {
        //            $('[id*=txtinsfname]').val(objepat[0]);
        //            $('[id*=txtinslname]').val(objepat[1]);
        //        }
        $('[id*=uccorporate_TextBox1]').attr('disabled', true);
        if ($('[id*=umrPatientDetails_lblMobileNo]').text() == "null") {
            document.getElementById('ctl00_ContentPlaceHolder1_EmergencyContactDetails1_txtmobileno').value == ""
        }
        else {
            var lblMobileNo = $('[id*=umrPatientDetails_lblMobileNo]').text();
            $('[id*=uccorporate_txtmobileno]').val(lblMobileNo);
        }
        $('[id*=txtinsfname]').attr('disabled', true);
        $('[id*=txtinslname]').attr('disabled', true);
        $('[id*=txtinsmname]').attr('disabled', true);
        $('[id*=txtinsfname]').removeClass('red'); $('[id*=txtinslname]').removeClass('red'); $('[id*=txtinsmname]').removeClass('red');
        $('[id*=uccorporate_TextBox1]').attr('disabled', true);
        $('[id*=uccorporate_TextBox2]').attr('disabled', true);
        $('[id*=uccorporate_txtPhone]').attr('disabled', true);
        $('[id*=uccorporate_txtPin]').attr('disabled', true);
        $('[id*=uccorporate_ucArea_txtSearchControl]').attr('disabled', true);
        lk_btn_ctl00_ContentPlaceHolder1_uccorporate_ucArea.disabled = true;
        $('[id*=uccorporate_txtAddress1]').attr('disabled', true);
        $('[id*=uccorporate_txtAddress2]').attr('disabled', true);
        $('[id*=uccorporate_txtmobileno]').attr('disabled', true);
        $('[id*=ddlGender]').attr('disabled', true);
        $('[id*=txtinsdob]').attr('disabled', true);
    } else {
        $('[id*=uccorporate_chkPerAsPres]').prop('checked', false);
        $('[id*=uccorporate_chkPerAsPres]').attr('disabled', false);
        $(document).on('click', PatientInfoChecked(ctl00_ContentPlaceHolder1_uccorporate_chkPerAsPres));
        $('[id*=uccorporate_txtmobileno]').val('');
        $('[id*=txtinsfname]').val('');
        $('[id*=txtinslname]').val('');
        $('[id*=txtinsmname]').val('');
        $('[id*=uccorporate_TextBox1]').val('');
        $('[id*=uccorporate_TextBox1]').attr('disabled', false);
        $('[id*=uccorporate_TextBox2]').attr('disabled', false);
        $('[id*=uccorporate_txtPhone]').attr('disabled', false);
        $('[id*=uccorporate_txtPin]').attr('disabled', false);
        $('[id*=uccorporate_txtmobileno]').attr('disabled', false);
        $('[id*=uccorporate_ucArea_txtSearchControl]').attr('disabled', false);
        lk_btn_ctl00_ContentPlaceHolder1_uccorporate_ucArea.disabled = false;
        $('[id*=uccorporate_txtAddress1]').attr('disabled', false);
        $('[id*=uccorporate_txtAddress2]').attr('disabled', false);
        $('[id*=txtinsfname]').attr('disabled', false);
        $('[id*=txtinslname]').attr('disabled', false);
        $('[id*=txtinsmname]').attr('disabled', false);
        $('[id*=ddlGender]').attr('disabled', false);
        $('[id*=txtinsdob]').attr('disabled', false);
        $('[id*=txtinsdob]').val('');
        $('[id*=uccorporate_ddlGender]').val(0);
    }
    OnNullValue($('[id*=txtinsfname]')[0]);
    OnNullValue($('[id*=txtinslname]')[0]);
}
function onsavevalidation() {
    var Admn_no = $('[id*=IPPatientDtls1_ucUmrNo_txtSearchControl]').val();
    var Gridlength = $('[id$=tblmultiins] tbody')[0].rows.length;
    if (Gridlength == 0) {
        $(".stoast").toastText("Info", 'Please add atleast one Company', 5, 2);
        return false;
    }
    var _xmlStr = '';
    var umr_no = $('[id*=umrPatientDetails_Umrlookup_txtSearchControl]').val();
    var patclassid = 1; var address_id = 0;
    $('[id*=tblmultiins] tr:has(td)').each(function () {
        var inslevel = $(this).closest('tr').find('[id*=hdninslevelid]').val();
        var ins_cmp_name = $(this).closest('tr').find('[id*=lblsponsername]').text();
        var ins_cmp_id = $(this).closest('tr').find('[id*=hdncmpid]').val();
        var plan_name = $(this).closest('tr').find('[id*=lblplanname]').text();
        var policy_no = $(this).closest('tr').find('[id*=lblpolicyno]').text();
        var first_name = $(this).closest('tr').find('[id*=lblfirstname]').text();
        var middle_name = $(this).closest('tr').find('[id*=lblmidname]').text();
        var last_name = $(this).closest('tr').find('[id*=lbllastname]').text();
        var inspatid = $(this).closest('tr').find('[id*=hdninspatid]').val();
        var gender_id = $(this).closest('tr').find('[id*=hdngenderid]').val();
        var relation_id = $(this).closest('tr').find('[id*=hdnrelationid]').val();
        var dob = $(this).closest('tr').find('[id*=lbldob]').text();
        var member_id = $(this).closest('tr').find('[id*=lblmemberid]').text();
        var group_id = $(this).closest('tr').find('[id*=lblgroupid]').text();
        var exp_dt = $(this).closest('tr').find('[id*=lblexpdt]').text();
        var ssn = $(this).closest('tr').find('[id*=lblpolicyholder]').text();
        var empname = $(this).closest('tr').find('[id*=lblempname]').text();
        var emplocation = $(this).closest('tr').find('[id*=lblemploc]').text();
        var town_id = $(this).closest('tr').find('[id*=hdntownid]').val();
        var phoneno = $(this).closest('tr').find('[id*=lblphoneno]').text();
        var mobileno = $(this).closest('tr').find('[id*=lblmobileno]').text();
        var emailid = $(this).closest('tr').find('[id*=lblemail]').text();
        var zipcode = $(this).closest('tr').find('[id*=lblzip]').text();
        var city_id = $(this).closest('tr').find('[id*=hdncityid]').val();
        var state_id = $(this).closest('tr').find('[id*=hdnstateid]').val();
        var country_id = $(this).closest('tr').find('[id*=hdncountryid]').val();
        var ins_name = $(this).closest('tr').find('[id*=lblinsname]').text();
        var CMP_PER = $(this).closest('tr').find('[id*=lblinsperc]').text();
        var PAT_PER = $(this).closest('tr').find('[id*=lblpatperc]').text();
        var ID_PROOF_ID = $(this).closest('tr').find('[id*=hdnID_PROOF_ID]').val();
        var ID_PROOF_NAME = $(this).closest('tr').find('[id*=lblidProf]').text();

        var Referenceno = $(this).closest('tr').find('[id*=lblReferenceno]').text();

        if (CMP_PER == '' || CMP_PER == null || CMP_PER == undefined) { CMP_PER = 0; }
        if (PAT_PER == '' || PAT_PER == null || PAT_PER == undefined) { PAT_PER = 0; }
        if (inspatid == '' || inspatid == null || inspatid == undefined) { inspatid = 0; }
        if (ID_PROOF_ID == '' || ID_PROOF_ID == null || ID_PROOF_ID == undefined) { ID_PROOF_ID = 0; }
        var address1 = $(this).closest('tr').find('[id*=lbladdress1]').text();
        var address2 = $(this).closest('tr').find('[id*=lbladdress2]').text();
        var admn_no = $('[id*=umrPatientDetails_ucPreAdmUmr_txtSearchControl]').val();
        /* for change admission detaile perpose*/
        if (umr_no == admn_no) { admn_no = $('[id*=umrPatientDetails_ucAdmission_txtSearchControl]').val(); }
        if (admn_no == "" || admn_no == null || admn_no == undefined || admn_no == NaN) { admn_no = ""; }
        _xmlStr += "<root>";
        _xmlStr += "<FO_PATIENT_INSURANCE";
        _xmlStr += " TPA_COMPANY_NAME=!" + ins_name + "!";
        _xmlStr += " PATIENT_INS_ID=!" + inspatid + "!";
        _xmlStr += " CMP_PER=!" + CMP_PER + "!";
        _xmlStr += " PAT_PER=!" + PAT_PER + "!";
        _xmlStr += " PATIENT_INS_REV_NO=!" + 1 + "!";
        _xmlStr += " UMR_NO=!" + umr_no + "!";
        _xmlStr += " PATIENT_CLASS_ID=!" + patclassid + "!";
        _xmlStr += " VISIT_ID=!" + 0 + "!";
        _xmlStr += " ADMN_ID=!" + 0 + "!";
        _xmlStr += " ADMN_NO=!" + admn_no + "!";
        _xmlStr += " INS_COMPANY_ID=!" + ins_cmp_id + "!";
        _xmlStr += " INS_COMPANY_NAME=!" + ReplaceSplCharactor(ins_cmp_name) + "!";
        _xmlStr += " TPA_COMPANY_ID=!" + '0' + "!";
        _xmlStr += " EMPLOYER_ID=!" + '0' + "!";
        _xmlStr += " EMPLOYER_NAME=!" + ReplaceSplCharactor(empname) + "!";
        _xmlStr += " EMPLOYER_LOCATION=!" + emplocation + "!";
        _xmlStr += " IS_PH_SAME_AS_PATIENT=!" + 'N' + "!";
        _xmlStr += " INSURANCE_LEVEL=!" + inslevel + "!";
        _xmlStr += " PH_FIRST_NAME=!" + ReplaceSplCharactor(first_name) + "!";
        _xmlStr += " PH_MIDDLE_NAME=!" + middle_name + "!";
        _xmlStr += " PH_LAST_NAME=!" + ReplaceSplCharactor(last_name) + "!";
        _xmlStr += " PH_FULL_NAME=!" + ReplaceSplCharactor(first_name + middle_name + last_name) + "!";
        _xmlStr += " PH_GENDER_ID=!" + gender_id + "!";
        _xmlStr += " PH_DOB=!" + dob + "!";
        _xmlStr += " PH_AGE=!" + '' + "!";
        _xmlStr += " PH_SSN=!" + ReplaceSplCharactor(ssn) + "!";
        _xmlStr += " PLAN_NAME=!" + ReplaceSplCharactor(plan_name) + "!";
        _xmlStr += " PLAN_NAME2=!" + '' + "!";
        _xmlStr += " PLAN_NAME3=!" + '' + "!";
        _xmlStr += " POLICY_NO=!" + ReplaceSplCharactor(policy_no) + "!";
        _xmlStr += " POLICY_EXPIRY_DT=!" + exp_dt + "!";
        _xmlStr += " POLICY_MEMBER_ID=!" + ReplaceSplCharactor(member_id) + "!";
        _xmlStr += " POLICY_GROUP_ID=!" + ReplaceSplCharactor(group_id) + "!";
        _xmlStr += " RELATION_ID=!" + relation_id + "!";
        _xmlStr += " ID_PROOF_ID=!" + ID_PROOF_ID + "!";
        _xmlStr += " ID_PROOF=!" + ReplaceSplCharactor(ID_PROOF_NAME) + "!";
        _xmlStr += " REFERENCE=!" + ReplaceSplCharactor(Referenceno) + "!";

        _xmlStr += "/>";

        _xmlStr += "<MA.ADDRESS";
        _xmlStr += " ADDRESS_ID=!" + address_id + "!";
        _xmlStr += " ADDRESS_REV_NO=!" + 1 + "!";
        _xmlStr += " ADDRESS1=!" + ReplaceSplCharactor(address1) + "!";
        _xmlStr += " ADDRESS2=!" + ReplaceSplCharactor(address2) + "!";
        _xmlStr += " AREA_ID=!" + town_id + "!";
        _xmlStr += " AREA_REV_NO=!" + 1 + "!";
        _xmlStr += " CITY_ID=!" + city_id + "!";
        _xmlStr += " CITY_REV_NO=!" + 1 + "!";
        _xmlStr += " STATE_ID=!" + state_id + "!";
        _xmlStr += " STATE_REV_NO=!" + 1 + "!";
        _xmlStr += " COUNTRY_ID=!" + country_id + "!";
        _xmlStr += " COUNTRY_REV_NO=!" + 1 + "!";
        _xmlStr += " OFFICE_PHONE=!" + phoneno + "!";
        _xmlStr += " HOME_PHONE=!" + mobileno + "!";
        _xmlStr += " MOBILE_PHONE=!" + mobileno + "!";
        _xmlStr += " ZIPCODE=!" + ReplaceSplCharactor(zipcode) + "!";
        _xmlStr += " ADDR_TYPE_ID=!" + 12 + "!";
        _xmlStr += " REFERENCE_TYPE_ID=!" + 150 + "!";
        _xmlStr += " REFERENCE_ID=!" + inspatid + "!";
        _xmlStr += "/>";
        _xmlStr += "</root>";
    });
    var TYPE = "";
    GetNonAsync(
    "CreditOrgService.asmx/SaveMultipleIns",
    { xml: _xmlStr, TYPE: TYPE },
    function (data) {
        if (data.d == true) {
            $(".stoast").toastText("Info", 'Saved Successfully', 5, 2);
            $('[id*=divmultiinspopup]').hide();
            var cmp_id = $('table[id*=tblmultiins] tr:has(td)').eq(0).find('[id*=hdncmpid]').val();
            var cmp_name = $('table[id*=tblmultiins] tr:has(td)').eq(0).find('[id*=lblsponsername]').text();
            var policy_no = $('table[id*=tblmultiins] tr:has(td)').eq(0).find('[id*=lblpolicyno]').text();
            $('[id*=uccorporate_allcmplookup_txtSearchControl]').val(cmp_name);
            document.getElementById('ctl00_ContentPlaceHolder1_uccorporate_CmpLookup_txtSearchControl').value = cmp_name;
            $('[id*=uccorporate_allcmplookup__hiddenText]').val(cmp_name);
            $('[id*=uccorporate_allcmplookup__hiddenID]').val(cmp_id);
            $('[id*=uccorporate_txtMedcard]').val(policy_no);
            document.getElementById('ctl00_ContentPlaceHolder1_uccorporate_txtEmpCd').value = '';
            ClearInsDetails(); $('table[id*=tblmultiins] tr:has(td)').remove();
            return false;
        }
    },
    function () {
    });

}
function SetcmpPerc(obj) {
    var cmp_id = $('[id*=ucinsname__hiddenID]').val();
    if (parseFloat(cmp_id) > 0) {
        var chkval = 0; var FinalVal = 0;
        chkval = parseInt(obj.value);
        if (chkval == '' || chkval == null || chkval == undefined || isNaN(chkval)) { chkval = 0; }
        FinalVal = 100 - parseInt(chkval);
        if (obj.id == "txtinsper") { $('[id*=txtpatper]').val(FinalVal); }
        if (obj.id == "txtpatper") { $('[id*=txtinsper]').val(FinalVal); }
    } else
        obj.value = 0;
}
function ChkCmpPerc(obj) {
    var value = obj.value; var chkval = 0;
    if (obj.id == "txtinsper") { chkval = $('[id*=txtpatper]').val(); }
    if (obj.id == "txtpatper") { chkval = $('[id*=txtinsper]').val(); }
    if (chkval == '' || chkval == null || chkval == undefined) { chkval = 0; }
    if (parseInt(chkval) + parseInt(value) > 100) {
        RemoveLastIndx(obj.id);
        return false;
    }
}
function oncorpmultinsurance() {
    var _chkValidation = true;
    var ctrls = new Array();
    ctrls[0] = 'ctl00_ContentPlaceHolder1_uccorporate_ucinsname_txtSearchControl';
    ctrls[1] = 'txtinsfname';
    ctrls[2] = 'txtinslname';
    ctrls[3] = 'txtplociyno';
    for (var i = 0; i < ctrls.length; i++) {
        var ctrl = document.getElementById(ctrls[i]);
        if (OnNullValue(ctrl) == false) {
            _chkValidation = false;
        }
    }
    return _chkValidation;
}

function GetSavedInscmpsINPREADMIN() {
    var umr_no = $('[id*=umrPatientDetails_Umrlookup_txtSearchControl]').val();
    GetAsync(
    "Private/Corporate/Changes/CorpMultipleIns.aspx/GetSavedInscmps  ",
    { umr_no: umr_no },
    function (data) {
        if (data.d.length > 0) {
            var sdata = data.d[0];
            var policy = data.d[0][0].POLICY_NO;
            if (policy == null || policy == undefined || policy == NaN) { policy = ""; }
            document.getElementById('ctl00_ContentPlaceHolder1_uccorporate_txtMedcard').value = policy;
        }
    },
        function () {
        });
}
function GetSavedInscmps() {
    $('table[id*=tblmultiins] tbody tr').remove();
    var umr_no = $('[id*=umrPatientDetails_Umrlookup_txtSearchControl]').val();
    GetAsync(
    /*"CreditOrgService.asmx/GetSavedInscmps",*/
    "Private/Corporate/Changes/CorpMultipleIns.aspx/GetSavedInscmps  ",
    { umr_no: umr_no },
    function (data) {
        if (data.d.length > 0) {
            var sdata = data.d[0];
            for (i = 0; i < sdata.length; i++) {
                var dob = sdata[i].PH_DOB;
                if (dob == null || dob == undefined) { dob = ''; }
                if (dob != '') { dob = new Date(dob).format('dd-MMM-yyyy'); }
                var POLICY_EXPIRY_DT = sdata[i].POLICY_EXPIRY_DT;
                if (POLICY_EXPIRY_DT == null || POLICY_EXPIRY_DT == undefined) { POLICY_EXPIRY_DT = ''; }
                if (POLICY_EXPIRY_DT != '') { POLICY_EXPIRY_DT = new Date(POLICY_EXPIRY_DT).format('dd-MMM-yyyy'); }
                var inslevel = sdata[i].INSURANCE_LEVEL_NAME;
                var idprof = sdata[i].ID_PROOF;
                var ID_PROOF_ID = sdata[i].ID_PROOF_ID;
                /*if (inslevel == 1) { inslevel = "Primary"; } if (inslevel == 2) { inslevel = "Secondary"; } if (inslevel == 3) { inslevel = "Territory"; }*/
                var InsPerc = sdata[i].CMP_PER.replace('.', '');
                var PatPerc = sdata[i].PAT_PER.replace('.', '');
                var PinZip = sdata[i].ZIPCODE;
                var Name = sdata[i].PH_FULL_NAME;
                var PRE_AUTH_AMOUNT = sdata[i].PRE_AUTH_AMOUNT;
                var APRVL_AMOUNT = sdata[i].APRVL_AMOUNT;
                var District_name = sdata[i].DISTRICT_NAME;
                var jDataval = AddUpdateInscmp(i + 1, sdata[i].INS_COMPANY_NAME, sdata[i].TPA_COMPANY_NAME, sdata[i].INS_COMPANY_ID, inslevel, sdata[i].INSURANCE_LEVEL, sdata[i].PLAN_NAME, InsPerc, PatPerc, sdata[i].PH_SSN, sdata[i].POLICY_NO, sdata[i].POLICY_MEMBER_ID, sdata[i].POLICY_GROUP_ID,
                    sdata[i].RELATION_NAME, sdata[i].RELATION_ID, POLICY_EXPIRY_DT, sdata[i].PH_FIRST_NAME, sdata[i].PH_MIDDLE_NAME, sdata[i].PH_LAST_NAME, sdata[i].GENDER_NAME, sdata[i].PH_GENDER_ID, dob,
                     '', sdata[i].ADDRESS1, sdata[i].ADDRESS2, sdata[i].AREA_NAME, sdata[i].AREA_ID, sdata[i].ZIPCODE, sdata[i].OFFICE_PHONE, sdata[i].MOBILE_PHONE, sdata[i].EMPLOYER_NAME, sdata[i].EMPLOYER_LOCATION,
                      sdata[i].CITY_ID, sdata[i].STATE_ID, sdata[i].COUNTRY_ID, sdata[i].CITY_NAME, sdata[i].STATE_NAME, sdata[i].COUNTRY_NAME, sdata[i].PRE_AUTH_AMOUNT, sdata[i].APRVL_AMOUNT,
                       sdata[i].ID_PROOF, sdata[i].ID_PROOF_ID, sdata[i].DISTRICT_NAME, 0, sdata[i].PATIENT_INS_ID, sdata[i].REFERENCE);
                renderUIDis(jDataval);
            }
        }
    },
    function () {
    });
}
function chkinsexpdtformat(obj) {
    var expdt = obj.value;
    if (expdt != '') {
        var result = expdt.match(/^\d{2}-[a-zA-Z]*-\d{4}$/);
        if (result == null || result == undefined) { result = ''; }
        if (result != '') {
            var gmon = expdt.split('-')[1];
            var gday = expdt.split('-')[0];
            if (gday < 31) {
                var months = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'];
                result = months.indexOf(gmon.toLowerCase());
            } else { result = ""; }
        }
        if (result < 0 || result === '') {
            $(".stoast").toastText("Info", "Please Provide Proper Date Format like '" + new Date().format('dd-MMM-yyyy') + "'", 5, 2);
            obj.value = '';
            return false;
        }
        if (obj.id == "txtinsdob") {
            CompareDatedob();
        }
        CompareDateexp();
    }
}
function CompareDateexp() {
    var date1 = new Date().format('dd-MMM-yyyy');
    var expdate = $('[id*=txtinsexpdt]').val();
    var date2 = new Date(expdate).format('dd-MMM-yyyy');
    if (date1 != '' && date2 != '') {
        var result = CompareDatesFunc(date1, date2);
        if (result == "d1>=d2") {
            $(".stoast").toastText("Warning", "You must enter Expiry Date is greater than Today Date.", 5, 3);
            $('[id*=txtinsexpdt]').val('');
            $('[id*=txtinsexpdt]').focus();
            return false;
        }
    }
}
function CompareDatedob() {
    var date1 = new Date().format('dd-MMM-yyyy');
    var dobdate = $('[id*=txtinsdob]').val();
    var date2 = new Date(dobdate).format('dd-MMM-yyyy');
    if (date1 != '' && date2 != '') {
        var result = CompareDatesFunc(date1, date2);
        if (result == "d1<d2") {
            $(".stoast").toastText("Warning", "You must enter DOB Date is Less than Today Date.", 5, 3);
            $('[id*=txtinsdob]').val('');
            $('[id*=txtinsdob]').focus();
            return false;
        }
    }
}
function CompareDatesFunc(Date1, Date2) {
    if (Date1 != "" && Date2 != "") {
        var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        n1 = months.length, re1 = /(\d{2})-([a-z]{3})-(\d{4})/i, matches1;
        while (n1--) { months[months[n1]] = n1; } // map month names to their index :)
        matches1 = Date1.match(re1); // extract date parts from string
        var dt1 = new Date(matches1[3], months[matches1[2]], matches1[1]);
        matches1 = Date2.match(re1); // extract date parts from string
        var dt2 = new Date(matches1[3], months[matches1[2]], matches1[1]);
        if (dt1 > dt2)
            return "d1>=d2";
        else if (dt1 < dt2)
            return "d1<d2";
    }
}

function samepolicynochk(obj) {
    var policyno = obj.value;
    GetAsync(
     "Private/Corporate/Changes/CorpMultipleIns.aspx/policynoexesits",
     { policyno: policyno },
     function (data) {
         if (data.d.length != '' && data.d.length != undefined) {
             if (data.d[0][0].FLAG == 1) {
                 if ($('[id*=txtplociyno]').val() != '') {
                     $(".stoast").toastText("warning", "This Policy# : '" + policyno + "'Already Exist.Please Give Another Policy#", 5, 3);
                     $('[id*=txtplociyno]').val('');
                     return false;
                 }
             }
         }
     },
    function () {
    });
}