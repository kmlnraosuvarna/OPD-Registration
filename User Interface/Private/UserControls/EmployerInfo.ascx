<%@ Control Language="C#" AutoEventWireup="true" CodeFile="EmployerInfo.ascx.cs"
    Inherits="HIMS.NET.Private_UserControls_EmployerInfo" %>
<%@ Register Assembly="AjaxControlToolkit" Namespace="AjaxControlToolkit" TagPrefix="ajaxToolkit" %>
<%@ Register Src="~/Private/UserControls/Lookup.ascx" TagName="GenericGrid" TagPrefix="GenericSearch" %>
<script type="text/javascript">
var ctrlcom = 'ctl00_ContentPlaceHolder1';
     function NumCharsSpaceWithHiphen(evt) {
            evt = (evt) ? evt : event;
            var charCode = (evt.charCode) ? evt.charCode : ((evt.keyCode) ? evt.keyCode : ((evt.which) ? evt.which : 0));
            if (charCode > 30 && (charCode < 65 || charCode > 90) && (charCode < 97 || charCode > 122) && (charCode < 48 || charCode > 57)) {
                if (charCode == 45) {
                    evt.returnValue = true;
                    return true;
                }
                if (charCode == 32 || charCode == 37||charCode == 47) {
                    evt.returnValue = true;
                    return true;
                }  
                evt.returnValue = false;
                return false;
            }
            return true;
        }
        function chklimitamt(obj){
         if(obj.id=="ctl00_ContentPlaceHolder1_uccorporate_EmployerInfo1_chkcreditcheck"){
              if(document.getElementById('' + ctrlcom + '_uccorporate_EmployerInfo1_chkcreditcheck').checked==true){
                    document.getElementById('' + ctrlcom + '_uccorporate_EmployerInfo1_txtcreditlimitamt').value='';
                   }
            }else{
            var doc_name=document.getElementById('' + ctrlcom + '_EmployerInfo1_hdncmpdocname').value;
            if(doc_name=="REG" || (doc_name=="OPD" && document.getElementById('' + ctrlcom + '_chk_old').checked==false)){
                if(document.getElementById('' + ctrlcom + '_EmployerInfo1_chkcreditcheck').checked==true){
                    document.getElementById('' + ctrlcom + '_EmployerInfo1_txtcreditlimitamt').value='';
                   }
                }
                if(doc_name=="REG"){
                if(document.getElementById('' + ctrlcom + '_EmployerInfo1_chkcreditcheck').checked==false){
                document.getElementById('' + ctrlcom + '_EmployerInfo1_txtcreditlimitamt').value=document.getElementById('<%=hdncreditlimitamount.ClientID %>').value;
                }
                }
             }
           }
        function chkunlimitamt(obj){
             if(obj.id=="ctl00_ContentPlaceHolder1_uccorporate_EmployerInfo1_txtcreditlimitamt"){
                  if(document.getElementById('' + ctrlcom + '_uccorporate_EmployerInfo1_txtcreditlimitamt').value>0){
                     document.getElementById('' + ctrlcom + '_uccorporate_EmployerInfo1_chkcreditcheck').checked=false;
                     document.getElementById('' + ctrlcom + '_uccorporate_hdnlimitpost').value = 'A';
                  }else{
                    document.getElementById('' + ctrlcom + '_uccorporate_hdnlimitpost').value = 'R';
                  }
             }else{
                 if(document.getElementById('' + ctrlcom + '_EmployerInfo1_txtcreditlimitamt').value>0){
                     document.getElementById('' + ctrlcom + '_EmployerInfo1_chkcreditcheck').checked=false;
                  }
             }
        }
function PolicyChange(ev)
{
if(ev.id=='ctl00_ContentPlaceHolder1_EmployerInfo1_ddlpolicytype'){
if(document.getElementById('' + ctrlcom + '_EmployerInfo1_ddlpolicytype').value==2)
{
document.getElementById('' + ctrlcom + '_EmployerInfo1_txtemployername').style.border="1px solid rgb(244, 120, 94)";
}
else
{
document.getElementById('' + ctrlcom + '_EmployerInfo1_txtemployername').style.border=" 1px solid rgb(190, 190, 190)";
}
}

if(ev.id=='ctl00_ContentPlaceHolder1_uccorporate_EmployerInfo1_ddlpolicytype'){
if(document.getElementById('' + ctrlcom + '_uccorporate_EmployerInfo1_ddlpolicytype').value==2)
{
document.getElementById('' + ctrlcom + '_uccorporate_EmployerInfo1_txtemployername').style.border="1px solid rgb(244, 120, 94)";
}
else
{
document.getElementById('' + ctrlcom + '_uccorporate_EmployerInfo1_txtemployername').style.border=" 1px solid rgb(190, 190, 190)";
}
}

}

function LetterTypeBind() {
if(document.getElementById('' + ctrlcom + '_EmployerInfo1_hdncmpdocname').value=='REG' || document.getElementById('' + ctrlcom + '_EmployerInfo1_hdncmpdocname').value=='OPD'){
    var cmp_id = document.getElementById('' + ctrlcom + '_EmployerInfo1_uctpa__hiddenID').value;
    var umr_no='';var pat_class_id=2;var admn_no='';
    if(cmp_id>0) {    
    $('[id*=divchecklist] ul li').remove();chkvalue = [];
    GetNonAsync(
                "PatientRegistration.asmx/Get_CheckList_Details",
                { cmp_id: cmp_id,umr_no:umr_no,pat_class_id:pat_class_id,admn_no:admn_no },
                   function (res) {
                        var builder = '';
                        if (res.d == '' || res.d == "null") {
                            $(".stoast").toastText("warning", "Sorry No Letter Types mapped to this Company/TPA", 5, 3);
                            return false;
                        }
                        else {
                            $('#'+ ctrlcom + '_EmployerInfo1_pnlGridPop')[0].style.display = 'block'
                            for (var i = 1; i <= res.d.length; i++) {
                                builder += "<li class=\"select\" onclick=\"Chksrvtype(this)\"><input type=\"checkbox\"  id=\"chklst_" + (i - 1) + "\" name=\"chklst_" + (i - 1) + "\"  value=\"" + res.d[i - 1].LTYPE_ID + "\" /><input type=\"hidden\"  id=\"chklisthidden_" + (i - 1) + "\"  value=\"" + res.d[i - 1].CHK_LIST_STATUS + "\"/><input type=\"hidden\"  id=\"chklistcolor_" + (i - 1) + "\"  value=\"" + res.d[i - 1].STATUS_REASON + "\"/><input type=\"hidden\"  id=\"bill_chk_list_id_" + (i - 1) + "\" name=\"bill_chk_list_id_" + (i - 1) + "\" value=\"" + res.d[i - 1].BILL_CMP_CHECKLIST_ID + "\"/>&nbsp;<span id=\"lblcolor_" + (i - 1) + "\">" + res.d[i - 1].LTYPE_NAME + "</span><input type=\"hidden\"  id=\"hdnchklistypeid_" + (i - 1) + "\"  value=\"" + res.d[i - 1].CHECKLIST_TYPE_ID + "\"/><span><input type=\"text\" placeholder='Remarks'  id=\"txtremarks_" + (i - 1) + "\" /></span><input type=\"hidden\"  id=\"hdnremarks_" + (i - 1) + "\"  value=\"" + res.d[i - 1].REMARKS + "\"/></li>";
                            }
                        }
                        $('[id*=divchecklist] ul[id*=ul_chk_list1]').append(builder);
                        MaintainChklistChecked();
                    },
                function (jqXHR, textStatus, errorThrown) {
                    $(".stoast").toastText("warning", "Failed To Get List Details", 5, 3);
                });
                 $('[id*=divchecklist] ul li').each(function () {
                var chktypeid = $(this).find('[type=hidden][id*=hdnchklistypeid]').val();
                if (chktypeid == 1) {
                    $(this).find('[id*=lblcolor]').attr('style', 'background-color:#AED75B');
                }
                if (chktypeid == 2) {
                    $(this).find('[id*=lblcolor]').attr('style', 'background-color:#FFDAB9');
                }
                if (chktypeid == 3) {
                    $(this).find('[id*=lblcolor]').attr('style', 'background-color:#FFC0CB');
                }
                if (chktypeid == 4) {
                    $(this).find('[id*=lblcolor]').attr('style', 'background-color:#f84463');
                }
                if (chktypeid == 5) {
                    $(this).find('[id*=lblcolor]').attr('style', 'background-color:#a3b9c7');
                }
                if ($(this).closest('li').find('input[id*=chklisthidden]').val() == 'Y') {
                    $(this).find('[id*=lblcolor]').attr('style', 'background-color:#c0ffdc');
                }
            });
       }
    }
}

var chk_listID = [];
    function MaintainChklistChecked() {
    if(document.getElementById('' + ctrlcom + '_EmployerInfo1_hdncmpdocname').value=='REG' || document.getElementById('' + ctrlcom + '_EmployerInfo1_hdncmpdocname').value=='OPD'){
        $('[id*=divchecklist] ul[id*=ul_chk_list1] li').each(function () {
            if ($(this).closest('li').find('input[id*=chklisthidden]').val() == 'Y') {
                $(this).closest('li').find('input[id*=chklst]')[0].checked = true;
                chk_listID += $(this).closest('li').find('input[id*=bill_chk_list_id]')[0].value + ',';
                $(this).closest('li').find('input[id*=chklst]').prop('disabled', 'true')
            }

        });
        if (chk_listID.length > 0) { chk_listID = chk_listID.substring(0, chk_listID.length - 1); }
        }
    }
    var chkvalue = [];
    function MaintainChkListId() {
        $('[id*=divchecklist] ul[id*=ul_chk_list1] li').each(function () {
            if ($(this).closest('li').find('input[id*=chklst]')[0].checked == true) {
                chkvalue += $(this).closest('li').find('input[id*=chklst]')[0].value + ',';
            }
        });
        if (chkvalue.length > 0) { chkvalue = chkvalue.substring(0, chkvalue.length - 1); }
        $('#'+ ctrlcom + '_EmployerInfo1_pnlGridPop')[0].style.display = 'none'
    }
    function Chksrvtype(obj) {
        var cmp_id = document.getElementById('' + ctrlcom + '_EmployerInfo1_uctpa__hiddenID').value;
        $('#gvchklistdtls tbody tr').remove(); var remarks = '';
        var chklst = $(obj).find('[id*=chklst]')[0].checked;
        var chklstname = $(obj).find('span').text(); var chklistid = $(obj).find('[id*=chklst]')[0].value;
        if (chklst == true) {
            $('[id*=divchecklist] ul[id*=ul_chk_list1] li').each(function () {
                if ($(this).find('[id*=chklst]')[0].checked == true) {
                    var chkval = $(this).find('[id*=chklst]').val();
                    if (chklistid == chkval) {
                        remarks = $(this).find('[id*=hdnremarks]').val();
                    }
                }
                $(this).find('[id*=chklst]')[0].checked = false;
            });
            $(obj).find('[id*=chklst]')[0].checked = true;
            GetAsync("Private/FrontOffice/OpBilling/OpConsultation1.aspx/setimgprecondition", { cmp_id: cmp_id, chklistid: chklistid }, function () { }, function (jqXHR, textStatus, errorThrown) { });
        }
    }

function btnclosetype(){
$('#'+ ctrlcom + '_EmployerInfo1_pnlGridPop')[0].style.display='none'
}
    function oncolorchange(obj) {
    if(document.getElementById('' + ctrlcom + '_EmployerInfo1_hdncmpdocname')!=null){
        var doc_name=document.getElementById('' + ctrlcom + '_EmployerInfo1_hdncmpdocname').value;
        var refletter="N";
        if(doc_name != "BillConvertion"){
        if (document.getElementById('' + ctrlcom + '_EmployerInfo1_hdncmpdocname').value == "REG" ){
        refletter = document.getElementById('' + ctrlcom + '_hdnrefletterreq').value;
       
        }
        else if(document.getElementById('' + ctrlcom + '_EmployerInfo1_hdncmpdocname').value == "Cons" || document.getElementById('' + ctrlcom + '_EmployerInfo1_hdncmpdocname').value == "OPD"){
        refletter=document.getElementById('' + ctrlcom + '_uccorporate_hdnrefletterreq').value;
        }
        if (document.getElementById('' + ctrlcom + '_EmployerInfo1_hdncmpdocname').value == "REG" ||
         document.getElementById('' + ctrlcom + '_EmployerInfo1_hdncmpdocname').value == "OPD" ||
         document.getElementById('' + ctrlcom + '_EmployerInfo1_hdncmpdocname').value == "Cons") {
            if (refletter == "N" || refletter == "" || refletter == null) {
                obj.style.border = '1px solid rgb(190, 190, 190)';
            } else {
                if (obj.value == '') {
                    obj.style.border = '1px solid rgb(244, 120, 94)';
                } else {
                    obj.style.border = '1px solid rgb(190, 190, 190)';
                }
            }
        }
      }
    }
  }
    $(document).ready(function (e) {
            var dateformat = $('#'+ ctrlcom + '_EmployerInfo1_hdndateformat').val();
            if(dateformat==undefined)
                dateformat=$('#'+ ctrlcom + '_uccorporate_EmployerInfo1_hdndateformat').val();
            var split = dateformat.split(' ');
            var current_format = split[0];
        $('[id*=txtEmpCardValidity]').datepicker({
            changeMonth: true,
            changeYear: true,
            dateFormat: current_format,
            minDate: new Date,
        });
        $('[id*=txtlettervalidity]').datepicker({
            changeMonth: true,
            changeYear: true,
            dateFormat: current_format,
            minDate: new Date,
            onSelect: function () {
                checkrefvalidDate(this);
            }
        });
        $('[id*=txtdateofissue]').datepicker({
            changeMonth: true,
            changeYear: true,
            dateFormat: current_format,
            maxDate: new Date,
           
        });
        $('[id*=txtrefissuedt]').datepicker({
            changeMonth: true,
            changeYear: true,
            dateFormat: current_format,
            maxDate: new Date,
            onSelect: function () {
                checkrefissueDate(this);
            }
        });
    });


    function OnEWardSelect(obj) {
    }
    function OnRefLtSelection(_d)
    {
      var dateformat = document.getElementById('<%=hdndateformat.ClientID %>').value;
    var split = dateformat.split(' ');
    var current_format = split[0];
     document.getElementById('' + ctrlcom + '_EmployerInfo1_ucRefLetterNo_txtSearchControl').value=_d.REFERAL_LETTER_NO;
     document.getElementById('' + ctrlcom + '_EmployerInfo1_ucRefLetterNo__hiddenID').value=_d.CMPNY_REFERAL_LETTER_ID;
     document.getElementById('' + ctrlcom + '_EmployerInfo1_ucRefLetterNo__hiddenText').value=_d.REFERAL_LETTER_NO;
     $('#'+ ctrlcom + '_EmployerInfo1_txtrefissuedt').val(new Date(_d.REFERRAL_LETTER_ISSUE_DT).format(current_format));
     document.getElementById('' + ctrlcom + '_EmployerInfo1_txtlettervalidity').value = new Date(_d.REFERRAL_VALIDITY_DT).format(current_format);
     if (_d.REFERAL_LETTER_DT != '' && _d.REFERAL_LETTER_DT != undefined && _d.REFERAL_LETTER_DT != null) {
     $('#'+ ctrlcom + '_EmployerInfo1_txtrefissuedt').val(new Date(_d.REFERRAL_LETTER_ISSUE_DT).format(current_format));
     }
     else
     { $('#'+ ctrlcom + '_EmployerInfo1_txtrefissuedt').val(new Date().format(current_format)); }
     if(_d.LETTER_ISSUED_BY=="")
     {
     $('#'+ ctrlcom + '_EmployerInfo1_txtletterissuedby').disabled=false;
     }else{
     $('#'+ ctrlcom + '_EmployerInfo1_txtletterissuedby').val(_d.LETTER_ISSUED_BY);
     }
     $('#'+ ctrlcom + '_EmployerInfo1_txtcreditlimitamt').val(_d.CREDIT_LIMIT_AMT);
     if (_d.CARD_ISSUE_DT != '' && _d.CARD_ISSUE_DT != undefined && _d.CARD_ISSUE_DT != null) {
     $('#'+ ctrlcom + '_EmployerInfo1_txtdateofissue').val(new Date(_d.CARD_ISSUE_DT).format(current_format));
     } else {
     $('#'+ ctrlcom + '_EmployerInfo1_txtdateofissue').val(new Date().format(current_format));
     }
      ServicesAutoContextKey();
    }
    

    function UpperCase(Name) {
        Name.value = Name.value.trim();
        Name.value = Name.value.toUpperCase();
        return Name.value;
    }
    function OnDeptSelection(sender, eventArgs) {
        var results = eval('(' + eventArgs.get_value() + ')');
    }
 /*   function OnBranchSelection(sender, eventArgs) {;
        var results = eval('(' + eventArgs.get_value() + ')');
    }
   function OnDivisonSelection(sender, eventArgs) {
        var results = eval('(' + eventArgs.get_value() + ')');
         document.getElementById('' + ctrlcom + '_EmployerInfo1_hdndivision').value = results.Value;
    }
   
    function OnCompanySelected(input) {
        $("#"+ ctrlcom + "_EmployerControl1_txtSearchControl").val(input["COMPANY_NAME"]);
        $("#"+ ctrlcom + "_EmployerControl1__hiddenID").val(input["COMPANY_ID"]);
        $("#"+ ctrlcom + "_txtCmpFee").val(input["COMPANY_FEE"]);
        $("#"+ ctrlcom + "_lblCmpCode").val(input["COMANY_CD"]);

    }
    function OnTpaSelected(input) {
        $("#"+ ctrlcom + "_EmployerInfo1_uctpa_txtSearchControl").val(input["COMPANY_NAME"]);
        $("#"+ ctrlcom + "_EmployerInfo1_uctpa__hiddenID").val(input["COMPANY_ID"]);
        $("#"+ ctrlcom + "_txtCmpFee").val(input["COMPANY_FEE"]);
        $("#"+ ctrlcom + "_lblCmpCode").val(input["COMANY_CD"]);
        document.getElementById('' + ctrlcom + '_EmployerInfo1_ddlrelation').value = input["EMP_RELATIONSHIP_ID"];
        document.getElementById('' + ctrlcom + '_EmployerInfo1_txtEmploeeID').value = input["EMPLOYEE_ID"];
        document.getElementById('' + ctrlcom + '_EmployerInfo1_txtDesignation').value = input["DESIGNATION"];
        document.getElementById('' + ctrlcom + '_EmployerInfo1_txtDept').value = input["DEPARTMENT"];
        document.getElementById('' + ctrlcom + '_EmployerInfo1_txtBranch').value = input["BRANCH"];
        document.getElementById('' + ctrlcom + '_EmployerInfo1_txtempgrade').value = input["EMP_GRADE_ID"];
    }
    function OnGradeSelection(sender, eventArgs) {
        var results = eval('(' + eventArgs.get_value() + ')');
        document.getElementById('<%= hidGrade.ClientID %>').value = results.Value;
    }

     function OnGradesSelection(sender, eventArgs) {
        var results = eval('(' + eventArgs.get_value() + ')');
        document.getElementById('' + ctrlcom + '_EmployerInfo1_hdnGrades').value = results.Value;
    }
    function IsEmployeeAsPatient() {
        if (document.getElementById('' + ctrlcom + '_EmployerInfo1_chkEmpASPatient').checked) {
            document.getElementById('' + ctrlcom + '_EmployerInfo1_txtEmployeeName').value = document.getElementById('' + ctrlcom + '_txtDisplayname').innerHTML;
            for (var i = 0; i < document.getElementById('' + ctrlcom + '_EmployerInfo1_ddlrelation').length; i++) {
                if (document.getElementById('' + ctrlcom + '_EmployerInfo1_ddlrelation')[i].text == 'Self') {
                    document.getElementById('' + ctrlcom + '_EmployerInfo1_ddlrelation')[i].selected = true;
                }
            }
            document.getElementById('' + ctrlcom + '_EmployerInfo1_txtEmpContactNo').value = document.getElementById('' + ctrlcom + '_txtMobile1').value;
            document.getElementById('' + ctrlcom + '_EmployerInfo1_txtEmployeeName').disabled = true;
            document.getElementById('' + ctrlcom + '_EmployerInfo1_ddlrelation').disabled = true;
            document.getElementById('' + ctrlcom + '_EmployerInfo1_txtEmpContactNo').disabled = true;
        }
        else {
            document.getElementById('' + ctrlcom + '_EmployerInfo1_txtEmployeeName').value = '';
            document.getElementById('' + ctrlcom + '_EmployerInfo1_ddlrelation')[0].selected = true;
            document.getElementById('' + ctrlcom + '_EmployerInfo1_txtEmpContactNo').value = '';
            document.getElementById('' + ctrlcom + '_EmployerInfo1_txtEmployeeName').disabled = false;
            document.getElementById('' + ctrlcom + '_EmployerInfo1_ddlrelation').disabled = false;
            document.getElementById('' + ctrlcom + '_EmployerInfo1_txtEmpContactNo').disabled = false;
        }
    }*/
    function OnEmpNullValue(ctrl) {
        if (document.getElementById('' + ctrlcom + '_EmployerInfo1_uctpa_txtSearchControl').value != '') {
            OnNullValue(ctrl);
        }
        else {
            var ctrls = new Array();
            ctrls[0] = 'ctl00_ContentPlaceHolder1_EmployerInfo1_uctpa_txtSearchControl';
            /*ctrls[1] = 'ctl00_ContentPlaceHolder1_EmployerInfo1_txtEmploeeID';*/
            ctrls[2] = 'ctl00_ContentPlaceHolder1_EmployerInfo1_txtEmployeeName';
            ctrls[3] = 'ctl00_ContentPlaceHolder1_EmployerInfo1_txtEmpMRNo';
            ctrls[4] = 'ctl00_ContentPlaceHolder1_EmployerInfo1_txtEmpCardValidity';
            for (var i = 0; i < ctrls.length; i++) {
                var ctrlid = document.getElementById(ctrls[i]);
                ctrlid.style.border = "1px solid #bebebe";
            }
        }
    }
    function chkMobile(event) {
    if (document.getElementById('' + ctrlcom + '_EmployerInfo1_hdncmpdocname').value == "REG" || document.getElementById('' + ctrlcom + '_EmployerInfo1_hdncmpdocname').value == "OPQUICK" ){
        var phone = document.getElementById('' + ctrlcom + '_EmployerInfo1_txtEmpContactNo').value;
        if (phone != '') {
            for (i = 0; i < phone.length; i++) {
                var code = phone.charCodeAt(i);
                if (!(code >= 48 && code <= 57)) {
                    document.getElementById('' + ctrlcom + '_EmployerInfo1_txtEmpContactNo').value = "";
                    document.getElementById('' + ctrlcom + '_EmployerInfo1_txtEmpContactNo').focus();
                    return false;
                }
            }
            var val = phone.length;
            if (val < 10) {
                $(".stoast").toastText("warning", "please enter a valid phone number", 5, 3);
                /*alert('please enter a valid phone number');*/
                document.getElementById('' + ctrlcom + '_EmployerInfo1_txtEmpContactNo').value = '';
                document.getElementById('' + ctrlcom + '_EmployerInfo1_txtEmpContactNo').focus();
                return false;
            }
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
    /*function days_betwwen_dates(d1, d2) { commented bcz to it is already there in Validation.js
    var oneday = 24 * 60 * 60 * 1000;
    var date1 = new Date(d1).getTime();
    var date2 = new Date(d2).getTime();
    var diffdays = Math.abs(date1 - date2);
    return Math.round(diffdays / oneday);
    }*/
    function checkrefvalidDate(sender, args) {
    var dateformat = document.getElementById('<%=hdndateformat.ClientID %>').value;
    var split = dateformat.split(' ');
    var current_format = split[0];
        var selecteddate = new Date($(sender).val()).format('dd-MMM-yyyy'); var todaydate = new Date().format('dd-MMM-yyyy');
        var result = CompareDatesFunc(selecteddate, todaydate);
        if (result == "d1<d2") {
            $(".stoast").toastText("warning", "Referral validity should be greater than Today date", 5, 3);
            document.getElementById('' + ctrlcom + '_EmployerInfo1_txtlettervalidity').value = new Date().format(current_format);
        }
    }
   
    function checkrefissueDate(sender, args) {
     var dateformat = document.getElementById('<%=hdndateformat.ClientID %>').value;
    var split = dateformat.split(' ');
    var current_format = split[0];
        var selecteddate = new Date($(sender).val()).format('dd-MMM-yyyy'); var todaydate = new Date().format('dd-MMM-yyyy');
        var result = CompareDatesFunc(selecteddate, todaydate);
        if (result == "d1>=d2") {
            $(".stoast").toastText("warning", "Date of Issue should not be greater than Today date", 5, 3);
            document.getElementById('' + ctrlcom + '_EmployerInfo1_txtrefissuedt').value = new Date().format(current_format);
        }
        CheckRefValidDt(selecteddate);
    }
    $(document).ready(function () {
        $("[id*=chkDeptExists]").click(function () {
            if ($("[id*=chkDeptExists]").is(':checked') === true) {
                tdDept.style.display = 'block'; tdtxtDept.style.display = 'none';
            }
            else {
                tdDept.style.display = 'none'; tdtxtDept.style.display = 'block';
            }
        });
        //ctl00_ContentPlaceHolder1_EmployerInfo1_lblemployee
        var ClientName=document.getElementById('<%=hdnClientName.ClientID %>').value;    
        
        if(ClientName=="UHWI"||ClientName=="KNH"){
        document.getElementById('<%=lblemployee.ClientID %>').innerHTML ="Name";
        document.getElementById('<%=lblemployee1.ClientID %>').innerHTML ="Name";
        }
        else{
        document.getElementById('<%=lblemployee.ClientID %>').innerHTML ="Employee Name";
         document.getElementById('<%=lblemployee1.ClientID %>').innerHTML ="Employee Name";
        }
        $("[id*=ChkBrachExists]").click(function () {
            if ($("[id*=ChkBrachExists]").is(':checked') === true) {
                tdddlBrach.style.display = 'block'; tdtxtBranch.style.display = 'none';
            }
            else {
                tdddlBrach.style.display = 'none'; tdtxtBranch.style.display = 'block';
            }
        });
    });


    function IsRefLetNoExist() {
    //empinfo
        if ($('#'+ ctrlcom + '_EmployerInfo1_uctpa__hiddenID').val() == undefined || $('#'+ ctrlcom + '_EmployerInfo1_uctpa__hiddenID').val() == NaN) {
            $('#'+ ctrlcom + '_EmployerInfo1_uctpa__hiddenID').val(0);
        }

        if ($('#'+ ctrlcom + '_EmployerInfo1_uctpa__hiddenID').val() > 0 && $('#'+ ctrlcom + '_EmployerInfo1_txtrefletter').val() != '') {
            var orgid = $('#'+ ctrlcom + '_EmployerInfo1_uctpa__hiddenID').val();
            var refLetNo = $('#'+ ctrlcom + '_EmployerInfo1_txtrefletter').val();

            var UrlVal = ReturnIniUrl();
            $(document).ready(function (e) {
                $.ajax({
                    type: "POST",
                    url: UrlVal + "PatientRegistration.asmx/ChkRefLetNoExistOrNot",
                    data: "{'orgid': '" + orgid + "','refLetNo':'" + refLetNo + "'}",  //
                    contentType: "application/json; charset=utf-8",
                    dataType: "json",
                    success: function (msg) {
                        if (msg.d == true) {
                            $(".stoast").toastText("warning", "RefLetterNo:'" + refLetNo + "'Already Exist.Please Give Another Referal LetterNo.", 5, 3);
                            document.getElementById('' + ctrlcom + '_EmployerInfo1_txtrefletter').value = '';
                        }else{
                        //document.getElementById('' + ctrlcom + '_EmployerInfo1_chkcreditcheck')
                        var doc_name=document.getElementById('' + ctrlcom + '_EmployerInfo1_hdncmpdocname').value;
                        if(doc_name=="REG" || (doc_name=="OPD" && document.getElementById('' + ctrlcom + '_chk_old').checked==false)){
                            document.getElementById('' + ctrlcom + '_EmployerInfo1_chkcreditcheck').checked=true;
                         }
                        }
                        document.getElementById('' + ctrlcom + '_EmployerInfo1_hdnIsRefLetNoExistFlag').value = msg.d;
                        return msg.d;
                    },
                    error: function (msg) {
                        $(".stoast").toastText("warning", "Unable to connect Service.Pls Try again", 5, 3);
                        document.getElementById('' + ctrlcom + '_EmployerInfo1_hdnIsRefLetNoExistFlag').value = msg.d;
                        return msg.d;
                    }
                });
            });
        }
        CheckEligibilityConditions();
        return false;
    }
    
    function clear_cmp_dtls() {
        $('#'+ ctrlcom + '_EmployerInfo1_EmployerControl1_txtSearchControl').val('');
        $('#'+ ctrlcom + '_EmployerInfo1_uctpa_txtSearchControl').val('');
        $('#'+ ctrlcom + '_EmployerInfo1_ddlrelation').val('');
        $('#lk_btn_ctl00_ContentPlaceHolder1_EmployerInfo1_EmployerControl1').val('');
        $('#'+ ctrlcom + '_EmployerInfo1_btnCmpReg').val('');
        $('#'+ ctrlcom + '_EmployerInfo1_txtEmploeeID').val('');
        $('#'+ ctrlcom + '_EmployerInfo1_txtEmployeeName').val('');
        $('#'+ ctrlcom + '_EmployerInfo1_txtDesignation').val('');
        $('#'+ ctrlcom + '_EmployerInfo1_txtDept').val('');
        $('#'+ ctrlcom + '_EmployerInfo1_txtempgrade').val('');
        $('#'+ ctrlcom + '_EmployerInfo1_txtBranch').val('');
        $('#'+ ctrlcom + '_EmployerInfo1_txtEmpContactNo').val('');
        $('#'+ ctrlcom + '_EmployerInfo1_txtEmpMRNo').val('');
        $('#'+ ctrlcom + '_EmployerInfo1_txtdateofissue').val('');
        $('#'+ ctrlcom + '_EmployerInfo1_Button4').val('');
        $('#'+ ctrlcom + '_EmployerInfo1_txtEmpCardValidity').val('');
        $('#'+ ctrlcom + '_EmployerInfo1_ImageButton6').val('');
        $('#'+ ctrlcom + '_EmployerInfo1_txtemployername').val('');
        $('#'+ ctrlcom + '_EmployerInfo1_txtrefletter').val('');
        $('#'+ ctrlcom + '_EmployerInfo1_txtrefissuedt').val('');
        $('#'+ ctrlcom + '_EmployerInfo1_btnvalid').val('');
        $('#'+ ctrlcom + '_EmployerInfo1_txtlettervalidity').val('');
        $('#'+ ctrlcom + '_EmployerInfo1_Button3').val('');
        $('#'+ ctrlcom + '_EmployerInfo1_txtletterissuedby').val('');
        $('#'+ ctrlcom + '_EmployerInfo1_txtcreditlimitamt').val('');
    }
    function Calorgempperc(obj) {
      if(obj.id=="ctl00_ContentPlaceHolder1_EmployerInfo1_txtorgletterper"){
     var txtOrgpercent = document.getElementById('' + ctrlcom + '_EmployerInfo1_txtorgletterper').value;
    var txtEmppercent = document.getElementById('' + ctrlcom + '_EmployerInfo1_txtempletterper').value; 
      if(txtOrgpercent=='.00')txtOrgpercent=0;
    if ((txtOrgpercent != '' || txtOrgpercent != undefined || txtOrgpercent != NaN) && (parseFloat(txtOrgpercent) <= 100)) {
        document.getElementById('' + ctrlcom + '_EmployerInfo1_txtempletterper').value = 100 - parseFloat(txtOrgpercent);
         document.getElementById('' + ctrlcom + '_txtCorpPercentage').value=  parseFloat(txtOrgpercent);
          document.getElementById('' + ctrlcom + '_txtEmpPercentage').value=  parseFloat(document.getElementById('' + ctrlcom + '_EmployerInfo1_txtempletterper').value);
          Calculateempperpatper(obj);
        return false;
    }
    else {
        document.getElementById('' + ctrlcom + '_EmployerInfo1_txtorgletterper').value = 0;
        document.getElementById('' + ctrlcom + '_EmployerInfo1_txtempletterper').value = 100;     
}

     }
     else{
    var txtOrgpercent = $('[id*=txtorgletterper]').val();
    var txtEmppercent = $('[id*=txtempletterper]').val();
    if(txtOrgpercent=='.00')txtOrgpercent=0;{
     $('[id*=txtorgletterper]').val(txtOrgpercent);
     }
    if ((txtOrgpercent != '' || txtOrgpercent != undefined || txtOrgpercent != NaN) && (parseFloat(txtOrgpercent) <= 100)) {
       $('[id*=txtempletterper]').val(100 - parseFloat(txtOrgpercent))
        document.getElementById('' + ctrlcom + '_txtCorpPercentage').value=  parseFloat(txtOrgpercent);
         document.getElementById('' + ctrlcom + '_txtEmpPercentage').value=  parseFloat(document.getElementById('' + ctrlcom + '_EmployerInfo1_txtempletterper').value);
         Calculateempperpatper(obj);
        return false;
    }
    else {
    $('[id*=txtorgletterper]').val('0');
    $('[id*=txtempletterper]').val('100');
     }
     
     }
   }
   function Calcempperc(obj) {
            if(obj.id=="ctl00_ContentPlaceHolder1_EmployerInfo1_txtempletterper"){
       var txtOrgpercent = document.getElementById('' + ctrlcom + '_EmployerInfo1_txtorgletterper').value;
    var txtEmppercent = document.getElementById('' + ctrlcom + '_EmployerInfo1_txtempletterper').value; 

    if ((txtEmppercent != '' || txtEmppercent != undefined || txtEmppercent != NaN) && (parseFloat(txtEmppercent) <= 100)) {
        document.getElementById('' + ctrlcom + '_EmployerInfo1_txtorgletterper').value= 100 - parseInt(txtEmppercent);
        return false;
    }
    else {
        document.getElementById('' + ctrlcom + '_EmployerInfo1_txtorgletterper').value = 100;
        document.getElementById('' + ctrlcom + '_EmployerInfo1_txtempletterper').value = 0;  

      }
     }
     else{
    var txtOrgpercent = $('[id*=txtorgletterper]').val();
    var txtEmppercent = $('[id*=txtempletterper]').val();

    if ((txtEmppercent != '' || txtEmppercent != undefined || txtEmppercent != NaN) && (parseFloat(txtEmppercent) <= 100)) {
        $('[id*=txtorgletterper]').val(100 - parseInt(txtEmppercent))
        return false;
    }
    else {
    $('[id*=txtorgletterper]').val('100');
    $('[id*=txtempletterper]').val('0');

    }
    }
}
    function AssignEmpOrgPersentage(_d) {
        $('[id*=EmployerInfo1_txtorgletterper]').val(_d.ORG_PERCENT);
        $('[id*=EmployerInfo1_txtempletterper]').val(_d.EMP_PERCENT);
    }
    function changecolor()
    {
    if(document.getElementById('' + ctrlcom + '_EmployerInfo1_hdncmpdocname')!=null){
      if (document.getElementById('' + ctrlcom + '_EmployerInfo1_hdncmpdocname').value == "REG"||document.getElementById('' + ctrlcom + '_EmployerInfo1_hdncmpdocname').value == "OPD" ){
        var _chkValidation = true;
        var _ctrls = new Array();
           if (document.getElementById('' + ctrlcom + '_chk_old').checked == true) {
              _ctrls[1] = 'ctl00_ContentPlaceHolder1_uccorporate_EmployerInfo1_txtletterissuedby';
        _ctrls[2] = 'ctl00_ContentPlaceHolder1_uccorporate_EmployerInfo1_txtcreditlimitamt';
           }
           else{
        _ctrls[1] = 'ctl00_ContentPlaceHolder1_EmployerInfo1_txtletterissuedby';
        _ctrls[2] = 'ctl00_ContentPlaceHolder1_EmployerInfo1_txtcreditlimitamt';
        }

        for (var i = 0; i < _ctrls.length; i++) {
            var ctrl = document.getElementById(_ctrls[i]);
            if (OnNullValue(ctrl) == false) {
                _chkValidation = false;
            }
        }
    return _chkValidation;   
    }
    }
    if(document.getElementById('' + ctrlcom + '_uccorporate_EmployerInfo1_hdncmpdocname')!=null){
      if (document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnDocName').value == 'Cons' || document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnDocName').value == 'OP'  ){
        var _chkValidation = true;
        var _ctrls = new Array();
        _ctrls[1] = 'ctl00_ContentPlaceHolder1_uccorporate_EmployerInfo1_txtletterissuedby';
        _ctrls[2] = 'ctl00_ContentPlaceHolder1_uccorporate_EmployerInfo1_txtcreditlimitamt';

        for (var i = 0; i < _ctrls.length; i++) {
            var ctrl = document.getElementById(_ctrls[i]);
            if (OnNullValue(ctrl) == false) {
                _chkValidation = false;
            }
        }
    return _chkValidation;   
    }
    }
    }
</script>
<script type="text/javascript">
    /*   function wapvalidation(ev) {
    var wapvalue = document.getElementById('' + ctrlcom + '_EmployerInfo1_txtEmpMRNo').value;
    if (wapvalue.length > 15) {
    wapvalue = wapvalue.substr(0, parseInt(wapvalue.length - 1));
    document.getElementById('' + ctrlcom + '_EmployerInfo1_txtEmpMRNo').value = wapvalue;
    return false;
    }
    else {
    }
    }
    */
</script>
<asp:ScriptManagerProxy ID="_sProxy" runat="server">
</asp:ScriptManagerProxy>
<div class="panel-divW">
    <div class="panel-heading smallheading">
        <h3 class="panel-title">
            Company Details
        </h3>
    </div>
    <div class="panel-body">
        <table border="0" cellpadding="0" cellspacing="0" align="center" width="100%" class="FormsCtrl ">
                <tr>
                                <td>
                                 <div class="formflex flex-column">
                                        <div class="formelements flexresponsive flex-col-29" >
                                            <div class="formelementslbl flexresponsivelbl flex-col-24" " name="uc-cell">
                                                   <asp:Label ID="lblinsurenceName" runat="server" Text="Company/TPA" CssClass="ellip"></asp:Label>
                                            </div>
                                            <div class="formelementstxt">
                                                    <GenericSearch:GenericGrid ID="uctpa" runat="server" CallbackFn="OnTpaSelection"
                            OnBlurRequired="true" ToolTipMessage="select Tpa name" />
                                            </div>
                                        </div>
                                          <div class="formelements flexresponsiveshrt flex-col-20" >
                                            <div class="formelementslbl flexresponsiveshrtlbl flex-col-34" " name="uc-cell">
                                                   Policy Holder
                                            </div>
                                            <div class="formelementstxt">
                                                  <asp:DropDownList ID="ddlrelation" onchange="EmployeeAsPatient();" runat="server"
                            onblur="OnNullValue(this);" ToolTip="Select Relationship">
                        </asp:DropDownList>
                                            </div>
                                        </div>
                                           <div class="formelements flexresponsive flex-col-29" >
                                            <div id="tdinsurence" class="formelementslbl flexresponsivelbl flex-col-24" " name="uc-cell">
                                                          Insurance Name
                                            </div>
                                            <div class="formelementstxt " id="tdinsurencegrid">
                                     <div id="divEmployer" runat="server">
                                <GenericSearch:GenericGrid ID="EmployerControl1" runat="server" CallbackFn="OnCompany"
                                    OnBlurRequired="true" ToolTipMessage="select Employer name" />
                            </div>
                            <div id="divComapny" runat="server" style="display: none;">
                                <GenericSearch:GenericGrid ID="CmpLookup" runat="server" CallbackFn="OnCompSelection" />
                            </div>
                            <div class="txtbtn">
                                <asp:Button ID="btnCmpReg" runat="server" CssClass="tb_Btn quickadd" Text="" OnClientClick="return showCompPopup();"
                                    ToolTip="Corp Reg" />
                            </div>
                                            </div>
                                        </div>
                                          
                                              <div class="formelements flexresponsiveshrt flex-col-20" >
                                            <div class="formelementslbl flexresponsiveshrtlbl flex-col-32" " name="uc-cell">
                                                    Employee ID
                                            </div>
                                            <div class="formelementstxt">
                                           <asp:TextBox ID="txtEmploeeID" runat="server" MaxLength="32" ToolTip="Enter Employee Id"
                            onblur="OnNullValue(this);"></asp:TextBox>
                                            </div>
                                        </div>
                                         <div class="formelements flexresponsive flex-col-29" >
                                            <div class="formelementslbl flexresponsivelbl flex-col-24" " name="uc-cell">
                                                     <asp:Label ID="lblemployee" runat="server"></asp:Label>
                                            </div>
                                            <div class="formelementstxt">
                                          <asp:TextBox ID="txtEmployeeName" runat="server" MaxLength="64" CssClass="tbwidth"
                            onblur="UpperCase(this);OnNullValue(this);" ToolTip="Enter Employee Name" onkeypress="return OnlyCharecters(event);"></asp:TextBox>
                        <asp:Label style="display:none;" ID="lblemployee1" runat="server"></asp:Label>
                                            </div>
                                        </div>
                                                    <div class="formelements flexresponsiveshrt flex-col-20" >
                                            <div  class="formelementslbl flexresponsiveshrtlbl flex-col-34" " name="uc-cell">
                                                           Grade
                                            </div>
                                            <div class="formelementstxt " id="Div3">
                                      <asp:HiddenField ID="hidGrade" runat="server" />
                        <asp:HiddenField ID="hdnGrades" runat="server" />
                        <asp:DropDownList ID="txtempgrade" runat="server">
                        </asp:DropDownList>
                                            </div>
                                        </div>
                                          <div class="formelements flexresponsive flex-col-29" >
                                            <div class="formelementslbl flexresponsivelbl flex-col-24" " name="uc-cell">
                                                    <asp:Label ID="lblemployername" Text="Employer Name" runat="server"></asp:Label>
                                            </div>
                                            <div class="formelementstxt">
                                            <asp:TextBox ID="txtemployername" onblur="UpperCase(this);" runat="server"></asp:TextBox>
                                            </div>
                                        </div>
                                            <div class="formelements flexresponsiveshrt flex-col-20" >
                                            <div class="formelementslbl flexresponsiveshrtlbl flex-col-32" " name="uc-cell">
                                                           Card Issue Dt
                                            </div>
                                            <div class="formelementstxt">
                                      <asp:TextBox ID="txtdateofissue" placeHolder="-- Select Date --" onchange="OnNullValue(this);"
                            runat="server" ReadOnly="true"></asp:TextBox>
                                            </div>
                                                    
<%--                                                 <div class="formelements flexresponsiveshrt flex-col-20" >
                                            <div class="formelementslbl flexresponsiveshrtlbl flex-col-32" " name="uc-cell">
                                                         Card Expiry Dt
                                            </div>
                                            <div class="formelementstxt">
                                    <asp:TextBox ID="txtEmpCardValidity" runat="server" MaxLength="15" placeHolder="-- Select Date --"
                            onchange="OnNullValue(this);" ReadOnly="true"></asp:TextBox>
                                            </div>--%>
                                        </div>
                                              <div class="formelements flexresponsive flex-col-29" >
                                            <div class="formelementslbl flexresponsivelbl flex-col-24" " name="uc-cell">
                                                           <asp:Label ID="lblcard" Text="Medical Card#" runat="server"></asp:Label>
                                            </div>
                                            <div class="formelementstxt">
                                 <asp:TextBox ID="txtEmpMRNo" runat="server" MaxLength="16" ToolTip="Enter medicalcard no"
                            onblur="OnNullValue(this); return AlphaNumaric(event);" onkeypress="return NumCharsSpaceWithHiphen(event);"></asp:TextBox>
                                            </div>
                                        </div>
                                                 <div class="formelements flexresponsiveshrt flex-col-20" >
                                            <div class="formelementslbl flexresponsiveshrtlbl flex-col-34" " name="uc-cell">
                                                         Card Expiry Dt
                                            </div>
                                            <div class="formelementstxt">
                                    <asp:TextBox ID="txtEmpCardValidity" runat="server" MaxLength="15" placeHolder="-- Select Date --"
                            onchange="OnNullValue(this);" ReadOnly="true"></asp:TextBox>
                                            </div>
                                            <%--    <div class="formelements flexresponsiveshrt flex-col-20" >
                                            <div class="formelementslbl flexresponsiveshrtlbl flex-col-34" " name="uc-cell">
                                                           Card Issue Dt
                                            </div>
                                            <div class="formelementstxt">
                                      <asp:TextBox ID="txtdateofissue" placeHolder="-- Select Date --" onchange="OnNullValue(this);"
                            runat="server" ReadOnly="true"></asp:TextBox>
                                            </div>--%>
                                        </div>
                                          <div class="formelements flexresponsive flex-col-29" >
                                            <div class="formelementslbl flexresponsivelbl flex-col-24" " name="uc-cell">
                                                        Department
                                            </div>
                                            <div class="formelementstxt">
                                    <div id="tdtxtDept">
                            <asp:TextBox ID="txtDept" runat="server" ToolTip="Enter Dept" onkeypress="return OnlyCharecters(event);"
                                MaxLength="32"></asp:TextBox>
                            <asp:HiddenField ID="hdndept" runat="server" />
                            <ajaxToolkit:AutoCompleteExtender ID="AutoCompleteExtender1" runat="server" TargetControlID="txtDept"
                                UseContextKey="true" ServiceMethod="GetAutoComp_Dept" ServicePath="~/AutoCompleteService.asmx"
                                OnClientItemSelected="OnDeptSelection" EnableCaching="false" CompletionSetCount="10"
                                MinimumPrefixLength="1" CompletionInterval="5" CompletionListCssClass="autocomplete_completionListElement"
                                CompletionListItemCssClass="autocomplete_listItem" ContextKey="DEPARTMENT" CompletionListHighlightedItemCssClass="autocomplete_highlightedListItem">
                            </ajaxToolkit:AutoCompleteExtender>
                        </div>
                        <div id="tdDept" style="display: none">
                            <asp:DropDownList ID="ddlCorpDept" runat="server">
                            </asp:DropDownList>
                        </div>
                        <asp:CheckBox ID="chkDeptExists" Text=" From&nbsp;Exists" Visible="false" runat="server" />
                                            </div>
                                        </div>
                                               
                                                        <div class="formelements flexresponsiveshrt flex-col-20" >
                                            <div  class="formelementslbl flexresponsiveshrtlbl flex-col-32" " name="uc-cell">
                                                          Contact#
                                            </div>
                                            <div class="formelementstxt " id="Div4">
                                    <asp:TextBox ID="txtEmpContactNo" runat="server" MaxLength="10" onblur="return chkMobile(this);"
                            onkeypress="return chkNumeric(event);" ToolTip="Enter Contact No"></asp:TextBox>
                                            </div>
                                        </div>
                                             <div class="formelements flexresponsive flex-col-29" >
                                            <div class="formelementslbl flexresponsivelbl flex-col-24" " name="uc-cell">
                                                      Designation
                                            </div>
                                            <div class="formelementstxt">
                                      <asp:TextBox ID="txtDesignation" runat="server" onblur="UpperCase(this);" ToolTip="Enter Designation"
                            onkeypress="return OnlyCharecters(event);" MaxLength="32"></asp:TextBox>
                                            </div>
                                        </div>
                                                      <div class="formelements flexresponsiveshrt flex-col-20" >
                                            <div  class="formelementslbl  flexresponsiveshrtlbl flex-col-34" " name="uc-cell">
                                                            Branch/Division
                                            </div>
                                            <div class="formelementstxt " id="Div5">
                                    <div id="tdtxtBranch">
                            <asp:DropDownList ID="txtBranch" runat="server">
                            </asp:DropDownList>
                            <asp:HiddenField ID="hdnbranch" runat="server" />
                            <asp:HiddenField ID="hdndivision" runat="server" />
                        </div>
                        <div id="tdddlBrach" style="display: none">
                            <asp:DropDownList ID="ddlCorpBranch" runat="server">
                            </asp:DropDownList>
                        </div>
                        <asp:CheckBox ID="ChkBrachExists" Text=" From&nbsp;Exists" Visible="false" runat="server" />
                                            </div>
                                        </div>
                                        </div>
                                        </td>
                                        </tr>
                                        

        </table>
    </div>
</div>
<div class="panel-divW">
    <div class="panel-heading smallheading">
        <h3 class="panel-title">
            Referral Letter Details
        </h3>
    </div>
    <div class="panel-body">
        <table border="0" cellpadding="0" cellspacing="0" align="center" width="100%" class="FormsCtrl">
        <tr>
                                <td>
                                 <div class="formflex  flex-column">
                                        <div class="formelements flexresponsiveshrt flex-col-24" >
                                            <div class="formelementslbl flexresponsiveshrtlbl flex-col-28" id="tdlblletteropd" name="uc-cell">
                                                 LOA#
                                            </div>
                                            <div class="formelementstxt">
                                                   <div style="display: none" id="tdreflookup">
                                                    <GenericSearch:GenericGrid ID="ucRefLetterNo" runat="server" CallbackFn="OnRefLtSelection" />
                                                      </div>
                                                    <div id="tdtxtrefletter">
                                                       <asp:TextBox ID="txtrefletter" runat="server" Enabled="true" onblur="OnNullValue(this); oncolorchange(this);return IsRefLetNoExist();" onkeyup="changecolor(this);"></asp:TextBox>
                                                     </div>
                                            </div>
                                        </div>
                                       
                                             <div class="formelements flexresponsiveshrt flex-col-24" >
                                            <div class="formelementslbl flexresponsiveshrtlbl flex-col-28" name="uc-cell">
                                                 Ref Issue Dt
                                            </div>
                                            <div class="formelementstxt">
                              <asp:TextBox ID="txtrefissuedt" placeHolder="-- Select Date --" runat="server" ReadOnly="true"></asp:TextBox>
                                            </div>
                                        </div>
                                            <div class="formelements flexresponsiveshrt flex-col-24" >
                                            <div class="formelementslbl flexresponsiveshrtlbl flex-col-28" name="uc-cell">
                                                  Ref Expiry Dt
                                            </div>
                                            <div class="formelementstxt">
                                <asp:TextBox ID="txtlettervalidity" placeHolder="-- Select Date --" runat="server"
                            ReadOnly="true"></asp:TextBox>
                                            </div>
                                        </div>
                                           <div class="formelements flexresponsiveshrt flex-col-24" >
                                            <div class="formelementslbl flexresponsiveshrtlbl flex-col-28" name="uc-cell">
                                                  <asp:Label ID="lblpolicytype" Text="Policy Type" runat="server"></asp:Label>
                                            </div>
                                            <div class="formelementstxt">
                               <asp:DropDownList ID="ddlpolicytype" Enabled="false" onchange="return PolicyChange(this);"
                            runat="server">
                        </asp:DropDownList>
                                            </div>
                                        </div>
                                            <div class="formelements flexresponsiveshrt flex-col-24" >
                                            <div class="formelementslbl flexresponsiveshrtlbl flex-col-28" name="uc-cell">
                                                 <asp:Label ID="lblsuminsured" Text="Sum Insured" runat="server"></asp:Label>
                                            </div>
                                            <div class="formelementstxt">
                           <asp:TextBox ID="txtsuminsured" runat="server" MaxLength="7" Enabled="false" onkeypress="return chkNumeric(event);"></asp:TextBox>
                                            </div>
                                        </div>
                                                 <div class="formelements flexresponsiveshrt flex-col-24" >
                                            <div class="formelementslbl flexresponsiveshrtlbl flex-col-28" name="uc-cell">
                                                <asp:Label ID="lblletterissueby" Text="Letter Issued By" runat="server"></asp:Label></label>
                                            </div>
                                            <div class="formelementstxt">
                              <asp:TextBox ID="txtletterissuedby" runat="server" onblur=" OnNullValue(this); oncolorchange(this);UpperCase(this);"
                            MaxLength="18" onkeypress="return OnlyCharecters(event);"></asp:TextBox>
                                            </div>
                                        </div>

                                                    <div class="formelements flexresponsiveshrt flex-col-24" >
                                            <div class="formelementslbl flexresponsiveshrtlbl flex-col-28" name="uc-cell">
                                                 Letter Credit
                                            </div>
                                            <div class="formelementstxt">
                               <asp:TextBox ID="txtcreditlimitamt" runat="server" MaxLength="9" onkeypress="return chkNumeric(event);"
                            onkeyup="chkunlimitamt(this);" onpaste="return false;" onblur="OnNullValue(this);" CssClass="Aright"></asp:TextBox>
                                            </div>
                                        </div>
                                                      <div class="formelements flexresponsiveshrt flex-col-24" >
                                            <div class="formelementslbl flexresponsiveshrtlbl flex-col-55" name="uc-cell">
                                                   ORG / EMP %
                                            </div>
                                            <div class="formelementstxt flex-col-20">
                                    <asp:TextBox ID="txtorgletterper" runat="server" MaxLength="6" Width="45%" onkeypress="return chkNumeric(event);"
                            onkeyup="Calorgempperc(this);" CssClass="Aright"></asp:TextBox>/
                        <asp:TextBox ID="txtempletterper" runat="server" MaxLength="3" Width="45%" onkeypress="return chkNumeric(event);"
                            onkeyup="Calcempperc(this);" CssClass="Aright" disabled="disabled"></asp:TextBox>
                                            </div>
                                        </div>
                                                        <div class="formelements flexresponsiveshrt flex-col-24" >
                                            <div class="formelementslbl flexresponsiveshrtlbl flex-col-28" name="uc-cell">
                                                   Company Credit
                                            </div>
                                            <div class="formelementstxt">
                                   <asp:TextBox ID="txtcmpcredit" runat="server" Enabled="false"></asp:TextBox>
                                            </div>
                                        </div>
                                                          <div class="formelements flexresponsiveshrt flex-col-24" id="tdempdue" style="display: none">
                                            <div class="formelementslbl " name="uc-cell">
                                             
                                            </div>
                                            <div class="formelementstxt">
                                     <asp:CheckBox ID="chkEmpDue" runat="server" Text="Emp Due" />
                                            </div>
                                        </div>
                                        <div class="formelements flexresponsiveshrt flex-col-24" style="display: none;" id="tdeward1">
                                            <div class="formelementslbl flexresponsiveshrtlbl flex-col-28" name="uc-cell">
                                                   Eligible Ward
                                            </div>
                                            <div class="formelementstxt">
                                  <GenericSearch:GenericGrid ID="ucEWard" runat="server" Enabled="false" CallbackFn="OnEWardSelect" />
                                            </div>
                                        </div>
                                          <div class="formelements flexresponsiveshrt flex-col-24"  id="Div1">
                                          
                                            <div class="formelementstxt" >
                                 <asp:CheckBox ID="chkcreditcheck" class="ellip" runat="server" CssClass="Credit unlimited"
                        Text="Credit unlimited" onclick="chklimitamt(this);" />
                                            </div>
                                        </div>
                                                       <div class="formelements flexresponsive flex-col-24" style="display: none;" id="Div2">
                                            <div class="formelementslbl flex-col-28" name="uc-cell">
                                                     Remarks
                                            </div>
                                            <div class="formelementstxt">
                                 <asp:TextBox ID="txtempremarks" TextMode="MultiLine" runat="server" onblur=" OnNullValue(this); oncolorchange(this);UpperCase(this);"
                            onkeypress="return OnlyCharecters(event);"></asp:TextBox>
                                            </div>
                                        </div>
                                            <div class="formelements validfor flexresponsive flex-col-29" >
                                            <div class="formelementslbl flex-col-23"  name="uc-cell">
                                                 Valid For
                                            </div>
                                            <div class="formelementstxt">
                                                           <asp:DropDownList ID="ddlvldfr" Enabled="false" runat="server" width="25%" style="float: left;">
                            <asp:ListItem Text="OP"></asp:ListItem>
                            <asp:ListItem Text="IP"></asp:ListItem>
                        </asp:DropDownList>      <div id="divOPValid" style="width:75%;float: left;">
                            <asp:CheckBox ID="chkCons" Text="Consultation" runat="server" />
                            <asp:CheckBox ID="chkOPBill" Text="OP Bill" runat="server"/>
                            <asp:CheckBox ID="chkPharmacy" Text="Pharmacy" runat="server"  />
                        </div>
                                            </div>
                                        </div>
                                        </div>
                                        </td>
                                        </tr>


          
      
            <tr>
           
                <td id="tdlettertype" style="display: none">
                    <input type="button" class="button" name="Letter Type" id="btnlettertype" value="Letter Type"
                        onclick="return LetterTypeBind();" />
                </td>
            </tr>
        </table>
    </div>
</div>
<%--<div style="display: none;">
    <asp:CheckBox ID="chkiscorporate" runat="server" Text="Is Corporate Patient" />
    Company Code
    <asp:TextBox ID="lblCmpCode" runat="server" ReadOnly="true" CssClass="tbwidth">
    </asp:TextBox>
    Company Fee
    <asp:TextBox ID="txtCmpFee" runat="server" ReadOnly="true">
    </asp:TextBox>
    Basic Salary
    <asp:TextBox ID="txtSalary" runat="server" ToolTip="Enter Basic Salary" onkeypress="return isNumericKeyStroke(event);"
        Style="text-align: right"></asp:TextBox>
    <asp:CheckBox ID="chkEmpASPatient" runat="server" Text="Employee same as Patient"
        onclick="IsEmployeeAsPatient();" />
</div>--%>
<div id="pnlGridPop" width="600px" style="display: none" runat="server" class="masking">
    <div class="cmask">
    </div>
    <div class="clientpopup" style="width: 750px; height: 500px; margin-left: -375px;
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
            </div>
            <input type="button" id="btncancel" class="button" value="&times;" onclick="return btnclosetype();" />
            <div style="float: right; margin: 6px; display: none">
                <i class="tb_Btn icon-upload-1" id="lettypeupload" onclick="return OnLoadUploadPhoto(this,'L');"
                    title="Upload Document" style="margin-left: 2px; line-height: 100%; font-size: 16px;
                    padding-top: 2px;"></i><i class="tb_Btn icon-download" id="lettypedownload" onclick="return OnLoadDownloadPhoto(this);"
                        title="Download Document" style="margin-left: 9px; line-height: 100%; font-size: 16px;
                        padding-top: 2px;"></i>
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
                                UMR NO
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
<asp:HiddenField ID="hdnoldregtpaid" runat="server" />
<asp:HiddenField ID="hdnregexpdt" runat="server" />
<asp:HiddenField ID="hdnIsRefLetNoExistFlag" runat="server" />
<asp:HiddenField ID="hdncmpquick" runat="server" />
<asp:HiddenField ID="hdndateformat" runat="server" />
<asp:HiddenField ID="hdnOPDBlock" runat="server" />
<asp:HiddenField ID="hdncmpdocname" runat="server" />
<asp:HiddenField ID="hdnClientName" runat="server" />
<asp:HiddenField ID="hdntpaid" runat="server" />
<asp:HiddenField ID="hdncreditlimitamount" runat="server" />
<asp:HiddenField ID="hdnEmplookup" runat="server" />
